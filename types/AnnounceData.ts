// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AnnounceData.proto" (syntax proto3)
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
 * @generated from protobuf message AnnounceData
 */
export interface AnnounceData {
    /**
     * @generated from protobuf field: uint32 begin_time = 10;
     */
    beginTime: number;
    /**
     * @generated from protobuf field: bool is_center_system_last_5_every_minutes = 3;
     */
    isCenterSystemLast5EveryMinutes: boolean;
    /**
     * @generated from protobuf field: uint32 end_time = 1;
     */
    endTime: number;
    /**
     * @generated from protobuf field: uint32 config_id = 2;
     */
    configId: number;
    /**
     * @generated from protobuf field: string center_system_text = 11;
     */
    centerSystemText: string;
    /**
     * @generated from protobuf field: uint32 count_down_frequency = 5;
     */
    countDownFrequency: number;
    /**
     * @generated from protobuf field: uint32 center_system_frequency = 13;
     */
    centerSystemFrequency: number;
    /**
     * @generated from protobuf field: string dungeon_confirm_text = 4;
     */
    dungeonConfirmText: string;
    /**
     * @generated from protobuf field: string count_down_text = 6;
     */
    countDownText: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class AnnounceData$Type extends MessageType<AnnounceData> {
    constructor() {
        super("AnnounceData", [
            { no: 10, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_center_system_last_5_every_minutes", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "center_system_text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "count_down_frequency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "center_system_frequency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "dungeon_confirm_text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "count_down_text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AnnounceData>): AnnounceData {
        const message = { beginTime: 0, isCenterSystemLast5EveryMinutes: false, endTime: 0, configId: 0, centerSystemText: "", countDownFrequency: 0, centerSystemFrequency: 0, dungeonConfirmText: "", countDownText: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AnnounceData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AnnounceData): AnnounceData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 begin_time */ 10:
                    message.beginTime = reader.uint32();
                    break;
                case /* bool is_center_system_last_5_every_minutes */ 3:
                    message.isCenterSystemLast5EveryMinutes = reader.bool();
                    break;
                case /* uint32 end_time */ 1:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* string center_system_text */ 11:
                    message.centerSystemText = reader.string();
                    break;
                case /* uint32 count_down_frequency */ 5:
                    message.countDownFrequency = reader.uint32();
                    break;
                case /* uint32 center_system_frequency */ 13:
                    message.centerSystemFrequency = reader.uint32();
                    break;
                case /* string dungeon_confirm_text */ 4:
                    message.dungeonConfirmText = reader.string();
                    break;
                case /* string count_down_text */ 6:
                    message.countDownText = reader.string();
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
    internalBinaryWrite(message: AnnounceData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 begin_time = 10; */
        if (message.beginTime !== 0)
            writer.tag(10, WireType.Varint).uint32(message.beginTime);
        /* bool is_center_system_last_5_every_minutes = 3; */
        if (message.isCenterSystemLast5EveryMinutes !== false)
            writer.tag(3, WireType.Varint).bool(message.isCenterSystemLast5EveryMinutes);
        /* uint32 end_time = 1; */
        if (message.endTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.endTime);
        /* uint32 config_id = 2; */
        if (message.configId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.configId);
        /* string center_system_text = 11; */
        if (message.centerSystemText !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.centerSystemText);
        /* uint32 count_down_frequency = 5; */
        if (message.countDownFrequency !== 0)
            writer.tag(5, WireType.Varint).uint32(message.countDownFrequency);
        /* uint32 center_system_frequency = 13; */
        if (message.centerSystemFrequency !== 0)
            writer.tag(13, WireType.Varint).uint32(message.centerSystemFrequency);
        /* string dungeon_confirm_text = 4; */
        if (message.dungeonConfirmText !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.dungeonConfirmText);
        /* string count_down_text = 6; */
        if (message.countDownText !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.countDownText);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AnnounceData
 */
export const AnnounceData = new AnnounceData$Type();
