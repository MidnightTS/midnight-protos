"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MeetNpcReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetNpcReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MeetNpcReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MeetNpcReq extends pb_1.Message {
    constructor(data) {
        super();
        _MeetNpcReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MeetNpcReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("npc_id" in data && data.npc_id != undefined) {
                this.npc_id = data.npc_id;
            }
        }
    }
    get npc_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set npc_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new MeetNpcReq({});
        if (data.npc_id != null) {
            message.npc_id = data.npc_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.npc_id != null) {
            data.npc_id = this.npc_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.npc_id != 0)
            writer.writeUint32(4, this.npc_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MeetNpcReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.npc_id = reader.readUint32();
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
        return MeetNpcReq.deserialize(bytes);
    }
}
exports.MeetNpcReq = MeetNpcReq;
_MeetNpcReq_one_of_decls = new WeakMap();
