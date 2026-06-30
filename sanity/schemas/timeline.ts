import { defineType, defineField } from "sanity";
import { titleField, descriptionField, imageField, orderField, dateField, urlField, attachmentsField } from "./shared";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "institution", title: "Institution", type: "string" }),
    defineField({ name: "degree", title: "Degree / Program", type: "string" }),
    defineField({ name: "field", title: "Field of Study", type: "string" }),
    defineField({ name: "gpa", title: "GPA / Result", type: "string" }),
    defineField({ name: "startDate", title: "Start", type: "string" }),
    defineField({ name: "endDate", title: "End (or 'Present')", type: "string" }),
    descriptionField,
    imageField,
    orderField,
  ],
});

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "company", title: "Company / Org", type: "string" }),
    defineField({ name: "startDate", title: "Start", type: "string" }),
    defineField({ name: "endDate", title: "End", type: "string" }),
    descriptionField,
    imageField,
    orderField,
  ],
});

export const achievement = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    titleField,
    descriptionField,
    defineField({ name: "value", title: "Value (e.g. BDT 200,000)", type: "string" }),
    defineField({ name: "issuer", title: "Issuer / Organization", type: "string" }),
    dateField,
    imageField,
    orderField,
  ],
});

export const hackathon = defineType({
  name: "hackathon",
  title: "Hackathon",
  type: "document",
  fields: [
    titleField,
    descriptionField,
    defineField({ name: "role", title: "Role / Result", type: "string" }),
    dateField,
    imageField,
    urlField,
    orderField,
  ],
});

export const certificate = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    titleField,
    defineField({ name: "issuer", title: "Issuing Organization", type: "string" }),
    dateField,
    imageField,
    defineField({ name: "file", title: "Certificate File (downloadable)", type: "file" }),
    urlField,
    orderField,
  ],
});

export const resume = defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({ name: "file", title: "Resume PDF", type: "file" }),
    defineField({ name: "lastUpdated", title: "Last Updated", type: "date" }),
  ],
});
