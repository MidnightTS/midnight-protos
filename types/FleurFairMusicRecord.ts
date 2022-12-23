// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FleurFairMusicRecord.proto" (syntax proto3)
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
 * @generated from protobuf message FleurFairMusicRecord
 */
export interface FleurFairMusicRecord {
    /**
     * @generated from protobuf field: uint32 max_score = 11;
     */
    maxScore: number;
    /**
     * @generated from protobuf field: bool is_unlock = 10;
     */
    isUnlock: boolean;
    /**
     * @generated from protobuf field: uint32 max_combo = 6;
     */
    maxCombo: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairMusicRecord$Type extends MessageType<FleurFairMusicRecord> {
    constructor() {
        super("FleurFairMusicRecord", [
            { no: 11, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_unlock", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "max_combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FleurFairMusicRecord>): FleurFairMusicRecord {
        const message = { maxScore: 0, isUnlock: false, maxCombo: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FleurFairMusicRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FleurFairMusicRecord): FleurFairMusicRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 max_score */ 11:
                    message.maxScore = reader.uint32();
                    break;
                case /* bool is_unlock */ 10:
                    message.isUnlock = reader.bool();
                    break;
                case /* uint32 max_combo */ 6:
                    message.maxCombo = reader.uint32();
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
    internalBinaryWrite(message: FleurFairMusicRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 max_score = 11; */
        if (message.maxScore !== 0)
            writer.tag(11, WireType.Varint).uint32(message.maxScore);
        /* bool is_unlock = 10; */
        if (message.isUnlock !== false)
            writer.tag(10, WireType.Varint).bool(message.isUnlock);
        /* uint32 max_combo = 6; */
        if (message.maxCombo !== 0)
            writer.tag(6, WireType.Varint).uint32(message.maxCombo);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairMusicRecord
 */
export const FleurFairMusicRecord = new FleurFairMusicRecord$Type();
