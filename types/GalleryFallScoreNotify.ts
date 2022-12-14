// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GalleryFallScoreNotify.proto" (syntax proto3)
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
import { FallPlayerBrief } from "./FallPlayerBrief";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5543;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GalleryFallScoreNotify
 */
export interface GalleryFallScoreNotify {
    /**
     * @generated from protobuf field: map<uint32, FallPlayerBrief> uid_brief_map = 10;
     */
    uidBriefMap: {
        [key: number]: FallPlayerBrief;
    };
    /**
     * @generated from protobuf field: uint32 gallery_id = 15;
     */
    galleryId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFallScoreNotify$Type extends MessageType<GalleryFallScoreNotify> {
    constructor() {
        super("GalleryFallScoreNotify", [
            { no: 10, name: "uid_brief_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FallPlayerBrief } },
            { no: 15, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GalleryFallScoreNotify>): GalleryFallScoreNotify {
        const message = { uidBriefMap: {}, galleryId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GalleryFallScoreNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GalleryFallScoreNotify): GalleryFallScoreNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, FallPlayerBrief> uid_brief_map */ 10:
                    this.binaryReadMap10(message.uidBriefMap, reader, options);
                    break;
                case /* uint32 gallery_id */ 15:
                    message.galleryId = reader.uint32();
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
    private binaryReadMap10(map: GalleryFallScoreNotify["uidBriefMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof GalleryFallScoreNotify["uidBriefMap"] | undefined, val: GalleryFallScoreNotify["uidBriefMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = FallPlayerBrief.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GalleryFallScoreNotify.uid_brief_map");
            }
        }
        map[key ?? 0] = val ?? FallPlayerBrief.create();
    }
    internalBinaryWrite(message: GalleryFallScoreNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, FallPlayerBrief> uid_brief_map = 10; */
        for (let k of Object.keys(message.uidBriefMap)) {
            writer.tag(10, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            FallPlayerBrief.internalBinaryWrite(message.uidBriefMap[k as any], writer, options);
            writer.join().join();
        }
        /* uint32 gallery_id = 15; */
        if (message.galleryId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryFallScoreNotify
 */
export const GalleryFallScoreNotify = new GalleryFallScoreNotify$Type();
