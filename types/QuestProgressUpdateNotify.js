"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QuestProgressUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestProgressUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QuestProgressUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class QuestProgressUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _QuestProgressUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6, 13], __classPrivateFieldGet(this, _QuestProgressUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("quest_id" in data && data.quest_id != undefined) {
                this.quest_id = data.quest_id;
            }
            if ("fail_progress_list" in data && data.fail_progress_list != undefined) {
                this.fail_progress_list = data.fail_progress_list;
            }
            if ("finish_progress_list" in data && data.finish_progress_list != undefined) {
                this.finish_progress_list = data.finish_progress_list;
            }
        }
    }
    get quest_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set quest_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get fail_progress_list() {
        return pb_1.Message.getFieldWithDefault(this, 6, []);
    }
    set fail_progress_list(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get finish_progress_list() {
        return pb_1.Message.getFieldWithDefault(this, 13, []);
    }
    set finish_progress_list(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new QuestProgressUpdateNotify({});
        if (data.quest_id != null) {
            message.quest_id = data.quest_id;
        }
        if (data.fail_progress_list != null) {
            message.fail_progress_list = data.fail_progress_list;
        }
        if (data.finish_progress_list != null) {
            message.finish_progress_list = data.finish_progress_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.quest_id != null) {
            data.quest_id = this.quest_id;
        }
        if (this.fail_progress_list != null) {
            data.fail_progress_list = this.fail_progress_list;
        }
        if (this.finish_progress_list != null) {
            data.finish_progress_list = this.finish_progress_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.quest_id != 0)
            writer.writeUint32(12, this.quest_id);
        if (this.fail_progress_list.length)
            writer.writePackedUint32(6, this.fail_progress_list);
        if (this.finish_progress_list.length)
            writer.writePackedUint32(13, this.finish_progress_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuestProgressUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.quest_id = reader.readUint32();
                    break;
                case 6:
                    message.fail_progress_list = reader.readPackedUint32();
                    break;
                case 13:
                    message.finish_progress_list = reader.readPackedUint32();
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
        return QuestProgressUpdateNotify.deserialize(bytes);
    }
}
exports.QuestProgressUpdateNotify = QuestProgressUpdateNotify;
_QuestProgressUpdateNotify_one_of_decls = new WeakMap();
