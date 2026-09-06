(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54008,(e,t,i)=>{"use strict";function r(e,t,i){i=i||2;var r,d,p,m,v,b,_,x=t&&t.length,w=x?t[0]*i:e.length,P=n(e,0,w,i,!0),C=[];if(!P||P.next===P.prev)return C;if(x&&(P=function(e,t,i,r){var a,u,h,d,p,m=[];for(a=0,u=t.length;a<u;a++)h=t[a]*r,d=a<u-1?t[a+1]*r:e.length,(p=n(e,h,d,r,!1))===p.next&&(p.steiner=!0),m.push(function(e){var t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e)return i}(p));for(m.sort(o),a=0;a<m.length;a++)i=function(e,t){var i=function(e,t){var i,r,n,s=t,o=e.x,a=e.y,u=-1/0;do{if(a<=s.y&&a>=s.next.y&&s.next.y!==s.y){var h=s.x+(a-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(h<=o&&h>u&&(u=h,n=s.x<s.next.x?s:s.next,h===o))return n}s=s.next}while(s!==t)if(!n)return null;var d,p=n,g=n.x,m=n.y,y=1/0;s=n;do{o>=s.x&&s.x>=g&&o!==s.x&&l(a<m?o:u,a,g,m,a<m?u:o,a,s.x,s.y)&&(d=Math.abs(a-s.y)/(o-s.x),f(s,e)&&(d<y||d===y&&(s.x>n.x||s.x===n.x&&(i=n,r=s,0>c(i.prev,i,r.prev)&&0>c(r.next,i,i.next))))&&(n=s,y=d)),s=s.next}while(s!==p)return n}(e,t);if(!i)return t;var r=g(i,e);return s(r,r.next),s(i,i.next)}(m[a],i);return i}(e,t,P,i)),e.length>80*i){r=p=e[0],d=m=e[1];for(var S=i;S<w;S+=i)v=e[S],b=e[S+1],v<r&&(r=v),b<d&&(d=b),v>p&&(p=v),b>m&&(m=b);_=0!==(_=Math.max(p-r,m-d))?32767/_:0}return function e(t,i,r,n,o,d,p){if(t){!p&&d&&function(e,t,i,r){var n=e;do 0===n.z&&(n.z=a(n.x,n.y,t,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e)n.prevZ.nextZ=null,n.prevZ=null,function(e){var t,i,r,n,s,o,a,l,c=1;do{for(i=e,e=null,s=null,o=0;i;){for(o++,r=i,a=0,t=0;t<c&&(a++,r=r.nextZ);t++);for(l=c;a>0||l>0&&r;)0!==a&&(0===l||!r||i.z<=r.z)?(n=i,i=i.nextZ,a--):(n=r,r=r.nextZ,l--),s?s.nextZ=n:e=n,n.prevZ=s,s=n;i=r}s.nextZ=null,c*=2}while(o>1)}(n)}(t,n,o,d);for(var m,v,b=t;t.prev!==t.next;){if(m=t.prev,v=t.next,d?function(e,t,i,r){var n=e.prev,s=e.next;if(c(n,e,s)>=0)return!1;for(var o=n.x,u=e.x,h=s.x,d=n.y,p=e.y,f=s.y,g=o<u?o<h?o:h:u<h?u:h,m=d<p?d<f?d:f:p<f?p:f,y=o>u?o>h?o:h:u>h?u:h,v=d>p?d>f?d:f:p>f?p:f,b=a(g,m,t,i,r),_=a(y,v,t,i,r),x=e.prevZ,w=e.nextZ;x&&x.z>=b&&w&&w.z<=_;){if(x.x>=g&&x.x<=y&&x.y>=m&&x.y<=v&&x!==n&&x!==s&&l(o,d,u,p,h,f,x.x,x.y)&&c(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=g&&w.x<=y&&w.y>=m&&w.y<=v&&w!==n&&w!==s&&l(o,d,u,p,h,f,w.x,w.y)&&c(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=b;){if(x.x>=g&&x.x<=y&&x.y>=m&&x.y<=v&&x!==n&&x!==s&&l(o,d,u,p,h,f,x.x,x.y)&&c(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=_;){if(w.x>=g&&w.x<=y&&w.y>=m&&w.y<=v&&w!==n&&w!==s&&l(o,d,u,p,h,f,w.x,w.y)&&c(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}(t,n,o,d):function(e){var t=e.prev,i=e.next;if(c(t,e,i)>=0)return!1;for(var r=t.x,n=e.x,s=i.x,o=t.y,a=e.y,u=i.y,h=r<n?r<s?r:s:n<s?n:s,d=o<a?o<u?o:u:a<u?a:u,p=r>n?r>s?r:s:n>s?n:s,f=o>a?o>u?o:u:a>u?a:u,g=i.next;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&l(r,o,n,a,s,u,g.x,g.y)&&c(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}(t)){i.push(m.i/r|0),i.push(t.i/r|0),i.push(v.i/r|0),y(t),t=v.next,b=v.next;continue}if((t=v)===b){p?1===p?e(t=function(e,t,i){var r=e;do{var n=r.prev,o=r.next.next;!u(n,o)&&h(n,r,r.next,o)&&f(n,o)&&f(o,n)&&(t.push(n.i/i|0),t.push(r.i/i|0),t.push(o.i/i|0),y(r),y(r.next),r=e=o),r=r.next}while(r!==e)return s(r)}(s(t),i,r),i,r,n,o,d,2):2===p&&function(t,i,r,n,o,a){var l=t;do{for(var d,p,m=l.next.next;m!==l.prev;){if(l.i!==m.i&&(d=l,p=m,d.next.i!==p.i&&d.prev.i!==p.i&&!function(e,t){var i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&h(i,i.next,e,t))return!0;i=i.next}while(i!==e)return!1}(d,p)&&(f(d,p)&&f(p,d)&&function(e,t){var i=e,r=!1,n=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e)return r}(d,p)&&(c(d.prev,d,p.prev)||c(d,p.prev,p))||u(d,p)&&c(d.prev,d,d.next)>0&&c(p.prev,p,p.next)>0))){var y=g(l,m);l=s(l,l.next),y=s(y,y.next),e(l,i,r,n,o,a,0),e(y,i,r,n,o,a,0);return}m=m.next}l=l.next}while(l!==t)}(t,i,r,n,o,d):e(s(t),i,r,n,o,d,1);break}}}}(P,C,i,r,d,_,0),C}function n(e,t,i,r,n){var s,o;if(n===b(e,t,i,r)>0)for(s=t;s<i;s+=r)o=m(s,e[s],e[s+1],o);else for(s=i-r;s>=t;s-=r)o=m(s,e[s],e[s+1],o);return o&&u(o,o.next)&&(y(o),o=o.next),o}function s(e,t){if(!e)return e;t||(t=e);var i,r=e;do if(i=!1,!r.steiner&&(u(r,r.next)||0===c(r.prev,r,r.next))){if(y(r),(r=t=r.prev)===r.next)break;i=!0}else r=r.next;while(i||r!==t)return t}function o(e,t){return e.x-t.x}function a(e,t,i,r,n){return(e=((e=((e=((e=((e=(e-i)*n|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-r)*n|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function l(e,t,i,r,n,s,o,a){return(n-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(r-a)>=(i-o)*(t-a)&&(i-o)*(s-a)>=(n-o)*(r-a)}function c(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function u(e,t){return e.x===t.x&&e.y===t.y}function h(e,t,i,r){var n=p(c(e,t,i)),s=p(c(e,t,r)),o=p(c(i,r,e)),a=p(c(i,r,t));return!!(n!==s&&o!==a||0===n&&d(e,i,t)||0===s&&d(e,r,t)||0===o&&d(i,e,r)||0===a&&d(i,t,r))}function d(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function p(e){return e>0?1:e<0?-1:0}function f(e,t){return 0>c(e.prev,e,e.next)?c(e,t,e.next)>=0&&c(e,e.prev,t)>=0:0>c(e,t,e.prev)||0>c(e,e.next,t)}function g(e,t){var i=new v(e.i,e.x,e.y),r=new v(t.i,t.x,t.y),n=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function m(e,t,i,r){var n=new v(e,t,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function y(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function v(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b(e,t,i,r){for(var n=0,s=t,o=i-r;s<i;s+=r)n+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return n}t.exports=r,t.exports.default=r,r.deviation=function(e,t,i,r){var n=t&&t.length,s=n?t[0]*i:e.length,o=Math.abs(b(e,0,s,i));if(n)for(var a=0,l=t.length;a<l;a++){var c=t[a]*i,u=a<l-1?t[a+1]*i:e.length;o-=Math.abs(b(e,c,u,i))}var h=0;for(a=0;a<r.length;a+=3){var d=r[a]*i,p=r[a+1]*i,f=r[a+2]*i;h+=Math.abs((e[d]-e[f])*(e[p+1]-e[d+1])-(e[d]-e[p])*(e[f+1]-e[d+1]))}return 0===o&&0===h?0:Math.abs((h-o)/o)},r.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},r=0,n=0;n<e.length;n++){for(var s=0;s<e[n].length;s++)for(var o=0;o<t;o++)i.vertices.push(e[n][s][o]);n>0&&(r+=e[n-1].length,i.holes.push(r))}return i}},30257,e=>{"use strict";let t,i,r,n,s,o,a,l,c;var u,h,d,p,f,g,m,y,v=e.i(47167),b=e.i(43476),_=e.i(71645),x=e.i(2239),w=Object.prototype.hasOwnProperty;let P=new WeakMap,C=()=>{},S=C(),M=Object,E=e=>e===S,L=(e,t)=>({...e,...t}),A={},T={},k="undefined",R=typeof window!=k,O=typeof document!=k,I=R&&"Deno"in window,j=(e,t)=>{let i=P.get(e);return[()=>!E(t)&&e.get(t)||A,r=>{if(!E(t)){let n=e.get(t);t in T||(T[t]=n),i[5](t,L(n,r),n||A)}},i[6],()=>!E(t)&&t in T?T[t]:!E(t)&&e.get(t)||A]},z=!0,[D,N]=R&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[C,C],F={initFocus:e=>(O&&document.addEventListener("visibilitychange",e),D("focus",e),()=>{O&&document.removeEventListener("visibilitychange",e),N("focus",e)}),initReconnect:e=>{let t=()=>{z=!0,e()},i=()=>{z=!1};return D("online",t),D("offline",i),()=>{N("online",t),N("offline",i)}}},B=!_.default.useId,U=!R||I,V=U?_.useEffect:_.useLayoutEffect,$="u">typeof navigator&&navigator.connection,W=!U&&$&&(["slow-2g","2g"].includes($.effectiveType)||$.saveData),G=new WeakMap,H=(e,t)=>e===`[object ${t}]`,q=0,Y=e=>{let t,i,r=typeof e,n=M.prototype.toString.call(e),s=H(n,"Date"),o=H(n,"RegExp"),a=H(n,"Object");if(M(e)!==e||s||o)t=s?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=G.get(e))return t;if(t=++q+"~",G.set(e,t),Array.isArray(e)){for(i=0,t="@";i<e.length;i++)t+=Y(e[i])+",";G.set(e,t)}if(a){t="#";let r=M.keys(e).sort();for(;!E(i=r.pop());)E(e[i])||(t+=i+":"+Y(e[i])+",");G.set(e,t)}}return t},K=e=>{if("function"==typeof e)try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?Y(e):"",t]},Z=0,X=()=>++Z;async function J(...e){let[t,i,r,n]=e,s=L({populateCache:!0,throwOnError:!0},"boolean"==typeof n?{revalidate:n}:n||{}),o=s.populateCache,a=s.rollbackOnError,l=s.optimisticData,c=s.throwOnError;if("function"==typeof i){let e=[];for(let r of t.keys())!/^\$(inf|sub)\$/.test(r)&&i(t.get(r)._k)&&e.push(r);return Promise.all(e.map(u))}return u(i);async function u(i){let n,[u]=K(i);if(!u)return;let[h,d]=j(t,u),[p,f,g,m]=P.get(t),y=()=>{let e=p[u];return("function"==typeof s.revalidate?s.revalidate(h().data,i):!1!==s.revalidate)&&(delete g[u],delete m[u],e&&e[0])?e[0](2).then(()=>h().data):h().data};if(e.length<3)return y();let v=r,b=!1,_=X();f[u]=[_,0];let x=!E(l),w=h(),C=w.data,M=w._c,L=E(M)?C:M;if(x&&d({data:l="function"==typeof l?l(L,C):l,_c:L}),"function"==typeof v)try{v=v(L)}catch(e){n=e,b=!0}if(v&&"function"==typeof v.then){let e;if(v=await v.catch(e=>{n=e,b=!0}),_!==f[u][0]){if(b)throw n;return v}b&&x&&(e=n,"function"==typeof a?a(e):!1!==a)&&(o=!0,d({data:L,_c:S}))}if(o&&!b&&("function"==typeof o?d({data:o(v,L),error:S,_c:S}):d({data:v,error:S,_c:S})),f[u][1]=X(),Promise.resolve(y()).then(()=>{d({_c:S})}),b){if(c)throw n;return}return v}}let Q=(e,t)=>{for(let i in e)e[i][0]&&e[i][0](t)},ee=(e,t)=>{if(!P.has(e)){let i=L(F,t),r=Object.create(null),n=J.bind(S,e),s=C,o=Object.create(null),a=(e,t)=>{let i=o[e]||[];return o[e]=i,i.push(t),()=>{let e=i.indexOf(t);e>=0&&(i[e]=i[i.length-1],i.pop())}},l=(t,i,r)=>{e.set(t,i);let n=o[t];if(n)for(let e of n)e(i,r)},c=t=>{let i=P.get(e),[,n,s,a]=i,l=X();for(let e in i[8]++,s)delete s[e];for(let e in a)delete a[e];for(let e in n)n[e]=[l,l];let c={};for(let t of[...e.keys()]){let i=e.get(t);e.delete(t);let r=o[t];if(r)for(let e of r)e(c,i)}let u=!t||!1!==t.revalidate;for(let e in r){let t=r[e];for(let e=0;e<t.length;e++)t[e](4,{revalidate:u&&!e})}},u=()=>{if(!P.has(e)&&(P.set(e,[r,Object.create(null),Object.create(null),Object.create(null),n,l,a,c,0]),!U)){let t=i.initFocus(setTimeout.bind(S,Q.bind(S,r,0))),n=i.initReconnect(setTimeout.bind(S,Q.bind(S,r,1)));s=()=>{t&&t(),n&&n(),P.delete(e)}}};return u(),[e,n,u,s,c]}let i=P.get(e);return[e,i[4],S,S,i[7]]},[et,ei,,,er]=ee(new Map),en=L({onLoadingSlow:C,onSuccess:C,onError:C,onErrorRetry:(e,t,i,r,n)=>{let s=i.errorRetryCount,o=n.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*i.errorRetryInterval;(E(s)||!(o>s))&&setTimeout(r,a,n)},onDiscarded:C,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:W?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:W?5e3:3e3,compare:function e(t,i){var r,n;if(t===i)return!0;if(t&&i&&(r=t.constructor)===i.constructor){if(r===Date)return t.getTime()===i.getTime();if(r===RegExp)return t.toString()===i.toString();if(r===Array){if((n=t.length)===i.length)for(;n--&&e(t[n],i[n]););return -1===n}if(!r||"object"==typeof t){for(r in n=0,t)if(w.call(t,r)&&++n&&!w.call(i,r)||!(r in i)||!e(t[r],i[r]))return!1;return Object.keys(i).length===n}}return t!=t&&i!=i},isPaused:()=>!1,cache:et,mutate:ei,unload:er,fallback:{}},{isOnline:()=>z,isVisible:()=>{let e=O&&document.visibilityState;return E(e)||"hidden"!==e}}),es=(e,t)=>{let i=L(e,t);if(t){let{use:r,fallback:n,cacheData:s}=e,{use:o,fallback:a,cacheData:l}=t;r&&o&&(i.use=r.concat(o)),n&&a&&(i.fallback=L(n,a)),s&&l&&(i.cacheData=L(s,l))}return i},eo=(0,_.createContext)({}),ea=R&&window.__SWR_DEVTOOLS_USE__,el=(ea?window.__SWR_DEVTOOLS_USE__:[]).concat(e=>(t,i,r)=>{let n=i&&((...e)=>{let[r]=K(t),[,,,n]=P.get(et);if(r.startsWith("$inf$"))return i(...e);let s=n[r];return E(s)?i(...e):(delete n[r],s)});return e(t,n,r)});ea&&(window.__SWR_DEVTOOLS_REACT__=_.default);let ec=_.default.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}}),eu={dedupe:!0},eh=(e,t,i)=>{var r;return!!t&&(null==(r=e.get(t))?void 0:r.has(i))===!0},ed=(e,t,i)=>{if(!t)return;let r=e.get(t);r||(r=new Set,e.set(t,r)),r.add(i)},ep=Promise.resolve(S);ep.status="fulfilled",ep.value=S;let ef=()=>C;M.defineProperty(e=>{let{value:t}=e,i=(0,_.useContext)(eo),r="function"==typeof t,n=(0,_.useMemo)(()=>r?t(i):t,[r,i,t]),s=(0,_.useMemo)(()=>r?n:es(i,n),[r,i,n]),o=n&&n.provider,a=(0,_.useRef)(S);o&&!a.current&&(a.current=ee(o(s.cache||et),n));let l=a.current;return l&&(s.cache=l[0],s.mutate=l[1],s.unload=l[4]),V(()=>{if(l)return l[2]&&l[2](),l[3]},[]),(0,_.createElement)(eo.Provider,L(e,{value:s}))},"defaultValue",{value:en});let eg=(s=(e,t,i)=>{let{cache:r,compare:n,suspense:s,fallbackData:o,revalidateOnMount:a,revalidateIfStale:l,refreshInterval:c,refreshWhenHidden:u,refreshWhenOffline:h,keepPreviousData:d,strictServerPrefetchWarning:p}=i,[f,g,m,y]=P.get(r),[v,b]=K(e),w=(0,_.useRef)(!1),C=(0,_.useRef)(!1),M=(0,_.useRef)(v),A=(0,_.useRef)(t),T=(0,_.useRef)(i),O=()=>T.current.isVisible()&&T.current.isOnline(),[I,z,D,N]=j(r,v),F=(0,_.useRef)({}).current,$=E(o)?E(i.fallback)?S:i.fallback[v]:o,W=i.cacheData,G=v?null==W?void 0:W[v]:S,H=v?y[v]:S,q=E(H)&&!E(G),Y=q?G:H,Z=(e,t)=>{for(let i in F)if("data"===i){if(!n(e[i],t[i])&&(!E(e[i])||!n(em,t[i])))return!1}else if(t[i]!==e[i])return!1;return!0},Q=!w.current,ee=(0,_.useMemo)(()=>{let e=I(),i=N(),r=e=>{let i=L(e);return(delete i._k,(()=>{if(!v||!t||T.current.isPaused())return!1;if(Q&&!E(a))return a;let e=E($)?i.data:$;return!(s&&q&&E(e))&&(E(e)||l)})())?{isValidating:!0,isLoading:!0,...i}:i},n=r(e),o=e===i?n:r(i),c=n;return[()=>{let e=r(I());return Z(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},()=>o]},[r,v]),et=(0,x.useSyncExternalStore)((0,_.useCallback)(e=>D(v,(t,i)=>{Z(i,t)||e()}),[r,v]),ee[0],ee[1]),ei=f[v]&&f[v].length>0,er=et.data,en=E(er)?$&&"function"==typeof $.then?ec($):$:er,es=et.error,eo=(0,_.useRef)(en),ea=(0,_.useRef)(S),el=ea.current;el||(ea.current=el=new WeakMap);let eg=(0,_.useRef)(null),em=d?E(er)?E(eo.current)?en:eo.current:er:en,ey=v&&E(en),ev=(0,_.useRef)(null);U||(0,x.useSyncExternalStore)(ef,()=>(ev.current=!1,ev),()=>(ev.current=!0,ev));let eb=ev.current;p&&eb&&!s&&ey&&console.warn(`Missing pre-initiated data for serialized key "${v}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);let e_=!(!v||!t||T.current.isPaused())&&(!ei||!!E(es))&&(Q&&!E(a)?a:(!s||!q||!ey)&&(s?!E(en)&&l:E(en)||l)),ex=Q&&e_,ew=E(et.isValidating)?ex:et.isValidating,eP=E(et.isLoading)?ex:et.isLoading,eC=(0,_.useCallback)(async e=>{let t,r,s=A.current;if(!v||!s||C.current||T.current.isPaused())return!1;let o=!0,a=e||{},l=!m[v]||!a.dedupe,c=q&&!eh(el,W,v)&&!E(Y)&&E(I().data),u=()=>B?!C.current&&v===M.current&&w.current:v===M.current,h={isValidating:!1,isLoading:!1},d=()=>{z(h)},p=()=>{let e=m[v];e&&e[1]===r&&delete m[v]},_={isValidating:!0};E(I().data)&&(_.isLoading=!0);try{if(l&&(z(_),i.loadingTimeout&&E(I().data)&&setTimeout(()=>{o&&u()&&T.current.onLoadingSlow(v,i)},i.loadingTimeout),c&&ed(el,W,v),m[v]=[c?Y:s(b),X()],c&&y[v]&&delete y[v]),[t,r]=m[v],t=await t,l&&setTimeout(p,i.dedupingInterval),!m[v]||m[v][1]!==r)return l&&u()&&T.current.onDiscarded(v),!1;h.error=S;let e=g[v];if(!E(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return d(),l&&u()&&T.current.onDiscarded(v),!1;let a=I().data;h.data=n(a,t)?a:t,l&&u()&&T.current.onSuccess(t,v,i)}catch(i){p();let e=T.current,{shouldRetryOnError:t}=e;!e.isPaused()&&(h.error=i,l&&u())&&(e.onError(i,v,e),(!0===t||"function"==typeof t&&t(i))&&(!T.current.revalidateOnFocus||!T.current.revalidateOnReconnect||O())&&e.onErrorRetry(i,v,e,e=>{let t=f[v];t&&t[0]&&t[0](3,e)},{retryCount:(a.retryCount||0)+1,dedupe:!0}))}return o=!1,d(),!0},[v,r]),eS=(0,_.useCallback)((...e)=>J(r,M.current,...e),[]);if(V(()=>{let e=eg.current;e&&(eg.current=null,ed(el,e.cacheData,e.key),E(I().data)&&z({data:e.data,error:S,_k:e._k}),y[e.key]&&delete y[e.key])}),V(()=>{A.current=t,T.current=i,E(er)||(eo.current=er)}),V(()=>{if(t||!q||E(Y)||eh(el,W,v)||!E(I().data))return;ed(el,W,v);let e=g[v];(({value:e,getCacheData:t,canCommit:i,setCache:r})=>{let n=e=>{i()&&E(t())&&r(e)};Promise.resolve(e).then(e=>{n({data:e,error:S})},e=>{n({error:e})})})({value:Y,getCacheData:()=>I().data,canCommit:()=>!C.current&&v===M.current&&g[v]===e,setCache:e=>z({...e,_k:b})})}),V(()=>{var e;let t;if(!v)return;let i=eC.bind(S,eu),r=0;T.current.revalidateOnFocus&&(r=Date.now()+T.current.focusThrottleInterval);let n=(e=(e,t={})=>{if(0==e){let e=Date.now();T.current.revalidateOnFocus&&e>r&&O()&&(r=e+T.current.focusThrottleInterval,i())}else if(1==e)T.current.revalidateOnReconnect&&O()&&i();else if(2==e)return eC();else if(3==e)return eC(t);else if(4==e&&(eo.current=S,t.revalidate))return eC()},(t=f[v]||(f[v]=[])).push(e),()=>{let i=t.indexOf(e);i>=0&&(t[i]=t[t.length-1],t.pop())});if(C.current=!1,M.current=v,w.current=!0,z({_k:b}),e_&&!m[v])if(E(en)||U)i();else R&&typeof window.requestAnimationFrame!=k?window.requestAnimationFrame(i):setTimeout(i,1);return()=>{C.current=!0,n()}},[v]),V(()=>{let e;function t(){let t="function"==typeof c?c(I().data):c;t&&-1!==e&&(e=setTimeout(i,t))}function i(){!I().error&&(u||T.current.isVisible())&&(h||T.current.isOnline())?eC(eu).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[c,u,h,v]),(0,_.useDebugValue)(em),s){if(!B&&U&&ey&&E(Y))throw Error("Fallback data is required when using Suspense in SSR.");ey&&(A.current=t,T.current=i,C.current=!1);let e=!E(Y)&&ey,r=S;if(e&&q?(en=r=Y&&"function"==typeof Y.then?ec(Y):Y,em=r,U||(eg.current={data:r,_k:b,key:v,cacheData:W})):ec(e?eS(Y):ep),!E(es)&&ey)throw es;let n=ey&&E(r)?eC(eu):ep;!E(em)&&ey&&(n.status="fulfilled",n.value=!0),ec(n)}return{mutate:eS,get data(){return F.data=!0,em},get error(){return F.error=!0,es},get isValidating(){return F.isValidating=!0,ew},get isLoading(){return F.isLoading=!0,eP}}},function(...e){let t,i=(t=(0,_.useContext)(eo),(0,_.useMemo)(()=>L(en,t),[t])),[r,n,o]="function"==typeof e[1]?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],a=es(i,o),l=s,{use:c}=a,u=(c||[]).concat(el);for(let e=u.length;e--;)l=u[e](l);return l(r,n||a.fetcher||null,a)}),em=1,ey=1;class ev{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;addChannel(e){let{delay:t=0,duration:i=1/0,rate:r=1,repeat:n=1}=e,s=em++,o={time:0,delay:t,duration:i,rate:r,repeat:n};return this._setChannelTime(o,this.time),this.channels.set(s,o),s}removeChannel(e){for(let[t,i]of(this.channels.delete(e),this.animations))i.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return void 0!==t&&this.time>=t.delay+t.duration*t.repeat}getTime(e){if(void 0===e)return this.time;let t=this.channels.get(e);return void 0===t?-1:t.time}setTime(e){for(let t of(this.time=Math.max(0,e),this.channels.values()))this._setChannelTime(t,this.time);for(let e of this.animations.values()){let{animation:t,channel:i}=e;t.setTime(this.getTime(i))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let i=ey++;return this.animations.set(i,{animation:e,channel:t}),e.setTime(this.getTime(t)),i}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(-1===this.lastEngineTime&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let i=t-e.delay;i>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,i)%e.duration,e.time*=e.rate)}}let eb={number:{type:"number",validate:(e,t)=>Number.isFinite(e)&&"object"==typeof t&&(void 0===t.max||e<=t.max)&&(void 0===t.min||e>=t.min)},array:{type:"array",validate:(e,t)=>Array.isArray(e)||ArrayBuffer.isView(e)}};function e_(e){return Array.isArray(e)||ArrayBuffer.isView(e)?"array":typeof e}let ex={vertex:`\
#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,fragment:`\
#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`},ew=/void\s+main\s*\([^)]*\)\s*\{\n?/,eP=/}\n?[^{}]*$/,eC=[],eS="__LUMA_INJECT_DECLARATIONS__";function eM(e,t,i,r=!1){let n="vertex"===t;for(let t in i){let r=i[t];r.sort((e,t)=>e.order-t.order),eC.length=r.length;for(let e=0,t=r.length;e<t;++e)eC[e]=r[e].injection;let s=`${eC.join("\n")}
`;switch(t){case"vs:#decl":n&&(e=e.replace(eS,s));break;case"vs:#main-start":n&&(e=e.replace(ew,e=>e+s));break;case"vs:#main-end":n&&(e=e.replace(eP,e=>s+e));break;case"fs:#decl":n||(e=e.replace(eS,s));break;case"fs:#main-start":n||(e=e.replace(ew,e=>e+s));break;case"fs:#main-end":n||(e=e.replace(eP,e=>s+e));break;default:e=e.replace(t,e=>e+s)}}return e=e.replace(eS,""),r&&(e=e.replace(/\}\s*$/,e=>e+ex[t])),e}function eE(e){e.map(e=>(function(e){var t;if(e.instance)return;eE(e.dependencies||[]);let{propTypes:i={},deprecations:r=[],inject:n={}}=e,s={normalizedInjections:function(e){let t={vertex:{},fragment:{}};for(let i in e){let r=e[i];"string"==typeof r&&(r={order:0,injection:r}),t[function(e){let t=e.slice(0,2);switch(t){case"vs":return"vertex";case"fs":return"fragment";default:throw Error(t)}}(i)][i]=r}return t}(n),parsedDeprecations:((t=r).forEach(e=>{"function"===e.type?e.regex=RegExp(`\\b${e.old}\\(`):e.regex=RegExp(`${e.type} ${e.old};`)}),t)};i&&(s.propValidators=function(e){let t={};for(let[i,r]of Object.entries(e))t[i]=function(e){let t=e_(e);if("object"!==t)return{value:e,...eb[t],type:t};if("object"==typeof e)return e?void 0!==e.type?{...e,...eb[e.type],type:e.type}:void 0===e.value?{type:"object",value:e}:(t=e_(e.value),{...e,...eb[t],type:t}):{type:"object",value:null};throw Error("props")}(r);return t}(i)),e.instance=s;let o={};i&&(o=Object.entries(i).reduce((e,[t,i])=>{let r=i?.value;return r&&(e[t]=r),e},{})),e.defaultUniforms={...e.defaultUniforms,...o}})(e))}function eL(e,t,i){e.deprecations?.forEach(e=>{e.regex?.test(t)&&(e.deprecated?i.deprecated(e.old,e.new)():i.removed(e.old,e.new)())})}function eA(e){eE(e);let t={},i={};!function e(t){let{modules:i,level:r,moduleMap:n,moduleDepth:s}=t;if(r>=5)throw Error("Possible loop in shader dependency graph");for(let e of i)n[e.name]=e,(void 0===s[e.name]||s[e.name]<r)&&(s[e.name]=r);for(let t of i)t.dependencies&&e({modules:t.dependencies,level:r+1,moduleMap:n,moduleDepth:s})}({modules:e,level:0,moduleMap:t,moduleDepth:i});let r=Object.keys(i).sort((e,t)=>i[t]-i[e]).map(e=>t[e]);return eE(r),r}let eT=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,"#version 300 es\n"],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],ek=[...eT,[eI("attribute"),"in $1"],[eI("varying"),"out $1"]],eR=[...eT,[eI("varying"),"in $1"]];function eO(e,t){for(let[i,r]of t)e=e.replace(i,r);return e}function eI(e){return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,"g")}function ej(e,t){if(!e){let e=Error(t||"shadertools: assertion failed.");throw Error.captureStackTrace?.(e,ej),e}}let ez=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,eD=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function eN(e){return`${e.name}Uniforms`}function eF(e){let t=[];for(let i of e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"").matchAll(eD)){let e=i[1]?.trim()||null;t.push({blockName:i[2],body:i[3],instanceName:i[4]||null,layoutQualifier:e,hasLayoutQualifier:!!e,isStd140:!!(e&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(e))})}return t}function eB(e,t=8){if(e.length<=t)return e.join(", ");let i=e.length-t;return`${e.slice(0,t).join(", ")}, ... (${i} more)`}function eU(e,t){let i="";for(let r in e){let n=e[r];if(i+=`void ${n.signature} {
`,n.header&&(i+=`  ${n.header}`),t[r]){let e=t[r];for(let t of(e.sort((e,t)=>e.order-t.order),e))i+=`  ${t.injection}
`}n.footer&&(i+=`  ${n.footer}`),i+="}\n"}return i}function eV(e){let t={vertex:{},fragment:{}};for(let i of e){let e,r;"string"!=typeof i?r=(e=i).hook:(e={},r=i);let[n,s]=(r=r.trim()).split(":"),o=r.replace(/\(.+/,""),a=Object.assign(e,{signature:s});switch(n){case"vs":t.vertex[o]=a;break;case"fs":t.fragment[o]=a;break;default:throw Error(n)}}return t}let e$="(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)",eW=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${e$}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${e$}`,"g")],eG=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${e$}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${e$}`,"g")],eH=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${e$}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${e$}`,"g")],eq=[RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${e$}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${e$}`,"g"),RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${e$}`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${e$}`,"g")];function eY(e){let t=e.split(""),i=0,r=0,n=!1,s=!1,o=!1;for(;i<e.length;){let a=e[i],l=e[i+1];if(s){o?o=!1:"\\"===a?o=!0:'"'===a&&(s=!1),i++;continue}if(n){"\n"===a||"\r"===a?n=!1:t[i]=" ",i++;continue}if(r>0){if("/"===a&&"*"===l){t[i]=" ",t[i+1]=" ",r++,i+=2;continue}if("*"===a&&"/"===l){t[i]=" ",t[i+1]=" ",r--,i+=2;continue}"\n"!==a&&"\r"!==a&&(t[i]=" "),i++;continue}if('"'===a){s=!0,i++;continue}if("/"===a&&"/"===l){t[i]=" ",t[i+1]=" ",n=!0,i+=2;continue}if("/"===a&&"*"===l){t[i]=" ",t[i+1]=" ",r=1,i+=2;continue}i++}return t.join("")}function eK(e,t){let i=eY(e),r=[];for(let n of t){let s;for(n.lastIndex=0,s=n.exec(i);s;){let o=n===t[0],a=s.index,l=s[0].length;r.push({match:e.slice(a,a+l),index:a,length:l,bindingToken:s[o?1:2],groupToken:s[o?2:1],accessDeclaration:s[3]?.trim(),name:s[4]}),s=n.exec(i)}}return r.sort((e,t)=>e.index-t.index)}function eZ(e,t,i){let r=eK(e,t);if(!r.length)return e;let n="",s=0;for(let t of r)n+=e.slice(s,t.index),n+=i(t),s=t.index+t.length;return n+e.slice(s)}function eX(e){return/@binding\(\s*auto\s*\)/.test(eY(e))}let eJ=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${e$}\\s*:\\s*([^;]+);`,"g"),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${e$}\\s*:\\s*([^;]+);`,"g")];function eQ(e,t=[]){let i=eY(e),r=new Map;for(let e of t)r.set(e0(e.name,e.group,e.location),e.moduleName);let n=[];for(let e of eJ){let t;for(e.lastIndex=0,t=e.exec(i);t;){let s=e===eJ[0],o=Number(t[s?1:2]),a=Number(t[s?2:1]),l=t[3]?.trim(),c=t[4],u=t[5].trim(),h=r.get(e0(c,a,o));n.push(function(e){var t;let i={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:"unknown",moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let t=e.accessDeclaration.split(",").map(e=>e.trim());if("uniform"===t[0])return{...i,kind:"uniform",access:"uniform"};if("storage"===t[0]){let e=t[1]||"read_write";return{...i,kind:"read"===e?"read-only-storage":"storage",access:e}}}return"sampler"===e.resourceType||"sampler_comparison"===e.resourceType?{...i,kind:"sampler",samplerKind:"sampler_comparison"===e.resourceType?"comparison":"filtering"}:e.resourceType.startsWith("texture_storage_")?{...i,kind:"storage-texture",access:function(e){let t=/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e);return t?.[1]}(e.resourceType),viewDimension:e1(e.resourceType)}:e.resourceType.startsWith("texture_")?{...i,kind:"texture",viewDimension:e1(e.resourceType),sampleType:(t=e.resourceType).startsWith("texture_depth_")?"depth":t.includes("<i32>")?"sint":t.includes("<u32>")?"uint":t.includes("<f32>")?"float":void 0,multisampled:e.resourceType.startsWith("texture_multisampled_")}:i}({name:c,group:a,binding:o,owner:h?"module":"application",moduleName:h,accessDeclaration:l,resourceType:u})),t=e.exec(i)}}return n.sort((e,t)=>e.group!==t.group?e.group-t.group:e.binding!==t.binding?e.binding-t.binding:e.name.localeCompare(t.name))}function e0(e,t,i){return`${t}:${i}:${e}`}function e1(e){return e.includes("cube_array")?"cube-array":e.includes("2d_array")?"2d-array":e.includes("cube")?"cube":e.includes("3d")?"3d":e.includes("2d")?"2d":e.includes("1d")?"1d":void 0}let e2=`

${eS}
`,e3=`\
precision highp float;
`;function e4(e,t){let{source:i,stage:r,language:n="glsl",modules:s,defines:o={},hookFunctions:a=[],inject:l={},prologue:c=!0,log:u}=t;ej("string"==typeof i,"shader source must be a string");let h="glsl"===n?({name:function(e,t="unnamed"){let i=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return i?i[1]:t}(i,void 0),language:"glsl",version:function(e){let t=100,i=e.match(/[^\s]+/g);if(i&&i.length>=2&&"#version"===i[0]){let e=parseInt(i[1],10);Number.isFinite(e)&&(t=e)}if(100!==t&&300!==t)throw Error(`Invalid GLSL version ${t}`);return t}(i)}).version:-1,d=e.shaderLanguageVersion,p=100===h?"#version 100":"#version 300 es",f=i.split("\n").slice(1).join("\n"),g={};s.forEach(e=>{Object.assign(g,e.defines)}),Object.assign(g,o);let m="";switch(n){case"wgsl":break;case"glsl":m=c?`\
${p}

// ----- PROLOGUE -------------------------
#define SHADER_TYPE_${r.toUpperCase()}

${function(e){switch(e?.gpu.toLowerCase()){case"apple":return`\
#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"nvidia":return`\
#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case"intel":return`\
#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"amd":return`\
#define AMD_GPU
`;default:return`\
#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}(e)}
${"fragment"===r?e3:""}

// ----- APPLICATION DEFINES -------------------------

${function(e={}){let t="";for(let i in e){let r=e[i];(r||Number.isFinite(r))&&(t+=`#define ${i.toUpperCase()} ${e[i]}
`)}return t}(g)}

`:`${p}
`}let y=eV(a),v={},b={},_={};for(let e in l){let t="string"==typeof l[e]?{injection:l[e],order:0}:l[e],i=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(i){let r=i[2],n=i[3];r?"decl"===n?b[e]=[t]:_[e]=[t]:v[e]=[t]}else _[e]=[t]}for(let e of s){u&&eL(e,f,u),m+=e6(e,r,u);let t=e.instance?.normalizedInjections[r]||{};for(let e in t){let i=/^(v|f)s:#([\w-]+)$/.exec(e);if(i){let r="decl"===i[2]?b:_;r[e]=r[e]||[],r[e].push(t[e])}else v[e]=v[e]||[],v[e].push(t[e])}}return m+="// ----- MAIN SHADER SOURCE -------------------------",m+=e2,m=eM(m,r,b)+eU(y[r],v)+f,m=eM(m,r,_),"glsl"===n&&h!==d&&(m=function(e,t){if(300!==Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100))throw Error("luma.gl v9 only supports GLSL 3.00 shader sources");switch(t){case"vertex":return eO(e,ek);case"fragment":return eO(e,eR);default:throw Error(t)}}(m,r)),"glsl"===n&&function(e,t,i){let r=eF(e).filter(e=>!e.isStd140),n=new Set;for(let e of r){if(n.has(e.blockName))continue;n.add(e.blockName);let r=e.hasLayoutQualifier?`declares ${e.layoutQualifier.replace(/\s+/g," ").trim()} instead of layout(std140)`:"does not declare layout(std140)",s=`${t} shader uniform block ${e.blockName} ${r}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;i?.warn?.(s,e)()}}(m,r,u),m.trim()}function e5(e){return function(t){let i={};for(let r of e){let e=r.getUniforms?.(t,i);Object.assign(i,e)}return i}}function e6(e,t,i){let r;switch(t){case"vertex":r=e.vs||"";break;case"fragment":r=e.fs||"";break;case"wgsl":r=e.source||"";break;default:ej(!1)}if(!e.name)throw Error("Shader module must have a name");!function(e,t,i={}){let r=function(e,t){let i,r=Object.keys(e.uniformTypes||{});if(!r.length)return null;let n=(i="wgsl"===t?e.source:"vertex"===t?e.vs:e.fs)?function(e,t,i){var r,n;let s,o="wgsl"===t?function(e,t){let i=RegExp(`\\bstruct\\s+${t}\\b`,"m").exec(e);if(!i)return null;let r=e.indexOf("{",i.index);if(r<0)return null;let n=0;for(let t=r;t<e.length;t++){let i=e[t];if("{"===i){n++;continue}if("}"===i&&0==--n)return e.slice(r+1,t)}return null}(e,i):(r=e,n=i,s=eF(r).find(e=>e.blockName===n),s?.body||null);if(!o)return null;let a=[];for(let e of o.split("\n")){let i=e.replace(/\/\/.*$/,"").trim();if(!i||i.startsWith("#"))continue;let r="wgsl"===t?i.match(/^([A-Za-z0-9_]+)\s*:/):i.match(ez);r&&a.push(r[1])}return a}(i,"wgsl"===t?"wgsl":"glsl",eN(e)):null;return n?{moduleName:e.name,uniformBlockName:eN(e),stage:t,expectedUniformNames:r,actualUniformNames:n,matches:function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(r,n)}:null}(e,t);if(!r||r.matches)return;let n=function(e){let{expectedUniformNames:t,actualUniformNames:i}=e,r=t.filter(e=>!i.includes(e)),n=i.filter(e=>!t.includes(e)),s=[`Expected ${t.length} fields, found ${i.length}.`],o=function(e,t){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}(t,i);return o&&s.push(o),r.length&&s.push(`Missing from shader block (${r.length}): ${eB(r)}.`),n.length&&s.push(`Unexpected in shader block (${n.length}): ${eB(n)}.`),t.length<=12&&i.length<=12&&(r.length||n.length)&&(s.push(`Expected: ${t.join(", ")}.`),s.push(`Actual: ${i.join(", ")}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${s.join(" ")}`}(r);i.log?.error?.(n,r)(),!1!==i.throwOnError&&ej(!1,n)}(e,t,{log:i});let n=e.name.toUpperCase().replace(/[^0-9a-z]/gi,"_"),s=`\
// ----- MODULE ${e.name} ---------------

`;return"wgsl"!==t&&(s+=`#define MODULE_${n}
`),s+=`${r}
`}function e8(e,t,i){if(0===e&&t>=100)throw Error(`Application binding "${i}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below 100.`)}function e9(e,t,i,r){if(0===t&&i<100)throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${i}. Module-owned explicit group-0 bindings must be 100 or higher.`)}function e7(e,t,i,r){let n=e.get(t)||new Set;if(n.has(i))throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${i}.`);n.add(i),e.set(t,n)}function te(e,t,i){let r=t.get(e)||new Set,n=i??(0===e?100:r.size>0?Math.max(...r)+1:0);for(;r.has(n);)n++;return n}function tt(e,t,i){return`${e}:${t}:${i}`}let ti="([a-zA-Z_][a-zA-Z0-9_]*)",tr=RegExp(`^\\s*\\#\\s*ifdef\\s*${ti}\\s*$`),tn=RegExp(`^\\s*\\#\\s*ifndef\\s*${ti}\\s*(?:\\/\\/.*)?$`),ts=/^\s*\#\s*else\s*(?:\/\/.*)?$/,to=/^\s*\#\s*endif\s*$/,ta=RegExp(`^\\s*\\#\\s*ifdef\\s*${ti}\\s*(?:\\/\\/.*)?$`),tl=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;class tc{static defaultShaderAssembler;_hookFunctions=[];_defaultModules=[];_wgslBindingRegistry=new Map;static getDefaultShaderAssembler(){return tc.defaultShaderAssembler=tc.defaultShaderAssembler||new tc,tc.defaultShaderAssembler}addDefaultModule(e){this._defaultModules.find(t=>t.name===("string"==typeof e?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let t="string"==typeof e?e:e.name;this._defaultModules=this._defaultModules.filter(e=>e.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}assembleWGSLShader(e){let t=this._getModuleList(e.modules),i=this._hookFunctions,{source:r,getUniforms:n,bindingAssignments:s}=function(e){let t=eA(e.modules||[]),{source:i,bindingAssignments:r}=function(e,t){let{source:i,stage:r,modules:n,hookFunctions:s=[],inject:o={},log:a}=t;ej("string"==typeof i,"shader source must be a string");let l="",c=eV(s),u={},h={},d={};for(let e in o){let t="string"==typeof o[e]?{injection:o[e],order:0}:o[e],i=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(i){let r=i[2],n=i[3];r?"decl"===n?h[e]=[t]:d[e]=[t]:u[e]=[t]}else d[e]=[t]}let p=function(e){let t=eK(e,eG),i=new Map;for(let e of t){if("auto"===e.bindingToken)continue;let t=Number(e.bindingToken),r=Number(e.groupToken);e8(r,t,e.name),e7(i,r,t,`application binding "${e.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},n=eZ(e,eG,e=>(function(e,t,i){let{match:r,bindingToken:n,groupToken:s,name:o}=e,a=Number(s);if("auto"===n){let e=function(e,t){let i=t.get(e)||new Set,r=0;for(;i.has(r);)r++;return r}(a,t);return e8(a,e,o),e7(t,a,e,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${e})`)}return i.sawSupportedBindingDeclaration=!0,r})(e,i,r));if(eX(e)&&!r.sawSupportedBindingDeclaration)throw Error('Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.');return{source:n}}(i),f=function(e){let t=new Map;for(let i of eK(e,eH)){let e=Number(i.bindingToken),r=Number(i.groupToken);e8(r,e,i.name),e7(t,r,e,`application binding "${i.name}"`)}return t}(p.source),g=function(e,t,i){let r=new Map;if(!t)return r;for(let n of e)for(let e of function(e){let t=[];for(let i of eK(e.source||"",eW))t.push({name:i.name,group:Number(i.groupToken)});return t}(n)){let s=tt(e.group,n.name,e.name),o=t.get(s);if(void 0!==o){let t=r.get(e.group)||new Map,n=t.get(o);if(n&&n!==s)throw Error(`Duplicate WGSL binding reservation for modules "${n}" and "${s}": group ${e.group}, binding ${o}.`);e7(i,e.group,o,`registered module binding "${s}"`),t.set(o,s),r.set(e.group,t)}}return r}(n,t._bindingRegistry,f),m=[];for(let e of n){a&&eL(e,i,a);let n=function(e,t,i){let r=[],n={sawSupportedBindingDeclaration:eK(e,eW).length>0,nextHintedBindingLocation:"number"==typeof t.firstBindingSlot?t.firstBindingSlot:null},s=eZ(e,eW,e=>(function(e,t){let{module:i,context:r,bindingAssignments:n,relocationState:s}=t,{match:o,bindingToken:a,groupToken:l,name:c}=e,u=Number(l);if("auto"===a){let e=tt(u,i.name,c),t=r.bindingRegistry?.get(e),a=void 0!==t?t:null===s.nextHintedBindingLocation?te(u,r.usedBindingsByGroup):te(u,r.usedBindingsByGroup,s.nextHintedBindingLocation);return(e9(i.name,u,a,c),void 0!==t&&function(e,t,i,r){let n=e.get(t);if(!n)return!1;let s=n.get(i);if(!s)return!1;if(s!==r)throw Error(`Registered module binding "${r}" collided with "${s}": group ${t}, binding ${i}.`);return!0}(r.reservedBindingKeysByGroup,u,a,e))?n.push({moduleName:i.name,name:c,group:u,location:a}):(e7(r.usedBindingsByGroup,u,a,`module "${i.name}" binding "${c}"`),r.bindingRegistry?.set(e,a),n.push({moduleName:i.name,name:c,group:u,location:a}),null!==s.nextHintedBindingLocation&&void 0===t&&(s.nextHintedBindingLocation=a+1)),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${a})`)}let h=Number(a);return e9(i.name,u,h,c),e7(r.usedBindingsByGroup,u,h,`module "${i.name}" binding "${c}"`),n.push({moduleName:i.name,name:c,group:u,location:h}),o})(e,{module:t,context:i,bindingAssignments:r,relocationState:n}));if(eX(e)&&!n.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:s,bindingAssignments:r}}(e6(e,"wgsl",a),e,{usedBindingsByGroup:f,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:g});m.push(...n.bindingAssignments),l+=n.source;let s=e.injections?.[r]||{};for(let e in s){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let i="decl"===t[2]?h:d;i[e]=i[e]||[],i[e].push(s[e])}else u[e]=u[e]||[],u[e].push(s[e])}}return l+=e2,l=eM(l,r,h)+eU(c[r],u)+function(e){if(0===e.length)return"";let t="// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------\n";for(let i of e)t+=`// ${i.moduleName}.${i.name} -> @group(${i.group}) @binding(${i.location})
`;return t+"\n"}(m)+p.source,function(e){var t,i;let r,n=eK(e,eW==eW||eW===eG?eq:eW).find(e=>"auto"===e.bindingToken);if(!n)return;let s=function(e,t){let i,r,n=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm;for(r=n.exec(e);r&&r.index<=t;)i=r[1],r=n.exec(e);return i}(e,n.index);if(s)throw Error(`Unresolved @binding(auto) for module "${s}" binding "${n.name}" remained in assembled WGSL source.`);if(t=e,i=n.index,!((r=t.indexOf(e2))>=0)||i>r)throw Error(`Unresolved @binding(auto) for application binding "${n.name}" remained in assembled WGSL source.`);throw Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${n.match.replace(/\s+/g," ").trim()}".`)}(l=eM(l,r,d)),{source:l,bindingAssignments:m}}(e.platformInfo,{...e,source:e.source,stage:"vertex",modules:t});return{source:i,getUniforms:e5(t),bindingAssignments:r,bindingTable:eQ(i,r)}}({...e,source:e.source,_bindingRegistry:this._wgslBindingRegistry,modules:t,hookFunctions:i}),o={...t.reduce((e,t)=>(Object.assign(e,t.defines),e),{}),...e.defines},a="wgsl"===e.platformInfo.shaderLanguage?function(e,t){let i=e.split("\n"),r=[],n=[],s=!0;for(let e of i){let i=e.match(ta)||e.match(tr),o=e.match(tn),a=e.match(ts),l=e.match(tl)||e.match(to);if(i||o){let e=(i||o)?.[1],r=!!t?.defines?.[e],a=i?r:!r,l=s&&a;n.push({parentActive:s,branchTaken:a,active:l}),s=l}else if(a){let e=n[n.length-1];if(!e)throw Error("Encountered #else without matching #ifdef or #ifndef");e.active=e.parentActive&&!e.branchTaken,e.branchTaken=!0,s=e.active}else l?(n.pop(),s=!n.length||n[n.length-1].active):s&&r.push(e)}if(n.length>0)throw Error("Unterminated conditional block in shader source");return r.join("\n")}(r,{defines:o}):r;return{source:a,getUniforms:n,modules:t,bindingAssignments:s,bindingTable:eQ(a,s)}}assembleGLSLShaderPair(e){let t=this._getModuleList(e.modules),i=this._hookFunctions;return{...function(e){let{vs:t,fs:i}=e,r=eA(e.modules||[]);return{vs:e4(e.platformInfo,{...e,source:t,stage:"vertex",modules:r}),fs:e4(e.platformInfo,{...e,source:i,stage:"fragment",modules:r}),getUniforms:e5(r)}}({...e,vs:e.vs,fs:e.fs,modules:t,hookFunctions:i}),modules:t}}_getModuleList(e=[]){let t=Array(this._defaultModules.length+e.length),i={},r=0;for(let e=0,n=this._defaultModules.length;e<n;++e){let n=this._defaultModules[e],s=n.name;t[r++]=n,i[s]=!0}for(let n=0,s=e.length;n<s;++n){let s=e[n],o=s.name;i[o]||(t[r++]=s,i[o]=!0)}return t.length=r,eE(t),t}}let tu=`\
layout(std140) uniform floatColorsUniforms {
  float useByteColors;
} floatColors;

vec3 floatColors_normalize(vec3 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_normalize(vec4 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 floatColors_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 floatColors_premultiply_alpha(vec4 inputColor) {
  return floatColors_premultiplyAlpha(inputColor);
}

vec4 floatColors_unpremultiply_alpha(vec4 inputColor) {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,th={name:"floatColors",props:{},uniforms:{},vs:tu,fs:tu,source:`\
struct floatColorsUniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> floatColors : floatColorsUniforms;

fn floatColors_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn floatColors_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn floatColors_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_premultiplyAlpha(inputColor);
}

fn floatColors_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,uniformTypes:{useByteColors:"f32"},defaultUniforms:{useByteColors:!0}};var td=e.i(12828);let tp=`\
precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,tf=`\
// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`;function tg(e,t=!0){return e??t}function tm(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}let ty={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",directionalLightCount:"i32",pointLightCount:"i32",spotLightCount:"i32",ambientColor:"vec3<f32>",lights:[{color:"vec3<f32>",position:"vec3<f32>",direction:"vec3<f32>",attenuation:"vec3<f32>",coneCos:"vec2<f32>"},5]},defaultUniforms:tb(),bindingLayout:[{name:"lighting",group:2}],firstBindingSlot:0,source:tf,vs:tp,fs:tp,getUniforms:function(e,t={}){if(!(e=e?{...e}:e))return tb();e.lights&&(e={...e,...function(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let i of e||[])switch(i.type){case"ambient":t.ambientLight=i;break;case"directional":t.directionalLights?.push(i);break;case"point":t.pointLights?.push(i);break;case"spot":t.spotLights?.push(i)}return t}(e.lights),lights:void 0});let{useByteColors:i,ambientLight:r,pointLights:n,spotLights:s,directionalLights:o}=e||{};if(!(r||n&&n.length>0||s&&s.length>0||o&&o.length>0))return{...tb(),enabled:0};let a={...tb(),...function({useByteColors:e,ambientLight:t,pointLights:i=[],spotLights:r=[],directionalLights:n=[]}){let s=t_(),o=0,a=0,l=0,c=0;for(let t of i){if(o>=5)break;s[o]={...s[o],color:tv(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},o++,a++}for(let t of r){var u;if(o>=5)break;s[o]={...s[o],color:tv(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:[Math.cos((u=t).innerConeAngle??0),Math.cos(u.outerConeAngle??Math.PI/4)]},o++,l++}for(let t of n){if(o>=5)break;s[o]={...s[o],color:tv(t,e),direction:t.direction},o++,c++}return i.length+r.length+n.length>5&&td.log.warn("MAX_LIGHTS exceeded, truncating to 5")(),{ambientColor:tv(t,e),directionalLightCount:c,pointLightCount:a,spotLightCount:l,lights:s}}({useByteColors:i,ambientLight:r,pointLights:n,spotLights:s,directionalLights:o})};return void 0!==e.enabled&&(a.enabled=+!!e.enabled),a}};function tv(e={},t){let{color:i=[0,0,0],intensity:r=1}=e;return tm(i,tg(t,!0)).map(e=>e*r)}function tb(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:t_()}}function t_(){return Array.from({length:5},()=>({color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}))}let tx=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,tw=`\
layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,tP=`\
struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,tC={props:{},name:"gouraudMaterial",bindingLayout:[{name:"gouraudMaterial",group:3}],vs:tw.replace("phongMaterial","gouraudMaterial"),fs:tx.replace("phongMaterial","gouraudMaterial"),source:tP.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[ty,th],uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...tC.defaultUniforms,...e})},tS={name:"phongMaterial",firstBindingSlot:0,bindingLayout:[{name:"phongMaterial",group:3}],dependencies:[ty,th],source:tP,vs:tx,fs:tw,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{unlit:"i32",ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms:e=>({...tS.defaultUniforms,...e})},tM=`\
layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,tE={name:"layer",source:`\
struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,vs:tM,fs:tM,getUniforms:e=>({opacity:Math.pow(e.opacity,1/2.2)}),uniformTypes:{opacity:"f32"}},tL={name:"color",dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:e=>({})},tA="#define SMOOTH_EDGE_RADIUS 0.5",tT={name:"geometry",source:`\
const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,vs:`\
${tA}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${tA}

struct FragmentGeometry {
  vec2 uv;
} geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`},tk=`\
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`,tR="u">typeof Float32Array?Float32Array:Array,tO=Math.random;function tI(e){return e>=0?Math.round(e):e%.5==0?Math.floor(e):Math.round(e)}function tj(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function tz(e,t){if(e===t){let i=t[1],r=t[2],n=t[3],s=t[6],o=t[7],a=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=i,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=s,e[11]=t[14],e[12]=n,e[13]=o,e[14]=a}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function tD(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],f=t[12],g=t[13],m=t[14],y=t[15],v=i*a-r*o,b=i*l-n*o,_=i*c-s*o,x=r*l-n*a,w=r*c-s*a,P=n*c-s*l,C=u*g-h*f,S=u*m-d*f,M=u*y-p*f,E=h*m-d*g,L=h*y-p*g,A=d*y-p*m,T=v*A-b*L+_*E+x*M-w*S+P*C;return T?(T=1/T,e[0]=(a*A-l*L+c*E)*T,e[1]=(n*L-r*A-s*E)*T,e[2]=(g*P-m*w+y*x)*T,e[3]=(d*w-h*P-p*x)*T,e[4]=(l*M-o*A-c*S)*T,e[5]=(i*A-n*M+s*S)*T,e[6]=(m*_-f*P-y*b)*T,e[7]=(u*P-d*_+p*b)*T,e[8]=(o*L-a*M+c*C)*T,e[9]=(r*M-i*L-s*C)*T,e[10]=(f*w-g*_+y*v)*T,e[11]=(h*_-u*w-p*v)*T,e[12]=(a*S-o*E-l*C)*T,e[13]=(i*E-r*S+n*C)*T,e[14]=(g*b-f*x-m*v)*T,e[15]=(u*x-h*b+d*v)*T,e):null}function tN(e){let t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],h=e[10],d=e[11],p=e[12],f=e[13],g=e[14],m=e[15],y=t*o-i*s,v=t*a-r*s,b=i*a-r*o,_=c*f-u*p,x=c*g-h*p,w=u*g-h*f;return l*(t*w-i*x+r*_)-n*(s*w-o*x+a*_)+m*(c*b-u*v+h*y)-d*(p*b-f*v+g*y)}function tF(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],m=t[13],y=t[14],v=t[15],b=i[0],_=i[1],x=i[2],w=i[3];return e[0]=b*r+_*a+x*h+w*g,e[1]=b*n+_*l+x*d+w*m,e[2]=b*s+_*c+x*p+w*y,e[3]=b*o+_*u+x*f+w*v,b=i[4],_=i[5],x=i[6],w=i[7],e[4]=b*r+_*a+x*h+w*g,e[5]=b*n+_*l+x*d+w*m,e[6]=b*s+_*c+x*p+w*y,e[7]=b*o+_*u+x*f+w*v,b=i[8],_=i[9],x=i[10],w=i[11],e[8]=b*r+_*a+x*h+w*g,e[9]=b*n+_*l+x*d+w*m,e[10]=b*s+_*c+x*p+w*y,e[11]=b*o+_*u+x*f+w*v,b=i[12],_=i[13],x=i[14],w=i[15],e[12]=b*r+_*a+x*h+w*g,e[13]=b*n+_*l+x*d+w*m,e[14]=b*s+_*c+x*p+w*y,e[15]=b*o+_*u+x*f+w*v,e}function tB(e,t,i){let r,n,s,o,a,l,c,u,h,d,p,f,g=i[0],m=i[1],y=i[2];return t===e?(e[12]=t[0]*g+t[4]*m+t[8]*y+t[12],e[13]=t[1]*g+t[5]*m+t[9]*y+t[13],e[14]=t[2]*g+t[6]*m+t[10]*y+t[14],e[15]=t[3]*g+t[7]*m+t[11]*y+t[15]):(r=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],f=t[11],e[0]=r,e[1]=n,e[2]=s,e[3]=o,e[4]=a,e[5]=l,e[6]=c,e[7]=u,e[8]=h,e[9]=d,e[10]=p,e[11]=f,e[12]=r*g+a*m+h*y+t[12],e[13]=n*g+l*m+d*y+t[13],e[14]=s*g+c*m+p*y+t[14],e[15]=o*g+u*m+f*y+t[15]),e}function tU(e,t,i){let r=i[0],n=i[1],s=i[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function tV(e,t,i,r){let n,s,o,a,l,c,u,h,d,p,f,g,m,y,v,b,_,x,w,P,C,S,M,E,L=r[0],A=r[1],T=r[2],k=Math.sqrt(L*L+A*A+T*T);return k<1e-6?null:(L*=k=1/k,A*=k,T*=k,s=Math.sin(i),o=1-(n=Math.cos(i)),a=t[0],l=t[1],c=t[2],u=t[3],h=t[4],d=t[5],p=t[6],f=t[7],g=t[8],m=t[9],y=t[10],v=t[11],b=L*L*o+n,_=A*L*o+T*s,x=T*L*o-A*s,w=L*A*o-T*s,P=A*A*o+n,C=T*A*o+L*s,S=L*T*o+A*s,M=A*T*o-L*s,E=T*T*o+n,e[0]=a*b+h*_+g*x,e[1]=l*b+d*_+m*x,e[2]=c*b+p*_+y*x,e[3]=u*b+f*_+v*x,e[4]=a*w+h*P+g*C,e[5]=l*w+d*P+m*C,e[6]=c*w+p*P+y*C,e[7]=u*w+f*P+v*C,e[8]=a*S+h*M+g*E,e[9]=l*S+d*M+m*E,e[10]=c*S+p*M+y*E,e[11]=u*S+f*M+v*E,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function t$(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],u=t[9],h=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*n+c*r,e[5]=o*n+u*r,e[6]=a*n+h*r,e[7]=l*n+d*r,e[8]=c*n-s*r,e[9]=u*n-o*r,e[10]=h*n-a*r,e[11]=d*n-l*r,e}function tW(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],c=t[8],u=t[9],h=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*n-c*r,e[1]=o*n-u*r,e[2]=a*n-h*r,e[3]=l*n-d*r,e[8]=s*r+c*n,e[9]=o*r+u*n,e[10]=a*r+h*n,e[11]=l*r+d*n,e}function tG(e,t,i){let r=Math.sin(i),n=Math.cos(i),s=t[0],o=t[1],a=t[2],l=t[3],c=t[4],u=t[5],h=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*n+c*r,e[1]=o*n+u*r,e[2]=a*n+h*r,e[3]=l*n+d*r,e[4]=c*n-s*r,e[5]=u*n-o*r,e[6]=h*n-a*r,e[7]=d*n-l*r,e}function tH(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3],a=r+r,l=n+n,c=s+s,u=r*a,h=r*l,d=r*c,p=n*l,f=n*c,g=s*c,m=o*a,y=o*l,v=o*c;return e[0]=1-(p+g),e[1]=h+v,e[2]=d-y,e[3]=0,e[4]=h-v,e[5]=1-(u+g),e[6]=f+m,e[7]=0,e[8]=d+y,e[9]=f-m,e[10]=1-(u+p),e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e}function tq(e,t){let i=t[0],r=t[1],n=t[2],s=t[4],o=t[5],a=t[6],l=t[8],c=t[9],u=t[10];return e[0]=Math.sqrt(i*i+r*r+n*n),e[1]=Math.sqrt(s*s+o*o+a*a),e[2]=Math.sqrt(l*l+c*c+u*u),e}function tY(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=i+i,a=r+r,l=n+n,c=i*o,u=r*o,h=r*a,d=n*o,p=n*a,f=n*l,g=s*o,m=s*a,y=s*l;return e[0]=1-h-f,e[1]=u+y,e[2]=d-m,e[3]=0,e[4]=u-y,e[5]=1-c-f,e[6]=p+g,e[7]=0,e[8]=d+m,e[9]=p-g,e[10]=1-c-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function tK(e,t,i,r,n,s,o){let a=1/(i-t),l=1/(n-r),c=1/(s-o);return e[0]=2*s*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*s*l,e[6]=0,e[7]=0,e[8]=(i+t)*a,e[9]=(n+r)*l,e[10]=(o+s)*c,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*c,e[15]=0,e}function tZ(e,t,i,r,n){let s=1/Math.tan(t/2);if(e[0]=s/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=n&&n!==1/0){let t=1/(r-n);e[10]=(n+r)*t,e[14]=2*n*r*t}else e[10]=-1,e[14]=-2*r;return e}function tX(e,t,i,r,n,s,o){let a=1/(t-i),l=1/(r-n),c=1/(s-o);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*c,e[11]=0,e[12]=(t+i)*a,e[13]=(n+r)*l,e[14]=(o+s)*c,e[15]=1,e}function tJ(e,t,i,r){let n,s,o,a,l,c,u,h,d,p,f=t[0],g=t[1],m=t[2],y=r[0],v=r[1],b=r[2],_=i[0],x=i[1],w=i[2];return 1e-6>Math.abs(f-_)&&1e-6>Math.abs(g-x)&&1e-6>Math.abs(m-w)?tj(e):(n=1/Math.sqrt((h=f-_)*h+(d=g-x)*d+(p=m-w)*p),h*=n,d*=n,p*=n,(n=Math.sqrt((s=v*p-b*d)*s+(o=b*h-y*p)*o+(a=y*d-v*h)*a))?(s*=n=1/n,o*=n,a*=n):(s=0,o=0,a=0),(n=Math.sqrt((l=d*a-p*o)*l+(c=p*s-h*a)*c+(u=h*o-d*s)*u))?(l*=n=1/n,c*=n,u*=n):(l=0,c=0,u=0),e[0]=s,e[1]=l,e[2]=h,e[3]=0,e[4]=o,e[5]=c,e[6]=d,e[7]=0,e[8]=a,e[9]=u,e[10]=p,e[11]=0,e[12]=-(s*f+o*g+a*m),e[13]=-(l*f+c*g+u*m),e[14]=-(h*f+d*g+p*m),e[15]=1,e)}function tQ(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e[4]=t[4]-i[4],e[5]=t[5]-i[5],e[6]=t[6]-i[6],e[7]=t[7]-i[7],e[8]=t[8]-i[8],e[9]=t[9]-i[9],e[10]=t[10]-i[10],e[11]=t[11]-i[11],e[12]=t[12]-i[12],e[13]=t[13]-i[13],e[14]=t[14]-i[14],e[15]=t[15]-i[15],e}e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e[4]=t[4]+i[4],e[5]=t[5]+i[5],e[6]=t[6]+i[6],e[7]=t[7]+i[7],e[8]=t[8]+i[8],e[9]=t[9]+i[9],e[10]=t[10]+i[10],e[11]=t[11]+i[11],e[12]=t[12]+i[12],e[13]=t[13]+i[13],e[14]=t[14]+i[14],e[15]=t[15]+i[15],e},"adjoint",0,function(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],f=t[12],g=t[13],m=t[14],y=t[15],v=i*a-r*o,b=i*l-n*o,_=i*c-s*o,x=r*l-n*a,w=r*c-s*a,P=n*c-s*l,C=u*g-h*f,S=u*m-d*f,M=u*y-p*f,E=h*m-d*g,L=h*y-p*g,A=d*y-p*m;return e[0]=a*A-l*L+c*E,e[1]=n*L-r*A-s*E,e[2]=g*P-m*w+y*x,e[3]=d*w-h*P-p*x,e[4]=l*M-o*A-c*S,e[5]=i*A-n*M+s*S,e[6]=m*_-f*P-y*b,e[7]=u*P-d*_+p*b,e[8]=o*L-a*M+c*C,e[9]=r*M-i*L-s*C,e[10]=f*w-g*_+y*v,e[11]=h*_-u*w-p*v,e[12]=a*S-o*E-l*C,e[13]=i*E-r*S+n*C,e[14]=g*b-f*x-m*v,e[15]=u*x-h*b+d*v,e},"clone",0,function(e){let t=new tR(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},"create",0,function(){let e=new tR(16);return tR!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e},"decompose",0,function(e,t,i,r){t[0]=r[12],t[1]=r[13],t[2]=r[14];let n=r[0],s=r[1],o=r[2],a=r[4],l=r[5],c=r[6],u=r[8],h=r[9],d=r[10];i[0]=Math.sqrt(n*n+s*s+o*o),i[1]=Math.sqrt(a*a+l*l+c*c),i[2]=Math.sqrt(u*u+h*h+d*d);let p=1/i[0],f=1/i[1],g=1/i[2],m=n*p,y=s*f,v=o*g,b=a*p,_=l*f,x=c*g,w=u*p,P=h*f,C=d*g,S=m+_+C,M=0;return S>0?(M=2*Math.sqrt(S+1),e[3]=.25*M,e[0]=(x-P)/M,e[1]=(w-v)/M,e[2]=(y-b)/M):m>_&&m>C?(M=2*Math.sqrt(1+m-_-C),e[3]=(x-P)/M,e[0]=.25*M,e[1]=(y+b)/M,e[2]=(w+v)/M):_>C?(M=2*Math.sqrt(1+_-m-C),e[3]=(w-v)/M,e[0]=(y+b)/M,e[1]=.25*M,e[2]=(x+P)/M):(M=2*Math.sqrt(1+C-m-_),e[3]=(y-b)/M,e[0]=(w+v)/M,e[1]=(x+P)/M,e[2]=.25*M),e},"determinant",0,tN,"equals",0,function(e,t){let i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],y=e[15],v=t[0],b=t[1],_=t[2],x=t[3],w=t[4],P=t[5],C=t[6],S=t[7],M=t[8],E=t[9],L=t[10],A=t[11],T=t[12],k=t[13],R=t[14],O=t[15];return Math.abs(i-v)<=1e-6*Math.max(1,Math.abs(i),Math.abs(v))&&Math.abs(r-b)<=1e-6*Math.max(1,Math.abs(r),Math.abs(b))&&Math.abs(n-_)<=1e-6*Math.max(1,Math.abs(n),Math.abs(_))&&Math.abs(s-x)<=1e-6*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(o-w)<=1e-6*Math.max(1,Math.abs(o),Math.abs(w))&&Math.abs(a-P)<=1e-6*Math.max(1,Math.abs(a),Math.abs(P))&&Math.abs(l-C)<=1e-6*Math.max(1,Math.abs(l),Math.abs(C))&&Math.abs(c-S)<=1e-6*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(u-M)<=1e-6*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(h-E)<=1e-6*Math.max(1,Math.abs(h),Math.abs(E))&&Math.abs(d-L)<=1e-6*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(p-A)<=1e-6*Math.max(1,Math.abs(p),Math.abs(A))&&Math.abs(f-T)<=1e-6*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(g-k)<=1e-6*Math.max(1,Math.abs(g),Math.abs(k))&&Math.abs(m-R)<=1e-6*Math.max(1,Math.abs(m),Math.abs(R))&&Math.abs(y-O)<=1e-6*Math.max(1,Math.abs(y),Math.abs(O))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]},"frob",0,function(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8]+e[9]*e[9]+e[10]*e[10]+e[11]*e[11]+e[12]*e[12]+e[13]*e[13]+e[14]*e[14]+e[15]*e[15])},"fromQuat",0,tY,"fromQuat2",0,function(e,t){let i=new tR(3),r=-t[0],n=-t[1],s=-t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=r*r+n*n+s*s+o*o;return h>0?(i[0]=(a*o+u*r+l*s-c*n)*2/h,i[1]=(l*o+u*n+c*r-a*s)*2/h,i[2]=(c*o+u*s+a*n-l*r)*2/h):(i[0]=(a*o+u*r+l*s-c*n)*2,i[1]=(l*o+u*n+c*r-a*s)*2,i[2]=(c*o+u*s+a*n-l*r)*2),tH(e,t,i),e},"fromRotation",0,function(e,t,i){let r,n,s,o=i[0],a=i[1],l=i[2],c=Math.sqrt(o*o+a*a+l*l);return c<1e-6?null:(o*=c=1/c,a*=c,l*=c,n=Math.sin(t),s=1-(r=Math.cos(t)),e[0]=o*o*s+r,e[1]=a*o*s+l*n,e[2]=l*o*s-a*n,e[3]=0,e[4]=o*a*s-l*n,e[5]=a*a*s+r,e[6]=l*a*s+o*n,e[7]=0,e[8]=o*l*s+a*n,e[9]=a*l*s-o*n,e[10]=l*l*s+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)},"fromRotationTranslation",0,tH,"fromRotationTranslationScale",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2],a=t[3],l=n+n,c=s+s,u=o+o,h=n*l,d=n*c,p=n*u,f=s*c,g=s*u,m=o*u,y=a*l,v=a*c,b=a*u,_=r[0],x=r[1],w=r[2];return e[0]=(1-(f+m))*_,e[1]=(d+b)*_,e[2]=(p-v)*_,e[3]=0,e[4]=(d-b)*x,e[5]=(1-(h+m))*x,e[6]=(g+y)*x,e[7]=0,e[8]=(p+v)*w,e[9]=(g-y)*w,e[10]=(1-(h+f))*w,e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1,e},"fromRotationTranslationScaleOrigin",0,function(e,t,i,r,n){let s=t[0],o=t[1],a=t[2],l=t[3],c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,f=s*h,g=o*u,m=o*h,y=a*h,v=l*c,b=l*u,_=l*h,x=r[0],w=r[1],P=r[2],C=n[0],S=n[1],M=n[2],E=(1-(g+y))*x,L=(p+_)*x,A=(f-b)*x,T=(p-_)*w,k=(1-(d+y))*w,R=(m+v)*w,O=(f+b)*P,I=(m-v)*P,j=(1-(d+g))*P;return e[0]=E,e[1]=L,e[2]=A,e[3]=0,e[4]=T,e[5]=k,e[6]=R,e[7]=0,e[8]=O,e[9]=I,e[10]=j,e[11]=0,e[12]=i[0]+C-(E*C+T*S+O*M),e[13]=i[1]+S-(L*C+k*S+I*M),e[14]=i[2]+M-(A*C+R*S+j*M),e[15]=1,e},"fromScaling",0,function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"fromTranslation",0,function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e},"fromValues",0,function(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g){let m=new tR(16);return m[0]=e,m[1]=t,m[2]=i,m[3]=r,m[4]=n,m[5]=s,m[6]=o,m[7]=a,m[8]=l,m[9]=c,m[10]=u,m[11]=h,m[12]=d,m[13]=p,m[14]=f,m[15]=g,m},"fromXRotation",0,function(e,t){let i=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=i,e[7]=0,e[8]=0,e[9]=-i,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"fromYRotation",0,function(e,t){let i=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-i,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=i,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"fromZRotation",0,function(e,t){let i=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=i,e[2]=0,e[3]=0,e[4]=-i,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},"frustum",0,tK,"getRotation",0,function(e,t){let i=new tR(3);tq(i,t);let r=1/i[0],n=1/i[1],s=1/i[2],o=t[0]*r,a=t[1]*n,l=t[2]*s,c=t[4]*r,u=t[5]*n,h=t[6]*s,d=t[8]*r,p=t[9]*n,f=t[10]*s,g=o+u+f,m=0;return g>0?(m=2*Math.sqrt(g+1),e[3]=.25*m,e[0]=(h-p)/m,e[1]=(d-l)/m,e[2]=(a-c)/m):o>u&&o>f?(m=2*Math.sqrt(1+o-u-f),e[3]=(h-p)/m,e[0]=.25*m,e[1]=(a+c)/m,e[2]=(d+l)/m):u>f?(m=2*Math.sqrt(1+u-o-f),e[3]=(d-l)/m,e[0]=(a+c)/m,e[1]=.25*m,e[2]=(h+p)/m):(m=2*Math.sqrt(1+f-o-u),e[3]=(a-c)/m,e[0]=(d+l)/m,e[1]=(h+p)/m,e[2]=.25*m),e},"getScaling",0,tq,"getTranslation",0,function(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e},"identity",0,tj,"invert",0,tD,"lookAt",0,tJ,"mul",0,tF,"multiply",0,tF,"multiplyScalar",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12]*i,e[13]=t[13]*i,e[14]=t[14]*i,e[15]=t[15]*i,e},"multiplyScalarAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e[3]=t[3]+i[3]*r,e[4]=t[4]+i[4]*r,e[5]=t[5]+i[5]*r,e[6]=t[6]+i[6]*r,e[7]=t[7]+i[7]*r,e[8]=t[8]+i[8]*r,e[9]=t[9]+i[9]*r,e[10]=t[10]+i[10]*r,e[11]=t[11]+i[11]*r,e[12]=t[12]+i[12]*r,e[13]=t[13]+i[13]*r,e[14]=t[14]+i[14]*r,e[15]=t[15]+i[15]*r,e},"ortho",0,tX,"orthoNO",0,tX,"orthoZO",0,function(e,t,i,r,n,s,o){let a=1/(t-i),l=1/(r-n),c=1/(s-o);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=c,e[11]=0,e[12]=(t+i)*a,e[13]=(n+r)*l,e[14]=s*c,e[15]=1,e},"perspective",0,tZ,"perspectiveFromFieldOfView",0,function(e,t,i,r){let n=Math.tan(t.upDegrees*Math.PI/180),s=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),a=Math.tan(t.rightDegrees*Math.PI/180),l=2/(o+a),c=2/(n+s);return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=c,e[6]=0,e[7]=0,e[8]=-((o-a)*l*.5),e[9]=(n-s)*c*.5,e[10]=r/(i-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*i/(i-r),e[15]=0,e},"perspectiveNO",0,tZ,"perspectiveZO",0,function(e,t,i,r,n){let s=1/Math.tan(t/2);if(e[0]=s/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=n&&n!==1/0){let t=1/(r-n);e[10]=n*t,e[14]=n*r*t}else e[10]=-1,e[14]=-r;return e},"rotate",0,tV,"rotateX",0,t$,"rotateY",0,tW,"rotateZ",0,tG,"scale",0,tU,"set",0,function(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g,m){return e[0]=t,e[1]=i,e[2]=r,e[3]=n,e[4]=s,e[5]=o,e[6]=a,e[7]=l,e[8]=c,e[9]=u,e[10]=h,e[11]=d,e[12]=p,e[13]=f,e[14]=g,e[15]=m,e},"str",0,function(e){return`mat4(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}, ${e[4]}, ${e[5]}, ${e[6]}, ${e[7]}, ${e[8]}, ${e[9]}, ${e[10]}, ${e[11]}, ${e[12]}, ${e[13]}, ${e[14]}, ${e[15]})`},"sub",0,tQ,"subtract",0,tQ,"targetTo",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2],a=r[0],l=r[1],c=r[2],u=n-i[0],h=s-i[1],d=o-i[2],p=u*u+h*h+d*d;p>0&&(u*=p=1/Math.sqrt(p),h*=p,d*=p);let f=l*d-c*h,g=c*u-a*d,m=a*h-l*u;return(p=f*f+g*g+m*m)>0&&(f*=p=1/Math.sqrt(p),g*=p,m*=p),e[0]=f,e[1]=g,e[2]=m,e[3]=0,e[4]=h*m-d*g,e[5]=d*f-u*m,e[6]=u*g-h*f,e[7]=0,e[8]=u,e[9]=h,e[10]=d,e[11]=0,e[12]=n,e[13]=s,e[14]=o,e[15]=1,e},"translate",0,tB,"transpose",0,tz],32664);var t0=e.i(32664),t0=t0;function t1(){let e=new tR(4);return tR!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function t2(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e}function t3(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e[2]=t[2]*i[2],e[3]=t[3]*i[3],e}function t4(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e[2]=t[2]/i[2],e[3]=t[3]/i[3],e}function t5(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],s=t[3]-e[3];return Math.sqrt(i*i+r*r+n*n+s*s)}function t6(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],s=t[3]-e[3];return i*i+r*r+n*n+s*s}function t8(e){let t=e[0],i=e[1],r=e[2],n=e[3];return Math.sqrt(t*t+i*i+r*r+n*n)}function t9(e){let t=e[0],i=e[1],r=e[2],n=e[3];return t*t+i*i+r*r+n*n}function t7(e,t,i){let r=t[0],n=t[1],s=t[2],o=t[3];return e[0]=i[0]*r+i[4]*n+i[8]*s+i[12]*o,e[1]=i[1]*r+i[5]*n+i[9]*s+i[13]*o,e[2]=i[2]*r+i[6]*n+i[10]*s+i[14]*o,e[3]=i[3]*r+i[7]*n+i[11]*s+i[15]*o,e}let ie=(o=t1(),function(e,t,i,r,n,s){let a,l;for(t||(t=4),i||(i=0),l=r?Math.min(r*t+i,e.length):e.length,a=i;a<l;a+=t)o[0]=e[a],o[1]=e[a+1],o[2]=e[a+2],o[3]=e[a+3],n(o,o,s),e[a]=o[0],e[a+1]=o[1],e[a+2]=o[2],e[a+3]=o[3];return e});e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e},"ceil",0,function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},"clone",0,function(e){let t=new tR(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},"create",0,t1,"cross",0,function(e,t,i,r){let n=i[0]*r[1]-i[1]*r[0],s=i[0]*r[2]-i[2]*r[0],o=i[0]*r[3]-i[3]*r[0],a=i[1]*r[2]-i[2]*r[1],l=i[1]*r[3]-i[3]*r[1],c=i[2]*r[3]-i[3]*r[2],u=t[0],h=t[1],d=t[2],p=t[3];return e[0]=h*c-d*l+p*a,e[1]=-(u*c)+d*o-p*s,e[2]=u*l-h*o+p*n,e[3]=-(u*a)+h*s-d*n,e},"dist",0,t5,"distance",0,t5,"div",0,t4,"divide",0,t4,"dot",0,function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},"equals",0,function(e,t){let i=e[0],r=e[1],n=e[2],s=e[3],o=t[0],a=t[1],l=t[2],c=t[3];return Math.abs(i-o)<=1e-6*Math.max(1,Math.abs(i),Math.abs(o))&&Math.abs(r-a)<=1e-6*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-l)<=1e-6*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(s-c)<=1e-6*Math.max(1,Math.abs(s),Math.abs(c))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]},"floor",0,function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},"forEach",0,ie,"fromValues",0,function(e,t,i,r){let n=new tR(4);return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n},"inverse",0,function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},"len",0,t8,"length",0,t8,"lerp",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2],a=t[3];return e[0]=n+r*(i[0]-n),e[1]=s+r*(i[1]-s),e[2]=o+r*(i[2]-o),e[3]=a+r*(i[3]-a),e},"max",0,function(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e[2]=Math.max(t[2],i[2]),e[3]=Math.max(t[3],i[3]),e},"min",0,function(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e[2]=Math.min(t[2],i[2]),e[3]=Math.min(t[3],i[3]),e},"mul",0,t3,"multiply",0,t3,"negate",0,function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},"normalize",0,function(e,t){let i=t[0],r=t[1],n=t[2],s=t[3],o=i*i+r*r+n*n+s*s;return o>0&&(o=1/Math.sqrt(o)),e[0]=i*o,e[1]=r*o,e[2]=n*o,e[3]=s*o,e},"random",0,function(e,t){let i,r,n,s,o,a;t=void 0===t?1:t;do o=(i=2*tO()-1)*i+(r=2*tO()-1)*r;while(o>=1)do a=(n=2*tO()-1)*n+(s=2*tO()-1)*s;while(a>=1)let l=Math.sqrt((1-o)/a);return e[0]=t*i,e[1]=t*r,e[2]=t*n*l,e[3]=t*s*l,e},"round",0,function(e,t){return e[0]=tI(t[0]),e[1]=tI(t[1]),e[2]=tI(t[2]),e[3]=tI(t[3]),e},"scale",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e},"scaleAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e[3]=t[3]+i[3]*r,e},"set",0,function(e,t,i,r,n){return e[0]=t,e[1]=i,e[2]=r,e[3]=n,e},"sqrDist",0,t6,"sqrLen",0,t9,"squaredDistance",0,t6,"squaredLength",0,t9,"str",0,function(e){return`vec4(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`},"sub",0,t2,"subtract",0,t2,"transformMat4",0,t7,"transformQuat",0,function(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[0],a=i[1],l=i[2],c=i[3],u=c*r+a*s-l*n,h=c*n+l*r-o*s,d=c*s+o*n-a*r,p=-o*r-a*n-l*s;return e[0]=u*c+-(p*o)+-(h*l)- -(d*a),e[1]=h*c+-(p*a)+-(d*o)- -(u*l),e[2]=d*c+-(p*l)+-(u*a)- -(h*o),e[3]=t[3],e},"zero",0,function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}],22642);var it=e.i(22642),it=it,ii=e.i(25350);let ir=new ii.Log({id:"deck"});(u=f||(f={}))[u.Start=1]="Start",u[u.Move=2]="Move",u[u.End=4]="End",u[u.Cancel=8]="Cancel",(h=g||(g={}))[h.None=0]="None",h[h.Left=1]="Left",h[h.Right=2]="Right",h[h.Up=4]="Up",h[h.Down=8]="Down",h[h.Horizontal=3]="Horizontal",h[h.Vertical=12]="Vertical",h[h.All=15]="All",(d=m||(m={}))[d.Possible=1]="Possible",d[d.Began=2]="Began",d[d.Changed=4]="Changed",d[d.Ended=8]="Ended",d[d.Recognized=8]="Recognized",d[d.Cancelled=16]="Cancelled",d[d.Failed=32]="Failed";let is="manipulation",io="none",ia="pan-x",il="pan-y";class ic{constructor(e,t){this.actions="",this.manager=e,this.set(t)}set(e){"compute"===e&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));var t=e.join(" ");if(t.includes(io))return io;let i=t.includes(ia),r=t.includes(il);return i&&r?io:i||r?i?ia:il:t.includes(is)?is:"auto"}}function iu(e){return e.trim().split(/\s+/g)}function ih(e,t,i){if(e)for(let r of iu(t))e.addEventListener(r,i,!1)}function id(e,t,i){if(e)for(let r of iu(t))e.removeEventListener(r,i,!1)}function ip(e){return(e.ownerDocument||e).defaultView}function ig(e){let t=e.length;if(1===t)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let i=0,r=0,n=0;for(;n<t;)i+=e[n].clientX,r+=e[n].clientY,n++;return{x:Math.round(i/t),y:Math.round(r/t)}}function im(e){let t=[],i=0;for(;i<e.pointers.length;)t[i]={clientX:Math.round(e.pointers[i].clientX),clientY:Math.round(e.pointers[i].clientY)},i++;return{timeStamp:Date.now(),pointers:t,center:ig(t),deltaX:e.deltaX,deltaY:e.deltaY}}function iy(e,t){let i=t.x-e.x,r=t.y-e.y;return Math.sqrt(i*i+r*r)}function iv(e,t){let i=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(i*i+r*r)}function ib(e,t){let i=t.clientX-e.clientX;return 180*Math.atan2(t.clientY-e.clientY,i)/Math.PI}function i_(e,t){return e===t?g.None:Math.abs(e)>=Math.abs(t)?e<0?g.Left:g.Right:t<0?g.Up:g.Down}function ix(e,t,i){return{x:t/e||0,y:i/e||0}}class iw{constructor(e){this.evEl="",this.evWin="",this.evTarget="",this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){var i;let r,n,s,o,a;i=this.manager,r=t.pointers.length,n=t.changedPointers.length,s=e&f.Start&&r-n==0,o=e&(f.End|f.Cancel)&&r-n==0,t.isFirst=!!s,t.isFinal=!!o,s&&(i.session={}),t.eventType=e,a=function(e,t){var i,r;let n,s,o,a,l,{session:c}=e,{pointers:u}=t,{length:h}=u;c.firstInput||(c.firstInput=im(t)),h>1&&!c.firstMultiple?c.firstMultiple=im(t):1===h&&(c.firstMultiple=!1);let{firstInput:d,firstMultiple:p}=c,g=p?p.center:d.center,m=t.center=ig(u);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-d.timeStamp,n=m.x-g.x,t.angle=180*Math.atan2(m.y-g.y,n)/Math.PI,t.distance=iy(g,m);let{deltaX:y,deltaY:v}=(s=t.center,o=c.offsetDelta,a=c.prevDelta,l=c.prevInput,(t.eventType===f.Start||l?.eventType===f.End)&&(a=c.prevDelta={x:l?.deltaX||0,y:l?.deltaY||0},o=c.offsetDelta={x:s.x,y:s.y}),{deltaX:a.x+(s.x-o.x),deltaY:a.y+(s.y-o.y)});t.deltaX=y,t.deltaY=v,t.offsetDirection=i_(t.deltaX,t.deltaY);let b=ix(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=b.x,t.overallVelocityY=b.y,t.overallVelocity=Math.abs(b.x)>Math.abs(b.y)?b.x:b.y,t.scale=p?(i=p.pointers,iv(u[0],u[1])/iv(i[0],i[1])):1,t.rotation=p?(r=p.pointers,ib(u[1],u[0])-ib(r[1],r[0])):0,t.maxPointers=c.prevInput?t.pointers.length>c.prevInput.maxPointers?t.pointers.length:c.prevInput.maxPointers:t.pointers.length;let _=e.element;return function(e,t){let i=e;for(;i;){if(i===t)return!0;i=i.parentNode}return!1}(t.srcEvent.target,_)&&(_=t.srcEvent.target),t.target=_,!function(e,t){let i,r,n,s,o=e.lastInterval||t,a=t.timeStamp-o.timeStamp;if(t.eventType!==f.Cancel&&(a>25||void 0===o.velocity)){let l=t.deltaX-o.deltaX,c=t.deltaY-o.deltaY,u=ix(a,l,c);r=u.x,n=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=i_(l,c),e.lastInterval=t}else i=o.velocity,r=o.velocityX,n=o.velocityY,s=o.direction;t.velocity=i,t.velocityX=r,t.velocityY=n,t.direction=s}(c,t),t}(i,t),i.emit("hammer.input",a),i.recognize(a),i.session.prevInput=a}init(){ih(this.element,this.evEl,this.domHandler),ih(this.target,this.evTarget,this.domHandler),ih(ip(this.element),this.evWin,this.domHandler)}destroy(){id(this.element,this.evEl,this.domHandler),id(this.target,this.evTarget,this.domHandler),id(ip(this.element),this.evWin,this.domHandler)}}let iP={pointerdown:f.Start,pointermove:f.Move,pointerup:f.End,pointercancel:f.Cancel,pointerout:f.Cancel};class iC extends iw{constructor(e){super(e),this.evEl="pointerdown",this.evWin="pointermove pointerup pointercancel",this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,i=!1,r=iP[e.type],n=e.pointerType,s="touch"===n,o=t.findIndex(t=>t.pointerId===e.pointerId);r&f.Start&&(e.buttons||s)?o<0&&(t.push(e),o=t.length-1):r&(f.End|f.Cancel)&&(i=!0),!(o<0)&&(t[o]=e,this.callback(r,{pointers:t,changedPointers:[e],eventType:r,pointerType:n,srcEvent:e}),i&&t.splice(o,1))}}let iS=["","webkit","Moz","MS","ms","o"],iM={touchAction:"compute",enable:!0,inputTarget:null,cssProps:{userSelect:"none",userDrag:"none",touchCallout:"none",tapHighlightColor:"rgba(0,0,0,0)"}};class iE{constructor(e,t){this.options={...iM,...t,cssProps:{...iM.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new iC(this),this.touchAction=new ic(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?2:1}recognize(e){let t,{session:i}=this;if(i.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let{recognizers:r}=this,{curRecognizer:n}=i;(!n||n&&n.state&m.Recognized)&&(n=i.curRecognizer=null);let s=0;for(;s<r.length;)t=r[s],2!==i.stopped&&(!n||t===n||t.canRecognizeWith(n))?t.recognize(e):t.reset(),!n&&t.state&(m.Began|m.Changed|m.Ended)&&(n=i.curRecognizer=t),s++}get(e){let{recognizers:t}=this;for(let i=0;i<t.length;i++)if(t[i].options.event===e)return t[i];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t="string"==typeof e?this.get(e):e;if(t){let{recognizers:e}=this,i=e.indexOf(t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:i}=this;for(let r of iu(e))i[r]=i[r]||[],i[r].push(t)}off(e,t){if(!e)return;let{handlers:i}=this;for(let r of iu(e))t?i[r]&&i[r].splice(i[r].indexOf(t),1):delete i[r]}emit(e,t){let i=this.handlers[e]&&this.handlers[e].slice();if(!i||!i.length)return;t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};let r=0;for(;r<i.length;)i[r](t),r++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[i,r]of Object.entries(this.options.cssProps)){let n=function(e,t){let i=t[0].toUpperCase()+t.slice(1);for(let r of iS){let n=r?r+i:t;if(n in e)return n}}(t.style,i);e?(this.oldCssProps[n]=t.style[n],t.style[n]=r):t.style[n]=this.oldCssProps[n]||""}e||(this.oldCssProps={})}}}let iL=1;function iA(e){return e&m.Cancelled?"cancel":e&m.Ended?"end":e&m.Changed?"move":e&m.Began?"start":""}class iT{constructor(e){this.options=e,this.id=iL++,this.state=m.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:i}=this;return i[t.id]||(i[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}return(t="string"==typeof e?this.manager.get(e):e)&&delete this.simultaneous[t.id],this}requireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}if("string"==typeof e){if(!(t=this.manager.get(e)))throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:i}=this;return -1===i.indexOf(t)&&(i.push(t),t.requireFailure(this)),this}dropRequireFailure(e){let t;if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}if(t="string"==typeof e?this.manager.get(e):e){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<m.Ended&&this.manager.emit(this.options.event+iA(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=m.Ended&&this.manager.emit(this.options.event+iA(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=m.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(m.Failed|m.Possible)))return!1;e++}return!0}recognize(e){let t={...e};if(!this.options.enable){this.reset(),this.state=m.Failed;return}this.state&(m.Recognized|m.Cancelled|m.Failed)&&(this.state=m.Possible),this.state=this.process(t),this.state&(m.Began|m.Changed|m.Ended|m.Cancelled)&&this.tryEmit(t)}getEventNames(){return[this.options.event]}reset(){}}class ik extends iT{attrTest(e){let t=this.options.pointers;return 0===t||e.pointers.length===t}process(e){let{state:t}=this,{eventType:i}=e,r=t&(m.Began|m.Changed),n=this.attrTest(e);return r&&(i&f.Cancel||!n)?t|m.Cancelled:r||n?i&f.End?t|m.Ended:t&m.Began?t|m.Changed:m.Began:m.Failed}}class iR extends iT{constructor(e={}){super({enable:!0,event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[is]}process(e){let{options:t}=this,i=e.pointers.length===t.pointers,r=e.distance<t.threshold,n=e.deltaTime<t.time;if(this.reset(),e.eventType&f.Start&&0===this.count)return this.failTimeout();if(r&&n&&i){if(e.eventType!==f.End)return this.failTimeout();let i=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||iy(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,r&&i?this.count+=1:this.count=1,this._input=e,0==this.count%t.taps)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=m.Recognized,this.tryEmit(this._input)},t.interval),m.Began):m.Recognized}return m.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=m.Failed},this.options.interval),m.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===m.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}}class iO extends ik{constructor(){super(...arguments),this.wheelSession=null,this.wheelSessionUnsubscribe=null,this.handleWheelSessionEvent=e=>{"trackpad"===e.device&&this.handleTrackpadEvent(e)}}set(e){let{wheelSession:t,...i}=e;return t&&t!==this.wheelSession&&(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=null,this.wheelSession=t),super.set(i),this.updateWheelSessionSubscription(),this}getTrackpadInput(e,t={}){let{srcEvent:i}=e,r=t.deltaX??e.deltaX,n=t.deltaY??e.deltaY,s=i_(r,n);return{pointers:[i,i],changedPointers:[i,i],pointerType:"trackpad",srcEvent:i,eventType:e.eventType,timeStamp:e.timeStamp,deltaTime:e.deltaTime,center:e.center,deltaX:r,deltaY:n,angle:180*Math.atan2(n,r)/Math.PI,distance:Math.sqrt(r*r+n*n),scale:1,rotation:0,direction:s,offsetDirection:s,velocity:e.velocity,velocityX:e.velocityX,velocityY:e.velocityY,overallVelocity:e.overallVelocity,overallVelocityX:e.overallVelocityX,overallVelocityY:e.overallVelocityY,maxPointers:2,target:i.target||this.manager.element,additionalEvent:"",...t}}updateWheelSessionSubscription(){let e=!!(this.wheelSession&&this.options.enable&&this.options.trackpad&&2===this.options.pointers);e&&!this.wheelSessionUnsubscribe?this.wheelSessionUnsubscribe=this.wheelSession.on(this.handleWheelSessionEvent):!e&&this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe(),this.wheelSessionUnsubscribe=null)}}let iI=["","start","move","end","cancel","up","down","left","right"];class ij extends iO{constructor(e={}){super({enable:!0,pointers:1,event:"pan",threshold:10,direction:g.All,trackpad:!1,...e}),this.trackpadGesture=!1,this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&g.Horizontal&&t.push(il),e&g.Vertical&&t.push(ia),t}getEventNames(){return iI.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,i=!0,{distance:r}=e,{direction:n}=e,s=e.deltaX,o=e.deltaY;return n&t.direction||(t.direction&g.Horizontal?(n=0===s?g.None:s<0?g.Left:g.Right,i=s!==this.pX,r=Math.abs(e.deltaX)):(n=0===o?g.None:o<0?g.Up:g.Down,i=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=n,i&&r>t.threshold&&!!(n&t.direction)}attrTest(e){return super.attrTest(e)&&(!!(this.state&m.Began)||!(this.state&m.Began)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=g[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=!e.srcEvent.ctrlKey),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:-e.deltaX,deltaY:-e.deltaY,velocity:-e.velocity,velocityX:-e.velocityX,velocityY:-e.velocityY,overallVelocity:-e.overallVelocity,overallVelocityX:-e.overallVelocityX,overallVelocityY:-e.overallVelocityY})),e.isFinal&&(this.trackpadGesture=!1))}}let iz=["","start","move","end","cancel","in","out"];class iD{constructor(e,t,i){this.element=e,this.callback=t,this.options=i}listen(e,t){t?this.element.addEventListener(e,this.handleEvent,{passive:!1}):this.element.removeEventListener(e,this.handleEvent)}}let iN="u">typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"";"u">typeof window&&window;let iF=-1!==iN.indexOf("firefox");class iB extends iD{constructor(e,t,i){i.enable=i.enable??!1,super(e,t,i),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(iF&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=40)),e.shiftKey&&t&&(t*=.25),this.callback({type:"wheel",center:{x:e.clientX,y:e.clientY},delta:-t,device:this.options.wheelSession?.device??"unknown",srcEvent:e,pointerType:"mouse",target:e.target})},i.enable&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{}),this.listen("wheel",!0))}destroy(){this.listen("wheel",!1),this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0}enableEventType(e,t){"wheel"===e&&this.options.enable!==t&&(this.options.enable=t,t&&!this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{})),this.listen("wheel",t),t||(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0))}}let iU={classificationDelay:32,endDelay:80};class iV{constructor(e,t={}){this.subscriptions=new Map,this.session=null,this.classificationTimer=null,this.endTimer=null,this.pressedControlKeys=new Set,this.listeningForControlKeys=!1,this.handleEvent=e=>{var t,i;let r,n;if(!this.hasSubscribers)return"unknown";let s=(t=e,i=this.pressedControlKeys.size>0,r=t.deltaX,n=t.deltaY,1===t.deltaMode&&(r*=40,n*=40),{event:t,timeStamp:t.timeStamp,deltaX:r,deltaY:n,isControlKeyDown:i}),o=this.session;if(o&&s.timeStamp-o.lastTimeStamp>=this.options.endDelay){if(this.end(),!this.hasSubscribers)return"unknown";o=null}o?(this.scheduleEnd(),this.addSample(o,s)):(o=this.startPendingSession(s),this.scheduleEnd());let{device:a}=o;return"unknown"===a&&"unknown"!==(a=i$(o.samples,!1))&&this.begin(o,a),a},this.finishClassification=()=>{if(this.classificationTimer=null,!this.session||"unknown"!==this.session.device)return;let e=this.session,t=i$(e.samples,!0);this.begin(e,"unknown"===t?"mouse":t)},this.end=()=>{if(!this.session)return;if("unknown"===this.session.device){let e=this.session,t=i$(e.samples,!0);this.begin(e,"unknown"===t?"mouse":t)}if(!this.session)return;let e=this.session;this.emit(f.End,e.lastEvent),this.reset()},this.handleKeyDown=e=>{"Control"===e.key&&this.pressedControlKeys.add(e.code||e.key)},this.handleKeyUp=e=>{"Control"===e.key&&(e.code?this.pressedControlKeys.delete(e.code):this.pressedControlKeys.clear())},this.handleWindowBlur=()=>{this.pressedControlKeys.clear()},this.element=e,this.options={...iU,...t},this.element?.addEventListener("wheel",this.handleEvent,{passive:!0})}get hasSubscribers(){return this.subscriptions.size>0}get device(){return this.session?.device??"unknown"}on(e){let t={listener:e};return this.subscriptions.set(e,t),this.updateControlKeyEventListeners(),()=>{this.subscriptions.get(e)===t&&this.off(e)}}off(e){this.subscriptions.delete(e),this.updateControlKeyEventListeners(),this.hasSubscribers||this.reset()}cancel(){let e=this.session;e&&"unknown"!==e.device&&this.emit(f.Cancel,e.lastEvent),this.reset()}destroy(){this.cancel(),this.subscriptions.clear(),this.updateControlKeyEventListeners(),this.element?.removeEventListener("wheel",this.handleEvent)}startPendingSession(e){let t={samples:[e],device:"unknown",firstTimeStamp:e.timeStamp,lastTimeStamp:e.timeStamp,totalDeltaX:e.deltaX,totalDeltaY:e.deltaY,velocityX:0,velocityY:0,lastEvent:e.event};return this.session=t,this.classificationTimer=globalThis.setTimeout(this.finishClassification,this.options.classificationDelay),t}addSample(e,t){if(e.samples.push(t),e.lastTimeStamp=t.timeStamp,e.lastEvent=t.event,e.totalDeltaX+=t.deltaX,e.totalDeltaY+=t.deltaY,"unknown"!==e.device){let i=e.samples[e.samples.length-2],r=t.timeStamp-i.timeStamp;e.velocityX=r>0?t.deltaX/r:0,e.velocityY=r>0?t.deltaY/r:0,this.emit(f.Move,t.event,{velocityX:e.velocityX,velocityY:e.velocityY})}}begin(e,t){e.device=t,this.clearClassificationTimer(),this.emit(f.Start,e.samples[0].event);let i=e.lastTimeStamp-e.firstTimeStamp;e.velocityX=i>0?e.totalDeltaX/i:0,e.velocityY=i>0?e.totalDeltaY/i:0,this.emit(f.Move,e.lastEvent,{velocityX:e.velocityX,velocityY:e.velocityY})}scheduleEnd(){this.clearEndTimer(),this.endTimer=globalThis.setTimeout(this.end,this.options.endDelay)}emit(e,t,i){let r=this.session;if(!r||"unknown"===r.device)return;let n=e===f.Start,s=e===f.End||e===f.Cancel,o=n?r.firstTimeStamp:r.lastTimeStamp,a=n?0:Math.max(0,o-r.firstTimeStamp),l=n?0:r.totalDeltaX,c=n?0:r.totalDeltaY,u=a>0?l/a:0,h=a>0?c/a:0,d=n?0:i?.velocityX??r.velocityX,p=n?0:i?.velocityY??r.velocityY,g={eventType:e,device:r.device,srcEvent:t,timeStamp:o,center:{x:t.clientX,y:t.clientY},deltaX:l,deltaY:c,deltaTime:a,velocity:Math.abs(d)>Math.abs(p)?d:p,velocityX:d,velocityY:p,overallVelocity:Math.abs(u)>Math.abs(h)?u:h,overallVelocityX:u,overallVelocityY:h,isFirst:n,isFinal:s};for(let{listener:e}of[...this.subscriptions.values()])e(g)}reset(){this.clearClassificationTimer(),this.clearEndTimer(),this.session=null}clearClassificationTimer(){null!==this.classificationTimer&&(globalThis.clearTimeout(this.classificationTimer),this.classificationTimer=null)}clearEndTimer(){null!==this.endTimer&&(globalThis.clearTimeout(this.endTimer),this.endTimer=null)}updateControlKeyEventListeners(){let e=this.hasSubscribers,t="u">typeof window?window:globalThis.document?.defaultView;t&&e!==this.listeningForControlKeys&&(this.listeningForControlKeys=e,e?(t.addEventListener("keydown",this.handleKeyDown,!0),t.addEventListener("keyup",this.handleKeyUp,!0),t.addEventListener("blur",this.handleWindowBlur)):(t.removeEventListener("keydown",this.handleKeyDown,!0),t.removeEventListener("keyup",this.handleKeyUp,!0),t.removeEventListener("blur",this.handleWindowBlur),this.pressedControlKeys.clear()))}}function i$(e,t){return e.some(({event:e,isControlKeyDown:t})=>e.ctrlKey&&!t)?"trackpad":e.some(({event:e})=>0!==e.deltaMode)||e.some(iW)||e.every(({event:e})=>{let t=e.wheelDelta;return void 0!==t&&Math.abs(t)%40==0})?"mouse":e.some(({deltaX:e})=>0!==e)||e.length>1&&function(e){for(let t=0;t<e.length;t++){let i=e[t];if(Math.abs(i.deltaX)>40||Math.abs(i.deltaY)>40||t>0&&i.timeStamp-e[t-1].timeStamp>40)return!1}return!0}(e)?"trackpad":t?"mouse":"unknown"}function iW({event:e,deltaX:t,deltaY:i}){if(0!==t||0===i)return!1;if(Number.isInteger(Math.abs(i/4.000244140625)))return!0;let r=e.wheelDelta;return"number"==typeof r&&0!==r&&r%120==0}let iG=["mousedown","mousemove","mouseup","mouseover","mouseout","mouseenter","mouseleave"];class iH extends iD{constructor(e,t,i){super(e,t,{enable:!0,...i}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;const{enable:r=!1}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,r&&iG.forEach(e=>this.listen(e,!0))}destroy(){iG.forEach(e=>this.listen(e,!1))}enableEventType(e,t){switch(e){case"pointermove":this.enableMoveEvent!==t&&(this.enableMoveEvent=t,this.listen("mousedown",t),this.listen("mousemove",t),this.listen("mouseup",t));break;case"pointerover":this.enableOverEvent!==t&&(this.enableOverEvent=t,this.listen("mouseover",t));break;case"pointerout":this.enableOutEvent!==t&&(this.enableOutEvent=t,this.listen("mouseout",t));break;case"pointerenter":this.enableEnterEvent!==t&&(this.enableEnterEvent=t,this.listen("mouseenter",t));break;case"pointerleave":this.enableLeaveEvent!==t&&(this.enableLeaveEvent=t,this.listen("mouseleave",t))}}handleOverEvent(e){this.enableOverEvent&&"mouseover"===e.type&&this._emit("pointerover",e)}handleOutEvent(e){this.enableOutEvent&&"mouseout"===e.type&&this._emit("pointerout",e)}handleEnterEvent(e){this.enableEnterEvent&&"mouseenter"===e.type&&this._emit("pointerenter",e)}handleLeaveEvent(e){this.enableLeaveEvent&&"mouseleave"===e.type&&this._emit("pointerleave",e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case"mousedown":e.button>=0&&(this.pressed=!0);break;case"mousemove":0===e.buttons&&(this.pressed=!1),this.pressed||this._emit("pointermove",e);break;case"mouseup":this.pressed=!1}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:"mouse",target:t.target})}}let iq=["keydown","keyup"];class iY extends iD{constructor(e,t,i){super(e,t,{enable:!0,tabIndex:0,...i}),this.handleEvent=e=>{let t=e.target||e.srcElement;("INPUT"!==t.tagName||"text"!==t.type)&&"TEXTAREA"!==t.tagName&&(this.enableDownEvent&&"keydown"===e.type&&this.callback({type:"keydown",srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&"keyup"===e.type&&this.callback({type:"keyup",srcEvent:e,key:e.key,target:e.target}))};const{enable:r=!1}=this.options;this.enableDownEvent=r,this.enableUpEvent=r,e.tabIndex=this.options.tabIndex,e.style.outline="none",r&&iq.forEach(e=>this.listen(e,!0))}destroy(){iq.forEach(e=>this.listen(e,!1))}enableEventType(e,t){"keydown"===e&&this.enableDownEvent!==t&&(this.enableDownEvent=t,this.listen(e,t)),"keyup"===e&&this.enableUpEvent!==t&&(this.enableUpEvent=t,this.listen(e,t))}}class iK extends iD{constructor(e,t,i){i.enable=i.enable??!1,super(e,t,i),this.handleEvent=e=>{this.options.enable&&this.callback({type:"contextmenu",center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:"mouse",target:e.target})},i.enable&&this.listen("contextmenu",!0)}destroy(){this.listen("contextmenu",!1)}enableEventType(e,t){"contextmenu"===e&&this.options.enable!==t&&(this.options.enable=t,this.listen("contextmenu",t))}}let iZ={pointerdown:1,pointermove:2,pointerup:4,mousedown:1,mousemove:2,mouseup:4},iX={srcElement:"root",priority:0};class iJ{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),i=e.srcEvent.target;for(;i&&i!==t.rootElement;){if(this._emit(t,i),t.handled)return;i=i.parentNode}this._emit(t,"root")},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,i,r=!1,n=!1){let{handlers:s,handlersByElement:o}=this,a={...iX,...i},l=o.get(a.srcElement);l||(l=[],o.set(a.srcElement,l));let c={type:e,handler:t,srcElement:a.srcElement,priority:a.priority};r&&(c.once=!0),n&&(c.passive=!0),s.push(c),this._active=this._active||!c.passive;let u=l.length-1;for(;u>=0&&!(l[u].priority>=c.priority);)u--;l.splice(u+1,0,c)}remove(e,t){let{handlers:i,handlersByElement:r}=this;for(let n=i.length-1;n>=0;n--){let s=i[n];if(s.type===e&&s.handler===t){i.splice(n,1);let e=r.get(s.srcElement);e.splice(e.indexOf(s),1),0===e.length&&r.delete(s.srcElement)}}this._active=i.some(e=>!e.passive)}_emit(e,t){let i=this.handlersByElement.get(t);if(i){let t=!1,r=()=>{e.handled=!0},n=()=>{e.handled=!0,t=!0},s=[];for(let o=0;o<i.length;o++){let{type:a,handler:l,once:c}=i[o];if(l({...e,type:a,stopPropagation:r,stopImmediatePropagation:n}),c&&s.push(i[o]),t)break}for(let e=0;e<s.length;e++){let{type:t,handler:i}=s[e];this.remove(t,i)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...function(e){let t=iZ[e.srcEvent.type];if(!t)return null;let{buttons:i,button:r}=e.srcEvent,n=!1,s=!1,o=!1;return 2===t?(n=!!(1&i),s=!!(4&i),o=!!(2&i)):(n=0===r,s=1===r,o=2===r),{leftButton:n,middleButton:s,rightButton:o}}(e),...function(e,t){let i=e.center;if(!i)return null;let r=t.getBoundingClientRect(),n=r.width/t.offsetWidth||1,s=r.height/t.offsetHeight||1,o={x:(i.x-r.left-t.clientLeft)/n,y:(i.y-r.top-t.clientTop)/s};return{center:i,offsetCenter:o}}(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}}class iQ{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:"compute",tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,this.wheelSession=new iV(e),!e)return;for(const t of(this.manager=new iE(e,this.options),this.options.recognizers)){const{recognizer:e,recognizeWith:i,requireFailure:r}=function(e){let t;if("recognizer"in e)return e;let i=Array.isArray(e)?[...e]:[e];return{recognizer:t="function"==typeof i[0]?new(i.shift())(i.shift()||{}):i.shift(),recognizeWith:"string"==typeof i[0]?[i[0]]:i[0],requireFailure:"string"==typeof i[1]?[i[1]]:i[1]}}(t);this.manager.add(e),i&&e.recognizeWith(i),r&&e.requireFailure(r)}this.manager.on("hammer.input",this._onBasicInput),this.wheelInput=new iB(e,this._onOtherEvent,{enable:!1,wheelSession:this.wheelSession}),this.moveInput=new iH(e,this._onOtherEvent,{enable:!1}),this.keyInput=new iY(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new iK(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}getElement(){return this.element}destroy(){this.element?(this.wheelInput.destroy(),this.wheelSession.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy()):this.wheelSession.destroy()}on(e,t,i){this._addEventHandler(e,t,i,!1)}once(e,t,i){this._addEventHandler(e,t,i,!0)}watch(e,t,i){this._addEventHandler(e,t,i,!1,!0)}off(e,t){this._removeEventHandler(e,t)}emit(e){this.manager?.emit(e.type,e)}_toggleRecognizer(e,t){let{manager:i}=this;if(!i)return;let r=i.get(e);r&&(r.set({enable:t,wheelSession:this.wheelSession}),i.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,i,r,n){if("string"!=typeof e){for(let[s,o]of(i=t,Object.entries(e)))this._addEventHandler(s,o,i,r,n);return}let{manager:s,events:o}=this;if(!s)return;let a=o.get(e);!a&&(a=new iJ(this,this._getRecognizerName(e)||e),o.set(e,a),s&&s.on(e,a.handleEvent)),a.add(e,t,i,r,n),a.isEmpty()||this._toggleRecognizer(a.recognizerName,!0)}_removeEventHandler(e,t){if("string"!=typeof e){for(let[t,i]of Object.entries(e))this._removeEventHandler(t,i);return}let{events:i}=this,r=i.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of i.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}}let i0={DEFAULT:"default",LNGLAT:"lnglat",METER_OFFSETS:"meter-offsets",LNGLAT_OFFSETS:"lnglat-offsets",CARTESIAN:"cartesian"};Object.defineProperty(i0,"IDENTITY",{get:()=>(ir.deprecated("COORDINATE_SYSTEM.IDENTITY","COORDINATE_SYSTEM.CARTESIAN")(),i0.CARTESIAN)});let i1={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},i2={common:0,meters:1,pixels:2},i3={click:"onClick",dblclick:"onClick",panstart:"onDragStart",panmove:"onDrag",panend:"onDragEnd"},i4={multipan:[ij,{threshold:10,direction:g.Vertical,pointers:2}],pinch:[class extends iO{constructor(e={}){super({enable:!0,event:"pinch",threshold:0,pointers:2,trackpad:!1,...e}),this.trackpadGesture=!1}getTouchAction(){return[io]}getEventNames(){return iz.map(e=>this.options.event+e)}attrTest(e){return super.attrTest(e)&&(Math.abs(e.scale-1)>this.options.threshold||!!(this.state&m.Began))}emit(e){if(1!==e.scale){let t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=e.srcEvent.ctrlKey),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:0,deltaY:0,velocity:0,velocityX:0,velocityY:0,overallVelocity:0,overallVelocityX:0,overallVelocityY:0,scale:Math.exp(-e.deltaY/100)})),e.isFinal&&(this.trackpadGesture=!1))}},{},null,["multipan"]],pan:[ij,{threshold:1},["pinch"],["multipan"]],dblclick:[iR,{event:"dblclick",taps:2}],click:[iR,{event:"click"},null,["dblclick"]]};function i5(e){let t,i={};return r=>{for(let n in r)if(!function(e,t){if(e===t)return!0;if(Array.isArray(e)){let i=e.length;if(!t||t.length!==i)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}return!1}(r[n],i[n])){t=e(r),i=r;break}return t}}let i6=[0,0,0,0],i8=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],i9=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i7=[0,0,0],re=[0,0,0],rt={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function ri(e){let t=rt[e];if(void 0===t)throw Error(`Invalid coordinateSystem: ${e}`);return t}let rr=i5(function({viewport:e,devicePixelRatio:t,coordinateSystem:i,coordinateOrigin:r}){let{projectionCenter:n,viewProjectionMatrix:s,originCommon:o,cameraPosCommon:a,shaderCoordinateOrigin:l,geospatialOrigin:c}=function(e,t,i){let{viewMatrixUncentered:r,projectionMatrix:n}=e,{viewMatrix:s,viewProjectionMatrix:o}=e,a=i6,l=i6,c=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:h,offsetMode:d}=rn(e,t,i);return d&&(l=e.projectPosition(u||h),c=[c[0]-l[0],c[1]-l[1],c[2]-l[2]],l[3]=1,a=it.transformMat4([],l,o),s=r||s,o=t0.multiply([],n,s),o=t0.multiply([],o,i8)),{viewMatrix:s,viewProjectionMatrix:o,projectionCenter:a,originCommon:l,cameraPosCommon:c,shaderCoordinateOrigin:h,geospatialOrigin:u}}(e,i,r),u=e.getDistanceScales(),h=[e.width*t,e.height*t],d=it.transformMat4([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,p={coordinateSystem:ri(i),projectionMode:e.projectionMode,coordinateOrigin:l,commonOrigin:o.slice(0,3),center:n,pseudoMeters:!!e._pseudoMeters,viewportSize:h,devicePixelRatio:t,focalDistance:d,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:i7,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:s,modelMatrix:i9,cameraPosition:a};if(c){let t=e.getDistanceScales(c);switch(i){case"meter-offsets":p.commonUnitsPerWorldUnit=t.unitsPerMeter,p.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case"lnglat":case"lnglat-offsets":e._pseudoMeters||(p.commonUnitsPerMeter=t.unitsPerMeter),p.commonUnitsPerWorldUnit=t.unitsPerDegree,p.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case"cartesian":p.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],p.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]]}}return p});function rn(e,t,i=re){let r;i.length<3&&(i=[i[0],i[1],0]);let n=i,s=!0;switch(r="lnglat-offsets"===t||"meter-offsets"===t?i:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case i1.WEB_MERCATOR:("lnglat"===t||"cartesian"===t)&&(r=[0,0,0],s=!1);break;case i1.WEB_MERCATOR_AUTO_OFFSET:"lnglat"===t?n=r:"cartesian"===t&&(n=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],r=e.unprojectPosition(n),n[0]-=i[0],n[1]-=i[1],n[2]-=i[2]);break;case i1.IDENTITY:(n=e.position.map(Math.fround))[2]=n[2]||0;break;case i1.GLOBE:s=!1,r=null;break;default:s=!1}return{geospatialOrigin:r,shaderCoordinateOrigin:n,offsetMode:s}}let rs=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")}: i32 = ${ri(e)};`).join(""),ro=Object.keys(i1).map(e=>`const PROJECTION_MODE_${e}: i32 = ${i1[e]};`).join(""),ra=Object.keys(i2).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${i2[e]};`).join(""),rl=`\
${rs}
${ro}
${ra}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`,rc=`\
${rl}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  return viewProjectionMatrix * position + center;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,ru=["default","lnglat","meter-offsets","lnglat-offsets","cartesian"].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll("-","_")} = ${ri(e)};`).join(""),rh=Object.keys(i1).map(e=>`const int PROJECTION_MODE_${e} = ${i1[e]};`).join(""),rd=Object.keys(i2).map(e=>`const int UNIT_${e.toUpperCase()} = ${i2[e]};`).join(""),rp={},rf={name:"project",dependencies:[{name:"fp32",vs:tk},tT],source:rc,vs:`\
${ru}
${rh}
${rd}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,getUniforms:function(e=rp){return"viewport"in e?function({viewport:e,devicePixelRatio:t=1,modelMatrix:i=null,coordinateSystem:r="default",coordinateOrigin:n=re,autoWrapLongitude:s=!1}){"default"===r&&(r=e.isGeospatial?"lnglat":"cartesian");let o=rr({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:n});return o.wrapLongitude=s,o.modelMatrix=i||i9,o}(e):{}},uniformTypes:{wrapLongitude:"f32",coordinateSystem:"i32",commonUnitsPerMeter:"vec3<f32>",projectionMode:"i32",scale:"f32",commonUnitsPerWorldUnit:"vec3<f32>",commonUnitsPerWorldUnit2:"vec3<f32>",center:"vec4<f32>",modelMatrix:"mat4x4<f32>",viewProjectionMatrix:"mat4x4<f32>",viewportSize:"vec2<f32>",devicePixelRatio:"f32",focalDistance:"f32",cameraPosition:"vec3<f32>",coordinateOrigin:"vec3<f32>",commonOrigin:"vec3<f32>",pseudoMeters:"f32"}},rg={name:"project32",dependencies:[rf],source:`\
// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,vs:`\
vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`};globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}};let rm=globalThis.mathgl.config;function ry(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rv(e,t,i){return function(e,t,i){if(ry(e)){i=i||(e.clone?e.clone():Array(e.length));for(let r=0;r<i.length&&r<e.length;++r){let n="number"==typeof e?e:e[r];i[r]=t(n,r,i)}return i}return t(e)}(e,e=>Math.max(t,Math.min(i,e)))}function rb(e,t,i){return ry(e)?e.map((e,r)=>rb(e,t[r],i)):i*t+(1-i)*e}function r_(e,t,i){let r=rm.EPSILON;i&&(rm.EPSILON=i);try{if(e===t)return!0;if(ry(e)&&ry(t)){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(!r_(e[i],t[i]))return!1;return!0}if(e&&e.equals)return e.equals(t);if(t&&t.equals)return t.equals(e);if("number"==typeof e&&"number"==typeof t)return Math.abs(e-t)<=rm.EPSILON*Math.max(1,Math.abs(e),Math.abs(t));return!1}finally{rm.EPSILON=r}}class rx extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let i=0;i<this.ELEMENTS;++i)this[i]=e[i+t];return this.check()}toArray(e=[],t=0){for(let i=0;i<this.ELEMENTS;++i)e[t+i]=this[i];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:ry(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(rm)}formatString(e){let t="";for(let i=0;i<this.ELEMENTS;++i)t+=(i>0?", ":"")+function(e,{precision:t=rm.precision}={}){return e=Math.round(e/rm.EPSILON)*rm.EPSILON,`${parseFloat(e.toPrecision(t))}`}(this[i],e);return`${e.printTypes?this.constructor.name:""}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!r_(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,i){if(void 0===i)return this.lerp(this,e,t);for(let r=0;r<this.ELEMENTS;++r){let n=e[r],s="number"==typeof t?t:t[r];this[r]=n+i*(s-n)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e[i]),t[i]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if("number"==typeof e)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(rm.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e=e&&Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let i=0;i<this.ELEMENTS;++i)this[i]=Math.min(Math.max(this[i],e),t);return this.check()}get elements(){return this}}function rw(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function rP(e,t,i=""){if(rm.debug&&!function(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}(e,t))throw Error(`math.gl: ${i} some fields set to invalid numbers'`);return e}function rC(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}class rS extends rx{get x(){return this[0]}set x(e){this[0]=rw(e)}get y(){return this[1]}set y(e){this[1]=rw(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let i=0;i<this.ELEMENTS;++i){let r=this[i]-e[i];t+=r*r}return rw(t)}dot(e){let t=0;for(let i=0;i<this.ELEMENTS;++i)t+=this[i]*e[i];return rw(t)}normalize(){let e=this.magnitude();if(0!==e)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return rC(e>=0&&e<this.ELEMENTS,"index is out of range"),rw(this[e])}setComponent(e,t){return rC(e>=0&&e<this.ELEMENTS,"index is out of range"),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}}function rM(){let e=new tR(3);return tR!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function rE(e){let t=e[0],i=e[1],r=e[2];return Math.sqrt(t*t+i*i+r*r)}function rL(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e}function rA(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e[2]=t[2]*i[2],e}function rT(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e[2]=t[2]/i[2],e}function rk(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(i*i+r*r+n*n)}function rR(e,t){let i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2];return i*i+r*r+n*n}function rO(e){let t=e[0],i=e[1],r=e[2];return t*t+i*i+r*r}function rI(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function rj(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[0],a=i[1],l=i[2];return e[0]=n*l-s*a,e[1]=s*o-r*l,e[2]=r*a-n*o,e}function rz(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[3]*r+i[7]*n+i[11]*s+i[15];return o=o||1,e[0]=(i[0]*r+i[4]*n+i[8]*s+i[12])/o,e[1]=(i[1]*r+i[5]*n+i[9]*s+i[13])/o,e[2]=(i[2]*r+i[6]*n+i[10]*s+i[14])/o,e}function rD(e,t,i){let r=t[0],n=t[1],s=t[2];return e[0]=r*i[0]+n*i[3]+s*i[6],e[1]=r*i[1]+n*i[4]+s*i[7],e[2]=r*i[2]+n*i[5]+s*i[8],e}function rN(e,t,i){let r=i[0],n=i[1],s=i[2],o=i[3],a=t[0],l=t[1],c=t[2],u=n*c-s*l,h=s*a-r*c,d=r*l-n*a,p=n*d-s*h,f=s*u-r*d,g=r*h-n*u,m=2*o;return u*=m,h*=m,d*=m,p*=2,f*=2,g*=2,e[0]=a+u+p,e[1]=l+h+f,e[2]=c+d+g,e}function rF(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[0],s[1]=n[1]*Math.cos(r)-n[2]*Math.sin(r),s[2]=n[1]*Math.sin(r)+n[2]*Math.cos(r),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function rB(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[2]*Math.sin(r)+n[0]*Math.cos(r),s[1]=n[1],s[2]=n[2]*Math.cos(r)-n[0]*Math.sin(r),e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function rU(e,t,i,r){let n=[],s=[];return n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],s[0]=n[0]*Math.cos(r)-n[1]*Math.sin(r),s[1]=n[0]*Math.sin(r)+n[1]*Math.cos(r),s[2]=n[2],e[0]=s[0]+i[0],e[1]=s[1]+i[1],e[2]=s[2]+i[2],e}function rV(e,t){let i=e[0],r=e[1],n=e[2],s=t[0],o=t[1],a=t[2],l=Math.sqrt((i*i+r*r+n*n)*(s*s+o*o+a*a));return Math.acos(Math.min(Math.max(l&&rI(e,t)/l,-1),1))}let r$=(a=rM(),function(e,t,i,r,n,s){let o,l;for(t||(t=3),i||(i=0),l=r?Math.min(r*t+i,e.length):e.length,o=i;o<l;o+=t)a[0]=e[o],a[1]=e[o+1],a[2]=e[o+2],n(a,a,s),e[o]=a[0],e[o+1]=a[1],e[o+2]=a[2];return e});function rW(e,t,i){let r=t[0],n=t[1],s=t[2],o=i[3]*r+i[7]*n+i[11]*s||1;return e[0]=(i[0]*r+i[4]*n+i[8]*s)/o,e[1]=(i[1]*r+i[5]*n+i[9]*s)/o,e[2]=(i[2]*r+i[6]*n+i[10]*s)/o,e}e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e},"angle",0,rV,"bezier",0,function(e,t,i,r,n,s){let o=1-s,a=o*o,l=s*s,c=a*o,u=3*s*a,h=3*l*o,d=l*s;return e[0]=t[0]*c+i[0]*u+r[0]*h+n[0]*d,e[1]=t[1]*c+i[1]*u+r[1]*h+n[1]*d,e[2]=t[2]*c+i[2]*u+r[2]*h+n[2]*d,e},"ceil",0,function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},"clone",0,function(e){let t=new tR(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},"create",0,rM,"cross",0,rj,"dist",0,rk,"distance",0,rk,"div",0,rT,"divide",0,rT,"dot",0,rI,"equals",0,function(e,t){let i=e[0],r=e[1],n=e[2],s=t[0],o=t[1],a=t[2];return Math.abs(i-s)<=1e-6*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(r-o)<=1e-6*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(n-a)<=1e-6*Math.max(1,Math.abs(n),Math.abs(a))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]},"floor",0,function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},"forEach",0,r$,"fromValues",0,function(e,t,i){let r=new tR(3);return r[0]=e,r[1]=t,r[2]=i,r},"hermite",0,function(e,t,i,r,n,s){let o=s*s,a=o*(2*s-3)+1,l=o*(s-2)+s,c=o*(s-1),u=o*(3-2*s);return e[0]=t[0]*a+i[0]*l+r[0]*c+n[0]*u,e[1]=t[1]*a+i[1]*l+r[1]*c+n[1]*u,e[2]=t[2]*a+i[2]*l+r[2]*c+n[2]*u,e},"inverse",0,function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},"len",0,rE,"length",0,rE,"lerp",0,function(e,t,i,r){let n=t[0],s=t[1],o=t[2];return e[0]=n+r*(i[0]-n),e[1]=s+r*(i[1]-s),e[2]=o+r*(i[2]-o),e},"max",0,function(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e[2]=Math.max(t[2],i[2]),e},"min",0,function(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e[2]=Math.min(t[2],i[2]),e},"mul",0,rA,"multiply",0,rA,"negate",0,function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},"normalize",0,function(e,t){let i=t[0],r=t[1],n=t[2],s=i*i+r*r+n*n;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e},"random",0,function(e,t){t=void 0===t?1:t;let i=2*tO()*Math.PI,r=2*tO()-1,n=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(i)*n,e[1]=Math.sin(i)*n,e[2]=r*t,e},"rotateX",0,rF,"rotateY",0,rB,"rotateZ",0,rU,"round",0,function(e,t){return e[0]=tI(t[0]),e[1]=tI(t[1]),e[2]=tI(t[2]),e},"scale",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e},"scaleAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r,e},"set",0,function(e,t,i,r){return e[0]=t,e[1]=i,e[2]=r,e},"slerp",0,function(e,t,i,r){let n=Math.acos(Math.min(Math.max(rI(t,i),-1),1)),s=Math.sin(n),o=Math.sin((1-r)*n)/s,a=Math.sin(r*n)/s;return e[0]=o*t[0]+a*i[0],e[1]=o*t[1]+a*i[1],e[2]=o*t[2]+a*i[2],e},"sqrDist",0,rR,"sqrLen",0,rO,"squaredDistance",0,rR,"squaredLength",0,rO,"str",0,function(e){return`vec3(${e[0]}, ${e[1]}, ${e[2]})`},"sub",0,rL,"subtract",0,rL,"transformMat3",0,rD,"transformMat4",0,rz,"transformQuat",0,rN,"zero",0,function(e){return e[0]=0,e[1]=0,e[2]=0,e}],93311);let rG=[0,0,0];class rH extends rS{static get ZERO(){return t||Object.freeze(t=new rH(0,0,0)),t}constructor(e=0,t=0,i=0){super(-0,-0,-0),1==arguments.length&&ry(e)?this.copy(e):(rm.debug&&(rw(e),rw(t),rw(i)),this[0]=e,this[1]=t,this[2]=i)}set(e,t,i){return this[0]=e,this[1]=t,this[2]=i,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return rm.debug&&(rw(e.x),rw(e.y),rw(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=rw(e)}angle(e){return rV(this,e)}cross(e){return rj(this,this,e),this.check()}rotateX({radians:e,origin:t=rG}){return rF(this,this,t,e),this.check()}rotateY({radians:e,origin:t=rG}){return rB(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=rG}){return rU(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return rz(this,this,e),this.check()}transformAsVector(e){return rW(this,this,e),this.check()}transformByMatrix3(e){return rD(this,this,e),this.check()}transformByMatrix2(e){let t,i;return t=this[0],i=this[1],this[0]=e[0]*t+e[2]*i,this[1]=e[1]*t+e[3]*i,this[2]=this[2],this.check()}transformByQuaternion(e){return rN(this,this,e),this.check()}}class rq extends rx{toString(){let e="[";if(rm.printRowMajor){e+="row-major:";for(let t=0;t<this.RANK;++t)for(let i=0;i<this.RANK;++i)e+=` ${this[i*this.RANK+t]}`}else{e+="column-major:";for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+"]"}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,i){return this[t*this.RANK+e]=rw(i),this}getColumn(e,t=Array(this.RANK).fill(-0)){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[i+e];return t}setColumn(e,t){let i=e*this.RANK;for(let e=0;e<this.RANK;++e)this[i+e]=t[e];return this}}function rY(){let e=new tR(2);return tR!=Float32Array&&(e[0]=0,e[1]=0),e}function rK(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e}function rZ(e,t,i){return e[0]=t[0]*i[0],e[1]=t[1]*i[1],e}function rX(e,t,i){return e[0]=t[0]/i[0],e[1]=t[1]/i[1],e}function rJ(e,t){let i=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(i*i+r*r)}function rQ(e,t){let i=t[0]-e[0],r=t[1]-e[1];return i*i+r*r}function r0(e){let t=e[0],i=e[1];return Math.sqrt(t*t+i*i)}function r1(e){let t=e[0],i=e[1];return t*t+i*i}function r2(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[4]*n+i[12],e[1]=i[1]*r+i[5]*n+i[13],e}let r3=(l=rY(),function(e,t,i,r,n,s){let o,a;for(t||(t=2),i||(i=0),a=r?Math.min(r*t+i,e.length):e.length,o=i;o<a;o+=t)l[0]=e[o],l[1]=e[o+1],n(l,l,s),e[o]=l[0],e[o+1]=l[1];return e});e.s(["add",0,function(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e},"angle",0,function(e,t){let i=e[0],r=e[1],n=t[0],s=t[1],o=Math.sqrt((i*i+r*r)*(n*n+s*s));return Math.acos(Math.min(Math.max(o&&(i*n+r*s)/o,-1),1))},"ceil",0,function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},"clone",0,function(e){let t=new tR(2);return t[0]=e[0],t[1]=e[1],t},"copy",0,function(e,t){return e[0]=t[0],e[1]=t[1],e},"create",0,rY,"cross",0,function(e,t,i){let r=t[0]*i[1]-t[1]*i[0];return e[0]=e[1]=0,e[2]=r,e},"dist",0,rJ,"distance",0,rJ,"div",0,rX,"divide",0,rX,"dot",0,function(e,t){return e[0]*t[0]+e[1]*t[1]},"equals",0,function(e,t){let i=e[0],r=e[1],n=t[0],s=t[1];return Math.abs(i-n)<=1e-6*Math.max(1,Math.abs(i),Math.abs(n))&&Math.abs(r-s)<=1e-6*Math.max(1,Math.abs(r),Math.abs(s))},"exactEquals",0,function(e,t){return e[0]===t[0]&&e[1]===t[1]},"floor",0,function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},"forEach",0,r3,"fromValues",0,function(e,t){let i=new tR(2);return i[0]=e,i[1]=t,i},"inverse",0,function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},"len",0,r0,"length",0,r0,"lerp",0,function(e,t,i,r){let n=t[0],s=t[1];return e[0]=n+r*(i[0]-n),e[1]=s+r*(i[1]-s),e},"max",0,function(e,t,i){return e[0]=Math.max(t[0],i[0]),e[1]=Math.max(t[1],i[1]),e},"min",0,function(e,t,i){return e[0]=Math.min(t[0],i[0]),e[1]=Math.min(t[1],i[1]),e},"mul",0,rZ,"multiply",0,rZ,"negate",0,function(e,t){return e[0]=-t[0],e[1]=-t[1],e},"normalize",0,function(e,t){let i=t[0],r=t[1],n=i*i+r*r;return n>0&&(n=1/Math.sqrt(n)),e[0]=t[0]*n,e[1]=t[1]*n,e},"random",0,function(e,t){t=void 0===t?1:t;let i=2*tO()*Math.PI;return e[0]=Math.cos(i)*t,e[1]=Math.sin(i)*t,e},"rotate",0,function(e,t,i,r){let n=t[0]-i[0],s=t[1]-i[1],o=Math.sin(r),a=Math.cos(r);return e[0]=n*a-s*o+i[0],e[1]=n*o+s*a+i[1],e},"round",0,function(e,t){return e[0]=tI(t[0]),e[1]=tI(t[1]),e},"scale",0,function(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e},"scaleAndAdd",0,function(e,t,i,r){return e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e},"set",0,function(e,t,i){return e[0]=t,e[1]=i,e},"sqrDist",0,rQ,"sqrLen",0,r1,"squaredDistance",0,rQ,"squaredLength",0,r1,"str",0,function(e){return`vec2(${e[0]}, ${e[1]})`},"sub",0,rK,"subtract",0,rK,"transformMat2",0,function(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[2]*n,e[1]=i[1]*r+i[3]*n,e},"transformMat2d",0,function(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[2]*n+i[4],e[1]=i[1]*r+i[3]*n+i[5],e},"transformMat3",0,function(e,t,i){let r=t[0],n=t[1];return e[0]=i[0]*r+i[3]*n+i[6],e[1]=i[1]*r+i[4]*n+i[7],e},"transformMat4",0,r2,"zero",0,function(e){return e[0]=0,e[1]=0,e}],60113),(p=y||(y={}))[p.COL0ROW0=0]="COL0ROW0",p[p.COL0ROW1=1]="COL0ROW1",p[p.COL0ROW2=2]="COL0ROW2",p[p.COL0ROW3=3]="COL0ROW3",p[p.COL1ROW0=4]="COL1ROW0",p[p.COL1ROW1=5]="COL1ROW1",p[p.COL1ROW2=6]="COL1ROW2",p[p.COL1ROW3=7]="COL1ROW3",p[p.COL2ROW0=8]="COL2ROW0",p[p.COL2ROW1=9]="COL2ROW1",p[p.COL2ROW2=10]="COL2ROW2",p[p.COL2ROW3=11]="COL2ROW3",p[p.COL3ROW0=12]="COL3ROW0",p[p.COL3ROW1=13]="COL3ROW1",p[p.COL3ROW2=14]="COL3ROW2",p[p.COL3ROW3=15]="COL3ROW3";let r4=45*Math.PI/180,r5=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);class r6 extends rq{static get IDENTITY(){return r||Object.freeze(r=new r6),r}static get ZERO(){return i||Object.freeze(i=new r6([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),i}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return y}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),1==arguments.length&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g){return this[0]=e,this[1]=t,this[2]=i,this[3]=r,this[4]=n,this[5]=s,this[6]=o,this[7]=a,this[8]=l,this[9]=c,this[10]=u,this[11]=h,this[12]=d,this[13]=p,this[14]=f,this[15]=g,this.check()}setRowMajor(e,t,i,r,n,s,o,a,l,c,u,h,d,p,f,g){return this[0]=e,this[1]=n,this[2]=l,this[3]=d,this[4]=t,this[5]=s,this[6]=c,this[7]=p,this[8]=i,this[9]=o,this[10]=u,this[11]=f,this[12]=r,this[13]=a,this[14]=h,this[15]=g,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(r5)}fromObject(e){return this.check()}fromQuaternion(e){return tY(this,e),this.check()}frustum(e){var t,i,r,n,s,o;let{left:a,right:l,bottom:c,top:u,near:h=.1,far:d=500}=e;return d===1/0?(t=this,i=a,r=l,n=c,s=u,o=h,t[0]=2*o/(r-i),t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o/(s-n),t[6]=0,t[7]=0,t[8]=(r+i)/(r-i),t[9]=(s+n)/(s-n),t[10]=-1,t[11]=-1,t[12]=0,t[13]=0,t[14]=-2*o,t[15]=0):tK(this,a,l,c,u,h,d),this.check()}lookAt(e){let{eye:t,center:i=[0,0,0],up:r=[0,1,0]}=e;return tJ(this,t,i,r),this.check()}ortho(e){let{left:t,right:i,bottom:r,top:n,near:s=.1,far:o=500}=e;return tX(this,t,i,r,n,s,o),this.check()}orthographic(e){let{fovy:t=r4,aspect:i=1,focalDistance:r=1,near:n=.1,far:s=500}=e;r8(t);let o=r*Math.tan(t/2),a=o*i;return this.ortho({left:-a,right:a,bottom:-o,top:o,near:n,far:s})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:i=1,near:r=.1,far:n=500}=e;return r8(t),tZ(this,t,i,r,n),this.check()}determinant(){return tN(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),r=1/i[0],n=1/i[1],s=1/i[2];return e[0]=this[0]*r,e[1]=this[1]*n,e[2]=this[2]*s,e[3]=0,e[4]=this[4]*r,e[5]=this[5]*n,e[6]=this[6]*s,e[7]=0,e[8]=this[8]*r,e[9]=this[9]*n,e[10]=this[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e=e||[-0,-0,-0,-0,-0,-0,-0,-0,-0],t=t||[-0,-0,-0];let i=this.getScale(t),r=1/i[0],n=1/i[1],s=1/i[2];return e[0]=this[0]*r,e[1]=this[1]*n,e[2]=this[2]*s,e[3]=this[4]*r,e[4]=this[5]*n,e[5]=this[6]*s,e[6]=this[8]*r,e[7]=this[9]*n,e[8]=this[10]*s,e}transpose(){return tz(this,this),this.check()}invert(){return tD(this,this),this.check()}multiplyLeft(e){return tF(this,e,this),this.check()}multiplyRight(e){return tF(this,this,e),this.check()}rotateX(e){return t$(this,this,e),this.check()}rotateY(e){return tW(this,this,e),this.check()}rotateZ(e){return tG(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return tV(this,this,e,t),this.check()}scale(e){return tU(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return tB(this,this,e),this.check()}transform(e,t){return 4===e.length?(rP(t=t7(t||[-0,-0,-0,-0],e,this),4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let i,{length:r}=e;switch(r){case 2:i=r2(t||[-0,-0],e,this);break;case 3:i=rz(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return rP(i,e.length),i}transformAsVector(e,t){let i;switch(e.length){case 2:var r;let n,s,o;r=t||[-0,-0],n=e[0],s=e[1],o=this[3]*n+this[7]*s||1,r[0]=(this[0]*n+this[4]*s)/o,r[1]=(this[1]*n+this[5]*s)/o,i=r;break;case 3:i=rW(t||[-0,-0,-0],e,this);break;default:throw Error("Illegal vector")}return rP(i,e.length),i}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,i){return this.identity().translate([e,t,i])}}function r8(e){if(e>2*Math.PI)throw Error("expected radians")}var it=it;function r9(e,t){let i=it.transformMat4([],t,e);return it.scale(i,i,1/i[3]),i}function r7(e,t,i){return e<t?t:e>i?i:e}let ne=Math.log2||function(e){return Math.log(e)*Math.LOG2E};var t0=t0,nt=e.i(60113),nt=nt,ni=e.i(93311),ni=ni;function nr(e,t){if(!e)throw Error(t||"@math.gl/web-mercator: assertion failed.")}let nn=Math.PI,ns=nn/4,no=nn/180,na=180/nn;function nl(e){let[t,i]=e;nr(Number.isFinite(t)),nr(Number.isFinite(i)&&i>=-90&&i<=90,"invalid latitude");let r=512*(nn+Math.log(Math.tan(ns+i*no*.5)))/(2*nn);return[512*(t*no+nn)/(2*nn),r]}function nc(e){let[t,i]=e,r=2*(Math.atan(Math.exp(i/512*(2*nn)-nn))-ns);return[(t/512*(2*nn)-nn)*na,r*na]}function nu(e){return 512/4003e4/Math.cos(e*no)}function nh(e){let{latitude:t,longitude:i,highPrecision:r=!1}=e;nr(Number.isFinite(t)&&Number.isFinite(i));let n=Math.cos(t*no),s=512/360/n,o=512/4003e4/n,a={unitsPerMeter:[o,o,o],metersPerUnit:[1/o,1/o,1/o],unitsPerDegree:[512/360,s,o],degreesPerUnit:[1/(512/360),1/s,1/o]};if(r){let e=no*Math.tan(t*no)/n,i=512/4003e4*e,r=i/s*o;a.unitsPerDegree2=[0,512/360*e/2,i],a.unitsPerMeter2=[r,0,r]}return a}function nd(e,t){let[i,r,n]=e,[s,o,a]=t,{unitsPerMeter:l,unitsPerMeter2:c}=nh({longitude:i,latitude:r,highPrecision:!0}),u=nl(e);u[0]+=s*(l[0]+c[0]*o),u[1]+=o*(l[1]+c[1]*o);let h=nc(u);return Number.isFinite(n)||Number.isFinite(a)?[h[0],h[1],(n||0)+(a||0)]:h}function np(e){return 2*Math.atan(.5/e)*na}function nf(e){return .5/Math.tan(.5*e*no)}function ng(e,t){let[i,r,n=0]=e;return nr(Number.isFinite(i)&&Number.isFinite(r)&&Number.isFinite(n)),r9(t,[i,r,n,1])}function nm(e,t,i=0){let[r,n,s]=e;if(nr(Number.isFinite(r)&&Number.isFinite(n),"invalid pixel coordinate"),Number.isFinite(s))return r9(t,[r,n,s,1]);let o=r9(t,[r,n,0,1]),a=r9(t,[r,n,1,1]),l=o[2],c=a[2];return nt.lerp([],o,a,l===c?0:((i||0)-l)/(c-l))}let ny=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,nv=`
const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}
`,nb=`
${ny}
${nv}
`,n_=`
const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}
`,nx=`
${ny}
${n_}
`,nw=i5(function({viewport:e,center:t}){return new r6(e.viewProjectionMatrix).invert().transform(t)}),nP=i5(function({viewport:e,shadowMatrices:t}){let i=[],r=e.pixelUnprojectionMatrix,n=e.isGeospatial?void 0:1,s=[[0,0,n],[e.width,0,n],[0,e.height,n],[e.width,e.height,n],[0,0,-1],[e.width,0,-1],[0,e.height,-1],[e.width,e.height,-1]].map(e=>(function(e,t){let[i,r,n]=e,s=nm([i,r,n],t);return Number.isFinite(n)?s:[s[0],s[1],0]})(e,r));for(let r of t){let t=r.clone().translate(new rH(e.center).negate()),n=s.map(e=>t.transform(e)),o=new r6().ortho({left:Math.min(...n.map(e=>e[0])),right:Math.max(...n.map(e=>e[0])),bottom:Math.min(...n.map(e=>e[1])),top:Math.max(...n.map(e=>e[1])),near:Math.min(...n.map(e=>-e[2])),far:Math.max(...n.map(e=>-e[2]))});i.push(o.multiplyRight(r))}return i}),nC=[0,0,0,1],nS=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],nM={name:"shadow",dependencies:[rf],vs:nb,fs:nx,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:function(e){let{shadowEnabled:t=!0,project:i}=e;if(!t||!i||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let r=rf.getUniforms(i),n=nw({viewport:i.viewport,center:r.center}),s=[],o=nP({shadowMatrices:e.shadowMatrices,viewport:i.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],a=e.clone().translate(new rH(i.viewport.center).negate());r.coordinateSystem===ri("lnglat")&&r.projectionMode===i1.WEB_MERCATOR?(o[t]=a,s[t]=n):(o[t]=e.clone().multiplyRight(nS),s[t]=a.transform(n))}let a={drawShadowMap:!!e.drawToShadowMap,useShadowMap:!!e.shadowMaps&&e.shadowMaps.length>0,color:e.shadowColor||nC,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)a[`viewProjectionMatrix${e}`]=o[e],a[`projectCenter${e}`]=s[e];for(let t=0;t<2;t++)a[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return a},uniformTypes:{drawShadowMap:"f32",useShadowMap:"f32",color:"vec4<f32>",lightId:"i32",lightCount:"f32",viewProjectionMatrix0:"mat4x4<f32>",viewProjectionMatrix1:"mat4x4<f32>",projectCenter0:"vec4<f32>",projectCenter1:"vec4<f32>"}},nE={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useByteColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`\
layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:function(e={},t){let i={},r=tg(e.useByteColors,!0);return void 0===e.highlightedObjectColor||(null===e.highlightedObjectColor?i.isHighlightActive=!1:(i.isHighlightActive=!0,i.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(i.highlightColor=function(e,t=!0){let i=tm(e.slice(0,3),t),r=Number.isFinite(e[3]),n=r?e[3]:1;return[i[0],i[1],i[2],t&&r?n/255:n]}(e.highlightColor,r)),void 0!==e.isActive&&(i.isActive=!!e.isActive,i.isAttribute=!!e.isAttribute),void 0!==e.useByteColors&&(i.useByteColors=!!e.useByteColors),i}},nL=`\
struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}
`,nA={...nE,source:nL,defaultUniforms:{...nE.defaultUniforms,useByteColors:!0},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},nT=[tT],nk=["vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)","vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)","vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)","fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)"],nR=[],nO=Symbol.for("component"),nI=Symbol.for("propTypes"),nj=Symbol.for("deprecatedProps"),nz=Symbol.for("asyncPropDefaults"),nD=Symbol.for("asyncPropOriginal"),nN=Symbol.for("asyncPropResolved"),nF={};function nB(e){nF=e}function nU(e,t,i,r){ir.level>0&&nF[e]&&nF[e].call(null,t,i,r)}function nV(e,t=()=>!0){return Array.isArray(e)?function e(t,i,r){let n=-1;for(;++n<t.length;){let s=t[n];Array.isArray(s)?e(s,i,r):i(s)&&r.push(s)}return r}(e,t,[]):t(e)?[e]:[]}var n$=e.i(9685);let nW=e=>null!==e&&"object"==typeof e,nG=e=>nW(e)&&e.constructor===({}).constructor,nH=e=>"u">typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer,nq=e=>nW(e)&&"number"==typeof e.byteLength&&"function"==typeof e.slice,nY=e=>"u">typeof Response&&e instanceof Response||nW(e)&&"function"==typeof e.arrayBuffer&&"function"==typeof e.text&&"function"==typeof e.json,nK=e=>"u">typeof Blob&&e instanceof Blob,nZ=e=>{let t,i;return t=e,"u">typeof ReadableStream&&t instanceof ReadableStream||nW(t)&&"function"==typeof t.tee&&"function"==typeof t.cancel&&"function"==typeof t.getReader||nW(i=e)&&"function"==typeof i.read&&"function"==typeof i.pipe&&"boolean"==typeof i.readable};function nX(e,t){if(!e)throw Error(t||"loader assertion failed.")}function nJ(e){return!!e&&(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions))}function nQ(e){let t;return nX(e,"null loader"),nX(nJ(e),"invalid loader"),Array.isArray(e)&&(t=e[1],e={...e=e[0],options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}let n0={};class n1 extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response}let n2=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,n3=/^([-\w.]+\/[-\w.+]+)/;function n4(e,t){return e.toLowerCase()===t.toLowerCase()}function n5(e){let t=n2.exec(e);return t?t[1]:""}let n6=/\?.*/;function n8(e){return e.replace(n6,"")}function n9(e){return nY(e)?e.url:nK(e)?("name"in e?e.name:"")||"":"string"==typeof e?e:""}function n7(e){if(nY(e)){let t,i=e.headers.get("content-type")||"",r=n8(e.url);return((t=n3.exec(i))?t[1]:i)||n5(r)}return nK(e)?e.type||"":"string"==typeof e?n5(e):""}async function se(e){var t;if(nY(e))return e;let i={},r=nY(t=e)?t.headers["content-length"]||-1:nK(t)?t.size:"string"==typeof t?t.length:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?t.byteLength:-1;r>=0&&(i["content-length"]=String(r));let n=n9(e),s=n7(e);s&&(i["content-type"]=s);let o=await sr(e);o&&(i["x-first-bytes"]=o),"string"==typeof e&&(e=new TextEncoder().encode(e));let a=new Response(e,{headers:i});return Object.defineProperty(a,"url",{value:n}),a}async function st(e){if(!e.ok)throw await si(e)}async function si(e){let t=function(e){if(e.length<50)return e;let t=e.slice(e.length-15),i=e.substr(0,32);return`${i}...${t}`}(e.url),i=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;i=i.length>100?`${i.slice(0,100)}...`:i;let r={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get("Content-Type");r.reason=!e.bodyUsed&&t?.includes("application/json")?await e.json():await e.text()}catch(e){}return new n1(i,r)}async function sr(e){if("string"==typeof e)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let i=new FileReader;i.onload=t=>e(t?.target?.result),i.readAsDataURL(t)})}if(e instanceof ArrayBuffer){let t=function(e){let t="",i=new Uint8Array(e);for(let e=0;e<i.byteLength;e++)t+=String.fromCharCode(i[e]);return btoa(t)}(e.slice(0,5));return`data:base64,${t}`}return null}async function sn(e,t){if("string"==typeof e){var i;let r=function(e){for(let t in n0)if(e.startsWith(t)){let i=n0[t];e=e.replace(t,i)}return e.startsWith("http://")||e.startsWith("https://")||(e=`${e}`),e}(e);return!((i=r).startsWith("http:")||i.startsWith("https:"))&&!r.startsWith("data:")&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(r,t):await fetch(r,t)}return await se(e)}e.s(["dirname",0,function(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(0,t):""},"filename",0,function(e){let t=e?e.lastIndexOf("/"):-1;return t>=0?e.substr(t+1):e},"join",0,function(...e){return(e=e.map((t,i)=>(i&&(t=t.replace(RegExp("^/"),"")),i!==e.length-1&&(t=t.replace(RegExp("/$"),"")),t))).join("/")},"resolve",0,function(...e){let t,i=[];for(let t=0;t<e.length;t++)i[t]=e[t];let r="",n=!1;for(let e=i.length-1;e>=-1&&!n;e--){let s;e>=0?s=i[e]:(void 0===t&&(t=function(){if(void 0!==v.default&&void 0!==v.default.cwd)return v.default.cwd();let e=window.location?.pathname;return e?.slice(0,e.lastIndexOf("/")+1)||""}()),s=t),0!==s.length&&(r=`${s}/${r}`,n=47===s.charCodeAt(0))}return(r=function(e,t){let i,r="",n=-1,s=0,o=!1;for(let a=0;a<=e.length;++a){if(a<e.length)i=e.charCodeAt(a);else if(47===i)break;else i=47;if(47===i){if(n===a-1||1===s);else if(n!==a-1&&2===s){if(r.length<2||!o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){let e=r.length-1,t=e;for(;t>=0&&47!==r.charCodeAt(t);--t);if(t!==e){r=-1===t?"":r.slice(0,t),n=a,s=0,o=!1;continue}}else if(2===r.length||1===r.length){r="",n=a,s=0,o=!1;continue}}t&&(r.length>0?r+="/..":r="..",o=!0)}else{let t=e.slice(n+1,a);r.length>0?r+=`/${t}`:r=t,o=!1}n=a,s=0}else 46===i&&-1!==s?++s:s=-1}return r}(r,!n),n)?`/${r}`:r.length>0?r:"."}],73276);var ss=e.i(73276),ss=ss;let so=new ii.Log({id:"loaders.gl"});class sa{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}let sl={self:"u">typeof self&&self,window:"u">typeof window&&window,global:e.g,document:"u">typeof document&&document};sl.self||sl.window||sl.global,sl.window||sl.self||sl.global,sl.global||sl.self||sl.window,sl.document;let sc=("object"!=typeof v.default||"[object process]"!==String(v.default),!0),su=void 0!==v.default&&v.default.version&&/v([0-9]*)/.exec(v.default.version);su&&parseFloat(su[1]);let sh={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}},useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:sc,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]}},sd={baseUri:"core.baseUrl",fetch:"core.fetch",mimeType:"core.mimeType",fallbackMimeType:"core.fallbackMimeType",ignoreRegisteredLoaders:"core.ignoreRegisteredLoaders",nothrow:"core.nothrow",log:"core.log",useLocalLibraries:"core.useLocalLibraries",CDN:"core.CDN",worker:"core.worker",maxConcurrency:"core.maxConcurrency",maxMobileConcurrency:"core.maxMobileConcurrency",reuseWorkers:"core.reuseWorkers",_nodeWorkers:"core.nodeWorkers",_workerType:"core._workerType",_worker:"core._workerType",limit:"core.limit",_limitMB:"core._limitMB",batchSize:"core.batchSize",batchDebounceMs:"core.batchDebounceMs",metadata:"core.metadata",transforms:"core.transforms",throws:"nothrow",dataType:"(no longer used)",uri:"core.baseUrl",method:"core.fetch.method",headers:"core.fetch.headers",body:"core.fetch.body",mode:"core.fetch.mode",credentials:"core.fetch.credentials",cache:"core.fetch.cache",redirect:"core.fetch.redirect",referrer:"core.fetch.referrer",referrerPolicy:"core.fetch.referrerPolicy",integrity:"core.fetch.integrity",keepalive:"core.fetch.keepalive",signal:"core.fetch.signal"},sp=["baseUrl","fetch","mimeType","fallbackMimeType","ignoreRegisteredLoaders","nothrow","log","useLocalLibraries","CDN","worker","maxConcurrency","maxMobileConcurrency","reuseWorkers","_nodeWorkers","_workerType","limit","_limitMB","batchSize","batchDebounceMs","metadata","transforms"];function sf(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||(e._state={}),e._state}function sg(){let e=sf();return e.globalOptions=e.globalOptions||{...sh,core:{...sh.core}},sm(e.globalOptions)}function sm(e){var t;let i,r=(i={...t=e},t.core&&(i.core={...t.core}),i);for(let e of(sb(r),sp))r.core&&void 0!==r.core[e]&&delete r[e];return r.core&&void 0!==r.core._workerType&&delete r._worker,r}function sy(e,t,i,r,n){let s=t||"Top level",o=t?`${t}.`:"";for(let a in e){let l=!t&&nW(e[a]),c="baseUri"===a&&!t,u="workerUrl"===a&&t;if(!(a in i)&&!c&&!u){if(a in r)so.level>0&&so.warn(`${s} loader option '${o}${a}' no longer supported, use '${r[a]}'`)();else if(!l&&so.level>0){let e=function(e,t){let i=e.toLowerCase(),r="";for(let n of t)for(let t in n.options){if(e===t)return`Did you mean '${n.id}.${t}'?`;let s=t.toLowerCase();(i.startsWith(s)||s.startsWith(i))&&(r=r||`Did you mean '${n.id}.${t}'?`)}return r}(a,n);so.warn(`${s} loader option '${o}${a}' not recognized. ${e}`)()}}}}function sv(e,t){for(let i in t)i in t&&(nG(t[i])&&nG(e[i])?e[i]={...e[i],...t[i]}:e[i]=t[i])}function sb(e){for(let t of(void 0!==e.baseUri&&(e.core||={},void 0===e.core.baseUrl&&(e.core.baseUrl=e.baseUri)),sp))if(void 0!==e[t]){let i=e.core=e.core||{};void 0===i[t]&&(i[t]=e[t])}let t=e._worker;void 0!==t&&(e.core||={},void 0===e.core._workerType&&(e.core._workerType=t))}function s_(e,t){let i=sg(),r=e||i,n=r.fetch??r.core?.fetch;return"function"==typeof n?n:nW(n)?e=>sn(e,n):t?.fetch?t?.fetch:sn}let sx={self:"u">typeof self&&self,window:"u">typeof window&&window,global:e.g,document:"u">typeof document&&document};sx.self||sx.window||sx.global,sx.window||sx.self||sx.global,sx.global||sx.self||sx.window,sx.document;let sw="object"!=typeof v.default||"[object process]"!==String(v.default)||!0,sP="u">typeof window&&void 0!==window.orientation,sC=void 0!==v.default&&v.default.version&&/v([0-9]*)/.exec(v.default.version);sC&&parseFloat(sC[1]);class sS{terminate(){}}function sM(e,t){if(!e)throw Error(t||"loaders.gl assertion failed.")}let sE=new Map;function sL(e){let t=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(t)}function sA(e){return!!e&&!!(e instanceof ArrayBuffer||"u">typeof MessagePort&&e instanceof MessagePort||"u">typeof ImageBitmap&&e instanceof ImageBitmap||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas)}let sT=()=>{};class sk{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL="";static isSupported(){return"u">typeof Worker&&sw||!sw}constructor(e){const{name:t,source:i,url:r}=e;sM(i||r),this.name=t,this.source=i,this.url=r,this.onMessage=sT,this.onError=e=>console.log(e),this.worker=sw?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=sT,this.onError=sT,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t=t||function e(t,i=!0,r){let n=r||new Set;if(t){if(sA(t))n.add(t);else if(sA(t.buffer))n.add(t.buffer);else if(ArrayBuffer.isView(t));else if(i&&"object"==typeof t)for(let r in t)e(t[r],i,n)}return void 0===r?Array.from(n):[]}(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t="Failed to load ";return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){var e,t,i;let r;this._loadableURL=(sM((e={source:this.source,url:this.url}).source&&!e.url||!e.source&&e.url),(r=sE.get(e.source||e.url))||(e.url&&(r=(t=e.url).startsWith("http")?sL((i=t,`\
try {
  importScripts('${i}');
} catch (error) {
  console.error(error);
  throw error;
}`)):t,sE.set(e.url,r)),e.source&&(r=sL(e.source),sE.set(e.source,r))),sM(r),r);let n=new Worker(this._loadableURL,{name:this.name});return n.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error("No data received"))},n.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},n.onmessageerror=e=>console.error(e),n}_createNodeWorker(){let e;if(this.url)e=new sS(this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(".ts")||this.url.endsWith(".mjs")?"module":"commonjs"});else if(this.source)e=new sS(this.source,{eval:!0});else throw Error("no worker");return e.on("message",e=>{this.onMessage(e)}),e.on("error",e=>{this.onError(e)}),e.on("exit",e=>{}),e}}class sR{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:"loaders.gl",type:e,payload:t})}done(e){sM(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){sM(this.isRunning),this.isRunning=!1,this._reject(e)}}class sO{name="unnamed";source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return sk.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},void 0!==e.name&&(this.name=e.name),void 0!==e.maxConcurrency&&(this.maxConcurrency=e.maxConcurrency),void 0!==e.maxMobileConcurrency&&(this.maxMobileConcurrency=e.maxMobileConcurrency),void 0!==e.reuseWorkers&&(this.reuseWorkers=e.reuseWorkers),void 0!==e.onDebug&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,i)=>e.done(i),i=(e,t)=>e.error(t)){let r=new Promise(r=>(this.jobQueue.push({name:e,onMessage:t,onError:i,onStart:r}),this));return this._startQueuedJob(),await r}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:"Starting job",name:t.name,workerThread:e,backlog:this.jobQueue.length});let i=new sR(t.name,e);e.onMessage=e=>t.onMessage(i,e.type,e.payload),e.onError=e=>t.onError(i,e),t.onStart(i);try{await i.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!sw||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new sk({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return sP?this.maxMobileConcurrency:this.maxConcurrency}}let sI={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}};class sj{props;workerPools=new Map;static _workerFarm;static isSupported(){return sk.isSupported()}static getWorkerFarm(e={}){return sj._workerFarm=sj._workerFarm||new sj({}),sj._workerFarm.setProps(e),sj._workerFarm}constructor(e){this.props={...sI},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){for(let t of(this.props={...this.props,...e},this.workerPools.values()))t.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:i,url:r}=e,n=this.workerPools.get(t);return n||((n=new sO({name:t,source:i,url:r})).setProps(this._getWorkerPoolProps()),this.workerPools.set(t,n)),n}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}}async function sz(e,t,i,r,n){let s=e.id,o=function(e,t={}){let i=t[e.id]||{},r=sw?`${e.id}-worker.js`:`${e.id}-worker-node.js`,n=i.workerUrl;if(n||"compression"!==e.id||(n=t.workerUrl),"test"===(t._workerType||t?.core?._workerType)&&(n=sw?`modules/${e.module}/dist/${r}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!n){let t=e.version;"latest"===t&&(t="latest");let i=t?`@${t}`:"";n=`https://unpkg.com/@loaders.gl/${e.module}${i}/dist/${r}`}return sM(n),n}(e,i),a=sj.getWorkerFarm(i?.core).getWorkerPool({name:s,url:o});i=JSON.parse(JSON.stringify(i)),r=JSON.parse(JSON.stringify(r||{}));let l=await a.startJob("process-on-worker",sD.bind(null,n));l.postMessage("process",{input:t,options:i,context:r});let c=await l.result;return await c.result}async function sD(e,t,i,r){switch(i){case"done":t.done(r);break;case"error":t.error(Error(r.error));break;case"process":let{id:n,input:s,options:o}=r;try{let i=await e(s,o);t.postMessage("done",{id:n,result:i})}catch(i){let e=i instanceof Error?i.message:"unknown error";t.postMessage("error",{id:n,error:e})}break;default:console.warn(`parse-with-worker unknown message ${i}`)}}let sN=(globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.4.5"),globalThis._loadersgl_.version);async function sF(e){let t=[];for await(let i of e)t.push(function(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:i,byteLength:r}=e;return sB(t,i,r)}return sB(e)}(i));return function(...e){var t=e;let i=t.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),r=new Uint8Array(i.reduce((e,t)=>e+t.byteLength,0)),n=0;for(let e of i)r.set(e,n),n+=e.byteLength;return r.buffer}(...t)}function sB(e,t=0,i=e.byteLength-t){let r=new Uint8Array(e,t,i),n=new Uint8Array(r.length);return n.set(r),n.buffer}function sU(e){return e&&"object"==typeof e&&e.isBuffer}function sV(e){if(sU(e)||e instanceof ArrayBuffer)return e;if(nH(e))return sW(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return 0===e.byteOffset&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if("string"==typeof e)return new TextEncoder().encode(e).buffer;if(e&&"object"==typeof e&&e._toArrayBuffer)return e._toArrayBuffer();throw Error("toArrayBuffer")}function s$(e){if(e instanceof ArrayBuffer)return e;if(nH(e))return sW(e);let{buffer:t,byteOffset:i,byteLength:r}=e;return t instanceof ArrayBuffer&&0===i&&r===t.byteLength?t:sW(t,i,r)}function sW(e,t=0,i=e.byteLength-t){let r=new Uint8Array(e,t,i),n=new Uint8Array(r.length);return n.set(r),n.buffer}async function*sG(e,t){let i=t?.chunkSize||1048576,r=0;for(;r<e.size;){let t=r+i,n=await e.slice(r,t).arrayBuffer();r=t,yield n}}function sH(e,t){return sc?sq(e,t):sY(e,t)}async function*sq(e,t){let i,r=e.getReader();try{for(;;){let e=i||r.read();t?._streamReadAhead&&(i=r.read());let{done:n,value:s}=await e;if(n)return;yield sV(s)}}catch(e){r.releaseLock()}}async function*sY(e,t){for await(let t of e)yield sV(t)}let sK="Cannot convert supplied data type";async function sZ(e,t,i){let r,n;if("string"==typeof e||nq(e)){var s,o=e;if(t.text&&"string"==typeof o)return o;if(sU(o)&&(o=o.buffer),nq(o)){let e=ArrayBuffer.isView(s=o)?s:new Uint8Array(s);return t.text&&!t.binary?new TextDecoder("utf8").decode(e):sV(e)}throw Error(sK)}if(nK(e)&&(e=await se(e)),nY(e))return await st(e),t.binary?await e.arrayBuffer():await e.text();if(nZ(e)&&(e=function(e,t){if("string"==typeof e)return function*(e,t){let i=t?.chunkSize||262144,r=0,n=new TextEncoder;for(;r<e.length;){let t=Math.min(e.length-r,i),s=e.slice(r,r+t);r+=t,yield s$(n.encode(s))}}(e,t);if(e instanceof ArrayBuffer)return function*(e,t={}){let{chunkSize:i=262144}=t,r=0;for(;r<e.byteLength;){let t=Math.min(e.byteLength-r,i),n=new ArrayBuffer(t),s=new Uint8Array(e,r,t);new Uint8Array(n).set(s),r+=t,yield n}}(e,t);if(nK(e))return sG(e,t);if(nZ(e))return sH(e,t);if(nY(e)){let i=e.body;if(!i)throw Error("Readable stream not available on Response");return sH(i,t)}throw Error("makeIterator")}(e,i)),(r=e)&&"function"==typeof r[Symbol.iterator]||(n=e)&&"function"==typeof n[Symbol.asyncIterator])return sF(e);throw Error(sK)}var ss=ss,ss=ss;let sX="4.4.5",sJ=sX[0]>="0"&&sX[0]<="9"?`v${sX}`:"",sQ=(c=new ii.Log({id:"loaders.gl"}),globalThis.loaders||={},globalThis.loaders.log=c,globalThis.loaders.version=sJ,globalThis.probe||={},globalThis.probe.loaders=c,c),s0=()=>{let e=sf();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry},s1=/\.([^.]+)$/;async function s2(e,t=[],i,r){if(!s5(e))return null;let n=sm(i||{});if(n.core||={},e instanceof Response&&s3(e)){let i=s4(await e.clone().text(),t,{...n,core:{...n.core,nothrow:!0}},r);if(i)return i}let s=s4(e,t,{...n,core:{...n.core,nothrow:!0}},r);if(s)return s;if(nK(e)&&(s=s4(e=await e.slice(0,10).arrayBuffer(),t,n,r)),!s&&e instanceof Response&&s3(e)&&(s=s4(await e.clone().text(),t,n,r)),!s&&!n.core.nothrow)throw Error(s6(e));return s}function s3(e){let t=n7(e);return!!(t&&(t.startsWith("text/")||"application/json"===t||t.endsWith("+json")))}function s4(e,t=[],i,r){var n,s,o,a,l,c;let u,h,d,p,f,g,m;if(!s5(e))return null;let y=sm(i||{});if(y.core||={},t&&!Array.isArray(t))return nQ(t);let v=[];t&&(v=v.concat(t)),y.core.ignoreRegisteredLoaders||v.push(...s0()),function(e){for(let t of e)nQ(t)}(v);let b=(n=e,s=v,o=y,a=r,u=n9(n),h=n7(n),d=n8(u)||a?.url,p=null,f="",o?.core?.mimeType&&(p=s8(s,o?.core?.mimeType),f=`match forced by supplied MIME type ${o?.core?.mimeType}`),p=p||(l=s,(m=(g=(c=d)&&s1.exec(c))&&g[1])?function(e,t){for(let i of(t=t.toLowerCase(),e))for(let e of i.extensions)if(e.toLowerCase()===t)return i;return null}(l,m):null),f=f||(p?`matched url ${d}`:""),p=p||s8(s,h),f=f||(p?`matched MIME type ${h}`:""),p=p||function(e,t){if(!t)return null;for(let i of e)if("string"==typeof t){if(function(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}(t,i))return i}else if(ArrayBuffer.isView(t)){if(s9(t.buffer,t.byteOffset,i))return i}else if(t instanceof ArrayBuffer&&s9(t,0,i))return i;return null}(s,n),f=f||(p?`matched initial data ${s7(n)}`:""),o?.core?.fallbackMimeType&&(p=p||s8(s,o?.core?.fallbackMimeType),f=f||(p?`matched fallback MIME type ${h}`:"")),f&&sQ.log(1,`selectLoader selected ${p?.name}: ${f}.`),p);if(!b&&!y.core.nothrow)throw Error(s6(e));return b}function s5(e){return!(e instanceof Response)||204!==e.status}function s6(e){let t=n9(e),i=n7(e),r="No valid loader found (";r+=(t?`${ss.filename(t)}, `:"no url provided, ")+`MIME type: ${i?`"${i}"`:"not provided"}, `;let n=e?s7(e):"";return r+((n?` first bytes: "${n}"`:"first bytes: not available")+")")}function s8(e,t){for(let i of e)if(i.mimeTypes?.some(e=>n4(t,e))||n4(t,`application/x.${i.id}`))return i;return null}function s9(e,t,i){return(Array.isArray(i.tests)?i.tests:[i.tests]).some(i=>(function(e,t,i){if(nq(i))return function(e,t,i){if(i=i||e.byteLength,e.byteLength<i||t.byteLength<i)return!1;let r=new Uint8Array(e),n=new Uint8Array(t);for(let e=0;e<r.length;++e)if(r[e]!==n[e])return!1;return!0}(i,e,i.byteLength);switch(typeof i){case"function":return i(s$(e));case"string":let r=oe(e,t,i.length);return i===r;default:return!1}})(e,t,i))}function s7(e,t=5){return"string"==typeof e?e.slice(0,t):ArrayBuffer.isView(e)?oe(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?oe(e,0,t):""}function oe(e,t,i){if(e.byteLength<t+i)return"";let r=new DataView(e),n="";for(let e=0;e<i;e++)n+=String.fromCharCode(r.getUint8(t+e));return n}async function ot(e,t,i,r){var n,s,o,a,l,c,u;let h,d;!t||Array.isArray(t)||nJ(t)||(r=void 0,i=t,t=void 0),e=await e,i=i||{};let p=n9(e),f=function(e,t){let i;if(e&&!Array.isArray(e))return e;if(e&&(i=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];i=i?[...i,...e]:e}return i&&i.length?i:void 0}(t,r),g=await s2(e,f,i);if(!g)return null;let m=(function(e,t){for(let i of(sy(e,null,sh,sd,t),t)){let r=e&&e[i.id]||{},n=i.options&&i.options[i.id]||{},s=i.deprecatedOptions&&i.deprecatedOptions[i.id]||{};sy(r,i.id,n,s,t)}}(n=i,s=Array.isArray(s=(s=f)||[])?s:[s]),sm((o=g,a=n,l=p,d={...h=o.options||{}},h.core&&(d.core={...h.core}),sb(d),d.core?.log===null&&(d.core={...d.core,log:new sa}),sv(d,sm(sg())),sv(d,sm(a)),c=d,(u=l)&&c.core?.baseUrl===void 0&&(c.core||={},c.core.baseUrl=ss.dirname(n8(u))),function(e){let t=e.core;if(t)for(let i of sp)void 0!==t[i]&&(e[i]=t[i])}(d),d)));return r=function(e,t,i){if(i)return i;let r={fetch:s_(t,e),...e};if(r.url){let e,t=n8(r.url);r.baseUrl=t,e=r.url.match(n6),r.queryString=e&&e[0],r.filename=ss.filename(t),r.baseUrl=ss.dirname(t)}return Array.isArray(r.loaders)||(r.loaders=null),r}({url:p,_parse:ot,loaders:f},m,r||null),await oi(g,e,m,r)}async function oi(e,t,i,r){if(!function(e,t=sN){sM(e,"no worker provided");e.version}(e),i=function e(t,i,r=0){if(r>3)return i;let n={...t};for(let[t,s]of Object.entries(i))s&&"object"==typeof s&&!Array.isArray(s)?n[t]=e(n[t]||{},i[t],r+1):n[t]=i[t];return n}(e.options||{},i),nY(t)){let{ok:e,redirected:i,status:n,statusText:s,type:o,url:a}=t;r.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:i,status:n,statusText:s,type:o,url:a}}if(t=await sZ(t,e,i),e.parseTextSync&&"string"==typeof t)return e.parseTextSync(t,i,r);if(function(e,t){if(!sj.isSupported())return!1;let i=t?._nodeWorkers??t?.core?._nodeWorkers;if(!sw&&!i)return!1;let r=t?.worker??t?.core?.worker;return!!(e.worker&&r)}(e,i))return await sz(e,t,i,r,ot);if(e.parseText&&"string"==typeof t)return await e.parseText(t,i,r);if(e.parse)return await e.parse(t,i,r);throw sM(!e.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}async function or(e,t,i,r){let n,s;Array.isArray(t)||nJ(t)?(n=t,s=i):(n=[],s=t);let o=s_(s),a=e;if("string"==typeof e&&(a=await o(e)),nK(e)&&(a=await o(e)),"string"==typeof e){let t=sm(s||{});t.core?.baseUrl||(s={...s,core:{...s?.core,baseUrl:e}})}return Array.isArray(n),await ot(a,n,s)}class on{constructor(e,t,i){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=i,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let i=++this._loadCount,r=e;for(let t of("string"==typeof e&&(r=or(e)),r instanceof Promise?(this.isLoaded=!1,this._loader=r.then(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===i&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e),this._subscribers))t.onChange(this.getData())}}class os{constructor(e){this.protocol=e.protocol||"resource://",this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return!!e.startsWith(this.protocol)||e in this._resources}add({resourceId:e,data:t,forceUpdate:i=!1,persistent:r=!0}){let n=this._resources[e];n?n.setData(t,i):(n=new on(e,t,this._context),this._resources[e]=n),n.persistent=r}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let i=t[e],r=this._resources[i.resourceId];r&&r.unsubscribe(i)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:i,requestId:r="default"}){let{_resources:n,protocol:s}=this;e.startsWith(s)&&(n[e=e.replace(s,"")]||this.add({resourceId:e,data:null,persistent:!1}));let o=n[e];if(this._track(i,r,o,t),o)return o.getData()}prune(){this._pruneRequest||(this._pruneRequest=setTimeout(()=>this._prune(),0))}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,i,r){let n=this._consumers,s=n[e]=n[e]||{},o=s[t],a=o&&o.resourceId&&this._resources[o.resourceId];a&&(a.unsubscribe(o),this.prune()),i&&(o?(o.onChange=r,o.resourceId=i.id):o={onChange:r,resourceId:i.id},s[t]=o,i.subscribe(o))}_prune(){for(let e of(this._pruneRequest=null,Object.keys(this._resources))){let t=this._resources[e];t.persistent||t.inUse()||(t.delete(),delete this._resources[e])}}}let oo=new class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:i=1,type:r,padding:n=0,copy:s=!1,initialize:o=!1,maxCount:a}){let l=r||e&&e.constructor||Float32Array,c=t*i+n;if(ArrayBuffer.isView(e)){if(c<=e.length)return e;if(c*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new l(e.buffer,0,c)}let u=1/0;a&&(u=a*i+n);let h=this._allocate(l,c,o,u);return e&&s?h.set(e):o||h.fill(0,0,4),this._release(e),h}release(e){this._release(e)}_allocate(e,t,i,r){let n=Math.max(Math.ceil(t*this.opts.overAlloc),1);n>r&&(n=r);let s=this._pool,o=e.BYTES_PER_ELEMENT*n,a=s.findIndex(e=>e.byteLength>=o);if(a>=0){let t=new e(s.splice(a,1)[0],0,n);return i&&t.fill(0),t}return new e(n)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:i}=e,{byteLength:r}=i,n=t.findIndex(e=>e.byteLength>=r);n<0?t.push(i):(n>0||t.length<this.opts.poolSize)&&t.splice(n,0,i),t.length>this.opts.poolSize&&t.shift()}};function oa(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function ol(e,t){let i=e%t;return i<0?t+i:i}let oc=new rH;function ou(e,t,i,r){oc.set(e,t,i);let n=oc.len();return{distance:r/n,normal:new rH(-e/n,-t/n,-i/n)}}function oh(e,t){let{size:i=1,startIndex:r=0}=t,s=void 0!==t.endIndex?t.endIndex:e.length,o=(s-r)/i;n=oo.allocate(n,o,{type:Float32Array,size:2*i});let a=r,l=0;for(;a<s;){for(let t=0;t<i;t++){let r=e[a++];n[l+t]=r,n[l+t+i]=r-Math.fround(r)}l+=2*i}return n.subarray(0,o*i*2)}function od(e){let t=null,i=!1;for(let r of e)r&&(t?(i||(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],i=!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}var t0=t0;let op=Math.PI/180,of=oa(),og=[0,0,0],om={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};class oy{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||"viewport",this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||om,this.focalDistance=e.focalDistance||1,this.position=e.position||og,this.modelMatrix=e.modelMatrix||null;const{longitude:t,latitude:i}=e;this.isGeospatial=Number.isFinite(i)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?i1.WEB_MERCATOR:i1.WEB_MERCATOR_AUTO_OFFSET:i1.IDENTITY}equals(e){return e instanceof oy&&(this===e||e.width===this.width&&e.height===this.height&&e.scale===this.scale&&r_(e.projectionMatrix,this.projectionMatrix)&&r_(e.viewMatrix,this.viewMatrix))}project(e,{topLeft:t=!0}={}){let i=ng(this.projectPosition(e),this.pixelProjectionMatrix),[r,n]=i,s=t?n:this.height-n;return 2===e.length?[r,s]:[r,s,i[2]]}unproject(e,{topLeft:t=!0,targetZ:i}={}){let[r,n,s]=e,o=t?n:this.height-n,a=i&&i*this.distanceScales.unitsPerMeter[2],l=nm([r,o,s],this.pixelUnprojectionMatrix,a),[c,u,h]=this.unprojectPosition(l);return Number.isFinite(s)?[c,u,h]:Number.isFinite(i)?[c,u,i]:[c,u]}projectPosition(e){let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,i]=this.unprojectFlat(e);return[t,i,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=nl(e);return t[1]=rv(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?nc(e):e}getBounds(e={}){let t={targetZ:e.z||0},i=this.unproject([0,0],t),r=this.unproject([this.width,0],t),n=this.unproject([0,this.height],t),s=this.unproject([this.width,this.height],t);return[Math.min(i[0],r[0],n[0],s[0]),Math.min(i[1],r[1],n[1],s[1]),Math.max(i[0],r[0],n[0],s[0]),Math.max(i[1],r[1],n[1],s[1])]}getDistanceScales(e){return e&&this.isGeospatial?nh({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:i=1,height:r=1}){return e<this.x+this.width&&this.x<e+i&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){var e;return this._frustumPlanes.near?this._frustumPlanes:(Object.assign(this._frustumPlanes,{left:ou((e=this.viewProjectionMatrix)[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:ou(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:ou(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:ou(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:ou(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:ou(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}),this._frustumPlanes)}panByPosition(e,t,i){return null}_initProps(e){let t=e.longitude,i=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=function(e){let{latitude:t}=e;return nr(Number.isFinite(t)),ne(4003e4*Math.cos(t*no))-9}({latitude:i})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||nh({latitude:i,longitude:t}));let r=Math.pow(2,this.zoom);this.scale=r;let{position:n,modelMatrix:s}=e,o=og;if(n&&(o=s?new r6(s).transformAsVector(n,[]):n),this.isGeospatial){let e=this.projectPosition([t,i,0]);this.center=new rH(o).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(o)}_initMatrices(e){var t;let{viewMatrix:i=of,projectionMatrix:r=null,orthographic:n=!1,fovyRadians:s,fovy:o=75,near:a=.1,far:l=1e3,padding:c=null,focalDistance:u=1}=e;this.viewMatrixUncentered=i,this.viewMatrix=new r6().multiplyRight(i).translate(new rH(this.center).negate()),this.projectionMatrix=r||function({width:e,height:t,orthographic:i,fovyRadians:r,focalDistance:n,padding:s,near:o,far:a}){let l=e/t,c=i?new r6().orthographic({fovy:r,aspect:l,focalDistance:n,near:o,far:a}):new r6().perspective({fovy:r,aspect:l,near:o,far:a});if(s){let{left:i=0,right:r=0,top:n=0,bottom:o=0}=s,a=rv((i+e-r)/2,0,e)-e/2,l=rv((n+t-o)/2,0,t)-t/2;c[8]-=2*a/e,c[9]+=2*l/t}return c}({width:this.width,height:this.height,orthographic:n,fovyRadians:s||o*op,focalDistance:u,padding:c,near:a,far:l});let h=oa();t0.multiply(h,h,this.projectionMatrix),t0.multiply(h,h,this.viewMatrix),this.viewProjectionMatrix=h,this.viewMatrixInverse=t0.invert([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=[(t=this.viewMatrixInverse)[12],t[13],t[14]];let d=oa(),p=oa();t0.scale(d,d,[this.width/2,-this.height/2,1]),t0.translate(d,d,[1,-1,0]),t0.multiply(p,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=p,this.pixelUnprojectionMatrix=t0.invert(oa(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||ir.warn("Pixel project matrix not invertible")()}}oy.displayName="Viewport";let ov=oy;class ob{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{nU("layerManager.activateViewport",this,e),e&&(this.context.viewport=e)};const{deck:i,stats:r,viewport:n,timeline:s}=t||{};this.layers=[],this.resourceManager=new os({device:e,protocol:"deck://"}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:i,shaderAssembler:function(e){let t=tc.getDefaultShaderAssembler();for(let e of nT)t.addDefaultModule(e);for(let i of(t._hookFunctions.length=0,"glsl"===e?nk:nR))t.addShaderHook(i);return t}(e?.info?.shadingLanguage||"glsl"),defaultShaderModules:[tE],renderPass:void 0,stats:r||new n$.Stats({id:"deck.gl"}),viewport:n||new ov({id:"DEFAULT-INITIAL-VIEWPORT"}),timeline:s||new ev,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){for(let e of(this.resourceManager.finalize(),this.layers))this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;for(let i of(e.clearRedrawFlags&&(this._needsRedraw=!1),this.layers)){let r=i.getNeedsRedraw(e);t=t||r}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?"layers changed":this._defaultShaderModulesChanged?"shader modules changed":this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>0===t.id.indexOf(e))):this.layers}setProps(e){"debug"in e&&(this._debug=e.debug),"userData"in e&&(this.context.userData=e.userData),"layers"in e&&(this._nextLayers=e.layers),"onError"in e&&(this.context.onError=e.onError)}setLayers(e,t){nU("layerManager.setLayers",this,t,e),this._lastRenderedLayers=e;let i=nV(e,Boolean);for(let e of i)e.context=this.context;this._updateLayers(this.layers,i)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,i=t.findIndex(t=>t.name===e.name);i>=0&&(t.splice(i,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,i){i.raiseError(t,`${e} of ${i}`)}_updateLayers(e,t){let i={};for(let t of e)i[t.id]?ir.warn(`Multiple old layers with same id ${t.id}`)():i[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let r=[];this._updateSublayersRecursively(t,i,r),this._finalizeOldLayers(i);let n=!1;for(let e of r)if(e.hasUniformTransition()){n=`Uniform transition in ${e}`;break}this._needsUpdate=n,this.layers=r}_updateSublayersRecursively(e,t,i){for(let r of e){r.context=this.context;let e=t[r.id];null===e&&ir.warn(`Multiple new layers with same id ${r.id}`)(),t[r.id]=null;let n=null;try{this._debug&&e!==r&&r.validateProps(),e?(this._transferLayerState(e,r),this._updateLayer(r)):this._initializeLayer(r),i.push(r),n=r.isComposite?r.getSubLayers():null}catch(e){this._handleError("matching",e,r)}n&&this._updateSublayersRecursively(n,t,i)}}_finalizeOldLayers(e){for(let t in e){let i=e[t];i&&this._finalizeLayer(i)}}_initializeLayer(e){try{e._initialize(),e.lifecycle="Initialized"}catch(t){this._handleError("initialization",t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle="Matched. State transferred from previous layer",t!==e&&(e.lifecycle="Discarded. Awaiting garbage collection")}_updateLayer(e){try{e._update()}catch(t){this._handleError("update",t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle="No longer matched. Awaiting garbage collection";try{e._finalize(),e.lifecycle="Finalized! Awaiting garbage collection"}catch(t){this._handleError("finalization",t,e)}}}function o_(e,t,i){if(e===t)return!0;if(!i||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!o_(e[r],t[r],i-1))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n of r)if(!t.hasOwnProperty(n)||!o_(e[n],t[n],i-1))return!1;return!0}return!1}class ox{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw="First render",this._needsUpdate="Initialize",this._eventManager=e.eventManager,this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>t.containsPixel(e)):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t="string"==typeof e?this.getView(e):e,i=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(i):i}getViewport(e){return this._viewportMap[e]}unproject(e,t){let i=this.getViewports(),r={x:e[0],y:e[1]};for(let n=i.length-1;n>=0;--n){let s=i[n];if(s.containsPixel(r)){let i=e.slice();return i[0]-=s.x,i[1]-=s.y,s.unproject(i,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),("width"in e||"height"in e)&&this._setSize(e.width,e.height),"pickPosition"in e&&(this._pickPosition=e.pickPosition),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate("Size changed"))}_setViews(e){e=nV(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate("views changed"),this.views=e}_setViewState(e){e?(o_(e,this.viewState,3)||this.setNeedsUpdate("viewState changed"),this.viewState=e):ir.warn("missing `viewState` or `initialViewState`")()}_createController(e,t){return new t.type({timeline:this.timeline,eventManager:this._eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,width:this.width,height:this.height}),pickPosition:this._pickPosition})}_updateController(e,t,i,r){let n=e.controller;if(n&&i){let s={...t,...n,id:e.id,x:i.x,y:i.y,width:i.width,height:i.height};return r&&r.constructor===n.type||(r=this._createController(e,s)),r&&r.setProps(s),r}return null}_rebuildViewports(){let{views:e}=this,t=this.controllers;this._viewports=[],this.controllers={};let i=!1;for(let r=e.length;r--;){let n=e[r],s=this.getViewState(n),o=n.makeViewport({viewState:s,width:this.width,height:this.height}),a=t[n.id],l=!!n.controller;l&&!a&&(i=!0),(i||!l)&&a&&(a.finalize(),a=null),this.controllers[n.id]=this._updateController(n,s,o,a),o&&this._viewports.unshift(o)}for(let e in t){let i=t[e];i&&!this.controllers[e]&&i.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length!==t.length||e.some((i,r)=>!e[r].equals(t[r]))}}let ow=/^(?:\d+\.?\d*|\.\d+)$/;function oP(e){switch(typeof e){case"number":if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:"literal",value:e};case"string":try{let t=function(e){let t=[],i=0;for(;i<e.length;){let r=e[i];if(/\s/.test(r)){i++;continue}if("+"===r||"-"===r||"("===r||")"===r||"%"===r){t.push({type:"symbol",value:r}),i++;continue}if(oM(r)||"."===r){let n=i,s="."===r;for(i++;i<e.length;){let t=e[i];if(oM(t)){i++;continue}if("."===t&&!s){s=!0,i++;continue}break}let o=e.slice(n,i);if(!ow.test(o))throw Error("Invalid number token");t.push({type:"number",value:parseFloat(o)});continue}if(oE(r)){let r=i;for(;i<e.length&&oE(e[i]);)i++;let n=e.slice(r,i).toLowerCase();t.push({type:"word",value:n});continue}throw Error("Invalid token in position string")}return t}(e);return new oS(t).parseExpression()}catch(i){let t=i instanceof Error?i.message:String(i);throw Error(`Could not parse position string ${e}: ${t}`)}default:throw Error(`Could not parse position string ${e}`)}}function oC(e,t){return function e(t,i){switch(t.type){case"literal":return t.value;case"percentage":return Math.round(t.value*i);case"binary":let r=e(t.left,i),n=e(t.right,i);return"+"===t.operator?r+n:r-n;default:throw Error("Unknown layout expression type")}}(e,t)}class oS{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error("Unexpected token at end of expression");return e}parseBinaryExpression(){var e;let t=this.parseFactor(),i=this.peek();for(;(e=i)&&"symbol"===e.type&&("+"===e.value||"-"===e.value);){this.index++;let e=this.parseFactor();t={type:"binary",operator:i.value,left:t,right:e},i=this.peek()}return t}parseFactor(){let e=this.peek();if(!e)throw Error("Unexpected end of expression");if("symbol"===e.type&&"+"===e.value)return this.index++,this.parseFactor();if("symbol"===e.type&&"-"===e.value)return this.index++,{type:"binary",operator:"-",left:{type:"literal",value:0},right:this.parseFactor()};if("symbol"===e.type&&"("===e.value){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("word"===e.type&&"calc"===e.value){if(this.index++,!this.consumeSymbol("("))throw Error("Missing opening parenthesis after calc");let e=this.parseBinaryExpression();if(!this.consumeSymbol(")"))throw Error("Missing closing parenthesis");return e}if("number"===e.type){this.index++;let t=e.value,i=this.peek();return i&&"symbol"===i.type&&"%"===i.value?(this.index++,{type:"percentage",value:t/100}):(i&&"word"===i.type&&"px"===i.value&&this.index++,{type:"literal",value:t})}throw Error("Unexpected token in expression")}consumeSymbol(e){let t=this.peek();return!!t&&"symbol"===t.type&&t.value===e&&(this.index++,!0)}peek(){return this.tokens[this.index]||null}}function oM(e){return e>="0"&&e<="9"}function oE(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"}class oL{constructor(e){const{id:t,x:i=0,y:r=0,width:n="100%",height:s="100%",padding:o=null}=e;this.id=t||this.constructor.displayName||"view",this.props={...e,id:this.id},this._x=oP(i),this._y=oP(r),this._width=oP(n),this._height=oP(s),this._padding=o&&{left:oP(o.left||0),right:oP(o.right||0),top:oP(o.top||0),bottom:oP(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e||this.constructor===e.constructor&&o_(this.props,e.props,2)}clone(e){return new this.constructor({...this.props,...e})}makeViewport({width:e,height:t,viewState:i}){i=this.filterViewState(i);let r=this.getDimensions({width:e,height:t});return r.height&&r.width?new(this.getViewportType(i))({...i,...this.props,...r}):null}getViewStateId(){let{viewState:e}=this.props;return"string"==typeof e?e:e?.id||this.id}filterViewState(e){if(this.props.viewState&&"object"==typeof this.props.viewState){if(!this.props.viewState.id)return this.props.viewState;var t=this.props.viewState;let i={...e};for(let e in t)"id"!==e&&(Array.isArray(i[e])&&Array.isArray(t[e])?i[e]=function(e,t){e=e.slice();for(let i=0;i<t.length;i++){let r=t[i];Number.isFinite(r)&&(e[i]=r)}return e}(i[e],t[e]):i[e]=t[e]);return i}return e}getDimensions({width:e,height:t}){let i={x:oC(this._x,e),y:oC(this._y,t),width:oC(this._width,e),height:oC(this._height,t)};return this._padding&&(i.padding={left:oC(this._padding.left,e),top:oC(this._padding.top,t),right:oC(this._padding.right,e),bottom:oC(this._padding.bottom,t)}),i}get controller(){let e=this.props.controller;return e?!0===e?{type:this.ControllerType}:"function"==typeof e?{type:e}:{type:this.ControllerType,...e}:null}}var nt=nt;let oA=Math.PI/180;function oT(e,t,i){let{pixelUnprojectionMatrix:r}=e,n=r9(r,[t,0,1,1]),s=r9(r,[t,e.height,1,1]),o=(i*e.distanceScales.unitsPerMeter[2]-n[2])/(s[2]-n[2]),a=nc(nt.lerp([],n,s,o));return a.push(i),a}var nt=nt;class ok extends ov{constructor(e={}){let t;const{latitude:i=0,longitude:r=0,zoom:n=0,pitch:s=0,bearing:o=0,nearZMultiplier:a=.1,farZMultiplier:l=1.01,nearZ:c,farZ:u,orthographic:h=!1,projectionMatrix:d,repeat:p=!1,worldOffset:f=0,position:g,padding:m,legacyMeterSizes:y=!1}=e;let{width:v,height:b,altitude:_=1.5}=e;const x=Math.pow(2,n);v=v||1,b=b||1;let w=null;if(d)t=np(_=d[5]/2);else{let r;if(e.fovy?_=nf(t=e.fovy):t=np(_),m){const{top:e=0,bottom:t=0}=m;r=[0,rv((e+b-t)/2,0,b)-b/2]}w=function(e){let{width:t,height:i,altitude:r,pitch:n=0,offset:s,center:o,scale:a,nearZMultiplier:l=1,farZMultiplier:c=1}=e,{fovy:u=np(1.5)}=e;void 0!==r&&(u=np(r));let h=u*no,d=n*no,p=nf(u),f=p;o&&(f+=o[2]*a/Math.cos(d)/i);let g=h*(.5+(s?s[1]:0)/i),m=Math.sin(g)*f/Math.sin(r7(Math.PI/2-d-g,.01,Math.PI-.01));return{fov:h,aspect:t/i,focalDistance:p,near:l,far:Math.min((Math.sin(d)*m+f)*c,10*f)}}({width:v,height:b,scale:x,center:g&&[0,0,g[2]*nu(i)],offset:r,pitch:s,fovy:t,nearZMultiplier:a,farZMultiplier:l}),Number.isFinite(c)&&(w.near=c),Number.isFinite(u)&&(w.far=u)}let P=function(e){let{height:t,pitch:i,bearing:r,altitude:n,scale:s,center:o}=e,a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];t0.translate(a,a,[0,0,-n]),t0.rotateX(a,a,-i*no),t0.rotateZ(a,a,r*no);let l=s/t;return t0.scale(a,a,[l,l,l]),o&&t0.translate(a,a,ni.negate([],o)),a}({height:b,pitch:s,bearing:o,scale:x,altitude:_});f&&(P=new r6().translate([512*f,0,0]).multiplyLeft(P)),super({...e,width:v,height:b,viewMatrix:P,longitude:r,latitude:i,zoom:n,...w,fovy:t,focalDistance:_}),this.latitude=i,this.longitude=r,this.zoom=n,this.pitch=s,this.bearing=o,this.altitude=_,this.fovy=t,this.orthographic=h,this._subViewports=p?[]:null,this._pseudoMeters=y,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let e=this.getBounds(),t=Math.floor((e[0]+180)/360),i=Math.ceil((e[2]-180)/360);for(let e=t;e<=i;e++){let t=e?new ok({...this,worldOffset:e}):this;this._subViewports.push(t)}}return this._subViewports}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,i]=this.projectFlat(e);return[t,i,(e[2]||0)*nu(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,i]=this.unprojectFlat(e),r=(e[2]||0)/nu(i);return[t,i,r]}addMetersToLngLat(e,t){return nd(e,t)}panByPosition(e,t,i){let r=nm(t,this.pixelUnprojectionMatrix),n=this.projectFlat(e),s=nt.add([],n,nt.negate([],r)),o=nt.add([],this.center,s),[a,l]=this.unprojectFlat(o);return{longitude:a,latitude:l}}panByPosition3D(e,t){let i=e[2]||0,r=nt.sub([],e,this.unproject(t,{targetZ:i}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=function(e,t=0){let i,r,{width:n,height:s,unproject:o}=e,a={targetZ:t},l=o([0,s],a),c=o([n,s],a);return(e.fovy?.5*e.fovy*oA:Math.atan(.5/e.altitude))>(90-e.pitch)*oA-.01?(i=oT(e,0,t),r=oT(e,n,t)):(i=o([0,0],a),r=o([n,0],a)),[l,c,r,i]}(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(e,t={}){let{width:i,height:r}=this,{longitude:n,latitude:s,zoom:o}=function(e){let{width:t,height:i,bounds:r,minExtent:n=0,maxZoom:s=24,offset:o=[0,0]}=e,[[a,l],[c,u]]=r,h=function(e=0){return"number"==typeof e?{top:e,bottom:e,left:e,right:e}:(nr(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}(e.padding),d=nl([a,r7(u,-85.051129,85.051129)]),p=nl([c,r7(l,-85.051129,85.051129)]),f=[Math.max(Math.abs(p[0]-d[0]),n),Math.max(Math.abs(p[1]-d[1]),n)],g=[t-h.left-h.right-2*Math.abs(o[0]),i-h.top-h.bottom-2*Math.abs(o[1])];nr(g[0]>0&&g[1]>0);let m=g[0]/f[0],y=g[1]/f[1],v=(h.right-h.left)/2/m,b=(h.top-h.bottom)/2/y,_=nc([(p[0]+d[0])/2+v,(p[1]+d[1])/2+b]),x=Math.min(s,ne(Math.abs(Math.min(m,y))));return nr(Number.isFinite(x)),{longitude:_[0],latitude:_[1],zoom:x}}({width:i,height:r,bounds:e,...t});return new ok({width:i,height:r,longitude:n,latitude:s,zoom:o})}}ok.displayName="WebMercatorViewport";class oR{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1)}update(){if(!this._inProgress)return!1;if(null===this._handle){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}}let oO=()=>{},oI=e=>e;class oj{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:i,startProps:r,endProps:n,duration:s,easing:o}}=e,a=o(t/s),l=i.interpolateProps(r,n,a);this.propsInTransition=this.getControllerState({...this.props,...l}).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new oR(e.timeline),this.onViewStateChange=e.onViewStateChange||oO,this.onStateChange=e.onStateChange||oO}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,i=this.props;if(this.props=e,!i||this._shouldIgnoreViewportChange(i,e))return!1;if(this._isTransitionEnabled(e)){let r=i;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;r={...i,...2===e?t:this.propsInTransition||i}}this._triggerTransition(r,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:i}=e;return(t>0||"auto"===t)&&!!i}_isUpdateDueToCurrentTransition(e){return!!this.transition.inProgress&&!!this.propsInTransition&&this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition)}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?3===this.transition.settings.interruption||this._isUpdateDueToCurrentTransition(t):!this._isTransitionEnabled(t)||t.transitionInterpolator.arePropsEqual(e,t)}_triggerTransition(e,t){let i=this.getControllerState(e),r=this.getControllerState(t).shortestPathFrom(i),n=t.transitionInterpolator,s=n.getDuration?n.getDuration(e,t):t.transitionDuration;if(0===s)return;let o=n.initializeProps(e,r);this.propsInTransition={};let a={duration:s,easing:t.transitionEasing||oI,interpolator:n,interruption:t.transitionInterruption||1,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(a),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}}function oz(e,t){if(!e)throw Error(t||"deck.gl: assertion failed.")}class oD{constructor(e){const{compare:t,extract:i,required:r}=e;this._propsToCompare=t,this._propsToExtract=i||t,this._requiredProps=r}arePropsEqual(e,t){for(let i of this._propsToCompare)if(!(i in e)||!(i in t)||!r_(e[i],t[i]))return!1;return!0}initializeProps(e,t){let i={},r={};for(let n of this._propsToExtract)(n in e||n in t)&&(i[n]=e[n],r[n]=t[n]);return this._checkRequiredProps(i),this._checkRequiredProps(r),{start:i,end:r}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let i=e[t];oz(Number.isFinite(i)||Array.isArray(i),`${t} is required for transition`)})}}var ni=ni,it=it;let oN=Math.PI/180,oF=180/Math.PI;class oB extends ov{constructor(e={}){const{longitude:t=0,zoom:i=0,nearZMultiplier:r=.5,farZMultiplier:n=1,resolution:s=10}=e;let{latitude:o=0,height:a,altitude:l=1.5,fovy:c}=e;o=Math.max(Math.min(o,85.051129),-85.051129),a=a||1,c?l=nf(c):c=np(l);const u=Math.pow(2,i-oU(o)),h=e.nearZ??r,d=e.farZ??(l+512*u/a)*n,p=new r6().lookAt({eye:[0,-l,0],up:[0,0,1]});p.rotateX(o*oN),p.rotateZ(-t*oN),p.scale(u/a),super({...e,height:a,viewMatrix:p,longitude:t,latitude:o,zoom:i,distanceScales:function(){let e=Math.PI/180*256;return{unitsPerMeter:[4018225162502676e-20,4018225162502676e-20,4018225162502676e-20],unitsPerMeter2:[0,0,0],metersPerUnit:[24886.609375,24886.609375,24886.609375],unitsPerDegree:[e,e,4018225162502676e-20],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/e,1/e,24886.609375]}}(),fovy:c,focalDistance:l,near:h,far:d}),this.scale=u,this.latitude=o,this.longitude=t,this.fovy=c,this.resolution=s}get projectionMode(){return i1.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(e={}){let t={targetZ:e.z||0},i=this.unproject([0,this.height/2],t),r=this.unproject([this.width/2,0],t),n=this.unproject([this.width,this.height/2],t),s=this.unproject([this.width/2,this.height],t);return n[0]<this.longitude&&(n[0]+=360),i[0]>this.longitude&&(i[0]-=360),[Math.min(i[0],n[0],r[0],s[0]),Math.min(i[1],n[1],r[1],s[1]),Math.max(i[0],n[0],r[0],s[0]),Math.max(i[1],n[1],r[1],s[1])]}unproject(e,{topLeft:t=!0,targetZ:i}={}){let r,[n,s,o]=e,a=t?s:this.height-s,{pixelUnprojectionMatrix:l}=this;if(Number.isFinite(o))r=oV(l,[n,a,o,1]);else{let e=oV(l,[n,a,-1,1]),t=oV(l,[n,a,1,1]),s=((i||0)/6370972+1)*256,o=ni.sqrLen(ni.sub([],e,t)),c=ni.sqrLen(e),u=ni.sqrLen(t),h=(4*c*u-(o-c-u)**2)/16*4/o,d=(Math.sqrt(c-h)-Math.sqrt(Math.max(0,s*s-h)))/Math.sqrt(o);r=ni.lerp([],e,t,d)}let[c,u,h]=this.unprojectPosition(r);return Number.isFinite(o)?[c,u,h]:Number.isFinite(i)?[c,u,i]:[c,u]}projectPosition(e){let[t,i,r=0]=e,n=t*oN,s=i*oN,o=Math.cos(s),a=(r/6370972+1)*256;return[Math.sin(n)*o*a,-Math.cos(n)*o*a,Math.sin(s)*a]}unprojectPosition(e){let[t,i,r]=e,n=ni.len(e);return[Math.atan2(t,-i)*oF,Math.asin(r/n)*oF,(n/256-1)*6370972]}projectFlat(e){return e}unprojectFlat(e){return e}panByPosition([e,t,i],r,n){let s=.25/Math.pow(2,this.zoom-oU(this.latitude)),o=e+s*(n[0]-r[0]),a=t-s*(n[1]-r[1]),l={longitude:o,latitude:a=Math.max(Math.min(a,85.051129),-85.051129),zoom:i-oU(t)};return l.zoom+=oU(l.latitude),l}}function oU(e){return Math.log2(Math.PI*Math.cos(e*Math.PI/180))}function oV(e,t){let i=it.transformMat4([],t,e);return it.scale(i,i,1/i[3]),i}oB.displayName="GlobeViewport";let o$=["longitude","latitude","zoom","bearing","pitch"],oW=["longitude","latitude","zoom"];class oG extends oD{constructor(e={}){const t=Array.isArray(e)?e:e.transitionProps,i=Array.isArray(e)?{}:e;i.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:o$,required:oW},super(i.transitionProps),this.opts=i}initializeProps(e,t){let i=super.initializeProps(e,t),{makeViewport:r,around:n}=this.opts;if(r&&n)if(r(e)instanceof oB)ir.warn("around not supported in GlobeView")();else{let s=r(e),o=r(t),a=s.unproject(n);i.start.around=n,Object.assign(i.end,{around:o.project(a),aroundPosition:a,width:t.width,height:t.height})}return i}interpolateProps(e,t,i){let r={};for(let n of this._propsToExtract)r[n]=rb(e[n]||0,t[n]||0,i);if(t.aroundPosition&&this.opts.makeViewport){let n=this.opts.makeViewport({...t,...r});Object.assign(r,n.panByPosition(t.aroundPosition,rb(e.around,t.around,i)))}return r}}let oH={transitionDuration:0},oq=e=>1-(1-e)*(1-e),oY=["wheel"],oK=["panstart","panmove","panend"],oZ=["pinchstart","pinchmove","pinchend"],oX=["multipanstart","multipanmove","multipanend"],oJ=["dblclick"],oQ=["keydown"],o0={};class o1{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this.invertPan=!1,this.dragMode="rotate",this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.keyboard=!0,this.transitionManager=new oj({...e,getControllerState:e=>new this.ControllerState(e),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case"panstart":return!t&&this._onPanStart(e);case"panmove":return this._onPan(e);case"panend":return this._onPanEnd(e);case"pinchstart":return!t&&this._onPinchStart(e);case"pinchmove":return this._onPinch(e);case"pinchend":return this._onPinchEnd(e);case"multipanstart":return!t&&this._onMultiPanStart(e);case"multipanmove":return this._onMultiPan(e);case"multipanend":return this._onMultiPanEnd(e);case"dblclick":return this._onDoubleClick(e);case"wheel":return this._onWheel(e);case"keydown":return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:i}=this.props,{offsetCenter:r}=e;return[r.x-t,r.y-i]}isPointInBounds(e,t){let{width:i,height:r}=this.props;if(t&&t.handled)return!1;let n=e[0]>=0&&e[0]<=i&&e[1]>=0&&e[1]<=r;return n&&t&&t.stopPropagation(),n}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,"transitionInterpolator"in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:i}=e;this.inertia=Number.isFinite(i)?i:300*(!0===i);let{scrollZoom:r=!0,dragPan:n=!0,dragRotate:s=!0,doubleClickZoom:o=!0,touchZoom:a=!0,touchRotate:l=!1,keyboard:c=!0}=e,u=!!this.onViewStateChange;if(this.toggleEvents(oY,u&&r),this.toggleEvents(oK,u),this.toggleEvents(oZ,u&&(a||l)),this.toggleEvents(oX,u&&l),this.toggleEvents(oJ,u&&o),this.toggleEvents(oQ,u&&c),this.scrollZoom=r,this.dragPan=n,this.dragRotate=s,this.doubleClickZoom=o,this.touchZoom=a,this.touchRotate=l,this.keyboard=c,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),i=t.getViewportProps();Object.keys(i).some(t=>!o_(i[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,i={}){let r={...e.getViewportProps(),...t},n=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(i),n){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:r,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||"pan"===this.dragMode)&&(i=!i);let r=this.controllerState[i?"panStart":"rotateStart"]({pos:t});return this._panMove=i,this.updateViewport(r,oH,{isDragging:!0}),!0}_onPan(e){return!!this.isDragging()&&(this._panMove?this._onPanMove(e):this._onPanRotate(e))}_onPanEnd(e){return!!this.isDragging()&&(this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e))}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),i=this.controllerState.pan({pos:t});return this.updateViewport(i,oH,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let i=this.getCenter(e),r=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],n=this.controllerState.pan({pos:r}).panEnd();this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:oq},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState.panEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),i=this.controllerState.rotate({pos:t});return this.updateViewport(i,oH,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let i=this.getCenter(e),r=[i[0]+e.velocityX*t/2,i[1]+e.velocityY*t/2],n=this.controllerState.rotate({pos:r}).rotateEnd();this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:oq},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onWheel(e){if(!this.scrollZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:i=.01,smooth:r=!1}=!0===this.scrollZoom?{}:this.scrollZoom,{delta:n}=e,s=2/(1+Math.exp(-Math.abs(n*i)));n<0&&0!==s&&(s=1/s);let o=r?{...this._getTransitionProps({around:t}),transitionDuration:250}:oH,a=this.controllerState.zoom({pos:t,scale:s});return this.updateViewport(a,o,{isZooming:!0,isPanning:!0}),r||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.controllerState.rotateStart({pos:t});return this.updateViewport(i,oH,{isDragging:!0}),!0}_onMultiPan(e){if(!this.touchRotate||!this.isDragging())return!1;let t=this.getCenter(e);t[0]-=e.deltaX;let i=this.controllerState.rotate({pos:t});return this.updateViewport(i,oH,{isDragging:!0,isRotating:!0}),!0}_onMultiPanEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this;if(this.touchRotate&&t&&e.velocityY){let i=this.getCenter(e),r=[i[0],i[1]+=e.velocityY*t/2],n=this.controllerState.rotate({pos:r});this.updateViewport(n,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:oq},{isDragging:!1,isRotating:!0}),this.blockEvents(t)}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onPinchStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.controllerState.zoomStart({pos:t}).rotateStart({pos:t});return o0._startPinchRotation=e.rotation,o0._lastPinchEvent=e,this.updateViewport(i,oH,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:i}=e,r=this.getCenter(e);t=t.zoom({pos:r,scale:i})}if(this.touchRotate){let{rotation:i}=e;t=t.rotate({deltaAngleX:o0._startPinchRotation-i})}return this.updateViewport(t,oH,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),o0._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:i}=o0;if(this.touchZoom&&t&&i&&e.scale!==i.scale){let r=this.getCenter(e),n=this.controllerState.rotateEnd(),s=Math.log2(e.scale),o=(s-Math.log2(i.scale))/(e.deltaTime-i.deltaTime),a=Math.pow(2,s+o*t/2);n=n.zoom({pos:r,scale:a}).zoomEnd(),this.updateViewport(n,{...this._getTransitionProps({around:r}),transitionDuration:t,transitionEasing:oq},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState.zoomEnd().rotateEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1,isZooming:!1,isRotating:!1})}return o0._startPinchRotation=null,o0._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let i=this.isFunctionKeyPressed(e),r=this.controllerState.zoom({pos:t,scale:i?.5:2});return this.updateViewport(r,this._getTransitionProps({around:t}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onKeyDown(e){let t;if(!this.keyboard)return!1;let i=this.isFunctionKeyPressed(e),{zoomSpeed:r,moveSpeed:n,rotateSpeedX:s,rotateSpeedY:o}=!0===this.keyboard?{}:this.keyboard,{controllerState:a}=this,l={};switch(e.srcEvent.code){case"Minus":t=i?a.zoomOut(r).zoomOut(r):a.zoomOut(r),l.isZooming=!0;break;case"Equal":t=i?a.zoomIn(r).zoomIn(r):a.zoomIn(r),l.isZooming=!0;break;case"ArrowLeft":i?(t=a.rotateLeft(s),l.isRotating=!0):(t=a.moveLeft(n),l.isPanning=!0);break;case"ArrowRight":i?(t=a.rotateRight(s),l.isRotating=!0):(t=a.moveRight(n),l.isPanning=!0);break;case"ArrowUp":i?(t=a.rotateUp(o),l.isRotating=!0):(t=a.moveUp(n),l.isPanning=!0);break;case"ArrowDown":i?(t=a.rotateDown(o),l.isRotating=!0):(t=a.moveDown(n),l.isPanning=!0);break;default:return!1}return this.updateViewport(t,this._getTransitionProps(),l),!0}_getTransitionProps(e){let{transition:t}=this;return t&&t.transitionInterpolator?e?{...t,transitionInterpolator:new oG({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t:oH}}class o2{constructor(e,t,i){this.makeViewport=i,this._viewportProps=this.applyConstraints(e),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}}let o3=[[-1/0,-90],[1/0,90]];function o4([e,t]){if(Math.abs(t)>90&&(t=90*Math.sign(t)),Number.isFinite(e)){let[i,r]=nl([e,t]);return[i,rv(r,0,512)]}let[,i]=nl([0,t]);return[e,rv(i,0,512)]}class o5 extends o2{constructor(e){const{width:t,height:i,latitude:r,longitude:n,zoom:s,bearing:o=0,pitch:a=0,altitude:l=1.5,position:c=[0,0,0],maxZoom:u=20,minZoom:h=0,maxPitch:d=60,minPitch:p=0,startPanLngLat:f,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:y,startBearing:v,startPitch:b,startZoom:_,normalize:x=!0}=e;oz(Number.isFinite(n)),oz(Number.isFinite(r)),oz(Number.isFinite(s));const w=e.maxBounds||(x?o3:null);super({width:t,height:i,latitude:r,longitude:n,zoom:s,bearing:o,pitch:a,altitude:l,maxZoom:u,minZoom:h,maxPitch:d,minPitch:p,normalize:x,position:c,maxBounds:w},{startPanLngLat:f,startZoomLngLat:g,startRotatePos:m,startRotateLngLat:y,startBearing:v,startPitch:b,startZoom:_},e.makeViewport),this.getAltitude=e.getAltitude}panStart({pos:e}){return this._getUpdatedState({startPanLngLat:this._unproject(e)})}pan({pos:e,startPos:t}){let i=this.getState().startPanLngLat||this._unproject(t);if(!i)return this;let r=this.makeViewport(this.getViewportProps()).panByPosition(i,e);return this._getUpdatedState(r)}panEnd(){return this._getUpdatedState({startPanLngLat:null})}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:void 0!==t?this._unproject3D(e,t):void 0,startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:i=0}){let r,{startRotatePos:n,startRotateLngLat:s,startBearing:o,startPitch:a}=this.getState();if(!n||void 0===o||void 0===a)return this;if(r=e?this._getNewRotation(e,n,a,o):{bearing:o+t,pitch:a+i},s){let e=this.makeViewport({...this.getViewportProps(),...r}),t="panByPosition3D"in e?"panByPosition3D":"panByPosition";return this._getUpdatedState({...r,...e[t](s,n)})}return this._getUpdatedState(r)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e}){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom})}zoom({pos:e,startPos:t,scale:i}){let{startZoom:r,startZoomLngLat:n}=this.getState();if(n||(r=this.getViewportProps().zoom,n=this._unproject(t)||this._unproject(e)),!n)return this;let s=this._constrainZoom(r+Math.log2(i)),o=this.makeViewport({...this.getViewportProps(),zoom:s});return this._getUpdatedState({zoom:s,...o.panByPosition(n,e)})}zoomEnd(){return this._getUpdatedState({startZoomLngLat:null,startZoom:null})}zoomIn(e=2){return this._zoomFromCenter(e)}zoomOut(e=2){return this._zoomFromCenter(1/e)}moveLeft(e=100){return this._panFromCenter([e,0])}moveRight(e=100){return this._panFromCenter([-e,0])}moveUp(e=100){return this._panFromCenter([0,e])}moveDown(e=100){return this._panFromCenter([0,-e])}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),i={...this.getViewportProps()},{bearing:r,longitude:n}=i;return Math.abs(r-t.bearing)>180&&(i.bearing=r<0?r+360:r-360),Math.abs(n-t.longitude)>180&&(i.longitude=n<0?n+360:n-360),i}applyConstraints(e){let{maxPitch:t,minPitch:i,pitch:r,longitude:n,bearing:s,normalize:o,maxBounds:a}=e;if(o&&((n<-180||n>180)&&(e.longitude=ol(n+180,360)-180),(s<-180||s>180)&&(e.bearing=ol(s+180,360)-180)),e.pitch=rv(r,i,t),e.zoom=this._constrainZoom(e.zoom,e),a){let t=o4(a[0]),i=o4(a[1]),r=2**e.zoom,n=e.width/2/r,s=e.height/2/r,[o,l]=nc([t[0]+n,t[1]+s]),[c,u]=nc([i[0]-n,i[1]-s]);e.longitude=rv(e.longitude,o,c),e.latitude=rv(e.latitude,l,u)}return e}_constrainZoom(e,t){t||(t=this.getViewportProps());let{maxZoom:i,maxBounds:r}=t,n=null!==r&&t.width>0&&t.height>0,{minZoom:s}=t;if(n){let e=o4(r[0]),n=o4(r[1]),o=n[0]-e[0],a=n[1]-e[1];Number.isFinite(o)&&o>0&&(s=Math.max(s,Math.log2(t.width/o))),Number.isFinite(a)&&a>0&&(s=Math.max(s,Math.log2(t.height/a))),s>i&&(s=i)}return rv(e,s,i)}_zoomFromCenter(e){let{width:t,height:i}=this.getViewportProps();return this.zoom({pos:[t/2,i/2],scale:e})}_panFromCenter(e){let{width:t,height:i}=this.getViewportProps();return this.pan({startPos:[t/2,i/2],pos:[t/2+e[0],i/2+e[1]]})}_getUpdatedState(e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,i,r){let n=e[0]-t[0],s=e[1]-t[1],o=e[1],a=t[1],{width:l,height:c}=this.getViewportProps(),u=0;s>0?Math.abs(c-a)>5&&(u=s/(a-c)*1.2):s<0&&a>5&&(u=1-o/a),u=rv(u,-1,1);let{minPitch:h,maxPitch:d}=this.getViewportProps(),p=i;return u>0?p=i+u*(d-i):u<0&&(p=i-u*(h-i)),{pitch:p,bearing:r+n/l*180}}}class o6 extends o1{constructor(){super(...arguments),this.ControllerState=o5,this.transition={transitionDuration:300,transitionInterpolator:new oG({transitionProps:{compare:["longitude","latitude","zoom","bearing","pitch","position"],required:["longitude","latitude","zoom"]}})},this.dragMode="pan",this.rotationPivot="center",this._getAltitude=e=>{if("2d"===this.rotationPivot)return 0;if("3d"===this.rotationPivot&&this.pickPosition){let{x:t,y:i}=this.props,r=this.pickPosition(t+e[0],i+e[1]);if(r&&r.coordinate&&r.coordinate.length>=3)return r.coordinate[2]}}}setProps(e){"rotationPivot"in e&&(this.rotationPivot=e.rotationPivot||"center"),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(!1===e.normalize?null:o3),super.setProps(e)}updateViewport(e,t=null,i={}){let r=e.getState();i.isDragging&&r.startRotateLngLat?i={...i,rotationPivotPosition:r.startRotateLngLat}:!1===i.isDragging&&(i={...i,rotationPivotPosition:void 0}),super.updateViewport(e,t,i)}}class o8 extends oL{constructor(e={}){super(e)}getViewportType(){return ok}get ControllerType(){return o6}}o8.displayName="MapView";let o9=[255,255,255],o7=0;class ae{constructor(e={}){this.type="ambient";const{color:t=o9}=e,{intensity:i=1}=e;this.id=e.id||`ambient-${o7++}`,this.color=t,this.intensity=i}}let at=[255,255,255],ai=[0,0,-1],ar=0;class an{constructor(e={}){this.type="directional";const{color:t=at}=e,{intensity:i=1}=e,{direction:r=ai}=e,{_shadow:n=!1}=e;this.id=e.id||`directional-${ar++}`,this.color=t,this.intensity=i,this.type="directional",this.direction=new rH(r).normalize().toArray(),this.shadow=n}getProjectedLight(e){return this}}class as{constructor(e,t={id:"pass"}){const{id:i}=t;this.id=i,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}}let ao={depthWriteEnabled:!0,depthCompare:"less-equal",blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one-minus-dst-alpha",blendAlphaDstFactor:"one"};class aa extends as{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let t=this.device.canvasContext,i=e.target??t.getCurrentFramebuffer(),[r,n]=t.getDrawingBufferSize(),s=e.clearCanvas??!0,o=e.clearColor??(!!s&&[0,0,0,0]),a=e.colorMask??15,l={viewport:[0,0,r,n]};e.colorMask&&(l.colorMask=a),e.scissorRect&&(l.scissorRect=e.scissorRect);let c=this.device.beginRenderPass({framebuffer:i,parameters:l,clearColor:o,clearDepth:!!s&&1,clearStencil:!!s&&0});try{return this._drawLayers(c,e)}finally{c.end(),this.device.submit()}}_drawLayers(e,t){let{target:i,shaderModuleProps:r,viewports:n,views:s,onViewportActive:o,clearStack:a=!0}=t;t.pass=t.pass||"unknown",a&&(this._lastRenderIndex=-1);let l=[];for(let a of n){let n=s&&s[a.id];o?.(a);let c=this._getDrawLayerParams(a,t);for(let s of a.subViewports||[a]){let o=this._drawLayersInViewport(e,{target:i,shaderModuleProps:r,viewport:s,view:n,pass:t.pass,layers:t.layers,isPicking:t.isPicking},c);l.push(o)}}return l}_getDrawLayerParams(e,{layers:t,pass:i,isPicking:r=!1,layerFilter:n,cullRect:s,views:o,effects:a,shaderModuleProps:l},c=!1){let u=[],h=function e(t=0,i={}){let r={},n=(s,o)=>{let a,l=s.props._offset,c=s.id,u=s.parent&&s.parent.id;if(!u||u in i||n(s.parent,!1),u in r){let t=r[u]=r[u]||e(i[u],i);a=t(s,o),r[c]=t}else Number.isFinite(l)?(a=l+(i[u]||0),r[c]=null):a=t;return o&&a>=t&&(t=a+1),i[c]=a,a};return n}(this._lastRenderIndex+1),d={layer:t[0],viewport:e,isPicking:r,renderPass:i,cullRect:s},p={};for(let r=0;r<t.length;r++){let s=t[r],f=this._shouldDrawLayer(s,d,n,p),g={shouldDrawLayer:f};f&&!c&&(g.shouldDrawLayer=!0,g.layerRenderIndex=h(s,f),g.shaderModuleProps=this._getShaderModuleProps(s,a,i,l),g.layerParameters={..."webgpu"===s.context.device.type?ao:null,...s.context.deck?.props.parameters,...o?.[e.id]?.props.parameters,...this.getLayerParameters(s,r,e)}),u[r]=g}return u}_drawLayersInViewport(e,{layers:t,shaderModuleProps:i,pass:r,target:n,viewport:s,view:o,isPicking:a},l){let c=function(e,{shaderModuleProps:t,target:i,viewport:r}){let n=t?.project?.devicePixelRatio??e.canvasContext.cssToDeviceRatio(),[,s]=e.canvasContext.getDrawingBufferSize(),o=i?i.height:s;return[r.x*n,o-(r.y+r.height)*n,r.width*n,r.height*n]}(this.device,{shaderModuleProps:i,target:n,viewport:s});if(o){let{clear:e,clearColor:t,clearDepth:i,clearStencil:r}=o.props;if(e){let e=[0,0,0,0],s=1,o=0;Array.isArray(t)&&!a?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):!1===t&&(e=!1),void 0!==i&&(s=i),void 0!==r&&(o=r),this.device.beginRenderPass({framebuffer:n,parameters:{viewport:c,scissorRect:c},clearColor:e,clearDepth:s,clearStencil:o}).end()}}let u={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:c});for(let i=0;i<t.length;i++){let n=t[i],o=l[i],{shouldDrawLayer:a}=o;if(a&&n.props.pickable&&u.pickableCount++,n.isComposite&&u.compositeCount++,n.isDrawable&&o.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:i,layerParameters:a}=o;u.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),i.project&&(i.project.viewport=s),n.context.renderPass=e;try{n._drawLayer({renderPass:e,shaderModuleProps:i,uniforms:{layerIndex:t},parameters:a})}catch(e){n.raiseError(e,`drawing ${n} to ${r}`)}}}return u}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,i){return null}getLayerParameters(e,t,i){return e.props.parameters}_shouldDrawLayer(e,t,i,r){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let n=e.parent;for(;n;){if(!n.props.visible||!n.filterSubLayer(t))return!1;t.layer=n,n=n.parent}if(i){let e=t.layer.id;if(e in r||(r[e]=i(t)),!r[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,i,r){let n=this.device.canvasContext.cssToDeviceRatio(),s=e.internalState?.propsInTransition||e.props,o={layer:s,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:n,modelMatrix:s.modelMatrix,coordinateSystem:s.coordinateSystem,coordinateOrigin:s.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let i of t)al(o,i.getShaderModuleProps?.(e,o));for(let t of e.context.defaultShaderModules)t.name in o||(o[t.name]={});return al(o,this.getShaderModuleProps(e,t,o),r)}}function al(e,...t){for(let i of t)if(i)for(let t in i)e[t]?Object.assign(e[t],i[t]):e[t]=i[t];return e}class ac extends aa{constructor(e,t){super(e,t);const i=e.createTexture({format:"rgba8unorm",width:1,height:1,sampler:{minFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}}),r=e.createTexture({format:"depth16unorm",width:1,height:1});this.fbo=e.createFramebuffer({id:"shadowmap",width:1,height:1,colorAttachments:[i],depthStencilAttachment:r})}delete(){this.fbo&&(this.fbo.destroy(),this.fbo=null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,i=this.device.canvasContext.cssToDeviceRatio(),r=e.viewports[0],n=r.width*i,s=r.height*i;(n!==t.width||s!==t.height)&&t.resize({width:n,height:s}),super.render({...e,clearColor:[1,1,1,1],target:t,pass:"shadow"})}getLayerParameters(e,t,i){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:"less-equal"}}shouldDrawLayer(e){return!1!==e.props.shadowEnabled}getShaderModuleProps(e,t,i){return{shadow:{project:i.project,drawToShadowMap:!0}}}}let au={color:[255,255,255],intensity:1},ah=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],ad=[0,0,0,200/255];class ap{constructor(e={}){this.id="lighting-effect",this.shadowColor=ad,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:i}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),i._addDefaultShaderModule(nM),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){for(let t in this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[],e){let i=e[t];switch(i.type){case"ambient":this.ambientLight=i;break;case"directional":this.directionalLights.push(i);break;case"point":this.pointLights.push(i)}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:t,viewports:i,onViewportActive:r,views:n}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let s=0;s<this.shadowPasses.length;s++)this.shadowPasses[s].render({layers:e,layerFilter:t,viewports:i,onViewportActive:r,views:n,shaderModuleProps:{shadow:{shadowLightId:s,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let i=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},r={enabled:!0,lights:this._getLights(e)},n=e.props.material;return{shadow:i,lighting:r,phongMaterial:n,gouraudMaterial:n}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(nM))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let i=new r6().lookAt({eye:new rH(t.direction).negate()});e.push(i)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let i=new ac(e);this.shadowPasses[t]=i}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:i}=this;e||0!==t.length||0!==i.length||(this.ambientLight=new ae(au),this.directionalLights.push(new an(ah[0]),new an(ah[1])))}_getLights(e){let t=[];for(let i of(this.ambientLight&&t.push(this.ambientLight),this.pointLights))t.push(i.getProjectedLight({layer:e}));for(let i of this.directionalLights)t.push(i.getProjectedLight({layer:e}));return t}}let af=new ap;class ag{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw="Initial render",this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let i=t.findIndex(t=>(t.order??1/0)-(e.order??1/0)>0);i<0?t.push(e):t.splice(i,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){"effects"in e&&!o_(e.effects,this.effects,1)&&this._setEffects(e.effects)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let i=[];for(let r of e){let e=t[r.id],n=r;e&&e!==r?e.setProps?(e.setProps(r.props),n=e):e.cleanup(this._context):e||r.setup(this._context),i.push(n),delete t[r.id]}for(let e in t)t[e].cleanup(this._context);this.effects=i,this._resolvedEffects=i.concat(this._defaultEffects),e.some(e=>e instanceof ap)||this._resolvedEffects.push(af),this._needsRedraw="effects changed"}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}}class am extends aa{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes("draw")||t.includes("terrain")}render(e){return this._render(e)}}let ay={blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"zero",blendAlphaOperation:"add",blendAlphaSrcFactor:"constant",blendAlphaDstFactor:"zero"};class av extends aa{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return"pickingFBO"in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:i,viewports:r,onViewportActive:n,pickingFBO:s,deviceRect:{x:o,y:a,width:l,height:c},cullRect:u,effects:h,pass:d="picking",pickZ:p,shaderModuleProps:f,clearColor:g}){this.pickZ=p;let m=this._resetColorEncoder(p),y=super._render({target:s,layers:e,layerFilter:t,views:i,viewports:r,onViewportActive:n,cullRect:u,effects:h?.filter(e=>e.useInPicking),pass:d,isPicking:!0,shaderModuleProps:f,clearColor:g??[0,0,0,0],colorMask:15,scissorRect:[o,a,l,c]});return this._colorEncoderState=null,{decodePickingColor:m&&a_.bind(null,m),stats:y}}shouldDrawLayer(e){let{pickable:t,operation:i}=e.props;return t&&i.includes("draw")||i.includes("terrain")||i.includes("mask")}getShaderModuleProps(e,t,i){return{picking:{isActive:1,isAttribute:this.pickZ},lighting:{enabled:!1}}}getLayerParameters(e,t,i){let r={...e.props.parameters},{pickable:n,operation:s}=e.props;return this._colorEncoderState?n&&s.includes("draw")?(Object.assign(r,ay),r.blend=!0,"webgpu"===this.device.type?r.blendConstant=ab(this._colorEncoderState,e,i):r.blendColor=ab(this._colorEncoderState,e,i),s.includes("terrain")&&e.state?._hasPickingCover&&(r.blendAlphaSrcFactor="one")):s.includes("terrain")&&(r.blend=!1):r.blend=!1,r}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}}function ab(e,t,i){let r,{byLayer:n,byAlpha:s}=e,o=n.get(t);return o?(o.viewports.push(i),r=o.a):(r=n.size+1)<=255?(o={a:r,layer:t,viewports:[i]},n.set(t,o),s[r]=o):(ir.warn("Too many pickable layers, only picking the first 255")(),r=0),[0,0,0,r/255]}function a_(e,t){let i=e.byAlpha[t[3]];return i&&{pickedLayer:i.layer,pickedViewports:i.viewports,pickedObjectIndex:i.layer.decodePickingColor(t)}}class ax{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new am(e),this.pickLayersPass=new av(e),this.renderCount=0,this._needsRedraw="Initial render",this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw="layerFilter changed"),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw="drawPickingColors changed")}renderLayers(e){if(!e.viewports.length)return;let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,i={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};i.effects&&this._preRender(i.effects,i);let r=this.lastPostProcessEffect?this.renderBuffers[0]:i.target;this.lastPostProcessEffect&&(i.clearColor=[0,0,0,0],i.clearCanvas=!0);let n=t.render({...i,target:r}),s="stats"in n?n.stats:n;i.effects&&(this.lastPostProcessEffect&&(i.clearCanvas=void 0===e.clearCanvas||e.clearCanvas),this._postRender(i.effects,i)),this.renderCount++,nU("deckRenderer.renderLayers",this,s,e),this._updateStats(s)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers rendered").addCount(t)}_preRender(e,t){for(let i of(this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{},e))t.preRenderStats[i.id]=i.preRender(t),i.postRender&&(this.lastPostProcessEffect=i.id);this.lastPostProcessEffect&&this._resizeRenderBuffers()}_resizeRenderBuffers(){let{renderBuffers:e}=this,t=this.device.canvasContext.getDrawingBufferSize(),[i,r]=t;for(let n of(0===e.length&&[0,1].map(t=>{let n=this.device.createTexture({sampler:{minFilter:"linear",magFilter:"linear"},width:i,height:r});e.push(this.device.createFramebuffer({id:`deck-renderbuffer-${t}`,colorAttachments:[n]}))}),e))n.resize(t)}_postRender(e,t){let{renderBuffers:i}=this,r={...t,inputBuffer:i[0],swapBuffer:i[1]};for(let n of e)if(n.postRender){r.target=n.id===this.lastPostProcessEffect?t.target:void 0;let e=n.postRender(r);r.inputBuffer=e,r.swapBuffer=e===i[0]?i[1]:i[0]}}}var aw=e.i(6145),aP=e.i(25458);let aC={pickedColor:null,pickedObjectIndex:-1};function aS({pickedColors:e,decodePickingColor:t,deviceX:i,deviceY:r,deviceRadius:n,deviceRect:s}){let{x:o,y:a,width:l,height:c}=s,u=n*n,h=-1,d=0;for(let t=0;t<c;t++){let n=t+a-r,s=n*n;if(s>u)d+=4*l;else for(let t=0;t<l;t++){if(e[d+3]-1>=0){let e=t+o-i,r=e*e+s;r<=u&&(u=r,h=d)}d+=4}}if(h>=0){let i=e.slice(h,h+4),r=t(i);if(r){let e=Math.floor(h/4/l),t=h/4-e*l;return{...r,pickedColor:i,pickedX:o+t,pickedY:a+e}}ir.error("Picked non-existent layer. Is picking buffer corrupt?")()}return aC}function aM({pickedColors:e,decodePickingColor:t}){let i=new Map;if(e){for(let r=0;r<e.length;r+=4)if(e[r+3]-1>=0){let n=e.slice(r,r+4),s=n.join(",");if(!i.has(s)){let e=t(n);e?i.set(s,{...e,color:n}):ir.error("Picked non-existent layer. Is picking buffer corrupt?")()}}}return Array.from(i.values())}function aE({pickInfo:e,viewports:t,pixelRatio:i,x:r,y:n,z:s}){let o,a=t[0];if(t.length>1&&(a=function(e,t){for(let i=e.length-1;i>=0;i--){let r=e[i];if(r.containsPixel(t))return r}return e[0]}(e?.pickedViewports||t,{x:r,y:n})),a){let e=[r-a.x,n-a.y];void 0!==s&&(e[2]=s),o=a.unproject(e)}return{color:null,layer:null,viewport:a,index:-1,picked:!1,x:r,y:n,pixel:[r,n],coordinate:o,devicePixel:e&&"pickedX"in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:i}}function aL(e){let{pickInfo:t,lastPickedInfo:i,mode:r,layers:n}=e,{pickedColor:s,pickedLayer:o,pickedObjectIndex:a}=t,l=o?[o]:[];if("hover"===r){let e=i.index,t=i.layerId,r=o?o.props.id:null;if(r!==t||a!==e){if(r!==t){let e=n.find(e=>e.props.id===t);e&&l.unshift(e)}i.layerId=r,i.index=a,i.info=null}}let c=aE(e),u=new Map;return u.set(null,c),l.forEach(e=>{let t={...c};e===o&&(t.color=s,t.index=a,t.picked=!0);let n=(t=aA({layer:e,info:t,mode:r})).layer;e===o&&"hover"===r&&(i.info=t),u.set(n.id,t),"hover"===r&&n.updateAutoHighlight(t)}),u}function aA({layer:e,info:t,mode:i}){for(;e&&t;){let r=t.layer||null;t.sourceLayer=r,t.layer=e,t=e.getPickingInfo({info:t,mode:i,sourceLayer:r}),e=e.parent}return t}class aT{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new av(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){"layerFilter"in e&&(this.layerFilter=e.layerFilter),"_pickable"in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:i,viewports:r},n=this.lastPickedInfo.info){let s=n&&n.layer&&n.layer.id,o=n&&n.viewport&&n.viewport.id,a=s?i.find(e=>e.id===s):null,l=o&&r.find(e=>e.id===o)||r[0],c=l&&l.unproject([e-l.x,t-l.y]);return{...n,x:e,y:t,viewport:l,coordinate:c,layer:a}}_resizeBuffer(e=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){let e=this.device.createTexture({format:"rgba8unorm",width:1,height:1,usage:aP.Texture.RENDER_ATTACHMENT|aP.Texture.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"}),this.device.isTextureFormatRenderable("rgba32float")){let e=this.device.createTexture({format:"rgba32float",width:1,height:1,usage:aP.Texture.RENDER_ATTACHMENT|aP.Texture.COPY_SRC}),t=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:"depth16unorm"});this.depthFBO=t}}let[t,i]=e.getDrawingBufferSize();this.pickingFBO?.resize({width:t,height:i}),this.depthFBO?.resize({width:t,height:i})}_getPickable(e){if(!1===this._pickable)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:i,x:r,y:n,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d,p=c.cssToDeviceRatio(),f=this._getPickable(e);if(!f||0===i.length)return{result:[],emptyInfo:aE({viewports:i,x:r,y:n,pixelRatio:p})};this._resizeBuffer(c);let g=c.cssToDevicePixels([r,n],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],y=Math.round(s*p),{width:v,height:b}=this.pickingFBO,_=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:y,deviceWidth:v,deviceHeight:b}),x={x:r-s,y:n-s,width:2*s+1,height:2*s+1},w=[],P=new Set;for(let e=0;e<o;e++){let s,c;s=_?aS({...await this._drawAndSampleAsync({layers:f,views:t,viewports:i,onViewportActive:u,deviceRect:_,cullRect:x,effects:h,pass:`picking:${a}`}),deviceX:m[0],deviceY:m[1],deviceRadius:y,deviceRect:_}):{pickedColor:null,pickedObjectIndex:-1};let g=this._getDepthLayers(s,f,l);if(g.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:g,views:t,viewports:i,onViewportActive:u,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:x,effects:h,pass:`picking:${a}:z`},!0);e[3]&&(c=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=aL({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:f,viewports:i,x:r,y:n,z:c,pixelRatio:p})).values()))t.layer&&w.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:w,emptyInfo:d.get(null)}}_pickClosestObject({layers:e,views:t,viewports:i,x:r,y:n,radius:s=0,depth:o=1,mode:a="query",unproject3D:l,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d,p=c.cssToDeviceRatio(),f=this._getPickable(e);if(!f||0===i.length)return{result:[],emptyInfo:aE({viewports:i,x:r,y:n,pixelRatio:p})};this._resizeBuffer(c);let g=c.cssToDevicePixels([r,n],!0),m=[g.x+Math.floor(g.width/2),g.y+Math.floor(g.height/2)],y=Math.round(s*p),{width:v,height:b}=this.pickingFBO,_=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:y,deviceWidth:v,deviceHeight:b}),x={x:r-s,y:n-s,width:2*s+1,height:2*s+1},w=[],P=new Set;for(let e=0;e<o;e++){let s,c;s=_?aS({...this._drawAndSample({layers:f,views:t,viewports:i,onViewportActive:u,deviceRect:_,cullRect:x,effects:h,pass:`picking:${a}`}),deviceX:m[0],deviceY:m[1],deviceRadius:y,deviceRect:_}):{pickedColor:null,pickedObjectIndex:-1};let g=this._getDepthLayers(s,f,l);if(g.length>0){let{pickedColors:e}=this._drawAndSample({layers:g,views:t,viewports:i,onViewportActive:u,deviceRect:{x:s.pickedX??m[0],y:s.pickedY??m[1],width:1,height:1},cullRect:x,effects:h,pass:`picking:${a}:z`},!0);e[3]&&(c=e[0])}for(let t of(s.pickedLayer&&e+1<o&&(P.add(s.pickedLayer),s.pickedLayer.disablePickingIndex(s.pickedObjectIndex)),(d=aL({pickInfo:s,lastPickedInfo:this.lastPickedInfo,mode:a,layers:f,viewports:i,x:r,y:n,z:c,pixelRatio:p})).values()))t.layer&&w.push(t);if(!s.pickedColor)break}for(let e of P)e.restorePickingColors();return{result:w,emptyInfo:d.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:i,x:r,y:n,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(c);let p=c.cssToDeviceRatio(),f=c.cssToDevicePixels([r,n],!0),g=f.x,m=f.y+f.height,y=c.cssToDevicePixels([r+s,n+o],!0),v=y.x+y.width,b=y.y,_=aM(await this._drawAndSampleAsync({layers:d,views:t,viewports:i,onViewportActive:u,deviceRect:{x:g,y:b,width:v-g,height:m-b},cullRect:{x:r,y:n,width:s,height:o},effects:h,pass:`picking:${a}`})),x=new Map,w=[],P=Number.isFinite(l);for(let e=0;e<_.length&&(!P||!(w.length>=l));e++){let t=_[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:n,pixelRatio:p},s=(i=aA({layer:t.pickedLayer,info:i,mode:a})).layer.id;x.has(s)||x.set(s,new Set);let o=x.get(s),l=i.object??i.index;o.has(l)||(o.add(l),w.push(i))}return w}_pickVisibleObjects({layers:e,views:t,viewports:i,x:r,y:n,width:s=1,height:o=1,mode:a="query",maxObjects:l=null,canvasContext:c=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:h}){let d=this._getPickable(e);if(!d||0===i.length)return[];this._resizeBuffer(c);let p=c.cssToDeviceRatio(),f=c.cssToDevicePixels([r,n],!0),g=f.x,m=f.y+f.height,y=c.cssToDevicePixels([r+s,n+o],!0),v=y.x+y.width,b=y.y,_=aM(this._drawAndSample({layers:d,views:t,viewports:i,onViewportActive:u,deviceRect:{x:g,y:b,width:v-g,height:m-b},cullRect:{x:r,y:n,width:s,height:o},effects:h,pass:`picking:${a}`})),x=new Map,w=[],P=Number.isFinite(l);for(let e=0;e<_.length&&(!P||!(w.length>=l));e++){let t=_[e],i={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:n,pixelRatio:p},s=(i=aA({layer:t.pickedLayer,info:i,mode:a})).layer.id;x.has(s)||x.set(s,new Set);let o=x.get(s),l=i.object??i.index;o.has(l)||(o.add(l),w.push(i))}return w}async _drawAndSampleAsync({layers:e,views:t,viewports:i,onViewportActive:r,deviceRect:n,cullRect:s,effects:o,pass:a},l=!1){let c=l?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:r,pickingFBO:c,deviceRect:n,cullRect:s,effects:o,pass:a,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:h,stats:d}=this.pickLayersPass.render(u);this._updateStats(d);let{x:p,y:f,width:g,height:m}=n,y=c.colorAttachments[0]?.texture;if(!y)throw Error("Picking framebuffer color attachment is missing");let v=await this._readTextureDataAsync(y,{x:p,y:f,width:g,height:m},l?Float32Array:Uint8Array);if(!l){let e=!1;for(let t=3;t<v.length;t+=4)if(0!==v[t]){e=!0;break}!e&&v.length>0&&ir.warn("Async pick readback returned only zero alpha values",{deviceRect:n,bytes:Array.from(v.subarray(0,Math.min(v.length,16)))})()}return{pickedColors:v,decodePickingColor:h}}async _readTextureDataAsync(e,t,i){let{width:r,height:n}=t,s=e.computeMemoryLayout(t),o=this.device.createBuffer({byteLength:s.byteLength,usage:aw.Buffer.COPY_DST|aw.Buffer.MAP_READ});try{e.readBuffer(t,o);let a=await o.readAsync(0,s.byteLength),l=i.BYTES_PER_ELEMENT;if(s.bytesPerRow%l!=0)throw Error(`Texture readback row stride ${s.bytesPerRow} is not aligned to ${l}-byte elements.`);let c=new i(a.buffer,a.byteOffset,s.byteLength/l),u=4*r,h=s.bytesPerRow/l;if(h<u)throw Error(`Texture readback row stride ${h} is smaller than packed row length ${u}.`);let d=new i(r*n*4);for(let e=0;e<n;e++){let t=e*h;d.set(c.subarray(t,t+u),e*u)}return d}finally{o.destroy()}}_drawAndSample({layers:e,views:t,viewports:i,onViewportActive:r,deviceRect:n,cullRect:s,effects:o,pass:a},l=!1){let c=l?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:i,onViewportActive:r,pickingFBO:c,deviceRect:n,cullRect:s,effects:o,pass:a,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:h,stats:d}=this.pickLayersPass.render(u);this._updateStats(d);let{x:p,y:f,width:g,height:m}=n,y=new(l?Float32Array:Uint8Array)(g*m*4);return this.device.readPixelsToArrayWebGL(c,{sourceX:p,sourceY:f,sourceWidth:g,sourceHeight:m,target:y}),{pickedColors:y,decodePickingColor:h}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:i}of e)t+=i;this.stats.get("Layers picked").addCount(t)}_getDepthLayers(e,t,i){if(!i||!this.depthFBO)return[];let{pickedLayer:r}=e,n=r?.state?.terrainDrawMode==="drape";return r&&!n?[r]:t.filter(e=>e.props.operation.includes("terrain"))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:i,deviceWidth:r,deviceHeight:n}){let s=Math.max(0,e-i),o=Math.max(0,t-i),a=Math.min(r,e+i+1)-s,l=Math.min(n,t+i+1)-o;return a<=0||l<=0?null:{x:s,y:o,width:a,height:l}}}let ak={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},aR="root";class aO{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add("deck-widget-container"),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!o_(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);for(let e in this.defaultWidgets.length=0,this.resolvedWidgets.length=0,this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let i=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let r of this.getWidgets()){let{viewId:n}=r;if(n){let e=i[n];e&&(r.onViewportChange&&r.onViewportChange(e),r.onRedraw?.({viewports:[e],layers:t}))}else{if(r.onViewportChange)for(let t of e)r.onViewportChange(t);r.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=i,this._updateContainers()}onHover(e,t){for(let i of this.getWidgets()){let{viewId:r}=i;r&&r!==e.viewport?.id||i.onHover?.(e,t)}}onEvent(e,t){let i=i3[t.type];if(i)for(let r of this.getWidgets()){let{viewId:n}=r;n&&n!==e.viewport?.id||r[i]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;for(let e of(this.resolvedWidgets.length=0,this.defaultWidgets))t[e.id]=null,this.resolvedWidgets.push(e);for(let i of e){let e=t[i.id];e?e.viewId!==i.viewId||e.placement!==i.placement?(this._removeWidget(e),this._addWidget(i)):i!==e&&(e.setProps(i.props),i=e):this._addWidget(i),t[i.id]=null,this.resolvedWidgets.push(i)}for(let e in t){let i=t[e];i&&this._removeWidget(i)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:i="top-left"}=e,r=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(r,i).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&"string"!=typeof e)return e;let i=e||aR,r=this.containers[i];r||((r=document.createElement("div")).style.pointerEvents="none",r.style.position="absolute",r.style.overflow="hidden",this.parentElement?.append(r),this.containers[i]=r);let n=r.querySelector(`.${t}`);return n||((n=globalThis.document.createElement("div")).className=t,n.style.position="absolute",n.style.zIndex="2",Object.assign(n.style,ak[t]),r.append(n)),n}_updateContainers(){let e=this.deck.width,t=this.deck.height;for(let i in this.containers){let r=this.lastViewports[i]||null,n=i===aR||r,s=this.containers[i];n?(s.style.display="block",s.style.left=`${r?r.x:0}px`,s.style.top=`${r?r.y:0}px`,s.style.width=`${r?r.width:e}px`,s.style.height=`${r?r.height:t}px`):s.style.display="none"}}}function aI(e,t){t&&Object.entries(t).map(([t,i])=>{t.startsWith("--")?e.style.setProperty(t,i):e.style[t]=i})}class aj{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,i=this.rootElement;if(i&&t.className!==e.className&&(t.className&&i.classList.remove(t.className),e.className&&i.classList.add(e.className)),i&&!o_(t.style,e.style,1)){var r;(r=t.style)&&Object.keys(r).map(e=>{e.startsWith("--")?i.style.removeProperty(e):i.style[e]=""}),aI(i,e.style)}Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=["deck-widget",this.className,this.props.className],t=document.createElement("div");return e.filter(e=>"string"==typeof e&&e.length>0).forEach(e=>t.classList.add(e)),aI(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}}aj.defaultProps={id:"widget",style:{},_container:null,className:""};let az={zIndex:"1",position:"absolute",pointerEvents:"none",color:"#a0a7b4",backgroundColor:"#29323c",padding:"10px",top:"0",left:"0",display:"none"};class aD extends aj{constructor(e={}){super(e),this.id="default-tooltip",this.placement="fill",this.className="deck-tooltip",this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement("div");return e.className=this.className,Object.assign(e.style,az),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,i=t&&t.props.getTooltip;if(!i)return;let r=i(e);this.setTooltip(r,e.x,e.y)}setTooltip(e,t,i){let r=this.rootElement;if(r){if("string"==typeof e)r.innerText=e;else if(e)e.text&&(r.innerText=e.text),e.html&&(r.innerHTML=e.html),e.className&&(r.className=e.className);else{this.isVisible=!1,r.style.display="none";return}this.isVisible=!0,r.style.display="block",r.style.transform=`translate(${t}px, ${i}px)`,e&&"object"==typeof e&&"style"in e&&Object.assign(r.style,e.style)}}}aD.defaultProps={...aj.defaultProps};let aN=globalThis.loaders?.parseImageNode,aF="u">typeof Image,aB="u">typeof ImageBitmap,aU=!!sc||!!aN,aV=/^data:image\/svg\+xml/,a$=/\.svg((\?|#).*)?$/;function aW(e){return e&&(aV.test(e)||a$.test(e))}function aG(e,t){if(aW(t))throw Error("SVG cannot be parsed directly to imagebitmap");return new Blob([new Uint8Array(e)])}async function aH(e,t,i){let r=function(e,t){if(aW(t)){let t=new TextDecoder().decode(e);try{"function"==typeof unescape&&"function"==typeof encodeURIComponent&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return aG(e,t)}(e,i),n=self.URL||self.webkitURL,s="string"!=typeof r&&n.createObjectURL(r);try{return await aq(s||r,t)}finally{s&&n.revokeObjectURL(s)}}async function aq(e,t){let i=new Image;return(i.src=e,t.image&&t.image.decode&&i.decode)?(await i.decode(),i):await new Promise((e,t)=>{try{i.onload=()=>e(i),i.onerror=e=>{let i=e instanceof Error?e.message:"error";t(Error(i))}}catch(e){t(e)}})}let aY=!0;async function aK(e,t,i){let r;r=aW(i)?await aH(e,t,i):aG(e,i);let n=t&&t.imagebitmap;return await aZ(r,n)}async function aZ(e,t=null){if((function(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t)||!aY)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),aY=!1}return await createImageBitmap(e)}function aX(e){var t,i;let r,n,s,o,a=aJ(e);return((r=aJ(a)).byteLength>=24&&0x89504e47===r.getUint32(0,!1)?{mimeType:"image/png",width:r.getUint32(16,!1),height:r.getUint32(20,!1)}:null)||function(e){let t=aJ(e);if(!(t.byteLength>=3&&65496===t.getUint16(0,!1)&&255===t.getUint8(2)))return null;let{tableMarkers:i,sofMarkers:r}=function(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}(),n=2;for(;n+9<t.byteLength;){let e=t.getUint16(n,!1);if(r.has(e))return{mimeType:"image/jpeg",height:t.getUint16(n+5,!1),width:t.getUint16(n+7,!1)};if(!i.has(e))break;n+=2,n+=t.getUint16(n,!1)}return null}(a)||((n=aJ(a)).byteLength>=10&&0x47494638===n.getUint32(0,!1)?{mimeType:"image/gif",width:n.getUint16(6,!0),height:n.getUint16(8,!0)}:null)||((s=aJ(a)).byteLength>=14&&16973===s.getUint16(0,!1)&&s.getUint32(2,!0)===s.byteLength?{mimeType:"image/bmp",width:s.getUint32(18,!0),height:s.getUint32(22,!0)}:null)||((o=!function(e,t,i=0){let r=[...t].map(e=>e.charCodeAt(0));for(let t=0;t<r.length;++t)if(r[t]!==e[t+i])return!1;return!0}(i=new Uint8Array((t=a)instanceof DataView?t.buffer:t),"ftyp",4)||(96&i[8])==0?null:function(e){switch(String.fromCharCode(...e.slice(8,12)).replace("\0"," ").trim()){case"avif":case"avis":return{extension:"avif",mimeType:"image/avif"};default:return null}}(i))?{mimeType:o.mimeType,width:0,height:0}:null)}function aJ(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error("toDataView")}async function aQ(e,t){let{mimeType:i}=aX(e)||{},r=globalThis.loaders?.parseImageNode;return nX(r),await r(e,i)}let a0={dataType:null,batchType:null,id:"image",module:"images",name:"Images",version:"4.4.5",mimeTypes:["image/png","image/jpeg","image/gif","image/webp","image/avif","image/bmp","image/vnd.microsoft.icon","image/svg+xml"],extensions:["png","jpg","jpeg","gif","webp","bmp","ico","svg","avif"],parse:async function e(e,t,i){let r,n=((t=t||{}).image||{}).type||"auto",{url:s}=i||{};switch(function(e){switch(e){case"auto":case"data":if(aB)return"imagebitmap";if(aF)return"image";if(aU)return"data";throw Error("Install '@loaders.gl/polyfills' to parse images under Node.js");default:return!function(e){switch(e){case"auto":return aB;case"imagebitmap":case"image":case"data":return;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}(e),e}}(n)){case"imagebitmap":r=await aK(e,t,s);break;case"image":r=await aH(e,t,s);break;case"data":r=await aQ(e,t);break;default:nX(!1)}return"data"===n&&(r=function(e){switch(function(e){var t;let i=(t=e,"u">typeof ImageBitmap&&t instanceof ImageBitmap?"imagebitmap":"u">typeof Image&&t instanceof Image?"image":t&&"object"==typeof t&&t.data&&t.width&&t.height?"data":null);if(!i)throw Error("Not an image");return i}(e)){case"data":return e;case"image":case"imagebitmap":let t=document.createElement("canvas"),i=t.getContext("2d");if(!i)throw Error("getImageData");return t.width=e.width,t.height=e.height,i.drawImage(e,0,0),i.getImageData(0,0,e.width,e.height);default:throw Error("getImageData")}}(r)),r},tests:[e=>!!aX(new DataView(e))],options:{image:{type:"auto",decode:!0}}},a1={dataType:null,batchType:null,id:"JSON",name:"JSON",module:"",version:"",options:{},extensions:["json","geojson"],mimeTypes:["application/json","application/geo+json"],testText:function(e){let t=e[0],i=e[e.length-1];return"{"===t&&"}"===i||"["===t&&"]"===i},parseTextSync:JSON.parse},a2=function(){let e="9.3.11",t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);if(!t){ir.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:ir,_registerLoggers:nB};var i=[a1,[a0,{imagebitmap:{premultiplyAlpha:"none"}}]];let t=s0();for(let e of i=Array.isArray(i)?i:[i]){let i=nQ(e);t.find(e=>i===e)||t.unshift(i)}}return e}();var a3=e.i(9900),a4=e.i(4819);let a5="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.";class a6{static defaultProps={...a3.Device.defaultProps,type:"best-available",adapters:void 0,waitForPageLoad:!0};stats=a4.lumaStats;log=td.log;VERSION="9.3.6";spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw td.log.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),td.log.error("'yarn why @luma.gl/core' can help identify the source of the conflict")(),Error("luma.gl - multiple versions detected: see console log");td.log.error("This version of luma.gl has already been initialized")()}td.log.log(1,`${this.VERSION} - set luma.log.level=1 (or higher) to trace rendering`)(),globalThis.luma=this}async createDevice(e={}){let t={...a6.defaultProps,...e},i=this.selectAdapter(t.type,t.adapters);if(!i)throw Error(a5);return t.waitForPageLoad&&await i.pageLoaded,await i.create(t)}async attachDevice(e,t){let i=this._getTypeFromHandle(e,t.adapters),r=i&&this.selectAdapter(i,t.adapters);if(!r)throw Error(a5);return await r?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){return Array.from(this._getAdapterMap(e)).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=this._getAdapterMap(e);for(let e of["webgpu","webgl","null"])if(t.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let i=e;"best-available"===e&&(i=this.getBestAvailableAdapterType(t));let r=this._getAdapterMap(t);return i&&r.get(i)||null}enforceWebGL2(e=!0,t=[]){let i=this._getAdapterMap(t).get("webgl");i||td.log.warn("enforceWebGL2: webgl adapter not found")(),i?.enforceWebGL2?.(e)}setDefaultDeviceProps(e){Object.assign(a6.defaultProps,e)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let i of e)t.set(i.type,i);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?"webgl":"u">typeof GPUDevice&&e instanceof GPUDevice||e?.queue?"webgpu":null===e?"null":(e instanceof WebGLRenderingContext?td.log.warn("WebGL1 is not supported",e)():td.log.warn("Unknown handle type",e)(),null)}}let a8=new a6;var a9=e.i(40021);class a7{get pageLoaded(){return lt||(lt=le&&"complete"===document.readyState||"u"<typeof window?Promise.resolve():new Promise(e=>window.addEventListener("load",()=>e()))),lt}}let le=(0,a9.isBrowser)()&&"u">typeof document,lt=null,li={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}};var lr=e.i(31934),ln=e.i(7784);let ls=new class extends a7{type="webgl";constructor(){super(),a3.Device.defaultProps={...a3.Device.defaultProps,...lr.DEFAULT_SPECTOR_PROPS}}enforceWebGL2(e){!function(e=!0){let t=HTMLCanvasElement.prototype;if(!e&&t.originalGetContext){t.getContext=t.originalGetContext,t.originalGetContext=void 0;return}t.originalGetContext=t.getContext,t.getContext=function(e,t){if("webgl"===e||"experimental-webgl"===e){let e=this.originalGetContext("webgl2",t);return e instanceof HTMLElement&&function(e){e.getExtension("EXT_color_buffer_float");let t={...li,WEBGL_disjoint_timer_query:e.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:{drawBuffersWEBGL:t=>e.drawBuffers(t),COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067},OES_vertex_array_object:{VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES:()=>e.createVertexArray(),deleteVertexArrayOES:t=>e.deleteVertexArray(t),isVertexArrayOES:t=>e.isVertexArray(t),bindVertexArrayOES:t=>e.bindVertexArray(t)},ANGLE_instanced_arrays:{VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE:(...t)=>e.drawArraysInstanced(...t),drawElementsInstancedANGLE:(...t)=>e.drawElementsInstanced(...t),vertexAttribDivisorANGLE:(...t)=>e.vertexAttribDivisor(...t)}},i=e.getExtension;e.getExtension=function(r){let n=i.call(e,r);return n||(r in t?t[r]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){let i=r.apply(e)||[];return i?.concat(Object.keys(t))}}(e),e}return this.originalGetContext(e,t)}}(e)}isSupported(){return"u">typeof WebGL2RenderingContext}isDeviceHandle(e){return!!("u">typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext)||("u">typeof WebGLRenderingContext&&e instanceof WebGLRenderingContext&&td.log.warn("WebGL1 is not supported",e)(),!1)}async attach(t,i={}){var r;let{WebGLDevice:n}=await e.A(76084);if(t instanceof n)return t;let s=n.getDeviceFromContext(t);if(s)return s;if(r=t,!("u">typeof WebGL2RenderingContext&&r instanceof WebGL2RenderingContext)&&(!r||"function"!=typeof r.createVertexArray))throw Error("Invalid WebGL2RenderingContext");let o=!0===i.createCanvasContext?{}:i.createCanvasContext;return new n({...i,_handle:t,createCanvasContext:{canvas:t.canvas,autoResize:!1,...o}})}async create(t={}){let{WebGLDevice:i}=await e.A(76084),r=[];for(let e of((t.debugWebGL||t.debug)&&r.push((0,ln.loadWebGLDeveloperTools)()),t.debugSpectorJS&&r.push((0,lr.loadSpectorJS)(t)),await Promise.allSettled(r)))"rejected"===e.status&&td.log.error(`Failed to initialize debug libraries ${e.reason}`)();try{let e=new i(t);td.log.groupCollapsed(1,`WebGLDevice ${e.id} created`)();let r=`\
${e._reused?"Reusing":"Created"} device with WebGL2 ${e.props.debug?"debug ":""}context: \
${e.info.vendor}, ${e.info.renderer} for canvas: ${e.canvasContext.id}`;return td.log.probe(1,r)(),td.log.table(1,e.info)(),e}finally{td.log.groupEnd(1)(),td.log.info(1,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}},lo=0;class la{static defaultAnimationLoopProps={device:null,onAddHTML:()=>"",onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>console.error(e),stats:void 0,autoResizeViewport:!1};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw="initialized";_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(e){if(this.props={...la.defaultAnimationLoopProps,...e},!(e=this.props).device)throw Error("No device provided");this.stats=e.stats||new n$.Stats({id:`animation-loop-${lo++}`}),this.sharedStats=a8.stats.get("Animation Loop"),this.frameRate=this.stats.get("Frame Rate"),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get("CPU Time"),this.gpuTime=this.stats.get("GPU Time"),this.setProps({autoResizeViewport:e.autoResizeViewport}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(e){this.props.onError(e),this._error=e}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){return"autoResizeViewport"in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),this}async start(){if(this._running)return this;this._running=!0;try{let e;if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}if(!this._running)return null;return!1!==e&&(this._cancelAnimationFrame(),this._requestAnimationFrame()),this}catch(t){let e=t instanceof Error?t:Error("Unknown error");throw this.props.onError(e),e}}stop(){return this._running&&(this.animationProps&&!this._error&&this.props.onFinalize(this.animationProps),this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0),this}redraw(e){return this.device?.isLost||this._error||(this._beginFrameTimers(e),this._setupFrame(),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&(this._resolveNextFrame(this),this._nextFramePromise=null,this._resolveNextFrame=null),this._endFrameTimers()),this}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw("waitForRender"),this._nextFramePromise||(this._nextFramePromise=new Promise(e=>{this._resolveNextFrame=e})),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw("toDataURL"),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error("OffscreenCanvas")}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){if(this._running){var e;let t;this._animationFrameId=(e=this._animationFrame.bind(this),(t="u">typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null)?t.call(window,e):setTimeout(()=>e("u">typeof performance?performance.now():Date.now()),1e3/60))}}_cancelAnimationFrame(){if(null!==this._animationFrameId){var e;let t;e=this._animationFrameId,(t="u">typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null)?t.call(window,e):clearTimeout(e),this._animationFrameId=null}}_animationFrame(e){this._running&&(this.redraw(e),this._requestAnimationFrame())}_renderFrame(e){this.display?this.display._renderFrame(e):(this.props.onRender(this._getAnimationProps()),this.device?.submit())}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error("loop");let t=e?.canvas,i=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:i,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error("animationProps");return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:i}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw("drawing buffer resized"),i!==this.animationProps.aspect&&this.setNeedsRedraw("drawing buffer aspect changed"),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=i,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error("No device provided");this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement("div");document.body.appendChild(e),e.style.position="relative";let t=document.createElement("div");t.style.position="absolute",t.style.left="10px",t.style.bottom="10px",t.style.width="300px",t.style.background="white",this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let i=this.props.onAddHTML(t);i&&(t.innerHTML=i)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??("u">typeof performance?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;void 0!==e&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener("mousemove",this._onMousemove.bind(this)),this.canvas.addEventListener("mouseleave",this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}}function ll(){}let lc={id:"",width:"100%",height:"100%",style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:"auto",layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:"none",eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:ll,onWebGLInitialized:ll,onResize:ll,onViewStateChange:ll,onInteractionStateChange:ll,onBeforeRender:ll,onAfterRender:ll,onLoad:ll,onError:e=>ir.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:({isDragging:e})=>e?"grabbing":"grab",getTooltip:null,debug:!1,drawPickingColors:!1};class lu{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new n$.Stats({id:"deck.gl"}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw="Initial render",this._pickRequest={mode:"hover",x:-1,y:-1,radius:0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this;if("pointerleave"===e.type)t.x=-1,t.y=-1,t.radius=0;else{if(e.leftButton||e.rightButton)return;let i=e.offsetCenter;if(!i)return;t.x=i.x,t.y=i.y,t.radius=this.props.pickingRadius}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=i3[e.type],i=e.offsetCenter;if(!t||!i||!this.layerManager)return;let r=this.layerManager.getLayers(),n=this._getInternalPickingMode();if(n){if("sync"===n){let t="click"===e.type&&this._shouldUnproject3D(r)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(i.x,i.y,{unproject3D:!0},r))):this._getLastPointerDownPickingInfo(i.x,i.y,r);this._dispatchPickingEvent(t,e);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(i.x,i.y,r))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter;if(!t)return;let i=this._getInternalPickingMode();if(!i)return;let r=this.layerManager?.getLayers()||[],n=++this._pointerDownPickSequence;if("sync"===i){let e=this._pickPointSync({x:t.x,y:t.y,radius:this.props.pickingRadius}),i=this._getFirstPickedInfo(e);this._lastPointerDownInfo=i,this._lastPointerDownInfoPromise=Promise.resolve(i);return}let s=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{},r)).then(e=>this._getFirstPickedInfo(e)).then(e=>(n===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let i=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,r):{};return n===this._pointerDownPickSequence&&(this._lastPointerDownInfo=i),i});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=s};const t=e;this.props={...lc,...e},(e=this.props).viewState&&e.initialViewState&&ir.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device,this._setDeviceCanvasContext(e.device));let i=this.device;!i&&e.gl&&(e.gl instanceof WebGLRenderingContext&&ir.error("WebGL1 context not supported.")(),i=ls.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps})),i||(i=this._createDevice(e)),this.animationLoop=this._createAnimationLoop(i,e),this.setProps(t),e._typedArrayManagerProps&&oo.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,this.eventManager?.destroy(),this.eventManager=null,this.widgetManager?.finalize(),this.widgetManager=null,this.props.canvas||this.props.device||this.props.gl||!this.canvas||(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null),this._canvasContext=null}setProps(e){this.stats.get("setProps Time").timeStart(),"onLayerHover"in e&&ir.removed("onLayerHover","onHover")(),"onLayerClick"in e&&ir.removed("onLayerClick","onClick")(),e.initialViewState&&!o_(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),Object.assign(this.props,e),this._validateInternalPickingMode(),this._setCanvasSize(this.props);let t=Object.create(this.props);if(Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState()}),e.device&&e.device.id!==this.device?.id){let t=e.device.getDefaultCanvasContext();this.animationLoop?.stop(),this.canvas!==t.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(e.device),ir.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()}this.animationLoop?.setProps(t),void 0!==e.useDevicePixels&&this._canvasContext?.setProps&&this._canvasContext.setProps({useDevicePixels:e.useDevicePixels}),this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get("setProps Time").timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return"Deck._animate";let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let i=this.viewManager.needsRedraw(e),r=this.layerManager.needsRedraw(e),n=this.effectManager.needsRedraw(e),s=this.deckRenderer.needsRedraw(e);return t||i||r||n||s}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});(t=e||t)&&(this.stats.get("Redraw Count").incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return null!==this.viewManager}getViews(){return oz(this.viewManager),this.viewManager.views}getView(e){return oz(this.viewManager),this.viewManager.getView(e)}getViewports(e){return oz(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}async pickObjectAsync(e){let t=(await this._pickAsync("pickObjectAsync","pickObject Time",e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync("pickObjectsAsync","pickObjects Time",e)}pickObject(e){let t=this._pick("pickObject","pickObject Time",e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick("pickObject","pickMultipleObjects Time",e).result}pickObjects(e){return this._pick("pickObjects","pickObjects Time",e)}_pickPositionForController(e,t){return"sync"!==this._getInternalPickingMode()?null:this.pickObject({x:e,y:t,radius:0,unproject3D:!0})}_addResources(e,t=!1){for(let i in e)this.layerManager.resourceManager.add({resourceId:i,data:e[i],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if("auto"===e)return"webgpu"===t?"async":"sync";if("sync"===e&&"webgpu"===t)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>"3d"===e.props.pickable)}_getPointPickOptions(e,t,i={},r=this.layerManager?.getLayers()||[]){return{x:e,y:t,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(r),...i}}_pickPointSync(e){return this._pick("pickObject","pickObject Time",e)}_pickPointAsync(e){return this._pickAsync("pickObjectAsync","pickObject Time",e)}_getLastPointerDownPickingInfo(e,t,i=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:i,viewports:this.getViewports({x:e,y:t})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},i){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let r=t,n=!1;for(let t of e)r=t,n=t.layer?.onHover(t,i)||n;n||(this.props.onHover?.(r,i),this.widgetManager.onHover(r,i))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let i=i3[t.type];if(!i)return;let{layer:r}=e,n=r&&(r[i]||r.props[i]),s=this.props[i],o=!1;n&&(o=n.call(r,e,t)),o||(s?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,i){oz(this.deckPicker);let{stats:r}=this;r.get("Pick Count").incrementCount(),r.get(t).timeStart();let n=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports(i),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasContext:this._canvasContext||void 0});return r.get(t).timeEnd(),n}_pick(e,t,i){oz(this.deckPicker);let{stats:r}=this;r.get("Pick Count").incrementCount(),r.get(t).timeStart();let n=this.deckPicker[e]({layers:this.layerManager.getLayers(i),views:this.viewManager.getViews(),viewports:this.getViewports(i),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...i,canvasContext:this._canvasContext||void 0});return r.get(t).timeEnd(),n}_createCanvas(e){let t=e.canvas;return"string"==typeof t&&oz(t=document.getElementById(t)),t||((t=document.createElement("canvas")).id=e.id||"deckgl-overlay",e.width&&"number"==typeof e.width&&(t.width=e.width),e.height&&"number"==typeof e.height&&(t.height=e.height),(e.parent||document.body).appendChild(t)),Object.assign(t.style,e.style),t}_setCanvasContext(e){this._canvasContext=e,"style"in e.canvas&&(this.canvas=e.canvas)}_setDeviceCanvasContext(e,t={}){let i=e.getDefaultCanvasContext();this._setCanvasContext(i),this._setDeviceResizeHandler(e,t)}_setDeviceResizeHandler(e,t={}){let i=!!t.syncDrawingBuffer;if(this._deviceResizeHandler?.device===e){this._deviceResizeHandler.syncDrawingBuffer=i;return}this._restoreDeviceResizeHandler();let r=e=>{e===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};e.props.onResize=r,this._deviceResizeHandler={device:e,onResize:r,syncDrawingBuffer:i}}_restoreDeviceResizeHandler(){let e=this._deviceResizeHandler;e&&e.device.props?.onResize===e.onResize&&(e.device.props.onResize=ll),this._deviceResizeHandler=null}_setCanvasSize(e){if(!this.canvas)return;let{width:t,height:i}=e;if(t||0===t){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(i||0===i){let t=Number.isFinite(i)?`${i}px`:i;this.canvas.style.position=e.style?.position||"absolute",this.canvas.style.height=t}}_updateCanvasSize(e=this._canvasContext){let{canvas:t}=this,[i,r]=e?e.getCSSSize():[t?.clientWidth??t?.width??0,t?.clientHeight??t?.height??0];(i!==this.width||r!==this.height)&&(this.width=i,this.height=r,this.viewManager?.setProps({width:i,height:r}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:i,height:r},e||void 0))}_onCanvasContextResize(e,t={}){if(t.syncDrawingBuffer){let{width:t,height:i}=e.canvas;e.setDrawingBufferSize(t,i)}this._needsRedraw="Canvas resized",this._updateCanvasSize(e)}_createAnimationLoop(e,t){let{gl:i,onError:r}=t;return new la({device:e,autoResizeDrawingBuffer:!i,autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:r})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,i={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};i.adapters.includes(ls)||i.adapters.push(ls);let r={alphaMode:this.props.deviceProps?.type==="webgpu"?"premultiplied":void 0};return a8.createDevice({_reuseDevices:!0,type:"webgl",...i,createCanvasContext:{...r,..."object"==typeof t?t:void 0,canvas:this._createCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new o8({id:"default-view"})];return t.length&&this.props.controller&&(t[0].props.controller=this.props.controller),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error("WebGL context is lost"))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,i=this.layerManager?.getLayers()||[],r=this._getPointPickOptions(e.x,e.y,{radius:e.radius,mode:e.mode},i),n=this._getInternalPickingMode(),s=++this._hoverPickSequence;if(e.event=null,!n)return;if("sync"===n)return void this._applyHoverCallbacks(this._pickPointSync(r),t);this._pickPointAsync(r).then(({result:e,emptyInfo:i})=>{s===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:i},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.parent||this.canvas;e&&(e.style.cursor=this.props.getCursor(this.cursorState))}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(e,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==e)}),this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),"webgl"===this.device.type&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),"webgl"===this.device.type&&this.props.onWebGLInitialized(this.device.gl);let t=new ev;t.play(),this.animationLoop.attachTimeline(t);let i=this.props.parent?.querySelector(".deck-events-root")||this.canvas;for(let e in this.eventManager=new iQ(i,{touchAction:this.props.touchAction,recognizers:Object.keys(i4).map(e=>{let[t,i,r,n]=i4[e],s=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...i,...s,event:e}),recognizeWith:r,requireFailure:n}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}}),i3)this.eventManager.on(e,this._onEvent);this.viewManager=new ox({timeline:t,eventManager:this.eventManager,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let r=this.viewManager.getViewports()[0];this.layerManager=new ob(this.device,{deck:this,stats:this.stats,viewport:r,timeline:t}),this.effectManager=new ag({deck:this,device:this.device}),this.deckRenderer=new ax(this.device,{stats:this.stats}),this.deckPicker=new aT(this.device,{stats:this.stats});let n=this.props.parent?.querySelector(".deck-widgets-root")||this.canvas?.parentElement;this.widgetManager=new aO({deck:this,parentElement:n}),this.widgetManager.addDefault(new aD),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(e,t){let{device:i,gl:r}=this.layerManager.context;this.props.onBeforeRender({device:i,gl:r});let n={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:"screen",effects:this.effectManager.getEffects(),...t};this.deckRenderer?.renderLayers(n),"screen"===n.pass&&this.widgetManager.onRedraw({viewports:n.viewports,layers:n.layers}),this.props.onAfterRender({device:i,gl:r})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),ir.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},!this.props.viewState&&this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get("frameRate").timeEnd(),e.get("frameRate").timeStart();let t=this.animationLoop.stats;e.get("GPU Time").addTime(t.get("GPU Time").lastTiming),e.get("CPU Time").addTime(t.get("CPU Time").lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get("frameRate").getHz(),e.setPropsTime=t.get("setProps Time").time,e.updateAttributesTime=t.get("Update Attributes").time,e.framesRedrawn=t.get("Redraw Count").count,e.pickTime=t.get("pickObject Time").time+t.get("pickMultipleObjects Time").time+t.get("pickObjects Time").time,e.pickCount=t.get("Pick Count").count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get("Layers rendered").lastSampleCount,e.pickLayersCount=t.get("Layers picked").lastSampleCount,e.updateLayersCount=t.get("Layer updates").count,e.updateAttributesCount=t.get("Attributes updated").count,e.gpuTime=t.get("GPU Time").time,e.cpuTime=t.get("CPU Time").time,e.gpuTimePerFrame=t.get("GPU Time").getAverageTime(),e.cpuTimePerFrame=t.get("CPU Time").getAverageTime();let i=a8.stats.get("GPU Time and Memory");e.bufferMemory=i.get("Buffer Memory").count,e.textureMemory=i.get("Texture Memory").count,e.renderbufferMemory=i.get("Renderbuffer Memory").count,e.gpuMemory=i.get("GPU Memory").count}}lu.defaultProps=lc,lu.VERSION=a2;let lh="u">typeof window?_.useLayoutEffect:_.useEffect;function ld(e,t){for(;e;){if(e===t)return!0;e=Object.getPrototypeOf(e)}return!1}var lp=e.i(95002),lf=e.i(69004),lg=e.i(44135);let lm=lf.dataTypeDecoder.getDataType.bind(lf.dataTypeDecoder);function ly(e,t,i){if(t.size>4)return null;let r="webgpu"===i&&"uint8"===t.type?"unorm8":t.type;return{attribute:e,format:t.size>1?`${r}x${t.size}`:t.type,byteOffset:t.offset||0}}function lv(e){return e.stride||e.size*e.bytesPerElement}function lb(e,t){t.offset&&ir.removed("shaderAttribute.offset","vertexOffset, elementOffset")();let i=lv(e),r=(void 0!==t.vertexOffset?t.vertexOffset:e.vertexOffset||0)*i+(t.elementOffset||0)*e.bytesPerElement+(e.offset||0);return{...t,offset:r,stride:i}}class l_{constructor(e,t,i){let r;this._buffer=null,this.device=e,this.id=t.id||"",this.size=t.size||1;const n=t.logicalType||t.type,s="float64"===n;let{defaultValue:o}=t;o=Number.isFinite(o)?[o]:o||Array(this.size).fill(0),r=s?"float32":!n&&t.isIndexed?"uint32":n||"float32";let a=function(e){switch(e){case"float64":return Float64Array;case"uint8":case"unorm8":return Uint8ClampedArray;default:return(0,lg.getTypedArrayConstructor)(e)}}(n||r);this.doublePrecision=s,s&&!1===t.fp64&&(a=Float32Array),this.value=null,this.settings={...t,defaultType:a,defaultValue:o,logicalType:n,type:r,normalized:r.includes("norm"),size:this.size,bytesPerElement:a.BYTES_PER_ELEMENT},this.state={...i,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*lv(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}delete(){this._buffer&&(this._buffer.delete(),this._buffer=null),oo.release(this.state.allocatedValue)}getBuffer(){return this.state.constant?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let i={};if(this.state.constant){let r=this.value;if(t){let n=lb(this.getAccessor(),t),s=n.offset/r.BYTES_PER_ELEMENT,o=n.size||this.size;i[e]=r.subarray(s,s+o)}else i[e]=r}else i[e]=this.getBuffer();return this.doublePrecision&&(this.value instanceof Float64Array?i[`${e}64Low`]=i[e]:i[`${e}64Low`]=new Float32Array(this.size)),i}_getBufferLayout(e=this.id,t=null){let i=this.getAccessor(),r=[],n={name:this.id,byteStride:lv(i)};if(this.doublePrecision){let n,s={high:n=lb(i,t||{}),low:{...n,offset:n.offset+4*i.size}};r.push(ly(e,{...i,...s.high},this.device.type),ly(`${e}64Low`,{...i,...s.low},this.device.type))}else if(t){let n=lb(i,t);r.push(ly(e,{...i,...n},this.device.type))}else r.push(ly(e,i,this.device.type));return n.attributes=r.filter(Boolean),n}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:i,size:r}=this,n=i*r;if(t&&n&&t.length>=n){let i=Array(r).fill(1/0),s=Array(r).fill(-1/0);for(let e=0;e<n;)for(let n=0;n<r;n++){let r=t[e++];r<i[n]&&(i[n]=r),r>s[n]&&(s[n]=r)}e=[i,s]}}return this.state.bounds=e,e}setData(e){let t,{state:i}=this;t=ArrayBuffer.isView(e)?{value:e}:e instanceof aw.Buffer?{buffer:e}:e;let r={...this.settings,...t};if(ArrayBuffer.isView(t.value)){if(!t.type)if(this.doublePrecision&&t.value instanceof Float64Array)r.type="float32";else{let e=lm(t.value);r.type=r.normalized?e.replace("int","norm"):e}r.bytesPerElement=t.value.BYTES_PER_ELEMENT,r.stride=lv(r)}if(i.bounds=null,t.constant){let e=t.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),!(!i.constant||!this._areValuesEqual(e,this.value)))return!1;i.externalBuffer=null,i.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(t.buffer)i.externalBuffer=t.buffer,i.constant=!1,this.value=t.value||null;else if(t.value){this._checkExternalBuffer(t);let e=t.value;i.externalBuffer=null,i.constant=!1,this.value=e;let{buffer:n}=this,s=lv(r),o=(r.vertexOffset||0)*s;if(this.doublePrecision&&e instanceof Float64Array&&(e=oh(e,r)),this.settings.isIndexed){let t=this.settings.defaultType;e.constructor!==t&&(e=new t(e))}let a=e.byteLength+o+2*s;(!n||n.byteLength<a)&&(n=this._createBuffer(a)),n.write(e,o)}return this.setAccessor(r),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:i=0,endOffset:r}=e;this.buffer.write(this.doublePrecision&&t instanceof Float64Array?oh(t,{size:this.size,startIndex:i,endIndex:r}):t.subarray(i,r),i*t.BYTES_PER_ELEMENT+this.byteOffset)}allocate(e,t=!1){let{state:i}=this,r=i.allocatedValue,n=oo.allocate(r,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=n;let{byteOffset:s}=this,{buffer:o}=this;return(!o||o.byteLength<n.byteLength+s)&&(o=this._createBuffer(n.byteLength+s),t&&r&&o.write(r instanceof Float64Array?oh(r,this):r,s)),i.allocatedValue=n,i.constant=!1,i.externalBuffer=null,this.setAccessor(this.settings),!0}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let i=this.settings.defaultType,r=!1;if(this.doublePrecision&&(r=t.BYTES_PER_ELEMENT<4),r)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);t instanceof i||!this.settings.normalized||"normalized"in e||ir.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case"snorm8":return new Float32Array(e).map(e=>(e+128)/255*2-1);case"snorm16":return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case"unorm8":return new Float32Array(e).map(e=>e/255);case"unorm16":return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,i){let{defaultValue:r,size:n}=this.settings;if(Number.isFinite(e))return t[i]=e,t;if(!e){let e=n;for(;--e>=0;)t[i+e]=r[e];return t}switch(n){case 4:t[i+3]=Number.isFinite(e[3])?e[3]:r[3];case 3:t[i+2]=Number.isFinite(e[2])?e[2]:r[2];case 2:t[i+1]=Number.isFinite(e[1])?e[1]:r[1];case 1:t[i+0]=Number.isFinite(e[0])?e[0]:r[0];break;default:let s=n;for(;--s>=0;)t[i+s]=Number.isFinite(e[s])?e[s]:r[s]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:i}=this;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:i}=this.settings;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:(t?aw.Buffer.INDEX:aw.Buffer.VERTEX)|aw.Buffer.COPY_DST,indexType:t?i:void 0,byteLength:e}),this._buffer}}let lx=[],lw=[];function lP(e,t=0,i=1/0){let r=lx,n={index:-1,data:e,target:[]};return e?"function"==typeof e[Symbol.iterator]?r=e:e.length>0&&(lw.length=e.length,r=lw):r=lx,(t>0||Number.isFinite(i))&&(r=(Array.isArray(r)?r:Array.from(r)).slice(t,i),n.index=t-1),{iterable:r,objectInfo:n}}function lC(e){return e&&e[Symbol.asyncIterator]}function lS(e,t){let{size:i,stride:r,offset:n,startIndices:s,nested:o}=t,a=e.BYTES_PER_ELEMENT,l=r?r/a:i,c=n?n/a:0,u=Math.floor((e.length-c)/l);return(t,{index:r,target:n})=>{let a;if(!s){let t=r*l+c;for(let r=0;r<i;r++)n[r]=e[t+r];return n}let h=s[r],d=s[r+1]||u;if(o){a=Array(d-h);for(let t=h;t<d;t++){let r=t*l+c;n=Array(i);for(let t=0;t<i;t++)n[t]=e[r+t];a[t-h]=n}}else if(l===i)a=e.subarray(h*i+c,d*i+c);else{a=new e.constructor((d-h)*i);let t=0;for(let r=h;r<d;r++){let n=r*l+c;for(let r=0;r<i;r++)a[t++]=e[n+r]}}return a}}let lM=[],lE=[[0,1/0]],lL={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}};function lA(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:"interpolation",duration:e});let i=e.type||"interpolation";return{...lL[i],...t,...e,type:i}}class lT extends l_{constructor(e,t){super(e,t,{startIndices:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:lE}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t,i;(t=this.state).layoutChanged||(i=this.getAccessor(),t.layoutChanged=e.type!==i.type||e.size!==i.size||lv(e)!==lv(i)||(e.offset||0)!==(i.offset||0)),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat("function"!=typeof e&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,i=this.settings.transition;return lA(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],i)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:i=1/0}=t;this.state.updateRanges=function(e,t){if(e===lE||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let i=[],r=e.length,n=0;for(let s=0;s<r;s++){let r=e[s];r[1]<t[0]?(i.push(r),n=s+1):r[0]>t[1]?i.push(r):t=[Math.min(r[0],t[0]),Math.max(r[1],t[1])]}return i.splice(n,0,t),i}(this.state.updateRanges,[e,i])}else this.state.updateRanges=lE}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=lM}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:i}=this;return!i.noAlloc&&!!i.update&&(super.allocate(e,t.updateRanges!==lE),!0)}updateBuffer({numInstances:e,data:t,props:i,context:r}){if(!this.needsUpdate())return!1;let{state:{updateRanges:n},settings:{update:s,noAlloc:o}}=this,a=!0;if(s){for(let[o,a]of n)s.call(r,this,{data:t,startRow:o,endRow:a,props:i,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset)this.constant?this.setConstantValue(r,this.value):this.setData({value:this.value,constant:this.constant}),this.constant=!1;else for(let[t,i]of n){let r=Number.isFinite(t)?this.getVertexOffset(t):0,n=Number.isFinite(i)?this.getVertexOffset(i):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:r,endOffset:n})}this._checkAttributeArray()}else a=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),a}setConstantValue(e,t){if(void 0===t||"function"==typeof t)return!1;let i=this.settings.transform&&e?this.settings.transform.call(e,t):t;return"webgpu"===this.device.type?this.setConstantBufferValue(i,this.numInstances):(this.setData({constant:!0,value:i})&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0)}setConstantBufferValue(e,t){let i=this.settings.defaultType,r=this._normalizeValue(e,new i(this.size),0);if(this._hasConstantBufferValue(r,t))return this.constant=!1,this.clearNeedsUpdate(),!1;let n=new i(Math.max(t,1)*this.size);for(let e=0;e<n.length;e+=this.size)n.set(r,e);let s=this.setData({value:n});return this.constant=!1,this.clearNeedsUpdate(),s&&this.setNeedsRedraw(),s}_hasConstantBufferValue(e,t){let i=this.value,r=Math.max(t,1)*this.size;if(!ArrayBuffer.isView(i)||i.length!==r||i.length%this.size!=0)return!1;for(let t=0;t<i.length;t+=this.size)for(let r=0;r<this.size;r++)if(i[t+r]!==e[r])return!1;return!0}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e||(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e),!0)):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:i,settings:r}=this;if(!e)return i.binaryValue=null,i.binaryAccessor=null,!1;if(r.noAlloc)return!1;if(i.binaryValue===e)return this.clearNeedsUpdate(),!0;if(i.binaryValue=e,this.setNeedsRedraw(),r.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let n=e;oz(ArrayBuffer.isView(n.value),`invalid ${r.accessor}`);let s=!!n.size&&n.size!==this.size;return i.binaryAccessor=lS(n.value,{size:n.size||this.size,stride:n.stride,offset:n.offset,startIndices:t,nested:s}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let i in e)Object.assign(t,super.getValue(i,e[i]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,i=super._getBufferLayout(),{stepMode:r}=this.settings;if("dynamic"===r?i.stepMode=e?e.isInstanced?"instance":"vertex":"instance":i.stepMode=r??"vertex",!t)return i;for(let e in t){let r=super._getBufferLayout(e,t[e]);i.attributes.push(...r.attributes)}return i}_autoUpdater(e,{data:t,startRow:i,endRow:r,props:n,numInstances:s}){let{settings:o,state:a,value:l,size:c,startIndices:u}=e,{accessor:h,transform:d}=o,p=a.binaryAccessor||("function"==typeof h?h:n[h]);oz("function"==typeof p,`accessor "${h}" is not a function`);let f=e.getVertexOffset(i),{iterable:g,objectInfo:m}=lP(t,i,r);for(let t of g){m.index++;let i=p(t,m);if(d&&(i=d.call(this,i)),u){let t=(m.index<u.length-1?u[m.index+1]:s)-u[m.index];if(i&&Array.isArray(i[0])){let t=f;for(let r of i)e._normalizeValue(r,l,t),t+=c}else i&&i.length>c?l.set(i,f):(e._normalizeValue(i,m.target,0),function({target:e,source:t,start:i=0,count:r=1}){let n=t.length,s=r*n,o=0;for(let r=i;o<n;o++)e[r++]=t[o];for(;o<s;)o<s-o?(e.copyWithin(i+o,i,i+o),o*=2):(e.copyWithin(i+o,i,i+s-o),o=s)}({target:l,source:m.target,start:f,count:t}));f+=t*c}else e._normalizeValue(i,l,f),f+=c}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||"function"==typeof e.update))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let i=!0;switch(t){case 4:i=i&&Number.isFinite(e[3]);case 3:i=i&&Number.isFinite(e[2]);case 2:i=i&&Number.isFinite(e[1]);case 1:i=i&&Number.isFinite(e[0]);break;default:i=!1}if(!i)throw Error(`Illegal attribute generated for ${this.id}`)}}}let lk=`\
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`,lR=`#version 300 es
${lk}`;var lO=e.i(96204),lI=e.i(88396),lj=e.i(49494),lz=e.i(81905);class lD extends lz.Resource{get[Symbol.toStringTag](){return"ComputePipeline"}hash="";shaderLayout;constructor(e,t){super(e,t,lD.defaultProps),this.shaderLayout=t.shaderLayout}static defaultProps={...lz.Resource.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0}}var lN=e.i(74366);class lF{static defaultProps={...lj.RenderPipeline.defaultProps};static getDefaultPipelineFactory(e){let t=e.getModuleData("@luma.gl/core");return t.defaultPipelineFactory||=new lF(e),t.defaultPipelineFactory}device;_hashCounter=0;_hashes={};_renderPipelineCache={};_computePipelineCache={};_sharedRenderPipelineCache={};get[Symbol.toStringTag](){return"PipelineFactory"}toString(){return`PipelineFactory(${this.device.id})`}constructor(e){this.device=e}createRenderPipeline(e){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);let t={...lj.RenderPipeline.defaultProps,...e},i=this._renderPipelineCache,r=this._hashRenderPipeline(t),n=i[r]?.resource;if(n)i[r].useCount++,this.device.props.debugFactories&&td.log.log(3,`${this}: ${i[r].resource} reused, count=${i[r].useCount}, (id=${e.id})`)();else{let e="webgl"===this.device.type&&this.device.props._sharePipelines?this.createSharedRenderPipeline(t):void 0;(n=this.device.createRenderPipeline({...t,id:t.id?`${t.id}-cached`:(0,lN.uid)("unnamed-cached"),_sharedRenderPipeline:e})).hash=r,i[r]={resource:n,useCount:1},this.device.props.debugFactories&&td.log.log(3,`${this}: ${n} created, count=${i[r].useCount}`)()}return n}createComputePipeline(e){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);let t={...lD.defaultProps,...e},i=this._computePipelineCache,r=this._hashComputePipeline(t),n=i[r]?.resource;return n?(i[r].useCount++,this.device.props.debugFactories&&td.log.log(3,`${this}: ${i[r].resource} reused, count=${i[r].useCount}, (id=${e.id})`)()):((n=this.device.createComputePipeline({...t,id:t.id?`${t.id}-cached`:void 0})).hash=r,i[r]={resource:n,useCount:1},this.device.props.debugFactories&&td.log.log(3,`${this}: ${n} created, count=${i[r].useCount}`)()),n}release(e){if(!this.device.props._cachePipelines)return void e.destroy();let t=this._getCache(e),i=e.hash;t[i].useCount--,0===t[i].useCount?(this._destroyPipeline(e),this.device.props.debugFactories&&td.log.log(3,`${this}: ${e} released and destroyed`)()):t[i].useCount<0?(td.log.error(`${this}: ${e} released, useCount < 0, resetting`)(),t[i].useCount=0):this.device.props.debugFactories&&td.log.log(3,`${this}: ${e} released, count=${t[i].useCount}`)()}createSharedRenderPipeline(e){let t=this._hashSharedRenderPipeline(e),i=this._sharedRenderPipelineCache[t];return i||(i={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[t]=i),i.useCount++,i.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;let t=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),i=this._sharedRenderPipelineCache[t];i&&(i.useCount--,0===i.useCount&&(i.resource.destroy(),delete this._sharedRenderPipelineCache[t]))}_destroyPipeline(e){let t=this._getCache(e);return!!this.device.props._destroyPipelines&&(delete t[e.hash],e.destroy(),e instanceof lj.RenderPipeline&&this.releaseSharedRenderPipeline(e),!0)}_getCache(e){let t;if(e instanceof lD&&(t=this._computePipelineCache),e instanceof lj.RenderPipeline&&(t=this._renderPipelineCache),!t)throw Error(`${this}`);if(!t[e.hash])throw Error(`${this}: ${e} matched incorrect entry`);return t}_hashComputePipeline(e){let{type:t}=this.device,i=this._getHash(e.shader.source),r=this._getHash(JSON.stringify(e.shaderLayout));return`${t}/C/${i}SL${r}`}_hashRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e),n=this._getHash(JSON.stringify(e.shaderLayout)),s=this._getHash(JSON.stringify(e.bufferLayout)),{type:o}=this.device;if("webgl"===o){let a=this._getHash(JSON.stringify(e.parameters));return`${o}/R/${t}/${i}V${r}T${e.topology}P${a}SL${n}BL${s}`}{let a=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),l=this._getHash(JSON.stringify(e.parameters)),c=this._getWebGPUAttachmentHash(e);return`${o}/R/${t}/${i}V${r}T${e.topology}EP${a}P${l}SL${n}BL${s}A${c}`}}_hashSharedRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,i=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e);return`webgl/S/${t}/${i}V${r}`}_getHash(e){return void 0===this._hashes[e]&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){let{varyings:t=[],bufferMode:i=null}=e;return this._getHash(JSON.stringify({varyings:t,bufferMode:i}))}_getWebGPUAttachmentHash(e){let t=e.colorAttachmentFormats??[this.device.preferredColorFormat],i=e.parameters?.depthWriteEnabled?e.depthStencilAttachmentFormat||this.device.preferredDepthFormat:null;return this._getHash(JSON.stringify({colorAttachmentFormats:t,depthStencilAttachmentFormat:i}))}}var lB=e.i(45453);class lU{static defaultProps={...lB.Shader.defaultProps};static getDefaultShaderFactory(e){let t=e.getModuleData("@luma.gl/core");return t.defaultShaderFactory||=new lU(e),t.defaultShaderFactory}device;_cache={};get[Symbol.toStringTag](){return"ShaderFactory"}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}constructor(e){this.device=e}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);let t=this._hashShader(e),i=this._cache[t];if(i)i.useCount++,this.device.props.debugFactories&&td.log.log(3,`${this}: Reusing shader ${i.resource.id} count=${i.useCount}`)();else{let r=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[t]=i={resource:r,useCount:1},this.device.props.debugFactories&&td.log.log(3,`${this}: Created new shader ${r.id}`)()}return i.resource}release(e){if(!this.device.props._cacheShaders)return void e.destroy();let t=this._hashShader(e),i=this._cache[t];if(i)if(i.useCount--,0===i.useCount)this.device.props._destroyShaders&&(delete this._cache[t],i.resource.destroy(),this.device.props.debugFactories&&td.log.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else if(i.useCount<0)throw Error(`ShaderFactory: Shader ${e.id} released too many times`);else this.device.props.debugFactories&&td.log.log(3,`${this}: Releasing shader ${e.id} count=${i.useCount}`)()}_hashShader(e){return`${e.stage}:${e.source}`}}var lV=e.i(85251);function l$(e,t){let i=(0,lV.resolveVariableShaderTypeAlias)(e),r=(0,lV.getVariableShaderTypeInfo)(i),n=/^mat(\d)x(\d)<.+>$/.exec(i);if(n){var s,o;let e=Number(n[1]),a=Number(n[2]),l=lH(a,i,r.type,t),c=(s=l.size,o=l.alignment,"std140"===t?4:(0,lg.alignTo)(s,o));return{alignment:l.alignment,size:e*c,components:e*a,columns:e,rows:a,columnStride:c,shaderType:i,type:r.type}}let a=/^vec(\d)<.+>$/.exec(i);return a?lH(Number(a[1]),i,r.type,t):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:i,type:r.type}}function lW(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function lG(e,t){var i;if("string"==typeof e)return l$(e,t).alignment;if(Array.isArray(e)){let i=lG(e[0],t);return lq(t)?Math.max(i,4):i}let r=1;for(let i of Object.values(e))r=Math.max(r,lG(i,t));return"std140"===(i=t)||"wgsl-uniform"===i?Math.max(r,4):r}function lH(e,t,i,r){return{alignment:2===e?2:4,size:3===e?3:e,components:e,columns:1,rows:e,columnStride:3===e?3:e,shaderType:t,type:i}}function lq(e){return"std140"===e||"wgsl-uniform"===e}function lY(e){return Array.isArray(e)?0===e.length||"number"==typeof e[0]:ArrayBuffer.isView(e)&&!(e instanceof DataView)}class lK{name;uniforms={};modifiedUniforms={};modified=!0;bindingLayout={};needsRedraw="initialized";constructor(e){if(this.name=e?.name||"unnamed",e?.name&&e?.shaderLayout){const t=e?.shaderLayout.bindings?.find(t=>"uniform"===t.type&&t.name===e?.name);if(!t)throw Error(e?.name);for(const e of t.uniforms||[])this.bindingLayout[e.name]=e}}setUniforms(e){for(let[t,i]of Object.entries(e))this._setUniform(t,i),this.needsRedraw||this.setNeedsRedraw(`${this.name}.${t}=${i}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,t){!function(e,t,i=16){if(e===t)return!0;if(!lY(e)||!lY(t)||e.length!==t.length)return!1;let r=Math.min(i,128);if(e.length>r)return!1;for(let i=0;i<e.length;++i)if(t[i]!==e[i])return!1;return!0}(this.uniforms[e],t)&&(this.uniforms[e]=lY(t)?t.slice():t,this.modifiedUniforms[e]=!0,this.modified=!0)}}var lZ=e.i(53746);class lX{layout;constructor(e){this.layout=e}has(e){return!!this.layout.fields[e]}get(e){let t=this.layout.fields[e];return t?{offset:t.offset,size:t.size}:void 0}getFlatUniformValues(e){let t={};for(let[i,r]of Object.entries(e)){let e=this.layout.uniformTypes[i];e?this._flattenCompositeValue(t,i,e,r):this.layout.fields[i]&&(t[i]=r)}return t}getData(e){let t=(0,lZ.getScratchArrayBuffer)(this.layout.byteLength);new Uint8Array(t,0,this.layout.byteLength).fill(0);let i={i32:new Int32Array(t),u32:new Uint32Array(t),f32:new Float32Array(t),f16:new Uint16Array(t)};for(let[t,r]of Object.entries(this.getFlatUniformValues(e)))this._writeLeafValue(i,t,r);return new Uint8Array(t,0,this.layout.byteLength)}_flattenCompositeValue(e,t,i,r){if(void 0!==r){var n;if("string"==typeof i||this.layout.fields[t]){e[t]=r;return}if(Array.isArray(i)){let n=i[0],s=i[1];if(Array.isArray(n))throw Error(`Nested arrays are not supported for ${t}`);if("string"==typeof n&&lY(r))return void this._flattenPackedArray(e,t,n,s,r);if(!Array.isArray(r))return void td.log.warn(`Unsupported uniform array value for ${t}:`,r)();for(let i=0;i<Math.min(r.length,s);i++){let s=r[i];void 0!==s&&this._flattenCompositeValue(e,`${t}[${i}]`,n,s)}return}if(lW(i)&&(n=r)&&"object"==typeof n&&!Array.isArray(n)&&!ArrayBuffer.isView(n)){for(let[n,s]of Object.entries(r)){if(void 0===s)continue;let r=`${t}.${n}`;this._flattenCompositeValue(e,r,i[n],s)}return}td.log.warn(`Unsupported uniform value for ${t}:`,r)()}}_flattenPackedArray(e,t,i,r,n){let s=l$(i,this.layout.layout).components;for(let i=0;i<r;i++){var o,a,l;let r=i*s;if(r>=n.length)break;1===s?e[`${t}[${i}]`]=Number(n[r]):e[`${t}[${i}]`]=(o=n,a=r,l=r+s,Array.prototype.slice.call(o,a,l))}}_writeLeafValue(e,t,i){let r=this.layout.fields[t];if(!r)return void td.log.warn(`Uniform ${t} not found in layout`)();let{type:n,components:s,columns:o,rows:a,offset:l,columnStride:c}=r,u=e[n];if(1===s){u[l]=Number(i);return}if(1===o){for(let e=0;e<s;e++)u[l+e]=Number(i[e]??0);return}let h=0;for(let e=0;e<o;e++){let t=l+e*c;for(let e=0;e<a;e++)u[t+e]=Number(i[h++]??0)}}}class lJ{device;uniformBlocks=new Map;shaderBlockLayouts=new Map;shaderBlockWriters=new Map;uniformBuffers=new Map;constructor(e,t){for(const[i,r]of(this.device=e,Object.entries(t))){const t=function(e,t={}){let i={...e},r=t.layout??"std140",n={},s=0;for(let[e,t]of Object.entries(i))s=function e(t,i,r,n,s){if("string"==typeof r){let e=l$(r,s),o=(0,lg.alignTo)(n,e.alignment);return t[i]={offset:o,...e},o+e.size}if(Array.isArray(r)){if(Array.isArray(r[0]))throw Error(`Nested arrays are not supported for ${i}`);let o=r[0],a=r[1],l=function e(t,i){var r,n,s;return r=function t(i,r){if("string"==typeof i)return l$(i,r).size;if(Array.isArray(i)){let t=i[0],n=i[1];if(Array.isArray(t))throw Error("Nested arrays are not supported");return e(t,r)*n}let n=0;for(let e of Object.values(i))n=(0,lg.alignTo)(n,lG(e,r))+t(e,r);return(0,lg.alignTo)(n,lG(i,r))}(t,i),n=lG(t,i),s=i,(0,lg.alignTo)(r,lq(s)?4:n)}(o,s),c=(0,lg.alignTo)(n,lG(r,s));for(let r=0;r<a;r++)e(t,`${i}[${r}]`,o,c+r*l,s);return c+l*a}if(lW(r)){let o=lG(r,s),a=(0,lg.alignTo)(n,o);for(let[n,o]of Object.entries(r))a=e(t,`${i}.${n}`,o,a,s);return(0,lg.alignTo)(a,o)}throw Error(`Unsupported CompositeShaderType for ${i}`)}(n,e,t,s,r);return s=(0,lg.alignTo)(s,lG(i,r)),{layout:r,byteLength:4*s,uniformTypes:i,fields:n}}(r.uniformTypes??{},{layout:r.layout??function(e){return"webgpu"===e.type?"wgsl-uniform":"std140"}(e)}),n=new lX(t);this.shaderBlockLayouts.set(i,t),this.shaderBlockWriters.set(i,n);const s=new lK({name:i});s.setUniforms(n.getFlatUniformValues(r.defaultUniforms||{})),this.uniformBlocks.set(i,s)}}destroy(){for(let e of this.uniformBuffers.values())e.destroy()}setUniforms(e){for(let[t,i]of Object.entries(e)){let e=this.shaderBlockWriters.get(t),r=e?.getFlatUniformValues(i||{});this.uniformBlocks.get(t)?.setUniforms(r||{})}this.updateUniformBuffers()}getUniformBufferByteLength(e){return Math.max(this.shaderBlockLayouts.get(e)?.byteLength||0,1024)}getUniformBufferData(e){let t=this.uniformBlocks.get(e)?.getAllUniforms()||{},i=this.shaderBlockWriters.get(e);return i?.getData(t)||new Uint8Array(0)}createUniformBuffer(e,t){t&&this.setUniforms(t);let i=this.getUniformBufferByteLength(e),r=this.device.createBuffer({usage:aw.Buffer.UNIFORM|aw.Buffer.COPY_DST,byteLength:i}),n=this.getUniformBufferData(e);return r.write(n),r}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){let t=this.getUniformBufferByteLength(e),i=this.device.createBuffer({usage:aw.Buffer.UNIFORM|aw.Buffer.COPY_DST,byteLength:t});this.uniformBuffers.set(e,i)}return this.uniformBuffers.get(e)}updateUniformBuffers(){let e=!1;for(let t of this.uniformBlocks.keys()){let i=this.updateUniformBuffer(t);e||=i}return e&&td.log.log(3,`UniformStore.updateUniformBuffers(): ${e}`)(),e}updateUniformBuffer(e){let t=this.uniformBlocks.get(e),i=this.uniformBuffers.get(e),r=!1;if(i&&t?.needsRedraw){r||=t.needsRedraw;let n=this.getUniformBufferData(e);i=this.uniformBuffers.get(e),i?.write(n);let s=this.uniformBlocks.get(e)?.getAllUniforms();td.log.log(4,`Writing to uniform buffer ${String(e)}`,n,s)()}return r}}var lQ=e.i(65880),l0=e.i(66234),l1=e.i(3311);let l2={};function l3(e="id"){l2[e]=l2[e]||1;let t=l2[e]++;return`${e}-${t}`}class l4{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||l3("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&aw.Buffer.INDEX))throw Error("Index buffer must have INDEX usage")}destroy(){for(let e of(this.indices?.destroy(),Object.values(this.attributes)))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}}let l5="__debugFramebufferState";function l6(e,t){if(!e)return t;let i=Number.parseInt(e,10);return Number.isFinite(i)?i:t}class l8{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return e.attributes?e.attributes?.map(e=>e.attribute):[e.name]}mergeBufferLayouts(e,t){let i=[...e];for(let e of t){let t=i.findIndex(t=>t.name===e.name);t<0?i.push(e):i[t]=e}return i}getBufferIndex(e){let t=this.bufferLayouts.findIndex(t=>t.name===e);return -1===t&&td.log.warn(`BufferLayout: Missing buffer for "${e}".`)(),t}}function l9(e,t){let i=1/0;for(let r of e){let e=t[r];void 0!==e&&(i=Math.min(i,e))}return i}function l7(e,t){if(!e||!t.some(e=>e.bindingLayout?.length))return e;let i={...e,bindings:e.bindings.map(e=>({...e}))};for(let r of("attributes"in(e||{})&&(i.attributes=e?.attributes||[]),t))for(let e of r.bindingLayout||[])for(let t of function(e){let t=new Set([e,`${e}Uniforms`]);return e.endsWith("Uniforms")||t.add(`${e}Sampler`),[...t]}(e.name)){let r=i.bindings.find(e=>e.name===t);r?.group===0&&(r.group=e.group)}return i}class ce{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;constructor(e,t){for(const i of(Object.assign(this.options,t),eA(Object.values(e).filter(cs))))e[i.name]=i;for(const[t,i]of(td.log.log(1,"Creating ShaderInputs with modules",Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={},Object.entries(e)))i&&(this._addModule(i),i.name&&t!==i.name&&!this.options.disableWarnings&&td.log.warn(`Module name: ${t} vs ${i.name}`)())}destroy(){}setProps(e){for(let t of Object.keys(e)){let i=e[t]||{},r=this.modules[t];if(r){let e=this.moduleUniforms[t],n=this.moduleBindings[t],{uniforms:s,bindings:o}=function(e,t={}){let i={bindings:{},uniforms:{}};return Object.keys(e).forEach(r=>{var n,s,o;let a=e[r];Object.prototype.hasOwnProperty.call(t,r)||ArrayBuffer.isView(o=s=n=a)&&!(o instanceof DataView)||Array.isArray(s)&&(0===s.length||"number"==typeof s[0])||"number"==typeof n||"boolean"==typeof n?i.uniforms[r]=a:i.bindings[r]=a}),i}(r.getUniforms?.(i,e)||i,r.uniformTypes);this.moduleUniforms[t]=ct(e,s,r.uniformTypes),this.moduleBindings[t]={...n,...o}}else this.options.disableWarnings||td.log.warn(`Module ${t} not found`)()}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let t of Object.values(this.moduleBindings))Object.assign(e,t);return e}getDebugTable(){let e={};for(let[t,i]of Object.entries(this.moduleUniforms))for(let[r,n]of Object.entries(i))e[`${t}.${r}`]={type:this.modules[t].uniformTypes?.[r],value:String(n)};return e}_addModule(e){let t=e.name;this.moduleUniforms[t]=ct({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[t]={}}}function ct(e={},t={},i={}){let r={...e};for(let[n,s]of Object.entries(t))void 0!==s&&(r[n]=function e(t,i,r){if(!r||"string"==typeof r)return ci(i);if(Array.isArray(r)){if(cr(i)||!Array.isArray(i))return ci(i);let n=Array.isArray(t)&&!cr(t)?[...t]:[],s=n.slice();for(let t=0;t<i.length;t++){let o=i[t];void 0!==o&&(s[t]=e(n[t],o,r[0]))}return s}if(!cn(i))return ci(i);let n=cn(t)?t:{},s={...n};for(let[t,o]of Object.entries(i))void 0!==o&&(s[t]=e(n[t],o,r[t]));return s}(e[n],s,i[n]));return r}function ci(e){return ArrayBuffer.isView(e)?Array.prototype.slice.call(e):Array.isArray(e)?cr(e)?e.slice():e.map(e=>void 0===e?void 0:ci(e)):cn(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,void 0===t?void 0:ci(t)])):e}function cr(e){return ArrayBuffer.isView(e)||Array.isArray(e)&&(0===e.length||"number"==typeof e[0])}function cn(e){return!!e&&"object"==typeof e&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function cs(e){return!!e?.dependencies}var co=e.i(60457);let ca={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function cl(e){return e?Array.isArray(e)?e[0]??null:e:null}function cc(e){if((0,co.isExternalImage)(e))return(0,co.getExternalImageSize)(e);if("object"==typeof e&&"width"in e&&"height"in e)return{width:e.width,height:e.height};throw Error("Unsupported mip-level data")}function cu(e){let{textureFormat:t,format:i}=e;if(t&&i&&t!==i)throw Error(`Conflicting texture formats "${t}" and "${i}" provided for the same mip level`);return t??i}function ch(e){let t=ca[e];if(void 0===t)throw Error(`Invalid cube face: ${e}`);return t}function cd(e){throw Error("setTexture1DData not supported in WebGL.")}function cp(e,t,i,r){let n=Array.isArray(t)?t:[t],s=[];for(let t=0;t<n.length;t++){let o=n[t];if((0,co.isExternalImage)(o))s.push({type:"external-image",image:o,z:e,mipLevel:t});else if("object"==typeof o&&null!==o&&"data"in o&&"width"in o&&"height"in o)s.push({type:"texture-data",data:o,textureFormat:cu(o),z:e,mipLevel:t});else if(ArrayBuffer.isView(o)&&i)s.push({type:"texture-data",data:{data:o,width:Math.max(1,i.width>>t),height:Math.max(1,i.height>>t),...r?{format:r}:{}},textureFormat:r,z:e,mipLevel:t});else throw Error("Unsupported 2D mip-level payload")}return s}function cf(e){let t=[];for(let i=0;i<e.length;i++)t.push(...cp(i,e[i]));return t}function cg(e){let t=[];for(let i=0;i<e.length;i++)t.push(...cp(i,e[i]));return t}function cm(e){let t=[];for(let[i,r]of Object.entries(e)){let e=ch(i);t.push(...cp(e,r))}return t}function cy(e){let t=[];return e.forEach((e,i)=>{for(let[r,n]of Object.entries(e)){let e=6*i+ch(r);t.push(...cp(e,n))}}),t}class cv{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw Error("Texture not initialized yet");return this._texture}get sampler(){if(!this._sampler)throw Error("Sampler not initialized yet");return this._sampler}get view(){if(!this._view)throw Error("View not initialized yet");return this._view}get[Symbol.toStringTag](){return"DynamicTexture"}toString(){let e=this._texture?.width??this.props.width??"?",t=this._texture?.height??this.props.height??"?";return`DynamicTexture:"${this.id}":${e}x${t}px:(${this.isReady?"ready":"loading..."})`}constructor(e,t){this.device=e;const i=l3("dynamic-texture");this.props={...cv.defaultProps,id:i,...t,data:null},this.id=this.props.id,this.ready=new Promise((e,t)=>{this.resolveReady=e,this.rejectReady=t}),this.initAsync(t)}async initAsync(e){try{let t=await this._loadAllData(e);this._checkNotDestroyed();let i=t.data?function(e){if(!e.data)return[];let t=e.width&&e.height?{width:e.width,height:e.height}:void 0,i="format"in e?e.format:void 0;switch(e.dimension){case"1d":return cd(e.data);case"2d":return cp(0,e.data,t,i);case"3d":return cf(e.data);case"2d-array":return cg(e.data);case"cube":return cm(e.data);case"cube-array":return cy(e.data);default:throw Error(`Unhandled dimension ${e.dimension}`)}}({...t,width:e.width,height:e.height,format:e.format}):[],r="format"in e&&void 0!==e.format,n="usage"in e&&void 0!==e.usage,s=(()=>{if(this.props.width&&this.props.height)return{width:this.props.width,height:this.props.height};let e=function(e){let{dimension:t,data:i}=e;if(!i)return null;switch(t){case"1d":{let e=cl(i);if(!e)return null;let{width:t}=cc(e);return{width:t,height:1}}case"2d":{let e=cl(i);return e?cc(e):null}case"3d":case"2d-array":{if(!Array.isArray(i)||0===i.length)return null;let e=cl(i[0]);return e?cc(e):null}case"cube":{let e=Object.keys(i)[0]??null;if(!e)return null;let t=cl(i[e]);return t?cc(t):null}case"cube-array":{if(!Array.isArray(i)||0===i.length)return null;let e=i[0],t=Object.keys(e)[0]??null;if(!t)return null;let r=cl(e[t]);return r?cc(r):null}default:return null}}(t);return e||{width:this.props.width||1,height:this.props.height||1}})();if(!s||s.width<=0||s.height<=0)throw Error(`${this} size could not be determined or was zero`);let o=function(e,t,i,r){if(0===t.length)return{subresources:t,mipLevels:1,format:r.format,hasExplicitMipChain:!1};let n=new Map;for(let e of t){let t=n.get(e.z)??[];t.push(e),n.set(e.z,t)}let s=t.some(e=>e.mipLevel>0),o=r.format,a=1/0,l=[];for(let[t,r]of n){let n=[...r].sort((e,t)=>e.mipLevel-t.mipLevel),s=n[0];if(!s||0!==s.mipLevel)throw Error(`DynamicTexture: slice ${t} is missing mip level 0`);let c=c_(e,s);if(c.width!==i.width||c.height!==i.height)throw Error(`DynamicTexture: slice ${t} base level dimensions ${c.width}x${c.height} do not match expected ${i.width}x${i.height}`);let u=cb(s);if(u){if(o&&o!==u)throw Error(`DynamicTexture: slice ${t} base level format "${u}" does not match texture format "${o}"`);o=u}let h=o&&e.isTextureFormatCompressed(o)?function(e,t,i,r){let{blockWidth:n=1,blockHeight:s=1}=e.getTextureFormatInfo(r),o=1;for(let e=1;;e++){let r=Math.max(1,t>>e),a=Math.max(1,i>>e);if(r<n||a<s)break;o++}return o}(e,c.width,c.height,o):e.getMipLevelCount(c.width,c.height),d=0;for(let t=0;t<n.length;t++){let i=n[t];if(!i||i.mipLevel!==t||t>=h)break;let r=c_(e,i),s=Math.max(1,c.width>>t),a=Math.max(1,c.height>>t);if(r.width!==s||r.height!==a)break;let u=cb(i);if(u&&(o||(o=u),u!==o))break;d++,l.push(i)}a=Math.min(a,d)}let c=Number.isFinite(a)?Math.max(1,a):1;return{subresources:l.filter(e=>e.mipLevel<c),mipLevels:c,format:o,hasExplicitMipChain:s}}(this.device,i,s,{format:r?e.format:void 0}),a=o.format??this.props.format,l={...this.props,...s,format:a,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(a)&&!n&&(l.usage=aP.Texture.SAMPLE|aP.Texture.COPY_DST);let c=this.props.mipmaps&&!o.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(a);if("webgpu"===this.device.type&&c){let e="3d"===this.props.dimension?aP.Texture.SAMPLE|aP.Texture.STORAGE|aP.Texture.COPY_DST|aP.Texture.COPY_SRC:aP.Texture.SAMPLE|aP.Texture.RENDER|aP.Texture.COPY_DST|aP.Texture.COPY_SRC;l.usage|=e}let u=this.device.getMipLevelCount(l.width,l.height),h=o.hasExplicitMipChain?o.mipLevels:"auto"===this.props.mipLevels?u:Math.max(1,Math.min(u,this.props.mipLevels??1)),d={...l,mipLevels:h};this._texture=this.device.createTexture(d),this._sampler=this.texture.sampler,this._view=this.texture.view,o.subresources.length&&this._setTextureSubresources(o.subresources),!this.props.mipmaps||o.hasExplicitMipChain||c||td.log.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),c&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),td.log.info(0,`${this} created`)()}catch(t){let e=t instanceof Error?t:Error(String(t));this.rejectReady(e)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){"webgl"===this.device.type?this.texture.generateMipmapsWebGL():"webgpu"===this.device.type?this.device.generateMipmapsWebGPU(this.texture):td.log.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();let t=e instanceof lI.Sampler?e:this.device.createSampler(e);this.texture.setSampler(t),this._sampler=t}async readBuffer(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,i=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,n=this.texture.computeMemoryLayout({width:t,height:i,depthOrArrayLayers:r}),s=this.device.createBuffer({byteLength:n.byteLength,usage:aw.Buffer.COPY_DST|aw.Buffer.MAP_READ});this.texture.readBuffer({...e,width:t,height:i,depthOrArrayLayers:r},s);let o=this.device.createFence();return await o.signaled,o.destroy(),s}async readAsync(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,i=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,n=this.texture.computeMemoryLayout({width:t,height:i,depthOrArrayLayers:r}),s=await this.readBuffer(e),o=await s.readAsync(0,n.byteLength);return s.destroy(),o.buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;let t=this.texture;return this._texture=t.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,t.destroy(),td.log.info(`${this} resized`),!0}getCubeFaceIndex(e){let t=ca[e];if(void 0===t)throw Error(`Invalid cube face: ${e}`);return t}getCubeArrayFaceIndex(e,t){return 6*e+this.getCubeFaceIndex(t)}setTexture1DData(e){if(this._checkReady(),"1d"!==this.texture.props.dimension)throw Error(`${this} is not 1d`);let t=cd(e);this._setTextureSubresources(t)}setTexture2DData(e,t=0){if(this._checkReady(),"2d"!==this.texture.props.dimension)throw Error(`${this} is not 2d`);let i=cp(t,e);this._setTextureSubresources(i)}setTexture3DData(e){if("3d"!==this.texture.props.dimension)throw Error(`${this} is not 3d`);let t=cf(e);this._setTextureSubresources(t)}setTextureArrayData(e){if("2d-array"!==this.texture.props.dimension)throw Error(`${this} is not 2d-array`);let t=cg(e);this._setTextureSubresources(t)}setTextureCubeData(e){if("cube"!==this.texture.props.dimension)throw Error(`${this} is not cube`);let t=cm(e);this._setTextureSubresources(t)}setTextureCubeArrayData(e){if("cube-array"!==this.texture.props.dimension)throw Error(`${this} is not cube-array`);let t=cy(e);this._setTextureSubresources(t)}_setTextureSubresources(e){for(let t of e){let{z:e,mipLevel:i}=t;switch(t.type){case"external-image":let{image:r,flipY:n}=t;this.texture.copyExternalImage({image:r,z:e,mipLevel:i,flipY:n});break;case"texture-data":let{data:s,textureFormat:o}=t;if(o&&o!==this.texture.format)throw Error(`${this} mip level ${i} uses format "${o}" but texture format is "${this.texture.format}"`);this.texture.writeData(s.data,{x:0,y:0,z:e,width:s.width,height:s.height,depthOrArrayLayers:1,mipLevel:i});break;default:throw Error("Unsupported 2D mip-level payload")}}}async _loadAllData(e){let t=await cx(e.data);return{dimension:e.dimension??"2d",data:t??null}}_checkNotDestroyed(){this.destroyed&&td.log.warn(`${this} already destroyed`)}_checkReady(){this.isReady||td.log.warn(`${this} Cannot perform this operation before ready`)}static defaultProps={...aP.Texture.defaultProps,dimension:"2d",data:null,mipmaps:!1}}function cb(e){if("texture-data"===e.type)return e.textureFormat??cu(e.data)}function c_(e,t){switch(t.type){case"external-image":return e.getExternalImageSize(t.image);case"texture-data":return{width:t.data.width,height:t.data.height};default:throw Error("Unsupported texture subresource")}}async function cx(e){if(Array.isArray(e=await e))return await Promise.all(e.map(cx));if(e&&"object"==typeof e&&e.constructor===Object){let t=e,i=await Promise.all(Object.values(t).map(cx)),r=Object.keys(t),n={};for(let e=0;e<r.length;e++)n[r[e]]=i[e];return n}return e}let cw="render pipeline initialization failed";class cP{static defaultProps={...lj.RenderPipeline.defaultProps,source:void 0,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:tc.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_pipelineNeedsUpdate="newly created";_needsRedraw="initializing";_destroyed=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return"Model"}toString(){return`Model(${this.id})`}constructor(e,t){this.props={...cP.defaultProps,...t},t=this.props,this.id=t.id||l3("model"),this.device=e,Object.assign(this.userData,t.userData),this.material=t.material||null;const i=Object.fromEntries(this.props.modules?.map(e=>[e.name,e])||[]),r=t.shaderInputs||new ce(i,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(r);const n=function(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,features:e.features}}(e),s=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=l7(this.props.shaderLayout,s)||null,"webgpu"===this.device.type&&this.props.source){const{source:t,getUniforms:i,bindingTable:r}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:n,...this.props,modules:s});this.source=t,this._getModuleUniforms=i,this._bindingTable=r;const o=e.getShaderLayout?.(this.source);this.props.shaderLayout=l7(this.props.shaderLayout||o||null,s)||null}else{const{vs:e,fs:t,getUniforms:i}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:n,...this.props,modules:s});this.vs=e,this.fs=t,this._getModuleUniforms=i,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,t.geometry&&this.setGeometry(t.geometry),this.pipelineFactory=t.pipelineFactory||lF.getDefaultPipelineFactory(this.device),this.shaderFactory=t.shaderFactory||lU.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),"isInstanced"in t&&(this.isInstanced=t.isInstanced),t.instanceCount&&this.setInstanceCount(t.instanceCount),t.vertexCount&&this.setVertexCount(t.vertexCount),t.indexBuffer&&this.setIndexBuffer(t.indexBuffer),t.attributes&&this.setAttributes(t.attributes),t.constantAttributes&&this.setConstantAttributes(t.constantAttributes),t.bindings&&this.setBindings(t.bindings),t.transformFeedback&&(this.transformFeedback=t.transformFeedback)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),this._destroyed=!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw("contents of bound textures or buffers updated");let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(e){let t,i=this._areBindingsLoading();if(i)return td.log.info(2,`>>> DRAWING ABORTED ${this.id}: ${i} not loaded`)(),!1;try{e.pushDebugGroup(`${this}.predraw(${e})`),this.predraw()}finally{e.popDebugGroup()}let r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored)td.log.info(2,`>>> DRAWING ABORTED ${this.id}: ${cw}`)(),t=!1;else{let i=this._getBindings(),r=this._getBindGroups(),{indexBuffer:n}=this.vertexArray,s=n?n.byteLength/("uint32"===n.indexType?4:2):void 0;t=this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:s,transformFeedback:this.transformFeedback||void 0,bindings:i,bindGroups:r,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),t?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):r?this._needsRedraw=cw:this._needsRedraw="waiting for resource initialization",t}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&function(e,t){if(t instanceof l4)return t;let i=function(e,t){if(!t.indices)return;let i=t.indices.value;return e.createBuffer({usage:aw.Buffer.INDEX,data:i})}(e,t),{attributes:r,bufferLayout:n}=function(e,t){let i=[],r={};for(let[n,s]of Object.entries(t.attributes)){let t=n;switch(n){case"POSITION":t="positions";break;case"NORMAL":t="normals";break;case"TEXCOORD_0":t="texCoords";break;case"TEXCOORD_1":t="texCoords1";break;case"COLOR_0":t="colors"}if(s){r[t]=e.createBuffer({data:s.value,id:`${n}-buffer`});let{value:o,size:a,normalized:l}=s;if(void 0===a)throw Error(`Attribute ${n} is missing a size`);i.push({name:t,format:l1.vertexFormatDecoder.getVertexFormatFromAttribute(o,a,l)})}}return{attributes:r,bufferLayout:i,vertexCount:t._calculateVertexCount(t.attributes,t.indices)}}(e,t);return new l4({topology:t.topology||"triangle-list",bufferLayout:n,vertexCount:t.vertexCount,indices:i,attributes:r})}(this.device,e);if(t){this.setTopology(t.topology||"triangle-list");let e=new l8(this.bufferLayout);this.bufferLayout=e.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){let t=new l8(this.bufferLayout);this.bufferLayout=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){!function e(t,i,r){if(t===i)return!0;if(!r||!t||!i)return!1;if(Array.isArray(t)){if(!Array.isArray(i)||t.length!==i.length)return!1;for(let n=0;n<t.length;n++)if(!e(t[n],i[n],r-1))return!1;return!0}if(Array.isArray(i))return!1;if("object"==typeof t&&"object"==typeof i){let n=Object.keys(t),s=Object.keys(i);if(n.length!==s.length)return!1;for(let s of n)if(!i.hasOwnProperty(s)||!e(t[s],i[s],r-1))return!1;return!0}return!1}(e,this.parameters,2)&&(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setInstanceCount(e){this.instanceCount=e,void 0===this.isInstanced&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw("instanceCount")}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw("vertexCount")}setShaderInputs(e){for(let[t,i]of(this.shaderInputs=e,this._uniformStore=new lJ(this.device,this.shaderInputs.modules),Object.entries(this.shaderInputs.modules)))if(i.uniformTypes&&!function(e){for(let t in e)return!1;return!0}(i.uniformTypes)&&!this.material?.ownsModule(t)){let e=this._uniformStore.getManagedUniformBuffer(t);this.bindings[`${t}Uniforms`]=e}this.setNeedsRedraw("shaderInputs")}setMaterial(e){this.material=e,this.setNeedsRedraw("material")}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw("shaderInputs")}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw("bindings")}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw("transformFeedback")}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e),this.setNeedsRedraw("indexBuffer")}setAttributes(e,t){var i,r;let n,s,o=t?.disableWarnings??this.props.disableWarnings;e.indices&&td.log.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=(i=this.pipeline.shaderLayout,r=this.bufferLayout,n=Object.fromEntries(i.attributes.map(e=>[e.name,e.location])),(s=r.slice()).sort((e,t)=>{let i=e.attributes?e.attributes.map(e=>e.attribute):[e.name],r=t.attributes?t.attributes.map(e=>e.attribute):[t.name];return l9(i,n)-l9(r,n)}),s);let a=new l8(this.bufferLayout);for(let[t,i]of Object.entries(e)){let e=a.getBufferLayout(t);if(!e){o||td.log.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let r=a.getAttributeNamesForBuffer(e),n=!1;for(let e of r){let t=this._attributeInfos[e];if(t){let e="webgpu"===this.device.type?a.getBufferIndex(t.bufferName):t.location;this.vertexArray.setBuffer(e,i),n=!0}}n||o||td.log.warn(`Model(${this.id}): Ignoring buffer "${i.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw("attributes")}setConstantAttributes(e,t){for(let[i,r]of Object.entries(e)){let e=this._attributeInfos[i];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||td.log.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${i}"`)()}this.setNeedsRedraw("constants")}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(e instanceof cv&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(e instanceof cv&&!e.isReady)return e.id;return!1}_getBindings(){let e={};for(let[t,i]of Object.entries(this.bindings))i instanceof cv?i.isReady&&(e[t]=i.texture):e[t]=i;return e}_getBindGroups(){let e=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},t=e.bindings.length?(0,l0.normalizeBindingsByGroup)(e,this._getBindings()):{0:this._getBindings()};if(!this.material)return t;for(let[e,i]of Object.entries(this.material.getBindingsByGroup())){let r=Number(e);t[r]={...t[r]||{},...i}}return t}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let t of Object.values(this.bindings))t instanceof lO.TextureView?e=Math.max(e,t.texture.updateTimestamp):t instanceof aw.Buffer||t instanceof aP.Texture?e=Math.max(e,t.updateTimestamp):t instanceof cv?e=t.texture?Math.max(e,t.texture.updateTimestamp):1/0:t instanceof lI.Sampler||(e=Math.max(e,t.buffer.updateTimestamp));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))this.pipeline.shaderLayout.attributes.find(t=>t.name===e)||"positions"===e||delete t[e];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw("geometry attributes")}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(td.log.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let i=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:"vertex",source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=i:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"fragment",source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:i,fs:r}),this._attributeInfos=(0,lQ.getAttributeInfosFromLayouts)(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=td.log.level>3?0:1e4;td.log.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,td.log.group(2,`>>> DRAWING MODEL ${this.id}`,{collapsed:td.log.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=function(e,t){let i={},r="Values";if(0===e.attributes.length&&!e.varyings?.length)return{"No attributes or varyings":{[r]:"N/A"}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;i[`in ${e}`]={[r]:t.stepMode||"vertex"}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;i[`out ${e}`]={[r]:JSON.stringify(t)}}return i}(this.pipeline.shaderLayout,this.id);td.log.table(2,e)();let t=this.shaderInputs.getDebugTable();td.log.table(2,t)();let i=this._getAttributeDebugTable();td.log.table(2,this._attributeInfos)(),td.log.table(2,i)(),td.log.groupEnd(2)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let i=e.props.framebuffer;!function(e,t,i){var r;if("webgl"!==e.device.type)return;let n=(r=e.device,r.userData[l5]||={flushing:!1,queuedFramebuffers:[]},r.userData[l5]);if(!n.flushing){let r;if(!(r=e.props.framebuffer)||null===r.handle)return function(e,t,i){if(0===i.queuedFramebuffers.length)return;let{gl:r}=e.device,n=r.getParameter(36010),s=r.getParameter(36006),[o,a]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),l=l6(t.top,8),c=l6(t.left,8);i.flushing=!0;try{for(let e of i.queuedFramebuffers){let[i,n,s,u,h]=function(e){let{framebuffer:t,targetWidth:i,targetHeight:r,topPx:n,leftPx:s,minimap:o}=e,a=o?Math.max(Math.floor(i/4),1):i,l=o?Math.max(Math.floor(r/4),1):r,c=Math.min(a/t.width,l/t.height),u=Math.max(Math.floor(t.width*c),1),h=Math.max(Math.floor(t.height*c),1),d=Math.max(r-n-h,0);return[s,d,s+u,d+h,h]}({framebuffer:e,targetWidth:o,targetHeight:a,topPx:l,leftPx:c,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,i,n,s,u,16384,9728),l+=h+8}}finally{r.bindFramebuffer(36008,n),r.bindFramebuffer(36009,s),i.flushing=!1}}(e,i,n);t&&"colorAttachments"in t&&null!==t.handle&&!n.queuedFramebuffers.includes(t)&&n.queuedFramebuffers.push(t)}}(e,i,{id:i?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,i]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[i.location];e[i.location]={name:t,type:i.shaderType,values:r?this._getBufferOrConstantValues(r,i.bufferDataType):"null"}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,i="uint32"===t.indexType?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:"indices",type:t.indexType,values:i.toString()}}return e}_getBufferOrConstantValues(e,t){let i=lf.dataTypeDecoder.getTypedArrayConstructor(t);return(e instanceof aw.Buffer?new i(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[i,r]of Object.entries(e))this.material.ownsBinding(i)||(t[i]=r);return t}}class cC{device;model;transformFeedback;static defaultProps={...cP.defaultProps,outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type==="webgl"}constructor(e,t=cC.defaultProps){if(!cC.isSupported(e))throw Error("BufferTransform not yet implemented on WebGPU");this.device=e,this.model=new cP(this.device,{id:t.id||"buffer-transform-model",fs:t.fs||function(){let{input:e,inputChannels:t,output:i}={};if(!e)return lR;if(!t)throw Error("inputChannels");let r=function(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw Error(`invalid channels: ${e}`)}}(t),n=function(e,t){switch(t){case 1:return`vec4(${e}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${e}, 0.0, 1.0)`;case 3:return`vec4(${e}, 1.0)`;case 4:return e;default:throw Error(`invalid channels: ${t}`)}}(e,t);return`\
#version 300 es
in ${r} ${e};
out vec4 ${i};
void main() {
  ${i} = ${n};
}`}(),topology:t.topology||"point-list",varyings:t.outputs||t.varyings,...t}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:t.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback),Object.seal(this)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let t=this.device.beginRenderPass(e);this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let t=this.getBuffer(e);if(!t)throw Error("BufferTransform#getBuffer");if(t instanceof aw.Buffer)return t.readAsync();let{buffer:i,byteOffset:r=0,byteLength:n=i.byteLength}=t;return i.readAsync(r,n)}}function cS(e,t=[],i=0){let r=Math.fround(e),n=e-r;return t[i]=r,t[i+1]=n,t}let cM=`\

layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,cE={name:"fp64arithmetic",source:`\
struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}

fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}

fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
`,fs:cM,vs:cM,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:"f32",SPLIT:"f32"},fp64ify:cS,fp64LowPart:function(e){return e-Math.fround(e)},fp64ifyMatrix4:function(e){let t=new Float32Array(32);for(let i=0;i<4;++i)for(let r=0;r<4;++r){let n=4*i+r;cS(e[4*r+i],t,2*n)}return t}};function cL(e){let{source:t,target:i,start:r=0,size:n,getData:s}=e,o=e.end||i.length,a=t.length,l=o-r;if(a>l)return void i.set(t.subarray(0,l),r);if(i.set(t,r),!s)return;let c=a;for(;c<l;){let e=s(c,t);for(let t=0;t<n;t++)i[r+c]=e[t]||0,c++}}function cA(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";default:throw Error(`No defined attribute type for size "${e}"`)}}function cT(e){switch(e){case 1:return"float32";case 2:return"float32x2";case 3:return"float32x3";case 4:return"float32x4";default:throw Error("invalid type size")}}function ck(e){e.push(e.shift())}function cR({device:e,source:t,target:i}){return(!i||i.byteLength<t.byteLength)&&(i?.destroy(),i=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),i}function cO({device:e,buffer:t,attribute:i,fromLength:r,toLength:n,fromStartIndices:s,getData:o=e=>e}){let a=i.doublePrecision&&i.value instanceof Float64Array?2:1,l=i.size*a,c=i.byteOffset,u=i.settings.bytesPerElement<4?c/i.settings.bytesPerElement*4:c,h=i.startIndices,d=s&&h,p=i.isConstant;if(!d&&t&&r>=n)return t;let f=i.value instanceof Float64Array?Float32Array:i.value.constructor,g=p?i.value:new f(i.getBuffer().readSyncWebGL(c,n*f.BYTES_PER_ELEMENT).buffer);if(i.settings.normalized&&!p){let e=o;o=(t,r)=>i.normalizeConstant(e(t,r))}let m=p?(e,t)=>o(g,t):(e,t)=>o(g.subarray(e+c,e+c+l),t),y=new Float32Array(t?t.readSyncWebGL(u,4*r).buffer:0),v=new Float32Array(n);return!function({source:e,target:t,size:i,getData:r,sourceStartIndices:n,targetStartIndices:s}){if(!n||!s)return cL({source:e,target:t,size:i,getData:r});let o=0,a=0,l=r&&((e,t)=>r(e+a,t)),c=Math.min(n.length,s.length);for(let r=1;r<c;r++){let c=n[r]*i,u=s[r]*i;cL({source:e.subarray(o,c),target:t,start:a,end:u,size:i,getData:l}),o=c,a=u}a<t.length&&cL({source:[],target:t,start:a,size:i,getData:l})}({source:y,target:v,sourceStartIndices:s,targetStartIndices:h,size:l,getData:m}),(!t||t.byteLength<v.byteLength+u)&&(t?.destroy(),t=e.createBuffer({byteLength:v.byteLength+u,usage:35050})),t.write(v,u),t}class cI{constructor({device:e,attribute:t,timeline:i}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new oR(i),this.attribute=t,this.attributeInTransition=function(e){let{device:t,settings:i,value:r}=e,n=new lT(t,i);return n.setData({value:r instanceof Float64Array?new Float64Array(0):new Float32Array(0),normalized:i.normalized}),n}(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,i=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=function(e,t){let{doublePrecision:i,settings:r,value:n,size:s}=e,o=i&&n instanceof Float64Array?2:1,a=0,{shaderAttributes:l}=e.settings;if(l)for(let e of Object.values(l))a=Math.max(a,e.vertexOffset??0);return(r.noAlloc?n.length:(t+a)*s)*o}(this.attribute,t),this.transition.start({...e,duration:i})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value})}cancel(){this.transition.cancel()}delete(){for(let e of(this.cancel(),this.buffers))e.destroy();this.buffers.length=0}}let cj={name:"interpolation",vs:`\
layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:"f32"}},cz=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,cD=`\
#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function cN(e){return e.doublePrecision&&e.value instanceof Float64Array}let cF={name:"spring",vs:`\
layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:"f32",stiffness:"f32"}},cB=`\
#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,cU=`\
#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`,cV={interpolation:class extends cI{constructor({device:e,attribute:t,timeline:i}){super({device:e,attribute:t,timeline:i}),this.type="interpolation",this.transform=function(e,t){let i=t.size,r=cA(i),n=cT(i),s=t.getBufferLayout();return cN(t)?new cC(e,{vs:cD,bufferLayout:[{name:"aFrom",byteStride:8*i,attributes:[{attribute:"aFrom",format:n,byteOffset:0},{attribute:"aFrom64Low",format:n,byteOffset:4*i}]},{name:"aTo",byteStride:8*i,attributes:[{attribute:"aTo",format:n,byteOffset:0},{attribute:"aTo64Low",format:n,byteOffset:4*i}]}],modules:[cE,cj],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:i},moduleSettings:{},varyings:["vCurrent","vCurrent64Low"],bufferMode:35980,disableWarnings:!0}):new cC(e,{vs:cz,bufferLayout:[{name:"aFrom",format:n},{name:"aTo",format:s.attributes[0].format}],modules:[cj],defines:{ATTRIBUTE_TYPE:r},varyings:["vCurrent"],disableWarnings:!0})}(e,t)}start(e,t){let i=this.currentLength,r=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0)return void this.transition.cancel();let{buffers:n,attribute:s}=this;ck(n),n[0]=cO({device:this.device,buffer:n[0],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:r,getData:e.enter}),n[1]=cR({device:this.device,source:n[0],target:n[1]}),this.setBuffer(n[1]);let{transform:o}=this,a=o.model,l=Math.floor(this.currentLength/s.size);cN(s)&&(l/=2),a.setVertexCount(l),s.isConstant?(a.setAttributes({aFrom:n[0]}),a.setConstantAttributes({aTo:s.value})):a.setAttributes({aFrom:n[0],aTo:s.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:n[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:i}=this.transition,r=i/e;t&&(r=t(r));let{model:n}=this.transform,s={time:r};n.shaderInputs.setProps({interpolation:s}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}},spring:class extends cI{constructor({device:e,attribute:t,timeline:i}){super({device:e,attribute:t,timeline:i}),this.type="spring",this.texture=function(e){return e.createTexture({data:new Uint8Array(4),format:"rgba8unorm",width:1,height:1})}(e),this.framebuffer=function(e,t){return e.createFramebuffer({id:"spring-transition-is-transitioning-framebuffer",width:1,height:1,colorAttachments:[t]})}(e,this.texture),this.transform=function(e,t){let i=cA(t.size),r=cT(t.size);return new cC(e,{vs:cB,fs:cU,bufferLayout:[{name:"aPrev",format:r},{name:"aCur",format:r},{name:"aTo",format:t.getBufferLayout().attributes[0].format}],varyings:["vNext"],modules:[cF],defines:{ATTRIBUTE_TYPE:i},parameters:{depthCompare:"always",blendColorOperation:"max",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"max",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one"}})}(e,t)}start(e,t){let i=this.currentLength,r=this.currentStartIndices;super.start(e,t);let{buffers:n,attribute:s}=this;for(let t=0;t<2;t++)n[t]=cO({device:this.device,buffer:n[t],attribute:s,fromLength:i,toLength:this.currentLength,fromStartIndices:r,getData:e.enter});n[2]=cR({device:this.device,source:n[0],target:n[2]}),this.setBuffer(n[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/s.size)),s.isConstant?o.setConstantAttributes({aTo:s.value}):o.setAttributes({aTo:s.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:i,transition:r}=this,n=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let s={stiffness:n.stiffness,damping:n.damping};t.model.shaderInputs.setProps({spring:s}),t.run({framebuffer:i,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),ck(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(i)[0]>0||r.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}}};class c${constructor(e,{id:t,timeline:i}){if(!e)throw Error("AttributeTransitionManager is constructed without device");this.id=t,this.device=e,this.timeline=i,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:i}){for(let r in this.numInstances=i||1,e){let i=e[r],n=i.getTransitionSetting(t);n&&this._updateAttribute(r,i,n)}for(let i in this.transitions){let r=e[i];r&&r.getTransitionSetting(t)||this._removeTransition(i)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let i=this.transitions[t];i.inProgress&&(e[t]=i.attributeInTransition)}return e}run(){if(0===this.numInstances)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,i){let r=this.transitions[e],n=!r||r.type!==i.type;if(n){r&&this._removeTransition(e);let s=cV[i.type];s?this.transitions[e]=new s({attribute:t,timeline:this.timeline,device:this.device}):(ir.error(`unsupported transition type '${i.type}'`)(),n=!1)}(n||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(i,this.numInstances))}}let cW="attributeManager.invalidate";class cG{constructor(e,{id:t="attribute-manager",stats:i,timeline:r}={}){this.mergeBoundsMemoized=i5(od),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=i,this.attributeTransitionManager=new c$(e,{id:`${t}-transitions`,timeline:r}),Object.seal(this)}finalize(){for(let e in this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:"instance"})}remove(e){for(let t of e)void 0!==this.attributes[t]&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let i=this._invalidateTrigger(e,t);nU(cW,this,e,i)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);nU(cW,this,"all")}update({data:e,numInstances:t,startIndices:i=null,transitions:r,props:n={},buffers:s={},context:o={}}){let a=!1;for(let r in nU("attributeManager.updateStart",this),this.stats&&this.stats.get("Update Attributes").timeStart(),this.attributes){let l=this.attributes[r],c=l.settings.accessor;l.startIndices=i,l.numInstances=t,n[r]&&ir.removed(`props.${r}`,`data.attributes.${r}`)(),l.setExternalBuffer(s[r])||l.setBinaryValue("string"==typeof c?s[c]:void 0,e.startIndices)||"string"==typeof c&&!s[c]&&l.setConstantValue(o,n[c])||l.needsUpdate()&&(a=!0,this._updateAttribute({attribute:l,numInstances:t,data:e,props:n,context:o})),this.needsRedraw=this.needsRedraw||l.needsRedraw()}a&&nU("attributeManager.updateEnd",this,t),this.stats&&(this.stats.get("Update Attributes").timeEnd(),a&&this.stats.get("Attributes updated").incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:r})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:i}=this,r={...i.getAttributes()};for(let n in t){let s=t[n];s.needsRedraw(e)&&!i.hasAttribute(n)&&(r[n]=s)}return r}getBufferLayouts(e){return Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}_add(e,t){for(let i in e){let r=e[i],n={...r,id:i,size:r.isIndexed&&1||r.size||1,...t};this.attributes[i]=new lT(this.device,n)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(i=>{e[i]||(e[i]=[]),e[i].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:i,updateTriggers:r}=this,n=r[e];return n&&n.forEach(e=>{let r=i[e];r&&r.setNeedsUpdate(r.id,t)}),n}_updateAttribute(e){let{attribute:t,numInstances:i}=e;(nU("attribute.updateStart",t),t.constant)?t.setConstantValue(e.context,t.value):(t.allocate(i)&&nU("attribute.allocate",t,i),t.updateBuffer(e)&&(this.needsRedraw=!0,nU("attribute.updateEnd",t,i)))}}function cH(e,t,i,r,n){let s=t-e;return(i-t)*n+-s*r+s+t}function cq(e,t){if(Array.isArray(e)){let i=0;for(let r=0;r<e.length;r++){let n=e[r]-t[r];i+=n*n}return Math.sqrt(i)}return Math.abs(e-t)}let cY={interpolation:class extends oR{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:i,duration:r,easing:n}}=this,s=n(e/r);this._value=rb(t,i,s)}},spring:class extends oR{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:i,stiffness:r}=this.settings,{_prevValue:n=e,_currValue:s=e}=this,o=function(e,t,i,r,n){if(Array.isArray(i)){let s=[];for(let o=0;o<i.length;o++)s[o]=cH(e[o],t[o],i[o],r,n);return s}return cH(e,t,i,r,n)}(n,s,t,i,r),a=cq(o,t),l=cq(o,s);a<1e-5&&l<1e-5&&(o=t,this.end()),this._prevValue=s,this._currValue=o}}};class cK{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,i,r){let{transitions:n}=this;if(n.has(e)){let i=n.get(e),{value:r=i.settings.fromValue}=i;t=r,this.remove(e)}if(!(r=lA(r)))return;let s=cY[r.type];if(!s)return void ir.error(`unsupported transition type '${r.type}'`)();let o=new s(this.timeline);o.start({...r,fromValue:t,toValue:i}),n.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,i]of this.transitions)i.update(),e[t]=i.value,i.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}}function cZ({newProps:e,oldProps:t,ignoreProps:i={},propTypes:r={},triggerName:n="props"}){if(t===e)return!1;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return`${n} changed shallowly`;for(let s of Object.keys(e))if(!(s in i)){if(!(s in t))return`${n}.${s} added`;let i=cX(e[s],t[s],r[s]);if(i)return`${n}.${s} ${i}`}for(let s of Object.keys(t))if(!(s in i)){if(!(s in e))return`${n}.${s} dropped`;if(!Object.hasOwnProperty.call(e,s)){let i=cX(e[s],t[s],r[s]);if(i)return`${n}.${s} ${i}`}}return!1}function cX(e,t,i){let r=i&&i.equal;return r&&!r(e,t,i)||!r&&(r=e&&t&&e.equals)&&!r.call(e,t)?"changed deeply":r||t===e?null:"changed shallowly"}function cJ(e,t,i){let r=e.updateTriggers[i];r=null==r?{}:r;let n=t.updateTriggers[i];return cZ({oldProps:n=null==n?{}:n,newProps:r,triggerName:i})}function cQ(e,t){if(!t)return e;let i={...e,...t};if("defines"in t&&(i.defines={...e.defines,...t.defines}),"modules"in t&&(i.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>"project64"===e.name))){let e=i.modules.findIndex(e=>"project32"===e.name);e>=0&&i.modules.splice(e,1)}if("inject"in t)if(e.inject){let r={...e.inject};for(let e in t.inject)r[e]=(r[e]||"")+t.inject[e];i.inject=r}else i.inject=t.inject;return i}var ni=ni,it=it;let c0=[0,0,0];function c1(e,t,i=!1){let r=t.projectPosition(e);if(i&&t instanceof ok){let[i,n,s=0]=e,o=t.getDistanceScales([i,n]);r[2]=s*o.unitsPerMeter[2]}return r}function c2(e,{viewport:t,modelMatrix:i,coordinateSystem:r,coordinateOrigin:n,offsetMode:s}){let[o,a,l=0]=e;switch(i&&([o,a,l]=it.transformMat4([],[o,a,l,1],i)),r){case"default":return c2(e,{viewport:t,modelMatrix:i,coordinateSystem:t.isGeospatial?"lnglat":"cartesian",coordinateOrigin:n,offsetMode:s});case"lnglat":return c1([o,a,l],t,s);case"lnglat-offsets":return c1([o+n[0],a+n[1],l+(n[2]||0)],t,s);case"meter-offsets":return c1(nd(n,[o,a,l]),t,s);case"cartesian":return t.isGeospatial?[o+n[0],a+n[1],l+n[2]]:t.projectPosition([o,a,l]);default:throw Error(`Invalid coordinateSystem: ${r}`)}}let c3={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},c4={},c5={boolean:{validate:(e,t)=>!0,equal:(e,t,i)=>!!e==!!t},number:{validate:(e,t)=>Number.isFinite(e)&&(!("max"in t)||e<=t.max)&&(!("min"in t)||e>=t.min)},color:{validate:(e,t)=>t.optional&&!e||c8(e)&&(3===e.length||4===e.length),equal:(e,t,i)=>o_(e,t,1)},accessor:{validate(e,t){let i=c9(e);return"function"===i||i===c9(t.value)},equal:(e,t,i)=>"function"==typeof t||o_(e,t,1)},array:{validate:(e,t)=>t.optional&&!e||c8(e),equal(e,t,i){let{compare:r}=i,n=Number.isInteger(r)?r:+!!r;return r?o_(e,t,n):e===t}},object:{equal(e,t,i){if(i.ignore)return!0;let{compare:r}=i,n=Number.isInteger(r)?r:+!!r;return r?o_(e,t,n):e===t}},function:{validate:(e,t)=>t.optional&&!e||"function"==typeof e,equal:(e,t,i)=>!i.compare&&!1!==i.ignore||e===t},data:{transform:(e,t,i)=>{if(!e)return e;let{dataTransform:r}=i.props;return r?r(e):"string"==typeof e.shape&&e.shape.endsWith("-table")&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,i)=>{let r=i.context;return r&&r.device?function(e,t,i,r){if(i instanceof aP.Texture)return i;i.constructor&&"Object"!==i.constructor.name&&(i={data:i});let n=null;i.compressed&&(n={minFilter:"linear",mipmapFilter:i.data.length>1?"nearest":"linear"});let{width:s,height:o}=i.data,a=t.createTexture({...i,sampler:{...c3,...n,...r},mipLevels:t.getMipLevelCount(s,o)});return"webgl"===t.type?a.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(a),c4[a.id]=e,a}(i.id,r.device,e,{...t.parameters,...i.props.textureParameters}):null},release:(e,t,i)=>{var r;r=i.id,e&&e instanceof aP.Texture&&c4[e.id]===r&&(e.delete(),delete c4[e.id])}}};function c6(e,t){return"type"in t?{name:e,...c5[t.type],...t}:"value"in t?{name:e,type:c9(t.value),...t}:{name:e,type:"object",value:t}}function c8(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function c9(e){return c8(e)?"array":null===e?"null":typeof e}function c7(e,t){return Object.prototype.hasOwnProperty.call(e,t)}let ue=0;class ut{constructor(...e){this.props=function(e,t){let i;for(let e=t.length-1;e>=0;e--){let r=t[e];"extensions"in r&&(i=r.extensions)}let r=Object.create(function e(t,i){var r,n;if(!(t instanceof ui.constructor))return{};let s="_mergedDefaultProps";if(i)for(let e of i){let t=e.constructor;t&&(s+=`:${t.extensionName||t.name}`)}let o=c7(r=t,n=s)&&r[n];return o||(t[s]=function(t,i){var r;let n;if(!t.prototype)return null;let s=e(Object.getPrototypeOf(t)),o=function(e){let t={},i={},r={};for(let[n,s]of Object.entries(e)){let e=s?.deprecatedFor;if(e)r[n]=Array.isArray(e)?e:[e];else{let e=function(e,t){switch(c9(t)){case"object":return c6(e,t);case"array":return c6(e,{type:"array",value:t,compare:!1});case"boolean":return c6(e,{type:"boolean",value:t});case"number":return c6(e,{type:"number",value:t});case"function":return c6(e,{type:"function",value:t,compare:!0});default:return{name:e,type:"unknown",value:t}}}(n,s);t[n]=e,i[n]=e.value}}return{propTypes:t,defaultProps:i,deprecatedProps:r}}(function(e,t){return c7(e,t)&&e[t]}(t,"defaultProps")||{}),a=Object.assign(Object.create(null),s,o.defaultProps),l=Object.assign(Object.create(null),s?.[nI],o.propTypes),c=Object.assign(Object.create(null),s?.[nj],o.deprecatedProps);for(let t of i){let i=e(t.constructor);i&&(Object.assign(a,i),Object.assign(l,i[nI]),Object.assign(c,i[nj]))}return Object.defineProperties(a,{id:{writable:!0,value:((n=(r=t).componentName)||ir.warn(`${r.name}.componentName not specified`)(),n||r.name)}}),function(e,t){let i={},r={};for(let e in t){let n=t[e],{name:s,value:o}=n;n.async&&(i[s]=o,r[s]=function(e){return{enumerable:!0,set(t){"string"==typeof t||t instanceof Promise||lC(t)?this[nD][e]=t:this[nN][e]=t},get(){if(this[nN]){if(e in this[nN])return this[nN][e]||this[nz][e];if(e in this[nD]){let t=this[nO]&&this[nO].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[nz][e]}}return this[nz][e]}}}(s))}e[nz]=i,e[nD]={},Object.defineProperties(e,r)}(a,l),function(e,t){for(let i in t)Object.defineProperty(e,i,{enumerable:!1,set(e){let r=`${this.id}: ${i}`;for(let r of t[i])c7(this,r)||(this[r]=e);ir.deprecated(r,t[i].join("/"))()}})}(a,c),a[nI]=l,a[nj]=c,0!==i.length||c7(t,"_propTypes")||(t._propTypes=l),a}(t,i||[]))}(e.constructor,i));r[nO]=e,r[nD]={},r[nN]={};for(let e=0;e<t.length;++e){let i=t[e];for(let e in i)r[e]=i[e]}return Object.freeze(r),r}(this,e),this.id=this.props.id,this.count=ue++}clone(e){let{props:t}=this,i={};for(let e in t[nz])e in t[nN]?i[e]=t[nN][e]:e in t[nD]&&(i[e]=t[nD][e]);return new this.constructor({...t,...i,...e})}}ut.componentName="Component",ut.defaultProps={};let ui=ut,ur=Object.freeze({});class un{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||ur}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[nO]||this.component;let t=e[nN]||{},i=e[nD]||e,r=e[nz]||{};for(let e in t){let i=t[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,i),t[e]=this.getAsyncProp(e)}for(let e in i){let t=i[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if("string"==typeof t&&(t=this._fetch(e,t)),t instanceof Promise)return void this._watchPromise(e,t);if(lC(t))return void this._resolveAsyncIterable(e,t);this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps)for(let e in this.oldAsyncProps=Object.create(this.oldProps),this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}_didAsyncInputValueChange(e,t){let i=this.asyncProps[e];return t!==i.resolvedValue&&t!==i.lastValue&&(i.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let i=this.asyncProps[e];i&&(t=this._postProcessValue(i,t),i.resolvedValue=t,i.pendingLoadCount++,i.resolvedLoadCount=i.pendingLoadCount)}_setAsyncPropValue(e,t,i){let r=this.asyncProps[e];r&&i>=r.resolvedLoadCount&&void 0!==t&&(this._freezeAsyncOldProps(),r.resolvedValue=t,r.resolvedLoadCount=i,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let i=this.asyncProps[e];if(i){i.pendingLoadCount++;let r=i.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(i,t),this._setAsyncPropValue(e,t,r),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if("data"!==e)return void this._setPropValue(e,t);let i=this.asyncProps[e];if(!i)return;i.pendingLoadCount++;let r=i.pendingLoadCount,n=[],s=0;for await(let i of t){if(!this.component)return;let{dataTransform:t}=this.component.props;Object.defineProperty(n=t?t(i,n):n.concat(i),"__diff",{enumerable:!1,value:[{startRow:s,endRow:n.length}]}),s=n.length,this._setAsyncPropValue(e,n,r)}this._onResolve(e,n)}_postProcessValue(e,t){let i=e.type;return i&&this.component&&(i.release&&i.release(e.resolvedValue,i,this.component),i.transform)?i.transform(t,i,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let i=this.component&&this.component.props[nI];this.asyncProps[e]={type:i&&i[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}}class us extends un{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1}get layer(){return this.component}_fetch(e,t){let i=this.layer,r=i?.props.fetch;return r?r(t,{propName:e,layer:i}):super._fetch(e,t)}_onResolve(e,t){let i=this.layer;if(i){let r=i.props.onDataLoad;"data"===e&&r&&r(t,{propName:e,layer:i})}}_onError(e,t){let i=this.layer;i&&i.raiseError(t,`loading ${e} of ${this.layer}`)}}let uo=Object.freeze([]),ua=i5(({oldViewport:e,viewport:t})=>e.equals(t)),ul=new Uint8ClampedArray(0),uc={data:{type:"data",value:uo,async:!0},dataComparator:{type:"function",value:null,optional:!0},_dataDiff:{type:"function",value:e=>e&&e.__diff,optional:!0},dataTransform:{type:"function",value:null,optional:!0},onDataLoad:{type:"function",value:null,optional:!0},onError:{type:"function",value:null,optional:!0},fetch:{type:"function",value:(e,{propName:t,layer:i,loaders:r,loadOptions:n,signal:s})=>{let{resourceManager:o}=i.context;n=n||i.getLoadOptions(),r=r||i.props.loaders,s&&(n={...n,core:{...n?.core,fetch:{...n?.core?.fetch,signal:s}}});let a=o.contains(e);return(a||n||(o.add({resourceId:e,data:or(e,r),persistent:!1}),a=!0),a)?o.subscribe({resourceId:e,onChange:e=>i.internalState?.reloadAsyncProp(t,e),consumerId:i.id,requestId:t}):or(e,r,n)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:"number",min:0,max:1,value:1},operation:"draw",onHover:{type:"function",value:null,optional:!0},onClick:{type:"function",value:null,optional:!0},onDragStart:{type:"function",value:null,optional:!0},onDrag:{type:"function",value:null,optional:!0},onDragEnd:{type:"function",value:null,optional:!0},coordinateSystem:"default",coordinateOrigin:{type:"array",value:[0,0,0],compare:!0},modelMatrix:{type:"array",value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:"XYZ",colorFormat:"RGBA",parameters:{type:"object",value:{},optional:!0,compare:2},loadOptions:{type:"object",value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:"array",value:[],optional:!0,ignore:!0},getPolygonOffset:{type:"function",value:({layerIndex:e})=>[0,-(100*e)]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:"accessor",value:[0,0,128,128]}};class uu extends ui{constructor(){super(...arguments),this.internalState=null,this.lifecycle="Awaiting state",this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,"layerName")?this.layerName:""}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){let e=this.constructor.layerName||this.constructor.name;return`${e}({id: '${this.props.id}'})`}project(e){oz(this.internalState);let t=this.internalState.viewport||this.context.viewport,[i,r,n]=ng(c2(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),t.pixelProjectionMatrix);return 2===e.length?[i,r]:[i,r,n]}unproject(e){return oz(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return oz(this.internalState),function(e,t){let{viewport:i,coordinateSystem:r,coordinateOrigin:n,modelMatrix:s,fromCoordinateSystem:o,fromCoordinateOrigin:a}=function(e){let{viewport:t,modelMatrix:i,coordinateOrigin:r}=e,{coordinateSystem:n,fromCoordinateSystem:s,fromCoordinateOrigin:o}=e;return"default"===n&&(n=t.isGeospatial?"lnglat":"cartesian"),void 0===s?s=n:"default"===s&&(s=t.isGeospatial?"lnglat":"cartesian"),void 0===o&&(o=r),{viewport:t,coordinateSystem:n,coordinateOrigin:r,modelMatrix:i,fromCoordinateSystem:s,fromCoordinateOrigin:o}}(t),{autoOffset:l=!0}=t,{geospatialOrigin:c=c0,shaderCoordinateOrigin:u=c0,offsetMode:h=!1}=l?rn(i,r,n):{},d=c2(e,{viewport:i,modelMatrix:s,coordinateSystem:o,coordinateOrigin:a,offsetMode:h});if(h){let e=i.projectPosition(c||u);ni.sub(d,d,e)}return d}(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return!!this.internalState&&!this.internalState.isAsyncPropLoading()}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return"default"===e||"lnglat"===e||"cartesian"===e}onHover(e,t){return!!this.props.onHover&&(this.props.onHover(e,t)||!1)}onClick(e,t){return!!this.props.onClick&&(this.props.onClick(e,t)||!1)}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){oz(e instanceof Uint8Array);let[t,i,r]=e;return t+256*i+65536*r-1}getNumInstances(){if(Number.isFinite(this.props.numInstances))return this.props.numInstances;if(this.state&&void 0!==this.state.numInstances)return this.state.numInstances;var e,t,i=this.props.data;if(null===(e=i)||"object"!=typeof e)throw Error("count(): argument not an object");if("function"==typeof i.count)return i.count();if(Number.isFinite(i.size))return i.size;if(Number.isFinite(i.length))return i.length;if(null!==(t=i)&&"object"==typeof t&&t.constructor===Object)return Object.keys(i).length;throw Error("count(): argument not a container")}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds(["positions","instancePositions"])}getShaders(e){for(let t of(e=cQ(e,{disableWarnings:!0,modules:this.context.defaultShaderModules}),this.props.extensions))e=cQ(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:i}=e.changeFlags;if(i&&t)if(Array.isArray(i))for(let e of i)t.invalidateAll(e);else t.invalidateAll();if(t){let{props:i}=e,r=this.internalState.hasPickingBuffer,n=Number.isInteger(i.highlightedObjectIndex)||!!i.pickable||i.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(r!==n){this.internalState.hasPickingBuffer=n;let{pickingColors:e,instancePickingColors:i}=t.attributes,r=e||i;r&&(n&&r.constant&&(r.constant=!1,t.invalidate(r.id)),r.value||n||(r.constant=!0,r.value=[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:i}){let{index:r}=e;return r>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[r]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return!!this.internalState&&(this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()))}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,t&&ua({oldViewport:t,viewport:e})||(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e="all"){let t=this.getAttributeManager();t&&("all"===e?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let i in e)e[i].layoutChanged()&&(t=!0);for(let i of this.getModels())this._setModelAttributes(i,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,i=this.getNumInstances(),r=this.getStartIndices();e.update({data:t.data,numInstances:i,startIndices:r,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let n=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(n)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),i=Object.create(this.props);for(let e in t)Object.defineProperty(i,e,{value:t[e]});return i}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let i=Math.floor(ul.length/4);this.internalState.usesPickingColorCache=!0;let r=t>0&&0===ul[0];if(i<t||r){t>0xffffff&&ir.warn("Layer has too many data objects. Picking might not be able to distinguish all objects.")();let e=Math.floor((ul=oo.allocate(ul,t,{size:4,copy:!0,maxCount:Math.max(t,0xffffff)})).length/4),n=[0,0,0],s=r?0:i;for(let t=s;t<e;t++)this.encodePickingColor(t,n),ul[4*t+0]=n[0],ul[4*t+1]=n[1],ul[4*t+2]=n[2],ul[4*t+3]=0}e.value=ul.subarray(0,4*t)}_setModelAttributes(e,t,i=!1){if(!Object.keys(t).length)return;if(i){let i=this.getAttributeManager();e.setBufferLayout(i.getBufferLayouts(e)),t=i.getAttributes()}let r=e.userData?.excludeAttributes||{},n={},s={};for(let i in t){if(r[i])continue;let o=t[i].getValue();for(let r in o){let a=o[r];a instanceof aw.Buffer?t[i].settings.isIndexed?e.setIndexBuffer(a):n[r]=a:a&&(s[r]=a)}}e.setAttributes(n),e.setConstantAttributes(s)}disablePickingIndex(e){let t=this.props.data;if(!("attributes"in t))return void this._disablePickingIndex(e);let{pickingColors:i,instancePickingColors:r}=this.getAttributeManager().attributes,n=i||r,s=n&&t.attributes&&t.attributes[n.id];if(s&&s.value){let i=s.value,r=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=n.getVertexOffset(e);i[t]===r[0]&&i[t+1]===r[1]&&i[t+2]===r[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let{pickingColors:t,instancePickingColors:i}=this.getAttributeManager().attributes,r=t||i;if(!r)return;let n=r.getVertexOffset(e),s=r.getVertexOffset(e+1);r.buffer.write(new Uint8Array(s-n),n)}restorePickingColors(){let{pickingColors:e,instancePickingColors:t}=this.getAttributeManager().attributes,i=e||t;i&&(this.internalState.usesPickingColorCache&&i.value.buffer!==ul.buffer&&(i.value=ul.subarray(0,i.value.length)),i.updateSubBuffer({startOffset:0}))}_initialize(){oz(!this.internalState),nU("layer.initialize",this);let e=this._getAttributeManager();for(let t of(e&&e.addInstanced({instancePickingColors:{type:"uint8",size:4,noAlloc:!0,update:this.calculateInstancePickingColors}}),this.internalState=new us({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(ir.deprecated("layer.state.attributeManager","layer.getAttributeManager()")(),e)}),this.internalState.uniformTransitions=new cK(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context),this.props.extensions))t.initializeState.call(this,this.context,t);this.setChangeFlags({dataChanged:"init",propsChanged:"init",viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){nU("layer.matched",this,this===e);let{state:t,internalState:i}=e;this!==e&&(this.internalState=i,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(nU("layer.update",this,e),!e)return;this.context.stats.get("Layer updates").incrementCount();let t=this.props,i=this.context,r=this.internalState,n=i.viewport,s=this._updateUniformTransition();r.propsInTransition=s,i.viewport=r.viewport||n,this.props=s;try{let e=this._getUpdateParams(),t=this.getModels();if(i.device)this.updateState(e);else try{this.updateState(e)}catch(e){}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let r=this.getModels()[0]!==t[0];this._postUpdate(e,r)}finally{i.viewport=n,this.props=t,this._clearChangeFlags(),r.needsUpdate=!1,r.resetOldProps()}}_finalize(){for(let e of(nU("layer.finalize",this),this.finalizeState(this.context),this.props.extensions))e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:i={},parameters:r={}}){this._updateAttributeTransition();let n=this.props,s=this.context;this.props=this.internalState.propsInTransition||n;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:n}=this.props,o=n&&n(i)||[0,0];s.device instanceof lp.WebGLDevice&&s.device.setParametersWebGL({polygonOffset:o});let a=s.device instanceof lp.WebGLDevice?null:function(e){let{blendConstant:t,...i}=e;return t?{pipelineParameters:i,renderPassParameters:{blendConstant:t}}:{pipelineParameters:i}}(r);if(function(e,t,i,r){for(let n of e)"webgpu"===n.device.type?(function(e,t){let i=t.props.framebuffer||(t.framebuffer??null);if(!i)return;let r=i.colorAttachments.map(e=>e?.texture?.format??null),n=i.depthStencilAttachment?.texture?.format;(!function(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(e.props.colorAttachmentFormats,r)||e.props.depthStencilAttachmentFormat!==n)&&(e.props.colorAttachmentFormats=r,e.props.depthStencilAttachmentFormat=n,e._setPipelineNeedsUpdate("attachment formats"))}(n,t),n.setParameters({...n.parameters,...r?.pipelineParameters})):n.setParameters(i)}(this.getModels(),e,r,a),s.device instanceof lp.WebGLDevice)s.device.withParametersWebGL(r,()=>{let n={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:r,context:s};for(let e of this.props.extensions)e.draw.call(this,n,e);this.draw(n)});else{a?.renderPassParameters&&e.setParameters(a.renderPassParameters);let n={renderPass:e,shaderModuleProps:t,uniforms:i,parameters:r,context:s};for(let e of this.props.extensions)e.draw.call(this,n,e);this.draw(n)}}finally{this.props=n}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let i in e)if(e[i]){let r=!1;if("dataChanged"===i){let n=e[i],s=t[i];n&&Array.isArray(s)&&(t.dataChanged=Array.isArray(n)?s.concat(n):n,r=!0)}t[i]||(t[i]=e[i],r=!0),r&&nU("layer.changeFlag",this,i,e)}let i=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=i,t.somethingChanged=i||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let i,r,n,s=(i=cZ({newProps:e,oldProps:t,propTypes:e[nI],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=function(e,t){if(null===t)return"oldProps is null, initial diff";let i=!1,{dataComparator:r,_dataDiff:n}=e;return r?r(e.data,t.data)||(i="Data comparator detected a change"):e.data!==t.data&&(i="A new data container was supplied"),i&&n&&(i=n(e.data,t.data)||i),i}(e,t),n=!1,r||(n=function(e,t){if(null===t||"all"in e.updateTriggers&&cJ(e,t,"all"))return{all:!0};let i={},r=!1;for(let n in e.updateTriggers)"all"!==n&&cJ(e,t,n)&&(i[n]=!0,r=!0);return!!r&&i}(e,t)),{dataChanged:r,propsChanged:i,updateTriggersChanged:n,extensionsChanged:function(e,t){if(null===t)return!0;let i=t.extensions,{extensions:r}=e;if(r===i)return!1;if(!i||!r||r.length!==i.length)return!0;for(let e=0;e<r.length;e++)if(!r[e].equals(i[e]))return!0;return!1}(e,t),transitionsChanged:function(e,t){if(!e.transitions)return!1;let i={},r=e[nI],n=!1;for(let s in e.transitions){let o=r[s],a=o&&o.type;("number"===a||"color"===a||"array"===a)&&cX(e[s],t[s],o)&&(i[s]=!0,n=!0)}return!!n&&i}(e,t)});if(s.updateTriggersChanged)for(let e in s.updateTriggersChanged)s.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(s.transitionsChanged)for(let i in s.transitionsChanged)this.internalState.uniformTransitions.add(i,t[i],e[i],e.transitions?.[i]);return this.setChangeFlags(s)}validateProps(){!function(e){let t=e[nI];for(let i in t){let r=t[i],{validate:n}=r;if(n&&!n(e[i],r))throw Error(`Invalid prop ${i}: ${e[i]}`)}}(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:i}=this.props;e.picked&&"function"==typeof i&&(t.highlightColor=i(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new cG(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:i,oldProps:r}=e,n=this.state.model;n?.isInstanced&&n.setInstanceCount(this.getNumInstances());let{autoHighlight:s,highlightedObjectIndex:o,highlightColor:a}=i;if(t||r.autoHighlight!==s||r.highlightedObjectIndex!==o||r.highlightColor!==a){let e={};Array.isArray(a)&&(e.highlightColor=a),(t||r.autoHighlight!==s||o!==r.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t=this.internalState.needsRedraw&&this.id;let i=this.getAttributeManager(),r=!!i&&i.getNeedsRedraw(e);if(t=t||r)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}}uu.defaultProps=uc,uu.layerName="Layer";let uh=uu,ud={position:"absolute",zIndex:-1};function up(e){return _.isValidElement(e)}let uf=(0,_.createContext)(),ug={mixBlendMode:null};function um(e){e.redrawReason&&(e.deck._drawLayers(e.redrawReason),e.redrawReason=null)}let uy=_.forwardRef(function(e,t){let[i,r]=(0,_.useState)(0),n=(0,_.useRef)({control:null,version:i,forceUpdate:()=>r(e=>e+1)}).current,s=(0,_.useRef)(null),o=(0,_.useRef)(null),a=(0,_.useMemo)(()=>(function({children:e,layers:t=[],views:i}){let r=[],n=[],s={};return _.Children.forEach(function e(t){if("function"==typeof t)return(0,_.createElement)(oL,{},t);if(Array.isArray(t))return t.map(e);if(up(t)){if(t.type===_.Fragment)return e(t.props.children);ld(t.type,oL)}return t}(e),e=>{if(up(e)){let t=e.type;if(ld(t,uh)){let i=function(e,t){let i={},r=e.defaultProps||{};for(let e in t)r[e]!==t[e]&&(i[e]=t[e]);return new e(i)}(t,e.props);n.push(i)}else r.push(e);if(ld(t,oL)&&t!==oL&&e.props.id){let i=new t(e.props);s[i.id]=i}}else e&&r.push(e)}),Object.keys(s).length>0&&(Array.isArray(i)?i.forEach(e=>{s[e.id]=e}):i&&(s[i.id]=i),i=Object.values(s)),{layers:t=n.length>0?[n,t]:t,children:r,views:i}})(e),[e.layers,e.views,e.children]),l=!0,c=t=>l&&e.viewState?(n.viewStateUpdateRequested=t,null):(n.viewStateUpdateRequested=null,e.onViewStateChange?.(t)),u=t=>{l?n.interactionStateUpdateRequested=t:(n.interactionStateUpdateRequested=null,e.onInteractionStateChange?.(t))},h=(0,_.useMemo)(()=>{let t={widgets:[],...e,style:null,width:"100%",height:"100%",parent:s.current,canvas:o.current,layers:a.layers,onViewStateChange:c,onInteractionStateChange:u};return a.views&&(t.views=a.views),delete t._customRender,n.deck&&(n.deck.setProps(t),n.deck.isInitialized&&(n.lastRenderedViewports=n.deck.getViewports())),t},[e]);(0,_.useEffect)(()=>{var t;let i;return i=new(e.Deck||lu)({...t={...h,parent:s.current,canvas:o.current},_customRender:t.deviceProps?.adapters?.[0]?.type==="webgpu"?void 0:e=>{n.redrawReason=e;let t=i.getViewports();n.lastRenderedViewports!==t?n.forceUpdate():um(n)}}),n.deck=i,()=>n.deck?.finalize()},[]),lh(()=>{um(n);let{viewStateUpdateRequested:e,interactionStateUpdateRequested:t}=n;e&&c(e),t&&u(t)}),(0,_.useImperativeHandle)(t,()=>({get deck(){return n.deck},pickObjectAsync:e=>n.deck.pickObjectAsync(e),pickObjectsAsync:e=>n.deck.pickObjectsAsync(e),pickObject:e=>n.deck.pickObject(e),pickMultipleObjects:e=>n.deck.pickMultipleObjects(e),pickObjects:e=>n.deck.pickObjects(e)}),[]);let d=n.deck&&n.deck.isInitialized?n.deck.getViewports():void 0,{ContextProvider:p,width:f="100%",height:g="100%",id:m,style:y}=e,{containerStyle:v,canvasStyle:b}=(0,_.useMemo)(()=>(function({width:e,height:t,style:i}){let r={position:"absolute",zIndex:0,left:0,top:0,width:e,height:t},n={left:0,top:0};if(i)for(let e in i)e in ug?n[e]=i[e]:r[e]=i[e];return{containerStyle:r,canvasStyle:n}})({width:f,height:g,style:y}),[f,g,y]);if(!n.viewStateUpdateRequested&&n.lastRenderedViewports===d||n.version!==i){n.lastRenderedViewports=d,n.version=i;let e=function({children:e,deck:t,ContextProvider:i=uf.Provider}){let{viewManager:r}=t||{};if(!r||!r.views.length)return[];let n={},s=r.views[0].id;for(let t of e){let e=s,i=t;up(t)&&ld(t.type,oL)&&(e=t.props.id||s,i=t.props.children);let o=r.getViewport(e),a=r.getViewState(e);if(o){a.padding=o.padding;let{x:t,y:r,width:s,height:l}=o;i=function e(t,i){if("function"==typeof t)return t(i);if(Array.isArray(t))return t.map(t=>e(t,i));if(up(t)){var r;if(r=t,r.props?.mapStyle)return i.style=ud,(0,_.cloneElement)(t,i);if(function(e){let t=e.type;return t&&t.deckGLViewProps}(t))return(0,_.cloneElement)(t,i)}return t}(i,{x:t,y:r,width:s,height:l,viewport:o,viewState:a}),n[e]||(n[e]={viewport:o,children:[]}),n[e].children.push(i)}}return Object.keys(n).map(e=>{let{viewport:r,children:s}=n[e],{x:o,y:a,width:l,height:c}=r,u=`view-${e}`,h=(0,_.createElement)("div",{key:u,id:u,style:{position:"absolute",left:o,top:a,width:l,height:c}},...s),d={deck:t,viewport:r,container:t.canvas.offsetParent,eventManager:t.eventManager,onViewStateChange:i=>{i.viewId=e,t._onViewStateChange(i)},widgets:[]},p=`view-${e}-context`;return(0,_.createElement)(i,{key:p,value:d},h)})}({children:a.children,deck:n.deck,ContextProvider:p}),t=(0,_.createElement)("canvas",{key:"canvas",id:m||"deckgl-overlay",ref:o,style:b}),r=(0,_.createElement)("div",{key:"deck-events-root",className:"deck-events-root",style:{width:f,height:g}},[t,e]),l=(0,_.createElement)("div",{key:"deck-widgets-root",className:"deck-widgets-root"});n.control=(0,_.createElement)("div",{id:`${m||"deckgl"}-wrapper`,ref:s,style:v},[r,l])}return l=!1,n.control});class uv extends uh{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:i}=this.props;return i&&i[e]&&i[e].type||t}getSubLayerRow(e,t,i){return e.__source={parent:this,object:t,index:i},e}getSubLayerAccessor(e){if("function"==typeof e){let t={index:-1,data:this.props.data,target:[]};return(i,r)=>i&&i.__source?(t.index=i.__source.index,e(i.__source.object,t)):e(i,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:i,visible:r,parameters:n,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:u,wrapLongitude:h,positionFormat:d,modelMatrix:p,extensions:f,fetch:g,operation:m,_subLayerProps:y}=this.props,v={id:"",updateTriggers:{},opacity:t,pickable:i,visible:r,parameters:n,getPolygonOffset:s,highlightedObjectIndex:o,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:u,wrapLongitude:h,positionFormat:d,modelMatrix:p,extensions:f,fetch:g,operation:m},b=y&&e.id&&y[e.id],_=b&&b.updateTriggers,x=e.id||"sublayer";if(b){let t=this.props[nI],i=e.type?e.type._propTypes:{};for(let e in b){let r=i[e]||t[e];r&&"accessor"===r.type&&(b[e]=this.getSubLayerAccessor(b[e]))}}for(let t of(Object.assign(v,e,b),v.id=`${this.props.id}-${x}`,v.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,..._},f)){let e=t.getSubLayerProps.call(this,t);e&&Object.assign(v,e,{updateTriggers:Object.assign(v.updateTriggers,e.updateTriggers)})}return v}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let i=this.internalState.subLayers,r=!i||this.needsUpdate();for(let e of(r&&(i=nV(this.renderLayers(),Boolean),this.internalState.subLayers=i),nU("compositeLayer.renderLayers",this,r,i),i))e.parent=this}}uv.layerName="CompositeLayer";let ub=uv;class u_{id;topology;vertexCount;indices;attributes;userData={};constructor(e){const{attributes:t={},indices:i=null,vertexCount:r=null}=e;for(const[r,n]of(this.id=e.id||l3("geometry"),this.topology=e.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={},Object.entries(t))){const e=ArrayBuffer.isView(n)?{value:n}:n;if(!ArrayBuffer.isView(e.value))throw Error(`${this._print(r)}: must be typed array or object with value as typed array`);if("POSITION"!==r&&"positions"!==r||e.size||(e.size=3),"indices"===r){if(this.indices)throw Error("Multiple indices detected");this.indices=e}else this.attributes[r]=e}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let i=1/0;for(let t of Object.values(e)){let{value:e,size:r,constant:n}=t;!n&&e&&void 0!==r&&r>=1&&(i=Math.min(i,e.length/r))}return i}}let ux=`\
layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,uw={name:"icon",vs:ux,fs:ux,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},uP=`\
#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,uC=`\
#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,uS=`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instancePickingColors: vec3<f32>,
  @location(7) instanceIconFrames: vec4<f32>,
  @location(8) instanceColorModes: f32,
  @location(9) instanceOffsets: vec2<f32>,
  @location(10) instancePixelOffset: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = inp.instancePickingColors;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = inp.instancePickingColors;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`,uM=()=>{},uE={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},uL={x:0,y:0,width:0,height:0};function uA(e){return e&&(e.id||e.url)}function uT(e){let{device:t}=e;"webgl"===t.type?e.generateMipmapsWebGL():"webgpu"===t.type&&t.generateMipmapsWebGPU(e)}function uk(e,t,i){for(let r=0;r<t.length;r++){let{icon:n,xOffset:s}=t[r];e[uA(n)]={...n,x:s,y:i}}}class uR{constructor(e,{onUpdate:t=uM,onError:i=uM}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=4,this._canvasWidth=1024,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=i}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?uA(e):e;return this._mapping[t]||uL}setProps({loadOptions:e,autoPacking:t,iconAtlas:i,iconMapping:r,textureParameters:n}){e&&(this._loadOptions=e),void 0!==t&&(this._autoPacking=t),r&&(this._mapping=r),i&&(this._texture?.delete(),this._texture=null,this._externalTexture=i),n&&(this._samplerParameters=n)}get isLoaded(){return 0===this._pendingCount}packIcons(e,t){if(!this._autoPacking||"u"<typeof document)return;let i=Object.values(function(e,t,i){if(!e||!t)return null;i=i||{};let r={},{iterable:n,objectInfo:s}=lP(e);for(let e of n){s.index++;let n=t(e,s),o=uA(n);if(!n)throw Error("Icon is missing.");if(!n.url)throw Error("Icon url is missing.");r[o]||i[o]&&n.url===i[o].url||(r[o]={...n,source:e,sourceIndex:s.index})}return r}(e,t,this._mapping)||{});if(i.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:n,canvasHeight:s}=function({icons:e,buffer:t,mapping:i={},xOffset:r=0,yOffset:n=0,rowHeight:s=0,canvasWidth:o}){let a=[];for(let l=0;l<e.length;l++){let c=e[l];if(!i[uA(c)]){let{height:e,width:l}=c;r+l+t>o&&(uk(i,a,n),r=0,n=s+n+t,s=0,a=[]),a.push({icon:c,xOffset:r}),r=r+l+t,s=Math.max(s,e)}}return a.length>0&&uk(i,a,n),{mapping:i,rowHeight:s,xOffset:r,yOffset:n,canvasWidth:o,canvasHeight:Math.pow(2,Math.ceil(Math.log2(s+n+t)))}}({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=n,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=s,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||uE,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=function(e,t,i,r){let{width:n,height:s,device:o}=e,a=o.createTexture({format:"rgba8unorm",width:t,height:i,sampler:r,mipLevels:o.getMipLevelCount(t,i)}),l=o.createCommandEncoder();l.copyTextureToTexture({sourceTexture:e,destinationTexture:a,width:n,height:s});let c=l.finish();return o.submit(c),uT(a),e.destroy(),a}(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||uE)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){let t=this._canvas.getContext("2d",{willReadFrequently:!0});for(let i of e)this._pendingCount++,or(i.url,this._loadOptions).then(e=>{let r=uA(i),n=this._mapping[r],{x:s,y:o,width:a,height:l}=n,{image:c,width:u,height:h}=function(e,t,i,r){let n=Math.min(i/t.width,r/t.height),s=Math.floor(t.width*n),o=Math.floor(t.height*n);return 1===n?{image:t,width:s,height:o}:(e.canvas.height=o,e.canvas.width=s,e.clearRect(0,0,s,o),e.drawImage(t,0,0,t.width,t.height,0,0,s,o),{image:e.canvas,width:s,height:o})}(t,e,a,l),d=s+(a-u)/2,p=o+(l-h)/2;this._texture?.copyExternalImage({image:c,x:d,y:p,width:u,height:h}),n.x=d,n.y=p,n.width=u,n.height=h,this._texture&&uT(this._texture),this.onUpdate(u!==a||h!==l)}).catch(e=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}}let uO=[0,0,0,255],uI={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:e=>e.position},getIcon:{type:"accessor",value:e=>e.icon},getColor:{type:"accessor",value:uO},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}};class uj extends uh{getShaders(){return super.getShaders({vs:uP,fs:uC,source:uS,modules:[rg,tL,nA,uw]})}initializeState(){this.state={iconManager:new uR(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceIconDefs:{size:7,accessor:"getIcon",transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:uO},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,n=this.getAttributeManager(),{iconAtlas:s,iconMapping:o,data:a,getIcon:l,textureParameters:c}=t,{iconManager:u}=this.state;if("string"==typeof s)return;let h=s||this.internalState.isAsyncPropLoading("iconAtlas");u.setProps({loadOptions:t.loadOptions,autoPacking:!h,iconAtlas:s,iconMapping:h?o:null,textureParameters:c}),h?i.iconMapping!==t.iconMapping&&n.invalidate("getIcon"):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&u.packIcons(a,l),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),n.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){let{sizeScale:t,sizeBasis:i,sizeMinPixels:r,sizeMaxPixels:n,sizeUnits:s,billboard:o,alphaCutoff:a}=this.props,{iconManager:l}=this.state,c=l.getTexture();if(c){let e=this.state.model,l={iconsTexture:c,iconsTextureDim:[c.width,c.height],sizeUnits:i2[s],sizeScale:t,sizeBasis:+("height"===i),sizeMinPixels:r,sizeMaxPixels:n,billboard:o,alphaCutoff:a};e.shaderInputs.setProps({icon:l}),e.draw(this.context.renderPass)}}_getModel(){return new cP(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new u_({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([-1,-1,1,-1,-1,1,1,1])}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):ir.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:i,width:r,height:n,mask:s,anchorX:o=r/2,anchorY:a=n/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,n/2-a,t,i,r,n,+!!s]}}uj.defaultProps=uI,uj.layerName="IconLayer";let uz=uj,uD=`\
layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,uN={name:"scatterplot",vs:uD,fs:uD,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},uF=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = instancePickingColors;
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,uB=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,uU=`\
// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,
 instancePixelOffset: vec2<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32,
 instancePixelOffsetConstant: i32
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>,
  instancePixelOffset: vec2<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0),
  vec2<f32>(0.0)
);

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>,
  @location(8) instancePixelOffset: vec2<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    1.0,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0)); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = attributes.instancePickingColors;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    step(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`,uV=[0,0,0,255],u$={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:e=>e.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:uV},getLineColor:{type:"accessor",value:uV},getLineWidth:{type:"accessor",value:1},getPixelOffset:{type:"accessor",value:[0,0]},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class uW extends uh{getShaders(){return super.getShaders({vs:uF,fs:uB,source:uU,modules:[rg,tL,nA,uN]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:i,radiusMinPixels:r,radiusMaxPixels:n,stroked:s,filled:o,billboard:a,antialiasing:l,lineWidthUnits:c,lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:d}=this.props,p={stroked:s,filled:o,billboard:a,antialiasing:l,radiusUnits:i2[t],radiusScale:i,radiusMinPixels:r,radiusMaxPixels:n,lineWidthUnits:i2[c],lineWidthScale:u,lineWidthMinPixels:h,lineWidthMaxPixels:d},f=this.state.model;f.shaderInputs.setProps({scatterplot:p}),f.draw(this.context.renderPass)}_getModel(){return new cP(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new u_({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0])}}}),isInstanced:!0})}}uW.defaultProps=u$,uW.layerName="ScatterplotLayer";let uG=`\
layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,uH={name:"sdf",vs:uG,fs:uG,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}},uq={none:0,start:1,center:2,end:3},uY={name:"text",vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${uq.start}
#define ALIGN_MODE_CENTER ${uq.center}
#define ALIGN_MODE_END ${uq.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t="none",contentAlignVertical:i="none",fontSize:r,viewport:n})=>({cutoffPixels:e,align:[uq[t],uq[i]],fontSize:r,flipY:n?.flipY??!1}),uniformTypes:{cutoffPixels:"vec2<f32>",align:"vec2<i32>",fontSize:"f32",flipY:"f32"}},uK=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,uZ=`\
#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;class uX extends uz{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,uY,uH],vs:uK,fs:uZ}}initializeState(){super.initializeState();let e=this.getAttributeManager();e.attributes.instanceIconDefs.settings.update=this.calculateInstanceIconDefs,e.addInstanced({instancePickingColors:{type:"uint8",size:4,accessor:(e,{index:t,target:i})=>this.encodePickingColor(t,i)},instanceClipRect:{size:4,accessor:"getContentBox",defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:r}=e,{outlineColor:n}=t;if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate("instanceIconDefs"),n!==i.outlineColor){let e=[n[0]/255,n[1]/255,n[2]/255,(n[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&ir.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:i,fontSize:r,outlineWidth:n,contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a}=this.props,{outlineColor:l}=this.state,c=n?Math.max(i,.75*(1-n)):-1,u=this.state.model,h={buffer:.75,outlineBuffer:c,gamma:i,enabled:!!t,outlineColor:l},d={contentCutoffPixels:s,contentAlignHorizontal:o,contentAlignVertical:a,fontSize:r,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:h,text:d}),super.draw(e),t&&n){let{iconManager:e}=this.state;e.getTexture()&&(u.shaderInputs.setProps({sdf:{...h,outlineBuffer:.75}}),u.draw(this.context.renderPass))}}calculateInstanceIconDefs(e,{startRow:t,endRow:i}){let{data:r,getIcon:n,getIconOffsets:s}=this.props,o=e.getVertexOffset(t),a=e.value,{iterable:l,objectInfo:c}=lP(r,t,i);for(let t of l){c.index++;let i=n(t,c),r=s(t,c);if(i){let t=0;for(let n of Array.from(i)){let i=super.getInstanceIconDef(n);i[0]=r[2*t],i[1]+=r[2*t+1],i[6]=1,a.set(i,o),o+=e.size,t++}}}}}uX.defaultProps={getIconOffsets:{type:"accessor",value:e=>e.offsets},getContentBox:{type:"accessor",value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none"},uX.layerName="MultiIconLayer";let uJ=new Float64Array(256);for(let e=0;e<256;e++){let t=.5-Math.pow(e/255,1/2.2);uJ[e]=t*Math.abs(t)}uJ[255]=-1e20;class uQ{constructor({fontSize:e=24,buffer:t=3,radius:i=8,cutoff:r=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:o="normal",lang:a=null}={}){this.buffer=t,this.radius=i,this.cutoff=r,this.lang=a;const l=this.size=e+4*t,c=this._createCanvas(l),u=this.ctx=c.getContext("2d",{willReadFrequently:!0});u.font=`${o} ${s} ${e}px ${n}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(l*l),this.gridInner=new Float64Array(l*l),this.f=new Float64Array(l),this.z=new Float64Array(l+1),this.v=new Uint16Array(l)}_createCanvas(e){if("u">typeof OffscreenCanvas)return new OffscreenCanvas(e,e);let t=document.createElement("canvas");return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:i,actualBoundingBoxDescent:r,actualBoundingBoxLeft:n,actualBoundingBoxRight:s}=this.ctx.measureText(e),o=Math.ceil(i),a=Math.floor(-n),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s)-a)),c=Math.max(0,Math.min(this.size-this.buffer,o+Math.ceil(r))),u=l+2*this.buffer,h=c+2*this.buffer,d=Math.max(u*h,0),p=new Uint8ClampedArray(d),f={data:p,width:u,height:h,glyphWidth:l,glyphHeight:c,glyphTop:o,glyphLeft:a,glyphAdvance:t};if(0===l||0===c)return f;let{ctx:g,buffer:m,gridInner:y,gridOuter:v}=this;this.lang&&(g.lang=this.lang),g.clearRect(m,m,l,c),g.fillText(e,m-a,m+o);let b=g.getImageData(m,m,l,c);v.fill(1e20,0,d),y.fill(0,0,d);let _=3;for(let e=0;e<c;e++){let t=(e+m)*u+m;for(let e=0;e<l;e++,_+=4,t++){let e=b.data[_];if(0===e)continue;let i=uJ[e];v[t]=Math.max(0,i),y[t]=Math.max(0,-i)}}u0(v,0,0,u,h,u,this.f,this.v,this.z);let x=Math.min(m,1);u0(y,m-x,m-x,l+2*x,c+2*x,u,this.f,this.v,this.z);let w=255/this.radius,P=255*(1-this.cutoff);for(let e=0;e<d;e++){let t=Math.sqrt(v[e])-Math.sqrt(y[e]);p[e]=Math.round(P-w*t)}return f}}function u0(e,t,i,r,n,s,o,a,l){for(let c=t;c<t+r;c++)u1(e,i*s+c,s,n,o,a,l);for(let c=i;c<i+n;c++)u1(e,c*s+t,1,r,o,a,l)}function u1(e,t,i,r,n,s,o){s[0]=0,o[0]=-1e20,o[1]=1e20,n[0]=e[t];for(let a=1,l=0,c=0;a<r;a++){n[a]=e[t+a*i];let r=a*a;do{let e=s[l];c=(n[a]-n[e]+r-e*e)/(a-e)/2}while(c<=o[l]&&--l>-1)s[++l]=a,o[l]=c,o[l+1]=1e20}for(let a=0,l=0;a<r;a++){for(;o[l+1]<a;)l++;let r=s[l],c=a-r;e[t+a*i]=n[r]+c*c}}let u2=[];function u3(e,t,i,r){let n=0;for(let s=t;s<i;s++){let t=e[s];n+=r[t]?.advance||0}return n}function u4(e,t,i,r,n,s){let o=t,a=0;for(let l=t;l<i;l++){let t=u3(e,l,l+1,n);a+t>r&&(o<l&&s.push(l),o=l,a=0),a+=t}return a}class u5{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?this.delete(e):Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e)}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}}let u6={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:function(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},u8=new u5(3);function u9(e,t,i,r){e.font=`${r} ${i}px ${t}`,e.fillStyle="#000",e.textBaseline="alphabetic",e.textAlign="left"}class u7{constructor(){this.props={...u6}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=function(e,t){let i;i=new Set("string"==typeof t?Array.from(t):t);let r=u8.get(e);if(!r)return i;for(let e in r.mapping)i.has(e)&&i.delete(e);return i}(this._key,this.props.characterSet),i=u8.get(this._key);if(i&&0===t.size){this._atlas!==i&&(this._atlas=i);return}let r=this._generateFontAtlas(t,i);this._atlas=r,u8.set(this._key,r)}_generateFontAtlas(e,t){let i,{fontFamily:r,fontWeight:n,fontSize:s,buffer:o,sdf:a,radius:l,cutoff:c}=this.props,u=t&&t.data;u||((u=document.createElement("canvas")).width=1024);let h=u.getContext("2d",{willReadFrequently:!0});u9(h,r,s,n);let d=e=>(function(e,t,i){if(void 0===i){let i=e.measureText("A");return i.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(i.fontBoundingBoxAscent),descent:Math.ceil(i.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:.9*t,descent:.3*t}}let r=e.measureText(i);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:.9*t,descent:.3*t}})(h,s,e);this._getFontRenderer?i=this._getFontRenderer(this.props):a&&(i={measure:d,draw:function({fontSize:e,buffer:t,radius:i,cutoff:r,fontFamily:n,fontWeight:s}){let o=new uQ({fontSize:e,buffer:t,radius:i,cutoff:r,fontFamily:n,fontWeight:`${s}`});return e=>{let{data:i,width:r,height:n}=o.draw(e),s=new ImageData(r,n);for(let e=0;e<i.length;e++)s.data[4*e+3]=i[e];return{data:s,left:t,top:t}}}(this.props)});let{mapping:p,canvasHeight:f,xOffset:g,yOffsetMin:m,yOffsetMax:y}=function({characterSet:e,measureText:t,buffer:i,maxCanvasWidth:r,mapping:n={},xOffset:s=0,yOffsetMin:o=0,yOffsetMax:a=0}){let l=s,c=o,u=a;for(let s of e)if(!n[s]){let{advance:e,width:o,ascent:a,descent:h}=t(s),d=a+h;l+o+2*i>r&&(l=0,c=u),n[s]={x:l+i,y:c+i,width:o,height:d,advance:e,anchorX:o/2,anchorY:a},l+=o+2*i,u=Math.max(u,c+d+2*i)}return{mapping:n,xOffset:l,yOffsetMin:c,yOffsetMax:u,canvasHeight:Math.pow(2,Math.ceil(Math.log2(u)))}}({measureText:e=>i?i.measure(e):d(e),buffer:o,characterSet:e,maxCanvasWidth:1024,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(u.height!==f){let e=u.height>0?h.getImageData(0,0,u.width,u.height):null;u.height=f,e&&h.putImageData(e,0,0)}if(u9(h,r,s,n),i)for(let t of e){let e=p[t],r=e.width,{data:n,left:s=0,top:o=0}=i.draw(t),a=e.x-s,l=e.y-o,c=Math.max(0,Math.round(a)),d=Math.max(0,Math.round(l)),f=Math.min(n.width,u.width-c),g=Math.min(n.height,u.height-d);h.putImageData(n,c,d,0,0,f,g),e.x=c,e.y=d,e.width=f,e.height=g,e.anchorX+=f/2-s-r/2,e.anchorY+=o}else for(let t of e){let e=p[t];h.fillText(t,e.x,e.y+e.anchorY)}let v=i?i.measure():d();return{baselineOffset:(v.ascent-v.descent)/2,xOffset:g,yOffsetMin:m,yOffsetMax:y,mapping:p,data:u,width:u.width,height:u.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:i,buffer:r,sdf:n,radius:s,cutoff:o}=this.props;return n?`${e} ${t} ${i} ${r} ${s} ${o}`:`${e} ${t} ${i} ${r}`}}let he=`\
layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,ht={name:"textBackground",vs:he,fs:he,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}},hi=`\
#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,hr=`\
#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hn={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,fontSize:1,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:e=>e.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getClipRect:{type:"accessor",value:[0,0,-1,-1]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}};class hs extends uh{getShaders(){return super.getShaders({vs:hi,fs:hr,modules:[rg,nA,ht,uY]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instanceRects:{size:4,accessor:"getBoundingRect"},instanceClipRect:{size:4,accessor:"getClipRect",defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:i,sizeUnits:r,sizeMinPixels:n,sizeMaxPixels:s,getLineWidth:o,fontSize:a}=this.props,{padding:l,borderRadius:c}=this.props;l.length<4&&(l=[l[0],l[1],l[0],l[1]]),Array.isArray(c)||(c=[c,c,c,c]);let u=this.state.model,h={billboard:t,stroked:!!o,borderRadius:c,padding:l,sizeUnits:i2[r],sizeScale:i,sizeMinPixels:n,sizeMaxPixels:s},d={fontSize:a,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:h,text:d}),u.draw(this.context.renderPass)}_getModel(){return new cP(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new u_({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array([0,0,1,0,0,1,1,1])}}}),isInstanced:!0})}}hs.defaultProps=hn,hs.layerName="TextBackgroundLayer";let ho={start:1,middle:0,end:-1},ha={top:1,center:0,bottom:-1},hl=[0,0,0,255],hc={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:hl},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:u6.characterSet},fontFamily:u6.fontFamily,fontWeight:u6.fontWeight,lineHeight:1,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:hl},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},contentCutoffPixels:{type:"array",value:[0,0]},contentAlignHorizontal:"none",contentAlignVertical:"none",getText:{type:"accessor",value:e=>e.text},getPosition:{type:"accessor",value:e=>e.position},getColor:{type:"accessor",value:hl},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},getContentBox:{type:"accessor",value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}};class hu extends ub{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[i,r]}=this.transformParagraph(e,t),{getTextAnchor:n,getAlignmentBaseline:s}=this.props;return[(ho["function"==typeof n?n(e,t):n]-1)*i/2,(ha["function"==typeof s?s(e,t):s]-1)*r/2,i,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:i,getAlignmentBaseline:r}=this.props,{x:n,y:s,rowWidth:o,size:[,a]}=this.transformParagraph(e,t),l=ho["function"==typeof i?i(e,t):i],c=ha["function"==typeof r?r(e,t):r],u=n.length,h=Array(2*u),d=0;for(let e=0;e<u;e++)h[d++]=(l-1)*o[e]/2+n[e],h[d++]=(c-1)*a/2+s[e];return h}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new u7},this.props.maxWidth>0&&ir.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(e){let{props:t,oldProps:i,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==i.lineHeight||t.wordBreak!==i.wordBreak||t.maxWidth!==i.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:i,_getFontRenderer:r}=this.props,{fontAtlasManager:n,characterSet:s}=this.state,o={...e,characterSet:s,fontFamily:t,fontWeight:i,_getFontRenderer:r};if(!n.mapping)return n.setProps(o),!0;for(let e in o)if(o[e]!==n.props[e])return n.setProps(o),!0;return!1}_updateText(){let e,{data:t,characterSet:i}=this.props,r=t.attributes?.getText,{getText:n}=this.props,s=t.startIndices,o="auto"===i&&new Set;if(r&&s){let{texts:i,characterCount:a}=function({value:e,length:t,stride:i,offset:r,startIndices:n,characterSet:s}){let o=e.BYTES_PER_ELEMENT,a=i?i/o:1,l=r?r/o:0,c=n[t]||Math.ceil((e.length-l)/a),u=s&&new Set,h=Array(t),d=e;if(a>1||l>0){d=new e.constructor(c);for(let t=0;t<c;t++)d[t]=e[t*a+l]}for(let e=0;e<t;e++){let t=n[e],i=n[e+1]||c,r=d.subarray(t,i);h[e]=String.fromCodePoint.apply(null,r),u&&r.forEach(u.add,u)}if(u)for(let e of u)s.add(String.fromCodePoint(e));return{texts:h,characterCount:c}}({...ArrayBuffer.isView(r)?{value:r}:r,length:t.length,startIndices:s,characterSet:o});e=a,n=(e,{index:t})=>i[t]}else{let{iterable:i,objectInfo:r}=lP(t);for(let t of(s=[0],e=0,i)){r.index++;let i=Array.from(n(t,r)||"");o&&i.forEach(o.add,o),e+=i.length,s.push(e)}}this.setState({getText:n,startIndices:s,numInstances:e,characterSet:o||i})}transformParagraph(e,t){let{fontAtlasManager:i}=this.state,r=i.mapping,{baselineOffset:n}=i.atlas,{fontSize:s}=i.props,o=this.state.getText,{wordBreak:a,lineHeight:l,maxWidth:c}=this.props;return function(e,t,i,r,n,s){let o=Array.from(e),a=o.length,l=Array(a),c=Array(a),u=Array(a),h=("break-word"===r||"break-all"===r)&&isFinite(n)&&n>0,d=[0,0],p=[0,0],f=0,g=t+i/2,m=0,y=0;for(let e=0;e<=a;e++){let t=o[e];if(("\n"===t||e===a)&&(y=e),y>m){let e=h?function(e,t,i,r,n=0,s){void 0===s&&(s=e.length);let o=[];return"break-all"===t?u4(e,n,s,i,r,o):!function(e,t,i,r,n,s){let o=t,a=t,l=t,c=0;for(let u=t;u<i;u++)if(" "===e[u]?l=u+1:(" "===e[u+1]||u+1===i)&&(l=u+1),l>a){let t=u3(e,a,l,n);c+t>r&&(o<a&&(s.push(a),o=a,c=0),t>r&&(t=u4(e,a,l,r,n,s),o=s[s.length-1])),a=l,c+=t}}(e,n,s,i,r,o),o}(o,r,n,s,m,y):u2;for(let t=0;t<=e.length;t++){let r=0===t?m:e[t-1],n=t<e.length?e[t]:y;!function(e,t,i,r,n,s){let o=0,a=0;for(let n=t;n<i;n++){let t=r[e[n]];t&&(a=Math.max(a,t.height))}for(let s=t;s<i;s++){let t=e[s],i=r[t];i?(n[s]=o+i.anchorX,o+=i.advance):(ir.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),n[s]=o,o+=32)}s[0]=o,s[1]=a}(o,r,n,s,l,p);for(let e=r;e<n;e++)c[e]=g,u[e]=p[0];f++,g+=i,d[0]=Math.max(d[0],p[0])}m=y}"\n"===t&&(l[m]=0,c[m]=0,u[m]=0,m++)}return d[1]=f*i,{x:l,y:c,rowWidth:u,size:d}}(o(e,t)||"",n,l*s,a,c*s,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:i,fontAtlasManager:{atlas:r,mapping:n},styleVersion:s}=this.state,{data:o,_dataDiff:a,getPosition:l,getColor:c,getSize:u,getAngle:h,getPixelOffset:d,getBackgroundColor:p,getBorderColor:f,getBorderWidth:g,getContentBox:m,backgroundBorderRadius:y,backgroundPadding:v,background:b,billboard:_,fontSettings:x,outlineWidth:w,outlineColor:P,sizeScale:C,sizeUnits:S,sizeMinPixels:M,sizeMaxPixels:E,contentCutoffPixels:L,contentAlignHorizontal:A,contentAlignVertical:T,transitions:k,updateTriggers:R}=this.props,O=this.getSubLayerClass("characters",uX),I=this.getSubLayerClass("background",hs),{fontSize:j}=this.state.fontAtlasManager.props;return[b&&new I({getFillColor:p,getLineColor:f,getLineWidth:g,borderRadius:y,padding:v,getPosition:l,getSize:u,getAngle:h,getPixelOffset:d,getClipRect:m,billboard:_,sizeScale:C,sizeUnits:S,sizeMinPixels:M,sizeMaxPixels:E,fontSize:j,transitions:k&&{getPosition:k.getPosition,getAngle:k.getAngle,getSize:k.getSize,getFillColor:k.getBackgroundColor,getLineColor:k.getBorderColor,getLineWidth:k.getBorderWidth,getPixelOffset:k.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:R.getPosition,getAngle:R.getAngle,getSize:R.getSize,getFillColor:R.getBackgroundColor,getLineColor:R.getBorderColor,getLineWidth:R.getBorderWidth,getPixelOffset:R.getPixelOffset,getBoundingRect:{getText:R.getText,getTextAnchor:R.getTextAnchor,getAlignmentBaseline:R.getAlignmentBaseline,styleVersion:s}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:a,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new O({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:u6.smoothing,outlineWidth:w/(x.radius||u6.radius),outlineColor:P,iconAtlas:r,iconMapping:n,getPosition:l,getColor:c,getSize:u,getAngle:h,getPixelOffset:d,getContentBox:m,billboard:_,sizeScale:C,sizeUnits:S,sizeMinPixels:M,sizeMaxPixels:E,fontSize:j,contentCutoffPixels:L,contentAlignHorizontal:A,contentAlignVertical:T,transitions:k&&{getPosition:k.getPosition,getAngle:k.getAngle,getColor:k.getColor,getSize:k.getSize,getPixelOffset:k.getPixelOffset,getContentBox:k.getContentBox}},this.getSubLayerProps({id:"characters",updateTriggers:{all:R.getText,getPosition:R.getPosition,getAngle:R.getAngle,getColor:R.getColor,getSize:R.getSize,getPixelOffset:R.getPixelOffset,getContentBox:R.getContentBox,getIconOffsets:{getTextAnchor:R.getTextAnchor,getAlignmentBaseline:R.getAlignmentBaseline,styleVersion:s}}}),{data:o,_dataDiff:a,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:i})]}static set fontAtlasCacheLimit(e){ir.assert(Number.isFinite(e)&&e>=3,"Invalid cache limit"),u8=new u5(e)}}hu.defaultProps=hc,hu.layerName="TextLayer";class hh{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;const{attributes:t={}}=e;this.typedArrayManager=oo,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:i={},getGeometry:r,geometryBuffer:n,positionFormat:s,dataChanged:o,normalize:a=!0}=this.opts;if(this.data=t,this.getGeometry=r,this.positionSize=n&&n.size||("XY"===s?2:3),this.buffers=i,this.normalize=a,n&&(oz(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(n),a||(i.vertexPositions=n)),this.geometryBuffer=i.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?lS(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:i,buffers:r,_attributeDefs:n,typedArrayManager:s}=this;for(let o in n)if(o in r)s.release(i[o]),i[o]=null;else{let r=n[o];r.copy=t,i[o]=s.allocate(i[o],e,r)}}_forEachGeometry(e,t,i){let{data:r,getGeometry:n}=this,{iterable:s,objectInfo:o}=lP(r,t,i);for(let t of s)o.index++,e(n?n(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:i,instanceCount:r}=this,{data:n,geometryBuffer:s}=this,{startRow:o=0,endRow:a=1/0}=e||{},l={};if(e||(t=[0],i=[0]),this.normalize||!s)this._forEachGeometry((e,t)=>{let r=e&&this.normalizeGeometry(e);l[t]=r,i[t+1]=i[t]+(r?this.getGeometrySize(r):0)},o,a),r=i[i.length-1];else if(r=(i=n.startIndices)[n.length]||0,ArrayBuffer.isView(s))r=r||s.length/this.positionSize;else if(s instanceof aw.Buffer){let e=4*this.positionSize;r=r||s.byteLength/e}else if(s.buffer){let e=s.stride||4*this.positionSize;r=r||s.buffer.byteLength/e}else if(s.value){let e=s.value,t=s.stride/e.BYTES_PER_ELEMENT||this.positionSize;r=r||e.length/t}this._allocate(r,!!e),this.indexStarts=t,this.vertexStarts=i,this.instanceCount=r;let c={};this._forEachGeometry((e,n)=>{let s=l[n]||e;c.vertexStart=i[n],c.indexStart=t[n],c.geometrySize=(n<i.length-1?i[n+1]:r)-i[n],c.geometryIndex=n,this.updateGeometryAttributes(s,c)},o,a),this.vertexCount=t[t.length-1]}}function hd(e,t,i,r,n=[]){let s,o;if(8&i)s=(r[3]-e[1])/(t[1]-e[1]),o=3;else if(4&i)s=(r[1]-e[1])/(t[1]-e[1]),o=1;else if(2&i)s=(r[2]-e[0])/(t[0]-e[0]),o=2;else{if(!(1&i))return null;s=(r[0]-e[0])/(t[0]-e[0]),o=0}for(let i=0;i<e.length;i++)n[i]=(1&o)===i?r[o]:s*(t[i]-e[i])+e[i];return n}function hp(e,t){let i=0;return e[0]<t[0]?i|=1:e[0]>t[2]&&(i|=2),e[1]<t[1]?i|=4:e[1]>t[3]&&(i|=8),i}function hf(e,t){let i=t.length,r=e.length;if(r>0){let n=!0;for(let s=0;s<i;s++)if(e[r-i+s]!==t[s]){n=!1;break}if(n)return!1}for(let n=0;n<i;n++)e[r+n]=t[n];return!0}function hg(e,t){let i=t.length;for(let r=0;r<i;r++)e[r]=t[r]}function hm(e,t,i,r,n=[]){let s=r+t*i;for(let t=0;t<i;t++)n[t]=e[s+t];return n}function hy(e,t){let i,r,{size:n=2,broken:s=!1,gridResolution:o=10,gridOffset:a=[0,0],startIndex:l=0,endIndex:c=e.length}=t||{},u=(c-l)/n,h=[],d=[h],p=hm(e,0,n,l),f=h_(p,o,a,[]),g=[];hf(h,p);for(let t=1;t<u;t++){for(r=hp(i=hm(e,t,n,l,i),f);r;){var m,y,v;hd(p,i,r,f,g);let e=hp(g,f);e&&(hd(p,g,e,f,g),r=e),hf(h,g),hg(p,g),m=f,y=o,8&(v=r)?(m[1]+=y,m[3]+=y):4&v?(m[1]-=y,m[3]-=y):2&v?(m[0]+=y,m[2]+=y):1&v&&(m[0]-=y,m[2]-=y),s&&h.length>n&&(h=[],d.push(h),hf(h,p)),r=hp(i,f)}hf(h,i),hg(p,i)}return s?d:d[0]}function hv(e,t=null,i){if(!e.length)return[];let{size:r=2,gridResolution:n=10,gridOffset:s=[0,0],edgeTypes:o=!1}=i||{},a=[],l=[{pos:e,types:o?Array(e.length/r).fill(1):null,holes:t||[]}],c=[[],[]],u=[];for(;l.length;){let{pos:e,types:t,holes:i}=l.shift();(function(e,t,i,r){let n=1/0,s=-1/0,o=1/0,a=-1/0;for(let r=0;r<i;r+=t){let t=e[r],i=e[r+1];n=t<n?t:n,s=t>s?t:s,o=i<o?i:o,a=i>a?i:a}r[0][0]=n,r[0][1]=o,r[1][0]=s,r[1][1]=a})(e,r,i[0]||e.length,c),u=h_(c[0],n,s,u);let h=hp(c[1],u);if(h){let n=hb(e,t,r,0,i[0]||e.length,u,h),s={pos:n[0].pos,types:n[0].types,holes:[]},a={pos:n[1].pos,types:n[1].types,holes:[]};l.push(s,a);for(let l=0;l<i.length;l++)(n=hb(e,t,r,i[l],i[l+1]||e.length,u,h))[0]&&(s.holes.push(s.pos.length),s.pos=hx(s.pos,n[0].pos),o&&(s.types=hx(s.types,n[0].types))),n[1]&&(a.holes.push(a.pos.length),a.pos=hx(a.pos,n[1].pos),o&&(a.types=hx(a.types,n[1].types)))}else{let r={positions:e};o&&(r.edgeTypes=t),i.length&&(r.holeIndices=i),a.push(r)}}return a}function hb(e,t,i,r,n,s,o){let a,l,c,u=(n-r)/i,h=[],d=[],p=[],f=[],g=[],m=hm(e,u-1,i,r),y=Math.sign(8&o?m[1]-s[3]:m[0]-s[2]),v=t&&t[u-1],b=0,_=0;for(let n=0;n<u;n++)a=hm(e,n,i,r,a),l=Math.sign(8&o?a[1]-s[3]:a[0]-s[2]),c=t&&t[r/i+n],l&&y&&y!==l&&(hd(m,a,o,s,g),hf(h,g)&&p.push(v),hf(d,g)&&f.push(v)),l<=0?(hf(h,a)&&p.push(c),b-=l):p.length&&(p[p.length-1]=0),l>=0?(hf(d,a)&&f.push(c),_+=l):f.length&&(f[f.length-1]=0),hg(m,a),y=l,v=c;return[b?{pos:h,types:t&&p}:null,_?{pos:d,types:t&&f}:null]}function h_(e,t,i,r){let n=Math.floor((e[0]-i[0])/t)*t+i[0],s=Math.floor((e[1]-i[1])/t)*t+i[1];return r[0]=n,r[1]=s,r[2]=n+t,r[3]=s+t,r}function hx(e,t){for(let i=0;i<t.length;i++)e.push(t[i]);return e}function hw(e,t,i,r){let n,s=e[0];for(let o=i;o<r;o+=t){let t=(n=e[o])-s;(t>180||t<-180)&&(n-=360*Math.round(t/360)),e[o]=s=n}}function hP(e,t){let i,r=e.length/t;for(let n=0;n<r&&((i=e[n*t])+180)%360==0;n++);let n=-(360*Math.round(i/360));if(0!==n)for(let i=0;i<r;i++)e[i*t]+=n}class hC extends hh{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getGeometryFromBuffer(e){return this.normalize?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?function(e,t,i,r){let n;if(Array.isArray(e[0])){n=Array(e.length*t);for(let i=0;i<e.length;i++)for(let r=0;r<t;r++)n[i*t+r]=e[i][r]||0}else n=e;return i?hy(n,{size:t,gridResolution:i}):r?function(e,t){let{size:i=2,startIndex:r=0,endIndex:n=e.length,normalize:s=!0}=t||{},o=e.slice(r,n);hw(o,i,0,n-r);let a=hy(o,{size:i,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(s)for(let e of a)hP(e,i);return a}(n,{size:t}):n}(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(hS(e)){let t=0;for(let i of e)t+=this.getGeometrySize(i);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(0!==t.geometrySize)if(e&&hS(e))for(let i of e){let e=this.getGeometrySize(i);t.geometrySize=e,this.updateGeometryAttributes(i,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}_updateSegmentTypes(e,t){let i=this.attributes.segmentTypes,r=!!e&&this.isClosed(e),{vertexStart:n,geometrySize:s}=t;i.fill(0,n,n+s),r?(i[n]=4,i[n+s-2]=4):(i[n]+=1,i[n+s-2]+=2),i[n+s-1]=4}_updatePositions(e,t){let{positions:i}=this.attributes;if(!i||!e)return;let{vertexStart:r,geometrySize:n}=t,s=[,,,];for(let t=r,o=0;o<n;t++,o++)this.getPointOnPath(e,o,s),i[3*t]=s[0],i[3*t+1]=s[1],i[3*t+2]=s[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,i=[]){let{positionSize:r}=this;t*r>=e.length&&(t+=1-e.length/r);let n=t*r;return i[0]=e[n],i[1]=e[n+1],i[2]=3===r&&e[n+2]||0,i}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,i=e.length-t;return e[0]===e[i]&&e[1]===e[i+1]&&(2===t||e[2]===e[i+2])}}function hS(e){return Array.isArray(e[0])}let hM=`\
layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,hE={name:"path",vs:hM,fs:hM,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},hL=`\
#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in vec3 instancePickingColors;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
vPathLength = L;
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
dot(offsetFromStartOfPath, dir)
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
void main() {
geometry.pickingColor = instancePickingColors;
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
);
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,hA=`\
#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hT=[0,0,0,255],hk={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:e=>e.path},getColor:{type:"accessor",value:hT},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},hR={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class hO extends uh{getShaders(){return super.getShaders({vs:hL,fs:hA,modules:[rg,nA,hE]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){this.getAttributeManager().addInstanced({vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:hR,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:hR,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:hR,defaultValue:hT},instancePickingColors:{size:4,type:"uint8",accessor:(e,{index:t,target:i})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,i)}}),this.setState({pathTesselator:new hC({fp64:this.use64bitPositions()})})}updateState(e){super.updateState(e);let{props:t,changeFlags:i}=e,r=this.getAttributeManager();if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPath)){let{pathTesselator:e}=this.state,n=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:n.getPath,buffers:n,normalize:!t._pathType,loop:"loop"===t._pathType,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:i.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts}),i.dataChanged||r.invalidateAll()}i.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),r.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===i)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:i,billboard:r,miterLimit:n,widthUnits:s,widthScale:o,widthMinPixels:a,widthMaxPixels:l}=this.props,c=this.state.model,u={jointType:Number(t),capType:Number(i),billboard:r,widthUnits:i2[s],widthScale:o,miterLimit:n,widthMinPixels:a,widthMaxPixels:l};c.shaderInputs.setProps({path:u}),c.draw(this.context.renderPass)}_getModel(){return new cP(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new u_({topology:"triangle-list",attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("segmentTypes")}}hO.defaultProps=hk,hO.layerName="PathLayer";var hI=e.i(54008);function hj(e,t,i={}){return function(e,t={}){return Math.sign(function(e,t={}){let{start:i=0,end:r=e.length,plane:n="xy"}=t,s=t.size||2,o=0,a=hz[n[0]],l=hz[n[1]];for(let t=i,n=r-s;t<r;t+=s)o+=(e[t+a]-e[n+a])*(e[t+l]+e[n+l]),n=t;return o/2}(e,t))}(e,i)!==t&&(function(e,t){let{start:i=0,end:r=e.length,size:n=2}=t,s=(r-i)/n,o=Math.floor(s/2);for(let t=0;t<o;++t){let r=i+t*n,o=i+(s-1-t)*n;for(let t=0;t<n;++t){let i=e[r+t];e[r+t]=e[o+t],e[o+t]=i}}}(e,i),!0)}let hz={x:0,y:1,z:2},hD={isClosed:!0};function hN(e){return"positions"in e?e.positions:e}function hF(e){return"holeIndices"in e?e.holeIndices:null}function hB(e,t,i,r,n){let s,o,a=t,l=i.length;for(let t=0;t<l;t++)for(let n=0;n<r;n++)e[a++]=i[t][n]||0;if(s=i[0],o=i[i.length-1],s[0]!==o[0]||s[1]!==o[1]||s[2]!==o[2])for(let t=0;t<r;t++)e[a++]=i[0][t]||0;return hD.start=t,hD.end=a,hD.size=r,hj(e,n,hD),a}function hU(e,t,i,r,n=0,s,o){let a=(s=s||i.length)-n;if(a<=0)return t;let l=t;for(let t=0;t<a;t++)e[l++]=i[n+t];if(!function(e,t,i,r){for(let n=0;n<t;n++)if(e[i+n]!==e[r-t+n])return!1;return!0}(i,r,n,s))for(let t=0;t<r;t++)e[l++]=i[n+t];return hD.start=t,hD.end=l,hD.size=r,hj(e,o,hD),l}function hV(e,t,i){let r=e.length/3,n=0;for(let s=0;s<r;s++){let o=(s+1)%r;n+=e[3*s+t]*e[3*o+i],n-=e[3*o+t]*e[3*s+i]}return Math.abs(n/2)}function h$(e,t,i,r){let n=e.length/3;for(let s=0;s<n;s++){let n=3*s,o=e[n+0],a=e[n+1],l=e[n+2];e[n+t]=o,e[n+i]=a,e[n+r]=l}}class hW extends hh{constructor(e){const{fp64:t,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:i,size:1}}})}get(e){let{attributes:t}=this;return"indices"===e?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){let t=function(e,t){var i,r=e;if(!Array.isArray(r=r&&r.positions||r)&&!ArrayBuffer.isView(r))throw Error("invalid polygon");let n=[],s=[];if("positions"in e){let{positions:i,holeIndices:r}=e;if(r){let e=0;for(let o=0;o<=r.length;o++)e=hU(n,e,i,t,r[o-1],r[o],0===o?1:-1),s.push(e);return s.pop(),{positions:n,holeIndices:s}}e=i}if(!Array.isArray(e[0]))return hU(n,0,e,t,0,n.length,1),n;if(!((i=e).length>=1&&i[0].length>=2&&Number.isFinite(i[0][0]))){let i=0;for(let[r,o]of e.entries())i=hB(n,i,o,t,0===r?1:-1),s.push(i);return s.pop(),{positions:n,holeIndices:s}}return hB(n,0,e,t,1),n}(e,this.positionSize);return this.opts.resolution?hv(hN(t),hF(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?function(e,t=null,i){let{size:r=2,normalize:n=!0,edgeTypes:s=!1}=i||{};t=t||[];let o=[],a=[],l=0,c=0;for(let n=0;n<=t.length;n++){let s=t[n]||e.length,u=c,h=function(e,t,i,r){let n=-1,s=-1;for(let o=i+1;o<r;o+=t){let t=Math.abs(e[o]);t>n&&(n=t,s=o-1)}return s}(e,r,l,s);for(let t=h;t<s;t++)o[c++]=e[t];for(let t=l;t<h;t++)o[c++]=e[t];hw(o,r,u,c),function(e,t,i,r,n=85.051129){let s=e[i],o=e[r-t];if(Math.abs(s-o)>180){let r=hm(e,0,t,i);r[0]+=360*Math.round((o-s)/360),hf(e,r),r[1]=Math.sign(r[1])*n,hf(e,r),r[0]=s,hf(e,r)}}(o,r,u,c,i?.maxLatitude),l=s,a[n]=c}a.pop();let u=hv(o,a,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:s});if(n)for(let e of u)hP(e.positions,r);return u}(hN(t),hF(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(hG(e)){let t=0;for(let i of e)t+=this.getGeometrySize(i);return t}return hN(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&hG(e))for(let i of e){let e=this.getGeometrySize(i);t.geometrySize=e,this.updateGeometryAttributes(i,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else this._updateIndices(e,t),this._updatePositions(e,t),this._updateVertexValid(e,t)}_updateIndices(e,{geometryIndex:t,vertexStart:i,indexStart:r}){let{attributes:n,indexStarts:s,typedArrayManager:o}=this,a=n.indices;if(!a||!e)return;let l=r,c=function(e,t,i,r){let n=hF(e);n&&(n=n.map(e=>e/t));let s=hN(e),o=r&&3===t;if(i){let e=s.length;s=s.slice();let r=[];for(let n=0;n<e;n+=t){r[0]=s[n],r[1]=s[n+1],o&&(r[2]=s[n+2]);let e=i(r);s[n]=e[0],s[n+1]=e[1],o&&(s[n+2]=e[2])}}if(o){let e=hV(s,0,1),t=hV(s,0,2),r=hV(s,1,2);if(!e&&!t&&!r)return[];e>t&&e>r||(t>r?(i||(s=s.slice()),h$(s,0,2,1)):(i||(s=s.slice()),h$(s,2,0,1)))}return(0,hI.default)(s,n,t)}(e,this.positionSize,this.opts.preproject,this.opts.full3d);a=o.allocate(a,r+c.length,{copy:!0});for(let e=0;e<c.length;e++)a[l++]=c[e]+i;s[t+1]=r+c.length,n.indices=a}_updatePositions(e,{vertexStart:t,geometrySize:i}){let{attributes:{positions:r},positionSize:n}=this;if(!r||!e)return;let s=hN(e);for(let e=t,o=0;o<i;e++,o++){let t=s[o*n],i=s[o*n+1],a=n>2?s[o*n+2]:0;r[3*e]=t,r[3*e+1]=i,r[3*e+2]=a}}_updateVertexValid(e,{vertexStart:t,geometrySize:i}){let{positionSize:r}=this,n=this.attributes.vertexValid,s=e&&hF(e);if(e&&e.edgeTypes?n.set(e.edgeTypes,t):n.fill(1,t,t+i),s)for(let e=0;e<s.length;e++)n[t+s[e]/r-1]=0;n[t+i-1]=0}}function hG(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}let hH=`\
layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,hq={name:"solidPolygon",vs:hH,fs:hH,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},hY=`\
in vec4 fillColors;
in vec4 lineColors;
in vec3 pickingColors;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = pickingColors;
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,hK=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${hY}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,hZ=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${hY}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,hX=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hJ=[0,0,0,255],hQ={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class h0 extends uh{getShaders(e){return super.getShaders({vs:"top"===e?hK:hZ,fs:hX,defines:{RING_WINDING_ORDER_CW:this.props._normalize||"CCW"!==this.props._windingOrder?1:0},modules:[rg,tC,nA,hq]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){let e,{viewport:t}=this.context,{coordinateSystem:i}=this.props,{_full3d:r}=this.props;t.isGeospatial&&"default"===i&&(i="lnglat"),"lnglat"===i&&(e=r?t.projectPosition.bind(t):t.projectFlat.bind(t)),this.setState({numInstances:0,polygonTesselator:new hW({preproject:e,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let n=this.getAttributeManager();n.remove(["instancePickingColors"]),n.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:hQ,accessor:"getPolygon",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},instanceVertexValid:{size:1,type:"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:"dynamic",transition:hQ,accessor:"getElevation"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:hQ,accessor:"getFillColor",defaultValue:hJ},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:hQ,accessor:"getLineColor",defaultValue:hJ},pickingColors:{size:4,type:"uint8",stepMode:"dynamic",accessor:(e,{index:t,target:i})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,i)}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===i)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:i,wireframe:r,elevationScale:n}=this.props,{topModel:s,sideModel:o,wireframeModel:a,polygonTesselator:l}=this.state,c={extruded:!!t,elevationScale:n,isWireframe:!1};a&&r&&(a.setInstanceCount(l.instanceCount-1),a.shaderInputs.setProps({solidPolygon:{...c,isWireframe:!0}}),a.draw(this.context.renderPass)),o&&i&&(o.setInstanceCount(l.instanceCount-1),o.shaderInputs.setProps({solidPolygon:c}),o.draw(this.context.renderPass)),s&&i&&(s.setVertexCount(l.vertexCount),s.shaderInputs.setProps({solidPolygon:c}),s.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:i,changeFlags:r}=e,n=this.getAttributeManager();(r.extensionsChanged||t.filled!==i.filled||t.extruded!==i.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),n.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,r=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let e,t,i,{id:r,filled:n,extruded:s}=this.props;if(n){let t=this.getShaders("top");t.defines.NON_INSTANCED_MODEL=1;let i=this.getAttributeManager().getBufferLayouts({isInstanced:!1});e=new cP(this.context.device,{...t,id:`${r}-top`,topology:"triangle-list",bufferLayout:i,isIndexed:!0,userData:{excludeAttributes:{instanceVertexValid:!0}}})}if(s){let e=this.getAttributeManager().getBufferLayouts({isInstanced:!0});t=new cP(this.context.device,{...this.getShaders("side"),id:`${r}-side`,bufferLayout:e,geometry:new u_({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),i=new cP(this.context.device,{...this.getShaders("side"),id:`${r}-wireframe`,bufferLayout:e,geometry:new u_({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[t,i,e].filter(Boolean),topModel:e,sideModel:t,wireframeModel:i}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get("indices")}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateVertexValid(e){e.value=this.state.polygonTesselator.get("vertexValid")}}h0.defaultProps={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:e=>e.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:hJ},getLineColor:{type:"accessor",value:hJ},material:!0},h0.layerName="SolidPolygonLayer";let h1={circle:{type:uW,props:{filled:"filled",stroked:"stroked",lineWidthMaxPixels:"lineWidthMaxPixels",lineWidthMinPixels:"lineWidthMinPixels",lineWidthScale:"lineWidthScale",lineWidthUnits:"lineWidthUnits",pointRadiusMaxPixels:"radiusMaxPixels",pointRadiusMinPixels:"radiusMinPixels",pointRadiusScale:"radiusScale",pointRadiusUnits:"radiusUnits",pointAntialiasing:"antialiasing",pointBillboard:"billboard",getFillColor:"getFillColor",getLineColor:"getLineColor",getLineWidth:"getLineWidth",getPointRadius:"getRadius"}},icon:{type:uz,props:{iconAtlas:"iconAtlas",iconMapping:"iconMapping",iconSizeMaxPixels:"sizeMaxPixels",iconSizeMinPixels:"sizeMinPixels",iconSizeScale:"sizeScale",iconSizeUnits:"sizeUnits",iconAlphaCutoff:"alphaCutoff",iconBillboard:"billboard",getIcon:"getIcon",getIconAngle:"getAngle",getIconColor:"getColor",getIconPixelOffset:"getPixelOffset",getIconSize:"getSize"}},text:{type:hu,props:{textSizeMaxPixels:"sizeMaxPixels",textSizeMinPixels:"sizeMinPixels",textSizeScale:"sizeScale",textSizeUnits:"sizeUnits",textBackground:"background",textBackgroundPadding:"backgroundPadding",textFontFamily:"fontFamily",textFontWeight:"fontWeight",textLineHeight:"lineHeight",textMaxWidth:"maxWidth",textOutlineColor:"outlineColor",textOutlineWidth:"outlineWidth",textWordBreak:"wordBreak",textCharacterSet:"characterSet",textBillboard:"billboard",textFontSettings:"fontSettings",getText:"getText",getTextAngle:"getAngle",getTextColor:"getColor",getTextPixelOffset:"getPixelOffset",getTextSize:"getSize",getTextAnchor:"getTextAnchor",getTextAlignmentBaseline:"getAlignmentBaseline",getTextBackgroundColor:"getBackgroundColor",getTextBorderColor:"getBorderColor",getTextBorderWidth:"getBorderWidth"}}},h2={type:hO,props:{lineWidthUnits:"widthUnits",lineWidthScale:"widthScale",lineWidthMinPixels:"widthMinPixels",lineWidthMaxPixels:"widthMaxPixels",lineJointRounded:"jointRounded",lineCapRounded:"capRounded",lineMiterLimit:"miterLimit",lineBillboard:"billboard",getLineColor:"getColor",getLineWidth:"getWidth"}},h3={type:h0,props:{extruded:"extruded",filled:"filled",wireframe:"wireframe",elevationScale:"elevationScale",material:"material",_full3d:"_full3d",getElevation:"getElevation",getFillColor:"getFillColor",getLineColor:"getLineColor"}};function h4({type:e,props:t}){let i={};for(let r in t)i[r]=e.defaultProps[t[r]];return i}function h5(e,t){let{transitions:i,updateTriggers:r}=e.props,n={updateTriggers:{},transitions:i&&{getPosition:i.geometry}};for(let s in t){let o=t[s],a=e.props[s];s.startsWith("get")&&(a=e.getSubLayerAccessor(a),n.updateTriggers[o]=r[s],i&&(n.transitions[o]=i[s])),n[o]=a}return n}function h6(e,t,i={}){let r={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:n=0,endRow:s=e.length}=i;for(let i=n;i<s;i++){let n=e[i],{geometry:s}=n;if(s)if("GeometryCollection"===s.type){ir.assert(Array.isArray(s.geometries),"GeoJSON does not have geometries array");let{geometries:e}=s;for(let s=0;s<e.length;s++)h8(e[s],r,t,n,i)}else h8(s,r,t,n,i)}return r}function h8(e,t,i,r,n){let{type:s,coordinates:o}=e,{pointFeatures:a,lineFeatures:l,polygonFeatures:c,polygonOutlineFeatures:u}=t;if(!function(e,t){let i=h9[e];for(ir.assert(i,`Unknown GeoJSON type ${e}`);t&&--i>0;)t=t[0];return t&&Number.isFinite(t[0])}(s,o))return void ir.warn(`${s} coordinates are malformed`)();switch(s){case"Point":a.push(i({geometry:e},r,n));break;case"MultiPoint":o.forEach(e=>{a.push(i({geometry:{type:"Point",coordinates:e}},r,n))});break;case"LineString":l.push(i({geometry:e},r,n));break;case"MultiLineString":o.forEach(e=>{l.push(i({geometry:{type:"LineString",coordinates:e}},r,n))});break;case"Polygon":c.push(i({geometry:e},r,n)),o.forEach(e=>{u.push(i({geometry:{type:"LineString",coordinates:e}},r,n))});break;case"MultiPolygon":o.forEach(e=>{c.push(i({geometry:{type:"Polygon",coordinates:e}},r,n)),e.forEach(e=>{u.push(i({geometry:{type:"LineString",coordinates:e}},r,n))})})}}let h9={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function h7(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function de(e){return e.geometry.coordinates}let dt=["points","linestrings","polygons"],di={...h4(h1.circle),...h4(h1.icon),...h4(h1.text),...h4(h2),...h4(h3),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:"object",value:null},iconMapping:{type:"object",value:{}},getIcon:{type:"accessor",value:e=>e.properties.icon},getText:{type:"accessor",value:e=>e.properties.text},pointType:"circle",getRadius:{deprecatedFor:"getPointRadius"}};class dr extends ub{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;let{data:i}=this.props,r=i&&"points"in i&&"polygons"in i&&"lines"in i;this.setState({binary:r}),r?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){let i=function(e,t){let i=h7(),{points:r,lines:n,polygons:s}=e,o=function(e,t){let i={points:null,lines:null,polygons:null};for(let r in i){let n=e[r].globalFeatureIds.value;i[r]=new Uint8ClampedArray(4*n.length);let s=[];for(let e=0;e<n.length;e++)t(n[e],s),i[r][4*e+0]=s[0],i[r][4*e+1]=s[1],i[r][4*e+2]=s[2],i[r][4*e+3]=255}return i}(e,t);i.points.data={length:r.positions.value.length/r.positions.size,attributes:{...r.attributes,getPosition:r.positions,instancePickingColors:{size:4,value:o.points}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},i.lines.data={length:n.pathIndices.value.length-1,startIndices:n.pathIndices.value,attributes:{...n.attributes,getPath:n.positions,instancePickingColors:{size:4,value:o.lines}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},i.lines._pathType="open";let a=Array(s.positions.value.length/s.positions.size).fill(1);for(let e of s.primitivePolygonIndices.value)a[e-1]=0;return i.polygons.data={length:s.polygonIndices.value.length-1,startIndices:s.polygonIndices.value,attributes:{...s.attributes,getPolygon:s.positions,instanceVertexValid:{size:1,value:new Uint16Array(a)},pickingColors:{size:4,value:o.polygons}},properties:s.properties,numericProps:s.numericProps,featureIds:s.featureIds},i.polygons._normalize=!1,s.triangles&&(i.polygons.data.attributes.indices=s.triangles.value),i.polygonsOutline.data={length:s.primitivePolygonIndices.value.length-1,startIndices:s.primitivePolygonIndices.value,attributes:{...s.attributes,getPath:s.positions,instancePickingColors:{size:4,value:o.polygons}},properties:s.properties,numericProps:s.numericProps,featureIds:s.featureIds},i.polygonsOutline._pathType="open",i}(e.data,this.encodePickingColor);this.setState({layerProps:i})}_updateStateJSON({props:e,changeFlags:t}){let i=function(e){if(Array.isArray(e))return e;switch(ir.assert(e.type,"GeoJSON does not have type"),e.type){case"Feature":return[e];case"FeatureCollection":return ir.assert(Array.isArray(e.features),"GeoJSON does not have features array"),e.features;default:return[{geometry:e}]}}(e.data),r=this.getSubLayerRow.bind(this),n={},s={};if(Array.isArray(t.dataChanged)){let e=this.state.features;for(let t in e)n[t]=e[t].slice(),s[t]=[];for(let o of t.dataChanged){let t=h6(i,r,o);for(let i in e)s[i].push(function({data:e,getIndex:t,dataRange:i,replace:r}){let{startRow:n=0,endRow:s=1/0}=i,o=e.length,a=o,l=o;for(let i=0;i<o;i++){let r=t(e[i]);if(a>i&&r>=n&&(a=i),r>=s){l=i;break}}let c=a,u=l-a!==r.length?e.slice(l):void 0;for(let t=0;t<r.length;t++)e[c++]=r[t];if(u){for(let t=0;t<u.length;t++)e[c++]=u[t];e.length=c}return{startRow:a,endRow:a+r.length}}({data:n[i],getIndex:e=>e.__source.index,dataRange:o,replace:t[i]}))}}else n=h6(i,r);let o=function(e,t){let i=h7(),{pointFeatures:r,lineFeatures:n,polygonFeatures:s,polygonOutlineFeatures:o}=e;return i.points.data=r,i.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),i.points.getPosition=de,i.lines.data=n,i.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),i.lines.getPath=de,i.polygons.data=s,i.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),i.polygons.getPolygon=de,i.polygonsOutline.data=o,i.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),i.polygonsOutline.getPath=de,i}(n,s);this.setState({features:n,featuresDiff:s,layerProps:o})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i,sourceLayer:r}=t;return t.featureType=dt.find(e=>r.id.startsWith(`${this.id}-${e}-`)),i>=0&&r.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[i]),t}_updateAutoHighlight(e){let t=`${this.id}-points-`,i="points"===e.featureType;for(let r of this.getSubLayers())r.id.startsWith(t)===i&&r.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:t}=this.props,{layerProps:i}=this.state,r="polygons-fill",n=this.shouldRenderSubLayer(r,i.polygons?.data)&&this.getSubLayerClass(r,h3.type);if(n){let s=h5(this,h3.props),o=e&&t;return o||delete s.getLineColor,s.updateTriggers.lineColors=o,new n(s,this.getSubLayerProps({id:r,updateTriggers:s.updateTriggers}),i.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:t}=this.props,{layerProps:i}=this.state,r="polygons-stroke",n="linestrings",s=!e&&t&&this.shouldRenderSubLayer(r,i.polygonsOutline?.data)&&this.getSubLayerClass(r,h2.type),o=this.shouldRenderSubLayer(n,i.lines?.data)&&this.getSubLayerClass(n,h2.type);if(s||o){let e=h5(this,h2.props);return[s&&new s(e,this.getSubLayerProps({id:r,updateTriggers:e.updateTriggers}),i.polygonsOutline),o&&new o(e,this.getSubLayerProps({id:n,updateTriggers:e.updateTriggers}),i.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:t,binary:i}=this.state,{highlightedObjectIndex:r}=this.props;!i&&Number.isFinite(r)&&(r=t.points.data.findIndex(e=>e.__source.index===r));let n=new Set(e.split("+")),s=[];for(let e of n){let n=`points-${e}`,o=h1[e],a=o&&this.shouldRenderSubLayer(n,t.points?.data)&&this.getSubLayerClass(n,o.type);if(a){let l=h5(this,o.props),c=t.points;if("text"===e&&i){let{instancePickingColors:e,...t}=c.data.attributes;c={...c,data:{...c.data,attributes:t}}}s.push(new a(l,this.getSubLayerProps({id:n,updateTriggers:l.updateTriggers,highlightedObjectIndex:r}),c))}}return s}renderLayers(){let{extruded:e}=this.props,t=this._renderPolygonLayer();return[!e&&t,this._renderLineLayers(),this._renderPointLayers(),e&&t]}getSubLayerAccessor(e){let{binary:t}=this.state;return t&&"function"==typeof e?(t,i)=>{let{data:r,index:n}=i;return e(function(e,t){if(!e)return null;let i="startIndices"in e?e.startIndices[t]:t,r=e.featureIds.value[i];return -1!==i?function(e,t,i){let r={properties:{...e.properties[t]}};for(let t in e.numericProps)r.properties[t]=e.numericProps[t].value[i];return r}(e,r,i):null}(r,n),i)}:super.getSubLayerAccessor(e)}}function dn({topology:e}){let t=[new dr({id:"railway-network",data:(0,_.useMemo)(()=>{if(!e)return{type:"FeatureCollection",features:[]};let t=[];return e.nodes&&e.nodes.forEach(e=>{e.geometry&&t.push({type:"Feature",geometry:e.geometry,properties:{...e,layer:"node"}})}),e.sections&&e.sections.forEach(e=>{e.geometry&&t.push({type:"Feature",geometry:e.geometry,properties:{...e,layer:"section"}})}),e.platforms&&e.platforms.forEach(e=>{e.geometry&&t.push({type:"Feature",geometry:e.geometry,properties:{...e,layer:"platform"}})}),{type:"FeatureCollection",features:t}},[e]),pickable:!0,stroked:!0,filled:!0,getLineColor:e=>"section"===e.properties.layer?[99,102,241,200]:[255,255,255,50],getFillColor:e=>"node"===e.properties.layer?[244,63,94,255]:"platform"===e.properties.layer?[16,185,129,255]:[148,163,184,150],getLineWidth:e=>"section"===e.properties.layer?4:1,getPointRadius:e=>"node"===e.properties.layer?250:"platform"===e.properties.layer?120:100,lineWidthMinPixels:2,pointRadiusMinPixels:4})];return(0,b.jsx)("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:500,background:"#04070d",backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",backgroundSize:"40px 40px"},children:(0,b.jsxs)(uy,{initialViewState:{longitude:80.9,latitude:26.8,zoom:10,pitch:0,bearing:0},controller:!0,layers:t,views:new o8({id:"map",repeat:!0}),children:[(0,b.jsxs)("div",{style:{position:"absolute",top:20,left:20,background:"var(--gati-glass-bg)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid var(--gati-border)",borderRadius:12,padding:"12px 16px",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",gap:4},children:[(0,b.jsxs)("h2",{style:{margin:0,fontSize:14,fontWeight:700,color:"#f1f5f9",display:"flex",alignItems:"center",gap:8},children:[(0,b.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:"#10b981",boxShadow:"0 0 10px #10b981"}}),"Live Topology"]}),(0,b.jsx)("span",{style:{fontSize:11,color:"#94a3b8"},children:"Network rendering active"})]}),(0,b.jsxs)("div",{style:{position:"absolute",top:20,right:20,background:"var(--gati-glass-bg)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid var(--gati-border)",borderRadius:12,padding:"16px",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",display:"flex",gap:24},children:[(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,b.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"#94a3b8",letterSpacing:"0.05em"},children:"ACTIVE TRAINS"}),(0,b.jsx)("span",{style:{fontSize:20,fontWeight:700,color:"#e2e8f0",fontFamily:'"JetBrains Mono", monospace'},children:"42"})]}),(0,b.jsx)("div",{style:{width:1,background:"rgba(255,255,255,0.1)"}}),(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,b.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"#94a3b8",letterSpacing:"0.05em"},children:"NETWORK LOAD"}),(0,b.jsx)("span",{style:{fontSize:20,fontWeight:700,color:"#818cf8",fontFamily:'"JetBrains Mono", monospace'},children:"78%"})]}),(0,b.jsx)("div",{style:{width:1,background:"rgba(255,255,255,0.1)"}}),(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,b.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"#94a3b8",letterSpacing:"0.05em"},children:"ALERTS"}),(0,b.jsx)("span",{style:{fontSize:20,fontWeight:700,color:"#f59e0b",fontFamily:'"JetBrains Mono", monospace'},children:"3"})]})]})]})})}dr.layerName="GeoJsonLayer",dr.defaultProps=di;let ds=(...e)=>e.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim(),da=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var dl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let dc=(0,_.createContext)({}),du=(0,_.forwardRef)(({color:e,size:t,strokeWidth:i,absoluteStrokeWidth:r,className:n="",children:s,iconNode:o,...a},l)=>{let{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:h=!1,color:d="currentColor",className:p=""}=(0,_.useContext)(dc)??{},f=r??h?24*Number(i??u)/Number(t??c):i??u;return(0,_.createElement)("svg",{ref:l,...dl,width:t??c??dl.width,height:t??c??dl.height,stroke:e??d,strokeWidth:f,className:ds("lucide",p,n),...!s&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(a)&&{"aria-hidden":"true"},...a},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(s)?s:[s]])}),dh=(e,t)=>{let i=(0,_.forwardRef)(({className:i,...r},n)=>(0,_.createElement)(du,{ref:n,iconNode:t,className:ds(`lucide-${da(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...r}));return i.displayName=da(e),i},dd=dh("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),dp=dh("zap",[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]),df=dh("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]),dg=dh("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]),dm=dh("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),dy=dh("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]]),dv=dh("calendar",[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]),db=({color:e})=>(0,b.jsxs)("svg",{width:"100%",height:"24",viewBox:"0 0 100 24",preserveAspectRatio:"none",children:[(0,b.jsx)("path",{d:"M0 20 Q 10 10, 20 15 T 40 10 T 60 18 T 80 8 T 100 12",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M0 20 Q 10 10, 20 15 T 40 10 T 60 18 T 80 8 T 100 12 L 100 24 L 0 24 Z",fill:`url(#gradient-${e.replace("#","")})`,opacity:"0.2"}),(0,b.jsx)("defs",{children:(0,b.jsxs)("linearGradient",{id:`gradient-${e.replace("#","")}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,b.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:"1"}),(0,b.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]})})]});function d_({status:e}){let t={bg:"rgba(255,255,255,0.1)",border:"rgba(255,255,255,0.2)",color:"#cbd5e1"};return e.includes("ACTIVE")||e.includes("APPROVED")?t={bg:"rgba(59,130,246,0.15)",border:"rgba(59,130,246,0.3)",color:"#60a5fa"}:e.includes("VALIDATING")||e.includes("SCHEDULED")?t={bg:"rgba(245,158,11,0.15)",border:"rgba(245,158,11,0.3)",color:"#fbbf24"}:e.includes("LIVE")&&(t={bg:"rgba(16,185,129,0.15)",border:"rgba(16,185,129,0.3)",color:"#34d399"}),(0,b.jsx)("span",{style:{fontSize:10,fontWeight:700,padding:"4px 10px",borderRadius:12,background:t.bg,border:`1px solid ${t.border}`,color:t.color,letterSpacing:"0.06em",textTransform:"uppercase"},children:e})}function dx({plan:e,isDemo:t=!1}){return(0,b.jsxs)("div",{className:"animate-slide-up",style:{background:"rgba(22,27,34,0.4)",backdropFilter:"blur(16px)",border:t?"1px solid rgba(99,102,241,0.4)":"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:20,display:"flex",flexDirection:"column",gap:16,boxShadow:t?"0 0 24px rgba(99,102,241,0.15)":"none",transition:"all 0.2s ease",cursor:"pointer"},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12},children:[(0,b.jsxs)("div",{style:{minWidth:0,flex:1},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[(0,b.jsx)(dp,{size:14,color:t?"#818cf8":"#94a3b8",style:{flexShrink:0}}),(0,b.jsx)("h3",{style:{margin:0,fontSize:16,fontWeight:700,color:"#f1f5f9",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.id?.length>12?`PL-${e.id.substring(0,8)}`:e.id})]}),(0,b.jsxs)("div",{style:{fontSize:11,color:"#64748b",letterSpacing:"0.05em"},children:[e.items?.length||0," SCHEDULED BLOCKS"]})]}),(0,b.jsx)(d_,{status:e.status||"SCHEDULED"})]}),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,padding:"12px 0",borderTop:"1px solid rgba(255,255,255,0.06)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{fontSize:10,color:"#475569",textTransform:"uppercase",marginBottom:4,display:"flex",alignItems:"center",gap:4},children:[(0,b.jsx)(dm,{size:10})," Maintenance Zone"]}),(0,b.jsx)("div",{style:{fontSize:13,color:"#cbd5e1",fontWeight:500},children:e.route||"North-West Corridor"})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{fontSize:10,color:"#475569",textTransform:"uppercase",marginBottom:4,display:"flex",alignItems:"center",gap:4},children:[(0,b.jsx)(dg,{size:10})," Downtime Window"]}),(0,b.jsx)("div",{style:{fontSize:13,color:"#cbd5e1",fontWeight:500},children:e.eta||"3.5 Hours"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{fontSize:10,color:"#475569",textTransform:"uppercase",marginBottom:8,display:"flex",alignItems:"center",gap:4},children:[(0,b.jsx)(df,{size:10})," Asset Availability Impact"]}),(0,b.jsx)(db,{color:t?"#6366f1":"#475569"})]})]})}function dw({plan:e,onCreateNew:t}){if(!e)return null;let i=[{...e,status:"VALIDATING",route:"Eastern Mainline",eta:"4.0 Hours"},{id:"PL-804",status:"ACTIVE",items:[1,2,3,4],route:"South Hub Section",eta:"2.5 Hours"},{id:"PL-801",status:"APPROVED",items:[1,2],route:"Central Depot",eta:"6.0 Hours"}];return(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:24,height:"100%"},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexShrink:0},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{style:{margin:0,fontSize:18,fontWeight:700,color:"#f1f5f9"},children:"Maintenance Block Plans"}),(0,b.jsx)("p",{style:{margin:"4px 0 12px",fontSize:13,color:"#64748b"},children:"AI-Optimized schedules integrating TMS, SMMS, and TDMS defects"}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 10px",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,width:"fit-content"},children:[(0,b.jsx)(dy,{size:12,color:"#10b981"}),(0,b.jsx)("span",{style:{fontSize:11,color:"#34d399",fontWeight:700,letterSpacing:"0.04em"},children:"LIVE DATA SYNCED"})]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,b.jsxs)("div",{style:{display:"flex",background:"rgba(15,23,42,0.6)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:4},children:[(0,b.jsxs)("button",{style:{padding:"6px 12px",background:"rgba(99,102,241,0.2)",color:"#818cf8",border:"none",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:6},children:[(0,b.jsx)(dv,{size:12})," Weekly Horizon"]}),(0,b.jsx)("button",{style:{padding:"6px 12px",background:"transparent",color:"#64748b",border:"none",borderRadius:6,fontSize:12,fontWeight:500,cursor:"pointer",transition:"all 0.2s"},onMouseOver:e=>e.currentTarget.style.color="#f8fafc",onMouseOut:e=>e.currentTarget.style.color="#64748b",children:"Monthly Horizon"})]}),(0,b.jsxs)("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:8,background:"rgba(99,102,241,0.15)",border:"1px solid rgba(99,102,241,0.3)",color:"#818cf8",fontWeight:600,fontSize:13,cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 4px 12px rgba(99,102,241,0.1)"},onMouseOver:e=>e.currentTarget.style.background="rgba(99,102,241,0.25)",onMouseOut:e=>e.currentTarget.style.background="rgba(99,102,241,0.15)",children:[(0,b.jsx)(dd,{size:16})," Generate New Plan"]})]})]}),(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:16,overflow:"auto",paddingBottom:16},children:i.map((e,t)=>(0,b.jsx)(dx,{plan:e,isDemo:0===t},e.id))})]})}let dP=dh("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]),dC=dh("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),dS=dh("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);function dM({explanation:e,safetyResult:t}){return e?(0,b.jsxs)("div",{className:"animate-slide-up",style:{background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,padding:24,height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:24,flexShrink:0},children:[(0,b.jsx)("div",{style:{width:36,height:36,borderRadius:10,background:"rgba(99,102,241,0.12)",border:"1px solid rgba(99,102,241,0.25)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 16px rgba(99,102,241,0.15)"},children:(0,b.jsx)(dP,{size:18,color:"#818cf8"})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{style:{margin:0,fontSize:16,fontWeight:700,color:"#f1f5f9"},children:"Validation Detail"}),(0,b.jsx)("p",{style:{margin:0,fontSize:12,color:"#64748b"},children:"AI Analysis & Technical Payload"})]})]}),(0,b.jsxs)("div",{style:{flex:1,overflow:"auto",display:"flex",flexDirection:"column",gap:24,paddingRight:4},children:[(0,b.jsxs)("div",{style:{background:"linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.03))",border:"1px solid rgba(99,102,241,0.2)",borderLeft:"4px solid #6366f1",borderRadius:8,padding:20,fontSize:14,color:"#c7d2fe",lineHeight:1.7,boxShadow:"inset 0 0 20px rgba(99,102,241,0.05), 0 4px 12px rgba(0,0,0,0.15)"},children:[(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:(0,b.jsx)("span",{style:{fontSize:11,fontWeight:700,color:"#818cf8",letterSpacing:"0.05em"},children:"AI DIAGNOSTIC REASONING"})}),(0,b.jsx)("div",{style:{marginBottom:16*!!e.root_cause},children:e.decision_summary||"No decision summary provided."}),e.root_cause&&(0,b.jsxs)("div",{style:{paddingLeft:12,borderLeft:"2px solid rgba(99,102,241,0.3)",color:"#a5b4fc",fontSize:13,marginBottom:12*!!e.synergy},children:[(0,b.jsx)("strong",{children:"Root Cause:"})," ",e.root_cause]}),e.synergy&&(0,b.jsxs)("div",{style:{paddingLeft:12,borderLeft:"2px solid rgba(16,185,129,0.3)",color:"#6ee7b7",fontSize:13},children:[(0,b.jsx)("strong",{children:"Synergy:"})," ",e.synergy]}),e.safety_summary&&(0,b.jsxs)("div",{style:{marginTop:16,padding:"10px 14px",background:"rgba(16,185,129,0.08)",borderRadius:8,border:"1px solid rgba(16,185,129,0.2)",color:"#6ee7b7",fontSize:13,display:"flex",alignItems:"flex-start",gap:8},children:[(0,b.jsx)(dS,{size:16,color:"#10b981",style:{flexShrink:0,marginTop:2}}),(0,b.jsx)("span",{children:e.safety_summary})]})]}),t&&t.violations&&t.violations.length>0&&(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:10},children:[(0,b.jsx)(dC,{size:14,color:"#94a3b8"}),(0,b.jsx)("span",{style:{fontSize:11,fontWeight:700,color:"#94a3b8",letterSpacing:"0.05em"},children:"TECHNICAL FINDINGS"})]}),(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:t.violations.map((e,t)=>{let i="HIGH"===e.severity;return(0,b.jsxs)("div",{style:{background:i?"rgba(244,63,94,0.05)":"rgba(245,158,11,0.05)",border:`1px solid ${i?"rgba(244,63,94,0.2)":"rgba(245,158,11,0.2)"}`,borderRadius:8,padding:"12px 14px",display:"flex",flexDirection:"column",gap:6},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,b.jsx)(dS,{size:14,color:i?"#f87171":"#fbbf24"}),(0,b.jsx)("span",{style:{fontWeight:600,color:"#e2e8f0",fontSize:13},children:e.rule_id})]}),(0,b.jsx)("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:10,background:i?"rgba(244,63,94,0.15)":"rgba(245,158,11,0.15)",color:i?"#f87171":"#fbbf24",letterSpacing:"0.05em"},children:e.severity})]}),(0,b.jsx)("div",{style:{color:"#94a3b8",fontSize:12,lineHeight:1.5,paddingLeft:22},children:e.explanation}),e.plan_item_id&&(0,b.jsxs)("div",{style:{fontSize:11,color:"#64748b",paddingLeft:22,marginTop:4},children:["Affected Item: ",(0,b.jsx)("span",{style:{color:"#a5b4fc"},children:e.plan_item_id})]})]},t)})})]})]})]}):(0,b.jsx)("div",{style:{background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:"#475569",fontSize:13},children:"No explanation available"})}let dE=dh("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),dL=dh("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),dA=dh("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),dT=dh("clipboard-list",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),dk=dh("circle-play",[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),dR=dh("octagon-alert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]),dO=dh("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),dI={PLAN_GENERATED:{icon:dp,color:"#60a5fa",bg:"rgba(96,165,250,0.08)",border:"rgba(96,165,250,0.25)",label:"Plan Generated"},PLAN_SAFETY_VALIDATED:{icon:dE,color:"#34d399",bg:"rgba(52,211,153,0.08)",border:"rgba(52,211,153,0.25)",label:"Safety Validated"},PLAN_APPROVED:{icon:dy,color:"#10b981",bg:"rgba(16,185,129,0.08)",border:"rgba(16,185,129,0.30)",label:"Plan Approved"},PLAN_REJECTED:{icon:dL,color:"#f87171",bg:"rgba(248,113,113,0.08)",border:"rgba(248,113,113,0.25)",label:"Plan Rejected"},REOPTIMIZATION_TRIGGERED:{icon:dA,color:"#fbbf24",bg:"rgba(251,191,36,0.08)",border:"rgba(251,191,36,0.25)",label:"Re-optimization Triggered"},EXECUTION_STARTED:{icon:dk,color:"#818cf8",bg:"rgba(129,140,248,0.08)",border:"rgba(129,140,248,0.25)",label:"Execution Started"},OVERRUN_TRIGGERED:{icon:dR,color:"#f97316",bg:"rgba(249,115,22,0.08)",border:"rgba(249,115,22,0.25)",label:"Overrun Injected"},MACHINE_FAILURE_TRIGGERED:{icon:dR,color:"#ef4444",bg:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.25)",label:"Machine Failure Injected"},EXECUTION_RESET:{icon:dO,color:"#94a3b8",bg:"rgba(148,163,184,0.08)",border:"rgba(148,163,184,0.25)",label:"Execution Reset"}},dj={icon:dT,color:"#94a3b8",bg:"rgba(148,163,184,0.06)",border:"rgba(148,163,184,0.15)",label:"Event"};function dz(){return(0,b.jsxs)("div",{style:{display:"flex",gap:14,alignItems:"flex-start"},children:[(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,b.jsx)("div",{style:{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.05)",animation:"pulse-dot 1.5s ease-in-out infinite"}})}),(0,b.jsx)("div",{style:{flex:1,background:"rgba(255,255,255,0.03)",borderRadius:10,height:64,animation:"pulse-dot 1.5s ease-in-out infinite"}})]})}function dD({fetcher:e}){let{data:t,error:i,isLoading:r}=eg("/audit/",e,{refreshInterval:3e3});return r?(0,b.jsxs)("div",{style:{background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,padding:"24px 24px",height:"100%",display:"flex",flexDirection:"column"},children:[(0,b.jsx)("div",{style:{marginBottom:24,display:"flex",alignItems:"center",gap:10},children:(0,b.jsx)("div",{style:{width:160,height:20,background:"rgba(255,255,255,0.05)",borderRadius:6}})}),(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,b.jsx)(dz,{},t))})]}):t&&0!==t.length?(0,b.jsxs)("div",{style:{background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,padding:24,height:"100%",display:"flex",flexDirection:"column"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24},children:[(0,b.jsx)("h3",{style:{margin:0,fontSize:16,fontWeight:700,color:"#f1f5f9"},children:"Decision Audit Trail"}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,b.jsx)(dg,{size:12,color:"#64748b"}),(0,b.jsxs)("span",{style:{fontSize:11,fontWeight:600,color:"#94a3b8",background:"rgba(255,255,255,0.04)",padding:"4px 12px",borderRadius:12,border:"1px solid var(--gati-border)"},children:[t.length," EVENT",1!==t.length?"S":""]})]})]}),(0,b.jsx)("div",{style:{flex:1,overflow:"auto",paddingRight:8},children:(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:0},children:t.map((e,i)=>{let r=dI[e.action]||dj,n=r.icon,{date:s,time:o}=function(e){if(!e)return{date:"—",time:"—"};let t=new Date(e);return isNaN(t.getTime())?{date:"—",time:"—"}:{date:t.toLocaleDateString([],{month:"short",day:"numeric"}),time:t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}}(e.timestamp),a=i===t.length-1;return(0,b.jsxs)("div",{className:`animate-slide-left stagger-${Math.min(i+1,5)}`,style:{display:"flex",gap:16,alignItems:"flex-start",position:"relative"},children:[(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,paddingTop:2},children:[(0,b.jsx)("div",{style:{width:36,height:36,borderRadius:"50%",background:r.bg,border:`1px solid ${r.border}`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 0 16px ${r.bg}, inset 0 0 8px rgba(255,255,255,0.1)`},children:(0,b.jsx)(n,{size:16,color:r.color})}),!a&&(0,b.jsx)("div",{style:{width:2,flex:1,minHeight:32,marginTop:4,marginBottom:4,background:"linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(99,102,241,0.05))"}})]}),(0,b.jsxs)("div",{style:{flex:1,marginBottom:16*!a,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderLeft:`3px solid ${r.color}`,borderRadius:10,padding:"14px 18px",transition:"border-color 0.2s",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[(0,b.jsx)("span",{style:{fontSize:14,fontWeight:700,color:r.color,letterSpacing:"0.03em"},children:r.label}),(0,b.jsxs)("div",{style:{textAlign:"right"},children:[(0,b.jsx)("div",{style:{fontSize:11,color:"#64748b"},children:s}),(0,b.jsx)("div",{style:{fontSize:11,color:"#94a3b8",fontVariantNumeric:"tabular-nums",fontFamily:'"JetBrains Mono", monospace'},children:o})]})]}),(0,b.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 20px",fontSize:12},children:[e.actor&&(0,b.jsxs)("span",{style:{color:"#64748b"},children:["Actor: ",(0,b.jsx)("span",{style:{color:"#e2e8f0",fontWeight:600},children:e.actor})]}),e.result&&(0,b.jsxs)("span",{style:{color:"#64748b"},children:["Result: ",(0,b.jsx)("span",{style:{color:"#e2e8f0",fontWeight:600},children:e.result})]})]}),e.reason&&(0,b.jsx)("div",{style:{marginTop:10,padding:"8px 12px",background:"rgba(255,255,255,0.03)",borderLeft:"2px solid rgba(255,255,255,0.1)",borderRadius:"0 8px 8px 0",fontSize:12,color:"#cbd5e1",lineHeight:1.6},children:e.reason})]})]},i)})})})]}):(0,b.jsxs)("div",{style:{background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:12},children:[(0,b.jsx)("div",{style:{width:56,height:56,borderRadius:"50%",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(dT,{size:24,color:"rgba(99,102,241,0.5)"})}),(0,b.jsx)("p",{style:{margin:0,color:"#64748b",fontSize:14},children:"No audit events yet"}),(0,b.jsx)("p",{style:{margin:0,color:"#475569",fontSize:12},children:"Run the demo flow to generate audit logs"})]})}let dN=dh("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),dF=dh("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),dB=dh("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),dU=dh("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function dV({planId:e,onApprove:t,onReject:i}){let[r,n]=(0,_.useState)(null),s=async()=>{n("approve");try{await t(e)}finally{n(null)}},o=async()=>{n("reject");try{await i(e)}finally{n(null)}};return(0,b.jsxs)("div",{className:"animate-slide-up",style:{borderRadius:12,border:"1px solid rgba(245,158,11,0.25)",background:"linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(13,17,23,0.9) 60%)",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexShrink:0},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14},children:[(0,b.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",background:"rgba(245,158,11,0.1)",border:"1px solid rgba(245,158,11,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,animation:"pulse-dot 2s ease-in-out infinite"},children:(0,b.jsx)(dB,{size:18,color:"#f59e0b"})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{style:{margin:0,fontSize:13,fontWeight:700,color:"#fcd34d",letterSpacing:"-0.1px"},children:"Controller Decision Required"}),(0,b.jsx)("p",{style:{margin:"3px 0 0",fontSize:12,color:"#64748b",lineHeight:1.4},children:"Review plan, safety validation, and AI explanations before approving."})]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[(0,b.jsxs)("button",{onClick:o,disabled:null!==r,style:{padding:"9px 18px",borderRadius:8,border:"1px solid rgba(244,63,94,0.35)",background:"rgba(244,63,94,0.06)",color:"#f87171",fontWeight:600,fontSize:13,cursor:null!==r?"not-allowed":"pointer",display:"flex",alignItems:"center",gap:7,transition:"all 0.2s ease",opacity:null!==r?.5:1},onMouseEnter:e=>{null===r&&(e.currentTarget.style.background="rgba(244,63,94,0.12)",e.currentTarget.style.borderColor="rgba(244,63,94,0.5)",e.currentTarget.style.boxShadow="0 0 16px rgba(244,63,94,0.15)")},onMouseLeave:e=>{e.currentTarget.style.background="rgba(244,63,94,0.06)",e.currentTarget.style.borderColor="rgba(244,63,94,0.35)",e.currentTarget.style.boxShadow="none"},children:["reject"===r?(0,b.jsx)(dF,{size:15,style:{animation:"spin 1s linear infinite"}}):(0,b.jsx)(dN,{size:15}),"Reject"]}),(0,b.jsxs)("button",{onClick:s,disabled:null!==r,className:"btn-shimmer",style:{padding:"9px 20px",borderRadius:8,border:"1px solid rgba(16,185,129,0.4)",background:"linear-gradient(135deg, #059669, #10b981)",color:"white",fontWeight:700,fontSize:13,cursor:null!==r?"not-allowed":"pointer",display:"flex",alignItems:"center",gap:7,boxShadow:"0 4px 20px rgba(16,185,129,0.3)",transition:"all 0.2s ease",opacity:null!==r?.6:1,position:"relative"},onMouseEnter:e=>{null===r&&(e.currentTarget.style.boxShadow="0 4px 28px rgba(16,185,129,0.45)",e.currentTarget.style.transform="translateY(-1px)")},onMouseLeave:e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(16,185,129,0.3)",e.currentTarget.style.transform="translateY(0)"},children:["approve"===r?(0,b.jsx)(dF,{size:15,style:{animation:"spin 1s linear infinite"}}):(0,b.jsx)(dU,{size:15}),"Approve & Execute"]})]})]})}let d$=dh("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),dW=dh("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);function dG({status:e}){let t="RUNNING"===e?{bg:"rgba(16,185,129,0.12)",border:"rgba(16,185,129,0.3)",color:"#34d399",pulse:!0}:"AWAITING_APPROVAL"===e?{bg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.3)",color:"#fbbf24",pulse:!0}:{bg:"rgba(148,163,184,0.08)",border:"rgba(148,163,184,0.2)",color:"#94a3b8",pulse:!1};return(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 14px",borderRadius:20,background:t.bg,border:`1px solid ${t.border}`,color:t.color,fontWeight:700,fontSize:11,letterSpacing:"0.08em",boxShadow:`0 0 12px ${t.bg}`},children:[(0,b.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:t.color,...t.pulse?{animation:"pulse-dot 1.5s ease-in-out infinite"}:{}}}),e]})}function dH({t:e,onOverrun:t,onFail:i,disabled:r}){let n=Math.min(Math.max(e.progress_percent||0,0),100),s="OVERRUN"===e.actual_status,o="FAILED"===e.actual_status,a=o?"#f43f5e":s?"#f59e0b":"#10b981";return(0,b.jsxs)("div",{style:{background:"rgba(255,255,255,0.02)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:`1px solid ${o?"rgba(244,63,94,0.3)":s?"rgba(245,158,11,0.25)":"rgba(255,255,255,0.08)"}`,borderLeft:`4px solid ${a}`,borderRadius:10,padding:"16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,transition:"border-color 0.3s",boxShadow:"0 4px 16px rgba(0,0,0,0.1)"},children:[(0,b.jsxs)("div",{style:{minWidth:0},children:[(0,b.jsxs)("p",{style:{margin:0,fontWeight:700,fontSize:14,color:"#f1f5f9",whiteSpace:"nowrap",fontFamily:'"JetBrains Mono", monospace'},children:["BLK_",e.block_request_id]}),(0,b.jsxs)("div",{style:{display:"flex",gap:16,marginTop:6,fontSize:11,color:"#64748b"},children:[(0,b.jsxs)("span",{style:{display:"flex",gap:6,alignItems:"center"},children:["ELAPSED ",(0,b.jsxs)("span",{style:{color:"#94a3b8",fontWeight:600,fontFamily:'"JetBrains Mono", monospace'},children:[e.elapsed_minutes?.toFixed(1),"m"]})]}),(0,b.jsxs)("span",{style:{display:"flex",gap:6,alignItems:"center"},children:["REMAINING ",(0,b.jsxs)("span",{style:{color:"#94a3b8",fontWeight:600,fontFamily:'"JetBrains Mono", monospace'},children:[e.expected_remaining_minutes?.toFixed(1),"m"]})]})]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:16,flexShrink:0},children:[(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",width:140},children:[(0,b.jsx)("span",{style:{fontSize:10,fontWeight:800,color:a,letterSpacing:"0.06em"},children:e.actual_status}),(0,b.jsx)("div",{style:{width:"100%",height:6,background:"rgba(255,255,255,0.06)",borderRadius:3,overflow:"hidden"},children:(0,b.jsx)("div",{style:{height:"100%",width:`${n}%`,borderRadius:3,background:o?"linear-gradient(90deg, #e11d48, #f43f5e)":s?"linear-gradient(90deg, #d97706, #f59e0b)":"linear-gradient(90deg, #059669, #10b981)",transition:"width 0.5s ease",boxShadow:`0 0 10px ${a}`}})}),(0,b.jsxs)("span",{style:{fontSize:11,color:"#64748b",fontFamily:'"JetBrains Mono", monospace'},children:[n.toFixed(0),"%"]})]}),(0,b.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,b.jsx)("button",{onClick:t,disabled:r,title:"Simulate overrun",style:{padding:"6px 12px",borderRadius:8,fontSize:11,fontWeight:700,letterSpacing:"0.05em",border:"1px solid rgba(245,158,11,0.3)",background:"rgba(245,158,11,0.1)",color:"#f59e0b",cursor:r?"not-allowed":"pointer",opacity:r?.3:1,transition:"all 0.2s"},children:"OVERRUN"}),(0,b.jsx)("button",{onClick:i,disabled:r,title:"Simulate machine failure",style:{padding:"6px 12px",borderRadius:8,fontSize:11,fontWeight:700,letterSpacing:"0.05em",border:"1px solid rgba(244,63,94,0.3)",background:"rgba(244,63,94,0.1)",color:"#f43f5e",cursor:r?"not-allowed":"pointer",opacity:r?.3:1,transition:"all 0.2s"},children:"FAIL"})]})]})]})}function dq({plan:e,fetcher:t,onApprovalRequested:i}){let[r,n]=(0,_.useState)(null),[s,o]=(0,_.useState)(!1),[a,l]=(0,_.useState)(!1),c=async()=>{o(!0);try{let i=await t(`/execution/start?plan_id=${e.id}`,{method:"POST"});n({execution_id:i.execution_id,status:"RUNNING"}),l(!0)}catch(e){console.error(e)}finally{o(!1)}},u=async e=>{r&&await t(`/execution/${r.execution_id}/trigger-overrun?block_request_id=${e}&delay_minutes=15`,{method:"POST"})},h=async(e,i)=>{r&&await t(`/execution/${r.execution_id}/trigger-machine-failure?block_request_id=${e}&machine_id=${i}`,{method:"POST"})},d=async()=>{r&&(await t(`/execution/${r.execution_id}/reset`,{method:"POST"}),n(null),l(!1))};if((0,_.useEffect)(()=>{let e;return a&&r?.execution_id&&(e=setInterval(async()=>{try{let e=await t(`/execution/${r.execution_id}`);if(n(e),"AWAITING_APPROVAL"===e.status&&(l(!1),i)){let t=e.events?.[e.events.length-1];i(e,t)}}catch(e){console.error(e)}},2e3)),()=>clearInterval(e)},[a,r?.execution_id]),!r)return(0,b.jsxs)("div",{className:"animate-fade-in",style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24},children:[(0,b.jsx)("div",{style:{width:80,height:80,borderRadius:"50%",background:"linear-gradient(135deg, rgba(99,102,241,0.1), rgba(16,185,129,0.05))",border:"1px solid rgba(99,102,241,0.4)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px rgba(99,102,241,0.2)"},children:(0,b.jsx)(df,{size:36,color:"#818cf8"})}),(0,b.jsxs)("div",{style:{textAlign:"center"},children:[(0,b.jsx)("p",{style:{margin:0,fontSize:18,fontWeight:700,color:"#f1f5f9",letterSpacing:"0.05em"},children:"SYSTEM INITIALIZATION"}),(0,b.jsxs)("p",{style:{margin:"8px 0 0",fontSize:13,color:"#64748b"},children:["Plan ",(0,b.jsx)("span",{style:{color:"#a5b4fc",fontFamily:'"JetBrains Mono", monospace'},children:e?.id})," is approved and awaiting execution."]})]}),(0,b.jsx)("button",{onClick:c,disabled:s,className:"btn-shimmer",style:{padding:"14px 32px",borderRadius:12,background:"linear-gradient(135deg, #6366f1, #8b5cf6)",border:"none",color:"white",fontWeight:800,fontSize:14,letterSpacing:"0.05em",cursor:s?"not-allowed":"pointer",display:"flex",alignItems:"center",gap:10,boxShadow:"0 8px 32px rgba(99,102,241,0.4)",position:"relative",opacity:s?.7:1},children:s?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(dF,{size:18,style:{animation:"spin 1s linear infinite"}})," INITIALIZING…"]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d$,{size:18,fill:"currentColor"})," INITIATE SIMULATION"]})})]});let p=Object.values([...r.telemetry||[]].slice(-30).reduce((e,t)=>(e[t.block_request_id]=t,e),{})).slice(0,15);return(0,b.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:14,overflow:"auto"},children:[(0,b.jsxs)("div",{className:"animate-slide-up",style:{background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14},children:[(0,b.jsx)("div",{style:{width:40,height:40,borderRadius:10,background:"linear-gradient(135deg, rgba(99,102,241,0.2), rgba(16,185,129,0.1))",border:"1px solid rgba(99,102,241,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(dW,{size:18,color:"#6366f1"})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{style:{margin:0,fontSize:15,fontWeight:700,color:"#f1f5f9"},children:["Session #",r.execution_id]}),(0,b.jsxs)("p",{style:{margin:0,fontSize:12,color:"#64748b"},children:["Plan ",r.plan_id," · v",r.plan_version]})]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10},children:[(0,b.jsx)(dG,{status:r.status}),(0,b.jsx)("button",{onClick:d,title:"Reset session",style:{width:34,height:34,borderRadius:8,background:"rgba(255,255,255,0.04)",border:"1px solid var(--gati-border)",color:"#64748b",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.color="#e2e8f0"},onMouseLeave:e=>{e.currentTarget.style.color="#64748b"},children:(0,b.jsx)(dO,{size:15})})]})]}),(r.events||[]).map((e,t)=>(0,b.jsxs)("div",{className:"animate-slide-up",style:{padding:"12px 16px",borderRadius:10,display:"flex",alignItems:"flex-start",gap:12,flexShrink:0,..."CRITICAL"===e.severity?{background:"rgba(244,63,94,0.08)",border:"1px solid rgba(244,63,94,0.35)",boxShadow:"0 0 16px rgba(244,63,94,0.1)"}:{background:"rgba(245,158,11,0.08)",border:"1px solid rgba(245,158,11,0.3)",boxShadow:"0 0 12px rgba(245,158,11,0.08)"}},children:[(0,b.jsx)(dB,{size:18,color:"CRITICAL"===e.severity?"#f43f5e":"#f59e0b",style:{flexShrink:0,marginTop:1}}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h4",{style:{margin:0,fontSize:13,fontWeight:700,color:"CRITICAL"===e.severity?"#fca5a5":"#fde68a"},children:[e.event_type?.replace(/_/g," ")," DETECTED"]}),(0,b.jsx)("p",{style:{margin:"4px 0 0",fontSize:12,color:"#94a3b8",lineHeight:1.5},children:e.reason})]})]},t)),"AWAITING_APPROVAL"===r.status&&(0,b.jsxs)("div",{className:"animate-slide-up",style:{padding:"12px 16px",borderRadius:10,background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.3)",display:"flex",alignItems:"center",gap:12,flexShrink:0},children:[(0,b.jsx)(dp,{size:18,color:"#818cf8",style:{flexShrink:0}}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{style:{margin:0,fontSize:13,fontWeight:700,color:"#a5b4fc"},children:"Re-optimization Complete"}),(0,b.jsx)("p",{style:{margin:"3px 0 0",fontSize:12,color:"#64748b"},children:"A revised plan is ready — navigate to Active Plans to review and approve."})]})]}),(0,b.jsxs)("div",{className:"animate-slide-up",style:{flex:1,background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",minHeight:0},children:[(0,b.jsxs)("div",{style:{padding:"12px 16px",borderBottom:"1px solid var(--gati-border)",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[(0,b.jsxs)("h3",{style:{margin:0,fontSize:14,fontWeight:600,color:"#f1f5f9",display:"flex",alignItems:"center",gap:8},children:[(0,b.jsx)(df,{size:15,color:"#6366f1"})," Live Telemetry"]}),(0,b.jsxs)("span",{style:{fontSize:11,color:"#475569"},children:[p.length," active block",1!==p.length?"s":""]})]}),(0,b.jsx)("div",{style:{flex:1,overflow:"auto",padding:"12px 14px",display:"flex",flexDirection:"column",gap:8},children:0===p.length?(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#475569",fontSize:13},children:"Waiting for telemetry data…"}):p.map((e,t)=>(0,b.jsx)(dH,{t:e,disabled:"RUNNING"!==r.status,onOverrun:()=>u(e.block_request_id),onFail:()=>h(e.block_request_id,e.machine_id||1)},t))})]})]})}let dY=dh("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]),dK=dh("tram-front",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]),dZ=dh("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),dX="localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname,dJ=v.default.env.NEXT_PUBLIC_API_BASE_URL||(dX?"/api/v1":"http://localhost:8000/api/v1"),dQ=null;async function d0(e,t){if(!dQ){let e=new URLSearchParams;e.append("username","controller1"),e.append("password","pass");let t=await fetch(`${dJ}/auth/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.toString()});if(!t.ok)throw Error("Auth failed");dQ=(await t.json()).access_token}let i=await fetch(`${dJ}${e}`,{...t,headers:{...t?.headers,Authorization:`Bearer ${dQ}`}});if(!i.ok)throw Error("Fetch failed");return i.json()}let d1=[{id:"map",label:"Network Map",icon:dY,desc:"Live topology view"},{id:"plans",label:"Active Plans",icon:dg,desc:"Schedule management"},{id:"safety",label:"Safety Validation",icon:dU,desc:"Rule compliance"},{id:"execution",label:"Live Execution",icon:d$,desc:"Simulation control"},{id:"audit",label:"Audit Trail",icon:dB,desc:"Decision history"}],d2={map:"Network Topology",plans:"Active Train Plans",safety:"Safety Validation",execution:"Live Execution",audit:"Decision Audit Trail"};function d3({icon:e,title:t,subtitle:i}){return(0,b.jsxs)("div",{className:"h-full flex flex-col items-center justify-center gap-4 animate-fade-in",children:[(0,b.jsx)("div",{style:{width:72,height:72,borderRadius:"50%",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(e,{size:30,color:"rgba(99,102,241,0.6)"})}),(0,b.jsxs)("div",{style:{textAlign:"center"},children:[(0,b.jsx)("p",{style:{color:"#94a3b8",fontWeight:500,fontSize:15},children:t}),(0,b.jsx)("p",{style:{color:"#475569",fontSize:13,marginTop:4},children:i})]})]})}e.s(["default",0,function(){let{data:e,error:t}=eg("/topology/",d0),[i,r]=(0,_.useState)("map"),[n,s]=(0,_.useState)(null),[o,a]=(0,_.useState)(!1),[l,c]=(0,_.useState)(null),u=async()=>{a(!0);try{let e=await d0("/plans/demo",{method:"GET"});s(e),r("plans")}catch(e){console.error(e)}finally{a(!1)}},h=async e=>{await d0(`/plans/${e}/approve`,{method:"POST"}),r("execution")},d=async e=>{await d0(`/plans/${e}/reject`,{method:"POST"}),s(null),r("map")};return(0,b.jsxs)("div",{style:{display:"flex",height:"100vh",background:"var(--gati-bg)",color:"#e2e8f0",fontFamily:"var(--gati-font)",overflow:"hidden"},children:[(0,b.jsxs)("aside",{style:{width:240,background:"rgba(13,17,23,0.65)",borderRight:"1px solid var(--gati-border)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",boxShadow:"4px 0 32px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",flexShrink:0,position:"relative",zIndex:10},children:[(0,b.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,height:2,background:"var(--gati-grad-primary)"}}),(0,b.jsx)("div",{style:{padding:"24px 20px 20px",borderBottom:"1px solid var(--gati-border)"},children:(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[(0,b.jsx)("div",{style:{width:38,height:38,borderRadius:10,background:"linear-gradient(135deg, #6366f1, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 20px rgba(99,102,241,0.5)",flexShrink:0},children:(0,b.jsx)(dK,{size:20,color:"white"})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{style:{margin:0,fontSize:18,fontWeight:700,letterSpacing:"-0.3px",color:"#f1f5f9"},children:"Gatidhara"}),(0,b.jsx)("p",{style:{margin:0,fontSize:10,color:"#818cf8",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase"},children:"Operations Control"})]})]})}),(0,b.jsx)("nav",{style:{flex:1,padding:"16px 12px",display:"flex",flexDirection:"column",gap:4},children:d1.map((e,t)=>{let n=e.icon,s=i===e.id;return(0,b.jsxs)("button",{onClick:()=>r(e.id),className:`animate-slide-left stagger-${t+1}`,style:{width:"100%",display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:10,border:"1px solid",borderColor:s?"rgba(99,102,241,0.3)":"transparent",borderLeft:s?"3px solid #818cf8":"3px solid transparent",background:s?"linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.05))":"transparent",color:s?"#c7d2fe":"#64748b",cursor:"pointer",textAlign:"left",transition:"all 0.2s ease",boxShadow:s?"inset 0 0 20px rgba(99,102,241,0.05), 0 4px 12px rgba(0,0,0,0.1)":"none"},onMouseEnter:e=>{s||(e.currentTarget.style.background="rgba(255,255,255,0.03)",e.currentTarget.style.color="#94a3b8")},onMouseLeave:e=>{s||(e.currentTarget.style.background="transparent",e.currentTarget.style.color="#64748b")},children:[(0,b.jsx)("div",{style:{width:32,height:32,borderRadius:7,background:s?"rgba(99,102,241,0.2)":"rgba(255,255,255,0.04)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,b.jsx)(n,{size:15})}),(0,b.jsxs)("div",{style:{minWidth:0},children:[(0,b.jsx)("div",{style:{fontSize:13,fontWeight:500,lineHeight:1.2},children:e.label}),(0,b.jsx)("div",{style:{fontSize:10,color:"#475569",marginTop:1},children:e.desc})]}),s&&(0,b.jsx)(dZ,{size:12,style:{marginLeft:"auto",color:"#6366f1",flexShrink:0}})]},e.id)})}),(0,b.jsxs)("div",{style:{padding:"12px 10px 16px",borderTop:"1px solid var(--gati-border)",display:"flex",flexDirection:"column",gap:8},children:[(0,b.jsx)("button",{onClick:u,disabled:o,className:"btn-shimmer",style:{width:"100%",padding:"10px 14px",borderRadius:8,border:"none",background:"linear-gradient(135deg, #059669, #10b981)",color:"white",fontWeight:600,fontSize:13,cursor:o?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:7,boxShadow:"0 4px 16px rgba(16,185,129,0.3)",opacity:o?.7:1,transition:"all 0.2s ease",position:"relative"},children:o?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(dF,{size:14,style:{animation:"spin 1s linear infinite"}})," Running…"]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(dp,{size:14})," Run Demo Flow"]})}),(0,b.jsxs)("button",{onClick:async()=>{confirm("Reset demo to seed state?")&&(await d0("/demo/reset",{method:"POST"}),s(null))},style:{width:"100%",padding:"9px 14px",borderRadius:8,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.03)",color:"#64748b",fontWeight:500,fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.borderColor="rgba(244,63,94,0.3)",e.currentTarget.style.color="#f87171",e.currentTarget.style.background="rgba(244,63,94,0.05)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.06)",e.currentTarget.style.color="#64748b",e.currentTarget.style.background="rgba(255,255,255,0.03)"},children:[(0,b.jsx)(dO,{size:12})," Reset Demo"]}),(0,b.jsx)("p",{style:{margin:"6px 4px 0",fontSize:9.5,color:"#334155",lineHeight:1.5,textAlign:"center"},children:"Synthetic simulation only. Not connected to real railway systems."})]})]}),(0,b.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",minWidth:0},children:[(0,b.jsxs)("header",{style:{height:56,background:"rgba(13,17,23,0.8)",backdropFilter:"blur(12px)",borderBottom:"1px solid var(--gati-border)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",flexShrink:0},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,b.jsx)("span",{style:{fontSize:11,color:"#475569"},children:"Dashboard"}),(0,b.jsx)(dZ,{size:12,color:"#334155"}),(0,b.jsx)("span",{style:{fontSize:13,fontWeight:600,color:"#e2e8f0"},children:d2[i]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:16},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)",borderRadius:20,padding:"4px 12px"},children:[(0,b.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",background:"#10b981",animation:"pulse-dot 2s ease-in-out infinite"}}),(0,b.jsx)("span",{style:{fontSize:11,fontWeight:600,color:"#10b981",letterSpacing:"0.05em"},children:"SYSTEM ONLINE"})]}),(0,b.jsx)("div",{style:{color:"#6366f1",opacity:.7},children:(0,b.jsx)(dW,{size:16})})]})]}),(0,b.jsxs)("main",{style:{flex:1,overflow:"auto",padding:20,minHeight:0},children:["map"===i&&(0,b.jsxs)("div",{className:"animate-fade-in",style:{height:"100%",borderRadius:12,overflow:"hidden",border:"1px solid var(--gati-border)",boxShadow:"0 4px 32px rgba(0,0,0,0.4)",position:"relative"},children:[!e&&!t&&(0,b.jsxs)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--gati-surface)",gap:10},children:[(0,b.jsx)(dF,{size:20,color:"#6366f1",style:{animation:"spin 1s linear infinite"}}),(0,b.jsx)("span",{style:{color:"#64748b",fontSize:14},children:"Loading network topology…"})]}),e&&(0,b.jsx)(dn,{topology:e})]},"map"),"plans"===i&&n&&(0,b.jsxs)("div",{className:"animate-slide-up",style:{height:"100%",display:"flex",flexDirection:"column",gap:16},children:[(0,b.jsx)(dw,{plan:n.plan,onCreateNew:u}),(0,b.jsx)(dV,{planId:n.plan.id,onApprove:h,onReject:d})]},"plans"),"plans"===i&&!n&&(0,b.jsx)("div",{className:"animate-fade-in",style:{height:"100%"},children:(0,b.jsx)(d3,{icon:dg,title:"No active plan",subtitle:'Click "Run Demo Flow" in the sidebar to generate a train plan.'})},"plans-empty"),"safety"===i&&n&&(0,b.jsxs)("div",{className:"animate-slide-up",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,height:"100%"},children:[(0,b.jsxs)("div",{style:{background:"var(--gati-surface)",border:"1px solid var(--gati-border)",borderRadius:12,display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,b.jsx)("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--gati-border)"},children:(0,b.jsx)("h3",{style:{margin:0,fontSize:15,fontWeight:600,color:"#f1f5f9"},children:"Recent Safety Checks"})}),(0,b.jsxs)("div",{style:{flex:1,overflow:"auto",padding:"12px",display:"flex",flexDirection:"column",gap:8},children:[(0,b.jsxs)("div",{style:{background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.3)",borderRadius:8,padding:"14px 16px",cursor:"pointer",display:"flex",flexDirection:"column",gap:8,boxShadow:"0 0 12px rgba(99,102,241,0.1)"},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,b.jsxs)("span",{style:{fontWeight:700,color:"#e2e8f0",fontSize:14},children:["SV-",n.plan.id?.split("-")[1]||"882"]}),(0,b.jsx)("div",{style:{padding:"2px 8px",borderRadius:10,fontWeight:700,fontSize:10,letterSpacing:"0.05em",...n.safety_result.status.includes("PASS")?{background:"rgba(16,185,129,0.1)",color:"#10b981",border:"1px solid rgba(16,185,129,0.25)"}:{background:"rgba(244,63,94,0.1)",color:"#f43f5e",border:"1px solid rgba(244,63,94,0.25)"}},children:n.safety_result.status})]}),(0,b.jsx)("div",{style:{fontSize:12,color:"#94a3b8"},children:new Date(n.safety_result.validation_timestamp||Date.now()).toLocaleString()}),(0,b.jsxs)("div",{style:{fontSize:13,color:"#cbd5e1",fontWeight:500},children:["Route: ",n.plan.route||"HUB-N to TRN-809"]})]}),(0,b.jsxs)("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:8,padding:"14px 16px",opacity:.7},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[(0,b.jsx)("span",{style:{fontWeight:700,color:"#e2e8f0",fontSize:14},children:"SV-881"}),(0,b.jsx)("div",{style:{padding:"2px 8px",borderRadius:10,fontWeight:700,fontSize:10,letterSpacing:"0.05em",background:"rgba(16,185,129,0.1)",color:"#10b981",border:"1px solid rgba(16,185,129,0.25)"},children:"PASS"})]}),(0,b.jsx)("div",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"Just now"}),(0,b.jsx)("div",{style:{fontSize:13,color:"#cbd5e1",fontWeight:500},children:"Route: Central to East Hub"})]}),(0,b.jsxs)("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:8,padding:"14px 16px",opacity:.7},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[(0,b.jsx)("span",{style:{fontWeight:700,color:"#e2e8f0",fontSize:14},children:"SV-880"}),(0,b.jsx)("div",{style:{padding:"2px 8px",borderRadius:10,fontWeight:700,fontSize:10,letterSpacing:"0.05em",background:"rgba(245,158,11,0.1)",color:"#fbbf24",border:"1px solid rgba(245,158,11,0.25)"},children:"WARNING"})]}),(0,b.jsx)("div",{style:{fontSize:12,color:"#94a3b8",marginBottom:8},children:"5 mins ago"}),(0,b.jsx)("div",{style:{fontSize:13,color:"#cbd5e1",fontWeight:500},children:"Route: South Yard to North Main"})]})]})]}),(0,b.jsx)(dM,{explanation:n.explanation,safetyResult:n.safety_result})]},"safety"),"safety"===i&&!n&&(0,b.jsx)("div",{className:"animate-fade-in",style:{height:"100%"},children:(0,b.jsx)(d3,{icon:dU,title:"No safety data",subtitle:"Run the demo flow to see safety validation results."})},"safety-empty"),"audit"===i&&(0,b.jsx)("div",{className:"animate-fade-in",style:{height:"100%"},children:(0,b.jsx)(dD,{fetcher:d0})},"audit"),"execution"===i&&n&&(0,b.jsx)("div",{className:"animate-slide-up",style:{height:"100%"},children:(0,b.jsx)(dq,{plan:n.plan,fetcher:d0,onApprovalRequested:(e,t)=>{s(i=>({...i,plan:e.result?.revised_plan||i.plan,safety_result:e.result?.safety_result||i.safety_result,explanation:e.result?.explanation||i.explanation,disruption:t}))}})},"execution"),"execution"===i&&!n&&(0,b.jsx)("div",{className:"animate-fade-in",style:{height:"100%"},children:(0,b.jsx)(d3,{icon:d$,title:"No plan loaded",subtitle:'Approve a plan first, or click "Run Demo Flow" to get started.'})},"execution-empty")]})]})]})}],30257)},55838,(e,t,i)=>{"use strict";var r=e.r(71645),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,o=r.useEffect,a=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!n(e,i)}catch(e){return!0}}var u="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),r=s({inst:{value:i,getSnapshot:t}}),n=r[0].inst,u=r[1];return a(function(){n.value=i,n.getSnapshot=t,c(n)&&u({inst:n})},[e,i,t]),o(function(){return c(n)&&u({inst:n}),e(function(){c(n)&&u({inst:n})})},[e]),l(i),i};i.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},2239,(e,t,i)=>{"use strict";e.i(47167),t.exports=e.r(55838)}]);