"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TrialAvatarActivityRewardDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialAvatarActivityRewardDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TrialAvatarActivityRewardDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TrialAvatarActivityRewardDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _TrialAvatarActivityRewardDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TrialAvatarActivityRewardDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("passed_dungeon" in data && data.passed_dungeon != undefined) {
                this.passed_dungeon = data.passed_dungeon;
            }
            if ("trial_avatar_index_id" in data && data.trial_avatar_index_id != undefined) {
                this.trial_avatar_index_id = data.trial_avatar_index_id;
            }
            if ("received_reward" in data && data.received_reward != undefined) {
                this.received_reward = data.received_reward;
            }
            if ("reward_id" in data && data.reward_id != undefined) {
                this.reward_id = data.reward_id;
            }
        }
    }
    get passed_dungeon() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set passed_dungeon(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get trial_avatar_index_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set trial_avatar_index_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get received_reward() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set received_reward(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get reward_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set reward_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new TrialAvatarActivityRewardDetailInfo({});
        if (data.passed_dungeon != null) {
            message.passed_dungeon = data.passed_dungeon;
        }
        if (data.trial_avatar_index_id != null) {
            message.trial_avatar_index_id = data.trial_avatar_index_id;
        }
        if (data.received_reward != null) {
            message.received_reward = data.received_reward;
        }
        if (data.reward_id != null) {
            message.reward_id = data.reward_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.passed_dungeon != null) {
            data.passed_dungeon = this.passed_dungeon;
        }
        if (this.trial_avatar_index_id != null) {
            data.trial_avatar_index_id = this.trial_avatar_index_id;
        }
        if (this.received_reward != null) {
            data.received_reward = this.received_reward;
        }
        if (this.reward_id != null) {
            data.reward_id = this.reward_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.passed_dungeon != false)
            writer.writeBool(2, this.passed_dungeon);
        if (this.trial_avatar_index_id != 0)
            writer.writeUint32(4, this.trial_avatar_index_id);
        if (this.received_reward != false)
            writer.writeBool(5, this.received_reward);
        if (this.reward_id != 0)
            writer.writeUint32(7, this.reward_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TrialAvatarActivityRewardDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.passed_dungeon = reader.readBool();
                    break;
                case 4:
                    message.trial_avatar_index_id = reader.readUint32();
                    break;
                case 5:
                    message.received_reward = reader.readBool();
                    break;
                case 7:
                    message.reward_id = reader.readUint32();
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
        return TrialAvatarActivityRewardDetailInfo.deserialize(bytes);
    }
}
exports.TrialAvatarActivityRewardDetailInfo = TrialAvatarActivityRewardDetailInfo;
_TrialAvatarActivityRewardDetailInfo_one_of_decls = new WeakMap();
