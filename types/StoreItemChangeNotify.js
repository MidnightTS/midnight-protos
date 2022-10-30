"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StoreItemChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreItemChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: StoreItemChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Item");
const dependency_2 = require("./StoreType");
const pb_1 = require("google-protobuf");
class StoreItemChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _StoreItemChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [10], __classPrivateFieldGet(this, _StoreItemChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("store_type" in data && data.store_type != undefined) {
                this.store_type = data.store_type;
            }
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
        }
    }
    get store_type() {
        return pb_1.Message.getFieldWithDefault(this, 12, dependency_2.StoreType.STORE_TYPE_NONE);
    }
    set store_type(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Item, 10);
    }
    set item_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 10, value);
    }
    static fromObject(data) {
        const message = new StoreItemChangeNotify({});
        if (data.store_type != null) {
            message.store_type = data.store_type;
        }
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.Item.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.store_type != null) {
            data.store_type = this.store_type;
        }
        if (this.item_list != null) {
            data.item_list = this.item_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.store_type != dependency_2.StoreType.STORE_TYPE_NONE)
            writer.writeEnum(12, this.store_type);
        if (this.item_list.length)
            writer.writeRepeatedMessage(10, this.item_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StoreItemChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.store_type = reader.readEnum();
                    break;
                case 10:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 10, dependency_1.Item.deserialize(reader), dependency_1.Item));
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
        return StoreItemChangeNotify.deserialize(bytes);
    }
}
exports.StoreItemChangeNotify = StoreItemChangeNotify;
_StoreItemChangeNotify_one_of_decls = new WeakMap();
