import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderScript, g as renderTransition, h as createTransitionScope, a as renderTemplate, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderComponent, e as renderSlot, l as renderHead } from './astro/server_Bj3v6FHo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
/* empty css                           */

const $$Astro$2 = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const BASE_URL = "/";
  const currentPath = Astro2.url.pathname;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/people", label: "People" },
    { href: "/publications", label: "Publications" },
    { href: "/research", label: "Research" },
    { href: "/robots", label: "Robots" },
    { href: "/contact", label: "Contact" }
  ];
  function isActive(path) {
    const full = path;
    return currentPath === full || currentPath === full + "/";
  }
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl
            bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border
            border-gray-100 dark:border-gray-700 rounded-xl shadow-ember
            theme-transition"${addAttribute(renderTransition($$result, "io2to47t"), "data-astro-transition-scope")}${addAttribute(createTransitionScope($$result, "io2to47t"), "data-astro-transition-persist")}> <!-- row: logo + desktop nav + toggles --> <div class="px-8 py-1 flex items-center justify-between"> <a${addAttribute("/", "href")} class="flex items-center space-x-3 group"> <div class="w-10 h-10 bg-gradient-to-r from-emberGreen-500 to-emberBlue-500
                  rounded-full flex items-center justify-center shadow-lg"> <!-- <span class="text-white font-bold">E</span> --> <img${addAttribute("/images/ember_icon.webp", "src")} alt="EMBER Lab Logo" class="w-8 h-8 object-cover"> </div> <span class="text-xl font-bold text-gradient">EMBER Lab</span> </a> <!-- desktop links --> <ul class="hidden md:flex space-x-8 text-lg"> ${navLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}${addAttribute(`nav-link px-4 py-2 transition-standard ${isActive(link.href) ? "text-emberGreen-500 dark:text-emberGreen-300" : "text-gray-600 dark:text-gray-300"}`, "class")}>${link.label}</a></li>`)} </ul> <!-- toggles --> <div class="flex items-center space-x-2"> <!-- theme --> <button id="theme-toggle" class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-standard" aria-label="Toggle dark mode" onclick="window.toggleTheme()"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden dark:block text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block dark:hidden text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> <!-- hamburger --> <button id="mobile-menu-button" class="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle mobile menu" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- mobile menu --> <div id="mobile-menu" class="hidden md:hidden px-4 py-2 pb-3 bg-white/95 dark:bg-gray-800/95
              rounded-b-xl border-t border-gray-100 dark:border-gray-700 theme-transition"> <ul class="space-y-1"> ${navLinks.map((link) => renderTemplate`<li><a${addAttribute(BASE_URL + link.href, "href")}${addAttribute(`block py-2 px-4 rounded-lg ${isActive(link.href) ? "text-emberGreen-500 dark:text-emberGreen-300" : "text-gray-600 dark:text-gray-300 hover:text-emberGreen-500 dark:hover:text-emberGreen-300"}`, "class")}>${link.label}</a></li>`)} </ul> </div> </nav> <!-- ========== JS (keeps your original behaviour) ========== --> ${renderScript($$result, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/layout/Navbar.astro", "self");

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_C9mLOCcE.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": "./", "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://ember-lab.eecs.berkeley.edu", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_C8x1glxI.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const contact = await getEntry("contact_info", "main");
  const BASE_URL = "/";
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 mt-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"> <!-- Lab Info & Social Links --> <div> <div class="flex items-center space-x-2 mb-4"> <div class="w-10 h-10 bg-gradient-to-r from-emberGreen-500 to-emberBlue-500 rounded-full flex items-center justify-center"> <img${addAttribute(BASE_URL + "/images/ember_icon.webp", "src")} alt="EMBER Lab Logo" class="w-8 h-8 object-cover"> </div> <span class="text-xl font-semibold text-gradient">EMBER Lab</span> </div> <p class="text-gray-600 dark:text-gray-300 mb-6">
Embodied Intelligence & Robotics Lab at UC Berkeley
</p> <!-- Social Media Links --> <div class="flex space-x-5 mb-4"> ${Object.entries(contact.data.social).map(([platform, details]) => details.url && renderTemplate`<a${addAttribute(details.url, "href")} target="_blank" rel="noopener" class="text-gray-500 hover:text-emberBlue-500 dark:text-gray-400 dark:hover:text-emberBlue-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"${addAttribute(platform, "aria-label")}> <path${addAttribute(details.w3c_svg, "d")}></path> </svg> </a>`)} </div> </div> <!-- Berkeley Logo Center --> <div class="flex flex-col items-center justify-center"> <a href="https://berkeley.edu" target="_blank" rel="noopener" class="inline-block"> <img${addAttribute(BASE_URL + "/images/berkeley-logo.png", "src")} alt="UC Berkeley" class="h-16 mb-4"> </a> <p class="text-gray-500 dark:text-gray-400 text-center text-sm"> ${contact.data.department} </p> </div> <!-- Contact Right --> <div class="flex flex-col items-start md:items-end"> <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact</h3> <p class="text-gray-600 dark:text-gray-300 mb-2 md:text-right"> ${contact.data.address.room}, ${contact.data.address.building}<br> ${contact.data.address.city}, ${contact.data.address.state} ${contact.data.address.zip}<br> ${contact.data.address.country} </p> <a${addAttribute(contact.data.email, "href")} class="text-emberGreen-500 hover:text-emberGreen-700 dark:text-emberGreen-300 dark:hover:text-emberGreen-500 transition-standard"> ${contact.data.email} </a> </div> </div> <div class="border-t border-gray-100 dark:border-gray-700 mt-10 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
&copy; 2025 EMBER Lab, UC Berkeley. All rights reserved.
</div> </div> </footer>`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/layout/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ember-lab.eecs.berkeley.edu");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  const BASE_URL = "/";
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><link rel="icon" type="image/webp"', '><!-- 1️⃣ Critical in‑head CSS to guarantee a dark background is present *before* paint --><style>\n      :root {\n        /* default light */\n        color-scheme: light;\n        --initial-bg: #ffffff;\n      }\n      html.dark {\n        /* default dark */\n        color-scheme: dark;\n        --initial-bg: #111827; /* Tailwind gray‑900 */\n      }\n      html,body { background: var(--initial-bg); }\n      /* disable all transitions until we re‑enable (prevents flicker) */\n      .disable-transitions * { transition: none !important; }\n    </style><!-- fonts, preconnects etc. --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- enable SPA view‑transitions -->', "<!-- 2️⃣ Theme script: runs *immediately* and also during every SPA navigation --><script>\n      (() => {\n        /* util to pick current theme */\n        const getTheme = () => {\n          const stored = localStorage.getItem('theme');\n          if (stored === 'dark' || stored === 'light') return stored;\n          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n        };\n\n        /* apply theme to a given document (current or incoming) */\n        const applyTheme = (doc) => {\n          const theme = getTheme();\n          doc.documentElement.classList.toggle('dark', theme === 'dark');\n          doc.documentElement.setAttribute('data-theme', theme);\n        };\n\n        /* —— first paint —— */\n        applyTheme(document);\n        document.documentElement.classList.add('disable-transitions');\n        addEventListener('DOMContentLoaded', () => {\n          // re‑enable transitions after first layout\n          document.documentElement.classList.remove('disable-transitions');\n        });\n\n        /* —— SPA navigations —— */\n        document.addEventListener('astro:before-swap', (e) => {\n          // e.newDocument is the *incoming* page; tag it before it renders\n          applyTheme(e.newDocument);\n        });\n\n        /* expose toggle for the UI button */\n        window.toggleTheme = () => {\n          const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';\n          localStorage.setItem('theme', next);\n          applyTheme(document);\n        };\n\n        /* watch system changes only when user hasn’t chosen explicitly */\n        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (mq) => {\n          if (!localStorage.getItem('theme')) {\n            applyTheme(document);\n          }\n        });\n      })();\n    </script>", `</head> <body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-['Inter',sans-serif] min-h-screen flex flex-col"> <!-- background gradient layer (stays dark) --> <div class="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-br from-emberGreen-50/20 via-emberBlue-50/10 to-transparent dark:from-emberGreen-900/10 dark:via-emberBlue-900/5"></div> `, ' <main class="flex-grow pt-16 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"> ', " </main> ", " </body></html>"])), title ? `${title} – EMBER Lab` : "EMBER Lab", addAttribute(BASE_URL + "/images/ember_icon.webp", "href"), renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "swap" }), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/thomas/Research/LabWebsite/ember-lab-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, getCollection as a, DEFAULT_HASH_PROPS as b, getEntry as g, renderEntry as r };
