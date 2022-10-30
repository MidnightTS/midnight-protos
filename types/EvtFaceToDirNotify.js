"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EvtFaceToDirNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtFaceToDirNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtFaceToDirNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./EvtFaceToDirInfo");
const dependency_2 = require("./ForwardType");
const pb_1 = require("google-protobuf");
class EvtFaceToDirNotify extends pb_1.Message {
    constructor(data) {
        super();
        _EvtFaceToDirNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EvtFaceToDirNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
            if ("evt_face_to_dir_info" in data && data.evt_face_to_dir_info != undefined) {
                this.evt_face_to_dir_info = data.evt_face_to_dir_info;
            }
        }
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 13, dependency_2.ForwardType.FORWARD_TYPE_LOCAL);
    }
    set forward_type(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get evt_face_to_dir_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.EvtFaceToDirInfo, 5);
    }
    set evt_face_to_dir_info(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_evt_face_to_dir_info() {
        return pb_1.Message.getField(this, 5) != null;
    }
    static fromObject(data) {
        const message = new EvtFaceToDirNotify({});
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        if (data.evt_face_to_dir_info != null) {
            message.evt_face_to_dir_info = dependency_1.EvtFaceToDirInfo.fromObject(data.evt_face_to_dir_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        if (this.evt_face_to_dir_info != null) {
            data.evt_face_to_dir_info = this.evt_face_to_dir_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.forward_type != dependency_2.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(13, this.forward_type);
        if (this.has_evt_face_to_dir_info)
            writer.writeMessage(5, this.evt_face_to_dir_info, () => this.evt_face_to_dir_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtFaceToDirNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.forward_type = reader.readEnum();
                    break;
                case 5:
                    reader.readMessage(message.evt_face_to_dir_info, () => message.evt_face_to_dir_info = dependency_1.EvtFaceToDirInfo.deserialize(reader));
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
        return EvtFaceToDirNotify.deserialize(bytes);
    }
}
exports.EvtFaceToDirNotify = EvtFaceToDirNotify;
_EvtFaceToDirNotify_one_of_decls = new WeakMap();
