"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AddNoGachaAvatarCardNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNoGachaAvatarCardNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AddNoGachaAvatarCardNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AddNoGachaAvatarCardTransferItem");
const pb_1 = require("google-protobuf");
class AddNoGachaAvatarCardNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AddNoGachaAvatarCardNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _AddNoGachaAvatarCardNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("transfer_item_list" in data && data.transfer_item_list != undefined) {
                this.transfer_item_list = data.transfer_item_list;
            }
            if ("initial_promote_level" in data && data.initial_promote_level != undefined) {
                this.initial_promote_level = data.initial_promote_level;
            }
            if ("avatar_id" in data && data.avatar_id != undefined) {
                this.avatar_id = data.avatar_id;
            }
            if ("is_transfer_to_item" in data && data.is_transfer_to_item != undefined) {
                this.is_transfer_to_item = data.is_transfer_to_item;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("initial_level" in data && data.initial_level != undefined) {
                this.initial_level = data.initial_level;
            }
            if ("item_id" in data && data.item_id != undefined) {
                this.item_id = data.item_id;
            }
        }
    }
    get transfer_item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.AddNoGachaAvatarCardTransferItem, 4);
    }
    set transfer_item_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get initial_promote_level() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set initial_promote_level(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get avatar_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set avatar_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get is_transfer_to_item() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set is_transfer_to_item(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set reason(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get initial_level() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set initial_level(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get item_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set item_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new AddNoGachaAvatarCardNotify({});
        if (data.transfer_item_list != null) {
            message.transfer_item_list = data.transfer_item_list.map(item => dependency_1.AddNoGachaAvatarCardTransferItem.fromObject(item));
        }
        if (data.initial_promote_level != null) {
            message.initial_promote_level = data.initial_promote_level;
        }
        if (data.avatar_id != null) {
            message.avatar_id = data.avatar_id;
        }
        if (data.is_transfer_to_item != null) {
            message.is_transfer_to_item = data.is_transfer_to_item;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.initial_level != null) {
            message.initial_level = data.initial_level;
        }
        if (data.item_id != null) {
            message.item_id = data.item_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.transfer_item_list != null) {
            data.transfer_item_list = this.transfer_item_list.map((item) => item.toObject());
        }
        if (this.initial_promote_level != null) {
            data.initial_promote_level = this.initial_promote_level;
        }
        if (this.avatar_id != null) {
            data.avatar_id = this.avatar_id;
        }
        if (this.is_transfer_to_item != null) {
            data.is_transfer_to_item = this.is_transfer_to_item;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.initial_level != null) {
            data.initial_level = this.initial_level;
        }
        if (this.item_id != null) {
            data.item_id = this.item_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.transfer_item_list.length)
            writer.writeRepeatedMessage(4, this.transfer_item_list, (item) => item.serialize(writer));
        if (this.initial_promote_level != 0)
            writer.writeUint32(2, this.initial_promote_level);
        if (this.avatar_id != 0)
            writer.writeUint32(8, this.avatar_id);
        if (this.is_transfer_to_item != false)
            writer.writeBool(6, this.is_transfer_to_item);
        if (this.reason != 0)
            writer.writeUint32(9, this.reason);
        if (this.initial_level != 0)
            writer.writeUint32(10, this.initial_level);
        if (this.item_id != 0)
            writer.writeUint32(14, this.item_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AddNoGachaAvatarCardNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.transfer_item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_1.AddNoGachaAvatarCardTransferItem.deserialize(reader), dependency_1.AddNoGachaAvatarCardTransferItem));
                    break;
                case 2:
                    message.initial_promote_level = reader.readUint32();
                    break;
                case 8:
                    message.avatar_id = reader.readUint32();
                    break;
                case 6:
                    message.is_transfer_to_item = reader.readBool();
                    break;
                case 9:
                    message.reason = reader.readUint32();
                    break;
                case 10:
                    message.initial_level = reader.readUint32();
                    break;
                case 14:
                    message.item_id = reader.readUint32();
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
        return AddNoGachaAvatarCardNotify.deserialize(bytes);
    }
}
exports.AddNoGachaAvatarCardNotify = AddNoGachaAvatarCardNotify;
_AddNoGachaAvatarCardNotify_one_of_decls = new WeakMap();
