"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeAvatarRewardEventInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarRewardEventInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeAvatarRewardEventInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HomeAvatarRewardEventInfo extends pb_1.Message {
    constructor(data) {
        super();
        _HomeAvatarRewardEventInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeAvatarRewardEventInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_id" in data && data.avatar_id != undefined) {
                this.avatar_id = data.avatar_id;
            }
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
            if ("event_id" in data && data.event_id != undefined) {
                this.event_id = data.event_id;
            }
            if ("suite_id" in data && data.suite_id != undefined) {
                this.suite_id = data.suite_id;
            }
            if ("random_position" in data && data.random_position != undefined) {
                this.random_position = data.random_position;
            }
        }
    }
    get avatar_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set avatar_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set guid(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get event_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set event_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get suite_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set suite_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get random_position() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set random_position(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new HomeAvatarRewardEventInfo({});
        if (data.avatar_id != null) {
            message.avatar_id = data.avatar_id;
        }
        if (data.guid != null) {
            message.guid = data.guid;
        }
        if (data.event_id != null) {
            message.event_id = data.event_id;
        }
        if (data.suite_id != null) {
            message.suite_id = data.suite_id;
        }
        if (data.random_position != null) {
            message.random_position = data.random_position;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_id != null) {
            data.avatar_id = this.avatar_id;
        }
        if (this.guid != null) {
            data.guid = this.guid;
        }
        if (this.event_id != null) {
            data.event_id = this.event_id;
        }
        if (this.suite_id != null) {
            data.suite_id = this.suite_id;
        }
        if (this.random_position != null) {
            data.random_position = this.random_position;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_id != 0)
            writer.writeUint32(1, this.avatar_id);
        if (this.guid != 0)
            writer.writeUint32(12, this.guid);
        if (this.event_id != 0)
            writer.writeUint32(2, this.event_id);
        if (this.suite_id != 0)
            writer.writeUint32(14, this.suite_id);
        if (this.random_position != 0)
            writer.writeUint32(9, this.random_position);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeAvatarRewardEventInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.avatar_id = reader.readUint32();
                    break;
                case 12:
                    message.guid = reader.readUint32();
                    break;
                case 2:
                    message.event_id = reader.readUint32();
                    break;
                case 14:
                    message.suite_id = reader.readUint32();
                    break;
                case 9:
                    message.random_position = reader.readUint32();
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
        return HomeAvatarRewardEventInfo.deserialize(bytes);
    }
}
exports.HomeAvatarRewardEventInfo = HomeAvatarRewardEventInfo;
_HomeAvatarRewardEventInfo_one_of_decls = new WeakMap();
