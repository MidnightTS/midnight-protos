"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeLimitedShopGoodsListRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeLimitedShopGoodsListRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeLimitedShopGoodsListRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomeLimitedShop");
const pb_1 = require("google-protobuf");
class HomeLimitedShopGoodsListRsp extends pb_1.Message {
    constructor(data) {
        super();
        _HomeLimitedShopGoodsListRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeLimitedShopGoodsListRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("shop" in data && data.shop != undefined) {
                this.shop = data.shop;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get shop() {
        return pb_1.Message.getWrapperField(this, dependency_1.HomeLimitedShop, 12);
    }
    set shop(value) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_shop() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data) {
        const message = new HomeLimitedShopGoodsListRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.shop != null) {
            message.shop = dependency_1.HomeLimitedShop.fromObject(data.shop);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.shop != null) {
            data.shop = this.shop.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(6, this.retcode);
        if (this.has_shop)
            writer.writeMessage(12, this.shop, () => this.shop.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeLimitedShopGoodsListRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.retcode = reader.readInt32();
                    break;
                case 12:
                    reader.readMessage(message.shop, () => message.shop = dependency_1.HomeLimitedShop.deserialize(reader));
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
        return HomeLimitedShopGoodsListRsp.deserialize(bytes);
    }
}
exports.HomeLimitedShopGoodsListRsp = HomeLimitedShopGoodsListRsp;
_HomeLimitedShopGoodsListRsp_one_of_decls = new WeakMap();
