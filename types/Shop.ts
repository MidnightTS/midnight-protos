// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "Shop.proto" (syntax proto3)
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
import { ShopMcoinProduct } from "./ShopMcoinProduct";
import { ShopConcertProduct } from "./ShopConcertProduct";
import { ShopCardProduct } from "./ShopCardProduct";
import { ShopGoods } from "./ShopGoods";
/**
 * @generated from protobuf message Shop
 */
export interface Shop {
    /**
     * @generated from protobuf field: uint32 shop_type = 1;
     */
    shopType: number;
    /**
     * @generated from protobuf field: uint32 next_refresh_time = 5;
     */
    nextRefreshTime: number;
    /**
     * @generated from protobuf field: uint32 city_id = 12;
     */
    cityId: number;
    /**
     * @generated from protobuf field: uint32 city_reputation_level = 8;
     */
    cityReputationLevel: number;
    /**
     * @generated from protobuf field: repeated ShopGoods goods_list = 3;
     */
    goodsList: ShopGoods[];
    /**
     * @generated from protobuf field: repeated ShopCardProduct card_product_list = 11;
     */
    cardProductList: ShopCardProduct[];
    /**
     * @generated from protobuf field: repeated ShopConcertProduct concert_product_list = 9;
     */
    concertProductList: ShopConcertProduct[];
    /**
     * @generated from protobuf field: repeated ShopMcoinProduct mcoin_product_list = 7;
     */
    mcoinProductList: ShopMcoinProduct[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Shop$Type extends MessageType<Shop> {
    constructor() {
        super("Shop", [
            { no: 1, name: "shop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "city_reputation_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopGoods },
            { no: 11, name: "card_product_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopCardProduct },
            { no: 9, name: "concert_product_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopConcertProduct },
            { no: 7, name: "mcoin_product_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopMcoinProduct }
        ]);
    }
    create(value?: PartialMessage<Shop>): Shop {
        const message = { shopType: 0, nextRefreshTime: 0, cityId: 0, cityReputationLevel: 0, goodsList: [], cardProductList: [], concertProductList: [], mcoinProductList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Shop>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Shop): Shop {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 shop_type */ 1:
                    message.shopType = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 5:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 city_id */ 12:
                    message.cityId = reader.uint32();
                    break;
                case /* uint32 city_reputation_level */ 8:
                    message.cityReputationLevel = reader.uint32();
                    break;
                case /* repeated ShopGoods goods_list */ 3:
                    message.goodsList.push(ShopGoods.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ShopCardProduct card_product_list */ 11:
                    message.cardProductList.push(ShopCardProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ShopConcertProduct concert_product_list */ 9:
                    message.concertProductList.push(ShopConcertProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ShopMcoinProduct mcoin_product_list */ 7:
                    message.mcoinProductList.push(ShopMcoinProduct.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Shop, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 shop_type = 1; */
        if (message.shopType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.shopType);
        /* uint32 next_refresh_time = 5; */
        if (message.nextRefreshTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 city_id = 12; */
        if (message.cityId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.cityId);
        /* uint32 city_reputation_level = 8; */
        if (message.cityReputationLevel !== 0)
            writer.tag(8, WireType.Varint).uint32(message.cityReputationLevel);
        /* repeated ShopGoods goods_list = 3; */
        for (let i = 0; i < message.goodsList.length; i++)
            ShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated ShopCardProduct card_product_list = 11; */
        for (let i = 0; i < message.cardProductList.length; i++)
            ShopCardProduct.internalBinaryWrite(message.cardProductList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated ShopConcertProduct concert_product_list = 9; */
        for (let i = 0; i < message.concertProductList.length; i++)
            ShopConcertProduct.internalBinaryWrite(message.concertProductList[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* repeated ShopMcoinProduct mcoin_product_list = 7; */
        for (let i = 0; i < message.mcoinProductList.length; i++)
            ShopMcoinProduct.internalBinaryWrite(message.mcoinProductList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Shop
 */
export const Shop = new Shop$Type();
