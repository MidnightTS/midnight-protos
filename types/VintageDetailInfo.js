"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VintageDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: VintageDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk3100_AHIKHIOFBJJ");
const dependency_2 = require("./Unk3100_FHDBCIIMLLP");
const dependency_3 = require("./Unk3100_HEJFCDEKFOE");
const dependency_4 = require("./Unk3100_IOJKKDNELHE");
const dependency_5 = require("./Unk3100_NBBMHKJHJJI");
const pb_1 = require("google-protobuf");
class VintageDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _VintageDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _VintageDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk3100_HPMEDDOLJEN" in data && data.Unk3100_HPMEDDOLJEN != undefined) {
                this.Unk3100_HPMEDDOLJEN = data.Unk3100_HPMEDDOLJEN;
            }
            if ("Unk3100_FOLAAJODNCM" in data && data.Unk3100_FOLAAJODNCM != undefined) {
                this.Unk3100_FOLAAJODNCM = data.Unk3100_FOLAAJODNCM;
            }
            if ("Unk3100_ACDPMGMDILG" in data && data.Unk3100_ACDPMGMDILG != undefined) {
                this.Unk3100_ACDPMGMDILG = data.Unk3100_ACDPMGMDILG;
            }
            if ("Unk3100_DLDFBOLFAKD" in data && data.Unk3100_DLDFBOLFAKD != undefined) {
                this.Unk3100_DLDFBOLFAKD = data.Unk3100_DLDFBOLFAKD;
            }
            if ("Unk3100_JDOCJKEEEHO" in data && data.Unk3100_JDOCJKEEEHO != undefined) {
                this.Unk3100_JDOCJKEEEHO = data.Unk3100_JDOCJKEEEHO;
            }
            if ("is_content_closed" in data && data.is_content_closed != undefined) {
                this.is_content_closed = data.is_content_closed;
            }
        }
        if (!this.Unk3100_FOLAAJODNCM)
            this.Unk3100_FOLAAJODNCM = new Map();
        if (!this.Unk3100_DLDFBOLFAKD)
            this.Unk3100_DLDFBOLFAKD = new Map();
        if (!this.Unk3100_JDOCJKEEEHO)
            this.Unk3100_JDOCJKEEEHO = new Map();
    }
    get Unk3100_HPMEDDOLJEN() {
        return pb_1.Message.getWrapperField(this, dependency_5.Unk3100_NBBMHKJHJJI, 2);
    }
    set Unk3100_HPMEDDOLJEN(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_Unk3100_HPMEDDOLJEN() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get Unk3100_FOLAAJODNCM() {
        return pb_1.Message.getField(this, 7);
    }
    set Unk3100_FOLAAJODNCM(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get Unk3100_ACDPMGMDILG() {
        return pb_1.Message.getWrapperField(this, dependency_1.Unk3100_AHIKHIOFBJJ, 5);
    }
    set Unk3100_ACDPMGMDILG(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_Unk3100_ACDPMGMDILG() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get Unk3100_DLDFBOLFAKD() {
        return pb_1.Message.getField(this, 13);
    }
    set Unk3100_DLDFBOLFAKD(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get Unk3100_JDOCJKEEEHO() {
        return pb_1.Message.getField(this, 4);
    }
    set Unk3100_JDOCJKEEEHO(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get is_content_closed() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set is_content_closed(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new VintageDetailInfo({});
        if (data.Unk3100_HPMEDDOLJEN != null) {
            message.Unk3100_HPMEDDOLJEN = dependency_5.Unk3100_NBBMHKJHJJI.fromObject(data.Unk3100_HPMEDDOLJEN);
        }
        if (typeof data.Unk3100_FOLAAJODNCM == "object") {
            message.Unk3100_FOLAAJODNCM = new Map(Object.entries(data.Unk3100_FOLAAJODNCM).map(([key, value]) => [Number(key), dependency_3.Unk3100_HEJFCDEKFOE.fromObject(value)]));
        }
        if (data.Unk3100_ACDPMGMDILG != null) {
            message.Unk3100_ACDPMGMDILG = dependency_1.Unk3100_AHIKHIOFBJJ.fromObject(data.Unk3100_ACDPMGMDILG);
        }
        if (typeof data.Unk3100_DLDFBOLFAKD == "object") {
            message.Unk3100_DLDFBOLFAKD = new Map(Object.entries(data.Unk3100_DLDFBOLFAKD).map(([key, value]) => [Number(key), dependency_2.Unk3100_FHDBCIIMLLP.fromObject(value)]));
        }
        if (typeof data.Unk3100_JDOCJKEEEHO == "object") {
            message.Unk3100_JDOCJKEEEHO = new Map(Object.entries(data.Unk3100_JDOCJKEEEHO).map(([key, value]) => [Number(key), dependency_4.Unk3100_IOJKKDNELHE.fromObject(value)]));
        }
        if (data.is_content_closed != null) {
            message.is_content_closed = data.is_content_closed;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk3100_HPMEDDOLJEN != null) {
            data.Unk3100_HPMEDDOLJEN = this.Unk3100_HPMEDDOLJEN.toObject();
        }
        if (this.Unk3100_FOLAAJODNCM.size > 0) {
            data.Unk3100_FOLAAJODNCM = (Object.fromEntries)((Array.from)(this.Unk3100_FOLAAJODNCM).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.Unk3100_ACDPMGMDILG != null) {
            data.Unk3100_ACDPMGMDILG = this.Unk3100_ACDPMGMDILG.toObject();
        }
        if (this.Unk3100_DLDFBOLFAKD.size > 0) {
            data.Unk3100_DLDFBOLFAKD = (Object.fromEntries)((Array.from)(this.Unk3100_DLDFBOLFAKD).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.Unk3100_JDOCJKEEEHO.size > 0) {
            data.Unk3100_JDOCJKEEEHO = (Object.fromEntries)((Array.from)(this.Unk3100_JDOCJKEEEHO).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.is_content_closed != null) {
            data.is_content_closed = this.is_content_closed;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_Unk3100_HPMEDDOLJEN)
            writer.writeMessage(2, this.Unk3100_HPMEDDOLJEN, () => this.Unk3100_HPMEDDOLJEN.serialize(writer));
        for (const [key, value] of this.Unk3100_FOLAAJODNCM) {
            writer.writeMessage(7, this.Unk3100_FOLAAJODNCM, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.has_Unk3100_ACDPMGMDILG)
            writer.writeMessage(5, this.Unk3100_ACDPMGMDILG, () => this.Unk3100_ACDPMGMDILG.serialize(writer));
        for (const [key, value] of this.Unk3100_DLDFBOLFAKD) {
            writer.writeMessage(13, this.Unk3100_DLDFBOLFAKD, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        for (const [key, value] of this.Unk3100_JDOCJKEEEHO) {
            writer.writeMessage(4, this.Unk3100_JDOCJKEEEHO, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.is_content_closed != false)
            writer.writeBool(11, this.is_content_closed);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VintageDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    reader.readMessage(message.Unk3100_HPMEDDOLJEN, () => message.Unk3100_HPMEDDOLJEN = dependency_5.Unk3100_NBBMHKJHJJI.deserialize(reader));
                    break;
                case 7:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.Unk3100_FOLAAJODNCM, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_3.Unk3100_HEJFCDEKFOE.deserialize(reader));
                        return value;
                    }));
                    break;
                case 5:
                    reader.readMessage(message.Unk3100_ACDPMGMDILG, () => message.Unk3100_ACDPMGMDILG = dependency_1.Unk3100_AHIKHIOFBJJ.deserialize(reader));
                    break;
                case 13:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.Unk3100_DLDFBOLFAKD, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_2.Unk3100_FHDBCIIMLLP.deserialize(reader));
                        return value;
                    }));
                    break;
                case 4:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.Unk3100_JDOCJKEEEHO, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_4.Unk3100_IOJKKDNELHE.deserialize(reader));
                        return value;
                    }));
                    break;
                case 11:
                    message.is_content_closed = reader.readBool();
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
        return VintageDetailInfo.deserialize(bytes);
    }
}
exports.VintageDetailInfo = VintageDetailInfo;
_VintageDetailInfo_one_of_decls = new WeakMap();