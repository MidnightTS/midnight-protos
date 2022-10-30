"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneEntityMoveReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneEntityMoveReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneEntityMoveReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MotionInfo");
const pb_1 = require("google-protobuf");
class SceneEntityMoveReq extends pb_1.Message {
    constructor(data) {
        super();
        _SceneEntityMoveReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneEntityMoveReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("motion_info" in data && data.motion_info != undefined) {
                this.motion_info = data.motion_info;
            }
            if ("scene_time" in data && data.scene_time != undefined) {
                this.scene_time = data.scene_time;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("reliable_seq" in data && data.reliable_seq != undefined) {
                this.reliable_seq = data.reliable_seq;
            }
        }
    }
    get motion_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.MotionInfo, 7);
    }
    set motion_info(value) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get has_motion_info() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get scene_time() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set scene_time(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get reliable_seq() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set reliable_seq(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new SceneEntityMoveReq({});
        if (data.motion_info != null) {
            message.motion_info = dependency_1.MotionInfo.fromObject(data.motion_info);
        }
        if (data.scene_time != null) {
            message.scene_time = data.scene_time;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.reliable_seq != null) {
            message.reliable_seq = data.reliable_seq;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.motion_info != null) {
            data.motion_info = this.motion_info.toObject();
        }
        if (this.scene_time != null) {
            data.scene_time = this.scene_time;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.reliable_seq != null) {
            data.reliable_seq = this.reliable_seq;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_motion_info)
            writer.writeMessage(7, this.motion_info, () => this.motion_info.serialize(writer));
        if (this.scene_time != 0)
            writer.writeUint32(4, this.scene_time);
        if (this.entity_id != 0)
            writer.writeUint32(8, this.entity_id);
        if (this.reliable_seq != 0)
            writer.writeUint32(15, this.reliable_seq);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneEntityMoveReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    reader.readMessage(message.motion_info, () => message.motion_info = dependency_1.MotionInfo.deserialize(reader));
                    break;
                case 4:
                    message.scene_time = reader.readUint32();
                    break;
                case 8:
                    message.entity_id = reader.readUint32();
                    break;
                case 15:
                    message.reliable_seq = reader.readUint32();
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
        return SceneEntityMoveReq.deserialize(bytes);
    }
}
exports.SceneEntityMoveReq = SceneEntityMoveReq;
_SceneEntityMoveReq_one_of_decls = new WeakMap();