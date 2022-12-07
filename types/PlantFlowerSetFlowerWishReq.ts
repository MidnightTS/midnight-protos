// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlantFlowerSetFlowerWishReq.proto" (syntax proto3)
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
 *   CMD_ID = 8420;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message PlantFlowerSetFlowerWishReq
 */
export interface PlantFlowerSetFlowerWishReq {
    /**
     * @generated from protobuf field: uint32 schedule_id = 4;
     */
    scheduleId: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> flower_num_map = 3;
     */
    flowerNumMap: {
        [key: number]: number;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerSetFlowerWishReq$Type extends MessageType<PlantFlowerSetFlowerWishReq> {
    constructor() {
        super("PlantFlowerSetFlowerWishReq", [
            { no: 4, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "flower_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value?: PartialMessage<PlantFlowerSetFlowerWishReq>): PlantFlowerSetFlowerWishReq {
        const message = { scheduleId: 0, flowerNumMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlantFlowerSetFlowerWishReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlantFlowerSetFlowerWishReq): PlantFlowerSetFlowerWishReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 schedule_id */ 4:
                    message.scheduleId = reader.uint32();
                    break;
                case /* map<uint32, uint32> flower_num_map */ 3:
                    this.binaryReadMap3(message.flowerNumMap, reader, options);
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
    private binaryReadMap3(map: PlantFlowerSetFlowerWishReq["flowerNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PlantFlowerSetFlowerWishReq["flowerNumMap"] | undefined, val: PlantFlowerSetFlowerWishReq["flowerNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerSetFlowerWishReq.flower_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: PlantFlowerSetFlowerWishReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 schedule_id = 4; */
        if (message.scheduleId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.scheduleId);
        /* map<uint32, uint32> flower_num_map = 3; */
        for (let k of Object.keys(message.flowerNumMap))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.flowerNumMap[k as any]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerSetFlowerWishReq
 */
export const PlantFlowerSetFlowerWishReq = new PlantFlowerSetFlowerWishReq$Type();