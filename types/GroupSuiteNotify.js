"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GroupSuiteNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSuiteNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GroupSuiteNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GroupSuiteNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GroupSuiteNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GroupSuiteNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("group_map" in data && data.group_map != undefined) {
                this.group_map = data.group_map;
            }
        }
        if (!this.group_map)
            this.group_map = new Map();
    }
    get group_map() {
        return pb_1.Message.getField(this, 3);
    }
    set group_map(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new GroupSuiteNotify({});
        if (typeof data.group_map == "object") {
            message.group_map = new Map(Object.entries(data.group_map).map(([key, value]) => [Number(key), value]));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.group_map.size > 0) {
            data.group_map = (Object.fromEntries)(this.group_map);
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.group_map) {
            writer.writeMessage(3, this.group_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GroupSuiteNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.group_map, reader, reader.readUint32, reader.readUint32));
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
        return GroupSuiteNotify.deserialize(bytes);
    }
}
exports.GroupSuiteNotify = GroupSuiteNotify;
_GroupSuiteNotify_one_of_decls = new WeakMap();