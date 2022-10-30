"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetPlayerBlacklistRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayerBlacklistRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetPlayerBlacklistRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FriendBrief");
const pb_1 = require("google-protobuf");
class GetPlayerBlacklistRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GetPlayerBlacklistRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _GetPlayerBlacklistRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("blacklist" in data && data.blacklist != undefined) {
                this.blacklist = data.blacklist;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get blacklist() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FriendBrief, 3);
    }
    set blacklist(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data) {
        const message = new GetPlayerBlacklistRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.blacklist != null) {
            message.blacklist = data.blacklist.map(item => dependency_1.FriendBrief.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.blacklist != null) {
            data.blacklist = this.blacklist.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(2, this.retcode);
        if (this.blacklist.length)
            writer.writeRepeatedMessage(3, this.blacklist, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetPlayerBlacklistRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.retcode = reader.readInt32();
                    break;
                case 3:
                    reader.readMessage(message.blacklist, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.FriendBrief.deserialize(reader), dependency_1.FriendBrief));
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
        return GetPlayerBlacklistRsp.deserialize(bytes);
    }
}
exports.GetPlayerBlacklistRsp = GetPlayerBlacklistRsp;
_GetPlayerBlacklistRsp_one_of_decls = new WeakMap();