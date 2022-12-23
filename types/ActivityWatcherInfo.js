"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatcherInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityWatcherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityWatcherInfo", [
            { no: 2, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "watcher_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isTakenReward: false, totalProgress: 0, curProgress: 0, watcherId: 0 };
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
                case /* bool is_taken_reward */ 2:
                    message.isTakenReward = reader.bool();
                    break;
                case /* uint32 total_progress */ 1:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 cur_progress */ 8:
                    message.curProgress = reader.uint32();
                    break;
                case /* uint32 watcher_id */ 14:
                    message.watcherId = reader.uint32();
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
        /* bool is_taken_reward = 2; */
        if (message.isTakenReward !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isTakenReward);
        /* uint32 total_progress = 1; */
        if (message.totalProgress !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* uint32 cur_progress = 8; */
        if (message.curProgress !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* uint32 watcher_id = 14; */
        if (message.watcherId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.watcherId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityWatcherInfo
 */
exports.ActivityWatcherInfo = new ActivityWatcherInfo$Type();
