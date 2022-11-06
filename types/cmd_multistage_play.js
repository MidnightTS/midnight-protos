"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleFleurFairInfo = exports.InBattleMechanicusInfo = exports.InBattleMechanicusCardInfo = exports.InBattleMechanicusMonsterInfo = exports.InBattleMechanicusPlayerInfo = exports.InBattleMechanicusBuildingInfo = exports.HideAndSeekStageType = exports.InBattleMechanicusCardChallengeState = exports.InBattleMechanicusStageType = exports.MultistagePlayType = exports.IrodoriChessLeftMonsterNotify_CmdId = exports.IrodoriChessPlayerInfoNotify_CmdId = exports.GlobalBuildingInfoNotify_CmdId = exports.ChessSelectedCardsNotify_CmdId = exports.ChessEscapedMonstersNotify_CmdId = exports.ChessLeftMonstersNotify_CmdId = exports.ChessPlayerInfoNotify_CmdId = exports.ChessManualRefreshCardsRsp_CmdId = exports.ChessManualRefreshCardsReq_CmdId = exports.ChessPickCardNotify_CmdId = exports.ChessPickCardRsp_CmdId = exports.ChessPickCardReq_CmdId = exports.HideAndSeekPlayerSetAvatarNotify_CmdId = exports.HideAndSeekPlayerReadyNotify_CmdId = exports.HideAndSeekSettleNotify_CmdId = exports.HideAndSeekSettleNotify_SettleReason = exports.HideAndSeekSetReadyRsp_CmdId = exports.HideAndSeekSetReadyReq_CmdId = exports.HideAndSeekSelectAvatarRsp_CmdId = exports.HideAndSeekSelectAvatarReq_CmdId = exports.FleurFairFinishGalleryStageNotify_CmdId = exports.FleurFairStageSettleNotify_CmdId = exports.FleurFairBuffEnergyNotify_CmdId = exports.MultistagePlayEndNotify_CmdId = exports.MultistagePlayStageEndNotify_CmdId = exports.MultistagePlaySettleNotify_CmdId = exports.InBattleMechanicusSettleNotify_CmdId = exports.MultistagePlayFinishStageRsp_CmdId = exports.InBattleMechanicusCardResultNotify_CmdId = exports.InBattleMechanicusConfirmCardNotify_CmdId = exports.InBattleMechanicusConfirmCardRsp_CmdId = exports.InBattleMechanicusConfirmCardReq_CmdId = exports.InBattleMechanicusPickCardNotify_CmdId = exports.InBattleMechanicusPickCardRsp_CmdId = exports.InBattleMechanicusPickCardReq_CmdId = exports.InBattleMechanicusBuildingPointsNotify_CmdId = exports.InBattleMechanicusLeftMonsterNotify_CmdId = exports.InBattleMechanicusExcapeMonsterNotify_CmdId = exports.MultistagePlayFinishStageReq_CmdId = exports.MultistagePlayInfoNotify_CmdId = void 0;
exports.ChessPickCardNotify = exports.ChessPickCardRsp = exports.ChessPickCardReq = exports.ChessNormalCardInfo = exports.ChessMysteryInfo = exports.ChessEntranceDetailInfo = exports.ChessEntranceInfo = exports.ChessMonsterInfo = exports.ChessPlayerInfo = exports.InBattleChessSettleInfo = exports.InBattleChessInfo = exports.ChessCardInfo = exports.HideAndSeekPlayerSetAvatarNotify = exports.HideAndSeekPlayerReadyNotify = exports.HideAndSeekSettleNotify = exports.HideAndSeekSettleInfo = exports.HideAndSeekSetReadyRsp = exports.HideAndSeekSetReadyReq = exports.HideAndSeekSelectAvatarRsp = exports.HideAndSeekSelectAvatarReq = exports.HideAndSeekStageInfo = exports.HideAndSeekPlayerBattleInfo = exports.FleurFairFinishGalleryStageNotify = exports.FleurFairStageSettleNotify = exports.FleurFairBossSettleInfo = exports.FleurFairPlayerStatInfo = exports.FleurFairGallerySettleInfo = exports.FleurFairBuffEnergyNotify = exports.MultistagePlayEndNotify = exports.MultistagePlayStageEndNotify = exports.MultistagePlaySettleNotify = exports.InBattleMechanicusSettleInfo = exports.InBattleMechanicusSettleNotify = exports.MultistageSettleWatcherInfo = exports.MultistagePlayFinishStageRsp = exports.InBattleMechanicusCardResultNotify = exports.InBattleMechanicusConfirmCardNotify = exports.InBattleMechanicusConfirmCardRsp = exports.InBattleMechanicusConfirmCardReq = exports.InBattleMechanicusPickCardNotify = exports.InBattleMechanicusPickCardRsp = exports.InBattleMechanicusPickCardReq = exports.InBattleMechanicusBuildingPointsNotify = exports.InBattleMechanicusLeftMonsterNotify = exports.InBattleMechanicusExcapeMonsterNotify = exports.MultistagePlayFinishStageReq = exports.MultistagePlayInfoNotify = exports.MultistagePlayInfo = exports.CharAmusementInfo = exports.CharAmusementAvatarInfo = void 0;
exports.IrodoriChessLeftMonsterNotify = exports.IrodoriChessPlayerInfoNotify = exports.IrodoriChessPlayerInfo = exports.InBattleIrodoriChessSettleInfo = exports.IrodoriChessMysteryInfo = exports.IrodoriChessEntranceDetailInfo = exports.IrodoriChessEntranceInfo = exports.IrodoriChessMonsterInfo = exports.InBattleIrodoriChessInfo = exports.GlobalBuildingInfoNotify = exports.ChessSelectedCardsNotify = exports.ChessEscapedMonstersNotify = exports.ChessLeftMonstersNotify = exports.ChessPlayerInfoNotify = exports.ChessManualRefreshCardsRsp = exports.ChessManualRefreshCardsReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.MultistagePlayInfoNotify.CmdId
 */
