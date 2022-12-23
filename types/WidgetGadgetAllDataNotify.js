"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetGadgetAllDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetGadgetData_1 = require("./WidgetGadgetData");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetGadgetAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetGadgetAllDataNotify", [
            { no: 1, name: "widget_gadget_data", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetGadgetData_1.WidgetGadgetData }
        ]);
    }
    create(value) {
        const message = { widgetGadgetData: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated WidgetGadgetData widget_gadget_data */ 1:
                    message.widgetGadgetData.push(WidgetGadgetData_1.WidgetGadgetData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated WidgetGadgetData widget_gadget_data = 1; */
        for (let i = 0; i < message.widgetGadgetData.length; i++)
            WidgetGadgetData_1.WidgetGadgetData.internalBinaryWrite(message.widgetGadgetData[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetGadgetAllDataNotify
 */
exports.WidgetGadgetAllDataNotify = new WidgetGadgetAllDataNotify$Type();
