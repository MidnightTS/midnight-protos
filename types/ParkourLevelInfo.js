"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ParkourLevelInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkourLevelInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ParkourLevelInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class ParkourLevelInfo extends pb_1.Message {
    constructor(data) {
        super();
        _ParkourLevelInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ParkourLevelInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("best_record" in data && data.best_record != undefined) {
                this.best_record = data.best_record;
            }
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
        }
    }
    get best_record() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set best_record(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set is_open(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set open_time(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 2);
    }
    set pos(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new ParkourLevelInfo({});
        if (data.best_record != null) {
            message.best_record = data.best_record;
        }
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.best_record != null) {
            data.best_record = this.best_record;
        }
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.best_record != 0)
            writer.writeUint32(12, this.best_record);
        if (this.is_open != false)
            writer.writeBool(9, this.is_open);
        if (this.open_time != 0)
            writer.writeUint32(7, this.open_time);
        if (this.has_pos)
            writer.writeMessage(2, this.pos, () => this.pos.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ParkourLevelInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.best_record = reader.readUint32();
                    break;
                case 9:
                    message.is_open = reader.readBool();
                    break;
                case 7:
                    message.open_time = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
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
        return ParkourLevelInfo.deserialize(bytes);
    }
}
exports.ParkourLevelInfo = ParkourLevelInfo;
_ParkourLevelInfo_one_of_decls = new WeakMap();