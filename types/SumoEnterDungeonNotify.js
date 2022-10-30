"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SumoEnterDungeonNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoEnterDungeonNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SumoEnterDungeonNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SumoDungeonTeam");
const pb_1 = require("google-protobuf");
class SumoEnterDungeonNotify extends pb_1.Message {
    constructor(data) {
        super();
        _SumoEnterDungeonNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], __classPrivateFieldGet(this, _SumoEnterDungeonNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("dungeon_team_list" in data && data.dungeon_team_list != undefined) {
                this.dungeon_team_list = data.dungeon_team_list;
            }
            if ("no_switch_punish_time" in data && data.no_switch_punish_time != undefined) {
                this.no_switch_punish_time = data.no_switch_punish_time;
            }
            if ("next_valid_switch_time" in data && data.next_valid_switch_time != undefined) {
                this.next_valid_switch_time = data.next_valid_switch_time;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("cur_team_index" in data && data.cur_team_index != undefined) {
                this.cur_team_index = data.cur_team_index;
            }
        }
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set activity_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get dungeon_team_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.SumoDungeonTeam, 11);
    }
    set dungeon_team_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    get no_switch_punish_time() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set no_switch_punish_time(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get next_valid_switch_time() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set next_valid_switch_time(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get cur_team_index() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set cur_team_index(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new SumoEnterDungeonNotify({});
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.dungeon_team_list != null) {
            message.dungeon_team_list = data.dungeon_team_list.map(item => dependency_1.SumoDungeonTeam.fromObject(item));
        }
        if (data.no_switch_punish_time != null) {
            message.no_switch_punish_time = data.no_switch_punish_time;
        }
        if (data.next_valid_switch_time != null) {
            message.next_valid_switch_time = data.next_valid_switch_time;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.cur_team_index != null) {
            message.cur_team_index = data.cur_team_index;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.dungeon_team_list != null) {
            data.dungeon_team_list = this.dungeon_team_list.map((item) => item.toObject());
        }
        if (this.no_switch_punish_time != null) {
            data.no_switch_punish_time = this.no_switch_punish_time;
        }
        if (this.next_valid_switch_time != null) {
            data.next_valid_switch_time = this.next_valid_switch_time;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.cur_team_index != null) {
            data.cur_team_index = this.cur_team_index;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.activity_id != 0)
            writer.writeUint32(15, this.activity_id);
        if (this.dungeon_team_list.length)
            writer.writeRepeatedMessage(11, this.dungeon_team_list, (item) => item.serialize(writer));
        if (this.no_switch_punish_time != 0)
            writer.writeUint32(10, this.no_switch_punish_time);
        if (this.next_valid_switch_time != 0)
            writer.writeUint32(13, this.next_valid_switch_time);
        if (this.stage_id != 0)
            writer.writeUint32(7, this.stage_id);
        if (this.cur_team_index != 0)
            writer.writeUint32(5, this.cur_team_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SumoEnterDungeonNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.activity_id = reader.readUint32();
                    break;
                case 11:
                    reader.readMessage(message.dungeon_team_list, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_1.SumoDungeonTeam.deserialize(reader), dependency_1.SumoDungeonTeam));
                    break;
                case 10:
                    message.no_switch_punish_time = reader.readUint32();
                    break;
                case 13:
                    message.next_valid_switch_time = reader.readUint32();
                    break;
                case 7:
                    message.stage_id = reader.readUint32();
                    break;
                case 5:
                    message.cur_team_index = reader.readUint32();
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
        return SumoEnterDungeonNotify.deserialize(bytes);
    }
}
exports.SumoEnterDungeonNotify = SumoEnterDungeonNotify;
_SumoEnterDungeonNotify_one_of_decls = new WeakMap();