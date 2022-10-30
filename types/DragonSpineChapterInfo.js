"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DragonSpineChapterInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSpineChapterInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DragonSpineChapterInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DragonSpineChapterInfo extends pb_1.Message {
    constructor(data) {
        super();
        _DragonSpineChapterInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DragonSpineChapterInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("chapter_id" in data && data.chapter_id != undefined) {
                this.chapter_id = data.chapter_id;
            }
            if ("finished_mission_num" in data && data.finished_mission_num != undefined) {
                this.finished_mission_num = data.finished_mission_num;
            }
        }
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set progress(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set open_time(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get chapter_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set chapter_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get finished_mission_num() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set finished_mission_num(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new DragonSpineChapterInfo({});
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.chapter_id != null) {
            message.chapter_id = data.chapter_id;
        }
        if (data.finished_mission_num != null) {
            message.finished_mission_num = data.finished_mission_num;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.chapter_id != null) {
            data.chapter_id = this.chapter_id;
        }
        if (this.finished_mission_num != null) {
            data.finished_mission_num = this.finished_mission_num;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.progress != 0)
            writer.writeUint32(14, this.progress);
        if (this.open_time != 0)
            writer.writeUint32(6, this.open_time);
        if (this.is_open != false)
            writer.writeBool(11, this.is_open);
        if (this.chapter_id != 0)
            writer.writeUint32(9, this.chapter_id);
        if (this.finished_mission_num != 0)
            writer.writeUint32(10, this.finished_mission_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DragonSpineChapterInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.progress = reader.readUint32();
                    break;
                case 6:
                    message.open_time = reader.readUint32();
                    break;
                case 11:
                    message.is_open = reader.readBool();
                    break;
                case 9:
                    message.chapter_id = reader.readUint32();
                    break;
                case 10:
                    message.finished_mission_num = reader.readUint32();
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
        return DragonSpineChapterInfo.deserialize(bytes);
    }
}
exports.DragonSpineChapterInfo = DragonSpineChapterInfo;
_DragonSpineChapterInfo_one_of_decls = new WeakMap();