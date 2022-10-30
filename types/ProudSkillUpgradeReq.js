"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProudSkillUpgradeReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProudSkillUpgradeReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ProudSkillUpgradeReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ProudSkillUpgradeReq extends pb_1.Message {
    constructor(data) {
        super();
        _ProudSkillUpgradeReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ProudSkillUpgradeReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("old_proud_skill_level" in data && data.old_proud_skill_level != undefined) {
                this.old_proud_skill_level = data.old_proud_skill_level;
            }
            if ("proud_skill_id" in data && data.proud_skill_id != undefined) {
                this.proud_skill_id = data.proud_skill_id;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get old_proud_skill_level() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set old_proud_skill_level(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get proud_skill_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set proud_skill_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new ProudSkillUpgradeReq({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.old_proud_skill_level != null) {
            message.old_proud_skill_level = data.old_proud_skill_level;
        }
        if (data.proud_skill_id != null) {
            message.proud_skill_id = data.proud_skill_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.old_proud_skill_level != null) {
            data.old_proud_skill_level = this.old_proud_skill_level;
        }
        if (this.proud_skill_id != null) {
            data.proud_skill_id = this.proud_skill_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(5, this.avatar_guid);
        if (this.old_proud_skill_level != 0)
            writer.writeUint32(4, this.old_proud_skill_level);
        if (this.proud_skill_id != 0)
            writer.writeUint32(14, this.proud_skill_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProudSkillUpgradeReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 4:
                    message.old_proud_skill_level = reader.readUint32();
                    break;
                case 14:
                    message.proud_skill_id = reader.readUint32();
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
        return ProudSkillUpgradeReq.deserialize(bytes);
    }
}
exports.ProudSkillUpgradeReq = ProudSkillUpgradeReq;
_ProudSkillUpgradeReq_one_of_decls = new WeakMap();
