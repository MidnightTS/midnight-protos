"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PotionStage_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotionStage = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PotionStage.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk2700_JLHKOLGFAMI");
const pb_1 = require("google-protobuf");
class PotionStage extends pb_1.Message {
    constructor(data) {
        super();
        _PotionStage_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 14, 13], __classPrivateFieldGet(this, _PotionStage_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("Unk2700_HFHCCJFDOKA" in data && data.Unk2700_HFHCCJFDOKA != undefined) {
                this.Unk2700_HFHCCJFDOKA = data.Unk2700_HFHCCJFDOKA;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("level_list" in data && data.level_list != undefined) {
                this.level_list = data.level_list;
            }
            if ("Unk2700_LONIJGBDPIG" in data && data.Unk2700_LONIJGBDPIG != undefined) {
                this.Unk2700_LONIJGBDPIG = data.Unk2700_LONIJGBDPIG;
            }
        }
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get Unk2700_HFHCCJFDOKA() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set Unk2700_HFHCCJFDOKA(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 15, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get level_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk2700_JLHKOLGFAMI, 14);
    }
    set level_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    get Unk2700_LONIJGBDPIG() {
        return pb_1.Message.getFieldWithDefault(this, 13, []);
    }
    set Unk2700_LONIJGBDPIG(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new PotionStage({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.Unk2700_HFHCCJFDOKA != null) {
            message.Unk2700_HFHCCJFDOKA = data.Unk2700_HFHCCJFDOKA;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.level_list != null) {
            message.level_list = data.level_list.map(item => dependency_1.Unk2700_JLHKOLGFAMI.fromObject(item));
        }
        if (data.Unk2700_LONIJGBDPIG != null) {
            message.Unk2700_LONIJGBDPIG = data.Unk2700_LONIJGBDPIG;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.Unk2700_HFHCCJFDOKA != null) {
            data.Unk2700_HFHCCJFDOKA = this.Unk2700_HFHCCJFDOKA;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.level_list != null) {
            data.level_list = this.level_list.map((item) => item.toObject());
        }
        if (this.Unk2700_LONIJGBDPIG != null) {
            data.Unk2700_LONIJGBDPIG = this.Unk2700_LONIJGBDPIG;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(11, this.stage_id);
        if (this.Unk2700_HFHCCJFDOKA.length)
            writer.writePackedUint32(2, this.Unk2700_HFHCCJFDOKA);
        if (this.is_open != false)
            writer.writeBool(15, this.is_open);
        if (this.level_list.length)
            writer.writeRepeatedMessage(14, this.level_list, (item) => item.serialize(writer));
        if (this.Unk2700_LONIJGBDPIG.length)
            writer.writePackedUint32(13, this.Unk2700_LONIJGBDPIG);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PotionStage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.stage_id = reader.readUint32();
                    break;
                case 2:
                    message.Unk2700_HFHCCJFDOKA = reader.readPackedUint32();
                    break;
                case 15:
                    message.is_open = reader.readBool();
                    break;
                case 14:
                    reader.readMessage(message.level_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.Unk2700_JLHKOLGFAMI.deserialize(reader), dependency_1.Unk2700_JLHKOLGFAMI));
                    break;
                case 13:
                    message.Unk2700_LONIJGBDPIG = reader.readPackedUint32();
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
        return PotionStage.deserialize(bytes);
    }
}
exports.PotionStage = PotionStage;
_PotionStage_one_of_decls = new WeakMap();
