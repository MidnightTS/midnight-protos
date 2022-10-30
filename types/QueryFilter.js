"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QueryFilter_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFilter = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QueryFilter.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class QueryFilter extends pb_1.Message {
    constructor(data) {
        super();
        _QueryFilter_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QueryFilter_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("type_id" in data && data.type_id != undefined) {
                this.type_id = data.type_id;
            }
            if ("area_mask" in data && data.area_mask != undefined) {
                this.area_mask = data.area_mask;
            }
        }
    }
    get type_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set type_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get area_mask() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set area_mask(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new QueryFilter({});
        if (data.type_id != null) {
            message.type_id = data.type_id;
        }
        if (data.area_mask != null) {
            message.area_mask = data.area_mask;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.type_id != null) {
            data.type_id = this.type_id;
        }
        if (this.area_mask != null) {
            data.area_mask = this.area_mask;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.type_id != 0)
            writer.writeInt32(9, this.type_id);
        if (this.area_mask != 0)
            writer.writeInt32(13, this.area_mask);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryFilter();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.type_id = reader.readInt32();
                    break;
                case 13:
                    message.area_mask = reader.readInt32();
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
        return QueryFilter.deserialize(bytes);
    }
}
exports.QueryFilter = QueryFilter;
_QueryFilter_one_of_decls = new WeakMap();
