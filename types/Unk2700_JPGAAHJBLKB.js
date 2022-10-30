"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_JPGAAHJBLKB_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_JPGAAHJBLKB = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_JPGAAHJBLKB.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Unk2700_JPGAAHJBLKB extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_JPGAAHJBLKB_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk2700_JPGAAHJBLKB_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_id" in data && data.avatar_id != undefined) {
                this.avatar_id = data.avatar_id;
            }
            if ("is_trial" in data && data.is_trial != undefined) {
                this.is_trial = data.is_trial;
            }
        }
    }
    get avatar_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set avatar_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get is_trial() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set is_trial(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new Unk2700_JPGAAHJBLKB({});
        if (data.avatar_id != null) {
            message.avatar_id = data.avatar_id;
        }
        if (data.is_trial != null) {
            message.is_trial = data.is_trial;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_id != null) {
            data.avatar_id = this.avatar_id;
        }
        if (this.is_trial != null) {
            data.is_trial = this.is_trial;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_id != 0)
            writer.writeUint64(3, this.avatar_id);
        if (this.is_trial != false)
            writer.writeBool(13, this.is_trial);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_JPGAAHJBLKB();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.avatar_id = reader.readUint64();
                    break;
                case 13:
                    message.is_trial = reader.readBool();
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
        return Unk2700_JPGAAHJBLKB.deserialize(bytes);
    }
}
exports.Unk2700_JPGAAHJBLKB = Unk2700_JPGAAHJBLKB;
_Unk2700_JPGAAHJBLKB_one_of_decls = new WeakMap();