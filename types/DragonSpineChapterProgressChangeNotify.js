"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DragonSpineChapterProgressChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSpineChapterProgressChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DragonSpineChapterProgressChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DragonSpineChapterProgressChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DragonSpineChapterProgressChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DragonSpineChapterProgressChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("chapter_id" in data && data.chapter_id != undefined) {
                this.chapter_id = data.chapter_id;
            }
            if ("cur_progress" in data && data.cur_progress != undefined) {
                this.cur_progress = data.cur_progress;
            }
        }
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get chapter_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set chapter_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get cur_progress() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set cur_progress(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new DragonSpineChapterProgressChangeNotify({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.chapter_id != null) {
            message.chapter_id = data.chapter_id;
        }
        if (data.cur_progress != null) {
            message.cur_progress = data.cur_progress;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.chapter_id != null) {
            data.chapter_id = this.chapter_id;
        }
        if (this.cur_progress != null) {
            data.cur_progress = this.cur_progress;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(7, this.schedule_id);
        if (this.chapter_id != 0)
            writer.writeUint32(11, this.chapter_id);
        if (this.cur_progress != 0)
            writer.writeUint32(5, this.cur_progress);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DragonSpineChapterProgressChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.schedule_id = reader.readUint32();
                    break;
                case 11:
                    message.chapter_id = reader.readUint32();
                    break;
                case 5:
                    message.cur_progress = reader.readUint32();
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
        return DragonSpineChapterProgressChangeNotify.deserialize(bytes);
    }
}
exports.DragonSpineChapterProgressChangeNotify = DragonSpineChapterProgressChangeNotify;
_DragonSpineChapterProgressChangeNotify_one_of_decls = new WeakMap();
