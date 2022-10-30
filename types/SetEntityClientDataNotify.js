"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SetEntityClientDataNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEntityClientDataNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SetEntityClientDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./EntityClientData");
const pb_1 = require("google-protobuf");
class SetEntityClientDataNotify extends pb_1.Message {
    constructor(data) {
        super();
        _SetEntityClientDataNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SetEntityClientDataNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("entity_client_data" in data && data.entity_client_data != undefined) {
                this.entity_client_data = data.entity_client_data;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get entity_client_data() {
        return pb_1.Message.getWrapperField(this, dependency_1.EntityClientData, 9);
    }
    set entity_client_data(value) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_entity_client_data() {
        return pb_1.Message.getField(this, 9) != null;
    }
    static fromObject(data) {
        const message = new SetEntityClientDataNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.entity_client_data != null) {
            message.entity_client_data = dependency_1.EntityClientData.fromObject(data.entity_client_data);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.entity_client_data != null) {
            data.entity_client_data = this.entity_client_data.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(14, this.entity_id);
        if (this.has_entity_client_data)
            writer.writeMessage(9, this.entity_client_data, () => this.entity_client_data.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SetEntityClientDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.entity_id = reader.readUint32();
                    break;
                case 9:
                    reader.readMessage(message.entity_client_data, () => message.entity_client_data = dependency_1.EntityClientData.deserialize(reader));
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
        return SetEntityClientDataNotify.deserialize(bytes);
    }
}
exports.SetEntityClientDataNotify = SetEntityClientDataNotify;
_SetEntityClientDataNotify_one_of_decls = new WeakMap();
