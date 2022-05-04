"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.arr = exports.ABC = void 0;
var ABC = /** @class */ (function () {
    function ABC(a, b) {
        this.a = a;
        this.b = b;
    }
    ABC.prototype.show = function () {
        console.log("\nA : ", this.a, " B : ", this.b);
    };
    return ABC;
}());
exports.ABC = ABC;
// mention export default only once in a file
var XYZ = /** @class */ (function (_super) {
    __extends(XYZ, _super);
    function XYZ(a, b, x) {
        var _this = _super.call(this, a, b) || this;
        _this.x = x;
        return _this;
    }
    // Override
    XYZ.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("X : ", this.x);
    };
    return XYZ;
}(ABC));
exports["default"] = XYZ;
exports.arr = [34, 56, 45, 45, 43, 543, 5, 43, 5, 435];
