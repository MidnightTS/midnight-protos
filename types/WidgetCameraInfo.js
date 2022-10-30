"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WidgetCameraInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCameraInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WidgetCameraInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class WidgetCameraInfo extends pb_1.Message {
    constructor(data) {
        super();
        _WidgetCameraInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _WidgetCameraInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("target_entity_id" in data && data.target_entity_id != undefined) {
                this.target_entity_id = data.target_entity_id;
            }
        }
    }
    get target_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set target_entity_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new WidgetCameraInfo({});
        if (data.target_entity_id != null) {
            message.target_entity_id = data.target_entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.target_entity_id != null) {
            data.target_entity_id = this.target_entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.target_entity_id != 0)
            writer.writeUint32(4, this.target_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WidgetCameraInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.target_entity_id = reader.readUint32();
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
        return WidgetCameraInfo.deserialize(bytes);
    }
}
exports.WidgetCameraInfo = WidgetCameraInfo;
_WidgetCameraInfo_one_of_decls = new WeakMap();
