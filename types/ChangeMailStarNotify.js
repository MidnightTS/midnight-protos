"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChangeMailStarNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeMailStarNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChangeMailStarNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ChangeMailStarNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ChangeMailStarNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _ChangeMailStarNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_star" in data && data.is_star != undefined) {
                this.is_star = data.is_star;
            }
            if ("mail_id_list" in data && data.mail_id_list != undefined) {
                this.mail_id_list = data.mail_id_list;
            }
        }
    }
    get is_star() {
        return pb_1.Message.getFieldWithDefault(this, 14, false);
    }
    set is_star(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get mail_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set mail_id_list(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new ChangeMailStarNotify({});
        if (data.is_star != null) {
            message.is_star = data.is_star;
        }
        if (data.mail_id_list != null) {
            message.mail_id_list = data.mail_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_star != null) {
            data.is_star = this.is_star;
        }
        if (this.mail_id_list != null) {
            data.mail_id_list = this.mail_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_star != false)
            writer.writeBool(14, this.is_star);
        if (this.mail_id_list.length)
            writer.writePackedUint32(2, this.mail_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChangeMailStarNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.is_star = reader.readBool();
                    break;
                case 2:
                    message.mail_id_list = reader.readPackedUint32();
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
        return ChangeMailStarNotify.deserialize(bytes);
    }
}
exports.ChangeMailStarNotify = ChangeMailStarNotify;
_ChangeMailStarNotify_one_of_decls = new WeakMap();