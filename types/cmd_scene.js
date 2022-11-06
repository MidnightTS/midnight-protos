"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkEntityInMinMapNotify_CmdId = exports.EndCameraSceneLookNotify_CmdId = exports.BeginCameraSceneLookNotify_CmdId = exports.BeginCameraSceneLookNotify_KeepRotType = exports.WorldPlayerLocationNotify_CmdId = exports.ScenePlayerInfoNotify_CmdId = exports.SceneAreaWeatherNotify_CmdId = exports.ExitSceneWeatherAreaNotify_CmdId = exports.EnterSceneWeatherAreaNotify_CmdId = exports.ClientTransmitRsp_CmdId = exports.ClientTransmitReq_CmdId = exports.GetAreaExplorePointRsp_CmdId = exports.GetAreaExplorePointReq_CmdId = exports.EntityForceSyncRsp_CmdId = exports.EntityForceSyncReq_CmdId = exports.EnterWorldAreaRsp_CmdId = exports.EnterWorldAreaReq_CmdId = exports.SceneForceLockNotify_CmdId = exports.SceneForceUnlockNotify_CmdId = exports.SceneDestroyEntityRsp_CmdId = exports.SceneDestroyEntityReq_CmdId = exports.SceneCreateEntityRsp_CmdId = exports.SceneCreateEntityReq_CmdId = exports.SceneEntityDrownRsp_CmdId = exports.SceneEntityDrownReq_CmdId = exports.SceneAreaUnlockNotify_CmdId = exports.GetSceneAreaRsp_CmdId = exports.GetSceneAreaReq_CmdId = exports.EntityJumpNotify_CmdId = exports.EntityJumpNotify_Type = exports.SceneTransToPointRsp_CmdId = exports.SceneTransToPointReq_CmdId = exports.ScenePointUnlockNotify_CmdId = exports.ExitTransPointRegionNotify_CmdId = exports.EnterTransPointRegionNotify_CmdId = exports.GetScenePointRsp_CmdId = exports.GetScenePointReq_CmdId = exports.ScenePlayerLocationNotify_CmdId = exports.SceneEntityMoveNotify_CmdId = exports.SceneAvatarStaminaStepRsp_CmdId = exports.SceneAvatarStaminaStepReq_CmdId = exports.SceneEntityMoveRsp_CmdId = exports.SceneEntityMoveReq_CmdId = exports.SceneEntityDisappearNotify_CmdId = exports.SceneEntityAppearNotify_CmdId = exports.SceneInitFinishRsp_CmdId = exports.SceneInitFinishReq_CmdId = exports.LeaveSceneRsp_CmdId = exports.LeaveSceneReq_CmdId = exports.PlayerEnterSceneNotify_CmdId = void 0;
exports.SceneEntitiesMovesRsp_CmdId = exports.SceneEntitiesMovesReq_CmdId = exports.ClientScriptEventNotify_CmdId = exports.CutSceneEndNotify_CmdId = exports.CutSceneFinishNotify_CmdId = exports.CutSceneBeginNotify_CmdId = exports.ExecuteGadgetLuaRsp_CmdId = exports.ExecuteGadgetLuaReq_CmdId = exports.SetSceneWeatherAreaRsp_CmdId = exports.SetSceneWeatherAreaReq_CmdId = exports.JoinPlayerFailNotify_CmdId = exports.WorldPlayerReviveRsp_CmdId = exports.WorldPlayerReviveReq_CmdId = exports.WorldPlayerDieNotify_CmdId = exports.EnterSceneDoneRsp_CmdId = exports.EnterSceneDoneReq_CmdId = exports.EnterScenePeerNotify_CmdId = exports.EnterSceneReadyRsp_CmdId = exports.EnterSceneReadyReq_CmdId = exports.SceneTimeNotify_CmdId = exports.AllSeenMonsterNotify_CmdId = exports.AddSeenMonsterNotify_CmdId = exports.SeeMonsterRsp_CmdId = exports.SeeMonsterReq_CmdId = exports.BackMyWorldRsp_CmdId = exports.BackMyWorldReq_CmdId = exports.HitClientTrivialNotify_CmdId = exports.SceneKickPlayerNotify_CmdId = exports.SceneKickPlayerRsp_CmdId = exports.SceneKickPlayerReq_CmdId = exports.JoinPlayerSceneRsp_CmdId = exports.JoinPlayerSceneReq_CmdId = exports.PlayerEnterSceneInfoNotify_CmdId = exports.ClientPauseNotify_CmdId = exports.SealBattleProgressNotify_CmdId = exports.SealBattleEndNotify_CmdId = exports.SealBattleBeginNotify_CmdId = exports.PersonalSceneJumpRsp_CmdId = exports.PersonalSceneJumpReq_CmdId = exports.ScenePlayerSoundNotify_CmdId = exports.ScenePlayerSoundNotify_PlaySoundType = exports.PlatformChangeRouteNotify_CmdId = exports.PlatformStopRouteNotify_CmdId = exports.PlatformStartRouteNotify_CmdId = exports.SceneRouteChangeNotify_CmdId = exports.LevelupCityRsp_CmdId = exports.LevelupCityReq_CmdId = exports.ExecuteGroupTriggerRsp_CmdId = exports.ExecuteGroupTriggerReq_CmdId = exports.UnmarkEntityInMinMapNotify_CmdId = void 0;
exports.SceneAudioNotify_CmdId = exports.GetScenePerformanceRsp_CmdId = exports.GetScenePerformanceReq_CmdId = exports.ForceDragBackTransferNotify_CmdId = exports.MonsterPointArrayRouteUpdateNotify_CmdId = exports.ForceDragAvatarNotify_CmdId = exports.EntityConfigHashNotify_CmdId = exports.GetWorldMpInfoRsp_CmdId = exports.GetWorldMpInfoReq_CmdId = exports.ChangeWorldToSingleModeRsp_CmdId = exports.ChangeWorldToSingleModeReq_CmdId = exports.GetMapMarkTipsRsp_CmdId = exports.GetMapMarkTipsReq_CmdId = exports.PlayerEyePointStateNotify_CmdId = exports.DelScenePlayTeamEntityNotify_CmdId = exports.SyncScenePlayTeamEntityNotify_CmdId = exports.ChangeWorldToSingleModeNotify_CmdId = exports.CloseCommonTipsNotify_CmdId = exports.ShowCommonTipsNotify_CmdId = exports.ShowTemplateReminderNotify_CmdId = exports.MonsterAIConfigHashNotify_CmdId = exports.GroupUnloadNotify_CmdId = exports.GroupSuiteNotify_CmdId = exports.SetEntityClientDataNotify_CmdId = exports.UnfreezeGroupLimitNotify_CmdId = exports.GetDungeonEntryExploreConditionRsp_CmdId = exports.GetDungeonEntryExploreConditionReq_CmdId = exports.DungeonEntryToBeExploreNotify_CmdId = exports.SceneDataNotify_CmdId = exports.ChatHistoryNotify_CmdId = exports.PlayerChatCDNotify_CmdId = exports.PlayerChatNotify_CmdId = exports.PlayerChatRsp_CmdId = exports.PlayerChatReq_CmdId = exports.ChatInfo_SystemHintType = exports.PostEnterSceneRsp_CmdId = exports.PostEnterSceneReq_CmdId = exports.WorldPlayerInfoNotify_CmdId = exports.EntityMoveRoomNotify_CmdId = exports.WorldDataNotify_DataType = exports.WorldDataNotify_CmdId = exports.AllMarkPointNotify_CmdId = exports.MarkMapRsp_CmdId = exports.MarkMapReq_CmdId = exports.MarkMapReq_Operation = exports.SceneWeatherForcastRsp_CmdId = exports.SceneWeatherForcastReq_CmdId = exports.UnlockTransPointRsp_CmdId = exports.UnlockTransPointReq_CmdId = exports.SceneEntitiesMoveCombineNotify_CmdId = void 0;
exports.ScenePlayerLocationNotify = exports.VehicleLocationInfo = exports.SceneEntityMoveNotify = exports.SceneAvatarStaminaStepRsp = exports.SceneAvatarStaminaStepReq = exports.SceneEntityMoveRsp = exports.SceneEntityMoveReq = exports.SceneEntityDisappearNotify = exports.SceneEntityAppearNotify = exports.SceneInitFinishRsp = exports.SceneInitFinishReq = exports.LeaveSceneRsp = exports.LeaveSceneReq = exports.PlayerEnterSceneNotify = exports.AreaPlayType = exports.DungeonEntryBlockReason = exports.SealBattleType = exports.TransmitReason = exports.CreateReason = exports.VisionType = exports.EnterType = exports.ScenePlayerBackgroundAvatarRefreshNotify_CmdId = exports.RefreshEntityAuthNotify_CmdId = exports.BeginCameraSceneLookWithTemplateNotify_CmdId = exports.BeginCameraSceneLookWithTemplateNotify_FollowType = exports.WidgetQuickHitTreeRsp_CmdId = exports.WidgetQuickHitTreeReq_CmdId = exports.WorldChestOpenNotify_CmdId = exports.DeathZoneObserveNotify_CmdId = exports.CheckGroupReplacedRsp_CmdId = exports.CheckGroupReplacedReq_CmdId = exports.AreaPlayInfoNotify_CmdId = exports.StopReminderNotify_CmdId = exports.LevelTagDataNotify_CmdId = exports.GuestPostEnterSceneNotify_CmdId = exports.GuestBeginEnterSceneNotify_CmdId = exports.LeaveWorldNotify_CmdId = exports.MapAreaChangeNotify_CmdId = exports.GetMapAreaRsp_CmdId = exports.GetMapAreaReq_CmdId = exports.ShowClientTutorialNotify_CmdId = exports.ShowClientGuideNotify_CmdId = exports.ClientLoadingCostumeVerificationNotify_CmdId = exports.LuaEnvironmentEffectNotify_CmdId = exports.PlayerWorldSceneInfoListNotify_CmdId = exports.ClientHashDebugNotify_CmdId = exports.SceneEntityUpdateNotify_CmdId = exports.AvatarFollowRouteNotify_CmdId = exports.EntityTagChangeNotify_CmdId = exports.HitTreeNotify_CmdId = void 0;
exports.PlatformChangeRouteNotify = exports.PlatformStopRouteNotify = exports.PlatformStartRouteNotify = exports.SceneRouteChangeNotify = exports.SceneRouteChangeInfo = exports.RoutePointChangeInfo = exports.LevelupCityRsp = exports.LevelupCityReq = exports.ExecuteGroupTriggerRsp = exports.ExecuteGroupTriggerReq = exports.UnmarkEntityInMinMapNotify = exports.MarkEntityInMinMapNotify = exports.EndCameraSceneLookNotify = exports.BeginCameraSceneLookNotify = exports.WorldPlayerLocationNotify = exports.PlayerWorldLocationInfo = exports.PlayerLocationInfo = exports.ScenePlayerInfoNotify = exports.ScenePlayerInfo = exports.SceneAreaWeatherNotify = exports.ExitSceneWeatherAreaNotify = exports.EnterSceneWeatherAreaNotify = exports.ClientTransmitRsp = exports.ClientTransmitReq = exports.GetAreaExplorePointRsp = exports.GetAreaExplorePointReq = exports.EntityForceSyncRsp = exports.EntityForceSyncReq = exports.EnterWorldAreaRsp = exports.EnterWorldAreaReq = exports.SceneForceLockNotify = exports.SceneForceUnlockNotify = exports.SceneDestroyEntityRsp = exports.SceneDestroyEntityReq = exports.SceneCreateEntityRsp = exports.SceneCreateEntityReq = exports.SceneEntityDrownRsp = exports.SceneEntityDrownReq = exports.SceneAreaUnlockNotify = exports.GetSceneAreaRsp = exports.GetSceneAreaReq = exports.EntityJumpNotify = exports.SceneTransToPointRsp = exports.SceneTransToPointReq = exports.ScenePointUnlockNotify = exports.ExitTransPointRegionNotify = exports.EnterTransPointRegionNotify = exports.GetScenePointRsp = exports.CityInfo = exports.GetScenePointReq = void 0;
exports.SceneWeatherForcastRsp = exports.SceneWeatherForcastReq = exports.UnlockTransPointRsp = exports.UnlockTransPointReq = exports.SceneEntitiesMoveCombineNotify = exports.SceneEntitiesMovesRsp = exports.EntityMoveFailInfo = exports.SceneEntitiesMovesReq = exports.ClientScriptEventNotify = exports.CutSceneEndNotify = exports.CutSceneFinishNotify = exports.CutSceneBeginNotify = exports.CutSceneExtraParam = exports.ExecuteGadgetLuaRsp = exports.ExecuteGadgetLuaReq = exports.SetSceneWeatherAreaRsp = exports.SetSceneWeatherAreaReq = exports.JoinPlayerFailNotify = exports.WorldPlayerReviveRsp = exports.WorldPlayerReviveReq = exports.WorldPlayerDieNotify = exports.EnterSceneDoneRsp = exports.EnterSceneDoneReq = exports.EnterScenePeerNotify = exports.EnterSceneReadyRsp = exports.EnterSceneReadyReq = exports.SceneTimeNotify = exports.AllSeenMonsterNotify = exports.AddSeenMonsterNotify = exports.SeeMonsterRsp = exports.SeeMonsterReq = exports.BackMyWorldRsp = exports.BackMyWorldReq = exports.HitClientTrivialNotify = exports.SceneKickPlayerNotify = exports.SceneKickPlayerRsp = exports.SceneKickPlayerReq = exports.JoinPlayerSceneRsp = exports.JoinPlayerSceneReq = exports.PlayerEnterSceneInfoNotify = exports.MPLevelEntityInfo = exports.TeamEnterSceneInfo = exports.AvatarEnterSceneInfo = exports.ClientPauseNotify = exports.SealBattleProgressNotify = exports.SealBattleEndNotify = exports.SealBattleBeginNotify = exports.PersonalSceneJumpRsp = exports.PersonalSceneJumpReq = exports.ScenePlayerSoundNotify = void 0;
exports.EntityTagChangeNotify = exports.HitTreeNotify = exports.SceneAudioNotify = exports.GetScenePerformanceRsp = exports.GetScenePerformanceReq = exports.ForceDragBackTransferNotify = exports.MonsterPointArrayRouteUpdateNotify = exports.ForceDragAvatarNotify = exports.EntityConfigHashNotify = exports.EntityConfigHashEntry = exports.GetWorldMpInfoRsp = exports.GetWorldMpInfoReq = exports.ChangeWorldToSingleModeRsp = exports.ChangeWorldToSingleModeReq = exports.GetMapMarkTipsRsp = exports.GetMapMarkTipsReq = exports.PlayerEyePointStateNotify = exports.PolygonRegionSize = exports.CylinderRegionSize = exports.DelScenePlayTeamEntityNotify = exports.SyncScenePlayTeamEntityNotify = exports.ChangeWorldToSingleModeNotify = exports.CloseCommonTipsNotify = exports.ShowCommonTipsNotify = exports.ShowTemplateReminderNotify = exports.MonsterAIConfigHashNotify = exports.GroupUnloadNotify = exports.GroupSuiteNotify = exports.SetEntityClientDataNotify = exports.UnfreezeGroupLimitNotify = exports.GetDungeonEntryExploreConditionRsp = exports.DungeonEntryCond = exports.GetDungeonEntryExploreConditionReq = exports.DungeonEntryToBeExploreNotify = exports.SceneDataNotify = exports.ChatHistoryNotify = exports.PlayerChatCDNotify = exports.PlayerChatNotify = exports.PlayerChatRsp = exports.PlayerChatReq = exports.ChatInfo_SystemHint = exports.ChatInfo = exports.PostEnterSceneRsp = exports.PostEnterSceneReq = exports.WorldPlayerInfoNotify = exports.EntityMoveRoomNotify = exports.WorldDataNotify = exports.AllMarkPointNotify = exports.MarkMapRsp = exports.MarkMapReq = void 0;
exports.ScenePlayerBackgroundAvatarRefreshNotify = exports.RefreshEntityAuthNotify = exports.BeginCameraSceneLookWithTemplateNotify = exports.WidgetQuickHitTreeRsp = exports.WidgetQuickHitTreeReq = exports.WorldChestOpenNotify = exports.HitTreeInfo = exports.DeathZoneObserveNotify = exports.CheckGroupReplacedRsp = exports.CheckGroupReplacedReq = exports.AreaPlayInfoNotify = exports.StopReminderNotify = exports.LevelTagDataNotify = exports.GuestPostEnterSceneNotify = exports.GuestBeginEnterSceneNotify = exports.LeaveWorldNotify = exports.MapAreaChangeNotify = exports.GetMapAreaRsp = exports.GetMapAreaReq = exports.ShowClientTutorialNotify = exports.ShowClientGuideNotify = exports.ClientLoadingCostumeVerificationNotify = exports.LuaEnvironmentEffectNotify = exports.PlayerWorldSceneInfoListNotify = exports.PlayerWorldSceneInfo = exports.ClientHashDebugNotify = exports.SceneEntityUpdateNotify = exports.AvatarFollowRouteNotify = void 0;
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
const cmd_widget_1 = require("./cmd_widget");
const define_8 = require("./define");
const define_9 = require("./define");
const define_10 = require("./define");
const define_11 = require("./define");
const define_12 = require("./define");
const define_13 = require("./define");
const define_14 = require("./define");
const define_15 = require("./define");
const define_16 = require("./define");
const define_17 = require("./define");
const define_18 = require("./define");
const define_19 = require("./define");
const define_20 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.PlayerEnterSceneNotify.CmdId
 */
