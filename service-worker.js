"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ecbc1aa4dfcdef93e5dc354b42accc96"],["/static/css/main.6ab905ad.css","8b0484ff59aa64b2b2345abc5a72d33f"],["/static/js/main.a7b60908.js","326e8bb960d0713193b2d2a4c29ba707"],["/static/media/11-OptiHeat-Webapp.6fa29d4c.jpg","6fa29d4caf3e0ac7869c9facb6d05980"],["/static/media/14-MASQuickpark-Solution.74cb16e3.jpg","74cb16e3af59aee54996c044ded41921"],["/static/media/15-Lebenslinien-Webpage.bb958d99.jpg","bb958d994c442e95678028ea36b65691"],["/static/media/16-Wohnbar-Webpage.d0e8f269.jpg","d0e8f269c8e03dca7b81d9747ff5c334"],["/static/media/17-LavioletteRecords-Webpage.697975b9.jpg","697975b95416d31f12074cf6c1b44829"],["/static/media/18-FrankSueltemeyer-Webpage.d8626fce.jpg","d8626fce91315ca07acaa125037b0227"],["/static/media/19-BlogIntelligence-Webpage.e1a5dd6f.jpg","e1a5dd6f8c4bc0c7802a786665c91232"],["/static/media/20-TomTom-Logo.6e7ce454.jpg","6e7ce45453898783a7a7f9e94218e651"],["/static/media/21-Nexenio-Webapp-Logo.e32895d1.jpg","e32895d16810d3d1620d7b3f1ba054cf"],["/static/media/Bachelorpodium2016-Quickpark 2.34f20d68.jpg","34f20d686fa8b8a7b2d88f8f2edb0637"],["/static/media/YouTube_icon_full-color.0fdc197b.svg","0fdc197b04bed0bbc2f011e1d1572fea"],["/static/media/github.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/static/media/header.c17aa247.svg","c17aa247228a4432f01b021965318808"],["/static/media/home.de977d2c.svg","de977d2ccab621430e03cab35431845a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});