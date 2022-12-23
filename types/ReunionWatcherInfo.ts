// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ReunionWatcherInfo.proto" (syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message ReunionWatcherInfo
 */
export interface ReunionWatcherInfo {
    /**
     * @generated from protobuf field: uint32 total_progress = 4;
     */
    totalProgress: number;
    /**
     * @generated from protobuf field: uint32 reward_unlock_time = 1;
     */
    rewardUnlockTime: number;
    /**
     * @generated from protobuf field: uint32 watcher_id = 9;
     */
    watcherId: number;
    /**
     * @generated from protobuf field: bool is_taken_reward = 12;
     */
    isTakenReward: boolean;
    /**
     * @generated from protobuf field: uint32 cur_progress = 10;
     */
    curProgress: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ReunionWatcherInfo$Type extends MessageType<ReunionWatcherInfo> {
    constructor() {
        super("ReunionWatcherInfo", [
            { no: 4, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "reward_unlock_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "watcher_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ReunionWatcherInfo>): ReunionWatcherInfo {
        const message = { totalProgress: 0, rewardUnlockTime: 0, watcherId: 0, isTakenReward: false, curProgress: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReunionWatcherInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReunionWatcherInfo): ReunionWatcherInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 total_progress */ 4:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 reward_unlock_time */ 1:
                    message.rewardUnlockTime = reader.uint32();
                    break;
                case /* uint32 watcher_id */ 9:
                    message.watcherId = reader.uint32();
                    break;
                case /* bool is_taken_reward */ 12:
                    message.isTakenReward = reader.bool();
                    break;
                case /* uint32 cur_progress */ 10:
                    message.curProgress = reader.uint32();
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
    internalBinaryWrite(message: ReunionWatcherInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 total_progress = 4; */
        if (message.totalProgress !== 0)
            writer.tag(4, WireType.Varint).uint32(message.totalProgress);
        /* uint32 reward_unlock_time = 1; */
        if (message.rewardUnlockTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.rewardUnlockTime);
        /* uint32 watcher_id = 9; */
        if (message.watcherId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.watcherId);
        /* bool is_taken_reward = 12; */
        if (message.isTakenReward !== false)
            writer.tag(12, WireType.Varint).bool(message.isTakenReward);
        /* uint32 cur_progress = 10; */
        if (message.curProgress !== 0)
            writer.tag(10, WireType.Varint).uint32(message.curProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionWatcherInfo
 */
export const ReunionWatcherInfo = new ReunionWatcherInfo$Type();
