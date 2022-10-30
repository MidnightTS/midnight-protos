"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FinishMainCoopReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishMainCoopReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FinishMainCoopReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class FinishMainCoopReq extends pb_1.Message {
    constructor(data) {
        super();
        _FinishMainCoopReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FinishMainCoopReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("ending_save_point_id" in data && data.ending_save_point_id != undefined) {
                this.ending_save_point_id = data.ending_save_point_id;
            }
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get ending_save_point_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ending_save_point_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new FinishMainCoopReq({});
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.ending_save_point_id != null) {
            message.ending_save_point_id = data.ending_save_point_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.ending_save_point_id != null) {
            data.ending_save_point_id = this.ending_save_point_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id != 0)
            writer.writeUint32(10, this.id);
        if (this.ending_save_point_id != 0)
            writer.writeUint32(1, this.ending_save_point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FinishMainCoopReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.id = reader.readUint32();
                    break;
                case 1:
                    message.ending_save_point_id = reader.readUint32();
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
        return FinishMainCoopReq.deserialize(bytes);
    }
}
exports.FinishMainCoopReq = FinishMainCoopReq;
_FinishMainCoopReq_one_of_decls = new WeakMap();