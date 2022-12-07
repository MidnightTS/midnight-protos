// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GalleryWillStartCountdownNotify.proto" (syntax proto3)
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
import { GalleryStartSource } from "./GalleryStartSource";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5505;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GalleryWillStartCountdownNotify
 */
export interface GalleryWillStartCountdownNotify {
    /**
     * @generated from protobuf field: uint32 gallery_id = 13;
     */
    galleryId: number;
    /**
     * @generated from protobuf field: GalleryStartSource start_source = 14;
     */
    startSource: GalleryStartSource;
    /**
     * @generated from protobuf field: uint32 end_time = 15;
     */
    endTime: number;
    /**
     * @generated from protobuf field: bool is_end = 6;
     */
    isEnd: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class GalleryWillStartCountdownNotify$Type extends MessageType<GalleryWillStartCountdownNotify> {
    constructor() {
        super("GalleryWillStartCountdownNotify", [
            { no: 13, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "start_source", kind: "enum", T: () => ["GalleryStartSource", GalleryStartSource, "GALLERY_START_SOURCE_"] },
            { no: 15, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_end", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<GalleryWillStartCountdownNotify>): GalleryWillStartCountdownNotify {
        const message = { galleryId: 0, startSource: 0, endTime: 0, isEnd: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GalleryWillStartCountdownNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GalleryWillStartCountdownNotify): GalleryWillStartCountdownNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
                    break;
                case /* GalleryStartSource start_source */ 14:
                    message.startSource = reader.int32();
                    break;
                case /* uint32 end_time */ 15:
                    message.endTime = reader.uint32();
                    break;
                case /* bool is_end */ 6:
                    message.isEnd = reader.bool();
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
    internalBinaryWrite(message: GalleryWillStartCountdownNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 gallery_id = 13; */
        if (message.galleryId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.galleryId);
        /* GalleryStartSource start_source = 14; */
        if (message.startSource !== 0)
            writer.tag(14, WireType.Varint).int32(message.startSource);
        /* uint32 end_time = 15; */
        if (message.endTime !== 0)
            writer.tag(15, WireType.Varint).uint32(message.endTime);
        /* bool is_end = 6; */
        if (message.isEnd !== false)
            writer.tag(6, WireType.Varint).bool(message.isEnd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryWillStartCountdownNotify
 */
export const GalleryWillStartCountdownNotify = new GalleryWillStartCountdownNotify$Type();
