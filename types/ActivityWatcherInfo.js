"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActivityWatcherInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatcherInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ActivityWatcherInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ActivityWatcherInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ActivityWatcherInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ActivityWatcherInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_taken_reward" in data && data.is_taken_reward != undefined) {
                this.is_taken_reward = data.is_taken_reward;
            }
            if ("cur_progress" in data && data.cur_progress != undefined) {
                this.cur_progress = data.cur_progress;
            }
            if ("total_progress" in data && data.total_progress != undefined) {
                this.total_progress = data.total_progress;
            }
            if ("watcher_id" in data && data.watcher_id != undefined) {
                this.watcher_id = data.watcher_id;
            }
        }
    }
    get is_taken_reward() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_taken_reward(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get cur_progress() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set cur_progress(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get total_progress() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set total_progress(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get watcher_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set watcher_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new ActivityWatcherInfo({});
        if (data.is_taken_reward != null) {
            message.is_taken_reward = data.is_taken_reward;
        }
        if (data.cur_progress != null) {
            message.cur_progress = data.cur_progress;
        }
        if (data.total_progress != null) {
            message.total_progress = data.total_progress;
        }
        if (data.watcher_id != null) {
            message.watcher_id = data.watcher_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_taken_reward != null) {
            data.is_taken_reward = this.is_taken_reward;
        }
        if (this.cur_progress != null) {
            data.cur_progress = this.cur_progress;
        }
        if (this.total_progress != null) {
            data.total_progress = this.total_progress;
        }
        if (this.watcher_id != null) {
            data.watcher_id = this.watcher_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_taken_reward != false)
            writer.writeBool(8, this.is_taken_reward);
        if (this.cur_progress != 0)
            writer.writeUint32(2, this.cur_progress);
        if (this.total_progress != 0)
            writer.writeUint32(4, this.total_progress);
        if (this.watcher_id != 0)
            writer.writeUint32(5, this.watcher_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActivityWatcherInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.is_taken_reward = reader.readBool();
                    break;
                case 2:
                    message.cur_progress = reader.readUint32();
                    break;
                case 4:
                    message.total_progress = reader.readUint32();
                    break;
                case 5:
                    message.watcher_id = reader.readUint32();
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
        return ActivityWatcherInfo.deserialize(bytes);
    }
}
exports.ActivityWatcherInfo = ActivityWatcherInfo;
_ActivityWatcherInfo_one_of_decls = new WeakMap();
