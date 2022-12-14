// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EvtBeingHealedNotify.proto" (syntax proto3)
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
 *   CMD_ID = 366;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message EvtBeingHealedNotify
 */
export interface EvtBeingHealedNotify {
    /**
     * @generated from protobuf field: float real_heal_amount = 2;
     */
    realHealAmount: number;
    /**
     * @generated from protobuf field: float heal_amount = 3;
     */
    healAmount: number;
    /**
     * @generated from protobuf field: uint32 target_id = 4;
     */
    targetId: number;
    /**
     * @generated from protobuf field: uint32 source_id = 6;
     */
    sourceId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHealedNotify$Type extends MessageType<EvtBeingHealedNotify> {
    constructor() {
        super("EvtBeingHealedNotify", [
            { no: 2, name: "real_heal_amount", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "heal_amount", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "target_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "source_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EvtBeingHealedNotify>): EvtBeingHealedNotify {
        const message = { realHealAmount: 0, healAmount: 0, targetId: 0, sourceId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvtBeingHealedNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvtBeingHealedNotify): EvtBeingHealedNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* float real_heal_amount */ 2:
                    message.realHealAmount = reader.float();
                    break;
                case /* float heal_amount */ 3:
                    message.healAmount = reader.float();
                    break;
                case /* uint32 target_id */ 4:
                    message.targetId = reader.uint32();
                    break;
                case /* uint32 source_id */ 6:
                    message.sourceId = reader.uint32();
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
    internalBinaryWrite(message: EvtBeingHealedNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* float real_heal_amount = 2; */
        if (message.realHealAmount !== 0)
            writer.tag(2, WireType.Bit32).float(message.realHealAmount);
        /* float heal_amount = 3; */
        if (message.healAmount !== 0)
            writer.tag(3, WireType.Bit32).float(message.healAmount);
        /* uint32 target_id = 4; */
        if (message.targetId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.targetId);
        /* uint32 source_id = 6; */
        if (message.sourceId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.sourceId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtBeingHealedNotify
 */
export const EvtBeingHealedNotify = new EvtBeingHealedNotify$Type();
