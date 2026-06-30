"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Github, ExternalLink, Search } from "lucide-react";
import Reveal from "./Reveal";

export default function Projects({ data }: { data: any[] }) {
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState<string | null>(null);

  const allTech = useMemo(
    () => Array.from(new Set(data?.flatMap((p) => p.techStack || []) || [])),
    [data]
  );

  const filtered = useMemo(() => {
    return (data || []).filter((p) => {
      const matchesQuery = p.title?.toLowerCase().includes(query.toLowerCase());
      const matchesTech = !tech || p.techStack?.includes(tech);
      return matchesQuery && matchesTech;
    });
  }, [data, query, tech]);

  if (!data?.length) return null;

  return (
    <section id="projects" className="py-32 px-6 border-t border-borderc">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Projects</p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-4 mt-8 mb-10">
          <div className="flex items-center gap-2 border border-borderc rounded-xl px-4 py-2 flex-1">
            <Search size={16} className="text-secondary" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setTech(null)}
              className={`px-3 py-1.5 text-xs rounded-lg border ${!tech ? "bg-primary text-white" : "border-borderc"}`}
            >
              All
            </button>
            {allTech.map((t: any) => (
              <button
                key={t}
                onClick={() => setTech(t)}
                className={`px-3 py-1.5 text-xs rounded-lg border ${tech === t ? "bg-primary text-white" : "border-borderc"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p._id} delay={(i % 4) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="border border-borderc rounded-xl overflow-hidden group"
              >
                {p.image && (
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={urlFor(p.image).width(800).url()}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{p.title}</h3>
                  <p className="text-secondary text-sm mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.techStack?.map((t: string) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" className="flex items-center gap-1 text-sm hover:text-accent">
                        <Github size={16} /> Code
                      </a>
                    )}
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" className="flex items-center gap-1 text-sm hover:text-accent">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
