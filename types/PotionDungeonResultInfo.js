"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PotionDungeonResultInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotionDungeonResultInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PotionDungeonResultInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PotionDungeonResultInfo extends pb_1.Message {
    constructor(data) {
        super();
        _PotionDungeonResultInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PotionDungeonResultInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("final_score" in data && data.final_score != undefined) {
                this.final_score = data.final_score;
            }
            if ("left_time" in data && data.left_time != undefined) {
                this.left_time = data.left_time;
            }
            if ("Unk2700_FHEHGDABALE" in data && data.Unk2700_FHEHGDABALE != undefined) {
                this.Unk2700_FHEHGDABALE = data.Unk2700_FHEHGDABALE;
            }
            if ("Unk2700_HKFEBBCMBHL" in data && data.Unk2700_HKFEBBCMBHL != undefined) {
                this.Unk2700_HKFEBBCMBHL = data.Unk2700_HKFEBBCMBHL;
            }
            if ("level_id" in data && data.level_id != undefined) {
                this.level_id = data.level_id;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
        }
    }
    get final_score() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set final_score(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get left_time() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set left_time(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get Unk2700_FHEHGDABALE() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set Unk2700_FHEHGDABALE(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get Unk2700_HKFEBBCMBHL() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set Unk2700_HKFEBBCMBHL(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get level_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set level_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new PotionDungeonResultInfo({});
        if (data.final_score != null) {
            message.final_score = data.final_score;
        }
        if (data.left_time != null) {
            message.left_time = data.left_time;
        }
        if (data.Unk2700_FHEHGDABALE != null) {
            message.Unk2700_FHEHGDABALE = data.Unk2700_FHEHGDABALE;
        }
        if (data.Unk2700_HKFEBBCMBHL != null) {
            message.Unk2700_HKFEBBCMBHL = data.Unk2700_HKFEBBCMBHL;
        }
        if (data.level_id != null) {
            message.level_id = data.level_id;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.final_score != null) {
            data.final_score = this.final_score;
        }
        if (this.left_time != null) {
            data.left_time = this.left_time;
        }
        if (this.Unk2700_FHEHGDABALE != null) {
            data.Unk2700_FHEHGDABALE = this.Unk2700_FHEHGDABALE;
        }
        if (this.Unk2700_HKFEBBCMBHL != null) {
            data.Unk2700_HKFEBBCMBHL = this.Unk2700_HKFEBBCMBHL;
        }
        if (this.level_id != null) {
            data.level_id = this.level_id;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.final_score != 0)
            writer.writeUint32(8, this.final_score);
        if (this.left_time != 0)
            writer.writeUint32(9, this.left_time);
        if (this.Unk2700_FHEHGDABALE != 0)
            writer.writeUint32(14, this.Unk2700_FHEHGDABALE);
        if (this.Unk2700_HKFEBBCMBHL != 0)
            writer.writeUint32(11, this.Unk2700_HKFEBBCMBHL);
        if (this.level_id != 0)
            writer.writeUint32(4, this.level_id);
        if (this.stage_id != 0)
            writer.writeUint32(2, this.stage_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PotionDungeonResultInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.final_score = reader.readUint32();
                    break;
                case 9:
                    message.left_time = reader.readUint32();
                    break;
                case 14:
                    message.Unk2700_FHEHGDABALE = reader.readUint32();
                    break;
                case 11:
                    message.Unk2700_HKFEBBCMBHL = reader.readUint32();
                    break;
                case 4:
                    message.level_id = reader.readUint32();
                    break;
                case 2:
                    message.stage_id = reader.readUint32();
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
        return PotionDungeonResultInfo.deserialize(bytes);
    }
}
exports.PotionDungeonResultInfo = PotionDungeonResultInfo;
_PotionDungeonResultInfo_one_of_decls = new WeakMap();
