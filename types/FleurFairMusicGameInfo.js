"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FleurFairMusicGameInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairMusicGameInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairMusicGameInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FleurFairMusicRecord");
const pb_1 = require("google-protobuf");
class FleurFairMusicGameInfo extends pb_1.Message {
    constructor(data) {
        super();
        _FleurFairMusicGameInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FleurFairMusicGameInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("music_record_map" in data && data.music_record_map != undefined) {
                this.music_record_map = data.music_record_map;
            }
        }
        if (!this.music_record_map)
            this.music_record_map = new Map();
    }
    get music_record_map() {
        return pb_1.Message.getField(this, 10);
    }
    set music_record_map(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new FleurFairMusicGameInfo({});
        if (typeof data.music_record_map == "object") {
            message.music_record_map = new Map(Object.entries(data.music_record_map).map(([key, value]) => [Number(key), dependency_1.FleurFairMusicRecord.fromObject(value)]));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.music_record_map.size > 0) {
            data.music_record_map = (Object.fromEntries)((Array.from)(this.music_record_map).map(([key, value]) => [key, value.toObject()]));
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.music_record_map) {
            writer.writeMessage(10, this.music_record_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairMusicGameInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.music_record_map, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.FleurFairMusicRecord.deserialize(reader));
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
        return FleurFairMusicGameInfo.deserialize(bytes);
    }
}
exports.FleurFairMusicGameInfo = FleurFairMusicGameInfo;
_FleurFairMusicGameInfo_one_of_decls = new WeakMap();
