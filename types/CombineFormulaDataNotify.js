"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CombineFormulaDataNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombineFormulaDataNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CombineFormulaDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CombineFormulaDataNotify extends pb_1.Message {
    constructor(data) {
        super();
        _CombineFormulaDataNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CombineFormulaDataNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("combine_id" in data && data.combine_id != undefined) {
                this.combine_id = data.combine_id;
            }
            if ("is_locked" in data && data.is_locked != undefined) {
                this.is_locked = data.is_locked;
            }
        }
    }
    get combine_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set combine_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get is_locked() {
        return pb_1.Message.getFieldWithDefault(this, 3, false);
    }
    set is_locked(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new CombineFormulaDataNotify({});
        if (data.combine_id != null) {
            message.combine_id = data.combine_id;
        }
        if (data.is_locked != null) {
            message.is_locked = data.is_locked;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.combine_id != null) {
            data.combine_id = this.combine_id;
        }
        if (this.is_locked != null) {
            data.is_locked = this.is_locked;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.combine_id != 0)
            writer.writeUint32(6, this.combine_id);
        if (this.is_locked != false)
            writer.writeBool(3, this.is_locked);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CombineFormulaDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.combine_id = reader.readUint32();
                    break;
                case 3:
                    message.is_locked = reader.readBool();
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
        return CombineFormulaDataNotify.deserialize(bytes);
    }
}
exports.CombineFormulaDataNotify = CombineFormulaDataNotify;
_CombineFormulaDataNotify_one_of_decls = new WeakMap();