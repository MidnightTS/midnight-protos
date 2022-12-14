// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EntityClientData.proto" (syntax proto3)
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
 * @generated from protobuf message EntityClientData
 */
export interface EntityClientData {
    /**
     * @generated from protobuf field: uint32 wind_change_scene_time = 1;
     */
    windChangeSceneTime: number;
    /**
     * @generated from protobuf field: float windmill_sync_angle = 2;
     */
    windmillSyncAngle: number;
    /**
     * @generated from protobuf field: int32 wind_change_target_level = 3;
     */
    windChangeTargetLevel: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EntityClientData$Type extends MessageType<EntityClientData> {
    constructor() {
        super("EntityClientData", [
            { no: 1, name: "wind_change_scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "windmill_sync_angle", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "wind_change_target_level", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<EntityClientData>): EntityClientData {
        const message = { windChangeSceneTime: 0, windmillSyncAngle: 0, windChangeTargetLevel: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EntityClientData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityClientData): EntityClientData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 wind_change_scene_time */ 1:
                    message.windChangeSceneTime = reader.uint32();
                    break;
                case /* float windmill_sync_angle */ 2:
                    message.windmillSyncAngle = reader.float();
                    break;
                case /* int32 wind_change_target_level */ 3:
                    message.windChangeTargetLevel = reader.int32();
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
    internalBinaryWrite(message: EntityClientData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 wind_change_scene_time = 1; */
        if (message.windChangeSceneTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.windChangeSceneTime);
        /* float windmill_sync_angle = 2; */
        if (message.windmillSyncAngle !== 0)
            writer.tag(2, WireType.Bit32).float(message.windmillSyncAngle);
        /* int32 wind_change_target_level = 3; */
        if (message.windChangeTargetLevel !== 0)
            writer.tag(3, WireType.Varint).int32(message.windChangeTargetLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityClientData
 */
export const EntityClientData = new EntityClientData$Type();
