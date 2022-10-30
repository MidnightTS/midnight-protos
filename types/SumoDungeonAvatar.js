"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SumoDungeonAvatar_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoDungeonAvatar = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SumoDungeonAvatar.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SumoDungeonAvatar extends pb_1.Message {
    constructor(data) {
        super();
        _SumoDungeonAvatar_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SumoDungeonAvatar_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("is_alive" in data && data.is_alive != undefined) {
                this.is_alive = data.is_alive;
            }
            if ("is_trial" in data && data.is_trial != undefined) {
                this.is_trial = data.is_trial;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get is_alive() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set is_alive(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get is_trial() {
        return pb_1.Message.getFieldWithDefault(this, 4, false);
    }
    set is_trial(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new SumoDungeonAvatar({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.is_alive != null) {
            message.is_alive = data.is_alive;
        }
        if (data.is_trial != null) {
            message.is_trial = data.is_trial;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.is_alive != null) {
            data.is_alive = this.is_alive;
        }
        if (this.is_trial != null) {
            data.is_trial = this.is_trial;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(11, this.avatar_guid);
        if (this.is_alive != false)
            writer.writeBool(13, this.is_alive);
        if (this.is_trial != false)
            writer.writeBool(4, this.is_trial);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SumoDungeonAvatar();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 13:
                    message.is_alive = reader.readBool();
                    break;
                case 4:
                    message.is_trial = reader.readBool();
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
        return SumoDungeonAvatar.deserialize(bytes);
    }
}
exports.SumoDungeonAvatar = SumoDungeonAvatar;
_SumoDungeonAvatar_one_of_decls = new WeakMap();
