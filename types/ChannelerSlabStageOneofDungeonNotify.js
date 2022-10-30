"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChannelerSlabStageOneofDungeonNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabStageOneofDungeonNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChannelerSlabStageOneofDungeonNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ChannelerSlabStageOneofDungeonNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ChannelerSlabStageOneofDungeonNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ChannelerSlabStageOneofDungeonNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("is_done" in data && data.is_done != undefined) {
                this.is_done = data.is_done;
            }
        }
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get is_done() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_done(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new ChannelerSlabStageOneofDungeonNotify({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.is_done != null) {
            message.is_done = data.is_done;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.is_done != null) {
            data.is_done = this.is_done;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(2, this.stage_id);
        if (this.is_done != false)
            writer.writeBool(8, this.is_done);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChannelerSlabStageOneofDungeonNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.stage_id = reader.readUint32();
                    break;
                case 8:
                    message.is_done = reader.readBool();
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
        return ChannelerSlabStageOneofDungeonNotify.deserialize(bytes);
    }
}
exports.ChannelerSlabStageOneofDungeonNotify = ChannelerSlabStageOneofDungeonNotify;
_ChannelerSlabStageOneofDungeonNotify_one_of_decls = new WeakMap();
