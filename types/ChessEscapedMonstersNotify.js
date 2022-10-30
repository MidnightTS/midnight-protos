"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChessEscapedMonstersNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessEscapedMonstersNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChessEscapedMonstersNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ChessEscapedMonstersNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ChessEscapedMonstersNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ChessEscapedMonstersNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("escaped_monsters" in data && data.escaped_monsters != undefined) {
                this.escaped_monsters = data.escaped_monsters;
            }
        }
    }
    get escaped_monsters() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set escaped_monsters(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new ChessEscapedMonstersNotify({});
        if (data.escaped_monsters != null) {
            message.escaped_monsters = data.escaped_monsters;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.escaped_monsters != null) {
            data.escaped_monsters = this.escaped_monsters;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.escaped_monsters != 0)
            writer.writeUint32(14, this.escaped_monsters);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChessEscapedMonstersNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.escaped_monsters = reader.readUint32();
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
        return ChessEscapedMonstersNotify.deserialize(bytes);
    }
}
exports.ChessEscapedMonstersNotify = ChessEscapedMonstersNotify;
_ChessEscapedMonstersNotify_one_of_decls = new WeakMap();