"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_PKAPCOBGIJL_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_PKAPCOBGIJL = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_PKAPCOBGIJL.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Unk2700_PKAPCOBGIJL extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_PKAPCOBGIJL_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk2700_PKAPCOBGIJL_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_OOJCLILDIHM" in data && data.Unk2700_OOJCLILDIHM != undefined) {
                this.Unk2700_OOJCLILDIHM = data.Unk2700_OOJCLILDIHM;
            }
            if ("Unk2700_KDNLGNDLDNM" in data && data.Unk2700_KDNLGNDLDNM != undefined) {
                this.Unk2700_KDNLGNDLDNM = data.Unk2700_KDNLGNDLDNM;
            }
        }
    }
    get Unk2700_OOJCLILDIHM() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set Unk2700_OOJCLILDIHM(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk2700_KDNLGNDLDNM() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set Unk2700_KDNLGNDLDNM(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new Unk2700_PKAPCOBGIJL({});
        if (data.Unk2700_OOJCLILDIHM != null) {
            message.Unk2700_OOJCLILDIHM = data.Unk2700_OOJCLILDIHM;
        }
        if (data.Unk2700_KDNLGNDLDNM != null) {
            message.Unk2700_KDNLGNDLDNM = data.Unk2700_KDNLGNDLDNM;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_OOJCLILDIHM != null) {
            data.Unk2700_OOJCLILDIHM = this.Unk2700_OOJCLILDIHM;
        }
        if (this.Unk2700_KDNLGNDLDNM != null) {
            data.Unk2700_KDNLGNDLDNM = this.Unk2700_KDNLGNDLDNM;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_OOJCLILDIHM != 0)
            writer.writeUint32(1, this.Unk2700_OOJCLILDIHM);
        if (this.Unk2700_KDNLGNDLDNM != 0)
            writer.writeUint32(10, this.Unk2700_KDNLGNDLDNM);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_PKAPCOBGIJL();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.Unk2700_OOJCLILDIHM = reader.readUint32();
                    break;
                case 10:
                    message.Unk2700_KDNLGNDLDNM = reader.readUint32();
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
        return Unk2700_PKAPCOBGIJL.deserialize(bytes);
    }
}
exports.Unk2700_PKAPCOBGIJL = Unk2700_PKAPCOBGIJL;
_Unk2700_PKAPCOBGIJL_one_of_decls = new WeakMap();
