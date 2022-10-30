"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScenePlayOwnerCheckReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayOwnerCheckReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScenePlayOwnerCheckReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ScenePlayOwnerCheckReq extends pb_1.Message {
    constructor(data) {
        super();
        _ScenePlayOwnerCheckReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ScenePlayOwnerCheckReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("play_id" in data && data.play_id != undefined) {
                this.play_id = data.play_id;
            }
            if ("is_skip_match" in data && data.is_skip_match != undefined) {
                this.is_skip_match = data.is_skip_match;
            }
        }
    }
    get play_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set play_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get is_skip_match() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set is_skip_match(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new ScenePlayOwnerCheckReq({});
        if (data.play_id != null) {
            message.play_id = data.play_id;
        }
        if (data.is_skip_match != null) {
            message.is_skip_match = data.is_skip_match;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.play_id != null) {
            data.play_id = this.play_id;
        }
        if (this.is_skip_match != null) {
            data.is_skip_match = this.is_skip_match;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.play_id != 0)
            writer.writeUint32(9, this.play_id);
        if (this.is_skip_match != false)
            writer.writeBool(6, this.is_skip_match);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScenePlayOwnerCheckReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.play_id = reader.readUint32();
                    break;
                case 6:
                    message.is_skip_match = reader.readBool();
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
        return ScenePlayOwnerCheckReq.deserialize(bytes);
    }
}
exports.ScenePlayOwnerCheckReq = ScenePlayOwnerCheckReq;
_ScenePlayOwnerCheckReq_one_of_decls = new WeakMap();
