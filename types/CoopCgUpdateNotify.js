"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CoopCgUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoopCgUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CoopCgUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CoopCgUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _CoopCgUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13], __classPrivateFieldGet(this, _CoopCgUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cg_list" in data && data.cg_list != undefined) {
                this.cg_list = data.cg_list;
            }
        }
    }
    get cg_list() {
        return pb_1.Message.getFieldWithDefault(this, 13, []);
    }
    set cg_list(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new CoopCgUpdateNotify({});
        if (data.cg_list != null) {
            message.cg_list = data.cg_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cg_list != null) {
            data.cg_list = this.cg_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cg_list.length)
            writer.writePackedUint32(13, this.cg_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CoopCgUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.cg_list = reader.readPackedUint32();
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
        return CoopCgUpdateNotify.deserialize(bytes);
    }
}
exports.CoopCgUpdateNotify = CoopCgUpdateNotify;
_CoopCgUpdateNotify_one_of_decls = new WeakMap();