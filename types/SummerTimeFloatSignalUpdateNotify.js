"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SummerTimeFloatSignalUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeFloatSignalUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SummerTimeFloatSignalUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class SummerTimeFloatSignalUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _SummerTimeFloatSignalUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SummerTimeFloatSignalUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_transfer_anchor" in data && data.is_transfer_anchor != undefined) {
                this.is_transfer_anchor = data.is_transfer_anchor;
            }
            if ("float_signal_id" in data && data.float_signal_id != undefined) {
                this.float_signal_id = data.float_signal_id;
            }
            if ("position" in data && data.position != undefined) {
                this.position = data.position;
            }
        }
    }
    get is_transfer_anchor() {
        return pb_1.Message.getFieldWithDefault(this, 4, false);
    }
    set is_transfer_anchor(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get float_signal_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set float_signal_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get position() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 10);
    }
    set position(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_position() {
        return pb_1.Message.getField(this, 10) != null;
    }
    static fromObject(data) {
        const message = new SummerTimeFloatSignalUpdateNotify({});
        if (data.is_transfer_anchor != null) {
            message.is_transfer_anchor = data.is_transfer_anchor;
        }
        if (data.float_signal_id != null) {
            message.float_signal_id = data.float_signal_id;
        }
        if (data.position != null) {
            message.position = dependency_1.Vector.fromObject(data.position);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_transfer_anchor != null) {
            data.is_transfer_anchor = this.is_transfer_anchor;
        }
        if (this.float_signal_id != null) {
            data.float_signal_id = this.float_signal_id;
        }
        if (this.position != null) {
            data.position = this.position.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_transfer_anchor != false)
            writer.writeBool(4, this.is_transfer_anchor);
        if (this.float_signal_id != 0)
            writer.writeUint32(8, this.float_signal_id);
        if (this.has_position)
            writer.writeMessage(10, this.position, () => this.position.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SummerTimeFloatSignalUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.is_transfer_anchor = reader.readBool();
                    break;
                case 8:
                    message.float_signal_id = reader.readUint32();
                    break;
                case 10:
                    reader.readMessage(message.position, () => message.position = dependency_1.Vector.deserialize(reader));
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
        return SummerTimeFloatSignalUpdateNotify.deserialize(bytes);
    }
}
exports.SummerTimeFloatSignalUpdateNotify = SummerTimeFloatSignalUpdateNotify;
_SummerTimeFloatSignalUpdateNotify_one_of_decls = new WeakMap();