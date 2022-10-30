"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryBounceConjuringInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryBounceConjuringInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryBounceConjuringInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneGalleryBounceConjuringInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryBounceConjuringInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneGalleryBounceConjuringInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("total_destroyed_machine_count" in data && data.total_destroyed_machine_count != undefined) {
                this.total_destroyed_machine_count = data.total_destroyed_machine_count;
            }
            if ("total_score" in data && data.total_score != undefined) {
                this.total_score = data.total_score;
            }
        }
    }
    get total_destroyed_machine_count() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set total_destroyed_machine_count(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get total_score() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set total_score(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryBounceConjuringInfo({});
        if (data.total_destroyed_machine_count != null) {
            message.total_destroyed_machine_count = data.total_destroyed_machine_count;
        }
        if (data.total_score != null) {
            message.total_score = data.total_score;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.total_destroyed_machine_count != null) {
            data.total_destroyed_machine_count = this.total_destroyed_machine_count;
        }
        if (this.total_score != null) {
            data.total_score = this.total_score;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.total_destroyed_machine_count != 0)
            writer.writeUint32(4, this.total_destroyed_machine_count);
        if (this.total_score != 0)
            writer.writeUint32(6, this.total_score);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryBounceConjuringInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.total_destroyed_machine_count = reader.readUint32();
                    break;
                case 6:
                    message.total_score = reader.readUint32();
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
        return SceneGalleryBounceConjuringInfo.deserialize(bytes);
    }
}
exports.SceneGalleryBounceConjuringInfo = SceneGalleryBounceConjuringInfo;
_SceneGalleryBounceConjuringInfo_one_of_decls = new WeakMap();
