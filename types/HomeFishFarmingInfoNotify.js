"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeFishFarmingInfoNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFishFarmingInfoNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeFishFarmingInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./HomeFishFarmingInfo");
const pb_1 = require("google-protobuf");
class HomeFishFarmingInfoNotify extends pb_1.Message {
    constructor(data) {
        super();
        _HomeFishFarmingInfoNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], __classPrivateFieldGet(this, _HomeFishFarmingInfoNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fish_farming_info_list" in data && data.fish_farming_info_list != undefined) {
                this.fish_farming_info_list = data.fish_farming_info_list;
            }
        }
    }
    get fish_farming_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.HomeFishFarmingInfo, 15);
    }
    set fish_farming_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    static fromObject(data) {
        const message = new HomeFishFarmingInfoNotify({});
        if (data.fish_farming_info_list != null) {
            message.fish_farming_info_list = data.fish_farming_info_list.map(item => dependency_1.HomeFishFarmingInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.fish_farming_info_list != null) {
            data.fish_farming_info_list = this.fish_farming_info_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.fish_farming_info_list.length)
            writer.writeRepeatedMessage(15, this.fish_farming_info_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeFishFarmingInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.fish_farming_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.HomeFishFarmingInfo.deserialize(reader), dependency_1.HomeFishFarmingInfo));
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
        return HomeFishFarmingInfoNotify.deserialize(bytes);
    }
}
exports.HomeFishFarmingInfoNotify = HomeFishFarmingInfoNotify;
_HomeFishFarmingInfoNotify_one_of_decls = new WeakMap();
