"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SelectAsterMidDifficultyRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectAsterMidDifficultyRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SelectAsterMidDifficultyRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SelectAsterMidDifficultyRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SelectAsterMidDifficultyRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SelectAsterMidDifficultyRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("gadget_entity_id" in data && data.gadget_entity_id != undefined) {
                this.gadget_entity_id = data.gadget_entity_id;
            }
            if ("difficulty_id" in data && data.difficulty_id != undefined) {
                this.difficulty_id = data.difficulty_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get gadget_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set gadget_entity_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get difficulty_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set difficulty_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new SelectAsterMidDifficultyRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.gadget_entity_id != null) {
            message.gadget_entity_id = data.gadget_entity_id;
        }
        if (data.difficulty_id != null) {
            message.difficulty_id = data.difficulty_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.gadget_entity_id != null) {
            data.gadget_entity_id = this.gadget_entity_id;
        }
        if (this.difficulty_id != null) {
            data.difficulty_id = this.difficulty_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(15, this.retcode);
        if (this.schedule_id != 0)
            writer.writeUint32(2, this.schedule_id);
        if (this.gadget_entity_id != 0)
            writer.writeUint32(5, this.gadget_entity_id);
        if (this.difficulty_id != 0)
            writer.writeUint32(14, this.difficulty_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SelectAsterMidDifficultyRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.retcode = reader.readInt32();
                    break;
                case 2:
                    message.schedule_id = reader.readUint32();
                    break;
                case 5:
                    message.gadget_entity_id = reader.readUint32();
                    break;
                case 14:
                    message.difficulty_id = reader.readUint32();
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
        return SelectAsterMidDifficultyRsp.deserialize(bytes);
    }
}
exports.SelectAsterMidDifficultyRsp = SelectAsterMidDifficultyRsp;
_SelectAsterMidDifficultyRsp_one_of_decls = new WeakMap();