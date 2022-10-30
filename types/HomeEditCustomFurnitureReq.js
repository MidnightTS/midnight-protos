"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeEditCustomFurnitureReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeEditCustomFurnitureReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeEditCustomFurnitureReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomeCustomFurnitureInfo");
const pb_1 = require("google-protobuf");
class HomeEditCustomFurnitureReq extends pb_1.Message {
    constructor(data) {
        super();
        _HomeEditCustomFurnitureReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeEditCustomFurnitureReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("custom_furniture_info" in data && data.custom_furniture_info != undefined) {
                this.custom_furniture_info = data.custom_furniture_info;
            }
        }
    }
    get custom_furniture_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.HomeCustomFurnitureInfo, 15);
    }
    set custom_furniture_info(value) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_custom_furniture_info() {
        return pb_1.Message.getField(this, 15) != null;
    }
    static fromObject(data) {
        const message = new HomeEditCustomFurnitureReq({});
        if (data.custom_furniture_info != null) {
            message.custom_furniture_info = dependency_1.HomeCustomFurnitureInfo.fromObject(data.custom_furniture_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.custom_furniture_info != null) {
            data.custom_furniture_info = this.custom_furniture_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_custom_furniture_info)
            writer.writeMessage(15, this.custom_furniture_info, () => this.custom_furniture_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeEditCustomFurnitureReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.custom_furniture_info, () => message.custom_furniture_info = dependency_1.HomeCustomFurnitureInfo.deserialize(reader));
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
        return HomeEditCustomFurnitureReq.deserialize(bytes);
    }
}
exports.HomeEditCustomFurnitureReq = HomeEditCustomFurnitureReq;
_HomeEditCustomFurnitureReq_one_of_decls = new WeakMap();
