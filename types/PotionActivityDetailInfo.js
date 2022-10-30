"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PotionActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotionActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PotionActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PotionStage");
const pb_1 = require("google-protobuf");
class PotionActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _PotionActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [10], __classPrivateFieldGet(this, _PotionActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_list" in data && data.stage_list != undefined) {
                this.stage_list = data.stage_list;
            }
        }
    }
    get stage_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PotionStage, 10);
    }
    set stage_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 10, value);
    }
    static fromObject(data) {
        const message = new PotionActivityDetailInfo({});
        if (data.stage_list != null) {
            message.stage_list = data.stage_list.map(item => dependency_1.PotionStage.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.stage_list != null) {
            data.stage_list = this.stage_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_list.length)
            writer.writeRepeatedMessage(10, this.stage_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PotionActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    reader.readMessage(message.stage_list, () => pb_1.Message.addToRepeatedWrapperField(message, 10, dependency_1.PotionStage.deserialize(reader), dependency_1.PotionStage));
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
        return PotionActivityDetailInfo.deserialize(bytes);
    }
}
exports.PotionActivityDetailInfo = PotionActivityDetailInfo;
_PotionActivityDetailInfo_one_of_decls = new WeakMap();
