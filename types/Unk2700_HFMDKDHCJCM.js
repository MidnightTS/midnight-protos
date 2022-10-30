"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_HFMDKDHCJCM_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_HFMDKDHCJCM = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_HFMDKDHCJCM.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class Unk2700_HFMDKDHCJCM extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_HFMDKDHCJCM_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk2700_HFMDKDHCJCM_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_CMOMNFNGCGB" in data && data.Unk2700_CMOMNFNGCGB != undefined) {
                this.Unk2700_CMOMNFNGCGB = data.Unk2700_CMOMNFNGCGB;
            }
        }
    }
    get Unk2700_CMOMNFNGCGB() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 1);
    }
    set Unk2700_CMOMNFNGCGB(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_Unk2700_CMOMNFNGCGB() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new Unk2700_HFMDKDHCJCM({});
        if (data.Unk2700_CMOMNFNGCGB != null) {
            message.Unk2700_CMOMNFNGCGB = dependency_1.Vector.fromObject(data.Unk2700_CMOMNFNGCGB);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_CMOMNFNGCGB != null) {
            data.Unk2700_CMOMNFNGCGB = this.Unk2700_CMOMNFNGCGB.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_Unk2700_CMOMNFNGCGB)
            writer.writeMessage(1, this.Unk2700_CMOMNFNGCGB, () => this.Unk2700_CMOMNFNGCGB.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_HFMDKDHCJCM();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.Unk2700_CMOMNFNGCGB, () => message.Unk2700_CMOMNFNGCGB = dependency_1.Vector.deserialize(reader));
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
        return Unk2700_HFMDKDHCJCM.deserialize(bytes);
    }
}
exports.Unk2700_HFMDKDHCJCM = Unk2700_HFMDKDHCJCM;
_Unk2700_HFMDKDHCJCM_one_of_decls = new WeakMap();
