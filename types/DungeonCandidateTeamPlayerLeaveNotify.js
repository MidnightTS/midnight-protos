"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonCandidateTeamPlayerLeaveNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamPlayerLeaveNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonCandidateTeamPlayerLeaveNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./DungeonCandidateTeamPlayerLeaveReason");
const pb_1 = require("google-protobuf");
class DungeonCandidateTeamPlayerLeaveNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonCandidateTeamPlayerLeaveNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DungeonCandidateTeamPlayerLeaveNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("player_uid" in data && data.player_uid != undefined) {
                this.player_uid = data.player_uid;
            }
        }
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 3, dependency_1.DungeonCandidateTeamPlayerLeaveReason.DUNGEON_CANDIDATE_TEAM_PLAYER_LEAVE_REASON_TPLR_NORMAL);
    }
    set reason(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get player_uid() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set player_uid(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new DungeonCandidateTeamPlayerLeaveNotify({});
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.player_uid != null) {
            message.player_uid = data.player_uid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.player_uid != null) {
            data.player_uid = this.player_uid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.reason != dependency_1.DungeonCandidateTeamPlayerLeaveReason.DUNGEON_CANDIDATE_TEAM_PLAYER_LEAVE_REASON_TPLR_NORMAL)
            writer.writeEnum(3, this.reason);
        if (this.player_uid != 0)
            writer.writeUint32(13, this.player_uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonCandidateTeamPlayerLeaveNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.reason = reader.readEnum();
                    break;
                case 13:
                    message.player_uid = reader.readUint32();
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
        return DungeonCandidateTeamPlayerLeaveNotify.deserialize(bytes);
    }
}
exports.DungeonCandidateTeamPlayerLeaveNotify = DungeonCandidateTeamPlayerLeaveNotify;
_DungeonCandidateTeamPlayerLeaveNotify_one_of_decls = new WeakMap();