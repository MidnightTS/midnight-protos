"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionDailyRefreshNotify = exports.ReunionPrivilegeChangeNotify = exports.ReunionActivateNotify = exports.ReunionSettleNotify = exports.GetReunionPrivilegeInfoRsp = exports.GetReunionPrivilegeInfoReq = exports.TakeReunionMissionRewardRsp = exports.TakeReunionMissionRewardReq = exports.UpdateReunionWatcherNotify = exports.TakeReunionWatcherRewardRsp = exports.TakeReunionWatcherRewardReq = exports.GetReunionMissionInfoRsp = exports.GetReunionMissionInfoReq = exports.TakeReunionSignInRewardRsp = exports.TakeReunionSignInRewardReq = exports.GetReunionSignInInfoRsp = exports.GetReunionSignInInfoReq = exports.TakeReunionFirstGiftRewardRsp = exports.TakeReunionFirstGiftRewardReq = exports.ReunionBriefInfoRsp = exports.ReunionBriefInfoReq = exports.ReunionBriefInfo = exports.ReunionPrivilegeInfo = exports.ReunionMissionInfo = exports.ReunionWatcherInfo = exports.ReunionSignInInfo = exports.ReunionDailyRefreshNotify_CmdId = exports.ReunionPrivilegeChangeNotify_CmdId = exports.ReunionActivateNotify_CmdId = exports.ReunionSettleNotify_CmdId = exports.GetReunionPrivilegeInfoRsp_CmdId = exports.GetReunionPrivilegeInfoReq_CmdId = exports.TakeReunionMissionRewardRsp_CmdId = exports.TakeReunionMissionRewardReq_CmdId = exports.UpdateReunionWatcherNotify_CmdId = exports.TakeReunionWatcherRewardRsp_CmdId = exports.TakeReunionWatcherRewardReq_CmdId = exports.GetReunionMissionInfoRsp_CmdId = exports.GetReunionMissionInfoReq_CmdId = exports.TakeReunionSignInRewardRsp_CmdId = exports.TakeReunionSignInRewardReq_CmdId = exports.GetReunionSignInInfoRsp_CmdId = exports.GetReunionSignInInfoReq_CmdId = exports.TakeReunionFirstGiftRewardRsp_CmdId = exports.TakeReunionFirstGiftRewardReq_CmdId = exports.ReunionBriefInfoRsp_CmdId = exports.ReunionBriefInfoReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.ReunionBriefInfoReq.CmdId
 */
