"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbilityControlBlock_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityControlBlock = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AbilityControlBlock.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AbilityEmbryo");
const pb_1 = require("google-protobuf");
class AbilityControlBlock extends pb_1.Message {
    constructor(data) {
        super();
        _AbilityControlBlock_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _AbilityControlBlock_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ability_embryo_list" in data && data.ability_embryo_list != undefined) {
                this.ability_embryo_list = data.ability_embryo_list;
            }
        }
    }
    get ability_embryo_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.AbilityEmbryo, 1);
    }
    set ability_embryo_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data) {
        const message = new AbilityControlBlock({});
        if (data.ability_embryo_list != null) {
            message.ability_embryo_list = data.ability_embryo_list.map(item => dependency_1.AbilityEmbryo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ability_embryo_list != null) {
            data.ability_embryo_list = this.ability_embryo_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ability_embryo_list.length)
            writer.writeRepeatedMessage(1, this.ability_embryo_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AbilityControlBlock();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.ability_embryo_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.AbilityEmbryo.deserialize(reader), dependency_1.AbilityEmbryo));
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
        return AbilityControlBlock.deserialize(bytes);
    }
}
exports.AbilityControlBlock = AbilityControlBlock;
_AbilityControlBlock_one_of_decls = new WeakMap();