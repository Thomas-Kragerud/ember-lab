import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_Dy3COQcg.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$PeopleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PeopleCard;
  const { person } = Astro2.props;
  const { name, title, image, email, url, research, social } = person.data;
  const defaultImage = "/images/team/default-avatar.png";
  return renderTemplate`${maybeRenderHead()}<div class="people-card group theme-transition" data-astro-cid-k5xddpmk> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-200 hover:translate-y-[-1px]" data-astro-cid-k5xddpmk> <div class="relative pb-3/4 overflow-hidden" data-astro-cid-k5xddpmk> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(`Photo of ${name}`, "alt")} class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300" data-astro-cid-k5xddpmk>` : renderTemplate`<img${addAttribute(defaultImage, "src")}${addAttribute(`Default avatar for ${name}`, "alt")} class="absolute inset-0 w-full h-full object-cover object-center" data-astro-cid-k5xddpmk>`} </div> <div class="p-4 flex-grow flex flex-col" data-astro-cid-k5xddpmk> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1" data-astro-cid-k5xddpmk>${name}</h3> <p class="text-sm text-emberGray-500 dark:text-emberGray-300 mb-2" data-astro-cid-k5xddpmk>${title}</p> ${research && renderTemplate`<p class="text-xs text-gray-600 dark:text-gray-400 mb-3 italic" data-astro-cid-k5xddpmk>${research}</p>`} <div class="mt-auto flex flex-col gap-2 text-xs" data-astro-cid-k5xddpmk> ${email && renderTemplate`<div class="flex items-center" data-astro-cid-k5xddpmk> <a${addAttribute(`mailto:${email}`, "href")} class="w-5 flex justify-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" data-astro-cid-k5xddpmk> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-k5xddpmk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-k5xddpmk></path> </svg> </a> <span class="text-[10px] text-gray-600 dark:text-gray-400 ml-1 truncate" data-astro-cid-k5xddpmk>${email}</span> </div>`} <!-- Social links row --> <div class="flex gap-1 pl-0" data-astro-cid-k5xddpmk> <!-- We'll create an array of social links and only render the ones that exist --> ${(() => {
    const socialLinks = [];
    if (url) {
      socialLinks.push({
        href: url,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>`,
        label: "Website"
      });
    }
    if (social && social.google_scholar) {
      socialLinks.push({
        href: social.google_scholar,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>`,
        label: "Google Scholar"
      });
    }
    if (social && social.github) {
      socialLinks.push({
        href: social.github,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>`,
        label: "GitHub"
      });
    }
    return socialLinks.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="w-5 flex justify-center" data-astro-cid-k5xddpmk> <a${addAttribute(socialLinks[0].href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" data-astro-cid-k5xddpmk>${unescapeHTML(socialLinks[0].icon)}</a> </div> ${socialLinks.slice(1).map((link) => renderTemplate`<div class="flex justify-center" data-astro-cid-k5xddpmk> <a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" data-astro-cid-k5xddpmk>${unescapeHTML(link.icon)}</a> </div>`)}` })}` : null;
  })()} </div> </div> </div> </div> </div> `;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/PeopleCard.astro", void 0);

const $$People = createComponent(async ($$result, $$props, $$slots) => {
  const title = "People";
  const people = await getCollection("people");
  const roleOrder = [
    "professor",
    "associate_professor",
    "assistant_professor",
    "postdoc",
    "phd_student",
    "visiting_researchers",
    "masters_student",
    "undergraduate",
    "staff",
    "alumni"
  ];
  const groupedPeople = roleOrder.reduce((acc, roleType) => {
    const filtered = people.filter((person) => person.data.type === roleType);
    if (filtered.length > 0) {
      acc[roleType] = filtered;
    }
    return acc;
  }, {});
  const titlesGrop = {
    professor: "Faculty",
    associate_professor: "Associate Professors",
    assistant_professor: "Assistant Professors",
    postdoc: "Postdoctoral Researchers",
    phd_student: "PhD Students",
    masters_student: "Masters Students",
    undergraduate: "Undergraduate Students",
    visiting_researchers: "Visiting Researchers",
    staff: "Staff",
    alumni: "Alumni"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-5xl mx-auto px-6 py-12"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">Our Team</h1> <!-- <p class="text-lg text-emberGray-600 dark:text-emberGray-300 mb-12">Meet the researchers and staff behind EMBER Lab</p> --> <p class="text-lg text-emberGray-600 dark:text-emberGray-300 mb-12"></p> ${roleOrder.map((roleType) => {
    const rolePeople = groupedPeople[roleType];
    if (!rolePeople) return null;
    return renderTemplate`<section class="mb-16"> <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-200"> <span class="text-emerald-600 dark:text-emerald-400"> ${titlesGrop[roleType] || roleType.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())} </span> <div class="h-px flex-grow bg-gradient-to-r from-emerald-200 to-transparent dark:from-emerald-800 ml-2"></div> </h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${rolePeople.map((person) => renderTemplate`${renderComponent($$result2, "PeopleCard", $$PeopleCard, { "person": person })}`)} </div> </section>`;
  })} </div> ` })}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/people.astro", void 0);

const $$file = "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/people.astro";
const $$url = "/people";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$People,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
