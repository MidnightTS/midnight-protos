"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RogueAvatarInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueAvatarInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RogueAvatarInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class RogueAvatarInfo extends pb_1.Message {
    constructor(data) {
        super();
        _RogueAvatarInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _RogueAvatarInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_onstage" in data && data.is_onstage != undefined) {
                this.is_onstage = data.is_onstage;
            }
            if ("is_alive" in data && data.is_alive != undefined) {
                this.is_alive = data.is_alive;
            }
            if ("avatar_id" in data && data.avatar_id != undefined) {
                this.avatar_id = data.avatar_id;
            }
        }
    }
    get is_onstage() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set is_onstage(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get is_alive() {
        return pb_1.Message.getFieldWithDefault(this, 3, false);
    }
    set is_alive(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get avatar_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set avatar_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new RogueAvatarInfo({});
        if (data.is_onstage != null) {
            message.is_onstage = data.is_onstage;
        }
        if (data.is_alive != null) {
            message.is_alive = data.is_alive;
        }
        if (data.avatar_id != null) {
            message.avatar_id = data.avatar_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_onstage != null) {
            data.is_onstage = this.is_onstage;
        }
        if (this.is_alive != null) {
            data.is_alive = this.is_alive;
        }
        if (this.avatar_id != null) {
            data.avatar_id = this.avatar_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_onstage != false)
            writer.writeBool(5, this.is_onstage);
        if (this.is_alive != false)
            writer.writeBool(3, this.is_alive);
        if (this.avatar_id != 0)
            writer.writeUint32(14, this.avatar_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RogueAvatarInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.is_onstage = reader.readBool();
                    break;
                case 3:
                    message.is_alive = reader.readBool();
                    break;
                case 14:
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
        return RogueAvatarInfo.deserialize(bytes);
    }
}
exports.RogueAvatarInfo = RogueAvatarInfo;
_RogueAvatarInfo_one_of_decls = new WeakMap();
