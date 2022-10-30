"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FurnitureMakeBeHelpedNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeBeHelpedNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FurnitureMakeBeHelpedNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FurnitureMakeBeHelpedData");
const dependency_2 = require("./FurnitureMakeSlot");
const pb_1 = require("google-protobuf");
class FurnitureMakeBeHelpedNotify extends pb_1.Message {
    constructor(data) {
        super();
        _FurnitureMakeBeHelpedNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FurnitureMakeBeHelpedNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("furniture_make_slot" in data && data.furniture_make_slot != undefined) {
                this.furniture_make_slot = data.furniture_make_slot;
            }
            if ("furniture_make_helped_data" in data && data.furniture_make_helped_data != undefined) {
                this.furniture_make_helped_data = data.furniture_make_helped_data;
            }
        }
    }
    get furniture_make_slot() {
        return pb_1.Message.getWrapperField(this, dependency_2.FurnitureMakeSlot, 7);
    }
    set furniture_make_slot(value) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get has_furniture_make_slot() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get furniture_make_helped_data() {
        return pb_1.Message.getWrapperField(this, dependency_1.FurnitureMakeBeHelpedData, 2);
    }
    set furniture_make_helped_data(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_furniture_make_helped_data() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new FurnitureMakeBeHelpedNotify({});
        if (data.furniture_make_slot != null) {
            message.furniture_make_slot = dependency_2.FurnitureMakeSlot.fromObject(data.furniture_make_slot);
        }
        if (data.furniture_make_helped_data != null) {
            message.furniture_make_helped_data = dependency_1.FurnitureMakeBeHelpedData.fromObject(data.furniture_make_helped_data);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.furniture_make_slot != null) {
            data.furniture_make_slot = this.furniture_make_slot.toObject();
        }
        if (this.furniture_make_helped_data != null) {
            data.furniture_make_helped_data = this.furniture_make_helped_data.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_furniture_make_slot)
            writer.writeMessage(7, this.furniture_make_slot, () => this.furniture_make_slot.serialize(writer));
        if (this.has_furniture_make_helped_data)
            writer.writeMessage(2, this.furniture_make_helped_data, () => this.furniture_make_helped_data.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FurnitureMakeBeHelpedNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    reader.readMessage(message.furniture_make_slot, () => message.furniture_make_slot = dependency_2.FurnitureMakeSlot.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.furniture_make_helped_data, () => message.furniture_make_helped_data = dependency_1.FurnitureMakeBeHelpedData.deserialize(reader));
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
        return FurnitureMakeBeHelpedNotify.deserialize(bytes);
    }
}
exports.FurnitureMakeBeHelpedNotify = FurnitureMakeBeHelpedNotify;
_FurnitureMakeBeHelpedNotify_one_of_decls = new WeakMap();