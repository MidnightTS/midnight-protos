// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ChannelerSlabTakeoffBuffReq.proto" (syntax proto3)
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
 *   CMD_ID = 8299;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ChannelerSlabTakeoffBuffReq
 */
export interface ChannelerSlabTakeoffBuffReq {
    /**
     * @generated from protobuf field: uint32 slot_id = 3;
     */
    slotId: number;
    /**
     * @generated from protobuf field: uint32 buff_id = 12;
     */
    buffId: number;
    /**
     * @generated from protobuf field: bool is_mp = 10;
     */
    isMp: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabTakeoffBuffReq$Type extends MessageType<ChannelerSlabTakeoffBuffReq> {
    constructor() {
        super("ChannelerSlabTakeoffBuffReq", [
            { no: 3, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "buff_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_mp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ChannelerSlabTakeoffBuffReq>): ChannelerSlabTakeoffBuffReq {
        const message = { slotId: 0, buffId: 0, isMp: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChannelerSlabTakeoffBuffReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelerSlabTakeoffBuffReq): ChannelerSlabTakeoffBuffReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 slot_id */ 3:
                    message.slotId = reader.uint32();
                    break;
                case /* uint32 buff_id */ 12:
                    message.buffId = reader.uint32();
                    break;
                case /* bool is_mp */ 10:
                    message.isMp = reader.bool();
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
    internalBinaryWrite(message: ChannelerSlabTakeoffBuffReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 slot_id = 3; */
        if (message.slotId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.slotId);
        /* uint32 buff_id = 12; */
        if (message.buffId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.buffId);
        /* bool is_mp = 10; */
        if (message.isMp !== false)
            writer.tag(10, WireType.Varint).bool(message.isMp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabTakeoffBuffReq
 */
export const ChannelerSlabTakeoffBuffReq = new ChannelerSlabTakeoffBuffReq$Type();
