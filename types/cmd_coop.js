"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCoopPointRsp = exports.StartCoopPointReq = exports.CoopPointUpdateNotify = exports.UnlockCoopChapterRsp = exports.UnlockCoopChapterReq = exports.CoopRewardUpdateNotify = exports.CoopCgUpdateNotify = exports.CoopChapterUpdateNotify = exports.CoopDataNotify = exports.CoopChapter = exports.CoopCg = exports.CoopReward = exports.CoopPoint = exports.FinishMainCoopRsp = exports.FinishMainCoopReq = exports.SaveMainCoopRsp = exports.SaveMainCoopReq = exports.MainCoopUpdateNotify = exports.AllCoopInfoNotify = exports.MainCoop = exports.MainCoopFailNotify_CmdId = exports.SetCoopChapterViewedRsp_CmdId = exports.SetCoopChapterViewedReq_CmdId = exports.CoopCgShowNotify_CmdId = exports.SaveCoopDialogRsp_CmdId = exports.SaveCoopDialogReq_CmdId = exports.CoopProgressUpdateNotify_CmdId = exports.TakeCoopRewardRsp_CmdId = exports.TakeCoopRewardReq_CmdId = exports.CancelCoopTaskRsp_CmdId = exports.CancelCoopTaskReq_CmdId = exports.StartCoopPointRsp_CmdId = exports.StartCoopPointReq_CmdId = exports.CoopPointUpdateNotify_CmdId = exports.UnlockCoopChapterRsp_CmdId = exports.UnlockCoopChapterReq_CmdId = exports.CoopRewardUpdateNotify_CmdId = exports.CoopCgUpdateNotify_CmdId = exports.CoopChapterUpdateNotify_CmdId = exports.CoopDataNotify_CmdId = exports.CoopChapter_State = exports.CoopReward_State = exports.CoopPoint_State = exports.FinishMainCoopRsp_CmdId = exports.FinishMainCoopReq_CmdId = exports.SaveMainCoopRsp_CmdId = exports.SaveMainCoopReq_CmdId = exports.MainCoopUpdateNotify_CmdId = exports.AllCoopInfoNotify_CmdId = exports.MainCoop_Status = void 0;
exports.MainCoopFailNotify = exports.SetCoopChapterViewedRsp = exports.SetCoopChapterViewedReq = exports.CoopCgShowNotify = exports.SaveCoopDialogRsp = exports.SaveCoopDialogReq = exports.CoopProgressUpdateNotify = exports.TakeCoopRewardRsp = exports.TakeCoopRewardReq = exports.CancelCoopTaskRsp = exports.CancelCoopTaskReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.MainCoop.Status
 */
