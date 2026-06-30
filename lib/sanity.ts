import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

// ---- Query helpers (GROQ) ----
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]{..., logo, favicon}`,
  hero: `*[_type == "hero"][0]`,
  about: `*[_type == "about"][0]`,
  education: `*[_type == "education"] | order(order asc)`,
  experience: `*[_type == "experience"] | order(order asc)`,
  projects: `*[_type == "project"] | order(order asc){..., "techStack": techStack}`,
  skills: `*[_type == "skillCategory"] | order(order asc){..., skills[]->{name, icon}}`,
  services: `*[_type == "service"] | order(order asc)`,
  certificates: `*[_type == "certificate"] | order(order asc)`,
  hackathons: `*[_type == "hackathon"] | order(order asc)`,
  achievements: `*[_type == "achievement"] | order(order asc)`,
  resume: `*[_type == "resume"][0]`,
  socialLinks: `*[_type == "socialLink"] | order(order asc)`,
  contact: `*[_type == "contact"][0]`,
  testimonials: `*[_type == "testimonial"] | order(order asc)`,
  gallery: `*[_type == "galleryItem"] | order(order asc)`,
  blogPosts: `*[_type == "blogPost"] | order(date desc)`,
  navigation: `*[_type == "navigation"][0]{links[]{label, slug, order}}`,
  footer: `*[_type == "footer"][0]`,
  seo: `*[_type == "seo"][0]`,
};

export async function getPageData() {
  const [
    siteSettings, hero, about, education, experience, projects, skills,
    services, certificates, hackathons, achievements, resume, socialLinks,
    contact, testimonials, navigation, footer,
  ] = await Promise.all([
    client.fetch(queries.siteSettings),
    client.fetch(queries.hero),
    client.fetch(queries.about),
    client.fetch(queries.education),
    client.fetch(queries.experience),
    client.fetch(queries.projects),
    client.fetch(queries.skills),
    client.fetch(queries.services),
    client.fetch(queries.certificates),
    client.fetch(queries.hackathons),
    client.fetch(queries.achievements),
    client.fetch(queries.resume),
    client.fetch(queries.socialLinks),
    client.fetch(queries.contact),
    client.fetch(queries.testimonials),
    client.fetch(queries.navigation),
    client.fetch(queries.footer),
  ]);
  return {
    siteSettings, hero, about, education, experience, projects, skills,
    services, certificates, hackathons, achievements, resume, socialLinks,
    contact, testimonials, navigation, footer,
  };
}
