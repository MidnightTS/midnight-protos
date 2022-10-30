"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FallPlayerBrief_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallPlayerBrief = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FallPlayerBrief.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class FallPlayerBrief extends pb_1.Message {
    constructor(data) {
        super();
        _FallPlayerBrief_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FallPlayerBrief_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("is_ground" in data && data.is_ground != undefined) {
                this.is_ground = data.is_ground;
            }
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
        }
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get is_ground() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set is_ground(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set score(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new FallPlayerBrief({});
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (data.is_ground != null) {
            message.is_ground = data.is_ground;
        }
        if (data.score != null) {
            message.score = data.score;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.is_ground != null) {
            data.is_ground = this.is_ground;
        }
        if (this.score != null) {
            data.score = this.score;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uid != 0)
            writer.writeUint32(13, this.uid);
        if (this.is_ground != false)
            writer.writeBool(5, this.is_ground);
        if (this.score != 0)
            writer.writeUint32(10, this.score);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FallPlayerBrief();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.uid = reader.readUint32();
                    break;
                case 5:
                    message.is_ground = reader.readBool();
                    break;
                case 10:
                    message.score = reader.readUint32();
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
        return FallPlayerBrief.deserialize(bytes);
    }
}
exports.FallPlayerBrief = FallPlayerBrief;
_FallPlayerBrief_one_of_decls = new WeakMap();
