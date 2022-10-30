"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Achievement_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Achievement = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Achievement.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Achievement extends pb_1.Message {
    constructor(data) {
        super();
        _Achievement_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Achievement_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("finish_timestamp" in data && data.finish_timestamp != undefined) {
                this.finish_timestamp = data.finish_timestamp;
            }
            if ("status" in data && data.status != undefined) {
                this.status = data.status;
            }
            if ("cur_progress" in data && data.cur_progress != undefined) {
                this.cur_progress = data.cur_progress;
            }
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("total_progress" in data && data.total_progress != undefined) {
                this.total_progress = data.total_progress;
            }
        }
    }
    get finish_timestamp() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set finish_timestamp(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get status() {
        return pb_1.Message.getFieldWithDefault(this, 13, Achievement.Status.STATUS_INVALID);
    }
    set status(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get cur_progress() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set cur_progress(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get total_progress() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set total_progress(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new Achievement({});
        if (data.finish_timestamp != null) {
            message.finish_timestamp = data.finish_timestamp;
        }
        if (data.status != null) {
            message.status = data.status;
        }
        if (data.cur_progress != null) {
            message.cur_progress = data.cur_progress;
        }
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.total_progress != null) {
            message.total_progress = data.total_progress;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.finish_timestamp != null) {
            data.finish_timestamp = this.finish_timestamp;
        }
        if (this.status != null) {
            data.status = this.status;
        }
        if (this.cur_progress != null) {
            data.cur_progress = this.cur_progress;
        }
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.total_progress != null) {
            data.total_progress = this.total_progress;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.finish_timestamp != 0)
            writer.writeUint32(11, this.finish_timestamp);
        if (this.status != Achievement.Status.STATUS_INVALID)
            writer.writeEnum(13, this.status);
        if (this.cur_progress != 0)
            writer.writeUint32(12, this.cur_progress);
        if (this.id != 0)
            writer.writeUint32(14, this.id);
        if (this.total_progress != 0)
            writer.writeUint32(8, this.total_progress);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Achievement();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.finish_timestamp = reader.readUint32();
                    break;
                case 13:
                    message.status = reader.readEnum();
                    break;
                case 12:
                    message.cur_progress = reader.readUint32();
                    break;
                case 14:
                    message.id = reader.readUint32();
                    break;
                case 8:
                    message.total_progress = reader.readUint32();
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
        return Achievement.deserialize(bytes);
    }
}
exports.Achievement = Achievement;
_Achievement_one_of_decls = new WeakMap();
(function (Achievement) {
    let Status;
    (function (Status) {
        Status[Status["STATUS_INVALID"] = 0] = "STATUS_INVALID";
        Status[Status["STATUS_UNFINISHED"] = 1] = "STATUS_UNFINISHED";
        Status[Status["STATUS_FINISHED"] = 2] = "STATUS_FINISHED";
        Status[Status["STATUS_REWARD_TAKEN"] = 3] = "STATUS_REWARD_TAKEN";
    })(Status = Achievement.Status || (Achievement.Status = {}));
})(Achievement = exports.Achievement || (exports.Achievement = {}));
