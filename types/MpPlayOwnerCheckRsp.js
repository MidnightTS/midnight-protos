"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MpPlayOwnerCheckRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpPlayOwnerCheckRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MpPlayOwnerCheckRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MpPlayOwnerCheckRsp extends pb_1.Message {
    constructor(data) {
        super();
        _MpPlayOwnerCheckRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MpPlayOwnerCheckRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("wrong_uid" in data && data.wrong_uid != undefined) {
                this.wrong_uid = data.wrong_uid;
            }
            if ("is_skip_match" in data && data.is_skip_match != undefined) {
                this.is_skip_match = data.is_skip_match;
            }
            if ("mp_play_id" in data && data.mp_play_id != undefined) {
                this.mp_play_id = data.mp_play_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get wrong_uid() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set wrong_uid(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get is_skip_match() {
        return pb_1.Message.getFieldWithDefault(this, 15, false);
    }
    set is_skip_match(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get mp_play_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set mp_play_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new MpPlayOwnerCheckRsp({});
        if (data.wrong_uid != null) {
            message.wrong_uid = data.wrong_uid;
        }
        if (data.is_skip_match != null) {
            message.is_skip_match = data.is_skip_match;
        }
        if (data.mp_play_id != null) {
            message.mp_play_id = data.mp_play_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.wrong_uid != null) {
            data.wrong_uid = this.wrong_uid;
        }
        if (this.is_skip_match != null) {
            data.is_skip_match = this.is_skip_match;
        }
        if (this.mp_play_id != null) {
            data.mp_play_id = this.mp_play_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.wrong_uid != 0)
            writer.writeUint32(4, this.wrong_uid);
        if (this.is_skip_match != false)
            writer.writeBool(15, this.is_skip_match);
        if (this.mp_play_id != 0)
            writer.writeUint32(10, this.mp_play_id);
        if (this.retcode != 0)
            writer.writeInt32(12, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MpPlayOwnerCheckRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.wrong_uid = reader.readUint32();
                    break;
                case 15:
                    message.is_skip_match = reader.readBool();
                    break;
                case 10:
                    message.mp_play_id = reader.readUint32();
                    break;
                case 12:
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
        return MpPlayOwnerCheckRsp.deserialize(bytes);
    }
}
exports.MpPlayOwnerCheckRsp = MpPlayOwnerCheckRsp;
_MpPlayOwnerCheckRsp_one_of_decls = new WeakMap();
