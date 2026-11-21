"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Award, Users, TrendingUp } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const trust = [
    { icon: Award, label: "ACCA Silver Learning Partner", sub: "Officially accredited" },
    { icon: TrendingUp, label: "85%+ Batch Pass Rate", sub: "Consistently above global avg" },
    { icon: Users, label: "Qualified Mentors", sub: "Active CAs, ACCAs & CMAs" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#F6F4EF] border-b border-black/8"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      {/* ── Subtle atmospheric texture ───────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(54,89,217,0.07) 0%, transparent 70%), " +
            "radial-gradient(ellipse 50% 50% at 10% 85%, rgba(216,198,170,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">

          {/* ── LEFT: Typography ─────────────────────────────────────── */}
          <div
            className="flex flex-col gap-7 lg:max-w-[560px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Accreditation eyebrow */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3659D9] animate-pulse flex-shrink-0" />
              <span className="text-[12px] font-semibold tracking-[0.12em] text-[#3659D9] uppercase">
                Approved ACCA Silver Learning Partner · Chandigarh
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="font-extrabold text-[#172238] leading-[1.08] tracking-tight">
                <span
                  className="block"
                  style={{ fontSize: "clamp(2.6rem, 5.5vw, 4rem)" }}
                >
                  Your Ambition.
                </span>
                <span
                  className="block"
                  style={{ fontSize: "clamp(2.6rem, 5.5vw, 4rem)" }}
                >
                  Our Expertise.
                </span>
                <span
                  className="block mt-1"
                  style={{
                    fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
                    color: "#3659D9",
                    fontStyle: "italic",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Your Global Future.
                </span>
              </h1>
            </div>

            {/* Supporting copy */}
            <p
              className="text-[#172238]/60 leading-relaxed max-w-[460px]"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
            >
              Premier professional training in{" "}
              <strong className="text-[#172238]/90 font-semibold">ACCA, CA, US CMA</strong> and{" "}
              <strong className="text-[#172238]/90 font-semibold">US CPA</strong> — delivered from our
              executive campus at Godrej Eternia, Chandigarh.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#172238] text-white font-semibold text-[14px] rounded-xl hover:bg-[#3659D9] transition-all duration-200 shadow-sm hover:shadow-[0_6px_24px_rgba(54,89,217,0.3)] group"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-[#172238] font-semibold text-[14px] rounded-xl border border-[#172238]/25 hover:border-[#172238]/50 hover:bg-[#172238]/5 transition-all duration-200"
              >
                Free Counselling
              </Link>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 text-[13px] text-[#172238]/45">
              <Phone className="w-3.5 h-3.5" />
              <span>Speak with an advisor —</span>
              <a
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="font-semibold text-[#172238]/70 hover:text-[#3659D9] transition-colors"
              >
                {siteConfig.contact.primaryPhone}
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-col sm:flex-row sm:items-stretch gap-0 mt-2 border border-black/8 rounded-2xl overflow-hidden bg-white/60">
              {trust.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-5 py-4 flex-1 ${
                    i < trust.length - 1 ? "border-b sm:border-b-0 sm:border-r border-black/6" : ""
                  }`}
                >
                  <item.icon className="w-4 h-4 text-[#3659D9] flex-shrink-0" />
                  <div>
                    <p className="text-[12.5px] font-semibold text-[#172238]">{item.label}</p>
                    <p className="text-[11px] text-[#767C88] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Photography ───────────────────────────────────── */}
          <div
            className="relative order-first lg:order-last"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            {/* Main photo frame */}
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Decorative frame border */}
              <div
                className="absolute -inset-3 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(54,89,217,0.12) 0%, rgba(216,198,170,0.15) 100%)",
                }}
              />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(23,34,56,0.18)] border border-white/50">
                <div className="relative" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/assets/images/acca-coaching-chandigarh-.png"
                    alt="SKD Group of Institutions — Finance education in Chandigarh"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  />
                  {/* Subtle bottom vignette only — no heavy overlay */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(23,34,56,0.5) 0%, transparent 100%)",
                    }}
                  />

                  {/* Campus label — small, bottom of image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-[11px] font-semibold rounded-full border border-white/20">
                      Godrej Eternia Campus · Chandigarh
                    </span>
                  </div>
                </div>
              </div>

              {/* Accreditation badge — small, upper right */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-black/6 p-2.5 flex items-center gap-2">
                <div className="relative w-16 h-6">
                  <Image
                    src="/assets/images/acca-silver-learning-partner.png"
                    alt="ACCA Silver Learning Partner"
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              </div>

              {/* Pass rate — small, lower left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-[#172238] text-white rounded-xl shadow-[0_4px_20px_rgba(23,34,56,0.25)] px-4 py-3">
                <div className="text-[22px] font-black leading-none text-[#D8C6AA]">85%+</div>
                <div className="text-[11px] text-white/60 mt-0.5 font-medium">Batch Pass Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
