// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GearActivityDetailInfo.proto" (syntax proto3)
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
import { JigsawPictureData } from "./JigsawPictureData";
import { GearLevelData } from "./GearLevelData";
/**
 * @generated from protobuf message GearActivityDetailInfo
 */
export interface GearActivityDetailInfo {
    /**
     * @generated from protobuf field: repeated GearLevelData gear_level_data_list = 2;
     */
    gearLevelDataList: GearLevelData[];
    /**
     * @generated from protobuf field: JigsawPictureData jigsaw_picture_data = 8;
     */
    jigsawPictureData?: JigsawPictureData;
}
// @generated message type with reflection information, may provide speed optimized methods
class GearActivityDetailInfo$Type extends MessageType<GearActivityDetailInfo> {
    constructor() {
        super("GearActivityDetailInfo", [
            { no: 2, name: "gear_level_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GearLevelData },
            { no: 8, name: "jigsaw_picture_data", kind: "message", T: () => JigsawPictureData }
        ]);
    }
    create(value?: PartialMessage<GearActivityDetailInfo>): GearActivityDetailInfo {
        const message = { gearLevelDataList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GearActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GearActivityDetailInfo): GearActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated GearLevelData gear_level_data_list */ 2:
                    message.gearLevelDataList.push(GearLevelData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* JigsawPictureData jigsaw_picture_data */ 8:
                    message.jigsawPictureData = JigsawPictureData.internalBinaryRead(reader, reader.uint32(), options, message.jigsawPictureData);
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
    internalBinaryWrite(message: GearActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated GearLevelData gear_level_data_list = 2; */
        for (let i = 0; i < message.gearLevelDataList.length; i++)
            GearLevelData.internalBinaryWrite(message.gearLevelDataList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* JigsawPictureData jigsaw_picture_data = 8; */
        if (message.jigsawPictureData)
            JigsawPictureData.internalBinaryWrite(message.jigsawPictureData, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GearActivityDetailInfo
 */
export const GearActivityDetailInfo = new GearActivityDetailInfo$Type();