"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TakeInvestigationTargetRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeInvestigationTargetRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeInvestigationTargetRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TakeInvestigationTargetRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _TakeInvestigationTargetRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TakeInvestigationTargetRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("quest_id" in data && data.quest_id != undefined) {
                this.quest_id = data.quest_id;
            }
        }
    }
    get quest_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set quest_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new TakeInvestigationTargetRewardReq({});
        if (data.quest_id != null) {
            message.quest_id = data.quest_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.quest_id != null) {
            data.quest_id = this.quest_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.quest_id != 0)
            writer.writeUint32(11, this.quest_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeInvestigationTargetRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.quest_id = reader.readUint32();
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
        return TakeInvestigationTargetRewardReq.deserialize(bytes);
    }
}
exports.TakeInvestigationTargetRewardReq = TakeInvestigationTargetRewardReq;
_TakeInvestigationTargetRewardReq_one_of_decls = new WeakMap();