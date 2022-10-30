"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MusicGameRecord_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGameRecord = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MusicGameRecord.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MusicGameRecord extends pb_1.Message {
    constructor(data) {
        super();
        _MusicGameRecord_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MusicGameRecord_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_unlock" in data && data.is_unlock != undefined) {
                this.is_unlock = data.is_unlock;
            }
            if ("max_score" in data && data.max_score != undefined) {
                this.max_score = data.max_score;
            }
            if ("max_combo" in data && data.max_combo != undefined) {
                this.max_combo = data.max_combo;
            }
        }
    }
    get is_unlock() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set is_unlock(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get max_score() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set max_score(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get max_combo() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set max_combo(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new MusicGameRecord({});
        if (data.is_unlock != null) {
            message.is_unlock = data.is_unlock;
        }
        if (data.max_score != null) {
            message.max_score = data.max_score;
        }
        if (data.max_combo != null) {
            message.max_combo = data.max_combo;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_unlock != null) {
            data.is_unlock = this.is_unlock;
        }
        if (this.max_score != null) {
            data.max_score = this.max_score;
        }
        if (this.max_combo != null) {
            data.max_combo = this.max_combo;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_unlock != false)
            writer.writeBool(9, this.is_unlock);
        if (this.max_score != 0)
            writer.writeUint32(11, this.max_score);
        if (this.max_combo != 0)
            writer.writeUint32(6, this.max_combo);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MusicGameRecord();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.is_unlock = reader.readBool();
                    break;
                case 11:
                    message.max_score = reader.readUint32();
                    break;
                case 6:
                    message.max_combo = reader.readUint32();
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
        return MusicGameRecord.deserialize(bytes);
    }
}
exports.MusicGameRecord = MusicGameRecord;
_MusicGameRecord_one_of_decls = new WeakMap();
