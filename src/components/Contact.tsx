"use client";

import { useState, type ComponentType } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CircleCheck,
  CircleAlert,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { GithubIcon } from "./icons";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "./About";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("sent");
      setMessage("Thanks — I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="05" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <Reveal>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              I&apos;m open to full-stack roles, freelance work, and
              collaboration on interesting problems. Drop a message — I read
              every one.
            </p>

            <ul className="space-y-3">
              <ContactItem
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              />
              <ContactItem
                icon={GithubIcon}
                label="GitHub"
                value="@Tarun-120"
                href={personalInfo.github}
              />
              <ContactItem
                icon={FaLinkedin}
                label="LinkedIn"
                value="Connect on LinkedIn"
                href={personalInfo.linkedin}
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
              />
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8 space-y-4"
            >
              <Field
                label="Name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hi…"
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.99 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors"
              >
                <Send
                  size={16}
                  className={status === "sending" ? "animate-pulse" : ""}
                />
                {status === "sending" ? "Sending…" : "Send Message"}
              </motion.button>

              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm inline-flex items-center gap-2 ${
                    status === "error" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {status === "error" ? (
                    <CircleAlert size={14} />
                  ) : (
                    <CircleCheck size={14} />
                  )}
                  {message}
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type IconComponent = ComponentType<{ size?: number | string }>;

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent-hover)] flex-shrink-0">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <span className="block text-xs font-mono text-[var(--accent-hover)] uppercase">
          {label}
        </span>
        <span className="text-[var(--foreground)] truncate">{value}</span>
      </div>
    </div>
  );

  return (
    <li className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 hover:border-[var(--accent)]/50 transition-colors">
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
      />
    </div>
  );
}
