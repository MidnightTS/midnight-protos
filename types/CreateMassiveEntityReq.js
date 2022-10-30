"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CreateMassiveEntityReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMassiveEntityReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CreateMassiveEntityReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ClientMassiveEntity");
const pb_1 = require("google-protobuf");
class CreateMassiveEntityReq extends pb_1.Message {
    constructor(data) {
        super();
        _CreateMassiveEntityReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _CreateMassiveEntityReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("massive_entity_list" in data && data.massive_entity_list != undefined) {
                this.massive_entity_list = data.massive_entity_list;
            }
        }
    }
    get massive_entity_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ClientMassiveEntity, 1);
    }
    set massive_entity_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data) {
        const message = new CreateMassiveEntityReq({});
        if (data.massive_entity_list != null) {
            message.massive_entity_list = data.massive_entity_list.map(item => dependency_1.ClientMassiveEntity.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.massive_entity_list != null) {
            data.massive_entity_list = this.massive_entity_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.massive_entity_list.length)
            writer.writeRepeatedMessage(1, this.massive_entity_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CreateMassiveEntityReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.massive_entity_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.ClientMassiveEntity.deserialize(reader), dependency_1.ClientMassiveEntity));
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
        return CreateMassiveEntityReq.deserialize(bytes);
    }
}
exports.CreateMassiveEntityReq = CreateMassiveEntityReq;
_CreateMassiveEntityReq_one_of_decls = new WeakMap();
