"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const accordionBase = [
  {
    id: 1,
    title: "Yoga Courses",
    imageUrl: "/images/yoga-namaste.jpg",
    href: "/yoga-courses",
  },
  {
    id: 2,
    title: "Wellness Travel",
    imageUrl: "/images/travel-desert-dunes.jpg",
    href: "/wellness-travel",
  },
  {
    id: 3,
    title: "Coaching",
    imageUrl: "/images/community.jpg",
    href: "/coaching",
  },
];

export function PillarAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <>
      {/* ── MOBILE: vertical stack, tap to expand ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {accordionBase.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                isActive ? "h-64" : "h-16"
              }`}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-bark/80 via-bark/30 to-transparent"
                    : "bg-bark/55"
                }`}
              />

              {/* Collapsed: horizontal label */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center px-5">
                  <span className="text-off-white text-sm font-body font-medium tracking-widest uppercase">
                    {item.title}
                  </span>
                </div>
              )}

              {/* Expanded: content at bottom */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 p-5 text-off-white">
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-terra-light mb-0.5">
                    {t.accordion[index].subtitle}
                  </p>
                  <h3 className="font-display text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-sand/90 mb-3 leading-relaxed line-clamp-2">
                    {t.accordion[index].description}
                  </p>
                  <Link
                    href={item.href}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-terra text-white text-sm font-medium rounded-full hover:bg-terra-dark transition-colors duration-200"
                  >
                    {t.accordion[index].btn} <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP: horizontal hover accordion ── */}
      <div className="hidden md:flex flex-row items-stretch gap-3 py-2">
        {accordionBase.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              className={`relative h-[500px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
                transition-all duration-700 ease-in-out
                ${isActive ? "w-[420px]" : "w-[80px]"}
              `}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-bark/80 via-bark/20 to-transparent"
                    : "bg-bark/50"
                }`}
              />

              {/* Inactive vertical label */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-off-white text-sm font-body font-medium tracking-widest uppercase whitespace-nowrap rotate-90">
                    {item.title}
                  </span>
                </div>
              )}

              {/* Active content */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 p-6 text-off-white">
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-terra-light mb-1">
                    {t.accordion[index].subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-sand/90 mb-4 leading-relaxed">
                    {t.accordion[index].description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-terra text-white text-sm font-medium rounded-full hover:bg-terra-dark transition-colors duration-200"
                  >
                    {t.accordion[index].btn} <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
