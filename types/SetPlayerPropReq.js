"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SetPlayerPropReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlayerPropReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SetPlayerPropReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PropValue");
const pb_1 = require("google-protobuf");
class SetPlayerPropReq extends pb_1.Message {
    constructor(data) {
        super();
        _SetPlayerPropReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7], __classPrivateFieldGet(this, _SetPlayerPropReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("prop_list" in data && data.prop_list != undefined) {
                this.prop_list = data.prop_list;
            }
        }
    }
    get prop_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PropValue, 7);
    }
    set prop_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    static fromObject(data) {
        const message = new SetPlayerPropReq({});
        if (data.prop_list != null) {
            message.prop_list = data.prop_list.map(item => dependency_1.PropValue.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.prop_list != null) {
            data.prop_list = this.prop_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.prop_list.length)
            writer.writeRepeatedMessage(7, this.prop_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SetPlayerPropReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    reader.readMessage(message.prop_list, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_1.PropValue.deserialize(reader), dependency_1.PropValue));
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
        return SetPlayerPropReq.deserialize(bytes);
    }
}
exports.SetPlayerPropReq = SetPlayerPropReq;
_SetPlayerPropReq_one_of_decls = new WeakMap();
