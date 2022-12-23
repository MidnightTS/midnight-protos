// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGPlayCardCostInfo.proto" (syntax proto3)
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
 * @generated from protobuf message GCGPlayCardCostInfo
 */
export interface GCGPlayCardCostInfo {
    /**
     * @generated from protobuf field: uint32 card_id = 9;
     */
    cardId: number;
    /**
     * @generated from protobuf field: repeated Uint32Pair cost_map = 12;
     */
    costMap: Uint32Pair[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayCardCostInfo$Type extends MessageType<GCGPlayCardCostInfo> {
    constructor() {
        super("GCGPlayCardCostInfo", [
            { no: 9, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cost_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair }
        ]);
    }
    create(value?: PartialMessage<GCGPlayCardCostInfo>): GCGPlayCardCostInfo {
        const message = { cardId: 0, costMap: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGPlayCardCostInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGPlayCardCostInfo): GCGPlayCardCostInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 card_id */ 9:
                    message.cardId = reader.uint32();
                    break;
                case /* repeated Uint32Pair cost_map */ 12:
                    message.costMap.push(Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GCGPlayCardCostInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 card_id = 9; */
        if (message.cardId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.cardId);
        /* repeated Uint32Pair cost_map = 12; */
        for (let i = 0; i < message.costMap.length; i++)
            Uint32Pair.internalBinaryWrite(message.costMap[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPlayCardCostInfo
 */
export const GCGPlayCardCostInfo = new GCGPlayCardCostInfo$Type();
