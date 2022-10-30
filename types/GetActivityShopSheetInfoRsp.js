"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetActivityShopSheetInfoRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetActivityShopSheetInfoRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetActivityShopSheetInfoRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ActivityShopSheetInfo");
const pb_1 = require("google-protobuf");
class GetActivityShopSheetInfoRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GetActivityShopSheetInfoRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _GetActivityShopSheetInfoRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("sheet_info_list" in data && data.sheet_info_list != undefined) {
                this.sheet_info_list = data.sheet_info_list;
            }
            if ("shop_type" in data && data.shop_type != undefined) {
                this.shop_type = data.shop_type;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get sheet_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ActivityShopSheetInfo, 6);
    }
    set sheet_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get shop_type() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set shop_type(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new GetActivityShopSheetInfoRsp({});
        if (data.sheet_info_list != null) {
            message.sheet_info_list = data.sheet_info_list.map(item => dependency_1.ActivityShopSheetInfo.fromObject(item));
        }
        if (data.shop_type != null) {
            message.shop_type = data.shop_type;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.sheet_info_list != null) {
            data.sheet_info_list = this.sheet_info_list.map((item) => item.toObject());
        }
        if (this.shop_type != null) {
            data.shop_type = this.shop_type;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.sheet_info_list.length)
            writer.writeRepeatedMessage(6, this.sheet_info_list, (item) => item.serialize(writer));
        if (this.shop_type != 0)
            writer.writeUint32(8, this.shop_type);
        if (this.retcode != 0)
            writer.writeInt32(13, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetActivityShopSheetInfoRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    reader.readMessage(message.sheet_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_1.ActivityShopSheetInfo.deserialize(reader), dependency_1.ActivityShopSheetInfo));
                    break;
                case 8:
                    message.shop_type = reader.readUint32();
                    break;
                case 13:
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
        return GetActivityShopSheetInfoRsp.deserialize(bytes);
    }
}
exports.GetActivityShopSheetInfoRsp = GetActivityShopSheetInfoRsp;
_GetActivityShopSheetInfoRsp_one_of_decls = new WeakMap();
