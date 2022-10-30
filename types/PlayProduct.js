"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayProduct_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayProduct = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayProduct.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlayProduct extends pb_1.Message {
    constructor(data) {
        super();
        _PlayProduct_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlayProduct_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("product_id" in data && data.product_id != undefined) {
                this.product_id = data.product_id;
            }
            if ("price_tier" in data && data.price_tier != undefined) {
                this.price_tier = data.price_tier;
            }
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
        }
    }
    get product_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set product_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get price_tier() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set price_tier(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new PlayProduct({});
        if (data.product_id != null) {
            message.product_id = data.product_id;
        }
        if (data.price_tier != null) {
            message.price_tier = data.price_tier;
        }
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.product_id != null) {
            data.product_id = this.product_id;
        }
        if (this.price_tier != null) {
            data.price_tier = this.price_tier;
        }
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.product_id.length)
            writer.writeString(1, this.product_id);
        if (this.price_tier.length)
            writer.writeString(2, this.price_tier);
        if (this.schedule_id != 0)
            writer.writeUint32(3, this.schedule_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayProduct();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.product_id = reader.readString();
                    break;
                case 2:
                    message.price_tier = reader.readString();
                    break;
                case 3:
                    message.schedule_id = reader.readUint32();
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
        return PlayProduct.deserialize(bytes);
    }
}
exports.PlayProduct = PlayProduct;
_PlayProduct_one_of_decls = new WeakMap();
