"use client";

import { ExternalLink, Star, ChevronRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/lib/data";
import { SectionHeader } from "./About";
import { Stagger, StaggerItem } from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="03" title="Featured Projects" />

        <p className="text-[var(--muted)] mt-6 max-w-2xl">
          Things I&apos;ve built — owning the work from data model to deployed
          UI.
        </p>

        <Stagger className="grid gap-6 mt-12" staggerDelay={0.1}>
          {projects.map((project, i) => (
            <StaggerItem key={project.title}>
              <article
                className={`group rounded-xl border bg-[var(--card)] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--accent)]/5 ${
                  project.featured
                    ? "border-[var(--accent)]/30 hover:border-[var(--accent)]/60"
                    : "border-[var(--border)] hover:border-[var(--accent)]/40"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-[var(--muted)]">
                        0{i + 1}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent-hover)] font-mono">
                          <Star size={10} fill="currentColor" />
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    {project.github && (
                      <RepoLink href={project.github} label="Code" />
                    )}
                    {project.backend && (
                      <RepoLink href={project.backend} label="Backend" />
                    )}
                    {project.frontend && (
                      <RepoLink href={project.frontend} label="Frontend" />
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent-hover)] hover:bg-[var(--accent)]/20 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[var(--muted)] leading-relaxed mb-5">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-[var(--muted)]"
                    >
                      <ChevronRight
                        size={16}
                        className="text-[var(--accent-hover)] flex-shrink-0 mt-0.5"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] group-hover:border-[var(--accent)]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function RepoLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/50 transition-colors"
    >
      <GithubIcon size={12} />
      {label}
    </a>
  );
}
