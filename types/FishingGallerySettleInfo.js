"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FishingGallerySettleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishingGallerySettleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FishingGallerySettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FishInfo");
const dependency_2 = require("./FishingScore");
const pb_1 = require("google-protobuf");
class FishingGallerySettleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _FishingGallerySettleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], __classPrivateFieldGet(this, _FishingGallerySettleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fish_map" in data && data.fish_map != undefined) {
                this.fish_map = data.fish_map;
            }
            if ("fishing_score_list" in data && data.fishing_score_list != undefined) {
                this.fishing_score_list = data.fishing_score_list;
            }
        }
        if (!this.fish_map)
            this.fish_map = new Map();
    }
    get fish_map() {
        return pb_1.Message.getField(this, 11);
    }
    set fish_map(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get fishing_score_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.FishingScore, 15);
    }
    set fishing_score_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    static fromObject(data) {
        const message = new FishingGallerySettleInfo({});
        if (typeof data.fish_map == "object") {
            message.fish_map = new Map(Object.entries(data.fish_map).map(([key, value]) => [Number(key), dependency_1.FishInfo.fromObject(value)]));
        }
        if (data.fishing_score_list != null) {
            message.fishing_score_list = data.fishing_score_list.map(item => dependency_2.FishingScore.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.fish_map.size > 0) {
            data.fish_map = (Object.fromEntries)((Array.from)(this.fish_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.fishing_score_list != null) {
            data.fishing_score_list = this.fishing_score_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.fish_map) {
            writer.writeMessage(11, this.fish_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.fishing_score_list.length)
            writer.writeRepeatedMessage(15, this.fishing_score_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FishingGallerySettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.fish_map, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.FishInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 15:
                    reader.readMessage(message.fishing_score_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_2.FishingScore.deserialize(reader), dependency_2.FishingScore));
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
        return FishingGallerySettleInfo.deserialize(bytes);
    }
}
exports.FishingGallerySettleInfo = FishingGallerySettleInfo;
_FishingGallerySettleInfo_one_of_decls = new WeakMap();