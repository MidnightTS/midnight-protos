"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NpcTalkReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcTalkReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: NpcTalkReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class NpcTalkReq extends pb_1.Message {
    constructor(data) {
        super();
        _NpcTalkReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _NpcTalkReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("npc_entity_id" in data && data.npc_entity_id != undefined) {
                this.npc_entity_id = data.npc_entity_id;
            }
            if ("talk_id" in data && data.talk_id != undefined) {
                this.talk_id = data.talk_id;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get npc_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set npc_entity_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get talk_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set talk_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new NpcTalkReq({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.npc_entity_id != null) {
            message.npc_entity_id = data.npc_entity_id;
        }
        if (data.talk_id != null) {
            message.talk_id = data.talk_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.npc_entity_id != null) {
            data.npc_entity_id = this.npc_entity_id;
        }
        if (this.talk_id != null) {
            data.talk_id = this.talk_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(8, this.entity_id);
        if (this.npc_entity_id != 0)
            writer.writeUint32(9, this.npc_entity_id);
        if (this.talk_id != 0)
            writer.writeUint32(7, this.talk_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NpcTalkReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.entity_id = reader.readUint32();
                    break;
                case 9:
                    message.npc_entity_id = reader.readUint32();
                    break;
                case 7:
                    message.talk_id = reader.readUint32();
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
        return NpcTalkReq.deserialize(bytes);
    }
}
exports.NpcTalkReq = NpcTalkReq;
_NpcTalkReq_one_of_decls = new WeakMap();
