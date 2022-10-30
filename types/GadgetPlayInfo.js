"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GadgetPlayInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetPlayInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GadgetPlayInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./GadgetCrucibleInfo");
const pb_1 = require("google-protobuf");
class GadgetPlayInfo extends pb_1.Message {
    constructor(data) {
        super();
        _GadgetPlayInfo_one_of_decls.set(this, [[21]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _GadgetPlayInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("play_type" in data && data.play_type != undefined) {
                this.play_type = data.play_type;
            }
            if ("duration" in data && data.duration != undefined) {
                this.duration = data.duration;
            }
            if ("progress_stage_list" in data && data.progress_stage_list != undefined) {
                this.progress_stage_list = data.progress_stage_list;
            }
            if ("start_cd" in data && data.start_cd != undefined) {
                this.start_cd = data.start_cd;
            }
            if ("start_time" in data && data.start_time != undefined) {
                this.start_time = data.start_time;
            }
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("crucible_info" in data && data.crucible_info != undefined) {
                this.crucible_info = data.crucible_info;
            }
        }
    }
    get play_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set play_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get duration() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set duration(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get progress_stage_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []);
    }
    set progress_stage_list(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get start_cd() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set start_cd(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get start_time() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set start_time(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set progress(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get crucible_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.GadgetCrucibleInfo, 21);
    }
    set crucible_info(value) {
        pb_1.Message.setOneofWrapperField(this, 21, __classPrivateFieldGet(this, _GadgetPlayInfo_one_of_decls, "f")[0], value);
    }
    get has_crucible_info() {
        return pb_1.Message.getField(this, 21) != null;
    }
    get play_info() {
        const cases = {
            0: "none",
            21: "crucible_info"
        };
        return cases[pb_1.Message.computeOneofCase(this, [21])];
    }
    static fromObject(data) {
        const message = new GadgetPlayInfo({});
        if (data.play_type != null) {
            message.play_type = data.play_type;
        }
        if (data.duration != null) {
            message.duration = data.duration;
        }
        if (data.progress_stage_list != null) {
            message.progress_stage_list = data.progress_stage_list;
        }
        if (data.start_cd != null) {
            message.start_cd = data.start_cd;
        }
        if (data.start_time != null) {
            message.start_time = data.start_time;
        }
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.crucible_info != null) {
            message.crucible_info = dependency_1.GadgetCrucibleInfo.fromObject(data.crucible_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.play_type != null) {
            data.play_type = this.play_type;
        }
        if (this.duration != null) {
            data.duration = this.duration;
        }
        if (this.progress_stage_list != null) {
            data.progress_stage_list = this.progress_stage_list;
        }
        if (this.start_cd != null) {
            data.start_cd = this.start_cd;
        }
        if (this.start_time != null) {
            data.start_time = this.start_time;
        }
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.crucible_info != null) {
            data.crucible_info = this.crucible_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.play_type != 0)
            writer.writeUint32(1, this.play_type);
        if (this.duration != 0)
            writer.writeUint32(2, this.duration);
        if (this.progress_stage_list.length)
            writer.writePackedUint32(3, this.progress_stage_list);
        if (this.start_cd != 0)
            writer.writeUint32(4, this.start_cd);
        if (this.start_time != 0)
            writer.writeUint32(5, this.start_time);
        if (this.progress != 0)
            writer.writeUint32(6, this.progress);
        if (this.has_crucible_info)
            writer.writeMessage(21, this.crucible_info, () => this.crucible_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GadgetPlayInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.play_type = reader.readUint32();
                    break;
                case 2:
                    message.duration = reader.readUint32();
                    break;
                case 3:
                    message.progress_stage_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.start_cd = reader.readUint32();
                    break;
                case 5:
                    message.start_time = reader.readUint32();
                    break;
                case 6:
                    message.progress = reader.readUint32();
                    break;
                case 21:
                    reader.readMessage(message.crucible_info, () => message.crucible_info = dependency_1.GadgetCrucibleInfo.deserialize(reader));
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
        return GadgetPlayInfo.deserialize(bytes);
    }
}
exports.GadgetPlayInfo = GadgetPlayInfo;
_GadgetPlayInfo_one_of_decls = new WeakMap();
