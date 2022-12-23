// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RogueSwitchAvatarReq.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8399;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message RogueSwitchAvatarReq
 */
export interface RogueSwitchAvatarReq {
    /**
     * @generated from protobuf field: repeated uint64 onstage_avatar_guid_list = 8;
     */
    onstageAvatarGuidList: bigint[];
    /**
     * @generated from protobuf field: uint32 dungeon_id = 10;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: uint32 cell_id = 11;
     */
    cellId: number;
    /**
     * @generated from protobuf field: uint64 cur_avatar_guid = 4;
     */
    curAvatarGuid: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class RogueSwitchAvatarReq$Type extends MessageType<RogueSwitchAvatarReq> {
    constructor() {
        super("RogueSwitchAvatarReq", [
            { no: 8, name: "onstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cur_avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<RogueSwitchAvatarReq>): RogueSwitchAvatarReq {
        const message = { onstageAvatarGuidList: [], dungeonId: 0, cellId: 0, curAvatarGuid: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RogueSwitchAvatarReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RogueSwitchAvatarReq): RogueSwitchAvatarReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 onstage_avatar_guid_list */ 8:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* uint32 dungeon_id */ 10:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 cell_id */ 11:
                    message.cellId = reader.uint32();
                    break;
                case /* uint64 cur_avatar_guid */ 4:
                    message.curAvatarGuid = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: RogueSwitchAvatarReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint64 onstage_avatar_guid_list = 8; */
        if (message.onstageAvatarGuidList.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.onstageAvatarGuidList.length; i++)
                writer.uint64(message.onstageAvatarGuidList[i]);
            writer.join();
        }
        /* uint32 dungeon_id = 10; */
        if (message.dungeonId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.dungeonId);
        /* uint32 cell_id = 11; */
        if (message.cellId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.cellId);
        /* uint64 cur_avatar_guid = 4; */
        if (message.curAvatarGuid !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.curAvatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueSwitchAvatarReq
 */
export const RogueSwitchAvatarReq = new RogueSwitchAvatarReq$Type();
