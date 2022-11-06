"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpPlayGuestReplyInviteRsp = exports.MpPlayGuestReplyInviteReq = exports.MpPlayOwnerInviteNotify = exports.MpPlayOwnerStartInviteRsp = exports.MpPlayOwnerStartInviteReq = exports.MpPlayOwnerCheckRsp = exports.MpPlayOwnerCheckReq = exports.PSPlayerApplyEnterMpRsp = exports.PSPlayerApplyEnterMpReq = exports.PlayerSetOnlyMPWithPSPlayerRsp = exports.PlayerSetOnlyMPWithPSPlayerReq = exports.GetPlayerMpModeAvailabilityRsp = exports.GetPlayerMpModeAvailabilityReq = exports.PlayerPreEnterMpNotify = exports.PlayerQuitFromMpNotify = exports.PlayerApplyEnterMpResultRsp = exports.PlayerApplyEnterMpResultReq = exports.PlayerApplyEnterMpResultNotify = exports.PlayerApplyEnterMpRsp = exports.PlayerApplyEnterMpReq = exports.PlayerApplyEnterMpNotify = exports.MpBlockNotify_CmdId = exports.MpPlayPrepareInterruptNotify_CmdId = exports.MpPlayInviteResultNotify_CmdId = exports.MpPlayPrepareNotify_CmdId = exports.MpPlayGuestReplyNotify_CmdId = exports.MpPlayGuestReplyInviteRsp_CmdId = exports.MpPlayGuestReplyInviteReq_CmdId = exports.MpPlayOwnerInviteNotify_CmdId = exports.MpPlayOwnerStartInviteRsp_CmdId = exports.MpPlayOwnerStartInviteReq_CmdId = exports.MpPlayOwnerCheckRsp_CmdId = exports.MpPlayOwnerCheckReq_CmdId = exports.PSPlayerApplyEnterMpRsp_CmdId = exports.PSPlayerApplyEnterMpReq_CmdId = exports.PlayerSetOnlyMPWithPSPlayerRsp_CmdId = exports.PlayerSetOnlyMPWithPSPlayerReq_CmdId = exports.GetPlayerMpModeAvailabilityRsp_CmdId = exports.GetPlayerMpModeAvailabilityReq_CmdId = exports.PlayerPreEnterMpNotify_CmdId = exports.PlayerPreEnterMpNotify_State = exports.PlayerQuitFromMpNotify_CmdId = exports.PlayerQuitFromMpNotify_QuitReason = exports.PlayerApplyEnterMpResultRsp_CmdId = exports.PlayerApplyEnterMpResultReq_CmdId = exports.PlayerApplyEnterMpResultNotify_CmdId = exports.PlayerApplyEnterMpResultNotify_Reason = exports.PlayerApplyEnterMpRsp_CmdId = exports.PlayerApplyEnterMpReq_CmdId = exports.PlayerApplyEnterMpNotify_CmdId = void 0;
exports.MpBlockNotify = exports.MpPlayPrepareInterruptNotify = exports.MpPlayInviteResultNotify = exports.MpPlayPrepareNotify = exports.MpPlayGuestReplyNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpNotify.CmdId
 */
