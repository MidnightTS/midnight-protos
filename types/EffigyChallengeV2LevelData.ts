// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EffigyChallengeV2LevelData.proto" (syntax proto3)
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
 * @generated from protobuf message EffigyChallengeV2LevelData
 */
export interface EffigyChallengeV2LevelData {
    /**
     * @generated from protobuf field: uint32 Unk3300_PPOEMEILBIA = 13 [json_name = "Unk3300PPOEMEILBIA"];
     */
    unk3300PPOEMEILBIA: number;
    /**
     * @generated from protobuf field: bool is_level_open = 4;
     */
    isLevelOpen: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_KJEOADDMJMI = 9 [json_name = "Unk3300KJEOADDMJMI"];
     */
    unk3300KJEOADDMJMI: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_JMGACODMJLG = 2 [json_name = "Unk3300JMGACODMJLG"];
     */
    unk3300JMGACODMJLG: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_IJAGOAKOABH = 7 [json_name = "Unk3300IJAGOAKOABH"];
     */
    unk3300IJAGOAKOABH: number;
    /**
     * @generated from protobuf field: uint32 level_id = 12;
     */
    levelId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EffigyChallengeV2LevelData$Type extends MessageType<EffigyChallengeV2LevelData> {
    constructor() {
        super("EffigyChallengeV2LevelData", [
            { no: 13, name: "Unk3300_PPOEMEILBIA", kind: "scalar", jsonName: "Unk3300PPOEMEILBIA", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_level_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_KJEOADDMJMI", kind: "scalar", jsonName: "Unk3300KJEOADDMJMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_JMGACODMJLG", kind: "scalar", jsonName: "Unk3300JMGACODMJLG", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_IJAGOAKOABH", kind: "scalar", jsonName: "Unk3300IJAGOAKOABH", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EffigyChallengeV2LevelData>): EffigyChallengeV2LevelData {
        const message = { unk3300PPOEMEILBIA: 0, isLevelOpen: false, unk3300KJEOADDMJMI: 0, unk3300JMGACODMJLG: 0, unk3300IJAGOAKOABH: 0, levelId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EffigyChallengeV2LevelData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EffigyChallengeV2LevelData): EffigyChallengeV2LevelData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_PPOEMEILBIA = 13 [json_name = "Unk3300PPOEMEILBIA"];*/ 13:
                    message.unk3300PPOEMEILBIA = reader.uint32();
                    break;
                case /* bool is_level_open */ 4:
                    message.isLevelOpen = reader.bool();
                    break;
                case /* uint32 Unk3300_KJEOADDMJMI = 9 [json_name = "Unk3300KJEOADDMJMI"];*/ 9:
                    message.unk3300KJEOADDMJMI = reader.uint32();
                    break;
                case /* uint32 Unk3300_JMGACODMJLG = 2 [json_name = "Unk3300JMGACODMJLG"];*/ 2:
                    message.unk3300JMGACODMJLG = reader.uint32();
                    break;
                case /* uint32 Unk3300_IJAGOAKOABH = 7 [json_name = "Unk3300IJAGOAKOABH"];*/ 7:
                    message.unk3300IJAGOAKOABH = reader.uint32();
                    break;
                case /* uint32 level_id */ 12:
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
    internalBinaryWrite(message: EffigyChallengeV2LevelData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_PPOEMEILBIA = 13 [json_name = "Unk3300PPOEMEILBIA"]; */
        if (message.unk3300PPOEMEILBIA !== 0)
            writer.tag(13, WireType.Varint).uint32(message.unk3300PPOEMEILBIA);
        /* bool is_level_open = 4; */
        if (message.isLevelOpen !== false)
            writer.tag(4, WireType.Varint).bool(message.isLevelOpen);
        /* uint32 Unk3300_KJEOADDMJMI = 9 [json_name = "Unk3300KJEOADDMJMI"]; */
        if (message.unk3300KJEOADDMJMI !== 0)
            writer.tag(9, WireType.Varint).uint32(message.unk3300KJEOADDMJMI);
        /* uint32 Unk3300_JMGACODMJLG = 2 [json_name = "Unk3300JMGACODMJLG"]; */
        if (message.unk3300JMGACODMJLG !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300JMGACODMJLG);
        /* uint32 Unk3300_IJAGOAKOABH = 7 [json_name = "Unk3300IJAGOAKOABH"]; */
        if (message.unk3300IJAGOAKOABH !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300IJAGOAKOABH);
        /* uint32 level_id = 12; */
        if (message.levelId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyChallengeV2LevelData
 */
export const EffigyChallengeV2LevelData = new EffigyChallengeV2LevelData$Type();