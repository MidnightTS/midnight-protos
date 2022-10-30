"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TakeResinCardDailyRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeResinCardDailyRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeResinCardDailyRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TakeResinCardDailyRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _TakeResinCardDailyRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TakeResinCardDailyRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("product_config_id" in data && data.product_config_id != undefined) {
                this.product_config_id = data.product_config_id;
            }
        }
    }
    get product_config_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set product_config_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new TakeResinCardDailyRewardReq({});
        if (data.product_config_id != null) {
            message.product_config_id = data.product_config_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.product_config_id != null) {
            data.product_config_id = this.product_config_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.product_config_id != 0)
            writer.writeUint32(14, this.product_config_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeResinCardDailyRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.product_config_id = reader.readUint32();
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
        return TakeResinCardDailyRewardReq.deserialize(bytes);
    }
}
exports.TakeResinCardDailyRewardReq = TakeResinCardDailyRewardReq;
_TakeResinCardDailyRewardReq_one_of_decls = new WeakMap();
