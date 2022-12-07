"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabLoopDungeonInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabLoopDungeonInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabLoopDungeonInfo", [
            { no: 9, name: "is_first_pass_reward_taken", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "last_condition_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "dungeon_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isFirstPassRewardTaken: false, score: 0, lastConditionIdList: [], dungeonIndex: 0, isOpen: false, openTime: 0 };
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
                case /* bool is_first_pass_reward_taken */ 9:
                    message.isFirstPassRewardTaken = reader.bool();
                    break;
                case /* uint32 score */ 7:
                    message.score = reader.uint32();
                    break;
                case /* repeated uint32 last_condition_id_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lastConditionIdList.push(reader.uint32());
                    else
                        message.lastConditionIdList.push(reader.uint32());
                    break;
                case /* uint32 dungeon_index */ 1:
                    message.dungeonIndex = reader.uint32();
                    break;
                case /* bool is_open */ 4:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 open_time */ 13:
                    message.openTime = reader.uint32();
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
        /* bool is_first_pass_reward_taken = 9; */
        if (message.isFirstPassRewardTaken !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isFirstPassRewardTaken);
        /* uint32 score = 7; */
        if (message.score !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.score);
        /* repeated uint32 last_condition_id_list = 10; */
        if (message.lastConditionIdList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lastConditionIdList.length; i++)
                writer.uint32(message.lastConditionIdList[i]);
            writer.join();
        }
        /* uint32 dungeon_index = 1; */
        if (message.dungeonIndex !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.dungeonIndex);
        /* bool is_open = 4; */
        if (message.isOpen !== false)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isOpen);
        /* uint32 open_time = 13; */
        if (message.openTime !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.openTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabLoopDungeonInfo
 */
exports.ChannelerSlabLoopDungeonInfo = new ChannelerSlabLoopDungeonInfo$Type();
