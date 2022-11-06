"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractDailyDungeonInfoNotify_CmdId = exports.DungeonInterruptChallengeRsp_CmdId = exports.DungeonInterruptChallengeReq_CmdId = exports.DungeonSlipRevivePointActivateRsp_CmdId = exports.DungeonSlipRevivePointActivateReq_CmdId = exports.GetDailyDungeonEntryInfoRsp_CmdId = exports.GetDailyDungeonEntryInfoReq_CmdId = exports.DungeonCandidateTeamChangeAvatarRsp_CmdId = exports.DungeonCandidateTeamChangeAvatarReq_CmdId = exports.DungeonCandidateTeamSetReadyRsp_CmdId = exports.DungeonCandidateTeamSetReadyReq_CmdId = exports.DungeonCandidateTeamReplyInviteRsp_CmdId = exports.DungeonCandidateTeamReplyInviteReq_CmdId = exports.DungeonCandidateTeamLeaveRsp_CmdId = exports.DungeonCandidateTeamLeaveReq_CmdId = exports.DungeonCandidateTeamKickRsp_CmdId = exports.DungeonCandidateTeamKickReq_CmdId = exports.DungeonCandidateTeamInviteRsp_CmdId = exports.DungeonCandidateTeamInviteReq_CmdId = exports.DungeonCandidateTeamCreateRsp_CmdId = exports.DungeonCandidateTeamCreateReq_CmdId = exports.DungeonCandidateTeamDismissNotify_CmdId = exports.DungeonCandidateTeamPlayerLeaveNotify_CmdId = exports.DungeonCandidateTeamRefuseNotify_CmdId = exports.DungeonCandidateTeamInviteNotify_CmdId = exports.DungeonCandidateTeamInfoNotify_CmdId = exports.ChallengeRecordNotify_CmdId = exports.DungeonGetStatueDropRsp_CmdId = exports.DungeonGetStatueDropReq_CmdId = exports.DungeonFollowNotify_CmdId = exports.ChallengeDataNotify_CmdId = exports.DungeonChallengeFinishNotify_CmdId = exports.DungeonChallengeBeginNotify_CmdId = exports.DungeonDataNotify_CmdId = exports.DungeonPlayerDieRsp_CmdId = exports.DungeonPlayerDieReq_CmdId = exports.DungeonShowReminderNotify_CmdId = exports.DungeonDieOptionRsp_CmdId = exports.DungeonDieOptionReq_CmdId = exports.DungeonPlayerDieNotify_CmdId = exports.DungeonSettleNotify_CmdId = exports.DungeonWayPointActivateRsp_CmdId = exports.DungeonWayPointActivateReq_CmdId = exports.DungeonWayPointNotify_CmdId = exports.PlayerQuitDungeonRsp_CmdId = exports.PlayerQuitDungeonReq_CmdId = exports.PlayerEnterDungeonRsp_CmdId = exports.PlayerEnterDungeonReq_CmdId = exports.DungeonEntryInfoRsp_CmdId = exports.DungeonEntryInfoReq_CmdId = void 0;
exports.ChallengeDataNotify = exports.DungeonChallengeFinishNotify = exports.CustomDungeonResultInfo = exports.ChallengeBrief = exports.DungeonChallengeBeginNotify = exports.DungeonDataNotify = exports.DungeonPlayerDieRsp = exports.DungeonPlayerDieReq = exports.DungeonShowReminderNotify = exports.DungeonDieOptionRsp = exports.DungeonDieOptionReq = exports.DungeonPlayerDieNotify = exports.DungeonSettleNotify = exports.EffigyChallengeV2SettleInfo = exports.WindFieldDungeonSettleInfo = exports.InstableSprayDungeonSettleInfo = exports.SummerTimeV2DungeonSettleInfo = exports.CrystalLinkDungeonSettleInfo = exports.DungeonSettleExhibitionInfo = exports.StrengthenPointData = exports.DungeonWayPointActivateRsp = exports.DungeonWayPointActivateReq = exports.DungeonWayPointNotify = exports.PlayerQuitDungeonRsp = exports.PlayerQuitDungeonReq = exports.PlayerEnterDungeonRsp = exports.PlayerEnterDungeonReq = exports.DungeonEnterPosInfo = exports.DungeonEntryInfoRsp = exports.DungeonEntryPointInfo = exports.DungeonEntryInfo = exports.DungeonEntryInfoReq = exports.DungeonRestartReason = exports.DungeonCandidateTeamDismissReason = exports.DungeonCandidateTeamPlayerLeaveReason = exports.CustomDungeonFinishType = exports.ChallengeFinishType = exports.DungeonDataType = exports.WindFieldDungeonFailReason = exports.DungeonReviseLevelNotify_CmdId = exports.MistTrialFloorLevelNotify_CmdId = exports.DungeonCandidateTeamSetChangingAvatarRsp_CmdId = exports.DungeonCandidateTeamSetChangingAvatarReq_CmdId = exports.DungeonRestartResultNotify_CmdId = exports.DungeonRestartInviteReplyNotify_CmdId = exports.DungeonRestartInviteReplyRsp_CmdId = exports.DungeonRestartInviteReplyReq_CmdId = exports.DungeonRestartInviteNotify_CmdId = exports.DungeonRestartRsp_CmdId = exports.DungeonRestartReq_CmdId = void 0;
exports.DungeonReviseLevelNotify = exports.MistTrialFloorLevelNotify = exports.DungeonCandidateTeamSetChangingAvatarRsp = exports.DungeonCandidateTeamSetChangingAvatarReq = exports.DungeonRestartResultNotify = exports.DungeonRestartInviteReplyNotify = exports.DungeonRestartInviteReplyRsp = exports.DungeonRestartInviteReplyReq = exports.DungeonRestartInviteNotify = exports.DungeonRestartRsp = exports.DungeonRestartReq = exports.InteractDailyDungeonInfoNotify = exports.DungeonInterruptChallengeRsp = exports.DungeonInterruptChallengeReq = exports.DungeonSlipRevivePointActivateRsp = exports.DungeonSlipRevivePointActivateReq = exports.GetDailyDungeonEntryInfoRsp = exports.GetDailyDungeonEntryInfoReq = exports.DailyDungeonEntryInfo = exports.DungeonCandidateTeamChangeAvatarRsp = exports.DungeonCandidateTeamChangeAvatarReq = exports.DungeonCandidateTeamSetReadyRsp = exports.DungeonCandidateTeamSetReadyReq = exports.DungeonCandidateTeamReplyInviteRsp = exports.DungeonCandidateTeamReplyInviteReq = exports.DungeonCandidateTeamLeaveRsp = exports.DungeonCandidateTeamLeaveReq = exports.DungeonCandidateTeamKickRsp = exports.DungeonCandidateTeamKickReq = exports.DungeonCandidateTeamInviteRsp = exports.DungeonCandidateTeamInviteReq = exports.DungeonCandidateTeamCreateRsp = exports.DungeonCandidateTeamCreateReq = exports.DungeonCandidateTeamDismissNotify = exports.DungeonCandidateTeamPlayerLeaveNotify = exports.DungeonCandidateTeamRefuseNotify = exports.DungeonCandidateTeamInviteNotify = exports.DungeonCandidateTeamInfoNotify = exports.DungeonCandidateTeamAvatar = exports.ChallengeRecordNotify = exports.ChallengeRecord = exports.DungeonGetStatueDropRsp = exports.DungeonGetStatueDropReq = exports.DungeonFollowNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const cmd_activity_1 = require("./cmd_activity");
const define_3 = require("./define");
const define_4 = require("./define");
const cmd_activity_2 = require("./cmd_activity");
const cmd_activity_3 = require("./cmd_activity");
const cmd_activity_4 = require("./cmd_activity");
const cmd_activity_5 = require("./cmd_activity");
const cmd_tower_1 = require("./cmd_tower");
const define_5 = require("./define");
const define_6 = require("./define");
const define_7 = require("./define");
const define_8 = require("./define");
const define_9 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.DungeonEntryInfoReq.CmdId
 */
