"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FlightActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FlightActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FlightDailyRecord");
const pb_1 = require("google-protobuf");
class FlightActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _FlightActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _FlightActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("preview_reward_id" in data && data.preview_reward_id != undefined) {
                this.preview_reward_id = data.preview_reward_id;
            }
            if ("min_open_player_level" in data && data.min_open_player_level != undefined) {
                this.min_open_player_level = data.min_open_player_level;
            }
            if ("daily_record_list" in data && data.daily_record_list != undefined) {
                this.daily_record_list = data.daily_record_list;
            }
        }
    }
    get preview_reward_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set preview_reward_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get min_open_player_level() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set min_open_player_level(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get daily_record_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FlightDailyRecord, 1);
    }
    set daily_record_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data) {
        const message = new FlightActivityDetailInfo({});
        if (data.preview_reward_id != null) {
            message.preview_reward_id = data.preview_reward_id;
        }
        if (data.min_open_player_level != null) {
            message.min_open_player_level = data.min_open_player_level;
        }
        if (data.daily_record_list != null) {
            message.daily_record_list = data.daily_record_list.map(item => dependency_1.FlightDailyRecord.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.preview_reward_id != null) {
            data.preview_reward_id = this.preview_reward_id;
        }
        if (this.min_open_player_level != null) {
            data.min_open_player_level = this.min_open_player_level;
        }
        if (this.daily_record_list != null) {
            data.daily_record_list = this.daily_record_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.preview_reward_id != 0)
            writer.writeUint32(15, this.preview_reward_id);
        if (this.min_open_player_level != 0)
            writer.writeUint32(11, this.min_open_player_level);
        if (this.daily_record_list.length)
            writer.writeRepeatedMessage(1, this.daily_record_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FlightActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.preview_reward_id = reader.readUint32();
                    break;
                case 11:
                    message.min_open_player_level = reader.readUint32();
                    break;
                case 1:
                    reader.readMessage(message.daily_record_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.FlightDailyRecord.deserialize(reader), dependency_1.FlightDailyRecord));
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
        return FlightActivityDetailInfo.deserialize(bytes);
    }
}
exports.FlightActivityDetailInfo = FlightActivityDetailInfo;
_FlightActivityDetailInfo_one_of_decls = new WeakMap();
