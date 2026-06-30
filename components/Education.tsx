import Reveal from "./Reveal";

export default function Education({ data }: { data: any[] }) {
  if (!data?.length) return null;
  return (
    <section id="education" className="py-32 px-6 border-t border-borderc">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Education</p>
        </Reveal>
        <div className="space-y-10 mt-10">
          {data.map((edu, i) => (
            <Reveal key={edu._id} delay={i * 0.1}>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 border-b border-borderc pb-8">
                <span className="text-secondary text-sm">
                  {edu.startDate} – {edu.endDate}
                </span>
                <div>
                  <h3 className="text-xl font-medium">{edu.institution}</h3>
                  <p className="text-secondary mt-1">{edu.degree}</p>
                  {edu.gpa && <p className="text-sm text-secondary mt-1">GPA: {edu.gpa}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
