"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchBuyGoodsRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BuyGoodsParam_1 = require("./BuyGoodsParam");
const ShopGoods_1 = require("./ShopGoods");
// @generated message type with reflection information, may provide speed optimized methods
class BatchBuyGoodsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BatchBuyGoodsRsp", [
            { no: 6, name: "shop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShopGoods_1.ShopGoods },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "buy_goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BuyGoodsParam_1.BuyGoodsParam }
        ]);
    }
    create(value) {
        const message = { shopType: 0, goodsList: [], retcode: 0, buyGoodsList: [] };
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
                case /* uint32 shop_type */ 6:
                    message.shopType = reader.uint32();
                    break;
                case /* repeated ShopGoods goods_list */ 15:
                    message.goodsList.push(ShopGoods_1.ShopGoods.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* repeated BuyGoodsParam buy_goods_list */ 8:
                    message.buyGoodsList.push(BuyGoodsParam_1.BuyGoodsParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 shop_type = 6; */
        if (message.shopType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.shopType);
        /* repeated ShopGoods goods_list = 15; */
        for (let i = 0; i < message.goodsList.length; i++)
            ShopGoods_1.ShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated BuyGoodsParam buy_goods_list = 8; */
        for (let i = 0; i < message.buyGoodsList.length; i++)
            BuyGoodsParam_1.BuyGoodsParam.internalBinaryWrite(message.buyGoodsList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BatchBuyGoodsRsp
 */
exports.BatchBuyGoodsRsp = new BatchBuyGoodsRsp$Type();
