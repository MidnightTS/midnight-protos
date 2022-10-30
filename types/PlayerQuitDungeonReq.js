"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerQuitDungeonReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerQuitDungeonReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerQuitDungeonReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerQuitDungeonReq extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerQuitDungeonReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerQuitDungeonReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_quit_immediately" in data && data.is_quit_immediately != undefined) {
                this.is_quit_immediately = data.is_quit_immediately;
            }
            if ("point_id" in data && data.point_id != undefined) {
                this.point_id = data.point_id;
            }
        }
    }
    get is_quit_immediately() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set is_quit_immediately(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get point_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set point_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new PlayerQuitDungeonReq({});
        if (data.is_quit_immediately != null) {
            message.is_quit_immediately = data.is_quit_immediately;
        }
        if (data.point_id != null) {
            message.point_id = data.point_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_quit_immediately != null) {
            data.is_quit_immediately = this.is_quit_immediately;
        }
        if (this.point_id != null) {
            data.point_id = this.point_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_quit_immediately != false)
            writer.writeBool(10, this.is_quit_immediately);
        if (this.point_id != 0)
            writer.writeUint32(7, this.point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerQuitDungeonReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.is_quit_immediately = reader.readBool();
                    break;
                case 7:
                    message.point_id = reader.readUint32();
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
        return PlayerQuitDungeonReq.deserialize(bytes);
    }
}
exports.PlayerQuitDungeonReq = PlayerQuitDungeonReq;
_PlayerQuitDungeonReq_one_of_decls = new WeakMap();