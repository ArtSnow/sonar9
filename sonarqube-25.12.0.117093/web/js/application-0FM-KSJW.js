/*! licenses: /vendor.LICENSE.txt */
import{V as e,W as p,X as o,ae as c}from"./main-DgLkhlza.js";function r(a,t){return e("/api/applications/show_leak",{application:a,branch:t}).then(i=>i.leaks,p)}function l(a,t){return e("/api/applications/show",{application:a,branch:t}).then(i=>i.application,p)}function u(a,t,i,n){return c("/api/applications/create",{description:t,key:i,name:a,visibility:n}).catch(p)}function h(a){return o("/api/applications/delete",{application:a}).catch(p)}export{r as a,u as c,h as d,l as g};
//# sourceMappingURL=application-0FM-KSJW.js.map
