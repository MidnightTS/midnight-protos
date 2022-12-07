// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ChannelerSlabWearBuffRsp.proto" (syntax proto3)
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
 *   CMD_ID = 8285;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ChannelerSlabWearBuffRsp
 */
export interface ChannelerSlabWearBuffRsp {
    /**
     * @generated from protobuf field: bool is_mp = 7;
     */
    isMp: boolean;
    /**
     * @generated from protobuf field: uint32 buff_id = 8;
     */
    buffId: number;
    /**
     * @generated from protobuf field: uint32 slot_id = 11;
     */
    slotId: number;
    /**
     * @generated from protobuf field: int32 retcode = 13;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabWearBuffRsp$Type extends MessageType<ChannelerSlabWearBuffRsp> {
    constructor() {
        super("ChannelerSlabWearBuffRsp", [
            { no: 7, name: "is_mp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "buff_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChannelerSlabWearBuffRsp>): ChannelerSlabWearBuffRsp {
        const message = { isMp: false, buffId: 0, slotId: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChannelerSlabWearBuffRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelerSlabWearBuffRsp): ChannelerSlabWearBuffRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_mp */ 7:
                    message.isMp = reader.bool();
                    break;
                case /* uint32 buff_id */ 8:
                    message.buffId = reader.uint32();
                    break;
                case /* uint32 slot_id */ 11:
                    message.slotId = reader.uint32();
                    break;
                case /* int32 retcode */ 13:
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
    internalBinaryWrite(message: ChannelerSlabWearBuffRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_mp = 7; */
        if (message.isMp !== false)
            writer.tag(7, WireType.Varint).bool(message.isMp);
        /* uint32 buff_id = 8; */
        if (message.buffId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.buffId);
        /* uint32 slot_id = 11; */
        if (message.slotId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.slotId);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabWearBuffRsp
 */
export const ChannelerSlabWearBuffRsp = new ChannelerSlabWearBuffRsp$Type();