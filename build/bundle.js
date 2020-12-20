var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function s(t,e,n,o,r,c,i){const s=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(s){const r=u(e,n,o,i);t.p(r,s)}}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function m(){return $(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function x(t){g=t}const y=[],v=[],b=[],w=[],_=Promise.resolve();let k=!1;function E(t){b.push(t)}let q=!1;const C=new Set;function j(){if(!q){q=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];x(e),M(e.$$)}for(x(null),y.length=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while(y.length);for(;w.length;)w.pop()();k=!1,q=!1,C.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const A=new Set;function B(t,e){t&&t.i&&(A.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function L(t){t&&t.c()}function N(t,n,c){const{fragment:i,on_mount:u,on_destroy:s,after_update:l}=t.$$;i&&i.m(n,c),E((()=>{const n=u.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(E)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(e,r,c,i,u,s,l=[-1]){const a=g;x(e);const f=r.props||{},$=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let m=!1;if($.ctx=c?c(e,f,((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),m&&T(e,t)),n})):[],$.update(),m=!0,o($.before_update),$.fragment=!!i&&i($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(d)}else $.fragment&&$.fragment.c();r.intro&&B(e.$$.fragment),N(e,r.target,r.anchor),j()}x(a)}class H{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var P=[{id:"1",author:"Цицерон",text:"Недостаточно овладеть премудростью, нужно также уметь пользоваться ею"},{id:"2",author:"Леонардо да Винчи",text:"Где умирает надежда, там возникает пустота"},{id:"3",author:"Сократ",text:"Есть только одно благо — знание, и только одно зло — невежество"},{id:"4",author:"Фридрих Ницше",text:"Познавший самого себя — собственный палач"},{id:"5",author:"Иммануил Кант",text:"Весёлое выражение лица постепенно отражается и на внутреннем мире"},{id:"6",author:"Мишель де Монтень",text:"В начале всяческой философии лежит удивление"}];function z(e){let n;return{c(){n=f("blockquote"),n.innerHTML="<i>Нажмите кнопку для генерации цитаты</i>",p(n,"class","container__quote svelte-17kec1c")},m(t,e){a(t,n,e)},p:t,d(t){t&&d(n)}}}function D(t){let e,n,o,r,c,i,u,s,g,x,y,v=t[0].text+"",b=t[0].author+"";return{c(){e=f("blockquote"),n=f("i"),o=$(v),r=m(),c=f("br"),i=m(),u=f("br"),s=m(),g=f("i"),x=$("© "),y=$(b),p(e,"class","container__quote svelte-17kec1c")},m(t,d){a(t,e,d),l(e,n),l(n,o),l(e,r),l(e,c),l(e,i),l(e,u),l(e,s),l(e,g),l(g,x),l(g,y)},p(t,e){1&e&&v!==(v=t[0].text+"")&&h(o,v),1&e&&b!==(b=t[0].author+"")&&h(y,b)},d(t){t&&d(e)}}}function F(e){let n,o,r,c,i;function u(t,e){return t[0].text&&t[0].author?D:z}let s=u(e),$=s(e);return{c(){n=f("div"),$.c(),o=m(),r=f("button"),r.textContent="Случайная цитата",p(r,"class","container__button"),p(n,"class","container")},m(t,u){var s,d,f,m;a(t,n,u),$.m(n,null),l(n,o),l(n,r),c||(s=r,d="click",f=e[1],s.addEventListener(d,f,m),i=()=>s.removeEventListener(d,f,m),c=!0)},p(t,[e]){s===(s=u(t))&&$?$.p(t,e):($.d(1),$=s(t),$&&($.c(),$.m(n,o)))},i:t,o:t,d(t){t&&d(n),$.d(),c=!1,i()}}}function G(t,e,n){let o={id:"",author:"",text:""};return[o,()=>{n(0,o=P[Math.floor(Math.random()*P.length)])}]}class J extends H{constructor(t){var e;super(),document.getElementById("svelte-17kec1c-style")||((e=f("style")).id="svelte-17kec1c-style",e.textContent=".container__quote.svelte-17kec1c{margin-bottom:50px}",l(document.head,e)),S(this,t,G,F,c,{})}}function K(t){let e,n;const o=t[1].default,r=i(o,t,t[0],null);return{c(){e=f("div"),r&&r.c(),p(e,"class","base-layout svelte-2eflt0")},m(t,o){a(t,e,o),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&1&e&&s(r,o,t,t[0],e,null,null)},i(t){n||(B(r,t),n=!0)},o(t){I(r,t),n=!1},d(t){t&&d(e),r&&r.d(t)}}}function Q(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class R extends H{constructor(t){var e;super(),document.getElementById("svelte-2eflt0-style")||((e=f("style")).id="svelte-2eflt0-style",e.textContent=".base-layout.svelte-2eflt0{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}",l(document.head,e)),S(this,t,Q,K,c,{})}}function U(t){let e,n;const o=t[1].default,r=i(o,t,t[0],null);return{c(){e=f("div"),r&&r.c(),p(e,"class","container svelte-1gm6gwd")},m(t,o){a(t,e,o),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&1&e&&s(r,o,t,t[0],e,null,null)},i(t){n||(B(r,t),n=!0)},o(t){I(r,t),n=!1},d(t){t&&d(e),r&&r.d(t)}}}function V(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class W extends H{constructor(t){var e;super(),document.getElementById("svelte-1gm6gwd-style")||((e=f("style")).id="svelte-1gm6gwd-style",e.textContent=".container.svelte-1gm6gwd{box-shadow:0 0 10px rgba(0, 0, 0, 0.4);height:100%;width:50%;padding:30px 20px;margin-top:50px}@media screen and (max-width: 768px){.container.svelte-1gm6gwd{width:85%}}@media screen and (min-width: 768px) and (max-width: 1024px){.container.svelte-1gm6gwd{width:90%}}@media screen and (min-width: 1024px) and (max-width: 1240px){.container.svelte-1gm6gwd{width:90%}}",l(document.head,e)),S(this,t,V,U,c,{})}}function X(t){let e,n;return e=new J({}),{c(){L(e.$$.fragment)},m(t,o){N(e,t,o),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Y(t){let e,n;return e=new W({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(t,o){N(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Z(t){let e,n;return e=new R({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(t,o){N(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}return new class extends H{constructor(t){super(),S(this,t,null,Z,c,{})}}({target:document.body})}();
