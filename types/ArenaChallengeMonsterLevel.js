"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArenaChallengeMonsterLevel_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArenaChallengeMonsterLevel = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ArenaChallengeMonsterLevel.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ArenaChallengeMonsterLevel extends pb_1.Message {
    constructor(data) {
        super();
        _ArenaChallengeMonsterLevel_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ArenaChallengeMonsterLevel_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("arena_challenge_level" in data && data.arena_challenge_level != undefined) {
                this.arena_challenge_level = data.arena_challenge_level;
            }
            if ("arena_challenge_id" in data && data.arena_challenge_id != undefined) {
                this.arena_challenge_id = data.arena_challenge_id;
            }
        }
    }
    get arena_challenge_level() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set arena_challenge_level(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get arena_challenge_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set arena_challenge_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new ArenaChallengeMonsterLevel({});
        if (data.arena_challenge_level != null) {
            message.arena_challenge_level = data.arena_challenge_level;
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
        if (this.arena_challenge_id != null) {
            data.arena_challenge_id = this.arena_challenge_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.arena_challenge_level != 0)
            writer.writeUint32(7, this.arena_challenge_level);
        if (this.arena_challenge_id != 0)
            writer.writeUint32(15, this.arena_challenge_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ArenaChallengeMonsterLevel();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.arena_challenge_level = reader.readUint32();
                    break;
                case 15:
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
        return ArenaChallengeMonsterLevel.deserialize(bytes);
    }
}
exports.ArenaChallengeMonsterLevel = ArenaChallengeMonsterLevel;
_ArenaChallengeMonsterLevel_one_of_decls = new WeakMap();