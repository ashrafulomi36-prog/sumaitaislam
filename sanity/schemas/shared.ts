import { defineField } from "sanity";

export const orderField = defineField({
  name: "order",
  title: "Order",
  type: "number",
  description: "Lower numbers appear first",
});

export const featuredField = defineField({
  name: "featured",
  title: "Featured",
  type: "boolean",
  initialValue: false,
});

export const enabledField = defineField({
  name: "enabled",
  title: "Section Enabled",
  type: "boolean",
  initialValue: true,
});

export const titleField = defineField({ name: "title", title: "Title", type: "string" });
export const slugField = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
});
export const descriptionField = defineField({
  name: "description",
  title: "Description",
  type: "text",
});
export const richTextField = defineField({
  name: "body",
  title: "Rich Text",
  type: "array",
  of: [{ type: "block" }, { type: "image" }],
});
export const imageField = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: { hotspot: true },
});
export const multiImageField = defineField({
  name: "images",
  title: "Images",
  type: "array",
  of: [{ type: "image", options: { hotspot: true } }],
});
export const iconField = defineField({
  name: "icon",
  title: "Icon (Lucide name)",
  type: "string",
  description: "e.g. 'code', 'cpu', 'rocket' — matches lucide-react icon names",
});
export const tagsField = defineField({
  name: "tags",
  title: "Tags",
  type: "array",
  of: [{ type: "string" }],
  options: { layout: "tags" },
});
export const dateField = defineField({ name: "date", title: "Date", type: "date" });
export const urlField = defineField({ name: "url", title: "URL", type: "url" });
export const githubField = defineField({ name: "githubUrl", title: "GitHub Link", type: "url" });
export const liveField = defineField({ name: "liveUrl", title: "Live Link", type: "url" });
export const attachmentsField = defineField({
  name: "attachments",
  title: "Attachments",
  type: "array",
  of: [{ type: "file" }],
});
export const techStackField = defineField({
  name: "techStack",
  title: "Technology Stack",
  type: "array",
  of: [{ type: "string" }],
  options: { layout: "tags" },
});
