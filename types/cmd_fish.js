"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishPoolDataNotify = exports.PlayerFishingDataNotify = exports.FishBaitGoneNotify = exports.FishAttractNotify = exports.ExitFishingRsp = exports.ExitFishingReq = exports.FishBattleEndRsp = exports.FishBattleEndReq = exports.FishBattleBeginRsp = exports.FishBattleBeginReq = exports.FishBiteRsp = exports.FishBiteReq = exports.FishEscapeNotify = exports.FishChosenNotify = exports.FishCastRodRsp = exports.FishCastRodReq = exports.StartFishingRsp = exports.StartFishingReq = exports.EnterFishingRsp = exports.EnterFishingReq = exports.FishBattleResult = exports.FishEscapeReason = exports.FishPoolDataNotify_CmdId = exports.PlayerFishingDataNotify_CmdId = exports.FishBaitGoneNotify_CmdId = exports.FishAttractNotify_CmdId = exports.ExitFishingRsp_CmdId = exports.ExitFishingReq_CmdId = exports.FishBattleEndRsp_CmdId = exports.FishBattleEndRsp_FishNoRewardReason = exports.FishBattleEndReq_CmdId = exports.FishBattleBeginRsp_CmdId = exports.FishBattleBeginReq_CmdId = exports.FishBiteRsp_CmdId = exports.FishBiteReq_CmdId = exports.FishEscapeNotify_CmdId = exports.FishChosenNotify_CmdId = exports.FishCastRodRsp_CmdId = exports.FishCastRodReq_CmdId = exports.StartFishingRsp_CmdId = exports.StartFishingReq_CmdId = exports.EnterFishingRsp_CmdId = exports.EnterFishingReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.EnterFishingReq.CmdId
 */
