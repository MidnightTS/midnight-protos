"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QuestVarOp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestVarOp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QuestVarOp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class QuestVarOp extends pb_1.Message {
    constructor(data) {
        super();
        _QuestVarOp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuestVarOp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("index" in data && data.index != undefined) {
                this.index = data.index;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
            if ("is_add" in data && data.is_add != undefined) {
                this.is_add = data.is_add;
            }
        }
    }
    get index() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set index(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set value(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get is_add() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set is_add(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new QuestVarOp({});
        if (data.index != null) {
            message.index = data.index;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        if (data.is_add != null) {
            message.is_add = data.is_add;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.index != null) {
            data.index = this.index;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        if (this.is_add != null) {
            data.is_add = this.is_add;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.index != 0)
            writer.writeUint32(9, this.index);
        if (this.value != 0)
            writer.writeInt32(5, this.value);
        if (this.is_add != false)
            writer.writeBool(6, this.is_add);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuestVarOp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.index = reader.readUint32();
                    break;
                case 5:
                    message.value = reader.readInt32();
                    break;
                case 6:
                    message.is_add = reader.readBool();
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
        return QuestVarOp.deserialize(bytes);
    }
}
exports.QuestVarOp = QuestVarOp;
_QuestVarOp_one_of_decls = new WeakMap();
