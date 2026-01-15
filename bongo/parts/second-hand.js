"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.SecondHand = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var constants_1 = require("../constants");
function SecondHand(props) {
    var _a = props.tickType, tickType = _a === void 0 ? constants_1.TickType.MECHANICAL : _a, time = props.time, _b = props.showCenterDot, showCenterDot = _b === void 0 ? false : _b, _c = props.fillColor, fillColor = _c === void 0 ? '#eb0000' : _c;
    var seconds;
    if (tickType === constants_1.TickType.QUARTZ) {
        seconds = Math.round(time.getMilliseconds() / constants_1.ONE_SECOND + time.getSeconds());
    }
    else {
        seconds = time.getMilliseconds() / constants_1.ONE_SECOND + time.getSeconds();
    }
    var rotationSpeed = tickType === constants_1.TickType.QUARTZ ? 60 : 59;
    var rotation = '';
    if (seconds < rotationSpeed) {
        rotation = "rotate(".concat((360 / rotationSpeed) * (seconds), ", 50, 50)");
    }
    return ((0, jsx_runtime_1.jsxs)("g", __assign({ fill: fillColor, transform: rotation }, { children: [(0, jsx_runtime_1.jsx)("rect", { x: 49.3, y: 18.8, width: 1.4, height: 47.7 }), (0, jsx_runtime_1.jsx)("circle", { cx: 50, cy: 18.8, r: 5.25, strokeWidth: 0 }), showCenterDot && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("circle", { cx: 50, cy: 50, r: 1.5, strokeWidth: 0 }) })] })));
}
exports.SecondHand = SecondHand;
