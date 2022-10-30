"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HuntingStartNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuntingStartNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HuntingStartNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HuntingPair");
const dependency_2 = require("./Vector");
const pb_1 = require("google-protobuf");
class HuntingStartNotify extends pb_1.Message {
    constructor(data) {
        super();
        _HuntingStartNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HuntingStartNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("clue_position" in data && data.clue_position != undefined) {
                this.clue_position = data.clue_position;
            }
            if ("fail_time" in data && data.fail_time != undefined) {
                this.fail_time = data.fail_time;
            }
            if ("hunting_pair" in data && data.hunting_pair != undefined) {
                this.hunting_pair = data.hunting_pair;
            }
            if ("is_final" in data && data.is_final != undefined) {
                this.is_final = data.is_final;
            }
        }
    }
    get clue_position() {
        return pb_1.Message.getWrapperField(this, dependency_2.Vector, 4);
    }
    set clue_position(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_clue_position() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get fail_time() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set fail_time(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get hunting_pair() {
        return pb_1.Message.getWrapperField(this, dependency_1.HuntingPair, 3);
    }
    set hunting_pair(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_hunting_pair() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get is_final() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_final(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new HuntingStartNotify({});
        if (data.clue_position != null) {
            message.clue_position = dependency_2.Vector.fromObject(data.clue_position);
        }
        if (data.fail_time != null) {
            message.fail_time = data.fail_time;
        }
        if (data.hunting_pair != null) {
            message.hunting_pair = dependency_1.HuntingPair.fromObject(data.hunting_pair);
        }
        if (data.is_final != null) {
            message.is_final = data.is_final;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.clue_position != null) {
            data.clue_position = this.clue_position.toObject();
        }
        if (this.fail_time != null) {
            data.fail_time = this.fail_time;
        }
        if (this.hunting_pair != null) {
            data.hunting_pair = this.hunting_pair.toObject();
        }
        if (this.is_final != null) {
            data.is_final = this.is_final;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_clue_position)
            writer.writeMessage(4, this.clue_position, () => this.clue_position.serialize(writer));
        if (this.fail_time != 0)
            writer.writeUint32(15, this.fail_time);
        if (this.has_hunting_pair)
            writer.writeMessage(3, this.hunting_pair, () => this.hunting_pair.serialize(writer));
        if (this.is_final != false)
            writer.writeBool(8, this.is_final);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HuntingStartNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.clue_position, () => message.clue_position = dependency_2.Vector.deserialize(reader));
                    break;
                case 15:
                    message.fail_time = reader.readUint32();
                    break;
                case 3:
                    reader.readMessage(message.hunting_pair, () => message.hunting_pair = dependency_1.HuntingPair.deserialize(reader));
                    break;
                case 8:
                    message.is_final = reader.readBool();
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
        return HuntingStartNotify.deserialize(bytes);
    }
}
exports.HuntingStartNotify = HuntingStartNotify;
_HuntingStartNotify_one_of_decls = new WeakMap();