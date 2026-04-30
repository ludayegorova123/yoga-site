import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Wellness Travel — Ludmila Yegorova",
  description:
    "Join Ludmila on transformational group retreats and wellness travel experiences around the world.",
};

const upcomingTrips = [
  {
    title: "Desert Soul Retreat",
    location: "Американський Південний захід",
    dates: "Незабаром 2026",
    spots: "Обмежена кількість місць",
    description:
      "7-денна подорож крізь захопливі пустельні пейзажі. Щоденна йога, медитація, хайкінг і споглядання зірок у колі однодумців.",
    image: "/images/travel-desert-dunes.jpg",
    tags: ["Йога", "Хайкінг", "Медитація", "Спільнота"],
  },
  {
    title: "Національні парки: дослідження",
    location: "Каліфорнія, США",
    dates: "Незабаром 2026",
    spots: "Обмежена кількість місць",
    description:
      "Постій серед древніх гігантів у Секвойї, практикуй йогу на світанку над каньйонами та відновити зв'язок із природним світом.",
    image: "/images/travel-sequoia.jpg",
    tags: ["Природа", "Йога", "Пригоди", "Зцілення"],
  },
  {
    title: "Червоні скелі: оновлення",
    location: "Невада та Юта",
    dates: "Незабаром 2026",
    spots: "Обмежена кількість місць",
    description:
      "Досліджуй каньйони з червоних скель і безмежні відкриті простори. Рух, тиша і спільний досвід в одному з найкрасивіших куточків землі.",
    image: "/images/travel-red-rock.jpg",
    tags: ["Йога", "Усвідомленість", "Дослідження", "Спільнота"],
  },
];

const travelExperience = [
  {
    icon: <Users size={20} />,
    title: "Малі групи",
    description: "Камерний формат забезпечує особисту увагу та справжній зв'язок.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Продумані напрямки",
    description: "Кожне місце обране, щоб надихати і поглиблювати твою практику.",
  },
  {
    icon: <Calendar size={20} />,
    title: "Все включено",
    description: "Проживання, щоденна йога, хайкінг і спільні трапези — всі деталі на нас.",
  },
];

export default function WellnessTravelPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/travel-death-valley.jpg"
            alt="Wellness travel"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/90 via-bark/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 text-off-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-terra inline-block" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
              Групові ретрити та подорожі
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-2xl mb-4">
            Explore. Connect.{" "}
            <span className="italic text-terra">Renew.</span>
          </h1>
          <p className="font-body text-lg text-sand/90 max-w-xl mb-8 leading-relaxed">
            Подорож — один з найпотужніших інструментів зростання. Приєднуйся до
            ретритів і велнес-поїздок, що поєднують неймовірні місця, щоденну
            йогу і магію спільного досвіду.
          </p>
          <Link
            href="#trips"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-terra text-white font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
          >
            Переглянути поїздки <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-bark">
              Подорожі, що{" "}
              <span className="italic text-sage-dark">трансформують.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelExperience.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-off-white"
              >
                <div className="w-12 h-12 rounded-2xl bg-terra/10 flex items-center justify-center text-terra">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-bark">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-bark/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ─────────────────────────────────────── */}
      <section className="py-6 bg-off-white overflow-hidden">
        <div className="flex gap-4 px-6 max-w-7xl mx-auto">
          {[
            "/images/travel-grand-canyon.jpg",
            "/images/travel-desert-dunes.jpg",
            "/images/travel-red-rock.jpg",
            "/images/travel-sequoia.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-64 h-72 rounded-2xl overflow-hidden"
            >
              <Image src={src} alt="Travel moment" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ── TRIPS ───────────────────────────────────────────── */}
      <section id="trips" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-terra inline-block" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-terra font-medium">
                Наступні подорожі
              </span>
              <span className="h-px w-8 bg-terra inline-block" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark">
              Куди ми вирушимо?
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {upcomingTrips.map((trip, i) => (
              <div
                key={trip.title}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-cream rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="relative md:w-2/5 h-72 md:h-auto overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:w-3/5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trip.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-sand/50 text-bark/70 text-xs font-body rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-bark mb-2">
                    {trip.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-sm text-bark/60 font-body">
                      <MapPin size={13} />
                      {trip.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-bark/60 font-body">
                      <Calendar size={13} />
                      {trip.dates}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-terra font-medium font-body">
                      <Users size={13} />
                      {trip.spots}
                    </span>
                  </div>
                  <p className="font-body text-base text-bark/70 leading-relaxed mb-6">
                    {trip.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bark text-off-white text-sm font-medium rounded-full hover:bg-bark-dark transition-colors duration-200 w-fit"
                  >
                    Записатися <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY PHOTO ─────────────────────────────────── */}
      <section className="bg-sage py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/community.jpg"
                  alt="Community of women on a wellness journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-off-white">
              <h2 className="font-display text-4xl font-bold mb-4 leading-tight">
                Подорожуй з жінками, які{" "}
                <span className="italic">розуміють.</span>
              </h2>
              <p className="font-body text-base text-off-white/80 leading-relaxed mb-6">
                Кожна поїздка, яку я організовую, — це більше ніж відпустка.
                Жінки приходять незнайомками, а йдуть сестрами, із спогадами та
                дружбою, що залишаються надовго після повернення додому.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL ─────────────────────────────────────── */}
      <CalendlyEmbed
        url="https://calendly.com/kievyogaclass"
        heading="Цікавить якась поїздка?"
        subheading="Забронюй безкоштовний 15-хвилинний дзвінок, щоб дізнатися більше про наступні подорожі, вартість та що на тебе чекає."
      />

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className="bg-bark py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold text-off-white mb-3">
              Напиши мені
            </h2>
            <p className="font-body text-base text-sand/70">
              Питання про поїздку, розмір групи, що взяти з собою? Напиши —
              відповім протягом 1–2 днів.
            </p>
          </div>
          <ContactForm subject="Wellness Travel Inquiry" dark />
        </div>
      </section>
    </>
  );
}
