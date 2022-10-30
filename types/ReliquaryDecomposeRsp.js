"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReliquaryDecomposeRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliquaryDecomposeRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ReliquaryDecomposeRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ReliquaryDecomposeRsp extends pb_1.Message {
    constructor(data) {
        super();
        _ReliquaryDecomposeRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14], __classPrivateFieldGet(this, _ReliquaryDecomposeRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("guid_list" in data && data.guid_list != undefined) {
                this.guid_list = data.guid_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get guid_list() {
        return pb_1.Message.getFieldWithDefault(this, 14, []);
    }
    set guid_list(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new ReliquaryDecomposeRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.guid_list != null) {
            message.guid_list = data.guid_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.guid_list != null) {
            data.guid_list = this.guid_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (this.guid_list.length)
            writer.writePackedUint64(14, this.guid_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReliquaryDecomposeRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    message.guid_list = reader.readPackedUint64();
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
        return ReliquaryDecomposeRsp.deserialize(bytes);
    }
}
exports.ReliquaryDecomposeRsp = ReliquaryDecomposeRsp;
_ReliquaryDecomposeRsp_one_of_decls = new WeakMap();