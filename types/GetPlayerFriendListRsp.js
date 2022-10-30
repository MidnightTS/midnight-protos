"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetPlayerFriendListRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerFriendListRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetPlayerFriendListRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FriendBrief");
const pb_1 = require("google-protobuf");
class GetPlayerFriendListRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GetPlayerFriendListRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8, 14], __classPrivateFieldGet(this, _GetPlayerFriendListRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("ask_friend_list" in data && data.ask_friend_list != undefined) {
                this.ask_friend_list = data.ask_friend_list;
            }
            if ("friend_list" in data && data.friend_list != undefined) {
                this.friend_list = data.friend_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get ask_friend_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FriendBrief, 8);
    }
    set ask_friend_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get friend_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FriendBrief, 14);
    }
    set friend_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data) {
        const message = new GetPlayerFriendListRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.ask_friend_list != null) {
            message.ask_friend_list = data.ask_friend_list.map(item => dependency_1.FriendBrief.fromObject(item));
        }
        if (data.friend_list != null) {
            message.friend_list = data.friend_list.map(item => dependency_1.FriendBrief.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.ask_friend_list != null) {
            data.ask_friend_list = this.ask_friend_list.map((item) => item.toObject());
        }
        if (this.friend_list != null) {
            data.friend_list = this.friend_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(9, this.retcode);
        if (this.ask_friend_list.length)
            writer.writeRepeatedMessage(8, this.ask_friend_list, (item) => item.serialize(writer));
        if (this.friend_list.length)
            writer.writeRepeatedMessage(14, this.friend_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetPlayerFriendListRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.retcode = reader.readInt32();
                    break;
                case 8:
                    reader.readMessage(message.ask_friend_list, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.FriendBrief.deserialize(reader), dependency_1.FriendBrief));
                    break;
                case 14:
                    reader.readMessage(message.friend_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.FriendBrief.deserialize(reader), dependency_1.FriendBrief));
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
        return GetPlayerFriendListRsp.deserialize(bytes);
    }
}
exports.GetPlayerFriendListRsp = GetPlayerFriendListRsp;
_GetPlayerFriendListRsp_one_of_decls = new WeakMap();