var ReunionBriefInfoReq_CmdId;
(function (ReunionBriefInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionBriefInfoReq_CmdId[ReunionBriefInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5076;
     */
    ReunionBriefInfoReq_CmdId[ReunionBriefInfoReq_CmdId["CMD_ID"] = 5076] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionBriefInfoReq_CmdId[ReunionBriefInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReunionBriefInfoReq_CmdId[ReunionBriefInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReunionBriefInfoReq_CmdId[ReunionBriefInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReunionBriefInfoReq_CmdId = exports.ReunionBriefInfoReq_CmdId || (exports.ReunionBriefInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReunionBriefInfoRsp.CmdId
 */
var ReunionBriefInfoRsp_CmdId;
(function (ReunionBriefInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionBriefInfoRsp_CmdId[ReunionBriefInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5068;
     */
    ReunionBriefInfoRsp_CmdId[ReunionBriefInfoRsp_CmdId["CMD_ID"] = 5068] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionBriefInfoRsp_CmdId[ReunionBriefInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReunionBriefInfoRsp_CmdId[ReunionBriefInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReunionBriefInfoRsp_CmdId = exports.ReunionBriefInfoRsp_CmdId || (exports.ReunionBriefInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionFirstGiftRewardReq.CmdId
 */
var TakeReunionFirstGiftRewardReq_CmdId;
(function (TakeReunionFirstGiftRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionFirstGiftRewardReq_CmdId[TakeReunionFirstGiftRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5075;
     */
    TakeReunionFirstGiftRewardReq_CmdId[TakeReunionFirstGiftRewardReq_CmdId["CMD_ID"] = 5075] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionFirstGiftRewardReq_CmdId[TakeReunionFirstGiftRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionFirstGiftRewardReq_CmdId[TakeReunionFirstGiftRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionFirstGiftRewardReq_CmdId[TakeReunionFirstGiftRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeReunionFirstGiftRewardReq_CmdId = exports.TakeReunionFirstGiftRewardReq_CmdId || (exports.TakeReunionFirstGiftRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionFirstGiftRewardRsp.CmdId
 */
var TakeReunionFirstGiftRewardRsp_CmdId;
(function (TakeReunionFirstGiftRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionFirstGiftRewardRsp_CmdId[TakeReunionFirstGiftRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5057;
     */
    TakeReunionFirstGiftRewardRsp_CmdId[TakeReunionFirstGiftRewardRsp_CmdId["CMD_ID"] = 5057] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionFirstGiftRewardRsp_CmdId[TakeReunionFirstGiftRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionFirstGiftRewardRsp_CmdId[TakeReunionFirstGiftRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeReunionFirstGiftRewardRsp_CmdId = exports.TakeReunionFirstGiftRewardRsp_CmdId || (exports.TakeReunionFirstGiftRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetReunionSignInInfoReq.CmdId
 */
var GetReunionSignInInfoReq_CmdId;
(function (GetReunionSignInInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionSignInInfoReq_CmdId[GetReunionSignInInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5052;
     */
    GetReunionSignInInfoReq_CmdId[GetReunionSignInInfoReq_CmdId["CMD_ID"] = 5052] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionSignInInfoReq_CmdId[GetReunionSignInInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionSignInInfoReq_CmdId[GetReunionSignInInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionSignInInfoReq_CmdId[GetReunionSignInInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetReunionSignInInfoReq_CmdId = exports.GetReunionSignInInfoReq_CmdId || (exports.GetReunionSignInInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetReunionSignInInfoRsp.CmdId
 */
var GetReunionSignInInfoRsp_CmdId;
(function (GetReunionSignInInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionSignInInfoRsp_CmdId[GetReunionSignInInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5081;
     */
    GetReunionSignInInfoRsp_CmdId[GetReunionSignInInfoRsp_CmdId["CMD_ID"] = 5081] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionSignInInfoRsp_CmdId[GetReunionSignInInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionSignInInfoRsp_CmdId[GetReunionSignInInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetReunionSignInInfoRsp_CmdId = exports.GetReunionSignInInfoRsp_CmdId || (exports.GetReunionSignInInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionSignInRewardReq.CmdId
 */
var TakeReunionSignInRewardReq_CmdId;
(function (TakeReunionSignInRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionSignInRewardReq_CmdId[TakeReunionSignInRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5079;
     */
    TakeReunionSignInRewardReq_CmdId[TakeReunionSignInRewardReq_CmdId["CMD_ID"] = 5079] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionSignInRewardReq_CmdId[TakeReunionSignInRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionSignInRewardReq_CmdId[TakeReunionSignInRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionSignInRewardReq_CmdId[TakeReunionSignInRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeReunionSignInRewardReq_CmdId = exports.TakeReunionSignInRewardReq_CmdId || (exports.TakeReunionSignInRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionSignInRewardRsp.CmdId
 */
var TakeReunionSignInRewardRsp_CmdId;
(function (TakeReunionSignInRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionSignInRewardRsp_CmdId[TakeReunionSignInRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5072;
     */
    TakeReunionSignInRewardRsp_CmdId[TakeReunionSignInRewardRsp_CmdId["CMD_ID"] = 5072] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionSignInRewardRsp_CmdId[TakeReunionSignInRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionSignInRewardRsp_CmdId[TakeReunionSignInRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeReunionSignInRewardRsp_CmdId = exports.TakeReunionSignInRewardRsp_CmdId || (exports.TakeReunionSignInRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetReunionMissionInfoReq.CmdId
 */
var GetReunionMissionInfoReq_CmdId;
(function (GetReunionMissionInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionMissionInfoReq_CmdId[GetReunionMissionInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5094;
     */
    GetReunionMissionInfoReq_CmdId[GetReunionMissionInfoReq_CmdId["CMD_ID"] = 5094] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionMissionInfoReq_CmdId[GetReunionMissionInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionMissionInfoReq_CmdId[GetReunionMissionInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionMissionInfoReq_CmdId[GetReunionMissionInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetReunionMissionInfoReq_CmdId = exports.GetReunionMissionInfoReq_CmdId || (exports.GetReunionMissionInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetReunionMissionInfoRsp.CmdId
 */
var GetReunionMissionInfoRsp_CmdId;
(function (GetReunionMissionInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionMissionInfoRsp_CmdId[GetReunionMissionInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5099;
     */
    GetReunionMissionInfoRsp_CmdId[GetReunionMissionInfoRsp_CmdId["CMD_ID"] = 5099] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionMissionInfoRsp_CmdId[GetReunionMissionInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionMissionInfoRsp_CmdId[GetReunionMissionInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetReunionMissionInfoRsp_CmdId = exports.GetReunionMissionInfoRsp_CmdId || (exports.GetReunionMissionInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionWatcherRewardReq.CmdId
 */
var TakeReunionWatcherRewardReq_CmdId;
(function (TakeReunionWatcherRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionWatcherRewardReq_CmdId[TakeReunionWatcherRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5070;
     */
    TakeReunionWatcherRewardReq_CmdId[TakeReunionWatcherRewardReq_CmdId["CMD_ID"] = 5070] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionWatcherRewardReq_CmdId[TakeReunionWatcherRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionWatcherRewardReq_CmdId[TakeReunionWatcherRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionWatcherRewardReq_CmdId[TakeReunionWatcherRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeReunionWatcherRewardReq_CmdId = exports.TakeReunionWatcherRewardReq_CmdId || (exports.TakeReunionWatcherRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionWatcherRewardRsp.CmdId
 */
var TakeReunionWatcherRewardRsp_CmdId;
(function (TakeReunionWatcherRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionWatcherRewardRsp_CmdId[TakeReunionWatcherRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5095;
     */
    TakeReunionWatcherRewardRsp_CmdId[TakeReunionWatcherRewardRsp_CmdId["CMD_ID"] = 5095] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionWatcherRewardRsp_CmdId[TakeReunionWatcherRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionWatcherRewardRsp_CmdId[TakeReunionWatcherRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeReunionWatcherRewardRsp_CmdId = exports.TakeReunionWatcherRewardRsp_CmdId || (exports.TakeReunionWatcherRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdateReunionWatcherNotify.CmdId
 */
var UpdateReunionWatcherNotify_CmdId;
(function (UpdateReunionWatcherNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdateReunionWatcherNotify_CmdId[UpdateReunionWatcherNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5091;
     */
    UpdateReunionWatcherNotify_CmdId[UpdateReunionWatcherNotify_CmdId["CMD_ID"] = 5091] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdateReunionWatcherNotify_CmdId[UpdateReunionWatcherNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdateReunionWatcherNotify_CmdId[UpdateReunionWatcherNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UpdateReunionWatcherNotify_CmdId = exports.UpdateReunionWatcherNotify_CmdId || (exports.UpdateReunionWatcherNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionMissionRewardReq.CmdId
 */
var TakeReunionMissionRewardReq_CmdId;
(function (TakeReunionMissionRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionMissionRewardReq_CmdId[TakeReunionMissionRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5092;
     */
    TakeReunionMissionRewardReq_CmdId[TakeReunionMissionRewardReq_CmdId["CMD_ID"] = 5092] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionMissionRewardReq_CmdId[TakeReunionMissionRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionMissionRewardReq_CmdId[TakeReunionMissionRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionMissionRewardReq_CmdId[TakeReunionMissionRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeReunionMissionRewardReq_CmdId = exports.TakeReunionMissionRewardReq_CmdId || (exports.TakeReunionMissionRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeReunionMissionRewardRsp.CmdId
 */
var TakeReunionMissionRewardRsp_CmdId;
(function (TakeReunionMissionRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionMissionRewardRsp_CmdId[TakeReunionMissionRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5064;
     */
    TakeReunionMissionRewardRsp_CmdId[TakeReunionMissionRewardRsp_CmdId["CMD_ID"] = 5064] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeReunionMissionRewardRsp_CmdId[TakeReunionMissionRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionMissionRewardRsp_CmdId[TakeReunionMissionRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeReunionMissionRewardRsp_CmdId[TakeReunionMissionRewardRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeReunionMissionRewardRsp_CmdId = exports.TakeReunionMissionRewardRsp_CmdId || (exports.TakeReunionMissionRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetReunionPrivilegeInfoReq.CmdId
 */
var GetReunionPrivilegeInfoReq_CmdId;
(function (GetReunionPrivilegeInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionPrivilegeInfoReq_CmdId[GetReunionPrivilegeInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5097;
     */
    GetReunionPrivilegeInfoReq_CmdId[GetReunionPrivilegeInfoReq_CmdId["CMD_ID"] = 5097] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionPrivilegeInfoReq_CmdId[GetReunionPrivilegeInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionPrivilegeInfoReq_CmdId[GetReunionPrivilegeInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionPrivilegeInfoReq_CmdId[GetReunionPrivilegeInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetReunionPrivilegeInfoReq_CmdId = exports.GetReunionPrivilegeInfoReq_CmdId || (exports.GetReunionPrivilegeInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetReunionPrivilegeInfoRsp.CmdId
 */
var GetReunionPrivilegeInfoRsp_CmdId;
(function (GetReunionPrivilegeInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionPrivilegeInfoRsp_CmdId[GetReunionPrivilegeInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5087;
     */
    GetReunionPrivilegeInfoRsp_CmdId[GetReunionPrivilegeInfoRsp_CmdId["CMD_ID"] = 5087] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetReunionPrivilegeInfoRsp_CmdId[GetReunionPrivilegeInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetReunionPrivilegeInfoRsp_CmdId[GetReunionPrivilegeInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetReunionPrivilegeInfoRsp_CmdId = exports.GetReunionPrivilegeInfoRsp_CmdId || (exports.GetReunionPrivilegeInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReunionSettleNotify.CmdId
 */
var ReunionSettleNotify_CmdId;
(function (ReunionSettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionSettleNotify_CmdId[ReunionSettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5073;
     */
    ReunionSettleNotify_CmdId[ReunionSettleNotify_CmdId["CMD_ID"] = 5073] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionSettleNotify_CmdId[ReunionSettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReunionSettleNotify_CmdId[ReunionSettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReunionSettleNotify_CmdId = exports.ReunionSettleNotify_CmdId || (exports.ReunionSettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReunionActivateNotify.CmdId
 */
var ReunionActivateNotify_CmdId;
(function (ReunionActivateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionActivateNotify_CmdId[ReunionActivateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5085;
     */
    ReunionActivateNotify_CmdId[ReunionActivateNotify_CmdId["CMD_ID"] = 5085] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionActivateNotify_CmdId[ReunionActivateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReunionActivateNotify_CmdId[ReunionActivateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReunionActivateNotify_CmdId = exports.ReunionActivateNotify_CmdId || (exports.ReunionActivateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReunionPrivilegeChangeNotify.CmdId
 */
var ReunionPrivilegeChangeNotify_CmdId;
(function (ReunionPrivilegeChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionPrivilegeChangeNotify_CmdId[ReunionPrivilegeChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5098;
     */
    ReunionPrivilegeChangeNotify_CmdId[ReunionPrivilegeChangeNotify_CmdId["CMD_ID"] = 5098] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionPrivilegeChangeNotify_CmdId[ReunionPrivilegeChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReunionPrivilegeChangeNotify_CmdId[ReunionPrivilegeChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReunionPrivilegeChangeNotify_CmdId = exports.ReunionPrivilegeChangeNotify_CmdId || (exports.ReunionPrivilegeChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReunionDailyRefreshNotify.CmdId
 */
var ReunionDailyRefreshNotify_CmdId;
(function (ReunionDailyRefreshNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionDailyRefreshNotify_CmdId[ReunionDailyRefreshNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5100;
     */
    ReunionDailyRefreshNotify_CmdId[ReunionDailyRefreshNotify_CmdId["CMD_ID"] = 5100] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReunionDailyRefreshNotify_CmdId[ReunionDailyRefreshNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReunionDailyRefreshNotify_CmdId[ReunionDailyRefreshNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReunionDailyRefreshNotify_CmdId = exports.ReunionDailyRefreshNotify_CmdId || (exports.ReunionDailyRefreshNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ReunionSignInInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionSignInInfo", [
            { no: 6, name: "sign_in_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "reward_day_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "last_sign_in_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { rewardDayList: [] };
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
                case /* optional uint32 sign_in_count */ 6:
                    message.signInCount = reader.uint32();
                    break;
                case /* repeated uint32 reward_day_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardDayList.push(reader.uint32());
                    else
                        message.rewardDayList.push(reader.uint32());
                    break;
                case /* optional uint32 config_id */ 12:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 last_sign_in_time */ 11:
                    message.lastSignInTime = reader.uint32();
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
        /* optional uint32 sign_in_count = 6; */
        if (message.signInCount !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.signInCount);
        /* repeated uint32 reward_day_list = 8; */
        if (message.rewardDayList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardDayList.length; i++)
                writer.uint32(message.rewardDayList[i]);
            writer.join();
        }
        /* optional uint32 config_id = 12; */
        if (message.configId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.configId);
        /* optional uint32 last_sign_in_time = 11; */
        if (message.lastSignInTime !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.lastSignInTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionSignInInfo
 */
exports.ReunionSignInInfo = new ReunionSignInInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionWatcherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionWatcherInfo", [
            { no: 12, name: "reward_unlock_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "watcher_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "total_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_taken_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 reward_unlock_time */ 12:
                    message.rewardUnlockTime = reader.uint32();
                    break;
                case /* optional uint32 watcher_id */ 3:
                    message.watcherId = reader.uint32();
                    break;
                case /* optional uint32 total_progress */ 4:
                    message.totalProgress = reader.uint32();
                    break;
                case /* optional uint32 cur_progress */ 11:
                    message.curProgress = reader.uint32();
                    break;
                case /* optional bool is_taken_reward */ 14:
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
        /* optional uint32 reward_unlock_time = 12; */
        if (message.rewardUnlockTime !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.rewardUnlockTime);
        /* optional uint32 watcher_id = 3; */
        if (message.watcherId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.watcherId);
        /* optional uint32 total_progress = 4; */
        if (message.totalProgress !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.totalProgress);
        /* optional uint32 cur_progress = 11; */
        if (message.curProgress !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.curProgress);
        /* optional bool is_taken_reward = 14; */
        if (message.isTakenReward !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isTakenReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionWatcherInfo
 */
exports.ReunionWatcherInfo = new ReunionWatcherInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionMissionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionMissionInfo", [
            { no: 3, name: "cur_day_watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ReunionWatcherInfo },
            { no: 11, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_taken_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_taken_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_finished", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ReunionWatcherInfo }
        ]);
    }
    create(value) {
        const message = { curDayWatcherList: [], isTakenRewardList: [], watcherList: [] };
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
                case /* repeated com.midnights.game.ReunionWatcherInfo cur_day_watcher_list */ 3:
                    message.curDayWatcherList.push(exports.ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 cur_score */ 11:
                    message.curScore = reader.uint32();
                    break;
                case /* optional bool is_taken_reward */ 8:
                    message.isTakenReward = reader.bool();
                    break;
                case /* repeated bool is_taken_reward_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.isTakenRewardList.push(reader.bool());
                    else
                        message.isTakenRewardList.push(reader.bool());
                    break;
                case /* optional uint32 next_refresh_time */ 5:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* optional bool is_finished */ 9:
                    message.isFinished = reader.bool();
                    break;
                case /* optional uint32 mission_id */ 12:
                    message.missionId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ReunionWatcherInfo watcher_list */ 2:
                    message.watcherList.push(exports.ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ReunionWatcherInfo cur_day_watcher_list = 3; */
        for (let i = 0; i < message.curDayWatcherList.length; i++)
            exports.ReunionWatcherInfo.internalBinaryWrite(message.curDayWatcherList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 cur_score = 11; */
        if (message.curScore !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.curScore);
        /* optional bool is_taken_reward = 8; */
        if (message.isTakenReward !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isTakenReward);
        /* repeated bool is_taken_reward_list = 6; */
        if (message.isTakenRewardList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.isTakenRewardList.length; i++)
                writer.bool(message.isTakenRewardList[i]);
            writer.join();
        }
        /* optional uint32 next_refresh_time = 5; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* optional bool is_finished = 9; */
        if (message.isFinished !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isFinished);
        /* optional uint32 mission_id = 12; */
        if (message.missionId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.missionId);
        /* repeated com.midnights.game.ReunionWatcherInfo watcher_list = 2; */
        for (let i = 0; i < message.watcherList.length; i++)
            exports.ReunionWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionMissionInfo
 */
exports.ReunionMissionInfo = new ReunionMissionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionPrivilegeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionPrivilegeInfo", [
            { no: 7, name: "cur_day_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "total_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "privilege_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 cur_day_count */ 7:
                    message.curDayCount = reader.uint32();
                    break;
                case /* optional uint32 total_count */ 10:
                    message.totalCount = reader.uint32();
                    break;
                case /* optional uint32 privilege_id */ 4:
                    message.privilegeId = reader.uint32();
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
        /* optional uint32 cur_day_count = 7; */
        if (message.curDayCount !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.curDayCount);
        /* optional uint32 total_count = 10; */
        if (message.totalCount !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.totalCount);
        /* optional uint32 privilege_id = 4; */
        if (message.privilegeId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.privilegeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionPrivilegeInfo
 */
exports.ReunionPrivilegeInfo = new ReunionPrivilegeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionBriefInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionBriefInfo", [
            { no: 15, name: "first_gift_reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "privilege_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "first_day_start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "sign_in_has_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_taken_first_gift", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "finish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "mission_has_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "privilege_info", kind: "message", T: () => exports.ReunionPrivilegeInfo },
            { no: 13, name: "version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "sign_in_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 first_gift_reward_id */ 15:
                    message.firstGiftRewardId = reader.uint32();
                    break;
                case /* optional uint32 privilege_id */ 5:
                    message.privilegeId = reader.uint32();
                    break;
                case /* optional uint32 mission_id */ 10:
                    message.missionId = reader.uint32();
                    break;
                case /* optional uint32 first_day_start_time */ 3:
                    message.firstDayStartTime = reader.uint32();
                    break;
                case /* optional bool sign_in_has_reward */ 2:
                    message.signInHasReward = reader.bool();
                    break;
                case /* optional uint32 start_time */ 7:
                    message.startTime = reader.uint32();
                    break;
                case /* optional bool is_taken_first_gift */ 8:
                    message.isTakenFirstGift = reader.bool();
                    break;
                case /* optional uint32 finish_time */ 12:
                    message.finishTime = reader.uint32();
                    break;
                case /* optional bool mission_has_reward */ 9:
                    message.missionHasReward = reader.bool();
                    break;
                case /* optional com.midnights.game.ReunionPrivilegeInfo privilege_info */ 14:
                    message.privilegeInfo = exports.ReunionPrivilegeInfo.internalBinaryRead(reader, reader.uint32(), options, message.privilegeInfo);
                    break;
                case /* optional string version */ 13:
                    message.version = reader.string();
                    break;
                case /* optional uint32 sign_in_config_id */ 6:
                    message.signInConfigId = reader.uint32();
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
        /* optional uint32 first_gift_reward_id = 15; */
        if (message.firstGiftRewardId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.firstGiftRewardId);
        /* optional uint32 privilege_id = 5; */
        if (message.privilegeId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.privilegeId);
        /* optional uint32 mission_id = 10; */
        if (message.missionId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.missionId);
        /* optional uint32 first_day_start_time = 3; */
        if (message.firstDayStartTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.firstDayStartTime);
        /* optional bool sign_in_has_reward = 2; */
        if (message.signInHasReward !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.signInHasReward);
        /* optional uint32 start_time = 7; */
        if (message.startTime !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.startTime);
        /* optional bool is_taken_first_gift = 8; */
        if (message.isTakenFirstGift !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isTakenFirstGift);
        /* optional uint32 finish_time = 12; */
        if (message.finishTime !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.finishTime);
        /* optional bool mission_has_reward = 9; */
        if (message.missionHasReward !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.missionHasReward);
        /* optional com.midnights.game.ReunionPrivilegeInfo privilege_info = 14; */
        if (message.privilegeInfo)
            exports.ReunionPrivilegeInfo.internalBinaryWrite(message.privilegeInfo, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional string version = 13; */
        if (message.version !== undefined)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.version);
        /* optional uint32 sign_in_config_id = 6; */
        if (message.signInConfigId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.signInConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionBriefInfo
 */
exports.ReunionBriefInfo = new ReunionBriefInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionBriefInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionBriefInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ReunionBriefInfoReq
 */
exports.ReunionBriefInfoReq = new ReunionBriefInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionBriefInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionBriefInfoRsp", [
            { no: 13, name: "is_activate", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "reunion_brief_info", kind: "message", T: () => exports.ReunionBriefInfo }
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
                case /* optional bool is_activate */ 13:
                    message.isActivate = reader.bool();
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.ReunionBriefInfo reunion_brief_info */ 5:
                    message.reunionBriefInfo = exports.ReunionBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.reunionBriefInfo);
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
        /* optional bool is_activate = 13; */
        if (message.isActivate !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isActivate);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.ReunionBriefInfo reunion_brief_info = 5; */
        if (message.reunionBriefInfo)
            exports.ReunionBriefInfo.internalBinaryWrite(message.reunionBriefInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionBriefInfoRsp
 */
exports.ReunionBriefInfoRsp = new ReunionBriefInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionFirstGiftRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionFirstGiftRewardReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionFirstGiftRewardReq
 */
exports.TakeReunionFirstGiftRewardReq = new TakeReunionFirstGiftRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionFirstGiftRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionFirstGiftRewardRsp", [
            { no: 9, name: "reward_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional int32 reward_id */ 9:
                    message.rewardId = reader.int32();
                    break;
                case /* optional int32 retcode */ 15:
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
        /* optional int32 reward_id = 9; */
        if (message.rewardId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.rewardId);
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionFirstGiftRewardRsp
 */
exports.TakeReunionFirstGiftRewardRsp = new TakeReunionFirstGiftRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReunionSignInInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetReunionSignInInfoReq", [
            { no: 10, name: "sign_in_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 sign_in_config_id */ 10:
                    message.signInConfigId = reader.uint32();
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
        /* optional uint32 sign_in_config_id = 10; */
        if (message.signInConfigId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.signInConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetReunionSignInInfoReq
 */
exports.GetReunionSignInInfoReq = new GetReunionSignInInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReunionSignInInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetReunionSignInInfoRsp", [
            { no: 5, name: "sign_in_info", kind: "message", T: () => exports.ReunionSignInInfo },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional com.midnights.game.ReunionSignInInfo sign_in_info */ 5:
                    message.signInInfo = exports.ReunionSignInInfo.internalBinaryRead(reader, reader.uint32(), options, message.signInInfo);
                    break;
                case /* optional int32 retcode */ 15:
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
        /* optional com.midnights.game.ReunionSignInInfo sign_in_info = 5; */
        if (message.signInInfo)
            exports.ReunionSignInInfo.internalBinaryWrite(message.signInInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetReunionSignInInfoRsp
 */
exports.GetReunionSignInInfoRsp = new GetReunionSignInInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionSignInRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionSignInRewardReq", [
            { no: 12, name: "reward_day", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 reward_day */ 12:
                    message.rewardDay = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 14:
                    message.configId = reader.uint32();
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
        /* optional uint32 reward_day = 12; */
        if (message.rewardDay !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.rewardDay);
        /* optional uint32 config_id = 14; */
        if (message.configId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionSignInRewardReq
 */
exports.TakeReunionSignInRewardReq = new TakeReunionSignInRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionSignInRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionSignInRewardRsp", [
            { no: 10, name: "sign_in_info", kind: "message", T: () => exports.ReunionSignInInfo },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional com.midnights.game.ReunionSignInInfo sign_in_info */ 10:
                    message.signInInfo = exports.ReunionSignInInfo.internalBinaryRead(reader, reader.uint32(), options, message.signInInfo);
                    break;
                case /* optional int32 retcode */ 5:
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
        /* optional com.midnights.game.ReunionSignInInfo sign_in_info = 10; */
        if (message.signInInfo)
            exports.ReunionSignInInfo.internalBinaryWrite(message.signInInfo, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionSignInRewardRsp
 */
exports.TakeReunionSignInRewardRsp = new TakeReunionSignInRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReunionMissionInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetReunionMissionInfoReq", [
            { no: 14, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 mission_id */ 14:
                    message.missionId = reader.uint32();
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
        /* optional uint32 mission_id = 14; */
        if (message.missionId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.missionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetReunionMissionInfoReq
 */
exports.GetReunionMissionInfoReq = new GetReunionMissionInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReunionMissionInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetReunionMissionInfoRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "mission_info", kind: "message", T: () => exports.ReunionMissionInfo }
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
                case /* optional int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.ReunionMissionInfo mission_info */ 14:
                    message.missionInfo = exports.ReunionMissionInfo.internalBinaryRead(reader, reader.uint32(), options, message.missionInfo);
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
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.ReunionMissionInfo mission_info = 14; */
        if (message.missionInfo)
            exports.ReunionMissionInfo.internalBinaryWrite(message.missionInfo, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetReunionMissionInfoRsp
 */
exports.GetReunionMissionInfoRsp = new GetReunionMissionInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionWatcherRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionWatcherRewardReq", [
            { no: 12, name: "watcher_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 watcher_id */ 12:
                    message.watcherId = reader.uint32();
                    break;
                case /* optional uint32 mission_id */ 15:
                    message.missionId = reader.uint32();
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
        /* optional uint32 watcher_id = 12; */
        if (message.watcherId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.watcherId);
        /* optional uint32 mission_id = 15; */
        if (message.missionId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.missionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionWatcherRewardReq
 */
exports.TakeReunionWatcherRewardReq = new TakeReunionWatcherRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionWatcherRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionWatcherRewardRsp", [
            { no: 15, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "watcher_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 mission_id */ 15:
                    message.missionId = reader.uint32();
                    break;
                case /* optional uint32 watcher_id */ 9:
                    message.watcherId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 10:
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
        /* optional uint32 mission_id = 15; */
        if (message.missionId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.missionId);
        /* optional uint32 watcher_id = 9; */
        if (message.watcherId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.watcherId);
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionWatcherRewardRsp
 */
exports.TakeReunionWatcherRewardRsp = new TakeReunionWatcherRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateReunionWatcherNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdateReunionWatcherNotify", [
            { no: 3, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "watcher_info", kind: "message", T: () => exports.ReunionWatcherInfo }
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
                case /* optional uint32 mission_id */ 3:
                    message.missionId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ReunionWatcherInfo watcher_info */ 10:
                    message.watcherInfo = exports.ReunionWatcherInfo.internalBinaryRead(reader, reader.uint32(), options, message.watcherInfo);
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
        /* optional uint32 mission_id = 3; */
        if (message.missionId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.missionId);
        /* optional com.midnights.game.ReunionWatcherInfo watcher_info = 10; */
        if (message.watcherInfo)
            exports.ReunionWatcherInfo.internalBinaryWrite(message.watcherInfo, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdateReunionWatcherNotify
 */
exports.UpdateReunionWatcherNotify = new UpdateReunionWatcherNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionMissionRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionMissionRewardReq", [
            { no: 7, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reward_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 reward_id */ 7:
                    message.rewardId = reader.uint32();
                    break;
                case /* optional uint32 reward_index */ 4:
                    message.rewardIndex = reader.uint32();
                    break;
                case /* optional uint32 mission_id */ 12:
                    message.missionId = reader.uint32();
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
        /* optional uint32 reward_id = 7; */
        if (message.rewardId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.rewardId);
        /* optional uint32 reward_index = 4; */
        if (message.rewardIndex !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.rewardIndex);
        /* optional uint32 mission_id = 12; */
        if (message.missionId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.missionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionMissionRewardReq
 */
exports.TakeReunionMissionRewardReq = new TakeReunionMissionRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeReunionMissionRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeReunionMissionRewardRsp", [
            { no: 12, name: "reward_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "mission_info", kind: "message", T: () => exports.ReunionMissionInfo },
            { no: 3, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 reward_index */ 12:
                    message.rewardIndex = reader.uint32();
                    break;
                case /* optional int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.ReunionMissionInfo mission_info */ 9:
                    message.missionInfo = exports.ReunionMissionInfo.internalBinaryRead(reader, reader.uint32(), options, message.missionInfo);
                    break;
                case /* optional uint32 reward_id */ 3:
                    message.rewardId = reader.uint32();
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
        /* optional uint32 reward_index = 12; */
        if (message.rewardIndex !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.rewardIndex);
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.ReunionMissionInfo mission_info = 9; */
        if (message.missionInfo)
            exports.ReunionMissionInfo.internalBinaryWrite(message.missionInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 reward_id = 3; */
        if (message.rewardId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.rewardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeReunionMissionRewardRsp
 */
exports.TakeReunionMissionRewardRsp = new TakeReunionMissionRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReunionPrivilegeInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetReunionPrivilegeInfoReq", [
            { no: 10, name: "privilege_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 privilege_id */ 10:
                    message.privilegeId = reader.uint32();
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
        /* optional uint32 privilege_id = 10; */
        if (message.privilegeId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.privilegeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetReunionPrivilegeInfoReq
 */
exports.GetReunionPrivilegeInfoReq = new GetReunionPrivilegeInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReunionPrivilegeInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetReunionPrivilegeInfoRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "privilege_info", kind: "message", T: () => exports.ReunionPrivilegeInfo }
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
                case /* optional com.midnights.game.ReunionPrivilegeInfo privilege_info */ 1:
                    message.privilegeInfo = exports.ReunionPrivilegeInfo.internalBinaryRead(reader, reader.uint32(), options, message.privilegeInfo);
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
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.ReunionPrivilegeInfo privilege_info = 1; */
        if (message.privilegeInfo)
            exports.ReunionPrivilegeInfo.internalBinaryWrite(message.privilegeInfo, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetReunionPrivilegeInfoRsp
 */
exports.GetReunionPrivilegeInfoRsp = new GetReunionPrivilegeInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionSettleNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ReunionSettleNotify
 */
exports.ReunionSettleNotify = new ReunionSettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionActivateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionActivateNotify", [
            { no: 9, name: "is_activate", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "reunion_brief_info", kind: "message", T: () => exports.ReunionBriefInfo }
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
                case /* optional bool is_activate */ 9:
                    message.isActivate = reader.bool();
                    break;
                case /* optional com.midnights.game.ReunionBriefInfo reunion_brief_info */ 13:
                    message.reunionBriefInfo = exports.ReunionBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.reunionBriefInfo);
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
        /* optional bool is_activate = 9; */
        if (message.isActivate !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isActivate);
        /* optional com.midnights.game.ReunionBriefInfo reunion_brief_info = 13; */
        if (message.reunionBriefInfo)
            exports.ReunionBriefInfo.internalBinaryWrite(message.reunionBriefInfo, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionActivateNotify
 */
exports.ReunionActivateNotify = new ReunionActivateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionPrivilegeChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionPrivilegeChangeNotify", [
            { no: 13, name: "privilege_info", kind: "message", T: () => exports.ReunionPrivilegeInfo }
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
                case /* optional com.midnights.game.ReunionPrivilegeInfo privilege_info */ 13:
                    message.privilegeInfo = exports.ReunionPrivilegeInfo.internalBinaryRead(reader, reader.uint32(), options, message.privilegeInfo);
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
        /* optional com.midnights.game.ReunionPrivilegeInfo privilege_info = 13; */
        if (message.privilegeInfo)
            exports.ReunionPrivilegeInfo.internalBinaryWrite(message.privilegeInfo, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionPrivilegeChangeNotify
 */
exports.ReunionPrivilegeChangeNotify = new ReunionPrivilegeChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReunionDailyRefreshNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReunionDailyRefreshNotify", [
            { no: 4, name: "reunion_brief_info", kind: "message", T: () => exports.ReunionBriefInfo }
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
                case /* optional com.midnights.game.ReunionBriefInfo reunion_brief_info */ 4:
                    message.reunionBriefInfo = exports.ReunionBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.reunionBriefInfo);
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
        /* optional com.midnights.game.ReunionBriefInfo reunion_brief_info = 4; */
        if (message.reunionBriefInfo)
            exports.ReunionBriefInfo.internalBinaryWrite(message.reunionBriefInfo, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReunionDailyRefreshNotify
 */
exports.ReunionDailyRefreshNotify = new ReunionDailyRefreshNotify$Type();
