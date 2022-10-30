"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScenePlayerLocationNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayerLocationNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScenePlayerLocationNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PlayerLocationInfo");
const dependency_2 = require("./VehicleLocationInfo");
const pb_1 = require("google-protobuf");
class ScenePlayerLocationNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ScenePlayerLocationNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 14], __classPrivateFieldGet(this, _ScenePlayerLocationNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("vehicle_loc_list" in data && data.vehicle_loc_list != undefined) {
                this.vehicle_loc_list = data.vehicle_loc_list;
            }
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("player_loc_list" in data && data.player_loc_list != undefined) {
                this.player_loc_list = data.player_loc_list;
            }
        }
    }
    get vehicle_loc_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.VehicleLocationInfo, 3);
    }
    set vehicle_loc_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get player_loc_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PlayerLocationInfo, 14);
    }
    set player_loc_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data) {
        const message = new ScenePlayerLocationNotify({});
        if (data.vehicle_loc_list != null) {
            message.vehicle_loc_list = data.vehicle_loc_list.map(item => dependency_2.VehicleLocationInfo.fromObject(item));
        }
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.player_loc_list != null) {
            message.player_loc_list = data.player_loc_list.map(item => dependency_1.PlayerLocationInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.vehicle_loc_list != null) {
            data.vehicle_loc_list = this.vehicle_loc_list.map((item) => item.toObject());
        }
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.player_loc_list != null) {
            data.player_loc_list = this.player_loc_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.vehicle_loc_list.length)
            writer.writeRepeatedMessage(3, this.vehicle_loc_list, (item) => item.serialize(writer));
        if (this.scene_id != 0)
            writer.writeUint32(9, this.scene_id);
        if (this.player_loc_list.length)
            writer.writeRepeatedMessage(14, this.player_loc_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScenePlayerLocationNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.vehicle_loc_list, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.VehicleLocationInfo.deserialize(reader), dependency_2.VehicleLocationInfo));
                    break;
                case 9:
                    message.scene_id = reader.readUint32();
                    break;
                case 14:
                    reader.readMessage(message.player_loc_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.PlayerLocationInfo.deserialize(reader), dependency_1.PlayerLocationInfo));
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
        return ScenePlayerLocationNotify.deserialize(bytes);
    }
}
exports.ScenePlayerLocationNotify = ScenePlayerLocationNotify;
_ScenePlayerLocationNotify_one_of_decls = new WeakMap();