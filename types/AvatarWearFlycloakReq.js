"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarWearFlycloakReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarWearFlycloakReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarWearFlycloakReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AvatarWearFlycloakReq extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarWearFlycloakReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarWearFlycloakReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("flycloak_id" in data && data.flycloak_id != undefined) {
                this.flycloak_id = data.flycloak_id;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get flycloak_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set flycloak_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new AvatarWearFlycloakReq({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.flycloak_id != null) {
            message.flycloak_id = data.flycloak_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.flycloak_id != null) {
            data.flycloak_id = this.flycloak_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(11, this.avatar_guid);
        if (this.flycloak_id != 0)
            writer.writeUint32(13, this.flycloak_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarWearFlycloakReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 13:
                    message.flycloak_id = reader.readUint32();
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
        return AvatarWearFlycloakReq.deserialize(bytes);
    }
}
exports.AvatarWearFlycloakReq = AvatarWearFlycloakReq;
_AvatarWearFlycloakReq_one_of_decls = new WeakMap();
