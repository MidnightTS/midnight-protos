"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeAvatarTalkReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarTalkReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeAvatarTalkReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HomeAvatarTalkReq extends pb_1.Message {
    constructor(data) {
        super();
        _HomeAvatarTalkReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeAvatarTalkReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("talk_id" in data && data.talk_id != undefined) {
                this.talk_id = data.talk_id;
            }
            if ("avatar_id" in data && data.avatar_id != undefined) {
                this.avatar_id = data.avatar_id;
            }
        }
    }
    get talk_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set talk_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get avatar_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set avatar_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new HomeAvatarTalkReq({});
        if (data.talk_id != null) {
            message.talk_id = data.talk_id;
        }
        if (data.avatar_id != null) {
            message.avatar_id = data.avatar_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.talk_id != null) {
            data.talk_id = this.talk_id;
        }
        if (this.avatar_id != null) {
            data.avatar_id = this.avatar_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.talk_id != 0)
            writer.writeUint32(12, this.talk_id);
        if (this.avatar_id != 0)
            writer.writeUint32(15, this.avatar_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeAvatarTalkReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.talk_id = reader.readUint32();
                    break;
                case 15:
                    message.avatar_id = reader.readUint32();
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
        return HomeAvatarTalkReq.deserialize(bytes);
    }
}
exports.HomeAvatarTalkReq = HomeAvatarTalkReq;
_HomeAvatarTalkReq_one_of_decls = new WeakMap();