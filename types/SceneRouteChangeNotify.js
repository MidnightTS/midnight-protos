"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneRouteChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneRouteChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneRouteChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SceneRouteChangeInfo");
const pb_1 = require("google-protobuf");
class SceneRouteChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _SceneRouteChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _SceneRouteChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("scene_time" in data && data.scene_time != undefined) {
                this.scene_time = data.scene_time;
            }
            if ("route_list" in data && data.route_list != undefined) {
                this.route_list = data.route_list;
            }
        }
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get scene_time() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set scene_time(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get route_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.SceneRouteChangeInfo, 2);
    }
    set route_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new SceneRouteChangeNotify({});
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.scene_time != null) {
            message.scene_time = data.scene_time;
        }
        if (data.route_list != null) {
            message.route_list = data.route_list.map(item => dependency_1.SceneRouteChangeInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.scene_time != null) {
            data.scene_time = this.scene_time;
        }
        if (this.route_list != null) {
            data.route_list = this.route_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_id != 0)
            writer.writeUint32(12, this.scene_id);
        if (this.scene_time != 0)
            writer.writeUint32(11, this.scene_time);
        if (this.route_list.length)
            writer.writeRepeatedMessage(2, this.route_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneRouteChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.scene_id = reader.readUint32();
                    break;
                case 11:
                    message.scene_time = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.route_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.SceneRouteChangeInfo.deserialize(reader), dependency_1.SceneRouteChangeInfo));
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
        return SceneRouteChangeNotify.deserialize(bytes);
    }
}
exports.SceneRouteChangeNotify = SceneRouteChangeNotify;
_SceneRouteChangeNotify_one_of_decls = new WeakMap();
