(function(e){var n={};function i(t){if(n[t]){return n[t].exports}var l=n[t]={i:t,l:false,exports:{}};e[t].call(l.exports,l,l.exports,i);l.l=true;return l.exports}i.m=e;i.c=n;i.d=function(e,n,t){if(!i.o(e,n)){Object.defineProperty(e,n,{configurable:false,enumerable:true,get:t})}};i.n=function(e){var n=e&&e.__esModule?function n(){return e["default"]}:function n(){return e};i.d(n,"a",n);return n};i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)};i.p="";return i(i.s=48)})({48:function(e,n){
/*
 * 2017-2018 Zemez
 *
 * JX Mega Menu
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the General Public License (GPL 2.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/GPL-2.0
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade the module to newer
 * versions in the future.
 *
 * @author     Zemez (Alexander Grosul)
 * @copyright  2017-2018 Zemez
 * @license    http://opensource.org/licenses/GPL-2.0 General Public License (GPL 2.0)
 */
var t=false;var l=$("ul.menu");var u=$(".default-menu .menu-title");$(document).ready(function(){l=$("ul.menu");u=$(".default-menu .menu-title");m();s();$(window).resize(s)});function s(){if($(document).width()<=767&&t==false){o("enable");t=true}else if($(document).width()>=768){o("disable");t=false}}function r(){u.off();u.removeClass("active");$(".menu > li > ul, .menu > li > ul.is-simplemenu ul, .menu > li > div.is-megamenu").removeClass("menu-mobile").parent().find(".menu-mobile-grover").remove();$(".menu").removeAttr("style");l.superfish("init");$(".menu > li > ul").addClass("submenu-container clearfix");$(".top-level-menu-li-span").each(function(){if($(this).parent().children().length>1){$(this).addClass("sf-with-ul")}})}function a(){var e=document.ontouchstart!==null?"click":"touchstart";l.superfish("destroy");$(".menu").removeAttr("style");u.on(e,function(e){$(this).toggleClass("active").parent().find("ul.menu").stop().slideToggle("medium");return false});$(".menu > li > ul, .menu > li > div.is-megamenu, .menu > li > ul.is-simplemenu ul").addClass("menu-mobile clearfix").parent().prepend('<span class="menu-mobile-grover"></span>');$(".menu .menu-mobile-grover").on(e,function(e){var n=$(this).next().next(".menu-mobile");if(n.is(":hidden")){n.slideDown();$(this).addClass("active")}else{n.slideUp();$(this).removeClass("active")}return false});$(".default-menu > ul:first > li > a, .block_content > ul:first > li > a").on(e,function(e){var n=$(this).prev().offset();var i=n.left-e.pageX;if($(this).parent("li").find("ul").length&&i>=0&&i<=20){e.preventDefault();var t=$(this).next(".menu-mobile");var l=$(this).prev();if(t.is(":hidden")){t.slideDown();l.addClass("active")}else{t.slideUp();l.removeClass("active")}}});$(".top-level-menu-li-span").each(function(){if($(this).parent().children().length>1){$(this).removeClass("sf-with-ul")}})}function o(e){e=="enable"?a():r()}function m(){$(".menu div.is-megamenu > div").each(function(){i=1;$(this).children(".megamenu-col").each(function(e,n){if(i%3==0){$(this).addClass("first-in-line-sm")}i++})})}}});