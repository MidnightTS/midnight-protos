// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "DungeonChallengeFinishNotify.proto" (syntax proto3)
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
import { CustomDungeonResultInfo } from "./CustomDungeonResultInfo";
import { PotionDungeonResultInfo } from "./PotionDungeonResultInfo";
import { EffigyChallengeDungeonResultInfo } from "./EffigyChallengeDungeonResultInfo";
import { ChannelerSlabLoopDungeonResultInfo } from "./ChannelerSlabLoopDungeonResultInfo";
import { StrengthenPointData } from "./StrengthenPointData";
import { ChallengeFinishType } from "./ChallengeFinishType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 916;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message DungeonChallengeFinishNotify
 */
export interface DungeonChallengeFinishNotify {
    /**
     * @generated from protobuf field: bool is_new_record = 9;
     */
    isNewRecord: boolean;
    /**
     * @generated from protobuf field: uint32 current_value = 5;
     */
    currentValue: number;
    /**
     * @generated from protobuf field: ChallengeFinishType finish_type = 3;
     */
    finishType: ChallengeFinishType;
    /**
     * @generated from protobuf field: map<uint32, StrengthenPointData> strengthen_point_data_map = 11;
     */
    strengthenPointDataMap: {
        [key: number]: StrengthenPointData;
    };
    /**
     * @generated from protobuf field: uint32 challenge_record_type = 2;
     */
    challengeRecordType: number;
    /**
     * @generated from protobuf field: bool is_success = 8;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: uint32 challenge_index = 12;
     */
    challengeIndex: number;
    /**
     * @generated from protobuf field: uint32 time_cost = 7;
     */
    timeCost: number;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "channellerSlabLoopDungeonResultInfo";
        /**
         * @generated from protobuf field: ChannelerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info = 1545;
         */
        channellerSlabLoopDungeonResultInfo: ChannelerSlabLoopDungeonResultInfo;
    } | {
        oneofKind: "effigyChallengeDungeonResultInfo";
        /**
         * @generated from protobuf field: EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info = 76;
         */
        effigyChallengeDungeonResultInfo: EffigyChallengeDungeonResultInfo;
    } | {
        oneofKind: "potionDungeonResultInfo";
        /**
         * @generated from protobuf field: PotionDungeonResultInfo potion_dungeon_result_info = 216;
         */
        potionDungeonResultInfo: PotionDungeonResultInfo;
    } | {
        oneofKind: "customDungeonResultInfo";
        /**
         * @generated from protobuf field: CustomDungeonResultInfo custom_dungeon_result_info = 1678;
         */
        customDungeonResultInfo: CustomDungeonResultInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class DungeonChallengeFinishNotify$Type extends MessageType<DungeonChallengeFinishNotify> {
    constructor() {
        super("DungeonChallengeFinishNotify", [
            { no: 9, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "current_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "finish_type", kind: "enum", T: () => ["ChallengeFinishType", ChallengeFinishType, "CHALLENGE_FINISH_TYPE_"] },
            { no: 11, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => StrengthenPointData } },
            { no: 2, name: "challenge_record_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "time_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1545, name: "channeller_slab_loop_dungeon_result_info", kind: "message", oneof: "detail", T: () => ChannelerSlabLoopDungeonResultInfo },
            { no: 76, name: "effigy_challenge_dungeon_result_info", kind: "message", oneof: "detail", T: () => EffigyChallengeDungeonResultInfo },
            { no: 216, name: "potion_dungeon_result_info", kind: "message", oneof: "detail", T: () => PotionDungeonResultInfo },
            { no: 1678, name: "custom_dungeon_result_info", kind: "message", oneof: "detail", T: () => CustomDungeonResultInfo }
        ]);
    }
    create(value?: PartialMessage<DungeonChallengeFinishNotify>): DungeonChallengeFinishNotify {
        const message = { isNewRecord: false, currentValue: 0, finishType: 0, strengthenPointDataMap: {}, challengeRecordType: 0, isSuccess: false, challengeIndex: 0, timeCost: 0, detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DungeonChallengeFinishNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DungeonChallengeFinishNotify): DungeonChallengeFinishNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_new_record */ 9:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 current_value */ 5:
                    message.currentValue = reader.uint32();
                    break;
                case /* ChallengeFinishType finish_type */ 3:
                    message.finishType = reader.int32();
                    break;
                case /* map<uint32, StrengthenPointData> strengthen_point_data_map */ 11:
                    this.binaryReadMap11(message.strengthenPointDataMap, reader, options);
                    break;
                case /* uint32 challenge_record_type */ 2:
                    message.challengeRecordType = reader.uint32();
                    break;
                case /* bool is_success */ 8:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 challenge_index */ 12:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 time_cost */ 7:
                    message.timeCost = reader.uint32();
                    break;
                case /* ChannelerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info */ 1545:
                    message.detail = {
                        oneofKind: "channellerSlabLoopDungeonResultInfo",
                        channellerSlabLoopDungeonResultInfo: ChannelerSlabLoopDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).channellerSlabLoopDungeonResultInfo)
                    };
                    break;
                case /* EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info */ 76:
                    message.detail = {
                        oneofKind: "effigyChallengeDungeonResultInfo",
                        effigyChallengeDungeonResultInfo: EffigyChallengeDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).effigyChallengeDungeonResultInfo)
                    };
                    break;
                case /* PotionDungeonResultInfo potion_dungeon_result_info */ 216:
                    message.detail = {
                        oneofKind: "potionDungeonResultInfo",
                        potionDungeonResultInfo: PotionDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).potionDungeonResultInfo)
                    };
                    break;
                case /* CustomDungeonResultInfo custom_dungeon_result_info */ 1678:
                    message.detail = {
                        oneofKind: "customDungeonResultInfo",
                        customDungeonResultInfo: CustomDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).customDungeonResultInfo)
                    };
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
    private binaryReadMap11(map: DungeonChallengeFinishNotify["strengthenPointDataMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof DungeonChallengeFinishNotify["strengthenPointDataMap"] | undefined, val: DungeonChallengeFinishNotify["strengthenPointDataMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = StrengthenPointData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field DungeonChallengeFinishNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? StrengthenPointData.create();
    }
    internalBinaryWrite(message: DungeonChallengeFinishNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_new_record = 9; */
        if (message.isNewRecord !== false)
            writer.tag(9, WireType.Varint).bool(message.isNewRecord);
        /* uint32 current_value = 5; */
        if (message.currentValue !== 0)
            writer.tag(5, WireType.Varint).uint32(message.currentValue);
        /* ChallengeFinishType finish_type = 3; */
        if (message.finishType !== 0)
            writer.tag(3, WireType.Varint).int32(message.finishType);
        /* map<uint32, StrengthenPointData> strengthen_point_data_map = 11; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(11, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k as any], writer, options);
            writer.join().join();
        }
        /* uint32 challenge_record_type = 2; */
        if (message.challengeRecordType !== 0)
            writer.tag(2, WireType.Varint).uint32(message.challengeRecordType);
        /* bool is_success = 8; */
        if (message.isSuccess !== false)
            writer.tag(8, WireType.Varint).bool(message.isSuccess);
        /* uint32 challenge_index = 12; */
        if (message.challengeIndex !== 0)
            writer.tag(12, WireType.Varint).uint32(message.challengeIndex);
        /* uint32 time_cost = 7; */
        if (message.timeCost !== 0)
            writer.tag(7, WireType.Varint).uint32(message.timeCost);
        /* ChannelerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info = 1545; */
        if (message.detail.oneofKind === "channellerSlabLoopDungeonResultInfo")
            ChannelerSlabLoopDungeonResultInfo.internalBinaryWrite(message.detail.channellerSlabLoopDungeonResultInfo, writer.tag(1545, WireType.LengthDelimited).fork(), options).join();
        /* EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info = 76; */
        if (message.detail.oneofKind === "effigyChallengeDungeonResultInfo")
            EffigyChallengeDungeonResultInfo.internalBinaryWrite(message.detail.effigyChallengeDungeonResultInfo, writer.tag(76, WireType.LengthDelimited).fork(), options).join();
        /* PotionDungeonResultInfo potion_dungeon_result_info = 216; */
        if (message.detail.oneofKind === "potionDungeonResultInfo")
            PotionDungeonResultInfo.internalBinaryWrite(message.detail.potionDungeonResultInfo, writer.tag(216, WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonResultInfo custom_dungeon_result_info = 1678; */
        if (message.detail.oneofKind === "customDungeonResultInfo")
            CustomDungeonResultInfo.internalBinaryWrite(message.detail.customDungeonResultInfo, writer.tag(1678, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonChallengeFinishNotify
 */
export const DungeonChallengeFinishNotify = new DungeonChallengeFinishNotify$Type();