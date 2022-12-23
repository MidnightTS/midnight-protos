// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WaterSpiritActivityDetailInfo.proto" (syntax proto3)
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
 * @generated from protobuf message WaterSpiritActivityDetailInfo
 */
export interface WaterSpiritActivityDetailInfo {
    /**
     * @generated from protobuf field: map<uint32, uint32> search_time_map = 13;
     */
    searchTimeMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 region_search_id = 4;
     */
    regionSearchId: number;
    /**
     * @generated from protobuf field: uint32 mp_play_id = 9;
     */
    mpPlayId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WaterSpiritActivityDetailInfo$Type extends MessageType<WaterSpiritActivityDetailInfo> {
    constructor() {
        super("WaterSpiritActivityDetailInfo", [
            { no: 13, name: "search_time_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "region_search_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "mp_play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WaterSpiritActivityDetailInfo>): WaterSpiritActivityDetailInfo {
        const message = { searchTimeMap: {}, regionSearchId: 0, mpPlayId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WaterSpiritActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WaterSpiritActivityDetailInfo): WaterSpiritActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> search_time_map */ 13:
                    this.binaryReadMap13(message.searchTimeMap, reader, options);
                    break;
                case /* uint32 region_search_id */ 4:
                    message.regionSearchId = reader.uint32();
                    break;
                case /* uint32 mp_play_id */ 9:
                    message.mpPlayId = reader.uint32();
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
    private binaryReadMap13(map: WaterSpiritActivityDetailInfo["searchTimeMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WaterSpiritActivityDetailInfo["searchTimeMap"] | undefined, val: WaterSpiritActivityDetailInfo["searchTimeMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field WaterSpiritActivityDetailInfo.search_time_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: WaterSpiritActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> search_time_map = 13; */
        for (let k of Object.keys(message.searchTimeMap))
            writer.tag(13, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.searchTimeMap[k as any]).join();
        /* uint32 region_search_id = 4; */
        if (message.regionSearchId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.regionSearchId);
        /* uint32 mp_play_id = 9; */
        if (message.mpPlayId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.mpPlayId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WaterSpiritActivityDetailInfo
 */
export const WaterSpiritActivityDetailInfo = new WaterSpiritActivityDetailInfo$Type();
