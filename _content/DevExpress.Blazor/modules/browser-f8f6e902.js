function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e){if(e.__esModule)return e;var o=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),o}function r(e){var o={exports:{}};return e(o,o.exports),o.exports}var n=r((function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.Browser=void 0;var r=function(){function e(){}return e.IdentUserAgent=function(o,r){void 0===r&&(r=!1);var n=["Mozilla","IE","Firefox","Netscape","Safari","Chrome","Opera","Opera10","Edge"],t="IE",a="Win",i={Safari:2,Chrome:.1,Mozilla:1.9,Netscape:8,Firefox:2,Opera:9,IE:6,Edge:12};if(o&&0!==o.length){o=o.toLowerCase(),e.indentPlatformMajorVersion(o);try{for(var s={Windows:"Win",Macintosh:"Mac","Mac OS":"Mac",Mac_PowerPC:"Mac","cpu os":"MacMobile","cpu iphone os":"MacMobile",Android:"Android","!Windows Phone":"WinPhone","!WPDesktop":"WinPhone","!ZuneWP":"WinPhone"},c="(?:/|\\s*)?",u="(\\d+)(?:\\.((?:\\d+?[1-9])|\\d)0*?)?",l="(?:"+u+")?",d={Safari:"applewebkit(?:.*?(?:version/"+u+"[\\.\\w\\d]*?(?:\\s+mobile/\\S*)?\\s+safari))?",Chrome:"(?:chrome|crios)(?!frame)"+c+l,Mozilla:"mozilla(?:.*rv:"+l+".*Gecko)?",Netscape:"(?:netscape|navigator)\\d*/?\\s*"+l,Firefox:"firefox"+c+l,Opera:"(?:opera|\\sopr)"+c+l,Opera10:"opera.*\\s*version"+c+l,IE:"msie\\s*"+l,Edge:"edge"+c+l},f=null,m=-1,h=0;h<n.length;h++){var M=n[h],p=new RegExp(d[M],"i").exec(o);if(p&&p.index>=0){if("IE"===f&&m>=11&&"Safari"===M)continue;"Opera10"===(f=M)&&(f="Opera"),m=e.GetBrowserVersion(o,p,"trident"+c+l,e.getIECompatibleVersionString()),"Mozilla"===f&&m>=11&&(f="IE")}}f||(f=t);var g=-1!==m;g||(m=i[f]);var P=null,b=Number.MAX_VALUE;for(var v in s)if(Object.prototype.hasOwnProperty.call(s,v)){var w="!"===v.substr(0,1),I=o.indexOf((w?v.substr(1):v).toLowerCase());I>=0&&(I<b||w)&&(b=w?0:I,P=s[v])}var A=o.toUpperCase().match("SM-[A-Z]"),x=A&&A.length>0;"WinPhone"===P&&m<9&&(m=Math.floor(e.getVersionFromTrident(o,"trident"+c+l))),!r&&"IE"===f&&m>7&&document.documentMode<m&&(m=document.documentMode),"WinPhone"===P&&(m=Math.max(9,m)),P||(P=a),P!==s["cpu os"]||g||(m=4),e.fillUserAgentInfo(n,f,m,P,x)}catch(o){e.fillUserAgentInfo(n,t,i[t],a)}}else e.fillUserAgentInfo(n,t,i[t],a)},e.GetBrowserVersion=function(o,r,n,t){var a=e.getVersionFromMatches(r);if(t){var i=e.getVersionFromTrident(o,n);if("edge"===t||parseInt(t)===i)return i}return a},e.getIECompatibleVersionString=function(){if(document.compatible)for(var e=0;e<document.compatible.length;e++)if("IE"===document.compatible[e].userAgent&&document.compatible[e].version)return document.compatible[e].version.toLowerCase();return""},e.isTouchEnabled=function(){return e.hasTouchStart()||e.hasMaxTouchPoints()||e.hasMsMaxTouchPoints()},e.hasTouchStart=function(){return"ontouchstart"in window},e.hasMaxTouchPoints=function(){return navigator.maxTouchPoints>0},e.hasMsMaxTouchPoints=function(){return navigator.msMaxTouchPoints>0},e.hasNavigator=function(){return"undefined"!=typeof navigator},e.fillUserAgentInfo=function(o,r,n,t,a){void 0===a&&(a=!1);for(var i=0;i<o.length;i++){var s=o[i];e[s]=s===r}e.Version=Math.floor(10*n)/10,e.MajorVersion=Math.floor(e.Version),e.WindowsPlatform="Win"===t||"WinPhone"===t,e.MacOSMobilePlatform="MacMobile"===t||"Mac"===t&&e.isTouchEnabled(),e.MacOSPlatform="Mac"===t&&!e.MacOSMobilePlatform,e.AndroidMobilePlatform="Android"===t,e.WindowsPhonePlatform="WinPhone"===t,e.WebKitFamily=e.Safari||e.Chrome||e.Opera&&e.MajorVersion>=15,e.NetscapeFamily=e.Netscape||e.Mozilla||e.Firefox,e.WebKitTouchUI=e.MacOSMobilePlatform||e.AndroidMobilePlatform;var c=e.IE&&e.MajorVersion>9&&e.WindowsPlatform&&e.UserAgent.toLowerCase().indexOf("touch")>=0;if(e.MSTouchUI=c||e.Edge&&!!window.navigator.maxTouchPoints,e.TouchUI=e.WebKitTouchUI||e.MSTouchUI,e.MobileUI=e.WebKitTouchUI||e.WindowsPhonePlatform,e.AndroidDefaultBrowser=e.AndroidMobilePlatform&&!e.Chrome,e.AndroidChromeBrowser=e.AndroidMobilePlatform&&e.Chrome,a&&(e.SamsungAndroidDevice=a),e.MSTouchUI){var u=e.UserAgent.toLowerCase().indexOf("arm;")>-1;e.VirtualKeyboardSupported=u||e.WindowsPhonePlatform}else e.VirtualKeyboardSupported=e.WebKitTouchUI;e.fillDocumentElementBrowserTypeClassNames(o)},e.indentPlatformMajorVersion=function(o){var r=/(?:(?:windows nt|macintosh|mac os|cpu os|cpu iphone os|android|windows phone|linux) )(\d+)(?:[-0-9_.])*/.exec(o);r&&(e.PlaformMajorVersion=r[1])},e.getVersionFromMatches=function(e){var o=-1,r="";return e&&(e[1]&&(r+=e[1],e[2]&&(r+="."+e[2])),""!==r&&(o=parseFloat(r),isNaN(o)&&(o=-1))),o},e.getVersionFromTrident=function(o,r){var n=new RegExp(r,"i").exec(o);return e.getVersionFromMatches(n)+4},e.fillDocumentElementBrowserTypeClassNames=function(o){for(var r="",n=o.concat(["WindowsPlatform","MacOSPlatform","MacOSMobilePlatform","AndroidMobilePlatform","WindowsPhonePlatform","WebKitFamily","WebKitTouchUI","MSTouchUI","TouchUI","AndroidDefaultBrowser"]),t=0;t<n.length;t++){var a=n[t];e[a]&&(r+="dx"+a+" ")}r+="dxBrowserVersion-"+e.MajorVersion,"undefined"!=typeof document&&document&&document.documentElement&&(""!==document.documentElement.className&&(r=" "+r),document.documentElement.className+=r,e.Info=r)},e.getUserAgent=function(){return e.hasNavigator()&&navigator.userAgent?navigator.userAgent.toLowerCase():""},e.UserAgent=e.getUserAgent(),e._foo=e.IdentUserAgent(e.UserAgent),e}();o.Browser=r}));e(n);export{e as a,n as b,r as c,o as g};