var EnterFishingReq_CmdId;
(function (EnterFishingReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterFishingReq_CmdId[EnterFishingReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5826;
     */
    EnterFishingReq_CmdId[EnterFishingReq_CmdId["CMD_ID"] = 5826] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterFishingReq_CmdId[EnterFishingReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterFishingReq_CmdId[EnterFishingReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterFishingReq_CmdId[EnterFishingReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterFishingReq_CmdId = exports.EnterFishingReq_CmdId || (exports.EnterFishingReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterFishingRsp.CmdId
 */
var EnterFishingRsp_CmdId;
(function (EnterFishingRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterFishingRsp_CmdId[EnterFishingRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5818;
     */
    EnterFishingRsp_CmdId[EnterFishingRsp_CmdId["CMD_ID"] = 5818] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterFishingRsp_CmdId[EnterFishingRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterFishingRsp_CmdId[EnterFishingRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EnterFishingRsp_CmdId = exports.EnterFishingRsp_CmdId || (exports.EnterFishingRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StartFishingReq.CmdId
 */
var StartFishingReq_CmdId;
(function (StartFishingReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartFishingReq_CmdId[StartFishingReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5825;
     */
    StartFishingReq_CmdId[StartFishingReq_CmdId["CMD_ID"] = 5825] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartFishingReq_CmdId[StartFishingReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StartFishingReq_CmdId[StartFishingReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StartFishingReq_CmdId[StartFishingReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(StartFishingReq_CmdId = exports.StartFishingReq_CmdId || (exports.StartFishingReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StartFishingRsp.CmdId
 */
var StartFishingRsp_CmdId;
(function (StartFishingRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartFishingRsp_CmdId[StartFishingRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5807;
     */
    StartFishingRsp_CmdId[StartFishingRsp_CmdId["CMD_ID"] = 5807] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartFishingRsp_CmdId[StartFishingRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StartFishingRsp_CmdId[StartFishingRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(StartFishingRsp_CmdId = exports.StartFishingRsp_CmdId || (exports.StartFishingRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishCastRodReq.CmdId
 */
var FishCastRodReq_CmdId;
(function (FishCastRodReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishCastRodReq_CmdId[FishCastRodReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5802;
     */
    FishCastRodReq_CmdId[FishCastRodReq_CmdId["CMD_ID"] = 5802] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishCastRodReq_CmdId[FishCastRodReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishCastRodReq_CmdId[FishCastRodReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishCastRodReq_CmdId[FishCastRodReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FishCastRodReq_CmdId = exports.FishCastRodReq_CmdId || (exports.FishCastRodReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishCastRodRsp.CmdId
 */
var FishCastRodRsp_CmdId;
(function (FishCastRodRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishCastRodRsp_CmdId[FishCastRodRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5831;
     */
    FishCastRodRsp_CmdId[FishCastRodRsp_CmdId["CMD_ID"] = 5831] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishCastRodRsp_CmdId[FishCastRodRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishCastRodRsp_CmdId[FishCastRodRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishCastRodRsp_CmdId = exports.FishCastRodRsp_CmdId || (exports.FishCastRodRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishChosenNotify.CmdId
 */
var FishChosenNotify_CmdId;
(function (FishChosenNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishChosenNotify_CmdId[FishChosenNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5829;
     */
    FishChosenNotify_CmdId[FishChosenNotify_CmdId["CMD_ID"] = 5829] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishChosenNotify_CmdId[FishChosenNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishChosenNotify_CmdId[FishChosenNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishChosenNotify_CmdId = exports.FishChosenNotify_CmdId || (exports.FishChosenNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishEscapeNotify.CmdId
 */
var FishEscapeNotify_CmdId;
(function (FishEscapeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishEscapeNotify_CmdId[FishEscapeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5822;
     */
    FishEscapeNotify_CmdId[FishEscapeNotify_CmdId["CMD_ID"] = 5822] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishEscapeNotify_CmdId[FishEscapeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishEscapeNotify_CmdId[FishEscapeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishEscapeNotify_CmdId = exports.FishEscapeNotify_CmdId || (exports.FishEscapeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBiteReq.CmdId
 */
var FishBiteReq_CmdId;
(function (FishBiteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBiteReq_CmdId[FishBiteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5844;
     */
    FishBiteReq_CmdId[FishBiteReq_CmdId["CMD_ID"] = 5844] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBiteReq_CmdId[FishBiteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBiteReq_CmdId[FishBiteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBiteReq_CmdId[FishBiteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FishBiteReq_CmdId = exports.FishBiteReq_CmdId || (exports.FishBiteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBiteRsp.CmdId
 */
var FishBiteRsp_CmdId;
(function (FishBiteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBiteRsp_CmdId[FishBiteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5849;
     */
    FishBiteRsp_CmdId[FishBiteRsp_CmdId["CMD_ID"] = 5849] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBiteRsp_CmdId[FishBiteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBiteRsp_CmdId[FishBiteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishBiteRsp_CmdId = exports.FishBiteRsp_CmdId || (exports.FishBiteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBattleBeginReq.CmdId
 */
var FishBattleBeginReq_CmdId;
(function (FishBattleBeginReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleBeginReq_CmdId[FishBattleBeginReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5820;
     */
    FishBattleBeginReq_CmdId[FishBattleBeginReq_CmdId["CMD_ID"] = 5820] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleBeginReq_CmdId[FishBattleBeginReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBattleBeginReq_CmdId[FishBattleBeginReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBattleBeginReq_CmdId[FishBattleBeginReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FishBattleBeginReq_CmdId = exports.FishBattleBeginReq_CmdId || (exports.FishBattleBeginReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBattleBeginRsp.CmdId
 */
var FishBattleBeginRsp_CmdId;
(function (FishBattleBeginRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleBeginRsp_CmdId[FishBattleBeginRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5845;
     */
    FishBattleBeginRsp_CmdId[FishBattleBeginRsp_CmdId["CMD_ID"] = 5845] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleBeginRsp_CmdId[FishBattleBeginRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBattleBeginRsp_CmdId[FishBattleBeginRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishBattleBeginRsp_CmdId = exports.FishBattleBeginRsp_CmdId || (exports.FishBattleBeginRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBattleEndReq.CmdId
 */
var FishBattleEndReq_CmdId;
(function (FishBattleEndReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleEndReq_CmdId[FishBattleEndReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5841;
     */
    FishBattleEndReq_CmdId[FishBattleEndReq_CmdId["CMD_ID"] = 5841] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleEndReq_CmdId[FishBattleEndReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBattleEndReq_CmdId[FishBattleEndReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBattleEndReq_CmdId[FishBattleEndReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FishBattleEndReq_CmdId = exports.FishBattleEndReq_CmdId || (exports.FishBattleEndReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBattleEndRsp.FishNoRewardReason
 */
var FishBattleEndRsp_FishNoRewardReason;
(function (FishBattleEndRsp_FishNoRewardReason) {
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_NONE = 0;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["FISH_NO_REWARD_NONE"] = 0] = "FISH_NO_REWARD_NONE";
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_ACTIVITY_LIMIT = 1;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["FISH_NO_REWARD_ACTIVITY_LIMIT"] = 1] = "FISH_NO_REWARD_ACTIVITY_LIMIT";
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_BAG_LIMIT = 2;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["FISH_NO_REWARD_BAG_LIMIT"] = 2] = "FISH_NO_REWARD_BAG_LIMIT";
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_POOL_LIMIT = 3;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["FISH_NO_REWARD_POOL_LIMIT"] = 3] = "FISH_NO_REWARD_POOL_LIMIT";
})(FishBattleEndRsp_FishNoRewardReason = exports.FishBattleEndRsp_FishNoRewardReason || (exports.FishBattleEndRsp_FishNoRewardReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBattleEndRsp.CmdId
 */
var FishBattleEndRsp_CmdId;
(function (FishBattleEndRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleEndRsp_CmdId[FishBattleEndRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5842;
     */
    FishBattleEndRsp_CmdId[FishBattleEndRsp_CmdId["CMD_ID"] = 5842] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBattleEndRsp_CmdId[FishBattleEndRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBattleEndRsp_CmdId[FishBattleEndRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishBattleEndRsp_CmdId = exports.FishBattleEndRsp_CmdId || (exports.FishBattleEndRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExitFishingReq.CmdId
 */
var ExitFishingReq_CmdId;
(function (ExitFishingReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitFishingReq_CmdId[ExitFishingReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5814;
     */
    ExitFishingReq_CmdId[ExitFishingReq_CmdId["CMD_ID"] = 5814] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitFishingReq_CmdId[ExitFishingReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitFishingReq_CmdId[ExitFishingReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitFishingReq_CmdId[ExitFishingReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ExitFishingReq_CmdId = exports.ExitFishingReq_CmdId || (exports.ExitFishingReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExitFishingRsp.CmdId
 */
var ExitFishingRsp_CmdId;
(function (ExitFishingRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitFishingRsp_CmdId[ExitFishingRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5847;
     */
    ExitFishingRsp_CmdId[ExitFishingRsp_CmdId["CMD_ID"] = 5847] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitFishingRsp_CmdId[ExitFishingRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitFishingRsp_CmdId[ExitFishingRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ExitFishingRsp_CmdId = exports.ExitFishingRsp_CmdId || (exports.ExitFishingRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishAttractNotify.CmdId
 */
var FishAttractNotify_CmdId;
(function (FishAttractNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishAttractNotify_CmdId[FishAttractNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5837;
     */
    FishAttractNotify_CmdId[FishAttractNotify_CmdId["CMD_ID"] = 5837] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishAttractNotify_CmdId[FishAttractNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishAttractNotify_CmdId[FishAttractNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishAttractNotify_CmdId = exports.FishAttractNotify_CmdId || (exports.FishAttractNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBaitGoneNotify.CmdId
 */
var FishBaitGoneNotify_CmdId;
(function (FishBaitGoneNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBaitGoneNotify_CmdId[FishBaitGoneNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5823;
     */
    FishBaitGoneNotify_CmdId[FishBaitGoneNotify_CmdId["CMD_ID"] = 5823] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishBaitGoneNotify_CmdId[FishBaitGoneNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishBaitGoneNotify_CmdId[FishBaitGoneNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishBaitGoneNotify_CmdId = exports.FishBaitGoneNotify_CmdId || (exports.FishBaitGoneNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerFishingDataNotify.CmdId
 */
var PlayerFishingDataNotify_CmdId;
(function (PlayerFishingDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerFishingDataNotify_CmdId[PlayerFishingDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5835;
     */
    PlayerFishingDataNotify_CmdId[PlayerFishingDataNotify_CmdId["CMD_ID"] = 5835] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerFishingDataNotify_CmdId[PlayerFishingDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerFishingDataNotify_CmdId[PlayerFishingDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerFishingDataNotify_CmdId = exports.PlayerFishingDataNotify_CmdId || (exports.PlayerFishingDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishPoolDataNotify.CmdId
 */
var FishPoolDataNotify_CmdId;
(function (FishPoolDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishPoolDataNotify_CmdId[FishPoolDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5848;
     */
    FishPoolDataNotify_CmdId[FishPoolDataNotify_CmdId["CMD_ID"] = 5848] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FishPoolDataNotify_CmdId[FishPoolDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FishPoolDataNotify_CmdId[FishPoolDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FishPoolDataNotify_CmdId = exports.FishPoolDataNotify_CmdId || (exports.FishPoolDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishEscapeReason
 */
var FishEscapeReason;
(function (FishEscapeReason) {
    /**
     * @generated from protobuf enum value: FISN_ESCAPE_NONE = 0;
     */
    FishEscapeReason[FishEscapeReason["FISN_ESCAPE_NONE"] = 0] = "FISN_ESCAPE_NONE";
    /**
     * @generated from protobuf enum value: FISH_ESCAPE_SHOCKED = 1;
     */
    FishEscapeReason[FishEscapeReason["FISH_ESCAPE_SHOCKED"] = 1] = "FISH_ESCAPE_SHOCKED";
    /**
     * @generated from protobuf enum value: FISH_ESCAPE_UNHOOK = 2;
     */
    FishEscapeReason[FishEscapeReason["FISH_ESCAPE_UNHOOK"] = 2] = "FISH_ESCAPE_UNHOOK";
})(FishEscapeReason = exports.FishEscapeReason || (exports.FishEscapeReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.FishBattleResult
 */
var FishBattleResult;
(function (FishBattleResult) {
    /**
     * @generated from protobuf enum value: FISH_BATTLE_RESULT_NONE = 0;
     */
    FishBattleResult[FishBattleResult["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: FISH_BATTLE_RESULT_SUCC = 1;
     */
    FishBattleResult[FishBattleResult["SUCC"] = 1] = "SUCC";
    /**
     * @generated from protobuf enum value: FISH_BATTLE_RESULT_FAIL = 2;
     */
    FishBattleResult[FishBattleResult["FAIL"] = 2] = "FAIL";
    /**
     * @generated from protobuf enum value: FISH_BATTLE_RESULT_TIMEOUT = 3;
     */
    FishBattleResult[FishBattleResult["TIMEOUT"] = 3] = "TIMEOUT";
    /**
     * @generated from protobuf enum value: FISH_BATTLE_RESULT_CANCEL = 4;
     */
    FishBattleResult[FishBattleResult["CANCEL"] = 4] = "CANCEL";
    /**
     * @generated from protobuf enum value: FISH_BATTLE_RESULT_EXIT = 5;
     */
    FishBattleResult[FishBattleResult["EXIT"] = 5] = "EXIT";
})(FishBattleResult = exports.FishBattleResult || (exports.FishBattleResult = {}));
// @generated message type with reflection information, may provide speed optimized methods
class EnterFishingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterFishingReq", [
            { no: 3, name: "fish_pool_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 fish_pool_id */ 3:
                    message.fishPoolId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 fish_pool_id = 3; */
        if (message.fishPoolId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.fishPoolId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterFishingReq
 */
exports.EnterFishingReq = new EnterFishingReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterFishingRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterFishingRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "fish_pool_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 fish_pool_id */ 9:
                    message.fishPoolId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 fish_pool_id = 9; */
        if (message.fishPoolId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.fishPoolId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterFishingRsp
 */
exports.EnterFishingRsp = new EnterFishingRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StartFishingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StartFishingReq", [
            { no: 5, name: "rod_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "fish_pool_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 rod_entity_id */ 5:
                    message.rodEntityId = reader.uint32();
                    break;
                case /* optional uint32 fish_pool_id */ 15:
                    message.fishPoolId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 rod_entity_id = 5; */
        if (message.rodEntityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.rodEntityId);
        /* optional uint32 fish_pool_id = 15; */
        if (message.fishPoolId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.fishPoolId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StartFishingReq
 */
exports.StartFishingReq = new StartFishingReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StartFishingRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StartFishingRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "fish_pool_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 fish_pool_id */ 14:
                    message.fishPoolId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 fish_pool_id = 14; */
        if (message.fishPoolId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.fishPoolId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StartFishingRsp
 */
exports.StartFishingRsp = new StartFishingRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishCastRodReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishCastRodReq", [
            { no: 14, name: "bait_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "rod_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "rod_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "pos", kind: "message", T: () => define_2.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 bait_id */ 14:
                    message.baitId = reader.uint32();
                    break;
                case /* optional uint32 rod_id */ 4:
                    message.rodId = reader.uint32();
                    break;
                case /* optional uint32 rod_entity_id */ 7:
                    message.rodEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 12:
                    message.pos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 bait_id = 14; */
        if (message.baitId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.baitId);
        /* optional uint32 rod_id = 4; */
        if (message.rodId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.rodId);
        /* optional uint32 rod_entity_id = 7; */
        if (message.rodEntityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.rodEntityId);
        /* optional com.midnights.game.Vector pos = 12; */
        if (message.pos)
            define_2.Vector.internalBinaryWrite(message.pos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishCastRodReq
 */
exports.FishCastRodReq = new FishCastRodReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishCastRodRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishCastRodRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.FishCastRodRsp
 */
exports.FishCastRodRsp = new FishCastRodRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishChosenNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishChosenNotify", [
            { no: 12, name: "fish_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 fish_id */ 12:
                    message.fishId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 fish_id = 12; */
        if (message.fishId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.fishId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishChosenNotify
 */
exports.FishChosenNotify = new FishChosenNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishEscapeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishEscapeNotify", [
            { no: 4, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.FishEscapeReason", FishEscapeReason] },
            { no: 7, name: "pos", kind: "message", T: () => define_2.Vector },
            { no: 14, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "fish_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fishIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FishEscapeReason reason */ 4:
                    message.reason = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 7:
                    message.pos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* repeated uint32 fish_id_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishIdList.push(reader.uint32());
                    else
                        message.fishIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FishEscapeReason reason = 4; */
        if (message.reason !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.reason);
        /* optional com.midnights.game.Vector pos = 7; */
        if (message.pos)
            define_2.Vector.internalBinaryWrite(message.pos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 uid = 14; */
        if (message.uid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated uint32 fish_id_list = 6; */
        for (let i = 0; i < message.fishIdList.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.fishIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishEscapeNotify
 */
exports.FishEscapeNotify = new FishEscapeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishBiteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishBiteReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.FishBiteReq
 */
exports.FishBiteReq = new FishBiteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishBiteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishBiteRsp", [
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.FishBiteRsp
 */
exports.FishBiteRsp = new FishBiteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishBattleBeginReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishBattleBeginReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.FishBattleBeginReq
 */
exports.FishBattleBeginReq = new FishBattleBeginReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishBattleBeginRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishBattleBeginRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.FishBattleBeginRsp
 */
exports.FishBattleBeginRsp = new FishBattleBeginRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishBattleEndReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishBattleEndReq", [
            { no: 3, name: "max_bonus_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "battle_result", kind: "enum", opt: true, T: () => ["com.midnights.game.FishBattleResult", FishBattleResult, "FISH_BATTLE_RESULT_"] },
            { no: 11, name: "is_always_bonus", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 max_bonus_time */ 3:
                    message.maxBonusTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.FishBattleResult battle_result */ 10:
                    message.battleResult = reader.int32();
                    break;
                case /* optional bool is_always_bonus */ 11:
                    message.isAlwaysBonus = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 max_bonus_time = 3; */
        if (message.maxBonusTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.maxBonusTime);
        /* optional com.midnights.game.FishBattleResult battle_result = 10; */
        if (message.battleResult !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.battleResult);
        /* optional bool is_always_bonus = 11; */
        if (message.isAlwaysBonus !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isAlwaysBonus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishBattleEndReq
 */
exports.FishBattleEndReq = new FishBattleEndReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishBattleEndRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishBattleEndRsp", [
            { no: 10, name: "is_got_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "reward_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam },
            { no: 13, name: "talent_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam },
            { no: 9, name: "drop_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "no_reward_reason", kind: "enum", opt: true, T: () => ["com.midnights.game.FishBattleEndRsp.FishNoRewardReason", FishBattleEndRsp_FishNoRewardReason] },
            { no: 6, name: "battle_result", kind: "enum", opt: true, T: () => ["com.midnights.game.FishBattleResult", FishBattleResult, "FISH_BATTLE_RESULT_"] }
        ]);
    }
    create(value) {
        const message = { rewardItemList: [], talentItemList: [], dropItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_got_reward */ 10:
                    message.isGotReward = reader.bool();
                    break;
                case /* repeated com.midnights.game.ItemParam reward_item_list */ 11:
                    message.rewardItemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ItemParam talent_item_list */ 13:
                    message.talentItemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ItemParam drop_item_list */ 9:
                    message.dropItemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.FishBattleEndRsp.FishNoRewardReason no_reward_reason */ 14:
                    message.noRewardReason = reader.int32();
                    break;
                case /* optional com.midnights.game.FishBattleResult battle_result */ 6:
                    message.battleResult = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_got_reward = 10; */
        if (message.isGotReward !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isGotReward);
        /* repeated com.midnights.game.ItemParam reward_item_list = 11; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemParam talent_item_list = 13; */
        for (let i = 0; i < message.talentItemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.talentItemList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemParam drop_item_list = 9; */
        for (let i = 0; i < message.dropItemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.dropItemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.FishBattleEndRsp.FishNoRewardReason no_reward_reason = 14; */
        if (message.noRewardReason !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.noRewardReason);
        /* optional com.midnights.game.FishBattleResult battle_result = 6; */
        if (message.battleResult !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.battleResult);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishBattleEndRsp
 */
exports.FishBattleEndRsp = new FishBattleEndRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExitFishingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExitFishingReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ExitFishingReq
 */
exports.ExitFishingReq = new ExitFishingReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExitFishingRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExitFishingRsp", [
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.ExitFishingRsp
 */
exports.ExitFishingRsp = new ExitFishingRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishAttractNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishAttractNotify", [
            { no: 3, name: "fish_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pos", kind: "message", T: () => define_2.Vector },
            { no: 2, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fishIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 fish_id_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishIdList.push(reader.uint32());
                    else
                        message.fishIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.Vector pos */ 9:
                    message.pos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* repeated uint32 fish_id_list = 3; */
        for (let i = 0; i < message.fishIdList.length; i++)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.fishIdList[i]);
        /* optional com.midnights.game.Vector pos = 9; */
        if (message.pos)
            define_2.Vector.internalBinaryWrite(message.pos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.FishAttractNotify
 */
exports.FishAttractNotify = new FishAttractNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishBaitGoneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishBaitGoneNotify", [
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
                case /* optional uint32 uid */ 8:
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
        /* optional uint32 uid = 8; */
        if (message.uid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishBaitGoneNotify
 */
exports.FishBaitGoneNotify = new FishBaitGoneNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerFishingDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerFishingDataNotify", [
            { no: 8, name: "last_fish_rod_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 last_fish_rod_id */ 8:
                    message.lastFishRodId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 last_fish_rod_id = 8; */
        if (message.lastFishRodId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.lastFishRodId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerFishingDataNotify
 */
exports.PlayerFishingDataNotify = new PlayerFishingDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FishPoolDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FishPoolDataNotify", [
            { no: 6, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "today_fish_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 today_fish_num */ 2:
                    message.todayFishNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 6; */
        if (message.entityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 today_fish_num = 2; */
        if (message.todayFishNum !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.todayFishNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FishPoolDataNotify
 */
exports.FishPoolDataNotify = new FishPoolDataNotify$Type();
