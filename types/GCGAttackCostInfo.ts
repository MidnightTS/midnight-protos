// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGAttackCostInfo.proto" (syntax proto3)
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
import { Uint32Pair } from "./Uint32Pair";
/**
 * @generated from protobuf message GCGAttackCostInfo
 */
export interface GCGAttackCostInfo {
    /**
     * @generated from protobuf field: repeated Uint32Pair cost_map = 1;
     */
    costMap: Uint32Pair[];
    /**
     * @generated from protobuf field: uint32 skill_id = 7;
     */
    skillId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGAttackCostInfo$Type extends MessageType<GCGAttackCostInfo> {
    constructor() {
        super("GCGAttackCostInfo", [
            { no: 1, name: "cost_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair },
            { no: 7, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGAttackCostInfo>): GCGAttackCostInfo {
        const message = { costMap: [], skillId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGAttackCostInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGAttackCostInfo): GCGAttackCostInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Uint32Pair cost_map */ 1:
                    message.costMap.push(Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 skill_id */ 7:
                    message.skillId = reader.uint32();
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
    internalBinaryWrite(message: GCGAttackCostInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated Uint32Pair cost_map = 1; */
        for (let i = 0; i < message.costMap.length; i++)
            Uint32Pair.internalBinaryWrite(message.costMap[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 skill_id = 7; */
        if (message.skillId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGAttackCostInfo
 */
export const GCGAttackCostInfo = new GCGAttackCostInfo$Type();
