// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "NpcTalkRsp.proto" (syntax proto3)
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
 *   CMD_ID = 530;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message NpcTalkRsp
 */
export interface NpcTalkRsp {
    /**
     * @generated from protobuf field: int32 retcode = 11;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 cur_talk_id = 12;
     */
    curTalkId: number;
    /**
     * @generated from protobuf field: uint32 npc_entity_id = 4;
     */
    npcEntityId: number;
    /**
     * @generated from protobuf field: uint32 entity_id = 2;
     */
    entityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class NpcTalkRsp$Type extends MessageType<NpcTalkRsp> {
    constructor() {
        super("NpcTalkRsp", [
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "cur_talk_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "npc_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<NpcTalkRsp>): NpcTalkRsp {
        const message = { retcode: 0, curTalkId: 0, npcEntityId: 0, entityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<NpcTalkRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NpcTalkRsp): NpcTalkRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 cur_talk_id */ 12:
                    message.curTalkId = reader.uint32();
                    break;
                case /* uint32 npc_entity_id */ 4:
                    message.npcEntityId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
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
    internalBinaryWrite(message: NpcTalkRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, WireType.Varint).int32(message.retcode);
        /* uint32 cur_talk_id = 12; */
        if (message.curTalkId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.curTalkId);
        /* uint32 npc_entity_id = 4; */
        if (message.npcEntityId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.npcEntityId);
        /* uint32 entity_id = 2; */
        if (message.entityId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message NpcTalkRsp
 */
export const NpcTalkRsp = new NpcTalkRsp$Type();
