"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SeaLampTakeContributionRewardRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLampTakeContributionRewardRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SeaLampTakeContributionRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SeaLampTakeContributionRewardRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SeaLampTakeContributionRewardRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SeaLampTakeContributionRewardRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("config_id" in data && data.config_id != undefined) {
                this.config_id = data.config_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get config_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set config_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new SeaLampTakeContributionRewardRsp({});
        if (data.config_id != null) {
            message.config_id = data.config_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.config_id != null) {
            data.config_id = this.config_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.config_id != 0)
            writer.writeUint32(9, this.config_id);
        if (this.retcode != 0)
            writer.writeInt32(7, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SeaLampTakeContributionRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.config_id = reader.readUint32();
                    break;
                case 7:
                    message.retcode = reader.readInt32();
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
        return SeaLampTakeContributionRewardRsp.deserialize(bytes);
    }
}
exports.SeaLampTakeContributionRewardRsp = SeaLampTakeContributionRewardRsp;
_SeaLampTakeContributionRewardRsp_one_of_decls = new WeakMap();
