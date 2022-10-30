"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChangeMpTeamAvatarRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeMpTeamAvatarRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChangeMpTeamAvatarRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ChangeMpTeamAvatarRsp extends pb_1.Message {
    constructor(data) {
        super();
        _ChangeMpTeamAvatarRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _ChangeMpTeamAvatarRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("avatar_guid_list" in data && data.avatar_guid_list != undefined) {
                this.avatar_guid_list = data.avatar_guid_list;
            }
            if ("cur_avatar_guid" in data && data.cur_avatar_guid != undefined) {
                this.cur_avatar_guid = data.cur_avatar_guid;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get avatar_guid_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []);
    }
    set avatar_guid_list(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get cur_avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set cur_avatar_guid(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new ChangeMpTeamAvatarRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.avatar_guid_list != null) {
            message.avatar_guid_list = data.avatar_guid_list;
        }
        if (data.cur_avatar_guid != null) {
            message.cur_avatar_guid = data.cur_avatar_guid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.avatar_guid_list != null) {
            data.avatar_guid_list = this.avatar_guid_list;
        }
        if (this.cur_avatar_guid != null) {
            data.cur_avatar_guid = this.cur_avatar_guid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(4, this.retcode);
        if (this.avatar_guid_list.length)
            writer.writePackedUint64(3, this.avatar_guid_list);
        if (this.cur_avatar_guid != 0)
            writer.writeUint64(13, this.cur_avatar_guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChangeMpTeamAvatarRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.retcode = reader.readInt32();
                    break;
                case 3:
                    message.avatar_guid_list = reader.readPackedUint64();
                    break;
                case 13:
                    message.cur_avatar_guid = reader.readUint64();
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
        return ChangeMpTeamAvatarRsp.deserialize(bytes);
    }
}
exports.ChangeMpTeamAvatarRsp = ChangeMpTeamAvatarRsp;
_ChangeMpTeamAvatarRsp_one_of_decls = new WeakMap();
