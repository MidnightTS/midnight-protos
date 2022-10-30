"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChangeGameTimeReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeGameTimeReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChangeGameTimeReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ChangeGameTimeReq extends pb_1.Message {
    constructor(data) {
        super();
        _ChangeGameTimeReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ChangeGameTimeReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("game_time" in data && data.game_time != undefined) {
                this.game_time = data.game_time;
            }
            if ("is_force_set" in data && data.is_force_set != undefined) {
                this.is_force_set = data.is_force_set;
            }
            if ("extra_days" in data && data.extra_days != undefined) {
                this.extra_days = data.extra_days;
            }
        }
    }
    get game_time() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set game_time(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get is_force_set() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set is_force_set(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get extra_days() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set extra_days(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new ChangeGameTimeReq({});
        if (data.game_time != null) {
            message.game_time = data.game_time;
        }
        if (data.is_force_set != null) {
            message.is_force_set = data.is_force_set;
        }
        if (data.extra_days != null) {
            message.extra_days = data.extra_days;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.game_time != null) {
            data.game_time = this.game_time;
        }
        if (this.is_force_set != null) {
            data.is_force_set = this.is_force_set;
        }
        if (this.extra_days != null) {
            data.extra_days = this.extra_days;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.game_time != 0)
            writer.writeUint32(6, this.game_time);
        if (this.is_force_set != false)
            writer.writeBool(11, this.is_force_set);
        if (this.extra_days != 0)
            writer.writeUint32(12, this.extra_days);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChangeGameTimeReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.game_time = reader.readUint32();
                    break;
                case 11:
                    message.is_force_set = reader.readBool();
                    break;
                case 12:
                    message.extra_days = reader.readUint32();
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
        return ChangeGameTimeReq.deserialize(bytes);
    }
}
exports.ChangeGameTimeReq = ChangeGameTimeReq;
_ChangeGameTimeReq_one_of_decls = new WeakMap();