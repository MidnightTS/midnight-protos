// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ItemHint.proto" (syntax proto3)
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
 * @generated from protobuf message ItemHint
 */
export interface ItemHint {
    /**
     * @generated from protobuf field: bool is_new = 9;
     */
    isNew: boolean;
    /**
     * @generated from protobuf field: uint64 guid = 10;
     */
    guid: bigint;
    /**
     * @generated from protobuf field: uint32 count = 15;
     */
    count: number;
    /**
     * @generated from protobuf field: uint32 item_id = 3;
     */
    itemId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ItemHint$Type extends MessageType<ItemHint> {
    constructor() {
        super("ItemHint", [
            { no: 9, name: "is_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ItemHint>): ItemHint {
        const message = { isNew: false, guid: 0n, count: 0, itemId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ItemHint>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ItemHint): ItemHint {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_new */ 9:
                    message.isNew = reader.bool();
                    break;
                case /* uint64 guid */ 10:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint32 count */ 15:
                    message.count = reader.uint32();
                    break;
                case /* uint32 item_id */ 3:
                    message.itemId = reader.uint32();
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
    internalBinaryWrite(message: ItemHint, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_new = 9; */
        if (message.isNew !== false)
            writer.tag(9, WireType.Varint).bool(message.isNew);
        /* uint64 guid = 10; */
        if (message.guid !== 0n)
            writer.tag(10, WireType.Varint).uint64(message.guid);
        /* uint32 count = 15; */
        if (message.count !== 0)
            writer.tag(15, WireType.Varint).uint32(message.count);
        /* uint32 item_id = 3; */
        if (message.itemId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.itemId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemHint
 */
export const ItemHint = new ItemHint$Type();
