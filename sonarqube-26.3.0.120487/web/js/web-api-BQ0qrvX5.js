/*! licenses: /vendor.LICENSE.txt */
import{Q as t,R as c}from"./main-Dr4H6WEB.js";function n(e=!0){return t("/api/webservices/list",{include_internals:e}).then(r=>r.webServices).catch(c)}function s(e,r){return t("/api/webservices/response_example",{controller:e,action:r}).catch(c)}function i(){return t("/api/v2/api-docs").catch(c)}export{i as a,s as b,n as f};
//# sourceMappingURL=web-api-BQ0qrvX5.js.map
