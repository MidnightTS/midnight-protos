// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "VintageMarketDeliverItemReq.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 21131;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message VintageMarketDeliverItemReq
 */
export interface VintageMarketDeliverItemReq {
    /**
     * @generated from protobuf field: repeated ItemParam deliver_item_list = 12;
     */
    deliverItemList: ItemParam[];
    /**
     * @generated from protobuf field: uint32 trader_id = 3;
     */
    traderId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketDeliverItemReq$Type extends MessageType<VintageMarketDeliverItemReq> {
    constructor() {
        super("VintageMarketDeliverItemReq", [
            { no: 12, name: "deliver_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 3, name: "trader_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<VintageMarketDeliverItemReq>): VintageMarketDeliverItemReq {
        const message = { deliverItemList: [], traderId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VintageMarketDeliverItemReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VintageMarketDeliverItemReq): VintageMarketDeliverItemReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ItemParam deliver_item_list */ 12:
                    message.deliverItemList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 trader_id */ 3:
                    message.traderId = reader.uint32();
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
    internalBinaryWrite(message: VintageMarketDeliverItemReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ItemParam deliver_item_list = 12; */
        for (let i = 0; i < message.deliverItemList.length; i++)
            ItemParam.internalBinaryWrite(message.deliverItemList[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* uint32 trader_id = 3; */
        if (message.traderId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.traderId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketDeliverItemReq
 */
export const VintageMarketDeliverItemReq = new VintageMarketDeliverItemReq$Type();