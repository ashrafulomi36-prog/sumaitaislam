"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import TypingText from "./TypingText";
import HeroScene from "./HeroScene";
import { ArrowDown, Download, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero({ data }: { data: any }) {
  if (!data?.enabled === false) return null;
  const {
    greeting = "Hi, I'm",
    name = "SUMAITA ISLAM",
    roles = ["Web Designer", "ML & AI Enthusiast", "Programming Learner"],
    shortDescription,
    image,
    ctaButtons = [],
  } = data || {};

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <HeroScene />
      <div className="max-w-content mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-secondary text-lg mb-2"
          >
            {greeting}
          </motion.p>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-4"
          >
            {name}
          </motion.h1>
          <motion.h2
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-2xl md:text-3xl font-medium mb-6 h-10"
          >
            <TypingText words={roles} />
          </motion.h2>
          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-secondary text-lg max-w-md mb-8"
          >
            {shortDescription}
          </motion.p>
          <motion.div custom={4} initial="hidden" animate="show" variants={fadeUp} className="flex gap-4">
            {ctaButtons.map((btn: any, idx: number) => (
              <a
                key={idx}
                href={btn.url}
                className={
                  btn.style === "primary"
                    ? "inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:opacity-85 transition"
                    : "inline-flex items-center gap-2 border border-borderc px-6 py-3 rounded-xl hover:bg-black/5 transition"
                }
              >
                {btn.label?.toLowerCase().includes("resume") ? <Download size={16} /> : <Mail size={16} />}
                {btn.label}
              </a>
            ))}
          </motion.div>
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-borderc shadow-xl"
          >
            <Image src={urlFor(image).width(800).url()} alt={name} fill className="object-cover" />
          </motion.div>
        )}
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
