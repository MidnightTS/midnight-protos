"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QuestGlobalVar_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestGlobalVar = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QuestGlobalVar.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class QuestGlobalVar extends pb_1.Message {
    constructor(data) {
        super();
        _QuestGlobalVar_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuestGlobalVar_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
        }
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set value(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set key(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new QuestGlobalVar({});
        if (data.value != null) {
            message.value = data.value;
        }
        if (data.key != null) {
            message.key = data.key;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.value != null) {
            data.value = this.value;
        }
        if (this.key != null) {
            data.key = this.key;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.value != 0)
            writer.writeInt32(8, this.value);
        if (this.key != 0)
            writer.writeUint32(4, this.key);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuestGlobalVar();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.value = reader.readInt32();
                    break;
                case 4:
                    message.key = reader.readUint32();
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
        return QuestGlobalVar.deserialize(bytes);
    }
}
exports.QuestGlobalVar = QuestGlobalVar;
_QuestGlobalVar_one_of_decls = new WeakMap();
