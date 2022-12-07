// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "RogueDiaryDungeonRecord.proto" (syntax proto3)
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
 * @generated from protobuf message RogueDiaryDungeonRecord
 */
export interface RogueDiaryDungeonRecord {
    /**
     * @generated from protobuf field: uint32 finish_time = 14;
     */
    finishTime: number;
    /**
     * @generated from protobuf field: bool is_finish = 10;
     */
    isFinish: boolean;
    /**
     * @generated from protobuf field: uint32 difficulty = 5;
     */
    difficulty: number;
    /**
     * @generated from protobuf field: uint32 max_round = 7;
     */
    maxRound: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryDungeonRecord$Type extends MessageType<RogueDiaryDungeonRecord> {
    constructor() {
        super("RogueDiaryDungeonRecord", [
            { no: 14, name: "finish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "max_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<RogueDiaryDungeonRecord>): RogueDiaryDungeonRecord {
        const message = { finishTime: 0, isFinish: false, difficulty: 0, maxRound: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RogueDiaryDungeonRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RogueDiaryDungeonRecord): RogueDiaryDungeonRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 finish_time */ 14:
                    message.finishTime = reader.uint32();
                    break;
                case /* bool is_finish */ 10:
                    message.isFinish = reader.bool();
                    break;
                case /* uint32 difficulty */ 5:
                    message.difficulty = reader.uint32();
                    break;
                case /* uint32 max_round */ 7:
                    message.maxRound = reader.uint32();
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
    internalBinaryWrite(message: RogueDiaryDungeonRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 finish_time = 14; */
        if (message.finishTime !== 0)
            writer.tag(14, WireType.Varint).uint32(message.finishTime);
        /* bool is_finish = 10; */
        if (message.isFinish !== false)
            writer.tag(10, WireType.Varint).bool(message.isFinish);
        /* uint32 difficulty = 5; */
        if (message.difficulty !== 0)
            writer.tag(5, WireType.Varint).uint32(message.difficulty);
        /* uint32 max_round = 7; */
        if (message.maxRound !== 0)
            writer.tag(7, WireType.Varint).uint32(message.maxRound);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryDungeonRecord
 */
export const RogueDiaryDungeonRecord = new RogueDiaryDungeonRecord$Type();
