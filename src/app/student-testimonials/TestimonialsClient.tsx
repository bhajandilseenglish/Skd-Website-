"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Star,
  ShieldCheck,
  Play,
  Pause,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Video,
} from "lucide-react";
import { testimonialsData, Testimonial } from "@/data/testimonials";

const accaVideos = [
  { src: "/assets/videos/acca-testimonials/Abhiraj Bakshi.mp4", name: "Abhiraj Bakshi", course: "ACCA Global Chartered Accountant" },
  { src: "/assets/videos/acca-testimonials/Anahita Singh.mp4", name: "Anahita Singh", course: "ACCA Global Chartered Accountant" },
  { src: "/assets/videos/acca-testimonials/Arshpreet Kaur.mp4", name: "Arshpreet Kaur", course: "ACCA Merit Ranker — Financial Accounting" },
  { src: "/assets/videos/acca-testimonials/Harsimar Kaur.mp4", name: "Harsimar Kaur", course: "ACCA Global Chartered Accountant" },
  { src: "/assets/videos/acca-testimonials/Jasmine Kaur.mp4", name: "Jasmine Kaur", course: "ACCA Global Chartered Accountant" },
  { src: "/assets/videos/acca-testimonials/pranjal.mp4", name: "Pranjal", course: "ACCA Global Chartered Accountant" },
];

const reviewScreenshots = [
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.23 PM (2).jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM (1).jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.33 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.23.54 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.32 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.33 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.34 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.36 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.00 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
  "/assets/reviews/WhatsApp Image 2026-11-19 at 4.33.43 PM.jpeg",
  "/assets/reviews/f7b828d6-a87c-42c1-8d52-76ac53e971f4.png",
];

export default function TestimonialsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const categories = ["All", "ACCA", "Data Analytics", "Power BI", "Advanced Excel"];

  const filtered = activeCategory === "All"
    ? testimonialsData
    : testimonialsData.filter((t) => t.course.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleVideoToggle = (src: string, index: number) => {
    if (playingVideo === src) {
      videoRefs.current[index]?.pause();
      setPlayingVideo(null);
    } else {
      videoRefs.current.forEach((v, i) => { if (i !== index && v) v.pause(); });
      videoRefs.current[index]?.play().catch(() => {});
      setPlayingVideo(src);
    }
  };

  return (
    <div className="space-y-16">
      {/* ── SECTION 1: Featured Video Testimonials ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white text-[#3659D9] border border-black/8 rounded-full text-xs font-semibold mb-3 shadow-sm">
            <Video className="w-3.5 h-3.5 text-[#3659D9]" />
            <span>Watch Live Student Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172238] tracking-tight">
            ACCA Student Video Stories
          </h2>
          <p className="text-sm text-[#767C88] mt-2">
            Click any video below to watch authentic testimonials recorded by enrolled students at our Godrej Eternia campus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accaVideos.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-[#0d1724] border border-white/10 shadow-xl group flex flex-col justify-between"
            >
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={v.src}
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  controls={playingVideo === v.src}
                  onEnded={() => setPlayingVideo(null)}
                />
                {playingVideo !== v.src && (
                  <button
                    onClick={() => handleVideoToggle(v.src, i)}
                    aria-label={`Play testimonial from ${v.name}`}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 hover:bg-black/20 transition-colors group/btn"
                  >
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover/btn:scale-110 transition-transform shadow-xl">
                      <Play className="w-6 h-6 fill-[#3659D9] text-[#3659D9] ml-1" />
                    </div>
                  </button>
                )}
              </div>

              <div className="p-4 bg-[#0a1120] flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">{v.name}</h4>
                  <p className="text-[#D8C6AA] text-xs font-medium">{v.course}</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Verified Video
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: Verified Student Written Reviews ─────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white text-[#3659D9] border border-black/8 rounded-full text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8C6AA]" />
            <span>Analyzed Reviews from Real Batches</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172238] tracking-tight">
            Detailed Student Feedback & Experiences
          </h2>
          <p className="text-sm text-[#767C88] mt-2">
            Read verified reviews from students across our ACCA cohorts, 15-day industrial trainings, and professional workshops.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#172238] text-white shadow-md"
                    : "bg-white text-[#172238] hover:bg-black/5 border border-black/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-black/8 shadow-sm hover:shadow-xl hover:border-[#3659D9]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-0.5 text-[#D8C6AA]">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D8C6AA]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Verified Review
                  </span>
                </div>

                <p className="text-sm text-[#172238] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-black/6">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-[#172238]/5 border border-black/8">
                  <Image
                    src={t.image || "/assets/classroom/1.png"}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-[#172238] truncate">{t.name}</h4>
                  <p className="text-xs text-[#3659D9] font-semibold truncate">{t.course}</p>
                  <p className="text-[10px] text-[#767C88] truncate">
                    {t.achievement || t.batch}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: Original Verified WhatsApp & Software Screenshots ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white text-[#3659D9] border border-black/8 rounded-full text-xs font-semibold mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#D8C6AA]" />
            <span>Unedited Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172238] tracking-tight">
            Original Review Screenshots & Feedback Proof
          </h2>
          <p className="text-sm text-[#767C88] mt-2">
            Click any image to view the unedited feedback messages and certificates received from students.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviewScreenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-black/8 hover:border-[#3659D9]/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={src}
                alt={`Verified student review ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] bg-black/75 backdrop-blur-md text-white px-2 py-0.5 rounded-full font-medium">
                  Verified Screenshot
                </span>
                <span className="text-[10px] text-white/80">Click to zoom ↗</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i === null || i === 0 ? reviewScreenshots.length - 1 : i - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl max-h-[88vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={reviewScreenshots[lightboxIdx]}
              alt={`Review ${lightboxIdx + 1}`}
              width={1200}
              height={900}
              className="rounded-2xl object-contain max-h-[88vh] w-auto mx-auto"
              unoptimized
            />
            <p className="text-center mt-3 text-white/50 text-xs">
              {lightboxIdx + 1} of {reviewScreenshots.length} · Original Student Review Screenshot
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i === null || i === reviewScreenshots.length - 1 ? 0 : i + 1));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
