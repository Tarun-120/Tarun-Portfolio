"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { aboutText, education } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="01" title="About Me" />

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 space-y-5">
            {aboutText.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="md:col-span-1">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--accent)]/40 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap
                  size={16}
                  className="text-[var(--accent-hover)]"
                />
                <h3 className="text-sm font-mono text-[var(--accent-hover)]">
                  EDUCATION
                </h3>
              </div>
              <p className="font-semibold text-[var(--foreground)]">
                {education.degree}
              </p>
              <p className="text-sm text-[var(--muted)] mt-1">
                {education.university}
              </p>
              <p className="text-sm text-[var(--muted)] font-mono mt-2">
                {education.period}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-sm text-[var(--accent-hover)]">
        {number}.
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="flex-1 h-px bg-[var(--border)] origin-left"
      />
    </motion.div>
  );
}
