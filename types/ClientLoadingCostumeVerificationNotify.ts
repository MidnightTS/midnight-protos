// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ClientLoadingCostumeVerificationNotify.proto" (syntax proto3)
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
 *   CMD_ID = 3269;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ClientLoadingCostumeVerificationNotify
 */
export interface ClientLoadingCostumeVerificationNotify {
    /**
     * @generated from protobuf field: uint64 prefab_hash = 5;
     */
    prefabHash: bigint;
    /**
     * @generated from protobuf field: uint64 guid = 1;
     */
    guid: bigint;
    /**
     * @generated from protobuf field: uint32 costume_id = 7;
     */
    costumeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientLoadingCostumeVerificationNotify$Type extends MessageType<ClientLoadingCostumeVerificationNotify> {
    constructor() {
        super("ClientLoadingCostumeVerificationNotify", [
            { no: 5, name: "prefab_hash", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ClientLoadingCostumeVerificationNotify>): ClientLoadingCostumeVerificationNotify {
        const message = { prefabHash: 0n, guid: 0n, costumeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ClientLoadingCostumeVerificationNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientLoadingCostumeVerificationNotify): ClientLoadingCostumeVerificationNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 prefab_hash */ 5:
                    message.prefabHash = reader.uint64().toBigInt();
                    break;
                case /* uint64 guid */ 1:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint32 costume_id */ 7:
                    message.costumeId = reader.uint32();
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
    internalBinaryWrite(message: ClientLoadingCostumeVerificationNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 prefab_hash = 5; */
        if (message.prefabHash !== 0n)
            writer.tag(5, WireType.Varint).uint64(message.prefabHash);
        /* uint64 guid = 1; */
        if (message.guid !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.guid);
        /* uint32 costume_id = 7; */
        if (message.costumeId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientLoadingCostumeVerificationNotify
 */
export const ClientLoadingCostumeVerificationNotify = new ClientLoadingCostumeVerificationNotify$Type();
