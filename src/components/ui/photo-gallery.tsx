"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/portrait.jpg",           category: "about",    alt: "Ludmila Yegorova" },
  { src: "/images/yoga-namaste.jpg",        category: "yoga",     alt: "Namaste pose" },
  { src: "/images/yoga-outdoor.jpg",        category: "yoga",     alt: "Outdoor yoga practice" },
  { src: "/images/yoga-twist.jpg",          category: "yoga",     alt: "Seated twist" },
  { src: "/images/travel-desert-dunes.jpg", category: "travel",   alt: "Desert dunes" },
  { src: "/images/travel-grand-canyon.jpg", category: "travel",   alt: "Grand Canyon" },
  { src: "/images/travel-death-valley.jpg", category: "travel",   alt: "Death Valley" },
  { src: "/images/travel-red-rock.jpg",     category: "travel",   alt: "Red Rock Canyon" },
  { src: "/images/travel-sequoia.jpg",      category: "travel",   alt: "Giant Sequoias" },
  { src: "/images/community.jpg",           category: "community", alt: "Community gathering" },
];

const categories = [
  { key: "all",       label: "Всі" },
  { key: "yoga",      label: "Йога" },
  { key: "travel",    label: "Подорожі" },
  { key: "community", label: "Спільнота" },
  { key: "about",     label: "Про мене" },
];

export function PhotoGallery() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? photos : photos.filter((p) => p.category === active);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* ── Category filter tabs ── */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => { setActive(cat.key); setLightbox(null); }}
            className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-200 ${
              active === cat.key
                ? "bg-terra text-white shadow-sm"
                : "bg-cream text-bark/70 hover:bg-sand/40 hover:text-bark"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Masonry grid ── */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((photo, i) => (
          <div
            key={photo.src}
            className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group"
            onClick={() => setLightbox(i)}
          >
            <div className="relative w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/25 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-body text-sm tracking-widest uppercase">
                Переглянути
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-bark/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-sand/70 hover:text-white transition-colors duration-200 z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-sand/70 hover:text-white transition-colors duration-200 z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={36} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={1600}
              className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
            {/* Caption */}
            <p className="text-center font-body text-sm text-sand/50 mt-3">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sand/70 hover:text-white transition-colors duration-200 z-10 p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={36} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
