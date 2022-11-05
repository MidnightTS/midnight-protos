"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Quest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Quest", [
            { no: 1, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_random", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "quest_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "start_game_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "accept_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "lacked_npc_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "finish_progress_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "fail_progress_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "lacked_npc_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "lacked_place_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "lacked_place_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { lackedNpcList: [], finishProgressList: [], failProgressList: [], lackedNpcMap: {}, lackedPlaceList: [], lackedPlaceMap: {} };
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
                case /* optional uint32 quest_id */ 1:
                    message.questId = reader.uint32();
                    break;
                case /* optional uint32 state */ 2:
                    message.state = reader.uint32();
                    break;
                case /* optional uint32 start_time */ 4:
                    message.startTime = reader.uint32();
                    break;
                case /* optional bool is_random */ 5:
                    message.isRandom = reader.bool();
                    break;
                case /* optional uint32 parent_quest_id */ 6:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional uint32 quest_config_id */ 7:
                    message.questConfigId = reader.uint32();
                    break;
                case /* optional uint32 start_game_time */ 8:
                    message.startGameTime = reader.uint32();
                    break;
                case /* optional uint32 accept_time */ 9:
                    message.acceptTime = reader.uint32();
                    break;
                case /* repeated uint32 lacked_npc_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedNpcList.push(reader.uint32());
                    else
                        message.lackedNpcList.push(reader.uint32());
                    break;
                case /* repeated uint32 finish_progress_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishProgressList.push(reader.uint32());
                    else
                        message.finishProgressList.push(reader.uint32());
                    break;
                case /* repeated uint32 fail_progress_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.failProgressList.push(reader.uint32());
                    else
                        message.failProgressList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> lacked_npc_map */ 13:
                    this.binaryReadMap13(message.lackedNpcMap, reader, options);
                    break;
                case /* repeated uint32 lacked_place_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedPlaceList.push(reader.uint32());
                    else
                        message.lackedPlaceList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> lacked_place_map */ 15:
                    this.binaryReadMap15(message.lackedPlaceMap, reader, options);
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
    binaryReadMap13(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.Quest.lacked_npc_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.Quest.lacked_place_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_id = 1; */
        if (message.questId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.questId);
        /* optional uint32 state = 2; */
        if (message.state !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.state);
        /* optional uint32 start_time = 4; */
        if (message.startTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.startTime);
        /* optional bool is_random = 5; */
        if (message.isRandom !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isRandom);
        /* optional uint32 parent_quest_id = 6; */
        if (message.parentQuestId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.parentQuestId);
        /* optional uint32 quest_config_id = 7; */
        if (message.questConfigId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.questConfigId);
        /* optional uint32 start_game_time = 8; */
        if (message.startGameTime !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.startGameTime);
        /* optional uint32 accept_time = 9; */
        if (message.acceptTime !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.acceptTime);
        /* repeated uint32 lacked_npc_list = 10; */
        if (message.lackedNpcList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lackedNpcList.length; i++)
                writer.uint32(message.lackedNpcList[i]);
            writer.join();
        }
        /* repeated uint32 finish_progress_list = 11; */
        if (message.finishProgressList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishProgressList.length; i++)
                writer.uint32(message.finishProgressList[i]);
            writer.join();
        }
        /* repeated uint32 fail_progress_list = 12; */
        if (message.failProgressList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.failProgressList.length; i++)
                writer.uint32(message.failProgressList[i]);
            writer.join();
        }
        /* map<uint32, uint32> lacked_npc_map = 13; */
        for (let k of Object.keys(message.lackedNpcMap))
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.lackedNpcMap[k]).join();
        /* repeated uint32 lacked_place_list = 14; */
        if (message.lackedPlaceList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lackedPlaceList.length; i++)
                writer.uint32(message.lackedPlaceList[i]);
            writer.join();
        }
        /* map<uint32, uint32> lacked_place_map = 15; */
        for (let k of Object.keys(message.lackedPlaceMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.lackedPlaceMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Quest
 */
exports.Quest = new Quest$Type();
