"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BounceConjuringGallerySettleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BounceConjuringGallerySettleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BounceConjuringGallerySettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ExhibitionDisplayInfo");
const dependency_2 = require("./OnlinePlayerInfo");
const pb_1 = require("google-protobuf");
class BounceConjuringGallerySettleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _BounceConjuringGallerySettleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7], __classPrivateFieldGet(this, _BounceConjuringGallerySettleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("player_info" in data && data.player_info != undefined) {
                this.player_info = data.player_info;
            }
            if ("destroyed_machine_count" in data && data.destroyed_machine_count != undefined) {
                this.destroyed_machine_count = data.destroyed_machine_count;
            }
            if ("fever_count" in data && data.fever_count != undefined) {
                this.fever_count = data.fever_count;
            }
            if ("normal_hit_count" in data && data.normal_hit_count != undefined) {
                this.normal_hit_count = data.normal_hit_count;
            }
            if ("damage" in data && data.damage != undefined) {
                this.damage = data.damage;
            }
            if ("gadget_count_map" in data && data.gadget_count_map != undefined) {
                this.gadget_count_map = data.gadget_count_map;
            }
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
            if ("perfect_hit_count" in data && data.perfect_hit_count != undefined) {
                this.perfect_hit_count = data.perfect_hit_count;
            }
            if ("card_list" in data && data.card_list != undefined) {
                this.card_list = data.card_list;
            }
        }
        if (!this.gadget_count_map)
            this.gadget_count_map = new Map();
    }
    get player_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.OnlinePlayerInfo, 14);
    }
    set player_info(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_player_info() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get destroyed_machine_count() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set destroyed_machine_count(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get fever_count() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set fever_count(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get normal_hit_count() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set normal_hit_count(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get damage() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set damage(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get gadget_count_map() {
        return pb_1.Message.getField(this, 15);
    }
    set gadget_count_map(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set score(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get perfect_hit_count() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set perfect_hit_count(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get card_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ExhibitionDisplayInfo, 7);
    }
    set card_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    static fromObject(data) {
        const message = new BounceConjuringGallerySettleInfo({});
        if (data.player_info != null) {
            message.player_info = dependency_2.OnlinePlayerInfo.fromObject(data.player_info);
        }
        if (data.destroyed_machine_count != null) {
            message.destroyed_machine_count = data.destroyed_machine_count;
        }
        if (data.fever_count != null) {
            message.fever_count = data.fever_count;
        }
        if (data.normal_hit_count != null) {
            message.normal_hit_count = data.normal_hit_count;
        }
        if (data.damage != null) {
            message.damage = data.damage;
        }
        if (typeof data.gadget_count_map == "object") {
            message.gadget_count_map = new Map(Object.entries(data.gadget_count_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.score != null) {
            message.score = data.score;
        }
        if (data.perfect_hit_count != null) {
            message.perfect_hit_count = data.perfect_hit_count;
        }
        if (data.card_list != null) {
            message.card_list = data.card_list.map(item => dependency_1.ExhibitionDisplayInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.player_info != null) {
            data.player_info = this.player_info.toObject();
        }
        if (this.destroyed_machine_count != null) {
            data.destroyed_machine_count = this.destroyed_machine_count;
        }
        if (this.fever_count != null) {
            data.fever_count = this.fever_count;
        }
        if (this.normal_hit_count != null) {
            data.normal_hit_count = this.normal_hit_count;
        }
        if (this.damage != null) {
            data.damage = this.damage;
        }
        if (this.gadget_count_map.size > 0) {
            data.gadget_count_map = (Object.fromEntries)(this.gadget_count_map);
        }
        if (this.score != null) {
            data.score = this.score;
        }
        if (this.perfect_hit_count != null) {
            data.perfect_hit_count = this.perfect_hit_count;
        }
        if (this.card_list != null) {
            data.card_list = this.card_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_player_info)
            writer.writeMessage(14, this.player_info, () => this.player_info.serialize(writer));
        if (this.destroyed_machine_count != 0)
            writer.writeUint32(5, this.destroyed_machine_count);
        if (this.fever_count != 0)
            writer.writeUint32(6, this.fever_count);
        if (this.normal_hit_count != 0)
            writer.writeUint32(4, this.normal_hit_count);
        if (this.damage != 0)
            writer.writeFloat(11, this.damage);
        for (const [key, value] of this.gadget_count_map) {
            writer.writeMessage(15, this.gadget_count_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.score != 0)
            writer.writeUint32(12, this.score);
        if (this.perfect_hit_count != 0)
            writer.writeUint32(8, this.perfect_hit_count);
        if (this.card_list.length)
            writer.writeRepeatedMessage(7, this.card_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BounceConjuringGallerySettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.player_info, () => message.player_info = dependency_2.OnlinePlayerInfo.deserialize(reader));
                    break;
                case 5:
                    message.destroyed_machine_count = reader.readUint32();
                    break;
                case 6:
                    message.fever_count = reader.readUint32();
                    break;
                case 4:
                    message.normal_hit_count = reader.readUint32();
                    break;
                case 11:
                    message.damage = reader.readFloat();
                    break;
                case 15:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.gadget_count_map, reader, reader.readUint32, reader.readUint32));
                    break;
                case 12:
                    message.score = reader.readUint32();
                    break;
                case 8:
                    message.perfect_hit_count = reader.readUint32();
                    break;
                case 7:
                    reader.readMessage(message.card_list, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_1.ExhibitionDisplayInfo.deserialize(reader), dependency_1.ExhibitionDisplayInfo));
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
        return BounceConjuringGallerySettleInfo.deserialize(bytes);
    }
}
exports.BounceConjuringGallerySettleInfo = BounceConjuringGallerySettleInfo;
_BounceConjuringGallerySettleInfo_one_of_decls = new WeakMap();
