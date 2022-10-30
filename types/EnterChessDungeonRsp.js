"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EnterChessDungeonRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterChessDungeonRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EnterChessDungeonRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class EnterChessDungeonRsp extends pb_1.Message {
    constructor(data) {
        super();
        _EnterChessDungeonRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EnterChessDungeonRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("map_id" in data && data.map_id != undefined) {
                this.map_id = data.map_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get map_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set map_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new EnterChessDungeonRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.map_id != null) {
            message.map_id = data.map_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.map_id != null) {
            data.map_id = this.map_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(8, this.retcode);
        if (this.map_id != 0)
            writer.writeUint32(13, this.map_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EnterChessDungeonRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.retcode = reader.readInt32();
                    break;
                case 13:
                    message.map_id = reader.readUint32();
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
        return EnterChessDungeonRsp.deserialize(bytes);
    }
}
exports.EnterChessDungeonRsp = EnterChessDungeonRsp;
_EnterChessDungeonRsp_one_of_decls = new WeakMap();