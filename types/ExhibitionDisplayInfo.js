"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ExhibitionDisplayInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhibitionDisplayInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ExhibitionDisplayInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ExhibitionDisplayInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ExhibitionDisplayInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ExhibitionDisplayInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("param" in data && data.param != undefined) {
                this.param = data.param;
            }
            if ("detail_param" in data && data.detail_param != undefined) {
                this.detail_param = data.detail_param;
            }
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get param() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set param(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get detail_param() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set detail_param(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new ExhibitionDisplayInfo({});
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.param != null) {
            message.param = data.param;
        }
        if (data.detail_param != null) {
            message.detail_param = data.detail_param;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.param != null) {
            data.param = this.param;
        }
        if (this.detail_param != null) {
            data.detail_param = this.detail_param;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id != 0)
            writer.writeUint32(1, this.id);
        if (this.param != 0)
            writer.writeUint32(2, this.param);
        if (this.detail_param != 0)
            writer.writeUint32(3, this.detail_param);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExhibitionDisplayInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readUint32();
                    break;
                case 2:
                    message.param = reader.readUint32();
                    break;
                case 3:
                    message.detail_param = reader.readUint32();
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
        return ExhibitionDisplayInfo.deserialize(bytes);
    }
}
exports.ExhibitionDisplayInfo = ExhibitionDisplayInfo;
_ExhibitionDisplayInfo_one_of_decls = new WeakMap();