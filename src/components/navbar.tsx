"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/yoga-courses", label: "Yoga Courses" },
  { href: "/wellness-travel", label: "Wellness Travel" },
  { href: "/coaching", label: "Coaching" },
  { href: "/gallery", label: "Gallery" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
              Yoga · Travel · Coaching
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
                {link.label}
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
            Work with Me
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-bark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
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
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-2.5 bg-terra text-off-white text-sm font-medium rounded-full text-center"
          >
            Work with Me
          </Link>
        </div>
      )}
    </header>
  );
}
