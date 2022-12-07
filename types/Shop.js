"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ShopMcoinProduct_1 = require("./ShopMcoinProduct");
const ShopConcertProduct_1 = require("./ShopConcertProduct");
const ShopCardProduct_1 = require("./ShopCardProduct");
const ShopGoods_1 = require("./ShopGoods");
// @generated message type with reflection information, may provide speed optimized methods
class Shop$Type extends runtime_5.MessageType {
    constructor() {
        super("Shop", [
            { no: 1, name: "shop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "city_reputation_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopGoods_1.ShopGoods },
            { no: 11, name: "card_product_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopCardProduct_1.ShopCardProduct },
            { no: 9, name: "concert_product_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopConcertProduct_1.ShopConcertProduct },
            { no: 7, name: "mcoin_product_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopMcoinProduct_1.ShopMcoinProduct }
        ]);
    }
    create(value) {
        const message = { shopType: 0, nextRefreshTime: 0, cityId: 0, cityReputationLevel: 0, goodsList: [], cardProductList: [], concertProductList: [], mcoinProductList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
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
                    message.goodsList.push(ShopGoods_1.ShopGoods.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ShopCardProduct card_product_list */ 11:
                    message.cardProductList.push(ShopCardProduct_1.ShopCardProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ShopConcertProduct concert_product_list */ 9:
                    message.concertProductList.push(ShopConcertProduct_1.ShopConcertProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ShopMcoinProduct mcoin_product_list */ 7:
                    message.mcoinProductList.push(ShopMcoinProduct_1.ShopMcoinProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 shop_type = 1; */
        if (message.shopType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.shopType);
        /* uint32 next_refresh_time = 5; */
        if (message.nextRefreshTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 city_id = 12; */
        if (message.cityId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cityId);
        /* uint32 city_reputation_level = 8; */
        if (message.cityReputationLevel !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cityReputationLevel);
        /* repeated ShopGoods goods_list = 3; */
        for (let i = 0; i < message.goodsList.length; i++)
            ShopGoods_1.ShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ShopCardProduct card_product_list = 11; */
        for (let i = 0; i < message.cardProductList.length; i++)
            ShopCardProduct_1.ShopCardProduct.internalBinaryWrite(message.cardProductList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ShopConcertProduct concert_product_list = 9; */
        for (let i = 0; i < message.concertProductList.length; i++)
            ShopConcertProduct_1.ShopConcertProduct.internalBinaryWrite(message.concertProductList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ShopMcoinProduct mcoin_product_list = 7; */
        for (let i = 0; i < message.mcoinProductList.length; i++)
            ShopMcoinProduct_1.ShopMcoinProduct.internalBinaryWrite(message.mcoinProductList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Shop
 */
exports.Shop = new Shop$Type();
