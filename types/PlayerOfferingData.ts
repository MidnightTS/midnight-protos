// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlayerOfferingData.proto" (syntax proto3)
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
/**
 * @generated from protobuf message PlayerOfferingData
 */
export interface PlayerOfferingData {
    /**
     * @generated from protobuf field: uint32 level = 8;
     */
    level: number;
    /**
     * @generated from protobuf field: uint32 offering_id = 3;
     */
    offeringId: number;
    /**
     * @generated from protobuf field: bool is_new_max_level = 14;
     */
    isNewMaxLevel: boolean;
    /**
     * @generated from protobuf field: bool is_first_interact = 9;
     */
    isFirstInteract: boolean;
    /**
     * @generated from protobuf field: repeated uint32 taken_level_reward_list = 2;
     */
    takenLevelRewardList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerOfferingData$Type extends MessageType<PlayerOfferingData> {
    constructor() {
        super("PlayerOfferingData", [
            { no: 8, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "offering_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_new_max_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "is_first_interact", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "taken_level_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerOfferingData>): PlayerOfferingData {
        const message = { level: 0, offeringId: 0, isNewMaxLevel: false, isFirstInteract: false, takenLevelRewardList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerOfferingData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerOfferingData): PlayerOfferingData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 level */ 8:
                    message.level = reader.uint32();
                    break;
                case /* uint32 offering_id */ 3:
                    message.offeringId = reader.uint32();
                    break;
                case /* bool is_new_max_level */ 14:
                    message.isNewMaxLevel = reader.bool();
                    break;
                case /* bool is_first_interact */ 9:
                    message.isFirstInteract = reader.bool();
                    break;
                case /* repeated uint32 taken_level_reward_list */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenLevelRewardList.push(reader.uint32());
                    else
                        message.takenLevelRewardList.push(reader.uint32());
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
    internalBinaryWrite(message: PlayerOfferingData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 level = 8; */
        if (message.level !== 0)
            writer.tag(8, WireType.Varint).uint32(message.level);
        /* uint32 offering_id = 3; */
        if (message.offeringId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.offeringId);
        /* bool is_new_max_level = 14; */
        if (message.isNewMaxLevel !== false)
            writer.tag(14, WireType.Varint).bool(message.isNewMaxLevel);
        /* bool is_first_interact = 9; */
        if (message.isFirstInteract !== false)
            writer.tag(9, WireType.Varint).bool(message.isFirstInteract);
        /* repeated uint32 taken_level_reward_list = 2; */
        if (message.takenLevelRewardList.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenLevelRewardList.length; i++)
                writer.uint32(message.takenLevelRewardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerOfferingData
 */
export const PlayerOfferingData = new PlayerOfferingData$Type();
