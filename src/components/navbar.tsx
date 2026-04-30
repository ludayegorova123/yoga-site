"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const navLinks = [
  { href: "/yoga-courses",    key: "yogaCourses" as const },
  { href: "/wellness-travel", key: "wellnessTravel" as const },
  { href: "/coaching",        key: "coaching" as const },
  { href: "/gallery",         key: "gallery" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, t, toggle } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/90 backdrop-blur-md border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-cream border border-sage/40 flex-shrink-0">
            <Image
              src="/images/logo_orange.png"
              alt="Ludmila Yegorova"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 28%", transform: "scale(1.7)", transformOrigin: "50% 28%" }}
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-widest uppercase text-bark leading-none">
              Ludmila Yegorova
            </p>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-sage mt-0.5">
              {t.nav.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-5 py-2 font-body text-sm tracking-wide transition-colors duration-200
                  ${isActive
                    ? "text-terra font-medium"
                    : "text-bark/70 hover:text-bark"
                  }
                `}
              >
                {t.nav[link.key]}
                {isActive && (
                  <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-terra rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="ml-4 px-5 py-2 bg-terra text-off-white text-sm font-medium rounded-full hover:bg-terra-dark transition-colors duration-200"
          >
            {t.nav.workWithMe}
          </Link>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="ml-3 flex items-center gap-1 px-3 py-1.5 rounded-full border border-bark/20 hover:border-terra hover:text-terra text-bark/60 text-xs font-body font-medium tracking-widest uppercase transition-colors duration-200"
            aria-label="Toggle language"
          >
            <span className={lang === "uk" ? "text-terra font-semibold" : ""}>UA</span>
            <span className="text-bark/30">|</span>
            <span className={lang === "en" ? "text-terra font-semibold" : ""}>EN</span>
          </button>
        </nav>

        {/* Mobile right side: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-bark/20 hover:border-terra hover:text-terra text-bark/60 text-xs font-body font-medium tracking-widest uppercase transition-colors duration-200"
            aria-label="Toggle language"
          >
            <span className={lang === "uk" ? "text-terra font-semibold" : ""}>UA</span>
            <span className="text-bark/30">|</span>
            <span className={lang === "en" ? "text-terra font-semibold" : ""}>EN</span>
          </button>
          <button
            className="p-2 text-bark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-off-white border-t border-sand/40 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-base font-body ${
                  isActive ? "text-terra font-medium" : "text-bark/80"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-2.5 bg-terra text-off-white text-sm font-medium rounded-full text-center"
          >
            {t.nav.workWithMe}
          </Link>
        </div>
      )}
    </header>
  );
}
