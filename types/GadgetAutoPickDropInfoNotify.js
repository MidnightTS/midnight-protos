"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GadgetAutoPickDropInfoNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetAutoPickDropInfoNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GadgetAutoPickDropInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Item");
const pb_1 = require("google-protobuf");
class GadgetAutoPickDropInfoNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GadgetAutoPickDropInfoNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], __classPrivateFieldGet(this, _GadgetAutoPickDropInfoNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
        }
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Item, 11);
    }
    set item_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    static fromObject(data) {
        const message = new GadgetAutoPickDropInfoNotify({});
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.Item.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.item_list != null) {
            data.item_list = this.item_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_list.length)
            writer.writeRepeatedMessage(11, this.item_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GadgetAutoPickDropInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_1.Item.deserialize(reader), dependency_1.Item));
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
        return GadgetAutoPickDropInfoNotify.deserialize(bytes);
    }
}
exports.GadgetAutoPickDropInfoNotify = GadgetAutoPickDropInfoNotify;
_GadgetAutoPickDropInfoNotify_one_of_decls = new WeakMap();