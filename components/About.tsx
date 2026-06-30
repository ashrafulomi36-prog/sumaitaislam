import Reveal from "./Reveal";

export default function About({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section id="about" className="py-32 px-6 border-t border-borderc">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">About</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 max-w-2xl">{data.heading}</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed mb-6">{data.story}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">{data.mission}</p>
        </Reveal>
      </div>
    </section>
  );
}
