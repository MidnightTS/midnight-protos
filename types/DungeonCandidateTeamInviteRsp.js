"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonCandidateTeamInviteRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamInviteRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonCandidateTeamInviteRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DungeonCandidateTeamInviteRsp extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonCandidateTeamInviteRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7], __classPrivateFieldGet(this, _DungeonCandidateTeamInviteRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("Unk2700_OJEGACKKJAE" in data && data.Unk2700_OJEGACKKJAE != undefined) {
                this.Unk2700_OJEGACKKJAE = data.Unk2700_OJEGACKKJAE;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk2700_OJEGACKKJAE() {
        return pb_1.Message.getFieldWithDefault(this, 7, []);
    }
    set Unk2700_OJEGACKKJAE(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new DungeonCandidateTeamInviteRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.Unk2700_OJEGACKKJAE != null) {
            message.Unk2700_OJEGACKKJAE = data.Unk2700_OJEGACKKJAE;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.Unk2700_OJEGACKKJAE != null) {
            data.Unk2700_OJEGACKKJAE = this.Unk2700_OJEGACKKJAE;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(12, this.retcode);
        if (this.Unk2700_OJEGACKKJAE.length)
            writer.writePackedUint32(7, this.Unk2700_OJEGACKKJAE);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonCandidateTeamInviteRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.retcode = reader.readInt32();
                    break;
                case 7:
                    message.Unk2700_OJEGACKKJAE = reader.readPackedUint32();
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
        return DungeonCandidateTeamInviteRsp.deserialize(bytes);
    }
}
exports.DungeonCandidateTeamInviteRsp = DungeonCandidateTeamInviteRsp;
_DungeonCandidateTeamInviteRsp_one_of_decls = new WeakMap();
