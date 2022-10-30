"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ForceDragAvatarNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceDragAvatarNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ForceDragAvatarNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MotionInfo");
const pb_1 = require("google-protobuf");
class ForceDragAvatarNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ForceDragAvatarNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ForceDragAvatarNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_time" in data && data.scene_time != undefined) {
                this.scene_time = data.scene_time;
            }
            if ("delta_time_ms" in data && data.delta_time_ms != undefined) {
                this.delta_time_ms = data.delta_time_ms;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("motion_info" in data && data.motion_info != undefined) {
                this.motion_info = data.motion_info;
            }
            if ("is_first_valid" in data && data.is_first_valid != undefined) {
                this.is_first_valid = data.is_first_valid;
            }
            if ("last_move_time_ms" in data && data.last_move_time_ms != undefined) {
                this.last_move_time_ms = data.last_move_time_ms;
            }
        }
    }
    get scene_time() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set scene_time(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get delta_time_ms() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set delta_time_ms(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get motion_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.MotionInfo, 10);
    }
    set motion_info(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_motion_info() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get is_first_valid() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_first_valid(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get last_move_time_ms() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set last_move_time_ms(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new ForceDragAvatarNotify({});
        if (data.scene_time != null) {
            message.scene_time = data.scene_time;
        }
        if (data.delta_time_ms != null) {
            message.delta_time_ms = data.delta_time_ms;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.motion_info != null) {
            message.motion_info = dependency_1.MotionInfo.fromObject(data.motion_info);
        }
        if (data.is_first_valid != null) {
            message.is_first_valid = data.is_first_valid;
        }
        if (data.last_move_time_ms != null) {
            message.last_move_time_ms = data.last_move_time_ms;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.scene_time != null) {
            data.scene_time = this.scene_time;
        }
        if (this.delta_time_ms != null) {
            data.delta_time_ms = this.delta_time_ms;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.motion_info != null) {
            data.motion_info = this.motion_info.toObject();
        }
        if (this.is_first_valid != null) {
            data.is_first_valid = this.is_first_valid;
        }
        if (this.last_move_time_ms != null) {
            data.last_move_time_ms = this.last_move_time_ms;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_time != 0)
            writer.writeUint32(3, this.scene_time);
        if (this.delta_time_ms != 0)
            writer.writeUint64(1, this.delta_time_ms);
        if (this.entity_id != 0)
            writer.writeUint32(2, this.entity_id);
        if (this.has_motion_info)
            writer.writeMessage(10, this.motion_info, () => this.motion_info.serialize(writer));
        if (this.is_first_valid != false)
            writer.writeBool(8, this.is_first_valid);
        if (this.last_move_time_ms != 0)
            writer.writeUint64(12, this.last_move_time_ms);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ForceDragAvatarNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.scene_time = reader.readUint32();
                    break;
                case 1:
                    message.delta_time_ms = reader.readUint64();
                    break;
                case 2:
                    message.entity_id = reader.readUint32();
                    break;
                case 10:
                    reader.readMessage(message.motion_info, () => message.motion_info = dependency_1.MotionInfo.deserialize(reader));
                    break;
                case 8:
                    message.is_first_valid = reader.readBool();
                    break;
                case 12:
                    message.last_move_time_ms = reader.readUint64();
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
        return ForceDragAvatarNotify.deserialize(bytes);
    }
}
exports.ForceDragAvatarNotify = ForceDragAvatarNotify;
_ForceDragAvatarNotify_one_of_decls = new WeakMap();