"use strict";
exports.__esModule = true;
exports.HourHand = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function HourHand(props) {
    var time = props.time, _a = props.fillColor, fillColor = _a === void 0 ? '#0e0e10' : _a;
    var hours = time.getHours() + (time.getMinutes() / 60);
    var rotation = "rotate(".concat((360 / 12) * Number(hours), ", 50, 50)");
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("polygon", { points: '47.4,18 52.6,18 53.2,62 46.8,62', transform: rotation, fill: fillColor }) }));
}
exports.HourHand = HourHand;
