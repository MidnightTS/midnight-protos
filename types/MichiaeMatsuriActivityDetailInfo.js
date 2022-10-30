"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MichiaeMatsuriActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MichiaeMatsuriActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MichiaeMatsuriActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MichiaeMatsuriStage");
const dependency_2 = require("./Unk2700_HGFFGMCODNC");
const dependency_3 = require("./Unk2700_NAFAIMHFEFG");
const pb_1 = require("google-protobuf");
class MichiaeMatsuriActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MichiaeMatsuriActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6, 2, 10, 14], __classPrivateFieldGet(this, _MichiaeMatsuriActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_MPNNMCPOLAM" in data && data.Unk2700_MPNNMCPOLAM != undefined) {
                this.Unk2700_MPNNMCPOLAM = data.Unk2700_MPNNMCPOLAM;
            }
            if ("Unk2700_MAOAHHBCKIA" in data && data.Unk2700_MAOAHHBCKIA != undefined) {
                this.Unk2700_MAOAHHBCKIA = data.Unk2700_MAOAHHBCKIA;
            }
            if ("Unk2700_BEHAAHHGCLK" in data && data.Unk2700_BEHAAHHGCLK != undefined) {
                this.Unk2700_BEHAAHHGCLK = data.Unk2700_BEHAAHHGCLK;
            }
            if ("Unk2700_LEKHKNKHIPO" in data && data.Unk2700_LEKHKNKHIPO != undefined) {
                this.Unk2700_LEKHKNKHIPO = data.Unk2700_LEKHKNKHIPO;
            }
            if ("stage_list" in data && data.stage_list != undefined) {
                this.stage_list = data.stage_list;
            }
        }
    }
    get Unk2700_MPNNMCPOLAM() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.Unk2700_HGFFGMCODNC, 6);
    }
    set Unk2700_MPNNMCPOLAM(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get Unk2700_MAOAHHBCKIA() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set Unk2700_MAOAHHBCKIA(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get Unk2700_BEHAAHHGCLK() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set Unk2700_BEHAAHHGCLK(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get Unk2700_LEKHKNKHIPO() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.Unk2700_NAFAIMHFEFG, 10);
    }
    set Unk2700_LEKHKNKHIPO(value) {
        pb_1.Message.setRepeatedWrapperField(this, 10, value);
    }
    get stage_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MichiaeMatsuriStage, 14);
    }
    set stage_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 14, value);
    }
    static fromObject(data) {
        const message = new MichiaeMatsuriActivityDetailInfo({});
        if (data.Unk2700_MPNNMCPOLAM != null) {
            message.Unk2700_MPNNMCPOLAM = data.Unk2700_MPNNMCPOLAM.map(item => dependency_2.Unk2700_HGFFGMCODNC.fromObject(item));
        }
        if (data.Unk2700_MAOAHHBCKIA != null) {
            message.Unk2700_MAOAHHBCKIA = data.Unk2700_MAOAHHBCKIA;
        }
        if (data.Unk2700_BEHAAHHGCLK != null) {
            message.Unk2700_BEHAAHHGCLK = data.Unk2700_BEHAAHHGCLK;
        }
        if (data.Unk2700_LEKHKNKHIPO != null) {
            message.Unk2700_LEKHKNKHIPO = data.Unk2700_LEKHKNKHIPO.map(item => dependency_3.Unk2700_NAFAIMHFEFG.fromObject(item));
        }
        if (data.stage_list != null) {
            message.stage_list = data.stage_list.map(item => dependency_1.MichiaeMatsuriStage.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_MPNNMCPOLAM != null) {
            data.Unk2700_MPNNMCPOLAM = this.Unk2700_MPNNMCPOLAM.map((item) => item.toObject());
        }
        if (this.Unk2700_MAOAHHBCKIA != null) {
            data.Unk2700_MAOAHHBCKIA = this.Unk2700_MAOAHHBCKIA;
        }
        if (this.Unk2700_BEHAAHHGCLK != null) {
            data.Unk2700_BEHAAHHGCLK = this.Unk2700_BEHAAHHGCLK;
        }
        if (this.Unk2700_LEKHKNKHIPO != null) {
            data.Unk2700_LEKHKNKHIPO = this.Unk2700_LEKHKNKHIPO.map((item) => item.toObject());
        }
        if (this.stage_list != null) {
            data.stage_list = this.stage_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_MPNNMCPOLAM.length)
            writer.writeRepeatedMessage(6, this.Unk2700_MPNNMCPOLAM, (item) => item.serialize(writer));
        if (this.Unk2700_MAOAHHBCKIA != 0)
            writer.writeUint32(13, this.Unk2700_MAOAHHBCKIA);
        if (this.Unk2700_BEHAAHHGCLK.length)
            writer.writePackedUint32(2, this.Unk2700_BEHAAHHGCLK);
        if (this.Unk2700_LEKHKNKHIPO.length)
            writer.writeRepeatedMessage(10, this.Unk2700_LEKHKNKHIPO, (item) => item.serialize(writer));
        if (this.stage_list.length)
            writer.writeRepeatedMessage(14, this.stage_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MichiaeMatsuriActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    reader.readMessage(message.Unk2700_MPNNMCPOLAM, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.Unk2700_HGFFGMCODNC.deserialize(reader), dependency_2.Unk2700_HGFFGMCODNC));
                    break;
                case 13:
                    message.Unk2700_MAOAHHBCKIA = reader.readUint32();
                    break;
                case 2:
                    message.Unk2700_BEHAAHHGCLK = reader.readPackedUint32();
                    break;
                case 10:
                    reader.readMessage(message.Unk2700_LEKHKNKHIPO, () => pb_1.Message.addToRepeatedWrapperField(message, 10, dependency_3.Unk2700_NAFAIMHFEFG.deserialize(reader), dependency_3.Unk2700_NAFAIMHFEFG));
                    break;
                case 14:
                    reader.readMessage(message.stage_list, () => pb_1.Message.addToRepeatedWrapperField(message, 14, dependency_1.MichiaeMatsuriStage.deserialize(reader), dependency_1.MichiaeMatsuriStage));
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
        return MichiaeMatsuriActivityDetailInfo.deserialize(bytes);
    }
}
exports.MichiaeMatsuriActivityDetailInfo = MichiaeMatsuriActivityDetailInfo;
_MichiaeMatsuriActivityDetailInfo_one_of_decls = new WeakMap();