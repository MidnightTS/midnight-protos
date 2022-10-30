"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarChangeAnimHashRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarChangeAnimHashRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarChangeAnimHashRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AvatarChangeAnimHashRsp extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarChangeAnimHashRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarChangeAnimHashRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("anim_hash" in data && data.anim_hash != undefined) {
                this.anim_hash = data.anim_hash;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
        }
    }
    get anim_hash() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set anim_hash(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new AvatarChangeAnimHashRsp({});
        if (data.anim_hash != null) {
            message.anim_hash = data.anim_hash;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.anim_hash != null) {
            data.anim_hash = this.anim_hash;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.anim_hash != 0)
            writer.writeUint32(13, this.anim_hash);
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (this.avatar_guid != 0)
            writer.writeUint64(10, this.avatar_guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarChangeAnimHashRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.anim_hash = reader.readUint32();
                    break;
                case 5:
                    message.retcode = reader.readInt32();
                    break;
                case 10:
                    message.avatar_guid = reader.readUint64();
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
        return AvatarChangeAnimHashRsp.deserialize(bytes);
    }
}
exports.AvatarChangeAnimHashRsp = AvatarChangeAnimHashRsp;
_AvatarChangeAnimHashRsp_one_of_decls = new WeakMap();
