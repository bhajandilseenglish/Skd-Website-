"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Star,
  Play,
  X,
  Trophy,
  Users,
  Camera,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

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
];

const seminarImages = [
  "/assets/seminar/Enhanced_Photo_01.jpg",
  "/assets/seminar/Enhanced_Photo_02.jpg",
  "/assets/seminar/Enhanced_Photo_03.jpg",
  "/assets/seminar/Enhanced_Photo_04.jpg",
  "/assets/seminar/Enhanced_Photo_05.jpg",
  "/assets/seminar/Enhanced_Photo_06.jpg",
];

const accaVideos = [
  { src: "/assets/videos/acca-testimonials/Abhiraj Bakshi.mp4", name: "Abhiraj Bakshi", label: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Anahita Singh.mp4", name: "Anahita Singh", label: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Arshpreet Kaur.mp4", name: "Arshpreet Kaur", label: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Harsimar Kaur.mp4", name: "Harsimar Kaur", label: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/Jasmine Kaur.mp4", name: "Jasmine Kaur", label: "ACCA Student" },
  { src: "/assets/videos/acca-testimonials/pranjal.mp4", name: "Pranjal", label: "ACCA Student" },
];

const reviewVideos = [
  { src: "/assets/videos/reviews/new video.mp4", label: "Student Review" },
  { src: "/assets/videos/reviews/new one.mp4", label: "Student Review" },
  { src: "/assets/videos/reviews/WhatsApp Video 2026-11-02 at 4.12.29 PM.mp4", label: "Student Review" },
  { src: "/assets/videos/reviews/WhatsApp Video 2026-11-19 at 4.24.55 PM.mp4", label: "Student Review" },
];

const resultVideos = [
  { src: "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM.mp4", label: "Result Celebration" },
  { src: "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM1.mp4", label: "Result Celebration" },
  { src: "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.45.11 PM.mp4", label: "Result Celebration" },
];

// ─── Tab Config ───────────────────────────────────────────────────────────────

const TABS = [
  { id: "reviews", label: "Student Reviews", icon: MessageSquare, color: "blue" },
  { id: "results", label: "Exam Results", icon: Trophy, color: "gold" },
  { id: "campus", label: "Campus Life", icon: Camera, color: "green" },
  { id: "videos", label: "Video Stories", icon: Play, color: "purple" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div
        className="relative max-w-4xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[idx]}
          alt={`Image ${idx + 1}`}
          width={1200}
          height={900}
          className="rounded-xl object-contain max-h-[85vh] w-auto mx-auto"
          unoptimized
        />
        <div className="text-center mt-3 text-white/60 text-sm">
          {idx + 1} / {images.length}
        </div>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ─── Video Lightbox ───────────────────────────────────────────────────────────

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      <div
        className="relative max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          className="rounded-xl w-full max-h-[80vh] bg-black"
        />
      </div>
    </div>
  );
}

// ─── Review Image Grid ────────────────────────────────────────────────────────

