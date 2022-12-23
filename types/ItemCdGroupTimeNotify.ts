// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ItemCdGroupTimeNotify.proto" (syntax proto3)
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
 *   CMD_ID = 680;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ItemCdGroupTimeNotify
 */
export interface ItemCdGroupTimeNotify {
    /**
     * @generated from protobuf field: map<uint32, uint64> item_cd_map = 7;
     */
    itemCdMap: {
        [key: number]: bigint;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class ItemCdGroupTimeNotify$Type extends MessageType<ItemCdGroupTimeNotify> {
    constructor() {
        super("ItemCdGroupTimeNotify", [
            { no: 7, name: "item_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ } }
        ]);
    }
    create(value?: PartialMessage<ItemCdGroupTimeNotify>): ItemCdGroupTimeNotify {
        const message = { itemCdMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ItemCdGroupTimeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ItemCdGroupTimeNotify): ItemCdGroupTimeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint64> item_cd_map */ 7:
                    this.binaryReadMap7(message.itemCdMap, reader, options);
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
    private binaryReadMap7(map: ItemCdGroupTimeNotify["itemCdMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ItemCdGroupTimeNotify["itemCdMap"] | undefined, val: ItemCdGroupTimeNotify["itemCdMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint64().toBigInt();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ItemCdGroupTimeNotify.item_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0n;
    }
    internalBinaryWrite(message: ItemCdGroupTimeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint64> item_cd_map = 7; */
        for (let k of Object.keys(message.itemCdMap))
            writer.tag(7, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint64(message.itemCdMap[k as any]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemCdGroupTimeNotify
 */
export const ItemCdGroupTimeNotify = new ItemCdGroupTimeNotify$Type();
