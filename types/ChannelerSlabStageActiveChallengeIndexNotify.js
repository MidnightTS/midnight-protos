"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChannelerSlabStageActiveChallengeIndexNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabStageActiveChallengeIndexNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChannelerSlabStageActiveChallengeIndexNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ChannelerSlabStageActiveChallengeIndexNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ChannelerSlabStageActiveChallengeIndexNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ChannelerSlabStageActiveChallengeIndexNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("challenge_index" in data && data.challenge_index != undefined) {
                this.challenge_index = data.challenge_index;
            }
            if ("active_camp_index" in data && data.active_camp_index != undefined) {
                this.active_camp_index = data.active_camp_index;
            }
        }
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get challenge_index() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set challenge_index(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get active_camp_index() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set active_camp_index(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new ChannelerSlabStageActiveChallengeIndexNotify({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.challenge_index != null) {
            message.challenge_index = data.challenge_index;
        }
        if (data.active_camp_index != null) {
            message.active_camp_index = data.active_camp_index;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.challenge_index != null) {
            data.challenge_index = this.challenge_index;
        }
        if (this.active_camp_index != null) {
            data.active_camp_index = this.active_camp_index;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(15, this.stage_id);
        if (this.challenge_index != 0)
            writer.writeUint32(12, this.challenge_index);
        if (this.active_camp_index != 0)
            writer.writeUint32(6, this.active_camp_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChannelerSlabStageActiveChallengeIndexNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.stage_id = reader.readUint32();
                    break;
                case 12:
                    message.challenge_index = reader.readUint32();
                    break;
                case 6:
                    message.active_camp_index = reader.readUint32();
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
        return ChannelerSlabStageActiveChallengeIndexNotify.deserialize(bytes);
    }
}
exports.ChannelerSlabStageActiveChallengeIndexNotify = ChannelerSlabStageActiveChallengeIndexNotify;
_ChannelerSlabStageActiveChallengeIndexNotify_one_of_decls = new WeakMap();