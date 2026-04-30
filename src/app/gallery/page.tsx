import type { Metadata } from "next";
import { PhotoGallery } from "@/components/ui/photo-gallery";

export const metadata: Metadata = {
  title: "Gallery — Ludmila Yegorova",
  description: "Photos from yoga practice, wellness travel, and community gatherings with Ludmila Yegorova.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="pt-32 pb-12 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-terra inline-block" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
              Фотогалерея
            </span>
            <span className="h-px w-8 bg-terra inline-block" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-bark mb-4">
            Moments &amp;{" "}
            <span className="italic text-terra">Memories</span>
          </h1>
          <p className="font-body text-base text-bark/60 max-w-lg mx-auto leading-relaxed">
            Погляд у світ йоги, подорожей і спільноти.
            Фільтруй за категорією або натисни на фото, щоб розглянути детальніше.
          </p>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section className="bg-off-white pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <PhotoGallery />
        </div>
      </section>
    </>
  );
}
