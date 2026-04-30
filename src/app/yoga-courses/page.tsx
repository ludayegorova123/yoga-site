import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Yoga Courses — Ludmila Yegorova",
  description:
    "Online yoga classes and structured courses for every level. Move, breathe, and transform with Ludmila Yegorova.",
};

const courses = [
  {
    title: "Ранковий потік: основи",
    level: "Початківці",
    format: "4-тижневий курс",
    description:
      "Сформуй стабільну ранкову практику з енергійними потоками, що пробуджують тіло і налаштовують на позитивний день.",
    image: "/images/yoga-outdoor.jpg",
    price: "Незабаром",
  },
  {
    title: "Глибоке розтягнення і відновлення",
    level: "Всі рівні",
    format: "On-demand",
    description:
      "Сповільнись, дихай глибше, відпускай напругу. Цей клас поєднує інь-йогу і відновлювальні пози для повного оновлення тіла.",
    image: "/images/yoga-twist.jpg",
    price: "Незабаром",
  },
  {
    title: "Сила і потік",
    level: "Середній рівень",
    format: "6-тижневий курс",
    description:
      "Кинь виклик своєму тілу з динамічними послідовностями, що розвивають силу, баланс і плавність. Для тих, хто готовий поглибити практику.",
    image: "/images/yoga-namaste.jpg",
    price: "Незабаром",
  },
];

const included = [
  "HD-відеозаняття, доступні будь-коли і будь-де",
  "Модифікації до кожної пози для безпечної практики",
  "Пранаяма та дихальні техніки у кожному занятті",
  "Підтримуюча спільнота жінок на спільному шляху",
  "Особиста підтримка від Людмили",
];

export default function YogaCoursesPage() {
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
              Онлайн-йога
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-2xl mb-4">
            Move. Breathe.{" "}
            <span className="italic text-terra">Transform.</span>
          </h1>
          <p className="font-body text-lg text-sand/90 max-w-xl mb-8 leading-relaxed">
            Заняття та курси йоги для будь-якого рівня — від першого привітання
            сонцю до просунутих потоків. Практикуй за своїм розкладом,
            з будь-якої точки світу.
          </p>
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-terra text-white font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
          >
            Переглянути всі курси <ArrowRight size={15} />
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
                  Що ви отримаєте
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-bark mb-6 leading-tight">
                Практика, що вписується{" "}
                <span className="italic text-terra">у твоє життя.</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {included.map((item) => (
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
                {/* Play button overlay */}
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
                Поточні пропозиції
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              Обери свій шлях
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-cream rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={course.image}
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
                      Повідомте мене
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
        heading="Не знаєш з чого почати?"
        subheading="Забронюй безкоштовний 15-хвилинний дзвінок — я допоможу підібрати заняття або курс, що підходить саме тобі."
      />

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className="bg-bark py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold text-off-white mb-3">
              Напиши мені
            </h2>
            <p className="font-body text-base text-sand/70">
              Питання про курс, розклад або чи підходить тобі йога?
              Буду рада почути від тебе.
            </p>
          </div>
          <ContactForm subject="Yoga Course Inquiry" dark />
        </div>
      </section>
    </>
  );
}
