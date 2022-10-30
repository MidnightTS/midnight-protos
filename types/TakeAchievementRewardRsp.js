"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TakeAchievementRewardRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeAchievementRewardRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeAchievementRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ItemParam");
const pb_1 = require("google-protobuf");
class TakeAchievementRewardRsp extends pb_1.Message {
    constructor(data) {
        super();
        _TakeAchievementRewardRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [7, 10], __classPrivateFieldGet(this, _TakeAchievementRewardRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("id_list" in data && data.id_list != undefined) {
                this.id_list = data.id_list;
            }
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get id_list() {
        return pb_1.Message.getFieldWithDefault(this, 7, []);
    }
    set id_list(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 10);
    }
    set item_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 10, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new TakeAchievementRewardRsp({});
        if (data.id_list != null) {
            message.id_list = data.id_list;
        }
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.id_list != null) {
            data.id_list = this.id_list;
        }
        if (this.item_list != null) {
            data.item_list = this.item_list.map((item) => item.toObject());
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.id_list.length)
            writer.writePackedUint32(7, this.id_list);
        if (this.item_list.length)
            writer.writeRepeatedMessage(10, this.item_list, (item) => item.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(1, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeAchievementRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.id_list = reader.readPackedUint32();
                    break;
                case 10:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 10, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
                    break;
                case 1:
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
        return TakeAchievementRewardRsp.deserialize(bytes);
    }
}
exports.TakeAchievementRewardRsp = TakeAchievementRewardRsp;
_TakeAchievementRewardRsp_one_of_decls = new WeakMap();