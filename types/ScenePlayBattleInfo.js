"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScenePlayBattleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayBattleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScenePlayBattleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ScenePlayBattleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ScenePlayBattleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _ScenePlayBattleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mode" in data && data.mode != undefined) {
                this.mode = data.mode;
            }
            if ("progress_stage_list" in data && data.progress_stage_list != undefined) {
                this.progress_stage_list = data.progress_stage_list;
            }
            if ("start_time" in data && data.start_time != undefined) {
                this.start_time = data.start_time;
            }
            if ("duration" in data && data.duration != undefined) {
                this.duration = data.duration;
            }
            if ("play_type" in data && data.play_type != undefined) {
                this.play_type = data.play_type;
            }
            if ("play_id" in data && data.play_id != undefined) {
                this.play_id = data.play_id;
            }
            if ("prepare_end_time" in data && data.prepare_end_time != undefined) {
                this.prepare_end_time = data.prepare_end_time;
            }
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("state" in data && data.state != undefined) {
                this.state = data.state;
            }
            if ("type" in data && data.type != undefined) {
                this.type = data.type;
            }
        }
    }
    get mode() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set mode(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get progress_stage_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []);
    }
    set progress_stage_list(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get start_time() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set start_time(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get duration() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set duration(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get play_type() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set play_type(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get play_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set play_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get prepare_end_time() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set prepare_end_time(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set progress(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get state() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set state(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get type() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set type(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new ScenePlayBattleInfo({});
        if (data.mode != null) {
            message.mode = data.mode;
        }
        if (data.progress_stage_list != null) {
            message.progress_stage_list = data.progress_stage_list;
        }
        if (data.start_time != null) {
            message.start_time = data.start_time;
        }
        if (data.duration != null) {
            message.duration = data.duration;
        }
        if (data.play_type != null) {
            message.play_type = data.play_type;
        }
        if (data.play_id != null) {
            message.play_id = data.play_id;
        }
        if (data.prepare_end_time != null) {
            message.prepare_end_time = data.prepare_end_time;
        }
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.state != null) {
            message.state = data.state;
        }
        if (data.type != null) {
            message.type = data.type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.mode != null) {
            data.mode = this.mode;
        }
        if (this.progress_stage_list != null) {
            data.progress_stage_list = this.progress_stage_list;
        }
        if (this.start_time != null) {
            data.start_time = this.start_time;
        }
        if (this.duration != null) {
            data.duration = this.duration;
        }
        if (this.play_type != null) {
            data.play_type = this.play_type;
        }
        if (this.play_id != null) {
            data.play_id = this.play_id;
        }
        if (this.prepare_end_time != null) {
            data.prepare_end_time = this.prepare_end_time;
        }
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.state != null) {
            data.state = this.state;
        }
        if (this.type != null) {
            data.type = this.type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mode != 0)
            writer.writeUint32(4, this.mode);
        if (this.progress_stage_list.length)
            writer.writePackedUint32(3, this.progress_stage_list);
        if (this.start_time != 0)
            writer.writeUint32(10, this.start_time);
        if (this.duration != 0)
            writer.writeUint32(14, this.duration);
        if (this.play_type != 0)
            writer.writeUint32(12, this.play_type);
        if (this.play_id != 0)
            writer.writeUint32(1, this.play_id);
        if (this.prepare_end_time != 0)
            writer.writeUint32(7, this.prepare_end_time);
        if (this.progress != 0)
            writer.writeUint32(11, this.progress);
        if (this.state != 0)
            writer.writeUint32(8, this.state);
        if (this.type != 0)
            writer.writeUint32(9, this.type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScenePlayBattleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.mode = reader.readUint32();
                    break;
                case 3:
                    message.progress_stage_list = reader.readPackedUint32();
                    break;
                case 10:
                    message.start_time = reader.readUint32();
                    break;
                case 14:
                    message.duration = reader.readUint32();
                    break;
                case 12:
                    message.play_type = reader.readUint32();
                    break;
                case 1:
                    message.play_id = reader.readUint32();
                    break;
                case 7:
                    message.prepare_end_time = reader.readUint32();
                    break;
                case 11:
                    message.progress = reader.readUint32();
                    break;
                case 8:
                    message.state = reader.readUint32();
                    break;
                case 9:
                    message.type = reader.readUint32();
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
        return ScenePlayBattleInfo.deserialize(bytes);
    }
}
exports.ScenePlayBattleInfo = ScenePlayBattleInfo;
_ScenePlayBattleInfo_one_of_decls = new WeakMap();