var PlayerEnterSceneNotify_CmdId;
(function (PlayerEnterSceneNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 272;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["CMD_ID"] = 272] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterSceneNotify_CmdId[PlayerEnterSceneNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerEnterSceneNotify_CmdId = exports.PlayerEnterSceneNotify_CmdId || (exports.PlayerEnterSceneNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LeaveSceneReq.CmdId
 */
var LeaveSceneReq_CmdId;
(function (LeaveSceneReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LeaveSceneReq_CmdId[LeaveSceneReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 298;
     */
    LeaveSceneReq_CmdId[LeaveSceneReq_CmdId["CMD_ID"] = 298] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LeaveSceneReq_CmdId[LeaveSceneReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LeaveSceneReq_CmdId[LeaveSceneReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LeaveSceneReq_CmdId[LeaveSceneReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(LeaveSceneReq_CmdId = exports.LeaveSceneReq_CmdId || (exports.LeaveSceneReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LeaveSceneRsp.CmdId
 */
var LeaveSceneRsp_CmdId;
(function (LeaveSceneRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LeaveSceneRsp_CmdId[LeaveSceneRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 212;
     */
    LeaveSceneRsp_CmdId[LeaveSceneRsp_CmdId["CMD_ID"] = 212] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LeaveSceneRsp_CmdId[LeaveSceneRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LeaveSceneRsp_CmdId[LeaveSceneRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LeaveSceneRsp_CmdId = exports.LeaveSceneRsp_CmdId || (exports.LeaveSceneRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneInitFinishReq.CmdId
 */
var SceneInitFinishReq_CmdId;
(function (SceneInitFinishReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneInitFinishReq_CmdId[SceneInitFinishReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 235;
     */
    SceneInitFinishReq_CmdId[SceneInitFinishReq_CmdId["CMD_ID"] = 235] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneInitFinishReq_CmdId[SceneInitFinishReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneInitFinishReq_CmdId[SceneInitFinishReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneInitFinishReq_CmdId[SceneInitFinishReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneInitFinishReq_CmdId = exports.SceneInitFinishReq_CmdId || (exports.SceneInitFinishReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneInitFinishRsp.CmdId
 */
var SceneInitFinishRsp_CmdId;
(function (SceneInitFinishRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneInitFinishRsp_CmdId[SceneInitFinishRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 207;
     */
    SceneInitFinishRsp_CmdId[SceneInitFinishRsp_CmdId["CMD_ID"] = 207] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneInitFinishRsp_CmdId[SceneInitFinishRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneInitFinishRsp_CmdId[SceneInitFinishRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneInitFinishRsp_CmdId[SceneInitFinishRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneInitFinishRsp_CmdId = exports.SceneInitFinishRsp_CmdId || (exports.SceneInitFinishRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityAppearNotify.CmdId
 */
var SceneEntityAppearNotify_CmdId;
(function (SceneEntityAppearNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityAppearNotify_CmdId[SceneEntityAppearNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 221;
     */
    SceneEntityAppearNotify_CmdId[SceneEntityAppearNotify_CmdId["CMD_ID"] = 221] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityAppearNotify_CmdId[SceneEntityAppearNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneEntityAppearNotify_CmdId[SceneEntityAppearNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneEntityAppearNotify_CmdId = exports.SceneEntityAppearNotify_CmdId || (exports.SceneEntityAppearNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityDisappearNotify.CmdId
 */
var SceneEntityDisappearNotify_CmdId;
(function (SceneEntityDisappearNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityDisappearNotify_CmdId[SceneEntityDisappearNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 203;
     */
    SceneEntityDisappearNotify_CmdId[SceneEntityDisappearNotify_CmdId["CMD_ID"] = 203] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityDisappearNotify_CmdId[SceneEntityDisappearNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneEntityDisappearNotify_CmdId[SceneEntityDisappearNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneEntityDisappearNotify_CmdId = exports.SceneEntityDisappearNotify_CmdId || (exports.SceneEntityDisappearNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityMoveReq.CmdId
 */
var SceneEntityMoveReq_CmdId;
(function (SceneEntityMoveReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityMoveReq_CmdId[SceneEntityMoveReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 290;
     */
    SceneEntityMoveReq_CmdId[SceneEntityMoveReq_CmdId["CMD_ID"] = 290] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntityMoveReq_CmdId[SceneEntityMoveReq_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityMoveReq_CmdId[SceneEntityMoveReq_CmdId["ENET_IS_RELIABLE"] = 0] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntityMoveReq_CmdId[SceneEntityMoveReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneEntityMoveReq_CmdId = exports.SceneEntityMoveReq_CmdId || (exports.SceneEntityMoveReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityMoveRsp.CmdId
 */
var SceneEntityMoveRsp_CmdId;
(function (SceneEntityMoveRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityMoveRsp_CmdId[SceneEntityMoveRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 273;
     */
    SceneEntityMoveRsp_CmdId[SceneEntityMoveRsp_CmdId["CMD_ID"] = 273] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntityMoveRsp_CmdId[SceneEntityMoveRsp_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntityMoveRsp_CmdId[SceneEntityMoveRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneEntityMoveRsp_CmdId = exports.SceneEntityMoveRsp_CmdId || (exports.SceneEntityMoveRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneAvatarStaminaStepReq.CmdId
 */
var SceneAvatarStaminaStepReq_CmdId;
(function (SceneAvatarStaminaStepReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAvatarStaminaStepReq_CmdId[SceneAvatarStaminaStepReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 299;
     */
    SceneAvatarStaminaStepReq_CmdId[SceneAvatarStaminaStepReq_CmdId["CMD_ID"] = 299] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneAvatarStaminaStepReq_CmdId[SceneAvatarStaminaStepReq_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneAvatarStaminaStepReq_CmdId[SceneAvatarStaminaStepReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneAvatarStaminaStepReq_CmdId[SceneAvatarStaminaStepReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneAvatarStaminaStepReq_CmdId = exports.SceneAvatarStaminaStepReq_CmdId || (exports.SceneAvatarStaminaStepReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneAvatarStaminaStepRsp.CmdId
 */
var SceneAvatarStaminaStepRsp_CmdId;
(function (SceneAvatarStaminaStepRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAvatarStaminaStepRsp_CmdId[SceneAvatarStaminaStepRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 231;
     */
    SceneAvatarStaminaStepRsp_CmdId[SceneAvatarStaminaStepRsp_CmdId["CMD_ID"] = 231] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneAvatarStaminaStepRsp_CmdId[SceneAvatarStaminaStepRsp_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneAvatarStaminaStepRsp_CmdId[SceneAvatarStaminaStepRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneAvatarStaminaStepRsp_CmdId = exports.SceneAvatarStaminaStepRsp_CmdId || (exports.SceneAvatarStaminaStepRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityMoveNotify.CmdId
 */
var SceneEntityMoveNotify_CmdId;
(function (SceneEntityMoveNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityMoveNotify_CmdId[SceneEntityMoveNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 275;
     */
    SceneEntityMoveNotify_CmdId[SceneEntityMoveNotify_CmdId["CMD_ID"] = 275] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntityMoveNotify_CmdId[SceneEntityMoveNotify_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntityMoveNotify_CmdId[SceneEntityMoveNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneEntityMoveNotify_CmdId = exports.SceneEntityMoveNotify_CmdId || (exports.SceneEntityMoveNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayerLocationNotify.CmdId
 */
var ScenePlayerLocationNotify_CmdId;
(function (ScenePlayerLocationNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayerLocationNotify_CmdId[ScenePlayerLocationNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 248;
     */
    ScenePlayerLocationNotify_CmdId[ScenePlayerLocationNotify_CmdId["CMD_ID"] = 248] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    ScenePlayerLocationNotify_CmdId[ScenePlayerLocationNotify_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    ScenePlayerLocationNotify_CmdId[ScenePlayerLocationNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayerLocationNotify_CmdId = exports.ScenePlayerLocationNotify_CmdId || (exports.ScenePlayerLocationNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetScenePointReq.CmdId
 */
var GetScenePointReq_CmdId;
(function (GetScenePointReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePointReq_CmdId[GetScenePointReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 297;
     */
    GetScenePointReq_CmdId[GetScenePointReq_CmdId["CMD_ID"] = 297] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePointReq_CmdId[GetScenePointReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetScenePointReq_CmdId[GetScenePointReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetScenePointReq_CmdId[GetScenePointReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetScenePointReq_CmdId = exports.GetScenePointReq_CmdId || (exports.GetScenePointReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetScenePointRsp.CmdId
 */
var GetScenePointRsp_CmdId;
(function (GetScenePointRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePointRsp_CmdId[GetScenePointRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 281;
     */
    GetScenePointRsp_CmdId[GetScenePointRsp_CmdId["CMD_ID"] = 281] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePointRsp_CmdId[GetScenePointRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetScenePointRsp_CmdId[GetScenePointRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetScenePointRsp_CmdId = exports.GetScenePointRsp_CmdId || (exports.GetScenePointRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterTransPointRegionNotify.CmdId
 */
var EnterTransPointRegionNotify_CmdId;
(function (EnterTransPointRegionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterTransPointRegionNotify_CmdId[EnterTransPointRegionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 205;
     */
    EnterTransPointRegionNotify_CmdId[EnterTransPointRegionNotify_CmdId["CMD_ID"] = 205] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterTransPointRegionNotify_CmdId[EnterTransPointRegionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterTransPointRegionNotify_CmdId[EnterTransPointRegionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterTransPointRegionNotify_CmdId[EnterTransPointRegionNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterTransPointRegionNotify_CmdId = exports.EnterTransPointRegionNotify_CmdId || (exports.EnterTransPointRegionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExitTransPointRegionNotify.CmdId
 */
var ExitTransPointRegionNotify_CmdId;
(function (ExitTransPointRegionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitTransPointRegionNotify_CmdId[ExitTransPointRegionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 282;
     */
    ExitTransPointRegionNotify_CmdId[ExitTransPointRegionNotify_CmdId["CMD_ID"] = 282] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitTransPointRegionNotify_CmdId[ExitTransPointRegionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitTransPointRegionNotify_CmdId[ExitTransPointRegionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitTransPointRegionNotify_CmdId[ExitTransPointRegionNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ExitTransPointRegionNotify_CmdId = exports.ExitTransPointRegionNotify_CmdId || (exports.ExitTransPointRegionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePointUnlockNotify.CmdId
 */
var ScenePointUnlockNotify_CmdId;
(function (ScenePointUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePointUnlockNotify_CmdId[ScenePointUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 247;
     */
    ScenePointUnlockNotify_CmdId[ScenePointUnlockNotify_CmdId["CMD_ID"] = 247] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePointUnlockNotify_CmdId[ScenePointUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePointUnlockNotify_CmdId[ScenePointUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePointUnlockNotify_CmdId = exports.ScenePointUnlockNotify_CmdId || (exports.ScenePointUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneTransToPointReq.CmdId
 */
var SceneTransToPointReq_CmdId;
(function (SceneTransToPointReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTransToPointReq_CmdId[SceneTransToPointReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 239;
     */
    SceneTransToPointReq_CmdId[SceneTransToPointReq_CmdId["CMD_ID"] = 239] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTransToPointReq_CmdId[SceneTransToPointReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneTransToPointReq_CmdId[SceneTransToPointReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneTransToPointReq_CmdId[SceneTransToPointReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneTransToPointReq_CmdId = exports.SceneTransToPointReq_CmdId || (exports.SceneTransToPointReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneTransToPointRsp.CmdId
 */
var SceneTransToPointRsp_CmdId;
(function (SceneTransToPointRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTransToPointRsp_CmdId[SceneTransToPointRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 253;
     */
    SceneTransToPointRsp_CmdId[SceneTransToPointRsp_CmdId["CMD_ID"] = 253] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTransToPointRsp_CmdId[SceneTransToPointRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneTransToPointRsp_CmdId[SceneTransToPointRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneTransToPointRsp_CmdId = exports.SceneTransToPointRsp_CmdId || (exports.SceneTransToPointRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityJumpNotify.Type
 */
var EntityJumpNotify_Type;
(function (EntityJumpNotify_Type) {
    /**
     * @generated from protobuf enum value: NULL = 0;
     */
    EntityJumpNotify_Type[EntityJumpNotify_Type["NULL"] = 0] = "NULL";
    /**
     * @generated from protobuf enum value: ACTIVE = 1;
     */
    EntityJumpNotify_Type[EntityJumpNotify_Type["ACTIVE"] = 1] = "ACTIVE";
    /**
     * @generated from protobuf enum value: PASSIVE = 2;
     */
    EntityJumpNotify_Type[EntityJumpNotify_Type["PASSIVE"] = 2] = "PASSIVE";
})(EntityJumpNotify_Type = exports.EntityJumpNotify_Type || (exports.EntityJumpNotify_Type = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityJumpNotify.CmdId
 */
var EntityJumpNotify_CmdId;
(function (EntityJumpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityJumpNotify_CmdId[EntityJumpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 222;
     */
    EntityJumpNotify_CmdId[EntityJumpNotify_CmdId["CMD_ID"] = 222] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityJumpNotify_CmdId[EntityJumpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityJumpNotify_CmdId[EntityJumpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityJumpNotify_CmdId = exports.EntityJumpNotify_CmdId || (exports.EntityJumpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetSceneAreaReq.CmdId
 */
var GetSceneAreaReq_CmdId;
(function (GetSceneAreaReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneAreaReq_CmdId[GetSceneAreaReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 265;
     */
    GetSceneAreaReq_CmdId[GetSceneAreaReq_CmdId["CMD_ID"] = 265] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneAreaReq_CmdId[GetSceneAreaReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSceneAreaReq_CmdId[GetSceneAreaReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSceneAreaReq_CmdId[GetSceneAreaReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetSceneAreaReq_CmdId = exports.GetSceneAreaReq_CmdId || (exports.GetSceneAreaReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetSceneAreaRsp.CmdId
 */
var GetSceneAreaRsp_CmdId;
(function (GetSceneAreaRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneAreaRsp_CmdId[GetSceneAreaRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 204;
     */
    GetSceneAreaRsp_CmdId[GetSceneAreaRsp_CmdId["CMD_ID"] = 204] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneAreaRsp_CmdId[GetSceneAreaRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSceneAreaRsp_CmdId[GetSceneAreaRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetSceneAreaRsp_CmdId = exports.GetSceneAreaRsp_CmdId || (exports.GetSceneAreaRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneAreaUnlockNotify.CmdId
 */
var SceneAreaUnlockNotify_CmdId;
(function (SceneAreaUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAreaUnlockNotify_CmdId[SceneAreaUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 293;
     */
    SceneAreaUnlockNotify_CmdId[SceneAreaUnlockNotify_CmdId["CMD_ID"] = 293] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAreaUnlockNotify_CmdId[SceneAreaUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneAreaUnlockNotify_CmdId[SceneAreaUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneAreaUnlockNotify_CmdId = exports.SceneAreaUnlockNotify_CmdId || (exports.SceneAreaUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityDrownReq.CmdId
 */
var SceneEntityDrownReq_CmdId;
(function (SceneEntityDrownReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityDrownReq_CmdId[SceneEntityDrownReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 227;
     */
    SceneEntityDrownReq_CmdId[SceneEntityDrownReq_CmdId["CMD_ID"] = 227] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityDrownReq_CmdId[SceneEntityDrownReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneEntityDrownReq_CmdId[SceneEntityDrownReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneEntityDrownReq_CmdId[SceneEntityDrownReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneEntityDrownReq_CmdId = exports.SceneEntityDrownReq_CmdId || (exports.SceneEntityDrownReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityDrownRsp.CmdId
 */
var SceneEntityDrownRsp_CmdId;
(function (SceneEntityDrownRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityDrownRsp_CmdId[SceneEntityDrownRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 294;
     */
    SceneEntityDrownRsp_CmdId[SceneEntityDrownRsp_CmdId["CMD_ID"] = 294] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityDrownRsp_CmdId[SceneEntityDrownRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneEntityDrownRsp_CmdId[SceneEntityDrownRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneEntityDrownRsp_CmdId = exports.SceneEntityDrownRsp_CmdId || (exports.SceneEntityDrownRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneCreateEntityReq.CmdId
 */
var SceneCreateEntityReq_CmdId;
(function (SceneCreateEntityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneCreateEntityReq_CmdId[SceneCreateEntityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 288;
     */
    SceneCreateEntityReq_CmdId[SceneCreateEntityReq_CmdId["CMD_ID"] = 288] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneCreateEntityReq_CmdId[SceneCreateEntityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneCreateEntityReq_CmdId[SceneCreateEntityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneCreateEntityReq_CmdId[SceneCreateEntityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneCreateEntityReq_CmdId = exports.SceneCreateEntityReq_CmdId || (exports.SceneCreateEntityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneCreateEntityRsp.CmdId
 */
var SceneCreateEntityRsp_CmdId;
(function (SceneCreateEntityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneCreateEntityRsp_CmdId[SceneCreateEntityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 226;
     */
    SceneCreateEntityRsp_CmdId[SceneCreateEntityRsp_CmdId["CMD_ID"] = 226] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneCreateEntityRsp_CmdId[SceneCreateEntityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneCreateEntityRsp_CmdId[SceneCreateEntityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneCreateEntityRsp_CmdId = exports.SceneCreateEntityRsp_CmdId || (exports.SceneCreateEntityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneDestroyEntityReq.CmdId
 */
var SceneDestroyEntityReq_CmdId;
(function (SceneDestroyEntityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDestroyEntityReq_CmdId[SceneDestroyEntityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 263;
     */
    SceneDestroyEntityReq_CmdId[SceneDestroyEntityReq_CmdId["CMD_ID"] = 263] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDestroyEntityReq_CmdId[SceneDestroyEntityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneDestroyEntityReq_CmdId[SceneDestroyEntityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneDestroyEntityReq_CmdId[SceneDestroyEntityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneDestroyEntityReq_CmdId = exports.SceneDestroyEntityReq_CmdId || (exports.SceneDestroyEntityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneDestroyEntityRsp.CmdId
 */
var SceneDestroyEntityRsp_CmdId;
(function (SceneDestroyEntityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDestroyEntityRsp_CmdId[SceneDestroyEntityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 295;
     */
    SceneDestroyEntityRsp_CmdId[SceneDestroyEntityRsp_CmdId["CMD_ID"] = 295] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDestroyEntityRsp_CmdId[SceneDestroyEntityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneDestroyEntityRsp_CmdId[SceneDestroyEntityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneDestroyEntityRsp_CmdId = exports.SceneDestroyEntityRsp_CmdId || (exports.SceneDestroyEntityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneForceUnlockNotify.CmdId
 */
var SceneForceUnlockNotify_CmdId;
(function (SceneForceUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneForceUnlockNotify_CmdId[SceneForceUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 206;
     */
    SceneForceUnlockNotify_CmdId[SceneForceUnlockNotify_CmdId["CMD_ID"] = 206] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneForceUnlockNotify_CmdId[SceneForceUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneForceUnlockNotify_CmdId[SceneForceUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneForceUnlockNotify_CmdId = exports.SceneForceUnlockNotify_CmdId || (exports.SceneForceUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneForceLockNotify.CmdId
 */
var SceneForceLockNotify_CmdId;
(function (SceneForceLockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneForceLockNotify_CmdId[SceneForceLockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 234;
     */
    SceneForceLockNotify_CmdId[SceneForceLockNotify_CmdId["CMD_ID"] = 234] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneForceLockNotify_CmdId[SceneForceLockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneForceLockNotify_CmdId[SceneForceLockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneForceLockNotify_CmdId = exports.SceneForceLockNotify_CmdId || (exports.SceneForceLockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterWorldAreaReq.CmdId
 */
var EnterWorldAreaReq_CmdId;
(function (EnterWorldAreaReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterWorldAreaReq_CmdId[EnterWorldAreaReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 250;
     */
    EnterWorldAreaReq_CmdId[EnterWorldAreaReq_CmdId["CMD_ID"] = 250] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterWorldAreaReq_CmdId[EnterWorldAreaReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterWorldAreaReq_CmdId[EnterWorldAreaReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterWorldAreaReq_CmdId[EnterWorldAreaReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterWorldAreaReq_CmdId = exports.EnterWorldAreaReq_CmdId || (exports.EnterWorldAreaReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterWorldAreaRsp.CmdId
 */
var EnterWorldAreaRsp_CmdId;
(function (EnterWorldAreaRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterWorldAreaRsp_CmdId[EnterWorldAreaRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 243;
     */
    EnterWorldAreaRsp_CmdId[EnterWorldAreaRsp_CmdId["CMD_ID"] = 243] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterWorldAreaRsp_CmdId[EnterWorldAreaRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterWorldAreaRsp_CmdId[EnterWorldAreaRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EnterWorldAreaRsp_CmdId = exports.EnterWorldAreaRsp_CmdId || (exports.EnterWorldAreaRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityForceSyncReq.CmdId
 */
var EntityForceSyncReq_CmdId;
(function (EntityForceSyncReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityForceSyncReq_CmdId[EntityForceSyncReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 274;
     */
    EntityForceSyncReq_CmdId[EntityForceSyncReq_CmdId["CMD_ID"] = 274] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityForceSyncReq_CmdId[EntityForceSyncReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityForceSyncReq_CmdId[EntityForceSyncReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityForceSyncReq_CmdId[EntityForceSyncReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EntityForceSyncReq_CmdId = exports.EntityForceSyncReq_CmdId || (exports.EntityForceSyncReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityForceSyncRsp.CmdId
 */
var EntityForceSyncRsp_CmdId;
(function (EntityForceSyncRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityForceSyncRsp_CmdId[EntityForceSyncRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 276;
     */
    EntityForceSyncRsp_CmdId[EntityForceSyncRsp_CmdId["CMD_ID"] = 276] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityForceSyncRsp_CmdId[EntityForceSyncRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityForceSyncRsp_CmdId[EntityForceSyncRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityForceSyncRsp_CmdId = exports.EntityForceSyncRsp_CmdId || (exports.EntityForceSyncRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAreaExplorePointReq.CmdId
 */
var GetAreaExplorePointReq_CmdId;
(function (GetAreaExplorePointReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAreaExplorePointReq_CmdId[GetAreaExplorePointReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 241;
     */
    GetAreaExplorePointReq_CmdId[GetAreaExplorePointReq_CmdId["CMD_ID"] = 241] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAreaExplorePointReq_CmdId[GetAreaExplorePointReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAreaExplorePointReq_CmdId[GetAreaExplorePointReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAreaExplorePointReq_CmdId[GetAreaExplorePointReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAreaExplorePointReq_CmdId = exports.GetAreaExplorePointReq_CmdId || (exports.GetAreaExplorePointReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAreaExplorePointRsp.CmdId
 */
var GetAreaExplorePointRsp_CmdId;
(function (GetAreaExplorePointRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAreaExplorePointRsp_CmdId[GetAreaExplorePointRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 249;
     */
    GetAreaExplorePointRsp_CmdId[GetAreaExplorePointRsp_CmdId["CMD_ID"] = 249] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAreaExplorePointRsp_CmdId[GetAreaExplorePointRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAreaExplorePointRsp_CmdId[GetAreaExplorePointRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetAreaExplorePointRsp_CmdId = exports.GetAreaExplorePointRsp_CmdId || (exports.GetAreaExplorePointRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientTransmitReq.CmdId
 */
var ClientTransmitReq_CmdId;
(function (ClientTransmitReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientTransmitReq_CmdId[ClientTransmitReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 291;
     */
    ClientTransmitReq_CmdId[ClientTransmitReq_CmdId["CMD_ID"] = 291] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientTransmitReq_CmdId[ClientTransmitReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientTransmitReq_CmdId[ClientTransmitReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientTransmitReq_CmdId[ClientTransmitReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientTransmitReq_CmdId = exports.ClientTransmitReq_CmdId || (exports.ClientTransmitReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientTransmitRsp.CmdId
 */
var ClientTransmitRsp_CmdId;
(function (ClientTransmitRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientTransmitRsp_CmdId[ClientTransmitRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 224;
     */
    ClientTransmitRsp_CmdId[ClientTransmitRsp_CmdId["CMD_ID"] = 224] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientTransmitRsp_CmdId[ClientTransmitRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientTransmitRsp_CmdId[ClientTransmitRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ClientTransmitRsp_CmdId = exports.ClientTransmitRsp_CmdId || (exports.ClientTransmitRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterSceneWeatherAreaNotify.CmdId
 */
var EnterSceneWeatherAreaNotify_CmdId;
(function (EnterSceneWeatherAreaNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneWeatherAreaNotify_CmdId[EnterSceneWeatherAreaNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 256;
     */
    EnterSceneWeatherAreaNotify_CmdId[EnterSceneWeatherAreaNotify_CmdId["CMD_ID"] = 256] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneWeatherAreaNotify_CmdId[EnterSceneWeatherAreaNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneWeatherAreaNotify_CmdId[EnterSceneWeatherAreaNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneWeatherAreaNotify_CmdId[EnterSceneWeatherAreaNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterSceneWeatherAreaNotify_CmdId = exports.EnterSceneWeatherAreaNotify_CmdId || (exports.EnterSceneWeatherAreaNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExitSceneWeatherAreaNotify.CmdId
 */
var ExitSceneWeatherAreaNotify_CmdId;
(function (ExitSceneWeatherAreaNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitSceneWeatherAreaNotify_CmdId[ExitSceneWeatherAreaNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 242;
     */
    ExitSceneWeatherAreaNotify_CmdId[ExitSceneWeatherAreaNotify_CmdId["CMD_ID"] = 242] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitSceneWeatherAreaNotify_CmdId[ExitSceneWeatherAreaNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitSceneWeatherAreaNotify_CmdId[ExitSceneWeatherAreaNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitSceneWeatherAreaNotify_CmdId[ExitSceneWeatherAreaNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ExitSceneWeatherAreaNotify_CmdId = exports.ExitSceneWeatherAreaNotify_CmdId || (exports.ExitSceneWeatherAreaNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneAreaWeatherNotify.CmdId
 */
var SceneAreaWeatherNotify_CmdId;
(function (SceneAreaWeatherNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAreaWeatherNotify_CmdId[SceneAreaWeatherNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 230;
     */
    SceneAreaWeatherNotify_CmdId[SceneAreaWeatherNotify_CmdId["CMD_ID"] = 230] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAreaWeatherNotify_CmdId[SceneAreaWeatherNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneAreaWeatherNotify_CmdId[SceneAreaWeatherNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneAreaWeatherNotify_CmdId = exports.SceneAreaWeatherNotify_CmdId || (exports.SceneAreaWeatherNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayerInfoNotify.CmdId
 */
var ScenePlayerInfoNotify_CmdId;
(function (ScenePlayerInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayerInfoNotify_CmdId[ScenePlayerInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 267;
     */
    ScenePlayerInfoNotify_CmdId[ScenePlayerInfoNotify_CmdId["CMD_ID"] = 267] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayerInfoNotify_CmdId[ScenePlayerInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayerInfoNotify_CmdId[ScenePlayerInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayerInfoNotify_CmdId = exports.ScenePlayerInfoNotify_CmdId || (exports.ScenePlayerInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldPlayerLocationNotify.CmdId
 */
var WorldPlayerLocationNotify_CmdId;
(function (WorldPlayerLocationNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerLocationNotify_CmdId[WorldPlayerLocationNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 258;
     */
    WorldPlayerLocationNotify_CmdId[WorldPlayerLocationNotify_CmdId["CMD_ID"] = 258] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerLocationNotify_CmdId[WorldPlayerLocationNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerLocationNotify_CmdId[WorldPlayerLocationNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldPlayerLocationNotify_CmdId = exports.WorldPlayerLocationNotify_CmdId || (exports.WorldPlayerLocationNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BeginCameraSceneLookNotify.KeepRotType
 */
var BeginCameraSceneLookNotify_KeepRotType;
(function (BeginCameraSceneLookNotify_KeepRotType) {
    /**
     * @generated from protobuf enum value: KEEP_ROT_X = 0;
     */
    BeginCameraSceneLookNotify_KeepRotType[BeginCameraSceneLookNotify_KeepRotType["KEEP_ROT_X"] = 0] = "KEEP_ROT_X";
    /**
     * @generated from protobuf enum value: KEEP_ROT_XY = 1;
     */
    BeginCameraSceneLookNotify_KeepRotType[BeginCameraSceneLookNotify_KeepRotType["KEEP_ROT_XY"] = 1] = "KEEP_ROT_XY";
})(BeginCameraSceneLookNotify_KeepRotType = exports.BeginCameraSceneLookNotify_KeepRotType || (exports.BeginCameraSceneLookNotify_KeepRotType = {}));
/**
 * @generated from protobuf enum com.midnights.game.BeginCameraSceneLookNotify.CmdId
 */
var BeginCameraSceneLookNotify_CmdId;
(function (BeginCameraSceneLookNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BeginCameraSceneLookNotify_CmdId[BeginCameraSceneLookNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 270;
     */
    BeginCameraSceneLookNotify_CmdId[BeginCameraSceneLookNotify_CmdId["CMD_ID"] = 270] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BeginCameraSceneLookNotify_CmdId[BeginCameraSceneLookNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BeginCameraSceneLookNotify_CmdId[BeginCameraSceneLookNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BeginCameraSceneLookNotify_CmdId = exports.BeginCameraSceneLookNotify_CmdId || (exports.BeginCameraSceneLookNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EndCameraSceneLookNotify.CmdId
 */
var EndCameraSceneLookNotify_CmdId;
(function (EndCameraSceneLookNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EndCameraSceneLookNotify_CmdId[EndCameraSceneLookNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 217;
     */
    EndCameraSceneLookNotify_CmdId[EndCameraSceneLookNotify_CmdId["CMD_ID"] = 217] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EndCameraSceneLookNotify_CmdId[EndCameraSceneLookNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EndCameraSceneLookNotify_CmdId[EndCameraSceneLookNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EndCameraSceneLookNotify_CmdId = exports.EndCameraSceneLookNotify_CmdId || (exports.EndCameraSceneLookNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MarkEntityInMinMapNotify.CmdId
 */
var MarkEntityInMinMapNotify_CmdId;
(function (MarkEntityInMinMapNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkEntityInMinMapNotify_CmdId[MarkEntityInMinMapNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 202;
     */
    MarkEntityInMinMapNotify_CmdId[MarkEntityInMinMapNotify_CmdId["CMD_ID"] = 202] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkEntityInMinMapNotify_CmdId[MarkEntityInMinMapNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MarkEntityInMinMapNotify_CmdId[MarkEntityInMinMapNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MarkEntityInMinMapNotify_CmdId = exports.MarkEntityInMinMapNotify_CmdId || (exports.MarkEntityInMinMapNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnmarkEntityInMinMapNotify.CmdId
 */
var UnmarkEntityInMinMapNotify_CmdId;
(function (UnmarkEntityInMinMapNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnmarkEntityInMinMapNotify_CmdId[UnmarkEntityInMinMapNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 219;
     */
    UnmarkEntityInMinMapNotify_CmdId[UnmarkEntityInMinMapNotify_CmdId["CMD_ID"] = 219] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnmarkEntityInMinMapNotify_CmdId[UnmarkEntityInMinMapNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnmarkEntityInMinMapNotify_CmdId[UnmarkEntityInMinMapNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnmarkEntityInMinMapNotify_CmdId = exports.UnmarkEntityInMinMapNotify_CmdId || (exports.UnmarkEntityInMinMapNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExecuteGroupTriggerReq.CmdId
 */
var ExecuteGroupTriggerReq_CmdId;
(function (ExecuteGroupTriggerReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGroupTriggerReq_CmdId[ExecuteGroupTriggerReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 257;
     */
    ExecuteGroupTriggerReq_CmdId[ExecuteGroupTriggerReq_CmdId["CMD_ID"] = 257] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGroupTriggerReq_CmdId[ExecuteGroupTriggerReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExecuteGroupTriggerReq_CmdId[ExecuteGroupTriggerReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExecuteGroupTriggerReq_CmdId[ExecuteGroupTriggerReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ExecuteGroupTriggerReq_CmdId = exports.ExecuteGroupTriggerReq_CmdId || (exports.ExecuteGroupTriggerReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExecuteGroupTriggerRsp.CmdId
 */
var ExecuteGroupTriggerRsp_CmdId;
(function (ExecuteGroupTriggerRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGroupTriggerRsp_CmdId[ExecuteGroupTriggerRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 300;
     */
    ExecuteGroupTriggerRsp_CmdId[ExecuteGroupTriggerRsp_CmdId["CMD_ID"] = 300] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGroupTriggerRsp_CmdId[ExecuteGroupTriggerRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExecuteGroupTriggerRsp_CmdId[ExecuteGroupTriggerRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ExecuteGroupTriggerRsp_CmdId = exports.ExecuteGroupTriggerRsp_CmdId || (exports.ExecuteGroupTriggerRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LevelupCityReq.CmdId
 */
var LevelupCityReq_CmdId;
(function (LevelupCityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LevelupCityReq_CmdId[LevelupCityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 216;
     */
    LevelupCityReq_CmdId[LevelupCityReq_CmdId["CMD_ID"] = 216] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LevelupCityReq_CmdId[LevelupCityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LevelupCityReq_CmdId[LevelupCityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LevelupCityReq_CmdId[LevelupCityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(LevelupCityReq_CmdId = exports.LevelupCityReq_CmdId || (exports.LevelupCityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LevelupCityRsp.CmdId
 */
var LevelupCityRsp_CmdId;
(function (LevelupCityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LevelupCityRsp_CmdId[LevelupCityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 287;
     */
    LevelupCityRsp_CmdId[LevelupCityRsp_CmdId["CMD_ID"] = 287] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LevelupCityRsp_CmdId[LevelupCityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LevelupCityRsp_CmdId[LevelupCityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LevelupCityRsp_CmdId = exports.LevelupCityRsp_CmdId || (exports.LevelupCityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneRouteChangeNotify.CmdId
 */
var SceneRouteChangeNotify_CmdId;
(function (SceneRouteChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneRouteChangeNotify_CmdId[SceneRouteChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 240;
     */
    SceneRouteChangeNotify_CmdId[SceneRouteChangeNotify_CmdId["CMD_ID"] = 240] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneRouteChangeNotify_CmdId[SceneRouteChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneRouteChangeNotify_CmdId[SceneRouteChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneRouteChangeNotify_CmdId = exports.SceneRouteChangeNotify_CmdId || (exports.SceneRouteChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlatformStartRouteNotify.CmdId
 */
var PlatformStartRouteNotify_CmdId;
(function (PlatformStartRouteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlatformStartRouteNotify_CmdId[PlatformStartRouteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 218;
     */
    PlatformStartRouteNotify_CmdId[PlatformStartRouteNotify_CmdId["CMD_ID"] = 218] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlatformStartRouteNotify_CmdId[PlatformStartRouteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlatformStartRouteNotify_CmdId[PlatformStartRouteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlatformStartRouteNotify_CmdId = exports.PlatformStartRouteNotify_CmdId || (exports.PlatformStartRouteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlatformStopRouteNotify.CmdId
 */
var PlatformStopRouteNotify_CmdId;
(function (PlatformStopRouteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlatformStopRouteNotify_CmdId[PlatformStopRouteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 266;
     */
    PlatformStopRouteNotify_CmdId[PlatformStopRouteNotify_CmdId["CMD_ID"] = 266] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlatformStopRouteNotify_CmdId[PlatformStopRouteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlatformStopRouteNotify_CmdId[PlatformStopRouteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlatformStopRouteNotify_CmdId = exports.PlatformStopRouteNotify_CmdId || (exports.PlatformStopRouteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlatformChangeRouteNotify.CmdId
 */
var PlatformChangeRouteNotify_CmdId;
(function (PlatformChangeRouteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlatformChangeRouteNotify_CmdId[PlatformChangeRouteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 268;
     */
    PlatformChangeRouteNotify_CmdId[PlatformChangeRouteNotify_CmdId["CMD_ID"] = 268] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlatformChangeRouteNotify_CmdId[PlatformChangeRouteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlatformChangeRouteNotify_CmdId[PlatformChangeRouteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlatformChangeRouteNotify_CmdId = exports.PlatformChangeRouteNotify_CmdId || (exports.PlatformChangeRouteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayerSoundNotify.PlaySoundType
 */
var ScenePlayerSoundNotify_PlaySoundType;
(function (ScenePlayerSoundNotify_PlaySoundType) {
    /**
     * @generated from protobuf enum value: PLAY_SOUND_NONE = 0;
     */
    ScenePlayerSoundNotify_PlaySoundType[ScenePlayerSoundNotify_PlaySoundType["PLAY_SOUND_NONE"] = 0] = "PLAY_SOUND_NONE";
    /**
     * @generated from protobuf enum value: PLAY_SOUND_START = 1;
     */
    ScenePlayerSoundNotify_PlaySoundType[ScenePlayerSoundNotify_PlaySoundType["PLAY_SOUND_START"] = 1] = "PLAY_SOUND_START";
    /**
     * @generated from protobuf enum value: PLAY_SOUND_STOP = 2;
     */
    ScenePlayerSoundNotify_PlaySoundType[ScenePlayerSoundNotify_PlaySoundType["PLAY_SOUND_STOP"] = 2] = "PLAY_SOUND_STOP";
})(ScenePlayerSoundNotify_PlaySoundType = exports.ScenePlayerSoundNotify_PlaySoundType || (exports.ScenePlayerSoundNotify_PlaySoundType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayerSoundNotify.CmdId
 */
var ScenePlayerSoundNotify_CmdId;
(function (ScenePlayerSoundNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayerSoundNotify_CmdId[ScenePlayerSoundNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 233;
     */
    ScenePlayerSoundNotify_CmdId[ScenePlayerSoundNotify_CmdId["CMD_ID"] = 233] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayerSoundNotify_CmdId[ScenePlayerSoundNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayerSoundNotify_CmdId[ScenePlayerSoundNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayerSoundNotify_CmdId = exports.ScenePlayerSoundNotify_CmdId || (exports.ScenePlayerSoundNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PersonalSceneJumpReq.CmdId
 */
var PersonalSceneJumpReq_CmdId;
(function (PersonalSceneJumpReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalSceneJumpReq_CmdId[PersonalSceneJumpReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 284;
     */
    PersonalSceneJumpReq_CmdId[PersonalSceneJumpReq_CmdId["CMD_ID"] = 284] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalSceneJumpReq_CmdId[PersonalSceneJumpReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersonalSceneJumpReq_CmdId[PersonalSceneJumpReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersonalSceneJumpReq_CmdId[PersonalSceneJumpReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PersonalSceneJumpReq_CmdId = exports.PersonalSceneJumpReq_CmdId || (exports.PersonalSceneJumpReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PersonalSceneJumpRsp.CmdId
 */
var PersonalSceneJumpRsp_CmdId;
(function (PersonalSceneJumpRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalSceneJumpRsp_CmdId[PersonalSceneJumpRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 280;
     */
    PersonalSceneJumpRsp_CmdId[PersonalSceneJumpRsp_CmdId["CMD_ID"] = 280] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalSceneJumpRsp_CmdId[PersonalSceneJumpRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersonalSceneJumpRsp_CmdId[PersonalSceneJumpRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PersonalSceneJumpRsp_CmdId = exports.PersonalSceneJumpRsp_CmdId || (exports.PersonalSceneJumpRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SealBattleBeginNotify.CmdId
 */
var SealBattleBeginNotify_CmdId;
(function (SealBattleBeginNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SealBattleBeginNotify_CmdId[SealBattleBeginNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 289;
     */
    SealBattleBeginNotify_CmdId[SealBattleBeginNotify_CmdId["CMD_ID"] = 289] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SealBattleBeginNotify_CmdId[SealBattleBeginNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SealBattleBeginNotify_CmdId[SealBattleBeginNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SealBattleBeginNotify_CmdId = exports.SealBattleBeginNotify_CmdId || (exports.SealBattleBeginNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SealBattleEndNotify.CmdId
 */
var SealBattleEndNotify_CmdId;
(function (SealBattleEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SealBattleEndNotify_CmdId[SealBattleEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 259;
     */
    SealBattleEndNotify_CmdId[SealBattleEndNotify_CmdId["CMD_ID"] = 259] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SealBattleEndNotify_CmdId[SealBattleEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SealBattleEndNotify_CmdId[SealBattleEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SealBattleEndNotify_CmdId = exports.SealBattleEndNotify_CmdId || (exports.SealBattleEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SealBattleProgressNotify.CmdId
 */
var SealBattleProgressNotify_CmdId;
(function (SealBattleProgressNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SealBattleProgressNotify_CmdId[SealBattleProgressNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 232;
     */
    SealBattleProgressNotify_CmdId[SealBattleProgressNotify_CmdId["CMD_ID"] = 232] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SealBattleProgressNotify_CmdId[SealBattleProgressNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SealBattleProgressNotify_CmdId[SealBattleProgressNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SealBattleProgressNotify_CmdId = exports.SealBattleProgressNotify_CmdId || (exports.SealBattleProgressNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientPauseNotify.CmdId
 */
var ClientPauseNotify_CmdId;
(function (ClientPauseNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientPauseNotify_CmdId[ClientPauseNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 260;
     */
    ClientPauseNotify_CmdId[ClientPauseNotify_CmdId["CMD_ID"] = 260] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientPauseNotify_CmdId[ClientPauseNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientPauseNotify_CmdId[ClientPauseNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientPauseNotify_CmdId[ClientPauseNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientPauseNotify_CmdId = exports.ClientPauseNotify_CmdId || (exports.ClientPauseNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerEnterSceneInfoNotify.CmdId
 */
var PlayerEnterSceneInfoNotify_CmdId;
(function (PlayerEnterSceneInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 214;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["CMD_ID"] = 214] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEnterSceneInfoNotify_CmdId[PlayerEnterSceneInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerEnterSceneInfoNotify_CmdId = exports.PlayerEnterSceneInfoNotify_CmdId || (exports.PlayerEnterSceneInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.JoinPlayerSceneReq.CmdId
 */
var JoinPlayerSceneReq_CmdId;
(function (JoinPlayerSceneReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinPlayerSceneReq_CmdId[JoinPlayerSceneReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 292;
     */
    JoinPlayerSceneReq_CmdId[JoinPlayerSceneReq_CmdId["CMD_ID"] = 292] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinPlayerSceneReq_CmdId[JoinPlayerSceneReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    JoinPlayerSceneReq_CmdId[JoinPlayerSceneReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    JoinPlayerSceneReq_CmdId[JoinPlayerSceneReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(JoinPlayerSceneReq_CmdId = exports.JoinPlayerSceneReq_CmdId || (exports.JoinPlayerSceneReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.JoinPlayerSceneRsp.CmdId
 */
var JoinPlayerSceneRsp_CmdId;
(function (JoinPlayerSceneRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinPlayerSceneRsp_CmdId[JoinPlayerSceneRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 220;
     */
    JoinPlayerSceneRsp_CmdId[JoinPlayerSceneRsp_CmdId["CMD_ID"] = 220] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinPlayerSceneRsp_CmdId[JoinPlayerSceneRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    JoinPlayerSceneRsp_CmdId[JoinPlayerSceneRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(JoinPlayerSceneRsp_CmdId = exports.JoinPlayerSceneRsp_CmdId || (exports.JoinPlayerSceneRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneKickPlayerReq.CmdId
 */
var SceneKickPlayerReq_CmdId;
(function (SceneKickPlayerReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneKickPlayerReq_CmdId[SceneKickPlayerReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 264;
     */
    SceneKickPlayerReq_CmdId[SceneKickPlayerReq_CmdId["CMD_ID"] = 264] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneKickPlayerReq_CmdId[SceneKickPlayerReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneKickPlayerReq_CmdId[SceneKickPlayerReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneKickPlayerReq_CmdId[SceneKickPlayerReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneKickPlayerReq_CmdId = exports.SceneKickPlayerReq_CmdId || (exports.SceneKickPlayerReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneKickPlayerRsp.CmdId
 */
var SceneKickPlayerRsp_CmdId;
(function (SceneKickPlayerRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneKickPlayerRsp_CmdId[SceneKickPlayerRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 238;
     */
    SceneKickPlayerRsp_CmdId[SceneKickPlayerRsp_CmdId["CMD_ID"] = 238] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneKickPlayerRsp_CmdId[SceneKickPlayerRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneKickPlayerRsp_CmdId[SceneKickPlayerRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneKickPlayerRsp_CmdId = exports.SceneKickPlayerRsp_CmdId || (exports.SceneKickPlayerRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneKickPlayerNotify.CmdId
 */
var SceneKickPlayerNotify_CmdId;
(function (SceneKickPlayerNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneKickPlayerNotify_CmdId[SceneKickPlayerNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 211;
     */
    SceneKickPlayerNotify_CmdId[SceneKickPlayerNotify_CmdId["CMD_ID"] = 211] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneKickPlayerNotify_CmdId[SceneKickPlayerNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneKickPlayerNotify_CmdId[SceneKickPlayerNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneKickPlayerNotify_CmdId[SceneKickPlayerNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneKickPlayerNotify_CmdId = exports.SceneKickPlayerNotify_CmdId || (exports.SceneKickPlayerNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HitClientTrivialNotify.CmdId
 */
var HitClientTrivialNotify_CmdId;
(function (HitClientTrivialNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HitClientTrivialNotify_CmdId[HitClientTrivialNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 244;
     */
    HitClientTrivialNotify_CmdId[HitClientTrivialNotify_CmdId["CMD_ID"] = 244] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HitClientTrivialNotify_CmdId[HitClientTrivialNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HitClientTrivialNotify_CmdId[HitClientTrivialNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HitClientTrivialNotify_CmdId[HitClientTrivialNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HitClientTrivialNotify_CmdId = exports.HitClientTrivialNotify_CmdId || (exports.HitClientTrivialNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BackMyWorldReq.CmdId
 */
var BackMyWorldReq_CmdId;
(function (BackMyWorldReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackMyWorldReq_CmdId[BackMyWorldReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 286;
     */
    BackMyWorldReq_CmdId[BackMyWorldReq_CmdId["CMD_ID"] = 286] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackMyWorldReq_CmdId[BackMyWorldReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackMyWorldReq_CmdId[BackMyWorldReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackMyWorldReq_CmdId[BackMyWorldReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BackMyWorldReq_CmdId = exports.BackMyWorldReq_CmdId || (exports.BackMyWorldReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BackMyWorldRsp.CmdId
 */
var BackMyWorldRsp_CmdId;
(function (BackMyWorldRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackMyWorldRsp_CmdId[BackMyWorldRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 201;
     */
    BackMyWorldRsp_CmdId[BackMyWorldRsp_CmdId["CMD_ID"] = 201] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackMyWorldRsp_CmdId[BackMyWorldRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackMyWorldRsp_CmdId[BackMyWorldRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BackMyWorldRsp_CmdId = exports.BackMyWorldRsp_CmdId || (exports.BackMyWorldRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SeeMonsterReq.CmdId
 */
var SeeMonsterReq_CmdId;
(function (SeeMonsterReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SeeMonsterReq_CmdId[SeeMonsterReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 228;
     */
    SeeMonsterReq_CmdId[SeeMonsterReq_CmdId["CMD_ID"] = 228] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SeeMonsterReq_CmdId[SeeMonsterReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SeeMonsterReq_CmdId[SeeMonsterReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SeeMonsterReq_CmdId[SeeMonsterReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SeeMonsterReq_CmdId = exports.SeeMonsterReq_CmdId || (exports.SeeMonsterReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SeeMonsterRsp.CmdId
 */
var SeeMonsterRsp_CmdId;
(function (SeeMonsterRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SeeMonsterRsp_CmdId[SeeMonsterRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 251;
     */
    SeeMonsterRsp_CmdId[SeeMonsterRsp_CmdId["CMD_ID"] = 251] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SeeMonsterRsp_CmdId[SeeMonsterRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SeeMonsterRsp_CmdId[SeeMonsterRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SeeMonsterRsp_CmdId = exports.SeeMonsterRsp_CmdId || (exports.SeeMonsterRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddSeenMonsterNotify.CmdId
 */
var AddSeenMonsterNotify_CmdId;
(function (AddSeenMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddSeenMonsterNotify_CmdId[AddSeenMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 223;
     */
    AddSeenMonsterNotify_CmdId[AddSeenMonsterNotify_CmdId["CMD_ID"] = 223] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddSeenMonsterNotify_CmdId[AddSeenMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddSeenMonsterNotify_CmdId[AddSeenMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddSeenMonsterNotify_CmdId[AddSeenMonsterNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AddSeenMonsterNotify_CmdId = exports.AddSeenMonsterNotify_CmdId || (exports.AddSeenMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AllSeenMonsterNotify.CmdId
 */
var AllSeenMonsterNotify_CmdId;
(function (AllSeenMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllSeenMonsterNotify_CmdId[AllSeenMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 271;
     */
    AllSeenMonsterNotify_CmdId[AllSeenMonsterNotify_CmdId["CMD_ID"] = 271] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllSeenMonsterNotify_CmdId[AllSeenMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AllSeenMonsterNotify_CmdId[AllSeenMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AllSeenMonsterNotify_CmdId[AllSeenMonsterNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AllSeenMonsterNotify_CmdId = exports.AllSeenMonsterNotify_CmdId || (exports.AllSeenMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneTimeNotify.CmdId
 */
var SceneTimeNotify_CmdId;
(function (SceneTimeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 245;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["CMD_ID"] = 245] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneTimeNotify_CmdId[SceneTimeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneTimeNotify_CmdId = exports.SceneTimeNotify_CmdId || (exports.SceneTimeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterSceneReadyReq.CmdId
 */
var EnterSceneReadyReq_CmdId;
(function (EnterSceneReadyReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneReadyReq_CmdId[EnterSceneReadyReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 208;
     */
    EnterSceneReadyReq_CmdId[EnterSceneReadyReq_CmdId["CMD_ID"] = 208] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneReadyReq_CmdId[EnterSceneReadyReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneReadyReq_CmdId[EnterSceneReadyReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneReadyReq_CmdId[EnterSceneReadyReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterSceneReadyReq_CmdId = exports.EnterSceneReadyReq_CmdId || (exports.EnterSceneReadyReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterSceneReadyRsp.CmdId
 */
var EnterSceneReadyRsp_CmdId;
(function (EnterSceneReadyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 209;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["CMD_ID"] = 209] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneReadyRsp_CmdId[EnterSceneReadyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EnterSceneReadyRsp_CmdId = exports.EnterSceneReadyRsp_CmdId || (exports.EnterSceneReadyRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterScenePeerNotify.CmdId
 */
var EnterScenePeerNotify_CmdId;
(function (EnterScenePeerNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 252;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["CMD_ID"] = 252] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterScenePeerNotify_CmdId[EnterScenePeerNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EnterScenePeerNotify_CmdId = exports.EnterScenePeerNotify_CmdId || (exports.EnterScenePeerNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterSceneDoneReq.CmdId
 */
var EnterSceneDoneReq_CmdId;
(function (EnterSceneDoneReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneDoneReq_CmdId[EnterSceneDoneReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 277;
     */
    EnterSceneDoneReq_CmdId[EnterSceneDoneReq_CmdId["CMD_ID"] = 277] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneDoneReq_CmdId[EnterSceneDoneReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneDoneReq_CmdId[EnterSceneDoneReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneDoneReq_CmdId[EnterSceneDoneReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterSceneDoneReq_CmdId = exports.EnterSceneDoneReq_CmdId || (exports.EnterSceneDoneReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterSceneDoneRsp.CmdId
 */
var EnterSceneDoneRsp_CmdId;
(function (EnterSceneDoneRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneDoneRsp_CmdId[EnterSceneDoneRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 237;
     */
    EnterSceneDoneRsp_CmdId[EnterSceneDoneRsp_CmdId["CMD_ID"] = 237] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterSceneDoneRsp_CmdId[EnterSceneDoneRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterSceneDoneRsp_CmdId[EnterSceneDoneRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EnterSceneDoneRsp_CmdId = exports.EnterSceneDoneRsp_CmdId || (exports.EnterSceneDoneRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldPlayerDieNotify.CmdId
 */
var WorldPlayerDieNotify_CmdId;
(function (WorldPlayerDieNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerDieNotify_CmdId[WorldPlayerDieNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 285;
     */
    WorldPlayerDieNotify_CmdId[WorldPlayerDieNotify_CmdId["CMD_ID"] = 285] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerDieNotify_CmdId[WorldPlayerDieNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerDieNotify_CmdId[WorldPlayerDieNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldPlayerDieNotify_CmdId = exports.WorldPlayerDieNotify_CmdId || (exports.WorldPlayerDieNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldPlayerReviveReq.CmdId
 */
var WorldPlayerReviveReq_CmdId;
(function (WorldPlayerReviveReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerReviveReq_CmdId[WorldPlayerReviveReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 225;
     */
    WorldPlayerReviveReq_CmdId[WorldPlayerReviveReq_CmdId["CMD_ID"] = 225] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerReviveReq_CmdId[WorldPlayerReviveReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerReviveReq_CmdId[WorldPlayerReviveReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerReviveReq_CmdId[WorldPlayerReviveReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WorldPlayerReviveReq_CmdId = exports.WorldPlayerReviveReq_CmdId || (exports.WorldPlayerReviveReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldPlayerReviveRsp.CmdId
 */
var WorldPlayerReviveRsp_CmdId;
(function (WorldPlayerReviveRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerReviveRsp_CmdId[WorldPlayerReviveRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 278;
     */
    WorldPlayerReviveRsp_CmdId[WorldPlayerReviveRsp_CmdId["CMD_ID"] = 278] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerReviveRsp_CmdId[WorldPlayerReviveRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerReviveRsp_CmdId[WorldPlayerReviveRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldPlayerReviveRsp_CmdId = exports.WorldPlayerReviveRsp_CmdId || (exports.WorldPlayerReviveRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.JoinPlayerFailNotify.CmdId
 */
var JoinPlayerFailNotify_CmdId;
(function (JoinPlayerFailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinPlayerFailNotify_CmdId[JoinPlayerFailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 236;
     */
    JoinPlayerFailNotify_CmdId[JoinPlayerFailNotify_CmdId["CMD_ID"] = 236] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    JoinPlayerFailNotify_CmdId[JoinPlayerFailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    JoinPlayerFailNotify_CmdId[JoinPlayerFailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(JoinPlayerFailNotify_CmdId = exports.JoinPlayerFailNotify_CmdId || (exports.JoinPlayerFailNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetSceneWeatherAreaReq.CmdId
 */
var SetSceneWeatherAreaReq_CmdId;
(function (SetSceneWeatherAreaReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetSceneWeatherAreaReq_CmdId[SetSceneWeatherAreaReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 254;
     */
    SetSceneWeatherAreaReq_CmdId[SetSceneWeatherAreaReq_CmdId["CMD_ID"] = 254] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetSceneWeatherAreaReq_CmdId[SetSceneWeatherAreaReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetSceneWeatherAreaReq_CmdId[SetSceneWeatherAreaReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetSceneWeatherAreaReq_CmdId[SetSceneWeatherAreaReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetSceneWeatherAreaReq_CmdId = exports.SetSceneWeatherAreaReq_CmdId || (exports.SetSceneWeatherAreaReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetSceneWeatherAreaRsp.CmdId
 */
var SetSceneWeatherAreaRsp_CmdId;
(function (SetSceneWeatherAreaRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetSceneWeatherAreaRsp_CmdId[SetSceneWeatherAreaRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 283;
     */
    SetSceneWeatherAreaRsp_CmdId[SetSceneWeatherAreaRsp_CmdId["CMD_ID"] = 283] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetSceneWeatherAreaRsp_CmdId[SetSceneWeatherAreaRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetSceneWeatherAreaRsp_CmdId[SetSceneWeatherAreaRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetSceneWeatherAreaRsp_CmdId = exports.SetSceneWeatherAreaRsp_CmdId || (exports.SetSceneWeatherAreaRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExecuteGadgetLuaReq.CmdId
 */
var ExecuteGadgetLuaReq_CmdId;
(function (ExecuteGadgetLuaReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGadgetLuaReq_CmdId[ExecuteGadgetLuaReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 269;
     */
    ExecuteGadgetLuaReq_CmdId[ExecuteGadgetLuaReq_CmdId["CMD_ID"] = 269] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGadgetLuaReq_CmdId[ExecuteGadgetLuaReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExecuteGadgetLuaReq_CmdId[ExecuteGadgetLuaReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExecuteGadgetLuaReq_CmdId[ExecuteGadgetLuaReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ExecuteGadgetLuaReq_CmdId = exports.ExecuteGadgetLuaReq_CmdId || (exports.ExecuteGadgetLuaReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExecuteGadgetLuaRsp.CmdId
 */
var ExecuteGadgetLuaRsp_CmdId;
(function (ExecuteGadgetLuaRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGadgetLuaRsp_CmdId[ExecuteGadgetLuaRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 210;
     */
    ExecuteGadgetLuaRsp_CmdId[ExecuteGadgetLuaRsp_CmdId["CMD_ID"] = 210] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExecuteGadgetLuaRsp_CmdId[ExecuteGadgetLuaRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExecuteGadgetLuaRsp_CmdId[ExecuteGadgetLuaRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ExecuteGadgetLuaRsp_CmdId = exports.ExecuteGadgetLuaRsp_CmdId || (exports.ExecuteGadgetLuaRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CutSceneBeginNotify.CmdId
 */
var CutSceneBeginNotify_CmdId;
(function (CutSceneBeginNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CutSceneBeginNotify_CmdId[CutSceneBeginNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 296;
     */
    CutSceneBeginNotify_CmdId[CutSceneBeginNotify_CmdId["CMD_ID"] = 296] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CutSceneBeginNotify_CmdId[CutSceneBeginNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CutSceneBeginNotify_CmdId[CutSceneBeginNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CutSceneBeginNotify_CmdId = exports.CutSceneBeginNotify_CmdId || (exports.CutSceneBeginNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CutSceneFinishNotify.CmdId
 */
var CutSceneFinishNotify_CmdId;
(function (CutSceneFinishNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CutSceneFinishNotify_CmdId[CutSceneFinishNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 262;
     */
    CutSceneFinishNotify_CmdId[CutSceneFinishNotify_CmdId["CMD_ID"] = 262] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CutSceneFinishNotify_CmdId[CutSceneFinishNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CutSceneFinishNotify_CmdId[CutSceneFinishNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CutSceneFinishNotify_CmdId[CutSceneFinishNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CutSceneFinishNotify_CmdId = exports.CutSceneFinishNotify_CmdId || (exports.CutSceneFinishNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CutSceneEndNotify.CmdId
 */
var CutSceneEndNotify_CmdId;
(function (CutSceneEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CutSceneEndNotify_CmdId[CutSceneEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 215;
     */
    CutSceneEndNotify_CmdId[CutSceneEndNotify_CmdId["CMD_ID"] = 215] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CutSceneEndNotify_CmdId[CutSceneEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CutSceneEndNotify_CmdId[CutSceneEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CutSceneEndNotify_CmdId = exports.CutSceneEndNotify_CmdId || (exports.CutSceneEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientScriptEventNotify.CmdId
 */
var ClientScriptEventNotify_CmdId;
(function (ClientScriptEventNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientScriptEventNotify_CmdId[ClientScriptEventNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 213;
     */
    ClientScriptEventNotify_CmdId[ClientScriptEventNotify_CmdId["CMD_ID"] = 213] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientScriptEventNotify_CmdId[ClientScriptEventNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientScriptEventNotify_CmdId[ClientScriptEventNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientScriptEventNotify_CmdId[ClientScriptEventNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientScriptEventNotify_CmdId = exports.ClientScriptEventNotify_CmdId || (exports.ClientScriptEventNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntitiesMovesReq.CmdId
 */
var SceneEntitiesMovesReq_CmdId;
(function (SceneEntitiesMovesReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntitiesMovesReq_CmdId[SceneEntitiesMovesReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 279;
     */
    SceneEntitiesMovesReq_CmdId[SceneEntitiesMovesReq_CmdId["CMD_ID"] = 279] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntitiesMovesReq_CmdId[SceneEntitiesMovesReq_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntitiesMovesReq_CmdId[SceneEntitiesMovesReq_CmdId["ENET_IS_RELIABLE"] = 0] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntitiesMovesReq_CmdId[SceneEntitiesMovesReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneEntitiesMovesReq_CmdId = exports.SceneEntitiesMovesReq_CmdId || (exports.SceneEntitiesMovesReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntitiesMovesRsp.CmdId
 */
var SceneEntitiesMovesRsp_CmdId;
(function (SceneEntitiesMovesRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntitiesMovesRsp_CmdId[SceneEntitiesMovesRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 255;
     */
    SceneEntitiesMovesRsp_CmdId[SceneEntitiesMovesRsp_CmdId["CMD_ID"] = 255] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntitiesMovesRsp_CmdId[SceneEntitiesMovesRsp_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntitiesMovesRsp_CmdId[SceneEntitiesMovesRsp_CmdId["ENET_IS_RELIABLE"] = 0] = "ENET_IS_RELIABLE";
})(SceneEntitiesMovesRsp_CmdId = exports.SceneEntitiesMovesRsp_CmdId || (exports.SceneEntitiesMovesRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntitiesMoveCombineNotify.CmdId
 */
var SceneEntitiesMoveCombineNotify_CmdId;
(function (SceneEntitiesMoveCombineNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntitiesMoveCombineNotify_CmdId[SceneEntitiesMoveCombineNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3387;
     */
    SceneEntitiesMoveCombineNotify_CmdId[SceneEntitiesMoveCombineNotify_CmdId["CMD_ID"] = 3387] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    SceneEntitiesMoveCombineNotify_CmdId[SceneEntitiesMoveCombineNotify_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntitiesMoveCombineNotify_CmdId[SceneEntitiesMoveCombineNotify_CmdId["ENET_IS_RELIABLE"] = 0] = "ENET_IS_RELIABLE";
})(SceneEntitiesMoveCombineNotify_CmdId = exports.SceneEntitiesMoveCombineNotify_CmdId || (exports.SceneEntitiesMoveCombineNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockTransPointReq.CmdId
 */
var UnlockTransPointReq_CmdId;
(function (UnlockTransPointReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockTransPointReq_CmdId[UnlockTransPointReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3035;
     */
    UnlockTransPointReq_CmdId[UnlockTransPointReq_CmdId["CMD_ID"] = 3035] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    UnlockTransPointReq_CmdId[UnlockTransPointReq_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    UnlockTransPointReq_CmdId[UnlockTransPointReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    UnlockTransPointReq_CmdId[UnlockTransPointReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UnlockTransPointReq_CmdId = exports.UnlockTransPointReq_CmdId || (exports.UnlockTransPointReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockTransPointRsp.CmdId
 */
var UnlockTransPointRsp_CmdId;
(function (UnlockTransPointRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockTransPointRsp_CmdId[UnlockTransPointRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3426;
     */
    UnlockTransPointRsp_CmdId[UnlockTransPointRsp_CmdId["CMD_ID"] = 3426] = "CMD_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    UnlockTransPointRsp_CmdId[UnlockTransPointRsp_CmdId["ENET_CHANNEL_ID"] = 1] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 1;
     */
    UnlockTransPointRsp_CmdId[UnlockTransPointRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnlockTransPointRsp_CmdId = exports.UnlockTransPointRsp_CmdId || (exports.UnlockTransPointRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneWeatherForcastReq.CmdId
 */
var SceneWeatherForcastReq_CmdId;
(function (SceneWeatherForcastReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneWeatherForcastReq_CmdId[SceneWeatherForcastReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3110;
     */
    SceneWeatherForcastReq_CmdId[SceneWeatherForcastReq_CmdId["CMD_ID"] = 3110] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneWeatherForcastReq_CmdId[SceneWeatherForcastReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneWeatherForcastReq_CmdId[SceneWeatherForcastReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneWeatherForcastReq_CmdId[SceneWeatherForcastReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneWeatherForcastReq_CmdId = exports.SceneWeatherForcastReq_CmdId || (exports.SceneWeatherForcastReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneWeatherForcastRsp.CmdId
 */
var SceneWeatherForcastRsp_CmdId;
(function (SceneWeatherForcastRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneWeatherForcastRsp_CmdId[SceneWeatherForcastRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3012;
     */
    SceneWeatherForcastRsp_CmdId[SceneWeatherForcastRsp_CmdId["CMD_ID"] = 3012] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneWeatherForcastRsp_CmdId[SceneWeatherForcastRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneWeatherForcastRsp_CmdId[SceneWeatherForcastRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneWeatherForcastRsp_CmdId = exports.SceneWeatherForcastRsp_CmdId || (exports.SceneWeatherForcastRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MarkMapReq.Operation
 */
var MarkMapReq_Operation;
(function (MarkMapReq_Operation) {
    /**
     * @generated from protobuf enum value: ADD = 0;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["ADD"] = 0] = "ADD";
    /**
     * @generated from protobuf enum value: MOD = 1;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["MOD"] = 1] = "MOD";
    /**
     * @generated from protobuf enum value: DEL = 2;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["DEL"] = 2] = "DEL";
    /**
     * @generated from protobuf enum value: GET = 3;
     */
    MarkMapReq_Operation[MarkMapReq_Operation["GET"] = 3] = "GET";
})(MarkMapReq_Operation = exports.MarkMapReq_Operation || (exports.MarkMapReq_Operation = {}));
/**
 * @generated from protobuf enum com.midnights.game.MarkMapReq.CmdId
 */
var MarkMapReq_CmdId;
(function (MarkMapReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkMapReq_CmdId[MarkMapReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3466;
     */
    MarkMapReq_CmdId[MarkMapReq_CmdId["CMD_ID"] = 3466] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkMapReq_CmdId[MarkMapReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MarkMapReq_CmdId[MarkMapReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MarkMapReq_CmdId[MarkMapReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MarkMapReq_CmdId = exports.MarkMapReq_CmdId || (exports.MarkMapReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MarkMapRsp.CmdId
 */
var MarkMapRsp_CmdId;
(function (MarkMapRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkMapRsp_CmdId[MarkMapRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3079;
     */
    MarkMapRsp_CmdId[MarkMapRsp_CmdId["CMD_ID"] = 3079] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkMapRsp_CmdId[MarkMapRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MarkMapRsp_CmdId[MarkMapRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MarkMapRsp_CmdId = exports.MarkMapRsp_CmdId || (exports.MarkMapRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AllMarkPointNotify.CmdId
 */
var AllMarkPointNotify_CmdId;
(function (AllMarkPointNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllMarkPointNotify_CmdId[AllMarkPointNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3283;
     */
    AllMarkPointNotify_CmdId[AllMarkPointNotify_CmdId["CMD_ID"] = 3283] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllMarkPointNotify_CmdId[AllMarkPointNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AllMarkPointNotify_CmdId[AllMarkPointNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AllMarkPointNotify_CmdId = exports.AllMarkPointNotify_CmdId || (exports.AllMarkPointNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldDataNotify.CmdId
 */
var WorldDataNotify_CmdId;
(function (WorldDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldDataNotify_CmdId[WorldDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3308;
     */
    WorldDataNotify_CmdId[WorldDataNotify_CmdId["CMD_ID"] = 3308] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldDataNotify_CmdId[WorldDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldDataNotify_CmdId[WorldDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldDataNotify_CmdId[WorldDataNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WorldDataNotify_CmdId = exports.WorldDataNotify_CmdId || (exports.WorldDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldDataNotify.DataType
 */
var WorldDataNotify_DataType;
(function (WorldDataNotify_DataType) {
    /**
     * @generated from protobuf enum value: DATA_NONE = 0;
     */
    WorldDataNotify_DataType[WorldDataNotify_DataType["DATA_NONE"] = 0] = "DATA_NONE";
    /**
     * @generated from protobuf enum value: WORLD_LEVEL = 1;
     */
    WorldDataNotify_DataType[WorldDataNotify_DataType["WORLD_LEVEL"] = 1] = "WORLD_LEVEL";
    /**
     * @generated from protobuf enum value: IS_IN_MP_MODE = 2;
     */
    WorldDataNotify_DataType[WorldDataNotify_DataType["IS_IN_MP_MODE"] = 2] = "IS_IN_MP_MODE";
})(WorldDataNotify_DataType = exports.WorldDataNotify_DataType || (exports.WorldDataNotify_DataType = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityMoveRoomNotify.CmdId
 */
var EntityMoveRoomNotify_CmdId;
(function (EntityMoveRoomNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityMoveRoomNotify_CmdId[EntityMoveRoomNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3178;
     */
    EntityMoveRoomNotify_CmdId[EntityMoveRoomNotify_CmdId["CMD_ID"] = 3178] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityMoveRoomNotify_CmdId[EntityMoveRoomNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityMoveRoomNotify_CmdId[EntityMoveRoomNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityMoveRoomNotify_CmdId[EntityMoveRoomNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EntityMoveRoomNotify_CmdId = exports.EntityMoveRoomNotify_CmdId || (exports.EntityMoveRoomNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldPlayerInfoNotify.CmdId
 */
var WorldPlayerInfoNotify_CmdId;
(function (WorldPlayerInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3116;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["CMD_ID"] = 3116] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldPlayerInfoNotify_CmdId[WorldPlayerInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WorldPlayerInfoNotify_CmdId = exports.WorldPlayerInfoNotify_CmdId || (exports.WorldPlayerInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PostEnterSceneReq.CmdId
 */
var PostEnterSceneReq_CmdId;
(function (PostEnterSceneReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PostEnterSceneReq_CmdId[PostEnterSceneReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3312;
     */
    PostEnterSceneReq_CmdId[PostEnterSceneReq_CmdId["CMD_ID"] = 3312] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PostEnterSceneReq_CmdId[PostEnterSceneReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PostEnterSceneReq_CmdId[PostEnterSceneReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PostEnterSceneReq_CmdId[PostEnterSceneReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PostEnterSceneReq_CmdId = exports.PostEnterSceneReq_CmdId || (exports.PostEnterSceneReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PostEnterSceneRsp.CmdId
 */
var PostEnterSceneRsp_CmdId;
(function (PostEnterSceneRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PostEnterSceneRsp_CmdId[PostEnterSceneRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3184;
     */
    PostEnterSceneRsp_CmdId[PostEnterSceneRsp_CmdId["CMD_ID"] = 3184] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PostEnterSceneRsp_CmdId[PostEnterSceneRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PostEnterSceneRsp_CmdId[PostEnterSceneRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PostEnterSceneRsp_CmdId = exports.PostEnterSceneRsp_CmdId || (exports.PostEnterSceneRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChatInfo.SystemHintType
 */
var ChatInfo_SystemHintType;
(function (ChatInfo_SystemHintType) {
    /**
     * @generated from protobuf enum value: CHAT_NONE = 0;
     */
    ChatInfo_SystemHintType[ChatInfo_SystemHintType["CHAT_NONE"] = 0] = "CHAT_NONE";
    /**
     * @generated from protobuf enum value: CHAT_ENTER_WORLD = 1;
     */
    ChatInfo_SystemHintType[ChatInfo_SystemHintType["CHAT_ENTER_WORLD"] = 1] = "CHAT_ENTER_WORLD";
    /**
     * @generated from protobuf enum value: CHAT_LEAVE_WORLD = 2;
     */
    ChatInfo_SystemHintType[ChatInfo_SystemHintType["CHAT_LEAVE_WORLD"] = 2] = "CHAT_LEAVE_WORLD";
})(ChatInfo_SystemHintType = exports.ChatInfo_SystemHintType || (exports.ChatInfo_SystemHintType = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerChatReq.CmdId
 */
var PlayerChatReq_CmdId;
(function (PlayerChatReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatReq_CmdId[PlayerChatReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3185;
     */
    PlayerChatReq_CmdId[PlayerChatReq_CmdId["CMD_ID"] = 3185] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatReq_CmdId[PlayerChatReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerChatReq_CmdId[PlayerChatReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerChatReq_CmdId[PlayerChatReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerChatReq_CmdId = exports.PlayerChatReq_CmdId || (exports.PlayerChatReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerChatRsp.CmdId
 */
var PlayerChatRsp_CmdId;
(function (PlayerChatRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatRsp_CmdId[PlayerChatRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3228;
     */
    PlayerChatRsp_CmdId[PlayerChatRsp_CmdId["CMD_ID"] = 3228] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatRsp_CmdId[PlayerChatRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerChatRsp_CmdId[PlayerChatRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerChatRsp_CmdId = exports.PlayerChatRsp_CmdId || (exports.PlayerChatRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerChatNotify.CmdId
 */
var PlayerChatNotify_CmdId;
(function (PlayerChatNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatNotify_CmdId[PlayerChatNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3010;
     */
    PlayerChatNotify_CmdId[PlayerChatNotify_CmdId["CMD_ID"] = 3010] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatNotify_CmdId[PlayerChatNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerChatNotify_CmdId[PlayerChatNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerChatNotify_CmdId = exports.PlayerChatNotify_CmdId || (exports.PlayerChatNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerChatCDNotify.CmdId
 */
var PlayerChatCDNotify_CmdId;
(function (PlayerChatCDNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatCDNotify_CmdId[PlayerChatCDNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3367;
     */
    PlayerChatCDNotify_CmdId[PlayerChatCDNotify_CmdId["CMD_ID"] = 3367] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerChatCDNotify_CmdId[PlayerChatCDNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerChatCDNotify_CmdId[PlayerChatCDNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerChatCDNotify_CmdId = exports.PlayerChatCDNotify_CmdId || (exports.PlayerChatCDNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChatHistoryNotify.CmdId
 */
var ChatHistoryNotify_CmdId;
(function (ChatHistoryNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChatHistoryNotify_CmdId[ChatHistoryNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3496;
     */
    ChatHistoryNotify_CmdId[ChatHistoryNotify_CmdId["CMD_ID"] = 3496] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChatHistoryNotify_CmdId[ChatHistoryNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChatHistoryNotify_CmdId[ChatHistoryNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChatHistoryNotify_CmdId = exports.ChatHistoryNotify_CmdId || (exports.ChatHistoryNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneDataNotify.CmdId
 */
var SceneDataNotify_CmdId;
(function (SceneDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3203;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["CMD_ID"] = 3203] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneDataNotify_CmdId[SceneDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneDataNotify_CmdId = exports.SceneDataNotify_CmdId || (exports.SceneDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonEntryToBeExploreNotify.CmdId
 */
var DungeonEntryToBeExploreNotify_CmdId;
(function (DungeonEntryToBeExploreNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonEntryToBeExploreNotify_CmdId[DungeonEntryToBeExploreNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3147;
     */
    DungeonEntryToBeExploreNotify_CmdId[DungeonEntryToBeExploreNotify_CmdId["CMD_ID"] = 3147] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DungeonEntryToBeExploreNotify_CmdId[DungeonEntryToBeExploreNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DungeonEntryToBeExploreNotify_CmdId[DungeonEntryToBeExploreNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DungeonEntryToBeExploreNotify_CmdId = exports.DungeonEntryToBeExploreNotify_CmdId || (exports.DungeonEntryToBeExploreNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetDungeonEntryExploreConditionReq.CmdId
 */
var GetDungeonEntryExploreConditionReq_CmdId;
(function (GetDungeonEntryExploreConditionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDungeonEntryExploreConditionReq_CmdId[GetDungeonEntryExploreConditionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3165;
     */
    GetDungeonEntryExploreConditionReq_CmdId[GetDungeonEntryExploreConditionReq_CmdId["CMD_ID"] = 3165] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDungeonEntryExploreConditionReq_CmdId[GetDungeonEntryExploreConditionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetDungeonEntryExploreConditionReq_CmdId[GetDungeonEntryExploreConditionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetDungeonEntryExploreConditionReq_CmdId[GetDungeonEntryExploreConditionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetDungeonEntryExploreConditionReq_CmdId = exports.GetDungeonEntryExploreConditionReq_CmdId || (exports.GetDungeonEntryExploreConditionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetDungeonEntryExploreConditionRsp.CmdId
 */
var GetDungeonEntryExploreConditionRsp_CmdId;
(function (GetDungeonEntryExploreConditionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDungeonEntryExploreConditionRsp_CmdId[GetDungeonEntryExploreConditionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3269;
     */
    GetDungeonEntryExploreConditionRsp_CmdId[GetDungeonEntryExploreConditionRsp_CmdId["CMD_ID"] = 3269] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetDungeonEntryExploreConditionRsp_CmdId[GetDungeonEntryExploreConditionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetDungeonEntryExploreConditionRsp_CmdId[GetDungeonEntryExploreConditionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetDungeonEntryExploreConditionRsp_CmdId = exports.GetDungeonEntryExploreConditionRsp_CmdId || (exports.GetDungeonEntryExploreConditionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnfreezeGroupLimitNotify.CmdId
 */
var UnfreezeGroupLimitNotify_CmdId;
(function (UnfreezeGroupLimitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnfreezeGroupLimitNotify_CmdId[UnfreezeGroupLimitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3220;
     */
    UnfreezeGroupLimitNotify_CmdId[UnfreezeGroupLimitNotify_CmdId["CMD_ID"] = 3220] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnfreezeGroupLimitNotify_CmdId[UnfreezeGroupLimitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnfreezeGroupLimitNotify_CmdId[UnfreezeGroupLimitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnfreezeGroupLimitNotify_CmdId = exports.UnfreezeGroupLimitNotify_CmdId || (exports.UnfreezeGroupLimitNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetEntityClientDataNotify.CmdId
 */
var SetEntityClientDataNotify_CmdId;
(function (SetEntityClientDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetEntityClientDataNotify_CmdId[SetEntityClientDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3146;
     */
    SetEntityClientDataNotify_CmdId[SetEntityClientDataNotify_CmdId["CMD_ID"] = 3146] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetEntityClientDataNotify_CmdId[SetEntityClientDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetEntityClientDataNotify_CmdId[SetEntityClientDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetEntityClientDataNotify_CmdId[SetEntityClientDataNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetEntityClientDataNotify_CmdId = exports.SetEntityClientDataNotify_CmdId || (exports.SetEntityClientDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GroupSuiteNotify.CmdId
 */
var GroupSuiteNotify_CmdId;
(function (GroupSuiteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupSuiteNotify_CmdId[GroupSuiteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3257;
     */
    GroupSuiteNotify_CmdId[GroupSuiteNotify_CmdId["CMD_ID"] = 3257] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupSuiteNotify_CmdId[GroupSuiteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GroupSuiteNotify_CmdId[GroupSuiteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GroupSuiteNotify_CmdId = exports.GroupSuiteNotify_CmdId || (exports.GroupSuiteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GroupUnloadNotify.CmdId
 */
var GroupUnloadNotify_CmdId;
(function (GroupUnloadNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupUnloadNotify_CmdId[GroupUnloadNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3344;
     */
    GroupUnloadNotify_CmdId[GroupUnloadNotify_CmdId["CMD_ID"] = 3344] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupUnloadNotify_CmdId[GroupUnloadNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GroupUnloadNotify_CmdId[GroupUnloadNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GroupUnloadNotify_CmdId = exports.GroupUnloadNotify_CmdId || (exports.GroupUnloadNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MonsterAIConfigHashNotify.CmdId
 */
var MonsterAIConfigHashNotify_CmdId;
(function (MonsterAIConfigHashNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterAIConfigHashNotify_CmdId[MonsterAIConfigHashNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3039;
     */
    MonsterAIConfigHashNotify_CmdId[MonsterAIConfigHashNotify_CmdId["CMD_ID"] = 3039] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterAIConfigHashNotify_CmdId[MonsterAIConfigHashNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MonsterAIConfigHashNotify_CmdId[MonsterAIConfigHashNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MonsterAIConfigHashNotify_CmdId[MonsterAIConfigHashNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MonsterAIConfigHashNotify_CmdId = exports.MonsterAIConfigHashNotify_CmdId || (exports.MonsterAIConfigHashNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ShowTemplateReminderNotify.CmdId
 */
var ShowTemplateReminderNotify_CmdId;
(function (ShowTemplateReminderNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowTemplateReminderNotify_CmdId[ShowTemplateReminderNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3491;
     */
    ShowTemplateReminderNotify_CmdId[ShowTemplateReminderNotify_CmdId["CMD_ID"] = 3491] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowTemplateReminderNotify_CmdId[ShowTemplateReminderNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ShowTemplateReminderNotify_CmdId[ShowTemplateReminderNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ShowTemplateReminderNotify_CmdId = exports.ShowTemplateReminderNotify_CmdId || (exports.ShowTemplateReminderNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ShowCommonTipsNotify.CmdId
 */
var ShowCommonTipsNotify_CmdId;
(function (ShowCommonTipsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowCommonTipsNotify_CmdId[ShowCommonTipsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3352;
     */
    ShowCommonTipsNotify_CmdId[ShowCommonTipsNotify_CmdId["CMD_ID"] = 3352] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowCommonTipsNotify_CmdId[ShowCommonTipsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ShowCommonTipsNotify_CmdId[ShowCommonTipsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ShowCommonTipsNotify_CmdId = exports.ShowCommonTipsNotify_CmdId || (exports.ShowCommonTipsNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CloseCommonTipsNotify.CmdId
 */
var CloseCommonTipsNotify_CmdId;
(function (CloseCommonTipsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CloseCommonTipsNotify_CmdId[CloseCommonTipsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3194;
     */
    CloseCommonTipsNotify_CmdId[CloseCommonTipsNotify_CmdId["CMD_ID"] = 3194] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CloseCommonTipsNotify_CmdId[CloseCommonTipsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CloseCommonTipsNotify_CmdId[CloseCommonTipsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CloseCommonTipsNotify_CmdId = exports.CloseCommonTipsNotify_CmdId || (exports.CloseCommonTipsNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeWorldToSingleModeNotify.CmdId
 */
var ChangeWorldToSingleModeNotify_CmdId;
(function (ChangeWorldToSingleModeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWorldToSingleModeNotify_CmdId[ChangeWorldToSingleModeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3006;
     */
    ChangeWorldToSingleModeNotify_CmdId[ChangeWorldToSingleModeNotify_CmdId["CMD_ID"] = 3006] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWorldToSingleModeNotify_CmdId[ChangeWorldToSingleModeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWorldToSingleModeNotify_CmdId[ChangeWorldToSingleModeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWorldToSingleModeNotify_CmdId[ChangeWorldToSingleModeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeWorldToSingleModeNotify_CmdId = exports.ChangeWorldToSingleModeNotify_CmdId || (exports.ChangeWorldToSingleModeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SyncScenePlayTeamEntityNotify.CmdId
 */
var SyncScenePlayTeamEntityNotify_CmdId;
(function (SyncScenePlayTeamEntityNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SyncScenePlayTeamEntityNotify_CmdId[SyncScenePlayTeamEntityNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3333;
     */
    SyncScenePlayTeamEntityNotify_CmdId[SyncScenePlayTeamEntityNotify_CmdId["CMD_ID"] = 3333] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SyncScenePlayTeamEntityNotify_CmdId[SyncScenePlayTeamEntityNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SyncScenePlayTeamEntityNotify_CmdId[SyncScenePlayTeamEntityNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SyncScenePlayTeamEntityNotify_CmdId = exports.SyncScenePlayTeamEntityNotify_CmdId || (exports.SyncScenePlayTeamEntityNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DelScenePlayTeamEntityNotify.CmdId
 */
var DelScenePlayTeamEntityNotify_CmdId;
(function (DelScenePlayTeamEntityNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelScenePlayTeamEntityNotify_CmdId[DelScenePlayTeamEntityNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3318;
     */
    DelScenePlayTeamEntityNotify_CmdId[DelScenePlayTeamEntityNotify_CmdId["CMD_ID"] = 3318] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelScenePlayTeamEntityNotify_CmdId[DelScenePlayTeamEntityNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelScenePlayTeamEntityNotify_CmdId[DelScenePlayTeamEntityNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DelScenePlayTeamEntityNotify_CmdId = exports.DelScenePlayTeamEntityNotify_CmdId || (exports.DelScenePlayTeamEntityNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerEyePointStateNotify.CmdId
 */
var PlayerEyePointStateNotify_CmdId;
(function (PlayerEyePointStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEyePointStateNotify_CmdId[PlayerEyePointStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3051;
     */
    PlayerEyePointStateNotify_CmdId[PlayerEyePointStateNotify_CmdId["CMD_ID"] = 3051] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerEyePointStateNotify_CmdId[PlayerEyePointStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerEyePointStateNotify_CmdId[PlayerEyePointStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerEyePointStateNotify_CmdId = exports.PlayerEyePointStateNotify_CmdId || (exports.PlayerEyePointStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetMapMarkTipsReq.CmdId
 */
var GetMapMarkTipsReq_CmdId;
(function (GetMapMarkTipsReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapMarkTipsReq_CmdId[GetMapMarkTipsReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3463;
     */
    GetMapMarkTipsReq_CmdId[GetMapMarkTipsReq_CmdId["CMD_ID"] = 3463] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapMarkTipsReq_CmdId[GetMapMarkTipsReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMapMarkTipsReq_CmdId[GetMapMarkTipsReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMapMarkTipsReq_CmdId[GetMapMarkTipsReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetMapMarkTipsReq_CmdId = exports.GetMapMarkTipsReq_CmdId || (exports.GetMapMarkTipsReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetMapMarkTipsRsp.CmdId
 */
var GetMapMarkTipsRsp_CmdId;
(function (GetMapMarkTipsRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapMarkTipsRsp_CmdId[GetMapMarkTipsRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3327;
     */
    GetMapMarkTipsRsp_CmdId[GetMapMarkTipsRsp_CmdId["CMD_ID"] = 3327] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapMarkTipsRsp_CmdId[GetMapMarkTipsRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMapMarkTipsRsp_CmdId[GetMapMarkTipsRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetMapMarkTipsRsp_CmdId = exports.GetMapMarkTipsRsp_CmdId || (exports.GetMapMarkTipsRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeWorldToSingleModeReq.CmdId
 */
var ChangeWorldToSingleModeReq_CmdId;
(function (ChangeWorldToSingleModeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWorldToSingleModeReq_CmdId[ChangeWorldToSingleModeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3066;
     */
    ChangeWorldToSingleModeReq_CmdId[ChangeWorldToSingleModeReq_CmdId["CMD_ID"] = 3066] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWorldToSingleModeReq_CmdId[ChangeWorldToSingleModeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWorldToSingleModeReq_CmdId[ChangeWorldToSingleModeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWorldToSingleModeReq_CmdId[ChangeWorldToSingleModeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeWorldToSingleModeReq_CmdId = exports.ChangeWorldToSingleModeReq_CmdId || (exports.ChangeWorldToSingleModeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeWorldToSingleModeRsp.CmdId
 */
var ChangeWorldToSingleModeRsp_CmdId;
(function (ChangeWorldToSingleModeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWorldToSingleModeRsp_CmdId[ChangeWorldToSingleModeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3282;
     */
    ChangeWorldToSingleModeRsp_CmdId[ChangeWorldToSingleModeRsp_CmdId["CMD_ID"] = 3282] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeWorldToSingleModeRsp_CmdId[ChangeWorldToSingleModeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeWorldToSingleModeRsp_CmdId[ChangeWorldToSingleModeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChangeWorldToSingleModeRsp_CmdId = exports.ChangeWorldToSingleModeRsp_CmdId || (exports.ChangeWorldToSingleModeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetWorldMpInfoReq.CmdId
 */
var GetWorldMpInfoReq_CmdId;
(function (GetWorldMpInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWorldMpInfoReq_CmdId[GetWorldMpInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3391;
     */
    GetWorldMpInfoReq_CmdId[GetWorldMpInfoReq_CmdId["CMD_ID"] = 3391] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWorldMpInfoReq_CmdId[GetWorldMpInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetWorldMpInfoReq_CmdId[GetWorldMpInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetWorldMpInfoReq_CmdId[GetWorldMpInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetWorldMpInfoReq_CmdId = exports.GetWorldMpInfoReq_CmdId || (exports.GetWorldMpInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetWorldMpInfoRsp.CmdId
 */
var GetWorldMpInfoRsp_CmdId;
(function (GetWorldMpInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWorldMpInfoRsp_CmdId[GetWorldMpInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3320;
     */
    GetWorldMpInfoRsp_CmdId[GetWorldMpInfoRsp_CmdId["CMD_ID"] = 3320] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetWorldMpInfoRsp_CmdId[GetWorldMpInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetWorldMpInfoRsp_CmdId[GetWorldMpInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetWorldMpInfoRsp_CmdId = exports.GetWorldMpInfoRsp_CmdId || (exports.GetWorldMpInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityConfigHashNotify.CmdId
 */
var EntityConfigHashNotify_CmdId;
(function (EntityConfigHashNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityConfigHashNotify_CmdId[EntityConfigHashNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3189;
     */
    EntityConfigHashNotify_CmdId[EntityConfigHashNotify_CmdId["CMD_ID"] = 3189] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityConfigHashNotify_CmdId[EntityConfigHashNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityConfigHashNotify_CmdId[EntityConfigHashNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityConfigHashNotify_CmdId[EntityConfigHashNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EntityConfigHashNotify_CmdId = exports.EntityConfigHashNotify_CmdId || (exports.EntityConfigHashNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForceDragAvatarNotify.CmdId
 */
var ForceDragAvatarNotify_CmdId;
(function (ForceDragAvatarNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceDragAvatarNotify_CmdId[ForceDragAvatarNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3235;
     */
    ForceDragAvatarNotify_CmdId[ForceDragAvatarNotify_CmdId["CMD_ID"] = 3235] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceDragAvatarNotify_CmdId[ForceDragAvatarNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForceDragAvatarNotify_CmdId[ForceDragAvatarNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForceDragAvatarNotify_CmdId = exports.ForceDragAvatarNotify_CmdId || (exports.ForceDragAvatarNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MonsterPointArrayRouteUpdateNotify.CmdId
 */
var MonsterPointArrayRouteUpdateNotify_CmdId;
(function (MonsterPointArrayRouteUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterPointArrayRouteUpdateNotify_CmdId[MonsterPointArrayRouteUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3410;
     */
    MonsterPointArrayRouteUpdateNotify_CmdId[MonsterPointArrayRouteUpdateNotify_CmdId["CMD_ID"] = 3410] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterPointArrayRouteUpdateNotify_CmdId[MonsterPointArrayRouteUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MonsterPointArrayRouteUpdateNotify_CmdId[MonsterPointArrayRouteUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MonsterPointArrayRouteUpdateNotify_CmdId = exports.MonsterPointArrayRouteUpdateNotify_CmdId || (exports.MonsterPointArrayRouteUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForceDragBackTransferNotify.CmdId
 */
var ForceDragBackTransferNotify_CmdId;
(function (ForceDragBackTransferNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceDragBackTransferNotify_CmdId[ForceDragBackTransferNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3145;
     */
    ForceDragBackTransferNotify_CmdId[ForceDragBackTransferNotify_CmdId["CMD_ID"] = 3145] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceDragBackTransferNotify_CmdId[ForceDragBackTransferNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForceDragBackTransferNotify_CmdId[ForceDragBackTransferNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForceDragBackTransferNotify_CmdId[ForceDragBackTransferNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ForceDragBackTransferNotify_CmdId = exports.ForceDragBackTransferNotify_CmdId || (exports.ForceDragBackTransferNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetScenePerformanceReq.CmdId
 */
var GetScenePerformanceReq_CmdId;
(function (GetScenePerformanceReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePerformanceReq_CmdId[GetScenePerformanceReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3419;
     */
    GetScenePerformanceReq_CmdId[GetScenePerformanceReq_CmdId["CMD_ID"] = 3419] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePerformanceReq_CmdId[GetScenePerformanceReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetScenePerformanceReq_CmdId[GetScenePerformanceReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetScenePerformanceReq_CmdId[GetScenePerformanceReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetScenePerformanceReq_CmdId = exports.GetScenePerformanceReq_CmdId || (exports.GetScenePerformanceReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetScenePerformanceRsp.CmdId
 */
var GetScenePerformanceRsp_CmdId;
(function (GetScenePerformanceRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePerformanceRsp_CmdId[GetScenePerformanceRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3137;
     */
    GetScenePerformanceRsp_CmdId[GetScenePerformanceRsp_CmdId["CMD_ID"] = 3137] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetScenePerformanceRsp_CmdId[GetScenePerformanceRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetScenePerformanceRsp_CmdId[GetScenePerformanceRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetScenePerformanceRsp_CmdId = exports.GetScenePerformanceRsp_CmdId || (exports.GetScenePerformanceRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneAudioNotify.CmdId
 */
var SceneAudioNotify_CmdId;
(function (SceneAudioNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAudioNotify_CmdId[SceneAudioNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3166;
     */
    SceneAudioNotify_CmdId[SceneAudioNotify_CmdId["CMD_ID"] = 3166] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneAudioNotify_CmdId[SceneAudioNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneAudioNotify_CmdId[SceneAudioNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneAudioNotify_CmdId[SceneAudioNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SceneAudioNotify_CmdId = exports.SceneAudioNotify_CmdId || (exports.SceneAudioNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HitTreeNotify.CmdId
 */
var HitTreeNotify_CmdId;
(function (HitTreeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HitTreeNotify_CmdId[HitTreeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3019;
     */
    HitTreeNotify_CmdId[HitTreeNotify_CmdId["CMD_ID"] = 3019] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HitTreeNotify_CmdId[HitTreeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HitTreeNotify_CmdId[HitTreeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HitTreeNotify_CmdId[HitTreeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HitTreeNotify_CmdId = exports.HitTreeNotify_CmdId || (exports.HitTreeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityTagChangeNotify.CmdId
 */
var EntityTagChangeNotify_CmdId;
(function (EntityTagChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityTagChangeNotify_CmdId[EntityTagChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3316;
     */
    EntityTagChangeNotify_CmdId[EntityTagChangeNotify_CmdId["CMD_ID"] = 3316] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityTagChangeNotify_CmdId[EntityTagChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityTagChangeNotify_CmdId[EntityTagChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityTagChangeNotify_CmdId = exports.EntityTagChangeNotify_CmdId || (exports.EntityTagChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarFollowRouteNotify.CmdId
 */
var AvatarFollowRouteNotify_CmdId;
(function (AvatarFollowRouteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFollowRouteNotify_CmdId[AvatarFollowRouteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3458;
     */
    AvatarFollowRouteNotify_CmdId[AvatarFollowRouteNotify_CmdId["CMD_ID"] = 3458] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFollowRouteNotify_CmdId[AvatarFollowRouteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFollowRouteNotify_CmdId[AvatarFollowRouteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarFollowRouteNotify_CmdId = exports.AvatarFollowRouteNotify_CmdId || (exports.AvatarFollowRouteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneEntityUpdateNotify.CmdId
 */
var SceneEntityUpdateNotify_CmdId;
(function (SceneEntityUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityUpdateNotify_CmdId[SceneEntityUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3412;
     */
    SceneEntityUpdateNotify_CmdId[SceneEntityUpdateNotify_CmdId["CMD_ID"] = 3412] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneEntityUpdateNotify_CmdId[SceneEntityUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneEntityUpdateNotify_CmdId[SceneEntityUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneEntityUpdateNotify_CmdId = exports.SceneEntityUpdateNotify_CmdId || (exports.SceneEntityUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientHashDebugNotify.CmdId
 */
var ClientHashDebugNotify_CmdId;
(function (ClientHashDebugNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientHashDebugNotify_CmdId[ClientHashDebugNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3086;
     */
    ClientHashDebugNotify_CmdId[ClientHashDebugNotify_CmdId["CMD_ID"] = 3086] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientHashDebugNotify_CmdId[ClientHashDebugNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientHashDebugNotify_CmdId[ClientHashDebugNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ClientHashDebugNotify_CmdId = exports.ClientHashDebugNotify_CmdId || (exports.ClientHashDebugNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerWorldSceneInfoListNotify.CmdId
 */
var PlayerWorldSceneInfoListNotify_CmdId;
(function (PlayerWorldSceneInfoListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerWorldSceneInfoListNotify_CmdId[PlayerWorldSceneInfoListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3129;
     */
    PlayerWorldSceneInfoListNotify_CmdId[PlayerWorldSceneInfoListNotify_CmdId["CMD_ID"] = 3129] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerWorldSceneInfoListNotify_CmdId[PlayerWorldSceneInfoListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerWorldSceneInfoListNotify_CmdId[PlayerWorldSceneInfoListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerWorldSceneInfoListNotify_CmdId = exports.PlayerWorldSceneInfoListNotify_CmdId || (exports.PlayerWorldSceneInfoListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LuaEnvironmentEffectNotify.CmdId
 */
var LuaEnvironmentEffectNotify_CmdId;
(function (LuaEnvironmentEffectNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LuaEnvironmentEffectNotify_CmdId[LuaEnvironmentEffectNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3408;
     */
    LuaEnvironmentEffectNotify_CmdId[LuaEnvironmentEffectNotify_CmdId["CMD_ID"] = 3408] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LuaEnvironmentEffectNotify_CmdId[LuaEnvironmentEffectNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LuaEnvironmentEffectNotify_CmdId[LuaEnvironmentEffectNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LuaEnvironmentEffectNotify_CmdId = exports.LuaEnvironmentEffectNotify_CmdId || (exports.LuaEnvironmentEffectNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientLoadingCostumeVerificationNotify.CmdId
 */
var ClientLoadingCostumeVerificationNotify_CmdId;
(function (ClientLoadingCostumeVerificationNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientLoadingCostumeVerificationNotify_CmdId[ClientLoadingCostumeVerificationNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3487;
     */
    ClientLoadingCostumeVerificationNotify_CmdId[ClientLoadingCostumeVerificationNotify_CmdId["CMD_ID"] = 3487] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientLoadingCostumeVerificationNotify_CmdId[ClientLoadingCostumeVerificationNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientLoadingCostumeVerificationNotify_CmdId[ClientLoadingCostumeVerificationNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientLoadingCostumeVerificationNotify_CmdId[ClientLoadingCostumeVerificationNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientLoadingCostumeVerificationNotify_CmdId = exports.ClientLoadingCostumeVerificationNotify_CmdId || (exports.ClientLoadingCostumeVerificationNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ShowClientGuideNotify.CmdId
 */
var ShowClientGuideNotify_CmdId;
(function (ShowClientGuideNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowClientGuideNotify_CmdId[ShowClientGuideNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3005;
     */
    ShowClientGuideNotify_CmdId[ShowClientGuideNotify_CmdId["CMD_ID"] = 3005] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowClientGuideNotify_CmdId[ShowClientGuideNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ShowClientGuideNotify_CmdId[ShowClientGuideNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ShowClientGuideNotify_CmdId = exports.ShowClientGuideNotify_CmdId || (exports.ShowClientGuideNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ShowClientTutorialNotify.CmdId
 */
var ShowClientTutorialNotify_CmdId;
(function (ShowClientTutorialNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowClientTutorialNotify_CmdId[ShowClientTutorialNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3305;
     */
    ShowClientTutorialNotify_CmdId[ShowClientTutorialNotify_CmdId["CMD_ID"] = 3305] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ShowClientTutorialNotify_CmdId[ShowClientTutorialNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ShowClientTutorialNotify_CmdId[ShowClientTutorialNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ShowClientTutorialNotify_CmdId = exports.ShowClientTutorialNotify_CmdId || (exports.ShowClientTutorialNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetMapAreaReq.CmdId
 */
var GetMapAreaReq_CmdId;
(function (GetMapAreaReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapAreaReq_CmdId[GetMapAreaReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3108;
     */
    GetMapAreaReq_CmdId[GetMapAreaReq_CmdId["CMD_ID"] = 3108] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapAreaReq_CmdId[GetMapAreaReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMapAreaReq_CmdId[GetMapAreaReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMapAreaReq_CmdId[GetMapAreaReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetMapAreaReq_CmdId = exports.GetMapAreaReq_CmdId || (exports.GetMapAreaReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetMapAreaRsp.CmdId
 */
var GetMapAreaRsp_CmdId;
(function (GetMapAreaRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapAreaRsp_CmdId[GetMapAreaRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3328;
     */
    GetMapAreaRsp_CmdId[GetMapAreaRsp_CmdId["CMD_ID"] = 3328] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMapAreaRsp_CmdId[GetMapAreaRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMapAreaRsp_CmdId[GetMapAreaRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetMapAreaRsp_CmdId = exports.GetMapAreaRsp_CmdId || (exports.GetMapAreaRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MapAreaChangeNotify.CmdId
 */
var MapAreaChangeNotify_CmdId;
(function (MapAreaChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MapAreaChangeNotify_CmdId[MapAreaChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3378;
     */
    MapAreaChangeNotify_CmdId[MapAreaChangeNotify_CmdId["CMD_ID"] = 3378] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MapAreaChangeNotify_CmdId[MapAreaChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MapAreaChangeNotify_CmdId[MapAreaChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MapAreaChangeNotify_CmdId = exports.MapAreaChangeNotify_CmdId || (exports.MapAreaChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LeaveWorldNotify.CmdId
 */
var LeaveWorldNotify_CmdId;
(function (LeaveWorldNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LeaveWorldNotify_CmdId[LeaveWorldNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3017;
     */
    LeaveWorldNotify_CmdId[LeaveWorldNotify_CmdId["CMD_ID"] = 3017] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LeaveWorldNotify_CmdId[LeaveWorldNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LeaveWorldNotify_CmdId[LeaveWorldNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LeaveWorldNotify_CmdId = exports.LeaveWorldNotify_CmdId || (exports.LeaveWorldNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GuestBeginEnterSceneNotify.CmdId
 */
var GuestBeginEnterSceneNotify_CmdId;
(function (GuestBeginEnterSceneNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GuestBeginEnterSceneNotify_CmdId[GuestBeginEnterSceneNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3031;
     */
    GuestBeginEnterSceneNotify_CmdId[GuestBeginEnterSceneNotify_CmdId["CMD_ID"] = 3031] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GuestBeginEnterSceneNotify_CmdId[GuestBeginEnterSceneNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GuestBeginEnterSceneNotify_CmdId[GuestBeginEnterSceneNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GuestBeginEnterSceneNotify_CmdId = exports.GuestBeginEnterSceneNotify_CmdId || (exports.GuestBeginEnterSceneNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GuestPostEnterSceneNotify.CmdId
 */
var GuestPostEnterSceneNotify_CmdId;
(function (GuestPostEnterSceneNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GuestPostEnterSceneNotify_CmdId[GuestPostEnterSceneNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3144;
     */
    GuestPostEnterSceneNotify_CmdId[GuestPostEnterSceneNotify_CmdId["CMD_ID"] = 3144] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GuestPostEnterSceneNotify_CmdId[GuestPostEnterSceneNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GuestPostEnterSceneNotify_CmdId[GuestPostEnterSceneNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GuestPostEnterSceneNotify_CmdId = exports.GuestPostEnterSceneNotify_CmdId || (exports.GuestPostEnterSceneNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LevelTagDataNotify.CmdId
 */
var LevelTagDataNotify_CmdId;
(function (LevelTagDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LevelTagDataNotify_CmdId[LevelTagDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3314;
     */
    LevelTagDataNotify_CmdId[LevelTagDataNotify_CmdId["CMD_ID"] = 3314] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LevelTagDataNotify_CmdId[LevelTagDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LevelTagDataNotify_CmdId[LevelTagDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LevelTagDataNotify_CmdId[LevelTagDataNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(LevelTagDataNotify_CmdId = exports.LevelTagDataNotify_CmdId || (exports.LevelTagDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StopReminderNotify.CmdId
 */
var StopReminderNotify_CmdId;
(function (StopReminderNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StopReminderNotify_CmdId[StopReminderNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3004;
     */
    StopReminderNotify_CmdId[StopReminderNotify_CmdId["CMD_ID"] = 3004] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StopReminderNotify_CmdId[StopReminderNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StopReminderNotify_CmdId[StopReminderNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StopReminderNotify_CmdId[StopReminderNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(StopReminderNotify_CmdId = exports.StopReminderNotify_CmdId || (exports.StopReminderNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AreaPlayInfoNotify.CmdId
 */
var AreaPlayInfoNotify_CmdId;
(function (AreaPlayInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AreaPlayInfoNotify_CmdId[AreaPlayInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3323;
     */
    AreaPlayInfoNotify_CmdId[AreaPlayInfoNotify_CmdId["CMD_ID"] = 3323] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AreaPlayInfoNotify_CmdId[AreaPlayInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AreaPlayInfoNotify_CmdId[AreaPlayInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AreaPlayInfoNotify_CmdId = exports.AreaPlayInfoNotify_CmdId || (exports.AreaPlayInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckGroupReplacedReq.CmdId
 */
var CheckGroupReplacedReq_CmdId;
(function (CheckGroupReplacedReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckGroupReplacedReq_CmdId[CheckGroupReplacedReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3113;
     */
    CheckGroupReplacedReq_CmdId[CheckGroupReplacedReq_CmdId["CMD_ID"] = 3113] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckGroupReplacedReq_CmdId[CheckGroupReplacedReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckGroupReplacedReq_CmdId[CheckGroupReplacedReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckGroupReplacedReq_CmdId[CheckGroupReplacedReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CheckGroupReplacedReq_CmdId = exports.CheckGroupReplacedReq_CmdId || (exports.CheckGroupReplacedReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CheckGroupReplacedRsp.CmdId
 */
var CheckGroupReplacedRsp_CmdId;
(function (CheckGroupReplacedRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckGroupReplacedRsp_CmdId[CheckGroupReplacedRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3152;
     */
    CheckGroupReplacedRsp_CmdId[CheckGroupReplacedRsp_CmdId["CMD_ID"] = 3152] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CheckGroupReplacedRsp_CmdId[CheckGroupReplacedRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CheckGroupReplacedRsp_CmdId[CheckGroupReplacedRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CheckGroupReplacedRsp_CmdId = exports.CheckGroupReplacedRsp_CmdId || (exports.CheckGroupReplacedRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DeathZoneObserveNotify.CmdId
 */
var DeathZoneObserveNotify_CmdId;
(function (DeathZoneObserveNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeathZoneObserveNotify_CmdId[DeathZoneObserveNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3475;
     */
    DeathZoneObserveNotify_CmdId[DeathZoneObserveNotify_CmdId["CMD_ID"] = 3475] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeathZoneObserveNotify_CmdId[DeathZoneObserveNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeathZoneObserveNotify_CmdId[DeathZoneObserveNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeathZoneObserveNotify_CmdId[DeathZoneObserveNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DeathZoneObserveNotify_CmdId = exports.DeathZoneObserveNotify_CmdId || (exports.DeathZoneObserveNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldChestOpenNotify.CmdId
 */
var WorldChestOpenNotify_CmdId;
(function (WorldChestOpenNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldChestOpenNotify_CmdId[WorldChestOpenNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3295;
     */
    WorldChestOpenNotify_CmdId[WorldChestOpenNotify_CmdId["CMD_ID"] = 3295] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldChestOpenNotify_CmdId[WorldChestOpenNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldChestOpenNotify_CmdId[WorldChestOpenNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldChestOpenNotify_CmdId = exports.WorldChestOpenNotify_CmdId || (exports.WorldChestOpenNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetQuickHitTreeReq.CmdId
 */
var WidgetQuickHitTreeReq_CmdId;
(function (WidgetQuickHitTreeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetQuickHitTreeReq_CmdId[WidgetQuickHitTreeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3345;
     */
    WidgetQuickHitTreeReq_CmdId[WidgetQuickHitTreeReq_CmdId["CMD_ID"] = 3345] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetQuickHitTreeReq_CmdId[WidgetQuickHitTreeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetQuickHitTreeReq_CmdId[WidgetQuickHitTreeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetQuickHitTreeReq_CmdId[WidgetQuickHitTreeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WidgetQuickHitTreeReq_CmdId = exports.WidgetQuickHitTreeReq_CmdId || (exports.WidgetQuickHitTreeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WidgetQuickHitTreeRsp.CmdId
 */
var WidgetQuickHitTreeRsp_CmdId;
(function (WidgetQuickHitTreeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetQuickHitTreeRsp_CmdId[WidgetQuickHitTreeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3336;
     */
    WidgetQuickHitTreeRsp_CmdId[WidgetQuickHitTreeRsp_CmdId["CMD_ID"] = 3336] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WidgetQuickHitTreeRsp_CmdId[WidgetQuickHitTreeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WidgetQuickHitTreeRsp_CmdId[WidgetQuickHitTreeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WidgetQuickHitTreeRsp_CmdId = exports.WidgetQuickHitTreeRsp_CmdId || (exports.WidgetQuickHitTreeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BeginCameraSceneLookWithTemplateNotify.FollowType
 */
var BeginCameraSceneLookWithTemplateNotify_FollowType;
(function (BeginCameraSceneLookWithTemplateNotify_FollowType) {
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_INIT_FOLLOW_POS = 0;
     */
    BeginCameraSceneLookWithTemplateNotify_FollowType[BeginCameraSceneLookWithTemplateNotify_FollowType["INIT_FOLLOW_POS"] = 0] = "INIT_FOLLOW_POS";
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_SET_FOLLOW_POS = 1;
     */
    BeginCameraSceneLookWithTemplateNotify_FollowType[BeginCameraSceneLookWithTemplateNotify_FollowType["SET_FOLLOW_POS"] = 1] = "SET_FOLLOW_POS";
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_SET_ABS_FOLLOW_POS = 2;
     */
    BeginCameraSceneLookWithTemplateNotify_FollowType[BeginCameraSceneLookWithTemplateNotify_FollowType["SET_ABS_FOLLOW_POS"] = 2] = "SET_ABS_FOLLOW_POS";
})(BeginCameraSceneLookWithTemplateNotify_FollowType = exports.BeginCameraSceneLookWithTemplateNotify_FollowType || (exports.BeginCameraSceneLookWithTemplateNotify_FollowType = {}));
/**
 * @generated from protobuf enum com.midnights.game.BeginCameraSceneLookWithTemplateNotify.CmdId
 */
var BeginCameraSceneLookWithTemplateNotify_CmdId;
(function (BeginCameraSceneLookWithTemplateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BeginCameraSceneLookWithTemplateNotify_CmdId[BeginCameraSceneLookWithTemplateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3160;
     */
    BeginCameraSceneLookWithTemplateNotify_CmdId[BeginCameraSceneLookWithTemplateNotify_CmdId["CMD_ID"] = 3160] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BeginCameraSceneLookWithTemplateNotify_CmdId[BeginCameraSceneLookWithTemplateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BeginCameraSceneLookWithTemplateNotify_CmdId[BeginCameraSceneLookWithTemplateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BeginCameraSceneLookWithTemplateNotify_CmdId = exports.BeginCameraSceneLookWithTemplateNotify_CmdId || (exports.BeginCameraSceneLookWithTemplateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RefreshEntityAuthNotify.CmdId
 */
var RefreshEntityAuthNotify_CmdId;
(function (RefreshEntityAuthNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RefreshEntityAuthNotify_CmdId[RefreshEntityAuthNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3259;
     */
    RefreshEntityAuthNotify_CmdId[RefreshEntityAuthNotify_CmdId["CMD_ID"] = 3259] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RefreshEntityAuthNotify_CmdId[RefreshEntityAuthNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RefreshEntityAuthNotify_CmdId[RefreshEntityAuthNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RefreshEntityAuthNotify_CmdId[RefreshEntityAuthNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RefreshEntityAuthNotify_CmdId = exports.RefreshEntityAuthNotify_CmdId || (exports.RefreshEntityAuthNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayerBackgroundAvatarRefreshNotify.CmdId
 */
var ScenePlayerBackgroundAvatarRefreshNotify_CmdId;
(function (ScenePlayerBackgroundAvatarRefreshNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayerBackgroundAvatarRefreshNotify_CmdId[ScenePlayerBackgroundAvatarRefreshNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3274;
     */
    ScenePlayerBackgroundAvatarRefreshNotify_CmdId[ScenePlayerBackgroundAvatarRefreshNotify_CmdId["CMD_ID"] = 3274] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayerBackgroundAvatarRefreshNotify_CmdId[ScenePlayerBackgroundAvatarRefreshNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayerBackgroundAvatarRefreshNotify_CmdId[ScenePlayerBackgroundAvatarRefreshNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayerBackgroundAvatarRefreshNotify_CmdId = exports.ScenePlayerBackgroundAvatarRefreshNotify_CmdId || (exports.ScenePlayerBackgroundAvatarRefreshNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterType
 */
var EnterType;
(function (EnterType) {
    /**
     * @generated from protobuf enum value: ENTER_NONE = 0;
     */
    EnterType[EnterType["ENTER_NONE"] = 0] = "ENTER_NONE";
    /**
     * @generated from protobuf enum value: ENTER_SELF = 1;
     */
    EnterType[EnterType["ENTER_SELF"] = 1] = "ENTER_SELF";
    /**
     * @generated from protobuf enum value: ENTER_GOTO = 2;
     */
    EnterType[EnterType["ENTER_GOTO"] = 2] = "ENTER_GOTO";
    /**
     * @generated from protobuf enum value: ENTER_JUMP = 3;
     */
    EnterType[EnterType["ENTER_JUMP"] = 3] = "ENTER_JUMP";
    /**
     * @generated from protobuf enum value: ENTER_OTHER = 4;
     */
    EnterType[EnterType["ENTER_OTHER"] = 4] = "ENTER_OTHER";
    /**
     * @generated from protobuf enum value: ENTER_BACK = 5;
     */
    EnterType[EnterType["ENTER_BACK"] = 5] = "ENTER_BACK";
    /**
     * @generated from protobuf enum value: ENTER_DUNGEON = 6;
     */
    EnterType[EnterType["ENTER_DUNGEON"] = 6] = "ENTER_DUNGEON";
    /**
     * @generated from protobuf enum value: ENTER_DUNGEON_REPLAY = 7;
     */
    EnterType[EnterType["ENTER_DUNGEON_REPLAY"] = 7] = "ENTER_DUNGEON_REPLAY";
    /**
     * @generated from protobuf enum value: ENTER_GOTO_BY_PORTAL = 8;
     */
    EnterType[EnterType["ENTER_GOTO_BY_PORTAL"] = 8] = "ENTER_GOTO_BY_PORTAL";
    /**
     * @generated from protobuf enum value: ENTER_SELF_HOME = 9;
     */
    EnterType[EnterType["ENTER_SELF_HOME"] = 9] = "ENTER_SELF_HOME";
    /**
     * @generated from protobuf enum value: ENTER_OTHER_HOME = 10;
     */
    EnterType[EnterType["ENTER_OTHER_HOME"] = 10] = "ENTER_OTHER_HOME";
    /**
     * @generated from protobuf enum value: ENTER_GOTO_RECREATE = 11;
     */
    EnterType[EnterType["ENTER_GOTO_RECREATE"] = 11] = "ENTER_GOTO_RECREATE";
})(EnterType = exports.EnterType || (exports.EnterType = {}));
/**
 * @generated from protobuf enum com.midnights.game.VisionType
 */
var VisionType;
(function (VisionType) {
    /**
     * @generated from protobuf enum value: VISION_NONE = 0;
     */
    VisionType[VisionType["VISION_NONE"] = 0] = "VISION_NONE";
    /**
     * @generated from protobuf enum value: VISION_MEET = 1;
     */
    VisionType[VisionType["VISION_MEET"] = 1] = "VISION_MEET";
    /**
     * @generated from protobuf enum value: VISION_REBORN = 2;
     */
    VisionType[VisionType["VISION_REBORN"] = 2] = "VISION_REBORN";
    /**
     * @generated from protobuf enum value: VISION_REPLACE = 3;
     */
    VisionType[VisionType["VISION_REPLACE"] = 3] = "VISION_REPLACE";
    /**
     * @generated from protobuf enum value: VISION_WAYPOINT_REBORN = 4;
     */
    VisionType[VisionType["VISION_WAYPOINT_REBORN"] = 4] = "VISION_WAYPOINT_REBORN";
    /**
     * @generated from protobuf enum value: VISION_MISS = 5;
     */
    VisionType[VisionType["VISION_MISS"] = 5] = "VISION_MISS";
    /**
     * @generated from protobuf enum value: VISION_DIE = 6;
     */
    VisionType[VisionType["VISION_DIE"] = 6] = "VISION_DIE";
    /**
     * @generated from protobuf enum value: VISION_GATHER_ESCAPE = 7;
     */
    VisionType[VisionType["VISION_GATHER_ESCAPE"] = 7] = "VISION_GATHER_ESCAPE";
    /**
     * @generated from protobuf enum value: VISION_REFRESH = 8;
     */
    VisionType[VisionType["VISION_REFRESH"] = 8] = "VISION_REFRESH";
    /**
     * @generated from protobuf enum value: VISION_TRANSPORT = 9;
     */
    VisionType[VisionType["VISION_TRANSPORT"] = 9] = "VISION_TRANSPORT";
    /**
     * @generated from protobuf enum value: VISION_REPLACE_DIE = 10;
     */
    VisionType[VisionType["VISION_REPLACE_DIE"] = 10] = "VISION_REPLACE_DIE";
    /**
     * @generated from protobuf enum value: VISION_REPLACE_NO_NOTIFY = 11;
     */
    VisionType[VisionType["VISION_REPLACE_NO_NOTIFY"] = 11] = "VISION_REPLACE_NO_NOTIFY";
    /**
     * @generated from protobuf enum value: VISION_BORN = 12;
     */
    VisionType[VisionType["VISION_BORN"] = 12] = "VISION_BORN";
    /**
     * @generated from protobuf enum value: VISION_PICKUP = 13;
     */
    VisionType[VisionType["VISION_PICKUP"] = 13] = "VISION_PICKUP";
    /**
     * @generated from protobuf enum value: VISION_REMOVE = 14;
     */
    VisionType[VisionType["VISION_REMOVE"] = 14] = "VISION_REMOVE";
    /**
     * @generated from protobuf enum value: VISION_CHANGE_COSTUME = 15;
     */
    VisionType[VisionType["VISION_CHANGE_COSTUME"] = 15] = "VISION_CHANGE_COSTUME";
    /**
     * @generated from protobuf enum value: VISION_FISH_REFRESH = 16;
     */
    VisionType[VisionType["VISION_FISH_REFRESH"] = 16] = "VISION_FISH_REFRESH";
    /**
     * @generated from protobuf enum value: VISION_FISH_BIG_SHOCK = 17;
     */
    VisionType[VisionType["VISION_FISH_BIG_SHOCK"] = 17] = "VISION_FISH_BIG_SHOCK";
    /**
     * @generated from protobuf enum value: VISION_FISH_QTE_SUCC = 18;
     */
    VisionType[VisionType["VISION_FISH_QTE_SUCC"] = 18] = "VISION_FISH_QTE_SUCC";
    /**
     * @generated from protobuf enum value: VISION_CAPTURE_DISAPPEAR = 19;
     */
    VisionType[VisionType["VISION_CAPTURE_DISAPPEAR"] = 19] = "VISION_CAPTURE_DISAPPEAR";
})(VisionType = exports.VisionType || (exports.VisionType = {}));
/**
 * @generated from protobuf enum com.midnights.game.CreateReason
 */
var CreateReason;
(function (CreateReason) {
    /**
     * @generated from protobuf enum value: CREATE_NONE = 0;
     */
    CreateReason[CreateReason["CREATE_NONE"] = 0] = "CREATE_NONE";
    /**
     * @generated from protobuf enum value: CREATE_QUEST = 1;
     */
    CreateReason[CreateReason["CREATE_QUEST"] = 1] = "CREATE_QUEST";
    /**
     * @generated from protobuf enum value: CREATE_ENERGY = 2;
     */
    CreateReason[CreateReason["CREATE_ENERGY"] = 2] = "CREATE_ENERGY";
})(CreateReason = exports.CreateReason || (exports.CreateReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.TransmitReason
 */
var TransmitReason;
(function (TransmitReason) {
    /**
     * @generated from protobuf enum value: TRANSMIT_NONE = 0;
     */
    TransmitReason[TransmitReason["TRANSMIT_NONE"] = 0] = "TRANSMIT_NONE";
    /**
     * @generated from protobuf enum value: TRANSMIT_QUEST = 1;
     */
    TransmitReason[TransmitReason["TRANSMIT_QUEST"] = 1] = "TRANSMIT_QUEST";
})(TransmitReason = exports.TransmitReason || (exports.TransmitReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.SealBattleType
 */
var SealBattleType;
(function (SealBattleType) {
    /**
     * @generated from protobuf enum value: SEAL_BATTLE_KEEP_ALIVE = 0;
     */
    SealBattleType[SealBattleType["SEAL_BATTLE_KEEP_ALIVE"] = 0] = "SEAL_BATTLE_KEEP_ALIVE";
    /**
     * @generated from protobuf enum value: SEAL_BATTLE_KILL_MONSTER = 1;
     */
    SealBattleType[SealBattleType["SEAL_BATTLE_KILL_MONSTER"] = 1] = "SEAL_BATTLE_KILL_MONSTER";
    /**
     * @generated from protobuf enum value: SEAL_BATTLE_ENERGY_CHARGE = 2;
     */
    SealBattleType[SealBattleType["SEAL_BATTLE_ENERGY_CHARGE"] = 2] = "SEAL_BATTLE_ENERGY_CHARGE";
})(SealBattleType = exports.SealBattleType || (exports.SealBattleType = {}));
/**
 * @generated from protobuf enum com.midnights.game.DungeonEntryBlockReason
 */
var DungeonEntryBlockReason;
(function (DungeonEntryBlockReason) {
    /**
     * @generated from protobuf enum value: DUNGEON_ENTRY_REASON_NONE = 0;
     */
    DungeonEntryBlockReason[DungeonEntryBlockReason["DUNGEON_ENTRY_REASON_NONE"] = 0] = "DUNGEON_ENTRY_REASON_NONE";
    /**
     * @generated from protobuf enum value: DUNGEON_ENTRY_REASON_LEVEL = 1;
     */
    DungeonEntryBlockReason[DungeonEntryBlockReason["DUNGEON_ENTRY_REASON_LEVEL"] = 1] = "DUNGEON_ENTRY_REASON_LEVEL";
    /**
     * @generated from protobuf enum value: DUNGEON_ENTRY_REASON_QUEST = 2;
     */
    DungeonEntryBlockReason[DungeonEntryBlockReason["DUNGEON_ENTRY_REASON_QUEST"] = 2] = "DUNGEON_ENTRY_REASON_QUEST";
    /**
     * @generated from protobuf enum value: DUNGEON_ENTRY_REASON_MULIPLE = 3;
     */
    DungeonEntryBlockReason[DungeonEntryBlockReason["DUNGEON_ENTRY_REASON_MULIPLE"] = 3] = "DUNGEON_ENTRY_REASON_MULIPLE";
})(DungeonEntryBlockReason = exports.DungeonEntryBlockReason || (exports.DungeonEntryBlockReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.AreaPlayType
 */
var AreaPlayType;
(function (AreaPlayType) {
    /**
     * @generated from protobuf enum value: AREA_PLAY_NONE = 0;
     */
    AreaPlayType[AreaPlayType["AREA_PLAY_NONE"] = 0] = "AREA_PLAY_NONE";
    /**
     * @generated from protobuf enum value: AREA_PLAY_CLIMATE = 1;
     */
    AreaPlayType[AreaPlayType["AREA_PLAY_CLIMATE"] = 1] = "AREA_PLAY_CLIMATE";
    /**
     * @generated from protobuf enum value: AREA_PLAY_REGIONAL_PLAY = 2;
     */
    AreaPlayType[AreaPlayType["AREA_PLAY_REGIONAL_PLAY"] = 2] = "AREA_PLAY_REGIONAL_PLAY";
})(AreaPlayType = exports.AreaPlayType || (exports.AreaPlayType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterSceneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerEnterSceneNotify", [
            { no: 6, name: "prev_scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1732, name: "is_skip_ui", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.EnterType", EnterType] },
            { no: 14, name: "scene_begin_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "world_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1490, name: "world_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_first_login_enter_scene", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "scene_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1842, name: "scene_transaction", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "prev_pos", kind: "message", T: () => define_20.Vector },
            { no: 1828, name: "enter_reason", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "pos", kind: "message", T: () => define_20.Vector },
            { no: 2, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneTagIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 prev_scene_id */ 6:
                    message.prevSceneId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_id */ 12:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional bool is_skip_ui */ 1732:
                    message.isSkipUi = reader.bool();
                    break;
                case /* optional uint32 scene_id */ 15:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional com.midnights.game.EnterType type */ 13:
                    message.type = reader.int32();
                    break;
                case /* optional uint64 scene_begin_time */ 14:
                    message.sceneBeginTime = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 world_level */ 11:
                    message.worldLevel = reader.uint32();
                    break;
                case /* optional uint32 world_type */ 1490:
                    message.worldType = reader.uint32();
                    break;
                case /* optional uint32 target_uid */ 4:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional bool is_first_login_enter_scene */ 3:
                    message.isFirstLoginEnterScene = reader.bool();
                    break;
                case /* repeated uint32 scene_tag_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneTagIdList.push(reader.uint32());
                    else
                        message.sceneTagIdList.push(reader.uint32());
                    break;
                case /* optional string scene_transaction */ 1842:
                    message.sceneTransaction = reader.string();
                    break;
                case /* optional com.midnights.game.Vector prev_pos */ 8:
                    message.prevPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.prevPos);
                    break;
                case /* optional uint32 enter_reason */ 1828:
                    message.enterReason = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 7:
                    message.pos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 enter_scene_token */ 2:
                    message.enterSceneToken = reader.uint32();
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
        /* optional uint32 prev_scene_id = 6; */
        if (message.prevSceneId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.prevSceneId);
        /* optional uint32 dungeon_id = 12; */
        if (message.dungeonId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* optional bool is_skip_ui = 1732; */
        if (message.isSkipUi !== undefined)
            writer.tag(1732, runtime_2.WireType.Varint).bool(message.isSkipUi);
        /* optional uint32 scene_id = 15; */
        if (message.sceneId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional com.midnights.game.EnterType type = 13; */
        if (message.type !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.type);
        /* optional uint64 scene_begin_time = 14; */
        if (message.sceneBeginTime !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.sceneBeginTime);
        /* optional uint32 world_level = 11; */
        if (message.worldLevel !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.worldLevel);
        /* optional uint32 world_type = 1490; */
        if (message.worldType !== undefined)
            writer.tag(1490, runtime_2.WireType.Varint).uint32(message.worldType);
        /* optional uint32 target_uid = 4; */
        if (message.targetUid !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional bool is_first_login_enter_scene = 3; */
        if (message.isFirstLoginEnterScene !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isFirstLoginEnterScene);
        /* repeated uint32 scene_tag_id_list = 5; */
        if (message.sceneTagIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneTagIdList.length; i++)
                writer.uint32(message.sceneTagIdList[i]);
            writer.join();
        }
        /* optional string scene_transaction = 1842; */
        if (message.sceneTransaction !== undefined)
            writer.tag(1842, runtime_2.WireType.LengthDelimited).string(message.sceneTransaction);
        /* optional com.midnights.game.Vector prev_pos = 8; */
        if (message.prevPos)
            define_20.Vector.internalBinaryWrite(message.prevPos, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 enter_reason = 1828; */
        if (message.enterReason !== undefined)
            writer.tag(1828, runtime_2.WireType.Varint).uint32(message.enterReason);
        /* optional com.midnights.game.Vector pos = 7; */
        if (message.pos)
            define_20.Vector.internalBinaryWrite(message.pos, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 enter_scene_token = 2; */
        if (message.enterSceneToken !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerEnterSceneNotify
 */
exports.PlayerEnterSceneNotify = new PlayerEnterSceneNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LeaveSceneReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LeaveSceneReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.LeaveSceneReq
 */
exports.LeaveSceneReq = new LeaveSceneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LeaveSceneRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LeaveSceneRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.LeaveSceneRsp
 */
exports.LeaveSceneRsp = new LeaveSceneRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneInitFinishReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneInitFinishReq", [
            { no: 11, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 enter_scene_token */ 11:
                    message.enterSceneToken = reader.uint32();
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
        /* optional uint32 enter_scene_token = 11; */
        if (message.enterSceneToken !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneInitFinishReq
 */
exports.SceneInitFinishReq = new SceneInitFinishReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneInitFinishRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneInitFinishRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 enter_scene_token */ 8:
                    message.enterSceneToken = reader.uint32();
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
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 enter_scene_token = 8; */
        if (message.enterSceneToken !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneInitFinishRsp
 */
exports.SceneInitFinishRsp = new SceneInitFinishRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityAppearNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityAppearNotify", [
            { no: 15, name: "appear_type", kind: "enum", opt: true, T: () => ["com.midnights.game.VisionType", VisionType] },
            { no: 9, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_19.SceneEntityInfo }
        ]);
    }
    create(value) {
        const message = { entityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.VisionType appear_type */ 15:
                    message.appearType = reader.int32();
                    break;
                case /* optional uint32 param */ 9:
                    message.param = reader.uint32();
                    break;
                case /* repeated com.midnights.game.SceneEntityInfo entity_list */ 5:
                    message.entityList.push(define_19.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional com.midnights.game.VisionType appear_type = 15; */
        if (message.appearType !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.appearType);
        /* optional uint32 param = 9; */
        if (message.param !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.param);
        /* repeated com.midnights.game.SceneEntityInfo entity_list = 5; */
        for (let i = 0; i < message.entityList.length; i++)
            define_19.SceneEntityInfo.internalBinaryWrite(message.entityList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityAppearNotify
 */
exports.SceneEntityAppearNotify = new SceneEntityAppearNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityDisappearNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityDisappearNotify", [
            { no: 6, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "entity_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "disappear_type", kind: "enum", opt: true, T: () => ["com.midnights.game.VisionType", VisionType] }
        ]);
    }
    create(value) {
        const message = { entityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 param */ 6:
                    message.param = reader.uint32();
                    break;
                case /* repeated uint32 entity_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityList.push(reader.uint32());
                    else
                        message.entityList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.VisionType disappear_type */ 2:
                    message.disappearType = reader.int32();
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
        /* optional uint32 param = 6; */
        if (message.param !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.param);
        /* repeated uint32 entity_list = 1; */
        if (message.entityList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityList.length; i++)
                writer.uint32(message.entityList[i]);
            writer.join();
        }
        /* optional com.midnights.game.VisionType disappear_type = 2; */
        if (message.disappearType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.disappearType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityDisappearNotify
 */
exports.SceneEntityDisappearNotify = new SceneEntityDisappearNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityMoveReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityMoveReq", [
            { no: 7, name: "motion_info", kind: "message", T: () => define_18.MotionInfo },
            { no: 4, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.MotionInfo motion_info */ 7:
                    message.motionInfo = define_18.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* optional uint32 scene_time */ 4:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 reliable_seq */ 15:
                    message.reliableSeq = reader.uint32();
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
        /* optional com.midnights.game.MotionInfo motion_info = 7; */
        if (message.motionInfo)
            define_18.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_time = 4; */
        if (message.sceneTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 reliable_seq = 15; */
        if (message.reliableSeq !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.reliableSeq);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityMoveReq
 */
exports.SceneEntityMoveReq = new SceneEntityMoveReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityMoveRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityMoveRsp", [
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "fail_motion", kind: "message", T: () => define_18.MotionInfo },
            { no: 10, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MotionInfo fail_motion */ 1:
                    message.failMotion = define_18.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.failMotion);
                    break;
                case /* optional uint32 scene_time */ 10:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 reliable_seq */ 6:
                    message.reliableSeq = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
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
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.MotionInfo fail_motion = 1; */
        if (message.failMotion)
            define_18.MotionInfo.internalBinaryWrite(message.failMotion, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_time = 10; */
        if (message.sceneTime !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 reliable_seq = 6; */
        if (message.reliableSeq !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.reliableSeq);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityMoveRsp
 */
exports.SceneEntityMoveRsp = new SceneEntityMoveRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneAvatarStaminaStepReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneAvatarStaminaStepReq", [
            { no: 15, name: "use_client_rot", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "rot", kind: "message", T: () => define_20.Vector }
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
                case /* optional bool use_client_rot */ 15:
                    message.useClientRot = reader.bool();
                    break;
                case /* optional com.midnights.game.Vector rot */ 7:
                    message.rot = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* optional bool use_client_rot = 15; */
        if (message.useClientRot !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.useClientRot);
        /* optional com.midnights.game.Vector rot = 7; */
        if (message.rot)
            define_20.Vector.internalBinaryWrite(message.rot, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneAvatarStaminaStepReq
 */
exports.SceneAvatarStaminaStepReq = new SceneAvatarStaminaStepReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneAvatarStaminaStepRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneAvatarStaminaStepRsp", [
            { no: 9, name: "use_client_rot", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "rot", kind: "message", T: () => define_20.Vector }
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
                case /* optional bool use_client_rot */ 9:
                    message.useClientRot = reader.bool();
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector rot */ 11:
                    message.rot = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* optional bool use_client_rot = 9; */
        if (message.useClientRot !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.useClientRot);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.Vector rot = 11; */
        if (message.rot)
            define_20.Vector.internalBinaryWrite(message.rot, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneAvatarStaminaStepRsp
 */
exports.SceneAvatarStaminaStepRsp = new SceneAvatarStaminaStepRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityMoveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityMoveNotify", [
            { no: 6, name: "motion_info", kind: "message", T: () => define_18.MotionInfo },
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.MotionInfo motion_info */ 6:
                    message.motionInfo = define_18.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 scene_time */ 15:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 reliable_seq */ 2:
                    message.reliableSeq = reader.uint32();
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
        /* optional com.midnights.game.MotionInfo motion_info = 6; */
        if (message.motionInfo)
            define_18.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 scene_time = 15; */
        if (message.sceneTime !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 reliable_seq = 2; */
        if (message.reliableSeq !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.reliableSeq);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityMoveNotify
 */
exports.SceneEntityMoveNotify = new SceneEntityMoveNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VehicleLocationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VehicleLocationInfo", [
            { no: 14, name: "rot", kind: "message", T: () => define_20.Vector },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_hp", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "pos", kind: "message", T: () => define_20.Vector },
            { no: 3, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "max_hp", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
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
                case /* optional com.midnights.game.Vector rot */ 14:
                    message.rot = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional float cur_hp */ 11:
                    message.curHp = reader.float();
                    break;
                case /* optional uint32 owner_uid */ 5:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* repeated uint32 uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* optional uint32 gadget_id */ 13:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional float max_hp */ 6:
                    message.maxHp = reader.float();
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
        /* optional com.midnights.game.Vector rot = 14; */
        if (message.rot)
            define_20.Vector.internalBinaryWrite(message.rot, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional float cur_hp = 11; */
        if (message.curHp !== undefined)
            writer.tag(11, runtime_2.WireType.Bit32).float(message.curHp);
        /* optional uint32 owner_uid = 5; */
        if (message.ownerUid !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.ownerUid);
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            define_20.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 uid_list = 3; */
        if (message.uidList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* optional uint32 gadget_id = 13; */
        if (message.gadgetId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.gadgetId);
        /* optional float max_hp = 6; */
        if (message.maxHp !== undefined)
            writer.tag(6, runtime_2.WireType.Bit32).float(message.maxHp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VehicleLocationInfo
 */
exports.VehicleLocationInfo = new VehicleLocationInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerLocationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayerLocationNotify", [
            { no: 3, name: "vehicle_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.VehicleLocationInfo },
            { no: 9, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "player_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PlayerLocationInfo }
        ]);
    }
    create(value) {
        const message = { vehicleLocList: [], playerLocList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.VehicleLocationInfo vehicle_loc_list */ 3:
                    message.vehicleLocList.push(exports.VehicleLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.PlayerLocationInfo player_loc_list */ 14:
                    message.playerLocList.push(exports.PlayerLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.VehicleLocationInfo vehicle_loc_list = 3; */
        for (let i = 0; i < message.vehicleLocList.length; i++)
            exports.VehicleLocationInfo.internalBinaryWrite(message.vehicleLocList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 9; */
        if (message.sceneId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated com.midnights.game.PlayerLocationInfo player_loc_list = 14; */
        for (let i = 0; i < message.playerLocList.length; i++)
            exports.PlayerLocationInfo.internalBinaryWrite(message.playerLocList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayerLocationNotify
 */
exports.ScenePlayerLocationNotify = new ScenePlayerLocationNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetScenePointReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetScenePointReq", [
            { no: 10, name: "belong_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 belong_uid */ 10:
                    message.belongUid = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
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
        /* optional uint32 belong_uid = 10; */
        if (message.belongUid !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.belongUid);
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetScenePointReq
 */
exports.GetScenePointReq = new GetScenePointReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CityInfo", [
            { no: 15, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "crystal_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 city_id */ 15:
                    message.cityId = reader.uint32();
                    break;
                case /* optional uint32 crystal_num */ 3:
                    message.crystalNum = reader.uint32();
                    break;
                case /* optional uint32 level */ 4:
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
        /* optional uint32 crystal_num = 3; */
        if (message.crystalNum !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.crystalNum);
        /* optional uint32 level = 4; */
        if (message.level !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CityInfo
 */
exports.CityInfo = new CityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetScenePointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetScenePointRsp", [
            { no: 11, name: "not_explored_dungeon_entry_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "to_be_explore_dungeon_entry_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "locked_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "unhide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "belong_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "unlocked_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "unlock_area_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "hide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "not_interact_dungeon_entry_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "group_unlimit_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { notExploredDungeonEntryList: [], toBeExploreDungeonEntryList: [], lockedPointList: [], unhidePointList: [], unlockedPointList: [], unlockAreaList: [], hidePointList: [], notInteractDungeonEntryList: [], groupUnlimitPointList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 not_explored_dungeon_entry_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notExploredDungeonEntryList.push(reader.uint32());
                    else
                        message.notExploredDungeonEntryList.push(reader.uint32());
                    break;
                case /* repeated uint32 to_be_explore_dungeon_entry_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.toBeExploreDungeonEntryList.push(reader.uint32());
                    else
                        message.toBeExploreDungeonEntryList.push(reader.uint32());
                    break;
                case /* repeated uint32 locked_point_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lockedPointList.push(reader.uint32());
                    else
                        message.lockedPointList.push(reader.uint32());
                    break;
                case /* repeated uint32 unhide_point_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unhidePointList.push(reader.uint32());
                    else
                        message.unhidePointList.push(reader.uint32());
                    break;
                case /* optional int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 belong_uid */ 12:
                    message.belongUid = reader.uint32();
                    break;
                case /* repeated uint32 unlocked_point_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockedPointList.push(reader.uint32());
                    else
                        message.unlockedPointList.push(reader.uint32());
                    break;
                case /* repeated uint32 unlock_area_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockAreaList.push(reader.uint32());
                    else
                        message.unlockAreaList.push(reader.uint32());
                    break;
                case /* repeated uint32 hide_point_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.hidePointList.push(reader.uint32());
                    else
                        message.hidePointList.push(reader.uint32());
                    break;
                case /* optional uint32 scene_id */ 14:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated uint32 not_interact_dungeon_entry_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notInteractDungeonEntryList.push(reader.uint32());
                    else
                        message.notInteractDungeonEntryList.push(reader.uint32());
                    break;
                case /* repeated uint32 group_unlimit_point_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.groupUnlimitPointList.push(reader.uint32());
                    else
                        message.groupUnlimitPointList.push(reader.uint32());
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
        /* repeated uint32 not_explored_dungeon_entry_list = 11; */
        if (message.notExploredDungeonEntryList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.notExploredDungeonEntryList.length; i++)
                writer.uint32(message.notExploredDungeonEntryList[i]);
            writer.join();
        }
        /* repeated uint32 to_be_explore_dungeon_entry_list = 15; */
        if (message.toBeExploreDungeonEntryList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.toBeExploreDungeonEntryList.length; i++)
                writer.uint32(message.toBeExploreDungeonEntryList[i]);
            writer.join();
        }
        /* repeated uint32 locked_point_list = 2; */
        if (message.lockedPointList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lockedPointList.length; i++)
                writer.uint32(message.lockedPointList[i]);
            writer.join();
        }
        /* repeated uint32 unhide_point_list = 5; */
        if (message.unhidePointList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unhidePointList.length; i++)
                writer.uint32(message.unhidePointList[i]);
            writer.join();
        }
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 belong_uid = 12; */
        if (message.belongUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.belongUid);
        /* repeated uint32 unlocked_point_list = 13; */
        if (message.unlockedPointList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockedPointList.length; i++)
                writer.uint32(message.unlockedPointList[i]);
            writer.join();
        }
        /* repeated uint32 unlock_area_list = 1; */
        if (message.unlockAreaList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockAreaList.length; i++)
                writer.uint32(message.unlockAreaList[i]);
            writer.join();
        }
        /* repeated uint32 hide_point_list = 4; */
        if (message.hidePointList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.hidePointList.length; i++)
                writer.uint32(message.hidePointList[i]);
            writer.join();
        }
        /* optional uint32 scene_id = 14; */
        if (message.sceneId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 not_interact_dungeon_entry_list = 6; */
        if (message.notInteractDungeonEntryList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.notInteractDungeonEntryList.length; i++)
                writer.uint32(message.notInteractDungeonEntryList[i]);
            writer.join();
        }
        /* repeated uint32 group_unlimit_point_list = 10; */
        if (message.groupUnlimitPointList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.groupUnlimitPointList.length; i++)
                writer.uint32(message.groupUnlimitPointList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetScenePointRsp
 */
exports.GetScenePointRsp = new GetScenePointRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterTransPointRegionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterTransPointRegionNotify", [
            { no: 8, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 8; */
        if (message.sceneId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 point_id = 6; */
        if (message.pointId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterTransPointRegionNotify
 */
exports.EnterTransPointRegionNotify = new EnterTransPointRegionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExitTransPointRegionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExitTransPointRegionNotify", [
            { no: 1, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 point_id */ 1:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
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
        /* optional uint32 point_id = 1; */
        if (message.pointId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.pointId);
        /* optional uint32 scene_id = 7; */
        if (message.sceneId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExitTransPointRegionNotify
 */
exports.ExitTransPointRegionNotify = new ExitTransPointRegionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePointUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePointUnlockNotify", [
            { no: 13, name: "point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "unhide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "hide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "locked_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pointList: [], unhidePointList: [], hidePointList: [], lockedPointList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 point_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pointList.push(reader.uint32());
                    else
                        message.pointList.push(reader.uint32());
                    break;
                case /* optional uint32 scene_id */ 6:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated uint32 unhide_point_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unhidePointList.push(reader.uint32());
                    else
                        message.unhidePointList.push(reader.uint32());
                    break;
                case /* repeated uint32 hide_point_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.hidePointList.push(reader.uint32());
                    else
                        message.hidePointList.push(reader.uint32());
                    break;
                case /* repeated uint32 locked_point_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lockedPointList.push(reader.uint32());
                    else
                        message.lockedPointList.push(reader.uint32());
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
        /* repeated uint32 point_list = 13; */
        if (message.pointList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.pointList.length; i++)
                writer.uint32(message.pointList[i]);
            writer.join();
        }
        /* optional uint32 scene_id = 6; */
        if (message.sceneId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 unhide_point_list = 12; */
        if (message.unhidePointList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unhidePointList.length; i++)
                writer.uint32(message.unhidePointList[i]);
            writer.join();
        }
        /* repeated uint32 hide_point_list = 1; */
        if (message.hidePointList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.hidePointList.length; i++)
                writer.uint32(message.hidePointList[i]);
            writer.join();
        }
        /* repeated uint32 locked_point_list = 8; */
        if (message.lockedPointList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lockedPointList.length; i++)
                writer.uint32(message.lockedPointList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePointUnlockNotify
 */
exports.ScenePointUnlockNotify = new ScenePointUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneTransToPointReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneTransToPointReq", [
            { no: 13, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 13:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 point_id */ 1:
                    message.pointId = reader.uint32();
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
        /* optional uint32 scene_id = 13; */
        if (message.sceneId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 point_id = 1; */
        if (message.pointId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneTransToPointReq
 */
exports.SceneTransToPointReq = new SceneTransToPointReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneTransToPointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneTransToPointRsp", [
            { no: 14, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 point_id */ 14:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 3:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
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
        /* optional uint32 point_id = 14; */
        if (message.pointId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.pointId);
        /* optional uint32 scene_id = 3; */
        if (message.sceneId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneTransToPointRsp
 */
exports.SceneTransToPointRsp = new SceneTransToPointRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityJumpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityJumpNotify", [
            { no: 9, name: "jump_type", kind: "enum", opt: true, T: () => ["com.midnights.game.EntityJumpNotify.Type", EntityJumpNotify_Type] },
            { no: 8, name: "rot", kind: "message", T: () => define_20.Vector },
            { no: 10, name: "pos", kind: "message", T: () => define_20.Vector },
            { no: 12, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.EntityJumpNotify.Type jump_type */ 9:
                    message.jumpType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector rot */ 8:
                    message.rot = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 10:
                    message.pos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
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
        /* optional com.midnights.game.EntityJumpNotify.Type jump_type = 9; */
        if (message.jumpType !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.jumpType);
        /* optional com.midnights.game.Vector rot = 8; */
        if (message.rot)
            define_20.Vector.internalBinaryWrite(message.rot, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 10; */
        if (message.pos)
            define_20.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 12; */
        if (message.entityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityJumpNotify
 */
exports.EntityJumpNotify = new EntityJumpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSceneAreaReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetSceneAreaReq", [
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "belong_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 belong_uid */ 7:
                    message.belongUid = reader.uint32();
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
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 belong_uid = 7; */
        if (message.belongUid !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.belongUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetSceneAreaReq
 */
exports.GetSceneAreaReq = new GetSceneAreaReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSceneAreaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetSceneAreaRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "city_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CityInfo },
            { no: 15, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "area_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cityInfoList: [], areaIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.CityInfo city_info_list */ 13:
                    message.cityInfoList.push(exports.CityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 scene_id */ 15:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated uint32 area_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.areaIdList.push(reader.uint32());
                    else
                        message.areaIdList.push(reader.uint32());
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
        /* repeated com.midnights.game.CityInfo city_info_list = 13; */
        for (let i = 0; i < message.cityInfoList.length; i++)
            exports.CityInfo.internalBinaryWrite(message.cityInfoList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 15; */
        if (message.sceneId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 area_id_list = 9; */
        if (message.areaIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.areaIdList.length; i++)
                writer.uint32(message.areaIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetSceneAreaRsp
 */
exports.GetSceneAreaRsp = new GetSceneAreaRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneAreaUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneAreaUnlockNotify", [
            { no: 10, name: "area_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { areaList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 area_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.areaList.push(reader.uint32());
                    else
                        message.areaList.push(reader.uint32());
                    break;
                case /* optional uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
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
        /* repeated uint32 area_list = 10; */
        if (message.areaList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.areaList.length; i++)
                writer.uint32(message.areaList[i]);
            writer.join();
        }
        /* optional uint32 scene_id = 9; */
        if (message.sceneId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneAreaUnlockNotify
 */
exports.SceneAreaUnlockNotify = new SceneAreaUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityDrownReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityDrownReq", [
            { no: 10, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
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
        /* optional uint32 entity_id = 10; */
        if (message.entityId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityDrownReq
 */
exports.SceneEntityDrownReq = new SceneEntityDrownReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityDrownRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityDrownRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
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
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityDrownRsp
 */
exports.SceneEntityDrownRsp = new SceneEntityDrownRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneCreateEntityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneCreateEntityReq", [
            { no: 1, name: "entity", kind: "message", T: () => define_17.CreateEntityInfo },
            { no: 10, name: "is_destroy_when_disconnect", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.CreateReason", CreateReason] }
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
                case /* optional com.midnights.game.CreateEntityInfo entity */ 1:
                    message.entity = define_17.CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
                    break;
                case /* optional bool is_destroy_when_disconnect */ 10:
                    message.isDestroyWhenDisconnect = reader.bool();
                    break;
                case /* optional com.midnights.game.CreateReason reason */ 3:
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
        /* optional com.midnights.game.CreateEntityInfo entity = 1; */
        if (message.entity)
            define_17.CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_destroy_when_disconnect = 10; */
        if (message.isDestroyWhenDisconnect !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isDestroyWhenDisconnect);
        /* optional com.midnights.game.CreateReason reason = 3; */
        if (message.reason !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneCreateEntityReq
 */
exports.SceneCreateEntityReq = new SceneCreateEntityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneCreateEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneCreateEntityRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "entity", kind: "message", T: () => define_17.CreateEntityInfo }
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
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.CreateEntityInfo entity */ 10:
                    message.entity = define_17.CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
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
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.CreateEntityInfo entity = 10; */
        if (message.entity)
            define_17.CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneCreateEntityRsp
 */
exports.SceneCreateEntityRsp = new SceneCreateEntityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneDestroyEntityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneDestroyEntityReq", [
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
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
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneDestroyEntityReq
 */
exports.SceneDestroyEntityReq = new SceneDestroyEntityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneDestroyEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneDestroyEntityRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
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
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneDestroyEntityRsp
 */
exports.SceneDestroyEntityRsp = new SceneDestroyEntityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneForceUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneForceUnlockNotify", [
            { no: 10, name: "is_add", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "force_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forceIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_add */ 10:
                    message.isAdd = reader.bool();
                    break;
                case /* repeated uint32 force_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forceIdList.push(reader.uint32());
                    else
                        message.forceIdList.push(reader.uint32());
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
        /* optional bool is_add = 10; */
        if (message.isAdd !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isAdd);
        /* repeated uint32 force_id_list = 2; */
        if (message.forceIdList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forceIdList.length; i++)
                writer.uint32(message.forceIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneForceUnlockNotify
 */
exports.SceneForceUnlockNotify = new SceneForceUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneForceLockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneForceLockNotify", [
            { no: 9, name: "force_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forceIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 force_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forceIdList.push(reader.uint32());
                    else
                        message.forceIdList.push(reader.uint32());
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
        /* repeated uint32 force_id_list = 9; */
        if (message.forceIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forceIdList.length; i++)
                writer.uint32(message.forceIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneForceLockNotify
 */
exports.SceneForceLockNotify = new SceneForceLockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterWorldAreaReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterWorldAreaReq", [
            { no: 8, name: "area_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 area_type */ 8:
                    message.areaType = reader.uint32();
                    break;
                case /* optional uint32 area_id */ 1:
                    message.areaId = reader.uint32();
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
        /* optional uint32 area_type = 8; */
        if (message.areaType !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.areaType);
        /* optional uint32 area_id = 1; */
        if (message.areaId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.areaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterWorldAreaReq
 */
exports.EnterWorldAreaReq = new EnterWorldAreaReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterWorldAreaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterWorldAreaRsp", [
            { no: 1, name: "area_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 area_type */ 1:
                    message.areaType = reader.uint32();
                    break;
                case /* optional uint32 area_id */ 7:
                    message.areaId = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 area_type = 1; */
        if (message.areaType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.areaType);
        /* optional uint32 area_id = 7; */
        if (message.areaId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.areaId);
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterWorldAreaRsp
 */
exports.EnterWorldAreaRsp = new EnterWorldAreaRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityForceSyncReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityForceSyncReq", [
            { no: 1, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "motion_info", kind: "message", T: () => define_18.MotionInfo },
            { no: 13, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 room_id */ 1:
                    message.roomId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MotionInfo motion_info */ 11:
                    message.motionInfo = define_18.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* optional uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 scene_time */ 12:
                    message.sceneTime = reader.uint32();
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
        /* optional uint32 room_id = 1; */
        if (message.roomId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.roomId);
        /* optional com.midnights.game.MotionInfo motion_info = 11; */
        if (message.motionInfo)
            define_18.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 13; */
        if (message.entityId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 scene_time = 12; */
        if (message.sceneTime !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sceneTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityForceSyncReq
 */
exports.EntityForceSyncReq = new EntityForceSyncReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityForceSyncRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityForceSyncRsp", [
            { no: 14, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "fail_motion", kind: "message", T: () => define_18.MotionInfo },
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
                case /* optional uint32 scene_time */ 14:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MotionInfo fail_motion */ 8:
                    message.failMotion = define_18.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.failMotion);
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_time = 14; */
        if (message.sceneTime !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 entity_id = 6; */
        if (message.entityId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.MotionInfo fail_motion = 8; */
        if (message.failMotion)
            define_18.MotionInfo.internalBinaryWrite(message.failMotion, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityForceSyncRsp
 */
exports.EntityForceSyncRsp = new EntityForceSyncRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAreaExplorePointReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAreaExplorePointReq", [
            { no: 14, name: "area_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { areaIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 area_id_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.areaIdList.push(reader.uint32());
                    else
                        message.areaIdList.push(reader.uint32());
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
        /* repeated uint32 area_id_list = 14; */
        if (message.areaIdList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.areaIdList.length; i++)
                writer.uint32(message.areaIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAreaExplorePointReq
 */
exports.GetAreaExplorePointReq = new GetAreaExplorePointReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAreaExplorePointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAreaExplorePointRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "area_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "explore_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { areaIdList: [], explorePointList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 area_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.areaIdList.push(reader.uint32());
                    else
                        message.areaIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 explore_point_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.explorePointList.push(reader.uint32());
                    else
                        message.explorePointList.push(reader.uint32());
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
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 area_id_list = 11; */
        if (message.areaIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.areaIdList.length; i++)
                writer.uint32(message.areaIdList[i]);
            writer.join();
        }
        /* repeated uint32 explore_point_list = 4; */
        if (message.explorePointList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.explorePointList.length; i++)
                writer.uint32(message.explorePointList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAreaExplorePointRsp
 */
exports.GetAreaExplorePointRsp = new GetAreaExplorePointRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientTransmitReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientTransmitReq", [
            { no: 2, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.TransmitReason", TransmitReason] },
            { no: 1, name: "pos", kind: "message", T: () => define_20.Vector },
            { no: 9, name: "rot", kind: "message", T: () => define_20.Vector }
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
                case /* optional uint32 scene_id */ 2:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional com.midnights.game.TransmitReason reason */ 14:
                    message.reason = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 9:
                    message.rot = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* optional uint32 scene_id = 2; */
        if (message.sceneId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional com.midnights.game.TransmitReason reason = 14; */
        if (message.reason !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.reason);
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            define_20.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 9; */
        if (message.rot)
            define_20.Vector.internalBinaryWrite(message.rot, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientTransmitReq
 */
exports.ClientTransmitReq = new ClientTransmitReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientTransmitRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientTransmitRsp", [
            { no: 3, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.TransmitReason", TransmitReason] },
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
                case /* optional com.midnights.game.TransmitReason reason */ 3:
                    message.reason = reader.int32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.TransmitReason reason = 3; */
        if (message.reason !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.reason);
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientTransmitRsp
 */
exports.ClientTransmitRsp = new ClientTransmitRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneWeatherAreaNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterSceneWeatherAreaNotify", [
            { no: 13, name: "weather_gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 weather_gadget_id */ 13:
                    message.weatherGadgetId = reader.uint32();
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
        /* optional uint32 weather_gadget_id = 13; */
        if (message.weatherGadgetId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.weatherGadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterSceneWeatherAreaNotify
 */
exports.EnterSceneWeatherAreaNotify = new EnterSceneWeatherAreaNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExitSceneWeatherAreaNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExitSceneWeatherAreaNotify", [
            { no: 2, name: "weather_gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 weather_gadget_id */ 2:
                    message.weatherGadgetId = reader.uint32();
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
        /* optional uint32 weather_gadget_id = 2; */
        if (message.weatherGadgetId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.weatherGadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExitSceneWeatherAreaNotify
 */
exports.ExitSceneWeatherAreaNotify = new ExitSceneWeatherAreaNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneAreaWeatherNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneAreaWeatherNotify", [
            { no: 1, name: "weather_area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "weather_gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "climate_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "trans_duration", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "weather_value_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
    create(value) {
        const message = { weatherValueMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 weather_area_id */ 1:
                    message.weatherAreaId = reader.uint32();
                    break;
                case /* optional uint32 weather_gadget_id */ 9:
                    message.weatherGadgetId = reader.uint32();
                    break;
                case /* optional uint32 climate_type */ 14:
                    message.climateType = reader.uint32();
                    break;
                case /* optional float trans_duration */ 15:
                    message.transDuration = reader.float();
                    break;
                case /* map<uint32, string> weather_value_map */ 10:
                    this.binaryReadMap10(message.weatherValueMap, reader, options);
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
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneAreaWeatherNotify.weather_value_map");
            }
        }
        map[key ?? 0] = val ?? "";
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 weather_area_id = 1; */
        if (message.weatherAreaId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.weatherAreaId);
        /* optional uint32 weather_gadget_id = 9; */
        if (message.weatherGadgetId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.weatherGadgetId);
        /* optional uint32 climate_type = 14; */
        if (message.climateType !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.climateType);
        /* optional float trans_duration = 15; */
        if (message.transDuration !== undefined)
            writer.tag(15, runtime_2.WireType.Bit32).float(message.transDuration);
        /* map<uint32, string> weather_value_map = 10; */
        for (let k of Object.keys(message.weatherValueMap))
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.LengthDelimited).string(message.weatherValueMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneAreaWeatherNotify
 */
exports.SceneAreaWeatherNotify = new SceneAreaWeatherNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayerInfo", [
            { no: 10, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "online_player_info", kind: "message", T: () => define_16.OnlinePlayerInfo },
            { no: 2, name: "is_connected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 peer_id */ 6:
                    message.peerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.OnlinePlayerInfo online_player_info */ 13:
                    message.onlinePlayerInfo = define_16.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.onlinePlayerInfo);
                    break;
                case /* optional bool is_connected */ 2:
                    message.isConnected = reader.bool();
                    break;
                case /* optional string name */ 15:
                    message.name = reader.string();
                    break;
                case /* optional uint32 uid */ 8:
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
        /* optional uint32 scene_id = 10; */
        if (message.sceneId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 peer_id = 6; */
        if (message.peerId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.peerId);
        /* optional com.midnights.game.OnlinePlayerInfo online_player_info = 13; */
        if (message.onlinePlayerInfo)
            define_16.OnlinePlayerInfo.internalBinaryWrite(message.onlinePlayerInfo, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_connected = 2; */
        if (message.isConnected !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isConnected);
        /* optional string name = 15; */
        if (message.name !== undefined)
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.name);
        /* optional uint32 uid = 8; */
        if (message.uid !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayerInfo
 */
exports.ScenePlayerInfo = new ScenePlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayerInfoNotify", [
            { no: 5, name: "player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ScenePlayerInfo }
        ]);
    }
    create(value) {
        const message = { playerInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ScenePlayerInfo player_info_list */ 5:
                    message.playerInfoList.push(exports.ScenePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ScenePlayerInfo player_info_list = 5; */
        for (let i = 0; i < message.playerInfoList.length; i++)
            exports.ScenePlayerInfo.internalBinaryWrite(message.playerInfoList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayerInfoNotify
 */
exports.ScenePlayerInfoNotify = new ScenePlayerInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLocationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerLocationInfo", [
            { no: 15, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "pos", kind: "message", T: () => define_20.Vector },
            { no: 13, name: "rot", kind: "message", T: () => define_20.Vector }
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
                case /* optional uint32 uid */ 15:
                    message.uid = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 3:
                    message.pos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 13:
                    message.rot = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* optional uint32 uid = 15; */
        if (message.uid !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional com.midnights.game.Vector pos = 3; */
        if (message.pos)
            define_20.Vector.internalBinaryWrite(message.pos, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 13; */
        if (message.rot)
            define_20.Vector.internalBinaryWrite(message.rot, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerLocationInfo
 */
exports.PlayerLocationInfo = new PlayerLocationInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWorldLocationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerWorldLocationInfo", [
            { no: 1, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "player_loc", kind: "message", T: () => exports.PlayerLocationInfo }
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
                case /* optional uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlayerLocationInfo player_loc */ 12:
                    message.playerLoc = exports.PlayerLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerLoc);
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
        /* optional uint32 scene_id = 1; */
        if (message.sceneId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional com.midnights.game.PlayerLocationInfo player_loc = 12; */
        if (message.playerLoc)
            exports.PlayerLocationInfo.internalBinaryWrite(message.playerLoc, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerWorldLocationInfo
 */
exports.PlayerWorldLocationInfo = new PlayerWorldLocationInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerLocationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldPlayerLocationNotify", [
            { no: 8, name: "player_world_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PlayerWorldLocationInfo },
            { no: 15, name: "player_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PlayerLocationInfo }
        ]);
    }
    create(value) {
        const message = { playerWorldLocList: [], playerLocList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PlayerWorldLocationInfo player_world_loc_list */ 8:
                    message.playerWorldLocList.push(exports.PlayerWorldLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.PlayerLocationInfo player_loc_list */ 15:
                    message.playerLocList.push(exports.PlayerLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.PlayerWorldLocationInfo player_world_loc_list = 8; */
        for (let i = 0; i < message.playerWorldLocList.length; i++)
            exports.PlayerWorldLocationInfo.internalBinaryWrite(message.playerWorldLocList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.PlayerLocationInfo player_loc_list = 15; */
        for (let i = 0; i < message.playerLocList.length; i++)
            exports.PlayerLocationInfo.internalBinaryWrite(message.playerLocList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldPlayerLocationNotify
 */
exports.WorldPlayerLocationNotify = new WorldPlayerLocationNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BeginCameraSceneLookNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BeginCameraSceneLookNotify", [
            { no: 1154, name: "blend_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "custom_radius", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "is_set_screenXY", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "look_pos", kind: "message", T: () => define_20.Vector },
            { no: 11, name: "is_recover_keep_current", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1375, name: "is_abs_follow_pos", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "keep_rot_type", kind: "enum", opt: true, T: () => ["com.midnights.game.BeginCameraSceneLookNotify.KeepRotType", BeginCameraSceneLookNotify_KeepRotType] },
            { no: 9, name: "is_change_play_mode", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1103, name: "disable_protect", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "screen_y", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "is_set_follow_pos", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "is_force", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1758, name: "blend_duration", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 1327, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "screen_x", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "is_force_walk", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "other_params", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "follow_pos", kind: "message", T: () => define_20.Vector },
            { no: 2, name: "is_allow_input", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "duration", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { otherParams: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 blend_type */ 1154:
                    message.blendType = reader.uint32();
                    break;
                case /* optional float custom_radius */ 7:
                    message.customRadius = reader.float();
                    break;
                case /* optional bool is_set_screenXY */ 5:
                    message.isSetScreenXY = reader.bool();
                    break;
                case /* optional com.midnights.game.Vector look_pos */ 4:
                    message.lookPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.lookPos);
                    break;
                case /* optional bool is_recover_keep_current */ 11:
                    message.isRecoverKeepCurrent = reader.bool();
                    break;
                case /* optional bool is_abs_follow_pos */ 1375:
                    message.isAbsFollowPos = reader.bool();
                    break;
                case /* optional com.midnights.game.BeginCameraSceneLookNotify.KeepRotType keep_rot_type */ 6:
                    message.keepRotType = reader.int32();
                    break;
                case /* optional bool is_change_play_mode */ 9:
                    message.isChangePlayMode = reader.bool();
                    break;
                case /* optional uint32 disable_protect */ 1103:
                    message.disableProtect = reader.uint32();
                    break;
                case /* optional float screen_y */ 15:
                    message.screenY = reader.float();
                    break;
                case /* optional bool is_set_follow_pos */ 13:
                    message.isSetFollowPos = reader.bool();
                    break;
                case /* optional bool is_force */ 12:
                    message.isForce = reader.bool();
                    break;
                case /* optional float blend_duration */ 1758:
                    message.blendDuration = reader.float();
                    break;
                case /* optional uint32 entity_id */ 1327:
                    message.entityId = reader.uint32();
                    break;
                case /* optional float screen_x */ 3:
                    message.screenX = reader.float();
                    break;
                case /* optional bool is_force_walk */ 10:
                    message.isForceWalk = reader.bool();
                    break;
                case /* repeated string other_params */ 1:
                    message.otherParams.push(reader.string());
                    break;
                case /* optional com.midnights.game.Vector follow_pos */ 8:
                    message.followPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.followPos);
                    break;
                case /* optional bool is_allow_input */ 2:
                    message.isAllowInput = reader.bool();
                    break;
                case /* optional float duration */ 14:
                    message.duration = reader.float();
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
        /* optional uint32 blend_type = 1154; */
        if (message.blendType !== undefined)
            writer.tag(1154, runtime_2.WireType.Varint).uint32(message.blendType);
        /* optional float custom_radius = 7; */
        if (message.customRadius !== undefined)
            writer.tag(7, runtime_2.WireType.Bit32).float(message.customRadius);
        /* optional bool is_set_screenXY = 5; */
        if (message.isSetScreenXY !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isSetScreenXY);
        /* optional com.midnights.game.Vector look_pos = 4; */
        if (message.lookPos)
            define_20.Vector.internalBinaryWrite(message.lookPos, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_recover_keep_current = 11; */
        if (message.isRecoverKeepCurrent !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isRecoverKeepCurrent);
        /* optional bool is_abs_follow_pos = 1375; */
        if (message.isAbsFollowPos !== undefined)
            writer.tag(1375, runtime_2.WireType.Varint).bool(message.isAbsFollowPos);
        /* optional com.midnights.game.BeginCameraSceneLookNotify.KeepRotType keep_rot_type = 6; */
        if (message.keepRotType !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.keepRotType);
        /* optional bool is_change_play_mode = 9; */
        if (message.isChangePlayMode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isChangePlayMode);
        /* optional uint32 disable_protect = 1103; */
        if (message.disableProtect !== undefined)
            writer.tag(1103, runtime_2.WireType.Varint).uint32(message.disableProtect);
        /* optional float screen_y = 15; */
        if (message.screenY !== undefined)
            writer.tag(15, runtime_2.WireType.Bit32).float(message.screenY);
        /* optional bool is_set_follow_pos = 13; */
        if (message.isSetFollowPos !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isSetFollowPos);
        /* optional bool is_force = 12; */
        if (message.isForce !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isForce);
        /* optional float blend_duration = 1758; */
        if (message.blendDuration !== undefined)
            writer.tag(1758, runtime_2.WireType.Bit32).float(message.blendDuration);
        /* optional uint32 entity_id = 1327; */
        if (message.entityId !== undefined)
            writer.tag(1327, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional float screen_x = 3; */
        if (message.screenX !== undefined)
            writer.tag(3, runtime_2.WireType.Bit32).float(message.screenX);
        /* optional bool is_force_walk = 10; */
        if (message.isForceWalk !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isForceWalk);
        /* repeated string other_params = 1; */
        for (let i = 0; i < message.otherParams.length; i++)
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.otherParams[i]);
        /* optional com.midnights.game.Vector follow_pos = 8; */
        if (message.followPos)
            define_20.Vector.internalBinaryWrite(message.followPos, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_allow_input = 2; */
        if (message.isAllowInput !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isAllowInput);
        /* optional float duration = 14; */
        if (message.duration !== undefined)
            writer.tag(14, runtime_2.WireType.Bit32).float(message.duration);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BeginCameraSceneLookNotify
 */
exports.BeginCameraSceneLookNotify = new BeginCameraSceneLookNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EndCameraSceneLookNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EndCameraSceneLookNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.EndCameraSceneLookNotify
 */
exports.EndCameraSceneLookNotify = new EndCameraSceneLookNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarkEntityInMinMapNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MarkEntityInMinMapNotify", [
            { no: 4, name: "position", kind: "message", T: () => define_20.Vector },
            { no: 7, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.Vector position */ 4:
                    message.position = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* optional uint32 monster_id */ 7:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
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
        /* optional com.midnights.game.Vector position = 4; */
        if (message.position)
            define_20.Vector.internalBinaryWrite(message.position, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 monster_id = 7; */
        if (message.monsterId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.monsterId);
        /* optional uint32 entity_id = 14; */
        if (message.entityId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MarkEntityInMinMapNotify
 */
exports.MarkEntityInMinMapNotify = new MarkEntityInMinMapNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnmarkEntityInMinMapNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnmarkEntityInMinMapNotify", [
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
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
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnmarkEntityInMinMapNotify
 */
exports.UnmarkEntityInMinMapNotify = new UnmarkEntityInMinMapNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteGroupTriggerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExecuteGroupTriggerReq", [
            { no: 15, name: "source_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "param2", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "source_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "param3", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "param1", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional string source_name */ 15:
                    message.sourceName = reader.string();
                    break;
                case /* optional uint32 target_entity_id */ 12:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* optional int32 param2 */ 8:
                    message.param2 = reader.int32();
                    break;
                case /* optional uint32 source_entity_id */ 4:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* optional int32 param3 */ 10:
                    message.param3 = reader.int32();
                    break;
                case /* optional int32 param1 */ 9:
                    message.param1 = reader.int32();
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
        /* optional string source_name = 15; */
        if (message.sourceName !== undefined)
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.sourceName);
        /* optional uint32 target_entity_id = 12; */
        if (message.targetEntityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        /* optional int32 param2 = 8; */
        if (message.param2 !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.param2);
        /* optional uint32 source_entity_id = 4; */
        if (message.sourceEntityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sourceEntityId);
        /* optional int32 param3 = 10; */
        if (message.param3 !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.param3);
        /* optional int32 param1 = 9; */
        if (message.param1 !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.param1);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExecuteGroupTriggerReq
 */
exports.ExecuteGroupTriggerReq = new ExecuteGroupTriggerReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteGroupTriggerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExecuteGroupTriggerRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.ExecuteGroupTriggerRsp
 */
exports.ExecuteGroupTriggerRsp = new ExecuteGroupTriggerRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LevelupCityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LevelupCityReq", [
            { no: 5, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "item_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 5:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 area_id */ 3:
                    message.areaId = reader.uint32();
                    break;
                case /* optional uint32 item_num */ 14:
                    message.itemNum = reader.uint32();
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
        /* optional uint32 scene_id = 5; */
        if (message.sceneId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 area_id = 3; */
        if (message.areaId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.areaId);
        /* optional uint32 item_num = 14; */
        if (message.itemNum !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.itemNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LevelupCityReq
 */
exports.LevelupCityReq = new LevelupCityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LevelupCityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LevelupCityRsp", [
            { no: 9, name: "area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "city_info", kind: "message", T: () => exports.CityInfo }
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
                case /* optional uint32 area_id */ 9:
                    message.areaId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional com.midnights.game.CityInfo city_info */ 6:
                    message.cityInfo = exports.CityInfo.internalBinaryRead(reader, reader.uint32(), options, message.cityInfo);
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
        /* optional uint32 area_id = 9; */
        if (message.areaId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.areaId);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional com.midnights.game.CityInfo city_info = 6; */
        if (message.cityInfo)
            exports.CityInfo.internalBinaryWrite(message.cityInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LevelupCityRsp
 */
exports.LevelupCityRsp = new LevelupCityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RoutePointChangeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RoutePointChangeInfo", [
            { no: 6, name: "wait_time", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 14, name: "target_velocity", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "point_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional float wait_time */ 6:
                    message.waitTime = reader.float();
                    break;
                case /* optional float target_velocity */ 14:
                    message.targetVelocity = reader.float();
                    break;
                case /* optional uint32 point_index */ 11:
                    message.pointIndex = reader.uint32();
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
        /* optional float wait_time = 6; */
        if (message.waitTime !== undefined)
            writer.tag(6, runtime_2.WireType.Bit32).float(message.waitTime);
        /* optional float target_velocity = 14; */
        if (message.targetVelocity !== undefined)
            writer.tag(14, runtime_2.WireType.Bit32).float(message.targetVelocity);
        /* optional uint32 point_index = 11; */
        if (message.pointIndex !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.pointIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RoutePointChangeInfo
 */
exports.RoutePointChangeInfo = new RoutePointChangeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneRouteChangeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneRouteChangeInfo", [
            { no: 12, name: "is_forward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "route_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.RoutePointChangeInfo }
        ]);
    }
    create(value) {
        const message = { pointList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_forward */ 12:
                    message.isForward = reader.bool();
                    break;
                case /* optional uint32 route_id */ 15:
                    message.routeId = reader.uint32();
                    break;
                case /* optional uint32 type */ 4:
                    message.type = reader.uint32();
                    break;
                case /* repeated com.midnights.game.RoutePointChangeInfo point_list */ 1:
                    message.pointList.push(exports.RoutePointChangeInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool is_forward = 12; */
        if (message.isForward !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isForward);
        /* optional uint32 route_id = 15; */
        if (message.routeId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.routeId);
        /* optional uint32 type = 4; */
        if (message.type !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.type);
        /* repeated com.midnights.game.RoutePointChangeInfo point_list = 1; */
        for (let i = 0; i < message.pointList.length; i++)
            exports.RoutePointChangeInfo.internalBinaryWrite(message.pointList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneRouteChangeInfo
 */
exports.SceneRouteChangeInfo = new SceneRouteChangeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneRouteChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneRouteChangeNotify", [
            { no: 12, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "route_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.SceneRouteChangeInfo }
        ]);
    }
    create(value) {
        const message = { routeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 scene_time */ 11:
                    message.sceneTime = reader.uint32();
                    break;
                case /* repeated com.midnights.game.SceneRouteChangeInfo route_list */ 2:
                    message.routeList.push(exports.SceneRouteChangeInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 scene_id = 12; */
        if (message.sceneId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 scene_time = 11; */
        if (message.sceneTime !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* repeated com.midnights.game.SceneRouteChangeInfo route_list = 2; */
        for (let i = 0; i < message.routeList.length; i++)
            exports.SceneRouteChangeInfo.internalBinaryWrite(message.routeList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneRouteChangeNotify
 */
exports.SceneRouteChangeNotify = new SceneRouteChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlatformStartRouteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlatformStartRouteNotify", [
            { no: 15, name: "platform", kind: "message", T: () => define_15.PlatformInfo },
            { no: 12, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.PlatformInfo platform */ 15:
                    message.platform = define_15.PlatformInfo.internalBinaryRead(reader, reader.uint32(), options, message.platform);
                    break;
                case /* optional uint32 scene_time */ 12:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
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
        /* optional com.midnights.game.PlatformInfo platform = 15; */
        if (message.platform)
            define_15.PlatformInfo.internalBinaryWrite(message.platform, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_time = 12; */
        if (message.sceneTime !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlatformStartRouteNotify
 */
exports.PlatformStartRouteNotify = new PlatformStartRouteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlatformStopRouteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlatformStopRouteNotify", [
            { no: 9, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "platform", kind: "message", T: () => define_15.PlatformInfo }
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
                case /* optional uint32 scene_time */ 9:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlatformInfo platform */ 8:
                    message.platform = define_15.PlatformInfo.internalBinaryRead(reader, reader.uint32(), options, message.platform);
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
        /* optional uint32 scene_time = 9; */
        if (message.sceneTime !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint32 entity_id = 12; */
        if (message.entityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.PlatformInfo platform = 8; */
        if (message.platform)
            define_15.PlatformInfo.internalBinaryWrite(message.platform, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlatformStopRouteNotify
 */
exports.PlatformStopRouteNotify = new PlatformStopRouteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlatformChangeRouteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlatformChangeRouteNotify", [
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "platform", kind: "message", T: () => define_15.PlatformInfo },
            { no: 8, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlatformInfo platform */ 1:
                    message.platform = define_15.PlatformInfo.internalBinaryRead(reader, reader.uint32(), options, message.platform);
                    break;
                case /* optional uint32 scene_time */ 8:
                    message.sceneTime = reader.uint32();
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
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.PlatformInfo platform = 1; */
        if (message.platform)
            define_15.PlatformInfo.internalBinaryWrite(message.platform, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_time = 8; */
        if (message.sceneTime !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sceneTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlatformChangeRouteNotify
 */
exports.PlatformChangeRouteNotify = new PlatformChangeRouteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerSoundNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayerSoundNotify", [
            { no: 4, name: "sound_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "play_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ScenePlayerSoundNotify.PlaySoundType", ScenePlayerSoundNotify_PlaySoundType] },
            { no: 3, name: "play_pos", kind: "message", T: () => define_20.Vector }
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
                case /* optional string sound_name */ 4:
                    message.soundName = reader.string();
                    break;
                case /* optional com.midnights.game.ScenePlayerSoundNotify.PlaySoundType play_type */ 8:
                    message.playType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector play_pos */ 3:
                    message.playPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.playPos);
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
        /* optional string sound_name = 4; */
        if (message.soundName !== undefined)
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.soundName);
        /* optional com.midnights.game.ScenePlayerSoundNotify.PlaySoundType play_type = 8; */
        if (message.playType !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.playType);
        /* optional com.midnights.game.Vector play_pos = 3; */
        if (message.playPos)
            define_20.Vector.internalBinaryWrite(message.playPos, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayerSoundNotify
 */
exports.ScenePlayerSoundNotify = new ScenePlayerSoundNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PersonalSceneJumpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PersonalSceneJumpReq", [
            { no: 4, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 point_id */ 4:
                    message.pointId = reader.uint32();
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
        /* optional uint32 point_id = 4; */
        if (message.pointId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.pointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PersonalSceneJumpReq
 */
exports.PersonalSceneJumpReq = new PersonalSceneJumpReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PersonalSceneJumpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PersonalSceneJumpRsp", [
            { no: 5, name: "dest_scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "dest_pos", kind: "message", T: () => define_20.Vector }
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
                case /* optional uint32 dest_scene_id */ 5:
                    message.destSceneId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector dest_pos */ 11:
                    message.destPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.destPos);
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
        /* optional uint32 dest_scene_id = 5; */
        if (message.destSceneId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.destSceneId);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.Vector dest_pos = 11; */
        if (message.destPos)
            define_20.Vector.internalBinaryWrite(message.destPos, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PersonalSceneJumpRsp
 */
exports.PersonalSceneJumpRsp = new PersonalSceneJumpRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SealBattleBeginNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SealBattleBeginNotify", [
            { no: 9, name: "seal_max_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "seal_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "seal_radius", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "battle_type", kind: "enum", opt: true, T: () => ["com.midnights.game.SealBattleType", SealBattleType] }
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
                case /* optional uint32 seal_max_progress */ 9:
                    message.sealMaxProgress = reader.uint32();
                    break;
                case /* optional uint32 seal_entity_id */ 1:
                    message.sealEntityId = reader.uint32();
                    break;
                case /* optional uint32 seal_radius */ 12:
                    message.sealRadius = reader.uint32();
                    break;
                case /* optional com.midnights.game.SealBattleType battle_type */ 14:
                    message.battleType = reader.int32();
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
        /* optional uint32 seal_max_progress = 9; */
        if (message.sealMaxProgress !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sealMaxProgress);
        /* optional uint32 seal_entity_id = 1; */
        if (message.sealEntityId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.sealEntityId);
        /* optional uint32 seal_radius = 12; */
        if (message.sealRadius !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sealRadius);
        /* optional com.midnights.game.SealBattleType battle_type = 14; */
        if (message.battleType !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.battleType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SealBattleBeginNotify
 */
exports.SealBattleBeginNotify = new SealBattleBeginNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SealBattleEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SealBattleEndNotify", [
            { no: 4, name: "is_win", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "seal_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_win */ 4:
                    message.isWin = reader.bool();
                    break;
                case /* optional uint32 seal_entity_id */ 15:
                    message.sealEntityId = reader.uint32();
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
        /* optional bool is_win = 4; */
        if (message.isWin !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isWin);
        /* optional uint32 seal_entity_id = 15; */
        if (message.sealEntityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.sealEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SealBattleEndNotify
 */
exports.SealBattleEndNotify = new SealBattleEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SealBattleProgressNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SealBattleProgressNotify", [
            { no: 9, name: "seal_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "seal_radius", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 seal_entity_id */ 9:
                    message.sealEntityId = reader.uint32();
                    break;
                case /* optional uint32 max_progress */ 10:
                    message.maxProgress = reader.uint32();
                    break;
                case /* optional uint32 seal_radius */ 4:
                    message.sealRadius = reader.uint32();
                    break;
                case /* optional uint32 progress */ 5:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 2:
                    message.endTime = reader.uint32();
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
        /* optional uint32 seal_entity_id = 9; */
        if (message.sealEntityId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sealEntityId);
        /* optional uint32 max_progress = 10; */
        if (message.maxProgress !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.maxProgress);
        /* optional uint32 seal_radius = 4; */
        if (message.sealRadius !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sealRadius);
        /* optional uint32 progress = 5; */
        if (message.progress !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.progress);
        /* optional uint32 end_time = 2; */
        if (message.endTime !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SealBattleProgressNotify
 */
exports.SealBattleProgressNotify = new SealBattleProgressNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientPauseNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientPauseNotify", [
            { no: 1, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional bool is_open */ 1:
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
        /* optional bool is_open = 1; */
        if (message.isOpen !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientPauseNotify
 */
exports.ClientPauseNotify = new ClientPauseNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEnterSceneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarEnterSceneInfo", [
            { no: 14, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_14.ServerBuff },
            { no: 7, name: "avatar_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "weapon_ability_info", kind: "message", T: () => define_13.AbilitySyncStateInfo },
            { no: 10, name: "weapon_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_ability_info", kind: "message", T: () => define_13.AbilitySyncStateInfo },
            { no: 13, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { serverBuffList: [], buffIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ServerBuff server_buff_list */ 14:
                    message.serverBuffList.push(define_14.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 avatar_entity_id */ 7:
                    message.avatarEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo weapon_ability_info */ 12:
                    message.weaponAbilityInfo = define_13.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.weaponAbilityInfo);
                    break;
                case /* optional uint32 weapon_entity_id */ 10:
                    message.weaponEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo avatar_ability_info */ 2:
                    message.avatarAbilityInfo = define_13.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarAbilityInfo);
                    break;
                case /* optional uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 weapon_guid */ 9:
                    message.weaponGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint32 buff_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
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
        /* repeated com.midnights.game.ServerBuff server_buff_list = 14; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            define_14.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 avatar_entity_id = 7; */
        if (message.avatarEntityId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.avatarEntityId);
        /* optional com.midnights.game.AbilitySyncStateInfo weapon_ability_info = 12; */
        if (message.weaponAbilityInfo)
            define_13.AbilitySyncStateInfo.internalBinaryWrite(message.weaponAbilityInfo, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 weapon_entity_id = 10; */
        if (message.weaponEntityId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.weaponEntityId);
        /* optional com.midnights.game.AbilitySyncStateInfo avatar_ability_info = 2; */
        if (message.avatarAbilityInfo)
            define_13.AbilitySyncStateInfo.internalBinaryWrite(message.avatarAbilityInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 avatar_guid = 13; */
        if (message.avatarGuid !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint64 weapon_guid = 9; */
        if (message.weaponGuid !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint64(message.weaponGuid);
        /* repeated uint32 buff_id_list = 5; */
        if (message.buffIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarEnterSceneInfo
 */
exports.AvatarEnterSceneInfo = new AvatarEnterSceneInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamEnterSceneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TeamEnterSceneInfo", [
            { no: 7, name: "ability_control_block", kind: "message", T: () => define_12.AbilityControlBlock },
            { no: 10, name: "team_ability_info", kind: "message", T: () => define_13.AbilitySyncStateInfo },
            { no: 15, name: "team_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.AbilityControlBlock ability_control_block */ 7:
                    message.abilityControlBlock = define_12.AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo team_ability_info */ 10:
                    message.teamAbilityInfo = define_13.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamAbilityInfo);
                    break;
                case /* optional uint32 team_entity_id */ 15:
                    message.teamEntityId = reader.uint32();
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
        /* optional com.midnights.game.AbilityControlBlock ability_control_block = 7; */
        if (message.abilityControlBlock)
            define_12.AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilitySyncStateInfo team_ability_info = 10; */
        if (message.teamAbilityInfo)
            define_13.AbilitySyncStateInfo.internalBinaryWrite(message.teamAbilityInfo, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 team_entity_id = 15; */
        if (message.teamEntityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.teamEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TeamEnterSceneInfo
 */
exports.TeamEnterSceneInfo = new TeamEnterSceneInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MPLevelEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MPLevelEntityInfo", [
            { no: 2, name: "ability_info", kind: "message", T: () => define_13.AbilitySyncStateInfo },
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.AbilitySyncStateInfo ability_info */ 2:
                    message.abilityInfo = define_13.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
                    break;
                case /* optional uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 authority_peer_id */ 3:
                    message.authorityPeerId = reader.uint32();
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
        /* optional com.midnights.game.AbilitySyncStateInfo ability_info = 2; */
        if (message.abilityInfo)
            define_13.AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 authority_peer_id = 3; */
        if (message.authorityPeerId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MPLevelEntityInfo
 */
exports.MPLevelEntityInfo = new MPLevelEntityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterSceneInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerEnterSceneInfoNotify", [
            { no: 8, name: "team_enter_info", kind: "message", T: () => exports.TeamEnterSceneInfo },
            { no: 12, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_enter_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AvatarEnterSceneInfo },
            { no: 6, name: "cur_avatar_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "mp_level_entity_info", kind: "message", T: () => exports.MPLevelEntityInfo }
        ]);
    }
    create(value) {
        const message = { avatarEnterInfo: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.TeamEnterSceneInfo team_enter_info */ 8:
                    message.teamEnterInfo = exports.TeamEnterSceneInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamEnterInfo);
                    break;
                case /* optional uint32 enter_scene_token */ 12:
                    message.enterSceneToken = reader.uint32();
                    break;
                case /* repeated com.midnights.game.AvatarEnterSceneInfo avatar_enter_info */ 7:
                    message.avatarEnterInfo.push(exports.AvatarEnterSceneInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 cur_avatar_entity_id */ 6:
                    message.curAvatarEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MPLevelEntityInfo mp_level_entity_info */ 5:
                    message.mpLevelEntityInfo = exports.MPLevelEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.mpLevelEntityInfo);
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
        /* optional com.midnights.game.TeamEnterSceneInfo team_enter_info = 8; */
        if (message.teamEnterInfo)
            exports.TeamEnterSceneInfo.internalBinaryWrite(message.teamEnterInfo, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 enter_scene_token = 12; */
        if (message.enterSceneToken !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        /* repeated com.midnights.game.AvatarEnterSceneInfo avatar_enter_info = 7; */
        for (let i = 0; i < message.avatarEnterInfo.length; i++)
            exports.AvatarEnterSceneInfo.internalBinaryWrite(message.avatarEnterInfo[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 cur_avatar_entity_id = 6; */
        if (message.curAvatarEntityId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.curAvatarEntityId);
        /* optional com.midnights.game.MPLevelEntityInfo mp_level_entity_info = 5; */
        if (message.mpLevelEntityInfo)
            exports.MPLevelEntityInfo.internalBinaryWrite(message.mpLevelEntityInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerEnterSceneInfoNotify
 */
exports.PlayerEnterSceneInfoNotify = new PlayerEnterSceneInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JoinPlayerSceneReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.JoinPlayerSceneReq", [
            { no: 12, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 12:
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
        /* optional uint32 target_uid = 12; */
        if (message.targetUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.JoinPlayerSceneReq
 */
exports.JoinPlayerSceneReq = new JoinPlayerSceneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JoinPlayerSceneRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.JoinPlayerSceneRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.JoinPlayerSceneRsp
 */
exports.JoinPlayerSceneRsp = new JoinPlayerSceneRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneKickPlayerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneKickPlayerReq", [
            { no: 6, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 6:
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
        /* optional uint32 target_uid = 6; */
        if (message.targetUid !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneKickPlayerReq
 */
exports.SceneKickPlayerReq = new SceneKickPlayerReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneKickPlayerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneKickPlayerRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 10:
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
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 target_uid = 10; */
        if (message.targetUid !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneKickPlayerRsp
 */
exports.SceneKickPlayerRsp = new SceneKickPlayerRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneKickPlayerNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneKickPlayerNotify", [
            { no: 8, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "kicker_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 kicker_uid */ 9:
                    message.kickerUid = reader.uint32();
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
        /* optional uint32 target_uid = 8; */
        if (message.targetUid !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.targetUid);
        /* optional uint32 kicker_uid = 9; */
        if (message.kickerUid !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.kickerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneKickPlayerNotify
 */
exports.SceneKickPlayerNotify = new SceneKickPlayerNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HitClientTrivialNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HitClientTrivialNotify", [
            { no: 11, name: "position", kind: "message", T: () => define_20.Vector },
            { no: 12, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.Vector position */ 11:
                    message.position = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* optional uint32 owner_entity_id */ 12:
                    message.ownerEntityId = reader.uint32();
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
        /* optional com.midnights.game.Vector position = 11; */
        if (message.position)
            define_20.Vector.internalBinaryWrite(message.position, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 owner_entity_id = 12; */
        if (message.ownerEntityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HitClientTrivialNotify
 */
exports.HitClientTrivialNotify = new HitClientTrivialNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BackMyWorldReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BackMyWorldReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.BackMyWorldReq
 */
exports.BackMyWorldReq = new BackMyWorldReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BackMyWorldRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BackMyWorldRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BackMyWorldRsp
 */
exports.BackMyWorldRsp = new BackMyWorldRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SeeMonsterReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SeeMonsterReq", [
            { no: 7, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 monster_id */ 7:
                    message.monsterId = reader.uint32();
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
        /* optional uint32 monster_id = 7; */
        if (message.monsterId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.monsterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SeeMonsterReq
 */
exports.SeeMonsterReq = new SeeMonsterReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SeeMonsterRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SeeMonsterRsp", [
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
                case /* optional int32 retcode */ 9:
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
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SeeMonsterRsp
 */
exports.SeeMonsterRsp = new SeeMonsterRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddSeenMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddSeenMonsterNotify", [
            { no: 12, name: "monster_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 monster_id_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.monsterIdList.push(reader.uint32());
                    else
                        message.monsterIdList.push(reader.uint32());
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
        /* repeated uint32 monster_id_list = 12; */
        if (message.monsterIdList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.monsterIdList.length; i++)
                writer.uint32(message.monsterIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddSeenMonsterNotify
 */
exports.AddSeenMonsterNotify = new AddSeenMonsterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllSeenMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AllSeenMonsterNotify", [
            { no: 4, name: "monster_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 monster_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.monsterIdList.push(reader.uint32());
                    else
                        message.monsterIdList.push(reader.uint32());
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
        /* repeated uint32 monster_id_list = 4; */
        if (message.monsterIdList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.monsterIdList.length; i++)
                writer.uint32(message.monsterIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AllSeenMonsterNotify
 */
exports.AllSeenMonsterNotify = new AllSeenMonsterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneTimeNotify", [
            { no: 14, name: "scene_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "is_paused", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint64 scene_time */ 14:
                    message.sceneTime = reader.uint64().toBigInt();
                    break;
                case /* optional bool is_paused */ 1:
                    message.isPaused = reader.bool();
                    break;
                case /* optional uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
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
        /* optional uint64 scene_time = 14; */
        if (message.sceneTime !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.sceneTime);
        /* optional bool is_paused = 1; */
        if (message.isPaused !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isPaused);
        /* optional uint32 scene_id = 7; */
        if (message.sceneId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneTimeNotify
 */
exports.SceneTimeNotify = new SceneTimeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneReadyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterSceneReadyReq", [
            { no: 9, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 enter_scene_token */ 9:
                    message.enterSceneToken = reader.uint32();
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
        /* optional uint32 enter_scene_token = 9; */
        if (message.enterSceneToken !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterSceneReadyReq
 */
exports.EnterSceneReadyReq = new EnterSceneReadyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneReadyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterSceneReadyRsp", [
            { no: 1, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 enter_scene_token */ 1:
                    message.enterSceneToken = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 enter_scene_token = 1; */
        if (message.enterSceneToken !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterSceneReadyRsp
 */
exports.EnterSceneReadyRsp = new EnterSceneReadyRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterScenePeerNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterScenePeerNotify", [
            { no: 12, name: "dest_scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "host_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 dest_scene_id */ 12:
                    message.destSceneId = reader.uint32();
                    break;
                case /* optional uint32 enter_scene_token */ 11:
                    message.enterSceneToken = reader.uint32();
                    break;
                case /* optional uint32 host_peer_id */ 14:
                    message.hostPeerId = reader.uint32();
                    break;
                case /* optional uint32 peer_id */ 1:
                    message.peerId = reader.uint32();
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
        /* optional uint32 dest_scene_id = 12; */
        if (message.destSceneId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.destSceneId);
        /* optional uint32 enter_scene_token = 11; */
        if (message.enterSceneToken !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        /* optional uint32 host_peer_id = 14; */
        if (message.hostPeerId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.hostPeerId);
        /* optional uint32 peer_id = 1; */
        if (message.peerId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.peerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterScenePeerNotify
 */
exports.EnterScenePeerNotify = new EnterScenePeerNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneDoneReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterSceneDoneReq", [
            { no: 11, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 enter_scene_token */ 11:
                    message.enterSceneToken = reader.uint32();
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
        /* optional uint32 enter_scene_token = 11; */
        if (message.enterSceneToken !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterSceneDoneReq
 */
exports.EnterSceneDoneReq = new EnterSceneDoneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneDoneRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterSceneDoneRsp", [
            { no: 15, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 enter_scene_token */ 15:
                    message.enterSceneToken = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 enter_scene_token = 15; */
        if (message.enterSceneToken !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterSceneDoneRsp
 */
exports.EnterSceneDoneRsp = new EnterSceneDoneRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerDieNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldPlayerDieNotify", [
            { no: 12, name: "die_type", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerDieType", define_11.PlayerDieType] },
            { no: 15, name: "murderer_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entity: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.PlayerDieType die_type */ 12:
                    message.dieType = reader.int32();
                    break;
                case /* optional uint32 murderer_entity_id */ 15:
                    message.murdererEntityId = reader.uint32();
                    break;
                case /* uint32 monster_id */ 8:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 4:
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.PlayerDieType die_type = 12; */
        if (message.dieType !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.dieType);
        /* optional uint32 murderer_entity_id = 15; */
        if (message.murdererEntityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.murdererEntityId);
        /* uint32 monster_id = 8; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 gadget_id = 4; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.entity.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldPlayerDieNotify
 */
exports.WorldPlayerDieNotify = new WorldPlayerDieNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerReviveReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldPlayerReviveReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.WorldPlayerReviveReq
 */
exports.WorldPlayerReviveReq = new WorldPlayerReviveReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerReviveRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldPlayerReviveRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.WorldPlayerReviveRsp
 */
exports.WorldPlayerReviveRsp = new WorldPlayerReviveRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JoinPlayerFailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.JoinPlayerFailNotify", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.JoinPlayerFailNotify
 */
exports.JoinPlayerFailNotify = new JoinPlayerFailNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetSceneWeatherAreaReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetSceneWeatherAreaReq", [
            { no: 13, name: "weather_gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "weather_value_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
    create(value) {
        const message = { weatherValueMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 weather_gadget_id */ 13:
                    message.weatherGadgetId = reader.uint32();
                    break;
                case /* map<uint32, string> weather_value_map */ 4:
                    this.binaryReadMap4(message.weatherValueMap, reader, options);
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
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SetSceneWeatherAreaReq.weather_value_map");
            }
        }
        map[key ?? 0] = val ?? "";
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 weather_gadget_id = 13; */
        if (message.weatherGadgetId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.weatherGadgetId);
        /* map<uint32, string> weather_value_map = 4; */
        for (let k of Object.keys(message.weatherValueMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.LengthDelimited).string(message.weatherValueMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetSceneWeatherAreaReq
 */
exports.SetSceneWeatherAreaReq = new SetSceneWeatherAreaReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetSceneWeatherAreaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetSceneWeatherAreaRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetSceneWeatherAreaRsp
 */
exports.SetSceneWeatherAreaRsp = new SetSceneWeatherAreaRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteGadgetLuaReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExecuteGadgetLuaReq", [
            { no: 12, name: "source_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "param3", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "param1", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "param2", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 source_entity_id */ 12:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* optional int32 param3 */ 1:
                    message.param3 = reader.int32();
                    break;
                case /* optional int32 param1 */ 5:
                    message.param1 = reader.int32();
                    break;
                case /* optional int32 param2 */ 14:
                    message.param2 = reader.int32();
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
        /* optional uint32 source_entity_id = 12; */
        if (message.sourceEntityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sourceEntityId);
        /* optional int32 param3 = 1; */
        if (message.param3 !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.param3);
        /* optional int32 param1 = 5; */
        if (message.param1 !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.param1);
        /* optional int32 param2 = 14; */
        if (message.param2 !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.param2);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExecuteGadgetLuaReq
 */
exports.ExecuteGadgetLuaReq = new ExecuteGadgetLuaReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteGadgetLuaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExecuteGadgetLuaRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ExecuteGadgetLuaRsp
 */
exports.ExecuteGadgetLuaRsp = new ExecuteGadgetLuaRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CutSceneExtraParam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CutSceneExtraParam", [
            { no: 1, name: "detail_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { detailParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated double detail_param_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.detailParamList.push(reader.double());
                    else
                        message.detailParamList.push(reader.double());
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
        /* repeated double detail_param_list = 1; */
        if (message.detailParamList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.detailParamList.length; i++)
                writer.double(message.detailParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CutSceneExtraParam
 */
exports.CutSceneExtraParam = new CutSceneExtraParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CutSceneBeginNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CutSceneBeginNotify", [
            { no: 9, name: "is_wait_others", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "cutscene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "extra_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CutSceneExtraParam }
        ]);
    }
    create(value) {
        const message = { extraParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_wait_others */ 9:
                    message.isWaitOthers = reader.bool();
                    break;
                case /* optional uint32 cutscene_id */ 14:
                    message.cutsceneId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.CutSceneExtraParam extra_param_list */ 3:
                    message.extraParamList.push(exports.CutSceneExtraParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool is_wait_others = 9; */
        if (message.isWaitOthers !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isWaitOthers);
        /* optional uint32 cutscene_id = 14; */
        if (message.cutsceneId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.cutsceneId);
        /* repeated com.midnights.game.CutSceneExtraParam extra_param_list = 3; */
        for (let i = 0; i < message.extraParamList.length; i++)
            exports.CutSceneExtraParam.internalBinaryWrite(message.extraParamList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CutSceneBeginNotify
 */
exports.CutSceneBeginNotify = new CutSceneBeginNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CutSceneFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CutSceneFinishNotify", [
            { no: 12, name: "cutscene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 cutscene_id */ 12:
                    message.cutsceneId = reader.uint32();
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
        /* optional uint32 cutscene_id = 12; */
        if (message.cutsceneId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.cutsceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CutSceneFinishNotify
 */
exports.CutSceneFinishNotify = new CutSceneFinishNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CutSceneEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CutSceneEndNotify", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "cutscene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 cutscene_id */ 14:
                    message.cutsceneId = reader.uint32();
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
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 cutscene_id = 14; */
        if (message.cutsceneId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.cutsceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CutSceneEndNotify
 */
exports.CutSceneEndNotify = new CutSceneEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientScriptEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientScriptEventNotify", [
            { no: 9, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "source_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "event_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* repeated int32 param_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.int32());
                    else
                        message.paramList.push(reader.int32());
                    break;
                case /* optional uint32 source_entity_id */ 14:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* optional uint32 event_type */ 10:
                    message.eventType = reader.uint32();
                    break;
                case /* optional uint32 target_entity_id */ 13:
                    message.targetEntityId = reader.uint32();
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
        /* repeated int32 param_list = 9; */
        if (message.paramList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.int32(message.paramList[i]);
            writer.join();
        }
        /* optional uint32 source_entity_id = 14; */
        if (message.sourceEntityId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.sourceEntityId);
        /* optional uint32 event_type = 10; */
        if (message.eventType !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.eventType);
        /* optional uint32 target_entity_id = 13; */
        if (message.targetEntityId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientScriptEventNotify
 */
exports.ClientScriptEventNotify = new ClientScriptEventNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntitiesMovesReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntitiesMovesReq", [
            { no: 14, name: "entity_move_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_10.EntityMoveInfo }
        ]);
    }
    create(value) {
        const message = { entityMoveInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.EntityMoveInfo entity_move_info_list */ 14:
                    message.entityMoveInfoList.push(define_10.EntityMoveInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.EntityMoveInfo entity_move_info_list = 14; */
        for (let i = 0; i < message.entityMoveInfoList.length; i++)
            define_10.EntityMoveInfo.internalBinaryWrite(message.entityMoveInfoList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntitiesMovesReq
 */
exports.SceneEntitiesMovesReq = new SceneEntitiesMovesReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityMoveFailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityMoveFailInfo", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "fail_motion", kind: "message", T: () => define_18.MotionInfo },
            { no: 4, name: "reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_time */ 9:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.MotionInfo fail_motion */ 14:
                    message.failMotion = define_18.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.failMotion);
                    break;
                case /* optional uint32 reliable_seq */ 4:
                    message.reliableSeq = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
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
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 scene_time = 9; */
        if (message.sceneTime !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional com.midnights.game.MotionInfo fail_motion = 14; */
        if (message.failMotion)
            define_18.MotionInfo.internalBinaryWrite(message.failMotion, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 reliable_seq = 4; */
        if (message.reliableSeq !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.reliableSeq);
        /* optional uint32 entity_id = 10; */
        if (message.entityId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityMoveFailInfo
 */
exports.EntityMoveFailInfo = new EntityMoveFailInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntitiesMovesRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntitiesMovesRsp", [
            { no: 11, name: "entity_move_fail_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.EntityMoveFailInfo }
        ]);
    }
    create(value) {
        const message = { entityMoveFailInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.EntityMoveFailInfo entity_move_fail_info_list */ 11:
                    message.entityMoveFailInfoList.push(exports.EntityMoveFailInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.EntityMoveFailInfo entity_move_fail_info_list = 11; */
        for (let i = 0; i < message.entityMoveFailInfoList.length; i++)
            exports.EntityMoveFailInfo.internalBinaryWrite(message.entityMoveFailInfoList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntitiesMovesRsp
 */
exports.SceneEntitiesMovesRsp = new SceneEntitiesMovesRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntitiesMoveCombineNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntitiesMoveCombineNotify", [
            { no: 8, name: "entity_move_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_10.EntityMoveInfo }
        ]);
    }
    create(value) {
        const message = { entityMoveInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.EntityMoveInfo entity_move_info_list */ 8:
                    message.entityMoveInfoList.push(define_10.EntityMoveInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.EntityMoveInfo entity_move_info_list = 8; */
        for (let i = 0; i < message.entityMoveInfoList.length; i++)
            define_10.EntityMoveInfo.internalBinaryWrite(message.entityMoveInfoList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntitiesMoveCombineNotify
 */
exports.SceneEntitiesMoveCombineNotify = new SceneEntitiesMoveCombineNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockTransPointReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockTransPointReq", [
            { no: 12, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 point_id */ 12:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
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
        /* optional uint32 point_id = 12; */
        if (message.pointId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.pointId);
        /* optional uint32 scene_id = 10; */
        if (message.sceneId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockTransPointReq
 */
exports.UnlockTransPointReq = new UnlockTransPointReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockTransPointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockTransPointRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockTransPointRsp
 */
exports.UnlockTransPointRsp = new UnlockTransPointRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneWeatherForcastReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneWeatherForcastReq", [
            { no: 15, name: "weather_area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 weather_area_id */ 15:
                    message.weatherAreaId = reader.uint32();
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
        /* optional uint32 weather_area_id = 15; */
        if (message.weatherAreaId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.weatherAreaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneWeatherForcastReq
 */
exports.SceneWeatherForcastReq = new SceneWeatherForcastReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneWeatherForcastRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneWeatherForcastRsp", [
            { no: 14, name: "next_climate_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "forcast_climate_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { forcastClimateList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 next_climate_time */ 14:
                    message.nextClimateTime = reader.uint64().toBigInt();
                    break;
                case /* repeated uint32 forcast_climate_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forcastClimateList.push(reader.uint32());
                    else
                        message.forcastClimateList.push(reader.uint32());
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 next_climate_time = 14; */
        if (message.nextClimateTime !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.nextClimateTime);
        /* repeated uint32 forcast_climate_list = 2; */
        if (message.forcastClimateList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forcastClimateList.length; i++)
                writer.uint32(message.forcastClimateList[i]);
            writer.join();
        }
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneWeatherForcastRsp
 */
exports.SceneWeatherForcastRsp = new SceneWeatherForcastRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarkMapReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MarkMapReq", [
            { no: 8, name: "mark", kind: "message", T: () => define_9.MapMarkPoint },
            { no: 6, name: "old", kind: "message", T: () => define_9.MapMarkPoint },
            { no: 9, name: "op", kind: "enum", opt: true, T: () => ["com.midnights.game.MarkMapReq.Operation", MarkMapReq_Operation] }
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
                case /* optional com.midnights.game.MapMarkPoint mark */ 8:
                    message.mark = define_9.MapMarkPoint.internalBinaryRead(reader, reader.uint32(), options, message.mark);
                    break;
                case /* optional com.midnights.game.MapMarkPoint old */ 6:
                    message.old = define_9.MapMarkPoint.internalBinaryRead(reader, reader.uint32(), options, message.old);
                    break;
                case /* optional com.midnights.game.MarkMapReq.Operation op */ 9:
                    message.op = reader.int32();
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
        /* optional com.midnights.game.MapMarkPoint mark = 8; */
        if (message.mark)
            define_9.MapMarkPoint.internalBinaryWrite(message.mark, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MapMarkPoint old = 6; */
        if (message.old)
            define_9.MapMarkPoint.internalBinaryWrite(message.old, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.MarkMapReq.Operation op = 9; */
        if (message.op !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.op);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MarkMapReq
 */
exports.MarkMapReq = new MarkMapReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarkMapRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MarkMapRsp", [
            { no: 8, name: "mark_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_9.MapMarkPoint },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { markList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.MapMarkPoint mark_list */ 8:
                    message.markList.push(define_9.MapMarkPoint.internalBinaryRead(reader, reader.uint32(), options));
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.MapMarkPoint mark_list = 8; */
        for (let i = 0; i < message.markList.length; i++)
            define_9.MapMarkPoint.internalBinaryWrite(message.markList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MarkMapRsp
 */
exports.MarkMapRsp = new MarkMapRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllMarkPointNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AllMarkPointNotify", [
            { no: 7, name: "mark_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_9.MapMarkPoint }
        ]);
    }
    create(value) {
        const message = { markList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.MapMarkPoint mark_list */ 7:
                    message.markList.push(define_9.MapMarkPoint.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.MapMarkPoint mark_list = 7; */
        for (let i = 0; i < message.markList.length; i++)
            define_9.MapMarkPoint.internalBinaryWrite(message.markList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AllMarkPointNotify
 */
exports.AllMarkPointNotify = new AllMarkPointNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldDataNotify", [
            { no: 9, name: "world_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => define_8.PropValue } }
        ]);
    }
    create(value) {
        const message = { worldPropMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.PropValue> world_prop_map */ 9:
                    this.binaryReadMap9(message.worldPropMap, reader, options);
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
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = define_8.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.WorldDataNotify.world_prop_map");
            }
        }
        map[key ?? 0] = val ?? define_8.PropValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.PropValue> world_prop_map = 9; */
        for (let k of Object.keys(message.worldPropMap)) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            define_8.PropValue.internalBinaryWrite(message.worldPropMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldDataNotify
 */
exports.WorldDataNotify = new WorldDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityMoveRoomNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityMoveRoomNotify", [
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "dest_room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 dest_room_id */ 9:
                    message.destRoomId = reader.uint32();
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
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 dest_room_id = 9; */
        if (message.destRoomId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.destRoomId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityMoveRoomNotify
 */
exports.EntityMoveRoomNotify = new EntityMoveRoomNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldPlayerInfoNotify", [
            { no: 8, name: "player_widget_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => cmd_widget_1.PlayerWidgetInfo },
            { no: 14, name: "player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_16.OnlinePlayerInfo },
            { no: 11, name: "player_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playerWidgetInfoList: [], playerInfoList: [], playerUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PlayerWidgetInfo player_widget_info_list */ 8:
                    message.playerWidgetInfoList.push(cmd_widget_1.PlayerWidgetInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.OnlinePlayerInfo player_info_list */ 14:
                    message.playerInfoList.push(define_16.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 player_uid_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.playerUidList.push(reader.uint32());
                    else
                        message.playerUidList.push(reader.uint32());
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
        /* repeated com.midnights.game.PlayerWidgetInfo player_widget_info_list = 8; */
        for (let i = 0; i < message.playerWidgetInfoList.length; i++)
            cmd_widget_1.PlayerWidgetInfo.internalBinaryWrite(message.playerWidgetInfoList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.OnlinePlayerInfo player_info_list = 14; */
        for (let i = 0; i < message.playerInfoList.length; i++)
            define_16.OnlinePlayerInfo.internalBinaryWrite(message.playerInfoList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 player_uid_list = 11; */
        if (message.playerUidList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.playerUidList.length; i++)
                writer.uint32(message.playerUidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldPlayerInfoNotify
 */
exports.WorldPlayerInfoNotify = new WorldPlayerInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PostEnterSceneReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PostEnterSceneReq", [
            { no: 12, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 enter_scene_token */ 12:
                    message.enterSceneToken = reader.uint32();
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
        /* optional uint32 enter_scene_token = 12; */
        if (message.enterSceneToken !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PostEnterSceneReq
 */
exports.PostEnterSceneReq = new PostEnterSceneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PostEnterSceneRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PostEnterSceneRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "enter_scene_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 enter_scene_token */ 12:
                    message.enterSceneToken = reader.uint32();
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
        /* optional uint32 enter_scene_token = 12; */
        if (message.enterSceneToken !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PostEnterSceneRsp
 */
exports.PostEnterSceneRsp = new PostEnterSceneRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChatInfo", [
            { no: 13, name: "time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "sequence", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "to_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_read", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1946, name: "text", kind: "scalar", oneof: "content", T: 9 /*ScalarType.STRING*/ },
            { no: 914, name: "icon", kind: "scalar", oneof: "content", T: 13 /*ScalarType.UINT32*/ },
            { no: 1753, name: "system_hint", kind: "message", oneof: "content", T: () => exports.ChatInfo_SystemHint }
        ]);
    }
    create(value) {
        const message = { content: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 time */ 13:
                    message.time = reader.uint32();
                    break;
                case /* optional uint32 sequence */ 10:
                    message.sequence = reader.uint32();
                    break;
                case /* optional uint32 to_uid */ 7:
                    message.toUid = reader.uint32();
                    break;
                case /* optional uint32 uid */ 15:
                    message.uid = reader.uint32();
                    break;
                case /* optional bool is_read */ 5:
                    message.isRead = reader.bool();
                    break;
                case /* string text */ 1946:
                    message.content = {
                        oneofKind: "text",
                        text: reader.string()
                    };
                    break;
                case /* uint32 icon */ 914:
                    message.content = {
                        oneofKind: "icon",
                        icon: reader.uint32()
                    };
                    break;
                case /* com.midnights.game.ChatInfo.SystemHint system_hint */ 1753:
                    message.content = {
                        oneofKind: "systemHint",
                        systemHint: exports.ChatInfo_SystemHint.internalBinaryRead(reader, reader.uint32(), options, message.content.systemHint)
                    };
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
        /* optional uint32 time = 13; */
        if (message.time !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.time);
        /* optional uint32 sequence = 10; */
        if (message.sequence !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.sequence);
        /* optional uint32 to_uid = 7; */
        if (message.toUid !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.toUid);
        /* optional uint32 uid = 15; */
        if (message.uid !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional bool is_read = 5; */
        if (message.isRead !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isRead);
        /* string text = 1946; */
        if (message.content.oneofKind === "text")
            writer.tag(1946, runtime_2.WireType.LengthDelimited).string(message.content.text);
        /* uint32 icon = 914; */
        if (message.content.oneofKind === "icon")
            writer.tag(914, runtime_2.WireType.Varint).uint32(message.content.icon);
        /* com.midnights.game.ChatInfo.SystemHint system_hint = 1753; */
        if (message.content.oneofKind === "systemHint")
            exports.ChatInfo_SystemHint.internalBinaryWrite(message.content.systemHint, writer.tag(1753, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChatInfo
 */
exports.ChatInfo = new ChatInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatInfo_SystemHint$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChatInfo.SystemHint", [
            { no: 14, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 type */ 14:
                    message.type = reader.uint32();
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
        /* optional uint32 type = 14; */
        if (message.type !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChatInfo.SystemHint
 */
exports.ChatInfo_SystemHint = new ChatInfo_SystemHint$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerChatReq", [
            { no: 13, name: "channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "chat_info", kind: "message", T: () => exports.ChatInfo }
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
                case /* optional uint32 channel_id */ 13:
                    message.channelId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ChatInfo chat_info */ 15:
                    message.chatInfo = exports.ChatInfo.internalBinaryRead(reader, reader.uint32(), options, message.chatInfo);
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
        /* optional uint32 channel_id = 13; */
        if (message.channelId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.channelId);
        /* optional com.midnights.game.ChatInfo chat_info = 15; */
        if (message.chatInfo)
            exports.ChatInfo.internalBinaryWrite(message.chatInfo, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerChatReq
 */
exports.PlayerChatReq = new PlayerChatReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerChatRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerChatRsp", [
            { no: 15, name: "chat_forbidden_endtime", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 chat_forbidden_endtime */ 15:
                    message.chatForbiddenEndtime = reader.uint32();
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
        /* optional uint32 chat_forbidden_endtime = 15; */
        if (message.chatForbiddenEndtime !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.chatForbiddenEndtime);
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerChatRsp
 */
exports.PlayerChatRsp = new PlayerChatRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerChatNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerChatNotify", [
            { no: 3, name: "chat_info", kind: "message", T: () => exports.ChatInfo },
            { no: 6, name: "channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.ChatInfo chat_info */ 3:
                    message.chatInfo = exports.ChatInfo.internalBinaryRead(reader, reader.uint32(), options, message.chatInfo);
                    break;
                case /* optional uint32 channel_id */ 6:
                    message.channelId = reader.uint32();
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
        /* optional com.midnights.game.ChatInfo chat_info = 3; */
        if (message.chatInfo)
            exports.ChatInfo.internalBinaryWrite(message.chatInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 channel_id = 6; */
        if (message.channelId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.channelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerChatNotify
 */
exports.PlayerChatNotify = new PlayerChatNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerChatCDNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerChatCDNotify", [
            { no: 15, name: "over_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 over_time */ 15:
                    message.overTime = reader.uint32();
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
        /* optional uint32 over_time = 15; */
        if (message.overTime !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.overTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerChatCDNotify
 */
exports.PlayerChatCDNotify = new PlayerChatCDNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatHistoryNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChatHistoryNotify", [
            { no: 9, name: "chat_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ChatInfo },
            { no: 12, name: "channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { chatInfo: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ChatInfo chat_info */ 9:
                    message.chatInfo.push(exports.ChatInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 channel_id */ 12:
                    message.channelId = reader.uint32();
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
        /* repeated com.midnights.game.ChatInfo chat_info = 9; */
        for (let i = 0; i < message.chatInfo.length; i++)
            exports.ChatInfo.internalBinaryWrite(message.chatInfo[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 channel_id = 12; */
        if (message.channelId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.channelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChatHistoryNotify
 */
exports.ChatHistoryNotify = new ChatHistoryNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneDataNotify", [
            { no: 15, name: "level_config_name_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "scene_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelConfigNameList: [], sceneTagIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string level_config_name_list */ 15:
                    message.levelConfigNameList.push(reader.string());
                    break;
                case /* repeated uint32 scene_tag_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneTagIdList.push(reader.uint32());
                    else
                        message.sceneTagIdList.push(reader.uint32());
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
        /* repeated string level_config_name_list = 15; */
        for (let i = 0; i < message.levelConfigNameList.length; i++)
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.levelConfigNameList[i]);
        /* repeated uint32 scene_tag_id_list = 8; */
        if (message.sceneTagIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneTagIdList.length; i++)
                writer.uint32(message.sceneTagIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneDataNotify
 */
exports.SceneDataNotify = new SceneDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryToBeExploreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonEntryToBeExploreNotify", [
            { no: 2, name: "dungeon_entry_scene_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "dungeon_entry_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 dungeon_entry_scene_point_id */ 2:
                    message.dungeonEntryScenePointId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_entry_config_id */ 10:
                    message.dungeonEntryConfigId = reader.uint32();
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
        /* optional uint32 dungeon_entry_scene_point_id = 2; */
        if (message.dungeonEntryScenePointId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.dungeonEntryScenePointId);
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 dungeon_entry_config_id = 10; */
        if (message.dungeonEntryConfigId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.dungeonEntryConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonEntryToBeExploreNotify
 */
exports.DungeonEntryToBeExploreNotify = new DungeonEntryToBeExploreNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDungeonEntryExploreConditionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetDungeonEntryExploreConditionReq", [
            { no: 6, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "dungeon_entry_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "dungeon_entry_scene_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 6:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_entry_config_id */ 2:
                    message.dungeonEntryConfigId = reader.uint32();
                    break;
                case /* optional uint32 dungeon_entry_scene_point_id */ 4:
                    message.dungeonEntryScenePointId = reader.uint32();
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
        /* optional uint32 scene_id = 6; */
        if (message.sceneId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 dungeon_entry_config_id = 2; */
        if (message.dungeonEntryConfigId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.dungeonEntryConfigId);
        /* optional uint32 dungeon_entry_scene_point_id = 4; */
        if (message.dungeonEntryScenePointId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.dungeonEntryScenePointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetDungeonEntryExploreConditionReq
 */
exports.GetDungeonEntryExploreConditionReq = new GetDungeonEntryExploreConditionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryCond$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DungeonEntryCond", [
            { no: 7, name: "cond_reason", kind: "enum", opt: true, T: () => ["com.midnights.game.DungeonEntryBlockReason", DungeonEntryBlockReason] },
            { no: 8, name: "param1", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.DungeonEntryBlockReason cond_reason */ 7:
                    message.condReason = reader.int32();
                    break;
                case /* optional uint32 param1 */ 8:
                    message.param1 = reader.uint32();
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
        /* optional com.midnights.game.DungeonEntryBlockReason cond_reason = 7; */
        if (message.condReason !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.condReason);
        /* optional uint32 param1 = 8; */
        if (message.param1 !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.param1);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DungeonEntryCond
 */
exports.DungeonEntryCond = new DungeonEntryCond$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDungeonEntryExploreConditionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetDungeonEntryExploreConditionRsp", [
            { no: 5, name: "dungeon_entry_cond", kind: "message", T: () => exports.DungeonEntryCond },
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
                case /* optional com.midnights.game.DungeonEntryCond dungeon_entry_cond */ 5:
                    message.dungeonEntryCond = exports.DungeonEntryCond.internalBinaryRead(reader, reader.uint32(), options, message.dungeonEntryCond);
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
        /* optional com.midnights.game.DungeonEntryCond dungeon_entry_cond = 5; */
        if (message.dungeonEntryCond)
            exports.DungeonEntryCond.internalBinaryWrite(message.dungeonEntryCond, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GetDungeonEntryExploreConditionRsp
 */
exports.GetDungeonEntryExploreConditionRsp = new GetDungeonEntryExploreConditionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnfreezeGroupLimitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnfreezeGroupLimitNotify", [
            { no: 9, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 point_id */ 9:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
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
        /* optional uint32 point_id = 9; */
        if (message.pointId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.pointId);
        /* optional uint32 scene_id = 11; */
        if (message.sceneId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnfreezeGroupLimitNotify
 */
exports.UnfreezeGroupLimitNotify = new UnfreezeGroupLimitNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetEntityClientDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetEntityClientDataNotify", [
            { no: 14, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "entity_client_data", kind: "message", T: () => define_7.EntityClientData }
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
                case /* optional uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.EntityClientData entity_client_data */ 9:
                    message.entityClientData = define_7.EntityClientData.internalBinaryRead(reader, reader.uint32(), options, message.entityClientData);
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
        /* optional uint32 entity_id = 14; */
        if (message.entityId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.EntityClientData entity_client_data = 9; */
        if (message.entityClientData)
            define_7.EntityClientData.internalBinaryWrite(message.entityClientData, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetEntityClientDataNotify
 */
exports.SetEntityClientDataNotify = new SetEntityClientDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroupSuiteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GroupSuiteNotify", [
            { no: 3, name: "group_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { groupMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> group_map */ 3:
                    this.binaryReadMap3(message.groupMap, reader, options);
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
    binaryReadMap3(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GroupSuiteNotify.group_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> group_map = 3; */
        for (let k of Object.keys(message.groupMap))
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.groupMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GroupSuiteNotify
 */
exports.GroupSuiteNotify = new GroupSuiteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroupUnloadNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GroupUnloadNotify", [
            { no: 10, name: "group_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { groupList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 group_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.groupList.push(reader.uint32());
                    else
                        message.groupList.push(reader.uint32());
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
        /* repeated uint32 group_list = 10; */
        if (message.groupList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.groupList.length; i++)
                writer.uint32(message.groupList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GroupUnloadNotify
 */
exports.GroupUnloadNotify = new GroupUnloadNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MonsterAIConfigHashNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MonsterAIConfigHashNotify", [
            { no: 10, name: "job_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "hash_value", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 job_id */ 10:
                    message.jobId = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional int32 hash_value */ 11:
                    message.hashValue = reader.int32();
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
        /* optional uint32 job_id = 10; */
        if (message.jobId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.jobId);
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional int32 hash_value = 11; */
        if (message.hashValue !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.hashValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MonsterAIConfigHashNotify
 */
exports.MonsterAIConfigHashNotify = new MonsterAIConfigHashNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowTemplateReminderNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowTemplateReminderNotify", [
            { no: 1, name: "is_revoke", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "template_reminder_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "is_need_cache", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { paramUidList: [], paramList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_revoke */ 1:
                    message.isRevoke = reader.bool();
                    break;
                case /* optional uint32 template_reminder_id */ 14:
                    message.templateReminderId = reader.uint32();
                    break;
                case /* repeated uint32 param_uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramUidList.push(reader.uint32());
                    else
                        message.paramUidList.push(reader.uint32());
                    break;
                case /* repeated int32 param_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.int32());
                    else
                        message.paramList.push(reader.int32());
                    break;
                case /* optional bool is_need_cache */ 15:
                    message.isNeedCache = reader.bool();
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
        /* optional bool is_revoke = 1; */
        if (message.isRevoke !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isRevoke);
        /* optional uint32 template_reminder_id = 14; */
        if (message.templateReminderId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.templateReminderId);
        /* repeated uint32 param_uid_list = 3; */
        if (message.paramUidList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramUidList.length; i++)
                writer.uint32(message.paramUidList[i]);
            writer.join();
        }
        /* repeated int32 param_list = 10; */
        if (message.paramList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.int32(message.paramList[i]);
            writer.join();
        }
        /* optional bool is_need_cache = 15; */
        if (message.isNeedCache !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isNeedCache);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowTemplateReminderNotify
 */
exports.ShowTemplateReminderNotify = new ShowTemplateReminderNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowCommonTipsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowCommonTipsNotify", [
            { no: 8, name: "content", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "title", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "close_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional string content */ 8:
                    message.content = reader.string();
                    break;
                case /* optional string title */ 13:
                    message.title = reader.string();
                    break;
                case /* optional uint32 close_time */ 4:
                    message.closeTime = reader.uint32();
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
        /* optional string content = 8; */
        if (message.content !== undefined)
            writer.tag(8, runtime_2.WireType.LengthDelimited).string(message.content);
        /* optional string title = 13; */
        if (message.title !== undefined)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.title);
        /* optional uint32 close_time = 4; */
        if (message.closeTime !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.closeTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowCommonTipsNotify
 */
exports.ShowCommonTipsNotify = new ShowCommonTipsNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CloseCommonTipsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CloseCommonTipsNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.CloseCommonTipsNotify
 */
exports.CloseCommonTipsNotify = new CloseCommonTipsNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeWorldToSingleModeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeWorldToSingleModeNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ChangeWorldToSingleModeNotify
 */
exports.ChangeWorldToSingleModeNotify = new ChangeWorldToSingleModeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SyncScenePlayTeamEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SyncScenePlayTeamEntityNotify", [
            { no: 2, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "entity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_6.PlayTeamEntityInfo }
        ]);
    }
    create(value) {
        const message = { entityInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 2:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.PlayTeamEntityInfo entity_info_list */ 3:
                    message.entityInfoList.push(define_6.PlayTeamEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 scene_id = 2; */
        if (message.sceneId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated com.midnights.game.PlayTeamEntityInfo entity_info_list = 3; */
        for (let i = 0; i < message.entityInfoList.length; i++)
            define_6.PlayTeamEntityInfo.internalBinaryWrite(message.entityInfoList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SyncScenePlayTeamEntityNotify
 */
exports.SyncScenePlayTeamEntityNotify = new SyncScenePlayTeamEntityNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DelScenePlayTeamEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DelScenePlayTeamEntityNotify", [
            { no: 2, name: "del_entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { delEntityIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 del_entity_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.delEntityIdList.push(reader.uint32());
                    else
                        message.delEntityIdList.push(reader.uint32());
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
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
        /* repeated uint32 del_entity_id_list = 2; */
        if (message.delEntityIdList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.delEntityIdList.length; i++)
                writer.uint32(message.delEntityIdList[i]);
            writer.join();
        }
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DelScenePlayTeamEntityNotify
 */
exports.DelScenePlayTeamEntityNotify = new DelScenePlayTeamEntityNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CylinderRegionSize$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CylinderRegionSize", [
            { no: 8, name: "radius", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "height", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
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
                case /* optional float radius */ 8:
                    message.radius = reader.float();
                    break;
                case /* optional float height */ 7:
                    message.height = reader.float();
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
        /* optional float radius = 8; */
        if (message.radius !== undefined)
            writer.tag(8, runtime_2.WireType.Bit32).float(message.radius);
        /* optional float height = 7; */
        if (message.height !== undefined)
            writer.tag(7, runtime_2.WireType.Bit32).float(message.height);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CylinderRegionSize
 */
exports.CylinderRegionSize = new CylinderRegionSize$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PolygonRegionSize$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PolygonRegionSize", [
            { no: 5, name: "point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_5.VectorPlane },
            { no: 9, name: "height", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { pointList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.VectorPlane point_list */ 5:
                    message.pointList.push(define_5.VectorPlane.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional float height */ 9:
                    message.height = reader.float();
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
        /* repeated com.midnights.game.VectorPlane point_list = 5; */
        for (let i = 0; i < message.pointList.length; i++)
            define_5.VectorPlane.internalBinaryWrite(message.pointList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional float height = 9; */
        if (message.height !== undefined)
            writer.tag(9, runtime_2.WireType.Bit32).float(message.height);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PolygonRegionSize
 */
exports.PolygonRegionSize = new PolygonRegionSize$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEyePointStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerEyePointStateNotify", [
            { no: 15, name: "region_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "eye_point_pos", kind: "message", T: () => define_20.Vector },
            { no: 3, name: "is_use_eye_point", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "region_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "region_shape", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_filter_stream_pos", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "fix_lod_level", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "region_group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 255, name: "sphere_radius", kind: "scalar", oneof: "regionSize", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1823, name: "cubic_size", kind: "message", oneof: "regionSize", T: () => define_20.Vector },
            { no: 1862, name: "cylinder_size", kind: "message", oneof: "regionSize", T: () => exports.CylinderRegionSize },
            { no: 877, name: "polygon_size", kind: "message", oneof: "regionSize", T: () => exports.PolygonRegionSize }
        ]);
    }
    create(value) {
        const message = { regionSize: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 region_entity_id */ 15:
                    message.regionEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector eye_point_pos */ 1:
                    message.eyePointPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.eyePointPos);
                    break;
                case /* optional bool is_use_eye_point */ 3:
                    message.isUseEyePoint = reader.bool();
                    break;
                case /* optional uint32 region_config_id */ 7:
                    message.regionConfigId = reader.uint32();
                    break;
                case /* optional uint32 region_shape */ 12:
                    message.regionShape = reader.uint32();
                    break;
                case /* optional bool is_filter_stream_pos */ 2:
                    message.isFilterStreamPos = reader.bool();
                    break;
                case /* optional int32 fix_lod_level */ 5:
                    message.fixLodLevel = reader.int32();
                    break;
                case /* optional uint32 region_group_id */ 4:
                    message.regionGroupId = reader.uint32();
                    break;
                case /* float sphere_radius */ 255:
                    message.regionSize = {
                        oneofKind: "sphereRadius",
                        sphereRadius: reader.float()
                    };
                    break;
                case /* com.midnights.game.Vector cubic_size */ 1823:
                    message.regionSize = {
                        oneofKind: "cubicSize",
                        cubicSize: define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.regionSize.cubicSize)
                    };
                    break;
                case /* com.midnights.game.CylinderRegionSize cylinder_size */ 1862:
                    message.regionSize = {
                        oneofKind: "cylinderSize",
                        cylinderSize: exports.CylinderRegionSize.internalBinaryRead(reader, reader.uint32(), options, message.regionSize.cylinderSize)
                    };
                    break;
                case /* com.midnights.game.PolygonRegionSize polygon_size */ 877:
                    message.regionSize = {
                        oneofKind: "polygonSize",
                        polygonSize: exports.PolygonRegionSize.internalBinaryRead(reader, reader.uint32(), options, message.regionSize.polygonSize)
                    };
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
        /* optional uint32 region_entity_id = 15; */
        if (message.regionEntityId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.regionEntityId);
        /* optional com.midnights.game.Vector eye_point_pos = 1; */
        if (message.eyePointPos)
            define_20.Vector.internalBinaryWrite(message.eyePointPos, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_use_eye_point = 3; */
        if (message.isUseEyePoint !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isUseEyePoint);
        /* optional uint32 region_config_id = 7; */
        if (message.regionConfigId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.regionConfigId);
        /* optional uint32 region_shape = 12; */
        if (message.regionShape !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.regionShape);
        /* optional bool is_filter_stream_pos = 2; */
        if (message.isFilterStreamPos !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isFilterStreamPos);
        /* optional int32 fix_lod_level = 5; */
        if (message.fixLodLevel !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.fixLodLevel);
        /* optional uint32 region_group_id = 4; */
        if (message.regionGroupId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.regionGroupId);
        /* float sphere_radius = 255; */
        if (message.regionSize.oneofKind === "sphereRadius")
            writer.tag(255, runtime_2.WireType.Bit32).float(message.regionSize.sphereRadius);
        /* com.midnights.game.Vector cubic_size = 1823; */
        if (message.regionSize.oneofKind === "cubicSize")
            define_20.Vector.internalBinaryWrite(message.regionSize.cubicSize, writer.tag(1823, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.CylinderRegionSize cylinder_size = 1862; */
        if (message.regionSize.oneofKind === "cylinderSize")
            exports.CylinderRegionSize.internalBinaryWrite(message.regionSize.cylinderSize, writer.tag(1862, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.PolygonRegionSize polygon_size = 877; */
        if (message.regionSize.oneofKind === "polygonSize")
            exports.PolygonRegionSize.internalBinaryWrite(message.regionSize.polygonSize, writer.tag(877, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerEyePointStateNotify
 */
exports.PlayerEyePointStateNotify = new PlayerEyePointStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMapMarkTipsReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMapMarkTipsReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetMapMarkTipsReq
 */
exports.GetMapMarkTipsReq = new GetMapMarkTipsReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMapMarkTipsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMapMarkTipsRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "mark_tips_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_4.MapMarkTipsInfo }
        ]);
    }
    create(value) {
        const message = { markTipsList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.MapMarkTipsInfo mark_tips_list */ 11:
                    message.markTipsList.push(define_4.MapMarkTipsInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.MapMarkTipsInfo mark_tips_list = 11; */
        for (let i = 0; i < message.markTipsList.length; i++)
            define_4.MapMarkTipsInfo.internalBinaryWrite(message.markTipsList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetMapMarkTipsRsp
 */
exports.GetMapMarkTipsRsp = new GetMapMarkTipsRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeWorldToSingleModeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeWorldToSingleModeReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ChangeWorldToSingleModeReq
 */
exports.ChangeWorldToSingleModeReq = new ChangeWorldToSingleModeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeWorldToSingleModeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeWorldToSingleModeRsp", [
            { no: 15, name: "quit_mp_valid_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 quit_mp_valid_time */ 15:
                    message.quitMpValidTime = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quit_mp_valid_time = 15; */
        if (message.quitMpValidTime !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.quitMpValidTime);
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeWorldToSingleModeRsp
 */
exports.ChangeWorldToSingleModeRsp = new ChangeWorldToSingleModeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetWorldMpInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetWorldMpInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetWorldMpInfoReq
 */
exports.GetWorldMpInfoReq = new GetWorldMpInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetWorldMpInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetWorldMpInfoRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "is_in_mp_mode", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "quit_mp_valid_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_in_mp_mode */ 1:
                    message.isInMpMode = reader.bool();
                    break;
                case /* optional uint32 quit_mp_valid_time */ 9:
                    message.quitMpValidTime = reader.uint32();
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
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional bool is_in_mp_mode = 1; */
        if (message.isInMpMode !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isInMpMode);
        /* optional uint32 quit_mp_valid_time = 9; */
        if (message.quitMpValidTime !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.quitMpValidTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetWorldMpInfoRsp
 */
exports.GetWorldMpInfoRsp = new GetWorldMpInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityConfigHashEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityConfigHashEntry", [
            { no: 13, name: "job_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "hash_value", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 job_id */ 13:
                    message.jobId = reader.uint32();
                    break;
                case /* optional int32 hash_value */ 6:
                    message.hashValue = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
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
        /* optional uint32 job_id = 13; */
        if (message.jobId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.jobId);
        /* optional int32 hash_value = 6; */
        if (message.hashValue !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.hashValue);
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityConfigHashEntry
 */
exports.EntityConfigHashEntry = new EntityConfigHashEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityConfigHashNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityConfigHashNotify", [
            { no: 3, name: "ability_entry_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.EntityConfigHashEntry },
            { no: 15, name: "avatar_entry_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.EntityConfigHashEntry },
            { no: 8, name: "combat_entry_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.EntityConfigHashEntry }
        ]);
    }
    create(value) {
        const message = { abilityEntryList: [], avatarEntryList: [], combatEntryList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.EntityConfigHashEntry ability_entry_list */ 3:
                    message.abilityEntryList.push(exports.EntityConfigHashEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.EntityConfigHashEntry avatar_entry_list */ 15:
                    message.avatarEntryList.push(exports.EntityConfigHashEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.EntityConfigHashEntry combat_entry_list */ 8:
                    message.combatEntryList.push(exports.EntityConfigHashEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.EntityConfigHashEntry ability_entry_list = 3; */
        for (let i = 0; i < message.abilityEntryList.length; i++)
            exports.EntityConfigHashEntry.internalBinaryWrite(message.abilityEntryList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.EntityConfigHashEntry avatar_entry_list = 15; */
        for (let i = 0; i < message.avatarEntryList.length; i++)
            exports.EntityConfigHashEntry.internalBinaryWrite(message.avatarEntryList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.EntityConfigHashEntry combat_entry_list = 8; */
        for (let i = 0; i < message.combatEntryList.length; i++)
            exports.EntityConfigHashEntry.internalBinaryWrite(message.combatEntryList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityConfigHashNotify
 */
exports.EntityConfigHashNotify = new EntityConfigHashNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForceDragAvatarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForceDragAvatarNotify", [
            { no: 3, name: "scene_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "delta_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "motion_info", kind: "message", T: () => define_18.MotionInfo },
            { no: 8, name: "is_first_valid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "last_move_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
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
                case /* optional uint32 scene_time */ 3:
                    message.sceneTime = reader.uint32();
                    break;
                case /* optional uint64 delta_time_ms */ 1:
                    message.deltaTimeMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MotionInfo motion_info */ 10:
                    message.motionInfo = define_18.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* optional bool is_first_valid */ 8:
                    message.isFirstValid = reader.bool();
                    break;
                case /* optional uint64 last_move_time_ms */ 12:
                    message.lastMoveTimeMs = reader.uint64().toBigInt();
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
        /* optional uint32 scene_time = 3; */
        if (message.sceneTime !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.sceneTime);
        /* optional uint64 delta_time_ms = 1; */
        if (message.deltaTimeMs !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint64(message.deltaTimeMs);
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.MotionInfo motion_info = 10; */
        if (message.motionInfo)
            define_18.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_first_valid = 8; */
        if (message.isFirstValid !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isFirstValid);
        /* optional uint64 last_move_time_ms = 12; */
        if (message.lastMoveTimeMs !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint64(message.lastMoveTimeMs);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForceDragAvatarNotify
 */
exports.ForceDragAvatarNotify = new ForceDragAvatarNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MonsterPointArrayRouteUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MonsterPointArrayRouteUpdateNotify", [
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "monster_route", kind: "message", T: () => define_3.MonsterRoute }
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
                case /* optional uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MonsterRoute monster_route */ 5:
                    message.monsterRoute = define_3.MonsterRoute.internalBinaryRead(reader, reader.uint32(), options, message.monsterRoute);
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
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.MonsterRoute monster_route = 5; */
        if (message.monsterRoute)
            define_3.MonsterRoute.internalBinaryWrite(message.monsterRoute, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MonsterPointArrayRouteUpdateNotify
 */
exports.MonsterPointArrayRouteUpdateNotify = new MonsterPointArrayRouteUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForceDragBackTransferNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForceDragBackTransferNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ForceDragBackTransferNotify
 */
exports.ForceDragBackTransferNotify = new ForceDragBackTransferNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetScenePerformanceReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetScenePerformanceReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetScenePerformanceReq
 */
exports.GetScenePerformanceReq = new GetScenePerformanceReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetScenePerformanceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetScenePerformanceRsp", [
            { no: 9, name: "monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "gather_num_insight", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "gadget_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "dynamic_group_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "pos", kind: "message", T: () => define_20.Vector },
            { no: 8, name: "entity_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gather_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 monster_num */ 9:
                    message.monsterNum = reader.uint32();
                    break;
                case /* optional uint32 gather_num_insight */ 1:
                    message.gatherNumInsight = reader.uint32();
                    break;
                case /* optional uint32 gadget_num */ 6:
                    message.gadgetNum = reader.uint32();
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 dynamic_group_num */ 12:
                    message.dynamicGroupNum = reader.uint32();
                    break;
                case /* optional uint32 group_num */ 2:
                    message.groupNum = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 4:
                    message.pos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 entity_num */ 8:
                    message.entityNum = reader.uint32();
                    break;
                case /* optional uint32 gather_num */ 13:
                    message.gatherNum = reader.uint32();
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
        /* optional uint32 monster_num = 9; */
        if (message.monsterNum !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.monsterNum);
        /* optional uint32 gather_num_insight = 1; */
        if (message.gatherNumInsight !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.gatherNumInsight);
        /* optional uint32 gadget_num = 6; */
        if (message.gadgetNum !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.gadgetNum);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 dynamic_group_num = 12; */
        if (message.dynamicGroupNum !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.dynamicGroupNum);
        /* optional uint32 group_num = 2; */
        if (message.groupNum !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.groupNum);
        /* optional com.midnights.game.Vector pos = 4; */
        if (message.pos)
            define_20.Vector.internalBinaryWrite(message.pos, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_num = 8; */
        if (message.entityNum !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityNum);
        /* optional uint32 gather_num = 13; */
        if (message.gatherNum !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.gatherNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetScenePerformanceRsp
 */
exports.GetScenePerformanceRsp = new GetScenePerformanceRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneAudioNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneAudioNotify", [
            { no: 14, name: "param2", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "param3", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "source_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "param1", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { param2: [], param3: [], param1: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated float param2 */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.param2.push(reader.float());
                    else
                        message.param2.push(reader.float());
                    break;
                case /* optional int32 type */ 3:
                    message.type = reader.int32();
                    break;
                case /* repeated string param3 */ 11:
                    message.param3.push(reader.string());
                    break;
                case /* optional uint32 source_uid */ 6:
                    message.sourceUid = reader.uint32();
                    break;
                case /* repeated uint32 param1 */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.param1.push(reader.uint32());
                    else
                        message.param1.push(reader.uint32());
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
        /* repeated float param2 = 14; */
        if (message.param2.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.param2.length; i++)
                writer.float(message.param2[i]);
            writer.join();
        }
        /* optional int32 type = 3; */
        if (message.type !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.type);
        /* repeated string param3 = 11; */
        for (let i = 0; i < message.param3.length; i++)
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.param3[i]);
        /* optional uint32 source_uid = 6; */
        if (message.sourceUid !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.sourceUid);
        /* repeated uint32 param1 = 4; */
        if (message.param1.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.param1.length; i++)
                writer.uint32(message.param1[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneAudioNotify
 */
exports.SceneAudioNotify = new SceneAudioNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HitTreeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HitTreeNotify", [
            { no: 11, name: "tree_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "tree_pos", kind: "message", T: () => define_20.Vector },
            { no: 8, name: "drop_pos", kind: "message", T: () => define_20.Vector }
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
                case /* optional uint32 tree_type */ 11:
                    message.treeType = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector tree_pos */ 2:
                    message.treePos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.treePos);
                    break;
                case /* optional com.midnights.game.Vector drop_pos */ 8:
                    message.dropPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.dropPos);
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
        /* optional uint32 tree_type = 11; */
        if (message.treeType !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.treeType);
        /* optional com.midnights.game.Vector tree_pos = 2; */
        if (message.treePos)
            define_20.Vector.internalBinaryWrite(message.treePos, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector drop_pos = 8; */
        if (message.dropPos)
            define_20.Vector.internalBinaryWrite(message.dropPos, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HitTreeNotify
 */
exports.HitTreeNotify = new HitTreeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityTagChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityTagChangeNotify", [
            { no: 2, name: "tag", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_add", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional string tag */ 2:
                    message.tag = reader.string();
                    break;
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* optional bool is_add */ 10:
                    message.isAdd = reader.bool();
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
        /* optional string tag = 2; */
        if (message.tag !== undefined)
            writer.tag(2, runtime_2.WireType.LengthDelimited).string(message.tag);
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional bool is_add = 10; */
        if (message.isAdd !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isAdd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityTagChangeNotify
 */
exports.EntityTagChangeNotify = new EntityTagChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFollowRouteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFollowRouteNotify", [
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "template_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "start_scene_time_ms", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "route", kind: "message", T: () => define_2.Route },
            { no: 13, name: "client_params", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 template_id */ 6:
                    message.templateId = reader.uint32();
                    break;
                case /* optional uint32 start_scene_time_ms */ 8:
                    message.startSceneTimeMs = reader.uint32();
                    break;
                case /* optional com.midnights.game.Route route */ 2:
                    message.route = define_2.Route.internalBinaryRead(reader, reader.uint32(), options, message.route);
                    break;
                case /* optional string client_params */ 13:
                    message.clientParams = reader.string();
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
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional uint32 template_id = 6; */
        if (message.templateId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.templateId);
        /* optional uint32 start_scene_time_ms = 8; */
        if (message.startSceneTimeMs !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.startSceneTimeMs);
        /* optional com.midnights.game.Route route = 2; */
        if (message.route)
            define_2.Route.internalBinaryWrite(message.route, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional string client_params = 13; */
        if (message.clientParams !== undefined)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.clientParams);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFollowRouteNotify
 */
exports.AvatarFollowRouteNotify = new AvatarFollowRouteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneEntityUpdateNotify", [
            { no: 10, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "appear_type", kind: "enum", opt: true, T: () => ["com.midnights.game.VisionType", VisionType] },
            { no: 5, name: "entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_19.SceneEntityInfo }
        ]);
    }
    create(value) {
        const message = { entityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 param */ 10:
                    message.param = reader.uint32();
                    break;
                case /* optional com.midnights.game.VisionType appear_type */ 13:
                    message.appearType = reader.int32();
                    break;
                case /* repeated com.midnights.game.SceneEntityInfo entity_list */ 5:
                    message.entityList.push(define_19.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 param = 10; */
        if (message.param !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.param);
        /* optional com.midnights.game.VisionType appear_type = 13; */
        if (message.appearType !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.appearType);
        /* repeated com.midnights.game.SceneEntityInfo entity_list = 5; */
        for (let i = 0; i < message.entityList.length; i++)
            define_19.SceneEntityInfo.internalBinaryWrite(message.entityList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneEntityUpdateNotify
 */
exports.SceneEntityUpdateNotify = new SceneEntityUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientHashDebugNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientHashDebugNotify", [
            { no: 12, name: "job_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 job_id */ 12:
                    message.jobId = reader.uint32();
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
        /* optional uint32 job_id = 12; */
        if (message.jobId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.jobId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientHashDebugNotify
 */
exports.ClientHashDebugNotify = new ClientHashDebugNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWorldSceneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerWorldSceneInfo", [
            { no: 11, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { sceneTagIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated uint32 scene_tag_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneTagIdList.push(reader.uint32());
                    else
                        message.sceneTagIdList.push(reader.uint32());
                    break;
                case /* optional bool is_locked */ 12:
                    message.isLocked = reader.bool();
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
        /* optional uint32 scene_id = 11; */
        if (message.sceneId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* repeated uint32 scene_tag_id_list = 8; */
        if (message.sceneTagIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneTagIdList.length; i++)
                writer.uint32(message.sceneTagIdList[i]);
            writer.join();
        }
        /* optional bool is_locked = 12; */
        if (message.isLocked !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isLocked);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerWorldSceneInfo
 */
exports.PlayerWorldSceneInfo = new PlayerWorldSceneInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWorldSceneInfoListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerWorldSceneInfoListNotify", [
            { no: 5, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PlayerWorldSceneInfo }
        ]);
    }
    create(value) {
        const message = { infoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PlayerWorldSceneInfo info_list */ 5:
                    message.infoList.push(exports.PlayerWorldSceneInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.PlayerWorldSceneInfo info_list = 5; */
        for (let i = 0; i < message.infoList.length; i++)
            exports.PlayerWorldSceneInfo.internalBinaryWrite(message.infoList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerWorldSceneInfoListNotify
 */
exports.PlayerWorldSceneInfoListNotify = new PlayerWorldSceneInfoListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LuaEnvironmentEffectNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LuaEnvironmentEffectNotify", [
            { no: 1, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "int_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "effect_alias", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "float_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { intParamList: [], floatParamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 type */ 1:
                    message.type = reader.uint32();
                    break;
                case /* repeated int32 int_param_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.intParamList.push(reader.int32());
                    else
                        message.intParamList.push(reader.int32());
                    break;
                case /* optional string effect_alias */ 3:
                    message.effectAlias = reader.string();
                    break;
                case /* repeated float float_param_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.floatParamList.push(reader.float());
                    else
                        message.floatParamList.push(reader.float());
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
        /* optional uint32 type = 1; */
        if (message.type !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.type);
        /* repeated int32 int_param_list = 12; */
        if (message.intParamList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.intParamList.length; i++)
                writer.int32(message.intParamList[i]);
            writer.join();
        }
        /* optional string effect_alias = 3; */
        if (message.effectAlias !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.effectAlias);
        /* repeated float float_param_list = 14; */
        if (message.floatParamList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.floatParamList.length; i++)
                writer.float(message.floatParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LuaEnvironmentEffectNotify
 */
exports.LuaEnvironmentEffectNotify = new LuaEnvironmentEffectNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientLoadingCostumeVerificationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientLoadingCostumeVerificationNotify", [
            { no: 9, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prefab_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
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
                case /* optional uint32 costume_id */ 9:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional uint64 prefab_hash */ 2:
                    message.prefabHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 guid */ 14:
                    message.guid = reader.uint64().toBigInt();
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
        /* optional uint32 costume_id = 9; */
        if (message.costumeId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* optional uint64 prefab_hash = 2; */
        if (message.prefabHash !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.prefabHash);
        /* optional uint64 guid = 14; */
        if (message.guid !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientLoadingCostumeVerificationNotify
 */
exports.ClientLoadingCostumeVerificationNotify = new ClientLoadingCostumeVerificationNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowClientGuideNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowClientGuideNotify", [
            { no: 7, name: "guide_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional string guide_name */ 7:
                    message.guideName = reader.string();
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
        /* optional string guide_name = 7; */
        if (message.guideName !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.guideName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowClientGuideNotify
 */
exports.ShowClientGuideNotify = new ShowClientGuideNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ShowClientTutorialNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowClientTutorialNotify", [
            { no: 2, name: "tutorial_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 tutorial_id */ 2:
                    message.tutorialId = reader.uint32();
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
        /* optional uint32 tutorial_id = 2; */
        if (message.tutorialId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.tutorialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowClientTutorialNotify
 */
exports.ShowClientTutorialNotify = new ShowClientTutorialNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMapAreaReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMapAreaReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetMapAreaReq
 */
exports.GetMapAreaReq = new GetMapAreaReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMapAreaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMapAreaRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "map_area_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.MapAreaInfo }
        ]);
    }
    create(value) {
        const message = { mapAreaInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.MapAreaInfo map_area_info_list */ 9:
                    message.mapAreaInfoList.push(define_1.MapAreaInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.MapAreaInfo map_area_info_list = 9; */
        for (let i = 0; i < message.mapAreaInfoList.length; i++)
            define_1.MapAreaInfo.internalBinaryWrite(message.mapAreaInfoList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetMapAreaRsp
 */
exports.GetMapAreaRsp = new GetMapAreaRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MapAreaChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MapAreaChangeNotify", [
            { no: 3, name: "map_area_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.MapAreaInfo }
        ]);
    }
    create(value) {
        const message = { mapAreaInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.MapAreaInfo map_area_info_list */ 3:
                    message.mapAreaInfoList.push(define_1.MapAreaInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.MapAreaInfo map_area_info_list = 3; */
        for (let i = 0; i < message.mapAreaInfoList.length; i++)
            define_1.MapAreaInfo.internalBinaryWrite(message.mapAreaInfoList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MapAreaChangeNotify
 */
exports.MapAreaChangeNotify = new MapAreaChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LeaveWorldNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LeaveWorldNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.LeaveWorldNotify
 */
exports.LeaveWorldNotify = new LeaveWorldNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GuestBeginEnterSceneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GuestBeginEnterSceneNotify", [
            { no: 8, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 15:
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
        /* optional uint32 scene_id = 8; */
        if (message.sceneId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 uid = 15; */
        if (message.uid !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GuestBeginEnterSceneNotify
 */
exports.GuestBeginEnterSceneNotify = new GuestBeginEnterSceneNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GuestPostEnterSceneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GuestPostEnterSceneNotify", [
            { no: 5, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 5:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 4:
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
        /* optional uint32 scene_id = 5; */
        if (message.sceneId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 uid = 4; */
        if (message.uid !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GuestPostEnterSceneNotify
 */
exports.GuestPostEnterSceneNotify = new GuestPostEnterSceneNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LevelTagDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LevelTagDataNotify", [
            { no: 9, name: "level_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelTagIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 level_tag_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.levelTagIdList.push(reader.uint32());
                    else
                        message.levelTagIdList.push(reader.uint32());
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
        /* repeated uint32 level_tag_id_list = 9; */
        if (message.levelTagIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.levelTagIdList.length; i++)
                writer.uint32(message.levelTagIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LevelTagDataNotify
 */
exports.LevelTagDataNotify = new LevelTagDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StopReminderNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StopReminderNotify", [
            { no: 15, name: "reminder_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 reminder_id */ 15:
                    message.reminderId = reader.uint32();
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
        /* optional uint32 reminder_id = 15; */
        if (message.reminderId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.reminderId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StopReminderNotify
 */
exports.StopReminderNotify = new StopReminderNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AreaPlayInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AreaPlayInfoNotify", [
            { no: 14, name: "detail_play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "area_play_type", kind: "enum", opt: true, T: () => ["com.midnights.game.AreaPlayType", AreaPlayType] }
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
                case /* optional uint32 detail_play_type */ 14:
                    message.detailPlayType = reader.uint32();
                    break;
                case /* optional com.midnights.game.AreaPlayType area_play_type */ 11:
                    message.areaPlayType = reader.int32();
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
        /* optional uint32 detail_play_type = 14; */
        if (message.detailPlayType !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.detailPlayType);
        /* optional com.midnights.game.AreaPlayType area_play_type = 11; */
        if (message.areaPlayType !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.areaPlayType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AreaPlayInfoNotify
 */
exports.AreaPlayInfoNotify = new AreaPlayInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckGroupReplacedReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CheckGroupReplacedReq", [
            { no: 7, name: "group_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { groupIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 group_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.groupIdList.push(reader.uint32());
                    else
                        message.groupIdList.push(reader.uint32());
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
        /* repeated uint32 group_id_list = 7; */
        if (message.groupIdList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.groupIdList.length; i++)
                writer.uint32(message.groupIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CheckGroupReplacedReq
 */
exports.CheckGroupReplacedReq = new CheckGroupReplacedReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckGroupReplacedRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CheckGroupReplacedRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "replaced_group_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { replacedGroupIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 replaced_group_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.replacedGroupIdList.push(reader.uint32());
                    else
                        message.replacedGroupIdList.push(reader.uint32());
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
        /* repeated uint32 replaced_group_id_list = 6; */
        if (message.replacedGroupIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.replacedGroupIdList.length; i++)
                writer.uint32(message.replacedGroupIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CheckGroupReplacedRsp
 */
exports.CheckGroupReplacedRsp = new CheckGroupReplacedRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeathZoneObserveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeathZoneObserveNotify", [
            { no: 14, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "source_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_entity_id */ 14:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* optional uint32 source_entity_id */ 12:
                    message.sourceEntityId = reader.uint32();
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
        /* optional uint32 target_entity_id = 14; */
        if (message.targetEntityId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        /* optional uint32 source_entity_id = 12; */
        if (message.sourceEntityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.sourceEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeathZoneObserveNotify
 */
exports.DeathZoneObserveNotify = new DeathZoneObserveNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HitTreeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HitTreeInfo", [
            { no: 12, name: "tree_pos", kind: "message", T: () => define_20.Vector },
            { no: 8, name: "tree_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.Vector tree_pos */ 12:
                    message.treePos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.treePos);
                    break;
                case /* optional uint32 tree_type */ 8:
                    message.treeType = reader.uint32();
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
        /* optional com.midnights.game.Vector tree_pos = 12; */
        if (message.treePos)
            define_20.Vector.internalBinaryWrite(message.treePos, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 tree_type = 8; */
        if (message.treeType !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.treeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HitTreeInfo
 */
exports.HitTreeInfo = new HitTreeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldChestOpenNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldChestOpenNotify", [
            { no: 6, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 group_id */ 6:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 12:
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
        /* optional uint32 group_id = 6; */
        if (message.groupId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.groupId);
        /* optional uint32 scene_id = 9; */
        if (message.sceneId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 config_id = 12; */
        if (message.configId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldChestOpenNotify
 */
exports.WorldChestOpenNotify = new WorldChestOpenNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetQuickHitTreeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetQuickHitTreeReq", [
            { no: 5, name: "hit_tree_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HitTreeInfo }
        ]);
    }
    create(value) {
        const message = { hitTreeInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.HitTreeInfo hit_tree_info_list */ 5:
                    message.hitTreeInfoList.push(exports.HitTreeInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.HitTreeInfo hit_tree_info_list = 5; */
        for (let i = 0; i < message.hitTreeInfoList.length; i++)
            exports.HitTreeInfo.internalBinaryWrite(message.hitTreeInfoList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WidgetQuickHitTreeReq
 */
exports.WidgetQuickHitTreeReq = new WidgetQuickHitTreeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WidgetQuickHitTreeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WidgetQuickHitTreeRsp", [
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.WidgetQuickHitTreeRsp
 */
exports.WidgetQuickHitTreeRsp = new WidgetQuickHitTreeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BeginCameraSceneLookWithTemplateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BeginCameraSceneLookWithTemplateNotify", [
            { no: 8, name: "look_pos", kind: "message", T: () => define_20.Vector },
            { no: 5, name: "template_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "follow_pos", kind: "message", T: () => define_20.Vector },
            { no: 12, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "other_params", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "follow_type", kind: "enum", opt: true, T: () => ["com.midnights.game.BeginCameraSceneLookWithTemplateNotify.FollowType", BeginCameraSceneLookWithTemplateNotify_FollowType, "FOLLOW_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { otherParams: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector look_pos */ 8:
                    message.lookPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.lookPos);
                    break;
                case /* optional uint32 template_id */ 5:
                    message.templateId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector follow_pos */ 2:
                    message.followPos = define_20.Vector.internalBinaryRead(reader, reader.uint32(), options, message.followPos);
                    break;
                case /* optional uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* repeated string other_params */ 13:
                    message.otherParams.push(reader.string());
                    break;
                case /* optional com.midnights.game.BeginCameraSceneLookWithTemplateNotify.FollowType follow_type */ 9:
                    message.followType = reader.int32();
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
        /* optional com.midnights.game.Vector look_pos = 8; */
        if (message.lookPos)
            define_20.Vector.internalBinaryWrite(message.lookPos, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 template_id = 5; */
        if (message.templateId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.templateId);
        /* optional com.midnights.game.Vector follow_pos = 2; */
        if (message.followPos)
            define_20.Vector.internalBinaryWrite(message.followPos, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 12; */
        if (message.entityId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.entityId);
        /* repeated string other_params = 13; */
        for (let i = 0; i < message.otherParams.length; i++)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.otherParams[i]);
        /* optional com.midnights.game.BeginCameraSceneLookWithTemplateNotify.FollowType follow_type = 9; */
        if (message.followType !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.followType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BeginCameraSceneLookWithTemplateNotify
 */
exports.BeginCameraSceneLookWithTemplateNotify = new BeginCameraSceneLookWithTemplateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshEntityAuthNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RefreshEntityAuthNotify", [
            { no: 7, name: "entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entityIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 entity_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIdList.push(reader.uint32());
                    else
                        message.entityIdList.push(reader.uint32());
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
        /* repeated uint32 entity_id_list = 7; */
        if (message.entityIdList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityIdList.length; i++)
                writer.uint32(message.entityIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RefreshEntityAuthNotify
 */
exports.RefreshEntityAuthNotify = new RefreshEntityAuthNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerBackgroundAvatarRefreshNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayerBackgroundAvatarRefreshNotify", [
            { no: 4, name: "entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_19.SceneEntityInfo },
            { no: 8, name: "appear_type", kind: "enum", opt: true, T: () => ["com.midnights.game.VisionType", VisionType] },
            { no: 9, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.SceneEntityInfo entity_list */ 4:
                    message.entityList.push(define_19.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.VisionType appear_type */ 8:
                    message.appearType = reader.int32();
                    break;
                case /* optional uint32 param */ 9:
                    message.param = reader.uint32();
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
        /* repeated com.midnights.game.SceneEntityInfo entity_list = 4; */
        for (let i = 0; i < message.entityList.length; i++)
            define_19.SceneEntityInfo.internalBinaryWrite(message.entityList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.VisionType appear_type = 8; */
        if (message.appearType !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.appearType);
        /* optional uint32 param = 9; */
        if (message.param !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayerBackgroundAvatarRefreshNotify
 */
exports.ScenePlayerBackgroundAvatarRefreshNotify = new ScenePlayerBackgroundAvatarRefreshNotify$Type();
