import{L as e}from"./layouthelper-1d804c8c.js";function n(e){return c(e,["popup","addEventListener","removeEventListener"])}function t(e){return c(e,["branchType","reposition","desiredWidth","desiredHeight","minDesiredWidth","minDesiredHeight","closeHierarchyAsync","closeAsync","processCapturedPointerDownAsync","addEventListener","removeEventListener","contains","focus","positionChanged","renderedVisible"])}function r(e){return c(e,["closeHierarchyAsync","closeAsync","processCapturedPointerDownAsync","addEventListener","removeEventListener","contains","focus","positionChanged","renderedVisible"])}function i(e){return c(e,["logicalParent"])}function o(e){return c(e,["logicalChildren","addLogicalChild","removeLogicalChild"])}function s(e){return c(e,["adaptivityEnabled"])}function a(e){return c(e,["processCapturedPointerDownAsync","processCapturedKeyDownAsync"])}function c(e,n){if(0===n.length)throw new Error("empty interface");for(const t of n)if(!(t in e))return!1;return!0}class d{static getParent(n,t){var r;return i(n)&&null!==(r=n.logicalParent)&&void 0!==r?r:e.getParent(n,t)}static findParent(e,n,t=!0){for(const r of d.getRootPath(e,null,t)){if(r&&n(r))return r}return null}static containsElement(e,n){return!!n&&null!==d.findParent(n,(n=>n===e))}static*getRootPath(e,n=null,t=!0){let r=d.getParent(e,t);for(;r&&r!==n;)yield r,r=d.getParent(r,t)}}export{d as L,r as a,o as b,t as c,n as d,i as e,s as f,a as i};
