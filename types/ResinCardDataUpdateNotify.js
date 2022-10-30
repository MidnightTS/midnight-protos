"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ResinCardDataUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResinCardDataUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ResinCardDataUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ResinCardData");
const pb_1 = require("google-protobuf");
class ResinCardDataUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ResinCardDataUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _ResinCardDataUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("today_start_time" in data && data.today_start_time != undefined) {
                this.today_start_time = data.today_start_time;
            }
            if ("card_data_list" in data && data.card_data_list != undefined) {
                this.card_data_list = data.card_data_list;
            }
        }
    }
    get today_start_time() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set today_start_time(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get card_data_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ResinCardData, 2);
    }
    set card_data_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new ResinCardDataUpdateNotify({});
        if (data.today_start_time != null) {
            message.today_start_time = data.today_start_time;
        }
        if (data.card_data_list != null) {
            message.card_data_list = data.card_data_list.map(item => dependency_1.ResinCardData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.today_start_time != null) {
            data.today_start_time = this.today_start_time;
        }
        if (this.card_data_list != null) {
            data.card_data_list = this.card_data_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.today_start_time != 0)
            writer.writeUint32(6, this.today_start_time);
        if (this.card_data_list.length)
            writer.writeRepeatedMessage(2, this.card_data_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ResinCardDataUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.today_start_time = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.card_data_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.ResinCardData.deserialize(reader), dependency_1.ResinCardData));
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
        return ResinCardDataUpdateNotify.deserialize(bytes);
    }
}
exports.ResinCardDataUpdateNotify = ResinCardDataUpdateNotify;
_ResinCardDataUpdateNotify_one_of_decls = new WeakMap();
