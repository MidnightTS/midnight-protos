"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGCGMatchConfirmNotify = exports.PlayerGCGMatchDismissNotify = exports.ServerTryCancelGeneralMatchNotify = exports.PlayerGetForceQuitBanInfoRsp = exports.PlayerGetForceQuitBanInfoReq = exports.PlayerGeneralMatchConfirmNotify = exports.PlayerGeneralMatchDismissNotify = exports.PlayerApplyEnterMpAfterMatchAgreedNotify = exports.PlayerMatchAgreedResultNotify = exports.PlayerAllowEnterMpAfterAgreeMatchNotify = exports.PlayerConfirmMatchRsp = exports.PlayerConfirmMatchReq = exports.PlayerMatchSuccNotify = exports.GCGMatchInfo = exports.GeneralMatchInfo = exports.MatchPlayerInfo = exports.PlayerMatchStopNotify = exports.PlayerCancelMatchRsp = exports.PlayerCancelMatchReq = exports.PlayerMatchInfoNotify = exports.PlayerStartMatchRsp = exports.PlayerStartMatchReq = exports.PlayerGCGMatchConfirmNotify_CmdId = exports.PlayerGCGMatchDismissNotify_CmdId = exports.ServerTryCancelGeneralMatchNotify_CmdId = exports.PlayerGetForceQuitBanInfoRsp_CmdId = exports.PlayerGetForceQuitBanInfoReq_CmdId = exports.PlayerGeneralMatchConfirmNotify_CmdId = exports.PlayerGeneralMatchDismissNotify_CmdId = exports.PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId = exports.PlayerMatchAgreedResultNotify_CmdId = exports.PlayerMatchAgreedResultNotify_Reason = exports.PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId = exports.PlayerConfirmMatchRsp_CmdId = exports.PlayerConfirmMatchReq_CmdId = exports.PlayerMatchSuccNotify_CmdId = exports.PlayerMatchStopNotify_CmdId = exports.PlayerCancelMatchRsp_CmdId = exports.PlayerCancelMatchReq_CmdId = exports.PlayerMatchInfoNotify_CmdId = exports.PlayerStartMatchRsp_CmdId = exports.PlayerStartMatchReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.PlayerStartMatchReq.CmdId
 */
