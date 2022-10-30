"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_JCNIPOJMFMH_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_JCNIPOJMFMH = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_JCNIPOJMFMH.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk2700_EEPNCOAEKBM");
const dependency_2 = require("./Unk2700_LELADCCDNJH");
const pb_1 = require("google-protobuf");
class Unk2700_JCNIPOJMFMH extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_JCNIPOJMFMH_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12, 6, 10, 13], __classPrivateFieldGet(this, _Unk2700_JCNIPOJMFMH_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_OCBDODAGPNF" in data && data.Unk2700_OCBDODAGPNF != undefined) {
                this.Unk2700_OCBDODAGPNF = data.Unk2700_OCBDODAGPNF;
            }
            if ("level_list" in data && data.level_list != undefined) {
                this.level_list = data.level_list;
            }
            if ("Unk2700_EGPCJLGGGLK" in data && data.Unk2700_EGPCJLGGGLK != undefined) {
                this.Unk2700_EGPCJLGGGLK = data.Unk2700_EGPCJLGGGLK;
            }
            if ("Unk2700_CPJMLMCOCLA" in data && data.Unk2700_CPJMLMCOCLA != undefined) {
                this.Unk2700_CPJMLMCOCLA = data.Unk2700_CPJMLMCOCLA;
            }
        }
    }
    get Unk2700_OCBDODAGPNF() {
        return pb_1.Message.getFieldWithDefault(this, 12, dependency_1.Unk2700_EEPNCOAEKBM.Unk2700_EEPNCOAEKBM_Unk2700_EAFEANPNJLO);
    }
    set Unk2700_OCBDODAGPNF(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get level_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.Unk2700_LELADCCDNJH, 6);
    }
    set level_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get Unk2700_EGPCJLGGGLK() {
        return pb_1.Message.getFieldWithDefault(this, 10, []);
    }
    set Unk2700_EGPCJLGGGLK(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get Unk2700_CPJMLMCOCLA() {
        return pb_1.Message.getFieldWithDefault(this, 13, dependency_1.Unk2700_EEPNCOAEKBM.Unk2700_EEPNCOAEKBM_Unk2700_EAFEANPNJLO);
    }
    set Unk2700_CPJMLMCOCLA(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new Unk2700_JCNIPOJMFMH({});
        if (data.Unk2700_OCBDODAGPNF != null) {
            message.Unk2700_OCBDODAGPNF = data.Unk2700_OCBDODAGPNF;
        }
        if (data.level_list != null) {
            message.level_list = data.level_list.map(item => dependency_2.Unk2700_LELADCCDNJH.fromObject(item));
        }
        if (data.Unk2700_EGPCJLGGGLK != null) {
            message.Unk2700_EGPCJLGGGLK = data.Unk2700_EGPCJLGGGLK;
        }
        if (data.Unk2700_CPJMLMCOCLA != null) {
            message.Unk2700_CPJMLMCOCLA = data.Unk2700_CPJMLMCOCLA;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_OCBDODAGPNF != null) {
            data.Unk2700_OCBDODAGPNF = this.Unk2700_OCBDODAGPNF;
        }
        if (this.level_list != null) {
            data.level_list = this.level_list.map((item) => item.toObject());
        }
        if (this.Unk2700_EGPCJLGGGLK != null) {
            data.Unk2700_EGPCJLGGGLK = this.Unk2700_EGPCJLGGGLK;
        }
        if (this.Unk2700_CPJMLMCOCLA != null) {
            data.Unk2700_CPJMLMCOCLA = this.Unk2700_CPJMLMCOCLA;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_OCBDODAGPNF.length)
            writer.writePackedEnum(12, this.Unk2700_OCBDODAGPNF);
        if (this.level_list.length)
            writer.writeRepeatedMessage(6, this.level_list, (item) => item.serialize(writer));
        if (this.Unk2700_EGPCJLGGGLK.length)
            writer.writePackedUint32(10, this.Unk2700_EGPCJLGGGLK);
        if (this.Unk2700_CPJMLMCOCLA.length)
            writer.writePackedEnum(13, this.Unk2700_CPJMLMCOCLA);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_JCNIPOJMFMH();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.Unk2700_OCBDODAGPNF = reader.readPackedEnum();
                    break;
                case 6:
                    reader.readMessage(message.level_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.Unk2700_LELADCCDNJH.deserialize(reader), dependency_2.Unk2700_LELADCCDNJH));
                    break;
                case 10:
                    message.Unk2700_EGPCJLGGGLK = reader.readPackedUint32();
                    break;
                case 13:
                    message.Unk2700_CPJMLMCOCLA = reader.readPackedEnum();
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
        return Unk2700_JCNIPOJMFMH.deserialize(bytes);
    }
}
exports.Unk2700_JCNIPOJMFMH = Unk2700_JCNIPOJMFMH;
_Unk2700_JCNIPOJMFMH_one_of_decls = new WeakMap();
