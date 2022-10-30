"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CrystalLinkActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrystalLinkActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CrystalLinkActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk2700_IOLMLCCBAKP");
const pb_1 = require("google-protobuf");
class CrystalLinkActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _CrystalLinkActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _CrystalLinkActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_FIKHCFMEOAJ" in data && data.Unk2700_FIKHCFMEOAJ != undefined) {
                this.Unk2700_FIKHCFMEOAJ = data.Unk2700_FIKHCFMEOAJ;
            }
            if ("difficulty_id" in data && data.difficulty_id != undefined) {
                this.difficulty_id = data.difficulty_id;
            }
        }
    }
    get Unk2700_FIKHCFMEOAJ() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk2700_IOLMLCCBAKP, 3);
    }
    set Unk2700_FIKHCFMEOAJ(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    get difficulty_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set difficulty_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new CrystalLinkActivityDetailInfo({});
        if (data.Unk2700_FIKHCFMEOAJ != null) {
            message.Unk2700_FIKHCFMEOAJ = data.Unk2700_FIKHCFMEOAJ.map(item => dependency_1.Unk2700_IOLMLCCBAKP.fromObject(item));
        }
        if (data.difficulty_id != null) {
            message.difficulty_id = data.difficulty_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_FIKHCFMEOAJ != null) {
            data.Unk2700_FIKHCFMEOAJ = this.Unk2700_FIKHCFMEOAJ.map((item) => item.toObject());
        }
        if (this.difficulty_id != null) {
            data.difficulty_id = this.difficulty_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_FIKHCFMEOAJ.length)
            writer.writeRepeatedMessage(3, this.Unk2700_FIKHCFMEOAJ, (item) => item.serialize(writer));
        if (this.difficulty_id != 0)
            writer.writeUint32(7, this.difficulty_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CrystalLinkActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.Unk2700_FIKHCFMEOAJ, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.Unk2700_IOLMLCCBAKP.deserialize(reader), dependency_1.Unk2700_IOLMLCCBAKP));
                    break;
                case 7:
                    message.difficulty_id = reader.readUint32();
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
        return CrystalLinkActivityDetailInfo.deserialize(bytes);
    }
}
exports.CrystalLinkActivityDetailInfo = CrystalLinkActivityDetailInfo;
_CrystalLinkActivityDetailInfo_one_of_decls = new WeakMap();