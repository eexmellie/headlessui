import{ref as m,watchEffect as s}from"vue";import{dom as h}from'../utils/dom.js';let i=new Map,t=new Map;function E(d,f=m(!0)){s(o=>{var a;if(!f.value)return;let e=h(d);if(!e)return;o(function(){var u;if(!e)return;let r=(u=t.get(e))!=null?u:1;if(r===1?t.delete(e):t.set(e,r-1),r!==1)return;let n=i.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,i.delete(e))});let l=(a=t.get(e))!=null?a:0;t.set(e,l+1),l===0&&(i.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0)})}export{E as useInert};
