"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ServerMassiveEntity_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMassiveEntity = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ServerMassiveEntity.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MassiveBoxInfo");
const dependency_2 = require("./MassiveGrassInfo");
const dependency_3 = require("./MassiveWaterInfo");
const pb_1 = require("google-protobuf");
class ServerMassiveEntity extends pb_1.Message {
    constructor(data) {
        super();
        _ServerMassiveEntity_one_of_decls.set(this, [[6, 7, 8]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ServerMassiveEntity_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_type" in data && data.entity_type != undefined) {
                this.entity_type = data.entity_type;
            }
            if ("config_id" in data && data.config_id != undefined) {
                this.config_id = data.config_id;
            }
            if ("runtime_id" in data && data.runtime_id != undefined) {
                this.runtime_id = data.runtime_id;
            }
            if ("authority_peer_id" in data && data.authority_peer_id != undefined) {
                this.authority_peer_id = data.authority_peer_id;
            }
            if ("obj_id" in data && data.obj_id != undefined) {
                this.obj_id = data.obj_id;
            }
            if ("water_info" in data && data.water_info != undefined) {
                this.water_info = data.water_info;
            }
            if ("grass_info" in data && data.grass_info != undefined) {
                this.grass_info = data.grass_info;
            }
            if ("box_info" in data && data.box_info != undefined) {
                this.box_info = data.box_info;
            }
        }
    }
    get entity_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set entity_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get config_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set config_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get runtime_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set runtime_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get authority_peer_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set authority_peer_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get obj_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set obj_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get water_info() {
        return pb_1.Message.getWrapperField(this, dependency_3.MassiveWaterInfo, 6);
    }
    set water_info(value) {
        pb_1.Message.setOneofWrapperField(this, 6, __classPrivateFieldGet(this, _ServerMassiveEntity_one_of_decls, "f")[0], value);
    }
    get has_water_info() {
        return pb_1.Message.getField(this, 6) != null;
    }
    get grass_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.MassiveGrassInfo, 7);
    }
    set grass_info(value) {
        pb_1.Message.setOneofWrapperField(this, 7, __classPrivateFieldGet(this, _ServerMassiveEntity_one_of_decls, "f")[0], value);
    }
    get has_grass_info() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get box_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.MassiveBoxInfo, 8);
    }
    set box_info(value) {
        pb_1.Message.setOneofWrapperField(this, 8, __classPrivateFieldGet(this, _ServerMassiveEntity_one_of_decls, "f")[0], value);
    }
    get has_box_info() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get entity_info() {
        const cases = {
            0: "none",
            6: "water_info",
            7: "grass_info",
            8: "box_info"
        };
        return cases[pb_1.Message.computeOneofCase(this, [6, 7, 8])];
    }
    static fromObject(data) {
        const message = new ServerMassiveEntity({});
        if (data.entity_type != null) {
            message.entity_type = data.entity_type;
        }
        if (data.config_id != null) {
            message.config_id = data.config_id;
        }
        if (data.runtime_id != null) {
            message.runtime_id = data.runtime_id;
        }
        if (data.authority_peer_id != null) {
            message.authority_peer_id = data.authority_peer_id;
        }
        if (data.obj_id != null) {
            message.obj_id = data.obj_id;
        }
        if (data.water_info != null) {
            message.water_info = dependency_3.MassiveWaterInfo.fromObject(data.water_info);
        }
        if (data.grass_info != null) {
            message.grass_info = dependency_2.MassiveGrassInfo.fromObject(data.grass_info);
        }
        if (data.box_info != null) {
            message.box_info = dependency_1.MassiveBoxInfo.fromObject(data.box_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_type != null) {
            data.entity_type = this.entity_type;
        }
        if (this.config_id != null) {
            data.config_id = this.config_id;
        }
        if (this.runtime_id != null) {
            data.runtime_id = this.runtime_id;
        }
        if (this.authority_peer_id != null) {
            data.authority_peer_id = this.authority_peer_id;
        }
        if (this.obj_id != null) {
            data.obj_id = this.obj_id;
        }
        if (this.water_info != null) {
            data.water_info = this.water_info.toObject();
        }
        if (this.grass_info != null) {
            data.grass_info = this.grass_info.toObject();
        }
        if (this.box_info != null) {
            data.box_info = this.box_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_type != 0)
            writer.writeUint32(1, this.entity_type);
        if (this.config_id != 0)
            writer.writeUint32(2, this.config_id);
        if (this.runtime_id != 0)
            writer.writeUint32(3, this.runtime_id);
        if (this.authority_peer_id != 0)
            writer.writeUint32(4, this.authority_peer_id);
        if (this.obj_id != 0)
            writer.writeInt64(5, this.obj_id);
        if (this.has_water_info)
            writer.writeMessage(6, this.water_info, () => this.water_info.serialize(writer));
        if (this.has_grass_info)
            writer.writeMessage(7, this.grass_info, () => this.grass_info.serialize(writer));
        if (this.has_box_info)
            writer.writeMessage(8, this.box_info, () => this.box_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ServerMassiveEntity();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.entity_type = reader.readUint32();
                    break;
                case 2:
                    message.config_id = reader.readUint32();
                    break;
                case 3:
                    message.runtime_id = reader.readUint32();
                    break;
                case 4:
                    message.authority_peer_id = reader.readUint32();
                    break;
                case 5:
                    message.obj_id = reader.readInt64();
                    break;
                case 6:
                    reader.readMessage(message.water_info, () => message.water_info = dependency_3.MassiveWaterInfo.deserialize(reader));
                    break;
                case 7:
                    reader.readMessage(message.grass_info, () => message.grass_info = dependency_2.MassiveGrassInfo.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.box_info, () => message.box_info = dependency_1.MassiveBoxInfo.deserialize(reader));
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
        return ServerMassiveEntity.deserialize(bytes);
    }
}
exports.ServerMassiveEntity = ServerMassiveEntity;
_ServerMassiveEntity_one_of_decls = new WeakMap();