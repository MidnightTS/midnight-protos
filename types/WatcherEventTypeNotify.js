"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WatcherEventTypeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatcherEventTypeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WatcherEventTypeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class WatcherEventTypeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _WatcherEventTypeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14], __classPrivateFieldGet(this, _WatcherEventTypeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
            if ("add_progress" in data && data.add_progress != undefined) {
                this.add_progress = data.add_progress;
            }
            if ("watcher_trigger_type" in data && data.watcher_trigger_type != undefined) {
                this.watcher_trigger_type = data.watcher_trigger_type;
            }
        }
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 14, []);
    }
    set param_list(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get add_progress() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set add_progress(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get watcher_trigger_type() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set watcher_trigger_type(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new WatcherEventTypeNotify({});
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        if (data.add_progress != null) {
            message.add_progress = data.add_progress;
        }
        if (data.watcher_trigger_type != null) {
            message.watcher_trigger_type = data.watcher_trigger_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        if (this.add_progress != null) {
            data.add_progress = this.add_progress;
        }
        if (this.watcher_trigger_type != null) {
            data.watcher_trigger_type = this.watcher_trigger_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.param_list.length)
            writer.writePackedUint32(14, this.param_list);
        if (this.add_progress != 0)
            writer.writeUint32(15, this.add_progress);
        if (this.watcher_trigger_type != 0)
            writer.writeUint32(11, this.watcher_trigger_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WatcherEventTypeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.param_list = reader.readPackedUint32();
                    break;
                case 15:
                    message.add_progress = reader.readUint32();
                    break;
                case 11:
                    message.watcher_trigger_type = reader.readUint32();
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
        return WatcherEventTypeNotify.deserialize(bytes);
    }
}
exports.WatcherEventTypeNotify = WatcherEventTypeNotify;
_WatcherEventTypeNotify_one_of_decls = new WeakMap();