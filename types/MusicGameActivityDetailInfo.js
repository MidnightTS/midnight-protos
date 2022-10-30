"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MusicGameActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGameActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MusicGameActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MusicBriefInfo");
const dependency_2 = require("./MusicGameRecord");
const pb_1 = require("google-protobuf");
class MusicGameActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MusicGameActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4, 7], __classPrivateFieldGet(this, _MusicGameActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_HMNHCPMFDCP" in data && data.Unk2700_HMNHCPMFDCP != undefined) {
                this.Unk2700_HMNHCPMFDCP = data.Unk2700_HMNHCPMFDCP;
            }
            if ("Unk2700_FOFAFGKAEJM" in data && data.Unk2700_FOFAFGKAEJM != undefined) {
                this.Unk2700_FOFAFGKAEJM = data.Unk2700_FOFAFGKAEJM;
            }
            if ("music_game_record_map" in data && data.music_game_record_map != undefined) {
                this.music_game_record_map = data.music_game_record_map;
            }
        }
        if (!this.music_game_record_map)
            this.music_game_record_map = new Map();
    }
    get Unk2700_HMNHCPMFDCP() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MusicBriefInfo, 4);
    }
    set Unk2700_HMNHCPMFDCP(value) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get Unk2700_FOFAFGKAEJM() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MusicBriefInfo, 7);
    }
    set Unk2700_FOFAFGKAEJM(value) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    get music_game_record_map() {
        return pb_1.Message.getField(this, 8);
    }
    set music_game_record_map(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new MusicGameActivityDetailInfo({});
        if (data.Unk2700_HMNHCPMFDCP != null) {
            message.Unk2700_HMNHCPMFDCP = data.Unk2700_HMNHCPMFDCP.map(item => dependency_1.MusicBriefInfo.fromObject(item));
        }
        if (data.Unk2700_FOFAFGKAEJM != null) {
            message.Unk2700_FOFAFGKAEJM = data.Unk2700_FOFAFGKAEJM.map(item => dependency_1.MusicBriefInfo.fromObject(item));
        }
        if (typeof data.music_game_record_map == "object") {
            message.music_game_record_map = new Map(Object.entries(data.music_game_record_map).map(([key, value]) => [Number(key), dependency_2.MusicGameRecord.fromObject(value)]));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_HMNHCPMFDCP != null) {
            data.Unk2700_HMNHCPMFDCP = this.Unk2700_HMNHCPMFDCP.map((item) => item.toObject());
        }
        if (this.Unk2700_FOFAFGKAEJM != null) {
            data.Unk2700_FOFAFGKAEJM = this.Unk2700_FOFAFGKAEJM.map((item) => item.toObject());
        }
        if (this.music_game_record_map.size > 0) {
            data.music_game_record_map = (Object.fromEntries)((Array.from)(this.music_game_record_map).map(([key, value]) => [key, value.toObject()]));
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_HMNHCPMFDCP.length)
            writer.writeRepeatedMessage(4, this.Unk2700_HMNHCPMFDCP, (item) => item.serialize(writer));
        if (this.Unk2700_FOFAFGKAEJM.length)
            writer.writeRepeatedMessage(7, this.Unk2700_FOFAFGKAEJM, (item) => item.serialize(writer));
        for (const [key, value] of this.music_game_record_map) {
            writer.writeMessage(8, this.music_game_record_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MusicGameActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.Unk2700_HMNHCPMFDCP, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_1.MusicBriefInfo.deserialize(reader), dependency_1.MusicBriefInfo));
                    break;
                case 7:
                    reader.readMessage(message.Unk2700_FOFAFGKAEJM, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_1.MusicBriefInfo.deserialize(reader), dependency_1.MusicBriefInfo));
                    break;
                case 8:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.music_game_record_map, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_2.MusicGameRecord.deserialize(reader));
                        return value;
                    }));
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
        return MusicGameActivityDetailInfo.deserialize(bytes);
    }
}
exports.MusicGameActivityDetailInfo = MusicGameActivityDetailInfo;
_MusicGameActivityDetailInfo_one_of_decls = new WeakMap();