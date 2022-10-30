"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2800_JKLFAJKDLDG_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2800_JKLFAJKDLDG = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2800_JKLFAJKDLDG.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Unk2800_JKLFAJKDLDG extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2800_JKLFAJKDLDG_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk2800_JKLFAJKDLDG_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("quest_id" in data && data.quest_id != undefined) {
                this.quest_id = data.quest_id;
            }
            if ("point_id" in data && data.point_id != undefined) {
                this.point_id = data.point_id;
            }
        }
    }
    get quest_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set quest_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get point_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set point_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new Unk2800_JKLFAJKDLDG({});
        if (data.quest_id != null) {
            message.quest_id = data.quest_id;
        }
        if (data.point_id != null) {
            message.point_id = data.point_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.quest_id != null) {
            data.quest_id = this.quest_id;
        }
        if (this.point_id != null) {
            data.point_id = this.point_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.quest_id != 0)
            writer.writeUint32(13, this.quest_id);
        if (this.point_id != 0)
            writer.writeUint32(6, this.point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2800_JKLFAJKDLDG();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.quest_id = reader.readUint32();
                    break;
                case 6:
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
        return Unk2800_JKLFAJKDLDG.deserialize(bytes);
    }
}
exports.Unk2800_JKLFAJKDLDG = Unk2800_JKLFAJKDLDG;
_Unk2800_JKLFAJKDLDG_one_of_decls = new WeakMap();