"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActivityTakeScoreRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityTakeScoreRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ActivityTakeScoreRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ActivityTakeScoreRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _ActivityTakeScoreRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ActivityTakeScoreRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reward_config_id" in data && data.reward_config_id != undefined) {
                this.reward_config_id = data.reward_config_id;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
        }
    }
    get reward_config_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set reward_config_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set activity_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new ActivityTakeScoreRewardReq({});
        if (data.reward_config_id != null) {
            message.reward_config_id = data.reward_config_id;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.reward_config_id != null) {
            data.reward_config_id = this.reward_config_id;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.reward_config_id != 0)
            writer.writeUint32(12, this.reward_config_id);
        if (this.activity_id != 0)
            writer.writeUint32(9, this.activity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActivityTakeScoreRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.reward_config_id = reader.readUint32();
                    break;
                case 9:
                    message.activity_id = reader.readUint32();
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
        return ActivityTakeScoreRewardReq.deserialize(bytes);
    }
}
exports.ActivityTakeScoreRewardReq = ActivityTakeScoreRewardReq;
_ActivityTakeScoreRewardReq_one_of_decls = new WeakMap();