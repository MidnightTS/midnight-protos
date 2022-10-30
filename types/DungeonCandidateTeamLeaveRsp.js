"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonCandidateTeamLeaveRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamLeaveRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonCandidateTeamLeaveRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DungeonCandidateTeamLeaveRsp extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonCandidateTeamLeaveRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _DungeonCandidateTeamLeaveRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new DungeonCandidateTeamLeaveRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(14, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonCandidateTeamLeaveRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.retcode = reader.readInt32();
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
        return DungeonCandidateTeamLeaveRsp.deserialize(bytes);
    }
}
exports.DungeonCandidateTeamLeaveRsp = DungeonCandidateTeamLeaveRsp;
_DungeonCandidateTeamLeaveRsp_one_of_decls = new WeakMap();
