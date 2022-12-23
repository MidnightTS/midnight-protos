"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerMonthlyBrief = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TowerMonthlyBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerMonthlyBrief", [
            { no: 3, name: "best_floor_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "total_star_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "best_level_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "tower_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { bestFloorIndex: 0, totalStarCount: 0, bestLevelIndex: 0, towerScheduleId: 0 };
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
                case /* uint32 best_floor_index */ 3:
                    message.bestFloorIndex = reader.uint32();
                    break;
                case /* uint32 total_star_count */ 6:
                    message.totalStarCount = reader.uint32();
                    break;
                case /* uint32 best_level_index */ 9:
                    message.bestLevelIndex = reader.uint32();
                    break;
                case /* uint32 tower_schedule_id */ 13:
                    message.towerScheduleId = reader.uint32();
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
        /* uint32 best_floor_index = 3; */
        if (message.bestFloorIndex !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.bestFloorIndex);
        /* uint32 total_star_count = 6; */
        if (message.totalStarCount !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.totalStarCount);
        /* uint32 best_level_index = 9; */
        if (message.bestLevelIndex !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.bestLevelIndex);
        /* uint32 tower_schedule_id = 13; */
        if (message.towerScheduleId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.towerScheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerMonthlyBrief
 */
exports.TowerMonthlyBrief = new TowerMonthlyBrief$Type();
