"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeBeHelpedNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FurnitureMakeSlot_1 = require("./FurnitureMakeSlot");
const FurnitureMakeBeHelpedData_1 = require("./FurnitureMakeBeHelpedData");
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeBeHelpedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FurnitureMakeBeHelpedNotify", [
            { no: 12, name: "furniture_make_helped_data", kind: "message", T: () => FurnitureMakeBeHelpedData_1.FurnitureMakeBeHelpedData },
            { no: 3, name: "furniture_make_slot", kind: "message", T: () => FurnitureMakeSlot_1.FurnitureMakeSlot }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* FurnitureMakeBeHelpedData furniture_make_helped_data */ 12:
                    message.furnitureMakeHelpedData = FurnitureMakeBeHelpedData_1.FurnitureMakeBeHelpedData.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeHelpedData);
                    break;
                case /* FurnitureMakeSlot furniture_make_slot */ 3:
                    message.furnitureMakeSlot = FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
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
        /* FurnitureMakeBeHelpedData furniture_make_helped_data = 12; */
        if (message.furnitureMakeHelpedData)
            FurnitureMakeBeHelpedData_1.FurnitureMakeBeHelpedData.internalBinaryWrite(message.furnitureMakeHelpedData, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* FurnitureMakeSlot furniture_make_slot = 3; */
        if (message.furnitureMakeSlot)
            FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FurnitureMakeBeHelpedNotify
 */
exports.FurnitureMakeBeHelpedNotify = new FurnitureMakeBeHelpedNotify$Type();
