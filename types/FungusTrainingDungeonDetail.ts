// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FungusTrainingDungeonDetail.proto" (syntax proto3)
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
 * @generated from protobuf message FungusTrainingDungeonDetail
 */
export interface FungusTrainingDungeonDetail {
    /**
     * @generated from protobuf field: uint32 best_score = 8;
     */
    bestScore: number;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 6;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: bool is_open = 13;
     */
    isOpen: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class FungusTrainingDungeonDetail$Type extends MessageType<FungusTrainingDungeonDetail> {
    constructor() {
        super("FungusTrainingDungeonDetail", [
            { no: 8, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<FungusTrainingDungeonDetail>): FungusTrainingDungeonDetail {
        const message = { bestScore: 0, dungeonId: 0, isOpen: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FungusTrainingDungeonDetail>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FungusTrainingDungeonDetail): FungusTrainingDungeonDetail {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 best_score */ 8:
                    message.bestScore = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
                    break;
                case /* bool is_open */ 13:
                    message.isOpen = reader.bool();
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
    internalBinaryWrite(message: FungusTrainingDungeonDetail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 best_score = 8; */
        if (message.bestScore !== 0)
            writer.tag(8, WireType.Varint).uint32(message.bestScore);
        /* uint32 dungeon_id = 6; */
        if (message.dungeonId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.dungeonId);
        /* bool is_open = 13; */
        if (message.isOpen !== false)
            writer.tag(13, WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusTrainingDungeonDetail
 */
export const FungusTrainingDungeonDetail = new FungusTrainingDungeonDetail$Type();
