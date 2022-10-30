"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GmTalkNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmTalkNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GmTalkNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GmTalkNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GmTalkNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GmTalkNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("msg" in data && data.msg != undefined) {
                this.msg = data.msg;
            }
        }
    }
    get msg() {
        return pb_1.Message.getFieldWithDefault(this, 5, "");
    }
    set msg(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new GmTalkNotify({});
        if (data.msg != null) {
            message.msg = data.msg;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.msg != null) {
            data.msg = this.msg;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.msg.length)
            writer.writeString(5, this.msg);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GmTalkNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.msg = reader.readString();
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
        return GmTalkNotify.deserialize(bytes);
    }
}
exports.GmTalkNotify = GmTalkNotify;
_GmTalkNotify_one_of_decls = new WeakMap();
