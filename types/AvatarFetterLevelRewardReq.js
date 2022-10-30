"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarFetterLevelRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFetterLevelRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarFetterLevelRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AvatarFetterLevelRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarFetterLevelRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarFetterLevelRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("fetter_level" in data && data.fetter_level != undefined) {
                this.fetter_level = data.fetter_level;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get fetter_level() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set fetter_level(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new AvatarFetterLevelRewardReq({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.fetter_level != null) {
            message.fetter_level = data.fetter_level;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.fetter_level != null) {
            data.fetter_level = this.fetter_level;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(1, this.avatar_guid);
        if (this.fetter_level != 0)
            writer.writeUint32(6, this.fetter_level);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarFetterLevelRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 6:
                    message.fetter_level = reader.readUint32();
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
        return AvatarFetterLevelRewardReq.deserialize(bytes);
    }
}
exports.AvatarFetterLevelRewardReq = AvatarFetterLevelRewardReq;
_AvatarFetterLevelRewardReq_one_of_decls = new WeakMap();