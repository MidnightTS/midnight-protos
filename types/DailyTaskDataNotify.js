"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyTaskDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DailyTaskDataNotify", [
            { no: 13, name: "score_reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "finished_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_taken_score_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { scoreRewardId: 0, finishedNum: 0, isTakenScoreReward: false };
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
                case /* uint32 score_reward_id */ 13:
                    message.scoreRewardId = reader.uint32();
                    break;
                case /* uint32 finished_num */ 8:
                    message.finishedNum = reader.uint32();
                    break;
                case /* bool is_taken_score_reward */ 5:
                    message.isTakenScoreReward = reader.bool();
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
        /* uint32 score_reward_id = 13; */
        if (message.scoreRewardId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.scoreRewardId);
        /* uint32 finished_num = 8; */
        if (message.finishedNum !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.finishedNum);
        /* bool is_taken_score_reward = 5; */
        if (message.isTakenScoreReward !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isTakenScoreReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DailyTaskDataNotify
 */
exports.DailyTaskDataNotify = new DailyTaskDataNotify$Type();
