// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneGalleryHomeSeekFurnitureInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SceneGalleryHomeSeekFurnitureInfo
 */
export interface SceneGalleryHomeSeekFurnitureInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_DAEEBIEAOMN = 3 [json_name = "Unk3300DAEEBIEAOMN"];
     */
    unk3300DAEEBIEAOMN: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_ENKOGPIEHFD = 14 [json_name = "Unk3300ENKOGPIEHFD"];
     */
    unk3300ENKOGPIEHFD: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> player_score_map = 10;
     */
    playerScoreMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 Unk3300_LGEAPLJCJFH = 12 [json_name = "Unk3300LGEAPLJCJFH"];
     */
    unk3300LGEAPLJCJFH: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHomeSeekFurnitureInfo$Type extends MessageType<SceneGalleryHomeSeekFurnitureInfo> {
    constructor() {
        super("SceneGalleryHomeSeekFurnitureInfo", [
            { no: 3, name: "Unk3300_DAEEBIEAOMN", kind: "scalar", jsonName: "Unk3300DAEEBIEAOMN", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_ENKOGPIEHFD", kind: "scalar", jsonName: "Unk3300ENKOGPIEHFD", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "player_score_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "Unk3300_LGEAPLJCJFH", kind: "scalar", jsonName: "Unk3300LGEAPLJCJFH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryHomeSeekFurnitureInfo>): SceneGalleryHomeSeekFurnitureInfo {
        const message = { unk3300DAEEBIEAOMN: 0, unk3300ENKOGPIEHFD: 0, playerScoreMap: {}, unk3300LGEAPLJCJFH: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryHomeSeekFurnitureInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryHomeSeekFurnitureInfo): SceneGalleryHomeSeekFurnitureInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_DAEEBIEAOMN = 3 [json_name = "Unk3300DAEEBIEAOMN"];*/ 3:
                    message.unk3300DAEEBIEAOMN = reader.uint32();
                    break;
                case /* uint32 Unk3300_ENKOGPIEHFD = 14 [json_name = "Unk3300ENKOGPIEHFD"];*/ 14:
                    message.unk3300ENKOGPIEHFD = reader.uint32();
                    break;
                case /* map<uint32, uint32> player_score_map */ 10:
                    this.binaryReadMap10(message.playerScoreMap, reader, options);
                    break;
                case /* uint32 Unk3300_LGEAPLJCJFH = 12 [json_name = "Unk3300LGEAPLJCJFH"];*/ 12:
                    message.unk3300LGEAPLJCJFH = reader.uint32();
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
    private binaryReadMap10(map: SceneGalleryHomeSeekFurnitureInfo["playerScoreMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof SceneGalleryHomeSeekFurnitureInfo["playerScoreMap"] | undefined, val: SceneGalleryHomeSeekFurnitureInfo["playerScoreMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneGalleryHomeSeekFurnitureInfo.player_score_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: SceneGalleryHomeSeekFurnitureInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_DAEEBIEAOMN = 3 [json_name = "Unk3300DAEEBIEAOMN"]; */
        if (message.unk3300DAEEBIEAOMN !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300DAEEBIEAOMN);
        /* uint32 Unk3300_ENKOGPIEHFD = 14 [json_name = "Unk3300ENKOGPIEHFD"]; */
        if (message.unk3300ENKOGPIEHFD !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300ENKOGPIEHFD);
        /* map<uint32, uint32> player_score_map = 10; */
        for (let k of Object.keys(message.playerScoreMap))
            writer.tag(10, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.playerScoreMap[k as any]).join();
        /* uint32 Unk3300_LGEAPLJCJFH = 12 [json_name = "Unk3300LGEAPLJCJFH"]; */
        if (message.unk3300LGEAPLJCJFH !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300LGEAPLJCJFH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryHomeSeekFurnitureInfo
 */
export const SceneGalleryHomeSeekFurnitureInfo = new SceneGalleryHomeSeekFurnitureInfo$Type();
