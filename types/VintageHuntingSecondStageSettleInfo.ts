// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "VintageHuntingSecondStageSettleInfo.proto" (syntax proto3)
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
 * @generated from protobuf message VintageHuntingSecondStageSettleInfo
 */
export interface VintageHuntingSecondStageSettleInfo {
    /**
     * @generated from protobuf field: uint32 capture_animal_num = 2;
     */
    captureAnimalNum: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> animal_count_map = 3;
     */
    animalCountMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 total_num = 1;
     */
    totalNum: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class VintageHuntingSecondStageSettleInfo$Type extends MessageType<VintageHuntingSecondStageSettleInfo> {
    constructor() {
        super("VintageHuntingSecondStageSettleInfo", [
            { no: 2, name: "capture_animal_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "animal_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 1, name: "total_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<VintageHuntingSecondStageSettleInfo>): VintageHuntingSecondStageSettleInfo {
        const message = { captureAnimalNum: 0, animalCountMap: {}, totalNum: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VintageHuntingSecondStageSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VintageHuntingSecondStageSettleInfo): VintageHuntingSecondStageSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 capture_animal_num */ 2:
                    message.captureAnimalNum = reader.uint32();
                    break;
                case /* map<uint32, uint32> animal_count_map */ 3:
                    this.binaryReadMap3(message.animalCountMap, reader, options);
                    break;
                case /* uint32 total_num */ 1:
                    message.totalNum = reader.uint32();
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
    private binaryReadMap3(map: VintageHuntingSecondStageSettleInfo["animalCountMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof VintageHuntingSecondStageSettleInfo["animalCountMap"] | undefined, val: VintageHuntingSecondStageSettleInfo["animalCountMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageHuntingSecondStageSettleInfo.animal_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: VintageHuntingSecondStageSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 capture_animal_num = 2; */
        if (message.captureAnimalNum !== 0)
            writer.tag(2, WireType.Varint).uint32(message.captureAnimalNum);
        /* map<uint32, uint32> animal_count_map = 3; */
        for (let k of Object.keys(message.animalCountMap))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.animalCountMap[k as any]).join();
        /* uint32 total_num = 1; */
        if (message.totalNum !== 0)
            writer.tag(1, WireType.Varint).uint32(message.totalNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageHuntingSecondStageSettleInfo
 */
export const VintageHuntingSecondStageSettleInfo = new VintageHuntingSecondStageSettleInfo$Type();
