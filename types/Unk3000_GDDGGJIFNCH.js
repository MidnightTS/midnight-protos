"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk3000_GDDGGJIFNCH_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3000_GDDGGJIFNCH = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk3000_GDDGGJIFNCH.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Unk3000_GDDGGJIFNCH extends pb_1.Message {
    constructor(data) {
        super();
        _Unk3000_GDDGGJIFNCH_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk3000_GDDGGJIFNCH_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk3000_CFDMLGKNLKL" in data && data.Unk3000_CFDMLGKNLKL != undefined) {
                this.Unk3000_CFDMLGKNLKL = data.Unk3000_CFDMLGKNLKL;
            }
            if ("Unk3000_HONINDEHLNO" in data && data.Unk3000_HONINDEHLNO != undefined) {
                this.Unk3000_HONINDEHLNO = data.Unk3000_HONINDEHLNO;
            }
            if ("Unk3000_FIMENALCAKG" in data && data.Unk3000_FIMENALCAKG != undefined) {
                this.Unk3000_FIMENALCAKG = data.Unk3000_FIMENALCAKG;
            }
            if ("Unk3000_BJGNKDEGLGC" in data && data.Unk3000_BJGNKDEGLGC != undefined) {
                this.Unk3000_BJGNKDEGLGC = data.Unk3000_BJGNKDEGLGC;
            }
            if ("Unk3000_HPHLGFDHBON" in data && data.Unk3000_HPHLGFDHBON != undefined) {
                this.Unk3000_HPHLGFDHBON = data.Unk3000_HPHLGFDHBON;
            }
        }
    }
    get Unk3000_CFDMLGKNLKL() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set Unk3000_CFDMLGKNLKL(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get Unk3000_HONINDEHLNO() {
        return pb_1.Message.getFieldWithDefault(this, 15, false);
    }
    set Unk3000_HONINDEHLNO(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get Unk3000_FIMENALCAKG() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set Unk3000_FIMENALCAKG(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get Unk3000_BJGNKDEGLGC() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set Unk3000_BJGNKDEGLGC(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get Unk3000_HPHLGFDHBON() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set Unk3000_HPHLGFDHBON(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new Unk3000_GDDGGJIFNCH({});
        if (data.Unk3000_CFDMLGKNLKL != null) {
            message.Unk3000_CFDMLGKNLKL = data.Unk3000_CFDMLGKNLKL;
        }
        if (data.Unk3000_HONINDEHLNO != null) {
            message.Unk3000_HONINDEHLNO = data.Unk3000_HONINDEHLNO;
        }
        if (data.Unk3000_FIMENALCAKG != null) {
            message.Unk3000_FIMENALCAKG = data.Unk3000_FIMENALCAKG;
        }
        if (data.Unk3000_BJGNKDEGLGC != null) {
            message.Unk3000_BJGNKDEGLGC = data.Unk3000_BJGNKDEGLGC;
        }
        if (data.Unk3000_HPHLGFDHBON != null) {
            message.Unk3000_HPHLGFDHBON = data.Unk3000_HPHLGFDHBON;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk3000_CFDMLGKNLKL != null) {
            data.Unk3000_CFDMLGKNLKL = this.Unk3000_CFDMLGKNLKL;
        }
        if (this.Unk3000_HONINDEHLNO != null) {
            data.Unk3000_HONINDEHLNO = this.Unk3000_HONINDEHLNO;
        }
        if (this.Unk3000_FIMENALCAKG != null) {
            data.Unk3000_FIMENALCAKG = this.Unk3000_FIMENALCAKG;
        }
        if (this.Unk3000_BJGNKDEGLGC != null) {
            data.Unk3000_BJGNKDEGLGC = this.Unk3000_BJGNKDEGLGC;
        }
        if (this.Unk3000_HPHLGFDHBON != null) {
            data.Unk3000_HPHLGFDHBON = this.Unk3000_HPHLGFDHBON;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk3000_CFDMLGKNLKL != 0)
            writer.writeUint32(8, this.Unk3000_CFDMLGKNLKL);
        if (this.Unk3000_HONINDEHLNO != false)
            writer.writeBool(15, this.Unk3000_HONINDEHLNO);
        if (this.Unk3000_FIMENALCAKG != false)
            writer.writeBool(10, this.Unk3000_FIMENALCAKG);
        if (this.Unk3000_BJGNKDEGLGC != false)
            writer.writeBool(6, this.Unk3000_BJGNKDEGLGC);
        if (this.Unk3000_HPHLGFDHBON != 0)
            writer.writeUint32(5, this.Unk3000_HPHLGFDHBON);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk3000_GDDGGJIFNCH();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.Unk3000_CFDMLGKNLKL = reader.readUint32();
                    break;
                case 15:
                    message.Unk3000_HONINDEHLNO = reader.readBool();
                    break;
                case 10:
                    message.Unk3000_FIMENALCAKG = reader.readBool();
                    break;
                case 6:
                    message.Unk3000_BJGNKDEGLGC = reader.readBool();
                    break;
                case 5:
                    message.Unk3000_HPHLGFDHBON = reader.readUint32();
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
        return Unk3000_GDDGGJIFNCH.deserialize(bytes);
    }
}
exports.Unk3000_GDDGGJIFNCH = Unk3000_GDDGGJIFNCH;
_Unk3000_GDDGGJIFNCH_one_of_decls = new WeakMap();
