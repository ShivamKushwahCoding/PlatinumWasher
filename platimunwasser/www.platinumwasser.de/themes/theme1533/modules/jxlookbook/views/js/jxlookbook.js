(function(t){var n={};function r(e){if(n[e]){return n[e].exports}var o=n[e]={i:e,l:false,exports:{}};t[e].call(o.exports,o,o.exports,r);o.l=true;return o.exports}r.m=t;r.c=n;r.d=function(t,n,e){if(!r.o(t,n)){Object.defineProperty(t,n,{configurable:false,enumerable:true,get:e})}};r.n=function(t){var n=t&&t.__esModule?function n(){return t["default"]}:function n(){return t};r.d(n,"a",n);return n};r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)};r.p="";return r(r.s=43)})({43:function(t,n){
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
$(document).ready(function(){var t=$(this);t.on("click",".hotSpotWrap .point",function(){var t=$(this);t.parent(".hotSpotWrap").find(".point.active").not(this).popover("hide")})})}});