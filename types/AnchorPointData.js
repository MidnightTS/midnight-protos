"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AnchorPointData_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorPointData = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AnchorPointData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class AnchorPointData extends pb_1.Message {
    constructor(data) {
        super();
        _AnchorPointData_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AnchorPointData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("anchor_point_id" in data && data.anchor_point_id != undefined) {
                this.anchor_point_id = data.anchor_point_id;
            }
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
            if ("rot" in data && data.rot != undefined) {
                this.rot = data.rot;
            }
        }
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get anchor_point_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set anchor_point_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set end_time(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 15);
    }
    set pos(value) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 15) != null;
    }
    get rot() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 2);
    }
    set rot(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_rot() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new AnchorPointData({});
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.anchor_point_id != null) {
            message.anchor_point_id = data.anchor_point_id;
        }
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        if (data.rot != null) {
            message.rot = dependency_1.Vector.fromObject(data.rot);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.anchor_point_id != null) {
            data.anchor_point_id = this.anchor_point_id;
        }
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        if (this.rot != null) {
            data.rot = this.rot.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_id != 0)
            writer.writeUint32(5, this.scene_id);
        if (this.anchor_point_id != 0)
            writer.writeUint32(9, this.anchor_point_id);
        if (this.end_time != 0)
            writer.writeUint32(8, this.end_time);
        if (this.has_pos)
            writer.writeMessage(15, this.pos, () => this.pos.serialize(writer));
        if (this.has_rot)
            writer.writeMessage(2, this.rot, () => this.rot.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AnchorPointData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.scene_id = reader.readUint32();
                    break;
                case 9:
                    message.anchor_point_id = reader.readUint32();
                    break;
                case 8:
                    message.end_time = reader.readUint32();
                    break;
                case 15:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.rot, () => message.rot = dependency_1.Vector.deserialize(reader));
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
        return AnchorPointData.deserialize(bytes);
    }
}
exports.AnchorPointData = AnchorPointData;
_AnchorPointData_one_of_decls = new WeakMap();
