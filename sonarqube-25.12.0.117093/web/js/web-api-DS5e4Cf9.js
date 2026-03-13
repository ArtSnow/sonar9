/*! licenses: /vendor.LICENSE.txt */
import{V as t,W as c}from"./main-DgLkhlza.js";function n(e=!0){return t("/api/webservices/list",{include_internals:e}).then(r=>r.webServices).catch(c)}function s(e,r){return t("/api/webservices/response_example",{controller:e,action:r}).catch(c)}function i(){return t("/api/v2/api-docs").catch(c)}export{i as a,s as b,n as f};
//# sourceMappingURL=web-api-DS5e4Cf9.js.map
