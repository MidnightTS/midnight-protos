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
            { no: 1003, name: "Unk3300_PBMKNPCNBCK", kind: "scalar", jsonName: "Unk3300PBMKNPCNBCK", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "goods_item", kind: "message", T: () => ItemParam_1.ItemParam },
            { no: 7, name: "cost_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 14, name: "bought_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pre_goods_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_DFEDKIOCOBL", kind: "scalar", jsonName: "Unk3300DFEDKIOCOBL", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_NMOPAGJFHOO", kind: "scalar", jsonName: "Unk3300NMOPAGJFHOO", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "hcoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_DBJCMMBHBNI", kind: "scalar", jsonName: "Unk3300DBJCMMBHBNI", T: 13 /*ScalarType.UINT32*/ },
            { no: 1037, name: "Unk3300_OMKIFIMDGDN", kind: "scalar", jsonName: "Unk3300OMKIFIMDGDN", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_EHKFICBACKC", kind: "scalar", jsonName: "Unk3300EHKFICBACKC", T: 13 /*ScalarType.UINT32*/ },
            { no: 777, name: "Unk3300_MBGOMHNBHMG", kind: "scalar", jsonName: "Unk3300MBGOMHNBHMG", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_KKKNKNOLICI", kind: "scalar", jsonName: "Unk3300KKKNKNOLICI", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_CEOMHBNDAOP", kind: "scalar", jsonName: "Unk3300CEOMHBNDAOP", T: 13 /*ScalarType.UINT32*/ },
            { no: 1770, name: "Unk3300_MICPGJCIAPE", kind: "scalar", jsonName: "Unk3300MICPGJCIAPE", T: 13 /*ScalarType.UINT32*/ },
            { no: 505, name: "Unk3300_NJCPAJBCEPH", kind: "scalar", jsonName: "Unk3300NJCPAJBCEPH", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_OODCCOAIGHI", kind: "scalar", jsonName: "Unk3300OODCCOAIGHI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300PBMKNPCNBCK: 0, costItemList: [], boughtNum: 0, preGoodsIdList: [], unk3300DFEDKIOCOBL: 0, unk3300NMOPAGJFHOO: 0, hcoin: 0, endTime: 0, nextRefreshTime: 0, unk3300DBJCMMBHBNI: 0, unk3300OMKIFIMDGDN: 0, unk3300EHKFICBACKC: 0, unk3300MBGOMHNBHMG: 0, unk3300KKKNKNOLICI: 0, unk3300CEOMHBNDAOP: 0, unk3300MICPGJCIAPE: 0, unk3300NJCPAJBCEPH: 0, beginTime: 0, unk3300OODCCOAIGHI: 0 };
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
                case /* uint32 Unk3300_PBMKNPCNBCK = 1003 [json_name = "Unk3300PBMKNPCNBCK"];*/ 1003:
                    message.unk3300PBMKNPCNBCK = reader.uint32();
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
                case /* uint32 Unk3300_DFEDKIOCOBL = 5 [json_name = "Unk3300DFEDKIOCOBL"];*/ 5:
                    message.unk3300DFEDKIOCOBL = reader.uint32();
                    break;
                case /* uint32 Unk3300_NMOPAGJFHOO = 11 [json_name = "Unk3300NMOPAGJFHOO"];*/ 11:
                    message.unk3300NMOPAGJFHOO = reader.uint32();
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
                case /* uint32 Unk3300_DBJCMMBHBNI = 13 [json_name = "Unk3300DBJCMMBHBNI"];*/ 13:
                    message.unk3300DBJCMMBHBNI = reader.uint32();
                    break;
                case /* uint32 Unk3300_OMKIFIMDGDN = 1037 [json_name = "Unk3300OMKIFIMDGDN"];*/ 1037:
                    message.unk3300OMKIFIMDGDN = reader.uint32();
                    break;
                case /* uint32 Unk3300_EHKFICBACKC = 8 [json_name = "Unk3300EHKFICBACKC"];*/ 8:
                    message.unk3300EHKFICBACKC = reader.uint32();
                    break;
                case /* uint32 Unk3300_MBGOMHNBHMG = 777 [json_name = "Unk3300MBGOMHNBHMG"];*/ 777:
                    message.unk3300MBGOMHNBHMG = reader.uint32();
                    break;
                case /* uint32 Unk3300_KKKNKNOLICI = 2 [json_name = "Unk3300KKKNKNOLICI"];*/ 2:
                    message.unk3300KKKNKNOLICI = reader.uint32();
                    break;
                case /* uint32 Unk3300_CEOMHBNDAOP = 1 [json_name = "Unk3300CEOMHBNDAOP"];*/ 1:
                    message.unk3300CEOMHBNDAOP = reader.uint32();
                    break;
                case /* uint32 Unk3300_MICPGJCIAPE = 1770 [json_name = "Unk3300MICPGJCIAPE"];*/ 1770:
                    message.unk3300MICPGJCIAPE = reader.uint32();
                    break;
                case /* uint32 Unk3300_NJCPAJBCEPH = 505 [json_name = "Unk3300NJCPAJBCEPH"];*/ 505:
                    message.unk3300NJCPAJBCEPH = reader.uint32();
                    break;
                case /* uint32 begin_time */ 12:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_OODCCOAIGHI = 4 [json_name = "Unk3300OODCCOAIGHI"];*/ 4:
                    message.unk3300OODCCOAIGHI = reader.uint32();
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
        /* uint32 Unk3300_PBMKNPCNBCK = 1003 [json_name = "Unk3300PBMKNPCNBCK"]; */
        if (message.unk3300PBMKNPCNBCK !== 0)
            writer.tag(1003, runtime_2.WireType.Varint).uint32(message.unk3300PBMKNPCNBCK);
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
        /* uint32 Unk3300_DFEDKIOCOBL = 5 [json_name = "Unk3300DFEDKIOCOBL"]; */
        if (message.unk3300DFEDKIOCOBL !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300DFEDKIOCOBL);
        /* uint32 Unk3300_NMOPAGJFHOO = 11 [json_name = "Unk3300NMOPAGJFHOO"]; */
        if (message.unk3300NMOPAGJFHOO !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.unk3300NMOPAGJFHOO);
        /* uint32 hcoin = 6; */
        if (message.hcoin !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.hcoin);
        /* uint32 end_time = 3; */
        if (message.endTime !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.endTime);
        /* uint32 next_refresh_time = 10; */
        if (message.nextRefreshTime !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 Unk3300_DBJCMMBHBNI = 13 [json_name = "Unk3300DBJCMMBHBNI"]; */
        if (message.unk3300DBJCMMBHBNI !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.unk3300DBJCMMBHBNI);
        /* uint32 Unk3300_OMKIFIMDGDN = 1037 [json_name = "Unk3300OMKIFIMDGDN"]; */
        if (message.unk3300OMKIFIMDGDN !== 0)
            writer.tag(1037, runtime_2.WireType.Varint).uint32(message.unk3300OMKIFIMDGDN);
        /* uint32 Unk3300_EHKFICBACKC = 8 [json_name = "Unk3300EHKFICBACKC"]; */
        if (message.unk3300EHKFICBACKC !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.unk3300EHKFICBACKC);
        /* uint32 Unk3300_MBGOMHNBHMG = 777 [json_name = "Unk3300MBGOMHNBHMG"]; */
        if (message.unk3300MBGOMHNBHMG !== 0)
            writer.tag(777, runtime_2.WireType.Varint).uint32(message.unk3300MBGOMHNBHMG);
        /* uint32 Unk3300_KKKNKNOLICI = 2 [json_name = "Unk3300KKKNKNOLICI"]; */
        if (message.unk3300KKKNKNOLICI !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.unk3300KKKNKNOLICI);
        /* uint32 Unk3300_CEOMHBNDAOP = 1 [json_name = "Unk3300CEOMHBNDAOP"]; */
        if (message.unk3300CEOMHBNDAOP !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.unk3300CEOMHBNDAOP);
        /* uint32 Unk3300_MICPGJCIAPE = 1770 [json_name = "Unk3300MICPGJCIAPE"]; */
        if (message.unk3300MICPGJCIAPE !== 0)
            writer.tag(1770, runtime_2.WireType.Varint).uint32(message.unk3300MICPGJCIAPE);
        /* uint32 Unk3300_NJCPAJBCEPH = 505 [json_name = "Unk3300NJCPAJBCEPH"]; */
        if (message.unk3300NJCPAJBCEPH !== 0)
            writer.tag(505, runtime_2.WireType.Varint).uint32(message.unk3300NJCPAJBCEPH);
        /* uint32 begin_time = 12; */
        if (message.beginTime !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* uint32 Unk3300_OODCCOAIGHI = 4 [json_name = "Unk3300OODCCOAIGHI"]; */
        if (message.unk3300OODCCOAIGHI !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300OODCCOAIGHI);
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
