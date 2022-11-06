"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectWorktopOptionReq = exports.WorktopOptionNotify = exports.GadgetStateNotify = exports.GadgetInteractRsp = exports.GadgetInteractReq = exports.VehicleInteractType = exports.FoundationOpType = exports.ResinCostType = exports.InterOpType = exports.InteractType = exports.DeshretObeliskChestInfoNotify_CmdId = exports.NightCrowGadgetObservationMatchRsp_CmdId = exports.NightCrowGadgetObservationMatchReq_CmdId = exports.GadgetChangeLevelTagRsp_CmdId = exports.GadgetChangeLevelTagReq_CmdId = exports.GadgetCustomTreeInfoNotify_CmdId = exports.VehicleStaminaNotify_CmdId = exports.LiveEndNotify_CmdId = exports.ProjectorOptionRsp_CmdId = exports.ProjectorOptionReq_ProjectorOpType = exports.ProjectorOptionReq_CmdId = exports.LiveStartNotify_CmdId = exports.RequestLiveInfoRsp_CmdId = exports.RequestLiveInfoReq_CmdId = exports.CreateVehicleRsp_CmdId = exports.CreateVehicleReq_CmdId = exports.VehicleInteractRsp_CmdId = exports.VehicleInteractReq_CmdId = exports.GadgetChainLevelChangeNotify_CmdId = exports.GadgetChainLevelUpdateNotify_CmdId = exports.GadgetTalkChangeNotify_CmdId = exports.FoundationNotify_CmdId = exports.FoundationRsp_CmdId = exports.FoundationReq_CmdId = exports.UpdateAbilityCreatedMovingPlatformNotify_CmdId = exports.UpdateAbilityCreatedMovingPlatformNotify_OpType = exports.GadgetAutoPickDropInfoNotify_CmdId = exports.GadgetGeneralRewardInfoNotify_CmdId = exports.GadgetPlayUidOpNotify_CmdId = exports.GadgetPlayDataNotify_CmdId = exports.GadgetPlayStopNotify_CmdId = exports.GadgetPlayStartNotify_CmdId = exports.BlossomChestInfoNotify_CmdId = exports.BossChestActivateNotify_CmdId = exports.SelectWorktopOptionRsp_CmdId = exports.SelectWorktopOptionReq_CmdId = exports.WorktopOptionNotify_CmdId = exports.GadgetStateNotify_CmdId = exports.GadgetInteractRsp_CmdId = exports.GadgetInteractReq_CmdId = void 0;
exports.DeshretObeliskChestInfoNotify = exports.DeshretObeliskChestInfo = exports.NightCrowGadgetObservationMatchRsp = exports.NightCrowGadgetObservationMatchReq = exports.GadgetChangeLevelTagRsp = exports.GadgetChangeLevelTagReq = exports.GadgetCustomTreeInfoNotify = exports.VehicleStaminaNotify = exports.LiveEndNotify = exports.ProjectorOptionRsp = exports.ProjectorOptionReq = exports.LiveStartNotify = exports.RequestLiveInfoRsp = exports.RequestLiveInfoReq = exports.CreateVehicleRsp = exports.CreateVehicleReq = exports.VehicleInteractRsp = exports.VehicleInteractReq = exports.GadgetChainLevelChangeNotify = exports.GadgetChainLevelUpdateNotify = exports.GadgetTalkChangeNotify = exports.FoundationNotify = exports.FoundationRsp = exports.FoundationReq = exports.UpdateAbilityCreatedMovingPlatformNotify = exports.GadgetAutoPickDropInfoNotify = exports.GadgetGeneralRewardInfoNotify = exports.GadgetPlayUidOpNotify = exports.GadgetPlayDataNotify = exports.GadgetPlayStopNotify = exports.GadgetPlayUidInfo = exports.GadgetPlayStartNotify = exports.BlossomChestInfoNotify = exports.BossChestActivateNotify = exports.SelectWorktopOptionRsp = void 0;
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
/**
 * @generated from protobuf enum com.midnights.game.GadgetInteractReq.CmdId
 */
