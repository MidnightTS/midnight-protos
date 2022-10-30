"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DestroyMaterialRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyMaterialRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DestroyMaterialRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DestroyMaterialRsp extends pb_1.Message {
    constructor(data) {
        super();
        _DestroyMaterialRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12, 13], __classPrivateFieldGet(this, _DestroyMaterialRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("item_count_list" in data && data.item_count_list != undefined) {
                this.item_count_list = data.item_count_list;
            }
            if ("item_id_list" in data && data.item_id_list != undefined) {
                this.item_id_list = data.item_id_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get item_count_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []);
    }
    set item_count_list(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get item_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 13, []);
    }
    set item_id_list(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new DestroyMaterialRsp({});
        if (data.item_count_list != null) {
            message.item_count_list = data.item_count_list;
        }
        if (data.item_id_list != null) {
            message.item_id_list = data.item_id_list;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.item_count_list != null) {
            data.item_count_list = this.item_count_list;
        }
        if (this.item_id_list != null) {
            data.item_id_list = this.item_id_list;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.item_count_list.length)
            writer.writePackedUint32(12, this.item_count_list);
        if (this.item_id_list.length)
            writer.writePackedUint32(13, this.item_id_list);
        if (this.retcode != 0)
            writer.writeInt32(11, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DestroyMaterialRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.item_count_list = reader.readPackedUint32();
                    break;
                case 13:
                    message.item_id_list = reader.readPackedUint32();
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
        return DestroyMaterialRsp.deserialize(bytes);
    }
}
exports.DestroyMaterialRsp = DestroyMaterialRsp;
_DestroyMaterialRsp_one_of_decls = new WeakMap();