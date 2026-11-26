"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Award, Users, TrendingUp } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [topAspect, setTopAspect] = useState("769 / 1024");
  const [bottomAspect, setBottomAspect] = useState("1024 / 576");
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center pt-10 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">

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
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[#172238]/55">
              <Phone className="w-3.5 h-3.5 text-[#3659D9]" />
              <span>Speak with an advisor —</span>
              <a
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="font-semibold text-[#172238]/80 hover:text-[#3659D9] transition-colors"
              >
                {siteConfig.contact.primaryPhone}
              </a>
              <span className="text-[#172238]/25">/</span>
              <a
                href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                className="font-semibold text-[#172238]/80 hover:text-[#3659D9] transition-colors"
              >
                {siteConfig.contact.secondaryPhone}
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

          {/* ── RIGHT: 2-Image Editorial Composition ─────────────────── */}
          <div
            className="relative order-first lg:order-last"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none flex flex-col gap-4">
              {/* Decorative atmospheric backdrop */}
              <div
                className="absolute -inset-3 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(54,89,217,0.10) 0%, rgba(216,198,170,0.14) 100%)",
                }}
              />

              {/* Top Image — Classroom Mentorship Session (Portrait) */}
              <div className="relative w-[72%] sm:w-[62%] lg:w-[58%] mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(23,34,56,0.16)] border border-white/60 bg-[#172238]/5">
                  <div className="relative w-full" style={{ aspectRatio: topAspect }}>
                    <Image
                      src="/assets/classroom/hero-mentorship-session.jpg"
                      alt="Small-batch ACCA & Finance mentorship session at SKD Chandigarh"
                      fill
                      priority
                      onLoad={(e) => {
                        const img = e.currentTarget;
                        if (img.naturalWidth && img.naturalHeight) {
                          setTopAspect(`${img.naturalWidth} / ${img.naturalHeight}`);
                        }
                      }}
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 35vw, 340px"
                    />
                  </div>
                </div>

                {/* Accreditation badge — upper right of top image */}
                <div className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-4 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-black/6 p-2 flex items-center gap-2 z-10">
                  <div className="relative w-20 h-10 sm:w-24 sm:h-12">
                    <Image
                      src="/assets/images/acca-silver-learning-partner.png"
                      alt="ACCA Silver Learning Partner"
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom / Main Image — Students with Certificates (Landscape) */}
              <div className="relative w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(23,34,56,0.18)] border border-white/60 bg-[#172238]/5">
                  <div className="relative w-full" style={{ aspectRatio: bottomAspect }}>
                    <Image
                      src="/assets/seminar/hero-students-certificates.jpg"
                      alt="SKD Group of Institutions — Students with Certificates in Chandigarh"
                      fill
                      priority
                      onLoad={(e) => {
                        const img = e.currentTarget;
                        if (img.naturalWidth && img.naturalHeight) {
                          setBottomAspect(`${img.naturalWidth} / ${img.naturalHeight}`);
                        }
                      }}
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 600px"
                    />
                    {/* Subtle bottom vignette only */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(23,34,56,0.55) 0%, transparent 100%)",
                      }}
                    />

                    {/* Campus label — bottom right */}
                    <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold rounded-full border border-white/20">
                        Godrej Eternia Campus · Chandigarh
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pass rate — lower left */}
                <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 bg-[#172238] text-white rounded-xl shadow-[0_4px_20px_rgba(23,34,56,0.25)] px-4 py-2.5 sm:py-3 z-10">
                  <div className="text-[20px] sm:text-[22px] font-black leading-none text-[#D8C6AA]">85%+</div>
                  <div className="text-[11px] text-white/60 mt-0.5 font-medium">Batch Pass Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
