"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GalleryPreStartNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryPreStartNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GalleryPreStartNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GalleryPreStartNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GalleryPreStartNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GalleryPreStartNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("gallery_id" in data && data.gallery_id != undefined) {
                this.gallery_id = data.gallery_id;
            }
            if ("pre_start_end_time" in data && data.pre_start_end_time != undefined) {
                this.pre_start_end_time = data.pre_start_end_time;
            }
        }
    }
    get gallery_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set gallery_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get pre_start_end_time() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set pre_start_end_time(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new GalleryPreStartNotify({});
        if (data.gallery_id != null) {
            message.gallery_id = data.gallery_id;
        }
        if (data.pre_start_end_time != null) {
            message.pre_start_end_time = data.pre_start_end_time;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.gallery_id != null) {
            data.gallery_id = this.gallery_id;
        }
        if (this.pre_start_end_time != null) {
            data.pre_start_end_time = this.pre_start_end_time;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.gallery_id != 0)
            writer.writeUint32(10, this.gallery_id);
        if (this.pre_start_end_time != 0)
            writer.writeUint32(9, this.pre_start_end_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GalleryPreStartNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.gallery_id = reader.readUint32();
                    break;
                case 9:
                    message.pre_start_end_time = reader.readUint32();
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
        return GalleryPreStartNotify.deserialize(bytes);
    }
}
exports.GalleryPreStartNotify = GalleryPreStartNotify;
_GalleryPreStartNotify_one_of_decls = new WeakMap();
