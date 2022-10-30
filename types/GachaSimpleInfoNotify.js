"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GachaSimpleInfoNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaSimpleInfoNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GachaSimpleInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GachaSimpleInfoNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GachaSimpleInfoNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GachaSimpleInfoNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_new" in data && data.is_new != undefined) {
                this.is_new = data.is_new;
            }
        }
    }
    get is_new() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set is_new(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new GachaSimpleInfoNotify({});
        if (data.is_new != null) {
            message.is_new = data.is_new;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_new != null) {
            data.is_new = this.is_new;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_new != false)
            writer.writeBool(5, this.is_new);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GachaSimpleInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.is_new = reader.readBool();
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
        return GachaSimpleInfoNotify.deserialize(bytes);
    }
}
exports.GachaSimpleInfoNotify = GachaSimpleInfoNotify;
_GachaSimpleInfoNotify_one_of_decls = new WeakMap();