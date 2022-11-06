"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationDataNotify = exports.CityReputationSimpleInfo = exports.TakeCityReputationExploreRewardRsp = exports.TakeCityReputationExploreRewardReq = exports.GetCityReputationMapInfoRsp = exports.GetCityReputationMapInfoReq = exports.CancelCityReputationRequestRsp = exports.CancelCityReputationRequestReq = exports.AcceptCityReputationRequestRsp = exports.AcceptCityReputationRequestReq = exports.TakeCityReputationParentQuestRsp = exports.TakeCityReputationParentQuestReq = exports.CityReputationLevelupNotify = exports.TakeCityReputationLevelRewardRsp = exports.TakeCityReputationLevelRewardReq = exports.GetCityReputationInfoRsp = exports.GetCityReputationInfoReq = exports.CityReputationInfo = exports.CityReputationHuntInfo = exports.CityReputationExploreInfo = exports.CityReputationRequestInfo_RequestInfo = exports.CityReputationRequestInfo = exports.CityReputationQuestInfo = exports.CityReputationDataNotify_CmdId = exports.TakeCityReputationExploreRewardRsp_CmdId = exports.TakeCityReputationExploreRewardReq_CmdId = exports.GetCityReputationMapInfoRsp_CmdId = exports.GetCityReputationMapInfoReq_CmdId = exports.CancelCityReputationRequestRsp_CmdId = exports.CancelCityReputationRequestReq_CmdId = exports.AcceptCityReputationRequestRsp_CmdId = exports.AcceptCityReputationRequestReq_CmdId = exports.TakeCityReputationParentQuestRsp_CmdId = exports.TakeCityReputationParentQuestReq_CmdId = exports.CityReputationLevelupNotify_CmdId = exports.TakeCityReputationLevelRewardRsp_CmdId = exports.TakeCityReputationLevelRewardReq_CmdId = exports.GetCityReputationInfoRsp_CmdId = exports.GetCityReputationInfoReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.GetCityReputationInfoReq.CmdId
 */
