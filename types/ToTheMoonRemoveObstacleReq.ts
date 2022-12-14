// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ToTheMoonRemoveObstacleReq.proto" (syntax proto3)
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
 *   CMD_ID = 6147;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ToTheMoonRemoveObstacleReq
 */
export interface ToTheMoonRemoveObstacleReq {
    /**
     * @generated from protobuf field: int32 handle = 15;
     */
    handle: number;
    /**
     * @generated from protobuf field: uint32 scene_id = 7;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: int32 query_id = 6;
     */
    queryId: number;
}
/**
 * @generated from protobuf enum ToTheMoonRemoveObstacleReq.ObstacleType
 */
export enum ToTheMoonRemoveObstacleReq_ObstacleType {
    /**
     * @generated from protobuf enum value: OBSTACLE_TYPE_BOX = 0;
     */
    BOX = 0,
    /**
     * @generated from protobuf enum value: OBSTACLE_TYPE_CAPSULE = 1;
     */
    CAPSULE = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonRemoveObstacleReq$Type extends MessageType<ToTheMoonRemoveObstacleReq> {
    constructor() {
        super("ToTheMoonRemoveObstacleReq", [
            { no: 15, name: "handle", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ToTheMoonRemoveObstacleReq>): ToTheMoonRemoveObstacleReq {
        const message = { handle: 0, sceneId: 0, queryId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ToTheMoonRemoveObstacleReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ToTheMoonRemoveObstacleReq): ToTheMoonRemoveObstacleReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 handle */ 15:
                    message.handle = reader.int32();
                    break;
                case /* uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* int32 query_id */ 6:
                    message.queryId = reader.int32();
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
    internalBinaryWrite(message: ToTheMoonRemoveObstacleReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 handle = 15; */
        if (message.handle !== 0)
            writer.tag(15, WireType.Varint).int32(message.handle);
        /* uint32 scene_id = 7; */
        if (message.sceneId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.sceneId);
        /* int32 query_id = 6; */
        if (message.queryId !== 0)
            writer.tag(6, WireType.Varint).int32(message.queryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonRemoveObstacleReq
 */
export const ToTheMoonRemoveObstacleReq = new ToTheMoonRemoveObstacleReq$Type();
