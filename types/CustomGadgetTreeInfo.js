"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CustomGadgetTreeInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGadgetTreeInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CustomGadgetTreeInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./CustomCommonNodeInfo");
const pb_1 = require("google-protobuf");
class CustomGadgetTreeInfo extends pb_1.Message {
    constructor(data) {
        super();
        _CustomGadgetTreeInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _CustomGadgetTreeInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("node_list" in data && data.node_list != undefined) {
                this.node_list = data.node_list;
            }
        }
    }
    get node_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.CustomCommonNodeInfo, 1);
    }
    set node_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data) {
        const message = new CustomGadgetTreeInfo({});
        if (data.node_list != null) {
            message.node_list = data.node_list.map(item => dependency_1.CustomCommonNodeInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.node_list != null) {
            data.node_list = this.node_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.node_list.length)
            writer.writeRepeatedMessage(1, this.node_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CustomGadgetTreeInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.node_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.CustomCommonNodeInfo.deserialize(reader), dependency_1.CustomCommonNodeInfo));
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
        return CustomGadgetTreeInfo.deserialize(bytes);
    }
}
exports.CustomGadgetTreeInfo = CustomGadgetTreeInfo;
_CustomGadgetTreeInfo_one_of_decls = new WeakMap();
