// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneGalleryBulletInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SceneGalleryBulletInfo
 */
export interface SceneGalleryBulletInfo {
    /**
     * @generated from protobuf field: map<uint32, uint32> hit_count_map = 2;
     */
    hitCountMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 end_time = 13;
     */
    endTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBulletInfo$Type extends MessageType<SceneGalleryBulletInfo> {
    constructor() {
        super("SceneGalleryBulletInfo", [
            { no: 2, name: "hit_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 13, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryBulletInfo>): SceneGalleryBulletInfo {
        const message = { hitCountMap: {}, endTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryBulletInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryBulletInfo): SceneGalleryBulletInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> hit_count_map */ 2:
                    this.binaryReadMap2(message.hitCountMap, reader, options);
                    break;
                case /* uint32 end_time */ 13:
                    message.endTime = reader.uint32();
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
    private binaryReadMap2(map: SceneGalleryBulletInfo["hitCountMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof SceneGalleryBulletInfo["hitCountMap"] | undefined, val: SceneGalleryBulletInfo["hitCountMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneGalleryBulletInfo.hit_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: SceneGalleryBulletInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> hit_count_map = 2; */
        for (let k of Object.keys(message.hitCountMap))
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.hitCountMap[k as any]).join();
        /* uint32 end_time = 13; */
        if (message.endTime !== 0)
            writer.tag(13, WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryBulletInfo
 */
export const SceneGalleryBulletInfo = new SceneGalleryBulletInfo$Type();
