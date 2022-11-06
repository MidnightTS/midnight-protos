"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyTaskScoreRewardNotify_CmdId = exports.DailyTaskProgressNotify_CmdId = exports.DailyTaskDataNotify_CmdId = exports.DataResVersionNotify_CmdId = exports.DataResVersionNotify_DataResVersionOpType = exports.PlayerSetLanguageRsp_CmdId = exports.PlayerSetLanguageReq_CmdId = exports.PlayerSetPauseRsp_CmdId = exports.PlayerSetPauseReq_CmdId = exports.PlayerTimeNotify_CmdId = exports.GetCompoundDataRsp_CmdId = exports.GetCompoundDataReq_CmdId = exports.CompoundDataNotify_CmdId = exports.TakeCompoundOutputRsp_CmdId = exports.TakeCompoundOutputReq_CmdId = exports.PlayerCompoundMaterialRsp_CmdId = exports.PlayerCompoundMaterialReq_CmdId = exports.CookGradeDataNotify_CmdId = exports.CookRecipeDataNotify_CmdId = exports.CookDataNotify_CmdId = exports.PlayerRandomCookRsp_CmdId = exports.PlayerRandomCookReq_CmdId = exports.PlayerCookRsp_CmdId = exports.PlayerCookReq_CmdId = exports.OpenStateChangeNotify_CmdId = exports.OpenStateUpdateNotify_CmdId = exports.SetOpenStateRsp_CmdId = exports.SetOpenStateReq_CmdId = exports.SetPlayerNameRsp_CmdId = exports.SetPlayerNameReq_CmdId = exports.PlayerPropChangeNotify_CmdId = exports.DoSetPlayerBornDataNotify_CmdId = exports.SetPlayerBornDataRsp_CmdId = exports.SetPlayerBornDataReq_CmdId = exports.SetPlayerPropRsp_CmdId = exports.SetPlayerPropReq_CmdId = exports.ClientTriggerEventNotify_CmdId = exports.PlayerPropNotify_CmdId = exports.PlayerGameTimeNotify_CmdId = exports.ChangeGameTimeRsp_CmdId = exports.ChangeGameTimeReq_CmdId = exports.PlayerDataNotify_CmdId = exports.PlayerLogoutNotify_CmdId = exports.PlayerLogoutRsp_CmdId = exports.PlayerLogoutReq_CmdId = exports.PlayerLogoutReq_Reason = exports.PlayerLoginRsp_CmdId = exports.PlayerLoginReq_CmdId = exports.GetPlayerTokenRsp_CmdId = exports.GetPlayerTokenReq_CmdId = void 0;
exports.PlayerLoginRsp = exports.ShortAbilityHashPair = exports.PlayerLoginReq = exports.AdjustTrackingInfo = exports.TrackingIOInfo = exports.GetPlayerTokenRsp = exports.GetPlayerTokenReq = exports.CompoundBoostTakeStatusType = exports.PlayerCompoundMaterialBoostRsp_CmdId = exports.PlayerCompoundMaterialBoostReq_CmdId = exports.ReadNicknameAuditRsp_CmdId = exports.ReadNicknameAuditReq_CmdId = exports.NicknameAuditConfigNotify_CmdId = exports.PlayerNicknameNotify_CmdId = exports.PlayerNicknameAuditDataNotify_CmdId = exports.TakeBackGivingItemRsp_CmdId = exports.TakeBackGivingItemReq_CmdId = exports.GetGameplayRecommendationRsp_CmdId = exports.GetGameplayRecommendationReq_CmdId = exports.CompoundUnlockNotify_CmdId = exports.ExclusiveRuleNotify_CmdId = exports.DailyTaskUnlockedCitiesNotify_CmdId = exports.DailyTaskFilterCityRsp_CmdId = exports.DailyTaskFilterCityReq_CmdId = exports.AdjustWorldLevelRsp_CmdId = exports.AdjustWorldLevelReq_CmdId = exports.GetNextResourceInfoRsp_CmdId = exports.GetNextResourceInfoReq_CmdId = exports.ClientLockGameTimeNotify_CmdId = exports.TaskVarNotify_CmdId = exports.PlayerInjectFixNotify_CmdId = exports.PlayerForceExitRsp_CmdId = exports.PlayerForceExitReq_CmdId = exports.AntiAddictNotify_CmdId = exports.ServerDisconnectClientNotify_CmdId = exports.PlayerLuaShellNotify_CmdId = exports.PlayerCookArgsRsp_CmdId = exports.PlayerCookArgsReq_CmdId = exports.ItemGivingRsp_CmdId = exports.ItemGivingReq_CmdId = exports.ItemGivingReq_ItemGivingType = exports.GivingRecordChangeNotify_CmdId = exports.GivingRecordNotify_CmdId = exports.PlayerLevelRewardUpdateNotify_CmdId = exports.TakePlayerLevelRewardRsp_CmdId = exports.TakePlayerLevelRewardReq_CmdId = exports.RemoveRandTaskInfoNotify_CmdId = exports.RemoveRandTaskInfoNotify_FinishReason = exports.AddRandTaskInfoNotify_CmdId = exports.WorldOwnerDailyTaskNotify_CmdId = void 0;
exports.RemoveRandTaskInfoNotify = exports.AddRandTaskInfoNotify = exports.WorldOwnerDailyTaskNotify = exports.DailyTaskScoreRewardNotify = exports.DailyTaskProgressNotify = exports.DailyTaskDataNotify = exports.DailyTaskInfo = exports.DataResVersionNotify = exports.PlayerSetLanguageRsp = exports.PlayerSetLanguageReq = exports.PlayerSetPauseRsp = exports.PlayerSetPauseReq = exports.PlayerTimeNotify = exports.GetCompoundDataRsp = exports.GetCompoundDataReq = exports.CompoundDataNotify = exports.TakeCompoundOutputRsp = exports.TakeCompoundOutputReq = exports.PlayerCompoundMaterialRsp = exports.CompoundQueueData = exports.PlayerCompoundMaterialReq = exports.CookGradeDataNotify = exports.CookRecipeDataNotify = exports.CookDataNotify = exports.CookRecipeData = exports.PlayerRandomCookRsp = exports.PlayerRandomCookReq = exports.PlayerCookRsp = exports.PlayerCookReq = exports.OpenStateChangeNotify = exports.OpenStateUpdateNotify = exports.SetOpenStateRsp = exports.SetOpenStateReq = exports.SetPlayerNameRsp = exports.SetPlayerNameReq = exports.PlayerPropChangeNotify = exports.DoSetPlayerBornDataNotify = exports.SetPlayerBornDataRsp = exports.SetPlayerBornDataReq = exports.SetPlayerPropRsp = exports.SetPlayerPropReq = exports.ClientTriggerEventNotify = exports.PlayerPropNotify = exports.PlayerGameTimeNotify = exports.ChangeGameTimeRsp = exports.ChangeGameTimeReq = exports.PlayerDataNotify = exports.PlayerLogoutNotify = exports.PlayerLogoutRsp = exports.PlayerLogoutReq = void 0;
exports.PlayerCompoundMaterialBoostRsp = exports.PlayerCompoundMaterialBoostReq = exports.ReadNicknameAuditRsp = exports.ReadNicknameAuditReq = exports.NicknameAuditConfigNotify = exports.PlayerNicknameNotify = exports.PlayerNicknameAuditDataNotify = exports.TakeBackGivingItemRsp = exports.TakeBackGivingItemReq = exports.GetGameplayRecommendationRsp = exports.GameplayRecommendationElementReliquaryResponse = exports.GameplayRecommendationReliquaryResponse = exports.GameplayRecommendationReliquaryMainPropData = exports.GameplayRecommendationSkillResponse = exports.GetGameplayRecommendationReq = exports.GameplayRecommendationElementReliquaryRequest = exports.GameplayRecommendationReliquaryRequest = exports.GameplayRecommendationSkillRequest = exports.CompoundUnlockNotify = exports.ExclusiveRuleNotify = exports.ExclusiveRuleInfo = exports.DailyTaskUnlockedCitiesNotify = exports.DailyTaskFilterCityRsp = exports.DailyTaskFilterCityReq = exports.AdjustWorldLevelRsp = exports.AdjustWorldLevelReq = exports.GetNextResourceInfoRsp = exports.GetNextResourceInfoReq = exports.ClientLockGameTimeNotify = exports.TaskVarNotify = exports.TaskVar = exports.PlayerInjectFixNotify = exports.PlayerForceExitRsp = exports.PlayerForceExitReq = exports.AntiAddictNotify = exports.ServerDisconnectClientNotify = exports.PlayerLuaShellNotify = exports.PlayerCookArgsRsp = exports.PlayerCookArgsReq = exports.ItemGivingRsp = exports.ItemGivingReq = exports.GivingRecordChangeNotify = exports.GivingRecordNotify = exports.GivingRecord = exports.PlayerLevelRewardUpdateNotify = exports.TakePlayerLevelRewardRsp = exports.TakePlayerLevelRewardReq = void 0;
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
const define_6 = require("./define");
const define_7 = require("./define");
const define_8 = require("./define");
const define_9 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerTokenReq.CmdId
 */
