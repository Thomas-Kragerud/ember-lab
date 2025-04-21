// src/content.config.js
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// ********************
// Markdown Collection 
// ********************
// Research collection: Used for indepth content per reaserch area
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


// News collection: Used for news on home page 
const news = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/news"}),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string(), // Keep as string, we'll parse it later
    summary: z.string(),
  })
});

const contact_page = defineCollection({
  loader: glob({ 
    pattern: "contact-page.md",  // This matches only this exact filename
    base: "./src/content"
  }),
});


// ********************
// YAML Collection 
// ********************
// Sponsors collection: Used for sponsors on home page 
const sponsors = defineCollection({
    loader: file("./src/content/sponsors.yaml"),
    schema: z.object({
      id: z.string(),
      name: z.string(),
      logo: z.string(),
      url: z.string().url()
    })
  });

// People collection: Used for people page 
const people = defineCollection({
  loader: file("./src/content/people.yaml"),
  // schema: z.object({
  //   id: z.string(),
  //   name: z.string(),
  //   type: z.enum(['professor', 'phd_student', 'masters_student', 'undergraduate', 'alumni', 'graduate_researcher', 'postdoc']),
  //   title: z.string().optional(),
  //   image: z.string(),
  //   email: z.string().email().optional(),
  //   url: z.string().url().optional(),
  //   research: z.string().optional(),
  //   destination: z.string().optional(), // For alumni
  //   year_graduated: z.number().optional(), // For alumni
  //   social: z.object({
  //     twitter: z.string().url().optional(),
  //     github: z.string().url().optional(),
  //     linkedin: z.string().url().optional(),
  //     google_scholar: z.string().url().optional()
  //   }).optional()
  // })
});



// Robots collection: Usef for robot page 
const robots = defineCollection({
    loader: file("./src/content/robots.yaml"),
    // schema: z.object({
    //   id: z.string(),
    //   name: z.string(),
    //   image: z.string(),
    //   description: z.string(),
    //   features: z.array(z.string()).optional(),
    //   video_url: z.string().url().optional(),
    //   project_url: z.string().url().optional()
    //})
  });


//Contact information - structure as a single record
const contact_info = defineCollection({
  loader: file("./src/content/contact-info.yaml"),
  });

// Publications Collection: Used on publication and in reaserch page 
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


const research_talks = defineCollection({
  loader: file("./src/content/research-talks.yaml"),
})


export const collections = { 
  news, 
  research, 
  research_talks,
  publications, 
  sponsors, 
  people, 
  robots, 
  contact_info,
  contact_page,
};