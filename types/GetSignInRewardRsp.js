"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetSignInRewardRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSignInRewardRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetSignInRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SignInInfo");
const pb_1 = require("google-protobuf");
class GetSignInRewardRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GetSignInRewardRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetSignInRewardRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("sign_in_info" in data && data.sign_in_info != undefined) {
                this.sign_in_info = data.sign_in_info;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get sign_in_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.SignInInfo, 14);
    }
    set sign_in_info(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_sign_in_info() {
        return pb_1.Message.getField(this, 14) != null;
    }
    static fromObject(data) {
        const message = new GetSignInRewardRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.sign_in_info != null) {
            message.sign_in_info = dependency_1.SignInInfo.fromObject(data.sign_in_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.sign_in_info != null) {
            data.sign_in_info = this.sign_in_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(1, this.retcode);
        if (this.has_sign_in_info)
            writer.writeMessage(14, this.sign_in_info, () => this.sign_in_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetSignInRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    reader.readMessage(message.sign_in_info, () => message.sign_in_info = dependency_1.SignInInfo.deserialize(reader));
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
        return GetSignInRewardRsp.deserialize(bytes);
    }
}
exports.GetSignInRewardRsp = GetSignInRewardRsp;
_GetSignInRewardRsp_one_of_decls = new WeakMap();