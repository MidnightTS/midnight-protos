"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarExpeditionInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarExpeditionInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarExpeditionInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AvatarExpeditionState");
const pb_1 = require("google-protobuf");
class AvatarExpeditionInfo extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarExpeditionInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarExpeditionInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("state" in data && data.state != undefined) {
                this.state = data.state;
            }
            if ("exp_id" in data && data.exp_id != undefined) {
                this.exp_id = data.exp_id;
            }
            if ("hour_time" in data && data.hour_time != undefined) {
                this.hour_time = data.hour_time;
            }
            if ("start_time" in data && data.start_time != undefined) {
                this.start_time = data.start_time;
            }
            if ("shorten_ratio" in data && data.shorten_ratio != undefined) {
                this.shorten_ratio = data.shorten_ratio;
            }
        }
    }
    get state() {
        return pb_1.Message.getFieldWithDefault(this, 1, dependency_1.AvatarExpeditionState.AVATAR_EXPEDITION_STATE_NONE);
    }
    set state(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get exp_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set exp_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get hour_time() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set hour_time(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get start_time() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set start_time(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get shorten_ratio() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set shorten_ratio(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new AvatarExpeditionInfo({});
        if (data.state != null) {
            message.state = data.state;
        }
        if (data.exp_id != null) {
            message.exp_id = data.exp_id;
        }
        if (data.hour_time != null) {
            message.hour_time = data.hour_time;
        }
        if (data.start_time != null) {
            message.start_time = data.start_time;
        }
        if (data.shorten_ratio != null) {
            message.shorten_ratio = data.shorten_ratio;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.state != null) {
            data.state = this.state;
        }
        if (this.exp_id != null) {
            data.exp_id = this.exp_id;
        }
        if (this.hour_time != null) {
            data.hour_time = this.hour_time;
        }
        if (this.start_time != null) {
            data.start_time = this.start_time;
        }
        if (this.shorten_ratio != null) {
            data.shorten_ratio = this.shorten_ratio;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.state != dependency_1.AvatarExpeditionState.AVATAR_EXPEDITION_STATE_NONE)
            writer.writeEnum(1, this.state);
        if (this.exp_id != 0)
            writer.writeUint32(2, this.exp_id);
        if (this.hour_time != 0)
            writer.writeUint32(3, this.hour_time);
        if (this.start_time != 0)
            writer.writeUint32(4, this.start_time);
        if (this.shorten_ratio != 0)
            writer.writeFloat(5, this.shorten_ratio);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarExpeditionInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.state = reader.readEnum();
                    break;
                case 2:
                    message.exp_id = reader.readUint32();
                    break;
                case 3:
                    message.hour_time = reader.readUint32();
                    break;
                case 4:
                    message.start_time = reader.readUint32();
                    break;
                case 5:
                    message.shorten_ratio = reader.readFloat();
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
        return AvatarExpeditionInfo.deserialize(bytes);
    }
}
exports.AvatarExpeditionInfo = AvatarExpeditionInfo;
_AvatarExpeditionInfo_one_of_decls = new WeakMap();