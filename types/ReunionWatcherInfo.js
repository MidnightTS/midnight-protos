"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionWatcherInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReunionWatcherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ReunionWatcherInfo", [
            { no: 4, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "reward_unlock_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "watcher_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { totalProgress: 0, rewardUnlockTime: 0, watcherId: 0, isTakenReward: false, curProgress: 0 };
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
                case /* uint32 total_progress */ 4:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 reward_unlock_time */ 1:
                    message.rewardUnlockTime = reader.uint32();
                    break;
                case /* uint32 watcher_id */ 9:
                    message.watcherId = reader.uint32();
                    break;
                case /* bool is_taken_reward */ 12:
                    message.isTakenReward = reader.bool();
                    break;
                case /* uint32 cur_progress */ 10:
                    message.curProgress = reader.uint32();
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
        /* uint32 total_progress = 4; */
        if (message.totalProgress !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* uint32 reward_unlock_time = 1; */
        if (message.rewardUnlockTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.rewardUnlockTime);
        /* uint32 watcher_id = 9; */
        if (message.watcherId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.watcherId);
        /* bool is_taken_reward = 12; */
        if (message.isTakenReward !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isTakenReward);
        /* uint32 cur_progress = 10; */
        if (message.curProgress !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.curProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionWatcherInfo
 */
exports.ReunionWatcherInfo = new ReunionWatcherInfo$Type();
