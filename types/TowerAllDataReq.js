"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TowerAllDataReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerAllDataReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TowerAllDataReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TowerAllDataReq extends pb_1.Message {
    constructor(data) {
        super();
        _TowerAllDataReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TowerAllDataReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_interact" in data && data.is_interact != undefined) {
                this.is_interact = data.is_interact;
            }
        }
    }
    get is_interact() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set is_interact(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new TowerAllDataReq({});
        if (data.is_interact != null) {
            message.is_interact = data.is_interact;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_interact != null) {
            data.is_interact = this.is_interact;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_interact != false)
            writer.writeBool(2, this.is_interact);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TowerAllDataReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.is_interact = reader.readBool();
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
        return TowerAllDataReq.deserialize(bytes);
    }
}
exports.TowerAllDataReq = TowerAllDataReq;
_TowerAllDataReq_one_of_decls = new WeakMap();