function ReviewImagesTab() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {reviewImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ring-2 ring-transparent hover:ring-[#2855E8]/40"
          >
            <Image
              src={src}
              alt={`Student review ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-[#DCA43A] text-[#DCA43A]" />
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Review Videos */}
      <div className="mt-6">
        <h4 className="text-sm font-bold text-[#101F3D] uppercase tracking-widest mb-3">Review Videos</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {reviewVideos.map((v, i) => (
            <ReviewVideoCard key={i} src={v.src} label={v.label} />
          ))}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={reviewImages}
          startIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </>
  );
}

function ReviewVideoCard({ src, label }: { src: string; label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative aspect-video rounded-xl overflow-hidden bg-[#101F3D] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <video src={src} className="w-full h-full object-cover opacity-70" muted playsInline preload="metadata" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 fill-[#2855E8] text-[#2855E8] ml-0.5" />
          </div>
          <span className="mt-2 text-white text-xs font-medium">{label}</span>
        </div>
      </button>
      {open && <VideoLightbox src={src} onClose={() => setOpen(false)} />}
    </>
  );
}

// ─── Results Tab ──────────────────────────────────────────────────────────────

function ResultsTab() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {resultImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-amber-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ring-2 ring-transparent hover:ring-[#DCA43A]/50"
          >
            <Image
              src={src}
              alt={`Exam result ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-[#DCA43A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                Result
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Result Videos */}
      <div className="mt-6">
        <h4 className="text-sm font-bold text-[#101F3D] uppercase tracking-widest mb-3">Result Celebration Videos</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {resultVideos.map((v, i) => (
            <ResultVideoCard key={i} src={v.src} label={v.label} />
          ))}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={resultImages}
          startIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </>
  );
}

function ResultVideoCard({ src, label }: { src: string; label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative aspect-video rounded-xl overflow-hidden bg-amber-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <video src={src} className="w-full h-full object-cover opacity-70" muted playsInline preload="metadata" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-[#DCA43A] flex items-center justify-center shadow group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-white text-white ml-0.5" />
          </div>
          <span className="mt-2 text-white text-xs font-semibold">{label}</span>
        </div>
      </button>
      {open && <VideoLightbox src={src} onClose={() => setOpen(false)} />}
    </>
  );
}

// ─── Campus Tab ───────────────────────────────────────────────────────────────

function CampusTab() {
  const [lightboxSet, setLightboxSet] = useState<{ images: string[]; idx: number } | null>(null);

  const allCampus = [...classroomImages, ...seminarImages];

  return (
    <>
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <Camera className="w-3 h-3" /> Classrooms
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {classroomImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxSet({ images: allCampus, idx: i })}
            className="group relative aspect-video rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ring-2 ring-transparent hover:ring-emerald-500/40"
          >
            <Image
              src={src}
              alt={`Classroom ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
          <Users className="w-3 h-3" /> Seminars & Events
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {seminarImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxSet({ images: allCampus, idx: classroomImages.length + i })}
            className="group relative aspect-video rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ring-2 ring-transparent hover:ring-indigo-500/40"
          >
            <Image
              src={src}
              alt={`Seminar ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {lightboxSet && (
        <Lightbox
          images={lightboxSet.images}
          startIndex={lightboxSet.idx}
          onClose={() => setLightboxSet(null)}
        />
      )}
    </>
  );
}

// ─── ACCA Videos Tab ──────────────────────────────────────────────────────────

function AccaVideosTab() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {accaVideos.map((v, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-[#101F3D] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Video thumbnail */}
            <div className="relative aspect-[9/16] sm:aspect-video">
              <video
                src={v.src}
                className="w-full h-full object-cover opacity-60"
                muted
                playsInline
                preload="metadata"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D] via-[#101F3D]/20 to-transparent" />

              {/* Play button */}
              <button
                onClick={() => setActiveVideo(v.src)}
                aria-label={`Play ${v.name}'s testimonial`}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/btn"
              >
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover/btn:scale-110 transition-transform duration-200">
                  <Play className="w-6 h-6 fill-[#2855E8] text-[#2855E8] ml-1" />
                </div>
              </button>
            </div>

            {/* Card footer */}
            <div className="p-4 bg-[#101F3D]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2855E8] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {v.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{v.name}</p>
                  <p className="text-[#DCA43A] text-xs font-medium">{v.label}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-[#DCA43A] text-[#DCA43A]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <VideoLightbox src={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SocialProofSection() {
  const [activeTab, setActiveTab] = useState<TabId>("reviews");

  const tabColorMap: Record<TabId, string> = {
    reviews: "bg-[#2855E8] text-white border-[#2855E8]",
    results: "bg-[#DCA43A] text-white border-[#DCA43A]",
    campus: "bg-emerald-600 text-white border-emerald-600",
    videos: "bg-purple-600 text-white border-purple-600",
  };

  const inactiveClass =
    "bg-white text-[#66758C] border-slate-200 hover:border-[#2855E8]/40 hover:text-[#2855E8]";

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#DCA43A]" />
            <span>Verified Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
            Why Students{" "}
            <span className="text-[#2855E8]">Trust SKD Group</span>
          </h2>
          <p className="mt-4 text-base text-[#66758C] leading-relaxed">
            Real reviews, verified results, campus moments, and student testimonials — straight from the students who lived the journey.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "500+", label: "Students Enrolled", icon: Users, color: "text-[#2855E8]" },
            { value: "95%", label: "First Attempt Pass Rate", icon: Trophy, color: "text-[#DCA43A]" },
            { value: "4.9★", label: "Google Rating", icon: Star, color: "text-emerald-600" },
            { value: "10+", label: "Years of Excellence", icon: Sparkles, color: "text-purple-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F8FAFF] rounded-2xl p-5 text-center border border-slate-100 shadow-sm">
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-[#66758C] font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id ? tabColorMap[tab.id] : inactiveClass
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "reviews" && <ReviewImagesTab />}
          {activeTab === "results" && <ResultsTab />}
          {activeTab === "campus" && <CampusTab />}
          {activeTab === "videos" && <AccaVideosTab />}
        </div>
      </div>
    </section>
  );
}
