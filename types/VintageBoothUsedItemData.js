"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageBoothUsedItemData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageBoothUsedItemData$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageBoothUsedItemData", [
            { no: 10, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isOpen: false, gadgetId: 0 };
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
                case /* bool is_open */ 10:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 gadget_id */ 3:
                    message.gadgetId = reader.uint32();
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
        /* bool is_open = 10; */
        if (message.isOpen !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 gadget_id = 3; */
        if (message.gadgetId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageBoothUsedItemData
 */
exports.VintageBoothUsedItemData = new VintageBoothUsedItemData$Type();
