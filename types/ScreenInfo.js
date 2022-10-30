"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScreenInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScreenInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ScreenInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ScreenInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ScreenInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("live_id" in data && data.live_id != undefined) {
                this.live_id = data.live_id;
            }
            if ("projector_entity_id" in data && data.projector_entity_id != undefined) {
                this.projector_entity_id = data.projector_entity_id;
            }
        }
    }
    get live_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set live_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get projector_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set projector_entity_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new ScreenInfo({});
        if (data.live_id != null) {
            message.live_id = data.live_id;
        }
        if (data.projector_entity_id != null) {
            message.projector_entity_id = data.projector_entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.live_id != null) {
            data.live_id = this.live_id;
        }
        if (this.projector_entity_id != null) {
            data.projector_entity_id = this.projector_entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.live_id != 0)
            writer.writeUint32(1, this.live_id);
        if (this.projector_entity_id != 0)
            writer.writeUint32(2, this.projector_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScreenInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.live_id = reader.readUint32();
                    break;
                case 2:
                    message.projector_entity_id = reader.readUint32();
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
        return ScreenInfo.deserialize(bytes);
    }
}
exports.ScreenInfo = ScreenInfo;
_ScreenInfo_one_of_decls = new WeakMap();