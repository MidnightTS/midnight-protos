"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbilityChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AbilityChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AbilityControlBlock");
const pb_1 = require("google-protobuf");
class AbilityChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AbilityChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AbilityChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("ability_control_block" in data && data.ability_control_block != undefined) {
                this.ability_control_block = data.ability_control_block;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get ability_control_block() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityControlBlock, 15);
    }
    set ability_control_block(value) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_ability_control_block() {
        return pb_1.Message.getField(this, 15) != null;
    }
    static fromObject(data) {
        const message = new AbilityChangeNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.ability_control_block != null) {
            message.ability_control_block = dependency_1.AbilityControlBlock.fromObject(data.ability_control_block);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.ability_control_block != null) {
            data.ability_control_block = this.ability_control_block.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(1, this.entity_id);
        if (this.has_ability_control_block)
            writer.writeMessage(15, this.ability_control_block, () => this.ability_control_block.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AbilityChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.entity_id = reader.readUint32();
                    break;
                case 15:
                    reader.readMessage(message.ability_control_block, () => message.ability_control_block = dependency_1.AbilityControlBlock.deserialize(reader));
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
        return AbilityChangeNotify.deserialize(bytes);
    }
}
exports.AbilityChangeNotify = AbilityChangeNotify;
_AbilityChangeNotify_one_of_decls = new WeakMap();
