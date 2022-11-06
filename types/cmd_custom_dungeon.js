"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonSocial = exports.CustomDungeonAbstract = exports.SaveCustomDungeonRoomRsp = exports.SaveCustomDungeonRoomReq = exports.EnterCustomDungeonRsp = exports.EnterCustomDungeonReq = exports.CustomDungeon = exports.CustomDungeonSetting = exports.CustomDungeonRoom = exports.CustomDungeonBlock = exports.TryCustomDungeonType = exports.CustomDungeonBanType = exports.CustomDungeonState = exports.EnterCustomDungeonType = exports.OutStuckCustomDungeonRsp_CmdId = exports.OutStuckCustomDungeonReq_CmdId = exports.CustomDungeonBattleRecordNotify_CmdId = exports.ReplayCustomDungeonRsp_CmdId = exports.ReplayCustomDungeonReq_CmdId = exports.CustomDungeonOfficialNotify_CmdId = exports.BackPlayCustomDungeonOfficialRsp_CmdId = exports.BackPlayCustomDungeonOfficialReq_CmdId = exports.CustomDungeonRecoverNotify_CmdId = exports.GetCustomDungeonRsp_CmdId = exports.GetCustomDungeonReq_CmdId = exports.LikeCustomDungeonRsp_CmdId = exports.LikeCustomDungeonReq_CmdId = exports.StoreCustomDungeonRsp_CmdId = exports.StoreCustomDungeonReq_CmdId = exports.SearchCustomDungeonRsp_CmdId = exports.SearchCustomDungeonReq_CmdId = exports.GetStoreCustomDungeonRsp_CmdId = exports.GetStoreCustomDungeonReq_CmdId = exports.GetRecommendCustomDungeonRsp_CmdId = exports.GetRecommendCustomDungeonReq_CmdId = exports.CustomDungeonUpdateNotify_CmdId = exports.ExitCustomDungeonTryRsp_CmdId = exports.ExitCustomDungeonTryReq_CmdId = exports.PublishCustomDungeonRsp_CmdId = exports.PublishCustomDungeonReq_CmdId = exports.TryCustomDungeonRsp_CmdId = exports.TryCustomDungeonReq_CmdId = exports.RemoveCustomDungeonRsp_CmdId = exports.RemoveCustomDungeonReq_CmdId = exports.ChangeCustomDungeonRoomRsp_CmdId = exports.ChangeCustomDungeonRoomReq_CmdId = exports.SaveCustomDungeonRoomRsp_CmdId = exports.SaveCustomDungeonRoomReq_CmdId = exports.EnterCustomDungeonRsp_CmdId = exports.EnterCustomDungeonReq_CmdId = void 0;
exports.OutStuckCustomDungeonRsp = exports.OutStuckCustomDungeonReq = exports.CustomDungeonBattleRecordNotify = exports.ReplayCustomDungeonRsp = exports.ReplayCustomDungeonReq = exports.CustomDungeonVerify = exports.CustomDungeonOfficialNotify = exports.BackPlayCustomDungeonOfficialRsp = exports.BackPlayCustomDungeonOfficialReq = exports.CustomDungeonRecoverNotify = exports.GetCustomDungeonRsp = exports.GetCustomDungeonReq = exports.LikeCustomDungeonRsp = exports.LikeCustomDungeonReq = exports.StoreCustomDungeonRsp = exports.StoreCustomDungeonReq = exports.SearchCustomDungeonRsp = exports.SearchCustomDungeonReq = exports.GetStoreCustomDungeonRsp = exports.GetStoreCustomDungeonReq = exports.GetRecommendCustomDungeonRsp = exports.GetRecommendCustomDungeonReq = exports.CustomDungeonUpdateNotify = exports.ExitCustomDungeonTryRsp = exports.ExitCustomDungeonTryReq = exports.PublishCustomDungeonRsp = exports.PublishCustomDungeonReq = exports.TryCustomDungeonRsp = exports.TryCustomDungeonReq = exports.RemoveCustomDungeonRsp = exports.RemoveCustomDungeonReq = exports.ChangeCustomDungeonRoomRsp = exports.ChangeCustomDungeonRoomReq = exports.CustomDungeonBanInfo = exports.OtherCustomDungeonBrief = exports.CustomDungeonBrief = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const cmd_social_1 = require("./cmd_social");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.EnterCustomDungeonReq.CmdId
 */
