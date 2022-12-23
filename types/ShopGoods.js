"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopGoods = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class ShopGoods$Type extends runtime_5.MessageType {
    constructor() {
        super("ShopGoods", [
            { no: 1003, name: "secondary_sheet_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "goods_item", kind: "message", T: () => ItemParam_1.ItemParam },
            { no: 7, name: "cost_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 14, name: "bought_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pre_goods_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "min_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "mcoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "hcoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "goods_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1037, name: "Unk3300_OMKIFIMDGDN", kind: "scalar", jsonName: "Unk3300OMKIFIMDGDN", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "buy_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 777, name: "Unk3300_MBGOMHNBHMG", kind: "scalar", jsonName: "Unk3300MBGOMHNBHMG", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "scoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "max_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1770, name: "single_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 505, name: "Unk3300_NJCPAJBCEPH", kind: "scalar", jsonName: "Unk3300NJCPAJBCEPH", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "disable_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { secondarySheetId: 0, costItemList: [], boughtNum: 0, preGoodsIdList: [], minLevel: 0, mcoin: 0, hcoin: 0, endTime: 0, nextRefreshTime: 0, goodsId: 0, unk3300OMKIFIMDGDN: 0, buyLimit: 0, unk3300MBGOMHNBHMG: 0, scoin: 0, maxLevel: 0, singleLimit: 0, unk3300NJCPAJBCEPH: 0, beginTime: 0, disableType: 0 };
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
                case /* uint32 secondary_sheet_id */ 1003:
                    message.secondarySheetId = reader.uint32();
                    break;
                case /* ItemParam goods_item */ 15:
                    message.goodsItem = ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.goodsItem);
                    break;
                case /* repeated ItemParam cost_item_list */ 7:
                    message.costItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 bought_num */ 14:
                    message.boughtNum = reader.uint32();
                    break;
                case /* repeated uint32 pre_goods_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.preGoodsIdList.push(reader.uint32());
                    else
                        message.preGoodsIdList.push(reader.uint32());
                    break;
                case /* uint32 min_level */ 5:
                    message.minLevel = reader.uint32();
                    break;
                case /* uint32 mcoin */ 11:
                    message.mcoin = reader.uint32();
                    break;
                case /* uint32 hcoin */ 6:
                    message.hcoin = reader.uint32();
                    break;
                case /* uint32 end_time */ 3:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 10:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 goods_id */ 13:
                    message.goodsId = reader.uint32();
                    break;
                case /* uint32 Unk3300_OMKIFIMDGDN = 1037 [json_name = "Unk3300OMKIFIMDGDN"];*/ 1037:
                    message.unk3300OMKIFIMDGDN = reader.uint32();
                    break;
                case /* uint32 buy_limit */ 8:
                    message.buyLimit = reader.uint32();
                    break;
                case /* uint32 Unk3300_MBGOMHNBHMG = 777 [json_name = "Unk3300MBGOMHNBHMG"];*/ 777:
                    message.unk3300MBGOMHNBHMG = reader.uint32();
                    break;
                case /* uint32 scoin */ 2:
                    message.scoin = reader.uint32();
                    break;
                case /* uint32 max_level */ 1:
                    message.maxLevel = reader.uint32();
                    break;
                case /* uint32 single_limit */ 1770:
                    message.singleLimit = reader.uint32();
                    break;
                case /* uint32 Unk3300_NJCPAJBCEPH = 505 [json_name = "Unk3300NJCPAJBCEPH"];*/ 505:
                    message.unk3300NJCPAJBCEPH = reader.uint32();
                    break;
                case /* uint32 begin_time */ 12:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 disable_type */ 4:
                    message.disableType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 secondary_sheet_id = 1003; */
        if (message.secondarySheetId !== 0)
            writer.tag(1003, runtime_2.WireType.Varint).uint32(message.secondarySheetId);
        /* ItemParam goods_item = 15; */
        if (message.goodsItem)
            ItemParam_1.ItemParam.internalBinaryWrite(message.goodsItem, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam cost_item_list = 7; */
        for (let i = 0; i < message.costItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 bought_num = 14; */
        if (message.boughtNum !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.boughtNum);
        /* repeated uint32 pre_goods_id_list = 9; */
        if (message.preGoodsIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.preGoodsIdList.length; i++)
                writer.uint32(message.preGoodsIdList[i]);
            writer.join();
        }
        /* uint32 min_level = 5; */
        if (message.minLevel !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.minLevel);
        /* uint32 mcoin = 11; */
        if (message.mcoin !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.mcoin);
        /* uint32 hcoin = 6; */
        if (message.hcoin !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.hcoin);
        /* uint32 end_time = 3; */
        if (message.endTime !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.endTime);
        /* uint32 next_refresh_time = 10; */
        if (message.nextRefreshTime !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 goods_id = 13; */
        if (message.goodsId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.goodsId);
        /* uint32 Unk3300_OMKIFIMDGDN = 1037 [json_name = "Unk3300OMKIFIMDGDN"]; */
        if (message.unk3300OMKIFIMDGDN !== 0)
            writer.tag(1037, runtime_2.WireType.Varint).uint32(message.unk3300OMKIFIMDGDN);
        /* uint32 buy_limit = 8; */
        if (message.buyLimit !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.buyLimit);
        /* uint32 Unk3300_MBGOMHNBHMG = 777 [json_name = "Unk3300MBGOMHNBHMG"]; */
        if (message.unk3300MBGOMHNBHMG !== 0)
            writer.tag(777, runtime_2.WireType.Varint).uint32(message.unk3300MBGOMHNBHMG);
        /* uint32 scoin = 2; */
        if (message.scoin !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.scoin);
        /* uint32 max_level = 1; */
        if (message.maxLevel !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.maxLevel);
        /* uint32 single_limit = 1770; */
        if (message.singleLimit !== 0)
            writer.tag(1770, runtime_2.WireType.Varint).uint32(message.singleLimit);
        /* uint32 Unk3300_NJCPAJBCEPH = 505 [json_name = "Unk3300NJCPAJBCEPH"]; */
        if (message.unk3300NJCPAJBCEPH !== 0)
            writer.tag(505, runtime_2.WireType.Varint).uint32(message.unk3300NJCPAJBCEPH);
        /* uint32 begin_time = 12; */
        if (message.beginTime !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* uint32 disable_type = 4; */
        if (message.disableType !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.disableType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShopGoods
 */
exports.ShopGoods = new ShopGoods$Type();
