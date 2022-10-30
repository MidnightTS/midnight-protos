"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetCityReputationInfoReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCityReputationInfoReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetCityReputationInfoReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GetCityReputationInfoReq extends pb_1.Message {
    constructor(data) {
        super();
        _GetCityReputationInfoReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetCityReputationInfoReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("city_id" in data && data.city_id != undefined) {
                this.city_id = data.city_id;
            }
        }
    }
    get city_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set city_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new GetCityReputationInfoReq({});
        if (data.city_id != null) {
            message.city_id = data.city_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.city_id != null) {
            data.city_id = this.city_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.city_id != 0)
            writer.writeUint32(7, this.city_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetCityReputationInfoReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
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
        return GetCityReputationInfoReq.deserialize(bytes);
    }
}
exports.GetCityReputationInfoReq = GetCityReputationInfoReq;
_GetCityReputationInfoReq_one_of_decls = new WeakMap();
