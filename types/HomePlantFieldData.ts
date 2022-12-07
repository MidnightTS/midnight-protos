// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomePlantFieldData.proto" (syntax proto3)
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
import { HomePlantSubFieldData } from "./HomePlantSubFieldData";
/**
 * @generated from protobuf message HomePlantFieldData
 */
export interface HomePlantFieldData {
    /**
     * @generated from protobuf field: uint32 scene_id = 15;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 field_guid = 5;
     */
    fieldGuid: number;
    /**
     * @generated from protobuf field: repeated HomePlantSubFieldData sub_field_list = 3;
     */
    subFieldList: HomePlantSubFieldData[];
    /**
     * @generated from protobuf field: uint32 furniture_id = 1;
     */
    furnitureId: number;
    /**
     * @generated from protobuf field: Vector spawn_pos = 9;
     */
    spawnPos?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantFieldData$Type extends MessageType<HomePlantFieldData> {
    constructor() {
        super("HomePlantFieldData", [
            { no: 15, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "field_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "sub_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomePlantSubFieldData },
            { no: 1, name: "furniture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "spawn_pos", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<HomePlantFieldData>): HomePlantFieldData {
        const message = { sceneId: 0, fieldGuid: 0, subFieldList: [], furnitureId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomePlantFieldData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomePlantFieldData): HomePlantFieldData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 scene_id */ 15:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 field_guid */ 5:
                    message.fieldGuid = reader.uint32();
                    break;
                case /* repeated HomePlantSubFieldData sub_field_list */ 3:
                    message.subFieldList.push(HomePlantSubFieldData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 furniture_id */ 1:
                    message.furnitureId = reader.uint32();
                    break;
                case /* Vector spawn_pos */ 9:
                    message.spawnPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
    internalBinaryWrite(message: HomePlantFieldData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 scene_id = 15; */
        if (message.sceneId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.sceneId);
        /* uint32 field_guid = 5; */
        if (message.fieldGuid !== 0)
            writer.tag(5, WireType.Varint).uint32(message.fieldGuid);
        /* repeated HomePlantSubFieldData sub_field_list = 3; */
        for (let i = 0; i < message.subFieldList.length; i++)
            HomePlantSubFieldData.internalBinaryWrite(message.subFieldList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 furniture_id = 1; */
        if (message.furnitureId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.furnitureId);
        /* Vector spawn_pos = 9; */
        if (message.spawnPos)
            Vector.internalBinaryWrite(message.spawnPos, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePlantFieldData
 */
export const HomePlantFieldData = new HomePlantFieldData$Type();