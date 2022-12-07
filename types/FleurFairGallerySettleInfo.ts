// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FleurFairGallerySettleInfo.proto" (syntax proto3)
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
 * @generated from protobuf message FleurFairGallerySettleInfo
 */
export interface FleurFairGallerySettleInfo {
    /**
     * @generated from protobuf field: bool is_success = 8;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: map<uint32, int32> energy_stat_map = 2;
     */
    energyStatMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 energy = 3;
     */
    energy: number;
    /**
     * @generated from protobuf field: uint32 gallery_stage_index = 6;
     */
    galleryStageIndex: number;
    /**
     * @generated from protobuf field: uint32 gallery_stage_count = 15;
     */
    galleryStageCount: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairGallerySettleInfo$Type extends MessageType<FleurFairGallerySettleInfo> {
    constructor() {
        super("FleurFairGallerySettleInfo", [
            { no: 8, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "energy_stat_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 3, name: "energy", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "gallery_stage_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "gallery_stage_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FleurFairGallerySettleInfo>): FleurFairGallerySettleInfo {
        const message = { isSuccess: false, energyStatMap: {}, energy: 0, galleryStageIndex: 0, galleryStageCount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FleurFairGallerySettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FleurFairGallerySettleInfo): FleurFairGallerySettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_success */ 8:
                    message.isSuccess = reader.bool();
                    break;
                case /* map<uint32, int32> energy_stat_map */ 2:
                    this.binaryReadMap2(message.energyStatMap, reader, options);
                    break;
                case /* uint32 energy */ 3:
                    message.energy = reader.uint32();
                    break;
                case /* uint32 gallery_stage_index */ 6:
                    message.galleryStageIndex = reader.uint32();
                    break;
                case /* uint32 gallery_stage_count */ 15:
                    message.galleryStageCount = reader.uint32();
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
    private binaryReadMap2(map: FleurFairGallerySettleInfo["energyStatMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof FleurFairGallerySettleInfo["energyStatMap"] | undefined, val: FleurFairGallerySettleInfo["energyStatMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FleurFairGallerySettleInfo.energy_stat_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: FleurFairGallerySettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_success = 8; */
        if (message.isSuccess !== false)
            writer.tag(8, WireType.Varint).bool(message.isSuccess);
        /* map<uint32, int32> energy_stat_map = 2; */
        for (let k of Object.keys(message.energyStatMap))
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).int32(message.energyStatMap[k as any]).join();
        /* uint32 energy = 3; */
        if (message.energy !== 0)
            writer.tag(3, WireType.Varint).uint32(message.energy);
        /* uint32 gallery_stage_index = 6; */
        if (message.galleryStageIndex !== 0)
            writer.tag(6, WireType.Varint).uint32(message.galleryStageIndex);
        /* uint32 gallery_stage_count = 15; */
        if (message.galleryStageCount !== 0)
            writer.tag(15, WireType.Varint).uint32(message.galleryStageCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairGallerySettleInfo
 */
export const FleurFairGallerySettleInfo = new FleurFairGallerySettleInfo$Type();