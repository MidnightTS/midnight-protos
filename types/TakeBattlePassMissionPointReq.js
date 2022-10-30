"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TakeBattlePassMissionPointReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeBattlePassMissionPointReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeBattlePassMissionPointReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TakeBattlePassMissionPointReq extends pb_1.Message {
    constructor(data) {
        super();
        _TakeBattlePassMissionPointReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], __classPrivateFieldGet(this, _TakeBattlePassMissionPointReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mission_id_list" in data && data.mission_id_list != undefined) {
                this.mission_id_list = data.mission_id_list;
            }
        }
    }
    get mission_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 5, []);
    }
    set mission_id_list(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new TakeBattlePassMissionPointReq({});
        if (data.mission_id_list != null) {
            message.mission_id_list = data.mission_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.mission_id_list != null) {
            data.mission_id_list = this.mission_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mission_id_list.length)
            writer.writePackedUint32(5, this.mission_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeBattlePassMissionPointReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.mission_id_list = reader.readPackedUint32();
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
        return TakeBattlePassMissionPointReq.deserialize(bytes);
    }
}
exports.TakeBattlePassMissionPointReq = TakeBattlePassMissionPointReq;
_TakeBattlePassMissionPointReq_one_of_decls = new WeakMap();
