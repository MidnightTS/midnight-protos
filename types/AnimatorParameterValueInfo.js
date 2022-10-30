"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AnimatorParameterValueInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatorParameterValueInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AnimatorParameterValueInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AnimatorParameterValueInfo extends pb_1.Message {
    constructor(data) {
        super();
        _AnimatorParameterValueInfo_one_of_decls.set(this, [[2, 3, 4]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AnimatorParameterValueInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("para_type" in data && data.para_type != undefined) {
                this.para_type = data.para_type;
            }
            if ("int_val" in data && data.int_val != undefined) {
                this.int_val = data.int_val;
            }
            if ("float_val" in data && data.float_val != undefined) {
                this.float_val = data.float_val;
            }
            if ("bool_val" in data && data.bool_val != undefined) {
                this.bool_val = data.bool_val;
            }
        }
    }
    get para_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set para_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get int_val() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set int_val(value) {
        pb_1.Message.setOneofField(this, 2, __classPrivateFieldGet(this, _AnimatorParameterValueInfo_one_of_decls, "f")[0], value);
    }
    get has_int_val() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get float_val() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set float_val(value) {
        pb_1.Message.setOneofField(this, 3, __classPrivateFieldGet(this, _AnimatorParameterValueInfo_one_of_decls, "f")[0], value);
    }
    get has_float_val() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get bool_val() {
        return pb_1.Message.getFieldWithDefault(this, 4, false);
    }
    set bool_val(value) {
        pb_1.Message.setOneofField(this, 4, __classPrivateFieldGet(this, _AnimatorParameterValueInfo_one_of_decls, "f")[0], value);
    }
    get has_bool_val() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get para_val() {
        const cases = {
            0: "none",
            2: "int_val",
            3: "float_val",
            4: "bool_val"
        };
        return cases[pb_1.Message.computeOneofCase(this, [2, 3, 4])];
    }
    static fromObject(data) {
        const message = new AnimatorParameterValueInfo({});
        if (data.para_type != null) {
            message.para_type = data.para_type;
        }
        if (data.int_val != null) {
            message.int_val = data.int_val;
        }
        if (data.float_val != null) {
            message.float_val = data.float_val;
        }
        if (data.bool_val != null) {
            message.bool_val = data.bool_val;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.para_type != null) {
            data.para_type = this.para_type;
        }
        if (this.int_val != null) {
            data.int_val = this.int_val;
        }
        if (this.float_val != null) {
            data.float_val = this.float_val;
        }
        if (this.bool_val != null) {
            data.bool_val = this.bool_val;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.para_type != 0)
            writer.writeUint32(1, this.para_type);
        if (this.has_int_val)
            writer.writeInt32(2, this.int_val);
        if (this.has_float_val)
            writer.writeFloat(3, this.float_val);
        if (this.has_bool_val)
            writer.writeBool(4, this.bool_val);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AnimatorParameterValueInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.para_type = reader.readUint32();
                    break;
                case 2:
                    message.int_val = reader.readInt32();
                    break;
                case 3:
                    message.float_val = reader.readFloat();
                    break;
                case 4:
                    message.bool_val = reader.readBool();
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
        return AnimatorParameterValueInfo.deserialize(bytes);
    }
}
exports.AnimatorParameterValueInfo = AnimatorParameterValueInfo;
_AnimatorParameterValueInfo_one_of_decls = new WeakMap();