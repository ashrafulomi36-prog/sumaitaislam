import { defineType, defineField } from "sanity";
import {
  titleField, slugField, descriptionField, imageField, multiImageField, iconField,
  tagsField, dateField, githubField, liveField, attachmentsField, techStackField,
  orderField, featuredField, richTextField,
} from "./shared";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    titleField, slugField, descriptionField, richTextField,
    imageField, multiImageField,
    defineField({ name: "video", title: "Demo Video", type: "file" }),
    techStackField, tagsField,
    githubField, liveField, attachmentsField,
    featuredField, orderField,
  ],
});

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    iconField,
    defineField({ name: "level", title: "Proficiency (0-100)", type: "number" }),
  ],
});

export const skillCategory = defineType({
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  fields: [
    titleField, // e.g. Frontend, Programming, Machine Learning, Other
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
    orderField,
  ],
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [titleField, descriptionField, iconField, orderField],
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role / Company", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text" }),
    imageField, orderField,
  ],
});

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [titleField, imageField, descriptionField, orderField],
});

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    titleField, slugField, descriptionField, richTextField, imageField,
    tagsField, dateField, featuredField,
  ],
});

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "document",
  fields: [
    defineField({ name: "platform", title: "Platform", type: "string" }),
    iconField,
    defineField({ name: "url", title: "URL", type: "url" }),
    orderField,
  ],
});

export const contact = defineType({
  name: "contact",
  title: "Contact Info",
  type: "document",
  fields: [
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "formEnabled", title: "Enable Contact Form", type: "boolean" }),
  ],
});
