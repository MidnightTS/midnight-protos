"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MiracleRingTakeRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiracleRingTakeRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MiracleRingTakeRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MiracleRingTakeRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _MiracleRingTakeRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MiracleRingTakeRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("gadget_id" in data && data.gadget_id != undefined) {
                this.gadget_id = data.gadget_id;
            }
            if ("gadget_entity_id" in data && data.gadget_entity_id != undefined) {
                this.gadget_entity_id = data.gadget_entity_id;
            }
        }
    }
    get gadget_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set gadget_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get gadget_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set gadget_entity_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new MiracleRingTakeRewardReq({});
        if (data.gadget_id != null) {
            message.gadget_id = data.gadget_id;
        }
        if (data.gadget_entity_id != null) {
            message.gadget_entity_id = data.gadget_entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.gadget_id != null) {
            data.gadget_id = this.gadget_id;
        }
        if (this.gadget_entity_id != null) {
            data.gadget_entity_id = this.gadget_entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.gadget_id != 0)
            writer.writeUint32(11, this.gadget_id);
        if (this.gadget_entity_id != 0)
            writer.writeUint32(7, this.gadget_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MiracleRingTakeRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.gadget_id = reader.readUint32();
                    break;
                case 7:
                    message.gadget_entity_id = reader.readUint32();
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
        return MiracleRingTakeRewardReq.deserialize(bytes);
    }
}
exports.MiracleRingTakeRewardReq = MiracleRingTakeRewardReq;
_MiracleRingTakeRewardReq_one_of_decls = new WeakMap();