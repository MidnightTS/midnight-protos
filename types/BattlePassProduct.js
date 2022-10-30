"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BattlePassProduct_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassProduct = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BattlePassProduct.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class BattlePassProduct extends pb_1.Message {
    constructor(data) {
        super();
        _BattlePassProduct_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BattlePassProduct_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("normal_product_id" in data && data.normal_product_id != undefined) {
                this.normal_product_id = data.normal_product_id;
            }
            if ("extra_product_id" in data && data.extra_product_id != undefined) {
                this.extra_product_id = data.extra_product_id;
            }
            if ("upgrade_product_id" in data && data.upgrade_product_id != undefined) {
                this.upgrade_product_id = data.upgrade_product_id;
            }
        }
    }
    get normal_product_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, "");
    }
    set normal_product_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get extra_product_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, "");
    }
    set extra_product_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get upgrade_product_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, "");
    }
    set upgrade_product_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new BattlePassProduct({});
        if (data.normal_product_id != null) {
            message.normal_product_id = data.normal_product_id;
        }
        if (data.extra_product_id != null) {
            message.extra_product_id = data.extra_product_id;
        }
        if (data.upgrade_product_id != null) {
            message.upgrade_product_id = data.upgrade_product_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.normal_product_id != null) {
            data.normal_product_id = this.normal_product_id;
        }
        if (this.extra_product_id != null) {
            data.extra_product_id = this.extra_product_id;
        }
        if (this.upgrade_product_id != null) {
            data.upgrade_product_id = this.upgrade_product_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.normal_product_id.length)
            writer.writeString(13, this.normal_product_id);
        if (this.extra_product_id.length)
            writer.writeString(10, this.extra_product_id);
        if (this.upgrade_product_id.length)
            writer.writeString(6, this.upgrade_product_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BattlePassProduct();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.normal_product_id = reader.readString();
                    break;
                case 10:
                    message.extra_product_id = reader.readString();
                    break;
                case 6:
                    message.upgrade_product_id = reader.readString();
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
        return BattlePassProduct.deserialize(bytes);
    }
}
exports.BattlePassProduct = BattlePassProduct;
_BattlePassProduct_one_of_decls = new WeakMap();