"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EvtSetAttackTargetInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtSetAttackTargetInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtSetAttackTargetInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class EvtSetAttackTargetInfo extends pb_1.Message {
    constructor(data) {
        super();
        _EvtSetAttackTargetInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EvtSetAttackTargetInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("Unk2700_MPONBCMPCIH" in data && data.Unk2700_MPONBCMPCIH != undefined) {
                this.Unk2700_MPONBCMPCIH = data.Unk2700_MPONBCMPCIH;
            }
            if ("attack_target_id" in data && data.attack_target_id != undefined) {
                this.attack_target_id = data.attack_target_id;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get Unk2700_MPONBCMPCIH() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set Unk2700_MPONBCMPCIH(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get attack_target_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set attack_target_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new EvtSetAttackTargetInfo({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.Unk2700_MPONBCMPCIH != null) {
            message.Unk2700_MPONBCMPCIH = data.Unk2700_MPONBCMPCIH;
        }
        if (data.attack_target_id != null) {
            message.attack_target_id = data.attack_target_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.Unk2700_MPONBCMPCIH != null) {
            data.Unk2700_MPONBCMPCIH = this.Unk2700_MPONBCMPCIH;
        }
        if (this.attack_target_id != null) {
            data.attack_target_id = this.attack_target_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(11, this.entity_id);
        if (this.Unk2700_MPONBCMPCIH != 0)
            writer.writeUint32(6, this.Unk2700_MPONBCMPCIH);
        if (this.attack_target_id != 0)
            writer.writeUint32(7, this.attack_target_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtSetAttackTargetInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.entity_id = reader.readUint32();
                    break;
                case 6:
                    message.Unk2700_MPONBCMPCIH = reader.readUint32();
                    break;
                case 7:
                    message.attack_target_id = reader.readUint32();
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
        return EvtSetAttackTargetInfo.deserialize(bytes);
    }
}
exports.EvtSetAttackTargetInfo = EvtSetAttackTargetInfo;
_EvtSetAttackTargetInfo_one_of_decls = new WeakMap();
