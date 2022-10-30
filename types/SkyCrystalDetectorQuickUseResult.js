"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SkyCrystalDetectorQuickUseResult_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyCrystalDetectorQuickUseResult = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SkyCrystalDetectorQuickUseResult.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk2700_CCEOEOHLAPK");
const pb_1 = require("google-protobuf");
class SkyCrystalDetectorQuickUseResult extends pb_1.Message {
    constructor(data) {
        super();
        _SkyCrystalDetectorQuickUseResult_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SkyCrystalDetectorQuickUseResult_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_COIELIGEACL" in data && data.Unk2700_COIELIGEACL != undefined) {
                this.Unk2700_COIELIGEACL = data.Unk2700_COIELIGEACL;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get Unk2700_COIELIGEACL() {
        return pb_1.Message.getWrapperField(this, dependency_1.Unk2700_CCEOEOHLAPK, 9);
    }
    set Unk2700_COIELIGEACL(value) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_Unk2700_COIELIGEACL() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new SkyCrystalDetectorQuickUseResult({});
        if (data.Unk2700_COIELIGEACL != null) {
            message.Unk2700_COIELIGEACL = dependency_1.Unk2700_CCEOEOHLAPK.fromObject(data.Unk2700_COIELIGEACL);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_COIELIGEACL != null) {
            data.Unk2700_COIELIGEACL = this.Unk2700_COIELIGEACL.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_Unk2700_COIELIGEACL)
            writer.writeMessage(9, this.Unk2700_COIELIGEACL, () => this.Unk2700_COIELIGEACL.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(8, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SkyCrystalDetectorQuickUseResult();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    reader.readMessage(message.Unk2700_COIELIGEACL, () => message.Unk2700_COIELIGEACL = dependency_1.Unk2700_CCEOEOHLAPK.deserialize(reader));
                    break;
                case 8:
                    message.retcode = reader.readInt32();
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
        return SkyCrystalDetectorQuickUseResult.deserialize(bytes);
    }
}
exports.SkyCrystalDetectorQuickUseResult = SkyCrystalDetectorQuickUseResult;
_SkyCrystalDetectorQuickUseResult_one_of_decls = new WeakMap();