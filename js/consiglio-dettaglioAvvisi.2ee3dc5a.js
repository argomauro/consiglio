(function(e){function a(a){for(var n,r,o=a[0],l=a[1],c=a[2],p=0,m=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(a);while(m.length)m.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],n=!0,o=1;o<t.length;o++){var l=t[o];0!==i[l]&&(n=!1)}n&&(s.splice(a--,1),e=r(r.s=t[0]))}return e}var n={},i={"consiglio-dettaglioAvvisi":0},s=[];function r(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)r.d(t,n,function(a){return e[a]}.bind(null,n));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;s.push([9,"chunk-vendors","chunk-common"]),t()})({"0349":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("f751"),t("097d");var n=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("Header"),e._m(0),t("div",{staticClass:"container",attrs:{id:"container_obj"}},[t("div",{staticClass:"m-2"}),t("div",{staticClass:"row ml-4"},[e._m(1),t("div",{staticClass:"col-12 col-sm-12 col-md-3 link-list-wrapper",attrs:{id:"side_menu"}},[t("Condividi"),e._m(2),e._m(3)],1)])]),t("Footer")],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bg-title-area"},[t("div",{staticClass:"container"},[t("nav",{staticClass:"breadcrumb-container",attrs:{"aria-label":"breadcrumb"}},[t("ol",{staticClass:"breadcrumb pt-2 pl-4 mb-0 pb-0",attrs:{id:"bread"}})]),t("h1",{staticClass:"pl-4 pb-2 dark-obj-name small-title",attrs:{id:"title"}})])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-12 col-sm-12 col-md-9",attrs:{id:"container_base"}},[t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col col-sm-6"},[t("span",{staticClass:"mb-2 light-obj-name",attrs:{id:"title_leg",href:"#"}})]),t("div",{staticClass:"col col-sm-6"},[t("span",{staticClass:"mb-2 light-obj-name",attrs:{id:"title_prev"}})])]),t("div",{staticClass:"container",attrs:{id:"obj_anagrafica"}}),t("div",{staticClass:"d-lg-none",attrs:{id:"obj_tabs_nav_mobile"}}),t("div",{staticClass:"d-none d-lg-block",attrs:{id:"obj_tabs_nav"}})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"collapse-header",attrs:{id:"headingLEG"}},[t("button",{staticClass:"btn-legislature",attrs:{"data-toggle":"collapse","data-target":"#accordionLeg","aria-expanded":"false","aria-controls":"accordionLeg"}},[e._v("Legislature precedenti")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"collapse",attrs:{id:"accordionLeg",role:"tabpanel","aria-labelledby":"Legislature precedenti"}},[t("div",{staticClass:"collapse-body"})])}],r=(t("d004"),t("b54a"),t("ac6a"),t("386d"),t("6efe"),t("be72"));$(document).ready(function(){var e=new URLSearchParams(window.location.search);if(e.has("detail_obj_id")&&e.has("ref_type_id")){var a=apibase.baseurl+e.get("ref_type_id")+"/"+e.get("detail_obj_id");$.ajax({url:a,success:function(e){if(null!=e){$("#obj_tabs_nav").hide(),$("#nav-tabContent").hide(),$("#obj_anagrafica").hide(),$("#headingLEG").hide();var a="";a=e.properties.data_di_pubblicazione?"Pubblicato il "+r["a"].renderDataTestuale(e.properties.data_di_pubblicazione):"",e.properties.data_di_scadenza&&(a+="<br/> Scade il "+r["a"].renderDataTestuale(e.properties.data_di_scadenza),e.properties.data_di_scadenza_time&&(a+=" alle "+e.properties.data_di_scadenza_time.slice(0,5))),$("#title").text(e.title);var t=e.properties.sottotitolo;void 0==t&&(t="");var n="<p>"+t+"</p> <p ><strong>"+a+"</strong></p ></div>";void 0!=e.components.immagine&&e.components.immagine.components.length>0?($("#container_base").append('</div><div class="row">\n<div class="col-3 " id="row_immagine">\n\n'+"</div> <div class='col-9' id='col_corpo'></div> \n</div>"),e.components.immagine.components.forEach(function(e){var a='<img id="img_pagina" class="img_elenco" alt="'+e.title+'" title="'+e.title+'" /> ';if($("#row_immagine").append(a),void 0!=e.components.file){if(e.components.file.components.length>0){var t=e.components.file.components[0],n=baseImgUrl+t.properties.address,i=baseImgUrl+t.properties.thumbadress;$("#img_pagina").attr("src",n),$("#img_pagina").attr("data-src",i)}}else{n="assets/consigliere_colore.svg";$("#img_pagina").attr("src",n),$("#img_pagina").attr("data-src",n)}}),$("#col_corpo").append(n+e.properties.descrizione)):$("#container_base").append(n+e.properties.descrizione),void 0!=e.components.allegati&&e.components.allegati.components.length>0&&($("#container_base").append('<hr class="border-news mb-0"/><div class="row">\n<h6 class="dark-obj-name ml-2">'+e.components.allegati.label+'</h6><div class="container " id="row_allegato">\n\n</div>\n</div>'),e.components.allegati.components.forEach(function(e){var a='<div class="row  bg-title-area m-2"  ><div class="col"> <a href="'+baseImgUrl+e.properties.address+'" target="_blank"> '+e.title+" </a></div></div>";$("#row_allegato").append(a)})),void 0!=e.components.link&&e.components.link.components.length>0&&($("#container_base").append('<hr class="border-news mb-0"/><div class="row">\n<h6 class="dark-obj-name ml-2">'+e.components.link.label+'</h6><div class="container " id="row_links">\n\n</div>\n</div>'),e.components.link.components.forEach(function(e){var a="";a+='<div class="row  m-2"  ><div class="col"> <a href="'+e.properties.url+'" target="_blank"> '+e.title+" </a></div></div>",$("#row_links").append(a)}));var i=e.components.galleria;if(i){for(var s="",o=0;o<i.components.length;o++){var l=i.components[o].components.file;s+='<hr class="border-news mb-0"/> <div  class="row" id="row_gallery"> <h6 class="dark-obj-name ml-2"> <a  data-toggle="collapse" href="#collapseImg'+o+'" role="button" aria-expanded="true" aria-controls="collapseImg'+o+'"> '+i.label+" </a></h6> </div>",s+='<div id="collapseImg'+o+'" class="row collapse"> <div class="col-12"><h6>'+i.components[o].title+"</h6></div>";for(var c=0;c<l.components.length;c++){var d=l.components[c],p=baseImgUrl+d.properties.address,m=baseImgUrl+d.properties.thumbaddress,b=d.title,v="";s+='<div class="col-6 col-sm-4  align-content-center" > <a href="'+p+'" target="_blank" class="dark-obj-name-bold"><div class =" text-center"><img alt="'+d.title+'" title="'+d.title+'" class="img_elenco" src="'+m+'" /> </div> <p class="dark-obj-name-bold mt-2 mb-0 text-center">'+b+'</p> </a> <p class="little-font-size mt-0 ml-4 mb-5"> '+v+"  </p>  </div>"}}s+="</div>",$("#container_base").append(s)}}}})}else window.location="notFound.html"});t("b4d7");var o=t("da3a"),l=t("b444"),c=t("47e4"),d={name:"app",components:{Footer:l["a"],Header:o["a"],Condividi:c["a"]}},p=d,m=t("2877"),b=Object(m["a"])(p,i,s,!1,null,null,null),v=b.exports;new n["a"]({render:function(e){return e(v)}}).$mount("#app")},9:function(e,a,t){e.exports=t("0349")}});
//# sourceMappingURL=consiglio-dettaglioAvvisi.2ee3dc5a.js.map