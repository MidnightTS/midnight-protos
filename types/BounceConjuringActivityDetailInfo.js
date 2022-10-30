"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BounceConjuringActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BounceConjuringActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BounceConjuringActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./BounceConjuringChapterInfo");
const pb_1 = require("google-protobuf");
class BounceConjuringActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _BounceConjuringActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _BounceConjuringActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("chapter_info_list" in data && data.chapter_info_list != undefined) {
                this.chapter_info_list = data.chapter_info_list;
            }
            if ("is_content_closed" in data && data.is_content_closed != undefined) {
                this.is_content_closed = data.is_content_closed;
            }
            if ("content_close_time" in data && data.content_close_time != undefined) {
                this.content_close_time = data.content_close_time;
            }
        }
    }
    get chapter_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.BounceConjuringChapterInfo, 8);
    }
    set chapter_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get is_content_closed() {
        return pb_1.Message.getFieldWithDefault(this, 12, false);
    }
    set is_content_closed(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get content_close_time() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set content_close_time(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new BounceConjuringActivityDetailInfo({});
        if (data.chapter_info_list != null) {
            message.chapter_info_list = data.chapter_info_list.map(item => dependency_1.BounceConjuringChapterInfo.fromObject(item));
        }
        if (data.is_content_closed != null) {
            message.is_content_closed = data.is_content_closed;
        }
        if (data.content_close_time != null) {
            message.content_close_time = data.content_close_time;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.chapter_info_list != null) {
            data.chapter_info_list = this.chapter_info_list.map((item) => item.toObject());
        }
        if (this.is_content_closed != null) {
            data.is_content_closed = this.is_content_closed;
        }
        if (this.content_close_time != null) {
            data.content_close_time = this.content_close_time;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.chapter_info_list.length)
            writer.writeRepeatedMessage(8, this.chapter_info_list, (item) => item.serialize(writer));
        if (this.is_content_closed != false)
            writer.writeBool(12, this.is_content_closed);
        if (this.content_close_time != 0)
            writer.writeUint32(7, this.content_close_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BounceConjuringActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    reader.readMessage(message.chapter_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.BounceConjuringChapterInfo.deserialize(reader), dependency_1.BounceConjuringChapterInfo));
                    break;
                case 12:
                    message.is_content_closed = reader.readBool();
                    break;
                case 7:
                    message.content_close_time = reader.readUint32();
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
        return BounceConjuringActivityDetailInfo.deserialize(bytes);
    }
}
exports.BounceConjuringActivityDetailInfo = BounceConjuringActivityDetailInfo;
_BounceConjuringActivityDetailInfo_one_of_decls = new WeakMap();
