"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneEntityDrownRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneEntityDrownRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneEntityDrownRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneEntityDrownRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SceneEntityDrownRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneEntityDrownRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new SceneEntityDrownRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(8, this.retcode);
        if (this.entity_id != 0)
            writer.writeUint32(11, this.entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneEntityDrownRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.retcode = reader.readInt32();
                    break;
                case 11:
                    message.entity_id = reader.readUint32();
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
        return SceneEntityDrownRsp.deserialize(bytes);
    }
}
exports.SceneEntityDrownRsp = SceneEntityDrownRsp;
_SceneEntityDrownRsp_one_of_decls = new WeakMap();