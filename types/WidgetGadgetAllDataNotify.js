"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WidgetGadgetAllDataNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetGadgetAllDataNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WidgetGadgetAllDataNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./WidgetGadgetData");
const pb_1 = require("google-protobuf");
class WidgetGadgetAllDataNotify extends pb_1.Message {
    constructor(data) {
        super();
        _WidgetGadgetAllDataNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13], __classPrivateFieldGet(this, _WidgetGadgetAllDataNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("widget_gadget_data" in data && data.widget_gadget_data != undefined) {
                this.widget_gadget_data = data.widget_gadget_data;
            }
        }
    }
    get widget_gadget_data() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.WidgetGadgetData, 13);
    }
    set widget_gadget_data(value) {
        pb_1.Message.setRepeatedWrapperField(this, 13, value);
    }
    static fromObject(data) {
        const message = new WidgetGadgetAllDataNotify({});
        if (data.widget_gadget_data != null) {
            message.widget_gadget_data = data.widget_gadget_data.map(item => dependency_1.WidgetGadgetData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.widget_gadget_data != null) {
            data.widget_gadget_data = this.widget_gadget_data.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.widget_gadget_data.length)
            writer.writeRepeatedMessage(13, this.widget_gadget_data, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WidgetGadgetAllDataNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    reader.readMessage(message.widget_gadget_data, () => pb_1.Message.addToRepeatedWrapperField(message, 13, dependency_1.WidgetGadgetData.deserialize(reader), dependency_1.WidgetGadgetData));
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
        return WidgetGadgetAllDataNotify.deserialize(bytes);
    }
}
exports.WidgetGadgetAllDataNotify = WidgetGadgetAllDataNotify;
_WidgetGadgetAllDataNotify_one_of_decls = new WeakMap();
