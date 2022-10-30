"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AllSeenMonsterNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllSeenMonsterNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AllSeenMonsterNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AllSeenMonsterNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AllSeenMonsterNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _AllSeenMonsterNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("monster_id_list" in data && data.monster_id_list != undefined) {
                this.monster_id_list = data.monster_id_list;
            }
        }
    }
    get monster_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set monster_id_list(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new AllSeenMonsterNotify({});
        if (data.monster_id_list != null) {
            message.monster_id_list = data.monster_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.monster_id_list != null) {
            data.monster_id_list = this.monster_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.monster_id_list.length)
            writer.writePackedUint32(4, this.monster_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AllSeenMonsterNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.monster_id_list = reader.readPackedUint32();
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
        return AllSeenMonsterNotify.deserialize(bytes);
    }
}
exports.AllSeenMonsterNotify = AllSeenMonsterNotify;
_AllSeenMonsterNotify_one_of_decls = new WeakMap();