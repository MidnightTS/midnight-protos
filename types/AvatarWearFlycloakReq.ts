// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AvatarWearFlycloakReq.proto" (syntax proto3)
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
 *   CMD_ID = 1636;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message AvatarWearFlycloakReq
 */
export interface AvatarWearFlycloakReq {
    /**
     * @generated from protobuf field: uint64 avatar_guid = 11;
     */
    avatarGuid: bigint;
    /**
     * @generated from protobuf field: uint32 flycloak_id = 15;
     */
    flycloakId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarWearFlycloakReq$Type extends MessageType<AvatarWearFlycloakReq> {
    constructor() {
        super("AvatarWearFlycloakReq", [
            { no: 11, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "flycloak_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarWearFlycloakReq>): AvatarWearFlycloakReq {
        const message = { avatarGuid: 0n, flycloakId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarWearFlycloakReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarWearFlycloakReq): AvatarWearFlycloakReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 avatar_guid */ 11:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 flycloak_id */ 15:
                    message.flycloakId = reader.uint32();
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
    internalBinaryWrite(message: AvatarWearFlycloakReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 avatar_guid = 11; */
        if (message.avatarGuid !== 0n)
            writer.tag(11, WireType.Varint).uint64(message.avatarGuid);
        /* uint32 flycloak_id = 15; */
        if (message.flycloakId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.flycloakId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarWearFlycloakReq
 */
export const AvatarWearFlycloakReq = new AvatarWearFlycloakReq$Type();
