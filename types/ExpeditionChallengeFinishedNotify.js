"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ExpeditionChallengeFinishedNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpeditionChallengeFinishedNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ExpeditionChallengeFinishedNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ExpeditionChallengeFinishedNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ExpeditionChallengeFinishedNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ExpeditionChallengeFinishedNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
        }
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new ExpeditionChallengeFinishedNotify({});
        if (data.id != null) {
            message.id = data.id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.id != null) {
            data.id = this.id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id != 0)
            writer.writeUint32(13, this.id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExpeditionChallengeFinishedNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.id = reader.readUint32();
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
        return ExpeditionChallengeFinishedNotify.deserialize(bytes);
    }
}
exports.ExpeditionChallengeFinishedNotify = ExpeditionChallengeFinishedNotify;
_ExpeditionChallengeFinishedNotify_one_of_decls = new WeakMap();