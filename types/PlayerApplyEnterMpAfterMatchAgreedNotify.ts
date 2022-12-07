// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlayerApplyEnterMpAfterMatchAgreedNotify.proto" (syntax proto3)
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
import { OnlinePlayerInfo } from "./OnlinePlayerInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4168;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlayerApplyEnterMpAfterMatchAgreedNotify
 */
export interface PlayerApplyEnterMpAfterMatchAgreedNotify {
    /**
     * @generated from protobuf field: uint32 matchserver_id = 3;
     */
    matchserverId: number;
    /**
     * @generated from protobuf field: OnlinePlayerInfo src_player_info = 7;
     */
    srcPlayerInfo?: OnlinePlayerInfo;
    /**
     * @generated from protobuf field: MatchType match_type = 5;
     */
    matchType: MatchType;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpAfterMatchAgreedNotify$Type extends MessageType<PlayerApplyEnterMpAfterMatchAgreedNotify> {
    constructor() {
        super("PlayerApplyEnterMpAfterMatchAgreedNotify", [
            { no: 3, name: "matchserver_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "src_player_info", kind: "message", T: () => OnlinePlayerInfo },
            { no: 5, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType, "MATCH_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<PlayerApplyEnterMpAfterMatchAgreedNotify>): PlayerApplyEnterMpAfterMatchAgreedNotify {
        const message = { matchserverId: 0, matchType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerApplyEnterMpAfterMatchAgreedNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerApplyEnterMpAfterMatchAgreedNotify): PlayerApplyEnterMpAfterMatchAgreedNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 matchserver_id */ 3:
                    message.matchserverId = reader.uint32();
                    break;
                case /* OnlinePlayerInfo src_player_info */ 7:
                    message.srcPlayerInfo = OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.srcPlayerInfo);
                    break;
                case /* MatchType match_type */ 5:
                    message.matchType = reader.int32();
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
    internalBinaryWrite(message: PlayerApplyEnterMpAfterMatchAgreedNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 matchserver_id = 3; */
        if (message.matchserverId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.matchserverId);
        /* OnlinePlayerInfo src_player_info = 7; */
        if (message.srcPlayerInfo)
            OnlinePlayerInfo.internalBinaryWrite(message.srcPlayerInfo, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* MatchType match_type = 5; */
        if (message.matchType !== 0)
            writer.tag(5, WireType.Varint).int32(message.matchType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterMpAfterMatchAgreedNotify
 */
export const PlayerApplyEnterMpAfterMatchAgreedNotify = new PlayerApplyEnterMpAfterMatchAgreedNotify$Type();
