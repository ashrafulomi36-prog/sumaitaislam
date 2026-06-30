import { getPageData } from "@/lib/sanity";
import { Nav, ScrollProgress, Footer } from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import { ResumeSection, ContactSection } from "@/components/ResumeContact";

export const revalidate = 60;

export default async function Home() {
  const data = await getPageData();

  return (
    <main className="min-h-screen bg-background text-primary">
      <ScrollProgress />
      <Nav links={data.navigation?.links} siteName={data.siteSettings?.siteTitle} />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Education data={data.education} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Recognition
        certificates={data.certificates}
        hackathons={data.hackathons}
        achievements={data.achievements}
      />
      <ResumeSection resume={data.resume} />
      <ContactSection contact={data.contact} socialLinks={data.socialLinks} />
      <Footer data={data.footer} />
    </main>
  );
}