var GetCityReputationInfoReq_CmdId;
(function (GetCityReputationInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationInfoReq_CmdId[GetCityReputationInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2872;
     */
    GetCityReputationInfoReq_CmdId[GetCityReputationInfoReq_CmdId["CMD_ID"] = 2872] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationInfoReq_CmdId[GetCityReputationInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityReputationInfoReq_CmdId[GetCityReputationInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityReputationInfoReq_CmdId[GetCityReputationInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetCityReputationInfoReq_CmdId = exports.GetCityReputationInfoReq_CmdId || (exports.GetCityReputationInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCityReputationInfoRsp.CmdId
 */
var GetCityReputationInfoRsp_CmdId;
(function (GetCityReputationInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationInfoRsp_CmdId[GetCityReputationInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2898;
     */
    GetCityReputationInfoRsp_CmdId[GetCityReputationInfoRsp_CmdId["CMD_ID"] = 2898] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationInfoRsp_CmdId[GetCityReputationInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityReputationInfoRsp_CmdId[GetCityReputationInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetCityReputationInfoRsp_CmdId = exports.GetCityReputationInfoRsp_CmdId || (exports.GetCityReputationInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCityReputationLevelRewardReq.CmdId
 */
var TakeCityReputationLevelRewardReq_CmdId;
(function (TakeCityReputationLevelRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationLevelRewardReq_CmdId[TakeCityReputationLevelRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2812;
     */
    TakeCityReputationLevelRewardReq_CmdId[TakeCityReputationLevelRewardReq_CmdId["CMD_ID"] = 2812] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationLevelRewardReq_CmdId[TakeCityReputationLevelRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationLevelRewardReq_CmdId[TakeCityReputationLevelRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationLevelRewardReq_CmdId[TakeCityReputationLevelRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeCityReputationLevelRewardReq_CmdId = exports.TakeCityReputationLevelRewardReq_CmdId || (exports.TakeCityReputationLevelRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCityReputationLevelRewardRsp.CmdId
 */
var TakeCityReputationLevelRewardRsp_CmdId;
(function (TakeCityReputationLevelRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationLevelRewardRsp_CmdId[TakeCityReputationLevelRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2835;
     */
    TakeCityReputationLevelRewardRsp_CmdId[TakeCityReputationLevelRewardRsp_CmdId["CMD_ID"] = 2835] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationLevelRewardRsp_CmdId[TakeCityReputationLevelRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationLevelRewardRsp_CmdId[TakeCityReputationLevelRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeCityReputationLevelRewardRsp_CmdId = exports.TakeCityReputationLevelRewardRsp_CmdId || (exports.TakeCityReputationLevelRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CityReputationLevelupNotify.CmdId
 */
var CityReputationLevelupNotify_CmdId;
(function (CityReputationLevelupNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CityReputationLevelupNotify_CmdId[CityReputationLevelupNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2807;
     */
    CityReputationLevelupNotify_CmdId[CityReputationLevelupNotify_CmdId["CMD_ID"] = 2807] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CityReputationLevelupNotify_CmdId[CityReputationLevelupNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CityReputationLevelupNotify_CmdId[CityReputationLevelupNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CityReputationLevelupNotify_CmdId = exports.CityReputationLevelupNotify_CmdId || (exports.CityReputationLevelupNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCityReputationParentQuestReq.CmdId
 */
var TakeCityReputationParentQuestReq_CmdId;
(function (TakeCityReputationParentQuestReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationParentQuestReq_CmdId[TakeCityReputationParentQuestReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2821;
     */
    TakeCityReputationParentQuestReq_CmdId[TakeCityReputationParentQuestReq_CmdId["CMD_ID"] = 2821] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationParentQuestReq_CmdId[TakeCityReputationParentQuestReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationParentQuestReq_CmdId[TakeCityReputationParentQuestReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationParentQuestReq_CmdId[TakeCityReputationParentQuestReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeCityReputationParentQuestReq_CmdId = exports.TakeCityReputationParentQuestReq_CmdId || (exports.TakeCityReputationParentQuestReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCityReputationParentQuestRsp.CmdId
 */
var TakeCityReputationParentQuestRsp_CmdId;
(function (TakeCityReputationParentQuestRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationParentQuestRsp_CmdId[TakeCityReputationParentQuestRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2803;
     */
    TakeCityReputationParentQuestRsp_CmdId[TakeCityReputationParentQuestRsp_CmdId["CMD_ID"] = 2803] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationParentQuestRsp_CmdId[TakeCityReputationParentQuestRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationParentQuestRsp_CmdId[TakeCityReputationParentQuestRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationParentQuestRsp_CmdId[TakeCityReputationParentQuestRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeCityReputationParentQuestRsp_CmdId = exports.TakeCityReputationParentQuestRsp_CmdId || (exports.TakeCityReputationParentQuestRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AcceptCityReputationRequestReq.CmdId
 */
var AcceptCityReputationRequestReq_CmdId;
(function (AcceptCityReputationRequestReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AcceptCityReputationRequestReq_CmdId[AcceptCityReputationRequestReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2890;
     */
    AcceptCityReputationRequestReq_CmdId[AcceptCityReputationRequestReq_CmdId["CMD_ID"] = 2890] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AcceptCityReputationRequestReq_CmdId[AcceptCityReputationRequestReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AcceptCityReputationRequestReq_CmdId[AcceptCityReputationRequestReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AcceptCityReputationRequestReq_CmdId[AcceptCityReputationRequestReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AcceptCityReputationRequestReq_CmdId = exports.AcceptCityReputationRequestReq_CmdId || (exports.AcceptCityReputationRequestReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AcceptCityReputationRequestRsp.CmdId
 */
var AcceptCityReputationRequestRsp_CmdId;
(function (AcceptCityReputationRequestRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AcceptCityReputationRequestRsp_CmdId[AcceptCityReputationRequestRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2873;
     */
    AcceptCityReputationRequestRsp_CmdId[AcceptCityReputationRequestRsp_CmdId["CMD_ID"] = 2873] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AcceptCityReputationRequestRsp_CmdId[AcceptCityReputationRequestRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AcceptCityReputationRequestRsp_CmdId[AcceptCityReputationRequestRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AcceptCityReputationRequestRsp_CmdId = exports.AcceptCityReputationRequestRsp_CmdId || (exports.AcceptCityReputationRequestRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CancelCityReputationRequestReq.CmdId
 */
var CancelCityReputationRequestReq_CmdId;
(function (CancelCityReputationRequestReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCityReputationRequestReq_CmdId[CancelCityReputationRequestReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2899;
     */
    CancelCityReputationRequestReq_CmdId[CancelCityReputationRequestReq_CmdId["CMD_ID"] = 2899] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCityReputationRequestReq_CmdId[CancelCityReputationRequestReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CancelCityReputationRequestReq_CmdId[CancelCityReputationRequestReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CancelCityReputationRequestReq_CmdId[CancelCityReputationRequestReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CancelCityReputationRequestReq_CmdId = exports.CancelCityReputationRequestReq_CmdId || (exports.CancelCityReputationRequestReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CancelCityReputationRequestRsp.CmdId
 */
var CancelCityReputationRequestRsp_CmdId;
(function (CancelCityReputationRequestRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCityReputationRequestRsp_CmdId[CancelCityReputationRequestRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2831;
     */
    CancelCityReputationRequestRsp_CmdId[CancelCityReputationRequestRsp_CmdId["CMD_ID"] = 2831] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCityReputationRequestRsp_CmdId[CancelCityReputationRequestRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CancelCityReputationRequestRsp_CmdId[CancelCityReputationRequestRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CancelCityReputationRequestRsp_CmdId = exports.CancelCityReputationRequestRsp_CmdId || (exports.CancelCityReputationRequestRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCityReputationMapInfoReq.CmdId
 */
var GetCityReputationMapInfoReq_CmdId;
(function (GetCityReputationMapInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationMapInfoReq_CmdId[GetCityReputationMapInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2875;
     */
    GetCityReputationMapInfoReq_CmdId[GetCityReputationMapInfoReq_CmdId["CMD_ID"] = 2875] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationMapInfoReq_CmdId[GetCityReputationMapInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityReputationMapInfoReq_CmdId[GetCityReputationMapInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityReputationMapInfoReq_CmdId[GetCityReputationMapInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetCityReputationMapInfoReq_CmdId = exports.GetCityReputationMapInfoReq_CmdId || (exports.GetCityReputationMapInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCityReputationMapInfoRsp.CmdId
 */
var GetCityReputationMapInfoRsp_CmdId;
(function (GetCityReputationMapInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationMapInfoRsp_CmdId[GetCityReputationMapInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2848;
     */
    GetCityReputationMapInfoRsp_CmdId[GetCityReputationMapInfoRsp_CmdId["CMD_ID"] = 2848] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCityReputationMapInfoRsp_CmdId[GetCityReputationMapInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCityReputationMapInfoRsp_CmdId[GetCityReputationMapInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetCityReputationMapInfoRsp_CmdId = exports.GetCityReputationMapInfoRsp_CmdId || (exports.GetCityReputationMapInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCityReputationExploreRewardReq.CmdId
 */
var TakeCityReputationExploreRewardReq_CmdId;
(function (TakeCityReputationExploreRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationExploreRewardReq_CmdId[TakeCityReputationExploreRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2897;
     */
    TakeCityReputationExploreRewardReq_CmdId[TakeCityReputationExploreRewardReq_CmdId["CMD_ID"] = 2897] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationExploreRewardReq_CmdId[TakeCityReputationExploreRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationExploreRewardReq_CmdId[TakeCityReputationExploreRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationExploreRewardReq_CmdId[TakeCityReputationExploreRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeCityReputationExploreRewardReq_CmdId = exports.TakeCityReputationExploreRewardReq_CmdId || (exports.TakeCityReputationExploreRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCityReputationExploreRewardRsp.CmdId
 */
var TakeCityReputationExploreRewardRsp_CmdId;
(function (TakeCityReputationExploreRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationExploreRewardRsp_CmdId[TakeCityReputationExploreRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2881;
     */
    TakeCityReputationExploreRewardRsp_CmdId[TakeCityReputationExploreRewardRsp_CmdId["CMD_ID"] = 2881] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCityReputationExploreRewardRsp_CmdId[TakeCityReputationExploreRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCityReputationExploreRewardRsp_CmdId[TakeCityReputationExploreRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeCityReputationExploreRewardRsp_CmdId = exports.TakeCityReputationExploreRewardRsp_CmdId || (exports.TakeCityReputationExploreRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CityReputationDataNotify.CmdId
 */
var CityReputationDataNotify_CmdId;
(function (CityReputationDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CityReputationDataNotify_CmdId[CityReputationDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2805;
     */
    CityReputationDataNotify_CmdId[CityReputationDataNotify_CmdId["CMD_ID"] = 2805] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CityReputationDataNotify_CmdId[CityReputationDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CityReputationDataNotify_CmdId[CityReputationDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CityReputationDataNotify_CmdId = exports.CityReputationDataNotify_CmdId || (exports.CityReputationDataNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationQuestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationQuestInfo", [
            { no: 2, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "taken_parent_quest_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "finished_parent_quest_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { takenParentQuestRewardList: [], finishedParentQuestList: [] };
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
                case /* optional bool is_open */ 2:
                    message.isOpen = reader.bool();
                    break;
                case /* repeated uint32 taken_parent_quest_reward_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenParentQuestRewardList.push(reader.uint32());
                    else
                        message.takenParentQuestRewardList.push(reader.uint32());
                    break;
                case /* repeated uint32 finished_parent_quest_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedParentQuestList.push(reader.uint32());
                    else
                        message.finishedParentQuestList.push(reader.uint32());
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
        /* optional bool is_open = 2; */
        if (message.isOpen !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isOpen);
        /* repeated uint32 taken_parent_quest_reward_list = 12; */
        if (message.takenParentQuestRewardList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenParentQuestRewardList.length; i++)
                writer.uint32(message.takenParentQuestRewardList[i]);
            writer.join();
        }
        /* repeated uint32 finished_parent_quest_list = 7; */
        if (message.finishedParentQuestList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedParentQuestList.length; i++)
                writer.uint32(message.finishedParentQuestList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationQuestInfo
 */
exports.CityReputationQuestInfo = new CityReputationQuestInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationRequestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationRequestInfo", [
            { no: 2, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "request_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CityReputationRequestInfo_RequestInfo }
        ]);
    }
    create(value) {
        const message = { requestInfoList: [] };
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
                case /* optional bool is_open */ 2:
                    message.isOpen = reader.bool();
                    break;
                case /* repeated com.midnights.game.CityReputationRequestInfo.RequestInfo request_info_list */ 1:
                    message.requestInfoList.push(exports.CityReputationRequestInfo_RequestInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool is_open = 2; */
        if (message.isOpen !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isOpen);
        /* repeated com.midnights.game.CityReputationRequestInfo.RequestInfo request_info_list = 1; */
        for (let i = 0; i < message.requestInfoList.length; i++)
            exports.CityReputationRequestInfo_RequestInfo.internalBinaryWrite(message.requestInfoList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationRequestInfo
 */
exports.CityReputationRequestInfo = new CityReputationRequestInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationRequestInfo_RequestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationRequestInfo.RequestInfo", [
            { no: 3, name: "request_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_taken_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 request_id */ 3:
                    message.requestId = reader.uint32();
                    break;
                case /* optional uint32 quest_id */ 9:
                    message.questId = reader.uint32();
                    break;
                case /* optional bool is_taken_reward */ 6:
                    message.isTakenReward = reader.bool();
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
        /* optional uint32 request_id = 3; */
        if (message.requestId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.requestId);
        /* optional uint32 quest_id = 9; */
        if (message.questId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.questId);
        /* optional bool is_taken_reward = 6; */
        if (message.isTakenReward !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isTakenReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationRequestInfo.RequestInfo
 */
exports.CityReputationRequestInfo_RequestInfo = new CityReputationRequestInfo_RequestInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationExploreInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationExploreInfo", [
            { no: 2, name: "taken_explore_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "explore_percent", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { takenExploreRewardList: [] };
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
                case /* repeated uint32 taken_explore_reward_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenExploreRewardList.push(reader.uint32());
                    else
                        message.takenExploreRewardList.push(reader.uint32());
                    break;
                case /* optional uint32 explore_percent */ 14:
                    message.explorePercent = reader.uint32();
                    break;
                case /* optional bool is_open */ 15:
                    message.isOpen = reader.bool();
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
        /* repeated uint32 taken_explore_reward_list = 2; */
        if (message.takenExploreRewardList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenExploreRewardList.length; i++)
                writer.uint32(message.takenExploreRewardList[i]);
            writer.join();
        }
        /* optional uint32 explore_percent = 14; */
        if (message.explorePercent !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.explorePercent);
        /* optional bool is_open = 15; */
        if (message.isOpen !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationExploreInfo
 */
exports.CityReputationExploreInfo = new CityReputationExploreInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationHuntInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationHuntInfo", [
            { no: 6, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "cur_week_finish_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "has_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_open */ 6:
                    message.isOpen = reader.bool();
                    break;
                case /* optional uint32 cur_week_finish_num */ 15:
                    message.curWeekFinishNum = reader.uint32();
                    break;
                case /* optional bool has_reward */ 5:
                    message.hasReward = reader.bool();
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
        /* optional bool is_open = 6; */
        if (message.isOpen !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isOpen);
        /* optional uint32 cur_week_finish_num = 15; */
        if (message.curWeekFinishNum !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.curWeekFinishNum);
        /* optional bool has_reward = 5; */
        if (message.hasReward !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.hasReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationHuntInfo
 */
exports.CityReputationHuntInfo = new CityReputationHuntInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationInfo", [
            { no: 4, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "hunt_info", kind: "message", T: () => exports.CityReputationHuntInfo },
            { no: 2, name: "taken_level_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "total_accept_request_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "request_info", kind: "message", T: () => exports.CityReputationRequestInfo },
            { no: 9, name: "quest_info", kind: "message", T: () => exports.CityReputationQuestInfo },
            { no: 13, name: "exp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "explore_info", kind: "message", T: () => exports.CityReputationExploreInfo }
        ]);
    }
    create(value) {
        const message = { takenLevelRewardList: [] };
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
                case /* optional uint32 level */ 4:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 next_refresh_time */ 3:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.CityReputationHuntInfo hunt_info */ 11:
                    message.huntInfo = exports.CityReputationHuntInfo.internalBinaryRead(reader, reader.uint32(), options, message.huntInfo);
                    break;
                case /* repeated uint32 taken_level_reward_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenLevelRewardList.push(reader.uint32());
                    else
                        message.takenLevelRewardList.push(reader.uint32());
                    break;
                case /* optional uint32 total_accept_request_num */ 6:
                    message.totalAcceptRequestNum = reader.uint32();
                    break;
                case /* optional com.midnights.game.CityReputationRequestInfo request_info */ 5:
                    message.requestInfo = exports.CityReputationRequestInfo.internalBinaryRead(reader, reader.uint32(), options, message.requestInfo);
                    break;
                case /* optional com.midnights.game.CityReputationQuestInfo quest_info */ 9:
                    message.questInfo = exports.CityReputationQuestInfo.internalBinaryRead(reader, reader.uint32(), options, message.questInfo);
                    break;
                case /* optional uint32 exp */ 13:
                    message.exp = reader.uint32();
                    break;
                case /* optional com.midnights.game.CityReputationExploreInfo explore_info */ 10:
                    message.exploreInfo = exports.CityReputationExploreInfo.internalBinaryRead(reader, reader.uint32(), options, message.exploreInfo);
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
        /* optional uint32 level = 4; */
        if (message.level !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 next_refresh_time = 3; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* optional com.midnights.game.CityReputationHuntInfo hunt_info = 11; */
        if (message.huntInfo)
            exports.CityReputationHuntInfo.internalBinaryWrite(message.huntInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 taken_level_reward_list = 2; */
        if (message.takenLevelRewardList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenLevelRewardList.length; i++)
                writer.uint32(message.takenLevelRewardList[i]);
            writer.join();
        }
        /* optional uint32 total_accept_request_num = 6; */
        if (message.totalAcceptRequestNum !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.totalAcceptRequestNum);
        /* optional com.midnights.game.CityReputationRequestInfo request_info = 5; */
        if (message.requestInfo)
            exports.CityReputationRequestInfo.internalBinaryWrite(message.requestInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.CityReputationQuestInfo quest_info = 9; */
        if (message.questInfo)
            exports.CityReputationQuestInfo.internalBinaryWrite(message.questInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 exp = 13; */
        if (message.exp !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.exp);
        /* optional com.midnights.game.CityReputationExploreInfo explore_info = 10; */
        if (message.exploreInfo)
            exports.CityReputationExploreInfo.internalBinaryWrite(message.exploreInfo, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationInfo
 */
exports.CityReputationInfo = new CityReputationInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCityReputationInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCityReputationInfoReq", [
            { no: 7, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 7:
                    message.cityId = reader.uint32();
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
        /* optional uint32 city_id = 7; */
        if (message.cityId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetCityReputationInfoReq
 */
exports.GetCityReputationInfoReq = new GetCityReputationInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCityReputationInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCityReputationInfoRsp", [
            { no: 1, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "city_reputation_info", kind: "message", T: () => exports.CityReputationInfo }
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
                case /* optional uint32 city_id */ 1:
                    message.cityId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.CityReputationInfo city_reputation_info */ 9:
                    message.cityReputationInfo = exports.CityReputationInfo.internalBinaryRead(reader, reader.uint32(), options, message.cityReputationInfo);
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
        /* optional uint32 city_id = 1; */
        if (message.cityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.cityId);
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.CityReputationInfo city_reputation_info = 9; */
        if (message.cityReputationInfo)
            exports.CityReputationInfo.internalBinaryWrite(message.cityReputationInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetCityReputationInfoRsp
 */
exports.GetCityReputationInfoRsp = new GetCityReputationInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCityReputationLevelRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCityReputationLevelRewardReq", [
            { no: 11, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 level */ 11:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 city_id */ 1:
                    message.cityId = reader.uint32();
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
        /* optional uint32 level = 11; */
        if (message.level !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 city_id = 1; */
        if (message.cityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCityReputationLevelRewardReq
 */
exports.TakeCityReputationLevelRewardReq = new TakeCityReputationLevelRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCityReputationLevelRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCityReputationLevelRewardRsp", [
            { no: 15, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam },
            { no: 9, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 15:
                    message.cityId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 13:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 level */ 9:
                    message.level = reader.uint32();
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
        /* optional uint32 city_id = 15; */
        if (message.cityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.cityId);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.ItemParam item_list = 13; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 level = 9; */
        if (message.level !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCityReputationLevelRewardRsp
 */
exports.TakeCityReputationLevelRewardRsp = new TakeCityReputationLevelRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationLevelupNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationLevelupNotify", [
            { no: 12, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 12:
                    message.cityId = reader.uint32();
                    break;
                case /* optional uint32 level */ 15:
                    message.level = reader.uint32();
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
        /* optional uint32 city_id = 12; */
        if (message.cityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.cityId);
        /* optional uint32 level = 15; */
        if (message.level !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationLevelupNotify
 */
exports.CityReputationLevelupNotify = new CityReputationLevelupNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCityReputationParentQuestReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCityReputationParentQuestReq", [
            { no: 1, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "parent_quest_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { parentQuestList: [] };
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
                case /* optional uint32 city_id */ 1:
                    message.cityId = reader.uint32();
                    break;
                case /* repeated uint32 parent_quest_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.parentQuestList.push(reader.uint32());
                    else
                        message.parentQuestList.push(reader.uint32());
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
        /* optional uint32 city_id = 1; */
        if (message.cityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.cityId);
        /* repeated uint32 parent_quest_list = 6; */
        if (message.parentQuestList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.parentQuestList.length; i++)
                writer.uint32(message.parentQuestList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCityReputationParentQuestReq
 */
exports.TakeCityReputationParentQuestReq = new TakeCityReputationParentQuestReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCityReputationParentQuestRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCityReputationParentQuestRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "parent_quest_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { parentQuestList: [], itemList: [] };
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
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 city_id */ 14:
                    message.cityId = reader.uint32();
                    break;
                case /* repeated uint32 parent_quest_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.parentQuestList.push(reader.uint32());
                    else
                        message.parentQuestList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 13:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 city_id = 14; */
        if (message.cityId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.cityId);
        /* repeated uint32 parent_quest_list = 9; */
        if (message.parentQuestList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.parentQuestList.length; i++)
                writer.uint32(message.parentQuestList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.ItemParam item_list = 13; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCityReputationParentQuestRsp
 */
exports.TakeCityReputationParentQuestRsp = new TakeCityReputationParentQuestRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AcceptCityReputationRequestReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AcceptCityReputationRequestReq", [
            { no: 14, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "request_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 14:
                    message.cityId = reader.uint32();
                    break;
                case /* optional uint32 request_id */ 5:
                    message.requestId = reader.uint32();
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
        /* optional uint32 city_id = 14; */
        if (message.cityId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.cityId);
        /* optional uint32 request_id = 5; */
        if (message.requestId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.requestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AcceptCityReputationRequestReq
 */
exports.AcceptCityReputationRequestReq = new AcceptCityReputationRequestReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AcceptCityReputationRequestRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AcceptCityReputationRequestRsp", [
            { no: 5, name: "request_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 request_id */ 5:
                    message.requestId = reader.uint32();
                    break;
                case /* optional uint32 city_id */ 13:
                    message.cityId = reader.uint32();
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
        /* optional uint32 request_id = 5; */
        if (message.requestId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.requestId);
        /* optional uint32 city_id = 13; */
        if (message.cityId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.cityId);
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
 * @generated MessageType for protobuf message com.midnights.game.AcceptCityReputationRequestRsp
 */
exports.AcceptCityReputationRequestRsp = new AcceptCityReputationRequestRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CancelCityReputationRequestReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CancelCityReputationRequestReq", [
            { no: 10, name: "request_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 request_id */ 10:
                    message.requestId = reader.uint32();
                    break;
                case /* optional uint32 city_id */ 6:
                    message.cityId = reader.uint32();
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
        /* optional uint32 request_id = 10; */
        if (message.requestId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.requestId);
        /* optional uint32 city_id = 6; */
        if (message.cityId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CancelCityReputationRequestReq
 */
exports.CancelCityReputationRequestReq = new CancelCityReputationRequestReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CancelCityReputationRequestRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CancelCityReputationRequestRsp", [
            { no: 3, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "request_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 3:
                    message.cityId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 request_id */ 12:
                    message.requestId = reader.uint32();
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
        /* optional uint32 city_id = 3; */
        if (message.cityId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.cityId);
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 request_id = 12; */
        if (message.requestId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.requestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CancelCityReputationRequestRsp
 */
exports.CancelCityReputationRequestRsp = new CancelCityReputationRequestRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCityReputationMapInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCityReputationMapInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetCityReputationMapInfoReq
 */
exports.GetCityReputationMapInfoReq = new GetCityReputationMapInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCityReputationMapInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCityReputationMapInfoRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "is_new_hunting", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "is_new_request", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "unlock_hunting_city_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reward_city_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockHuntingCityList: [], rewardCityList: [] };
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
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_new_hunting */ 10:
                    message.isNewHunting = reader.bool();
                    break;
                case /* optional bool is_new_request */ 2:
                    message.isNewRequest = reader.bool();
                    break;
                case /* repeated uint32 unlock_hunting_city_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockHuntingCityList.push(reader.uint32());
                    else
                        message.unlockHuntingCityList.push(reader.uint32());
                    break;
                case /* repeated uint32 reward_city_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardCityList.push(reader.uint32());
                    else
                        message.rewardCityList.push(reader.uint32());
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
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional bool is_new_hunting = 10; */
        if (message.isNewHunting !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isNewHunting);
        /* optional bool is_new_request = 2; */
        if (message.isNewRequest !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isNewRequest);
        /* repeated uint32 unlock_hunting_city_list = 9; */
        if (message.unlockHuntingCityList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockHuntingCityList.length; i++)
                writer.uint32(message.unlockHuntingCityList[i]);
            writer.join();
        }
        /* repeated uint32 reward_city_list = 3; */
        if (message.rewardCityList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardCityList.length; i++)
                writer.uint32(message.rewardCityList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetCityReputationMapInfoRsp
 */
exports.GetCityReputationMapInfoRsp = new GetCityReputationMapInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCityReputationExploreRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCityReputationExploreRewardReq", [
            { no: 15, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "explore_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { exploreIdList: [] };
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
                case /* optional uint32 city_id */ 15:
                    message.cityId = reader.uint32();
                    break;
                case /* repeated uint32 explore_id_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exploreIdList.push(reader.uint32());
                    else
                        message.exploreIdList.push(reader.uint32());
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
        /* optional uint32 city_id = 15; */
        if (message.cityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.cityId);
        /* repeated uint32 explore_id_list = 12; */
        if (message.exploreIdList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exploreIdList.length; i++)
                writer.uint32(message.exploreIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCityReputationExploreRewardReq
 */
exports.TakeCityReputationExploreRewardReq = new TakeCityReputationExploreRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCityReputationExploreRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCityReputationExploreRewardRsp", [
            { no: 8, name: "explore_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam },
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { exploreIdList: [], itemList: [] };
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
                case /* repeated uint32 explore_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exploreIdList.push(reader.uint32());
                    else
                        message.exploreIdList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 12:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 city_id */ 13:
                    message.cityId = reader.uint32();
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
        /* repeated uint32 explore_id_list = 8; */
        if (message.exploreIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exploreIdList.length; i++)
                writer.uint32(message.exploreIdList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.ItemParam item_list = 12; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 city_id = 13; */
        if (message.cityId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCityReputationExploreRewardRsp
 */
exports.TakeCityReputationExploreRewardRsp = new TakeCityReputationExploreRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationSimpleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationSimpleInfo", [
            { no: 15, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 level */ 15:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 city_id */ 9:
                    message.cityId = reader.uint32();
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
        /* optional uint32 level = 15; */
        if (message.level !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 city_id = 9; */
        if (message.cityId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationSimpleInfo
 */
exports.CityReputationSimpleInfo = new CityReputationSimpleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityReputationDataNotify", [
            { no: 7, name: "simple_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CityReputationSimpleInfo }
        ]);
    }
    create(value) {
        const message = { simpleInfoList: [] };
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
                case /* repeated com.midnights.game.CityReputationSimpleInfo simple_info_list */ 7:
                    message.simpleInfoList.push(exports.CityReputationSimpleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.CityReputationSimpleInfo simple_info_list = 7; */
        for (let i = 0; i < message.simpleInfoList.length; i++)
            exports.CityReputationSimpleInfo.internalBinaryWrite(message.simpleInfoList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityReputationDataNotify
 */
exports.CityReputationDataNotify = new CityReputationDataNotify$Type();
