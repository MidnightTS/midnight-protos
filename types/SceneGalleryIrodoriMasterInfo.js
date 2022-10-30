"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryIrodoriMasterInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryIrodoriMasterInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryIrodoriMasterInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneGalleryIrodoriMasterInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryIrodoriMasterInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneGalleryIrodoriMasterInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("level_id" in data && data.level_id != undefined) {
                this.level_id = data.level_id;
            }
            if ("difficulty" in data && data.difficulty != undefined) {
                this.difficulty = data.difficulty;
            }
            if ("Unk2700_FKDMOBOGMCM" in data && data.Unk2700_FKDMOBOGMCM != undefined) {
                this.Unk2700_FKDMOBOGMCM = data.Unk2700_FKDMOBOGMCM;
            }
        }
    }
    get level_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set level_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get difficulty() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set difficulty(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk2700_FKDMOBOGMCM() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set Unk2700_FKDMOBOGMCM(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryIrodoriMasterInfo({});
        if (data.level_id != null) {
            message.level_id = data.level_id;
        }
        if (data.difficulty != null) {
            message.difficulty = data.difficulty;
        }
        if (data.Unk2700_FKDMOBOGMCM != null) {
            message.Unk2700_FKDMOBOGMCM = data.Unk2700_FKDMOBOGMCM;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.level_id != null) {
            data.level_id = this.level_id;
        }
        if (this.difficulty != null) {
            data.difficulty = this.difficulty;
        }
        if (this.Unk2700_FKDMOBOGMCM != null) {
            data.Unk2700_FKDMOBOGMCM = this.Unk2700_FKDMOBOGMCM;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.level_id != 0)
            writer.writeUint32(8, this.level_id);
        if (this.difficulty != 0)
            writer.writeUint32(1, this.difficulty);
        if (this.Unk2700_FKDMOBOGMCM != false)
            writer.writeBool(5, this.Unk2700_FKDMOBOGMCM);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryIrodoriMasterInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.level_id = reader.readUint32();
                    break;
                case 1:
                    message.difficulty = reader.readUint32();
                    break;
                case 5:
                    message.Unk2700_FKDMOBOGMCM = reader.readBool();
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
        return SceneGalleryIrodoriMasterInfo.deserialize(bytes);
    }
}
exports.SceneGalleryIrodoriMasterInfo = SceneGalleryIrodoriMasterInfo;
_SceneGalleryIrodoriMasterInfo_one_of_decls = new WeakMap();
