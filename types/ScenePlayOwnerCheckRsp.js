"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScenePlayOwnerCheckRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayOwnerCheckRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScenePlayOwnerCheckRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ScenePlayOwnerCheckRsp extends pb_1.Message {
    constructor(data) {
        super();
        _ScenePlayOwnerCheckRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _ScenePlayOwnerCheckRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
            if ("is_skip_match" in data && data.is_skip_match != undefined) {
                this.is_skip_match = data.is_skip_match;
            }
            if ("play_id" in data && data.play_id != undefined) {
                this.play_id = data.play_id;
            }
            if ("wrong_uid" in data && data.wrong_uid != undefined) {
                this.wrong_uid = data.wrong_uid;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 8, []);
    }
    set param_list(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get is_skip_match() {
        return pb_1.Message.getFieldWithDefault(this, 1, false);
    }
    set is_skip_match(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get play_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set play_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get wrong_uid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set wrong_uid(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new ScenePlayOwnerCheckRsp({});
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        if (data.is_skip_match != null) {
            message.is_skip_match = data.is_skip_match;
        }
        if (data.play_id != null) {
            message.play_id = data.play_id;
        }
        if (data.wrong_uid != null) {
            message.wrong_uid = data.wrong_uid;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        if (this.is_skip_match != null) {
            data.is_skip_match = this.is_skip_match;
        }
        if (this.play_id != null) {
            data.play_id = this.play_id;
        }
        if (this.wrong_uid != null) {
            data.wrong_uid = this.wrong_uid;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.param_list.length)
            writer.writePackedUint32(8, this.param_list);
        if (this.is_skip_match != false)
            writer.writeBool(1, this.is_skip_match);
        if (this.play_id != 0)
            writer.writeUint32(9, this.play_id);
        if (this.wrong_uid != 0)
            writer.writeUint32(5, this.wrong_uid);
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScenePlayOwnerCheckRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.param_list = reader.readPackedUint32();
                    break;
                case 1:
                    message.is_skip_match = reader.readBool();
                    break;
                case 9:
                    message.play_id = reader.readUint32();
                    break;
                case 5:
                    message.wrong_uid = reader.readUint32();
                    break;
                case 3:
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
        return ScenePlayOwnerCheckRsp.deserialize(bytes);
    }
}
exports.ScenePlayOwnerCheckRsp = ScenePlayOwnerCheckRsp;
_ScenePlayOwnerCheckRsp_one_of_decls = new WeakMap();