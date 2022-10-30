"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ShowClientGuideNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowClientGuideNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ShowClientGuideNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ShowClientGuideNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ShowClientGuideNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ShowClientGuideNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("guide_name" in data && data.guide_name != undefined) {
                this.guide_name = data.guide_name;
            }
        }
    }
    get guide_name() {
        return pb_1.Message.getFieldWithDefault(this, 7, "");
    }
    set guide_name(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new ShowClientGuideNotify({});
        if (data.guide_name != null) {
            message.guide_name = data.guide_name;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.guide_name != null) {
            data.guide_name = this.guide_name;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.guide_name.length)
            writer.writeString(7, this.guide_name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ShowClientGuideNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.guide_name = reader.readString();
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
        return ShowClientGuideNotify.deserialize(bytes);
    }
}
exports.ShowClientGuideNotify = ShowClientGuideNotify;
_ShowClientGuideNotify_one_of_decls = new WeakMap();
