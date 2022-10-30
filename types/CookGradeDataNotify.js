"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CookGradeDataNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookGradeDataNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CookGradeDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class CookGradeDataNotify extends pb_1.Message {
    constructor(data) {
        super();
        _CookGradeDataNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CookGradeDataNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("grade" in data && data.grade != undefined) {
                this.grade = data.grade;
            }
        }
    }
    get grade() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set grade(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new CookGradeDataNotify({});
        if (data.grade != null) {
            message.grade = data.grade;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.grade != null) {
            data.grade = this.grade;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.grade != 0)
            writer.writeUint32(12, this.grade);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CookGradeDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.grade = reader.readUint32();
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
        return CookGradeDataNotify.deserialize(bytes);
    }
}
exports.CookGradeDataNotify = CookGradeDataNotify;
_CookGradeDataNotify_one_of_decls = new WeakMap();
