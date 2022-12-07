// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GMObstacleInfo.proto" (syntax proto3)
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
import { Vector3Int } from "./Vector3Int";
import { Vector } from "./Vector";
import { MathQuaternion } from "./MathQuaternion";
/**
 * @generated from protobuf message GMObstacleInfo
 */
export interface GMObstacleInfo {
    /**
     * @generated from protobuf field: GMObstacleInfo.ShapeType shape = 2;
     */
    shape: GMObstacleInfo_ShapeType;
    /**
     * @generated from protobuf field: MathQuaternion rotation = 8;
     */
    rotation?: MathQuaternion;
    /**
     * @generated from protobuf field: Vector center = 15;
     */
    center?: Vector;
    /**
     * @generated from protobuf field: int64 timestamp = 1;
     */
    timestamp: bigint;
    /**
     * @generated from protobuf field: int32 obstacle_id = 13;
     */
    obstacleId: number;
    /**
     * @generated from protobuf field: Vector3Int extents = 9;
     */
    extents?: Vector3Int;
}
/**
 * @generated from protobuf enum GMObstacleInfo.ShapeType
 */
export enum GMObstacleInfo_ShapeType {
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
class GMObstacleInfo$Type extends MessageType<GMObstacleInfo> {
    constructor() {
        super("GMObstacleInfo", [
            { no: 2, name: "shape", kind: "enum", T: () => ["GMObstacleInfo.ShapeType", GMObstacleInfo_ShapeType, "SHAPE_TYPE_"] },
            { no: 8, name: "rotation", kind: "message", T: () => MathQuaternion },
            { no: 15, name: "center", kind: "message", T: () => Vector },
            { no: 1, name: "timestamp", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "obstacle_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "extents", kind: "message", T: () => Vector3Int }
        ]);
    }
    create(value?: PartialMessage<GMObstacleInfo>): GMObstacleInfo {
        const message = { shape: 0, timestamp: 0n, obstacleId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GMObstacleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GMObstacleInfo): GMObstacleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* GMObstacleInfo.ShapeType shape */ 2:
                    message.shape = reader.int32();
                    break;
                case /* MathQuaternion rotation */ 8:
                    message.rotation = MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* Vector center */ 15:
                    message.center = Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* int64 timestamp */ 1:
                    message.timestamp = reader.int64().toBigInt();
                    break;
                case /* int32 obstacle_id */ 13:
                    message.obstacleId = reader.int32();
                    break;
                case /* Vector3Int extents */ 9:
                    message.extents = Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.extents);
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
    internalBinaryWrite(message: GMObstacleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* GMObstacleInfo.ShapeType shape = 2; */
        if (message.shape !== 0)
            writer.tag(2, WireType.Varint).int32(message.shape);
        /* MathQuaternion rotation = 8; */
        if (message.rotation)
            MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* Vector center = 15; */
        if (message.center)
            Vector.internalBinaryWrite(message.center, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* int64 timestamp = 1; */
        if (message.timestamp !== 0n)
            writer.tag(1, WireType.Varint).int64(message.timestamp);
        /* int32 obstacle_id = 13; */
        if (message.obstacleId !== 0)
            writer.tag(13, WireType.Varint).int32(message.obstacleId);
        /* Vector3Int extents = 9; */
        if (message.extents)
            Vector3Int.internalBinaryWrite(message.extents, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GMObstacleInfo
 */
export const GMObstacleInfo = new GMObstacleInfo$Type();