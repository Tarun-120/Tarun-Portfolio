export const personalInfo = {
  name: "Tarun Singh",
  title: "Full Stack Web Developer",
  tagline:
    "I build end-to-end web applications — from pixel-perfect React frontends to production Django backends.",
  email: "ts6216574@gmail.com",
  phone: "+91 8423117480",
  location: "Faridabad, Haryana, India",
  github: "https://github.com/Tarun-120",
  linkedin: "https://www.linkedin.com/in/tarun-singh-8548141b2/",
  resumeUrl: "/Tarun_Singh_Resume.pdf",
};

export const aboutText = [
  "I'm a Full Stack Web Developer with hands-on experience shipping production web applications across the entire stack — Next.js, React, and Tailwind on the frontend; Django REST Framework, PostgreSQL, and Celery on the backend.",
  "I've built internal portals and dashboards used by procurement, R&D, and operations teams — owning the work from Figma mockup to deployed API. I care about clean module boundaries, performance, and writing code that the next person can read.",
  "Currently a CSE graduate from MDU Rohtak (2025), looking to take on full-stack roles where I can own features end-to-end.",
];

export type SkillGroup = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "monitor",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Django Channels (WebSockets)",
      "FastAPI",
      "Node.js",
      "REST API Design",
      "JWT Auth / RBAC",
      "Celery (Async tasks)",
      "MQTT (paho-mqtt)",
    ],
  },
  {
    category: "Database & Cloud",
    icon: "database",
    skills: [
      "PostgreSQL",
      "SQL",
      "AWS S3",
      "AWS EC2",
      "Database Modeling",
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "wrench",
    skills: [
      "Git / GitHub",
      "Docker / Docker Compose",
      "GitHub Actions (CI)",
      "npm",
      "Postman",
      "Figma → Code",
      "Vercel",
      "Linux CLI",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  backend?: string;
  frontend?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Inventory & Production Management Portal",
    description:
      "Full-stack manufacturing operations platform that owns the entire production lifecycle — raw material check-ins, multi-step process sequences, scrap tracking, purchase orders, and per-product cost rollups. Built end-to-end: API design, database modeling, and the React dashboard on top.",
    highlights: [
      "Django REST Framework API with 25+ endpoints across inventory, process, and purchase-order domains",
      "Multi-database routing on PostgreSQL to isolate inventory and procurement data",
      "Process-step engine with configurable inputs/outputs (raw material, coil, sheet, scrap) and signal-driven inventory updates",
      "Async background jobs via Celery for scheduled imports and data migrations",
      "JWT auth with email-domain whitelisting, AWS S3 for file storage",
      "Next.js + TanStack Query frontend with form-heavy dashboards for shop-floor and procurement users",
    ],
    stack: [
      "Django 5",
      "DRF",
      "PostgreSQL",
      "Celery",
      "AWS S3",
      "JWT",
      "Next.js",
      "TanStack Query",
      "Tailwind",
    ],
    backend:
      "https://github.com/Tarun-120/Inventory-Production-Management-Portal-backend",
    frontend:
      "https://github.com/Tarun-120/Inventory-Production-Management-Portal",
    featured: true,
  },
  {
    title: "Inverter Shipment Tracking & Installation Portal",
    description:
      "Full-stack portal for tracking inverter shipments and installation jobs end-to-end — from dispatch to on-site commissioning checklists. FastAPI backend with role-based access control and a Next.js frontend that generates installation/shipping PDFs in-browser.",
    highlights: [
      "FastAPI + SQLAlchemy backend with Alembic migrations and a pytest test suite",
      "RBAC permission layer and configurable installation-checklist templates",
      "Background workers for long-running jobs and a Postman collection for API smoke-tests",
      "Next.js frontend with a dedicated PDF-generator module for shipping and install docs",
      "Dockerized dev/prod stacks (docker-compose.dev / .prod) with GitHub Actions CI",
    ],
    stack: [
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "Docker",
      "Next.js",
      "React",
      "Tailwind",
    ],
    backend:
      "https://github.com/Tarun-120/inverter-Shippment-Tracking-Installing-portal-backend",
    frontend:
      "https://github.com/Tarun-120/inverter-Shippment-Tracking-Installing-portal",
  },
  {
    title: "Daily Report Portal",
    description:
      "Internal reporting platform with a two-service Python backend — Django handles schema + admin, FastAPI serves a typed JSON API to a Next.js SPA. Both services share a single PostgreSQL database, fully containerized with Docker Compose.",
    highlights: [
      "Dual-framework backend: Django for migrations + admin UI, FastAPI for fast typed JSON APIs",
      "Shared PostgreSQL with pgAdmin, all wired together via Docker Compose",
      "Next.js frontend consuming the FastAPI layer for live report dashboards",
      "Auto-applied migrations + superuser bootstrap on container startup",
    ],
    stack: [
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Next.js",
      "React",
      "Tailwind",
    ],
    backend:
      "https://github.com/Tarun-120/daily-report-summery-backend-portal",
    frontend: "https://github.com/Tarun-120/daily-report-frontend-portal-",
  },
  {
    title: "Purchase Order Management System",
    description:
      "End-to-end PO lifecycle tool — vendor management, line-item PO creation, approval flow, and delivery tracking. Built as a separate full-stack pair: Django REST backend + Next.js frontend.",
    highlights: [
      "Django REST API for vendors, products, purchase orders, and approvals",
      "Next.js + Redux frontend with form-heavy UI for PO creation and editing",
      "Server-state caching with TanStack Query for fast list/detail views",
      "REST integration via Axios with centralized error handling",
    ],
    stack: [
      "Django",
      "PostgreSQL",
      "Next.js",
      "React",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind",
    ],
    backend: "https://github.com/Tarun-120/purchase-order-management-backend",
    frontend: "https://github.com/Tarun-120/purchase-order-management",
  },
  {
    title: "Solar Inverter Power Analytics",
    description:
      "IoT-driven analytics platform for solar inverters. A Django backend ingests live telemetry from a Mosquitto MQTT broker, persists 15-minute interval time-series data in PostgreSQL, and pushes updates to a Next.js dashboard over WebSockets.",
    highlights: [
      "Django + DRF backend with Django Channels for real-time WebSocket updates",
      "MQTT ingest pipeline (Mosquitto + paho-mqtt) for live inverter telemetry",
      "PostgreSQL schema tuned for 15-minute interval time-series — no TimescaleDB / Redis needed",
      "JWT auth via SimpleJWT, plus a chatbot module for plain-language data queries",
      "Next.js frontend with time-series charts, filterable by site, inverter, and date range",
      "Dockerized stack with deployment guide for AWS",
    ],
    stack: [
      "Django",
      "DRF",
      "Django Channels",
      "MQTT",
      "PostgreSQL",
      "JWT",
      "Next.js",
      "React",
      "Tailwind",
    ],
    backend:
      "https://github.com/Tarun-120/Inverter-power-genration-analytic-app-backend",
    frontend:
      "https://github.com/Tarun-120/Inverter-power-genration-analytic-app",
  },
  {
    title: "This Portfolio",
    description:
      "The site you're reading right now. Built with Next.js 16, TypeScript, and Tailwind CSS v4. Contact form is wired to a real Next.js API route with input validation — full-stack, all the way down.",
    highlights: [
      "Server Components + App Router",
      "Tailwind CSS v4 with custom theme tokens",
      "Working /api/contact endpoint with input validation",
      "Deployed on Vercel",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4"],
    github: "https://github.com/Tarun-120/tarun-portfolio",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "OrnateSolar",
    location: "Okhla Phase-2, Delhi",
    period: "Jan 2025 — Present",
    bullets: [
      "Built and maintained internal portals end-to-end using Next.js, React, and Django REST Framework backed by PostgreSQL.",
      "Designed REST APIs and database schemas for inventory, production-process, and purchase-order modules.",
      "Translated Figma mockups into pixel-perfect, accessible UIs with Tailwind CSS and reusable component patterns.",
      "Integrated TanStack Query for server-state management and optimistic updates across data-heavy dashboards.",
      "Optimized API response times and frontend bundle size; resolved cross-browser issues for consistent rendering.",
      "Collaborated with procurement, R&D, and design teams to align technical delivery with business workflows.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Blusys Infotech Pvt Ltd",
    location: "Noida, Uttar Pradesh",
    period: "Sept 2024 — Jan 2025",
    bullets: [
      "Designed and developed complete web applications from scratch using React.js, Next.js, Tailwind CSS, and Bootstrap.",
      "Built internal portals and dashboards with robust state management using Redux Toolkit and TanStack Query.",
      "Implemented seamless REST API integrations with Axios for real-time data fetching and processing.",
      "Maintained clean, modular code structure focused on scalability, performance, and cross-browser compatibility.",
      "Participated in code reviews and team debugging sessions to maintain high-quality deliverables.",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  university: "Maharshi Dayanand University, Rohtak, Haryana",
  period: "2021 — 2025",
};
