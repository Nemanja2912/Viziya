(this.webpackJsonpviziya=this.webpackJsonpviziya||[]).push([[0],{39:function(e,t,c){},46:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n,s=c(1),a=c.n(s),i=c(14),o=c.n(i),r=c(4),l=c(2),j=(c(39),c(3)),d=c(0),b=function(e){return Object(d.jsx)("p",{className:"button",children:e.text})},x=function(e){var t=e.content;return Object(d.jsx)("div",{className:"home-hero",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"middle-section",children:[Object(d.jsx)("div",{className:"empty-box2"}),Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h1",{children:t.homeHeroTitle}),Object(d.jsx)("p",{children:t.homeHeroDescription})]}),Object(d.jsx)("div",{className:"empty-box"})]}),Object(d.jsxs)("div",{className:"bottom-section",children:[Object(d.jsx)("div",{className:"contact-box",children:Object(d.jsx)(b,{text:t.homeHeroButton1})}),Object(d.jsx)("div",{className:"empty-box"}),Object(d.jsx)("div",{className:"project-box",children:Object(d.jsx)(b,{text:t.homeHeroButton2})})]})]})})},m=function(e){var t=e.content;return Object(d.jsx)("div",{className:"home-image-area",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"box1"}),Object(d.jsx)("div",{className:"box2"}),Object(d.jsx)("div",{className:"box3"}),Object(d.jsx)("div",{className:"image-box",children:Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("p",{children:t.imageAreaText})})}),Object(d.jsx)("div",{className:"box4"}),Object(d.jsx)("div",{className:"box5"}),Object(d.jsx)("div",{className:"box6"})]})})},O=c.p+"static/media/project-box1.1ea91239.jpg",u=c.p+"static/media/project-box2.481032c7.jpg",h=c.p+"static/media/project-box3.84e1ddd1.jpg",p=c.p+"static/media/project-box4.04cac847.jpg",v=c.p+"static/media/project-box5.7a440d5b.jpg",f=c.p+"static/media/project-box6.fc7712a5.jpg",N=c.p+"static/media/more-button.0d09fbc1.svg",g=function(e){var t=e.projectImage,c=e.projectName,n=e.active,s=e.setActiveIndex,a=e.index,i=e.setPreventInterval,o=e.content;return Object(d.jsx)("div",{className:"project-box ".concat(n&&"active-box"),onMouseEnter:function(){i(!0),s(a)},onMouseLeave:function(){return i(!1)},children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"img-box ".concat(n&&"active-img-box"),children:[Object(d.jsx)("div",{className:"opq"}),Object(d.jsx)("img",{src:t,alt:""})]}),Object(d.jsx)("h4",{children:c}),Object(d.jsxs)("div",{className:"bottom ".concat(n&&"active"),children:[Object(d.jsx)(r.b,{to:"/services",children:Object(d.jsx)("p",{children:o.projectBoxButton})}),Object(d.jsx)("img",{src:N,alt:""})]})]})})},w=(c(46),c(22)),y=function(e,t,c,n,s){var a=[],i=window.getComputedStyle(e).getPropertyValue("font"),o=e.offsetWidth;if(0!==o){for(var r=function e(t){var c=(e.canvas||(e.canvas=document.createElement("canvas"))).getContext("2d");return c.font=i,c.measureText(t).width},l=r(t),j=t.split(""),b=0,x=0;l>0;){for(var m=0,O=0,u="",h=void 0;m<o&&O<j.length;){if(m+r(j[O])>o){O--;break}" "===j[O]&&(h=O),m=r(u+=j[O]),O++}x<1?" "!==j[O-1]&&O!==j.length&&(O=h):x=0;var p=j.splice(0,O);0===p.join("").length&&x++,a.push(Object(d.jsx)("div",{className:"measure-line",style:c,children:Object(d.jsx)("p",{style:Object(w.a)(Object(w.a)({},n),{},{animationDelay:"".concat(s*b,"ms")}),children:p.join("")})},b)),b++,l=r(j.join(""))}return a}},H=function(e,t,c,n,s,a){var i=function(){window.scrollY+e*(t/100)>s.current.offsetTop&&a(!0),c&&s.current.getBoundingClientRect().top>e&&a(!1)};return n&&window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}},R=function(e){var t,c=e.text,n=e.animationName,a=void 0===n?"":n,i=e.overflowHidden,o=void 0!==i&&i,r=e.delay,j=void 0===r?0:r,b=e.duration,x=void 0===b?500:b,m=e.fitWidth,O=void 0!==m&&m,u=e.scroll,h=void 0!==u&&u,p=e.scrollRepeat,v=void 0!==p&&p,f=e.windowHeight,N=void 0===f?0:f,g=Object(s.useState)([]),w=Object(l.a)(g,2),R=w[0],k=w[1],S=Object(s.useState)(!h),I=Object(l.a)(S,2),C=I[0],L=I[1],U=Object(s.useState)(window.innerHeight),E=Object(l.a)(U,2),T=E[0],P=E[1],B=Object(s.useRef)(null),z=Object(s.useContext)(Se),M={overflow:o?"hidden":"visible"};switch(a){case"fadeInUp":t="translateY(100%)";break;case"fadeInDown":t="translateY(-100%)";break;case"fadeInLeft":t="translateX(-100%)";break;case"fadeInRight":t="translateX(100%)";break;default:t="translateX(0%)"}var D={animationDuration:"".concat(x,"ms"),width:O?"max-content":"100%",opacity:0,transform:t,animationTimingFunction:"ease",animationFillMode:"forwards"};return Object(s.useEffect)((function(){k(y(B.current,c,M,D,j))}),[z]),Object(s.useEffect)((function(){var e=function(){k(y(B.current,c,M,D,j)),P(window.innerHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(s.useEffect)((function(){return H(T,N,v,h,B,L)}),[]),Object(d.jsx)("div",{ref:B,className:"".concat(C&&a),children:R})},k=[O,u,h,p,v,f],S=function(e){var t,c=e.content,a=Object(s.useState)(0),i=Object(l.a)(a,2),o=i[0],r=i[1],j=Object(s.useState)(!1),b=Object(l.a)(j,2),x=b[0],m=b[1];return Object(s.useEffect)((function(){x?clearInterval(n):n=setInterval((function(){r((function(e){return e===k.length-1?0:e+1}))}),3e3)}),[x]),Object(d.jsxs)("div",{className:"home-projects container",children:[Object(d.jsx)("div",{className:"empty-box"}),Object(d.jsx)("div",{className:"empty-box2"}),Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("h2",{children:Object(d.jsx)(R,{text:c.homeProjectTitle,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})}),Object(d.jsx)("div",{children:Object(d.jsx)(R,{text:c.homeProjectDescription,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})]}),Object(d.jsx)("div",{className:"diagonal-line",children:Object(d.jsx)("svg",{children:Object(d.jsx)("line",{x1:"0",y1:"0",x2:"100%",y2:"100%"})})}),null===(t=c.projectBoxList)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)(g,{projectName:e,projectImage:k[t],active:o===t,setActiveIndex:r,index:t,setPreventInterval:m,content:c},t)}))]})},I=c.p+"static/media/prev.0894e092.svg",C=c.p+"static/media/next.7e1935dc.svg",L=function(e){var t=e.content,c=Object(s.useState)(0),n=Object(l.a)(c,2),a=n[0],i=n[1],o=Object(s.useRef)(null),j=function(e){i((function(c){var n=o.current.querySelector(".image-wrapper").getBoundingClientRect().width,s=c;return"right"===e?c===t.projectSlider.length-1?c:(s++,o.current.scrollLeft=n*s,s):"left"===e?0===c?c:(s--,o.current.scrollLeft=n*s,s):void 0}))};return Object(d.jsx)("div",{className:"home-project-slider",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"empty-box empty-box1"}),Object(d.jsx)("div",{className:"empty-box empty-box2"}),Object(d.jsx)("div",{className:"empty-box empty-box3"}),Object(d.jsx)("div",{className:"empty-box empty-box4"}),Object(d.jsx)("div",{className:"image-box",ref:o,children:Object(d.jsx)("div",{className:"image-body",children:t.projectSlider.map((function(e,t){return Object(d.jsx)("div",{className:"image-wrapper",style:{backgroundImage:"url(".concat("/viziya"+"/projectSlider/".concat(e.image),")")}},t)}))})}),Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h2",{children:Object(d.jsx)(R,{text:t.projectSliderTitle,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("div",{className:"empty-box empty-box5"}),Object(d.jsxs)("div",{className:"description-box",children:[Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("h4",{children:t.projectSlider[a].title}),Object(d.jsx)("p",{children:t.projectSlider[a].desc})]}),Object(d.jsx)(r.b,{to:"/projects",children:Object(d.jsx)(b,{text:t.projectSliderButton})})]}),Object(d.jsx)("div",{className:"empty-box empty-box6"}),Object(d.jsx)("div",{className:"prev nav-button",onClick:function(){return j("left")},children:Object(d.jsx)("img",{src:I,alt:""})}),Object(d.jsx)("div",{className:"next nav-button",onClick:function(){return j("right")},children:Object(d.jsx)("img",{src:C,alt:""})})]}),Object(d.jsx)("div",{className:"empty-box empty-box7"}),Object(d.jsx)("div",{className:"empty-box empty-box8"}),Object(d.jsx)("div",{className:"empty-box empty-box9"}),Object(d.jsx)("div",{className:"empty-box empty-box10"})]})})},U=function(e){var t=e.content;return Object(d.jsx)("div",{className:"home-counter",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"box1",children:Object(d.jsx)("h5",{className:"text-box",children:Object(d.jsx)(R,{text:t.counterTitle,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("div",{className:"box2",children:Object(d.jsx)("p",{className:"text-box",children:Object(d.jsx)(R,{text:t.counterDesc,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("div",{className:"box3",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"num",children:Object(d.jsx)("p",{className:"text-box",children:Object(d.jsx)(R,{text:t.counterBox1Value+"+",animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("p",{className:"box-label text-box",children:Object(d.jsx)(R,{text:t.counterBox1Label,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})]})}),Object(d.jsx)("div",{className:"box4",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"num",children:Object(d.jsx)("p",{className:"text-box",children:Object(d.jsx)(R,{text:t.counterBox2Value+"+",animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("p",{className:"text-box",children:Object(d.jsx)(R,{text:t.counterBox2Label,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})]})}),Object(d.jsx)("div",{className:"box5",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"num",children:Object(d.jsx)("p",{className:"text-box",children:Object(d.jsx)(R,{text:t.counterBox3Value+t.counterBoxLetter+"+",animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("p",{className:"text-box",children:Object(d.jsx)(R,{text:t.counterBox3Label,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})]})}),Object(d.jsx)("div",{className:"empty"})]})})},E=function(e){var t=e.content;return Object(d.jsxs)("div",{className:"home-page",children:[Object(d.jsx)(x,{content:t}),Object(d.jsx)(S,{content:t}),Object(d.jsx)(L,{content:t}),Object(d.jsx)(U,{content:t}),Object(d.jsx)(m,{content:t})]})},T=c(21),P=function(e){var t=e.handleLoadMore,c=e.disable;return Object(d.jsx)("div",{onClick:t,className:"load-more",children:Object(d.jsx)("p",{style:{display:c?"none":"",cursor:"pointer"},children:"Load more"})})},B=c.p+"static/media/black-location.78d1f59a.svg",z=function(e){var t=e.scroll,c=void 0===t||t,n=e.scrollRepeat,a=void 0!==n&&n,i=e.windowHeight,o=void 0===i?90:i,r=e.last,j=e.title,b=e.sq,x=e.projectImage,m=e.location,O=e.openModal,u=Object(s.useState)(!c),h=Object(l.a)(u,2),p=h[0],v=h[1],f=Object(s.useState)(!c),N=Object(l.a)(f,2),g=N[0],w=N[1],y=Object(s.useState)(window.innerHeight),k=Object(l.a)(y,2),S=k[0],I=(k[1],Object(s.useRef)(null)),C=Object(s.useRef)(null);return Object(s.useEffect)((function(){return H(S,o,a,c,I,v)}),[]),Object(s.useEffect)((function(){return H(S,o,a,c,C,w)}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"project-card container",ref:I,children:[Object(d.jsxs)("div",{className:"text ".concat(r?"last":""),children:[Object(d.jsx)("h2",{className:"text-box",children:Object(d.jsx)(R,{text:j,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:c,windowHeight:90,scrollRepeat:!1})}),Object(d.jsx)("div",{className:"bottom",ref:C,children:Object(d.jsxs)("div",{className:"bottom-box ".concat(g&&"active-bottom"),children:[Object(d.jsx)("div",{className:"m2  ",children:b}),Object(d.jsxs)("div",{className:"location",children:[Object(d.jsx)("img",{src:B,alt:""}),Object(d.jsx)("p",{children:m})]})]})})]}),Object(d.jsx)("div",{className:"image ".concat(p?"open-image":"close-image"),style:{background:"url(".concat(x,")"),backgroundPosition:"center",backgroundSize:"cover"},onClick:O,children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("p",{children:"LEARN MORE"})})})]})})},M=c.p+"static/media/next2.8836ce84.svg",D=c.p+"static/media/prev2.5f54a51f.svg",q=function(e){var t=e.images,c=e.closeModal,n=e.index,a=e.title,i=Object(s.useRef)(null),r=function(e){var t=i.current.querySelector(".image-wrapper").getBoundingClientRect().width;"right"===e?i.current.scrollLeft+=t:"left"===e&&(i.current.scrollLeft-=t)};return Object(s.useEffect)((function(){var e=function(e){"Escape"===e.key&&c()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),o.a.createPortal(Object(d.jsxs)("div",{className:"modal-slider",children:[Object(d.jsx)("div",{className:"background",onClick:c}),Object(d.jsxs)("div",{className:"slider-body",children:[Object(d.jsxs)("div",{className:"top",children:[Object(d.jsxs)("div",{className:"title",children:[n,". ",a]}),Object(d.jsx)("div",{className:"close",onClick:c,children:"Close"})]}),Object(d.jsxs)("div",{className:"image-box",children:[Object(d.jsx)("div",{className:"image-slider",ref:i,children:t.map((function(e){return Object(d.jsx)("div",{className:"image-wrapper",children:Object(d.jsx)("img",{src:"/viziya/projectPage/"+e,alt:""})})}))}),Object(d.jsx)("div",{className:"prev slider-button",onClick:function(){return r("left")},children:Object(d.jsx)("img",{src:D,alt:""})}),Object(d.jsx)("div",{className:"next slider-button",onClick:function(){return r("right")},children:Object(d.jsx)("img",{src:M,alt:""})})]})]})]}),document.querySelector("#modal"))},F=function(e){return e<10?"0".concat(e):e},A=function(e){var t=e.content,c=Object(s.useState)(Object(T.a)(t.projectList).slice(0,8)),n=Object(l.a)(c,2),a=n[0],i=n[1],o=Object(s.useState)(!1),r=Object(l.a)(o,2),j=r[0],b=r[1],x=Object(s.useState)(),m=Object(l.a)(x,2),O=m[0],u=m[1];return Object(d.jsx)("div",{className:"project-page",children:Object(d.jsxs)("div",{className:"container project-container",children:[Object(d.jsxs)("div",{className:"project-title title",children:[Object(d.jsx)("div",{className:"first-div"}),Object(d.jsx)("h1",{className:"text-box",children:Object(d.jsx)("div",{className:"title-wrapper",children:Object(d.jsx)(R,{text:t.projectTitle,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("div",{})]}),a.map((function(e,t){return Object(d.jsx)(z,{scroll:0!==t,title:"".concat(F(t+1),". ").concat(e.title),sq:e.sqm,openModal:function(){u(t),b(!0)},location:e.location,projectImage:"/viziya"+"/projectPage/".concat(e.image),last:t===a.length-1},t)})),j&&Object(d.jsx)(q,{closeModal:function(){return b(!1)},index:F(O+1),title:a[O].title,images:a[O].slider}),Object(d.jsx)(P,{handleLoadMore:function(){i((function(e){return Object(T.a)(t.projectList).slice(0,e.length+8)}))},disable:t.projectList.length===a.length})]})})},V=c.p+"static/media/logo-white.51a2ad7d.svg",Y=c.p+"static/media/location.24437d43.svg",W=function(e){var t=e.content,c=e.nav;return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:V,className:"logo",alt:""}),Object(d.jsxs)("div",{className:"location",children:[Object(d.jsxs)("p",{children:[t.address," ",Object(d.jsx)("br",{})," ",t.city]}),Object(d.jsx)("img",{src:Y,alt:""})]})]}),Object(d.jsxs)("div",{className:"created",children:[Object(d.jsx)("p",{className:"opacity",children:t.created}),Object(d.jsx)("p",{children:t.author})]})]}),Object(d.jsxs)("div",{className:"middle",children:[Object(d.jsx)(r.c,{to:"/",children:Object(d.jsx)("p",{children:c.homePage})}),Object(d.jsx)(r.c,{to:"/about",children:Object(d.jsx)("p",{children:c.aboutUsPage})}),Object(d.jsx)(r.c,{to:"/services",children:Object(d.jsx)("p",{children:c.servicesPage})}),Object(d.jsx)(r.c,{to:"/projects",children:Object(d.jsx)("p",{children:c.projectsPage})}),Object(d.jsx)(r.c,{to:"/contact",children:Object(d.jsx)("p",{children:c.contactsPage})})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"box1",children:[Object(d.jsx)("p",{className:"opacity",children:t.phoneLabel}),Object(d.jsx)("p",{children:t.phone})]}),Object(d.jsx)("div",{className:"box2",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"opacity",children:t.emailLabel}),Object(d.jsx)("p",{children:t.email})]})}),Object(d.jsxs)("div",{className:"box3",children:[Object(d.jsxs)("div",{className:"created2",children:[Object(d.jsx)("p",{className:"opacity",children:t.created}),Object(d.jsx)("p",{className:"name2",children:t.author})]}),Object(d.jsx)("p",{className:"opacity",children:t.copyrights})]})]})]})})},X=c.p+"static/media/logo-black.3ef1c399.svg",J=c.p+"static/media/logo-white-min.fa11d79c.svg",G=c.p+"static/media/logo-black-min.427347d2.svg",K=function(e){var t=e.lang,c=e.active,n=e.setLanguage,s=e.langBar;return Object(d.jsx)("p",{className:"language-button  ".concat(c?"active":""," ").concat(!s&&"not-show"),onClick:n,children:t})},Q=["RU","SR","EN"],Z=function(e){var t=e.black,c=e.language,n=e.setLanguage,a=e.close,i=e.content,o=Object(s.useContext)(ke),j=Object(s.useState)(!1),b=Object(l.a)(j,2),x=b[0],m=b[1];return Object(d.jsxs)("nav",{className:"container ".concat(t?"blackNav":""),children:[Object(d.jsx)("div",{className:"language-box",onClick:function(){return m((function(e){return!e}))},children:Q.map((function(e,t){return Object(d.jsx)(K,{lang:e,active:c===e,langBar:x,setLanguage:function(){window.innerWidth<=650?x&&n(e):n(e)}},t)}))}),Object(d.jsx)("div",{className:"logo-box",children:Object(d.jsx)(r.c,{to:"/",children:Object(d.jsxs)("picture",{children:[Object(d.jsx)("source",{media:"(min-width: 1101px)",srcSet:t?X:V}),Object(d.jsx)("img",{src:t?G:J,alt:""})]})})}),Object(d.jsx)("div",{className:"wrapper-box",children:Object(d.jsx)("div",{className:"menu-box",children:a?Object(d.jsx)("p",{onClick:o,children:i.close}):Object(d.jsx)("p",{onClick:o,children:i.menu})})})]})},$=c.p+"static/media/contact-image.0eb9f0e7.svg",_=function(e){var t=e.content;return Object(d.jsxs)("div",{className:"contact-info",children:[Object(d.jsx)("div",{className:"number",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"opacity",children:Object(d.jsx)(R,{text:t.phoneLabel,animationName:"fadeInUp",delay:0,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})}),Object(d.jsx)("p",{children:Object(d.jsx)(R,{text:t.phone,animationName:"fadeInUp",delay:0,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})})]})}),Object(d.jsx)("div",{className:"email",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"opacity",children:Object(d.jsx)(R,{text:t.emailLabel,animationName:"fadeInUp",delay:0,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})}),Object(d.jsx)("p",{className:"value",children:Object(d.jsx)(R,{text:t.email,animationName:"fadeInUp",delay:0,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})})]})})]})},ee=c.p+"static/media/map.80a28f76.svg",te=function(e){var t=e.content;return Object(d.jsxs)("div",{className:"title-section",children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{children:Object(d.jsx)(R,{text:t.title,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})}),Object(d.jsxs)("p",{className:"description",children:[Object(d.jsx)(R,{text:t.desc[0],animationName:"fadeInUp",delay:0,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1}),Object(d.jsx)(R,{text:t.desc[1],animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})]})]}),Object(d.jsx)("div",{className:"box2",children:Object(d.jsx)("img",{src:ee,alt:""})})]})},ce=function(e){return Object(d.jsx)("div",{className:"image",style:{background:"url(".concat(e.image,")"),backgroundPosition:"center",backgroundSize:"cover",width:"100%"}})},ne=function(e){var t=e.content;return Object(d.jsxs)("div",{className:"text-area",children:[Object(d.jsx)("div",{className:"text",children:Object(d.jsxs)("h4",{children:[Object(d.jsx)(R,{text:t.formTitle[0],animationName:"fadeInUp",delay:0,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1}),Object(d.jsx)(R,{text:t.formTitle[1],animationName:"fadeInUp",delay:0,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})]})}),Object(d.jsx)("div",{className:"empty-box"})]})},se=c(34),ae=c.n(se),ie=function(e){var t=e.content,c=Object(s.useState)(),n=Object(l.a)(c,2),a=n[0],i=n[1],o=Object(s.useState)(),r=Object(l.a)(o,2),j=r[0],b=r[1],x=Object(s.useState)(),m=Object(l.a)(x,2),O=m[0],u=m[1],h=Object(s.useState)(!1),p=Object(l.a)(h,2),v=(p[0],p[1]),f=Object(s.useState)(null),N=Object(l.a)(f,2),g=(N[0],N[1]);return Object(d.jsxs)("form",{className:"contact-form",action:"#",onSubmit:function(e){e.preventDefault(),console.log("name: ".concat(a,", email: ").concat(j,", message: ").concat(O)),ae()({method:"post",url:"/viziya/form/index.php",headers:{"content-type":"application/json"},data:"this.state"}).then((function(e){v(e.data.sent)})).catch((function(e){return g(e.message)}))},children:[Object(d.jsx)("div",{className:"name",children:Object(d.jsx)("input",{id:"name",name:"name",type:"text",placeholder:t.formName,value:a,onChange:function(e){return i(e.target.value)}})}),Object(d.jsx)("div",{className:"email",children:Object(d.jsx)("input",{id:"email",name:"email",type:"email",placeholder:t.formEmail,value:j,onChange:function(e){return b(e.target.value)}})}),Object(d.jsx)("div",{className:"message",children:Object(d.jsx)("input",{id:"message",name:"message",type:"message",placeholder:t.formMessage,value:O,onChange:function(e){return u(e.target.value)}})}),Object(d.jsx)("div",{className:"empty-box"}),Object(d.jsx)("div",{className:"button-section",children:Object(d.jsx)("button",{type:"submit",className:"button",children:t.send})}),Object(d.jsx)("div",{className:"empty-box eb2"})]})},oe=function(e){var t=e.nav,c=e.content;return Object(d.jsxs)("div",{className:"contact-page container",children:[Object(d.jsx)(te,{content:c}),Object(d.jsx)(_,{content:c}),Object(d.jsx)(ce,{image:$,content:c}),Object(d.jsx)(ne,{content:c}),Object(d.jsx)(ie,{content:t})]})},re=function(e){return Object(d.jsxs)("div",{className:"title-univerzal container",children:[Object(d.jsx)("h1",{children:Object(d.jsx)("div",{className:"text-box",children:Object(d.jsx)(R,{text:e.title,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!1,windowHeight:90,scrollRepeat:!1})})}),Object(d.jsx)("div",{className:"empty-box"})]})},le=c.p+"static/media/service1.d79aa235.jpg",je=c.p+"static/media/service2.b098b2c6.jpg",de=c.p+"static/media/service3.bbe63245.jpg",be=c.p+"static/media/service4.cbdc8c22.jpg",xe=function(e){return Object(d.jsx)("div",{className:"collapse-button ".concat(e.active?"active":""),onClick:e.setActiveButton,children:e.text})},me=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"top",children:Object(d.jsx)("p",{className:"description",children:e.description})}),Object(d.jsxs)("div",{className:"bottom",children:[Object(d.jsxs)("p",{className:"price",children:[Object(d.jsx)("span",{children:e.priceTitle}),Object(d.jsx)("span",{children:e.price})]}),Object(d.jsx)("p",{className:"smaller",children:e.note})]})]})},Oe=[le,je,de,be],ue=function(e){var t=e.content,c=e.priceTitle,n=e.note,a=Object(s.useState)(0),i=Object(l.a)(a,2),o=i[0],r=i[1],j=Object(s.useState)(-1),b=Object(l.a)(j,2),x=b[0],m=b[1],O=Object(s.useState)("open"),u=Object(l.a)(O,2),h=u[0],p=u[1],v=function(e){r(e),p("close"),setTimeout((function(){m(e),setTimeout((function(){p("open")}),200)}),500)};return Object(d.jsxs)("div",{className:"services-collapse",children:[Object(d.jsx)("div",{className:"button-tabs",children:t.map((function(e,c){return Object(d.jsx)(xe,{text:t[c].button,setActiveButton:function(){return v(c)},active:c===o},c)}))}),Object(d.jsxs)("div",{className:"collapse-body",children:[Object(d.jsx)("div",{className:"image ".concat("open"===h?"open-image":"close"===h?"close-image":""),children:Object(d.jsx)("img",{src:Oe[-1===x?0:x],alt:""})}),-1===x&&Object(d.jsx)(me,{description:t[0].description,price:t[0].price,priceTitle:c,note:n,scroll:!0}),0===x&&Object(d.jsx)(me,{description:t[0].description,price:t[0].price,priceTitle:c,note:n}),1===x&&Object(d.jsx)(me,{description:t[1].description,price:t[1].price,priceTitle:c,note:n}),2===x&&Object(d.jsx)(me,{description:t[2].description,price:t[2].price,priceTitle:c,note:n}),3===x&&Object(d.jsx)(me,{description:t[3].description,price:t[3].price,priceTitle:c,note:n})]})]})},he=function(e){var t=e.title;return Object(d.jsxs)("div",{className:"accordion-text",children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)(R,{text:t[0],animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1}),Object(d.jsx)(R,{text:t[1],animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})]}),Object(d.jsx)("div",{className:"empty-box"})]})},pe=c.p+"static/media/arrow-down.f2118d26.svg",ve=function(e){var t=Object(s.useRef)(null),c=Object(s.useRef)(null),n=Object(s.useState)(!1),a=Object(l.a)(n,2),i=a[0],o=a[1];Object(s.useEffect)((function(){setTimeout((function(){c.current.style.height=t.current.getBoundingClientRect().height+"px"}),100)}),[]),Object(s.useEffect)((function(){var e=function(){c.current.style.height=i?c.current.scrollHeight+"px":t.current.getBoundingClientRect().height+"px"};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[i]);return Object(d.jsxs)("div",{ref:c,className:"accordion-box",children:[Object(d.jsxs)("div",{className:"text",children:[Object(d.jsxs)("div",{className:"top",ref:t,children:[Object(d.jsx)("p",{className:"title",children:e.title}),Object(d.jsx)("p",{className:"description",children:e.description})]}),Object(d.jsx)("div",{className:"body",children:Object(d.jsx)("p",{className:"description",children:e.body})})]}),Object(d.jsx)("div",{className:"button",onClick:function(){o((function(e){return!e})),c.current.style.height=i?t.current.getBoundingClientRect().height+"px":c.current.scrollHeight+"px"},children:Object(d.jsx)("div",{className:"button-box",children:Object(d.jsx)("img",{src:pe,alt:"",style:{transform:i?"rotate(180deg)":"rotate(0deg)"}})})})]})},fe=function(e){var t,c=e.content;return Object(d.jsxs)("div",{className:"services-accordion",children:[Object(d.jsx)(he,{title:c.accordionTitle}),null===(t=c.accordion)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)(ve,{title:e.title,description:e.description,body:e.body},t)})),Object(d.jsxs)("div",{className:"accordion-box",children:[Object(d.jsx)("div",{className:"text",children:Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("p",{className:"title"}),Object(d.jsx)("p",{className:"description"})]})}),Object(d.jsx)("div",{className:"button"})]})]})},Ne=function(e){var t=e.content;return Object(d.jsxs)("div",{className:"services-page container",children:[Object(d.jsx)(re,{title:t.title}),Object(d.jsx)(ue,{content:t.collapse,priceTitle:t.priceTitle,note:t.note}),Object(d.jsx)(fe,{content:t})]})},ge=function(e){var t=e.content;return Object(d.jsx)("div",{className:"about-image container",children:Object(d.jsxs)("p",{children:[t.line1," ",Object(d.jsx)("br",{})," ",t.line2," ",Object(d.jsx)("br",{})," ",t.line3]})})},we=function(e){return Object(d.jsxs)("div",{className:"about-text container",children:[e.title?Object(d.jsx)("h2",{children:Object(d.jsx)(R,{text:e.title,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})}):"",Object(d.jsx)("p",{className:"text-wrapper",children:Object(d.jsx)(R,{text:e.text,animationName:"fadeInUp",delay:200,duration:1e3,overflowHidden:!0,scroll:!0,windowHeight:90,scrollRepeat:!1})})]})},ye=function(e){var t=e.content,c=e.home;return Object(d.jsxs)("div",{className:"about-page",children:[Object(d.jsx)(re,{title:t.title}),Object(d.jsx)(ge,{content:t}),Object(d.jsx)(we,{text:t.mainText,content:t}),Object(d.jsx)(U,{content:c}),Object(d.jsx)(we,{title:t.subtitle1,text:t.text1,content:t}),Object(d.jsx)(we,{title:t.subtitle2,text:t.text2,content:t})]})},He=function(e){var t=e.language,c=e.setLanguage,n=e.active,a=e.content,i=Object(s.useContext)(ke),o=(new Date).getFullYear();return Object(d.jsx)("div",{className:"navigation-menu ".concat(n?"navigation-menu-open":""),children:Object(d.jsxs)("div",{style:{height:"".concat(window.innerHeight,"px")},className:"container",children:[Object(d.jsx)(Z,{content:a,close:!0,setLanguage:c,language:t}),Object(d.jsxs)("div",{className:"nav-body",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("div",{className:"top",children:Object(d.jsxs)("div",{className:"items-list",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("div",{className:"nav-item-wrapper",children:Object(d.jsx)("p",{onClick:i,className:"item hidden-item  ".concat(n&&"item1 show"),children:a.homePage})})}),Object(d.jsx)(r.b,{to:"/projects",children:Object(d.jsx)("div",{className:"nav-item-wrapper",children:Object(d.jsx)("p",{onClick:i,className:"item hidden-item  ".concat(n&&"item2 show"),children:a.projectsPage})})}),Object(d.jsx)(r.b,{to:"/about",children:Object(d.jsx)("div",{className:"nav-item-wrapper",children:Object(d.jsx)("p",{onClick:i,className:"item hidden-item  ".concat(n&&"item3 show"),children:a.aboutUsPage})})}),Object(d.jsx)(r.b,{to:"/services",children:Object(d.jsx)("div",{className:"nav-item-wrapper",children:Object(d.jsx)("p",{onClick:i,className:"item hidden-item  ".concat(n&&"item4 show"),children:a.servicesPage})})}),Object(d.jsx)(r.b,{to:"/contact",children:Object(d.jsx)("div",{className:"nav-item-wrapper",children:Object(d.jsx)("p",{onClick:i,className:"item hidden-item  ".concat(n&&"item5 show"),children:a.contactsPage})})})]})}),Object(d.jsxs)("div",{className:"cont-info",children:[Object(d.jsx)("p",{className:"desktop",children:"office@viziya.rs"}),Object(d.jsx)("p",{className:"desktop",children:"+7 (916) 45-34-33"}),Object(d.jsxs)("div",{className:"mob",children:[Object(d.jsx)(b,{text:"Contact us"}),Object(d.jsxs)("p",{className:"opacity",children:["\xa9 1999 \u2013 ",o," Viziya"]})]})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"text",children:[Object(d.jsxs)("p",{className:"title",children:[a.formText," ",Object(d.jsx)("span",{className:"hide",children:a.formText2})]}),Object(d.jsx)(ie,{content:a})]})})]})]})})},Re=function(e){var t=e.loaded,c=Object(s.useState)(!1),n=Object(l.a)(c,2),a=n[0],i=n[1];return Object(s.useEffect)((function(){setTimeout((function(){i(!0)}),1e3)}),[]),Object(d.jsx)("div",{className:"loader",style:{height:window.innerHeight,top:a&&t?"-120%":"0%"},children:Object(d.jsx)("div",{className:"logo-box",children:Object(d.jsx)("img",{src:J,alt:""})})})},ke=a.a.createContext(),Se=a.a.createContext();var Ie=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)({}),i=Object(l.a)(a,2),o=i[0],r=i[1],b=Object(s.useState)(!1),x=Object(l.a)(b,2),m=x[0],O=x[1],u=Object(s.useState)(!1),h=Object(l.a)(u,2),p=h[0],v=h[1],f=Object(s.useState)("EN"),N=Object(l.a)(f,2),g=N[0],w=N[1];Object(s.useEffect)((function(){fetch("/viziya/json/content.json").then((function(e){return e.json()})).then((function(e){r(e),O(!0)}))}),[]);var y=Object(j.e)();return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[y]),Object(s.useEffect)((function(){document.fonts.load('1em "Metronic Pro"').then((function(){v(!0)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[m&&p&&Object(d.jsx)(ke.Provider,{value:function(){n(!c)},children:Object(d.jsx)(Se.Provider,{value:g,children:Object(d.jsxs)("div",{className:"",style:{fontFamily:"RU"===g?"Gotham Pro":"Metronic Pro"},children:[Object(d.jsx)(Z,{black:"/"!==y.pathname,setLanguage:w,language:g,content:o[g].navigation}),Object(d.jsx)(j.a,{path:"/projects",children:Object(d.jsx)(A,{content:o[g].project})}),Object(d.jsx)(j.a,{path:"/about",children:Object(d.jsx)(ye,{content:o[g].about,home:o[g].home})}),Object(d.jsx)(j.a,{path:"/services",children:Object(d.jsx)(Ne,{content:o[g].service})}),Object(d.jsx)(j.a,{path:"/contact",children:Object(d.jsx)(oe,{nav:o[g].navigation,content:o[g].contact})}),Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(E,{content:o[g].home})}),Object(d.jsx)(He,{setLanguage:w,language:g,active:c,content:o[g].navigation}),Object(d.jsx)(W,{content:o[g].footer,nav:o[g].navigation})]})})}),Object(d.jsx)(Re,{loaded:m&&p})]})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(r.a,{basename:"/viziya",children:Object(d.jsx)(Ie,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e4bcd56c.chunk.js.map