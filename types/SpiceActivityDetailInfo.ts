// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SpiceActivityDetailInfo.proto" (syntax proto3)
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
import { SpiceStageData } from "./SpiceStageData";
/**
 * @generated from protobuf message SpiceActivityDetailInfo
 */
export interface SpiceActivityDetailInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_CIHIAJEGCBO = 14 [json_name = "Unk3300CIHIAJEGCBO"];
     */
    unk3300CIHIAJEGCBO: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LAKPMMIPBMI = 8 [json_name = "Unk3300LAKPMMIPBMI"];
     */
    unk3300LAKPMMIPBMI: number;
    /**
     * @generated from protobuf field: repeated SpiceStageData spice_stage_data_list = 6;
     */
    spiceStageDataList: SpiceStageData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class SpiceActivityDetailInfo$Type extends MessageType<SpiceActivityDetailInfo> {
    constructor() {
        super("SpiceActivityDetailInfo", [
            { no: 14, name: "Unk3300_CIHIAJEGCBO", kind: "scalar", jsonName: "Unk3300CIHIAJEGCBO", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_LAKPMMIPBMI", kind: "scalar", jsonName: "Unk3300LAKPMMIPBMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "spice_stage_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SpiceStageData }
        ]);
    }
    create(value?: PartialMessage<SpiceActivityDetailInfo>): SpiceActivityDetailInfo {
        const message = { unk3300CIHIAJEGCBO: 0, unk3300LAKPMMIPBMI: 0, spiceStageDataList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SpiceActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SpiceActivityDetailInfo): SpiceActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_CIHIAJEGCBO = 14 [json_name = "Unk3300CIHIAJEGCBO"];*/ 14:
                    message.unk3300CIHIAJEGCBO = reader.uint32();
                    break;
                case /* uint32 Unk3300_LAKPMMIPBMI = 8 [json_name = "Unk3300LAKPMMIPBMI"];*/ 8:
                    message.unk3300LAKPMMIPBMI = reader.uint32();
                    break;
                case /* repeated SpiceStageData spice_stage_data_list */ 6:
                    message.spiceStageDataList.push(SpiceStageData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: SpiceActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_CIHIAJEGCBO = 14 [json_name = "Unk3300CIHIAJEGCBO"]; */
        if (message.unk3300CIHIAJEGCBO !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300CIHIAJEGCBO);
        /* uint32 Unk3300_LAKPMMIPBMI = 8 [json_name = "Unk3300LAKPMMIPBMI"]; */
        if (message.unk3300LAKPMMIPBMI !== 0)
            writer.tag(8, WireType.Varint).uint32(message.unk3300LAKPMMIPBMI);
        /* repeated SpiceStageData spice_stage_data_list = 6; */
        for (let i = 0; i < message.spiceStageDataList.length; i++)
            SpiceStageData.internalBinaryWrite(message.spiceStageDataList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SpiceActivityDetailInfo
 */
export const SpiceActivityDetailInfo = new SpiceActivityDetailInfo$Type();
