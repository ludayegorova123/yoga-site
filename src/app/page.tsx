import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PillarAccordion } from "@/components/ui/interactive-image-accordion";
import { ContactForm } from "@/components/ui/contact-form";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="min-h-screen pt-16 bg-off-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">

            {/* Left: text */}
            <div className="w-full lg:w-[44%] flex flex-col gap-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-terra inline-block" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                  Йога · Подорожі · Коучинг
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-bark leading-[1.05] tracking-tight">
                Let&rsquo;s{" "}
                <span className="italic text-terra">Flourish</span>
                <br />
                Together.
              </h1>

              {/* Sub */}
              <p className="font-body text-lg text-bark/70 max-w-md leading-relaxed">
                Я Людмила Єгорова — вчителька йоги, дослідниця велнесу та коуч.
                Я створюю простори, де ти можеш рухатись, дихати, подорожувати
                та розкривати свій найкращий потенціал.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href="/yoga-courses"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-terra text-white font-body font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
                >
                  Почати практику <ArrowRight size={15} />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-bark/20 text-bark font-body text-sm rounded-full hover:border-bark/40 transition-colors duration-200"
                >
                  Про Людмилу
                </Link>
              </div>

              {/* Social / community links */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-sand/40">
                <a
                  href="https://t.me/yoga_coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group w-fit"
                >
                  <div className="flex -space-x-2">
                    {[
                      "/images/yoga-namaste.jpg",
                      "/images/community.jpg",
                      "/images/travel-desert-dunes.jpg",
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-off-white"
                      >
                        <Image src={src} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="font-body text-sm text-bark/60 group-hover:text-terra transition-colors duration-200">
                    Приєднатися до Telegram-спільноти →
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/yoga_lifecoach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-fit group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-bark/50 group-hover:text-terra transition-colors duration-200"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="font-body text-sm text-bark/60 group-hover:text-terra transition-colors duration-200">
                    Стежити в Instagram за оновленнями
                  </span>
                </a>
              </div>
            </div>

            {/* Right: accordion */}
            <div className="w-full lg:w-[54%]">
              <PillarAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/yoga-outdoor.jpg"
                  alt="Ludmila Yegorova practicing yoga outdoors"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative shape */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-terra/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-sage/20 -z-10" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-sage inline-block" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-sage font-medium">
                  Про Людмилу
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight">
                Рух — це{" "}
                <span className="italic text-sage-dark">ліки.</span>
                <br />
                Спільнота — це{" "}
                <span className="italic text-terra">дім.</span>
              </h2>
              <p className="font-body text-base text-bark/70 leading-relaxed">
                Мій шлях у йозі розпочався як особиста практика і перетворився
                на покликання — допомагати жінкам відчути свою силу, знайти
                спокій у русі та будувати життя, сповнене сенсу і радості.
              </p>
              <p className="font-body text-base text-bark/70 leading-relaxed">
                Через онлайн-курси йоги, трансформаційні подорожі та коучинг
                від серця я скеровую жінок до найяскравішої версії себе.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-sand/40">
                {[
                  { number: "3+", label: "Роки викладання" },
                  { number: "100+", label: "Учениці" },
                  { number: "3", label: "Відвідані континенти" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-terra">
                      {stat.number}
                    </p>
                    <p className="font-body text-xs text-bark/60 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS OVERVIEW ──────────────────────────── */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={16} className="text-terra" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                Три шляхи до процвітання
              </span>
              <Sparkles size={16} className="text-terra" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              Що ми робимо разом
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Yoga Courses",
                icon: "🧘",
                description:
                  "Структуровані онлайн-курси та живі заняття, які зустрічають тебе там, де ти є, і ведуть туди, куди ти прагнеш — на килимку і в житті.",
                cta: "Переглянути заняття",
                href: "/yoga-courses",
                image: "/images/yoga-twist.jpg",
                accent: "terra",
              },
              {
                title: "Wellness Travel",
                icon: "✈️",
                description:
                  "Групові ретрити та пригодницькі поїздки до неймовірних місць. Подорож як спосіб розширити свій світ і поглибити практику.",
                cta: "Переглянути поїздки",
                href: "/wellness-travel",
                image: "/images/travel-grand-canyon.jpg",
                accent: "sage",
              },
              {
                title: "Coaching",
                icon: "💫",
                description:
                  "Індивідуальні та групові коучинг-програми, що допомагають подолати блоки, прояснити бачення та набрати темп у житті.",
                cta: "Працювати з Людмилою",
                href: "/coaching",
                image: "/images/community.jpg",
                accent: "bark",
              },
            ].map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative rounded-3xl overflow-hidden bg-cream h-[440px] flex flex-col justify-end p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/30 to-transparent" />
                <div className="relative z-10 text-off-white">
                  <span className="text-2xl">{pillar.icon}</span>
                  <h3 className="font-display text-2xl font-bold mt-2 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-sand/90 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-terra-light group-hover:gap-3 transition-all duration-200">
                    {pillar.cta} <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="bg-bark py-20 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-terra/10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sage/10 -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-xl italic text-sand/60 mb-3">
            &ldquo;Дорога в тисячу миль починається з першого кроку.&rdquo;
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white mb-6">
            Готова{" "}
            <span className="italic text-terra">процвітати?</span>
          </h2>
          <p className="font-body text-base text-sand/80 mb-8 max-w-lg mx-auto">
            Чи ти вперше стаєш на килимок, чи вже готова підкорювати нові горизонти
            — тут є місце саме для тебе.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/yoga-courses"
              className="px-8 py-3.5 bg-terra text-white font-body font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
            >
              Починаємо з йоги
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3.5 border border-sand/30 text-sand font-body text-sm rounded-full hover:border-sand/60 transition-colors duration-200"
            >
              Зв&rsquo;язатися
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="bg-bark py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-terra inline-block" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                  Напишіть нам
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-off-white mb-4 leading-tight">
                Почнімо{" "}
                <span className="italic text-terra">розмову.</span>
              </h2>
              <p className="font-body text-base text-sand/70 leading-relaxed mb-8">
                Є питання про йогу, поїздку, коучинг або просто хочеш
                привітатися — моя скринька завжди відкрита. Я особисто читаю
                кожне повідомлення.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://calendly.com/kievyogaclass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-terra text-white text-sm font-medium rounded-full hover:bg-terra-dark transition-colors duration-200 w-fit"
                >
                  <ArrowRight size={14} /> Забронювати дзвінок у Calendly
                </a>
              </div>
            </div>
            <ContactForm subject="General Inquiry" dark />
          </div>
        </div>
      </section>
    </>
  );
}
