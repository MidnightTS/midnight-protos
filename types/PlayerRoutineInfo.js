"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerRoutineInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRoutineInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerRoutineInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayerRoutineInfo extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerRoutineInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayerRoutineInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("routine_type" in data && data.routine_type != undefined) {
                this.routine_type = data.routine_type;
            }
            if ("finished_num" in data && data.finished_num != undefined) {
                this.finished_num = data.finished_num;
            }
        }
    }
    get routine_type() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set routine_type(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get finished_num() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set finished_num(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new PlayerRoutineInfo({});
        if (data.routine_type != null) {
            message.routine_type = data.routine_type;
        }
        if (data.finished_num != null) {
            message.finished_num = data.finished_num;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.routine_type != null) {
            data.routine_type = this.routine_type;
        }
        if (this.finished_num != null) {
            data.finished_num = this.finished_num;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.routine_type != 0)
            writer.writeUint32(8, this.routine_type);
        if (this.finished_num != 0)
            writer.writeUint32(15, this.finished_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerRoutineInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.routine_type = reader.readUint32();
                    break;
                case 15:
                    message.finished_num = reader.readUint32();
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
        return PlayerRoutineInfo.deserialize(bytes);
    }
}
exports.PlayerRoutineInfo = PlayerRoutineInfo;
_PlayerRoutineInfo_one_of_decls = new WeakMap();
