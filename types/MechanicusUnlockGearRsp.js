"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MechanicusUnlockGearRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicusUnlockGearRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MechanicusUnlockGearRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MechanicusUnlockGearRsp extends pb_1.Message {
    constructor(data) {
        super();
        _MechanicusUnlockGearRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MechanicusUnlockGearRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("mechanicus_id" in data && data.mechanicus_id != undefined) {
                this.mechanicus_id = data.mechanicus_id;
            }
            if ("gear_id" in data && data.gear_id != undefined) {
                this.gear_id = data.gear_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get mechanicus_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set mechanicus_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get gear_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set gear_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new MechanicusUnlockGearRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.mechanicus_id != null) {
            message.mechanicus_id = data.mechanicus_id;
        }
        if (data.gear_id != null) {
            message.gear_id = data.gear_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.mechanicus_id != null) {
            data.mechanicus_id = this.mechanicus_id;
        }
        if (this.gear_id != null) {
            data.gear_id = this.gear_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (this.mechanicus_id != 0)
            writer.writeUint32(8, this.mechanicus_id);
        if (this.gear_id != 0)
            writer.writeUint32(14, this.gear_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MechanicusUnlockGearRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                case 8:
                    message.mechanicus_id = reader.readUint32();
                    break;
                case 14:
                    message.gear_id = reader.readUint32();
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
        return MechanicusUnlockGearRsp.deserialize(bytes);
    }
}
exports.MechanicusUnlockGearRsp = MechanicusUnlockGearRsp;
_MechanicusUnlockGearRsp_one_of_decls = new WeakMap();
