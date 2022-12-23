"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemHint = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ItemHint$Type extends runtime_5.MessageType {
    constructor() {
        super("ItemHint", [
            { no: 9, name: "is_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isNew: false, guid: 0n, count: 0, itemId: 0 };
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
                case /* bool is_new */ 9:
                    message.isNew = reader.bool();
                    break;
                case /* uint64 guid */ 10:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint32 count */ 15:
                    message.count = reader.uint32();
                    break;
                case /* uint32 item_id */ 3:
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
        /* bool is_new = 9; */
        if (message.isNew !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isNew);
        /* uint64 guid = 10; */
        if (message.guid !== 0n)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.guid);
        /* uint32 count = 15; */
        if (message.count !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.count);
        /* uint32 item_id = 3; */
        if (message.itemId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.itemId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemHint
 */
exports.ItemHint = new ItemHint$Type();
