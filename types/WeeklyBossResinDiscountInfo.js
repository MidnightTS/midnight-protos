"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WeeklyBossResinDiscountInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyBossResinDiscountInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WeeklyBossResinDiscountInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class WeeklyBossResinDiscountInfo extends pb_1.Message {
    constructor(data) {
        super();
        _WeeklyBossResinDiscountInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _WeeklyBossResinDiscountInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("discount_num" in data && data.discount_num != undefined) {
                this.discount_num = data.discount_num;
            }
            if ("discount_num_limit" in data && data.discount_num_limit != undefined) {
                this.discount_num_limit = data.discount_num_limit;
            }
            if ("resin_cost" in data && data.resin_cost != undefined) {
                this.resin_cost = data.resin_cost;
            }
            if ("original_resin_cost" in data && data.original_resin_cost != undefined) {
                this.original_resin_cost = data.original_resin_cost;
            }
        }
    }
    get discount_num() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set discount_num(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get discount_num_limit() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set discount_num_limit(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get resin_cost() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set resin_cost(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get original_resin_cost() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set original_resin_cost(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new WeeklyBossResinDiscountInfo({});
        if (data.discount_num != null) {
            message.discount_num = data.discount_num;
        }
        if (data.discount_num_limit != null) {
            message.discount_num_limit = data.discount_num_limit;
        }
        if (data.resin_cost != null) {
            message.resin_cost = data.resin_cost;
        }
        if (data.original_resin_cost != null) {
            message.original_resin_cost = data.original_resin_cost;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.discount_num != null) {
            data.discount_num = this.discount_num;
        }
        if (this.discount_num_limit != null) {
            data.discount_num_limit = this.discount_num_limit;
        }
        if (this.resin_cost != null) {
            data.resin_cost = this.resin_cost;
        }
        if (this.original_resin_cost != null) {
            data.original_resin_cost = this.original_resin_cost;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.discount_num != 0)
            writer.writeUint32(1, this.discount_num);
        if (this.discount_num_limit != 0)
            writer.writeUint32(2, this.discount_num_limit);
        if (this.resin_cost != 0)
            writer.writeUint32(3, this.resin_cost);
        if (this.original_resin_cost != 0)
            writer.writeUint32(4, this.original_resin_cost);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WeeklyBossResinDiscountInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.discount_num = reader.readUint32();
                    break;
                case 2:
                    message.discount_num_limit = reader.readUint32();
                    break;
                case 3:
                    message.resin_cost = reader.readUint32();
                    break;
                case 4:
                    message.original_resin_cost = reader.readUint32();
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
        return WeeklyBossResinDiscountInfo.deserialize(bytes);
    }
}
exports.WeeklyBossResinDiscountInfo = WeeklyBossResinDiscountInfo;
_WeeklyBossResinDiscountInfo_one_of_decls = new WeakMap();
