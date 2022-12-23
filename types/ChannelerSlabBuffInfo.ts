// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ChannelerSlabBuffInfo.proto" (syntax proto3)
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
import { ChannelerSlabBuffSchemeInfo } from "./ChannelerSlabBuffSchemeInfo";
import { ChannelerSlabAssistInfo } from "./ChannelerSlabAssistInfo";
/**
 * @generated from protobuf message ChannelerSlabBuffInfo
 */
export interface ChannelerSlabBuffInfo {
    /**
     * @generated from protobuf field: repeated ChannelerSlabAssistInfo assist_info_list = 11;
     */
    assistInfoList: ChannelerSlabAssistInfo[];
    /**
     * @generated from protobuf field: ChannelerSlabBuffSchemeInfo Unk3300_CDFLIONGKCH = 8 [json_name = "Unk3300CDFLIONGKCH"];
     */
    unk3300CDFLIONGKCH?: ChannelerSlabBuffSchemeInfo;
    /**
     * @generated from protobuf field: ChannelerSlabBuffSchemeInfo Unk3300_ANENHMAADLN = 14 [json_name = "Unk3300ANENHMAADLN"];
     */
    unk3300ANENHMAADLN?: ChannelerSlabBuffSchemeInfo;
    /**
     * @generated from protobuf field: repeated uint32 buff_id_list = 6;
     */
    buffIdList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabBuffInfo$Type extends MessageType<ChannelerSlabBuffInfo> {
    constructor() {
        super("ChannelerSlabBuffInfo", [
            { no: 11, name: "assist_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelerSlabAssistInfo },
            { no: 8, name: "Unk3300_CDFLIONGKCH", kind: "message", jsonName: "Unk3300CDFLIONGKCH", T: () => ChannelerSlabBuffSchemeInfo },
            { no: 14, name: "Unk3300_ANENHMAADLN", kind: "message", jsonName: "Unk3300ANENHMAADLN", T: () => ChannelerSlabBuffSchemeInfo },
            { no: 6, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChannelerSlabBuffInfo>): ChannelerSlabBuffInfo {
        const message = { assistInfoList: [], buffIdList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChannelerSlabBuffInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelerSlabBuffInfo): ChannelerSlabBuffInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ChannelerSlabAssistInfo assist_info_list */ 11:
                    message.assistInfoList.push(ChannelerSlabAssistInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ChannelerSlabBuffSchemeInfo Unk3300_CDFLIONGKCH = 8 [json_name = "Unk3300CDFLIONGKCH"];*/ 8:
                    message.unk3300CDFLIONGKCH = ChannelerSlabBuffSchemeInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300CDFLIONGKCH);
                    break;
                case /* ChannelerSlabBuffSchemeInfo Unk3300_ANENHMAADLN = 14 [json_name = "Unk3300ANENHMAADLN"];*/ 14:
                    message.unk3300ANENHMAADLN = ChannelerSlabBuffSchemeInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300ANENHMAADLN);
                    break;
                case /* repeated uint32 buff_id_list */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
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
    internalBinaryWrite(message: ChannelerSlabBuffInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ChannelerSlabAssistInfo assist_info_list = 11; */
        for (let i = 0; i < message.assistInfoList.length; i++)
            ChannelerSlabAssistInfo.internalBinaryWrite(message.assistInfoList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabBuffSchemeInfo Unk3300_CDFLIONGKCH = 8 [json_name = "Unk3300CDFLIONGKCH"]; */
        if (message.unk3300CDFLIONGKCH)
            ChannelerSlabBuffSchemeInfo.internalBinaryWrite(message.unk3300CDFLIONGKCH, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabBuffSchemeInfo Unk3300_ANENHMAADLN = 14 [json_name = "Unk3300ANENHMAADLN"]; */
        if (message.unk3300ANENHMAADLN)
            ChannelerSlabBuffSchemeInfo.internalBinaryWrite(message.unk3300ANENHMAADLN, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 buff_id_list = 6; */
        if (message.buffIdList.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabBuffInfo
 */
export const ChannelerSlabBuffInfo = new ChannelerSlabBuffInfo$Type();
