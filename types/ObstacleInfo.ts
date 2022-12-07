// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ObstacleInfo.proto" (syntax proto3)
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
import { Vector3Int } from "./Vector3Int";
import { MathQuaternion } from "./MathQuaternion";
/**
 * @generated from protobuf message ObstacleInfo
 */
export interface ObstacleInfo {
    /**
     * @generated from protobuf field: MathQuaternion rotation = 11;
     */
    rotation?: MathQuaternion;
    /**
     * @generated from protobuf field: ObstacleInfo.ShapeType shape = 2;
     */
    shape: ObstacleInfo_ShapeType;
    /**
     * @generated from protobuf field: Vector3Int extents = 4;
     */
    extents?: Vector3Int;
    /**
     * @generated from protobuf field: Vector center = 7;
     */
    center?: Vector;
    /**
     * @generated from protobuf field: int32 obstacle_id = 10;
     */
    obstacleId: number;
}
/**
 * @generated from protobuf enum ObstacleInfo.ShapeType
 */
export enum ObstacleInfo_ShapeType {
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE = 0;
     */
    OBSTACLE_SHAPE_CAPSULE = 0,
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_BOX = 1;
     */
    OBSTACLE_SHAPE_BOX = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class ObstacleInfo$Type extends MessageType<ObstacleInfo> {
    constructor() {
        super("ObstacleInfo", [
            { no: 11, name: "rotation", kind: "message", T: () => MathQuaternion },
            { no: 2, name: "shape", kind: "enum", T: () => ["ObstacleInfo.ShapeType", ObstacleInfo_ShapeType, "SHAPE_TYPE_"] },
            { no: 4, name: "extents", kind: "message", T: () => Vector3Int },
            { no: 7, name: "center", kind: "message", T: () => Vector },
            { no: 10, name: "obstacle_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ObstacleInfo>): ObstacleInfo {
        const message = { shape: 0, obstacleId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ObstacleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ObstacleInfo): ObstacleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* MathQuaternion rotation */ 11:
                    message.rotation = MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* ObstacleInfo.ShapeType shape */ 2:
                    message.shape = reader.int32();
                    break;
                case /* Vector3Int extents */ 4:
                    message.extents = Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                case /* Vector center */ 7:
                    message.center = Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* int32 obstacle_id */ 10:
                    message.obstacleId = reader.int32();
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
    internalBinaryWrite(message: ObstacleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* MathQuaternion rotation = 11; */
        if (message.rotation)
            MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* ObstacleInfo.ShapeType shape = 2; */
        if (message.shape !== 0)
            writer.tag(2, WireType.Varint).int32(message.shape);
        /* Vector3Int extents = 4; */
        if (message.extents)
            Vector3Int.internalBinaryWrite(message.extents, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* Vector center = 7; */
        if (message.center)
            Vector.internalBinaryWrite(message.center, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* int32 obstacle_id = 10; */
        if (message.obstacleId !== 0)
            writer.tag(10, WireType.Varint).int32(message.obstacleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ObstacleInfo
 */
export const ObstacleInfo = new ObstacleInfo$Type();