// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "QuestCreateEntityReq.proto" (syntax proto3)
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
import { CreateEntityInfo } from "./CreateEntityInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 457;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message QuestCreateEntityReq
 */
export interface QuestCreateEntityReq {
    /**
     * @generated from protobuf field: uint32 parent_quest_id = 14;
     */
    parentQuestId: number;
    /**
     * @generated from protobuf field: CreateEntityInfo entity = 3;
     */
    entity?: CreateEntityInfo;
    /**
     * @generated from protobuf field: uint32 quest_id = 5;
     */
    questId: number;
    /**
     * @generated from protobuf field: bool is_rewind = 11;
     */
    isRewind: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class QuestCreateEntityReq$Type extends MessageType<QuestCreateEntityReq> {
    constructor() {
        super("QuestCreateEntityReq", [
            { no: 14, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "entity", kind: "message", T: () => CreateEntityInfo },
            { no: 5, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_rewind", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<QuestCreateEntityReq>): QuestCreateEntityReq {
        const message = { parentQuestId: 0, questId: 0, isRewind: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuestCreateEntityReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuestCreateEntityReq): QuestCreateEntityReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 parent_quest_id */ 14:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* CreateEntityInfo entity */ 3:
                    message.entity = CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
                    break;
                case /* uint32 quest_id */ 5:
                    message.questId = reader.uint32();
                    break;
                case /* bool is_rewind */ 11:
                    message.isRewind = reader.bool();
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
    internalBinaryWrite(message: QuestCreateEntityReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 parent_quest_id = 14; */
        if (message.parentQuestId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.parentQuestId);
        /* CreateEntityInfo entity = 3; */
        if (message.entity)
            CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 quest_id = 5; */
        if (message.questId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.questId);
        /* bool is_rewind = 11; */
        if (message.isRewind !== false)
            writer.tag(11, WireType.Varint).bool(message.isRewind);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestCreateEntityReq
 */
export const QuestCreateEntityReq = new QuestCreateEntityReq$Type();
