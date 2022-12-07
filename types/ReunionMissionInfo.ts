// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ReunionMissionInfo.proto" (syntax proto3)
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
import { ReunionWatcherInfo } from "./ReunionWatcherInfo";
/**
 * @generated from protobuf message ReunionMissionInfo
 */
export interface ReunionMissionInfo {
    /**
     * @generated from protobuf field: bool is_taken_reward = 10;
     */
    isTakenReward: boolean;
    /**
     * @generated from protobuf field: bool is_finished = 13;
     */
    isFinished: boolean;
    /**
     * @generated from protobuf field: repeated ReunionWatcherInfo watcher_list = 15;
     */
    watcherList: ReunionWatcherInfo[];
    /**
     * @generated from protobuf field: repeated ReunionWatcherInfo cur_day_watcher_list = 8;
     */
    curDayWatcherList: ReunionWatcherInfo[];
    /**
     * @generated from protobuf field: uint32 next_refresh_time = 5;
     */
    nextRefreshTime: number;
    /**
     * @generated from protobuf field: repeated bool is_taken_reward_list = 4;
     */
    isTakenRewardList: boolean[];
    /**
     * @generated from protobuf field: uint32 mission_id = 9;
     */
    missionId: number;
    /**
     * @generated from protobuf field: uint32 cur_score = 2;
     */
    curScore: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ReunionMissionInfo$Type extends MessageType<ReunionMissionInfo> {
    constructor() {
        super("ReunionMissionInfo", [
            { no: 10, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ReunionWatcherInfo },
            { no: 8, name: "cur_day_watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ReunionWatcherInfo },
            { no: 5, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_taken_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "mission_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ReunionMissionInfo>): ReunionMissionInfo {
        const message = { isTakenReward: false, isFinished: false, watcherList: [], curDayWatcherList: [], nextRefreshTime: 0, isTakenRewardList: [], missionId: 0, curScore: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReunionMissionInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReunionMissionInfo): ReunionMissionInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_taken_reward */ 10:
                    message.isTakenReward = reader.bool();
                    break;
                case /* bool is_finished */ 13:
                    message.isFinished = reader.bool();
                    break;
                case /* repeated ReunionWatcherInfo watcher_list */ 15:
                    message.watcherList.push(ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ReunionWatcherInfo cur_day_watcher_list */ 8:
                    message.curDayWatcherList.push(ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 next_refresh_time */ 5:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* repeated bool is_taken_reward_list */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.isTakenRewardList.push(reader.bool());
                    else
                        message.isTakenRewardList.push(reader.bool());
                    break;
                case /* uint32 mission_id */ 9:
                    message.missionId = reader.uint32();
                    break;
                case /* uint32 cur_score */ 2:
                    message.curScore = reader.uint32();
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
    internalBinaryWrite(message: ReunionMissionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_taken_reward = 10; */
        if (message.isTakenReward !== false)
            writer.tag(10, WireType.Varint).bool(message.isTakenReward);
        /* bool is_finished = 13; */
        if (message.isFinished !== false)
            writer.tag(13, WireType.Varint).bool(message.isFinished);
        /* repeated ReunionWatcherInfo watcher_list = 15; */
        for (let i = 0; i < message.watcherList.length; i++)
            ReunionWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* repeated ReunionWatcherInfo cur_day_watcher_list = 8; */
        for (let i = 0; i < message.curDayWatcherList.length; i++)
            ReunionWatcherInfo.internalBinaryWrite(message.curDayWatcherList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* uint32 next_refresh_time = 5; */
        if (message.nextRefreshTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.nextRefreshTime);
        /* repeated bool is_taken_reward_list = 4; */
        if (message.isTakenRewardList.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.isTakenRewardList.length; i++)
                writer.bool(message.isTakenRewardList[i]);
            writer.join();
        }
        /* uint32 mission_id = 9; */
        if (message.missionId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.missionId);
        /* uint32 cur_score = 2; */
        if (message.curScore !== 0)
            writer.tag(2, WireType.Varint).uint32(message.curScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionMissionInfo
 */
export const ReunionMissionInfo = new ReunionMissionInfo$Type();