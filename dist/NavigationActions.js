"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var BACK='Navigation/BACK';var INIT='Navigation/INIT';var NAVIGATE='Navigation/NAVIGATE';var SET_PARAMS='Navigation/SET_PARAMS';var back=function back(){var payload=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return{type:BACK,key:payload.key,immediate:payload.immediate};};var init=function init(){var payload=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action={type:INIT};if(payload.params){action.params=payload.params;}return action;};var navigate=function navigate(payload){var action={type:NAVIGATE,routeName:payload.routeName};if(payload.params){action.params=payload.params;}if(payload.action){action.action=payload.action;}if(payload.key){action.key=payload.key;}return action;};var setParams=function setParams(payload){return{type:SET_PARAMS,key:payload.key,params:payload.params};};var _default={BACK:BACK,INIT:INIT,NAVIGATE:NAVIGATE,SET_PARAMS:SET_PARAMS,back:back,init:init,navigate:navigate,setParams:setParams};exports.default=_default;