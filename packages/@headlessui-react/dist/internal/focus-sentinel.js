import s,{useState as c}from"react";import{useIsMounted as m}from'../hooks/use-is-mounted.js';import{Hidden as f,Features as l}from'./hidden.js';function A({onFocus:n}){let[r,o]=c(!0),u=m();return r?s.createElement(f,{as:"button",type:"button",features:l.Focusable,onFocus:a=>{a.preventDefault();let e,i=50;function t(){if(i--<=0){e&&cancelAnimationFrame(e);return}if(n()){if(cancelAnimationFrame(e),!u.current)return;o(!1);return}e=requestAnimationFrame(t)}e=requestAnimationFrame(t)}}):null}export{A as FocusSentinel};
