"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetSlotChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetSlotData_1 = require("./WidgetSlotData");
const WidgetSlotOp_1 = require("./WidgetSlotOp");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetSlotChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetSlotChangeNotify", [
            { no: 5, name: "op", kind: "enum", T: () => ["WidgetSlotOp", WidgetSlotOp_1.WidgetSlotOp, "WIDGET_SLOT_OP_"] },
            { no: 2, name: "slot", kind: "message", T: () => WidgetSlotData_1.WidgetSlotData }
        ]);
    }
    create(value) {
        const message = { op: 0 };
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
                case /* WidgetSlotOp op */ 5:
                    message.op = reader.int32();
                    break;
                case /* WidgetSlotData slot */ 2:
                    message.slot = WidgetSlotData_1.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options, message.slot);
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
        /* WidgetSlotOp op = 5; */
        if (message.op !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.op);
        /* WidgetSlotData slot = 2; */
        if (message.slot)
            WidgetSlotData_1.WidgetSlotData.internalBinaryWrite(message.slot, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetSlotChangeNotify
 */
exports.WidgetSlotChangeNotify = new WidgetSlotChangeNotify$Type();
