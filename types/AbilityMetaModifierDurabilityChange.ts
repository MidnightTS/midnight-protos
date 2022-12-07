// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AbilityMetaModifierDurabilityChange.proto" (syntax proto3)
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
 * @generated from protobuf message AbilityMetaModifierDurabilityChange
 */
export interface AbilityMetaModifierDurabilityChange {
    /**
     * @generated from protobuf field: float Unk3300_LDHNFNOGOGF = 13 [json_name = "Unk3300LDHNFNOGOGF"];
     */
    unk3300LDHNFNOGOGF: number;
    /**
     * @generated from protobuf field: float Unk3300_IFHFHEHDOIO = 1 [json_name = "Unk3300IFHFHEHDOIO"];
     */
    unk3300IFHFHEHDOIO: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaModifierDurabilityChange$Type extends MessageType<AbilityMetaModifierDurabilityChange> {
    constructor() {
        super("AbilityMetaModifierDurabilityChange", [
            { no: 13, name: "Unk3300_LDHNFNOGOGF", kind: "scalar", jsonName: "Unk3300LDHNFNOGOGF", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1, name: "Unk3300_IFHFHEHDOIO", kind: "scalar", jsonName: "Unk3300IFHFHEHDOIO", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityMetaModifierDurabilityChange>): AbilityMetaModifierDurabilityChange {
        const message = { unk3300LDHNFNOGOGF: 0, unk3300IFHFHEHDOIO: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityMetaModifierDurabilityChange>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityMetaModifierDurabilityChange): AbilityMetaModifierDurabilityChange {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* float Unk3300_LDHNFNOGOGF = 13 [json_name = "Unk3300LDHNFNOGOGF"];*/ 13:
                    message.unk3300LDHNFNOGOGF = reader.float();
                    break;
                case /* float Unk3300_IFHFHEHDOIO = 1 [json_name = "Unk3300IFHFHEHDOIO"];*/ 1:
                    message.unk3300IFHFHEHDOIO = reader.float();
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
    internalBinaryWrite(message: AbilityMetaModifierDurabilityChange, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* float Unk3300_LDHNFNOGOGF = 13 [json_name = "Unk3300LDHNFNOGOGF"]; */
        if (message.unk3300LDHNFNOGOGF !== 0)
            writer.tag(13, WireType.Bit32).float(message.unk3300LDHNFNOGOGF);
        /* float Unk3300_IFHFHEHDOIO = 1 [json_name = "Unk3300IFHFHEHDOIO"]; */
        if (message.unk3300IFHFHEHDOIO !== 0)
            writer.tag(1, WireType.Bit32).float(message.unk3300IFHFHEHDOIO);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaModifierDurabilityChange
 */
export const AbilityMetaModifierDurabilityChange = new AbilityMetaModifierDurabilityChange$Type();