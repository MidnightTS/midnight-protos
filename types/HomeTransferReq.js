"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeTransferReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeTransferReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeTransferReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HomeTransferReq extends pb_1.Message {
    constructor(data) {
        super();
        _HomeTransferReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeTransferReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
            if ("Unk3100_KEMFDDMEBIG" in data && data.Unk3100_KEMFDDMEBIG != undefined) {
                this.Unk3100_KEMFDDMEBIG = data.Unk3100_KEMFDDMEBIG;
            }
        }
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set guid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk3100_KEMFDDMEBIG() {
        return pb_1.Message.getFieldWithDefault(this, 12, false);
    }
    set Unk3100_KEMFDDMEBIG(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new HomeTransferReq({});
        if (data.guid != null) {
            message.guid = data.guid;
        }
        if (data.Unk3100_KEMFDDMEBIG != null) {
            message.Unk3100_KEMFDDMEBIG = data.Unk3100_KEMFDDMEBIG;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.guid != null) {
            data.guid = this.guid;
        }
        if (this.Unk3100_KEMFDDMEBIG != null) {
            data.Unk3100_KEMFDDMEBIG = this.Unk3100_KEMFDDMEBIG;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.guid != 0)
            writer.writeUint32(1, this.guid);
        if (this.Unk3100_KEMFDDMEBIG != false)
            writer.writeBool(12, this.Unk3100_KEMFDDMEBIG);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeTransferReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.guid = reader.readUint32();
                    break;
                case 12:
                    message.Unk3100_KEMFDDMEBIG = reader.readBool();
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
        return HomeTransferReq.deserialize(bytes);
    }
}
exports.HomeTransferReq = HomeTransferReq;
_HomeTransferReq_one_of_decls = new WeakMap();