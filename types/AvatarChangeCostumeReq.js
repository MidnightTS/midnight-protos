"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarChangeCostumeReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarChangeCostumeReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarChangeCostumeReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AvatarChangeCostumeReq extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarChangeCostumeReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarChangeCostumeReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("costume_id" in data && data.costume_id != undefined) {
                this.costume_id = data.costume_id;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
        }
    }
    get costume_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set costume_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AvatarChangeCostumeReq({});
        if (data.costume_id != null) {
            message.costume_id = data.costume_id;
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.costume_id != null) {
            data.costume_id = this.costume_id;
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.costume_id != 0)
            writer.writeUint32(4, this.costume_id);
        if (this.avatar_guid != 0)
            writer.writeUint64(2, this.avatar_guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarChangeCostumeReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.costume_id = reader.readUint32();
                    break;
                case 2:
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
        return AvatarChangeCostumeReq.deserialize(bytes);
    }
}
exports.AvatarChangeCostumeReq = AvatarChangeCostumeReq;
_AvatarChangeCostumeReq_one_of_decls = new WeakMap();