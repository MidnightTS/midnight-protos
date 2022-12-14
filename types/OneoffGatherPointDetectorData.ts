// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "OneoffGatherPointDetectorData.proto" (syntax proto3)
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
 * @generated from protobuf message OneoffGatherPointDetectorData
 */
export interface OneoffGatherPointDetectorData {
    /**
     * @generated from protobuf field: uint32 hint_radius = 4;
     */
    hintRadius: number;
    /**
     * @generated from protobuf field: uint32 config_id = 3;
     */
    configId: number;
    /**
     * @generated from protobuf field: bool is_hint_valid = 11;
     */
    isHintValid: boolean;
    /**
     * @generated from protobuf field: Vector hint_center_pos = 12;
     */
    hintCenterPos?: Vector;
    /**
     * @generated from protobuf field: bool is_all_collected = 10;
     */
    isAllCollected: boolean;
    /**
     * @generated from protobuf field: uint32 group_id = 1;
     */
    groupId: number;
    /**
     * @generated from protobuf field: uint32 material_id = 9;
     */
    materialId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class OneoffGatherPointDetectorData$Type extends MessageType<OneoffGatherPointDetectorData> {
    constructor() {
        super("OneoffGatherPointDetectorData", [
            { no: 4, name: "hint_radius", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_hint_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "hint_center_pos", kind: "message", T: () => Vector },
            { no: 10, name: "is_all_collected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<OneoffGatherPointDetectorData>): OneoffGatherPointDetectorData {
        const message = { hintRadius: 0, configId: 0, isHintValid: false, isAllCollected: false, groupId: 0, materialId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OneoffGatherPointDetectorData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OneoffGatherPointDetectorData): OneoffGatherPointDetectorData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 hint_radius */ 4:
                    message.hintRadius = reader.uint32();
                    break;
                case /* uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* bool is_hint_valid */ 11:
                    message.isHintValid = reader.bool();
                    break;
                case /* Vector hint_center_pos */ 12:
                    message.hintCenterPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.hintCenterPos);
                    break;
                case /* bool is_all_collected */ 10:
                    message.isAllCollected = reader.bool();
                    break;
                case /* uint32 group_id */ 1:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 material_id */ 9:
                    message.materialId = reader.uint32();
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
    internalBinaryWrite(message: OneoffGatherPointDetectorData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 hint_radius = 4; */
        if (message.hintRadius !== 0)
            writer.tag(4, WireType.Varint).uint32(message.hintRadius);
        /* uint32 config_id = 3; */
        if (message.configId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.configId);
        /* bool is_hint_valid = 11; */
        if (message.isHintValid !== false)
            writer.tag(11, WireType.Varint).bool(message.isHintValid);
        /* Vector hint_center_pos = 12; */
        if (message.hintCenterPos)
            Vector.internalBinaryWrite(message.hintCenterPos, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* bool is_all_collected = 10; */
        if (message.isAllCollected !== false)
            writer.tag(10, WireType.Varint).bool(message.isAllCollected);
        /* uint32 group_id = 1; */
        if (message.groupId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.groupId);
        /* uint32 material_id = 9; */
        if (message.materialId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OneoffGatherPointDetectorData
 */
export const OneoffGatherPointDetectorData = new OneoffGatherPointDetectorData$Type();
