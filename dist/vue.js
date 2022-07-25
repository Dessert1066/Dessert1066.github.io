(()=>{"use strict";class t{constructor(){this.subs={}}addSub(t){this.subs[t.uid]=t}notify(){for(let t in this.subs)this.subs[t].update()}}class e{constructor(t){this.data=t,this.walk(this.data)}walk(t){t&&"object"==typeof t&&Object.keys(t).forEach((e=>{this.defineReactive(t,e,t[e])}))}defineReactive(e,s,i){let o=new t;Object.defineProperty(e,s,{enumerable:!0,configurable:!1,get:()=>(t.target&&o.addSub(t.target),i),set:t=>{i=t,o.notify()}}),this.walk(i)}}let s=0;class i{constructor(t,e,i){this.exp=t,this.scope=e,this.callback=i,this.uid=s++,this.update()}get(){t.target=this;let e=i.computeExpression(this.exp,this.scope);return t.target=null,e}update(){let t=this.get();this.callback&&this.callback(t)}static computeExpression(t,e){return new Function("scope","with(scope){return "+t+"}")(e)}}class o{constructor(t){this.$el=t.$el,this.context=t,this.$el&&(this.$fragment=this.nodeToFragment(this.$el),this.compiler(this.$fragment),this.$el.appendChild(this.$fragment))}nodeToFragment(t){let e=document.createDocumentFragment();return t.childNodes&&t.childNodes.length&&t.childNodes.forEach((t=>{this.ignorable(t)||e.appendChild(t)})),e}ignorable(t){return 8===t.nodeType||3===t.nodeType&&/^[\t\n\r]+/.test(t.textContent)}compiler(t){t.childNodes&&t.childNodes.length&&t.childNodes.forEach((t=>{1===t.nodeType?this.compilerElementNode(t):3===t.nodeType&&this.compilerTextNode(t)}))}compilerElementNode(t){let e=this;[...t.attributes].forEach((s=>{let{name:o,value:n}=s;if(0===o.indexOf("v-"))switch(o.slice(2)){case"text":new i(n,this.context,(e=>{t.textContent=e}));break;case"model":new i(n,this.context,(e=>{t.value=e})),t.addEventListener("input",(t=>{e.context[n]=t.target.value}))}0===o.indexOf("@")&&this.compilerMethods(this.context,t,o,n)})),this.compiler(t)}compilerMethods(t,e,s,i){let o=s.slice(1),n=t[i];e.addEventListener(o,n.bind(t))}compilerTextNode(t){let e=t.textContent.trim();if(e){let s=this.parseText(e);new i(s,this.context,(e=>{t.textContent=e}))}}parseText(t){const e=/\{\{(.+?)\}\}/g;let s=t.split(e),i=t.match(e),o=[];return s.forEach((t=>{i&&i.indexOf("{{"+t+"}}")>-1?o.push("("+t+")"):o.push("`"+t+"`")})),o.join("+")}}window.Vue=class{constructor(t){this.$el=document.querySelector(t.el),this.$data=t.data||{},this._proxyData(this.$data),this._proxyMethods(t.methods),new e(this.$data),new o(this)}_proxyData(t){Object.keys(t).forEach((e=>{Object.defineProperty(this,e,{set(s){t[e]=s},get:()=>t[e]})}))}_proxyMethods(t){t&&"object"==typeof t&&Object.keys(t).forEach((e=>{this[e]=t[e]}))}}})();