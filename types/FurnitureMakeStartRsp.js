"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FurnitureMakeStartRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeStartRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FurnitureMakeStartRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FurnitureMakeSlot");
const pb_1 = require("google-protobuf");
class FurnitureMakeStartRsp extends pb_1.Message {
    constructor(data) {
        super();
        _FurnitureMakeStartRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FurnitureMakeStartRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("furniture_make_slot" in data && data.furniture_make_slot != undefined) {
                this.furniture_make_slot = data.furniture_make_slot;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get furniture_make_slot() {
        return pb_1.Message.getWrapperField(this, dependency_1.FurnitureMakeSlot, 5);
    }
    set furniture_make_slot(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_furniture_make_slot() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new FurnitureMakeStartRsp({});
        if (data.furniture_make_slot != null) {
            message.furniture_make_slot = dependency_1.FurnitureMakeSlot.fromObject(data.furniture_make_slot);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.furniture_make_slot != null) {
            data.furniture_make_slot = this.furniture_make_slot.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_furniture_make_slot)
            writer.writeMessage(5, this.furniture_make_slot, () => this.furniture_make_slot.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(8, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FurnitureMakeStartRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    reader.readMessage(message.furniture_make_slot, () => message.furniture_make_slot = dependency_1.FurnitureMakeSlot.deserialize(reader));
                    break;
                case 8:
                    message.retcode = reader.readInt32();
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
        return FurnitureMakeStartRsp.deserialize(bytes);
    }
}
exports.FurnitureMakeStartRsp = FurnitureMakeStartRsp;
_FurnitureMakeStartRsp_one_of_decls = new WeakMap();
