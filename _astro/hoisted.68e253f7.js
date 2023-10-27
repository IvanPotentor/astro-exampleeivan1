const A=document.querySelectorAll(".modal");let h,u;const M=e=>[...e.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(t=>!t.hasAttribute("disabled")),S=(e,t)=>{const o=M(t),n=o[0],r=o[o.length-1];document.activeElement===r&&e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),n.focus()),document.activeElement===n&&e.key==="Tab"&&e.shiftKey&&(e.preventDefault(),r.focus())},x=e=>{const t=e.querySelector("h3"),o=e.querySelector(".modal__inner");e.showModal(),t.focus(),h=new AbortController,u=new AbortController,document.addEventListener("keydown",n=>S(n,e),{signal:h.signal}),e.addEventListener("keydown",n=>{n.key==="Escape"&&f()},{signal:u.signal}),e.addEventListener("click",()=>{f()},{signal:u.signal}),o.addEventListener("click",n=>{n.stopPropagation()},{signal:u.signal})},f=()=>{A.forEach(e=>{const t=e.getAttribute("aria-labelledby");document.querySelector(`#${t}`).focus({preventScroll:!0}),e.close(),h?.abort(),u?.abort()})};A.forEach(e=>{const t=e.getAttribute("aria-labelledby"),o=e.querySelector(".modal__close button"),n=document.querySelector(`#${t}`);if(!n)throw new Error(`Trigger element not found. 

      Did you forget to add a trigger element with id: "${t}"?`);n.addEventListener("click",()=>x(e)),o.addEventListener("click",f)});window.closeModal=f;const a=document.querySelector("#main-navigation"),g=a.querySelector("ul"),p=[...document.querySelectorAll(".has-dropdown button")],q=()=>{const e=a.querySelectorAll("nav > ul"),t=window.location.pathname;e.forEach(o=>{[...o.querySelectorAll('a:not([rel*="external"])')].forEach(r=>{(t.includes(r.pathname.replaceAll("/",""))&&r.textContent!=="Home"||r.textContent==="Home"&&t==="/")&&(r.classList.add("is-active"),r.setAttribute("aria-current","page"))})})},E=()=>{const e=a.getBoundingClientRect().width,t=document.querySelector(".desktop-menu").getBoundingClientRect().width,o=300,n=Math.round(t)+o;n>=e?(a.classList.remove("is-desktop"),a.classList.add("is-mobile")):n<=e&&(a.classList.add("is-desktop"),a.classList.remove("is-mobile"))},D=e=>e.getBoundingClientRect().right>(window.innerWidth||document.documentElement.clientWidth),L=e=>{const t=e.parentNode.querySelector("ul");e.classList.add("show"),e.setAttribute("aria-expanded","true"),D(t)&&(t.style.left="auto")},w=e=>{e.classList.remove("show"),e.setAttribute("aria-expanded","false")},b=()=>{for(let e=0;e<p.length;e++)w(p[e])},C=e=>{e.target.getAttribute("aria-expanded")==="false"?(b(),L(e.target)):w(e.target)};g&&g.addEventListener("keydown",e=>{const t=e.target,o=t.closest("li"),n=[...g.querySelectorAll(".menu-item")],r=t.closest(".has-dropdown button"),d=t.closest(".has-dropdown li"),y=n.findIndex(c=>c===o),l=e.key;let s;if(l==="ArrowRight"&&(n.indexOf(o)===n.length-1?s=n[0]:s=n[y+1]),l==="ArrowLeft"&&(n.indexOf(o)===0?s=n[n.length-1]:s=n[y-1]),l==="Escape"&&(s=n[0]),r){const c=r.nextElementSibling.querySelector("li");l==="ArrowDown"&&(e.preventDefault(),L(r),s=c),l==="Escape"&&w(r)}if(d){const c=d.parentNode,i=[...c.querySelectorAll("li")],v=i.findIndex(k=>k===d);l==="ArrowDown"&&(e.preventDefault(),i.indexOf(d)===i.length-1?s=i[0]:s=i[v+1]),l==="ArrowUp"&&(e.preventDefault(),i.indexOf(d)===0?s=i[i.length-1]:s=i[v-1]),l==="Escape"&&(s=c.previousElementSibling.parentNode,b())}s&&s.querySelector("a, button, input").focus()});p&&p.forEach(e=>{e.addEventListener("click",C)});q();E();window.addEventListener("resize",E);window.addEventListener("click",e=>{const t=e.target;!t.hasAttribute("aria-haspopup")&&!t.classList.contains("submenu-item")&&b()});const m=document.querySelector(".responsive-toggle"),I=e=>{e.setAttribute("aria-expanded",!0),e.setAttribute("aria-label","Close menu navigation"),e.innerHTML='<svg width="20" height="20" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg"><path d="M10 10 2 2m8 8 8 8m-8-8 8-8m-8 8-8 8" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>'},T=e=>{e.setAttribute("aria-expanded",!1),e.setAttribute("aria-label","Open menu navigation"),e.innerHTML='<svg width="26" height="21" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.667h24m-24 8h24m-24 8h24" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round"/></svg>'};m.addEventListener("click",e=>{const t=document.querySelector(".mobile-menu");t.classList.toggle("show"),t.classList.contains("show")?I(m):T(m)});