// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "LunaRiteAreaInfo.proto" (syntax proto3)
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
import { LunaRiteHintStatusType } from "./LunaRiteHintStatusType";
/**
 * @generated from protobuf message LunaRiteAreaInfo
 */
export interface LunaRiteAreaInfo {
    /**
     * @generated from protobuf field: repeated uint32 sacrifice_reward_list = 11;
     */
    sacrificeRewardList: number[];
    /**
     * @generated from protobuf field: uint32 area_id = 15;
     */
    areaId: number;
    /**
     * @generated from protobuf field: uint32 challenge_index = 1;
     */
    challengeIndex: number;
    /**
     * @generated from protobuf field: LunaRiteHintStatusType hint_status = 7;
     */
    hintStatus: LunaRiteHintStatusType;
    /**
     * @generated from protobuf field: repeated uint32 sacrifice_list = 14;
     */
    sacrificeList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class LunaRiteAreaInfo$Type extends MessageType<LunaRiteAreaInfo> {
    constructor() {
        super("LunaRiteAreaInfo", [
            { no: 11, name: "sacrifice_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "hint_status", kind: "enum", T: () => ["LunaRiteHintStatusType", LunaRiteHintStatusType, "LUNA_RITE_HINT_STATUS_TYPE_"] },
            { no: 14, name: "sacrifice_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<LunaRiteAreaInfo>): LunaRiteAreaInfo {
        const message = { sacrificeRewardList: [], areaId: 0, challengeIndex: 0, hintStatus: 0, sacrificeList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LunaRiteAreaInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LunaRiteAreaInfo): LunaRiteAreaInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 sacrifice_reward_list */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sacrificeRewardList.push(reader.uint32());
                    else
                        message.sacrificeRewardList.push(reader.uint32());
                    break;
                case /* uint32 area_id */ 15:
                    message.areaId = reader.uint32();
                    break;
                case /* uint32 challenge_index */ 1:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* LunaRiteHintStatusType hint_status */ 7:
                    message.hintStatus = reader.int32();
                    break;
                case /* repeated uint32 sacrifice_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sacrificeList.push(reader.uint32());
                    else
                        message.sacrificeList.push(reader.uint32());
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
    internalBinaryWrite(message: LunaRiteAreaInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 sacrifice_reward_list = 11; */
        if (message.sacrificeRewardList.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sacrificeRewardList.length; i++)
                writer.uint32(message.sacrificeRewardList[i]);
            writer.join();
        }
        /* uint32 area_id = 15; */
        if (message.areaId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.areaId);
        /* uint32 challenge_index = 1; */
        if (message.challengeIndex !== 0)
            writer.tag(1, WireType.Varint).uint32(message.challengeIndex);
        /* LunaRiteHintStatusType hint_status = 7; */
        if (message.hintStatus !== 0)
            writer.tag(7, WireType.Varint).int32(message.hintStatus);
        /* repeated uint32 sacrifice_list = 14; */
        if (message.sacrificeList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sacrificeList.length; i++)
                writer.uint32(message.sacrificeList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LunaRiteAreaInfo
 */
export const LunaRiteAreaInfo = new LunaRiteAreaInfo$Type();