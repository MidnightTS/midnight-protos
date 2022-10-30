"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ScenePlayBattleInterruptNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayBattleInterruptNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ScenePlayBattleInterruptNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ScenePlayBattleInterruptNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ScenePlayBattleInterruptNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ScenePlayBattleInterruptNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("interrupt_state" in data && data.interrupt_state != undefined) {
                this.interrupt_state = data.interrupt_state;
            }
            if ("play_id" in data && data.play_id != undefined) {
                this.play_id = data.play_id;
            }
            if ("play_type" in data && data.play_type != undefined) {
                this.play_type = data.play_type;
            }
        }
    }
    get interrupt_state() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set interrupt_state(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get play_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set play_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get play_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set play_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new ScenePlayBattleInterruptNotify({});
        if (data.interrupt_state != null) {
            message.interrupt_state = data.interrupt_state;
        }
        if (data.play_id != null) {
            message.play_id = data.play_id;
        }
        if (data.play_type != null) {
            message.play_type = data.play_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.interrupt_state != null) {
            data.interrupt_state = this.interrupt_state;
        }
        if (this.play_id != null) {
            data.play_id = this.play_id;
        }
        if (this.play_type != null) {
            data.play_type = this.play_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.interrupt_state != 0)
            writer.writeUint32(6, this.interrupt_state);
        if (this.play_id != 0)
            writer.writeUint32(5, this.play_id);
        if (this.play_type != 0)
            writer.writeUint32(1, this.play_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ScenePlayBattleInterruptNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.interrupt_state = reader.readUint32();
                    break;
                case 5:
                    message.play_id = reader.readUint32();
                    break;
                case 1:
                    message.play_type = reader.readUint32();
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
        return ScenePlayBattleInterruptNotify.deserialize(bytes);
    }
}
exports.ScenePlayBattleInterruptNotify = ScenePlayBattleInterruptNotify;
_ScenePlayBattleInterruptNotify_one_of_decls = new WeakMap();