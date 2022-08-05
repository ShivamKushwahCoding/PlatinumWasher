(function(e){var t={};function n(r){if(t[r]){return t[r].exports}var a=t[r]={i:r,l:false,exports:{}};e[r].call(a.exports,a,a.exports,n);a.l=true;return a.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=56)})({56:function(e,t){
/*
* 2007-2018 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2018 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
var n=new Swiper("#ps-image-slider",{autoplay:{delay:$("#ps-image-slider").attr("data-autoplay")},loop:$("#ps-image-slider").data("loop"),effect:"fade",pagination:{el:".swiper-pagination",clickable:true,type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});if($("#ps-image-slider").attr("data-pause")){$("#ps-image-slider").off("mouseenter").on("mouseenter",function(){if("ontouchstart"in document.documentElement){return}else{n.autoplay.stop()}});$("#ps-image-slider").off("mouseleave").on("mouseleave",function(){n.autoplay.start()})}}});