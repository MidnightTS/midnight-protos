// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BreakoutSyncPing.proto" (syntax proto3)
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
 * @generated from protobuf message BreakoutSyncPing
 */
export interface BreakoutSyncPing {
    /**
     * @generated from protobuf field: uint64 client_game_time = 8;
     */
    clientGameTime: bigint;
    /**
     * @generated from protobuf field: uint64 server_game_time = 5;
     */
    serverGameTime: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class BreakoutSyncPing$Type extends MessageType<BreakoutSyncPing> {
    constructor() {
        super("BreakoutSyncPing", [
            { no: 8, name: "client_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "server_game_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<BreakoutSyncPing>): BreakoutSyncPing {
        const message = { clientGameTime: 0n, serverGameTime: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BreakoutSyncPing>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BreakoutSyncPing): BreakoutSyncPing {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 client_game_time */ 8:
                    message.clientGameTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 server_game_time */ 5:
                    message.serverGameTime = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: BreakoutSyncPing, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 client_game_time = 8; */
        if (message.clientGameTime !== 0n)
            writer.tag(8, WireType.Varint).uint64(message.clientGameTime);
        /* uint64 server_game_time = 5; */
        if (message.serverGameTime !== 0n)
            writer.tag(5, WireType.Varint).uint64(message.serverGameTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BreakoutSyncPing
 */
export const BreakoutSyncPing = new BreakoutSyncPing$Type();
