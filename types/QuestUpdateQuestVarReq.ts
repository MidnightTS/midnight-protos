// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "QuestUpdateQuestVarReq.proto" (syntax proto3)
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
import { QuestVarOp } from "./QuestVarOp";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 476;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message QuestUpdateQuestVarReq
 */
export interface QuestUpdateQuestVarReq {
    /**
     * @generated from protobuf field: uint32 parent_quest_var_seq = 7;
     */
    parentQuestVarSeq: number;
    /**
     * @generated from protobuf field: repeated QuestVarOp quest_var_op_list = 11;
     */
    questVarOpList: QuestVarOp[];
    /**
     * @generated from protobuf field: uint32 quest_id = 5;
     */
    questId: number;
    /**
     * @generated from protobuf field: uint32 parent_quest_id = 2;
     */
    parentQuestId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarReq$Type extends MessageType<QuestUpdateQuestVarReq> {
    constructor() {
        super("QuestUpdateQuestVarReq", [
            { no: 7, name: "parent_quest_var_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "quest_var_op_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => QuestVarOp },
            { no: 5, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<QuestUpdateQuestVarReq>): QuestUpdateQuestVarReq {
        const message = { parentQuestVarSeq: 0, questVarOpList: [], questId: 0, parentQuestId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuestUpdateQuestVarReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuestUpdateQuestVarReq): QuestUpdateQuestVarReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 parent_quest_var_seq */ 7:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                case /* repeated QuestVarOp quest_var_op_list */ 11:
                    message.questVarOpList.push(QuestVarOp.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 quest_id */ 5:
                    message.questId = reader.uint32();
                    break;
                case /* uint32 parent_quest_id */ 2:
                    message.parentQuestId = reader.uint32();
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
    internalBinaryWrite(message: QuestUpdateQuestVarReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 parent_quest_var_seq = 7; */
        if (message.parentQuestVarSeq !== 0)
            writer.tag(7, WireType.Varint).uint32(message.parentQuestVarSeq);
        /* repeated QuestVarOp quest_var_op_list = 11; */
        for (let i = 0; i < message.questVarOpList.length; i++)
            QuestVarOp.internalBinaryWrite(message.questVarOpList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* uint32 quest_id = 5; */
        if (message.questId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.questId);
        /* uint32 parent_quest_id = 2; */
        if (message.parentQuestId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestUpdateQuestVarReq
 */
export const QuestUpdateQuestVarReq = new QuestUpdateQuestVarReq$Type();
