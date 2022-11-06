"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyBattlePassLevelRsp = exports.BuyBattlePassLevelReq = exports.BattlePassBuySuccNotify = exports.SetBattlePassViewedRsp = exports.SetBattlePassViewedReq = exports.GetBattlePassProductRsp = exports.GetBattlePassProductReq = exports.TakeBattlePassMissionPointRsp = exports.TakeBattlePassMissionPointReq = exports.TakeBattlePassRewardRsp = exports.TakeBattlePassRewardReq = exports.BattlePassRewardTakeOption = exports.BattlePassCurScheduleUpdateNotify = exports.BattlePassMissionDelNotify = exports.BattlePassMissionUpdateNotify = exports.BattlePassAllDataNotify = exports.BattlePassSchedule = exports.BattlePassProduct = exports.BattlePassRewardTag = exports.BattlePassMission = exports.BattlePassCycle = exports.BattlePassUnlockStatus = exports.BuyBattlePassLevelRsp_CmdId = exports.BuyBattlePassLevelReq_CmdId = exports.BattlePassBuySuccNotify_CmdId = exports.SetBattlePassViewedRsp_CmdId = exports.SetBattlePassViewedReq_CmdId = exports.GetBattlePassProductRsp_CmdId = exports.GetBattlePassProductReq_CmdId = exports.TakeBattlePassMissionPointRsp_CmdId = exports.TakeBattlePassMissionPointReq_CmdId = exports.TakeBattlePassRewardRsp_CmdId = exports.TakeBattlePassRewardReq_CmdId = exports.BattlePassCurScheduleUpdateNotify_CmdId = exports.BattlePassMissionDelNotify_CmdId = exports.BattlePassMissionUpdateNotify_CmdId = exports.BattlePassAllDataNotify_CmdId = exports.BattlePassMission_MissionStatus = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.BattlePassMission.MissionStatus
 */
