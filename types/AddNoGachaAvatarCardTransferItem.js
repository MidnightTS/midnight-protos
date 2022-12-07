"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNoGachaAvatarCardTransferItem = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AddNoGachaAvatarCardTransferItem$Type extends runtime_5.MessageType {
    constructor() {
        super("AddNoGachaAvatarCardTransferItem", [
            { no: 5, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { count: 0, isNew: false, itemId: 0 };
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
                case /* uint32 count */ 5:
                    message.count = reader.uint32();
                    break;
                case /* bool is_new */ 8:
                    message.isNew = reader.bool();
                    break;
                case /* uint32 item_id */ 11:
                    message.itemId = reader.uint32();
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
        /* uint32 count = 5; */
        if (message.count !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.count);
        /* bool is_new = 8; */
        if (message.isNew !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isNew);
        /* uint32 item_id = 11; */
        if (message.itemId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.itemId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AddNoGachaAvatarCardTransferItem
 */
exports.AddNoGachaAvatarCardTransferItem = new AddNoGachaAvatarCardTransferItem$Type();
