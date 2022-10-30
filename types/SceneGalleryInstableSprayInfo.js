"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryInstableSprayInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryInstableSprayInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryInstableSprayInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk3000_OMCBMAHOLHB");
const pb_1 = require("google-protobuf");
class SceneGalleryInstableSprayInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryInstableSprayInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12], __classPrivateFieldGet(this, _SceneGalleryInstableSprayInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
            if ("Unk2700_INIBKFPMCFO" in data && data.Unk2700_INIBKFPMCFO != undefined) {
                this.Unk2700_INIBKFPMCFO = data.Unk2700_INIBKFPMCFO;
            }
        }
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set score(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get Unk2700_INIBKFPMCFO() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Unk3000_OMCBMAHOLHB, 12);
    }
    set Unk2700_INIBKFPMCFO(value) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryInstableSprayInfo({});
        if (data.score != null) {
            message.score = data.score;
        }
        if (data.Unk2700_INIBKFPMCFO != null) {
            message.Unk2700_INIBKFPMCFO = data.Unk2700_INIBKFPMCFO.map(item => dependency_1.Unk3000_OMCBMAHOLHB.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.score != null) {
            data.score = this.score;
        }
        if (this.Unk2700_INIBKFPMCFO != null) {
            data.Unk2700_INIBKFPMCFO = this.Unk2700_INIBKFPMCFO.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.score != 0)
            writer.writeUint32(5, this.score);
        if (this.Unk2700_INIBKFPMCFO.length)
            writer.writeRepeatedMessage(12, this.Unk2700_INIBKFPMCFO, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryInstableSprayInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.score = reader.readUint32();
                    break;
                case 12:
                    reader.readMessage(message.Unk2700_INIBKFPMCFO, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_1.Unk3000_OMCBMAHOLHB.deserialize(reader), dependency_1.Unk3000_OMCBMAHOLHB));
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
        return SceneGalleryInstableSprayInfo.deserialize(bytes);
    }
}
exports.SceneGalleryInstableSprayInfo = SceneGalleryInstableSprayInfo;
_SceneGalleryInstableSprayInfo_one_of_decls = new WeakMap();
