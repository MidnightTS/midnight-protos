// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SceneNpcInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SceneNpcInfo
 */
export interface SceneNpcInfo {
    /**
     * @generated from protobuf field: uint32 npc_id = 1;
     */
    npcId: number;
    /**
     * @generated from protobuf field: uint32 room_id = 2;
     */
    roomId: number;
    /**
     * @generated from protobuf field: uint32 parent_quest_id = 3;
     */
    parentQuestId: number;
    /**
     * @generated from protobuf field: uint32 block_id = 4;
     */
    blockId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneNpcInfo$Type extends MessageType<SceneNpcInfo> {
    constructor() {
        super("SceneNpcInfo", [
            { no: 1, name: "npc_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "room_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneNpcInfo>): SceneNpcInfo {
        const message = { npcId: 0, roomId: 0, parentQuestId: 0, blockId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneNpcInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneNpcInfo): SceneNpcInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 npc_id */ 1:
                    message.npcId = reader.uint32();
                    break;
                case /* uint32 room_id */ 2:
                    message.roomId = reader.uint32();
                    break;
                case /* uint32 parent_quest_id */ 3:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* uint32 block_id */ 4:
                    message.blockId = reader.uint32();
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
    internalBinaryWrite(message: SceneNpcInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 npc_id = 1; */
        if (message.npcId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.npcId);
        /* uint32 room_id = 2; */
        if (message.roomId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.roomId);
        /* uint32 parent_quest_id = 3; */
        if (message.parentQuestId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.parentQuestId);
        /* uint32 block_id = 4; */
        if (message.blockId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.blockId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneNpcInfo
 */
export const SceneNpcInfo = new SceneNpcInfo$Type();
