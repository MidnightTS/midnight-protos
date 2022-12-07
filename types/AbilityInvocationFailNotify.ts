// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AbilityInvocationFailNotify.proto" (syntax proto3)
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
import { AbilityInvokeEntry } from "./AbilityInvokeEntry";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1200;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AbilityInvocationFailNotify
 */
export interface AbilityInvocationFailNotify {
    /**
     * @generated from protobuf field: uint32 entity_id = 4;
     */
    entityId: number;
    /**
     * @generated from protobuf field: string reason = 8;
     */
    reason: string;
    /**
     * @generated from protobuf field: AbilityInvokeEntry invoke = 11;
     */
    invoke?: AbilityInvokeEntry;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvocationFailNotify$Type extends MessageType<AbilityInvocationFailNotify> {
    constructor() {
        super("AbilityInvocationFailNotify", [
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "invoke", kind: "message", T: () => AbilityInvokeEntry }
        ]);
    }
    create(value?: PartialMessage<AbilityInvocationFailNotify>): AbilityInvocationFailNotify {
        const message = { entityId: 0, reason: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityInvocationFailNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityInvocationFailNotify): AbilityInvocationFailNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* string reason */ 8:
                    message.reason = reader.string();
                    break;
                case /* AbilityInvokeEntry invoke */ 11:
                    message.invoke = AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke);
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
    internalBinaryWrite(message: AbilityInvocationFailNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.entityId);
        /* string reason = 8; */
        if (message.reason !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.reason);
        /* AbilityInvokeEntry invoke = 11; */
        if (message.invoke)
            AbilityInvokeEntry.internalBinaryWrite(message.invoke, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityInvocationFailNotify
 */
export const AbilityInvocationFailNotify = new AbilityInvocationFailNotify$Type();
