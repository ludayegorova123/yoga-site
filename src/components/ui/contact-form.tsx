"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  subject?: string;
  dark?: boolean;
}

export function ContactForm({ subject = "Website Inquiry", dark = false }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:kievyogaclass@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-colors duration-200 ${
    dark
      ? "bg-bark-light/20 border border-sand/20 text-off-white placeholder-sand/40 focus:border-terra"
      : "bg-off-white border border-sand/50 text-bark placeholder-bark/40 focus:border-terra"
  }`;

  const labelClass = `font-body text-xs tracking-wider uppercase mb-1.5 block ${
    dark ? "text-sand/60" : "text-bark/60"
  }`;

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle2 size={40} className="text-sage" />
        <p className={`font-display text-xl font-semibold ${dark ? "text-off-white" : "text-bark"}`}>
          Ваше повідомлення вже летить!
        </p>
        <p className={`font-body text-sm ${dark ? "text-sand/70" : "text-bark/60"}`}>
          Я відповім протягом 1–2 робочих днів.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", message: "" }); setSent(false); }}
          className="mt-2 text-sm text-terra underline underline-offset-2"
        >
          Надіслати ще одне повідомлення
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Ваше ім&rsquo;я</label>
          <input
            type="text"
            required
            placeholder="Людмила"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email-адреса</label>
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Повідомлення</label>
        <textarea
          required
          rows={5}
          placeholder="Розкажи трохи про себе і що тебе цікавить…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="self-start inline-flex items-center gap-2 px-7 py-3 bg-terra text-white font-body font-medium text-sm rounded-full hover:bg-terra-dark transition-colors duration-200"
      >
        Надіслати <Send size={14} />
      </button>
    </form>
  );
}
