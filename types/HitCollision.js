"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HitCollision_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitCollision = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HitCollision.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HitColliderType");
const dependency_2 = require("./Vector");
const pb_1 = require("google-protobuf");
class HitCollision extends pb_1.Message {
    constructor(data) {
        super();
        _HitCollision_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HitCollision_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("hit_collider_type" in data && data.hit_collider_type != undefined) {
                this.hit_collider_type = data.hit_collider_type;
            }
            if ("hit_point" in data && data.hit_point != undefined) {
                this.hit_point = data.hit_point;
            }
            if ("attackee_hit_force_angle" in data && data.attackee_hit_force_angle != undefined) {
                this.attackee_hit_force_angle = data.attackee_hit_force_angle;
            }
            if ("hit_dir" in data && data.hit_dir != undefined) {
                this.hit_dir = data.hit_dir;
            }
            if ("attackee_hit_entity_angle" in data && data.attackee_hit_entity_angle != undefined) {
                this.attackee_hit_entity_angle = data.attackee_hit_entity_angle;
            }
            if ("hit_box_index" in data && data.hit_box_index != undefined) {
                this.hit_box_index = data.hit_box_index;
            }
        }
    }
    get hit_collider_type() {
        return pb_1.Message.getFieldWithDefault(this, 8, dependency_1.HitColliderType.HIT_COLLIDER_TYPE_INVALID);
    }
    set hit_collider_type(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get hit_point() {
        return pb_1.Message.getWrapperField(this, dependency_2.Vector, 7);
    }
    set hit_point(value) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get has_hit_point() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get attackee_hit_force_angle() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set attackee_hit_force_angle(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get hit_dir() {
        return pb_1.Message.getWrapperField(this, dependency_2.Vector, 13);
    }
    set hit_dir(value) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get has_hit_dir() {
        return pb_1.Message.getField(this, 13) != null;
    }
    get attackee_hit_entity_angle() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set attackee_hit_entity_angle(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get hit_box_index() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set hit_box_index(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new HitCollision({});
        if (data.hit_collider_type != null) {
            message.hit_collider_type = data.hit_collider_type;
        }
        if (data.hit_point != null) {
            message.hit_point = dependency_2.Vector.fromObject(data.hit_point);
        }
        if (data.attackee_hit_force_angle != null) {
            message.attackee_hit_force_angle = data.attackee_hit_force_angle;
        }
        if (data.hit_dir != null) {
            message.hit_dir = dependency_2.Vector.fromObject(data.hit_dir);
        }
        if (data.attackee_hit_entity_angle != null) {
            message.attackee_hit_entity_angle = data.attackee_hit_entity_angle;
        }
        if (data.hit_box_index != null) {
            message.hit_box_index = data.hit_box_index;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.hit_collider_type != null) {
            data.hit_collider_type = this.hit_collider_type;
        }
        if (this.hit_point != null) {
            data.hit_point = this.hit_point.toObject();
        }
        if (this.attackee_hit_force_angle != null) {
            data.attackee_hit_force_angle = this.attackee_hit_force_angle;
        }
        if (this.hit_dir != null) {
            data.hit_dir = this.hit_dir.toObject();
        }
        if (this.attackee_hit_entity_angle != null) {
            data.attackee_hit_entity_angle = this.attackee_hit_entity_angle;
        }
        if (this.hit_box_index != null) {
            data.hit_box_index = this.hit_box_index;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.hit_collider_type != dependency_1.HitColliderType.HIT_COLLIDER_TYPE_INVALID)
            writer.writeEnum(8, this.hit_collider_type);
        if (this.has_hit_point)
            writer.writeMessage(7, this.hit_point, () => this.hit_point.serialize(writer));
        if (this.attackee_hit_force_angle != 0)
            writer.writeFloat(2, this.attackee_hit_force_angle);
        if (this.has_hit_dir)
            writer.writeMessage(13, this.hit_dir, () => this.hit_dir.serialize(writer));
        if (this.attackee_hit_entity_angle != 0)
            writer.writeFloat(15, this.attackee_hit_entity_angle);
        if (this.hit_box_index != 0)
            writer.writeInt32(4, this.hit_box_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HitCollision();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.hit_collider_type = reader.readEnum();
                    break;
                case 7:
                    reader.readMessage(message.hit_point, () => message.hit_point = dependency_2.Vector.deserialize(reader));
                    break;
                case 2:
                    message.attackee_hit_force_angle = reader.readFloat();
                    break;
                case 13:
                    reader.readMessage(message.hit_dir, () => message.hit_dir = dependency_2.Vector.deserialize(reader));
                    break;
                case 15:
                    message.attackee_hit_entity_angle = reader.readFloat();
                    break;
                case 4:
                    message.hit_box_index = reader.readInt32();
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
        return HitCollision.deserialize(bytes);
    }
}
exports.HitCollision = HitCollision;
_HitCollision_one_of_decls = new WeakMap();
