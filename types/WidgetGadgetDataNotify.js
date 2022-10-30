"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WidgetGadgetDataNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetGadgetDataNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WidgetGadgetDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./WidgetGadgetData");
const pb_1 = require("google-protobuf");
class WidgetGadgetDataNotify extends pb_1.Message {
    constructor(data) {
        super();
        _WidgetGadgetDataNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _WidgetGadgetDataNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("widget_gadget_data" in data && data.widget_gadget_data != undefined) {
                this.widget_gadget_data = data.widget_gadget_data;
            }
        }
    }
    get widget_gadget_data() {
        return pb_1.Message.getWrapperField(this, dependency_1.WidgetGadgetData, 12);
    }
    set widget_gadget_data(value) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_widget_gadget_data() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data) {
        const message = new WidgetGadgetDataNotify({});
        if (data.widget_gadget_data != null) {
            message.widget_gadget_data = dependency_1.WidgetGadgetData.fromObject(data.widget_gadget_data);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.widget_gadget_data != null) {
            data.widget_gadget_data = this.widget_gadget_data.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_widget_gadget_data)
            writer.writeMessage(12, this.widget_gadget_data, () => this.widget_gadget_data.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WidgetGadgetDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    reader.readMessage(message.widget_gadget_data, () => message.widget_gadget_data = dependency_1.WidgetGadgetData.deserialize(reader));
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
        return WidgetGadgetDataNotify.deserialize(bytes);
    }
}
exports.WidgetGadgetDataNotify = WidgetGadgetDataNotify;
_WidgetGadgetDataNotify_one_of_decls = new WeakMap();