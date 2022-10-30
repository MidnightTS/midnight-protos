"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MonsterAIConfigHashNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterAIConfigHashNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MonsterAIConfigHashNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MonsterAIConfigHashNotify extends pb_1.Message {
    constructor(data) {
        super();
        _MonsterAIConfigHashNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MonsterAIConfigHashNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("job_id" in data && data.job_id != undefined) {
                this.job_id = data.job_id;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("hash_value" in data && data.hash_value != undefined) {
                this.hash_value = data.hash_value;
            }
        }
    }
    get job_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set job_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get hash_value() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set hash_value(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new MonsterAIConfigHashNotify({});
        if (data.job_id != null) {
            message.job_id = data.job_id;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.hash_value != null) {
            message.hash_value = data.hash_value;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.job_id != null) {
            data.job_id = this.job_id;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.hash_value != null) {
            data.hash_value = this.hash_value;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.job_id != 0)
            writer.writeUint32(10, this.job_id);
        if (this.entity_id != 0)
            writer.writeUint32(15, this.entity_id);
        if (this.hash_value != 0)
            writer.writeInt32(11, this.hash_value);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MonsterAIConfigHashNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.job_id = reader.readUint32();
                    break;
                case 15:
                    message.entity_id = reader.readUint32();
                    break;
                case 11:
                    message.hash_value = reader.readInt32();
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
        return MonsterAIConfigHashNotify.deserialize(bytes);
    }
}
exports.MonsterAIConfigHashNotify = MonsterAIConfigHashNotify;
_MonsterAIConfigHashNotify_one_of_decls = new WeakMap();