"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeLimitedShopBuyGoodsRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeLimitedShopGoods_1 = require("./HomeLimitedShopGoods");
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopBuyGoodsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeLimitedShopBuyGoodsRsp", [
            { no: 3, name: "goods_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeLimitedShopGoods_1.HomeLimitedShopGoods },
            { no: 10, name: "buy_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "goods", kind: "message", T: () => HomeLimitedShopGoods_1.HomeLimitedShopGoods }
        ]);
    }
    create(value) {
        const message = { goodsList: [], buyCount: 0, retcode: 0 };
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
                case /* repeated HomeLimitedShopGoods goods_list */ 3:
                    message.goodsList.push(HomeLimitedShopGoods_1.HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 buy_count */ 10:
                    message.buyCount = reader.uint32();
                    break;
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* HomeLimitedShopGoods goods */ 9:
                    message.goods = HomeLimitedShopGoods_1.HomeLimitedShopGoods.internalBinaryRead(reader, reader.uint32(), options, message.goods);
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
        /* repeated HomeLimitedShopGoods goods_list = 3; */
        for (let i = 0; i < message.goodsList.length; i++)
            HomeLimitedShopGoods_1.HomeLimitedShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 buy_count = 10; */
        if (message.buyCount !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.buyCount);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* HomeLimitedShopGoods goods = 9; */
        if (message.goods)
            HomeLimitedShopGoods_1.HomeLimitedShopGoods.internalBinaryWrite(message.goods, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeLimitedShopBuyGoodsRsp
 */
exports.HomeLimitedShopBuyGoodsRsp = new HomeLimitedShopBuyGoodsRsp$Type();
