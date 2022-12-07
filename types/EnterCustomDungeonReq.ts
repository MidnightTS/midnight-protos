// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EnterCustomDungeonReq.proto" (syntax proto3)
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
import { EnterCustomDungeonType } from "./EnterCustomDungeonType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6242;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EnterCustomDungeonReq
 */
export interface EnterCustomDungeonReq {
    /**
     * @generated from protobuf field: uint32 dungeon_id = 7;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: EnterCustomDungeonType enter_type = 8;
     */
    enterType: EnterCustomDungeonType;
    /**
     * @generated from protobuf field: uint64 dungeon_guid = 4;
     */
    dungeonGuid: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class EnterCustomDungeonReq$Type extends MessageType<EnterCustomDungeonReq> {
    constructor() {
        super("EnterCustomDungeonReq", [
            { no: 7, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "enter_type", kind: "enum", T: () => ["EnterCustomDungeonType", EnterCustomDungeonType, "ENTER_CUSTOM_DUNGEON_TYPE_"] },
            { no: 4, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<EnterCustomDungeonReq>): EnterCustomDungeonReq {
        const message = { dungeonId: 0, enterType: 0, dungeonGuid: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnterCustomDungeonReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterCustomDungeonReq): EnterCustomDungeonReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 dungeon_id */ 7:
                    message.dungeonId = reader.uint32();
                    break;
                case /* EnterCustomDungeonType enter_type */ 8:
                    message.enterType = reader.int32();
                    break;
                case /* uint64 dungeon_guid */ 4:
                    message.dungeonGuid = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: EnterCustomDungeonReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 dungeon_id = 7; */
        if (message.dungeonId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.dungeonId);
        /* EnterCustomDungeonType enter_type = 8; */
        if (message.enterType !== 0)
            writer.tag(8, WireType.Varint).int32(message.enterType);
        /* uint64 dungeon_guid = 4; */
        if (message.dungeonGuid !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterCustomDungeonReq
 */
export const EnterCustomDungeonReq = new EnterCustomDungeonReq$Type();