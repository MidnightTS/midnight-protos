"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuntingGiveUpRsp = exports.HuntingGiveUpReq = exports.HuntingOngoingNotify = exports.HuntingFailNotify = exports.HuntingSuccessNotify = exports.HuntingRevealFinalNotify = exports.HuntingRevealClueNotify = exports.HuntingStartNotify = exports.GetHuntingOfferRewardRsp = exports.GetHuntingOfferRewardReq = exports.GetCityHuntingOfferRsp = exports.GetCityHuntingOfferReq = exports.HuntingOfferData = exports.TakeHuntingOfferRsp = exports.TakeHuntingOfferReq = exports.HuntingPair = exports.HuntingGiveUpRsp_CmdId = exports.HuntingGiveUpReq_CmdId = exports.HuntingOngoingNotify_CmdId = exports.HuntingFailNotify_CmdId = exports.HuntingSuccessNotify_CmdId = exports.HuntingRevealFinalNotify_CmdId = exports.HuntingRevealClueNotify_CmdId = exports.HuntingStartNotify_CmdId = exports.GetHuntingOfferRewardRsp_CmdId = exports.GetHuntingOfferRewardReq_CmdId = exports.GetCityHuntingOfferRsp_CmdId = exports.GetCityHuntingOfferReq_CmdId = exports.TakeHuntingOfferRsp_CmdId = exports.TakeHuntingOfferReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.TakeHuntingOfferReq.CmdId
 */
