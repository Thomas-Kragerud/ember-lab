import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_Dy3COQcg.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$RobotCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RobotCard;
  const { robot } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-xl shadow-ember p-6 transition-standard hover-lift h-full flex flex-col"> <div class="text-emberGray-700 dark:text-emberGray-300 text-sm mb-3 flex items-center"> <span class="font-medium">Manufacturer:</span> <span class="ml-2">${robot.data.manufacturer}</span> </div> <div class="mt-2 flex-grow"> <p class="text-gray-700 dark:text-gray-300 leading-relaxed"> ${robot.data.description} </p> </div> ${robot.data.video_url && renderTemplate`<div class="mt-4"> <a${addAttribute(robot.data.video_url, "href")} class="inline-flex items-center gap-1 text-emberBlue-600 dark:text-emberBlue-300 hover:text-emberBlue-700 dark:hover:text-emberBlue-400 transition-colors" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Watch Demo
</a> </div>`} </div>`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/RobotCard.astro", void 0);

const $$Robots = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Robots";
  const robots = await getCollection("robots");
  const BASE_URL = "/";
  console.log("base url", BASE_URL);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="mb-12 text-center"> <h1 class="text-4xl sm:text-5xl font-bold text-gradient mb-4">Our Robots</h1> <p class="text-lg text-emberGray-700 dark:text-emberGray-300 max-w-3xl mx-auto">
Explore the robots that power our research, enabling cutting-edge experiments 
        in locomotion, manipulation, and autonomous systems.
</p> </div> <div class="space-y-16"> ${robots.map((robot, index) => renderTemplate`<div class="mb-20"> <!-- Robot Name Header --> <h2 class="text-3xl font-bold mb-4 px-3">${robot.data.name}</h2> <div${addAttribute(`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`, "class")}> <!-- Info Card --> <div class="w-full lg:w-1/2"> <div class="lg-1/2"> ${renderComponent($$result2, "RobotCard", $$RobotCard, { "robot": robot })} </div> </div> <!-- Visual Display: 3D Model or Image --> <div class="w-full lg:w-1/2 h-[500px] mt-8 lg:mt-0 relative z-10"> ${robot.data.glb ? renderTemplate`${renderComponent($$result2, "RobotViewer", null, { "client:only": "react", "cdn_name": robot.data.glb, "client:component-hydration": "only", "client:component-path": "@components/RobotViewer.jsx", "client:component-export": "default" })}` : robot.data.image ? renderTemplate`<img${addAttribute(BASE_URL + robot.data.image, "src")}${addAttribute(`${robot.data.name} robot`, "alt")} class="w-full h-full object-cover rounded-xl">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-emberGray-500 dark:text-emberGray-300">
No visual available
</div>`} </div> </div> </div>`)} </div> </section> ` })}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/robots.astro", void 0);
const $$file = "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/robots.astro";
const $$url = "/robots";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Robots,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
