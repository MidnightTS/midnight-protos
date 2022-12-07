// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GetOnlinePlayerInfoReq.proto" (syntax proto3)
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
 *   CMD_ID = 90;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message GetOnlinePlayerInfoReq
 */
export interface GetOnlinePlayerInfoReq {
    /**
     * @generated from protobuf field: bool is_online_id = 8;
     */
    isOnlineId: boolean;
    /**
     * @generated from protobuf oneof: player_id
     */
    playerId: {
        oneofKind: "targetUid";
        /**
         * @generated from protobuf field: uint32 target_uid = 1;
         */
        targetUid: number;
    } | {
        oneofKind: "onlineId";
        /**
         * @generated from protobuf field: string online_id = 7;
         */
        onlineId: string;
    } | {
        oneofKind: "psnId";
        /**
         * @generated from protobuf field: string psn_id = 4;
         */
        psnId: string;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GetOnlinePlayerInfoReq$Type extends MessageType<GetOnlinePlayerInfoReq> {
    constructor() {
        super("GetOnlinePlayerInfoReq", [
            { no: 8, name: "is_online_id", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "target_uid", kind: "scalar", oneof: "playerId", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "online_id", kind: "scalar", oneof: "playerId", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "psn_id", kind: "scalar", oneof: "playerId", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetOnlinePlayerInfoReq>): GetOnlinePlayerInfoReq {
        const message = { isOnlineId: false, playerId: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetOnlinePlayerInfoReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOnlinePlayerInfoReq): GetOnlinePlayerInfoReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_online_id */ 8:
                    message.isOnlineId = reader.bool();
                    break;
                case /* uint32 target_uid */ 1:
                    message.playerId = {
                        oneofKind: "targetUid",
                        targetUid: reader.uint32()
                    };
                    break;
                case /* string online_id */ 7:
                    message.playerId = {
                        oneofKind: "onlineId",
                        onlineId: reader.string()
                    };
                    break;
                case /* string psn_id */ 4:
                    message.playerId = {
                        oneofKind: "psnId",
                        psnId: reader.string()
                    };
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
    internalBinaryWrite(message: GetOnlinePlayerInfoReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_online_id = 8; */
        if (message.isOnlineId !== false)
            writer.tag(8, WireType.Varint).bool(message.isOnlineId);
        /* uint32 target_uid = 1; */
        if (message.playerId.oneofKind === "targetUid")
            writer.tag(1, WireType.Varint).uint32(message.playerId.targetUid);
        /* string online_id = 7; */
        if (message.playerId.oneofKind === "onlineId")
            writer.tag(7, WireType.LengthDelimited).string(message.playerId.onlineId);
        /* string psn_id = 4; */
        if (message.playerId.oneofKind === "psnId")
            writer.tag(4, WireType.LengthDelimited).string(message.playerId.psnId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetOnlinePlayerInfoReq
 */
export const GetOnlinePlayerInfoReq = new GetOnlinePlayerInfoReq$Type();
