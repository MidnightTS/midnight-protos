"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OfferingInteractRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferingInteractRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: OfferingInteractRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PlayerOfferingData");
const pb_1 = require("google-protobuf");
class OfferingInteractRsp extends pb_1.Message {
    constructor(data) {
        super();
        _OfferingInteractRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _OfferingInteractRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("offering_data" in data && data.offering_data != undefined) {
                this.offering_data = data.offering_data;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get offering_data() {
        return pb_1.Message.getWrapperField(this, dependency_1.PlayerOfferingData, 11);
    }
    set offering_data(value) {
        pb_1.Message.setWrapperField(this, 11, value);
    }
    get has_offering_data() {
        return pb_1.Message.getField(this, 11) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new OfferingInteractRsp({});
        if (data.offering_data != null) {
            message.offering_data = dependency_1.PlayerOfferingData.fromObject(data.offering_data);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.offering_data != null) {
            data.offering_data = this.offering_data.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_offering_data)
            writer.writeMessage(11, this.offering_data, () => this.offering_data.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(12, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OfferingInteractRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    reader.readMessage(message.offering_data, () => message.offering_data = dependency_1.PlayerOfferingData.deserialize(reader));
                    break;
                case 12:
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
        return OfferingInteractRsp.deserialize(bytes);
    }
}
exports.OfferingInteractRsp = OfferingInteractRsp;
_OfferingInteractRsp_one_of_decls = new WeakMap();