"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeKickPlayerRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeKickPlayerRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeKickPlayerRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HomeKickPlayerRsp extends pb_1.Message {
    constructor(data) {
        super();
        _HomeKickPlayerRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeKickPlayerRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("target_uid" in data && data.target_uid != undefined) {
                this.target_uid = data.target_uid;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("is_kick_all" in data && data.is_kick_all != undefined) {
                this.is_kick_all = data.is_kick_all;
            }
        }
    }
    get target_uid() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set target_uid(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get is_kick_all() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set is_kick_all(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new HomeKickPlayerRsp({});
        if (data.target_uid != null) {
            message.target_uid = data.target_uid;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
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
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.is_kick_all != null) {
            data.is_kick_all = this.is_kick_all;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.target_uid != 0)
            writer.writeUint32(4, this.target_uid);
        if (this.retcode != 0)
            writer.writeInt32(8, this.retcode);
        if (this.is_kick_all != false)
            writer.writeBool(10, this.is_kick_all);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeKickPlayerRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.target_uid = reader.readUint32();
                    break;
                case 8:
                    message.retcode = reader.readInt32();
                    break;
                case 10:
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
        return HomeKickPlayerRsp.deserialize(bytes);
    }
}
exports.HomeKickPlayerRsp = HomeKickPlayerRsp;
_HomeKickPlayerRsp_one_of_decls = new WeakMap();
