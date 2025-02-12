(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const ae=(e,s)=>e===s,k={equals:ae};let ce=se;const A=1,P=2,J={owned:null,cleanups:null,context:null,owner:null};var h=null;let q=null,ue=null,f=null,v=null,E=null,I=0;function fe(e,s){const t=f,o=h,n=e.length===0,i=s===void 0?o:s,l=n?J:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=n?e:()=>e(()=>R(()=>C(l)));h=l,f=null;try{return D(r,!0)}finally{f=t,h=o}}function M(e,s){s=s?Object.assign({},k,s):k;const t={value:e,observers:null,observerSlots:null,comparator:s.equals||void 0},o=n=>(typeof n=="function"&&(n=n(t.value)),Z(t,n));return[Y.bind(t),o]}function L(e,s,t){const o=ee(e,s,!1,A);X(o)}function W(e,s,t){t=t?Object.assign({},k,t):k;const o=ee(e,s,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=t.equals||void 0,X(o),Y.bind(o)}function R(e){if(f===null)return e();const s=f;f=null;try{return e()}finally{f=s}}function he(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Y(){if(this.sources&&this.state)if(this.state===A)X(this);else{const e=v;v=null,D(()=>N(this),!1),v=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function Z(e,s,t){let o=e.value;return(!e.comparator||!e.comparator(o,s))&&(e.value=s,e.observers&&e.observers.length&&D(()=>{for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n],l=q&&q.running;l&&q.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?v.push(i):E.push(i),i.observers&&ne(i)),l||(i.state=A)}if(v.length>1e6)throw v=[],new Error},!1)),s}function X(e){if(!e.fn)return;C(e);const s=I;de(e,e.value,s)}function de(e,s,t){let o;const n=h,i=f;f=h=e;try{o=e.fn(s)}catch(l){return e.pure&&(e.state=A,e.owned&&e.owned.forEach(C),e.owned=null),e.updatedAt=t+1,oe(l)}finally{f=i,h=n}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Z(e,o):e.value=o,e.updatedAt=t)}function ee(e,s,t,o=A,n){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:h,context:h?h.context:null,pure:t};return h===null||h!==J&&(h.owned?h.owned.push(i):h.owned=[i]),i}function te(e){if(e.state===0)return;if(e.state===P)return N(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<I);)e.state&&s.push(e);for(let t=s.length-1;t>=0;t--)if(e=s[t],e.state===A)X(e);else if(e.state===P){const o=v;v=null,D(()=>N(e,s[0]),!1),v=o}}function D(e,s){if(v)return e();let t=!1;s||(v=[]),E?t=!0:E=[],I++;try{const o=e();return pe(t),o}catch(o){t||(E=null),v=null,oe(o)}}function pe(e){if(v&&(se(v),v=null),e)return;const s=E;E=null,s.length&&D(()=>ce(s),!1)}function se(e){for(let s=0;s<e.length;s++)te(e[s])}function N(e,s){e.state=0;for(let t=0;t<e.sources.length;t+=1){const o=e.sources[t];if(o.sources){const n=o.state;n===A?o!==s&&(!o.updatedAt||o.updatedAt<I)&&te(o):n===P&&N(o,s)}}}function ne(e){for(let s=0;s<e.observers.length;s+=1){const t=e.observers[s];t.state||(t.state=P,t.pure?v.push(t):E.push(t),t.observers&&ne(t))}}function C(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),o=e.sourceSlots.pop(),n=t.observers;if(n&&n.length){const i=n.pop(),l=t.observerSlots.pop();o<n.length&&(i.sourceSlots[l]=o,n[o]=i,t.observerSlots[o]=l)}}if(e.tOwned){for(s=e.tOwned.length-1;s>=0;s--)C(e.tOwned[s]);delete e.tOwned}if(e.owned){for(s=e.owned.length-1;s>=0;s--)C(e.owned[s]);e.owned=null}if(e.cleanups){for(s=e.cleanups.length-1;s>=0;s--)e.cleanups[s]();e.cleanups=null}e.state=0}function ge(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,s=h){throw ge(e)}function y(e,s){return R(()=>e(s||{}))}function we(e,s,t){let o=t.length,n=s.length,i=o,l=0,r=0,a=s[n-1].nextSibling,c=null;for(;l<n||r<i;){if(s[l]===t[r]){l++,r++;continue}for(;s[n-1]===t[i-1];)n--,i--;if(n===l){const u=i<o?r?t[r-1].nextSibling:t[i-r]:a;for(;r<i;)e.insertBefore(t[r++],u)}else if(i===r)for(;l<n;)(!c||!c.has(s[l]))&&s[l].remove(),l++;else if(s[l]===t[i-1]&&t[r]===s[n-1]){const u=s[--n].nextSibling;e.insertBefore(t[r++],s[l++].nextSibling),e.insertBefore(t[--i],u),s[n]=t[i]}else{if(!c){c=new Map;let m=r;for(;m<i;)c.set(t[m],m++)}const u=c.get(s[l]);if(u!=null)if(r<u&&u<i){let m=l,S=1,H;for(;++m<n&&m<i&&!((H=c.get(s[m]))==null||H!==u+S);)S++;if(S>u-r){const re=s[l];for(;r<u;)e.insertBefore(t[r++],re)}else e.replaceChild(t[r++],s[l++])}else l++;else s[l++].remove()}}}const G="_$DX_DELEGATE";function ve(e,s,t,o={}){let n;return fe(i=>{n=i,s===document?e():x(s,e(),s.firstChild?null:void 0,t)},o.owner),()=>{n(),s.textContent=""}}function b(e,s,t){let o;const n=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(o||(o=n())).cloneNode(!0);return i.cloneNode=i,i}function ye(e,s=window.document){const t=s[G]||(s[G]=new Set);for(let o=0,n=e.length;o<n;o++){const i=e[o];t.has(i)||(t.add(i),s.addEventListener(i,$e))}}function B(e,s,t){t==null?e.removeAttribute(s):e.setAttribute(s,t)}function be(e,s){s==null?e.removeAttribute("class"):e.className=s}function me(e,s,t,o){Array.isArray(t)?(e[`$$${s}`]=t[0],e[`$$${s}Data`]=t[1]):e[`$$${s}`]=t}function xe(e,s,t={}){const o=Object.keys(s||{}),n=Object.keys(t);let i,l;for(i=0,l=n.length;i<l;i++){const r=n[i];!r||r==="undefined"||s[r]||(K(e,r,!1),delete t[r])}for(i=0,l=o.length;i<l;i++){const r=o[i],a=!!s[r];!r||r==="undefined"||t[r]===a||!a||(K(e,r,!0),t[r]=a)}return t}function x(e,s,t,o){if(t!==void 0&&!o&&(o=[]),typeof s!="function")return O(e,s,o,t);L(n=>O(e,s(),n,t),o)}function K(e,s,t){const o=s.trim().split(/\s+/);for(let n=0,i=o.length;n<i;n++)e.classList.toggle(o[n],t)}function $e(e){let s=e.target;const t=`$$${e.type}`,o=e.target,n=e.currentTarget,i=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),l=()=>{const a=s[t];if(a&&!s.disabled){const c=s[`${t}Data`];if(c!==void 0?a.call(s,c,e):a.call(s,e),e.cancelBubble)return}return s.host&&typeof s.host!="string"&&!s.host._$host&&s.contains(e.target)&&i(s.host),!0},r=()=>{for(;l()&&(s=s._$host||s.parentNode||s.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return s||document}}),e.composedPath){const a=e.composedPath();i(a[0]);for(let c=0;c<a.length-2&&(s=a[c],!!l());c++){if(s._$host){s=s._$host,r();break}if(s.parentNode===n)break}}else r();i(o)}function O(e,s,t,o,n){for(;typeof t=="function";)t=t();if(s===t)return t;const i=typeof s,l=o!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(s=s.toString(),s===t))return t;if(l){let r=t[0];r&&r.nodeType===3?r.data!==s&&(r.data=s):r=document.createTextNode(s),t=_(e,t,o,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s}else if(s==null||i==="boolean")t=_(e,t,o);else{if(i==="function")return L(()=>{let r=s();for(;typeof r=="function";)r=r();t=O(e,r,t,o)}),()=>t;if(Array.isArray(s)){const r=[],a=t&&Array.isArray(t);if(F(r,s,t,n))return L(()=>t=O(e,r,t,o,!0)),()=>t;if(r.length===0){if(t=_(e,t,o),l)return t}else a?t.length===0?Q(e,r,o):we(e,t,r):(t&&_(e),Q(e,r));t=r}else if(s.nodeType){if(Array.isArray(t)){if(l)return t=_(e,t,o,s);_(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}}return t}function F(e,s,t,o){let n=!1;for(let i=0,l=s.length;i<l;i++){let r=s[i],a=t&&t[e.length],c;if(!(r==null||r===!0||r===!1))if((c=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))n=F(e,r,a)||n;else if(c==="function")if(o){for(;typeof r=="function";)r=r();n=F(e,Array.isArray(r)?r:[r],Array.isArray(a)?a:[a])||n}else e.push(r),n=!0;else{const u=String(r);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return n}function Q(e,s,t=null){for(let o=0,n=s.length;o<n;o++)e.insertBefore(s[o],t)}function _(e,s,t,o){if(t===void 0)return e.textContent="";const n=o||document.createTextNode("");if(s.length){let i=!1;for(let l=s.length-1;l>=0;l--){const r=s[l];if(n!==r){const a=r.parentNode===e;!i&&!l?a?e.replaceChild(n,r):e.insertBefore(n,t):a&&r.remove()}else i=!0}}else e.insertBefore(n,t);return[n]}var Se=b('<svg class="relative z-0 h-screen w-30"xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 32 150 40"preserveAspectRatio=none shape-rendering=auto><defs><path id=gentle-wave d="M0-30V190H49.5c0-7.5 56.25-14.5 56.25-22S49.5 153.5 49.5 146s56.25-14.5 56.25-22S49.5 109.5 49.5 102s56.25-14.5 56.25-22S49.5 65.5 49.5 58s56.25-14.5 56.25-22S49.5 21.5 49.5 14 105.75-.5 105.75-8 49.5-22.5 49.5-30Z"></path></defs><g class=wave><use xlink:href=#gentle-wave x=0 y=0 fill=rgba(0,0,0,0.7)></use><use xlink:href=#gentle-wave x=0 y=0 fill=rgba(0,0,0,0.5)></use><use xlink:href=#gentle-wave x=0 y=0 fill=rgba(0,0,0,0.3)></use><use xlink:href=#gentle-wave x=0 y=0 fill=rgba(0,0,0,0.8)>');function z(e){return(()=>{var s=Se();return L(t=>xe(s,{[e.class]:!!e.class},t)),s})()}class Ee{constructor(s,t){this.setDragDistance=s,this.onSwipeDone=t,this.startX=0,this.currentX=0,this.isDragging=!1,this.dragThreshold=-50,this.swipeStart=this.swipeStart.bind(this),this.swipeUpdate=this.swipeUpdate.bind(this),this.swipeEnd=this.swipeEnd.bind(this),this.initListeners()}getPercentage(s){let t=Math.abs(s/window.innerWidth*100);return t=Math.max(0,Math.min(100,t)),Math.round(t-100)}swipeStart(s){if(this.startX=s.clientX||s.touches?.[0]?.clientX,this.startX!==void 0){this.isDragging=!0;for(let t of document.querySelectorAll(".js-pause-transition"))t.classList.add("transition-none")}}swipeUpdate(s){if(!this.isDragging)return;this.currentX=s.clientX||s.touches[0].clientX;const t=this.getPercentage(this.currentX-this.startX);this.setDragDistance(t),t>this.dragThreshold&&this.onSwipeDone()}swipeEnd(s){if(this.isDragging){this.isDragging=!1;for(let t of document.querySelectorAll(".js-pause-transition"))t.classList.remove("transition-none");this.getPercentage(this.currentX-this.startX)>this.dragThreshold?this.setDragDistance(0):this.setDragDistance(-100)}}initListeners(){document.addEventListener("mousedown",this.swipeStart),document.addEventListener("mousemove",this.swipeUpdate),document.addEventListener("mouseup",this.swipeEnd),document.addEventListener("touchstart",this.swipeStart),document.addEventListener("touchmove",this.swipeUpdate),document.addEventListener("touchend",this.swipeEnd)}}function ie(e){const s=new Event(e);document.dispatchEvent(s)}var Ae=b('<div class="h-screen bg-neutral-900"><div class="js-pause-transition linear absolute -left-full flex h-screen transition-[left] duration-300"><div class="h-full min-w-screen bg-black"><div class="js-toggle-opacity relative h-full w-full overflow-y-clip"><div class="bg-dotted animate-fall pointer-events-none absolute -right-10 z-10 h-[400%] w-full"></div></div></div><div></div></div><div class="js-pause-transition absolute -right-full flex h-screen flex-row-reverse transition-[right] duration-300 ease-linear"><div class="h-full w-screen bg-black transition-none"><div class="js-toggle-opacity relative h-full w-full overflow-y-clip"><div class="bg-dotted animate-fall pointer-events-none absolute -left-10 z-10 h-[400%] w-full"></div></div></div><div class=-scale-x-100>');function _e(){for(const e of document.querySelectorAll(".js-toggle-opacity"))e.classList.add("hidden");setTimeout(()=>ie("load_stage_two"),400)}function Le(){const[e,s]=M(-100),t=new Ee(s,_e);return he(()=>{document.removeEventListener("mousedown",t.swipeStart),document.removeEventListener("mousemove",t.swipeUpdate),document.removeEventListener("mouseup",t.swipeEnd),document.removeEventListener("touchstart",t.swipeStart),document.removeEventListener("touchmove",t.swipeUpdate),document.removeEventListener("touchend",t.swipeEnd)}),(()=>{var o=Ae(),n=o.firstChild,i=n.firstChild,l=i.nextSibling,r=n.nextSibling,a=r.firstChild,c=a.nextSibling;return x(l,y(z,{})),x(c,y(z,{})),L(u=>{var m=`${e()}%`,S=`${e()}%`;return m!==u.e&&((u.e=m)!=null?n.style.setProperty("left",m):n.style.removeProperty("left")),S!==u.t&&((u.t=S)!=null?r.style.setProperty("right",S):r.style.removeProperty("right")),u},{e:void 0,t:void 0}),o})()}const Ce="/projeto-arg/assets/1-DYTdPTPj.jpeg",De="/projeto-arg/assets/answer_correct-DJaX-0NI.mp3";function je(e){var s=Te(Pe(Ne(ke(e),8*e.length)));return s.toLowerCase()}function Te(e){for(var s,t="0123456789ABCDEF",o="",n=0;n<e.length;n++)s=e.charCodeAt(n),o+=t.charAt(s>>>4&15)+t.charAt(15&s);return o}function ke(e){for(var s=Array(e.length>>2),t=0;t<s.length;t++)s[t]=0;for(t=0;t<8*e.length;t+=8)s[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return s}function Pe(e){for(var s="",t=0;t<32*e.length;t+=8)s+=String.fromCharCode(e[t>>5]>>>t%32&255);return s}function Ne(e,s){e[s>>5]|=128<<s%32,e[14+(s+64>>>9<<4)]=s;for(var t=1732584193,o=-271733879,n=-1732584194,i=271733878,l=0;l<e.length;l+=16){var r=t,a=o,c=n,u=i;o=w(o=w(o=w(o=w(o=g(o=g(o=g(o=g(o=p(o=p(o=p(o=p(o=d(o=d(o=d(o=d(o,n=d(n,i=d(i,t=d(t,o,n,i,e[l+0],7,-680876936),o,n,e[l+1],12,-389564586),t,o,e[l+2],17,606105819),i,t,e[l+3],22,-1044525330),n=d(n,i=d(i,t=d(t,o,n,i,e[l+4],7,-176418897),o,n,e[l+5],12,1200080426),t,o,e[l+6],17,-1473231341),i,t,e[l+7],22,-45705983),n=d(n,i=d(i,t=d(t,o,n,i,e[l+8],7,1770035416),o,n,e[l+9],12,-1958414417),t,o,e[l+10],17,-42063),i,t,e[l+11],22,-1990404162),n=d(n,i=d(i,t=d(t,o,n,i,e[l+12],7,1804603682),o,n,e[l+13],12,-40341101),t,o,e[l+14],17,-1502002290),i,t,e[l+15],22,1236535329),n=p(n,i=p(i,t=p(t,o,n,i,e[l+1],5,-165796510),o,n,e[l+6],9,-1069501632),t,o,e[l+11],14,643717713),i,t,e[l+0],20,-373897302),n=p(n,i=p(i,t=p(t,o,n,i,e[l+5],5,-701558691),o,n,e[l+10],9,38016083),t,o,e[l+15],14,-660478335),i,t,e[l+4],20,-405537848),n=p(n,i=p(i,t=p(t,o,n,i,e[l+9],5,568446438),o,n,e[l+14],9,-1019803690),t,o,e[l+3],14,-187363961),i,t,e[l+8],20,1163531501),n=p(n,i=p(i,t=p(t,o,n,i,e[l+13],5,-1444681467),o,n,e[l+2],9,-51403784),t,o,e[l+7],14,1735328473),i,t,e[l+12],20,-1926607734),n=g(n,i=g(i,t=g(t,o,n,i,e[l+5],4,-378558),o,n,e[l+8],11,-2022574463),t,o,e[l+11],16,1839030562),i,t,e[l+14],23,-35309556),n=g(n,i=g(i,t=g(t,o,n,i,e[l+1],4,-1530992060),o,n,e[l+4],11,1272893353),t,o,e[l+7],16,-155497632),i,t,e[l+10],23,-1094730640),n=g(n,i=g(i,t=g(t,o,n,i,e[l+13],4,681279174),o,n,e[l+0],11,-358537222),t,o,e[l+3],16,-722521979),i,t,e[l+6],23,76029189),n=g(n,i=g(i,t=g(t,o,n,i,e[l+9],4,-640364487),o,n,e[l+12],11,-421815835),t,o,e[l+15],16,530742520),i,t,e[l+2],23,-995338651),n=w(n,i=w(i,t=w(t,o,n,i,e[l+0],6,-198630844),o,n,e[l+7],10,1126891415),t,o,e[l+14],15,-1416354905),i,t,e[l+5],21,-57434055),n=w(n,i=w(i,t=w(t,o,n,i,e[l+12],6,1700485571),o,n,e[l+3],10,-1894986606),t,o,e[l+10],15,-1051523),i,t,e[l+1],21,-2054922799),n=w(n,i=w(i,t=w(t,o,n,i,e[l+8],6,1873313359),o,n,e[l+15],10,-30611744),t,o,e[l+6],15,-1560198380),i,t,e[l+13],21,1309151649),n=w(n,i=w(i,t=w(t,o,n,i,e[l+4],6,-145523070),o,n,e[l+11],10,-1120210379),t,o,e[l+2],15,718787259),i,t,e[l+9],21,-343485551),t=$(t,r),o=$(o,a),n=$(n,c),i=$(i,u)}return Array(t,o,n,i)}function U(e,s,t,o,n,i){return $(Oe($($(s,e),$(o,i)),n),t)}function d(e,s,t,o,n,i,l){return U(s&t|~s&o,e,s,n,i,l)}function p(e,s,t,o,n,i,l){return U(s&o|t&~o,e,s,n,i,l)}function g(e,s,t,o,n,i,l){return U(s^t^o,e,s,n,i,l)}function w(e,s,t,o,n,i,l){return U(t^(s|~o),e,s,n,i,l)}function $(e,s){var t=(65535&e)+(65535&s);return(e>>16)+(s>>16)+(t>>16)<<16|65535&t}function Oe(e,s){return e<<s|e>>>32-s}var Ie=b('<div class="block text-start"><label for=answer class=text-white>Resposta:</label><input type=text id=answer class="w-full border-0 bg-white p-1 ring-0 outline-0"autofocus>');function V(e){function s(){const n=document.getElementById("answer")?.value||"",i=e.hash||"";console.log("answer_check"),je(n.toLowerCase())===i&&(console.log("answer_correct"),e.event&&(new Audio(De).play(),setTimeout(()=>ie(e.event),500)))}function t(n,i){let l;return function(...r){clearTimeout(l),l=setTimeout(()=>{n(...r)},i)}}const o=t(s,200);return(()=>{var n=Ie(),i=n.firstChild,l=i.nextSibling;return me(l,"input",o),n})()}ye(["input"]);var Me=b("<div>");function Xe(e){const[s,t]=M(!1);return setTimeout(()=>{t(!0)},e.delay||200),(()=>{var o=Me();return x(o,()=>e.children),L(()=>be(o,`transition-opacity duration-[2000ms] ${s()?"opacity-100":"opacity-0"}`)),o})()}var Be=b('<div class="mx-auto grid h-full w-full max-w-7xl justify-center gap-4 bg-black px-4 py-12">'),Ue=b('<div class="grid h-screen overflow-y-auto bg-black">');function j(e){return(()=>{var s=Ue();return x(s,y(Xe,{get delay(){return e.fadeInDelay},get children(){var t=Be();return x(t,()=>e.children),t}})),s})()}var Ve=b('<div class="w-fit space-y-2"><img class="pointer-events-none w-128">');function qe(){return y(j,{fadeInDelay:200,get children(){var e=Ve(),s=e.firstChild;return B(s,"src",Ce),x(e,y(V,{hash:"a2f4d35545d7b743fa2563b210994de9",event:"load_stage_three"}),null),e}})}const Fe="/projeto-arg/assets/1-CMpBFk3Q.jpeg";var Re=b('<div class="w-fit space-y-2"><img class="pointer-events-none w-128">');function He(){return y(j,{fadeInDelay:3e3,get children(){var e=Re(),s=e.firstChild;return B(s,"src",Fe),x(e,y(V,{hash:"6b7b655dd22faa3f10677c512493a8a0",event:"load_stage_four"}),null),e}})}const We="/projeto-arg/assets/1-CICDGVb0.jpeg";var Ge=b('<div class="w-fit space-y-2"><img class="pointer-events-none w-128">');function Ke(){return y(j,{fadeInDelay:3e3,get children(){var e=Ge(),s=e.firstChild;return B(s,"src",We),x(e,y(V,{hash:"bea0184aac2ef216c834b3e24a88c38e",event:"load_stage_five"}),null),e}})}const Qe="/projeto-arg/assets/1-D2R-WxQ1.jpeg";var ze=b('<div class="w-fit space-y-2"><img class="pointer-events-none w-128">');function Je(){return y(j,{fadeInDelay:3e3,get children(){var e=ze(),s=e.firstChild;return B(s,"src",Qe),x(e,y(V,{hash:"a77b4f006a4994d245a12247b8e4082c",event:"load_stage_six"}),null),e}})}const Ye="/projeto-arg/assets/key-BJ1sak1b.mp3";class Ze{constructor(s=1e3,t=!0){this.gapDelay=s,this.hasSound=!0}async sleep(s){return new Promise(t=>setTimeout(t,s))}playSound(){this.hasSound&&new Audio(Ye).play().catch(t=>{t.name==="NotAllowedError"&&(console.warn("Audio playback was blocked by the browser."),this.hasSound=!1)})}async writeLines(s){for(const t of s){const o=t.dataset.content??"",n=Math.floor(t.dataset.delay)||100;t.innerHTML="";for(const i of o)t.innerHTML+=i,this.playSound(),await this.sleep(n);await this.sleep(this.gapDelay)}}}var et=b('<div class="w-fit space-y-2"><div class=max-w-[32rem]><div class="block text-center text-2xl text-white"><span class="js-poem-line block text-4xl font-bold"data-content="O Rei do Vazio"></span><br><span class="js-poem-line block"data-content="Desde o início, ele ali estava,"></span><span class="js-poem-line block"data-content="sem nome, sem rosto, sem voz que clamava."></span><span class="js-poem-line block"data-content="Era o vazio, o frio, o fim,"></span><span class="js-poem-line block"data-content="um rei sem trono, um rei de nada"></span><br><span class="js-poem-line block"data-content="Do abismo ergueu-se em sombra e dor,"></span><span class="js-poem-line block"data-content="trazia silêncio, ruína e temor."></span><span class="js-poem-line block"data-content="Veio ao mundo para reinar,"></span><span class="js-poem-line block"data-content="com mãos de trevas a tudo apagar."></span><br><br><span class="js-poem-line block text-4xl font-bold"data-content="ENIGMA #1 RESOLVIDO"data-delay=300>'),tt=b('<span class="h-min cursor-default rounded border border-white bg-neutral-900 p-2 font-serif text-2xl text-white">Clique para iniciar...');function le(){async function e(){const o=new Ze,n=document.querySelectorAll(".js-poem-line");t(!1),await o.writeLines(n)}const[s,t]=M(!0);return window.addEventListener("click",e,{once:!0}),y(j,{fadeInDelay:300,get children(){return[W(()=>W(()=>!!s())()&&tt()),et()]}})}const[ot,T]=M(Le);document.addEventListener("load_stage_two",()=>{T(qe)});document.addEventListener("load_stage_three",()=>{T(He)});document.addEventListener("load_stage_four",()=>{T(Ke)});document.addEventListener("load_stage_five",()=>{T(Je)});document.addEventListener("load_stage_six",()=>{T(le)});function st(){return y(le,{})}const nt=document.getElementById("root");ve(()=>y(st,{}),nt);
