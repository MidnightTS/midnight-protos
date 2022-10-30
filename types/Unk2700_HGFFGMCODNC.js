"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unk2700_HGFFGMCODNC_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk2700_HGFFGMCODNC = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Unk2700_HGFFGMCODNC.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class Unk2700_HGFFGMCODNC extends pb_1.Message {
    constructor(data) {
        super();
        _Unk2700_HGFFGMCODNC_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Unk2700_HGFFGMCODNC_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("group_id" in data && data.group_id != undefined) {
                this.group_id = data.group_id;
            }
            if ("gadget_id" in data && data.gadget_id != undefined) {
                this.gadget_id = data.gadget_id;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
        }
    }
    get group_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set group_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get gadget_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set gadget_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 8);
    }
    set pos(value) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 8) != null;
    }
    static fromObject(data) {
        const message = new Unk2700_HGFFGMCODNC({});
        if (data.group_id != null) {
            message.group_id = data.group_id;
        }
        if (data.gadget_id != null) {
            message.gadget_id = data.gadget_id;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.group_id != null) {
            data.group_id = this.group_id;
        }
        if (this.gadget_id != null) {
            data.gadget_id = this.gadget_id;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.group_id != 0)
            writer.writeUint32(4, this.group_id);
        if (this.gadget_id != 0)
            writer.writeUint32(7, this.gadget_id);
        if (this.has_pos)
            writer.writeMessage(8, this.pos, () => this.pos.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Unk2700_HGFFGMCODNC();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.group_id = reader.readUint32();
                    break;
                case 7:
                    message.gadget_id = reader.readUint32();
                    break;
                case 8:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
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
        return Unk2700_HGFFGMCODNC.deserialize(bytes);
    }
}
exports.Unk2700_HGFFGMCODNC = Unk2700_HGFFGMCODNC;
_Unk2700_HGFFGMCODNC_one_of_decls = new WeakMap();