var MainCoop_Status;
(function (MainCoop_Status) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    MainCoop_Status[MainCoop_Status["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: RUNNING = 1;
     */
    MainCoop_Status[MainCoop_Status["RUNNING"] = 1] = "RUNNING";
    /**
     * @generated from protobuf enum value: FINISHED = 2;
     */
    MainCoop_Status[MainCoop_Status["FINISHED"] = 2] = "FINISHED";
})(MainCoop_Status = exports.MainCoop_Status || (exports.MainCoop_Status = {}));
/**
 * @generated from protobuf enum com.midnights.game.AllCoopInfoNotify.CmdId
 */
var AllCoopInfoNotify_CmdId;
(function (AllCoopInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllCoopInfoNotify_CmdId[AllCoopInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1976;
     */
    AllCoopInfoNotify_CmdId[AllCoopInfoNotify_CmdId["CMD_ID"] = 1976] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllCoopInfoNotify_CmdId[AllCoopInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AllCoopInfoNotify_CmdId[AllCoopInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AllCoopInfoNotify_CmdId = exports.AllCoopInfoNotify_CmdId || (exports.AllCoopInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MainCoopUpdateNotify.CmdId
 */
var MainCoopUpdateNotify_CmdId;
(function (MainCoopUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MainCoopUpdateNotify_CmdId[MainCoopUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1968;
     */
    MainCoopUpdateNotify_CmdId[MainCoopUpdateNotify_CmdId["CMD_ID"] = 1968] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MainCoopUpdateNotify_CmdId[MainCoopUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MainCoopUpdateNotify_CmdId[MainCoopUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MainCoopUpdateNotify_CmdId = exports.MainCoopUpdateNotify_CmdId || (exports.MainCoopUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveMainCoopReq.CmdId
 */
var SaveMainCoopReq_CmdId;
(function (SaveMainCoopReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveMainCoopReq_CmdId[SaveMainCoopReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1975;
     */
    SaveMainCoopReq_CmdId[SaveMainCoopReq_CmdId["CMD_ID"] = 1975] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveMainCoopReq_CmdId[SaveMainCoopReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveMainCoopReq_CmdId[SaveMainCoopReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveMainCoopReq_CmdId[SaveMainCoopReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SaveMainCoopReq_CmdId = exports.SaveMainCoopReq_CmdId || (exports.SaveMainCoopReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveMainCoopRsp.CmdId
 */
var SaveMainCoopRsp_CmdId;
(function (SaveMainCoopRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveMainCoopRsp_CmdId[SaveMainCoopRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1957;
     */
    SaveMainCoopRsp_CmdId[SaveMainCoopRsp_CmdId["CMD_ID"] = 1957] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveMainCoopRsp_CmdId[SaveMainCoopRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveMainCoopRsp_CmdId[SaveMainCoopRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SaveMainCoopRsp_CmdId = exports.SaveMainCoopRsp_CmdId || (exports.SaveMainCoopRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FinishMainCoopReq.CmdId
 */
var FinishMainCoopReq_CmdId;
(function (FinishMainCoopReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishMainCoopReq_CmdId[FinishMainCoopReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1952;
     */
    FinishMainCoopReq_CmdId[FinishMainCoopReq_CmdId["CMD_ID"] = 1952] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishMainCoopReq_CmdId[FinishMainCoopReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FinishMainCoopReq_CmdId[FinishMainCoopReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FinishMainCoopReq_CmdId[FinishMainCoopReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FinishMainCoopReq_CmdId = exports.FinishMainCoopReq_CmdId || (exports.FinishMainCoopReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FinishMainCoopRsp.CmdId
 */
var FinishMainCoopRsp_CmdId;
(function (FinishMainCoopRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishMainCoopRsp_CmdId[FinishMainCoopRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1981;
     */
    FinishMainCoopRsp_CmdId[FinishMainCoopRsp_CmdId["CMD_ID"] = 1981] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishMainCoopRsp_CmdId[FinishMainCoopRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FinishMainCoopRsp_CmdId[FinishMainCoopRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FinishMainCoopRsp_CmdId = exports.FinishMainCoopRsp_CmdId || (exports.FinishMainCoopRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopPoint.State
 */
var CoopPoint_State;
(function (CoopPoint_State) {
    /**
     * @generated from protobuf enum value: STATE_UNSTARTED = 0;
     */
    CoopPoint_State[CoopPoint_State["UNSTARTED"] = 0] = "UNSTARTED";
    /**
     * @generated from protobuf enum value: STATE_STARTED = 1;
     */
    CoopPoint_State[CoopPoint_State["STARTED"] = 1] = "STARTED";
    /**
     * @generated from protobuf enum value: STATE_FINISHED = 2;
     */
    CoopPoint_State[CoopPoint_State["FINISHED"] = 2] = "FINISHED";
})(CoopPoint_State = exports.CoopPoint_State || (exports.CoopPoint_State = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopReward.State
 */
var CoopReward_State;
(function (CoopReward_State) {
    /**
     * @generated from protobuf enum value: STATE_UNLOCK = 0;
     */
    CoopReward_State[CoopReward_State["UNLOCK"] = 0] = "UNLOCK";
    /**
     * @generated from protobuf enum value: STATE_LOCK = 1;
     */
    CoopReward_State[CoopReward_State["LOCK"] = 1] = "LOCK";
    /**
     * @generated from protobuf enum value: STATE_TAKEN = 2;
     */
    CoopReward_State[CoopReward_State["TAKEN"] = 2] = "TAKEN";
})(CoopReward_State = exports.CoopReward_State || (exports.CoopReward_State = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopChapter.State
 */
var CoopChapter_State;
(function (CoopChapter_State) {
    /**
     * @generated from protobuf enum value: STATE_CLOSE = 0;
     */
    CoopChapter_State[CoopChapter_State["CLOSE"] = 0] = "CLOSE";
    /**
     * @generated from protobuf enum value: STATE_COND_NOT_MEET = 1;
     */
    CoopChapter_State[CoopChapter_State["COND_NOT_MEET"] = 1] = "COND_NOT_MEET";
    /**
     * @generated from protobuf enum value: STATE_COND_MEET = 2;
     */
    CoopChapter_State[CoopChapter_State["COND_MEET"] = 2] = "COND_MEET";
    /**
     * @generated from protobuf enum value: STATE_ACCEPT = 3;
     */
    CoopChapter_State[CoopChapter_State["ACCEPT"] = 3] = "ACCEPT";
})(CoopChapter_State = exports.CoopChapter_State || (exports.CoopChapter_State = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopDataNotify.CmdId
 */
var CoopDataNotify_CmdId;
(function (CoopDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopDataNotify_CmdId[CoopDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1979;
     */
    CoopDataNotify_CmdId[CoopDataNotify_CmdId["CMD_ID"] = 1979] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopDataNotify_CmdId[CoopDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CoopDataNotify_CmdId[CoopDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CoopDataNotify_CmdId = exports.CoopDataNotify_CmdId || (exports.CoopDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopChapterUpdateNotify.CmdId
 */
var CoopChapterUpdateNotify_CmdId;
(function (CoopChapterUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopChapterUpdateNotify_CmdId[CoopChapterUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1972;
     */
    CoopChapterUpdateNotify_CmdId[CoopChapterUpdateNotify_CmdId["CMD_ID"] = 1972] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopChapterUpdateNotify_CmdId[CoopChapterUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CoopChapterUpdateNotify_CmdId[CoopChapterUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CoopChapterUpdateNotify_CmdId = exports.CoopChapterUpdateNotify_CmdId || (exports.CoopChapterUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopCgUpdateNotify.CmdId
 */
var CoopCgUpdateNotify_CmdId;
(function (CoopCgUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopCgUpdateNotify_CmdId[CoopCgUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1994;
     */
    CoopCgUpdateNotify_CmdId[CoopCgUpdateNotify_CmdId["CMD_ID"] = 1994] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopCgUpdateNotify_CmdId[CoopCgUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CoopCgUpdateNotify_CmdId[CoopCgUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CoopCgUpdateNotify_CmdId = exports.CoopCgUpdateNotify_CmdId || (exports.CoopCgUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopRewardUpdateNotify.CmdId
 */
var CoopRewardUpdateNotify_CmdId;
(function (CoopRewardUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopRewardUpdateNotify_CmdId[CoopRewardUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1999;
     */
    CoopRewardUpdateNotify_CmdId[CoopRewardUpdateNotify_CmdId["CMD_ID"] = 1999] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopRewardUpdateNotify_CmdId[CoopRewardUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CoopRewardUpdateNotify_CmdId[CoopRewardUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CoopRewardUpdateNotify_CmdId = exports.CoopRewardUpdateNotify_CmdId || (exports.CoopRewardUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockCoopChapterReq.CmdId
 */
var UnlockCoopChapterReq_CmdId;
(function (UnlockCoopChapterReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockCoopChapterReq_CmdId[UnlockCoopChapterReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1970;
     */
    UnlockCoopChapterReq_CmdId[UnlockCoopChapterReq_CmdId["CMD_ID"] = 1970] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockCoopChapterReq_CmdId[UnlockCoopChapterReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockCoopChapterReq_CmdId[UnlockCoopChapterReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockCoopChapterReq_CmdId[UnlockCoopChapterReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UnlockCoopChapterReq_CmdId = exports.UnlockCoopChapterReq_CmdId || (exports.UnlockCoopChapterReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockCoopChapterRsp.CmdId
 */
var UnlockCoopChapterRsp_CmdId;
(function (UnlockCoopChapterRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockCoopChapterRsp_CmdId[UnlockCoopChapterRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1995;
     */
    UnlockCoopChapterRsp_CmdId[UnlockCoopChapterRsp_CmdId["CMD_ID"] = 1995] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockCoopChapterRsp_CmdId[UnlockCoopChapterRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockCoopChapterRsp_CmdId[UnlockCoopChapterRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnlockCoopChapterRsp_CmdId = exports.UnlockCoopChapterRsp_CmdId || (exports.UnlockCoopChapterRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopPointUpdateNotify.CmdId
 */
var CoopPointUpdateNotify_CmdId;
(function (CoopPointUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopPointUpdateNotify_CmdId[CoopPointUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1991;
     */
    CoopPointUpdateNotify_CmdId[CoopPointUpdateNotify_CmdId["CMD_ID"] = 1991] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopPointUpdateNotify_CmdId[CoopPointUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CoopPointUpdateNotify_CmdId[CoopPointUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CoopPointUpdateNotify_CmdId = exports.CoopPointUpdateNotify_CmdId || (exports.CoopPointUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StartCoopPointReq.CmdId
 */
var StartCoopPointReq_CmdId;
(function (StartCoopPointReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartCoopPointReq_CmdId[StartCoopPointReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1992;
     */
    StartCoopPointReq_CmdId[StartCoopPointReq_CmdId["CMD_ID"] = 1992] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartCoopPointReq_CmdId[StartCoopPointReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StartCoopPointReq_CmdId[StartCoopPointReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StartCoopPointReq_CmdId[StartCoopPointReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(StartCoopPointReq_CmdId = exports.StartCoopPointReq_CmdId || (exports.StartCoopPointReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StartCoopPointRsp.CmdId
 */
var StartCoopPointRsp_CmdId;
(function (StartCoopPointRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartCoopPointRsp_CmdId[StartCoopPointRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1964;
     */
    StartCoopPointRsp_CmdId[StartCoopPointRsp_CmdId["CMD_ID"] = 1964] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StartCoopPointRsp_CmdId[StartCoopPointRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StartCoopPointRsp_CmdId[StartCoopPointRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(StartCoopPointRsp_CmdId = exports.StartCoopPointRsp_CmdId || (exports.StartCoopPointRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CancelCoopTaskReq.CmdId
 */
var CancelCoopTaskReq_CmdId;
(function (CancelCoopTaskReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCoopTaskReq_CmdId[CancelCoopTaskReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1997;
     */
    CancelCoopTaskReq_CmdId[CancelCoopTaskReq_CmdId["CMD_ID"] = 1997] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCoopTaskReq_CmdId[CancelCoopTaskReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CancelCoopTaskReq_CmdId[CancelCoopTaskReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CancelCoopTaskReq_CmdId[CancelCoopTaskReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CancelCoopTaskReq_CmdId = exports.CancelCoopTaskReq_CmdId || (exports.CancelCoopTaskReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CancelCoopTaskRsp.CmdId
 */
var CancelCoopTaskRsp_CmdId;
(function (CancelCoopTaskRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCoopTaskRsp_CmdId[CancelCoopTaskRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1987;
     */
    CancelCoopTaskRsp_CmdId[CancelCoopTaskRsp_CmdId["CMD_ID"] = 1987] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelCoopTaskRsp_CmdId[CancelCoopTaskRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CancelCoopTaskRsp_CmdId[CancelCoopTaskRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CancelCoopTaskRsp_CmdId = exports.CancelCoopTaskRsp_CmdId || (exports.CancelCoopTaskRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCoopRewardReq.CmdId
 */
var TakeCoopRewardReq_CmdId;
(function (TakeCoopRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCoopRewardReq_CmdId[TakeCoopRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1973;
     */
    TakeCoopRewardReq_CmdId[TakeCoopRewardReq_CmdId["CMD_ID"] = 1973] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCoopRewardReq_CmdId[TakeCoopRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCoopRewardReq_CmdId[TakeCoopRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCoopRewardReq_CmdId[TakeCoopRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeCoopRewardReq_CmdId = exports.TakeCoopRewardReq_CmdId || (exports.TakeCoopRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeCoopRewardRsp.CmdId
 */
var TakeCoopRewardRsp_CmdId;
(function (TakeCoopRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCoopRewardRsp_CmdId[TakeCoopRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1985;
     */
    TakeCoopRewardRsp_CmdId[TakeCoopRewardRsp_CmdId["CMD_ID"] = 1985] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeCoopRewardRsp_CmdId[TakeCoopRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeCoopRewardRsp_CmdId[TakeCoopRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeCoopRewardRsp_CmdId = exports.TakeCoopRewardRsp_CmdId || (exports.TakeCoopRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopProgressUpdateNotify.CmdId
 */
var CoopProgressUpdateNotify_CmdId;
(function (CoopProgressUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopProgressUpdateNotify_CmdId[CoopProgressUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1998;
     */
    CoopProgressUpdateNotify_CmdId[CoopProgressUpdateNotify_CmdId["CMD_ID"] = 1998] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopProgressUpdateNotify_CmdId[CoopProgressUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CoopProgressUpdateNotify_CmdId[CoopProgressUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CoopProgressUpdateNotify_CmdId = exports.CoopProgressUpdateNotify_CmdId || (exports.CoopProgressUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveCoopDialogReq.CmdId
 */
var SaveCoopDialogReq_CmdId;
(function (SaveCoopDialogReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCoopDialogReq_CmdId[SaveCoopDialogReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2000;
     */
    SaveCoopDialogReq_CmdId[SaveCoopDialogReq_CmdId["CMD_ID"] = 2000] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCoopDialogReq_CmdId[SaveCoopDialogReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveCoopDialogReq_CmdId[SaveCoopDialogReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveCoopDialogReq_CmdId[SaveCoopDialogReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SaveCoopDialogReq_CmdId = exports.SaveCoopDialogReq_CmdId || (exports.SaveCoopDialogReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveCoopDialogRsp.CmdId
 */
var SaveCoopDialogRsp_CmdId;
(function (SaveCoopDialogRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCoopDialogRsp_CmdId[SaveCoopDialogRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1962;
     */
    SaveCoopDialogRsp_CmdId[SaveCoopDialogRsp_CmdId["CMD_ID"] = 1962] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCoopDialogRsp_CmdId[SaveCoopDialogRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveCoopDialogRsp_CmdId[SaveCoopDialogRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SaveCoopDialogRsp_CmdId = exports.SaveCoopDialogRsp_CmdId || (exports.SaveCoopDialogRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CoopCgShowNotify.CmdId
 */
var CoopCgShowNotify_CmdId;
(function (CoopCgShowNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopCgShowNotify_CmdId[CoopCgShowNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1983;
     */
    CoopCgShowNotify_CmdId[CoopCgShowNotify_CmdId["CMD_ID"] = 1983] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CoopCgShowNotify_CmdId[CoopCgShowNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CoopCgShowNotify_CmdId[CoopCgShowNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CoopCgShowNotify_CmdId = exports.CoopCgShowNotify_CmdId || (exports.CoopCgShowNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetCoopChapterViewedReq.CmdId
 */
var SetCoopChapterViewedReq_CmdId;
(function (SetCoopChapterViewedReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCoopChapterViewedReq_CmdId[SetCoopChapterViewedReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1965;
     */
    SetCoopChapterViewedReq_CmdId[SetCoopChapterViewedReq_CmdId["CMD_ID"] = 1965] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCoopChapterViewedReq_CmdId[SetCoopChapterViewedReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetCoopChapterViewedReq_CmdId[SetCoopChapterViewedReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetCoopChapterViewedReq_CmdId[SetCoopChapterViewedReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetCoopChapterViewedReq_CmdId = exports.SetCoopChapterViewedReq_CmdId || (exports.SetCoopChapterViewedReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetCoopChapterViewedRsp.CmdId
 */
var SetCoopChapterViewedRsp_CmdId;
(function (SetCoopChapterViewedRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCoopChapterViewedRsp_CmdId[SetCoopChapterViewedRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1963;
     */
    SetCoopChapterViewedRsp_CmdId[SetCoopChapterViewedRsp_CmdId["CMD_ID"] = 1963] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetCoopChapterViewedRsp_CmdId[SetCoopChapterViewedRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetCoopChapterViewedRsp_CmdId[SetCoopChapterViewedRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetCoopChapterViewedRsp_CmdId = exports.SetCoopChapterViewedRsp_CmdId || (exports.SetCoopChapterViewedRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MainCoopFailNotify.CmdId
 */
var MainCoopFailNotify_CmdId;
(function (MainCoopFailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MainCoopFailNotify_CmdId[MainCoopFailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1951;
     */
    MainCoopFailNotify_CmdId[MainCoopFailNotify_CmdId["CMD_ID"] = 1951] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MainCoopFailNotify_CmdId[MainCoopFailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MainCoopFailNotify_CmdId[MainCoopFailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MainCoopFailNotify_CmdId = exports.MainCoopFailNotify_CmdId || (exports.MainCoopFailNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MainCoop$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MainCoop", [
            { no: 13, name: "seen_ending_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "normal_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 5, name: "self_confidence", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "save_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "status", kind: "enum", opt: true, T: () => ["com.midnights.game.MainCoop.Status", MainCoop_Status] },
            { no: 11, name: "temp_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 9, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { seenEndingMap: {}, normalVarMap: {}, savePointIdList: [], tempVarMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> seen_ending_map */ 13:
                    this.binaryReadMap13(message.seenEndingMap, reader, options);
                    break;
                case /* map<uint32, int32> normal_var_map */ 4:
                    this.binaryReadMap4(message.normalVarMap, reader, options);
                    break;
                case /* optional uint32 self_confidence */ 5:
                    message.selfConfidence = reader.uint32();
                    break;
                case /* repeated uint32 save_point_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.savePointIdList.push(reader.uint32());
                    else
                        message.savePointIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.MainCoop.Status status */ 6:
                    message.status = reader.int32();
                    break;
                case /* map<uint32, int32> temp_var_map */ 11:
                    this.binaryReadMap11(message.tempVarMap, reader, options);
                    break;
                case /* optional uint32 id */ 9:
                    message.id = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MainCoop.seen_ending_map");
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
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MainCoop.normal_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MainCoop.temp_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> seen_ending_map = 13; */
        for (let k of Object.keys(message.seenEndingMap))
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.seenEndingMap[k]).join();
        /* map<uint32, int32> normal_var_map = 4; */
        for (let k of Object.keys(message.normalVarMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).int32(message.normalVarMap[k]).join();
        /* optional uint32 self_confidence = 5; */
        if (message.selfConfidence !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.selfConfidence);
        /* repeated uint32 save_point_id_list = 1; */
        if (message.savePointIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.savePointIdList.length; i++)
                writer.uint32(message.savePointIdList[i]);
            writer.join();
        }
        /* optional com.midnights.game.MainCoop.Status status = 6; */
        if (message.status !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.status);
        /* map<uint32, int32> temp_var_map = 11; */
        for (let k of Object.keys(message.tempVarMap))
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).int32(message.tempVarMap[k]).join();
        /* optional uint32 id = 9; */
        if (message.id !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MainCoop
 */
exports.MainCoop = new MainCoop$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllCoopInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AllCoopInfoNotify", [
            { no: 14, name: "main_coop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MainCoop }
        ]);
    }
    create(value) {
        const message = { mainCoopList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.MainCoop main_coop_list */ 14:
                    message.mainCoopList.push(exports.MainCoop.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.MainCoop main_coop_list = 14; */
        for (let i = 0; i < message.mainCoopList.length; i++)
            exports.MainCoop.internalBinaryWrite(message.mainCoopList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AllCoopInfoNotify
 */
exports.AllCoopInfoNotify = new AllCoopInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MainCoopUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MainCoopUpdateNotify", [
            { no: 5, name: "main_coop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.MainCoop }
        ]);
    }
    create(value) {
        const message = { mainCoopList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.MainCoop main_coop_list */ 5:
                    message.mainCoopList.push(exports.MainCoop.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.MainCoop main_coop_list = 5; */
        for (let i = 0; i < message.mainCoopList.length; i++)
            exports.MainCoop.internalBinaryWrite(message.mainCoopList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MainCoopUpdateNotify
 */
exports.MainCoopUpdateNotify = new MainCoopUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveMainCoopReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveMainCoopReq", [
            { no: 15, name: "normal_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 2, name: "self_confidence", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "save_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "temp_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 3, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { normalVarMap: {}, tempVarMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, int32> normal_var_map */ 15:
                    this.binaryReadMap15(message.normalVarMap, reader, options);
                    break;
                case /* optional uint32 self_confidence */ 2:
                    message.selfConfidence = reader.uint32();
                    break;
                case /* optional uint32 save_point_id */ 1:
                    message.savePointId = reader.uint32();
                    break;
                case /* map<uint32, int32> temp_var_map */ 8:
                    this.binaryReadMap8(message.tempVarMap, reader, options);
                    break;
                case /* optional uint32 id */ 3:
                    message.id = reader.uint32();
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
    binaryReadMap15(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SaveMainCoopReq.normal_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SaveMainCoopReq.temp_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, int32> normal_var_map = 15; */
        for (let k of Object.keys(message.normalVarMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).int32(message.normalVarMap[k]).join();
        /* optional uint32 self_confidence = 2; */
        if (message.selfConfidence !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.selfConfidence);
        /* optional uint32 save_point_id = 1; */
        if (message.savePointId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.savePointId);
        /* map<uint32, int32> temp_var_map = 8; */
        for (let k of Object.keys(message.tempVarMap))
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).int32(message.tempVarMap[k]).join();
        /* optional uint32 id = 3; */
        if (message.id !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SaveMainCoopReq
 */
exports.SaveMainCoopReq = new SaveMainCoopReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveMainCoopRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveMainCoopRsp", [
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "save_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { savePointIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 save_point_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.savePointIdList.push(reader.uint32());
                    else
                        message.savePointIdList.push(reader.uint32());
                    break;
                case /* optional uint32 id */ 14:
                    message.id = reader.uint32();
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
        /* repeated uint32 save_point_id_list = 15; */
        if (message.savePointIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.savePointIdList.length; i++)
                writer.uint32(message.savePointIdList[i]);
            writer.join();
        }
        /* optional uint32 id = 14; */
        if (message.id !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SaveMainCoopRsp
 */
exports.SaveMainCoopRsp = new SaveMainCoopRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinishMainCoopReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FinishMainCoopReq", [
            { no: 10, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "ending_save_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 10:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 ending_save_point_id */ 1:
                    message.endingSavePointId = reader.uint32();
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
        /* optional uint32 id = 10; */
        if (message.id !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.id);
        /* optional uint32 ending_save_point_id = 1; */
        if (message.endingSavePointId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.endingSavePointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FinishMainCoopReq
 */
exports.FinishMainCoopReq = new FinishMainCoopReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinishMainCoopRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FinishMainCoopRsp", [
            { no: 2, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "ending_save_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 ending_save_point_id */ 6:
                    message.endingSavePointId = reader.uint32();
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
        /* optional uint32 id = 2; */
        if (message.id !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.id);
        /* optional uint32 ending_save_point_id = 6; */
        if (message.endingSavePointId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.endingSavePointId);
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
 * @generated MessageType for protobuf message com.midnights.game.FinishMainCoopRsp
 */
exports.FinishMainCoopRsp = new FinishMainCoopRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopPoint$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopPoint", [
            { no: 15, name: "self_confidence", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.CoopPoint.State", CoopPoint_State, "STATE_"] },
            { no: 14, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 self_confidence */ 15:
                    message.selfConfidence = reader.uint32();
                    break;
                case /* optional com.midnights.game.CoopPoint.State state */ 10:
                    message.state = reader.int32();
                    break;
                case /* optional uint32 id */ 14:
                    message.id = reader.uint32();
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
        /* optional uint32 self_confidence = 15; */
        if (message.selfConfidence !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.selfConfidence);
        /* optional com.midnights.game.CoopPoint.State state = 10; */
        if (message.state !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.state);
        /* optional uint32 id = 14; */
        if (message.id !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopPoint
 */
exports.CoopPoint = new CoopPoint$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopReward$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopReward", [
            { no: 5, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.CoopReward.State", CoopReward_State, "STATE_"] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 5:
                    message.id = reader.uint32();
                    break;
                case /* optional com.midnights.game.CoopReward.State state */ 6:
                    message.state = reader.int32();
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
        /* optional uint32 id = 5; */
        if (message.id !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.id);
        /* optional com.midnights.game.CoopReward.State state = 6; */
        if (message.state !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopReward
 */
exports.CoopReward = new CoopReward$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopCg$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopCg", [
            { no: 14, name: "is_unlock", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_unlock */ 14:
                    message.isUnlock = reader.bool();
                    break;
                case /* optional uint32 id */ 8:
                    message.id = reader.uint32();
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
        /* optional bool is_unlock = 14; */
        if (message.isUnlock !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isUnlock);
        /* optional uint32 id = 8; */
        if (message.id !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopCg
 */
exports.CoopCg = new CoopCg$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopChapter$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopChapter", [
            { no: 1, name: "coop_cg_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CoopCg },
            { no: 2, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "coop_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CoopPoint },
            { no: 10, name: "finish_dialog_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "finished_end_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "total_end_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "coop_reward_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CoopReward },
            { no: 12, name: "lock_reason_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.CoopChapter.State", CoopChapter_State, "STATE_"] },
            { no: 9, name: "seen_ending_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { coopCgList: [], coopPointList: [], finishDialogList: [], coopRewardList: [], lockReasonList: [], seenEndingMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CoopCg coop_cg_list */ 1:
                    message.coopCgList.push(exports.CoopCg.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 id */ 2:
                    message.id = reader.uint32();
                    break;
                case /* repeated com.midnights.game.CoopPoint coop_point_list */ 11:
                    message.coopPointList.push(exports.CoopPoint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 finish_dialog_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishDialogList.push(reader.uint32());
                    else
                        message.finishDialogList.push(reader.uint32());
                    break;
                case /* optional uint32 finished_end_count */ 14:
                    message.finishedEndCount = reader.uint32();
                    break;
                case /* optional uint32 total_end_count */ 7:
                    message.totalEndCount = reader.uint32();
                    break;
                case /* repeated com.midnights.game.CoopReward coop_reward_list */ 5:
                    message.coopRewardList.push(exports.CoopReward.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 lock_reason_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lockReasonList.push(reader.uint32());
                    else
                        message.lockReasonList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.CoopChapter.State state */ 4:
                    message.state = reader.int32();
                    break;
                case /* map<uint32, uint32> seen_ending_map */ 9:
                    this.binaryReadMap9(message.seenEndingMap, reader, options);
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.CoopChapter.seen_ending_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.CoopCg coop_cg_list = 1; */
        for (let i = 0; i < message.coopCgList.length; i++)
            exports.CoopCg.internalBinaryWrite(message.coopCgList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 id = 2; */
        if (message.id !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.id);
        /* repeated com.midnights.game.CoopPoint coop_point_list = 11; */
        for (let i = 0; i < message.coopPointList.length; i++)
            exports.CoopPoint.internalBinaryWrite(message.coopPointList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 finish_dialog_list = 10; */
        if (message.finishDialogList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishDialogList.length; i++)
                writer.uint32(message.finishDialogList[i]);
            writer.join();
        }
        /* optional uint32 finished_end_count = 14; */
        if (message.finishedEndCount !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.finishedEndCount);
        /* optional uint32 total_end_count = 7; */
        if (message.totalEndCount !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.totalEndCount);
        /* repeated com.midnights.game.CoopReward coop_reward_list = 5; */
        for (let i = 0; i < message.coopRewardList.length; i++)
            exports.CoopReward.internalBinaryWrite(message.coopRewardList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 lock_reason_list = 12; */
        if (message.lockReasonList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lockReasonList.length; i++)
                writer.uint32(message.lockReasonList[i]);
            writer.join();
        }
        /* optional com.midnights.game.CoopChapter.State state = 4; */
        if (message.state !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.state);
        /* map<uint32, uint32> seen_ending_map = 9; */
        for (let k of Object.keys(message.seenEndingMap))
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.seenEndingMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopChapter
 */
exports.CoopChapter = new CoopChapter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopDataNotify", [
            { no: 15, name: "chapter_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CoopChapter },
            { no: 7, name: "viewed_chapter_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_have_progress", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "cur_coop_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { chapterList: [], viewedChapterList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CoopChapter chapter_list */ 15:
                    message.chapterList.push(exports.CoopChapter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 viewed_chapter_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.viewedChapterList.push(reader.uint32());
                    else
                        message.viewedChapterList.push(reader.uint32());
                    break;
                case /* optional bool is_have_progress */ 10:
                    message.isHaveProgress = reader.bool();
                    break;
                case /* optional uint32 cur_coop_point */ 5:
                    message.curCoopPoint = reader.uint32();
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
        /* repeated com.midnights.game.CoopChapter chapter_list = 15; */
        for (let i = 0; i < message.chapterList.length; i++)
            exports.CoopChapter.internalBinaryWrite(message.chapterList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 viewed_chapter_list = 7; */
        if (message.viewedChapterList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.viewedChapterList.length; i++)
                writer.uint32(message.viewedChapterList[i]);
            writer.join();
        }
        /* optional bool is_have_progress = 10; */
        if (message.isHaveProgress !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isHaveProgress);
        /* optional uint32 cur_coop_point = 5; */
        if (message.curCoopPoint !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.curCoopPoint);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopDataNotify
 */
exports.CoopDataNotify = new CoopDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopChapterUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopChapterUpdateNotify", [
            { no: 14, name: "chapter_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CoopChapter }
        ]);
    }
    create(value) {
        const message = { chapterList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CoopChapter chapter_list */ 14:
                    message.chapterList.push(exports.CoopChapter.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.CoopChapter chapter_list = 14; */
        for (let i = 0; i < message.chapterList.length; i++)
            exports.CoopChapter.internalBinaryWrite(message.chapterList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopChapterUpdateNotify
 */
exports.CoopChapterUpdateNotify = new CoopChapterUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopCgUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopCgUpdateNotify", [
            { no: 13, name: "cg_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cgList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 cg_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cgList.push(reader.uint32());
                    else
                        message.cgList.push(reader.uint32());
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
        /* repeated uint32 cg_list = 13; */
        if (message.cgList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cgList.length; i++)
                writer.uint32(message.cgList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopCgUpdateNotify
 */
exports.CoopCgUpdateNotify = new CoopCgUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopRewardUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopRewardUpdateNotify", [
            { no: 7, name: "reward_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CoopReward }
        ]);
    }
    create(value) {
        const message = { rewardList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CoopReward reward_list */ 7:
                    message.rewardList.push(exports.CoopReward.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.CoopReward reward_list = 7; */
        for (let i = 0; i < message.rewardList.length; i++)
            exports.CoopReward.internalBinaryWrite(message.rewardList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopRewardUpdateNotify
 */
exports.CoopRewardUpdateNotify = new CoopRewardUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockCoopChapterReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockCoopChapterReq", [
            { no: 3, name: "chapter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 chapter_id */ 3:
                    message.chapterId = reader.uint32();
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
        /* optional uint32 chapter_id = 3; */
        if (message.chapterId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockCoopChapterReq
 */
exports.UnlockCoopChapterReq = new UnlockCoopChapterReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockCoopChapterRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockCoopChapterRsp", [
            { no: 4, name: "chapter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 chapter_id */ 4:
                    message.chapterId = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 chapter_id = 4; */
        if (message.chapterId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.chapterId);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockCoopChapterRsp
 */
exports.UnlockCoopChapterRsp = new UnlockCoopChapterRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopPointUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopPointUpdateNotify", [
            { no: 13, name: "coop_point", kind: "message", T: () => exports.CoopPoint }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CoopPoint coop_point */ 13:
                    message.coopPoint = exports.CoopPoint.internalBinaryRead(reader, reader.uint32(), options, message.coopPoint);
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
        /* optional com.midnights.game.CoopPoint coop_point = 13; */
        if (message.coopPoint)
            exports.CoopPoint.internalBinaryWrite(message.coopPoint, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopPointUpdateNotify
 */
exports.CoopPointUpdateNotify = new CoopPointUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StartCoopPointReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StartCoopPointReq", [
            { no: 7, name: "coop_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 coop_point */ 7:
                    message.coopPoint = reader.uint32();
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
        /* optional uint32 coop_point = 7; */
        if (message.coopPoint !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.coopPoint);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StartCoopPointReq
 */
exports.StartCoopPointReq = new StartCoopPointReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StartCoopPointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StartCoopPointRsp", [
            { no: 9, name: "is_start", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "start_main_coop", kind: "message", T: () => exports.MainCoop },
            { no: 13, name: "coop_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional bool is_start */ 9:
                    message.isStart = reader.bool();
                    break;
                case /* optional com.midnights.game.MainCoop start_main_coop */ 15:
                    message.startMainCoop = exports.MainCoop.internalBinaryRead(reader, reader.uint32(), options, message.startMainCoop);
                    break;
                case /* optional uint32 coop_point */ 13:
                    message.coopPoint = reader.uint32();
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
        /* optional bool is_start = 9; */
        if (message.isStart !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isStart);
        /* optional com.midnights.game.MainCoop start_main_coop = 15; */
        if (message.startMainCoop)
            exports.MainCoop.internalBinaryWrite(message.startMainCoop, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 coop_point = 13; */
        if (message.coopPoint !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.coopPoint);
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
 * @generated MessageType for protobuf message com.midnights.game.StartCoopPointRsp
 */
exports.StartCoopPointRsp = new StartCoopPointRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CancelCoopTaskReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CancelCoopTaskReq", [
            { no: 13, name: "chapter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 chapter_id */ 13:
                    message.chapterId = reader.uint32();
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
        /* optional uint32 chapter_id = 13; */
        if (message.chapterId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CancelCoopTaskReq
 */
exports.CancelCoopTaskReq = new CancelCoopTaskReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CancelCoopTaskRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CancelCoopTaskRsp", [
            { no: 1, name: "chapter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 chapter_id */ 1:
                    message.chapterId = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 chapter_id = 1; */
        if (message.chapterId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.chapterId);
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CancelCoopTaskRsp
 */
exports.CancelCoopTaskRsp = new CancelCoopTaskRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCoopRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCoopRewardReq", [
            { no: 6, name: "reward_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 reward_config_id */ 6:
                    message.rewardConfigId = reader.uint32();
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
        /* optional uint32 reward_config_id = 6; */
        if (message.rewardConfigId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.rewardConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCoopRewardReq
 */
exports.TakeCoopRewardReq = new TakeCoopRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeCoopRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeCoopRewardRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "reward_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 reward_config_id */ 1:
                    message.rewardConfigId = reader.uint32();
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
        /* optional uint32 reward_config_id = 1; */
        if (message.rewardConfigId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.rewardConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeCoopRewardRsp
 */
exports.TakeCoopRewardRsp = new TakeCoopRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopProgressUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopProgressUpdateNotify", [
            { no: 11, name: "cur_coop_point", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_have_progress", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_coop_point */ 11:
                    message.curCoopPoint = reader.uint32();
                    break;
                case /* optional bool is_have_progress */ 12:
                    message.isHaveProgress = reader.bool();
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
        /* optional uint32 cur_coop_point = 11; */
        if (message.curCoopPoint !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.curCoopPoint);
        /* optional bool is_have_progress = 12; */
        if (message.isHaveProgress !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.isHaveProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopProgressUpdateNotify
 */
exports.CoopProgressUpdateNotify = new CoopProgressUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveCoopDialogReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveCoopDialogReq", [
            { no: 11, name: "main_coop_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dialog_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 main_coop_id */ 11:
                    message.mainCoopId = reader.uint32();
                    break;
                case /* optional uint32 dialog_id */ 6:
                    message.dialogId = reader.uint32();
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
        /* optional uint32 main_coop_id = 11; */
        if (message.mainCoopId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.mainCoopId);
        /* optional uint32 dialog_id = 6; */
        if (message.dialogId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.dialogId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SaveCoopDialogReq
 */
exports.SaveCoopDialogReq = new SaveCoopDialogReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveCoopDialogRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveCoopDialogRsp", [
            { no: 8, name: "dialog_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "main_coop_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 dialog_id */ 8:
                    message.dialogId = reader.uint32();
                    break;
                case /* optional uint32 main_coop_id */ 10:
                    message.mainCoopId = reader.uint32();
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
        /* optional uint32 dialog_id = 8; */
        if (message.dialogId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.dialogId);
        /* optional uint32 main_coop_id = 10; */
        if (message.mainCoopId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.mainCoopId);
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
 * @generated MessageType for protobuf message com.midnights.game.SaveCoopDialogRsp
 */
exports.SaveCoopDialogRsp = new SaveCoopDialogRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CoopCgShowNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CoopCgShowNotify", [
            { no: 10, name: "cg_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cgList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 cg_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cgList.push(reader.uint32());
                    else
                        message.cgList.push(reader.uint32());
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
        /* repeated uint32 cg_list = 10; */
        if (message.cgList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cgList.length; i++)
                writer.uint32(message.cgList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CoopCgShowNotify
 */
exports.CoopCgShowNotify = new CoopCgShowNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetCoopChapterViewedReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetCoopChapterViewedReq", [
            { no: 2, name: "chapter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 chapter_id */ 2:
                    message.chapterId = reader.uint32();
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
        /* optional uint32 chapter_id = 2; */
        if (message.chapterId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetCoopChapterViewedReq
 */
exports.SetCoopChapterViewedReq = new SetCoopChapterViewedReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetCoopChapterViewedRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetCoopChapterViewedRsp", [
            { no: 11, name: "chapter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 chapter_id */ 11:
                    message.chapterId = reader.uint32();
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
        /* optional uint32 chapter_id = 11; */
        if (message.chapterId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.chapterId);
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
 * @generated MessageType for protobuf message com.midnights.game.SetCoopChapterViewedRsp
 */
exports.SetCoopChapterViewedRsp = new SetCoopChapterViewedRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MainCoopFailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MainCoopFailNotify", [
            { no: 7, name: "textmap_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "chapter_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string textmap_id */ 7:
                    message.textmapId = reader.string();
                    break;
                case /* optional uint32 chapter_id */ 15:
                    message.chapterId = reader.uint32();
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
        /* optional string textmap_id = 7; */
        if (message.textmapId !== undefined)
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.textmapId);
        /* optional uint32 chapter_id = 15; */
        if (message.chapterId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MainCoopFailNotify
 */
exports.MainCoopFailNotify = new MainCoopFailNotify$Type();
