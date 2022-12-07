// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FishBattleEndRsp.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
import { FishBattleResult } from "./FishBattleResult";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5845;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message FishBattleEndRsp
 */
export interface FishBattleEndRsp {
    /**
     * @generated from protobuf field: FishBattleResult battle_result = 6;
     */
    battleResult: FishBattleResult;
    /**
     * @generated from protobuf field: FishBattleEndRsp.FishNoRewardReason no_reward_reason = 2;
     */
    noRewardReason: FishBattleEndRsp_FishNoRewardReason;
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated ItemParam Unk3300_ABBBGOBDJEC = 12 [json_name = "Unk3300ABBBGOBDJEC"];
     */
    unk3300ABBBGOBDJEC: ItemParam[];
    /**
     * @generated from protobuf field: bool is_got_reward = 8;
     */
    isGotReward: boolean;
    /**
     * @generated from protobuf field: repeated ItemParam Unk3300_MDCKKPGNKGL = 1 [json_name = "Unk3300MDCKKPGNKGL"];
     */
    unk3300MDCKKPGNKGL: ItemParam[];
    /**
     * @generated from protobuf field: repeated ItemParam reward_item_list = 15;
     */
    rewardItemList: ItemParam[];
}
/**
 * @generated from protobuf enum FishBattleEndRsp.FishNoRewardReason
 */
export enum FishBattleEndRsp_FishNoRewardReason {
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_ACTIVITY_LIMIT = 1;
     */
    ACTIVITY_LIMIT = 1,
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_BAG_LIMIT = 2;
     */
    BAG_LIMIT = 2,
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_POOL_LIMIT = 3;
     */
    POOL_LIMIT = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class FishBattleEndRsp$Type extends MessageType<FishBattleEndRsp> {
    constructor() {
        super("FishBattleEndRsp", [
            { no: 6, name: "battle_result", kind: "enum", T: () => ["FishBattleResult", FishBattleResult, "FISH_BATTLE_RESULT_"] },
            { no: 2, name: "no_reward_reason", kind: "enum", T: () => ["FishBattleEndRsp.FishNoRewardReason", FishBattleEndRsp_FishNoRewardReason, "FISH_NO_REWARD_REASON_"] },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "Unk3300_ABBBGOBDJEC", kind: "message", jsonName: "Unk3300ABBBGOBDJEC", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 8, name: "is_got_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_MDCKKPGNKGL", kind: "message", jsonName: "Unk3300MDCKKPGNKGL", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 15, name: "reward_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam }
        ]);
    }
    create(value?: PartialMessage<FishBattleEndRsp>): FishBattleEndRsp {
        const message = { battleResult: 0, noRewardReason: 0, retcode: 0, unk3300ABBBGOBDJEC: [], isGotReward: false, unk3300MDCKKPGNKGL: [], rewardItemList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FishBattleEndRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FishBattleEndRsp): FishBattleEndRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* FishBattleResult battle_result */ 6:
                    message.battleResult = reader.int32();
                    break;
                case /* FishBattleEndRsp.FishNoRewardReason no_reward_reason */ 2:
                    message.noRewardReason = reader.int32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ItemParam Unk3300_ABBBGOBDJEC = 12 [json_name = "Unk3300ABBBGOBDJEC"];*/ 12:
                    message.unk3300ABBBGOBDJEC.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_got_reward */ 8:
                    message.isGotReward = reader.bool();
                    break;
                case /* repeated ItemParam Unk3300_MDCKKPGNKGL = 1 [json_name = "Unk3300MDCKKPGNKGL"];*/ 1:
                    message.unk3300MDCKKPGNKGL.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam reward_item_list */ 15:
                    message.rewardItemList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: FishBattleEndRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* FishBattleResult battle_result = 6; */
        if (message.battleResult !== 0)
            writer.tag(6, WireType.Varint).int32(message.battleResult);
        /* FishBattleEndRsp.FishNoRewardReason no_reward_reason = 2; */
        if (message.noRewardReason !== 0)
            writer.tag(2, WireType.Varint).int32(message.noRewardReason);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        /* repeated ItemParam Unk3300_ABBBGOBDJEC = 12 [json_name = "Unk3300ABBBGOBDJEC"]; */
        for (let i = 0; i < message.unk3300ABBBGOBDJEC.length; i++)
            ItemParam.internalBinaryWrite(message.unk3300ABBBGOBDJEC[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* bool is_got_reward = 8; */
        if (message.isGotReward !== false)
            writer.tag(8, WireType.Varint).bool(message.isGotReward);
        /* repeated ItemParam Unk3300_MDCKKPGNKGL = 1 [json_name = "Unk3300MDCKKPGNKGL"]; */
        for (let i = 0; i < message.unk3300MDCKKPGNKGL.length; i++)
            ItemParam.internalBinaryWrite(message.unk3300MDCKKPGNKGL[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam reward_item_list = 15; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishBattleEndRsp
 */
export const FishBattleEndRsp = new FishBattleEndRsp$Type();
