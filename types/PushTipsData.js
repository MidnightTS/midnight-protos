"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PushTipsData_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushTipsData = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PushTipsData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PushTipsData extends pb_1.Message {
    constructor(data) {
        super();
        _PushTipsData_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PushTipsData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("push_tips_id" in data && data.push_tips_id != undefined) {
                this.push_tips_id = data.push_tips_id;
            }
            if ("state" in data && data.state != undefined) {
                this.state = data.state;
            }
        }
    }
    get push_tips_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set push_tips_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get state() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set state(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new PushTipsData({});
        if (data.push_tips_id != null) {
            message.push_tips_id = data.push_tips_id;
        }
        if (data.state != null) {
            message.state = data.state;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.push_tips_id != null) {
            data.push_tips_id = this.push_tips_id;
        }
        if (this.state != null) {
            data.state = this.state;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.push_tips_id != 0)
            writer.writeUint32(13, this.push_tips_id);
        if (this.state != 0)
            writer.writeUint32(4, this.state);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PushTipsData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.push_tips_id = reader.readUint32();
                    break;
                case 4:
                    message.state = reader.readUint32();
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
        return PushTipsData.deserialize(bytes);
    }
}
exports.PushTipsData = PushTipsData;
_PushTipsData_one_of_decls = new WeakMap();
