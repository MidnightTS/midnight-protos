"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpretInferenceWordRsp_CmdId = exports.InterpretInferenceWordReq_CmdId = exports.ParentQuestInferenceDataNotify_CmdId = exports.GetParentQuestVideoKeyRsp_CmdId = exports.GetParentQuestVideoKeyReq_CmdId = exports.GetQuestLackingResourceRsp_CmdId = exports.GetQuestLackingResourceReq_CmdId = exports.NpcTalkStateNotify_CmdId = exports.PersonalLineNewUnlockNotify_CmdId = exports.QuestUpdateQuestTimeVarNotify_CmdId = exports.CancelFinishParentQuestNotify_CmdId = exports.UnlockPersonalLineRsp_CmdId = exports.UnlockPersonalLineReq_CmdId = exports.RedeemLegendaryKeyRsp_CmdId = exports.RedeemLegendaryKeyReq_CmdId = exports.PersonalLineAllDataRsp_CmdId = exports.LockedPersonallineData_LockReason = exports.PersonalLineAllDataReq_CmdId = exports.QuestTransmitRsp_CmdId = exports.QuestTransmitReq_CmdId = exports.QuestGlobalVarNotify_CmdId = exports.ServerCondMeetQuestListUpdateNotify_CmdId = exports.GetAllActivatedBargainDataRsp_CmdId = exports.GetAllActivatedBargainDataReq_CmdId = exports.GetBargainDataRsp_CmdId = exports.GetBargainDataReq_CmdId = exports.BargainTerminateNotify_CmdId = exports.BargainOfferPriceRsp_CmdId = exports.BargainOfferPriceReq_CmdId = exports.BargainStartNotify_CmdId = exports.QuestDestroyNpcRsp_CmdId = exports.QuestDestroyNpcReq_CmdId = exports.QuestUpdateQuestVarNotify_CmdId = exports.QuestUpdateQuestVarRsp_CmdId = exports.QuestUpdateQuestVarReq_CmdId = exports.QuestProgressUpdateNotify_CmdId = exports.ChapterStateNotify_CmdId = exports.QuestDestroyEntityRsp_CmdId = exports.QuestDestroyEntityReq_CmdId = exports.QuestCreateEntityRsp_CmdId = exports.QuestCreateEntityReq_CmdId = exports.GetQuestTalkHistoryRsp_CmdId = exports.GetQuestTalkHistoryReq_CmdId = exports.AddQuestContentProgressRsp_CmdId = exports.AddQuestContentProgressReq_CmdId = exports.FinishedParentQuestUpdateNotify_CmdId = exports.FinishedParentQuestNotify_CmdId = exports.QuestDelNotify_CmdId = exports.QuestListUpdateNotify_CmdId = exports.QuestListNotify_CmdId = void 0;
exports.LockedPersonallineData = exports.PersonalLineAllDataReq = exports.QuestTransmitRsp = exports.QuestTransmitReq = exports.QuestGlobalVarNotify = exports.QuestGlobalVar = exports.ServerCondMeetQuestListUpdateNotify = exports.GetAllActivatedBargainDataRsp = exports.GetAllActivatedBargainDataReq = exports.GetBargainDataRsp = exports.GetBargainDataReq = exports.BargainTerminateNotify = exports.BargainOfferPriceRsp = exports.BargainOfferPriceReq = exports.BargainStartNotify = exports.BargainSnapshot = exports.QuestDestroyNpcRsp = exports.QuestDestroyNpcReq = exports.QuestUpdateQuestVarNotify = exports.QuestUpdateQuestVarRsp = exports.QuestUpdateQuestVarReq = exports.QuestVarOp = exports.QuestProgressUpdateNotify = exports.ChapterStateNotify_NeedBeginTime = exports.ChapterStateNotify_NeedPlayerLevel = exports.ChapterStateNotify = exports.QuestDestroyEntityRsp = exports.QuestDestroyEntityReq = exports.QuestCreateEntityRsp = exports.QuestCreateEntityReq = exports.GetQuestTalkHistoryRsp = exports.GetQuestTalkHistoryReq = exports.AddQuestContentProgressRsp = exports.AddQuestContentProgressReq = exports.FinishedParentQuestUpdateNotify = exports.FinishedParentQuestNotify = exports.ParentQuest = exports.InferencePageInfo = exports.InfernceWordInfo = exports.ParentQuestRandomInfo = exports.ChildQuest = exports.QuestDelNotify = exports.QuestListUpdateNotify = exports.QuestListNotify = exports.BargainResultType = exports.ChapterState = exports.SubmitInferenceWordRsp_CmdId = exports.SubmitInferenceWordReq_CmdId = exports.AssociateInferenceWordRsp_CmdId = exports.AssociateInferenceWordReq_CmdId = void 0;
exports.SubmitInferenceWordRsp = exports.SubmitInferenceWordReq = exports.AssociateInferenceWordRsp = exports.AssociateInferenceWordReq = exports.InterpretInferenceWordRsp = exports.InterpretInferenceWordReq = exports.ParentQuestInferenceDataNotify = exports.GetParentQuestVideoKeyRsp = exports.GetParentQuestVideoKeyReq = exports.GetQuestLackingResourceRsp = exports.GetQuestLackingResourceReq = exports.NpcTalkStateNotify = exports.PersonalLineNewUnlockNotify = exports.QuestUpdateQuestTimeVarNotify = exports.CancelFinishParentQuestNotify = exports.UnlockPersonalLineRsp = exports.UnlockPersonalLineReq = exports.RedeemLegendaryKeyRsp = exports.RedeemLegendaryKeyReq = exports.PersonalLineAllDataRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.QuestListNotify.CmdId
 */
