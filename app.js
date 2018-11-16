!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=12)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}();var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"get",value:function(t,n){fetch("https://xivapi.com"+t,{mode:"cors"}).then(function(t){return t.json()}).then(function(t){return n(t)})}},{key:"search",value:function(t,n){var e={indexes:"item",filters:"ItemSearchCategory.ID>=1",columns:"ID,Icon,Name,Rarity,ItemSearchCategory.Name,ItemKind.Name",string:t.trim()},r=Object.keys(e).map(function(t){return esc(t)+"="+encodeURIComponent(e[t])}).join("&");this.get("/search?"+r,n)}},{key:"getItem",value:function(t,n){this.get("/Item/"+t,n)}},{key:"getItemPrices",value:function(t,n,e){this.get("/market/"+n+"/items/"+t,e)}},{key:"getItemPriceHistory",value:function(t,n,e){this.get("/market/"+n+"/items/"+t+"/history",e)}},{key:"getCategoryListings",value:function(t,n,e){this.get("/market/"+n+"/category/"+t,e)}},{key:"getSearchCategories",value:function(t){this.get("/market/categories",t)}},{key:"getServerList",value:function(t){this.get("/servers/dc",t)}}]),t}();n.default=new o},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}();var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"get",value:function(t){return"https://xivapi.com"+t}}]),t}();n.default=new o},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),o=a(e(0)),i=a(e(1));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.uiInfo=$(".item-info"),this.uiPrices=$(".market-item-prices"),this.uiHistory=$(".market-item-history")}return r(t,[{key:"renderPrices",value:function(t){var n=this,e=localStorage.getItem("server");this.uiPrices.html('<div class="loading">loading</div>'),o.default.getItemPrices(t,e,function(t){n.uiPrices.html("<h2>Current Prices</h2>"),n.uiInfo.html('<img src="'+i.default.get(t.Item.Icon)+'">\n                 <h1 class="rarity-'+t.Item.Rarity+'">'+t.Item.Name+"</h1>\n                ");var e=[];e.push('<tr><th width="25%">Total</th><th width="25%">Unit</th><th>Quantity</th><th>HQ</th><th>Town</th></tr>'),t.Prices.forEach(function(t,n){e.push("\n                    <tr>\n                        <td>"+numeral(t.PriceTotal).format("0,0")+"</td>\n                        <td>"+numeral(t.PricePerUnit).format("0,0")+"</td>\n                        <td>"+t.Quantity+'</td>\n                        <td align="center">'+(t.IsHQ?'<img src="https://raw.githubusercontent.com/viion/marketboard/master/hq.png" class="hq">':"")+'</td>\n                        <td align="right"><img src="'+i.default.get(t.Town.Icon)+'"></td>\n                    </tr>\n                ')}),n.uiPrices.append("<table>"+e.join("")+"</table>")})}},{key:"renderHistory",value:function(t){var n=this,e=localStorage.getItem("server");this.uiHistory.html('<div class="loading">loading</div>'),o.default.getItemPriceHistory(t,e,function(t){n.uiHistory.html("<h2>History</h2>");var e=[];e.push('<tr><th width="25%">Total</th><th width="25%">Unit</th><th>Quantity</th><th>HQ</th><th>Date</th></tr>'),t.History.forEach(function(t,n){e.push("\n                    <tr>\n                        <td>"+numeral(t.PriceTotal).format("0,0")+"</td>\n                        <td>"+numeral(t.PricePerUnit).format("0,0")+"</td>\n                        <td>"+t.Quantity+'</td>\n                        <td align="center">'+(t.IsHQ?'<img src="https://raw.githubusercontent.com/viion/marketboard/master/hq.png" class="hq">':"")+'</td>\n                        <td align="right">'+moment.unix(t.PurchaseDate).fromNow()+"</td>\n                    </tr>\n                ")}),n.uiHistory.append("<table>"+e.join("")+"</table>")})}}]),t}();n.default=new c},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),o=c(e(0)),i=c(e(2)),a=c(e(1));function c(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.ui=$(".market-category-stock")}return r(t,[{key:"listCategoryStock",value:function(t){var n=this,e=localStorage.getItem("server");this.ui.html('<div class="loading">loading</div>'),o.default.getCategoryListings(t,e,function(t){n.ui.html(""),t.forEach(function(t,e){n.ui.append('<button id="'+t.Item.ID+'" class="rarity-'+t.Item.Rarity+'">\n                        <div><span><img src="https://xivapi.com/img-svg/loading.svg" class="lazy" data-src="'+a.default.get(t.Item.Icon)+'"></span></div>\n                        <div>'+t.Item.Name+"</div>\n                        <span>"+t.Quantity+"</span> \n                    </button>")}),n.watchForSelection(),new LazyLoad({elements_selector:".lazy"})})}},{key:"watchForSelection",value:function(){this.ui.on("click","button",function(t){var n=$(t.currentTarget).attr("id");window.scrollTo(0,0),i.default.renderPrices(n),i.default.renderHistory(n)})}}]),t}();n.default=new s},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),o=c(e(0)),i=c(e(3)),a=c(e(1));function c(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.ui=$(".market-categories")}return r(t,[{key:"render",value:function(){var t=this;o.default.getSearchCategories(function(n){var e={1:[],2:[],3:[],4:[]};n.forEach(function(t,n){e[t.Category][t.Order]=t}),e.forEach(function(n,e){var r=[];n.forEach(function(t,n){r.push('<button id="'+t.ID+'">\n                        <img src="'+a.default.get(t.Icon)+'"><span>'+t.Name+"</span>\n                        </button>\n                    ")}),t.ui.append("<div>"+r.join("")+"</div>")}),t.watchForSelection()})}},{key:"watchForSelection",value:function(){this.ui.on("click","button",function(t){var n=$(t.currentTarget).attr("id");window.scrollTo(0,0),i.default.listCategoryStock(n)})}}]),t}();n.default=new s},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),i=e(0),a=(r=i)&&r.__esModule?r:{default:r};var c=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.localeStorageKey="server",this.defaultServer="Phoenix",this.ui=$(".server-select-box")}return o(t,[{key:"setServerList",value:function(){var t=this;a.default.getServerList(function(n){n.forEach(function(n,e){var r=[];n.forEach(function(t){r.push('<option value="'+t+'">'+t+"</option>")}),t.ui.append('<optgroup label="'+e+'">'+r.join("")+"</optgroup>")}),t.setUserServer()})}},{key:"setUserServer",value:function(){var t=localStorage.getItem(this.localeStorageKey);t=t||this.defaultServer,localStorage.setItem(this.localeStorageKey,t),console.log("Server set to: "+t),this.ui.val(t)}},{key:"watchForSelection",value:function(){var t=this;this.ui.on("change",function(n){var e=$(n.currentTarget).val();localStorage.setItem(t.localeStorageKey,e),location.reload()})}}]),t}();n.default=new c},function(t,n,e){"use strict";Object.prototype.forEach||Object.defineProperty(Object.prototype,"forEach",{value:function(t,n){if(null===this)throw new TypeError("Not an object");for(var e in n=n||window,this)this.hasOwnProperty(e)&&t.call(n,this[e],e,this)}})},function(t,n,e){"use strict";t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),s=null,u=0,l=[],f=e(7);function d(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],n))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(v(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):e.push(r[a]={id:a,parts:[c]})}return e}function h(t,n){var e=c(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),l.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);n>=0&&l.splice(n,1)}function b(t){var n=document.createElement("style");return t.attrs.type="text/css",m(n,t.attrs),h(t,n),n}function m(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function v(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var a=u++;e=s||(s=b(n)),r=k.bind(null,e,a,!1),o=k.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",m(n,t.attrs),h(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,e,n),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){g(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(t,n);return d(e,n),function(t){for(var r=[],o=0;o<e.length;o++){var a=e[o];(c=i[a.id]).refs--,r.push(c)}t&&d(p(t,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var y,x=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function k(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){(t.exports=e(9)(!1)).push([t.i,"/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  background-color: #000;\n  background-image: url(\"https://raw.githubusercontent.com/viion/marketboard/master/bg.jpg\");\n  background-size: cover;\n  background-position: center center;\n  color: #ccc;\n  font-size: 16px; }\n\na {\n  color: #ffcafd; }\n\nmain {\n  display: flex; }\n\nnav {\n  position: relative;\n  z-index: 50;\n  background-color: #333;\n  flex: 0 1 300px;\n  padding-bottom: 100px;\n  border-right: solid 1px #000;\n  box-shadow: 1px 0 5px #000; }\n  nav hr {\n    background-color: #000;\n    height: 1px;\n    margin: 0;\n    border: none; }\n  nav button {\n    width: 100%;\n    display: flex;\n    background-color: transparent;\n    border: none;\n    padding: 10px;\n    color: #fff;\n    text-align: left;\n    border-bottom: solid 1px #000;\n    font-size: 16px;\n    text-shadow: 0 1px 2px #000;\n    transition: .1s;\n    line-height: 24px; }\n    nav button:hover, nav button:focus, nav button:active {\n      background-color: #007bff;\n      cursor: pointer; }\n    nav button img {\n      flex: 0 1 auto;\n      vertical-align: middle;\n      margin: 2px 10px 0 10px; }\n    nav button span {\n      flex: 0 1 auto; }\n  nav .logo {\n    text-align: center;\n    padding: 20px 0; }\n    nav .logo img {\n      height: 80px; }\n    nav .logo h1 {\n      font-size: 30px;\n      font-weight: 700;\n      color: #fff; }\n      nav .logo h1 span {\n        color: yellow; }\n  nav .server {\n    text-align: center;\n    padding: 0 0 20px 0; }\n  nav .market-categories div {\n    border-bottom: solid 10px #000; }\n  nav p {\n    margin-bottom: 15px; }\n\nsection {\n  display: flex;\n  flex: 0 1 calc(100% - 300px); }\n  section > div:first-of-type {\n    background-color: #181818;\n    flex: 0 1 500px;\n    padding: 20px 0; }\n  section > div:last-of-type {\n    background-color: #080808;\n    flex: 0 1 680px; }\n  section .market-category-stock button {\n    width: 100%;\n    display: flex;\n    line-height: 50px;\n    border: none;\n    border-bottom: solid 1px #000;\n    color: #fff;\n    background-color: transparent;\n    text-align: left;\n    padding: 0 20px;\n    font-size: 18px;\n    transition: .1s; }\n    section .market-category-stock button div:first-of-type {\n      flex: 0 1 40px; }\n      section .market-category-stock button div:first-of-type span {\n        border-radius: 5px;\n        box-shadow: 0 1px 3px #000;\n        margin: 5px 0 0 0;\n        position: relative;\n        display: block;\n        width: 40px;\n        height: 40px;\n        overflow: hidden; }\n      section .market-category-stock button div:first-of-type img {\n        position: absolute;\n        width: 40px;\n        height: 40px;\n        left: 0;\n        top: 0; }\n    section .market-category-stock button div:last-of-type {\n      flex: 0 1 calc(100% - 100px);\n      padding-left: 10px; }\n    section .market-category-stock button span {\n      font-size: 20px;\n      flex: 0 1 60px;\n      text-align: right;\n      color: #fffba7; }\n    section .market-category-stock button.rarity-2 {\n      color: #89ffbc; }\n    section .market-category-stock button.rarity-3 {\n      color: #3dafff; }\n    section .market-category-stock button.rarity-4 {\n      color: #f44bff; }\n    section .market-category-stock button.rarity-7 {\n      color: #ff7e85; }\n    section .market-category-stock button:hover, section .market-category-stock button:focus, section .market-category-stock button:active {\n      background-color: #181818;\n      cursor: pointer; }\n  section .item-info {\n    padding: 30px 0 10px 30px;\n    display: flex; }\n    section .item-info img {\n      flex: 0 1 40px; }\n    section .item-info h1 {\n      flex: 0 1 calc(100% - 40px);\n      padding-left: 20px;\n      font-size: 24px;\n      font-weight: 300;\n      color: #fff;\n      margin: 8px 0 0 0; }\n      section .item-info h1.rarity-2 {\n        color: #89ffbc; }\n      section .item-info h1.rarity-3 {\n        color: #3dafff; }\n      section .item-info h1.rarity-4 {\n        color: #f44bff; }\n      section .item-info h1.rarity-7 {\n        color: #ff7e85; }\n  section .market-item-prices,\n  section .market-item-history {\n    padding: 20px; }\n    section .market-item-prices h2,\n    section .market-item-history h2 {\n      font-size: 18px;\n      color: #444;\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      text-align: center;\n      padding: 10px; }\n\nfooter {\n  font-size: 12px;\n  color: #555;\n  text-align: center;\n  padding: 20px; }\n\ntable {\n  width: 100%;\n  background-color: #222;\n  border-radius: 6px;\n  overflow: hidden; }\n  table td {\n    padding: 12px;\n    border-right: solid 2px #000; }\n    table td:last-of-type {\n      border-right: none; }\n    table td:nth-of-type(1) {\n      color: yellow; }\n    table td:nth-of-type(2) {\n      font-weight: 600; }\n    table td img {\n      margin: -8px 0; }\n      table td img.hq {\n        margin: 4px 0 0 0; }\n  table tr {\n    border-bottom: solid 2px #000; }\n  table th {\n    position: relative;\n    z-index: 5;\n    padding: 12px;\n    text-align: left;\n    font-size: 13px;\n    text-transform: uppercase;\n    box-shadow: 0 1px 2px #000;\n    background-color: #181818;\n    color: #3dafff;\n    font-weight: 600; }\n\nselect {\n  border: solid 1px #000;\n  padding: 8px;\n  color: #222;\n  background-color: #eee;\n  border-radius: 5px;\n  box-shadow: 0 1px 2px #000;\n  cursor: pointer; }\n\n.loading {\n  padding: 30px;\n  text-align: center;\n  font-size: 24px;\n  color: #555; }\n",""])},function(t,n,e){var r=e(10);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(8)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){"use strict";e(11);i(e(6));var r=i(e(5)),o=i(e(4));function i(t){return t&&t.__esModule?t:{default:t}}r.default.setServerList(),r.default.watchForSelection(),o.default.render()}]);