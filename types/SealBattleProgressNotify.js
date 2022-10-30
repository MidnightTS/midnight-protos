"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SealBattleProgressNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealBattleProgressNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SealBattleProgressNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SealBattleProgressNotify extends pb_1.Message {
    constructor(data) {
        super();
        _SealBattleProgressNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SealBattleProgressNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("seal_entity_id" in data && data.seal_entity_id != undefined) {
                this.seal_entity_id = data.seal_entity_id;
            }
            if ("max_progress" in data && data.max_progress != undefined) {
                this.max_progress = data.max_progress;
            }
            if ("seal_radius" in data && data.seal_radius != undefined) {
                this.seal_radius = data.seal_radius;
            }
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
        }
    }
    get seal_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set seal_entity_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get max_progress() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set max_progress(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get seal_radius() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set seal_radius(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set progress(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set end_time(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new SealBattleProgressNotify({});
        if (data.seal_entity_id != null) {
            message.seal_entity_id = data.seal_entity_id;
        }
        if (data.max_progress != null) {
            message.max_progress = data.max_progress;
        }
        if (data.seal_radius != null) {
            message.seal_radius = data.seal_radius;
        }
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.seal_entity_id != null) {
            data.seal_entity_id = this.seal_entity_id;
        }
        if (this.max_progress != null) {
            data.max_progress = this.max_progress;
        }
        if (this.seal_radius != null) {
            data.seal_radius = this.seal_radius;
        }
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.seal_entity_id != 0)
            writer.writeUint32(9, this.seal_entity_id);
        if (this.max_progress != 0)
            writer.writeUint32(10, this.max_progress);
        if (this.seal_radius != 0)
            writer.writeUint32(4, this.seal_radius);
        if (this.progress != 0)
            writer.writeUint32(5, this.progress);
        if (this.end_time != 0)
            writer.writeUint32(2, this.end_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SealBattleProgressNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.seal_entity_id = reader.readUint32();
                    break;
                case 10:
                    message.max_progress = reader.readUint32();
                    break;
                case 4:
                    message.seal_radius = reader.readUint32();
                    break;
                case 5:
                    message.progress = reader.readUint32();
                    break;
                case 2:
                    message.end_time = reader.readUint32();
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
        return SealBattleProgressNotify.deserialize(bytes);
    }
}
exports.SealBattleProgressNotify = SealBattleProgressNotify;
_SealBattleProgressNotify_one_of_decls = new WeakMap();
