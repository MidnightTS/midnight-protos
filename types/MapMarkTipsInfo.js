"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MapMarkTipsInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMarkTipsInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MapMarkTipsInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MapMarkTipsType");
const pb_1 = require("google-protobuf");
class MapMarkTipsInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MapMarkTipsInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _MapMarkTipsInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("tips_type" in data && data.tips_type != undefined) {
                this.tips_type = data.tips_type;
            }
            if ("point_id_list" in data && data.point_id_list != undefined) {
                this.point_id_list = data.point_id_list;
            }
        }
    }
    get tips_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, dependency_1.MapMarkTipsType.MAP_MARK_TIPS_TYPE_DUNGEON_ELEMENT_TRIAL);
    }
    set tips_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get point_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set point_id_list(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new MapMarkTipsInfo({});
        if (data.tips_type != null) {
            message.tips_type = data.tips_type;
        }
        if (data.point_id_list != null) {
            message.point_id_list = data.point_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.tips_type != null) {
            data.tips_type = this.tips_type;
        }
        if (this.point_id_list != null) {
            data.point_id_list = this.point_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.tips_type != dependency_1.MapMarkTipsType.MAP_MARK_TIPS_TYPE_DUNGEON_ELEMENT_TRIAL)
            writer.writeEnum(1, this.tips_type);
        if (this.point_id_list.length)
            writer.writePackedUint32(2, this.point_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MapMarkTipsInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.tips_type = reader.readEnum();
                    break;
                case 2:
                    message.point_id_list = reader.readPackedUint32();
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
        return MapMarkTipsInfo.deserialize(bytes);
    }
}
exports.MapMarkTipsInfo = MapMarkTipsInfo;
_MapMarkTipsInfo_one_of_decls = new WeakMap();