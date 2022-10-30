"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LevelupCityRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelupCityRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: LevelupCityRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./CityInfo");
const pb_1 = require("google-protobuf");
class LevelupCityRsp extends pb_1.Message {
    constructor(data) {
        super();
        _LevelupCityRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _LevelupCityRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("area_id" in data && data.area_id != undefined) {
                this.area_id = data.area_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("city_info" in data && data.city_info != undefined) {
                this.city_info = data.city_info;
            }
        }
    }
    get area_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set area_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get city_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.CityInfo, 6);
    }
    set city_info(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get has_city_info() {
        return pb_1.Message.getField(this, 6) != null;
    }
    static fromObject(data) {
        const message = new LevelupCityRsp({});
        if (data.area_id != null) {
            message.area_id = data.area_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.city_info != null) {
            message.city_info = dependency_1.CityInfo.fromObject(data.city_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.area_id != null) {
            data.area_id = this.area_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.city_info != null) {
            data.city_info = this.city_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.area_id != 0)
            writer.writeUint32(9, this.area_id);
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (this.scene_id != 0)
            writer.writeUint32(4, this.scene_id);
        if (this.has_city_info)
            writer.writeMessage(6, this.city_info, () => this.city_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LevelupCityRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.area_id = reader.readUint32();
                    break;
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                case 4:
                    message.scene_id = reader.readUint32();
                    break;
                case 6:
                    reader.readMessage(message.city_info, () => message.city_info = dependency_1.CityInfo.deserialize(reader));
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
        return LevelupCityRsp.deserialize(bytes);
    }
}
exports.LevelupCityRsp = LevelupCityRsp;
_LevelupCityRsp_one_of_decls = new WeakMap();