// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FightPropPair.proto" (syntax proto3)
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
 * @generated from protobuf message FightPropPair
 */
export interface FightPropPair {
    /**
     * @generated from protobuf field: uint32 prop_type = 1;
     */
    propType: number;
    /**
     * @generated from protobuf field: float prop_value = 2;
     */
    propValue: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FightPropPair$Type extends MessageType<FightPropPair> {
    constructor() {
        super("FightPropPair", [
            { no: 1, name: "prop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prop_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<FightPropPair>): FightPropPair {
        const message = { propType: 0, propValue: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FightPropPair>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FightPropPair): FightPropPair {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 prop_type */ 1:
                    message.propType = reader.uint32();
                    break;
                case /* float prop_value */ 2:
                    message.propValue = reader.float();
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
    internalBinaryWrite(message: FightPropPair, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 prop_type = 1; */
        if (message.propType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.propType);
        /* float prop_value = 2; */
        if (message.propValue !== 0)
            writer.tag(2, WireType.Bit32).float(message.propValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FightPropPair
 */
export const FightPropPair = new FightPropPair$Type();
