// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "QueryFilter.proto" (syntax proto3)
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
 * @generated from protobuf message QueryFilter
 */
export interface QueryFilter {
    /**
     * @generated from protobuf field: int32 area_mask = 4;
     */
    areaMask: number;
    /**
     * @generated from protobuf field: int32 type_id = 3;
     */
    typeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryFilter$Type extends MessageType<QueryFilter> {
    constructor() {
        super("QueryFilter", [
            { no: 4, name: "area_mask", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "type_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<QueryFilter>): QueryFilter {
        const message = { areaMask: 0, typeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryFilter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryFilter): QueryFilter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 area_mask */ 4:
                    message.areaMask = reader.int32();
                    break;
                case /* int32 type_id */ 3:
                    message.typeId = reader.int32();
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
    internalBinaryWrite(message: QueryFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 area_mask = 4; */
        if (message.areaMask !== 0)
            writer.tag(4, WireType.Varint).int32(message.areaMask);
        /* int32 type_id = 3; */
        if (message.typeId !== 0)
            writer.tag(3, WireType.Varint).int32(message.typeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryFilter
 */
export const QueryFilter = new QueryFilter$Type();