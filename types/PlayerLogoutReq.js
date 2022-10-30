"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerLogoutReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLogoutReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerLogoutReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerLogoutReq extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerLogoutReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerLogoutReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
        }
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 6, PlayerLogoutReq.Reason.REASON_DISCONNECT);
    }
    set reason(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new PlayerLogoutReq({});
        if (data.reason != null) {
            message.reason = data.reason;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.reason != null) {
            data.reason = this.reason;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.reason != PlayerLogoutReq.Reason.REASON_DISCONNECT)
            writer.writeEnum(6, this.reason);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerLogoutReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.reason = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return PlayerLogoutReq.deserialize(bytes);
    }
}
exports.PlayerLogoutReq = PlayerLogoutReq;
_PlayerLogoutReq_one_of_decls = new WeakMap();
(function (PlayerLogoutReq) {
    let Reason;
    (function (Reason) {
        Reason[Reason["REASON_DISCONNECT"] = 0] = "REASON_DISCONNECT";
        Reason[Reason["REASON_CLIENT_REQ"] = 1] = "REASON_CLIENT_REQ";
        Reason[Reason["REASON_TIMEOUT"] = 2] = "REASON_TIMEOUT";
        Reason[Reason["REASON_ADMIN_REQ"] = 3] = "REASON_ADMIN_REQ";
        Reason[Reason["REASON_SERVER_CLOSE"] = 4] = "REASON_SERVER_CLOSE";
        Reason[Reason["REASON_GM_CLEAR"] = 5] = "REASON_GM_CLEAR";
        Reason[Reason["REASON_PLAYER_TRANSFER"] = 6] = "REASON_PLAYER_TRANSFER";
        Reason[Reason["REASON_CLIENT_CHECKSUM_INVALID"] = 7] = "REASON_CLIENT_CHECKSUM_INVALID";
    })(Reason = PlayerLogoutReq.Reason || (PlayerLogoutReq.Reason = {}));
})(PlayerLogoutReq = exports.PlayerLogoutReq || (exports.PlayerLogoutReq = {}));
