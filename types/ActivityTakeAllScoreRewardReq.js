"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActivityTakeAllScoreRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityTakeAllScoreRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ActivityTakeAllScoreRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ActivityTakeAllScoreRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _ActivityTakeAllScoreRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ActivityTakeAllScoreRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
        }
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set activity_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new ActivityTakeAllScoreRewardReq({});
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.activity_id != 0)
            writer.writeUint32(9, this.activity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActivityTakeAllScoreRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.activity_id = reader.readUint32();
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
        return ActivityTakeAllScoreRewardReq.deserialize(bytes);
    }
}
exports.ActivityTakeAllScoreRewardReq = ActivityTakeAllScoreRewardReq;
_ActivityTakeAllScoreRewardReq_one_of_decls = new WeakMap();
