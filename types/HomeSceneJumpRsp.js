"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeSceneJumpRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSceneJumpRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeSceneJumpRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HomeSceneJumpRsp extends pb_1.Message {
    constructor(data) {
        super();
        _HomeSceneJumpRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeSceneJumpRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("is_enter_room_scene" in data && data.is_enter_room_scene != undefined) {
                this.is_enter_room_scene = data.is_enter_room_scene;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get is_enter_room_scene() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_enter_room_scene(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new HomeSceneJumpRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.is_enter_room_scene != null) {
            message.is_enter_room_scene = data.is_enter_room_scene;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.is_enter_room_scene != null) {
            data.is_enter_room_scene = this.is_enter_room_scene;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(11, this.retcode);
        if (this.is_enter_room_scene != false)
            writer.writeBool(8, this.is_enter_room_scene);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeSceneJumpRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.retcode = reader.readInt32();
                    break;
                case 8:
                    message.is_enter_room_scene = reader.readBool();
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
        return HomeSceneJumpRsp.deserialize(bytes);
    }
}
exports.HomeSceneJumpRsp = HomeSceneJumpRsp;
_HomeSceneJumpRsp_one_of_decls = new WeakMap();