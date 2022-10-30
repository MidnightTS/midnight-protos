"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BlossomChestCreateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlossomChestCreateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BlossomChestCreateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class BlossomChestCreateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _BlossomChestCreateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BlossomChestCreateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("refresh_id" in data && data.refresh_id != undefined) {
                this.refresh_id = data.refresh_id;
            }
            if ("circle_camp_id" in data && data.circle_camp_id != undefined) {
                this.circle_camp_id = data.circle_camp_id;
            }
        }
    }
    get refresh_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set refresh_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get circle_camp_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set circle_camp_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new BlossomChestCreateNotify({});
        if (data.refresh_id != null) {
            message.refresh_id = data.refresh_id;
        }
        if (data.circle_camp_id != null) {
            message.circle_camp_id = data.circle_camp_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.refresh_id != null) {
            data.refresh_id = this.refresh_id;
        }
        if (this.circle_camp_id != null) {
            data.circle_camp_id = this.circle_camp_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.refresh_id != 0)
            writer.writeUint32(1, this.refresh_id);
        if (this.circle_camp_id != 0)
            writer.writeUint32(10, this.circle_camp_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlossomChestCreateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.refresh_id = reader.readUint32();
                    break;
                case 10:
                    message.circle_camp_id = reader.readUint32();
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
        return BlossomChestCreateNotify.deserialize(bytes);
    }
}
exports.BlossomChestCreateNotify = BlossomChestCreateNotify;
_BlossomChestCreateNotify_one_of_decls = new WeakMap();