"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ObstacleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObstacleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ObstacleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MathQuaternion");
const dependency_2 = require("./Vector");
const dependency_3 = require("./Vector3Int");
const pb_1 = require("google-protobuf");
class ObstacleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ObstacleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ObstacleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("rotation" in data && data.rotation != undefined) {
                this.rotation = data.rotation;
            }
            if ("obstacle_id" in data && data.obstacle_id != undefined) {
                this.obstacle_id = data.obstacle_id;
            }
            if ("center" in data && data.center != undefined) {
                this.center = data.center;
            }
            if ("shape" in data && data.shape != undefined) {
                this.shape = data.shape;
            }
            if ("extents" in data && data.extents != undefined) {
                this.extents = data.extents;
            }
        }
    }
    get rotation() {
        return pb_1.Message.getWrapperField(this, dependency_1.MathQuaternion, 4);
    }
    set rotation(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_rotation() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get obstacle_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set obstacle_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get center() {
        return pb_1.Message.getWrapperField(this, dependency_2.Vector, 14);
    }
    set center(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_center() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get shape() {
        return pb_1.Message.getFieldWithDefault(this, 6, ObstacleInfo.ShapeType.SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE);
    }
    set shape(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get extents() {
        return pb_1.Message.getWrapperField(this, dependency_3.Vector3Int, 12);
    }
    set extents(value) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_extents() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data) {
        const message = new ObstacleInfo({});
        if (data.rotation != null) {
            message.rotation = dependency_1.MathQuaternion.fromObject(data.rotation);
        }
        if (data.obstacle_id != null) {
            message.obstacle_id = data.obstacle_id;
        }
        if (data.center != null) {
            message.center = dependency_2.Vector.fromObject(data.center);
        }
        if (data.shape != null) {
            message.shape = data.shape;
        }
        if (data.extents != null) {
            message.extents = dependency_3.Vector3Int.fromObject(data.extents);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.rotation != null) {
            data.rotation = this.rotation.toObject();
        }
        if (this.obstacle_id != null) {
            data.obstacle_id = this.obstacle_id;
        }
        if (this.center != null) {
            data.center = this.center.toObject();
        }
        if (this.shape != null) {
            data.shape = this.shape;
        }
        if (this.extents != null) {
            data.extents = this.extents.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_rotation)
            writer.writeMessage(4, this.rotation, () => this.rotation.serialize(writer));
        if (this.obstacle_id != 0)
            writer.writeInt32(2, this.obstacle_id);
        if (this.has_center)
            writer.writeMessage(14, this.center, () => this.center.serialize(writer));
        if (this.shape != ObstacleInfo.ShapeType.SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE)
            writer.writeEnum(6, this.shape);
        if (this.has_extents)
            writer.writeMessage(12, this.extents, () => this.extents.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ObstacleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.rotation, () => message.rotation = dependency_1.MathQuaternion.deserialize(reader));
                    break;
                case 2:
                    message.obstacle_id = reader.readInt32();
                    break;
                case 14:
                    reader.readMessage(message.center, () => message.center = dependency_2.Vector.deserialize(reader));
                    break;
                case 6:
                    message.shape = reader.readEnum();
                    break;
                case 12:
                    reader.readMessage(message.extents, () => message.extents = dependency_3.Vector3Int.deserialize(reader));
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
        return ObstacleInfo.deserialize(bytes);
    }
}
exports.ObstacleInfo = ObstacleInfo;
_ObstacleInfo_one_of_decls = new WeakMap();
(function (ObstacleInfo) {
    let ShapeType;
    (function (ShapeType) {
        ShapeType[ShapeType["SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE"] = 0] = "SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE";
        ShapeType[ShapeType["SHAPE_TYPE_OBSTACLE_SHAPE_BOX"] = 1] = "SHAPE_TYPE_OBSTACLE_SHAPE_BOX";
    })(ShapeType = ObstacleInfo.ShapeType || (ObstacleInfo.ShapeType = {}));
})(ObstacleInfo = exports.ObstacleInfo || (exports.ObstacleInfo = {}));
