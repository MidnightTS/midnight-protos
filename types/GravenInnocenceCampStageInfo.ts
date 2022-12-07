// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GravenInnocenceCampStageInfo.proto" (syntax proto3)
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
 * @generated from protobuf message GravenInnocenceCampStageInfo
 */
export interface GravenInnocenceCampStageInfo {
    /**
     * @generated from protobuf field: bool is_open = 11;
     */
    isOpen: boolean;
    /**
     * @generated from protobuf field: bool is_finished = 6;
     */
    isFinished: boolean;
    /**
     * @generated from protobuf field: uint32 level_id = 7;
     */
    levelId: number;
    /**
     * @generated from protobuf field: uint32 stage_id = 3;
     */
    stageId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocenceCampStageInfo$Type extends MessageType<GravenInnocenceCampStageInfo> {
    constructor() {
        super("GravenInnocenceCampStageInfo", [
            { no: 11, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GravenInnocenceCampStageInfo>): GravenInnocenceCampStageInfo {
        const message = { isOpen: false, isFinished: false, levelId: 0, stageId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GravenInnocenceCampStageInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GravenInnocenceCampStageInfo): GravenInnocenceCampStageInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_open */ 11:
                    message.isOpen = reader.bool();
                    break;
                case /* bool is_finished */ 6:
                    message.isFinished = reader.bool();
                    break;
                case /* uint32 level_id */ 7:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 stage_id */ 3:
                    message.stageId = reader.uint32();
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
    internalBinaryWrite(message: GravenInnocenceCampStageInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_open = 11; */
        if (message.isOpen !== false)
            writer.tag(11, WireType.Varint).bool(message.isOpen);
        /* bool is_finished = 6; */
        if (message.isFinished !== false)
            writer.tag(6, WireType.Varint).bool(message.isFinished);
        /* uint32 level_id = 7; */
        if (message.levelId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.levelId);
        /* uint32 stage_id = 3; */
        if (message.stageId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocenceCampStageInfo
 */
export const GravenInnocenceCampStageInfo = new GravenInnocenceCampStageInfo$Type();