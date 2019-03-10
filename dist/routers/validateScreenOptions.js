"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var deprecatedKeys=['tabBar'];var _default=function _default(screenOptions,route){var keys=Object.keys(screenOptions);var deprecatedKey=keys.find(function(key){return deprecatedKeys.includes(key);});if(typeof screenOptions.title==='function'){throw new Error(["`title` cannot be defined as a function in navigation options for `"+route.routeName+"` screen. \n",'Try replacing the following:','{','    title: ({ state }) => state...','}','','with:','({ navigation }) => ({','    title: navigation.state...','})'].join('\n'));}if(deprecatedKey&&typeof screenOptions[deprecatedKey]==='function'){throw new Error(["`"+deprecatedKey+"` cannot be defined as a function in navigation options for `"+route.routeName+"` screen. \n",'Try replacing the following:','{',"    "+deprecatedKey+": ({ state }) => ({",'         key: state...','    })','}','','with:','({ navigation }) => ({',"    "+deprecatedKey+"Key: navigation.state...",'})'].join('\n'));}if(deprecatedKey&&typeof screenOptions[deprecatedKey]==='object'){throw new Error(["Invalid key `"+deprecatedKey+"` defined in navigation options for `"+route.routeName+"` screen.",'\n','Try replacing the following navigation options:','{',"    "+deprecatedKey+": {"].concat((0,_toConsumableArray2.default)(Object.keys(screenOptions[deprecatedKey]).map(function(key){return"        "+key+": ...,";})),['    },','}','\n','with:','{'],(0,_toConsumableArray2.default)(Object.keys(screenOptions[deprecatedKey]).map(function(key){return"    "+(deprecatedKey+key[0].toUpperCase()+key.slice(1))+": ...,";})),['}']).join('\n'));}};exports.default=_default;