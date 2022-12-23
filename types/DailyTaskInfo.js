"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyTaskInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DailyTaskInfo", [
            { no: 7, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "finish_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "daily_task_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { rewardId: 0, finishProgress: 0, isFinished: false, dailyTaskId: 0, progress: 0 };
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
                case /* uint32 reward_id */ 7:
                    message.rewardId = reader.uint32();
                    break;
                case /* uint32 finish_progress */ 12:
                    message.finishProgress = reader.uint32();
                    break;
                case /* bool is_finished */ 2:
                    message.isFinished = reader.bool();
                    break;
                case /* uint32 daily_task_id */ 5:
                    message.dailyTaskId = reader.uint32();
                    break;
                case /* uint32 progress */ 10:
                    message.progress = reader.uint32();
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
        /* uint32 reward_id = 7; */
        if (message.rewardId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* uint32 finish_progress = 12; */
        if (message.finishProgress !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.finishProgress);
        /* bool is_finished = 2; */
        if (message.isFinished !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isFinished);
        /* uint32 daily_task_id = 5; */
        if (message.dailyTaskId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.dailyTaskId);
        /* uint32 progress = 10; */
        if (message.progress !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DailyTaskInfo
 */
exports.DailyTaskInfo = new DailyTaskInfo$Type();
