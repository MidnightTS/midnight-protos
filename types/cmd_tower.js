"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerMonthlyDetail = exports.TowerMonthlyCombatRecord = exports.TowerFightRecordPair = exports.TowerMiddleLevelChangeTeamNotify = exports.TowerLevelStarCondNotify = exports.TowerLevelStarCondData = exports.TowerLevelEndNotify = exports.TowerGetFloorStarRewardRsp = exports.TowerGetFloorStarRewardReq = exports.TowerSurrenderRsp = exports.TowerSurrenderReq = exports.TowerBuffSelectRsp = exports.TowerBuffSelectReq = exports.TowerEnterLevelRsp = exports.TowerEnterLevelReq = exports.TowerAllDataRsp = exports.TowerMonthlyBrief = exports.TowerAllDataReq = exports.TowerTeamSelectRsp = exports.TowerTeamSelectReq = exports.TowerDailyRewardProgressChangeNotify = exports.TowerCurLevelRecordChangeNotify = exports.TowerFloorRecordChangeNotify = exports.TowerBriefDataNotify = exports.TowerCurLevelRecord = exports.TowerFloorRecord = exports.TowerLevelRecord = exports.TowerTeam = exports.TowerRecordHandbookRsp_CmdId = exports.TowerRecordHandbookReq_CmdId = exports.TowerMiddleLevelChangeTeamNotify_CmdId = exports.TowerLevelStarCondNotify_CmdId = exports.TowerLevelEndNotify_ContinueStateType = exports.TowerLevelEndNotify_CmdId = exports.TowerGetFloorStarRewardRsp_CmdId = exports.TowerGetFloorStarRewardReq_CmdId = exports.TowerSurrenderRsp_CmdId = exports.TowerSurrenderReq_CmdId = exports.TowerBuffSelectRsp_CmdId = exports.TowerBuffSelectReq_CmdId = exports.TowerEnterLevelRsp_CmdId = exports.TowerEnterLevelReq_CmdId = exports.TowerAllDataRsp_CmdId = exports.TowerAllDataReq_CmdId = exports.TowerTeamSelectRsp_CmdId = exports.TowerTeamSelectReq_CmdId = exports.TowerDailyRewardProgressChangeNotify_CmdId = exports.TowerCurLevelRecordChangeNotify_CmdId = exports.TowerFloorRecordChangeNotify_CmdId = exports.TowerBriefDataNotify_CmdId = void 0;
exports.TowerRecordHandbookRsp = exports.TowerRecordHandbookReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.TowerBriefDataNotify.CmdId
 */
