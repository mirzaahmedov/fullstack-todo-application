var se=Object.defineProperty,ce=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var O=(t,n,i)=>n in t?se(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,C=(t,n)=>{for(var i in n||(n={}))ge.call(n,i)&&O(t,i,n[i]);if(N)for(var i of N(n))he.call(n,i)&&O(t,i,n[i]);return t},L=(t,n)=>ce(t,ue(n));import{R as d,j as e,a as k,b as l,s as r,m as X,c as q,C as b,h as $,N as fe,u as me,L as K,v as j,W as pe,B as ve,d as be,e as B}from"./vendor.b72cc02d.js";const we=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}};we();const J=d.createContext(),Q=d.createContext();function ye(t){const[n,i]=d.useState({});return d.useEffect(function(){async function c(){try{const o=await k.get("/api/users/account",{withCredentials:"same-origin"});i(o.data)}catch(o){console.log(o),i(null)}}c()},[]),e(Q.Provider,{value:i,children:e(J.Provider,{value:n,children:t.children})})}const xe=()=>d.useContext(J),M=()=>d.useContext(Q),ee=()=>l("svg",{width:"28",height:"28",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M32.7083 15.0623H31.5V15H18V21H26.4773C25.2405 24.4928 21.9172 27 18 27C13.0297 27 9 22.9702 9 18C9 13.0297 13.0297 9 18 9C20.2943 9 22.3815 9.8655 23.9708 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C9.71625 3 3 9.71625 3 18C3 26.2838 9.71625 33 18 33C26.2838 33 33 26.2838 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z",fill:"#FFC107"}),e("path",{d:"M4.72949 11.0183L9.65774 14.6325C10.9912 11.331 14.2207 9 18 9C20.2942 9 22.3815 9.8655 23.9707 11.2793L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C12.2385 3 7.24199 6.25275 4.72949 11.0183Z",fill:"#FF3D00"}),e("path",{d:"M18 33C21.8745 33 25.395 31.5172 28.0567 29.106L23.4142 25.1775C21.8576 26.3613 19.9556 27.0015 18 27C14.0985 27 10.7857 24.5122 9.53774 21.0405L4.64624 24.8092C7.12874 29.667 12.1702 33 18 33Z",fill:"#4CAF50"}),e("path",{d:"M32.7083 15.0623H31.5V15H18V21H26.4773C25.8857 22.6623 24.82 24.1149 23.412 25.1782L23.4142 25.1768L28.0568 29.1052C27.7283 29.4037 33 25.5 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z",fill:"#1976D2"})]}),ke=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"})}),Ce=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"})}),ze=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",children:e("path",{fill:"currentColor",d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"})}),Se=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"})}),Le=()=>e("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fillRule:"evenodd",clipRule:"evenodd",children:e("path",{fill:"currentColor",d:"M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"})}),Te=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"})}),De=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})}),$e=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z"})}),Ae=r(X.div)`
    position: fixed;
    left: 50%;
    top: 50%;
    max-width: 400px;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(var(--gray-6-dark), 0.2);
    overflow: hidden;
`,W={initial:{x:"-50%",y:"-50%",opacity:0,scale:.5},animate:{x:"-50%",y:"-50%",opacity:1,scale:1}};function te(t){return d.useEffect(function(){return document.body.classList.add("blur"),function(){document.body.classList.remove("blur")}},[]),q.createPortal(e(Ae,{initial:W.initial,animate:W.animate,children:t.children}),document.getElementById("modals"))}function Ee(t){switch(t.variant){case"headline1":return b`
                font-size: 3rem;
                font-weight: bold;
            `;case"headline2":return b`
                font-size: 2.1rem;
                font-weight: bold;
            `;case"headline3":return b`
                font-size: 1.2rem;
                font-weight: bold;
            `;case"small":return b`
                font-size: 0.8rem;
            `;default:return b`
                font-size: 1rem;
                font-weight: normal;
            `}}function Fe(t){switch(t.color){case"gray":return b`
                color: rgb(var(--gray-light));
            `}}var p=r.p`
    ${Ee}
    ${Fe}
    font-family: "Inter", Roboto, sans-serif;
`;const Be=r.div`
    padding: 20px;
`,Ie=r.div`
    padding: 20px;
`,V=r.button`
    appearance: none;
    border: none;
    width: 50%;
    height: 3.5rem;
    color: rgb(var(--indigo-dark));
    background: white;
    font-weight: 500;
    border-top: 1px solid rgb(var(--gray-5-light));
    transition: 0.25s;
    &:hover {
        color: rgb(var(--gray-4-dark));
        background: rgb(var(--gray-6-light));
    }
    &:active {
        background: rgb(var(--gray-5-light));
    }
    & + & {
        border-left: 1px solid rgb(var(--gray-5-light));
    }
`;function Y(t){return l(te,{children:[e(Be,{children:e(p,{as:"h1",variant:"headline3",children:t.title})}),e(Ie,{children:t.children}),e(V,{onClick:t.onClose,children:"Cancel"}),e(V,{onClick:t.onSubmit,children:"Save"})]})}const Me=r.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
`,_e=r.h1`
    font-size: 3rem;
    color: rgb(var(--red-dark));
`,He=r.button`
    appearance: none;
    border: none;
    width: 100%;
    height: 3.5rem;
    color: rgb(var(--indigo-dark));
    background: white;
    font-weight: 500;
    border-top: 1px solid rgb(var(--gray-5-light));
    transition: background 0.25s;
    &:hover {
        color: rgb(var(--gray-4-dark));
        background: rgb(var(--gray-6-light));
    }
    &:active {
        background: rgb(var(--gray-5-light));
    }
    & + & {
        border-left: 1px solid rgb(var(--gray-5-light));
    }
`;function _(t){return d.useEffect(function(){return document.body.classList.add("blur"),function(){document.body.classList.remove("blur")}},[]),l(te,{children:[l(Me,{children:[e(_e,{children:e(Se,{})}),e(p,{variant:"headline2",as:"h1",children:t.error.message})]}),e(He,{onClick:t.onClose,children:"Ok"})]})}const Pe=r.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`,Re=r.div`
    width: 48px;
    height: 48px;
    display: block;
    margin: 15px auto;
    position: relative;
    color: #fff;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    &::after,
    &::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        background-color: rgb(var(--indigo-dark));
        border-radius: 50%;
        animation: scale50 1s infinite ease-in-out;
    }
    &::before {
        top: auto;
        bottom: 0;
        background-color: #ff3d00;
        animation-delay: 0.5s;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes scale50 {
        0%,
        100% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
    }
`;function Ne(t){return e(Pe,{children:t.visible&&e(Re,{})})}var A=r.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;const Oe=r.div`
    --active: rgb(var(--indigo-dark));
    --line: rgb(var(--gray-4-light));
    --label: rgb(var(--gray-2-dark));
    display: block;
    width: 100%;
`,je=r.label`
    display: block;
    margin-bottom: 5px;
    color: var(--label);
    text-transform: capitalize;
    .invalid & {
        color: var(--active);
    }
`,We=r.input`
    appearance: none;
    border: none;
    background: none;
    width: 100%;
    height: 2.6rem;
    padding: 0 1rem;
    border: 1px solid var(--line);
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
    &:focus {
        outline: 2px solid var(--active);
    }
`;function G(t){function n(i){i.preventDefault(),t.onChange({target:{value:$(i.target.value).toISOString()}})}return l(Oe,{children:[e(je,{children:t.label}),e(We,L(C({},t),{value:$(t.value).format("YYYY-MM-DD"),onChange:n}))]})}const Ve=r.div`
    --active: rgb(var(--indigo-dark));
    --line: rgb(var(--gray-4-light));
    --label: rgb(var(--gray-2-dark));
    &.invalid {
        --active: rgb(var(--red-dark));
    }
    position: relative;
`,Ye=r.label`
    display: block;
    margin-bottom: 5px;
    color: var(--label);
    text-transform: capitalize;
    .invalid & {
        color: var(--active);
    }
`,Ge=r.input`
    appearance: none;
    background: none;
    outline: none;
    display: block;
    width: 100%;
    height: 2.6rem;
    padding: 0 5px;
    border: 1px solid var(--line);
    border-radius: 5px;
    font-size: 1rem;
    color: inherit;
    &:focus {
        outline: 2px solid var(--active);
    }
`,Ze=r.button`
    background: none;
    border: none;
    outline: none;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 2.6rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
`,Ue=r.span`
    font-style: italic;
`;function z(t){const[n,i]=d.useState(!0);function c(o){o.preventDefault(),i(a=>!a)}return l(Ve,{className:t.error?"invalid":"",children:[l(Ye,{children:[t.label,e(Ue,{children:t.error&&" !"+t.error})]}),e(Ge,L(C({},t),{type:n&&t.type==="password"?"password":"text"})),t.type==="password"&&e(Ze,{onClick:c,children:n?e(Ce,{}):e(ke,{})})]})}const Xe=r.label`
    cursor: pointer;
`,ne=r.input`
    display: none;
`,qe=r.span`
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid rgb(var(--indigo-dark));
    display: inline-block;
    border-radius: 3px;
    background: rgb(var(--indigo-dark))
        url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
        center/1250% no-repeat;
    transition: background-size 0.2s ease;
    ${ne}:checked + & {
        background-size: 60%;
        transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
    }
`;function Ke(t){return l(Xe,{children:[e(ne,{checked:t.value,onChange:t.onChange,type:"checkbox",id:t.id}),e(qe,{})]})}const re=r(X.div)`
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
    border-bottom: 1px solid rgba(var(--indigo-dark), 0.2);
`,Je=r.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,Qe=r.div`
    display: flex;
    align-items: center;
    gap: 5px;
`,Z=r.button`
    visibility: hidden;
    appearance: none;
    background: none;
    border: none;
    padding: 1rem;
    border-radius: 50%;
    font-size: 1.5rem;
    color: rgb(var(--gray-dark));
    ${re}:hover & {
        visibility: visible;
    }
    &:hover {
        outline: 1px solid rgb(var(--gray-4-light));
    }
    &:active {
        color: white;
        background: rgb(var(--indigo-dark));
    }
`,I={initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{y:100}};function et(t){return l(re,{initial:I.initial,animate:I.animate,exit:I.exit,layoutId:t.id,children:[e(Ke,{id:t.id,value:t.data.done,onChange:t.onToggle}),l(Je,{children:[e(p,{as:"h3",variant:"headline3",children:t.data.content}),e(p,{color:"gray",children:$(t.data.date).fromNow()})]}),l(Qe,{children:[e(Z,{id:t.id,onClick:t.onEdit,children:e(Te,{})}),e(Z,{id:t.id,onClick:t.onDelete,children:e(Le,{})})]})]})}function tt(){return k.get("/api/todos",{withCredentials:"same-origin"})}function nt(t){return k.delete("/api/todos?id="+t,{withCredentials:"same-origin"})}function rt(t,n){return k.patch("/api/todos?id="+t,n,{withCredentials:"same-origin"})}function ot(t){return k.post("/api/todos",t,{withCredentials:"same-origin"})}function it(t){return k.get("/api/todos/toggle?id="+t,{withCredentials:"same-origin"})}function at(){return k.get("/api/users/logout",{withCredentials:"same-origin"})}const lt=r.div`
    position: relative;
    margin: auto;
    padding: 20px 0px;
    min-height: 100vh;
    max-width: 500px;
`,dt=r.header`
    display: flex;
    align-items: center;
    gap: 10px;
`,st=r.button`
    appearance: none;
    border: none;
    background: none;
    margin-left: auto;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    &:hover {
        outline: 1px solid rgb(var(--gray-3-light));
    }
`,ct=r.button`
    appearance: none;
    border: none;
    outline: none;
    position: fixed;
    bottom: 2rem;
    right: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(50%);
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.2rem;
    border-radius: 50%;
    color: white;
    background: rgb(var(--indigo-dark));
    box-shadow: 0px 10px 30px rgba(var(--indigo-dark));
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: translateX(50%) translateY(-20px) scale(1.2);
    }
`;function ut(){const t=xe(),n=M();if(!t)return e(fe,{to:"/signin",replace:!0});const[i,c]=d.useState(!1),[o,a]=d.useState(null),[f,m]=d.useState(null),[w,v]=d.useState(!1),[h,y]=d.useState([]),[S,H]=d.useState({content:"",done:!1,date:$().add(1,"day").toISOString()});d.useEffect(function(){async function s(){try{v(!0);const g=await tt();y(g.data)}catch(g){m(g)}finally{v(!1)}}s();const u=setInterval(s,3e3);return function(){clearInterval(u)}},[]);async function ie(s){s.preventDefault();try{await at(),n(null)}catch(u){m(u)}}async function P(s){s.preventDefault();try{let u=await ot(S);if(!u.data.ok)return;c(!1),y(function(g){return[...g,u.data.record]})}catch(u){m(u)}}async function ae(s){s.preventDefault();try{if((await it(s.target.id)).data.modifiedCount!==1)return;y(function(g){const x=g.findIndex(F=>F._id===s.target.id);if(!~x)return;const T=[...g];return T[x]=L(C({},g[x]),{done:!g[x].done}),T})}catch(u){m(u)}}async function le(s){s.preventDefault();try{if(!(await nt(s.target.id)).data.ok)return;y(function(g){return g.filter(x=>x._id!==s.target.id)})}catch(u){m(u)}}async function R(s){s.preventDefault();try{if((await rt(o,S)).data.modifiedCount!==1)return;y(function(g){const x=g.findIndex(F=>F._id===o);if(!~x)return;const T=[...g];return T[x]=C({},S),T}),a(null)}catch(u){m(u)}}function D(s){return function(u){H(g=>L(C({},g),{[s]:u.target.value}))}}function de(s){a(s.target.id),H(h.find(u=>u._id===s.target.id))}return l(lt,{children:[l(dt,{children:[e(p,{variant:"headline2",children:e(De,{})}),l("div",{children:[l(p,{children:[t.first_name," ",t.last_name]}),e(p,{color:"gray",variant:"small",children:t.email})]}),e(st,{onClick:ie,children:e($e,{})})]}),e(Ne,{visible:w}),h.map(s=>e(et,{id:s._id,onToggle:ae,onDelete:le,onEdit:de,data:s},s._id)),e(ct,{onClick:()=>c(!0),children:e(ze,{})}),i&&e(Y,{title:"New Task",onClose:()=>c(!1),onSubmit:P,children:l(A,{onSubmit:P,children:[e(z,{autoFocus:!0,onChange:D("content"),value:S.content,label:"Content"}),e(G,{value:S.date,onChange:D("date"),label:"date",type:"date"})]})}),o&&e(Y,{title:"Update Task",onClose:()=>a(null),onSubmit:R,children:l(A,{onSubmit:R,children:[e(z,{autoFocus:!0,onChange:D("content"),value:S.content,label:"Content"}),e(G,{value:S.date,onChange:D("date"),label:"date",type:"date"})]})}),f&&e(_,{error:f,onClose:()=>m(null)})]})}const gt=r.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;function oe(t){return e(gt,{children:t.children})}const ht=b`
    color: white;
    background: rgb(var(--indigo-dark));
    box-shadow: 0px 0px 30px rgba(var(--indigo-dark), 0.5);
`,ft=b`
    color: rgb(var(--text-dark));
    background: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
`;b``;b``;var E=r.button`
    ${t=>t.primary?ht:ft}
    appearance: none;
    border: none;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.5s;
    &:active {
        transform: scale(1.2);
    }
`;const mt=r.div`
    width: 100%;
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
`;function pt(){const t=d.useRef(new AbortController),[n,i]=d.useState(null),[c,o]=d.useState({email:"",password:""}),a=me(),f=M();async function m(v){v.preventDefault();try{const h=await k.post("/api/users/login",c,{withCredentials:"same-origin",signal:t.current.signal});f(h.data),a("/")}catch(h){i(h)}}function w(v){return function(h){o(y=>L(C({},y),{[v]:h.target.value}))}}return l(mt,{children:[n&&e(_,{error:n,onClose:()=>i(null)}),l(A,{onSubmit:m,children:[e(p,{variant:"headline1",as:"h1",children:"Sign in"}),e(z,{autoFocus:!0,type:"text",label:"Email",value:c.email,onChange:w("email")}),e(z,{type:"password",label:"Password",value:c.password,onChange:w("password")}),l(p,{color:"gray",children:["Don't have an account ",e(K,{to:"/signup",children:"Sign up"})]}),l(oe,{children:[e(E,{primary:!0,onClick:m,children:"Continue"}),l(E,{type:"submit",children:[e(ee,{})," Continue with Google"]})]})]})]})}const vt={first_name:"",last_name:"",email:"",password:""},U={email:[{func:j.isEmail,msg:"Invalid email"}],password:[{func:j.isStrongPassword,msg:"Weak Password"}]};function bt(){const[t,n]=d.useState(vt),[i,c]=d.useState({});return d.useEffect(function(){const o={};for(const a of Object.keys(U))if(!!t[a])for(const f of U[a])f.func(t[a])||(o[a]=f.msg);c(o)},[t]),[t,n,i]}const wt=r.div`
    width: 100%;
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
`;function yt(){const t=d.useRef(new AbortController),[n,i]=d.useState(null),[c,o,a]=bt(),f=M();d.useEffect(function(){return function(){t.current.abort()}},[]);async function m(v){v.preventDefault();try{const h=await k.post("/api/users/register",c,{withCredentials:"same-origin",signal:t.current.signal});f(h.data)}catch(h){i(h)}}function w(v){return function(h){o(y=>L(C({},y),{[v]:h.target.value}))}}return l(wt,{children:[n&&e(_,{error:n,onClose:()=>i(null)}),l(A,{onSubmit:m,children:[e(p,{variant:"headline1",as:"h1",children:"Sign up"}),e(z,{type:"text",label:"First name",onChange:w("first_name"),value:c.first_name,error:a.first_name}),e(z,{type:"text",label:"Last name",onChange:w("last_name"),value:c.last_name,error:a.last_name}),e(z,{type:"text",label:"Email",onChange:w("email"),value:c.email,error:a.email}),e(z,{type:"password",label:"Password",onChange:w("password"),value:c.password,error:a.password}),l(p,{color:"gray",children:["Already have an account ",e(K,{to:"/signin",children:"Sign in"})]}),l(oe,{children:[e(E,{primary:!0,onClick:m,children:"Continue"}),l(E,{children:[e(ee,{}),"Continue with Google"]})]})]})]})}const xt=pe`
    :root {
        --red-light: 255,59,48;
        --red-dark: 255, 69, 58;
        --orange-light: 255, 149, 0;
        --orange-dark: 255, 159, 10;
        --yellow-light: 255, 204, 0;
        --yellow-dark: 255, 214, 10;
        --green-light: 52, 199, 89;
        --green-dark: 48, 209, 88;
        --mint-light: 0, 199, 190;
        --mint-dark: 102, 212, 207;
        --teal-light: 48, 176, 199;
        --teal-dark: 64, 200, 224;
        --cyan-light: 50, 173, 230;
        --cyan-dark: 100, 210, 255;
        --blue-light: 0, 122, 255;
        --blue-dark: 10, 132, 255;
        --indigo-light: 88, 86, 214;
        --indigo-dark: 94, 92, 230;
        --purple-light: 175, 82, 222;    
        --purple-dark: 191, 90, 242;
        --pink-light: 255, 45, 85;
        --pink-dark: 255, 55, 95;
        --brown-light: 162, 132, 94;        
        --brown-dark: 172, 142, 104;
        --gray-light: 142, 142, 147;
        --gray-dark: 142, 142, 147;
        --gray-2-light: 174, 174, 178;
        --gray-2-dark: 99, 99, 102;
        --gray-3-light: 199, 199, 204;
        --gray-3-dark: 72, 72, 74;
        --gray-4-light: 209, 209, 214;
        --gray-4-dark: 58, 58, 60;
        --gray-5-light: 229, 229, 234;
        --gray-5-dark: 44, 44, 46;
        --gray-6-light: 242, 242, 247;
        --gray-6-dark: 28, 28, 30;
    }
    *::before, *, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }
    svg {
        display: block;
        pointer-events: none;
    }
    a {
        color: rgb(var(--indigo-dark));
    }
    button {
        font-size: 1rem;
        font-weight: normal;
        font-family: inherit;
        cursor: pointer;
    }
    input {
        font-size: 1rem;
        font-weight: normal;
        font-family: inherit;
    }
    body {
        font-size: 16px;
        color: rgb(var(--gray-6-dark));
    }
    body.blur #app {
        filter: blur(5px);
        pointer-events: none;
    }
    body.blur #app::after {
        content: "";
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.05);
    }
`;q.render(e(d.StrictMode,{children:e(ve,{children:l(ye,{children:[e(xt,{}),l(be,{children:[e(B,{path:"/",element:e(ut,{})}),e(B,{path:"/signup",element:e(yt,{})}),e(B,{path:"/signin",element:e(pt,{})})]})]})})}),document.getElementById("app"));
