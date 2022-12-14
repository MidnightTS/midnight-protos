// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FleurFairBossSettleInfo.proto" (syntax proto3)
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
import { FleurFairPlayerStatInfo } from "./FleurFairPlayerStatInfo";
/**
 * @generated from protobuf message FleurFairBossSettleInfo
 */
export interface FleurFairBossSettleInfo {
    /**
     * @generated from protobuf field: uint32 cost_time = 14;
     */
    costTime: number;
    /**
     * @generated from protobuf field: repeated FleurFairPlayerStatInfo stat_info_list = 11;
     */
    statInfoList: FleurFairPlayerStatInfo[];
    /**
     * @generated from protobuf field: uint32 energy = 4;
     */
    energy: number;
    /**
     * @generated from protobuf field: bool is_success = 2;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: uint32 reward_token_num = 15;
     */
    rewardTokenNum: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairBossSettleInfo$Type extends MessageType<FleurFairBossSettleInfo> {
    constructor() {
        super("FleurFairBossSettleInfo", [
            { no: 14, name: "cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "stat_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FleurFairPlayerStatInfo },
            { no: 4, name: "energy", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "reward_token_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FleurFairBossSettleInfo>): FleurFairBossSettleInfo {
        const message = { costTime: 0, statInfoList: [], energy: 0, isSuccess: false, rewardTokenNum: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FleurFairBossSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FleurFairBossSettleInfo): FleurFairBossSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 cost_time */ 14:
                    message.costTime = reader.uint32();
                    break;
                case /* repeated FleurFairPlayerStatInfo stat_info_list */ 11:
                    message.statInfoList.push(FleurFairPlayerStatInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 energy */ 4:
                    message.energy = reader.uint32();
                    break;
                case /* bool is_success */ 2:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 reward_token_num */ 15:
                    message.rewardTokenNum = reader.uint32();
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
    internalBinaryWrite(message: FleurFairBossSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 cost_time = 14; */
        if (message.costTime !== 0)
            writer.tag(14, WireType.Varint).uint32(message.costTime);
        /* repeated FleurFairPlayerStatInfo stat_info_list = 11; */
        for (let i = 0; i < message.statInfoList.length; i++)
            FleurFairPlayerStatInfo.internalBinaryWrite(message.statInfoList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* uint32 energy = 4; */
        if (message.energy !== 0)
            writer.tag(4, WireType.Varint).uint32(message.energy);
        /* bool is_success = 2; */
        if (message.isSuccess !== false)
            writer.tag(2, WireType.Varint).bool(message.isSuccess);
        /* uint32 reward_token_num = 15; */
        if (message.rewardTokenNum !== 0)
            writer.tag(15, WireType.Varint).uint32(message.rewardTokenNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairBossSettleInfo
 */
export const FleurFairBossSettleInfo = new FleurFairBossSettleInfo$Type();
