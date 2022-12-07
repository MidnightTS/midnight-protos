"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonEntryCond = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DungeonEntryBlockReason_1 = require("./DungeonEntryBlockReason");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryCond$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonEntryCond", [
            { no: 2, name: "cond_reason", kind: "enum", T: () => ["DungeonEntryBlockReason", DungeonEntryBlockReason_1.DungeonEntryBlockReason, "DUNGEON_ENTRY_BLOCK_REASON_"] },
            { no: 1, name: "param1", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { condReason: 0, param1: 0 };
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
                case /* DungeonEntryBlockReason cond_reason */ 2:
                    message.condReason = reader.int32();
                    break;
                case /* uint32 param1 */ 1:
                    message.param1 = reader.uint32();
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
        /* DungeonEntryBlockReason cond_reason = 2; */
        if (message.condReason !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.condReason);
        /* uint32 param1 = 1; */
        if (message.param1 !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.param1);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonEntryCond
 */
exports.DungeonEntryCond = new DungeonEntryCond$Type();
