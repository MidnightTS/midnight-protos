"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeKickPlayerReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeKickPlayerReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeKickPlayerReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HomeKickPlayerReq extends pb_1.Message {
    constructor(data) {
        super();
        _HomeKickPlayerReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeKickPlayerReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
            if ("is_kick_all" in data && data.is_kick_all != undefined) {
                this.is_kick_all = data.is_kick_all;
            }
        }
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set target_uid(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get is_kick_all() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set is_kick_all(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new HomeKickPlayerReq({});
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        if (data.is_kick_all != null) {
            message.is_kick_all = data.is_kick_all;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.target_uid != null) {
            data.target_uid = this.target_uid;
        }
        if (this.is_kick_all != null) {
            data.is_kick_all = this.is_kick_all;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.target_uid != 0)
            writer.writeUint32(12, this.target_uid);
        if (this.is_kick_all != false)
            writer.writeBool(13, this.is_kick_all);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeKickPlayerReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.target_uid = reader.readUint32();
                    break;
                case 13:
                    message.is_kick_all = reader.readBool();
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
        return HomeKickPlayerReq.deserialize(bytes);
    }
}
exports.HomeKickPlayerReq = HomeKickPlayerReq;
_HomeKickPlayerReq_one_of_decls = new WeakMap();