var PlayerStartMatchReq_CmdId;
(function (PlayerStartMatchReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStartMatchReq_CmdId[PlayerStartMatchReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4176;
     */
    PlayerStartMatchReq_CmdId[PlayerStartMatchReq_CmdId["CMD_ID"] = 4176] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStartMatchReq_CmdId[PlayerStartMatchReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerStartMatchReq_CmdId[PlayerStartMatchReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerStartMatchReq_CmdId[PlayerStartMatchReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerStartMatchReq_CmdId = exports.PlayerStartMatchReq_CmdId || (exports.PlayerStartMatchReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerStartMatchRsp.CmdId
 */
var PlayerStartMatchRsp_CmdId;
(function (PlayerStartMatchRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStartMatchRsp_CmdId[PlayerStartMatchRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4168;
     */
    PlayerStartMatchRsp_CmdId[PlayerStartMatchRsp_CmdId["CMD_ID"] = 4168] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerStartMatchRsp_CmdId[PlayerStartMatchRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerStartMatchRsp_CmdId[PlayerStartMatchRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerStartMatchRsp_CmdId = exports.PlayerStartMatchRsp_CmdId || (exports.PlayerStartMatchRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerMatchInfoNotify.CmdId
 */
var PlayerMatchInfoNotify_CmdId;
(function (PlayerMatchInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchInfoNotify_CmdId[PlayerMatchInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4175;
     */
    PlayerMatchInfoNotify_CmdId[PlayerMatchInfoNotify_CmdId["CMD_ID"] = 4175] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchInfoNotify_CmdId[PlayerMatchInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerMatchInfoNotify_CmdId[PlayerMatchInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerMatchInfoNotify_CmdId = exports.PlayerMatchInfoNotify_CmdId || (exports.PlayerMatchInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCancelMatchReq.CmdId
 */
var PlayerCancelMatchReq_CmdId;
(function (PlayerCancelMatchReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCancelMatchReq_CmdId[PlayerCancelMatchReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4157;
     */
    PlayerCancelMatchReq_CmdId[PlayerCancelMatchReq_CmdId["CMD_ID"] = 4157] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCancelMatchReq_CmdId[PlayerCancelMatchReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCancelMatchReq_CmdId[PlayerCancelMatchReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCancelMatchReq_CmdId[PlayerCancelMatchReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerCancelMatchReq_CmdId = exports.PlayerCancelMatchReq_CmdId || (exports.PlayerCancelMatchReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCancelMatchRsp.CmdId
 */
var PlayerCancelMatchRsp_CmdId;
(function (PlayerCancelMatchRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCancelMatchRsp_CmdId[PlayerCancelMatchRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4152;
     */
    PlayerCancelMatchRsp_CmdId[PlayerCancelMatchRsp_CmdId["CMD_ID"] = 4152] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCancelMatchRsp_CmdId[PlayerCancelMatchRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCancelMatchRsp_CmdId[PlayerCancelMatchRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerCancelMatchRsp_CmdId = exports.PlayerCancelMatchRsp_CmdId || (exports.PlayerCancelMatchRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerMatchStopNotify.CmdId
 */
var PlayerMatchStopNotify_CmdId;
(function (PlayerMatchStopNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchStopNotify_CmdId[PlayerMatchStopNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4181;
     */
    PlayerMatchStopNotify_CmdId[PlayerMatchStopNotify_CmdId["CMD_ID"] = 4181] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchStopNotify_CmdId[PlayerMatchStopNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerMatchStopNotify_CmdId[PlayerMatchStopNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerMatchStopNotify_CmdId = exports.PlayerMatchStopNotify_CmdId || (exports.PlayerMatchStopNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerMatchSuccNotify.CmdId
 */
var PlayerMatchSuccNotify_CmdId;
(function (PlayerMatchSuccNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchSuccNotify_CmdId[PlayerMatchSuccNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4179;
     */
    PlayerMatchSuccNotify_CmdId[PlayerMatchSuccNotify_CmdId["CMD_ID"] = 4179] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchSuccNotify_CmdId[PlayerMatchSuccNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerMatchSuccNotify_CmdId[PlayerMatchSuccNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerMatchSuccNotify_CmdId = exports.PlayerMatchSuccNotify_CmdId || (exports.PlayerMatchSuccNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerConfirmMatchReq.CmdId
 */
var PlayerConfirmMatchReq_CmdId;
(function (PlayerConfirmMatchReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerConfirmMatchReq_CmdId[PlayerConfirmMatchReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4172;
     */
    PlayerConfirmMatchReq_CmdId[PlayerConfirmMatchReq_CmdId["CMD_ID"] = 4172] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerConfirmMatchReq_CmdId[PlayerConfirmMatchReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerConfirmMatchReq_CmdId[PlayerConfirmMatchReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerConfirmMatchReq_CmdId[PlayerConfirmMatchReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerConfirmMatchReq_CmdId = exports.PlayerConfirmMatchReq_CmdId || (exports.PlayerConfirmMatchReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerConfirmMatchRsp.CmdId
 */
var PlayerConfirmMatchRsp_CmdId;
(function (PlayerConfirmMatchRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerConfirmMatchRsp_CmdId[PlayerConfirmMatchRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4194;
     */
    PlayerConfirmMatchRsp_CmdId[PlayerConfirmMatchRsp_CmdId["CMD_ID"] = 4194] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerConfirmMatchRsp_CmdId[PlayerConfirmMatchRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerConfirmMatchRsp_CmdId[PlayerConfirmMatchRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerConfirmMatchRsp_CmdId = exports.PlayerConfirmMatchRsp_CmdId || (exports.PlayerConfirmMatchRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerAllowEnterMpAfterAgreeMatchNotify.CmdId
 */
var PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId;
(function (PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId[PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4199;
     */
    PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId[PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId["CMD_ID"] = 4199] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId[PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId[PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId = exports.PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId || (exports.PlayerAllowEnterMpAfterAgreeMatchNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerMatchAgreedResultNotify.Reason
 */
var PlayerMatchAgreedResultNotify_Reason;
(function (PlayerMatchAgreedResultNotify_Reason) {
    /**
     * @generated from protobuf enum value: SUCC = 0;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["SUCC"] = 0] = "SUCC";
    /**
     * @generated from protobuf enum value: TARGET_SCENE_CANNOT_ENTER = 1;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["TARGET_SCENE_CANNOT_ENTER"] = 1] = "TARGET_SCENE_CANNOT_ENTER";
    /**
     * @generated from protobuf enum value: SELF_MP_UNAVAILABLE = 2;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["SELF_MP_UNAVAILABLE"] = 2] = "SELF_MP_UNAVAILABLE";
    /**
     * @generated from protobuf enum value: OTHER_DATA_VERSION_NOT_LATEST = 3;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["OTHER_DATA_VERSION_NOT_LATEST"] = 3] = "OTHER_DATA_VERSION_NOT_LATEST";
    /**
     * @generated from protobuf enum value: DATA_VERSION_NOT_LATEST = 4;
     */
    PlayerMatchAgreedResultNotify_Reason[PlayerMatchAgreedResultNotify_Reason["DATA_VERSION_NOT_LATEST"] = 4] = "DATA_VERSION_NOT_LATEST";
})(PlayerMatchAgreedResultNotify_Reason = exports.PlayerMatchAgreedResultNotify_Reason || (exports.PlayerMatchAgreedResultNotify_Reason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerMatchAgreedResultNotify.CmdId
 */
var PlayerMatchAgreedResultNotify_CmdId;
(function (PlayerMatchAgreedResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchAgreedResultNotify_CmdId[PlayerMatchAgreedResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4170;
     */
    PlayerMatchAgreedResultNotify_CmdId[PlayerMatchAgreedResultNotify_CmdId["CMD_ID"] = 4170] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerMatchAgreedResultNotify_CmdId[PlayerMatchAgreedResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerMatchAgreedResultNotify_CmdId[PlayerMatchAgreedResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerMatchAgreedResultNotify_CmdId = exports.PlayerMatchAgreedResultNotify_CmdId || (exports.PlayerMatchAgreedResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpAfterMatchAgreedNotify.CmdId
 */
var PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId;
(function (PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId[PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4195;
     */
    PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId[PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId["CMD_ID"] = 4195] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId[PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId[PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId = exports.PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId || (exports.PlayerApplyEnterMpAfterMatchAgreedNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerGeneralMatchDismissNotify.CmdId
 */
var PlayerGeneralMatchDismissNotify_CmdId;
(function (PlayerGeneralMatchDismissNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGeneralMatchDismissNotify_CmdId[PlayerGeneralMatchDismissNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4191;
     */
    PlayerGeneralMatchDismissNotify_CmdId[PlayerGeneralMatchDismissNotify_CmdId["CMD_ID"] = 4191] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGeneralMatchDismissNotify_CmdId[PlayerGeneralMatchDismissNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGeneralMatchDismissNotify_CmdId[PlayerGeneralMatchDismissNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerGeneralMatchDismissNotify_CmdId = exports.PlayerGeneralMatchDismissNotify_CmdId || (exports.PlayerGeneralMatchDismissNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerGeneralMatchConfirmNotify.CmdId
 */
var PlayerGeneralMatchConfirmNotify_CmdId;
(function (PlayerGeneralMatchConfirmNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGeneralMatchConfirmNotify_CmdId[PlayerGeneralMatchConfirmNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4192;
     */
    PlayerGeneralMatchConfirmNotify_CmdId[PlayerGeneralMatchConfirmNotify_CmdId["CMD_ID"] = 4192] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGeneralMatchConfirmNotify_CmdId[PlayerGeneralMatchConfirmNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGeneralMatchConfirmNotify_CmdId[PlayerGeneralMatchConfirmNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerGeneralMatchConfirmNotify_CmdId = exports.PlayerGeneralMatchConfirmNotify_CmdId || (exports.PlayerGeneralMatchConfirmNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerGetForceQuitBanInfoReq.CmdId
 */
var PlayerGetForceQuitBanInfoReq_CmdId;
(function (PlayerGetForceQuitBanInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGetForceQuitBanInfoReq_CmdId[PlayerGetForceQuitBanInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4164;
     */
    PlayerGetForceQuitBanInfoReq_CmdId[PlayerGetForceQuitBanInfoReq_CmdId["CMD_ID"] = 4164] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGetForceQuitBanInfoReq_CmdId[PlayerGetForceQuitBanInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGetForceQuitBanInfoReq_CmdId[PlayerGetForceQuitBanInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGetForceQuitBanInfoReq_CmdId[PlayerGetForceQuitBanInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerGetForceQuitBanInfoReq_CmdId = exports.PlayerGetForceQuitBanInfoReq_CmdId || (exports.PlayerGetForceQuitBanInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerGetForceQuitBanInfoRsp.CmdId
 */
var PlayerGetForceQuitBanInfoRsp_CmdId;
(function (PlayerGetForceQuitBanInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGetForceQuitBanInfoRsp_CmdId[PlayerGetForceQuitBanInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4197;
     */
    PlayerGetForceQuitBanInfoRsp_CmdId[PlayerGetForceQuitBanInfoRsp_CmdId["CMD_ID"] = 4197] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGetForceQuitBanInfoRsp_CmdId[PlayerGetForceQuitBanInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGetForceQuitBanInfoRsp_CmdId[PlayerGetForceQuitBanInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerGetForceQuitBanInfoRsp_CmdId = exports.PlayerGetForceQuitBanInfoRsp_CmdId || (exports.PlayerGetForceQuitBanInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerTryCancelGeneralMatchNotify.CmdId
 */
var ServerTryCancelGeneralMatchNotify_CmdId;
(function (ServerTryCancelGeneralMatchNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerTryCancelGeneralMatchNotify_CmdId[ServerTryCancelGeneralMatchNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4187;
     */
    ServerTryCancelGeneralMatchNotify_CmdId[ServerTryCancelGeneralMatchNotify_CmdId["CMD_ID"] = 4187] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerTryCancelGeneralMatchNotify_CmdId[ServerTryCancelGeneralMatchNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerTryCancelGeneralMatchNotify_CmdId[ServerTryCancelGeneralMatchNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerTryCancelGeneralMatchNotify_CmdId = exports.ServerTryCancelGeneralMatchNotify_CmdId || (exports.ServerTryCancelGeneralMatchNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerGCGMatchDismissNotify.CmdId
 */
var PlayerGCGMatchDismissNotify_CmdId;
(function (PlayerGCGMatchDismissNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGCGMatchDismissNotify_CmdId[PlayerGCGMatchDismissNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4173;
     */
    PlayerGCGMatchDismissNotify_CmdId[PlayerGCGMatchDismissNotify_CmdId["CMD_ID"] = 4173] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGCGMatchDismissNotify_CmdId[PlayerGCGMatchDismissNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGCGMatchDismissNotify_CmdId[PlayerGCGMatchDismissNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerGCGMatchDismissNotify_CmdId = exports.PlayerGCGMatchDismissNotify_CmdId || (exports.PlayerGCGMatchDismissNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerGCGMatchConfirmNotify.CmdId
 */
var PlayerGCGMatchConfirmNotify_CmdId;
(function (PlayerGCGMatchConfirmNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGCGMatchConfirmNotify_CmdId[PlayerGCGMatchConfirmNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4185;
     */
    PlayerGCGMatchConfirmNotify_CmdId[PlayerGCGMatchConfirmNotify_CmdId["CMD_ID"] = 4185] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGCGMatchConfirmNotify_CmdId[PlayerGCGMatchConfirmNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGCGMatchConfirmNotify_CmdId[PlayerGCGMatchConfirmNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerGCGMatchConfirmNotify_CmdId = exports.PlayerGCGMatchConfirmNotify_CmdId || (exports.PlayerGCGMatchConfirmNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerStartMatchReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerStartMatchReq", [
            { no: 3, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] },
            { no: 12, name: "mechanicus_difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "match_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { matchParamList: [] };
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
                case /* optional com.midnights.game.MatchType match_type */ 3:
                    message.matchType = reader.int32();
                    break;
                case /* optional uint32 mechanicus_difficult_level */ 12:
                    message.mechanicusDifficultLevel = reader.uint32();
                    break;
                case /* repeated uint32 match_param_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.matchParamList.push(reader.uint32());
                    else
                        message.matchParamList.push(reader.uint32());
                    break;
                case /* optional uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint32 mp_play_id */ 15:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional uint32 match_id */ 6:
                    message.matchId = reader.uint32();
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
        /* optional com.midnights.game.MatchType match_type = 3; */
        if (message.matchType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.matchType);
        /* optional uint32 mechanicus_difficult_level = 12; */
        if (message.mechanicusDifficultLevel !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.mechanicusDifficultLevel);
        /* repeated uint32 match_param_list = 11; */
        if (message.matchParamList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.matchParamList.length; i++)
                writer.uint32(message.matchParamList[i]);
            writer.join();
        }
        /* optional uint32 dungeon_id = 1; */
        if (message.dungeonId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* optional uint32 mp_play_id = 15; */
        if (message.mpPlayId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.mpPlayId);
        /* optional uint32 match_id = 6; */
        if (message.matchId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerStartMatchReq
 */
exports.PlayerStartMatchReq = new PlayerStartMatchReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerStartMatchRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerStartMatchRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "punish_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "mechanicus_difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] }
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
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 punish_end_time */ 5:
                    message.punishEndTime = reader.uint32();
                    break;
                case /* optional uint32 param */ 4:
                    message.param = reader.uint32();
                    break;
                case /* optional uint32 mp_play_id */ 13:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional uint32 mechanicus_difficult_level */ 2:
                    message.mechanicusDifficultLevel = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 3:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint32 match_id */ 8:
                    message.matchId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MatchType match_type */ 7:
                    message.matchType = reader.int32();
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
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 punish_end_time = 5; */
        if (message.punishEndTime !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.punishEndTime);
        /* optional uint32 param = 4; */
        if (message.param !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.param);
        /* optional uint32 mp_play_id = 13; */
        if (message.mpPlayId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.mpPlayId);
        /* optional uint32 mechanicus_difficult_level = 2; */
        if (message.mechanicusDifficultLevel !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.mechanicusDifficultLevel);
        /* optional uint32 dungeon_id = 3; */
        if (message.dungeonId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* optional uint32 match_id = 8; */
        if (message.matchId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.matchId);
        /* optional com.midnights.game.MatchType match_type = 7; */
        if (message.matchType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.matchType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerStartMatchRsp
 */
exports.PlayerStartMatchRsp = new PlayerStartMatchRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerMatchInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerMatchInfoNotify", [
            { no: 8, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "match_begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] },
            { no: 12, name: "mechanicus_difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "match_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "estimate_match_cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "host_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { matchParamList: [] };
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
                case /* optional uint32 match_id */ 8:
                    message.matchId = reader.uint32();
                    break;
                case /* optional uint32 match_begin_time */ 4:
                    message.matchBeginTime = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 10:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MatchType match_type */ 11:
                    message.matchType = reader.int32();
                    break;
                case /* optional uint32 mechanicus_difficult_level */ 12:
                    message.mechanicusDifficultLevel = reader.uint32();
                    break;
                case /* repeated uint32 match_param_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.matchParamList.push(reader.uint32());
                    else
                        message.matchParamList.push(reader.uint32());
                    break;
                case /* optional uint32 estimate_match_cost_time */ 3:
                    message.estimateMatchCostTime = reader.uint32();
                    break;
                case /* optional uint32 mp_play_id */ 5:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional uint32 host_uid */ 13:
                    message.hostUid = reader.uint32();
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
        /* optional uint32 match_id = 8; */
        if (message.matchId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.matchId);
        /* optional uint32 match_begin_time = 4; */
        if (message.matchBeginTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.matchBeginTime);
        /* optional uint32 dungeon_id = 10; */
        if (message.dungeonId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* optional com.midnights.game.MatchType match_type = 11; */
        if (message.matchType !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.matchType);
        /* optional uint32 mechanicus_difficult_level = 12; */
        if (message.mechanicusDifficultLevel !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.mechanicusDifficultLevel);
        /* repeated uint32 match_param_list = 6; */
        if (message.matchParamList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.matchParamList.length; i++)
                writer.uint32(message.matchParamList[i]);
            writer.join();
        }
        /* optional uint32 estimate_match_cost_time = 3; */
        if (message.estimateMatchCostTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.estimateMatchCostTime);
        /* optional uint32 mp_play_id = 5; */
        if (message.mpPlayId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.mpPlayId);
        /* optional uint32 host_uid = 13; */
        if (message.hostUid !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.hostUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerMatchInfoNotify
 */
exports.PlayerMatchInfoNotify = new PlayerMatchInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCancelMatchReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCancelMatchReq", [
            { no: 11, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] }
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
                case /* optional com.midnights.game.MatchType match_type */ 11:
                    message.matchType = reader.int32();
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
        /* optional com.midnights.game.MatchType match_type = 11; */
        if (message.matchType !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.matchType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCancelMatchReq
 */
exports.PlayerCancelMatchReq = new PlayerCancelMatchReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCancelMatchRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCancelMatchRsp", [
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] }
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
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.MatchType match_type */ 7:
                    message.matchType = reader.int32();
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
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.MatchType match_type = 7; */
        if (message.matchType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.matchType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCancelMatchRsp
 */
exports.PlayerCancelMatchRsp = new PlayerCancelMatchRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerMatchStopNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerMatchStopNotify", [
            { no: 1, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchReason", define_2.MatchReason] },
            { no: 12, name: "host_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.MatchReason reason */ 1:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 host_uid */ 12:
                    message.hostUid = reader.uint32();
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
        /* optional com.midnights.game.MatchReason reason = 1; */
        if (message.reason !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.reason);
        /* optional uint32 host_uid = 12; */
        if (message.hostUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.hostUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerMatchStopNotify
 */
exports.PlayerMatchStopNotify = new PlayerMatchStopNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MatchPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MatchPlayerInfo", [
            { no: 9, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "player_info", kind: "message", T: () => define_1.OnlinePlayerInfo }
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
                case /* optional bool is_agreed */ 9:
                    message.isAgreed = reader.bool();
                    break;
                case /* optional com.midnights.game.OnlinePlayerInfo player_info */ 2:
                    message.playerInfo = define_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
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
        /* optional bool is_agreed = 9; */
        if (message.isAgreed !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isAgreed);
        /* optional com.midnights.game.OnlinePlayerInfo player_info = 2; */
        if (message.playerInfo)
            define_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MatchPlayerInfo
 */
exports.MatchPlayerInfo = new MatchPlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GeneralMatchInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GeneralMatchInfo", [
            { no: 1, name: "match_param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "player_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MatchPlayerInfo }
        ]);
    }
    create(value) {
        const message = { playerList: [] };
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
                case /* optional uint32 match_param */ 1:
                    message.matchParam = reader.uint32();
                    break;
                case /* optional uint32 match_id */ 9:
                    message.matchId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.MatchPlayerInfo player_list */ 5:
                    message.playerList.push(exports.MatchPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 match_param = 1; */
        if (message.matchParam !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.matchParam);
        /* optional uint32 match_id = 9; */
        if (message.matchId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.matchId);
        /* repeated com.midnights.game.MatchPlayerInfo player_list = 5; */
        for (let i = 0; i < message.playerList.length; i++)
            exports.MatchPlayerInfo.internalBinaryWrite(message.playerList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GeneralMatchInfo
 */
exports.GeneralMatchInfo = new GeneralMatchInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMatchInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMatchInfo", [
            { no: 13, name: "player_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MatchPlayerInfo }
        ]);
    }
    create(value) {
        const message = { playerList: [] };
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
                case /* repeated com.midnights.game.MatchPlayerInfo player_list */ 13:
                    message.playerList.push(exports.MatchPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.MatchPlayerInfo player_list = 13; */
        for (let i = 0; i < message.playerList.length; i++)
            exports.MatchPlayerInfo.internalBinaryWrite(message.playerList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMatchInfo
 */
exports.GCGMatchInfo = new GCGMatchInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerMatchSuccNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerMatchSuccNotify", [
            { no: 7, name: "general_match_info", kind: "message", T: () => exports.GeneralMatchInfo },
            { no: 15, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "host_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] },
            { no: 11, name: "gcg_match_info", kind: "message", T: () => exports.GCGMatchInfo },
            { no: 2, name: "confirm_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "mechanicus_difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.GeneralMatchInfo general_match_info */ 7:
                    message.generalMatchInfo = exports.GeneralMatchInfo.internalBinaryRead(reader, reader.uint32(), options, message.generalMatchInfo);
                    break;
                case /* optional uint32 mp_play_id */ 15:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional uint32 host_uid */ 3:
                    message.hostUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.MatchType match_type */ 5:
                    message.matchType = reader.int32();
                    break;
                case /* optional com.midnights.game.GCGMatchInfo gcg_match_info */ 11:
                    message.gcgMatchInfo = exports.GCGMatchInfo.internalBinaryRead(reader, reader.uint32(), options, message.gcgMatchInfo);
                    break;
                case /* optional uint32 confirm_end_time */ 2:
                    message.confirmEndTime = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint32 mechanicus_difficult_level */ 1:
                    message.mechanicusDifficultLevel = reader.uint32();
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
        /* optional com.midnights.game.GeneralMatchInfo general_match_info = 7; */
        if (message.generalMatchInfo)
            exports.GeneralMatchInfo.internalBinaryWrite(message.generalMatchInfo, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 mp_play_id = 15; */
        if (message.mpPlayId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.mpPlayId);
        /* optional uint32 host_uid = 3; */
        if (message.hostUid !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.hostUid);
        /* optional com.midnights.game.MatchType match_type = 5; */
        if (message.matchType !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.matchType);
        /* optional com.midnights.game.GCGMatchInfo gcg_match_info = 11; */
        if (message.gcgMatchInfo)
            exports.GCGMatchInfo.internalBinaryWrite(message.gcgMatchInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 confirm_end_time = 2; */
        if (message.confirmEndTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.confirmEndTime);
        /* optional uint32 dungeon_id = 6; */
        if (message.dungeonId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* optional uint32 mechanicus_difficult_level = 1; */
        if (message.mechanicusDifficultLevel !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.mechanicusDifficultLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerMatchSuccNotify
 */
exports.PlayerMatchSuccNotify = new PlayerMatchSuccNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerConfirmMatchReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerConfirmMatchReq", [
            { no: 12, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] },
            { no: 10, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional com.midnights.game.MatchType match_type */ 12:
                    message.matchType = reader.int32();
                    break;
                case /* optional bool is_agreed */ 10:
                    message.isAgreed = reader.bool();
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
        /* optional com.midnights.game.MatchType match_type = 12; */
        if (message.matchType !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.matchType);
        /* optional bool is_agreed = 10; */
        if (message.isAgreed !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isAgreed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerConfirmMatchReq
 */
exports.PlayerConfirmMatchReq = new PlayerConfirmMatchReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerConfirmMatchRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerConfirmMatchRsp", [
            { no: 9, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] },
            { no: 4, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
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
                case /* optional com.midnights.game.MatchType match_type */ 9:
                    message.matchType = reader.int32();
                    break;
                case /* optional uint32 match_id */ 4:
                    message.matchId = reader.uint32();
                    break;
                case /* optional bool is_agreed */ 11:
                    message.isAgreed = reader.bool();
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
        /* optional com.midnights.game.MatchType match_type = 9; */
        if (message.matchType !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.matchType);
        /* optional uint32 match_id = 4; */
        if (message.matchId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.matchId);
        /* optional bool is_agreed = 11; */
        if (message.isAgreed !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isAgreed);
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerConfirmMatchRsp
 */
exports.PlayerConfirmMatchRsp = new PlayerConfirmMatchRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerAllowEnterMpAfterAgreeMatchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerAllowEnterMpAfterAgreeMatchNotify", [
            { no: 1, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 1:
                    message.targetUid = reader.uint32();
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
        /* optional uint32 target_uid = 1; */
        if (message.targetUid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerAllowEnterMpAfterAgreeMatchNotify
 */
exports.PlayerAllowEnterMpAfterAgreeMatchNotify = new PlayerAllowEnterMpAfterAgreeMatchNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerMatchAgreedResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerMatchAgreedResultNotify", [
            { no: 14, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] },
            { no: 8, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerMatchAgreedResultNotify.Reason", PlayerMatchAgreedResultNotify_Reason] }
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
                case /* optional uint32 target_uid */ 14:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.MatchType match_type */ 3:
                    message.matchType = reader.int32();
                    break;
                case /* optional com.midnights.game.PlayerMatchAgreedResultNotify.Reason reason */ 8:
                    message.reason = reader.int32();
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
        /* optional uint32 target_uid = 14; */
        if (message.targetUid !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional com.midnights.game.MatchType match_type = 3; */
        if (message.matchType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.matchType);
        /* optional com.midnights.game.PlayerMatchAgreedResultNotify.Reason reason = 8; */
        if (message.reason !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerMatchAgreedResultNotify
 */
exports.PlayerMatchAgreedResultNotify = new PlayerMatchAgreedResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpAfterMatchAgreedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterMpAfterMatchAgreedNotify", [
            { no: 11, name: "src_player_info", kind: "message", T: () => define_1.OnlinePlayerInfo },
            { no: 10, name: "matchserver_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "match_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchType", define_3.MatchType, "MATCH_TYPE_"] }
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
                case /* optional com.midnights.game.OnlinePlayerInfo src_player_info */ 11:
                    message.srcPlayerInfo = define_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.srcPlayerInfo);
                    break;
                case /* optional uint32 matchserver_id */ 10:
                    message.matchserverId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MatchType match_type */ 3:
                    message.matchType = reader.int32();
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
        /* optional com.midnights.game.OnlinePlayerInfo src_player_info = 11; */
        if (message.srcPlayerInfo)
            define_1.OnlinePlayerInfo.internalBinaryWrite(message.srcPlayerInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 matchserver_id = 10; */
        if (message.matchserverId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.matchserverId);
        /* optional com.midnights.game.MatchType match_type = 3; */
        if (message.matchType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.matchType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterMpAfterMatchAgreedNotify
 */
exports.PlayerApplyEnterMpAfterMatchAgreedNotify = new PlayerApplyEnterMpAfterMatchAgreedNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGeneralMatchDismissNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerGeneralMatchDismissNotify", [
            { no: 3, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchReason", define_2.MatchReason] },
            { no: 1, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uidList: [] };
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
                case /* repeated uint32 uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.MatchReason reason */ 13:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 match_id */ 1:
                    message.matchId = reader.uint32();
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
        /* repeated uint32 uid_list = 3; */
        if (message.uidList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* optional com.midnights.game.MatchReason reason = 13; */
        if (message.reason !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.reason);
        /* optional uint32 match_id = 1; */
        if (message.matchId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerGeneralMatchDismissNotify
 */
exports.PlayerGeneralMatchDismissNotify = new PlayerGeneralMatchDismissNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGeneralMatchConfirmNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerGeneralMatchConfirmNotify", [
            { no: 8, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 match_id */ 8:
                    message.matchId = reader.uint32();
                    break;
                case /* optional bool is_agree */ 13:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 uid */ 14:
                    message.uid = reader.uint32();
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
        /* optional uint32 match_id = 8; */
        if (message.matchId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.matchId);
        /* optional bool is_agree = 13; */
        if (message.isAgree !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isAgree);
        /* optional uint32 uid = 14; */
        if (message.uid !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerGeneralMatchConfirmNotify
 */
exports.PlayerGeneralMatchConfirmNotify = new PlayerGeneralMatchConfirmNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGetForceQuitBanInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerGetForceQuitBanInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerGetForceQuitBanInfoReq
 */
exports.PlayerGetForceQuitBanInfoReq = new PlayerGetForceQuitBanInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGetForceQuitBanInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerGetForceQuitBanInfoRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "expire_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 match_id */ 8:
                    message.matchId = reader.uint32();
                    break;
                case /* optional uint32 expire_time */ 13:
                    message.expireTime = reader.uint32();
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
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 match_id = 8; */
        if (message.matchId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.matchId);
        /* optional uint32 expire_time = 13; */
        if (message.expireTime !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.expireTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerGetForceQuitBanInfoRsp
 */
exports.PlayerGetForceQuitBanInfoRsp = new PlayerGetForceQuitBanInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerTryCancelGeneralMatchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerTryCancelGeneralMatchNotify", [
            { no: 9, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 match_id */ 9:
                    message.matchId = reader.uint32();
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
        /* optional uint32 match_id = 9; */
        if (message.matchId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerTryCancelGeneralMatchNotify
 */
exports.ServerTryCancelGeneralMatchNotify = new ServerTryCancelGeneralMatchNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGCGMatchDismissNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerGCGMatchDismissNotify", [
            { no: 11, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.MatchReason", define_2.MatchReason] },
            { no: 7, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uidList: [] };
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
                case /* optional uint32 match_id */ 11:
                    message.matchId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MatchReason reason */ 5:
                    message.reason = reader.int32();
                    break;
                case /* repeated uint32 uid_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
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
        /* optional uint32 match_id = 11; */
        if (message.matchId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.matchId);
        /* optional com.midnights.game.MatchReason reason = 5; */
        if (message.reason !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.reason);
        /* repeated uint32 uid_list = 7; */
        if (message.uidList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerGCGMatchDismissNotify
 */
exports.PlayerGCGMatchDismissNotify = new PlayerGCGMatchDismissNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGCGMatchConfirmNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerGCGMatchConfirmNotify", [
            { no: 10, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "match_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 uid */ 10:
                    message.uid = reader.uint32();
                    break;
                case /* optional bool is_agree */ 5:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 match_id */ 14:
                    message.matchId = reader.uint32();
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
        /* optional uint32 uid = 10; */
        if (message.uid !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional bool is_agree = 5; */
        if (message.isAgree !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isAgree);
        /* optional uint32 match_id = 14; */
        if (message.matchId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.matchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerGCGMatchConfirmNotify
 */
exports.PlayerGCGMatchConfirmNotify = new PlayerGCGMatchConfirmNotify$Type();
