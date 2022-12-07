// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "DungeonCandidateTeamInviteNotify.proto" (syntax proto3)
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
 *   CMD_ID = 905;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message DungeonCandidateTeamInviteNotify
 */
export interface DungeonCandidateTeamInviteNotify {
    /**
     * @generated from protobuf field: uint32 valid_deadline_time_sec = 11;
     */
    validDeadlineTimeSec: number;
    /**
     * @generated from protobuf field: uint32 player_uid = 4;
     */
    playerUid: number;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 13;
     */
    dungeonId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInviteNotify$Type extends MessageType<DungeonCandidateTeamInviteNotify> {
    constructor() {
        super("DungeonCandidateTeamInviteNotify", [
            { no: 11, name: "valid_deadline_time_sec", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DungeonCandidateTeamInviteNotify>): DungeonCandidateTeamInviteNotify {
        const message = { validDeadlineTimeSec: 0, playerUid: 0, dungeonId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DungeonCandidateTeamInviteNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DungeonCandidateTeamInviteNotify): DungeonCandidateTeamInviteNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 valid_deadline_time_sec */ 11:
                    message.validDeadlineTimeSec = reader.uint32();
                    break;
                case /* uint32 player_uid */ 4:
                    message.playerUid = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 13:
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
    internalBinaryWrite(message: DungeonCandidateTeamInviteNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 valid_deadline_time_sec = 11; */
        if (message.validDeadlineTimeSec !== 0)
            writer.tag(11, WireType.Varint).uint32(message.validDeadlineTimeSec);
        /* uint32 player_uid = 4; */
        if (message.playerUid !== 0)
            writer.tag(4, WireType.Varint).uint32(message.playerUid);
        /* uint32 dungeon_id = 13; */
        if (message.dungeonId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonCandidateTeamInviteNotify
 */
export const DungeonCandidateTeamInviteNotify = new DungeonCandidateTeamInviteNotify$Type();