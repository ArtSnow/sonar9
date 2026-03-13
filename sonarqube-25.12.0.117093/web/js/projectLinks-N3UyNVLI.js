/*! licenses: /vendor.LICENSE.txt */
import{V as n,W as r,ae as a,X as i}from"./main-DgLkhlza.js";function s(e){return n("/api/project_links/search",{projectKey:e}).then(t=>t.links,r)}function c(e){return i("/api/project_links/delete",{id:e}).catch(r)}function p(e){return a("/api/project_links/create",e).then(t=>t.link,r)}export{p as c,c as d,s as g};
//# sourceMappingURL=projectLinks-N3UyNVLI.js.map
