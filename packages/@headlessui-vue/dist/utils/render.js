import{h as O,cloneVNode as x,Fragment as k}from"vue";import{match as w}from'./match.js';var N=(o=>(o[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o))(N||{}),S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(S||{});function H({visible:r=!0,features:t=0,ourProps:e,theirProps:o,...i}){var a;let n=j(o,e),l=Object.assign(i,{props:n});if(r||t&2&&n.static)return y(l);if(t&1){let d=(a=n.unmount)==null||a?0:1;return w(d,{[0](){return null},[1](){return y({...i,props:{...n,hidden:!0,style:{display:"none"}}})}})}return y(l)}function y({props:r,attrs:t,slots:e,slot:o,name:i}){var m,h;let{as:n,...l}=T(r,["unmount","static"]),a=(m=e.default)==null?void 0:m.call(e,o),d={};if(o){let u=!1,c=[];for(let[p,f]of Object.entries(o))typeof f=="boolean"&&(u=!0),f===!0&&c.push(p);u&&(d["data-headlessui-state"]=c.join(" "))}if(n==="template"){if(a=b(a!=null?a:[]),Object.keys(l).length>0||Object.keys(t).length>0){let[u,...c]=a!=null?a:[];if(!v(u)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(t)).map(s=>s.trim()).filter((s,g,R)=>R.indexOf(s)===g).sort((s,g)=>s.localeCompare(g)).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));let p=j((h=u.props)!=null?h:{},l),f=x(u,p,!0);for(let s in p)s.startsWith("on")&&(f.props||(f.props={}),f.props[s]=p[s]);return f}return Array.isArray(a)&&a.length===1?a[0]:a}return O(n,Object.assign({},l,d),{default:()=>a})}function b(r){return r.flatMap(t=>t.type===k?b(t.children):[t])}function j(...r){var o;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let i of r)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?((o=e[n])!=null||(e[n]=[]),e[n].push(i[n])):t[n]=i[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(i=>[i,void 0])));for(let i in e)Object.assign(t,{[i](n,...l){let a=e[i];for(let d of a){if(n instanceof Event&&n.defaultPrevented)return;d(n,...l)}}});return t}function K(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function T(r,t=[]){let e=Object.assign({},r);for(let o of t)o in e&&delete e[o];return e}function v(r){return r==null?!1:typeof r.type=="string"||typeof r.type=="object"||typeof r.type=="function"}export{N as Features,S as RenderStrategy,K as compact,T as omit,H as render};
