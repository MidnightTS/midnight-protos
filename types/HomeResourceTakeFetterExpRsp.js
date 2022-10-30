"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeResourceTakeFetterExpRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeResourceTakeFetterExpRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeResourceTakeFetterExpRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomeResource");
const pb_1 = require("google-protobuf");
class HomeResourceTakeFetterExpRsp extends pb_1.Message {
    constructor(data) {
        super();
        _HomeResourceTakeFetterExpRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeResourceTakeFetterExpRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fetter_exp" in data && data.fetter_exp != undefined) {
                this.fetter_exp = data.fetter_exp;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get fetter_exp() {
        return pb_1.Message.getWrapperField(this, dependency_1.HomeResource, 4);
    }
    set fetter_exp(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_fetter_exp() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new HomeResourceTakeFetterExpRsp({});
        if (data.fetter_exp != null) {
            message.fetter_exp = dependency_1.HomeResource.fromObject(data.fetter_exp);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.fetter_exp != null) {
            data.fetter_exp = this.fetter_exp.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_fetter_exp)
            writer.writeMessage(4, this.fetter_exp, () => this.fetter_exp.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(15, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeResourceTakeFetterExpRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.fetter_exp, () => message.fetter_exp = dependency_1.HomeResource.deserialize(reader));
                    break;
                case 15:
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
        return HomeResourceTakeFetterExpRsp.deserialize(bytes);
    }
}
exports.HomeResourceTakeFetterExpRsp = HomeResourceTakeFetterExpRsp;
_HomeResourceTakeFetterExpRsp_one_of_decls = new WeakMap();
