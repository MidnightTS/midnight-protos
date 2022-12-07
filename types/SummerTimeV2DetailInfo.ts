// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SummerTimeV2DetailInfo.proto" (syntax proto3)
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
import { SummerTimeV2BoatStageInfo } from "./SummerTimeV2BoatStageInfo";
import { SummerTimeV2DungeonStageInfo } from "./SummerTimeV2DungeonStageInfo";
/**
 * @generated from protobuf message SummerTimeV2DetailInfo
 */
export interface SummerTimeV2DetailInfo {
    /**
     * @generated from protobuf field: bool is_content_closed = 14;
     */
    isContentClosed: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_BNNMNCKEHHO = 9 [json_name = "Unk3300BNNMNCKEHHO"];
     */
    unk3300BNNMNCKEHHO: number;
    /**
     * @generated from protobuf field: repeated SummerTimeV2DungeonStageInfo dungeon_stage_info_list = 5;
     */
    dungeonStageInfoList: SummerTimeV2DungeonStageInfo[];
    /**
     * @generated from protobuf field: uint32 Unk3300_JHBCHFHAGFO = 8 [json_name = "Unk3300JHBCHFHAGFO"];
     */
    unk3300JHBCHFHAGFO: number;
    /**
     * @generated from protobuf field: repeated SummerTimeV2BoatStageInfo boat_stage_info_list = 3;
     */
    boatStageInfoList: SummerTimeV2BoatStageInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2DetailInfo$Type extends MessageType<SummerTimeV2DetailInfo> {
    constructor() {
        super("SummerTimeV2DetailInfo", [
            { no: 14, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_BNNMNCKEHHO", kind: "scalar", jsonName: "Unk3300BNNMNCKEHHO", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "dungeon_stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SummerTimeV2DungeonStageInfo },
            { no: 8, name: "Unk3300_JHBCHFHAGFO", kind: "scalar", jsonName: "Unk3300JHBCHFHAGFO", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "boat_stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SummerTimeV2BoatStageInfo }
        ]);
    }
    create(value?: PartialMessage<SummerTimeV2DetailInfo>): SummerTimeV2DetailInfo {
        const message = { isContentClosed: false, unk3300BNNMNCKEHHO: 0, dungeonStageInfoList: [], unk3300JHBCHFHAGFO: 0, boatStageInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SummerTimeV2DetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SummerTimeV2DetailInfo): SummerTimeV2DetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_content_closed */ 14:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 Unk3300_BNNMNCKEHHO = 9 [json_name = "Unk3300BNNMNCKEHHO"];*/ 9:
                    message.unk3300BNNMNCKEHHO = reader.uint32();
                    break;
                case /* repeated SummerTimeV2DungeonStageInfo dungeon_stage_info_list */ 5:
                    message.dungeonStageInfoList.push(SummerTimeV2DungeonStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_JHBCHFHAGFO = 8 [json_name = "Unk3300JHBCHFHAGFO"];*/ 8:
                    message.unk3300JHBCHFHAGFO = reader.uint32();
                    break;
                case /* repeated SummerTimeV2BoatStageInfo boat_stage_info_list */ 3:
                    message.boatStageInfoList.push(SummerTimeV2BoatStageInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: SummerTimeV2DetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_content_closed = 14; */
        if (message.isContentClosed !== false)
            writer.tag(14, WireType.Varint).bool(message.isContentClosed);
        /* uint32 Unk3300_BNNMNCKEHHO = 9 [json_name = "Unk3300BNNMNCKEHHO"]; */
        if (message.unk3300BNNMNCKEHHO !== 0)
            writer.tag(9, WireType.Varint).uint32(message.unk3300BNNMNCKEHHO);
        /* repeated SummerTimeV2DungeonStageInfo dungeon_stage_info_list = 5; */
        for (let i = 0; i < message.dungeonStageInfoList.length; i++)
            SummerTimeV2DungeonStageInfo.internalBinaryWrite(message.dungeonStageInfoList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_JHBCHFHAGFO = 8 [json_name = "Unk3300JHBCHFHAGFO"]; */
        if (message.unk3300JHBCHFHAGFO !== 0)
            writer.tag(8, WireType.Varint).uint32(message.unk3300JHBCHFHAGFO);
        /* repeated SummerTimeV2BoatStageInfo boat_stage_info_list = 3; */
        for (let i = 0; i < message.boatStageInfoList.length; i++)
            SummerTimeV2BoatStageInfo.internalBinaryWrite(message.boatStageInfoList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2DetailInfo
 */
export const SummerTimeV2DetailInfo = new SummerTimeV2DetailInfo$Type();