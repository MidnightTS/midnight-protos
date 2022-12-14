// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "StartRogueEliteCellChallengeReq.proto" (syntax proto3)
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
import { RogueEliteCellDifficultyType } from "./RogueEliteCellDifficultyType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8485;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message StartRogueEliteCellChallengeReq
 */
export interface StartRogueEliteCellChallengeReq {
    /**
     * @generated from protobuf field: RogueEliteCellDifficultyType difficulty = 6;
     */
    difficulty: RogueEliteCellDifficultyType;
    /**
     * @generated from protobuf field: uint32 cell_id = 10;
     */
    cellId: number;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 11;
     */
    dungeonId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class StartRogueEliteCellChallengeReq$Type extends MessageType<StartRogueEliteCellChallengeReq> {
    constructor() {
        super("StartRogueEliteCellChallengeReq", [
            { no: 6, name: "difficulty", kind: "enum", T: () => ["RogueEliteCellDifficultyType", RogueEliteCellDifficultyType, "ROGUE_ELITE_CELL_DIFFICULTY_TYPE_"] },
            { no: 10, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<StartRogueEliteCellChallengeReq>): StartRogueEliteCellChallengeReq {
        const message = { difficulty: 0, cellId: 0, dungeonId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StartRogueEliteCellChallengeReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StartRogueEliteCellChallengeReq): StartRogueEliteCellChallengeReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* RogueEliteCellDifficultyType difficulty */ 6:
                    message.difficulty = reader.int32();
                    break;
                case /* uint32 cell_id */ 10:
                    message.cellId = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 11:
                    message.dungeonId = reader.uint32();
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
    internalBinaryWrite(message: StartRogueEliteCellChallengeReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* RogueEliteCellDifficultyType difficulty = 6; */
        if (message.difficulty !== 0)
            writer.tag(6, WireType.Varint).int32(message.difficulty);
        /* uint32 cell_id = 10; */
        if (message.cellId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.cellId);
        /* uint32 dungeon_id = 11; */
        if (message.dungeonId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StartRogueEliteCellChallengeReq
 */
export const StartRogueEliteCellChallengeReq = new StartRogueEliteCellChallengeReq$Type();
