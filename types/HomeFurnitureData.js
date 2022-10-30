"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeFurnitureData_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFurnitureData = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeFurnitureData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class HomeFurnitureData extends pb_1.Message {
    constructor(data) {
        super();
        _HomeFurnitureData_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeFurnitureData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
            if ("parent_furniture_index" in data && data.parent_furniture_index != undefined) {
                this.parent_furniture_index = data.parent_furniture_index;
            }
            if ("furniture_id" in data && data.furniture_id != undefined) {
                this.furniture_id = data.furniture_id;
            }
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
            if ("spawn_rot" in data && data.spawn_rot != undefined) {
                this.spawn_rot = data.spawn_rot;
            }
            if ("spawn_pos" in data && data.spawn_pos != undefined) {
                this.spawn_pos = data.spawn_pos;
            }
        }
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set version(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get parent_furniture_index() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set parent_furniture_index(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get furniture_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set furniture_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set guid(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get spawn_rot() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 10);
    }
    set spawn_rot(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_spawn_rot() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get spawn_pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 8);
    }
    set spawn_pos(value) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_spawn_pos() {
        return pb_1.Message.getField(this, 8) != null;
    }
    static fromObject(data) {
        const message = new HomeFurnitureData({});
        if (data.version != null) {
            message.version = data.version;
        }
        if (data.parent_furniture_index != null) {
            message.parent_furniture_index = data.parent_furniture_index;
        }
        if (data.furniture_id != null) {
            message.furniture_id = data.furniture_id;
        }
        if (data.guid != null) {
            message.guid = data.guid;
        }
        if (data.spawn_rot != null) {
            message.spawn_rot = dependency_1.Vector.fromObject(data.spawn_rot);
        }
        if (data.spawn_pos != null) {
            message.spawn_pos = dependency_1.Vector.fromObject(data.spawn_pos);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.version != null) {
            data.version = this.version;
        }
        if (this.parent_furniture_index != null) {
            data.parent_furniture_index = this.parent_furniture_index;
        }
        if (this.furniture_id != null) {
            data.furniture_id = this.furniture_id;
        }
        if (this.guid != null) {
            data.guid = this.guid;
        }
        if (this.spawn_rot != null) {
            data.spawn_rot = this.spawn_rot.toObject();
        }
        if (this.spawn_pos != null) {
            data.spawn_pos = this.spawn_pos.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.version != 0)
            writer.writeUint32(6, this.version);
        if (this.parent_furniture_index != 0)
            writer.writeInt32(3, this.parent_furniture_index);
        if (this.furniture_id != 0)
            writer.writeUint32(4, this.furniture_id);
        if (this.guid != 0)
            writer.writeUint32(9, this.guid);
        if (this.has_spawn_rot)
            writer.writeMessage(10, this.spawn_rot, () => this.spawn_rot.serialize(writer));
        if (this.has_spawn_pos)
            writer.writeMessage(8, this.spawn_pos, () => this.spawn_pos.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeFurnitureData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.version = reader.readUint32();
                    break;
                case 3:
                    message.parent_furniture_index = reader.readInt32();
                    break;
                case 4:
                    message.furniture_id = reader.readUint32();
                    break;
                case 9:
                    message.guid = reader.readUint32();
                    break;
                case 10:
                    reader.readMessage(message.spawn_rot, () => message.spawn_rot = dependency_1.Vector.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.spawn_pos, () => message.spawn_pos = dependency_1.Vector.deserialize(reader));
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
        return HomeFurnitureData.deserialize(bytes);
    }
}
exports.HomeFurnitureData = HomeFurnitureData;
_HomeFurnitureData_one_of_decls = new WeakMap();