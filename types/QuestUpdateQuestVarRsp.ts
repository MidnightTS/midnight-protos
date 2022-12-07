// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "QuestUpdateQuestVarRsp.proto" (syntax proto3)
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
 *   CMD_ID = 416;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message QuestUpdateQuestVarRsp
 */
export interface QuestUpdateQuestVarRsp {
    /**
     * @generated from protobuf field: int32 retcode = 7;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 parent_quest_var_seq = 1;
     */
    parentQuestVarSeq: number;
    /**
     * @generated from protobuf field: uint32 parent_quest_id = 8;
     */
    parentQuestId: number;
    /**
     * @generated from protobuf field: uint32 quest_id = 11;
     */
    questId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarRsp$Type extends MessageType<QuestUpdateQuestVarRsp> {
    constructor() {
        super("QuestUpdateQuestVarRsp", [
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "parent_quest_var_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<QuestUpdateQuestVarRsp>): QuestUpdateQuestVarRsp {
        const message = { retcode: 0, parentQuestVarSeq: 0, parentQuestId: 0, questId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuestUpdateQuestVarRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuestUpdateQuestVarRsp): QuestUpdateQuestVarRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 parent_quest_var_seq */ 1:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                case /* uint32 parent_quest_id */ 8:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 11:
                    message.questId = reader.uint32();
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
    internalBinaryWrite(message: QuestUpdateQuestVarRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, WireType.Varint).int32(message.retcode);
        /* uint32 parent_quest_var_seq = 1; */
        if (message.parentQuestVarSeq !== 0)
            writer.tag(1, WireType.Varint).uint32(message.parentQuestVarSeq);
        /* uint32 parent_quest_id = 8; */
        if (message.parentQuestId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.parentQuestId);
        /* uint32 quest_id = 11; */
        if (message.questId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestUpdateQuestVarRsp
 */
export const QuestUpdateQuestVarRsp = new QuestUpdateQuestVarRsp$Type();