"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MarkMapRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkMapRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MarkMapRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MapMarkPoint");
const pb_1 = require("google-protobuf");
class MarkMapRsp extends pb_1.Message {
    constructor(data) {
        super();
        _MarkMapRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _MarkMapRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("mark_list" in data && data.mark_list != undefined) {
                this.mark_list = data.mark_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get mark_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MapMarkPoint, 8);
    }
    set mark_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new MarkMapRsp({});
        if (data.mark_list != null) {
            message.mark_list = data.mark_list.map(item => dependency_1.MapMarkPoint.fromObject(item));
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.mark_list != null) {
            data.mark_list = this.mark_list.map((item) => item.toObject());
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.mark_list.length)
            writer.writeRepeatedMessage(8, this.mark_list, (item) => item.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(11, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MarkMapRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    reader.readMessage(message.mark_list, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.MapMarkPoint.deserialize(reader), dependency_1.MapMarkPoint));
                    break;
                case 11:
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
        return MarkMapRsp.deserialize(bytes);
    }
}
exports.MarkMapRsp = MarkMapRsp;
_MarkMapRsp_one_of_decls = new WeakMap();