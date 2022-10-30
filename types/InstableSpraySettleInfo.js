"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InstableSpraySettleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstableSpraySettleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: InstableSpraySettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class InstableSpraySettleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _InstableSpraySettleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _InstableSpraySettleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("score_list" in data && data.score_list != undefined) {
                this.score_list = data.score_list;
            }
            if ("is_new_record" in data && data.is_new_record != undefined) {
                this.is_new_record = data.is_new_record;
            }
            if ("difficulty" in data && data.difficulty != undefined) {
                this.difficulty = data.difficulty;
            }
        }
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get score_list() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set score_list(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get is_new_record() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set is_new_record(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get difficulty() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set difficulty(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new InstableSpraySettleInfo({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.score_list != null) {
            message.score_list = data.score_list;
        }
        if (data.is_new_record != null) {
            message.is_new_record = data.is_new_record;
        }
        if (data.difficulty != null) {
            message.difficulty = data.difficulty;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.score_list != null) {
            data.score_list = this.score_list;
        }
        if (this.is_new_record != null) {
            data.is_new_record = this.is_new_record;
        }
        if (this.difficulty != null) {
            data.difficulty = this.difficulty;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(1, this.stage_id);
        if (this.score_list.length)
            writer.writePackedUint32(4, this.score_list);
        if (this.is_new_record != false)
            writer.writeBool(13, this.is_new_record);
        if (this.difficulty != 0)
            writer.writeUint32(5, this.difficulty);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InstableSpraySettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.stage_id = reader.readUint32();
                    break;
                case 4:
                    message.score_list = reader.readPackedUint32();
                    break;
                case 13:
                    message.is_new_record = reader.readBool();
                    break;
                case 5:
                    message.difficulty = reader.readUint32();
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
        return InstableSpraySettleInfo.deserialize(bytes);
    }
}
exports.InstableSpraySettleInfo = InstableSpraySettleInfo;
_InstableSpraySettleInfo_one_of_decls = new WeakMap();
