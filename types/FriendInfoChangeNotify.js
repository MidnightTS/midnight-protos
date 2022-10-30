"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FriendInfoChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendInfoChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FriendInfoChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class FriendInfoChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _FriendInfoChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FriendInfoChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("online_id" in data && data.online_id != undefined) {
                this.online_id = data.online_id;
            }
        }
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get online_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, "");
    }
    set online_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new FriendInfoChangeNotify({});
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (data.online_id != null) {
            message.online_id = data.online_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.online_id != null) {
            data.online_id = this.online_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uid != 0)
            writer.writeUint32(1, this.uid);
        if (this.online_id.length)
            writer.writeString(9, this.online_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FriendInfoChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.uid = reader.readUint32();
                    break;
                case 9:
                    message.online_id = reader.readString();
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
        return FriendInfoChangeNotify.deserialize(bytes);
    }
}
exports.FriendInfoChangeNotify = FriendInfoChangeNotify;
_FriendInfoChangeNotify_one_of_decls = new WeakMap();