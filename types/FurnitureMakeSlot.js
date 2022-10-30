"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FurnitureMakeSlot_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeSlot = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FurnitureMakeSlot.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FurnitureMakeData");
const pb_1 = require("google-protobuf");
class FurnitureMakeSlot extends pb_1.Message {
    constructor(data) {
        super();
        _FurnitureMakeSlot_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14], __classPrivateFieldGet(this, _FurnitureMakeSlot_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("furniture_make_data_list" in data && data.furniture_make_data_list != undefined) {
                this.furniture_make_data_list = data.furniture_make_data_list;
            }
        }
    }
    get furniture_make_data_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FurnitureMakeData, 14);
    }
    set furniture_make_data_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data) {
        const message = new FurnitureMakeSlot({});
        if (data.furniture_make_data_list != null) {
            message.furniture_make_data_list = data.furniture_make_data_list.map(item => dependency_1.FurnitureMakeData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.furniture_make_data_list != null) {
            data.furniture_make_data_list = this.furniture_make_data_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.furniture_make_data_list.length)
            writer.writeRepeatedMessage(14, this.furniture_make_data_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FurnitureMakeSlot();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.furniture_make_data_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.FurnitureMakeData.deserialize(reader), dependency_1.FurnitureMakeData));
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
        return FurnitureMakeSlot.deserialize(bytes);
    }
}
exports.FurnitureMakeSlot = FurnitureMakeSlot;
_FurnitureMakeSlot_one_of_decls = new WeakMap();