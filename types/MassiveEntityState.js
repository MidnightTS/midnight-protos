"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MassiveEntityState_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassiveEntityState = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MassiveEntityState.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MassiveEntityState extends pb_1.Message {
    constructor(data) {
        super();
        _MassiveEntityState_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MassiveEntityState_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_type" in data && data.entity_type != undefined) {
                this.entity_type = data.entity_type;
            }
            if ("obj_id" in data && data.obj_id != undefined) {
                this.obj_id = data.obj_id;
            }
            if ("element_state" in data && data.element_state != undefined) {
                this.element_state = data.element_state;
            }
        }
    }
    get entity_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set entity_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get obj_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set obj_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get element_state() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set element_state(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new MassiveEntityState({});
        if (data.entity_type != null) {
            message.entity_type = data.entity_type;
        }
        if (data.obj_id != null) {
            message.obj_id = data.obj_id;
        }
        if (data.element_state != null) {
            message.element_state = data.element_state;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_type != null) {
            data.entity_type = this.entity_type;
        }
        if (this.obj_id != null) {
            data.obj_id = this.obj_id;
        }
        if (this.element_state != null) {
            data.element_state = this.element_state;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_type != 0)
            writer.writeUint32(1, this.entity_type);
        if (this.obj_id != 0)
            writer.writeInt64(2, this.obj_id);
        if (this.element_state != 0)
            writer.writeUint32(3, this.element_state);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MassiveEntityState();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.entity_type = reader.readUint32();
                    break;
                case 2:
                    message.obj_id = reader.readInt64();
                    break;
                case 3:
                    message.element_state = reader.readUint32();
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
        return MassiveEntityState.deserialize(bytes);
    }
}
exports.MassiveEntityState = MassiveEntityState;
_MassiveEntityState_one_of_decls = new WeakMap();