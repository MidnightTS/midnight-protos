"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HideAndSeekSelectSkillRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekSelectSkillRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HideAndSeekSelectSkillRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HideAndSeekSelectSkillRsp extends pb_1.Message {
    constructor(data) {
        super();
        _HideAndSeekSelectSkillRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12], __classPrivateFieldGet(this, _HideAndSeekSelectSkillRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("skill_list" in data && data.skill_list != undefined) {
                this.skill_list = data.skill_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get skill_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []);
    }
    set skill_list(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new HideAndSeekSelectSkillRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.skill_list != null) {
            message.skill_list = data.skill_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.skill_list != null) {
            data.skill_list = this.skill_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(4, this.retcode);
        if (this.skill_list.length)
            writer.writePackedUint32(12, this.skill_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HideAndSeekSelectSkillRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.retcode = reader.readInt32();
                    break;
                case 12:
                    message.skill_list = reader.readPackedUint32();
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
        return HideAndSeekSelectSkillRsp.deserialize(bytes);
    }
}
exports.HideAndSeekSelectSkillRsp = HideAndSeekSelectSkillRsp;
_HideAndSeekSelectSkillRsp_one_of_decls = new WeakMap();
