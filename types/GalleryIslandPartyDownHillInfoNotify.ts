// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GalleryIslandPartyDownHillInfoNotify.proto" (syntax proto3)
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
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5537;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GalleryIslandPartyDownHillInfoNotify
 */
export interface GalleryIslandPartyDownHillInfoNotify {
    /**
     * @generated from protobuf field: uint32 coin = 8;
     */
    coin: number;
    /**
     * @generated from protobuf field: uint32 gallery_id = 14;
     */
    galleryId: number;
    /**
     * @generated from protobuf field: uint32 total_kill_monster_count = 7;
     */
    totalKillMonsterCount: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GalleryIslandPartyDownHillInfoNotify$Type extends MessageType<GalleryIslandPartyDownHillInfoNotify> {
    constructor() {
        super("GalleryIslandPartyDownHillInfoNotify", [
            { no: 8, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "total_kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GalleryIslandPartyDownHillInfoNotify>): GalleryIslandPartyDownHillInfoNotify {
        const message = { coin: 0, galleryId: 0, totalKillMonsterCount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GalleryIslandPartyDownHillInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GalleryIslandPartyDownHillInfoNotify): GalleryIslandPartyDownHillInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 coin */ 8:
                    message.coin = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 14:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 total_kill_monster_count */ 7:
                    message.totalKillMonsterCount = reader.uint32();
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
    internalBinaryWrite(message: GalleryIslandPartyDownHillInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 coin = 8; */
        if (message.coin !== 0)
            writer.tag(8, WireType.Varint).uint32(message.coin);
        /* uint32 gallery_id = 14; */
        if (message.galleryId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.galleryId);
        /* uint32 total_kill_monster_count = 7; */
        if (message.totalKillMonsterCount !== 0)
            writer.tag(7, WireType.Varint).uint32(message.totalKillMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryIslandPartyDownHillInfoNotify
 */
export const GalleryIslandPartyDownHillInfoNotify = new GalleryIslandPartyDownHillInfoNotify$Type();
