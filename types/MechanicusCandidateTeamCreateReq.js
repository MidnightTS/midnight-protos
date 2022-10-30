"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MechanicusCandidateTeamCreateReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicusCandidateTeamCreateReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MechanicusCandidateTeamCreateReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MechanicusCandidateTeamCreateReq extends pb_1.Message {
    constructor(data) {
        super();
        _MechanicusCandidateTeamCreateReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _MechanicusCandidateTeamCreateReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("difficult_level" in data && data.difficult_level != undefined) {
                this.difficult_level = data.difficult_level;
            }
        }
    }
    get difficult_level() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set difficult_level(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new MechanicusCandidateTeamCreateReq({});
        if (data.difficult_level != null) {
            message.difficult_level = data.difficult_level;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.difficult_level != null) {
            data.difficult_level = this.difficult_level;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.difficult_level != 0)
            writer.writeUint32(6, this.difficult_level);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MechanicusCandidateTeamCreateReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.difficult_level = reader.readUint32();
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
        return MechanicusCandidateTeamCreateReq.deserialize(bytes);
    }
}
exports.MechanicusCandidateTeamCreateReq = MechanicusCandidateTeamCreateReq;
_MechanicusCandidateTeamCreateReq_one_of_decls = new WeakMap();
