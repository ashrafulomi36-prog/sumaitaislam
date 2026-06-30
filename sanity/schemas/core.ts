import { defineType, defineField } from "sanity";
import { imageField, richTextField, urlField, enabledField } from "./shared";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "greeting", title: "Greeting (e.g. Hi, I'm)", type: "string" }),
    defineField({ name: "name", title: "Full Name", type: "string" }),
    defineField({
      name: "roles",
      title: "Rotating Roles (typing animation)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text" }),
    imageField,
    defineField({ name: "resumeFile", title: "Resume PDF", type: "file" }),
    defineField({
      name: "ctaButtons",
      title: "CTA Buttons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "url", type: "string" },
            { name: "style", type: "string", options: { list: ["primary", "secondary"] } },
          ],
        },
      ],
    }),
    enabledField,
  ],
});

export const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    richTextField,
    defineField({ name: "story", title: "Career Story", type: "text" }),
    defineField({ name: "goals", title: "Career Goals", type: "text" }),
    defineField({ name: "interests", title: "Interests", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "mission", title: "Mission Statement", type: "text" }),
    imageField,
    enabledField,
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site Title", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    imageField,
    defineField({ name: "favicon", title: "Favicon", type: "image" }),
    defineField({
      name: "primaryColor", title: "Primary Color", type: "string", initialValue: "#111111",
    }),
    defineField({
      name: "accentColor", title: "Accent Color", type: "string", initialValue: "#2563EB",
    }),
    defineField({ name: "darkModeDefault", title: "Dark Mode Default", type: "boolean" }),
    defineField({
      name: "sectionOrder",
      title: "Homepage Section Order",
      type: "array",
      of: [{ type: "string" }],
      description: "List section keys in display order, e.g. hero, about, education, skills, projects...",
    }),
  ],
});

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Nav Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "slug", type: "string" },
            { name: "order", type: "number" },
          ],
        },
      ],
    }),
  ],
});

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "text", title: "Footer Text", type: "string" }),
    defineField({ name: "copyright", title: "Copyright Line", type: "string" }),
    richTextField,
  ],
});

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
    imageField,
    defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] }),
    urlField,
  ],
});
