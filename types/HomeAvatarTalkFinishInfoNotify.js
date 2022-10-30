"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeAvatarTalkFinishInfoNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarTalkFinishInfoNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeAvatarTalkFinishInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomeAvatarTalkFinishInfo");
const pb_1 = require("google-protobuf");
class HomeAvatarTalkFinishInfoNotify extends pb_1.Message {
    constructor(data) {
        super();
        _HomeAvatarTalkFinishInfoNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], __classPrivateFieldGet(this, _HomeAvatarTalkFinishInfoNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_talk_info_list" in data && data.avatar_talk_info_list != undefined) {
                this.avatar_talk_info_list = data.avatar_talk_info_list;
            }
        }
    }
    get avatar_talk_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.HomeAvatarTalkFinishInfo, 9);
    }
    set avatar_talk_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    static fromObject(data) {
        const message = new HomeAvatarTalkFinishInfoNotify({});
        if (data.avatar_talk_info_list != null) {
            message.avatar_talk_info_list = data.avatar_talk_info_list.map(item => dependency_1.HomeAvatarTalkFinishInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_talk_info_list != null) {
            data.avatar_talk_info_list = this.avatar_talk_info_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_talk_info_list.length)
            writer.writeRepeatedMessage(9, this.avatar_talk_info_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeAvatarTalkFinishInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    reader.readMessage(message.avatar_talk_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_1.HomeAvatarTalkFinishInfo.deserialize(reader), dependency_1.HomeAvatarTalkFinishInfo));
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
        return HomeAvatarTalkFinishInfoNotify.deserialize(bytes);
    }
}
exports.HomeAvatarTalkFinishInfoNotify = HomeAvatarTalkFinishInfoNotify;
_HomeAvatarTalkFinishInfoNotify_one_of_decls = new WeakMap();