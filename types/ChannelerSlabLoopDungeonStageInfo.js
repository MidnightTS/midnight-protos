"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabLoopDungeonStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChannelerSlabLoopDungeonInfo_1 = require("./ChannelerSlabLoopDungeonInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabLoopDungeonStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabLoopDungeonStageInfo", [
            { no: 5, name: "taken_reward_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "dungeon_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelerSlabLoopDungeonInfo_1.ChannelerSlabLoopDungeonInfo },
            { no: 6, name: "last_difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { takenRewardIndexList: [], isOpen: false, openTime: 0, dungeonInfoList: [], lastDifficultyId: 0 };
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
                case /* repeated uint32 taken_reward_index_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenRewardIndexList.push(reader.uint32());
                    else
                        message.takenRewardIndexList.push(reader.uint32());
                    break;
                case /* bool is_open */ 9:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 open_time */ 7:
                    message.openTime = reader.uint32();
                    break;
                case /* repeated ChannelerSlabLoopDungeonInfo dungeon_info_list */ 3:
                    message.dungeonInfoList.push(ChannelerSlabLoopDungeonInfo_1.ChannelerSlabLoopDungeonInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 last_difficulty_id */ 6:
                    message.lastDifficultyId = reader.uint32();
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
        /* repeated uint32 taken_reward_index_list = 5; */
        if (message.takenRewardIndexList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenRewardIndexList.length; i++)
                writer.uint32(message.takenRewardIndexList[i]);
            writer.join();
        }
        /* bool is_open = 9; */
        if (message.isOpen !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isOpen);
        /* uint32 open_time = 7; */
        if (message.openTime !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.openTime);
        /* repeated ChannelerSlabLoopDungeonInfo dungeon_info_list = 3; */
        for (let i = 0; i < message.dungeonInfoList.length; i++)
            ChannelerSlabLoopDungeonInfo_1.ChannelerSlabLoopDungeonInfo.internalBinaryWrite(message.dungeonInfoList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 last_difficulty_id = 6; */
        if (message.lastDifficultyId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.lastDifficultyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabLoopDungeonStageInfo
 */
exports.ChannelerSlabLoopDungeonStageInfo = new ChannelerSlabLoopDungeonStageInfo$Type();