var QuestListNotify_CmdId;
(function (QuestListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestListNotify_CmdId[QuestListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 472;
     */
    QuestListNotify_CmdId[QuestListNotify_CmdId["CMD_ID"] = 472] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestListNotify_CmdId[QuestListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestListNotify_CmdId[QuestListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestListNotify_CmdId = exports.QuestListNotify_CmdId || (exports.QuestListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestListUpdateNotify.CmdId
 */
var QuestListUpdateNotify_CmdId;
(function (QuestListUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestListUpdateNotify_CmdId[QuestListUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 498;
     */
    QuestListUpdateNotify_CmdId[QuestListUpdateNotify_CmdId["CMD_ID"] = 498] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestListUpdateNotify_CmdId[QuestListUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestListUpdateNotify_CmdId[QuestListUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestListUpdateNotify_CmdId = exports.QuestListUpdateNotify_CmdId || (exports.QuestListUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestDelNotify.CmdId
 */
var QuestDelNotify_CmdId;
(function (QuestDelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDelNotify_CmdId[QuestDelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 412;
     */
    QuestDelNotify_CmdId[QuestDelNotify_CmdId["CMD_ID"] = 412] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDelNotify_CmdId[QuestDelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestDelNotify_CmdId[QuestDelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestDelNotify_CmdId = exports.QuestDelNotify_CmdId || (exports.QuestDelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FinishedParentQuestNotify.CmdId
 */
var FinishedParentQuestNotify_CmdId;
(function (FinishedParentQuestNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishedParentQuestNotify_CmdId[FinishedParentQuestNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 435;
     */
    FinishedParentQuestNotify_CmdId[FinishedParentQuestNotify_CmdId["CMD_ID"] = 435] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishedParentQuestNotify_CmdId[FinishedParentQuestNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FinishedParentQuestNotify_CmdId[FinishedParentQuestNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FinishedParentQuestNotify_CmdId = exports.FinishedParentQuestNotify_CmdId || (exports.FinishedParentQuestNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FinishedParentQuestUpdateNotify.CmdId
 */
var FinishedParentQuestUpdateNotify_CmdId;
(function (FinishedParentQuestUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishedParentQuestUpdateNotify_CmdId[FinishedParentQuestUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 407;
     */
    FinishedParentQuestUpdateNotify_CmdId[FinishedParentQuestUpdateNotify_CmdId["CMD_ID"] = 407] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishedParentQuestUpdateNotify_CmdId[FinishedParentQuestUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FinishedParentQuestUpdateNotify_CmdId[FinishedParentQuestUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FinishedParentQuestUpdateNotify_CmdId = exports.FinishedParentQuestUpdateNotify_CmdId || (exports.FinishedParentQuestUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddQuestContentProgressReq.CmdId
 */
var AddQuestContentProgressReq_CmdId;
(function (AddQuestContentProgressReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddQuestContentProgressReq_CmdId[AddQuestContentProgressReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 421;
     */
    AddQuestContentProgressReq_CmdId[AddQuestContentProgressReq_CmdId["CMD_ID"] = 421] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddQuestContentProgressReq_CmdId[AddQuestContentProgressReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddQuestContentProgressReq_CmdId[AddQuestContentProgressReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddQuestContentProgressReq_CmdId[AddQuestContentProgressReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AddQuestContentProgressReq_CmdId = exports.AddQuestContentProgressReq_CmdId || (exports.AddQuestContentProgressReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddQuestContentProgressRsp.CmdId
 */
var AddQuestContentProgressRsp_CmdId;
(function (AddQuestContentProgressRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddQuestContentProgressRsp_CmdId[AddQuestContentProgressRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 403;
     */
    AddQuestContentProgressRsp_CmdId[AddQuestContentProgressRsp_CmdId["CMD_ID"] = 403] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddQuestContentProgressRsp_CmdId[AddQuestContentProgressRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddQuestContentProgressRsp_CmdId[AddQuestContentProgressRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AddQuestContentProgressRsp_CmdId = exports.AddQuestContentProgressRsp_CmdId || (exports.AddQuestContentProgressRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetQuestTalkHistoryReq.CmdId
 */
var GetQuestTalkHistoryReq_CmdId;
(function (GetQuestTalkHistoryReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestTalkHistoryReq_CmdId[GetQuestTalkHistoryReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 490;
     */
    GetQuestTalkHistoryReq_CmdId[GetQuestTalkHistoryReq_CmdId["CMD_ID"] = 490] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestTalkHistoryReq_CmdId[GetQuestTalkHistoryReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetQuestTalkHistoryReq_CmdId[GetQuestTalkHistoryReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetQuestTalkHistoryReq_CmdId[GetQuestTalkHistoryReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetQuestTalkHistoryReq_CmdId = exports.GetQuestTalkHistoryReq_CmdId || (exports.GetQuestTalkHistoryReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetQuestTalkHistoryRsp.CmdId
 */
var GetQuestTalkHistoryRsp_CmdId;
(function (GetQuestTalkHistoryRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestTalkHistoryRsp_CmdId[GetQuestTalkHistoryRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 473;
     */
    GetQuestTalkHistoryRsp_CmdId[GetQuestTalkHistoryRsp_CmdId["CMD_ID"] = 473] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestTalkHistoryRsp_CmdId[GetQuestTalkHistoryRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetQuestTalkHistoryRsp_CmdId[GetQuestTalkHistoryRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetQuestTalkHistoryRsp_CmdId = exports.GetQuestTalkHistoryRsp_CmdId || (exports.GetQuestTalkHistoryRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestCreateEntityReq.CmdId
 */
var QuestCreateEntityReq_CmdId;
(function (QuestCreateEntityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestCreateEntityReq_CmdId[QuestCreateEntityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 499;
     */
    QuestCreateEntityReq_CmdId[QuestCreateEntityReq_CmdId["CMD_ID"] = 499] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestCreateEntityReq_CmdId[QuestCreateEntityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestCreateEntityReq_CmdId[QuestCreateEntityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestCreateEntityReq_CmdId[QuestCreateEntityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QuestCreateEntityReq_CmdId = exports.QuestCreateEntityReq_CmdId || (exports.QuestCreateEntityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestCreateEntityRsp.CmdId
 */
var QuestCreateEntityRsp_CmdId;
(function (QuestCreateEntityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestCreateEntityRsp_CmdId[QuestCreateEntityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 431;
     */
    QuestCreateEntityRsp_CmdId[QuestCreateEntityRsp_CmdId["CMD_ID"] = 431] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestCreateEntityRsp_CmdId[QuestCreateEntityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestCreateEntityRsp_CmdId[QuestCreateEntityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestCreateEntityRsp_CmdId = exports.QuestCreateEntityRsp_CmdId || (exports.QuestCreateEntityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestDestroyEntityReq.CmdId
 */
var QuestDestroyEntityReq_CmdId;
(function (QuestDestroyEntityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyEntityReq_CmdId[QuestDestroyEntityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 475;
     */
    QuestDestroyEntityReq_CmdId[QuestDestroyEntityReq_CmdId["CMD_ID"] = 475] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyEntityReq_CmdId[QuestDestroyEntityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestDestroyEntityReq_CmdId[QuestDestroyEntityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestDestroyEntityReq_CmdId[QuestDestroyEntityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QuestDestroyEntityReq_CmdId = exports.QuestDestroyEntityReq_CmdId || (exports.QuestDestroyEntityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestDestroyEntityRsp.CmdId
 */
var QuestDestroyEntityRsp_CmdId;
(function (QuestDestroyEntityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyEntityRsp_CmdId[QuestDestroyEntityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 448;
     */
    QuestDestroyEntityRsp_CmdId[QuestDestroyEntityRsp_CmdId["CMD_ID"] = 448] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyEntityRsp_CmdId[QuestDestroyEntityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestDestroyEntityRsp_CmdId[QuestDestroyEntityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestDestroyEntityRsp_CmdId = exports.QuestDestroyEntityRsp_CmdId || (exports.QuestDestroyEntityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChapterStateNotify.CmdId
 */
var ChapterStateNotify_CmdId;
(function (ChapterStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChapterStateNotify_CmdId[ChapterStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 405;
     */
    ChapterStateNotify_CmdId[ChapterStateNotify_CmdId["CMD_ID"] = 405] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChapterStateNotify_CmdId[ChapterStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChapterStateNotify_CmdId[ChapterStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChapterStateNotify_CmdId = exports.ChapterStateNotify_CmdId || (exports.ChapterStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestProgressUpdateNotify.CmdId
 */
var QuestProgressUpdateNotify_CmdId;
(function (QuestProgressUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestProgressUpdateNotify_CmdId[QuestProgressUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 482;
     */
    QuestProgressUpdateNotify_CmdId[QuestProgressUpdateNotify_CmdId["CMD_ID"] = 482] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestProgressUpdateNotify_CmdId[QuestProgressUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestProgressUpdateNotify_CmdId[QuestProgressUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestProgressUpdateNotify_CmdId = exports.QuestProgressUpdateNotify_CmdId || (exports.QuestProgressUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestUpdateQuestVarReq.CmdId
 */
var QuestUpdateQuestVarReq_CmdId;
(function (QuestUpdateQuestVarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestVarReq_CmdId[QuestUpdateQuestVarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 447;
     */
    QuestUpdateQuestVarReq_CmdId[QuestUpdateQuestVarReq_CmdId["CMD_ID"] = 447] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestVarReq_CmdId[QuestUpdateQuestVarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestUpdateQuestVarReq_CmdId[QuestUpdateQuestVarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestUpdateQuestVarReq_CmdId[QuestUpdateQuestVarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QuestUpdateQuestVarReq_CmdId = exports.QuestUpdateQuestVarReq_CmdId || (exports.QuestUpdateQuestVarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestUpdateQuestVarRsp.CmdId
 */
var QuestUpdateQuestVarRsp_CmdId;
(function (QuestUpdateQuestVarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestVarRsp_CmdId[QuestUpdateQuestVarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 439;
     */
    QuestUpdateQuestVarRsp_CmdId[QuestUpdateQuestVarRsp_CmdId["CMD_ID"] = 439] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestVarRsp_CmdId[QuestUpdateQuestVarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestUpdateQuestVarRsp_CmdId[QuestUpdateQuestVarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestUpdateQuestVarRsp_CmdId = exports.QuestUpdateQuestVarRsp_CmdId || (exports.QuestUpdateQuestVarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestUpdateQuestVarNotify.CmdId
 */
var QuestUpdateQuestVarNotify_CmdId;
(function (QuestUpdateQuestVarNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestVarNotify_CmdId[QuestUpdateQuestVarNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 453;
     */
    QuestUpdateQuestVarNotify_CmdId[QuestUpdateQuestVarNotify_CmdId["CMD_ID"] = 453] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestVarNotify_CmdId[QuestUpdateQuestVarNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestUpdateQuestVarNotify_CmdId[QuestUpdateQuestVarNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestUpdateQuestVarNotify_CmdId = exports.QuestUpdateQuestVarNotify_CmdId || (exports.QuestUpdateQuestVarNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestDestroyNpcReq.CmdId
 */
var QuestDestroyNpcReq_CmdId;
(function (QuestDestroyNpcReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyNpcReq_CmdId[QuestDestroyNpcReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 422;
     */
    QuestDestroyNpcReq_CmdId[QuestDestroyNpcReq_CmdId["CMD_ID"] = 422] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyNpcReq_CmdId[QuestDestroyNpcReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestDestroyNpcReq_CmdId[QuestDestroyNpcReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestDestroyNpcReq_CmdId[QuestDestroyNpcReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QuestDestroyNpcReq_CmdId = exports.QuestDestroyNpcReq_CmdId || (exports.QuestDestroyNpcReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestDestroyNpcRsp.CmdId
 */
var QuestDestroyNpcRsp_CmdId;
(function (QuestDestroyNpcRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyNpcRsp_CmdId[QuestDestroyNpcRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 465;
     */
    QuestDestroyNpcRsp_CmdId[QuestDestroyNpcRsp_CmdId["CMD_ID"] = 465] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestDestroyNpcRsp_CmdId[QuestDestroyNpcRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestDestroyNpcRsp_CmdId[QuestDestroyNpcRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestDestroyNpcRsp_CmdId = exports.QuestDestroyNpcRsp_CmdId || (exports.QuestDestroyNpcRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BargainStartNotify.CmdId
 */
var BargainStartNotify_CmdId;
(function (BargainStartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainStartNotify_CmdId[BargainStartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 404;
     */
    BargainStartNotify_CmdId[BargainStartNotify_CmdId["CMD_ID"] = 404] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainStartNotify_CmdId[BargainStartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BargainStartNotify_CmdId[BargainStartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BargainStartNotify_CmdId = exports.BargainStartNotify_CmdId || (exports.BargainStartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BargainOfferPriceReq.CmdId
 */
var BargainOfferPriceReq_CmdId;
(function (BargainOfferPriceReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainOfferPriceReq_CmdId[BargainOfferPriceReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 493;
     */
    BargainOfferPriceReq_CmdId[BargainOfferPriceReq_CmdId["CMD_ID"] = 493] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainOfferPriceReq_CmdId[BargainOfferPriceReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BargainOfferPriceReq_CmdId[BargainOfferPriceReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BargainOfferPriceReq_CmdId[BargainOfferPriceReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BargainOfferPriceReq_CmdId = exports.BargainOfferPriceReq_CmdId || (exports.BargainOfferPriceReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BargainOfferPriceRsp.CmdId
 */
var BargainOfferPriceRsp_CmdId;
(function (BargainOfferPriceRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainOfferPriceRsp_CmdId[BargainOfferPriceRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 427;
     */
    BargainOfferPriceRsp_CmdId[BargainOfferPriceRsp_CmdId["CMD_ID"] = 427] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainOfferPriceRsp_CmdId[BargainOfferPriceRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BargainOfferPriceRsp_CmdId[BargainOfferPriceRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BargainOfferPriceRsp_CmdId = exports.BargainOfferPriceRsp_CmdId || (exports.BargainOfferPriceRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BargainTerminateNotify.CmdId
 */
var BargainTerminateNotify_CmdId;
(function (BargainTerminateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainTerminateNotify_CmdId[BargainTerminateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 494;
     */
    BargainTerminateNotify_CmdId[BargainTerminateNotify_CmdId["CMD_ID"] = 494] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BargainTerminateNotify_CmdId[BargainTerminateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BargainTerminateNotify_CmdId[BargainTerminateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BargainTerminateNotify_CmdId = exports.BargainTerminateNotify_CmdId || (exports.BargainTerminateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetBargainDataReq.CmdId
 */
var GetBargainDataReq_CmdId;
(function (GetBargainDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBargainDataReq_CmdId[GetBargainDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 488;
     */
    GetBargainDataReq_CmdId[GetBargainDataReq_CmdId["CMD_ID"] = 488] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBargainDataReq_CmdId[GetBargainDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBargainDataReq_CmdId[GetBargainDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBargainDataReq_CmdId[GetBargainDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetBargainDataReq_CmdId = exports.GetBargainDataReq_CmdId || (exports.GetBargainDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetBargainDataRsp.CmdId
 */
var GetBargainDataRsp_CmdId;
(function (GetBargainDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBargainDataRsp_CmdId[GetBargainDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 426;
     */
    GetBargainDataRsp_CmdId[GetBargainDataRsp_CmdId["CMD_ID"] = 426] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBargainDataRsp_CmdId[GetBargainDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBargainDataRsp_CmdId[GetBargainDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetBargainDataRsp_CmdId = exports.GetBargainDataRsp_CmdId || (exports.GetBargainDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllActivatedBargainDataReq.CmdId
 */
var GetAllActivatedBargainDataReq_CmdId;
(function (GetAllActivatedBargainDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllActivatedBargainDataReq_CmdId[GetAllActivatedBargainDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 463;
     */
    GetAllActivatedBargainDataReq_CmdId[GetAllActivatedBargainDataReq_CmdId["CMD_ID"] = 463] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllActivatedBargainDataReq_CmdId[GetAllActivatedBargainDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllActivatedBargainDataReq_CmdId[GetAllActivatedBargainDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllActivatedBargainDataReq_CmdId[GetAllActivatedBargainDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAllActivatedBargainDataReq_CmdId = exports.GetAllActivatedBargainDataReq_CmdId || (exports.GetAllActivatedBargainDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllActivatedBargainDataRsp.CmdId
 */
var GetAllActivatedBargainDataRsp_CmdId;
(function (GetAllActivatedBargainDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllActivatedBargainDataRsp_CmdId[GetAllActivatedBargainDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 495;
     */
    GetAllActivatedBargainDataRsp_CmdId[GetAllActivatedBargainDataRsp_CmdId["CMD_ID"] = 495] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllActivatedBargainDataRsp_CmdId[GetAllActivatedBargainDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllActivatedBargainDataRsp_CmdId[GetAllActivatedBargainDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetAllActivatedBargainDataRsp_CmdId = exports.GetAllActivatedBargainDataRsp_CmdId || (exports.GetAllActivatedBargainDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerCondMeetQuestListUpdateNotify.CmdId
 */
var ServerCondMeetQuestListUpdateNotify_CmdId;
(function (ServerCondMeetQuestListUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerCondMeetQuestListUpdateNotify_CmdId[ServerCondMeetQuestListUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 406;
     */
    ServerCondMeetQuestListUpdateNotify_CmdId[ServerCondMeetQuestListUpdateNotify_CmdId["CMD_ID"] = 406] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerCondMeetQuestListUpdateNotify_CmdId[ServerCondMeetQuestListUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerCondMeetQuestListUpdateNotify_CmdId[ServerCondMeetQuestListUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerCondMeetQuestListUpdateNotify_CmdId = exports.ServerCondMeetQuestListUpdateNotify_CmdId || (exports.ServerCondMeetQuestListUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestGlobalVarNotify.CmdId
 */
var QuestGlobalVarNotify_CmdId;
(function (QuestGlobalVarNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestGlobalVarNotify_CmdId[QuestGlobalVarNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 434;
     */
    QuestGlobalVarNotify_CmdId[QuestGlobalVarNotify_CmdId["CMD_ID"] = 434] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestGlobalVarNotify_CmdId[QuestGlobalVarNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestGlobalVarNotify_CmdId[QuestGlobalVarNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestGlobalVarNotify_CmdId = exports.QuestGlobalVarNotify_CmdId || (exports.QuestGlobalVarNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestTransmitReq.CmdId
 */
var QuestTransmitReq_CmdId;
(function (QuestTransmitReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestTransmitReq_CmdId[QuestTransmitReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 450;
     */
    QuestTransmitReq_CmdId[QuestTransmitReq_CmdId["CMD_ID"] = 450] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestTransmitReq_CmdId[QuestTransmitReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestTransmitReq_CmdId[QuestTransmitReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestTransmitReq_CmdId[QuestTransmitReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(QuestTransmitReq_CmdId = exports.QuestTransmitReq_CmdId || (exports.QuestTransmitReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestTransmitRsp.CmdId
 */
var QuestTransmitRsp_CmdId;
(function (QuestTransmitRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestTransmitRsp_CmdId[QuestTransmitRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 443;
     */
    QuestTransmitRsp_CmdId[QuestTransmitRsp_CmdId["CMD_ID"] = 443] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestTransmitRsp_CmdId[QuestTransmitRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestTransmitRsp_CmdId[QuestTransmitRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestTransmitRsp_CmdId = exports.QuestTransmitRsp_CmdId || (exports.QuestTransmitRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PersonalLineAllDataReq.CmdId
 */
var PersonalLineAllDataReq_CmdId;
(function (PersonalLineAllDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalLineAllDataReq_CmdId[PersonalLineAllDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 474;
     */
    PersonalLineAllDataReq_CmdId[PersonalLineAllDataReq_CmdId["CMD_ID"] = 474] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalLineAllDataReq_CmdId[PersonalLineAllDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersonalLineAllDataReq_CmdId[PersonalLineAllDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersonalLineAllDataReq_CmdId[PersonalLineAllDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PersonalLineAllDataReq_CmdId = exports.PersonalLineAllDataReq_CmdId || (exports.PersonalLineAllDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LockedPersonallineData.LockReason
 */
var LockedPersonallineData_LockReason;
(function (LockedPersonallineData_LockReason) {
    /**
     * @generated from protobuf enum value: LEVEL = 0;
     */
    LockedPersonallineData_LockReason[LockedPersonallineData_LockReason["LEVEL"] = 0] = "LEVEL";
    /**
     * @generated from protobuf enum value: QUEST = 1;
     */
    LockedPersonallineData_LockReason[LockedPersonallineData_LockReason["QUEST"] = 1] = "QUEST";
})(LockedPersonallineData_LockReason = exports.LockedPersonallineData_LockReason || (exports.LockedPersonallineData_LockReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.PersonalLineAllDataRsp.CmdId
 */
var PersonalLineAllDataRsp_CmdId;
(function (PersonalLineAllDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalLineAllDataRsp_CmdId[PersonalLineAllDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 476;
     */
    PersonalLineAllDataRsp_CmdId[PersonalLineAllDataRsp_CmdId["CMD_ID"] = 476] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalLineAllDataRsp_CmdId[PersonalLineAllDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersonalLineAllDataRsp_CmdId[PersonalLineAllDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PersonalLineAllDataRsp_CmdId = exports.PersonalLineAllDataRsp_CmdId || (exports.PersonalLineAllDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RedeemLegendaryKeyReq.CmdId
 */
var RedeemLegendaryKeyReq_CmdId;
(function (RedeemLegendaryKeyReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RedeemLegendaryKeyReq_CmdId[RedeemLegendaryKeyReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 446;
     */
    RedeemLegendaryKeyReq_CmdId[RedeemLegendaryKeyReq_CmdId["CMD_ID"] = 446] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RedeemLegendaryKeyReq_CmdId[RedeemLegendaryKeyReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RedeemLegendaryKeyReq_CmdId[RedeemLegendaryKeyReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RedeemLegendaryKeyReq_CmdId[RedeemLegendaryKeyReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RedeemLegendaryKeyReq_CmdId = exports.RedeemLegendaryKeyReq_CmdId || (exports.RedeemLegendaryKeyReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RedeemLegendaryKeyRsp.CmdId
 */
var RedeemLegendaryKeyRsp_CmdId;
(function (RedeemLegendaryKeyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RedeemLegendaryKeyRsp_CmdId[RedeemLegendaryKeyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 441;
     */
    RedeemLegendaryKeyRsp_CmdId[RedeemLegendaryKeyRsp_CmdId["CMD_ID"] = 441] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RedeemLegendaryKeyRsp_CmdId[RedeemLegendaryKeyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RedeemLegendaryKeyRsp_CmdId[RedeemLegendaryKeyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RedeemLegendaryKeyRsp_CmdId = exports.RedeemLegendaryKeyRsp_CmdId || (exports.RedeemLegendaryKeyRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockPersonalLineReq.CmdId
 */
var UnlockPersonalLineReq_CmdId;
(function (UnlockPersonalLineReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockPersonalLineReq_CmdId[UnlockPersonalLineReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 449;
     */
    UnlockPersonalLineReq_CmdId[UnlockPersonalLineReq_CmdId["CMD_ID"] = 449] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockPersonalLineReq_CmdId[UnlockPersonalLineReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockPersonalLineReq_CmdId[UnlockPersonalLineReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockPersonalLineReq_CmdId[UnlockPersonalLineReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UnlockPersonalLineReq_CmdId = exports.UnlockPersonalLineReq_CmdId || (exports.UnlockPersonalLineReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockPersonalLineRsp.CmdId
 */
var UnlockPersonalLineRsp_CmdId;
(function (UnlockPersonalLineRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockPersonalLineRsp_CmdId[UnlockPersonalLineRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 491;
     */
    UnlockPersonalLineRsp_CmdId[UnlockPersonalLineRsp_CmdId["CMD_ID"] = 491] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockPersonalLineRsp_CmdId[UnlockPersonalLineRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockPersonalLineRsp_CmdId[UnlockPersonalLineRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnlockPersonalLineRsp_CmdId = exports.UnlockPersonalLineRsp_CmdId || (exports.UnlockPersonalLineRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CancelFinishParentQuestNotify.CmdId
 */
var CancelFinishParentQuestNotify_CmdId;
(function (CancelFinishParentQuestNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelFinishParentQuestNotify_CmdId[CancelFinishParentQuestNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 424;
     */
    CancelFinishParentQuestNotify_CmdId[CancelFinishParentQuestNotify_CmdId["CMD_ID"] = 424] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CancelFinishParentQuestNotify_CmdId[CancelFinishParentQuestNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CancelFinishParentQuestNotify_CmdId[CancelFinishParentQuestNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CancelFinishParentQuestNotify_CmdId = exports.CancelFinishParentQuestNotify_CmdId || (exports.CancelFinishParentQuestNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.QuestUpdateQuestTimeVarNotify.CmdId
 */
var QuestUpdateQuestTimeVarNotify_CmdId;
(function (QuestUpdateQuestTimeVarNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestTimeVarNotify_CmdId[QuestUpdateQuestTimeVarNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 456;
     */
    QuestUpdateQuestTimeVarNotify_CmdId[QuestUpdateQuestTimeVarNotify_CmdId["CMD_ID"] = 456] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    QuestUpdateQuestTimeVarNotify_CmdId[QuestUpdateQuestTimeVarNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    QuestUpdateQuestTimeVarNotify_CmdId[QuestUpdateQuestTimeVarNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(QuestUpdateQuestTimeVarNotify_CmdId = exports.QuestUpdateQuestTimeVarNotify_CmdId || (exports.QuestUpdateQuestTimeVarNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PersonalLineNewUnlockNotify.CmdId
 */
var PersonalLineNewUnlockNotify_CmdId;
(function (PersonalLineNewUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalLineNewUnlockNotify_CmdId[PersonalLineNewUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 442;
     */
    PersonalLineNewUnlockNotify_CmdId[PersonalLineNewUnlockNotify_CmdId["CMD_ID"] = 442] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersonalLineNewUnlockNotify_CmdId[PersonalLineNewUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersonalLineNewUnlockNotify_CmdId[PersonalLineNewUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PersonalLineNewUnlockNotify_CmdId = exports.PersonalLineNewUnlockNotify_CmdId || (exports.PersonalLineNewUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.NpcTalkStateNotify.CmdId
 */
var NpcTalkStateNotify_CmdId;
(function (NpcTalkStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NpcTalkStateNotify_CmdId[NpcTalkStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 430;
     */
    NpcTalkStateNotify_CmdId[NpcTalkStateNotify_CmdId["CMD_ID"] = 430] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NpcTalkStateNotify_CmdId[NpcTalkStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NpcTalkStateNotify_CmdId[NpcTalkStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(NpcTalkStateNotify_CmdId = exports.NpcTalkStateNotify_CmdId || (exports.NpcTalkStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetQuestLackingResourceReq.CmdId
 */
var GetQuestLackingResourceReq_CmdId;
(function (GetQuestLackingResourceReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestLackingResourceReq_CmdId[GetQuestLackingResourceReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 467;
     */
    GetQuestLackingResourceReq_CmdId[GetQuestLackingResourceReq_CmdId["CMD_ID"] = 467] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestLackingResourceReq_CmdId[GetQuestLackingResourceReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetQuestLackingResourceReq_CmdId[GetQuestLackingResourceReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetQuestLackingResourceReq_CmdId[GetQuestLackingResourceReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetQuestLackingResourceReq_CmdId = exports.GetQuestLackingResourceReq_CmdId || (exports.GetQuestLackingResourceReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetQuestLackingResourceRsp.CmdId
 */
var GetQuestLackingResourceRsp_CmdId;
(function (GetQuestLackingResourceRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestLackingResourceRsp_CmdId[GetQuestLackingResourceRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 458;
     */
    GetQuestLackingResourceRsp_CmdId[GetQuestLackingResourceRsp_CmdId["CMD_ID"] = 458] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetQuestLackingResourceRsp_CmdId[GetQuestLackingResourceRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetQuestLackingResourceRsp_CmdId[GetQuestLackingResourceRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetQuestLackingResourceRsp_CmdId = exports.GetQuestLackingResourceRsp_CmdId || (exports.GetQuestLackingResourceRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetParentQuestVideoKeyReq.CmdId
 */
var GetParentQuestVideoKeyReq_CmdId;
(function (GetParentQuestVideoKeyReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetParentQuestVideoKeyReq_CmdId[GetParentQuestVideoKeyReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 470;
     */
    GetParentQuestVideoKeyReq_CmdId[GetParentQuestVideoKeyReq_CmdId["CMD_ID"] = 470] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetParentQuestVideoKeyReq_CmdId[GetParentQuestVideoKeyReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetParentQuestVideoKeyReq_CmdId[GetParentQuestVideoKeyReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetParentQuestVideoKeyReq_CmdId[GetParentQuestVideoKeyReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetParentQuestVideoKeyReq_CmdId = exports.GetParentQuestVideoKeyReq_CmdId || (exports.GetParentQuestVideoKeyReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetParentQuestVideoKeyRsp.CmdId
 */
var GetParentQuestVideoKeyRsp_CmdId;
(function (GetParentQuestVideoKeyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetParentQuestVideoKeyRsp_CmdId[GetParentQuestVideoKeyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 417;
     */
    GetParentQuestVideoKeyRsp_CmdId[GetParentQuestVideoKeyRsp_CmdId["CMD_ID"] = 417] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetParentQuestVideoKeyRsp_CmdId[GetParentQuestVideoKeyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetParentQuestVideoKeyRsp_CmdId[GetParentQuestVideoKeyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetParentQuestVideoKeyRsp_CmdId = exports.GetParentQuestVideoKeyRsp_CmdId || (exports.GetParentQuestVideoKeyRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ParentQuestInferenceDataNotify.CmdId
 */
var ParentQuestInferenceDataNotify_CmdId;
(function (ParentQuestInferenceDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ParentQuestInferenceDataNotify_CmdId[ParentQuestInferenceDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 402;
     */
    ParentQuestInferenceDataNotify_CmdId[ParentQuestInferenceDataNotify_CmdId["CMD_ID"] = 402] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ParentQuestInferenceDataNotify_CmdId[ParentQuestInferenceDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ParentQuestInferenceDataNotify_CmdId[ParentQuestInferenceDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ParentQuestInferenceDataNotify_CmdId = exports.ParentQuestInferenceDataNotify_CmdId || (exports.ParentQuestInferenceDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InterpretInferenceWordReq.CmdId
 */
var InterpretInferenceWordReq_CmdId;
(function (InterpretInferenceWordReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterpretInferenceWordReq_CmdId[InterpretInferenceWordReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 419;
     */
    InterpretInferenceWordReq_CmdId[InterpretInferenceWordReq_CmdId["CMD_ID"] = 419] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterpretInferenceWordReq_CmdId[InterpretInferenceWordReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InterpretInferenceWordReq_CmdId[InterpretInferenceWordReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InterpretInferenceWordReq_CmdId[InterpretInferenceWordReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(InterpretInferenceWordReq_CmdId = exports.InterpretInferenceWordReq_CmdId || (exports.InterpretInferenceWordReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InterpretInferenceWordRsp.CmdId
 */
var InterpretInferenceWordRsp_CmdId;
(function (InterpretInferenceWordRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterpretInferenceWordRsp_CmdId[InterpretInferenceWordRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 461;
     */
    InterpretInferenceWordRsp_CmdId[InterpretInferenceWordRsp_CmdId["CMD_ID"] = 461] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InterpretInferenceWordRsp_CmdId[InterpretInferenceWordRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InterpretInferenceWordRsp_CmdId[InterpretInferenceWordRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InterpretInferenceWordRsp_CmdId = exports.InterpretInferenceWordRsp_CmdId || (exports.InterpretInferenceWordRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AssociateInferenceWordReq.CmdId
 */
var AssociateInferenceWordReq_CmdId;
(function (AssociateInferenceWordReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AssociateInferenceWordReq_CmdId[AssociateInferenceWordReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 429;
     */
    AssociateInferenceWordReq_CmdId[AssociateInferenceWordReq_CmdId["CMD_ID"] = 429] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AssociateInferenceWordReq_CmdId[AssociateInferenceWordReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AssociateInferenceWordReq_CmdId[AssociateInferenceWordReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AssociateInferenceWordReq_CmdId[AssociateInferenceWordReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AssociateInferenceWordReq_CmdId = exports.AssociateInferenceWordReq_CmdId || (exports.AssociateInferenceWordReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AssociateInferenceWordRsp.CmdId
 */
var AssociateInferenceWordRsp_CmdId;
(function (AssociateInferenceWordRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AssociateInferenceWordRsp_CmdId[AssociateInferenceWordRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 457;
     */
    AssociateInferenceWordRsp_CmdId[AssociateInferenceWordRsp_CmdId["CMD_ID"] = 457] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AssociateInferenceWordRsp_CmdId[AssociateInferenceWordRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AssociateInferenceWordRsp_CmdId[AssociateInferenceWordRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AssociateInferenceWordRsp_CmdId = exports.AssociateInferenceWordRsp_CmdId || (exports.AssociateInferenceWordRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SubmitInferenceWordReq.CmdId
 */
var SubmitInferenceWordReq_CmdId;
(function (SubmitInferenceWordReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SubmitInferenceWordReq_CmdId[SubmitInferenceWordReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 500;
     */
    SubmitInferenceWordReq_CmdId[SubmitInferenceWordReq_CmdId["CMD_ID"] = 500] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SubmitInferenceWordReq_CmdId[SubmitInferenceWordReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SubmitInferenceWordReq_CmdId[SubmitInferenceWordReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SubmitInferenceWordReq_CmdId[SubmitInferenceWordReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SubmitInferenceWordReq_CmdId = exports.SubmitInferenceWordReq_CmdId || (exports.SubmitInferenceWordReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SubmitInferenceWordRsp.CmdId
 */
var SubmitInferenceWordRsp_CmdId;
(function (SubmitInferenceWordRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SubmitInferenceWordRsp_CmdId[SubmitInferenceWordRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 416;
     */
    SubmitInferenceWordRsp_CmdId[SubmitInferenceWordRsp_CmdId["CMD_ID"] = 416] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SubmitInferenceWordRsp_CmdId[SubmitInferenceWordRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SubmitInferenceWordRsp_CmdId[SubmitInferenceWordRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SubmitInferenceWordRsp_CmdId = exports.SubmitInferenceWordRsp_CmdId || (exports.SubmitInferenceWordRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChapterState
 */
var ChapterState;
(function (ChapterState) {
    /**
     * @generated from protobuf enum value: CHAPTER_STATE_INVALID = 0;
     */
    ChapterState[ChapterState["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: CHAPTER_STATE_UNABLE_TO_BEGIN = 1;
     */
    ChapterState[ChapterState["UNABLE_TO_BEGIN"] = 1] = "UNABLE_TO_BEGIN";
    /**
     * @generated from protobuf enum value: CHAPTER_STATE_BEGIN = 2;
     */
    ChapterState[ChapterState["BEGIN"] = 2] = "BEGIN";
    /**
     * @generated from protobuf enum value: CHAPTER_STATE_END = 3;
     */
    ChapterState[ChapterState["END"] = 3] = "END";
})(ChapterState = exports.ChapterState || (exports.ChapterState = {}));
/**
 * @generated from protobuf enum com.midnights.game.BargainResultType
 */
var BargainResultType;
(function (BargainResultType) {
    /**
     * @generated from protobuf enum value: BARGAIN_COMPLETE_SUCC = 0;
     */
    BargainResultType[BargainResultType["BARGAIN_COMPLETE_SUCC"] = 0] = "BARGAIN_COMPLETE_SUCC";
    /**
     * @generated from protobuf enum value: BARGAIN_SINGLE_FAIL = 1;
     */
    BargainResultType[BargainResultType["BARGAIN_SINGLE_FAIL"] = 1] = "BARGAIN_SINGLE_FAIL";
    /**
     * @generated from protobuf enum value: BARGAIN_COMPLETE_FAIL = 2;
     */
    BargainResultType[BargainResultType["BARGAIN_COMPLETE_FAIL"] = 2] = "BARGAIN_COMPLETE_FAIL";
})(BargainResultType = exports.BargainResultType || (exports.BargainResultType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class QuestListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestListNotify", [
            { no: 1, name: "quest_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.Quest }
        ]);
    }
    create(value) {
        const message = { questList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.Quest quest_list */ 1:
                    message.questList.push(define_2.Quest.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.Quest quest_list = 1; */
        for (let i = 0; i < message.questList.length; i++)
            define_2.Quest.internalBinaryWrite(message.questList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestListNotify
 */
exports.QuestListNotify = new QuestListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestListUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestListUpdateNotify", [
            { no: 6, name: "quest_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.Quest }
        ]);
    }
    create(value) {
        const message = { questList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.Quest quest_list */ 6:
                    message.questList.push(define_2.Quest.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.Quest quest_list = 6; */
        for (let i = 0; i < message.questList.length; i++)
            define_2.Quest.internalBinaryWrite(message.questList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestListUpdateNotify
 */
exports.QuestListUpdateNotify = new QuestListUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestDelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestDelNotify", [
            { no: 1, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 quest_id */ 1:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_id = 1; */
        if (message.questId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestDelNotify
 */
exports.QuestDelNotify = new QuestDelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChildQuest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChildQuest", [
            { no: 8, name: "quest_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 quest_config_id */ 8:
                    message.questConfigId = reader.uint32();
                    break;
                case /* optional uint32 state */ 4:
                    message.state = reader.uint32();
                    break;
                case /* optional uint32 quest_id */ 15:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_config_id = 8; */
        if (message.questConfigId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.questConfigId);
        /* optional uint32 state = 4; */
        if (message.state !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.state);
        /* optional uint32 quest_id = 15; */
        if (message.questId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChildQuest
 */
exports.ChildQuest = new ChildQuest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ParentQuestRandomInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ParentQuestRandomInfo", [
            { no: 1, name: "factor_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "template_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "entrance_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { factorList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 factor_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.factorList.push(reader.uint32());
                    else
                        message.factorList.push(reader.uint32());
                    break;
                case /* optional uint32 template_id */ 8:
                    message.templateId = reader.uint32();
                    break;
                case /* optional uint32 entrance_id */ 2:
                    message.entranceId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 factor_list = 1; */
        if (message.factorList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.factorList.length; i++)
                writer.uint32(message.factorList[i]);
            writer.join();
        }
        /* optional uint32 template_id = 8; */
        if (message.templateId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.templateId);
        /* optional uint32 entrance_id = 2; */
        if (message.entranceId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entranceId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ParentQuestRandomInfo
 */
exports.ParentQuestRandomInfo = new ParentQuestRandomInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InfernceWordInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InfernceWordInfo", [
            { no: 8, name: "word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_interpret", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "is_submit", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_associate", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "unlock_by_word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 word_id */ 8:
                    message.wordId = reader.uint32();
                    break;
                case /* optional bool is_interpret */ 15:
                    message.isInterpret = reader.bool();
                    break;
                case /* optional bool is_submit */ 10:
                    message.isSubmit = reader.bool();
                    break;
                case /* optional bool is_associate */ 6:
                    message.isAssociate = reader.bool();
                    break;
                case /* optional uint32 unlock_by_word_id */ 5:
                    message.unlockByWordId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 word_id = 8; */
        if (message.wordId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.wordId);
        /* optional bool is_interpret = 15; */
        if (message.isInterpret !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isInterpret);
        /* optional bool is_submit = 10; */
        if (message.isSubmit !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isSubmit);
        /* optional bool is_associate = 6; */
        if (message.isAssociate !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAssociate);
        /* optional uint32 unlock_by_word_id = 5; */
        if (message.unlockByWordId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unlockByWordId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InfernceWordInfo
 */
exports.InfernceWordInfo = new InfernceWordInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InferencePageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InferencePageInfo", [
            { no: 3, name: "page_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "unlock_word_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InfernceWordInfo }
        ]);
    }
    create(value) {
        const message = { unlockWordList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 page_id */ 3:
                    message.pageId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.InfernceWordInfo unlock_word_list */ 15:
                    message.unlockWordList.push(exports.InfernceWordInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 page_id = 3; */
        if (message.pageId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.pageId);
        /* repeated com.midnights.game.InfernceWordInfo unlock_word_list = 15; */
        for (let i = 0; i < message.unlockWordList.length; i++)
            exports.InfernceWordInfo.internalBinaryWrite(message.unlockWordList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InferencePageInfo
 */
exports.InferencePageInfo = new InferencePageInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ParentQuest$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ParentQuest", [
            { no: 14, name: "quest_var", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "time_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 1, name: "parent_quest_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_finished", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "inference_page_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InferencePageInfo },
            { no: 12, name: "random_info", kind: "message", T: () => exports.ParentQuestRandomInfo },
            { no: 3, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_random", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "video_key", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "quest_var_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "child_quest_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ChildQuest }
        ]);
    }
    create(value) {
        const message = { questVar: [], timeVarMap: {}, inferencePageList: [], childQuestList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 quest_var */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.questVar.push(reader.int32());
                    else
                        message.questVar.push(reader.int32());
                    break;
                case /* map<uint32, uint32> time_var_map */ 8:
                    this.binaryReadMap8(message.timeVarMap, reader, options);
                    break;
                case /* optional uint32 parent_quest_state */ 1:
                    message.parentQuestState = reader.uint32();
                    break;
                case /* optional bool is_finished */ 7:
                    message.isFinished = reader.bool();
                    break;
                case /* repeated com.midnights.game.InferencePageInfo inference_page_list */ 15:
                    message.inferencePageList.push(exports.InferencePageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.ParentQuestRandomInfo random_info */ 12:
                    message.randomInfo = exports.ParentQuestRandomInfo.internalBinaryRead(reader, reader.uint32(), options, message.randomInfo);
                    break;
                case /* optional uint32 parent_quest_id */ 3:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional bool is_random */ 13:
                    message.isRandom = reader.bool();
                    break;
                case /* optional uint64 video_key */ 6:
                    message.videoKey = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 quest_var_seq */ 11:
                    message.questVarSeq = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ChildQuest child_quest_list */ 9:
                    message.childQuestList.push(exports.ChildQuest.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ParentQuest.time_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int32 quest_var = 14; */
        if (message.questVar.length) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.questVar.length; i++)
                writer.int32(message.questVar[i]);
            writer.join();
        }
        /* map<uint32, uint32> time_var_map = 8; */
        for (let k of Object.keys(message.timeVarMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.timeVarMap[k]).join();
        /* optional uint32 parent_quest_state = 1; */
        if (message.parentQuestState !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.parentQuestState);
        /* optional bool is_finished = 7; */
        if (message.isFinished !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFinished);
        /* repeated com.midnights.game.InferencePageInfo inference_page_list = 15; */
        for (let i = 0; i < message.inferencePageList.length; i++)
            exports.InferencePageInfo.internalBinaryWrite(message.inferencePageList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ParentQuestRandomInfo random_info = 12; */
        if (message.randomInfo)
            exports.ParentQuestRandomInfo.internalBinaryWrite(message.randomInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 parent_quest_id = 3; */
        if (message.parentQuestId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* optional bool is_random = 13; */
        if (message.isRandom !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isRandom);
        /* optional uint64 video_key = 6; */
        if (message.videoKey !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.videoKey);
        /* optional uint32 quest_var_seq = 11; */
        if (message.questVarSeq !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.questVarSeq);
        /* repeated com.midnights.game.ChildQuest child_quest_list = 9; */
        for (let i = 0; i < message.childQuestList.length; i++)
            exports.ChildQuest.internalBinaryWrite(message.childQuestList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ParentQuest
 */
exports.ParentQuest = new ParentQuest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinishedParentQuestNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FinishedParentQuestNotify", [
            { no: 2, name: "parent_quest_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ParentQuest }
        ]);
    }
    create(value) {
        const message = { parentQuestList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ParentQuest parent_quest_list */ 2:
                    message.parentQuestList.push(exports.ParentQuest.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ParentQuest parent_quest_list = 2; */
        for (let i = 0; i < message.parentQuestList.length; i++)
            exports.ParentQuest.internalBinaryWrite(message.parentQuestList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FinishedParentQuestNotify
 */
exports.FinishedParentQuestNotify = new FinishedParentQuestNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinishedParentQuestUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FinishedParentQuestUpdateNotify", [
            { no: 9, name: "parent_quest_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ParentQuest }
        ]);
    }
    create(value) {
        const message = { parentQuestList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ParentQuest parent_quest_list */ 9:
                    message.parentQuestList.push(exports.ParentQuest.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ParentQuest parent_quest_list = 9; */
        for (let i = 0; i < message.parentQuestList.length; i++)
            exports.ParentQuest.internalBinaryWrite(message.parentQuestList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FinishedParentQuestUpdateNotify
 */
exports.FinishedParentQuestUpdateNotify = new FinishedParentQuestUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddQuestContentProgressReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddQuestContentProgressReq", [
            { no: 6, name: "content_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "add_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 content_type */ 6:
                    message.contentType = reader.uint32();
                    break;
                case /* optional uint32 param */ 12:
                    message.param = reader.uint32();
                    break;
                case /* optional uint32 add_progress */ 15:
                    message.addProgress = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 content_type = 6; */
        if (message.contentType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.contentType);
        /* optional uint32 param = 12; */
        if (message.param !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.param);
        /* optional uint32 add_progress = 15; */
        if (message.addProgress !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.addProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddQuestContentProgressReq
 */
exports.AddQuestContentProgressReq = new AddQuestContentProgressReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddQuestContentProgressRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddQuestContentProgressRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "content_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 content_type */ 4:
                    message.contentType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 content_type = 4; */
        if (message.contentType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.contentType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddQuestContentProgressRsp
 */
exports.AddQuestContentProgressRsp = new AddQuestContentProgressRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetQuestTalkHistoryReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetQuestTalkHistoryReq", [
            { no: 6, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 parent_quest_id */ 6:
                    message.parentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 parent_quest_id = 6; */
        if (message.parentQuestId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetQuestTalkHistoryReq
 */
exports.GetQuestTalkHistoryReq = new GetQuestTalkHistoryReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetQuestTalkHistoryRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetQuestTalkHistoryRsp", [
            { no: 13, name: "talk_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { talkIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 talk_id_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talkIdList.push(reader.uint32());
                    else
                        message.talkIdList.push(reader.uint32());
                    break;
                case /* optional uint32 parent_quest_id */ 7:
                    message.parentQuestId = reader.uint32();
                    break;
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
        /* repeated uint32 talk_id_list = 13; */
        if (message.talkIdList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.talkIdList.length; i++)
                writer.uint32(message.talkIdList[i]);
            writer.join();
        }
        /* optional uint32 parent_quest_id = 7; */
        if (message.parentQuestId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.parentQuestId);
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
 * @generated MessageType for protobuf message com.midnights.game.GetQuestTalkHistoryRsp
 */
exports.GetQuestTalkHistoryRsp = new GetQuestTalkHistoryRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestCreateEntityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestCreateEntityReq", [
            { no: 9, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_rewind", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "entity", kind: "message", T: () => define_1.CreateEntityInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 parent_quest_id */ 9:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional bool is_rewind */ 3:
                    message.isRewind = reader.bool();
                    break;
                case /* optional uint32 quest_id */ 2:
                    message.questId = reader.uint32();
                    break;
                case /* optional com.midnights.game.CreateEntityInfo entity */ 13:
                    message.entity = define_1.CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 parent_quest_id = 9; */
        if (message.parentQuestId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* optional bool is_rewind = 3; */
        if (message.isRewind !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isRewind);
        /* optional uint32 quest_id = 2; */
        if (message.questId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional com.midnights.game.CreateEntityInfo entity = 13; */
        if (message.entity)
            define_1.CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestCreateEntityReq
 */
exports.QuestCreateEntityReq = new QuestCreateEntityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestCreateEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestCreateEntityRsp", [
            { no: 13, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "entity", kind: "message", T: () => define_1.CreateEntityInfo },
            { no: 1, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_rewind", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 quest_id */ 13:
                    message.questId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.CreateEntityInfo entity */ 11:
                    message.entity = define_1.CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
                    break;
                case /* optional uint32 parent_quest_id */ 1:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional bool is_rewind */ 14:
                    message.isRewind = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_id = 13; */
        if (message.questId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.CreateEntityInfo entity = 11; */
        if (message.entity)
            define_1.CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 parent_quest_id = 1; */
        if (message.parentQuestId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* optional bool is_rewind = 14; */
        if (message.isRewind !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isRewind);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestCreateEntityRsp
 */
exports.QuestCreateEntityRsp = new QuestCreateEntityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestDestroyEntityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestDestroyEntityReq", [
            { no: 2, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 entity_id */ 9:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 quest_id */ 8:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 2; */
        if (message.sceneId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 entity_id = 9; */
        if (message.entityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 quest_id = 8; */
        if (message.questId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestDestroyEntityReq
 */
exports.QuestDestroyEntityReq = new QuestDestroyEntityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestDestroyEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestDestroyEntityRsp", [
            { no: 14, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 quest_id */ 14:
                    message.questId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 12:
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
        /* optional uint32 quest_id = 14; */
        if (message.questId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional uint32 scene_id = 9; */
        if (message.sceneId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 entity_id = 12; */
        if (message.entityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entityId);
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
 * @generated MessageType for protobuf message com.midnights.game.QuestDestroyEntityRsp
 */
exports.QuestDestroyEntityRsp = new QuestDestroyEntityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChapterStateNotify", [
            { no: 9, name: "chapter_state", kind: "enum", opt: true, T: () => ["com.midnights.game.ChapterState", ChapterState, "CHAPTER_STATE_"] },
            { no: 10, name: "need_player_level", kind: "message", T: () => exports.ChapterStateNotify_NeedPlayerLevel },
            { no: 1, name: "need_begin_time", kind: "message", T: () => exports.ChapterStateNotify_NeedBeginTime },
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
                case /* optional com.midnights.game.ChapterState chapter_state */ 9:
                    message.chapterState = reader.int32();
                    break;
                case /* optional com.midnights.game.ChapterStateNotify.NeedPlayerLevel need_player_level */ 10:
                    message.needPlayerLevel = exports.ChapterStateNotify_NeedPlayerLevel.internalBinaryRead(reader, reader.uint32(), options, message.needPlayerLevel);
                    break;
                case /* optional com.midnights.game.ChapterStateNotify.NeedBeginTime need_begin_time */ 1:
                    message.needBeginTime = exports.ChapterStateNotify_NeedBeginTime.internalBinaryRead(reader, reader.uint32(), options, message.needBeginTime);
                    break;
                case /* optional uint32 chapter_id */ 2:
                    message.chapterId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ChapterState chapter_state = 9; */
        if (message.chapterState !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.chapterState);
        /* optional com.midnights.game.ChapterStateNotify.NeedPlayerLevel need_player_level = 10; */
        if (message.needPlayerLevel)
            exports.ChapterStateNotify_NeedPlayerLevel.internalBinaryWrite(message.needPlayerLevel, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ChapterStateNotify.NeedBeginTime need_begin_time = 1; */
        if (message.needBeginTime)
            exports.ChapterStateNotify_NeedBeginTime.internalBinaryWrite(message.needBeginTime, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 chapter_id = 2; */
        if (message.chapterId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChapterStateNotify
 */
exports.ChapterStateNotify = new ChapterStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify_NeedPlayerLevel$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChapterStateNotify.NeedPlayerLevel", [
            { no: 2, name: "is_limit", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "config_need_player_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_limit */ 2:
                    message.isLimit = reader.bool();
                    break;
                case /* optional uint32 config_need_player_level */ 11:
                    message.configNeedPlayerLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_limit = 2; */
        if (message.isLimit !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isLimit);
        /* optional uint32 config_need_player_level = 11; */
        if (message.configNeedPlayerLevel !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.configNeedPlayerLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChapterStateNotify.NeedPlayerLevel
 */
exports.ChapterStateNotify_NeedPlayerLevel = new ChapterStateNotify_NeedPlayerLevel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify_NeedBeginTime$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChapterStateNotify.NeedBeginTime", [
            { no: 3, name: "config_need_begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_limit", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 config_need_begin_time */ 3:
                    message.configNeedBeginTime = reader.uint32();
                    break;
                case /* optional bool is_limit */ 7:
                    message.isLimit = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 config_need_begin_time = 3; */
        if (message.configNeedBeginTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.configNeedBeginTime);
        /* optional bool is_limit = 7; */
        if (message.isLimit !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChapterStateNotify.NeedBeginTime
 */
exports.ChapterStateNotify_NeedBeginTime = new ChapterStateNotify_NeedBeginTime$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestProgressUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestProgressUpdateNotify", [
            { no: 12, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "fail_progress_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "finish_progress_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { failProgressList: [], finishProgressList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 quest_id */ 12:
                    message.questId = reader.uint32();
                    break;
                case /* repeated uint32 fail_progress_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.failProgressList.push(reader.uint32());
                    else
                        message.failProgressList.push(reader.uint32());
                    break;
                case /* repeated uint32 finish_progress_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishProgressList.push(reader.uint32());
                    else
                        message.finishProgressList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_id = 12; */
        if (message.questId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.questId);
        /* repeated uint32 fail_progress_list = 6; */
        if (message.failProgressList.length) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.failProgressList.length; i++)
                writer.uint32(message.failProgressList[i]);
            writer.join();
        }
        /* repeated uint32 finish_progress_list = 13; */
        if (message.finishProgressList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishProgressList.length; i++)
                writer.uint32(message.finishProgressList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestProgressUpdateNotify
 */
exports.QuestProgressUpdateNotify = new QuestProgressUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestVarOp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestVarOp", [
            { no: 9, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "value", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "is_add", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 index */ 9:
                    message.index = reader.uint32();
                    break;
                case /* optional int32 value */ 5:
                    message.value = reader.int32();
                    break;
                case /* optional bool is_add */ 6:
                    message.isAdd = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 index = 9; */
        if (message.index !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.index);
        /* optional int32 value = 5; */
        if (message.value !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.value);
        /* optional bool is_add = 6; */
        if (message.isAdd !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAdd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestVarOp
 */
exports.QuestVarOp = new QuestVarOp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestUpdateQuestVarReq", [
            { no: 9, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "quest_var_op_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.QuestVarOp },
            { no: 11, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "parent_quest_var_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { questVarOpList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 parent_quest_id */ 9:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.QuestVarOp quest_var_op_list */ 4:
                    message.questVarOpList.push(exports.QuestVarOp.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 quest_id */ 11:
                    message.questId = reader.uint32();
                    break;
                case /* optional uint32 parent_quest_var_seq */ 1:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 parent_quest_id = 9; */
        if (message.parentQuestId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* repeated com.midnights.game.QuestVarOp quest_var_op_list = 4; */
        for (let i = 0; i < message.questVarOpList.length; i++)
            exports.QuestVarOp.internalBinaryWrite(message.questVarOpList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 quest_id = 11; */
        if (message.questId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional uint32 parent_quest_var_seq = 1; */
        if (message.parentQuestVarSeq !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.parentQuestVarSeq);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestUpdateQuestVarReq
 */
exports.QuestUpdateQuestVarReq = new QuestUpdateQuestVarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestUpdateQuestVarRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "parent_quest_var_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 parent_quest_var_seq */ 2:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                case /* optional uint32 parent_quest_id */ 8:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional uint32 quest_id */ 15:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 parent_quest_var_seq = 2; */
        if (message.parentQuestVarSeq !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.parentQuestVarSeq);
        /* optional uint32 parent_quest_id = 8; */
        if (message.parentQuestId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* optional uint32 quest_id = 15; */
        if (message.questId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestUpdateQuestVarRsp
 */
exports.QuestUpdateQuestVarRsp = new QuestUpdateQuestVarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestUpdateQuestVarNotify", [
            { no: 1, name: "quest_var", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "parent_quest_var_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { questVar: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 quest_var */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.questVar.push(reader.int32());
                    else
                        message.questVar.push(reader.int32());
                    break;
                case /* optional uint32 parent_quest_id */ 12:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* optional uint32 parent_quest_var_seq */ 8:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int32 quest_var = 1; */
        if (message.questVar.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.questVar.length; i++)
                writer.int32(message.questVar[i]);
            writer.join();
        }
        /* optional uint32 parent_quest_id = 12; */
        if (message.parentQuestId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* optional uint32 parent_quest_var_seq = 8; */
        if (message.parentQuestVarSeq !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.parentQuestVarSeq);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestUpdateQuestVarNotify
 */
exports.QuestUpdateQuestVarNotify = new QuestUpdateQuestVarNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestDestroyNpcReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestDestroyNpcReq", [
            { no: 1, name: "npc_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 npc_id */ 1:
                    message.npcId = reader.uint32();
                    break;
                case /* optional uint32 parent_quest_id */ 12:
                    message.parentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 npc_id = 1; */
        if (message.npcId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.npcId);
        /* optional uint32 parent_quest_id = 12; */
        if (message.parentQuestId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestDestroyNpcReq
 */
exports.QuestDestroyNpcReq = new QuestDestroyNpcReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestDestroyNpcRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestDestroyNpcRsp", [
            { no: 12, name: "npc_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 npc_id */ 12:
                    message.npcId = reader.uint32();
                    break;
                case /* optional uint32 parent_quest_id */ 4:
                    message.parentQuestId = reader.uint32();
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
        /* optional uint32 npc_id = 12; */
        if (message.npcId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.npcId);
        /* optional uint32 parent_quest_id = 4; */
        if (message.parentQuestId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.parentQuestId);
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
 * @generated MessageType for protobuf message com.midnights.game.QuestDestroyNpcRsp
 */
exports.QuestDestroyNpcRsp = new QuestDestroyNpcRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BargainSnapshot$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BargainSnapshot", [
            { no: 3, name: "expected_price", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_mood", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "price_low_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "bargain_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 expected_price */ 3:
                    message.expectedPrice = reader.uint32();
                    break;
                case /* optional int32 cur_mood */ 14:
                    message.curMood = reader.int32();
                    break;
                case /* optional uint32 price_low_limit */ 2:
                    message.priceLowLimit = reader.uint32();
                    break;
                case /* optional uint32 bargain_id */ 5:
                    message.bargainId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 expected_price = 3; */
        if (message.expectedPrice !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.expectedPrice);
        /* optional int32 cur_mood = 14; */
        if (message.curMood !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.curMood);
        /* optional uint32 price_low_limit = 2; */
        if (message.priceLowLimit !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.priceLowLimit);
        /* optional uint32 bargain_id = 5; */
        if (message.bargainId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.bargainId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BargainSnapshot
 */
exports.BargainSnapshot = new BargainSnapshot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BargainStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BargainStartNotify", [
            { no: 4, name: "bargain_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "snapshot", kind: "message", T: () => exports.BargainSnapshot }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 bargain_id */ 4:
                    message.bargainId = reader.uint32();
                    break;
                case /* optional com.midnights.game.BargainSnapshot snapshot */ 2:
                    message.snapshot = exports.BargainSnapshot.internalBinaryRead(reader, reader.uint32(), options, message.snapshot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 bargain_id = 4; */
        if (message.bargainId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.bargainId);
        /* optional com.midnights.game.BargainSnapshot snapshot = 2; */
        if (message.snapshot)
            exports.BargainSnapshot.internalBinaryWrite(message.snapshot, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BargainStartNotify
 */
exports.BargainStartNotify = new BargainStartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BargainOfferPriceReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BargainOfferPriceReq", [
            { no: 4, name: "bargain_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "price", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 bargain_id */ 4:
                    message.bargainId = reader.uint32();
                    break;
                case /* optional uint32 price */ 6:
                    message.price = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 bargain_id = 4; */
        if (message.bargainId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.bargainId);
        /* optional uint32 price = 6; */
        if (message.price !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.price);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BargainOfferPriceReq
 */
exports.BargainOfferPriceReq = new BargainOfferPriceReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BargainOfferPriceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BargainOfferPriceRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "result_param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "bargain_result", kind: "enum", opt: true, T: () => ["com.midnights.game.BargainResultType", BargainResultType] },
            { no: 6, name: "cur_mood", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 result_param */ 13:
                    message.resultParam = reader.uint32();
                    break;
                case /* optional com.midnights.game.BargainResultType bargain_result */ 14:
                    message.bargainResult = reader.int32();
                    break;
                case /* optional int32 cur_mood */ 6:
                    message.curMood = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 result_param = 13; */
        if (message.resultParam !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.resultParam);
        /* optional com.midnights.game.BargainResultType bargain_result = 14; */
        if (message.bargainResult !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.bargainResult);
        /* optional int32 cur_mood = 6; */
        if (message.curMood !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.curMood);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BargainOfferPriceRsp
 */
exports.BargainOfferPriceRsp = new BargainOfferPriceRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BargainTerminateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BargainTerminateNotify", [
            { no: 15, name: "bargain_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 bargain_id */ 15:
                    message.bargainId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 bargain_id = 15; */
        if (message.bargainId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.bargainId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BargainTerminateNotify
 */
exports.BargainTerminateNotify = new BargainTerminateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBargainDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBargainDataReq", [
            { no: 12, name: "bargain_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 bargain_id */ 12:
                    message.bargainId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 bargain_id = 12; */
        if (message.bargainId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.bargainId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBargainDataReq
 */
exports.GetBargainDataReq = new GetBargainDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBargainDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBargainDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "bargain_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "snapshot", kind: "message", T: () => exports.BargainSnapshot }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 bargain_id */ 14:
                    message.bargainId = reader.uint32();
                    break;
                case /* optional com.midnights.game.BargainSnapshot snapshot */ 13:
                    message.snapshot = exports.BargainSnapshot.internalBinaryRead(reader, reader.uint32(), options, message.snapshot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 bargain_id = 14; */
        if (message.bargainId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.bargainId);
        /* optional com.midnights.game.BargainSnapshot snapshot = 13; */
        if (message.snapshot)
            exports.BargainSnapshot.internalBinaryWrite(message.snapshot, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBargainDataRsp
 */
exports.GetBargainDataRsp = new GetBargainDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllActivatedBargainDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllActivatedBargainDataReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetAllActivatedBargainDataReq
 */
exports.GetAllActivatedBargainDataReq = new GetAllActivatedBargainDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllActivatedBargainDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllActivatedBargainDataRsp", [
            { no: 5, name: "snapshot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.BargainSnapshot },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { snapshotList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.BargainSnapshot snapshot_list */ 5:
                    message.snapshotList.push(exports.BargainSnapshot.internalBinaryRead(reader, reader.uint32(), options));
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.BargainSnapshot snapshot_list = 5; */
        for (let i = 0; i < message.snapshotList.length; i++)
            exports.BargainSnapshot.internalBinaryWrite(message.snapshotList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GetAllActivatedBargainDataRsp
 */
exports.GetAllActivatedBargainDataRsp = new GetAllActivatedBargainDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerCondMeetQuestListUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerCondMeetQuestListUpdateNotify", [
            { no: 1, name: "del_quest_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "add_quest_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { delQuestIdList: [], addQuestIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 del_quest_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.delQuestIdList.push(reader.uint32());
                    else
                        message.delQuestIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 add_quest_id_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.addQuestIdList.push(reader.uint32());
                    else
                        message.addQuestIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 del_quest_id_list = 1; */
        if (message.delQuestIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.delQuestIdList.length; i++)
                writer.uint32(message.delQuestIdList[i]);
            writer.join();
        }
        /* repeated uint32 add_quest_id_list = 12; */
        if (message.addQuestIdList.length) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.addQuestIdList.length; i++)
                writer.uint32(message.addQuestIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerCondMeetQuestListUpdateNotify
 */
exports.ServerCondMeetQuestListUpdateNotify = new ServerCondMeetQuestListUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestGlobalVar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestGlobalVar", [
            { no: 8, name: "value", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "key", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 value */ 8:
                    message.value = reader.int32();
                    break;
                case /* optional uint32 key */ 4:
                    message.key = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 value = 8; */
        if (message.value !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.value);
        /* optional uint32 key = 4; */
        if (message.key !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestGlobalVar
 */
exports.QuestGlobalVar = new QuestGlobalVar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestGlobalVarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestGlobalVarNotify", [
            { no: 1, name: "var_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.QuestGlobalVar }
        ]);
    }
    create(value) {
        const message = { varList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.QuestGlobalVar var_list */ 1:
                    message.varList.push(exports.QuestGlobalVar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.QuestGlobalVar var_list = 1; */
        for (let i = 0; i < message.varList.length; i++)
            exports.QuestGlobalVar.internalBinaryWrite(message.varList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestGlobalVarNotify
 */
exports.QuestGlobalVarNotify = new QuestGlobalVarNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestTransmitReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestTransmitReq", [
            { no: 15, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 point_id */ 15:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 quest_id */ 5:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 point_id = 15; */
        if (message.pointId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional uint32 quest_id = 5; */
        if (message.questId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestTransmitReq
 */
exports.QuestTransmitReq = new QuestTransmitReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestTransmitRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestTransmitRsp", [
            { no: 12, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 quest_id */ 3:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 point_id = 12; */
        if (message.pointId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 quest_id = 3; */
        if (message.questId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestTransmitRsp
 */
exports.QuestTransmitRsp = new QuestTransmitRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PersonalLineAllDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PersonalLineAllDataReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.PersonalLineAllDataReq
 */
exports.PersonalLineAllDataReq = new PersonalLineAllDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LockedPersonallineData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LockedPersonallineData", [
            { no: 2, name: "lock_reason", kind: "enum", opt: true, T: () => ["com.midnights.game.LockedPersonallineData.LockReason", LockedPersonallineData_LockReason] },
            { no: 13, name: "personal_line_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "chapter_id", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "level", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { param: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.LockedPersonallineData.LockReason lock_reason */ 2:
                    message.lockReason = reader.int32();
                    break;
                case /* optional uint32 personal_line_id */ 13:
                    message.personalLineId = reader.uint32();
                    break;
                case /* uint32 chapter_id */ 3:
                    message.param = {
                        oneofKind: "chapterId",
                        chapterId: reader.uint32()
                    };
                    break;
                case /* uint32 level */ 1:
                    message.param = {
                        oneofKind: "level",
                        level: reader.uint32()
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
        /* optional com.midnights.game.LockedPersonallineData.LockReason lock_reason = 2; */
        if (message.lockReason !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.lockReason);
        /* optional uint32 personal_line_id = 13; */
        if (message.personalLineId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.personalLineId);
        /* uint32 chapter_id = 3; */
        if (message.param.oneofKind === "chapterId")
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.param.chapterId);
        /* uint32 level = 1; */
        if (message.param.oneofKind === "level")
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.param.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LockedPersonallineData
 */
exports.LockedPersonallineData = new LockedPersonallineData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PersonalLineAllDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PersonalLineAllDataRsp", [
            { no: 5, name: "cur_finished_daily_task_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "can_be_unlocked_personal_line_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "ongoing_personal_line_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "legendary_key_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "locked_personal_line_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.LockedPersonallineData }
        ]);
    }
    create(value) {
        const message = { canBeUnlockedPersonalLineList: [], ongoingPersonalLineList: [], lockedPersonalLineList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_finished_daily_task_count */ 5:
                    message.curFinishedDailyTaskCount = reader.uint32();
                    break;
                case /* repeated uint32 can_be_unlocked_personal_line_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.canBeUnlockedPersonalLineList.push(reader.uint32());
                    else
                        message.canBeUnlockedPersonalLineList.push(reader.uint32());
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 ongoing_personal_line_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.ongoingPersonalLineList.push(reader.uint32());
                    else
                        message.ongoingPersonalLineList.push(reader.uint32());
                    break;
                case /* optional uint32 legendary_key_count */ 11:
                    message.legendaryKeyCount = reader.uint32();
                    break;
                case /* repeated com.midnights.game.LockedPersonallineData locked_personal_line_list */ 10:
                    message.lockedPersonalLineList.push(exports.LockedPersonallineData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_finished_daily_task_count = 5; */
        if (message.curFinishedDailyTaskCount !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.curFinishedDailyTaskCount);
        /* repeated uint32 can_be_unlocked_personal_line_list = 13; */
        if (message.canBeUnlockedPersonalLineList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.canBeUnlockedPersonalLineList.length; i++)
                writer.uint32(message.canBeUnlockedPersonalLineList[i]);
            writer.join();
        }
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated uint32 ongoing_personal_line_list = 8; */
        if (message.ongoingPersonalLineList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.ongoingPersonalLineList.length; i++)
                writer.uint32(message.ongoingPersonalLineList[i]);
            writer.join();
        }
        /* optional uint32 legendary_key_count = 11; */
        if (message.legendaryKeyCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.legendaryKeyCount);
        /* repeated com.midnights.game.LockedPersonallineData locked_personal_line_list = 10; */
        for (let i = 0; i < message.lockedPersonalLineList.length; i++)
            exports.LockedPersonallineData.internalBinaryWrite(message.lockedPersonalLineList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PersonalLineAllDataRsp
 */
exports.PersonalLineAllDataRsp = new PersonalLineAllDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RedeemLegendaryKeyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RedeemLegendaryKeyReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.RedeemLegendaryKeyReq
 */
exports.RedeemLegendaryKeyReq = new RedeemLegendaryKeyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RedeemLegendaryKeyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RedeemLegendaryKeyRsp", [
            { no: 11, name: "legendary_key_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 legendary_key_count */ 11:
                    message.legendaryKeyCount = reader.uint32();
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
        /* optional uint32 legendary_key_count = 11; */
        if (message.legendaryKeyCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.legendaryKeyCount);
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
 * @generated MessageType for protobuf message com.midnights.game.RedeemLegendaryKeyRsp
 */
exports.RedeemLegendaryKeyRsp = new RedeemLegendaryKeyRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockPersonalLineReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockPersonalLineReq", [
            { no: 4, name: "personal_line_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 personal_line_id */ 4:
                    message.personalLineId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 personal_line_id = 4; */
        if (message.personalLineId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.personalLineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockPersonalLineReq
 */
exports.UnlockPersonalLineReq = new UnlockPersonalLineReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockPersonalLineRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockPersonalLineRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "personal_line_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "level", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "chapter_id", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { param: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 personal_line_id */ 10:
                    message.personalLineId = reader.uint32();
                    break;
                case /* uint32 level */ 11:
                    message.param = {
                        oneofKind: "level",
                        level: reader.uint32()
                    };
                    break;
                case /* uint32 chapter_id */ 6:
                    message.param = {
                        oneofKind: "chapterId",
                        chapterId: reader.uint32()
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
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 personal_line_id = 10; */
        if (message.personalLineId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.personalLineId);
        /* uint32 level = 11; */
        if (message.param.oneofKind === "level")
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.param.level);
        /* uint32 chapter_id = 6; */
        if (message.param.oneofKind === "chapterId")
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.param.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockPersonalLineRsp
 */
exports.UnlockPersonalLineRsp = new UnlockPersonalLineRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CancelFinishParentQuestNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CancelFinishParentQuestNotify", [
            { no: 6, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 parent_quest_id */ 6:
                    message.parentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 parent_quest_id = 6; */
        if (message.parentQuestId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CancelFinishParentQuestNotify
 */
exports.CancelFinishParentQuestNotify = new CancelFinishParentQuestNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestTimeVarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.QuestUpdateQuestTimeVarNotify", [
            { no: 1, name: "time_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { timeVarMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> time_var_map */ 1:
                    this.binaryReadMap1(message.timeVarMap, reader, options);
                    break;
                case /* optional uint32 parent_quest_id */ 3:
                    message.parentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.QuestUpdateQuestTimeVarNotify.time_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> time_var_map = 1; */
        for (let k of Object.keys(message.timeVarMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.timeVarMap[k]).join();
        /* optional uint32 parent_quest_id = 3; */
        if (message.parentQuestId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.QuestUpdateQuestTimeVarNotify
 */
exports.QuestUpdateQuestTimeVarNotify = new QuestUpdateQuestTimeVarNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PersonalLineNewUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PersonalLineNewUnlockNotify", [
            { no: 9, name: "personal_line_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { personalLineIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 personal_line_id_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.personalLineIdList.push(reader.uint32());
                    else
                        message.personalLineIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 personal_line_id_list = 9; */
        if (message.personalLineIdList.length) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.personalLineIdList.length; i++)
                writer.uint32(message.personalLineIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PersonalLineNewUnlockNotify
 */
exports.PersonalLineNewUnlockNotify = new PersonalLineNewUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NpcTalkStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NpcTalkStateNotify", [
            { no: 5, name: "is_ban", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_ban */ 5:
                    message.isBan = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_ban = 5; */
        if (message.isBan !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isBan);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NpcTalkStateNotify
 */
exports.NpcTalkStateNotify = new NpcTalkStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetQuestLackingResourceReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetQuestLackingResourceReq", [
            { no: 4, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 quest_id */ 4:
                    message.questId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_id = 4; */
        if (message.questId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetQuestLackingResourceReq
 */
exports.GetQuestLackingResourceReq = new GetQuestLackingResourceReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetQuestLackingResourceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetQuestLackingResourceRsp", [
            { no: 4, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "lacked_npc_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "lacked_place_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "lacked_npc_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "lacked_place_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { lackedNpcList: [], lackedPlaceList: [], lackedNpcMap: {}, lackedPlaceMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 quest_id */ 4:
                    message.questId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 lacked_npc_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedNpcList.push(reader.uint32());
                    else
                        message.lackedNpcList.push(reader.uint32());
                    break;
                case /* repeated uint32 lacked_place_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedPlaceList.push(reader.uint32());
                    else
                        message.lackedPlaceList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> lacked_npc_map */ 10:
                    this.binaryReadMap10(message.lackedNpcMap, reader, options);
                    break;
                case /* map<uint32, uint32> lacked_place_map */ 2:
                    this.binaryReadMap2(message.lackedPlaceMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GetQuestLackingResourceRsp.lacked_npc_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GetQuestLackingResourceRsp.lacked_place_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 quest_id = 4; */
        if (message.questId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated uint32 lacked_npc_list = 8; */
        if (message.lackedNpcList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lackedNpcList.length; i++)
                writer.uint32(message.lackedNpcList[i]);
            writer.join();
        }
        /* repeated uint32 lacked_place_list = 5; */
        if (message.lackedPlaceList.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lackedPlaceList.length; i++)
                writer.uint32(message.lackedPlaceList[i]);
            writer.join();
        }
        /* map<uint32, uint32> lacked_npc_map = 10; */
        for (let k of Object.keys(message.lackedNpcMap))
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.lackedNpcMap[k]).join();
        /* map<uint32, uint32> lacked_place_map = 2; */
        for (let k of Object.keys(message.lackedPlaceMap))
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.lackedPlaceMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetQuestLackingResourceRsp
 */
exports.GetQuestLackingResourceRsp = new GetQuestLackingResourceRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetParentQuestVideoKeyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetParentQuestVideoKeyReq", [
            { no: 15, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 parent_quest_id */ 15:
                    message.parentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 parent_quest_id = 15; */
        if (message.parentQuestId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetParentQuestVideoKeyReq
 */
exports.GetParentQuestVideoKeyReq = new GetParentQuestVideoKeyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetParentQuestVideoKeyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetParentQuestVideoKeyRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "video_key", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint64 video_key */ 14:
                    message.videoKey = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 parent_quest_id */ 10:
                    message.parentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint64 video_key = 14; */
        if (message.videoKey !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.videoKey);
        /* optional uint32 parent_quest_id = 10; */
        if (message.parentQuestId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetParentQuestVideoKeyRsp
 */
exports.GetParentQuestVideoKeyRsp = new GetParentQuestVideoKeyRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ParentQuestInferenceDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ParentQuestInferenceDataNotify", [
            { no: 2, name: "parent_quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "inference_page_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InferencePageInfo }
        ]);
    }
    create(value) {
        const message = { inferencePageList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 parent_quest_id */ 2:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.InferencePageInfo inference_page_list */ 1:
                    message.inferencePageList.push(exports.InferencePageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 parent_quest_id = 2; */
        if (message.parentQuestId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* repeated com.midnights.game.InferencePageInfo inference_page_list = 1; */
        for (let i = 0; i < message.inferencePageList.length; i++)
            exports.InferencePageInfo.internalBinaryWrite(message.inferencePageList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ParentQuestInferenceDataNotify
 */
exports.ParentQuestInferenceDataNotify = new ParentQuestInferenceDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InterpretInferenceWordReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InterpretInferenceWordReq", [
            { no: 2, name: "word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "page_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 word_id */ 2:
                    message.wordId = reader.uint32();
                    break;
                case /* optional uint32 page_id */ 4:
                    message.pageId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 word_id = 2; */
        if (message.wordId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.wordId);
        /* optional uint32 page_id = 4; */
        if (message.pageId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.pageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InterpretInferenceWordReq
 */
exports.InterpretInferenceWordReq = new InterpretInferenceWordReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InterpretInferenceWordRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InterpretInferenceWordRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "page_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 word_id */ 14:
                    message.wordId = reader.uint32();
                    break;
                case /* optional uint32 page_id */ 13:
                    message.pageId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 word_id = 14; */
        if (message.wordId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.wordId);
        /* optional uint32 page_id = 13; */
        if (message.pageId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.pageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InterpretInferenceWordRsp
 */
exports.InterpretInferenceWordRsp = new InterpretInferenceWordRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AssociateInferenceWordReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AssociateInferenceWordReq", [
            { no: 7, name: "base_word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "page_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "associate_word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 base_word_id */ 7:
                    message.baseWordId = reader.uint32();
                    break;
                case /* optional uint32 page_id */ 11:
                    message.pageId = reader.uint32();
                    break;
                case /* optional uint32 associate_word_id */ 2:
                    message.associateWordId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 base_word_id = 7; */
        if (message.baseWordId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.baseWordId);
        /* optional uint32 page_id = 11; */
        if (message.pageId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.pageId);
        /* optional uint32 associate_word_id = 2; */
        if (message.associateWordId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.associateWordId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AssociateInferenceWordReq
 */
exports.AssociateInferenceWordReq = new AssociateInferenceWordReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AssociateInferenceWordRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AssociateInferenceWordRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "base_word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "associate_word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "page_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 base_word_id */ 14:
                    message.baseWordId = reader.uint32();
                    break;
                case /* optional uint32 associate_word_id */ 13:
                    message.associateWordId = reader.uint32();
                    break;
                case /* optional uint32 page_id */ 1:
                    message.pageId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 base_word_id = 14; */
        if (message.baseWordId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.baseWordId);
        /* optional uint32 associate_word_id = 13; */
        if (message.associateWordId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.associateWordId);
        /* optional uint32 page_id = 1; */
        if (message.pageId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.pageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AssociateInferenceWordRsp
 */
exports.AssociateInferenceWordRsp = new AssociateInferenceWordRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubmitInferenceWordReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SubmitInferenceWordReq", [
            { no: 4, name: "word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "page_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 word_id */ 4:
                    message.wordId = reader.uint32();
                    break;
                case /* optional uint32 page_id */ 9:
                    message.pageId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 word_id = 4; */
        if (message.wordId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.wordId);
        /* optional uint32 page_id = 9; */
        if (message.pageId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.pageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SubmitInferenceWordReq
 */
exports.SubmitInferenceWordReq = new SubmitInferenceWordReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubmitInferenceWordRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SubmitInferenceWordRsp", [
            { no: 2, name: "word_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "page_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "conclusion_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 word_id */ 2:
                    message.wordId = reader.uint32();
                    break;
                case /* optional uint32 page_id */ 13:
                    message.pageId = reader.uint32();
                    break;
                case /* optional uint32 conclusion_id */ 5:
                    message.conclusionId = reader.uint32();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 word_id = 2; */
        if (message.wordId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.wordId);
        /* optional uint32 page_id = 13; */
        if (message.pageId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.pageId);
        /* optional uint32 conclusion_id = 5; */
        if (message.conclusionId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.conclusionId);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SubmitInferenceWordRsp
 */
exports.SubmitInferenceWordRsp = new SubmitInferenceWordRsp$Type();
