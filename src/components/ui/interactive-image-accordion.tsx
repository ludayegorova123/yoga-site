"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const accordionItems = [
  {
    id: 1,
    title: "Yoga Courses",
    subtitle: "Рухайся. Дихай. Змінюйся.",
    imageUrl: "/images/yoga-namaste.jpg",
    href: "/yoga-courses",
    description:
      "Онлайн-заняття та структуровані курси для будь-якого рівня — від перших потоків до глибокої практики.",
  },
  {
    id: 2,
    title: "Wellness Travel",
    subtitle: "Досліджуй. Єднайся. Відновлюйся.",
    imageUrl: "/images/travel-desert-dunes.jpg",
    href: "/wellness-travel",
    description:
      "Ретрити та групові поїздки, що поєднують пригоди, усвідомленість і спільноту.",
  },
  {
    id: 3,
    title: "Coaching",
    subtitle: "Зростай. Розквітай. Процвітай.",
    imageUrl: "/images/community.jpg",
    href: "/coaching",
    description:
      "Трансформаційний коучинг 1:1 та в групах, щоб створити життя, на яке ти заслуговуєш.",
  },
];

function AccordionPanel({
  item,
  isActive,
  onMouseEnter,
}: {
  item: (typeof accordionItems)[0];
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      className={`relative h-[500px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[420px]" : "w-[80px]"}
      `}
      onMouseEnter={onMouseEnter}
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
            {item.subtitle}
          </p>
          <h3 className="font-display text-2xl font-semibold mb-2">
            {item.title}
          </h3>
          <p className="font-body text-sm text-sand/90 mb-4 leading-relaxed">
            {item.description}
          </p>
          <Link
            href={item.href}
            className="inline-flex items-center gap-2 px-4 py-2 bg-terra text-white text-sm font-medium rounded-full hover:bg-terra-dark transition-colors duration-200"
          >
            Детальніше <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}

export function PillarAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-row items-stretch gap-3 overflow-x-auto py-2">
      {accordionItems.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
