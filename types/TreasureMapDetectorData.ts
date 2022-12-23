// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TreasureMapDetectorData.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * @generated from protobuf message TreasureMapDetectorData
 */
export interface TreasureMapDetectorData {
    /**
     * @generated from protobuf field: uint32 region_id = 1;
     */
    regionId: number;
    /**
     * @generated from protobuf field: bool is_region_detected = 11;
     */
    isRegionDetected: boolean;
    /**
     * @generated from protobuf field: uint32 radius = 2;
     */
    radius: number;
    /**
     * @generated from protobuf field: repeated Vector spot_list = 7;
     */
    spotList: Vector[];
    /**
     * @generated from protobuf field: Vector center_pos = 12;
     */
    centerPos?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapDetectorData$Type extends MessageType<TreasureMapDetectorData> {
    constructor() {
        super("TreasureMapDetectorData", [
            { no: 1, name: "region_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_region_detected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "radius", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "spot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector },
            { no: 12, name: "center_pos", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<TreasureMapDetectorData>): TreasureMapDetectorData {
        const message = { regionId: 0, isRegionDetected: false, radius: 0, spotList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TreasureMapDetectorData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TreasureMapDetectorData): TreasureMapDetectorData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 region_id */ 1:
                    message.regionId = reader.uint32();
                    break;
                case /* bool is_region_detected */ 11:
                    message.isRegionDetected = reader.bool();
                    break;
                case /* uint32 radius */ 2:
                    message.radius = reader.uint32();
                    break;
                case /* repeated Vector spot_list */ 7:
                    message.spotList.push(Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* Vector center_pos */ 12:
                    message.centerPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.centerPos);
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
    internalBinaryWrite(message: TreasureMapDetectorData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 region_id = 1; */
        if (message.regionId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.regionId);
        /* bool is_region_detected = 11; */
        if (message.isRegionDetected !== false)
            writer.tag(11, WireType.Varint).bool(message.isRegionDetected);
        /* uint32 radius = 2; */
        if (message.radius !== 0)
            writer.tag(2, WireType.Varint).uint32(message.radius);
        /* repeated Vector spot_list = 7; */
        for (let i = 0; i < message.spotList.length; i++)
            Vector.internalBinaryWrite(message.spotList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* Vector center_pos = 12; */
        if (message.centerPos)
            Vector.internalBinaryWrite(message.centerPos, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureMapDetectorData
 */
export const TreasureMapDetectorData = new TreasureMapDetectorData$Type();
