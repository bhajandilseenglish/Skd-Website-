"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Play, X, ChevronLeft, ChevronRight, Star } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const accaVideos = [
  { src: "/assets/videos/acca-testimonials/Abhiraj Bakshi.mp4", name: "Abhiraj Bakshi", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Anahita Singh.mp4", name: "Anahita Singh", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Arshpreet Kaur.mp4", name: "Arshpreet Kaur", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Harsimar Kaur.mp4", name: "Harsimar Kaur", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Jasmine Kaur.mp4", name: "Jasmine Kaur", course: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/pranjal.mp4", name: "Pranjal", course: "ACCA Student" },
];

const reviewImages = [
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
];

const resultImages = [
  "/assets/results/Enhanced_Photo_01.jpg",
  "/assets/results/Enhanced_Photo_02.jpg",
  "/assets/results/Enhanced_Photo_03.jpg",
  "/assets/results/Enhanced_Photo_04.jpg",
  "/assets/results/Enhanced_Photo_05.jpg",
  "/assets/results/Enhanced_Photo_06.jpg",
  "/assets/results/Enhanced_Photo_07.jpg",
  "/assets/results/Enhanced_Photo_08.jpg",
  "/assets/results/Enhanced_Photo_09.jpg",
  "/assets/results/Enhanced_Photo_10.jpg",
  "/assets/results/Enhanced_Photo_11.jpg",
  "/assets/results/Enhanced_Photo_12.jpg",
];

const classroomImages = [
  "/assets/classroom/1.png",
  "/assets/classroom/2.png",
  "/assets/classroom/3.png",
  "/assets/classroom/4.png",
  "/assets/classroom/5.png",
  "/assets/classroom/6.png",
  "/assets/seminar/Enhanced_Photo_01.jpg",
  "/assets/seminar/Enhanced_Photo_02.jpg",
  "/assets/seminar/Enhanced_Photo_03.jpg",
  "/assets/seminar/Enhanced_Photo_04.jpg",
  "/assets/seminar/Enhanced_Photo_05.jpg",
  "/assets/seminar/Enhanced_Photo_06.jpg",
];

// ─── Video Lightbox ───────────────────────────────────────────────────────────

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      <div
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src}
          controls
          autoPlay
          className="rounded-2xl w-full max-h-[82vh] bg-black shadow-2xl"
        />
      </div>
    </div>
  );
}

// ─── Image Lightbox ───────────────────────────────────────────────────────────

function ImageLightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <X className="w-5 h-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
        <Image src={images[idx]} alt={`Image ${idx + 1}`} width={1200} height={900} className="rounded-2xl object-contain max-h-[85vh] w-auto mx-auto" unoptimized />
        <p className="text-center mt-3 text-white/40 text-sm">{idx + 1} / {images.length}</p>
      </div>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ─── Cinematic Video Carousel ─────────────────────────────────────────────────

