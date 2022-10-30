"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SeaLampFlyLampRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLampFlyLampRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SeaLampFlyLampRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SeaLampFlyLampRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SeaLampFlyLampRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SeaLampFlyLampRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_num" in data && data.item_num != undefined) {
                this.item_num = data.item_num;
            }
            if ("item_id" in data && data.item_id != undefined) {
                this.item_id = data.item_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get item_num() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set item_num(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get item_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set item_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new SeaLampFlyLampRsp({});
        if (data.item_num != null) {
            message.item_num = data.item_num;
        }
        if (data.item_id != null) {
            message.item_id = data.item_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.item_num != null) {
            data.item_num = this.item_num;
        }
        if (this.item_id != null) {
            data.item_id = this.item_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_num != 0)
            writer.writeUint32(9, this.item_num);
        if (this.item_id != 0)
            writer.writeUint32(15, this.item_id);
        if (this.retcode != 0)
            writer.writeInt32(14, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SeaLampFlyLampRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.item_num = reader.readUint32();
                    break;
                case 15:
                    message.item_id = reader.readUint32();
                    break;
                case 14:
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
        return SeaLampFlyLampRsp.deserialize(bytes);
    }
}
exports.SeaLampFlyLampRsp = SeaLampFlyLampRsp;
_SeaLampFlyLampRsp_one_of_decls = new WeakMap();