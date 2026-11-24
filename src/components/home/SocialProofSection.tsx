"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  TouchEvent,
} from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize,
  Star,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Video,
} from "lucide-react";

// ─── Data from c:\SKD\final images ───────────────────────────────────────────

const accaVideos = [
  { src: "/assets/videos/acca-testimonials/Abhiraj Bakshi.mp4", name: "Abhiraj Bakshi", course: "ACCA Global Chartered Accountant", batch: "Chandigarh Campus" },
  { src: "/assets/videos/acca-testimonials/Anahita Singh.mp4", name: "Anahita Singh", course: "ACCA Global Chartered Accountant", batch: "Chandigarh Campus" },
  { src: "/assets/videos/acca-testimonials/Arshpreet Kaur.mp4", name: "Arshpreet Kaur", course: "ACCA Merit Ranker — Financial Accounting", batch: "October 2026 Batch" },
  { src: "/assets/videos/acca-testimonials/Harsimar Kaur.mp4", name: "Harsimar Kaur", course: "ACCA Global Chartered Accountant", batch: "Chandigarh Campus" },
  { src: "/assets/videos/acca-testimonials/Jasmine Kaur.mp4", name: "Jasmine Kaur", course: "ACCA Global Chartered Accountant", batch: "Chandigarh Campus" },
  { src: "/assets/videos/acca-testimonials/pranjal.mp4", name: "Pranjal", course: "ACCA Global Chartered Accountant", batch: "Chandigarh Campus" },
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

// Analyzed real student reviews directly extracted from the review images
const studentReviewsData = [
  {
    name: "Aryan Thakur",
    course: "Data Analytics (60 Hours Industrial Training)",
    quote: "You made every topic easy to understand by explaining everything in a simple and patient way. I have learned a lot and feel much more confident applying data analysis concepts now.",
    batch: "15-Day Industrial Internship Batch",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.23 PM (2).jpeg",
  },
  {
    name: "Ayan Meer",
    course: "Advanced Excel & Power BI",
    quote: "The 15-day Advanced Excel and Power BI training at SKD Institute was excellent. The trainer explained complex topics like pivot tables, VLOOKUP, macros, and dashboards in a clear, practical way. Hands-on exercises and real-world examples made learning engaging. Doubts were resolved patiently. I now feel confident applying these skills professionally. Highly recommended!",
    batch: "15-Day Internship Program",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
  },
  {
    name: "Atharav Sharma",
    course: "MS Excel & Advanced Excel (20 Hours)",
    quote: "The way you explained every topic, provided us with practice questions, and patiently cleared all our doubts made learning easy and interesting. Excellent faculty support throughout!",
    batch: "20-Hour Industrial Training",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM (1).jpeg",
  },
  {
    name: "Shrishty Chaudhary",
    course: "Advanced Excel Workshop",
    quote: "So knowledgeable workshop and the way you teach us is incredible. Thank you for being such a wonderful mentor during our Advanced Excel workshop. Today being our last day, I wanted to express how much I appreciate your patience and dedication in simplifying tough topics for us. I'm truly grateful for everything I've learned under your guidance.",
    batch: "Excel Workshop Batch",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.26.32 PM.jpeg",
  },
  {
    name: "Neha",
    course: "Advanced Excel (15-Day Internship)",
    quote: "The 15-day Advanced Excel internship was a great learning experience. I learned many useful Excel functions and improved my practical knowledge. The sessions were informative, easy to understand, and helpful for my future career. I appreciate this wonderful opportunity!",
    batch: "15-Day Internship Cohort",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
  },
  {
    name: "Shubham Maurya",
    course: "Advanced Excel Formulas & Dashboards",
    quote: "Thank you Ma'am, for teaching Excel so well. Your explanation made even difficult formulas easy. Really grateful for the support and patient mentorship!",
    batch: "Excel Training Cohort",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
  },
  {
    name: "Nissen Varghese Binu",
    course: "Data Analytics (60 Hours Industrial Training)",
    quote: "It was a great learning journey. The content was excellent, and the sessions were incredibly helpful. Hands-on datasets made the analytical concepts come alive.",
    batch: "Data Analytics Internship",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.23 PM (2).jpeg",
  },
  {
    name: "Ashish Kumar",
    course: "Advanced Excel (15-Day Training)",
    quote: "Thank you team SKD for this excellent 15-day advanced excel training. The sessions were informative and practical helping me enhance my excel skills and technical knowledge. It was a valuable learning experience and I truly appreciate this opportunity.",
    batch: "15-Day Training Batch",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
  },
  {
    name: "Vansh Rawal",
    course: "Advanced Excel in Business",
    quote: "Thank you so much for providing us with this wonderful session. The session was quite interactive, informative, and easy to understand. It showed us exactly how Excel works in real business scenarios.",
    batch: "Corporate Skills Cohort",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.27.01 PM.jpeg",
  },
  {
    name: "Aaryansh Sharma",
    course: "Power BI (Industrial Training)",
    quote: "The practical skills and knowledge you shared have provided us with a valuable learning experience that will greatly benefit our academic and professional growth.",
    batch: "Power BI Industrial Training",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM.jpeg",
  },
  {
    name: "Ayan Khan",
    course: "Power BI Dashboards & Reports",
    quote: "This training truly helped me grow, gain confidence, and believe in my own potential. Practical datasets and patient doubt resolution made all the difference.",
    batch: "Power BI Industrial Training",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-02 at 4.02.24 PM.jpeg",
  },
  {
    name: "Prachi",
    course: "Professional Workshop Cohort",
    quote: "A heartfelt thank you to Deepika Ma'am and the entire SKD team for this wonderful opportunity. It was a lovely journey, and I'm grateful to have been a part of it. Looking forward to more such opportunities!",
    batch: "Workshop Cohort",
    screenshot: "/assets/reviews/WhatsApp Image 2026-11-19 at 4.33.43 PM.jpeg",
  },
];

const resultImages = [
  "/assets/results/Enhanced_Photo_06.jpg",
  "/assets/results/Enhanced_Photo_09.jpg",
  "/assets/results/12d5089e-a65b-45a2-881c-3e7ab19cdccb.png",
  "/assets/results/187e7fbd-dbbf-4fb9-ad04-8b804b08cd4a.png",
  "/assets/results/124f5707-11e4-41ed-9e3c-dfa29fae004e.png",
  "/assets/results/21581df1-bbb3-4253-9c19-06955675ad67.png",
  "/assets/results/3ff74f5f-3433-46d9-803f-7c827451580a.png",
  "/assets/results/42e1ca98-e30f-471e-beee-a9013f84468a.png",
  "/assets/results/4560808a-676d-4f33-82b7-3d487998f1d1.png",
  "/assets/results/6ce7a758-7957-4ae6-aafb-986a2b1848ef.png",
  "/assets/results/9d05a731-69ed-4510-9791-8188adb436c0.png",
  "/assets/results/c67e9637-d098-402c-8453-71a55c6df85a.png",
];

const classroomImages = [
  "/assets/classroom/1.png",
  "/assets/classroom/2.png",
  "/assets/classroom/3.png",
  "/assets/classroom/4.png",
  "/assets/classroom/5.png",
  "/assets/classroom/6.png",
  "/assets/seminar/539522c2-f240-423e-864f-71f7c49a998b.png",
  "/assets/seminar/8a31514b-3bf3-41a1-a7ab-d435122617d1.png",
  "/assets/seminar/8bb597be-16eb-4192-be3c-eb62aa25e65b.png",
  "/assets/seminar/a149252f-1ae6-4d80-a80f-a6ac164e1c9d.png",
  "/assets/seminar/b705ed92-b362-426d-83bf-f3c0bcc4f539.png",
  "/assets/seminar/fd167125-44d5-469f-94e6-6ca26ef286bd.png",
];

const resultVideos = [
  "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM.mp4",
  "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.44.52 PM1.mp4",
  "/assets/videos/results/WhatsApp Video 2026-11-19 at 3.45.11 PM.mp4",
];

const workshopVideos = [
  { src: "/assets/videos/reviews/new video.mp4", label: "Student Session Review" },
  { src: "/assets/videos/reviews/new one.mp4", label: "Workshop Experience" },
  { src: "/assets/videos/reviews/WhatsApp Video 2026-11-02 at 4.12.29 PM.mp4", label: "Lecture & Training Feedback" },
  { src: "/assets/videos/reviews/WhatsApp Video 2026-11-19 at 4.24.55 PM.mp4", label: "Classroom Student Feedback" },
];

// ─── Image Lightbox ───────────────────────────────────────────────────────────

function ImageLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const prev = useCallback(() => setIdx((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setIdx((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
        <X className="w-5 h-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="relative max-w-4xl max-h-[88vh] w-full" onClick={(e) => e.stopPropagation()}>
        <Image src={images[idx]} alt={`SKD Media ${idx + 1}`} width={1200} height={900} className="rounded-2xl object-contain max-h-[88vh] w-auto mx-auto" unoptimized />
        <p className="text-center mt-3 text-white/50 text-xs">{idx + 1} of {images.length} · SKD Group Official Records</p>
      </div>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ─── Inline Video Player Card ─────────────────────────────────────────────────

interface VideoCardProps {
  video: { src: string; name: string; course: string; batch?: string };
  isActive: boolean;
  isSide: boolean;
  onActivate: () => void;
  playingId: string | null;
  setPlayingId: (id: string | null) => void;
}

function VideoCard({ video, isActive, isSide, onActivate, playingId, setPlayingId }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const videoId = video.src;

  useEffect(() => {
    if (playingId !== videoId && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [playingId, videoId, isPlaying]);

  useEffect(() => {
    if (!isActive && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const handlePlay = useCallback(async () => {
    if (!isActive) { onActivate(); return; }
    if (!videoRef.current || error) return;
    try {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        setPlayingId(videoId);
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setError(true);
    }
  }, [isActive, isPlaying, error, onActivate, setPlayingId, videoId]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100 || 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pct * duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      onClick={!isActive ? onActivate : undefined}
      style={{
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        transform: isSide
          ? "perspective(1200px) rotateY(0deg) scale(0.9)"
          : "perspective(1200px) scale(1.02)",
        opacity: isSide ? 0.72 : 1,
        cursor: !isActive ? "pointer" : "default",
      }}
      className={`relative flex-shrink-0 rounded-2xl overflow-hidden bg-[#0d1724] ${
        isActive
          ? "ring-2 ring-[#3659D9]/70 shadow-[0_12px_48px_rgba(54,89,217,0.3)]"
          : "ring-1 ring-white/10 shadow-lg"
      }`}
    >
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {!error ? (
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-full object-cover"
            preload="metadata"
            playsInline
            onLoadedMetadata={() => { setLoaded(true); if (videoRef.current) setDuration(videoRef.current.duration); }}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0d1724]">
            <p className="text-white/40 text-sm">Video unavailable</p>
          </div>
        )}

        {!error && (
          <button
            onClick={handlePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
              isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
            } group`}
            style={{ background: isPlaying ? "transparent" : "rgba(0,0,0,0.25)" }}
          >
            <div className={`flex items-center justify-center rounded-full bg-white shadow-xl transition-all duration-200 group-hover:scale-110 ${
              isActive ? "w-14 h-14" : "w-10 h-10"
            }`}>
              {isPlaying
                ? <Pause className={`text-[#3659D9] fill-[#3659D9] ${isActive ? "w-6 h-6" : "w-4 h-4"}`} />
                : <Play className={`text-[#3659D9] fill-[#3659D9] ml-0.5 ${isActive ? "w-6 h-6" : "w-4 h-4"}`} />
              }
            </div>
          </button>
        )}

        {!loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>

      {isActive && loaded && !error && (
        <div className="bg-[#0d1724]/95 px-4 py-2.5 flex flex-col gap-2">
          <div
            className="w-full h-1.5 bg-white/15 rounded-full cursor-pointer group"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#3659D9] rounded-full transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/50 text-[11px] tabular-nums">
              {formatTime(videoRef.current?.currentTime ?? 0)} / {formatTime(duration)}
            </span>
            <div className="flex items-center gap-2">
              <button onClick={toggleMute} aria-label="Toggle mute" className="text-white/60 hover:text-white transition-colors">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button onClick={handleFullscreen} aria-label="Fullscreen" className="text-white/60 hover:text-white transition-colors">
                <Maximize className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {isActive && (
        <div className="bg-[#0a1120] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#3659D9] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {video.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">{video.name}</p>
            <p className="text-[#D8C6AA] text-xs font-medium truncate">{video.course}</p>
          </div>
          <div className="ml-auto text-[10px] font-bold text-[#D8C6AA] bg-[#D8C6AA]/10 border border-[#D8C6AA]/20 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            Verified ACCA
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Video Carousel ───────────────────────────────────────────────────────────

function VideoCarousel() {
  const [active, setActive] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const total = accaVideos.length;
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => {
    setPlayingId(null);
    setActive((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const next = useCallback(() => {
    setPlayingId(null);
    setActive((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  const goTo = (i: number) => {
    setPlayingId(null);
    setActive(i);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [prev, next]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  return (
    <div
      className="relative w-full"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-center gap-4 md:gap-6 px-4 py-6">
        <div className="hidden sm:block flex-shrink-0 w-64 md:w-80">
          <VideoCard
            video={accaVideos[leftIdx]}
            isActive={false}
            isSide={true}
            onActivate={() => goTo(leftIdx)}
            playingId={playingId}
            setPlayingId={setPlayingId}
          />
        </div>

        <div className="flex-shrink-0 w-full sm:w-80 md:w-[480px] max-w-[520px]">
          <VideoCard
            video={accaVideos[active]}
            isActive={true}
            isSide={false}
            onActivate={() => {}}
            playingId={playingId}
            setPlayingId={setPlayingId}
          />
        </div>

        <div className="hidden sm:block flex-shrink-0 w-64 md:w-80">
          <VideoCard
            video={accaVideos[rightIdx]}
            isActive={false}
            isSide={true}
            onActivate={() => goTo(rightIdx)}
            playingId={playingId}
            setPlayingId={setPlayingId}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {accaVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 h-2.5 bg-[#3659D9]"
                    : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// ─── Analyzed Real Reviews Tab ────────────────────────────────────────────────

function AnalyzedReviewsTab() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"cards" | "screenshots">("cards");

  return (
    <div className="space-y-8">
      {/* View Mode Switcher */}
      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setViewMode("cards")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            viewMode === "cards"
              ? "bg-[#3659D9] text-white shadow-md shadow-[#3659D9]/30"
              : "bg-white/5 text-white/60 hover:text-white border border-white/10"
          }`}
        >
          Verified Student Quotes ({studentReviewsData.length})
        </button>
        <button
          type="button"
          onClick={() => setViewMode("screenshots")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            viewMode === "screenshots"
              ? "bg-[#3659D9] text-white shadow-md shadow-[#3659D9]/30"
              : "bg-white/5 text-white/60 hover:text-white border border-white/10"
          }`}
        >
          Original Screenshots & Chats ({reviewScreenshots.length})
        </button>
      </div>

      {/* Cards View */}
      {viewMode === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {studentReviewsData.map((review, i) => (
            <div
              key={i}
              className="bg-[#0e1726] border border-white/10 hover:border-[#3659D9]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#D8C6AA] text-[#D8C6AA]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Verified
                  </span>
                </div>

                <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-[#3659D9] text-xs font-semibold">{review.course}</p>
                  <p className="text-white/40 text-[11px] mt-0.5">{review.batch}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const idx = reviewScreenshots.indexOf(review.screenshot);
                    setLightboxIdx(idx >= 0 ? idx : 0);
                  }}
                  className="text-[11px] text-[#D8C6AA] hover:underline whitespace-nowrap ml-2"
                >
                  View Proof ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Screenshots View */}
      {viewMode === "screenshots" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {reviewScreenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-[#3659D9]/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Image
                src={src}
                alt={`Student review proof ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] bg-black/70 backdrop-blur-md text-white px-2 py-0.5 rounded-full font-medium">
                  Verified Proof
                </span>
                <span className="text-[10px] text-white/70">Click to zoom</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {lightboxIdx !== null && (
        <ImageLightbox images={reviewScreenshots} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </div>
  );
}

// ─── Results Tab ──────────────────────────────────────────────────────────────

function ResultsTab() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (src: string, idx: number) => {
    if (playingVideo === src) {
      videoRefs.current[idx]?.pause();
      setPlayingVideo(null);
    } else {
      videoRefs.current.forEach((v, i) => { if (i !== idx && v) v.pause(); });
      videoRefs.current[idx]?.play().catch(() => {});
      setPlayingVideo(src);
    }
  };

  return (
    <div className="space-y-8">
      {/* Featured Merit Rankers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden border border-[#D8C6AA]/30 bg-[#0e1726] p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-[#D8C6AA]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#D8C6AA]">
              ACCA Top Scorer — October Attempt
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">Arshpreet Kaur</h3>
          <p className="text-[#3659D9] text-sm font-semibold mt-1">Financial Accounting (FA) & SBR Milestone</p>
          <p className="text-white/60 text-xs mt-2 leading-relaxed">
            Congratulations on your outstanding result! Hard work, dedication, and consistency paid off at SKD Group of Institutions.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setLightboxIdx(0)}
              className="px-4 py-2 bg-[#D8C6AA] text-[#172238] font-bold text-xs rounded-xl hover:bg-white transition-all shadow-md"
            >
              View Official Scorecard ↗
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-[#D8C6AA]/30 bg-[#0e1726] p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-[#D8C6AA]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#D8C6AA]">
              ACCA High Scorer — October Attempt
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">Hitesh Goyal</h3>
          <p className="text-[#3659D9] text-sm font-semibold mt-1">Financial Accounting (FA) High Clearance</p>
          <p className="text-white/60 text-xs mt-2 leading-relaxed">
            Recognized for outstanding preparation on computer-based exam practice and mock test mastery at SKD CBE Centre.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setLightboxIdx(1)}
              className="px-4 py-2 bg-[#D8C6AA] text-[#172238] font-bold text-xs rounded-xl hover:bg-white transition-all shadow-md"
            >
              View Official Scorecard ↗
            </button>
          </div>
        </div>
      </div>

      {/* Results Scorecards Grid */}
      <div>
        <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4">
          All Verified Scorecards & Clearance Proofs ({resultImages.length})
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {resultImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-[#D8C6AA]/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Image src={src} alt={`Result scorecard ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
              <span className="absolute bottom-2 left-2 text-[10px] bg-black/70 backdrop-blur-md text-white px-2 py-0.5 rounded-full font-medium">
                Verified Result
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Result Celebration Videos */}
      <div>
        <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-4">
          Result Celebration & Student Moments ({resultVideos.length})
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {resultVideos.map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden bg-[#0d1724] ring-1 ring-white/10">
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={src}
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  controls={playingVideo === src}
                  onEnded={() => setPlayingVideo(null)}
                />
                {playingVideo !== src && (
                  <button
                    onClick={() => handleVideoClick(src, i)}
                    className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#D8C6AA] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-5 h-5 fill-[#172238] text-[#172238] ml-0.5" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox images={resultImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </div>
  );
}

// ─── Campus & Seminars Tab ────────────────────────────────────────────────────

function CampusTab() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest">
          Classroom & Seminar Moments at Godrej Eternia ({classroomImages.length})
        </h4>
        <span className="text-xs text-white/40">Click any photo for high-resolution view</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {classroomImages.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative aspect-video rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-[#3659D9]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Image src={src} alt={`Campus photo ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
            <span className="absolute bottom-2 left-2 text-[10px] bg-black/70 backdrop-blur-md text-white px-2 py-0.5 rounded-full font-medium">
              {i < 6 ? "Classroom Lab" : "Student Seminar"}
            </span>
          </button>
        ))}
      </div>

      {lightboxIdx !== null && (
        <ImageLightbox images={classroomImages} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </div>
  );
}

// ─── Workshop Videos Tab ──────────────────────────────────────────────────────

function WorkshopVideosTab() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (src: string, idx: number) => {
    if (playingVideo === src) {
      videoRefs.current[idx]?.pause();
      setPlayingVideo(null);
    } else {
      videoRefs.current.forEach((v, i) => { if (i !== idx && v) v.pause(); });
      videoRefs.current[idx]?.play().catch(() => {});
      setPlayingVideo(src);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-xl mx-auto mb-6">
        <p className="text-white/60 text-sm">
          Watch unedited classroom reviews and workshop sessions recorded during our industrial training and internship programs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {workshopVideos.map((v, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden bg-[#0d1724] ring-1 ring-white/10 shadow-xl">
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
                  onClick={() => handleVideoClick(v.src, i)}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 hover:bg-black/20 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-6 h-6 fill-[#3659D9] text-[#3659D9] ml-1" />
                  </div>
                  <span className="mt-3 text-white text-xs font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                    {v.label}
                  </span>
                </button>
              )}
            </div>
            <div className="p-4 bg-[#0a1120] flex items-center justify-between">
              <span className="text-white font-medium text-sm">{v.label}</span>
              <span className="text-xs text-[#D8C6AA] font-bold">15-Day Workshop</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Tab definitions ──────────────────────────────────────────────────────────

type TabId = "videos" | "reviews" | "results" | "campus" | "workshops";

const TABS: { id: TabId; label: string; badge?: string }[] = [
  { id: "videos", label: "ACCA Video Stories", badge: "6 Videos" },
  { id: "reviews", label: "Student Reviews", badge: "12 Reviews" },
  { id: "results", label: "Exam Results & Scorecards", badge: "Rankers" },
  { id: "campus", label: "Classroom & Campus Life", badge: "12 Photos" },
  { id: "workshops", label: "Workshop Reviews", badge: "4 Videos" },
];

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function SocialProofSection() {
  const [activeTab, setActiveTab] = useState<TabId>("videos");

  return (
    <section className="relative py-16 sm:py-24 bg-[#080f1e] overflow-hidden border-b border-white/8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#3659D9]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#D8C6AA]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-10 h-px bg-[#3659D9]/60" />
            <span className="text-[#3659D9] text-[11px] font-bold tracking-[0.25em] uppercase">Verified Social Proof</span>
            <span className="w-10 h-px bg-[#3659D9]/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Student Reviews & Verified Proof —
            <br />
            <em className="not-italic text-[#3659D9] font-bold">Hear from Our Alumni</em>
          </h2>
          <p className="mt-4 text-white/55 text-base max-w-xl mx-auto leading-relaxed">
            Authentic video testimonials, genuine written feedback, official exam scorecards, and campus moments directly from SKD students.
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 inline-flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-[#3659D9] border-[#3659D9] text-white shadow-lg shadow-[#3659D9]/30"
                  : "border-white/15 text-white/60 hover:text-white hover:border-white/30 bg-transparent"
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-white/10 text-white/50"
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="min-h-[400px]">
          {activeTab === "videos" && <VideoCarousel />}
          {activeTab === "reviews" && <AnalyzedReviewsTab />}
          {activeTab === "results" && <ResultsTab />}
          {activeTab === "campus" && <CampusTab />}
          {activeTab === "workshops" && <WorkshopVideosTab />}
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/8 border border-white/8 rounded-2xl overflow-hidden bg-white/[0.02]">
          {[
            { value: "500+", label: "Students Enrolled" },
            { value: "85%+", label: "Batch Pass Rate" },
            { value: "4.9★", label: "Verified Rating" },
            { value: "Silver ALP", label: "Approved ACCA Status" },
          ].map((stat, i) => (
            <div key={i} className="px-6 py-6 text-center">
              <div className="text-2xl font-extrabold text-[#3659D9]">{stat.value}</div>
              <div className="text-[11px] text-white/45 font-medium mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
