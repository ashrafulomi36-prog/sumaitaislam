import Reveal from "./Reveal";
import { Download, Award, Trophy } from "lucide-react";

function Card({ icon, title, sub, date, fileUrl }: any) {
  return (
    <div className="border border-borderc rounded-xl p-6 flex flex-col gap-2">
      <div className="text-accent">{icon}</div>
      <h4 className="font-medium">{title}</h4>
      {sub && <p className="text-sm text-secondary">{sub}</p>}
      {date && <p className="text-xs text-secondary">{date}</p>}
      {fileUrl && (
        <a href={fileUrl} target="_blank" className="text-sm flex items-center gap-1 mt-2 hover:text-accent">
          <Download size={14} /> Download
        </a>
      )}
    </div>
  );
}

export default function Recognition({ certificates, hackathons, achievements }: any) {
  if (!certificates?.length && !hackathons?.length && !achievements?.length) return null;
  return (
    <section id="recognition" className="py-32 px-6 border-t border-borderc">
      <div className="max-w-content mx-auto space-y-20">
        {certificates?.length > 0 && (
          <div>
            <Reveal><p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">Certificates</p></Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {certificates.map((c: any, i: number) => (
                <Reveal key={c._id} delay={i * 0.08}>
                  <Card icon={<Award size={20} />} title={c.title} sub={c.issuer} date={c.date} fileUrl={c.file?.asset?.url} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
        {hackathons?.length > 0 && (
          <div>
            <Reveal><p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">Hackathons</p></Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {hackathons.map((h: any, i: number) => (
                <Reveal key={h._id} delay={i * 0.08}>
                  <Card icon={<Trophy size={20} />} title={h.title} sub={h.role} date={h.date} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
        {achievements?.length > 0 && (
          <div>
            <Reveal><p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">Achievements</p></Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((a: any, i: number) => (
                <Reveal key={a._id} delay={i * 0.08}>
                  <Card icon={<Trophy size={20} />} title={a.title} sub={`${a.value || ""} ${a.issuer || ""}`} date={a.date} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
