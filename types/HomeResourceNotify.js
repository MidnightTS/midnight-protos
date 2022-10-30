"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeResourceNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeResourceNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeResourceNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomeResource");
const pb_1 = require("google-protobuf");
class HomeResourceNotify extends pb_1.Message {
    constructor(data) {
        super();
        _HomeResourceNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeResourceNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("home_coin" in data && data.home_coin != undefined) {
                this.home_coin = data.home_coin;
            }
            if ("fetter_exp" in data && data.fetter_exp != undefined) {
                this.fetter_exp = data.fetter_exp;
            }
        }
    }
    get home_coin() {
        return pb_1.Message.getWrapperField(this, dependency_1.HomeResource, 9);
    }
    set home_coin(value) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_home_coin() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get fetter_exp() {
        return pb_1.Message.getWrapperField(this, dependency_1.HomeResource, 8);
    }
    set fetter_exp(value) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_fetter_exp() {
        return pb_1.Message.getField(this, 8) != null;
    }
    static fromObject(data) {
        const message = new HomeResourceNotify({});
        if (data.home_coin != null) {
            message.home_coin = dependency_1.HomeResource.fromObject(data.home_coin);
        }
        if (data.fetter_exp != null) {
            message.fetter_exp = dependency_1.HomeResource.fromObject(data.fetter_exp);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.home_coin != null) {
            data.home_coin = this.home_coin.toObject();
        }
        if (this.fetter_exp != null) {
            data.fetter_exp = this.fetter_exp.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_home_coin)
            writer.writeMessage(9, this.home_coin, () => this.home_coin.serialize(writer));
        if (this.has_fetter_exp)
            writer.writeMessage(8, this.fetter_exp, () => this.fetter_exp.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeResourceNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    reader.readMessage(message.home_coin, () => message.home_coin = dependency_1.HomeResource.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.fetter_exp, () => message.fetter_exp = dependency_1.HomeResource.deserialize(reader));
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
        return HomeResourceNotify.deserialize(bytes);
    }
}
exports.HomeResourceNotify = HomeResourceNotify;
_HomeResourceNotify_one_of_decls = new WeakMap();
