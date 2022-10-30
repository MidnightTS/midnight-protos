"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClientBulletCreateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBulletCreateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ClientBulletCreateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ClientBulletCreateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ClientBulletCreateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ClientBulletCreateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("param" in data && data.param != undefined) {
                this.param = data.param;
            }
        }
    }
    get param() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set param(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new ClientBulletCreateNotify({});
        if (data.param != null) {
            message.param = data.param;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.param != null) {
            data.param = this.param;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.param != 0)
            writer.writeUint32(6, this.param);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientBulletCreateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.param = reader.readUint32();
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
        return ClientBulletCreateNotify.deserialize(bytes);
    }
}
exports.ClientBulletCreateNotify = ClientBulletCreateNotify;
_ClientBulletCreateNotify_one_of_decls = new WeakMap();
