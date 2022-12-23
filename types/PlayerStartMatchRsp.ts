// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlayerStartMatchRsp.proto" (syntax proto3)
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
import { MatchType } from "./MatchType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4191;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlayerStartMatchRsp
 */
export interface PlayerStartMatchRsp {
    /**
     * @generated from protobuf field: uint32 dungeon_id = 1;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: uint32 match_id = 12;
     */
    matchId: number;
    /**
     * @generated from protobuf field: MatchType match_type = 10;
     */
    matchType: MatchType;
    /**
     * @generated from protobuf field: uint32 punish_end_time = 8;
     */
    punishEndTime: number;
    /**
     * @generated from protobuf field: uint32 mp_play_id = 11;
     */
    mpPlayId: number;
    /**
     * @generated from protobuf field: uint32 param = 7;
     */
    param: number;
    /**
     * @generated from protobuf field: uint32 mechanicus_difficult_level = 3;
     */
    mechanicusDifficultLevel: number;
    /**
     * @generated from protobuf field: int32 retcode = 6;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerStartMatchRsp$Type extends MessageType<PlayerStartMatchRsp> {
    constructor() {
        super("PlayerStartMatchRsp", [
            { no: 1, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "match_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType, "MATCH_TYPE_"] },
            { no: 8, name: "punish_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "mp_play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "mechanicus_difficult_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerStartMatchRsp>): PlayerStartMatchRsp {
        const message = { dungeonId: 0, matchId: 0, matchType: 0, punishEndTime: 0, mpPlayId: 0, param: 0, mechanicusDifficultLevel: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerStartMatchRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerStartMatchRsp): PlayerStartMatchRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 match_id */ 12:
                    message.matchId = reader.uint32();
                    break;
                case /* MatchType match_type */ 10:
                    message.matchType = reader.int32();
                    break;
                case /* uint32 punish_end_time */ 8:
                    message.punishEndTime = reader.uint32();
                    break;
                case /* uint32 mp_play_id */ 11:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* uint32 param */ 7:
                    message.param = reader.uint32();
                    break;
                case /* uint32 mechanicus_difficult_level */ 3:
                    message.mechanicusDifficultLevel = reader.uint32();
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
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
    internalBinaryWrite(message: PlayerStartMatchRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 dungeon_id = 1; */
        if (message.dungeonId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.dungeonId);
        /* uint32 match_id = 12; */
        if (message.matchId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.matchId);
        /* MatchType match_type = 10; */
        if (message.matchType !== 0)
            writer.tag(10, WireType.Varint).int32(message.matchType);
        /* uint32 punish_end_time = 8; */
        if (message.punishEndTime !== 0)
            writer.tag(8, WireType.Varint).uint32(message.punishEndTime);
        /* uint32 mp_play_id = 11; */
        if (message.mpPlayId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.mpPlayId);
        /* uint32 param = 7; */
        if (message.param !== 0)
            writer.tag(7, WireType.Varint).uint32(message.param);
        /* uint32 mechanicus_difficult_level = 3; */
        if (message.mechanicusDifficultLevel !== 0)
            writer.tag(3, WireType.Varint).uint32(message.mechanicusDifficultLevel);
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerStartMatchRsp
 */
export const PlayerStartMatchRsp = new PlayerStartMatchRsp$Type();
