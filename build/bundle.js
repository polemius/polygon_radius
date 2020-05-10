var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function _(){return u(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let y;function h(t){y=t}const p=[],m=[],x=[],b=[],v=Promise.resolve();let g=!1;function $(t){x.push(t)}let j=!1;const M=new Set;function N(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];h(e),C(e.$$)}for(p.length=0;m.length;)m.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];M.has(e)||(M.add(e),e())}x.length=0}while(p.length);for(;b.length;)b.pop()();g=!1,j=!1,M.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const R=new Set;function w(t,e){-1===t.$$.dirty[0]&&(p.push(t),g||(g=!0,v.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function k(r,s,c,i,u,_,f=[-1]){const d=y;h(r);const p=s.props||{},m=r.$$={fragment:null,ctx:null,props:_,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:f};let x=!1;if(m.ctx=c?c(r,p,(t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),x&&w(r,t)),e}):[],m.update(),x=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();s.intro&&((b=r.$$.fragment)&&b.i&&(R.delete(b),b.i(v))),function(t,n,r){const{fragment:s,on_mount:c,on_destroy:a,after_update:i}=t.$$;s&&s.m(n,r),$(()=>{const n=c.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]}),i.forEach($)}(r,s.target,s.anchor),N()}var b,v;h(d)}function E(t,e,n,o){return e*=Math.PI/180,[n+t*Math.cos(e),o+t*Math.sin(e)]}const P=t=>180*t/Math.PI,A=(t,e)=>t/e*100;function I(t,e){return Math.sqrt(t*t+e*e)}function L(t,e,n,o,l){const r=e/n;return{x:t.x-o*r,y:t.y-l*r}}const S=({x:t,y:e,unit:n})=>`${t.toFixed(1)}${n} ${e.toFixed(1)}${n}`;function X(t,e,n){const o=t.slice();return o[24]=e[n].x,o[25]=e[n].y,o[27]=n,o}function Y(t){let e,n,l,r,y,h,p,m,x,b,v,g,$,j,M,N,C,R,w,k,E,P,A,I,L,S,X=t[27]+1+"";function Y(...e){return t[21](t[27],...e)}function q(...e){return t[22](t[27],...e)}function F(){t[23].call(A,t[27])}return{c(){e=i("div"),n=i("p"),l=u(X),r=u("."),y=_(),h=i("label"),h.textContent="x:",m=_(),x=i("input"),g=_(),$=i("label"),$.textContent="y:",M=_(),N=i("input"),w=_(),k=i("label"),k.textContent="r:",P=_(),A=i("input"),L=_(),d(n,"class","home__controls__control__title svelte-brytjl"),d(h,"class","home__controls__control__label svelte-brytjl"),d(h,"for",p="point_"+t[27]+"_x"),d(x,"type","tel"),d(x,"class","home__controls__control__input svelte-brytjl"),d(x,"id",b="point_"+t[27]+"_x"),x.value=v=t[1][t[27]].x,d($,"class","home__controls__control__label svelte-brytjl"),d($,"for",j="point_"+t[27]+"_y"),d(N,"type","tel"),d(N,"class","home__controls__control__input svelte-brytjl"),d(N,"id",C="point_"+t[27]+"_y"),N.value=R=t[1][t[27]].y,d(k,"class","home__controls__control__label svelte-brytjl"),d(k,"for",E="point_"+t[27]+"_radius"),d(A,"type","checkbox"),d(A,"class","home__controls__control__input svelte-brytjl"),d(A,"id",I="point_"+t[27]+"_radius"),d(e,"class","home__controls__control svelte-brytjl")},m(a,i,u){c(a,e,i),s(e,n),s(n,l),s(n,r),s(e,y),s(e,h),s(e,m),s(e,x),s(e,g),s(e,$),s(e,M),s(e,N),s(e,w),s(e,k),s(e,P),s(e,A),A.checked=t[1][t[27]].isRadius,s(e,L),u&&o(S),S=[f(x,"change",Y),f(N,"change",q),f(A,"change",F)]},p(e,n){t=e,2&n&&v!==(v=t[1][t[27]].x)&&(x.value=v),2&n&&R!==(R=t[1][t[27]].y)&&(N.value=R),2&n&&(A.checked=t[1][t[27]].isRadius)},d(t){t&&a(e),o(S)}}}function q(e){let n,l,r,y,h,p,m,x,b,v,g,$,j,M,N,C,R,w,k,E,P,A,I,L,S,q,F,O,T,B,G,H,z=e[1],D=[];for(let t=0;t<z.length;t+=1)D[t]=Y(X(e,z,t));return{c(){n=i("main"),l=i("h1"),l.innerHTML="Generate polygon<br> with rounded corners",r=_(),y=i("div"),h=i("div"),p=i("div"),m=_(),x=i("div"),b=i("div"),g=_(),$=i("div"),j=i("p"),j.textContent="Points",M=_(),N=i("div"),C=i("label"),C.textContent="Radius:",R=_(),w=i("input"),k=_(),E=i("span"),E.textContent="px",P=_(),A=i("div"),I=i("label"),I.textContent="Step:",L=_(),S=i("input"),q=_(),F=i("span"),F.textContent="°",O=_();for(let t=0;t<D.length;t+=1)D[t].c();T=_(),B=i("div"),G=u(e[0]),d(l,"class","home__title svelte-brytjl"),d(p,"class","home__image_container__placeholder svelte-brytjl"),d(p,"style",e[0]),d(b,"class","home__image_container__dot svelte-brytjl"),d(b,"style",v=e[4]+" "+e[5]),d(x,"class","home__image_container__dots svelte-brytjl"),d(h,"class","home__image_container svelte-brytjl"),d(j,"class","home__controls__title svelte-brytjl"),d(C,"class","home__controls__control__label svelte-brytjl"),d(C,"for","set_radius"),d(w,"type","tel"),d(w,"class","home__controls__control__input svelte-brytjl"),d(w,"id","set_radius"),w.value=e[2],d(E,"class","home__controls__control__unit svelte-brytjl"),d(N,"class","home__controls__control svelte-brytjl"),d(I,"class","home__controls__control__label svelte-brytjl"),d(I,"for","set_step"),d(S,"type","tel"),d(S,"class","home__controls__control__input\n          home__controls__control__input--left svelte-brytjl"),d(S,"id","set_step"),S.value=e[3],d(F,"class","home__controls__control__unit svelte-brytjl"),d(A,"class","home__controls__control svelte-brytjl"),d($,"class","home__controls svelte-brytjl"),d(y,"class","home__container svelte-brytjl"),d(B,"class","home__result_container svelte-brytjl"),d(n,"class","home svelte-brytjl")},m(t,a,i){c(t,n,a),s(n,l),s(n,r),s(n,y),s(y,h),s(h,p),s(h,m),s(h,x),s(x,b),s(y,g),s(y,$),s($,j),s($,M),s($,N),s(N,C),s(N,R),s(N,w),s(N,k),s(N,E),s($,P),s($,A),s(A,I),s(A,L),s(A,S),s(A,q),s(A,F),s($,O);for(let t=0;t<D.length;t+=1)D[t].m($,null);s(n,T),s(n,B),s(B,G),i&&o(H),H=[f(b,"mousedown",e[8](0)),f(x,"mouseup",e[10]),f(x,"mousemove",e[9]),f(w,"change",e[19]),f(S,"change",e[20])]},p(t,[e]){if(1&e&&d(p,"style",t[0]),48&e&&v!==(v=t[4]+" "+t[5])&&d(b,"style",v),4&e&&(w.value=t[2]),8&e&&(S.value=t[3]),2050&e){let n;for(z=t[1],n=0;n<z.length;n+=1){const o=X(t,z,n);D[n]?D[n].p(o,e):(D[n]=Y(o),D[n].c(),D[n].m($,null))}for(;n<D.length;n+=1)D[n].d(1);D.length=z.length}1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(G,t[0])},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(D,t),o(H)}}}function F(t,e,n){let o="",l="",r=[],s=[],c=20,a=10,i="top: 40px; left: 40px;",u="";const _=t=>{const e=Number(t);return isNaN(e)||e<0?1:e>180?180:e},f=t=>{const e=Number(t);return isNaN(t)||t<0?1:e>200?200:e};let d={x:0,y:0},y=-1,h={x:0,y:0},p={x:0,y:0},m=(t,e,o)=>{const l=Number(t.target.value);isNaN(l)||n(1,s[o][e]=l,s)};return t.$$.update=()=>{2&t.$$.dirty&&n(4,i=`top: ${s[0].y}px; left: ${s[0].x}px;`),131072&t.$$.dirty&&n(5,u=`transform: translate3d(${p.x}px, ${p.y}px, 0)`),14&t.$$.dirty&&n(13,r=s.reduce((t,e,n)=>{if(!e.isRadius)return[...t,e];const o=0===n?s.length-1:n-1,l=n===s.length-1?0:n+1,r=function(t,e,n,o,l,r,s){const c=t.x-e.x,a=t.y-e.y,i=t.x-n.x,u=t.y-n.y,_=(Math.atan2(a,c)-Math.atan2(u,i))/2,f=Math.abs(Math.tan(_));let d=o/f;const y=I(c,a),h=I(i,u),p=Math.min(y,h);d>p&&(d=p,o=p*f);const m=L(t,d,y,c,a),x=L(t,d,h,i,u),b=2*t.x-m.x-x.x,v=2*t.y-m.y-x.y,g=I(b,v),$=L(t,I(d,o),g,b,v);let j=Math.atan2(m.y-$.y,m.x-$.x),M=Math.atan2(x.y-$.y,x.x-$.x),N=M-j;if(N<0){let t=j;j=M,M=t,N=-N}N>Math.PI&&(N=Math.PI-N);let C=P(j),R=P(M);if(N<0){C<0&&(C=360+C),R<0&&(R=360+R);let t=C;C=R,R=t}const w=[];for(let t=C;t<R;t+=s){const[e,n]=E(o,t,$.x,$.y);w.push({x:A(e,l),y:A(n,r),unit:"%"})}return[...w]}(e,s[l],s[o],c,400,200,a);return[...t,...r]},[])),8192&t.$$.dirty&&n(12,l=r.map(S).join(",")),4096&t.$$.dirty&&n(0,o=`clip-path: polygon(${l})`)},n(1,s=[{x:0,y:40,isRadius:!0,unit:"px"},{x:400,y:0,isRadius:!0,unit:"px"},{x:400,y:200,isRadius:!0,unit:"px"},{x:0,y:160,isRadius:!0,unit:"px"}]),[o,s,c,a,i,u,_,f,t=>e=>{h.x=e.clientX,h.y=e.clientY,y=t},t=>{if(y>=0){let e=t.clientX-h.x,o=t.clientY-h.y;n(17,p.x=e,p),n(17,p.y=o,p),console.log({diffX:e,diffY:o})}},t=>{y>=0&&(d.x+=p.x,d.y+=p.y,n(1,s[y].x=d.x,s),n(1,s[y].y=d.y,s),console.log(s[y]),console.log(d),n(17,p={x:0,y:0}),n(5,u=""),y=-1)},m,l,r,d,y,h,p,[],t=>n(2,c=f(t.target.value)),t=>n(3,a=_(t.target.value)),(t,e)=>m(e,"x",t),(t,e)=>m(e,"y",t),function(t){s[t].isRadius=this.checked,n(1,s)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),k(this,t,F,q,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
