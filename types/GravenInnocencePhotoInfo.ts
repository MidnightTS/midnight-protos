// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GravenInnocencePhotoInfo.proto" (syntax proto3)
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
import { GravenInnocencePhotoObjectInfo } from "./GravenInnocencePhotoObjectInfo";
import { GravenInnocencePhotoStageInfo } from "./GravenInnocencePhotoStageInfo";
/**
 * @generated from protobuf message GravenInnocencePhotoInfo
 */
export interface GravenInnocencePhotoInfo {
    /**
     * @generated from protobuf field: repeated GravenInnocencePhotoStageInfo stage_info_list = 3;
     */
    stageInfoList: GravenInnocencePhotoStageInfo[];
    /**
     * @generated from protobuf field: repeated GravenInnocencePhotoObjectInfo object_info_list = 15;
     */
    objectInfoList: GravenInnocencePhotoObjectInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocencePhotoInfo$Type extends MessageType<GravenInnocencePhotoInfo> {
    constructor() {
        super("GravenInnocencePhotoInfo", [
            { no: 3, name: "stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GravenInnocencePhotoStageInfo },
            { no: 15, name: "object_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GravenInnocencePhotoObjectInfo }
        ]);
    }
    create(value?: PartialMessage<GravenInnocencePhotoInfo>): GravenInnocencePhotoInfo {
        const message = { stageInfoList: [], objectInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GravenInnocencePhotoInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GravenInnocencePhotoInfo): GravenInnocencePhotoInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated GravenInnocencePhotoStageInfo stage_info_list */ 3:
                    message.stageInfoList.push(GravenInnocencePhotoStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GravenInnocencePhotoObjectInfo object_info_list */ 15:
                    message.objectInfoList.push(GravenInnocencePhotoObjectInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GravenInnocencePhotoInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated GravenInnocencePhotoStageInfo stage_info_list = 3; */
        for (let i = 0; i < message.stageInfoList.length; i++)
            GravenInnocencePhotoStageInfo.internalBinaryWrite(message.stageInfoList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated GravenInnocencePhotoObjectInfo object_info_list = 15; */
        for (let i = 0; i < message.objectInfoList.length; i++)
            GravenInnocencePhotoObjectInfo.internalBinaryWrite(message.objectInfoList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocencePhotoInfo
 */
export const GravenInnocencePhotoInfo = new GravenInnocencePhotoInfo$Type();
