"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerWidgetInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetSlotData_1 = require("./WidgetSlotData");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWidgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerWidgetInfo", [
            { no: 6, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "slot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetSlotData_1.WidgetSlotData }
        ]);
    }
    create(value) {
        const message = { uid: 0, slotList: [] };
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
                case /* uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* repeated WidgetSlotData slot_list */ 4:
                    message.slotList.push(WidgetSlotData_1.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 uid = 6; */
        if (message.uid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated WidgetSlotData slot_list = 4; */
        for (let i = 0; i < message.slotList.length; i++)
            WidgetSlotData_1.WidgetSlotData.internalBinaryWrite(message.slotList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerWidgetInfo
 */
exports.PlayerWidgetInfo = new PlayerWidgetInfo$Type();
