"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CancelCityReputationRequestReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelCityReputationRequestReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CancelCityReputationRequestReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CancelCityReputationRequestReq extends pb_1.Message {
    constructor(data) {
        super();
        _CancelCityReputationRequestReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CancelCityReputationRequestReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("request_id" in data && data.request_id != undefined) {
                this.request_id = data.request_id;
            }
            if ("city_id" in data && data.city_id != undefined) {
                this.city_id = data.city_id;
            }
        }
    }
    get request_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set request_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get city_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set city_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new CancelCityReputationRequestReq({});
        if (data.request_id != null) {
            message.request_id = data.request_id;
        }
        if (data.city_id != null) {
            message.city_id = data.city_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.request_id != null) {
            data.request_id = this.request_id;
        }
        if (this.city_id != null) {
            data.city_id = this.city_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.request_id != 0)
            writer.writeUint32(10, this.request_id);
        if (this.city_id != 0)
            writer.writeUint32(6, this.city_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CancelCityReputationRequestReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.request_id = reader.readUint32();
                    break;
                case 6:
                    message.city_id = reader.readUint32();
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
        return CancelCityReputationRequestReq.deserialize(bytes);
    }
}
exports.CancelCityReputationRequestReq = CancelCityReputationRequestReq;
_CancelCityReputationRequestReq_one_of_decls = new WeakMap();
