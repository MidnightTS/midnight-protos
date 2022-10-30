"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_HENCIJOPCIF_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_HENCIJOPCIF = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_HENCIJOPCIF.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ItemParam");
const pb_1 = require("google-protobuf");
class Unk2700_HENCIJOPCIF extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_HENCIJOPCIF_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], __classPrivateFieldGet(this, _Unk2700_HENCIJOPCIF_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_EMIELBMCCPF" in data && data.Unk2700_EMIELBMCCPF != undefined) {
                this.Unk2700_EMIELBMCCPF = data.Unk2700_EMIELBMCCPF;
            }
            if ("reward_item_list" in data && data.reward_item_list != undefined) {
                this.reward_item_list = data.reward_item_list;
            }
        }
    }
    get Unk2700_EMIELBMCCPF() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set Unk2700_EMIELBMCCPF(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get reward_item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 5);
    }
    set reward_item_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    static fromObject(data) {
        const message = new Unk2700_HENCIJOPCIF({});
        if (data.Unk2700_EMIELBMCCPF != null) {
            message.Unk2700_EMIELBMCCPF = data.Unk2700_EMIELBMCCPF;
        }
        if (data.reward_item_list != null) {
            message.reward_item_list = data.reward_item_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_EMIELBMCCPF != null) {
            data.Unk2700_EMIELBMCCPF = this.Unk2700_EMIELBMCCPF;
        }
        if (this.reward_item_list != null) {
            data.reward_item_list = this.reward_item_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_EMIELBMCCPF != 0)
            writer.writeUint32(14, this.Unk2700_EMIELBMCCPF);
        if (this.reward_item_list.length)
            writer.writeRepeatedMessage(5, this.reward_item_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_HENCIJOPCIF();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.Unk2700_EMIELBMCCPF = reader.readUint32();
                    break;
                case 5:
                    reader.readMessage(message.reward_item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
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
        return Unk2700_HENCIJOPCIF.deserialize(bytes);
    }
}
exports.Unk2700_HENCIJOPCIF = Unk2700_HENCIJOPCIF;
_Unk2700_HENCIJOPCIF_one_of_decls = new WeakMap();
