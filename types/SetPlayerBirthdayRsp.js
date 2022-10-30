"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SetPlayerBirthdayRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlayerBirthdayRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SetPlayerBirthdayRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Birthday");
const pb_1 = require("google-protobuf");
class SetPlayerBirthdayRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SetPlayerBirthdayRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SetPlayerBirthdayRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("birthday" in data && data.birthday != undefined) {
                this.birthday = data.birthday;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get birthday() {
        return pb_1.Message.getWrapperField(this, dependency_1.Birthday, 2);
    }
    set birthday(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_birthday() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new SetPlayerBirthdayRsp({});
        if (data.birthday != null) {
            message.birthday = dependency_1.Birthday.fromObject(data.birthday);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.birthday != null) {
            data.birthday = this.birthday.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_birthday)
            writer.writeMessage(2, this.birthday, () => this.birthday.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SetPlayerBirthdayRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    reader.readMessage(message.birthday, () => message.birthday = dependency_1.Birthday.deserialize(reader));
                    break;
                case 5:
                    message.retcode = reader.readInt32();
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
        return SetPlayerBirthdayRsp.deserialize(bytes);
    }
}
exports.SetPlayerBirthdayRsp = SetPlayerBirthdayRsp;
_SetPlayerBirthdayRsp_one_of_decls = new WeakMap();