var TowerBriefDataNotify_CmdId;
(function (TowerBriefDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerBriefDataNotify_CmdId[TowerBriefDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2472;
     */
    TowerBriefDataNotify_CmdId[TowerBriefDataNotify_CmdId["CMD_ID"] = 2472] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerBriefDataNotify_CmdId[TowerBriefDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerBriefDataNotify_CmdId[TowerBriefDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerBriefDataNotify_CmdId = exports.TowerBriefDataNotify_CmdId || (exports.TowerBriefDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerFloorRecordChangeNotify.CmdId
 */
var TowerFloorRecordChangeNotify_CmdId;
(function (TowerFloorRecordChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerFloorRecordChangeNotify_CmdId[TowerFloorRecordChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2498;
     */
    TowerFloorRecordChangeNotify_CmdId[TowerFloorRecordChangeNotify_CmdId["CMD_ID"] = 2498] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerFloorRecordChangeNotify_CmdId[TowerFloorRecordChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerFloorRecordChangeNotify_CmdId[TowerFloorRecordChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerFloorRecordChangeNotify_CmdId = exports.TowerFloorRecordChangeNotify_CmdId || (exports.TowerFloorRecordChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerCurLevelRecordChangeNotify.CmdId
 */
var TowerCurLevelRecordChangeNotify_CmdId;
(function (TowerCurLevelRecordChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerCurLevelRecordChangeNotify_CmdId[TowerCurLevelRecordChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2412;
     */
    TowerCurLevelRecordChangeNotify_CmdId[TowerCurLevelRecordChangeNotify_CmdId["CMD_ID"] = 2412] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerCurLevelRecordChangeNotify_CmdId[TowerCurLevelRecordChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerCurLevelRecordChangeNotify_CmdId[TowerCurLevelRecordChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerCurLevelRecordChangeNotify_CmdId = exports.TowerCurLevelRecordChangeNotify_CmdId || (exports.TowerCurLevelRecordChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerDailyRewardProgressChangeNotify.CmdId
 */
var TowerDailyRewardProgressChangeNotify_CmdId;
(function (TowerDailyRewardProgressChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerDailyRewardProgressChangeNotify_CmdId[TowerDailyRewardProgressChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2435;
     */
    TowerDailyRewardProgressChangeNotify_CmdId[TowerDailyRewardProgressChangeNotify_CmdId["CMD_ID"] = 2435] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerDailyRewardProgressChangeNotify_CmdId[TowerDailyRewardProgressChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerDailyRewardProgressChangeNotify_CmdId[TowerDailyRewardProgressChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerDailyRewardProgressChangeNotify_CmdId = exports.TowerDailyRewardProgressChangeNotify_CmdId || (exports.TowerDailyRewardProgressChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerTeamSelectReq.CmdId
 */
var TowerTeamSelectReq_CmdId;
(function (TowerTeamSelectReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerTeamSelectReq_CmdId[TowerTeamSelectReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2421;
     */
    TowerTeamSelectReq_CmdId[TowerTeamSelectReq_CmdId["CMD_ID"] = 2421] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerTeamSelectReq_CmdId[TowerTeamSelectReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerTeamSelectReq_CmdId[TowerTeamSelectReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerTeamSelectReq_CmdId[TowerTeamSelectReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TowerTeamSelectReq_CmdId = exports.TowerTeamSelectReq_CmdId || (exports.TowerTeamSelectReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerTeamSelectRsp.CmdId
 */
var TowerTeamSelectRsp_CmdId;
(function (TowerTeamSelectRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerTeamSelectRsp_CmdId[TowerTeamSelectRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2403;
     */
    TowerTeamSelectRsp_CmdId[TowerTeamSelectRsp_CmdId["CMD_ID"] = 2403] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerTeamSelectRsp_CmdId[TowerTeamSelectRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerTeamSelectRsp_CmdId[TowerTeamSelectRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerTeamSelectRsp_CmdId = exports.TowerTeamSelectRsp_CmdId || (exports.TowerTeamSelectRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerAllDataReq.CmdId
 */
var TowerAllDataReq_CmdId;
(function (TowerAllDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerAllDataReq_CmdId[TowerAllDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2490;
     */
    TowerAllDataReq_CmdId[TowerAllDataReq_CmdId["CMD_ID"] = 2490] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerAllDataReq_CmdId[TowerAllDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerAllDataReq_CmdId[TowerAllDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerAllDataReq_CmdId[TowerAllDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TowerAllDataReq_CmdId = exports.TowerAllDataReq_CmdId || (exports.TowerAllDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerAllDataRsp.CmdId
 */
var TowerAllDataRsp_CmdId;
(function (TowerAllDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerAllDataRsp_CmdId[TowerAllDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2473;
     */
    TowerAllDataRsp_CmdId[TowerAllDataRsp_CmdId["CMD_ID"] = 2473] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerAllDataRsp_CmdId[TowerAllDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerAllDataRsp_CmdId[TowerAllDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerAllDataRsp_CmdId = exports.TowerAllDataRsp_CmdId || (exports.TowerAllDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerEnterLevelReq.CmdId
 */
var TowerEnterLevelReq_CmdId;
(function (TowerEnterLevelReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerEnterLevelReq_CmdId[TowerEnterLevelReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2431;
     */
    TowerEnterLevelReq_CmdId[TowerEnterLevelReq_CmdId["CMD_ID"] = 2431] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerEnterLevelReq_CmdId[TowerEnterLevelReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerEnterLevelReq_CmdId[TowerEnterLevelReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerEnterLevelReq_CmdId[TowerEnterLevelReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TowerEnterLevelReq_CmdId = exports.TowerEnterLevelReq_CmdId || (exports.TowerEnterLevelReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerEnterLevelRsp.CmdId
 */
var TowerEnterLevelRsp_CmdId;
(function (TowerEnterLevelRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerEnterLevelRsp_CmdId[TowerEnterLevelRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2475;
     */
    TowerEnterLevelRsp_CmdId[TowerEnterLevelRsp_CmdId["CMD_ID"] = 2475] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerEnterLevelRsp_CmdId[TowerEnterLevelRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerEnterLevelRsp_CmdId[TowerEnterLevelRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerEnterLevelRsp_CmdId = exports.TowerEnterLevelRsp_CmdId || (exports.TowerEnterLevelRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerBuffSelectReq.CmdId
 */
var TowerBuffSelectReq_CmdId;
(function (TowerBuffSelectReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerBuffSelectReq_CmdId[TowerBuffSelectReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2448;
     */
    TowerBuffSelectReq_CmdId[TowerBuffSelectReq_CmdId["CMD_ID"] = 2448] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerBuffSelectReq_CmdId[TowerBuffSelectReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerBuffSelectReq_CmdId[TowerBuffSelectReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerBuffSelectReq_CmdId[TowerBuffSelectReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TowerBuffSelectReq_CmdId = exports.TowerBuffSelectReq_CmdId || (exports.TowerBuffSelectReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerBuffSelectRsp.CmdId
 */
var TowerBuffSelectRsp_CmdId;
(function (TowerBuffSelectRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerBuffSelectRsp_CmdId[TowerBuffSelectRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2497;
     */
    TowerBuffSelectRsp_CmdId[TowerBuffSelectRsp_CmdId["CMD_ID"] = 2497] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerBuffSelectRsp_CmdId[TowerBuffSelectRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerBuffSelectRsp_CmdId[TowerBuffSelectRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerBuffSelectRsp_CmdId = exports.TowerBuffSelectRsp_CmdId || (exports.TowerBuffSelectRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerSurrenderReq.CmdId
 */
var TowerSurrenderReq_CmdId;
(function (TowerSurrenderReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerSurrenderReq_CmdId[TowerSurrenderReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2422;
     */
    TowerSurrenderReq_CmdId[TowerSurrenderReq_CmdId["CMD_ID"] = 2422] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerSurrenderReq_CmdId[TowerSurrenderReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerSurrenderReq_CmdId[TowerSurrenderReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerSurrenderReq_CmdId[TowerSurrenderReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TowerSurrenderReq_CmdId = exports.TowerSurrenderReq_CmdId || (exports.TowerSurrenderReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerSurrenderRsp.CmdId
 */
var TowerSurrenderRsp_CmdId;
(function (TowerSurrenderRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerSurrenderRsp_CmdId[TowerSurrenderRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2465;
     */
    TowerSurrenderRsp_CmdId[TowerSurrenderRsp_CmdId["CMD_ID"] = 2465] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerSurrenderRsp_CmdId[TowerSurrenderRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerSurrenderRsp_CmdId[TowerSurrenderRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerSurrenderRsp_CmdId = exports.TowerSurrenderRsp_CmdId || (exports.TowerSurrenderRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerGetFloorStarRewardReq.CmdId
 */
var TowerGetFloorStarRewardReq_CmdId;
(function (TowerGetFloorStarRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerGetFloorStarRewardReq_CmdId[TowerGetFloorStarRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2404;
     */
    TowerGetFloorStarRewardReq_CmdId[TowerGetFloorStarRewardReq_CmdId["CMD_ID"] = 2404] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerGetFloorStarRewardReq_CmdId[TowerGetFloorStarRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerGetFloorStarRewardReq_CmdId[TowerGetFloorStarRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerGetFloorStarRewardReq_CmdId[TowerGetFloorStarRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TowerGetFloorStarRewardReq_CmdId = exports.TowerGetFloorStarRewardReq_CmdId || (exports.TowerGetFloorStarRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerGetFloorStarRewardRsp.CmdId
 */
var TowerGetFloorStarRewardRsp_CmdId;
(function (TowerGetFloorStarRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerGetFloorStarRewardRsp_CmdId[TowerGetFloorStarRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2493;
     */
    TowerGetFloorStarRewardRsp_CmdId[TowerGetFloorStarRewardRsp_CmdId["CMD_ID"] = 2493] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerGetFloorStarRewardRsp_CmdId[TowerGetFloorStarRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerGetFloorStarRewardRsp_CmdId[TowerGetFloorStarRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerGetFloorStarRewardRsp_CmdId = exports.TowerGetFloorStarRewardRsp_CmdId || (exports.TowerGetFloorStarRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerLevelEndNotify.CmdId
 */
var TowerLevelEndNotify_CmdId;
(function (TowerLevelEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerLevelEndNotify_CmdId[TowerLevelEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2495;
     */
    TowerLevelEndNotify_CmdId[TowerLevelEndNotify_CmdId["CMD_ID"] = 2495] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerLevelEndNotify_CmdId[TowerLevelEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerLevelEndNotify_CmdId[TowerLevelEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerLevelEndNotify_CmdId = exports.TowerLevelEndNotify_CmdId || (exports.TowerLevelEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerLevelEndNotify.ContinueStateType
 */
var TowerLevelEndNotify_ContinueStateType;
(function (TowerLevelEndNotify_ContinueStateType) {
    /**
     * @generated from protobuf enum value: CONTINUE_STATE_CAN_NOT_CONTINUE = 0;
     */
    TowerLevelEndNotify_ContinueStateType[TowerLevelEndNotify_ContinueStateType["CONTINUE_STATE_CAN_NOT_CONTINUE"] = 0] = "CONTINUE_STATE_CAN_NOT_CONTINUE";
    /**
     * @generated from protobuf enum value: CONTINUE_STATE_CAN_ENTER_NEXT_LEVEL = 1;
     */
    TowerLevelEndNotify_ContinueStateType[TowerLevelEndNotify_ContinueStateType["CONTINUE_STATE_CAN_ENTER_NEXT_LEVEL"] = 1] = "CONTINUE_STATE_CAN_ENTER_NEXT_LEVEL";
    /**
     * @generated from protobuf enum value: CONTINUE_STATE_CAN_ENTER_NEXT_FLOOR = 2;
     */
    TowerLevelEndNotify_ContinueStateType[TowerLevelEndNotify_ContinueStateType["CONTINUE_STATE_CAN_ENTER_NEXT_FLOOR"] = 2] = "CONTINUE_STATE_CAN_ENTER_NEXT_FLOOR";
})(TowerLevelEndNotify_ContinueStateType = exports.TowerLevelEndNotify_ContinueStateType || (exports.TowerLevelEndNotify_ContinueStateType = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerLevelStarCondNotify.CmdId
 */
var TowerLevelStarCondNotify_CmdId;
(function (TowerLevelStarCondNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerLevelStarCondNotify_CmdId[TowerLevelStarCondNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2406;
     */
    TowerLevelStarCondNotify_CmdId[TowerLevelStarCondNotify_CmdId["CMD_ID"] = 2406] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerLevelStarCondNotify_CmdId[TowerLevelStarCondNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerLevelStarCondNotify_CmdId[TowerLevelStarCondNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerLevelStarCondNotify_CmdId = exports.TowerLevelStarCondNotify_CmdId || (exports.TowerLevelStarCondNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerMiddleLevelChangeTeamNotify.CmdId
 */
var TowerMiddleLevelChangeTeamNotify_CmdId;
(function (TowerMiddleLevelChangeTeamNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerMiddleLevelChangeTeamNotify_CmdId[TowerMiddleLevelChangeTeamNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2434;
     */
    TowerMiddleLevelChangeTeamNotify_CmdId[TowerMiddleLevelChangeTeamNotify_CmdId["CMD_ID"] = 2434] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerMiddleLevelChangeTeamNotify_CmdId[TowerMiddleLevelChangeTeamNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerMiddleLevelChangeTeamNotify_CmdId[TowerMiddleLevelChangeTeamNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerMiddleLevelChangeTeamNotify_CmdId = exports.TowerMiddleLevelChangeTeamNotify_CmdId || (exports.TowerMiddleLevelChangeTeamNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerRecordHandbookReq.CmdId
 */
var TowerRecordHandbookReq_CmdId;
(function (TowerRecordHandbookReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerRecordHandbookReq_CmdId[TowerRecordHandbookReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2450;
     */
    TowerRecordHandbookReq_CmdId[TowerRecordHandbookReq_CmdId["CMD_ID"] = 2450] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerRecordHandbookReq_CmdId[TowerRecordHandbookReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerRecordHandbookReq_CmdId[TowerRecordHandbookReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerRecordHandbookReq_CmdId[TowerRecordHandbookReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TowerRecordHandbookReq_CmdId = exports.TowerRecordHandbookReq_CmdId || (exports.TowerRecordHandbookReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TowerRecordHandbookRsp.CmdId
 */
var TowerRecordHandbookRsp_CmdId;
(function (TowerRecordHandbookRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerRecordHandbookRsp_CmdId[TowerRecordHandbookRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2443;
     */
    TowerRecordHandbookRsp_CmdId[TowerRecordHandbookRsp_CmdId["CMD_ID"] = 2443] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TowerRecordHandbookRsp_CmdId[TowerRecordHandbookRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TowerRecordHandbookRsp_CmdId[TowerRecordHandbookRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TowerRecordHandbookRsp_CmdId = exports.TowerRecordHandbookRsp_CmdId || (exports.TowerRecordHandbookRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class TowerTeam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerTeam", [
            { no: 3, name: "tower_team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
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
                case /* optional uint32 tower_team_id */ 3:
                    message.towerTeamId = reader.uint32();
                    break;
                case /* repeated uint64 avatar_guid_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 tower_team_id = 3; */
        if (message.towerTeamId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.towerTeamId);
        /* repeated uint64 avatar_guid_list = 14; */
        for (let i = 0; i < message.avatarGuidList.length; i++)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.avatarGuidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerTeam
 */
exports.TowerTeam = new TowerTeam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerLevelRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerLevelRecord", [
            { no: 13, name: "satisfied_cond_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { satisfiedCondList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 satisfied_cond_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.satisfiedCondList.push(reader.uint32());
                    else
                        message.satisfiedCondList.push(reader.uint32());
                    break;
                case /* optional uint32 level_id */ 10:
                    message.levelId = reader.uint32();
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
        /* repeated uint32 satisfied_cond_list = 13; */
        for (let i = 0; i < message.satisfiedCondList.length; i++)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.satisfiedCondList[i]);
        /* optional uint32 level_id = 10; */
        if (message.levelId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerLevelRecord
 */
exports.TowerLevelRecord = new TowerLevelRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerFloorRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerFloorRecord", [
            { no: 15, name: "floor_star_reward_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "passed_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "passed_level_record_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerLevelRecord }
        ]);
    }
    create(value) {
        const message = { passedLevelMap: {}, passedLevelRecordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 floor_star_reward_progress */ 15:
                    message.floorStarRewardProgress = reader.uint32();
                    break;
                case /* map<uint32, uint32> passed_level_map */ 8:
                    this.binaryReadMap8(message.passedLevelMap, reader, options);
                    break;
                case /* optional uint32 floor_id */ 12:
                    message.floorId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.TowerLevelRecord passed_level_record_list */ 2:
                    message.passedLevelRecordList.push(exports.TowerLevelRecord.internalBinaryRead(reader, reader.uint32(), options));
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.TowerFloorRecord.passed_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 floor_star_reward_progress = 15; */
        if (message.floorStarRewardProgress !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.floorStarRewardProgress);
        /* map<uint32, uint32> passed_level_map = 8; */
        for (let k of Object.keys(message.passedLevelMap))
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.passedLevelMap[k]).join();
        /* optional uint32 floor_id = 12; */
        if (message.floorId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.floorId);
        /* repeated com.midnights.game.TowerLevelRecord passed_level_record_list = 2; */
        for (let i = 0; i < message.passedLevelRecordList.length; i++)
            exports.TowerLevelRecord.internalBinaryWrite(message.passedLevelRecordList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerFloorRecord
 */
exports.TowerFloorRecord = new TowerFloorRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerCurLevelRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerCurLevelRecord", [
            { no: 8, name: "tower_team_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerTeam },
            { no: 6, name: "is_empty", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "buff_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_upper_part", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "cur_level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cur_floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { towerTeamList: [], buffIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.TowerTeam tower_team_list */ 8:
                    message.towerTeamList.push(exports.TowerTeam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_empty */ 6:
                    message.isEmpty = reader.bool();
                    break;
                case /* repeated uint32 buff_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
                    break;
                case /* optional bool is_upper_part */ 2:
                    message.isUpperPart = reader.bool();
                    break;
                case /* optional uint32 cur_level_index */ 1:
                    message.curLevelIndex = reader.uint32();
                    break;
                case /* optional uint32 cur_floor_id */ 15:
                    message.curFloorId = reader.uint32();
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
        /* repeated com.midnights.game.TowerTeam tower_team_list = 8; */
        for (let i = 0; i < message.towerTeamList.length; i++)
            exports.TowerTeam.internalBinaryWrite(message.towerTeamList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_empty = 6; */
        if (message.isEmpty !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isEmpty);
        /* repeated uint32 buff_id_list = 4; */
        for (let i = 0; i < message.buffIdList.length; i++)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.buffIdList[i]);
        /* optional bool is_upper_part = 2; */
        if (message.isUpperPart !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isUpperPart);
        /* optional uint32 cur_level_index = 1; */
        if (message.curLevelIndex !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.curLevelIndex);
        /* optional uint32 cur_floor_id = 15; */
        if (message.curFloorId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.curFloorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerCurLevelRecord
 */
exports.TowerCurLevelRecord = new TowerCurLevelRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerBriefDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerBriefDataNotify", [
            { no: 11, name: "total_star_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "last_floor_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "schedule_start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "next_schedule_change_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_finished_entrance_floor", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "last_level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "tower_schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 total_star_num */ 11:
                    message.totalStarNum = reader.uint32();
                    break;
                case /* optional uint32 last_floor_index */ 8:
                    message.lastFloorIndex = reader.uint32();
                    break;
                case /* optional uint32 schedule_start_time */ 15:
                    message.scheduleStartTime = reader.uint32();
                    break;
                case /* optional uint32 next_schedule_change_time */ 6:
                    message.nextScheduleChangeTime = reader.uint32();
                    break;
                case /* optional bool is_finished_entrance_floor */ 14:
                    message.isFinishedEntranceFloor = reader.bool();
                    break;
                case /* optional uint32 last_level_index */ 4:
                    message.lastLevelIndex = reader.uint32();
                    break;
                case /* optional uint32 tower_schedule_id */ 5:
                    message.towerScheduleId = reader.uint32();
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
        /* optional uint32 total_star_num = 11; */
        if (message.totalStarNum !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.totalStarNum);
        /* optional uint32 last_floor_index = 8; */
        if (message.lastFloorIndex !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.lastFloorIndex);
        /* optional uint32 schedule_start_time = 15; */
        if (message.scheduleStartTime !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.scheduleStartTime);
        /* optional uint32 next_schedule_change_time = 6; */
        if (message.nextScheduleChangeTime !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.nextScheduleChangeTime);
        /* optional bool is_finished_entrance_floor = 14; */
        if (message.isFinishedEntranceFloor !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isFinishedEntranceFloor);
        /* optional uint32 last_level_index = 4; */
        if (message.lastLevelIndex !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.lastLevelIndex);
        /* optional uint32 tower_schedule_id = 5; */
        if (message.towerScheduleId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.towerScheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerBriefDataNotify
 */
exports.TowerBriefDataNotify = new TowerBriefDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerFloorRecordChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerFloorRecordChangeNotify", [
            { no: 11, name: "is_finished_entrance_floor", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "tower_floor_record_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerFloorRecord }
        ]);
    }
    create(value) {
        const message = { towerFloorRecordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_finished_entrance_floor */ 11:
                    message.isFinishedEntranceFloor = reader.bool();
                    break;
                case /* repeated com.midnights.game.TowerFloorRecord tower_floor_record_list */ 8:
                    message.towerFloorRecordList.push(exports.TowerFloorRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool is_finished_entrance_floor = 11; */
        if (message.isFinishedEntranceFloor !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isFinishedEntranceFloor);
        /* repeated com.midnights.game.TowerFloorRecord tower_floor_record_list = 8; */
        for (let i = 0; i < message.towerFloorRecordList.length; i++)
            exports.TowerFloorRecord.internalBinaryWrite(message.towerFloorRecordList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerFloorRecordChangeNotify
 */
exports.TowerFloorRecordChangeNotify = new TowerFloorRecordChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerCurLevelRecordChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerCurLevelRecordChangeNotify", [
            { no: 10, name: "cur_level_record", kind: "message", T: () => exports.TowerCurLevelRecord }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.TowerCurLevelRecord cur_level_record */ 10:
                    message.curLevelRecord = exports.TowerCurLevelRecord.internalBinaryRead(reader, reader.uint32(), options, message.curLevelRecord);
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
        /* optional com.midnights.game.TowerCurLevelRecord cur_level_record = 10; */
        if (message.curLevelRecord)
            exports.TowerCurLevelRecord.internalBinaryWrite(message.curLevelRecord, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerCurLevelRecordChangeNotify
 */
exports.TowerCurLevelRecordChangeNotify = new TowerCurLevelRecordChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerDailyRewardProgressChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerDailyRewardProgressChangeNotify", [
            { no: 15, name: "daily_floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "daily_level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 daily_floor_id */ 15:
                    message.dailyFloorId = reader.uint32();
                    break;
                case /* optional uint32 daily_level_index */ 9:
                    message.dailyLevelIndex = reader.uint32();
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
        /* optional uint32 daily_floor_id = 15; */
        if (message.dailyFloorId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.dailyFloorId);
        /* optional uint32 daily_level_index = 9; */
        if (message.dailyLevelIndex !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.dailyLevelIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerDailyRewardProgressChangeNotify
 */
exports.TowerDailyRewardProgressChangeNotify = new TowerDailyRewardProgressChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerTeamSelectReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerTeamSelectReq", [
            { no: 11, name: "tower_team_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerTeam },
            { no: 10, name: "floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { towerTeamList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.TowerTeam tower_team_list */ 11:
                    message.towerTeamList.push(exports.TowerTeam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 floor_id */ 10:
                    message.floorId = reader.uint32();
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
        /* repeated com.midnights.game.TowerTeam tower_team_list = 11; */
        for (let i = 0; i < message.towerTeamList.length; i++)
            exports.TowerTeam.internalBinaryWrite(message.towerTeamList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 floor_id = 10; */
        if (message.floorId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.floorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerTeamSelectReq
 */
exports.TowerTeamSelectReq = new TowerTeamSelectReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerTeamSelectRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerTeamSelectRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.TowerTeamSelectRsp
 */
exports.TowerTeamSelectRsp = new TowerTeamSelectRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerAllDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerAllDataReq", [
            { no: 2, name: "is_interact", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_interact */ 2:
                    message.isInteract = reader.bool();
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
        /* optional bool is_interact = 2; */
        if (message.isInteract !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isInteract);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerAllDataReq
 */
exports.TowerAllDataReq = new TowerAllDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerMonthlyBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerMonthlyBrief", [
            { no: 15, name: "tower_schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "best_floor_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "best_level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "total_star_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 tower_schedule_id */ 15:
                    message.towerScheduleId = reader.uint32();
                    break;
                case /* optional uint32 best_floor_index */ 6:
                    message.bestFloorIndex = reader.uint32();
                    break;
                case /* optional uint32 best_level_index */ 3:
                    message.bestLevelIndex = reader.uint32();
                    break;
                case /* optional uint32 total_star_count */ 12:
                    message.totalStarCount = reader.uint32();
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
        /* optional uint32 tower_schedule_id = 15; */
        if (message.towerScheduleId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.towerScheduleId);
        /* optional uint32 best_floor_index = 6; */
        if (message.bestFloorIndex !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.bestFloorIndex);
        /* optional uint32 best_level_index = 3; */
        if (message.bestLevelIndex !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.bestLevelIndex);
        /* optional uint32 total_star_count = 12; */
        if (message.totalStarCount !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.totalStarCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerMonthlyBrief
 */
exports.TowerMonthlyBrief = new TowerMonthlyBrief$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerAllDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerAllDataRsp", [
            { no: 10, name: "tower_schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "daily_level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "skip_floor_granted_reward_item_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "is_first_interact", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "is_finished_entrance_floor", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "tower_floor_record_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerFloorRecord },
            { no: 11, name: "daily_floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "commemorative_reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1222, name: "last_schedule_monthly_brief", kind: "message", T: () => exports.TowerMonthlyBrief },
            { no: 6, name: "next_schedule_change_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "valid_tower_record_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "skip_to_floor_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "floor_open_time_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "cur_level_record", kind: "message", T: () => exports.TowerCurLevelRecord },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 914, name: "schedule_start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "monthly_brief", kind: "message", T: () => exports.TowerMonthlyBrief }
        ]);
    }
    create(value) {
        const message = { skipFloorGrantedRewardItemMap: {}, towerFloorRecordList: [], floorOpenTimeMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 tower_schedule_id */ 10:
                    message.towerScheduleId = reader.uint32();
                    break;
                case /* optional uint32 daily_level_index */ 9:
                    message.dailyLevelIndex = reader.uint32();
                    break;
                case /* map<uint32, uint32> skip_floor_granted_reward_item_map */ 12:
                    this.binaryReadMap12(message.skipFloorGrantedRewardItemMap, reader, options);
                    break;
                case /* optional bool is_first_interact */ 3:
                    message.isFirstInteract = reader.bool();
                    break;
                case /* optional bool is_finished_entrance_floor */ 1:
                    message.isFinishedEntranceFloor = reader.bool();
                    break;
                case /* repeated com.midnights.game.TowerFloorRecord tower_floor_record_list */ 5:
                    message.towerFloorRecordList.push(exports.TowerFloorRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 daily_floor_id */ 11:
                    message.dailyFloorId = reader.uint32();
                    break;
                case /* optional uint32 commemorative_reward_id */ 13:
                    message.commemorativeRewardId = reader.uint32();
                    break;
                case /* optional com.midnights.game.TowerMonthlyBrief last_schedule_monthly_brief */ 1222:
                    message.lastScheduleMonthlyBrief = exports.TowerMonthlyBrief.internalBinaryRead(reader, reader.uint32(), options, message.lastScheduleMonthlyBrief);
                    break;
                case /* optional uint32 next_schedule_change_time */ 6:
                    message.nextScheduleChangeTime = reader.uint32();
                    break;
                case /* optional uint32 valid_tower_record_num */ 7:
                    message.validTowerRecordNum = reader.uint32();
                    break;
                case /* optional uint32 skip_to_floor_index */ 2:
                    message.skipToFloorIndex = reader.uint32();
                    break;
                case /* map<uint32, uint32> floor_open_time_map */ 4:
                    this.binaryReadMap4(message.floorOpenTimeMap, reader, options);
                    break;
                case /* optional com.midnights.game.TowerCurLevelRecord cur_level_record */ 15:
                    message.curLevelRecord = exports.TowerCurLevelRecord.internalBinaryRead(reader, reader.uint32(), options, message.curLevelRecord);
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 schedule_start_time */ 914:
                    message.scheduleStartTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.TowerMonthlyBrief monthly_brief */ 14:
                    message.monthlyBrief = exports.TowerMonthlyBrief.internalBinaryRead(reader, reader.uint32(), options, message.monthlyBrief);
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.TowerAllDataRsp.skip_floor_granted_reward_item_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.TowerAllDataRsp.floor_open_time_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 tower_schedule_id = 10; */
        if (message.towerScheduleId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.towerScheduleId);
        /* optional uint32 daily_level_index = 9; */
        if (message.dailyLevelIndex !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.dailyLevelIndex);
        /* map<uint32, uint32> skip_floor_granted_reward_item_map = 12; */
        for (let k of Object.keys(message.skipFloorGrantedRewardItemMap))
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skipFloorGrantedRewardItemMap[k]).join();
        /* optional bool is_first_interact = 3; */
        if (message.isFirstInteract !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isFirstInteract);
        /* optional bool is_finished_entrance_floor = 1; */
        if (message.isFinishedEntranceFloor !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isFinishedEntranceFloor);
        /* repeated com.midnights.game.TowerFloorRecord tower_floor_record_list = 5; */
        for (let i = 0; i < message.towerFloorRecordList.length; i++)
            exports.TowerFloorRecord.internalBinaryWrite(message.towerFloorRecordList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 daily_floor_id = 11; */
        if (message.dailyFloorId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.dailyFloorId);
        /* optional uint32 commemorative_reward_id = 13; */
        if (message.commemorativeRewardId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.commemorativeRewardId);
        /* optional com.midnights.game.TowerMonthlyBrief last_schedule_monthly_brief = 1222; */
        if (message.lastScheduleMonthlyBrief)
            exports.TowerMonthlyBrief.internalBinaryWrite(message.lastScheduleMonthlyBrief, writer.tag(1222, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 next_schedule_change_time = 6; */
        if (message.nextScheduleChangeTime !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.nextScheduleChangeTime);
        /* optional uint32 valid_tower_record_num = 7; */
        if (message.validTowerRecordNum !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.validTowerRecordNum);
        /* optional uint32 skip_to_floor_index = 2; */
        if (message.skipToFloorIndex !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.skipToFloorIndex);
        /* map<uint32, uint32> floor_open_time_map = 4; */
        for (let k of Object.keys(message.floorOpenTimeMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.floorOpenTimeMap[k]).join();
        /* optional com.midnights.game.TowerCurLevelRecord cur_level_record = 15; */
        if (message.curLevelRecord)
            exports.TowerCurLevelRecord.internalBinaryWrite(message.curLevelRecord, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 schedule_start_time = 914; */
        if (message.scheduleStartTime !== undefined)
            writer.tag(914, runtime_2.WireType.Varint).uint32(message.scheduleStartTime);
        /* optional com.midnights.game.TowerMonthlyBrief monthly_brief = 14; */
        if (message.monthlyBrief)
            exports.TowerMonthlyBrief.internalBinaryWrite(message.monthlyBrief, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerAllDataRsp
 */
exports.TowerAllDataRsp = new TowerAllDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerEnterLevelReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerEnterLevelReq", [
            { no: 3, name: "enter_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 enter_point_id */ 3:
                    message.enterPointId = reader.uint32();
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
        /* optional uint32 enter_point_id = 3; */
        if (message.enterPointId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.enterPointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerEnterLevelReq
 */
exports.TowerEnterLevelReq = new TowerEnterLevelReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerEnterLevelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerEnterLevelRsp", [
            { no: 10, name: "tower_buff_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { towerBuffIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 tower_buff_id_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.towerBuffIdList.push(reader.uint32());
                    else
                        message.towerBuffIdList.push(reader.uint32());
                    break;
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 level_index */ 14:
                    message.levelIndex = reader.uint32();
                    break;
                case /* optional uint32 floor_id */ 5:
                    message.floorId = reader.uint32();
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
        /* repeated uint32 tower_buff_id_list = 10; */
        for (let i = 0; i < message.towerBuffIdList.length; i++)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.towerBuffIdList[i]);
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 level_index = 14; */
        if (message.levelIndex !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.levelIndex);
        /* optional uint32 floor_id = 5; */
        if (message.floorId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.floorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerEnterLevelRsp
 */
exports.TowerEnterLevelRsp = new TowerEnterLevelRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerBuffSelectReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerBuffSelectReq", [
            { no: 5, name: "tower_buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 tower_buff_id */ 5:
                    message.towerBuffId = reader.uint32();
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
        /* optional uint32 tower_buff_id = 5; */
        if (message.towerBuffId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.towerBuffId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerBuffSelectReq
 */
exports.TowerBuffSelectReq = new TowerBuffSelectReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerBuffSelectRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerBuffSelectRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "tower_buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 tower_buff_id */ 13:
                    message.towerBuffId = reader.uint32();
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
        /* optional uint32 tower_buff_id = 13; */
        if (message.towerBuffId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.towerBuffId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerBuffSelectRsp
 */
exports.TowerBuffSelectRsp = new TowerBuffSelectRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerSurrenderReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerSurrenderReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.TowerSurrenderReq
 */
exports.TowerSurrenderReq = new TowerSurrenderReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerSurrenderRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerSurrenderRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.TowerSurrenderRsp
 */
exports.TowerSurrenderRsp = new TowerSurrenderRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerGetFloorStarRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerGetFloorStarRewardReq", [
            { no: 15, name: "floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 floor_id */ 15:
                    message.floorId = reader.uint32();
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
        /* optional uint32 floor_id = 15; */
        if (message.floorId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.floorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerGetFloorStarRewardReq
 */
exports.TowerGetFloorStarRewardReq = new TowerGetFloorStarRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerGetFloorStarRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerGetFloorStarRewardRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 floor_id */ 9:
                    message.floorId = reader.uint32();
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
        /* optional uint32 floor_id = 9; */
        if (message.floorId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.floorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerGetFloorStarRewardRsp
 */
exports.TowerGetFloorStarRewardRsp = new TowerGetFloorStarRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerLevelEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerLevelEndNotify", [
            { no: 4, name: "next_floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "reward_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam },
            { no: 15, name: "continue_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "finished_star_cond_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { rewardItemList: [], finishedStarCondList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 next_floor_id */ 4:
                    message.nextFloorId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam reward_item_list */ 12:
                    message.rewardItemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 continue_state */ 15:
                    message.continueState = reader.uint32();
                    break;
                case /* optional bool is_success */ 5:
                    message.isSuccess = reader.bool();
                    break;
                case /* repeated uint32 finished_star_cond_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedStarCondList.push(reader.uint32());
                    else
                        message.finishedStarCondList.push(reader.uint32());
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
        /* optional uint32 next_floor_id = 4; */
        if (message.nextFloorId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.nextFloorId);
        /* repeated com.midnights.game.ItemParam reward_item_list = 12; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 continue_state = 15; */
        if (message.continueState !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.continueState);
        /* optional bool is_success = 5; */
        if (message.isSuccess !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isSuccess);
        /* repeated uint32 finished_star_cond_list = 6; */
        for (let i = 0; i < message.finishedStarCondList.length; i++)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.finishedStarCondList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerLevelEndNotify
 */
exports.TowerLevelEndNotify = new TowerLevelEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerLevelStarCondData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerLevelStarCondData", [
            { no: 15, name: "is_fail", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "cond_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_pause", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "star_cond_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_fail */ 15:
                    message.isFail = reader.bool();
                    break;
                case /* optional uint32 cond_value */ 9:
                    message.condValue = reader.uint32();
                    break;
                case /* optional bool is_pause */ 13:
                    message.isPause = reader.bool();
                    break;
                case /* optional uint32 star_cond_index */ 6:
                    message.starCondIndex = reader.uint32();
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
        /* optional bool is_fail = 15; */
        if (message.isFail !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isFail);
        /* optional uint32 cond_value = 9; */
        if (message.condValue !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.condValue);
        /* optional bool is_pause = 13; */
        if (message.isPause !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isPause);
        /* optional uint32 star_cond_index = 6; */
        if (message.starCondIndex !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.starCondIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerLevelStarCondData
 */
exports.TowerLevelStarCondData = new TowerLevelStarCondData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerLevelStarCondNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerLevelStarCondNotify", [
            { no: 14, name: "level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "floor_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cond_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerLevelStarCondData }
        ]);
    }
    create(value) {
        const message = { condDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level_index */ 14:
                    message.levelIndex = reader.uint32();
                    break;
                case /* optional uint32 floor_id */ 11:
                    message.floorId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.TowerLevelStarCondData cond_data_list */ 9:
                    message.condDataList.push(exports.TowerLevelStarCondData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 level_index = 14; */
        if (message.levelIndex !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.levelIndex);
        /* optional uint32 floor_id = 11; */
        if (message.floorId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.floorId);
        /* repeated com.midnights.game.TowerLevelStarCondData cond_data_list = 9; */
        for (let i = 0; i < message.condDataList.length; i++)
            exports.TowerLevelStarCondData.internalBinaryWrite(message.condDataList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerLevelStarCondNotify
 */
exports.TowerLevelStarCondNotify = new TowerLevelStarCondNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerMiddleLevelChangeTeamNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerMiddleLevelChangeTeamNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.TowerMiddleLevelChangeTeamNotify
 */
exports.TowerMiddleLevelChangeTeamNotify = new TowerMiddleLevelChangeTeamNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerFightRecordPair$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerFightRecordPair", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "data", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 data */ 3:
                    message.data = reader.uint32();
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
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 data = 3; */
        if (message.data !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerFightRecordPair
 */
exports.TowerFightRecordPair = new TowerFightRecordPair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerMonthlyCombatRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerMonthlyCombatRecord", [
            { no: 14, name: "most_kill_avatar_pair", kind: "message", T: () => exports.TowerFightRecordPair },
            { no: 8, name: "most_cast_normal_skill_avatar_pair", kind: "message", T: () => exports.TowerFightRecordPair },
            { no: 6, name: "most_reveal_avatar_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerFightRecordPair },
            { no: 4, name: "most_cast_energy_skill_avatar_pair", kind: "message", T: () => exports.TowerFightRecordPair },
            { no: 12, name: "highest_dps_avatr_pair", kind: "message", T: () => exports.TowerFightRecordPair },
            { no: 9, name: "most_take_damage_avatar_pair", kind: "message", T: () => exports.TowerFightRecordPair }
        ]);
    }
    create(value) {
        const message = { mostRevealAvatarList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.TowerFightRecordPair most_kill_avatar_pair */ 14:
                    message.mostKillAvatarPair = exports.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.mostKillAvatarPair);
                    break;
                case /* optional com.midnights.game.TowerFightRecordPair most_cast_normal_skill_avatar_pair */ 8:
                    message.mostCastNormalSkillAvatarPair = exports.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.mostCastNormalSkillAvatarPair);
                    break;
                case /* repeated com.midnights.game.TowerFightRecordPair most_reveal_avatar_list */ 6:
                    message.mostRevealAvatarList.push(exports.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.TowerFightRecordPair most_cast_energy_skill_avatar_pair */ 4:
                    message.mostCastEnergySkillAvatarPair = exports.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.mostCastEnergySkillAvatarPair);
                    break;
                case /* optional com.midnights.game.TowerFightRecordPair highest_dps_avatr_pair */ 12:
                    message.highestDpsAvatrPair = exports.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.highestDpsAvatrPair);
                    break;
                case /* optional com.midnights.game.TowerFightRecordPair most_take_damage_avatar_pair */ 9:
                    message.mostTakeDamageAvatarPair = exports.TowerFightRecordPair.internalBinaryRead(reader, reader.uint32(), options, message.mostTakeDamageAvatarPair);
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
        /* optional com.midnights.game.TowerFightRecordPair most_kill_avatar_pair = 14; */
        if (message.mostKillAvatarPair)
            exports.TowerFightRecordPair.internalBinaryWrite(message.mostKillAvatarPair, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.TowerFightRecordPair most_cast_normal_skill_avatar_pair = 8; */
        if (message.mostCastNormalSkillAvatarPair)
            exports.TowerFightRecordPair.internalBinaryWrite(message.mostCastNormalSkillAvatarPair, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.TowerFightRecordPair most_reveal_avatar_list = 6; */
        for (let i = 0; i < message.mostRevealAvatarList.length; i++)
            exports.TowerFightRecordPair.internalBinaryWrite(message.mostRevealAvatarList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.TowerFightRecordPair most_cast_energy_skill_avatar_pair = 4; */
        if (message.mostCastEnergySkillAvatarPair)
            exports.TowerFightRecordPair.internalBinaryWrite(message.mostCastEnergySkillAvatarPair, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.TowerFightRecordPair highest_dps_avatr_pair = 12; */
        if (message.highestDpsAvatrPair)
            exports.TowerFightRecordPair.internalBinaryWrite(message.highestDpsAvatrPair, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.TowerFightRecordPair most_take_damage_avatar_pair = 9; */
        if (message.mostTakeDamageAvatarPair)
            exports.TowerFightRecordPair.internalBinaryWrite(message.mostTakeDamageAvatarPair, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerMonthlyCombatRecord
 */
exports.TowerMonthlyCombatRecord = new TowerMonthlyCombatRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerMonthlyDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerMonthlyDetail", [
            { no: 2, name: "monthly_combat_record", kind: "message", T: () => exports.TowerMonthlyCombatRecord },
            { no: 12, name: "monthly_brief", kind: "message", T: () => exports.TowerMonthlyBrief }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.TowerMonthlyCombatRecord monthly_combat_record */ 2:
                    message.monthlyCombatRecord = exports.TowerMonthlyCombatRecord.internalBinaryRead(reader, reader.uint32(), options, message.monthlyCombatRecord);
                    break;
                case /* optional com.midnights.game.TowerMonthlyBrief monthly_brief */ 12:
                    message.monthlyBrief = exports.TowerMonthlyBrief.internalBinaryRead(reader, reader.uint32(), options, message.monthlyBrief);
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
        /* optional com.midnights.game.TowerMonthlyCombatRecord monthly_combat_record = 2; */
        if (message.monthlyCombatRecord)
            exports.TowerMonthlyCombatRecord.internalBinaryWrite(message.monthlyCombatRecord, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.TowerMonthlyBrief monthly_brief = 12; */
        if (message.monthlyBrief)
            exports.TowerMonthlyBrief.internalBinaryWrite(message.monthlyBrief, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerMonthlyDetail
 */
exports.TowerMonthlyDetail = new TowerMonthlyDetail$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerRecordHandbookReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerRecordHandbookReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.TowerRecordHandbookReq
 */
exports.TowerRecordHandbookReq = new TowerRecordHandbookReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TowerRecordHandbookRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TowerRecordHandbookRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "monthly_detail_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.TowerMonthlyDetail }
        ]);
    }
    create(value) {
        const message = { monthlyDetailList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.TowerMonthlyDetail monthly_detail_list */ 14:
                    message.monthlyDetailList.push(exports.TowerMonthlyDetail.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.TowerMonthlyDetail monthly_detail_list = 14; */
        for (let i = 0; i < message.monthlyDetailList.length; i++)
            exports.TowerMonthlyDetail.internalBinaryWrite(message.monthlyDetailList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TowerRecordHandbookRsp
 */
exports.TowerRecordHandbookRsp = new TowerRecordHandbookRsp$Type();
