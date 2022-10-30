"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneKickPlayerRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneKickPlayerRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneKickPlayerRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneKickPlayerRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SceneKickPlayerRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneKickPlayerRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set target_uid(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new SceneKickPlayerRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(13, this.retcode);
        if (this.target_uid != 0)
            writer.writeUint32(10, this.target_uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneKickPlayerRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.retcode = reader.readInt32();
                    break;
                case 10:
                    message.target_uid = reader.readUint32();
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
        return SceneKickPlayerRsp.deserialize(bytes);
    }
}
exports.SceneKickPlayerRsp = SceneKickPlayerRsp;
_SceneKickPlayerRsp_one_of_decls = new WeakMap();
