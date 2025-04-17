import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_Dy3COQcg.mjs';
import { $ as $$ResearchCard } from '../chunks/ResearchCard_CVrCMBsn.mjs';
export { renderers } from '../renderers.mjs';

const $$Research = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Research";
  const areas = await getCollection("research");
  const sortedAreas = areas.sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  const researchTalks = [
    {
      date: "2024 Oct",
      title: "CMU RI Seminar Talk: Building Generalist Robots with Agility via Learning and Control: Humanoids and Beyond",
      duration: "one hour",
      links: [
        { label: "recording", url: "https://example.com/recording" },
        { label: "slides", url: "https://example.com/slides" }
      ]
    },
    {
      date: "2024 Sep",
      title: "Georgia Tech IRIM Seminar Talk: Unifying Semantic and Physical Intelligence for Generalist Humanoid Robots",
      duration: "one hour",
      links: [
        { label: "recording", url: "https://example.com/recording2" }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="px-6 py-16 bg-gradient-to-r from-emberGreen-500 via-emberBlue-500 to-emberGray-500 text-gray-900 dark:text-white rounded-xl shadow-lg my-8"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <!-- Research Introduction --> <div class="prose prose-lg dark:prose-invert max-w-none"> <h2 class="text-3xl font-bold mb-4">Our Approach</h2> <p>
At EMBER Lab, our research focuses on combining machine learning, control theory, and mechanical design 
              to develop intelligent robots that can perceive, learn, and act autonomously in complex environments.
</p> <p>
We believe in building systems that can generalize across tasks and environments, adapting to new 
              challenges efficiently. Our interdisciplinary approach bridges the gap between theoretical foundations 
              and practical applications.
</p> </div> <!-- Research Talks --> <div> <h2 class="text-3xl font-bold mb-4">Research Talks</h2> <div class="space-y-4"> ${researchTalks.map((talk) => renderTemplate`<div class="bg-gray-100/80 dark:bg-white/10 p-4 rounded-lg backdrop-blur-sm hover-lift"> <div class="flex flex-wrap items-start gap-2"> <span class="bg-gray-200 dark:bg-white/20 text-gray-700 dark:text-white text-sm font-medium px-2.5 py-0.5 rounded"> ${talk.date} </span> ${talk.duration && renderTemplate`<span class="text-gray-600 dark:text-white/80 text-sm">
(${talk.duration})
</span>`} </div> <h3 class="text-lg font-bold mt-2 text-gray-900 dark:text-white">${talk.title}</h3> ${talk.links && talk.links.length > 0 && renderTemplate`<div class="mt-3 flex flex-wrap gap-3"> ${talk.links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-emberBlue-600 dark:text-white hover:text-emberGreen-600 dark:hover:text-emberGreen-300 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> ${link.label} </a>`)} </div>`} </div>`)} </div> </div> </div> </div> </section>  <section class="py-16"> <h2 class="text-3xl font-semibold mb-12 text-gray-800 dark:text-white text-center">Research Areas</h2> <div class="space-y-24"> ${sortedAreas.map((area) => renderTemplate`${renderComponent($$result2, "ResearchCard", $$ResearchCard, { "area": area, "isDetailed": true })}`)} </div> </section> ` })}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/research.astro", void 0);

const $$file = "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/research.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Research,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
