"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChatEmojiCollectionData_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatEmojiCollectionData = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChatEmojiCollectionData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ChatEmojiCollectionData extends pb_1.Message {
    constructor(data) {
        super();
        _ChatEmojiCollectionData_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _ChatEmojiCollectionData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("emoji_id_list" in data && data.emoji_id_list != undefined) {
                this.emoji_id_list = data.emoji_id_list;
            }
        }
    }
    get emoji_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 1, []);
    }
    set emoji_id_list(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new ChatEmojiCollectionData({});
        if (data.emoji_id_list != null) {
            message.emoji_id_list = data.emoji_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.emoji_id_list != null) {
            data.emoji_id_list = this.emoji_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.emoji_id_list.length)
            writer.writePackedUint32(1, this.emoji_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChatEmojiCollectionData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.emoji_id_list = reader.readPackedUint32();
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
        return ChatEmojiCollectionData.deserialize(bytes);
    }
}
exports.ChatEmojiCollectionData = ChatEmojiCollectionData;
_ChatEmojiCollectionData_one_of_decls = new WeakMap();
