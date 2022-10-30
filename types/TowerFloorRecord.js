"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TowerFloorRecord_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerFloorRecord = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TowerFloorRecord.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./TowerLevelRecord");
const pb_1 = require("google-protobuf");
class TowerFloorRecord extends pb_1.Message {
    constructor(data) {
        super();
        _TowerFloorRecord_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _TowerFloorRecord_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("floor_star_reward_progress" in data && data.floor_star_reward_progress != undefined) {
                this.floor_star_reward_progress = data.floor_star_reward_progress;
            }
            if ("passed_level_map" in data && data.passed_level_map != undefined) {
                this.passed_level_map = data.passed_level_map;
            }
            if ("floor_id" in data && data.floor_id != undefined) {
                this.floor_id = data.floor_id;
            }
            if ("passed_level_record_list" in data && data.passed_level_record_list != undefined) {
                this.passed_level_record_list = data.passed_level_record_list;
            }
        }
        if (!this.passed_level_map)
            this.passed_level_map = new Map();
    }
    get floor_star_reward_progress() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set floor_star_reward_progress(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get passed_level_map() {
        return pb_1.Message.getField(this, 8);
    }
    set passed_level_map(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get floor_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set floor_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get passed_level_record_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.TowerLevelRecord, 2);
    }
    set passed_level_record_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new TowerFloorRecord({});
        if (data.floor_star_reward_progress != null) {
            message.floor_star_reward_progress = data.floor_star_reward_progress;
        }
        if (typeof data.passed_level_map == "object") {
            message.passed_level_map = new Map(Object.entries(data.passed_level_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.floor_id != null) {
            message.floor_id = data.floor_id;
        }
        if (data.passed_level_record_list != null) {
            message.passed_level_record_list = data.passed_level_record_list.map(item => dependency_1.TowerLevelRecord.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.floor_star_reward_progress != null) {
            data.floor_star_reward_progress = this.floor_star_reward_progress;
        }
        if (this.passed_level_map.size > 0) {
            data.passed_level_map = (Object.fromEntries)(this.passed_level_map);
        }
        if (this.floor_id != null) {
            data.floor_id = this.floor_id;
        }
        if (this.passed_level_record_list != null) {
            data.passed_level_record_list = this.passed_level_record_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.floor_star_reward_progress != 0)
            writer.writeUint32(15, this.floor_star_reward_progress);
        for (const [key, value] of this.passed_level_map) {
            writer.writeMessage(8, this.passed_level_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.floor_id != 0)
            writer.writeUint32(12, this.floor_id);
        if (this.passed_level_record_list.length)
            writer.writeRepeatedMessage(2, this.passed_level_record_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TowerFloorRecord();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.floor_star_reward_progress = reader.readUint32();
                    break;
                case 8:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.passed_level_map, reader, reader.readUint32, reader.readUint32));
                    break;
                case 12:
                    message.floor_id = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.passed_level_record_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.TowerLevelRecord.deserialize(reader), dependency_1.TowerLevelRecord));
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
        return TowerFloorRecord.deserialize(bytes);
    }
}
exports.TowerFloorRecord = TowerFloorRecord;
_TowerFloorRecord_one_of_decls = new WeakMap();