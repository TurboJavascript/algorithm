/*! Copyright By yanyunchangfeng */!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(2),u=r(3),a=r(4),l=r(5),f=r(6),i=r(7),c=r(8),s=r(9);t.default={bubbleSort:n.default,quickSort:i.default,insertSort:a.default,unique:s.default,isPrime:l.default,getMonthData:o.default,ranNum:c.default,genColor:u.default.genColor,copyProperties:f.default.copyProperties,mix:f.default.mix};for(var d="hello",p=[],v=0;v<d.length;v++)d.indexOf(d[v])==v&&(p[d[v]]=d.split(d[v]).length-1);console.log(p);var g={name:"obj",dose:function(){return this.name="does",function(){return this.name}}}.dose().call(this);console.log(g);d="asdfdsfdgdfgreriueghnuirg";for(var y={},h=0;h<d.length;h++)y[d[h]]?y[d[h]]++:y[d[h]]=1;var b,m=0;for(var _ in y)y[_]>m&&(m=y[_],b=_);console.log(b,m);document.getElementsByTagName("input").length;var M=[11,[33,44,55,66]];M=Array.prototype.concat.apply([],M),console.log(M),console.log(Math.max.apply(NaN,M));for(v=0;v<=3;v++)setTimeout(function(e){return function(){console.log(e)}}(v),0);var O=document.getElementById("textarea"),P=document.getElementById("areahtml");O.onblur=function(){P.innerHTML=O.value}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=e.length,r=!0,n=1;n<t&&r;n++){r=!1;for(var o=0;o<t-n;o++)e[o]>e[o+1]&&(e[o]=[e[o+1],e[o+1]=e[o]][0],r=!0)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var r=[];e&&t||(e=(l=new Date).getFullYear(),t=l.getMonth()+1);for(var n=new Date(e,t-1,1).getDay(),o=new Date(e,t-1,0).getDate(),u=new Date(e,t,0).getDate(),a=0;a<42;a++){var l,f=e,i=t,c=l=a+1-n;l<=0?(i-=1,c=l+o):l>u&&(i+=1,c=l-u),13===i&&(i=1,f+=1),0===i&&(i=12,f-=1),r.push({thisYear:f,thisMonth:i,date:l,showDate:c})}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["#25859e","#6acece","#e78816","#eabc7f","#12619d","#ad2532","#15938d","#b3aa9b","#042d4c"];t.default={baseColor:n,genColor:function(e){for(var t=[],r=0,o=0;o<e.length;o++)r<n.length?t[o]=n[r++]:(r=0,t[o]=n[r++]);return t}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[1,5,4,3,2,6,44,0];console.time("i1"),function(e){for(var t=1;t<e.length;t++){for(var r=e[t],n=t-1;r<e[n];)e[n+1]=e[n],n--;e[n+1]=r}}(n),console.log(n),console.timeEnd("i1"),t.default=function(e){for(var t=1;t<e.length;t++){for(var r=e[t],n=t-1;n>=0&&e[n]>r;)e[n+1]=e[n],n--;e[n+1]=r}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=[],function(e){if(e<=3)return!0;if(void 0!==n[e])return!0;for(var t=2;t<Math.sqrt(e);t++)if(e%t==0)return!1;return n[e]=!0,!0});t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var r=0,n=Reflect.ownKeys(t);r<n.length;r++){var o=n[r];if("constructor"!==o&&"prototype"!==o&&"name"!==o){var u=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(e,o,u)}}};t.default={copyProperties:n,mix:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=function(){},o=0,u=e;o<u.length;o++){var a=u[o];n(r,a),n(r.prototype,a.prototype)}return r}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){if(e.length>1){for(var t=parseInt(e.length/2+""),r=e.splice(t,1),o=[],u=[],a=0;a<e.length;a++)e[a]<r?o.push(e[a]):u.push(e[a]);return n(o).concat(r,n(u))}return e};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return Math.trunc(Math.random()*(t-e)+e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){for(var t=[],r=[],n=0;n<e.length;n++)r[e[n]]||(t.push(e[n]),r[e[n]]=!0);return t}}]);