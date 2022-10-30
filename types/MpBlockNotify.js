"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MpBlockNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpBlockNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MpBlockNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MpBlockNotify extends pb_1.Message {
    constructor(data) {
        super();
        _MpBlockNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MpBlockNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
        }
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set end_time(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new MpBlockNotify({});
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.end_time != 0)
            writer.writeUint32(13, this.end_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MpBlockNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.end_time = reader.readUint32();
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
        return MpBlockNotify.deserialize(bytes);
    }
}
exports.MpBlockNotify = MpBlockNotify;
_MpBlockNotify_one_of_decls = new WeakMap();