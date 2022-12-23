"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakoutSnapShot = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BreakoutSyncConnectUidInfo_1 = require("./BreakoutSyncConnectUidInfo");
const BreakoutElementReactionCounter_1 = require("./BreakoutElementReactionCounter");
const BreakoutSpawnPoint_1 = require("./BreakoutSpawnPoint");
const BreakoutAction_1 = require("./BreakoutAction");
const BreakoutPhysicalObject_1 = require("./BreakoutPhysicalObject");
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutSnapShot$Type extends runtime_5.MessageType {
    constructor() {
        super("BreakoutSnapShot", [
            { no: 1, name: "client_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "server_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "ball_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutPhysicalObject_1.BreakoutPhysicalObject },
            { no: 4, name: "physical_object_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutPhysicalObject_1.BreakoutPhysicalObject },
            { no: 5, name: "action_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutAction_1.BreakoutAction },
            { no: 6, name: "wave_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "life_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "wave_suite_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "spawn_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutSpawnPoint_1.BreakoutSpawnPoint },
            { no: 14, name: "remaining_boss_hp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "brick_element_reaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutElementReactionCounter_1.BreakoutElementReactionCounter },
            { no: 16, name: "ball_element_reaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutElementReactionCounter_1.BreakoutElementReactionCounter },
            { no: 17, name: "uid_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutSyncConnectUidInfo_1.BreakoutSyncConnectUidInfo },
            { no: 18, name: "dynamic_object_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutPhysicalObject_1.BreakoutPhysicalObject },
            { no: 19, name: "id_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "raw_client_game_time", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { clientGameTime: 0n, serverGameTime: 0n, ballList: [], physicalObjectList: [], actionList: [], waveIndex: 0, isFinish: false, score: 0, combo: 0, maxCombo: 0, lifeCount: 0, waveSuiteIndex: 0, spawnPointList: [], remainingBossHp: 0, brickElementReactionList: [], ballElementReactionList: [], uidInfoList: [], dynamicObjectList: [], idIndexList: [], rawClientGameTime: 0 };
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
                case /* uint64 client_game_time */ 1:
                    message.clientGameTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 server_game_time */ 2:
                    message.serverGameTime = reader.uint64().toBigInt();
                    break;
                case /* repeated BreakoutPhysicalObject ball_list */ 3:
                    message.ballList.push(BreakoutPhysicalObject_1.BreakoutPhysicalObject.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutPhysicalObject physical_object_list */ 4:
                    message.physicalObjectList.push(BreakoutPhysicalObject_1.BreakoutPhysicalObject.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutAction action_list */ 5:
                    message.actionList.push(BreakoutAction_1.BreakoutAction.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 wave_index */ 6:
                    message.waveIndex = reader.uint32();
                    break;
                case /* bool is_finish */ 7:
                    message.isFinish = reader.bool();
                    break;
                case /* uint32 score */ 8:
                    message.score = reader.uint32();
                    break;
                case /* uint32 combo */ 9:
                    message.combo = reader.uint32();
                    break;
                case /* uint32 max_combo */ 10:
                    message.maxCombo = reader.uint32();
                    break;
                case /* uint32 life_count */ 11:
                    message.lifeCount = reader.uint32();
                    break;
                case /* uint32 wave_suite_index */ 12:
                    message.waveSuiteIndex = reader.uint32();
                    break;
                case /* repeated BreakoutSpawnPoint spawn_point_list */ 13:
                    message.spawnPointList.push(BreakoutSpawnPoint_1.BreakoutSpawnPoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 remaining_boss_hp */ 14:
                    message.remainingBossHp = reader.uint32();
                    break;
                case /* repeated BreakoutElementReactionCounter brick_element_reaction_list */ 15:
                    message.brickElementReactionList.push(BreakoutElementReactionCounter_1.BreakoutElementReactionCounter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutElementReactionCounter ball_element_reaction_list */ 16:
                    message.ballElementReactionList.push(BreakoutElementReactionCounter_1.BreakoutElementReactionCounter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutSyncConnectUidInfo uid_info_list */ 17:
                    message.uidInfoList.push(BreakoutSyncConnectUidInfo_1.BreakoutSyncConnectUidInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutPhysicalObject dynamic_object_list */ 18:
                    message.dynamicObjectList.push(BreakoutPhysicalObject_1.BreakoutPhysicalObject.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 id_index_list */ 19:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.idIndexList.push(reader.uint32());
                    else
                        message.idIndexList.push(reader.uint32());
                    break;
                case /* int32 raw_client_game_time */ 20:
                    message.rawClientGameTime = reader.int32();
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
        /* uint64 client_game_time = 1; */
        if (message.clientGameTime !== 0n)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.clientGameTime);
        /* uint64 server_game_time = 2; */
        if (message.serverGameTime !== 0n)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.serverGameTime);
        /* repeated BreakoutPhysicalObject ball_list = 3; */
        for (let i = 0; i < message.ballList.length; i++)
            BreakoutPhysicalObject_1.BreakoutPhysicalObject.internalBinaryWrite(message.ballList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutPhysicalObject physical_object_list = 4; */
        for (let i = 0; i < message.physicalObjectList.length; i++)
            BreakoutPhysicalObject_1.BreakoutPhysicalObject.internalBinaryWrite(message.physicalObjectList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutAction action_list = 5; */
        for (let i = 0; i < message.actionList.length; i++)
            BreakoutAction_1.BreakoutAction.internalBinaryWrite(message.actionList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 wave_index = 6; */
        if (message.waveIndex !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.waveIndex);
        /* bool is_finish = 7; */
        if (message.isFinish !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isFinish);
        /* uint32 score = 8; */
        if (message.score !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.score);
        /* uint32 combo = 9; */
        if (message.combo !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.combo);
        /* uint32 max_combo = 10; */
        if (message.maxCombo !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.maxCombo);
        /* uint32 life_count = 11; */
        if (message.lifeCount !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.lifeCount);
        /* uint32 wave_suite_index = 12; */
        if (message.waveSuiteIndex !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.waveSuiteIndex);
        /* repeated BreakoutSpawnPoint spawn_point_list = 13; */
        for (let i = 0; i < message.spawnPointList.length; i++)
            BreakoutSpawnPoint_1.BreakoutSpawnPoint.internalBinaryWrite(message.spawnPointList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 remaining_boss_hp = 14; */
        if (message.remainingBossHp !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.remainingBossHp);
        /* repeated BreakoutElementReactionCounter brick_element_reaction_list = 15; */
        for (let i = 0; i < message.brickElementReactionList.length; i++)
            BreakoutElementReactionCounter_1.BreakoutElementReactionCounter.internalBinaryWrite(message.brickElementReactionList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutElementReactionCounter ball_element_reaction_list = 16; */
        for (let i = 0; i < message.ballElementReactionList.length; i++)
            BreakoutElementReactionCounter_1.BreakoutElementReactionCounter.internalBinaryWrite(message.ballElementReactionList[i], writer.tag(16, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutSyncConnectUidInfo uid_info_list = 17; */
        for (let i = 0; i < message.uidInfoList.length; i++)
            BreakoutSyncConnectUidInfo_1.BreakoutSyncConnectUidInfo.internalBinaryWrite(message.uidInfoList[i], writer.tag(17, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutPhysicalObject dynamic_object_list = 18; */
        for (let i = 0; i < message.dynamicObjectList.length; i++)
            BreakoutPhysicalObject_1.BreakoutPhysicalObject.internalBinaryWrite(message.dynamicObjectList[i], writer.tag(18, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 id_index_list = 19; */
        if (message.idIndexList.length) {
            writer.tag(19, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.idIndexList.length; i++)
                writer.uint32(message.idIndexList[i]);
            writer.join();
        }
        /* int32 raw_client_game_time = 20; */
        if (message.rawClientGameTime !== 0)
            writer.tag(20, runtime_2.WireType.Varint).int32(message.rawClientGameTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutSnapShot
 */
exports.BreakoutSnapShot = new BreakoutSnapShot$Type();
