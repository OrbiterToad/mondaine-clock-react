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
exports.MondaineClock = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var second_hand_1 = require("./parts/second-hand");
var hour_hand_1 = require("./parts/hour-hand");
var watch_face_1 = require("./parts/watch-face");
var minute_hand_1 = require("./parts/minute-hand");
var constants_1 = require("./constants");
var MondaineClock = function (props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.tickType, tickType = _b === void 0 ? constants_1.TickType.MECHANICAL : _b, _c = props.minuteAnimationType, minuteAnimationType = _c === void 0 ? constants_1.MinuteAnimationType.SMOOTH : _c, _d = props.fixedDate, fixedDate = _d === void 0 ? undefined : _d, _e = props.showSecondsHand, showSecondsHand = _e === void 0 ? true : _e, _f = props.showCenterDot, showCenterDot = _f === void 0 ? true : _f, _g = props.faceColor, faceColor = _g === void 0 ? '#0e0e10' : _g, _h = props.faceBackgroundColor, faceBackgroundColor = _h === void 0 ? '#ffffff' : _h, _j = props.secondsHandColor, secondsHandColor = _j === void 0 ? '#eb0000' : _j, _k = props.minutesHandColor, minutesHandColor = _k === void 0 ? '#0e0e10' : _k, _l = props.hoursHandColor, hoursHandColor = _l === void 0 ? '#0e0e10' : _l;
    var _m = (0, react_1.useState)(fixedDate ? fixedDate : new Date()), time = _m[0], setTime = _m[1];
    (0, react_1.useEffect)(function () {
        if (fixedDate) {
            setTime(fixedDate);
        }
        else {
            var interval_1 = setInterval(function () {
                setTime(new Date());
            }, tickType === constants_1.TickType.QUARTZ ? constants_1.ONE_SECOND : constants_1.TEN_MILLISECONDS);
            return function () { return clearInterval(interval_1); };
        }
    }, [fixedDate, tickType,]);
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ viewBox: '0 0 100 100', width: width }, { children: [(0, jsx_runtime_1.jsx)(watch_face_1.WatchFace, { fillColor: faceBackgroundColor, strokeColor: faceColor }), (0, jsx_runtime_1.jsx)(hour_hand_1.HourHand, { time: time, fillColor: hoursHandColor }), (0, jsx_runtime_1.jsx)(minute_hand_1.MinuteHand, { tickType: tickType, time: time, fillColor: minutesHandColor, animation: minuteAnimationType }), showSecondsHand
                && (0, jsx_runtime_1.jsx)(second_hand_1.SecondHand, { time: time, tickType: tickType, fillColor: secondsHandColor, showCenterDot: showCenterDot })] })));
};
exports.MondaineClock = MondaineClock;
