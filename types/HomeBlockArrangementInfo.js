"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeBlockArrangementInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlockArrangementInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeBlockArrangementInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomeAnimalData");
const dependency_2 = require("./HomeBlockDotPattern");
const dependency_3 = require("./HomeBlockFieldData");
const dependency_4 = require("./HomeFurnitureData");
const dependency_5 = require("./HomeFurnitureSuiteData");
const dependency_6 = require("./HomeNpcData");
const dependency_7 = require("./Unk2700_BIEMCDLIFOD");
const dependency_8 = require("./Unk2700_GOHMLAFNBGF");
const dependency_9 = require("./WeekendDjinnInfo");
const pb_1 = require("google-protobuf");
class HomeBlockArrangementInfo extends pb_1.Message {
    constructor(data) {
        super();
        _HomeBlockArrangementInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4, 5, 13, 15, 3, 11, 7, 9, 12, 14], __classPrivateFieldGet(this, _HomeBlockArrangementInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_unlocked" in data && data.is_unlocked != undefined) {
                this.is_unlocked = data.is_unlocked;
            }
            if ("comfort_value" in data && data.comfort_value != undefined) {
                this.comfort_value = data.comfort_value;
            }
            if ("deploy_animal_list" in data && data.deploy_animal_list != undefined) {
                this.deploy_animal_list = data.deploy_animal_list;
            }
            if ("Unk2700_HGIECHILOJL" in data && data.Unk2700_HGIECHILOJL != undefined) {
                this.Unk2700_HGIECHILOJL = data.Unk2700_HGIECHILOJL;
            }
            if ("weekend_djinn_info_list" in data && data.weekend_djinn_info_list != undefined) {
                this.weekend_djinn_info_list = data.weekend_djinn_info_list;
            }
            if ("furniture_suite_list" in data && data.furniture_suite_list != undefined) {
                this.furniture_suite_list = data.furniture_suite_list;
            }
            if ("field_list" in data && data.field_list != undefined) {
                this.field_list = data.field_list;
            }
            if ("deploy_npc_list" in data && data.deploy_npc_list != undefined) {
                this.deploy_npc_list = data.deploy_npc_list;
            }
            if ("dot_pattern_list" in data && data.dot_pattern_list != undefined) {
                this.dot_pattern_list = data.dot_pattern_list;
            }
            if ("persistent_furniture_list" in data && data.persistent_furniture_list != undefined) {
                this.persistent_furniture_list = data.persistent_furniture_list;
            }
            if ("deploy_furniure_list" in data && data.deploy_furniure_list != undefined) {
                this.deploy_furniure_list = data.deploy_furniure_list;
            }
            if ("block_id" in data && data.block_id != undefined) {
                this.block_id = data.block_id;
            }
            if ("Unk2700_KJGLLEEHBPF" in data && data.Unk2700_KJGLLEEHBPF != undefined) {
                this.Unk2700_KJGLLEEHBPF = data.Unk2700_KJGLLEEHBPF;
            }
        }
    }
    get is_unlocked() {
        return pb_1.Message.getFieldWithDefault(this, 1, false);
    }
    set is_unlocked(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get comfort_value() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set comfort_value(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get deploy_animal_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.HomeAnimalData, 4);
    }
    set deploy_animal_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get Unk2700_HGIECHILOJL() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_8.Unk2700_GOHMLAFNBGF, 5);
    }
    set Unk2700_HGIECHILOJL(value) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    get weekend_djinn_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_9.WeekendDjinnInfo, 13);
    }
    set weekend_djinn_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 13, value);
    }
    get furniture_suite_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_5.HomeFurnitureSuiteData, 15);
    }
    set furniture_suite_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    get field_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.HomeBlockFieldData, 3);
    }
    set field_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    get deploy_npc_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_6.HomeNpcData, 11);
    }
    set deploy_npc_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    get dot_pattern_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.HomeBlockDotPattern, 7);
    }
    set dot_pattern_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    get persistent_furniture_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_4.HomeFurnitureData, 9);
    }
    set persistent_furniture_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    get deploy_furniure_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_4.HomeFurnitureData, 12);
    }
    set deploy_furniure_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    get block_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set block_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get Unk2700_KJGLLEEHBPF() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_7.Unk2700_BIEMCDLIFOD, 14);
    }
    set Unk2700_KJGLLEEHBPF(value) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data) {
        const message = new HomeBlockArrangementInfo({});
        if (data.is_unlocked != null) {
            message.is_unlocked = data.is_unlocked;
        }
        if (data.comfort_value != null) {
            message.comfort_value = data.comfort_value;
        }
        if (data.deploy_animal_list != null) {
            message.deploy_animal_list = data.deploy_animal_list.map(item => dependency_1.HomeAnimalData.fromObject(item));
        }
        if (data.Unk2700_HGIECHILOJL != null) {
            message.Unk2700_HGIECHILOJL = data.Unk2700_HGIECHILOJL.map(item => dependency_8.Unk2700_GOHMLAFNBGF.fromObject(item));
        }
        if (data.weekend_djinn_info_list != null) {
            message.weekend_djinn_info_list = data.weekend_djinn_info_list.map(item => dependency_9.WeekendDjinnInfo.fromObject(item));
        }
        if (data.furniture_suite_list != null) {
            message.furniture_suite_list = data.furniture_suite_list.map(item => dependency_5.HomeFurnitureSuiteData.fromObject(item));
        }
        if (data.field_list != null) {
            message.field_list = data.field_list.map(item => dependency_3.HomeBlockFieldData.fromObject(item));
        }
        if (data.deploy_npc_list != null) {
            message.deploy_npc_list = data.deploy_npc_list.map(item => dependency_6.HomeNpcData.fromObject(item));
        }
        if (data.dot_pattern_list != null) {
            message.dot_pattern_list = data.dot_pattern_list.map(item => dependency_2.HomeBlockDotPattern.fromObject(item));
        }
        if (data.persistent_furniture_list != null) {
            message.persistent_furniture_list = data.persistent_furniture_list.map(item => dependency_4.HomeFurnitureData.fromObject(item));
        }
        if (data.deploy_furniure_list != null) {
            message.deploy_furniure_list = data.deploy_furniure_list.map(item => dependency_4.HomeFurnitureData.fromObject(item));
        }
        if (data.block_id != null) {
            message.block_id = data.block_id;
        }
        if (data.Unk2700_KJGLLEEHBPF != null) {
            message.Unk2700_KJGLLEEHBPF = data.Unk2700_KJGLLEEHBPF.map(item => dependency_7.Unk2700_BIEMCDLIFOD.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_unlocked != null) {
            data.is_unlocked = this.is_unlocked;
        }
        if (this.comfort_value != null) {
            data.comfort_value = this.comfort_value;
        }
        if (this.deploy_animal_list != null) {
            data.deploy_animal_list = this.deploy_animal_list.map((item) => item.toObject());
        }
        if (this.Unk2700_HGIECHILOJL != null) {
            data.Unk2700_HGIECHILOJL = this.Unk2700_HGIECHILOJL.map((item) => item.toObject());
        }
        if (this.weekend_djinn_info_list != null) {
            data.weekend_djinn_info_list = this.weekend_djinn_info_list.map((item) => item.toObject());
        }
        if (this.furniture_suite_list != null) {
            data.furniture_suite_list = this.furniture_suite_list.map((item) => item.toObject());
        }
        if (this.field_list != null) {
            data.field_list = this.field_list.map((item) => item.toObject());
        }
        if (this.deploy_npc_list != null) {
            data.deploy_npc_list = this.deploy_npc_list.map((item) => item.toObject());
        }
        if (this.dot_pattern_list != null) {
            data.dot_pattern_list = this.dot_pattern_list.map((item) => item.toObject());
        }
        if (this.persistent_furniture_list != null) {
            data.persistent_furniture_list = this.persistent_furniture_list.map((item) => item.toObject());
        }
        if (this.deploy_furniure_list != null) {
            data.deploy_furniure_list = this.deploy_furniure_list.map((item) => item.toObject());
        }
        if (this.block_id != null) {
            data.block_id = this.block_id;
        }
        if (this.Unk2700_KJGLLEEHBPF != null) {
            data.Unk2700_KJGLLEEHBPF = this.Unk2700_KJGLLEEHBPF.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_unlocked != false)
            writer.writeBool(1, this.is_unlocked);
        if (this.comfort_value != 0)
            writer.writeUint32(2, this.comfort_value);
        if (this.deploy_animal_list.length)
            writer.writeRepeatedMessage(4, this.deploy_animal_list, (item) => item.serialize(writer));
        if (this.Unk2700_HGIECHILOJL.length)
            writer.writeRepeatedMessage(5, this.Unk2700_HGIECHILOJL, (item) => item.serialize(writer));
        if (this.weekend_djinn_info_list.length)
            writer.writeRepeatedMessage(13, this.weekend_djinn_info_list, (item) => item.serialize(writer));
        if (this.furniture_suite_list.length)
            writer.writeRepeatedMessage(15, this.furniture_suite_list, (item) => item.serialize(writer));
        if (this.field_list.length)
            writer.writeRepeatedMessage(3, this.field_list, (item) => item.serialize(writer));
        if (this.deploy_npc_list.length)
            writer.writeRepeatedMessage(11, this.deploy_npc_list, (item) => item.serialize(writer));
        if (this.dot_pattern_list.length)
            writer.writeRepeatedMessage(7, this.dot_pattern_list, (item) => item.serialize(writer));
        if (this.persistent_furniture_list.length)
            writer.writeRepeatedMessage(9, this.persistent_furniture_list, (item) => item.serialize(writer));
        if (this.deploy_furniure_list.length)
            writer.writeRepeatedMessage(12, this.deploy_furniure_list, (item) => item.serialize(writer));
        if (this.block_id != 0)
            writer.writeUint32(6, this.block_id);
        if (this.Unk2700_KJGLLEEHBPF.length)
            writer.writeRepeatedMessage(14, this.Unk2700_KJGLLEEHBPF, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeBlockArrangementInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.is_unlocked = reader.readBool();
                    break;
                case 2:
                    message.comfort_value = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message.deploy_animal_list, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_1.HomeAnimalData.deserialize(reader), dependency_1.HomeAnimalData));
                    break;
                case 5:
                    reader.readMessage(message.Unk2700_HGIECHILOJL, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_8.Unk2700_GOHMLAFNBGF.deserialize(reader), dependency_8.Unk2700_GOHMLAFNBGF));
                    break;
                case 13:
                    reader.readMessage(message.weekend_djinn_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 13, dependency_9.WeekendDjinnInfo.deserialize(reader), dependency_9.WeekendDjinnInfo));
                    break;
                case 15:
                    reader.readMessage(message.furniture_suite_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_5.HomeFurnitureSuiteData.deserialize(reader), dependency_5.HomeFurnitureSuiteData));
                    break;
                case 3:
                    reader.readMessage(message.field_list, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_3.HomeBlockFieldData.deserialize(reader), dependency_3.HomeBlockFieldData));
                    break;
                case 11:
                    reader.readMessage(message.deploy_npc_list, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_6.HomeNpcData.deserialize(reader), dependency_6.HomeNpcData));
                    break;
                case 7:
                    reader.readMessage(message.dot_pattern_list, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_2.HomeBlockDotPattern.deserialize(reader), dependency_2.HomeBlockDotPattern));
                    break;
                case 9:
                    reader.readMessage(message.persistent_furniture_list, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_4.HomeFurnitureData.deserialize(reader), dependency_4.HomeFurnitureData));
                    break;
                case 12:
                    reader.readMessage(message.deploy_furniure_list, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_4.HomeFurnitureData.deserialize(reader), dependency_4.HomeFurnitureData));
                    break;
                case 6:
                    message.block_id = reader.readUint32();
                    break;
                case 14:
                    reader.readMessage(message.Unk2700_KJGLLEEHBPF, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_7.Unk2700_BIEMCDLIFOD.deserialize(reader), dependency_7.Unk2700_BIEMCDLIFOD));
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
        return HomeBlockArrangementInfo.deserialize(bytes);
    }
}
exports.HomeBlockArrangementInfo = HomeBlockArrangementInfo;
_HomeBlockArrangementInfo_one_of_decls = new WeakMap();
