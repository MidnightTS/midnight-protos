"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryLuminanceStoneChallengeInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryLuminanceStoneChallengeInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryLuminanceStoneChallengeInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneGalleryLuminanceStoneChallengeInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryLuminanceStoneChallengeInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneGalleryLuminanceStoneChallengeInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("kill_monster_count" in data && data.kill_monster_count != undefined) {
                this.kill_monster_count = data.kill_monster_count;
            }
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
            if ("Unk2700_OFKHLGLOPCM" in data && data.Unk2700_OFKHLGLOPCM != undefined) {
                this.Unk2700_OFKHLGLOPCM = data.Unk2700_OFKHLGLOPCM;
            }
            if ("kill_special_monster_count" in data && data.kill_special_monster_count != undefined) {
                this.kill_special_monster_count = data.kill_special_monster_count;
            }
        }
    }
    get kill_monster_count() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set kill_monster_count(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set score(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get Unk2700_OFKHLGLOPCM() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set Unk2700_OFKHLGLOPCM(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get kill_special_monster_count() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set kill_special_monster_count(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryLuminanceStoneChallengeInfo({});
        if (data.kill_monster_count != null) {
            message.kill_monster_count = data.kill_monster_count;
        }
        if (data.score != null) {
            message.score = data.score;
        }
        if (data.Unk2700_OFKHLGLOPCM != null) {
            message.Unk2700_OFKHLGLOPCM = data.Unk2700_OFKHLGLOPCM;
        }
        if (data.kill_special_monster_count != null) {
            message.kill_special_monster_count = data.kill_special_monster_count;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.kill_monster_count != null) {
            data.kill_monster_count = this.kill_monster_count;
        }
        if (this.score != null) {
            data.score = this.score;
        }
        if (this.Unk2700_OFKHLGLOPCM != null) {
            data.Unk2700_OFKHLGLOPCM = this.Unk2700_OFKHLGLOPCM;
        }
        if (this.kill_special_monster_count != null) {
            data.kill_special_monster_count = this.kill_special_monster_count;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.kill_monster_count != 0)
            writer.writeUint32(5, this.kill_monster_count);
        if (this.score != 0)
            writer.writeUint32(3, this.score);
        if (this.Unk2700_OFKHLGLOPCM != 0)
            writer.writeUint32(2, this.Unk2700_OFKHLGLOPCM);
        if (this.kill_special_monster_count != 0)
            writer.writeUint32(6, this.kill_special_monster_count);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryLuminanceStoneChallengeInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.kill_monster_count = reader.readUint32();
                    break;
                case 3:
                    message.score = reader.readUint32();
                    break;
                case 2:
                    message.Unk2700_OFKHLGLOPCM = reader.readUint32();
                    break;
                case 6:
                    message.kill_special_monster_count = reader.readUint32();
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
        return SceneGalleryLuminanceStoneChallengeInfo.deserialize(bytes);
    }
}
exports.SceneGalleryLuminanceStoneChallengeInfo = SceneGalleryLuminanceStoneChallengeInfo;
_SceneGalleryLuminanceStoneChallengeInfo_one_of_decls = new WeakMap();
