"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HideAndSeekPlayerSetAvatarNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekPlayerSetAvatarNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HideAndSeekPlayerSetAvatarNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HideAndSeekPlayerSetAvatarNotify extends pb_1.Message {
    constructor(data) {
        super();
        _HideAndSeekPlayerSetAvatarNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HideAndSeekPlayerSetAvatarNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_id" in data && data.avatar_id != undefined) {
                this.avatar_id = data.avatar_id;
            }
            if ("costume_id" in data && data.costume_id != undefined) {
                this.costume_id = data.costume_id;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
        }
    }
    get avatar_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set avatar_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get costume_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set costume_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new HideAndSeekPlayerSetAvatarNotify({});
        if (data.avatar_id != null) {
            message.avatar_id = data.avatar_id;
        }
        if (data.costume_id != null) {
            message.costume_id = data.costume_id;
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_id != null) {
            data.avatar_id = this.avatar_id;
        }
        if (this.costume_id != null) {
            data.costume_id = this.costume_id;
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_id != 0)
            writer.writeUint32(2, this.avatar_id);
        if (this.costume_id != 0)
            writer.writeUint32(13, this.costume_id);
        if (this.uid != 0)
            writer.writeUint32(5, this.uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HideAndSeekPlayerSetAvatarNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.avatar_id = reader.readUint32();
                    break;
                case 13:
                    message.costume_id = reader.readUint32();
                    break;
                case 5:
                    message.uid = reader.readUint32();
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
        return HideAndSeekPlayerSetAvatarNotify.deserialize(bytes);
    }
}
exports.HideAndSeekPlayerSetAvatarNotify = HideAndSeekPlayerSetAvatarNotify;
_HideAndSeekPlayerSetAvatarNotify_one_of_decls = new WeakMap();