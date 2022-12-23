"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeLimitedShopGoods = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopGoods$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeLimitedShopGoods", [
            { no: 8, name: "buy_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "disable_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "goods_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "bought_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "goods_item", kind: "message", T: () => ItemParam_1.ItemParam },
            { no: 4, name: "cost_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { buyLimit: 0, disableType: 0, goodsId: 0, boughtNum: 0, costItemList: [] };
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
                case /* uint32 buy_limit */ 8:
                    message.buyLimit = reader.uint32();
                    break;
                case /* uint32 disable_type */ 10:
                    message.disableType = reader.uint32();
                    break;
                case /* uint32 goods_id */ 12:
                    message.goodsId = reader.uint32();
                    break;
                case /* uint32 bought_num */ 5:
                    message.boughtNum = reader.uint32();
                    break;
                case /* ItemParam goods_item */ 2:
                    message.goodsItem = ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.goodsItem);
                    break;
                case /* repeated ItemParam cost_item_list */ 4:
                    message.costItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 buy_limit = 8; */
        if (message.buyLimit !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.buyLimit);
        /* uint32 disable_type = 10; */
        if (message.disableType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.disableType);
        /* uint32 goods_id = 12; */
        if (message.goodsId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.goodsId);
        /* uint32 bought_num = 5; */
        if (message.boughtNum !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.boughtNum);
        /* ItemParam goods_item = 2; */
        if (message.goodsItem)
            ItemParam_1.ItemParam.internalBinaryWrite(message.goodsItem, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam cost_item_list = 4; */
        for (let i = 0; i < message.costItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeLimitedShopGoods
 */
exports.HomeLimitedShopGoods = new HomeLimitedShopGoods$Type();
