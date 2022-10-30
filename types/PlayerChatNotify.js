"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerChatNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerChatNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerChatNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ChatInfo");
const pb_1 = require("google-protobuf");
class PlayerChatNotify extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerChatNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerChatNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("chat_info" in data && data.chat_info != undefined) {
                this.chat_info = data.chat_info;
            }
            if ("channel_id" in data && data.channel_id != undefined) {
                this.channel_id = data.channel_id;
            }
        }
    }
    get chat_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.ChatInfo, 3);
    }
    set chat_info(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_chat_info() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get channel_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set channel_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new PlayerChatNotify({});
        if (data.chat_info != null) {
            message.chat_info = dependency_1.ChatInfo.fromObject(data.chat_info);
        }
        if (data.channel_id != null) {
            message.channel_id = data.channel_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.chat_info != null) {
            data.chat_info = this.chat_info.toObject();
        }
        if (this.channel_id != null) {
            data.channel_id = this.channel_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_chat_info)
            writer.writeMessage(3, this.chat_info, () => this.chat_info.serialize(writer));
        if (this.channel_id != 0)
            writer.writeUint32(6, this.channel_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerChatNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.chat_info, () => message.chat_info = dependency_1.ChatInfo.deserialize(reader));
                    break;
                case 6:
                    message.channel_id = reader.readUint32();
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
        return PlayerChatNotify.deserialize(bytes);
    }
}
exports.PlayerChatNotify = PlayerChatNotify;
_PlayerChatNotify_one_of_decls = new WeakMap();