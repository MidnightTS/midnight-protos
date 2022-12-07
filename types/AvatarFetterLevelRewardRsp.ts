// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AvatarFetterLevelRewardRsp.proto" (syntax proto3)
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
 *   CMD_ID = 1753;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AvatarFetterLevelRewardRsp
 */
export interface AvatarFetterLevelRewardRsp {
    /**
     * @generated from protobuf field: int32 retcode = 2;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 reward_id = 15;
     */
    rewardId: number;
    /**
     * @generated from protobuf field: uint32 fetter_level = 1;
     */
    fetterLevel: number;
    /**
     * @generated from protobuf field: uint64 avatar_guid = 6;
     */
    avatarGuid: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterLevelRewardRsp$Type extends MessageType<AvatarFetterLevelRewardRsp> {
    constructor() {
        super("AvatarFetterLevelRewardRsp", [
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "fetter_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarFetterLevelRewardRsp>): AvatarFetterLevelRewardRsp {
        const message = { retcode: 0, rewardId: 0, fetterLevel: 0, avatarGuid: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarFetterLevelRewardRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarFetterLevelRewardRsp): AvatarFetterLevelRewardRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 reward_id */ 15:
                    message.rewardId = reader.uint32();
                    break;
                case /* uint32 fetter_level */ 1:
                    message.fetterLevel = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 6:
                    message.avatarGuid = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: AvatarFetterLevelRewardRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, WireType.Varint).int32(message.retcode);
        /* uint32 reward_id = 15; */
        if (message.rewardId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.rewardId);
        /* uint32 fetter_level = 1; */
        if (message.fetterLevel !== 0)
            writer.tag(1, WireType.Varint).uint32(message.fetterLevel);
        /* uint64 avatar_guid = 6; */
        if (message.avatarGuid !== 0n)
            writer.tag(6, WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarFetterLevelRewardRsp
 */
export const AvatarFetterLevelRewardRsp = new AvatarFetterLevelRewardRsp$Type();