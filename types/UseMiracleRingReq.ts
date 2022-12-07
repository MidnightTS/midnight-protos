// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "UseMiracleRingReq.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5242;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message UseMiracleRingReq
 */
export interface UseMiracleRingReq {
    /**
     * @generated from protobuf field: Vector rot = 14;
     */
    rot?: Vector;
    /**
     * @generated from protobuf field: Vector pos = 13;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: uint32 miracle_ring_op_type = 5;
     */
    miracleRingOpType: number;
}
/**
 * @generated from protobuf enum UseMiracleRingReq.MiracleRingOpType
 */
export enum UseMiracleRingReq_MiracleRingOpType {
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_TYPE_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_TYPE_PLACE = 1;
     */
    PLACE = 1,
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_TYPE_RETRACT = 2;
     */
    RETRACT = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class UseMiracleRingReq$Type extends MessageType<UseMiracleRingReq> {
    constructor() {
        super("UseMiracleRingReq", [
            { no: 14, name: "rot", kind: "message", T: () => Vector },
            { no: 13, name: "pos", kind: "message", T: () => Vector },
            { no: 5, name: "miracle_ring_op_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<UseMiracleRingReq>): UseMiracleRingReq {
        const message = { miracleRingOpType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UseMiracleRingReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UseMiracleRingReq): UseMiracleRingReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector rot */ 14:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 13:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 miracle_ring_op_type */ 5:
                    message.miracleRingOpType = reader.uint32();
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
    internalBinaryWrite(message: UseMiracleRingReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector rot = 14; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 13; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* uint32 miracle_ring_op_type = 5; */
        if (message.miracleRingOpType !== 0)
            writer.tag(5, WireType.Varint).uint32(message.miracleRingOpType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UseMiracleRingReq
 */
export const UseMiracleRingReq = new UseMiracleRingReq$Type();