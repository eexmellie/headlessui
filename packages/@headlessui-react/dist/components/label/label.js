import c,{createContext as m,useContext as L,useMemo as f,useState as b}from"react";import{useId as T}from'../../hooks/use-id.js';import{forwardRefWithAs as E,render as g}from'../../utils/render.js';import{useIsoMorphicEffect as x}from'../../hooks/use-iso-morphic-effect.js';import{useSyncRefs as P}from'../../hooks/use-sync-refs.js';import{useEvent as y}from'../../hooks/use-event.js';let d=m(null);function u(){let a=L(d);if(a===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return a}function H(){let[a,t]=b([]);return[a.length>0?a.join(" "):void 0,f(()=>function(e){let s=y(r=>(t(l=>[...l,r]),()=>t(l=>{let n=l.slice(),p=n.indexOf(r);return p!==-1&&n.splice(p,1),n}))),o=f(()=>({register:s,slot:e.slot,name:e.name,props:e.props}),[s,e.slot,e.name,e.props]);return c.createElement(d.Provider,{value:o},e.children)},[t])]}let A="label";function h(a,t){let i=T(),{id:e=`headlessui-label-${i}`,passive:s=!1,...o}=a,r=u(),l=P(t);x(()=>r.register(e),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in o&&delete o.onClick),g({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:A,name:r.name||"Label"})}let v=E(h),M=Object.assign(v,{});export{M as Label,H as useLabels};
