(function(a){function t(t){for(var n,r,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(a[n]=s[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var a,t=0;t<o.length;t++){for(var e=o[t],n=!0,l=1;l<e.length;l++){var s=e[l];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),a=r(r.s=e[0]))}return a}var n={},i={"consiglio-titolariIncarichiPolitici":0},o=[];function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=a,r.c=n,r.d=function(a,t,e){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)r.d(e,n,function(t){return a[t]}.bind(null,n));return e},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=s;o.push([6,"chunk-vendors","chunk-common"]),e()})({6:function(a,t,e){a.exports=e("9eb5")},"9eb5":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("Header"),a._m(0),a._m(1),a._m(2),e("Footer")],1)},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"bg-title-area"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"breadcrumb-container",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb pt-2 pl-4 mb-0 pb-0",attrs:{id:"bread"}})]),e("h1",{staticClass:"pl-4 pb-2 dark-obj-name small-title",attrs:{id:"title"}},[a._v("Titolari di incarichi politici")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"m-2 mr-4"}),e("div",{attrs:{id:"page_data"}}),e("br"),e("div",{staticClass:"box-section search row"},[e("div",{staticClass:"form-group col-md-6"},[e("div",{staticClass:"bootstrap-select-wrapper"},[e("label",{attrs:{for:"legislatura"}},[a._v("Legislatura")]),e("select",{staticClass:"select-fix",attrs:{id:"legislatura",name:"legislatura"}})])]),e("div",{staticClass:"form-group col-md-6"},[e("div",{staticClass:"it-datepicker-wrapper"},[e("div",{staticClass:"bootstrap-select-wrapper"},[e("label",{attrs:{for:"anno"}},[a._v("Anno")]),e("select",{staticClass:"select-fix",attrs:{id:"anno",name:"anno"}})])])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container-fluid"},[e("table",{staticClass:"table table-hover table-striped table-bordered table-provvedimenti table-responsive",attrs:{id:"data_table_provvedimenti"}},[e("thead",{attrs:{id:"thead"}}),e("tbody",{attrs:{id:"tbody"}})]),e("div",{attrs:{id:"paginazione"}}),e("div",{staticClass:"trasp-last-update text-right"},[e("i",{staticClass:"glyphicon glyphicon-time"}),a._v("CONTENUTO AGGIORNATO AL\n      "),e("span",{attrs:{id:"dataUltimoAggiornamento"}})])])}],r=(e("d004"),e("3b2b"),e("a481"),e("456d"),e("386d"),e("b54a"),e("ac6a"),e("6efe"),e("e329")),l=e("be72"),s=e("6e21");$(document).ready(function(){var a=function(){this.legislatura=null,this.anno=null},t=function(){this.id=null,this.titolo=null,this.anni=[]},e=[];function n(a){var t='<ul class="list-unstyled">';return a.components.forEach(function(a){var e=a.components.attachment,n=a.components.link;void 0!=a.properties.testo&&(t+=a.properties.testo),void 0!=e&&e.components.forEach(function(a){var e=apibase.baseurl+a.properties.address;t+='<a href="'+e+'" target="_blank">'+a.title+"</a>"}),void 0!=n&&n.components.forEach(function(a){var e=a.properties.url;t+='<a href="'+e+'">'+a.title+"</a>"})}),t+="</ul>",t}function i(a){$.ajax({url:apibase.baseurl+a.refType+"/"+a.singleId,success:function(t){if(t){var e="<strong>"+t.title+"</strong>";void 0!=t.properties.gruppo&&(e+="<p><small> Gruppo di Appartenenza:</small><br/> <strong>"+t.properties.gruppo),void 0!=t.properties.data_insediamento&&(e+="<p>Inizio mandato: <br><b>"+t.properties.data_insediamento+"</b></p>"),void 0!=t.properties.data_fine_mandato&&(e+="<p>Fine mandato: <br><b>"+t.properties.data_fine_mandato+"</b></p>"),$("#related_"+a.singleId).html(e)}}})}function o(a){var t="<p id='related_"+a.singleId+"'></p>";return e.push(a),t}var c=[{label:"Dati personali con indicazione durata incarico o mandato elettivo",tipoCampo:"related",campo:"consigliere",visualizzaCon:o},{label:"Atto di Nomina",tipoCampo:"component",campo:"atto_nomina",visualizzaCon:n},{label:"Curriculum Vitae",tipoCampo:"component",campo:"curriculum",visualizzaCon:n},{label:"Compensi connessi alla carica",tipoCampo:"component",campo:"compensi",visualizzaCon:n},{label:"Elenco degli operatori invitati a presentare offerte",tipoCampo:"component",campo:"elenco_operatori_invitati",visualizzaCon:n},{label:"Viaggi di Servizio o Missioni",tipoCampo:"component",campo:"viaggi_servizi_missioni",visualizzaCon:n},{label:"Dichiarazione dei redditi",tipoCampo:"component",campo:"reddito",optional:!0,visualizzaCon:n},{label:"Dati di patrimonio, incarichi e cariche ricoperte",tipoCampo:"component",campo:"patrimonio",visualizzaCon:n},{label:"Dichiarazioni coniuge non separato e parenti entro il II° grado",tipoCampo:"component",campo:"coniuge",visualizzaCon:n},{label:"Spese sostenute e obbligazioni per le elezioni",tipoCampo:"component",campo:"spese_elezioni",optional:!0,visualizzaCon:n}];function p(a){for(var t="",e=0,n=b;e<n.length;e++){var i=n[e],o=null;o="property"===i.tipoCampo?a.properties[i.campo]:"component"===i.tipoCampo?a.components[i.campo]:"related"===i.tipoCampo?{refType:"10010",singleId:a.properties[i.campo]}:a[i.campo],o&&i.visualizzaCon&&(o=i.visualizzaCon(o)),t+="<td>"+(o||"")+"</td>"}return t}function u(a){var t="<tr>";b=c;for(var n=0,o=b;n<o.length;n++){var l=o[n];t+="<th>"+l.label+"</th>"}t+="</tr>",$("#thead").html(t);var s=$("#tbody");if(a&&a.content&&(a.content.forEach(function(a){var t=a.id;s.append('<tr data-oid="'+t+'"></tr>');var e=p(a);$('#tbody tr[data-oid="'+a.id+'"]').first().html(e)}),e.length>0))for(var u=0;u<e.length;u++){var d=e[u];i(d)}0==a.totalPages?$("#tbody").html('<tr><td colspan="'+b.length+'">Nessun risultato corrispondente alla ricerca</td></tr>'):$("#paginazione").html(r["a"].renderizzaComponente(a,{paginationWrapper:"justify-content-center"}))}function d(a){$("#page_data").html(s["a"].renderPaginaBase(a))}function v(t,e){var n=new a;n.legislatura=t,n.anno=e;for(var i=window.location.search,o=0,r=Object.keys(n);o<r.length;o++){var l=r[o],s=n[l];i=i.replace(new RegExp("&?"+l+"=[^&]*","g"),""),null!=s&&""!=s&&(i+="&"+l+"="+s)}window.location.search=i}function m(){var a={},t=f.get("legislatura");null!=t?(a["legislatura"]=t,$("#legislatura").val(t).change()):a["legislatura"]=C[0].id;var e=f.get("anno");return null!=e?(a["anno"]=e,$("#anno").val(e).change()):a["anno"]=C[0].anni[0],a}$("#bottoneReset").click(function(){for(var t=new a,e=window.location.search,n=0,i=Object.keys(t);n<i.length;n++){var o=i[n];e=e.replace(new RegExp("&"+o+"=[^&]*","g"),"")}window.location.search=e}),$(".it-date-datepicker").datepicker({inputFormat:["dd/MM/yyyy"],outputFormat:"dd/MM/yyyy"});var f=new URLSearchParams(window.location.search),b=c,g=apibase.baseurl+"10200?size=10";g+=r["a"].inizializzaUrl(f);var h=apibase.baseurl+"pagina/"+f.get("section_id");$.ajax({method:"GET",url:h,success:d,contentType:"application/json",dataType:"json"}),$.ajax({method:"POST",url:apibase.baseurl+"dda/10300",success:function(a){var t=new Date(a),e=l["a"].renderData(t,"/");$("#dataUltimoAggiornamento").html(e)}});var C=[];function y(a){var t=[],e=new Date(a.properties.data_inizio),n=new Date;a.properties.data_fine&&(n=new Date(a.properties.data_fine));var i=n.getFullYear(),o=e.getFullYear();if(i===o)return[o];for(var r=i;r>=o;r--)t.push(r);return t}function _(a){for(var t=0,e=C;t<e.length;t++){var n=e[t];if(n.id==a)return n}return null}function z(a,t){var e=$("#legislatura");C.forEach(function(a){e.append('<option value="'+a.id+'">'+a.titolo+"</option>")});var n=_(a),i=$("#anno");n.anni.forEach(function(a){i.append('<option value="'+a+'">'+a+"</option>")}),e.val(a+""),i.val(t+""),e.selectpicker("refresh"),i.selectpicker("refresh"),e.change(function(){var a=_(e.val());v(a.id,a.anni[0])}),i.change(function(){v(a,i.val())})}$.ajax({url:apibase.baseurl+"legislature",success:function(a){a&&a.content&&(C=a.content.map(function(a){var e=new t;return e.id=a.id,e.titolo=a.title,e.anni=y(a),e}));var e=m();z(e.legislatura,e.anno),$.ajax({method:"POST",url:g,data:JSON.stringify(e||{}),success:u,contentType:"application/json",dataType:"json"})}})});e("3f66");var c=e("da3a"),p=e("b444"),u={name:"app",components:{Footer:p["a"],Header:c["a"]}},d=u,v=e("2877"),m=Object(v["a"])(d,i,o,!1,null,null,null),f=m.exports;new n["a"]({render:function(a){return a(f)}}).$mount("#app")}});
//# sourceMappingURL=consiglio-titolariIncarichiPolitici.4f8a5a65.js.map