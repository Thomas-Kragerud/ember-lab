import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderScript, a as renderTemplate, r as renderComponent } from './astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
import { a as getCollection, r as renderEntry } from './BaseLayout_Dy3COQcg.mjs';
import { $ as $$PublicationCard } from './PublicationCard_CoXed01u.mjs';

const $$Astro = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$ResearchCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResearchCard;
  const { area, isDetailed = false } = Astro2.props;
  const title = area.data.title || "";
  const slug = area.data.slug || area.id;
  const summary = area.data.summary || "";
  const homepageImage = area.data.homepage_image || "";
  const detailedImages = area.data.images || [];
  const paperIds = area.data.key_papers || [];
  let relatedPublications = [];
  if (paperIds && paperIds.length > 0) {
    try {
      const allPublications = await getCollection("publications");
      relatedPublications = allPublications.filter((pub) => paperIds.includes(pub.id)).sort((a, b) => {
        return (b.data.year || 0) - (a.data.year || 0);
      });
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  }
  let Content;
  if (isDetailed && area.body) {
    const { Content: RenderedContent } = await renderEntry(area);
    Content = RenderedContent;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(slug, "id")} class="research-area scroll-mt-16"> <!-- Simple version for homepage --> ${!isDetailed && renderTemplate`<a${addAttribute(`/research#${slug}`, "href")} class="group"> <div class="research-card relative h-52 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover-lift"> <div class="absolute inset-0 bg-cover bg-center transition-all duration-500"${addAttribute(`background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${homepageImage})`, "style")}></div> <div class="relative h-full p-6 flex flex-col justify-end text-white z-10"> <h3 class="text-xl font-bold mb-2 group-hover:text-emberGreen-300 transition-all duration-300"> ${title} </h3> <p class="text-gray-200 opacity-80 transition-all duration-300"> ${summary} </p> </div> </div> </a>`} <!-- Detailed version for research page --> ${isDetailed && renderTemplate`<div class="detailed-research-area"> <!-- Hero image with parallax effect --> <div class="parallax-element relative mb-8 overflow-hidden rounded-xl h-96 bg-gray-200 dark:bg-gray-700"> ${detailedImages.length > 0 && renderTemplate`<div class="absolute inset-0 bg-cover bg-center parallax-bg transition-transform duration-500"${addAttribute(`background-image: url(${BASE_URL + detailedImages[0].url})`, "style")}> <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div> </div>`} <!-- If no image is provided, use a gradient background --> ${detailedImages.length === 0 && renderTemplate`<div class="absolute inset-0 bg-ember-gradient"></div>`} <div class="absolute bottom-0 left-0 right-0 p-8 text-white"> <h2 class="text-4xl font-bold mb-4">${title}</h2> <p class="text-xl max-w-3xl">${summary}</p> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-5 gap-8"> <!-- Main content - Using Tailwind Typography instead of marked --> <div class="lg:col-span-3"> <div class="prose prose-lg dark:prose-invert
            max-w-none
            prose-headings:text-emberBlue-700 dark:prose-headings:text-emberBlue-300
            prose-a:text-emberGreen-600 dark:prose-a:text-emberGreen-300 prose-a:no-underline hover:prose-a:text-emberGreen-500
            prose-strong:text-emberBlue-600 dark:prose-strong:text-emberBlue-400
            prose-hr:border-emberGray-300 dark:prose-hr:border-emberGray-700
            prose-ol:list-decimal prose-ul:list-disc
            prose-li:marker:text-emberBlue-500 dark:prose-li:marker:text-emberBlue-400
            prose-img:rounded-lg prose-img:shadow-md"> ${Content && renderTemplate`${renderComponent($$result, "Content", Content, {})}`} </div> </div> <!-- Sidebar with papers and additional images --> <div class="lg:col-span-2 space-y-8"> ${relatedPublications.length > 0 && renderTemplate`<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"> <button class="papers-toggle w-full flex justify-between items-center text-xl font-bold mb-2 text-gray-800 dark:text-white" aria-expanded="false"${addAttribute(`papers-container-${slug}`, "aria-controls")}> <span>Key Papers</span> <svg class="w-5 h-5 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> <div class="text-sm text-gray-600 dark:text-gray-400 mb-4">
Click to ${relatedPublications.length === 1 ? "view 1 paper" : `view ${relatedPublications.length} papers`} in this research area
</div> <div${addAttribute(`papers-container-${slug}`, "id")} class="space-y-3 overflow-hidden max-h-0 transition-all duration-300 ease-in-out" aria-hidden="true"> ${relatedPublications.map((pub) => renderTemplate`${renderComponent($$result, "PublicationCard", $$PublicationCard, { "publication": pub, "compact": true })}`)} </div> </div>`} ${detailedImages.length > 1 && renderTemplate`<div class="space-y-4"> ${detailedImages.slice(1).map((image) => renderTemplate`<div class="overflow-hidden rounded-lg shadow-md"> <img${addAttribute(BASE_URL + image.url, "src")}${addAttribute(image.alt || "", "alt")} class="w-full h-auto"> ${image.caption && renderTemplate`<p class="p-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"> ${image.caption} </p>`} </div>`)} </div>`} </div> </div> </div>`} </div> ${renderScript($$result, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/ResearchCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/ResearchCard.astro", void 0);

export { $$ResearchCard as $ };
