"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DestroyMaterialReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyMaterialReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DestroyMaterialReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MaterialInfo");
const pb_1 = require("google-protobuf");
class DestroyMaterialReq extends pb_1.Message {
    constructor(data) {
        super();
        _DestroyMaterialReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], __classPrivateFieldGet(this, _DestroyMaterialReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("material_list" in data && data.material_list != undefined) {
                this.material_list = data.material_list;
            }
        }
    }
    get material_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MaterialInfo, 5);
    }
    set material_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    static fromObject(data) {
        const message = new DestroyMaterialReq({});
        if (data.material_list != null) {
            message.material_list = data.material_list.map(item => dependency_1.MaterialInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.material_list != null) {
            data.material_list = this.material_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.material_list.length)
            writer.writeRepeatedMessage(5, this.material_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DestroyMaterialReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    reader.readMessage(message.material_list, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_1.MaterialInfo.deserialize(reader), dependency_1.MaterialInfo));
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
        return DestroyMaterialReq.deserialize(bytes);
    }
}
exports.DestroyMaterialReq = DestroyMaterialReq;
_DestroyMaterialReq_one_of_decls = new WeakMap();