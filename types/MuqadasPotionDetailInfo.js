"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MuqadasPotionDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuqadasPotionDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MuqadasPotionDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk3000_IIBHKLNAHHC");
const pb_1 = require("google-protobuf");
class MuqadasPotionDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MuqadasPotionDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _MuqadasPotionDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk3000_IBEFNBFGAOP" in data && data.Unk3000_IBEFNBFGAOP != undefined) {
                this.Unk3000_IBEFNBFGAOP = data.Unk3000_IBEFNBFGAOP;
            }
        }
    }
    get Unk3000_IBEFNBFGAOP() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk3000_IIBHKLNAHHC, 8);
    }
    set Unk3000_IBEFNBFGAOP(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    static fromObject(data) {
        const message = new MuqadasPotionDetailInfo({});
        if (data.Unk3000_IBEFNBFGAOP != null) {
            message.Unk3000_IBEFNBFGAOP = data.Unk3000_IBEFNBFGAOP.map(item => dependency_1.Unk3000_IIBHKLNAHHC.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk3000_IBEFNBFGAOP != null) {
            data.Unk3000_IBEFNBFGAOP = this.Unk3000_IBEFNBFGAOP.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk3000_IBEFNBFGAOP.length)
            writer.writeRepeatedMessage(8, this.Unk3000_IBEFNBFGAOP, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MuqadasPotionDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    reader.readMessage(message.Unk3000_IBEFNBFGAOP, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.Unk3000_IIBHKLNAHHC.deserialize(reader), dependency_1.Unk3000_IIBHKLNAHHC));
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
        return MuqadasPotionDetailInfo.deserialize(bytes);
    }
}
exports.MuqadasPotionDetailInfo = MuqadasPotionDetailInfo;
_MuqadasPotionDetailInfo_one_of_decls = new WeakMap();