"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TreasureMapActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureMapActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TreasureMapActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./TreasureMapBonusChallengeInfo");
const dependency_2 = require("./TreasureMapRegionInfo");
const pb_1 = require("google-protobuf");
class TreasureMapActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _TreasureMapActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6, 5], __classPrivateFieldGet(this, _TreasureMapActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("active_region_index" in data && data.active_region_index != undefined) {
                this.active_region_index = data.active_region_index;
            }
            if ("region_info_list" in data && data.region_info_list != undefined) {
                this.region_info_list = data.region_info_list;
            }
            if ("is_mp_challenge_touched" in data && data.is_mp_challenge_touched != undefined) {
                this.is_mp_challenge_touched = data.is_mp_challenge_touched;
            }
            if ("treasure_close_time" in data && data.treasure_close_time != undefined) {
                this.treasure_close_time = data.treasure_close_time;
            }
            if ("bonus_challenge_list" in data && data.bonus_challenge_list != undefined) {
                this.bonus_challenge_list = data.bonus_challenge_list;
            }
            if ("currency_num" in data && data.currency_num != undefined) {
                this.currency_num = data.currency_num;
            }
            if ("preview_reward_id" in data && data.preview_reward_id != undefined) {
                this.preview_reward_id = data.preview_reward_id;
            }
            if ("min_open_player_level" in data && data.min_open_player_level != undefined) {
                this.min_open_player_level = data.min_open_player_level;
            }
            if ("total_mp_spot_num" in data && data.total_mp_spot_num != undefined) {
                this.total_mp_spot_num = data.total_mp_spot_num;
            }
        }
    }
    get active_region_index() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set active_region_index(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get region_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.TreasureMapRegionInfo, 6);
    }
    set region_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get is_mp_challenge_touched() {
        return pb_1.Message.getFieldWithDefault(this, 7, false);
    }
    set is_mp_challenge_touched(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get treasure_close_time() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set treasure_close_time(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get bonus_challenge_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.TreasureMapBonusChallengeInfo, 5);
    }
    set bonus_challenge_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    get currency_num() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set currency_num(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get preview_reward_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set preview_reward_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get min_open_player_level() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set min_open_player_level(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get total_mp_spot_num() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set total_mp_spot_num(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new TreasureMapActivityDetailInfo({});
        if (data.active_region_index != null) {
            message.active_region_index = data.active_region_index;
        }
        if (data.region_info_list != null) {
            message.region_info_list = data.region_info_list.map(item => dependency_2.TreasureMapRegionInfo.fromObject(item));
        }
        if (data.is_mp_challenge_touched != null) {
            message.is_mp_challenge_touched = data.is_mp_challenge_touched;
        }
        if (data.treasure_close_time != null) {
            message.treasure_close_time = data.treasure_close_time;
        }
        if (data.bonus_challenge_list != null) {
            message.bonus_challenge_list = data.bonus_challenge_list.map(item => dependency_1.TreasureMapBonusChallengeInfo.fromObject(item));
        }
        if (data.currency_num != null) {
            message.currency_num = data.currency_num;
        }
        if (data.preview_reward_id != null) {
            message.preview_reward_id = data.preview_reward_id;
        }
        if (data.min_open_player_level != null) {
            message.min_open_player_level = data.min_open_player_level;
        }
        if (data.total_mp_spot_num != null) {
            message.total_mp_spot_num = data.total_mp_spot_num;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.active_region_index != null) {
            data.active_region_index = this.active_region_index;
        }
        if (this.region_info_list != null) {
            data.region_info_list = this.region_info_list.map((item) => item.toObject());
        }
        if (this.is_mp_challenge_touched != null) {
            data.is_mp_challenge_touched = this.is_mp_challenge_touched;
        }
        if (this.treasure_close_time != null) {
            data.treasure_close_time = this.treasure_close_time;
        }
        if (this.bonus_challenge_list != null) {
            data.bonus_challenge_list = this.bonus_challenge_list.map((item) => item.toObject());
        }
        if (this.currency_num != null) {
            data.currency_num = this.currency_num;
        }
        if (this.preview_reward_id != null) {
            data.preview_reward_id = this.preview_reward_id;
        }
        if (this.min_open_player_level != null) {
            data.min_open_player_level = this.min_open_player_level;
        }
        if (this.total_mp_spot_num != null) {
            data.total_mp_spot_num = this.total_mp_spot_num;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.active_region_index != 0)
            writer.writeUint32(1, this.active_region_index);
        if (this.region_info_list.length)
            writer.writeRepeatedMessage(6, this.region_info_list, (item) => item.serialize(writer));
        if (this.is_mp_challenge_touched != false)
            writer.writeBool(7, this.is_mp_challenge_touched);
        if (this.treasure_close_time != 0)
            writer.writeUint32(10, this.treasure_close_time);
        if (this.bonus_challenge_list.length)
            writer.writeRepeatedMessage(5, this.bonus_challenge_list, (item) => item.serialize(writer));
        if (this.currency_num != 0)
            writer.writeUint32(2, this.currency_num);
        if (this.preview_reward_id != 0)
            writer.writeUint32(14, this.preview_reward_id);
        if (this.min_open_player_level != 0)
            writer.writeUint32(8, this.min_open_player_level);
        if (this.total_mp_spot_num != 0)
            writer.writeUint32(13, this.total_mp_spot_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TreasureMapActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.active_region_index = reader.readUint32();
                    break;
                case 6:
                    reader.readMessage(message.region_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.TreasureMapRegionInfo.deserialize(reader), dependency_2.TreasureMapRegionInfo));
                    break;
                case 7:
                    message.is_mp_challenge_touched = reader.readBool();
                    break;
                case 10:
                    message.treasure_close_time = reader.readUint32();
                    break;
                case 5:
                    reader.readMessage(message.bonus_challenge_list, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_1.TreasureMapBonusChallengeInfo.deserialize(reader), dependency_1.TreasureMapBonusChallengeInfo));
                    break;
                case 2:
                    message.currency_num = reader.readUint32();
                    break;
                case 14:
                    message.preview_reward_id = reader.readUint32();
                    break;
                case 8:
                    message.min_open_player_level = reader.readUint32();
                    break;
                case 13:
                    message.total_mp_spot_num = reader.readUint32();
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
        return TreasureMapActivityDetailInfo.deserialize(bytes);
    }
}
exports.TreasureMapActivityDetailInfo = TreasureMapActivityDetailInfo;
_TreasureMapActivityDetailInfo_one_of_decls = new WeakMap();
