"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GivingRecord_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GivingRecord = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GivingRecord.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GivingRecord extends pb_1.Message {
    constructor(data) {
        super();
        _GivingRecord_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GivingRecord_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_finished" in data && data.is_finished != undefined) {
                this.is_finished = data.is_finished;
            }
            if ("group_id" in data && data.group_id != undefined) {
                this.group_id = data.group_id;
            }
            if ("Unk2800_JBPPNEHPACC" in data && data.Unk2800_JBPPNEHPACC != undefined) {
                this.Unk2800_JBPPNEHPACC = data.Unk2800_JBPPNEHPACC;
            }
            if ("giving_id" in data && data.giving_id != undefined) {
                this.giving_id = data.giving_id;
            }
            if ("last_group_id" in data && data.last_group_id != undefined) {
                this.last_group_id = data.last_group_id;
            }
            if ("config_id" in data && data.config_id != undefined) {
                this.config_id = data.config_id;
            }
            if ("Unk2800_BDKKENPEEGD" in data && data.Unk2800_BDKKENPEEGD != undefined) {
                this.Unk2800_BDKKENPEEGD = data.Unk2800_BDKKENPEEGD;
            }
        }
        if (!this.Unk2800_BDKKENPEEGD)
            this.Unk2800_BDKKENPEEGD = new Map();
    }
    get is_finished() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set is_finished(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get group_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set group_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get Unk2800_JBPPNEHPACC() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set Unk2800_JBPPNEHPACC(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get giving_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set giving_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get last_group_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set last_group_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get config_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set config_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get Unk2800_BDKKENPEEGD() {
        return pb_1.Message.getField(this, 15);
    }
    set Unk2800_BDKKENPEEGD(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new GivingRecord({});
        if (data.is_finished != null) {
            message.is_finished = data.is_finished;
        }
        if (data.group_id != null) {
            message.group_id = data.group_id;
        }
        if (data.Unk2800_JBPPNEHPACC != null) {
            message.Unk2800_JBPPNEHPACC = data.Unk2800_JBPPNEHPACC;
        }
        if (data.giving_id != null) {
            message.giving_id = data.giving_id;
        }
        if (data.last_group_id != null) {
            message.last_group_id = data.last_group_id;
        }
        if (data.config_id != null) {
            message.config_id = data.config_id;
        }
        if (typeof data.Unk2800_BDKKENPEEGD == "object") {
            message.Unk2800_BDKKENPEEGD = new Map(Object.entries(data.Unk2800_BDKKENPEEGD).map(([key, value]) => [Number(key), value]));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_finished != null) {
            data.is_finished = this.is_finished;
        }
        if (this.group_id != null) {
            data.group_id = this.group_id;
        }
        if (this.Unk2800_JBPPNEHPACC != null) {
            data.Unk2800_JBPPNEHPACC = this.Unk2800_JBPPNEHPACC;
        }
        if (this.giving_id != null) {
            data.giving_id = this.giving_id;
        }
        if (this.last_group_id != null) {
            data.last_group_id = this.last_group_id;
        }
        if (this.config_id != null) {
            data.config_id = this.config_id;
        }
        if (this.Unk2800_BDKKENPEEGD.size > 0) {
            data.Unk2800_BDKKENPEEGD = (Object.fromEntries)(this.Unk2800_BDKKENPEEGD);
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_finished != false)
            writer.writeBool(9, this.is_finished);
        if (this.group_id != 0)
            writer.writeUint32(5, this.group_id);
        if (this.Unk2800_JBPPNEHPACC != false)
            writer.writeBool(8, this.Unk2800_JBPPNEHPACC);
        if (this.giving_id != 0)
            writer.writeUint32(3, this.giving_id);
        if (this.last_group_id != 0)
            writer.writeUint32(6, this.last_group_id);
        if (this.config_id != 0)
            writer.writeUint32(2, this.config_id);
        for (const [key, value] of this.Unk2800_BDKKENPEEGD) {
            writer.writeMessage(15, this.Unk2800_BDKKENPEEGD, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GivingRecord();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.is_finished = reader.readBool();
                    break;
                case 5:
                    message.group_id = reader.readUint32();
                    break;
                case 8:
                    message.Unk2800_JBPPNEHPACC = reader.readBool();
                    break;
                case 3:
                    message.giving_id = reader.readUint32();
                    break;
                case 6:
                    message.last_group_id = reader.readUint32();
                    break;
                case 2:
                    message.config_id = reader.readUint32();
                    break;
                case 15:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.Unk2800_BDKKENPEEGD, reader, reader.readUint32, reader.readUint32));
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
        return GivingRecord.deserialize(bytes);
    }
}
exports.GivingRecord = GivingRecord;
_GivingRecord_one_of_decls = new WeakMap();
