"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BattlePassCycle_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassCycle = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BattlePassCycle.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class BattlePassCycle extends pb_1.Message {
    constructor(data) {
        super();
        _BattlePassCycle_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BattlePassCycle_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cycle_idx" in data && data.cycle_idx != undefined) {
                this.cycle_idx = data.cycle_idx;
            }
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
            if ("begin_time" in data && data.begin_time != undefined) {
                this.begin_time = data.begin_time;
            }
        }
    }
    get cycle_idx() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set cycle_idx(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set end_time(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get begin_time() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set begin_time(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new BattlePassCycle({});
        if (data.cycle_idx != null) {
            message.cycle_idx = data.cycle_idx;
        }
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        if (data.begin_time != null) {
            message.begin_time = data.begin_time;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cycle_idx != null) {
            data.cycle_idx = this.cycle_idx;
        }
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        if (this.begin_time != null) {
            data.begin_time = this.begin_time;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cycle_idx != 0)
            writer.writeUint32(3, this.cycle_idx);
        if (this.end_time != 0)
            writer.writeUint32(10, this.end_time);
        if (this.begin_time != 0)
            writer.writeUint32(13, this.begin_time);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BattlePassCycle();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.cycle_idx = reader.readUint32();
                    break;
                case 10:
                    message.end_time = reader.readUint32();
                    break;
                case 13:
                    message.begin_time = reader.readUint32();
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
        return BattlePassCycle.deserialize(bytes);
    }
}
exports.BattlePassCycle = BattlePassCycle;
_BattlePassCycle_one_of_decls = new WeakMap();
