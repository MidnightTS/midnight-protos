"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OtherPlayerEnterHomeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherPlayerEnterHomeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: OtherPlayerEnterHomeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class OtherPlayerEnterHomeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _OtherPlayerEnterHomeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _OtherPlayerEnterHomeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("nickname" in data && data.nickname != undefined) {
                this.nickname = data.nickname;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
        }
    }
    get nickname() {
        return pb_1.Message.getFieldWithDefault(this, 7, "");
    }
    set nickname(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 3, OtherPlayerEnterHomeNotify.Reason.REASON_INVALID);
    }
    set reason(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new OtherPlayerEnterHomeNotify({});
        if (data.nickname != null) {
            message.nickname = data.nickname;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.nickname != null) {
            data.nickname = this.nickname;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.nickname.length)
            writer.writeString(7, this.nickname);
        if (this.reason != OtherPlayerEnterHomeNotify.Reason.REASON_INVALID)
            writer.writeEnum(3, this.reason);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OtherPlayerEnterHomeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.nickname = reader.readString();
                    break;
                case 3:
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
        return OtherPlayerEnterHomeNotify.deserialize(bytes);
    }
}
exports.OtherPlayerEnterHomeNotify = OtherPlayerEnterHomeNotify;
_OtherPlayerEnterHomeNotify_one_of_decls = new WeakMap();
(function (OtherPlayerEnterHomeNotify) {
    let Reason;
    (function (Reason) {
        Reason[Reason["REASON_INVALID"] = 0] = "REASON_INVALID";
        Reason[Reason["REASON_ENTER"] = 1] = "REASON_ENTER";
        Reason[Reason["REASON_LEAVE"] = 2] = "REASON_LEAVE";
    })(Reason = OtherPlayerEnterHomeNotify.Reason || (OtherPlayerEnterHomeNotify.Reason = {}));
})(OtherPlayerEnterHomeNotify = exports.OtherPlayerEnterHomeNotify || (exports.OtherPlayerEnterHomeNotify = {}));