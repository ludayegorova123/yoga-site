import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Heart, Lightbulb, Target, Star } from "lucide-react";
import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Coaching — Ludmila Yegorova",
  description:
    "Transformational coaching with Ludmila Yegorova. 1:1 and group programs to help you build a life you love.",
};

const coachingPillars = [
  {
    icon: <Heart size={22} />,
    title: "Відновити зв'язок із собою",
    description:
      "Повернутися до своїх цінностей, тіла і найглибших бажань. Коучинг починається з чесного, співчутливого самодослідження.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Прояснити своє бачення",
    description:
      "Зрозуміти, куди ти хочеш іти — у кар'єрі, стосунках, здоров'ї або в житті загалом — і чому це важливо.",
  },
  {
    icon: <Target size={22} />,
    title: "Діяти узгоджено",
    description:
      "Перейти від усвідомлення до дії. Ми будуємо практичні стратегії та структури підзвітності, що створюють справжні зміни.",
  },
];

const testimonials = [
  {
    quote:
      "Робота з Людмилою допомогла мені нарешті зробити крок, якого я боялася роками. Вона має рідкісний дар — одночасно кидати виклик і повністю підтримувати.",
    name: "Анна С.",
    context: "Клієнтка коучингу",
  },
  {
    quote:
      "Я прийшла до Людмили виснаженою, а після кожної сесії виходила з ясністю, енергією та готовністю діяти. Вона ставить саме ті питання, які потрібні.",
    name: "Марія К.",
    context: "Клієнтка коучингу",
  },
  {
    quote:
      "Поєднання йоги та коучингу — це трансформація. Людмила допомогла мені з'єднати тіло й розум у такий спосіб, якого я не очікувала.",
    name: "Олена В.",
    context: "Клієнтка йоги + коучингу",
  },
];

const programs = [
  {
    title: "1:1 Коучинг",
    duration: "3 або 6 місяців",
    format: "Індивідуальні сесії",
    description:
      "Глибокий персоналізований коучинг, адаптований до твоїх унікальних цілей, викликів і обставин. Це твій простір, де тебе бачать і підтримують повністю.",
    forWho: "Для жінок, готових до значущих змін у житті.",
    image: "/images/yoga-outdoor.jpg",
  },
  {
    title: "Групове коло коучингу",
    duration: "8 тижнів",
    format: "Мала група (6–8 жінок)",
    description:
      "Відчуй силу спільного зростання. Структурована програма, що поєднує коучинг-методики, практику йоги та неймовірну енергію спільноти.",
    forWho: "Для жінок, що розквітають у спільноті.",
    image: "/images/community.jpg",
  },
];

export default function CoachingPage() {
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
              Лайф-коучинг
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-2xl mb-4">
            Grow. Thrive.{" "}
            <span className="italic text-terra">Flourish.</span>
          </h1>
          <p className="font-body text-lg text-sand/90 max-w-xl mb-8 leading-relaxed">
            Коучинг — це ланка між тим, чого ти хочеш, і тим, що в тебе є.
            Я працюю з жінками, щоб розкрити їхній потенціал, відпустити те, що
            стримує, і побудувати життя, сповнене сенсу.
          </p>
          <Link
            href="#programs"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-terra text-white font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
          >
            Переглянути програми <ArrowRight size={15} />
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
                Мій підхід
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl font-bold text-bark leading-tight">
              Цілісний коучинг для{" "}
              <span className="italic text-sage-dark">цілісних змін у житті.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Calendly booking */}
            <div className="bg-off-white rounded-3xl overflow-hidden border border-sand/30 shadow-sm">
              <div className="px-6 pt-6 pb-2">
                <h3 className="font-display text-2xl font-bold text-bark mb-1">
                  Безкоштовна інформаційна сесія
                </h3>
                <p className="font-body text-sm text-bark/60">
                  Не впевнена, чи підходить тобі коучинг? Поговорімо — без зобов&rsquo;язань, просто розмова.
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
              {coachingPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex gap-4 p-6 bg-off-white rounded-2xl border border-sand/30"
                >
                  <div className="w-11 h-11 rounded-xl bg-terra/10 flex items-center justify-center text-terra flex-shrink-0 mt-0.5">
                    {pillar.icon}
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

              {/* Extra nudge below the pillars */}
              <p className="font-body text-sm italic text-bark/50 text-center pt-2">
                My approach is direct but deeply compassionate — I will challenge
                you, hold space for you, and never let you settle for less than
                what you&rsquo;re capable of.
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
                Коучинг-програми
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              Знайди свою програму
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-cream rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
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
                    Подати заявку <ArrowRight size={14} />
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
              Жінки, що розквітли
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 bg-bark-light/20 rounded-3xl border border-sand/10">
                <p className="font-display text-base italic text-sand/90 leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-body text-sm font-semibold text-off-white">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-sand/50">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL ─────────────────────────────────────── */}
      <CalendlyEmbed
        url="https://calendly.com/kievyogaclass"
        heading="Забронюй ознайомлювальний дзвінок"
        subheading="Не впевнена, яка програма тобі підходить? Поговорімо. Безкоштовний 20-хвилинний дзвінок — і розберемося разом."
      />

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className="bg-bark py-20" id="contact">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-terra inline-block" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                Get in Touch
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl font-bold text-off-white mb-3">
              Є питання?
            </h2>
            <p className="font-body text-base text-sand/70">
              Вважаєш за краще написати? Надішли повідомлення — відповім протягом 1–2 днів.
            </p>
          </div>
          <ContactForm subject="Coaching Inquiry" dark />
        </div>
      </section>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