var MultistagePlayInfoNotify_CmdId;
(function (MultistagePlayInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayInfoNotify_CmdId[MultistagePlayInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5372;
     */
    MultistagePlayInfoNotify_CmdId[MultistagePlayInfoNotify_CmdId["CMD_ID"] = 5372] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayInfoNotify_CmdId[MultistagePlayInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MultistagePlayInfoNotify_CmdId[MultistagePlayInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MultistagePlayInfoNotify_CmdId = exports.MultistagePlayInfoNotify_CmdId || (exports.MultistagePlayInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MultistagePlayFinishStageReq.CmdId
 */
var MultistagePlayFinishStageReq_CmdId;
(function (MultistagePlayFinishStageReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayFinishStageReq_CmdId[MultistagePlayFinishStageReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5398;
     */
    MultistagePlayFinishStageReq_CmdId[MultistagePlayFinishStageReq_CmdId["CMD_ID"] = 5398] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayFinishStageReq_CmdId[MultistagePlayFinishStageReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MultistagePlayFinishStageReq_CmdId[MultistagePlayFinishStageReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MultistagePlayFinishStageReq_CmdId[MultistagePlayFinishStageReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MultistagePlayFinishStageReq_CmdId = exports.MultistagePlayFinishStageReq_CmdId || (exports.MultistagePlayFinishStageReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusExcapeMonsterNotify.CmdId
 */
var InBattleMechanicusExcapeMonsterNotify_CmdId;
(function (InBattleMechanicusExcapeMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusExcapeMonsterNotify_CmdId[InBattleMechanicusExcapeMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5307;
     */
    InBattleMechanicusExcapeMonsterNotify_CmdId[InBattleMechanicusExcapeMonsterNotify_CmdId["CMD_ID"] = 5307] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusExcapeMonsterNotify_CmdId[InBattleMechanicusExcapeMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusExcapeMonsterNotify_CmdId[InBattleMechanicusExcapeMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusExcapeMonsterNotify_CmdId = exports.InBattleMechanicusExcapeMonsterNotify_CmdId || (exports.InBattleMechanicusExcapeMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusLeftMonsterNotify.CmdId
 */
var InBattleMechanicusLeftMonsterNotify_CmdId;
(function (InBattleMechanicusLeftMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusLeftMonsterNotify_CmdId[InBattleMechanicusLeftMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5321;
     */
    InBattleMechanicusLeftMonsterNotify_CmdId[InBattleMechanicusLeftMonsterNotify_CmdId["CMD_ID"] = 5321] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusLeftMonsterNotify_CmdId[InBattleMechanicusLeftMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusLeftMonsterNotify_CmdId[InBattleMechanicusLeftMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusLeftMonsterNotify_CmdId = exports.InBattleMechanicusLeftMonsterNotify_CmdId || (exports.InBattleMechanicusLeftMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusBuildingPointsNotify.CmdId
 */
var InBattleMechanicusBuildingPointsNotify_CmdId;
(function (InBattleMechanicusBuildingPointsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusBuildingPointsNotify_CmdId[InBattleMechanicusBuildingPointsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5303;
     */
    InBattleMechanicusBuildingPointsNotify_CmdId[InBattleMechanicusBuildingPointsNotify_CmdId["CMD_ID"] = 5303] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusBuildingPointsNotify_CmdId[InBattleMechanicusBuildingPointsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusBuildingPointsNotify_CmdId[InBattleMechanicusBuildingPointsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusBuildingPointsNotify_CmdId = exports.InBattleMechanicusBuildingPointsNotify_CmdId || (exports.InBattleMechanicusBuildingPointsNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusPickCardReq.CmdId
 */
var InBattleMechanicusPickCardReq_CmdId;
(function (InBattleMechanicusPickCardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusPickCardReq_CmdId[InBattleMechanicusPickCardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5390;
     */
    InBattleMechanicusPickCardReq_CmdId[InBattleMechanicusPickCardReq_CmdId["CMD_ID"] = 5390] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusPickCardReq_CmdId[InBattleMechanicusPickCardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusPickCardReq_CmdId[InBattleMechanicusPickCardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusPickCardReq_CmdId[InBattleMechanicusPickCardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(InBattleMechanicusPickCardReq_CmdId = exports.InBattleMechanicusPickCardReq_CmdId || (exports.InBattleMechanicusPickCardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusPickCardRsp.CmdId
 */
var InBattleMechanicusPickCardRsp_CmdId;
(function (InBattleMechanicusPickCardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusPickCardRsp_CmdId[InBattleMechanicusPickCardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5373;
     */
    InBattleMechanicusPickCardRsp_CmdId[InBattleMechanicusPickCardRsp_CmdId["CMD_ID"] = 5373] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusPickCardRsp_CmdId[InBattleMechanicusPickCardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusPickCardRsp_CmdId[InBattleMechanicusPickCardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusPickCardRsp_CmdId = exports.InBattleMechanicusPickCardRsp_CmdId || (exports.InBattleMechanicusPickCardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusPickCardNotify.CmdId
 */
var InBattleMechanicusPickCardNotify_CmdId;
(function (InBattleMechanicusPickCardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusPickCardNotify_CmdId[InBattleMechanicusPickCardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5399;
     */
    InBattleMechanicusPickCardNotify_CmdId[InBattleMechanicusPickCardNotify_CmdId["CMD_ID"] = 5399] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusPickCardNotify_CmdId[InBattleMechanicusPickCardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusPickCardNotify_CmdId[InBattleMechanicusPickCardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusPickCardNotify_CmdId = exports.InBattleMechanicusPickCardNotify_CmdId || (exports.InBattleMechanicusPickCardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusConfirmCardReq.CmdId
 */
var InBattleMechanicusConfirmCardReq_CmdId;
(function (InBattleMechanicusConfirmCardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusConfirmCardReq_CmdId[InBattleMechanicusConfirmCardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5331;
     */
    InBattleMechanicusConfirmCardReq_CmdId[InBattleMechanicusConfirmCardReq_CmdId["CMD_ID"] = 5331] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusConfirmCardReq_CmdId[InBattleMechanicusConfirmCardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusConfirmCardReq_CmdId[InBattleMechanicusConfirmCardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusConfirmCardReq_CmdId[InBattleMechanicusConfirmCardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(InBattleMechanicusConfirmCardReq_CmdId = exports.InBattleMechanicusConfirmCardReq_CmdId || (exports.InBattleMechanicusConfirmCardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusConfirmCardRsp.CmdId
 */
var InBattleMechanicusConfirmCardRsp_CmdId;
(function (InBattleMechanicusConfirmCardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusConfirmCardRsp_CmdId[InBattleMechanicusConfirmCardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5375;
     */
    InBattleMechanicusConfirmCardRsp_CmdId[InBattleMechanicusConfirmCardRsp_CmdId["CMD_ID"] = 5375] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusConfirmCardRsp_CmdId[InBattleMechanicusConfirmCardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusConfirmCardRsp_CmdId[InBattleMechanicusConfirmCardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusConfirmCardRsp_CmdId = exports.InBattleMechanicusConfirmCardRsp_CmdId || (exports.InBattleMechanicusConfirmCardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusConfirmCardNotify.CmdId
 */
var InBattleMechanicusConfirmCardNotify_CmdId;
(function (InBattleMechanicusConfirmCardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusConfirmCardNotify_CmdId[InBattleMechanicusConfirmCardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5348;
     */
    InBattleMechanicusConfirmCardNotify_CmdId[InBattleMechanicusConfirmCardNotify_CmdId["CMD_ID"] = 5348] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusConfirmCardNotify_CmdId[InBattleMechanicusConfirmCardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusConfirmCardNotify_CmdId[InBattleMechanicusConfirmCardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusConfirmCardNotify_CmdId = exports.InBattleMechanicusConfirmCardNotify_CmdId || (exports.InBattleMechanicusConfirmCardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusCardResultNotify.CmdId
 */
var InBattleMechanicusCardResultNotify_CmdId;
(function (InBattleMechanicusCardResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusCardResultNotify_CmdId[InBattleMechanicusCardResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5397;
     */
    InBattleMechanicusCardResultNotify_CmdId[InBattleMechanicusCardResultNotify_CmdId["CMD_ID"] = 5397] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusCardResultNotify_CmdId[InBattleMechanicusCardResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusCardResultNotify_CmdId[InBattleMechanicusCardResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusCardResultNotify_CmdId = exports.InBattleMechanicusCardResultNotify_CmdId || (exports.InBattleMechanicusCardResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MultistagePlayFinishStageRsp.CmdId
 */
var MultistagePlayFinishStageRsp_CmdId;
(function (MultistagePlayFinishStageRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayFinishStageRsp_CmdId[MultistagePlayFinishStageRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5381;
     */
    MultistagePlayFinishStageRsp_CmdId[MultistagePlayFinishStageRsp_CmdId["CMD_ID"] = 5381] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayFinishStageRsp_CmdId[MultistagePlayFinishStageRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MultistagePlayFinishStageRsp_CmdId[MultistagePlayFinishStageRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MultistagePlayFinishStageRsp_CmdId = exports.MultistagePlayFinishStageRsp_CmdId || (exports.MultistagePlayFinishStageRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusSettleNotify.CmdId
 */
var InBattleMechanicusSettleNotify_CmdId;
(function (InBattleMechanicusSettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusSettleNotify_CmdId[InBattleMechanicusSettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5305;
     */
    InBattleMechanicusSettleNotify_CmdId[InBattleMechanicusSettleNotify_CmdId["CMD_ID"] = 5305] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InBattleMechanicusSettleNotify_CmdId[InBattleMechanicusSettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InBattleMechanicusSettleNotify_CmdId[InBattleMechanicusSettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InBattleMechanicusSettleNotify_CmdId = exports.InBattleMechanicusSettleNotify_CmdId || (exports.InBattleMechanicusSettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MultistagePlaySettleNotify.CmdId
 */
var MultistagePlaySettleNotify_CmdId;
(function (MultistagePlaySettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlaySettleNotify_CmdId[MultistagePlaySettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5313;
     */
    MultistagePlaySettleNotify_CmdId[MultistagePlaySettleNotify_CmdId["CMD_ID"] = 5313] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlaySettleNotify_CmdId[MultistagePlaySettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MultistagePlaySettleNotify_CmdId[MultistagePlaySettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MultistagePlaySettleNotify_CmdId = exports.MultistagePlaySettleNotify_CmdId || (exports.MultistagePlaySettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MultistagePlayStageEndNotify.CmdId
 */
var MultistagePlayStageEndNotify_CmdId;
(function (MultistagePlayStageEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayStageEndNotify_CmdId[MultistagePlayStageEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5379;
     */
    MultistagePlayStageEndNotify_CmdId[MultistagePlayStageEndNotify_CmdId["CMD_ID"] = 5379] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayStageEndNotify_CmdId[MultistagePlayStageEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MultistagePlayStageEndNotify_CmdId[MultistagePlayStageEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MultistagePlayStageEndNotify_CmdId = exports.MultistagePlayStageEndNotify_CmdId || (exports.MultistagePlayStageEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MultistagePlayEndNotify.CmdId
 */
var MultistagePlayEndNotify_CmdId;
(function (MultistagePlayEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayEndNotify_CmdId[MultistagePlayEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5355;
     */
    MultistagePlayEndNotify_CmdId[MultistagePlayEndNotify_CmdId["CMD_ID"] = 5355] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MultistagePlayEndNotify_CmdId[MultistagePlayEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MultistagePlayEndNotify_CmdId[MultistagePlayEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MultistagePlayEndNotify_CmdId = exports.MultistagePlayEndNotify_CmdId || (exports.MultistagePlayEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FleurFairBuffEnergyNotify.CmdId
 */
var FleurFairBuffEnergyNotify_CmdId;
(function (FleurFairBuffEnergyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FleurFairBuffEnergyNotify_CmdId[FleurFairBuffEnergyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5324;
     */
    FleurFairBuffEnergyNotify_CmdId[FleurFairBuffEnergyNotify_CmdId["CMD_ID"] = 5324] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FleurFairBuffEnergyNotify_CmdId[FleurFairBuffEnergyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FleurFairBuffEnergyNotify_CmdId[FleurFairBuffEnergyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FleurFairBuffEnergyNotify_CmdId = exports.FleurFairBuffEnergyNotify_CmdId || (exports.FleurFairBuffEnergyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FleurFairStageSettleNotify.CmdId
 */
var FleurFairStageSettleNotify_CmdId;
(function (FleurFairStageSettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FleurFairStageSettleNotify_CmdId[FleurFairStageSettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5356;
     */
    FleurFairStageSettleNotify_CmdId[FleurFairStageSettleNotify_CmdId["CMD_ID"] = 5356] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FleurFairStageSettleNotify_CmdId[FleurFairStageSettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FleurFairStageSettleNotify_CmdId[FleurFairStageSettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FleurFairStageSettleNotify_CmdId = exports.FleurFairStageSettleNotify_CmdId || (exports.FleurFairStageSettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FleurFairFinishGalleryStageNotify.CmdId
 */
var FleurFairFinishGalleryStageNotify_CmdId;
(function (FleurFairFinishGalleryStageNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FleurFairFinishGalleryStageNotify_CmdId[FleurFairFinishGalleryStageNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5342;
     */
    FleurFairFinishGalleryStageNotify_CmdId[FleurFairFinishGalleryStageNotify_CmdId["CMD_ID"] = 5342] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FleurFairFinishGalleryStageNotify_CmdId[FleurFairFinishGalleryStageNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FleurFairFinishGalleryStageNotify_CmdId[FleurFairFinishGalleryStageNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FleurFairFinishGalleryStageNotify_CmdId = exports.FleurFairFinishGalleryStageNotify_CmdId || (exports.FleurFairFinishGalleryStageNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekSelectAvatarReq.CmdId
 */
var HideAndSeekSelectAvatarReq_CmdId;
(function (HideAndSeekSelectAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSelectAvatarReq_CmdId[HideAndSeekSelectAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5330;
     */
    HideAndSeekSelectAvatarReq_CmdId[HideAndSeekSelectAvatarReq_CmdId["CMD_ID"] = 5330] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSelectAvatarReq_CmdId[HideAndSeekSelectAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekSelectAvatarReq_CmdId[HideAndSeekSelectAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekSelectAvatarReq_CmdId[HideAndSeekSelectAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HideAndSeekSelectAvatarReq_CmdId = exports.HideAndSeekSelectAvatarReq_CmdId || (exports.HideAndSeekSelectAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekSelectAvatarRsp.CmdId
 */
var HideAndSeekSelectAvatarRsp_CmdId;
(function (HideAndSeekSelectAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSelectAvatarRsp_CmdId[HideAndSeekSelectAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5367;
     */
    HideAndSeekSelectAvatarRsp_CmdId[HideAndSeekSelectAvatarRsp_CmdId["CMD_ID"] = 5367] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSelectAvatarRsp_CmdId[HideAndSeekSelectAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekSelectAvatarRsp_CmdId[HideAndSeekSelectAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HideAndSeekSelectAvatarRsp_CmdId = exports.HideAndSeekSelectAvatarRsp_CmdId || (exports.HideAndSeekSelectAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekSetReadyReq.CmdId
 */
var HideAndSeekSetReadyReq_CmdId;
(function (HideAndSeekSetReadyReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSetReadyReq_CmdId[HideAndSeekSetReadyReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5358;
     */
    HideAndSeekSetReadyReq_CmdId[HideAndSeekSetReadyReq_CmdId["CMD_ID"] = 5358] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSetReadyReq_CmdId[HideAndSeekSetReadyReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekSetReadyReq_CmdId[HideAndSeekSetReadyReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekSetReadyReq_CmdId[HideAndSeekSetReadyReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(HideAndSeekSetReadyReq_CmdId = exports.HideAndSeekSetReadyReq_CmdId || (exports.HideAndSeekSetReadyReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekSetReadyRsp.CmdId
 */
var HideAndSeekSetReadyRsp_CmdId;
(function (HideAndSeekSetReadyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSetReadyRsp_CmdId[HideAndSeekSetReadyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5370;
     */
    HideAndSeekSetReadyRsp_CmdId[HideAndSeekSetReadyRsp_CmdId["CMD_ID"] = 5370] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSetReadyRsp_CmdId[HideAndSeekSetReadyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekSetReadyRsp_CmdId[HideAndSeekSetReadyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HideAndSeekSetReadyRsp_CmdId = exports.HideAndSeekSetReadyRsp_CmdId || (exports.HideAndSeekSetReadyRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekSettleNotify.SettleReason
 */
var HideAndSeekSettleNotify_SettleReason;
(function (HideAndSeekSettleNotify_SettleReason) {
    /**
     * @generated from protobuf enum value: SETTLE_REASON_TIME_OUT = 0;
     */
    HideAndSeekSettleNotify_SettleReason[HideAndSeekSettleNotify_SettleReason["SETTLE_REASON_TIME_OUT"] = 0] = "SETTLE_REASON_TIME_OUT";
    /**
     * @generated from protobuf enum value: SETTLE_PLAY_END = 1;
     */
    HideAndSeekSettleNotify_SettleReason[HideAndSeekSettleNotify_SettleReason["SETTLE_PLAY_END"] = 1] = "SETTLE_PLAY_END";
    /**
     * @generated from protobuf enum value: SETTLE_PLAYER_QUIT = 2;
     */
    HideAndSeekSettleNotify_SettleReason[HideAndSeekSettleNotify_SettleReason["SETTLE_PLAYER_QUIT"] = 2] = "SETTLE_PLAYER_QUIT";
})(HideAndSeekSettleNotify_SettleReason = exports.HideAndSeekSettleNotify_SettleReason || (exports.HideAndSeekSettleNotify_SettleReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekSettleNotify.CmdId
 */
var HideAndSeekSettleNotify_CmdId;
(function (HideAndSeekSettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSettleNotify_CmdId[HideAndSeekSettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5317;
     */
    HideAndSeekSettleNotify_CmdId[HideAndSeekSettleNotify_CmdId["CMD_ID"] = 5317] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekSettleNotify_CmdId[HideAndSeekSettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekSettleNotify_CmdId[HideAndSeekSettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HideAndSeekSettleNotify_CmdId = exports.HideAndSeekSettleNotify_CmdId || (exports.HideAndSeekSettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekPlayerReadyNotify.CmdId
 */
var HideAndSeekPlayerReadyNotify_CmdId;
(function (HideAndSeekPlayerReadyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekPlayerReadyNotify_CmdId[HideAndSeekPlayerReadyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5302;
     */
    HideAndSeekPlayerReadyNotify_CmdId[HideAndSeekPlayerReadyNotify_CmdId["CMD_ID"] = 5302] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekPlayerReadyNotify_CmdId[HideAndSeekPlayerReadyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekPlayerReadyNotify_CmdId[HideAndSeekPlayerReadyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HideAndSeekPlayerReadyNotify_CmdId = exports.HideAndSeekPlayerReadyNotify_CmdId || (exports.HideAndSeekPlayerReadyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekPlayerSetAvatarNotify.CmdId
 */
var HideAndSeekPlayerSetAvatarNotify_CmdId;
(function (HideAndSeekPlayerSetAvatarNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekPlayerSetAvatarNotify_CmdId[HideAndSeekPlayerSetAvatarNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5319;
     */
    HideAndSeekPlayerSetAvatarNotify_CmdId[HideAndSeekPlayerSetAvatarNotify_CmdId["CMD_ID"] = 5319] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HideAndSeekPlayerSetAvatarNotify_CmdId[HideAndSeekPlayerSetAvatarNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HideAndSeekPlayerSetAvatarNotify_CmdId[HideAndSeekPlayerSetAvatarNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HideAndSeekPlayerSetAvatarNotify_CmdId = exports.HideAndSeekPlayerSetAvatarNotify_CmdId || (exports.HideAndSeekPlayerSetAvatarNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessPickCardReq.CmdId
 */
var ChessPickCardReq_CmdId;
(function (ChessPickCardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPickCardReq_CmdId[ChessPickCardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5333;
     */
    ChessPickCardReq_CmdId[ChessPickCardReq_CmdId["CMD_ID"] = 5333] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPickCardReq_CmdId[ChessPickCardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessPickCardReq_CmdId[ChessPickCardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessPickCardReq_CmdId[ChessPickCardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChessPickCardReq_CmdId = exports.ChessPickCardReq_CmdId || (exports.ChessPickCardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessPickCardRsp.CmdId
 */
var ChessPickCardRsp_CmdId;
(function (ChessPickCardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPickCardRsp_CmdId[ChessPickCardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5384;
     */
    ChessPickCardRsp_CmdId[ChessPickCardRsp_CmdId["CMD_ID"] = 5384] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPickCardRsp_CmdId[ChessPickCardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessPickCardRsp_CmdId[ChessPickCardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChessPickCardRsp_CmdId = exports.ChessPickCardRsp_CmdId || (exports.ChessPickCardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessPickCardNotify.CmdId
 */
var ChessPickCardNotify_CmdId;
(function (ChessPickCardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPickCardNotify_CmdId[ChessPickCardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5380;
     */
    ChessPickCardNotify_CmdId[ChessPickCardNotify_CmdId["CMD_ID"] = 5380] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPickCardNotify_CmdId[ChessPickCardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessPickCardNotify_CmdId[ChessPickCardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChessPickCardNotify_CmdId = exports.ChessPickCardNotify_CmdId || (exports.ChessPickCardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessManualRefreshCardsReq.CmdId
 */
var ChessManualRefreshCardsReq_CmdId;
(function (ChessManualRefreshCardsReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessManualRefreshCardsReq_CmdId[ChessManualRefreshCardsReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5389;
     */
    ChessManualRefreshCardsReq_CmdId[ChessManualRefreshCardsReq_CmdId["CMD_ID"] = 5389] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessManualRefreshCardsReq_CmdId[ChessManualRefreshCardsReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessManualRefreshCardsReq_CmdId[ChessManualRefreshCardsReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessManualRefreshCardsReq_CmdId[ChessManualRefreshCardsReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChessManualRefreshCardsReq_CmdId = exports.ChessManualRefreshCardsReq_CmdId || (exports.ChessManualRefreshCardsReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessManualRefreshCardsRsp.CmdId
 */
var ChessManualRefreshCardsRsp_CmdId;
(function (ChessManualRefreshCardsRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessManualRefreshCardsRsp_CmdId[ChessManualRefreshCardsRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5359;
     */
    ChessManualRefreshCardsRsp_CmdId[ChessManualRefreshCardsRsp_CmdId["CMD_ID"] = 5359] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessManualRefreshCardsRsp_CmdId[ChessManualRefreshCardsRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessManualRefreshCardsRsp_CmdId[ChessManualRefreshCardsRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChessManualRefreshCardsRsp_CmdId = exports.ChessManualRefreshCardsRsp_CmdId || (exports.ChessManualRefreshCardsRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessPlayerInfoNotify.CmdId
 */
var ChessPlayerInfoNotify_CmdId;
(function (ChessPlayerInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPlayerInfoNotify_CmdId[ChessPlayerInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5332;
     */
    ChessPlayerInfoNotify_CmdId[ChessPlayerInfoNotify_CmdId["CMD_ID"] = 5332] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessPlayerInfoNotify_CmdId[ChessPlayerInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessPlayerInfoNotify_CmdId[ChessPlayerInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChessPlayerInfoNotify_CmdId = exports.ChessPlayerInfoNotify_CmdId || (exports.ChessPlayerInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessLeftMonstersNotify.CmdId
 */
var ChessLeftMonstersNotify_CmdId;
(function (ChessLeftMonstersNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessLeftMonstersNotify_CmdId[ChessLeftMonstersNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5360;
     */
    ChessLeftMonstersNotify_CmdId[ChessLeftMonstersNotify_CmdId["CMD_ID"] = 5360] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessLeftMonstersNotify_CmdId[ChessLeftMonstersNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessLeftMonstersNotify_CmdId[ChessLeftMonstersNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChessLeftMonstersNotify_CmdId = exports.ChessLeftMonstersNotify_CmdId || (exports.ChessLeftMonstersNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessEscapedMonstersNotify.CmdId
 */
var ChessEscapedMonstersNotify_CmdId;
(function (ChessEscapedMonstersNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessEscapedMonstersNotify_CmdId[ChessEscapedMonstersNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5314;
     */
    ChessEscapedMonstersNotify_CmdId[ChessEscapedMonstersNotify_CmdId["CMD_ID"] = 5314] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessEscapedMonstersNotify_CmdId[ChessEscapedMonstersNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessEscapedMonstersNotify_CmdId[ChessEscapedMonstersNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChessEscapedMonstersNotify_CmdId = exports.ChessEscapedMonstersNotify_CmdId || (exports.ChessEscapedMonstersNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChessSelectedCardsNotify.CmdId
 */
var ChessSelectedCardsNotify_CmdId;
(function (ChessSelectedCardsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessSelectedCardsNotify_CmdId[ChessSelectedCardsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5392;
     */
    ChessSelectedCardsNotify_CmdId[ChessSelectedCardsNotify_CmdId["CMD_ID"] = 5392] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChessSelectedCardsNotify_CmdId[ChessSelectedCardsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChessSelectedCardsNotify_CmdId[ChessSelectedCardsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChessSelectedCardsNotify_CmdId = exports.ChessSelectedCardsNotify_CmdId || (exports.ChessSelectedCardsNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GlobalBuildingInfoNotify.CmdId
 */
var GlobalBuildingInfoNotify_CmdId;
(function (GlobalBuildingInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GlobalBuildingInfoNotify_CmdId[GlobalBuildingInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5320;
     */
    GlobalBuildingInfoNotify_CmdId[GlobalBuildingInfoNotify_CmdId["CMD_ID"] = 5320] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GlobalBuildingInfoNotify_CmdId[GlobalBuildingInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GlobalBuildingInfoNotify_CmdId[GlobalBuildingInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GlobalBuildingInfoNotify_CmdId = exports.GlobalBuildingInfoNotify_CmdId || (exports.GlobalBuildingInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.IrodoriChessPlayerInfoNotify.CmdId
 */
var IrodoriChessPlayerInfoNotify_CmdId;
(function (IrodoriChessPlayerInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IrodoriChessPlayerInfoNotify_CmdId[IrodoriChessPlayerInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5364;
     */
    IrodoriChessPlayerInfoNotify_CmdId[IrodoriChessPlayerInfoNotify_CmdId["CMD_ID"] = 5364] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IrodoriChessPlayerInfoNotify_CmdId[IrodoriChessPlayerInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IrodoriChessPlayerInfoNotify_CmdId[IrodoriChessPlayerInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(IrodoriChessPlayerInfoNotify_CmdId = exports.IrodoriChessPlayerInfoNotify_CmdId || (exports.IrodoriChessPlayerInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.IrodoriChessLeftMonsterNotify.CmdId
 */
var IrodoriChessLeftMonsterNotify_CmdId;
(function (IrodoriChessLeftMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IrodoriChessLeftMonsterNotify_CmdId[IrodoriChessLeftMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5338;
     */
    IrodoriChessLeftMonsterNotify_CmdId[IrodoriChessLeftMonsterNotify_CmdId["CMD_ID"] = 5338] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    IrodoriChessLeftMonsterNotify_CmdId[IrodoriChessLeftMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    IrodoriChessLeftMonsterNotify_CmdId[IrodoriChessLeftMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(IrodoriChessLeftMonsterNotify_CmdId = exports.IrodoriChessLeftMonsterNotify_CmdId || (exports.IrodoriChessLeftMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MultistagePlayType
 */
var MultistagePlayType;
(function (MultistagePlayType) {
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_NON = 0;
     */
    MultistagePlayType[MultistagePlayType["NON"] = 0] = "NON";
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_MECHANICUS = 1;
     */
    MultistagePlayType[MultistagePlayType["MECHANICUS"] = 1] = "MECHANICUS";
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_FLEUR_FAIR = 2;
     */
    MultistagePlayType[MultistagePlayType["FLEUR_FAIR"] = 2] = "FLEUR_FAIR";
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_HIDE_AND_SEEK = 3;
     */
    MultistagePlayType[MultistagePlayType["HIDE_AND_SEEK"] = 3] = "HIDE_AND_SEEK";
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_BOUNCE_CONJURING = 4;
     */
    MultistagePlayType[MultistagePlayType["BOUNCE_CONJURING"] = 4] = "BOUNCE_CONJURING";
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_CHESS = 5;
     */
    MultistagePlayType[MultistagePlayType["CHESS"] = 5] = "CHESS";
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_IRODORI_CHESS = 6;
     */
    MultistagePlayType[MultistagePlayType["IRODORI_CHESS"] = 6] = "IRODORI_CHESS";
    /**
     * @generated from protobuf enum value: MULTISTAGE_PLAY_TYPE_CHAR_AMUSEMENT = 7;
     */
    MultistagePlayType[MultistagePlayType["CHAR_AMUSEMENT"] = 7] = "CHAR_AMUSEMENT";
})(MultistagePlayType = exports.MultistagePlayType || (exports.MultistagePlayType = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusStageType
 */
var InBattleMechanicusStageType;
(function (InBattleMechanicusStageType) {
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_STAGE_NONE = 0;
     */
    InBattleMechanicusStageType[InBattleMechanicusStageType["IN_BATTLE_MECHANICUS_STAGE_NONE"] = 0] = "IN_BATTLE_MECHANICUS_STAGE_NONE";
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_STAGE_BUILD = 1;
     */
    InBattleMechanicusStageType[InBattleMechanicusStageType["IN_BATTLE_MECHANICUS_STAGE_BUILD"] = 1] = "IN_BATTLE_MECHANICUS_STAGE_BUILD";
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_STAGE_CARD_FLIP = 2;
     */
    InBattleMechanicusStageType[InBattleMechanicusStageType["IN_BATTLE_MECHANICUS_STAGE_CARD_FLIP"] = 2] = "IN_BATTLE_MECHANICUS_STAGE_CARD_FLIP";
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_STAGE_KILL = 3;
     */
    InBattleMechanicusStageType[InBattleMechanicusStageType["IN_BATTLE_MECHANICUS_STAGE_KILL"] = 3] = "IN_BATTLE_MECHANICUS_STAGE_KILL";
})(InBattleMechanicusStageType = exports.InBattleMechanicusStageType || (exports.InBattleMechanicusStageType = {}));
/**
 * @generated from protobuf enum com.midnights.game.InBattleMechanicusCardChallengeState
 */
var InBattleMechanicusCardChallengeState;
(function (InBattleMechanicusCardChallengeState) {
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_CARD_CHALLENGE_NONE = 0;
     */
    InBattleMechanicusCardChallengeState[InBattleMechanicusCardChallengeState["IN_BATTLE_MECHANICUS_CARD_CHALLENGE_NONE"] = 0] = "IN_BATTLE_MECHANICUS_CARD_CHALLENGE_NONE";
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_CARD_CHALLENGE_ON_GOING = 1;
     */
    InBattleMechanicusCardChallengeState[InBattleMechanicusCardChallengeState["IN_BATTLE_MECHANICUS_CARD_CHALLENGE_ON_GOING"] = 1] = "IN_BATTLE_MECHANICUS_CARD_CHALLENGE_ON_GOING";
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_CARD_CHALLENGE_FAIL = 2;
     */
    InBattleMechanicusCardChallengeState[InBattleMechanicusCardChallengeState["IN_BATTLE_MECHANICUS_CARD_CHALLENGE_FAIL"] = 2] = "IN_BATTLE_MECHANICUS_CARD_CHALLENGE_FAIL";
    /**
     * @generated from protobuf enum value: IN_BATTLE_MECHANICUS_CARD_CHALLENGE_SUCCESS = 3;
     */
    InBattleMechanicusCardChallengeState[InBattleMechanicusCardChallengeState["IN_BATTLE_MECHANICUS_CARD_CHALLENGE_SUCCESS"] = 3] = "IN_BATTLE_MECHANICUS_CARD_CHALLENGE_SUCCESS";
})(InBattleMechanicusCardChallengeState = exports.InBattleMechanicusCardChallengeState || (exports.InBattleMechanicusCardChallengeState = {}));
/**
 * @generated from protobuf enum com.midnights.game.HideAndSeekStageType
 */
var HideAndSeekStageType;
(function (HideAndSeekStageType) {
    /**
     * @generated from protobuf enum value: HIDE_AND_SEEK_STAGE_PREPARE = 0;
     */
    HideAndSeekStageType[HideAndSeekStageType["HIDE_AND_SEEK_STAGE_PREPARE"] = 0] = "HIDE_AND_SEEK_STAGE_PREPARE";
    /**
     * @generated from protobuf enum value: HIDE_AND_SEEK_STAGE_PICK = 1;
     */
    HideAndSeekStageType[HideAndSeekStageType["HIDE_AND_SEEK_STAGE_PICK"] = 1] = "HIDE_AND_SEEK_STAGE_PICK";
    /**
     * @generated from protobuf enum value: HIDE_AND_SEEK_STAGE_GAME = 2;
     */
    HideAndSeekStageType[HideAndSeekStageType["HIDE_AND_SEEK_STAGE_GAME"] = 2] = "HIDE_AND_SEEK_STAGE_GAME";
    /**
     * @generated from protobuf enum value: HIDE_AND_SEEK_STAGE_HIDE = 3;
     */
    HideAndSeekStageType[HideAndSeekStageType["HIDE_AND_SEEK_STAGE_HIDE"] = 3] = "HIDE_AND_SEEK_STAGE_HIDE";
    /**
     * @generated from protobuf enum value: HIDE_AND_SEEK_STAGE_SEEK = 4;
     */
    HideAndSeekStageType[HideAndSeekStageType["HIDE_AND_SEEK_STAGE_SEEK"] = 4] = "HIDE_AND_SEEK_STAGE_SEEK";
    /**
     * @generated from protobuf enum value: HIDE_AND_SEEK_STAGE_SETTLE = 5;
     */
    HideAndSeekStageType[HideAndSeekStageType["HIDE_AND_SEEK_STAGE_SETTLE"] = 5] = "HIDE_AND_SEEK_STAGE_SETTLE";
})(HideAndSeekStageType = exports.HideAndSeekStageType || (exports.HideAndSeekStageType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusBuildingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusBuildingInfo", [
            { no: 8, name: "building_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cost_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "refund_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 building_id */ 8:
                    message.buildingId = reader.uint32();
                    break;
                case /* optional uint32 level */ 7:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 cost_points */ 2:
                    message.costPoints = reader.uint32();
                    break;
                case /* optional uint32 refund_points */ 11:
                    message.refundPoints = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 building_id = 8; */
        if (message.buildingId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.buildingId);
        /* optional uint32 level = 7; */
        if (message.level !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 cost_points = 2; */
        if (message.costPoints !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.costPoints);
        /* optional uint32 refund_points = 11; */
        if (message.refundPoints !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.refundPoints);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusBuildingInfo
 */
exports.InBattleMechanicusBuildingInfo = new InBattleMechanicusBuildingInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusPlayerInfo", [
            { no: 5, name: "pick_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "building_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InBattleMechanicusBuildingInfo },
            { no: 13, name: "is_card_confirmed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "building_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { buildingList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 pick_card_id */ 5:
                    message.pickCardId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* repeated com.midnights.game.InBattleMechanicusBuildingInfo building_list */ 4:
                    message.buildingList.push(exports.InBattleMechanicusBuildingInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_card_confirmed */ 13:
                    message.isCardConfirmed = reader.bool();
                    break;
                case /* optional uint32 building_points */ 3:
                    message.buildingPoints = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 pick_card_id = 5; */
        if (message.pickCardId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.pickCardId);
        /* optional uint32 uid = 14; */
        if (message.uid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated com.midnights.game.InBattleMechanicusBuildingInfo building_list = 4; */
        for (let i = 0; i < message.buildingList.length; i++)
            exports.InBattleMechanicusBuildingInfo.internalBinaryWrite(message.buildingList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_card_confirmed = 13; */
        if (message.isCardConfirmed !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isCardConfirmed);
        /* optional uint32 building_points = 3; */
        if (message.buildingPoints !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.buildingPoints);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusPlayerInfo
 */
exports.InBattleMechanicusPlayerInfo = new InBattleMechanicusPlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusMonsterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusMonsterInfo", [
            { no: 1, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 monster_id */ 1:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional uint32 level */ 14:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 count */ 13:
                    message.count = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 monster_id = 1; */
        if (message.monsterId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* optional uint32 level = 14; */
        if (message.level !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 count = 13; */
        if (message.count !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusMonsterInfo
 */
exports.InBattleMechanicusMonsterInfo = new InBattleMechanicusMonsterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusCardInfo", [
            { no: 12, name: "rand_effect_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "end_round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "challenge_state", kind: "enum", opt: true, T: () => ["com.midnights.game.InBattleMechanicusCardChallengeState", InBattleMechanicusCardChallengeState] },
            { no: 1, name: "cost_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "begin_round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 rand_effect_id */ 12:
                    message.randEffectId = reader.uint32();
                    break;
                case /* optional uint32 end_round */ 3:
                    message.endRound = reader.uint32();
                    break;
                case /* optional com.midnights.game.InBattleMechanicusCardChallengeState challenge_state */ 5:
                    message.challengeState = reader.int32();
                    break;
                case /* optional uint32 cost_points */ 1:
                    message.costPoints = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 11:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 begin_round */ 8:
                    message.beginRound = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 rand_effect_id = 12; */
        if (message.randEffectId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.randEffectId);
        /* optional uint32 end_round = 3; */
        if (message.endRound !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.endRound);
        /* optional com.midnights.game.InBattleMechanicusCardChallengeState challenge_state = 5; */
        if (message.challengeState !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.challengeState);
        /* optional uint32 cost_points = 1; */
        if (message.costPoints !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.costPoints);
        /* optional uint32 card_id = 11; */
        if (message.cardId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 begin_round = 8; */
        if (message.beginRound !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.beginRound);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusCardInfo
 */
exports.InBattleMechanicusCardInfo = new InBattleMechanicusCardInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusInfo", [
            { no: 5, name: "left_monster", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "wait_seconds", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 410, name: "entrance_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 115, name: "exit_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "history_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InBattleMechanicusCardInfo },
            { no: 10, name: "max_excape_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "building_stage_duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "duration_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "stage", kind: "enum", opt: true, T: () => ["com.midnights.game.InBattleMechanicusStageType", InBattleMechanicusStageType] },
            { no: 12, name: "total_round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "monster_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InBattleMechanicusMonsterInfo },
            { no: 6, name: "excaped_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "pick_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InBattleMechanicusCardInfo },
            { no: 7, name: "player_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InBattleMechanicusPlayerInfo },
            { no: 1, name: "wait_begin_time_us", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "begin_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { entranceList: [], exitList: [], historyCardList: [], monsterList: [], pickCardList: [], playerList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 left_monster */ 5:
                    message.leftMonster = reader.uint32();
                    break;
                case /* optional uint32 wait_seconds */ 13:
                    message.waitSeconds = reader.uint32();
                    break;
                case /* repeated uint32 entrance_list */ 410:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entranceList.push(reader.uint32());
                    else
                        message.entranceList.push(reader.uint32());
                    break;
                case /* repeated uint32 exit_list */ 115:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exitList.push(reader.uint32());
                    else
                        message.exitList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.InBattleMechanicusCardInfo history_card_list */ 11:
                    message.historyCardList.push(exports.InBattleMechanicusCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 max_excape_monster_num */ 10:
                    message.maxExcapeMonsterNum = reader.uint32();
                    break;
                case /* optional uint32 building_stage_duration */ 4:
                    message.buildingStageDuration = reader.uint32();
                    break;
                case /* optional uint64 duration_ms */ 8:
                    message.durationMs = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.InBattleMechanicusStageType stage */ 9:
                    message.stage = reader.int32();
                    break;
                case /* optional uint32 total_round */ 12:
                    message.totalRound = reader.uint32();
                    break;
                case /* repeated com.midnights.game.InBattleMechanicusMonsterInfo monster_list */ 14:
                    message.monsterList.push(exports.InBattleMechanicusMonsterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 excaped_monster_num */ 6:
                    message.excapedMonsterNum = reader.uint32();
                    break;
                case /* optional uint32 round */ 3:
                    message.round = reader.uint32();
                    break;
                case /* repeated com.midnights.game.InBattleMechanicusCardInfo pick_card_list */ 15:
                    message.pickCardList.push(exports.InBattleMechanicusCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.InBattleMechanicusPlayerInfo player_list */ 7:
                    message.playerList.push(exports.InBattleMechanicusPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint64 wait_begin_time_us */ 1:
                    message.waitBeginTimeUs = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 begin_time_ms */ 2:
                    message.beginTimeMs = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 left_monster = 5; */
        if (message.leftMonster !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.leftMonster);
        /* optional uint32 wait_seconds = 13; */
        if (message.waitSeconds !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.waitSeconds);
        /* repeated uint32 entrance_list = 410; */
        if (message.entranceList.length) {
            writer.tag(410, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entranceList.length; i++)
                writer.uint32(message.entranceList[i]);
            writer.join();
        }
        /* repeated uint32 exit_list = 115; */
        if (message.exitList.length) {
            writer.tag(115, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exitList.length; i++)
                writer.uint32(message.exitList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.InBattleMechanicusCardInfo history_card_list = 11; */
        for (let i = 0; i < message.historyCardList.length; i++)
            exports.InBattleMechanicusCardInfo.internalBinaryWrite(message.historyCardList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 max_excape_monster_num = 10; */
        if (message.maxExcapeMonsterNum !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.maxExcapeMonsterNum);
        /* optional uint32 building_stage_duration = 4; */
        if (message.buildingStageDuration !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.buildingStageDuration);
        /* optional uint64 duration_ms = 8; */
        if (message.durationMs !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.durationMs);
        /* optional com.midnights.game.InBattleMechanicusStageType stage = 9; */
        if (message.stage !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.stage);
        /* optional uint32 total_round = 12; */
        if (message.totalRound !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.totalRound);
        /* repeated com.midnights.game.InBattleMechanicusMonsterInfo monster_list = 14; */
        for (let i = 0; i < message.monsterList.length; i++)
            exports.InBattleMechanicusMonsterInfo.internalBinaryWrite(message.monsterList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 excaped_monster_num = 6; */
        if (message.excapedMonsterNum !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.excapedMonsterNum);
        /* optional uint32 round = 3; */
        if (message.round !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.round);
        /* repeated com.midnights.game.InBattleMechanicusCardInfo pick_card_list = 15; */
        for (let i = 0; i < message.pickCardList.length; i++)
            exports.InBattleMechanicusCardInfo.internalBinaryWrite(message.pickCardList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.InBattleMechanicusPlayerInfo player_list = 7; */
        for (let i = 0; i < message.playerList.length; i++)
            exports.InBattleMechanicusPlayerInfo.internalBinaryWrite(message.playerList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 wait_begin_time_us = 1; */
        if (message.waitBeginTimeUs !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.waitBeginTimeUs);
        /* optional uint64 begin_time_ms = 2; */
        if (message.beginTimeMs !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.beginTimeMs);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusInfo
 */
exports.InBattleMechanicusInfo = new InBattleMechanicusInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleFleurFairInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleFleurFairInfo", [
            { no: 5, name: "gallery_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "gallery_stage_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "preview_stage_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "ability_group_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "preview_display_duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { galleryIdList: [], abilityGroupIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 gallery_id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.galleryIdList.push(reader.uint32());
                    else
                        message.galleryIdList.push(reader.uint32());
                    break;
                case /* optional uint32 gallery_stage_index */ 6:
                    message.galleryStageIndex = reader.uint32();
                    break;
                case /* optional uint32 preview_stage_index */ 8:
                    message.previewStageIndex = reader.uint32();
                    break;
                case /* repeated uint32 ability_group_id_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.abilityGroupIdList.push(reader.uint32());
                    else
                        message.abilityGroupIdList.push(reader.uint32());
                    break;
                case /* optional uint32 preview_display_duration */ 12:
                    message.previewDisplayDuration = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 gallery_id_list = 5; */
        if (message.galleryIdList.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.galleryIdList.length; i++)
                writer.uint32(message.galleryIdList[i]);
            writer.join();
        }
        /* optional uint32 gallery_stage_index = 6; */
        if (message.galleryStageIndex !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.galleryStageIndex);
        /* optional uint32 preview_stage_index = 8; */
        if (message.previewStageIndex !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.previewStageIndex);
        /* repeated uint32 ability_group_id_list = 2; */
        if (message.abilityGroupIdList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.abilityGroupIdList.length; i++)
                writer.uint32(message.abilityGroupIdList[i]);
            writer.join();
        }
        /* optional uint32 preview_display_duration = 12; */
        if (message.previewDisplayDuration !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.previewDisplayDuration);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleFleurFairInfo
 */
exports.InBattleFleurFairInfo = new InBattleFleurFairInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CharAmusementAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CharAmusementAvatarInfo", [
            { no: 11, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "punish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 11:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint32 punish_time */ 7:
                    message.punishTime = reader.uint32();
                    break;
                case /* repeated uint32 avatar_id_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarIdList.push(reader.uint32());
                    else
                        message.avatarIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 11; */
        if (message.uid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint32 punish_time = 7; */
        if (message.punishTime !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.punishTime);
        /* repeated uint32 avatar_id_list = 10; */
        if (message.avatarIdList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarIdList.length; i++)
                writer.uint32(message.avatarIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CharAmusementAvatarInfo
 */
exports.CharAmusementAvatarInfo = new CharAmusementAvatarInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CharAmusementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CharAmusementInfo", [
            { no: 11, name: "total_cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "stage_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "preview_stage_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CharAmusementAvatarInfo }
        ]);
    }
    create(value) {
        const message = { avatarInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 total_cost_time */ 11:
                    message.totalCostTime = reader.uint32();
                    break;
                case /* optional uint32 stage_id */ 2:
                    message.stageId = reader.uint32();
                    break;
                case /* optional uint32 level_id */ 10:
                    message.levelId = reader.uint32();
                    break;
                case /* optional uint32 preview_stage_index */ 4:
                    message.previewStageIndex = reader.uint32();
                    break;
                case /* repeated com.midnights.game.CharAmusementAvatarInfo avatar_info_list */ 5:
                    message.avatarInfoList.push(exports.CharAmusementAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 total_cost_time = 11; */
        if (message.totalCostTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.totalCostTime);
        /* optional uint32 stage_id = 2; */
        if (message.stageId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.stageId);
        /* optional uint32 level_id = 10; */
        if (message.levelId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.levelId);
        /* optional uint32 preview_stage_index = 4; */
        if (message.previewStageIndex !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.previewStageIndex);
        /* repeated com.midnights.game.CharAmusementAvatarInfo avatar_info_list = 5; */
        for (let i = 0; i < message.avatarInfoList.length; i++)
            exports.CharAmusementAvatarInfo.internalBinaryWrite(message.avatarInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CharAmusementInfo
 */
exports.CharAmusementInfo = new CharAmusementInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistagePlayInfo", [
            { no: 13, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "stage_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "stage_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1334, name: "mechanicus_info", kind: "message", oneof: "detail", T: () => exports.InBattleMechanicusInfo },
            { no: 1064, name: "fleur_fair_info", kind: "message", oneof: "detail", T: () => exports.InBattleFleurFairInfo },
            { no: 108, name: "hide_and_seek_info", kind: "message", oneof: "detail", T: () => exports.HideAndSeekStageInfo },
            { no: 1758, name: "chess_info", kind: "message", oneof: "detail", T: () => exports.InBattleChessInfo },
            { no: 531, name: "irodori_chess_info", kind: "message", oneof: "detail", T: () => exports.InBattleIrodoriChessInfo },
            { no: 324, name: "char_amusement_info", kind: "message", oneof: "detail", T: () => exports.CharAmusementInfo }
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
                case /* optional uint32 play_index */ 13:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 11:
                    message.playType = reader.uint32();
                    break;
                case /* optional uint32 stage_type */ 10:
                    message.stageType = reader.uint32();
                    break;
                case /* optional uint32 duration */ 8:
                    message.duration = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 12:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 9:
                    message.beginTime = reader.uint32();
                    break;
                case /* optional uint32 stage_index */ 1:
                    message.stageIndex = reader.uint32();
                    break;
                case /* com.midnights.game.InBattleMechanicusInfo mechanicus_info */ 1334:
                    message.detail = {
                        oneofKind: "mechanicusInfo",
                        mechanicusInfo: exports.InBattleMechanicusInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.mechanicusInfo)
                    };
                    break;
                case /* com.midnights.game.InBattleFleurFairInfo fleur_fair_info */ 1064:
                    message.detail = {
                        oneofKind: "fleurFairInfo",
                        fleurFairInfo: exports.InBattleFleurFairInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.fleurFairInfo)
                    };
                    break;
                case /* com.midnights.game.HideAndSeekStageInfo hide_and_seek_info */ 108:
                    message.detail = {
                        oneofKind: "hideAndSeekInfo",
                        hideAndSeekInfo: exports.HideAndSeekStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.hideAndSeekInfo)
                    };
                    break;
                case /* com.midnights.game.InBattleChessInfo chess_info */ 1758:
                    message.detail = {
                        oneofKind: "chessInfo",
                        chessInfo: exports.InBattleChessInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.chessInfo)
                    };
                    break;
                case /* com.midnights.game.InBattleIrodoriChessInfo irodori_chess_info */ 531:
                    message.detail = {
                        oneofKind: "irodoriChessInfo",
                        irodoriChessInfo: exports.InBattleIrodoriChessInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.irodoriChessInfo)
                    };
                    break;
                case /* com.midnights.game.CharAmusementInfo char_amusement_info */ 324:
                    message.detail = {
                        oneofKind: "charAmusementInfo",
                        charAmusementInfo: exports.CharAmusementInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.charAmusementInfo)
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
        /* optional uint32 play_index = 13; */
        if (message.playIndex !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 play_type = 11; */
        if (message.playType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.playType);
        /* optional uint32 stage_type = 10; */
        if (message.stageType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stageType);
        /* optional uint32 duration = 8; */
        if (message.duration !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.duration);
        /* optional uint32 group_id = 12; */
        if (message.groupId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 begin_time = 9; */
        if (message.beginTime !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* optional uint32 stage_index = 1; */
        if (message.stageIndex !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.stageIndex);
        /* com.midnights.game.InBattleMechanicusInfo mechanicus_info = 1334; */
        if (message.detail.oneofKind === "mechanicusInfo")
            exports.InBattleMechanicusInfo.internalBinaryWrite(message.detail.mechanicusInfo, writer.tag(1334, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.InBattleFleurFairInfo fleur_fair_info = 1064; */
        if (message.detail.oneofKind === "fleurFairInfo")
            exports.InBattleFleurFairInfo.internalBinaryWrite(message.detail.fleurFairInfo, writer.tag(1064, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.HideAndSeekStageInfo hide_and_seek_info = 108; */
        if (message.detail.oneofKind === "hideAndSeekInfo")
            exports.HideAndSeekStageInfo.internalBinaryWrite(message.detail.hideAndSeekInfo, writer.tag(108, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.InBattleChessInfo chess_info = 1758; */
        if (message.detail.oneofKind === "chessInfo")
            exports.InBattleChessInfo.internalBinaryWrite(message.detail.chessInfo, writer.tag(1758, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.InBattleIrodoriChessInfo irodori_chess_info = 531; */
        if (message.detail.oneofKind === "irodoriChessInfo")
            exports.InBattleIrodoriChessInfo.internalBinaryWrite(message.detail.irodoriChessInfo, writer.tag(531, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.CharAmusementInfo char_amusement_info = 324; */
        if (message.detail.oneofKind === "charAmusementInfo")
            exports.CharAmusementInfo.internalBinaryWrite(message.detail.charAmusementInfo, writer.tag(324, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistagePlayInfo
 */
exports.MultistagePlayInfo = new MultistagePlayInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlayInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistagePlayInfoNotify", [
            { no: 13, name: "info", kind: "message", T: () => exports.MultistagePlayInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.MultistagePlayInfo info */ 13:
                    message.info = exports.MultistagePlayInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.MultistagePlayInfo info = 13; */
        if (message.info)
            exports.MultistagePlayInfo.internalBinaryWrite(message.info, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistagePlayInfoNotify
 */
exports.MultistagePlayInfoNotify = new MultistagePlayInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlayFinishStageReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistagePlayFinishStageReq", [
            { no: 12, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 12:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 play_index */ 15:
                    message.playIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 group_id = 12; */
        if (message.groupId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 play_index = 15; */
        if (message.playIndex !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.playIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistagePlayFinishStageReq
 */
exports.MultistagePlayFinishStageReq = new MultistagePlayFinishStageReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusExcapeMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusExcapeMonsterNotify", [
            { no: 4, name: "excaped_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 excaped_monster_num */ 4:
                    message.excapedMonsterNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 excaped_monster_num = 4; */
        if (message.excapedMonsterNum !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.excapedMonsterNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusExcapeMonsterNotify
 */
exports.InBattleMechanicusExcapeMonsterNotify = new InBattleMechanicusExcapeMonsterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusLeftMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusLeftMonsterNotify", [
            { no: 14, name: "left_monster", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 left_monster */ 14:
                    message.leftMonster = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 left_monster = 14; */
        if (message.leftMonster !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.leftMonster);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusLeftMonsterNotify
 */
exports.InBattleMechanicusLeftMonsterNotify = new InBattleMechanicusLeftMonsterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusBuildingPointsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusBuildingPointsNotify", [
            { no: 4, name: "player_building_points_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { playerBuildingPointsMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> player_building_points_map */ 4:
                    this.binaryReadMap4(message.playerBuildingPointsMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.InBattleMechanicusBuildingPointsNotify.player_building_points_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> player_building_points_map = 4; */
        for (let k of Object.keys(message.playerBuildingPointsMap))
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.playerBuildingPointsMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusBuildingPointsNotify
 */
exports.InBattleMechanicusBuildingPointsNotify = new InBattleMechanicusBuildingPointsNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusPickCardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusPickCardReq", [
            { no: 11, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 11:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 play_index */ 7:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 1:
                    message.cardId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 group_id = 11; */
        if (message.groupId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 play_index = 7; */
        if (message.playIndex !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 card_id = 1; */
        if (message.cardId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.cardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusPickCardReq
 */
exports.InBattleMechanicusPickCardReq = new InBattleMechanicusPickCardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusPickCardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusPickCardRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 card_id */ 2:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 play_index */ 4:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 9:
                    message.groupId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 card_id = 2; */
        if (message.cardId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 play_index = 4; */
        if (message.playIndex !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 group_id = 9; */
        if (message.groupId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.groupId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusPickCardRsp
 */
exports.InBattleMechanicusPickCardRsp = new InBattleMechanicusPickCardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusPickCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusPickCardNotify", [
            { no: 6, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 player_uid */ 6:
                    message.playerUid = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 7:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 play_index */ 8:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 10:
                    message.cardId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 player_uid = 6; */
        if (message.playerUid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* optional uint32 group_id = 7; */
        if (message.groupId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 play_index = 8; */
        if (message.playIndex !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 card_id = 10; */
        if (message.cardId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.cardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusPickCardNotify
 */
exports.InBattleMechanicusPickCardNotify = new InBattleMechanicusPickCardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusConfirmCardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusConfirmCardReq", [
            { no: 6, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_index */ 6:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 1:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 3:
                    message.groupId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 play_index = 6; */
        if (message.playIndex !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 card_id = 1; */
        if (message.cardId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 group_id = 3; */
        if (message.groupId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.groupId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusConfirmCardReq
 */
exports.InBattleMechanicusConfirmCardReq = new InBattleMechanicusConfirmCardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusConfirmCardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusConfirmCardRsp", [
            { no: 2, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_index */ 2:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 14:
                    message.cardId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 group_id */ 6:
                    message.groupId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 play_index = 2; */
        if (message.playIndex !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 card_id = 14; */
        if (message.cardId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 group_id = 6; */
        if (message.groupId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.groupId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusConfirmCardRsp
 */
exports.InBattleMechanicusConfirmCardRsp = new InBattleMechanicusConfirmCardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusConfirmCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusConfirmCardNotify", [
            { no: 11, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_index */ 11:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 13:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 10:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 player_uid */ 2:
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
        /* optional uint32 play_index = 11; */
        if (message.playIndex !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 card_id = 13; */
        if (message.cardId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 group_id = 10; */
        if (message.groupId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 player_uid = 2; */
        if (message.playerUid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.playerUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusConfirmCardNotify
 */
exports.InBattleMechanicusConfirmCardNotify = new InBattleMechanicusConfirmCardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusCardResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusCardResultNotify", [
            { no: 6, name: "wait_seconds", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InBattleMechanicusCardInfo },
            { no: 7, name: "wait_begin_time_us", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "player_confirmed_card_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardList: [], playerConfirmedCardMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 wait_seconds */ 6:
                    message.waitSeconds = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.InBattleMechanicusCardInfo card_list */ 9:
                    message.cardList.push(exports.InBattleMechanicusCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint64 wait_begin_time_us */ 7:
                    message.waitBeginTimeUs = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> player_confirmed_card_map */ 12:
                    this.binaryReadMap12(message.playerConfirmedCardMap, reader, options);
                    break;
                case /* optional uint32 play_index */ 8:
                    message.playIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.InBattleMechanicusCardResultNotify.player_confirmed_card_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 wait_seconds = 6; */
        if (message.waitSeconds !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.waitSeconds);
        /* optional uint32 group_id = 2; */
        if (message.groupId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.groupId);
        /* repeated com.midnights.game.InBattleMechanicusCardInfo card_list = 9; */
        for (let i = 0; i < message.cardList.length; i++)
            exports.InBattleMechanicusCardInfo.internalBinaryWrite(message.cardList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 wait_begin_time_us = 7; */
        if (message.waitBeginTimeUs !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.waitBeginTimeUs);
        /* map<uint32, uint32> player_confirmed_card_map = 12; */
        for (let k of Object.keys(message.playerConfirmedCardMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.playerConfirmedCardMap[k]).join();
        /* optional uint32 play_index = 8; */
        if (message.playIndex !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.playIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusCardResultNotify
 */
exports.InBattleMechanicusCardResultNotify = new InBattleMechanicusCardResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlayFinishStageRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistagePlayFinishStageRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 group_id */ 12:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 play_index */ 6:
                    message.playIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 group_id = 12; */
        if (message.groupId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 play_index = 6; */
        if (message.playIndex !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.playIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistagePlayFinishStageRsp
 */
exports.MultistagePlayFinishStageRsp = new MultistagePlayFinishStageRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistageSettleWatcherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistageSettleWatcherInfo", [
            { no: 13, name: "total_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cur_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "watcher_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_inverse", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 total_progress */ 13:
                    message.totalProgress = reader.uint32();
                    break;
                case /* optional uint32 cur_progress */ 5:
                    message.curProgress = reader.uint32();
                    break;
                case /* optional uint32 watcher_id */ 7:
                    message.watcherId = reader.uint32();
                    break;
                case /* optional bool is_inverse */ 12:
                    message.isInverse = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 total_progress = 13; */
        if (message.totalProgress !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* optional uint32 cur_progress = 5; */
        if (message.curProgress !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* optional uint32 watcher_id = 7; */
        if (message.watcherId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.watcherId);
        /* optional bool is_inverse = 12; */
        if (message.isInverse !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isInverse);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistageSettleWatcherInfo
 */
exports.MultistageSettleWatcherInfo = new MultistageSettleWatcherInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusSettleNotify", [
            { no: 15, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "scene_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "difficulty_percentage", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "total_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MultistageSettleWatcherInfo },
            { no: 13, name: "real_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { watcherList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint64 scene_time_ms */ 11:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 difficulty_percentage */ 6:
                    message.difficultyPercentage = reader.uint32();
                    break;
                case /* optional uint32 total_token */ 7:
                    message.totalToken = reader.uint32();
                    break;
                case /* repeated com.midnights.game.MultistageSettleWatcherInfo watcher_list */ 3:
                    message.watcherList.push(exports.MultistageSettleWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 real_token */ 13:
                    message.realToken = reader.uint32();
                    break;
                case /* optional bool is_success */ 2:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 play_index */ 14:
                    message.playIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 group_id = 15; */
        if (message.groupId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint64 scene_time_ms = 11; */
        if (message.sceneTimeMs !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* optional uint32 difficulty_percentage = 6; */
        if (message.difficultyPercentage !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.difficultyPercentage);
        /* optional uint32 total_token = 7; */
        if (message.totalToken !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.totalToken);
        /* repeated com.midnights.game.MultistageSettleWatcherInfo watcher_list = 3; */
        for (let i = 0; i < message.watcherList.length; i++)
            exports.MultistageSettleWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 real_token = 13; */
        if (message.realToken !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.realToken);
        /* optional bool is_success = 2; */
        if (message.isSuccess !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 play_index = 14; */
        if (message.playIndex !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusSettleNotify
 */
exports.InBattleMechanicusSettleNotify = new InBattleMechanicusSettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleMechanicusSettleInfo", [
            { no: 15, name: "scene_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "total_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "real_token", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MultistageSettleWatcherInfo },
            { no: 6, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "difficulty_percentage", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { watcherList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 scene_time_ms */ 15:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 total_token */ 4:
                    message.totalToken = reader.uint32();
                    break;
                case /* optional uint32 real_token */ 8:
                    message.realToken = reader.uint32();
                    break;
                case /* repeated com.midnights.game.MultistageSettleWatcherInfo watcher_list */ 7:
                    message.watcherList.push(exports.MultistageSettleWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_success */ 6:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 play_index */ 3:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 difficulty_percentage */ 10:
                    message.difficultyPercentage = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 13:
                    message.groupId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 scene_time_ms = 15; */
        if (message.sceneTimeMs !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* optional uint32 total_token = 4; */
        if (message.totalToken !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.totalToken);
        /* optional uint32 real_token = 8; */
        if (message.realToken !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.realToken);
        /* repeated com.midnights.game.MultistageSettleWatcherInfo watcher_list = 7; */
        for (let i = 0; i < message.watcherList.length; i++)
            exports.MultistageSettleWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_success = 6; */
        if (message.isSuccess !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 play_index = 3; */
        if (message.playIndex !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 difficulty_percentage = 10; */
        if (message.difficultyPercentage !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.difficultyPercentage);
        /* optional uint32 group_id = 13; */
        if (message.groupId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.groupId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleMechanicusSettleInfo
 */
exports.InBattleMechanicusSettleInfo = new InBattleMechanicusSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlaySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistagePlaySettleNotify", [
            { no: 14, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1402, name: "mechanicus_settle_info", kind: "message", oneof: "detail", T: () => exports.InBattleMechanicusSettleInfo },
            { no: 1283, name: "chess_settle_info", kind: "message", oneof: "detail", T: () => exports.InBattleChessSettleInfo },
            { no: 612, name: "irodori_chess_settle_info", kind: "message", oneof: "detail", T: () => exports.InBattleIrodoriChessSettleInfo }
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
                case /* optional uint32 play_index */ 14:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 4:
                    message.groupId = reader.uint32();
                    break;
                case /* com.midnights.game.InBattleMechanicusSettleInfo mechanicus_settle_info */ 1402:
                    message.detail = {
                        oneofKind: "mechanicusSettleInfo",
                        mechanicusSettleInfo: exports.InBattleMechanicusSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.mechanicusSettleInfo)
                    };
                    break;
                case /* com.midnights.game.InBattleChessSettleInfo chess_settle_info */ 1283:
                    message.detail = {
                        oneofKind: "chessSettleInfo",
                        chessSettleInfo: exports.InBattleChessSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.chessSettleInfo)
                    };
                    break;
                case /* com.midnights.game.InBattleIrodoriChessSettleInfo irodori_chess_settle_info */ 612:
                    message.detail = {
                        oneofKind: "irodoriChessSettleInfo",
                        irodoriChessSettleInfo: exports.InBattleIrodoriChessSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.irodoriChessSettleInfo)
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
        /* optional uint32 play_index = 14; */
        if (message.playIndex !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional uint32 group_id = 4; */
        if (message.groupId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.groupId);
        /* com.midnights.game.InBattleMechanicusSettleInfo mechanicus_settle_info = 1402; */
        if (message.detail.oneofKind === "mechanicusSettleInfo")
            exports.InBattleMechanicusSettleInfo.internalBinaryWrite(message.detail.mechanicusSettleInfo, writer.tag(1402, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.InBattleChessSettleInfo chess_settle_info = 1283; */
        if (message.detail.oneofKind === "chessSettleInfo")
            exports.InBattleChessSettleInfo.internalBinaryWrite(message.detail.chessSettleInfo, writer.tag(1283, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.InBattleIrodoriChessSettleInfo irodori_chess_settle_info = 612; */
        if (message.detail.oneofKind === "irodoriChessSettleInfo")
            exports.InBattleIrodoriChessSettleInfo.internalBinaryWrite(message.detail.irodoriChessSettleInfo, writer.tag(612, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistagePlaySettleNotify
 */
exports.MultistagePlaySettleNotify = new MultistagePlaySettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlayStageEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistagePlayStageEndNotify", [
            { no: 15, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 play_index */ 9:
                    message.playIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 group_id = 15; */
        if (message.groupId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 play_index = 9; */
        if (message.playIndex !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.playIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistagePlayStageEndNotify
 */
exports.MultistagePlayStageEndNotify = new MultistagePlayStageEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlayEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MultistagePlayEndNotify", [
            { no: 5, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 play_index */ 13:
                    message.playIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 group_id = 5; */
        if (message.groupId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 play_index = 13; */
        if (message.playIndex !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.playIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MultistagePlayEndNotify
 */
exports.MultistagePlayEndNotify = new MultistagePlayEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairBuffEnergyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FleurFairBuffEnergyNotify", [
            { no: 4, name: "energy", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 energy */ 4:
                    message.energy = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 energy = 4; */
        if (message.energy !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.energy);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FleurFairBuffEnergyNotify
 */
exports.FleurFairBuffEnergyNotify = new FleurFairBuffEnergyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FleurFairGallerySettleInfo", [
            { no: 2, name: "energy", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gallery_stage_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "energy_stat_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 9, name: "gallery_stage_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { energyStatMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 energy */ 2:
                    message.energy = reader.uint32();
                    break;
                case /* optional uint32 gallery_stage_index */ 11:
                    message.galleryStageIndex = reader.uint32();
                    break;
                case /* map<uint32, int32> energy_stat_map */ 6:
                    this.binaryReadMap6(message.energyStatMap, reader, options);
                    break;
                case /* optional uint32 gallery_stage_count */ 9:
                    message.galleryStageCount = reader.uint32();
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
    binaryReadMap6(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.FleurFairGallerySettleInfo.energy_stat_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 energy = 2; */
        if (message.energy !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.energy);
        /* optional uint32 gallery_stage_index = 11; */
        if (message.galleryStageIndex !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryStageIndex);
        /* map<uint32, int32> energy_stat_map = 6; */
        for (let k of Object.keys(message.energyStatMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.energyStatMap[k]).join();
        /* optional uint32 gallery_stage_count = 9; */
        if (message.galleryStageCount !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.galleryStageCount);
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
 * @generated MessageType for protobuf message com.midnights.game.FleurFairGallerySettleInfo
 */
exports.FleurFairGallerySettleInfo = new FleurFairGallerySettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairPlayerStatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FleurFairPlayerStatInfo", [
            { no: 11, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "profile_picture", kind: "message", T: () => define_3.ProfilePicture },
            { no: 3, name: "stat_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "head_image", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "param", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string online_id */ 11:
                    message.onlineId = reader.string();
                    break;
                case /* optional uint32 uid */ 8:
                    message.uid = reader.uint32();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 1:
                    message.profilePicture = define_3.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* optional uint32 stat_id */ 3:
                    message.statId = reader.uint32();
                    break;
                case /* optional uint32 head_image */ 6:
                    message.headImage = reader.uint32();
                    break;
                case /* optional string nick_name */ 15:
                    message.nickName = reader.string();
                    break;
                case /* optional int32 param */ 5:
                    message.param = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string online_id = 11; */
        if (message.onlineId !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* optional uint32 uid = 8; */
        if (message.uid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional com.midnights.game.ProfilePicture profile_picture = 1; */
        if (message.profilePicture)
            define_3.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 stat_id = 3; */
        if (message.statId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.statId);
        /* optional uint32 head_image = 6; */
        if (message.headImage !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.headImage);
        /* optional string nick_name = 15; */
        if (message.nickName !== undefined)
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.nickName);
        /* optional int32 param = 5; */
        if (message.param !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FleurFairPlayerStatInfo
 */
exports.FleurFairPlayerStatInfo = new FleurFairPlayerStatInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairBossSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FleurFairBossSettleInfo", [
            { no: 15, name: "reward_token_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "stat_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FleurFairPlayerStatInfo },
            { no: 10, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "energy", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { statInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 reward_token_num */ 15:
                    message.rewardTokenNum = reader.uint32();
                    break;
                case /* repeated com.midnights.game.FleurFairPlayerStatInfo stat_info_list */ 1:
                    message.statInfoList.push(exports.FleurFairPlayerStatInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_success */ 10:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 energy */ 12:
                    message.energy = reader.uint32();
                    break;
                case /* optional uint32 cost_time */ 8:
                    message.costTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 reward_token_num = 15; */
        if (message.rewardTokenNum !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.rewardTokenNum);
        /* repeated com.midnights.game.FleurFairPlayerStatInfo stat_info_list = 1; */
        for (let i = 0; i < message.statInfoList.length; i++)
            exports.FleurFairPlayerStatInfo.internalBinaryWrite(message.statInfoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_success = 10; */
        if (message.isSuccess !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 energy = 12; */
        if (message.energy !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.energy);
        /* optional uint32 cost_time = 8; */
        if (message.costTime !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.costTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FleurFairBossSettleInfo
 */
exports.FleurFairBossSettleInfo = new FleurFairBossSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairStageSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FleurFairStageSettleNotify", [
            { no: 10, name: "stage_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gallery_settle_info", kind: "message", oneof: "detail", T: () => exports.FleurFairGallerySettleInfo },
            { no: 14, name: "boss_settle_info", kind: "message", oneof: "detail", T: () => exports.FleurFairBossSettleInfo }
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
                case /* optional uint32 stage_type */ 10:
                    message.stageType = reader.uint32();
                    break;
                case /* com.midnights.game.FleurFairGallerySettleInfo gallery_settle_info */ 13:
                    message.detail = {
                        oneofKind: "gallerySettleInfo",
                        gallerySettleInfo: exports.FleurFairGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.gallerySettleInfo)
                    };
                    break;
                case /* com.midnights.game.FleurFairBossSettleInfo boss_settle_info */ 14:
                    message.detail = {
                        oneofKind: "bossSettleInfo",
                        bossSettleInfo: exports.FleurFairBossSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.bossSettleInfo)
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
        /* optional uint32 stage_type = 10; */
        if (message.stageType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stageType);
        /* com.midnights.game.FleurFairGallerySettleInfo gallery_settle_info = 13; */
        if (message.detail.oneofKind === "gallerySettleInfo")
            exports.FleurFairGallerySettleInfo.internalBinaryWrite(message.detail.gallerySettleInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.FleurFairBossSettleInfo boss_settle_info = 14; */
        if (message.detail.oneofKind === "bossSettleInfo")
            exports.FleurFairBossSettleInfo.internalBinaryWrite(message.detail.bossSettleInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FleurFairStageSettleNotify
 */
exports.FleurFairStageSettleNotify = new FleurFairStageSettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairFinishGalleryStageNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FleurFairFinishGalleryStageNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.FleurFairFinishGalleryStageNotify
 */
exports.FleurFairFinishGalleryStageNotify = new FleurFairFinishGalleryStageNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekPlayerBattleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekPlayerBattleInfo", [
            { no: 3, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_ready", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 costume_id */ 3:
                    message.costumeId = reader.uint32();
                    break;
                case /* repeated uint32 skill_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillList.push(reader.uint32());
                    else
                        message.skillList.push(reader.uint32());
                    break;
                case /* optional bool is_ready */ 12:
                    message.isReady = reader.bool();
                    break;
                case /* optional uint32 avatar_id */ 6:
                    message.avatarId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 costume_id = 3; */
        if (message.costumeId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.costumeId);
        /* repeated uint32 skill_list = 15; */
        if (message.skillList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillList.length; i++)
                writer.uint32(message.skillList[i]);
            writer.join();
        }
        /* optional bool is_ready = 12; */
        if (message.isReady !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isReady);
        /* optional uint32 avatar_id = 6; */
        if (message.avatarId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekPlayerBattleInfo
 */
exports.HideAndSeekPlayerBattleInfo = new HideAndSeekPlayerBattleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekStageInfo", [
            { no: 8, name: "map_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_record_score", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "stage_type", kind: "enum", opt: true, T: () => ["com.midnights.game.HideAndSeekStageType", HideAndSeekStageType] },
            { no: 2, name: "battle_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.HideAndSeekPlayerBattleInfo } },
            { no: 1, name: "hider_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "hunter_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { battleInfoMap: {}, hiderUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 map_id */ 8:
                    message.mapId = reader.uint32();
                    break;
                case /* optional bool is_record_score */ 3:
                    message.isRecordScore = reader.bool();
                    break;
                case /* optional com.midnights.game.HideAndSeekStageType stage_type */ 7:
                    message.stageType = reader.int32();
                    break;
                case /* map<uint32, com.midnights.game.HideAndSeekPlayerBattleInfo> battle_info_map */ 2:
                    this.binaryReadMap2(message.battleInfoMap, reader, options);
                    break;
                case /* repeated uint32 hider_uid_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.hiderUidList.push(reader.uint32());
                    else
                        message.hiderUidList.push(reader.uint32());
                    break;
                case /* optional uint32 hunter_uid */ 10:
                    message.hunterUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.HideAndSeekPlayerBattleInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.HideAndSeekStageInfo.battle_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.HideAndSeekPlayerBattleInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 map_id = 8; */
        if (message.mapId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.mapId);
        /* optional bool is_record_score = 3; */
        if (message.isRecordScore !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isRecordScore);
        /* optional com.midnights.game.HideAndSeekStageType stage_type = 7; */
        if (message.stageType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.stageType);
        /* map<uint32, com.midnights.game.HideAndSeekPlayerBattleInfo> battle_info_map = 2; */
        for (let k of Object.keys(message.battleInfoMap)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.HideAndSeekPlayerBattleInfo.internalBinaryWrite(message.battleInfoMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 hider_uid_list = 1; */
        if (message.hiderUidList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.hiderUidList.length; i++)
                writer.uint32(message.hiderUidList[i]);
            writer.join();
        }
        /* optional uint32 hunter_uid = 10; */
        if (message.hunterUid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.hunterUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekStageInfo
 */
exports.HideAndSeekStageInfo = new HideAndSeekStageInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSelectAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekSelectAvatarReq", [
            { no: 8, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 8:
                    message.avatarId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 8; */
        if (message.avatarId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekSelectAvatarReq
 */
exports.HideAndSeekSelectAvatarReq = new HideAndSeekSelectAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSelectAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekSelectAvatarRsp", [
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 avatar_id */ 3:
                    message.avatarId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 avatar_id = 3; */
        if (message.avatarId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekSelectAvatarRsp
 */
exports.HideAndSeekSelectAvatarRsp = new HideAndSeekSelectAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSetReadyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekSetReadyReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekSetReadyReq
 */
exports.HideAndSeekSetReadyReq = new HideAndSeekSetReadyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSetReadyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekSetReadyRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekSetReadyRsp
 */
exports.HideAndSeekSetReadyRsp = new HideAndSeekSetReadyRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekSettleInfo", [
            { no: 2, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "profile_picture", kind: "message", T: () => define_3.ProfilePicture },
            { no: 8, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ExhibitionDisplayInfo },
            { no: 3, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "head_image", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 1:
                    message.profilePicture = define_3.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* repeated com.midnights.game.ExhibitionDisplayInfo card_list */ 8:
                    message.cardList.push(define_2.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string nickname */ 3:
                    message.nickname = reader.string();
                    break;
                case /* optional uint32 head_image */ 4:
                    message.headImage = reader.uint32();
                    break;
                case /* optional string online_id */ 10:
                    message.onlineId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 2; */
        if (message.uid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional com.midnights.game.ProfilePicture profile_picture = 1; */
        if (message.profilePicture)
            define_3.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ExhibitionDisplayInfo card_list = 8; */
        for (let i = 0; i < message.cardList.length; i++)
            define_2.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string nickname = 3; */
        if (message.nickname !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* optional uint32 head_image = 4; */
        if (message.headImage !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.headImage);
        /* optional string online_id = 10; */
        if (message.onlineId !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekSettleInfo
 */
exports.HideAndSeekSettleInfo = new HideAndSeekSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekSettleNotify", [
            { no: 2, name: "cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "settle_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.HideAndSeekSettleInfo },
            { no: 15, name: "winner_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.HideAndSeekSettleNotify.SettleReason", HideAndSeekSettleNotify_SettleReason] },
            { no: 13, name: "play_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_record_score", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ExhibitionDisplayInfo },
            { no: 14, name: "stage_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { settleInfoList: [], winnerList: [], scoreList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cost_time */ 2:
                    message.costTime = reader.uint32();
                    break;
                case /* repeated com.midnights.game.HideAndSeekSettleInfo settle_info_list */ 8:
                    message.settleInfoList.push(exports.HideAndSeekSettleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 winner_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.winnerList.push(reader.uint32());
                    else
                        message.winnerList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.HideAndSeekSettleNotify.SettleReason reason */ 4:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 play_index */ 13:
                    message.playIndex = reader.uint32();
                    break;
                case /* optional bool is_record_score */ 6:
                    message.isRecordScore = reader.bool();
                    break;
                case /* repeated com.midnights.game.ExhibitionDisplayInfo score_list */ 9:
                    message.scoreList.push(define_2.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 stage_type */ 14:
                    message.stageType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cost_time = 2; */
        if (message.costTime !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.costTime);
        /* repeated com.midnights.game.HideAndSeekSettleInfo settle_info_list = 8; */
        for (let i = 0; i < message.settleInfoList.length; i++)
            exports.HideAndSeekSettleInfo.internalBinaryWrite(message.settleInfoList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 winner_list = 15; */
        if (message.winnerList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.winnerList.length; i++)
                writer.uint32(message.winnerList[i]);
            writer.join();
        }
        /* optional com.midnights.game.HideAndSeekSettleNotify.SettleReason reason = 4; */
        if (message.reason !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 play_index = 13; */
        if (message.playIndex !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* optional bool is_record_score = 6; */
        if (message.isRecordScore !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isRecordScore);
        /* repeated com.midnights.game.ExhibitionDisplayInfo score_list = 9; */
        for (let i = 0; i < message.scoreList.length; i++)
            define_2.ExhibitionDisplayInfo.internalBinaryWrite(message.scoreList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 stage_type = 14; */
        if (message.stageType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.stageType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekSettleNotify
 */
exports.HideAndSeekSettleNotify = new HideAndSeekSettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekPlayerReadyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekPlayerReadyNotify", [
            { no: 5, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
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
                case /* repeated uint32 uid_list */ 5:
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
        /* repeated uint32 uid_list = 5; */
        if (message.uidList.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekPlayerReadyNotify
 */
exports.HideAndSeekPlayerReadyNotify = new HideAndSeekPlayerReadyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekPlayerSetAvatarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HideAndSeekPlayerSetAvatarNotify", [
            { no: 2, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 costume_id */ 13:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 5:
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
        /* optional uint32 avatar_id = 2; */
        if (message.avatarId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 costume_id = 13; */
        if (message.costumeId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.costumeId);
        /* optional uint32 uid = 5; */
        if (message.uid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HideAndSeekPlayerSetAvatarNotify
 */
exports.HideAndSeekPlayerSetAvatarNotify = new HideAndSeekPlayerSetAvatarNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessCardInfo", [
            { no: 12, name: "effect_stack", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 effect_stack */ 12:
                    message.effectStack = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 11:
                    message.cardId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 effect_stack = 12; */
        if (message.effectStack !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.effectStack);
        /* optional uint32 card_id = 11; */
        if (message.cardId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessCardInfo
 */
exports.ChessCardInfo = new ChessCardInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleChessInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleChessInfo", [
            { no: 2, name: "ban_card_tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "selected_card_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ChessCardInfo },
            { no: 1, name: "mystery_info", kind: "message", T: () => exports.ChessMysteryInfo },
            { no: 8, name: "player_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.ChessPlayerInfo } },
            { no: 6, name: "max_escapable_monsters", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "excaped_monsters", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "total_round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "left_monsters", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { banCardTagList: [], selectedCardInfoList: [], playerInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 ban_card_tag_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.banCardTagList.push(reader.uint32());
                    else
                        message.banCardTagList.push(reader.uint32());
                    break;
                case /* optional uint32 round */ 4:
                    message.round = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ChessCardInfo selected_card_info_list */ 9:
                    message.selectedCardInfoList.push(exports.ChessCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.ChessMysteryInfo mystery_info */ 1:
                    message.mysteryInfo = exports.ChessMysteryInfo.internalBinaryRead(reader, reader.uint32(), options, message.mysteryInfo);
                    break;
                case /* map<uint32, com.midnights.game.ChessPlayerInfo> player_info_map */ 8:
                    this.binaryReadMap8(message.playerInfoMap, reader, options);
                    break;
                case /* optional uint32 max_escapable_monsters */ 6:
                    message.maxEscapableMonsters = reader.uint32();
                    break;
                case /* optional uint32 excaped_monsters */ 12:
                    message.excapedMonsters = reader.uint32();
                    break;
                case /* optional uint32 total_round */ 14:
                    message.totalRound = reader.uint32();
                    break;
                case /* optional uint32 left_monsters */ 15:
                    message.leftMonsters = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.ChessPlayerInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.InBattleChessInfo.player_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.ChessPlayerInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 ban_card_tag_list = 2; */
        if (message.banCardTagList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.banCardTagList.length; i++)
                writer.uint32(message.banCardTagList[i]);
            writer.join();
        }
        /* optional uint32 round = 4; */
        if (message.round !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.round);
        /* repeated com.midnights.game.ChessCardInfo selected_card_info_list = 9; */
        for (let i = 0; i < message.selectedCardInfoList.length; i++)
            exports.ChessCardInfo.internalBinaryWrite(message.selectedCardInfoList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ChessMysteryInfo mystery_info = 1; */
        if (message.mysteryInfo)
            exports.ChessMysteryInfo.internalBinaryWrite(message.mysteryInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, com.midnights.game.ChessPlayerInfo> player_info_map = 8; */
        for (let k of Object.keys(message.playerInfoMap)) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.ChessPlayerInfo.internalBinaryWrite(message.playerInfoMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 max_escapable_monsters = 6; */
        if (message.maxEscapableMonsters !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.maxEscapableMonsters);
        /* optional uint32 excaped_monsters = 12; */
        if (message.excapedMonsters !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.excapedMonsters);
        /* optional uint32 total_round = 14; */
        if (message.totalRound !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.totalRound);
        /* optional uint32 left_monsters = 15; */
        if (message.leftMonsters !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.leftMonsters);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleChessInfo
 */
exports.InBattleChessInfo = new InBattleChessInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleChessSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleChessSettleInfo", [
            { no: 7, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "chess_exp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "chess_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "old_chess_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ExhibitionDisplayInfo },
            { no: 14, name: "scene_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "old_chess_exp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_success */ 7:
                    message.isSuccess = reader.bool();
                    break;
                case /* optional uint32 chess_exp */ 11:
                    message.chessExp = reader.uint32();
                    break;
                case /* optional uint32 chess_level */ 13:
                    message.chessLevel = reader.uint32();
                    break;
                case /* optional uint32 old_chess_level */ 10:
                    message.oldChessLevel = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ExhibitionDisplayInfo score_list */ 1:
                    message.scoreList.push(define_2.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint64 scene_time_ms */ 14:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 old_chess_exp */ 2:
                    message.oldChessExp = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_success = 7; */
        if (message.isSuccess !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* optional uint32 chess_exp = 11; */
        if (message.chessExp !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.chessExp);
        /* optional uint32 chess_level = 13; */
        if (message.chessLevel !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.chessLevel);
        /* optional uint32 old_chess_level = 10; */
        if (message.oldChessLevel !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.oldChessLevel);
        /* repeated com.midnights.game.ExhibitionDisplayInfo score_list = 1; */
        for (let i = 0; i < message.scoreList.length; i++)
            define_2.ExhibitionDisplayInfo.internalBinaryWrite(message.scoreList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 scene_time_ms = 14; */
        if (message.sceneTimeMs !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* optional uint32 old_chess_exp = 2; */
        if (message.oldChessExp !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.oldChessExp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleChessSettleInfo
 */
exports.InBattleChessSettleInfo = new InBattleChessSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessPlayerInfo", [
            { no: 5, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "free_refresh_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "candidate_card_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ChessNormalCardInfo },
            { no: 12, name: "building_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "candidate_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "free_refresh_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "refresh_cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { candidateCardInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 5:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint32 free_refresh_limit */ 10:
                    message.freeRefreshLimit = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ChessNormalCardInfo candidate_card_info_list */ 3:
                    message.candidateCardInfoList.push(exports.ChessNormalCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 building_points */ 12:
                    message.buildingPoints = reader.uint32();
                    break;
                case /* optional uint32 candidate_index */ 6:
                    message.candidateIndex = reader.uint32();
                    break;
                case /* optional uint32 free_refresh_count */ 13:
                    message.freeRefreshCount = reader.uint32();
                    break;
                case /* optional uint32 refresh_cost */ 7:
                    message.refreshCost = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 5; */
        if (message.uid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint32 free_refresh_limit = 10; */
        if (message.freeRefreshLimit !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.freeRefreshLimit);
        /* repeated com.midnights.game.ChessNormalCardInfo candidate_card_info_list = 3; */
        for (let i = 0; i < message.candidateCardInfoList.length; i++)
            exports.ChessNormalCardInfo.internalBinaryWrite(message.candidateCardInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 building_points = 12; */
        if (message.buildingPoints !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.buildingPoints);
        /* optional uint32 candidate_index = 6; */
        if (message.candidateIndex !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.candidateIndex);
        /* optional uint32 free_refresh_count = 13; */
        if (message.freeRefreshCount !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.freeRefreshCount);
        /* optional uint32 refresh_cost = 7; */
        if (message.refreshCost !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.refreshCost);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessPlayerInfo
 */
exports.ChessPlayerInfo = new ChessPlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessMonsterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessMonsterInfo", [
            { no: 12, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { affixList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 monster_id */ 12:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional uint32 level */ 2:
                    message.level = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 monster_id = 12; */
        if (message.monsterId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* optional uint32 level = 2; */
        if (message.level !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.level);
        /* repeated uint32 affix_list = 13; */
        if (message.affixList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessMonsterInfo
 */
exports.ChessMonsterInfo = new ChessMonsterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessEntranceInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessEntranceInfo", [
            { no: 14, name: "monster_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ChessMonsterInfo },
            { no: 15, name: "entrance_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entrance_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ChessMonsterInfo monster_info_list */ 14:
                    message.monsterInfoList.push(exports.ChessMonsterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 entrance_index */ 15:
                    message.entranceIndex = reader.uint32();
                    break;
                case /* optional uint32 entrance_point_id */ 8:
                    message.entrancePointId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ChessMonsterInfo monster_info_list = 14; */
        for (let i = 0; i < message.monsterInfoList.length; i++)
            exports.ChessMonsterInfo.internalBinaryWrite(message.monsterInfoList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entrance_index = 15; */
        if (message.entranceIndex !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entranceIndex);
        /* optional uint32 entrance_point_id = 8; */
        if (message.entrancePointId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entrancePointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessEntranceInfo
 */
exports.ChessEntranceInfo = new ChessEntranceInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessEntranceDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessEntranceDetailInfo", [
            { no: 4, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ChessEntranceInfo }
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
                case /* repeated com.midnights.game.ChessEntranceInfo info_list */ 4:
                    message.infoList.push(exports.ChessEntranceInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ChessEntranceInfo info_list = 4; */
        for (let i = 0; i < message.infoList.length; i++)
            exports.ChessEntranceInfo.internalBinaryWrite(message.infoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessEntranceDetailInfo
 */
exports.ChessEntranceDetailInfo = new ChessEntranceDetailInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessMysteryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessMysteryInfo", [
            { no: 13, name: "entrance_point_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "exit_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "detail_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.ChessEntranceDetailInfo } }
        ]);
    }
    create(value) {
        const message = { entrancePointMap: {}, exitPointIdList: [], detailInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> entrance_point_map */ 13:
                    this.binaryReadMap13(message.entrancePointMap, reader, options);
                    break;
                case /* repeated uint32 exit_point_id_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exitPointIdList.push(reader.uint32());
                    else
                        message.exitPointIdList.push(reader.uint32());
                    break;
                case /* map<uint32, com.midnights.game.ChessEntranceDetailInfo> detail_info_map */ 5:
                    this.binaryReadMap5(message.detailInfoMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ChessMysteryInfo.entrance_point_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                    val = exports.ChessEntranceDetailInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ChessMysteryInfo.detail_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.ChessEntranceDetailInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> entrance_point_map = 13; */
        for (let k of Object.keys(message.entrancePointMap))
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.entrancePointMap[k]).join();
        /* repeated uint32 exit_point_id_list = 3; */
        if (message.exitPointIdList.length) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exitPointIdList.length; i++)
                writer.uint32(message.exitPointIdList[i]);
            writer.join();
        }
        /* map<uint32, com.midnights.game.ChessEntranceDetailInfo> detail_info_map = 5; */
        for (let k of Object.keys(message.detailInfoMap)) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.ChessEntranceDetailInfo.internalBinaryWrite(message.detailInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessMysteryInfo
 */
exports.ChessMysteryInfo = new ChessMysteryInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessNormalCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessNormalCardInfo", [
            { no: 2, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cost_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_attach_curse", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_id */ 2:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 cost_points */ 15:
                    message.costPoints = reader.uint32();
                    break;
                case /* optional bool is_attach_curse */ 6:
                    message.isAttachCurse = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_id = 2; */
        if (message.cardId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 cost_points = 15; */
        if (message.costPoints !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.costPoints);
        /* optional bool is_attach_curse = 6; */
        if (message.isAttachCurse !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAttachCurse);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessNormalCardInfo
 */
exports.ChessNormalCardInfo = new ChessNormalCardInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessPickCardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessPickCardReq", [
            { no: 1, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_id */ 1:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 card_index */ 4:
                    message.cardIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_id = 1; */
        if (message.cardId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 card_index = 4; */
        if (message.cardIndex !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cardIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessPickCardReq
 */
exports.ChessPickCardReq = new ChessPickCardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessPickCardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessPickCardRsp", [
            { no: 11, name: "card_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 card_index */ 11:
                    message.cardIndex = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 1:
                    message.cardId = reader.uint32();
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
        /* optional uint32 card_index = 11; */
        if (message.cardIndex !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cardIndex);
        /* optional uint32 card_id = 1; */
        if (message.cardId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.cardId);
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
 * @generated MessageType for protobuf message com.midnights.game.ChessPickCardRsp
 */
exports.ChessPickCardRsp = new ChessPickCardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessPickCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessPickCardNotify", [
            { no: 13, name: "curse_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "normal_card_info", kind: "message", T: () => exports.ChessNormalCardInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 curse_card_id */ 13:
                    message.curseCardId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ChessNormalCardInfo normal_card_info */ 1:
                    message.normalCardInfo = exports.ChessNormalCardInfo.internalBinaryRead(reader, reader.uint32(), options, message.normalCardInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 curse_card_id = 13; */
        if (message.curseCardId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.curseCardId);
        /* optional com.midnights.game.ChessNormalCardInfo normal_card_info = 1; */
        if (message.normalCardInfo)
            exports.ChessNormalCardInfo.internalBinaryWrite(message.normalCardInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessPickCardNotify
 */
exports.ChessPickCardNotify = new ChessPickCardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessManualRefreshCardsReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessManualRefreshCardsReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ChessManualRefreshCardsReq
 */
exports.ChessManualRefreshCardsReq = new ChessManualRefreshCardsReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessManualRefreshCardsRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessManualRefreshCardsRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.ChessManualRefreshCardsRsp
 */
exports.ChessManualRefreshCardsRsp = new ChessManualRefreshCardsRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessPlayerInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessPlayerInfoNotify", [
            { no: 10, name: "player_info", kind: "message", T: () => exports.ChessPlayerInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ChessPlayerInfo player_info */ 10:
                    message.playerInfo = exports.ChessPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ChessPlayerInfo player_info = 10; */
        if (message.playerInfo)
            exports.ChessPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessPlayerInfoNotify
 */
exports.ChessPlayerInfoNotify = new ChessPlayerInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessLeftMonstersNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessLeftMonstersNotify", [
            { no: 6, name: "left_monsters", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 left_monsters */ 6:
                    message.leftMonsters = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 left_monsters = 6; */
        if (message.leftMonsters !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.leftMonsters);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessLeftMonstersNotify
 */
exports.ChessLeftMonstersNotify = new ChessLeftMonstersNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessEscapedMonstersNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessEscapedMonstersNotify", [
            { no: 14, name: "excaped_monsters", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 excaped_monsters */ 14:
                    message.excapedMonsters = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 excaped_monsters = 14; */
        if (message.excapedMonsters !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.excapedMonsters);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessEscapedMonstersNotify
 */
exports.ChessEscapedMonstersNotify = new ChessEscapedMonstersNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChessSelectedCardsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChessSelectedCardsNotify", [
            { no: 4, name: "selected_card_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ChessCardInfo }
        ]);
    }
    create(value) {
        const message = { selectedCardInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ChessCardInfo selected_card_info_list */ 4:
                    message.selectedCardInfoList.push(exports.ChessCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ChessCardInfo selected_card_info_list = 4; */
        for (let i = 0; i < message.selectedCardInfoList.length; i++)
            exports.ChessCardInfo.internalBinaryWrite(message.selectedCardInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChessSelectedCardsNotify
 */
exports.ChessSelectedCardsNotify = new ChessSelectedCardsNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GlobalBuildingInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GlobalBuildingInfoNotify", [
            { no: 5, name: "current_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "building_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.BuildingInfo },
            { no: 13, name: "max_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { buildingList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 current_num */ 5:
                    message.currentNum = reader.uint32();
                    break;
                case /* repeated com.midnights.game.BuildingInfo building_list */ 3:
                    message.buildingList.push(define_1.BuildingInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 max_num */ 13:
                    message.maxNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 current_num = 5; */
        if (message.currentNum !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.currentNum);
        /* repeated com.midnights.game.BuildingInfo building_list = 3; */
        for (let i = 0; i < message.buildingList.length; i++)
            define_1.BuildingInfo.internalBinaryWrite(message.buildingList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 max_num = 13; */
        if (message.maxNum !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.maxNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GlobalBuildingInfoNotify
 */
exports.GlobalBuildingInfoNotify = new GlobalBuildingInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleIrodoriChessInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleIrodoriChessInfo", [
            { no: 3, name: "mystery_info", kind: "message", T: () => exports.IrodoriChessMysteryInfo },
            { no: 12, name: "left_monsters", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "selected_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "building_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "settle_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { selectedCardIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.IrodoriChessMysteryInfo mystery_info */ 3:
                    message.mysteryInfo = exports.IrodoriChessMysteryInfo.internalBinaryRead(reader, reader.uint32(), options, message.mysteryInfo);
                    break;
                case /* optional uint32 left_monsters */ 12:
                    message.leftMonsters = reader.uint32();
                    break;
                case /* repeated uint32 selected_card_id_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectedCardIdList.push(reader.uint32());
                    else
                        message.selectedCardIdList.push(reader.uint32());
                    break;
                case /* optional uint32 building_points */ 7:
                    message.buildingPoints = reader.uint32();
                    break;
                case /* optional uint32 settle_score */ 4:
                    message.settleScore = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.IrodoriChessMysteryInfo mystery_info = 3; */
        if (message.mysteryInfo)
            exports.IrodoriChessMysteryInfo.internalBinaryWrite(message.mysteryInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 left_monsters = 12; */
        if (message.leftMonsters !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.leftMonsters);
        /* repeated uint32 selected_card_id_list = 13; */
        if (message.selectedCardIdList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectedCardIdList.length; i++)
                writer.uint32(message.selectedCardIdList[i]);
            writer.join();
        }
        /* optional uint32 building_points = 7; */
        if (message.buildingPoints !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.buildingPoints);
        /* optional uint32 settle_score = 4; */
        if (message.settleScore !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.settleScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleIrodoriChessInfo
 */
exports.InBattleIrodoriChessInfo = new InBattleIrodoriChessInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessMonsterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriChessMonsterInfo", [
            { no: 6, name: "grant_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { affixList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 grant_points */ 6:
                    message.grantPoints = reader.uint32();
                    break;
                case /* optional uint32 level */ 13:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 monster_id */ 14:
                    message.monsterId = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 grant_points = 6; */
        if (message.grantPoints !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.grantPoints);
        /* optional uint32 level = 13; */
        if (message.level !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 monster_id = 14; */
        if (message.monsterId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* repeated uint32 affix_list = 11; */
        if (message.affixList.length) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriChessMonsterInfo
 */
exports.IrodoriChessMonsterInfo = new IrodoriChessMonsterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessEntranceInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriChessEntranceInfo", [
            { no: 6, name: "monster_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.IrodoriChessMonsterInfo },
            { no: 4, name: "entrance_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.IrodoriChessMonsterInfo monster_info_list */ 6:
                    message.monsterInfoList.push(exports.IrodoriChessMonsterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 entrance_point_id */ 4:
                    message.entrancePointId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.IrodoriChessMonsterInfo monster_info_list = 6; */
        for (let i = 0; i < message.monsterInfoList.length; i++)
            exports.IrodoriChessMonsterInfo.internalBinaryWrite(message.monsterInfoList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entrance_point_id = 4; */
        if (message.entrancePointId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entrancePointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriChessEntranceInfo
 */
exports.IrodoriChessEntranceInfo = new IrodoriChessEntranceInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessEntranceDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriChessEntranceDetailInfo", [
            { no: 15, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.IrodoriChessEntranceInfo }
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
                case /* repeated com.midnights.game.IrodoriChessEntranceInfo info_list */ 15:
                    message.infoList.push(exports.IrodoriChessEntranceInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.IrodoriChessEntranceInfo info_list = 15; */
        for (let i = 0; i < message.infoList.length; i++)
            exports.IrodoriChessEntranceInfo.internalBinaryWrite(message.infoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriChessEntranceDetailInfo
 */
exports.IrodoriChessEntranceDetailInfo = new IrodoriChessEntranceDetailInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessMysteryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriChessMysteryInfo", [
            { no: 5, name: "entrance_detail_info", kind: "message", T: () => exports.IrodoriChessEntranceDetailInfo },
            { no: 2, name: "entrance_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "exit_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entrancePointIdList: [], exitPointIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.IrodoriChessEntranceDetailInfo entrance_detail_info */ 5:
                    message.entranceDetailInfo = exports.IrodoriChessEntranceDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.entranceDetailInfo);
                    break;
                case /* repeated uint32 entrance_point_id_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entrancePointIdList.push(reader.uint32());
                    else
                        message.entrancePointIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 exit_point_id_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exitPointIdList.push(reader.uint32());
                    else
                        message.exitPointIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.IrodoriChessEntranceDetailInfo entrance_detail_info = 5; */
        if (message.entranceDetailInfo)
            exports.IrodoriChessEntranceDetailInfo.internalBinaryWrite(message.entranceDetailInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 entrance_point_id_list = 2; */
        if (message.entrancePointIdList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entrancePointIdList.length; i++)
                writer.uint32(message.entrancePointIdList[i]);
            writer.join();
        }
        /* repeated uint32 exit_point_id_list = 13; */
        if (message.exitPointIdList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exitPointIdList.length; i++)
                writer.uint32(message.exitPointIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriChessMysteryInfo
 */
exports.IrodoriChessMysteryInfo = new IrodoriChessMysteryInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InBattleIrodoriChessSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InBattleIrodoriChessSettleInfo", [
            { no: 5, name: "is_new_record", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "is_activity_end", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "scene_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "settle_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_perfect", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "kill_monster_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_new_record */ 5:
                    message.isNewRecord = reader.bool();
                    break;
                case /* optional bool is_activity_end */ 2:
                    message.isActivityEnd = reader.bool();
                    break;
                case /* optional uint64 scene_time_ms */ 1:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 settle_score */ 3:
                    message.settleScore = reader.uint32();
                    break;
                case /* optional bool is_perfect */ 12:
                    message.isPerfect = reader.bool();
                    break;
                case /* optional uint32 kill_monster_num */ 7:
                    message.killMonsterNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_new_record = 5; */
        if (message.isNewRecord !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* optional bool is_activity_end = 2; */
        if (message.isActivityEnd !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isActivityEnd);
        /* optional uint64 scene_time_ms = 1; */
        if (message.sceneTimeMs !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* optional uint32 settle_score = 3; */
        if (message.settleScore !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.settleScore);
        /* optional bool is_perfect = 12; */
        if (message.isPerfect !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isPerfect);
        /* optional uint32 kill_monster_num = 7; */
        if (message.killMonsterNum !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.killMonsterNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InBattleIrodoriChessSettleInfo
 */
exports.InBattleIrodoriChessSettleInfo = new InBattleIrodoriChessSettleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriChessPlayerInfo", [
            { no: 4, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "building_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "settle_score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 4:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint32 building_points */ 9:
                    message.buildingPoints = reader.uint32();
                    break;
                case /* optional uint32 settle_score */ 3:
                    message.settleScore = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 4; */
        if (message.uid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint32 building_points = 9; */
        if (message.buildingPoints !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.buildingPoints);
        /* optional uint32 settle_score = 3; */
        if (message.settleScore !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.settleScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriChessPlayerInfo
 */
exports.IrodoriChessPlayerInfo = new IrodoriChessPlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessPlayerInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriChessPlayerInfoNotify", [
            { no: 6, name: "player_info", kind: "message", T: () => exports.IrodoriChessPlayerInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.IrodoriChessPlayerInfo player_info */ 6:
                    message.playerInfo = exports.IrodoriChessPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.IrodoriChessPlayerInfo player_info = 6; */
        if (message.playerInfo)
            exports.IrodoriChessPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriChessPlayerInfoNotify
 */
exports.IrodoriChessPlayerInfoNotify = new IrodoriChessPlayerInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessLeftMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.IrodoriChessLeftMonsterNotify", [
            { no: 8, name: "left_monsters", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 left_monsters */ 8:
                    message.leftMonsters = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 left_monsters = 8; */
        if (message.leftMonsters !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.leftMonsters);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.IrodoriChessLeftMonsterNotify
 */
exports.IrodoriChessLeftMonsterNotify = new IrodoriChessLeftMonsterNotify$Type();
