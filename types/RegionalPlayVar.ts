// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RegionalPlayVar.proto" (syntax proto3)
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
 * @generated from protobuf message RegionalPlayVar
 */
export interface RegionalPlayVar {
    /**
     * @generated from protobuf field: uint32 type = 5;
     */
    type: number;
    /**
     * @generated from protobuf field: float base_value = 4;
     */
    baseValue: number;
    /**
     * @generated from protobuf field: float max_value = 3;
     */
    maxValue: number;
    /**
     * @generated from protobuf field: float value = 2;
     */
    value: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RegionalPlayVar$Type extends MessageType<RegionalPlayVar> {
    constructor() {
        super("RegionalPlayVar", [
            { no: 5, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "base_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "max_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<RegionalPlayVar>): RegionalPlayVar {
        const message = { type: 0, baseValue: 0, maxValue: 0, value: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegionalPlayVar>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegionalPlayVar): RegionalPlayVar {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 type */ 5:
                    message.type = reader.uint32();
                    break;
                case /* float base_value */ 4:
                    message.baseValue = reader.float();
                    break;
                case /* float max_value */ 3:
                    message.maxValue = reader.float();
                    break;
                case /* float value */ 2:
                    message.value = reader.float();
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
    internalBinaryWrite(message: RegionalPlayVar, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 type = 5; */
        if (message.type !== 0)
            writer.tag(5, WireType.Varint).uint32(message.type);
        /* float base_value = 4; */
        if (message.baseValue !== 0)
            writer.tag(4, WireType.Bit32).float(message.baseValue);
        /* float max_value = 3; */
        if (message.maxValue !== 0)
            writer.tag(3, WireType.Bit32).float(message.maxValue);
        /* float value = 2; */
        if (message.value !== 0)
            writer.tag(2, WireType.Bit32).float(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionalPlayVar
 */
export const RegionalPlayVar = new RegionalPlayVar$Type();
