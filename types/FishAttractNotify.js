"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FishAttractNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishAttractNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FishAttractNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class FishAttractNotify extends pb_1.Message {
    constructor(data) {
        super();
        _FishAttractNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _FishAttractNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fish_id_list" in data && data.fish_id_list != undefined) {
                this.fish_id_list = data.fish_id_list;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
        }
    }
    get fish_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []);
    }
    set fish_id_list(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 9);
    }
    set pos(value) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new FishAttractNotify({});
        if (data.fish_id_list != null) {
            message.fish_id_list = data.fish_id_list;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.fish_id_list != null) {
            data.fish_id_list = this.fish_id_list;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.fish_id_list.length)
            writer.writePackedUint32(3, this.fish_id_list);
        if (this.has_pos)
            writer.writeMessage(9, this.pos, () => this.pos.serialize(writer));
        if (this.uid != 0)
            writer.writeUint32(2, this.uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FishAttractNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.fish_id_list = reader.readPackedUint32();
                    break;
                case 9:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 2:
                    message.uid = reader.readUint32();
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
        return FishAttractNotify.deserialize(bytes);
    }
}
exports.FishAttractNotify = FishAttractNotify;
_FishAttractNotify_one_of_decls = new WeakMap();
