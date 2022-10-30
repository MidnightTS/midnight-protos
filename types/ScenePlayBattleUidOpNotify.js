"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScenePlayBattleUidOpNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayBattleUidOpNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScenePlayBattleUidOpNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ScenePlayBattleUidOpNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ScenePlayBattleUidOpNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9, 6, 15], __classPrivateFieldGet(this, _ScenePlayBattleUidOpNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("op" in data && data.op != undefined) {
                this.op = data.op;
            }
            if ("param_target_list" in data && data.param_target_list != undefined) {
                this.param_target_list = data.param_target_list;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("param_str" in data && data.param_str != undefined) {
                this.param_str = data.param_str;
            }
            if ("uid_list" in data && data.uid_list != undefined) {
                this.uid_list = data.uid_list;
            }
            if ("param_index" in data && data.param_index != undefined) {
                this.param_index = data.param_index;
            }
            if ("play_type" in data && data.play_type != undefined) {
                this.play_type = data.play_type;
            }
            if ("param_duration" in data && data.param_duration != undefined) {
                this.param_duration = data.param_duration;
            }
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
            if ("play_id" in data && data.play_id != undefined) {
                this.play_id = data.play_id;
            }
        }
    }
    get op() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set op(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get param_target_list() {
        return pb_1.Message.getFieldWithDefault(this, 9, []);
    }
    set param_target_list(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get param_str() {
        return pb_1.Message.getFieldWithDefault(this, 3, "");
    }
    set param_str(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 6, []);
    }
    set uid_list(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get param_index() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set param_index(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get play_type() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set play_type(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get param_duration() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set param_duration(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 15, []);
    }
    set param_list(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get play_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set play_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new ScenePlayBattleUidOpNotify({});
        if (data.op != null) {
            message.op = data.op;
        }
        if (data.param_target_list != null) {
            message.param_target_list = data.param_target_list;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.param_str != null) {
            message.param_str = data.param_str;
        }
        if (data.uid_list != null) {
            message.uid_list = data.uid_list;
        }
        if (data.param_index != null) {
            message.param_index = data.param_index;
        }
        if (data.play_type != null) {
            message.play_type = data.play_type;
        }
        if (data.param_duration != null) {
            message.param_duration = data.param_duration;
        }
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        if (data.play_id != null) {
            message.play_id = data.play_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.op != null) {
            data.op = this.op;
        }
        if (this.param_target_list != null) {
            data.param_target_list = this.param_target_list;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.param_str != null) {
            data.param_str = this.param_str;
        }
        if (this.uid_list != null) {
            data.uid_list = this.uid_list;
        }
        if (this.param_index != null) {
            data.param_index = this.param_index;
        }
        if (this.play_type != null) {
            data.play_type = this.play_type;
        }
        if (this.param_duration != null) {
            data.param_duration = this.param_duration;
        }
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        if (this.play_id != null) {
            data.play_id = this.play_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.op != 0)
            writer.writeUint32(7, this.op);
        if (this.param_target_list.length)
            writer.writePackedUint32(9, this.param_target_list);
        if (this.entity_id != 0)
            writer.writeUint32(2, this.entity_id);
        if (this.param_str.length)
            writer.writeString(3, this.param_str);
        if (this.uid_list.length)
            writer.writePackedUint32(6, this.uid_list);
        if (this.param_index != 0)
            writer.writeUint32(11, this.param_index);
        if (this.play_type != 0)
            writer.writeUint32(8, this.play_type);
        if (this.param_duration != 0)
            writer.writeUint32(12, this.param_duration);
        if (this.param_list.length)
            writer.writePackedUint32(15, this.param_list);
        if (this.play_id != 0)
            writer.writeUint32(5, this.play_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScenePlayBattleUidOpNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.op = reader.readUint32();
                    break;
                case 9:
                    message.param_target_list = reader.readPackedUint32();
                    break;
                case 2:
                    message.entity_id = reader.readUint32();
                    break;
                case 3:
                    message.param_str = reader.readString();
                    break;
                case 6:
                    message.uid_list = reader.readPackedUint32();
                    break;
                case 11:
                    message.param_index = reader.readUint32();
                    break;
                case 8:
                    message.play_type = reader.readUint32();
                    break;
                case 12:
                    message.param_duration = reader.readUint32();
                    break;
                case 15:
                    message.param_list = reader.readPackedUint32();
                    break;
                case 5:
                    message.play_id = reader.readUint32();
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
        return ScenePlayBattleUidOpNotify.deserialize(bytes);
    }
}
exports.ScenePlayBattleUidOpNotify = ScenePlayBattleUidOpNotify;
_ScenePlayBattleUidOpNotify_one_of_decls = new WeakMap();