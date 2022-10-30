"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GadgetPlayUidOpNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetPlayUidOpNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GadgetPlayUidOpNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GadgetPlayUidOpNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GadgetPlayUidOpNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 4], __classPrivateFieldGet(this, _GadgetPlayUidOpNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("uid_list" in data && data.uid_list != undefined) {
                this.uid_list = data.uid_list;
            }
            if ("play_type" in data && data.play_type != undefined) {
                this.play_type = data.play_type;
            }
            if ("param_str" in data && data.param_str != undefined) {
                this.param_str = data.param_str;
            }
            if ("op" in data && data.op != undefined) {
                this.op = data.op;
            }
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set uid_list(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get play_type() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set play_type(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get param_str() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set param_str(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get op() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set op(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set param_list(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new GadgetPlayUidOpNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.uid_list != null) {
            message.uid_list = data.uid_list;
        }
        if (data.play_type != null) {
            message.play_type = data.play_type;
        }
        if (data.param_str != null) {
            message.param_str = data.param_str;
        }
        if (data.op != null) {
            message.op = data.op;
        }
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.uid_list != null) {
            data.uid_list = this.uid_list;
        }
        if (this.play_type != null) {
            data.play_type = this.play_type;
        }
        if (this.param_str != null) {
            data.param_str = this.param_str;
        }
        if (this.op != null) {
            data.op = this.op;
        }
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(11, this.entity_id);
        if (this.uid_list.length)
            writer.writePackedUint32(2, this.uid_list);
        if (this.play_type != 0)
            writer.writeUint32(6, this.play_type);
        if (this.param_str.length)
            writer.writeString(1, this.param_str);
        if (this.op != 0)
            writer.writeUint32(7, this.op);
        if (this.param_list.length)
            writer.writePackedUint32(4, this.param_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GadgetPlayUidOpNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.entity_id = reader.readUint32();
                    break;
                case 2:
                    message.uid_list = reader.readPackedUint32();
                    break;
                case 6:
                    message.play_type = reader.readUint32();
                    break;
                case 1:
                    message.param_str = reader.readString();
                    break;
                case 7:
                    message.op = reader.readUint32();
                    break;
                case 4:
                    message.param_list = reader.readPackedUint32();
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
        return GadgetPlayUidOpNotify.deserialize(bytes);
    }
}
exports.GadgetPlayUidOpNotify = GadgetPlayUidOpNotify;
_GadgetPlayUidOpNotify_one_of_decls = new WeakMap();