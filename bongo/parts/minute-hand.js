"use strict";
exports.__esModule = true;
exports.MinuteHand = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var constants_1 = require("../constants");
function MinuteHand(props) {
    var _a = props.tickType, tickType = _a === void 0 ? constants_1.TickType.MECHANICAL : _a, time = props.time, fillColor = props.fillColor, animation = props.animation;
    var seconds = time.getMilliseconds() / constants_1.ONE_SECOND + time.getSeconds();
    var minutes = time.getMinutes();
    var rotation;
    // make a little bounce animation on second 59.75 to 60
    // bounce for half a degree further then go back to the original position
    if (tickType === constants_1.TickType.QUARTZ) {
        rotation = "rotate(".concat((360 / 60) * Number(minutes), ", 50, 50)");
    }
    else if (seconds < 1 && animation === constants_1.MinuteAnimationType.SMOOTH && tickType === constants_1.TickType.MECHANICAL) {
        var rotationPercentage = seconds * 100;
        rotation = "rotate(".concat((360 / 60) * (Number(minutes) - 1) + (rotationPercentage / 100) * 6, ", 50, 50)");
    }
    else if (seconds > 59.95 && animation === constants_1.MinuteAnimationType.JUMP && tickType === constants_1.TickType.MECHANICAL) {
        rotation = "rotate(".concat((360 / 60) * (Number(minutes) + .8), ", 50, 50)");
    }
    else if (seconds > 59.75 && animation === constants_1.MinuteAnimationType.JUMP && tickType === constants_1.TickType.MECHANICAL) {
        rotation = "rotate(".concat((360 / 60) * (Number(minutes) + 1.3), ", 50, 50)");
    }
    else {
        rotation = "rotate(".concat((360 / 60) * Number(minutes), ", 50, 50)");
    }
    return ((0, jsx_runtime_1.jsx)("g", { children: (0, jsx_runtime_1.jsx)("polygon", { points: '48.2,4 51.8,4 52.6,62 47.4,62', transform: rotation, fill: fillColor }) }));
}
exports.MinuteHand = MinuteHand;
