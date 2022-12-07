// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "MusicGameSettleRsp.proto" (syntax proto3)
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
 *   CMD_ID = 8360;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message MusicGameSettleRsp
 */
export interface MusicGameSettleRsp {
    /**
     * @generated from protobuf field: int32 retcode = 12;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint64 ugc_guid = 7;
     */
    ugcGuid: bigint;
    /**
     * @generated from protobuf field: bool is_new_record = 8;
     */
    isNewRecord: boolean;
    /**
     * @generated from protobuf field: bool is_unlock_next_level = 10;
     */
    isUnlockNextLevel: boolean;
    /**
     * @generated from protobuf field: uint32 music_basic_id = 1;
     */
    musicBasicId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class MusicGameSettleRsp$Type extends MessageType<MusicGameSettleRsp> {
    constructor() {
        super("MusicGameSettleRsp", [
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "is_unlock_next_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "music_basic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MusicGameSettleRsp>): MusicGameSettleRsp {
        const message = { retcode: 0, ugcGuid: 0n, isNewRecord: false, isUnlockNextLevel: false, musicBasicId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MusicGameSettleRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MusicGameSettleRsp): MusicGameSettleRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 ugc_guid */ 7:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* bool is_new_record */ 8:
                    message.isNewRecord = reader.bool();
                    break;
                case /* bool is_unlock_next_level */ 10:
                    message.isUnlockNextLevel = reader.bool();
                    break;
                case /* uint32 music_basic_id */ 1:
                    message.musicBasicId = reader.uint32();
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
    internalBinaryWrite(message: MusicGameSettleRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, WireType.Varint).int32(message.retcode);
        /* uint64 ugc_guid = 7; */
        if (message.ugcGuid !== 0n)
            writer.tag(7, WireType.Varint).uint64(message.ugcGuid);
        /* bool is_new_record = 8; */
        if (message.isNewRecord !== false)
            writer.tag(8, WireType.Varint).bool(message.isNewRecord);
        /* bool is_unlock_next_level = 10; */
        if (message.isUnlockNextLevel !== false)
            writer.tag(10, WireType.Varint).bool(message.isUnlockNextLevel);
        /* uint32 music_basic_id = 1; */
        if (message.musicBasicId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.musicBasicId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MusicGameSettleRsp
 */
export const MusicGameSettleRsp = new MusicGameSettleRsp$Type();
