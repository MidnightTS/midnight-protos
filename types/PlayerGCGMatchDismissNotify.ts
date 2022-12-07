// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlayerGCGMatchDismissNotify.proto" (syntax proto3)
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
import { MatchReason } from "./MatchReason";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4180;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlayerGCGMatchDismissNotify
 */
export interface PlayerGCGMatchDismissNotify {
    /**
     * @generated from protobuf field: repeated uint32 uid_list = 11;
     */
    uidList: number[];
    /**
     * @generated from protobuf field: MatchReason reason = 7;
     */
    reason: MatchReason;
    /**
     * @generated from protobuf field: uint32 match_id = 4;
     */
    matchId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGCGMatchDismissNotify$Type extends MessageType<PlayerGCGMatchDismissNotify> {
    constructor() {
        super("PlayerGCGMatchDismissNotify", [
            { no: 11, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "reason", kind: "enum", T: () => ["MatchReason", MatchReason, "MATCH_REASON_"] },
            { no: 4, name: "match_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerGCGMatchDismissNotify>): PlayerGCGMatchDismissNotify {
        const message = { uidList: [], reason: 0, matchId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerGCGMatchDismissNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerGCGMatchDismissNotify): PlayerGCGMatchDismissNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 uid_list */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* MatchReason reason */ 7:
                    message.reason = reader.int32();
                    break;
                case /* uint32 match_id */ 4:
                    message.matchId = reader.uint32();
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
    internalBinaryWrite(message: PlayerGCGMatchDismissNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 uid_list = 11; */
        if (message.uidList.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* MatchReason reason = 7; */
        if (message.reason !== 0)
            writer.tag(7, WireType.Varint).int32(message.reason);
        /* uint32 match_id = 4; */
        if (message.matchId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerGCGMatchDismissNotify
 */
export const PlayerGCGMatchDismissNotify = new PlayerGCGMatchDismissNotify$Type();