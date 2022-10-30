"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardType = void 0;
var ForwardType;
(function (ForwardType) {
    ForwardType[ForwardType["FORWARD_TYPE_LOCAL"] = 0] = "FORWARD_TYPE_LOCAL";
    ForwardType[ForwardType["FORWARD_TYPE_TO_ALL"] = 1] = "FORWARD_TYPE_TO_ALL";
    ForwardType[ForwardType["FORWARD_TYPE_TO_ALL_EXCEPT_CUR"] = 2] = "FORWARD_TYPE_TO_ALL_EXCEPT_CUR";
    ForwardType[ForwardType["FORWARD_TYPE_TO_HOST"] = 3] = "FORWARD_TYPE_TO_HOST";
    ForwardType[ForwardType["FORWARD_TYPE_TO_ALL_GUEST"] = 4] = "FORWARD_TYPE_TO_ALL_GUEST";
    ForwardType[ForwardType["FORWARD_TYPE_TO_PEER"] = 5] = "FORWARD_TYPE_TO_PEER";
    ForwardType[ForwardType["FORWARD_TYPE_TO_PEERS"] = 6] = "FORWARD_TYPE_TO_PEERS";
    ForwardType[ForwardType["FORWARD_TYPE_ONLY_SERVER"] = 7] = "FORWARD_TYPE_ONLY_SERVER";
    ForwardType[ForwardType["FORWARD_TYPE_TO_ALL_EXIST_EXCEPT_CUR"] = 8] = "FORWARD_TYPE_TO_ALL_EXIST_EXCEPT_CUR";
})(ForwardType = exports.ForwardType || (exports.ForwardType = {}));
