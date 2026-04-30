"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import { ContactForm } from "@/components/ui/contact-form";
import { useLanguage } from "@/context/language-context";

const courseImages = [
  "/images/yoga-outdoor.jpg",
  "/images/yoga-twist.jpg",
  "/images/yoga-namaste.jpg",
];

export default function YogaCoursesPage() {
  const { t } = useLanguage();
  const y = t.yoga;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/yoga-namaste.jpg"
            alt="Yoga practice"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/90 via-bark/40 to-bark/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 text-off-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-terra inline-block" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
              {y.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-2xl mb-4">
            Move. Breathe.{" "}
            <span className="italic text-terra">Transform.</span>
          </h1>
          <p className="font-body text-lg text-sand/90 max-w-xl mb-8 leading-relaxed">
            {y.body}
          </p>
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-terra text-white font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
          >
            {y.cta} <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-sage inline-block" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-sage font-medium">
                  {y.whatEyebrow}
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-bark mb-6 leading-tight">
                {y.whatH2a}{" "}
                <span className="italic text-terra">{y.whatH2b}</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {y.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-sage mt-0.5 flex-shrink-0"
                    />
                    <span className="font-body text-base text-bark/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/yoga-twist.jpg"
                  alt="Yoga practice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-off-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center cursor-pointer hover:bg-off-white/30 transition-colors duration-200">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-terra/15 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ─────────────────────────────────────────── */}
      <section id="courses" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-terra inline-block" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                {y.coursesEyebrow}
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              {y.coursesH2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {y.courses.map((course, i) => (
              <div
                key={course.title}
                className="bg-cream rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={courseImages[i]}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-off-white/90 backdrop-blur-sm rounded-full">
                    <span className="font-body text-xs font-medium text-bark">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-xs tracking-widest uppercase text-sage font-medium mb-1">
                    {course.format}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-bark mb-2">
                    {course.title}
                  </h3>
                  <p className="font-body text-sm text-bark/70 leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-terra">
                      {course.price}
                    </span>
                    <button className="px-4 py-2 bg-bark text-off-white text-xs font-medium rounded-full hover:bg-bark-dark transition-colors duration-200">
                      {y.notifyMe}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL ─────────────────────────────────────── */}
      <CalendlyEmbed
        url="https://calendly.com/kievyogaclass"
        heading={y.calendlyH}
        subheading={y.calendlySub}
      />

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className="bg-bark py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold text-off-white mb-3">
              {y.contactH2}
            </h2>
            <p className="font-body text-base text-sand/70">
              {y.contactBody}
            </p>
          </div>
          <ContactForm subject={y.contactSubject} dark />
        </div>
      </section>
    </>
  );
}
