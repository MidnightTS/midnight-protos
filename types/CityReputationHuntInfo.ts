// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CityReputationHuntInfo.proto" (syntax proto3)
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
 * @generated from protobuf message CityReputationHuntInfo
 */
export interface CityReputationHuntInfo {
    /**
     * @generated from protobuf field: uint32 cur_week_finish_num = 1;
     */
    curWeekFinishNum: number;
    /**
     * @generated from protobuf field: bool is_open = 7;
     */
    isOpen: boolean;
    /**
     * @generated from protobuf field: bool has_reward = 15;
     */
    hasReward: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationHuntInfo$Type extends MessageType<CityReputationHuntInfo> {
    constructor() {
        super("CityReputationHuntInfo", [
            { no: 1, name: "cur_week_finish_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "has_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<CityReputationHuntInfo>): CityReputationHuntInfo {
        const message = { curWeekFinishNum: 0, isOpen: false, hasReward: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CityReputationHuntInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CityReputationHuntInfo): CityReputationHuntInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 cur_week_finish_num */ 1:
                    message.curWeekFinishNum = reader.uint32();
                    break;
                case /* bool is_open */ 7:
                    message.isOpen = reader.bool();
                    break;
                case /* bool has_reward */ 15:
                    message.hasReward = reader.bool();
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
    internalBinaryWrite(message: CityReputationHuntInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 cur_week_finish_num = 1; */
        if (message.curWeekFinishNum !== 0)
            writer.tag(1, WireType.Varint).uint32(message.curWeekFinishNum);
        /* bool is_open = 7; */
        if (message.isOpen !== false)
            writer.tag(7, WireType.Varint).bool(message.isOpen);
        /* bool has_reward = 15; */
        if (message.hasReward !== false)
            writer.tag(15, WireType.Varint).bool(message.hasReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CityReputationHuntInfo
 */
export const CityReputationHuntInfo = new CityReputationHuntInfo$Type();