var TakeHuntingOfferReq_CmdId;
(function (TakeHuntingOfferReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeHuntingOfferReq_CmdId[TakeHuntingOfferReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4326;
     */
    TakeHuntingOfferReq_CmdId[TakeHuntingOfferReq_CmdId["CMD_ID"] = 4326] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeHuntingOfferReq_CmdId[TakeHuntingOfferReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeHuntingOfferReq_CmdId[TakeHuntingOfferReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeHuntingOfferReq_CmdId[TakeHuntingOfferReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeHuntingOfferReq_CmdId = exports.TakeHuntingOfferReq_CmdId || (exports.TakeHuntingOfferReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeHuntingOfferRsp.CmdId
 */
var TakeHuntingOfferRsp_CmdId;
(function (TakeHuntingOfferRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeHuntingOfferRsp_CmdId[TakeHuntingOfferRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4318;
     */
    TakeHuntingOfferRsp_CmdId[TakeHuntingOfferRsp_CmdId["CMD_ID"] = 4318] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeHuntingOfferRsp_CmdId[TakeHuntingOfferRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeHuntingOfferRsp_CmdId[TakeHuntingOfferRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeHuntingOfferRsp_CmdId = exports.TakeHuntingOfferRsp_CmdId || (exports.TakeHuntingOfferRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCityHuntingOfferReq.CmdId
 */
var GetCityHuntingOfferReq_CmdId;
(function (GetCityHuntingOfferReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityHuntingOfferReq_CmdId[GetCityHuntingOfferReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4325;
     */
    GetCityHuntingOfferReq_CmdId[GetCityHuntingOfferReq_CmdId["CMD_ID"] = 4325] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityHuntingOfferReq_CmdId[GetCityHuntingOfferReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityHuntingOfferReq_CmdId[GetCityHuntingOfferReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityHuntingOfferReq_CmdId[GetCityHuntingOfferReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetCityHuntingOfferReq_CmdId = exports.GetCityHuntingOfferReq_CmdId || (exports.GetCityHuntingOfferReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCityHuntingOfferRsp.CmdId
 */
var GetCityHuntingOfferRsp_CmdId;
(function (GetCityHuntingOfferRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityHuntingOfferRsp_CmdId[GetCityHuntingOfferRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4307;
     */
    GetCityHuntingOfferRsp_CmdId[GetCityHuntingOfferRsp_CmdId["CMD_ID"] = 4307] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityHuntingOfferRsp_CmdId[GetCityHuntingOfferRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityHuntingOfferRsp_CmdId[GetCityHuntingOfferRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetCityHuntingOfferRsp_CmdId = exports.GetCityHuntingOfferRsp_CmdId || (exports.GetCityHuntingOfferRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetHuntingOfferRewardReq.CmdId
 */
var GetHuntingOfferRewardReq_CmdId;
(function (GetHuntingOfferRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHuntingOfferRewardReq_CmdId[GetHuntingOfferRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4302;
     */
    GetHuntingOfferRewardReq_CmdId[GetHuntingOfferRewardReq_CmdId["CMD_ID"] = 4302] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHuntingOfferRewardReq_CmdId[GetHuntingOfferRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHuntingOfferRewardReq_CmdId[GetHuntingOfferRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHuntingOfferRewardReq_CmdId[GetHuntingOfferRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetHuntingOfferRewardReq_CmdId = exports.GetHuntingOfferRewardReq_CmdId || (exports.GetHuntingOfferRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetHuntingOfferRewardRsp.CmdId
 */
var GetHuntingOfferRewardRsp_CmdId;
(function (GetHuntingOfferRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHuntingOfferRewardRsp_CmdId[GetHuntingOfferRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4331;
     */
    GetHuntingOfferRewardRsp_CmdId[GetHuntingOfferRewardRsp_CmdId["CMD_ID"] = 4331] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetHuntingOfferRewardRsp_CmdId[GetHuntingOfferRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetHuntingOfferRewardRsp_CmdId[GetHuntingOfferRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetHuntingOfferRewardRsp_CmdId = exports.GetHuntingOfferRewardRsp_CmdId || (exports.GetHuntingOfferRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingStartNotify.CmdId
 */
var HuntingStartNotify_CmdId;
(function (HuntingStartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingStartNotify_CmdId[HuntingStartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4329;
     */
    HuntingStartNotify_CmdId[HuntingStartNotify_CmdId["CMD_ID"] = 4329] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingStartNotify_CmdId[HuntingStartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingStartNotify_CmdId[HuntingStartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HuntingStartNotify_CmdId = exports.HuntingStartNotify_CmdId || (exports.HuntingStartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingRevealClueNotify.CmdId
 */
var HuntingRevealClueNotify_CmdId;
(function (HuntingRevealClueNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingRevealClueNotify_CmdId[HuntingRevealClueNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4322;
     */
    HuntingRevealClueNotify_CmdId[HuntingRevealClueNotify_CmdId["CMD_ID"] = 4322] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingRevealClueNotify_CmdId[HuntingRevealClueNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingRevealClueNotify_CmdId[HuntingRevealClueNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HuntingRevealClueNotify_CmdId = exports.HuntingRevealClueNotify_CmdId || (exports.HuntingRevealClueNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingRevealFinalNotify.CmdId
 */
var HuntingRevealFinalNotify_CmdId;
(function (HuntingRevealFinalNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingRevealFinalNotify_CmdId[HuntingRevealFinalNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4344;
     */
    HuntingRevealFinalNotify_CmdId[HuntingRevealFinalNotify_CmdId["CMD_ID"] = 4344] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingRevealFinalNotify_CmdId[HuntingRevealFinalNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingRevealFinalNotify_CmdId[HuntingRevealFinalNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HuntingRevealFinalNotify_CmdId = exports.HuntingRevealFinalNotify_CmdId || (exports.HuntingRevealFinalNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingSuccessNotify.CmdId
 */
var HuntingSuccessNotify_CmdId;
(function (HuntingSuccessNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingSuccessNotify_CmdId[HuntingSuccessNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4349;
     */
    HuntingSuccessNotify_CmdId[HuntingSuccessNotify_CmdId["CMD_ID"] = 4349] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingSuccessNotify_CmdId[HuntingSuccessNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingSuccessNotify_CmdId[HuntingSuccessNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HuntingSuccessNotify_CmdId = exports.HuntingSuccessNotify_CmdId || (exports.HuntingSuccessNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingFailNotify.CmdId
 */
var HuntingFailNotify_CmdId;
(function (HuntingFailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingFailNotify_CmdId[HuntingFailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4320;
     */
    HuntingFailNotify_CmdId[HuntingFailNotify_CmdId["CMD_ID"] = 4320] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingFailNotify_CmdId[HuntingFailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingFailNotify_CmdId[HuntingFailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HuntingFailNotify_CmdId = exports.HuntingFailNotify_CmdId || (exports.HuntingFailNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingOngoingNotify.CmdId
 */
var HuntingOngoingNotify_CmdId;
(function (HuntingOngoingNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingOngoingNotify_CmdId[HuntingOngoingNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4345;
     */
    HuntingOngoingNotify_CmdId[HuntingOngoingNotify_CmdId["CMD_ID"] = 4345] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingOngoingNotify_CmdId[HuntingOngoingNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingOngoingNotify_CmdId[HuntingOngoingNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HuntingOngoingNotify_CmdId = exports.HuntingOngoingNotify_CmdId || (exports.HuntingOngoingNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingGiveUpReq.CmdId
 */
var HuntingGiveUpReq_CmdId;
(function (HuntingGiveUpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingGiveUpReq_CmdId[HuntingGiveUpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4341;
     */
    HuntingGiveUpReq_CmdId[HuntingGiveUpReq_CmdId["CMD_ID"] = 4341] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingGiveUpReq_CmdId[HuntingGiveUpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingGiveUpReq_CmdId[HuntingGiveUpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingGiveUpReq_CmdId[HuntingGiveUpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HuntingGiveUpReq_CmdId = exports.HuntingGiveUpReq_CmdId || (exports.HuntingGiveUpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HuntingGiveUpRsp.CmdId
 */
var HuntingGiveUpRsp_CmdId;
(function (HuntingGiveUpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingGiveUpRsp_CmdId[HuntingGiveUpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4342;
     */
    HuntingGiveUpRsp_CmdId[HuntingGiveUpRsp_CmdId["CMD_ID"] = 4342] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HuntingGiveUpRsp_CmdId[HuntingGiveUpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HuntingGiveUpRsp_CmdId[HuntingGiveUpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HuntingGiveUpRsp_CmdId = exports.HuntingGiveUpRsp_CmdId || (exports.HuntingGiveUpRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HuntingPair$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingPair", [
            { no: 9, name: "refresh_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "monster_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 refresh_id */ 9:
                    message.refreshId = reader.uint32();
                    break;
                case /* optional uint32 monster_config_id */ 4:
                    message.monsterConfigId = reader.uint32();
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
        /* optional uint32 refresh_id = 9; */
        if (message.refreshId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.refreshId);
        /* optional uint32 monster_config_id = 4; */
        if (message.monsterConfigId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.monsterConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingPair
 */
exports.HuntingPair = new HuntingPair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeHuntingOfferReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeHuntingOfferReq", [
            { no: 14, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 4, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 14:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional uint32 city_id */ 4:
                    message.cityId = reader.uint32();
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
        /* optional com.midnights.game.HuntingPair hunting_pair = 14; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 city_id = 4; */
        if (message.cityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeHuntingOfferReq
 */
exports.TakeHuntingOfferReq = new TakeHuntingOfferReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeHuntingOfferRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeHuntingOfferRsp", [
            { no: 13, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 14, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 13:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional uint32 city_id */ 14:
                    message.cityId = reader.uint32();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.HuntingPair hunting_pair = 13; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 city_id = 14; */
        if (message.cityId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cityId);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeHuntingOfferRsp
 */
exports.TakeHuntingOfferRsp = new TakeHuntingOfferRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingOfferData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingOfferData", [
            { no: 4, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 8, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.HuntingOfferState", define_2.HuntingOfferState, "HUNTING_OFFER_STATE_"] }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 4:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional uint32 city_id */ 8:
                    message.cityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.HuntingOfferState state */ 1:
                    message.state = reader.int32();
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
        /* optional com.midnights.game.HuntingPair hunting_pair = 4; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 city_id = 8; */
        if (message.cityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cityId);
        /* optional com.midnights.game.HuntingOfferState state = 1; */
        if (message.state !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingOfferData
 */
exports.HuntingOfferData = new HuntingOfferData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCityHuntingOfferReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCityHuntingOfferReq", [
            { no: 9, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 9:
                    message.cityId = reader.uint32();
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
        /* optional uint32 city_id = 9; */
        if (message.cityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetCityHuntingOfferReq
 */
exports.GetCityHuntingOfferReq = new GetCityHuntingOfferReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCityHuntingOfferRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCityHuntingOfferRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "hunting_offer_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HuntingOfferData },
            { no: 2, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "ongoing_hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 1, name: "cur_week_finished_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { huntingOfferList: [] };
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
                case /* optional int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.HuntingOfferData hunting_offer_list */ 13:
                    message.huntingOfferList.push(exports.HuntingOfferData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 city_id */ 2:
                    message.cityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.HuntingPair ongoing_hunting_pair */ 8:
                    message.ongoingHuntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.ongoingHuntingPair);
                    break;
                case /* optional uint32 cur_week_finished_count */ 1:
                    message.curWeekFinishedCount = reader.uint32();
                    break;
                case /* optional uint32 next_refresh_time */ 4:
                    message.nextRefreshTime = reader.uint32();
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
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.HuntingOfferData hunting_offer_list = 13; */
        for (let i = 0; i < message.huntingOfferList.length; i++)
            exports.HuntingOfferData.internalBinaryWrite(message.huntingOfferList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 city_id = 2; */
        if (message.cityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cityId);
        /* optional com.midnights.game.HuntingPair ongoing_hunting_pair = 8; */
        if (message.ongoingHuntingPair)
            exports.HuntingPair.internalBinaryWrite(message.ongoingHuntingPair, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 cur_week_finished_count = 1; */
        if (message.curWeekFinishedCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.curWeekFinishedCount);
        /* optional uint32 next_refresh_time = 4; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetCityHuntingOfferRsp
 */
exports.GetCityHuntingOfferRsp = new GetCityHuntingOfferRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHuntingOfferRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetHuntingOfferRewardReq", [
            { no: 6, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair }
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
                case /* optional uint32 city_id */ 6:
                    message.cityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 4:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
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
        /* optional uint32 city_id = 6; */
        if (message.cityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cityId);
        /* optional com.midnights.game.HuntingPair hunting_pair = 4; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetHuntingOfferRewardReq
 */
exports.GetHuntingOfferRewardReq = new GetHuntingOfferRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetHuntingOfferRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetHuntingOfferRewardRsp", [
            { no: 14, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 3, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 14:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional uint32 city_id */ 3:
                    message.cityId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 12:
                    message.retcode = reader.int32();
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
        /* optional com.midnights.game.HuntingPair hunting_pair = 14; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 city_id = 3; */
        if (message.cityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.cityId);
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetHuntingOfferRewardRsp
 */
exports.GetHuntingOfferRewardRsp = new GetHuntingOfferRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingStartNotify", [
            { no: 4, name: "clue_position", kind: "message", T: () => define_1.Vector },
            { no: 15, name: "fail_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 8, name: "is_final", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional com.midnights.game.Vector clue_position */ 4:
                    message.cluePosition = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.cluePosition);
                    break;
                case /* optional uint32 fail_time */ 15:
                    message.failTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 3:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional bool is_final */ 8:
                    message.isFinal = reader.bool();
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
        /* optional com.midnights.game.Vector clue_position = 4; */
        if (message.cluePosition)
            define_1.Vector.internalBinaryWrite(message.cluePosition, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 fail_time = 15; */
        if (message.failTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.failTime);
        /* optional com.midnights.game.HuntingPair hunting_pair = 3; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_final = 8; */
        if (message.isFinal !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isFinal);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingStartNotify
 */
exports.HuntingStartNotify = new HuntingStartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingRevealClueNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingRevealClueNotify", [
            { no: 5, name: "finish_clue_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "clue_position", kind: "message", T: () => define_1.Vector },
            { no: 12, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 7, name: "finished_group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 finish_clue_count */ 5:
                    message.finishClueCount = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector clue_position */ 4:
                    message.cluePosition = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.cluePosition);
                    break;
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 12:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional uint32 finished_group_id */ 7:
                    message.finishedGroupId = reader.uint32();
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
        /* optional uint32 finish_clue_count = 5; */
        if (message.finishClueCount !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.finishClueCount);
        /* optional com.midnights.game.Vector clue_position = 4; */
        if (message.cluePosition)
            define_1.Vector.internalBinaryWrite(message.cluePosition, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.HuntingPair hunting_pair = 12; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 finished_group_id = 7; */
        if (message.finishedGroupId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.finishedGroupId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingRevealClueNotify
 */
exports.HuntingRevealClueNotify = new HuntingRevealClueNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingRevealFinalNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingRevealFinalNotify", [
            { no: 5, name: "finished_group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 2, name: "final_position", kind: "message", T: () => define_1.Vector }
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
                case /* optional uint32 finished_group_id */ 5:
                    message.finishedGroupId = reader.uint32();
                    break;
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 11:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional com.midnights.game.Vector final_position */ 2:
                    message.finalPosition = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.finalPosition);
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
        /* optional uint32 finished_group_id = 5; */
        if (message.finishedGroupId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.finishedGroupId);
        /* optional com.midnights.game.HuntingPair hunting_pair = 11; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector final_position = 2; */
        if (message.finalPosition)
            define_1.Vector.internalBinaryWrite(message.finalPosition, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingRevealFinalNotify
 */
exports.HuntingRevealFinalNotify = new HuntingRevealFinalNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingSuccessNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingSuccessNotify", [
            { no: 4, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 4:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
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
        /* optional com.midnights.game.HuntingPair hunting_pair = 4; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingSuccessNotify
 */
exports.HuntingSuccessNotify = new HuntingSuccessNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingFailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingFailNotify", [
            { no: 12, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 12:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
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
        /* optional com.midnights.game.HuntingPair hunting_pair = 12; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingFailNotify
 */
exports.HuntingFailNotify = new HuntingFailNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingOngoingNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingOngoingNotify", [
            { no: 15, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair },
            { no: 8, name: "is_started", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "next_position", kind: "message", T: () => define_1.Vector },
            { no: 10, name: "finish_clue_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_final", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "fail_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 15:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* optional bool is_started */ 8:
                    message.isStarted = reader.bool();
                    break;
                case /* optional com.midnights.game.Vector next_position */ 3:
                    message.nextPosition = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.nextPosition);
                    break;
                case /* optional uint32 finish_clue_count */ 10:
                    message.finishClueCount = reader.uint32();
                    break;
                case /* optional bool is_final */ 14:
                    message.isFinal = reader.bool();
                    break;
                case /* optional uint32 fail_time */ 7:
                    message.failTime = reader.uint32();
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
        /* optional com.midnights.game.HuntingPair hunting_pair = 15; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_started = 8; */
        if (message.isStarted !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isStarted);
        /* optional com.midnights.game.Vector next_position = 3; */
        if (message.nextPosition)
            define_1.Vector.internalBinaryWrite(message.nextPosition, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 finish_clue_count = 10; */
        if (message.finishClueCount !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.finishClueCount);
        /* optional bool is_final = 14; */
        if (message.isFinal !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isFinal);
        /* optional uint32 fail_time = 7; */
        if (message.failTime !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.failTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingOngoingNotify
 */
exports.HuntingOngoingNotify = new HuntingOngoingNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingGiveUpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingGiveUpReq", [
            { no: 1, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair }
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
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 1:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
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
        /* optional com.midnights.game.HuntingPair hunting_pair = 1; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingGiveUpReq
 */
exports.HuntingGiveUpReq = new HuntingGiveUpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HuntingGiveUpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HuntingGiveUpRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "hunting_pair", kind: "message", T: () => exports.HuntingPair }
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
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.HuntingPair hunting_pair */ 4:
                    message.huntingPair = exports.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
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
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.HuntingPair hunting_pair = 4; */
        if (message.huntingPair)
            exports.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HuntingGiveUpRsp
 */
exports.HuntingGiveUpRsp = new HuntingGiveUpRsp$Type();