var BattlePassMission_MissionStatus;
(function (BattlePassMission_MissionStatus) {
    /**
     * @generated from protobuf enum value: MISSION_INVALID = 0;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["MISSION_INVALID"] = 0] = "MISSION_INVALID";
    /**
     * @generated from protobuf enum value: MISSION_UNFINISHED = 1;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["MISSION_UNFINISHED"] = 1] = "MISSION_UNFINISHED";
    /**
     * @generated from protobuf enum value: MISSION_FINISHED = 2;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["MISSION_FINISHED"] = 2] = "MISSION_FINISHED";
    /**
     * @generated from protobuf enum value: MISSION_POINT_TAKEN = 3;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["MISSION_POINT_TAKEN"] = 3] = "MISSION_POINT_TAKEN";
})(BattlePassMission_MissionStatus = exports.BattlePassMission_MissionStatus || (exports.BattlePassMission_MissionStatus = {}));
/**
 * @generated from protobuf enum com.midnights.game.BattlePassAllDataNotify.CmdId
 */
var BattlePassAllDataNotify_CmdId;
(function (BattlePassAllDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassAllDataNotify_CmdId[BattlePassAllDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2626;
     */
    BattlePassAllDataNotify_CmdId[BattlePassAllDataNotify_CmdId["CMD_ID"] = 2626] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassAllDataNotify_CmdId[BattlePassAllDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BattlePassAllDataNotify_CmdId[BattlePassAllDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BattlePassAllDataNotify_CmdId = exports.BattlePassAllDataNotify_CmdId || (exports.BattlePassAllDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BattlePassMissionUpdateNotify.CmdId
 */
var BattlePassMissionUpdateNotify_CmdId;
(function (BattlePassMissionUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassMissionUpdateNotify_CmdId[BattlePassMissionUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2618;
     */
    BattlePassMissionUpdateNotify_CmdId[BattlePassMissionUpdateNotify_CmdId["CMD_ID"] = 2618] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassMissionUpdateNotify_CmdId[BattlePassMissionUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BattlePassMissionUpdateNotify_CmdId[BattlePassMissionUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BattlePassMissionUpdateNotify_CmdId = exports.BattlePassMissionUpdateNotify_CmdId || (exports.BattlePassMissionUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BattlePassMissionDelNotify.CmdId
 */
var BattlePassMissionDelNotify_CmdId;
(function (BattlePassMissionDelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassMissionDelNotify_CmdId[BattlePassMissionDelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2625;
     */
    BattlePassMissionDelNotify_CmdId[BattlePassMissionDelNotify_CmdId["CMD_ID"] = 2625] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassMissionDelNotify_CmdId[BattlePassMissionDelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BattlePassMissionDelNotify_CmdId[BattlePassMissionDelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BattlePassMissionDelNotify_CmdId = exports.BattlePassMissionDelNotify_CmdId || (exports.BattlePassMissionDelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BattlePassCurScheduleUpdateNotify.CmdId
 */
var BattlePassCurScheduleUpdateNotify_CmdId;
(function (BattlePassCurScheduleUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassCurScheduleUpdateNotify_CmdId[BattlePassCurScheduleUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2607;
     */
    BattlePassCurScheduleUpdateNotify_CmdId[BattlePassCurScheduleUpdateNotify_CmdId["CMD_ID"] = 2607] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassCurScheduleUpdateNotify_CmdId[BattlePassCurScheduleUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BattlePassCurScheduleUpdateNotify_CmdId[BattlePassCurScheduleUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BattlePassCurScheduleUpdateNotify_CmdId = exports.BattlePassCurScheduleUpdateNotify_CmdId || (exports.BattlePassCurScheduleUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeBattlePassRewardReq.CmdId
 */
var TakeBattlePassRewardReq_CmdId;
(function (TakeBattlePassRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassRewardReq_CmdId[TakeBattlePassRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2602;
     */
    TakeBattlePassRewardReq_CmdId[TakeBattlePassRewardReq_CmdId["CMD_ID"] = 2602] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassRewardReq_CmdId[TakeBattlePassRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBattlePassRewardReq_CmdId[TakeBattlePassRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBattlePassRewardReq_CmdId[TakeBattlePassRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeBattlePassRewardReq_CmdId = exports.TakeBattlePassRewardReq_CmdId || (exports.TakeBattlePassRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeBattlePassRewardRsp.CmdId
 */
var TakeBattlePassRewardRsp_CmdId;
(function (TakeBattlePassRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassRewardRsp_CmdId[TakeBattlePassRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2631;
     */
    TakeBattlePassRewardRsp_CmdId[TakeBattlePassRewardRsp_CmdId["CMD_ID"] = 2631] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassRewardRsp_CmdId[TakeBattlePassRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBattlePassRewardRsp_CmdId[TakeBattlePassRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeBattlePassRewardRsp_CmdId = exports.TakeBattlePassRewardRsp_CmdId || (exports.TakeBattlePassRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeBattlePassMissionPointReq.CmdId
 */
var TakeBattlePassMissionPointReq_CmdId;
(function (TakeBattlePassMissionPointReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassMissionPointReq_CmdId[TakeBattlePassMissionPointReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2629;
     */
    TakeBattlePassMissionPointReq_CmdId[TakeBattlePassMissionPointReq_CmdId["CMD_ID"] = 2629] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassMissionPointReq_CmdId[TakeBattlePassMissionPointReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBattlePassMissionPointReq_CmdId[TakeBattlePassMissionPointReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBattlePassMissionPointReq_CmdId[TakeBattlePassMissionPointReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeBattlePassMissionPointReq_CmdId = exports.TakeBattlePassMissionPointReq_CmdId || (exports.TakeBattlePassMissionPointReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeBattlePassMissionPointRsp.CmdId
 */
var TakeBattlePassMissionPointRsp_CmdId;
(function (TakeBattlePassMissionPointRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassMissionPointRsp_CmdId[TakeBattlePassMissionPointRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2622;
     */
    TakeBattlePassMissionPointRsp_CmdId[TakeBattlePassMissionPointRsp_CmdId["CMD_ID"] = 2622] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeBattlePassMissionPointRsp_CmdId[TakeBattlePassMissionPointRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeBattlePassMissionPointRsp_CmdId[TakeBattlePassMissionPointRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeBattlePassMissionPointRsp_CmdId = exports.TakeBattlePassMissionPointRsp_CmdId || (exports.TakeBattlePassMissionPointRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetBattlePassProductReq.CmdId
 */
var GetBattlePassProductReq_CmdId;
(function (GetBattlePassProductReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBattlePassProductReq_CmdId[GetBattlePassProductReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2644;
     */
    GetBattlePassProductReq_CmdId[GetBattlePassProductReq_CmdId["CMD_ID"] = 2644] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBattlePassProductReq_CmdId[GetBattlePassProductReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBattlePassProductReq_CmdId[GetBattlePassProductReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBattlePassProductReq_CmdId[GetBattlePassProductReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetBattlePassProductReq_CmdId = exports.GetBattlePassProductReq_CmdId || (exports.GetBattlePassProductReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetBattlePassProductRsp.CmdId
 */
var GetBattlePassProductRsp_CmdId;
(function (GetBattlePassProductRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBattlePassProductRsp_CmdId[GetBattlePassProductRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2649;
     */
    GetBattlePassProductRsp_CmdId[GetBattlePassProductRsp_CmdId["CMD_ID"] = 2649] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBattlePassProductRsp_CmdId[GetBattlePassProductRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBattlePassProductRsp_CmdId[GetBattlePassProductRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetBattlePassProductRsp_CmdId = exports.GetBattlePassProductRsp_CmdId || (exports.GetBattlePassProductRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetBattlePassViewedReq.CmdId
 */
var SetBattlePassViewedReq_CmdId;
(function (SetBattlePassViewedReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetBattlePassViewedReq_CmdId[SetBattlePassViewedReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2641;
     */
    SetBattlePassViewedReq_CmdId[SetBattlePassViewedReq_CmdId["CMD_ID"] = 2641] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetBattlePassViewedReq_CmdId[SetBattlePassViewedReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetBattlePassViewedReq_CmdId[SetBattlePassViewedReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetBattlePassViewedReq_CmdId[SetBattlePassViewedReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetBattlePassViewedReq_CmdId = exports.SetBattlePassViewedReq_CmdId || (exports.SetBattlePassViewedReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetBattlePassViewedRsp.CmdId
 */
var SetBattlePassViewedRsp_CmdId;
(function (SetBattlePassViewedRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetBattlePassViewedRsp_CmdId[SetBattlePassViewedRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2642;
     */
    SetBattlePassViewedRsp_CmdId[SetBattlePassViewedRsp_CmdId["CMD_ID"] = 2642] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetBattlePassViewedRsp_CmdId[SetBattlePassViewedRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetBattlePassViewedRsp_CmdId[SetBattlePassViewedRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetBattlePassViewedRsp_CmdId = exports.SetBattlePassViewedRsp_CmdId || (exports.SetBattlePassViewedRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BattlePassBuySuccNotify.CmdId
 */
var BattlePassBuySuccNotify_CmdId;
(function (BattlePassBuySuccNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassBuySuccNotify_CmdId[BattlePassBuySuccNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2614;
     */
    BattlePassBuySuccNotify_CmdId[BattlePassBuySuccNotify_CmdId["CMD_ID"] = 2614] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BattlePassBuySuccNotify_CmdId[BattlePassBuySuccNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BattlePassBuySuccNotify_CmdId[BattlePassBuySuccNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BattlePassBuySuccNotify_CmdId = exports.BattlePassBuySuccNotify_CmdId || (exports.BattlePassBuySuccNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BuyBattlePassLevelReq.CmdId
 */
var BuyBattlePassLevelReq_CmdId;
(function (BuyBattlePassLevelReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyBattlePassLevelReq_CmdId[BuyBattlePassLevelReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2647;
     */
    BuyBattlePassLevelReq_CmdId[BuyBattlePassLevelReq_CmdId["CMD_ID"] = 2647] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyBattlePassLevelReq_CmdId[BuyBattlePassLevelReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyBattlePassLevelReq_CmdId[BuyBattlePassLevelReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyBattlePassLevelReq_CmdId[BuyBattlePassLevelReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BuyBattlePassLevelReq_CmdId = exports.BuyBattlePassLevelReq_CmdId || (exports.BuyBattlePassLevelReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BuyBattlePassLevelRsp.CmdId
 */
var BuyBattlePassLevelRsp_CmdId;
(function (BuyBattlePassLevelRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyBattlePassLevelRsp_CmdId[BuyBattlePassLevelRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2637;
     */
    BuyBattlePassLevelRsp_CmdId[BuyBattlePassLevelRsp_CmdId["CMD_ID"] = 2637] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BuyBattlePassLevelRsp_CmdId[BuyBattlePassLevelRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BuyBattlePassLevelRsp_CmdId[BuyBattlePassLevelRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BuyBattlePassLevelRsp_CmdId = exports.BuyBattlePassLevelRsp_CmdId || (exports.BuyBattlePassLevelRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BattlePassUnlockStatus
 */
var BattlePassUnlockStatus;
(function (BattlePassUnlockStatus) {
    /**
     * @generated from protobuf enum value: BATTLE_PASS_UNLOCK_INVALID = 0;
     */
    BattlePassUnlockStatus[BattlePassUnlockStatus["BATTLE_PASS_UNLOCK_INVALID"] = 0] = "BATTLE_PASS_UNLOCK_INVALID";
    /**
     * @generated from protobuf enum value: BATTLE_PASS_UNLOCK_FREE = 1;
     */
    BattlePassUnlockStatus[BattlePassUnlockStatus["BATTLE_PASS_UNLOCK_FREE"] = 1] = "BATTLE_PASS_UNLOCK_FREE";
    /**
     * @generated from protobuf enum value: BATTLE_PASS_UNLOCK_PAID = 2;
     */
    BattlePassUnlockStatus[BattlePassUnlockStatus["BATTLE_PASS_UNLOCK_PAID"] = 2] = "BATTLE_PASS_UNLOCK_PAID";
})(BattlePassUnlockStatus = exports.BattlePassUnlockStatus || (exports.BattlePassUnlockStatus = {}));
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassCycle$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassCycle", [
            { no: 3, name: "cycle_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cycle_idx */ 3:
                    message.cycleIdx = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 10:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 13:
                    message.beginTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cycle_idx = 3; */
        if (message.cycleIdx !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.cycleIdx);
        /* optional uint32 end_time = 10; */
        if (message.endTime !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 begin_time = 13; */
        if (message.beginTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.beginTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassCycle
 */
exports.BattlePassCycle = new BattlePassCycle$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassMission$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassMission", [
            { no: 13, name: "cur_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "mission_status", kind: "enum", opt: true, T: () => ["com.midnights.game.BattlePassMission.MissionStatus", BattlePassMission_MissionStatus] },
            { no: 11, name: "mission_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reward_battle_pass_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "mission_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "total_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_progress */ 13:
                    message.curProgress = reader.uint32();
                    break;
                case /* optional com.midnights.game.BattlePassMission.MissionStatus mission_status */ 15:
                    message.missionStatus = reader.int32();
                    break;
                case /* optional uint32 mission_id */ 11:
                    message.missionId = reader.uint32();
                    break;
                case /* optional uint32 reward_battle_pass_point */ 3:
                    message.rewardBattlePassPoint = reader.uint32();
                    break;
                case /* optional uint32 mission_type */ 12:
                    message.missionType = reader.uint32();
                    break;
                case /* optional uint32 total_progress */ 6:
                    message.totalProgress = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_progress = 13; */
        if (message.curProgress !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* optional com.midnights.game.BattlePassMission.MissionStatus mission_status = 15; */
        if (message.missionStatus !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.missionStatus);
        /* optional uint32 mission_id = 11; */
        if (message.missionId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.missionId);
        /* optional uint32 reward_battle_pass_point = 3; */
        if (message.rewardBattlePassPoint !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.rewardBattlePassPoint);
        /* optional uint32 mission_type = 12; */
        if (message.missionType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.missionType);
        /* optional uint32 total_progress = 6; */
        if (message.totalProgress !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.totalProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassMission
 */
exports.BattlePassMission = new BattlePassMission$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassRewardTag$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassRewardTag", [
            { no: 4, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "unlock_status", kind: "enum", opt: true, T: () => ["com.midnights.game.BattlePassUnlockStatus", BattlePassUnlockStatus] },
            { no: 7, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.BattlePassUnlockStatus unlock_status */ 2:
                    message.unlockStatus = reader.int32();
                    break;
                case /* optional uint32 reward_id */ 7:
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
        /* optional uint32 level = 4; */
        if (message.level !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.level);
        /* optional com.midnights.game.BattlePassUnlockStatus unlock_status = 2; */
        if (message.unlockStatus !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.unlockStatus);
        /* optional uint32 reward_id = 7; */
        if (message.rewardId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.rewardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassRewardTag
 */
exports.BattlePassRewardTag = new BattlePassRewardTag$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassProduct$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassProduct", [
            { no: 13, name: "normal_product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "extra_product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "upgrade_product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string normal_product_id */ 13:
                    message.normalProductId = reader.string();
                    break;
                case /* optional string extra_product_id */ 10:
                    message.extraProductId = reader.string();
                    break;
                case /* optional string upgrade_product_id */ 6:
                    message.upgradeProductId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string normal_product_id = 13; */
        if (message.normalProductId !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.normalProductId);
        /* optional string extra_product_id = 10; */
        if (message.extraProductId !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.extraProductId);
        /* optional string upgrade_product_id = 6; */
        if (message.upgradeProductId !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.upgradeProductId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassProduct
 */
exports.BattlePassProduct = new BattlePassProduct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassSchedule$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassSchedule", [
            { no: 14, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cur_cycle", kind: "message", T: () => exports.BattlePassCycle },
            { no: 7, name: "unlock_status", kind: "enum", opt: true, T: () => ["com.midnights.game.BattlePassUnlockStatus", BattlePassUnlockStatus] },
            { no: 11, name: "reward_taken_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.BattlePassRewardTag },
            { no: 10, name: "cur_cycle_points", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "paid_platform_flags", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "product_info", kind: "message", T: () => exports.BattlePassProduct },
            { no: 6, name: "is_extra_paid_reward_taken", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "is_viewed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { rewardTakenList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level */ 14:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 2:
                    message.beginTime = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 15:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 point */ 1:
                    message.point = reader.uint32();
                    break;
                case /* optional com.midnights.game.BattlePassCycle cur_cycle */ 4:
                    message.curCycle = exports.BattlePassCycle.internalBinaryRead(reader, reader.uint32(), options, message.curCycle);
                    break;
                case /* optional com.midnights.game.BattlePassUnlockStatus unlock_status */ 7:
                    message.unlockStatus = reader.int32();
                    break;
                case /* repeated com.midnights.game.BattlePassRewardTag reward_taken_list */ 11:
                    message.rewardTakenList.push(exports.BattlePassRewardTag.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 cur_cycle_points */ 10:
                    message.curCyclePoints = reader.uint32();
                    break;
                case /* optional uint32 paid_platform_flags */ 12:
                    message.paidPlatformFlags = reader.uint32();
                    break;
                case /* optional com.midnights.game.BattlePassProduct product_info */ 13:
                    message.productInfo = exports.BattlePassProduct.internalBinaryRead(reader, reader.uint32(), options, message.productInfo);
                    break;
                case /* optional bool is_extra_paid_reward_taken */ 6:
                    message.isExtraPaidRewardTaken = reader.bool();
                    break;
                case /* optional bool is_viewed */ 3:
                    message.isViewed = reader.bool();
                    break;
                case /* optional uint32 schedule_id */ 9:
                    message.scheduleId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level = 14; */
        if (message.level !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 begin_time = 2; */
        if (message.beginTime !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* optional uint32 end_time = 15; */
        if (message.endTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 point = 1; */
        if (message.point !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.point);
        /* optional com.midnights.game.BattlePassCycle cur_cycle = 4; */
        if (message.curCycle)
            exports.BattlePassCycle.internalBinaryWrite(message.curCycle, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.BattlePassUnlockStatus unlock_status = 7; */
        if (message.unlockStatus !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.unlockStatus);
        /* repeated com.midnights.game.BattlePassRewardTag reward_taken_list = 11; */
        for (let i = 0; i < message.rewardTakenList.length; i++)
            exports.BattlePassRewardTag.internalBinaryWrite(message.rewardTakenList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 cur_cycle_points = 10; */
        if (message.curCyclePoints !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.curCyclePoints);
        /* optional uint32 paid_platform_flags = 12; */
        if (message.paidPlatformFlags !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.paidPlatformFlags);
        /* optional com.midnights.game.BattlePassProduct product_info = 13; */
        if (message.productInfo)
            exports.BattlePassProduct.internalBinaryWrite(message.productInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_extra_paid_reward_taken = 6; */
        if (message.isExtraPaidRewardTaken !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isExtraPaidRewardTaken);
        /* optional bool is_viewed = 3; */
        if (message.isViewed !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isViewed);
        /* optional uint32 schedule_id = 9; */
        if (message.scheduleId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.scheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassSchedule
 */
exports.BattlePassSchedule = new BattlePassSchedule$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassAllDataNotify", [
            { no: 2, name: "have_cur_schedule", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "mission_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.BattlePassMission },
            { no: 1, name: "cur_schedule", kind: "message", T: () => exports.BattlePassSchedule }
        ]);
    }
    create(value) {
        const message = { missionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool have_cur_schedule */ 2:
                    message.haveCurSchedule = reader.bool();
                    break;
                case /* repeated com.midnights.game.BattlePassMission mission_list */ 4:
                    message.missionList.push(exports.BattlePassMission.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.BattlePassSchedule cur_schedule */ 1:
                    message.curSchedule = exports.BattlePassSchedule.internalBinaryRead(reader, reader.uint32(), options, message.curSchedule);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool have_cur_schedule = 2; */
        if (message.haveCurSchedule !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.haveCurSchedule);
        /* repeated com.midnights.game.BattlePassMission mission_list = 4; */
        for (let i = 0; i < message.missionList.length; i++)
            exports.BattlePassMission.internalBinaryWrite(message.missionList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.BattlePassSchedule cur_schedule = 1; */
        if (message.curSchedule)
            exports.BattlePassSchedule.internalBinaryWrite(message.curSchedule, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassAllDataNotify
 */
exports.BattlePassAllDataNotify = new BattlePassAllDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassMissionUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassMissionUpdateNotify", [
            { no: 1, name: "mission_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.BattlePassMission }
        ]);
    }
    create(value) {
        const message = { missionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.BattlePassMission mission_list */ 1:
                    message.missionList.push(exports.BattlePassMission.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.BattlePassMission mission_list = 1; */
        for (let i = 0; i < message.missionList.length; i++)
            exports.BattlePassMission.internalBinaryWrite(message.missionList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassMissionUpdateNotify
 */
exports.BattlePassMissionUpdateNotify = new BattlePassMissionUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassMissionDelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassMissionDelNotify", [
            { no: 10, name: "del_mission_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { delMissionIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 del_mission_id_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.delMissionIdList.push(reader.uint32());
                    else
                        message.delMissionIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 del_mission_id_list = 10; */
        if (message.delMissionIdList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.delMissionIdList.length; i++)
                writer.uint32(message.delMissionIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassMissionDelNotify
 */
exports.BattlePassMissionDelNotify = new BattlePassMissionDelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassCurScheduleUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassCurScheduleUpdateNotify", [
            { no: 11, name: "have_cur_schedule", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "cur_schedule", kind: "message", T: () => exports.BattlePassSchedule }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool have_cur_schedule */ 11:
                    message.haveCurSchedule = reader.bool();
                    break;
                case /* optional com.midnights.game.BattlePassSchedule cur_schedule */ 1:
                    message.curSchedule = exports.BattlePassSchedule.internalBinaryRead(reader, reader.uint32(), options, message.curSchedule);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool have_cur_schedule = 11; */
        if (message.haveCurSchedule !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.haveCurSchedule);
        /* optional com.midnights.game.BattlePassSchedule cur_schedule = 1; */
        if (message.curSchedule)
            exports.BattlePassSchedule.internalBinaryWrite(message.curSchedule, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassCurScheduleUpdateNotify
 */
exports.BattlePassCurScheduleUpdateNotify = new BattlePassCurScheduleUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassRewardTakeOption$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassRewardTakeOption", [
            { no: 10, name: "tag", kind: "message", T: () => exports.BattlePassRewardTag },
            { no: 14, name: "option_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.BattlePassRewardTag tag */ 10:
                    message.tag = exports.BattlePassRewardTag.internalBinaryRead(reader, reader.uint32(), options, message.tag);
                    break;
                case /* optional uint32 option_idx */ 14:
                    message.optionIdx = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.BattlePassRewardTag tag = 10; */
        if (message.tag)
            exports.BattlePassRewardTag.internalBinaryWrite(message.tag, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 option_idx = 14; */
        if (message.optionIdx !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.optionIdx);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassRewardTakeOption
 */
exports.BattlePassRewardTakeOption = new BattlePassRewardTakeOption$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeBattlePassRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeBattlePassRewardReq", [
            { no: 12, name: "take_option_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.BattlePassRewardTakeOption }
        ]);
    }
    create(value) {
        const message = { takeOptionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.BattlePassRewardTakeOption take_option_list */ 12:
                    message.takeOptionList.push(exports.BattlePassRewardTakeOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.BattlePassRewardTakeOption take_option_list = 12; */
        for (let i = 0; i < message.takeOptionList.length; i++)
            exports.BattlePassRewardTakeOption.internalBinaryWrite(message.takeOptionList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeBattlePassRewardReq
 */
exports.TakeBattlePassRewardReq = new TakeBattlePassRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeBattlePassRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeBattlePassRewardRsp", [
            { no: 7, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam },
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "take_option_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.BattlePassRewardTakeOption }
        ]);
    }
    create(value) {
        const message = { itemList: [], takeOptionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ItemParam item_list */ 7:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.BattlePassRewardTakeOption take_option_list */ 9:
                    message.takeOptionList.push(exports.BattlePassRewardTakeOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ItemParam item_list = 7; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.BattlePassRewardTakeOption take_option_list = 9; */
        for (let i = 0; i < message.takeOptionList.length; i++)
            exports.BattlePassRewardTakeOption.internalBinaryWrite(message.takeOptionList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeBattlePassRewardRsp
 */
exports.TakeBattlePassRewardRsp = new TakeBattlePassRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeBattlePassMissionPointReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeBattlePassMissionPointReq", [
            { no: 5, name: "mission_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { missionIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 mission_id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.missionIdList.push(reader.uint32());
                    else
                        message.missionIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 mission_id_list = 5; */
        if (message.missionIdList.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.missionIdList.length; i++)
                writer.uint32(message.missionIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeBattlePassMissionPointReq
 */
exports.TakeBattlePassMissionPointReq = new TakeBattlePassMissionPointReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeBattlePassMissionPointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeBattlePassMissionPointRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "mission_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { missionIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 mission_id_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.missionIdList.push(reader.uint32());
                    else
                        message.missionIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated uint32 mission_id_list = 11; */
        if (message.missionIdList.length) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.missionIdList.length; i++)
                writer.uint32(message.missionIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeBattlePassMissionPointRsp
 */
exports.TakeBattlePassMissionPointRsp = new TakeBattlePassMissionPointRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBattlePassProductReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBattlePassProductReq", [
            { no: 10, name: "battle_pass_product_play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 battle_pass_product_play_type */ 10:
                    message.battlePassProductPlayType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 battle_pass_product_play_type = 10; */
        if (message.battlePassProductPlayType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.battlePassProductPlayType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBattlePassProductReq
 */
exports.GetBattlePassProductReq = new GetBattlePassProductReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBattlePassProductRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBattlePassProductRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "price_tier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "battle_pass_product_play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "product_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "cur_schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional string price_tier */ 6:
                    message.priceTier = reader.string();
                    break;
                case /* optional uint32 battle_pass_product_play_type */ 2:
                    message.battlePassProductPlayType = reader.uint32();
                    break;
                case /* optional string product_id */ 1:
                    message.productId = reader.string();
                    break;
                case /* optional uint32 cur_schedule_id */ 11:
                    message.curScheduleId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional string price_tier = 6; */
        if (message.priceTier !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.priceTier);
        /* optional uint32 battle_pass_product_play_type = 2; */
        if (message.battlePassProductPlayType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.battlePassProductPlayType);
        /* optional string product_id = 1; */
        if (message.productId !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* optional uint32 cur_schedule_id = 11; */
        if (message.curScheduleId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curScheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBattlePassProductRsp
 */
exports.GetBattlePassProductRsp = new GetBattlePassProductRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetBattlePassViewedReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetBattlePassViewedReq", [
            { no: 6, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 schedule_id */ 6:
                    message.scheduleId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 schedule_id = 6; */
        if (message.scheduleId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.scheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetBattlePassViewedReq
 */
exports.SetBattlePassViewedReq = new SetBattlePassViewedReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetBattlePassViewedRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetBattlePassViewedRsp", [
            { no: 2, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 schedule_id */ 2:
                    message.scheduleId = reader.uint32();
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
        /* optional uint32 schedule_id = 2; */
        if (message.scheduleId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.scheduleId);
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
 * @generated MessageType for protobuf message com.midnights.game.SetBattlePassViewedRsp
 */
exports.SetBattlePassViewedRsp = new SetBattlePassViewedRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassBuySuccNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BattlePassBuySuccNotify", [
            { no: 4, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "product_play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "add_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam }
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
                case /* optional uint32 schedule_id */ 4:
                    message.scheduleId = reader.uint32();
                    break;
                case /* optional uint32 product_play_type */ 11:
                    message.productPlayType = reader.uint32();
                    break;
                case /* optional uint32 add_point */ 12:
                    message.addPoint = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 9:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 schedule_id = 4; */
        if (message.scheduleId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* optional uint32 product_play_type = 11; */
        if (message.productPlayType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.productPlayType);
        /* optional uint32 add_point = 12; */
        if (message.addPoint !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.addPoint);
        /* repeated com.midnights.game.ItemParam item_list = 9; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BattlePassBuySuccNotify
 */
exports.BattlePassBuySuccNotify = new BattlePassBuySuccNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyBattlePassLevelReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuyBattlePassLevelReq", [
            { no: 8, name: "buy_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 buy_level */ 8:
                    message.buyLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 buy_level = 8; */
        if (message.buyLevel !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.buyLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuyBattlePassLevelReq
 */
exports.BuyBattlePassLevelReq = new BuyBattlePassLevelReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuyBattlePassLevelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuyBattlePassLevelRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "buy_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 buy_level */ 13:
                    message.buyLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 buy_level = 13; */
        if (message.buyLevel !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.buyLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuyBattlePassLevelRsp
 */
exports.BuyBattlePassLevelRsp = new BuyBattlePassLevelRsp$Type();
