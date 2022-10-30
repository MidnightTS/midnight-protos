"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StrengthenPointData_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrengthenPointData = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: StrengthenPointData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class StrengthenPointData extends pb_1.Message {
    constructor(data) {
        super();
        _StrengthenPointData_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _StrengthenPointData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("base_point" in data && data.base_point != undefined) {
                this.base_point = data.base_point;
            }
            if ("cur_point" in data && data.cur_point != undefined) {
                this.cur_point = data.cur_point;
            }
        }
    }
    get base_point() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set base_point(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get cur_point() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set cur_point(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new StrengthenPointData({});
        if (data.base_point != null) {
            message.base_point = data.base_point;
        }
        if (data.cur_point != null) {
            message.cur_point = data.cur_point;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.base_point != null) {
            data.base_point = this.base_point;
        }
        if (this.cur_point != null) {
            data.cur_point = this.cur_point;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.base_point != 0)
            writer.writeUint32(10, this.base_point);
        if (this.cur_point != 0)
            writer.writeUint32(11, this.cur_point);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StrengthenPointData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.base_point = reader.readUint32();
                    break;
                case 11:
                    message.cur_point = reader.readUint32();
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
        return StrengthenPointData.deserialize(bytes);
    }
}
exports.StrengthenPointData = StrengthenPointData;
_StrengthenPointData_one_of_decls = new WeakMap();