"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionMissionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ReunionWatcherInfo_1 = require("./ReunionWatcherInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ReunionMissionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ReunionMissionInfo", [
            { no: 10, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ReunionWatcherInfo_1.ReunionWatcherInfo },
            { no: 8, name: "cur_day_watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ReunionWatcherInfo_1.ReunionWatcherInfo },
            { no: 5, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_taken_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "mission_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isTakenReward: false, isFinished: false, watcherList: [], curDayWatcherList: [], nextRefreshTime: 0, isTakenRewardList: [], missionId: 0, curScore: 0 };
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
                case /* bool is_taken_reward */ 10:
                    message.isTakenReward = reader.bool();
                    break;
                case /* bool is_finished */ 13:
                    message.isFinished = reader.bool();
                    break;
                case /* repeated ReunionWatcherInfo watcher_list */ 15:
                    message.watcherList.push(ReunionWatcherInfo_1.ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ReunionWatcherInfo cur_day_watcher_list */ 8:
                    message.curDayWatcherList.push(ReunionWatcherInfo_1.ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 next_refresh_time */ 5:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* repeated bool is_taken_reward_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.isTakenRewardList.push(reader.bool());
                    else
                        message.isTakenRewardList.push(reader.bool());
                    break;
                case /* uint32 mission_id */ 9:
                    message.missionId = reader.uint32();
                    break;
                case /* uint32 cur_score */ 2:
                    message.curScore = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_taken_reward = 10; */
        if (message.isTakenReward !== false)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isTakenReward);
        /* bool is_finished = 13; */
        if (message.isFinished !== false)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isFinished);
        /* repeated ReunionWatcherInfo watcher_list = 15; */
        for (let i = 0; i < message.watcherList.length; i++)
            ReunionWatcherInfo_1.ReunionWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated ReunionWatcherInfo cur_day_watcher_list = 8; */
        for (let i = 0; i < message.curDayWatcherList.length; i++)
            ReunionWatcherInfo_1.ReunionWatcherInfo.internalBinaryWrite(message.curDayWatcherList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 next_refresh_time = 5; */
        if (message.nextRefreshTime !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* repeated bool is_taken_reward_list = 4; */
        if (message.isTakenRewardList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.isTakenRewardList.length; i++)
                writer.bool(message.isTakenRewardList[i]);
            writer.join();
        }
        /* uint32 mission_id = 9; */
        if (message.missionId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.missionId);
        /* uint32 cur_score = 2; */
        if (message.curScore !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.curScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionMissionInfo
 */
exports.ReunionMissionInfo = new ReunionMissionInfo$Type();
