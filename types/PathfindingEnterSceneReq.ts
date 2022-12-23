// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PathfindingEnterSceneReq.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ObstacleInfo } from "./ObstacleInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2400;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message PathfindingEnterSceneReq
 */
export interface PathfindingEnterSceneReq {
    /**
     * @generated from protobuf field: uint32 scene_id = 10;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_MGGFOILELKH = 12 [json_name = "Unk3300MGGFOILELKH"];
     */
    unk3300MGGFOILELKH: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_JHLKDOHPIFB = 2 [json_name = "Unk3300JHLKDOHPIFB"];
     */
    unk3300JHLKDOHPIFB: number;
    /**
     * @generated from protobuf field: repeated uint32 activity_id = 13;
     */
    activityId: number[];
    /**
     * @generated from protobuf field: uint32 version = 11;
     */
    version: number;
    /**
     * @generated from protobuf field: bool is_editor = 8;
     */
    isEditor: boolean;
    /**
     * @generated from protobuf field: repeated ObstacleInfo obstacles = 5;
     */
    obstacles: ObstacleInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class PathfindingEnterSceneReq$Type extends MessageType<PathfindingEnterSceneReq> {
    constructor() {
        super("PathfindingEnterSceneReq", [
            { no: 10, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_MGGFOILELKH", kind: "scalar", jsonName: "Unk3300MGGFOILELKH", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_JHLKDOHPIFB", kind: "scalar", jsonName: "Unk3300JHLKDOHPIFB", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "activity_id", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_editor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "obstacles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ObstacleInfo }
        ]);
    }
    create(value?: PartialMessage<PathfindingEnterSceneReq>): PathfindingEnterSceneReq {
        const message = { sceneId: 0, unk3300MGGFOILELKH: 0, unk3300JHLKDOHPIFB: 0, activityId: [], version: 0, isEditor: false, obstacles: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PathfindingEnterSceneReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PathfindingEnterSceneReq): PathfindingEnterSceneReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 Unk3300_MGGFOILELKH = 12 [json_name = "Unk3300MGGFOILELKH"];*/ 12:
                    message.unk3300MGGFOILELKH = reader.uint32();
                    break;
                case /* uint32 Unk3300_JHLKDOHPIFB = 2 [json_name = "Unk3300JHLKDOHPIFB"];*/ 2:
                    message.unk3300JHLKDOHPIFB = reader.uint32();
                    break;
                case /* repeated uint32 activity_id */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.activityId.push(reader.uint32());
                    else
                        message.activityId.push(reader.uint32());
                    break;
                case /* uint32 version */ 11:
                    message.version = reader.uint32();
                    break;
                case /* bool is_editor */ 8:
                    message.isEditor = reader.bool();
                    break;
                case /* repeated ObstacleInfo obstacles */ 5:
                    message.obstacles.push(ObstacleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: PathfindingEnterSceneReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 scene_id = 10; */
        if (message.sceneId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.sceneId);
        /* uint32 Unk3300_MGGFOILELKH = 12 [json_name = "Unk3300MGGFOILELKH"]; */
        if (message.unk3300MGGFOILELKH !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300MGGFOILELKH);
        /* uint32 Unk3300_JHLKDOHPIFB = 2 [json_name = "Unk3300JHLKDOHPIFB"]; */
        if (message.unk3300JHLKDOHPIFB !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300JHLKDOHPIFB);
        /* repeated uint32 activity_id = 13; */
        if (message.activityId.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.activityId.length; i++)
                writer.uint32(message.activityId[i]);
            writer.join();
        }
        /* uint32 version = 11; */
        if (message.version !== 0)
            writer.tag(11, WireType.Varint).uint32(message.version);
        /* bool is_editor = 8; */
        if (message.isEditor !== false)
            writer.tag(8, WireType.Varint).bool(message.isEditor);
        /* repeated ObstacleInfo obstacles = 5; */
        for (let i = 0; i < message.obstacles.length; i++)
            ObstacleInfo.internalBinaryWrite(message.obstacles[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PathfindingEnterSceneReq
 */
export const PathfindingEnterSceneReq = new PathfindingEnterSceneReq$Type();
