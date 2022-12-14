// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GachaStageData.proto" (syntax proto3)
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
 * @generated from protobuf message GachaStageData
 */
export interface GachaStageData {
    /**
     * @generated from protobuf field: uint32 stage_id = 6;
     */
    stageId: number;
    /**
     * @generated from protobuf field: bool is_open = 14;
     */
    isOpen: boolean;
    /**
     * @generated from protobuf field: map<uint32, uint32> target_num_map = 1;
     */
    targetNumMap: {
        [key: number]: number;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GachaStageData$Type extends MessageType<GachaStageData> {
    constructor() {
        super("GachaStageData", [
            { no: 6, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "target_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value?: PartialMessage<GachaStageData>): GachaStageData {
        const message = { stageId: 0, isOpen: false, targetNumMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GachaStageData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GachaStageData): GachaStageData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 stage_id */ 6:
                    message.stageId = reader.uint32();
                    break;
                case /* bool is_open */ 14:
                    message.isOpen = reader.bool();
                    break;
                case /* map<uint32, uint32> target_num_map */ 1:
                    this.binaryReadMap1(message.targetNumMap, reader, options);
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
    private binaryReadMap1(map: GachaStageData["targetNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof GachaStageData["targetNumMap"] | undefined, val: GachaStageData["targetNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GachaStageData.target_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: GachaStageData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 stage_id = 6; */
        if (message.stageId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.stageId);
        /* bool is_open = 14; */
        if (message.isOpen !== false)
            writer.tag(14, WireType.Varint).bool(message.isOpen);
        /* map<uint32, uint32> target_num_map = 1; */
        for (let k of Object.keys(message.targetNumMap))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.targetNumMap[k as any]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaStageData
 */
export const GachaStageData = new GachaStageData$Type();
