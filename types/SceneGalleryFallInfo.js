"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryFallInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryFallInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryFallInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FallPlayerInfo");
const pb_1 = require("google-protobuf");
class SceneGalleryFallInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryFallInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneGalleryFallInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_player_fall_info_map" in data && data.scene_player_fall_info_map != undefined) {
                this.scene_player_fall_info_map = data.scene_player_fall_info_map;
            }
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
        }
        if (!this.scene_player_fall_info_map)
            this.scene_player_fall_info_map = new Map();
    }
    get scene_player_fall_info_map() {
        return pb_1.Message.getField(this, 12);
    }
    set scene_player_fall_info_map(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set end_time(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryFallInfo({});
        if (typeof data.scene_player_fall_info_map == "object") {
            message.scene_player_fall_info_map = new Map(Object.entries(data.scene_player_fall_info_map).map(([key, value]) => [Number(key), dependency_1.FallPlayerInfo.fromObject(value)]));
        }
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.scene_player_fall_info_map.size > 0) {
            data.scene_player_fall_info_map = (Object.fromEntries)((Array.from)(this.scene_player_fall_info_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.scene_player_fall_info_map) {
            writer.writeMessage(12, this.scene_player_fall_info_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.end_time != 0)
            writer.writeUint32(2, this.end_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryFallInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.scene_player_fall_info_map, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.FallPlayerInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 2:
                    message.end_time = reader.readUint32();
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
        return SceneGalleryFallInfo.deserialize(bytes);
    }
}
exports.SceneGalleryFallInfo = SceneGalleryFallInfo;
_SceneGalleryFallInfo_one_of_decls = new WeakMap();
