"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AdjustWorldLevelReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustWorldLevelReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AdjustWorldLevelReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AdjustWorldLevelReq extends pb_1.Message {
    constructor(data) {
        super();
        _AdjustWorldLevelReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AdjustWorldLevelReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("expect_world_level" in data && data.expect_world_level != undefined) {
                this.expect_world_level = data.expect_world_level;
            }
            if ("cur_world_level" in data && data.cur_world_level != undefined) {
                this.cur_world_level = data.cur_world_level;
            }
        }
    }
    get expect_world_level() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set expect_world_level(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get cur_world_level() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set cur_world_level(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new AdjustWorldLevelReq({});
        if (data.expect_world_level != null) {
            message.expect_world_level = data.expect_world_level;
        }
        if (data.cur_world_level != null) {
            message.cur_world_level = data.cur_world_level;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.expect_world_level != null) {
            data.expect_world_level = this.expect_world_level;
        }
        if (this.cur_world_level != null) {
            data.cur_world_level = this.cur_world_level;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.expect_world_level != 0)
            writer.writeUint32(8, this.expect_world_level);
        if (this.cur_world_level != 0)
            writer.writeUint32(9, this.cur_world_level);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AdjustWorldLevelReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.expect_world_level = reader.readUint32();
                    break;
                case 9:
                    message.cur_world_level = reader.readUint32();
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
        return AdjustWorldLevelReq.deserialize(bytes);
    }
}
exports.AdjustWorldLevelReq = AdjustWorldLevelReq;
_AdjustWorldLevelReq_one_of_decls = new WeakMap();
