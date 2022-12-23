// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CreateEntityInfo.proto" (syntax proto3)
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
import { CreateGadgetInfo } from "./CreateGadgetInfo";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message CreateEntityInfo
 */
export interface CreateEntityInfo {
    /**
     * @generated from protobuf field: uint32 level = 5;
     */
    level: number;
    /**
     * @generated from protobuf field: Vector pos = 6;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: Vector rot = 7;
     */
    rot?: Vector;
    /**
     * @generated from protobuf field: uint32 scene_id = 10;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 room_id = 11;
     */
    roomId: number;
    /**
     * @generated from protobuf field: uint32 client_unique_id = 12;
     */
    clientUniqueId: number;
    /**
     * @generated from protobuf oneof: entity
     */
    entity: {
        oneofKind: "monsterId";
        /**
         * @generated from protobuf field: uint32 monster_id = 1;
         */
        monsterId: number;
    } | {
        oneofKind: "npcId";
        /**
         * @generated from protobuf field: uint32 npc_id = 2;
         */
        npcId: number;
    } | {
        oneofKind: "gadgetId";
        /**
         * @generated from protobuf field: uint32 gadget_id = 3;
         */
        gadgetId: number;
    } | {
        oneofKind: "itemId";
        /**
         * @generated from protobuf field: uint32 item_id = 4;
         */
        itemId: number;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf oneof: entity_create_info
     */
    entityCreateInfo: {
        oneofKind: "gadget";
        /**
         * @generated from protobuf field: CreateGadgetInfo gadget = 13;
         */
        gadget: CreateGadgetInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateEntityInfo$Type extends MessageType<CreateEntityInfo> {
    constructor() {
        super("CreateEntityInfo", [
            { no: 5, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "pos", kind: "message", T: () => Vector },
            { no: 7, name: "rot", kind: "message", T: () => Vector },
            { no: 10, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "room_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "client_unique_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "npc_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "item_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gadget", kind: "message", oneof: "entityCreateInfo", T: () => CreateGadgetInfo }
        ]);
    }
    create(value?: PartialMessage<CreateEntityInfo>): CreateEntityInfo {
        const message = { level: 0, sceneId: 0, roomId: 0, clientUniqueId: 0, entity: { oneofKind: undefined }, entityCreateInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateEntityInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateEntityInfo): CreateEntityInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 level */ 5:
                    message.level = reader.uint32();
                    break;
                case /* Vector pos */ 6:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* Vector rot */ 7:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 room_id */ 11:
                    message.roomId = reader.uint32();
                    break;
                case /* uint32 client_unique_id */ 12:
                    message.clientUniqueId = reader.uint32();
                    break;
                case /* uint32 monster_id */ 1:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 npc_id */ 2:
                    message.entity = {
                        oneofKind: "npcId",
                        npcId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 3:
                    message.entity = {
                        oneofKind: "gadgetId",
                        gadgetId: reader.uint32()
                    };
                    break;
                case /* uint32 item_id */ 4:
                    message.entity = {
                        oneofKind: "itemId",
                        itemId: reader.uint32()
                    };
                    break;
                case /* CreateGadgetInfo gadget */ 13:
                    message.entityCreateInfo = {
                        oneofKind: "gadget",
                        gadget: CreateGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, (message.entityCreateInfo as any).gadget)
                    };
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
    internalBinaryWrite(message: CreateEntityInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 level = 5; */
        if (message.level !== 0)
            writer.tag(5, WireType.Varint).uint32(message.level);
        /* Vector pos = 6; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* Vector rot = 7; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 10; */
        if (message.sceneId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.sceneId);
        /* uint32 room_id = 11; */
        if (message.roomId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.roomId);
        /* uint32 client_unique_id = 12; */
        if (message.clientUniqueId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.clientUniqueId);
        /* uint32 monster_id = 1; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(1, WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 npc_id = 2; */
        if (message.entity.oneofKind === "npcId")
            writer.tag(2, WireType.Varint).uint32(message.entity.npcId);
        /* uint32 gadget_id = 3; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(3, WireType.Varint).uint32(message.entity.gadgetId);
        /* uint32 item_id = 4; */
        if (message.entity.oneofKind === "itemId")
            writer.tag(4, WireType.Varint).uint32(message.entity.itemId);
        /* CreateGadgetInfo gadget = 13; */
        if (message.entityCreateInfo.oneofKind === "gadget")
            CreateGadgetInfo.internalBinaryWrite(message.entityCreateInfo.gadget, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CreateEntityInfo
 */
export const CreateEntityInfo = new CreateEntityInfo$Type();
