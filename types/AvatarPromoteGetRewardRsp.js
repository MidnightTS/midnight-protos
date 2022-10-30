"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarPromoteGetRewardRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarPromoteGetRewardRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarPromoteGetRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AvatarPromoteGetRewardRsp extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarPromoteGetRewardRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarPromoteGetRewardRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("reward_id" in data && data.reward_id != undefined) {
                this.reward_id = data.reward_id;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("promote_level" in data && data.promote_level != undefined) {
                this.promote_level = data.promote_level;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get reward_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set reward_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get promote_level() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set promote_level(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new AvatarPromoteGetRewardRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.reward_id != null) {
            message.reward_id = data.reward_id;
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.promote_level != null) {
            message.promote_level = data.promote_level;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.reward_id != null) {
            data.reward_id = this.reward_id;
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.promote_level != null) {
            data.promote_level = this.promote_level;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(10, this.retcode);
        if (this.reward_id != 0)
            writer.writeUint32(15, this.reward_id);
        if (this.avatar_guid != 0)
            writer.writeUint64(11, this.avatar_guid);
        if (this.promote_level != 0)
            writer.writeUint32(12, this.promote_level);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarPromoteGetRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.retcode = reader.readInt32();
                    break;
                case 15:
                    message.reward_id = reader.readUint32();
                    break;
                case 11:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 12:
                    message.promote_level = reader.readUint32();
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
        return AvatarPromoteGetRewardRsp.deserialize(bytes);
    }
}
exports.AvatarPromoteGetRewardRsp = AvatarPromoteGetRewardRsp;
_AvatarPromoteGetRewardRsp_one_of_decls = new WeakMap();
