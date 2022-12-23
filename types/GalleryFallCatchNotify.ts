// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GalleryFallCatchNotify.proto" (syntax proto3)
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
 *   CMD_ID = 5600;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GalleryFallCatchNotify
 */
export interface GalleryFallCatchNotify {
    /**
     * @generated from protobuf field: uint32 add_score = 1;
     */
    addScore: number;
    /**
     * @generated from protobuf field: uint32 gallery_id = 7;
     */
    galleryId: number;
    /**
     * @generated from protobuf field: uint32 cur_score = 11;
     */
    curScore: number;
    /**
     * @generated from protobuf field: uint32 time_cost = 15;
     */
    timeCost: number;
    /**
     * @generated from protobuf field: bool is_ground = 8;
     */
    isGround: boolean;
    /**
     * @generated from protobuf field: map<uint32, uint32> ball_catch_count_map = 14;
     */
    ballCatchCountMap: {
        [key: number]: number;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFallCatchNotify$Type extends MessageType<GalleryFallCatchNotify> {
    constructor() {
        super("GalleryFallCatchNotify", [
            { no: 1, name: "add_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "time_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_ground", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "ball_catch_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value?: PartialMessage<GalleryFallCatchNotify>): GalleryFallCatchNotify {
        const message = { addScore: 0, galleryId: 0, curScore: 0, timeCost: 0, isGround: false, ballCatchCountMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GalleryFallCatchNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GalleryFallCatchNotify): GalleryFallCatchNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 add_score */ 1:
                    message.addScore = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 7:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 cur_score */ 11:
                    message.curScore = reader.uint32();
                    break;
                case /* uint32 time_cost */ 15:
                    message.timeCost = reader.uint32();
                    break;
                case /* bool is_ground */ 8:
                    message.isGround = reader.bool();
                    break;
                case /* map<uint32, uint32> ball_catch_count_map */ 14:
                    this.binaryReadMap14(message.ballCatchCountMap, reader, options);
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
    private binaryReadMap14(map: GalleryFallCatchNotify["ballCatchCountMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof GalleryFallCatchNotify["ballCatchCountMap"] | undefined, val: GalleryFallCatchNotify["ballCatchCountMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GalleryFallCatchNotify.ball_catch_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: GalleryFallCatchNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 add_score = 1; */
        if (message.addScore !== 0)
            writer.tag(1, WireType.Varint).uint32(message.addScore);
        /* uint32 gallery_id = 7; */
        if (message.galleryId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.galleryId);
        /* uint32 cur_score = 11; */
        if (message.curScore !== 0)
            writer.tag(11, WireType.Varint).uint32(message.curScore);
        /* uint32 time_cost = 15; */
        if (message.timeCost !== 0)
            writer.tag(15, WireType.Varint).uint32(message.timeCost);
        /* bool is_ground = 8; */
        if (message.isGround !== false)
            writer.tag(8, WireType.Varint).bool(message.isGround);
        /* map<uint32, uint32> ball_catch_count_map = 14; */
        for (let k of Object.keys(message.ballCatchCountMap))
            writer.tag(14, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.ballCatchCountMap[k as any]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryFallCatchNotify
 */
export const GalleryFallCatchNotify = new GalleryFallCatchNotify$Type();
