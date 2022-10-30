"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FurnitureMakeHelpRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeHelpRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FurnitureMakeHelpRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./FurnitureMakeHelpData");
const pb_1 = require("google-protobuf");
class FurnitureMakeHelpRsp extends pb_1.Message {
    constructor(data) {
        super();
        _FurnitureMakeHelpRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _FurnitureMakeHelpRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("help_data_list" in data && data.help_data_list != undefined) {
                this.help_data_list = data.help_data_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get help_data_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.FurnitureMakeHelpData, 6);
    }
    set help_data_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    static fromObject(data) {
        const message = new FurnitureMakeHelpRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.help_data_list != null) {
            message.help_data_list = data.help_data_list.map(item => dependency_1.FurnitureMakeHelpData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.help_data_list != null) {
            data.help_data_list = this.help_data_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(10, this.retcode);
        if (this.help_data_list.length)
            writer.writeRepeatedMessage(6, this.help_data_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FurnitureMakeHelpRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.retcode = reader.readInt32();
                    break;
                case 6:
                    reader.readMessage(message.help_data_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_1.FurnitureMakeHelpData.deserialize(reader), dependency_1.FurnitureMakeHelpData));
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
        return FurnitureMakeHelpRsp.deserialize(bytes);
    }
}
exports.FurnitureMakeHelpRsp = FurnitureMakeHelpRsp;
_FurnitureMakeHelpRsp_one_of_decls = new WeakMap();
