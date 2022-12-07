// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FleurFairMusicGameSettleRsp.proto" (syntax proto3)
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
 *   CMD_ID = 2156;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message FleurFairMusicGameSettleRsp
 */
export interface FleurFairMusicGameSettleRsp {
    /**
     * @generated from protobuf field: bool is_new_record = 15;
     */
    isNewRecord: boolean;
    /**
     * @generated from protobuf field: bool is_unlock_next_level = 7;
     */
    isUnlockNextLevel: boolean;
    /**
     * @generated from protobuf field: uint32 music_basic_id = 4;
     */
    musicBasicId: number;
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairMusicGameSettleRsp$Type extends MessageType<FleurFairMusicGameSettleRsp> {
    constructor() {
        super("FleurFairMusicGameSettleRsp", [
            { no: 15, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "is_unlock_next_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "music_basic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<FleurFairMusicGameSettleRsp>): FleurFairMusicGameSettleRsp {
        const message = { isNewRecord: false, isUnlockNextLevel: false, musicBasicId: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FleurFairMusicGameSettleRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FleurFairMusicGameSettleRsp): FleurFairMusicGameSettleRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_new_record */ 15:
                    message.isNewRecord = reader.bool();
                    break;
                case /* bool is_unlock_next_level */ 7:
                    message.isUnlockNextLevel = reader.bool();
                    break;
                case /* uint32 music_basic_id */ 4:
                    message.musicBasicId = reader.uint32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
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
    internalBinaryWrite(message: FleurFairMusicGameSettleRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_new_record = 15; */
        if (message.isNewRecord !== false)
            writer.tag(15, WireType.Varint).bool(message.isNewRecord);
        /* bool is_unlock_next_level = 7; */
        if (message.isUnlockNextLevel !== false)
            writer.tag(7, WireType.Varint).bool(message.isUnlockNextLevel);
        /* uint32 music_basic_id = 4; */
        if (message.musicBasicId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.musicBasicId);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairMusicGameSettleRsp
 */
export const FleurFairMusicGameSettleRsp = new FleurFairMusicGameSettleRsp$Type();
