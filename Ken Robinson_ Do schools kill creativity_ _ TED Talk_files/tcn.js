!function e(o,t,i){function n(r,s){if(!t[r]){if(!o[r]){var a="function"==typeof require&&require;if(!s&&a)return a(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+r+"'")}var _=t[r]={exports:{}};o[r][0].call(_.exports,function(e){var t=o[r][1][e];return n(t||e)},_,_.exports,e,o,t,i)}return t[r].exports}for(var c="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({1:[function(e,o,t){var i=e("./shared");i.showCookieUseBanner()||i.showPrivacyUpdateBanner()},{"./shared":6}],2:[function(e,o,t){var i=document,n=!!(window.location.host||"").match(/\.ted\.com(?:\:\d+)?$/i),c="/"+(n?" ;domain=.ted.com":"");t.get=function(e){var o=new RegExp("; "+e+"=([^;]*)"),t=("; "+i.cookie).match(o);return t?t[1]:void 0},t.set=function(e,o){i.cookie=[e+"="+o,"expires=Fri, 31 Dec 9999 23:59:59 GMT","path="+c].join("; ")},t.unset=function(e){i.cookie=[e+"=","expires=Thu, 01 Jan 1970 00:00:00 GMT","path="+c].join("; ")}},{}],3:[function(e,o,t){t.compress=function(e){return Math.floor(+e/36e5).toString(36)},t.decompress=function(e){return 36e5*parseInt(""+e,36)}},{}],4:[function(e,o,t){function i(e){var o=e.getElementsByTagName("a");o[o.length-1].onclick=function(){return t.onDismiss&&t.onDismiss(),e.innerHTML="",!1}}function n(e){var o=_.getElementsByTagName("head")[0],t=_.createElement("style");t.appendChild(_.createTextNode(a)),o.appendChild(t);var n=_.createElement("div");n.innerHTML=u[e],i(n),_.body.appendChild(n)}function c(e){var o=_.readyState;"interactive"===o||"loading"===o?setTimeout(function(){c(e)},100):e&&e()}var r=e("./notice-types"),s='<div class="_Notice_vquc8_16"><div class="_Notice__inner_vquc8_38">{%MESSAGE%}</div><a href="#" role="button" class="_Notice__close_vquc8_56"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0, 0, 512, 512" class="_Notice__close__icon_vquc8_66"><title>Close</title><path d="M377.047 184.198q0 8.26-6.037 14.297L313.505 256l57.505 57.505q6.037 6.037 6.037 14.297 0 8.578-6.037 14.615l-28.593 28.593q-6.037 6.037-14.615 6.037-8.26 0-14.297-6.037L256 313.505l-57.505 57.505q-6.037 6.037-14.297 6.037-8.578 0-14.615-6.037l-28.593-28.593q-6.037-6.037-6.037-14.615 0-8.26 6.037-14.297L198.495 256l-57.505-57.505q-6.037-6.037-6.037-14.297 0-8.578 6.037-14.615l28.593-28.593q6.037-6.037 14.615-6.037 8.26 0 14.297 6.037L256 198.495l57.505-57.505q6.037-6.037 14.297-6.037 8.578 0 14.615 6.037l28.593 28.593q6.037 6.037 6.037 14.615zM500 256q0-66.401-32.724-122.477-32.724-56.075-88.799-88.799Q322.401 12 256 12q-66.401 0-122.477 32.724-56.075 32.724-88.799 88.799Q12 189.599 12 256q0 66.401 32.724 122.477 32.724 56.075 88.799 88.799Q189.599 500 256 500q66.401 0 122.477-32.724 56.075-32.724 88.799-88.799Q500 322.401 500 256z"></path></svg></a></div>',a="._Notice_vquc8_16{display:none}@media only screen{._Notice_vquc8_16{background:#333;color:#bbb;display:block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;font-weight:300;line-height:20px;position:fixed;bottom:0;left:0;width:100%;z-index:999999999}._Notice__inner_vquc8_38{padding:10px 45px 10px 10px}._Notice__bold_vquc8_42{color:#fff;font-weight:400}._Notice__link_vquc8_47{color:#bbb;text-decoration:underline}._Notice__link_vquc8_47:hover{color:#fff}._Notice__close_vquc8_56{display:block;padding:10px;text-decoration:none;position:absolute;top:0;right:10px}._Notice__close__icon_vquc8_66{display:block;fill:#bbb;width:20px;height:20px}._Notice__close_vquc8_56:hover ._Notice__close__icon_vquc8_66{fill:#fff}}@media only screen and (min-width:600px){._Notice_vquc8_16{font-size:18px;line-height:24px}._Notice__inner_vquc8_38{padding:20px 60px 20px 20px}._Notice__close_vquc8_56{position:absolute;top:10px;right:15px}._Notice__close__icon_vquc8_66{width:24px;height:24px}}",_=window.document,u={};u[r.COOKIE_USE]=s.replace("{%MESSAGE%}",'Hi! We&rsquo;ve updated our <a href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" target="_blank" class="_Notice__link_vquc8_47">privacy policy</a> to explain how we process and store your data and use cookies. <strong class="_Notice__bold_vquc8_42">By continuing to browse the site, you&rsquo;re agreeing to TED&rsquo;s use of cookies.</strong>'),u[r.PRIVACY_UPDATE]=s.replace("{%MESSAGE%}",'Hi! We&rsquo;ve updated our <a href="https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy" target="_blank" class="_Notice__link_vquc8_47">privacy policy</a> to explain how we process and store your data. Please check it out to continue using our site.'),t.noticeTypes=r,t.show=function(e){c(function(){n(e)})},t.onDismiss=function(){}},{"./notice-types":5}],5:[function(e,o,t){t.COOKIE_USE="COOKIE_USE",t.PRIVACY_UPDATE="UPDATE"},{}],6:[function(e,o,t){function i(){n.set(s,_)}var n=e("./modules/cookie"),c=e("./modules/date"),r=e("./modules/notice"),s="_tcn",a=new Date(2018,4,16),_=c.compress(a),u=n.get(s);t.showCookieUseBanner=function(){return!(u&&!(document.location.search||"").match(/[?&]geo=[A-Z]{2}\b/))&&(r.onDismiss=i,r.show(r.noticeTypes.COOKIE_USE),!0)},t.showPrivacyUpdateBanner=function(){return!!(u&&c.decompress(u)<c.decompress(_))&&(r.show(r.noticeTypes.PRIVACY_UPDATE),i(),!0)},t.setCookie=function(){return!u&&(i(),!0)}},{"./modules/cookie":2,"./modules/date":3,"./modules/notice":4}]},{},[1]);