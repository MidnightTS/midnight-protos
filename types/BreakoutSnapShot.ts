// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BreakoutSnapShot.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { BreakoutSyncConnectUidInfo } from "./BreakoutSyncConnectUidInfo";
import { BreakoutElementReactionCounter } from "./BreakoutElementReactionCounter";
import { BreakoutSpawnPoint } from "./BreakoutSpawnPoint";
import { BreakoutAction } from "./BreakoutAction";
import { BreakoutPhysicalObject } from "./BreakoutPhysicalObject";
/**
 * @generated from protobuf message BreakoutSnapShot
 */
export interface BreakoutSnapShot {
    /**
     * @generated from protobuf field: uint64 client_game_time = 1;
     */
    clientGameTime: bigint;
    /**
     * @generated from protobuf field: uint64 server_game_time = 2;
     */
    serverGameTime: bigint;
    /**
     * @generated from protobuf field: repeated BreakoutPhysicalObject ball_list = 3;
     */
    ballList: BreakoutPhysicalObject[];
    /**
     * @generated from protobuf field: repeated BreakoutPhysicalObject physical_object_list = 4;
     */
    physicalObjectList: BreakoutPhysicalObject[];
    /**
     * @generated from protobuf field: repeated BreakoutAction action_list = 5;
     */
    actionList: BreakoutAction[];
    /**
     * @generated from protobuf field: uint32 wave_index = 6;
     */
    waveIndex: number;
    /**
     * @generated from protobuf field: bool is_finish = 7;
     */
    isFinish: boolean;
    /**
     * @generated from protobuf field: uint32 score = 8;
     */
    score: number;
    /**
     * @generated from protobuf field: uint32 combo = 9;
     */
    combo: number;
    /**
     * @generated from protobuf field: uint32 max_combo = 10;
     */
    maxCombo: number;
    /**
     * @generated from protobuf field: uint32 life_count = 11;
     */
    lifeCount: number;
    /**
     * @generated from protobuf field: uint32 wave_suite_index = 12;
     */
    waveSuiteIndex: number;
    /**
     * @generated from protobuf field: repeated BreakoutSpawnPoint spawn_point_list = 13;
     */
    spawnPointList: BreakoutSpawnPoint[];
    /**
     * @generated from protobuf field: uint32 remaining_boss_hp = 14;
     */
    remainingBossHp: number;
    /**
     * @generated from protobuf field: repeated BreakoutElementReactionCounter brick_element_reaction_list = 15;
     */
    brickElementReactionList: BreakoutElementReactionCounter[];
    /**
     * @generated from protobuf field: repeated BreakoutElementReactionCounter ball_element_reaction_list = 16;
     */
    ballElementReactionList: BreakoutElementReactionCounter[];
    /**
     * @generated from protobuf field: repeated BreakoutSyncConnectUidInfo uid_info_list = 17;
     */
    uidInfoList: BreakoutSyncConnectUidInfo[];
    /**
     * @generated from protobuf field: repeated BreakoutPhysicalObject dynamic_object_list = 18;
     */
    dynamicObjectList: BreakoutPhysicalObject[];
    /**
     * @generated from protobuf field: repeated uint32 id_index_list = 19;
     */
    idIndexList: number[];
    /**
     * @generated from protobuf field: int32 raw_client_game_time = 20;
     */
    rawClientGameTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutSnapShot$Type extends MessageType<BreakoutSnapShot> {
    constructor() {
        super("BreakoutSnapShot", [
            { no: 1, name: "client_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "server_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "ball_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutPhysicalObject },
            { no: 4, name: "physical_object_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutPhysicalObject },
            { no: 5, name: "action_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutAction },
            { no: 6, name: "wave_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "life_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "wave_suite_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "spawn_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutSpawnPoint },
            { no: 14, name: "remaining_boss_hp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "brick_element_reaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutElementReactionCounter },
            { no: 16, name: "ball_element_reaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutElementReactionCounter },
            { no: 17, name: "uid_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutSyncConnectUidInfo },
            { no: 18, name: "dynamic_object_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BreakoutPhysicalObject },
            { no: 19, name: "id_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "raw_client_game_time", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<BreakoutSnapShot>): BreakoutSnapShot {
        const message = { clientGameTime: 0n, serverGameTime: 0n, ballList: [], physicalObjectList: [], actionList: [], waveIndex: 0, isFinish: false, score: 0, combo: 0, maxCombo: 0, lifeCount: 0, waveSuiteIndex: 0, spawnPointList: [], remainingBossHp: 0, brickElementReactionList: [], ballElementReactionList: [], uidInfoList: [], dynamicObjectList: [], idIndexList: [], rawClientGameTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BreakoutSnapShot>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BreakoutSnapShot): BreakoutSnapShot {
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
                    message.ballList.push(BreakoutPhysicalObject.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutPhysicalObject physical_object_list */ 4:
                    message.physicalObjectList.push(BreakoutPhysicalObject.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutAction action_list */ 5:
                    message.actionList.push(BreakoutAction.internalBinaryRead(reader, reader.uint32(), options));
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
                    message.spawnPointList.push(BreakoutSpawnPoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 remaining_boss_hp */ 14:
                    message.remainingBossHp = reader.uint32();
                    break;
                case /* repeated BreakoutElementReactionCounter brick_element_reaction_list */ 15:
                    message.brickElementReactionList.push(BreakoutElementReactionCounter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutElementReactionCounter ball_element_reaction_list */ 16:
                    message.ballElementReactionList.push(BreakoutElementReactionCounter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutSyncConnectUidInfo uid_info_list */ 17:
                    message.uidInfoList.push(BreakoutSyncConnectUidInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BreakoutPhysicalObject dynamic_object_list */ 18:
                    message.dynamicObjectList.push(BreakoutPhysicalObject.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 id_index_list */ 19:
                    if (wireType === WireType.LengthDelimited)
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BreakoutSnapShot, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 client_game_time = 1; */
        if (message.clientGameTime !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.clientGameTime);
        /* uint64 server_game_time = 2; */
        if (message.serverGameTime !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.serverGameTime);
        /* repeated BreakoutPhysicalObject ball_list = 3; */
        for (let i = 0; i < message.ballList.length; i++)
            BreakoutPhysicalObject.internalBinaryWrite(message.ballList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutPhysicalObject physical_object_list = 4; */
        for (let i = 0; i < message.physicalObjectList.length; i++)
            BreakoutPhysicalObject.internalBinaryWrite(message.physicalObjectList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutAction action_list = 5; */
        for (let i = 0; i < message.actionList.length; i++)
            BreakoutAction.internalBinaryWrite(message.actionList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint32 wave_index = 6; */
        if (message.waveIndex !== 0)
            writer.tag(6, WireType.Varint).uint32(message.waveIndex);
        /* bool is_finish = 7; */
        if (message.isFinish !== false)
            writer.tag(7, WireType.Varint).bool(message.isFinish);
        /* uint32 score = 8; */
        if (message.score !== 0)
            writer.tag(8, WireType.Varint).uint32(message.score);
        /* uint32 combo = 9; */
        if (message.combo !== 0)
            writer.tag(9, WireType.Varint).uint32(message.combo);
        /* uint32 max_combo = 10; */
        if (message.maxCombo !== 0)
            writer.tag(10, WireType.Varint).uint32(message.maxCombo);
        /* uint32 life_count = 11; */
        if (message.lifeCount !== 0)
            writer.tag(11, WireType.Varint).uint32(message.lifeCount);
        /* uint32 wave_suite_index = 12; */
        if (message.waveSuiteIndex !== 0)
            writer.tag(12, WireType.Varint).uint32(message.waveSuiteIndex);
        /* repeated BreakoutSpawnPoint spawn_point_list = 13; */
        for (let i = 0; i < message.spawnPointList.length; i++)
            BreakoutSpawnPoint.internalBinaryWrite(message.spawnPointList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* uint32 remaining_boss_hp = 14; */
        if (message.remainingBossHp !== 0)
            writer.tag(14, WireType.Varint).uint32(message.remainingBossHp);
        /* repeated BreakoutElementReactionCounter brick_element_reaction_list = 15; */
        for (let i = 0; i < message.brickElementReactionList.length; i++)
            BreakoutElementReactionCounter.internalBinaryWrite(message.brickElementReactionList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutElementReactionCounter ball_element_reaction_list = 16; */
        for (let i = 0; i < message.ballElementReactionList.length; i++)
            BreakoutElementReactionCounter.internalBinaryWrite(message.ballElementReactionList[i], writer.tag(16, WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutSyncConnectUidInfo uid_info_list = 17; */
        for (let i = 0; i < message.uidInfoList.length; i++)
            BreakoutSyncConnectUidInfo.internalBinaryWrite(message.uidInfoList[i], writer.tag(17, WireType.LengthDelimited).fork(), options).join();
        /* repeated BreakoutPhysicalObject dynamic_object_list = 18; */
        for (let i = 0; i < message.dynamicObjectList.length; i++)
            BreakoutPhysicalObject.internalBinaryWrite(message.dynamicObjectList[i], writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 id_index_list = 19; */
        if (message.idIndexList.length) {
            writer.tag(19, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.idIndexList.length; i++)
                writer.uint32(message.idIndexList[i]);
            writer.join();
        }
        /* int32 raw_client_game_time = 20; */
        if (message.rawClientGameTime !== 0)
            writer.tag(20, WireType.Varint).int32(message.rawClientGameTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutSnapShot
 */
export const BreakoutSnapShot = new BreakoutSnapShot$Type();
