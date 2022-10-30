"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneTransToPointReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTransToPointReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneTransToPointReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneTransToPointReq extends pb_1.Message {
    constructor(data) {
        super();
        _SceneTransToPointReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneTransToPointReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("point_id" in data && data.point_id != undefined) {
                this.point_id = data.point_id;
            }
        }
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get point_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set point_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new SceneTransToPointReq({});
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.point_id != null) {
            message.point_id = data.point_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.point_id != null) {
            data.point_id = this.point_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_id != 0)
            writer.writeUint32(13, this.scene_id);
        if (this.point_id != 0)
            writer.writeUint32(1, this.point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneTransToPointReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.scene_id = reader.readUint32();
                    break;
                case 1:
                    message.point_id = reader.readUint32();
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
        return SceneTransToPointReq.deserialize(bytes);
    }
}
exports.SceneTransToPointReq = SceneTransToPointReq;
_SceneTransToPointReq_one_of_decls = new WeakMap();
