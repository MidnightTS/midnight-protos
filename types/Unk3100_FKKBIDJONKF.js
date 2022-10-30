"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk3100_FKKBIDJONKF_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3100_FKKBIDJONKF = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk3100_FKKBIDJONKF.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Unk3100_FKKBIDJONKF extends pb_1.Message {
    constructor(data) {
        super();
        _Unk3100_FKKBIDJONKF_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk3100_FKKBIDJONKF_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_MMNILGLDHHD" in data && data.Unk2700_MMNILGLDHHD != undefined) {
                this.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
            }
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
        }
    }
    get Unk2700_MMNILGLDHHD() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set Unk2700_MMNILGLDHHD(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set open_time(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new Unk3100_FKKBIDJONKF({});
        if (data.Unk2700_MMNILGLDHHD != null) {
            message.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
        }
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_MMNILGLDHHD != null) {
            data.Unk2700_MMNILGLDHHD = this.Unk2700_MMNILGLDHHD;
        }
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_MMNILGLDHHD != false)
            writer.writeBool(6, this.Unk2700_MMNILGLDHHD);
        if (this.open_time != 0)
            writer.writeUint32(7, this.open_time);
        if (this.is_open != false)
            writer.writeBool(5, this.is_open);
        if (this.stage_id != 0)
            writer.writeUint32(3, this.stage_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk3100_FKKBIDJONKF();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.Unk2700_MMNILGLDHHD = reader.readBool();
                    break;
                case 7:
                    message.open_time = reader.readUint32();
                    break;
                case 5:
                    message.is_open = reader.readBool();
                    break;
                case 3:
                    message.stage_id = reader.readUint32();
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
        return Unk3100_FKKBIDJONKF.deserialize(bytes);
    }
}
exports.Unk3100_FKKBIDJONKF = Unk3100_FKKBIDJONKF;
_Unk3100_FKKBIDJONKF_one_of_decls = new WeakMap();