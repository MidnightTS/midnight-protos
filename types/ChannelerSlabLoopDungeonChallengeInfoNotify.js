"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabLoopDungeonChallengeInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabLoopDungeonChallengeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabLoopDungeonChallengeInfoNotify", [
            { no: 6, name: "scheme_buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "dungeon_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "condition_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "challenge_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { schemeBuffIdList: [], dungeonIndex: 0, conditionIdList: [], difficultyId: 0, challengeScore: 0 };
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
                case /* repeated uint32 scheme_buff_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.schemeBuffIdList.push(reader.uint32());
                    else
                        message.schemeBuffIdList.push(reader.uint32());
                    break;
                case /* uint32 dungeon_index */ 10:
                    message.dungeonIndex = reader.uint32();
                    break;
                case /* repeated uint32 condition_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.conditionIdList.push(reader.uint32());
                    else
                        message.conditionIdList.push(reader.uint32());
                    break;
                case /* uint32 difficulty_id */ 13:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 challenge_score */ 3:
                    message.challengeScore = reader.uint32();
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
        /* repeated uint32 scheme_buff_id_list = 6; */
        if (message.schemeBuffIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.schemeBuffIdList.length; i++)
                writer.uint32(message.schemeBuffIdList[i]);
            writer.join();
        }
        /* uint32 dungeon_index = 10; */
        if (message.dungeonIndex !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.dungeonIndex);
        /* repeated uint32 condition_id_list = 8; */
        if (message.conditionIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.conditionIdList.length; i++)
                writer.uint32(message.conditionIdList[i]);
            writer.join();
        }
        /* uint32 difficulty_id = 13; */
        if (message.difficultyId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.difficultyId);
        /* uint32 challenge_score = 3; */
        if (message.challengeScore !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.challengeScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabLoopDungeonChallengeInfoNotify
 */
exports.ChannelerSlabLoopDungeonChallengeInfoNotify = new ChannelerSlabLoopDungeonChallengeInfoNotify$Type();
