"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeSprintBoatRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeSprintBoatRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeSprintBoatRecord", [
            { no: 12, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "watcher_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_touched", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { startTime: 0, groupId: 0, watcherIdList: [], bestScore: 0, isTouched: false };
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
                case /* uint32 start_time */ 12:
                    message.startTime = reader.uint32();
                    break;
                case /* uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated uint32 watcher_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.watcherIdList.push(reader.uint32());
                    else
                        message.watcherIdList.push(reader.uint32());
                    break;
                case /* uint32 best_score */ 13:
                    message.bestScore = reader.uint32();
                    break;
                case /* bool is_touched */ 6:
                    message.isTouched = reader.bool();
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
        /* uint32 start_time = 12; */
        if (message.startTime !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.startTime);
        /* uint32 group_id = 5; */
        if (message.groupId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.groupId);
        /* repeated uint32 watcher_id_list = 2; */
        if (message.watcherIdList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.watcherIdList.length; i++)
                writer.uint32(message.watcherIdList[i]);
            writer.join();
        }
        /* uint32 best_score = 13; */
        if (message.bestScore !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.bestScore);
        /* bool is_touched = 6; */
        if (message.isTouched !== false)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isTouched);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeSprintBoatRecord
 */
exports.SummerTimeSprintBoatRecord = new SummerTimeSprintBoatRecord$Type();
