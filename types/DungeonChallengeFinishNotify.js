"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonChallengeFinishNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonChallengeFinishNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonChallengeFinishNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ChannelerSlabLoopDungeonResultInfo");
const dependency_2 = require("./CustomDungeonResultInfo");
const dependency_3 = require("./EffigyChallengeDungeonResultInfo");
const dependency_4 = require("./PotionDungeonResultInfo");
const dependency_5 = require("./StrengthenPointData");
const dependency_6 = require("./Unk2700_FHOKHHBGPEG");
const pb_1 = require("google-protobuf");
class DungeonChallengeFinishNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonChallengeFinishNotify_one_of_decls.set(this, [[1521, 1627, 1824, 1664]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DungeonChallengeFinishNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("strengthen_point_data_map" in data && data.strengthen_point_data_map != undefined) {
                this.strengthen_point_data_map = data.strengthen_point_data_map;
            }
            if ("Unk2700_ONCDLPDHFAB" in data && data.Unk2700_ONCDLPDHFAB != undefined) {
                this.Unk2700_ONCDLPDHFAB = data.Unk2700_ONCDLPDHFAB;
            }
            if ("is_new_record" in data && data.is_new_record != undefined) {
                this.is_new_record = data.is_new_record;
            }
            if ("challenge_record_type" in data && data.challenge_record_type != undefined) {
                this.challenge_record_type = data.challenge_record_type;
            }
            if ("time_cost" in data && data.time_cost != undefined) {
                this.time_cost = data.time_cost;
            }
            if ("current_value" in data && data.current_value != undefined) {
                this.current_value = data.current_value;
            }
            if ("is_success" in data && data.is_success != undefined) {
                this.is_success = data.is_success;
            }
            if ("challenge_index" in data && data.challenge_index != undefined) {
                this.challenge_index = data.challenge_index;
            }
            if ("channeller_slab_loop_dungeon_result_info" in data && data.channeller_slab_loop_dungeon_result_info != undefined) {
                this.channeller_slab_loop_dungeon_result_info = data.channeller_slab_loop_dungeon_result_info;
            }
            if ("effigy_challenge_dungeon_result_info" in data && data.effigy_challenge_dungeon_result_info != undefined) {
                this.effigy_challenge_dungeon_result_info = data.effigy_challenge_dungeon_result_info;
            }
            if ("potion_dungeon_result_info" in data && data.potion_dungeon_result_info != undefined) {
                this.potion_dungeon_result_info = data.potion_dungeon_result_info;
            }
            if ("custom_dungeon_result_info" in data && data.custom_dungeon_result_info != undefined) {
                this.custom_dungeon_result_info = data.custom_dungeon_result_info;
            }
        }
        if (!this.strengthen_point_data_map)
            this.strengthen_point_data_map = new Map();
    }
    get strengthen_point_data_map() {
        return pb_1.Message.getField(this, 13);
    }
    set strengthen_point_data_map(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get Unk2700_ONCDLPDHFAB() {
        return pb_1.Message.getFieldWithDefault(this, 9, dependency_6.Unk2700_FHOKHHBGPEG.Unk2700_FHOKHHBGPEG_NONE);
    }
    set Unk2700_ONCDLPDHFAB(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get is_new_record() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set is_new_record(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get challenge_record_type() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set challenge_record_type(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get time_cost() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set time_cost(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get current_value() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set current_value(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get is_success() {
        return pb_1.Message.getFieldWithDefault(this, 3, false);
    }
    set is_success(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get challenge_index() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set challenge_index(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get channeller_slab_loop_dungeon_result_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.ChannelerSlabLoopDungeonResultInfo, 1521);
    }
    set channeller_slab_loop_dungeon_result_info(value) {
        pb_1.Message.setOneofWrapperField(this, 1521, __classPrivateFieldGet(this, _DungeonChallengeFinishNotify_one_of_decls, "f")[0], value);
    }
    get has_channeller_slab_loop_dungeon_result_info() {
        return pb_1.Message.getField(this, 1521) != null;
    }
    get effigy_challenge_dungeon_result_info() {
        return pb_1.Message.getWrapperField(this, dependency_3.EffigyChallengeDungeonResultInfo, 1627);
    }
    set effigy_challenge_dungeon_result_info(value) {
        pb_1.Message.setOneofWrapperField(this, 1627, __classPrivateFieldGet(this, _DungeonChallengeFinishNotify_one_of_decls, "f")[0], value);
    }
    get has_effigy_challenge_dungeon_result_info() {
        return pb_1.Message.getField(this, 1627) != null;
    }
    get potion_dungeon_result_info() {
        return pb_1.Message.getWrapperField(this, dependency_4.PotionDungeonResultInfo, 1824);
    }
    set potion_dungeon_result_info(value) {
        pb_1.Message.setOneofWrapperField(this, 1824, __classPrivateFieldGet(this, _DungeonChallengeFinishNotify_one_of_decls, "f")[0], value);
    }
    get has_potion_dungeon_result_info() {
        return pb_1.Message.getField(this, 1824) != null;
    }
    get custom_dungeon_result_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.CustomDungeonResultInfo, 1664);
    }
    set custom_dungeon_result_info(value) {
        pb_1.Message.setOneofWrapperField(this, 1664, __classPrivateFieldGet(this, _DungeonChallengeFinishNotify_one_of_decls, "f")[0], value);
    }
    get has_custom_dungeon_result_info() {
        return pb_1.Message.getField(this, 1664) != null;
    }
    get detail() {
        const cases = {
            0: "none",
            1521: "channeller_slab_loop_dungeon_result_info",
            1627: "effigy_challenge_dungeon_result_info",
            1824: "potion_dungeon_result_info",
            1664: "custom_dungeon_result_info"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1521, 1627, 1824, 1664])];
    }
    static fromObject(data) {
        const message = new DungeonChallengeFinishNotify({});
        if (typeof data.strengthen_point_data_map == "object") {
            message.strengthen_point_data_map = new Map(Object.entries(data.strengthen_point_data_map).map(([key, value]) => [Number(key), dependency_5.StrengthenPointData.fromObject(value)]));
        }
        if (data.Unk2700_ONCDLPDHFAB != null) {
            message.Unk2700_ONCDLPDHFAB = data.Unk2700_ONCDLPDHFAB;
        }
        if (data.is_new_record != null) {
            message.is_new_record = data.is_new_record;
        }
        if (data.challenge_record_type != null) {
            message.challenge_record_type = data.challenge_record_type;
        }
        if (data.time_cost != null) {
            message.time_cost = data.time_cost;
        }
        if (data.current_value != null) {
            message.current_value = data.current_value;
        }
        if (data.is_success != null) {
            message.is_success = data.is_success;
        }
        if (data.challenge_index != null) {
            message.challenge_index = data.challenge_index;
        }
        if (data.channeller_slab_loop_dungeon_result_info != null) {
            message.channeller_slab_loop_dungeon_result_info = dependency_1.ChannelerSlabLoopDungeonResultInfo.fromObject(data.channeller_slab_loop_dungeon_result_info);
        }
        if (data.effigy_challenge_dungeon_result_info != null) {
            message.effigy_challenge_dungeon_result_info = dependency_3.EffigyChallengeDungeonResultInfo.fromObject(data.effigy_challenge_dungeon_result_info);
        }
        if (data.potion_dungeon_result_info != null) {
            message.potion_dungeon_result_info = dependency_4.PotionDungeonResultInfo.fromObject(data.potion_dungeon_result_info);
        }
        if (data.custom_dungeon_result_info != null) {
            message.custom_dungeon_result_info = dependency_2.CustomDungeonResultInfo.fromObject(data.custom_dungeon_result_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.strengthen_point_data_map.size > 0) {
            data.strengthen_point_data_map = (Object.fromEntries)((Array.from)(this.strengthen_point_data_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.Unk2700_ONCDLPDHFAB != null) {
            data.Unk2700_ONCDLPDHFAB = this.Unk2700_ONCDLPDHFAB;
        }
        if (this.is_new_record != null) {
            data.is_new_record = this.is_new_record;
        }
        if (this.challenge_record_type != null) {
            data.challenge_record_type = this.challenge_record_type;
        }
        if (this.time_cost != null) {
            data.time_cost = this.time_cost;
        }
        if (this.current_value != null) {
            data.current_value = this.current_value;
        }
        if (this.is_success != null) {
            data.is_success = this.is_success;
        }
        if (this.challenge_index != null) {
            data.challenge_index = this.challenge_index;
        }
        if (this.channeller_slab_loop_dungeon_result_info != null) {
            data.channeller_slab_loop_dungeon_result_info = this.channeller_slab_loop_dungeon_result_info.toObject();
        }
        if (this.effigy_challenge_dungeon_result_info != null) {
            data.effigy_challenge_dungeon_result_info = this.effigy_challenge_dungeon_result_info.toObject();
        }
        if (this.potion_dungeon_result_info != null) {
            data.potion_dungeon_result_info = this.potion_dungeon_result_info.toObject();
        }
        if (this.custom_dungeon_result_info != null) {
            data.custom_dungeon_result_info = this.custom_dungeon_result_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.strengthen_point_data_map) {
            writer.writeMessage(13, this.strengthen_point_data_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.Unk2700_ONCDLPDHFAB != dependency_6.Unk2700_FHOKHHBGPEG.Unk2700_FHOKHHBGPEG_NONE)
            writer.writeEnum(9, this.Unk2700_ONCDLPDHFAB);
        if (this.is_new_record != false)
            writer.writeBool(10, this.is_new_record);
        if (this.challenge_record_type != 0)
            writer.writeUint32(7, this.challenge_record_type);
        if (this.time_cost != 0)
            writer.writeUint32(4, this.time_cost);
        if (this.current_value != 0)
            writer.writeUint32(15, this.current_value);
        if (this.is_success != false)
            writer.writeBool(3, this.is_success);
        if (this.challenge_index != 0)
            writer.writeUint32(5, this.challenge_index);
        if (this.has_channeller_slab_loop_dungeon_result_info)
            writer.writeMessage(1521, this.channeller_slab_loop_dungeon_result_info, () => this.channeller_slab_loop_dungeon_result_info.serialize(writer));
        if (this.has_effigy_challenge_dungeon_result_info)
            writer.writeMessage(1627, this.effigy_challenge_dungeon_result_info, () => this.effigy_challenge_dungeon_result_info.serialize(writer));
        if (this.has_potion_dungeon_result_info)
            writer.writeMessage(1824, this.potion_dungeon_result_info, () => this.potion_dungeon_result_info.serialize(writer));
        if (this.has_custom_dungeon_result_info)
            writer.writeMessage(1664, this.custom_dungeon_result_info, () => this.custom_dungeon_result_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonChallengeFinishNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.strengthen_point_data_map, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_5.StrengthenPointData.deserialize(reader));
                        return value;
                    }));
                    break;
                case 9:
                    message.Unk2700_ONCDLPDHFAB = reader.readEnum();
                    break;
                case 10:
                    message.is_new_record = reader.readBool();
                    break;
                case 7:
                    message.challenge_record_type = reader.readUint32();
                    break;
                case 4:
                    message.time_cost = reader.readUint32();
                    break;
                case 15:
                    message.current_value = reader.readUint32();
                    break;
                case 3:
                    message.is_success = reader.readBool();
                    break;
                case 5:
                    message.challenge_index = reader.readUint32();
                    break;
                case 1521:
                    reader.readMessage(message.channeller_slab_loop_dungeon_result_info, () => message.channeller_slab_loop_dungeon_result_info = dependency_1.ChannelerSlabLoopDungeonResultInfo.deserialize(reader));
                    break;
                case 1627:
                    reader.readMessage(message.effigy_challenge_dungeon_result_info, () => message.effigy_challenge_dungeon_result_info = dependency_3.EffigyChallengeDungeonResultInfo.deserialize(reader));
                    break;
                case 1824:
                    reader.readMessage(message.potion_dungeon_result_info, () => message.potion_dungeon_result_info = dependency_4.PotionDungeonResultInfo.deserialize(reader));
                    break;
                case 1664:
                    reader.readMessage(message.custom_dungeon_result_info, () => message.custom_dungeon_result_info = dependency_2.CustomDungeonResultInfo.deserialize(reader));
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
        return DungeonChallengeFinishNotify.deserialize(bytes);
    }
}
exports.DungeonChallengeFinishNotify = DungeonChallengeFinishNotify;
_DungeonChallengeFinishNotify_one_of_decls = new WeakMap();