var PlayerApplyEnterMpNotify_CmdId;
(function (PlayerApplyEnterMpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpNotify_CmdId[PlayerApplyEnterMpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1826;
     */
    PlayerApplyEnterMpNotify_CmdId[PlayerApplyEnterMpNotify_CmdId["CMD_ID"] = 1826] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpNotify_CmdId[PlayerApplyEnterMpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpNotify_CmdId[PlayerApplyEnterMpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterMpNotify_CmdId = exports.PlayerApplyEnterMpNotify_CmdId || (exports.PlayerApplyEnterMpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpReq.CmdId
 */
var PlayerApplyEnterMpReq_CmdId;
(function (PlayerApplyEnterMpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpReq_CmdId[PlayerApplyEnterMpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1818;
     */
    PlayerApplyEnterMpReq_CmdId[PlayerApplyEnterMpReq_CmdId["CMD_ID"] = 1818] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpReq_CmdId[PlayerApplyEnterMpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpReq_CmdId[PlayerApplyEnterMpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpReq_CmdId[PlayerApplyEnterMpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerApplyEnterMpReq_CmdId = exports.PlayerApplyEnterMpReq_CmdId || (exports.PlayerApplyEnterMpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpRsp.CmdId
 */
var PlayerApplyEnterMpRsp_CmdId;
(function (PlayerApplyEnterMpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpRsp_CmdId[PlayerApplyEnterMpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1825;
     */
    PlayerApplyEnterMpRsp_CmdId[PlayerApplyEnterMpRsp_CmdId["CMD_ID"] = 1825] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpRsp_CmdId[PlayerApplyEnterMpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpRsp_CmdId[PlayerApplyEnterMpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterMpRsp_CmdId = exports.PlayerApplyEnterMpRsp_CmdId || (exports.PlayerApplyEnterMpRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpResultNotify.Reason
 */
var PlayerApplyEnterMpResultNotify_Reason;
(function (PlayerApplyEnterMpResultNotify_Reason) {
    /**
     * @generated from protobuf enum value: PLAYER_JUDGE = 0;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_JUDGE"] = 0] = "PLAYER_JUDGE";
    /**
     * @generated from protobuf enum value: SCENE_CANNOT_ENTER = 1;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["SCENE_CANNOT_ENTER"] = 1] = "SCENE_CANNOT_ENTER";
    /**
     * @generated from protobuf enum value: PLAYER_CANNOT_ENTER_MP = 2;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_CANNOT_ENTER_MP"] = 2] = "PLAYER_CANNOT_ENTER_MP";
    /**
     * @generated from protobuf enum value: SYSTEM_JUDGE = 3;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["SYSTEM_JUDGE"] = 3] = "SYSTEM_JUDGE";
    /**
     * @generated from protobuf enum value: ALLOW_ENTER_PLAYER_FULL = 4;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["ALLOW_ENTER_PLAYER_FULL"] = 4] = "ALLOW_ENTER_PLAYER_FULL";
    /**
     * @generated from protobuf enum value: WORLD_LEVEL_LOWER_THAN_HOST = 5;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["WORLD_LEVEL_LOWER_THAN_HOST"] = 5] = "WORLD_LEVEL_LOWER_THAN_HOST";
    /**
     * @generated from protobuf enum value: HOST_IN_MATCH = 6;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["HOST_IN_MATCH"] = 6] = "HOST_IN_MATCH";
    /**
     * @generated from protobuf enum value: PLAYER_IN_BLACKLIST = 7;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_IN_BLACKLIST"] = 7] = "PLAYER_IN_BLACKLIST";
    /**
     * @generated from protobuf enum value: PS_PLAYER_NOT_ACCEPT_OTHERS = 8;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PS_PLAYER_NOT_ACCEPT_OTHERS"] = 8] = "PS_PLAYER_NOT_ACCEPT_OTHERS";
    /**
     * @generated from protobuf enum value: HOST_IS_BLOCKED = 9;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["HOST_IS_BLOCKED"] = 9] = "HOST_IS_BLOCKED";
    /**
     * @generated from protobuf enum value: OTHER_DATA_VERSION_NOT_LATEST = 10;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["OTHER_DATA_VERSION_NOT_LATEST"] = 10] = "OTHER_DATA_VERSION_NOT_LATEST";
    /**
     * @generated from protobuf enum value: DATA_VERSION_NOT_LATEST = 11;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["DATA_VERSION_NOT_LATEST"] = 11] = "DATA_VERSION_NOT_LATEST";
    /**
     * @generated from protobuf enum value: PLAYER_NOT_IN_PLAYER_WORLD = 12;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["PLAYER_NOT_IN_PLAYER_WORLD"] = 12] = "PLAYER_NOT_IN_PLAYER_WORLD";
    /**
     * @generated from protobuf enum value: MAX_PLAYER = 13;
     */
    PlayerApplyEnterMpResultNotify_Reason[PlayerApplyEnterMpResultNotify_Reason["MAX_PLAYER"] = 13] = "MAX_PLAYER";
})(PlayerApplyEnterMpResultNotify_Reason = exports.PlayerApplyEnterMpResultNotify_Reason || (exports.PlayerApplyEnterMpResultNotify_Reason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpResultNotify.CmdId
 */
var PlayerApplyEnterMpResultNotify_CmdId;
(function (PlayerApplyEnterMpResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpResultNotify_CmdId[PlayerApplyEnterMpResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1807;
     */
    PlayerApplyEnterMpResultNotify_CmdId[PlayerApplyEnterMpResultNotify_CmdId["CMD_ID"] = 1807] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpResultNotify_CmdId[PlayerApplyEnterMpResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpResultNotify_CmdId[PlayerApplyEnterMpResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterMpResultNotify_CmdId = exports.PlayerApplyEnterMpResultNotify_CmdId || (exports.PlayerApplyEnterMpResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpResultReq.CmdId
 */
var PlayerApplyEnterMpResultReq_CmdId;
(function (PlayerApplyEnterMpResultReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpResultReq_CmdId[PlayerApplyEnterMpResultReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1802;
     */
    PlayerApplyEnterMpResultReq_CmdId[PlayerApplyEnterMpResultReq_CmdId["CMD_ID"] = 1802] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpResultReq_CmdId[PlayerApplyEnterMpResultReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpResultReq_CmdId[PlayerApplyEnterMpResultReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpResultReq_CmdId[PlayerApplyEnterMpResultReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerApplyEnterMpResultReq_CmdId = exports.PlayerApplyEnterMpResultReq_CmdId || (exports.PlayerApplyEnterMpResultReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerApplyEnterMpResultRsp.CmdId
 */
var PlayerApplyEnterMpResultRsp_CmdId;
(function (PlayerApplyEnterMpResultRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpResultRsp_CmdId[PlayerApplyEnterMpResultRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1831;
     */
    PlayerApplyEnterMpResultRsp_CmdId[PlayerApplyEnterMpResultRsp_CmdId["CMD_ID"] = 1831] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerApplyEnterMpResultRsp_CmdId[PlayerApplyEnterMpResultRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerApplyEnterMpResultRsp_CmdId[PlayerApplyEnterMpResultRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerApplyEnterMpResultRsp_CmdId = exports.PlayerApplyEnterMpResultRsp_CmdId || (exports.PlayerApplyEnterMpResultRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerQuitFromMpNotify.QuitReason
 */
var PlayerQuitFromMpNotify_QuitReason;
(function (PlayerQuitFromMpNotify_QuitReason) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: HOST_NO_OTHER_PLAYER = 1;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["HOST_NO_OTHER_PLAYER"] = 1] = "HOST_NO_OTHER_PLAYER";
    /**
     * @generated from protobuf enum value: KICK_BY_HOST = 2;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST"] = 2] = "KICK_BY_HOST";
    /**
     * @generated from protobuf enum value: BACK_TO_MY_WORLD = 3;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["BACK_TO_MY_WORLD"] = 3] = "BACK_TO_MY_WORLD";
    /**
     * @generated from protobuf enum value: KICK_BY_HOST_LOGOUT = 4;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST_LOGOUT"] = 4] = "KICK_BY_HOST_LOGOUT";
    /**
     * @generated from protobuf enum value: KICK_BY_HOST_BLOCK = 5;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST_BLOCK"] = 5] = "KICK_BY_HOST_BLOCK";
    /**
     * @generated from protobuf enum value: BE_BLOCKED = 6;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["BE_BLOCKED"] = 6] = "BE_BLOCKED";
    /**
     * @generated from protobuf enum value: KICK_BY_HOST_ENTER_HOME = 7;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_HOST_ENTER_HOME"] = 7] = "KICK_BY_HOST_ENTER_HOME";
    /**
     * @generated from protobuf enum value: HOST_SCENE_INVALID = 8;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["HOST_SCENE_INVALID"] = 8] = "HOST_SCENE_INVALID";
    /**
     * @generated from protobuf enum value: KICK_BY_PLAY = 9;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_PLAY"] = 9] = "KICK_BY_PLAY";
    /**
     * @generated from protobuf enum value: KICK_BY_ISLAND_PARTY_GALLERY_START_FAILED = 10;
     */
    PlayerQuitFromMpNotify_QuitReason[PlayerQuitFromMpNotify_QuitReason["KICK_BY_ISLAND_PARTY_GALLERY_START_FAILED"] = 10] = "KICK_BY_ISLAND_PARTY_GALLERY_START_FAILED";
})(PlayerQuitFromMpNotify_QuitReason = exports.PlayerQuitFromMpNotify_QuitReason || (exports.PlayerQuitFromMpNotify_QuitReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerQuitFromMpNotify.CmdId
 */
var PlayerQuitFromMpNotify_CmdId;
(function (PlayerQuitFromMpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitFromMpNotify_CmdId[PlayerQuitFromMpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1829;
     */
    PlayerQuitFromMpNotify_CmdId[PlayerQuitFromMpNotify_CmdId["CMD_ID"] = 1829] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitFromMpNotify_CmdId[PlayerQuitFromMpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerQuitFromMpNotify_CmdId[PlayerQuitFromMpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerQuitFromMpNotify_CmdId = exports.PlayerQuitFromMpNotify_CmdId || (exports.PlayerQuitFromMpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerPreEnterMpNotify.State
 */
var PlayerPreEnterMpNotify_State;
(function (PlayerPreEnterMpNotify_State) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    PlayerPreEnterMpNotify_State[PlayerPreEnterMpNotify_State["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: START = 1;
     */
    PlayerPreEnterMpNotify_State[PlayerPreEnterMpNotify_State["START"] = 1] = "START";
    /**
     * @generated from protobuf enum value: TIMEOUT = 2;
     */
    PlayerPreEnterMpNotify_State[PlayerPreEnterMpNotify_State["TIMEOUT"] = 2] = "TIMEOUT";
})(PlayerPreEnterMpNotify_State = exports.PlayerPreEnterMpNotify_State || (exports.PlayerPreEnterMpNotify_State = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerPreEnterMpNotify.CmdId
 */
var PlayerPreEnterMpNotify_CmdId;
(function (PlayerPreEnterMpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPreEnterMpNotify_CmdId[PlayerPreEnterMpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1822;
     */
    PlayerPreEnterMpNotify_CmdId[PlayerPreEnterMpNotify_CmdId["CMD_ID"] = 1822] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPreEnterMpNotify_CmdId[PlayerPreEnterMpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerPreEnterMpNotify_CmdId[PlayerPreEnterMpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerPreEnterMpNotify_CmdId = exports.PlayerPreEnterMpNotify_CmdId || (exports.PlayerPreEnterMpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerMpModeAvailabilityReq.CmdId
 */
var GetPlayerMpModeAvailabilityReq_CmdId;
(function (GetPlayerMpModeAvailabilityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerMpModeAvailabilityReq_CmdId[GetPlayerMpModeAvailabilityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1844;
     */
    GetPlayerMpModeAvailabilityReq_CmdId[GetPlayerMpModeAvailabilityReq_CmdId["CMD_ID"] = 1844] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerMpModeAvailabilityReq_CmdId[GetPlayerMpModeAvailabilityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerMpModeAvailabilityReq_CmdId[GetPlayerMpModeAvailabilityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerMpModeAvailabilityReq_CmdId[GetPlayerMpModeAvailabilityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerMpModeAvailabilityReq_CmdId = exports.GetPlayerMpModeAvailabilityReq_CmdId || (exports.GetPlayerMpModeAvailabilityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerMpModeAvailabilityRsp.CmdId
 */
var GetPlayerMpModeAvailabilityRsp_CmdId;
(function (GetPlayerMpModeAvailabilityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerMpModeAvailabilityRsp_CmdId[GetPlayerMpModeAvailabilityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1849;
     */
    GetPlayerMpModeAvailabilityRsp_CmdId[GetPlayerMpModeAvailabilityRsp_CmdId["CMD_ID"] = 1849] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerMpModeAvailabilityRsp_CmdId[GetPlayerMpModeAvailabilityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerMpModeAvailabilityRsp_CmdId[GetPlayerMpModeAvailabilityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetPlayerMpModeAvailabilityRsp_CmdId = exports.GetPlayerMpModeAvailabilityRsp_CmdId || (exports.GetPlayerMpModeAvailabilityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSetOnlyMPWithPSPlayerReq.CmdId
 */
var PlayerSetOnlyMPWithPSPlayerReq_CmdId;
(function (PlayerSetOnlyMPWithPSPlayerReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetOnlyMPWithPSPlayerReq_CmdId[PlayerSetOnlyMPWithPSPlayerReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1820;
     */
    PlayerSetOnlyMPWithPSPlayerReq_CmdId[PlayerSetOnlyMPWithPSPlayerReq_CmdId["CMD_ID"] = 1820] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetOnlyMPWithPSPlayerReq_CmdId[PlayerSetOnlyMPWithPSPlayerReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetOnlyMPWithPSPlayerReq_CmdId[PlayerSetOnlyMPWithPSPlayerReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetOnlyMPWithPSPlayerReq_CmdId[PlayerSetOnlyMPWithPSPlayerReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerSetOnlyMPWithPSPlayerReq_CmdId = exports.PlayerSetOnlyMPWithPSPlayerReq_CmdId || (exports.PlayerSetOnlyMPWithPSPlayerReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSetOnlyMPWithPSPlayerRsp.CmdId
 */
var PlayerSetOnlyMPWithPSPlayerRsp_CmdId;
(function (PlayerSetOnlyMPWithPSPlayerRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetOnlyMPWithPSPlayerRsp_CmdId[PlayerSetOnlyMPWithPSPlayerRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1845;
     */
    PlayerSetOnlyMPWithPSPlayerRsp_CmdId[PlayerSetOnlyMPWithPSPlayerRsp_CmdId["CMD_ID"] = 1845] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetOnlyMPWithPSPlayerRsp_CmdId[PlayerSetOnlyMPWithPSPlayerRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetOnlyMPWithPSPlayerRsp_CmdId[PlayerSetOnlyMPWithPSPlayerRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerSetOnlyMPWithPSPlayerRsp_CmdId = exports.PlayerSetOnlyMPWithPSPlayerRsp_CmdId || (exports.PlayerSetOnlyMPWithPSPlayerRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PSPlayerApplyEnterMpReq.CmdId
 */
var PSPlayerApplyEnterMpReq_CmdId;
(function (PSPlayerApplyEnterMpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSPlayerApplyEnterMpReq_CmdId[PSPlayerApplyEnterMpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1841;
     */
    PSPlayerApplyEnterMpReq_CmdId[PSPlayerApplyEnterMpReq_CmdId["CMD_ID"] = 1841] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSPlayerApplyEnterMpReq_CmdId[PSPlayerApplyEnterMpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PSPlayerApplyEnterMpReq_CmdId[PSPlayerApplyEnterMpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PSPlayerApplyEnterMpReq_CmdId[PSPlayerApplyEnterMpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PSPlayerApplyEnterMpReq_CmdId = exports.PSPlayerApplyEnterMpReq_CmdId || (exports.PSPlayerApplyEnterMpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PSPlayerApplyEnterMpRsp.CmdId
 */
var PSPlayerApplyEnterMpRsp_CmdId;
(function (PSPlayerApplyEnterMpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSPlayerApplyEnterMpRsp_CmdId[PSPlayerApplyEnterMpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1842;
     */
    PSPlayerApplyEnterMpRsp_CmdId[PSPlayerApplyEnterMpRsp_CmdId["CMD_ID"] = 1842] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSPlayerApplyEnterMpRsp_CmdId[PSPlayerApplyEnterMpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PSPlayerApplyEnterMpRsp_CmdId[PSPlayerApplyEnterMpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PSPlayerApplyEnterMpRsp_CmdId = exports.PSPlayerApplyEnterMpRsp_CmdId || (exports.PSPlayerApplyEnterMpRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayOwnerCheckReq.CmdId
 */
var MpPlayOwnerCheckReq_CmdId;
(function (MpPlayOwnerCheckReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerCheckReq_CmdId[MpPlayOwnerCheckReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1814;
     */
    MpPlayOwnerCheckReq_CmdId[MpPlayOwnerCheckReq_CmdId["CMD_ID"] = 1814] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerCheckReq_CmdId[MpPlayOwnerCheckReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayOwnerCheckReq_CmdId[MpPlayOwnerCheckReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayOwnerCheckReq_CmdId[MpPlayOwnerCheckReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MpPlayOwnerCheckReq_CmdId = exports.MpPlayOwnerCheckReq_CmdId || (exports.MpPlayOwnerCheckReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayOwnerCheckRsp.CmdId
 */
var MpPlayOwnerCheckRsp_CmdId;
(function (MpPlayOwnerCheckRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerCheckRsp_CmdId[MpPlayOwnerCheckRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1847;
     */
    MpPlayOwnerCheckRsp_CmdId[MpPlayOwnerCheckRsp_CmdId["CMD_ID"] = 1847] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerCheckRsp_CmdId[MpPlayOwnerCheckRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayOwnerCheckRsp_CmdId[MpPlayOwnerCheckRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayOwnerCheckRsp_CmdId = exports.MpPlayOwnerCheckRsp_CmdId || (exports.MpPlayOwnerCheckRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayOwnerStartInviteReq.CmdId
 */
var MpPlayOwnerStartInviteReq_CmdId;
(function (MpPlayOwnerStartInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerStartInviteReq_CmdId[MpPlayOwnerStartInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1837;
     */
    MpPlayOwnerStartInviteReq_CmdId[MpPlayOwnerStartInviteReq_CmdId["CMD_ID"] = 1837] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerStartInviteReq_CmdId[MpPlayOwnerStartInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayOwnerStartInviteReq_CmdId[MpPlayOwnerStartInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayOwnerStartInviteReq_CmdId[MpPlayOwnerStartInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MpPlayOwnerStartInviteReq_CmdId = exports.MpPlayOwnerStartInviteReq_CmdId || (exports.MpPlayOwnerStartInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayOwnerStartInviteRsp.CmdId
 */
var MpPlayOwnerStartInviteRsp_CmdId;
(function (MpPlayOwnerStartInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerStartInviteRsp_CmdId[MpPlayOwnerStartInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1823;
     */
    MpPlayOwnerStartInviteRsp_CmdId[MpPlayOwnerStartInviteRsp_CmdId["CMD_ID"] = 1823] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerStartInviteRsp_CmdId[MpPlayOwnerStartInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayOwnerStartInviteRsp_CmdId[MpPlayOwnerStartInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayOwnerStartInviteRsp_CmdId = exports.MpPlayOwnerStartInviteRsp_CmdId || (exports.MpPlayOwnerStartInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayOwnerInviteNotify.CmdId
 */
var MpPlayOwnerInviteNotify_CmdId;
(function (MpPlayOwnerInviteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerInviteNotify_CmdId[MpPlayOwnerInviteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1835;
     */
    MpPlayOwnerInviteNotify_CmdId[MpPlayOwnerInviteNotify_CmdId["CMD_ID"] = 1835] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayOwnerInviteNotify_CmdId[MpPlayOwnerInviteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayOwnerInviteNotify_CmdId[MpPlayOwnerInviteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayOwnerInviteNotify_CmdId = exports.MpPlayOwnerInviteNotify_CmdId || (exports.MpPlayOwnerInviteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayGuestReplyInviteReq.CmdId
 */
var MpPlayGuestReplyInviteReq_CmdId;
(function (MpPlayGuestReplyInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayGuestReplyInviteReq_CmdId[MpPlayGuestReplyInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1848;
     */
    MpPlayGuestReplyInviteReq_CmdId[MpPlayGuestReplyInviteReq_CmdId["CMD_ID"] = 1848] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayGuestReplyInviteReq_CmdId[MpPlayGuestReplyInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayGuestReplyInviteReq_CmdId[MpPlayGuestReplyInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayGuestReplyInviteReq_CmdId[MpPlayGuestReplyInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MpPlayGuestReplyInviteReq_CmdId = exports.MpPlayGuestReplyInviteReq_CmdId || (exports.MpPlayGuestReplyInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayGuestReplyInviteRsp.CmdId
 */
var MpPlayGuestReplyInviteRsp_CmdId;
(function (MpPlayGuestReplyInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayGuestReplyInviteRsp_CmdId[MpPlayGuestReplyInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1850;
     */
    MpPlayGuestReplyInviteRsp_CmdId[MpPlayGuestReplyInviteRsp_CmdId["CMD_ID"] = 1850] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayGuestReplyInviteRsp_CmdId[MpPlayGuestReplyInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayGuestReplyInviteRsp_CmdId[MpPlayGuestReplyInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayGuestReplyInviteRsp_CmdId = exports.MpPlayGuestReplyInviteRsp_CmdId || (exports.MpPlayGuestReplyInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayGuestReplyNotify.CmdId
 */
var MpPlayGuestReplyNotify_CmdId;
(function (MpPlayGuestReplyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayGuestReplyNotify_CmdId[MpPlayGuestReplyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1812;
     */
    MpPlayGuestReplyNotify_CmdId[MpPlayGuestReplyNotify_CmdId["CMD_ID"] = 1812] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayGuestReplyNotify_CmdId[MpPlayGuestReplyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayGuestReplyNotify_CmdId[MpPlayGuestReplyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayGuestReplyNotify_CmdId = exports.MpPlayGuestReplyNotify_CmdId || (exports.MpPlayGuestReplyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayPrepareNotify.CmdId
 */
var MpPlayPrepareNotify_CmdId;
(function (MpPlayPrepareNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayPrepareNotify_CmdId[MpPlayPrepareNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1833;
     */
    MpPlayPrepareNotify_CmdId[MpPlayPrepareNotify_CmdId["CMD_ID"] = 1833] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayPrepareNotify_CmdId[MpPlayPrepareNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayPrepareNotify_CmdId[MpPlayPrepareNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayPrepareNotify_CmdId = exports.MpPlayPrepareNotify_CmdId || (exports.MpPlayPrepareNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayInviteResultNotify.CmdId
 */
var MpPlayInviteResultNotify_CmdId;
(function (MpPlayInviteResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayInviteResultNotify_CmdId[MpPlayInviteResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1815;
     */
    MpPlayInviteResultNotify_CmdId[MpPlayInviteResultNotify_CmdId["CMD_ID"] = 1815] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayInviteResultNotify_CmdId[MpPlayInviteResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayInviteResultNotify_CmdId[MpPlayInviteResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayInviteResultNotify_CmdId = exports.MpPlayInviteResultNotify_CmdId || (exports.MpPlayInviteResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpPlayPrepareInterruptNotify.CmdId
 */
var MpPlayPrepareInterruptNotify_CmdId;
(function (MpPlayPrepareInterruptNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayPrepareInterruptNotify_CmdId[MpPlayPrepareInterruptNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1813;
     */
    MpPlayPrepareInterruptNotify_CmdId[MpPlayPrepareInterruptNotify_CmdId["CMD_ID"] = 1813] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpPlayPrepareInterruptNotify_CmdId[MpPlayPrepareInterruptNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpPlayPrepareInterruptNotify_CmdId[MpPlayPrepareInterruptNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpPlayPrepareInterruptNotify_CmdId = exports.MpPlayPrepareInterruptNotify_CmdId || (exports.MpPlayPrepareInterruptNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MpBlockNotify.CmdId
 */
var MpBlockNotify_CmdId;
(function (MpBlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpBlockNotify_CmdId[MpBlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1801;
     */
    MpBlockNotify_CmdId[MpBlockNotify_CmdId["CMD_ID"] = 1801] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MpBlockNotify_CmdId[MpBlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MpBlockNotify_CmdId[MpBlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MpBlockNotify_CmdId = exports.MpBlockNotify_CmdId || (exports.MpBlockNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterMpNotify", [
            { no: 5, name: "src_thread_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "src_app_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "src_player_info", kind: "message", T: () => define_1.OnlinePlayerInfo }
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
                case /* optional uint32 src_thread_index */ 5:
                    message.srcThreadIndex = reader.uint32();
                    break;
                case /* optional uint32 src_app_id */ 6:
                    message.srcAppId = reader.uint32();
                    break;
                case /* optional com.midnights.game.OnlinePlayerInfo src_player_info */ 2:
                    message.srcPlayerInfo = define_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.srcPlayerInfo);
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
        /* optional uint32 src_thread_index = 5; */
        if (message.srcThreadIndex !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.srcThreadIndex);
        /* optional uint32 src_app_id = 6; */
        if (message.srcAppId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.srcAppId);
        /* optional com.midnights.game.OnlinePlayerInfo src_player_info = 2; */
        if (message.srcPlayerInfo)
            define_1.OnlinePlayerInfo.internalBinaryWrite(message.srcPlayerInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterMpNotify
 */
exports.PlayerApplyEnterMpNotify = new PlayerApplyEnterMpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterMpReq", [
            { no: 4, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 4:
                    message.targetUid = reader.uint32();
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
        /* optional uint32 target_uid = 4; */
        if (message.targetUid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterMpReq
 */
exports.PlayerApplyEnterMpReq = new PlayerApplyEnterMpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterMpRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 target_uid */ 3:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional uint32 param */ 4:
                    message.param = reader.uint32();
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
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 target_uid = 3; */
        if (message.targetUid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* optional uint32 param = 4; */
        if (message.param !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterMpRsp
 */
exports.PlayerApplyEnterMpRsp = new PlayerApplyEnterMpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterMpResultNotify", [
            { no: 2, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "target_nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerApplyEnterMpResultNotify.Reason", PlayerApplyEnterMpResultNotify_Reason] },
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
                case /* optional bool is_agreed */ 2:
                    message.isAgreed = reader.bool();
                    break;
                case /* optional string target_nickname */ 12:
                    message.targetNickname = reader.string();
                    break;
                case /* optional com.midnights.game.PlayerApplyEnterMpResultNotify.Reason reason */ 13:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 target_uid */ 1:
                    message.targetUid = reader.uint32();
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
        /* optional bool is_agreed = 2; */
        if (message.isAgreed !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isAgreed);
        /* optional string target_nickname = 12; */
        if (message.targetNickname !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.targetNickname);
        /* optional com.midnights.game.PlayerApplyEnterMpResultNotify.Reason reason = 13; */
        if (message.reason !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 target_uid = 1; */
        if (message.targetUid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterMpResultNotify
 */
exports.PlayerApplyEnterMpResultNotify = new PlayerApplyEnterMpResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpResultReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterMpResultReq", [
            { no: 2, name: "apply_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 apply_uid */ 2:
                    message.applyUid = reader.uint32();
                    break;
                case /* optional bool is_agreed */ 12:
                    message.isAgreed = reader.bool();
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
        /* optional uint32 apply_uid = 2; */
        if (message.applyUid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.applyUid);
        /* optional bool is_agreed = 12; */
        if (message.isAgreed !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isAgreed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterMpResultReq
 */
exports.PlayerApplyEnterMpResultReq = new PlayerApplyEnterMpResultReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpResultRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerApplyEnterMpResultRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "is_agreed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "apply_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_agreed */ 3:
                    message.isAgreed = reader.bool();
                    break;
                case /* optional uint32 apply_uid */ 10:
                    message.applyUid = reader.uint32();
                    break;
                case /* optional uint32 param */ 12:
                    message.param = reader.uint32();
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
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bool is_agreed = 3; */
        if (message.isAgreed !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isAgreed);
        /* optional uint32 apply_uid = 10; */
        if (message.applyUid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.applyUid);
        /* optional uint32 param = 12; */
        if (message.param !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerApplyEnterMpResultRsp
 */
exports.PlayerApplyEnterMpResultRsp = new PlayerApplyEnterMpResultRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerQuitFromMpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerQuitFromMpNotify", [
            { no: 11, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerQuitFromMpNotify.QuitReason", PlayerQuitFromMpNotify_QuitReason] }
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
                case /* optional com.midnights.game.PlayerQuitFromMpNotify.QuitReason reason */ 11:
                    message.reason = reader.int32();
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
        /* optional com.midnights.game.PlayerQuitFromMpNotify.QuitReason reason = 11; */
        if (message.reason !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerQuitFromMpNotify
 */
exports.PlayerQuitFromMpNotify = new PlayerQuitFromMpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerPreEnterMpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerPreEnterMpNotify", [
            { no: 2, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerPreEnterMpNotify.State", PlayerPreEnterMpNotify_State] },
            { no: 14, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional com.midnights.game.PlayerPreEnterMpNotify.State state */ 2:
                    message.state = reader.int32();
                    break;
                case /* optional uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* optional string nickname */ 6:
                    message.nickname = reader.string();
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
        /* optional com.midnights.game.PlayerPreEnterMpNotify.State state = 2; */
        if (message.state !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.state);
        /* optional uint32 uid = 14; */
        if (message.uid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional string nickname = 6; */
        if (message.nickname !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.nickname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerPreEnterMpNotify
 */
exports.PlayerPreEnterMpNotify = new PlayerPreEnterMpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerMpModeAvailabilityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerMpModeAvailabilityReq", []);
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
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerMpModeAvailabilityReq
 */
exports.GetPlayerMpModeAvailabilityReq = new GetPlayerMpModeAvailabilityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerMpModeAvailabilityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerMpModeAvailabilityRsp", [
            { no: 15, name: "mp_ret", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [] };
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
                case /* optional int32 mp_ret */ 15:
                    message.mpRet = reader.int32();
                    break;
                case /* optional int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 param_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
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
        /* optional int32 mp_ret = 15; */
        if (message.mpRet !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.mpRet);
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated uint32 param_list = 8; */
        if (message.paramList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerMpModeAvailabilityRsp
 */
exports.GetPlayerMpModeAvailabilityRsp = new GetPlayerMpModeAvailabilityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSetOnlyMPWithPSPlayerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSetOnlyMPWithPSPlayerReq", [
            { no: 13, name: "is_only", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_only */ 13:
                    message.isOnly = reader.bool();
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
        /* optional bool is_only = 13; */
        if (message.isOnly !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isOnly);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerSetOnlyMPWithPSPlayerReq
 */
exports.PlayerSetOnlyMPWithPSPlayerReq = new PlayerSetOnlyMPWithPSPlayerReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSetOnlyMPWithPSPlayerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSetOnlyMPWithPSPlayerRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "is_only", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_only */ 8:
                    message.isOnly = reader.bool();
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
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bool is_only = 8; */
        if (message.isOnly !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isOnly);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerSetOnlyMPWithPSPlayerRsp
 */
exports.PlayerSetOnlyMPWithPSPlayerRsp = new PlayerSetOnlyMPWithPSPlayerRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PSPlayerApplyEnterMpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PSPlayerApplyEnterMpReq", [
            { no: 5, name: "target_psn_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string target_psn_id */ 5:
                    message.targetPsnId = reader.string();
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
        /* optional string target_psn_id = 5; */
        if (message.targetPsnId !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.targetPsnId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PSPlayerApplyEnterMpReq
 */
exports.PSPlayerApplyEnterMpReq = new PSPlayerApplyEnterMpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PSPlayerApplyEnterMpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PSPlayerApplyEnterMpRsp", [
            { no: 2, name: "target_psn_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional string target_psn_id */ 2:
                    message.targetPsnId = reader.string();
                    break;
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 param */ 10:
                    message.param = reader.uint32();
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
        /* optional string target_psn_id = 2; */
        if (message.targetPsnId !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.targetPsnId);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 param = 10; */
        if (message.param !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PSPlayerApplyEnterMpRsp
 */
exports.PSPlayerApplyEnterMpRsp = new PSPlayerApplyEnterMpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayOwnerCheckReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayOwnerCheckReq", [
            { no: 9, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 mp_play_id */ 9:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional bool is_skip_match */ 3:
                    message.isSkipMatch = reader.bool();
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
        /* optional uint32 mp_play_id = 9; */
        if (message.mpPlayId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* optional bool is_skip_match = 3; */
        if (message.isSkipMatch !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isSkipMatch);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayOwnerCheckReq
 */
exports.MpPlayOwnerCheckReq = new MpPlayOwnerCheckReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayOwnerCheckRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayOwnerCheckRsp", [
            { no: 4, name: "wrong_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 wrong_uid */ 4:
                    message.wrongUid = reader.uint32();
                    break;
                case /* optional bool is_skip_match */ 15:
                    message.isSkipMatch = reader.bool();
                    break;
                case /* optional uint32 mp_play_id */ 10:
                    message.mpPlayId = reader.uint32();
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
        /* optional uint32 wrong_uid = 4; */
        if (message.wrongUid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.wrongUid);
        /* optional bool is_skip_match = 15; */
        if (message.isSkipMatch !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isSkipMatch);
        /* optional uint32 mp_play_id = 10; */
        if (message.mpPlayId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.mpPlayId);
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
 * @generated MessageType for protobuf message com.midnights.game.MpPlayOwnerCheckRsp
 */
exports.MpPlayOwnerCheckRsp = new MpPlayOwnerCheckRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayOwnerStartInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayOwnerStartInviteReq", [
            { no: 3, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 mp_play_id */ 3:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional bool is_skip_match */ 6:
                    message.isSkipMatch = reader.bool();
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
        /* optional uint32 mp_play_id = 3; */
        if (message.mpPlayId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* optional bool is_skip_match = 6; */
        if (message.isSkipMatch !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isSkipMatch);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayOwnerStartInviteReq
 */
exports.MpPlayOwnerStartInviteReq = new MpPlayOwnerStartInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayOwnerStartInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayOwnerStartInviteRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 mp_play_id */ 3:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional bool is_skip_match */ 9:
                    message.isSkipMatch = reader.bool();
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
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 mp_play_id = 3; */
        if (message.mpPlayId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* optional bool is_skip_match = 9; */
        if (message.isSkipMatch !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isSkipMatch);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayOwnerStartInviteRsp
 */
exports.MpPlayOwnerStartInviteRsp = new MpPlayOwnerStartInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayOwnerInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayOwnerInviteNotify", [
            { no: 12, name: "cd", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_remain_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 cd */ 12:
                    message.cd = reader.uint32();
                    break;
                case /* optional uint32 mp_play_id */ 13:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional bool is_remain_reward */ 10:
                    message.isRemainReward = reader.bool();
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
        /* optional uint32 cd = 12; */
        if (message.cd !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cd);
        /* optional uint32 mp_play_id = 13; */
        if (message.mpPlayId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* optional bool is_remain_reward = 10; */
        if (message.isRemainReward !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isRemainReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayOwnerInviteNotify
 */
exports.MpPlayOwnerInviteNotify = new MpPlayOwnerInviteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayGuestReplyInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayGuestReplyInviteReq", [
            { no: 3, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 mp_play_id */ 3:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional bool is_agree */ 15:
                    message.isAgree = reader.bool();
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
        /* optional uint32 mp_play_id = 3; */
        if (message.mpPlayId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* optional bool is_agree = 15; */
        if (message.isAgree !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isAgree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayGuestReplyInviteReq
 */
exports.MpPlayGuestReplyInviteReq = new MpPlayGuestReplyInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayGuestReplyInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayGuestReplyInviteRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 mp_play_id */ 10:
                    message.mpPlayId = reader.uint32();
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
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 mp_play_id = 10; */
        if (message.mpPlayId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayGuestReplyInviteRsp
 */
exports.MpPlayGuestReplyInviteRsp = new MpPlayGuestReplyInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayGuestReplyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayGuestReplyNotify", [
            { no: 7, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 uid */ 7:
                    message.uid = reader.uint32();
                    break;
                case /* optional bool is_agree */ 4:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 mp_play_id */ 14:
                    message.mpPlayId = reader.uint32();
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
        /* optional uint32 uid = 7; */
        if (message.uid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional bool is_agree = 4; */
        if (message.isAgree !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isAgree);
        /* optional uint32 mp_play_id = 14; */
        if (message.mpPlayId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayGuestReplyNotify
 */
exports.MpPlayGuestReplyNotify = new MpPlayGuestReplyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayPrepareNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayPrepareNotify", [
            { no: 9, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "prepare_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 mp_play_id */ 9:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional uint32 prepare_end_time */ 11:
                    message.prepareEndTime = reader.uint32();
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
        /* optional uint32 mp_play_id = 9; */
        if (message.mpPlayId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* optional uint32 prepare_end_time = 11; */
        if (message.prepareEndTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.prepareEndTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayPrepareNotify
 */
exports.MpPlayPrepareNotify = new MpPlayPrepareNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayInviteResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayInviteResultNotify", [
            { no: 11, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "all_argee", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 mp_play_id */ 11:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* optional bool all_argee */ 10:
                    message.allArgee = reader.bool();
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
        /* optional uint32 mp_play_id = 11; */
        if (message.mpPlayId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* optional bool all_argee = 10; */
        if (message.allArgee !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.allArgee);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayInviteResultNotify
 */
exports.MpPlayInviteResultNotify = new MpPlayInviteResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayPrepareInterruptNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpPlayPrepareInterruptNotify", [
            { no: 12, name: "mp_play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 mp_play_id */ 12:
                    message.mpPlayId = reader.uint32();
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
        /* optional uint32 mp_play_id = 12; */
        if (message.mpPlayId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpPlayPrepareInterruptNotify
 */
exports.MpPlayPrepareInterruptNotify = new MpPlayPrepareInterruptNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MpBlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MpBlockNotify", [
            { no: 13, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 end_time */ 13:
                    message.endTime = reader.uint32();
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
        /* optional uint32 end_time = 13; */
        if (message.endTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MpBlockNotify
 */
exports.MpBlockNotify = new MpBlockNotify$Type();
