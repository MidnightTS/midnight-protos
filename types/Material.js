"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Material_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Material.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MaterialDeleteInfo");
const pb_1 = require("google-protobuf");
class Material extends pb_1.Message {
    constructor(data) {
        super();
        _Material_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Material_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("count" in data && data.count != undefined) {
                this.count = data.count;
            }
            if ("delete_info" in data && data.delete_info != undefined) {
                this.delete_info = data.delete_info;
            }
        }
    }
    get count() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set count(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get delete_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.MaterialDeleteInfo, 2);
    }
    set delete_info(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_delete_info() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new Material({});
        if (data.count != null) {
            message.count = data.count;
        }
        if (data.delete_info != null) {
            message.delete_info = dependency_1.MaterialDeleteInfo.fromObject(data.delete_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.count != null) {
            data.count = this.count;
        }
        if (this.delete_info != null) {
            data.delete_info = this.delete_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.count != 0)
            writer.writeUint32(1, this.count);
        if (this.has_delete_info)
            writer.writeMessage(2, this.delete_info, () => this.delete_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Material();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.count = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.delete_info, () => message.delete_info = dependency_1.MaterialDeleteInfo.deserialize(reader));
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
        return Material.deserialize(bytes);
    }
}
exports.Material = Material;
_Material_one_of_decls = new WeakMap();