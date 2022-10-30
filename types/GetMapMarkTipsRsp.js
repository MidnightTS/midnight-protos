"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetMapMarkTipsRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMapMarkTipsRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetMapMarkTipsRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MapMarkTipsInfo");
const pb_1 = require("google-protobuf");
class GetMapMarkTipsRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GetMapMarkTipsRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], __classPrivateFieldGet(this, _GetMapMarkTipsRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("mark_tips_list" in data && data.mark_tips_list != undefined) {
                this.mark_tips_list = data.mark_tips_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get mark_tips_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MapMarkTipsInfo, 11);
    }
    set mark_tips_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    static fromObject(data) {
        const message = new GetMapMarkTipsRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.mark_tips_list != null) {
            message.mark_tips_list = data.mark_tips_list.map(item => dependency_1.MapMarkTipsInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.mark_tips_list != null) {
            data.mark_tips_list = this.mark_tips_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(7, this.retcode);
        if (this.mark_tips_list.length)
            writer.writeRepeatedMessage(11, this.mark_tips_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetMapMarkTipsRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.retcode = reader.readInt32();
                    break;
                case 11:
                    reader.readMessage(message.mark_tips_list, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_1.MapMarkTipsInfo.deserialize(reader), dependency_1.MapMarkTipsInfo));
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
        return GetMapMarkTipsRsp.deserialize(bytes);
    }
}
exports.GetMapMarkTipsRsp = GetMapMarkTipsRsp;
_GetMapMarkTipsRsp_one_of_decls = new WeakMap();