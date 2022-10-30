"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CityReputationQuestInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationQuestInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CityReputationQuestInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CityReputationQuestInfo extends pb_1.Message {
    constructor(data) {
        super();
        _CityReputationQuestInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12, 7], __classPrivateFieldGet(this, _CityReputationQuestInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("taken_parent_quest_reward_list" in data && data.taken_parent_quest_reward_list != undefined) {
                this.taken_parent_quest_reward_list = data.taken_parent_quest_reward_list;
            }
            if ("finished_parent_quest_list" in data && data.finished_parent_quest_list != undefined) {
                this.finished_parent_quest_list = data.finished_parent_quest_list;
            }
        }
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get taken_parent_quest_reward_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []);
    }
    set taken_parent_quest_reward_list(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get finished_parent_quest_list() {
        return pb_1.Message.getFieldWithDefault(this, 7, []);
    }
    set finished_parent_quest_list(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new CityReputationQuestInfo({});
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.taken_parent_quest_reward_list != null) {
            message.taken_parent_quest_reward_list = data.taken_parent_quest_reward_list;
        }
        if (data.finished_parent_quest_list != null) {
            message.finished_parent_quest_list = data.finished_parent_quest_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.taken_parent_quest_reward_list != null) {
            data.taken_parent_quest_reward_list = this.taken_parent_quest_reward_list;
        }
        if (this.finished_parent_quest_list != null) {
            data.finished_parent_quest_list = this.finished_parent_quest_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_open != false)
            writer.writeBool(2, this.is_open);
        if (this.taken_parent_quest_reward_list.length)
            writer.writePackedUint32(12, this.taken_parent_quest_reward_list);
        if (this.finished_parent_quest_list.length)
            writer.writePackedUint32(7, this.finished_parent_quest_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CityReputationQuestInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.is_open = reader.readBool();
                    break;
                case 12:
                    message.taken_parent_quest_reward_list = reader.readPackedUint32();
                    break;
                case 7:
                    message.finished_parent_quest_list = reader.readPackedUint32();
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
        return CityReputationQuestInfo.deserialize(bytes);
    }
}
exports.CityReputationQuestInfo = CityReputationQuestInfo;
_CityReputationQuestInfo_one_of_decls = new WeakMap();