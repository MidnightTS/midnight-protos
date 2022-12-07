// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ClientTransmitReq.proto" (syntax proto3)
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
import { TransmitReason } from "./TransmitReason";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 221;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ClientTransmitReq
 */
export interface ClientTransmitReq {
    /**
     * @generated from protobuf field: TransmitReason reason = 3;
     */
    reason: TransmitReason;
    /**
     * @generated from protobuf field: uint32 scene_id = 9;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: Vector rot = 6;
     */
    rot?: Vector;
    /**
     * @generated from protobuf field: Vector pos = 4;
     */
    pos?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientTransmitReq$Type extends MessageType<ClientTransmitReq> {
    constructor() {
        super("ClientTransmitReq", [
            { no: 3, name: "reason", kind: "enum", T: () => ["TransmitReason", TransmitReason, "TRANSMIT_REASON_"] },
            { no: 9, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "rot", kind: "message", T: () => Vector },
            { no: 4, name: "pos", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<ClientTransmitReq>): ClientTransmitReq {
        const message = { reason: 0, sceneId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ClientTransmitReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientTransmitReq): ClientTransmitReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* TransmitReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector rot */ 6:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 4:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
    internalBinaryWrite(message: ClientTransmitReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* TransmitReason reason = 3; */
        if (message.reason !== 0)
            writer.tag(3, WireType.Varint).int32(message.reason);
        /* uint32 scene_id = 9; */
        if (message.sceneId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.sceneId);
        /* Vector rot = 6; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 4; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientTransmitReq
 */
export const ClientTransmitReq = new ClientTransmitReq$Type();