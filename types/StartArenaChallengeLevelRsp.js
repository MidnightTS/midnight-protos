"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StartArenaChallengeLevelRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartArenaChallengeLevelRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: StartArenaChallengeLevelRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class StartArenaChallengeLevelRsp extends pb_1.Message {
    constructor(data) {
        super();
        _StartArenaChallengeLevelRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _StartArenaChallengeLevelRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("arena_challenge_level" in data && data.arena_challenge_level != undefined) {
                this.arena_challenge_level = data.arena_challenge_level;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("gadget_entity_id" in data && data.gadget_entity_id != undefined) {
                this.gadget_entity_id = data.gadget_entity_id;
            }
            if ("arena_challenge_id" in data && data.arena_challenge_id != undefined) {
                this.arena_challenge_id = data.arena_challenge_id;
            }
        }
    }
    get arena_challenge_level() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set arena_challenge_level(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get gadget_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set gadget_entity_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get arena_challenge_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set arena_challenge_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new StartArenaChallengeLevelRsp({});
        if (data.arena_challenge_level != null) {
            message.arena_challenge_level = data.arena_challenge_level;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.gadget_entity_id != null) {
            message.gadget_entity_id = data.gadget_entity_id;
        }
        if (data.arena_challenge_id != null) {
            message.arena_challenge_id = data.arena_challenge_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.arena_challenge_level != null) {
            data.arena_challenge_level = this.arena_challenge_level;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.gadget_entity_id != null) {
            data.gadget_entity_id = this.gadget_entity_id;
        }
        if (this.arena_challenge_id != null) {
            data.arena_challenge_id = this.arena_challenge_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.arena_challenge_level != 0)
            writer.writeUint32(1, this.arena_challenge_level);
        if (this.retcode != 0)
            writer.writeInt32(9, this.retcode);
        if (this.gadget_entity_id != 0)
            writer.writeUint32(3, this.gadget_entity_id);
        if (this.arena_challenge_id != 0)
            writer.writeUint32(6, this.arena_challenge_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StartArenaChallengeLevelRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.arena_challenge_level = reader.readUint32();
                    break;
                case 9:
                    message.retcode = reader.readInt32();
                    break;
                case 3:
                    message.gadget_entity_id = reader.readUint32();
                    break;
                case 6:
                    message.arena_challenge_id = reader.readUint32();
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
        return StartArenaChallengeLevelRsp.deserialize(bytes);
    }
}
exports.StartArenaChallengeLevelRsp = StartArenaChallengeLevelRsp;
_StartArenaChallengeLevelRsp_one_of_decls = new WeakMap();
