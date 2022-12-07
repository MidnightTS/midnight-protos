"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonBattleRecordMuipData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBattleRecordMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonBattleRecordMuipData", [
            { no: 1, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "min_cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonGuid: 0n, minCostTime: 0 };
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
                case /* uint64 dungeon_guid */ 1:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 min_cost_time */ 2:
                    message.minCostTime = reader.uint32();
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
        /* uint64 dungeon_guid = 1; */
        if (message.dungeonGuid !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* uint32 min_cost_time = 2; */
        if (message.minCostTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.minCostTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonBattleRecordMuipData
 */
exports.CustomDungeonBattleRecordMuipData = new CustomDungeonBattleRecordMuipData$Type();
