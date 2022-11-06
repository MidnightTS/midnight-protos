"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetActivityShopSheetInfoRsp = exports.GetActivityShopSheetInfoReq = exports.ActivityShopSheetInfo = exports.GetShopmallDataRsp = exports.GetShopmallDataReq = exports.BuyGoodsRsp = exports.BuyGoodsReq = exports.GetShopRsp = exports.GetShopReq = exports.Shop = exports.ShopGoods = exports.ShopGoodsDisableType = exports.GetActivityShopSheetInfoRsp_CmdId = exports.GetActivityShopSheetInfoReq_CmdId = exports.GetShopmallDataRsp_CmdId = exports.GetShopmallDataReq_CmdId = exports.BuyGoodsRsp_CmdId = exports.BuyGoodsReq_CmdId = exports.GetShopRsp_CmdId = exports.GetShopReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
const define_4 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.GetShopReq.CmdId
 */
var GetShopReq_CmdId;
(function (GetShopReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopReq_CmdId[GetShopReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 772;
     */
    GetShopReq_CmdId[GetShopReq_CmdId["CMD_ID"] = 772] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopReq_CmdId[GetShopReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetShopReq_CmdId[GetShopReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetShopReq_CmdId[GetShopReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetShopReq_CmdId = exports.GetShopReq_CmdId || (exports.GetShopReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetShopRsp.CmdId
 */
var GetShopRsp_CmdId;
(function (GetShopRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 798;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["CMD_ID"] = 798] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetShopRsp_CmdId[GetShopRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetShopRsp_CmdId = exports.GetShopRsp_CmdId || (exports.GetShopRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BuyGoodsReq.CmdId
 */
var BuyGoodsReq_CmdId;
(function (BuyGoodsReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyGoodsReq_CmdId[BuyGoodsReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 712;
     */
    BuyGoodsReq_CmdId[BuyGoodsReq_CmdId["CMD_ID"] = 712] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyGoodsReq_CmdId[BuyGoodsReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyGoodsReq_CmdId[BuyGoodsReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyGoodsReq_CmdId[BuyGoodsReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BuyGoodsReq_CmdId = exports.BuyGoodsReq_CmdId || (exports.BuyGoodsReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BuyGoodsRsp.CmdId
 */
var BuyGoodsRsp_CmdId;
(function (BuyGoodsRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyGoodsRsp_CmdId[BuyGoodsRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 735;
     */
    BuyGoodsRsp_CmdId[BuyGoodsRsp_CmdId["CMD_ID"] = 735] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyGoodsRsp_CmdId[BuyGoodsRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyGoodsRsp_CmdId[BuyGoodsRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BuyGoodsRsp_CmdId = exports.BuyGoodsRsp_CmdId || (exports.BuyGoodsRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetShopmallDataReq.CmdId
 */
var GetShopmallDataReq_CmdId;
(function (GetShopmallDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopmallDataReq_CmdId[GetShopmallDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 707;
     */
    GetShopmallDataReq_CmdId[GetShopmallDataReq_CmdId["CMD_ID"] = 707] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopmallDataReq_CmdId[GetShopmallDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetShopmallDataReq_CmdId[GetShopmallDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetShopmallDataReq_CmdId[GetShopmallDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetShopmallDataReq_CmdId = exports.GetShopmallDataReq_CmdId || (exports.GetShopmallDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetShopmallDataRsp.CmdId
 */
var GetShopmallDataRsp_CmdId;
(function (GetShopmallDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopmallDataRsp_CmdId[GetShopmallDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 721;
     */
    GetShopmallDataRsp_CmdId[GetShopmallDataRsp_CmdId["CMD_ID"] = 721] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetShopmallDataRsp_CmdId[GetShopmallDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetShopmallDataRsp_CmdId[GetShopmallDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetShopmallDataRsp_CmdId = exports.GetShopmallDataRsp_CmdId || (exports.GetShopmallDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetActivityShopSheetInfoReq.CmdId
 */
var GetActivityShopSheetInfoReq_CmdId;
(function (GetActivityShopSheetInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetActivityShopSheetInfoReq_CmdId[GetActivityShopSheetInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 703;
     */
    GetActivityShopSheetInfoReq_CmdId[GetActivityShopSheetInfoReq_CmdId["CMD_ID"] = 703] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetActivityShopSheetInfoReq_CmdId[GetActivityShopSheetInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetActivityShopSheetInfoReq_CmdId[GetActivityShopSheetInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetActivityShopSheetInfoReq_CmdId[GetActivityShopSheetInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetActivityShopSheetInfoReq_CmdId = exports.GetActivityShopSheetInfoReq_CmdId || (exports.GetActivityShopSheetInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetActivityShopSheetInfoRsp.CmdId
 */
var GetActivityShopSheetInfoRsp_CmdId;
(function (GetActivityShopSheetInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetActivityShopSheetInfoRsp_CmdId[GetActivityShopSheetInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 790;
     */
    GetActivityShopSheetInfoRsp_CmdId[GetActivityShopSheetInfoRsp_CmdId["CMD_ID"] = 790] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetActivityShopSheetInfoRsp_CmdId[GetActivityShopSheetInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetActivityShopSheetInfoRsp_CmdId[GetActivityShopSheetInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetActivityShopSheetInfoRsp_CmdId = exports.GetActivityShopSheetInfoRsp_CmdId || (exports.GetActivityShopSheetInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ShopGoodsDisableType
 */
var ShopGoodsDisableType;
(function (ShopGoodsDisableType) {
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_NONE = 0;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_NONE"] = 0] = "SHOP_GOODS_DISABLE_NONE";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_TALENT_FULL = 1;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_TALENT_FULL"] = 1] = "SHOP_GOODS_DISABLE_TALENT_FULL";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_FURNITURE_FORMULA_UNLOCKED = 2;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_FURNITURE_FORMULA_UNLOCKED"] = 2] = "SHOP_GOODS_DISABLE_FURNITURE_FORMULA_UNLOCKED";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_COSTUME_UNLOCKED = 3;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_COSTUME_UNLOCKED"] = 3] = "SHOP_GOODS_DISABLE_COSTUME_UNLOCKED";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_BGM_UNLOCKED = 4;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_BGM_UNLOCKED"] = 4] = "SHOP_GOODS_DISABLE_BGM_UNLOCKED";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_GCG_CARD_EXCEED = 5;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_GCG_CARD_EXCEED"] = 5] = "SHOP_GOODS_DISABLE_GCG_CARD_EXCEED";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_GCG_CARD_FACE_UNLOCKED = 6;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_GCG_CARD_FACE_UNLOCKED"] = 6] = "SHOP_GOODS_DISABLE_GCG_CARD_FACE_UNLOCKED";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_GCG_CARD_BACK_UNLOCKED = 7;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_GCG_CARD_BACK_UNLOCKED"] = 7] = "SHOP_GOODS_DISABLE_GCG_CARD_BACK_UNLOCKED";
    /**
     * @generated from protobuf enum value: SHOP_GOODS_DISABLE_GCG_FIELD_UNLOCKED = 8;
     */
    ShopGoodsDisableType[ShopGoodsDisableType["SHOP_GOODS_DISABLE_GCG_FIELD_UNLOCKED"] = 8] = "SHOP_GOODS_DISABLE_GCG_FIELD_UNLOCKED";
})(ShopGoodsDisableType = exports.ShopGoodsDisableType || (exports.ShopGoodsDisableType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ShopGoods$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShopGoods", [
            { no: 258, name: "discount_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "min_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cost_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_4.ItemParam },
            { no: 318, name: "secondary_sheet_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "hcoin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mcoin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1998, name: "discount_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 247, name: "single_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "goods_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "max_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "disable_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 574, name: "discount_begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "pre_goods_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "scoin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "bought_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "buy_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "goods_item", kind: "message", T: () => define_4.ItemParam }
        ]);
    }
    create(value) {
        const message = { costItemList: [], preGoodsIdList: [] };
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
                case /* optional uint32 discount_end_time */ 258:
                    message.discountEndTime = reader.uint32();
                    break;
                case /* optional uint32 min_level */ 8:
                    message.minLevel = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 11:
                    message.endTime = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam cost_item_list */ 3:
                    message.costItemList.push(define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 secondary_sheet_id */ 318:
                    message.secondarySheetId = reader.uint32();
                    break;
                case /* optional uint32 hcoin */ 1:
                    message.hcoin = reader.uint32();
                    break;
                case /* optional uint32 mcoin */ 14:
                    message.mcoin = reader.uint32();
                    break;
                case /* optional uint32 discount_id */ 1998:
                    message.discountId = reader.uint32();
                    break;
                case /* optional uint32 single_limit */ 247:
                    message.singleLimit = reader.uint32();
                    break;
                case /* optional uint32 goods_id */ 13:
                    message.goodsId = reader.uint32();
                    break;
                case /* optional uint32 next_refresh_time */ 7:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* optional uint32 max_level */ 4:
                    message.maxLevel = reader.uint32();
                    break;
                case /* optional uint32 disable_type */ 6:
                    message.disableType = reader.uint32();
                    break;
                case /* optional uint32 discount_begin_time */ 574:
                    message.discountBeginTime = reader.uint32();
                    break;
                case /* repeated uint32 pre_goods_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.preGoodsIdList.push(reader.uint32());
                    else
                        message.preGoodsIdList.push(reader.uint32());
                    break;
                case /* optional uint32 begin_time */ 5:
                    message.beginTime = reader.uint32();
                    break;
                case /* optional uint32 scoin */ 15:
                    message.scoin = reader.uint32();
                    break;
                case /* optional uint32 bought_num */ 10:
                    message.boughtNum = reader.uint32();
                    break;
                case /* optional uint32 buy_limit */ 12:
                    message.buyLimit = reader.uint32();
                    break;
                case /* optional com.midnights.game.ItemParam goods_item */ 9:
                    message.goodsItem = define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.goodsItem);
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
        /* optional uint32 discount_end_time = 258; */
        if (message.discountEndTime !== undefined)
            writer.tag(258, runtime_2.WireType.Varint).uint32(message.discountEndTime);
        /* optional uint32 min_level = 8; */
        if (message.minLevel !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.minLevel);
        /* optional uint32 end_time = 11; */
        if (message.endTime !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.endTime);
        /* repeated com.midnights.game.ItemParam cost_item_list = 3; */
        for (let i = 0; i < message.costItemList.length; i++)
            define_4.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 secondary_sheet_id = 318; */
        if (message.secondarySheetId !== undefined)
            writer.tag(318, runtime_2.WireType.Varint).uint32(message.secondarySheetId);
        /* optional uint32 hcoin = 1; */
        if (message.hcoin !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.hcoin);
        /* optional uint32 mcoin = 14; */
        if (message.mcoin !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.mcoin);
        /* optional uint32 discount_id = 1998; */
        if (message.discountId !== undefined)
            writer.tag(1998, runtime_2.WireType.Varint).uint32(message.discountId);
        /* optional uint32 single_limit = 247; */
        if (message.singleLimit !== undefined)
            writer.tag(247, runtime_2.WireType.Varint).uint32(message.singleLimit);
        /* optional uint32 goods_id = 13; */
        if (message.goodsId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.goodsId);
        /* optional uint32 next_refresh_time = 7; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* optional uint32 max_level = 4; */
        if (message.maxLevel !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.maxLevel);
        /* optional uint32 disable_type = 6; */
        if (message.disableType !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.disableType);
        /* optional uint32 discount_begin_time = 574; */
        if (message.discountBeginTime !== undefined)
            writer.tag(574, runtime_2.WireType.Varint).uint32(message.discountBeginTime);
        /* repeated uint32 pre_goods_id_list = 2; */
        for (let i = 0; i < message.preGoodsIdList.length; i++)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.preGoodsIdList[i]);
        /* optional uint32 begin_time = 5; */
        if (message.beginTime !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* optional uint32 scoin = 15; */
        if (message.scoin !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.scoin);
        /* optional uint32 bought_num = 10; */
        if (message.boughtNum !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.boughtNum);
        /* optional uint32 buy_limit = 12; */
        if (message.buyLimit !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.buyLimit);
        /* optional com.midnights.game.ItemParam goods_item = 9; */
        if (message.goodsItem)
            define_4.ItemParam.internalBinaryWrite(message.goodsItem, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShopGoods
 */
exports.ShopGoods = new ShopGoods$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Shop$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Shop", [
            { no: 3, name: "concert_product_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_3.ShopConcertProduct },
            { no: 15, name: "goods_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ShopGoods },
            { no: 2, name: "city_reputation_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "card_product_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ShopCardProduct },
            { no: 7, name: "mcoin_product_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ShopMcoinProduct },
            { no: 11, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "shop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { concertProductList: [], goodsList: [], cardProductList: [], mcoinProductList: [] };
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
                case /* repeated com.midnights.game.ShopConcertProduct concert_product_list */ 3:
                    message.concertProductList.push(define_3.ShopConcertProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ShopGoods goods_list */ 15:
                    message.goodsList.push(exports.ShopGoods.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 city_reputation_level */ 2:
                    message.cityReputationLevel = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ShopCardProduct card_product_list */ 14:
                    message.cardProductList.push(define_2.ShopCardProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ShopMcoinProduct mcoin_product_list */ 7:
                    message.mcoinProductList.push(define_1.ShopMcoinProduct.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 next_refresh_time */ 11:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* optional uint32 city_id */ 10:
                    message.cityId = reader.uint32();
                    break;
                case /* optional uint32 shop_type */ 13:
                    message.shopType = reader.uint32();
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
        /* repeated com.midnights.game.ShopConcertProduct concert_product_list = 3; */
        for (let i = 0; i < message.concertProductList.length; i++)
            define_3.ShopConcertProduct.internalBinaryWrite(message.concertProductList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ShopGoods goods_list = 15; */
        for (let i = 0; i < message.goodsList.length; i++)
            exports.ShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 city_reputation_level = 2; */
        if (message.cityReputationLevel !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.cityReputationLevel);
        /* repeated com.midnights.game.ShopCardProduct card_product_list = 14; */
        for (let i = 0; i < message.cardProductList.length; i++)
            define_2.ShopCardProduct.internalBinaryWrite(message.cardProductList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ShopMcoinProduct mcoin_product_list = 7; */
        for (let i = 0; i < message.mcoinProductList.length; i++)
            define_1.ShopMcoinProduct.internalBinaryWrite(message.mcoinProductList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 next_refresh_time = 11; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* optional uint32 city_id = 10; */
        if (message.cityId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.cityId);
        /* optional uint32 shop_type = 13; */
        if (message.shopType !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.shopType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Shop
 */
exports.Shop = new Shop$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetShopReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetShopReq", [
            { no: 13, name: "shop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 shop_type */ 13:
                    message.shopType = reader.uint32();
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
        /* optional uint32 shop_type = 13; */
        if (message.shopType !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.shopType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetShopReq
 */
exports.GetShopReq = new GetShopReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetShopRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetShopRsp", [
            { no: 11, name: "shop", kind: "message", T: () => exports.Shop },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional com.midnights.game.Shop shop */ 11:
                    message.shop = exports.Shop.internalBinaryRead(reader, reader.uint32(), options, message.shop);
                    break;
                case /* optional int32 retcode */ 2:
                    message.retcode = reader.int32();
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
        /* optional com.midnights.game.Shop shop = 11; */
        if (message.shop)
            exports.Shop.internalBinaryWrite(message.shop, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetShopRsp
 */
exports.GetShopRsp = new GetShopRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyGoodsReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuyGoodsReq", [
            { no: 14, name: "buy_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "goods", kind: "message", T: () => exports.ShopGoods },
            { no: 7, name: "shop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 buy_count */ 14:
                    message.buyCount = reader.uint32();
                    break;
                case /* optional com.midnights.game.ShopGoods goods */ 15:
                    message.goods = exports.ShopGoods.internalBinaryRead(reader, reader.uint32(), options, message.goods);
                    break;
                case /* optional uint32 shop_type */ 7:
                    message.shopType = reader.uint32();
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
        /* optional uint32 buy_count = 14; */
        if (message.buyCount !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.buyCount);
        /* optional com.midnights.game.ShopGoods goods = 15; */
        if (message.goods)
            exports.ShopGoods.internalBinaryWrite(message.goods, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 shop_type = 7; */
        if (message.shopType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.shopType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuyGoodsReq
 */
exports.BuyGoodsReq = new BuyGoodsReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyGoodsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuyGoodsRsp", [
            { no: 14, name: "buy_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "goods", kind: "message", T: () => exports.ShopGoods },
            { no: 11, name: "shop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "goods_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ShopGoods }
        ]);
    }
    create(value) {
        const message = { goodsList: [] };
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
                case /* optional uint32 buy_count */ 14:
                    message.buyCount = reader.uint32();
                    break;
                case /* optional com.midnights.game.ShopGoods goods */ 12:
                    message.goods = exports.ShopGoods.internalBinaryRead(reader, reader.uint32(), options, message.goods);
                    break;
                case /* optional uint32 shop_type */ 11:
                    message.shopType = reader.uint32();
                    break;
                case /* optional int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.ShopGoods goods_list */ 5:
                    message.goodsList.push(exports.ShopGoods.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 buy_count = 14; */
        if (message.buyCount !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.buyCount);
        /* optional com.midnights.game.ShopGoods goods = 12; */
        if (message.goods)
            exports.ShopGoods.internalBinaryWrite(message.goods, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 shop_type = 11; */
        if (message.shopType !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.shopType);
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.ShopGoods goods_list = 5; */
        for (let i = 0; i < message.goodsList.length; i++)
            exports.ShopGoods.internalBinaryWrite(message.goodsList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuyGoodsRsp
 */
exports.BuyGoodsRsp = new BuyGoodsRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetShopmallDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetShopmallDataReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetShopmallDataReq
 */
exports.GetShopmallDataReq = new GetShopmallDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetShopmallDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetShopmallDataRsp", [
            { no: 15, name: "shop_type_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { shopTypeList: [] };
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
                case /* repeated uint32 shop_type_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.shopTypeList.push(reader.uint32());
                    else
                        message.shopTypeList.push(reader.uint32());
                    break;
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
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
        /* repeated uint32 shop_type_list = 15; */
        for (let i = 0; i < message.shopTypeList.length; i++)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.shopTypeList[i]);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetShopmallDataRsp
 */
exports.GetShopmallDataRsp = new GetShopmallDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ActivityShopSheetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ActivityShopSheetInfo", [
            { no: 1, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "sheet_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 end_time */ 1:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 12:
                    message.beginTime = reader.uint32();
                    break;
                case /* optional uint32 sheet_id */ 2:
                    message.sheetId = reader.uint32();
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
        /* optional uint32 end_time = 1; */
        if (message.endTime !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.endTime);
        /* optional uint32 begin_time = 12; */
        if (message.beginTime !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* optional uint32 sheet_id = 2; */
        if (message.sheetId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.sheetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ActivityShopSheetInfo
 */
exports.ActivityShopSheetInfo = new ActivityShopSheetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetActivityShopSheetInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetActivityShopSheetInfoReq", [
            { no: 7, name: "shop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 shop_type */ 7:
                    message.shopType = reader.uint32();
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
        /* optional uint32 shop_type = 7; */
        if (message.shopType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.shopType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetActivityShopSheetInfoReq
 */
exports.GetActivityShopSheetInfoReq = new GetActivityShopSheetInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetActivityShopSheetInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetActivityShopSheetInfoRsp", [
            { no: 6, name: "sheet_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ActivityShopSheetInfo },
            { no: 8, name: "shop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { sheetInfoList: [] };
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
                case /* repeated com.midnights.game.ActivityShopSheetInfo sheet_info_list */ 6:
                    message.sheetInfoList.push(exports.ActivityShopSheetInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 shop_type */ 8:
                    message.shopType = reader.uint32();
                    break;
                case /* optional int32 retcode */ 13:
                    message.retcode = reader.int32();
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
        /* repeated com.midnights.game.ActivityShopSheetInfo sheet_info_list = 6; */
        for (let i = 0; i < message.sheetInfoList.length; i++)
            exports.ActivityShopSheetInfo.internalBinaryWrite(message.sheetInfoList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 shop_type = 8; */
        if (message.shopType !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.shopType);
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetActivityShopSheetInfoRsp
 */
exports.GetActivityShopSheetInfoRsp = new GetActivityShopSheetInfoRsp$Type();
