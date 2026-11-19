export interface ProfessionalCourseModule {
  title: string;
  topics: string[];
}

export interface ProfessionalCourse {
  slug: string;
  title: string;
  parentSlug: string;
  route: string;
  tagline: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    badge: string;
  };
  duration: string;
  originalPrice: number;
  offerPrice: number;
  savings: number;
  batchInfo: string;
  shortDesc: string;
  overview: string;
  whoShouldEnroll: string[];
  modules: ProfessionalCourseModule[];
  skills: string[];
  outcomes: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
}

export const professionalCoursesData: ProfessionalCourse[] = [
  // ─── Course 1: Data Analytics ───────────────────────────────────────────────
  {
    slug: "data-analytics",
    title: "Data Analytics",
    parentSlug: "corporate-training",
    route: "/corporate-training/data-analytics",
    tagline: "Turn Raw Data into Business Insights",
    theme: {
      primary: "#1D4ED8",
      secondary: "#1E3A8A",
      accent: "#3B82F6",
      bg: "#EFF6FF",
      badge: "blue",
    },
    duration: "45 Hours | 45 Days",
    originalPrice: 25000,
    offerPrice: 999,
    savings: 24001,
    batchInfo: "Contact for Schedule",
    shortDesc:
      "Master the full data analysis workflow — from raw datasets to executive dashboards — using industry-standard tools and business-focused methodologies.",
    overview:
      "Data Analytics is one of the most in-demand skills in today's data-driven business world. This practical course takes you from understanding raw datasets to producing executive-level business insights. You'll work through real business scenarios covering sales analysis, customer behaviour, HR metrics, and financial data — building the analytical confidence that organizations urgently need.",
    whoShouldEnroll: [
      "Commerce graduates and postgraduates seeking analytics roles",
      "Finance and accounting professionals adding data skills",
      "MBA students strengthening business intelligence capabilities",
      "Working professionals upskilling for analytics-driven roles",
    ],
    modules: [
      {
        title: "Module 1: Introduction to Data Analytics",
        topics: [
          "What is Data Analytics and why it matters",
          "Types of analytics: descriptive, diagnostic, predictive, prescriptive",
          "Data analytics lifecycle and workflow",
          "Overview of tools: Excel, SQL, Power BI",
          "Understanding structured vs unstructured data",
        ],
      },
      {
        title: "Module 2: Data Collection & Cleaning",
        topics: [
          "Sources of business data",
          "Importing data from CSV, Excel, and databases",
          "Identifying and handling missing values",
          "Removing duplicates and inconsistencies",
          "Data type conversions and normalization",
        ],
      },
      {
        title: "Module 3: Exploratory Data Analysis (EDA)",
        topics: [
          "Summary statistics: mean, median, mode, standard deviation",
          "Distribution analysis and outlier detection",
          "Correlation and covariance",
          "Pivot tables for exploratory summarization",
          "Filtering, sorting, and slicing datasets",
        ],
      },
      {
        title: "Module 4: Business KPI Analysis",
        topics: [
          "Defining and measuring KPIs",
          "Sales performance metrics",
          "Customer acquisition and retention KPIs",
          "HR analytics: attrition, headcount, productivity",
          "Financial KPIs: revenue, margins, cash flow ratios",
        ],
      },
      {
        title: "Module 5: Data Visualization",
        topics: [
          "Chart selection principles",
          "Bar, line, pie, scatter, and combo charts",
          "Conditional formatting for visual emphasis",
          "Sparklines and in-cell data bars",
          "Dashboard layout and design best practices",
        ],
      },
      {
        title: "Module 6: Business Reporting & Dashboards",
        topics: [
          "Building executive-ready reports",
          "Dynamic dashboards with slicers and dropdowns",
          "Automating recurring reports",
          "Structuring narrative insights for stakeholders",
          "Presenting data to non-technical audiences",
        ],
      },
      {
        title: "Module 7: Capstone — End-to-End Analytics Project",
        topics: [
          "Real-world business dataset assignment",
          "Data cleaning and EDA",
          "KPI identification and analysis",
          "Dashboard creation",
          "Final presentation and feedback",
        ],
      },
    ],
    skills: [
      "Data cleaning and preparation",
      "Exploratory Data Analysis (EDA)",
      "Business KPI analysis",
      "Data visualization and chart selection",
      "Executive reporting and dashboards",
      "Sales, HR and financial data analysis",
      "Data storytelling and presentation",
    ],
    outcomes:
      "Students will develop foundational skills in understanding datasets, cleaning and analyzing information, identifying patterns, visualizing insights, and preparing business reports that drive decisions.",
    faqs: [
      {
        question: "Do I need programming knowledge to join this course?",
        answer:
          "No programming knowledge is required. This course uses Excel and business-focused tools, making it ideal for commerce and finance professionals without a technical background.",
      },
      {
        question: "What tools will be covered in the Data Analytics course?",
        answer:
          "The course primarily covers Microsoft Excel for data analysis and visualization, supplemented by an introduction to SQL concepts and Power BI for dashboarding.",
      },
      {
        question: "Will I get hands-on practice with real data?",
        answer:
          "Yes. Every module includes practical exercises using real-world business datasets covering sales, HR, and financial data. The course ends with a capstone end-to-end analytics project.",
      },
      {
        question: "Is this course suitable for freshers?",
        answer:
          "Absolutely. The course is designed for commerce graduates, MBA students, and freshers who want to build job-ready analytics skills and transition into data-driven business roles.",
      },
    ],
    metaTitle: "Data Analytics Course in Chandigarh | SKD Group",
    metaDescription:
      "Learn Data Analytics at SKD Group Chandigarh. 45-hour practical course covering EDA, visualization, business reporting, and KPI analysis. ₹999 limited offer.",
    canonicalUrl: "/corporate-training/data-analytics",
  },

  // ─── Course 2: Microsoft Power BI ───────────────────────────────────────────
  {
    slug: "power-bi",
    title: "Microsoft Power BI",
    parentSlug: "corporate-training",
    route: "/corporate-training/power-bi",
    tagline: "Build Interactive Reports & Dashboards",
    theme: {
      primary: "#D97706",
      secondary: "#92400E",
      accent: "#F59E0B",
      bg: "#FFFBEB",
      badge: "amber",
    },
    duration: "45 Hours | 45 Days",
    originalPrice: 25000,
    offerPrice: 999,
    savings: 24001,
    batchInfo: "Contact for Schedule",
    shortDesc:
      "Build powerful interactive dashboards and reports using Microsoft Power BI — from data import and Power Query to DAX calculations and publishing to Power BI Service.",
    overview:
      "Microsoft Power BI is the world's leading business intelligence platform, used by over 5 million organizations globally. This comprehensive course teaches you to connect diverse data sources, transform raw data using Power Query, build complex DAX measures, and design stunning dashboards that your leadership can act on. By the end, you'll publish reports to Power BI Service and configure Row-Level Security.",
    whoShouldEnroll: [
      "Data and business analysts",
      "Finance and accounting professionals",
      "MIS executives and reporting analysts",
      "Anyone moving into BI and analytics roles",
    ],
    modules: [
      {
        title: "Module 1: Introduction to Power BI",
        topics: [
          "What is Power BI and its ecosystem",
          "Power BI Desktop, Service, and Mobile overview",
          "Installing and navigating Power BI Desktop",
          "Connecting to your first data source",
          "Understanding the Power BI workflow",
        ],
      },
      {
        title: "Module 2: Data Import & Connections",
        topics: [
          "Importing from Excel and CSV files",
          "Connecting to SQL Server databases",
          "Web data connectors",
          "Direct Query vs Import mode",
          "Managing data source credentials",
        ],
      },
      {
        title: "Module 3: Power Query — Data Transformation",
        topics: [
          "Introduction to Power Query Editor",
          "Removing errors, duplicates, and blank rows",
          "Splitting and merging columns",
          "Pivoting and unpivoting data",
          "Appending and merging queries",
          "Creating custom columns and conditional columns",
        ],
      },
      {
        title: "Module 4: Data Modeling & Relationships",
        topics: [
          "Understanding star schema and snowflake schema",
          "Creating table relationships",
          "One-to-many and many-to-many cardinality",
          "Active vs inactive relationships",
          "Role of a date/calendar table",
        ],
      },
      {
        title: "Module 5: DAX — Data Analysis Expressions",
        topics: [
          "Introduction to DAX syntax and context",
          "Calculated columns vs measures",
          "Essential functions: SUM, CALCULATE, FILTER, ALL",
          "Time intelligence: TOTALYTD, SAMEPERIODLASTYEAR",
          "RANKX, SWITCH, and ISINSCOPE",
          "Writing business KPI measures",
        ],
      },
      {
        title: "Module 6: Dashboard Design & Visualizations",
        topics: [
          "Choosing the right visual for your data",
          "Bar, line, matrix, card, and KPI visuals",
          "Slicers, drill-through, and cross-filtering",
          "Bookmarks and report navigation",
          "Custom themes and corporate branding",
          "Tooltips and conditional formatting",
        ],
      },
      {
        title: "Module 7: Publishing to Power BI Service",
        topics: [
          "Publishing reports from Desktop to Service",
          "Creating and managing workspaces",
          "Scheduling automatic data refresh",
          "Sharing reports and dashboards",
          "Power BI apps for stakeholder distribution",
        ],
      },
      {
        title: "Module 8: Row-Level Security & Capstone Project",
        topics: [
          "Introduction to Row-Level Security (RLS)",
          "Static and dynamic RLS configuration",
          "Testing RLS roles in Power BI Desktop",
          "Applying RLS in Power BI Service",
          "Capstone: end-to-end BI report from raw data to published dashboard",
        ],
      },
    ],
    skills: [
      "Data import from Excel, CSV, SQL, and Web",
      "Power Query data transformation",
      "Data modeling and relationships",
      "DAX calculations and measures",
      "Interactive dashboard design",
      "Publishing to Power BI Service",
      "Row-Level Security (RLS) configuration",
    ],
    outcomes:
      "Students will learn to connect multiple data sources, transform data, create relationships, write DAX calculations, build interactive dashboards, and publish reports through Power BI Service.",
    faqs: [
      {
        question: "Do I need Excel knowledge before joining the Power BI course?",
        answer:
          "Basic Excel familiarity is helpful but not mandatory. The course starts from Power BI fundamentals and progressively covers all concepts, including data import from Excel files.",
      },
      {
        question: "Is Power BI free to use?",
        answer:
          "Power BI Desktop is completely free to download and use. Power BI Service has a free tier with generous limits, and the course covers how to publish and share reports without requiring a paid license during training.",
      },
      {
        question: "Will DAX be covered in depth?",
        answer:
          "Yes. Module 5 is fully dedicated to DAX, covering calculated columns, measures, CALCULATE, FILTER, time intelligence functions, and practical KPI measures used in real corporate reports.",
      },
      {
        question: "What kind of projects will I build during this course?",
        answer:
          "You will build multiple dashboard projects throughout the course, culminating in a capstone project where you take raw business data end-to-end — from import and transformation through to a fully published Power BI Service report.",
      },
    ],
    metaTitle: "Power BI Course in Chandigarh | Microsoft Power BI Training | SKD Group",
    metaDescription:
      "Master Microsoft Power BI at SKD Group Chandigarh. 45-hour course covering Power Query, DAX, interactive dashboards, and Power BI Service. ₹999 limited offer.",
    canonicalUrl: "/corporate-training/power-bi",
  },

  // ─── Course 3: Advanced Excel ────────────────────────────────────────────────
  {
    slug: "advanced-excel",
    title: "Advanced Excel",
    parentSlug: "corporate-training",
    route: "/corporate-training/advanced-excel",
    tagline: "Master Excel from Basics to Dashboards",
    theme: {
      primary: "#059669",
      secondary: "#064E3B",
      accent: "#10B981",
      bg: "#ECFDF5",
      badge: "emerald",
    },
    duration: "45 Hours | 45 Days",
    originalPrice: 25000,
    offerPrice: 999,
    savings: 24001,
    batchInfo: "Contact for Schedule",
    shortDesc:
      "Transform your Excel skills from basic spreadsheets to advanced dashboards, Pivot Tables, Power Query, and professional financial models used in real corporate environments.",
    overview:
      "Advanced Excel remains one of the highest-ROI skills a finance or business professional can possess. This course moves far beyond basic spreadsheet work — covering powerful functions like XLOOKUP and INDEX-MATCH, dynamic Pivot Tables with slicers and timelines, professional dashboard design, and Power Query automation. You'll finish with the confidence to handle any corporate Excel reporting challenge.",
    whoShouldEnroll: [
      "Finance and accounting professionals",
      "Business analysts and MIS executives",
      "Students preparing for corporate placements",
      "Anyone who uses Excel regularly and wants to unlock its full potential",
    ],
    modules: [
      {
        title: "Module 1: Excel Foundations & Efficiency",
        topics: [
          "Excel interface, ribbons, and keyboard shortcuts",
          "Named ranges and absolute vs relative references",
          "Data entry best practices and Flash Fill",
          "Data validation and drop-down lists",
          "Protecting sheets and workbooks",
        ],
      },
      {
        title: "Module 2: Advanced Formulas & Functions",
        topics: [
          "XLOOKUP and VLOOKUP / HLOOKUP",
          "INDEX-MATCH and INDEX-MATCH-MATCH",
          "SUMIFS, COUNTIFS, and AVERAGEIFS",
          "IFERROR, IF nesting, and logical chains",
          "TEXT functions: LEFT, MID, RIGHT, TEXTJOIN",
          "Date and time functions for reporting",
        ],
      },
      {
        title: "Module 3: Pivot Tables & Pivot Charts",
        topics: [
          "Creating and refreshing Pivot Tables",
          "Grouping dates: by month, quarter, year",
          "Calculated fields and calculated items",
          "Slicers and timelines for dynamic filtering",
          "Pivot Charts and chart formatting",
          "Multiple Pivot Tables from one data source",
        ],
      },
      {
        title: "Module 4: Professional Dashboard Design",
        topics: [
          "Dashboard planning and layout principles",
          "Dynamic charts linked to Pivot Tables",
          "Conditional formatting: color scales, data bars, icon sets",
          "Camera tool and linked pictures",
          "Interactive elements: scroll bars and option buttons",
          "Executive-ready dashboard formatting and styling",
        ],
      },
      {
        title: "Module 5: Power Query — Data Automation",
        topics: [
          "Introduction to Power Query in Excel",
          "Importing data from multiple files and folders",
          "Transforming and reshaping data",
          "Appending and merging tables",
          "Refreshing queries automatically",
          "Replacing manual monthly reporting processes",
        ],
      },
      {
        title: "Module 6: What-If Analysis & Financial Modelling",
        topics: [
          "Goal Seek for reverse calculations",
          "Scenario Manager for sensitivity analysis",
          "Data Tables: one-variable and two-variable",
          "Building a 3-statement financial model structure",
          "Loan amortization and EMI schedule",
          "Capstone: corporate reporting dashboard project",
        ],
      },
    ],
    skills: [
      "Advanced formulas: XLOOKUP, INDEX-MATCH, SUMIFS",
      "Pivot Tables with calculated fields and slicers",
      "Professional dashboard design in Excel",
      "Power Query for automated data refresh",
      "Data cleaning and Flash Fill",
      "Goal Seek and What-If analysis",
      "Conditional formatting and data validation",
    ],
    outcomes:
      "Students will develop skills in advanced spreadsheet calculations, data preparation, Pivot Tables, reporting, Excel dashboards, and Power Query-based workflows.",
    faqs: [
      {
        question: "What level of Excel knowledge do I need before joining?",
        answer:
          "Basic Excel familiarity (entering data, simple formulas, saving files) is sufficient. The course starts with efficiency fundamentals and progressively moves to advanced techniques.",
      },
      {
        question: "Will XLOOKUP replace VLOOKUP in this course?",
        answer:
          "Both are covered. XLOOKUP is taught as the modern replacement for VLOOKUP, while VLOOKUP is also explained for compatibility with older Excel versions still used in many corporate environments.",
      },
      {
        question: "Is Power Query included in this Excel course?",
        answer:
          "Yes. Module 5 is fully dedicated to Power Query — covering data import, transformation, appending, merging, and automating monthly reporting workflows that would otherwise require hours of manual work.",
      },
      {
        question: "Will I build real dashboards during the course?",
        answer:
          "Yes. Module 4 is entirely focused on professional dashboard design, and the course ends with a capstone project where you build a corporate-grade reporting dashboard from scratch using a real dataset.",
      },
    ],
    metaTitle: "Advanced Excel Course in Chandigarh | Excel Training | SKD Group",
    metaDescription:
      "Master Advanced Excel at SKD Group Chandigarh. 45-hour course covering XLOOKUP, Pivot Tables, dashboards, and Power Query. ₹999 limited offer.",
    canonicalUrl: "/corporate-training/advanced-excel",
  },
];
