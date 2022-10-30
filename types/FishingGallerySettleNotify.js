"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FishingGallerySettleNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishingGallerySettleNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FishingGallerySettleNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FishingGallerySettleInfo");
const pb_1 = require("google-protobuf");
class FishingGallerySettleNotify extends pb_1.Message {
    constructor(data) {
        super();
        _FishingGallerySettleNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FishingGallerySettleNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("gallery_id" in data && data.gallery_id != undefined) {
                this.gallery_id = data.gallery_id;
            }
            if ("level_id" in data && data.level_id != undefined) {
                this.level_id = data.level_id;
            }
            if ("settle_info" in data && data.settle_info != undefined) {
                this.settle_info = data.settle_info;
            }
        }
    }
    get gallery_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set gallery_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get level_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set level_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get settle_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.FishingGallerySettleInfo, 13);
    }
    set settle_info(value) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get has_settle_info() {
        return pb_1.Message.getField(this, 13) != null;
    }
    static fromObject(data) {
        const message = new FishingGallerySettleNotify({});
        if (data.gallery_id != null) {
            message.gallery_id = data.gallery_id;
        }
        if (data.level_id != null) {
            message.level_id = data.level_id;
        }
        if (data.settle_info != null) {
            message.settle_info = dependency_1.FishingGallerySettleInfo.fromObject(data.settle_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.gallery_id != null) {
            data.gallery_id = this.gallery_id;
        }
        if (this.level_id != null) {
            data.level_id = this.level_id;
        }
        if (this.settle_info != null) {
            data.settle_info = this.settle_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.gallery_id != 0)
            writer.writeUint32(6, this.gallery_id);
        if (this.level_id != 0)
            writer.writeUint32(15, this.level_id);
        if (this.has_settle_info)
            writer.writeMessage(13, this.settle_info, () => this.settle_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FishingGallerySettleNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.gallery_id = reader.readUint32();
                    break;
                case 15:
                    message.level_id = reader.readUint32();
                    break;
                case 13:
                    reader.readMessage(message.settle_info, () => message.settle_info = dependency_1.FishingGallerySettleInfo.deserialize(reader));
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
        return FishingGallerySettleNotify.deserialize(bytes);
    }
}
exports.FishingGallerySettleNotify = FishingGallerySettleNotify;
_FishingGallerySettleNotify_one_of_decls = new WeakMap();