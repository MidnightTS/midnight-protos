// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AbilityMixinUGCTimeControl.proto" (syntax proto3)
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
 * @generated from protobuf message AbilityMixinUGCTimeControl
 */
export interface AbilityMixinUGCTimeControl {
    /**
     * @generated from protobuf field: uint64 start_move_time_ms = 12;
     */
    startMoveTimeMs: bigint;
    /**
     * @generated from protobuf field: uint32 start_move_time = 9;
     */
    startMoveTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinUGCTimeControl$Type extends MessageType<AbilityMixinUGCTimeControl> {
    constructor() {
        super("AbilityMixinUGCTimeControl", [
            { no: 12, name: "start_move_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "start_move_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityMixinUGCTimeControl>): AbilityMixinUGCTimeControl {
        const message = { startMoveTimeMs: 0n, startMoveTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityMixinUGCTimeControl>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityMixinUGCTimeControl): AbilityMixinUGCTimeControl {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 start_move_time_ms */ 12:
                    message.startMoveTimeMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 start_move_time */ 9:
                    message.startMoveTime = reader.uint32();
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
    internalBinaryWrite(message: AbilityMixinUGCTimeControl, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 start_move_time_ms = 12; */
        if (message.startMoveTimeMs !== 0n)
            writer.tag(12, WireType.Varint).uint64(message.startMoveTimeMs);
        /* uint32 start_move_time = 9; */
        if (message.startMoveTime !== 0)
            writer.tag(9, WireType.Varint).uint32(message.startMoveTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinUGCTimeControl
 */
export const AbilityMixinUGCTimeControl = new AbilityMixinUGCTimeControl$Type();
