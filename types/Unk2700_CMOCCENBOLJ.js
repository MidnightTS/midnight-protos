"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_CMOCCENBOLJ_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_CMOCCENBOLJ = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_CMOCCENBOLJ.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Unk2700_CMOCCENBOLJ extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_CMOCCENBOLJ_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk2700_CMOCCENBOLJ_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_MMNILGLDHHD" in data && data.Unk2700_MMNILGLDHHD != undefined) {
                this.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
            }
            if ("Unk2700_OLLKIFMOPAG" in data && data.Unk2700_OLLKIFMOPAG != undefined) {
                this.Unk2700_OLLKIFMOPAG = data.Unk2700_OLLKIFMOPAG;
            }
            if ("finish_time" in data && data.finish_time != undefined) {
                this.finish_time = data.finish_time;
            }
            if ("difficulty" in data && data.difficulty != undefined) {
                this.difficulty = data.difficulty;
            }
        }
    }
    get Unk2700_MMNILGLDHHD() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set Unk2700_MMNILGLDHHD(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get Unk2700_OLLKIFMOPAG() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set Unk2700_OLLKIFMOPAG(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get finish_time() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set finish_time(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get difficulty() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set difficulty(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new Unk2700_CMOCCENBOLJ({});
        if (data.Unk2700_MMNILGLDHHD != null) {
            message.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
        }
        if (data.Unk2700_OLLKIFMOPAG != null) {
            message.Unk2700_OLLKIFMOPAG = data.Unk2700_OLLKIFMOPAG;
        }
        if (data.finish_time != null) {
            message.finish_time = data.finish_time;
        }
        if (data.difficulty != null) {
            message.difficulty = data.difficulty;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_MMNILGLDHHD != null) {
            data.Unk2700_MMNILGLDHHD = this.Unk2700_MMNILGLDHHD;
        }
        if (this.Unk2700_OLLKIFMOPAG != null) {
            data.Unk2700_OLLKIFMOPAG = this.Unk2700_OLLKIFMOPAG;
        }
        if (this.finish_time != null) {
            data.finish_time = this.finish_time;
        }
        if (this.difficulty != null) {
            data.difficulty = this.difficulty;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_MMNILGLDHHD != false)
            writer.writeBool(10, this.Unk2700_MMNILGLDHHD);
        if (this.Unk2700_OLLKIFMOPAG != 0)
            writer.writeUint32(5, this.Unk2700_OLLKIFMOPAG);
        if (this.finish_time != 0)
            writer.writeUint32(15, this.finish_time);
        if (this.difficulty != 0)
            writer.writeUint32(13, this.difficulty);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_CMOCCENBOLJ();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.Unk2700_MMNILGLDHHD = reader.readBool();
                    break;
                case 5:
                    message.Unk2700_OLLKIFMOPAG = reader.readUint32();
                    break;
                case 15:
                    message.finish_time = reader.readUint32();
                    break;
                case 13:
                    message.difficulty = reader.readUint32();
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
        return Unk2700_CMOCCENBOLJ.deserialize(bytes);
    }
}
exports.Unk2700_CMOCCENBOLJ = Unk2700_CMOCCENBOLJ;
_Unk2700_CMOCCENBOLJ_one_of_decls = new WeakMap();