"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TaskVar_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskVar = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TaskVar.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TaskVar extends pb_1.Message {
    constructor(data) {
        super();
        _TaskVar_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _TaskVar_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("value_list" in data && data.value_list != undefined) {
                this.value_list = data.value_list;
            }
        }
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set key(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get value_list() {
        return pb_1.Message.getFieldWithDefault(this, 6, []);
    }
    set value_list(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new TaskVar({});
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.value_list != null) {
            message.value_list = data.value_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.value_list != null) {
            data.value_list = this.value_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key != 0)
            writer.writeUint32(8, this.key);
        if (this.value_list.length)
            writer.writePackedInt32(6, this.value_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TaskVar();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.key = reader.readUint32();
                    break;
                case 6:
                    message.value_list = reader.readPackedInt32();
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
        return TaskVar.deserialize(bytes);
    }
}
exports.TaskVar = TaskVar;
_TaskVar_one_of_decls = new WeakMap();
