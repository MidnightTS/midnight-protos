// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeLimitedShopBuyGoodsRsp.proto" (syntax proto3)
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
import { HomeLimitedShopGoods } from "./HomeLimitedShopGoods";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4630;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message HomeLimitedShopBuyGoodsRsp
 */
export interface HomeLimitedShopBuyGoodsRsp {
    /**
     * @generated from protobuf field: repeated HomeLimitedShopGoods goods_list = 3;
     */
    goodsList: HomeLimitedShopGoods[];
    /**
     * @generated from protobuf field: uint32 buy_count = 10;
     */
    buyCount: number;
    /**
     * @generated from protobuf field: int32 retcode = 13;
     */
    retcode: number;
    /**
     * @generated from protobuf field: HomeLimitedShopGoods goods = 9;
     */
    goods?: HomeLimitedShopGoods;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopBuyGoodsRsp$Type extends MessageType<HomeLimitedShopBuyGoodsRsp> {
    constructor() {
        super("HomeLimitedShopBuyGoodsRsp", [
            { no: 3, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeLimitedShopGoods },
            { no: 10, name: "buy_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "goods", kind: "message", T: () => HomeLimitedShopGoods }
        ]);
    }
    create(value?: PartialMessage<HomeLimitedShopBuyGoodsRsp>): HomeLimitedShopBuyGoodsRsp {
        const message = { goodsList: [], buyCount: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeLimitedShopBuyGoodsRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeLimitedShopBuyGoodsRsp): HomeLimitedShopBuyGoodsRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HomeLimitedShopGoods goods_list */ 3:
                    message.goodsList.push(HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 buy_count */ 10:
                    message.buyCount = reader.uint32();
                    break;
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* HomeLimitedShopGoods goods */ 9:
                    message.goods = HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options, message.goods);
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
    internalBinaryWrite(message: HomeLimitedShopBuyGoodsRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated HomeLimitedShopGoods goods_list = 3; */
        for (let i = 0; i < message.goodsList.length; i++)
            HomeLimitedShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 buy_count = 10; */
        if (message.buyCount !== 0)
            writer.tag(10, WireType.Varint).uint32(message.buyCount);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, WireType.Varint).int32(message.retcode);
        /* HomeLimitedShopGoods goods = 9; */
        if (message.goods)
            HomeLimitedShopGoods.internalBinaryWrite(message.goods, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeLimitedShopBuyGoodsRsp
 */
export const HomeLimitedShopBuyGoodsRsp = new HomeLimitedShopBuyGoodsRsp$Type();
