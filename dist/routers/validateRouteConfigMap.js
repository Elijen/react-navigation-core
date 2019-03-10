"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactIs=require("react-is");var _invariant=_interopRequireDefault(require("../utils/invariant"));function validateRouteConfigMap(routeConfigs){var routeNames=Object.keys(routeConfigs);(0,_invariant.default)(routeNames.length>0,'Please specify at least one route when configuring a navigator.');routeNames.forEach(function(routeName){var routeConfig=routeConfigs[routeName];var screenComponent=getScreenComponent(routeConfig);if(!screenComponent||!(0,_reactIs.isValidElementType)(screenComponent)&&!routeConfig.getScreen){throw new Error("The component for route '"+routeName+"' must be a React component. For example:\n\nimport MyScreen from './MyScreen';\n...\n"+routeName+": MyScreen,\n}\n\nYou can also use a navigator:\n\nimport MyNavigator from './MyNavigator';\n...\n"+routeName+": MyNavigator,\n}");}if(routeConfig.screen&&routeConfig.getScreen){throw new Error("Route '"+routeName+"' should declare a screen or a getScreen, not both.");}});}function getScreenComponent(routeConfig){if(!routeConfig){return null;}return routeConfig.screen?routeConfig.screen:routeConfig;}var _default=validateRouteConfigMap;exports.default=_default;