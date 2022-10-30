"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProudSkillChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProudSkillChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ProudSkillChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ProudSkillChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ProudSkillChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12], __classPrivateFieldGet(this, _ProudSkillChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("skill_depot_id" in data && data.skill_depot_id != undefined) {
                this.skill_depot_id = data.skill_depot_id;
            }
            if ("proud_skill_list" in data && data.proud_skill_list != undefined) {
                this.proud_skill_list = data.proud_skill_list;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get skill_depot_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set skill_depot_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get proud_skill_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []);
    }
    set proud_skill_list(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new ProudSkillChangeNotify({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.skill_depot_id != null) {
            message.skill_depot_id = data.skill_depot_id;
        }
        if (data.proud_skill_list != null) {
            message.proud_skill_list = data.proud_skill_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.skill_depot_id != null) {
            data.skill_depot_id = this.skill_depot_id;
        }
        if (this.proud_skill_list != null) {
            data.proud_skill_list = this.proud_skill_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(11, this.avatar_guid);
        if (this.entity_id != 0)
            writer.writeUint32(4, this.entity_id);
        if (this.skill_depot_id != 0)
            writer.writeUint32(8, this.skill_depot_id);
        if (this.proud_skill_list.length)
            writer.writePackedUint32(12, this.proud_skill_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProudSkillChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 4:
                    message.entity_id = reader.readUint32();
                    break;
                case 8:
                    message.skill_depot_id = reader.readUint32();
                    break;
                case 12:
                    message.proud_skill_list = reader.readPackedUint32();
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
        return ProudSkillChangeNotify.deserialize(bytes);
    }
}
exports.ProudSkillChangeNotify = ProudSkillChangeNotify;
_ProudSkillChangeNotify_one_of_decls = new WeakMap();
