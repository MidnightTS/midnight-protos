"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BonusActivityUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonusActivityUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BonusActivityUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./BonusActivityInfo");
const pb_1 = require("google-protobuf");
class BonusActivityUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _BonusActivityUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], __classPrivateFieldGet(this, _BonusActivityUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("bonus_activity_info_list" in data && data.bonus_activity_info_list != undefined) {
                this.bonus_activity_info_list = data.bonus_activity_info_list;
            }
        }
    }
    get bonus_activity_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.BonusActivityInfo, 8);
    }
    set bonus_activity_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    static fromObject(data) {
        const message = new BonusActivityUpdateNotify({});
        if (data.bonus_activity_info_list != null) {
            message.bonus_activity_info_list = data.bonus_activity_info_list.map(item => dependency_1.BonusActivityInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.bonus_activity_info_list != null) {
            data.bonus_activity_info_list = this.bonus_activity_info_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.bonus_activity_info_list.length)
            writer.writeRepeatedMessage(8, this.bonus_activity_info_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BonusActivityUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    reader.readMessage(message.bonus_activity_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.BonusActivityInfo.deserialize(reader), dependency_1.BonusActivityInfo));
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
        return BonusActivityUpdateNotify.deserialize(bytes);
    }
}
exports.BonusActivityUpdateNotify = BonusActivityUpdateNotify;
_BonusActivityUpdateNotify_one_of_decls = new WeakMap();
