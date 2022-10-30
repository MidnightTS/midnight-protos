"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CheckSegmentCRCReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckSegmentCRCReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CheckSegmentCRCReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SegmentCRCInfo");
const pb_1 = require("google-protobuf");
class CheckSegmentCRCReq extends pb_1.Message {
    constructor(data) {
        super();
        _CheckSegmentCRCReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], __classPrivateFieldGet(this, _CheckSegmentCRCReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("info_list" in data && data.info_list != undefined) {
                this.info_list = data.info_list;
            }
        }
    }
    get info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.SegmentCRCInfo, 1);
    }
    set info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data) {
        const message = new CheckSegmentCRCReq({});
        if (data.info_list != null) {
            message.info_list = data.info_list.map(item => dependency_1.SegmentCRCInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.info_list != null) {
            data.info_list = this.info_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.info_list.length)
            writer.writeRepeatedMessage(1, this.info_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CheckSegmentCRCReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.SegmentCRCInfo.deserialize(reader), dependency_1.SegmentCRCInfo));
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
        return CheckSegmentCRCReq.deserialize(bytes);
    }
}
exports.CheckSegmentCRCReq = CheckSegmentCRCReq;
_CheckSegmentCRCReq_one_of_decls = new WeakMap();
