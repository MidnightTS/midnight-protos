"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryBalloonInfo = exports.FallPlayerInfo = exports.BalloonPlayerInfo = exports.GalleryFallScoreNotify = exports.FallPlayerBrief = exports.GalleryFallCatchNotify = exports.FallSettleInfo = exports.GalleryStopNotify = exports.BalloonSettleInfo = exports.GalleryBalloonScoreNotify = exports.GalleryBalloonShootNotify = exports.GalleryStartNotify = exports.GalleryFlowerStartParam = exports.IslandPartySailStage = exports.SalvageEscortStopReason = exports.SalvagePreventStopReason = exports.GalleryStartSource = exports.GalleryStopReason = exports.GalleryStageType = exports.FungusCaptureSettleNotify_CmdId = exports.FungusFighterTrainingInfoNotify_CmdId = exports.WindFieldGalleryChallengeInfoNotify_CmdId = exports.WindFieldGalleryInfoNotify_CmdId = exports.InstableSprayGalleryInfoNotify_CmdId = exports.GalleryWillStartCountdownNotify_CmdId = exports.BackRebornGalleryRsp_CmdId = exports.BackRebornGalleryReq_CmdId = exports.IslandPartySailInfoNotify_CmdId = exports.IslandPartyRaftInfoNotify_CmdId = exports.GalleryIslandPartyDownHillInfoNotify_CmdId = exports.HomeGalleryInPlayingNotify_CmdId = exports.GalleryCrystalLinkBuffInfoNotify_CmdId = exports.GalleryCrystalLinkKillMonsterNotify_CmdId = exports.GallerySumoKillMonsterNotify_CmdId = exports.GalleryBounceConjuringHitNotify_CmdId = exports.SceneGalleryInfoNotify_CmdId = exports.InterruptGalleryRsp_CmdId = exports.InterruptGalleryReq_CmdId = exports.GalleryBrokenFloorFallNotify_CmdId = exports.GalleryBulletHitNotify_CmdId = exports.GalleryPreStartNotify_CmdId = exports.GalleryFlowerCatchNotify_CmdId = exports.GetAllSceneGalleryInfoRsp_CmdId = exports.GetAllSceneGalleryInfoReq_CmdId = exports.GalleryFallScoreNotify_CmdId = exports.GalleryFallCatchNotify_CmdId = exports.GalleryStopNotify_CmdId = exports.GalleryBalloonScoreNotify_CmdId = exports.GalleryBalloonShootNotify_CmdId = exports.GalleryStartNotify_CmdId = void 0;
exports.SalvagePreventGallerySettleInfo = exports.RacingGallerySettleInfo = exports.FishingGallerySettleInfo = exports.FishingScore = exports.FishInfo = exports.GalleryCrystalLinkBuffInfoNotify = exports.GalleryCrystalLinkKillMonsterNotify = exports.GallerySumoKillMonsterNotify = exports.GalleryBounceConjuringHitNotify = exports.BounceConjuringGallerySettleInfo = exports.BuoyantCombatGallerySettleInfo = exports.SceneGalleryInfoNotify = exports.InterruptGalleryRsp = exports.InterruptGalleryReq = exports.GalleryBrokenFloorFallNotify = exports.GalleryBulletHitNotify = exports.GalleryPreStartNotify = exports.GalleryFlowerCatchNotify = exports.GetAllSceneGalleryInfoRsp = exports.GetAllSceneGalleryInfoReq = exports.SceneGalleryInfo = exports.SceneGalleryCharAmusementInfo = exports.SceneGalleryEffigyChallengeV2Info = exports.SceneGalleryFungusFighterCaptureInfo = exports.SceneGalleryFungusFighterTrainingInfo = exports.SceneGalleryWindFieldInfo = exports.SceneGalleryTreasureSeelieInfo = exports.SceneGalleryInstaleSprayInfo = exports.SceneGalleryInstableSprayBuffInfo = exports.SceneGalleryIslandPartySailInfo = exports.SceneGalleryIslandPartyRaftInfo = exports.SceneGallerySummerTimeV2BoatInfo = exports.SceneGalleryIslandPartyDownHillInfo = exports.SceneGalleryHomeSeekFurnitureInfo = exports.SceneGalleryLuminanceStoneChallengeInfo = exports.SceneGalleryHomeBalloonInfo = exports.SceneGalleryIrodoriMasterInfo = exports.SceneGalleryCrystalLinkInfo = exports.SceneGallerySalvageEscortInfo = exports.SceneGallerySalvagePreventInfo = exports.SceneGallerySumoInfo = exports.SceneGalleryHandballInfo = exports.SceneGalleryBounceConjuringInfo = exports.SceneGalleryProgressInfo = exports.SceneGalleryBuoyantCombatInfo = exports.SceneGalleryHideAndSeekInfo = exports.SceneGalleryBrokenFloorInfo = exports.SceneGalleryBulletInfo = exports.SceneGalleryFlowerInfo = exports.SceneGalleryFallInfo = void 0;
exports.FungusCaptureSettleNotify = exports.FungusFighterTrainingSettleInfo = exports.FungusFighterTrainingInfoNotify = exports.WindFieldGalleryChallengeInfoNotify = exports.WindFieldGalleryInfoNotify = exports.SceneGalleryVintageHuntingInfo = exports.VintageHuntingThirdStageInfo = exports.VintageHuntingSecondStageInfo = exports.VintageHuntingFirstStageInfo = exports.SceneGalleryMuqadasPotionInfo = exports.InstableSprayGalleryInfoNotify = exports.GalleryWillStartCountdownNotify = exports.BackRebornGalleryRsp = exports.BackRebornGalleryReq = exports.IslandPartyGallerySettleInfo = exports.IslandPartySailInfoNotify = exports.IslandPartyRaftInfoNotify = exports.GalleryIslandPartyDownHillInfoNotify = exports.SummerTimeV2BoatGallerySettleInfo = exports.HomeGalleryInPlayingNotify = exports.LuminanceStoneChallengeGallerySettleInfo = exports.PhotoGallerySettleInfo = exports.IrodoriMasterGallerySettleInfo = exports.BalloonGallerySettleInfo = exports.SalvageEscortGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.GalleryStartNotify.CmdId
 */
