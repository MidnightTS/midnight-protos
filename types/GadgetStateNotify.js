"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GadgetStateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetStateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GadgetStateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GadgetStateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GadgetStateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GadgetStateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("gadget_entity_id" in data && data.gadget_entity_id != undefined) {
                this.gadget_entity_id = data.gadget_entity_id;
            }
            if ("gadget_state" in data && data.gadget_state != undefined) {
                this.gadget_state = data.gadget_state;
            }
            if ("is_enable_interact" in data && data.is_enable_interact != undefined) {
                this.is_enable_interact = data.is_enable_interact;
            }
        }
    }
    get gadget_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set gadget_entity_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get gadget_state() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set gadget_state(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get is_enable_interact() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set is_enable_interact(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new GadgetStateNotify({});
        if (data.gadget_entity_id != null) {
            message.gadget_entity_id = data.gadget_entity_id;
        }
        if (data.gadget_state != null) {
            message.gadget_state = data.gadget_state;
        }
        if (data.is_enable_interact != null) {
            message.is_enable_interact = data.is_enable_interact;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.gadget_entity_id != null) {
            data.gadget_entity_id = this.gadget_entity_id;
        }
        if (this.gadget_state != null) {
            data.gadget_state = this.gadget_state;
        }
        if (this.is_enable_interact != null) {
            data.is_enable_interact = this.is_enable_interact;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.gadget_entity_id != 0)
            writer.writeUint32(5, this.gadget_entity_id);
        if (this.gadget_state != 0)
            writer.writeUint32(3, this.gadget_state);
        if (this.is_enable_interact != false)
            writer.writeBool(11, this.is_enable_interact);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GadgetStateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.gadget_entity_id = reader.readUint32();
                    break;
                case 3:
                    message.gadget_state = reader.readUint32();
                    break;
                case 11:
                    message.is_enable_interact = reader.readBool();
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
        return GadgetStateNotify.deserialize(bytes);
    }
}
exports.GadgetStateNotify = GadgetStateNotify;
_GadgetStateNotify_one_of_decls = new WeakMap();