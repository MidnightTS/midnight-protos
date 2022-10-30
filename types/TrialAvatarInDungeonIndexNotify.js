"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TrialAvatarInDungeonIndexNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialAvatarInDungeonIndexNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TrialAvatarInDungeonIndexNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TrialAvatarInDungeonIndexNotify extends pb_1.Message {
    constructor(data) {
        super();
        _TrialAvatarInDungeonIndexNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TrialAvatarInDungeonIndexNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("trial_avatar_index_id" in data && data.trial_avatar_index_id != undefined) {
                this.trial_avatar_index_id = data.trial_avatar_index_id;
            }
        }
    }
    get trial_avatar_index_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set trial_avatar_index_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new TrialAvatarInDungeonIndexNotify({});
        if (data.trial_avatar_index_id != null) {
            message.trial_avatar_index_id = data.trial_avatar_index_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.trial_avatar_index_id != null) {
            data.trial_avatar_index_id = this.trial_avatar_index_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.trial_avatar_index_id != 0)
            writer.writeUint32(14, this.trial_avatar_index_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TrialAvatarInDungeonIndexNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.trial_avatar_index_id = reader.readUint32();
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
        return TrialAvatarInDungeonIndexNotify.deserialize(bytes);
    }
}
exports.TrialAvatarInDungeonIndexNotify = TrialAvatarInDungeonIndexNotify;
_TrialAvatarInDungeonIndexNotify_one_of_decls = new WeakMap();