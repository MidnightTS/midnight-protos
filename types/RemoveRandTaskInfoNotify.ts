// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RemoveRandTaskInfoNotify.proto" (syntax proto3)
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
 *   CMD_ID = 198;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message RemoveRandTaskInfoNotify
 */
export interface RemoveRandTaskInfoNotify {
    /**
     * @generated from protobuf field: uint32 rand_task_id = 10;
     */
    randTaskId: number;
    /**
     * @generated from protobuf field: RemoveRandTaskInfoNotify.FinishReason reason = 13;
     */
    reason: RemoveRandTaskInfoNotify_FinishReason;
    /**
     * @generated from protobuf field: bool is_succ = 5;
     */
    isSucc: boolean;
}
/**
 * @generated from protobuf enum RemoveRandTaskInfoNotify.FinishReason
 */
export enum RemoveRandTaskInfoNotify_FinishReason {
    /**
     * @generated from protobuf enum value: FINISH_REASON_DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from protobuf enum value: FINISH_REASON_CLEAR = 1;
     */
    CLEAR = 1,
    /**
     * @generated from protobuf enum value: FINISH_REASON_DISTANCE = 2;
     */
    DISTANCE = 2,
    /**
     * @generated from protobuf enum value: FINISH_REASON_FINISH = 3;
     */
    FINISH = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class RemoveRandTaskInfoNotify$Type extends MessageType<RemoveRandTaskInfoNotify> {
    constructor() {
        super("RemoveRandTaskInfoNotify", [
            { no: 10, name: "rand_task_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "reason", kind: "enum", T: () => ["RemoveRandTaskInfoNotify.FinishReason", RemoveRandTaskInfoNotify_FinishReason, "FINISH_REASON_"] },
            { no: 5, name: "is_succ", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<RemoveRandTaskInfoNotify>): RemoveRandTaskInfoNotify {
        const message = { randTaskId: 0, reason: 0, isSucc: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RemoveRandTaskInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RemoveRandTaskInfoNotify): RemoveRandTaskInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 rand_task_id */ 10:
                    message.randTaskId = reader.uint32();
                    break;
                case /* RemoveRandTaskInfoNotify.FinishReason reason */ 13:
                    message.reason = reader.int32();
                    break;
                case /* bool is_succ */ 5:
                    message.isSucc = reader.bool();
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
    internalBinaryWrite(message: RemoveRandTaskInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 rand_task_id = 10; */
        if (message.randTaskId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.randTaskId);
        /* RemoveRandTaskInfoNotify.FinishReason reason = 13; */
        if (message.reason !== 0)
            writer.tag(13, WireType.Varint).int32(message.reason);
        /* bool is_succ = 5; */
        if (message.isSucc !== false)
            writer.tag(5, WireType.Varint).bool(message.isSucc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RemoveRandTaskInfoNotify
 */
export const RemoveRandTaskInfoNotify = new RemoveRandTaskInfoNotify$Type();