function VideoCarousel() {
  const [active, setActive] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const total = accaVideos.length;

  const prev = useCallback(() => setActive((i) => (i === 0 ? total - 1 : i - 1)), [total]);
  const next = useCallback(() => setActive((i) => (i === total - 1 ? 0 : i + 1)), [total]);

  // indices for left, center, right
  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  return (
    <div className="relative w-full">
      {/* Three-card stage */}
      <div className="flex items-center justify-center gap-4 md:gap-6 px-4 py-8">
        {/* LEFT card */}
        <div
          className="hidden sm:block relative flex-shrink-0 w-56 md:w-72 cursor-pointer select-none"
          style={{ transform: "perspective(1000px) rotateY(8deg) scale(0.88)", opacity: 0.55, transition: "all 0.5s cubic-bezier(.4,0,.2,1)" }}
          onClick={prev}
        >
          <VideoCard video={accaVideos[leftIdx]} onPlay={() => setActive(leftIdx)} dimmed />
        </div>

        {/* CENTER card — active */}
        <div
          className="relative flex-shrink-0 w-72 sm:w-80 md:w-[420px] z-10 select-none"
          style={{ transform: "perspective(1000px) rotateY(0deg) scale(1)", opacity: 1, transition: "all 0.5s cubic-bezier(.4,0,.2,1)" }}
        >
          <VideoCard
            video={accaVideos[active]}
            onPlay={() => setLightboxSrc(accaVideos[active].src)}
            active
          />
        </div>

        {/* RIGHT card */}
        <div
          className="hidden sm:block relative flex-shrink-0 w-56 md:w-72 cursor-pointer select-none"
          style={{ transform: "perspective(1000px) rotateY(-8deg) scale(0.88)", opacity: 0.55, transition: "all 0.5s cubic-bezier(.4,0,.2,1)" }}
          onClick={next}
        >
          <VideoCard video={accaVideos[rightIdx]} onPlay={() => setActive(rightIdx)} dimmed />
        </div>
      </div>

      {/* Nav row */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {accaVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2.5 bg-[#2855E8]"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {lightboxSrc && (
        <VideoLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </div>
  );
}

function VideoCard({
  video,
  onPlay,
  active = false,
  dimmed = false,
}: {
  video: { src: string; name: string; course: string };
  onPlay: () => void;
  active?: boolean;
  dimmed?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-[#0d1b35] ${
        active ? "shadow-[0_0_60px_rgba(40,85,232,0.3)] ring-2 ring-[#2855E8]/40" : ""
      }`}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
          style={{ opacity: dimmed ? 0.5 : 0.75 }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />

        {/* Play button */}
        {!dimmed && (
          <button
            onClick={onPlay}
            aria-label={`Play ${video.name}'s testimonial`}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-200">
              <Play className="w-6 h-6 fill-[#2855E8] text-[#2855E8] ml-1" />
            </div>
          </button>
        )}

        {dimmed && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="w-4 h-4 fill-white text-white ml-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {!dimmed && (
        <div className="p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2855E8] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {video.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">{video.name}</p>
            <p className="text-[#DCA43A] text-xs font-medium">{video.course}</p>
          </div>
          <div className="ml-auto flex gap-0.5 flex-shrink-0">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} className="w-3 h-3 fill-[#DCA43A] text-[#DCA43A]" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Review Grid ──────────────────────────────────────────────────────────────

function ReviewGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {reviewImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-[#2855E8]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Image src={src} alt={`Review ${i + 1}`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              {[1,2,3,4,5].map((s) => <Star key={s} className="w-3 h-3 fill-[#DCA43A] text-[#DCA43A]" />)}
            </div>
          </button>
        ))}
      </div>
      {lightboxIdx !== null && (
        <ImageLightbox images={reviewImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </>
  );
}

// ─── Results Grid ─────────────────────────────────────────────────────────────

function ResultsGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const resultVideos = [
    "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM.mp4",
    "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM1.mp4",
    "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.45.11 PM.mp4",
  ];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {resultImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-[#DCA43A]/60 transition-all duration-300 hover:-translate-y-1"
          >
            <Image src={src} alt={`Result ${i + 1}`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {resultVideos.map((src, i) => (
          <button key={i} onClick={() => setActiveVideo(src)}
            className="group relative aspect-video rounded-xl overflow-hidden bg-black/40 ring-1 ring-white/10 hover:ring-[#DCA43A]/50 transition-all hover:-translate-y-1"
          >
            <video src={src} className="w-full h-full object-cover opacity-50" muted playsInline preload="metadata" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#DCA43A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-5 h-5 fill-white text-white ml-0.5" />
              </div>
              <span className="text-white text-xs font-medium">Result Video</span>
            </div>
          </button>
        ))}
      </div>
      {lightboxIdx !== null && <ImageLightbox images={resultImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />}
      {activeVideo && <VideoLightbox src={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  );
}

// ─── Campus Grid ──────────────────────────────────────────────────────────────

function CampusGrid() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {classroomImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-video rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Image src={src} alt={`Campus ${i + 1}`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
      {lightboxIdx !== null && <ImageLightbox images={classroomImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />}
    </>
  );
}

// ─── Tab types ────────────────────────────────────────────────────────────────

type TabId = "videos" | "reviews" | "results" | "campus";

const TABS: { id: TabId; label: string }[] = [
  { id: "videos", label: "Student Testimonials" },
  { id: "reviews", label: "Reviews" },
  { id: "results", label: "Exam Results" },
  { id: "campus", label: "Campus Life" },
];

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function SocialProofSection() {
  const [activeTab, setActiveTab] = useState<TabId>("videos");

  return (
    <section className="relative py-20 sm:py-28 bg-[#0a1628] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2855E8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#DCA43A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#2855E8]" />
            <span className="text-[#2855E8] text-xs font-bold tracking-[0.2em] uppercase">Real Stories</span>
            <span className="w-8 h-px bg-[#2855E8]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Student Reviews — Hear from<br />
            <span className="text-[#2855E8] italic font-bold">Our Alumni</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Real voices, real journeys. Watch how SKD students achieved their career milestones.
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#2855E8] border-[#2855E8] text-white shadow-lg shadow-[#2855E8]/30"
                  : "border-white/15 text-white/50 hover:text-white hover:border-white/30 bg-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "videos" && <VideoCarousel />}
          {activeTab === "reviews" && <ReviewGrid />}
          {activeTab === "results" && <ResultsGrid />}
          {activeTab === "campus" && <CampusGrid />}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {[
            { value: "500+", label: "Students Enrolled" },
            { value: "95%", label: "First-Attempt Pass Rate" },
            { value: "4.9★", label: "Google Rating" },
            { value: "10+", label: "Years of Excellence" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0d1b35] px-6 py-6 text-center">
              <div className="text-2xl font-extrabold text-[#2855E8]">{stat.value}</div>
              <div className="text-xs text-white/40 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
