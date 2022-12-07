// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GalleryStartNotify.proto" (syntax proto3)
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
import { GalleryFlowerStartParam } from "./GalleryFlowerStartParam";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5579;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GalleryStartNotify
 */
export interface GalleryStartNotify {
    /**
     * @generated from protobuf field: uint32 gallery_id = 6;
     */
    galleryId: number;
    /**
     * @generated from protobuf field: uint32 end_time = 13;
     */
    endTime: number;
    /**
     * @generated from protobuf field: uint32 owner_uid = 8;
     */
    ownerUid: number;
    /**
     * @generated from protobuf field: uint32 start_time = 7;
     */
    startTime: number;
    /**
     * @generated from protobuf field: uint32 player_count = 9;
     */
    playerCount: number;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "flowerStartParam";
        /**
         * @generated from protobuf field: GalleryFlowerStartParam flower_start_param = 11;
         */
        flowerStartParam: GalleryFlowerStartParam;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GalleryStartNotify$Type extends MessageType<GalleryStartNotify> {
    constructor() {
        super("GalleryStartNotify", [
            { no: 6, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "player_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "flower_start_param", kind: "message", oneof: "detail", T: () => GalleryFlowerStartParam }
        ]);
    }
    create(value?: PartialMessage<GalleryStartNotify>): GalleryStartNotify {
        const message = { galleryId: 0, endTime: 0, ownerUid: 0, startTime: 0, playerCount: 0, detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GalleryStartNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GalleryStartNotify): GalleryStartNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 gallery_id */ 6:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 end_time */ 13:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 owner_uid */ 8:
                    message.ownerUid = reader.uint32();
                    break;
                case /* uint32 start_time */ 7:
                    message.startTime = reader.uint32();
                    break;
                case /* uint32 player_count */ 9:
                    message.playerCount = reader.uint32();
                    break;
                case /* GalleryFlowerStartParam flower_start_param */ 11:
                    message.detail = {
                        oneofKind: "flowerStartParam",
                        flowerStartParam: GalleryFlowerStartParam.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).flowerStartParam)
                    };
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
    internalBinaryWrite(message: GalleryStartNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 gallery_id = 6; */
        if (message.galleryId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.galleryId);
        /* uint32 end_time = 13; */
        if (message.endTime !== 0)
            writer.tag(13, WireType.Varint).uint32(message.endTime);
        /* uint32 owner_uid = 8; */
        if (message.ownerUid !== 0)
            writer.tag(8, WireType.Varint).uint32(message.ownerUid);
        /* uint32 start_time = 7; */
        if (message.startTime !== 0)
            writer.tag(7, WireType.Varint).uint32(message.startTime);
        /* uint32 player_count = 9; */
        if (message.playerCount !== 0)
            writer.tag(9, WireType.Varint).uint32(message.playerCount);
        /* GalleryFlowerStartParam flower_start_param = 11; */
        if (message.detail.oneofKind === "flowerStartParam")
            GalleryFlowerStartParam.internalBinaryWrite(message.detail.flowerStartParam, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryStartNotify
 */
export const GalleryStartNotify = new GalleryStartNotify$Type();