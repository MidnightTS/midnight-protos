"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ShowMessageNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowMessageNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ShowMessageNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MsgParam");
const dependency_2 = require("./SvrMsgId");
const pb_1 = require("google-protobuf");
class ShowMessageNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ShowMessageNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13], __classPrivateFieldGet(this, _ShowMessageNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("msg_id" in data && data.msg_id != undefined) {
                this.msg_id = data.msg_id;
            }
            if ("params" in data && data.params != undefined) {
                this.params = data.params;
            }
        }
    }
    get msg_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, dependency_2.SvrMsgId.SVR_MSG_ID_UNKNOWN);
    }
    set msg_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get params() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MsgParam, 13);
    }
    set params(value) {
        pb_1.Message.setRepeatedWrapperField(this, 13, value);
    }
    static fromObject(data) {
        const message = new ShowMessageNotify({});
        if (data.msg_id != null) {
            message.msg_id = data.msg_id;
        }
        if (data.params != null) {
            message.params = data.params.map(item => dependency_1.MsgParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.msg_id != null) {
            data.msg_id = this.msg_id;
        }
        if (this.params != null) {
            data.params = this.params.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.msg_id != dependency_2.SvrMsgId.SVR_MSG_ID_UNKNOWN)
            writer.writeEnum(14, this.msg_id);
        if (this.params.length)
            writer.writeRepeatedMessage(13, this.params, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ShowMessageNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.msg_id = reader.readEnum();
                    break;
                case 13:
                    reader.readMessage(message.params, () => pb_1.Message.addToRepeatedWrapperField(message, 13, dependency_1.MsgParam.deserialize(reader), dependency_1.MsgParam));
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
        return ShowMessageNotify.deserialize(bytes);
    }
}
exports.ShowMessageNotify = ShowMessageNotify;
_ShowMessageNotify_one_of_decls = new WeakMap();
