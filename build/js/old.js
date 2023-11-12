(()=>{"use strict";var e,t,o,n,r,s,a,c={1453:(e,t,o)=>{function n(e,t,o){switch(t){case"scale":return e.style.transform="scale("+o+")",void(e.style.opacity=o);case"left":return void(e.style.left=o+"px")}}o.d(t,{j:()=>r});const r=async(e,t,o,r,s,a)=>{await function(e,t,o,r,s,a){let c=s-r,l=a/(a/1e3*60),i=0,d=0,u=s>=r;return new Promise((p=>{let y=setInterval((function(){if(d+=l,i=function(e,t,o,n,r){let s=o,a=t,c=n,l=r;switch(e){case"linear":return c*(s/l)+a;case"easeInQuad":return c*(s/=l)*s+a;case"easeOutQuad":return-c*(s/=l)*(s-2)+a;case"easeInOutQuad":return(s/=l/2)<1?c/2*s*s+a:-c/2*(--s*(s-2)-1)+a;case"easeInCubic":return c*(s/=l)*s*s+a;case"easeOutCubic":return c*((s=s/l-1)*s*s+1)+a;case"easeInOutCubic":return(s/=l/2)<1?c/2*s*s*s+a:c/2*((s-=2)*s*s+2)+a;case"easeInQuart":return c*(s/=l)*s*s*s+a;case"easeOutQuart":return-c*((s=s/l-1)*s*s*s-1)+a;case"easeInOutQuart":return(s/=l/2)<1?c/2*s*s*s*s+a:-c/2*((s-=2)*s*s*s-2)+a;case"easeInQuint":return c*(s/=l)*s*s*s*s+a;case"easeOutQuint":return c*((s=s/l-1)*s*s*s*s+1)+a;case"easeInOutQuint":return(s/=l/2)<1?c/2*s*s*s*s*s+a:c/2*((s-=2)*s*s*s*s+2)+a;case"easeInSine":return-c*Math.cos(s/l*(Math.PI/2))+c+a;case"easeOutSine":return c*Math.sin(s/l*(Math.PI/2))+a;case"easeInOutSine":return-c/2*(Math.cos(Math.PI*s/l)-1)+a;case"easeInExpo":return 0===s?a:c*Math.pow(2,10*(s/l-1))+a;case"easeOutExpo":return s===l?a+c:c*(1-Math.pow(2,-10*s/l))+a;case"easeInOutExpo":return 0===s?a:s===l?a+c:(s/=l/2)<1?c/2*Math.pow(2,10*(s-1))+a:c/2*(2-Math.pow(2,-10*--s))+a;case"easeInCirc":return-c*(Math.sqrt(1-(s/=l)*s)-1)+a;case"easeOutCirc":return c*Math.sqrt(1-(s=s/l-1)*s)+a;case"easeInOutCirc":return(s/=l/2)<1?-c/2*(Math.sqrt(1-s*s)-1)+a:c/2*(Math.sqrt(1-(s-=2)*s)+1)+a;case"easeInBack":return a=1.70158,c*(s/=l)*s*((a+1)*s-a)+a;case"easeOutBack":return a=1.70158,c*((s=s/l-1)*s*((a+1)*s+a)+1)+a;case"easeInOutBack":return a=1.70158,(s/=l/2)<1?c/2*(s*s*((1+(a*=1.525))*s-a))+a:c/2*((s-=2)*s*((1+(a*=1.525))*s+a)+2)+a;case"easeInBounce":return c-easeOutBounce(l-s,0,c,l)+a;case"easeOutBounce":return(s/=l)<1/2.75?c*(7.5625*s*s)+a:s<2/2.75?c*(7.5625*(s-=1.5/2.75)*s+.75)+a:s<2.5/2.75?c*(7.5625*(s-=2.25/2.75)*s+.9375)+a:c*(7.5625*(s-=2.625/2.75)*s+.984375)+a;case"easeInOutBounce":return s<l/2?.5*easeInBounce(2*s,0,c,l)+a:.5*easeOutBounce(2*s-l,0,c,l)+.5*c+a}}(o,r,d,c,a).toFixed(2),u&&i>=s||!u&&i<=s)return clearInterval(y),n(e,t,s),p(t+" done");n(e,t,i)}),1e3/60)}))}(e,t,o,r,s,a)}},4294:(e,t,o)=>{o.d(t,{p:()=>c});const n=document.querySelectorAll(".dropdown-hover"),r=[];n.forEach((e=>{r.push(e.parentElement)}));const s=[...new Set(r)];let a=!1;const c={initDropdowns:function(){document.addEventListener("click",c.pageClickHandler),[...document.querySelectorAll(".dropdown-hover")].forEach((e=>{c.registerHover(e)})),s.forEach((e=>{e.addEventListener("click",c.menuClickHandler),e.addEventListener("mousedown",(()=>{a=!0})),e.addEventListener("mouseup",(()=>{a=!1}))}))},initialise:()=>{let e=setInterval((function(){"complete"===document.readyState&&(clearInterval(e),c.initDropdowns())}),100)},isInLeftHalf:function(e){const t=e.getBoundingClientRect(),o=window.innerWidth;return t.left<=o/2},scrollIntoView:function(e){const t=e.getBoundingClientRect(),o=document.body.getBoundingClientRect(),n=window.innerHeight;if(!(t.bottom>n))return!1;{const e=t.bottom-n;window.scrollBy(0,e),t.bottom>o.bottom&&(document.body.style.height=document.documentElement.scrollHeight+e+"px")}},pageClickHandler:function(e){let t=!1;if(s.forEach((o=>{1==!!o.contains(e.target)&&(t=!0)})),t)return;const o=[];document.querySelectorAll(".dropdown-hover").forEach((e=>{e.contains(e.querySelector(".dropdown_toggle-active"))&&o.push(e)})),[...o].forEach((e=>{1==!!e.closest('[data-hover-lock="true"]')&&e.closest(".dropdown-hover").setAttribute("data-hover-lock","false"),c.close(e.querySelector(".dropdown_toggle"))}))},hoverHandler:function(e){const t=e.target.closest(".dropdown-hover").getElementsByClassName("dropdown_toggle")[0];if("mouseenter"===e.type)c.open(t);else if("mouseleave"===e.type&&(a=!1,0==!!t.closest('[data-hover-lock="true"]')&&t.classList.contains("dropdown_toggle-active"))){let e;const o=t=>{e=t.target};document.addEventListener("mouseover",o,!1),setTimeout((()=>{t.parentElement.contains(e)||c.close(t),document.removeEventListener("mouseover",o,!1)}),10)}},focusHandler:function(e){if(a)return;const t=e.target.closest(".dropdown").getElementsByClassName("dropdown_toggle")[0];"focusin"===e.type?c.open(t):"focusout"===e.type&&0==!!t.closest('[data-hover-lock="true"]')&&t.classList.contains("dropdown_toggle-active")&&(0==!!e.target.closest(".dropdown-hover").contains(e.relatedTarget)?c.close(e.target.closest(".dropdown-hover").querySelector(".dropdown_toggle")):c.close(t))},registerHover:function(e){0==!!e.closest(".fullscreenMenu")&&(e.addEventListener("mouseenter",c.hoverHandler),e.addEventListener("mouseleave",c.hoverHandler),e.setAttribute("data-hover-listener","true")),e.addEventListener("focusin",c.focusHandler),e.addEventListener("focusout",c.focusHandler)},deregisterHover:function(e){e.removeEventListener("mouseenter",c.hoverHandler),e.removeEventListener("mouseleave",c.hoverHandler),e.setAttribute("data-hover-listener","false")},menuClickHandler:function(e){if(1==!!e.target.closest(".dropdown_toggle")||1==!!e.target.closest(".dropdown_primary")){const t=e.target.closest(".dropdown").querySelector(".dropdown_toggle");t.classList.contains("dropdown_toggle-active")&&0==!!t.closest('[data-hover-lock="true"]')?t.closest(".dropdown-hover").setAttribute("data-hover-lock","true"):t.classList.contains("dropdown_toggle-active")&&1==!!t.closest('[data-hover-lock="true"]')?(t.parentElement.classList.contains("dropdown-hover")&&t.closest(".dropdown-hover").setAttribute("data-hover-lock","false"),c.close(t)):(t.closest(".dropdown-hover").setAttribute("data-hover-lock","true"),c.open(t))}else 0==!!e.target.closest('[data-hover-lock="true"]')&&1==!!e.target.closest(".dropdown-hover")&&e.target.closest(".dropdown-hover").setAttribute("data-hover-lock","true")},open:function(e){const t=e.parentElement;t.classList.contains("dropdown-hover")&&(c.isInLeftHalf(t)?(t.classList.add("dropdown-swingRight"),t.classList.remove("dropdown-swingLeft")):(t.classList.add("dropdown-swingLeft"),t.classList.remove("dropdown-swingRight"))),[...document.querySelectorAll(".dropdown_toggle-active")].forEach((t=>{t.parentElement.contains(e)||c.close(t)}));const o=[];if([...document.querySelectorAll(".dropdown-hover:not( .fullscreenMenu .dropdown )")].forEach((e=>{e.contains(e.querySelector(".dropdown_toggle-active"))&&o.push(e)})),[...o].forEach((e=>{e.contains(t)||(e.setAttribute("data-hover-lock","false"),c.close(e.querySelector(".dropdown_toggle")))})),0==!!e.parentElement.classList.contains("dropdown-hover")&&0==!!e.classList.contains("dropdown_toggle-active")){const e=[],o=[...t.closest(".dropdown-hover").querySelectorAll(".dropdown")];o.unshift(t.closest(".dropdown-hover")),o.pop(),o.forEach((o=>{if(o.contains(t)){e.push(o);const t=o.querySelector(".dropdown_toggle");t.classList.add("dropdown_toggle-active"),t.setAttribute("aria-expanded",!0),t.setAttribute("aria-pressed",!0)}}))}e.classList.add("dropdown_toggle-active"),e.setAttribute("aria-expanded",!0),e.setAttribute("aria-pressed",!0);let n=t.lastElementChild;c.scrollIntoView(n)},close:function(e){let t=e.parentElement.querySelectorAll(".dropdown_toggle-active");if(t.length>1)for(let e=t.length-1;e>=0;e--)t[e].classList.remove("dropdown_toggle-active"),t[e].setAttribute("aria-expanded",!1),t[e].setAttribute("aria-pressed",!1);else e.classList.remove("dropdown_toggle-active"),e.setAttribute("aria-expanded",!1),e.setAttribute("aria-pressed",!1)}}},2807:(e,t,o)=>{o.d(t,{K:()=>n});const n=()=>{gsap.registerPlugin(ScrollTrigger);const e=".heroPunch",t=e+" .scrollTriggerParent",o=e+" .landing_content",n=e+" .fist_container",r=e+" .sign_pinSignTop",s=e+" .sign",a=e+" .svgMe_container",c=e+" .star-1",l=e+" .star-2",i=e+" .desert_shadow",d=e+" .desert_sun",u=e+" .landing_backdrop",p=[];if(!document.querySelector(i))return;const y=e=>e/window.innerWidth*100+"vw",m=e=>{const t=document.querySelector(e).getBoundingClientRect(),o=t.right-t.left,n=2*t.left;return document.body.clientWidth-o-n},f=()=>{p.punch=(()=>{const e=gsap.timeline().addLabel("fadeIn").set(o,{y:"-100vh",opacity:0}).to(o,{y:0,opacity:1,duration:1,ease:"power4.out"},">").addLabel("punch").set(n,{visibility:"visible"}).to(n,{top:0,duration:.3,ease:"elastic.out(1,0.8)"}).to(n,{top:"110vh",duration:1.8,ease:"power3.out"}).set(n,{visibility:"hidden"}).set(r,{visibility:"hidden"},"<-2.02").set(s,{position:"absolute",margin:0},"<").to(s,{xPercent:-13,yPercent:-20,scale:.1,duration:1.5,ease:"power3.out"},"<").to(s,{rotateX:1080,rotateY:720,rotateZ:360,duration:1.5,ease:"none"},"<").to(a,{xPercent:10,yPercent:-40,scale:.1,duration:1.5,ease:"power3.out"},"<").to(a,{rotateZ:1440,duration:1.5,ease:"none"},"<").to(s,{xPercent:-15,yPercent:10,duration:1,ease:"power2.in"},">-0.6").to(s,{rotateX:1080,rotateY:720,scale:.001,rotateZ:360,duration:1,ease:"none"},"<").to(a,{xPercent:10,yPercent:-20,duration:1,ease:"power2.in"},"<").to(a,{rotateZ:1800,scale:.001,duration:1,ease:"none"},"<").set([c,l],{scale:0,visibility:"visible"}).to([c,l],{scale:1e3,rotate:180,duration:.2,ease:"none"},">").to([c,l],{scale:0,rotate:360,duration:.2,ease:"none"},">").set([c,l],{visibility:"hidden",rotate:0}).set(o,{visibility:"hidden"});return e.pause("punch"),e})(),ScrollTrigger.create({trigger:t,start:"top top-=100px",end:"bottom top",onEnter:()=>p.punch.play("punch"),onLeave:()=>p.punch.pause("fadeIn"),onLeaveBack:()=>p.punch.tweenFromTo("fadeIn","punch")}),p.sunMove=gsap.timeline().set(i,{transformOrigin:"top center",skewX:55,scaleY:.4}).to(d,{keyframes:{x:[0,y(m(d)/2),y(m(d))],easeEach:"none"}}).to(d,{keyframes:{"0%":{marginTop:"3vw"},"50%":{marginTop:"-3vw",ease:"power2.out"},"100%":{marginTop:"3vw",ease:"power2.in"}}},"<").to(i,{keyframes:{skewX:[55,0,-55],scaleY:[.4,.2,.4],easeEach:"none"}},"<").fromTo(u,{background:"radial-gradient( at 9% 9%, #fffb 0%, #fff0 30% ), linear-gradient( hsl(207, 53%, 60%) 0%, hsl(207, 53%, 88%) 20%, hsl(61, 75%, 60%) 55%, hsl(30, 75%, 60%) 60%, #fff 61% )"},{ease:"linear",background:"radial-gradient( at 91% 9%, #fffb 0%, #fff0 30% ), linear-gradient( hsl(207, 53%, 50%) 0%, hsl(0, 76%, 88%) 25%, hsl(61, 75%, 60%) 55%, hsl(30, 76%, 50%) 70%, #fff 71% )"},"<"),ScrollTrigger.create({trigger:t,start:"top top-=500px",end:"bottom bottom+=500px",scrub:1,animation:p.sunMove})};let v;const g=()=>{Object.entries(p).forEach((([,e])=>e.revert())),f()},h=setInterval((()=>{"complete"===document.readyState&&(clearInterval(h),f(),window.onresize=()=>((e,t,o=[])=>{clearTimeout(v),v=setTimeout((()=>e(...o)),t)})(g,150))}),100)}},6650:(e,t,o)=>{o.d(t,{K:()=>n});const n=()=>{let e=document.querySelector("body"),t=document.querySelector("header.pageGrid"),o=document.querySelector(".menuToggle"),n=!1;if(null===o)return;const r=setInterval((()=>{"complete"===document.readyState&&(clearInterval(r),o.addEventListener("click",s))}),100),s=()=>{n||(n=!0,e.classList.contains("menu_active")?c():a())},a=async()=>{t.setAttribute("hidden",!1),e.classList.add("menu_active"),await l(t,"transform","translate( 0, 0 )"),window.addEventListener("scroll",c,{once:!0}),n=!1},c=async()=>{t.setAttribute("hidden",!0),e.classList.remove("menu_active"),await l(t,"transform","translate( 0, -100% )"),n=!1},l=(e,o,n)=>{new Promise((r=>{try{e.style[o]=n;const s=o=>{o.target===e&&(t.removeEventListener("transitionend",s),r("Transition complete."))};t.addEventListener("transitionend",s)}catch(e){console.error(e.name+": "+e.message),reject(e)}}))}}},1747:(e,t,o)=>{o.d(t,{s:()=>n});const n=()=>{if(!document.querySelector(".thumbNav"))return;let e,t=!0,o=!0,n=window.pageYOffset;window.onscroll=function(){e=window.pageYOffset,t&&(t=!1,setTimeout((function(){n>e&&!1===o?(document.querySelector(".thumbNav-jshide").style.transform="translateY(0rem)",o=!0):n<e&&!0===o&&(document.querySelector(".thumbNav-jshide").style.transform="translateY(5rem)",document.querySelector(".thumbNav_checkbox").checked=!1,o=!1),n=e,t=!0}),500))}}},8479:(e,t,o)=>{o.d(t,{y:()=>r});var n=o(1453);const r=()=>{let e,t,o,r,s=!1,a=!1,c=!0;async function l(l){const p=l.currentTarget.id;e=document.querySelector("."+p),t=e.querySelector(".modal_dialog"),o=e.querySelector(".modal_control-close"),o.onclick=()=>{d()},window.onclick=function(e){t===!e.target||t.contains(e.target)||d()},await Promise.all([i(),u()]),async function(){a||s||(a=!0,s=!0,function(){if(null!==document.getElementById("js_psuedoScrollBar"))document.getElementById("js_psuedoScrollBar").style.display="block";else{let e=document.createElement("div");e.setAttribute("id","js_psuedoScrollBar"),e.style.position="fixed",e.style.right="0",e.style.top="0",e.style.width=r,e.style.height="100vh",e.style.background="#333",e.style.zIndex="9",document.body.appendChild(e)}document.querySelector("body").style.overflow="hidden",document.querySelector("html").style.paddingRight=r}(),function(){let e,t=o=>{null!==e&&window.clearTimeout(e),e=window.setTimeout((function(){a?i():window.removeEventListener("resize",t)}),20)};window.addEventListener("resize",t)}(),c?(t.style.left="-768px",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1",await(0,n.j)(t,"left","easeInOutCirc",-768,0,800),s=!1):(t.style.left="0",t.style.transform="scale(0)",t.style.opacity="0",e.style.display="flex",e.style.opacity="0",function(e){let t=4,o=setInterval((function(){t>=100&&clearInterval(o),e.style.opacity=t/100,t+=2}),16)}(e),await(0,n.j)(t,"scale","easeInOutCirc",0,1,800),s=!1))}()}async function i(){let o=parseInt(document.querySelector("html").getBoundingClientRect().width,10);c=o<=768,c&&a&&!s?(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1"):!c||a||s?c||!a||s?c||a||s||(t.style.left="0",t.style.transform="scale(0)",t.style.opacity="0",e.style.display="none",e.style.opacity="0"):(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="flex",e.style.opacity="1"):(t.style.left="-768px",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1")}async function d(){a&&!s&&(a=!1,s=!0,null!==document.getElementById("js_psuedoScrollBar")&&(document.getElementById("js_psuedoScrollBar").style.display="none",document.querySelector("body").style.overflow="visible",document.querySelector("html").style.paddingRight="0"),c?(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="contents",e.style.opacity="1",await(0,n.j)(t,"left","easeInOutCirc",0,-768,800),s=!1):(t.style.left="0",t.style.transform="scale(1)",t.style.opacity="1",e.style.display="flex",e.style.opacity="1",function(e){let t=100,o=setInterval((function(){t<=0&&clearInterval(o),e.style.opacity=t/100,t-=2}),16)}(e),await(0,n.j)(t,"scale","easeInOutCirc",1,0,800),e.style.display="none",s=!1))}async function u(){const e=window.innerWidth,t=document.querySelector("html").getBoundingClientRect().width;return r=parseInt(e-t,10)+"px",r}let p=setInterval((function(){"complete"===document.readyState&&(clearInterval(p),document.querySelectorAll(".modal_control-open").forEach((e=>{e.addEventListener("click",l)})))}),100)}},6885:(e,t,o)=>{o.d(t,{y:()=>n});const n=()=>{let e,t,o,n,r,s,a=document.querySelector("body");function c(){e=window.innerWidth,t=window.innerHeight,n=e>=t?"landscape":"portrait",n!==o&&(a.classList.remove(o),a.classList.add(n),o=n),s=e<="768"?"mobile":e<="1120"?"tablet":e<="1440"?"laptop":e<="1920"?"desktop":"xl",s!==r&&(a.classList.remove(r),a.classList.add(s),r=s)}function l(){const e=window.innerWidth,t=document.querySelector("html").getBoundingClientRect().width,o=parseInt(e-t,10)+"px";document.documentElement.style.setProperty("--scrollbar",o)}new ResizeObserver((e=>l())).observe(document.body);let i=setInterval((function(){"complete"===document.readyState&&(clearInterval(i),c())}),10);var d;window.onresize=function(){d&&clearTimeout(d),d=setTimeout((function(){c(),l()}),10)}}},6810:(e,t,o)=>{o.d(t,{s:()=>n});const n=()=>{const e=document.querySelectorAll(".usp_state"),t=document.querySelectorAll(".usp_graphicWrap");let o=setInterval((()=>{"complete"===document.readyState&&(clearInterval(o),[...t].forEach((t=>{t.addEventListener("click",(function(){for(let t=0;t<e.length;t++)e[t].checked=!1;e[0].parentElement.scrollIntoView()}))})))}),100)}}},l={};function i(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return c[e](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=i(4294),t=i(6650),o=i(1747),n=i(8479),r=i(2807),s=i(6885),a=i(6810),e.p.initialise(),(0,t.K)(),(0,o.s)(),(0,n.y)(),(0,s.y)(),(0,a.s)(),(0,r.K)()})();
//# sourceMappingURL=old.js.map