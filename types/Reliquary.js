"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Reliquary_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reliquary = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: Reliquary.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class Reliquary extends pb_1.Message {
    constructor(data) {
        super();
        _Reliquary_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], __classPrivateFieldGet(this, _Reliquary_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("level" in data && data.level != undefined) {
                this.level = data.level;
            }
            if ("exp" in data && data.exp != undefined) {
                this.exp = data.exp;
            }
            if ("promote_level" in data && data.promote_level != undefined) {
                this.promote_level = data.promote_level;
            }
            if ("main_prop_id" in data && data.main_prop_id != undefined) {
                this.main_prop_id = data.main_prop_id;
            }
            if ("append_prop_id_list" in data && data.append_prop_id_list != undefined) {
                this.append_prop_id_list = data.append_prop_id_list;
            }
        }
    }
    get level() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set level(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get exp() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set exp(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get promote_level() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set promote_level(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get main_prop_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set main_prop_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get append_prop_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 5, []);
    }
    set append_prop_id_list(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new Reliquary({});
        if (data.level != null) {
            message.level = data.level;
        }
        if (data.exp != null) {
            message.exp = data.exp;
        }
        if (data.promote_level != null) {
            message.promote_level = data.promote_level;
        }
        if (data.main_prop_id != null) {
            message.main_prop_id = data.main_prop_id;
        }
        if (data.append_prop_id_list != null) {
            message.append_prop_id_list = data.append_prop_id_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.level != null) {
            data.level = this.level;
        }
        if (this.exp != null) {
            data.exp = this.exp;
        }
        if (this.promote_level != null) {
            data.promote_level = this.promote_level;
        }
        if (this.main_prop_id != null) {
            data.main_prop_id = this.main_prop_id;
        }
        if (this.append_prop_id_list != null) {
            data.append_prop_id_list = this.append_prop_id_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.level != 0)
            writer.writeUint32(1, this.level);
        if (this.exp != 0)
            writer.writeUint32(2, this.exp);
        if (this.promote_level != 0)
            writer.writeUint32(3, this.promote_level);
        if (this.main_prop_id != 0)
            writer.writeUint32(4, this.main_prop_id);
        if (this.append_prop_id_list.length)
            writer.writePackedUint32(5, this.append_prop_id_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Reliquary();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.level = reader.readUint32();
                    break;
                case 2:
                    message.exp = reader.readUint32();
                    break;
                case 3:
                    message.promote_level = reader.readUint32();
                    break;
                case 4:
                    message.main_prop_id = reader.readUint32();
                    break;
                case 5:
                    message.append_prop_id_list = reader.readPackedUint32();
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
        return Reliquary.deserialize(bytes);
    }
}
exports.Reliquary = Reliquary;
_Reliquary_one_of_decls = new WeakMap();