var GetPlayerTokenReq_CmdId;
(function (GetPlayerTokenReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 172;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["CMD_ID"] = 172] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerTokenReq_CmdId[GetPlayerTokenReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerTokenReq_CmdId = exports.GetPlayerTokenReq_CmdId || (exports.GetPlayerTokenReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerTokenRsp.CmdId
 */
var GetPlayerTokenRsp_CmdId;
(function (GetPlayerTokenRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 198;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["CMD_ID"] = 198] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerTokenRsp_CmdId[GetPlayerTokenRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetPlayerTokenRsp_CmdId = exports.GetPlayerTokenRsp_CmdId || (exports.GetPlayerTokenRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLoginReq.CmdId
 */
var PlayerLoginReq_CmdId;
(function (PlayerLoginReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 112;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["CMD_ID"] = 112] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLoginReq_CmdId[PlayerLoginReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerLoginReq_CmdId = exports.PlayerLoginReq_CmdId || (exports.PlayerLoginReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLoginRsp.CmdId
 */
var PlayerLoginRsp_CmdId;
(function (PlayerLoginRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 135;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["CMD_ID"] = 135] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerLoginRsp_CmdId = exports.PlayerLoginRsp_CmdId || (exports.PlayerLoginRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLogoutReq.Reason
 */
var PlayerLogoutReq_Reason;
(function (PlayerLogoutReq_Reason) {
    /**
     * @generated from protobuf enum value: DISCONNECT = 0;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["DISCONNECT"] = 0] = "DISCONNECT";
    /**
     * @generated from protobuf enum value: CLIENT_REQ = 1;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["CLIENT_REQ"] = 1] = "CLIENT_REQ";
    /**
     * @generated from protobuf enum value: TIMEOUT = 2;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["TIMEOUT"] = 2] = "TIMEOUT";
    /**
     * @generated from protobuf enum value: ADMIN_REQ = 3;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["ADMIN_REQ"] = 3] = "ADMIN_REQ";
    /**
     * @generated from protobuf enum value: SERVER_CLOSE = 4;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["SERVER_CLOSE"] = 4] = "SERVER_CLOSE";
    /**
     * @generated from protobuf enum value: GM_CLEAR = 5;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["GM_CLEAR"] = 5] = "GM_CLEAR";
    /**
     * @generated from protobuf enum value: PLAYER_TRANSFER = 6;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["PLAYER_TRANSFER"] = 6] = "PLAYER_TRANSFER";
    /**
     * @generated from protobuf enum value: CLIENT_CHECKSUM_INVALID = 7;
     */
    PlayerLogoutReq_Reason[PlayerLogoutReq_Reason["CLIENT_CHECKSUM_INVALID"] = 7] = "CLIENT_CHECKSUM_INVALID";
})(PlayerLogoutReq_Reason = exports.PlayerLogoutReq_Reason || (exports.PlayerLogoutReq_Reason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLogoutReq.CmdId
 */
var PlayerLogoutReq_CmdId;
(function (PlayerLogoutReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLogoutReq_CmdId[PlayerLogoutReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 107;
     */
    PlayerLogoutReq_CmdId[PlayerLogoutReq_CmdId["CMD_ID"] = 107] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLogoutReq_CmdId[PlayerLogoutReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLogoutReq_CmdId[PlayerLogoutReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLogoutReq_CmdId[PlayerLogoutReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerLogoutReq_CmdId = exports.PlayerLogoutReq_CmdId || (exports.PlayerLogoutReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLogoutRsp.CmdId
 */
var PlayerLogoutRsp_CmdId;
(function (PlayerLogoutRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLogoutRsp_CmdId[PlayerLogoutRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 121;
     */
    PlayerLogoutRsp_CmdId[PlayerLogoutRsp_CmdId["CMD_ID"] = 121] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLogoutRsp_CmdId[PlayerLogoutRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLogoutRsp_CmdId[PlayerLogoutRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerLogoutRsp_CmdId = exports.PlayerLogoutRsp_CmdId || (exports.PlayerLogoutRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLogoutNotify.CmdId
 */
var PlayerLogoutNotify_CmdId;
(function (PlayerLogoutNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLogoutNotify_CmdId[PlayerLogoutNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 103;
     */
    PlayerLogoutNotify_CmdId[PlayerLogoutNotify_CmdId["CMD_ID"] = 103] = "CMD_ID";
})(PlayerLogoutNotify_CmdId = exports.PlayerLogoutNotify_CmdId || (exports.PlayerLogoutNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerDataNotify.CmdId
 */
var PlayerDataNotify_CmdId;
(function (PlayerDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 190;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["CMD_ID"] = 190] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerDataNotify_CmdId[PlayerDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerDataNotify_CmdId = exports.PlayerDataNotify_CmdId || (exports.PlayerDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeGameTimeReq.CmdId
 */
var ChangeGameTimeReq_CmdId;
(function (ChangeGameTimeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeGameTimeReq_CmdId[ChangeGameTimeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 173;
     */
    ChangeGameTimeReq_CmdId[ChangeGameTimeReq_CmdId["CMD_ID"] = 173] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeGameTimeReq_CmdId[ChangeGameTimeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeGameTimeReq_CmdId[ChangeGameTimeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeGameTimeReq_CmdId[ChangeGameTimeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeGameTimeReq_CmdId = exports.ChangeGameTimeReq_CmdId || (exports.ChangeGameTimeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeGameTimeRsp.CmdId
 */
var ChangeGameTimeRsp_CmdId;
(function (ChangeGameTimeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeGameTimeRsp_CmdId[ChangeGameTimeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 199;
     */
    ChangeGameTimeRsp_CmdId[ChangeGameTimeRsp_CmdId["CMD_ID"] = 199] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeGameTimeRsp_CmdId[ChangeGameTimeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeGameTimeRsp_CmdId[ChangeGameTimeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChangeGameTimeRsp_CmdId = exports.ChangeGameTimeRsp_CmdId || (exports.ChangeGameTimeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerGameTimeNotify.CmdId
 */
var PlayerGameTimeNotify_CmdId;
(function (PlayerGameTimeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 131;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["CMD_ID"] = 131] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerGameTimeNotify_CmdId[PlayerGameTimeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerGameTimeNotify_CmdId = exports.PlayerGameTimeNotify_CmdId || (exports.PlayerGameTimeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerPropNotify.CmdId
 */
var PlayerPropNotify_CmdId;
(function (PlayerPropNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPropNotify_CmdId[PlayerPropNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 175;
     */
    PlayerPropNotify_CmdId[PlayerPropNotify_CmdId["CMD_ID"] = 175] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPropNotify_CmdId[PlayerPropNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerPropNotify_CmdId[PlayerPropNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerPropNotify_CmdId = exports.PlayerPropNotify_CmdId || (exports.PlayerPropNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientTriggerEventNotify.CmdId
 */
var ClientTriggerEventNotify_CmdId;
(function (ClientTriggerEventNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientTriggerEventNotify_CmdId[ClientTriggerEventNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 148;
     */
    ClientTriggerEventNotify_CmdId[ClientTriggerEventNotify_CmdId["CMD_ID"] = 148] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientTriggerEventNotify_CmdId[ClientTriggerEventNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientTriggerEventNotify_CmdId[ClientTriggerEventNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientTriggerEventNotify_CmdId[ClientTriggerEventNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientTriggerEventNotify_CmdId = exports.ClientTriggerEventNotify_CmdId || (exports.ClientTriggerEventNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerPropReq.CmdId
 */
var SetPlayerPropReq_CmdId;
(function (SetPlayerPropReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerPropReq_CmdId[SetPlayerPropReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 197;
     */
    SetPlayerPropReq_CmdId[SetPlayerPropReq_CmdId["CMD_ID"] = 197] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerPropReq_CmdId[SetPlayerPropReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerPropReq_CmdId[SetPlayerPropReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerPropReq_CmdId[SetPlayerPropReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetPlayerPropReq_CmdId = exports.SetPlayerPropReq_CmdId || (exports.SetPlayerPropReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerPropRsp.CmdId
 */
var SetPlayerPropRsp_CmdId;
(function (SetPlayerPropRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerPropRsp_CmdId[SetPlayerPropRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 181;
     */
    SetPlayerPropRsp_CmdId[SetPlayerPropRsp_CmdId["CMD_ID"] = 181] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerPropRsp_CmdId[SetPlayerPropRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerPropRsp_CmdId[SetPlayerPropRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetPlayerPropRsp_CmdId = exports.SetPlayerPropRsp_CmdId || (exports.SetPlayerPropRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerBornDataReq.CmdId
 */
var SetPlayerBornDataReq_CmdId;
(function (SetPlayerBornDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBornDataReq_CmdId[SetPlayerBornDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 105;
     */
    SetPlayerBornDataReq_CmdId[SetPlayerBornDataReq_CmdId["CMD_ID"] = 105] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBornDataReq_CmdId[SetPlayerBornDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerBornDataReq_CmdId[SetPlayerBornDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerBornDataReq_CmdId[SetPlayerBornDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetPlayerBornDataReq_CmdId = exports.SetPlayerBornDataReq_CmdId || (exports.SetPlayerBornDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerBornDataRsp.CmdId
 */
var SetPlayerBornDataRsp_CmdId;
(function (SetPlayerBornDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBornDataRsp_CmdId[SetPlayerBornDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 182;
     */
    SetPlayerBornDataRsp_CmdId[SetPlayerBornDataRsp_CmdId["CMD_ID"] = 182] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBornDataRsp_CmdId[SetPlayerBornDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerBornDataRsp_CmdId[SetPlayerBornDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetPlayerBornDataRsp_CmdId = exports.SetPlayerBornDataRsp_CmdId || (exports.SetPlayerBornDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DoSetPlayerBornDataNotify.CmdId
 */
var DoSetPlayerBornDataNotify_CmdId;
(function (DoSetPlayerBornDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DoSetPlayerBornDataNotify_CmdId[DoSetPlayerBornDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 147;
     */
    DoSetPlayerBornDataNotify_CmdId[DoSetPlayerBornDataNotify_CmdId["CMD_ID"] = 147] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DoSetPlayerBornDataNotify_CmdId[DoSetPlayerBornDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DoSetPlayerBornDataNotify_CmdId[DoSetPlayerBornDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DoSetPlayerBornDataNotify_CmdId = exports.DoSetPlayerBornDataNotify_CmdId || (exports.DoSetPlayerBornDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerPropChangeNotify.CmdId
 */
var PlayerPropChangeNotify_CmdId;
(function (PlayerPropChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPropChangeNotify_CmdId[PlayerPropChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 139;
     */
    PlayerPropChangeNotify_CmdId[PlayerPropChangeNotify_CmdId["CMD_ID"] = 139] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPropChangeNotify_CmdId[PlayerPropChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerPropChangeNotify_CmdId[PlayerPropChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerPropChangeNotify_CmdId = exports.PlayerPropChangeNotify_CmdId || (exports.PlayerPropChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerNameReq.CmdId
 */
var SetPlayerNameReq_CmdId;
(function (SetPlayerNameReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerNameReq_CmdId[SetPlayerNameReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 153;
     */
    SetPlayerNameReq_CmdId[SetPlayerNameReq_CmdId["CMD_ID"] = 153] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerNameReq_CmdId[SetPlayerNameReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerNameReq_CmdId[SetPlayerNameReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerNameReq_CmdId[SetPlayerNameReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetPlayerNameReq_CmdId = exports.SetPlayerNameReq_CmdId || (exports.SetPlayerNameReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerNameRsp.CmdId
 */
var SetPlayerNameRsp_CmdId;
(function (SetPlayerNameRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerNameRsp_CmdId[SetPlayerNameRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 122;
     */
    SetPlayerNameRsp_CmdId[SetPlayerNameRsp_CmdId["CMD_ID"] = 122] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerNameRsp_CmdId[SetPlayerNameRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerNameRsp_CmdId[SetPlayerNameRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetPlayerNameRsp_CmdId = exports.SetPlayerNameRsp_CmdId || (exports.SetPlayerNameRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetOpenStateReq.CmdId
 */
var SetOpenStateReq_CmdId;
(function (SetOpenStateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetOpenStateReq_CmdId[SetOpenStateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 165;
     */
    SetOpenStateReq_CmdId[SetOpenStateReq_CmdId["CMD_ID"] = 165] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetOpenStateReq_CmdId[SetOpenStateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetOpenStateReq_CmdId[SetOpenStateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetOpenStateReq_CmdId[SetOpenStateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetOpenStateReq_CmdId = exports.SetOpenStateReq_CmdId || (exports.SetOpenStateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetOpenStateRsp.CmdId
 */
var SetOpenStateRsp_CmdId;
(function (SetOpenStateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetOpenStateRsp_CmdId[SetOpenStateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 104;
     */
    SetOpenStateRsp_CmdId[SetOpenStateRsp_CmdId["CMD_ID"] = 104] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetOpenStateRsp_CmdId[SetOpenStateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetOpenStateRsp_CmdId[SetOpenStateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetOpenStateRsp_CmdId = exports.SetOpenStateRsp_CmdId || (exports.SetOpenStateRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OpenStateUpdateNotify.CmdId
 */
var OpenStateUpdateNotify_CmdId;
(function (OpenStateUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpenStateUpdateNotify_CmdId[OpenStateUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 193;
     */
    OpenStateUpdateNotify_CmdId[OpenStateUpdateNotify_CmdId["CMD_ID"] = 193] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpenStateUpdateNotify_CmdId[OpenStateUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OpenStateUpdateNotify_CmdId[OpenStateUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OpenStateUpdateNotify_CmdId = exports.OpenStateUpdateNotify_CmdId || (exports.OpenStateUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OpenStateChangeNotify.CmdId
 */
var OpenStateChangeNotify_CmdId;
(function (OpenStateChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpenStateChangeNotify_CmdId[OpenStateChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 127;
     */
    OpenStateChangeNotify_CmdId[OpenStateChangeNotify_CmdId["CMD_ID"] = 127] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpenStateChangeNotify_CmdId[OpenStateChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OpenStateChangeNotify_CmdId[OpenStateChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OpenStateChangeNotify_CmdId = exports.OpenStateChangeNotify_CmdId || (exports.OpenStateChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCookReq.CmdId
 */
var PlayerCookReq_CmdId;
(function (PlayerCookReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookReq_CmdId[PlayerCookReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 194;
     */
    PlayerCookReq_CmdId[PlayerCookReq_CmdId["CMD_ID"] = 194] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookReq_CmdId[PlayerCookReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCookReq_CmdId[PlayerCookReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCookReq_CmdId[PlayerCookReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerCookReq_CmdId = exports.PlayerCookReq_CmdId || (exports.PlayerCookReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCookRsp.CmdId
 */
var PlayerCookRsp_CmdId;
(function (PlayerCookRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookRsp_CmdId[PlayerCookRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 188;
     */
    PlayerCookRsp_CmdId[PlayerCookRsp_CmdId["CMD_ID"] = 188] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookRsp_CmdId[PlayerCookRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCookRsp_CmdId[PlayerCookRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerCookRsp_CmdId = exports.PlayerCookRsp_CmdId || (exports.PlayerCookRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerRandomCookReq.CmdId
 */
var PlayerRandomCookReq_CmdId;
(function (PlayerRandomCookReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRandomCookReq_CmdId[PlayerRandomCookReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 126;
     */
    PlayerRandomCookReq_CmdId[PlayerRandomCookReq_CmdId["CMD_ID"] = 126] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRandomCookReq_CmdId[PlayerRandomCookReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerRandomCookReq_CmdId[PlayerRandomCookReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerRandomCookReq_CmdId[PlayerRandomCookReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerRandomCookReq_CmdId = exports.PlayerRandomCookReq_CmdId || (exports.PlayerRandomCookReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerRandomCookRsp.CmdId
 */
var PlayerRandomCookRsp_CmdId;
(function (PlayerRandomCookRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRandomCookRsp_CmdId[PlayerRandomCookRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 163;
     */
    PlayerRandomCookRsp_CmdId[PlayerRandomCookRsp_CmdId["CMD_ID"] = 163] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRandomCookRsp_CmdId[PlayerRandomCookRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerRandomCookRsp_CmdId[PlayerRandomCookRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerRandomCookRsp_CmdId = exports.PlayerRandomCookRsp_CmdId || (exports.PlayerRandomCookRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CookDataNotify.CmdId
 */
var CookDataNotify_CmdId;
(function (CookDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CookDataNotify_CmdId[CookDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 195;
     */
    CookDataNotify_CmdId[CookDataNotify_CmdId["CMD_ID"] = 195] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CookDataNotify_CmdId[CookDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CookDataNotify_CmdId[CookDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CookDataNotify_CmdId = exports.CookDataNotify_CmdId || (exports.CookDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CookRecipeDataNotify.CmdId
 */
var CookRecipeDataNotify_CmdId;
(function (CookRecipeDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CookRecipeDataNotify_CmdId[CookRecipeDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 106;
     */
    CookRecipeDataNotify_CmdId[CookRecipeDataNotify_CmdId["CMD_ID"] = 106] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CookRecipeDataNotify_CmdId[CookRecipeDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CookRecipeDataNotify_CmdId[CookRecipeDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CookRecipeDataNotify_CmdId = exports.CookRecipeDataNotify_CmdId || (exports.CookRecipeDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CookGradeDataNotify.CmdId
 */
var CookGradeDataNotify_CmdId;
(function (CookGradeDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CookGradeDataNotify_CmdId[CookGradeDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 134;
     */
    CookGradeDataNotify_CmdId[CookGradeDataNotify_CmdId["CMD_ID"] = 134] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CookGradeDataNotify_CmdId[CookGradeDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CookGradeDataNotify_CmdId[CookGradeDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CookGradeDataNotify_CmdId = exports.CookGradeDataNotify_CmdId || (exports.CookGradeDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCompoundMaterialReq.CmdId
 */
var PlayerCompoundMaterialReq_CmdId;
(function (PlayerCompoundMaterialReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialReq_CmdId[PlayerCompoundMaterialReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 150;
     */
    PlayerCompoundMaterialReq_CmdId[PlayerCompoundMaterialReq_CmdId["CMD_ID"] = 150] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialReq_CmdId[PlayerCompoundMaterialReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCompoundMaterialReq_CmdId[PlayerCompoundMaterialReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCompoundMaterialReq_CmdId[PlayerCompoundMaterialReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerCompoundMaterialReq_CmdId = exports.PlayerCompoundMaterialReq_CmdId || (exports.PlayerCompoundMaterialReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCompoundMaterialRsp.CmdId
 */
var PlayerCompoundMaterialRsp_CmdId;
(function (PlayerCompoundMaterialRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialRsp_CmdId[PlayerCompoundMaterialRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 143;
     */
    PlayerCompoundMaterialRsp_CmdId[PlayerCompoundMaterialRsp_CmdId["CMD_ID"] = 143] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialRsp_CmdId[PlayerCompoundMaterialRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCompoundMaterialRsp_CmdId[PlayerCompoundMaterialRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerCompoundMaterialRsp_CmdId = exports.PlayerCompoundMaterialRsp_CmdId || (exports.PlayerCompoundMaterialRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCompoundOutputReq.CmdId
 */
var TakeCompoundOutputReq_CmdId;
(function (TakeCompoundOutputReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCompoundOutputReq_CmdId[TakeCompoundOutputReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 174;
     */
    TakeCompoundOutputReq_CmdId[TakeCompoundOutputReq_CmdId["CMD_ID"] = 174] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCompoundOutputReq_CmdId[TakeCompoundOutputReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCompoundOutputReq_CmdId[TakeCompoundOutputReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCompoundOutputReq_CmdId[TakeCompoundOutputReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeCompoundOutputReq_CmdId = exports.TakeCompoundOutputReq_CmdId || (exports.TakeCompoundOutputReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCompoundOutputRsp.CmdId
 */
var TakeCompoundOutputRsp_CmdId;
(function (TakeCompoundOutputRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCompoundOutputRsp_CmdId[TakeCompoundOutputRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 176;
     */
    TakeCompoundOutputRsp_CmdId[TakeCompoundOutputRsp_CmdId["CMD_ID"] = 176] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCompoundOutputRsp_CmdId[TakeCompoundOutputRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCompoundOutputRsp_CmdId[TakeCompoundOutputRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeCompoundOutputRsp_CmdId = exports.TakeCompoundOutputRsp_CmdId || (exports.TakeCompoundOutputRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CompoundDataNotify.CmdId
 */
var CompoundDataNotify_CmdId;
(function (CompoundDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CompoundDataNotify_CmdId[CompoundDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 146;
     */
    CompoundDataNotify_CmdId[CompoundDataNotify_CmdId["CMD_ID"] = 146] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CompoundDataNotify_CmdId[CompoundDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CompoundDataNotify_CmdId[CompoundDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CompoundDataNotify_CmdId = exports.CompoundDataNotify_CmdId || (exports.CompoundDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCompoundDataReq.CmdId
 */
var GetCompoundDataReq_CmdId;
(function (GetCompoundDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCompoundDataReq_CmdId[GetCompoundDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 141;
     */
    GetCompoundDataReq_CmdId[GetCompoundDataReq_CmdId["CMD_ID"] = 141] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCompoundDataReq_CmdId[GetCompoundDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCompoundDataReq_CmdId[GetCompoundDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCompoundDataReq_CmdId[GetCompoundDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetCompoundDataReq_CmdId = exports.GetCompoundDataReq_CmdId || (exports.GetCompoundDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCompoundDataRsp.CmdId
 */
var GetCompoundDataRsp_CmdId;
(function (GetCompoundDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCompoundDataRsp_CmdId[GetCompoundDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 149;
     */
    GetCompoundDataRsp_CmdId[GetCompoundDataRsp_CmdId["CMD_ID"] = 149] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCompoundDataRsp_CmdId[GetCompoundDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCompoundDataRsp_CmdId[GetCompoundDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetCompoundDataRsp_CmdId = exports.GetCompoundDataRsp_CmdId || (exports.GetCompoundDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerTimeNotify.CmdId
 */
var PlayerTimeNotify_CmdId;
(function (PlayerTimeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerTimeNotify_CmdId[PlayerTimeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 191;
     */
    PlayerTimeNotify_CmdId[PlayerTimeNotify_CmdId["CMD_ID"] = 191] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerTimeNotify_CmdId[PlayerTimeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerTimeNotify_CmdId[PlayerTimeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerTimeNotify_CmdId = exports.PlayerTimeNotify_CmdId || (exports.PlayerTimeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSetPauseReq.CmdId
 */
var PlayerSetPauseReq_CmdId;
(function (PlayerSetPauseReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetPauseReq_CmdId[PlayerSetPauseReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 124;
     */
    PlayerSetPauseReq_CmdId[PlayerSetPauseReq_CmdId["CMD_ID"] = 124] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetPauseReq_CmdId[PlayerSetPauseReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetPauseReq_CmdId[PlayerSetPauseReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetPauseReq_CmdId[PlayerSetPauseReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerSetPauseReq_CmdId = exports.PlayerSetPauseReq_CmdId || (exports.PlayerSetPauseReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSetPauseRsp.CmdId
 */
var PlayerSetPauseRsp_CmdId;
(function (PlayerSetPauseRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetPauseRsp_CmdId[PlayerSetPauseRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 156;
     */
    PlayerSetPauseRsp_CmdId[PlayerSetPauseRsp_CmdId["CMD_ID"] = 156] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetPauseRsp_CmdId[PlayerSetPauseRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetPauseRsp_CmdId[PlayerSetPauseRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerSetPauseRsp_CmdId = exports.PlayerSetPauseRsp_CmdId || (exports.PlayerSetPauseRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSetLanguageReq.CmdId
 */
var PlayerSetLanguageReq_CmdId;
(function (PlayerSetLanguageReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetLanguageReq_CmdId[PlayerSetLanguageReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 142;
     */
    PlayerSetLanguageReq_CmdId[PlayerSetLanguageReq_CmdId["CMD_ID"] = 142] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetLanguageReq_CmdId[PlayerSetLanguageReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetLanguageReq_CmdId[PlayerSetLanguageReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetLanguageReq_CmdId[PlayerSetLanguageReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerSetLanguageReq_CmdId = exports.PlayerSetLanguageReq_CmdId || (exports.PlayerSetLanguageReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSetLanguageRsp.CmdId
 */
var PlayerSetLanguageRsp_CmdId;
(function (PlayerSetLanguageRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetLanguageRsp_CmdId[PlayerSetLanguageRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 130;
     */
    PlayerSetLanguageRsp_CmdId[PlayerSetLanguageRsp_CmdId["CMD_ID"] = 130] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSetLanguageRsp_CmdId[PlayerSetLanguageRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSetLanguageRsp_CmdId[PlayerSetLanguageRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerSetLanguageRsp_CmdId = exports.PlayerSetLanguageRsp_CmdId || (exports.PlayerSetLanguageRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DataResVersionNotify.DataResVersionOpType
 */
var DataResVersionNotify_DataResVersionOpType;
(function (DataResVersionNotify_DataResVersionOpType) {
    /**
     * @generated from protobuf enum value: OP_TYPE_NONE = 0;
     */
    DataResVersionNotify_DataResVersionOpType[DataResVersionNotify_DataResVersionOpType["OP_TYPE_NONE"] = 0] = "OP_TYPE_NONE";
    /**
     * @generated from protobuf enum value: OP_TYPE_RELOGIN = 1;
     */
    DataResVersionNotify_DataResVersionOpType[DataResVersionNotify_DataResVersionOpType["OP_TYPE_RELOGIN"] = 1] = "OP_TYPE_RELOGIN";
    /**
     * @generated from protobuf enum value: OP_TYPE_MP_RELOGIN = 2;
     */
    DataResVersionNotify_DataResVersionOpType[DataResVersionNotify_DataResVersionOpType["OP_TYPE_MP_RELOGIN"] = 2] = "OP_TYPE_MP_RELOGIN";
})(DataResVersionNotify_DataResVersionOpType = exports.DataResVersionNotify_DataResVersionOpType || (exports.DataResVersionNotify_DataResVersionOpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.DataResVersionNotify.CmdId
 */
var DataResVersionNotify_CmdId;
(function (DataResVersionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DataResVersionNotify_CmdId[DataResVersionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 167;
     */
    DataResVersionNotify_CmdId[DataResVersionNotify_CmdId["CMD_ID"] = 167] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DataResVersionNotify_CmdId[DataResVersionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DataResVersionNotify_CmdId[DataResVersionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DataResVersionNotify_CmdId = exports.DataResVersionNotify_CmdId || (exports.DataResVersionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DailyTaskDataNotify.CmdId
 */
var DailyTaskDataNotify_CmdId;
(function (DailyTaskDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskDataNotify_CmdId[DailyTaskDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 158;
     */
    DailyTaskDataNotify_CmdId[DailyTaskDataNotify_CmdId["CMD_ID"] = 158] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskDataNotify_CmdId[DailyTaskDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DailyTaskDataNotify_CmdId[DailyTaskDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DailyTaskDataNotify_CmdId = exports.DailyTaskDataNotify_CmdId || (exports.DailyTaskDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DailyTaskProgressNotify.CmdId
 */
var DailyTaskProgressNotify_CmdId;
(function (DailyTaskProgressNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskProgressNotify_CmdId[DailyTaskProgressNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 170;
     */
    DailyTaskProgressNotify_CmdId[DailyTaskProgressNotify_CmdId["CMD_ID"] = 170] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskProgressNotify_CmdId[DailyTaskProgressNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DailyTaskProgressNotify_CmdId[DailyTaskProgressNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DailyTaskProgressNotify_CmdId = exports.DailyTaskProgressNotify_CmdId || (exports.DailyTaskProgressNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DailyTaskScoreRewardNotify.CmdId
 */
var DailyTaskScoreRewardNotify_CmdId;
(function (DailyTaskScoreRewardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskScoreRewardNotify_CmdId[DailyTaskScoreRewardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 117;
     */
    DailyTaskScoreRewardNotify_CmdId[DailyTaskScoreRewardNotify_CmdId["CMD_ID"] = 117] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskScoreRewardNotify_CmdId[DailyTaskScoreRewardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DailyTaskScoreRewardNotify_CmdId[DailyTaskScoreRewardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DailyTaskScoreRewardNotify_CmdId = exports.DailyTaskScoreRewardNotify_CmdId || (exports.DailyTaskScoreRewardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldOwnerDailyTaskNotify.CmdId
 */
var WorldOwnerDailyTaskNotify_CmdId;
(function (WorldOwnerDailyTaskNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldOwnerDailyTaskNotify_CmdId[WorldOwnerDailyTaskNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 102;
     */
    WorldOwnerDailyTaskNotify_CmdId[WorldOwnerDailyTaskNotify_CmdId["CMD_ID"] = 102] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldOwnerDailyTaskNotify_CmdId[WorldOwnerDailyTaskNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldOwnerDailyTaskNotify_CmdId[WorldOwnerDailyTaskNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldOwnerDailyTaskNotify_CmdId[WorldOwnerDailyTaskNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WorldOwnerDailyTaskNotify_CmdId = exports.WorldOwnerDailyTaskNotify_CmdId || (exports.WorldOwnerDailyTaskNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddRandTaskInfoNotify.CmdId
 */
var AddRandTaskInfoNotify_CmdId;
(function (AddRandTaskInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddRandTaskInfoNotify_CmdId[AddRandTaskInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 119;
     */
    AddRandTaskInfoNotify_CmdId[AddRandTaskInfoNotify_CmdId["CMD_ID"] = 119] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddRandTaskInfoNotify_CmdId[AddRandTaskInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddRandTaskInfoNotify_CmdId[AddRandTaskInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AddRandTaskInfoNotify_CmdId = exports.AddRandTaskInfoNotify_CmdId || (exports.AddRandTaskInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RemoveRandTaskInfoNotify.FinishReason
 */
var RemoveRandTaskInfoNotify_FinishReason;
(function (RemoveRandTaskInfoNotify_FinishReason) {
    /**
     * @generated from protobuf enum value: DEFAULT = 0;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["DEFAULT"] = 0] = "DEFAULT";
    /**
     * @generated from protobuf enum value: CLEAR = 1;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["CLEAR"] = 1] = "CLEAR";
    /**
     * @generated from protobuf enum value: DISTANCE = 2;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["DISTANCE"] = 2] = "DISTANCE";
    /**
     * @generated from protobuf enum value: FINISH = 3;
     */
    RemoveRandTaskInfoNotify_FinishReason[RemoveRandTaskInfoNotify_FinishReason["FINISH"] = 3] = "FINISH";
})(RemoveRandTaskInfoNotify_FinishReason = exports.RemoveRandTaskInfoNotify_FinishReason || (exports.RemoveRandTaskInfoNotify_FinishReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.RemoveRandTaskInfoNotify.CmdId
 */
var RemoveRandTaskInfoNotify_CmdId;
(function (RemoveRandTaskInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveRandTaskInfoNotify_CmdId[RemoveRandTaskInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 161;
     */
    RemoveRandTaskInfoNotify_CmdId[RemoveRandTaskInfoNotify_CmdId["CMD_ID"] = 161] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveRandTaskInfoNotify_CmdId[RemoveRandTaskInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemoveRandTaskInfoNotify_CmdId[RemoveRandTaskInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RemoveRandTaskInfoNotify_CmdId = exports.RemoveRandTaskInfoNotify_CmdId || (exports.RemoveRandTaskInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakePlayerLevelRewardReq.CmdId
 */
var TakePlayerLevelRewardReq_CmdId;
(function (TakePlayerLevelRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakePlayerLevelRewardReq_CmdId[TakePlayerLevelRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 129;
     */
    TakePlayerLevelRewardReq_CmdId[TakePlayerLevelRewardReq_CmdId["CMD_ID"] = 129] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakePlayerLevelRewardReq_CmdId[TakePlayerLevelRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakePlayerLevelRewardReq_CmdId[TakePlayerLevelRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakePlayerLevelRewardReq_CmdId[TakePlayerLevelRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakePlayerLevelRewardReq_CmdId = exports.TakePlayerLevelRewardReq_CmdId || (exports.TakePlayerLevelRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakePlayerLevelRewardRsp.CmdId
 */
var TakePlayerLevelRewardRsp_CmdId;
(function (TakePlayerLevelRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakePlayerLevelRewardRsp_CmdId[TakePlayerLevelRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 157;
     */
    TakePlayerLevelRewardRsp_CmdId[TakePlayerLevelRewardRsp_CmdId["CMD_ID"] = 157] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakePlayerLevelRewardRsp_CmdId[TakePlayerLevelRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakePlayerLevelRewardRsp_CmdId[TakePlayerLevelRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakePlayerLevelRewardRsp_CmdId = exports.TakePlayerLevelRewardRsp_CmdId || (exports.TakePlayerLevelRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLevelRewardUpdateNotify.CmdId
 */
var PlayerLevelRewardUpdateNotify_CmdId;
(function (PlayerLevelRewardUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLevelRewardUpdateNotify_CmdId[PlayerLevelRewardUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 200;
     */
    PlayerLevelRewardUpdateNotify_CmdId[PlayerLevelRewardUpdateNotify_CmdId["CMD_ID"] = 200] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLevelRewardUpdateNotify_CmdId[PlayerLevelRewardUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLevelRewardUpdateNotify_CmdId[PlayerLevelRewardUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerLevelRewardUpdateNotify_CmdId = exports.PlayerLevelRewardUpdateNotify_CmdId || (exports.PlayerLevelRewardUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GivingRecordNotify.CmdId
 */
var GivingRecordNotify_CmdId;
(function (GivingRecordNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GivingRecordNotify_CmdId[GivingRecordNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 116;
     */
    GivingRecordNotify_CmdId[GivingRecordNotify_CmdId["CMD_ID"] = 116] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GivingRecordNotify_CmdId[GivingRecordNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GivingRecordNotify_CmdId[GivingRecordNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GivingRecordNotify_CmdId = exports.GivingRecordNotify_CmdId || (exports.GivingRecordNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GivingRecordChangeNotify.CmdId
 */
var GivingRecordChangeNotify_CmdId;
(function (GivingRecordChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GivingRecordChangeNotify_CmdId[GivingRecordChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 187;
     */
    GivingRecordChangeNotify_CmdId[GivingRecordChangeNotify_CmdId["CMD_ID"] = 187] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GivingRecordChangeNotify_CmdId[GivingRecordChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GivingRecordChangeNotify_CmdId[GivingRecordChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GivingRecordChangeNotify_CmdId = exports.GivingRecordChangeNotify_CmdId || (exports.GivingRecordChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ItemGivingReq.ItemGivingType
 */
var ItemGivingReq_ItemGivingType;
(function (ItemGivingReq_ItemGivingType) {
    /**
     * @generated from protobuf enum value: QUEST = 0;
     */
    ItemGivingReq_ItemGivingType[ItemGivingReq_ItemGivingType["QUEST"] = 0] = "QUEST";
    /**
     * @generated from protobuf enum value: GADGET = 1;
     */
    ItemGivingReq_ItemGivingType[ItemGivingReq_ItemGivingType["GADGET"] = 1] = "GADGET";
})(ItemGivingReq_ItemGivingType = exports.ItemGivingReq_ItemGivingType || (exports.ItemGivingReq_ItemGivingType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ItemGivingReq.CmdId
 */
var ItemGivingReq_CmdId;
(function (ItemGivingReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemGivingReq_CmdId[ItemGivingReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 140;
     */
    ItemGivingReq_CmdId[ItemGivingReq_CmdId["CMD_ID"] = 140] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemGivingReq_CmdId[ItemGivingReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ItemGivingReq_CmdId[ItemGivingReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ItemGivingReq_CmdId[ItemGivingReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ItemGivingReq_CmdId = exports.ItemGivingReq_CmdId || (exports.ItemGivingReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ItemGivingRsp.CmdId
 */
var ItemGivingRsp_CmdId;
(function (ItemGivingRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemGivingRsp_CmdId[ItemGivingRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 118;
     */
    ItemGivingRsp_CmdId[ItemGivingRsp_CmdId["CMD_ID"] = 118] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ItemGivingRsp_CmdId[ItemGivingRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ItemGivingRsp_CmdId[ItemGivingRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ItemGivingRsp_CmdId = exports.ItemGivingRsp_CmdId || (exports.ItemGivingRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCookArgsReq.CmdId
 */
var PlayerCookArgsReq_CmdId;
(function (PlayerCookArgsReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookArgsReq_CmdId[PlayerCookArgsReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 166;
     */
    PlayerCookArgsReq_CmdId[PlayerCookArgsReq_CmdId["CMD_ID"] = 166] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookArgsReq_CmdId[PlayerCookArgsReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCookArgsReq_CmdId[PlayerCookArgsReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCookArgsReq_CmdId[PlayerCookArgsReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerCookArgsReq_CmdId = exports.PlayerCookArgsReq_CmdId || (exports.PlayerCookArgsReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCookArgsRsp.CmdId
 */
var PlayerCookArgsRsp_CmdId;
(function (PlayerCookArgsRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookArgsRsp_CmdId[PlayerCookArgsRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 168;
     */
    PlayerCookArgsRsp_CmdId[PlayerCookArgsRsp_CmdId["CMD_ID"] = 168] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCookArgsRsp_CmdId[PlayerCookArgsRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCookArgsRsp_CmdId[PlayerCookArgsRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerCookArgsRsp_CmdId = exports.PlayerCookArgsRsp_CmdId || (exports.PlayerCookArgsRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerLuaShellNotify.CmdId
 */
var PlayerLuaShellNotify_CmdId;
(function (PlayerLuaShellNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLuaShellNotify_CmdId[PlayerLuaShellNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 133;
     */
    PlayerLuaShellNotify_CmdId[PlayerLuaShellNotify_CmdId["CMD_ID"] = 133] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLuaShellNotify_CmdId[PlayerLuaShellNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLuaShellNotify_CmdId[PlayerLuaShellNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerLuaShellNotify_CmdId = exports.PlayerLuaShellNotify_CmdId || (exports.PlayerLuaShellNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerDisconnectClientNotify.CmdId
 */
var ServerDisconnectClientNotify_CmdId;
(function (ServerDisconnectClientNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerDisconnectClientNotify_CmdId[ServerDisconnectClientNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 184;
     */
    ServerDisconnectClientNotify_CmdId[ServerDisconnectClientNotify_CmdId["CMD_ID"] = 184] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerDisconnectClientNotify_CmdId[ServerDisconnectClientNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerDisconnectClientNotify_CmdId[ServerDisconnectClientNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerDisconnectClientNotify_CmdId = exports.ServerDisconnectClientNotify_CmdId || (exports.ServerDisconnectClientNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AntiAddictNotify.CmdId
 */
var AntiAddictNotify_CmdId;
(function (AntiAddictNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AntiAddictNotify_CmdId[AntiAddictNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 180;
     */
    AntiAddictNotify_CmdId[AntiAddictNotify_CmdId["CMD_ID"] = 180] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AntiAddictNotify_CmdId[AntiAddictNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AntiAddictNotify_CmdId[AntiAddictNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AntiAddictNotify_CmdId = exports.AntiAddictNotify_CmdId || (exports.AntiAddictNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerForceExitReq.CmdId
 */
var PlayerForceExitReq_CmdId;
(function (PlayerForceExitReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerForceExitReq_CmdId[PlayerForceExitReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 189;
     */
    PlayerForceExitReq_CmdId[PlayerForceExitReq_CmdId["CMD_ID"] = 189] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerForceExitReq_CmdId[PlayerForceExitReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerForceExitReq_CmdId[PlayerForceExitReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerForceExitReq_CmdId[PlayerForceExitReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerForceExitReq_CmdId = exports.PlayerForceExitReq_CmdId || (exports.PlayerForceExitReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerForceExitRsp.CmdId
 */
var PlayerForceExitRsp_CmdId;
(function (PlayerForceExitRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerForceExitRsp_CmdId[PlayerForceExitRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 159;
     */
    PlayerForceExitRsp_CmdId[PlayerForceExitRsp_CmdId["CMD_ID"] = 159] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerForceExitRsp_CmdId[PlayerForceExitRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerForceExitRsp_CmdId[PlayerForceExitRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerForceExitRsp_CmdId = exports.PlayerForceExitRsp_CmdId || (exports.PlayerForceExitRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerInjectFixNotify.CmdId
 */
var PlayerInjectFixNotify_CmdId;
(function (PlayerInjectFixNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInjectFixNotify_CmdId[PlayerInjectFixNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 132;
     */
    PlayerInjectFixNotify_CmdId[PlayerInjectFixNotify_CmdId["CMD_ID"] = 132] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInjectFixNotify_CmdId[PlayerInjectFixNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerInjectFixNotify_CmdId[PlayerInjectFixNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerInjectFixNotify_CmdId = exports.PlayerInjectFixNotify_CmdId || (exports.PlayerInjectFixNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TaskVarNotify.CmdId
 */
var TaskVarNotify_CmdId;
(function (TaskVarNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TaskVarNotify_CmdId[TaskVarNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 160;
     */
    TaskVarNotify_CmdId[TaskVarNotify_CmdId["CMD_ID"] = 160] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TaskVarNotify_CmdId[TaskVarNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TaskVarNotify_CmdId[TaskVarNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TaskVarNotify_CmdId = exports.TaskVarNotify_CmdId || (exports.TaskVarNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientLockGameTimeNotify.CmdId
 */
var ClientLockGameTimeNotify_CmdId;
(function (ClientLockGameTimeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientLockGameTimeNotify_CmdId[ClientLockGameTimeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 114;
     */
    ClientLockGameTimeNotify_CmdId[ClientLockGameTimeNotify_CmdId["CMD_ID"] = 114] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientLockGameTimeNotify_CmdId[ClientLockGameTimeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientLockGameTimeNotify_CmdId[ClientLockGameTimeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientLockGameTimeNotify_CmdId[ClientLockGameTimeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientLockGameTimeNotify_CmdId = exports.ClientLockGameTimeNotify_CmdId || (exports.ClientLockGameTimeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetNextResourceInfoReq.CmdId
 */
var GetNextResourceInfoReq_CmdId;
(function (GetNextResourceInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetNextResourceInfoReq_CmdId[GetNextResourceInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 192;
     */
    GetNextResourceInfoReq_CmdId[GetNextResourceInfoReq_CmdId["CMD_ID"] = 192] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetNextResourceInfoReq_CmdId[GetNextResourceInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetNextResourceInfoReq_CmdId[GetNextResourceInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetNextResourceInfoReq_CmdId[GetNextResourceInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetNextResourceInfoReq_CmdId = exports.GetNextResourceInfoReq_CmdId || (exports.GetNextResourceInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetNextResourceInfoRsp.CmdId
 */
var GetNextResourceInfoRsp_CmdId;
(function (GetNextResourceInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetNextResourceInfoRsp_CmdId[GetNextResourceInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 120;
     */
    GetNextResourceInfoRsp_CmdId[GetNextResourceInfoRsp_CmdId["CMD_ID"] = 120] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetNextResourceInfoRsp_CmdId[GetNextResourceInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetNextResourceInfoRsp_CmdId[GetNextResourceInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetNextResourceInfoRsp_CmdId = exports.GetNextResourceInfoRsp_CmdId || (exports.GetNextResourceInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AdjustWorldLevelReq.CmdId
 */
var AdjustWorldLevelReq_CmdId;
(function (AdjustWorldLevelReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AdjustWorldLevelReq_CmdId[AdjustWorldLevelReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 164;
     */
    AdjustWorldLevelReq_CmdId[AdjustWorldLevelReq_CmdId["CMD_ID"] = 164] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AdjustWorldLevelReq_CmdId[AdjustWorldLevelReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AdjustWorldLevelReq_CmdId[AdjustWorldLevelReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AdjustWorldLevelReq_CmdId[AdjustWorldLevelReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AdjustWorldLevelReq_CmdId = exports.AdjustWorldLevelReq_CmdId || (exports.AdjustWorldLevelReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AdjustWorldLevelRsp.CmdId
 */
var AdjustWorldLevelRsp_CmdId;
(function (AdjustWorldLevelRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AdjustWorldLevelRsp_CmdId[AdjustWorldLevelRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 138;
     */
    AdjustWorldLevelRsp_CmdId[AdjustWorldLevelRsp_CmdId["CMD_ID"] = 138] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AdjustWorldLevelRsp_CmdId[AdjustWorldLevelRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AdjustWorldLevelRsp_CmdId[AdjustWorldLevelRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AdjustWorldLevelRsp_CmdId = exports.AdjustWorldLevelRsp_CmdId || (exports.AdjustWorldLevelRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DailyTaskFilterCityReq.CmdId
 */
var DailyTaskFilterCityReq_CmdId;
(function (DailyTaskFilterCityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskFilterCityReq_CmdId[DailyTaskFilterCityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 111;
     */
    DailyTaskFilterCityReq_CmdId[DailyTaskFilterCityReq_CmdId["CMD_ID"] = 111] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskFilterCityReq_CmdId[DailyTaskFilterCityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DailyTaskFilterCityReq_CmdId[DailyTaskFilterCityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DailyTaskFilterCityReq_CmdId[DailyTaskFilterCityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DailyTaskFilterCityReq_CmdId = exports.DailyTaskFilterCityReq_CmdId || (exports.DailyTaskFilterCityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DailyTaskFilterCityRsp.CmdId
 */
var DailyTaskFilterCityRsp_CmdId;
(function (DailyTaskFilterCityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskFilterCityRsp_CmdId[DailyTaskFilterCityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 144;
     */
    DailyTaskFilterCityRsp_CmdId[DailyTaskFilterCityRsp_CmdId["CMD_ID"] = 144] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskFilterCityRsp_CmdId[DailyTaskFilterCityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DailyTaskFilterCityRsp_CmdId[DailyTaskFilterCityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DailyTaskFilterCityRsp_CmdId = exports.DailyTaskFilterCityRsp_CmdId || (exports.DailyTaskFilterCityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DailyTaskUnlockedCitiesNotify.CmdId
 */
var DailyTaskUnlockedCitiesNotify_CmdId;
(function (DailyTaskUnlockedCitiesNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskUnlockedCitiesNotify_CmdId[DailyTaskUnlockedCitiesNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 186;
     */
    DailyTaskUnlockedCitiesNotify_CmdId[DailyTaskUnlockedCitiesNotify_CmdId["CMD_ID"] = 186] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DailyTaskUnlockedCitiesNotify_CmdId[DailyTaskUnlockedCitiesNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DailyTaskUnlockedCitiesNotify_CmdId[DailyTaskUnlockedCitiesNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DailyTaskUnlockedCitiesNotify_CmdId = exports.DailyTaskUnlockedCitiesNotify_CmdId || (exports.DailyTaskUnlockedCitiesNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExclusiveRuleNotify.CmdId
 */
var ExclusiveRuleNotify_CmdId;
(function (ExclusiveRuleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExclusiveRuleNotify_CmdId[ExclusiveRuleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 101;
     */
    ExclusiveRuleNotify_CmdId[ExclusiveRuleNotify_CmdId["CMD_ID"] = 101] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExclusiveRuleNotify_CmdId[ExclusiveRuleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExclusiveRuleNotify_CmdId[ExclusiveRuleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ExclusiveRuleNotify_CmdId = exports.ExclusiveRuleNotify_CmdId || (exports.ExclusiveRuleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CompoundUnlockNotify.CmdId
 */
var CompoundUnlockNotify_CmdId;
(function (CompoundUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CompoundUnlockNotify_CmdId[CompoundUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 128;
     */
    CompoundUnlockNotify_CmdId[CompoundUnlockNotify_CmdId["CMD_ID"] = 128] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CompoundUnlockNotify_CmdId[CompoundUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CompoundUnlockNotify_CmdId[CompoundUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CompoundUnlockNotify_CmdId = exports.CompoundUnlockNotify_CmdId || (exports.CompoundUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetGameplayRecommendationReq.CmdId
 */
var GetGameplayRecommendationReq_CmdId;
(function (GetGameplayRecommendationReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetGameplayRecommendationReq_CmdId[GetGameplayRecommendationReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 151;
     */
    GetGameplayRecommendationReq_CmdId[GetGameplayRecommendationReq_CmdId["CMD_ID"] = 151] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetGameplayRecommendationReq_CmdId[GetGameplayRecommendationReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetGameplayRecommendationReq_CmdId[GetGameplayRecommendationReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetGameplayRecommendationReq_CmdId[GetGameplayRecommendationReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetGameplayRecommendationReq_CmdId = exports.GetGameplayRecommendationReq_CmdId || (exports.GetGameplayRecommendationReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetGameplayRecommendationRsp.CmdId
 */
var GetGameplayRecommendationRsp_CmdId;
(function (GetGameplayRecommendationRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetGameplayRecommendationRsp_CmdId[GetGameplayRecommendationRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 123;
     */
    GetGameplayRecommendationRsp_CmdId[GetGameplayRecommendationRsp_CmdId["CMD_ID"] = 123] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetGameplayRecommendationRsp_CmdId[GetGameplayRecommendationRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetGameplayRecommendationRsp_CmdId[GetGameplayRecommendationRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetGameplayRecommendationRsp_CmdId = exports.GetGameplayRecommendationRsp_CmdId || (exports.GetGameplayRecommendationRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeBackGivingItemReq.CmdId
 */
var TakeBackGivingItemReq_CmdId;
(function (TakeBackGivingItemReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBackGivingItemReq_CmdId[TakeBackGivingItemReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 171;
     */
    TakeBackGivingItemReq_CmdId[TakeBackGivingItemReq_CmdId["CMD_ID"] = 171] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBackGivingItemReq_CmdId[TakeBackGivingItemReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBackGivingItemReq_CmdId[TakeBackGivingItemReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBackGivingItemReq_CmdId[TakeBackGivingItemReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeBackGivingItemReq_CmdId = exports.TakeBackGivingItemReq_CmdId || (exports.TakeBackGivingItemReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeBackGivingItemRsp.CmdId
 */
var TakeBackGivingItemRsp_CmdId;
(function (TakeBackGivingItemRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBackGivingItemRsp_CmdId[TakeBackGivingItemRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 145;
     */
    TakeBackGivingItemRsp_CmdId[TakeBackGivingItemRsp_CmdId["CMD_ID"] = 145] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBackGivingItemRsp_CmdId[TakeBackGivingItemRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBackGivingItemRsp_CmdId[TakeBackGivingItemRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeBackGivingItemRsp_CmdId = exports.TakeBackGivingItemRsp_CmdId || (exports.TakeBackGivingItemRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerNicknameAuditDataNotify.CmdId
 */
var PlayerNicknameAuditDataNotify_CmdId;
(function (PlayerNicknameAuditDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerNicknameAuditDataNotify_CmdId[PlayerNicknameAuditDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 108;
     */
    PlayerNicknameAuditDataNotify_CmdId[PlayerNicknameAuditDataNotify_CmdId["CMD_ID"] = 108] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerNicknameAuditDataNotify_CmdId[PlayerNicknameAuditDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerNicknameAuditDataNotify_CmdId[PlayerNicknameAuditDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerNicknameAuditDataNotify_CmdId = exports.PlayerNicknameAuditDataNotify_CmdId || (exports.PlayerNicknameAuditDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerNicknameNotify.CmdId
 */
var PlayerNicknameNotify_CmdId;
(function (PlayerNicknameNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerNicknameNotify_CmdId[PlayerNicknameNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 109;
     */
    PlayerNicknameNotify_CmdId[PlayerNicknameNotify_CmdId["CMD_ID"] = 109] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerNicknameNotify_CmdId[PlayerNicknameNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerNicknameNotify_CmdId[PlayerNicknameNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerNicknameNotify_CmdId = exports.PlayerNicknameNotify_CmdId || (exports.PlayerNicknameNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.NicknameAuditConfigNotify.CmdId
 */
var NicknameAuditConfigNotify_CmdId;
(function (NicknameAuditConfigNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NicknameAuditConfigNotify_CmdId[NicknameAuditConfigNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 152;
     */
    NicknameAuditConfigNotify_CmdId[NicknameAuditConfigNotify_CmdId["CMD_ID"] = 152] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NicknameAuditConfigNotify_CmdId[NicknameAuditConfigNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NicknameAuditConfigNotify_CmdId[NicknameAuditConfigNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(NicknameAuditConfigNotify_CmdId = exports.NicknameAuditConfigNotify_CmdId || (exports.NicknameAuditConfigNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReadNicknameAuditReq.CmdId
 */
var ReadNicknameAuditReq_CmdId;
(function (ReadNicknameAuditReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadNicknameAuditReq_CmdId[ReadNicknameAuditReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 177;
     */
    ReadNicknameAuditReq_CmdId[ReadNicknameAuditReq_CmdId["CMD_ID"] = 177] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadNicknameAuditReq_CmdId[ReadNicknameAuditReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadNicknameAuditReq_CmdId[ReadNicknameAuditReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadNicknameAuditReq_CmdId[ReadNicknameAuditReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReadNicknameAuditReq_CmdId = exports.ReadNicknameAuditReq_CmdId || (exports.ReadNicknameAuditReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReadNicknameAuditRsp.CmdId
 */
var ReadNicknameAuditRsp_CmdId;
(function (ReadNicknameAuditRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadNicknameAuditRsp_CmdId[ReadNicknameAuditRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 137;
     */
    ReadNicknameAuditRsp_CmdId[ReadNicknameAuditRsp_CmdId["CMD_ID"] = 137] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadNicknameAuditRsp_CmdId[ReadNicknameAuditRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadNicknameAuditRsp_CmdId[ReadNicknameAuditRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReadNicknameAuditRsp_CmdId = exports.ReadNicknameAuditRsp_CmdId || (exports.ReadNicknameAuditRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCompoundMaterialBoostReq.CmdId
 */
var PlayerCompoundMaterialBoostReq_CmdId;
(function (PlayerCompoundMaterialBoostReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialBoostReq_CmdId[PlayerCompoundMaterialBoostReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 185;
     */
    PlayerCompoundMaterialBoostReq_CmdId[PlayerCompoundMaterialBoostReq_CmdId["CMD_ID"] = 185] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialBoostReq_CmdId[PlayerCompoundMaterialBoostReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCompoundMaterialBoostReq_CmdId[PlayerCompoundMaterialBoostReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCompoundMaterialBoostReq_CmdId[PlayerCompoundMaterialBoostReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerCompoundMaterialBoostReq_CmdId = exports.PlayerCompoundMaterialBoostReq_CmdId || (exports.PlayerCompoundMaterialBoostReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerCompoundMaterialBoostRsp.CmdId
 */
var PlayerCompoundMaterialBoostRsp_CmdId;
(function (PlayerCompoundMaterialBoostRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialBoostRsp_CmdId[PlayerCompoundMaterialBoostRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 125;
     */
    PlayerCompoundMaterialBoostRsp_CmdId[PlayerCompoundMaterialBoostRsp_CmdId["CMD_ID"] = 125] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerCompoundMaterialBoostRsp_CmdId[PlayerCompoundMaterialBoostRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerCompoundMaterialBoostRsp_CmdId[PlayerCompoundMaterialBoostRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerCompoundMaterialBoostRsp_CmdId = exports.PlayerCompoundMaterialBoostRsp_CmdId || (exports.PlayerCompoundMaterialBoostRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CompoundBoostTakeStatusType
 */
var CompoundBoostTakeStatusType;
(function (CompoundBoostTakeStatusType) {
    /**
     * @generated from protobuf enum value: COMPOUND_BOOST_TAKE_STATUS_NONE = 0;
     */
    CompoundBoostTakeStatusType[CompoundBoostTakeStatusType["COMPOUND_BOOST_TAKE_STATUS_NONE"] = 0] = "COMPOUND_BOOST_TAKE_STATUS_NONE";
    /**
     * @generated from protobuf enum value: COMPOUND_BOOST_TAKE_STATUS_BOOST_ONLY = 1;
     */
    CompoundBoostTakeStatusType[CompoundBoostTakeStatusType["COMPOUND_BOOST_TAKE_STATUS_BOOST_ONLY"] = 1] = "COMPOUND_BOOST_TAKE_STATUS_BOOST_ONLY";
    /**
     * @generated from protobuf enum value: COMPOUND_BOOST_TAKE_STATUS_BOOST_AND_TAKE = 2;
     */
    CompoundBoostTakeStatusType[CompoundBoostTakeStatusType["COMPOUND_BOOST_TAKE_STATUS_BOOST_AND_TAKE"] = 2] = "COMPOUND_BOOST_TAKE_STATUS_BOOST_AND_TAKE";
    /**
     * @generated from protobuf enum value: COMPOUND_BOOST_TAKE_STATUS_BAG_FULL = 3;
     */
    CompoundBoostTakeStatusType[CompoundBoostTakeStatusType["COMPOUND_BOOST_TAKE_STATUS_BAG_FULL"] = 3] = "COMPOUND_BOOST_TAKE_STATUS_BAG_FULL";
})(CompoundBoostTakeStatusType = exports.CompoundBoostTakeStatusType || (exports.CompoundBoostTakeStatusType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerTokenReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerTokenReq", [
            { no: 10, name: "account_token", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "account_uid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "psn_region", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "account_ext", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "country_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 760, name: "client_rand_key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "is_guest", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1718, name: "birthday", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "sub_channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "platform_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "client_ip_str", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "psn_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "account_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 995, name: "minors_reg_min_age", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cloud_client_ip", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1787, name: "key_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional string account_token */ 10:
                    message.accountToken = reader.string();
                    break;
                case /* optional string account_uid */ 11:
                    message.accountUid = reader.string();
                    break;
                case /* optional string psn_region */ 4:
                    message.psnRegion = reader.string();
                    break;
                case /* optional string online_id */ 7:
                    message.onlineId = reader.string();
                    break;
                case /* optional uint32 channel_id */ 15:
                    message.channelId = reader.uint32();
                    break;
                case /* optional string account_ext */ 9:
                    message.accountExt = reader.string();
                    break;
                case /* optional string country_code */ 5:
                    message.countryCode = reader.string();
                    break;
                case /* optional string client_rand_key */ 760:
                    message.clientRandKey = reader.string();
                    break;
                case /* optional bool is_guest */ 6:
                    message.isGuest = reader.bool();
                    break;
                case /* optional string birthday */ 1718:
                    message.birthday = reader.string();
                    break;
                case /* optional uint32 sub_channel_id */ 8:
                    message.subChannelId = reader.uint32();
                    break;
                case /* optional uint32 platform_type */ 12:
                    message.platformType = reader.uint32();
                    break;
                case /* optional string client_ip_str */ 3:
                    message.clientIpStr = reader.string();
                    break;
                case /* optional string psn_id */ 13:
                    message.psnId = reader.string();
                    break;
                case /* optional uint32 account_type */ 1:
                    message.accountType = reader.uint32();
                    break;
                case /* optional uint32 minors_reg_min_age */ 995:
                    message.minorsRegMinAge = reader.uint32();
                    break;
                case /* optional uint32 cloud_client_ip */ 14:
                    message.cloudClientIp = reader.uint32();
                    break;
                case /* optional uint32 key_id */ 1787:
                    message.keyId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 2:
                    message.uid = reader.uint32();
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
        /* optional string account_token = 10; */
        if (message.accountToken !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.accountToken);
        /* optional string account_uid = 11; */
        if (message.accountUid !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* optional string psn_region = 4; */
        if (message.psnRegion !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.psnRegion);
        /* optional string online_id = 7; */
        if (message.onlineId !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* optional uint32 channel_id = 15; */
        if (message.channelId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.channelId);
        /* optional string account_ext = 9; */
        if (message.accountExt !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.accountExt);
        /* optional string country_code = 5; */
        if (message.countryCode !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* optional string client_rand_key = 760; */
        if (message.clientRandKey !== undefined)
            writer.tag(760, runtime_1.WireType.LengthDelimited).string(message.clientRandKey);
        /* optional bool is_guest = 6; */
        if (message.isGuest !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isGuest);
        /* optional string birthday = 1718; */
        if (message.birthday !== undefined)
            writer.tag(1718, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* optional uint32 sub_channel_id = 8; */
        if (message.subChannelId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.subChannelId);
        /* optional uint32 platform_type = 12; */
        if (message.platformType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.platformType);
        /* optional string client_ip_str = 3; */
        if (message.clientIpStr !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.clientIpStr);
        /* optional string psn_id = 13; */
        if (message.psnId !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* optional uint32 account_type = 1; */
        if (message.accountType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.accountType);
        /* optional uint32 minors_reg_min_age = 995; */
        if (message.minorsRegMinAge !== undefined)
            writer.tag(995, runtime_1.WireType.Varint).uint32(message.minorsRegMinAge);
        /* optional uint32 cloud_client_ip = 14; */
        if (message.cloudClientIp !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cloudClientIp);
        /* optional uint32 key_id = 1787; */
        if (message.keyId !== undefined)
            writer.tag(1787, runtime_1.WireType.Varint).uint32(message.keyId);
        /* optional uint32 uid = 2; */
        if (message.uid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerTokenReq
 */
exports.GetPlayerTokenReq = new GetPlayerTokenReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerTokenRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerTokenRsp", [
            { no: 937, name: "birthday", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "security_cmd_buffer", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "secret_key_seed", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2013, name: "country_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "extra_bin_data", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 15, name: "secret_key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1561, name: "minors_reg_min_age", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "black_uid_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1635, name: "tag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "token", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "gm_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 896, name: "channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1811, name: "psn_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 860, name: "client_ip_str", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "msg", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "account_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1802, name: "sub_channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2028, name: "is_watchdog_uid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1493, name: "server_rand_key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "is_proficient_player", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1172, name: "key_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "account_uid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "is_guest", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1529, name: "client_version_random_key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1640, name: "finish_collection_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "platform_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1112, name: "reg_platform", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 573, name: "is_login_white_list", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1140, name: "sign", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { finishCollectionIdList: [] };
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
                case /* optional string birthday */ 937:
                    message.birthday = reader.string();
                    break;
                case /* optional int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* optional bytes security_cmd_buffer */ 6:
                    message.securityCmdBuffer = reader.bytes();
                    break;
                case /* optional uint64 secret_key_seed */ 13:
                    message.secretKeySeed = reader.uint64().toBigInt();
                    break;
                case /* optional string country_code */ 2013:
                    message.countryCode = reader.string();
                    break;
                case /* optional bytes extra_bin_data */ 3:
                    message.extraBinData = reader.bytes();
                    break;
                case /* optional string secret_key */ 15:
                    message.secretKey = reader.string();
                    break;
                case /* optional uint32 minors_reg_min_age */ 1561:
                    message.minorsRegMinAge = reader.uint32();
                    break;
                case /* optional uint32 black_uid_end_time */ 14:
                    message.blackUidEndTime = reader.uint32();
                    break;
                case /* optional uint32 tag */ 1635:
                    message.tag = reader.uint32();
                    break;
                case /* optional string token */ 11:
                    message.token = reader.string();
                    break;
                case /* optional uint32 gm_uid */ 10:
                    message.gmUid = reader.uint32();
                    break;
                case /* optional uint32 channel_id */ 896:
                    message.channelId = reader.uint32();
                    break;
                case /* optional string psn_id */ 1811:
                    message.psnId = reader.string();
                    break;
                case /* optional string client_ip_str */ 860:
                    message.clientIpStr = reader.string();
                    break;
                case /* optional string msg */ 7:
                    message.msg = reader.string();
                    break;
                case /* optional uint32 account_type */ 5:
                    message.accountType = reader.uint32();
                    break;
                case /* optional uint32 sub_channel_id */ 1802:
                    message.subChannelId = reader.uint32();
                    break;
                case /* optional bool is_watchdog_uid */ 2028:
                    message.isWatchdogUid = reader.bool();
                    break;
                case /* optional string server_rand_key */ 1493:
                    message.serverRandKey = reader.string();
                    break;
                case /* optional bool is_proficient_player */ 9:
                    message.isProficientPlayer = reader.bool();
                    break;
                case /* optional uint32 key_id */ 1172:
                    message.keyId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional string account_uid */ 12:
                    message.accountUid = reader.string();
                    break;
                case /* optional bool is_guest */ 4:
                    message.isGuest = reader.bool();
                    break;
                case /* optional string client_version_random_key */ 1529:
                    message.clientVersionRandomKey = reader.string();
                    break;
                case /* repeated uint32 finish_collection_id_list */ 1640:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishCollectionIdList.push(reader.uint32());
                    else
                        message.finishCollectionIdList.push(reader.uint32());
                    break;
                case /* optional uint32 platform_type */ 8:
                    message.platformType = reader.uint32();
                    break;
                case /* optional uint32 reg_platform */ 1112:
                    message.regPlatform = reader.uint32();
                    break;
                case /* optional bool is_login_white_list */ 573:
                    message.isLoginWhiteList = reader.bool();
                    break;
                case /* optional string sign */ 1140:
                    message.sign = reader.string();
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
        /* optional string birthday = 937; */
        if (message.birthday !== undefined)
            writer.tag(937, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* optional int32 retcode = 2; */
        if (message.retcode !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bytes security_cmd_buffer = 6; */
        if (message.securityCmdBuffer !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).bytes(message.securityCmdBuffer);
        /* optional uint64 secret_key_seed = 13; */
        if (message.secretKeySeed !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.secretKeySeed);
        /* optional string country_code = 2013; */
        if (message.countryCode !== undefined)
            writer.tag(2013, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* optional bytes extra_bin_data = 3; */
        if (message.extraBinData !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.extraBinData);
        /* optional string secret_key = 15; */
        if (message.secretKey !== undefined)
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.secretKey);
        /* optional uint32 minors_reg_min_age = 1561; */
        if (message.minorsRegMinAge !== undefined)
            writer.tag(1561, runtime_1.WireType.Varint).uint32(message.minorsRegMinAge);
        /* optional uint32 black_uid_end_time = 14; */
        if (message.blackUidEndTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.blackUidEndTime);
        /* optional uint32 tag = 1635; */
        if (message.tag !== undefined)
            writer.tag(1635, runtime_1.WireType.Varint).uint32(message.tag);
        /* optional string token = 11; */
        if (message.token !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.token);
        /* optional uint32 gm_uid = 10; */
        if (message.gmUid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gmUid);
        /* optional uint32 channel_id = 896; */
        if (message.channelId !== undefined)
            writer.tag(896, runtime_1.WireType.Varint).uint32(message.channelId);
        /* optional string psn_id = 1811; */
        if (message.psnId !== undefined)
            writer.tag(1811, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* optional string client_ip_str = 860; */
        if (message.clientIpStr !== undefined)
            writer.tag(860, runtime_1.WireType.LengthDelimited).string(message.clientIpStr);
        /* optional string msg = 7; */
        if (message.msg !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.msg);
        /* optional uint32 account_type = 5; */
        if (message.accountType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.accountType);
        /* optional uint32 sub_channel_id = 1802; */
        if (message.subChannelId !== undefined)
            writer.tag(1802, runtime_1.WireType.Varint).uint32(message.subChannelId);
        /* optional bool is_watchdog_uid = 2028; */
        if (message.isWatchdogUid !== undefined)
            writer.tag(2028, runtime_1.WireType.Varint).bool(message.isWatchdogUid);
        /* optional string server_rand_key = 1493; */
        if (message.serverRandKey !== undefined)
            writer.tag(1493, runtime_1.WireType.LengthDelimited).string(message.serverRandKey);
        /* optional bool is_proficient_player = 9; */
        if (message.isProficientPlayer !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isProficientPlayer);
        /* optional uint32 key_id = 1172; */
        if (message.keyId !== undefined)
            writer.tag(1172, runtime_1.WireType.Varint).uint32(message.keyId);
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional string account_uid = 12; */
        if (message.accountUid !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* optional bool is_guest = 4; */
        if (message.isGuest !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isGuest);
        /* optional string client_version_random_key = 1529; */
        if (message.clientVersionRandomKey !== undefined)
            writer.tag(1529, runtime_1.WireType.LengthDelimited).string(message.clientVersionRandomKey);
        /* repeated uint32 finish_collection_id_list = 1640; */
        for (let i = 0; i < message.finishCollectionIdList.length; i++)
            writer.tag(1640, runtime_1.WireType.Varint).uint32(message.finishCollectionIdList[i]);
        /* optional uint32 platform_type = 8; */
        if (message.platformType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.platformType);
        /* optional uint32 reg_platform = 1112; */
        if (message.regPlatform !== undefined)
            writer.tag(1112, runtime_1.WireType.Varint).uint32(message.regPlatform);
        /* optional bool is_login_white_list = 573; */
        if (message.isLoginWhiteList !== undefined)
            writer.tag(573, runtime_1.WireType.Varint).bool(message.isLoginWhiteList);
        /* optional string sign = 1140; */
        if (message.sign !== undefined)
            writer.tag(1140, runtime_1.WireType.LengthDelimited).string(message.sign);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerTokenRsp
 */
exports.GetPlayerTokenRsp = new GetPlayerTokenRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TrackingIOInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TrackingIOInfo", [
            { no: 11, name: "rydevicetype", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "mac", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "deviceid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "client_tz", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "current_caid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "cached_caid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "appid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string rydevicetype */ 11:
                    message.rydevicetype = reader.string();
                    break;
                case /* optional string mac */ 6:
                    message.mac = reader.string();
                    break;
                case /* optional string deviceid */ 9:
                    message.deviceid = reader.string();
                    break;
                case /* optional string client_tz */ 5:
                    message.clientTz = reader.string();
                    break;
                case /* optional string current_caid */ 7:
                    message.currentCaid = reader.string();
                    break;
                case /* optional string cached_caid */ 15:
                    message.cachedCaid = reader.string();
                    break;
                case /* optional string appid */ 1:
                    message.appid = reader.string();
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
        /* optional string rydevicetype = 11; */
        if (message.rydevicetype !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.rydevicetype);
        /* optional string mac = 6; */
        if (message.mac !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.mac);
        /* optional string deviceid = 9; */
        if (message.deviceid !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.deviceid);
        /* optional string client_tz = 5; */
        if (message.clientTz !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.clientTz);
        /* optional string current_caid = 7; */
        if (message.currentCaid !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.currentCaid);
        /* optional string cached_caid = 15; */
        if (message.cachedCaid !== undefined)
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.cachedCaid);
        /* optional string appid = 1; */
        if (message.appid !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.appid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TrackingIOInfo
 */
exports.TrackingIOInfo = new TrackingIOInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdjustTrackingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AdjustTrackingInfo", [
            { no: 9, name: "event_token", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "adid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "idfa", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "app_token", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "gps_adid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "fire_adid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string event_token */ 9:
                    message.eventToken = reader.string();
                    break;
                case /* optional string adid */ 4:
                    message.adid = reader.string();
                    break;
                case /* optional string idfa */ 2:
                    message.idfa = reader.string();
                    break;
                case /* optional string app_token */ 14:
                    message.appToken = reader.string();
                    break;
                case /* optional string gps_adid */ 3:
                    message.gpsAdid = reader.string();
                    break;
                case /* optional string fire_adid */ 13:
                    message.fireAdid = reader.string();
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
        /* optional string event_token = 9; */
        if (message.eventToken !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.eventToken);
        /* optional string adid = 4; */
        if (message.adid !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.adid);
        /* optional string idfa = 2; */
        if (message.idfa !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.idfa);
        /* optional string app_token = 14; */
        if (message.appToken !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.appToken);
        /* optional string gps_adid = 3; */
        if (message.gpsAdid !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.gpsAdid);
        /* optional string fire_adid = 13; */
        if (message.fireAdid !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.fireAdid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AdjustTrackingInfo
 */
exports.AdjustTrackingInfo = new AdjustTrackingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLoginReq", [
            { no: 6, name: "language_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 615, name: "reg_platform", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1660, name: "tracking_io_info", kind: "message", T: () => exports.TrackingIOInfo },
            { no: 13, name: "account_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "token", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1458, name: "extra_bin_data", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 1314, name: "channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 688, name: "client_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "account_uid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "client_version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 772, name: "security_library_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2000, name: "country_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1268, name: "psn_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 431, name: "client_port", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "device_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1163, name: "cps", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "login_rand", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 984, name: "target_home_param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1816, name: "adjust_tracking_info", kind: "message", T: () => exports.AdjustTrackingInfo },
            { no: 908, name: "is_transfer", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1787, name: "tag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_guest", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2026, name: "environment_error_code", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 903, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "is_editor", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 861, name: "checksum_client_version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1995, name: "security_cmd_reply", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 1213, name: "security_library_version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1652, name: "birthday", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "device_uuid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1546, name: "client_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 23, name: "sub_channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "device_info", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1707, name: "client_verison_hash", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1532, name: "checksum", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "platform_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1864, name: "target_home_owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1335, name: "cloud_client_ip", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 612, name: "gm_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "system_version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "platform", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional uint32 language_type */ 6:
                    message.languageType = reader.uint32();
                    break;
                case /* optional uint32 reg_platform */ 615:
                    message.regPlatform = reader.uint32();
                    break;
                case /* optional com.midnights.game.TrackingIOInfo tracking_io_info */ 1660:
                    message.trackingIoInfo = exports.TrackingIOInfo.internalBinaryRead(reader, reader.uint32(), options, message.trackingIoInfo);
                    break;
                case /* optional uint32 account_type */ 13:
                    message.accountType = reader.uint32();
                    break;
                case /* optional string token */ 15:
                    message.token = reader.string();
                    break;
                case /* optional bytes extra_bin_data */ 1458:
                    message.extraBinData = reader.bytes();
                    break;
                case /* optional uint32 channel_id */ 1314:
                    message.channelId = reader.uint32();
                    break;
                case /* optional uint32 client_data_version */ 688:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* optional string account_uid */ 2:
                    message.accountUid = reader.string();
                    break;
                case /* optional string client_version */ 12:
                    message.clientVersion = reader.string();
                    break;
                case /* optional string security_library_md5 */ 772:
                    message.securityLibraryMd5 = reader.string();
                    break;
                case /* optional string country_code */ 2000:
                    message.countryCode = reader.string();
                    break;
                case /* optional string psn_id */ 1268:
                    message.psnId = reader.string();
                    break;
                case /* optional uint32 client_port */ 431:
                    message.clientPort = reader.uint32();
                    break;
                case /* optional string device_name */ 9:
                    message.deviceName = reader.string();
                    break;
                case /* optional string cps */ 1163:
                    message.cps = reader.string();
                    break;
                case /* optional uint64 login_rand */ 3:
                    message.loginRand = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 target_home_param */ 984:
                    message.targetHomeParam = reader.uint32();
                    break;
                case /* optional com.midnights.game.AdjustTrackingInfo adjust_tracking_info */ 1816:
                    message.adjustTrackingInfo = exports.AdjustTrackingInfo.internalBinaryRead(reader, reader.uint32(), options, message.adjustTrackingInfo);
                    break;
                case /* optional bool is_transfer */ 908:
                    message.isTransfer = reader.bool();
                    break;
                case /* optional uint32 tag */ 1787:
                    message.tag = reader.uint32();
                    break;
                case /* optional bool is_guest */ 5:
                    message.isGuest = reader.bool();
                    break;
                case /* optional bytes environment_error_code */ 2026:
                    message.environmentErrorCode = reader.bytes();
                    break;
                case /* optional string online_id */ 903:
                    message.onlineId = reader.string();
                    break;
                case /* optional bool is_editor */ 8:
                    message.isEditor = reader.bool();
                    break;
                case /* optional string checksum_client_version */ 861:
                    message.checksumClientVersion = reader.string();
                    break;
                case /* optional bytes security_cmd_reply */ 1995:
                    message.securityCmdReply = reader.bytes();
                    break;
                case /* optional string security_library_version */ 1213:
                    message.securityLibraryVersion = reader.string();
                    break;
                case /* optional string birthday */ 1652:
                    message.birthday = reader.string();
                    break;
                case /* optional string device_uuid */ 4:
                    message.deviceUuid = reader.string();
                    break;
                case /* optional uint32 client_token */ 1546:
                    message.clientToken = reader.uint32();
                    break;
                case /* optional uint32 sub_channel_id */ 23:
                    message.subChannelId = reader.uint32();
                    break;
                case /* optional uint32 target_uid */ 11:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional string device_info */ 1:
                    message.deviceInfo = reader.string();
                    break;
                case /* optional string client_verison_hash */ 1707:
                    message.clientVerisonHash = reader.string();
                    break;
                case /* optional string checksum */ 1532:
                    message.checksum = reader.string();
                    break;
                case /* optional uint32 platform_type */ 14:
                    message.platformType = reader.uint32();
                    break;
                case /* optional uint32 target_home_owner_uid */ 1864:
                    message.targetHomeOwnerUid = reader.uint32();
                    break;
                case /* optional uint32 cloud_client_ip */ 1335:
                    message.cloudClientIp = reader.uint32();
                    break;
                case /* optional uint32 gm_uid */ 612:
                    message.gmUid = reader.uint32();
                    break;
                case /* optional string system_version */ 10:
                    message.systemVersion = reader.string();
                    break;
                case /* optional string platform */ 7:
                    message.platform = reader.string();
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
        /* optional uint32 language_type = 6; */
        if (message.languageType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.languageType);
        /* optional uint32 reg_platform = 615; */
        if (message.regPlatform !== undefined)
            writer.tag(615, runtime_1.WireType.Varint).uint32(message.regPlatform);
        /* optional com.midnights.game.TrackingIOInfo tracking_io_info = 1660; */
        if (message.trackingIoInfo)
            exports.TrackingIOInfo.internalBinaryWrite(message.trackingIoInfo, writer.tag(1660, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 account_type = 13; */
        if (message.accountType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.accountType);
        /* optional string token = 15; */
        if (message.token !== undefined)
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.token);
        /* optional bytes extra_bin_data = 1458; */
        if (message.extraBinData !== undefined)
            writer.tag(1458, runtime_1.WireType.LengthDelimited).bytes(message.extraBinData);
        /* optional uint32 channel_id = 1314; */
        if (message.channelId !== undefined)
            writer.tag(1314, runtime_1.WireType.Varint).uint32(message.channelId);
        /* optional uint32 client_data_version = 688; */
        if (message.clientDataVersion !== undefined)
            writer.tag(688, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* optional string account_uid = 2; */
        if (message.accountUid !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.accountUid);
        /* optional string client_version = 12; */
        if (message.clientVersion !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.clientVersion);
        /* optional string security_library_md5 = 772; */
        if (message.securityLibraryMd5 !== undefined)
            writer.tag(772, runtime_1.WireType.LengthDelimited).string(message.securityLibraryMd5);
        /* optional string country_code = 2000; */
        if (message.countryCode !== undefined)
            writer.tag(2000, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* optional string psn_id = 1268; */
        if (message.psnId !== undefined)
            writer.tag(1268, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* optional uint32 client_port = 431; */
        if (message.clientPort !== undefined)
            writer.tag(431, runtime_1.WireType.Varint).uint32(message.clientPort);
        /* optional string device_name = 9; */
        if (message.deviceName !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.deviceName);
        /* optional string cps = 1163; */
        if (message.cps !== undefined)
            writer.tag(1163, runtime_1.WireType.LengthDelimited).string(message.cps);
        /* optional uint64 login_rand = 3; */
        if (message.loginRand !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.loginRand);
        /* optional uint32 target_home_param = 984; */
        if (message.targetHomeParam !== undefined)
            writer.tag(984, runtime_1.WireType.Varint).uint32(message.targetHomeParam);
        /* optional com.midnights.game.AdjustTrackingInfo adjust_tracking_info = 1816; */
        if (message.adjustTrackingInfo)
            exports.AdjustTrackingInfo.internalBinaryWrite(message.adjustTrackingInfo, writer.tag(1816, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_transfer = 908; */
        if (message.isTransfer !== undefined)
            writer.tag(908, runtime_1.WireType.Varint).bool(message.isTransfer);
        /* optional uint32 tag = 1787; */
        if (message.tag !== undefined)
            writer.tag(1787, runtime_1.WireType.Varint).uint32(message.tag);
        /* optional bool is_guest = 5; */
        if (message.isGuest !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isGuest);
        /* optional bytes environment_error_code = 2026; */
        if (message.environmentErrorCode !== undefined)
            writer.tag(2026, runtime_1.WireType.LengthDelimited).bytes(message.environmentErrorCode);
        /* optional string online_id = 903; */
        if (message.onlineId !== undefined)
            writer.tag(903, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* optional bool is_editor = 8; */
        if (message.isEditor !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isEditor);
        /* optional string checksum_client_version = 861; */
        if (message.checksumClientVersion !== undefined)
            writer.tag(861, runtime_1.WireType.LengthDelimited).string(message.checksumClientVersion);
        /* optional bytes security_cmd_reply = 1995; */
        if (message.securityCmdReply !== undefined)
            writer.tag(1995, runtime_1.WireType.LengthDelimited).bytes(message.securityCmdReply);
        /* optional string security_library_version = 1213; */
        if (message.securityLibraryVersion !== undefined)
            writer.tag(1213, runtime_1.WireType.LengthDelimited).string(message.securityLibraryVersion);
        /* optional string birthday = 1652; */
        if (message.birthday !== undefined)
            writer.tag(1652, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* optional string device_uuid = 4; */
        if (message.deviceUuid !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.deviceUuid);
        /* optional uint32 client_token = 1546; */
        if (message.clientToken !== undefined)
            writer.tag(1546, runtime_1.WireType.Varint).uint32(message.clientToken);
        /* optional uint32 sub_channel_id = 23; */
        if (message.subChannelId !== undefined)
            writer.tag(23, runtime_1.WireType.Varint).uint32(message.subChannelId);
        /* optional uint32 target_uid = 11; */
        if (message.targetUid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* optional string device_info = 1; */
        if (message.deviceInfo !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.deviceInfo);
        /* optional string client_verison_hash = 1707; */
        if (message.clientVerisonHash !== undefined)
            writer.tag(1707, runtime_1.WireType.LengthDelimited).string(message.clientVerisonHash);
        /* optional string checksum = 1532; */
        if (message.checksum !== undefined)
            writer.tag(1532, runtime_1.WireType.LengthDelimited).string(message.checksum);
        /* optional uint32 platform_type = 14; */
        if (message.platformType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.platformType);
        /* optional uint32 target_home_owner_uid = 1864; */
        if (message.targetHomeOwnerUid !== undefined)
            writer.tag(1864, runtime_1.WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* optional uint32 cloud_client_ip = 1335; */
        if (message.cloudClientIp !== undefined)
            writer.tag(1335, runtime_1.WireType.Varint).uint32(message.cloudClientIp);
        /* optional uint32 gm_uid = 612; */
        if (message.gmUid !== undefined)
            writer.tag(612, runtime_1.WireType.Varint).uint32(message.gmUid);
        /* optional string system_version = 10; */
        if (message.systemVersion !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.systemVersion);
        /* optional string platform = 7; */
        if (message.platform !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.platform);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerLoginReq
 */
exports.PlayerLoginReq = new PlayerLoginReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShortAbilityHashPair$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShortAbilityHashPair", [
            { no: 15, name: "ability_config_hash", kind: "scalar", opt: true, T: 15 /*ScalarType.SFIXED32*/ },
            { no: 1, name: "ability_name_hash", kind: "scalar", opt: true, T: 15 /*ScalarType.SFIXED32*/ }
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
                case /* optional sfixed32 ability_config_hash */ 15:
                    message.abilityConfigHash = reader.sfixed32();
                    break;
                case /* optional sfixed32 ability_name_hash */ 1:
                    message.abilityNameHash = reader.sfixed32();
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
        /* optional sfixed32 ability_config_hash = 15; */
        if (message.abilityConfigHash !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).sfixed32(message.abilityConfigHash);
        /* optional sfixed32 ability_name_hash = 1; */
        if (message.abilityNameHash !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).sfixed32(message.abilityNameHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShortAbilityHashPair
 */
exports.ShortAbilityHashPair = new ShortAbilityHashPair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLoginRsp", [
            { no: 1, name: "client_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1429, name: "is_sc_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 571, name: "block_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => define_9.BlockInfo } },
            { no: 1685, name: "is_audit", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2018, name: "is_transfer", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1746, name: "client_silence_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1573, name: "next_res_version_config", kind: "message", T: () => define_8.ResVersionConfig },
            { no: 6, name: "client_silence_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "login_rand", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_new_player", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1047, name: "client_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "game_biz", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 621, name: "next_resource_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "is_relogin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 125, name: "total_tick_time", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 932, name: "is_enable_client_hash_debug", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2024, name: "sc_info", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "ability_hash_code", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2040, name: "register_cps", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1649, name: "is_login_rsp_split", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "is_use_ability_hash", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "ability_hash_map", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 250, name: "short_ability_hash_map", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ShortAbilityHashPair },
            { no: 1830, name: "client_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1900, name: "country_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 951, name: "is_data_need_relogin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1969, name: "res_version_config", kind: "message", T: () => define_8.ResVersionConfig },
            { no: 1352, name: "feature_block_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_7.FeatureBlockInfo },
            { no: 624, name: "birthday", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "player_data", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 1299, name: "client_silence_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 553, name: "target_home_owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "player_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { blockInfoMap: {}, abilityHashMap: {}, shortAbilityHashMap: [], featureBlockInfoList: [] };
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
                case /* optional uint32 client_data_version */ 1:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* optional bool is_sc_open */ 1429:
                    message.isScOpen = reader.bool();
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* map<uint32, com.midnights.game.BlockInfo> block_info_map */ 571:
                    this.binaryReadMap571(message.blockInfoMap, reader, options);
                    break;
                case /* optional bool is_audit */ 1685:
                    message.isAudit = reader.bool();
                    break;
                case /* optional bool is_transfer */ 2018:
                    message.isTransfer = reader.bool();
                    break;
                case /* optional string client_silence_md5 */ 1746:
                    message.clientSilenceMd5 = reader.string();
                    break;
                case /* optional com.midnights.game.ResVersionConfig next_res_version_config */ 1573:
                    message.nextResVersionConfig = define_8.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
                    break;
                case /* optional uint32 client_silence_data_version */ 6:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* optional uint64 login_rand */ 4:
                    message.loginRand = reader.uint64().toBigInt();
                    break;
                case /* optional bool is_new_player */ 8:
                    message.isNewPlayer = reader.bool();
                    break;
                case /* optional string client_version_suffix */ 1047:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* optional string game_biz */ 5:
                    message.gameBiz = reader.string();
                    break;
                case /* optional string next_resource_url */ 621:
                    message.nextResourceUrl = reader.string();
                    break;
                case /* optional bool is_relogin */ 10:
                    message.isRelogin = reader.bool();
                    break;
                case /* optional double total_tick_time */ 125:
                    message.totalTickTime = reader.double();
                    break;
                case /* optional bool is_enable_client_hash_debug */ 932:
                    message.isEnableClientHashDebug = reader.bool();
                    break;
                case /* optional bytes sc_info */ 2024:
                    message.scInfo = reader.bytes();
                    break;
                case /* optional int32 ability_hash_code */ 12:
                    message.abilityHashCode = reader.int32();
                    break;
                case /* optional string register_cps */ 2040:
                    message.registerCps = reader.string();
                    break;
                case /* optional bool is_login_rsp_split */ 1649:
                    message.isLoginRspSplit = reader.bool();
                    break;
                case /* optional bool is_use_ability_hash */ 2:
                    message.isUseAbilityHash = reader.bool();
                    break;
                case /* map<string, int32> ability_hash_map */ 11:
                    this.binaryReadMap11(message.abilityHashMap, reader, options);
                    break;
                case /* repeated com.midnights.game.ShortAbilityHashPair short_ability_hash_map */ 250:
                    message.shortAbilityHashMap.push(exports.ShortAbilityHashPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string client_md5 */ 1830:
                    message.clientMd5 = reader.string();
                    break;
                case /* optional string country_code */ 1900:
                    message.countryCode = reader.string();
                    break;
                case /* optional bool is_data_need_relogin */ 951:
                    message.isDataNeedRelogin = reader.bool();
                    break;
                case /* optional com.midnights.game.ResVersionConfig res_version_config */ 1969:
                    message.resVersionConfig = define_8.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
                    break;
                case /* repeated com.midnights.game.FeatureBlockInfo feature_block_info_list */ 1352:
                    message.featureBlockInfoList.push(define_7.FeatureBlockInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string birthday */ 624:
                    message.birthday = reader.string();
                    break;
                case /* optional uint32 target_uid */ 14:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional bytes player_data */ 13:
                    message.playerData = reader.bytes();
                    break;
                case /* optional string client_silence_version_suffix */ 1299:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* optional uint32 target_home_owner_uid */ 553:
                    message.targetHomeOwnerUid = reader.uint32();
                    break;
                case /* optional uint32 player_data_version */ 7:
                    message.playerDataVersion = reader.uint32();
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
    binaryReadMap571(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = define_9.BlockInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.PlayerLoginRsp.block_info_map");
            }
        }
        map[key ?? 0] = val ?? define_9.BlockInfo.create();
    }
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.PlayerLoginRsp.ability_hash_map");
            }
        }
        map[key ?? ""] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 client_data_version = 1; */
        if (message.clientDataVersion !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* optional bool is_sc_open = 1429; */
        if (message.isScOpen !== undefined)
            writer.tag(1429, runtime_1.WireType.Varint).bool(message.isScOpen);
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* map<uint32, com.midnights.game.BlockInfo> block_info_map = 571; */
        for (let k of Object.keys(message.blockInfoMap)) {
            writer.tag(571, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_9.BlockInfo.internalBinaryWrite(message.blockInfoMap[k], writer, options);
            writer.join().join();
        }
        /* optional bool is_audit = 1685; */
        if (message.isAudit !== undefined)
            writer.tag(1685, runtime_1.WireType.Varint).bool(message.isAudit);
        /* optional bool is_transfer = 2018; */
        if (message.isTransfer !== undefined)
            writer.tag(2018, runtime_1.WireType.Varint).bool(message.isTransfer);
        /* optional string client_silence_md5 = 1746; */
        if (message.clientSilenceMd5 !== undefined)
            writer.tag(1746, runtime_1.WireType.LengthDelimited).string(message.clientSilenceMd5);
        /* optional com.midnights.game.ResVersionConfig next_res_version_config = 1573; */
        if (message.nextResVersionConfig)
            define_8.ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(1573, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 client_silence_data_version = 6; */
        if (message.clientSilenceDataVersion !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* optional uint64 login_rand = 4; */
        if (message.loginRand !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.loginRand);
        /* optional bool is_new_player = 8; */
        if (message.isNewPlayer !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isNewPlayer);
        /* optional string client_version_suffix = 1047; */
        if (message.clientVersionSuffix !== undefined)
            writer.tag(1047, runtime_1.WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* optional string game_biz = 5; */
        if (message.gameBiz !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.gameBiz);
        /* optional string next_resource_url = 621; */
        if (message.nextResourceUrl !== undefined)
            writer.tag(621, runtime_1.WireType.LengthDelimited).string(message.nextResourceUrl);
        /* optional bool is_relogin = 10; */
        if (message.isRelogin !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isRelogin);
        /* optional double total_tick_time = 125; */
        if (message.totalTickTime !== undefined)
            writer.tag(125, runtime_1.WireType.Bit64).double(message.totalTickTime);
        /* optional bool is_enable_client_hash_debug = 932; */
        if (message.isEnableClientHashDebug !== undefined)
            writer.tag(932, runtime_1.WireType.Varint).bool(message.isEnableClientHashDebug);
        /* optional bytes sc_info = 2024; */
        if (message.scInfo !== undefined)
            writer.tag(2024, runtime_1.WireType.LengthDelimited).bytes(message.scInfo);
        /* optional int32 ability_hash_code = 12; */
        if (message.abilityHashCode !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.abilityHashCode);
        /* optional string register_cps = 2040; */
        if (message.registerCps !== undefined)
            writer.tag(2040, runtime_1.WireType.LengthDelimited).string(message.registerCps);
        /* optional bool is_login_rsp_split = 1649; */
        if (message.isLoginRspSplit !== undefined)
            writer.tag(1649, runtime_1.WireType.Varint).bool(message.isLoginRspSplit);
        /* optional bool is_use_ability_hash = 2; */
        if (message.isUseAbilityHash !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isUseAbilityHash);
        /* map<string, int32> ability_hash_map = 11; */
        for (let k of Object.keys(message.abilityHashMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.LengthDelimited).string(k).tag(2, runtime_1.WireType.Varint).int32(message.abilityHashMap[k]).join();
        /* repeated com.midnights.game.ShortAbilityHashPair short_ability_hash_map = 250; */
        for (let i = 0; i < message.shortAbilityHashMap.length; i++)
            exports.ShortAbilityHashPair.internalBinaryWrite(message.shortAbilityHashMap[i], writer.tag(250, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string client_md5 = 1830; */
        if (message.clientMd5 !== undefined)
            writer.tag(1830, runtime_1.WireType.LengthDelimited).string(message.clientMd5);
        /* optional string country_code = 1900; */
        if (message.countryCode !== undefined)
            writer.tag(1900, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* optional bool is_data_need_relogin = 951; */
        if (message.isDataNeedRelogin !== undefined)
            writer.tag(951, runtime_1.WireType.Varint).bool(message.isDataNeedRelogin);
        /* optional com.midnights.game.ResVersionConfig res_version_config = 1969; */
        if (message.resVersionConfig)
            define_8.ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(1969, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.FeatureBlockInfo feature_block_info_list = 1352; */
        for (let i = 0; i < message.featureBlockInfoList.length; i++)
            define_7.FeatureBlockInfo.internalBinaryWrite(message.featureBlockInfoList[i], writer.tag(1352, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string birthday = 624; */
        if (message.birthday !== undefined)
            writer.tag(624, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* optional uint32 target_uid = 14; */
        if (message.targetUid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* optional bytes player_data = 13; */
        if (message.playerData !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).bytes(message.playerData);
        /* optional string client_silence_version_suffix = 1299; */
        if (message.clientSilenceVersionSuffix !== undefined)
            writer.tag(1299, runtime_1.WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* optional uint32 target_home_owner_uid = 553; */
        if (message.targetHomeOwnerUid !== undefined)
            writer.tag(553, runtime_1.WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* optional uint32 player_data_version = 7; */
        if (message.playerDataVersion !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.playerDataVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerLoginRsp
 */
exports.PlayerLoginRsp = new PlayerLoginRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLogoutReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLogoutReq", [
            { no: 6, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerLogoutReq.Reason", PlayerLogoutReq_Reason] }
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
                case /* optional com.midnights.game.PlayerLogoutReq.Reason reason */ 6:
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
        /* optional com.midnights.game.PlayerLogoutReq.Reason reason = 6; */
        if (message.reason !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerLogoutReq
 */
exports.PlayerLogoutReq = new PlayerLogoutReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLogoutRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLogoutRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerLogoutRsp
 */
exports.PlayerLogoutRsp = new PlayerLogoutRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLogoutNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLogoutNotify", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional int32 retcode */ 13:
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
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerLogoutNotify
 */
exports.PlayerLogoutNotify = new PlayerLogoutNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerDataNotify", [
            { no: 7, name: "server_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "is_first_login_today", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "region_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => define_6.PropValue } }
        ]);
    }
    create(value) {
        const message = { propMap: {} };
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
                case /* optional uint64 server_time */ 7:
                    message.serverTime = reader.uint64().toBigInt();
                    break;
                case /* optional string nick_name */ 8:
                    message.nickName = reader.string();
                    break;
                case /* optional bool is_first_login_today */ 12:
                    message.isFirstLoginToday = reader.bool();
                    break;
                case /* optional uint32 region_id */ 6:
                    message.regionId = reader.uint32();
                    break;
                case /* map<uint32, com.midnights.game.PropValue> prop_map */ 15:
                    this.binaryReadMap15(message.propMap, reader, options);
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
                    val = define_6.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.PlayerDataNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? define_6.PropValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 server_time = 7; */
        if (message.serverTime !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.serverTime);
        /* optional string nick_name = 8; */
        if (message.nickName !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.nickName);
        /* optional bool is_first_login_today = 12; */
        if (message.isFirstLoginToday !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isFirstLoginToday);
        /* optional uint32 region_id = 6; */
        if (message.regionId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.regionId);
        /* map<uint32, com.midnights.game.PropValue> prop_map = 15; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_6.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerDataNotify
 */
exports.PlayerDataNotify = new PlayerDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeGameTimeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeGameTimeReq", [
            { no: 6, name: "game_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_force_set", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "extra_days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 game_time */ 6:
                    message.gameTime = reader.uint32();
                    break;
                case /* optional bool is_force_set */ 11:
                    message.isForceSet = reader.bool();
                    break;
                case /* optional uint32 extra_days */ 12:
                    message.extraDays = reader.uint32();
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
        /* optional uint32 game_time = 6; */
        if (message.gameTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.gameTime);
        /* optional bool is_force_set = 11; */
        if (message.isForceSet !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isForceSet);
        /* optional uint32 extra_days = 12; */
        if (message.extraDays !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.extraDays);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeGameTimeReq
 */
exports.ChangeGameTimeReq = new ChangeGameTimeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeGameTimeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeGameTimeRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "extra_days", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_game_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 extra_days */ 5:
                    message.extraDays = reader.uint32();
                    break;
                case /* optional uint32 cur_game_time */ 14:
                    message.curGameTime = reader.uint32();
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
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 extra_days = 5; */
        if (message.extraDays !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.extraDays);
        /* optional uint32 cur_game_time = 14; */
        if (message.curGameTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.curGameTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeGameTimeRsp
 */
exports.ChangeGameTimeRsp = new ChangeGameTimeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerGameTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerGameTimeNotify", [
            { no: 7, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "game_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_home", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 game_time */ 3:
                    message.gameTime = reader.uint32();
                    break;
                case /* optional bool is_home */ 13:
                    message.isHome = reader.bool();
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
        /* optional uint32 game_time = 3; */
        if (message.gameTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.gameTime);
        /* optional bool is_home = 13; */
        if (message.isHome !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isHome);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerGameTimeNotify
 */
exports.PlayerGameTimeNotify = new PlayerGameTimeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerPropNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerPropNotify", [
            { no: 13, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => define_6.PropValue } }
        ]);
    }
    create(value) {
        const message = { propMap: {} };
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
                case /* map<uint32, com.midnights.game.PropValue> prop_map */ 13:
                    this.binaryReadMap13(message.propMap, reader, options);
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
                    val = define_6.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.PlayerPropNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? define_6.PropValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.PropValue> prop_map = 13; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_6.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerPropNotify
 */
exports.PlayerPropNotify = new PlayerPropNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientTriggerEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientTriggerEventNotify", [
            { no: 3, name: "force_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "event_type", kind: "enum", opt: true, T: () => ["com.midnights.game.EventTriggerType", define_5.EventTriggerType] }
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
                case /* optional uint32 force_id */ 3:
                    message.forceId = reader.uint32();
                    break;
                case /* optional com.midnights.game.EventTriggerType event_type */ 2:
                    message.eventType = reader.int32();
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
        /* optional uint32 force_id = 3; */
        if (message.forceId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.forceId);
        /* optional com.midnights.game.EventTriggerType event_type = 2; */
        if (message.eventType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.eventType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientTriggerEventNotify
 */
exports.ClientTriggerEventNotify = new ClientTriggerEventNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerPropReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerPropReq", [
            { no: 7, name: "prop_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_6.PropValue }
        ]);
    }
    create(value) {
        const message = { propList: [] };
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
                case /* repeated com.midnights.game.PropValue prop_list */ 7:
                    message.propList.push(define_6.PropValue.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.PropValue prop_list = 7; */
        for (let i = 0; i < message.propList.length; i++)
            define_6.PropValue.internalBinaryWrite(message.propList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerPropReq
 */
exports.SetPlayerPropReq = new SetPlayerPropReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerPropRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerPropRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerPropRsp
 */
exports.SetPlayerPropRsp = new SetPlayerPropRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerBornDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerBornDataReq", [
            { no: 2, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional uint32 avatar_id */ 2:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional string nick_name */ 13:
                    message.nickName = reader.string();
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
        /* optional uint32 avatar_id = 2; */
        if (message.avatarId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional string nick_name = 13; */
        if (message.nickName !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.nickName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerBornDataReq
 */
exports.SetPlayerBornDataReq = new SetPlayerBornDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerBornDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerBornDataRsp", [
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
                case /* optional int32 retcode */ 10:
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerBornDataRsp
 */
exports.SetPlayerBornDataRsp = new SetPlayerBornDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DoSetPlayerBornDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DoSetPlayerBornDataNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.DoSetPlayerBornDataNotify
 */
exports.DoSetPlayerBornDataNotify = new DoSetPlayerBornDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerPropChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerPropChangeNotify", [
            { no: 13, name: "prop_delta", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "prop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 prop_delta */ 13:
                    message.propDelta = reader.uint32();
                    break;
                case /* optional uint32 prop_type */ 12:
                    message.propType = reader.uint32();
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
        /* optional uint32 prop_delta = 13; */
        if (message.propDelta !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.propDelta);
        /* optional uint32 prop_type = 12; */
        if (message.propType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.propType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerPropChangeNotify
 */
exports.PlayerPropChangeNotify = new PlayerPropChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerNameReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerNameReq", [
            { no: 1, name: "nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string nick_name */ 1:
                    message.nickName = reader.string();
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
        /* optional string nick_name = 1; */
        if (message.nickName !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.nickName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerNameReq
 */
exports.SetPlayerNameReq = new SetPlayerNameReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerNameRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerNameRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string nick_name */ 14:
                    message.nickName = reader.string();
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
        /* optional string nick_name = 14; */
        if (message.nickName !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.nickName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerNameRsp
 */
exports.SetPlayerNameRsp = new SetPlayerNameRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOpenStateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetOpenStateReq", [
            { no: 12, name: "key", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 key */ 12:
                    message.key = reader.uint32();
                    break;
                case /* optional uint32 value */ 5:
                    message.value = reader.uint32();
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
        /* optional uint32 key = 12; */
        if (message.key !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.key);
        /* optional uint32 value = 5; */
        if (message.value !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetOpenStateReq
 */
exports.SetOpenStateReq = new SetOpenStateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOpenStateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetOpenStateRsp", [
            { no: 9, name: "key", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 key */ 9:
                    message.key = reader.uint32();
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 value */ 15:
                    message.value = reader.uint32();
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
        /* optional uint32 key = 9; */
        if (message.key !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.key);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 value = 15; */
        if (message.value !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetOpenStateRsp
 */
exports.SetOpenStateRsp = new SetOpenStateRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpenStateUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpenStateUpdateNotify", [
            { no: 6, name: "open_state_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { openStateMap: {} };
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
                case /* map<uint32, uint32> open_state_map */ 6:
                    this.binaryReadMap6(message.openStateMap, reader, options);
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
    binaryReadMap6(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.OpenStateUpdateNotify.open_state_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> open_state_map = 6; */
        for (let k of Object.keys(message.openStateMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.openStateMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpenStateUpdateNotify
 */
exports.OpenStateUpdateNotify = new OpenStateUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpenStateChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpenStateChangeNotify", [
            { no: 4, name: "open_state_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { openStateMap: {} };
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
                case /* map<uint32, uint32> open_state_map */ 4:
                    this.binaryReadMap4(message.openStateMap, reader, options);
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
    binaryReadMap4(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.OpenStateChangeNotify.open_state_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> open_state_map = 4; */
        for (let k of Object.keys(message.openStateMap))
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.openStateMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpenStateChangeNotify
 */
exports.OpenStateChangeNotify = new OpenStateChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCookReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCookReq", [
            { no: 1, name: "cook_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "qte_quality", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "recipe_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "assist_avatar", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 cook_count */ 1:
                    message.cookCount = reader.uint32();
                    break;
                case /* optional uint32 qte_quality */ 12:
                    message.qteQuality = reader.uint32();
                    break;
                case /* optional uint32 recipe_id */ 8:
                    message.recipeId = reader.uint32();
                    break;
                case /* optional uint32 assist_avatar */ 14:
                    message.assistAvatar = reader.uint32();
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
        /* optional uint32 cook_count = 1; */
        if (message.cookCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.cookCount);
        /* optional uint32 qte_quality = 12; */
        if (message.qteQuality !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.qteQuality);
        /* optional uint32 recipe_id = 8; */
        if (message.recipeId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.recipeId);
        /* optional uint32 assist_avatar = 14; */
        if (message.assistAvatar !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.assistAvatar);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCookReq
 */
exports.PlayerCookReq = new PlayerCookReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCookRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCookRsp", [
            { no: 15, name: "extral_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_4.ItemParam },
            { no: 12, name: "cook_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_4.ItemParam },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "qte_quality", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "recipe_data", kind: "message", T: () => exports.CookRecipeData }
        ]);
    }
    create(value) {
        const message = { extralItemList: [], itemList: [] };
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
                case /* repeated com.midnights.game.ItemParam extral_item_list */ 15:
                    message.extralItemList.push(define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 cook_count */ 12:
                    message.cookCount = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 11:
                    message.itemList.push(define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 qte_quality */ 5:
                    message.qteQuality = reader.uint32();
                    break;
                case /* optional com.midnights.game.CookRecipeData recipe_data */ 7:
                    message.recipeData = exports.CookRecipeData.internalBinaryRead(reader, reader.uint32(), options, message.recipeData);
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
        /* repeated com.midnights.game.ItemParam extral_item_list = 15; */
        for (let i = 0; i < message.extralItemList.length; i++)
            define_4.ItemParam.internalBinaryWrite(message.extralItemList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 cook_count = 12; */
        if (message.cookCount !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cookCount);
        /* repeated com.midnights.game.ItemParam item_list = 11; */
        for (let i = 0; i < message.itemList.length; i++)
            define_4.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 qte_quality = 5; */
        if (message.qteQuality !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.qteQuality);
        /* optional com.midnights.game.CookRecipeData recipe_data = 7; */
        if (message.recipeData)
            exports.CookRecipeData.internalBinaryWrite(message.recipeData, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCookRsp
 */
exports.PlayerCookRsp = new PlayerCookRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerRandomCookReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerRandomCookReq", [
            { no: 13, name: "material_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_4.ItemParam }
        ]);
    }
    create(value) {
        const message = { materialList: [] };
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
                case /* repeated com.midnights.game.ItemParam material_list */ 13:
                    message.materialList.push(define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ItemParam material_list = 13; */
        for (let i = 0; i < message.materialList.length; i++)
            define_4.ItemParam.internalBinaryWrite(message.materialList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerRandomCookReq
 */
exports.PlayerRandomCookReq = new PlayerRandomCookReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerRandomCookRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerRandomCookRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerRandomCookRsp
 */
exports.PlayerRandomCookRsp = new PlayerRandomCookRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CookRecipeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CookRecipeData", [
            { no: 13, name: "proficiency", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "recipe_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 proficiency */ 13:
                    message.proficiency = reader.uint32();
                    break;
                case /* optional uint32 recipe_id */ 9:
                    message.recipeId = reader.uint32();
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
        /* optional uint32 proficiency = 13; */
        if (message.proficiency !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.proficiency);
        /* optional uint32 recipe_id = 9; */
        if (message.recipeId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.recipeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CookRecipeData
 */
exports.CookRecipeData = new CookRecipeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CookDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CookDataNotify", [
            { no: 2, name: "recipe_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CookRecipeData },
            { no: 11, name: "grade", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { recipeDataList: [] };
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
                case /* repeated com.midnights.game.CookRecipeData recipe_data_list */ 2:
                    message.recipeDataList.push(exports.CookRecipeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 grade */ 11:
                    message.grade = reader.uint32();
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
        /* repeated com.midnights.game.CookRecipeData recipe_data_list = 2; */
        for (let i = 0; i < message.recipeDataList.length; i++)
            exports.CookRecipeData.internalBinaryWrite(message.recipeDataList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 grade = 11; */
        if (message.grade !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.grade);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CookDataNotify
 */
exports.CookDataNotify = new CookDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CookRecipeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CookRecipeDataNotify", [
            { no: 4, name: "recipe_data", kind: "message", T: () => exports.CookRecipeData }
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
                case /* optional com.midnights.game.CookRecipeData recipe_data */ 4:
                    message.recipeData = exports.CookRecipeData.internalBinaryRead(reader, reader.uint32(), options, message.recipeData);
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
        /* optional com.midnights.game.CookRecipeData recipe_data = 4; */
        if (message.recipeData)
            exports.CookRecipeData.internalBinaryWrite(message.recipeData, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CookRecipeDataNotify
 */
exports.CookRecipeDataNotify = new CookRecipeDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CookGradeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CookGradeDataNotify", [
            { no: 12, name: "grade", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 grade */ 12:
                    message.grade = reader.uint32();
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
        /* optional uint32 grade = 12; */
        if (message.grade !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.grade);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CookGradeDataNotify
 */
exports.CookGradeDataNotify = new CookGradeDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCompoundMaterialReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCompoundMaterialReq", [
            { no: 11, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "compound_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 count */ 11:
                    message.count = reader.uint32();
                    break;
                case /* optional uint32 compound_id */ 3:
                    message.compoundId = reader.uint32();
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
        /* optional uint32 count = 11; */
        if (message.count !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.count);
        /* optional uint32 compound_id = 3; */
        if (message.compoundId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.compoundId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCompoundMaterialReq
 */
exports.PlayerCompoundMaterialReq = new PlayerCompoundMaterialReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompoundQueueData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CompoundQueueData", [
            { no: 1, name: "output_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "compound_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "output_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "wait_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 output_count */ 1:
                    message.outputCount = reader.uint32();
                    break;
                case /* optional uint32 compound_id */ 4:
                    message.compoundId = reader.uint32();
                    break;
                case /* optional uint32 output_time */ 14:
                    message.outputTime = reader.uint32();
                    break;
                case /* optional uint32 wait_count */ 8:
                    message.waitCount = reader.uint32();
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
        /* optional uint32 output_count = 1; */
        if (message.outputCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.outputCount);
        /* optional uint32 compound_id = 4; */
        if (message.compoundId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.compoundId);
        /* optional uint32 output_time = 14; */
        if (message.outputTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.outputTime);
        /* optional uint32 wait_count = 8; */
        if (message.waitCount !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.waitCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CompoundQueueData
 */
exports.CompoundQueueData = new CompoundQueueData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCompoundMaterialRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCompoundMaterialRsp", [
            { no: 5, name: "compound_que_data", kind: "message", T: () => exports.CompoundQueueData },
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
                case /* optional com.midnights.game.CompoundQueueData compound_que_data */ 5:
                    message.compoundQueData = exports.CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options, message.compoundQueData);
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
        /* optional com.midnights.game.CompoundQueueData compound_que_data = 5; */
        if (message.compoundQueData)
            exports.CompoundQueueData.internalBinaryWrite(message.compoundQueData, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerCompoundMaterialRsp
 */
exports.PlayerCompoundMaterialRsp = new PlayerCompoundMaterialRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCompoundOutputReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCompoundOutputReq", [
            { no: 3, name: "compound_group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "compound_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 compound_group_id */ 3:
                    message.compoundGroupId = reader.uint32();
                    break;
                case /* optional uint32 compound_id */ 10:
                    message.compoundId = reader.uint32();
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
        /* optional uint32 compound_group_id = 3; */
        if (message.compoundGroupId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.compoundGroupId);
        /* optional uint32 compound_id = 10; */
        if (message.compoundId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.compoundId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCompoundOutputReq
 */
exports.TakeCompoundOutputReq = new TakeCompoundOutputReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCompoundOutputRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCompoundOutputRsp", [
            { no: 6, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_4.ItemParam },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* repeated com.midnights.game.ItemParam item_list */ 6:
                    message.itemList.push(define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ItemParam item_list = 6; */
        for (let i = 0; i < message.itemList.length; i++)
            define_4.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.TakeCompoundOutputRsp
 */
exports.TakeCompoundOutputRsp = new TakeCompoundOutputRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompoundDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CompoundDataNotify", [
            { no: 1, name: "unlock_compound_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "compound_que_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CompoundQueueData }
        ]);
    }
    create(value) {
        const message = { unlockCompoundList: [], compoundQueDataList: [] };
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
                case /* repeated uint32 unlock_compound_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockCompoundList.push(reader.uint32());
                    else
                        message.unlockCompoundList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.CompoundQueueData compound_que_data_list */ 9:
                    message.compoundQueDataList.push(exports.CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 unlock_compound_list = 1; */
        for (let i = 0; i < message.unlockCompoundList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unlockCompoundList[i]);
        /* repeated com.midnights.game.CompoundQueueData compound_que_data_list = 9; */
        for (let i = 0; i < message.compoundQueDataList.length; i++)
            exports.CompoundQueueData.internalBinaryWrite(message.compoundQueDataList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CompoundDataNotify
 */
exports.CompoundDataNotify = new CompoundDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCompoundDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCompoundDataReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetCompoundDataReq
 */
exports.GetCompoundDataReq = new GetCompoundDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCompoundDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCompoundDataRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "unlock_compound_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "compound_que_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CompoundQueueData }
        ]);
    }
    create(value) {
        const message = { unlockCompoundList: [], compoundQueDataList: [] };
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
                case /* repeated uint32 unlock_compound_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockCompoundList.push(reader.uint32());
                    else
                        message.unlockCompoundList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.CompoundQueueData compound_que_data_list */ 7:
                    message.compoundQueDataList.push(exports.CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 unlock_compound_list = 11; */
        for (let i = 0; i < message.unlockCompoundList.length; i++)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unlockCompoundList[i]);
        /* repeated com.midnights.game.CompoundQueueData compound_que_data_list = 7; */
        for (let i = 0; i < message.compoundQueDataList.length; i++)
            exports.CompoundQueueData.internalBinaryWrite(message.compoundQueDataList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetCompoundDataRsp
 */
exports.GetCompoundDataRsp = new GetCompoundDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerTimeNotify", [
            { no: 5, name: "server_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "player_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "is_paused", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint64 server_time */ 5:
                    message.serverTime = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 player_time */ 11:
                    message.playerTime = reader.uint64().toBigInt();
                    break;
                case /* optional bool is_paused */ 14:
                    message.isPaused = reader.bool();
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
        /* optional uint64 server_time = 5; */
        if (message.serverTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.serverTime);
        /* optional uint64 player_time = 11; */
        if (message.playerTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.playerTime);
        /* optional bool is_paused = 14; */
        if (message.isPaused !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isPaused);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerTimeNotify
 */
exports.PlayerTimeNotify = new PlayerTimeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSetPauseReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSetPauseReq", [
            { no: 1, name: "is_paused", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_paused */ 1:
                    message.isPaused = reader.bool();
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
        /* optional bool is_paused = 1; */
        if (message.isPaused !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isPaused);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerSetPauseReq
 */
exports.PlayerSetPauseReq = new PlayerSetPauseReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSetPauseRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSetPauseRsp", [
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
                case /* optional int32 retcode */ 15:
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
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerSetPauseRsp
 */
exports.PlayerSetPauseRsp = new PlayerSetPauseRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSetLanguageReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSetLanguageReq", [
            { no: 5, name: "language_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 language_type */ 5:
                    message.languageType = reader.uint32();
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
        /* optional uint32 language_type = 5; */
        if (message.languageType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.languageType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerSetLanguageReq
 */
exports.PlayerSetLanguageReq = new PlayerSetLanguageReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSetLanguageRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSetLanguageRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerSetLanguageRsp
 */
exports.PlayerSetLanguageRsp = new PlayerSetLanguageRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DataResVersionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DataResVersionNotify", [
            { no: 10, name: "client_silence_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "client_silence_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "res_version_config", kind: "message", T: () => define_8.ResVersionConfig },
            { no: 7, name: "is_data_need_relogin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.DataResVersionNotify.DataResVersionOpType", DataResVersionNotify_DataResVersionOpType] },
            { no: 2, name: "client_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "client_version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "client_silence_data_version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "client_md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string client_silence_md5 */ 10:
                    message.clientSilenceMd5 = reader.string();
                    break;
                case /* optional string client_silence_version_suffix */ 15:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* optional com.midnights.game.ResVersionConfig res_version_config */ 9:
                    message.resVersionConfig = define_8.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
                    break;
                case /* optional bool is_data_need_relogin */ 7:
                    message.isDataNeedRelogin = reader.bool();
                    break;
                case /* optional com.midnights.game.DataResVersionNotify.DataResVersionOpType op_type */ 12:
                    message.opType = reader.int32();
                    break;
                case /* optional uint32 client_data_version */ 2:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* optional string client_version_suffix */ 5:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* optional uint32 client_silence_data_version */ 1:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* optional string client_md5 */ 14:
                    message.clientMd5 = reader.string();
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
        /* optional string client_silence_md5 = 10; */
        if (message.clientSilenceMd5 !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.clientSilenceMd5);
        /* optional string client_silence_version_suffix = 15; */
        if (message.clientSilenceVersionSuffix !== undefined)
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* optional com.midnights.game.ResVersionConfig res_version_config = 9; */
        if (message.resVersionConfig)
            define_8.ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_data_need_relogin = 7; */
        if (message.isDataNeedRelogin !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isDataNeedRelogin);
        /* optional com.midnights.game.DataResVersionNotify.DataResVersionOpType op_type = 12; */
        if (message.opType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.opType);
        /* optional uint32 client_data_version = 2; */
        if (message.clientDataVersion !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* optional string client_version_suffix = 5; */
        if (message.clientVersionSuffix !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* optional uint32 client_silence_data_version = 1; */
        if (message.clientSilenceDataVersion !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* optional string client_md5 = 14; */
        if (message.clientMd5 !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.clientMd5);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DataResVersionNotify
 */
exports.DataResVersionNotify = new DataResVersionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyTaskInfo", [
            { no: 3, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "finish_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "daily_task_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_finished", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 reward_id */ 3:
                    message.rewardId = reader.uint32();
                    break;
                case /* optional uint32 progress */ 13:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 finish_progress */ 10:
                    message.finishProgress = reader.uint32();
                    break;
                case /* optional uint32 daily_task_id */ 4:
                    message.dailyTaskId = reader.uint32();
                    break;
                case /* optional bool is_finished */ 14:
                    message.isFinished = reader.bool();
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
        /* optional uint32 reward_id = 3; */
        if (message.rewardId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* optional uint32 progress = 13; */
        if (message.progress !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional uint32 finish_progress = 10; */
        if (message.finishProgress !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.finishProgress);
        /* optional uint32 daily_task_id = 4; */
        if (message.dailyTaskId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.dailyTaskId);
        /* optional bool is_finished = 14; */
        if (message.isFinished !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isFinished);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DailyTaskInfo
 */
exports.DailyTaskInfo = new DailyTaskInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyTaskDataNotify", [
            { no: 11, name: "score_reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "finished_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_taken_score_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 score_reward_id */ 11:
                    message.scoreRewardId = reader.uint32();
                    break;
                case /* optional uint32 finished_num */ 4:
                    message.finishedNum = reader.uint32();
                    break;
                case /* optional bool is_taken_score_reward */ 9:
                    message.isTakenScoreReward = reader.bool();
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
        /* optional uint32 score_reward_id = 11; */
        if (message.scoreRewardId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.scoreRewardId);
        /* optional uint32 finished_num = 4; */
        if (message.finishedNum !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.finishedNum);
        /* optional bool is_taken_score_reward = 9; */
        if (message.isTakenScoreReward !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isTakenScoreReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DailyTaskDataNotify
 */
exports.DailyTaskDataNotify = new DailyTaskDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskProgressNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyTaskProgressNotify", [
            { no: 12, name: "info", kind: "message", T: () => exports.DailyTaskInfo }
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
                case /* optional com.midnights.game.DailyTaskInfo info */ 12:
                    message.info = exports.DailyTaskInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
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
        /* optional com.midnights.game.DailyTaskInfo info = 12; */
        if (message.info)
            exports.DailyTaskInfo.internalBinaryWrite(message.info, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DailyTaskProgressNotify
 */
exports.DailyTaskProgressNotify = new DailyTaskProgressNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskScoreRewardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyTaskScoreRewardNotify", [
            { no: 14, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 reward_id */ 14:
                    message.rewardId = reader.uint32();
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
        /* optional uint32 reward_id = 14; */
        if (message.rewardId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.rewardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DailyTaskScoreRewardNotify
 */
exports.DailyTaskScoreRewardNotify = new DailyTaskScoreRewardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldOwnerDailyTaskNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldOwnerDailyTaskNotify", [
            { no: 2, name: "filter_city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "task_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DailyTaskInfo }
        ]);
    }
    create(value) {
        const message = { taskList: [] };
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
                case /* optional uint32 filter_city_id */ 2:
                    message.filterCityId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.DailyTaskInfo task_list */ 1:
                    message.taskList.push(exports.DailyTaskInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 filter_city_id = 2; */
        if (message.filterCityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.filterCityId);
        /* repeated com.midnights.game.DailyTaskInfo task_list = 1; */
        for (let i = 0; i < message.taskList.length; i++)
            exports.DailyTaskInfo.internalBinaryWrite(message.taskList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldOwnerDailyTaskNotify
 */
exports.WorldOwnerDailyTaskNotify = new WorldOwnerDailyTaskNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddRandTaskInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddRandTaskInfoNotify", [
            { no: 5, name: "rand_task_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "pos", kind: "message", T: () => define_3.Vector }
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
                case /* optional uint32 rand_task_id */ 5:
                    message.randTaskId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 13:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* optional uint32 rand_task_id = 5; */
        if (message.randTaskId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.randTaskId);
        /* optional com.midnights.game.Vector pos = 13; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddRandTaskInfoNotify
 */
exports.AddRandTaskInfoNotify = new AddRandTaskInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveRandTaskInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RemoveRandTaskInfoNotify", [
            { no: 9, name: "is_succ", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.RemoveRandTaskInfoNotify.FinishReason", RemoveRandTaskInfoNotify_FinishReason] },
            { no: 13, name: "rand_task_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_succ */ 9:
                    message.isSucc = reader.bool();
                    break;
                case /* optional com.midnights.game.RemoveRandTaskInfoNotify.FinishReason reason */ 10:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 rand_task_id */ 13:
                    message.randTaskId = reader.uint32();
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
        /* optional bool is_succ = 9; */
        if (message.isSucc !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isSucc);
        /* optional com.midnights.game.RemoveRandTaskInfoNotify.FinishReason reason = 10; */
        if (message.reason !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 rand_task_id = 13; */
        if (message.randTaskId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.randTaskId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RemoveRandTaskInfoNotify
 */
exports.RemoveRandTaskInfoNotify = new RemoveRandTaskInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakePlayerLevelRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakePlayerLevelRewardReq", [
            { no: 3, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 level */ 3:
                    message.level = reader.uint32();
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
        /* optional uint32 level = 3; */
        if (message.level !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakePlayerLevelRewardReq
 */
exports.TakePlayerLevelRewardReq = new TakePlayerLevelRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakePlayerLevelRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakePlayerLevelRewardRsp", [
            { no: 9, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 reward_id */ 9:
                    message.rewardId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 level */ 6:
                    message.level = reader.uint32();
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
        /* optional uint32 reward_id = 9; */
        if (message.rewardId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 level = 6; */
        if (message.level !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakePlayerLevelRewardRsp
 */
exports.TakePlayerLevelRewardRsp = new TakePlayerLevelRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLevelRewardUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLevelRewardUpdateNotify", [
            { no: 9, name: "level_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelList: [] };
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
                case /* repeated uint32 level_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.levelList.push(reader.uint32());
                    else
                        message.levelList.push(reader.uint32());
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
        /* repeated uint32 level_list = 9; */
        for (let i = 0; i < message.levelList.length; i++)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.levelList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerLevelRewardUpdateNotify
 */
exports.PlayerLevelRewardUpdateNotify = new PlayerLevelRewardUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GivingRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GivingRecord", [
            { no: 9, name: "is_finished", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_gadget_giving", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "giving_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "last_group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "material_cnt_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { materialCntMap: {} };
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
                case /* optional bool is_finished */ 9:
                    message.isFinished = reader.bool();
                    break;
                case /* optional uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* optional bool is_gadget_giving */ 8:
                    message.isGadgetGiving = reader.bool();
                    break;
                case /* optional uint32 giving_id */ 3:
                    message.givingId = reader.uint32();
                    break;
                case /* optional uint32 last_group_id */ 6:
                    message.lastGroupId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* map<uint32, uint32> material_cnt_map */ 15:
                    this.binaryReadMap15(message.materialCntMap, reader, options);
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GivingRecord.material_cnt_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_finished = 9; */
        if (message.isFinished !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isFinished);
        /* optional uint32 group_id = 5; */
        if (message.groupId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional bool is_gadget_giving = 8; */
        if (message.isGadgetGiving !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isGadgetGiving);
        /* optional uint32 giving_id = 3; */
        if (message.givingId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.givingId);
        /* optional uint32 last_group_id = 6; */
        if (message.lastGroupId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.lastGroupId);
        /* optional uint32 config_id = 2; */
        if (message.configId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configId);
        /* map<uint32, uint32> material_cnt_map = 15; */
        for (let k of Object.keys(message.materialCntMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.materialCntMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GivingRecord
 */
exports.GivingRecord = new GivingRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GivingRecordNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GivingRecordNotify", [
            { no: 14, name: "giving_record_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.GivingRecord }
        ]);
    }
    create(value) {
        const message = { givingRecordList: [] };
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
                case /* repeated com.midnights.game.GivingRecord giving_record_list */ 14:
                    message.givingRecordList.push(exports.GivingRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.GivingRecord giving_record_list = 14; */
        for (let i = 0; i < message.givingRecordList.length; i++)
            exports.GivingRecord.internalBinaryWrite(message.givingRecordList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GivingRecordNotify
 */
exports.GivingRecordNotify = new GivingRecordNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GivingRecordChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GivingRecordChangeNotify", [
            { no: 11, name: "is_deactive", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "giving_record", kind: "message", T: () => exports.GivingRecord }
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
                case /* optional bool is_deactive */ 11:
                    message.isDeactive = reader.bool();
                    break;
                case /* optional com.midnights.game.GivingRecord giving_record */ 15:
                    message.givingRecord = exports.GivingRecord.internalBinaryRead(reader, reader.uint32(), options, message.givingRecord);
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
        /* optional bool is_deactive = 11; */
        if (message.isDeactive !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isDeactive);
        /* optional com.midnights.game.GivingRecord giving_record = 15; */
        if (message.givingRecord)
            exports.GivingRecord.internalBinaryWrite(message.givingRecord, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GivingRecordChangeNotify
 */
exports.GivingRecordChangeNotify = new GivingRecordChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemGivingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ItemGivingReq", [
            { no: 15, name: "item_guid_count_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 13, name: "giving_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "item_param_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_4.ItemParam },
            { no: 2, name: "item_giving_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ItemGivingReq.ItemGivingType", ItemGivingReq_ItemGivingType] }
        ]);
    }
    create(value) {
        const message = { itemGuidCountMap: {}, itemParamList: [] };
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
                case /* map<uint64, uint32> item_guid_count_map */ 15:
                    this.binaryReadMap15(message.itemGuidCountMap, reader, options);
                    break;
                case /* optional uint32 giving_id */ 13:
                    message.givingId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_param_list */ 4:
                    message.itemParamList.push(define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.ItemGivingReq.ItemGivingType item_giving_type */ 2:
                    message.itemGivingType = reader.int32();
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
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ItemGivingReq.item_guid_count_map");
            }
        }
        map[key ?? "0"] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, uint32> item_guid_count_map = 15; */
        for (let k of Object.keys(message.itemGuidCountMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k).tag(2, runtime_1.WireType.Varint).uint32(message.itemGuidCountMap[k]).join();
        /* optional uint32 giving_id = 13; */
        if (message.givingId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.givingId);
        /* repeated com.midnights.game.ItemParam item_param_list = 4; */
        for (let i = 0; i < message.itemParamList.length; i++)
            define_4.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ItemGivingReq.ItemGivingType item_giving_type = 2; */
        if (message.itemGivingType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.itemGivingType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ItemGivingReq
 */
exports.ItemGivingReq = new ItemGivingReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemGivingRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ItemGivingRsp", [
            { no: 1, name: "giving_group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "giving_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 giving_group_id */ 1:
                    message.givingGroupId = reader.uint32();
                    break;
                case /* optional uint32 giving_id */ 13:
                    message.givingId = reader.uint32();
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
        /* optional uint32 giving_group_id = 1; */
        if (message.givingGroupId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.givingGroupId);
        /* optional uint32 giving_id = 13; */
        if (message.givingId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.givingId);
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
 * @generated MessageType for protobuf message com.midnights.game.ItemGivingRsp
 */
exports.ItemGivingRsp = new ItemGivingRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCookArgsReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCookArgsReq", [
            { no: 10, name: "assist_avatar", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "recipe_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 assist_avatar */ 10:
                    message.assistAvatar = reader.uint32();
                    break;
                case /* optional uint32 recipe_id */ 11:
                    message.recipeId = reader.uint32();
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
        /* optional uint32 assist_avatar = 10; */
        if (message.assistAvatar !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.assistAvatar);
        /* optional uint32 recipe_id = 11; */
        if (message.recipeId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.recipeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCookArgsReq
 */
exports.PlayerCookArgsReq = new PlayerCookArgsReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCookArgsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCookArgsRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "qte_range_ratio", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
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
                case /* optional float qte_range_ratio */ 12:
                    message.qteRangeRatio = reader.float();
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
        /* optional float qte_range_ratio = 12; */
        if (message.qteRangeRatio !== undefined)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.qteRangeRatio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCookArgsRsp
 */
exports.PlayerCookArgsRsp = new PlayerCookArgsRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLuaShellNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLuaShellNotify", [
            { no: 7, name: "shell_type", kind: "enum", opt: true, T: () => ["com.midnights.game.LuaShellType", define_2.LuaShellType] },
            { no: 5, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "lua_shell", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 10, name: "use_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.LuaShellType shell_type */ 7:
                    message.shellType = reader.int32();
                    break;
                case /* optional uint32 id */ 5:
                    message.id = reader.uint32();
                    break;
                case /* optional bytes lua_shell */ 12:
                    message.luaShell = reader.bytes();
                    break;
                case /* optional uint32 use_type */ 10:
                    message.useType = reader.uint32();
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
        /* optional com.midnights.game.LuaShellType shell_type = 7; */
        if (message.shellType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.shellType);
        /* optional uint32 id = 5; */
        if (message.id !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.id);
        /* optional bytes lua_shell = 12; */
        if (message.luaShell !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).bytes(message.luaShell);
        /* optional uint32 use_type = 10; */
        if (message.useType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.useType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerLuaShellNotify
 */
exports.PlayerLuaShellNotify = new PlayerLuaShellNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerDisconnectClientNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerDisconnectClientNotify", [
            { no: 10, name: "data", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 data */ 10:
                    message.data = reader.uint32();
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
        /* optional uint32 data = 10; */
        if (message.data !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerDisconnectClientNotify
 */
exports.ServerDisconnectClientNotify = new ServerDisconnectClientNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AntiAddictNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AntiAddictNotify", [
            { no: 6, name: "msg_type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "msg", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "level", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional int32 msg_type */ 6:
                    message.msgType = reader.int32();
                    break;
                case /* optional string msg */ 3:
                    message.msg = reader.string();
                    break;
                case /* optional string level */ 5:
                    message.level = reader.string();
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
        /* optional int32 msg_type = 6; */
        if (message.msgType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.msgType);
        /* optional string msg = 3; */
        if (message.msg !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.msg);
        /* optional string level = 5; */
        if (message.level !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AntiAddictNotify
 */
exports.AntiAddictNotify = new AntiAddictNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerForceExitReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerForceExitReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerForceExitReq
 */
exports.PlayerForceExitReq = new PlayerForceExitReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerForceExitRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerForceExitRsp", [
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
                case /* optional int32 retcode */ 15:
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
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerForceExitRsp
 */
exports.PlayerForceExitRsp = new PlayerForceExitRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerInjectFixNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerInjectFixNotify", [
            { no: 13, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "inject_fix", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ }
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
                case /* optional uint32 id */ 13:
                    message.id = reader.uint32();
                    break;
                case /* optional bytes inject_fix */ 10:
                    message.injectFix = reader.bytes();
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
        /* optional uint32 id = 13; */
        if (message.id !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.id);
        /* optional bytes inject_fix = 10; */
        if (message.injectFix !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).bytes(message.injectFix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerInjectFixNotify
 */
exports.PlayerInjectFixNotify = new PlayerInjectFixNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TaskVar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TaskVar", [
            { no: 8, name: "key", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "value_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { valueList: [] };
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
                case /* optional uint32 key */ 8:
                    message.key = reader.uint32();
                    break;
                case /* repeated int32 value_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.valueList.push(reader.int32());
                    else
                        message.valueList.push(reader.int32());
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
        /* optional uint32 key = 8; */
        if (message.key !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.key);
        /* repeated int32 value_list = 6; */
        for (let i = 0; i < message.valueList.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.valueList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TaskVar
 */
exports.TaskVar = new TaskVar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TaskVarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TaskVarNotify", [
            { no: 7, name: "task_var_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TaskVar }
        ]);
    }
    create(value) {
        const message = { taskVarList: [] };
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
                case /* repeated com.midnights.game.TaskVar task_var_list */ 7:
                    message.taskVarList.push(exports.TaskVar.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.TaskVar task_var_list = 7; */
        for (let i = 0; i < message.taskVarList.length; i++)
            exports.TaskVar.internalBinaryWrite(message.taskVarList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TaskVarNotify
 */
exports.TaskVarNotify = new TaskVarNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientLockGameTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientLockGameTimeNotify", [
            { no: 5, name: "is_lock", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_lock */ 5:
                    message.isLock = reader.bool();
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
        /* optional bool is_lock = 5; */
        if (message.isLock !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isLock);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientLockGameTimeNotify
 */
exports.ClientLockGameTimeNotify = new ClientLockGameTimeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNextResourceInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetNextResourceInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetNextResourceInfoReq
 */
exports.GetNextResourceInfoReq = new GetNextResourceInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNextResourceInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetNextResourceInfoRsp", [
            { no: 14, name: "next_resource_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "next_res_version_config", kind: "message", T: () => define_8.ResVersionConfig },
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
                case /* optional string next_resource_url */ 14:
                    message.nextResourceUrl = reader.string();
                    break;
                case /* optional com.midnights.game.ResVersionConfig next_res_version_config */ 2:
                    message.nextResVersionConfig = define_8.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
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
        /* optional string next_resource_url = 14; */
        if (message.nextResourceUrl !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.nextResourceUrl);
        /* optional com.midnights.game.ResVersionConfig next_res_version_config = 2; */
        if (message.nextResVersionConfig)
            define_8.ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GetNextResourceInfoRsp
 */
exports.GetNextResourceInfoRsp = new GetNextResourceInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdjustWorldLevelReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AdjustWorldLevelReq", [
            { no: 8, name: "expect_world_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cur_world_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 expect_world_level */ 8:
                    message.expectWorldLevel = reader.uint32();
                    break;
                case /* optional uint32 cur_world_level */ 9:
                    message.curWorldLevel = reader.uint32();
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
        /* optional uint32 expect_world_level = 8; */
        if (message.expectWorldLevel !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.expectWorldLevel);
        /* optional uint32 cur_world_level = 9; */
        if (message.curWorldLevel !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curWorldLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AdjustWorldLevelReq
 */
exports.AdjustWorldLevelReq = new AdjustWorldLevelReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdjustWorldLevelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AdjustWorldLevelRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "cd_over_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "after_world_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 cd_over_time */ 15:
                    message.cdOverTime = reader.uint32();
                    break;
                case /* optional uint32 after_world_level */ 14:
                    message.afterWorldLevel = reader.uint32();
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
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 cd_over_time = 15; */
        if (message.cdOverTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.cdOverTime);
        /* optional uint32 after_world_level = 14; */
        if (message.afterWorldLevel !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.afterWorldLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AdjustWorldLevelRsp
 */
exports.AdjustWorldLevelRsp = new AdjustWorldLevelRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskFilterCityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyTaskFilterCityReq", [
            { no: 8, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 8:
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
        /* optional uint32 city_id = 8; */
        if (message.cityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DailyTaskFilterCityReq
 */
exports.DailyTaskFilterCityReq = new DailyTaskFilterCityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskFilterCityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyTaskFilterCityRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
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
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
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
 * @generated MessageType for protobuf message com.midnights.game.DailyTaskFilterCityRsp
 */
exports.DailyTaskFilterCityRsp = new DailyTaskFilterCityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskUnlockedCitiesNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DailyTaskUnlockedCitiesNotify", [
            { no: 12, name: "unlocked_city_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockedCityList: [] };
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
                case /* repeated uint32 unlocked_city_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockedCityList.push(reader.uint32());
                    else
                        message.unlockedCityList.push(reader.uint32());
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
        /* repeated uint32 unlocked_city_list = 12; */
        for (let i = 0; i < message.unlockedCityList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unlockedCityList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DailyTaskUnlockedCitiesNotify
 */
exports.DailyTaskUnlockedCitiesNotify = new DailyTaskUnlockedCitiesNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExclusiveRuleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExclusiveRuleInfo", [
            { no: 1, name: "object_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "rule_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { objectIdList: [] };
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
                case /* repeated uint32 object_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.objectIdList.push(reader.uint32());
                    else
                        message.objectIdList.push(reader.uint32());
                    break;
                case /* optional uint32 rule_type */ 10:
                    message.ruleType = reader.uint32();
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
        /* repeated uint32 object_id_list = 1; */
        for (let i = 0; i < message.objectIdList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.objectIdList[i]);
        /* optional uint32 rule_type = 10; */
        if (message.ruleType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.ruleType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExclusiveRuleInfo
 */
exports.ExclusiveRuleInfo = new ExclusiveRuleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExclusiveRuleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExclusiveRuleNotify", [
            { no: 5, name: "rule_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ExclusiveRuleInfo }
        ]);
    }
    create(value) {
        const message = { ruleInfoList: [] };
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
                case /* repeated com.midnights.game.ExclusiveRuleInfo rule_info_list */ 5:
                    message.ruleInfoList.push(exports.ExclusiveRuleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ExclusiveRuleInfo rule_info_list = 5; */
        for (let i = 0; i < message.ruleInfoList.length; i++)
            exports.ExclusiveRuleInfo.internalBinaryWrite(message.ruleInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExclusiveRuleNotify
 */
exports.ExclusiveRuleNotify = new ExclusiveRuleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompoundUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CompoundUnlockNotify", [
            { no: 3, name: "compound_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 compound_id */ 3:
                    message.compoundId = reader.uint32();
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
        /* optional uint32 compound_id = 3; */
        if (message.compoundId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.compoundId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CompoundUnlockNotify
 */
exports.CompoundUnlockNotify = new CompoundUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationSkillRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GameplayRecommendationSkillRequest", [
            { no: 1, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 skill_depot_id */ 1:
                    message.skillDepotId = reader.uint32();
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
        /* optional uint32 skill_depot_id = 1; */
        if (message.skillDepotId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GameplayRecommendationSkillRequest
 */
exports.GameplayRecommendationSkillRequest = new GameplayRecommendationSkillRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationReliquaryRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GameplayRecommendationReliquaryRequest", [
            { no: 6, name: "equip_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 equip_type */ 6:
                    message.equipType = reader.uint32();
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
        /* optional uint32 equip_type = 6; */
        if (message.equipType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.equipType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GameplayRecommendationReliquaryRequest
 */
exports.GameplayRecommendationReliquaryRequest = new GameplayRecommendationReliquaryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationElementReliquaryRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GameplayRecommendationElementReliquaryRequest", [
            { no: 9, name: "equip_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "element_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 equip_type */ 9:
                    message.equipType = reader.uint32();
                    break;
                case /* optional uint32 element_type */ 12:
                    message.elementType = reader.uint32();
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
        /* optional uint32 equip_type = 9; */
        if (message.equipType !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.equipType);
        /* optional uint32 element_type = 12; */
        if (message.elementType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.elementType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GameplayRecommendationElementReliquaryRequest
 */
exports.GameplayRecommendationElementReliquaryRequest = new GameplayRecommendationElementReliquaryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetGameplayRecommendationReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetGameplayRecommendationReq", [
            { no: 9, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 553, name: "skill_request", kind: "message", oneof: "detail", T: () => exports.GameplayRecommendationSkillRequest },
            { no: 1993, name: "reliquary_request", kind: "message", oneof: "detail", T: () => exports.GameplayRecommendationReliquaryRequest },
            { no: 1489, name: "element_reliquary_request", kind: "message", oneof: "detail", T: () => exports.GameplayRecommendationElementReliquaryRequest }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
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
                case /* optional uint32 avatar_id */ 9:
                    message.avatarId = reader.uint32();
                    break;
                case /* com.midnights.game.GameplayRecommendationSkillRequest skill_request */ 553:
                    message.detail = {
                        oneofKind: "skillRequest",
                        skillRequest: exports.GameplayRecommendationSkillRequest.internalBinaryRead(reader, reader.uint32(), options, message.detail.skillRequest)
                    };
                    break;
                case /* com.midnights.game.GameplayRecommendationReliquaryRequest reliquary_request */ 1993:
                    message.detail = {
                        oneofKind: "reliquaryRequest",
                        reliquaryRequest: exports.GameplayRecommendationReliquaryRequest.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquaryRequest)
                    };
                    break;
                case /* com.midnights.game.GameplayRecommendationElementReliquaryRequest element_reliquary_request */ 1489:
                    message.detail = {
                        oneofKind: "elementReliquaryRequest",
                        elementReliquaryRequest: exports.GameplayRecommendationElementReliquaryRequest.internalBinaryRead(reader, reader.uint32(), options, message.detail.elementReliquaryRequest)
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
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 9; */
        if (message.avatarId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* com.midnights.game.GameplayRecommendationSkillRequest skill_request = 553; */
        if (message.detail.oneofKind === "skillRequest")
            exports.GameplayRecommendationSkillRequest.internalBinaryWrite(message.detail.skillRequest, writer.tag(553, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GameplayRecommendationReliquaryRequest reliquary_request = 1993; */
        if (message.detail.oneofKind === "reliquaryRequest")
            exports.GameplayRecommendationReliquaryRequest.internalBinaryWrite(message.detail.reliquaryRequest, writer.tag(1993, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GameplayRecommendationElementReliquaryRequest element_reliquary_request = 1489; */
        if (message.detail.oneofKind === "elementReliquaryRequest")
            exports.GameplayRecommendationElementReliquaryRequest.internalBinaryWrite(message.detail.elementReliquaryRequest, writer.tag(1489, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetGameplayRecommendationReq
 */
exports.GetGameplayRecommendationReq = new GetGameplayRecommendationReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationSkillResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GameplayRecommendationSkillResponse", [
            { no: 13, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "skill_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillIdList: [] };
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
                case /* optional uint32 skill_depot_id */ 13:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* repeated uint32 skill_id_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillIdList.push(reader.uint32());
                    else
                        message.skillIdList.push(reader.uint32());
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
        /* optional uint32 skill_depot_id = 13; */
        if (message.skillDepotId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        /* repeated uint32 skill_id_list = 9; */
        for (let i = 0; i < message.skillIdList.length; i++)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.skillIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GameplayRecommendationSkillResponse
 */
exports.GameplayRecommendationSkillResponse = new GameplayRecommendationSkillResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationReliquaryMainPropData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GameplayRecommendationReliquaryMainPropData", [
            { no: 1, name: "permillage", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "main_prop_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 permillage */ 1:
                    message.permillage = reader.uint32();
                    break;
                case /* optional uint32 main_prop_id */ 12:
                    message.mainPropId = reader.uint32();
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
        /* optional uint32 permillage = 1; */
        if (message.permillage !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.permillage);
        /* optional uint32 main_prop_id = 12; */
        if (message.mainPropId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.mainPropId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GameplayRecommendationReliquaryMainPropData
 */
exports.GameplayRecommendationReliquaryMainPropData = new GameplayRecommendationReliquaryMainPropData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationReliquaryResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GameplayRecommendationReliquaryResponse", [
            { no: 8, name: "main_prop_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.GameplayRecommendationReliquaryMainPropData },
            { no: 3, name: "equip_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mainPropDataList: [] };
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
                case /* repeated com.midnights.game.GameplayRecommendationReliquaryMainPropData main_prop_data_list */ 8:
                    message.mainPropDataList.push(exports.GameplayRecommendationReliquaryMainPropData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 equip_type */ 3:
                    message.equipType = reader.uint32();
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
        /* repeated com.midnights.game.GameplayRecommendationReliquaryMainPropData main_prop_data_list = 8; */
        for (let i = 0; i < message.mainPropDataList.length; i++)
            exports.GameplayRecommendationReliquaryMainPropData.internalBinaryWrite(message.mainPropDataList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 equip_type = 3; */
        if (message.equipType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.equipType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GameplayRecommendationReliquaryResponse
 */
exports.GameplayRecommendationReliquaryResponse = new GameplayRecommendationReliquaryResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GameplayRecommendationElementReliquaryResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GameplayRecommendationElementReliquaryResponse", [
            { no: 11, name: "element_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "main_prop_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.GameplayRecommendationReliquaryMainPropData },
            { no: 15, name: "equip_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mainPropDataList: [] };
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
                case /* optional uint32 element_type */ 11:
                    message.elementType = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GameplayRecommendationReliquaryMainPropData main_prop_data_list */ 5:
                    message.mainPropDataList.push(exports.GameplayRecommendationReliquaryMainPropData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 equip_type */ 15:
                    message.equipType = reader.uint32();
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
        /* optional uint32 element_type = 11; */
        if (message.elementType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.elementType);
        /* repeated com.midnights.game.GameplayRecommendationReliquaryMainPropData main_prop_data_list = 5; */
        for (let i = 0; i < message.mainPropDataList.length; i++)
            exports.GameplayRecommendationReliquaryMainPropData.internalBinaryWrite(message.mainPropDataList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 equip_type = 15; */
        if (message.equipType !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.equipType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GameplayRecommendationElementReliquaryResponse
 */
exports.GameplayRecommendationElementReliquaryResponse = new GameplayRecommendationElementReliquaryResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetGameplayRecommendationRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetGameplayRecommendationRsp", [
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1022, name: "skill_response", kind: "message", oneof: "detail", T: () => exports.GameplayRecommendationSkillResponse },
            { no: 196, name: "reliquary_response", kind: "message", oneof: "detail", T: () => exports.GameplayRecommendationReliquaryResponse },
            { no: 167, name: "element_reliquary_response", kind: "message", oneof: "detail", T: () => exports.GameplayRecommendationElementReliquaryResponse }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
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
                case /* optional uint32 avatar_id */ 15:
                    message.avatarId = reader.uint32();
                    break;
                case /* com.midnights.game.GameplayRecommendationSkillResponse skill_response */ 1022:
                    message.detail = {
                        oneofKind: "skillResponse",
                        skillResponse: exports.GameplayRecommendationSkillResponse.internalBinaryRead(reader, reader.uint32(), options, message.detail.skillResponse)
                    };
                    break;
                case /* com.midnights.game.GameplayRecommendationReliquaryResponse reliquary_response */ 196:
                    message.detail = {
                        oneofKind: "reliquaryResponse",
                        reliquaryResponse: exports.GameplayRecommendationReliquaryResponse.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquaryResponse)
                    };
                    break;
                case /* com.midnights.game.GameplayRecommendationElementReliquaryResponse element_reliquary_response */ 167:
                    message.detail = {
                        oneofKind: "elementReliquaryResponse",
                        elementReliquaryResponse: exports.GameplayRecommendationElementReliquaryResponse.internalBinaryRead(reader, reader.uint32(), options, message.detail.elementReliquaryResponse)
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
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 avatar_id = 15; */
        if (message.avatarId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* com.midnights.game.GameplayRecommendationSkillResponse skill_response = 1022; */
        if (message.detail.oneofKind === "skillResponse")
            exports.GameplayRecommendationSkillResponse.internalBinaryWrite(message.detail.skillResponse, writer.tag(1022, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GameplayRecommendationReliquaryResponse reliquary_response = 196; */
        if (message.detail.oneofKind === "reliquaryResponse")
            exports.GameplayRecommendationReliquaryResponse.internalBinaryWrite(message.detail.reliquaryResponse, writer.tag(196, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GameplayRecommendationElementReliquaryResponse element_reliquary_response = 167; */
        if (message.detail.oneofKind === "elementReliquaryResponse")
            exports.GameplayRecommendationElementReliquaryResponse.internalBinaryWrite(message.detail.elementReliquaryResponse, writer.tag(167, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetGameplayRecommendationRsp
 */
exports.GetGameplayRecommendationRsp = new GetGameplayRecommendationRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeBackGivingItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeBackGivingItemReq", [
            { no: 4, name: "giving_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 giving_id */ 4:
                    message.givingId = reader.uint32();
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
        /* optional uint32 giving_id = 4; */
        if (message.givingId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.givingId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeBackGivingItemReq
 */
exports.TakeBackGivingItemReq = new TakeBackGivingItemReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeBackGivingItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeBackGivingItemRsp", [
            { no: 10, name: "giving_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 giving_id */ 10:
                    message.givingId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 6:
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
        /* optional uint32 giving_id = 10; */
        if (message.givingId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.givingId);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeBackGivingItemRsp
 */
exports.TakeBackGivingItemRsp = new TakeBackGivingItemRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerNicknameAuditDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerNicknameAuditDataNotify", [
            { no: 13, name: "info", kind: "message", T: () => define_1.ContentAuditInfo }
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
                case /* optional com.midnights.game.ContentAuditInfo info */ 13:
                    message.info = define_1.ContentAuditInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
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
        /* optional com.midnights.game.ContentAuditInfo info = 13; */
        if (message.info)
            define_1.ContentAuditInfo.internalBinaryWrite(message.info, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerNicknameAuditDataNotify
 */
exports.PlayerNicknameAuditDataNotify = new PlayerNicknameAuditDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerNicknameNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerNicknameNotify", [
            { no: 7, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string nickname */ 7:
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
        /* optional string nickname = 7; */
        if (message.nickname !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.nickname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerNicknameNotify
 */
exports.PlayerNicknameNotify = new PlayerNicknameNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NicknameAuditConfigNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NicknameAuditConfigNotify", [
            { no: 8, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "submit_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_open */ 8:
                    message.isOpen = reader.bool();
                    break;
                case /* optional uint32 submit_limit */ 12:
                    message.submitLimit = reader.uint32();
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
        /* optional bool is_open = 8; */
        if (message.isOpen !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isOpen);
        /* optional uint32 submit_limit = 12; */
        if (message.submitLimit !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.submitLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NicknameAuditConfigNotify
 */
exports.NicknameAuditConfigNotify = new NicknameAuditConfigNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadNicknameAuditReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReadNicknameAuditReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ReadNicknameAuditReq
 */
exports.ReadNicknameAuditReq = new ReadNicknameAuditReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadNicknameAuditRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReadNicknameAuditRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.ReadNicknameAuditRsp
 */
exports.ReadNicknameAuditRsp = new ReadNicknameAuditRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCompoundMaterialBoostReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCompoundMaterialBoostReq", [
            { no: 8, name: "is_boost_all", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "target_compound_group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "consume_material_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "consume_material_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_boost_all */ 8:
                    message.isBoostAll = reader.bool();
                    break;
                case /* optional uint32 target_compound_group_id */ 14:
                    message.targetCompoundGroupId = reader.uint32();
                    break;
                case /* optional uint32 consume_material_id */ 9:
                    message.consumeMaterialId = reader.uint32();
                    break;
                case /* optional uint32 consume_material_count */ 1:
                    message.consumeMaterialCount = reader.uint32();
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
        /* optional bool is_boost_all = 8; */
        if (message.isBoostAll !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isBoostAll);
        /* optional uint32 target_compound_group_id = 14; */
        if (message.targetCompoundGroupId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.targetCompoundGroupId);
        /* optional uint32 consume_material_id = 9; */
        if (message.consumeMaterialId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.consumeMaterialId);
        /* optional uint32 consume_material_count = 1; */
        if (message.consumeMaterialCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.consumeMaterialCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCompoundMaterialBoostReq
 */
exports.PlayerCompoundMaterialBoostReq = new PlayerCompoundMaterialBoostReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCompoundMaterialBoostRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCompoundMaterialBoostRsp", [
            { no: 2, name: "take_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_4.ItemParam },
            { no: 6, name: "take_status", kind: "enum", opt: true, T: () => ["com.midnights.game.CompoundBoostTakeStatusType", CompoundBoostTakeStatusType] },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "compound_que_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CompoundQueueData }
        ]);
    }
    create(value) {
        const message = { takeItemList: [], compoundQueDataList: [] };
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
                case /* repeated com.midnights.game.ItemParam take_item_list */ 2:
                    message.takeItemList.push(define_4.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.CompoundBoostTakeStatusType take_status */ 6:
                    message.takeStatus = reader.int32();
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.CompoundQueueData compound_que_data_list */ 1:
                    message.compoundQueDataList.push(exports.CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ItemParam take_item_list = 2; */
        for (let i = 0; i < message.takeItemList.length; i++)
            define_4.ItemParam.internalBinaryWrite(message.takeItemList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.CompoundBoostTakeStatusType take_status = 6; */
        if (message.takeStatus !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.takeStatus);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.CompoundQueueData compound_que_data_list = 1; */
        for (let i = 0; i < message.compoundQueDataList.length; i++)
            exports.CompoundQueueData.internalBinaryWrite(message.compoundQueDataList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCompoundMaterialBoostRsp
 */
exports.PlayerCompoundMaterialBoostRsp = new PlayerCompoundMaterialBoostRsp$Type();
