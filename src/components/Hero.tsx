"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, MapPin, Sparkles, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { GithubIcon } from "./icons";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.18), transparent), radial-gradient(ellipse 60% 50% at 100% 80%, rgba(244,114,182,0.10), transparent)",
        }}
      />

      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-72 h-72 rounded-full -z-10 blur-3xl opacity-30"
        style={{ background: "rgba(129, 140, 248, 0.4)" }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm text-[var(--accent-hover)] mb-4 inline-flex items-center gap-2"
          >
            <Sparkles size={14} />
            Hello, world.
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            I&apos;m {personalInfo.name.split(" ")[0]},
            <br />
            <span className="gradient-text">{personalInfo.title}.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-10 max-w-2xl"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium transition-colors"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Tarun_Singh_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] font-medium transition-colors"
            >
              <Download size={18} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] font-medium transition-colors"
            >
              <Mail size={18} />
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-4 text-[var(--muted)]"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              <Mail size={22} />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)]"
          >
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} />
              {personalInfo.location}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
