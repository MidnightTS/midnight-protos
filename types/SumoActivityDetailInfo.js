"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SumoActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SumoActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SumoStageData");
const pb_1 = require("google-protobuf");
class SumoActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SumoActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SumoActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("difficulty_id" in data && data.difficulty_id != undefined) {
                this.difficulty_id = data.difficulty_id;
            }
            if ("sumo_stage_map" in data && data.sumo_stage_map != undefined) {
                this.sumo_stage_map = data.sumo_stage_map;
            }
            if ("Unk2700_NIJIAJMFLLD" in data && data.Unk2700_NIJIAJMFLLD != undefined) {
                this.Unk2700_NIJIAJMFLLD = data.Unk2700_NIJIAJMFLLD;
            }
        }
        if (!this.sumo_stage_map)
            this.sumo_stage_map = new Map();
    }
    get difficulty_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set difficulty_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get sumo_stage_map() {
        return pb_1.Message.getField(this, 13);
    }
    set sumo_stage_map(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get Unk2700_NIJIAJMFLLD() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set Unk2700_NIJIAJMFLLD(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new SumoActivityDetailInfo({});
        if (data.difficulty_id != null) {
            message.difficulty_id = data.difficulty_id;
        }
        if (typeof data.sumo_stage_map == "object") {
            message.sumo_stage_map = new Map(Object.entries(data.sumo_stage_map).map(([key, value]) => [Number(key), dependency_1.SumoStageData.fromObject(value)]));
        }
        if (data.Unk2700_NIJIAJMFLLD != null) {
            message.Unk2700_NIJIAJMFLLD = data.Unk2700_NIJIAJMFLLD;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.difficulty_id != null) {
            data.difficulty_id = this.difficulty_id;
        }
        if (this.sumo_stage_map.size > 0) {
            data.sumo_stage_map = (Object.fromEntries)((Array.from)(this.sumo_stage_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.Unk2700_NIJIAJMFLLD != null) {
            data.Unk2700_NIJIAJMFLLD = this.Unk2700_NIJIAJMFLLD;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.difficulty_id != 0)
            writer.writeUint32(11, this.difficulty_id);
        for (const [key, value] of this.sumo_stage_map) {
            writer.writeMessage(13, this.sumo_stage_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.Unk2700_NIJIAJMFLLD != 0)
            writer.writeUint32(14, this.Unk2700_NIJIAJMFLLD);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SumoActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.difficulty_id = reader.readUint32();
                    break;
                case 13:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.sumo_stage_map, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.SumoStageData.deserialize(reader));
                        return value;
                    }));
                    break;
                case 14:
                    message.Unk2700_NIJIAJMFLLD = reader.readUint32();
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
        return SumoActivityDetailInfo.deserialize(bytes);
    }
}
exports.SumoActivityDetailInfo = SumoActivityDetailInfo;
_SumoActivityDetailInfo_one_of_decls = new WeakMap();