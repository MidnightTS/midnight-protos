"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MarkNewNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkNewNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MarkNewNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MarkNewNotify extends pb_1.Message {
    constructor(data) {
        super();
        _MarkNewNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7], __classPrivateFieldGet(this, _MarkNewNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id_list" in data && data.id_list != undefined) {
                this.id_list = data.id_list;
            }
            if ("mark_new_type" in data && data.mark_new_type != undefined) {
                this.mark_new_type = data.mark_new_type;
            }
        }
    }
    get id_list() {
        return pb_1.Message.getFieldWithDefault(this, 7, []);
    }
    set id_list(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get mark_new_type() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set mark_new_type(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new MarkNewNotify({});
        if (data.id_list != null) {
            message.id_list = data.id_list;
        }
        if (data.mark_new_type != null) {
            message.mark_new_type = data.mark_new_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.id_list != null) {
            data.id_list = this.id_list;
        }
        if (this.mark_new_type != null) {
            data.mark_new_type = this.mark_new_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id_list.length)
            writer.writePackedUint32(7, this.id_list);
        if (this.mark_new_type != 0)
            writer.writeUint32(11, this.mark_new_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MarkNewNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.id_list = reader.readPackedUint32();
                    break;
                case 11:
                    message.mark_new_type = reader.readUint32();
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
        return MarkNewNotify.deserialize(bytes);
    }
}
exports.MarkNewNotify = MarkNewNotify;
_MarkNewNotify_one_of_decls = new WeakMap();