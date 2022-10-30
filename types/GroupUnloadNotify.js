"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GroupUnloadNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUnloadNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GroupUnloadNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GroupUnloadNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GroupUnloadNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [10], __classPrivateFieldGet(this, _GroupUnloadNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("group_list" in data && data.group_list != undefined) {
                this.group_list = data.group_list;
            }
        }
    }
    get group_list() {
        return pb_1.Message.getFieldWithDefault(this, 10, []);
    }
    set group_list(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new GroupUnloadNotify({});
        if (data.group_list != null) {
            message.group_list = data.group_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.group_list != null) {
            data.group_list = this.group_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.group_list.length)
            writer.writePackedUint32(10, this.group_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GroupUnloadNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.group_list = reader.readPackedUint32();
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
        return GroupUnloadNotify.deserialize(bytes);
    }
}
exports.GroupUnloadNotify = GroupUnloadNotify;
_GroupUnloadNotify_one_of_decls = new WeakMap();
