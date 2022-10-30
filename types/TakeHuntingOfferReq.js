"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TakeHuntingOfferReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeHuntingOfferReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeHuntingOfferReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HuntingPair");
const pb_1 = require("google-protobuf");
class TakeHuntingOfferReq extends pb_1.Message {
    constructor(data) {
        super();
        _TakeHuntingOfferReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TakeHuntingOfferReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("hunting_pair" in data && data.hunting_pair != undefined) {
                this.hunting_pair = data.hunting_pair;
            }
            if ("city_id" in data && data.city_id != undefined) {
                this.city_id = data.city_id;
            }
        }
    }
    get hunting_pair() {
        return pb_1.Message.getWrapperField(this, dependency_1.HuntingPair, 14);
    }
    set hunting_pair(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_hunting_pair() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get city_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set city_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new TakeHuntingOfferReq({});
        if (data.hunting_pair != null) {
            message.hunting_pair = dependency_1.HuntingPair.fromObject(data.hunting_pair);
        }
        if (data.city_id != null) {
            message.city_id = data.city_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.hunting_pair != null) {
            data.hunting_pair = this.hunting_pair.toObject();
        }
        if (this.city_id != null) {
            data.city_id = this.city_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_hunting_pair)
            writer.writeMessage(14, this.hunting_pair, () => this.hunting_pair.serialize(writer));
        if (this.city_id != 0)
            writer.writeUint32(4, this.city_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeHuntingOfferReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.hunting_pair, () => message.hunting_pair = dependency_1.HuntingPair.deserialize(reader));
                    break;
                case 4:
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
        return TakeHuntingOfferReq.deserialize(bytes);
    }
}
exports.TakeHuntingOfferReq = TakeHuntingOfferReq;
_TakeHuntingOfferReq_one_of_decls = new WeakMap();
