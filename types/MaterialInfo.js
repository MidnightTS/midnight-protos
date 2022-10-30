"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MaterialInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MaterialInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MaterialInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MaterialInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MaterialInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("count" in data && data.count != undefined) {
                this.count = data.count;
            }
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
        }
    }
    get count() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set count(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set guid(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new MaterialInfo({});
        if (data.count != null) {
            message.count = data.count;
        }
        if (data.guid != null) {
            message.guid = data.guid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.count != null) {
            data.count = this.count;
        }
        if (this.guid != null) {
            data.guid = this.guid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.count != 0)
            writer.writeUint32(11, this.count);
        if (this.guid != 0)
            writer.writeUint64(5, this.guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MaterialInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.count = reader.readUint32();
                    break;
                case 5:
                    message.guid = reader.readUint64();
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
        return MaterialInfo.deserialize(bytes);
    }
}
exports.MaterialInfo = MaterialInfo;
_MaterialInfo_one_of_decls = new WeakMap();
