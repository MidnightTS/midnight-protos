"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TreasureMapCurrencyNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureMapCurrencyNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TreasureMapCurrencyNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TreasureMapCurrencyNotify extends pb_1.Message {
    constructor(data) {
        super();
        _TreasureMapCurrencyNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TreasureMapCurrencyNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("currency_num" in data && data.currency_num != undefined) {
                this.currency_num = data.currency_num;
            }
        }
    }
    get currency_num() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set currency_num(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new TreasureMapCurrencyNotify({});
        if (data.currency_num != null) {
            message.currency_num = data.currency_num;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.currency_num != null) {
            data.currency_num = this.currency_num;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.currency_num != 0)
            writer.writeUint32(8, this.currency_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TreasureMapCurrencyNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.currency_num = reader.readUint32();
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
        return TreasureMapCurrencyNotify.deserialize(bytes);
    }
}
exports.TreasureMapCurrencyNotify = TreasureMapCurrencyNotify;
_TreasureMapCurrencyNotify_one_of_decls = new WeakMap();
