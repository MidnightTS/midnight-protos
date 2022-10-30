"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_PILILDPMNNA_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_PILILDPMNNA = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_PILILDPMNNA.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Unk2700_PILILDPMNNA extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_PILILDPMNNA_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _Unk2700_PILILDPMNNA_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("difficulty" in data && data.difficulty != undefined) {
                this.difficulty = data.difficulty;
            }
            if ("Unk2700_EGBDDLOBCDL" in data && data.Unk2700_EGBDDLOBCDL != undefined) {
                this.Unk2700_EGBDDLOBCDL = data.Unk2700_EGBDDLOBCDL;
            }
            if ("Unk2700_MMFHBHNKLDG" in data && data.Unk2700_MMFHBHNKLDG != undefined) {
                this.Unk2700_MMFHBHNKLDG = data.Unk2700_MMFHBHNKLDG;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("Unk2700_PPEBOKBCPLE" in data && data.Unk2700_PPEBOKBCPLE != undefined) {
                this.Unk2700_PPEBOKBCPLE = data.Unk2700_PPEBOKBCPLE;
            }
        }
    }
    get difficulty() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set difficulty(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get Unk2700_EGBDDLOBCDL() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set Unk2700_EGBDDLOBCDL(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get Unk2700_MMFHBHNKLDG() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set Unk2700_MMFHBHNKLDG(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk2700_PPEBOKBCPLE() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set Unk2700_PPEBOKBCPLE(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new Unk2700_PILILDPMNNA({});
        if (data.difficulty != null) {
            message.difficulty = data.difficulty;
        }
        if (data.Unk2700_EGBDDLOBCDL != null) {
            message.Unk2700_EGBDDLOBCDL = data.Unk2700_EGBDDLOBCDL;
        }
        if (data.Unk2700_MMFHBHNKLDG != null) {
            message.Unk2700_MMFHBHNKLDG = data.Unk2700_MMFHBHNKLDG;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.Unk2700_PPEBOKBCPLE != null) {
            message.Unk2700_PPEBOKBCPLE = data.Unk2700_PPEBOKBCPLE;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.difficulty != null) {
            data.difficulty = this.difficulty;
        }
        if (this.Unk2700_EGBDDLOBCDL != null) {
            data.Unk2700_EGBDDLOBCDL = this.Unk2700_EGBDDLOBCDL;
        }
        if (this.Unk2700_MMFHBHNKLDG != null) {
            data.Unk2700_MMFHBHNKLDG = this.Unk2700_MMFHBHNKLDG;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.Unk2700_PPEBOKBCPLE != null) {
            data.Unk2700_PPEBOKBCPLE = this.Unk2700_PPEBOKBCPLE;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.difficulty != 0)
            writer.writeUint32(7, this.difficulty);
        if (this.Unk2700_EGBDDLOBCDL.length)
            writer.writePackedUint32(4, this.Unk2700_EGBDDLOBCDL);
        if (this.Unk2700_MMFHBHNKLDG != false)
            writer.writeBool(9, this.Unk2700_MMFHBHNKLDG);
        if (this.stage_id != 0)
            writer.writeUint32(12, this.stage_id);
        if (this.Unk2700_PPEBOKBCPLE != 0)
            writer.writeUint32(3, this.Unk2700_PPEBOKBCPLE);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_PILILDPMNNA();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.difficulty = reader.readUint32();
                    break;
                case 4:
                    message.Unk2700_EGBDDLOBCDL = reader.readPackedUint32();
                    break;
                case 9:
                    message.Unk2700_MMFHBHNKLDG = reader.readBool();
                    break;
                case 12:
                    message.stage_id = reader.readUint32();
                    break;
                case 3:
                    message.Unk2700_PPEBOKBCPLE = reader.readUint32();
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
        return Unk2700_PILILDPMNNA.deserialize(bytes);
    }
}
exports.Unk2700_PILILDPMNNA = Unk2700_PILILDPMNNA;
_Unk2700_PILILDPMNNA_one_of_decls = new WeakMap();