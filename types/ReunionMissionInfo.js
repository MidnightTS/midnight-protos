"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReunionMissionInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionMissionInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ReunionMissionInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ReunionWatcherInfo");
const pb_1 = require("google-protobuf");
class ReunionMissionInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ReunionMissionInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 6, 2], __classPrivateFieldGet(this, _ReunionMissionInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cur_day_watcher_list" in data && data.cur_day_watcher_list != undefined) {
                this.cur_day_watcher_list = data.cur_day_watcher_list;
            }
            if ("cur_score" in data && data.cur_score != undefined) {
                this.cur_score = data.cur_score;
            }
            if ("is_taken_reward" in data && data.is_taken_reward != undefined) {
                this.is_taken_reward = data.is_taken_reward;
            }
            if ("is_taken_reward_list" in data && data.is_taken_reward_list != undefined) {
                this.is_taken_reward_list = data.is_taken_reward_list;
            }
            if ("next_refresh_time" in data && data.next_refresh_time != undefined) {
                this.next_refresh_time = data.next_refresh_time;
            }
            if ("is_finished" in data && data.is_finished != undefined) {
                this.is_finished = data.is_finished;
            }
            if ("mission_id" in data && data.mission_id != undefined) {
                this.mission_id = data.mission_id;
            }
            if ("watcher_list" in data && data.watcher_list != undefined) {
                this.watcher_list = data.watcher_list;
            }
        }
    }
    get cur_day_watcher_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ReunionWatcherInfo, 3);
    }
    set cur_day_watcher_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    get cur_score() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set cur_score(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get is_taken_reward() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_taken_reward(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get is_taken_reward_list() {
        return pb_1.Message.getFieldWithDefault(this, 6, []);
    }
    set is_taken_reward_list(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get next_refresh_time() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set next_refresh_time(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get is_finished() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set is_finished(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get mission_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set mission_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get watcher_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ReunionWatcherInfo, 2);
    }
    set watcher_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new ReunionMissionInfo({});
        if (data.cur_day_watcher_list != null) {
            message.cur_day_watcher_list = data.cur_day_watcher_list.map(item => dependency_1.ReunionWatcherInfo.fromObject(item));
        }
        if (data.cur_score != null) {
            message.cur_score = data.cur_score;
        }
        if (data.is_taken_reward != null) {
            message.is_taken_reward = data.is_taken_reward;
        }
        if (data.is_taken_reward_list != null) {
            message.is_taken_reward_list = data.is_taken_reward_list;
        }
        if (data.next_refresh_time != null) {
            message.next_refresh_time = data.next_refresh_time;
        }
        if (data.is_finished != null) {
            message.is_finished = data.is_finished;
        }
        if (data.mission_id != null) {
            message.mission_id = data.mission_id;
        }
        if (data.watcher_list != null) {
            message.watcher_list = data.watcher_list.map(item => dependency_1.ReunionWatcherInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cur_day_watcher_list != null) {
            data.cur_day_watcher_list = this.cur_day_watcher_list.map((item) => item.toObject());
        }
        if (this.cur_score != null) {
            data.cur_score = this.cur_score;
        }
        if (this.is_taken_reward != null) {
            data.is_taken_reward = this.is_taken_reward;
        }
        if (this.is_taken_reward_list != null) {
            data.is_taken_reward_list = this.is_taken_reward_list;
        }
        if (this.next_refresh_time != null) {
            data.next_refresh_time = this.next_refresh_time;
        }
        if (this.is_finished != null) {
            data.is_finished = this.is_finished;
        }
        if (this.mission_id != null) {
            data.mission_id = this.mission_id;
        }
        if (this.watcher_list != null) {
            data.watcher_list = this.watcher_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cur_day_watcher_list.length)
            writer.writeRepeatedMessage(3, this.cur_day_watcher_list, (item) => item.serialize(writer));
        if (this.cur_score != 0)
            writer.writeUint32(11, this.cur_score);
        if (this.is_taken_reward != false)
            writer.writeBool(8, this.is_taken_reward);
        if (this.is_taken_reward_list.length)
            writer.writePackedBool(6, this.is_taken_reward_list);
        if (this.next_refresh_time != 0)
            writer.writeUint32(5, this.next_refresh_time);
        if (this.is_finished != false)
            writer.writeBool(9, this.is_finished);
        if (this.mission_id != 0)
            writer.writeUint32(12, this.mission_id);
        if (this.watcher_list.length)
            writer.writeRepeatedMessage(2, this.watcher_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReunionMissionInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.cur_day_watcher_list, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.ReunionWatcherInfo.deserialize(reader), dependency_1.ReunionWatcherInfo));
                    break;
                case 11:
                    message.cur_score = reader.readUint32();
                    break;
                case 8:
                    message.is_taken_reward = reader.readBool();
                    break;
                case 6:
                    message.is_taken_reward_list = reader.readPackedBool();
                    break;
                case 5:
                    message.next_refresh_time = reader.readUint32();
                    break;
                case 9:
                    message.is_finished = reader.readBool();
                    break;
                case 12:
                    message.mission_id = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.watcher_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.ReunionWatcherInfo.deserialize(reader), dependency_1.ReunionWatcherInfo));
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
        return ReunionMissionInfo.deserialize(bytes);
    }
}
exports.ReunionMissionInfo = ReunionMissionInfo;
_ReunionMissionInfo_one_of_decls = new WeakMap();