"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FleurFairReplayMiniGameReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairReplayMiniGameReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairReplayMiniGameReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class FleurFairReplayMiniGameReq extends pb_1.Message {
    constructor(data) {
        super();
        _FleurFairReplayMiniGameReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FleurFairReplayMiniGameReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("minigame_id" in data && data.minigame_id != undefined) {
                this.minigame_id = data.minigame_id;
            }
        }
    }
    get minigame_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set minigame_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new FleurFairReplayMiniGameReq({});
        if (data.minigame_id != null) {
            message.minigame_id = data.minigame_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.minigame_id != null) {
            data.minigame_id = this.minigame_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.minigame_id != 0)
            writer.writeUint32(5, this.minigame_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairReplayMiniGameReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.minigame_id = reader.readUint32();
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
        return FleurFairReplayMiniGameReq.deserialize(bytes);
    }
}
exports.FleurFairReplayMiniGameReq = FleurFairReplayMiniGameReq;
_FleurFairReplayMiniGameReq_one_of_decls = new WeakMap();
