"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_BIEMCDLIFOD_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_BIEMCDLIFOD = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_BIEMCDLIFOD.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class Unk2700_BIEMCDLIFOD extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_BIEMCDLIFOD_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12], __classPrivateFieldGet(this, _Unk2700_BIEMCDLIFOD_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
            if ("spawn_pos" in data && data.spawn_pos != undefined) {
                this.spawn_pos = data.spawn_pos;
            }
            if ("included_furniture_index_list" in data && data.included_furniture_index_list != undefined) {
                this.included_furniture_index_list = data.included_furniture_index_list;
            }
        }
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set guid(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get spawn_pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 14);
    }
    set spawn_pos(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_spawn_pos() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get included_furniture_index_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []);
    }
    set included_furniture_index_list(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new Unk2700_BIEMCDLIFOD({});
        if (data.guid != null) {
            message.guid = data.guid;
        }
        if (data.spawn_pos != null) {
            message.spawn_pos = dependency_1.Vector.fromObject(data.spawn_pos);
        }
        if (data.included_furniture_index_list != null) {
            message.included_furniture_index_list = data.included_furniture_index_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.guid != null) {
            data.guid = this.guid;
        }
        if (this.spawn_pos != null) {
            data.spawn_pos = this.spawn_pos.toObject();
        }
        if (this.included_furniture_index_list != null) {
            data.included_furniture_index_list = this.included_furniture_index_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.guid != 0)
            writer.writeUint32(11, this.guid);
        if (this.has_spawn_pos)
            writer.writeMessage(14, this.spawn_pos, () => this.spawn_pos.serialize(writer));
        if (this.included_furniture_index_list.length)
            writer.writePackedInt32(12, this.included_furniture_index_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_BIEMCDLIFOD();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.guid = reader.readUint32();
                    break;
                case 14:
                    reader.readMessage(message.spawn_pos, () => message.spawn_pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 12:
                    message.included_furniture_index_list = reader.readPackedInt32();
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
        return Unk2700_BIEMCDLIFOD.deserialize(bytes);
    }
}
exports.Unk2700_BIEMCDLIFOD = Unk2700_BIEMCDLIFOD;
_Unk2700_BIEMCDLIFOD_one_of_decls = new WeakMap();
