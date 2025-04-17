import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, g as renderTransition, a as renderTemplate, u as unescapeHTML, r as renderComponent, F as Fragment } from './astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$PublicationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PublicationCard;
  const { publication, compact = false } = Astro2.props;
  const data = publication.data;
  function formatAuthors(authors) {
    if (!authors) return "";
    if (typeof authors === "string") {
      return authors;
    }
    return authors.map((author, index) => {
      const name = author.name;
      const hasEqualContribution2 = author.equal_contribution;
      const url = author.url;
      let authorEl = url ? `<a href="${url}" target="_blank" rel="noopener" class="hover:underline text-emberGreen">${name}</a>` : name;
      if (hasEqualContribution2) {
        authorEl += "<sup>*</sup>";
      }
      if (index < authors.length - 1) {
        authorEl += ", ";
      }
      return authorEl;
    }).join("");
  }
  const hasEqualContribution = Array.isArray(data.authors) && data.authors.some((author) => author.equal_contribution);
  data.venueFormatted || data.venue;
  const venueAcronym = data.venue?.acronym || (typeof data.venue === "string" ? data.venue.split(" ")[0] : "");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-white dark:bg-gray-800 ${compact ? "rounded-md shadow-sm border border-gray-100 dark:border-gray-700" : "rounded-lg shadow-md"} overflow-hidden ${compact ? "mb-2" : "mb-6"}`, "class")}${addAttribute(renderTransition($$result, "btine2gy"), "data-astro-transition-scope")}> <div class="flex flex-col md:flex-row"> ${data.image && !compact && renderTemplate`<div class="md:w-1/4 p-4"> <img${addAttribute(data.image, "src")}${addAttribute(data.title, "alt")} class="w-full h-auto object-cover rounded-md"> </div>`} <div${addAttribute(`${compact ? "p-3" : "p-5"} ${data.image && !compact ? "md:w-3/4" : "w-full"}`, "class")}> <!-- Title with preprint badge if applicable --> <div class="flex flex-wrap items-center gap-2"> <h3${addAttribute(`${compact ? "text-base" : "text-xl"} font-bold text-gray-900 dark:text-white leading-tight`, "class")}> ${data.title} </h3> ${data.is_preprint && compact && renderTemplate`<span class="bg-blue-100 text-blue-800 text-xs font-medium px-1.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
Preprint
</span>`} </div> <!-- Compact version shows shortened authors --> ${compact ? renderTemplate`<p class="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-1"> <!-- Truncate authors with ellipsis for compact mode --> ${typeof data.authors === "string" ? data.authors : data.authors?.map((a) => a.name).join(", ")} </p>` : renderTemplate`<p class="text-gray-600 dark:text-gray-300 mt-1"> <span>${unescapeHTML(formatAuthors(data.authors))}</span> ${hasEqualContribution && renderTemplate`<span class="text-xs ml-1">
(* equal contribution)
</span>`} </p>`} <!-- Simplified venue display for compact mode --> ${compact ? renderTemplate`<div class="flex items-center flex-wrap gap-1.5 mt-1.5"> ${venueAcronym && renderTemplate`<span class="bg-gray-100 text-gray-800 text-xs font-medium px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"> ${venueAcronym} </span>`} <span class="text-xs text-gray-500 dark:text-gray-400">${data.year}</span> </div>` : renderTemplate`<p class="text-gray-700 dark:text-gray-400 mt-1 mb-2 flex items-center flex-wrap gap-2"> ${venueAcronym && renderTemplate`<span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"> ${venueAcronym} </span>`} <span class="italic">${data.venue?.name || ""}</span> ${data.year && renderTemplate`<span>, ${data.year}</span>`} </p>`} <!-- TLDR - hide in compact mode --> ${data.tldr && !compact && renderTemplate`<div class="my-3 border-l-4 border-emberGreen pl-3"> <p class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed"> <span class="font-semibold uppercase text-xs text-gray-500">TL;DR:</span> ${data.tldr} </p> </div>`} <!-- Compact links for compact mode --> <div${addAttribute(`flex flex-wrap ${compact ? "gap-2 mt-2" : "gap-3 mt-4"}`, "class")}> ${data.pdf && renderTemplate`<a${addAttribute(data.pdf, "href")} target="_blank" rel="noopener"${addAttribute(`inline-flex items-center gap-1 text-emberGreen hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors ${compact ? "text-sm" : ""}`, "class")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${compact ? "h-3.5 w-3.5" : "h-5 w-5"}`, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path> </svg> ${compact ? "PDF" : "Paper"} </a>`} ${data.code && renderTemplate`<a${addAttribute(data.code, "href")} target="_blank" rel="noopener"${addAttribute(`inline-flex items-center gap-1 text-emberGreen hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors ${compact ? "text-sm" : ""}`, "class")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${compact ? "h-3.5 w-3.5" : "h-5 w-5"}`, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path> </svg>
Code
</a>`} ${compact ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${(data.website || data.dataset) && renderTemplate`<a${addAttribute(data.website || data.dataset, "href")} target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-emberGreen hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"></path> </svg>
More
</a>`}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${data.website && renderTemplate`<a${addAttribute(data.website, "href")} target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-emberGreen  hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path> </svg>
Website
</a>`}${data.dataset && renderTemplate`<a${addAttribute(data.dataset, "href")} target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-emberGreen  hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11v6M15 11v6M9 17h6"></path> </svg>
Dataset
</a>`}` })}`} </div> </div> </div> </div>`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/PublicationCard.astro", "self");

export { $$PublicationCard as $ };
