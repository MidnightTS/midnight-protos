// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "LanternRiteActivityDetailInfo.proto" (syntax proto3)
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
import { LanternProjectionInfo } from "./LanternProjectionInfo";
import { LanternRiteFireworksInfo } from "./LanternRiteFireworksInfo";
import { SalvageStageInfo } from "./SalvageStageInfo";
/**
 * @generated from protobuf message LanternRiteActivityDetailInfo
 */
export interface LanternRiteActivityDetailInfo {
    /**
     * @generated from protobuf field: repeated SalvageStageInfo stage_info_list = 5;
     */
    stageInfoList: SalvageStageInfo[];
    /**
     * @generated from protobuf field: LanternRiteFireworksInfo fireworks_info = 15;
     */
    fireworksInfo?: LanternRiteFireworksInfo;
    /**
     * @generated from protobuf field: bool Unk3300_PDFJNCDGKGH = 11 [json_name = "Unk3300PDFJNCDGKGH"];
     */
    unk3300PDFJNCDGKGH: boolean;
    /**
     * @generated from protobuf field: LanternProjectionInfo projection_info = 3;
     */
    projectionInfo?: LanternProjectionInfo;
    /**
     * @generated from protobuf field: bool Unk3300_DKBJLCIMBAL = 8 [json_name = "Unk3300DKBJLCIMBAL"];
     */
    unk3300DKBJLCIMBAL: boolean;
    /**
     * @generated from protobuf field: bool is_content_closed = 14;
     */
    isContentClosed: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteActivityDetailInfo$Type extends MessageType<LanternRiteActivityDetailInfo> {
    constructor() {
        super("LanternRiteActivityDetailInfo", [
            { no: 5, name: "stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SalvageStageInfo },
            { no: 15, name: "fireworks_info", kind: "message", T: () => LanternRiteFireworksInfo },
            { no: 11, name: "Unk3300_PDFJNCDGKGH", kind: "scalar", jsonName: "Unk3300PDFJNCDGKGH", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "projection_info", kind: "message", T: () => LanternProjectionInfo },
            { no: 8, name: "Unk3300_DKBJLCIMBAL", kind: "scalar", jsonName: "Unk3300DKBJLCIMBAL", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<LanternRiteActivityDetailInfo>): LanternRiteActivityDetailInfo {
        const message = { stageInfoList: [], unk3300PDFJNCDGKGH: false, unk3300DKBJLCIMBAL: false, isContentClosed: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LanternRiteActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LanternRiteActivityDetailInfo): LanternRiteActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated SalvageStageInfo stage_info_list */ 5:
                    message.stageInfoList.push(SalvageStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* LanternRiteFireworksInfo fireworks_info */ 15:
                    message.fireworksInfo = LanternRiteFireworksInfo.internalBinaryRead(reader, reader.uint32(), options, message.fireworksInfo);
                    break;
                case /* bool Unk3300_PDFJNCDGKGH = 11 [json_name = "Unk3300PDFJNCDGKGH"];*/ 11:
                    message.unk3300PDFJNCDGKGH = reader.bool();
                    break;
                case /* LanternProjectionInfo projection_info */ 3:
                    message.projectionInfo = LanternProjectionInfo.internalBinaryRead(reader, reader.uint32(), options, message.projectionInfo);
                    break;
                case /* bool Unk3300_DKBJLCIMBAL = 8 [json_name = "Unk3300DKBJLCIMBAL"];*/ 8:
                    message.unk3300DKBJLCIMBAL = reader.bool();
                    break;
                case /* bool is_content_closed */ 14:
                    message.isContentClosed = reader.bool();
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
    internalBinaryWrite(message: LanternRiteActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated SalvageStageInfo stage_info_list = 5; */
        for (let i = 0; i < message.stageInfoList.length; i++)
            SalvageStageInfo.internalBinaryWrite(message.stageInfoList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* LanternRiteFireworksInfo fireworks_info = 15; */
        if (message.fireworksInfo)
            LanternRiteFireworksInfo.internalBinaryWrite(message.fireworksInfo, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_PDFJNCDGKGH = 11 [json_name = "Unk3300PDFJNCDGKGH"]; */
        if (message.unk3300PDFJNCDGKGH !== false)
            writer.tag(11, WireType.Varint).bool(message.unk3300PDFJNCDGKGH);
        /* LanternProjectionInfo projection_info = 3; */
        if (message.projectionInfo)
            LanternProjectionInfo.internalBinaryWrite(message.projectionInfo, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_DKBJLCIMBAL = 8 [json_name = "Unk3300DKBJLCIMBAL"]; */
        if (message.unk3300DKBJLCIMBAL !== false)
            writer.tag(8, WireType.Varint).bool(message.unk3300DKBJLCIMBAL);
        /* bool is_content_closed = 14; */
        if (message.isContentClosed !== false)
            writer.tag(14, WireType.Varint).bool(message.isContentClosed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteActivityDetailInfo
 */
export const LanternRiteActivityDetailInfo = new LanternRiteActivityDetailInfo$Type();
