"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReliquaryPromoteReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliquaryPromoteReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ReliquaryPromoteReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ReliquaryPromoteReq extends pb_1.Message {
    constructor(data) {
        super();
        _ReliquaryPromoteReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ReliquaryPromoteReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_guid" in data && data.item_guid != undefined) {
                this.item_guid = data.item_guid;
            }
            if ("target_guid" in data && data.target_guid != undefined) {
                this.target_guid = data.target_guid;
            }
        }
    }
    get item_guid() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set item_guid(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get target_guid() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set target_guid(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new ReliquaryPromoteReq({});
        if (data.item_guid != null) {
            message.item_guid = data.item_guid;
        }
        if (data.target_guid != null) {
            message.target_guid = data.target_guid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.item_guid != null) {
            data.item_guid = this.item_guid;
        }
        if (this.target_guid != null) {
            data.target_guid = this.target_guid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_guid != 0)
            writer.writeUint64(10, this.item_guid);
        if (this.target_guid != 0)
            writer.writeUint64(13, this.target_guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReliquaryPromoteReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.item_guid = reader.readUint64();
                    break;
                case 13:
                    message.target_guid = reader.readUint64();
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
        return ReliquaryPromoteReq.deserialize(bytes);
    }
}
exports.ReliquaryPromoteReq = ReliquaryPromoteReq;
_ReliquaryPromoteReq_one_of_decls = new WeakMap();
