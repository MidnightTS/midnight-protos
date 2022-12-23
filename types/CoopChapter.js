"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoopChapter = exports.CoopChapter_State = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CoopCg_1 = require("./CoopCg");
const CoopReward_1 = require("./CoopReward");
const CoopPoint_1 = require("./CoopPoint");
/**
 * @generated from protobuf enum CoopChapter.State
 */
var CoopChapter_State;
(function (CoopChapter_State) {
    /**
     * @generated from protobuf enum value: STATE_CLOSE = 0;
     */
    CoopChapter_State[CoopChapter_State["CLOSE"] = 0] = "CLOSE";
    /**
     * @generated from protobuf enum value: STATE_COND_NOT_MEET = 1;
     */
    CoopChapter_State[CoopChapter_State["COND_NOT_MEET"] = 1] = "COND_NOT_MEET";
    /**
     * @generated from protobuf enum value: STATE_COND_MEET = 2;
     */
    CoopChapter_State[CoopChapter_State["COND_MEET"] = 2] = "COND_MEET";
    /**
     * @generated from protobuf enum value: STATE_ACCEPT = 3;
     */
    CoopChapter_State[CoopChapter_State["ACCEPT"] = 3] = "ACCEPT";
})(CoopChapter_State = exports.CoopChapter_State || (exports.CoopChapter_State = {}));
// @generated message type with reflection information, may provide speed optimized methods
class CoopChapter$Type extends runtime_5.MessageType {
    constructor() {
        super("CoopChapter", [
            { no: 9, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "coop_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoopPoint_1.CoopPoint },
            { no: 6, name: "finish_dialog_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "state", kind: "enum", T: () => ["CoopChapter.State", CoopChapter_State, "STATE_"] },
            { no: 11, name: "total_end_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "coop_reward_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoopReward_1.CoopReward },
            { no: 4, name: "lock_reason_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "coop_cg_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoopCg_1.CoopCg },
            { no: 15, name: "seen_ending_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "finished_end_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { id: 0, coopPointList: [], finishDialogList: [], state: 0, totalEndCount: 0, coopRewardList: [], lockReasonList: [], coopCgList: [], seenEndingMap: {}, finishedEndCount: 0 };
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
                case /* uint32 id */ 9:
                    message.id = reader.uint32();
                    break;
                case /* repeated CoopPoint coop_point_list */ 12:
                    message.coopPointList.push(CoopPoint_1.CoopPoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 finish_dialog_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishDialogList.push(reader.uint32());
                    else
                        message.finishDialogList.push(reader.uint32());
                    break;
                case /* CoopChapter.State state */ 7:
                    message.state = reader.int32();
                    break;
                case /* uint32 total_end_count */ 11:
                    message.totalEndCount = reader.uint32();
                    break;
                case /* repeated CoopReward coop_reward_list */ 3:
                    message.coopRewardList.push(CoopReward_1.CoopReward.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 lock_reason_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lockReasonList.push(reader.uint32());
                    else
                        message.lockReasonList.push(reader.uint32());
                    break;
                case /* repeated CoopCg coop_cg_list */ 2:
                    message.coopCgList.push(CoopCg_1.CoopCg.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, uint32> seen_ending_map */ 15:
                    this.binaryReadMap15(message.seenEndingMap, reader, options);
                    break;
                case /* uint32 finished_end_count */ 8:
                    message.finishedEndCount = reader.uint32();
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
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field CoopChapter.seen_ending_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 id = 9; */
        if (message.id !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.id);
        /* repeated CoopPoint coop_point_list = 12; */
        for (let i = 0; i < message.coopPointList.length; i++)
            CoopPoint_1.CoopPoint.internalBinaryWrite(message.coopPointList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 finish_dialog_list = 6; */
        if (message.finishDialogList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishDialogList.length; i++)
                writer.uint32(message.finishDialogList[i]);
            writer.join();
        }
        /* CoopChapter.State state = 7; */
        if (message.state !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.state);
        /* uint32 total_end_count = 11; */
        if (message.totalEndCount !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.totalEndCount);
        /* repeated CoopReward coop_reward_list = 3; */
        for (let i = 0; i < message.coopRewardList.length; i++)
            CoopReward_1.CoopReward.internalBinaryWrite(message.coopRewardList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 lock_reason_list = 4; */
        if (message.lockReasonList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lockReasonList.length; i++)
                writer.uint32(message.lockReasonList[i]);
            writer.join();
        }
        /* repeated CoopCg coop_cg_list = 2; */
        for (let i = 0; i < message.coopCgList.length; i++)
            CoopCg_1.CoopCg.internalBinaryWrite(message.coopCgList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> seen_ending_map = 15; */
        for (let k of Object.keys(message.seenEndingMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.seenEndingMap[k]).join();
        /* uint32 finished_end_count = 8; */
        if (message.finishedEndCount !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.finishedEndCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoopChapter
 */
exports.CoopChapter = new CoopChapter$Type();
