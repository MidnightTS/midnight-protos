"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DeliveryActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DeliveryActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DeliveryActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _DeliveryActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _DeliveryActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("day_index" in data && data.day_index != undefined) {
                this.day_index = data.day_index;
            }
            if ("is_taken_reward" in data && data.is_taken_reward != undefined) {
                this.is_taken_reward = data.is_taken_reward;
            }
            if ("finished_delivery_quest_index" in data && data.finished_delivery_quest_index != undefined) {
                this.finished_delivery_quest_index = data.finished_delivery_quest_index;
            }
        }
    }
    get day_index() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set day_index(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get is_taken_reward() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set is_taken_reward(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get finished_delivery_quest_index() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set finished_delivery_quest_index(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new DeliveryActivityDetailInfo({});
        if (data.day_index != null) {
            message.day_index = data.day_index;
        }
        if (data.is_taken_reward != null) {
            message.is_taken_reward = data.is_taken_reward;
        }
        if (data.finished_delivery_quest_index != null) {
            message.finished_delivery_quest_index = data.finished_delivery_quest_index;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.day_index != null) {
            data.day_index = this.day_index;
        }
        if (this.is_taken_reward != null) {
            data.is_taken_reward = this.is_taken_reward;
        }
        if (this.finished_delivery_quest_index != null) {
            data.finished_delivery_quest_index = this.finished_delivery_quest_index;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.day_index != 0)
            writer.writeUint32(14, this.day_index);
        if (this.is_taken_reward != false)
            writer.writeBool(13, this.is_taken_reward);
        if (this.finished_delivery_quest_index.length)
            writer.writePackedUint32(4, this.finished_delivery_quest_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeliveryActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.day_index = reader.readUint32();
                    break;
                case 13:
                    message.is_taken_reward = reader.readBool();
                    break;
                case 4:
                    message.finished_delivery_quest_index = reader.readPackedUint32();
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
        return DeliveryActivityDetailInfo.deserialize(bytes);
    }
}
exports.DeliveryActivityDetailInfo = DeliveryActivityDetailInfo;
_DeliveryActivityDetailInfo_one_of_decls = new WeakMap();