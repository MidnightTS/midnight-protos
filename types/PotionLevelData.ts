// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PotionLevelData.proto" (syntax proto3)
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
 * @generated from protobuf message PotionLevelData
 */
export interface PotionLevelData {
    /**
     * @generated from protobuf field: uint32 difficulty_level = 3;
     */
    difficultyLevel: number;
    /**
     * @generated from protobuf field: uint32 mode_id = 7;
     */
    modeId: number;
    /**
     * @generated from protobuf field: uint32 score = 1;
     */
    score: number;
    /**
     * @generated from protobuf field: uint32 level_id = 9;
     */
    levelId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PotionLevelData$Type extends MessageType<PotionLevelData> {
    constructor() {
        super("PotionLevelData", [
            { no: 3, name: "difficulty_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "mode_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PotionLevelData>): PotionLevelData {
        const message = { difficultyLevel: 0, modeId: 0, score: 0, levelId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PotionLevelData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PotionLevelData): PotionLevelData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 difficulty_level */ 3:
                    message.difficultyLevel = reader.uint32();
                    break;
                case /* uint32 mode_id */ 7:
                    message.modeId = reader.uint32();
                    break;
                case /* uint32 score */ 1:
                    message.score = reader.uint32();
                    break;
                case /* uint32 level_id */ 9:
                    message.levelId = reader.uint32();
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
    internalBinaryWrite(message: PotionLevelData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 difficulty_level = 3; */
        if (message.difficultyLevel !== 0)
            writer.tag(3, WireType.Varint).uint32(message.difficultyLevel);
        /* uint32 mode_id = 7; */
        if (message.modeId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.modeId);
        /* uint32 score = 1; */
        if (message.score !== 0)
            writer.tag(1, WireType.Varint).uint32(message.score);
        /* uint32 level_id = 9; */
        if (message.levelId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PotionLevelData
 */
export const PotionLevelData = new PotionLevelData$Type();
