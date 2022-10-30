"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk3100_IOJKKDNELHE_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3100_IOJKKDNELHE = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk3100_IOJKKDNELHE.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk3100_APOOGGMHCJI");
const pb_1 = require("google-protobuf");
class Unk3100_IOJKKDNELHE extends pb_1.Message {
    constructor(data) {
        super();
        _Unk3100_IOJKKDNELHE_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk3100_IOJKKDNELHE_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("Unk2700_MMNILGLDHHD" in data && data.Unk2700_MMNILGLDHHD != undefined) {
                this.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("Unk3100_EAGEPOFAMDB" in data && data.Unk3100_EAGEPOFAMDB != undefined) {
                this.Unk3100_EAGEPOFAMDB = data.Unk3100_EAGEPOFAMDB;
            }
        }
        if (!this.Unk3100_EAGEPOFAMDB)
            this.Unk3100_EAGEPOFAMDB = new Map();
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set open_time(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get Unk2700_MMNILGLDHHD() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set Unk2700_MMNILGLDHHD(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get Unk3100_EAGEPOFAMDB() {
        return pb_1.Message.getField(this, 2);
    }
    set Unk3100_EAGEPOFAMDB(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new Unk3100_IOJKKDNELHE({});
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.Unk2700_MMNILGLDHHD != null) {
            message.Unk2700_MMNILGLDHHD = data.Unk2700_MMNILGLDHHD;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (typeof data.Unk3100_EAGEPOFAMDB == "object") {
            message.Unk3100_EAGEPOFAMDB = new Map(Object.entries(data.Unk3100_EAGEPOFAMDB).map(([key, value]) => [Number(key), dependency_1.Unk3100_APOOGGMHCJI.fromObject(value)]));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.Unk2700_MMNILGLDHHD != null) {
            data.Unk2700_MMNILGLDHHD = this.Unk2700_MMNILGLDHHD;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.Unk3100_EAGEPOFAMDB.size > 0) {
            data.Unk3100_EAGEPOFAMDB = (Object.fromEntries)((Array.from)(this.Unk3100_EAGEPOFAMDB).map(([key, value]) => [key, value.toObject()]));
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.open_time != 0)
            writer.writeUint32(1, this.open_time);
        if (this.stage_id != 0)
            writer.writeUint32(15, this.stage_id);
        if (this.Unk2700_MMNILGLDHHD != false)
            writer.writeBool(13, this.Unk2700_MMNILGLDHHD);
        if (this.is_open != false)
            writer.writeBool(10, this.is_open);
        for (const [key, value] of this.Unk3100_EAGEPOFAMDB) {
            writer.writeMessage(2, this.Unk3100_EAGEPOFAMDB, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk3100_IOJKKDNELHE();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.open_time = reader.readUint32();
                    break;
                case 15:
                    message.stage_id = reader.readUint32();
                    break;
                case 13:
                    message.Unk2700_MMNILGLDHHD = reader.readBool();
                    break;
                case 10:
                    message.is_open = reader.readBool();
                    break;
                case 2:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.Unk3100_EAGEPOFAMDB, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.Unk3100_APOOGGMHCJI.deserialize(reader));
                        return value;
                    }));
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
        return Unk3100_IOJKKDNELHE.deserialize(bytes);
    }
}
exports.Unk3100_IOJKKDNELHE = Unk3100_IOJKKDNELHE;
_Unk3100_IOJKKDNELHE_one_of_decls = new WeakMap();
