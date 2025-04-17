import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, e as renderSlot, r as renderComponent, f as renderScript } from '../chunks/astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_Dy3COQcg.mjs';
import { $ as $$PublicationCard } from '../chunks/PublicationCard_CoXed01u.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$FilterDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FilterDropdown;
  const { id, label, options, defaultValue = options[0]?.value || "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-1.5"> <label${addAttribute(id, "for")} class="block text-sm font-medium text-gray-700 dark:text-gray-300"> ${label} </label> <div class="relative"> <select${addAttribute(id, "id")} class="w-full pl-3 pr-8 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"> ${options.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}${addAttribute(option.value === defaultValue, "selected")} class="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"> ${option.label} </option>`)} </select> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-400 dark:text-gray-500"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path> </svg> </div> </div> </div>`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/filters/FilterDropdown.astro", void 0);

const $$Astro = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$FilterPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FilterPanel;
  const { id = "filter-panel", classes = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 transform origin-top scale-y-0 h-0 opacity-0 transition-all duration-300 overflow-hidden ${classes}`, "class")}> <div class="grid md:grid-cols-2 gap-4"> ${renderSlot($$result, $$slots["filters"])} </div> <div class="mt-4 flex justify-end"> ${renderSlot($$result, $$slots["actions"], renderTemplate` <button id="reset-filters" class="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-lg transition-colors text-sm font-medium">
Reset
</button> `)} </div> </div>`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/filters/FilterPanel.astro", void 0);

const $$Publications = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Publications";
  const pubCollection = await getCollection("publications");
  function parseDate(dateStr, fallbackYear) {
    if (!dateStr) return /* @__PURE__ */ new Date(`${fallbackYear}-01-01`);
    try {
      return new Date(dateStr);
    } catch (e) {
      return /* @__PURE__ */ new Date(`${fallbackYear}-01-01`);
    }
  }
  const processedPubs = pubCollection.map((pub) => {
    const venueAcronym = typeof pub.data.venue === "object" ? pub.data.venue.acronym : typeof pub.data.venue === "string" ? pub.data.venue.split(" ")[0] : "";
    const venueName = typeof pub.data.venue === "object" ? pub.data.venue.name : typeof pub.data.venue === "string" ? pub.data.venue : "";
    return {
      ...pub.data,
      // Format venue for display
      venueFormatted: venueAcronym && venueName ? `${venueName} (${venueAcronym})` : venueAcronym || venueName,
      // For filtering
      venueAcronym,
      year: pub.data.year || (pub.data.date ? new Date(pub.data.date).getFullYear() : 2e3),
      publicationDate: pub.data.date ? parseDate(pub.data.date, pub.data.year) : parseDate(null, pub.data.year)
    };
  });
  const allVenues = [...new Set(
    processedPubs.map((pub) => pub.venueAcronym).filter((venue) => venue !== "")
  )];
  const preprints = processedPubs.filter((pub) => pub.is_preprint).sort((a, b) => b.publicationDate - a.publicationDate);
  const regularPubs = processedPubs.filter((pub) => !pub.is_preprint);
  const publicationsByYear = {};
  regularPubs.forEach((pub) => {
    if (!publicationsByYear[pub.year]) {
      publicationsByYear[pub.year] = [];
    }
    publicationsByYear[pub.year].push(pub);
  });
  Object.keys(publicationsByYear).forEach((year) => {
    publicationsByYear[year].sort((a, b) => b.publicationDate - a.publicationDate);
  });
  const years = Object.keys(publicationsByYear).map(Number).sort((a, b) => b - a);
  const yearOptions = [
    { value: "all", label: "All Years" },
    ...years.map((year) => ({ value: year.toString(), label: year.toString() }))
  ];
  if (preprints.length > 0) {
    yearOptions.push({ value: "preprint", label: "Preprints" });
  }
  const venueOptions = [
    { value: "all", label: "All Venues" },
    ...allVenues.map((venue) => ({ value: venue, label: venue }))
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-5xl mx-auto px-6 py-12"> <div class="flex justify-between items-center mb-8"> <h1 class="text-4xl font-bold">Publications</h1> <!-- Filter Toggle Button --> <button id="filter-toggle" class="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path> </svg> <span>Filters</span> </button> </div> <!-- Filter Panel --> ${renderComponent($$result2, "FilterPanel", $$FilterPanel, { "id": "publication-filters" }, { "filters": async ($$result3) => renderTemplate`<div class="grid md:grid-cols-2 gap-4"> ${renderComponent($$result3, "FilterDropdown", $$FilterDropdown, { "id": "year-filter", "label": "Year", "options": yearOptions })} ${renderComponent($$result3, "FilterDropdown", $$FilterDropdown, { "id": "venue-filter", "label": "Venue", "options": venueOptions })} </div>` })} <!-- Active Filters Display --> <div id="active-filters" class="hidden mt-2 mb-8"> <div class="flex flex-wrap gap-2 items-center"> <span class="text-sm text-gray-500 dark:text-gray-400">Active filters:</span> <div id="filter-badges" class="flex flex-wrap gap-2"></div> </div> </div> <!-- Preprints Section (only if preprints exist) --> ${preprints.length > 0 && renderTemplate`<div id="preprints-section" class="mb-12 publication-section" data-year="preprint"> <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg>
Preprints
<div class="h-px flex-grow bg-gradient-to-r from-emerald-200 to-transparent dark:from-emerald-800 ml-2"></div> </h2> ${preprints.map((pub) => renderTemplate`<div class="publication-item" data-year="preprint"${addAttribute(pub.venueAcronym, "data-venue")}> ${renderComponent($$result2, "PublicationCard", $$PublicationCard, { "publication": { data: pub } })} </div>`)} </div>`} <!-- Publications by Year --> ${years.map((year) => renderTemplate`<div${addAttribute(`year-${year}`, "id")} class="mb-12 publication-section"${addAttribute(year, "data-year")}> <h2 class="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-200"> <span class="text-emerald-600 dark:text-emerald-400">${year}</span> <div class="h-px flex-grow bg-gradient-to-r from-emerald-200 to-transparent dark:from-emerald-800 ml-2"></div> </h2> ${publicationsByYear[year].map((pub) => renderTemplate`<div class="publication-item"${addAttribute(year, "data-year")}${addAttribute(pub.venueAcronym, "data-venue")}> ${renderComponent($$result2, "PublicationCard", $$PublicationCard, { "publication": { data: pub } })} </div>`)} </div>`)} <!-- No Results Message --> <div id="no-results" class="hidden py-10 text-center"> <p class="text-lg text-gray-500 dark:text-gray-400">No publications match your filter criteria.</p> <button id="clear-filters" class="mt-4 px-4 py-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200 rounded-md hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors">
Clear Filters
</button> </div> </div> ` })} ${renderScript($$result, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/publications.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/publications.astro", void 0);

const $$file = "/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/publications.astro";
const $$url = "/publications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
