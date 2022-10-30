"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RoguelikeGadgetInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeGadgetInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RoguelikeGadgetInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class RoguelikeGadgetInfo extends pb_1.Message {
    constructor(data) {
        super();
        _RoguelikeGadgetInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _RoguelikeGadgetInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cell_config_id" in data && data.cell_config_id != undefined) {
                this.cell_config_id = data.cell_config_id;
            }
            if ("cell_type" in data && data.cell_type != undefined) {
                this.cell_type = data.cell_type;
            }
            if ("cell_state" in data && data.cell_state != undefined) {
                this.cell_state = data.cell_state;
            }
            if ("cell_id" in data && data.cell_id != undefined) {
                this.cell_id = data.cell_id;
            }
        }
    }
    get cell_config_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set cell_config_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get cell_type() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set cell_type(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get cell_state() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set cell_state(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get cell_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set cell_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new RoguelikeGadgetInfo({});
        if (data.cell_config_id != null) {
            message.cell_config_id = data.cell_config_id;
        }
        if (data.cell_type != null) {
            message.cell_type = data.cell_type;
        }
        if (data.cell_state != null) {
            message.cell_state = data.cell_state;
        }
        if (data.cell_id != null) {
            message.cell_id = data.cell_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cell_config_id != null) {
            data.cell_config_id = this.cell_config_id;
        }
        if (this.cell_type != null) {
            data.cell_type = this.cell_type;
        }
        if (this.cell_state != null) {
            data.cell_state = this.cell_state;
        }
        if (this.cell_id != null) {
            data.cell_id = this.cell_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cell_config_id != 0)
            writer.writeUint32(1, this.cell_config_id);
        if (this.cell_type != 0)
            writer.writeUint32(2, this.cell_type);
        if (this.cell_state != 0)
            writer.writeUint32(3, this.cell_state);
        if (this.cell_id != 0)
            writer.writeUint32(4, this.cell_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RoguelikeGadgetInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.cell_config_id = reader.readUint32();
                    break;
                case 2:
                    message.cell_type = reader.readUint32();
                    break;
                case 3:
                    message.cell_state = reader.readUint32();
                    break;
                case 4:
                    message.cell_id = reader.readUint32();
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
        return RoguelikeGadgetInfo.deserialize(bytes);
    }
}
exports.RoguelikeGadgetInfo = RoguelikeGadgetInfo;
_RoguelikeGadgetInfo_one_of_decls = new WeakMap();
