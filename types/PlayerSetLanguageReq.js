"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerSetLanguageReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerSetLanguageReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerSetLanguageReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerSetLanguageReq extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerSetLanguageReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerSetLanguageReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("language_type" in data && data.language_type != undefined) {
                this.language_type = data.language_type;
            }
        }
    }
    get language_type() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set language_type(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new PlayerSetLanguageReq({});
        if (data.language_type != null) {
            message.language_type = data.language_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.language_type != null) {
            data.language_type = this.language_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.language_type != 0)
            writer.writeUint32(5, this.language_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerSetLanguageReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.language_type = reader.readUint32();
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
        return PlayerSetLanguageReq.deserialize(bytes);
    }
}
exports.PlayerSetLanguageReq = PlayerSetLanguageReq;
_PlayerSetLanguageReq_one_of_decls = new WeakMap();