"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonEntryInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WeeklyBossResinDiscountInfo_1 = require("./WeeklyBossResinDiscountInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonEntryInfo", [
            { no: 14, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "max_boss_chest_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_passed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "weekly_boss_resin_discount_info", kind: "message", T: () => WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo },
            { no: 8, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "left_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "next_boss_chest_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { endTime: 0, maxBossChestNum: 0, isPassed: false, dungeonId: 0, leftTimes: 0, nextRefreshTime: 0, nextBossChestRefreshTime: 0, startTime: 0 };
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
                case /* uint32 end_time */ 14:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 max_boss_chest_num */ 9:
                    message.maxBossChestNum = reader.uint32();
                    break;
                case /* bool is_passed */ 13:
                    message.isPassed = reader.bool();
                    break;
                case /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info */ 6:
                    message.weeklyBossResinDiscountInfo = WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options, message.weeklyBossResinDiscountInfo);
                    break;
                case /* uint32 dungeon_id */ 8:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 left_times */ 5:
                    message.leftTimes = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 10:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 next_boss_chest_refresh_time */ 3:
                    message.nextBossChestRefreshTime = reader.uint32();
                    break;
                case /* uint32 start_time */ 11:
                    message.startTime = reader.uint32();
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
        /* uint32 end_time = 14; */
        if (message.endTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.endTime);
        /* uint32 max_boss_chest_num = 9; */
        if (message.maxBossChestNum !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.maxBossChestNum);
        /* bool is_passed = 13; */
        if (message.isPassed !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isPassed);
        /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 6; */
        if (message.weeklyBossResinDiscountInfo)
            WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo.internalBinaryWrite(message.weeklyBossResinDiscountInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 dungeon_id = 8; */
        if (message.dungeonId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* uint32 left_times = 5; */
        if (message.leftTimes !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.leftTimes);
        /* uint32 next_refresh_time = 10; */
        if (message.nextRefreshTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 next_boss_chest_refresh_time = 3; */
        if (message.nextBossChestRefreshTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.nextBossChestRefreshTime);
        /* uint32 start_time = 11; */
        if (message.startTime !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.startTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonEntryInfo
 */
exports.DungeonEntryInfo = new DungeonEntryInfo$Type();
