// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SummerTimeV2DungeonStageInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SummerTimeV2DungeonStageInfo
 */
export interface SummerTimeV2DungeonStageInfo {
    /**
     * @generated from protobuf field: bool is_open = 6;
     */
    isOpen: boolean;
    /**
     * @generated from protobuf field: uint32 stage_id = 3;
     */
    stageId: number;
    /**
     * @generated from protobuf field: bool is_prev_dungeon_succeed = 12;
     */
    isPrevDungeonSucceed: boolean;
    /**
     * @generated from protobuf field: uint32 open_time = 2;
     */
    openTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2DungeonStageInfo$Type extends MessageType<SummerTimeV2DungeonStageInfo> {
    constructor() {
        super("SummerTimeV2DungeonStageInfo", [
            { no: 6, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_prev_dungeon_succeed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SummerTimeV2DungeonStageInfo>): SummerTimeV2DungeonStageInfo {
        const message = { isOpen: false, stageId: 0, isPrevDungeonSucceed: false, openTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SummerTimeV2DungeonStageInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SummerTimeV2DungeonStageInfo): SummerTimeV2DungeonStageInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_open */ 6:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 stage_id */ 3:
                    message.stageId = reader.uint32();
                    break;
                case /* bool is_prev_dungeon_succeed */ 12:
                    message.isPrevDungeonSucceed = reader.bool();
                    break;
                case /* uint32 open_time */ 2:
                    message.openTime = reader.uint32();
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
    internalBinaryWrite(message: SummerTimeV2DungeonStageInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_open = 6; */
        if (message.isOpen !== false)
            writer.tag(6, WireType.Varint).bool(message.isOpen);
        /* uint32 stage_id = 3; */
        if (message.stageId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.stageId);
        /* bool is_prev_dungeon_succeed = 12; */
        if (message.isPrevDungeonSucceed !== false)
            writer.tag(12, WireType.Varint).bool(message.isPrevDungeonSucceed);
        /* uint32 open_time = 2; */
        if (message.openTime !== 0)
            writer.tag(2, WireType.Varint).uint32(message.openTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2DungeonStageInfo
 */
export const SummerTimeV2DungeonStageInfo = new SummerTimeV2DungeonStageInfo$Type();
