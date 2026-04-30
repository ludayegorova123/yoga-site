"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/yoga-courses",    label: t.nav.yogaCourses },
    { href: "/wellness-travel", label: t.nav.wellnessTravel },
    { href: "/coaching",        label: t.nav.coaching },
  ];

  return (
    <footer className="bg-bark text-sand/80">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sage/30 bg-cream">
                <Image
                  src="/images/logo_orange.png"
                  alt="Ludmila Yegorova"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 28%", transform: "scale(1.7)", transformOrigin: "50% 28%" }}
                />
              </div>
              <div>
                <p className="font-display text-sm font-semibold tracking-widest uppercase text-off-white leading-none">
                  Ludmila Yegorova
                </p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-sage-light mt-0.5">
                  {t.nav.tagline}
                </p>
              </div>
            </div>
            <p className="font-display text-xl italic text-sand leading-snug">
              &ldquo;{t.footer.tagline}&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-sand/50 mb-4">
              {t.footer.explore}
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-terra transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <p className="font-body text-xs tracking-widest uppercase text-sand/50 mb-4">
              {t.footer.connect}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:kievyogaclass@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-terra transition-colors duration-200"
              >
                <Mail size={15} />
                kievyogaclass@gmail.com
              </a>
              <a
                href="https://www.instagram.com/yoga_lifecoach/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-terra transition-colors duration-200"
              >
                <Instagram size={15} />
                @yoga_lifecoach
              </a>
              <a
                href="https://t.me/yoga_coaching"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-terra transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
                </svg>
                {t.footer.telegram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sand/10 text-center text-xs text-sand/30">
          © {new Date().getFullYear()} Людмила Єгорова. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
