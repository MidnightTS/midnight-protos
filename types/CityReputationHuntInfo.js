"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CityReputationHuntInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationHuntInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CityReputationHuntInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CityReputationHuntInfo extends pb_1.Message {
    constructor(data) {
        super();
        _CityReputationHuntInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CityReputationHuntInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("cur_week_finish_num" in data && data.cur_week_finish_num != undefined) {
                this.cur_week_finish_num = data.cur_week_finish_num;
            }
            if ("has_reward" in data && data.has_reward != undefined) {
                this.has_reward = data.has_reward;
            }
        }
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get cur_week_finish_num() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set cur_week_finish_num(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get has_reward() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set has_reward(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new CityReputationHuntInfo({});
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.cur_week_finish_num != null) {
            message.cur_week_finish_num = data.cur_week_finish_num;
        }
        if (data.has_reward != null) {
            message.has_reward = data.has_reward;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.cur_week_finish_num != null) {
            data.cur_week_finish_num = this.cur_week_finish_num;
        }
        if (this.has_reward != null) {
            data.has_reward = this.has_reward;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_open != false)
            writer.writeBool(6, this.is_open);
        if (this.cur_week_finish_num != 0)
            writer.writeUint32(15, this.cur_week_finish_num);
        if (this.has_reward != false)
            writer.writeBool(5, this.has_reward);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CityReputationHuntInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.is_open = reader.readBool();
                    break;
                case 15:
                    message.cur_week_finish_num = reader.readUint32();
                    break;
                case 5:
                    message.has_reward = reader.readBool();
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
        return CityReputationHuntInfo.deserialize(bytes);
    }
}
exports.CityReputationHuntInfo = CityReputationHuntInfo;
_CityReputationHuntInfo_one_of_decls = new WeakMap();