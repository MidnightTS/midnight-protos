"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomePlantInfoRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePlantInfoRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomePlantInfoRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomePlantFieldData");
const pb_1 = require("google-protobuf");
class HomePlantInfoRsp extends pb_1.Message {
    constructor(data) {
        super();
        _HomePlantInfoRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], __classPrivateFieldGet(this, _HomePlantInfoRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("field_list" in data && data.field_list != undefined) {
                this.field_list = data.field_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get field_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.HomePlantFieldData, 15);
    }
    set field_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    static fromObject(data) {
        const message = new HomePlantInfoRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.field_list != null) {
            message.field_list = data.field_list.map(item => dependency_1.HomePlantFieldData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.field_list != null) {
            data.field_list = this.field_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(7, this.retcode);
        if (this.field_list.length)
            writer.writeRepeatedMessage(15, this.field_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomePlantInfoRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.retcode = reader.readInt32();
                    break;
                case 15:
                    reader.readMessage(message.field_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.HomePlantFieldData.deserialize(reader), dependency_1.HomePlantFieldData));
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
        return HomePlantInfoRsp.deserialize(bytes);
    }
}
exports.HomePlantInfoRsp = HomePlantInfoRsp;
_HomePlantInfoRsp_one_of_decls = new WeakMap();
