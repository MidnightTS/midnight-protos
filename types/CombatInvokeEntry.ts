// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CombatInvokeEntry.proto" (syntax proto3)
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
import { CombatTypeArgument } from "./CombatTypeArgument";
import { ForwardType } from "./ForwardType";
/**
 * @generated from protobuf message CombatInvokeEntry
 */
export interface CombatInvokeEntry {
    /**
     * @generated from protobuf field: ForwardType forward_type = 11;
     */
    forwardType: ForwardType;
    /**
     * @generated from protobuf field: CombatTypeArgument argument_type = 9;
     */
    argumentType: CombatTypeArgument;
    /**
     * @generated from protobuf field: bytes combat_data = 7;
     */
    combatData: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class CombatInvokeEntry$Type extends MessageType<CombatInvokeEntry> {
    constructor() {
        super("CombatInvokeEntry", [
            { no: 11, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType, "FORWARD_TYPE_"] },
            { no: 9, name: "argument_type", kind: "enum", T: () => ["CombatTypeArgument", CombatTypeArgument, "COMBAT_TYPE_ARGUMENT_"] },
            { no: 7, name: "combat_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<CombatInvokeEntry>): CombatInvokeEntry {
        const message = { forwardType: 0, argumentType: 0, combatData: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CombatInvokeEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CombatInvokeEntry): CombatInvokeEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ForwardType forward_type */ 11:
                    message.forwardType = reader.int32();
                    break;
                case /* CombatTypeArgument argument_type */ 9:
                    message.argumentType = reader.int32();
                    break;
                case /* bytes combat_data */ 7:
                    message.combatData = reader.bytes();
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
    internalBinaryWrite(message: CombatInvokeEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ForwardType forward_type = 11; */
        if (message.forwardType !== 0)
            writer.tag(11, WireType.Varint).int32(message.forwardType);
        /* CombatTypeArgument argument_type = 9; */
        if (message.argumentType !== 0)
            writer.tag(9, WireType.Varint).int32(message.argumentType);
        /* bytes combat_data = 7; */
        if (message.combatData.length)
            writer.tag(7, WireType.LengthDelimited).bytes(message.combatData);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CombatInvokeEntry
 */
export const CombatInvokeEntry = new CombatInvokeEntry$Type();
