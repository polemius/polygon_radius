var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function _(){return u(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}const m=[],y=[],x=[],v=[],g=Promise.resolve();let $=!1;function b(t){x.push(t)}let j=!1;const q=new Set;function z(){if(!j){j=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];p(e),M(e.$$)}for(m.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];q.has(e)||(q.add(e),e())}x.length=0}while(m.length);for(;v.length;)v.pop()();$=!1,j=!1,q.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const N=new Set;function C(t,e){-1===t.$$.dirty[0]&&(m.push(t),$||($=!0,g.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(c,r,s,i,u,_,f=[-1]){const h=d;p(c);const m=r.props||{},y=c.$$={fragment:null,ctx:null,props:_,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:f};let x=!1;if(y.ctx=s?s(c,m,(t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&u(y.ctx[t],y.ctx[t]=o)&&(y.bound[t]&&y.bound[t](o),x&&C(c,t)),e}):[],y.update(),x=!0,o(y.before_update),y.fragment=!!i&&i(y.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);y.fragment&&y.fragment.l(t),t.forEach(a)}else y.fragment&&y.fragment.c();r.intro&&((v=c.$$.fragment)&&v.i&&(N.delete(v),v.i(g))),function(t,n,c){const{fragment:r,on_mount:s,on_destroy:a,after_update:i}=t.$$;r&&r.m(n,c),b(()=>{const n=s.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(b)}(c,r.target,r.anchor),z()}var v,g;p(h)}function k(t,e,n,o){return e*=Math.PI/180,[n+t*Math.cos(e),o+t*Math.sin(e)]}const w=t=>180*t/Math.PI,E=(t,e)=>t/e*100;function P(t,e){return Math.sqrt(t*t+e*e)}function A(t,e,n,o,l){const c=e/n;return{x:t.x-o*c,y:t.y-l*c}}const I=({x:t,y:e,unit:n})=>`${t.toFixed(1)}${n} ${e.toFixed(1)}${n}`;function L(t,e,n){const o=t.slice();return o[15]=e[n].x,o[16]=e[n].y,o[18]=n,o}function S(t){let e,n,l,c,d,p,m,y,x,v,g,$,b,j,q,z,M,N,C,R,k,w,E,P,A,I,L=t[18]+1+"";function S(...e){return t[12](t[18],...e)}function F(...e){return t[13](t[18],...e)}function O(){t[14].call(E,t[18])}return{c(){e=i("div"),n=i("p"),l=u(L),c=u("."),d=_(),p=i("label"),p.textContent="x:",y=_(),x=i("input"),$=_(),b=i("label"),b.textContent="y:",q=_(),z=i("input"),C=_(),R=i("label"),R.textContent="r:",w=_(),E=i("input"),A=_(),h(n,"class","home__controls__control__title svelte-1ljcz4q"),h(p,"class","home__controls__control__label svelte-1ljcz4q"),h(p,"for",m="point_"+t[18]+"_x"),h(x,"type","tel"),h(x,"class","home__controls__control__input svelte-1ljcz4q"),h(x,"id",v="point_"+t[18]+"_x"),x.value=g=t[1][t[18]].x,h(b,"class","home__controls__control__label svelte-1ljcz4q"),h(b,"for",j="point_"+t[18]+"_y"),h(z,"type","tel"),h(z,"class","home__controls__control__input svelte-1ljcz4q"),h(z,"id",M="point_"+t[18]+"_y"),z.value=N=t[1][t[18]].y,h(R,"class","home__controls__control__label svelte-1ljcz4q"),h(R,"for",k="point_"+t[18]+"_radius"),h(E,"type","checkbox"),h(E,"class","home__controls__control__input svelte-1ljcz4q"),h(E,"id",P="point_"+t[18]+"_radius"),h(e,"class","home__controls__control svelte-1ljcz4q")},m(a,i,u){s(a,e,i),r(e,n),r(n,l),r(n,c),r(e,d),r(e,p),r(e,y),r(e,x),r(e,$),r(e,b),r(e,q),r(e,z),r(e,C),r(e,R),r(e,w),r(e,E),E.checked=t[1][t[18]].isRadius,r(e,A),u&&o(I),I=[f(x,"change",S),f(z,"change",F),f(E,"change",O)]},p(e,n){t=e,2&n&&g!==(g=t[1][t[18]].x)&&(x.value=g),2&n&&N!==(N=t[1][t[18]].y)&&(z.value=N),2&n&&(E.checked=t[1][t[18]].isRadius)},d(t){t&&a(e),o(I)}}}function F(e){let n,l,c,d,p,m,y,x,v,g,$,b,j,q,z,M,N,C,R,k,w,E,P,A,I,F,O,T,B=e[1],G=[];for(let t=0;t<B.length;t+=1)G[t]=S(L(e,B,t));return{c(){n=i("main"),l=i("h1"),l.innerHTML="Generate polygon<br> with rounded corners",c=_(),d=i("div"),p=i("div"),m=i("div"),y=_(),x=i("div"),v=i("p"),v.textContent="Points",g=_(),$=i("div"),b=i("label"),b.textContent="Radius:",j=_(),q=i("input"),z=_(),M=i("span"),M.textContent="px",N=_(),C=i("div"),R=i("label"),R.textContent="Step:",k=_(),w=i("input"),E=_(),P=i("span"),P.textContent="°",A=_();for(let t=0;t<G.length;t+=1)G[t].c();I=_(),F=i("div"),O=u(e[0]),h(l,"class","home__title svelte-1ljcz4q"),h(m,"class","home__image_container__placeholder svelte-1ljcz4q"),h(m,"style",e[0]),h(p,"class","home__image_container svelte-1ljcz4q"),h(v,"class","home__controls__title svelte-1ljcz4q"),h(b,"class","home__controls__control__label svelte-1ljcz4q"),h(b,"for","set_radius"),h(q,"type","tel"),h(q,"class","home__controls__control__input svelte-1ljcz4q"),h(q,"id","set_radius"),q.value=e[2],h(M,"class","home__controls__control__unit svelte-1ljcz4q"),h($,"class","home__controls__control svelte-1ljcz4q"),h(R,"class","home__controls__control__label svelte-1ljcz4q"),h(R,"for","set_step"),h(w,"type","tel"),h(w,"class","home__controls__control__input\n          home__controls__control__input--left svelte-1ljcz4q"),h(w,"id","set_step"),w.value=e[3],h(P,"class","home__controls__control__unit svelte-1ljcz4q"),h(C,"class","home__controls__control svelte-1ljcz4q"),h(x,"class","home__controls svelte-1ljcz4q"),h(d,"class","home__container svelte-1ljcz4q"),h(F,"class","home__result_container svelte-1ljcz4q"),h(n,"class","home svelte-1ljcz4q")},m(t,a,i){s(t,n,a),r(n,l),r(n,c),r(n,d),r(d,p),r(p,m),r(d,y),r(d,x),r(x,v),r(x,g),r(x,$),r($,b),r($,j),r($,q),r($,z),r($,M),r(x,N),r(x,C),r(C,R),r(C,k),r(C,w),r(C,E),r(C,P),r(x,A);for(let t=0;t<G.length;t+=1)G[t].m(x,null);r(n,I),r(n,F),r(F,O),i&&o(T),T=[f(q,"change",e[10]),f(w,"change",e[11])]},p(t,[e]){if(1&e&&h(m,"style",t[0]),4&e&&(q.value=t[2]),8&e&&(w.value=t[3]),66&e){let n;for(B=t[1],n=0;n<B.length;n+=1){const o=L(t,B,n);G[n]?G[n].p(o,e):(G[n]=S(o),G[n].c(),G[n].m(x,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=B.length}1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(O,t[0])},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(G,t),o(T)}}}function O(t,e,n){let o="",l="",c=[],r=[],s=20,a=10;const i=t=>{const e=Number(t);return isNaN(e)||e<0?1:e>180?180:e},u=t=>{const e=Number(t);return isNaN(t)||t<0?1:e>200?200:e};let _=(t,e,o)=>{const l=Number(t.target.value);isNaN(l)||n(1,r[o][e]=l,r)};return t.$$.update=()=>{14&t.$$.dirty&&n(8,c=r.reduce((t,e,n)=>{if(!e.isRadius)return[...t,e];const o=0===n?r.length-1:n-1,l=n===r.length-1?0:n+1,c=function(t,e,n,o,l,c,r){const s=t.x-e.x,a=t.y-e.y,i=t.x-n.x,u=t.y-n.y,_=(Math.atan2(a,s)-Math.atan2(u,i))/2,f=Math.abs(Math.tan(_));let h=o/f;const d=P(s,a),p=P(i,u),m=Math.min(d,p);h>m&&(h=m,o=m*f);const y=A(t,h,d,s,a),x=A(t,h,p,i,u),v=2*t.x-y.x-x.x,g=2*t.y-y.y-x.y,$=P(v,g),b=A(t,P(h,o),$,v,g);let j=Math.atan2(y.y-b.y,y.x-b.x),q=Math.atan2(x.y-b.y,x.x-b.x),z=q-j;if(z<0){let t=j;j=q,q=t,z=-z}z>Math.PI&&(z=Math.PI-z);let M=w(j),N=w(q);if(z<0){M<0&&(M=360+M),N<0&&(N=360+N);let t=M;M=N,N=t}const C=[];for(let t=M;t<N;t+=r){const[e,n]=k(o,t,b.x,b.y);C.push({x:E(e,l),y:E(n,c),unit:"%"})}return[...C]}(e,r[l],r[o],s,400,200,a);return[...t,...c]},[])),256&t.$$.dirty&&n(7,l=c.map(I).join(",")),128&t.$$.dirty&&n(0,o=`clip-path: polygon(${l})`)},n(1,r=[{x:0,y:40,isRadius:!0,unit:"px"},{x:400,y:0,isRadius:!0,unit:"px"},{x:400,y:200,isRadius:!0,unit:"px"},{x:0,y:160,isRadius:!0,unit:"px"}]),[o,r,s,a,i,u,_,l,c,[],t=>n(2,s=u(t.target.value)),t=>n(3,a=i(t.target.value)),(t,e)=>_(e,"x",t),(t,e)=>_(e,"y",t),function(t){r[t].isRadius=this.checked,n(1,r)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),R(this,t,O,F,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
