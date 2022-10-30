"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClientScriptEventNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientScriptEventNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ClientScriptEventNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ClientScriptEventNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ClientScriptEventNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9], __classPrivateFieldGet(this, _ClientScriptEventNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
            if ("source_entity_id" in data && data.source_entity_id != undefined) {
                this.source_entity_id = data.source_entity_id;
            }
            if ("event_type" in data && data.event_type != undefined) {
                this.event_type = data.event_type;
            }
            if ("target_entity_id" in data && data.target_entity_id != undefined) {
                this.target_entity_id = data.target_entity_id;
            }
        }
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 9, []);
    }
    set param_list(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get source_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set source_entity_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get event_type() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set event_type(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get target_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set target_entity_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new ClientScriptEventNotify({});
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        if (data.source_entity_id != null) {
            message.source_entity_id = data.source_entity_id;
        }
        if (data.event_type != null) {
            message.event_type = data.event_type;
        }
        if (data.target_entity_id != null) {
            message.target_entity_id = data.target_entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        if (this.source_entity_id != null) {
            data.source_entity_id = this.source_entity_id;
        }
        if (this.event_type != null) {
            data.event_type = this.event_type;
        }
        if (this.target_entity_id != null) {
            data.target_entity_id = this.target_entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.param_list.length)
            writer.writePackedInt32(9, this.param_list);
        if (this.source_entity_id != 0)
            writer.writeUint32(14, this.source_entity_id);
        if (this.event_type != 0)
            writer.writeUint32(10, this.event_type);
        if (this.target_entity_id != 0)
            writer.writeUint32(13, this.target_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientScriptEventNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.param_list = reader.readPackedInt32();
                    break;
                case 14:
                    message.source_entity_id = reader.readUint32();
                    break;
                case 10:
                    message.event_type = reader.readUint32();
                    break;
                case 13:
                    message.target_entity_id = reader.readUint32();
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
        return ClientScriptEventNotify.deserialize(bytes);
    }
}
exports.ClientScriptEventNotify = ClientScriptEventNotify;
_ClientScriptEventNotify_one_of_decls = new WeakMap();
