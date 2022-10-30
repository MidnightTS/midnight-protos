"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MailChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MailChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MailData");
const pb_1 = require("google-protobuf");
class MailChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _MailChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14, 8], __classPrivateFieldGet(this, _MailChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mail_list" in data && data.mail_list != undefined) {
                this.mail_list = data.mail_list;
            }
            if ("del_mail_id_list" in data && data.del_mail_id_list != undefined) {
                this.del_mail_id_list = data.del_mail_id_list;
            }
        }
    }
    get mail_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MailData, 14);
    }
    set mail_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    get del_mail_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 8, []);
    }
    set del_mail_id_list(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new MailChangeNotify({});
        if (data.mail_list != null) {
            message.mail_list = data.mail_list.map(item => dependency_1.MailData.fromObject(item));
        }
        if (data.del_mail_id_list != null) {
            message.del_mail_id_list = data.del_mail_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.mail_list != null) {
            data.mail_list = this.mail_list.map((item) => item.toObject());
        }
        if (this.del_mail_id_list != null) {
            data.del_mail_id_list = this.del_mail_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mail_list.length)
            writer.writeRepeatedMessage(14, this.mail_list, (item) => item.serialize(writer));
        if (this.del_mail_id_list.length)
            writer.writePackedUint32(8, this.del_mail_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MailChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.mail_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.MailData.deserialize(reader), dependency_1.MailData));
                    break;
                case 8:
                    message.del_mail_id_list = reader.readPackedUint32();
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
        return MailChangeNotify.deserialize(bytes);
    }
}
exports.MailChangeNotify = MailChangeNotify;
_MailChangeNotify_one_of_decls = new WeakMap();