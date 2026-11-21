export interface GalleryItem {
  id: string;
  title: string;
  category: "Classroom" | "Seminars & Events" | "Campus Life" | "Corporate Workshops";
  image: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  // ── Classroom Photos (real SKD images) ───────────────────────────────────
  {
    id: "g1",
    title: "SKD Classroom — Lecture Session",
    category: "Classroom",
    image: "/assets/classroom/1.png",
    caption: "Live classroom session at SKD Group of Institutions, Godrej Eternia, Chandigarh.",
  },
  {
    id: "g2",
    title: "SKD Classroom — Study Environment",
    category: "Classroom",
    image: "/assets/classroom/2.png",
    caption: "Students engaged in focused study at our professional learning environment.",
  },
  {
    id: "g3",
    title: "SKD Classroom — Interactive Learning",
    category: "Classroom",
    image: "/assets/classroom/3.png",
    caption: "Faculty-led interactive session at SKD Group, Phase 1, Chandigarh.",
  },
  {
    id: "g4",
    title: "SKD Campus — Learning Space",
    category: "Campus Life",
    image: "/assets/classroom/4.png",
    caption: "Our modern campus facility at Godrej Eternia, Phase 1, Chandigarh.",
  },
  {
    id: "g5",
    title: "SKD Classroom — Batch Session",
    category: "Classroom",
    image: "/assets/classroom/5.png",
    caption: "Professional accounting batch in progress at SKD Group of Institutions.",
  },
  {
    id: "g6",
    title: "SKD Campus — Academic Infrastructure",
    category: "Campus Life",
    image: "/assets/classroom/6.png",
    caption: "State-of-the-art learning facilities at our Chandigarh campus.",
  },
  // ── Seminar & Events (real SKD images) ───────────────────────────────────
  {
    id: "g7",
    title: "SKD Seminar — Student Event",
    category: "Seminars & Events",
    image: "/assets/seminar/Enhanced_Photo_01.jpg",
    caption: "SKD Group of Institutions student seminar and orientation event.",
  },
  {
    id: "g8",
    title: "SKD Seminar — Academic Programme",
    category: "Seminars & Events",
    image: "/assets/seminar/Enhanced_Photo_02.jpg",
    caption: "Professional development seminar conducted by SKD faculty.",
  },
  {
    id: "g9",
    title: "SKD Seminar — Workshop",
    category: "Corporate Workshops",
    image: "/assets/seminar/Enhanced_Photo_03.jpg",
    caption: "Corporate and professional skills workshop at SKD Group.",
  },
  {
    id: "g10",
    title: "SKD Event — Student Activity",
    category: "Seminars & Events",
    image: "/assets/seminar/Enhanced_Photo_04.jpg",
    caption: "Student engagement and academic event at SKD Group of Institutions.",
  },
  {
    id: "g11",
    title: "SKD Seminar — Batch Celebration",
    category: "Campus Life",
    image: "/assets/seminar/Enhanced_Photo_05.jpg",
    caption: "Celebrating student achievements and batch milestones at SKD.",
  },
  {
    id: "g12",
    title: "SKD Event — Institute Activity",
    category: "Seminars & Events",
    image: "/assets/seminar/Enhanced_Photo_06.jpg",
    caption: "Institute-wide event and student felicitation at SKD Group.",
  },
];