var EnterCustomDungeonReq_CmdId;
(function (EnterCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterCustomDungeonReq_CmdId[EnterCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6226;
     */
    EnterCustomDungeonReq_CmdId[EnterCustomDungeonReq_CmdId["CMD_ID"] = 6226] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterCustomDungeonReq_CmdId[EnterCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterCustomDungeonReq_CmdId[EnterCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterCustomDungeonReq_CmdId[EnterCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterCustomDungeonReq_CmdId = exports.EnterCustomDungeonReq_CmdId || (exports.EnterCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterCustomDungeonRsp.CmdId
 */
var EnterCustomDungeonRsp_CmdId;
(function (EnterCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterCustomDungeonRsp_CmdId[EnterCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6218;
     */
    EnterCustomDungeonRsp_CmdId[EnterCustomDungeonRsp_CmdId["CMD_ID"] = 6218] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterCustomDungeonRsp_CmdId[EnterCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterCustomDungeonRsp_CmdId[EnterCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EnterCustomDungeonRsp_CmdId = exports.EnterCustomDungeonRsp_CmdId || (exports.EnterCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveCustomDungeonRoomReq.CmdId
 */
var SaveCustomDungeonRoomReq_CmdId;
(function (SaveCustomDungeonRoomReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCustomDungeonRoomReq_CmdId[SaveCustomDungeonRoomReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6225;
     */
    SaveCustomDungeonRoomReq_CmdId[SaveCustomDungeonRoomReq_CmdId["CMD_ID"] = 6225] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCustomDungeonRoomReq_CmdId[SaveCustomDungeonRoomReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveCustomDungeonRoomReq_CmdId[SaveCustomDungeonRoomReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveCustomDungeonRoomReq_CmdId[SaveCustomDungeonRoomReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SaveCustomDungeonRoomReq_CmdId = exports.SaveCustomDungeonRoomReq_CmdId || (exports.SaveCustomDungeonRoomReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SaveCustomDungeonRoomRsp.CmdId
 */
var SaveCustomDungeonRoomRsp_CmdId;
(function (SaveCustomDungeonRoomRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCustomDungeonRoomRsp_CmdId[SaveCustomDungeonRoomRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6207;
     */
    SaveCustomDungeonRoomRsp_CmdId[SaveCustomDungeonRoomRsp_CmdId["CMD_ID"] = 6207] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SaveCustomDungeonRoomRsp_CmdId[SaveCustomDungeonRoomRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SaveCustomDungeonRoomRsp_CmdId[SaveCustomDungeonRoomRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SaveCustomDungeonRoomRsp_CmdId = exports.SaveCustomDungeonRoomRsp_CmdId || (exports.SaveCustomDungeonRoomRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeCustomDungeonRoomReq.CmdId
 */
var ChangeCustomDungeonRoomReq_CmdId;
(function (ChangeCustomDungeonRoomReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeCustomDungeonRoomReq_CmdId[ChangeCustomDungeonRoomReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6222;
     */
    ChangeCustomDungeonRoomReq_CmdId[ChangeCustomDungeonRoomReq_CmdId["CMD_ID"] = 6222] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeCustomDungeonRoomReq_CmdId[ChangeCustomDungeonRoomReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeCustomDungeonRoomReq_CmdId[ChangeCustomDungeonRoomReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeCustomDungeonRoomReq_CmdId[ChangeCustomDungeonRoomReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeCustomDungeonRoomReq_CmdId = exports.ChangeCustomDungeonRoomReq_CmdId || (exports.ChangeCustomDungeonRoomReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeCustomDungeonRoomRsp.CmdId
 */
var ChangeCustomDungeonRoomRsp_CmdId;
(function (ChangeCustomDungeonRoomRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeCustomDungeonRoomRsp_CmdId[ChangeCustomDungeonRoomRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6244;
     */
    ChangeCustomDungeonRoomRsp_CmdId[ChangeCustomDungeonRoomRsp_CmdId["CMD_ID"] = 6244] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeCustomDungeonRoomRsp_CmdId[ChangeCustomDungeonRoomRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeCustomDungeonRoomRsp_CmdId[ChangeCustomDungeonRoomRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChangeCustomDungeonRoomRsp_CmdId = exports.ChangeCustomDungeonRoomRsp_CmdId || (exports.ChangeCustomDungeonRoomRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RemoveCustomDungeonReq.CmdId
 */
var RemoveCustomDungeonReq_CmdId;
(function (RemoveCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveCustomDungeonReq_CmdId[RemoveCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6249;
     */
    RemoveCustomDungeonReq_CmdId[RemoveCustomDungeonReq_CmdId["CMD_ID"] = 6249] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveCustomDungeonReq_CmdId[RemoveCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemoveCustomDungeonReq_CmdId[RemoveCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemoveCustomDungeonReq_CmdId[RemoveCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RemoveCustomDungeonReq_CmdId = exports.RemoveCustomDungeonReq_CmdId || (exports.RemoveCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RemoveCustomDungeonRsp.CmdId
 */
var RemoveCustomDungeonRsp_CmdId;
(function (RemoveCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveCustomDungeonRsp_CmdId[RemoveCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6220;
     */
    RemoveCustomDungeonRsp_CmdId[RemoveCustomDungeonRsp_CmdId["CMD_ID"] = 6220] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveCustomDungeonRsp_CmdId[RemoveCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemoveCustomDungeonRsp_CmdId[RemoveCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RemoveCustomDungeonRsp_CmdId = exports.RemoveCustomDungeonRsp_CmdId || (exports.RemoveCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TryCustomDungeonReq.CmdId
 */
var TryCustomDungeonReq_CmdId;
(function (TryCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryCustomDungeonReq_CmdId[TryCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6245;
     */
    TryCustomDungeonReq_CmdId[TryCustomDungeonReq_CmdId["CMD_ID"] = 6245] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryCustomDungeonReq_CmdId[TryCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TryCustomDungeonReq_CmdId[TryCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TryCustomDungeonReq_CmdId[TryCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TryCustomDungeonReq_CmdId = exports.TryCustomDungeonReq_CmdId || (exports.TryCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TryCustomDungeonRsp.CmdId
 */
var TryCustomDungeonRsp_CmdId;
(function (TryCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryCustomDungeonRsp_CmdId[TryCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6241;
     */
    TryCustomDungeonRsp_CmdId[TryCustomDungeonRsp_CmdId["CMD_ID"] = 6241] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TryCustomDungeonRsp_CmdId[TryCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TryCustomDungeonRsp_CmdId[TryCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TryCustomDungeonRsp_CmdId = exports.TryCustomDungeonRsp_CmdId || (exports.TryCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PublishCustomDungeonReq.CmdId
 */
var PublishCustomDungeonReq_CmdId;
(function (PublishCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishCustomDungeonReq_CmdId[PublishCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6242;
     */
    PublishCustomDungeonReq_CmdId[PublishCustomDungeonReq_CmdId["CMD_ID"] = 6242] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishCustomDungeonReq_CmdId[PublishCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PublishCustomDungeonReq_CmdId[PublishCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PublishCustomDungeonReq_CmdId[PublishCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PublishCustomDungeonReq_CmdId = exports.PublishCustomDungeonReq_CmdId || (exports.PublishCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PublishCustomDungeonRsp.CmdId
 */
var PublishCustomDungeonRsp_CmdId;
(function (PublishCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishCustomDungeonRsp_CmdId[PublishCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6214;
     */
    PublishCustomDungeonRsp_CmdId[PublishCustomDungeonRsp_CmdId["CMD_ID"] = 6214] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PublishCustomDungeonRsp_CmdId[PublishCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PublishCustomDungeonRsp_CmdId[PublishCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PublishCustomDungeonRsp_CmdId = exports.PublishCustomDungeonRsp_CmdId || (exports.PublishCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExitCustomDungeonTryReq.CmdId
 */
var ExitCustomDungeonTryReq_CmdId;
(function (ExitCustomDungeonTryReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitCustomDungeonTryReq_CmdId[ExitCustomDungeonTryReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6247;
     */
    ExitCustomDungeonTryReq_CmdId[ExitCustomDungeonTryReq_CmdId["CMD_ID"] = 6247] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitCustomDungeonTryReq_CmdId[ExitCustomDungeonTryReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitCustomDungeonTryReq_CmdId[ExitCustomDungeonTryReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitCustomDungeonTryReq_CmdId[ExitCustomDungeonTryReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ExitCustomDungeonTryReq_CmdId = exports.ExitCustomDungeonTryReq_CmdId || (exports.ExitCustomDungeonTryReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ExitCustomDungeonTryRsp.CmdId
 */
var ExitCustomDungeonTryRsp_CmdId;
(function (ExitCustomDungeonTryRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitCustomDungeonTryRsp_CmdId[ExitCustomDungeonTryRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6237;
     */
    ExitCustomDungeonTryRsp_CmdId[ExitCustomDungeonTryRsp_CmdId["CMD_ID"] = 6237] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ExitCustomDungeonTryRsp_CmdId[ExitCustomDungeonTryRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ExitCustomDungeonTryRsp_CmdId[ExitCustomDungeonTryRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ExitCustomDungeonTryRsp_CmdId = exports.ExitCustomDungeonTryRsp_CmdId || (exports.ExitCustomDungeonTryRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonUpdateNotify.CmdId
 */
var CustomDungeonUpdateNotify_CmdId;
(function (CustomDungeonUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonUpdateNotify_CmdId[CustomDungeonUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6223;
     */
    CustomDungeonUpdateNotify_CmdId[CustomDungeonUpdateNotify_CmdId["CMD_ID"] = 6223] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonUpdateNotify_CmdId[CustomDungeonUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CustomDungeonUpdateNotify_CmdId[CustomDungeonUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CustomDungeonUpdateNotify_CmdId = exports.CustomDungeonUpdateNotify_CmdId || (exports.CustomDungeonUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetRecommendCustomDungeonReq.CmdId
 */
var GetRecommendCustomDungeonReq_CmdId;
(function (GetRecommendCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecommendCustomDungeonReq_CmdId[GetRecommendCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6235;
     */
    GetRecommendCustomDungeonReq_CmdId[GetRecommendCustomDungeonReq_CmdId["CMD_ID"] = 6235] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecommendCustomDungeonReq_CmdId[GetRecommendCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRecommendCustomDungeonReq_CmdId[GetRecommendCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRecommendCustomDungeonReq_CmdId[GetRecommendCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetRecommendCustomDungeonReq_CmdId = exports.GetRecommendCustomDungeonReq_CmdId || (exports.GetRecommendCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetRecommendCustomDungeonRsp.CmdId
 */
var GetRecommendCustomDungeonRsp_CmdId;
(function (GetRecommendCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecommendCustomDungeonRsp_CmdId[GetRecommendCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6248;
     */
    GetRecommendCustomDungeonRsp_CmdId[GetRecommendCustomDungeonRsp_CmdId["CMD_ID"] = 6248] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecommendCustomDungeonRsp_CmdId[GetRecommendCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRecommendCustomDungeonRsp_CmdId[GetRecommendCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetRecommendCustomDungeonRsp_CmdId = exports.GetRecommendCustomDungeonRsp_CmdId || (exports.GetRecommendCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetStoreCustomDungeonReq.CmdId
 */
var GetStoreCustomDungeonReq_CmdId;
(function (GetStoreCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetStoreCustomDungeonReq_CmdId[GetStoreCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6250;
     */
    GetStoreCustomDungeonReq_CmdId[GetStoreCustomDungeonReq_CmdId["CMD_ID"] = 6250] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetStoreCustomDungeonReq_CmdId[GetStoreCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetStoreCustomDungeonReq_CmdId[GetStoreCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetStoreCustomDungeonReq_CmdId[GetStoreCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetStoreCustomDungeonReq_CmdId = exports.GetStoreCustomDungeonReq_CmdId || (exports.GetStoreCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetStoreCustomDungeonRsp.CmdId
 */
var GetStoreCustomDungeonRsp_CmdId;
(function (GetStoreCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetStoreCustomDungeonRsp_CmdId[GetStoreCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6212;
     */
    GetStoreCustomDungeonRsp_CmdId[GetStoreCustomDungeonRsp_CmdId["CMD_ID"] = 6212] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetStoreCustomDungeonRsp_CmdId[GetStoreCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetStoreCustomDungeonRsp_CmdId[GetStoreCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetStoreCustomDungeonRsp_CmdId = exports.GetStoreCustomDungeonRsp_CmdId || (exports.GetStoreCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SearchCustomDungeonReq.CmdId
 */
var SearchCustomDungeonReq_CmdId;
(function (SearchCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SearchCustomDungeonReq_CmdId[SearchCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6233;
     */
    SearchCustomDungeonReq_CmdId[SearchCustomDungeonReq_CmdId["CMD_ID"] = 6233] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SearchCustomDungeonReq_CmdId[SearchCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SearchCustomDungeonReq_CmdId[SearchCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SearchCustomDungeonReq_CmdId[SearchCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SearchCustomDungeonReq_CmdId = exports.SearchCustomDungeonReq_CmdId || (exports.SearchCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SearchCustomDungeonRsp.CmdId
 */
var SearchCustomDungeonRsp_CmdId;
(function (SearchCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SearchCustomDungeonRsp_CmdId[SearchCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6215;
     */
    SearchCustomDungeonRsp_CmdId[SearchCustomDungeonRsp_CmdId["CMD_ID"] = 6215] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SearchCustomDungeonRsp_CmdId[SearchCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SearchCustomDungeonRsp_CmdId[SearchCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SearchCustomDungeonRsp_CmdId = exports.SearchCustomDungeonRsp_CmdId || (exports.SearchCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StoreCustomDungeonReq.CmdId
 */
var StoreCustomDungeonReq_CmdId;
(function (StoreCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreCustomDungeonReq_CmdId[StoreCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6213;
     */
    StoreCustomDungeonReq_CmdId[StoreCustomDungeonReq_CmdId["CMD_ID"] = 6213] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreCustomDungeonReq_CmdId[StoreCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StoreCustomDungeonReq_CmdId[StoreCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StoreCustomDungeonReq_CmdId[StoreCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(StoreCustomDungeonReq_CmdId = exports.StoreCustomDungeonReq_CmdId || (exports.StoreCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.StoreCustomDungeonRsp.CmdId
 */
var StoreCustomDungeonRsp_CmdId;
(function (StoreCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreCustomDungeonRsp_CmdId[StoreCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6201;
     */
    StoreCustomDungeonRsp_CmdId[StoreCustomDungeonRsp_CmdId["CMD_ID"] = 6201] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    StoreCustomDungeonRsp_CmdId[StoreCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    StoreCustomDungeonRsp_CmdId[StoreCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(StoreCustomDungeonRsp_CmdId = exports.StoreCustomDungeonRsp_CmdId || (exports.StoreCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LikeCustomDungeonReq.CmdId
 */
var LikeCustomDungeonReq_CmdId;
(function (LikeCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LikeCustomDungeonReq_CmdId[LikeCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6210;
     */
    LikeCustomDungeonReq_CmdId[LikeCustomDungeonReq_CmdId["CMD_ID"] = 6210] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LikeCustomDungeonReq_CmdId[LikeCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LikeCustomDungeonReq_CmdId[LikeCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LikeCustomDungeonReq_CmdId[LikeCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(LikeCustomDungeonReq_CmdId = exports.LikeCustomDungeonReq_CmdId || (exports.LikeCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LikeCustomDungeonRsp.CmdId
 */
var LikeCustomDungeonRsp_CmdId;
(function (LikeCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LikeCustomDungeonRsp_CmdId[LikeCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6219;
     */
    LikeCustomDungeonRsp_CmdId[LikeCustomDungeonRsp_CmdId["CMD_ID"] = 6219] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LikeCustomDungeonRsp_CmdId[LikeCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LikeCustomDungeonRsp_CmdId[LikeCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LikeCustomDungeonRsp_CmdId = exports.LikeCustomDungeonRsp_CmdId || (exports.LikeCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCustomDungeonReq.CmdId
 */
var GetCustomDungeonReq_CmdId;
(function (GetCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCustomDungeonReq_CmdId[GetCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6209;
     */
    GetCustomDungeonReq_CmdId[GetCustomDungeonReq_CmdId["CMD_ID"] = 6209] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCustomDungeonReq_CmdId[GetCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCustomDungeonReq_CmdId[GetCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCustomDungeonReq_CmdId[GetCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetCustomDungeonReq_CmdId = exports.GetCustomDungeonReq_CmdId || (exports.GetCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetCustomDungeonRsp.CmdId
 */
var GetCustomDungeonRsp_CmdId;
(function (GetCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCustomDungeonRsp_CmdId[GetCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6227;
     */
    GetCustomDungeonRsp_CmdId[GetCustomDungeonRsp_CmdId["CMD_ID"] = 6227] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetCustomDungeonRsp_CmdId[GetCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetCustomDungeonRsp_CmdId[GetCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetCustomDungeonRsp_CmdId = exports.GetCustomDungeonRsp_CmdId || (exports.GetCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonRecoverNotify.CmdId
 */
var CustomDungeonRecoverNotify_CmdId;
(function (CustomDungeonRecoverNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonRecoverNotify_CmdId[CustomDungeonRecoverNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6217;
     */
    CustomDungeonRecoverNotify_CmdId[CustomDungeonRecoverNotify_CmdId["CMD_ID"] = 6217] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonRecoverNotify_CmdId[CustomDungeonRecoverNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CustomDungeonRecoverNotify_CmdId[CustomDungeonRecoverNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CustomDungeonRecoverNotify_CmdId = exports.CustomDungeonRecoverNotify_CmdId || (exports.CustomDungeonRecoverNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BackPlayCustomDungeonOfficialReq.CmdId
 */
var BackPlayCustomDungeonOfficialReq_CmdId;
(function (BackPlayCustomDungeonOfficialReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackPlayCustomDungeonOfficialReq_CmdId[BackPlayCustomDungeonOfficialReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6203;
     */
    BackPlayCustomDungeonOfficialReq_CmdId[BackPlayCustomDungeonOfficialReq_CmdId["CMD_ID"] = 6203] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackPlayCustomDungeonOfficialReq_CmdId[BackPlayCustomDungeonOfficialReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackPlayCustomDungeonOfficialReq_CmdId[BackPlayCustomDungeonOfficialReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackPlayCustomDungeonOfficialReq_CmdId[BackPlayCustomDungeonOfficialReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BackPlayCustomDungeonOfficialReq_CmdId = exports.BackPlayCustomDungeonOfficialReq_CmdId || (exports.BackPlayCustomDungeonOfficialReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BackPlayCustomDungeonOfficialRsp.CmdId
 */
var BackPlayCustomDungeonOfficialRsp_CmdId;
(function (BackPlayCustomDungeonOfficialRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackPlayCustomDungeonOfficialRsp_CmdId[BackPlayCustomDungeonOfficialRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6204;
     */
    BackPlayCustomDungeonOfficialRsp_CmdId[BackPlayCustomDungeonOfficialRsp_CmdId["CMD_ID"] = 6204] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BackPlayCustomDungeonOfficialRsp_CmdId[BackPlayCustomDungeonOfficialRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BackPlayCustomDungeonOfficialRsp_CmdId[BackPlayCustomDungeonOfficialRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BackPlayCustomDungeonOfficialRsp_CmdId = exports.BackPlayCustomDungeonOfficialRsp_CmdId || (exports.BackPlayCustomDungeonOfficialRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonOfficialNotify.CmdId
 */
var CustomDungeonOfficialNotify_CmdId;
(function (CustomDungeonOfficialNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonOfficialNotify_CmdId[CustomDungeonOfficialNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6221;
     */
    CustomDungeonOfficialNotify_CmdId[CustomDungeonOfficialNotify_CmdId["CMD_ID"] = 6221] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonOfficialNotify_CmdId[CustomDungeonOfficialNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CustomDungeonOfficialNotify_CmdId[CustomDungeonOfficialNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CustomDungeonOfficialNotify_CmdId = exports.CustomDungeonOfficialNotify_CmdId || (exports.CustomDungeonOfficialNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReplayCustomDungeonReq.CmdId
 */
var ReplayCustomDungeonReq_CmdId;
(function (ReplayCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReplayCustomDungeonReq_CmdId[ReplayCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6243;
     */
    ReplayCustomDungeonReq_CmdId[ReplayCustomDungeonReq_CmdId["CMD_ID"] = 6243] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReplayCustomDungeonReq_CmdId[ReplayCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReplayCustomDungeonReq_CmdId[ReplayCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReplayCustomDungeonReq_CmdId[ReplayCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReplayCustomDungeonReq_CmdId = exports.ReplayCustomDungeonReq_CmdId || (exports.ReplayCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReplayCustomDungeonRsp.CmdId
 */
var ReplayCustomDungeonRsp_CmdId;
(function (ReplayCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReplayCustomDungeonRsp_CmdId[ReplayCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6240;
     */
    ReplayCustomDungeonRsp_CmdId[ReplayCustomDungeonRsp_CmdId["CMD_ID"] = 6240] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReplayCustomDungeonRsp_CmdId[ReplayCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReplayCustomDungeonRsp_CmdId[ReplayCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReplayCustomDungeonRsp_CmdId[ReplayCustomDungeonRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReplayCustomDungeonRsp_CmdId = exports.ReplayCustomDungeonRsp_CmdId || (exports.ReplayCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonBattleRecordNotify.CmdId
 */
var CustomDungeonBattleRecordNotify_CmdId;
(function (CustomDungeonBattleRecordNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonBattleRecordNotify_CmdId[CustomDungeonBattleRecordNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6236;
     */
    CustomDungeonBattleRecordNotify_CmdId[CustomDungeonBattleRecordNotify_CmdId["CMD_ID"] = 6236] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CustomDungeonBattleRecordNotify_CmdId[CustomDungeonBattleRecordNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CustomDungeonBattleRecordNotify_CmdId[CustomDungeonBattleRecordNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CustomDungeonBattleRecordNotify_CmdId[CustomDungeonBattleRecordNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CustomDungeonBattleRecordNotify_CmdId = exports.CustomDungeonBattleRecordNotify_CmdId || (exports.CustomDungeonBattleRecordNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OutStuckCustomDungeonReq.CmdId
 */
var OutStuckCustomDungeonReq_CmdId;
(function (OutStuckCustomDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OutStuckCustomDungeonReq_CmdId[OutStuckCustomDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6211;
     */
    OutStuckCustomDungeonReq_CmdId[OutStuckCustomDungeonReq_CmdId["CMD_ID"] = 6211] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OutStuckCustomDungeonReq_CmdId[OutStuckCustomDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OutStuckCustomDungeonReq_CmdId[OutStuckCustomDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OutStuckCustomDungeonReq_CmdId[OutStuckCustomDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(OutStuckCustomDungeonReq_CmdId = exports.OutStuckCustomDungeonReq_CmdId || (exports.OutStuckCustomDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OutStuckCustomDungeonRsp.CmdId
 */
var OutStuckCustomDungeonRsp_CmdId;
(function (OutStuckCustomDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OutStuckCustomDungeonRsp_CmdId[OutStuckCustomDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6234;
     */
    OutStuckCustomDungeonRsp_CmdId[OutStuckCustomDungeonRsp_CmdId["CMD_ID"] = 6234] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OutStuckCustomDungeonRsp_CmdId[OutStuckCustomDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OutStuckCustomDungeonRsp_CmdId[OutStuckCustomDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OutStuckCustomDungeonRsp_CmdId[OutStuckCustomDungeonRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(OutStuckCustomDungeonRsp_CmdId = exports.OutStuckCustomDungeonRsp_CmdId || (exports.OutStuckCustomDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterCustomDungeonType
 */
var EnterCustomDungeonType;
(function (EnterCustomDungeonType) {
    /**
     * @generated from protobuf enum value: ENTER_CUSTOM_DUNGEON_NONE = 0;
     */
    EnterCustomDungeonType[EnterCustomDungeonType["ENTER_CUSTOM_DUNGEON_NONE"] = 0] = "ENTER_CUSTOM_DUNGEON_NONE";
    /**
     * @generated from protobuf enum value: ENTER_CUSTOM_DUNGEON_EDIT = 1;
     */
    EnterCustomDungeonType[EnterCustomDungeonType["ENTER_CUSTOM_DUNGEON_EDIT"] = 1] = "ENTER_CUSTOM_DUNGEON_EDIT";
    /**
     * @generated from protobuf enum value: ENTER_CUSTOM_DUNGEON_PLAY = 2;
     */
    EnterCustomDungeonType[EnterCustomDungeonType["ENTER_CUSTOM_DUNGEON_PLAY"] = 2] = "ENTER_CUSTOM_DUNGEON_PLAY";
    /**
     * @generated from protobuf enum value: ENTER_CUSTOM_DUNGEON_OFFICIAL = 3;
     */
    EnterCustomDungeonType[EnterCustomDungeonType["ENTER_CUSTOM_DUNGEON_OFFICIAL"] = 3] = "ENTER_CUSTOM_DUNGEON_OFFICIAL";
})(EnterCustomDungeonType = exports.EnterCustomDungeonType || (exports.EnterCustomDungeonType = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonState
 */
var CustomDungeonState;
(function (CustomDungeonState) {
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_STATE_EDIT = 0;
     */
    CustomDungeonState[CustomDungeonState["EDIT"] = 0] = "EDIT";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_STATE_SELF_PASS = 1;
     */
    CustomDungeonState[CustomDungeonState["SELF_PASS"] = 1] = "SELF_PASS";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_STATE_PUBLISHED = 2;
     */
    CustomDungeonState[CustomDungeonState["PUBLISHED"] = 2] = "PUBLISHED";
})(CustomDungeonState = exports.CustomDungeonState || (exports.CustomDungeonState = {}));
/**
 * @generated from protobuf enum com.midnights.game.CustomDungeonBanType
 */
var CustomDungeonBanType;
(function (CustomDungeonBanType) {
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_BAN_TYPE_NONE = 0;
     */
    CustomDungeonBanType[CustomDungeonBanType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CUSTOM_DUNGEON_BAN_TYPE_LAYOUT = 1;
     */
    CustomDungeonBanType[CustomDungeonBanType["LAYOUT"] = 1] = "LAYOUT";
})(CustomDungeonBanType = exports.CustomDungeonBanType || (exports.CustomDungeonBanType = {}));
/**
 * @generated from protobuf enum com.midnights.game.TryCustomDungeonType
 */
var TryCustomDungeonType;
(function (TryCustomDungeonType) {
    /**
     * @generated from protobuf enum value: TRY_CUSTOM_DUNGEON_NONE = 0;
     */
    TryCustomDungeonType[TryCustomDungeonType["TRY_CUSTOM_DUNGEON_NONE"] = 0] = "TRY_CUSTOM_DUNGEON_NONE";
    /**
     * @generated from protobuf enum value: TRY_CUSTOM_DUNGEON_ROOM = 1;
     */
    TryCustomDungeonType[TryCustomDungeonType["TRY_CUSTOM_DUNGEON_ROOM"] = 1] = "TRY_CUSTOM_DUNGEON_ROOM";
    /**
     * @generated from protobuf enum value: TRY_CUSTOM_DUNGEON_ALL = 2;
     */
    TryCustomDungeonType[TryCustomDungeonType["TRY_CUSTOM_DUNGEON_ALL"] = 2] = "TRY_CUSTOM_DUNGEON_ALL";
    /**
     * @generated from protobuf enum value: TRY_CUSTOM_DUNGEON_OFFICIAL_PLAY = 3;
     */
    TryCustomDungeonType[TryCustomDungeonType["TRY_CUSTOM_DUNGEON_OFFICIAL_PLAY"] = 3] = "TRY_CUSTOM_DUNGEON_OFFICIAL_PLAY";
})(TryCustomDungeonType = exports.TryCustomDungeonType || (exports.TryCustomDungeonType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBlock$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonBlock", [
            { no: 8, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "rot", kind: "message", T: () => define_1.Vector },
            { no: 4, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "pos", kind: "message", T: () => define_1.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 block_id */ 8:
                    message.blockId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector rot */ 12:
                    message.rot = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional uint32 guid */ 4:
                    message.guid = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 block_id = 8; */
        if (message.blockId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.blockId);
        /* optional com.midnights.game.Vector rot = 12; */
        if (message.rot)
            define_1.Vector.internalBinaryWrite(message.rot, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 guid = 4; */
        if (message.guid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.guid);
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonBlock
 */
exports.CustomDungeonBlock = new CustomDungeonBlock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonRoom$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonRoom", [
            { no: 15, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "block_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CustomDungeonBlock }
        ]);
    }
    create(value) {
        const message = { blockList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 room_id */ 15:
                    message.roomId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.CustomDungeonBlock block_list */ 4:
                    message.blockList.push(exports.CustomDungeonBlock.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 room_id = 15; */
        if (message.roomId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.roomId);
        /* repeated com.midnights.game.CustomDungeonBlock block_list = 4; */
        for (let i = 0; i < message.blockList.length; i++)
            exports.CustomDungeonBlock.internalBinaryWrite(message.blockList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonRoom
 */
exports.CustomDungeonRoom = new CustomDungeonRoom$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSetting$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonSetting", [
            { no: 1, name: "open_room_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_arrive_finish", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "life_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_forbid_skill", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "coin_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "time_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { openRoomList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 open_room_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openRoomList.push(reader.uint32());
                    else
                        message.openRoomList.push(reader.uint32());
                    break;
                case /* optional bool is_arrive_finish */ 14:
                    message.isArriveFinish = reader.bool();
                    break;
                case /* optional uint32 life_num */ 6:
                    message.lifeNum = reader.uint32();
                    break;
                case /* optional uint32 start_room_id */ 4:
                    message.startRoomId = reader.uint32();
                    break;
                case /* optional bool is_forbid_skill */ 3:
                    message.isForbidSkill = reader.bool();
                    break;
                case /* optional uint32 coin_limit */ 10:
                    message.coinLimit = reader.uint32();
                    break;
                case /* optional uint32 time_limit */ 9:
                    message.timeLimit = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 open_room_list = 1; */
        for (let i = 0; i < message.openRoomList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.openRoomList[i]);
        /* optional bool is_arrive_finish = 14; */
        if (message.isArriveFinish !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isArriveFinish);
        /* optional uint32 life_num = 6; */
        if (message.lifeNum !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.lifeNum);
        /* optional uint32 start_room_id = 4; */
        if (message.startRoomId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.startRoomId);
        /* optional bool is_forbid_skill = 3; */
        if (message.isForbidSkill !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isForbidSkill);
        /* optional uint32 coin_limit = 10; */
        if (message.coinLimit !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.coinLimit);
        /* optional uint32 time_limit = 9; */
        if (message.timeLimit !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.timeLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonSetting
 */
exports.CustomDungeonSetting = new CustomDungeonSetting$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeon$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeon", [
            { no: 1, name: "setting", kind: "message", T: () => exports.CustomDungeonSetting },
            { no: 15, name: "room_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CustomDungeonRoom },
            { no: 3, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { roomList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CustomDungeonSetting setting */ 1:
                    message.setting = exports.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* repeated com.midnights.game.CustomDungeonRoom room_list */ 15:
                    message.roomList.push(exports.CustomDungeonRoom.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 dungeon_id */ 3:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint64 dungeon_guid */ 10:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.CustomDungeonSetting setting = 1; */
        if (message.setting)
            exports.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.CustomDungeonRoom room_list = 15; */
        for (let i = 0; i < message.roomList.length; i++)
            exports.CustomDungeonRoom.internalBinaryWrite(message.roomList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 dungeon_id = 3; */
        if (message.dungeonId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* optional uint64 dungeon_guid = 10; */
        if (message.dungeonGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeon
 */
exports.CustomDungeon = new CustomDungeon$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterCustomDungeonReq", [
            { no: 11, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "enter_type", kind: "enum", opt: true, T: () => ["com.midnights.game.EnterCustomDungeonType", EnterCustomDungeonType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 dungeon_guid */ 11:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 dungeon_id */ 12:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional com.midnights.game.EnterCustomDungeonType enter_type */ 10:
                    message.enterType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 dungeon_guid = 11; */
        if (message.dungeonGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* optional uint32 dungeon_id = 12; */
        if (message.dungeonId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* optional com.midnights.game.EnterCustomDungeonType enter_type = 10; */
        if (message.enterType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.enterType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterCustomDungeonReq
 */
exports.EnterCustomDungeonReq = new EnterCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterCustomDungeonRsp", [
            { no: 14, name: "custom_dungeon", kind: "message", T: () => exports.CustomDungeon },
            { no: 2, name: "enter_type", kind: "enum", opt: true, T: () => ["com.midnights.game.EnterCustomDungeonType", EnterCustomDungeonType] },
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "room_cost_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { roomCostMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CustomDungeon custom_dungeon */ 14:
                    message.customDungeon = exports.CustomDungeon.internalBinaryRead(reader, reader.uint32(), options, message.customDungeon);
                    break;
                case /* optional com.midnights.game.EnterCustomDungeonType enter_type */ 2:
                    message.enterType = reader.int32();
                    break;
                case /* optional int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* map<uint32, uint32> room_cost_map */ 6:
                    this.binaryReadMap6(message.roomCostMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.EnterCustomDungeonRsp.room_cost_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.CustomDungeon custom_dungeon = 14; */
        if (message.customDungeon)
            exports.CustomDungeon.internalBinaryWrite(message.customDungeon, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.EnterCustomDungeonType enter_type = 2; */
        if (message.enterType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.enterType);
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* map<uint32, uint32> room_cost_map = 6; */
        for (let k of Object.keys(message.roomCostMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.roomCostMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterCustomDungeonRsp
 */
exports.EnterCustomDungeonRsp = new EnterCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveCustomDungeonRoomReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveCustomDungeonRoomReq", [
            { no: 5, name: "custom_dungeon_room", kind: "message", T: () => exports.CustomDungeonRoom },
            { no: 7, name: "is_update_setting", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "setting", kind: "message", T: () => exports.CustomDungeonSetting }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CustomDungeonRoom custom_dungeon_room */ 5:
                    message.customDungeonRoom = exports.CustomDungeonRoom.internalBinaryRead(reader, reader.uint32(), options, message.customDungeonRoom);
                    break;
                case /* optional bool is_update_setting */ 7:
                    message.isUpdateSetting = reader.bool();
                    break;
                case /* optional com.midnights.game.CustomDungeonSetting setting */ 13:
                    message.setting = exports.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.CustomDungeonRoom custom_dungeon_room = 5; */
        if (message.customDungeonRoom)
            exports.CustomDungeonRoom.internalBinaryWrite(message.customDungeonRoom, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_update_setting = 7; */
        if (message.isUpdateSetting !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isUpdateSetting);
        /* optional com.midnights.game.CustomDungeonSetting setting = 13; */
        if (message.setting)
            exports.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SaveCustomDungeonRoomReq
 */
exports.SaveCustomDungeonRoomReq = new SaveCustomDungeonRoomReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SaveCustomDungeonRoomRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SaveCustomDungeonRoomRsp", [
            { no: 14, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "error_block_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CustomDungeonBlock },
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { errorBlockList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 room_id */ 14:
                    message.roomId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.CustomDungeonBlock error_block_list */ 9:
                    message.errorBlockList.push(exports.CustomDungeonBlock.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 room_id = 14; */
        if (message.roomId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.roomId);
        /* repeated com.midnights.game.CustomDungeonBlock error_block_list = 9; */
        for (let i = 0; i < message.errorBlockList.length; i++)
            exports.CustomDungeonBlock.internalBinaryWrite(message.errorBlockList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.SaveCustomDungeonRoomRsp
 */
exports.SaveCustomDungeonRoomRsp = new SaveCustomDungeonRoomRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonAbstract$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonAbstract", [
            { no: 12, name: "brick_statistics_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "first_publish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "total_coin_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "last_publish_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "finish_room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { brickStatisticsMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> brick_statistics_map */ 12:
                    this.binaryReadMap12(message.brickStatisticsMap, reader, options);
                    break;
                case /* optional uint32 first_publish_time */ 3:
                    message.firstPublishTime = reader.uint32();
                    break;
                case /* optional uint32 total_coin_num */ 15:
                    message.totalCoinNum = reader.uint32();
                    break;
                case /* optional uint32 last_publish_time */ 6:
                    message.lastPublishTime = reader.uint32();
                    break;
                case /* optional uint32 finish_room_id */ 7:
                    message.finishRoomId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.CustomDungeonAbstract.brick_statistics_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> brick_statistics_map = 12; */
        for (let k of Object.keys(message.brickStatisticsMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.brickStatisticsMap[k]).join();
        /* optional uint32 first_publish_time = 3; */
        if (message.firstPublishTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.firstPublishTime);
        /* optional uint32 total_coin_num = 15; */
        if (message.totalCoinNum !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.totalCoinNum);
        /* optional uint32 last_publish_time = 6; */
        if (message.lastPublishTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.lastPublishTime);
        /* optional uint32 finish_room_id = 7; */
        if (message.finishRoomId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.finishRoomId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonAbstract
 */
exports.CustomDungeonAbstract = new CustomDungeonAbstract$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSocial$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonSocial", [
            { no: 4, name: "win_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "like_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "play_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "store_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 win_num */ 4:
                    message.winNum = reader.uint32();
                    break;
                case /* optional uint32 like_num */ 12:
                    message.likeNum = reader.uint32();
                    break;
                case /* optional uint32 play_num */ 7:
                    message.playNum = reader.uint32();
                    break;
                case /* optional uint32 store_num */ 2:
                    message.storeNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 win_num = 4; */
        if (message.winNum !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.winNum);
        /* optional uint32 like_num = 12; */
        if (message.likeNum !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.likeNum);
        /* optional uint32 play_num = 7; */
        if (message.playNum !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.playNum);
        /* optional uint32 store_num = 2; */
        if (message.storeNum !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.storeNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonSocial
 */
exports.CustomDungeonSocial = new CustomDungeonSocial$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonBrief", [
            { no: 2, name: "setting", kind: "message", T: () => exports.CustomDungeonSetting },
            { no: 13, name: "is_psn_platform", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "social", kind: "message", T: () => exports.CustomDungeonSocial },
            { no: 10, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "last_save_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "battle_min_cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.CustomDungeonState", CustomDungeonState, "CUSTOM_DUNGEON_STATE_"] },
            { no: 4, name: "abstract", kind: "message", T: () => exports.CustomDungeonAbstract }
        ]);
    }
    create(value) {
        const message = { tagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CustomDungeonSetting setting */ 2:
                    message.setting = exports.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* optional bool is_psn_platform */ 13:
                    message.isPsnPlatform = reader.bool();
                    break;
                case /* optional com.midnights.game.CustomDungeonSocial social */ 7:
                    message.social = exports.CustomDungeonSocial.internalBinaryRead(reader, reader.uint32(), options, message.social);
                    break;
                case /* optional uint64 dungeon_guid */ 10:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 last_save_time */ 14:
                    message.lastSaveTime = reader.uint32();
                    break;
                case /* repeated uint32 tag_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* optional uint32 dungeon_id */ 5:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional uint32 battle_min_cost_time */ 12:
                    message.battleMinCostTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.CustomDungeonState state */ 1:
                    message.state = reader.int32();
                    break;
                case /* optional com.midnights.game.CustomDungeonAbstract abstract */ 4:
                    message.abstract = exports.CustomDungeonAbstract.internalBinaryRead(reader, reader.uint32(), options, message.abstract);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.CustomDungeonSetting setting = 2; */
        if (message.setting)
            exports.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_psn_platform = 13; */
        if (message.isPsnPlatform !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isPsnPlatform);
        /* optional com.midnights.game.CustomDungeonSocial social = 7; */
        if (message.social)
            exports.CustomDungeonSocial.internalBinaryWrite(message.social, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 dungeon_guid = 10; */
        if (message.dungeonGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* optional uint32 last_save_time = 14; */
        if (message.lastSaveTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.lastSaveTime);
        /* repeated uint32 tag_list = 15; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.tagList[i]);
        /* optional uint32 dungeon_id = 5; */
        if (message.dungeonId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* optional uint32 battle_min_cost_time = 12; */
        if (message.battleMinCostTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.battleMinCostTime);
        /* optional com.midnights.game.CustomDungeonState state = 1; */
        if (message.state !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.state);
        /* optional com.midnights.game.CustomDungeonAbstract abstract = 4; */
        if (message.abstract)
            exports.CustomDungeonAbstract.internalBinaryWrite(message.abstract, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonBrief
 */
exports.CustomDungeonBrief = new CustomDungeonBrief$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OtherCustomDungeonBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OtherCustomDungeonBrief", [
            { no: 4, name: "creator_detail", kind: "message", T: () => cmd_social_1.SocialDetail },
            { no: 15, name: "battle_min_cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "abstract", kind: "message", T: () => exports.CustomDungeonAbstract },
            { no: 14, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "setting", kind: "message", T: () => exports.CustomDungeonSetting },
            { no: 6, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_adventure_dungeon", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "is_psn_platform", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "is_stored", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "social", kind: "message", T: () => exports.CustomDungeonSocial }
        ]);
    }
    create(value) {
        const message = { tagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.SocialDetail creator_detail */ 4:
                    message.creatorDetail = cmd_social_1.SocialDetail.internalBinaryRead(reader, reader.uint32(), options, message.creatorDetail);
                    break;
                case /* optional uint32 battle_min_cost_time */ 15:
                    message.battleMinCostTime = reader.uint32();
                    break;
                case /* optional com.midnights.game.CustomDungeonAbstract abstract */ 2:
                    message.abstract = exports.CustomDungeonAbstract.internalBinaryRead(reader, reader.uint32(), options, message.abstract);
                    break;
                case /* optional uint64 dungeon_guid */ 14:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.CustomDungeonSetting setting */ 10:
                    message.setting = exports.CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* optional uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
                    break;
                case /* repeated uint32 tag_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* optional bool is_adventure_dungeon */ 11:
                    message.isAdventureDungeon = reader.bool();
                    break;
                case /* optional bool is_psn_platform */ 9:
                    message.isPsnPlatform = reader.bool();
                    break;
                case /* optional bool is_stored */ 3:
                    message.isStored = reader.bool();
                    break;
                case /* optional com.midnights.game.CustomDungeonSocial social */ 12:
                    message.social = exports.CustomDungeonSocial.internalBinaryRead(reader, reader.uint32(), options, message.social);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.SocialDetail creator_detail = 4; */
        if (message.creatorDetail)
            cmd_social_1.SocialDetail.internalBinaryWrite(message.creatorDetail, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 battle_min_cost_time = 15; */
        if (message.battleMinCostTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.battleMinCostTime);
        /* optional com.midnights.game.CustomDungeonAbstract abstract = 2; */
        if (message.abstract)
            exports.CustomDungeonAbstract.internalBinaryWrite(message.abstract, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 dungeon_guid = 14; */
        if (message.dungeonGuid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* optional com.midnights.game.CustomDungeonSetting setting = 10; */
        if (message.setting)
            exports.CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 dungeon_id = 6; */
        if (message.dungeonId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* repeated uint32 tag_list = 1; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.tagList[i]);
        /* optional bool is_adventure_dungeon = 11; */
        if (message.isAdventureDungeon !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isAdventureDungeon);
        /* optional bool is_psn_platform = 9; */
        if (message.isPsnPlatform !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isPsnPlatform);
        /* optional bool is_stored = 3; */
        if (message.isStored !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isStored);
        /* optional com.midnights.game.CustomDungeonSocial social = 12; */
        if (message.social)
            exports.CustomDungeonSocial.internalBinaryWrite(message.social, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OtherCustomDungeonBrief
 */
exports.OtherCustomDungeonBrief = new OtherCustomDungeonBrief$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBanInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonBanInfo", [
            { no: 11, name: "ban_type", kind: "enum", opt: true, T: () => ["com.midnights.game.CustomDungeonBanType", CustomDungeonBanType, "CUSTOM_DUNGEON_BAN_TYPE_"] },
            { no: 6, name: "expire_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CustomDungeonBanType ban_type */ 11:
                    message.banType = reader.int32();
                    break;
                case /* optional uint32 expire_time */ 6:
                    message.expireTime = reader.uint32();
                    break;
                case /* optional uint64 dungeon_guid */ 5:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.CustomDungeonBanType ban_type = 11; */
        if (message.banType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.banType);
        /* optional uint32 expire_time = 6; */
        if (message.expireTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.expireTime);
        /* optional uint64 dungeon_guid = 5; */
        if (message.dungeonGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonBanInfo
 */
exports.CustomDungeonBanInfo = new CustomDungeonBanInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeCustomDungeonRoomReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeCustomDungeonRoomReq", [
            { no: 4, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 room_id */ 4:
                    message.roomId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 room_id = 4; */
        if (message.roomId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.roomId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeCustomDungeonRoomReq
 */
exports.ChangeCustomDungeonRoomReq = new ChangeCustomDungeonRoomReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeCustomDungeonRoomRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeCustomDungeonRoomRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 room_id */ 13:
                    message.roomId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 room_id = 13; */
        if (message.roomId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.roomId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeCustomDungeonRoomRsp
 */
exports.ChangeCustomDungeonRoomRsp = new ChangeCustomDungeonRoomRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RemoveCustomDungeonReq", [
            { no: 14, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 dungeon_guid */ 14:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 dungeon_guid = 14; */
        if (message.dungeonGuid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RemoveCustomDungeonReq
 */
exports.RemoveCustomDungeonReq = new RemoveCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RemoveCustomDungeonRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint64 dungeon_guid */ 11:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint64 dungeon_guid = 11; */
        if (message.dungeonGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RemoveCustomDungeonRsp
 */
exports.RemoveCustomDungeonRsp = new RemoveCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TryCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TryCustomDungeonReq", [
            { no: 13, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 room_id */ 13:
                    message.roomId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 room_id = 13; */
        if (message.roomId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.roomId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TryCustomDungeonReq
 */
exports.TryCustomDungeonReq = new TryCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TryCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TryCustomDungeonRsp", [
            { no: 4, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 room_id */ 4:
                    message.roomId = reader.uint32();
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
        /* optional uint32 room_id = 4; */
        if (message.roomId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.roomId);
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
 * @generated MessageType for protobuf message com.midnights.game.TryCustomDungeonRsp
 */
exports.TryCustomDungeonRsp = new TryCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PublishCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PublishCustomDungeonReq", [
            { no: 1, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { tagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 tag_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* optional uint64 dungeon_guid */ 5:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 tag_list = 1; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.tagList[i]);
        /* optional uint64 dungeon_guid = 5; */
        if (message.dungeonGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PublishCustomDungeonReq
 */
exports.PublishCustomDungeonReq = new PublishCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PublishCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PublishCustomDungeonRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.PublishCustomDungeonRsp
 */
exports.PublishCustomDungeonRsp = new PublishCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExitCustomDungeonTryReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExitCustomDungeonTryReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ExitCustomDungeonTryReq
 */
exports.ExitCustomDungeonTryReq = new ExitCustomDungeonTryReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExitCustomDungeonTryRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ExitCustomDungeonTryRsp", [
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.ExitCustomDungeonTryRsp
 */
exports.ExitCustomDungeonTryRsp = new ExitCustomDungeonTryRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonUpdateNotify", [
            { no: 12, name: "dungeon_brief", kind: "message", T: () => exports.CustomDungeonBrief }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.CustomDungeonBrief dungeon_brief */ 12:
                    message.dungeonBrief = exports.CustomDungeonBrief.internalBinaryRead(reader, reader.uint32(), options, message.dungeonBrief);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.CustomDungeonBrief dungeon_brief = 12; */
        if (message.dungeonBrief)
            exports.CustomDungeonBrief.internalBinaryWrite(message.dungeonBrief, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonUpdateNotify
 */
exports.CustomDungeonUpdateNotify = new CustomDungeonUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRecommendCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetRecommendCustomDungeonReq", [
            { no: 13, name: "is_refresh", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_refresh */ 13:
                    message.isRefresh = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_refresh = 13; */
        if (message.isRefresh !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isRefresh);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetRecommendCustomDungeonReq
 */
exports.GetRecommendCustomDungeonReq = new GetRecommendCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRecommendCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetRecommendCustomDungeonRsp", [
            { no: 8, name: "custom_dungeon_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.OtherCustomDungeonBrief },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { customDungeonList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.OtherCustomDungeonBrief custom_dungeon_list */ 8:
                    message.customDungeonList.push(exports.OtherCustomDungeonBrief.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.OtherCustomDungeonBrief custom_dungeon_list = 8; */
        for (let i = 0; i < message.customDungeonList.length; i++)
            exports.OtherCustomDungeonBrief.internalBinaryWrite(message.customDungeonList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GetRecommendCustomDungeonRsp
 */
exports.GetRecommendCustomDungeonRsp = new GetRecommendCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetStoreCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetStoreCustomDungeonReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetStoreCustomDungeonReq
 */
exports.GetStoreCustomDungeonReq = new GetStoreCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetStoreCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetStoreCustomDungeonRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "custom_dungeon_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.OtherCustomDungeonBrief }
        ]);
    }
    create(value) {
        const message = { customDungeonList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.OtherCustomDungeonBrief custom_dungeon_list */ 7:
                    message.customDungeonList.push(exports.OtherCustomDungeonBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated com.midnights.game.OtherCustomDungeonBrief custom_dungeon_list = 7; */
        for (let i = 0; i < message.customDungeonList.length; i++)
            exports.OtherCustomDungeonBrief.internalBinaryWrite(message.customDungeonList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetStoreCustomDungeonRsp
 */
exports.GetStoreCustomDungeonRsp = new GetStoreCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SearchCustomDungeonReq", [
            { no: 6, name: "dungeon_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string dungeon_code */ 6:
                    message.dungeonCode = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string dungeon_code = 6; */
        if (message.dungeonCode !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.dungeonCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SearchCustomDungeonReq
 */
exports.SearchCustomDungeonReq = new SearchCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SearchCustomDungeonRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "custom_dungeon_brief", kind: "message", T: () => exports.OtherCustomDungeonBrief }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.OtherCustomDungeonBrief custom_dungeon_brief */ 14:
                    message.customDungeonBrief = exports.OtherCustomDungeonBrief.internalBinaryRead(reader, reader.uint32(), options, message.customDungeonBrief);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.OtherCustomDungeonBrief custom_dungeon_brief = 14; */
        if (message.customDungeonBrief)
            exports.OtherCustomDungeonBrief.internalBinaryWrite(message.customDungeonBrief, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SearchCustomDungeonRsp
 */
exports.SearchCustomDungeonRsp = new SearchCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StoreCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StoreCustomDungeonReq", [
            { no: 9, name: "is_cancel_store", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_cancel_store */ 9:
                    message.isCancelStore = reader.bool();
                    break;
                case /* optional uint64 dungeon_guid */ 11:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_cancel_store = 9; */
        if (message.isCancelStore !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isCancelStore);
        /* optional uint64 dungeon_guid = 11; */
        if (message.dungeonGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StoreCustomDungeonReq
 */
exports.StoreCustomDungeonReq = new StoreCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StoreCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StoreCustomDungeonRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.StoreCustomDungeonRsp
 */
exports.StoreCustomDungeonRsp = new StoreCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LikeCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LikeCustomDungeonReq", [
            { no: 5, name: "is_cancel_like", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_cancel_like */ 5:
                    message.isCancelLike = reader.bool();
                    break;
                case /* optional uint64 dungeon_guid */ 10:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_cancel_like = 5; */
        if (message.isCancelLike !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isCancelLike);
        /* optional uint64 dungeon_guid = 10; */
        if (message.dungeonGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LikeCustomDungeonReq
 */
exports.LikeCustomDungeonReq = new LikeCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LikeCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LikeCustomDungeonRsp", [
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
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
 * @generated MessageType for protobuf message com.midnights.game.LikeCustomDungeonRsp
 */
exports.LikeCustomDungeonRsp = new LikeCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCustomDungeonReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetCustomDungeonReq
 */
exports.GetCustomDungeonReq = new GetCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetCustomDungeonRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "ban_info", kind: "message", T: () => exports.CustomDungeonBanInfo },
            { no: 5, name: "brief_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.CustomDungeonBrief }
        ]);
    }
    create(value) {
        const message = { briefList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.CustomDungeonBanInfo ban_info */ 14:
                    message.banInfo = exports.CustomDungeonBanInfo.internalBinaryRead(reader, reader.uint32(), options, message.banInfo);
                    break;
                case /* repeated com.midnights.game.CustomDungeonBrief brief_list */ 5:
                    message.briefList.push(exports.CustomDungeonBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.CustomDungeonBanInfo ban_info = 14; */
        if (message.banInfo)
            exports.CustomDungeonBanInfo.internalBinaryWrite(message.banInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.CustomDungeonBrief brief_list = 5; */
        for (let i = 0; i < message.briefList.length; i++)
            exports.CustomDungeonBrief.internalBinaryWrite(message.briefList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetCustomDungeonRsp
 */
exports.GetCustomDungeonRsp = new GetCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonRecoverNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonRecoverNotify", [
            { no: 14, name: "enter_type", kind: "enum", opt: true, T: () => ["com.midnights.game.EnterCustomDungeonType", EnterCustomDungeonType] },
            { no: 3, name: "try_type", kind: "enum", opt: true, T: () => ["com.midnights.game.TryCustomDungeonType", TryCustomDungeonType] },
            { no: 10, name: "custom_dungeon", kind: "message", T: () => exports.CustomDungeon },
            { no: 12, name: "official_black_coin_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { officialBlackCoinList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.EnterCustomDungeonType enter_type */ 14:
                    message.enterType = reader.int32();
                    break;
                case /* optional com.midnights.game.TryCustomDungeonType try_type */ 3:
                    message.tryType = reader.int32();
                    break;
                case /* optional com.midnights.game.CustomDungeon custom_dungeon */ 10:
                    message.customDungeon = exports.CustomDungeon.internalBinaryRead(reader, reader.uint32(), options, message.customDungeon);
                    break;
                case /* repeated uint32 official_black_coin_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.officialBlackCoinList.push(reader.uint32());
                    else
                        message.officialBlackCoinList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.EnterCustomDungeonType enter_type = 14; */
        if (message.enterType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.enterType);
        /* optional com.midnights.game.TryCustomDungeonType try_type = 3; */
        if (message.tryType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.tryType);
        /* optional com.midnights.game.CustomDungeon custom_dungeon = 10; */
        if (message.customDungeon)
            exports.CustomDungeon.internalBinaryWrite(message.customDungeon, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 official_black_coin_list = 12; */
        for (let i = 0; i < message.officialBlackCoinList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.officialBlackCoinList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonRecoverNotify
 */
exports.CustomDungeonRecoverNotify = new CustomDungeonRecoverNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BackPlayCustomDungeonOfficialReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BackPlayCustomDungeonOfficialReq", [
            { no: 2, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 room_id */ 2:
                    message.roomId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 room_id = 2; */
        if (message.roomId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.roomId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BackPlayCustomDungeonOfficialReq
 */
exports.BackPlayCustomDungeonOfficialReq = new BackPlayCustomDungeonOfficialReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BackPlayCustomDungeonOfficialRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BackPlayCustomDungeonOfficialRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.BackPlayCustomDungeonOfficialRsp
 */
exports.BackPlayCustomDungeonOfficialRsp = new BackPlayCustomDungeonOfficialRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonOfficialNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonOfficialNotify", [
            { no: 9, name: "try_type", kind: "enum", opt: true, T: () => ["com.midnights.game.TryCustomDungeonType", TryCustomDungeonType] },
            { no: 14, name: "official_black_coin_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "enter_type", kind: "enum", opt: true, T: () => ["com.midnights.game.EnterCustomDungeonType", EnterCustomDungeonType] }
        ]);
    }
    create(value) {
        const message = { officialBlackCoinList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.TryCustomDungeonType try_type */ 9:
                    message.tryType = reader.int32();
                    break;
                case /* repeated uint32 official_black_coin_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.officialBlackCoinList.push(reader.uint32());
                    else
                        message.officialBlackCoinList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.EnterCustomDungeonType enter_type */ 15:
                    message.enterType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.TryCustomDungeonType try_type = 9; */
        if (message.tryType !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.tryType);
        /* repeated uint32 official_black_coin_list = 14; */
        for (let i = 0; i < message.officialBlackCoinList.length; i++)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.officialBlackCoinList[i]);
        /* optional com.midnights.game.EnterCustomDungeonType enter_type = 15; */
        if (message.enterType !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.enterType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonOfficialNotify
 */
exports.CustomDungeonOfficialNotify = new CustomDungeonOfficialNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonVerify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonVerify", [
            { no: 3, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "region", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "lang", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 dungeon_guid */ 3:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 uid */ 15:
                    message.uid = reader.uint32();
                    break;
                case /* optional uint32 timestamp */ 4:
                    message.timestamp = reader.uint32();
                    break;
                case /* optional string region */ 11:
                    message.region = reader.string();
                    break;
                case /* optional uint32 lang */ 13:
                    message.lang = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 dungeon_guid = 3; */
        if (message.dungeonGuid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* optional uint32 uid = 15; */
        if (message.uid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional uint32 timestamp = 4; */
        if (message.timestamp !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.timestamp);
        /* optional string region = 11; */
        if (message.region !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.region);
        /* optional uint32 lang = 13; */
        if (message.lang !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.lang);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonVerify
 */
exports.CustomDungeonVerify = new CustomDungeonVerify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReplayCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReplayCustomDungeonReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ReplayCustomDungeonReq
 */
exports.ReplayCustomDungeonReq = new ReplayCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReplayCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReplayCustomDungeonRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.ReplayCustomDungeonRsp
 */
exports.ReplayCustomDungeonRsp = new ReplayCustomDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBattleRecordNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CustomDungeonBattleRecordNotify", [
            { no: 13, name: "min_cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dungeon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 min_cost_time */ 13:
                    message.minCostTime = reader.uint32();
                    break;
                case /* optional uint64 dungeon_guid */ 12:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 min_cost_time = 13; */
        if (message.minCostTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.minCostTime);
        /* optional uint64 dungeon_guid = 12; */
        if (message.dungeonGuid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CustomDungeonBattleRecordNotify
 */
exports.CustomDungeonBattleRecordNotify = new CustomDungeonBattleRecordNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OutStuckCustomDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OutStuckCustomDungeonReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.OutStuckCustomDungeonReq
 */
exports.OutStuckCustomDungeonReq = new OutStuckCustomDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OutStuckCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OutStuckCustomDungeonRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.OutStuckCustomDungeonRsp
 */
exports.OutStuckCustomDungeonRsp = new OutStuckCustomDungeonRsp$Type();
