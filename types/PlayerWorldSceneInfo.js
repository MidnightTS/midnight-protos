"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerWorldSceneInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerWorldSceneInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerWorldSceneInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerWorldSceneInfo extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerWorldSceneInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _PlayerWorldSceneInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("scene_tag_id_list" in data && data.scene_tag_id_list != undefined) {
                this.scene_tag_id_list = data.scene_tag_id_list;
            }
            if ("is_locked" in data && data.is_locked != undefined) {
                this.is_locked = data.is_locked;
            }
        }
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get scene_tag_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 8, []);
    }
    set scene_tag_id_list(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get is_locked() {
        return pb_1.Message.getFieldWithDefault(this, 12, false);
    }
    set is_locked(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new PlayerWorldSceneInfo({});
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.scene_tag_id_list != null) {
            message.scene_tag_id_list = data.scene_tag_id_list;
        }
        if (data.is_locked != null) {
            message.is_locked = data.is_locked;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.scene_tag_id_list != null) {
            data.scene_tag_id_list = this.scene_tag_id_list;
        }
        if (this.is_locked != null) {
            data.is_locked = this.is_locked;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_id != 0)
            writer.writeUint32(11, this.scene_id);
        if (this.scene_tag_id_list.length)
            writer.writePackedUint32(8, this.scene_tag_id_list);
        if (this.is_locked != false)
            writer.writeBool(12, this.is_locked);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerWorldSceneInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.scene_id = reader.readUint32();
                    break;
                case 8:
                    message.scene_tag_id_list = reader.readPackedUint32();
                    break;
                case 12:
                    message.is_locked = reader.readBool();
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
        return PlayerWorldSceneInfo.deserialize(bytes);
    }
}
exports.PlayerWorldSceneInfo = PlayerWorldSceneInfo;
_PlayerWorldSceneInfo_one_of_decls = new WeakMap();