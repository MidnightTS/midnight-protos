"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClosedItemNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosedItemNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ClosedItemNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ClosedItemNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ClosedItemNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _ClosedItemNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_id_list" in data && data.item_id_list != undefined) {
                this.item_id_list = data.item_id_list;
            }
        }
    }
    get item_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 8, []);
    }
    set item_id_list(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new ClosedItemNotify({});
        if (data.item_id_list != null) {
            message.item_id_list = data.item_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.item_id_list != null) {
            data.item_id_list = this.item_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_id_list.length)
            writer.writePackedUint32(8, this.item_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClosedItemNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.item_id_list = reader.readPackedUint32();
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
        return ClosedItemNotify.deserialize(bytes);
    }
}
exports.ClosedItemNotify = ClosedItemNotify;
_ClosedItemNotify_one_of_decls = new WeakMap();
