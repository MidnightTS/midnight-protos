"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MailData_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailData = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MailData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MailItem");
const dependency_2 = require("./MailTextContent");
const dependency_3 = require("./Unk2700_CBJEDMGOBPL");
const pb_1 = require("google-protobuf");
class MailData extends pb_1.Message {
    constructor(data) {
        super();
        _MailData_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7, 14], __classPrivateFieldGet(this, _MailData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mail_id" in data && data.mail_id != undefined) {
                this.mail_id = data.mail_id;
            }
            if ("mail_text_content" in data && data.mail_text_content != undefined) {
                this.mail_text_content = data.mail_text_content;
            }
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
            if ("send_time" in data && data.send_time != undefined) {
                this.send_time = data.send_time;
            }
            if ("expire_time" in data && data.expire_time != undefined) {
                this.expire_time = data.expire_time;
            }
            if ("importance" in data && data.importance != undefined) {
                this.importance = data.importance;
            }
            if ("is_read" in data && data.is_read != undefined) {
                this.is_read = data.is_read;
            }
            if ("is_attachment_got" in data && data.is_attachment_got != undefined) {
                this.is_attachment_got = data.is_attachment_got;
            }
            if ("config_id" in data && data.config_id != undefined) {
                this.config_id = data.config_id;
            }
            if ("argument_list" in data && data.argument_list != undefined) {
                this.argument_list = data.argument_list;
            }
            if ("Unk2700_NDPPGJKJOMH" in data && data.Unk2700_NDPPGJKJOMH != undefined) {
                this.Unk2700_NDPPGJKJOMH = data.Unk2700_NDPPGJKJOMH;
            }
        }
    }
    get mail_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set mail_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get mail_text_content() {
        return pb_1.Message.getWrapperField(this, dependency_2.MailTextContent, 4);
    }
    set mail_text_content(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_mail_text_content() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MailItem, 7);
    }
    set item_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    get send_time() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set send_time(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get expire_time() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set expire_time(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get importance() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set importance(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_read() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set is_read(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get is_attachment_got() {
        return pb_1.Message.getFieldWithDefault(this, 12, false);
    }
    set is_attachment_got(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get config_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set config_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get argument_list() {
        return pb_1.Message.getFieldWithDefault(this, 14, []);
    }
    set argument_list(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get Unk2700_NDPPGJKJOMH() {
        return pb_1.Message.getFieldWithDefault(this, 15, dependency_3.Unk2700_CBJEDMGOBPL.Unk2700_CBJEDMGOBPL_Unk2700_MBLDLJOKLBL);
    }
    set Unk2700_NDPPGJKJOMH(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new MailData({});
        if (data.mail_id != null) {
            message.mail_id = data.mail_id;
        }
        if (data.mail_text_content != null) {
            message.mail_text_content = dependency_2.MailTextContent.fromObject(data.mail_text_content);
        }
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.MailItem.fromObject(item));
        }
        if (data.send_time != null) {
            message.send_time = data.send_time;
        }
        if (data.expire_time != null) {
            message.expire_time = data.expire_time;
        }
        if (data.importance != null) {
            message.importance = data.importance;
        }
        if (data.is_read != null) {
            message.is_read = data.is_read;
        }
        if (data.is_attachment_got != null) {
            message.is_attachment_got = data.is_attachment_got;
        }
        if (data.config_id != null) {
            message.config_id = data.config_id;
        }
        if (data.argument_list != null) {
            message.argument_list = data.argument_list;
        }
        if (data.Unk2700_NDPPGJKJOMH != null) {
            message.Unk2700_NDPPGJKJOMH = data.Unk2700_NDPPGJKJOMH;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.mail_id != null) {
            data.mail_id = this.mail_id;
        }
        if (this.mail_text_content != null) {
            data.mail_text_content = this.mail_text_content.toObject();
        }
        if (this.item_list != null) {
            data.item_list = this.item_list.map((item) => item.toObject());
        }
        if (this.send_time != null) {
            data.send_time = this.send_time;
        }
        if (this.expire_time != null) {
            data.expire_time = this.expire_time;
        }
        if (this.importance != null) {
            data.importance = this.importance;
        }
        if (this.is_read != null) {
            data.is_read = this.is_read;
        }
        if (this.is_attachment_got != null) {
            data.is_attachment_got = this.is_attachment_got;
        }
        if (this.config_id != null) {
            data.config_id = this.config_id;
        }
        if (this.argument_list != null) {
            data.argument_list = this.argument_list;
        }
        if (this.Unk2700_NDPPGJKJOMH != null) {
            data.Unk2700_NDPPGJKJOMH = this.Unk2700_NDPPGJKJOMH;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mail_id != 0)
            writer.writeUint32(1, this.mail_id);
        if (this.has_mail_text_content)
            writer.writeMessage(4, this.mail_text_content, () => this.mail_text_content.serialize(writer));
        if (this.item_list.length)
            writer.writeRepeatedMessage(7, this.item_list, (item) => item.serialize(writer));
        if (this.send_time != 0)
            writer.writeUint32(8, this.send_time);
        if (this.expire_time != 0)
            writer.writeUint32(9, this.expire_time);
        if (this.importance != 0)
            writer.writeUint32(10, this.importance);
        if (this.is_read != false)
            writer.writeBool(11, this.is_read);
        if (this.is_attachment_got != false)
            writer.writeBool(12, this.is_attachment_got);
        if (this.config_id != 0)
            writer.writeUint32(13, this.config_id);
        if (this.argument_list.length)
            writer.writeRepeatedString(14, this.argument_list);
        if (this.Unk2700_NDPPGJKJOMH != dependency_3.Unk2700_CBJEDMGOBPL.Unk2700_CBJEDMGOBPL_Unk2700_MBLDLJOKLBL)
            writer.writeEnum(15, this.Unk2700_NDPPGJKJOMH);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MailData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.mail_id = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message.mail_text_content, () => message.mail_text_content = dependency_2.MailTextContent.deserialize(reader));
                    break;
                case 7:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_1.MailItem.deserialize(reader), dependency_1.MailItem));
                    break;
                case 8:
                    message.send_time = reader.readUint32();
                    break;
                case 9:
                    message.expire_time = reader.readUint32();
                    break;
                case 10:
                    message.importance = reader.readUint32();
                    break;
                case 11:
                    message.is_read = reader.readBool();
                    break;
                case 12:
                    message.is_attachment_got = reader.readBool();
                    break;
                case 13:
                    message.config_id = reader.readUint32();
                    break;
                case 14:
                    pb_1.Message.addToRepeatedField(message, 14, reader.readString());
                    break;
                case 15:
                    message.Unk2700_NDPPGJKJOMH = reader.readEnum();
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
        return MailData.deserialize(bytes);
    }
}
exports.MailData = MailData;
_MailData_one_of_decls = new WeakMap();
