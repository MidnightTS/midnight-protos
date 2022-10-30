"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FleurFairFallSettleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairFallSettleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairFallSettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FallSettleInfo");
const pb_1 = require("google-protobuf");
class FleurFairFallSettleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _FleurFairFallSettleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FleurFairFallSettleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("settle_info" in data && data.settle_info != undefined) {
                this.settle_info = data.settle_info;
            }
            if ("is_new_record" in data && data.is_new_record != undefined) {
                this.is_new_record = data.is_new_record;
            }
        }
    }
    get settle_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.FallSettleInfo, 4);
    }
    set settle_info(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_settle_info() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get is_new_record() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set is_new_record(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new FleurFairFallSettleInfo({});
        if (data.settle_info != null) {
            message.settle_info = dependency_1.FallSettleInfo.fromObject(data.settle_info);
        }
        if (data.is_new_record != null) {
            message.is_new_record = data.is_new_record;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.settle_info != null) {
            data.settle_info = this.settle_info.toObject();
        }
        if (this.is_new_record != null) {
            data.is_new_record = this.is_new_record;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_settle_info)
            writer.writeMessage(4, this.settle_info, () => this.settle_info.serialize(writer));
        if (this.is_new_record != false)
            writer.writeBool(10, this.is_new_record);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairFallSettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.settle_info, () => message.settle_info = dependency_1.FallSettleInfo.deserialize(reader));
                    break;
                case 10:
                    message.is_new_record = reader.readBool();
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
        return FleurFairFallSettleInfo.deserialize(bytes);
    }
}
exports.FleurFairFallSettleInfo = FleurFairFallSettleInfo;
_FleurFairFallSettleInfo_one_of_decls = new WeakMap();