var GalleryStartNotify_CmdId;
(function (GalleryStartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryStartNotify_CmdId[GalleryStartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5572;
     */
    GalleryStartNotify_CmdId[GalleryStartNotify_CmdId["CMD_ID"] = 5572] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryStartNotify_CmdId[GalleryStartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryStartNotify_CmdId[GalleryStartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryStartNotify_CmdId = exports.GalleryStartNotify_CmdId || (exports.GalleryStartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryBalloonShootNotify.CmdId
 */
var GalleryBalloonShootNotify_CmdId;
(function (GalleryBalloonShootNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBalloonShootNotify_CmdId[GalleryBalloonShootNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5598;
     */
    GalleryBalloonShootNotify_CmdId[GalleryBalloonShootNotify_CmdId["CMD_ID"] = 5598] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBalloonShootNotify_CmdId[GalleryBalloonShootNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryBalloonShootNotify_CmdId[GalleryBalloonShootNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryBalloonShootNotify_CmdId = exports.GalleryBalloonShootNotify_CmdId || (exports.GalleryBalloonShootNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryBalloonScoreNotify.CmdId
 */
var GalleryBalloonScoreNotify_CmdId;
(function (GalleryBalloonScoreNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBalloonScoreNotify_CmdId[GalleryBalloonScoreNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5512;
     */
    GalleryBalloonScoreNotify_CmdId[GalleryBalloonScoreNotify_CmdId["CMD_ID"] = 5512] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBalloonScoreNotify_CmdId[GalleryBalloonScoreNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryBalloonScoreNotify_CmdId[GalleryBalloonScoreNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryBalloonScoreNotify_CmdId = exports.GalleryBalloonScoreNotify_CmdId || (exports.GalleryBalloonScoreNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryStopNotify.CmdId
 */
var GalleryStopNotify_CmdId;
(function (GalleryStopNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryStopNotify_CmdId[GalleryStopNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5535;
     */
    GalleryStopNotify_CmdId[GalleryStopNotify_CmdId["CMD_ID"] = 5535] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryStopNotify_CmdId[GalleryStopNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryStopNotify_CmdId[GalleryStopNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryStopNotify_CmdId = exports.GalleryStopNotify_CmdId || (exports.GalleryStopNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryFallCatchNotify.CmdId
 */
var GalleryFallCatchNotify_CmdId;
(function (GalleryFallCatchNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryFallCatchNotify_CmdId[GalleryFallCatchNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5507;
     */
    GalleryFallCatchNotify_CmdId[GalleryFallCatchNotify_CmdId["CMD_ID"] = 5507] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryFallCatchNotify_CmdId[GalleryFallCatchNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryFallCatchNotify_CmdId[GalleryFallCatchNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryFallCatchNotify_CmdId = exports.GalleryFallCatchNotify_CmdId || (exports.GalleryFallCatchNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryFallScoreNotify.CmdId
 */
var GalleryFallScoreNotify_CmdId;
(function (GalleryFallScoreNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryFallScoreNotify_CmdId[GalleryFallScoreNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5521;
     */
    GalleryFallScoreNotify_CmdId[GalleryFallScoreNotify_CmdId["CMD_ID"] = 5521] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryFallScoreNotify_CmdId[GalleryFallScoreNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryFallScoreNotify_CmdId[GalleryFallScoreNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryFallScoreNotify_CmdId = exports.GalleryFallScoreNotify_CmdId || (exports.GalleryFallScoreNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllSceneGalleryInfoReq.CmdId
 */
var GetAllSceneGalleryInfoReq_CmdId;
(function (GetAllSceneGalleryInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllSceneGalleryInfoReq_CmdId[GetAllSceneGalleryInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5503;
     */
    GetAllSceneGalleryInfoReq_CmdId[GetAllSceneGalleryInfoReq_CmdId["CMD_ID"] = 5503] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllSceneGalleryInfoReq_CmdId[GetAllSceneGalleryInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllSceneGalleryInfoReq_CmdId[GetAllSceneGalleryInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllSceneGalleryInfoReq_CmdId[GetAllSceneGalleryInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAllSceneGalleryInfoReq_CmdId = exports.GetAllSceneGalleryInfoReq_CmdId || (exports.GetAllSceneGalleryInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllSceneGalleryInfoRsp.CmdId
 */
var GetAllSceneGalleryInfoRsp_CmdId;
(function (GetAllSceneGalleryInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllSceneGalleryInfoRsp_CmdId[GetAllSceneGalleryInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5590;
     */
    GetAllSceneGalleryInfoRsp_CmdId[GetAllSceneGalleryInfoRsp_CmdId["CMD_ID"] = 5590] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllSceneGalleryInfoRsp_CmdId[GetAllSceneGalleryInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllSceneGalleryInfoRsp_CmdId[GetAllSceneGalleryInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetAllSceneGalleryInfoRsp_CmdId = exports.GetAllSceneGalleryInfoRsp_CmdId || (exports.GetAllSceneGalleryInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryFlowerCatchNotify.CmdId
 */
var GalleryFlowerCatchNotify_CmdId;
(function (GalleryFlowerCatchNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryFlowerCatchNotify_CmdId[GalleryFlowerCatchNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5573;
     */
    GalleryFlowerCatchNotify_CmdId[GalleryFlowerCatchNotify_CmdId["CMD_ID"] = 5573] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryFlowerCatchNotify_CmdId[GalleryFlowerCatchNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryFlowerCatchNotify_CmdId[GalleryFlowerCatchNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryFlowerCatchNotify_CmdId = exports.GalleryFlowerCatchNotify_CmdId || (exports.GalleryFlowerCatchNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryPreStartNotify.CmdId
 */
var GalleryPreStartNotify_CmdId;
(function (GalleryPreStartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryPreStartNotify_CmdId[GalleryPreStartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5599;
     */
    GalleryPreStartNotify_CmdId[GalleryPreStartNotify_CmdId["CMD_ID"] = 5599] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryPreStartNotify_CmdId[GalleryPreStartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryPreStartNotify_CmdId[GalleryPreStartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryPreStartNotify_CmdId = exports.GalleryPreStartNotify_CmdId || (exports.GalleryPreStartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryBulletHitNotify.CmdId
 */
var GalleryBulletHitNotify_CmdId;
(function (GalleryBulletHitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBulletHitNotify_CmdId[GalleryBulletHitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5531;
     */
    GalleryBulletHitNotify_CmdId[GalleryBulletHitNotify_CmdId["CMD_ID"] = 5531] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBulletHitNotify_CmdId[GalleryBulletHitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryBulletHitNotify_CmdId[GalleryBulletHitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryBulletHitNotify_CmdId = exports.GalleryBulletHitNotify_CmdId || (exports.GalleryBulletHitNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryBrokenFloorFallNotify.CmdId
 */
var GalleryBrokenFloorFallNotify_CmdId;
(function (GalleryBrokenFloorFallNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBrokenFloorFallNotify_CmdId[GalleryBrokenFloorFallNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5575;
     */
    GalleryBrokenFloorFallNotify_CmdId[GalleryBrokenFloorFallNotify_CmdId["CMD_ID"] = 5575] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBrokenFloorFallNotify_CmdId[GalleryBrokenFloorFallNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryBrokenFloorFallNotify_CmdId[GalleryBrokenFloorFallNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryBrokenFloorFallNotify_CmdId = exports.GalleryBrokenFloorFallNotify_CmdId || (exports.GalleryBrokenFloorFallNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InterruptGalleryReq.CmdId
 */
var InterruptGalleryReq_CmdId;
(function (InterruptGalleryReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterruptGalleryReq_CmdId[InterruptGalleryReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5548;
     */
    InterruptGalleryReq_CmdId[InterruptGalleryReq_CmdId["CMD_ID"] = 5548] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterruptGalleryReq_CmdId[InterruptGalleryReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InterruptGalleryReq_CmdId[InterruptGalleryReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InterruptGalleryReq_CmdId[InterruptGalleryReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(InterruptGalleryReq_CmdId = exports.InterruptGalleryReq_CmdId || (exports.InterruptGalleryReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InterruptGalleryRsp.CmdId
 */
var InterruptGalleryRsp_CmdId;
(function (InterruptGalleryRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterruptGalleryRsp_CmdId[InterruptGalleryRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5597;
     */
    InterruptGalleryRsp_CmdId[InterruptGalleryRsp_CmdId["CMD_ID"] = 5597] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterruptGalleryRsp_CmdId[InterruptGalleryRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InterruptGalleryRsp_CmdId[InterruptGalleryRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InterruptGalleryRsp_CmdId[InterruptGalleryRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(InterruptGalleryRsp_CmdId = exports.InterruptGalleryRsp_CmdId || (exports.InterruptGalleryRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneGalleryInfoNotify.CmdId
 */
var SceneGalleryInfoNotify_CmdId;
(function (SceneGalleryInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneGalleryInfoNotify_CmdId[SceneGalleryInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5581;
     */
    SceneGalleryInfoNotify_CmdId[SceneGalleryInfoNotify_CmdId["CMD_ID"] = 5581] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneGalleryInfoNotify_CmdId[SceneGalleryInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneGalleryInfoNotify_CmdId[SceneGalleryInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneGalleryInfoNotify_CmdId = exports.SceneGalleryInfoNotify_CmdId || (exports.SceneGalleryInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryBounceConjuringHitNotify.CmdId
 */
var GalleryBounceConjuringHitNotify_CmdId;
(function (GalleryBounceConjuringHitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBounceConjuringHitNotify_CmdId[GalleryBounceConjuringHitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5505;
     */
    GalleryBounceConjuringHitNotify_CmdId[GalleryBounceConjuringHitNotify_CmdId["CMD_ID"] = 5505] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryBounceConjuringHitNotify_CmdId[GalleryBounceConjuringHitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryBounceConjuringHitNotify_CmdId[GalleryBounceConjuringHitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryBounceConjuringHitNotify_CmdId = exports.GalleryBounceConjuringHitNotify_CmdId || (exports.GalleryBounceConjuringHitNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GallerySumoKillMonsterNotify.CmdId
 */
var GallerySumoKillMonsterNotify_CmdId;
(function (GallerySumoKillMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GallerySumoKillMonsterNotify_CmdId[GallerySumoKillMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5582;
     */
    GallerySumoKillMonsterNotify_CmdId[GallerySumoKillMonsterNotify_CmdId["CMD_ID"] = 5582] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GallerySumoKillMonsterNotify_CmdId[GallerySumoKillMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GallerySumoKillMonsterNotify_CmdId[GallerySumoKillMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GallerySumoKillMonsterNotify_CmdId = exports.GallerySumoKillMonsterNotify_CmdId || (exports.GallerySumoKillMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryCrystalLinkKillMonsterNotify.CmdId
 */
var GalleryCrystalLinkKillMonsterNotify_CmdId;
(function (GalleryCrystalLinkKillMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryCrystalLinkKillMonsterNotify_CmdId[GalleryCrystalLinkKillMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5547;
     */
    GalleryCrystalLinkKillMonsterNotify_CmdId[GalleryCrystalLinkKillMonsterNotify_CmdId["CMD_ID"] = 5547] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryCrystalLinkKillMonsterNotify_CmdId[GalleryCrystalLinkKillMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryCrystalLinkKillMonsterNotify_CmdId[GalleryCrystalLinkKillMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryCrystalLinkKillMonsterNotify_CmdId = exports.GalleryCrystalLinkKillMonsterNotify_CmdId || (exports.GalleryCrystalLinkKillMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryCrystalLinkBuffInfoNotify.CmdId
 */
var GalleryCrystalLinkBuffInfoNotify_CmdId;
(function (GalleryCrystalLinkBuffInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryCrystalLinkBuffInfoNotify_CmdId[GalleryCrystalLinkBuffInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5539;
     */
    GalleryCrystalLinkBuffInfoNotify_CmdId[GalleryCrystalLinkBuffInfoNotify_CmdId["CMD_ID"] = 5539] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryCrystalLinkBuffInfoNotify_CmdId[GalleryCrystalLinkBuffInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryCrystalLinkBuffInfoNotify_CmdId[GalleryCrystalLinkBuffInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryCrystalLinkBuffInfoNotify_CmdId = exports.GalleryCrystalLinkBuffInfoNotify_CmdId || (exports.GalleryCrystalLinkBuffInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HomeGalleryInPlayingNotify.CmdId
 */
var HomeGalleryInPlayingNotify_CmdId;
(function (HomeGalleryInPlayingNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGalleryInPlayingNotify_CmdId[HomeGalleryInPlayingNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5553;
     */
    HomeGalleryInPlayingNotify_CmdId[HomeGalleryInPlayingNotify_CmdId["CMD_ID"] = 5553] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HomeGalleryInPlayingNotify_CmdId[HomeGalleryInPlayingNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HomeGalleryInPlayingNotify_CmdId[HomeGalleryInPlayingNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HomeGalleryInPlayingNotify_CmdId = exports.HomeGalleryInPlayingNotify_CmdId || (exports.HomeGalleryInPlayingNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryIslandPartyDownHillInfoNotify.CmdId
 */
var GalleryIslandPartyDownHillInfoNotify_CmdId;
(function (GalleryIslandPartyDownHillInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryIslandPartyDownHillInfoNotify_CmdId[GalleryIslandPartyDownHillInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5522;
     */
    GalleryIslandPartyDownHillInfoNotify_CmdId[GalleryIslandPartyDownHillInfoNotify_CmdId["CMD_ID"] = 5522] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryIslandPartyDownHillInfoNotify_CmdId[GalleryIslandPartyDownHillInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryIslandPartyDownHillInfoNotify_CmdId[GalleryIslandPartyDownHillInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryIslandPartyDownHillInfoNotify_CmdId = exports.GalleryIslandPartyDownHillInfoNotify_CmdId || (exports.GalleryIslandPartyDownHillInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.IslandPartyRaftInfoNotify.CmdId
 */
var IslandPartyRaftInfoNotify_CmdId;
(function (IslandPartyRaftInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IslandPartyRaftInfoNotify_CmdId[IslandPartyRaftInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5565;
     */
    IslandPartyRaftInfoNotify_CmdId[IslandPartyRaftInfoNotify_CmdId["CMD_ID"] = 5565] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IslandPartyRaftInfoNotify_CmdId[IslandPartyRaftInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IslandPartyRaftInfoNotify_CmdId[IslandPartyRaftInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(IslandPartyRaftInfoNotify_CmdId = exports.IslandPartyRaftInfoNotify_CmdId || (exports.IslandPartyRaftInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.IslandPartySailInfoNotify.CmdId
 */
var IslandPartySailInfoNotify_CmdId;
(function (IslandPartySailInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IslandPartySailInfoNotify_CmdId[IslandPartySailInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5504;
     */
    IslandPartySailInfoNotify_CmdId[IslandPartySailInfoNotify_CmdId["CMD_ID"] = 5504] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IslandPartySailInfoNotify_CmdId[IslandPartySailInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IslandPartySailInfoNotify_CmdId[IslandPartySailInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(IslandPartySailInfoNotify_CmdId = exports.IslandPartySailInfoNotify_CmdId || (exports.IslandPartySailInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BackRebornGalleryReq.CmdId
 */
var BackRebornGalleryReq_CmdId;
(function (BackRebornGalleryReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackRebornGalleryReq_CmdId[BackRebornGalleryReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5593;
     */
    BackRebornGalleryReq_CmdId[BackRebornGalleryReq_CmdId["CMD_ID"] = 5593] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackRebornGalleryReq_CmdId[BackRebornGalleryReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackRebornGalleryReq_CmdId[BackRebornGalleryReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackRebornGalleryReq_CmdId[BackRebornGalleryReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BackRebornGalleryReq_CmdId = exports.BackRebornGalleryReq_CmdId || (exports.BackRebornGalleryReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BackRebornGalleryRsp.CmdId
 */
var BackRebornGalleryRsp_CmdId;
(function (BackRebornGalleryRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackRebornGalleryRsp_CmdId[BackRebornGalleryRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5527;
     */
    BackRebornGalleryRsp_CmdId[BackRebornGalleryRsp_CmdId["CMD_ID"] = 5527] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackRebornGalleryRsp_CmdId[BackRebornGalleryRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackRebornGalleryRsp_CmdId[BackRebornGalleryRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BackRebornGalleryRsp_CmdId = exports.BackRebornGalleryRsp_CmdId || (exports.BackRebornGalleryRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryWillStartCountdownNotify.CmdId
 */
var GalleryWillStartCountdownNotify_CmdId;
(function (GalleryWillStartCountdownNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryWillStartCountdownNotify_CmdId[GalleryWillStartCountdownNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5594;
     */
    GalleryWillStartCountdownNotify_CmdId[GalleryWillStartCountdownNotify_CmdId["CMD_ID"] = 5594] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GalleryWillStartCountdownNotify_CmdId[GalleryWillStartCountdownNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GalleryWillStartCountdownNotify_CmdId[GalleryWillStartCountdownNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GalleryWillStartCountdownNotify_CmdId = exports.GalleryWillStartCountdownNotify_CmdId || (exports.GalleryWillStartCountdownNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InstableSprayGalleryInfoNotify.CmdId
 */
var InstableSprayGalleryInfoNotify_CmdId;
(function (InstableSprayGalleryInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InstableSprayGalleryInfoNotify_CmdId[InstableSprayGalleryInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5588;
     */
    InstableSprayGalleryInfoNotify_CmdId[InstableSprayGalleryInfoNotify_CmdId["CMD_ID"] = 5588] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InstableSprayGalleryInfoNotify_CmdId[InstableSprayGalleryInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InstableSprayGalleryInfoNotify_CmdId[InstableSprayGalleryInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InstableSprayGalleryInfoNotify_CmdId = exports.InstableSprayGalleryInfoNotify_CmdId || (exports.InstableSprayGalleryInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WindFieldGalleryInfoNotify.CmdId
 */
var WindFieldGalleryInfoNotify_CmdId;
(function (WindFieldGalleryInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WindFieldGalleryInfoNotify_CmdId[WindFieldGalleryInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5526;
     */
    WindFieldGalleryInfoNotify_CmdId[WindFieldGalleryInfoNotify_CmdId["CMD_ID"] = 5526] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WindFieldGalleryInfoNotify_CmdId[WindFieldGalleryInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WindFieldGalleryInfoNotify_CmdId[WindFieldGalleryInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WindFieldGalleryInfoNotify_CmdId = exports.WindFieldGalleryInfoNotify_CmdId || (exports.WindFieldGalleryInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WindFieldGalleryChallengeInfoNotify.CmdId
 */
var WindFieldGalleryChallengeInfoNotify_CmdId;
(function (WindFieldGalleryChallengeInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WindFieldGalleryChallengeInfoNotify_CmdId[WindFieldGalleryChallengeInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5563;
     */
    WindFieldGalleryChallengeInfoNotify_CmdId[WindFieldGalleryChallengeInfoNotify_CmdId["CMD_ID"] = 5563] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WindFieldGalleryChallengeInfoNotify_CmdId[WindFieldGalleryChallengeInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WindFieldGalleryChallengeInfoNotify_CmdId[WindFieldGalleryChallengeInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WindFieldGalleryChallengeInfoNotify_CmdId = exports.WindFieldGalleryChallengeInfoNotify_CmdId || (exports.WindFieldGalleryChallengeInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FungusFighterTrainingInfoNotify.CmdId
 */
var FungusFighterTrainingInfoNotify_CmdId;
(function (FungusFighterTrainingInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FungusFighterTrainingInfoNotify_CmdId[FungusFighterTrainingInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5595;
     */
    FungusFighterTrainingInfoNotify_CmdId[FungusFighterTrainingInfoNotify_CmdId["CMD_ID"] = 5595] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FungusFighterTrainingInfoNotify_CmdId[FungusFighterTrainingInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FungusFighterTrainingInfoNotify_CmdId[FungusFighterTrainingInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FungusFighterTrainingInfoNotify_CmdId = exports.FungusFighterTrainingInfoNotify_CmdId || (exports.FungusFighterTrainingInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FungusCaptureSettleNotify.CmdId
 */
var FungusCaptureSettleNotify_CmdId;
(function (FungusCaptureSettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FungusCaptureSettleNotify_CmdId[FungusCaptureSettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5506;
     */
    FungusCaptureSettleNotify_CmdId[FungusCaptureSettleNotify_CmdId["CMD_ID"] = 5506] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FungusCaptureSettleNotify_CmdId[FungusCaptureSettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FungusCaptureSettleNotify_CmdId[FungusCaptureSettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FungusCaptureSettleNotify_CmdId = exports.FungusCaptureSettleNotify_CmdId || (exports.FungusCaptureSettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryStageType
 */
var GalleryStageType;
(function (GalleryStageType) {
    /**
     * @generated from protobuf enum value: GALLERY_NONE = 0;
     */
    GalleryStageType[GalleryStageType["GALLERY_NONE"] = 0] = "GALLERY_NONE";
    /**
     * @generated from protobuf enum value: GALLERY_PRESTART = 1;
     */
    GalleryStageType[GalleryStageType["GALLERY_PRESTART"] = 1] = "GALLERY_PRESTART";
    /**
     * @generated from protobuf enum value: GALLERY_START = 2;
     */
    GalleryStageType[GalleryStageType["GALLERY_START"] = 2] = "GALLERY_START";
})(GalleryStageType = exports.GalleryStageType || (exports.GalleryStageType = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryStopReason
 */
var GalleryStopReason;
(function (GalleryStopReason) {
    /**
     * @generated from protobuf enum value: GALLERY_STOP_NONE = 0;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_NONE"] = 0] = "GALLERY_STOP_NONE";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_TIMEUP = 1;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_TIMEUP"] = 1] = "GALLERY_STOP_TIMEUP";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_CLIENT_INTERRUPT = 2;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_CLIENT_INTERRUPT"] = 2] = "GALLERY_STOP_CLIENT_INTERRUPT";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_LUA_INTERRUPT_SUCCESS = 3;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_LUA_INTERRUPT_SUCCESS"] = 3] = "GALLERY_STOP_LUA_INTERRUPT_SUCCESS";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_LUA_INTERRUPT_FAIL = 4;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_LUA_INTERRUPT_FAIL"] = 4] = "GALLERY_STOP_LUA_INTERRUPT_FAIL";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_OWNER_LEAVE_SCENE = 5;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_OWNER_LEAVE_SCENE"] = 5] = "GALLERY_STOP_OWNER_LEAVE_SCENE";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_PLAY_INIT_FAILED = 6;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_PLAY_INIT_FAILED"] = 6] = "GALLERY_STOP_PLAY_INIT_FAILED";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_OTHER_PLAYER_ENTER = 7;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_OTHER_PLAYER_ENTER"] = 7] = "GALLERY_STOP_OTHER_PLAYER_ENTER";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_AVATAR_DIE = 8;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_AVATAR_DIE"] = 8] = "GALLERY_STOP_AVATAR_DIE";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_FINISHED = 9;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_FINISHED"] = 9] = "GALLERY_STOP_FINISHED";
    /**
     * @generated from protobuf enum value: GALLERY_STOP_FUNGUS_ALL_DIE = 10;
     */
    GalleryStopReason[GalleryStopReason["GALLERY_STOP_FUNGUS_ALL_DIE"] = 10] = "GALLERY_STOP_FUNGUS_ALL_DIE";
})(GalleryStopReason = exports.GalleryStopReason || (exports.GalleryStopReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.GalleryStartSource
 */
var GalleryStartSource;
(function (GalleryStartSource) {
    /**
     * @generated from protobuf enum value: GALLERY_START_BY_NONE = 0;
     */
    GalleryStartSource[GalleryStartSource["GALLERY_START_BY_NONE"] = 0] = "GALLERY_START_BY_NONE";
    /**
     * @generated from protobuf enum value: GALLERY_START_BY_MATCH = 1;
     */
    GalleryStartSource[GalleryStartSource["GALLERY_START_BY_MATCH"] = 1] = "GALLERY_START_BY_MATCH";
    /**
     * @generated from protobuf enum value: GALLERY_START_BY_DRAFT = 2;
     */
    GalleryStartSource[GalleryStartSource["GALLERY_START_BY_DRAFT"] = 2] = "GALLERY_START_BY_DRAFT";
})(GalleryStartSource = exports.GalleryStartSource || (exports.GalleryStartSource = {}));
/**
 * @generated from protobuf enum com.midnights.game.SalvagePreventStopReason
 */
var SalvagePreventStopReason;
(function (SalvagePreventStopReason) {
    /**
     * @generated from protobuf enum value: SALVAGE_PREVENT_STOP_NONE = 0;
     */
    SalvagePreventStopReason[SalvagePreventStopReason["SALVAGE_PREVENT_STOP_NONE"] = 0] = "SALVAGE_PREVENT_STOP_NONE";
    /**
     * @generated from protobuf enum value: SALVAGE_PREVENT_STOP_SUCCESS = 1;
     */
    SalvagePreventStopReason[SalvagePreventStopReason["SALVAGE_PREVENT_STOP_SUCCESS"] = 1] = "SALVAGE_PREVENT_STOP_SUCCESS";
    /**
     * @generated from protobuf enum value: SALVAGE_PREVENT_STOP_ARRIVAL = 2;
     */
    SalvagePreventStopReason[SalvagePreventStopReason["SALVAGE_PREVENT_STOP_ARRIVAL"] = 2] = "SALVAGE_PREVENT_STOP_ARRIVAL";
    /**
     * @generated from protobuf enum value: SALVAGE_PREVENT_STOP_INTERRUPT = 3;
     */
    SalvagePreventStopReason[SalvagePreventStopReason["SALVAGE_PREVENT_STOP_INTERRUPT"] = 3] = "SALVAGE_PREVENT_STOP_INTERRUPT";
    /**
     * @generated from protobuf enum value: SALVAGE_PREVENT_STOP_LEAVE = 4;
     */
    SalvagePreventStopReason[SalvagePreventStopReason["SALVAGE_PREVENT_STOP_LEAVE"] = 4] = "SALVAGE_PREVENT_STOP_LEAVE";
    /**
     * @generated from protobuf enum value: SALVAGE_PREVENT_STOP_FULL = 5;
     */
    SalvagePreventStopReason[SalvagePreventStopReason["SALVAGE_PREVENT_STOP_FULL"] = 5] = "SALVAGE_PREVENT_STOP_FULL";
    /**
     * @generated from protobuf enum value: SALVAGE_PREVENT_STOP_AWAY = 6;
     */
    SalvagePreventStopReason[SalvagePreventStopReason["SALVAGE_PREVENT_STOP_AWAY"] = 6] = "SALVAGE_PREVENT_STOP_AWAY";
})(SalvagePreventStopReason = exports.SalvagePreventStopReason || (exports.SalvagePreventStopReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.SalvageEscortStopReason
 */
var SalvageEscortStopReason;
(function (SalvageEscortStopReason) {
    /**
     * @generated from protobuf enum value: SALVAGE_ESCORT_STOP_NONE = 0;
     */
    SalvageEscortStopReason[SalvageEscortStopReason["SALVAGE_ESCORT_STOP_NONE"] = 0] = "SALVAGE_ESCORT_STOP_NONE";
    /**
     * @generated from protobuf enum value: SALVAGE_ESCORT_STOP_SUCCESS = 1;
     */
    SalvageEscortStopReason[SalvageEscortStopReason["SALVAGE_ESCORT_STOP_SUCCESS"] = 1] = "SALVAGE_ESCORT_STOP_SUCCESS";
    /**
     * @generated from protobuf enum value: SALVAGE_ESCORT_STOP_DUMP = 2;
     */
    SalvageEscortStopReason[SalvageEscortStopReason["SALVAGE_ESCORT_STOP_DUMP"] = 2] = "SALVAGE_ESCORT_STOP_DUMP";
    /**
     * @generated from protobuf enum value: SALVAGE_ESCORT_STOP_TIME = 3;
     */
    SalvageEscortStopReason[SalvageEscortStopReason["SALVAGE_ESCORT_STOP_TIME"] = 3] = "SALVAGE_ESCORT_STOP_TIME";
    /**
     * @generated from protobuf enum value: SALVAGE_ESCORT_STOP_INTERRUPT = 4;
     */
    SalvageEscortStopReason[SalvageEscortStopReason["SALVAGE_ESCORT_STOP_INTERRUPT"] = 4] = "SALVAGE_ESCORT_STOP_INTERRUPT";
    /**
     * @generated from protobuf enum value: SALVAGE_ESCORT_STOP_LEAVE = 5;
     */
    SalvageEscortStopReason[SalvageEscortStopReason["SALVAGE_ESCORT_STOP_LEAVE"] = 5] = "SALVAGE_ESCORT_STOP_LEAVE";
    /**
     * @generated from protobuf enum value: SALVAGE_ESCORT_STOP_FULL = 6;
     */
    SalvageEscortStopReason[SalvageEscortStopReason["SALVAGE_ESCORT_STOP_FULL"] = 6] = "SALVAGE_ESCORT_STOP_FULL";
})(SalvageEscortStopReason = exports.SalvageEscortStopReason || (exports.SalvageEscortStopReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.IslandPartySailStage
 */
var IslandPartySailStage;
(function (IslandPartySailStage) {
    /**
     * @generated from protobuf enum value: ISLAND_PARTY_SAIL_STAGE_NONE = 0;
     */
    IslandPartySailStage[IslandPartySailStage["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ISLAND_PARTY_SAIL_STAGE_SAIL = 1;
     */
    IslandPartySailStage[IslandPartySailStage["SAIL"] = 1] = "SAIL";
    /**
     * @generated from protobuf enum value: ISLAND_PARTY_SAIL_STAGE_BATTLE = 2;
     */
    IslandPartySailStage[IslandPartySailStage["BATTLE"] = 2] = "BATTLE";
})(IslandPartySailStage = exports.IslandPartySailStage || (exports.IslandPartySailStage = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFlowerStartParam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryFlowerStartParam", [
            { no: 5, name: "target_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_score */ 5:
                    message.targetScore = reader.uint32();
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
        /* optional uint32 target_score = 5; */
        if (message.targetScore !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.targetScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryFlowerStartParam
 */
exports.GalleryFlowerStartParam = new GalleryFlowerStartParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryStartNotify", [
            { no: 6, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "player_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "flower_start_param", kind: "message", oneof: "detail", T: () => exports.GalleryFlowerStartParam }
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
                case /* optional uint32 end_time */ 6:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 player_count */ 11:
                    message.playerCount = reader.uint32();
                    break;
                case /* optional uint32 owner_uid */ 9:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional uint32 start_time */ 5:
                    message.startTime = reader.uint32();
                    break;
                case /* com.midnights.game.GalleryFlowerStartParam flower_start_param */ 15:
                    message.detail = {
                        oneofKind: "flowerStartParam",
                        flowerStartParam: exports.GalleryFlowerStartParam.internalBinaryRead(reader, reader.uint32(), options, message.detail.flowerStartParam)
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
        /* optional uint32 end_time = 6; */
        if (message.endTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 player_count = 11; */
        if (message.playerCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.playerCount);
        /* optional uint32 owner_uid = 9; */
        if (message.ownerUid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.ownerUid);
        /* optional uint32 gallery_id = 13; */
        if (message.galleryId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional uint32 start_time = 5; */
        if (message.startTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.startTime);
        /* com.midnights.game.GalleryFlowerStartParam flower_start_param = 15; */
        if (message.detail.oneofKind === "flowerStartParam")
            exports.GalleryFlowerStartParam.internalBinaryWrite(message.detail.flowerStartParam, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryStartNotify
 */
exports.GalleryStartNotify = new GalleryStartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryBalloonShootNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryBalloonShootNotify", [
            { no: 12, name: "trigger_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "combo", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "combo_disable_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "add_score", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 trigger_entity_id */ 12:
                    message.triggerEntityId = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 5:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional uint32 combo */ 14:
                    message.combo = reader.uint32();
                    break;
                case /* optional uint64 combo_disable_time */ 6:
                    message.comboDisableTime = reader.uint64().toBigInt();
                    break;
                case /* optional int32 add_score */ 11:
                    message.addScore = reader.int32();
                    break;
                case /* optional uint32 cur_score */ 13:
                    message.curScore = reader.uint32();
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
        /* optional uint32 trigger_entity_id = 12; */
        if (message.triggerEntityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.triggerEntityId);
        /* optional uint32 gallery_id = 5; */
        if (message.galleryId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional uint32 combo = 14; */
        if (message.combo !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.combo);
        /* optional uint64 combo_disable_time = 6; */
        if (message.comboDisableTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.comboDisableTime);
        /* optional int32 add_score = 11; */
        if (message.addScore !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.addScore);
        /* optional uint32 cur_score = 13; */
        if (message.curScore !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.curScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryBalloonShootNotify
 */
exports.GalleryBalloonShootNotify = new GalleryBalloonShootNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryBalloonScoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryBalloonScoreNotify", [
            { no: 9, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "uid_score_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { uidScoreMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 9:
                    message.galleryId = reader.uint32();
                    break;
                case /* map<uint32, uint32> uid_score_map */ 7:
                    this.binaryReadMap7(message.uidScoreMap, reader, options);
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
    binaryReadMap7(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GalleryBalloonScoreNotify.uid_score_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gallery_id = 9; */
        if (message.galleryId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* map<uint32, uint32> uid_score_map = 7; */
        for (let k of Object.keys(message.uidScoreMap))
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.uidScoreMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryBalloonScoreNotify
 */
exports.GalleryBalloonScoreNotify = new GalleryBalloonScoreNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BalloonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BalloonSettleInfo", [
            { no: 3, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "shoot_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "max_combo", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "final_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_info", kind: "message", T: () => define_3.OnlinePlayerInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 3:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint32 shoot_count */ 12:
                    message.shootCount = reader.uint32();
                    break;
                case /* optional uint32 max_combo */ 9:
                    message.maxCombo = reader.uint32();
                    break;
                case /* optional uint32 final_score */ 7:
                    message.finalScore = reader.uint32();
                    break;
                case /* optional com.midnights.game.OnlinePlayerInfo player_info */ 2:
                    message.playerInfo = define_3.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
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
        /* optional uint32 uid = 3; */
        if (message.uid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint32 shoot_count = 12; */
        if (message.shootCount !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.shootCount);
        /* optional uint32 max_combo = 9; */
        if (message.maxCombo !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.maxCombo);
        /* optional uint32 final_score = 7; */
        if (message.finalScore !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* optional com.midnights.game.OnlinePlayerInfo player_info = 2; */
        if (message.playerInfo)
            define_3.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BalloonSettleInfo
 */
exports.BalloonSettleInfo = new BalloonSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryStopNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryStopNotify", [
            { no: 8, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 8:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 gallery_id = 8; */
        if (message.galleryId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryStopNotify
 */
exports.GalleryStopNotify = new GalleryStopNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FallSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FallSettleInfo", [
            { no: 15, name: "catch_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "player_info", kind: "message", T: () => define_3.OnlinePlayerInfo },
            { no: 14, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "flower_ring_catch_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 10, name: "remain_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "final_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { flowerRingCatchCountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 catch_count */ 15:
                    message.catchCount = reader.uint32();
                    break;
                case /* optional com.midnights.game.OnlinePlayerInfo player_info */ 13:
                    message.playerInfo = define_3.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* optional uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* map<uint32, uint32> flower_ring_catch_count_map */ 3:
                    this.binaryReadMap3(message.flowerRingCatchCountMap, reader, options);
                    break;
                case /* optional uint32 remain_time */ 10:
                    message.remainTime = reader.uint32();
                    break;
                case /* optional uint32 final_score */ 1:
                    message.finalScore = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.FallSettleInfo.flower_ring_catch_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 catch_count = 15; */
        if (message.catchCount !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.catchCount);
        /* optional com.midnights.game.OnlinePlayerInfo player_info = 13; */
        if (message.playerInfo)
            define_3.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 uid = 14; */
        if (message.uid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.uid);
        /* map<uint32, uint32> flower_ring_catch_count_map = 3; */
        for (let k of Object.keys(message.flowerRingCatchCountMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.flowerRingCatchCountMap[k]).join();
        /* optional uint32 remain_time = 10; */
        if (message.remainTime !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.remainTime);
        /* optional uint32 final_score = 1; */
        if (message.finalScore !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.finalScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FallSettleInfo
 */
exports.FallSettleInfo = new FallSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFallCatchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryFallCatchNotify", [
            { no: 6, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "time_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "ball_catch_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 1, name: "add_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_ground", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { ballCatchCountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_score */ 6:
                    message.curScore = reader.uint32();
                    break;
                case /* optional uint32 time_cost */ 11:
                    message.timeCost = reader.uint32();
                    break;
                case /* map<uint32, uint32> ball_catch_count_map */ 15:
                    this.binaryReadMap15(message.ballCatchCountMap, reader, options);
                    break;
                case /* optional uint32 add_score */ 1:
                    message.addScore = reader.uint32();
                    break;
                case /* optional bool is_ground */ 12:
                    message.isGround = reader.bool();
                    break;
                case /* optional uint32 gallery_id */ 10:
                    message.galleryId = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GalleryFallCatchNotify.ball_catch_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_score = 6; */
        if (message.curScore !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curScore);
        /* optional uint32 time_cost = 11; */
        if (message.timeCost !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.timeCost);
        /* map<uint32, uint32> ball_catch_count_map = 15; */
        for (let k of Object.keys(message.ballCatchCountMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.ballCatchCountMap[k]).join();
        /* optional uint32 add_score = 1; */
        if (message.addScore !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.addScore);
        /* optional bool is_ground = 12; */
        if (message.isGround !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isGround);
        /* optional uint32 gallery_id = 10; */
        if (message.galleryId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryFallCatchNotify
 */
exports.GalleryFallCatchNotify = new GalleryFallCatchNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FallPlayerBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FallPlayerBrief", [
            { no: 13, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_ground", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 13:
                    message.uid = reader.uint32();
                    break;
                case /* optional bool is_ground */ 5:
                    message.isGround = reader.bool();
                    break;
                case /* optional uint32 score */ 10:
                    message.score = reader.uint32();
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
        /* optional uint32 uid = 13; */
        if (message.uid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional bool is_ground = 5; */
        if (message.isGround !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isGround);
        /* optional uint32 score = 10; */
        if (message.score !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FallPlayerBrief
 */
exports.FallPlayerBrief = new FallPlayerBrief$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFallScoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryFallScoreNotify", [
            { no: 7, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "uid_brief_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.FallPlayerBrief } }
        ]);
    }
    create(value) {
        const message = { uidBriefMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 7:
                    message.galleryId = reader.uint32();
                    break;
                case /* map<uint32, com.midnights.game.FallPlayerBrief> uid_brief_map */ 1:
                    this.binaryReadMap1(message.uidBriefMap, reader, options);
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
                    val = exports.FallPlayerBrief.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GalleryFallScoreNotify.uid_brief_map");
            }
        }
        map[key ?? 0] = val ?? exports.FallPlayerBrief.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gallery_id = 7; */
        if (message.galleryId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* map<uint32, com.midnights.game.FallPlayerBrief> uid_brief_map = 1; */
        for (let k of Object.keys(message.uidBriefMap)) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.FallPlayerBrief.internalBinaryWrite(message.uidBriefMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryFallScoreNotify
 */
exports.GalleryFallScoreNotify = new GalleryFallScoreNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BalloonPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BalloonPlayerInfo", [
            { no: 15, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "combo_disable_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "combo", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 cur_score */ 2:
                    message.curScore = reader.uint32();
                    break;
                case /* optional uint32 combo_disable_time */ 14:
                    message.comboDisableTime = reader.uint32();
                    break;
                case /* optional uint32 combo */ 11:
                    message.combo = reader.uint32();
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
        /* optional uint32 uid = 15; */
        if (message.uid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint32 cur_score = 2; */
        if (message.curScore !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.curScore);
        /* optional uint32 combo_disable_time = 14; */
        if (message.comboDisableTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.comboDisableTime);
        /* optional uint32 combo = 11; */
        if (message.combo !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.combo);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BalloonPlayerInfo
 */
exports.BalloonPlayerInfo = new BalloonPlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FallPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FallPlayerInfo", [
            { no: 11, name: "time_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "ball_catch_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_ground", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { ballCatchCountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 time_cost */ 11:
                    message.timeCost = reader.uint32();
                    break;
                case /* optional uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* map<uint32, uint32> ball_catch_count_map */ 6:
                    this.binaryReadMap6(message.ballCatchCountMap, reader, options);
                    break;
                case /* optional uint32 cur_score */ 7:
                    message.curScore = reader.uint32();
                    break;
                case /* optional bool is_ground */ 15:
                    message.isGround = reader.bool();
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.FallPlayerInfo.ball_catch_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 time_cost = 11; */
        if (message.timeCost !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.timeCost);
        /* optional uint32 uid = 9; */
        if (message.uid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        /* map<uint32, uint32> ball_catch_count_map = 6; */
        for (let k of Object.keys(message.ballCatchCountMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.ballCatchCountMap[k]).join();
        /* optional uint32 cur_score = 7; */
        if (message.curScore !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.curScore);
        /* optional bool is_ground = 15; */
        if (message.isGround !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isGround);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FallPlayerInfo
 */
exports.FallPlayerInfo = new FallPlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBalloonInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryBalloonInfo", [
            { no: 14, name: "scene_player_balloon_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.BalloonPlayerInfo } },
            { no: 5, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { scenePlayerBalloonInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.BalloonPlayerInfo> scene_player_balloon_info_map */ 14:
                    this.binaryReadMap14(message.scenePlayerBalloonInfoMap, reader, options);
                    break;
                case /* optional uint32 end_time */ 5:
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
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.BalloonPlayerInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneGalleryBalloonInfo.scene_player_balloon_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.BalloonPlayerInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.BalloonPlayerInfo> scene_player_balloon_info_map = 14; */
        for (let k of Object.keys(message.scenePlayerBalloonInfoMap)) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.BalloonPlayerInfo.internalBinaryWrite(message.scenePlayerBalloonInfoMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 end_time = 5; */
        if (message.endTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryBalloonInfo
 */
exports.SceneGalleryBalloonInfo = new SceneGalleryBalloonInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryFallInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryFallInfo", [
            { no: 12, name: "scene_player_fall_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.FallPlayerInfo } },
            { no: 2, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { scenePlayerFallInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.FallPlayerInfo> scene_player_fall_info_map */ 12:
                    this.binaryReadMap12(message.scenePlayerFallInfoMap, reader, options);
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap12(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.FallPlayerInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneGalleryFallInfo.scene_player_fall_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.FallPlayerInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.FallPlayerInfo> scene_player_fall_info_map = 12; */
        for (let k of Object.keys(message.scenePlayerFallInfoMap)) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.FallPlayerInfo.internalBinaryWrite(message.scenePlayerFallInfoMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 end_time = 2; */
        if (message.endTime !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryFallInfo
 */
exports.SceneGalleryFallInfo = new SceneGalleryFallInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryFlowerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryFlowerInfo", [
            { no: 7, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "target_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 end_time */ 7:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 target_score */ 13:
                    message.targetScore = reader.uint32();
                    break;
                case /* optional uint32 cur_score */ 9:
                    message.curScore = reader.uint32();
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
        /* optional uint32 end_time = 7; */
        if (message.endTime !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 target_score = 13; */
        if (message.targetScore !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.targetScore);
        /* optional uint32 cur_score = 9; */
        if (message.curScore !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryFlowerInfo
 */
exports.SceneGalleryFlowerInfo = new SceneGalleryFlowerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBulletInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryBulletInfo", [
            { no: 1, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "hit_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { hitCountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* map<uint32, uint32> hit_count_map */ 10:
                    this.binaryReadMap10(message.hitCountMap, reader, options);
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneGalleryBulletInfo.hit_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 end_time = 1; */
        if (message.endTime !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.endTime);
        /* map<uint32, uint32> hit_count_map = 10; */
        for (let k of Object.keys(message.hitCountMap))
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.hitCountMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryBulletInfo
 */
exports.SceneGalleryBulletInfo = new SceneGalleryBulletInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBrokenFloorInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryBrokenFloorInfo", [
            { no: 3, name: "fall_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fallCountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> fall_count_map */ 3:
                    this.binaryReadMap3(message.fallCountMap, reader, options);
                    break;
                case /* optional uint32 end_time */ 9:
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneGalleryBrokenFloorInfo.fall_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> fall_count_map = 3; */
        for (let k of Object.keys(message.fallCountMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.fallCountMap[k]).join();
        /* optional uint32 end_time = 9; */
        if (message.endTime !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryBrokenFloorInfo
 */
exports.SceneGalleryBrokenFloorInfo = new SceneGalleryBrokenFloorInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHideAndSeekInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryHideAndSeekInfo", [
            { no: 13, name: "visible_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "caught_uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { visibleUidList: [], caughtUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 visible_uid_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.visibleUidList.push(reader.uint32());
                    else
                        message.visibleUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 caught_uid_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.caughtUidList.push(reader.uint32());
                    else
                        message.caughtUidList.push(reader.uint32());
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
        /* repeated uint32 visible_uid_list = 13; */
        for (let i = 0; i < message.visibleUidList.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.visibleUidList[i]);
        /* repeated uint32 caught_uid_list = 4; */
        for (let i = 0; i < message.caughtUidList.length; i++)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.caughtUidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryHideAndSeekInfo
 */
exports.SceneGalleryHideAndSeekInfo = new SceneGalleryHideAndSeekInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBuoyantCombatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryBuoyantCombatInfo", [
            { no: 6, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "kill_special_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 6:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 kill_special_monster_count */ 1:
                    message.killSpecialMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 kill_monster_count */ 14:
                    message.killMonsterCount = reader.uint32();
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
        /* optional uint32 score = 6; */
        if (message.score !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 kill_special_monster_count = 1; */
        if (message.killSpecialMonsterCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.killSpecialMonsterCount);
        /* optional uint32 kill_monster_count = 14; */
        if (message.killMonsterCount !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryBuoyantCombatInfo
 */
exports.SceneGalleryBuoyantCombatInfo = new SceneGalleryBuoyantCombatInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryProgressInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryProgressInfo", [
            { no: 8, name: "progress_stage_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "ui_form", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { progressStageList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 progress_stage_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.progressStageList.push(reader.uint32());
                    else
                        message.progressStageList.push(reader.uint32());
                    break;
                case /* optional string key */ 11:
                    message.key = reader.string();
                    break;
                case /* optional uint32 progress */ 5:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 ui_form */ 12:
                    message.uiForm = reader.uint32();
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
        /* repeated uint32 progress_stage_list = 8; */
        for (let i = 0; i < message.progressStageList.length; i++)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.progressStageList[i]);
        /* optional string key = 11; */
        if (message.key !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.key);
        /* optional uint32 progress = 5; */
        if (message.progress !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional uint32 ui_form = 12; */
        if (message.uiForm !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.uiForm);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryProgressInfo
 */
exports.SceneGalleryProgressInfo = new SceneGalleryProgressInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryBounceConjuringInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryBounceConjuringInfo", [
            { no: 4, name: "total_destroyed_machine_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "total_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 total_destroyed_machine_count */ 4:
                    message.totalDestroyedMachineCount = reader.uint32();
                    break;
                case /* optional uint32 total_score */ 6:
                    message.totalScore = reader.uint32();
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
        /* optional uint32 total_destroyed_machine_count = 4; */
        if (message.totalDestroyedMachineCount !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.totalDestroyedMachineCount);
        /* optional uint32 total_score = 6; */
        if (message.totalScore !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.totalScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryBounceConjuringInfo
 */
exports.SceneGalleryBounceConjuringInfo = new SceneGalleryBounceConjuringInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHandballInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryHandballInfo", [
            { no: 9, name: "ball_place_info", kind: "message", T: () => define_2.PlaceInfo },
            { no: 15, name: "is_have_ball", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.PlaceInfo ball_place_info */ 9:
                    message.ballPlaceInfo = define_2.PlaceInfo.internalBinaryRead(reader, reader.uint32(), options, message.ballPlaceInfo);
                    break;
                case /* optional bool is_have_ball */ 15:
                    message.isHaveBall = reader.bool();
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
        /* optional com.midnights.game.PlaceInfo ball_place_info = 9; */
        if (message.ballPlaceInfo)
            define_2.PlaceInfo.internalBinaryWrite(message.ballPlaceInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_have_ball = 15; */
        if (message.isHaveBall !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isHaveBall);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryHandballInfo
 */
exports.SceneGalleryHandballInfo = new SceneGalleryHandballInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGallerySumoInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGallerySumoInfo", [
            { no: 2, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "kill_normal_mosnter_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "kill_elite_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 2:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 kill_normal_mosnter_num */ 15:
                    message.killNormalMosnterNum = reader.uint32();
                    break;
                case /* optional uint32 kill_elite_monster_num */ 14:
                    message.killEliteMonsterNum = reader.uint32();
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
        /* optional uint32 score = 2; */
        if (message.score !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 kill_normal_mosnter_num = 15; */
        if (message.killNormalMosnterNum !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.killNormalMosnterNum);
        /* optional uint32 kill_elite_monster_num = 14; */
        if (message.killEliteMonsterNum !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.killEliteMonsterNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGallerySumoInfo
 */
exports.SceneGallerySumoInfo = new SceneGallerySumoInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGallerySalvagePreventInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGallerySalvagePreventInfo", [
            { no: 7, name: "monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 monster_count */ 7:
                    message.monsterCount = reader.uint32();
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
        /* optional uint32 monster_count = 7; */
        if (message.monsterCount !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.monsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGallerySalvagePreventInfo
 */
exports.SceneGallerySalvagePreventInfo = new SceneGallerySalvagePreventInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGallerySalvageEscortInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGallerySalvageEscortInfo", [
            { no: 14, name: "max_box_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "max_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "box_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 max_box_count */ 14:
                    message.maxBoxCount = reader.uint32();
                    break;
                case /* optional uint32 max_monster_count */ 3:
                    message.maxMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 box_count */ 7:
                    message.boxCount = reader.uint32();
                    break;
                case /* optional uint32 monster_count */ 11:
                    message.monsterCount = reader.uint32();
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
        /* optional uint32 max_box_count = 14; */
        if (message.maxBoxCount !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.maxBoxCount);
        /* optional uint32 max_monster_count = 3; */
        if (message.maxMonsterCount !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.maxMonsterCount);
        /* optional uint32 box_count = 7; */
        if (message.boxCount !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.boxCount);
        /* optional uint32 monster_count = 11; */
        if (message.monsterCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.monsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGallerySalvageEscortInfo
 */
exports.SceneGallerySalvageEscortInfo = new SceneGallerySalvageEscortInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryCrystalLinkInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryCrystalLinkInfo", [
            { no: 10, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 10:
                    message.score = reader.uint32();
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
        /* optional uint32 score = 10; */
        if (message.score !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryCrystalLinkInfo
 */
exports.SceneGalleryCrystalLinkInfo = new SceneGalleryCrystalLinkInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIrodoriMasterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryIrodoriMasterInfo", [
            { no: 8, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "difficulty", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_cg_viewed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level_id */ 8:
                    message.levelId = reader.uint32();
                    break;
                case /* optional uint32 difficulty */ 1:
                    message.difficulty = reader.uint32();
                    break;
                case /* optional bool is_cg_viewed */ 5:
                    message.isCgViewed = reader.bool();
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
        /* optional uint32 level_id = 8; */
        if (message.levelId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.levelId);
        /* optional uint32 difficulty = 1; */
        if (message.difficulty !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.difficulty);
        /* optional bool is_cg_viewed = 5; */
        if (message.isCgViewed !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isCgViewed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryIrodoriMasterInfo
 */
exports.SceneGalleryIrodoriMasterInfo = new SceneGalleryIrodoriMasterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHomeBalloonInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryHomeBalloonInfo", [
            { no: 7, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 7:
                    message.score = reader.uint32();
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
        /* optional uint32 score = 7; */
        if (message.score !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryHomeBalloonInfo
 */
exports.SceneGalleryHomeBalloonInfo = new SceneGalleryHomeBalloonInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryLuminanceStoneChallengeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryLuminanceStoneChallengeInfo", [
            { no: 5, name: "kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "clean_mud_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "kill_special_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 kill_monster_count */ 5:
                    message.killMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 score */ 3:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 clean_mud_count */ 2:
                    message.cleanMudCount = reader.uint32();
                    break;
                case /* optional uint32 kill_special_monster_count */ 6:
                    message.killSpecialMonsterCount = reader.uint32();
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
        /* optional uint32 kill_monster_count = 5; */
        if (message.killMonsterCount !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        /* optional uint32 score = 3; */
        if (message.score !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 clean_mud_count = 2; */
        if (message.cleanMudCount !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cleanMudCount);
        /* optional uint32 kill_special_monster_count = 6; */
        if (message.killSpecialMonsterCount !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.killSpecialMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryLuminanceStoneChallengeInfo
 */
exports.SceneGalleryLuminanceStoneChallengeInfo = new SceneGalleryLuminanceStoneChallengeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHomeSeekFurnitureInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryHomeSeekFurnitureInfo", [
            { no: 6, name: "cur_tide_left_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "player_score_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "cur_tide_duration_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cur_tide_total_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playerScoreMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_tide_left_num */ 6:
                    message.curTideLeftNum = reader.uint32();
                    break;
                case /* map<uint32, uint32> player_score_map */ 8:
                    this.binaryReadMap8(message.playerScoreMap, reader, options);
                    break;
                case /* optional uint32 cur_tide_duration_time */ 12:
                    message.curTideDurationTime = reader.uint32();
                    break;
                case /* optional uint32 cur_tide_total_num */ 9:
                    message.curTideTotalNum = reader.uint32();
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
    binaryReadMap8(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneGalleryHomeSeekFurnitureInfo.player_score_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_tide_left_num = 6; */
        if (message.curTideLeftNum !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curTideLeftNum);
        /* map<uint32, uint32> player_score_map = 8; */
        for (let k of Object.keys(message.playerScoreMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.playerScoreMap[k]).join();
        /* optional uint32 cur_tide_duration_time = 12; */
        if (message.curTideDurationTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curTideDurationTime);
        /* optional uint32 cur_tide_total_num = 9; */
        if (message.curTideTotalNum !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curTideTotalNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryHomeSeekFurnitureInfo
 */
exports.SceneGalleryHomeSeekFurnitureInfo = new SceneGalleryHomeSeekFurnitureInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIslandPartyDownHillInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryIslandPartyDownHillInfo", [
            { no: 14, name: "total_kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "start_source", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStartSource", GalleryStartSource] },
            { no: 5, name: "max_kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 total_kill_monster_count */ 14:
                    message.totalKillMonsterCount = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStartSource start_source */ 15:
                    message.startSource = reader.int32();
                    break;
                case /* optional uint32 max_kill_monster_count */ 5:
                    message.maxKillMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 coin */ 13:
                    message.coin = reader.uint32();
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
        /* optional uint32 total_kill_monster_count = 14; */
        if (message.totalKillMonsterCount !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.totalKillMonsterCount);
        /* optional com.midnights.game.GalleryStartSource start_source = 15; */
        if (message.startSource !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.startSource);
        /* optional uint32 max_kill_monster_count = 5; */
        if (message.maxKillMonsterCount !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.maxKillMonsterCount);
        /* optional uint32 coin = 13; */
        if (message.coin !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.coin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryIslandPartyDownHillInfo
 */
exports.SceneGalleryIslandPartyDownHillInfo = new SceneGalleryIslandPartyDownHillInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGallerySummerTimeV2BoatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGallerySummerTimeV2BoatInfo", [
            { no: 15, name: "param1", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param3", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "used_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "param2", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 param1 */ 15:
                    message.param1 = reader.uint32();
                    break;
                case /* optional uint32 param3 */ 3:
                    message.param3 = reader.uint32();
                    break;
                case /* optional uint32 used_time */ 11:
                    message.usedTime = reader.uint32();
                    break;
                case /* optional uint32 param2 */ 7:
                    message.param2 = reader.uint32();
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
        /* optional uint32 param1 = 15; */
        if (message.param1 !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.param1);
        /* optional uint32 param3 = 3; */
        if (message.param3 !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.param3);
        /* optional uint32 used_time = 11; */
        if (message.usedTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.usedTime);
        /* optional uint32 param2 = 7; */
        if (message.param2 !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.param2);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGallerySummerTimeV2BoatInfo
 */
exports.SceneGallerySummerTimeV2BoatInfo = new SceneGallerySummerTimeV2BoatInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIslandPartyRaftInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryIslandPartyRaftInfo", [
            { no: 6, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "start_source", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStartSource", GalleryStartSource] },
            { no: 1, name: "component", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "fuel", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "raft_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 coin */ 6:
                    message.coin = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStartSource start_source */ 7:
                    message.startSource = reader.int32();
                    break;
                case /* optional uint32 component */ 1:
                    message.component = reader.uint32();
                    break;
                case /* optional uint32 fuel */ 15:
                    message.fuel = reader.uint32();
                    break;
                case /* optional uint32 point_id */ 12:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 raft_entity_id */ 4:
                    message.raftEntityId = reader.uint32();
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
        /* optional uint32 coin = 6; */
        if (message.coin !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.coin);
        /* optional com.midnights.game.GalleryStartSource start_source = 7; */
        if (message.startSource !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.startSource);
        /* optional uint32 component = 1; */
        if (message.component !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.component);
        /* optional uint32 fuel = 15; */
        if (message.fuel !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.fuel);
        /* optional uint32 point_id = 12; */
        if (message.pointId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional uint32 raft_entity_id = 4; */
        if (message.raftEntityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.raftEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryIslandPartyRaftInfo
 */
exports.SceneGalleryIslandPartyRaftInfo = new SceneGalleryIslandPartyRaftInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIslandPartySailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryIslandPartySailInfo", [
            { no: 14, name: "max_clean_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "clean_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "start_source", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStartSource", GalleryStartSource] },
            { no: 11, name: "kill_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "stage", kind: "enum", opt: true, T: () => ["com.midnights.game.IslandPartySailStage", IslandPartySailStage, "ISLAND_PARTY_SAIL_STAGE_"] },
            { no: 8, name: "max_kill_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 max_clean_progress */ 14:
                    message.maxCleanProgress = reader.uint32();
                    break;
                case /* optional uint32 clean_progress */ 10:
                    message.cleanProgress = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStartSource start_source */ 1:
                    message.startSource = reader.int32();
                    break;
                case /* optional uint32 kill_progress */ 11:
                    message.killProgress = reader.uint32();
                    break;
                case /* optional uint32 coin */ 15:
                    message.coin = reader.uint32();
                    break;
                case /* optional com.midnights.game.IslandPartySailStage stage */ 12:
                    message.stage = reader.int32();
                    break;
                case /* optional uint32 max_kill_progress */ 8:
                    message.maxKillProgress = reader.uint32();
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
        /* optional uint32 max_clean_progress = 14; */
        if (message.maxCleanProgress !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.maxCleanProgress);
        /* optional uint32 clean_progress = 10; */
        if (message.cleanProgress !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.cleanProgress);
        /* optional com.midnights.game.GalleryStartSource start_source = 1; */
        if (message.startSource !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.startSource);
        /* optional uint32 kill_progress = 11; */
        if (message.killProgress !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.killProgress);
        /* optional uint32 coin = 15; */
        if (message.coin !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.coin);
        /* optional com.midnights.game.IslandPartySailStage stage = 12; */
        if (message.stage !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.stage);
        /* optional uint32 max_kill_progress = 8; */
        if (message.maxKillProgress !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.maxKillProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryIslandPartySailInfo
 */
exports.SceneGalleryIslandPartySailInfo = new SceneGalleryIslandPartySailInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInstableSprayBuffInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryInstableSprayBuffInfo", [
            { no: 6, name: "buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "buff_end_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "buff_max_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 buff_id */ 6:
                    message.buffId = reader.uint32();
                    break;
                case /* optional uint64 buff_end_time */ 9:
                    message.buffEndTime = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 buff_max_time */ 4:
                    message.buffMaxTime = reader.uint64().toBigInt();
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
        /* optional uint32 buff_id = 6; */
        if (message.buffId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.buffId);
        /* optional uint64 buff_end_time = 9; */
        if (message.buffEndTime !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.buffEndTime);
        /* optional uint64 buff_max_time = 4; */
        if (message.buffMaxTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.buffMaxTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryInstableSprayBuffInfo
 */
exports.SceneGalleryInstableSprayBuffInfo = new SceneGalleryInstableSprayBuffInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInstaleSprayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryInstaleSprayInfo", [
            { no: 5, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "buff_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SceneGalleryInstableSprayBuffInfo }
        ]);
    }
    create(value) {
        const message = { buffInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 5:
                    message.score = reader.uint32();
                    break;
                case /* repeated com.midnights.game.SceneGalleryInstableSprayBuffInfo buff_info_list */ 12:
                    message.buffInfoList.push(exports.SceneGalleryInstableSprayBuffInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 score = 5; */
        if (message.score !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.score);
        /* repeated com.midnights.game.SceneGalleryInstableSprayBuffInfo buff_info_list = 12; */
        for (let i = 0; i < message.buffInfoList.length; i++)
            exports.SceneGalleryInstableSprayBuffInfo.internalBinaryWrite(message.buffInfoList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryInstaleSprayInfo
 */
exports.SceneGalleryInstaleSprayInfo = new SceneGalleryInstaleSprayInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryTreasureSeelieInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryTreasureSeelieInfo", [
            { no: 15, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "goal", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 progress */ 15:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 goal */ 14:
                    message.goal = reader.uint32();
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
        /* optional uint32 progress = 15; */
        if (message.progress !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional uint32 goal = 14; */
        if (message.goal !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.goal);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryTreasureSeelieInfo
 */
exports.SceneGalleryTreasureSeelieInfo = new SceneGalleryTreasureSeelieInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryWindFieldInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryWindFieldInfo", [
            { no: 5, name: "killed_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "challenge_ball_max_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "show_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "challenge_total_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "challenge_ball_cur_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "coin_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "challenge_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "element_ball_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 killed_monster_num */ 5:
                    message.killedMonsterNum = reader.uint32();
                    break;
                case /* optional uint32 challenge_ball_max_count */ 12:
                    message.challengeBallMaxCount = reader.uint32();
                    break;
                case /* optional uint32 show_id */ 15:
                    message.showId = reader.uint32();
                    break;
                case /* optional uint32 challenge_total_time */ 4:
                    message.challengeTotalTime = reader.uint32();
                    break;
                case /* optional uint32 challenge_ball_cur_count */ 9:
                    message.challengeBallCurCount = reader.uint32();
                    break;
                case /* optional uint32 coin_num */ 1:
                    message.coinNum = reader.uint32();
                    break;
                case /* optional uint32 challenge_timestamp */ 13:
                    message.challengeTimestamp = reader.uint32();
                    break;
                case /* optional uint32 element_ball_num */ 10:
                    message.elementBallNum = reader.uint32();
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
        /* optional uint32 killed_monster_num = 5; */
        if (message.killedMonsterNum !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.killedMonsterNum);
        /* optional uint32 challenge_ball_max_count = 12; */
        if (message.challengeBallMaxCount !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.challengeBallMaxCount);
        /* optional uint32 show_id = 15; */
        if (message.showId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.showId);
        /* optional uint32 challenge_total_time = 4; */
        if (message.challengeTotalTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.challengeTotalTime);
        /* optional uint32 challenge_ball_cur_count = 9; */
        if (message.challengeBallCurCount !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.challengeBallCurCount);
        /* optional uint32 coin_num = 1; */
        if (message.coinNum !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.coinNum);
        /* optional uint32 challenge_timestamp = 13; */
        if (message.challengeTimestamp !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.challengeTimestamp);
        /* optional uint32 element_ball_num = 10; */
        if (message.elementBallNum !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.elementBallNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryWindFieldInfo
 */
exports.SceneGalleryWindFieldInfo = new SceneGalleryWindFieldInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryFungusFighterTrainingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryFungusFighterTrainingInfo", [
            { no: 4, name: "max_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "killed_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "buff_start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_skill_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "buff_last_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "rest_skill_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 max_monster_count */ 4:
                    message.maxMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 killed_monster_count */ 9:
                    message.killedMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 buff_start_time */ 13:
                    message.buffStartTime = reader.uint32();
                    break;
                case /* optional uint32 buff_id */ 1:
                    message.buffId = reader.uint32();
                    break;
                case /* optional uint32 max_skill_count */ 10:
                    message.maxSkillCount = reader.uint32();
                    break;
                case /* optional uint32 buff_last_time */ 14:
                    message.buffLastTime = reader.uint32();
                    break;
                case /* optional uint32 rest_skill_count */ 5:
                    message.restSkillCount = reader.uint32();
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
        /* optional uint32 max_monster_count = 4; */
        if (message.maxMonsterCount !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.maxMonsterCount);
        /* optional uint32 killed_monster_count = 9; */
        if (message.killedMonsterCount !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.killedMonsterCount);
        /* optional uint32 buff_start_time = 13; */
        if (message.buffStartTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.buffStartTime);
        /* optional uint32 buff_id = 1; */
        if (message.buffId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.buffId);
        /* optional uint32 max_skill_count = 10; */
        if (message.maxSkillCount !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.maxSkillCount);
        /* optional uint32 buff_last_time = 14; */
        if (message.buffLastTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.buffLastTime);
        /* optional uint32 rest_skill_count = 5; */
        if (message.restSkillCount !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.restSkillCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryFungusFighterTrainingInfo
 */
exports.SceneGalleryFungusFighterTrainingInfo = new SceneGalleryFungusFighterTrainingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryFungusFighterCaptureInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryFungusFighterCaptureInfo", [
            { no: 13, name: "is_hide_progress", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_hide_progress */ 13:
                    message.isHideProgress = reader.bool();
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
        /* optional bool is_hide_progress = 13; */
        if (message.isHideProgress !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isHideProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryFungusFighterCaptureInfo
 */
exports.SceneGalleryFungusFighterCaptureInfo = new SceneGalleryFungusFighterCaptureInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryEffigyChallengeV2Info$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryEffigyChallengeV2Info", [
            { no: 10, name: "killed_monster_cnt", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "total_target_kill_cnt", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "scene_start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "t_remain_use_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "boss_violent_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 killed_monster_cnt */ 10:
                    message.killedMonsterCnt = reader.uint32();
                    break;
                case /* optional uint32 total_target_kill_cnt */ 15:
                    message.totalTargetKillCnt = reader.uint32();
                    break;
                case /* optional uint32 scene_start_time */ 14:
                    message.sceneStartTime = reader.uint32();
                    break;
                case /* optional uint32 t_remain_use_time */ 6:
                    message.tRemainUseTime = reader.uint32();
                    break;
                case /* optional uint32 boss_violent_level */ 9:
                    message.bossViolentLevel = reader.uint32();
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
        /* optional uint32 killed_monster_cnt = 10; */
        if (message.killedMonsterCnt !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.killedMonsterCnt);
        /* optional uint32 total_target_kill_cnt = 15; */
        if (message.totalTargetKillCnt !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.totalTargetKillCnt);
        /* optional uint32 scene_start_time = 14; */
        if (message.sceneStartTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.sceneStartTime);
        /* optional uint32 t_remain_use_time = 6; */
        if (message.tRemainUseTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.tRemainUseTime);
        /* optional uint32 boss_violent_level = 9; */
        if (message.bossViolentLevel !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.bossViolentLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryEffigyChallengeV2Info
 */
exports.SceneGalleryEffigyChallengeV2Info = new SceneGalleryEffigyChallengeV2Info$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryCharAmusementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryCharAmusementInfo", [
            { no: 2, name: "is_last_level", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "max_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_finish", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_last_level */ 2:
                    message.isLastLevel = reader.bool();
                    break;
                case /* optional uint32 max_score */ 9:
                    message.maxScore = reader.uint32();
                    break;
                case /* optional uint32 cur_score */ 14:
                    message.curScore = reader.uint32();
                    break;
                case /* optional bool is_finish */ 10:
                    message.isFinish = reader.bool();
                    break;
                case /* optional bool is_success */ 1:
                    message.isSuccess = reader.bool();
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
        /* optional bool is_last_level = 2; */
        if (message.isLastLevel !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isLastLevel);
        /* optional uint32 max_score = 9; */
        if (message.maxScore !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.maxScore);
        /* optional uint32 cur_score = 14; */
        if (message.curScore !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.curScore);
        /* optional bool is_finish = 10; */
        if (message.isFinish !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isFinish);
        /* optional bool is_success = 1; */
        if (message.isSuccess !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isSuccess);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryCharAmusementInfo
 */
exports.SceneGalleryCharAmusementInfo = new SceneGalleryCharAmusementInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryInfo", [
            { no: 5, name: "stage", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStageType", GalleryStageType] },
            { no: 4, name: "progress_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SceneGalleryProgressInfo },
            { no: 2, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "player_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "pre_start_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "balloon_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryBalloonInfo },
            { no: 7, name: "fall_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryFallInfo },
            { no: 8, name: "flower_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryFlowerInfo },
            { no: 13, name: "bullet_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryBulletInfo },
            { no: 10, name: "broken_floor_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryBrokenFloorInfo },
            { no: 6, name: "hide_and_seek_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryHideAndSeekInfo },
            { no: 1384, name: "buoyant_combat_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryBuoyantCombatInfo },
            { no: 708, name: "bounce_conjuring_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryBounceConjuringInfo },
            { no: 1997, name: "handball_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryHandballInfo },
            { no: 811, name: "sumo_info", kind: "message", oneof: "info", T: () => exports.SceneGallerySumoInfo },
            { no: 1700, name: "salvage_prevent_info", kind: "message", oneof: "info", T: () => exports.SceneGallerySalvagePreventInfo },
            { no: 759, name: "salvage_escort_info", kind: "message", oneof: "info", T: () => exports.SceneGallerySalvageEscortInfo },
            { no: 1034, name: "home_balloon_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryHomeBalloonInfo },
            { no: 2004, name: "crystal_link_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryCrystalLinkInfo },
            { no: 1953, name: "irodori_master_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryIrodoriMasterInfo },
            { no: 106, name: "luminance_stone_challenge_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryLuminanceStoneChallengeInfo },
            { no: 1456, name: "home_seek_furniture_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryHomeSeekFurnitureInfo },
            { no: 462, name: "island_party_down_hill_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryIslandPartyDownHillInfo },
            { no: 296, name: "summer_time_v2_boat_info", kind: "message", oneof: "info", T: () => exports.SceneGallerySummerTimeV2BoatInfo },
            { no: 1805, name: "island_party_raft_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryIslandPartyRaftInfo },
            { no: 1133, name: "island_party_sail_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryIslandPartySailInfo },
            { no: 1196, name: "instable_spray_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryInstaleSprayInfo },
            { no: 865, name: "muqadas_potion_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryMuqadasPotionInfo },
            { no: 1525, name: "treasure_seelie_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryTreasureSeelieInfo },
            { no: 254, name: "vintage_hunting_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryVintageHuntingInfo },
            { no: 1080, name: "wind_field_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryWindFieldInfo },
            { no: 1328, name: "fungus_fighter_training_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryFungusFighterTrainingInfo },
            { no: 882, name: "effigy_challenge_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryEffigyChallengeV2Info },
            { no: 422, name: "fungus_fighter_capture_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryFungusFighterCaptureInfo },
            { no: 1086, name: "char_amusement_info", kind: "message", oneof: "info", T: () => exports.SceneGalleryCharAmusementInfo }
        ]);
    }
    create(value) {
        const message = { progressInfoList: [], info: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GalleryStageType stage */ 5:
                    message.stage = reader.int32();
                    break;
                case /* repeated com.midnights.game.SceneGalleryProgressInfo progress_info_list */ 4:
                    message.progressInfoList.push(exports.SceneGalleryProgressInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 gallery_id */ 2:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional uint32 start_time */ 3:
                    message.startTime = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 11:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 owner_uid */ 9:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional uint32 player_count */ 1:
                    message.playerCount = reader.uint32();
                    break;
                case /* optional uint32 pre_start_end_time */ 15:
                    message.preStartEndTime = reader.uint32();
                    break;
                case /* com.midnights.game.SceneGalleryBalloonInfo balloon_info */ 14:
                    message.info = {
                        oneofKind: "balloonInfo",
                        balloonInfo: exports.SceneGalleryBalloonInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.balloonInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryFallInfo fall_info */ 7:
                    message.info = {
                        oneofKind: "fallInfo",
                        fallInfo: exports.SceneGalleryFallInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.fallInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryFlowerInfo flower_info */ 8:
                    message.info = {
                        oneofKind: "flowerInfo",
                        flowerInfo: exports.SceneGalleryFlowerInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.flowerInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryBulletInfo bullet_info */ 13:
                    message.info = {
                        oneofKind: "bulletInfo",
                        bulletInfo: exports.SceneGalleryBulletInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.bulletInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryBrokenFloorInfo broken_floor_info */ 10:
                    message.info = {
                        oneofKind: "brokenFloorInfo",
                        brokenFloorInfo: exports.SceneGalleryBrokenFloorInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.brokenFloorInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryHideAndSeekInfo hide_and_seek_info */ 6:
                    message.info = {
                        oneofKind: "hideAndSeekInfo",
                        hideAndSeekInfo: exports.SceneGalleryHideAndSeekInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.hideAndSeekInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryBuoyantCombatInfo buoyant_combat_info */ 1384:
                    message.info = {
                        oneofKind: "buoyantCombatInfo",
                        buoyantCombatInfo: exports.SceneGalleryBuoyantCombatInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.buoyantCombatInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryBounceConjuringInfo bounce_conjuring_info */ 708:
                    message.info = {
                        oneofKind: "bounceConjuringInfo",
                        bounceConjuringInfo: exports.SceneGalleryBounceConjuringInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.bounceConjuringInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryHandballInfo handball_info */ 1997:
                    message.info = {
                        oneofKind: "handballInfo",
                        handballInfo: exports.SceneGalleryHandballInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.handballInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGallerySumoInfo sumo_info */ 811:
                    message.info = {
                        oneofKind: "sumoInfo",
                        sumoInfo: exports.SceneGallerySumoInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.sumoInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGallerySalvagePreventInfo salvage_prevent_info */ 1700:
                    message.info = {
                        oneofKind: "salvagePreventInfo",
                        salvagePreventInfo: exports.SceneGallerySalvagePreventInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.salvagePreventInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGallerySalvageEscortInfo salvage_escort_info */ 759:
                    message.info = {
                        oneofKind: "salvageEscortInfo",
                        salvageEscortInfo: exports.SceneGallerySalvageEscortInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.salvageEscortInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryHomeBalloonInfo home_balloon_info */ 1034:
                    message.info = {
                        oneofKind: "homeBalloonInfo",
                        homeBalloonInfo: exports.SceneGalleryHomeBalloonInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.homeBalloonInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryCrystalLinkInfo crystal_link_info */ 2004:
                    message.info = {
                        oneofKind: "crystalLinkInfo",
                        crystalLinkInfo: exports.SceneGalleryCrystalLinkInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.crystalLinkInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryIrodoriMasterInfo irodori_master_info */ 1953:
                    message.info = {
                        oneofKind: "irodoriMasterInfo",
                        irodoriMasterInfo: exports.SceneGalleryIrodoriMasterInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.irodoriMasterInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryLuminanceStoneChallengeInfo luminance_stone_challenge_info */ 106:
                    message.info = {
                        oneofKind: "luminanceStoneChallengeInfo",
                        luminanceStoneChallengeInfo: exports.SceneGalleryLuminanceStoneChallengeInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.luminanceStoneChallengeInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryHomeSeekFurnitureInfo home_seek_furniture_info */ 1456:
                    message.info = {
                        oneofKind: "homeSeekFurnitureInfo",
                        homeSeekFurnitureInfo: exports.SceneGalleryHomeSeekFurnitureInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.homeSeekFurnitureInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryIslandPartyDownHillInfo island_party_down_hill_info */ 462:
                    message.info = {
                        oneofKind: "islandPartyDownHillInfo",
                        islandPartyDownHillInfo: exports.SceneGalleryIslandPartyDownHillInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.islandPartyDownHillInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGallerySummerTimeV2BoatInfo summer_time_v2_boat_info */ 296:
                    message.info = {
                        oneofKind: "summerTimeV2BoatInfo",
                        summerTimeV2BoatInfo: exports.SceneGallerySummerTimeV2BoatInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.summerTimeV2BoatInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryIslandPartyRaftInfo island_party_raft_info */ 1805:
                    message.info = {
                        oneofKind: "islandPartyRaftInfo",
                        islandPartyRaftInfo: exports.SceneGalleryIslandPartyRaftInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.islandPartyRaftInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryIslandPartySailInfo island_party_sail_info */ 1133:
                    message.info = {
                        oneofKind: "islandPartySailInfo",
                        islandPartySailInfo: exports.SceneGalleryIslandPartySailInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.islandPartySailInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryInstaleSprayInfo instable_spray_info */ 1196:
                    message.info = {
                        oneofKind: "instableSprayInfo",
                        instableSprayInfo: exports.SceneGalleryInstaleSprayInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.instableSprayInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryMuqadasPotionInfo muqadas_potion_info */ 865:
                    message.info = {
                        oneofKind: "muqadasPotionInfo",
                        muqadasPotionInfo: exports.SceneGalleryMuqadasPotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.muqadasPotionInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryTreasureSeelieInfo treasure_seelie_info */ 1525:
                    message.info = {
                        oneofKind: "treasureSeelieInfo",
                        treasureSeelieInfo: exports.SceneGalleryTreasureSeelieInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.treasureSeelieInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryVintageHuntingInfo vintage_hunting_info */ 254:
                    message.info = {
                        oneofKind: "vintageHuntingInfo",
                        vintageHuntingInfo: exports.SceneGalleryVintageHuntingInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.vintageHuntingInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryWindFieldInfo wind_field_info */ 1080:
                    message.info = {
                        oneofKind: "windFieldInfo",
                        windFieldInfo: exports.SceneGalleryWindFieldInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.windFieldInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryFungusFighterTrainingInfo fungus_fighter_training_info */ 1328:
                    message.info = {
                        oneofKind: "fungusFighterTrainingInfo",
                        fungusFighterTrainingInfo: exports.SceneGalleryFungusFighterTrainingInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.fungusFighterTrainingInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryEffigyChallengeV2Info effigy_challenge_info */ 882:
                    message.info = {
                        oneofKind: "effigyChallengeInfo",
                        effigyChallengeInfo: exports.SceneGalleryEffigyChallengeV2Info.internalBinaryRead(reader, reader.uint32(), options, message.info.effigyChallengeInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryFungusFighterCaptureInfo fungus_fighter_capture_info */ 422:
                    message.info = {
                        oneofKind: "fungusFighterCaptureInfo",
                        fungusFighterCaptureInfo: exports.SceneGalleryFungusFighterCaptureInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.fungusFighterCaptureInfo)
                    };
                    break;
                case /* com.midnights.game.SceneGalleryCharAmusementInfo char_amusement_info */ 1086:
                    message.info = {
                        oneofKind: "charAmusementInfo",
                        charAmusementInfo: exports.SceneGalleryCharAmusementInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.charAmusementInfo)
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
        /* optional com.midnights.game.GalleryStageType stage = 5; */
        if (message.stage !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.stage);
        /* repeated com.midnights.game.SceneGalleryProgressInfo progress_info_list = 4; */
        for (let i = 0; i < message.progressInfoList.length; i++)
            exports.SceneGalleryProgressInfo.internalBinaryWrite(message.progressInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 gallery_id = 2; */
        if (message.galleryId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional uint32 start_time = 3; */
        if (message.startTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.startTime);
        /* optional uint32 end_time = 11; */
        if (message.endTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 owner_uid = 9; */
        if (message.ownerUid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.ownerUid);
        /* optional uint32 player_count = 1; */
        if (message.playerCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.playerCount);
        /* optional uint32 pre_start_end_time = 15; */
        if (message.preStartEndTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.preStartEndTime);
        /* com.midnights.game.SceneGalleryBalloonInfo balloon_info = 14; */
        if (message.info.oneofKind === "balloonInfo")
            exports.SceneGalleryBalloonInfo.internalBinaryWrite(message.info.balloonInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryFallInfo fall_info = 7; */
        if (message.info.oneofKind === "fallInfo")
            exports.SceneGalleryFallInfo.internalBinaryWrite(message.info.fallInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryFlowerInfo flower_info = 8; */
        if (message.info.oneofKind === "flowerInfo")
            exports.SceneGalleryFlowerInfo.internalBinaryWrite(message.info.flowerInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryBulletInfo bullet_info = 13; */
        if (message.info.oneofKind === "bulletInfo")
            exports.SceneGalleryBulletInfo.internalBinaryWrite(message.info.bulletInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryBrokenFloorInfo broken_floor_info = 10; */
        if (message.info.oneofKind === "brokenFloorInfo")
            exports.SceneGalleryBrokenFloorInfo.internalBinaryWrite(message.info.brokenFloorInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryHideAndSeekInfo hide_and_seek_info = 6; */
        if (message.info.oneofKind === "hideAndSeekInfo")
            exports.SceneGalleryHideAndSeekInfo.internalBinaryWrite(message.info.hideAndSeekInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryBuoyantCombatInfo buoyant_combat_info = 1384; */
        if (message.info.oneofKind === "buoyantCombatInfo")
            exports.SceneGalleryBuoyantCombatInfo.internalBinaryWrite(message.info.buoyantCombatInfo, writer.tag(1384, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryBounceConjuringInfo bounce_conjuring_info = 708; */
        if (message.info.oneofKind === "bounceConjuringInfo")
            exports.SceneGalleryBounceConjuringInfo.internalBinaryWrite(message.info.bounceConjuringInfo, writer.tag(708, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryHandballInfo handball_info = 1997; */
        if (message.info.oneofKind === "handballInfo")
            exports.SceneGalleryHandballInfo.internalBinaryWrite(message.info.handballInfo, writer.tag(1997, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGallerySumoInfo sumo_info = 811; */
        if (message.info.oneofKind === "sumoInfo")
            exports.SceneGallerySumoInfo.internalBinaryWrite(message.info.sumoInfo, writer.tag(811, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGallerySalvagePreventInfo salvage_prevent_info = 1700; */
        if (message.info.oneofKind === "salvagePreventInfo")
            exports.SceneGallerySalvagePreventInfo.internalBinaryWrite(message.info.salvagePreventInfo, writer.tag(1700, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGallerySalvageEscortInfo salvage_escort_info = 759; */
        if (message.info.oneofKind === "salvageEscortInfo")
            exports.SceneGallerySalvageEscortInfo.internalBinaryWrite(message.info.salvageEscortInfo, writer.tag(759, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryHomeBalloonInfo home_balloon_info = 1034; */
        if (message.info.oneofKind === "homeBalloonInfo")
            exports.SceneGalleryHomeBalloonInfo.internalBinaryWrite(message.info.homeBalloonInfo, writer.tag(1034, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryCrystalLinkInfo crystal_link_info = 2004; */
        if (message.info.oneofKind === "crystalLinkInfo")
            exports.SceneGalleryCrystalLinkInfo.internalBinaryWrite(message.info.crystalLinkInfo, writer.tag(2004, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryIrodoriMasterInfo irodori_master_info = 1953; */
        if (message.info.oneofKind === "irodoriMasterInfo")
            exports.SceneGalleryIrodoriMasterInfo.internalBinaryWrite(message.info.irodoriMasterInfo, writer.tag(1953, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryLuminanceStoneChallengeInfo luminance_stone_challenge_info = 106; */
        if (message.info.oneofKind === "luminanceStoneChallengeInfo")
            exports.SceneGalleryLuminanceStoneChallengeInfo.internalBinaryWrite(message.info.luminanceStoneChallengeInfo, writer.tag(106, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryHomeSeekFurnitureInfo home_seek_furniture_info = 1456; */
        if (message.info.oneofKind === "homeSeekFurnitureInfo")
            exports.SceneGalleryHomeSeekFurnitureInfo.internalBinaryWrite(message.info.homeSeekFurnitureInfo, writer.tag(1456, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryIslandPartyDownHillInfo island_party_down_hill_info = 462; */
        if (message.info.oneofKind === "islandPartyDownHillInfo")
            exports.SceneGalleryIslandPartyDownHillInfo.internalBinaryWrite(message.info.islandPartyDownHillInfo, writer.tag(462, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGallerySummerTimeV2BoatInfo summer_time_v2_boat_info = 296; */
        if (message.info.oneofKind === "summerTimeV2BoatInfo")
            exports.SceneGallerySummerTimeV2BoatInfo.internalBinaryWrite(message.info.summerTimeV2BoatInfo, writer.tag(296, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryIslandPartyRaftInfo island_party_raft_info = 1805; */
        if (message.info.oneofKind === "islandPartyRaftInfo")
            exports.SceneGalleryIslandPartyRaftInfo.internalBinaryWrite(message.info.islandPartyRaftInfo, writer.tag(1805, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryIslandPartySailInfo island_party_sail_info = 1133; */
        if (message.info.oneofKind === "islandPartySailInfo")
            exports.SceneGalleryIslandPartySailInfo.internalBinaryWrite(message.info.islandPartySailInfo, writer.tag(1133, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryInstaleSprayInfo instable_spray_info = 1196; */
        if (message.info.oneofKind === "instableSprayInfo")
            exports.SceneGalleryInstaleSprayInfo.internalBinaryWrite(message.info.instableSprayInfo, writer.tag(1196, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryMuqadasPotionInfo muqadas_potion_info = 865; */
        if (message.info.oneofKind === "muqadasPotionInfo")
            exports.SceneGalleryMuqadasPotionInfo.internalBinaryWrite(message.info.muqadasPotionInfo, writer.tag(865, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryTreasureSeelieInfo treasure_seelie_info = 1525; */
        if (message.info.oneofKind === "treasureSeelieInfo")
            exports.SceneGalleryTreasureSeelieInfo.internalBinaryWrite(message.info.treasureSeelieInfo, writer.tag(1525, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryVintageHuntingInfo vintage_hunting_info = 254; */
        if (message.info.oneofKind === "vintageHuntingInfo")
            exports.SceneGalleryVintageHuntingInfo.internalBinaryWrite(message.info.vintageHuntingInfo, writer.tag(254, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryWindFieldInfo wind_field_info = 1080; */
        if (message.info.oneofKind === "windFieldInfo")
            exports.SceneGalleryWindFieldInfo.internalBinaryWrite(message.info.windFieldInfo, writer.tag(1080, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryFungusFighterTrainingInfo fungus_fighter_training_info = 1328; */
        if (message.info.oneofKind === "fungusFighterTrainingInfo")
            exports.SceneGalleryFungusFighterTrainingInfo.internalBinaryWrite(message.info.fungusFighterTrainingInfo, writer.tag(1328, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryEffigyChallengeV2Info effigy_challenge_info = 882; */
        if (message.info.oneofKind === "effigyChallengeInfo")
            exports.SceneGalleryEffigyChallengeV2Info.internalBinaryWrite(message.info.effigyChallengeInfo, writer.tag(882, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryFungusFighterCaptureInfo fungus_fighter_capture_info = 422; */
        if (message.info.oneofKind === "fungusFighterCaptureInfo")
            exports.SceneGalleryFungusFighterCaptureInfo.internalBinaryWrite(message.info.fungusFighterCaptureInfo, writer.tag(422, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.SceneGalleryCharAmusementInfo char_amusement_info = 1086; */
        if (message.info.oneofKind === "charAmusementInfo")
            exports.SceneGalleryCharAmusementInfo.internalBinaryWrite(message.info.charAmusementInfo, writer.tag(1086, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryInfo
 */
exports.SceneGalleryInfo = new SceneGalleryInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllSceneGalleryInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllSceneGalleryInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetAllSceneGalleryInfoReq
 */
exports.GetAllSceneGalleryInfoReq = new GetAllSceneGalleryInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllSceneGalleryInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllSceneGalleryInfoRsp", [
            { no: 12, name: "gallery_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SceneGalleryInfo },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { galleryInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.SceneGalleryInfo gallery_info_list */ 12:
                    message.galleryInfoList.push(exports.SceneGalleryInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.SceneGalleryInfo gallery_info_list = 12; */
        for (let i = 0; i < message.galleryInfoList.length; i++)
            exports.SceneGalleryInfo.internalBinaryWrite(message.galleryInfoList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GetAllSceneGalleryInfoRsp
 */
exports.GetAllSceneGalleryInfoRsp = new GetAllSceneGalleryInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFlowerCatchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryFlowerCatchNotify", [
            { no: 12, name: "cur_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "add_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_score */ 12:
                    message.curScore = reader.uint32();
                    break;
                case /* optional uint32 add_score */ 14:
                    message.addScore = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 5:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 cur_score = 12; */
        if (message.curScore !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curScore);
        /* optional uint32 add_score = 14; */
        if (message.addScore !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.addScore);
        /* optional uint32 gallery_id = 5; */
        if (message.galleryId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryFlowerCatchNotify
 */
exports.GalleryFlowerCatchNotify = new GalleryFlowerCatchNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryPreStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryPreStartNotify", [
            { no: 10, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pre_start_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 10:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional uint32 pre_start_end_time */ 9:
                    message.preStartEndTime = reader.uint32();
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
        /* optional uint32 gallery_id = 10; */
        if (message.galleryId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional uint32 pre_start_end_time = 9; */
        if (message.preStartEndTime !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.preStartEndTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryPreStartNotify
 */
exports.GalleryPreStartNotify = new GalleryPreStartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryBulletHitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryBulletHitNotify", [
            { no: 14, name: "hit_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 hit_count */ 14:
                    message.hitCount = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 12:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 hit_count = 14; */
        if (message.hitCount !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.hitCount);
        /* optional uint32 gallery_id = 12; */
        if (message.galleryId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryBulletHitNotify
 */
exports.GalleryBulletHitNotify = new GalleryBulletHitNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryBrokenFloorFallNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryBrokenFloorFallNotify", [
            { no: 3, name: "fall_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 fall_count */ 3:
                    message.fallCount = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 5:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 fall_count = 3; */
        if (message.fallCount !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.fallCount);
        /* optional uint32 gallery_id = 5; */
        if (message.galleryId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryBrokenFloorFallNotify
 */
exports.GalleryBrokenFloorFallNotify = new GalleryBrokenFloorFallNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InterruptGalleryReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InterruptGalleryReq", [
            { no: 13, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 gallery_id = 13; */
        if (message.galleryId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InterruptGalleryReq
 */
exports.InterruptGalleryReq = new InterruptGalleryReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InterruptGalleryRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InterruptGalleryRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 gallery_id */ 9:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 gallery_id = 9; */
        if (message.galleryId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InterruptGalleryRsp
 */
exports.InterruptGalleryRsp = new InterruptGalleryRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryInfoNotify", [
            { no: 4, name: "gallery_info", kind: "message", T: () => exports.SceneGalleryInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.SceneGalleryInfo gallery_info */ 4:
                    message.galleryInfo = exports.SceneGalleryInfo.internalBinaryRead(reader, reader.uint32(), options, message.galleryInfo);
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
        /* optional com.midnights.game.SceneGalleryInfo gallery_info = 4; */
        if (message.galleryInfo)
            exports.SceneGalleryInfo.internalBinaryWrite(message.galleryInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryInfoNotify
 */
exports.SceneGalleryInfoNotify = new SceneGalleryInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuoyantCombatGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuoyantCombatGallerySettleInfo", [
            { no: 12, name: "gallery_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "final_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "kill_target_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "kill_special_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gallery_multiple", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_level */ 12:
                    message.galleryLevel = reader.uint32();
                    break;
                case /* optional uint32 final_score */ 15:
                    message.finalScore = reader.uint32();
                    break;
                case /* optional uint32 kill_monster_count */ 9:
                    message.killMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 kill_target_count */ 1:
                    message.killTargetCount = reader.uint32();
                    break;
                case /* optional uint32 kill_special_monster_count */ 4:
                    message.killSpecialMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 2:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional uint32 gallery_multiple */ 11:
                    message.galleryMultiple = reader.uint32();
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
        /* optional uint32 gallery_level = 12; */
        if (message.galleryLevel !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.galleryLevel);
        /* optional uint32 final_score = 15; */
        if (message.finalScore !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* optional uint32 kill_monster_count = 9; */
        if (message.killMonsterCount !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        /* optional uint32 kill_target_count = 1; */
        if (message.killTargetCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.killTargetCount);
        /* optional uint32 kill_special_monster_count = 4; */
        if (message.killSpecialMonsterCount !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.killSpecialMonsterCount);
        /* optional uint32 gallery_id = 2; */
        if (message.galleryId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional uint32 gallery_multiple = 11; */
        if (message.galleryMultiple !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryMultiple);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuoyantCombatGallerySettleInfo
 */
exports.BuoyantCombatGallerySettleInfo = new BuoyantCombatGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BounceConjuringGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BounceConjuringGallerySettleInfo", [
            { no: 14, name: "player_info", kind: "message", T: () => define_3.OnlinePlayerInfo },
            { no: 5, name: "destroyed_machine_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "fever_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "normal_hit_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "damage", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "gadget_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "perfect_hit_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "card_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ExhibitionDisplayInfo }
        ]);
    }
    create(value) {
        const message = { gadgetCountMap: {}, cardList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.OnlinePlayerInfo player_info */ 14:
                    message.playerInfo = define_3.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* optional uint32 destroyed_machine_count */ 5:
                    message.destroyedMachineCount = reader.uint32();
                    break;
                case /* optional uint32 fever_count */ 6:
                    message.feverCount = reader.uint32();
                    break;
                case /* optional uint32 normal_hit_count */ 4:
                    message.normalHitCount = reader.uint32();
                    break;
                case /* optional float damage */ 11:
                    message.damage = reader.float();
                    break;
                case /* map<uint32, uint32> gadget_count_map */ 15:
                    this.binaryReadMap15(message.gadgetCountMap, reader, options);
                    break;
                case /* optional uint32 score */ 12:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 perfect_hit_count */ 8:
                    message.perfectHitCount = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ExhibitionDisplayInfo card_list */ 7:
                    message.cardList.push(define_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.BounceConjuringGallerySettleInfo.gadget_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.OnlinePlayerInfo player_info = 14; */
        if (message.playerInfo)
            define_3.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 destroyed_machine_count = 5; */
        if (message.destroyedMachineCount !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.destroyedMachineCount);
        /* optional uint32 fever_count = 6; */
        if (message.feverCount !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.feverCount);
        /* optional uint32 normal_hit_count = 4; */
        if (message.normalHitCount !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.normalHitCount);
        /* optional float damage = 11; */
        if (message.damage !== undefined)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.damage);
        /* map<uint32, uint32> gadget_count_map = 15; */
        for (let k of Object.keys(message.gadgetCountMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.gadgetCountMap[k]).join();
        /* optional uint32 score = 12; */
        if (message.score !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 perfect_hit_count = 8; */
        if (message.perfectHitCount !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.perfectHitCount);
        /* repeated com.midnights.game.ExhibitionDisplayInfo card_list = 7; */
        for (let i = 0; i < message.cardList.length; i++)
            define_1.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BounceConjuringGallerySettleInfo
 */
exports.BounceConjuringGallerySettleInfo = new BounceConjuringGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryBounceConjuringHitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryBounceConjuringHitNotify", [
            { no: 8, name: "add_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_perfect", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 add_score */ 8:
                    message.addScore = reader.uint32();
                    break;
                case /* optional bool is_perfect */ 5:
                    message.isPerfect = reader.bool();
                    break;
                case /* optional uint32 gallery_id */ 10:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 add_score = 8; */
        if (message.addScore !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.addScore);
        /* optional bool is_perfect = 5; */
        if (message.isPerfect !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isPerfect);
        /* optional uint32 gallery_id = 10; */
        if (message.galleryId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryBounceConjuringHitNotify
 */
exports.GalleryBounceConjuringHitNotify = new GalleryBounceConjuringHitNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GallerySumoKillMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GallerySumoKillMonsterNotify", [
            { no: 4, name: "kill_normal_mosnter_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "kill_elite_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 kill_normal_mosnter_num */ 4:
                    message.killNormalMosnterNum = reader.uint32();
                    break;
                case /* optional uint32 score */ 7:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 kill_elite_monster_num */ 14:
                    message.killEliteMonsterNum = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 11:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 kill_normal_mosnter_num = 4; */
        if (message.killNormalMosnterNum !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.killNormalMosnterNum);
        /* optional uint32 score = 7; */
        if (message.score !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 kill_elite_monster_num = 14; */
        if (message.killEliteMonsterNum !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.killEliteMonsterNum);
        /* optional uint32 gallery_id = 11; */
        if (message.galleryId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GallerySumoKillMonsterNotify
 */
exports.GallerySumoKillMonsterNotify = new GallerySumoKillMonsterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryCrystalLinkKillMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryCrystalLinkKillMonsterNotify", [
            { no: 7, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 7:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 9:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 score = 7; */
        if (message.score !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 gallery_id = 9; */
        if (message.galleryId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryCrystalLinkKillMonsterNotify
 */
exports.GalleryCrystalLinkKillMonsterNotify = new GalleryCrystalLinkKillMonsterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryCrystalLinkBuffInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryCrystalLinkBuffInfoNotify", [
            { no: 13, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_buff_valid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional bool is_buff_valid */ 11:
                    message.isBuffValid = reader.bool();
                    break;
                case /* optional uint32 buff_id */ 14:
                    message.buffId = reader.uint32();
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
        /* optional uint32 gallery_id = 13; */
        if (message.galleryId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional bool is_buff_valid = 11; */
        if (message.isBuffValid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isBuffValid);
        /* optional uint32 buff_id = 14; */
        if (message.buffId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.buffId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryCrystalLinkBuffInfoNotify
 */
exports.GalleryCrystalLinkBuffInfoNotify = new GalleryCrystalLinkBuffInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishInfo", [
            { no: 11, name: "free_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "into_bag_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 free_count */ 11:
                    message.freeCount = reader.uint32();
                    break;
                case /* optional uint32 into_bag_count */ 12:
                    message.intoBagCount = reader.uint32();
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
        /* optional uint32 free_count = 11; */
        if (message.freeCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.freeCount);
        /* optional uint32 into_bag_count = 12; */
        if (message.intoBagCount !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.intoBagCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishInfo
 */
exports.FishInfo = new FishInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishingScore$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishingScore", [
            { no: 2, name: "fishing_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_new_record", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 fishing_score */ 2:
                    message.fishingScore = reader.uint32();
                    break;
                case /* optional bool is_new_record */ 4:
                    message.isNewRecord = reader.bool();
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
        /* optional uint32 fishing_score = 2; */
        if (message.fishingScore !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.fishingScore);
        /* optional bool is_new_record = 4; */
        if (message.isNewRecord !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishingScore
 */
exports.FishingScore = new FishingScore$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishingGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishingGallerySettleInfo", [
            { no: 11, name: "fish_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.FishInfo } },
            { no: 15, name: "fishing_score_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.FishingScore }
        ]);
    }
    create(value) {
        const message = { fishMap: {}, fishingScoreList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.FishInfo> fish_map */ 11:
                    this.binaryReadMap11(message.fishMap, reader, options);
                    break;
                case /* repeated com.midnights.game.FishingScore fishing_score_list */ 15:
                    message.fishingScoreList.push(exports.FishingScore.internalBinaryRead(reader, reader.uint32(), options));
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.FishInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.FishingGallerySettleInfo.fish_map");
            }
        }
        map[key ?? 0] = val ?? exports.FishInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.FishInfo> fish_map = 11; */
        for (let k of Object.keys(message.fishMap)) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.FishInfo.internalBinaryWrite(message.fishMap[k], writer, options);
            writer.join().join();
        }
        /* repeated com.midnights.game.FishingScore fishing_score_list = 15; */
        for (let i = 0; i < message.fishingScoreList.length; i++)
            exports.FishingScore.internalBinaryWrite(message.fishingScoreList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishingGallerySettleInfo
 */
exports.FishingGallerySettleInfo = new FishingGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RacingGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RacingGallerySettleInfo", [
            { no: 6, name: "winner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", GalleryStopReason] },
            { no: 1, name: "use_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 winner_uid */ 6:
                    message.winnerUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStopReason reason */ 4:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 use_time */ 1:
                    message.useTime = reader.uint32();
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
        /* optional uint32 winner_uid = 6; */
        if (message.winnerUid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.winnerUid);
        /* optional com.midnights.game.GalleryStopReason reason = 4; */
        if (message.reason !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 use_time = 1; */
        if (message.useTime !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.useTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RacingGallerySettleInfo
 */
exports.RacingGallerySettleInfo = new RacingGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SalvagePreventGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SalvagePreventGallerySettleInfo", [
            { no: 8, name: "time_remain", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.SalvagePreventStopReason", SalvagePreventStopReason] },
            { no: 13, name: "final_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 time_remain */ 8:
                    message.timeRemain = reader.uint32();
                    break;
                case /* optional com.midnights.game.SalvagePreventStopReason reason */ 7:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 final_score */ 13:
                    message.finalScore = reader.uint32();
                    break;
                case /* optional uint32 monster_count */ 15:
                    message.monsterCount = reader.uint32();
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
        /* optional uint32 time_remain = 8; */
        if (message.timeRemain !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.timeRemain);
        /* optional com.midnights.game.SalvagePreventStopReason reason = 7; */
        if (message.reason !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 final_score = 13; */
        if (message.finalScore !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* optional uint32 monster_count = 15; */
        if (message.monsterCount !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.monsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SalvagePreventGallerySettleInfo
 */
exports.SalvagePreventGallerySettleInfo = new SalvagePreventGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SalvageEscortGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SalvageEscortGallerySettleInfo", [
            { no: 14, name: "time_remain", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.SalvageEscortStopReason", SalvageEscortStopReason] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 time_remain */ 14:
                    message.timeRemain = reader.uint32();
                    break;
                case /* optional com.midnights.game.SalvageEscortStopReason reason */ 7:
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
        /* optional uint32 time_remain = 14; */
        if (message.timeRemain !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.timeRemain);
        /* optional com.midnights.game.SalvageEscortStopReason reason = 7; */
        if (message.reason !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SalvageEscortGallerySettleInfo
 */
exports.SalvageEscortGallerySettleInfo = new SalvageEscortGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BalloonGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BalloonGallerySettleInfo", [
            { no: 8, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", GalleryStopReason] },
            { no: 10, name: "hit_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 8:
                    message.score = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStopReason reason */ 14:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 hit_count */ 10:
                    message.hitCount = reader.uint32();
                    break;
                case /* optional uint32 owner_uid */ 6:
                    message.ownerUid = reader.uint32();
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
        /* optional uint32 score = 8; */
        if (message.score !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.score);
        /* optional com.midnights.game.GalleryStopReason reason = 14; */
        if (message.reason !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 hit_count = 10; */
        if (message.hitCount !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.hitCount);
        /* optional uint32 owner_uid = 6; */
        if (message.ownerUid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.ownerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BalloonGallerySettleInfo
 */
exports.BalloonGallerySettleInfo = new BalloonGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriMasterGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriMasterGallerySettleInfo", [
            { no: 15, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", GalleryStopReason] },
            { no: 11, name: "is_finish", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "finish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "difficult", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GalleryStopReason reason */ 15:
                    message.reason = reader.int32();
                    break;
                case /* optional bool is_finish */ 11:
                    message.isFinish = reader.bool();
                    break;
                case /* optional uint32 finish_time */ 14:
                    message.finishTime = reader.uint32();
                    break;
                case /* optional uint32 difficult */ 6:
                    message.difficult = reader.uint32();
                    break;
                case /* optional uint32 level_id */ 4:
                    message.levelId = reader.uint32();
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
        /* optional com.midnights.game.GalleryStopReason reason = 15; */
        if (message.reason !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.reason);
        /* optional bool is_finish = 11; */
        if (message.isFinish !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isFinish);
        /* optional uint32 finish_time = 14; */
        if (message.finishTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.finishTime);
        /* optional uint32 difficult = 6; */
        if (message.difficult !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.difficult);
        /* optional uint32 level_id = 4; */
        if (message.levelId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriMasterGallerySettleInfo
 */
exports.IrodoriMasterGallerySettleInfo = new IrodoriMasterGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PhotoGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PhotoGallerySettleInfo", [
            { no: 7, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", GalleryStopReason] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GalleryStopReason reason */ 7:
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
        /* optional com.midnights.game.GalleryStopReason reason = 7; */
        if (message.reason !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PhotoGallerySettleInfo
 */
exports.PhotoGallerySettleInfo = new PhotoGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LuminanceStoneChallengeGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LuminanceStoneChallengeGallerySettleInfo", [
            { no: 12, name: "kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "kill_special_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "clean_mud_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", GalleryStopReason] },
            { no: 13, name: "final_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 kill_monster_count */ 12:
                    message.killMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 kill_special_monster_count */ 8:
                    message.killSpecialMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 clean_mud_count */ 10:
                    message.cleanMudCount = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 2:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStopReason reason */ 11:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 final_score */ 13:
                    message.finalScore = reader.uint32();
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
        /* optional uint32 kill_monster_count = 12; */
        if (message.killMonsterCount !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        /* optional uint32 kill_special_monster_count = 8; */
        if (message.killSpecialMonsterCount !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.killSpecialMonsterCount);
        /* optional uint32 clean_mud_count = 10; */
        if (message.cleanMudCount !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.cleanMudCount);
        /* optional uint32 gallery_id = 2; */
        if (message.galleryId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional com.midnights.game.GalleryStopReason reason = 11; */
        if (message.reason !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 final_score = 13; */
        if (message.finalScore !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.finalScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LuminanceStoneChallengeGallerySettleInfo
 */
exports.LuminanceStoneChallengeGallerySettleInfo = new LuminanceStoneChallengeGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HomeGalleryInPlayingNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeGalleryInPlayingNotify", [
            { no: 13, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 gallery_id = 13; */
        if (message.galleryId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeGalleryInPlayingNotify
 */
exports.HomeGalleryInPlayingNotify = new HomeGalleryInPlayingNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2BoatGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SummerTimeV2BoatGallerySettleInfo", [
            { no: 7, name: "param1", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "param2", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", GalleryStopReason] },
            { no: 6, name: "param3", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "used_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 param1 */ 7:
                    message.param1 = reader.uint32();
                    break;
                case /* optional uint32 param2 */ 2:
                    message.param2 = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStopReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 param3 */ 6:
                    message.param3 = reader.uint32();
                    break;
                case /* optional uint32 used_time */ 12:
                    message.usedTime = reader.uint32();
                    break;
                case /* optional uint32 gallery_id */ 1:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 param1 = 7; */
        if (message.param1 !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.param1);
        /* optional uint32 param2 = 2; */
        if (message.param2 !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.param2);
        /* optional com.midnights.game.GalleryStopReason reason = 3; */
        if (message.reason !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 param3 = 6; */
        if (message.param3 !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.param3);
        /* optional uint32 used_time = 12; */
        if (message.usedTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.usedTime);
        /* optional uint32 gallery_id = 1; */
        if (message.galleryId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SummerTimeV2BoatGallerySettleInfo
 */
exports.SummerTimeV2BoatGallerySettleInfo = new SummerTimeV2BoatGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryIslandPartyDownHillInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryIslandPartyDownHillInfoNotify", [
            { no: 2, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "total_kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 2:
                    message.galleryId = reader.uint32();
                    break;
                case /* optional uint32 coin */ 9:
                    message.coin = reader.uint32();
                    break;
                case /* optional uint32 total_kill_monster_count */ 11:
                    message.totalKillMonsterCount = reader.uint32();
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
        /* optional uint32 gallery_id = 2; */
        if (message.galleryId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* optional uint32 coin = 9; */
        if (message.coin !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.coin);
        /* optional uint32 total_kill_monster_count = 11; */
        if (message.totalKillMonsterCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.totalKillMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryIslandPartyDownHillInfoNotify
 */
exports.GalleryIslandPartyDownHillInfoNotify = new GalleryIslandPartyDownHillInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartyRaftInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IslandPartyRaftInfoNotify", [
            { no: 7, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "fuel", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "component", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 coin */ 15:
                    message.coin = reader.uint32();
                    break;
                case /* optional uint32 fuel */ 3:
                    message.fuel = reader.uint32();
                    break;
                case /* optional uint32 component */ 13:
                    message.component = reader.uint32();
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
        /* optional uint32 coin = 15; */
        if (message.coin !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.coin);
        /* optional uint32 fuel = 3; */
        if (message.fuel !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.fuel);
        /* optional uint32 component = 13; */
        if (message.component !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.component);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IslandPartyRaftInfoNotify
 */
exports.IslandPartyRaftInfoNotify = new IslandPartyRaftInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartySailInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IslandPartySailInfoNotify", [
            { no: 10, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "stage", kind: "enum", opt: true, T: () => ["com.midnights.game.IslandPartySailStage", IslandPartySailStage, "ISLAND_PARTY_SAIL_STAGE_"] },
            { no: 4, name: "kill_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 coin */ 10:
                    message.coin = reader.uint32();
                    break;
                case /* optional com.midnights.game.IslandPartySailStage stage */ 8:
                    message.stage = reader.int32();
                    break;
                case /* optional uint32 kill_monster_count */ 4:
                    message.killMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 progress */ 15:
                    message.progress = reader.uint32();
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
        /* optional uint32 coin = 10; */
        if (message.coin !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.coin);
        /* optional com.midnights.game.IslandPartySailStage stage = 8; */
        if (message.stage !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.stage);
        /* optional uint32 kill_monster_count = 4; */
        if (message.killMonsterCount !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        /* optional uint32 progress = 15; */
        if (message.progress !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IslandPartySailInfoNotify
 */
exports.IslandPartySailInfoNotify = new IslandPartySailInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartyGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IslandPartyGallerySettleInfo", [
            { no: 13, name: "player_info", kind: "message", T: () => define_3.OnlinePlayerInfo },
            { no: 11, name: "card_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ExhibitionDisplayInfo }
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
                case /* optional com.midnights.game.OnlinePlayerInfo player_info */ 13:
                    message.playerInfo = define_3.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* repeated com.midnights.game.ExhibitionDisplayInfo card_list */ 11:
                    message.cardList.push(define_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional com.midnights.game.OnlinePlayerInfo player_info = 13; */
        if (message.playerInfo)
            define_3.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ExhibitionDisplayInfo card_list = 11; */
        for (let i = 0; i < message.cardList.length; i++)
            define_1.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IslandPartyGallerySettleInfo
 */
exports.IslandPartyGallerySettleInfo = new IslandPartyGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BackRebornGalleryReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BackRebornGalleryReq", [
            { no: 15, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gallery_id */ 15:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 gallery_id = 15; */
        if (message.galleryId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BackRebornGalleryReq
 */
exports.BackRebornGalleryReq = new BackRebornGalleryReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BackRebornGalleryRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BackRebornGalleryRsp", [
            { no: 9, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 gallery_id */ 9:
                    message.galleryId = reader.uint32();
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
        /* optional uint32 gallery_id = 9; */
        if (message.galleryId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.galleryId);
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
 * @generated MessageType for protobuf message com.midnights.game.BackRebornGalleryRsp
 */
exports.BackRebornGalleryRsp = new BackRebornGalleryRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GalleryWillStartCountdownNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GalleryWillStartCountdownNotify", [
            { no: 11, name: "start_source", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStartSource", GalleryStartSource] },
            { no: 12, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_end", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "gallery_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GalleryStartSource start_source */ 11:
                    message.startSource = reader.int32();
                    break;
                case /* optional uint32 end_time */ 12:
                    message.endTime = reader.uint32();
                    break;
                case /* optional bool is_end */ 7:
                    message.isEnd = reader.bool();
                    break;
                case /* optional uint32 gallery_id */ 14:
                    message.galleryId = reader.uint32();
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
        /* optional com.midnights.game.GalleryStartSource start_source = 11; */
        if (message.startSource !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.startSource);
        /* optional uint32 end_time = 12; */
        if (message.endTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional bool is_end = 7; */
        if (message.isEnd !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isEnd);
        /* optional uint32 gallery_id = 14; */
        if (message.galleryId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GalleryWillStartCountdownNotify
 */
exports.GalleryWillStartCountdownNotify = new GalleryWillStartCountdownNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstableSprayGalleryInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InstableSprayGalleryInfoNotify", [
            { no: 3, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 3:
                    message.score = reader.uint32();
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
        /* optional uint32 score = 3; */
        if (message.score !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InstableSprayGalleryInfoNotify
 */
exports.InstableSprayGalleryInfoNotify = new InstableSprayGalleryInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryMuqadasPotionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryMuqadasPotionInfo", [
            { no: 6, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "capture_weakness_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "skill_energy", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "skill_use_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 score */ 6:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 capture_weakness_count */ 4:
                    message.captureWeaknessCount = reader.uint32();
                    break;
                case /* optional uint32 skill_energy */ 10:
                    message.skillEnergy = reader.uint32();
                    break;
                case /* optional uint32 skill_use_limit */ 9:
                    message.skillUseLimit = reader.uint32();
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
        /* optional uint32 score = 6; */
        if (message.score !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 capture_weakness_count = 4; */
        if (message.captureWeaknessCount !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.captureWeaknessCount);
        /* optional uint32 skill_energy = 10; */
        if (message.skillEnergy !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.skillEnergy);
        /* optional uint32 skill_use_limit = 9; */
        if (message.skillUseLimit !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.skillUseLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryMuqadasPotionInfo
 */
exports.SceneGalleryMuqadasPotionInfo = new SceneGalleryMuqadasPotionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VintageHuntingFirstStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VintageHuntingFirstStageInfo", [
            { no: 15, name: "timid_cnt", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "brutal_cnt", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "elite_cnt", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 timid_cnt */ 15:
                    message.timidCnt = reader.uint32();
                    break;
                case /* optional uint32 brutal_cnt */ 7:
                    message.brutalCnt = reader.uint32();
                    break;
                case /* optional uint32 score */ 14:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 elite_cnt */ 11:
                    message.eliteCnt = reader.uint32();
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
        /* optional uint32 timid_cnt = 15; */
        if (message.timidCnt !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.timidCnt);
        /* optional uint32 brutal_cnt = 7; */
        if (message.brutalCnt !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.brutalCnt);
        /* optional uint32 score = 14; */
        if (message.score !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 elite_cnt = 11; */
        if (message.eliteCnt !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.eliteCnt);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VintageHuntingFirstStageInfo
 */
exports.VintageHuntingFirstStageInfo = new VintageHuntingFirstStageInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VintageHuntingSecondStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VintageHuntingSecondStageInfo", [
            { no: 11, name: "total_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "capture_animal_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "left_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 total_num */ 11:
                    message.totalNum = reader.uint32();
                    break;
                case /* optional uint32 capture_animal_num */ 13:
                    message.captureAnimalNum = reader.uint32();
                    break;
                case /* optional uint32 left_num */ 3:
                    message.leftNum = reader.uint32();
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
        /* optional uint32 total_num = 11; */
        if (message.totalNum !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.totalNum);
        /* optional uint32 capture_animal_num = 13; */
        if (message.captureAnimalNum !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.captureAnimalNum);
        /* optional uint32 left_num = 3; */
        if (message.leftNum !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.leftNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VintageHuntingSecondStageInfo
 */
exports.VintageHuntingSecondStageInfo = new VintageHuntingSecondStageInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VintageHuntingThirdStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VintageHuntingThirdStageInfo", []);
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
 * @generated MessageType for protobuf message com.midnights.game.VintageHuntingThirdStageInfo
 */
exports.VintageHuntingThirdStageInfo = new VintageHuntingThirdStageInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryVintageHuntingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGalleryVintageHuntingInfo", [
            { no: 7, name: "stage_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "first_stage_info", kind: "message", oneof: "info", T: () => exports.VintageHuntingFirstStageInfo },
            { no: 15, name: "second_stage_info", kind: "message", oneof: "info", T: () => exports.VintageHuntingSecondStageInfo },
            { no: 12, name: "third_stage_info", kind: "message", oneof: "info", T: () => exports.VintageHuntingThirdStageInfo }
        ]);
    }
    create(value) {
        const message = { info: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 stage_id */ 7:
                    message.stageId = reader.uint32();
                    break;
                case /* com.midnights.game.VintageHuntingFirstStageInfo first_stage_info */ 2:
                    message.info = {
                        oneofKind: "firstStageInfo",
                        firstStageInfo: exports.VintageHuntingFirstStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.firstStageInfo)
                    };
                    break;
                case /* com.midnights.game.VintageHuntingSecondStageInfo second_stage_info */ 15:
                    message.info = {
                        oneofKind: "secondStageInfo",
                        secondStageInfo: exports.VintageHuntingSecondStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.secondStageInfo)
                    };
                    break;
                case /* com.midnights.game.VintageHuntingThirdStageInfo third_stage_info */ 12:
                    message.info = {
                        oneofKind: "thirdStageInfo",
                        thirdStageInfo: exports.VintageHuntingThirdStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.thirdStageInfo)
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
        /* optional uint32 stage_id = 7; */
        if (message.stageId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.stageId);
        /* com.midnights.game.VintageHuntingFirstStageInfo first_stage_info = 2; */
        if (message.info.oneofKind === "firstStageInfo")
            exports.VintageHuntingFirstStageInfo.internalBinaryWrite(message.info.firstStageInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.VintageHuntingSecondStageInfo second_stage_info = 15; */
        if (message.info.oneofKind === "secondStageInfo")
            exports.VintageHuntingSecondStageInfo.internalBinaryWrite(message.info.secondStageInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.VintageHuntingThirdStageInfo third_stage_info = 12; */
        if (message.info.oneofKind === "thirdStageInfo")
            exports.VintageHuntingThirdStageInfo.internalBinaryWrite(message.info.thirdStageInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGalleryVintageHuntingInfo
 */
exports.SceneGalleryVintageHuntingInfo = new SceneGalleryVintageHuntingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindFieldGalleryInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WindFieldGalleryInfoNotify", [
            { no: 3, name: "show_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "killed_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "coin_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "challenge_ball_max_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "challenge_total_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "challenge_ball_cur_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "challenge_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "element_ball_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 show_id */ 3:
                    message.showId = reader.uint32();
                    break;
                case /* optional uint32 killed_monster_num */ 7:
                    message.killedMonsterNum = reader.uint32();
                    break;
                case /* optional uint32 coin_num */ 9:
                    message.coinNum = reader.uint32();
                    break;
                case /* optional uint32 challenge_ball_max_count */ 1:
                    message.challengeBallMaxCount = reader.uint32();
                    break;
                case /* optional uint32 challenge_total_time */ 5:
                    message.challengeTotalTime = reader.uint32();
                    break;
                case /* optional uint32 challenge_ball_cur_count */ 10:
                    message.challengeBallCurCount = reader.uint32();
                    break;
                case /* optional uint32 challenge_timestamp */ 4:
                    message.challengeTimestamp = reader.uint32();
                    break;
                case /* optional uint32 element_ball_num */ 14:
                    message.elementBallNum = reader.uint32();
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
        /* optional uint32 show_id = 3; */
        if (message.showId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.showId);
        /* optional uint32 killed_monster_num = 7; */
        if (message.killedMonsterNum !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.killedMonsterNum);
        /* optional uint32 coin_num = 9; */
        if (message.coinNum !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.coinNum);
        /* optional uint32 challenge_ball_max_count = 1; */
        if (message.challengeBallMaxCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.challengeBallMaxCount);
        /* optional uint32 challenge_total_time = 5; */
        if (message.challengeTotalTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.challengeTotalTime);
        /* optional uint32 challenge_ball_cur_count = 10; */
        if (message.challengeBallCurCount !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.challengeBallCurCount);
        /* optional uint32 challenge_timestamp = 4; */
        if (message.challengeTimestamp !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.challengeTimestamp);
        /* optional uint32 element_ball_num = 14; */
        if (message.elementBallNum !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.elementBallNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WindFieldGalleryInfoNotify
 */
exports.WindFieldGalleryInfoNotify = new WindFieldGalleryInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindFieldGalleryChallengeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WindFieldGalleryChallengeInfoNotify", [
            { no: 6, name: "challenge_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_start", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "show_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "challenge_total_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "challenge_ball_max_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "challenge_ball_cur_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 challenge_timestamp */ 6:
                    message.challengeTimestamp = reader.uint32();
                    break;
                case /* optional bool is_start */ 8:
                    message.isStart = reader.bool();
                    break;
                case /* optional uint32 show_id */ 12:
                    message.showId = reader.uint32();
                    break;
                case /* optional bool is_success */ 7:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 challenge_total_time */ 13:
                    message.challengeTotalTime = reader.uint32();
                    break;
                case /* optional uint32 challenge_ball_max_count */ 11:
                    message.challengeBallMaxCount = reader.uint32();
                    break;
                case /* optional uint32 challenge_ball_cur_count */ 1:
                    message.challengeBallCurCount = reader.uint32();
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
        /* optional uint32 challenge_timestamp = 6; */
        if (message.challengeTimestamp !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.challengeTimestamp);
        /* optional bool is_start = 8; */
        if (message.isStart !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isStart);
        /* optional uint32 show_id = 12; */
        if (message.showId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.showId);
        /* optional bool is_success = 7; */
        if (message.isSuccess !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 challenge_total_time = 13; */
        if (message.challengeTotalTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.challengeTotalTime);
        /* optional uint32 challenge_ball_max_count = 11; */
        if (message.challengeBallMaxCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.challengeBallMaxCount);
        /* optional uint32 challenge_ball_cur_count = 1; */
        if (message.challengeBallCurCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.challengeBallCurCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WindFieldGalleryChallengeInfoNotify
 */
exports.WindFieldGalleryChallengeInfoNotify = new WindFieldGalleryChallengeInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterTrainingInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FungusFighterTrainingInfoNotify", [
            { no: 3, name: "buff_start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "max_skill_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "max_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "buff_last_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "rest_skill_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "killed_monster_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 buff_start_time */ 3:
                    message.buffStartTime = reader.uint32();
                    break;
                case /* optional uint32 max_skill_count */ 7:
                    message.maxSkillCount = reader.uint32();
                    break;
                case /* optional uint32 max_monster_count */ 8:
                    message.maxMonsterCount = reader.uint32();
                    break;
                case /* optional uint32 buff_id */ 14:
                    message.buffId = reader.uint32();
                    break;
                case /* optional uint32 buff_last_time */ 4:
                    message.buffLastTime = reader.uint32();
                    break;
                case /* optional uint32 rest_skill_count */ 6:
                    message.restSkillCount = reader.uint32();
                    break;
                case /* optional uint32 killed_monster_count */ 15:
                    message.killedMonsterCount = reader.uint32();
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
        /* optional uint32 buff_start_time = 3; */
        if (message.buffStartTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.buffStartTime);
        /* optional uint32 max_skill_count = 7; */
        if (message.maxSkillCount !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.maxSkillCount);
        /* optional uint32 max_monster_count = 8; */
        if (message.maxMonsterCount !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.maxMonsterCount);
        /* optional uint32 buff_id = 14; */
        if (message.buffId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.buffId);
        /* optional uint32 buff_last_time = 4; */
        if (message.buffLastTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.buffLastTime);
        /* optional uint32 rest_skill_count = 6; */
        if (message.restSkillCount !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.restSkillCount);
        /* optional uint32 killed_monster_count = 15; */
        if (message.killedMonsterCount !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.killedMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FungusFighterTrainingInfoNotify
 */
exports.FungusFighterTrainingInfoNotify = new FungusFighterTrainingInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterTrainingSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FungusFighterTrainingSettleInfo", [
            { no: 15, name: "used_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GalleryStopReason", GalleryStopReason] },
            { no: 1, name: "transaction", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 used_time */ 15:
                    message.usedTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.GalleryStopReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* optional string transaction */ 1:
                    message.transaction = reader.string();
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
        /* optional uint32 used_time = 15; */
        if (message.usedTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.usedTime);
        /* optional com.midnights.game.GalleryStopReason reason = 3; */
        if (message.reason !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.reason);
        /* optional string transaction = 1; */
        if (message.transaction !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.transaction);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FungusFighterTrainingSettleInfo
 */
exports.FungusFighterTrainingSettleInfo = new FungusFighterTrainingSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FungusCaptureSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FungusCaptureSettleNotify", [
            { no: 2, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_success */ 2:
                    message.isSuccess = reader.bool();
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
        /* optional bool is_success = 2; */
        if (message.isSuccess !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isSuccess);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FungusCaptureSettleNotify
 */
exports.FungusCaptureSettleNotify = new FungusCaptureSettleNotify$Type();
