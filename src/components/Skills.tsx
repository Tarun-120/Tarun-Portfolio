"use client";

import { Monitor, Server, Database, Wrench, Code2, Boxes } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType, CSSProperties } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiJsonwebtokens,
  SiCelery,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiNpm,
  SiPostman,
  SiFigma,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { skillGroups } from "@/lib/data";
import { SectionHeader } from "./About";
import { Stagger, StaggerItem } from "./Reveal";

const categoryIconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  wrench: Wrench,
};

type IconCmp = ComponentType<{
  size?: number | string;
  className?: string;
  style?: CSSProperties;
}>;

type SkillIcon = {
  Icon: IconCmp;
  color: string;
};

const techIcons: Record<string, SkillIcon> = {
  // Frontend
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764ABC" },
  "TanStack Query": { Icon: SiReactquery, color: "#FF4154" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  "HTML5 / CSS3": { Icon: SiHtml5, color: "#E34F26" },
  // Backend
  Python: { Icon: SiPython, color: "#3776AB" },
  Django: { Icon: SiDjango, color: "#0C4B33" },
  "Django REST Framework": { Icon: SiDjango, color: "#A30000" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "REST API Design": { Icon: Code2 as IconCmp, color: "#818CF8" },
  "JWT Auth": { Icon: SiJsonwebtokens, color: "#D63AFF" },
  "Celery (Async tasks)": { Icon: SiCelery, color: "#37814A" },
  // Database & Cloud
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  SQL: { Icon: Database as IconCmp, color: "#00758F" },
  "AWS S3": { Icon: FaAws, color: "#FF9900" },
  "AWS EC2": { Icon: FaAws, color: "#FF9900" },
  "Database Modeling": { Icon: Boxes as IconCmp, color: "#A78BFA" },
  // Tools
  "Git / GitHub": { Icon: SiGithub, color: "#FFFFFF" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  npm: { Icon: SiNpm, color: "#CB3837" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  "Figma → Code": { Icon: SiFigma, color: "#F24E1E" },
  Vercel: { Icon: SiVercel, color: "#FFFFFF" },
  "Linux CLI": { Icon: SiLinux, color: "#FCC624" },
};

const fallbackIcon: SkillIcon = {
  Icon: Code2 as IconCmp,
  color: "#9aa0aa",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="02" title="Skills & Tech Stack" />

        <p className="text-[var(--muted)] mt-6 max-w-2xl">
          The toolkit I use to ship full-stack applications — from UI to API to
          database.
        </p>

        <Stagger className="grid sm:grid-cols-2 gap-5 mt-12">
          {skillGroups.map((group) => {
            const CategoryIcon = categoryIconMap[group.icon] ?? Monitor;
            return (
              <StaggerItem key={group.category}>
                <div className="group h-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--accent)]/50 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent-hover)] group-hover:bg-[var(--accent)]/20 transition-colors">
                      <CategoryIcon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const { Icon, color } =
                        techIcons[skill] ?? fallbackIcon;
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]/50 hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <Icon size={14} style={{ color }} />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
