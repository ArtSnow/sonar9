/*! licenses: /vendor.LICENSE.txt */
import{l as u}from"./main-CbQlDdW6.js";import{r as e}from"./vendor-6DxLhnrV.js";const m=10;function a(){const[o,l]=e.useState(0),[s,c]=e.useState(0),[n,r]=e.useState(!1);return e.useEffect(()=>{const t=u.throttle(()=>{document.documentElement&&(l(document.documentElement.scrollLeft),c(document.documentElement.scrollTop),r(!0))},m);return document.addEventListener("scroll",t),()=>document.removeEventListener("scroll",t)},[]),{left:o,top:s,scrolledOnce:n}}export{a as u};
//# sourceMappingURL=useFollowScroll-CkpmZAHK.js.map
