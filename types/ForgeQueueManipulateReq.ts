// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ForgeQueueManipulateReq.proto" (syntax proto3)
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
import { ForgeQueueManipulateType } from "./ForgeQueueManipulateType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 622;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ForgeQueueManipulateReq
 */
export interface ForgeQueueManipulateReq {
    /**
     * @generated from protobuf field: uint32 forge_queue_id = 3;
     */
    forgeQueueId: number;
    /**
     * @generated from protobuf field: ForgeQueueManipulateType manipulate_type = 4;
     */
    manipulateType: ForgeQueueManipulateType;
}
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueManipulateReq$Type extends MessageType<ForgeQueueManipulateReq> {
    constructor() {
        super("ForgeQueueManipulateReq", [
            { no: 3, name: "forge_queue_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "manipulate_type", kind: "enum", T: () => ["ForgeQueueManipulateType", ForgeQueueManipulateType, "FORGE_QUEUE_MANIPULATE_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<ForgeQueueManipulateReq>): ForgeQueueManipulateReq {
        const message = { forgeQueueId: 0, manipulateType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ForgeQueueManipulateReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ForgeQueueManipulateReq): ForgeQueueManipulateReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 forge_queue_id */ 3:
                    message.forgeQueueId = reader.uint32();
                    break;
                case /* ForgeQueueManipulateType manipulate_type */ 4:
                    message.manipulateType = reader.int32();
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
    internalBinaryWrite(message: ForgeQueueManipulateReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 forge_queue_id = 3; */
        if (message.forgeQueueId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.forgeQueueId);
        /* ForgeQueueManipulateType manipulate_type = 4; */
        if (message.manipulateType !== 0)
            writer.tag(4, WireType.Varint).int32(message.manipulateType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeQueueManipulateReq
 */
export const ForgeQueueManipulateReq = new ForgeQueueManipulateReq$Type();
