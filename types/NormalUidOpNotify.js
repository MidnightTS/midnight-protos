"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NormalUidOpNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalUidOpNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: NormalUidOpNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class NormalUidOpNotify extends pb_1.Message {
    constructor(data) {
        super();
        _NormalUidOpNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4, 5], __classPrivateFieldGet(this, _NormalUidOpNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("duration" in data && data.duration != undefined) {
                this.duration = data.duration;
            }
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
            if ("param_uid_list" in data && data.param_uid_list != undefined) {
                this.param_uid_list = data.param_uid_list;
            }
            if ("param_index" in data && data.param_index != undefined) {
                this.param_index = data.param_index;
            }
        }
    }
    get duration() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set duration(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set param_list(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get param_uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 5, []);
    }
    set param_uid_list(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get param_index() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set param_index(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new NormalUidOpNotify({});
        if (data.duration != null) {
            message.duration = data.duration;
        }
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        if (data.param_uid_list != null) {
            message.param_uid_list = data.param_uid_list;
        }
        if (data.param_index != null) {
            message.param_index = data.param_index;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.duration != null) {
            data.duration = this.duration;
        }
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        if (this.param_uid_list != null) {
            data.param_uid_list = this.param_uid_list;
        }
        if (this.param_index != null) {
            data.param_index = this.param_index;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.duration != 0)
            writer.writeUint32(6, this.duration);
        if (this.param_list.length)
            writer.writePackedUint32(4, this.param_list);
        if (this.param_uid_list.length)
            writer.writePackedUint32(5, this.param_uid_list);
        if (this.param_index != 0)
            writer.writeUint32(8, this.param_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NormalUidOpNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.duration = reader.readUint32();
                    break;
                case 4:
                    message.param_list = reader.readPackedUint32();
                    break;
                case 5:
                    message.param_uid_list = reader.readPackedUint32();
                    break;
                case 8:
                    message.param_index = reader.readUint32();
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
        return NormalUidOpNotify.deserialize(bytes);
    }
}
exports.NormalUidOpNotify = NormalUidOpNotify;
_NormalUidOpNotify_one_of_decls = new WeakMap();