"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Heart, Lightbulb, Target, Star } from "lucide-react";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import { ContactForm } from "@/components/ui/contact-form";
import { useLanguage } from "@/context/language-context";

const pillarIcons = [
  <Heart key="heart" size={22} />,
  <Lightbulb key="lightbulb" size={22} />,
  <Target key="target" size={22} />,
];

const programImages = [
  "/images/yoga-outdoor.jpg",
  "/images/community.jpg",
];

export default function CoachingPage() {
  const { t } = useLanguage();
  const c = t.coaching;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/community.jpg"
            alt="Women coaching community"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/90 via-bark/40 to-bark/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 text-off-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-terra inline-block" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
              {c.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-2xl mb-4">
            Grow. Thrive.{" "}
            <span className="italic text-terra">Flourish.</span>
          </h1>
          <p className="font-body text-lg text-sand/90 max-w-xl mb-8 leading-relaxed">
            {c.body}
          </p>
          <Link
            href="#programs"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-terra text-white font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
          >
            {c.cta} <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── MY APPROACH ─────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-terra inline-block" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                {c.approachEyebrow}
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl font-bold text-bark leading-tight">
              {c.approachH2a}{" "}
              <span className="italic text-sage-dark">{c.approachH2b}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Calendly booking */}
            <div className="bg-off-white rounded-3xl overflow-hidden border border-sand/30 shadow-sm">
              <div className="px-6 pt-6 pb-2">
                <h3 className="font-display text-2xl font-bold text-bark mb-1">
                  {c.bookingH}
                </h3>
                <p className="font-body text-sm text-bark/60">
                  {c.bookingSub}
                </p>
              </div>
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/kievyogaclass"
                style={{ minWidth: "320px", height: "600px" }}
              />
            </div>

            {/* Right: three approach pillars */}
            <div className="grid grid-cols-1 gap-4">
              {c.pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="flex gap-4 p-6 bg-off-white rounded-2xl border border-sand/30"
                >
                  <div className="w-11 h-11 rounded-xl bg-terra/10 flex items-center justify-center text-terra flex-shrink-0 mt-0.5">
                    {pillarIcons[i]}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-bark mb-1">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-sm text-bark/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}

              <p className="font-body text-sm italic text-bark/50 text-center pt-2">
                {c.approachQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ────────────────────────────────────────── */}
      <section id="programs" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-terra inline-block" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                {c.programsEyebrow}
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              {c.programsH2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.programs.map((program, i) => (
              <div
                key={program.title}
                className="bg-cream rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={programImages[i]}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-off-white/20 backdrop-blur-sm text-off-white text-xs font-body rounded-full border border-white/20">
                      {program.format}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="font-body text-xs tracking-widest uppercase text-sage font-medium mb-1">
                    {program.duration}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-bark mb-3">
                    {program.title}
                  </h3>
                  <p className="font-body text-sm text-bark/70 leading-relaxed mb-3">
                    {program.description}
                  </p>
                  <p className="font-body text-xs italic text-sage-dark mb-5">
                    {program.forWho}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-bark text-off-white text-sm font-medium rounded-full hover:bg-bark-dark transition-colors duration-200"
                  >
                    {c.applyBtn} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="bg-bark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-terra fill-terra" />
              ))}
            </div>
            <h2 className="font-display text-4xl font-bold text-off-white">
              {c.testimonialsH2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-6 bg-bark-light/20 rounded-3xl border border-sand/10">
                <p className="font-display text-base italic text-sand/90 leading-relaxed mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-body text-sm font-semibold text-off-white">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-sand/50">{testimonial.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL ─────────────────────────────────────── */}
      <CalendlyEmbed
        url="https://calendly.com/kievyogaclass"
        heading={c.calendlyH}
        subheading={c.calendlySub}
      />

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className="bg-bark py-20" id="contact">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-terra inline-block" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                {c.contactEyebrow}
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl font-bold text-off-white mb-3">
              {c.contactH2}
            </h2>
            <p className="font-body text-base text-sand/70">
              {c.contactBody}
            </p>
          </div>
          <ContactForm subject={c.contactSubject} dark />
        </div>
      </section>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
