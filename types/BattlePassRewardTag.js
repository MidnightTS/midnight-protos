"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BattlePassRewardTag_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassRewardTag = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BattlePassRewardTag.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./BattlePassUnlockStatus");
const pb_1 = require("google-protobuf");
class BattlePassRewardTag extends pb_1.Message {
    constructor(data) {
        super();
        _BattlePassRewardTag_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BattlePassRewardTag_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("level" in data && data.level != undefined) {
                this.level = data.level;
            }
            if ("unlock_status" in data && data.unlock_status != undefined) {
                this.unlock_status = data.unlock_status;
            }
            if ("reward_id" in data && data.reward_id != undefined) {
                this.reward_id = data.reward_id;
            }
        }
    }
    get level() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set level(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get unlock_status() {
        return pb_1.Message.getFieldWithDefault(this, 2, dependency_1.BattlePassUnlockStatus.BATTLE_PASS_UNLOCK_STATUS_INVALID);
    }
    set unlock_status(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get reward_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set reward_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new BattlePassRewardTag({});
        if (data.level != null) {
            message.level = data.level;
        }
        if (data.unlock_status != null) {
            message.unlock_status = data.unlock_status;
        }
        if (data.reward_id != null) {
            message.reward_id = data.reward_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.level != null) {
            data.level = this.level;
        }
        if (this.unlock_status != null) {
            data.unlock_status = this.unlock_status;
        }
        if (this.reward_id != null) {
            data.reward_id = this.reward_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.level != 0)
            writer.writeUint32(4, this.level);
        if (this.unlock_status != dependency_1.BattlePassUnlockStatus.BATTLE_PASS_UNLOCK_STATUS_INVALID)
            writer.writeEnum(2, this.unlock_status);
        if (this.reward_id != 0)
            writer.writeUint32(7, this.reward_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BattlePassRewardTag();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.level = reader.readUint32();
                    break;
                case 2:
                    message.unlock_status = reader.readEnum();
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
        return BattlePassRewardTag.deserialize(bytes);
    }
}
exports.BattlePassRewardTag = BattlePassRewardTag;
_BattlePassRewardTag_one_of_decls = new WeakMap();