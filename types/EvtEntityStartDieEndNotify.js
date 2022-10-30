"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EvtEntityStartDieEndNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtEntityStartDieEndNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtEntityStartDieEndNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ForwardType");
const pb_1 = require("google-protobuf");
class EvtEntityStartDieEndNotify extends pb_1.Message {
    constructor(data) {
        super();
        _EvtEntityStartDieEndNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EvtEntityStartDieEndNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("immediately" in data && data.immediately != undefined) {
                this.immediately = data.immediately;
            }
            if ("die_state_flag" in data && data.die_state_flag != undefined) {
                this.die_state_flag = data.die_state_flag;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
        }
    }
    get immediately() {
        return pb_1.Message.getFieldWithDefault(this, 15, false);
    }
    set immediately(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get die_state_flag() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set die_state_flag(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 11, dependency_1.ForwardType.FORWARD_TYPE_LOCAL);
    }
    set forward_type(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new EvtEntityStartDieEndNotify({});
        if (data.immediately != null) {
            message.immediately = data.immediately;
        }
        if (data.die_state_flag != null) {
            message.die_state_flag = data.die_state_flag;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.immediately != null) {
            data.immediately = this.immediately;
        }
        if (this.die_state_flag != null) {
            data.die_state_flag = this.die_state_flag;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.immediately != false)
            writer.writeBool(15, this.immediately);
        if (this.die_state_flag != 0)
            writer.writeUint32(12, this.die_state_flag);
        if (this.entity_id != 0)
            writer.writeUint32(8, this.entity_id);
        if (this.forward_type != dependency_1.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(11, this.forward_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtEntityStartDieEndNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.immediately = reader.readBool();
                    break;
                case 12:
                    message.die_state_flag = reader.readUint32();
                    break;
                case 8:
                    message.entity_id = reader.readUint32();
                    break;
                case 11:
                    message.forward_type = reader.readEnum();
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
        return EvtEntityStartDieEndNotify.deserialize(bytes);
    }
}
exports.EvtEntityStartDieEndNotify = EvtEntityStartDieEndNotify;
_EvtEntityStartDieEndNotify_one_of_decls = new WeakMap();