"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_MBIDJDLLBNM_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_MBIDJDLLBNM = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_MBIDJDLLBNM.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class Unk2700_MBIDJDLLBNM extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_MBIDJDLLBNM_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk2700_MBIDJDLLBNM_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
            if ("max_score" in data && data.max_score != undefined) {
                this.max_score = data.max_score;
            }
        }
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set open_time(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 14);
    }
    set pos(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get max_score() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set max_score(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new Unk2700_MBIDJDLLBNM({});
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        if (data.max_score != null) {
            message.max_score = data.max_score;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        if (this.max_score != null) {
            data.max_score = this.max_score;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.open_time != 0)
            writer.writeUint32(5, this.open_time);
        if (this.id != 0)
            writer.writeUint32(1, this.id);
        if (this.has_pos)
            writer.writeMessage(14, this.pos, () => this.pos.serialize(writer));
        if (this.max_score != 0)
            writer.writeUint32(2, this.max_score);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_MBIDJDLLBNM();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.open_time = reader.readUint32();
                    break;
                case 1:
                    message.id = reader.readUint32();
                    break;
                case 14:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 2:
                    message.max_score = reader.readUint32();
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
        return Unk2700_MBIDJDLLBNM.deserialize(bytes);
    }
}
exports.Unk2700_MBIDJDLLBNM = Unk2700_MBIDJDLLBNM;
_Unk2700_MBIDJDLLBNM_one_of_decls = new WeakMap();