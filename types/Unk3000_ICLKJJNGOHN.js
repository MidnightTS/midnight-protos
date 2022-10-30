"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk3000_ICLKJJNGOHN_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3000_ICLKJJNGOHN = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk3000_ICLKJJNGOHN.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk3000_KEJLPBEOHNH");
const pb_1 = require("google-protobuf");
class Unk3000_ICLKJJNGOHN extends pb_1.Message {
    constructor(data) {
        super();
        _Unk3000_ICLKJJNGOHN_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _Unk3000_ICLKJJNGOHN_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_finished" in data && data.is_finished != undefined) {
                this.is_finished = data.is_finished;
            }
            if ("max_score" in data && data.max_score != undefined) {
                this.max_score = data.max_score;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("Unk2700_GMAEHKMDIGG" in data && data.Unk2700_GMAEHKMDIGG != undefined) {
                this.Unk2700_GMAEHKMDIGG = data.Unk2700_GMAEHKMDIGG;
            }
        }
    }
    get is_finished() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set is_finished(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get max_score() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set max_score(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get Unk2700_GMAEHKMDIGG() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk3000_KEJLPBEOHNH, 6);
    }
    set Unk2700_GMAEHKMDIGG(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    static fromObject(data) {
        const message = new Unk3000_ICLKJJNGOHN({});
        if (data.is_finished != null) {
            message.is_finished = data.is_finished;
        }
        if (data.max_score != null) {
            message.max_score = data.max_score;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.Unk2700_GMAEHKMDIGG != null) {
            message.Unk2700_GMAEHKMDIGG = data.Unk2700_GMAEHKMDIGG.map(item => dependency_1.Unk3000_KEJLPBEOHNH.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_finished != null) {
            data.is_finished = this.is_finished;
        }
        if (this.max_score != null) {
            data.max_score = this.max_score;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.Unk2700_GMAEHKMDIGG != null) {
            data.Unk2700_GMAEHKMDIGG = this.Unk2700_GMAEHKMDIGG.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_finished != false)
            writer.writeBool(10, this.is_finished);
        if (this.max_score != 0)
            writer.writeUint32(3, this.max_score);
        if (this.stage_id != 0)
            writer.writeUint32(4, this.stage_id);
        if (this.Unk2700_GMAEHKMDIGG.length)
            writer.writeRepeatedMessage(6, this.Unk2700_GMAEHKMDIGG, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk3000_ICLKJJNGOHN();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.is_finished = reader.readBool();
                    break;
                case 3:
                    message.max_score = reader.readUint32();
                    break;
                case 4:
                    message.stage_id = reader.readUint32();
                    break;
                case 6:
                    reader.readMessage(message.Unk2700_GMAEHKMDIGG, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_1.Unk3000_KEJLPBEOHNH.deserialize(reader), dependency_1.Unk3000_KEJLPBEOHNH));
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
        return Unk3000_ICLKJJNGOHN.deserialize(bytes);
    }
}
exports.Unk3000_ICLKJJNGOHN = Unk3000_ICLKJJNGOHN;
_Unk3000_ICLKJJNGOHN_one_of_decls = new WeakMap();