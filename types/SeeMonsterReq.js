"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SeeMonsterReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeeMonsterReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SeeMonsterReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SeeMonsterReq extends pb_1.Message {
    constructor(data) {
        super();
        _SeeMonsterReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SeeMonsterReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("monster_id" in data && data.monster_id != undefined) {
                this.monster_id = data.monster_id;
            }
        }
    }
    get monster_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set monster_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new SeeMonsterReq({});
        if (data.monster_id != null) {
            message.monster_id = data.monster_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.monster_id != null) {
            data.monster_id = this.monster_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.monster_id != 0)
            writer.writeUint32(7, this.monster_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SeeMonsterReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.monster_id = reader.readUint32();
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
        return SeeMonsterReq.deserialize(bytes);
    }
}
exports.SeeMonsterReq = SeeMonsterReq;
_SeeMonsterReq_one_of_decls = new WeakMap();