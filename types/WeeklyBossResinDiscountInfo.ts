// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WeeklyBossResinDiscountInfo.proto" (syntax proto3)
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
 * @generated from protobuf message WeeklyBossResinDiscountInfo
 */
export interface WeeklyBossResinDiscountInfo {
    /**
     * @generated from protobuf field: uint32 discount_num = 1;
     */
    discountNum: number;
    /**
     * @generated from protobuf field: uint32 discount_num_limit = 2;
     */
    discountNumLimit: number;
    /**
     * @generated from protobuf field: uint32 resin_cost = 3;
     */
    resinCost: number;
    /**
     * @generated from protobuf field: uint32 original_resin_cost = 4;
     */
    originalResinCost: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WeeklyBossResinDiscountInfo$Type extends MessageType<WeeklyBossResinDiscountInfo> {
    constructor() {
        super("WeeklyBossResinDiscountInfo", [
            { no: 1, name: "discount_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "discount_num_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "resin_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "original_resin_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WeeklyBossResinDiscountInfo>): WeeklyBossResinDiscountInfo {
        const message = { discountNum: 0, discountNumLimit: 0, resinCost: 0, originalResinCost: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WeeklyBossResinDiscountInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WeeklyBossResinDiscountInfo): WeeklyBossResinDiscountInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 discount_num */ 1:
                    message.discountNum = reader.uint32();
                    break;
                case /* uint32 discount_num_limit */ 2:
                    message.discountNumLimit = reader.uint32();
                    break;
                case /* uint32 resin_cost */ 3:
                    message.resinCost = reader.uint32();
                    break;
                case /* uint32 original_resin_cost */ 4:
                    message.originalResinCost = reader.uint32();
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
    internalBinaryWrite(message: WeeklyBossResinDiscountInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 discount_num = 1; */
        if (message.discountNum !== 0)
            writer.tag(1, WireType.Varint).uint32(message.discountNum);
        /* uint32 discount_num_limit = 2; */
        if (message.discountNumLimit !== 0)
            writer.tag(2, WireType.Varint).uint32(message.discountNumLimit);
        /* uint32 resin_cost = 3; */
        if (message.resinCost !== 0)
            writer.tag(3, WireType.Varint).uint32(message.resinCost);
        /* uint32 original_resin_cost = 4; */
        if (message.originalResinCost !== 0)
            writer.tag(4, WireType.Varint).uint32(message.originalResinCost);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeeklyBossResinDiscountInfo
 */
export const WeeklyBossResinDiscountInfo = new WeeklyBossResinDiscountInfo$Type();
