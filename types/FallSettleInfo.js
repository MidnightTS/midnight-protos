"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FallSettleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallSettleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FallSettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./OnlinePlayerInfo");
const pb_1 = require("google-protobuf");
class FallSettleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _FallSettleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FallSettleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("catch_count" in data && data.catch_count != undefined) {
                this.catch_count = data.catch_count;
            }
            if ("player_info" in data && data.player_info != undefined) {
                this.player_info = data.player_info;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("flower_ring_catch_count_map" in data && data.flower_ring_catch_count_map != undefined) {
                this.flower_ring_catch_count_map = data.flower_ring_catch_count_map;
            }
            if ("remain_time" in data && data.remain_time != undefined) {
                this.remain_time = data.remain_time;
            }
            if ("final_score" in data && data.final_score != undefined) {
                this.final_score = data.final_score;
            }
        }
        if (!this.flower_ring_catch_count_map)
            this.flower_ring_catch_count_map = new Map();
    }
    get catch_count() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set catch_count(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get player_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.OnlinePlayerInfo, 13);
    }
    set player_info(value) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get has_player_info() {
        return pb_1.Message.getField(this, 13) != null;
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get flower_ring_catch_count_map() {
        return pb_1.Message.getField(this, 3);
    }
    set flower_ring_catch_count_map(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get remain_time() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set remain_time(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get final_score() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set final_score(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new FallSettleInfo({});
        if (data.catch_count != null) {
            message.catch_count = data.catch_count;
        }
        if (data.player_info != null) {
            message.player_info = dependency_1.OnlinePlayerInfo.fromObject(data.player_info);
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (typeof data.flower_ring_catch_count_map == "object") {
            message.flower_ring_catch_count_map = new Map(Object.entries(data.flower_ring_catch_count_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.remain_time != null) {
            message.remain_time = data.remain_time;
        }
        if (data.final_score != null) {
            message.final_score = data.final_score;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.catch_count != null) {
            data.catch_count = this.catch_count;
        }
        if (this.player_info != null) {
            data.player_info = this.player_info.toObject();
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.flower_ring_catch_count_map.size > 0) {
            data.flower_ring_catch_count_map = (Object.fromEntries)(this.flower_ring_catch_count_map);
        }
        if (this.remain_time != null) {
            data.remain_time = this.remain_time;
        }
        if (this.final_score != null) {
            data.final_score = this.final_score;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.catch_count != 0)
            writer.writeUint32(15, this.catch_count);
        if (this.has_player_info)
            writer.writeMessage(13, this.player_info, () => this.player_info.serialize(writer));
        if (this.uid != 0)
            writer.writeUint32(14, this.uid);
        for (const [key, value] of this.flower_ring_catch_count_map) {
            writer.writeMessage(3, this.flower_ring_catch_count_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.remain_time != 0)
            writer.writeUint32(10, this.remain_time);
        if (this.final_score != 0)
            writer.writeUint32(1, this.final_score);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FallSettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.catch_count = reader.readUint32();
                    break;
                case 13:
                    reader.readMessage(message.player_info, () => message.player_info = dependency_1.OnlinePlayerInfo.deserialize(reader));
                    break;
                case 14:
                    message.uid = reader.readUint32();
                    break;
                case 3:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.flower_ring_catch_count_map, reader, reader.readUint32, reader.readUint32));
                    break;
                case 10:
                    message.remain_time = reader.readUint32();
                    break;
                case 1:
                    message.final_score = reader.readUint32();
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
        return FallSettleInfo.deserialize(bytes);
    }
}
exports.FallSettleInfo = FallSettleInfo;
_FallSettleInfo_one_of_decls = new WeakMap();
