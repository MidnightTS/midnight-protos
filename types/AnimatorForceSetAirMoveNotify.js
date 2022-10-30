"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AnimatorForceSetAirMoveNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatorForceSetAirMoveNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AnimatorForceSetAirMoveNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ForwardType");
const pb_1 = require("google-protobuf");
class AnimatorForceSetAirMoveNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AnimatorForceSetAirMoveNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AnimatorForceSetAirMoveNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("in_air_move" in data && data.in_air_move != undefined) {
                this.in_air_move = data.in_air_move;
            }
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get in_air_move() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set in_air_move(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 9, dependency_1.ForwardType.FORWARD_TYPE_LOCAL);
    }
    set forward_type(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new AnimatorForceSetAirMoveNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.in_air_move != null) {
            message.in_air_move = data.in_air_move;
        }
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.in_air_move != null) {
            data.in_air_move = this.in_air_move;
        }
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(14, this.entity_id);
        if (this.in_air_move != false)
            writer.writeBool(13, this.in_air_move);
        if (this.forward_type != dependency_1.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(9, this.forward_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AnimatorForceSetAirMoveNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.entity_id = reader.readUint32();
                    break;
                case 13:
                    message.in_air_move = reader.readBool();
                    break;
                case 9:
                    message.forward_type = reader.readEnum();
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
        return AnimatorForceSetAirMoveNotify.deserialize(bytes);
    }
}
exports.AnimatorForceSetAirMoveNotify = AnimatorForceSetAirMoveNotify;
_AnimatorForceSetAirMoveNotify_one_of_decls = new WeakMap();
