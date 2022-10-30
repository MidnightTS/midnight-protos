"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AuthorityChange_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorityChange = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AuthorityChange.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./EntityAuthorityInfo");
const pb_1 = require("google-protobuf");
class AuthorityChange extends pb_1.Message {
    constructor(data) {
        super();
        _AuthorityChange_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AuthorityChange_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_authority_info" in data && data.entity_authority_info != undefined) {
                this.entity_authority_info = data.entity_authority_info;
            }
            if ("authority_peer_id" in data && data.authority_peer_id != undefined) {
                this.authority_peer_id = data.authority_peer_id;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
        }
    }
    get entity_authority_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.EntityAuthorityInfo, 5);
    }
    set entity_authority_info(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_entity_authority_info() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get authority_peer_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set authority_peer_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new AuthorityChange({});
        if (data.entity_authority_info != null) {
            message.entity_authority_info = dependency_1.EntityAuthorityInfo.fromObject(data.entity_authority_info);
        }
        if (data.authority_peer_id != null) {
            message.authority_peer_id = data.authority_peer_id;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_authority_info != null) {
            data.entity_authority_info = this.entity_authority_info.toObject();
        }
        if (this.authority_peer_id != null) {
            data.authority_peer_id = this.authority_peer_id;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_entity_authority_info)
            writer.writeMessage(5, this.entity_authority_info, () => this.entity_authority_info.serialize(writer));
        if (this.authority_peer_id != 0)
            writer.writeUint32(3, this.authority_peer_id);
        if (this.entity_id != 0)
            writer.writeUint32(13, this.entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthorityChange();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    reader.readMessage(message.entity_authority_info, () => message.entity_authority_info = dependency_1.EntityAuthorityInfo.deserialize(reader));
                    break;
                case 3:
                    message.authority_peer_id = reader.readUint32();
                    break;
                case 13:
                    message.entity_id = reader.readUint32();
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
        return AuthorityChange.deserialize(bytes);
    }
}
exports.AuthorityChange = AuthorityChange;
_AuthorityChange_one_of_decls = new WeakMap();