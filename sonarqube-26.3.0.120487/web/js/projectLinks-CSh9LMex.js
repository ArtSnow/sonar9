/*! licenses: /vendor.LICENSE.txt */
import{Q as n,R as r,W as i,U as a}from"./main-Dr4H6WEB.js";function s(t){return n("/api/project_links/search",{projectKey:t}).then(e=>e.links,r)}function c(t){return a("/api/project_links/delete",{id:t}).catch(r)}function p(t){return i("/api/project_links/create",t).then(e=>e.link,r)}export{p as c,c as d,s as g};
//# sourceMappingURL=projectLinks-CSh9LMex.js.map
