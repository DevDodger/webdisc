!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.widgetbot=t():e.widgetbot=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.listeners={}}return e.prototype.socketEvent=function(e){try{var t=JSON.parse(e)}catch(e){return}if(t instanceof Object&&!0===t.widgetbot&&t.id===this.id){var n=t.event,r=t.data,i=this.listeners[n];i&&i.forEach(function(e){return e(r)})}},e.prototype.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),console.debug("[embed-api] on '"+e+"'",t)},e}();t.default=r},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=new(n(3).default);t.default=r},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=n(9).version,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.version=o,this.embeds=[],this.register(),document.addEventListener("DOMContentLoaded",this.register.bind(this))}return r(e,[{key:"register",value:function(){var e=document.getElementsByTagName("widgetbot"),t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var u=o.value,s=new i.default(u).root;this.embeds.push(s)}}catch(e){n=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}}]),e}();t.default=a},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=n(8),u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=t,this.id=a.generateUUID(),this.iframe=document.createElement("iframe");var n=this.id,r=this.iframe;if(!this.injected){r.setAttribute("title","WidgetBot Discord chat embed");var u=new o.Client({id:n,iframe:r});a.Shadow(t).appendChild(r);var s=this.parseAttributes(t),c=(s.server,s.channel,s.url),l=i(s,["server","channel","url"]);r.setAttribute("src",c),this.setAPI(t,{on:function(e,t){return u.on(e,t)},emit:function(e,t){return u.emit(e,t)},contentWindow:r.contentWindow,contentDocument:r.contentDocument}),a.applyStyles(t,Object.assign({display:"inline-block",overflow:"hidden",backgroundColor:"#36393E",borderRadius:"7px",verticalAlign:"top"},l)),a.applyStyles(r,{border:"none",width:"100%",height:"100%"})}}return r(e,[{key:"parseAttributes",value:function(e){var t=e.getAttribute("server")||"299881420891881473",n=e.getAttribute("channel"),r=e.getAttribute("shard")||"https://e.widgetbot.io",i=e.getAttribute("username"),o=e.getAttribute("avatar");r.startsWith("http")||(r="https://"+r),r.endsWith("/")&&(r=r.substring(0,r.length-1));var a=r+"/channels/"+t+(n?"/"+n:"")+"/?api="+this.id+(i?"&username="+i:"")+(o?"&avatar="+o:""),u=e.getAttribute("width"),s=e.getAttribute("height");return Object.assign(Object.assign(Object.assign({},u&&{width:+u?u+"px":u}),s&&{height:+s?s+"px":s}),{server:t,channel:n,url:a})}},{key:"setAPI",value:function(e,t){Object.keys(t).forEach(function(n){return e[n]=t[n]})}},{key:"injected",get:function(){return"emit"in this.root&&"on"in this.root}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.API=r.default;var i=n(6);t.Client=i.default;var o=n(7);t.Server=o.default},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var n=e.call(this)||this;return n.server={emit:function(e,t){var r=n.listeners[e];r&&r.forEach(function(e){return e(t)})}},Object.assign(n,t),window.addEventListener("message",function(e){var t=e.data;return n.socketEvent(t)}),n}return r(t,e),t.prototype.emit=function(e,t){if(!window.parent)return!1;var n=JSON.stringify({widgetbot:!0,id:this.id,event:e,data:t});return!!this.iframe.contentWindow&&(this.iframe.contentWindow.postMessage(n,"*"),!0)},t}(n(0).default);t.default=i},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t){var n=e.call(this)||this;return n.targetOrigin="*",n.client={emit:function(e,t){var r=n.listeners[e];r&&r.forEach(function(e){return e(t)})}},Object.assign(n,t),window.addEventListener("message",function(e){var t=e.data;return n.socketEvent(t)}),n}return r(t,e),t.prototype.emit=function(e,t){if(console.debug("[embed-api] emit '"+e+"'",t),!window.parent)return!1;var n=JSON.stringify({widgetbot:!0,id:this.id,event:e,data:t});return window.parent.postMessage(n,this.targetOrigin),!0},t}(n(0).default);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUUID=t.applyStyles=t.Shadow=void 0,t.Shadow=function(e){try{if(e.attachShadow)return e.attachShadow({mode:"open"})}catch(e){}return e},t.applyStyles=function(e,t){return Object.keys(t).forEach(function(n){return e.style[n]=t[n]})},t.generateUUID=function(){var e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})}},function(e){e.exports={name:"@widgetbot/html-embed",version:"1.1.2",description:"html-embed React component",main:"umd/html-embed.min.js",files:["css","es","lib","umd"],scripts:{build:"nwb build-react-component --no-demo",clean:"nwb clean-module && nwb clean-demo",start:"nwb serve-react-demo --port 3200",release:"yarn version && yarn build && yarn publish && yarn purge",purge:"tinyreq -u https://purge.jsdelivr.net/npm/@widgetbot/html-embed"},dependencies:{},devDependencies:{"@types/jest":"^23.3.1","@types/react":"^16.3.14","@types/react-dom":"^16.0.5","@types/webpack-env":"^1.13.6","@widgetbot/embed-api":"^1.1.3","all-contributors-cli":"^5.4.0","babel-core":"^6.26.3","babel-plugin-emotion":"^9.2.8","babel-plugin-graphql-tag":"^1.6.0","babel-plugin-macros":"^2.4.0","babel-plugin-preval":"^3.0.0","babel-plugin-ramda":"^2.0.0","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-preset-env":"^1.7.0","babel-preset-react":"^6.24.1","babel-preset-react-optimize":"^1.0.1","babel-preset-stage-0":"^6.24.1",husky:"^0.14.3",nwb:"0.23.0",prettier:"^1.14.2","pretty-quick":"^1.6.0","tinyreq-cli":"^1.1.1","ts-loader":"^8.0.14",typescript:"^3.0.1"},license:"MIT",repository:"github:widgetbot-io/html-embed",keywords:["react-component"]}}]).default});
//# if ur here u know what ur doing and stop viewing the code because im not that dumb to just leave it unobfuscated!!!!!!!!!!!!!!!!!!!
//# i literally own a obfuscator! CHECK IT OUT. Obfuscator Plus!!