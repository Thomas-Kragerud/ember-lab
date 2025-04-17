import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_Bj3v6FHo.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/","cacheDir":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/.astro/","outDir":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/","srcDir":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/src/","publicDir":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/public/","buildClientDir":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/client/","buildServerDir":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/server/","adapterName":"","routes":[{"file":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/people/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/people","isIndex":false,"type":"page","pattern":"^\\/people$","segments":[[{"content":"people","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/people.astro","pathname":"/people","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/publications/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/publications","isIndex":false,"type":"page","pattern":"^\\/publications$","segments":[[{"content":"publications","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/publications.astro","pathname":"/publications","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/research/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/research","isIndex":false,"type":"page","pattern":"^\\/research$","segments":[[{"content":"research","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/research.astro","pathname":"/research","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/robots/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots","isIndex":false,"type":"page","pattern":"^\\/robots$","segments":[[{"content":"robots","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.astro","pathname":"/robots","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://ember-lab.eecs.berkeley.edu","base":"/","trailingSlash":"never","compressHTML":true,"assetsPrefix":"./","componentMetadata":[["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/PublicationCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/ResearchCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/research.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/research@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/publications.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/publications@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/layout/Navbar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/people.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/people@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/robots.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/robots@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/NewsCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/layout/Footer.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/people@_@astro":"pages/people.astro.mjs","\u0000@astro-page:src/pages/publications@_@astro":"pages/publications.astro.mjs","\u0000@astro-page:src/pages/research@_@astro":"pages/research.astro.mjs","\u0000@astro-page:src/pages/robots@_@astro":"pages/robots.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DggfrndF.mjs","/Users/thomas/Research/LabWebsite/ember-lab-site/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/thomas/Research/LabWebsite/ember-lab-site/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C9mLOCcE.mjs","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DmB_zCG0.mjs","/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/publications.astro?astro&type=script&index=0&lang.ts":"astro/publications.astro_astro_type_script_index_0_lang.B0OU8cr_.js","/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/index.astro?astro&type=script&index=0&lang.ts":"astro/index.astro_astro_type_script_index_0_lang.D09HyUii.js","/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/ResearchCard.astro?astro&type=script&index=0&lang.ts":"astro/ResearchCard.astro_astro_type_script_index_0_lang.Dy1oyrsm.js","/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/NewsCard.astro?astro&type=script&index=0&lang.ts":"astro/NewsCard.astro_astro_type_script_index_0_lang.Daj3UFtD.js","/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts":"astro/Navbar.astro_astro_type_script_index_0_lang.D8-FLHtF.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/loaders/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.js":"astro/flowGraphGLTFDataProvider.yyJkM5j6.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/ddsTextureLoader.js":"astro/ddsTextureLoader.CpqBAFI3.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/basisTextureLoader.js":"astro/basisTextureLoader.BNaCcGP-.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/envTextureLoader.js":"astro/envTextureLoader.DRyy0l7v.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader.js":"astro/hdrTextureLoader.I3amG6fG.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader.js":"astro/ktxTextureLoader.CS8dUy4K.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/tgaTextureLoader.js":"astro/tgaTextureLoader.CbAIBHKE.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js":"astro/flowGraphCodeExecutionBlock.CUnq4LM-.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Meshes/mesh.vertexData.functions.js":"astro/mesh.vertexData.functions.BYooUupK.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/iesTextureLoader.js":"astro/iesTextureLoader.CuxcHZas.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","/Users/thomas/Research/LabWebsite/ember-lab-site/node_modules/@babylonjs/core/Materials/Textures/Loaders/exrTextureLoader.js":"astro/exrTextureLoader.CASTw4v0.js","@astrojs/react/client.js":"astro/client.C-GIcO0P.js","@components/RobotViewer.jsx":"astro/RobotViewer.BNj4F1S3.js","@components/RobotViewer":"astro/RobotViewer.DYYketL0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/publications.astro?astro&type=script&index=0&lang.ts","function v(){const u=document.getElementById(\"filter-toggle\"),a=document.getElementById(\"publication-filters\"),n=document.getElementById(\"year-filter\"),s=document.getElementById(\"venue-filter\"),f=document.getElementById(\"reset-filters\"),y=document.getElementById(\"clear-filters\"),c=document.getElementById(\"active-filters\"),o=document.getElementById(\"filter-badges\"),r=document.getElementById(\"no-results\"),m=document.querySelectorAll(\".publication-item\"),p=document.querySelectorAll(\".publication-section\");if(!u)return;u.addEventListener(\"click\",()=>{a?.classList.contains(\"scale-y-100\")?(a?.classList.remove(\"scale-y-100\",\"opacity-100\",\"h-auto\"),a?.classList.add(\"scale-y-0\",\"opacity-0\",\"h-0\")):(a?.classList.remove(\"scale-y-0\",\"opacity-0\",\"h-0\"),a?.classList.add(\"scale-y-100\",\"opacity-100\",\"h-auto\"))});function d(){if(!n||!s)return;const e=n.value,i=s.value;h(e,i),p.forEach(l=>{l.style.display=\"none\"});let t=0;m.forEach(l=>{const k=l.dataset.year,E=l.dataset.venue;if((e===\"all\"||k===e)&&(i===\"all\"||E===i)){l.style.display=\"block\",t++;const b=l.closest(\".publication-section\");b&&(b.style.display=\"block\")}else l.style.display=\"none\"}),r&&(r.style.display=t===0?\"block\":\"none\")}function h(e,i){if(o){if(o.innerHTML=\"\",e!==\"all\"){const t=document.createElement(\"span\");t.className=\"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200\",t.innerHTML=`\n          Year: ${e}\n          <button type=\"button\" class=\"ml-1 inline-flex items-center justify-center h-4 w-4 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 focus:outline-none\" data-filter=\"year\">\n            <svg class=\"h-3 w-3\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n            </svg>\n          </button>\n        `,o.appendChild(t)}if(i!==\"all\"){const t=document.createElement(\"span\");t.className=\"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200\",t.innerHTML=`\n          Venue: ${i}\n          <button type=\"button\" class=\"ml-1 inline-flex items-center justify-center h-4 w-4 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none\" data-filter=\"venue\">\n            <svg class=\"h-3 w-3\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n            </svg>\n          </button>\n        `,o.appendChild(t)}c&&(c.style.display=e===\"all\"&&i===\"all\"?\"none\":\"block\")}}function g(){n&&(n.value=\"all\"),s&&(s.value=\"all\"),m.forEach(e=>{e.style.display=\"block\"}),p.forEach(e=>{e.style.display=\"block\"}),c&&(c.style.display=\"none\"),r&&(r.style.display=\"none\")}n&&n.addEventListener(\"change\",d),s&&s.addEventListener(\"change\",d),f&&f.addEventListener(\"click\",g),y&&y.addEventListener(\"click\",g),o&&o.addEventListener(\"click\",e=>{const t=e.target.closest(\"button[data-filter]\");if(t){const l=t.getAttribute(\"data-filter\");l===\"year\"?n&&(n.value=\"all\"):l===\"venue\"&&s&&(s.value=\"all\"),d()}})}document.addEventListener(\"DOMContentLoaded\",v);document.addEventListener(\"astro:page-load\",v);"],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"toggle-news-btn\"),l=document.getElementById(\"news-container\"),d=document.getElementById(\"expanded-news-container\");let n=!1;e.addEventListener(\"click\",()=>{n=!n,n?(l.classList.add(\"hidden\"),d.classList.remove(\"hidden\"),e.innerHTML=`\n          Show Less\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 ml-2\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n            <path fill-rule=\"evenodd\" d=\"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z\" clip-rule=\"evenodd\" />\n          </svg>\n        `):(l.classList.remove(\"hidden\"),d.classList.add(\"hidden\"),e.innerHTML=`\n          View All News\n          <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 ml-2\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n            <path fill-rule=\"evenodd\" d=\"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\" />\n          </svg>\n        `)})});"],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/ResearchCard.astro?astro&type=script&index=0&lang.ts","function r(){console.log(\"Initializing papers toggle buttons\");const n=document.querySelectorAll(\".papers-toggle\");console.log(\"Found toggle buttons:\",n.length),n.forEach(t=>{const o=t.getAttribute(\"aria-controls\"),e=document.getElementById(o);console.log(\"Toggle button for:\",o,\"Container exists:\",!!e),t.removeEventListener(\"click\",c),t.addEventListener(\"click\",c)})}function c(n){const t=n.currentTarget,o=t.getAttribute(\"aria-controls\"),e=document.getElementById(o);if(console.log(\"Toggle clicked for:\",o),e){const l=t.getAttribute(\"aria-expanded\")===\"true\";t.setAttribute(\"aria-expanded\",!l),e.setAttribute(\"aria-hidden\",l);const i=t.querySelector(\"svg\");i&&i.classList.toggle(\"rotate-180\",!l),l?e.style.maxHeight=\"0\":(e.style.maxHeight=e.scrollHeight+\"px\",console.log(\"Setting max height to:\",e.scrollHeight+\"px\"))}}document.addEventListener(\"DOMContentLoaded\",r);document.addEventListener(\"astro:page-load\",r);"],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/cards/NewsCard.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\".news-card\").forEach(o=>{const n=o.querySelector(\".card-trigger\"),e=o.querySelector(\".news-popup\"),s=o.querySelector(\".popup-close\");n&&e&&(n.addEventListener(\"click\",()=>{e.classList.remove(\"opacity-0\",\"pointer-events-none\"),document.body.style.overflow=\"hidden\"}),s?.addEventListener(\"click\",t=>{t.stopPropagation(),e.classList.add(\"opacity-0\",\"pointer-events-none\"),document.body.style.overflow=\"\"}),e.addEventListener(\"click\",t=>{t.target===e&&(e.classList.add(\"opacity-0\",\"pointer-events-none\"),document.body.style.overflow=\"\")}),document.addEventListener(\"keydown\",t=>{t.key===\"Escape\"&&!e.classList.contains(\"pointer-events-none\")&&(e.classList.add(\"opacity-0\",\"pointer-events-none\"),document.body.style.overflow=\"\")}))})});"],["/Users/thomas/Research/LabWebsite/ember-lab-site/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts","function i(){const t=document.getElementById(\"mobile-menu-button\"),e=document.getElementById(\"mobile-menu\");!t||!e||(t.onclick=n=>{n.stopPropagation();const d=t.getAttribute(\"aria-expanded\")===\"true\";e.classList.toggle(\"hidden\"),t.setAttribute(\"aria-expanded\",(!d).toString())})}function a(){const t=window.location.pathname;document.querySelectorAll(\"#navbar a\").forEach(e=>{const n=t===e.pathname||t===e.pathname+\"/\";e.classList.toggle(\"text-emberGreen-500\",n),e.classList.toggle(\"dark:text-emberGreen-300\",n),e.classList.toggle(\"text-gray-600\",!n),e.classList.toggle(\"dark:text-gray-300\",!n)})}function s(){const t=document.getElementById(\"mobile-menu-button\"),e=document.getElementById(\"mobile-menu\");!t||!e||(document.addEventListener(\"click\",n=>{!e.contains(n.target)&&!t.contains(n.target)&&(e.classList.add(\"hidden\"),t.setAttribute(\"aria-expanded\",\"false\"))}),document.addEventListener(\"keydown\",n=>{n.key===\"Escape\"&&(e.classList.add(\"hidden\"),t.setAttribute(\"aria-expanded\",\"false\"))}))}function o(){i(),a(),window._emberNavOnce||(s(),window._emberNavOnce=!0)}document.addEventListener(\"DOMContentLoaded\",o);document.addEventListener(\"astro:page-load\",o);document.addEventListener(\"astro:after-swap\",a);"]],"assets":["./file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/contact/index.html","./file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/people/index.html","./file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/publications/index.html","./file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/research/index.html","./file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/robots/index.html","./file:///Users/thomas/Research/LabWebsite/ember-lab-site/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"oBppVkWx3NUepJ8XHZOtLl5iDfSIhfkyeD0yU9dUnuM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
