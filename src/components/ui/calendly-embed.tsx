"use client";

import Script from "next/script";

interface CalendlyEmbedProps {
  url: string;
  heading?: string;
  subheading?: string;
}

export function CalendlyEmbed({ url, heading, subheading }: CalendlyEmbedProps) {

  return (
    <section className="bg-cream py-20">
      <div className="max-w-5xl mx-auto px-6">
        {(heading || subheading) && (
          <div className="text-center mb-10">
            {heading && (
              <h2 className="font-display text-4xl font-bold text-bark mb-3">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="font-body text-base text-bark/70 max-w-lg mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget rounded-3xl overflow-hidden shadow-sm border border-sand/30"
          data-url={url}
          style={{ minWidth: "320px", height: "700px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
