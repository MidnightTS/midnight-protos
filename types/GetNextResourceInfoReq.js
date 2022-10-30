"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetNextResourceInfoReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNextResourceInfoReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetNextResourceInfoReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GetNextResourceInfoReq extends pb_1.Message {
    constructor(data) {
        super();
        _GetNextResourceInfoReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetNextResourceInfoReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new GetNextResourceInfoReq({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetNextResourceInfoReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return GetNextResourceInfoReq.deserialize(bytes);
    }
}
exports.GetNextResourceInfoReq = GetNextResourceInfoReq;
_GetNextResourceInfoReq_one_of_decls = new WeakMap();
