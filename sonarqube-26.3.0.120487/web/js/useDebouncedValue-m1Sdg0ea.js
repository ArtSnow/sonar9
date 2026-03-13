/*! licenses: /vendor.LICENSE.txt */
import{a as e}from"./vendor-H6-pGJ9Z.js";const r=300;function d(){const t=e.useRef(),[a,n]=e.useState(""),[s,c]=e.useState(""),o=e.useCallback(u=>{n(u),t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{c(u)},r)},[]);return[a,s,o]}export{d as u};
//# sourceMappingURL=useDebouncedValue-m1Sdg0ea.js.map
