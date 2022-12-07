// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PhotoGallerySettleInfo.proto" (syntax proto3)
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
import { GalleryStopReason } from "./GalleryStopReason";
/**
 * @generated from protobuf message PhotoGallerySettleInfo
 */
export interface PhotoGallerySettleInfo {
    /**
     * @generated from protobuf field: GalleryStopReason reason = 13;
     */
    reason: GalleryStopReason;
}
// @generated message type with reflection information, may provide speed optimized methods
class PhotoGallerySettleInfo$Type extends MessageType<PhotoGallerySettleInfo> {
    constructor() {
        super("PhotoGallerySettleInfo", [
            { no: 13, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason, "GALLERY_STOP_REASON_"] }
        ]);
    }
    create(value?: PartialMessage<PhotoGallerySettleInfo>): PhotoGallerySettleInfo {
        const message = { reason: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PhotoGallerySettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PhotoGallerySettleInfo): PhotoGallerySettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* GalleryStopReason reason */ 13:
                    message.reason = reader.int32();
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
    internalBinaryWrite(message: PhotoGallerySettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* GalleryStopReason reason = 13; */
        if (message.reason !== 0)
            writer.tag(13, WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PhotoGallerySettleInfo
 */
export const PhotoGallerySettleInfo = new PhotoGallerySettleInfo$Type();
