"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResinCardDataUpdateNotify = exports.TakeResinCardDailyRewardRsp = exports.TakeResinCardDailyRewardReq = exports.ReportTrackingIOInfoNotify = exports.OrderDisplayNotify = exports.PlayerRechargeDataNotify = exports.ResinCardData = exports.ProductPriceTier = exports.CardProductRewardNotify = exports.OrderFinishNotify = exports.RechargeRsp = exports.RechargeReq = exports.ResinCardDataUpdateNotify_CmdId = exports.TakeResinCardDailyRewardRsp_CmdId = exports.TakeResinCardDailyRewardReq_CmdId = exports.ReportTrackingIOInfoNotify_CmdId = exports.OrderDisplayNotify_CmdId = exports.PlayerRechargeDataNotify_CmdId = exports.CardProductRewardNotify_CmdId = exports.OrderFinishNotify_CmdId = exports.RechargeRsp_CmdId = exports.RechargeReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
const define_4 = require("./define");
const define_5 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.RechargeReq.CmdId
 */
var RechargeReq_CmdId;
(function (RechargeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RechargeReq_CmdId[RechargeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4126;
     */
    RechargeReq_CmdId[RechargeReq_CmdId["CMD_ID"] = 4126] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RechargeReq_CmdId[RechargeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RechargeReq_CmdId[RechargeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RechargeReq_CmdId[RechargeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RechargeReq_CmdId = exports.RechargeReq_CmdId || (exports.RechargeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RechargeRsp.CmdId
 */
var RechargeRsp_CmdId;
(function (RechargeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RechargeRsp_CmdId[RechargeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4118;
     */
    RechargeRsp_CmdId[RechargeRsp_CmdId["CMD_ID"] = 4118] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RechargeRsp_CmdId[RechargeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RechargeRsp_CmdId[RechargeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RechargeRsp_CmdId = exports.RechargeRsp_CmdId || (exports.RechargeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OrderFinishNotify.CmdId
 */
var OrderFinishNotify_CmdId;
(function (OrderFinishNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OrderFinishNotify_CmdId[OrderFinishNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4125;
     */
    OrderFinishNotify_CmdId[OrderFinishNotify_CmdId["CMD_ID"] = 4125] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OrderFinishNotify_CmdId[OrderFinishNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OrderFinishNotify_CmdId[OrderFinishNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OrderFinishNotify_CmdId = exports.OrderFinishNotify_CmdId || (exports.OrderFinishNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CardProductRewardNotify.CmdId
 */
var CardProductRewardNotify_CmdId;
(function (CardProductRewardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CardProductRewardNotify_CmdId[CardProductRewardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4107;
     */
    CardProductRewardNotify_CmdId[CardProductRewardNotify_CmdId["CMD_ID"] = 4107] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CardProductRewardNotify_CmdId[CardProductRewardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CardProductRewardNotify_CmdId[CardProductRewardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CardProductRewardNotify_CmdId = exports.CardProductRewardNotify_CmdId || (exports.CardProductRewardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerRechargeDataNotify.CmdId
 */
var PlayerRechargeDataNotify_CmdId;
(function (PlayerRechargeDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRechargeDataNotify_CmdId[PlayerRechargeDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4102;
     */
    PlayerRechargeDataNotify_CmdId[PlayerRechargeDataNotify_CmdId["CMD_ID"] = 4102] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRechargeDataNotify_CmdId[PlayerRechargeDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerRechargeDataNotify_CmdId[PlayerRechargeDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerRechargeDataNotify_CmdId = exports.PlayerRechargeDataNotify_CmdId || (exports.PlayerRechargeDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OrderDisplayNotify.CmdId
 */
var OrderDisplayNotify_CmdId;
(function (OrderDisplayNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OrderDisplayNotify_CmdId[OrderDisplayNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4131;
     */
    OrderDisplayNotify_CmdId[OrderDisplayNotify_CmdId["CMD_ID"] = 4131] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OrderDisplayNotify_CmdId[OrderDisplayNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OrderDisplayNotify_CmdId[OrderDisplayNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OrderDisplayNotify_CmdId[OrderDisplayNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(OrderDisplayNotify_CmdId = exports.OrderDisplayNotify_CmdId || (exports.OrderDisplayNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReportTrackingIOInfoNotify.CmdId
 */
var ReportTrackingIOInfoNotify_CmdId;
(function (ReportTrackingIOInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReportTrackingIOInfoNotify_CmdId[ReportTrackingIOInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4129;
     */
    ReportTrackingIOInfoNotify_CmdId[ReportTrackingIOInfoNotify_CmdId["CMD_ID"] = 4129] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReportTrackingIOInfoNotify_CmdId[ReportTrackingIOInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReportTrackingIOInfoNotify_CmdId[ReportTrackingIOInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReportTrackingIOInfoNotify_CmdId[ReportTrackingIOInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReportTrackingIOInfoNotify_CmdId = exports.ReportTrackingIOInfoNotify_CmdId || (exports.ReportTrackingIOInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeResinCardDailyRewardReq.CmdId
 */
var TakeResinCardDailyRewardReq_CmdId;
(function (TakeResinCardDailyRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeResinCardDailyRewardReq_CmdId[TakeResinCardDailyRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4122;
     */
    TakeResinCardDailyRewardReq_CmdId[TakeResinCardDailyRewardReq_CmdId["CMD_ID"] = 4122] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeResinCardDailyRewardReq_CmdId[TakeResinCardDailyRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeResinCardDailyRewardReq_CmdId[TakeResinCardDailyRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeResinCardDailyRewardReq_CmdId[TakeResinCardDailyRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeResinCardDailyRewardReq_CmdId = exports.TakeResinCardDailyRewardReq_CmdId || (exports.TakeResinCardDailyRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeResinCardDailyRewardRsp.CmdId
 */
var TakeResinCardDailyRewardRsp_CmdId;
(function (TakeResinCardDailyRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeResinCardDailyRewardRsp_CmdId[TakeResinCardDailyRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4144;
     */
    TakeResinCardDailyRewardRsp_CmdId[TakeResinCardDailyRewardRsp_CmdId["CMD_ID"] = 4144] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeResinCardDailyRewardRsp_CmdId[TakeResinCardDailyRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeResinCardDailyRewardRsp_CmdId[TakeResinCardDailyRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeResinCardDailyRewardRsp_CmdId = exports.TakeResinCardDailyRewardRsp_CmdId || (exports.TakeResinCardDailyRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ResinCardDataUpdateNotify.CmdId
 */
var ResinCardDataUpdateNotify_CmdId;
(function (ResinCardDataUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ResinCardDataUpdateNotify_CmdId[ResinCardDataUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4149;
     */
    ResinCardDataUpdateNotify_CmdId[ResinCardDataUpdateNotify_CmdId["CMD_ID"] = 4149] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ResinCardDataUpdateNotify_CmdId[ResinCardDataUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ResinCardDataUpdateNotify_CmdId[ResinCardDataUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ResinCardDataUpdateNotify_CmdId = exports.ResinCardDataUpdateNotify_CmdId || (exports.ResinCardDataUpdateNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class RechargeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RechargeReq", [
            { no: 10, name: "play_product", kind: "message", T: () => define_5.PlayProduct },
            { no: 8, name: "card_product", kind: "message", T: () => define_4.ShopCardProduct },
            { no: 14, name: "mcoin_product", kind: "message", T: () => define_3.ShopMcoinProduct },
            { no: 7, name: "concert_product", kind: "message", T: () => define_2.ShopConcertProduct }
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
                case /* optional com.midnights.game.PlayProduct play_product */ 10:
                    message.playProduct = define_5.PlayProduct.internalBinaryRead(reader, reader.uint32(), options, message.playProduct);
                    break;
                case /* optional com.midnights.game.ShopCardProduct card_product */ 8:
                    message.cardProduct = define_4.ShopCardProduct.internalBinaryRead(reader, reader.uint32(), options, message.cardProduct);
                    break;
                case /* optional com.midnights.game.ShopMcoinProduct mcoin_product */ 14:
                    message.mcoinProduct = define_3.ShopMcoinProduct.internalBinaryRead(reader, reader.uint32(), options, message.mcoinProduct);
                    break;
                case /* optional com.midnights.game.ShopConcertProduct concert_product */ 7:
                    message.concertProduct = define_2.ShopConcertProduct.internalBinaryRead(reader, reader.uint32(), options, message.concertProduct);
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
        /* optional com.midnights.game.PlayProduct play_product = 10; */
        if (message.playProduct)
            define_5.PlayProduct.internalBinaryWrite(message.playProduct, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ShopCardProduct card_product = 8; */
        if (message.cardProduct)
            define_4.ShopCardProduct.internalBinaryWrite(message.cardProduct, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ShopMcoinProduct mcoin_product = 14; */
        if (message.mcoinProduct)
            define_3.ShopMcoinProduct.internalBinaryWrite(message.mcoinProduct, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ShopConcertProduct concert_product = 7; */
        if (message.concertProduct)
            define_2.ShopConcertProduct.internalBinaryWrite(message.concertProduct, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RechargeReq
 */
exports.RechargeReq = new RechargeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RechargeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RechargeRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "is_show_minors_hint", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_show_minors_hint */ 6:
                    message.isShowMinorsHint = reader.bool();
                    break;
                case /* optional string product_id */ 2:
                    message.productId = reader.string();
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
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bool is_show_minors_hint = 6; */
        if (message.isShowMinorsHint !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isShowMinorsHint);
        /* optional string product_id = 2; */
        if (message.productId !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.productId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RechargeRsp
 */
exports.RechargeRsp = new RechargeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OrderFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OrderFinishNotify", [
            { no: 3, name: "order_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "card_product_remain_days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam },
            { no: 7, name: "add_mcoin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { itemList: [] };
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
                case /* optional uint32 order_id */ 3:
                    message.orderId = reader.uint32();
                    break;
                case /* optional uint32 card_product_remain_days */ 15:
                    message.cardProductRemainDays = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 9:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 add_mcoin */ 7:
                    message.addMcoin = reader.uint32();
                    break;
                case /* optional string product_id */ 6:
                    message.productId = reader.string();
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
        /* optional uint32 order_id = 3; */
        if (message.orderId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.orderId);
        /* optional uint32 card_product_remain_days = 15; */
        if (message.cardProductRemainDays !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.cardProductRemainDays);
        /* repeated com.midnights.game.ItemParam item_list = 9; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 add_mcoin = 7; */
        if (message.addMcoin !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.addMcoin);
        /* optional string product_id = 6; */
        if (message.productId !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.productId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OrderFinishNotify
 */
exports.OrderFinishNotify = new OrderFinishNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CardProductRewardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CardProductRewardNotify", [
            { no: 6, name: "hcoin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "remain_days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 hcoin */ 6:
                    message.hcoin = reader.uint32();
                    break;
                case /* optional string product_id */ 14:
                    message.productId = reader.string();
                    break;
                case /* optional uint32 remain_days */ 1:
                    message.remainDays = reader.uint32();
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
        /* optional uint32 hcoin = 6; */
        if (message.hcoin !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.hcoin);
        /* optional string product_id = 14; */
        if (message.productId !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* optional uint32 remain_days = 1; */
        if (message.remainDays !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.remainDays);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CardProductRewardNotify
 */
exports.CardProductRewardNotify = new CardProductRewardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProductPriceTier$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProductPriceTier", [
            { no: 6, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string product_id */ 6:
                    message.productId = reader.string();
                    break;
                case /* optional string price_tier */ 12:
                    message.priceTier = reader.string();
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
        /* optional string product_id = 6; */
        if (message.productId !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* optional string price_tier = 12; */
        if (message.priceTier !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.priceTier);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProductPriceTier
 */
exports.ProductPriceTier = new ProductPriceTier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResinCardData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ResinCardData", [
            { no: 3, name: "remain_reward_days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "expire_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "last_daily_reward_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 remain_reward_days */ 3:
                    message.remainRewardDays = reader.uint32();
                    break;
                case /* optional uint32 expire_time */ 12:
                    message.expireTime = reader.uint32();
                    break;
                case /* optional uint32 last_daily_reward_time */ 2:
                    message.lastDailyRewardTime = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 7:
                    message.configId = reader.uint32();
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
        /* optional uint32 remain_reward_days = 3; */
        if (message.remainRewardDays !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.remainRewardDays);
        /* optional uint32 expire_time = 12; */
        if (message.expireTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.expireTime);
        /* optional uint32 last_daily_reward_time = 2; */
        if (message.lastDailyRewardTime !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.lastDailyRewardTime);
        /* optional uint32 config_id = 7; */
        if (message.configId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ResinCardData
 */
exports.ResinCardData = new ResinCardData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerRechargeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerRechargeDataNotify", [
            { no: 12, name: "card_product_remain_days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "product_price_tier_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ProductPriceTier }
        ]);
    }
    create(value) {
        const message = { productPriceTierList: [] };
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
                case /* optional uint32 card_product_remain_days */ 12:
                    message.cardProductRemainDays = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ProductPriceTier product_price_tier_list */ 11:
                    message.productPriceTierList.push(exports.ProductPriceTier.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 card_product_remain_days = 12; */
        if (message.cardProductRemainDays !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cardProductRemainDays);
        /* repeated com.midnights.game.ProductPriceTier product_price_tier_list = 11; */
        for (let i = 0; i < message.productPriceTierList.length; i++)
            exports.ProductPriceTier.internalBinaryWrite(message.productPriceTierList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerRechargeDataNotify
 */
exports.PlayerRechargeDataNotify = new PlayerRechargeDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OrderDisplayNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OrderDisplayNotify", [
            { no: 1, name: "order_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 order_id */ 1:
                    message.orderId = reader.uint32();
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
        /* optional uint32 order_id = 1; */
        if (message.orderId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.orderId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OrderDisplayNotify
 */
exports.OrderDisplayNotify = new OrderDisplayNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReportTrackingIOInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReportTrackingIOInfoNotify", [
            { no: 12, name: "rydevicetype", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "deviceid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "client_tz", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "appid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "mac", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string rydevicetype */ 12:
                    message.rydevicetype = reader.string();
                    break;
                case /* optional string deviceid */ 1:
                    message.deviceid = reader.string();
                    break;
                case /* optional string client_tz */ 13:
                    message.clientTz = reader.string();
                    break;
                case /* optional string appid */ 14:
                    message.appid = reader.string();
                    break;
                case /* optional string mac */ 15:
                    message.mac = reader.string();
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
        /* optional string rydevicetype = 12; */
        if (message.rydevicetype !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.rydevicetype);
        /* optional string deviceid = 1; */
        if (message.deviceid !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.deviceid);
        /* optional string client_tz = 13; */
        if (message.clientTz !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.clientTz);
        /* optional string appid = 14; */
        if (message.appid !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.appid);
        /* optional string mac = 15; */
        if (message.mac !== undefined)
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.mac);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReportTrackingIOInfoNotify
 */
exports.ReportTrackingIOInfoNotify = new ReportTrackingIOInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeResinCardDailyRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeResinCardDailyRewardReq", [
            { no: 14, name: "product_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 product_config_id */ 14:
                    message.productConfigId = reader.uint32();
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
        /* optional uint32 product_config_id = 14; */
        if (message.productConfigId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.productConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeResinCardDailyRewardReq
 */
exports.TakeResinCardDailyRewardReq = new TakeResinCardDailyRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeResinCardDailyRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeResinCardDailyRewardRsp", [
            { no: 6, name: "item_vec", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "product_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { itemVec: [] };
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
                case /* repeated com.midnights.game.ItemParam item_vec */ 6:
                    message.itemVec.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 product_config_id */ 12:
                    message.productConfigId = reader.uint32();
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
        /* repeated com.midnights.game.ItemParam item_vec = 6; */
        for (let i = 0; i < message.itemVec.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemVec[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 product_config_id = 12; */
        if (message.productConfigId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.productConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeResinCardDailyRewardRsp
 */
exports.TakeResinCardDailyRewardRsp = new TakeResinCardDailyRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResinCardDataUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ResinCardDataUpdateNotify", [
            { no: 6, name: "today_start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "card_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ResinCardData }
        ]);
    }
    create(value) {
        const message = { cardDataList: [] };
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
                case /* optional uint32 today_start_time */ 6:
                    message.todayStartTime = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ResinCardData card_data_list */ 2:
                    message.cardDataList.push(exports.ResinCardData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 today_start_time = 6; */
        if (message.todayStartTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.todayStartTime);
        /* repeated com.midnights.game.ResinCardData card_data_list = 2; */
        for (let i = 0; i < message.cardDataList.length; i++)
            exports.ResinCardData.internalBinaryWrite(message.cardDataList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ResinCardDataUpdateNotify
 */
exports.ResinCardDataUpdateNotify = new ResinCardDataUpdateNotify$Type();
