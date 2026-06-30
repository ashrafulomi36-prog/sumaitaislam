import { hero, about, siteSettings, navigation, footer, seo } from "./core";
import {
  education, experience, achievement, hackathon, certificate, resume,
} from "./timeline";
import {
  project, skill, skillCategory, service, testimonial, galleryItem,
  blogPost, socialLink, contact,
} from "./content";

export const schemaTypes = [
  // core / settings
  siteSettings, navigation, footer, seo,
  // homepage sections
  hero, about,
  // timeline
  education, experience, achievement, hackathon, certificate, resume,
  // content collections
  project, skill, skillCategory, service, testimonial, galleryItem, blogPost,
  // contact
  socialLink, contact,
];
