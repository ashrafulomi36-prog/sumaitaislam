"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Skills({ data }: { data: any[] }) {
  if (!data?.length) return null;
  return (
    <section id="skills" className="py-32 px-6 border-t border-borderc">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Skills</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {data.map((cat, i) => (
            <Reveal key={cat._id} delay={i * 0.1}>
              <div className="border border-borderc rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills?.map((s: any, idx: number) => (
                    <motion.span
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-black/5 dark:bg-white/5"
                    >
                      {s.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
