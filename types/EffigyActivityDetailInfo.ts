// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EffigyActivityDetailInfo.proto" (syntax proto3)
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
import { EffigyDailyInfo } from "./EffigyDailyInfo";
/**
 * @generated from protobuf message EffigyActivityDetailInfo
 */
export interface EffigyActivityDetailInfo {
    /**
     * @generated from protobuf field: uint32 last_difficulty_id = 8;
     */
    lastDifficultyId: number;
    /**
     * @generated from protobuf field: repeated uint32 taken_reward_index_list = 13;
     */
    takenRewardIndexList: number[];
    /**
     * @generated from protobuf field: uint32 cur_score = 5;
     */
    curScore: number;
    /**
     * @generated from protobuf field: repeated EffigyDailyInfo daily_info_list = 4;
     */
    dailyInfoList: EffigyDailyInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class EffigyActivityDetailInfo$Type extends MessageType<EffigyActivityDetailInfo> {
    constructor() {
        super("EffigyActivityDetailInfo", [
            { no: 8, name: "last_difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "taken_reward_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "daily_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EffigyDailyInfo }
        ]);
    }
    create(value?: PartialMessage<EffigyActivityDetailInfo>): EffigyActivityDetailInfo {
        const message = { lastDifficultyId: 0, takenRewardIndexList: [], curScore: 0, dailyInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EffigyActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EffigyActivityDetailInfo): EffigyActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 last_difficulty_id */ 8:
                    message.lastDifficultyId = reader.uint32();
                    break;
                case /* repeated uint32 taken_reward_index_list */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenRewardIndexList.push(reader.uint32());
                    else
                        message.takenRewardIndexList.push(reader.uint32());
                    break;
                case /* uint32 cur_score */ 5:
                    message.curScore = reader.uint32();
                    break;
                case /* repeated EffigyDailyInfo daily_info_list */ 4:
                    message.dailyInfoList.push(EffigyDailyInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: EffigyActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 last_difficulty_id = 8; */
        if (message.lastDifficultyId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.lastDifficultyId);
        /* repeated uint32 taken_reward_index_list = 13; */
        if (message.takenRewardIndexList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenRewardIndexList.length; i++)
                writer.uint32(message.takenRewardIndexList[i]);
            writer.join();
        }
        /* uint32 cur_score = 5; */
        if (message.curScore !== 0)
            writer.tag(5, WireType.Varint).uint32(message.curScore);
        /* repeated EffigyDailyInfo daily_info_list = 4; */
        for (let i = 0; i < message.dailyInfoList.length; i++)
            EffigyDailyInfo.internalBinaryWrite(message.dailyInfoList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyActivityDetailInfo
 */
export const EffigyActivityDetailInfo = new EffigyActivityDetailInfo$Type();