"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AskAddFriendNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskAddFriendNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AskAddFriendNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FriendBrief");
const pb_1 = require("google-protobuf");
class AskAddFriendNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AskAddFriendNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AskAddFriendNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("target_friend_brief" in data && data.target_friend_brief != undefined) {
                this.target_friend_brief = data.target_friend_brief;
            }
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
        }
    }
    get target_friend_brief() {
        return pb_1.Message.getWrapperField(this, dependency_1.FriendBrief, 15);
    }
    set target_friend_brief(value) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_target_friend_brief() {
        return pb_1.Message.getField(this, 15) != null;
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set target_uid(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new AskAddFriendNotify({});
        if (data.target_friend_brief != null) {
            message.target_friend_brief = dependency_1.FriendBrief.fromObject(data.target_friend_brief);
        }
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.target_friend_brief != null) {
            data.target_friend_brief = this.target_friend_brief.toObject();
        }
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_target_friend_brief)
            writer.writeMessage(15, this.target_friend_brief, () => this.target_friend_brief.serialize(writer));
        if (this.target_uid != 0)
            writer.writeUint32(9, this.target_uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AskAddFriendNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.target_friend_brief, () => message.target_friend_brief = dependency_1.FriendBrief.deserialize(reader));
                    break;
                case 9:
                    message.target_uid = reader.readUint32();
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
        return AskAddFriendNotify.deserialize(bytes);
    }
}
exports.AskAddFriendNotify = AskAddFriendNotify;
_AskAddFriendNotify_one_of_decls = new WeakMap();