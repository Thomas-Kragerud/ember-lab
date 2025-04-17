import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
import { r as renderEntry, a as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_Dy3COQcg.mjs';
import { $ as $$ResearchCard } from '../chunks/ResearchCard_CVrCMBsn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$NewsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { title, date, content, summary } = Astro2.props;
  let NewsContent;
  let hasContent = false;
  if (content && content.body) {
    const { Content } = await renderEntry(content);
    NewsContent = Content;
    hasContent = true;
  }
  return renderTemplate`${maybeRenderHead()}<div class="news-card"> <!-- Card preview that shows on the page - more compact now --> <div${addAttribute(`w-full h-full text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm mb-4 border-0 
    ${hasContent ? "cursor-pointer hover-lift transform translate-y-0 transition-all duration-200" : ""}
  `, "class")}> <!-- If news has content, make it a button, otherwise just a div --> <div${addAttribute(hasContent ? "card-trigger" : "", "class")}> <h3 class="text-xl font-bold mb-1 text-gray-800 dark:text-white">${title}</h3> <p class="text-xs text-gray-600 dark:text-gray-300 mb-2"> ${new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} </p> ${summary && renderTemplate`<p class="text-sm text-gray-700 dark:text-gray-200 leading-snug">${summary}</p>`} ${hasContent && renderTemplate`<a class="inline-flex items-center mt-3 text-sm text-emberBlue-600 hover:text-emberBlue-700 dark:text-emberBlue-300 dark:hover:text-emberBlue-200">
Read more
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a>`} </div> </div> <!-- Popup that appears only when the card has content and is clicked --> ${hasContent && renderTemplate`<div class="news-popup fixed inset-0 z-50 flex items-center justify-center bg-emberGray-900/30 dark:bg-emberGray-900/40 backdrop-blur-sm p-4 opacity-0 pointer-events-none transition-all duration-300"> <div class="popup-content relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-ember border border-gray-100 dark:border-gray-700 p-6 transition-standard"> <button class="popup-close absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> <span class="sr-only">Close</span> </button> <article class="prose dark:prose-invert prose-img:rounded-lg prose-headings:font-bold prose-a:text-emberBlue-500 max-w-none"> <p class="text-sm text-gray-500 dark:text-gray-400 -mt-4"> ${new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p> <div> ${NewsContent && renderTemplate`${renderComponent($$result, "NewsContent", NewsContent, {})}`} </div> </article> </div> </div>`} </div> ${renderScript($$result, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/NewsCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/NewsCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Home";
  const sponsors = await getCollection("sponsors");
  const allNewsPosts = await getCollection("news");
  const sortedPosts = allNewsPosts.map((post) => ({
    ...post.data,
    slug: post.data.slug,
    // Access slug from post.data, not post
    date: post.data.date ? new Date(post.data.date) : /* @__PURE__ */ new Date(0)
  })).sort((a, b) => b.date.getTime() - a.date.getTime());
  sortedPosts.slice(0, 2);
  const allResearchAreas = await getCollection(
    "research",
    (entry) => !entry.id.startsWith("_") && entry.data.featured === true
  );
  const featuredAreas = allResearchAreas.sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  const BASE_URL = "/";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<h2>BASE_URL: ${BASE_URL}</h2> <p>Hello</p> <h3>Image path: ${BASE_URL + "images/ember_icon.webp"}</h3> <section class="h-almost-screen w-full px-6 bg-gradient-to-r from-emberGreen-500 via-emberBlue-500 to-emberGray-500 text-white dark:text-white text-gray-800 flex flex-col lg:flex-row items-center rounded-xl shadow-lg my-8 overflow-hidden"> <div class="max-w-xl py-12 lg:py-0 relative z-10"> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"> <span class="block">Embodied</span> <span class="block">Intelligence &</span> <span class="block">Robotics Lab</span> </h1> <img src=""> <p class="text-xl mb-6 text-gray-800 dark:text-white">
We combine machine learning, AI, and mechanical design to develop 
      robots that perceive, learn, and act autonomously in complex environments.
</p> <p class="text-lg mb-8 text-gray-700 dark:text-gray-200">
Based in UC Berkeley, EMBER Lab focuses on human-robot interaction, 
      reinforcement learning, and embodied AI for next-generation robotics.
</p> <div class="mt-8"> <a${addAttribute(BASE_URL + "/publications", "href")} class="px-8 py-4 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-block hover:-translate-y-1 bg-ember-gradient">
Our Publications
</a> </div> </div> <div class="w-full lg:w-1/2 h-[500px] mt-8 lg:mt-0 relative z-10"> <!-- <BabylonViewer client:only="react" /> --> ${renderComponent($$result2, "RobotViewer", null, { "client:only": "react", "cdn_name": "g1_pbr.glb", "client:component-hydration": "only", "client:component-path": "@components/RobotViewer", "client:component-export": "default" })} </div> </section>  <section class="py-12"> <h2 class="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Research Areas</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${featuredAreas.map((area) => renderTemplate`${renderComponent($$result2, "ResearchCard", $$ResearchCard, { "area": area, "isDetailed": false })}`)} </div> <div class="mt-8 text-center"> <a${addAttribute(BASE_URL + "/research", "href")} class="px-6 py-3 bg-emberBlue-500 hover:bg-emberBlue-600 text-white rounded-lg transition-all duration-300 inline-flex items-center hover:-translate-y-1">
Explore All Research
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </section>  <section class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 my-12" id="news-section"> <h2 class="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">Latest News</h2> <div id="news-container"> ${sortedPosts.slice(0, 2).map((post) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "title": post.title, "date": post.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), "summary": post.summary, "content": allNewsPosts.find((p) => p.data.slug === post.slug) })}`)} </div> <div class="hidden" id="expanded-news-container"> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "title": post.title, "date": post.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), "summary": post.summary, "content": allNewsPosts.find((p) => p.data.slug === post.slug) })}`)} </div> <div class="mt-8 text-center"> <button id="toggle-news-btn" class="px-6 py-3 bg-emberBlue-500 hover:bg-emberBlue-600 text-white rounded-lg transition-all duration-300 inline-flex items-center hover:-translate-y-1">
View All News
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> </div> </section>  <section class="py-16"> <h2 class="text-3xl font-semibold mb-4 text-gray-800 dark:text-white text-center">Our Sponsors</h2> <p class="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
We're grateful for the support of these organizations that make our research possible.
</p> <div class="relative w-full"> <div class="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"> <div class="flex flex-nowrap mx-auto"> ${sponsors.map((sponsor) => renderTemplate`<div class="inline-block px-3 snap-center"> <a${addAttribute(sponsor.data.url, "href")} target="_blank" rel="noopener" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl 
                        transition-all duration-300 flex items-center justify-center 
                        w-60 h-32"> <img${addAttribute(BASE_URL + sponsor.data.logo, "src")}${addAttribute(sponsor.data.name, "alt")} class="max-h-16 max-w-full object-contain filter dark:brightness-90 dark:contrast-125"> </a> </div>`)} </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/index.astro", void 0);
const $$file = "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
