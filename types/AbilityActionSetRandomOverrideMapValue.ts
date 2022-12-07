// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AbilityActionSetRandomOverrideMapValue.proto" (syntax proto3)
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
 * @generated from protobuf message AbilityActionSetRandomOverrideMapValue
 */
export interface AbilityActionSetRandomOverrideMapValue {
    /**
     * @generated from protobuf field: float random_value = 1;
     */
    randomValue: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionSetRandomOverrideMapValue$Type extends MessageType<AbilityActionSetRandomOverrideMapValue> {
    constructor() {
        super("AbilityActionSetRandomOverrideMapValue", [
            { no: 1, name: "random_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityActionSetRandomOverrideMapValue>): AbilityActionSetRandomOverrideMapValue {
        const message = { randomValue: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityActionSetRandomOverrideMapValue>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityActionSetRandomOverrideMapValue): AbilityActionSetRandomOverrideMapValue {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* float random_value */ 1:
                    message.randomValue = reader.float();
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
    internalBinaryWrite(message: AbilityActionSetRandomOverrideMapValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* float random_value = 1; */
        if (message.randomValue !== 0)
            writer.tag(1, WireType.Bit32).float(message.randomValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityActionSetRandomOverrideMapValue
 */
export const AbilityActionSetRandomOverrideMapValue = new AbilityActionSetRandomOverrideMapValue$Type();