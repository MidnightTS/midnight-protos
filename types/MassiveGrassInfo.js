"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MassiveGrassInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassiveGrassInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MassiveGrassInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class MassiveGrassInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MassiveGrassInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MassiveGrassInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("center" in data && data.center != undefined) {
                this.center = data.center;
            }
            if ("size" in data && data.size != undefined) {
                this.size = data.size;
            }
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get center() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 2);
    }
    set center(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_center() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get size() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 3);
    }
    set size(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_size() {
        return pb_1.Message.getField(this, 3) != null;
    }
    static fromObject(data) {
        const message = new MassiveGrassInfo({});
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.center != null) {
            message.center = dependency_1.Vector.fromObject(data.center);
        }
        if (data.size != null) {
            message.size = dependency_1.Vector.fromObject(data.size);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.center != null) {
            data.center = this.center.toObject();
        }
        if (this.size != null) {
            data.size = this.size.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id != 0)
            writer.writeUint32(1, this.id);
        if (this.has_center)
            writer.writeMessage(2, this.center, () => this.center.serialize(writer));
        if (this.has_size)
            writer.writeMessage(3, this.size, () => this.size.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MassiveGrassInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.id = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.center, () => message.center = dependency_1.Vector.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.size, () => message.size = dependency_1.Vector.deserialize(reader));
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
        return MassiveGrassInfo.deserialize(bytes);
    }
}
exports.MassiveGrassInfo = MassiveGrassInfo;
_MassiveGrassInfo_one_of_decls = new WeakMap();