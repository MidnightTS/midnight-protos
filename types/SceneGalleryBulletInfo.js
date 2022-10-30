"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryBulletInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryBulletInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryBulletInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneGalleryBulletInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryBulletInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneGalleryBulletInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
            if ("hit_count_map" in data && data.hit_count_map != undefined) {
                this.hit_count_map = data.hit_count_map;
            }
        }
        if (!this.hit_count_map)
            this.hit_count_map = new Map();
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set end_time(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get hit_count_map() {
        return pb_1.Message.getField(this, 10);
    }
    set hit_count_map(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryBulletInfo({});
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        if (typeof data.hit_count_map == "object") {
            message.hit_count_map = new Map(Object.entries(data.hit_count_map).map(([key, value]) => [Number(key), value]));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        if (this.hit_count_map.size > 0) {
            data.hit_count_map = (Object.fromEntries)(this.hit_count_map);
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.end_time != 0)
            writer.writeUint32(1, this.end_time);
        for (const [key, value] of this.hit_count_map) {
            writer.writeMessage(10, this.hit_count_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryBulletInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.end_time = reader.readUint32();
                    break;
                case 10:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.hit_count_map, reader, reader.readUint32, reader.readUint32));
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
        return SceneGalleryBulletInfo.deserialize(bytes);
    }
}
exports.SceneGalleryBulletInfo = SceneGalleryBulletInfo;
_SceneGalleryBulletInfo_one_of_decls = new WeakMap();