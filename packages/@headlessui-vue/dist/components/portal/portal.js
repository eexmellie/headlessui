import{Teleport as M,computed as L,defineComponent as s,h as j,inject as f,onMounted as w,onUnmounted as T,provide as y,reactive as I,ref as p,watchEffect as b,watch as R,getCurrentInstance as G}from"vue";import{render as E}from'../../utils/render.js';import{usePortalRoot as O}from'../../internal/portal-force-root.js';import{getOwnerDocument as h}from'../../utils/owner.js';import{dom as D}from'../../utils/dom.js';function x(r){let e=h(r);if(!e){if(r===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`)}let u=e.getElementById("headlessui-portal-root");if(u)return u;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)}let W=s({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(r,{slots:e,attrs:u}){let t=p(null),i=L(()=>h(t)),l=O(),n=f(C,null),o=p(l===!0||n==null?x(t.value):n.resolveTarget()),d=p(!1);w(()=>{d.value=!0}),b(()=>{l||n!=null&&(o.value=n.resolveTarget())});let c=f(m,null),v=!1,H=G();return R(t,()=>{if(v||!c)return;let a=D(t);a&&(T(c.register(a),H),v=!0)}),T(()=>{var g,P;let a=(g=i.value)==null?void 0:g.getElementById("headlessui-portal-root");a&&o.value===a&&o.value.children.length<=0&&((P=o.value.parentElement)==null||P.removeChild(o.value))}),()=>{if(!d.value||o.value===null)return null;let a={ref:t,"data-headlessui-portal":""};return j(M,{to:o.value},E({ourProps:a,theirProps:r,slot:{},attrs:u,slots:e,name:"Portal"}))}}}),m=Symbol("PortalParentContext");function $(){let r=f(m,null),e=p([]);function u(l){return e.value.push(l),r&&r.register(l),()=>t(l)}function t(l){let n=e.value.indexOf(l);n!==-1&&e.value.splice(n,1),r&&r.unregister(l)}let i={register:u,unregister:t,portals:e};return[e,s({name:"PortalWrapper",setup(l,{slots:n}){return y(m,i),()=>{var o;return(o=n.default)==null?void 0:o.call(n)}}})]}let C=Symbol("PortalGroupContext"),k=s({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(r,{attrs:e,slots:u}){let t=I({resolveTarget(){return r.target}});return y(C,t),()=>{let{target:i,...l}=r;return E({theirProps:l,ourProps:{},slot:{},attrs:e,slots:u,name:"PortalGroup"})}}});export{W as Portal,k as PortalGroup,$ as useNestedPortals};
