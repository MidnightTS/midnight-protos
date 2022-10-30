"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BuoyantCombatGallerySettleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuoyantCombatGallerySettleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BuoyantCombatGallerySettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class BuoyantCombatGallerySettleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _BuoyantCombatGallerySettleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BuoyantCombatGallerySettleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("gallery_level" in data && data.gallery_level != undefined) {
                this.gallery_level = data.gallery_level;
            }
            if ("final_score" in data && data.final_score != undefined) {
                this.final_score = data.final_score;
            }
            if ("kill_monster_count" in data && data.kill_monster_count != undefined) {
                this.kill_monster_count = data.kill_monster_count;
            }
            if ("kill_target_count" in data && data.kill_target_count != undefined) {
                this.kill_target_count = data.kill_target_count;
            }
            if ("kill_special_monster_count" in data && data.kill_special_monster_count != undefined) {
                this.kill_special_monster_count = data.kill_special_monster_count;
            }
            if ("gallery_id" in data && data.gallery_id != undefined) {
                this.gallery_id = data.gallery_id;
            }
            if ("gallery_multiple" in data && data.gallery_multiple != undefined) {
                this.gallery_multiple = data.gallery_multiple;
            }
        }
    }
    get gallery_level() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set gallery_level(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get final_score() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set final_score(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get kill_monster_count() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set kill_monster_count(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get kill_target_count() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set kill_target_count(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get kill_special_monster_count() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set kill_special_monster_count(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get gallery_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set gallery_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get gallery_multiple() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set gallery_multiple(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new BuoyantCombatGallerySettleInfo({});
        if (data.gallery_level != null) {
            message.gallery_level = data.gallery_level;
        }
        if (data.final_score != null) {
            message.final_score = data.final_score;
        }
        if (data.kill_monster_count != null) {
            message.kill_monster_count = data.kill_monster_count;
        }
        if (data.kill_target_count != null) {
            message.kill_target_count = data.kill_target_count;
        }
        if (data.kill_special_monster_count != null) {
            message.kill_special_monster_count = data.kill_special_monster_count;
        }
        if (data.gallery_id != null) {
            message.gallery_id = data.gallery_id;
        }
        if (data.gallery_multiple != null) {
            message.gallery_multiple = data.gallery_multiple;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.gallery_level != null) {
            data.gallery_level = this.gallery_level;
        }
        if (this.final_score != null) {
            data.final_score = this.final_score;
        }
        if (this.kill_monster_count != null) {
            data.kill_monster_count = this.kill_monster_count;
        }
        if (this.kill_target_count != null) {
            data.kill_target_count = this.kill_target_count;
        }
        if (this.kill_special_monster_count != null) {
            data.kill_special_monster_count = this.kill_special_monster_count;
        }
        if (this.gallery_id != null) {
            data.gallery_id = this.gallery_id;
        }
        if (this.gallery_multiple != null) {
            data.gallery_multiple = this.gallery_multiple;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.gallery_level != 0)
            writer.writeUint32(12, this.gallery_level);
        if (this.final_score != 0)
            writer.writeUint32(15, this.final_score);
        if (this.kill_monster_count != 0)
            writer.writeUint32(9, this.kill_monster_count);
        if (this.kill_target_count != 0)
            writer.writeUint32(1, this.kill_target_count);
        if (this.kill_special_monster_count != 0)
            writer.writeUint32(4, this.kill_special_monster_count);
        if (this.gallery_id != 0)
            writer.writeUint32(2, this.gallery_id);
        if (this.gallery_multiple != 0)
            writer.writeUint32(11, this.gallery_multiple);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BuoyantCombatGallerySettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.gallery_level = reader.readUint32();
                    break;
                case 15:
                    message.final_score = reader.readUint32();
                    break;
                case 9:
                    message.kill_monster_count = reader.readUint32();
                    break;
                case 1:
                    message.kill_target_count = reader.readUint32();
                    break;
                case 4:
                    message.kill_special_monster_count = reader.readUint32();
                    break;
                case 2:
                    message.gallery_id = reader.readUint32();
                    break;
                case 11:
                    message.gallery_multiple = reader.readUint32();
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
        return BuoyantCombatGallerySettleInfo.deserialize(bytes);
    }
}
exports.BuoyantCombatGallerySettleInfo = BuoyantCombatGallerySettleInfo;
_BuoyantCombatGallerySettleInfo_one_of_decls = new WeakMap();
