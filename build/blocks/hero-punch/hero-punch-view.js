(()=>{function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(){gsap.registerPlugin(ScrollTrigger);var r=".heroPunch",n=r+".scrollTriggerParent",o=r+".landing_content",a=r+"fist_container",i=r+".sign_pinSignTop",s=r+".sign",u=r+".svgMe_container",l=r+".star-1",c=r+".star-2",f=r+".desert_shadow",d=r+".desert_sun",p=r+".landing_backdrop",y=[];if(document.querySelector(f))var g,h=function(e){return e/window.innerWidth*100+"vw"},v=function(e){var t=document.querySelector(e).getBoundingClientRect(),r=t.right-t.left,n=2*t.left;return document.body.clientWidth-r-n},b=function(){var e;y.punch=((e=gsap.timeline().addLabel("fadeIn").set(o,{y:"-100vh",opacity:0}).to(o,{y:0,opacity:1,duration:1,ease:"power4.out"},">").addLabel("punch").set(a,{visibility:"visible"}).to(a,{top:0,duration:.3,ease:"elastic.out(1,0.8)"}).to(a,{top:"110vh",duration:1.8,ease:"power3.out"}).set(a,{visibility:"hidden"}).set(i,{visibility:"hidden"},"<-2.02").set(s,{position:"absolute",margin:0},"<").to(s,{xPercent:-13,yPercent:-20,scale:.1,duration:1.5,ease:"power3.out"},"<").to(s,{rotateX:1080,rotateY:720,rotateZ:360,duration:1.5,ease:"none"},"<").to(u,{xPercent:10,yPercent:-40,scale:.1,duration:1.5,ease:"power3.out"},"<").to(u,{rotateZ:1440,duration:1.5,ease:"none"},"<").to(s,{xPercent:-15,yPercent:10,duration:1,ease:"power2.in"},">-0.6").to(s,{rotateX:1080,rotateY:720,scale:.001,rotateZ:360,duration:1,ease:"none"},"<").to(u,{xPercent:10,yPercent:-20,duration:1,ease:"power2.in"},"<").to(u,{rotateZ:1800,scale:.001,duration:1,ease:"none"},"<").set([l,c],{scale:0,visibility:"visible"}).to([l,c],{scale:1e3,rotate:180,duration:.2,ease:"none"},">").to([l,c],{scale:0,rotate:360,duration:.2,ease:"none"},">").set([l,c],{visibility:"hidden",rotate:0}).set(o,{visibility:"hidden"})).pause("punch"),e),ScrollTrigger.create({trigger:n,start:"top top-=100px",end:"bottom top",onEnter:function(){return y.punch.play("punch")},onLeave:function(){return y.punch.pause("fadeIn")},onLeaveBack:function(){return y.punch.tweenFromTo("fadeIn","punch")}}),y.sunMove=gsap.timeline().set(f,{transformOrigin:"top center",skewX:55,scaleY:.4}).to(d,{keyframes:{x:[0,h(v(d)/2),h(v(d))],easeEach:"none"}}).to(d,{keyframes:{"0%":{marginTop:"3vw"},"50%":{marginTop:"-3vw",ease:"power2.out"},"100%":{marginTop:"3vw",ease:"power2.in"}}},"<").to(f,{keyframes:{skewX:[55,0,-55],scaleY:[.4,.2,.4],easeEach:"none"}},"<").fromTo(p,{background:"radial-gradient( at 9% 9%, #fffb 0%, #fff0 30% ), linear-gradient( hsl(207, 53%, 60%) 0%, hsl(207, 53%, 88%) 20%, hsl(61, 75%, 60%) 55%, hsl(30, 75%, 60%) 60%, #fff 61% )"},{ease:"linear",background:"radial-gradient( at 91% 9%, #fffb 0%, #fff0 30% ), linear-gradient( hsl(207, 53%, 50%) 0%, hsl(0, 76%, 88%) 25%, hsl(61, 75%, 60%) 55%, hsl(30, 76%, 50%) 70%, #fff 71% )"},"<"),ScrollTrigger.create({trigger:n,start:"top top-=500px",end:"bottom bottom+=500px",scrub:1,animation:y.sunMove})},m=function(){Object.entries(y).forEach((function(t){return(r=t,n=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(r,n)||e(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1].revert();var r,n})),b()},w=setInterval((function(){"complete"===document.readyState&&(clearInterval(w),b(),window.onresize=function(){return function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];clearTimeout(g),g=setTimeout((function(){return r.apply(void 0,function(e){if(Array.isArray(e))return t(e)}(n=o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var n}),n)}(m,150)})}),100)}()})();
//# sourceMappingURL=hero-punch-view.js.map