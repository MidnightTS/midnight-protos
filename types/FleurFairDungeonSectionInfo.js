"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FleurFairDungeonSectionInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairDungeonSectionInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairDungeonSectionInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class FleurFairDungeonSectionInfo extends pb_1.Message {
    constructor(data) {
        super();
        _FleurFairDungeonSectionInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FleurFairDungeonSectionInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("section_id" in data && data.section_id != undefined) {
                this.section_id = data.section_id;
            }
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
        }
    }
    get section_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set section_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set open_time(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 1, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new FleurFairDungeonSectionInfo({});
        if (data.section_id != null) {
            message.section_id = data.section_id;
        }
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.section_id != null) {
            data.section_id = this.section_id;
        }
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.section_id != 0)
            writer.writeUint32(10, this.section_id);
        if (this.open_time != 0)
            writer.writeUint32(13, this.open_time);
        if (this.is_open != false)
            writer.writeBool(1, this.is_open);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairDungeonSectionInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.section_id = reader.readUint32();
                    break;
                case 13:
                    message.open_time = reader.readUint32();
                    break;
                case 1:
                    message.is_open = reader.readBool();
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
        return FleurFairDungeonSectionInfo.deserialize(bytes);
    }
}
exports.FleurFairDungeonSectionInfo = FleurFairDungeonSectionInfo;
_FleurFairDungeonSectionInfo_one_of_decls = new WeakMap();
