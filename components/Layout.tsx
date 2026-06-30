"use client";
import { motion, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
    />
  );
}

export function Nav({ links, siteName }: { links: any[]; siteName?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-borderc">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold tracking-tight">{siteName || "Portfolio"}</a>
        <nav className="hidden md:flex gap-8 text-sm">
          {links?.map((l) => (
            <a key={l.slug} href={`#${l.slug}`} className="hover:text-accent transition">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-9 h-9 rounded-full border border-borderc flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}

export function Footer({ data }: { data: any }) {
  return (
    <footer className="py-12 px-6 border-t border-borderc text-center text-sm text-secondary">
      {data?.copyright || `© ${new Date().getFullYear()} All rights reserved.`}
    </footer>
  );
}
