"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SetPlayerNameRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlayerNameRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SetPlayerNameRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SetPlayerNameRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SetPlayerNameRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SetPlayerNameRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("nick_name" in data && data.nick_name != undefined) {
                this.nick_name = data.nick_name;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get nick_name() {
        return pb_1.Message.getFieldWithDefault(this, 14, "");
    }
    set nick_name(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new SetPlayerNameRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.nick_name != null) {
            message.nick_name = data.nick_name;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.nick_name != null) {
            data.nick_name = this.nick_name;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(9, this.retcode);
        if (this.nick_name.length)
            writer.writeString(14, this.nick_name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SetPlayerNameRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    message.nick_name = reader.readString();
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
        return SetPlayerNameRsp.deserialize(bytes);
    }
}
exports.SetPlayerNameRsp = SetPlayerNameRsp;
_SetPlayerNameRsp_one_of_decls = new WeakMap();