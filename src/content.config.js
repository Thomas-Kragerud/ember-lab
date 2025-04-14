// src/content.config.js
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// Define research collection
const research = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/research"}),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    order: z.number().optional(),
    summary: z.string(),
    homepage_image: z.string(),
    featured: z.boolean().optional().default(false),
    images: z.array(
      z.object({
        url: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional()
      })
    ).optional().default([]),
    key_papers: z.array(z.string()).optional().default([])
  })
});

// Define news collection
const news = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/news"})
});

// Sponsors collection - each sponsor needs an id
const sponsors = defineCollection({
    loader: file("./src/content/sponsors.yaml"),
    schema: z.object({
      id: z.string(),
      name: z.string(),
      logo: z.string(),
      url: z.string().url()
    })
  });

// People collection - each person needs an id
const people = defineCollection({
  loader: file("./src/content/people.yaml"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['professor', 'phd_student', 'masters_student', 'undergraduate', 'alumni', 'graduate_researcher', 'postdoc']),
    title: z.string().optional(),
    image: z.string(),
    email: z.string().email().optional(),
    url: z.string().url().optional(),
    research: z.string().optional(),
    destination: z.string().optional(), // For alumni
    year_graduated: z.number().optional(), // For alumni
    social: z.object({
      twitter: z.string().url().optional(),
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      google_scholar: z.string().url().optional()
    }).optional()
  })
});



// Robots collection - each robot needs an id
const robots = defineCollection({
    loader: file("./src/content/robots.yaml"),
    schema: z.object({
      id: z.string(),
      name: z.string(),
      image: z.string(),
      description: z.string(),
      features: z.array(z.string()).optional(),
      video_url: z.string().url().optional(),
      project_url: z.string().url().optional()
    })
  });


// Contact information - structure as a single record
const contact = defineCollection({
    type: 'data',  // Important: Use 'data' type for single objects
    schema: z.object({
      id: z.string(),
      address: z.object({
        building: z.string(),
        street: z.string().optional(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        country: z.string()
      }),
      email: z.string().email(),
      phone: z.string().optional(),
      social: z.object({
        twitter: z.string().url().optional(),
        github: z.string().url().optional(),
        youtube: z.string().url().optional()
      }).optional(),
      map_link: z.string().url().optional()
    })
  });
// Change the publications collection configuration
const publications = defineCollection({
    loader: file("./src/content/publications.yaml"),
    // Remove the z.array wrapper - Astro already treats each entry as a separate object
    schema: z.object({
      id: z.string(),
      title: z.string(),
      authors: z.union([
        z.string(),
        z.array(
          z.object({
            name: z.string(),
            equal_contribution: z.boolean().optional(),
            url: z.string().url().optional()
          })
        )
      ]),
      venue: z.union([
        z.string(),
        z.object({
          acronym: z.string(),
          name: z.string()
        })
      ]),
      year: z.number(),
      date: z.string().optional(),
      pdf: z.string().url().optional(),
      code: z.string().url().optional(),
      website: z.string().url().optional(),
      dataset: z.string().url().optional(),
      video: z.string().url().optional(),
      image: z.string().optional(),
      is_preprint: z.boolean().optional(),
      tldr: z.string().optional()
    })
});

export const collections = { 
  news, 
  research, 
  publications, 
  sponsors, 
  people, 
  robots, 
  contact 
};