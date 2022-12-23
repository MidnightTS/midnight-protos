// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FishingScore.proto" (syntax proto3)
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
 * @generated from protobuf message FishingScore
 */
export interface FishingScore {
    /**
     * @generated from protobuf field: uint32 fishing_score = 11;
     */
    fishingScore: number;
    /**
     * @generated from protobuf field: bool is_new_record = 10;
     */
    isNewRecord: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class FishingScore$Type extends MessageType<FishingScore> {
    constructor() {
        super("FishingScore", [
            { no: 11, name: "fishing_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<FishingScore>): FishingScore {
        const message = { fishingScore: 0, isNewRecord: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FishingScore>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FishingScore): FishingScore {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 fishing_score */ 11:
                    message.fishingScore = reader.uint32();
                    break;
                case /* bool is_new_record */ 10:
                    message.isNewRecord = reader.bool();
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
    internalBinaryWrite(message: FishingScore, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 fishing_score = 11; */
        if (message.fishingScore !== 0)
            writer.tag(11, WireType.Varint).uint32(message.fishingScore);
        /* bool is_new_record = 10; */
        if (message.isNewRecord !== false)
            writer.tag(10, WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishingScore
 */
export const FishingScore = new FishingScore$Type();
