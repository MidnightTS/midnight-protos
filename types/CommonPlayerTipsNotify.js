"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CommonPlayerTipsNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonPlayerTipsNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CommonPlayerTipsNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CommonPlayerTipsNotify extends pb_1.Message {
    constructor(data) {
        super();
        _CommonPlayerTipsNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], __classPrivateFieldGet(this, _CommonPlayerTipsNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("notify_type" in data && data.notify_type != undefined) {
                this.notify_type = data.notify_type;
            }
            if ("text_map_id_list" in data && data.text_map_id_list != undefined) {
                this.text_map_id_list = data.text_map_id_list;
            }
        }
    }
    get notify_type() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set notify_type(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get text_map_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 9, []);
    }
    set text_map_id_list(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new CommonPlayerTipsNotify({});
        if (data.notify_type != null) {
            message.notify_type = data.notify_type;
        }
        if (data.text_map_id_list != null) {
            message.text_map_id_list = data.text_map_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.notify_type != null) {
            data.notify_type = this.notify_type;
        }
        if (this.text_map_id_list != null) {
            data.text_map_id_list = this.text_map_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.notify_type != 0)
            writer.writeUint32(3, this.notify_type);
        if (this.text_map_id_list.length)
            writer.writeRepeatedString(9, this.text_map_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CommonPlayerTipsNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.notify_type = reader.readUint32();
                    break;
                case 9:
                    pb_1.Message.addToRepeatedField(message, 9, reader.readString());
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
        return CommonPlayerTipsNotify.deserialize(bytes);
    }
}
exports.CommonPlayerTipsNotify = CommonPlayerTipsNotify;
_CommonPlayerTipsNotify_one_of_decls = new WeakMap();
