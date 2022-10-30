"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FocusAvatarReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusAvatarReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FocusAvatarReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class FocusAvatarReq extends pb_1.Message {
    constructor(data) {
        super();
        _FocusAvatarReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FocusAvatarReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("is_focus" in data && data.is_focus != undefined) {
                this.is_focus = data.is_focus;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get is_focus() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_focus(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new FocusAvatarReq({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.is_focus != null) {
            message.is_focus = data.is_focus;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.is_focus != null) {
            data.is_focus = this.is_focus;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(1, this.avatar_guid);
        if (this.is_focus != false)
            writer.writeBool(8, this.is_focus);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FocusAvatarReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 8:
                    message.is_focus = reader.readBool();
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
        return FocusAvatarReq.deserialize(bytes);
    }
}
exports.FocusAvatarReq = FocusAvatarReq;
_FocusAvatarReq_one_of_decls = new WeakMap();