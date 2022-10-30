"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EchoShellTakeRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoShellTakeRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EchoShellTakeRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class EchoShellTakeRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _EchoShellTakeRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EchoShellTakeRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reward_id" in data && data.reward_id != undefined) {
                this.reward_id = data.reward_id;
            }
        }
    }
    get reward_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set reward_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new EchoShellTakeRewardReq({});
        if (data.reward_id != null) {
            message.reward_id = data.reward_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.reward_id != null) {
            data.reward_id = this.reward_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.reward_id != 0)
            writer.writeUint32(10, this.reward_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EchoShellTakeRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.reward_id = reader.readUint32();
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
        return EchoShellTakeRewardReq.deserialize(bytes);
    }
}
exports.EchoShellTakeRewardReq = EchoShellTakeRewardReq;
_EchoShellTakeRewardReq_one_of_decls = new WeakMap();
