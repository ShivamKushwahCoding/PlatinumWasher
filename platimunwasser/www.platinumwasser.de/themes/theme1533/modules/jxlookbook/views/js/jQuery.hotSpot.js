(function(t){var e={};function i(n){if(e[n]){return e[n].exports}var o=e[n]={i:n,l:false,exports:{}};t[n].call(o.exports,o,o.exports,i);o.l=true;return o.exports}i.m=t;i.c=e;i.d=function(t,e,n){if(!i.o(t,e)){Object.defineProperty(t,e,{configurable:false,enumerable:true,get:n})}};i.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};i.d(e,"a",e);return e};i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};i.p="";return i(i.s=42)})({42:function(t,e){
/*
 * 2017-2018 Zemez
 *
 * JX Look Book
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the General Public License (GPL 2.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/GPL-2.0

 * @author     Zemez
 * @copyright  2017-2018 Zemez
 * @license    http://opensource.org/licenses/GPL-2.0 General Public License (GPL 2.0)
 */
(function(t,e,i,n){var o="hotSpot",s={items:[]};function r(e,i){var n=t("<div>",{class:"point","data-toggle":"popover"}),o="right";if(e.coordinates.x>50){o="left"}n.css({position:"absolute",left:e.coordinates.x+"%",top:e.coordinates.y+"%"}).appendTo(i).popover({html:true,content:e.content,placement:o});if(e.id_spot){n.attr("data-point-id",e.id_spot);t("<a>",{href:"#",class:"delete-point",html:'<i class="process-icon-cancel"></i>'}).appendTo(n)}}function a(e,i,n){this.elem=e;this.$img=t(">img",e);this.selector=n;this.options=t.extend({},s,i||{});this.options.items=s.items.concat(i.items);this.pagesNum=0;this.loading=false;this._defaults=s;this._name=o;return this.init()}a.prototype.init=function(){var e,i=this.elem,n=t(i),o=this.$img,s=this.options;for(e=0;e<s.items.length;e++){r(s.items[e],n)}};t.fn[o]=function(e){var i=this.selector;return this.each(function(){if(!t.data(this,"plugin_"+o)){t.data(this,"plugin_"+o,new a(this,e,i))}})}})(jQuery,window,document)}});