var DungeonEntryInfoReq_CmdId;
(function (DungeonEntryInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonEntryInfoReq_CmdId[DungeonEntryInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 972;
     */
    DungeonEntryInfoReq_CmdId[DungeonEntryInfoReq_CmdId["CMD_ID"] = 972] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonEntryInfoReq_CmdId[DungeonEntryInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonEntryInfoReq_CmdId[DungeonEntryInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonEntryInfoReq_CmdId[DungeonEntryInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonEntryInfoReq_CmdId = exports.DungeonEntryInfoReq_CmdId || (exports.DungeonEntryInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonEntryInfoRsp.CmdId
 */
var DungeonEntryInfoRsp_CmdId;
(function (DungeonEntryInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonEntryInfoRsp_CmdId[DungeonEntryInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 998;
     */
    DungeonEntryInfoRsp_CmdId[DungeonEntryInfoRsp_CmdId["CMD_ID"] = 998] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonEntryInfoRsp_CmdId[DungeonEntryInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonEntryInfoRsp_CmdId[DungeonEntryInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonEntryInfoRsp_CmdId = exports.DungeonEntryInfoRsp_CmdId || (exports.DungeonEntryInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerEnterDungeonReq.CmdId
 */
var PlayerEnterDungeonReq_CmdId;
(function (PlayerEnterDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterDungeonReq_CmdId[PlayerEnterDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 912;
     */
    PlayerEnterDungeonReq_CmdId[PlayerEnterDungeonReq_CmdId["CMD_ID"] = 912] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterDungeonReq_CmdId[PlayerEnterDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterDungeonReq_CmdId[PlayerEnterDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterDungeonReq_CmdId[PlayerEnterDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerEnterDungeonReq_CmdId = exports.PlayerEnterDungeonReq_CmdId || (exports.PlayerEnterDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerEnterDungeonRsp.CmdId
 */
var PlayerEnterDungeonRsp_CmdId;
(function (PlayerEnterDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterDungeonRsp_CmdId[PlayerEnterDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 935;
     */
    PlayerEnterDungeonRsp_CmdId[PlayerEnterDungeonRsp_CmdId["CMD_ID"] = 935] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterDungeonRsp_CmdId[PlayerEnterDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterDungeonRsp_CmdId[PlayerEnterDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerEnterDungeonRsp_CmdId = exports.PlayerEnterDungeonRsp_CmdId || (exports.PlayerEnterDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerQuitDungeonReq.CmdId
 */
var PlayerQuitDungeonReq_CmdId;
(function (PlayerQuitDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitDungeonReq_CmdId[PlayerQuitDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 907;
     */
    PlayerQuitDungeonReq_CmdId[PlayerQuitDungeonReq_CmdId["CMD_ID"] = 907] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitDungeonReq_CmdId[PlayerQuitDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerQuitDungeonReq_CmdId[PlayerQuitDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerQuitDungeonReq_CmdId[PlayerQuitDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerQuitDungeonReq_CmdId = exports.PlayerQuitDungeonReq_CmdId || (exports.PlayerQuitDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerQuitDungeonRsp.CmdId
 */
var PlayerQuitDungeonRsp_CmdId;
(function (PlayerQuitDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitDungeonRsp_CmdId[PlayerQuitDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 921;
     */
    PlayerQuitDungeonRsp_CmdId[PlayerQuitDungeonRsp_CmdId["CMD_ID"] = 921] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerQuitDungeonRsp_CmdId[PlayerQuitDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerQuitDungeonRsp_CmdId[PlayerQuitDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerQuitDungeonRsp_CmdId = exports.PlayerQuitDungeonRsp_CmdId || (exports.PlayerQuitDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonWayPointNotify.CmdId
 */
var DungeonWayPointNotify_CmdId;
(function (DungeonWayPointNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonWayPointNotify_CmdId[DungeonWayPointNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 903;
     */
    DungeonWayPointNotify_CmdId[DungeonWayPointNotify_CmdId["CMD_ID"] = 903] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonWayPointNotify_CmdId[DungeonWayPointNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonWayPointNotify_CmdId[DungeonWayPointNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonWayPointNotify_CmdId = exports.DungeonWayPointNotify_CmdId || (exports.DungeonWayPointNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonWayPointActivateReq.CmdId
 */
var DungeonWayPointActivateReq_CmdId;
(function (DungeonWayPointActivateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonWayPointActivateReq_CmdId[DungeonWayPointActivateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 990;
     */
    DungeonWayPointActivateReq_CmdId[DungeonWayPointActivateReq_CmdId["CMD_ID"] = 990] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonWayPointActivateReq_CmdId[DungeonWayPointActivateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonWayPointActivateReq_CmdId[DungeonWayPointActivateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonWayPointActivateReq_CmdId[DungeonWayPointActivateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonWayPointActivateReq_CmdId = exports.DungeonWayPointActivateReq_CmdId || (exports.DungeonWayPointActivateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonWayPointActivateRsp.CmdId
 */
var DungeonWayPointActivateRsp_CmdId;
(function (DungeonWayPointActivateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonWayPointActivateRsp_CmdId[DungeonWayPointActivateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 973;
     */
    DungeonWayPointActivateRsp_CmdId[DungeonWayPointActivateRsp_CmdId["CMD_ID"] = 973] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonWayPointActivateRsp_CmdId[DungeonWayPointActivateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonWayPointActivateRsp_CmdId[DungeonWayPointActivateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonWayPointActivateRsp_CmdId = exports.DungeonWayPointActivateRsp_CmdId || (exports.DungeonWayPointActivateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonSettleNotify.CmdId
 */
var DungeonSettleNotify_CmdId;
(function (DungeonSettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonSettleNotify_CmdId[DungeonSettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 999;
     */
    DungeonSettleNotify_CmdId[DungeonSettleNotify_CmdId["CMD_ID"] = 999] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonSettleNotify_CmdId[DungeonSettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonSettleNotify_CmdId[DungeonSettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonSettleNotify_CmdId = exports.DungeonSettleNotify_CmdId || (exports.DungeonSettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonPlayerDieNotify.CmdId
 */
var DungeonPlayerDieNotify_CmdId;
(function (DungeonPlayerDieNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonPlayerDieNotify_CmdId[DungeonPlayerDieNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 931;
     */
    DungeonPlayerDieNotify_CmdId[DungeonPlayerDieNotify_CmdId["CMD_ID"] = 931] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonPlayerDieNotify_CmdId[DungeonPlayerDieNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonPlayerDieNotify_CmdId[DungeonPlayerDieNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonPlayerDieNotify_CmdId = exports.DungeonPlayerDieNotify_CmdId || (exports.DungeonPlayerDieNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonDieOptionReq.CmdId
 */
var DungeonDieOptionReq_CmdId;
(function (DungeonDieOptionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonDieOptionReq_CmdId[DungeonDieOptionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 975;
     */
    DungeonDieOptionReq_CmdId[DungeonDieOptionReq_CmdId["CMD_ID"] = 975] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonDieOptionReq_CmdId[DungeonDieOptionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonDieOptionReq_CmdId[DungeonDieOptionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonDieOptionReq_CmdId[DungeonDieOptionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonDieOptionReq_CmdId = exports.DungeonDieOptionReq_CmdId || (exports.DungeonDieOptionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonDieOptionRsp.CmdId
 */
var DungeonDieOptionRsp_CmdId;
(function (DungeonDieOptionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonDieOptionRsp_CmdId[DungeonDieOptionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 948;
     */
    DungeonDieOptionRsp_CmdId[DungeonDieOptionRsp_CmdId["CMD_ID"] = 948] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonDieOptionRsp_CmdId[DungeonDieOptionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonDieOptionRsp_CmdId[DungeonDieOptionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonDieOptionRsp_CmdId = exports.DungeonDieOptionRsp_CmdId || (exports.DungeonDieOptionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonShowReminderNotify.CmdId
 */
var DungeonShowReminderNotify_CmdId;
(function (DungeonShowReminderNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonShowReminderNotify_CmdId[DungeonShowReminderNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 997;
     */
    DungeonShowReminderNotify_CmdId[DungeonShowReminderNotify_CmdId["CMD_ID"] = 997] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonShowReminderNotify_CmdId[DungeonShowReminderNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonShowReminderNotify_CmdId[DungeonShowReminderNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonShowReminderNotify_CmdId = exports.DungeonShowReminderNotify_CmdId || (exports.DungeonShowReminderNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonPlayerDieReq.CmdId
 */
var DungeonPlayerDieReq_CmdId;
(function (DungeonPlayerDieReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonPlayerDieReq_CmdId[DungeonPlayerDieReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 981;
     */
    DungeonPlayerDieReq_CmdId[DungeonPlayerDieReq_CmdId["CMD_ID"] = 981] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonPlayerDieReq_CmdId[DungeonPlayerDieReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonPlayerDieReq_CmdId[DungeonPlayerDieReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonPlayerDieReq_CmdId[DungeonPlayerDieReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonPlayerDieReq_CmdId = exports.DungeonPlayerDieReq_CmdId || (exports.DungeonPlayerDieReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonPlayerDieRsp.CmdId
 */
var DungeonPlayerDieRsp_CmdId;
(function (DungeonPlayerDieRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonPlayerDieRsp_CmdId[DungeonPlayerDieRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 905;
     */
    DungeonPlayerDieRsp_CmdId[DungeonPlayerDieRsp_CmdId["CMD_ID"] = 905] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonPlayerDieRsp_CmdId[DungeonPlayerDieRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonPlayerDieRsp_CmdId[DungeonPlayerDieRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonPlayerDieRsp_CmdId = exports.DungeonPlayerDieRsp_CmdId || (exports.DungeonPlayerDieRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonDataNotify.CmdId
 */
var DungeonDataNotify_CmdId;
(function (DungeonDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonDataNotify_CmdId[DungeonDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 982;
     */
    DungeonDataNotify_CmdId[DungeonDataNotify_CmdId["CMD_ID"] = 982] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonDataNotify_CmdId[DungeonDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonDataNotify_CmdId[DungeonDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonDataNotify_CmdId = exports.DungeonDataNotify_CmdId || (exports.DungeonDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonChallengeBeginNotify.CmdId
 */
var DungeonChallengeBeginNotify_CmdId;
(function (DungeonChallengeBeginNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonChallengeBeginNotify_CmdId[DungeonChallengeBeginNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 947;
     */
    DungeonChallengeBeginNotify_CmdId[DungeonChallengeBeginNotify_CmdId["CMD_ID"] = 947] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonChallengeBeginNotify_CmdId[DungeonChallengeBeginNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonChallengeBeginNotify_CmdId[DungeonChallengeBeginNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonChallengeBeginNotify_CmdId = exports.DungeonChallengeBeginNotify_CmdId || (exports.DungeonChallengeBeginNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonChallengeFinishNotify.CmdId
 */
var DungeonChallengeFinishNotify_CmdId;
(function (DungeonChallengeFinishNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonChallengeFinishNotify_CmdId[DungeonChallengeFinishNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 939;
     */
    DungeonChallengeFinishNotify_CmdId[DungeonChallengeFinishNotify_CmdId["CMD_ID"] = 939] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonChallengeFinishNotify_CmdId[DungeonChallengeFinishNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonChallengeFinishNotify_CmdId[DungeonChallengeFinishNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonChallengeFinishNotify_CmdId = exports.DungeonChallengeFinishNotify_CmdId || (exports.DungeonChallengeFinishNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChallengeDataNotify.CmdId
 */
var ChallengeDataNotify_CmdId;
(function (ChallengeDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChallengeDataNotify_CmdId[ChallengeDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 953;
     */
    ChallengeDataNotify_CmdId[ChallengeDataNotify_CmdId["CMD_ID"] = 953] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChallengeDataNotify_CmdId[ChallengeDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChallengeDataNotify_CmdId[ChallengeDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChallengeDataNotify_CmdId = exports.ChallengeDataNotify_CmdId || (exports.ChallengeDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonFollowNotify.CmdId
 */
var DungeonFollowNotify_CmdId;
(function (DungeonFollowNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonFollowNotify_CmdId[DungeonFollowNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 922;
     */
    DungeonFollowNotify_CmdId[DungeonFollowNotify_CmdId["CMD_ID"] = 922] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonFollowNotify_CmdId[DungeonFollowNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonFollowNotify_CmdId[DungeonFollowNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonFollowNotify_CmdId = exports.DungeonFollowNotify_CmdId || (exports.DungeonFollowNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonGetStatueDropReq.CmdId
 */
var DungeonGetStatueDropReq_CmdId;
(function (DungeonGetStatueDropReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonGetStatueDropReq_CmdId[DungeonGetStatueDropReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 965;
     */
    DungeonGetStatueDropReq_CmdId[DungeonGetStatueDropReq_CmdId["CMD_ID"] = 965] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonGetStatueDropReq_CmdId[DungeonGetStatueDropReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonGetStatueDropReq_CmdId[DungeonGetStatueDropReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonGetStatueDropReq_CmdId[DungeonGetStatueDropReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonGetStatueDropReq_CmdId = exports.DungeonGetStatueDropReq_CmdId || (exports.DungeonGetStatueDropReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonGetStatueDropRsp.CmdId
 */
var DungeonGetStatueDropRsp_CmdId;
(function (DungeonGetStatueDropRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonGetStatueDropRsp_CmdId[DungeonGetStatueDropRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 904;
     */
    DungeonGetStatueDropRsp_CmdId[DungeonGetStatueDropRsp_CmdId["CMD_ID"] = 904] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonGetStatueDropRsp_CmdId[DungeonGetStatueDropRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonGetStatueDropRsp_CmdId[DungeonGetStatueDropRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonGetStatueDropRsp_CmdId = exports.DungeonGetStatueDropRsp_CmdId || (exports.DungeonGetStatueDropRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChallengeRecordNotify.CmdId
 */
var ChallengeRecordNotify_CmdId;
(function (ChallengeRecordNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChallengeRecordNotify_CmdId[ChallengeRecordNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 993;
     */
    ChallengeRecordNotify_CmdId[ChallengeRecordNotify_CmdId["CMD_ID"] = 993] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChallengeRecordNotify_CmdId[ChallengeRecordNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChallengeRecordNotify_CmdId[ChallengeRecordNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChallengeRecordNotify_CmdId = exports.ChallengeRecordNotify_CmdId || (exports.ChallengeRecordNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamInfoNotify.CmdId
 */
var DungeonCandidateTeamInfoNotify_CmdId;
(function (DungeonCandidateTeamInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInfoNotify_CmdId[DungeonCandidateTeamInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 927;
     */
    DungeonCandidateTeamInfoNotify_CmdId[DungeonCandidateTeamInfoNotify_CmdId["CMD_ID"] = 927] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInfoNotify_CmdId[DungeonCandidateTeamInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamInfoNotify_CmdId[DungeonCandidateTeamInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamInfoNotify_CmdId = exports.DungeonCandidateTeamInfoNotify_CmdId || (exports.DungeonCandidateTeamInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamInviteNotify.CmdId
 */
var DungeonCandidateTeamInviteNotify_CmdId;
(function (DungeonCandidateTeamInviteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInviteNotify_CmdId[DungeonCandidateTeamInviteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 994;
     */
    DungeonCandidateTeamInviteNotify_CmdId[DungeonCandidateTeamInviteNotify_CmdId["CMD_ID"] = 994] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInviteNotify_CmdId[DungeonCandidateTeamInviteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamInviteNotify_CmdId[DungeonCandidateTeamInviteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamInviteNotify_CmdId = exports.DungeonCandidateTeamInviteNotify_CmdId || (exports.DungeonCandidateTeamInviteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamRefuseNotify.CmdId
 */
var DungeonCandidateTeamRefuseNotify_CmdId;
(function (DungeonCandidateTeamRefuseNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamRefuseNotify_CmdId[DungeonCandidateTeamRefuseNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 988;
     */
    DungeonCandidateTeamRefuseNotify_CmdId[DungeonCandidateTeamRefuseNotify_CmdId["CMD_ID"] = 988] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamRefuseNotify_CmdId[DungeonCandidateTeamRefuseNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamRefuseNotify_CmdId[DungeonCandidateTeamRefuseNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamRefuseNotify_CmdId = exports.DungeonCandidateTeamRefuseNotify_CmdId || (exports.DungeonCandidateTeamRefuseNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamPlayerLeaveNotify.CmdId
 */
var DungeonCandidateTeamPlayerLeaveNotify_CmdId;
(function (DungeonCandidateTeamPlayerLeaveNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamPlayerLeaveNotify_CmdId[DungeonCandidateTeamPlayerLeaveNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 926;
     */
    DungeonCandidateTeamPlayerLeaveNotify_CmdId[DungeonCandidateTeamPlayerLeaveNotify_CmdId["CMD_ID"] = 926] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamPlayerLeaveNotify_CmdId[DungeonCandidateTeamPlayerLeaveNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamPlayerLeaveNotify_CmdId[DungeonCandidateTeamPlayerLeaveNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamPlayerLeaveNotify_CmdId = exports.DungeonCandidateTeamPlayerLeaveNotify_CmdId || (exports.DungeonCandidateTeamPlayerLeaveNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamDismissNotify.CmdId
 */
var DungeonCandidateTeamDismissNotify_CmdId;
(function (DungeonCandidateTeamDismissNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamDismissNotify_CmdId[DungeonCandidateTeamDismissNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 963;
     */
    DungeonCandidateTeamDismissNotify_CmdId[DungeonCandidateTeamDismissNotify_CmdId["CMD_ID"] = 963] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamDismissNotify_CmdId[DungeonCandidateTeamDismissNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamDismissNotify_CmdId[DungeonCandidateTeamDismissNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamDismissNotify_CmdId = exports.DungeonCandidateTeamDismissNotify_CmdId || (exports.DungeonCandidateTeamDismissNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamCreateReq.CmdId
 */
var DungeonCandidateTeamCreateReq_CmdId;
(function (DungeonCandidateTeamCreateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamCreateReq_CmdId[DungeonCandidateTeamCreateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 995;
     */
    DungeonCandidateTeamCreateReq_CmdId[DungeonCandidateTeamCreateReq_CmdId["CMD_ID"] = 995] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamCreateReq_CmdId[DungeonCandidateTeamCreateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamCreateReq_CmdId[DungeonCandidateTeamCreateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamCreateReq_CmdId[DungeonCandidateTeamCreateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamCreateReq_CmdId = exports.DungeonCandidateTeamCreateReq_CmdId || (exports.DungeonCandidateTeamCreateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamCreateRsp.CmdId
 */
var DungeonCandidateTeamCreateRsp_CmdId;
(function (DungeonCandidateTeamCreateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamCreateRsp_CmdId[DungeonCandidateTeamCreateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 906;
     */
    DungeonCandidateTeamCreateRsp_CmdId[DungeonCandidateTeamCreateRsp_CmdId["CMD_ID"] = 906] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamCreateRsp_CmdId[DungeonCandidateTeamCreateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamCreateRsp_CmdId[DungeonCandidateTeamCreateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamCreateRsp_CmdId = exports.DungeonCandidateTeamCreateRsp_CmdId || (exports.DungeonCandidateTeamCreateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamInviteReq.CmdId
 */
var DungeonCandidateTeamInviteReq_CmdId;
(function (DungeonCandidateTeamInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInviteReq_CmdId[DungeonCandidateTeamInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 934;
     */
    DungeonCandidateTeamInviteReq_CmdId[DungeonCandidateTeamInviteReq_CmdId["CMD_ID"] = 934] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInviteReq_CmdId[DungeonCandidateTeamInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamInviteReq_CmdId[DungeonCandidateTeamInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamInviteReq_CmdId[DungeonCandidateTeamInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamInviteReq_CmdId = exports.DungeonCandidateTeamInviteReq_CmdId || (exports.DungeonCandidateTeamInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamInviteRsp.CmdId
 */
var DungeonCandidateTeamInviteRsp_CmdId;
(function (DungeonCandidateTeamInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInviteRsp_CmdId[DungeonCandidateTeamInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 950;
     */
    DungeonCandidateTeamInviteRsp_CmdId[DungeonCandidateTeamInviteRsp_CmdId["CMD_ID"] = 950] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamInviteRsp_CmdId[DungeonCandidateTeamInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamInviteRsp_CmdId[DungeonCandidateTeamInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamInviteRsp_CmdId = exports.DungeonCandidateTeamInviteRsp_CmdId || (exports.DungeonCandidateTeamInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamKickReq.CmdId
 */
var DungeonCandidateTeamKickReq_CmdId;
(function (DungeonCandidateTeamKickReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamKickReq_CmdId[DungeonCandidateTeamKickReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 943;
     */
    DungeonCandidateTeamKickReq_CmdId[DungeonCandidateTeamKickReq_CmdId["CMD_ID"] = 943] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamKickReq_CmdId[DungeonCandidateTeamKickReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamKickReq_CmdId[DungeonCandidateTeamKickReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamKickReq_CmdId[DungeonCandidateTeamKickReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamKickReq_CmdId = exports.DungeonCandidateTeamKickReq_CmdId || (exports.DungeonCandidateTeamKickReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamKickRsp.CmdId
 */
var DungeonCandidateTeamKickRsp_CmdId;
(function (DungeonCandidateTeamKickRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamKickRsp_CmdId[DungeonCandidateTeamKickRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 974;
     */
    DungeonCandidateTeamKickRsp_CmdId[DungeonCandidateTeamKickRsp_CmdId["CMD_ID"] = 974] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamKickRsp_CmdId[DungeonCandidateTeamKickRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamKickRsp_CmdId[DungeonCandidateTeamKickRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamKickRsp_CmdId = exports.DungeonCandidateTeamKickRsp_CmdId || (exports.DungeonCandidateTeamKickRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamLeaveReq.CmdId
 */
var DungeonCandidateTeamLeaveReq_CmdId;
(function (DungeonCandidateTeamLeaveReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamLeaveReq_CmdId[DungeonCandidateTeamLeaveReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 976;
     */
    DungeonCandidateTeamLeaveReq_CmdId[DungeonCandidateTeamLeaveReq_CmdId["CMD_ID"] = 976] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamLeaveReq_CmdId[DungeonCandidateTeamLeaveReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamLeaveReq_CmdId[DungeonCandidateTeamLeaveReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamLeaveReq_CmdId[DungeonCandidateTeamLeaveReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamLeaveReq_CmdId = exports.DungeonCandidateTeamLeaveReq_CmdId || (exports.DungeonCandidateTeamLeaveReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamLeaveRsp.CmdId
 */
var DungeonCandidateTeamLeaveRsp_CmdId;
(function (DungeonCandidateTeamLeaveRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamLeaveRsp_CmdId[DungeonCandidateTeamLeaveRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 946;
     */
    DungeonCandidateTeamLeaveRsp_CmdId[DungeonCandidateTeamLeaveRsp_CmdId["CMD_ID"] = 946] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamLeaveRsp_CmdId[DungeonCandidateTeamLeaveRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamLeaveRsp_CmdId[DungeonCandidateTeamLeaveRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamLeaveRsp_CmdId = exports.DungeonCandidateTeamLeaveRsp_CmdId || (exports.DungeonCandidateTeamLeaveRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamReplyInviteReq.CmdId
 */
var DungeonCandidateTeamReplyInviteReq_CmdId;
(function (DungeonCandidateTeamReplyInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamReplyInviteReq_CmdId[DungeonCandidateTeamReplyInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 941;
     */
    DungeonCandidateTeamReplyInviteReq_CmdId[DungeonCandidateTeamReplyInviteReq_CmdId["CMD_ID"] = 941] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamReplyInviteReq_CmdId[DungeonCandidateTeamReplyInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamReplyInviteReq_CmdId[DungeonCandidateTeamReplyInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamReplyInviteReq_CmdId[DungeonCandidateTeamReplyInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamReplyInviteReq_CmdId = exports.DungeonCandidateTeamReplyInviteReq_CmdId || (exports.DungeonCandidateTeamReplyInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamReplyInviteRsp.CmdId
 */
var DungeonCandidateTeamReplyInviteRsp_CmdId;
(function (DungeonCandidateTeamReplyInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamReplyInviteRsp_CmdId[DungeonCandidateTeamReplyInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 949;
     */
    DungeonCandidateTeamReplyInviteRsp_CmdId[DungeonCandidateTeamReplyInviteRsp_CmdId["CMD_ID"] = 949] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamReplyInviteRsp_CmdId[DungeonCandidateTeamReplyInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamReplyInviteRsp_CmdId[DungeonCandidateTeamReplyInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamReplyInviteRsp_CmdId = exports.DungeonCandidateTeamReplyInviteRsp_CmdId || (exports.DungeonCandidateTeamReplyInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamSetReadyReq.CmdId
 */
var DungeonCandidateTeamSetReadyReq_CmdId;
(function (DungeonCandidateTeamSetReadyReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetReadyReq_CmdId[DungeonCandidateTeamSetReadyReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 991;
     */
    DungeonCandidateTeamSetReadyReq_CmdId[DungeonCandidateTeamSetReadyReq_CmdId["CMD_ID"] = 991] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetReadyReq_CmdId[DungeonCandidateTeamSetReadyReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamSetReadyReq_CmdId[DungeonCandidateTeamSetReadyReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamSetReadyReq_CmdId[DungeonCandidateTeamSetReadyReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamSetReadyReq_CmdId = exports.DungeonCandidateTeamSetReadyReq_CmdId || (exports.DungeonCandidateTeamSetReadyReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamSetReadyRsp.CmdId
 */
var DungeonCandidateTeamSetReadyRsp_CmdId;
(function (DungeonCandidateTeamSetReadyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetReadyRsp_CmdId[DungeonCandidateTeamSetReadyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 924;
     */
    DungeonCandidateTeamSetReadyRsp_CmdId[DungeonCandidateTeamSetReadyRsp_CmdId["CMD_ID"] = 924] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetReadyRsp_CmdId[DungeonCandidateTeamSetReadyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamSetReadyRsp_CmdId[DungeonCandidateTeamSetReadyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamSetReadyRsp_CmdId = exports.DungeonCandidateTeamSetReadyRsp_CmdId || (exports.DungeonCandidateTeamSetReadyRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamChangeAvatarReq.CmdId
 */
var DungeonCandidateTeamChangeAvatarReq_CmdId;
(function (DungeonCandidateTeamChangeAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamChangeAvatarReq_CmdId[DungeonCandidateTeamChangeAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 956;
     */
    DungeonCandidateTeamChangeAvatarReq_CmdId[DungeonCandidateTeamChangeAvatarReq_CmdId["CMD_ID"] = 956] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamChangeAvatarReq_CmdId[DungeonCandidateTeamChangeAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamChangeAvatarReq_CmdId[DungeonCandidateTeamChangeAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamChangeAvatarReq_CmdId[DungeonCandidateTeamChangeAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamChangeAvatarReq_CmdId = exports.DungeonCandidateTeamChangeAvatarReq_CmdId || (exports.DungeonCandidateTeamChangeAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamChangeAvatarRsp.CmdId
 */
var DungeonCandidateTeamChangeAvatarRsp_CmdId;
(function (DungeonCandidateTeamChangeAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamChangeAvatarRsp_CmdId[DungeonCandidateTeamChangeAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 942;
     */
    DungeonCandidateTeamChangeAvatarRsp_CmdId[DungeonCandidateTeamChangeAvatarRsp_CmdId["CMD_ID"] = 942] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamChangeAvatarRsp_CmdId[DungeonCandidateTeamChangeAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamChangeAvatarRsp_CmdId[DungeonCandidateTeamChangeAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamChangeAvatarRsp_CmdId = exports.DungeonCandidateTeamChangeAvatarRsp_CmdId || (exports.DungeonCandidateTeamChangeAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetDailyDungeonEntryInfoReq.CmdId
 */
var GetDailyDungeonEntryInfoReq_CmdId;
(function (GetDailyDungeonEntryInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDailyDungeonEntryInfoReq_CmdId[GetDailyDungeonEntryInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 930;
     */
    GetDailyDungeonEntryInfoReq_CmdId[GetDailyDungeonEntryInfoReq_CmdId["CMD_ID"] = 930] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDailyDungeonEntryInfoReq_CmdId[GetDailyDungeonEntryInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetDailyDungeonEntryInfoReq_CmdId[GetDailyDungeonEntryInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetDailyDungeonEntryInfoReq_CmdId[GetDailyDungeonEntryInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetDailyDungeonEntryInfoReq_CmdId = exports.GetDailyDungeonEntryInfoReq_CmdId || (exports.GetDailyDungeonEntryInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetDailyDungeonEntryInfoRsp.CmdId
 */
var GetDailyDungeonEntryInfoRsp_CmdId;
(function (GetDailyDungeonEntryInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDailyDungeonEntryInfoRsp_CmdId[GetDailyDungeonEntryInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 967;
     */
    GetDailyDungeonEntryInfoRsp_CmdId[GetDailyDungeonEntryInfoRsp_CmdId["CMD_ID"] = 967] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDailyDungeonEntryInfoRsp_CmdId[GetDailyDungeonEntryInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetDailyDungeonEntryInfoRsp_CmdId[GetDailyDungeonEntryInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetDailyDungeonEntryInfoRsp_CmdId = exports.GetDailyDungeonEntryInfoRsp_CmdId || (exports.GetDailyDungeonEntryInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonSlipRevivePointActivateReq.CmdId
 */
var DungeonSlipRevivePointActivateReq_CmdId;
(function (DungeonSlipRevivePointActivateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonSlipRevivePointActivateReq_CmdId[DungeonSlipRevivePointActivateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 958;
     */
    DungeonSlipRevivePointActivateReq_CmdId[DungeonSlipRevivePointActivateReq_CmdId["CMD_ID"] = 958] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonSlipRevivePointActivateReq_CmdId[DungeonSlipRevivePointActivateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonSlipRevivePointActivateReq_CmdId[DungeonSlipRevivePointActivateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonSlipRevivePointActivateReq_CmdId[DungeonSlipRevivePointActivateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonSlipRevivePointActivateReq_CmdId = exports.DungeonSlipRevivePointActivateReq_CmdId || (exports.DungeonSlipRevivePointActivateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonSlipRevivePointActivateRsp.CmdId
 */
var DungeonSlipRevivePointActivateRsp_CmdId;
(function (DungeonSlipRevivePointActivateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonSlipRevivePointActivateRsp_CmdId[DungeonSlipRevivePointActivateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 970;
     */
    DungeonSlipRevivePointActivateRsp_CmdId[DungeonSlipRevivePointActivateRsp_CmdId["CMD_ID"] = 970] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonSlipRevivePointActivateRsp_CmdId[DungeonSlipRevivePointActivateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonSlipRevivePointActivateRsp_CmdId[DungeonSlipRevivePointActivateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonSlipRevivePointActivateRsp_CmdId = exports.DungeonSlipRevivePointActivateRsp_CmdId || (exports.DungeonSlipRevivePointActivateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonInterruptChallengeReq.CmdId
 */
var DungeonInterruptChallengeReq_CmdId;
(function (DungeonInterruptChallengeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonInterruptChallengeReq_CmdId[DungeonInterruptChallengeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 917;
     */
    DungeonInterruptChallengeReq_CmdId[DungeonInterruptChallengeReq_CmdId["CMD_ID"] = 917] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonInterruptChallengeReq_CmdId[DungeonInterruptChallengeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonInterruptChallengeReq_CmdId[DungeonInterruptChallengeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonInterruptChallengeReq_CmdId[DungeonInterruptChallengeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonInterruptChallengeReq_CmdId = exports.DungeonInterruptChallengeReq_CmdId || (exports.DungeonInterruptChallengeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonInterruptChallengeRsp.CmdId
 */
var DungeonInterruptChallengeRsp_CmdId;
(function (DungeonInterruptChallengeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonInterruptChallengeRsp_CmdId[DungeonInterruptChallengeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 902;
     */
    DungeonInterruptChallengeRsp_CmdId[DungeonInterruptChallengeRsp_CmdId["CMD_ID"] = 902] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonInterruptChallengeRsp_CmdId[DungeonInterruptChallengeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonInterruptChallengeRsp_CmdId[DungeonInterruptChallengeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonInterruptChallengeRsp_CmdId = exports.DungeonInterruptChallengeRsp_CmdId || (exports.DungeonInterruptChallengeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InteractDailyDungeonInfoNotify.CmdId
 */
var InteractDailyDungeonInfoNotify_CmdId;
(function (InteractDailyDungeonInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InteractDailyDungeonInfoNotify_CmdId[InteractDailyDungeonInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 919;
     */
    InteractDailyDungeonInfoNotify_CmdId[InteractDailyDungeonInfoNotify_CmdId["CMD_ID"] = 919] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InteractDailyDungeonInfoNotify_CmdId[InteractDailyDungeonInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InteractDailyDungeonInfoNotify_CmdId[InteractDailyDungeonInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InteractDailyDungeonInfoNotify_CmdId[InteractDailyDungeonInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(InteractDailyDungeonInfoNotify_CmdId = exports.InteractDailyDungeonInfoNotify_CmdId || (exports.InteractDailyDungeonInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartReq.CmdId
 */
var DungeonRestartReq_CmdId;
(function (DungeonRestartReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartReq_CmdId[DungeonRestartReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 961;
     */
    DungeonRestartReq_CmdId[DungeonRestartReq_CmdId["CMD_ID"] = 961] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartReq_CmdId[DungeonRestartReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartReq_CmdId[DungeonRestartReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartReq_CmdId[DungeonRestartReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonRestartReq_CmdId = exports.DungeonRestartReq_CmdId || (exports.DungeonRestartReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartRsp.CmdId
 */
var DungeonRestartRsp_CmdId;
(function (DungeonRestartRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartRsp_CmdId[DungeonRestartRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 929;
     */
    DungeonRestartRsp_CmdId[DungeonRestartRsp_CmdId["CMD_ID"] = 929] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartRsp_CmdId[DungeonRestartRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartRsp_CmdId[DungeonRestartRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonRestartRsp_CmdId = exports.DungeonRestartRsp_CmdId || (exports.DungeonRestartRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartInviteNotify.CmdId
 */
var DungeonRestartInviteNotify_CmdId;
(function (DungeonRestartInviteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteNotify_CmdId[DungeonRestartInviteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 957;
     */
    DungeonRestartInviteNotify_CmdId[DungeonRestartInviteNotify_CmdId["CMD_ID"] = 957] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteNotify_CmdId[DungeonRestartInviteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartInviteNotify_CmdId[DungeonRestartInviteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartInviteNotify_CmdId[DungeonRestartInviteNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonRestartInviteNotify_CmdId = exports.DungeonRestartInviteNotify_CmdId || (exports.DungeonRestartInviteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartInviteReplyReq.CmdId
 */
var DungeonRestartInviteReplyReq_CmdId;
(function (DungeonRestartInviteReplyReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteReplyReq_CmdId[DungeonRestartInviteReplyReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1000;
     */
    DungeonRestartInviteReplyReq_CmdId[DungeonRestartInviteReplyReq_CmdId["CMD_ID"] = 1000] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteReplyReq_CmdId[DungeonRestartInviteReplyReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartInviteReplyReq_CmdId[DungeonRestartInviteReplyReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartInviteReplyReq_CmdId[DungeonRestartInviteReplyReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonRestartInviteReplyReq_CmdId = exports.DungeonRestartInviteReplyReq_CmdId || (exports.DungeonRestartInviteReplyReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartInviteReplyRsp.CmdId
 */
var DungeonRestartInviteReplyRsp_CmdId;
(function (DungeonRestartInviteReplyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteReplyRsp_CmdId[DungeonRestartInviteReplyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 916;
     */
    DungeonRestartInviteReplyRsp_CmdId[DungeonRestartInviteReplyRsp_CmdId["CMD_ID"] = 916] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteReplyRsp_CmdId[DungeonRestartInviteReplyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartInviteReplyRsp_CmdId[DungeonRestartInviteReplyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonRestartInviteReplyRsp_CmdId = exports.DungeonRestartInviteReplyRsp_CmdId || (exports.DungeonRestartInviteReplyRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartInviteReplyNotify.CmdId
 */
var DungeonRestartInviteReplyNotify_CmdId;
(function (DungeonRestartInviteReplyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteReplyNotify_CmdId[DungeonRestartInviteReplyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 987;
     */
    DungeonRestartInviteReplyNotify_CmdId[DungeonRestartInviteReplyNotify_CmdId["CMD_ID"] = 987] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartInviteReplyNotify_CmdId[DungeonRestartInviteReplyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartInviteReplyNotify_CmdId[DungeonRestartInviteReplyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartInviteReplyNotify_CmdId[DungeonRestartInviteReplyNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonRestartInviteReplyNotify_CmdId = exports.DungeonRestartInviteReplyNotify_CmdId || (exports.DungeonRestartInviteReplyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartResultNotify.CmdId
 */
var DungeonRestartResultNotify_CmdId;
(function (DungeonRestartResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartResultNotify_CmdId[DungeonRestartResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 940;
     */
    DungeonRestartResultNotify_CmdId[DungeonRestartResultNotify_CmdId["CMD_ID"] = 940] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonRestartResultNotify_CmdId[DungeonRestartResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartResultNotify_CmdId[DungeonRestartResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonRestartResultNotify_CmdId[DungeonRestartResultNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonRestartResultNotify_CmdId = exports.DungeonRestartResultNotify_CmdId || (exports.DungeonRestartResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamSetChangingAvatarReq.CmdId
 */
var DungeonCandidateTeamSetChangingAvatarReq_CmdId;
(function (DungeonCandidateTeamSetChangingAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetChangingAvatarReq_CmdId[DungeonCandidateTeamSetChangingAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 918;
     */
    DungeonCandidateTeamSetChangingAvatarReq_CmdId[DungeonCandidateTeamSetChangingAvatarReq_CmdId["CMD_ID"] = 918] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetChangingAvatarReq_CmdId[DungeonCandidateTeamSetChangingAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamSetChangingAvatarReq_CmdId[DungeonCandidateTeamSetChangingAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamSetChangingAvatarReq_CmdId[DungeonCandidateTeamSetChangingAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonCandidateTeamSetChangingAvatarReq_CmdId = exports.DungeonCandidateTeamSetChangingAvatarReq_CmdId || (exports.DungeonCandidateTeamSetChangingAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamSetChangingAvatarRsp.CmdId
 */
var DungeonCandidateTeamSetChangingAvatarRsp_CmdId;
(function (DungeonCandidateTeamSetChangingAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetChangingAvatarRsp_CmdId[DungeonCandidateTeamSetChangingAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 966;
     */
    DungeonCandidateTeamSetChangingAvatarRsp_CmdId[DungeonCandidateTeamSetChangingAvatarRsp_CmdId["CMD_ID"] = 966] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonCandidateTeamSetChangingAvatarRsp_CmdId[DungeonCandidateTeamSetChangingAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonCandidateTeamSetChangingAvatarRsp_CmdId[DungeonCandidateTeamSetChangingAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonCandidateTeamSetChangingAvatarRsp_CmdId = exports.DungeonCandidateTeamSetChangingAvatarRsp_CmdId || (exports.DungeonCandidateTeamSetChangingAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MistTrialFloorLevelNotify.CmdId
 */
var MistTrialFloorLevelNotify_CmdId;
(function (MistTrialFloorLevelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MistTrialFloorLevelNotify_CmdId[MistTrialFloorLevelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 968;
     */
    MistTrialFloorLevelNotify_CmdId[MistTrialFloorLevelNotify_CmdId["CMD_ID"] = 968] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MistTrialFloorLevelNotify_CmdId[MistTrialFloorLevelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MistTrialFloorLevelNotify_CmdId[MistTrialFloorLevelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MistTrialFloorLevelNotify_CmdId[MistTrialFloorLevelNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MistTrialFloorLevelNotify_CmdId = exports.MistTrialFloorLevelNotify_CmdId || (exports.MistTrialFloorLevelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonReviseLevelNotify.CmdId
 */
var DungeonReviseLevelNotify_CmdId;
(function (DungeonReviseLevelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonReviseLevelNotify_CmdId[DungeonReviseLevelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 933;
     */
    DungeonReviseLevelNotify_CmdId[DungeonReviseLevelNotify_CmdId["CMD_ID"] = 933] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonReviseLevelNotify_CmdId[DungeonReviseLevelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonReviseLevelNotify_CmdId[DungeonReviseLevelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonReviseLevelNotify_CmdId[DungeonReviseLevelNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DungeonReviseLevelNotify_CmdId = exports.DungeonReviseLevelNotify_CmdId || (exports.DungeonReviseLevelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WindFieldDungeonFailReason
 */
var WindFieldDungeonFailReason;
(function (WindFieldDungeonFailReason) {
    /**
     * @generated from protobuf enum value: WIND_FIELD_DUNGEON_FAIL_NONE = 0;
     */
    WindFieldDungeonFailReason[WindFieldDungeonFailReason["WIND_FIELD_DUNGEON_FAIL_NONE"] = 0] = "WIND_FIELD_DUNGEON_FAIL_NONE";
    /**
     * @generated from protobuf enum value: WIND_FIELD_DUNGEON_FAIL_CANCEL = 1;
     */
    WindFieldDungeonFailReason[WindFieldDungeonFailReason["WIND_FIELD_DUNGEON_FAIL_CANCEL"] = 1] = "WIND_FIELD_DUNGEON_FAIL_CANCEL";
    /**
     * @generated from protobuf enum value: WIND_FIELD_DUNGEON_FAIL_TIMEOUT = 2;
     */
    WindFieldDungeonFailReason[WindFieldDungeonFailReason["WIND_FIELD_DUNGEON_FAIL_TIMEOUT"] = 2] = "WIND_FIELD_DUNGEON_FAIL_TIMEOUT";
    /**
     * @generated from protobuf enum value: WIND_FIELD_DUNGEON_FAIL_ALL_AVATAR_DIE = 3;
     */
    WindFieldDungeonFailReason[WindFieldDungeonFailReason["WIND_FIELD_DUNGEON_FAIL_ALL_AVATAR_DIE"] = 3] = "WIND_FIELD_DUNGEON_FAIL_ALL_AVATAR_DIE";
    /**
     * @generated from protobuf enum value: WIND_FIELD_DUNGEON_FAIL_LUA_INTERRUPT = 4;
     */
    WindFieldDungeonFailReason[WindFieldDungeonFailReason["WIND_FIELD_DUNGEON_FAIL_LUA_INTERRUPT"] = 4] = "WIND_FIELD_DUNGEON_FAIL_LUA_INTERRUPT";
})(WindFieldDungeonFailReason = exports.WindFieldDungeonFailReason || (exports.WindFieldDungeonFailReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonDataType
 */
var DungeonDataType;
(function (DungeonDataType) {
    /**
     * @generated from protobuf enum value: DUNGEON_DATA_NONE = 0;
     */
    DungeonDataType[DungeonDataType["DUNGEON_DATA_NONE"] = 0] = "DUNGEON_DATA_NONE";
    /**
     * @generated from protobuf enum value: DUNGEON_DATA_END_TIME = 1;
     */
    DungeonDataType[DungeonDataType["DUNGEON_DATA_END_TIME"] = 1] = "DUNGEON_DATA_END_TIME";
    /**
     * @generated from protobuf enum value: DUNGEON_DATA_MONSTER_DIE_COUNT = 2;
     */
    DungeonDataType[DungeonDataType["DUNGEON_DATA_MONSTER_DIE_COUNT"] = 2] = "DUNGEON_DATA_MONSTER_DIE_COUNT";
    /**
     * @generated from protobuf enum value: DUNGEON_DATA_LEVEL_CONFIG_ID = 3;
     */
    DungeonDataType[DungeonDataType["DUNGEON_DATA_LEVEL_CONFIG_ID"] = 3] = "DUNGEON_DATA_LEVEL_CONFIG_ID";
    /**
     * @generated from protobuf enum value: DUNGEON_DATA_TOWER_MONTHLY_LEVEL_CONFIG_ID = 4;
     */
    DungeonDataType[DungeonDataType["DUNGEON_DATA_TOWER_MONTHLY_LEVEL_CONFIG_ID"] = 4] = "DUNGEON_DATA_TOWER_MONTHLY_LEVEL_CONFIG_ID";
    /**
     * @generated from protobuf enum value: DUNGEON_DATA_TOWER_FLOOR_LEVEL_CONFIG_ID = 5;
     */
    DungeonDataType[DungeonDataType["DUNGEON_DATA_TOWER_FLOOR_LEVEL_CONFIG_ID"] = 5] = "DUNGEON_DATA_TOWER_FLOOR_LEVEL_CONFIG_ID";
})(DungeonDataType = exports.DungeonDataType || (exports.DungeonDataType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChallengeFinishType
 */
var ChallengeFinishType;
(function (ChallengeFinishType) {
    /**
     * @generated from protobuf enum value: CHALLENGE_FINISH_TYPE_NONE = 0;
     */
    ChallengeFinishType[ChallengeFinishType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CHALLENGE_FINISH_TYPE_FAIL = 1;
     */
    ChallengeFinishType[ChallengeFinishType["FAIL"] = 1] = "FAIL";
    /**
     * @generated from protobuf enum value: CHALLENGE_FINISH_TYPE_SUCC = 2;
     */
    ChallengeFinishType[ChallengeFinishType["SUCC"] = 2] = "SUCC";
    /**
     * @generated from protobuf enum value: CHALLENGE_FINISH_TYPE_PAUSE = 3;
     */
    ChallengeFinishType[ChallengeFinishType["PAUSE"] = 3] = "PAUSE";
})(ChallengeFinishType = exports.ChallengeFinishType || (exports.ChallengeFinishType = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonFinishType
 */
var CustomDungeonFinishType;
(function (CustomDungeonFinishType) {
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_FINISH_PLAY_NORMAL = 0;
     */
    CustomDungeonFinishType[CustomDungeonFinishType["CUSTOM_DUNGEON_FINISH_PLAY_NORMAL"] = 0] = "CUSTOM_DUNGEON_FINISH_PLAY_NORMAL";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_FINISH_PLAY_TRY = 1;
     */
    CustomDungeonFinishType[CustomDungeonFinishType["CUSTOM_DUNGEON_FINISH_PLAY_TRY"] = 1] = "CUSTOM_DUNGEON_FINISH_PLAY_TRY";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_FINISH_EDIT_TRY = 2;
     */
    CustomDungeonFinishType[CustomDungeonFinishType["CUSTOM_DUNGEON_FINISH_EDIT_TRY"] = 2] = "CUSTOM_DUNGEON_FINISH_EDIT_TRY";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_FINISH_SELF_PLAY_NORMAL = 3;
     */
    CustomDungeonFinishType[CustomDungeonFinishType["CUSTOM_DUNGEON_FINISH_SELF_PLAY_NORMAL"] = 3] = "CUSTOM_DUNGEON_FINISH_SELF_PLAY_NORMAL";
})(CustomDungeonFinishType = exports.CustomDungeonFinishType || (exports.CustomDungeonFinishType = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamPlayerLeaveReason
 */
var DungeonCandidateTeamPlayerLeaveReason;
(function (DungeonCandidateTeamPlayerLeaveReason) {
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TPLR_NORMAL = 0;
     */
    DungeonCandidateTeamPlayerLeaveReason[DungeonCandidateTeamPlayerLeaveReason["DUNGEON_CANDIDATE_TPLR_NORMAL"] = 0] = "DUNGEON_CANDIDATE_TPLR_NORMAL";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TPLR_DIE = 1;
     */
    DungeonCandidateTeamPlayerLeaveReason[DungeonCandidateTeamPlayerLeaveReason["DUNGEON_CANDIDATE_TPLR_DIE"] = 1] = "DUNGEON_CANDIDATE_TPLR_DIE";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TPLR_BE_KICK = 2;
     */
    DungeonCandidateTeamPlayerLeaveReason[DungeonCandidateTeamPlayerLeaveReason["DUNGEON_CANDIDATE_TPLR_BE_KICK"] = 2] = "DUNGEON_CANDIDATE_TPLR_BE_KICK";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_DISCONNECT = 3;
     */
    DungeonCandidateTeamPlayerLeaveReason[DungeonCandidateTeamPlayerLeaveReason["DUNGEON_CANDIDATE_DISCONNECT"] = 3] = "DUNGEON_CANDIDATE_DISCONNECT";
})(DungeonCandidateTeamPlayerLeaveReason = exports.DungeonCandidateTeamPlayerLeaveReason || (exports.DungeonCandidateTeamPlayerLeaveReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonCandidateTeamDismissReason
 */
var DungeonCandidateTeamDismissReason;
(function (DungeonCandidateTeamDismissReason) {
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TPDR_NORMAL = 0;
     */
    DungeonCandidateTeamDismissReason[DungeonCandidateTeamDismissReason["DUNGEON_CANDIDATE_TPDR_NORMAL"] = 0] = "DUNGEON_CANDIDATE_TPDR_NORMAL";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TPDR_DIE = 1;
     */
    DungeonCandidateTeamDismissReason[DungeonCandidateTeamDismissReason["DUNGEON_CANDIDATE_TPDR_DIE"] = 1] = "DUNGEON_CANDIDATE_TPDR_DIE";
    /**
     * @generated from protobuf enum value: DUNGEON_CANDIDATE_TPDR_DISCONNECT = 2;
     */
    DungeonCandidateTeamDismissReason[DungeonCandidateTeamDismissReason["DUNGEON_CANDIDATE_TPDR_DISCONNECT"] = 2] = "DUNGEON_CANDIDATE_TPDR_DISCONNECT";
})(DungeonCandidateTeamDismissReason = exports.DungeonCandidateTeamDismissReason || (exports.DungeonCandidateTeamDismissReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonRestartReason
 */
var DungeonRestartReason;
(function (DungeonRestartReason) {
    /**
     * @generated from protobuf enum value: DUNGEON_RESTART_REASON_NONE = 0;
     */
    DungeonRestartReason[DungeonRestartReason["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: DUNGEON_RESTART_REASON_DAILY_RESTART = 1;
     */
    DungeonRestartReason[DungeonRestartReason["DAILY_RESTART"] = 1] = "DAILY_RESTART";
    /**
     * @generated from protobuf enum value: DUNGEON_RESTART_REASON_DIE_RETRY = 2;
     */
    DungeonRestartReason[DungeonRestartReason["DIE_RETRY"] = 2] = "DIE_RETRY";
})(DungeonRestartReason = exports.DungeonRestartReason || (exports.DungeonRestartReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonEntryInfoReq", [
            { no: 2, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_point_id_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_9.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { scenePointIdList: [] };
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
                case /* optional uint32 point_id */ 2:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.Uint32Pair scene_point_id_list */ 4:
                    message.scenePointIdList.push(define_9.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 point_id = 2; */
        if (message.pointId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional uint32 scene_id = 9; */
        if (message.sceneId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated com.midnights.game.Uint32Pair scene_point_id_list = 4; */
        for (let i = 0; i < message.scenePointIdList.length; i++)
            define_9.Uint32Pair.internalBinaryWrite(message.scenePointIdList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonEntryInfoReq
 */
exports.DungeonEntryInfoReq = new DungeonEntryInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonEntryInfo", [
            { no: 6, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "boss_chest_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "max_boss_chest_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "weekly_boss_resin_discount_info", kind: "message", T: () => define_8.WeeklyBossResinDiscountInfo },
            { no: 15, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_passed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "left_times", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 end_time */ 6:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 5:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint32 boss_chest_num */ 12:
                    message.bossChestNum = reader.uint32();
                    break;
                case /* optional uint32 max_boss_chest_num */ 13:
                    message.maxBossChestNum = reader.uint32();
                    break;
                case /* optional uint32 next_refresh_time */ 11:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info */ 9:
                    message.weeklyBossResinDiscountInfo = define_8.WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options, message.weeklyBossResinDiscountInfo);
                    break;
                case /* optional uint32 start_time */ 15:
                    message.startTime = reader.uint32();
                    break;
                case /* optional bool is_passed */ 4:
                    message.isPassed = reader.bool();
                    break;
                case /* optional uint32 left_times */ 7:
                    message.leftTimes = reader.uint32();
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
        /* optional uint32 end_time = 6; */
        if (message.endTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 dungeon_id = 5; */
        if (message.dungeonId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* optional uint32 boss_chest_num = 12; */
        if (message.bossChestNum !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.bossChestNum);
        /* optional uint32 max_boss_chest_num = 13; */
        if (message.maxBossChestNum !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.maxBossChestNum);
        /* optional uint32 next_refresh_time = 11; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* optional com.midnights.game.WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 9; */
        if (message.weeklyBossResinDiscountInfo)
            define_8.WeeklyBossResinDiscountInfo.internalBinaryWrite(message.weeklyBossResinDiscountInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 start_time = 15; */
        if (message.startTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.startTime);
        /* optional bool is_passed = 4; */
        if (message.isPassed !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isPassed);
        /* optional uint32 left_times = 7; */
        if (message.leftTimes !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.leftTimes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonEntryInfo
 */
exports.DungeonEntryInfo = new DungeonEntryInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryPointInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonEntryPointInfo", [
            { no: 12, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "dungeon_entry_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DungeonEntryInfo },
            { no: 8, name: "recommend_dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonEntryList: [] };
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
                case /* optional uint32 scene_id */ 12:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 point_id */ 6:
                    message.pointId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.DungeonEntryInfo dungeon_entry_list */ 1:
                    message.dungeonEntryList.push(exports.DungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 recommend_dungeon_id */ 8:
                    message.recommendDungeonId = reader.uint32();
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
        /* optional uint32 scene_id = 12; */
        if (message.sceneId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 point_id = 6; */
        if (message.pointId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.pointId);
        /* repeated com.midnights.game.DungeonEntryInfo dungeon_entry_list = 1; */
        for (let i = 0; i < message.dungeonEntryList.length; i++)
            exports.DungeonEntryInfo.internalBinaryWrite(message.dungeonEntryList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 recommend_dungeon_id = 8; */
        if (message.recommendDungeonId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.recommendDungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonEntryPointInfo
 */
exports.DungeonEntryPointInfo = new DungeonEntryPointInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonEntryInfoRsp", [
            { no: 12, name: "dungeon_entry_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DungeonEntryInfo },
            { no: 15, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "dungeon_entry_point_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DungeonEntryPointInfo },
            { no: 14, name: "recommend_dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonEntryList: [], dungeonEntryPointList: [] };
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
                case /* repeated com.midnights.game.DungeonEntryInfo dungeon_entry_list */ 12:
                    message.dungeonEntryList.push(exports.DungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 point_id */ 15:
                    message.pointId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.DungeonEntryPointInfo dungeon_entry_point_list */ 4:
                    message.dungeonEntryPointList.push(exports.DungeonEntryPointInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 recommend_dungeon_id */ 14:
                    message.recommendDungeonId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 11:
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
        /* repeated com.midnights.game.DungeonEntryInfo dungeon_entry_list = 12; */
        for (let i = 0; i < message.dungeonEntryList.length; i++)
            exports.DungeonEntryInfo.internalBinaryWrite(message.dungeonEntryList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 point_id = 15; */
        if (message.pointId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.pointId);
        /* repeated com.midnights.game.DungeonEntryPointInfo dungeon_entry_point_list = 4; */
        for (let i = 0; i < message.dungeonEntryPointList.length; i++)
            exports.DungeonEntryPointInfo.internalBinaryWrite(message.dungeonEntryPointList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 recommend_dungeon_id = 14; */
        if (message.recommendDungeonId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.recommendDungeonId);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonEntryInfoRsp
 */
exports.DungeonEntryInfoRsp = new DungeonEntryInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEnterPosInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonEnterPosInfo", [
            { no: 13, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 quest_id */ 13:
                    message.questId = reader.uint32();
                    break;
                case /* optional uint32 point_id */ 6:
                    message.pointId = reader.uint32();
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
        /* optional uint32 quest_id = 13; */
        if (message.questId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional uint32 point_id = 6; */
        if (message.pointId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonEnterPosInfo
 */
exports.DungeonEnterPosInfo = new DungeonEnterPosInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerEnterDungeonReq", [
            { no: 2, name: "enter_pos_info", kind: "message", T: () => exports.DungeonEnterPosInfo },
            { no: 13, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.DungeonEnterPosInfo enter_pos_info */ 2:
                    message.enterPosInfo = exports.DungeonEnterPosInfo.internalBinaryRead(reader, reader.uint32(), options, message.enterPosInfo);
                    break;
                case /* optional uint32 point_id */ 13:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 7:
                    message.dungeonId = reader.uint32();
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
        /* optional com.midnights.game.DungeonEnterPosInfo enter_pos_info = 2; */
        if (message.enterPosInfo)
            exports.DungeonEnterPosInfo.internalBinaryWrite(message.enterPosInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 point_id = 13; */
        if (message.pointId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional uint32 dungeon_id = 7; */
        if (message.dungeonId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerEnterDungeonReq
 */
exports.PlayerEnterDungeonReq = new PlayerEnterDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerEnterDungeonRsp", [
            { no: 2, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 dungeon_id */ 2:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint32 point_id */ 6:
                    message.pointId = reader.uint32();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 dungeon_id = 2; */
        if (message.dungeonId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* optional uint32 point_id = 6; */
        if (message.pointId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerEnterDungeonRsp
 */
exports.PlayerEnterDungeonRsp = new PlayerEnterDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerQuitDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerQuitDungeonReq", [
            { no: 10, name: "is_quit_immediately", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_quit_immediately */ 10:
                    message.isQuitImmediately = reader.bool();
                    break;
                case /* optional uint32 point_id */ 7:
                    message.pointId = reader.uint32();
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
        /* optional bool is_quit_immediately = 10; */
        if (message.isQuitImmediately !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isQuitImmediately);
        /* optional uint32 point_id = 7; */
        if (message.pointId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerQuitDungeonReq
 */
exports.PlayerQuitDungeonReq = new PlayerQuitDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerQuitDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerQuitDungeonRsp", [
            { no: 11, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 point_id */ 11:
                    message.pointId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 7:
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
        /* optional uint32 point_id = 11; */
        if (message.pointId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerQuitDungeonRsp
 */
exports.PlayerQuitDungeonRsp = new PlayerQuitDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonWayPointNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonWayPointNotify", [
            { no: 9, name: "is_add", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "active_way_point_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { activeWayPointList: [] };
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
                case /* optional bool is_add */ 9:
                    message.isAdd = reader.bool();
                    break;
                case /* repeated uint32 active_way_point_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.activeWayPointList.push(reader.uint32());
                    else
                        message.activeWayPointList.push(reader.uint32());
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
        /* optional bool is_add = 9; */
        if (message.isAdd !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isAdd);
        /* repeated uint32 active_way_point_list = 4; */
        for (let i = 0; i < message.activeWayPointList.length; i++)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.activeWayPointList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonWayPointNotify
 */
exports.DungeonWayPointNotify = new DungeonWayPointNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonWayPointActivateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonWayPointActivateReq", [
            { no: 3, name: "way_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 way_point_id */ 3:
                    message.wayPointId = reader.uint32();
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
        /* optional uint32 way_point_id = 3; */
        if (message.wayPointId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.wayPointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonWayPointActivateReq
 */
exports.DungeonWayPointActivateReq = new DungeonWayPointActivateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonWayPointActivateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonWayPointActivateRsp", [
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "way_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 way_point_id */ 7:
                    message.wayPointId = reader.uint32();
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
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 way_point_id = 7; */
        if (message.wayPointId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.wayPointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonWayPointActivateRsp
 */
exports.DungeonWayPointActivateRsp = new DungeonWayPointActivateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StrengthenPointData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StrengthenPointData", [
            { no: 10, name: "base_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 base_point */ 10:
                    message.basePoint = reader.uint32();
                    break;
                case /* optional uint32 cur_point */ 11:
                    message.curPoint = reader.uint32();
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
        /* optional uint32 base_point = 10; */
        if (message.basePoint !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.basePoint);
        /* optional uint32 cur_point = 11; */
        if (message.curPoint !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curPoint);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StrengthenPointData
 */
exports.StrengthenPointData = new StrengthenPointData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonSettleExhibitionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonSettleExhibitionInfo", [
            { no: 3, name: "player_info", kind: "message", T: () => define_7.OnlinePlayerInfo },
            { no: 13, name: "card_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_6.ExhibitionDisplayInfo }
        ]);
    }
    create(value) {
        const message = { cardList: [] };
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
                case /* optional com.midnights.game.OnlinePlayerInfo player_info */ 3:
                    message.playerInfo = define_7.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* repeated com.midnights.game.ExhibitionDisplayInfo card_list */ 13:
                    message.cardList.push(define_6.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional com.midnights.game.OnlinePlayerInfo player_info = 3; */
        if (message.playerInfo)
            define_7.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ExhibitionDisplayInfo card_list = 13; */
        for (let i = 0; i < message.cardList.length; i++)
            define_6.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonSettleExhibitionInfo
 */
exports.DungeonSettleExhibitionInfo = new DungeonSettleExhibitionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkDungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CrystalLinkDungeonSettleInfo", [
            { no: 2, name: "kill_elite_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "final_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_new_record", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "difficulty_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "kill_normal_mosnter_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 kill_elite_monster_num */ 2:
                    message.killEliteMonsterNum = reader.uint32();
                    break;
                case /* optional uint32 final_score */ 6:
                    message.finalScore = reader.uint32();
                    break;
                case /* optional uint32 level_id */ 12:
                    message.levelId = reader.uint32();
                    break;
                case /* optional bool is_new_record */ 13:
                    message.isNewRecord = reader.bool();
                    break;
                case /* optional uint32 difficulty_id */ 9:
                    message.difficultyId = reader.uint32();
                    break;
                case /* optional uint32 kill_normal_mosnter_num */ 3:
                    message.killNormalMosnterNum = reader.uint32();
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
        /* optional uint32 kill_elite_monster_num = 2; */
        if (message.killEliteMonsterNum !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.killEliteMonsterNum);
        /* optional uint32 final_score = 6; */
        if (message.finalScore !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* optional uint32 level_id = 12; */
        if (message.levelId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.levelId);
        /* optional bool is_new_record = 13; */
        if (message.isNewRecord !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* optional uint32 difficulty_id = 9; */
        if (message.difficultyId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* optional uint32 kill_normal_mosnter_num = 3; */
        if (message.killNormalMosnterNum !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.killNormalMosnterNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CrystalLinkDungeonSettleInfo
 */
exports.CrystalLinkDungeonSettleInfo = new CrystalLinkDungeonSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2DungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SummerTimeV2DungeonSettleInfo", [
            { no: 5, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "taken_reward_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_dungeon_reward_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_success */ 5:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 taken_reward_count */ 2:
                    message.takenRewardCount = reader.uint32();
                    break;
                case /* optional uint32 cur_dungeon_reward_limit */ 11:
                    message.curDungeonRewardLimit = reader.uint32();
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
        /* optional bool is_success = 5; */
        if (message.isSuccess !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 taken_reward_count = 2; */
        if (message.takenRewardCount !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.takenRewardCount);
        /* optional uint32 cur_dungeon_reward_limit = 11; */
        if (message.curDungeonRewardLimit !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curDungeonRewardLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SummerTimeV2DungeonSettleInfo
 */
exports.SummerTimeV2DungeonSettleInfo = new SummerTimeV2DungeonSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstableSprayDungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InstableSprayDungeonSettleInfo", [
            { no: 1, name: "stage_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "score_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_new_record", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "difficulty", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { scoreList: [] };
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
                case /* optional uint32 stage_id */ 1:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated uint32 score_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.scoreList.push(reader.uint32());
                    else
                        message.scoreList.push(reader.uint32());
                    break;
                case /* optional bool is_new_record */ 13:
                    message.isNewRecord = reader.bool();
                    break;
                case /* optional uint32 difficulty */ 5:
                    message.difficulty = reader.uint32();
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
        /* optional uint32 stage_id = 1; */
        if (message.stageId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.stageId);
        /* repeated uint32 score_list = 4; */
        for (let i = 0; i < message.scoreList.length; i++)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.scoreList[i]);
        /* optional bool is_new_record = 13; */
        if (message.isNewRecord !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* optional uint32 difficulty = 5; */
        if (message.difficulty !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.difficulty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InstableSprayDungeonSettleInfo
 */
exports.InstableSprayDungeonSettleInfo = new InstableSprayDungeonSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindFieldDungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WindFieldDungeonSettleInfo", [
            { no: 11, name: "after_watcher_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "before_watcher_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fail_reason", kind: "enum", opt: true, T: () => ["com.midnights.game.WindFieldDungeonFailReason", WindFieldDungeonFailReason] }
        ]);
    }
    create(value) {
        const message = { afterWatcherIdList: [], beforeWatcherIdList: [] };
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
                case /* repeated uint32 after_watcher_id_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.afterWatcherIdList.push(reader.uint32());
                    else
                        message.afterWatcherIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 before_watcher_id_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.beforeWatcherIdList.push(reader.uint32());
                    else
                        message.beforeWatcherIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.WindFieldDungeonFailReason fail_reason */ 2:
                    message.failReason = reader.int32();
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
        /* repeated uint32 after_watcher_id_list = 11; */
        for (let i = 0; i < message.afterWatcherIdList.length; i++)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.afterWatcherIdList[i]);
        /* repeated uint32 before_watcher_id_list = 7; */
        for (let i = 0; i < message.beforeWatcherIdList.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.beforeWatcherIdList[i]);
        /* optional com.midnights.game.WindFieldDungeonFailReason fail_reason = 2; */
        if (message.failReason !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.failReason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WindFieldDungeonSettleInfo
 */
exports.WindFieldDungeonSettleInfo = new WindFieldDungeonSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EffigyChallengeV2SettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EffigyChallengeV2SettleInfo", [
            { no: 7, name: "is_challenge_highest_difficulty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "create_dungeon_player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "challenge_mode_difficulty", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_new_record_time", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "record_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "first_time_finish_difficulty", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_challenge_highest_difficulty */ 7:
                    message.isChallengeHighestDifficulty = reader.bool();
                    break;
                case /* optional uint32 create_dungeon_player_uid */ 4:
                    message.createDungeonPlayerUid = reader.uint32();
                    break;
                case /* optional uint32 challenge_mode_difficulty */ 6:
                    message.challengeModeDifficulty = reader.uint32();
                    break;
                case /* optional bool is_new_record_time */ 1:
                    message.isNewRecordTime = reader.bool();
                    break;
                case /* optional uint32 record_time */ 12:
                    message.recordTime = reader.uint32();
                    break;
                case /* optional uint32 first_time_finish_difficulty */ 5:
                    message.firstTimeFinishDifficulty = reader.uint32();
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
        /* optional bool is_challenge_highest_difficulty = 7; */
        if (message.isChallengeHighestDifficulty !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isChallengeHighestDifficulty);
        /* optional uint32 create_dungeon_player_uid = 4; */
        if (message.createDungeonPlayerUid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.createDungeonPlayerUid);
        /* optional uint32 challenge_mode_difficulty = 6; */
        if (message.challengeModeDifficulty !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.challengeModeDifficulty);
        /* optional bool is_new_record_time = 1; */
        if (message.isNewRecordTime !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isNewRecordTime);
        /* optional uint32 record_time = 12; */
        if (message.recordTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.recordTime);
        /* optional uint32 first_time_finish_difficulty = 5; */
        if (message.firstTimeFinishDifficulty !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.firstTimeFinishDifficulty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EffigyChallengeV2SettleInfo
 */
exports.EffigyChallengeV2SettleInfo = new EffigyChallengeV2SettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonSettleNotify", [
            { no: 10, name: "result", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.StrengthenPointData } },
            { no: 8, name: "exhibition_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DungeonSettleExhibitionInfo },
            { no: 12, name: "create_player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "fail_cond_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "use_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "close_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "settle_show", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => define_5.ParamList } },
            { no: 351, name: "tower_level_end_notify", kind: "message", oneof: "detail", T: () => cmd_tower_1.TowerLevelEndNotify },
            { no: 635, name: "trial_avatar_first_pass_dungeon_notify", kind: "message", oneof: "detail", T: () => cmd_activity_5.TrialAvatarFirstPassDungeonNotify },
            { no: 686, name: "channeller_slab_loop_dungeon_result_info", kind: "message", oneof: "detail", T: () => cmd_activity_4.ChannellerSlabLoopDungeonResultInfo },
            { no: 328, name: "effigy_challenge_dungeon_result_info", kind: "message", oneof: "detail", T: () => cmd_activity_3.EffigyChallengeDungeonResultInfo },
            { no: 1482, name: "roguelike_dungeon_settle_info", kind: "message", oneof: "detail", T: () => cmd_activity_2.RoguelikeDungeonSettleInfo },
            { no: 112, name: "crystal_link_settle_info", kind: "message", oneof: "detail", T: () => exports.CrystalLinkDungeonSettleInfo },
            { no: 1882, name: "summer_time_v2_dungeon_settle_info", kind: "message", oneof: "detail", T: () => exports.SummerTimeV2DungeonSettleInfo },
            { no: 193, name: "instable_spray_settle_info", kind: "message", oneof: "detail", T: () => exports.InstableSprayDungeonSettleInfo },
            { no: 1825, name: "wind_field_dungeon_settle_info", kind: "message", oneof: "detail", T: () => exports.WindFieldDungeonSettleInfo },
            { no: 1802, name: "effigy_challenge_v2_settle_info", kind: "message", oneof: "detail", T: () => exports.EffigyChallengeV2SettleInfo }
        ]);
    }
    create(value) {
        const message = { strengthenPointDataMap: {}, exhibitionInfoList: [], failCondList: [], settleShow: {}, detail: { oneofKind: undefined } };
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
                case /* optional uint32 result */ 10:
                    message.result = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 13:
                    message.dungeonId = reader.uint32();
                    break;
                case /* map<uint32, com.midnights.game.StrengthenPointData> strengthen_point_data_map */ 14:
                    this.binaryReadMap14(message.strengthenPointDataMap, reader, options);
                    break;
                case /* repeated com.midnights.game.DungeonSettleExhibitionInfo exhibition_info_list */ 8:
                    message.exhibitionInfoList.push(exports.DungeonSettleExhibitionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 create_player_uid */ 12:
                    message.createPlayerUid = reader.uint32();
                    break;
                case /* repeated uint32 fail_cond_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.failCondList.push(reader.uint32());
                    else
                        message.failCondList.push(reader.uint32());
                    break;
                case /* optional uint32 use_time */ 1:
                    message.useTime = reader.uint32();
                    break;
                case /* optional uint32 close_time */ 4:
                    message.closeTime = reader.uint32();
                    break;
                case /* optional bool is_success */ 7:
                    message.isSuccess = reader.bool();
                    break;
                case /* map<uint32, com.midnights.game.ParamList> settle_show */ 5:
                    this.binaryReadMap5(message.settleShow, reader, options);
                    break;
                case /* com.midnights.game.TowerLevelEndNotify tower_level_end_notify */ 351:
                    message.detail = {
                        oneofKind: "towerLevelEndNotify",
                        towerLevelEndNotify: cmd_tower_1.TowerLevelEndNotify.internalBinaryRead(reader, reader.uint32(), options, message.detail.towerLevelEndNotify)
                    };
                    break;
                case /* com.midnights.game.TrialAvatarFirstPassDungeonNotify trial_avatar_first_pass_dungeon_notify */ 635:
                    message.detail = {
                        oneofKind: "trialAvatarFirstPassDungeonNotify",
                        trialAvatarFirstPassDungeonNotify: cmd_activity_5.TrialAvatarFirstPassDungeonNotify.internalBinaryRead(reader, reader.uint32(), options, message.detail.trialAvatarFirstPassDungeonNotify)
                    };
                    break;
                case /* com.midnights.game.ChannellerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info */ 686:
                    message.detail = {
                        oneofKind: "channellerSlabLoopDungeonResultInfo",
                        channellerSlabLoopDungeonResultInfo: cmd_activity_4.ChannellerSlabLoopDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.channellerSlabLoopDungeonResultInfo)
                    };
                    break;
                case /* com.midnights.game.EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info */ 328:
                    message.detail = {
                        oneofKind: "effigyChallengeDungeonResultInfo",
                        effigyChallengeDungeonResultInfo: cmd_activity_3.EffigyChallengeDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyChallengeDungeonResultInfo)
                    };
                    break;
                case /* com.midnights.game.RoguelikeDungeonSettleInfo roguelike_dungeon_settle_info */ 1482:
                    message.detail = {
                        oneofKind: "roguelikeDungeonSettleInfo",
                        roguelikeDungeonSettleInfo: cmd_activity_2.RoguelikeDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.roguelikeDungeonSettleInfo)
                    };
                    break;
                case /* com.midnights.game.CrystalLinkDungeonSettleInfo crystal_link_settle_info */ 112:
                    message.detail = {
                        oneofKind: "crystalLinkSettleInfo",
                        crystalLinkSettleInfo: exports.CrystalLinkDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.crystalLinkSettleInfo)
                    };
                    break;
                case /* com.midnights.game.SummerTimeV2DungeonSettleInfo summer_time_v2_dungeon_settle_info */ 1882:
                    message.detail = {
                        oneofKind: "summerTimeV2DungeonSettleInfo",
                        summerTimeV2DungeonSettleInfo: exports.SummerTimeV2DungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.summerTimeV2DungeonSettleInfo)
                    };
                    break;
                case /* com.midnights.game.InstableSprayDungeonSettleInfo instable_spray_settle_info */ 193:
                    message.detail = {
                        oneofKind: "instableSpraySettleInfo",
                        instableSpraySettleInfo: exports.InstableSprayDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.instableSpraySettleInfo)
                    };
                    break;
                case /* com.midnights.game.WindFieldDungeonSettleInfo wind_field_dungeon_settle_info */ 1825:
                    message.detail = {
                        oneofKind: "windFieldDungeonSettleInfo",
                        windFieldDungeonSettleInfo: exports.WindFieldDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.windFieldDungeonSettleInfo)
                    };
                    break;
                case /* com.midnights.game.EffigyChallengeV2SettleInfo effigy_challenge_v2_settle_info */ 1802:
                    message.detail = {
                        oneofKind: "effigyChallengeV2SettleInfo",
                        effigyChallengeV2SettleInfo: exports.EffigyChallengeV2SettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyChallengeV2SettleInfo)
                    };
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
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.StrengthenPointData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.DungeonSettleNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? exports.StrengthenPointData.create();
    }
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = define_5.ParamList.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.DungeonSettleNotify.settle_show");
            }
        }
        map[key ?? 0] = val ?? define_5.ParamList.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 result = 10; */
        if (message.result !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.result);
        /* optional uint32 dungeon_id = 13; */
        if (message.dungeonId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* map<uint32, com.midnights.game.StrengthenPointData> strengthen_point_data_map = 14; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k], writer, options);
            writer.join().join();
        }
        /* repeated com.midnights.game.DungeonSettleExhibitionInfo exhibition_info_list = 8; */
        for (let i = 0; i < message.exhibitionInfoList.length; i++)
            exports.DungeonSettleExhibitionInfo.internalBinaryWrite(message.exhibitionInfoList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 create_player_uid = 12; */
        if (message.createPlayerUid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.createPlayerUid);
        /* repeated uint32 fail_cond_list = 11; */
        for (let i = 0; i < message.failCondList.length; i++)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.failCondList[i]);
        /* optional uint32 use_time = 1; */
        if (message.useTime !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.useTime);
        /* optional uint32 close_time = 4; */
        if (message.closeTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.closeTime);
        /* optional bool is_success = 7; */
        if (message.isSuccess !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* map<uint32, com.midnights.game.ParamList> settle_show = 5; */
        for (let k of Object.keys(message.settleShow)) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_5.ParamList.internalBinaryWrite(message.settleShow[k], writer, options);
            writer.join().join();
        }
        /* com.midnights.game.TowerLevelEndNotify tower_level_end_notify = 351; */
        if (message.detail.oneofKind === "towerLevelEndNotify")
            cmd_tower_1.TowerLevelEndNotify.internalBinaryWrite(message.detail.towerLevelEndNotify, writer.tag(351, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.TrialAvatarFirstPassDungeonNotify trial_avatar_first_pass_dungeon_notify = 635; */
        if (message.detail.oneofKind === "trialAvatarFirstPassDungeonNotify")
            cmd_activity_5.TrialAvatarFirstPassDungeonNotify.internalBinaryWrite(message.detail.trialAvatarFirstPassDungeonNotify, writer.tag(635, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.ChannellerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info = 686; */
        if (message.detail.oneofKind === "channellerSlabLoopDungeonResultInfo")
            cmd_activity_4.ChannellerSlabLoopDungeonResultInfo.internalBinaryWrite(message.detail.channellerSlabLoopDungeonResultInfo, writer.tag(686, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info = 328; */
        if (message.detail.oneofKind === "effigyChallengeDungeonResultInfo")
            cmd_activity_3.EffigyChallengeDungeonResultInfo.internalBinaryWrite(message.detail.effigyChallengeDungeonResultInfo, writer.tag(328, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.RoguelikeDungeonSettleInfo roguelike_dungeon_settle_info = 1482; */
        if (message.detail.oneofKind === "roguelikeDungeonSettleInfo")
            cmd_activity_2.RoguelikeDungeonSettleInfo.internalBinaryWrite(message.detail.roguelikeDungeonSettleInfo, writer.tag(1482, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.CrystalLinkDungeonSettleInfo crystal_link_settle_info = 112; */
        if (message.detail.oneofKind === "crystalLinkSettleInfo")
            exports.CrystalLinkDungeonSettleInfo.internalBinaryWrite(message.detail.crystalLinkSettleInfo, writer.tag(112, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SummerTimeV2DungeonSettleInfo summer_time_v2_dungeon_settle_info = 1882; */
        if (message.detail.oneofKind === "summerTimeV2DungeonSettleInfo")
            exports.SummerTimeV2DungeonSettleInfo.internalBinaryWrite(message.detail.summerTimeV2DungeonSettleInfo, writer.tag(1882, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.InstableSprayDungeonSettleInfo instable_spray_settle_info = 193; */
        if (message.detail.oneofKind === "instableSpraySettleInfo")
            exports.InstableSprayDungeonSettleInfo.internalBinaryWrite(message.detail.instableSpraySettleInfo, writer.tag(193, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WindFieldDungeonSettleInfo wind_field_dungeon_settle_info = 1825; */
        if (message.detail.oneofKind === "windFieldDungeonSettleInfo")
            exports.WindFieldDungeonSettleInfo.internalBinaryWrite(message.detail.windFieldDungeonSettleInfo, writer.tag(1825, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.EffigyChallengeV2SettleInfo effigy_challenge_v2_settle_info = 1802; */
        if (message.detail.oneofKind === "effigyChallengeV2SettleInfo")
            exports.EffigyChallengeV2SettleInfo.internalBinaryWrite(message.detail.effigyChallengeV2SettleInfo, writer.tag(1802, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonSettleNotify
 */
exports.DungeonSettleNotify = new DungeonSettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonPlayerDieNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonPlayerDieNotify", [
            { no: 15, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.StrengthenPointData } },
            { no: 1, name: "wait_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "murderer_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "die_type", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerDieType", define_4.PlayerDieType] },
            { no: 6, name: "revive_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { strengthenPointDataMap: {}, entity: { oneofKind: undefined } };
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
                case /* map<uint32, com.midnights.game.StrengthenPointData> strengthen_point_data_map */ 15:
                    this.binaryReadMap15(message.strengthenPointDataMap, reader, options);
                    break;
                case /* optional uint32 wait_time */ 1:
                    message.waitTime = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 9:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint32 murderer_entity_id */ 13:
                    message.murdererEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlayerDieType die_type */ 3:
                    message.dieType = reader.int32();
                    break;
                case /* optional uint32 revive_count */ 6:
                    message.reviveCount = reader.uint32();
                    break;
                case /* uint32 monster_id */ 4:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 8:
                    message.entity = {
                        oneofKind: "gadgetId",
                        gadgetId: reader.uint32()
                    };
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
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.StrengthenPointData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.DungeonPlayerDieNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? exports.StrengthenPointData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.StrengthenPointData> strengthen_point_data_map = 15; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 wait_time = 1; */
        if (message.waitTime !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.waitTime);
        /* optional uint32 dungeon_id = 9; */
        if (message.dungeonId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* optional uint32 murderer_entity_id = 13; */
        if (message.murdererEntityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.murdererEntityId);
        /* optional com.midnights.game.PlayerDieType die_type = 3; */
        if (message.dieType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.dieType);
        /* optional uint32 revive_count = 6; */
        if (message.reviveCount !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.reviveCount);
        /* uint32 monster_id = 4; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 gadget_id = 8; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entity.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonPlayerDieNotify
 */
exports.DungeonPlayerDieNotify = new DungeonPlayerDieNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonDieOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonDieOptionReq", [
            { no: 11, name: "die_option", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerDieOption", define_3.PlayerDieOption] },
            { no: 14, name: "is_quit_immediately", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional com.midnights.game.PlayerDieOption die_option */ 11:
                    message.dieOption = reader.int32();
                    break;
                case /* optional bool is_quit_immediately */ 14:
                    message.isQuitImmediately = reader.bool();
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
        /* optional com.midnights.game.PlayerDieOption die_option = 11; */
        if (message.dieOption !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.dieOption);
        /* optional bool is_quit_immediately = 14; */
        if (message.isQuitImmediately !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isQuitImmediately);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonDieOptionReq
 */
exports.DungeonDieOptionReq = new DungeonDieOptionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonDieOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonDieOptionRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "revive_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "die_option", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerDieOption", define_3.PlayerDieOption] }
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
                case /* optional uint32 revive_count */ 10:
                    message.reviveCount = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlayerDieOption die_option */ 6:
                    message.dieOption = reader.int32();
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
        /* optional uint32 revive_count = 10; */
        if (message.reviveCount !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.reviveCount);
        /* optional com.midnights.game.PlayerDieOption die_option = 6; */
        if (message.dieOption !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.dieOption);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonDieOptionRsp
 */
exports.DungeonDieOptionRsp = new DungeonDieOptionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonShowReminderNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonShowReminderNotify", [
            { no: 9, name: "reminder_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 reminder_id */ 9:
                    message.reminderId = reader.uint32();
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
        /* optional uint32 reminder_id = 9; */
        if (message.reminderId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.reminderId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonShowReminderNotify
 */
exports.DungeonShowReminderNotify = new DungeonShowReminderNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonPlayerDieReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonPlayerDieReq", [
            { no: 6, name: "die_type", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerDieType", define_4.PlayerDieType] },
            { no: 8, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.PlayerDieType die_type */ 6:
                    message.dieType = reader.int32();
                    break;
                case /* optional uint32 dungeon_id */ 8:
                    message.dungeonId = reader.uint32();
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
        /* optional com.midnights.game.PlayerDieType die_type = 6; */
        if (message.dieType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.dieType);
        /* optional uint32 dungeon_id = 8; */
        if (message.dungeonId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonPlayerDieReq
 */
exports.DungeonPlayerDieReq = new DungeonPlayerDieReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonPlayerDieRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonPlayerDieRsp", [
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
                case /* optional int32 retcode */ 5:
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
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonPlayerDieRsp
 */
exports.DungeonPlayerDieRsp = new DungeonPlayerDieRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonDataNotify", [
            { no: 1, name: "dungeon_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { dungeonDataMap: {} };
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
                case /* map<uint32, uint32> dungeon_data_map */ 1:
                    this.binaryReadMap1(message.dungeonDataMap, reader, options);
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
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.DungeonDataNotify.dungeon_data_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> dungeon_data_map = 1; */
        for (let k of Object.keys(message.dungeonDataMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.dungeonDataMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonDataNotify
 */
exports.DungeonDataNotify = new DungeonDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonChallengeBeginNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonChallengeBeginNotify", [
            { no: 5, name: "father_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "param_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "challenge_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [], uidList: [] };
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
                case /* optional uint32 father_index */ 5:
                    message.fatherIndex = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional uint32 challenge_index */ 6:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* optional uint32 challenge_id */ 1:
                    message.challengeId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 4:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated uint32 uid_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 father_index = 5; */
        if (message.fatherIndex !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.fatherIndex);
        /* repeated uint32 param_list = 14; */
        for (let i = 0; i < message.paramList.length; i++)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.paramList[i]);
        /* optional uint32 challenge_index = 6; */
        if (message.challengeIndex !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* optional uint32 challenge_id = 1; */
        if (message.challengeId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* optional uint32 group_id = 4; */
        if (message.groupId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.groupId);
        /* repeated uint32 uid_list = 12; */
        for (let i = 0; i < message.uidList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.uidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonChallengeBeginNotify
 */
exports.DungeonChallengeBeginNotify = new DungeonChallengeBeginNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChallengeBrief", [
            { no: 9, name: "cur_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "challenge_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 cur_progress */ 9:
                    message.curProgress = reader.uint32();
                    break;
                case /* optional uint32 challenge_index */ 10:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* optional bool is_success */ 4:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 challenge_id */ 8:
                    message.challengeId = reader.uint32();
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
        /* optional uint32 cur_progress = 9; */
        if (message.curProgress !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* optional uint32 challenge_index = 10; */
        if (message.challengeIndex !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* optional bool is_success = 4; */
        if (message.isSuccess !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 challenge_id = 8; */
        if (message.challengeId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChallengeBrief
 */
exports.ChallengeBrief = new ChallengeBrief$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonResultInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonResultInfo", [
            { no: 12, name: "is_liked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "got_coin_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "child_challenge_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ChallengeBrief },
            { no: 3, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "finish_type", kind: "enum", opt: true, T: () => ["com.midnights.game.CustomDungeonFinishType", CustomDungeonFinishType] },
            { no: 11, name: "time_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_arrive_finish", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_stored", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { childChallengeList: [] };
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
                case /* optional bool is_liked */ 12:
                    message.isLiked = reader.bool();
                    break;
                case /* optional uint32 got_coin_num */ 9:
                    message.gotCoinNum = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ChallengeBrief child_challenge_list */ 6:
                    message.childChallengeList.push(exports.ChallengeBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint64 dungeon_guid */ 3:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.CustomDungeonFinishType finish_type */ 7:
                    message.finishType = reader.int32();
                    break;
                case /* optional uint32 time_cost */ 11:
                    message.timeCost = reader.uint32();
                    break;
                case /* optional bool is_arrive_finish */ 2:
                    message.isArriveFinish = reader.bool();
                    break;
                case /* optional bool is_stored */ 14:
                    message.isStored = reader.bool();
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
        /* optional bool is_liked = 12; */
        if (message.isLiked !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isLiked);
        /* optional uint32 got_coin_num = 9; */
        if (message.gotCoinNum !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.gotCoinNum);
        /* repeated com.midnights.game.ChallengeBrief child_challenge_list = 6; */
        for (let i = 0; i < message.childChallengeList.length; i++)
            exports.ChallengeBrief.internalBinaryWrite(message.childChallengeList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 dungeon_guid = 3; */
        if (message.dungeonGuid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* optional com.midnights.game.CustomDungeonFinishType finish_type = 7; */
        if (message.finishType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.finishType);
        /* optional uint32 time_cost = 11; */
        if (message.timeCost !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.timeCost);
        /* optional bool is_arrive_finish = 2; */
        if (message.isArriveFinish !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isArriveFinish);
        /* optional bool is_stored = 14; */
        if (message.isStored !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isStored);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonResultInfo
 */
exports.CustomDungeonResultInfo = new CustomDungeonResultInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonChallengeFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonChallengeFinishNotify", [
            { no: 13, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.StrengthenPointData } },
            { no: 9, name: "finish_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ChallengeFinishType", ChallengeFinishType, "CHALLENGE_FINISH_TYPE_"] },
            { no: 10, name: "is_new_record", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "challenge_record_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "time_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "current_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "challenge_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1521, name: "channeller_slab_loop_dungeon_result_info", kind: "message", oneof: "detail", T: () => cmd_activity_4.ChannellerSlabLoopDungeonResultInfo },
            { no: 1627, name: "effigy_challenge_dungeon_result_info", kind: "message", oneof: "detail", T: () => cmd_activity_3.EffigyChallengeDungeonResultInfo },
            { no: 1824, name: "potion_dungeon_result_info", kind: "message", oneof: "detail", T: () => cmd_activity_1.PotionDungeonResultInfo },
            { no: 1664, name: "custom_dungeon_result_info", kind: "message", oneof: "detail", T: () => exports.CustomDungeonResultInfo }
        ]);
    }
    create(value) {
        const message = { strengthenPointDataMap: {}, detail: { oneofKind: undefined } };
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
                case /* map<uint32, com.midnights.game.StrengthenPointData> strengthen_point_data_map */ 13:
                    this.binaryReadMap13(message.strengthenPointDataMap, reader, options);
                    break;
                case /* optional com.midnights.game.ChallengeFinishType finish_type */ 9:
                    message.finishType = reader.int32();
                    break;
                case /* optional bool is_new_record */ 10:
                    message.isNewRecord = reader.bool();
                    break;
                case /* optional uint32 challenge_record_type */ 7:
                    message.challengeRecordType = reader.uint32();
                    break;
                case /* optional uint32 time_cost */ 4:
                    message.timeCost = reader.uint32();
                    break;
                case /* optional uint32 current_value */ 15:
                    message.currentValue = reader.uint32();
                    break;
                case /* optional bool is_success */ 3:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 challenge_index */ 5:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* com.midnights.game.ChannellerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info */ 1521:
                    message.detail = {
                        oneofKind: "channellerSlabLoopDungeonResultInfo",
                        channellerSlabLoopDungeonResultInfo: cmd_activity_4.ChannellerSlabLoopDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.channellerSlabLoopDungeonResultInfo)
                    };
                    break;
                case /* com.midnights.game.EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info */ 1627:
                    message.detail = {
                        oneofKind: "effigyChallengeDungeonResultInfo",
                        effigyChallengeDungeonResultInfo: cmd_activity_3.EffigyChallengeDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyChallengeDungeonResultInfo)
                    };
                    break;
                case /* com.midnights.game.PotionDungeonResultInfo potion_dungeon_result_info */ 1824:
                    message.detail = {
                        oneofKind: "potionDungeonResultInfo",
                        potionDungeonResultInfo: cmd_activity_1.PotionDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.potionDungeonResultInfo)
                    };
                    break;
                case /* com.midnights.game.CustomDungeonResultInfo custom_dungeon_result_info */ 1664:
                    message.detail = {
                        oneofKind: "customDungeonResultInfo",
                        customDungeonResultInfo: exports.CustomDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.customDungeonResultInfo)
                    };
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
    binaryReadMap13(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.StrengthenPointData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.DungeonChallengeFinishNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? exports.StrengthenPointData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.StrengthenPointData> strengthen_point_data_map = 13; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k], writer, options);
            writer.join().join();
        }
        /* optional com.midnights.game.ChallengeFinishType finish_type = 9; */
        if (message.finishType !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.finishType);
        /* optional bool is_new_record = 10; */
        if (message.isNewRecord !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* optional uint32 challenge_record_type = 7; */
        if (message.challengeRecordType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.challengeRecordType);
        /* optional uint32 time_cost = 4; */
        if (message.timeCost !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.timeCost);
        /* optional uint32 current_value = 15; */
        if (message.currentValue !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.currentValue);
        /* optional bool is_success = 3; */
        if (message.isSuccess !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 challenge_index = 5; */
        if (message.challengeIndex !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* com.midnights.game.ChannellerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info = 1521; */
        if (message.detail.oneofKind === "channellerSlabLoopDungeonResultInfo")
            cmd_activity_4.ChannellerSlabLoopDungeonResultInfo.internalBinaryWrite(message.detail.channellerSlabLoopDungeonResultInfo, writer.tag(1521, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info = 1627; */
        if (message.detail.oneofKind === "effigyChallengeDungeonResultInfo")
            cmd_activity_3.EffigyChallengeDungeonResultInfo.internalBinaryWrite(message.detail.effigyChallengeDungeonResultInfo, writer.tag(1627, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.PotionDungeonResultInfo potion_dungeon_result_info = 1824; */
        if (message.detail.oneofKind === "potionDungeonResultInfo")
            cmd_activity_1.PotionDungeonResultInfo.internalBinaryWrite(message.detail.potionDungeonResultInfo, writer.tag(1824, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.CustomDungeonResultInfo custom_dungeon_result_info = 1664; */
        if (message.detail.oneofKind === "customDungeonResultInfo")
            exports.CustomDungeonResultInfo.internalBinaryWrite(message.detail.customDungeonResultInfo, writer.tag(1664, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonChallengeFinishNotify
 */
exports.DungeonChallengeFinishNotify = new DungeonChallengeFinishNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChallengeDataNotify", [
            { no: 8, name: "value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "challenge_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "param_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 value */ 8:
                    message.value = reader.uint32();
                    break;
                case /* optional uint32 challenge_index */ 2:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* optional uint32 param_index */ 9:
                    message.paramIndex = reader.uint32();
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
        /* optional uint32 value = 8; */
        if (message.value !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.value);
        /* optional uint32 challenge_index = 2; */
        if (message.challengeIndex !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* optional uint32 param_index = 9; */
        if (message.paramIndex !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.paramIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChallengeDataNotify
 */
exports.ChallengeDataNotify = new ChallengeDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonFollowNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonFollowNotify", [
            { no: 8, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 8:
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
        /* optional uint32 target_uid = 8; */
        if (message.targetUid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonFollowNotify
 */
exports.DungeonFollowNotify = new DungeonFollowNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonGetStatueDropReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonGetStatueDropReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.DungeonGetStatueDropReq
 */
exports.DungeonGetStatueDropReq = new DungeonGetStatueDropReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonGetStatueDropRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonGetStatueDropRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.DungeonGetStatueDropRsp
 */
exports.DungeonGetStatueDropRsp = new DungeonGetStatueDropRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChallengeRecord", [
            { no: 14, name: "challenge_record_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "challenge_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "best_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 challenge_record_type */ 14:
                    message.challengeRecordType = reader.uint32();
                    break;
                case /* optional uint32 challenge_index */ 15:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* optional uint32 challenge_id */ 1:
                    message.challengeId = reader.uint32();
                    break;
                case /* optional uint32 best_value */ 8:
                    message.bestValue = reader.uint32();
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
        /* optional uint32 challenge_record_type = 14; */
        if (message.challengeRecordType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.challengeRecordType);
        /* optional uint32 challenge_index = 15; */
        if (message.challengeIndex !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* optional uint32 challenge_id = 1; */
        if (message.challengeId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* optional uint32 best_value = 8; */
        if (message.bestValue !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.bestValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChallengeRecord
 */
exports.ChallengeRecord = new ChallengeRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeRecordNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChallengeRecordNotify", [
            { no: 2, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "challenge_record_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ChallengeRecord }
        ]);
    }
    create(value) {
        const message = { challengeRecordList: [] };
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
                case /* optional uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ChallengeRecord challenge_record_list */ 5:
                    message.challengeRecordList.push(exports.ChallengeRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 group_id = 2; */
        if (message.groupId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.groupId);
        /* repeated com.midnights.game.ChallengeRecord challenge_record_list = 5; */
        for (let i = 0; i < message.challengeRecordList.length; i++)
            exports.ChallengeRecord.internalBinaryWrite(message.challengeRecordList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChallengeRecordNotify
 */
exports.ChallengeRecordNotify = new ChallengeRecordNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamAvatar", [
            { no: 2, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "avatar_info", kind: "message", T: () => define_2.AvatarInfo }
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
                case /* optional uint32 player_uid */ 2:
                    message.playerUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.AvatarInfo avatar_info */ 6:
                    message.avatarInfo = define_2.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarInfo);
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
        /* optional uint32 player_uid = 2; */
        if (message.playerUid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* optional com.midnights.game.AvatarInfo avatar_info = 6; */
        if (message.avatarInfo)
            define_2.AvatarInfo.internalBinaryWrite(message.avatarInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamAvatar
 */
exports.DungeonCandidateTeamAvatar = new DungeonCandidateTeamAvatar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamInfoNotify", [
            { no: 10, name: "player_state_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["com.midnights.game.DungeonCandidateTeamPlayerState", define_1.DungeonCandidateTeamPlayerState, "DUNGEON_CANDIDATE_TEAM_PLAYER_STATE_"] } },
            { no: 9, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "ready_player_uid", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "match_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DungeonCandidateTeamAvatar }
        ]);
    }
    create(value) {
        const message = { playerStateMap: {}, readyPlayerUid: [], avatarList: [] };
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
                case /* map<uint32, com.midnights.game.DungeonCandidateTeamPlayerState> player_state_map */ 10:
                    this.binaryReadMap10(message.playerStateMap, reader, options);
                    break;
                case /* optional uint32 dungeon_id */ 9:
                    message.dungeonId = reader.uint32();
                    break;
                case /* repeated uint32 ready_player_uid */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.readyPlayerUid.push(reader.uint32());
                    else
                        message.readyPlayerUid.push(reader.uint32());
                    break;
                case /* optional uint32 match_type */ 2:
                    message.matchType = reader.uint32();
                    break;
                case /* repeated com.midnights.game.DungeonCandidateTeamAvatar avatar_list */ 4:
                    message.avatarList.push(exports.DungeonCandidateTeamAvatar.internalBinaryRead(reader, reader.uint32(), options));
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
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.DungeonCandidateTeamInfoNotify.player_state_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.DungeonCandidateTeamPlayerState> player_state_map = 10; */
        for (let k of Object.keys(message.playerStateMap))
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.playerStateMap[k]).join();
        /* optional uint32 dungeon_id = 9; */
        if (message.dungeonId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* repeated uint32 ready_player_uid = 13; */
        for (let i = 0; i < message.readyPlayerUid.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.readyPlayerUid[i]);
        /* optional uint32 match_type = 2; */
        if (message.matchType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.matchType);
        /* repeated com.midnights.game.DungeonCandidateTeamAvatar avatar_list = 4; */
        for (let i = 0; i < message.avatarList.length; i++)
            exports.DungeonCandidateTeamAvatar.internalBinaryWrite(message.avatarList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamInfoNotify
 */
exports.DungeonCandidateTeamInfoNotify = new DungeonCandidateTeamInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamInviteNotify", [
            { no: 5, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "vaild_deadline_time_sec", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 player_uid */ 5:
                    message.playerUid = reader.uint32();
                    break;
                case /* optional uint32 vaild_deadline_time_sec */ 9:
                    message.vaildDeadlineTimeSec = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
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
        /* optional uint32 player_uid = 5; */
        if (message.playerUid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* optional uint32 vaild_deadline_time_sec = 9; */
        if (message.vaildDeadlineTimeSec !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.vaildDeadlineTimeSec);
        /* optional uint32 dungeon_id = 6; */
        if (message.dungeonId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamInviteNotify
 */
exports.DungeonCandidateTeamInviteNotify = new DungeonCandidateTeamInviteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamRefuseNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamRefuseNotify", [
            { no: 3, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 player_uid */ 3:
                    message.playerUid = reader.uint32();
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
        /* optional uint32 player_uid = 3; */
        if (message.playerUid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.playerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamRefuseNotify
 */
exports.DungeonCandidateTeamRefuseNotify = new DungeonCandidateTeamRefuseNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamPlayerLeaveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamPlayerLeaveNotify", [
            { no: 3, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.DungeonCandidateTeamPlayerLeaveReason", DungeonCandidateTeamPlayerLeaveReason] },
            { no: 13, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.DungeonCandidateTeamPlayerLeaveReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 player_uid */ 13:
                    message.playerUid = reader.uint32();
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
        /* optional com.midnights.game.DungeonCandidateTeamPlayerLeaveReason reason = 3; */
        if (message.reason !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 player_uid = 13; */
        if (message.playerUid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.playerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamPlayerLeaveNotify
 */
exports.DungeonCandidateTeamPlayerLeaveNotify = new DungeonCandidateTeamPlayerLeaveNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamDismissNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamDismissNotify", [
            { no: 9, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.DungeonCandidateTeamDismissReason", DungeonCandidateTeamDismissReason] },
            { no: 12, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.DungeonCandidateTeamDismissReason reason */ 9:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 player_uid */ 12:
                    message.playerUid = reader.uint32();
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
        /* optional com.midnights.game.DungeonCandidateTeamDismissReason reason = 9; */
        if (message.reason !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 player_uid = 12; */
        if (message.playerUid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.playerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamDismissNotify
 */
exports.DungeonCandidateTeamDismissNotify = new DungeonCandidateTeamDismissNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamCreateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamCreateReq", [
            { no: 7, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 point_id */ 7:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
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
        /* optional uint32 point_id = 7; */
        if (message.pointId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional uint32 dungeon_id = 6; */
        if (message.dungeonId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamCreateReq
 */
exports.DungeonCandidateTeamCreateReq = new DungeonCandidateTeamCreateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamCreateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamCreateRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamCreateRsp
 */
exports.DungeonCandidateTeamCreateRsp = new DungeonCandidateTeamCreateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamInviteReq", [
            { no: 5, name: "player_uids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playerUids: [] };
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
                case /* repeated uint32 player_uids */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.playerUids.push(reader.uint32());
                    else
                        message.playerUids.push(reader.uint32());
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
        /* repeated uint32 player_uids = 5; */
        for (let i = 0; i < message.playerUids.length; i++)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.playerUids[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamInviteReq
 */
exports.DungeonCandidateTeamInviteReq = new DungeonCandidateTeamInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamInviteRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "invalid_player_uids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { invalidPlayerUids: [] };
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
                case /* repeated uint32 invalid_player_uids */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.invalidPlayerUids.push(reader.uint32());
                    else
                        message.invalidPlayerUids.push(reader.uint32());
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
        /* repeated uint32 invalid_player_uids = 7; */
        for (let i = 0; i < message.invalidPlayerUids.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.invalidPlayerUids[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamInviteRsp
 */
exports.DungeonCandidateTeamInviteRsp = new DungeonCandidateTeamInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamKickReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamKickReq", [
            { no: 9, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 player_uid */ 9:
                    message.playerUid = reader.uint32();
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
        /* optional uint32 player_uid = 9; */
        if (message.playerUid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.playerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamKickReq
 */
exports.DungeonCandidateTeamKickReq = new DungeonCandidateTeamKickReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamKickRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamKickRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamKickRsp
 */
exports.DungeonCandidateTeamKickRsp = new DungeonCandidateTeamKickRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamLeaveReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamLeaveReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamLeaveReq
 */
exports.DungeonCandidateTeamLeaveReq = new DungeonCandidateTeamLeaveReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamLeaveRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamLeaveRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamLeaveRsp
 */
exports.DungeonCandidateTeamLeaveRsp = new DungeonCandidateTeamLeaveRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamReplyInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamReplyInviteReq", [
            { no: 5, name: "is_accept", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_accept */ 5:
                    message.isAccept = reader.bool();
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
        /* optional bool is_accept = 5; */
        if (message.isAccept !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isAccept);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamReplyInviteReq
 */
exports.DungeonCandidateTeamReplyInviteReq = new DungeonCandidateTeamReplyInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamReplyInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamReplyInviteRsp", [
            { no: 4, name: "is_trans_point", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
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
                case /* optional bool is_trans_point */ 4:
                    message.isTransPoint = reader.bool();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_trans_point = 4; */
        if (message.isTransPoint !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isTransPoint);
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamReplyInviteRsp
 */
exports.DungeonCandidateTeamReplyInviteRsp = new DungeonCandidateTeamReplyInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamSetReadyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamSetReadyReq", [
            { no: 15, name: "is_ready", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_ready */ 15:
                    message.isReady = reader.bool();
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
        /* optional bool is_ready = 15; */
        if (message.isReady !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isReady);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamSetReadyReq
 */
exports.DungeonCandidateTeamSetReadyReq = new DungeonCandidateTeamSetReadyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamSetReadyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamSetReadyRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamSetReadyRsp
 */
exports.DungeonCandidateTeamSetReadyRsp = new DungeonCandidateTeamSetReadyRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamChangeAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamChangeAvatarReq", [
            { no: 5, name: "avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuidList: [] };
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
                case /* repeated uint64 avatar_guid_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarGuidList.push(reader.uint64().toBigInt());
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
        /* repeated uint64 avatar_guid_list = 5; */
        for (let i = 0; i < message.avatarGuidList.length; i++)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.avatarGuidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamChangeAvatarReq
 */
exports.DungeonCandidateTeamChangeAvatarReq = new DungeonCandidateTeamChangeAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamChangeAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamChangeAvatarRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamChangeAvatarRsp
 */
exports.DungeonCandidateTeamChangeAvatarRsp = new DungeonCandidateTeamChangeAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyDungeonEntryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyDungeonEntryInfo", [
            { no: 12, name: "dungeon_entry_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "dungeon_entry_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "recommend_dungeon_entry_info", kind: "message", T: () => exports.DungeonEntryInfo },
            { no: 4, name: "recommend_dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 dungeon_entry_config_id */ 12:
                    message.dungeonEntryConfigId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_entry_id */ 15:
                    message.dungeonEntryId = reader.uint32();
                    break;
                case /* optional com.midnights.game.DungeonEntryInfo recommend_dungeon_entry_info */ 1:
                    message.recommendDungeonEntryInfo = exports.DungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options, message.recommendDungeonEntryInfo);
                    break;
                case /* optional uint32 recommend_dungeon_id */ 4:
                    message.recommendDungeonId = reader.uint32();
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
        /* optional uint32 dungeon_entry_config_id = 12; */
        if (message.dungeonEntryConfigId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.dungeonEntryConfigId);
        /* optional uint32 dungeon_entry_id = 15; */
        if (message.dungeonEntryId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.dungeonEntryId);
        /* optional com.midnights.game.DungeonEntryInfo recommend_dungeon_entry_info = 1; */
        if (message.recommendDungeonEntryInfo)
            exports.DungeonEntryInfo.internalBinaryWrite(message.recommendDungeonEntryInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 recommend_dungeon_id = 4; */
        if (message.recommendDungeonId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.recommendDungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DailyDungeonEntryInfo
 */
exports.DailyDungeonEntryInfo = new DailyDungeonEntryInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDailyDungeonEntryInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetDailyDungeonEntryInfoReq", [
            { no: 15, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 15:
                    message.sceneId = reader.uint32();
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
        /* optional uint32 scene_id = 15; */
        if (message.sceneId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetDailyDungeonEntryInfoReq
 */
exports.GetDailyDungeonEntryInfoReq = new GetDailyDungeonEntryInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDailyDungeonEntryInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetDailyDungeonEntryInfoRsp", [
            { no: 2, name: "daily_dungeon_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DailyDungeonEntryInfo },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { dailyDungeonInfoList: [] };
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
                case /* repeated com.midnights.game.DailyDungeonEntryInfo daily_dungeon_info_list */ 2:
                    message.dailyDungeonInfoList.push(exports.DailyDungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 14:
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
        /* repeated com.midnights.game.DailyDungeonEntryInfo daily_dungeon_info_list = 2; */
        for (let i = 0; i < message.dailyDungeonInfoList.length; i++)
            exports.DailyDungeonEntryInfo.internalBinaryWrite(message.dailyDungeonInfoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetDailyDungeonEntryInfoRsp
 */
exports.GetDailyDungeonEntryInfoRsp = new GetDailyDungeonEntryInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonSlipRevivePointActivateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonSlipRevivePointActivateReq", [
            { no: 9, name: "slip_revive_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 slip_revive_point_id */ 9:
                    message.slipRevivePointId = reader.uint32();
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
        /* optional uint32 slip_revive_point_id = 9; */
        if (message.slipRevivePointId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.slipRevivePointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonSlipRevivePointActivateReq
 */
exports.DungeonSlipRevivePointActivateReq = new DungeonSlipRevivePointActivateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonSlipRevivePointActivateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonSlipRevivePointActivateRsp", [
            { no: 14, name: "slip_revive_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 slip_revive_point_id */ 14:
                    message.slipRevivePointId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 4:
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
        /* optional uint32 slip_revive_point_id = 14; */
        if (message.slipRevivePointId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.slipRevivePointId);
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonSlipRevivePointActivateRsp
 */
exports.DungeonSlipRevivePointActivateRsp = new DungeonSlipRevivePointActivateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonInterruptChallengeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonInterruptChallengeReq", [
            { no: 14, name: "challenge_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 challenge_index */ 14:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 13:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 challenge_id */ 11:
                    message.challengeId = reader.uint32();
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
        /* optional uint32 challenge_index = 14; */
        if (message.challengeIndex !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* optional uint32 group_id = 13; */
        if (message.groupId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 challenge_id = 11; */
        if (message.challengeId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonInterruptChallengeReq
 */
exports.DungeonInterruptChallengeReq = new DungeonInterruptChallengeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonInterruptChallengeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonInterruptChallengeRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "challenge_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 challenge_index */ 2:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 challenge_id */ 11:
                    message.challengeId = reader.uint32();
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
        /* optional uint32 challenge_index = 2; */
        if (message.challengeIndex !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* optional uint32 group_id = 15; */
        if (message.groupId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 challenge_id = 11; */
        if (message.challengeId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonInterruptChallengeRsp
 */
exports.DungeonInterruptChallengeRsp = new DungeonInterruptChallengeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InteractDailyDungeonInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InteractDailyDungeonInfoNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.InteractDailyDungeonInfoNotify
 */
exports.InteractDailyDungeonInfoNotify = new InteractDailyDungeonInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonRestartReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.DungeonRestartReq
 */
exports.DungeonRestartReq = new DungeonRestartReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonRestartRsp", [
            { no: 15, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 dungeon_id */ 15:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 point_id */ 14:
                    message.pointId = reader.uint32();
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
        /* optional uint32 dungeon_id = 15; */
        if (message.dungeonId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 point_id = 14; */
        if (message.pointId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonRestartRsp
 */
exports.DungeonRestartRsp = new DungeonRestartRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonRestartInviteNotify", [
            { no: 3, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cd", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 player_uid */ 3:
                    message.playerUid = reader.uint32();
                    break;
                case /* optional uint32 cd */ 15:
                    message.cd = reader.uint32();
                    break;
                case /* optional uint32 point_id */ 13:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 10:
                    message.dungeonId = reader.uint32();
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
        /* optional uint32 player_uid = 3; */
        if (message.playerUid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* optional uint32 cd = 15; */
        if (message.cd !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.cd);
        /* optional uint32 point_id = 13; */
        if (message.pointId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional uint32 dungeon_id = 10; */
        if (message.dungeonId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonRestartInviteNotify
 */
exports.DungeonRestartInviteNotify = new DungeonRestartInviteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartInviteReplyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonRestartInviteReplyReq", [
            { no: 11, name: "is_accept", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_accept */ 11:
                    message.isAccept = reader.bool();
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
        /* optional bool is_accept = 11; */
        if (message.isAccept !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isAccept);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonRestartInviteReplyReq
 */
exports.DungeonRestartInviteReplyReq = new DungeonRestartInviteReplyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartInviteReplyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonRestartInviteReplyRsp", [
            { no: 10, name: "is_accept", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "is_trans_point", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional bool is_accept */ 10:
                    message.isAccept = reader.bool();
                    break;
                case /* optional bool is_trans_point */ 1:
                    message.isTransPoint = reader.bool();
                    break;
                case /* optional int32 retcode */ 9:
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
        /* optional bool is_accept = 10; */
        if (message.isAccept !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isAccept);
        /* optional bool is_trans_point = 1; */
        if (message.isTransPoint !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isTransPoint);
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonRestartInviteReplyRsp
 */
exports.DungeonRestartInviteReplyRsp = new DungeonRestartInviteReplyRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartInviteReplyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonRestartInviteReplyNotify", [
            { no: 6, name: "is_accept", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_accept */ 6:
                    message.isAccept = reader.bool();
                    break;
                case /* optional uint32 player_uid */ 9:
                    message.playerUid = reader.uint32();
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
        /* optional bool is_accept = 6; */
        if (message.isAccept !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAccept);
        /* optional uint32 player_uid = 9; */
        if (message.playerUid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.playerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonRestartInviteReplyNotify
 */
exports.DungeonRestartInviteReplyNotify = new DungeonRestartInviteReplyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonRestartResultNotify", [
            { no: 9, name: "is_add_accpet", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_add_accpet */ 9:
                    message.isAddAccpet = reader.bool();
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
        /* optional bool is_add_accpet = 9; */
        if (message.isAddAccpet !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isAddAccpet);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonRestartResultNotify
 */
exports.DungeonRestartResultNotify = new DungeonRestartResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamSetChangingAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamSetChangingAvatarReq", [
            { no: 12, name: "is_changing_avatar", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_changing_avatar */ 12:
                    message.isChangingAvatar = reader.bool();
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
        /* optional bool is_changing_avatar = 12; */
        if (message.isChangingAvatar !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isChangingAvatar);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamSetChangingAvatarReq
 */
exports.DungeonCandidateTeamSetChangingAvatarReq = new DungeonCandidateTeamSetChangingAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamSetChangingAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonCandidateTeamSetChangingAvatarRsp", [
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
                case /* optional int32 retcode */ 2:
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
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonCandidateTeamSetChangingAvatarRsp
 */
exports.DungeonCandidateTeamSetChangingAvatarRsp = new DungeonCandidateTeamSetChangingAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialFloorLevelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MistTrialFloorLevelNotify", [
            { no: 7, name: "floor_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "dungeon_scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 floor_level */ 7:
                    message.floorLevel = reader.uint32();
                    break;
                case /* optional uint32 dungeon_scene_id */ 14:
                    message.dungeonSceneId = reader.uint32();
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
        /* optional uint32 floor_level = 7; */
        if (message.floorLevel !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.floorLevel);
        /* optional uint32 dungeon_scene_id = 14; */
        if (message.dungeonSceneId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.dungeonSceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MistTrialFloorLevelNotify
 */
exports.MistTrialFloorLevelNotify = new MistTrialFloorLevelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonReviseLevelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonReviseLevelNotify", [
            { no: 5, name: "scene_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "revise_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_level */ 5:
                    message.sceneLevel = reader.uint32();
                    break;
                case /* optional uint32 revise_level */ 10:
                    message.reviseLevel = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 3:
                    message.dungeonId = reader.uint32();
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
        /* optional uint32 scene_level = 5; */
        if (message.sceneLevel !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.sceneLevel);
        /* optional uint32 revise_level = 10; */
        if (message.reviseLevel !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.reviseLevel);
        /* optional uint32 dungeon_id = 3; */
        if (message.dungeonId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonReviseLevelNotify
 */
exports.DungeonReviseLevelNotify = new DungeonReviseLevelNotify$Type();
