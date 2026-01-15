"use strict";
exports.__esModule = true;
exports.MinuteAnimationType = exports.TickType = exports.TEN_MILLISECONDS = exports.ONE_SECOND = void 0;
exports.ONE_SECOND = 1000;
exports.TEN_MILLISECONDS = 10;
var TickType;
(function (TickType) {
    TickType[TickType["MECHANICAL"] = 0] = "MECHANICAL";
    TickType[TickType["QUARTZ"] = 1] = "QUARTZ";
})(TickType = exports.TickType || (exports.TickType = {}));
var MinuteAnimationType;
(function (MinuteAnimationType) {
    MinuteAnimationType[MinuteAnimationType["NONE"] = 0] = "NONE";
    MinuteAnimationType[MinuteAnimationType["SMOOTH"] = 1] = "SMOOTH";
    MinuteAnimationType[MinuteAnimationType["JUMP"] = 2] = "JUMP";
})(MinuteAnimationType = exports.MinuteAnimationType || (exports.MinuteAnimationType = {}));