var GadgetInteractReq_CmdId;
(function (GadgetInteractReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetInteractReq_CmdId[GadgetInteractReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 872;
     */
    GadgetInteractReq_CmdId[GadgetInteractReq_CmdId["CMD_ID"] = 872] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetInteractReq_CmdId[GadgetInteractReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetInteractReq_CmdId[GadgetInteractReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetInteractReq_CmdId[GadgetInteractReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GadgetInteractReq_CmdId = exports.GadgetInteractReq_CmdId || (exports.GadgetInteractReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetInteractRsp.CmdId
 */
var GadgetInteractRsp_CmdId;
(function (GadgetInteractRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetInteractRsp_CmdId[GadgetInteractRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 898;
     */
    GadgetInteractRsp_CmdId[GadgetInteractRsp_CmdId["CMD_ID"] = 898] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetInteractRsp_CmdId[GadgetInteractRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetInteractRsp_CmdId[GadgetInteractRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetInteractRsp_CmdId = exports.GadgetInteractRsp_CmdId || (exports.GadgetInteractRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetStateNotify.CmdId
 */
var GadgetStateNotify_CmdId;
(function (GadgetStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetStateNotify_CmdId[GadgetStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 812;
     */
    GadgetStateNotify_CmdId[GadgetStateNotify_CmdId["CMD_ID"] = 812] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetStateNotify_CmdId[GadgetStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetStateNotify_CmdId[GadgetStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetStateNotify_CmdId = exports.GadgetStateNotify_CmdId || (exports.GadgetStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorktopOptionNotify.CmdId
 */
var WorktopOptionNotify_CmdId;
(function (WorktopOptionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorktopOptionNotify_CmdId[WorktopOptionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 835;
     */
    WorktopOptionNotify_CmdId[WorktopOptionNotify_CmdId["CMD_ID"] = 835] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorktopOptionNotify_CmdId[WorktopOptionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorktopOptionNotify_CmdId[WorktopOptionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorktopOptionNotify_CmdId = exports.WorktopOptionNotify_CmdId || (exports.WorktopOptionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SelectWorktopOptionReq.CmdId
 */
var SelectWorktopOptionReq_CmdId;
(function (SelectWorktopOptionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SelectWorktopOptionReq_CmdId[SelectWorktopOptionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 807;
     */
    SelectWorktopOptionReq_CmdId[SelectWorktopOptionReq_CmdId["CMD_ID"] = 807] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SelectWorktopOptionReq_CmdId[SelectWorktopOptionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SelectWorktopOptionReq_CmdId[SelectWorktopOptionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SelectWorktopOptionReq_CmdId[SelectWorktopOptionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SelectWorktopOptionReq_CmdId = exports.SelectWorktopOptionReq_CmdId || (exports.SelectWorktopOptionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SelectWorktopOptionRsp.CmdId
 */
var SelectWorktopOptionRsp_CmdId;
(function (SelectWorktopOptionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SelectWorktopOptionRsp_CmdId[SelectWorktopOptionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 821;
     */
    SelectWorktopOptionRsp_CmdId[SelectWorktopOptionRsp_CmdId["CMD_ID"] = 821] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SelectWorktopOptionRsp_CmdId[SelectWorktopOptionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SelectWorktopOptionRsp_CmdId[SelectWorktopOptionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SelectWorktopOptionRsp_CmdId = exports.SelectWorktopOptionRsp_CmdId || (exports.SelectWorktopOptionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BossChestActivateNotify.CmdId
 */
var BossChestActivateNotify_CmdId;
(function (BossChestActivateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BossChestActivateNotify_CmdId[BossChestActivateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 803;
     */
    BossChestActivateNotify_CmdId[BossChestActivateNotify_CmdId["CMD_ID"] = 803] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BossChestActivateNotify_CmdId[BossChestActivateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BossChestActivateNotify_CmdId[BossChestActivateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BossChestActivateNotify_CmdId = exports.BossChestActivateNotify_CmdId || (exports.BossChestActivateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BlossomChestInfoNotify.CmdId
 */
var BlossomChestInfoNotify_CmdId;
(function (BlossomChestInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BlossomChestInfoNotify_CmdId[BlossomChestInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 890;
     */
    BlossomChestInfoNotify_CmdId[BlossomChestInfoNotify_CmdId["CMD_ID"] = 890] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BlossomChestInfoNotify_CmdId[BlossomChestInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BlossomChestInfoNotify_CmdId[BlossomChestInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BlossomChestInfoNotify_CmdId = exports.BlossomChestInfoNotify_CmdId || (exports.BlossomChestInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetPlayStartNotify.CmdId
 */
var GadgetPlayStartNotify_CmdId;
(function (GadgetPlayStartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayStartNotify_CmdId[GadgetPlayStartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 873;
     */
    GadgetPlayStartNotify_CmdId[GadgetPlayStartNotify_CmdId["CMD_ID"] = 873] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayStartNotify_CmdId[GadgetPlayStartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetPlayStartNotify_CmdId[GadgetPlayStartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetPlayStartNotify_CmdId = exports.GadgetPlayStartNotify_CmdId || (exports.GadgetPlayStartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetPlayStopNotify.CmdId
 */
var GadgetPlayStopNotify_CmdId;
(function (GadgetPlayStopNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayStopNotify_CmdId[GadgetPlayStopNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 899;
     */
    GadgetPlayStopNotify_CmdId[GadgetPlayStopNotify_CmdId["CMD_ID"] = 899] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayStopNotify_CmdId[GadgetPlayStopNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetPlayStopNotify_CmdId[GadgetPlayStopNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetPlayStopNotify_CmdId = exports.GadgetPlayStopNotify_CmdId || (exports.GadgetPlayStopNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetPlayDataNotify.CmdId
 */
var GadgetPlayDataNotify_CmdId;
(function (GadgetPlayDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayDataNotify_CmdId[GadgetPlayDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 831;
     */
    GadgetPlayDataNotify_CmdId[GadgetPlayDataNotify_CmdId["CMD_ID"] = 831] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayDataNotify_CmdId[GadgetPlayDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetPlayDataNotify_CmdId[GadgetPlayDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetPlayDataNotify_CmdId = exports.GadgetPlayDataNotify_CmdId || (exports.GadgetPlayDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetPlayUidOpNotify.CmdId
 */
var GadgetPlayUidOpNotify_CmdId;
(function (GadgetPlayUidOpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayUidOpNotify_CmdId[GadgetPlayUidOpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 875;
     */
    GadgetPlayUidOpNotify_CmdId[GadgetPlayUidOpNotify_CmdId["CMD_ID"] = 875] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetPlayUidOpNotify_CmdId[GadgetPlayUidOpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetPlayUidOpNotify_CmdId[GadgetPlayUidOpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetPlayUidOpNotify_CmdId = exports.GadgetPlayUidOpNotify_CmdId || (exports.GadgetPlayUidOpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetGeneralRewardInfoNotify.CmdId
 */
var GadgetGeneralRewardInfoNotify_CmdId;
(function (GadgetGeneralRewardInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetGeneralRewardInfoNotify_CmdId[GadgetGeneralRewardInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 848;
     */
    GadgetGeneralRewardInfoNotify_CmdId[GadgetGeneralRewardInfoNotify_CmdId["CMD_ID"] = 848] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetGeneralRewardInfoNotify_CmdId[GadgetGeneralRewardInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetGeneralRewardInfoNotify_CmdId[GadgetGeneralRewardInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetGeneralRewardInfoNotify_CmdId = exports.GadgetGeneralRewardInfoNotify_CmdId || (exports.GadgetGeneralRewardInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetAutoPickDropInfoNotify.CmdId
 */
var GadgetAutoPickDropInfoNotify_CmdId;
(function (GadgetAutoPickDropInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetAutoPickDropInfoNotify_CmdId[GadgetAutoPickDropInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 897;
     */
    GadgetAutoPickDropInfoNotify_CmdId[GadgetAutoPickDropInfoNotify_CmdId["CMD_ID"] = 897] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetAutoPickDropInfoNotify_CmdId[GadgetAutoPickDropInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetAutoPickDropInfoNotify_CmdId[GadgetAutoPickDropInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetAutoPickDropInfoNotify_CmdId = exports.GadgetAutoPickDropInfoNotify_CmdId || (exports.GadgetAutoPickDropInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdateAbilityCreatedMovingPlatformNotify.OpType
 */
var UpdateAbilityCreatedMovingPlatformNotify_OpType;
(function (UpdateAbilityCreatedMovingPlatformNotify_OpType) {
    /**
     * @generated from protobuf enum value: OP_NONE = 0;
     */
    UpdateAbilityCreatedMovingPlatformNotify_OpType[UpdateAbilityCreatedMovingPlatformNotify_OpType["OP_NONE"] = 0] = "OP_NONE";
    /**
     * @generated from protobuf enum value: OP_ACTIVATE = 1;
     */
    UpdateAbilityCreatedMovingPlatformNotify_OpType[UpdateAbilityCreatedMovingPlatformNotify_OpType["OP_ACTIVATE"] = 1] = "OP_ACTIVATE";
    /**
     * @generated from protobuf enum value: OP_DEACTIVATE = 2;
     */
    UpdateAbilityCreatedMovingPlatformNotify_OpType[UpdateAbilityCreatedMovingPlatformNotify_OpType["OP_DEACTIVATE"] = 2] = "OP_DEACTIVATE";
})(UpdateAbilityCreatedMovingPlatformNotify_OpType = exports.UpdateAbilityCreatedMovingPlatformNotify_OpType || (exports.UpdateAbilityCreatedMovingPlatformNotify_OpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdateAbilityCreatedMovingPlatformNotify.CmdId
 */
var UpdateAbilityCreatedMovingPlatformNotify_CmdId;
(function (UpdateAbilityCreatedMovingPlatformNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdateAbilityCreatedMovingPlatformNotify_CmdId[UpdateAbilityCreatedMovingPlatformNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 881;
     */
    UpdateAbilityCreatedMovingPlatformNotify_CmdId[UpdateAbilityCreatedMovingPlatformNotify_CmdId["CMD_ID"] = 881] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdateAbilityCreatedMovingPlatformNotify_CmdId[UpdateAbilityCreatedMovingPlatformNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdateAbilityCreatedMovingPlatformNotify_CmdId[UpdateAbilityCreatedMovingPlatformNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdateAbilityCreatedMovingPlatformNotify_CmdId[UpdateAbilityCreatedMovingPlatformNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UpdateAbilityCreatedMovingPlatformNotify_CmdId = exports.UpdateAbilityCreatedMovingPlatformNotify_CmdId || (exports.UpdateAbilityCreatedMovingPlatformNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FoundationReq.CmdId
 */
var FoundationReq_CmdId;
(function (FoundationReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FoundationReq_CmdId[FoundationReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 805;
     */
    FoundationReq_CmdId[FoundationReq_CmdId["CMD_ID"] = 805] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FoundationReq_CmdId[FoundationReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FoundationReq_CmdId[FoundationReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FoundationReq_CmdId[FoundationReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FoundationReq_CmdId = exports.FoundationReq_CmdId || (exports.FoundationReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FoundationRsp.CmdId
 */
var FoundationRsp_CmdId;
(function (FoundationRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FoundationRsp_CmdId[FoundationRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 882;
     */
    FoundationRsp_CmdId[FoundationRsp_CmdId["CMD_ID"] = 882] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FoundationRsp_CmdId[FoundationRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FoundationRsp_CmdId[FoundationRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FoundationRsp_CmdId = exports.FoundationRsp_CmdId || (exports.FoundationRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FoundationNotify.CmdId
 */
var FoundationNotify_CmdId;
(function (FoundationNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FoundationNotify_CmdId[FoundationNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 847;
     */
    FoundationNotify_CmdId[FoundationNotify_CmdId["CMD_ID"] = 847] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FoundationNotify_CmdId[FoundationNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FoundationNotify_CmdId[FoundationNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FoundationNotify_CmdId = exports.FoundationNotify_CmdId || (exports.FoundationNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetTalkChangeNotify.CmdId
 */
var GadgetTalkChangeNotify_CmdId;
(function (GadgetTalkChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetTalkChangeNotify_CmdId[GadgetTalkChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 839;
     */
    GadgetTalkChangeNotify_CmdId[GadgetTalkChangeNotify_CmdId["CMD_ID"] = 839] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetTalkChangeNotify_CmdId[GadgetTalkChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetTalkChangeNotify_CmdId[GadgetTalkChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetTalkChangeNotify_CmdId = exports.GadgetTalkChangeNotify_CmdId || (exports.GadgetTalkChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetChainLevelUpdateNotify.CmdId
 */
var GadgetChainLevelUpdateNotify_CmdId;
(function (GadgetChainLevelUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChainLevelUpdateNotify_CmdId[GadgetChainLevelUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 853;
     */
    GadgetChainLevelUpdateNotify_CmdId[GadgetChainLevelUpdateNotify_CmdId["CMD_ID"] = 853] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChainLevelUpdateNotify_CmdId[GadgetChainLevelUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetChainLevelUpdateNotify_CmdId[GadgetChainLevelUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetChainLevelUpdateNotify_CmdId = exports.GadgetChainLevelUpdateNotify_CmdId || (exports.GadgetChainLevelUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetChainLevelChangeNotify.CmdId
 */
var GadgetChainLevelChangeNotify_CmdId;
(function (GadgetChainLevelChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChainLevelChangeNotify_CmdId[GadgetChainLevelChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 822;
     */
    GadgetChainLevelChangeNotify_CmdId[GadgetChainLevelChangeNotify_CmdId["CMD_ID"] = 822] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChainLevelChangeNotify_CmdId[GadgetChainLevelChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetChainLevelChangeNotify_CmdId[GadgetChainLevelChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetChainLevelChangeNotify_CmdId = exports.GadgetChainLevelChangeNotify_CmdId || (exports.GadgetChainLevelChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.VehicleInteractReq.CmdId
 */
var VehicleInteractReq_CmdId;
(function (VehicleInteractReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    VehicleInteractReq_CmdId[VehicleInteractReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 865;
     */
    VehicleInteractReq_CmdId[VehicleInteractReq_CmdId["CMD_ID"] = 865] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    VehicleInteractReq_CmdId[VehicleInteractReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    VehicleInteractReq_CmdId[VehicleInteractReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    VehicleInteractReq_CmdId[VehicleInteractReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(VehicleInteractReq_CmdId = exports.VehicleInteractReq_CmdId || (exports.VehicleInteractReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.VehicleInteractRsp.CmdId
 */
var VehicleInteractRsp_CmdId;
(function (VehicleInteractRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    VehicleInteractRsp_CmdId[VehicleInteractRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 804;
     */
    VehicleInteractRsp_CmdId[VehicleInteractRsp_CmdId["CMD_ID"] = 804] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    VehicleInteractRsp_CmdId[VehicleInteractRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    VehicleInteractRsp_CmdId[VehicleInteractRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(VehicleInteractRsp_CmdId = exports.VehicleInteractRsp_CmdId || (exports.VehicleInteractRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CreateVehicleReq.CmdId
 */
var CreateVehicleReq_CmdId;
(function (CreateVehicleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateVehicleReq_CmdId[CreateVehicleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 893;
     */
    CreateVehicleReq_CmdId[CreateVehicleReq_CmdId["CMD_ID"] = 893] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateVehicleReq_CmdId[CreateVehicleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CreateVehicleReq_CmdId[CreateVehicleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CreateVehicleReq_CmdId[CreateVehicleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CreateVehicleReq_CmdId = exports.CreateVehicleReq_CmdId || (exports.CreateVehicleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CreateVehicleRsp.CmdId
 */
var CreateVehicleRsp_CmdId;
(function (CreateVehicleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateVehicleRsp_CmdId[CreateVehicleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 827;
     */
    CreateVehicleRsp_CmdId[CreateVehicleRsp_CmdId["CMD_ID"] = 827] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateVehicleRsp_CmdId[CreateVehicleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CreateVehicleRsp_CmdId[CreateVehicleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CreateVehicleRsp_CmdId = exports.CreateVehicleRsp_CmdId || (exports.CreateVehicleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RequestLiveInfoReq.CmdId
 */
var RequestLiveInfoReq_CmdId;
(function (RequestLiveInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RequestLiveInfoReq_CmdId[RequestLiveInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 894;
     */
    RequestLiveInfoReq_CmdId[RequestLiveInfoReq_CmdId["CMD_ID"] = 894] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RequestLiveInfoReq_CmdId[RequestLiveInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RequestLiveInfoReq_CmdId[RequestLiveInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RequestLiveInfoReq_CmdId[RequestLiveInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RequestLiveInfoReq_CmdId = exports.RequestLiveInfoReq_CmdId || (exports.RequestLiveInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RequestLiveInfoRsp.CmdId
 */
var RequestLiveInfoRsp_CmdId;
(function (RequestLiveInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RequestLiveInfoRsp_CmdId[RequestLiveInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 888;
     */
    RequestLiveInfoRsp_CmdId[RequestLiveInfoRsp_CmdId["CMD_ID"] = 888] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RequestLiveInfoRsp_CmdId[RequestLiveInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RequestLiveInfoRsp_CmdId[RequestLiveInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RequestLiveInfoRsp_CmdId = exports.RequestLiveInfoRsp_CmdId || (exports.RequestLiveInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LiveStartNotify.CmdId
 */
var LiveStartNotify_CmdId;
(function (LiveStartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LiveStartNotify_CmdId[LiveStartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 826;
     */
    LiveStartNotify_CmdId[LiveStartNotify_CmdId["CMD_ID"] = 826] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LiveStartNotify_CmdId[LiveStartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LiveStartNotify_CmdId[LiveStartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LiveStartNotify_CmdId = exports.LiveStartNotify_CmdId || (exports.LiveStartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProjectorOptionReq.CmdId
 */
var ProjectorOptionReq_CmdId;
(function (ProjectorOptionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProjectorOptionReq_CmdId[ProjectorOptionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 863;
     */
    ProjectorOptionReq_CmdId[ProjectorOptionReq_CmdId["CMD_ID"] = 863] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProjectorOptionReq_CmdId[ProjectorOptionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProjectorOptionReq_CmdId[ProjectorOptionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProjectorOptionReq_CmdId[ProjectorOptionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ProjectorOptionReq_CmdId = exports.ProjectorOptionReq_CmdId || (exports.ProjectorOptionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProjectorOptionReq.ProjectorOpType
 */
var ProjectorOptionReq_ProjectorOpType;
(function (ProjectorOptionReq_ProjectorOpType) {
    /**
     * @generated from protobuf enum value: PROJECTOR_OP_NONE = 0;
     */
    ProjectorOptionReq_ProjectorOpType[ProjectorOptionReq_ProjectorOpType["PROJECTOR_OP_NONE"] = 0] = "PROJECTOR_OP_NONE";
    /**
     * @generated from protobuf enum value: PROJECTOR_OP_CREATE = 1;
     */
    ProjectorOptionReq_ProjectorOpType[ProjectorOptionReq_ProjectorOpType["PROJECTOR_OP_CREATE"] = 1] = "PROJECTOR_OP_CREATE";
    /**
     * @generated from protobuf enum value: PROJECTOR_OP_DESTROY = 2;
     */
    ProjectorOptionReq_ProjectorOpType[ProjectorOptionReq_ProjectorOpType["PROJECTOR_OP_DESTROY"] = 2] = "PROJECTOR_OP_DESTROY";
})(ProjectorOptionReq_ProjectorOpType = exports.ProjectorOptionReq_ProjectorOpType || (exports.ProjectorOptionReq_ProjectorOpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProjectorOptionRsp.CmdId
 */
var ProjectorOptionRsp_CmdId;
(function (ProjectorOptionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProjectorOptionRsp_CmdId[ProjectorOptionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 895;
     */
    ProjectorOptionRsp_CmdId[ProjectorOptionRsp_CmdId["CMD_ID"] = 895] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProjectorOptionRsp_CmdId[ProjectorOptionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProjectorOptionRsp_CmdId[ProjectorOptionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ProjectorOptionRsp_CmdId = exports.ProjectorOptionRsp_CmdId || (exports.ProjectorOptionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LiveEndNotify.CmdId
 */
var LiveEndNotify_CmdId;
(function (LiveEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LiveEndNotify_CmdId[LiveEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 806;
     */
    LiveEndNotify_CmdId[LiveEndNotify_CmdId["CMD_ID"] = 806] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LiveEndNotify_CmdId[LiveEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LiveEndNotify_CmdId[LiveEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LiveEndNotify_CmdId = exports.LiveEndNotify_CmdId || (exports.LiveEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.VehicleStaminaNotify.CmdId
 */
var VehicleStaminaNotify_CmdId;
(function (VehicleStaminaNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    VehicleStaminaNotify_CmdId[VehicleStaminaNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 834;
     */
    VehicleStaminaNotify_CmdId[VehicleStaminaNotify_CmdId["CMD_ID"] = 834] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    VehicleStaminaNotify_CmdId[VehicleStaminaNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    VehicleStaminaNotify_CmdId[VehicleStaminaNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(VehicleStaminaNotify_CmdId = exports.VehicleStaminaNotify_CmdId || (exports.VehicleStaminaNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetCustomTreeInfoNotify.CmdId
 */
var GadgetCustomTreeInfoNotify_CmdId;
(function (GadgetCustomTreeInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetCustomTreeInfoNotify_CmdId[GadgetCustomTreeInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 850;
     */
    GadgetCustomTreeInfoNotify_CmdId[GadgetCustomTreeInfoNotify_CmdId["CMD_ID"] = 850] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetCustomTreeInfoNotify_CmdId[GadgetCustomTreeInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetCustomTreeInfoNotify_CmdId[GadgetCustomTreeInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetCustomTreeInfoNotify_CmdId = exports.GadgetCustomTreeInfoNotify_CmdId || (exports.GadgetCustomTreeInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetChangeLevelTagReq.CmdId
 */
var GadgetChangeLevelTagReq_CmdId;
(function (GadgetChangeLevelTagReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChangeLevelTagReq_CmdId[GadgetChangeLevelTagReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 843;
     */
    GadgetChangeLevelTagReq_CmdId[GadgetChangeLevelTagReq_CmdId["CMD_ID"] = 843] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChangeLevelTagReq_CmdId[GadgetChangeLevelTagReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetChangeLevelTagReq_CmdId[GadgetChangeLevelTagReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetChangeLevelTagReq_CmdId[GadgetChangeLevelTagReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GadgetChangeLevelTagReq_CmdId = exports.GadgetChangeLevelTagReq_CmdId || (exports.GadgetChangeLevelTagReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GadgetChangeLevelTagRsp.CmdId
 */
var GadgetChangeLevelTagRsp_CmdId;
(function (GadgetChangeLevelTagRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChangeLevelTagRsp_CmdId[GadgetChangeLevelTagRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 874;
     */
    GadgetChangeLevelTagRsp_CmdId[GadgetChangeLevelTagRsp_CmdId["CMD_ID"] = 874] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GadgetChangeLevelTagRsp_CmdId[GadgetChangeLevelTagRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GadgetChangeLevelTagRsp_CmdId[GadgetChangeLevelTagRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GadgetChangeLevelTagRsp_CmdId = exports.GadgetChangeLevelTagRsp_CmdId || (exports.GadgetChangeLevelTagRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.NightCrowGadgetObservationMatchReq.CmdId
 */
var NightCrowGadgetObservationMatchReq_CmdId;
(function (NightCrowGadgetObservationMatchReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NightCrowGadgetObservationMatchReq_CmdId[NightCrowGadgetObservationMatchReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 876;
     */
    NightCrowGadgetObservationMatchReq_CmdId[NightCrowGadgetObservationMatchReq_CmdId["CMD_ID"] = 876] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NightCrowGadgetObservationMatchReq_CmdId[NightCrowGadgetObservationMatchReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NightCrowGadgetObservationMatchReq_CmdId[NightCrowGadgetObservationMatchReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NightCrowGadgetObservationMatchReq_CmdId[NightCrowGadgetObservationMatchReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(NightCrowGadgetObservationMatchReq_CmdId = exports.NightCrowGadgetObservationMatchReq_CmdId || (exports.NightCrowGadgetObservationMatchReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.NightCrowGadgetObservationMatchRsp.CmdId
 */
var NightCrowGadgetObservationMatchRsp_CmdId;
(function (NightCrowGadgetObservationMatchRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NightCrowGadgetObservationMatchRsp_CmdId[NightCrowGadgetObservationMatchRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 846;
     */
    NightCrowGadgetObservationMatchRsp_CmdId[NightCrowGadgetObservationMatchRsp_CmdId["CMD_ID"] = 846] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NightCrowGadgetObservationMatchRsp_CmdId[NightCrowGadgetObservationMatchRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NightCrowGadgetObservationMatchRsp_CmdId[NightCrowGadgetObservationMatchRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(NightCrowGadgetObservationMatchRsp_CmdId = exports.NightCrowGadgetObservationMatchRsp_CmdId || (exports.NightCrowGadgetObservationMatchRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DeshretObeliskChestInfoNotify.CmdId
 */
var DeshretObeliskChestInfoNotify_CmdId;
(function (DeshretObeliskChestInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeshretObeliskChestInfoNotify_CmdId[DeshretObeliskChestInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 841;
     */
    DeshretObeliskChestInfoNotify_CmdId[DeshretObeliskChestInfoNotify_CmdId["CMD_ID"] = 841] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeshretObeliskChestInfoNotify_CmdId[DeshretObeliskChestInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeshretObeliskChestInfoNotify_CmdId[DeshretObeliskChestInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DeshretObeliskChestInfoNotify_CmdId = exports.DeshretObeliskChestInfoNotify_CmdId || (exports.DeshretObeliskChestInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InteractType
 */
var InteractType;
(function (InteractType) {
    /**
     * @generated from protobuf enum value: INTERACT_NONE = 0;
     */
    InteractType[InteractType["INTERACT_NONE"] = 0] = "INTERACT_NONE";
    /**
     * @generated from protobuf enum value: INTERACT_PICK_ITEM = 1;
     */
    InteractType[InteractType["INTERACT_PICK_ITEM"] = 1] = "INTERACT_PICK_ITEM";
    /**
     * @generated from protobuf enum value: INTERACT_GATHER = 2;
     */
    InteractType[InteractType["INTERACT_GATHER"] = 2] = "INTERACT_GATHER";
    /**
     * @generated from protobuf enum value: INTERACT_OPEN_CHEST = 3;
     */
    InteractType[InteractType["INTERACT_OPEN_CHEST"] = 3] = "INTERACT_OPEN_CHEST";
    /**
     * @generated from protobuf enum value: INTERACT_OPEN_STATUE = 4;
     */
    InteractType[InteractType["INTERACT_OPEN_STATUE"] = 4] = "INTERACT_OPEN_STATUE";
    /**
     * @generated from protobuf enum value: INTERACT_CONSUM = 5;
     */
    InteractType[InteractType["INTERACT_CONSUM"] = 5] = "INTERACT_CONSUM";
    /**
     * @generated from protobuf enum value: INTERACT_MP_PLAY_REWARD = 6;
     */
    InteractType[InteractType["INTERACT_MP_PLAY_REWARD"] = 6] = "INTERACT_MP_PLAY_REWARD";
    /**
     * @generated from protobuf enum value: INTERACT_VIEW = 7;
     */
    InteractType[InteractType["INTERACT_VIEW"] = 7] = "INTERACT_VIEW";
    /**
     * @generated from protobuf enum value: INTERACT_GENERAL_REWARD = 8;
     */
    InteractType[InteractType["INTERACT_GENERAL_REWARD"] = 8] = "INTERACT_GENERAL_REWARD";
    /**
     * @generated from protobuf enum value: INTERACT_MIRACLE_RING = 9;
     */
    InteractType[InteractType["INTERACT_MIRACLE_RING"] = 9] = "INTERACT_MIRACLE_RING";
    /**
     * @generated from protobuf enum value: INTERACT_FOUNDATION = 10;
     */
    InteractType[InteractType["INTERACT_FOUNDATION"] = 10] = "INTERACT_FOUNDATION";
    /**
     * @generated from protobuf enum value: INTERACT_ECHO_SHELL = 11;
     */
    InteractType[InteractType["INTERACT_ECHO_SHELL"] = 11] = "INTERACT_ECHO_SHELL";
    /**
     * @generated from protobuf enum value: INTERACT_HOME_GATHER = 12;
     */
    InteractType[InteractType["INTERACT_HOME_GATHER"] = 12] = "INTERACT_HOME_GATHER";
    /**
     * @generated from protobuf enum value: INTERACT_ENV_ANIMAL = 13;
     */
    InteractType[InteractType["INTERACT_ENV_ANIMAL"] = 13] = "INTERACT_ENV_ANIMAL";
    /**
     * @generated from protobuf enum value: INTERACT_QUEST_GADGET = 14;
     */
    InteractType[InteractType["INTERACT_QUEST_GADGET"] = 14] = "INTERACT_QUEST_GADGET";
    /**
     * @generated from protobuf enum value: INTERACT_UI_INTERACT = 15;
     */
    InteractType[InteractType["INTERACT_UI_INTERACT"] = 15] = "INTERACT_UI_INTERACT";
    /**
     * @generated from protobuf enum value: INTERACT_DESHRET_OBELISK = 16;
     */
    InteractType[InteractType["INTERACT_DESHRET_OBELISK"] = 16] = "INTERACT_DESHRET_OBELISK";
})(InteractType = exports.InteractType || (exports.InteractType = {}));
/**
 * @generated from protobuf enum com.midnights.game.InterOpType
 */
var InterOpType;
(function (InterOpType) {
    /**
     * @generated from protobuf enum value: INTER_OP_FINISH = 0;
     */
    InterOpType[InterOpType["INTER_OP_FINISH"] = 0] = "INTER_OP_FINISH";
    /**
     * @generated from protobuf enum value: INTER_OP_START = 1;
     */
    InterOpType[InterOpType["INTER_OP_START"] = 1] = "INTER_OP_START";
})(InterOpType = exports.InterOpType || (exports.InterOpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ResinCostType
 */
var ResinCostType;
(function (ResinCostType) {
    /**
     * @generated from protobuf enum value: RESIN_COST_TYPE_NONE = 0;
     */
    ResinCostType[ResinCostType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: RESIN_COST_TYPE_NORMAL = 1;
     */
    ResinCostType[ResinCostType["NORMAL"] = 1] = "NORMAL";
    /**
     * @generated from protobuf enum value: RESIN_COST_TYPE_CONDENSE = 2;
     */
    ResinCostType[ResinCostType["CONDENSE"] = 2] = "CONDENSE";
    /**
     * @generated from protobuf enum value: RESIN_COST_TYPE_REUNION_PRIVILEGE = 3;
     */
    ResinCostType[ResinCostType["REUNION_PRIVILEGE"] = 3] = "REUNION_PRIVILEGE";
    /**
     * @generated from protobuf enum value: RESIN_COST_TYPE_OP_ACTIVITY = 4;
     */
    ResinCostType[ResinCostType["OP_ACTIVITY"] = 4] = "OP_ACTIVITY";
    /**
     * @generated from protobuf enum value: RESIN_COST_TYPE_MATERIAL = 5;
     */
    ResinCostType[ResinCostType["MATERIAL"] = 5] = "MATERIAL";
})(ResinCostType = exports.ResinCostType || (exports.ResinCostType = {}));
/**
 * @generated from protobuf enum com.midnights.game.FoundationOpType
 */
var FoundationOpType;
(function (FoundationOpType) {
    /**
     * @generated from protobuf enum value: FOUNDATION_OP_NONE = 0;
     */
    FoundationOpType[FoundationOpType["FOUNDATION_OP_NONE"] = 0] = "FOUNDATION_OP_NONE";
    /**
     * @generated from protobuf enum value: FOUNDATION_OP_BUILD = 1;
     */
    FoundationOpType[FoundationOpType["FOUNDATION_OP_BUILD"] = 1] = "FOUNDATION_OP_BUILD";
    /**
     * @generated from protobuf enum value: FOUNDATION_OP_DEMOLITION = 2;
     */
    FoundationOpType[FoundationOpType["FOUNDATION_OP_DEMOLITION"] = 2] = "FOUNDATION_OP_DEMOLITION";
    /**
     * @generated from protobuf enum value: FOUNDATION_OP_REBUILD = 3;
     */
    FoundationOpType[FoundationOpType["FOUNDATION_OP_REBUILD"] = 3] = "FOUNDATION_OP_REBUILD";
    /**
     * @generated from protobuf enum value: FOUNDATION_OP_ROTATE = 4;
     */
    FoundationOpType[FoundationOpType["FOUNDATION_OP_ROTATE"] = 4] = "FOUNDATION_OP_ROTATE";
    /**
     * @generated from protobuf enum value: FOUNDATION_OP_LOCK = 5;
     */
    FoundationOpType[FoundationOpType["FOUNDATION_OP_LOCK"] = 5] = "FOUNDATION_OP_LOCK";
    /**
     * @generated from protobuf enum value: FOUNDATION_OP_UNLOCK = 6;
     */
    FoundationOpType[FoundationOpType["FOUNDATION_OP_UNLOCK"] = 6] = "FOUNDATION_OP_UNLOCK";
})(FoundationOpType = exports.FoundationOpType || (exports.FoundationOpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.VehicleInteractType
 */
var VehicleInteractType;
(function (VehicleInteractType) {
    /**
     * @generated from protobuf enum value: VEHICLE_INTERACT_NONE = 0;
     */
    VehicleInteractType[VehicleInteractType["VEHICLE_INTERACT_NONE"] = 0] = "VEHICLE_INTERACT_NONE";
    /**
     * @generated from protobuf enum value: VEHICLE_INTERACT_IN = 1;
     */
    VehicleInteractType[VehicleInteractType["VEHICLE_INTERACT_IN"] = 1] = "VEHICLE_INTERACT_IN";
    /**
     * @generated from protobuf enum value: VEHICLE_INTERACT_OUT = 2;
     */
    VehicleInteractType[VehicleInteractType["VEHICLE_INTERACT_OUT"] = 2] = "VEHICLE_INTERACT_OUT";
})(VehicleInteractType = exports.VehicleInteractType || (exports.VehicleInteractType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GadgetInteractReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetInteractReq", [
            { no: 8, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_use_condense_resin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.InterOpType", InterOpType] },
            { no: 1, name: "resin_cost_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ResinCostType", ResinCostType, "RESIN_COST_TYPE_"] },
            { no: 2, name: "ui_interact_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_id */ 8:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional bool is_use_condense_resin */ 15:
                    message.isUseCondenseResin = reader.bool();
                    break;
                case /* optional com.midnights.game.InterOpType op_type */ 5:
                    message.opType = reader.int32();
                    break;
                case /* optional com.midnights.game.ResinCostType resin_cost_type */ 1:
                    message.resinCostType = reader.int32();
                    break;
                case /* optional uint32 ui_interact_id */ 2:
                    message.uiInteractId = reader.uint32();
                    break;
                case /* optional uint32 gadget_entity_id */ 4:
                    message.gadgetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_id = 8; */
        if (message.gadgetId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* optional bool is_use_condense_resin = 15; */
        if (message.isUseCondenseResin !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isUseCondenseResin);
        /* optional com.midnights.game.InterOpType op_type = 5; */
        if (message.opType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.opType);
        /* optional com.midnights.game.ResinCostType resin_cost_type = 1; */
        if (message.resinCostType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.resinCostType);
        /* optional uint32 ui_interact_id = 2; */
        if (message.uiInteractId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.uiInteractId);
        /* optional uint32 gadget_entity_id = 4; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetInteractReq
 */
exports.GadgetInteractReq = new GadgetInteractReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetInteractRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetInteractRsp", [
            { no: 10, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "interact_type", kind: "enum", opt: true, T: () => ["com.midnights.game.InteractType", InteractType] },
            { no: 3, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.InterOpType", InterOpType] },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_entity_id */ 10:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.InteractType interact_type */ 2:
                    message.interactType = reader.int32();
                    break;
                case /* optional com.midnights.game.InterOpType op_type */ 3:
                    message.opType = reader.int32();
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 gadget_id */ 15:
                    message.gadgetId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_entity_id = 10; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional com.midnights.game.InteractType interact_type = 2; */
        if (message.interactType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.interactType);
        /* optional com.midnights.game.InterOpType op_type = 3; */
        if (message.opType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.opType);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 gadget_id = 15; */
        if (message.gadgetId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetInteractRsp
 */
exports.GadgetInteractRsp = new GadgetInteractRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetStateNotify", [
            { no: 5, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_enable_interact", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_entity_id */ 5:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional uint32 gadget_state */ 3:
                    message.gadgetState = reader.uint32();
                    break;
                case /* optional bool is_enable_interact */ 11:
                    message.isEnableInteract = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_entity_id = 5; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional uint32 gadget_state = 3; */
        if (message.gadgetState !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.gadgetState);
        /* optional bool is_enable_interact = 11; */
        if (message.isEnableInteract !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isEnableInteract);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetStateNotify
 */
exports.GadgetStateNotify = new GadgetStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorktopOptionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorktopOptionNotify", [
            { no: 11, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "option_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { optionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_entity_id */ 11:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* repeated uint32 option_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.optionList.push(reader.uint32());
                    else
                        message.optionList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_entity_id = 11; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* repeated uint32 option_list = 8; */
        if (message.optionList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.optionList.length; i++)
                writer.uint32(message.optionList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorktopOptionNotify
 */
exports.WorktopOptionNotify = new WorktopOptionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SelectWorktopOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SelectWorktopOptionReq", [
            { no: 12, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "option_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_entity_id */ 12:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional uint32 option_id */ 11:
                    message.optionId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_entity_id = 12; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional uint32 option_id = 11; */
        if (message.optionId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.optionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SelectWorktopOptionReq
 */
exports.SelectWorktopOptionReq = new SelectWorktopOptionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SelectWorktopOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SelectWorktopOptionRsp", [
            { no: 13, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "option_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 gadget_entity_id */ 13:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional uint32 option_id */ 7:
                    message.optionId = reader.uint32();
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
        /* optional uint32 gadget_entity_id = 13; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional uint32 option_id = 7; */
        if (message.optionId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.optionId);
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
 * @generated MessageType for protobuf message com.midnights.game.SelectWorktopOptionRsp
 */
exports.SelectWorktopOptionRsp = new SelectWorktopOptionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BossChestActivateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BossChestActivateNotify", [
            { no: 1, name: "qualify_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { qualifyUidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 qualify_uid_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 qualify_uid_list = 1; */
        if (message.qualifyUidList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.qualifyUidList.length; i++)
                writer.uint32(message.qualifyUidList[i]);
            writer.join();
        }
        /* optional uint32 entity_id = 12; */
        if (message.entityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BossChestActivateNotify
 */
exports.BossChestActivateNotify = new BossChestActivateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlossomChestInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BlossomChestInfoNotify", [
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "blossom_chest_info", kind: "message", T: () => define_8.BlossomChestInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 9:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.BlossomChestInfo blossom_chest_info */ 3:
                    message.blossomChestInfo = define_8.BlossomChestInfo.internalBinaryRead(reader, reader.uint32(), options, message.blossomChestInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 9; */
        if (message.entityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.BlossomChestInfo blossom_chest_info = 3; */
        if (message.blossomChestInfo)
            define_8.BlossomChestInfo.internalBinaryWrite(message.blossomChestInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BlossomChestInfoNotify
 */
exports.BlossomChestInfoNotify = new BlossomChestInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetPlayStartNotify", [
            { no: 14, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 start_time */ 14:
                    message.startTime = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 8:
                    message.playType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 start_time = 14; */
        if (message.startTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.startTime);
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 play_type = 8; */
        if (message.playType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.playType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetPlayStartNotify
 */
exports.GadgetPlayStartNotify = new GadgetPlayStartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayUidInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetPlayUidInfo", [
            { no: 2, name: "profile_picture", kind: "message", T: () => define_7.ProfilePicture },
            { no: 6, name: "battle_watcher_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "icon", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 2:
                    message.profilePicture = define_7.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* optional uint32 battle_watcher_id */ 6:
                    message.battleWatcherId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 7:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint32 icon */ 14:
                    message.icon = reader.uint32();
                    break;
                case /* optional uint32 score */ 4:
                    message.score = reader.uint32();
                    break;
                case /* optional string nickname */ 3:
                    message.nickname = reader.string();
                    break;
                case /* optional string online_id */ 8:
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
        /* optional com.midnights.game.ProfilePicture profile_picture = 2; */
        if (message.profilePicture)
            define_7.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 battle_watcher_id = 6; */
        if (message.battleWatcherId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.battleWatcherId);
        /* optional uint32 uid = 7; */
        if (message.uid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint32 icon = 14; */
        if (message.icon !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.icon);
        /* optional uint32 score = 4; */
        if (message.score !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.score);
        /* optional string nickname = 3; */
        if (message.nickname !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* optional string online_id = 8; */
        if (message.onlineId !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetPlayUidInfo
 */
exports.GadgetPlayUidInfo = new GadgetPlayUidInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayStopNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetPlayStopNotify", [
            { no: 14, name: "is_win", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "uid_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GadgetPlayUidInfo },
            { no: 5, name: "score", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uidInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_win */ 14:
                    message.isWin = reader.bool();
                    break;
                case /* optional uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 4:
                    message.playType = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GadgetPlayUidInfo uid_info_list */ 8:
                    message.uidInfoList.push(exports.GadgetPlayUidInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 score */ 5:
                    message.score = reader.uint32();
                    break;
                case /* optional uint32 cost_time */ 6:
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
        /* optional bool is_win = 14; */
        if (message.isWin !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isWin);
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 play_type = 4; */
        if (message.playType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.playType);
        /* repeated com.midnights.game.GadgetPlayUidInfo uid_info_list = 8; */
        for (let i = 0; i < message.uidInfoList.length; i++)
            exports.GadgetPlayUidInfo.internalBinaryWrite(message.uidInfoList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 score = 5; */
        if (message.score !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.score);
        /* optional uint32 cost_time = 6; */
        if (message.costTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.costTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetPlayStopNotify
 */
exports.GadgetPlayStopNotify = new GadgetPlayStopNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetPlayDataNotify", [
            { no: 12, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_type */ 12:
                    message.playType = reader.uint32();
                    break;
                case /* optional uint32 progress */ 9:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 play_type = 12; */
        if (message.playType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.playType);
        /* optional uint32 progress = 9; */
        if (message.progress !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional uint32 entity_id = 6; */
        if (message.entityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetPlayDataNotify
 */
exports.GadgetPlayDataNotify = new GadgetPlayDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayUidOpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetPlayUidOpNotify", [
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "param_str", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "op", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uidList: [], paramList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 uid_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* optional uint32 play_type */ 6:
                    message.playType = reader.uint32();
                    break;
                case /* optional string param_str */ 1:
                    message.paramStr = reader.string();
                    break;
                case /* optional uint32 op */ 7:
                    message.op = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 4:
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
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entityId);
        /* repeated uint32 uid_list = 2; */
        if (message.uidList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* optional uint32 play_type = 6; */
        if (message.playType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.playType);
        /* optional string param_str = 1; */
        if (message.paramStr !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.paramStr);
        /* optional uint32 op = 7; */
        if (message.op !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.op);
        /* repeated uint32 param_list = 4; */
        if (message.paramList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
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
 * @generated MessageType for protobuf message com.midnights.game.GadgetPlayUidOpNotify
 */
exports.GadgetPlayUidOpNotify = new GadgetPlayUidOpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetGeneralRewardInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetGeneralRewardInfoNotify", [
            { no: 13, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "general_reward_info", kind: "message", T: () => define_6.GadgetGeneralRewardInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GadgetGeneralRewardInfo general_reward_info */ 9:
                    message.generalRewardInfo = define_6.GadgetGeneralRewardInfo.internalBinaryRead(reader, reader.uint32(), options, message.generalRewardInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 13; */
        if (message.entityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.GadgetGeneralRewardInfo general_reward_info = 9; */
        if (message.generalRewardInfo)
            define_6.GadgetGeneralRewardInfo.internalBinaryWrite(message.generalRewardInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetGeneralRewardInfoNotify
 */
exports.GadgetGeneralRewardInfoNotify = new GadgetGeneralRewardInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetAutoPickDropInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetAutoPickDropInfoNotify", [
            { no: 11, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_5.Item }
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
                case /* repeated com.midnights.game.Item item_list */ 11:
                    message.itemList.push(define_5.Item.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.Item item_list = 11; */
        for (let i = 0; i < message.itemList.length; i++)
            define_5.Item.internalBinaryWrite(message.itemList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetAutoPickDropInfoNotify
 */
exports.GadgetAutoPickDropInfoNotify = new GadgetAutoPickDropInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateAbilityCreatedMovingPlatformNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdateAbilityCreatedMovingPlatformNotify", [
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.UpdateAbilityCreatedMovingPlatformNotify.OpType", UpdateAbilityCreatedMovingPlatformNotify_OpType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.UpdateAbilityCreatedMovingPlatformNotify.OpType op_type */ 3:
                    message.opType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.UpdateAbilityCreatedMovingPlatformNotify.OpType op_type = 3; */
        if (message.opType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdateAbilityCreatedMovingPlatformNotify
 */
exports.UpdateAbilityCreatedMovingPlatformNotify = new UpdateAbilityCreatedMovingPlatformNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FoundationReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FoundationReq", [
            { no: 14, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "point_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "building_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.FoundationOpType", FoundationOpType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_entity_id */ 14:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional uint32 point_config_id */ 12:
                    message.pointConfigId = reader.uint32();
                    break;
                case /* optional uint32 building_id */ 13:
                    message.buildingId = reader.uint32();
                    break;
                case /* optional com.midnights.game.FoundationOpType op_type */ 10:
                    message.opType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_entity_id = 14; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional uint32 point_config_id = 12; */
        if (message.pointConfigId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.pointConfigId);
        /* optional uint32 building_id = 13; */
        if (message.buildingId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.buildingId);
        /* optional com.midnights.game.FoundationOpType op_type = 10; */
        if (message.opType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FoundationReq
 */
exports.FoundationReq = new FoundationReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FoundationRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FoundationRsp", [
            { no: 13, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.FoundationOpType", FoundationOpType] },
            { no: 10, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "building_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "point_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional com.midnights.game.FoundationOpType op_type */ 13:
                    message.opType = reader.int32();
                    break;
                case /* optional uint32 gadget_entity_id */ 10:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional uint32 building_id */ 11:
                    message.buildingId = reader.uint32();
                    break;
                case /* optional uint32 point_config_id */ 12:
                    message.pointConfigId = reader.uint32();
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
        /* optional com.midnights.game.FoundationOpType op_type = 13; */
        if (message.opType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.opType);
        /* optional uint32 gadget_entity_id = 10; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional uint32 building_id = 11; */
        if (message.buildingId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.buildingId);
        /* optional uint32 point_config_id = 12; */
        if (message.pointConfigId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.pointConfigId);
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
 * @generated MessageType for protobuf message com.midnights.game.FoundationRsp
 */
exports.FoundationRsp = new FoundationRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FoundationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FoundationNotify", [
            { no: 7, name: "info", kind: "message", T: () => define_4.FoundationInfo },
            { no: 9, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FoundationInfo info */ 7:
                    message.info = define_4.FoundationInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
                    break;
                case /* optional uint32 gadget_entity_id */ 9:
                    message.gadgetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FoundationInfo info = 7; */
        if (message.info)
            define_4.FoundationInfo.internalBinaryWrite(message.info, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 gadget_entity_id = 9; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FoundationNotify
 */
exports.FoundationNotify = new FoundationNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetTalkChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetTalkChangeNotify", [
            { no: 5, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cur_gadget_talk_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 gadget_entity_id */ 5:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional uint32 cur_gadget_talk_state */ 15:
                    message.curGadgetTalkState = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_entity_id = 5; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional uint32 cur_gadget_talk_state = 15; */
        if (message.curGadgetTalkState !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.curGadgetTalkState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetTalkChangeNotify
 */
exports.GadgetTalkChangeNotify = new GadgetTalkChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetChainLevelUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetChainLevelUpdateNotify", [
            { no: 12, name: "gadget_chain_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { gadgetChainLevelMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> gadget_chain_level_map */ 12:
                    this.binaryReadMap12(message.gadgetChainLevelMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GadgetChainLevelUpdateNotify.gadget_chain_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> gadget_chain_level_map = 12; */
        for (let k of Object.keys(message.gadgetChainLevelMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.gadgetChainLevelMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetChainLevelUpdateNotify
 */
exports.GadgetChainLevelUpdateNotify = new GadgetChainLevelUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetChainLevelChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetChainLevelChangeNotify", [
            { no: 2, name: "gadget_chain_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { gadgetChainLevelMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> gadget_chain_level_map */ 2:
                    this.binaryReadMap2(message.gadgetChainLevelMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GadgetChainLevelChangeNotify.gadget_chain_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> gadget_chain_level_map = 2; */
        for (let k of Object.keys(message.gadgetChainLevelMap))
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.gadgetChainLevelMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetChainLevelChangeNotify
 */
exports.GadgetChainLevelChangeNotify = new GadgetChainLevelChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VehicleInteractReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VehicleInteractReq", [
            { no: 8, name: "interact_type", kind: "enum", opt: true, T: () => ["com.midnights.game.VehicleInteractType", VehicleInteractType] },
            { no: 12, name: "pos", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.VehicleInteractType interact_type */ 8:
                    message.interactType = reader.int32();
                    break;
                case /* optional uint32 pos */ 12:
                    message.pos = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.VehicleInteractType interact_type = 8; */
        if (message.interactType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.interactType);
        /* optional uint32 pos = 12; */
        if (message.pos !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.pos);
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VehicleInteractReq
 */
exports.VehicleInteractReq = new VehicleInteractReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VehicleInteractRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VehicleInteractRsp", [
            { no: 15, name: "interact_type", kind: "enum", opt: true, T: () => ["com.midnights.game.VehicleInteractType", VehicleInteractType] },
            { no: 3, name: "member", kind: "message", T: () => define_3.VehicleMember },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional com.midnights.game.VehicleInteractType interact_type */ 15:
                    message.interactType = reader.int32();
                    break;
                case /* optional com.midnights.game.VehicleMember member */ 3:
                    message.member = define_3.VehicleMember.internalBinaryRead(reader, reader.uint32(), options, message.member);
                    break;
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
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
        /* optional com.midnights.game.VehicleInteractType interact_type = 15; */
        if (message.interactType !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.interactType);
        /* optional com.midnights.game.VehicleMember member = 3; */
        if (message.member)
            define_3.VehicleMember.internalBinaryWrite(message.member, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
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
 * @generated MessageType for protobuf message com.midnights.game.VehicleInteractRsp
 */
exports.VehicleInteractRsp = new VehicleInteractRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateVehicleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateVehicleReq", [
            { no: 11, name: "pos", kind: "message", T: () => define_2.Vector },
            { no: 2, name: "vehicle_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "scene_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "rot", kind: "message", T: () => define_2.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 11:
                    message.pos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 vehicle_id */ 2:
                    message.vehicleId = reader.uint32();
                    break;
                case /* optional uint32 scene_point_id */ 7:
                    message.scenePointId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector rot */ 5:
                    message.rot = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector pos = 11; */
        if (message.pos)
            define_2.Vector.internalBinaryWrite(message.pos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 vehicle_id = 2; */
        if (message.vehicleId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.vehicleId);
        /* optional uint32 scene_point_id = 7; */
        if (message.scenePointId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.scenePointId);
        /* optional com.midnights.game.Vector rot = 5; */
        if (message.rot)
            define_2.Vector.internalBinaryWrite(message.rot, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CreateVehicleReq
 */
exports.CreateVehicleReq = new CreateVehicleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateVehicleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateVehicleRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "vehicle_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 vehicle_id */ 9:
                    message.vehicleId = reader.uint32();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 vehicle_id = 9; */
        if (message.vehicleId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.vehicleId);
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CreateVehicleRsp
 */
exports.CreateVehicleRsp = new CreateVehicleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RequestLiveInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RequestLiveInfoReq", [
            { no: 6, name: "live_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 live_id */ 6:
                    message.liveId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 live_id = 6; */
        if (message.liveId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.liveId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RequestLiveInfoReq
 */
exports.RequestLiveInfoReq = new RequestLiveInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RequestLiveInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RequestLiveInfoRsp", [
            { no: 14, name: "spare_live_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "live_url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "live_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string spare_live_url */ 14:
                    message.spareLiveUrl = reader.string();
                    break;
                case /* optional int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* optional string live_url */ 12:
                    message.liveUrl = reader.string();
                    break;
                case /* optional uint32 live_id */ 2:
                    message.liveId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string spare_live_url = 14; */
        if (message.spareLiveUrl !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.spareLiveUrl);
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional string live_url = 12; */
        if (message.liveUrl !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.liveUrl);
        /* optional uint32 live_id = 2; */
        if (message.liveId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.liveId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RequestLiveInfoRsp
 */
exports.RequestLiveInfoRsp = new RequestLiveInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LiveStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LiveStartNotify", [
            { no: 2, name: "live_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 live_id */ 2:
                    message.liveId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 live_id = 2; */
        if (message.liveId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.liveId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LiveStartNotify
 */
exports.LiveStartNotify = new LiveStartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProjectorOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProjectorOptionReq", [
            { no: 7, name: "op_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 op_type */ 7:
                    message.opType = reader.uint32();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 op_type = 7; */
        if (message.opType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.opType);
        /* optional uint32 entity_id = 10; */
        if (message.entityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProjectorOptionReq
 */
exports.ProjectorOptionReq = new ProjectorOptionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProjectorOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProjectorOptionRsp", [
            { no: 10, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "op_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 op_type */ 13:
                    message.opType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 10; */
        if (message.entityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 op_type = 13; */
        if (message.opType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProjectorOptionRsp
 */
exports.ProjectorOptionRsp = new ProjectorOptionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LiveEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LiveEndNotify", [
            { no: 5, name: "live_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 live_id */ 5:
                    message.liveId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 live_id = 5; */
        if (message.liveId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.liveId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LiveEndNotify
 */
exports.LiveEndNotify = new LiveEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VehicleStaminaNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.VehicleStaminaNotify", [
            { no: 6, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_stamina", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional float cur_stamina */ 14:
                    message.curStamina = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional float cur_stamina = 14; */
        if (message.curStamina !== undefined)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.curStamina);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.VehicleStaminaNotify
 */
exports.VehicleStaminaNotify = new VehicleStaminaNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetCustomTreeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetCustomTreeInfoNotify", [
            { no: 5, name: "custom_gadget_tree_info", kind: "message", T: () => define_1.CustomGadgetTreeInfo },
            { no: 12, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CustomGadgetTreeInfo custom_gadget_tree_info */ 5:
                    message.customGadgetTreeInfo = define_1.CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.customGadgetTreeInfo);
                    break;
                case /* optional uint32 gadget_entity_id */ 12:
                    message.gadgetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.CustomGadgetTreeInfo custom_gadget_tree_info = 5; */
        if (message.customGadgetTreeInfo)
            define_1.CustomGadgetTreeInfo.internalBinaryWrite(message.customGadgetTreeInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 gadget_entity_id = 12; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetCustomTreeInfoNotify
 */
exports.GadgetCustomTreeInfoNotify = new GadgetCustomTreeInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetChangeLevelTagReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetChangeLevelTagReq", [
            { no: 14, name: "level_tag_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "combination_info", kind: "message", T: () => define_1.CustomGadgetTreeInfo },
            { no: 10, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level_tag_id */ 14:
                    message.levelTagId = reader.uint32();
                    break;
                case /* optional com.midnights.game.CustomGadgetTreeInfo combination_info */ 11:
                    message.combinationInfo = define_1.CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.combinationInfo);
                    break;
                case /* optional uint32 gadget_entity_id */ 10:
                    message.gadgetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level_tag_id = 14; */
        if (message.levelTagId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.levelTagId);
        /* optional com.midnights.game.CustomGadgetTreeInfo combination_info = 11; */
        if (message.combinationInfo)
            define_1.CustomGadgetTreeInfo.internalBinaryWrite(message.combinationInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 gadget_entity_id = 10; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GadgetChangeLevelTagReq
 */
exports.GadgetChangeLevelTagReq = new GadgetChangeLevelTagReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GadgetChangeLevelTagRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GadgetChangeLevelTagRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.GadgetChangeLevelTagRsp
 */
exports.GadgetChangeLevelTagRsp = new GadgetChangeLevelTagRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NightCrowGadgetObservationMatchReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NightCrowGadgetObservationMatchReq", [
            { no: 3, name: "target_gadget_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_gadget_state */ 3:
                    message.targetGadgetState = reader.uint32();
                    break;
                case /* optional uint32 gadget_entity_id */ 8:
                    message.gadgetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_gadget_state = 3; */
        if (message.targetGadgetState !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.targetGadgetState);
        /* optional uint32 gadget_entity_id = 8; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NightCrowGadgetObservationMatchReq
 */
exports.NightCrowGadgetObservationMatchReq = new NightCrowGadgetObservationMatchReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NightCrowGadgetObservationMatchRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NightCrowGadgetObservationMatchRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.NightCrowGadgetObservationMatchRsp
 */
exports.NightCrowGadgetObservationMatchRsp = new NightCrowGadgetObservationMatchRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeshretObeliskChestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeshretObeliskChestInfo", [
            { no: 5, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pos", kind: "message", T: () => define_2.Vector },
            { no: 7, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.Vector pos */ 9:
                    message.pos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 group_id */ 7:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 5; */
        if (message.sceneId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional com.midnights.game.Vector pos = 9; */
        if (message.pos)
            define_2.Vector.internalBinaryWrite(message.pos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 group_id = 7; */
        if (message.groupId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 config_id = 3; */
        if (message.configId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeshretObeliskChestInfo
 */
exports.DeshretObeliskChestInfo = new DeshretObeliskChestInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeshretObeliskChestInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeshretObeliskChestInfoNotify", [
            { no: 14, name: "chest_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.DeshretObeliskChestInfo }
        ]);
    }
    create(value) {
        const message = { chestInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.DeshretObeliskChestInfo chest_info_list */ 14:
                    message.chestInfoList.push(exports.DeshretObeliskChestInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.DeshretObeliskChestInfo chest_info_list = 14; */
        for (let i = 0; i < message.chestInfoList.length; i++)
            exports.DeshretObeliskChestInfo.internalBinaryWrite(message.chestInfoList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeshretObeliskChestInfoNotify
 */
exports.DeshretObeliskChestInfoNotify = new DeshretObeliskChestInfoNotify$Type();
