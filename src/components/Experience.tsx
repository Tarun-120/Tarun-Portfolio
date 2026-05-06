"use client";

import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeader } from "./About";
import { Stagger, StaggerItem } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="04" title="Experience" />

        <Stagger className="mt-12 space-y-8" staggerDelay={0.12}>
          {experience.map((job) => (
            <StaggerItem key={`${job.company}-${job.period}`}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8 hover:border-[var(--accent)]/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold inline-flex items-center gap-2">
                    <Briefcase
                      size={18}
                      className="text-[var(--accent-hover)]"
                    />
                    {job.role}{" "}
                    <span className="text-[var(--accent-hover)]">
                      @ {job.company}
                    </span>
                  </h3>
                  <span className="font-mono text-sm text-[var(--muted)] inline-flex items-center gap-1.5">
                    <Calendar size={13} />
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] mb-5 inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  {job.location}
                </p>

                <ul className="space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm md:text-base text-[var(--muted)] leading-relaxed"
                    >
                      <ChevronRight
                        size={16}
                        className="text-[var(--accent-hover)] flex-shrink-0 mt-1"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
