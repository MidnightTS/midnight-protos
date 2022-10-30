"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PropValue_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropValue = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PropValue.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PropValue extends pb_1.Message {
    constructor(data) {
        super();
        _PropValue_one_of_decls.set(this, [[2, 3]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PropValue_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("type" in data && data.type != undefined) {
                this.type = data.type;
            }
            if ("val" in data && data.val != undefined) {
                this.val = data.val;
            }
            if ("ival" in data && data.ival != undefined) {
                this.ival = data.ival;
            }
            if ("fval" in data && data.fval != undefined) {
                this.fval = data.fval;
            }
        }
    }
    get type() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get val() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set val(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get ival() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set ival(value) {
        pb_1.Message.setOneofField(this, 2, __classPrivateFieldGet(this, _PropValue_one_of_decls, "f")[0], value);
    }
    get has_ival() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get fval() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set fval(value) {
        pb_1.Message.setOneofField(this, 3, __classPrivateFieldGet(this, _PropValue_one_of_decls, "f")[0], value);
    }
    get has_fval() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get value() {
        const cases = {
            0: "none",
            2: "ival",
            3: "fval"
        };
        return cases[pb_1.Message.computeOneofCase(this, [2, 3])];
    }
    static fromObject(data) {
        const message = new PropValue({});
        if (data.type != null) {
            message.type = data.type;
        }
        if (data.val != null) {
            message.val = data.val;
        }
        if (data.ival != null) {
            message.ival = data.ival;
        }
        if (data.fval != null) {
            message.fval = data.fval;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.type != null) {
            data.type = this.type;
        }
        if (this.val != null) {
            data.val = this.val;
        }
        if (this.ival != null) {
            data.ival = this.ival;
        }
        if (this.fval != null) {
            data.fval = this.fval;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.type != 0)
            writer.writeUint32(1, this.type);
        if (this.val != 0)
            writer.writeInt64(4, this.val);
        if (this.has_ival)
            writer.writeInt64(2, this.ival);
        if (this.has_fval)
            writer.writeFloat(3, this.fval);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PropValue();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.type = reader.readUint32();
                    break;
                case 4:
                    message.val = reader.readInt64();
                    break;
                case 2:
                    message.ival = reader.readInt64();
                    break;
                case 3:
                    message.fval = reader.readFloat();
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
        return PropValue.deserialize(bytes);
    }
}
exports.PropValue = PropValue;
_PropValue_one_of_decls = new WeakMap();
