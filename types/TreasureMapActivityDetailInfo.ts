// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TreasureMapActivityDetailInfo.proto" (syntax proto3)
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
import { TreasureMapRegionInfo } from "./TreasureMapRegionInfo";
import { TreasureMapBonusChallengeInfo } from "./TreasureMapBonusChallengeInfo";
/**
 * @generated from protobuf message TreasureMapActivityDetailInfo
 */
export interface TreasureMapActivityDetailInfo {
    /**
     * @generated from protobuf field: bool is_mp_challenge_touched = 15;
     */
    isMpChallengeTouched: boolean;
    /**
     * @generated from protobuf field: uint32 total_mp_spot_num = 12;
     */
    totalMpSpotNum: number;
    /**
     * @generated from protobuf field: uint32 active_region_index = 3;
     */
    activeRegionIndex: number;
    /**
     * @generated from protobuf field: repeated TreasureMapBonusChallengeInfo bonus_challenge_list = 13;
     */
    bonusChallengeList: TreasureMapBonusChallengeInfo[];
    /**
     * @generated from protobuf field: uint32 min_open_player_level = 8;
     */
    minOpenPlayerLevel: number;
    /**
     * @generated from protobuf field: uint32 preview_reward_id = 2;
     */
    previewRewardId: number;
    /**
     * @generated from protobuf field: uint32 treasure_close_time = 1;
     */
    treasureCloseTime: number;
    /**
     * @generated from protobuf field: uint32 currency_num = 4;
     */
    currencyNum: number;
    /**
     * @generated from protobuf field: repeated TreasureMapRegionInfo region_info_list = 11;
     */
    regionInfoList: TreasureMapRegionInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapActivityDetailInfo$Type extends MessageType<TreasureMapActivityDetailInfo> {
    constructor() {
        super("TreasureMapActivityDetailInfo", [
            { no: 15, name: "is_mp_challenge_touched", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "total_mp_spot_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "active_region_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "bonus_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TreasureMapBonusChallengeInfo },
            { no: 8, name: "min_open_player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "preview_reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "treasure_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "currency_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "region_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TreasureMapRegionInfo }
        ]);
    }
    create(value?: PartialMessage<TreasureMapActivityDetailInfo>): TreasureMapActivityDetailInfo {
        const message = { isMpChallengeTouched: false, totalMpSpotNum: 0, activeRegionIndex: 0, bonusChallengeList: [], minOpenPlayerLevel: 0, previewRewardId: 0, treasureCloseTime: 0, currencyNum: 0, regionInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TreasureMapActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TreasureMapActivityDetailInfo): TreasureMapActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_mp_challenge_touched */ 15:
                    message.isMpChallengeTouched = reader.bool();
                    break;
                case /* uint32 total_mp_spot_num */ 12:
                    message.totalMpSpotNum = reader.uint32();
                    break;
                case /* uint32 active_region_index */ 3:
                    message.activeRegionIndex = reader.uint32();
                    break;
                case /* repeated TreasureMapBonusChallengeInfo bonus_challenge_list */ 13:
                    message.bonusChallengeList.push(TreasureMapBonusChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 min_open_player_level */ 8:
                    message.minOpenPlayerLevel = reader.uint32();
                    break;
                case /* uint32 preview_reward_id */ 2:
                    message.previewRewardId = reader.uint32();
                    break;
                case /* uint32 treasure_close_time */ 1:
                    message.treasureCloseTime = reader.uint32();
                    break;
                case /* uint32 currency_num */ 4:
                    message.currencyNum = reader.uint32();
                    break;
                case /* repeated TreasureMapRegionInfo region_info_list */ 11:
                    message.regionInfoList.push(TreasureMapRegionInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: TreasureMapActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_mp_challenge_touched = 15; */
        if (message.isMpChallengeTouched !== false)
            writer.tag(15, WireType.Varint).bool(message.isMpChallengeTouched);
        /* uint32 total_mp_spot_num = 12; */
        if (message.totalMpSpotNum !== 0)
            writer.tag(12, WireType.Varint).uint32(message.totalMpSpotNum);
        /* uint32 active_region_index = 3; */
        if (message.activeRegionIndex !== 0)
            writer.tag(3, WireType.Varint).uint32(message.activeRegionIndex);
        /* repeated TreasureMapBonusChallengeInfo bonus_challenge_list = 13; */
        for (let i = 0; i < message.bonusChallengeList.length; i++)
            TreasureMapBonusChallengeInfo.internalBinaryWrite(message.bonusChallengeList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* uint32 min_open_player_level = 8; */
        if (message.minOpenPlayerLevel !== 0)
            writer.tag(8, WireType.Varint).uint32(message.minOpenPlayerLevel);
        /* uint32 preview_reward_id = 2; */
        if (message.previewRewardId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.previewRewardId);
        /* uint32 treasure_close_time = 1; */
        if (message.treasureCloseTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.treasureCloseTime);
        /* uint32 currency_num = 4; */
        if (message.currencyNum !== 0)
            writer.tag(4, WireType.Varint).uint32(message.currencyNum);
        /* repeated TreasureMapRegionInfo region_info_list = 11; */
        for (let i = 0; i < message.regionInfoList.length; i++)
            TreasureMapRegionInfo.internalBinaryWrite(message.regionInfoList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureMapActivityDetailInfo
 */
export const TreasureMapActivityDetailInfo = new TreasureMapActivityDetailInfo$Type();
