import { Mail, Heart } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { GithubIcon } from "./icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p className="inline-flex items-center gap-1.5">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
          <Heart size={13} className="text-[var(--accent-hover)] inline" fill="currentColor" />
          using Next.js & Tailwind.
        </p>
        <div className="flex gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[var(--foreground)] transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 hover:text-[var(--foreground)] transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
