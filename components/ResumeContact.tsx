import Reveal from "./Reveal";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const iconMap: Record<string, any> = {
  github: Github, linkedin: Linkedin, facebook: Facebook, instagram: Instagram, twitter: Twitter,
};

export function ResumeSection({ resume }: { resume: any }) {
  const fileUrl = resume?.file?.asset?.url;
  if (!fileUrl) return null;
  return (
    <section id="resume" className="py-32 px-6 border-t border-borderc">
      <div className="max-w-content mx-auto text-center">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Resume</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Download my full resume</h2>
          <a
            href={fileUrl}
            target="_blank"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:opacity-85 transition"
          >
            <Download size={16} /> Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection({ contact, socialLinks }: { contact: any; socialLinks: any[] }) {
  if (!contact) return null;
  return (
    <section id="contact" className="py-32 px-6 border-t border-borderc">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-10 max-w-xl">Let's build something great together.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-8 mb-10">
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-accent">
              <Mail size={18} /> {contact.email}
            </a>
          )}
          {contact.phone && (
            <span className="flex items-center gap-2">
              <Phone size={18} /> {contact.phone}
            </span>
          )}
          {contact.address && (
            <span className="flex items-center gap-2">
              <MapPin size={18} /> {contact.address}
            </span>
          )}
        </div>
        <div className="flex gap-4">
          {socialLinks?.map((s) => {
            const Icon = iconMap[s.platform?.toLowerCase()] || Mail;
            return (
              <a
                key={s._id}
                href={s.url}
                target="_blank"
                className="w-10 h-10 rounded-full border border-borderc flex items-center justify-center hover:bg-black/5 transition"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
