"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaTransferItem = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class GachaTransferItem$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaTransferItem", [
            { no: 1, name: "item", kind: "message", T: () => ItemParam_1.ItemParam },
            { no: 11, name: "is_transfer_item_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isTransferItemNew: false };
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
                case /* ItemParam item */ 1:
                    message.item = ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.item);
                    break;
                case /* bool is_transfer_item_new */ 11:
                    message.isTransferItemNew = reader.bool();
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
        /* ItemParam item = 1; */
        if (message.item)
            ItemParam_1.ItemParam.internalBinaryWrite(message.item, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_transfer_item_new = 11; */
        if (message.isTransferItemNew !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isTransferItemNew);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaTransferItem
 */
exports.GachaTransferItem = new GachaTransferItem$Type();
