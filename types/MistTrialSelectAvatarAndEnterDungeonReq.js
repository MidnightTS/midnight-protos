"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MistTrialSelectAvatarAndEnterDungeonReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistTrialSelectAvatarAndEnterDungeonReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MistTrialSelectAvatarAndEnterDungeonReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MistTrialSelectAvatarAndEnterDungeonReq extends pb_1.Message {
    constructor(data) {
        super();
        _MistTrialSelectAvatarAndEnterDungeonReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [10], __classPrivateFieldGet(this, _MistTrialSelectAvatarAndEnterDungeonReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("trial_id" in data && data.trial_id != undefined) {
                this.trial_id = data.trial_id;
            }
            if ("select_trial_avatar_id_list" in data && data.select_trial_avatar_id_list != undefined) {
                this.select_trial_avatar_id_list = data.select_trial_avatar_id_list;
            }
            if ("enter_point_id" in data && data.enter_point_id != undefined) {
                this.enter_point_id = data.enter_point_id;
            }
        }
    }
    get trial_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set trial_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get select_trial_avatar_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 10, []);
    }
    set select_trial_avatar_id_list(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get enter_point_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set enter_point_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new MistTrialSelectAvatarAndEnterDungeonReq({});
        if (data.trial_id != null) {
            message.trial_id = data.trial_id;
        }
        if (data.select_trial_avatar_id_list != null) {
            message.select_trial_avatar_id_list = data.select_trial_avatar_id_list;
        }
        if (data.enter_point_id != null) {
            message.enter_point_id = data.enter_point_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.trial_id != null) {
            data.trial_id = this.trial_id;
        }
        if (this.select_trial_avatar_id_list != null) {
            data.select_trial_avatar_id_list = this.select_trial_avatar_id_list;
        }
        if (this.enter_point_id != null) {
            data.enter_point_id = this.enter_point_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.trial_id != 0)
            writer.writeUint32(4, this.trial_id);
        if (this.select_trial_avatar_id_list.length)
            writer.writePackedUint32(10, this.select_trial_avatar_id_list);
        if (this.enter_point_id != 0)
            writer.writeUint32(7, this.enter_point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MistTrialSelectAvatarAndEnterDungeonReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.trial_id = reader.readUint32();
                    break;
                case 10:
                    message.select_trial_avatar_id_list = reader.readPackedUint32();
                    break;
                case 7:
                    message.enter_point_id = reader.readUint32();
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
        return MistTrialSelectAvatarAndEnterDungeonReq.deserialize(bytes);
    }
}
exports.MistTrialSelectAvatarAndEnterDungeonReq = MistTrialSelectAvatarAndEnterDungeonReq;
_MistTrialSelectAvatarAndEnterDungeonReq_one_of_decls = new WeakMap();
