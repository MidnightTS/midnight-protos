"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DelScenePlayTeamEntityNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelScenePlayTeamEntityNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DelScenePlayTeamEntityNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DelScenePlayTeamEntityNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DelScenePlayTeamEntityNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _DelScenePlayTeamEntityNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("del_entity_id_list" in data && data.del_entity_id_list != undefined) {
                this.del_entity_id_list = data.del_entity_id_list;
            }
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
        }
    }
    get del_entity_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set del_entity_id_list(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new DelScenePlayTeamEntityNotify({});
        if (data.del_entity_id_list != null) {
            message.del_entity_id_list = data.del_entity_id_list;
        }
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.del_entity_id_list != null) {
            data.del_entity_id_list = this.del_entity_id_list;
        }
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.del_entity_id_list.length)
            writer.writePackedUint32(2, this.del_entity_id_list);
        if (this.scene_id != 0)
            writer.writeUint32(4, this.scene_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DelScenePlayTeamEntityNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.del_entity_id_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.scene_id = reader.readUint32();
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
        return DelScenePlayTeamEntityNotify.deserialize(bytes);
    }
}
exports.DelScenePlayTeamEntityNotify = DelScenePlayTeamEntityNotify;
_DelScenePlayTeamEntityNotify_one_of_decls = new WeakMap();