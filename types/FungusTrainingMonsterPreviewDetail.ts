// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FungusTrainingMonsterPreviewDetail.proto" (syntax proto3)
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
 * @generated from protobuf message FungusTrainingMonsterPreviewDetail
 */
export interface FungusTrainingMonsterPreviewDetail {
    /**
     * @generated from protobuf field: uint32 monster_id = 12;
     */
    monsterId: number;
    /**
     * @generated from protobuf field: uint32 level = 8;
     */
    level: number;
    /**
     * @generated from protobuf field: repeated uint32 affix_list = 9;
     */
    affixList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class FungusTrainingMonsterPreviewDetail$Type extends MessageType<FungusTrainingMonsterPreviewDetail> {
    constructor() {
        super("FungusTrainingMonsterPreviewDetail", [
            { no: 12, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FungusTrainingMonsterPreviewDetail>): FungusTrainingMonsterPreviewDetail {
        const message = { monsterId: 0, level: 0, affixList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FungusTrainingMonsterPreviewDetail>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FungusTrainingMonsterPreviewDetail): FungusTrainingMonsterPreviewDetail {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 monster_id */ 12:
                    message.monsterId = reader.uint32();
                    break;
                case /* uint32 level */ 8:
                    message.level = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
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
    internalBinaryWrite(message: FungusTrainingMonsterPreviewDetail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 monster_id = 12; */
        if (message.monsterId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.monsterId);
        /* uint32 level = 8; */
        if (message.level !== 0)
            writer.tag(8, WireType.Varint).uint32(message.level);
        /* repeated uint32 affix_list = 9; */
        if (message.affixList.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusTrainingMonsterPreviewDetail
 */
export const FungusTrainingMonsterPreviewDetail = new FungusTrainingMonsterPreviewDetail$Type();