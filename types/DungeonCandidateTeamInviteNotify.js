"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonCandidateTeamInviteNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamInviteNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonCandidateTeamInviteNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DungeonCandidateTeamInviteNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonCandidateTeamInviteNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DungeonCandidateTeamInviteNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("player_uid" in data && data.player_uid != undefined) {
                this.player_uid = data.player_uid;
            }
            if ("vaild_deadline_time_sec" in data && data.vaild_deadline_time_sec != undefined) {
                this.vaild_deadline_time_sec = data.vaild_deadline_time_sec;
            }
            if ("dungeon_id" in data && data.dungeon_id != undefined) {
                this.dungeon_id = data.dungeon_id;
            }
        }
    }
    get player_uid() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set player_uid(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get vaild_deadline_time_sec() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set vaild_deadline_time_sec(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get dungeon_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set dungeon_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new DungeonCandidateTeamInviteNotify({});
        if (data.player_uid != null) {
            message.player_uid = data.player_uid;
        }
        if (data.vaild_deadline_time_sec != null) {
            message.vaild_deadline_time_sec = data.vaild_deadline_time_sec;
        }
        if (data.dungeon_id != null) {
            message.dungeon_id = data.dungeon_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.player_uid != null) {
            data.player_uid = this.player_uid;
        }
        if (this.vaild_deadline_time_sec != null) {
            data.vaild_deadline_time_sec = this.vaild_deadline_time_sec;
        }
        if (this.dungeon_id != null) {
            data.dungeon_id = this.dungeon_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.player_uid != 0)
            writer.writeUint32(5, this.player_uid);
        if (this.vaild_deadline_time_sec != 0)
            writer.writeUint32(9, this.vaild_deadline_time_sec);
        if (this.dungeon_id != 0)
            writer.writeUint32(6, this.dungeon_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonCandidateTeamInviteNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.player_uid = reader.readUint32();
                    break;
                case 9:
                    message.vaild_deadline_time_sec = reader.readUint32();
                    break;
                case 6:
                    message.dungeon_id = reader.readUint32();
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
        return DungeonCandidateTeamInviteNotify.deserialize(bytes);
    }
}
exports.DungeonCandidateTeamInviteNotify = DungeonCandidateTeamInviteNotify;
_DungeonCandidateTeamInviteNotify_one_of_decls = new WeakMap();