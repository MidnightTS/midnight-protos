"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChatHistoryNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatHistoryNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChatHistoryNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ChatInfo");
const pb_1 = require("google-protobuf");
class ChatHistoryNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ChatHistoryNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], __classPrivateFieldGet(this, _ChatHistoryNotify_one_of_decls, "f"));
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
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ChatInfo, 9);
    }
    set chat_info(value) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    get channel_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set channel_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new ChatHistoryNotify({});
        if (data.chat_info != null) {
            message.chat_info = data.chat_info.map(item => dependency_1.ChatInfo.fromObject(item));
        }
        if (data.channel_id != null) {
            message.channel_id = data.channel_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.chat_info != null) {
            data.chat_info = this.chat_info.map((item) => item.toObject());
        }
        if (this.channel_id != null) {
            data.channel_id = this.channel_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.chat_info.length)
            writer.writeRepeatedMessage(9, this.chat_info, (item) => item.serialize(writer));
        if (this.channel_id != 0)
            writer.writeUint32(12, this.channel_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChatHistoryNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    reader.readMessage(message.chat_info, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_1.ChatInfo.deserialize(reader), dependency_1.ChatInfo));
                    break;
                case 12:
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
        return ChatHistoryNotify.deserialize(bytes);
    }
}
exports.ChatHistoryNotify = ChatHistoryNotify;
_ChatHistoryNotify_one_of_decls = new WeakMap();
