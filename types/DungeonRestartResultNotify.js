"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonRestartResultNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonRestartResultNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonRestartResultNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DungeonRestartResultNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonRestartResultNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DungeonRestartResultNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_add_accpet" in data && data.is_add_accpet != undefined) {
                this.is_add_accpet = data.is_add_accpet;
            }
        }
    }
    get is_add_accpet() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set is_add_accpet(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new DungeonRestartResultNotify({});
        if (data.is_add_accpet != null) {
            message.is_add_accpet = data.is_add_accpet;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_add_accpet != null) {
            data.is_add_accpet = this.is_add_accpet;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_add_accpet != false)
            writer.writeBool(9, this.is_add_accpet);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonRestartResultNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.is_add_accpet = reader.readBool();
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
        return DungeonRestartResultNotify.deserialize(bytes);
    }
}
exports.DungeonRestartResultNotify = DungeonRestartResultNotify;
_DungeonRestartResultNotify_one_of_decls = new WeakMap();
