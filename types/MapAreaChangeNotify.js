"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MapAreaChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapAreaChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MapAreaChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MapAreaInfo");
const pb_1 = require("google-protobuf");
class MapAreaChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _MapAreaChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(this, _MapAreaChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("map_area_info_list" in data && data.map_area_info_list != undefined) {
                this.map_area_info_list = data.map_area_info_list;
            }
        }
    }
    get map_area_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MapAreaInfo, 3);
    }
    set map_area_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data) {
        const message = new MapAreaChangeNotify({});
        if (data.map_area_info_list != null) {
            message.map_area_info_list = data.map_area_info_list.map(item => dependency_1.MapAreaInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.map_area_info_list != null) {
            data.map_area_info_list = this.map_area_info_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.map_area_info_list.length)
            writer.writeRepeatedMessage(3, this.map_area_info_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MapAreaChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.map_area_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.MapAreaInfo.deserialize(reader), dependency_1.MapAreaInfo));
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
        return MapAreaChangeNotify.deserialize(bytes);
    }
}
exports.MapAreaChangeNotify = MapAreaChangeNotify;
_MapAreaChangeNotify_one_of_decls = new WeakMap();