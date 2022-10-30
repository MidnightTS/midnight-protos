"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarGainCostumeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarGainCostumeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarGainCostumeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AvatarGainCostumeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarGainCostumeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarGainCostumeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("costume_id" in data && data.costume_id != undefined) {
                this.costume_id = data.costume_id;
            }
        }
    }
    get costume_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set costume_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new AvatarGainCostumeNotify({});
        if (data.costume_id != null) {
            message.costume_id = data.costume_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.costume_id != null) {
            data.costume_id = this.costume_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.costume_id != 0)
            writer.writeUint32(15, this.costume_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarGainCostumeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.costume_id = reader.readUint32();
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
        return AvatarGainCostumeNotify.deserialize(bytes);
    }
}
exports.AvatarGainCostumeNotify = AvatarGainCostumeNotify;
_AvatarGainCostumeNotify_one_of_decls = new WeakMap();