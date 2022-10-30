"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SetWidgetSlotReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetWidgetSlotReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SetWidgetSlotReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./WidgetSlotOp");
const dependency_2 = require("./WidgetSlotTag");
const pb_1 = require("google-protobuf");
class SetWidgetSlotReq extends pb_1.Message {
    constructor(data) {
        super();
        _SetWidgetSlotReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], __classPrivateFieldGet(this, _SetWidgetSlotReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("tag_list" in data && data.tag_list != undefined) {
                this.tag_list = data.tag_list;
            }
            if ("material_id" in data && data.material_id != undefined) {
                this.material_id = data.material_id;
            }
            if ("op" in data && data.op != undefined) {
                this.op = data.op;
            }
        }
    }
    get tag_list() {
        return pb_1.Message.getFieldWithDefault(this, 15, dependency_2.WidgetSlotTag.WIDGET_SLOT_TAG_QUICK_USE);
    }
    set tag_list(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get material_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set material_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get op() {
        return pb_1.Message.getFieldWithDefault(this, 2, dependency_1.WidgetSlotOp.WIDGET_SLOT_OP_ATTACH);
    }
    set op(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new SetWidgetSlotReq({});
        if (data.tag_list != null) {
            message.tag_list = data.tag_list;
        }
        if (data.material_id != null) {
            message.material_id = data.material_id;
        }
        if (data.op != null) {
            message.op = data.op;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.tag_list != null) {
            data.tag_list = this.tag_list;
        }
        if (this.material_id != null) {
            data.material_id = this.material_id;
        }
        if (this.op != null) {
            data.op = this.op;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.tag_list.length)
            writer.writePackedEnum(15, this.tag_list);
        if (this.material_id != 0)
            writer.writeUint32(6, this.material_id);
        if (this.op != dependency_1.WidgetSlotOp.WIDGET_SLOT_OP_ATTACH)
            writer.writeEnum(2, this.op);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SetWidgetSlotReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.tag_list = reader.readPackedEnum();
                    break;
                case 6:
                    message.material_id = reader.readUint32();
                    break;
                case 2:
                    message.op = reader.readEnum();
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
        return SetWidgetSlotReq.deserialize(bytes);
    }
}
exports.SetWidgetSlotReq = SetWidgetSlotReq;
_SetWidgetSlotReq_one_of_decls = new WeakMap();