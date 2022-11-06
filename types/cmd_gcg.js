"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGApplyInviteBattleRsp_CmdId = exports.GCGApplyInviteBattleReq_CmdId = exports.GCGInviteBattleNotify_CmdId = exports.GCGInviteGuestBattleRsp_CmdId = exports.GCGInviteGuestBattleReq_CmdId = exports.GCGGrowthLevelTakeRewardRsp_CmdId = exports.GCGGrowthLevelTakeRewardReq_CmdId = exports.GCGGrowthLevelRewardNotify_CmdId = exports.GCGGrowthLevelNotify_CmdId = exports.GCGTCTavernChallengeUpdateNotify_CmdId = exports.GCGTCTavernChallengeDataNotify_CmdId = exports.GCGTCInviteRsp_CmdId = exports.GCGTCInviteReq_CmdId = exports.GCGTCTavernInfoNotify_CmdId = exports.GCGDSCardProficiencyNotify_CmdId = exports.GCGDSDeckUnlockNotify_CmdId = exports.GCGDSDeleteDeckRsp_CmdId = exports.GCGDSDeleteDeckReq_CmdId = exports.GCGDSCurDeckChangeNotify_CmdId = exports.GCGDSChangeCurDeckRsp_CmdId = exports.GCGDSChangeCurDeckReq_CmdId = exports.GCGDSDeckSaveRsp_CmdId = exports.GCGDSDeckSaveReq_CmdId = exports.GCGDSChangeDeckNameRsp_CmdId = exports.GCGDSChangeDeckNameReq_CmdId = exports.GCGDSChangeFieldRsp_CmdId = exports.GCGDSChangeFieldReq_CmdId = exports.GCGDSChangeCardBackRsp_CmdId = exports.GCGDSChangeCardBackReq_CmdId = exports.GCGDSChangeCardFaceRsp_CmdId = exports.GCGDSChangeCardFaceReq_CmdId = exports.GCGDSCardNumChangeNotify_CmdId = exports.GCGDSCardFaceUnlockNotify_CmdId = exports.GCGDSFieldUnlockNotify_CmdId = exports.GCGDSCardBackUnlockNotify_CmdId = exports.GCGDSDataNotify_CmdId = exports.GCGChallengeUpdateNotify_CmdId = exports.GCGSkillPreviewAskRsp_CmdId = exports.GCGSkillPreviewAskReq_CmdId = exports.GCGSkillPreviewNotify_CmdId = exports.GCGHeartBeatNotify_CmdId = exports.GCGInitFinishRsp_CmdId = exports.GCGInitFinishReq_CmdId = exports.GCGGameBriefDataNotify_CmdId = exports.GCGAskDuelRsp_CmdId = exports.GCGAskDuelReq_CmdId = exports.GCGMessagePackNotify_CmdId = exports.GCGOperationRsp_CmdId = exports.GCGOperationReq_CmdId = exports.GCGNewCardInfoNotify_CmdId = void 0;
exports.GCGMsgWaitingListChange = exports.GCGMsgOpTimer = exports.GCGMsgGameOver = exports.GCGMsgClientPerform = exports.GCGMsgDuelDataChange = exports.GCGMsgPVEDoOp = exports.GCGMsgPVEGenCardOp = exports.GCGMsgModifyRemove = exports.GCGMsgModifyAdd = exports.GCGMsgUpdateController = exports.GCGMsgNewCard = exports.GCGMsgAddDice = exports.GCGMsgCostDice = exports.GCGMsgSkillResult = exports.GCGDamageDetail = exports.GCGMsgUseSkillEnd = exports.GCGMsgUseSkill = exports.GCGMsgCharDie = exports.GCGMsgPass = exports.GCGMsgDiceReroll = exports.GCGMsgDiceRoll = exports.GCGMsgSelectOnStageByEffect = exports.GCGMsgSelectOnStage = exports.GCGMsgMoveCard = exports.GCGMsgRemoveCards = exports.GCGMsgAddCards = exports.GCGMsgPhaseChange = exports.GCGMsgTokenChange = exports.GCGCostReviseInfo = exports.GCGSelectOnStageCostInfo = exports.GCGPlayCardCostInfo = exports.GCGAttackCostInfo = exports.GCGSettleOption = exports.GCGSkillHpChangeType = exports.GCGBossChallengeUpdateNotify_CmdId = exports.GCGWorldChallengeUnlockNotify_CmdId = exports.GCGLevelChallengeFinishNotify_CmdId = exports.GCGLevelChallengeNotify_CmdId = exports.GCGWeekChallengeInfoNotify_CmdId = exports.GCGStartChallengeRsp_CmdId = exports.GCGStartChallengeReq_CmdId = exports.GCGTavernNpcInfoNotify_CmdId = exports.GCGBasicDataNotify_CmdId = exports.GCGSettleOptionRsp_CmdId = exports.GCGSettleOptionReq_CmdId = exports.GCGClientSettleRsp_CmdId = exports.GCGClientSettleReq_CmdId = exports.GCGResourceStateNotify_CmdId = exports.GCGSettleNotify_CmdId = exports.GCGApplyInviteBattleNotify_CmdId = void 0;
exports.GCGDSDeckData = exports.GCGChallengeUpdateNotify = exports.GCGSkillPreviewAskRsp = exports.GCGSkillPreviewAskReq = exports.GCGSkillPreviewNotify = exports.GCGSkillPreviewInfo = exports.GCGSkillPreviewTokenChangeInfo = exports.GCGSkillPreviewTokenInfo = exports.GCGSkillPreviewOnstageChangeInfo = exports.GCGSkillPreviewCardInfo = exports.GCGSkillPreviewElementReactionInfo = exports.GCGSkillPreviewReactionInfo = exports.GCGSkillPreviewHpInfo = exports.GCGHeartBeatNotify = exports.GCGInitFinishRsp = exports.GCGInitFinishReq = exports.GCGGameBriefDataNotify = exports.GCGGameBriefData = exports.GCGPlayerBriefData = exports.GCGAskDuelRsp = exports.GCGAskDuelReq = exports.GCGMessagePackNotify = exports.GCGOperationRsp = exports.GCGOperationReq = exports.GCGNewCardInfoNotify = exports.GCGDuel = exports.GCGDuelChallenge = exports.GCGPVEIntention = exports.GCGControllerShowInfo = exports.GCGPhase = exports.GCGPlayerField = exports.GCGWaitingCharacter = exports.GCGZone = exports.GCGCard = exports.GCGToken = exports.GCGOperationReplay = exports.GCGOperationData = exports.GCGOperation = exports.GCGOperationSurrender = exports.GCGOperationReboot = exports.GCGOperationPlayCard = exports.GCGOperationPass = exports.GCGOperationAttack = exports.GCGOperationReroll = exports.GCGOperationOnStageSelect = exports.GCGOperationRedraw = exports.GCGMessagePack = exports.GCGMessage = exports.GCGMsgCostRevise = exports.GCGMsgCardUpdate = void 0;
exports.GCGStartChallengeRsp = exports.GCGStartChallengeReq = exports.GCGTavernNpcInfoNotify = exports.GCGTavernNpcInfo = exports.GCGBasicDataNotify = exports.GCGSettleOptionRsp = exports.GCGSettleOptionReq = exports.GCGClientSettleRsp = exports.GCGClientSettleReq = exports.GCGResourceStateNotify = exports.GCGSettleNotify = exports.GCGApplyInviteBattleNotify = exports.GCGApplyInviteBattleRsp = exports.GCGApplyInviteBattleReq = exports.GCGInviteBattleNotify = exports.GCGInviteGuestBattleRsp = exports.GCGInviteGuestBattleReq = exports.GCGGrowthLevelTakeRewardRsp = exports.GCGGrowthLevelTakeRewardReq = exports.GCGGrowthLevelRewardNotify = exports.GCGGrowthLevelNotify = exports.GCGTCTavernChallengeUpdateNotify = exports.GCGTCTavernChallengeDataNotify = exports.GCGTCTavernChallengeData = exports.GCGTCInviteRsp = exports.GCGTCInviteReq = exports.GCGTCTavernInfoNotify = exports.GCGDSCardProficiencyNotify = exports.GCGDSDeckUnlockNotify = exports.GCGDSDeleteDeckRsp = exports.GCGDSDeleteDeckReq = exports.GCGDSCurDeckChangeNotify = exports.GCGDSChangeCurDeckRsp = exports.GCGDSChangeCurDeckReq = exports.GCGDSDeckSaveRsp = exports.GCGDSDeckSaveReq = exports.GCGDSChangeDeckNameRsp = exports.GCGDSChangeDeckNameReq = exports.GCGDSChangeFieldRsp = exports.GCGDSChangeFieldReq = exports.GCGDSChangeCardBackRsp = exports.GCGDSChangeCardBackReq = exports.GCGDSChangeCardFaceRsp = exports.GCGDSChangeCardFaceReq = exports.GCGDSCardNumChangeNotify = exports.GCGDSCardFaceUnlockNotify = exports.GCGDSFieldUnlockNotify = exports.GCGDSCardBackUnlockNotify = exports.GCGDSDataNotify = exports.GCGDSCardData = void 0;
exports.GCGBossChallengeUpdateNotify = exports.GCGWorldChallengeUnlockNotify = exports.GCGLevelChallengeFinishNotify = exports.GCGLevelChallengeNotify = exports.GCGBossChallengeData = exports.GCGLevelData = exports.GCGWeekChallengeInfoNotify = exports.GCGWeekChallengeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const cmd_gcg_common_1 = require("./cmd_gcg_common");
const define_1 = require("./define");
const cmd_gcg_common_2 = require("./cmd_gcg_common");
const define_2 = require("./define");
const cmd_gcg_common_3 = require("./cmd_gcg_common");
const cmd_gcg_common_4 = require("./cmd_gcg_common");
const cmd_gcg_common_5 = require("./cmd_gcg_common");
const cmd_gcg_common_6 = require("./cmd_gcg_common");
const cmd_gcg_common_7 = require("./cmd_gcg_common");
const cmd_gcg_common_8 = require("./cmd_gcg_common");
/**
 * @generated from protobuf enum com.midnights.game.GCGNewCardInfoNotify.CmdId
 */
var GCGNewCardInfoNotify_CmdId;
(function (GCGNewCardInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGNewCardInfoNotify_CmdId[GCGNewCardInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7203;
     */
    GCGNewCardInfoNotify_CmdId[GCGNewCardInfoNotify_CmdId["CMD_ID"] = 7203] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGNewCardInfoNotify_CmdId[GCGNewCardInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGNewCardInfoNotify_CmdId[GCGNewCardInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGNewCardInfoNotify_CmdId = exports.GCGNewCardInfoNotify_CmdId || (exports.GCGNewCardInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGOperationReq.CmdId
 */
var GCGOperationReq_CmdId;
(function (GCGOperationReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGOperationReq_CmdId[GCGOperationReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7107;
     */
    GCGOperationReq_CmdId[GCGOperationReq_CmdId["CMD_ID"] = 7107] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGOperationReq_CmdId[GCGOperationReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGOperationReq_CmdId[GCGOperationReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGOperationReq_CmdId[GCGOperationReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGOperationReq_CmdId = exports.GCGOperationReq_CmdId || (exports.GCGOperationReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGOperationRsp.CmdId
 */
var GCGOperationRsp_CmdId;
(function (GCGOperationRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGOperationRsp_CmdId[GCGOperationRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7600;
     */
    GCGOperationRsp_CmdId[GCGOperationRsp_CmdId["CMD_ID"] = 7600] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGOperationRsp_CmdId[GCGOperationRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGOperationRsp_CmdId[GCGOperationRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGOperationRsp_CmdId = exports.GCGOperationRsp_CmdId || (exports.GCGOperationRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGMessagePackNotify.CmdId
 */
var GCGMessagePackNotify_CmdId;
(function (GCGMessagePackNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGMessagePackNotify_CmdId[GCGMessagePackNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7516;
     */
    GCGMessagePackNotify_CmdId[GCGMessagePackNotify_CmdId["CMD_ID"] = 7516] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGMessagePackNotify_CmdId[GCGMessagePackNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGMessagePackNotify_CmdId[GCGMessagePackNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGMessagePackNotify_CmdId[GCGMessagePackNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGMessagePackNotify_CmdId = exports.GCGMessagePackNotify_CmdId || (exports.GCGMessagePackNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGAskDuelReq.CmdId
 */
var GCGAskDuelReq_CmdId;
(function (GCGAskDuelReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGAskDuelReq_CmdId[GCGAskDuelReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7237;
     */
    GCGAskDuelReq_CmdId[GCGAskDuelReq_CmdId["CMD_ID"] = 7237] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGAskDuelReq_CmdId[GCGAskDuelReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGAskDuelReq_CmdId[GCGAskDuelReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGAskDuelReq_CmdId[GCGAskDuelReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGAskDuelReq_CmdId = exports.GCGAskDuelReq_CmdId || (exports.GCGAskDuelReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGAskDuelRsp.CmdId
 */
var GCGAskDuelRsp_CmdId;
(function (GCGAskDuelRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGAskDuelRsp_CmdId[GCGAskDuelRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7869;
     */
    GCGAskDuelRsp_CmdId[GCGAskDuelRsp_CmdId["CMD_ID"] = 7869] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGAskDuelRsp_CmdId[GCGAskDuelRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGAskDuelRsp_CmdId[GCGAskDuelRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGAskDuelRsp_CmdId = exports.GCGAskDuelRsp_CmdId || (exports.GCGAskDuelRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGGameBriefDataNotify.CmdId
 */
var GCGGameBriefDataNotify_CmdId;
(function (GCGGameBriefDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGameBriefDataNotify_CmdId[GCGGameBriefDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7539;
     */
    GCGGameBriefDataNotify_CmdId[GCGGameBriefDataNotify_CmdId["CMD_ID"] = 7539] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGameBriefDataNotify_CmdId[GCGGameBriefDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGGameBriefDataNotify_CmdId[GCGGameBriefDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGGameBriefDataNotify_CmdId = exports.GCGGameBriefDataNotify_CmdId || (exports.GCGGameBriefDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGInitFinishReq.CmdId
 */
var GCGInitFinishReq_CmdId;
(function (GCGInitFinishReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInitFinishReq_CmdId[GCGInitFinishReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7684;
     */
    GCGInitFinishReq_CmdId[GCGInitFinishReq_CmdId["CMD_ID"] = 7684] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInitFinishReq_CmdId[GCGInitFinishReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGInitFinishReq_CmdId[GCGInitFinishReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGInitFinishReq_CmdId[GCGInitFinishReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGInitFinishReq_CmdId = exports.GCGInitFinishReq_CmdId || (exports.GCGInitFinishReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGInitFinishRsp.CmdId
 */
var GCGInitFinishRsp_CmdId;
(function (GCGInitFinishRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInitFinishRsp_CmdId[GCGInitFinishRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7433;
     */
    GCGInitFinishRsp_CmdId[GCGInitFinishRsp_CmdId["CMD_ID"] = 7433] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInitFinishRsp_CmdId[GCGInitFinishRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGInitFinishRsp_CmdId[GCGInitFinishRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGInitFinishRsp_CmdId = exports.GCGInitFinishRsp_CmdId || (exports.GCGInitFinishRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGHeartBeatNotify.CmdId
 */
var GCGHeartBeatNotify_CmdId;
(function (GCGHeartBeatNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGHeartBeatNotify_CmdId[GCGHeartBeatNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7224;
     */
    GCGHeartBeatNotify_CmdId[GCGHeartBeatNotify_CmdId["CMD_ID"] = 7224] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGHeartBeatNotify_CmdId[GCGHeartBeatNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGHeartBeatNotify_CmdId[GCGHeartBeatNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGHeartBeatNotify_CmdId = exports.GCGHeartBeatNotify_CmdId || (exports.GCGHeartBeatNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSkillPreviewNotify.CmdId
 */
var GCGSkillPreviewNotify_CmdId;
(function (GCGSkillPreviewNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSkillPreviewNotify_CmdId[GCGSkillPreviewNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7503;
     */
    GCGSkillPreviewNotify_CmdId[GCGSkillPreviewNotify_CmdId["CMD_ID"] = 7503] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSkillPreviewNotify_CmdId[GCGSkillPreviewNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSkillPreviewNotify_CmdId[GCGSkillPreviewNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGSkillPreviewNotify_CmdId = exports.GCGSkillPreviewNotify_CmdId || (exports.GCGSkillPreviewNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSkillPreviewAskReq.CmdId
 */
var GCGSkillPreviewAskReq_CmdId;
(function (GCGSkillPreviewAskReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSkillPreviewAskReq_CmdId[GCGSkillPreviewAskReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7509;
     */
    GCGSkillPreviewAskReq_CmdId[GCGSkillPreviewAskReq_CmdId["CMD_ID"] = 7509] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSkillPreviewAskReq_CmdId[GCGSkillPreviewAskReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSkillPreviewAskReq_CmdId[GCGSkillPreviewAskReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSkillPreviewAskReq_CmdId[GCGSkillPreviewAskReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGSkillPreviewAskReq_CmdId = exports.GCGSkillPreviewAskReq_CmdId || (exports.GCGSkillPreviewAskReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSkillPreviewAskRsp.CmdId
 */
var GCGSkillPreviewAskRsp_CmdId;
(function (GCGSkillPreviewAskRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSkillPreviewAskRsp_CmdId[GCGSkillPreviewAskRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7409;
     */
    GCGSkillPreviewAskRsp_CmdId[GCGSkillPreviewAskRsp_CmdId["CMD_ID"] = 7409] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSkillPreviewAskRsp_CmdId[GCGSkillPreviewAskRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSkillPreviewAskRsp_CmdId[GCGSkillPreviewAskRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGSkillPreviewAskRsp_CmdId = exports.GCGSkillPreviewAskRsp_CmdId || (exports.GCGSkillPreviewAskRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGChallengeUpdateNotify.CmdId
 */
var GCGChallengeUpdateNotify_CmdId;
(function (GCGChallengeUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGChallengeUpdateNotify_CmdId[GCGChallengeUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7268;
     */
    GCGChallengeUpdateNotify_CmdId[GCGChallengeUpdateNotify_CmdId["CMD_ID"] = 7268] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGChallengeUpdateNotify_CmdId[GCGChallengeUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGChallengeUpdateNotify_CmdId[GCGChallengeUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGChallengeUpdateNotify_CmdId[GCGChallengeUpdateNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGChallengeUpdateNotify_CmdId = exports.GCGChallengeUpdateNotify_CmdId || (exports.GCGChallengeUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSDataNotify.CmdId
 */
var GCGDSDataNotify_CmdId;
(function (GCGDSDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDataNotify_CmdId[GCGDSDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7122;
     */
    GCGDSDataNotify_CmdId[GCGDSDataNotify_CmdId["CMD_ID"] = 7122] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDataNotify_CmdId[GCGDSDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDataNotify_CmdId[GCGDSDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSDataNotify_CmdId = exports.GCGDSDataNotify_CmdId || (exports.GCGDSDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSCardBackUnlockNotify.CmdId
 */
var GCGDSCardBackUnlockNotify_CmdId;
(function (GCGDSCardBackUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardBackUnlockNotify_CmdId[GCGDSCardBackUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7265;
     */
    GCGDSCardBackUnlockNotify_CmdId[GCGDSCardBackUnlockNotify_CmdId["CMD_ID"] = 7265] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardBackUnlockNotify_CmdId[GCGDSCardBackUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSCardBackUnlockNotify_CmdId[GCGDSCardBackUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSCardBackUnlockNotify_CmdId = exports.GCGDSCardBackUnlockNotify_CmdId || (exports.GCGDSCardBackUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSFieldUnlockNotify.CmdId
 */
var GCGDSFieldUnlockNotify_CmdId;
(function (GCGDSFieldUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSFieldUnlockNotify_CmdId[GCGDSFieldUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7333;
     */
    GCGDSFieldUnlockNotify_CmdId[GCGDSFieldUnlockNotify_CmdId["CMD_ID"] = 7333] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSFieldUnlockNotify_CmdId[GCGDSFieldUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSFieldUnlockNotify_CmdId[GCGDSFieldUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSFieldUnlockNotify_CmdId = exports.GCGDSFieldUnlockNotify_CmdId || (exports.GCGDSFieldUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSCardFaceUnlockNotify.CmdId
 */
var GCGDSCardFaceUnlockNotify_CmdId;
(function (GCGDSCardFaceUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardFaceUnlockNotify_CmdId[GCGDSCardFaceUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7049;
     */
    GCGDSCardFaceUnlockNotify_CmdId[GCGDSCardFaceUnlockNotify_CmdId["CMD_ID"] = 7049] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardFaceUnlockNotify_CmdId[GCGDSCardFaceUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSCardFaceUnlockNotify_CmdId[GCGDSCardFaceUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSCardFaceUnlockNotify_CmdId = exports.GCGDSCardFaceUnlockNotify_CmdId || (exports.GCGDSCardFaceUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSCardNumChangeNotify.CmdId
 */
var GCGDSCardNumChangeNotify_CmdId;
(function (GCGDSCardNumChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardNumChangeNotify_CmdId[GCGDSCardNumChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7358;
     */
    GCGDSCardNumChangeNotify_CmdId[GCGDSCardNumChangeNotify_CmdId["CMD_ID"] = 7358] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardNumChangeNotify_CmdId[GCGDSCardNumChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSCardNumChangeNotify_CmdId[GCGDSCardNumChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSCardNumChangeNotify_CmdId = exports.GCGDSCardNumChangeNotify_CmdId || (exports.GCGDSCardNumChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeCardFaceReq.CmdId
 */
var GCGDSChangeCardFaceReq_CmdId;
(function (GCGDSChangeCardFaceReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardFaceReq_CmdId[GCGDSChangeCardFaceReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7169;
     */
    GCGDSChangeCardFaceReq_CmdId[GCGDSChangeCardFaceReq_CmdId["CMD_ID"] = 7169] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardFaceReq_CmdId[GCGDSChangeCardFaceReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCardFaceReq_CmdId[GCGDSChangeCardFaceReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCardFaceReq_CmdId[GCGDSChangeCardFaceReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGDSChangeCardFaceReq_CmdId = exports.GCGDSChangeCardFaceReq_CmdId || (exports.GCGDSChangeCardFaceReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeCardFaceRsp.CmdId
 */
var GCGDSChangeCardFaceRsp_CmdId;
(function (GCGDSChangeCardFaceRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardFaceRsp_CmdId[GCGDSChangeCardFaceRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7331;
     */
    GCGDSChangeCardFaceRsp_CmdId[GCGDSChangeCardFaceRsp_CmdId["CMD_ID"] = 7331] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardFaceRsp_CmdId[GCGDSChangeCardFaceRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCardFaceRsp_CmdId[GCGDSChangeCardFaceRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSChangeCardFaceRsp_CmdId = exports.GCGDSChangeCardFaceRsp_CmdId || (exports.GCGDSChangeCardFaceRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeCardBackReq.CmdId
 */
var GCGDSChangeCardBackReq_CmdId;
(function (GCGDSChangeCardBackReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardBackReq_CmdId[GCGDSChangeCardBackReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7292;
     */
    GCGDSChangeCardBackReq_CmdId[GCGDSChangeCardBackReq_CmdId["CMD_ID"] = 7292] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardBackReq_CmdId[GCGDSChangeCardBackReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCardBackReq_CmdId[GCGDSChangeCardBackReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCardBackReq_CmdId[GCGDSChangeCardBackReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGDSChangeCardBackReq_CmdId = exports.GCGDSChangeCardBackReq_CmdId || (exports.GCGDSChangeCardBackReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeCardBackRsp.CmdId
 */
var GCGDSChangeCardBackRsp_CmdId;
(function (GCGDSChangeCardBackRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardBackRsp_CmdId[GCGDSChangeCardBackRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7044;
     */
    GCGDSChangeCardBackRsp_CmdId[GCGDSChangeCardBackRsp_CmdId["CMD_ID"] = 7044] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCardBackRsp_CmdId[GCGDSChangeCardBackRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCardBackRsp_CmdId[GCGDSChangeCardBackRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSChangeCardBackRsp_CmdId = exports.GCGDSChangeCardBackRsp_CmdId || (exports.GCGDSChangeCardBackRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeFieldReq.CmdId
 */
var GCGDSChangeFieldReq_CmdId;
(function (GCGDSChangeFieldReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeFieldReq_CmdId[GCGDSChangeFieldReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7541;
     */
    GCGDSChangeFieldReq_CmdId[GCGDSChangeFieldReq_CmdId["CMD_ID"] = 7541] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeFieldReq_CmdId[GCGDSChangeFieldReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeFieldReq_CmdId[GCGDSChangeFieldReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeFieldReq_CmdId[GCGDSChangeFieldReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGDSChangeFieldReq_CmdId = exports.GCGDSChangeFieldReq_CmdId || (exports.GCGDSChangeFieldReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeFieldRsp.CmdId
 */
var GCGDSChangeFieldRsp_CmdId;
(function (GCGDSChangeFieldRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeFieldRsp_CmdId[GCGDSChangeFieldRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7444;
     */
    GCGDSChangeFieldRsp_CmdId[GCGDSChangeFieldRsp_CmdId["CMD_ID"] = 7444] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeFieldRsp_CmdId[GCGDSChangeFieldRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeFieldRsp_CmdId[GCGDSChangeFieldRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSChangeFieldRsp_CmdId = exports.GCGDSChangeFieldRsp_CmdId || (exports.GCGDSChangeFieldRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeDeckNameReq.CmdId
 */
var GCGDSChangeDeckNameReq_CmdId;
(function (GCGDSChangeDeckNameReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeDeckNameReq_CmdId[GCGDSChangeDeckNameReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7432;
     */
    GCGDSChangeDeckNameReq_CmdId[GCGDSChangeDeckNameReq_CmdId["CMD_ID"] = 7432] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeDeckNameReq_CmdId[GCGDSChangeDeckNameReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeDeckNameReq_CmdId[GCGDSChangeDeckNameReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeDeckNameReq_CmdId[GCGDSChangeDeckNameReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGDSChangeDeckNameReq_CmdId = exports.GCGDSChangeDeckNameReq_CmdId || (exports.GCGDSChangeDeckNameReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeDeckNameRsp.CmdId
 */
var GCGDSChangeDeckNameRsp_CmdId;
(function (GCGDSChangeDeckNameRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeDeckNameRsp_CmdId[GCGDSChangeDeckNameRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7916;
     */
    GCGDSChangeDeckNameRsp_CmdId[GCGDSChangeDeckNameRsp_CmdId["CMD_ID"] = 7916] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeDeckNameRsp_CmdId[GCGDSChangeDeckNameRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeDeckNameRsp_CmdId[GCGDSChangeDeckNameRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSChangeDeckNameRsp_CmdId = exports.GCGDSChangeDeckNameRsp_CmdId || (exports.GCGDSChangeDeckNameRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSDeckSaveReq.CmdId
 */
var GCGDSDeckSaveReq_CmdId;
(function (GCGDSDeckSaveReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeckSaveReq_CmdId[GCGDSDeckSaveReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7104;
     */
    GCGDSDeckSaveReq_CmdId[GCGDSDeckSaveReq_CmdId["CMD_ID"] = 7104] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeckSaveReq_CmdId[GCGDSDeckSaveReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDeckSaveReq_CmdId[GCGDSDeckSaveReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDeckSaveReq_CmdId[GCGDSDeckSaveReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGDSDeckSaveReq_CmdId = exports.GCGDSDeckSaveReq_CmdId || (exports.GCGDSDeckSaveReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSDeckSaveRsp.CmdId
 */
var GCGDSDeckSaveRsp_CmdId;
(function (GCGDSDeckSaveRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeckSaveRsp_CmdId[GCGDSDeckSaveRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7269;
     */
    GCGDSDeckSaveRsp_CmdId[GCGDSDeckSaveRsp_CmdId["CMD_ID"] = 7269] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeckSaveRsp_CmdId[GCGDSDeckSaveRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDeckSaveRsp_CmdId[GCGDSDeckSaveRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSDeckSaveRsp_CmdId = exports.GCGDSDeckSaveRsp_CmdId || (exports.GCGDSDeckSaveRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeCurDeckReq.CmdId
 */
var GCGDSChangeCurDeckReq_CmdId;
(function (GCGDSChangeCurDeckReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCurDeckReq_CmdId[GCGDSChangeCurDeckReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7131;
     */
    GCGDSChangeCurDeckReq_CmdId[GCGDSChangeCurDeckReq_CmdId["CMD_ID"] = 7131] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCurDeckReq_CmdId[GCGDSChangeCurDeckReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCurDeckReq_CmdId[GCGDSChangeCurDeckReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCurDeckReq_CmdId[GCGDSChangeCurDeckReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGDSChangeCurDeckReq_CmdId = exports.GCGDSChangeCurDeckReq_CmdId || (exports.GCGDSChangeCurDeckReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSChangeCurDeckRsp.CmdId
 */
var GCGDSChangeCurDeckRsp_CmdId;
(function (GCGDSChangeCurDeckRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCurDeckRsp_CmdId[GCGDSChangeCurDeckRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7301;
     */
    GCGDSChangeCurDeckRsp_CmdId[GCGDSChangeCurDeckRsp_CmdId["CMD_ID"] = 7301] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSChangeCurDeckRsp_CmdId[GCGDSChangeCurDeckRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSChangeCurDeckRsp_CmdId[GCGDSChangeCurDeckRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSChangeCurDeckRsp_CmdId = exports.GCGDSChangeCurDeckRsp_CmdId || (exports.GCGDSChangeCurDeckRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSCurDeckChangeNotify.CmdId
 */
var GCGDSCurDeckChangeNotify_CmdId;
(function (GCGDSCurDeckChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCurDeckChangeNotify_CmdId[GCGDSCurDeckChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7796;
     */
    GCGDSCurDeckChangeNotify_CmdId[GCGDSCurDeckChangeNotify_CmdId["CMD_ID"] = 7796] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCurDeckChangeNotify_CmdId[GCGDSCurDeckChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSCurDeckChangeNotify_CmdId[GCGDSCurDeckChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSCurDeckChangeNotify_CmdId = exports.GCGDSCurDeckChangeNotify_CmdId || (exports.GCGDSCurDeckChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSDeleteDeckReq.CmdId
 */
var GCGDSDeleteDeckReq_CmdId;
(function (GCGDSDeleteDeckReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeleteDeckReq_CmdId[GCGDSDeleteDeckReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7988;
     */
    GCGDSDeleteDeckReq_CmdId[GCGDSDeleteDeckReq_CmdId["CMD_ID"] = 7988] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeleteDeckReq_CmdId[GCGDSDeleteDeckReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDeleteDeckReq_CmdId[GCGDSDeleteDeckReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDeleteDeckReq_CmdId[GCGDSDeleteDeckReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGDSDeleteDeckReq_CmdId = exports.GCGDSDeleteDeckReq_CmdId || (exports.GCGDSDeleteDeckReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSDeleteDeckRsp.CmdId
 */
var GCGDSDeleteDeckRsp_CmdId;
(function (GCGDSDeleteDeckRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeleteDeckRsp_CmdId[GCGDSDeleteDeckRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7524;
     */
    GCGDSDeleteDeckRsp_CmdId[GCGDSDeleteDeckRsp_CmdId["CMD_ID"] = 7524] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeleteDeckRsp_CmdId[GCGDSDeleteDeckRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDeleteDeckRsp_CmdId[GCGDSDeleteDeckRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSDeleteDeckRsp_CmdId = exports.GCGDSDeleteDeckRsp_CmdId || (exports.GCGDSDeleteDeckRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSDeckUnlockNotify.CmdId
 */
var GCGDSDeckUnlockNotify_CmdId;
(function (GCGDSDeckUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeckUnlockNotify_CmdId[GCGDSDeckUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7732;
     */
    GCGDSDeckUnlockNotify_CmdId[GCGDSDeckUnlockNotify_CmdId["CMD_ID"] = 7732] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSDeckUnlockNotify_CmdId[GCGDSDeckUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSDeckUnlockNotify_CmdId[GCGDSDeckUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSDeckUnlockNotify_CmdId = exports.GCGDSDeckUnlockNotify_CmdId || (exports.GCGDSDeckUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGDSCardProficiencyNotify.CmdId
 */
var GCGDSCardProficiencyNotify_CmdId;
(function (GCGDSCardProficiencyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardProficiencyNotify_CmdId[GCGDSCardProficiencyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7680;
     */
    GCGDSCardProficiencyNotify_CmdId[GCGDSCardProficiencyNotify_CmdId["CMD_ID"] = 7680] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGDSCardProficiencyNotify_CmdId[GCGDSCardProficiencyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGDSCardProficiencyNotify_CmdId[GCGDSCardProficiencyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGDSCardProficiencyNotify_CmdId = exports.GCGDSCardProficiencyNotify_CmdId || (exports.GCGDSCardProficiencyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGTCTavernInfoNotify.CmdId
 */
var GCGTCTavernInfoNotify_CmdId;
(function (GCGTCTavernInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCTavernInfoNotify_CmdId[GCGTCTavernInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7011;
     */
    GCGTCTavernInfoNotify_CmdId[GCGTCTavernInfoNotify_CmdId["CMD_ID"] = 7011] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCTavernInfoNotify_CmdId[GCGTCTavernInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGTCTavernInfoNotify_CmdId[GCGTCTavernInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGTCTavernInfoNotify_CmdId = exports.GCGTCTavernInfoNotify_CmdId || (exports.GCGTCTavernInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGTCInviteReq.CmdId
 */
var GCGTCInviteReq_CmdId;
(function (GCGTCInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCInviteReq_CmdId[GCGTCInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7922;
     */
    GCGTCInviteReq_CmdId[GCGTCInviteReq_CmdId["CMD_ID"] = 7922] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCInviteReq_CmdId[GCGTCInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGTCInviteReq_CmdId[GCGTCInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGTCInviteReq_CmdId[GCGTCInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGTCInviteReq_CmdId = exports.GCGTCInviteReq_CmdId || (exports.GCGTCInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGTCInviteRsp.CmdId
 */
var GCGTCInviteRsp_CmdId;
(function (GCGTCInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCInviteRsp_CmdId[GCGTCInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7328;
     */
    GCGTCInviteRsp_CmdId[GCGTCInviteRsp_CmdId["CMD_ID"] = 7328] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCInviteRsp_CmdId[GCGTCInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGTCInviteRsp_CmdId[GCGTCInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGTCInviteRsp_CmdId = exports.GCGTCInviteRsp_CmdId || (exports.GCGTCInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGTCTavernChallengeDataNotify.CmdId
 */
var GCGTCTavernChallengeDataNotify_CmdId;
(function (GCGTCTavernChallengeDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCTavernChallengeDataNotify_CmdId[GCGTCTavernChallengeDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7294;
     */
    GCGTCTavernChallengeDataNotify_CmdId[GCGTCTavernChallengeDataNotify_CmdId["CMD_ID"] = 7294] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCTavernChallengeDataNotify_CmdId[GCGTCTavernChallengeDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGTCTavernChallengeDataNotify_CmdId[GCGTCTavernChallengeDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGTCTavernChallengeDataNotify_CmdId = exports.GCGTCTavernChallengeDataNotify_CmdId || (exports.GCGTCTavernChallengeDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGTCTavernChallengeUpdateNotify.CmdId
 */
var GCGTCTavernChallengeUpdateNotify_CmdId;
(function (GCGTCTavernChallengeUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCTavernChallengeUpdateNotify_CmdId[GCGTCTavernChallengeUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7184;
     */
    GCGTCTavernChallengeUpdateNotify_CmdId[GCGTCTavernChallengeUpdateNotify_CmdId["CMD_ID"] = 7184] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTCTavernChallengeUpdateNotify_CmdId[GCGTCTavernChallengeUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGTCTavernChallengeUpdateNotify_CmdId[GCGTCTavernChallengeUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGTCTavernChallengeUpdateNotify_CmdId = exports.GCGTCTavernChallengeUpdateNotify_CmdId || (exports.GCGTCTavernChallengeUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGGrowthLevelNotify.CmdId
 */
var GCGGrowthLevelNotify_CmdId;
(function (GCGGrowthLevelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelNotify_CmdId[GCGGrowthLevelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7736;
     */
    GCGGrowthLevelNotify_CmdId[GCGGrowthLevelNotify_CmdId["CMD_ID"] = 7736] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelNotify_CmdId[GCGGrowthLevelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGGrowthLevelNotify_CmdId[GCGGrowthLevelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGGrowthLevelNotify_CmdId = exports.GCGGrowthLevelNotify_CmdId || (exports.GCGGrowthLevelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGGrowthLevelRewardNotify.CmdId
 */
var GCGGrowthLevelRewardNotify_CmdId;
(function (GCGGrowthLevelRewardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelRewardNotify_CmdId[GCGGrowthLevelRewardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7477;
     */
    GCGGrowthLevelRewardNotify_CmdId[GCGGrowthLevelRewardNotify_CmdId["CMD_ID"] = 7477] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelRewardNotify_CmdId[GCGGrowthLevelRewardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGGrowthLevelRewardNotify_CmdId[GCGGrowthLevelRewardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGGrowthLevelRewardNotify_CmdId = exports.GCGGrowthLevelRewardNotify_CmdId || (exports.GCGGrowthLevelRewardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGGrowthLevelTakeRewardReq.CmdId
 */
var GCGGrowthLevelTakeRewardReq_CmdId;
(function (GCGGrowthLevelTakeRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelTakeRewardReq_CmdId[GCGGrowthLevelTakeRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7051;
     */
    GCGGrowthLevelTakeRewardReq_CmdId[GCGGrowthLevelTakeRewardReq_CmdId["CMD_ID"] = 7051] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelTakeRewardReq_CmdId[GCGGrowthLevelTakeRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGGrowthLevelTakeRewardReq_CmdId[GCGGrowthLevelTakeRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGGrowthLevelTakeRewardReq_CmdId[GCGGrowthLevelTakeRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGGrowthLevelTakeRewardReq_CmdId = exports.GCGGrowthLevelTakeRewardReq_CmdId || (exports.GCGGrowthLevelTakeRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGGrowthLevelTakeRewardRsp.CmdId
 */
var GCGGrowthLevelTakeRewardRsp_CmdId;
(function (GCGGrowthLevelTakeRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelTakeRewardRsp_CmdId[GCGGrowthLevelTakeRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7670;
     */
    GCGGrowthLevelTakeRewardRsp_CmdId[GCGGrowthLevelTakeRewardRsp_CmdId["CMD_ID"] = 7670] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGGrowthLevelTakeRewardRsp_CmdId[GCGGrowthLevelTakeRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGGrowthLevelTakeRewardRsp_CmdId[GCGGrowthLevelTakeRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGGrowthLevelTakeRewardRsp_CmdId = exports.GCGGrowthLevelTakeRewardRsp_CmdId || (exports.GCGGrowthLevelTakeRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGInviteGuestBattleReq.CmdId
 */
var GCGInviteGuestBattleReq_CmdId;
(function (GCGInviteGuestBattleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInviteGuestBattleReq_CmdId[GCGInviteGuestBattleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7783;
     */
    GCGInviteGuestBattleReq_CmdId[GCGInviteGuestBattleReq_CmdId["CMD_ID"] = 7783] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInviteGuestBattleReq_CmdId[GCGInviteGuestBattleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGInviteGuestBattleReq_CmdId[GCGInviteGuestBattleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGInviteGuestBattleReq_CmdId[GCGInviteGuestBattleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGInviteGuestBattleReq_CmdId = exports.GCGInviteGuestBattleReq_CmdId || (exports.GCGInviteGuestBattleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGInviteGuestBattleRsp.CmdId
 */
var GCGInviteGuestBattleRsp_CmdId;
(function (GCGInviteGuestBattleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInviteGuestBattleRsp_CmdId[GCGInviteGuestBattleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7251;
     */
    GCGInviteGuestBattleRsp_CmdId[GCGInviteGuestBattleRsp_CmdId["CMD_ID"] = 7251] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInviteGuestBattleRsp_CmdId[GCGInviteGuestBattleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGInviteGuestBattleRsp_CmdId[GCGInviteGuestBattleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGInviteGuestBattleRsp_CmdId = exports.GCGInviteGuestBattleRsp_CmdId || (exports.GCGInviteGuestBattleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGInviteBattleNotify.CmdId
 */
var GCGInviteBattleNotify_CmdId;
(function (GCGInviteBattleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInviteBattleNotify_CmdId[GCGInviteBattleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7692;
     */
    GCGInviteBattleNotify_CmdId[GCGInviteBattleNotify_CmdId["CMD_ID"] = 7692] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGInviteBattleNotify_CmdId[GCGInviteBattleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGInviteBattleNotify_CmdId[GCGInviteBattleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGInviteBattleNotify_CmdId = exports.GCGInviteBattleNotify_CmdId || (exports.GCGInviteBattleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGApplyInviteBattleReq.CmdId
 */
var GCGApplyInviteBattleReq_CmdId;
(function (GCGApplyInviteBattleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGApplyInviteBattleReq_CmdId[GCGApplyInviteBattleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7730;
     */
    GCGApplyInviteBattleReq_CmdId[GCGApplyInviteBattleReq_CmdId["CMD_ID"] = 7730] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGApplyInviteBattleReq_CmdId[GCGApplyInviteBattleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGApplyInviteBattleReq_CmdId[GCGApplyInviteBattleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGApplyInviteBattleReq_CmdId[GCGApplyInviteBattleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGApplyInviteBattleReq_CmdId = exports.GCGApplyInviteBattleReq_CmdId || (exports.GCGApplyInviteBattleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGApplyInviteBattleRsp.CmdId
 */
var GCGApplyInviteBattleRsp_CmdId;
(function (GCGApplyInviteBattleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGApplyInviteBattleRsp_CmdId[GCGApplyInviteBattleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7304;
     */
    GCGApplyInviteBattleRsp_CmdId[GCGApplyInviteBattleRsp_CmdId["CMD_ID"] = 7304] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGApplyInviteBattleRsp_CmdId[GCGApplyInviteBattleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGApplyInviteBattleRsp_CmdId[GCGApplyInviteBattleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGApplyInviteBattleRsp_CmdId = exports.GCGApplyInviteBattleRsp_CmdId || (exports.GCGApplyInviteBattleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGApplyInviteBattleNotify.CmdId
 */
var GCGApplyInviteBattleNotify_CmdId;
(function (GCGApplyInviteBattleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGApplyInviteBattleNotify_CmdId[GCGApplyInviteBattleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7820;
     */
    GCGApplyInviteBattleNotify_CmdId[GCGApplyInviteBattleNotify_CmdId["CMD_ID"] = 7820] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGApplyInviteBattleNotify_CmdId[GCGApplyInviteBattleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGApplyInviteBattleNotify_CmdId[GCGApplyInviteBattleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGApplyInviteBattleNotify_CmdId = exports.GCGApplyInviteBattleNotify_CmdId || (exports.GCGApplyInviteBattleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSettleNotify.CmdId
 */
var GCGSettleNotify_CmdId;
(function (GCGSettleNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSettleNotify_CmdId[GCGSettleNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7769;
     */
    GCGSettleNotify_CmdId[GCGSettleNotify_CmdId["CMD_ID"] = 7769] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSettleNotify_CmdId[GCGSettleNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSettleNotify_CmdId[GCGSettleNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGSettleNotify_CmdId = exports.GCGSettleNotify_CmdId || (exports.GCGSettleNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGResourceStateNotify.CmdId
 */
var GCGResourceStateNotify_CmdId;
(function (GCGResourceStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGResourceStateNotify_CmdId[GCGResourceStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7876;
     */
    GCGResourceStateNotify_CmdId[GCGResourceStateNotify_CmdId["CMD_ID"] = 7876] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGResourceStateNotify_CmdId[GCGResourceStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGResourceStateNotify_CmdId[GCGResourceStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGResourceStateNotify_CmdId[GCGResourceStateNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGResourceStateNotify_CmdId = exports.GCGResourceStateNotify_CmdId || (exports.GCGResourceStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGClientSettleReq.CmdId
 */
var GCGClientSettleReq_CmdId;
(function (GCGClientSettleReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGClientSettleReq_CmdId[GCGClientSettleReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7506;
     */
    GCGClientSettleReq_CmdId[GCGClientSettleReq_CmdId["CMD_ID"] = 7506] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGClientSettleReq_CmdId[GCGClientSettleReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGClientSettleReq_CmdId[GCGClientSettleReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGClientSettleReq_CmdId[GCGClientSettleReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGClientSettleReq_CmdId = exports.GCGClientSettleReq_CmdId || (exports.GCGClientSettleReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGClientSettleRsp.CmdId
 */
var GCGClientSettleRsp_CmdId;
(function (GCGClientSettleRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGClientSettleRsp_CmdId[GCGClientSettleRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7105;
     */
    GCGClientSettleRsp_CmdId[GCGClientSettleRsp_CmdId["CMD_ID"] = 7105] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGClientSettleRsp_CmdId[GCGClientSettleRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGClientSettleRsp_CmdId[GCGClientSettleRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGClientSettleRsp_CmdId = exports.GCGClientSettleRsp_CmdId || (exports.GCGClientSettleRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSettleOptionReq.CmdId
 */
var GCGSettleOptionReq_CmdId;
(function (GCGSettleOptionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSettleOptionReq_CmdId[GCGSettleOptionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7124;
     */
    GCGSettleOptionReq_CmdId[GCGSettleOptionReq_CmdId["CMD_ID"] = 7124] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSettleOptionReq_CmdId[GCGSettleOptionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSettleOptionReq_CmdId[GCGSettleOptionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSettleOptionReq_CmdId[GCGSettleOptionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGSettleOptionReq_CmdId = exports.GCGSettleOptionReq_CmdId || (exports.GCGSettleOptionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSettleOptionRsp.CmdId
 */
var GCGSettleOptionRsp_CmdId;
(function (GCGSettleOptionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSettleOptionRsp_CmdId[GCGSettleOptionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7735;
     */
    GCGSettleOptionRsp_CmdId[GCGSettleOptionRsp_CmdId["CMD_ID"] = 7735] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGSettleOptionRsp_CmdId[GCGSettleOptionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGSettleOptionRsp_CmdId[GCGSettleOptionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGSettleOptionRsp_CmdId = exports.GCGSettleOptionRsp_CmdId || (exports.GCGSettleOptionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGBasicDataNotify.CmdId
 */
var GCGBasicDataNotify_CmdId;
(function (GCGBasicDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGBasicDataNotify_CmdId[GCGBasicDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7319;
     */
    GCGBasicDataNotify_CmdId[GCGBasicDataNotify_CmdId["CMD_ID"] = 7319] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGBasicDataNotify_CmdId[GCGBasicDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGBasicDataNotify_CmdId[GCGBasicDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGBasicDataNotify_CmdId = exports.GCGBasicDataNotify_CmdId || (exports.GCGBasicDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGTavernNpcInfoNotify.CmdId
 */
var GCGTavernNpcInfoNotify_CmdId;
(function (GCGTavernNpcInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTavernNpcInfoNotify_CmdId[GCGTavernNpcInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7290;
     */
    GCGTavernNpcInfoNotify_CmdId[GCGTavernNpcInfoNotify_CmdId["CMD_ID"] = 7290] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGTavernNpcInfoNotify_CmdId[GCGTavernNpcInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGTavernNpcInfoNotify_CmdId[GCGTavernNpcInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGTavernNpcInfoNotify_CmdId = exports.GCGTavernNpcInfoNotify_CmdId || (exports.GCGTavernNpcInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGStartChallengeReq.CmdId
 */
var GCGStartChallengeReq_CmdId;
(function (GCGStartChallengeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGStartChallengeReq_CmdId[GCGStartChallengeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7595;
     */
    GCGStartChallengeReq_CmdId[GCGStartChallengeReq_CmdId["CMD_ID"] = 7595] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGStartChallengeReq_CmdId[GCGStartChallengeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGStartChallengeReq_CmdId[GCGStartChallengeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGStartChallengeReq_CmdId[GCGStartChallengeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GCGStartChallengeReq_CmdId = exports.GCGStartChallengeReq_CmdId || (exports.GCGStartChallengeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGStartChallengeRsp.CmdId
 */
var GCGStartChallengeRsp_CmdId;
(function (GCGStartChallengeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGStartChallengeRsp_CmdId[GCGStartChallengeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7763;
     */
    GCGStartChallengeRsp_CmdId[GCGStartChallengeRsp_CmdId["CMD_ID"] = 7763] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGStartChallengeRsp_CmdId[GCGStartChallengeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGStartChallengeRsp_CmdId[GCGStartChallengeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGStartChallengeRsp_CmdId = exports.GCGStartChallengeRsp_CmdId || (exports.GCGStartChallengeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGWeekChallengeInfoNotify.CmdId
 */
var GCGWeekChallengeInfoNotify_CmdId;
(function (GCGWeekChallengeInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGWeekChallengeInfoNotify_CmdId[GCGWeekChallengeInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7615;
     */
    GCGWeekChallengeInfoNotify_CmdId[GCGWeekChallengeInfoNotify_CmdId["CMD_ID"] = 7615] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGWeekChallengeInfoNotify_CmdId[GCGWeekChallengeInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGWeekChallengeInfoNotify_CmdId[GCGWeekChallengeInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGWeekChallengeInfoNotify_CmdId = exports.GCGWeekChallengeInfoNotify_CmdId || (exports.GCGWeekChallengeInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGLevelChallengeNotify.CmdId
 */
var GCGLevelChallengeNotify_CmdId;
(function (GCGLevelChallengeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGLevelChallengeNotify_CmdId[GCGLevelChallengeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7055;
     */
    GCGLevelChallengeNotify_CmdId[GCGLevelChallengeNotify_CmdId["CMD_ID"] = 7055] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGLevelChallengeNotify_CmdId[GCGLevelChallengeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGLevelChallengeNotify_CmdId[GCGLevelChallengeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGLevelChallengeNotify_CmdId = exports.GCGLevelChallengeNotify_CmdId || (exports.GCGLevelChallengeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGLevelChallengeFinishNotify.CmdId
 */
var GCGLevelChallengeFinishNotify_CmdId;
(function (GCGLevelChallengeFinishNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGLevelChallengeFinishNotify_CmdId[GCGLevelChallengeFinishNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7629;
     */
    GCGLevelChallengeFinishNotify_CmdId[GCGLevelChallengeFinishNotify_CmdId["CMD_ID"] = 7629] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGLevelChallengeFinishNotify_CmdId[GCGLevelChallengeFinishNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGLevelChallengeFinishNotify_CmdId[GCGLevelChallengeFinishNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGLevelChallengeFinishNotify_CmdId = exports.GCGLevelChallengeFinishNotify_CmdId || (exports.GCGLevelChallengeFinishNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGWorldChallengeUnlockNotify.CmdId
 */
var GCGWorldChallengeUnlockNotify_CmdId;
(function (GCGWorldChallengeUnlockNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGWorldChallengeUnlockNotify_CmdId[GCGWorldChallengeUnlockNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7204;
     */
    GCGWorldChallengeUnlockNotify_CmdId[GCGWorldChallengeUnlockNotify_CmdId["CMD_ID"] = 7204] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGWorldChallengeUnlockNotify_CmdId[GCGWorldChallengeUnlockNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGWorldChallengeUnlockNotify_CmdId[GCGWorldChallengeUnlockNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGWorldChallengeUnlockNotify_CmdId = exports.GCGWorldChallengeUnlockNotify_CmdId || (exports.GCGWorldChallengeUnlockNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGBossChallengeUpdateNotify.CmdId
 */
var GCGBossChallengeUpdateNotify_CmdId;
(function (GCGBossChallengeUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGBossChallengeUpdateNotify_CmdId[GCGBossChallengeUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 7073;
     */
    GCGBossChallengeUpdateNotify_CmdId[GCGBossChallengeUpdateNotify_CmdId["CMD_ID"] = 7073] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GCGBossChallengeUpdateNotify_CmdId[GCGBossChallengeUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GCGBossChallengeUpdateNotify_CmdId[GCGBossChallengeUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GCGBossChallengeUpdateNotify_CmdId = exports.GCGBossChallengeUpdateNotify_CmdId || (exports.GCGBossChallengeUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSkillHpChangeType
 */
var GCGSkillHpChangeType;
(function (GCGSkillHpChangeType) {
    /**
     * @generated from protobuf enum value: GCG_SKILL_HP_CHANGE_NONE = 0;
     */
    GCGSkillHpChangeType[GCGSkillHpChangeType["GCG_SKILL_HP_CHANGE_NONE"] = 0] = "GCG_SKILL_HP_CHANGE_NONE";
    /**
     * @generated from protobuf enum value: GCG_SKILL_HP_CHANGE_DAMAGE = 1;
     */
    GCGSkillHpChangeType[GCGSkillHpChangeType["GCG_SKILL_HP_CHANGE_DAMAGE"] = 1] = "GCG_SKILL_HP_CHANGE_DAMAGE";
    /**
     * @generated from protobuf enum value: GCG_SKILL_HP_CHANGE_HEAL = 2;
     */
    GCGSkillHpChangeType[GCGSkillHpChangeType["GCG_SKILL_HP_CHANGE_HEAL"] = 2] = "GCG_SKILL_HP_CHANGE_HEAL";
})(GCGSkillHpChangeType = exports.GCGSkillHpChangeType || (exports.GCGSkillHpChangeType = {}));
/**
 * @generated from protobuf enum com.midnights.game.GCGSettleOption
 */
var GCGSettleOption;
(function (GCGSettleOption) {
    /**
     * @generated from protobuf enum value: GCG_SETTLE_OPT_NONE = 0;
     */
    GCGSettleOption[GCGSettleOption["GCG_SETTLE_OPT_NONE"] = 0] = "GCG_SETTLE_OPT_NONE";
    /**
     * @generated from protobuf enum value: GCG_SETTLE_OPT_EXIT = 1;
     */
    GCGSettleOption[GCGSettleOption["GCG_SETTLE_OPT_EXIT"] = 1] = "GCG_SETTLE_OPT_EXIT";
    /**
     * @generated from protobuf enum value: GCG_SETTLE_OPT_CONTINUE = 2;
     */
    GCGSettleOption[GCGSettleOption["GCG_SETTLE_OPT_CONTINUE"] = 2] = "GCG_SETTLE_OPT_CONTINUE";
    /**
     * @generated from protobuf enum value: GCG_SETTLE_OPT_RESTART = 3;
     */
    GCGSettleOption[GCGSettleOption["GCG_SETTLE_OPT_RESTART"] = 3] = "GCG_SETTLE_OPT_RESTART";
})(GCGSettleOption = exports.GCGSettleOption || (exports.GCGSettleOption = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GCGAttackCostInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGAttackCostInfo", [
            { no: 8, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cost_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { costMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 8:
                    message.skillId = reader.uint32();
                    break;
                case /* map<uint32, uint32> cost_map */ 3:
                    this.binaryReadMap3(message.costMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGAttackCostInfo.cost_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 8; */
        if (message.skillId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.skillId);
        /* map<uint32, uint32> cost_map = 3; */
        for (let k of Object.keys(message.costMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.costMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGAttackCostInfo
 */
exports.GCGAttackCostInfo = new GCGAttackCostInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayCardCostInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGPlayCardCostInfo", [
            { no: 14, name: "cost_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 1, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> cost_map */ 14:
                    this.binaryReadMap14(message.costMap, reader, options);
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
    binaryReadMap14(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGPlayCardCostInfo.cost_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> cost_map = 14; */
        for (let k of Object.keys(message.costMap))
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.costMap[k]).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GCGPlayCardCostInfo
 */
exports.GCGPlayCardCostInfo = new GCGPlayCardCostInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSelectOnStageCostInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSelectOnStageCostInfo", [
            { no: 8, name: "cost_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> cost_map */ 8:
                    this.binaryReadMap8(message.costMap, reader, options);
                    break;
                case /* optional uint32 card_guid */ 9:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGSelectOnStageCostInfo.cost_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> cost_map = 8; */
        for (let k of Object.keys(message.costMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.costMap[k]).join();
        /* optional uint32 card_guid = 9; */
        if (message.cardGuid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSelectOnStageCostInfo
 */
exports.GCGSelectOnStageCostInfo = new GCGSelectOnStageCostInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGCostReviseInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGCostReviseInfo", [
            { no: 4, name: "is_can_attack", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "can_use_hand_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "play_card_cost_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGPlayCardCostInfo },
            { no: 10, name: "select_on_stage_cost_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGSelectOnStageCostInfo },
            { no: 2, name: "attack_cost_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGAttackCostInfo }
        ]);
    }
    create(value) {
        const message = { canUseHandCardIdList: [], playCardCostList: [], selectOnStageCostList: [], attackCostList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_can_attack */ 4:
                    message.isCanAttack = reader.bool();
                    break;
                case /* repeated uint32 can_use_hand_card_id_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.canUseHandCardIdList.push(reader.uint32());
                    else
                        message.canUseHandCardIdList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.GCGPlayCardCostInfo play_card_cost_list */ 5:
                    message.playCardCostList.push(exports.GCGPlayCardCostInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.GCGSelectOnStageCostInfo select_on_stage_cost_list */ 10:
                    message.selectOnStageCostList.push(exports.GCGSelectOnStageCostInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.GCGAttackCostInfo attack_cost_list */ 2:
                    message.attackCostList.push(exports.GCGAttackCostInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_can_attack = 4; */
        if (message.isCanAttack !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isCanAttack);
        /* repeated uint32 can_use_hand_card_id_list = 11; */
        if (message.canUseHandCardIdList.length) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.canUseHandCardIdList.length; i++)
                writer.uint32(message.canUseHandCardIdList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.GCGPlayCardCostInfo play_card_cost_list = 5; */
        for (let i = 0; i < message.playCardCostList.length; i++)
            exports.GCGPlayCardCostInfo.internalBinaryWrite(message.playCardCostList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.GCGSelectOnStageCostInfo select_on_stage_cost_list = 10; */
        for (let i = 0; i < message.selectOnStageCostList.length; i++)
            exports.GCGSelectOnStageCostInfo.internalBinaryWrite(message.selectOnStageCostList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.GCGAttackCostInfo attack_cost_list = 2; */
        for (let i = 0; i < message.attackCostList.length; i++)
            exports.GCGAttackCostInfo.internalBinaryWrite(message.attackCostList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGCostReviseInfo
 */
exports.GCGCostReviseInfo = new GCGCostReviseInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgTokenChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgTokenChange", [
            { no: 13, name: "before", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "token_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "after", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 before */ 13:
                    message.before = reader.uint32();
                    break;
                case /* optional uint32 token_type */ 4:
                    message.tokenType = reader.uint32();
                    break;
                case /* optional uint32 card_guid */ 2:
                    message.cardGuid = reader.uint32();
                    break;
                case /* optional uint32 after */ 11:
                    message.after = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 7:
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
        /* optional uint32 before = 13; */
        if (message.before !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.before);
        /* optional uint32 token_type = 4; */
        if (message.tokenType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.tokenType);
        /* optional uint32 card_guid = 2; */
        if (message.cardGuid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* optional uint32 after = 11; */
        if (message.after !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.after);
        /* optional com.midnights.game.GCGReason reason = 7; */
        if (message.reason !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgTokenChange
 */
exports.GCGMsgTokenChange = new GCGMsgTokenChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgPhaseChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgPhaseChange", [
            { no: 15, name: "allow_controller_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "before_phase", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGPhaseType", cmd_gcg_common_7.GCGPhaseType] },
            { no: 5, name: "after_phase", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGPhaseType", cmd_gcg_common_7.GCGPhaseType] }
        ]);
    }
    create(value) {
        const message = { allowControllerMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> allow_controller_map */ 15:
                    this.binaryReadMap15(message.allowControllerMap, reader, options);
                    break;
                case /* optional com.midnights.game.GCGPhaseType before_phase */ 12:
                    message.beforePhase = reader.int32();
                    break;
                case /* optional com.midnights.game.GCGPhaseType after_phase */ 5:
                    message.afterPhase = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGMsgPhaseChange.allow_controller_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> allow_controller_map = 15; */
        for (let k of Object.keys(message.allowControllerMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.allowControllerMap[k]).join();
        /* optional com.midnights.game.GCGPhaseType before_phase = 12; */
        if (message.beforePhase !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.beforePhase);
        /* optional com.midnights.game.GCGPhaseType after_phase = 5; */
        if (message.afterPhase !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.afterPhase);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgPhaseChange
 */
exports.GCGMsgPhaseChange = new GCGMsgPhaseChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgAddCards$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgAddCards", [
            { no: 11, name: "pos", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "zone", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGZoneType", cmd_gcg_common_6.GCGZoneType] },
            { no: 15, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] },
            { no: 13, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 pos */ 11:
                    message.pos = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGZoneType zone */ 2:
                    message.zone = reader.int32();
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 15:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 controller_id */ 13:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated uint32 card_guid_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardGuidList.push(reader.uint32());
                    else
                        message.cardGuidList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 pos = 11; */
        if (message.pos !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.pos);
        /* optional com.midnights.game.GCGZoneType zone = 2; */
        if (message.zone !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.zone);
        /* optional com.midnights.game.GCGReason reason = 15; */
        if (message.reason !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 controller_id = 13; */
        if (message.controllerId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* repeated uint32 card_guid_list = 14; */
        if (message.cardGuidList.length) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardGuidList.length; i++)
                writer.uint32(message.cardGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgAddCards
 */
exports.GCGMsgAddCards = new GCGMsgAddCards$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgRemoveCards$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgRemoveCards", [
            { no: 15, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "zone", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGZoneType", cmd_gcg_common_6.GCGZoneType] },
            { no: 5, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] },
            { no: 1, name: "card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 15:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGZoneType zone */ 10:
                    message.zone = reader.int32();
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 5:
                    message.reason = reader.int32();
                    break;
                case /* repeated uint32 card_guid_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardGuidList.push(reader.uint32());
                    else
                        message.cardGuidList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 15; */
        if (message.controllerId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGZoneType zone = 10; */
        if (message.zone !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.zone);
        /* optional com.midnights.game.GCGReason reason = 5; */
        if (message.reason !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.reason);
        /* repeated uint32 card_guid_list = 1; */
        if (message.cardGuidList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardGuidList.length; i++)
                writer.uint32(message.cardGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgRemoveCards
 */
exports.GCGMsgRemoveCards = new GCGMsgRemoveCards$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgMoveCard$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgMoveCard", [
            { no: 14, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "to", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGZoneType", cmd_gcg_common_6.GCGZoneType] },
            { no: 12, name: "from", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGZoneType", cmd_gcg_common_6.GCGZoneType] },
            { no: 10, name: "is_fail", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 14:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGZoneType to */ 5:
                    message.to = reader.int32();
                    break;
                case /* optional com.midnights.game.GCGZoneType from */ 12:
                    message.from = reader.int32();
                    break;
                case /* optional bool is_fail */ 10:
                    message.isFail = reader.bool();
                    break;
                case /* optional uint32 card_guid */ 7:
                    message.cardGuid = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 6:
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
        /* optional uint32 controller_id = 14; */
        if (message.controllerId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGZoneType to = 5; */
        if (message.to !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.to);
        /* optional com.midnights.game.GCGZoneType from = 12; */
        if (message.from !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.from);
        /* optional bool is_fail = 10; */
        if (message.isFail !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isFail);
        /* optional uint32 card_guid = 7; */
        if (message.cardGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* optional com.midnights.game.GCGReason reason = 6; */
        if (message.reason !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgMoveCard
 */
exports.GCGMsgMoveCard = new GCGMsgMoveCard$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgSelectOnStage$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgSelectOnStage", [
            { no: 6, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] },
            { no: 4, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 6:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 10:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 card_guid */ 4:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 6; */
        if (message.controllerId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGReason reason = 10; */
        if (message.reason !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 card_guid = 4; */
        if (message.cardGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgSelectOnStage
 */
exports.GCGMsgSelectOnStage = new GCGMsgSelectOnStage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgSelectOnStageByEffect$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgSelectOnStageByEffect", [
            { no: 12, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 12:
                    message.skillId = reader.uint32();
                    break;
                case /* optional uint32 controller_id */ 15:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional uint32 card_guid */ 1:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 12; */
        if (message.skillId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional uint32 controller_id = 15; */
        if (message.controllerId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional uint32 card_guid = 1; */
        if (message.cardGuid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgSelectOnStageByEffect
 */
exports.GCGMsgSelectOnStageByEffect = new GCGMsgSelectOnStageByEffect$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgDiceRoll$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgDiceRoll", [
            { no: 10, name: "dice_side_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["com.midnights.game.GCGDiceSideType", cmd_gcg_common_5.GCGDiceSideType] },
            { no: 15, name: "dice_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { diceSideList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGDiceSideType dice_side_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.diceSideList.push(reader.int32());
                    else
                        message.diceSideList.push(reader.int32());
                    break;
                case /* optional uint32 dice_num */ 15:
                    message.diceNum = reader.uint32();
                    break;
                case /* optional uint32 controller_id */ 5:
                    message.controllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGDiceSideType dice_side_list = 10; */
        if (message.diceSideList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.diceSideList.length; i++)
                writer.int32(message.diceSideList[i]);
            writer.join();
        }
        /* optional uint32 dice_num = 15; */
        if (message.diceNum !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.diceNum);
        /* optional uint32 controller_id = 5; */
        if (message.controllerId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgDiceRoll
 */
exports.GCGMsgDiceRoll = new GCGMsgDiceRoll$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgDiceReroll$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgDiceReroll", [
            { no: 2, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "select_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dice_side_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["com.midnights.game.GCGDiceSideType", cmd_gcg_common_5.GCGDiceSideType] }
        ]);
    }
    create(value) {
        const message = { selectDiceIndexList: [], diceSideList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 2:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated uint32 select_dice_index_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectDiceIndexList.push(reader.uint32());
                    else
                        message.selectDiceIndexList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.GCGDiceSideType dice_side_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.diceSideList.push(reader.int32());
                    else
                        message.diceSideList.push(reader.int32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 2; */
        if (message.controllerId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* repeated uint32 select_dice_index_list = 1; */
        if (message.selectDiceIndexList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectDiceIndexList.length; i++)
                writer.uint32(message.selectDiceIndexList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.GCGDiceSideType dice_side_list = 6; */
        if (message.diceSideList.length) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.diceSideList.length; i++)
                writer.int32(message.diceSideList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgDiceReroll
 */
exports.GCGMsgDiceReroll = new GCGMsgDiceReroll$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgPass$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgPass", [
            { no: 14, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 14:
                    message.controllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 14; */
        if (message.controllerId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgPass
 */
exports.GCGMsgPass = new GCGMsgPass$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgCharDie$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgCharDie", [
            { no: 5, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 5:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional uint32 card_guid */ 11:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 5; */
        if (message.controllerId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional uint32 card_guid = 11; */
        if (message.cardGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgCharDie
 */
exports.GCGMsgCharDie = new GCGMsgCharDie$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgUseSkill$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgUseSkill", [
            { no: 9, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 9:
                    message.skillId = reader.uint32();
                    break;
                case /* optional uint32 card_guid */ 6:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 9; */
        if (message.skillId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional uint32 card_guid = 6; */
        if (message.cardGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgUseSkill
 */
exports.GCGMsgUseSkill = new GCGMsgUseSkill$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgUseSkillEnd$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgUseSkillEnd", [
            { no: 11, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_guid */ 11:
                    message.cardGuid = reader.uint32();
                    break;
                case /* optional uint32 skill_id */ 12:
                    message.skillId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_guid = 11; */
        if (message.cardGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* optional uint32 skill_id = 12; */
        if (message.skillId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgUseSkillEnd
 */
exports.GCGMsgUseSkillEnd = new GCGMsgUseSkillEnd$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDamageDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDamageDetail", [
            { no: 10, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 10:
                    message.skillId = reader.uint32();
                    break;
                case /* optional uint32 card_guid */ 7:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 10; */
        if (message.skillId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional uint32 card_guid = 7; */
        if (message.cardGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDamageDetail
 */
exports.GCGDamageDetail = new GCGDamageDetail$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgSkillResult$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgSkillResult", [
            { no: 12, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "last_hp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGDamageDetail },
            { no: 7, name: "target_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "effect_element", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "from_result_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "damage", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "result_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "src_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { detailList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 12:
                    message.skillId = reader.uint32();
                    break;
                case /* optional uint32 last_hp */ 14:
                    message.lastHp = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGDamageDetail detail_list */ 2:
                    message.detailList.push(exports.GCGDamageDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 target_card_guid */ 7:
                    message.targetCardGuid = reader.uint32();
                    break;
                case /* optional uint32 effect_element */ 5:
                    message.effectElement = reader.uint32();
                    break;
                case /* optional uint32 from_result_seq */ 15:
                    message.fromResultSeq = reader.uint32();
                    break;
                case /* optional uint32 damage */ 6:
                    message.damage = reader.uint32();
                    break;
                case /* optional uint32 result_seq */ 4:
                    message.resultSeq = reader.uint32();
                    break;
                case /* optional uint32 src_card_guid */ 8:
                    message.srcCardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 12; */
        if (message.skillId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional uint32 last_hp = 14; */
        if (message.lastHp !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.lastHp);
        /* repeated com.midnights.game.GCGDamageDetail detail_list = 2; */
        for (let i = 0; i < message.detailList.length; i++)
            exports.GCGDamageDetail.internalBinaryWrite(message.detailList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 target_card_guid = 7; */
        if (message.targetCardGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.targetCardGuid);
        /* optional uint32 effect_element = 5; */
        if (message.effectElement !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.effectElement);
        /* optional uint32 from_result_seq = 15; */
        if (message.fromResultSeq !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.fromResultSeq);
        /* optional uint32 damage = 6; */
        if (message.damage !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.damage);
        /* optional uint32 result_seq = 4; */
        if (message.resultSeq !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.resultSeq);
        /* optional uint32 src_card_guid = 8; */
        if (message.srcCardGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.srcCardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgSkillResult
 */
exports.GCGMsgSkillResult = new GCGMsgSkillResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgCostDice$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgCostDice", [
            { no: 6, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "select_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] }
        ]);
    }
    create(value) {
        const message = { selectDiceIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 6:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated uint32 select_dice_index_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectDiceIndexList.push(reader.uint32());
                    else
                        message.selectDiceIndexList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 9:
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
        /* optional uint32 controller_id = 6; */
        if (message.controllerId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* repeated uint32 select_dice_index_list = 13; */
        if (message.selectDiceIndexList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectDiceIndexList.length; i++)
                writer.uint32(message.selectDiceIndexList[i]);
            writer.join();
        }
        /* optional com.midnights.game.GCGReason reason = 9; */
        if (message.reason !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgCostDice
 */
exports.GCGMsgCostDice = new GCGMsgCostDice$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgAddDice$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgAddDice", [
            { no: 4, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] },
            { no: 10, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "change_count", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "dice_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["com.midnights.game.GCGDiceSideType", cmd_gcg_common_5.GCGDiceSideType] } }
        ]);
    }
    create(value) {
        const message = { diceMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGReason reason */ 4:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 controller_id */ 10:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional int32 change_count */ 1:
                    message.changeCount = reader.int32();
                    break;
                case /* map<uint32, com.midnights.game.GCGDiceSideType> dice_map */ 8:
                    this.binaryReadMap8(message.diceMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGMsgAddDice.dice_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGReason reason = 4; */
        if (message.reason !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 controller_id = 10; */
        if (message.controllerId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional int32 change_count = 1; */
        if (message.changeCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.changeCount);
        /* map<uint32, com.midnights.game.GCGDiceSideType> dice_map = 8; */
        for (let k of Object.keys(message.diceMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.diceMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgAddDice
 */
exports.GCGMsgAddDice = new GCGMsgAddDice$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgNewCard$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgNewCard", [
            { no: 15, name: "card", kind: "message", T: () => exports.GCGCard }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGCard card */ 15:
                    message.card = exports.GCGCard.internalBinaryRead(reader, reader.uint32(), options, message.card);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGCard card = 15; */
        if (message.card)
            exports.GCGCard.internalBinaryWrite(message.card, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgNewCard
 */
exports.GCGMsgNewCard = new GCGMsgNewCard$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgUpdateController$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgUpdateController", [
            { no: 7, name: "allow_controller_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { allowControllerMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> allow_controller_map */ 7:
                    this.binaryReadMap7(message.allowControllerMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGMsgUpdateController.allow_controller_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> allow_controller_map = 7; */
        for (let k of Object.keys(message.allowControllerMap))
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.allowControllerMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgUpdateController
 */
exports.GCGMsgUpdateController = new GCGMsgUpdateController$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgModifyAdd$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgModifyAdd", [
            { no: 9, name: "pos", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "owner_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] }
        ]);
    }
    create(value) {
        const message = { cardGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 pos */ 9:
                    message.pos = reader.uint32();
                    break;
                case /* optional uint32 owner_card_guid */ 10:
                    message.ownerCardGuid = reader.uint32();
                    break;
                case /* repeated uint32 card_guid_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardGuidList.push(reader.uint32());
                    else
                        message.cardGuidList.push(reader.uint32());
                    break;
                case /* optional uint32 controller_id */ 14:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 11:
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
        /* optional uint32 pos = 9; */
        if (message.pos !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.pos);
        /* optional uint32 owner_card_guid = 10; */
        if (message.ownerCardGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.ownerCardGuid);
        /* repeated uint32 card_guid_list = 15; */
        if (message.cardGuidList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardGuidList.length; i++)
                writer.uint32(message.cardGuidList[i]);
            writer.join();
        }
        /* optional uint32 controller_id = 14; */
        if (message.controllerId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGReason reason = 11; */
        if (message.reason !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgModifyAdd
 */
exports.GCGMsgModifyAdd = new GCGMsgModifyAdd$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgModifyRemove$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgModifyRemove", [
            { no: 14, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGReason", cmd_gcg_common_8.GCGReason] },
            { no: 5, name: "owner_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 14:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGReason reason */ 12:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 owner_card_guid */ 5:
                    message.ownerCardGuid = reader.uint32();
                    break;
                case /* repeated uint32 card_guid_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardGuidList.push(reader.uint32());
                    else
                        message.cardGuidList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 14; */
        if (message.controllerId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGReason reason = 12; */
        if (message.reason !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 owner_card_guid = 5; */
        if (message.ownerCardGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.ownerCardGuid);
        /* repeated uint32 card_guid_list = 4; */
        if (message.cardGuidList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardGuidList.length; i++)
                writer.uint32(message.cardGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgModifyRemove
 */
exports.GCGMsgModifyRemove = new GCGMsgModifyRemove$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgPVEGenCardOp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgPVEGenCardOp", [
            { no: 1, name: "skill_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 skill_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillIdList.push(reader.uint32());
                    else
                        message.skillIdList.push(reader.uint32());
                    break;
                case /* optional uint32 card_guid */ 11:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 skill_id_list = 1; */
        if (message.skillIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillIdList.length; i++)
                writer.uint32(message.skillIdList[i]);
            writer.join();
        }
        /* optional uint32 card_guid = 11; */
        if (message.cardGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgPVEGenCardOp
 */
exports.GCGMsgPVEGenCardOp = new GCGMsgPVEGenCardOp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgPVEDoOp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgPVEDoOp", [
            { no: 4, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 4:
                    message.skillId = reader.uint32();
                    break;
                case /* optional uint32 card_guid */ 10:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 4; */
        if (message.skillId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional uint32 card_guid = 10; */
        if (message.cardGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgPVEDoOp
 */
exports.GCGMsgPVEDoOp = new GCGMsgPVEDoOp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgDuelDataChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgDuelDataChange", [
            { no: 14, name: "round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 round */ 14:
                    message.round = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 round = 14; */
        if (message.round !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.round);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgDuelDataChange
 */
exports.GCGMsgDuelDataChange = new GCGMsgDuelDataChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgClientPerform$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgClientPerform", [
            { no: 2, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "perform_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGClientPerformType", cmd_gcg_common_4.GCGClientPerformType] }
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
                case /* repeated uint32 param_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.GCGClientPerformType perform_type */ 5:
                    message.performType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 param_list = 2; */
        if (message.paramList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* optional com.midnights.game.GCGClientPerformType perform_type = 5; */
        if (message.performType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.performType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgClientPerform
 */
exports.GCGMsgClientPerform = new GCGMsgClientPerform$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgGameOver$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgGameOver", [
            { no: 13, name: "end_reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGEndReason", cmd_gcg_common_3.GCGEndReason] },
            { no: 6, name: "win_controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGEndReason end_reason */ 13:
                    message.endReason = reader.int32();
                    break;
                case /* optional uint32 win_controller_id */ 6:
                    message.winControllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGEndReason end_reason = 13; */
        if (message.endReason !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.endReason);
        /* optional uint32 win_controller_id = 6; */
        if (message.winControllerId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.winControllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgGameOver
 */
exports.GCGMsgGameOver = new GCGMsgGameOver$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgOpTimer$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgOpTimer", [
            { no: 9, name: "begin_time", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "phase", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGPhaseType", cmd_gcg_common_7.GCGPhaseType] },
            { no: 13, name: "time_stamp", kind: "scalar", opt: true, T: 6 /*ScalarType.FIXED64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed64 begin_time */ 9:
                    message.beginTime = reader.fixed64().toBigInt();
                    break;
                case /* optional com.midnights.game.GCGPhaseType phase */ 3:
                    message.phase = reader.int32();
                    break;
                case /* optional fixed64 time_stamp */ 13:
                    message.timeStamp = reader.fixed64().toBigInt();
                    break;
                case /* optional uint32 controller_id */ 8:
                    message.controllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional fixed64 begin_time = 9; */
        if (message.beginTime !== undefined)
            writer.tag(9, runtime_1.WireType.Bit64).fixed64(message.beginTime);
        /* optional com.midnights.game.GCGPhaseType phase = 3; */
        if (message.phase !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.phase);
        /* optional fixed64 time_stamp = 13; */
        if (message.timeStamp !== undefined)
            writer.tag(13, runtime_1.WireType.Bit64).fixed64(message.timeStamp);
        /* optional uint32 controller_id = 8; */
        if (message.controllerId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgOpTimer
 */
exports.GCGMsgOpTimer = new GCGMsgOpTimer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgWaitingListChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgWaitingListChange", [
            { no: 6, name: "cur_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_index */ 6:
                    message.curIndex = reader.uint32();
                    break;
                case /* optional uint32 controller_id */ 4:
                    message.controllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_index = 6; */
        if (message.curIndex !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curIndex);
        /* optional uint32 controller_id = 4; */
        if (message.controllerId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgWaitingListChange
 */
exports.GCGMsgWaitingListChange = new GCGMsgWaitingListChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgCardUpdate$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgCardUpdate", [
            { no: 7, name: "card", kind: "message", T: () => exports.GCGCard }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGCard card */ 7:
                    message.card = exports.GCGCard.internalBinaryRead(reader, reader.uint32(), options, message.card);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGCard card = 7; */
        if (message.card)
            exports.GCGCard.internalBinaryWrite(message.card, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgCardUpdate
 */
exports.GCGMsgCardUpdate = new GCGMsgCardUpdate$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgCostRevise$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMsgCostRevise", [
            { no: 5, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "cost_revise", kind: "message", T: () => exports.GCGCostReviseInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 5:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGCostReviseInfo cost_revise */ 13:
                    message.costRevise = exports.GCGCostReviseInfo.internalBinaryRead(reader, reader.uint32(), options, message.costRevise);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 5; */
        if (message.controllerId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGCostReviseInfo cost_revise = 13; */
        if (message.costRevise)
            exports.GCGCostReviseInfo.internalBinaryWrite(message.costRevise, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMsgCostRevise
 */
exports.GCGMsgCostRevise = new GCGMsgCostRevise$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMessage$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMessage", [
            { no: 12, name: "token_change", kind: "message", oneof: "message", T: () => exports.GCGMsgTokenChange },
            { no: 13, name: "phase_change", kind: "message", oneof: "message", T: () => exports.GCGMsgPhaseChange },
            { no: 10, name: "add_cards", kind: "message", oneof: "message", T: () => exports.GCGMsgAddCards },
            { no: 14, name: "remove_cards", kind: "message", oneof: "message", T: () => exports.GCGMsgRemoveCards },
            { no: 6, name: "select_on_stage", kind: "message", oneof: "message", T: () => exports.GCGMsgSelectOnStage },
            { no: 9, name: "dice_roll", kind: "message", oneof: "message", T: () => exports.GCGMsgDiceRoll },
            { no: 11, name: "dice_reroll", kind: "message", oneof: "message", T: () => exports.GCGMsgDiceReroll },
            { no: 5, name: "pass", kind: "message", oneof: "message", T: () => exports.GCGMsgPass },
            { no: 2, name: "char_die", kind: "message", oneof: "message", T: () => exports.GCGMsgCharDie },
            { no: 1, name: "skill_result", kind: "message", oneof: "message", T: () => exports.GCGMsgSkillResult },
            { no: 7, name: "cost_dice", kind: "message", oneof: "message", T: () => exports.GCGMsgCostDice },
            { no: 3, name: "add_dice", kind: "message", oneof: "message", T: () => exports.GCGMsgAddDice },
            { no: 15, name: "move_card", kind: "message", oneof: "message", T: () => exports.GCGMsgMoveCard },
            { no: 4, name: "use_skill", kind: "message", oneof: "message", T: () => exports.GCGMsgUseSkill },
            { no: 1848, name: "new_card", kind: "message", oneof: "message", T: () => exports.GCGMsgNewCard },
            { no: 429, name: "update_controller", kind: "message", oneof: "message", T: () => exports.GCGMsgUpdateController },
            { no: 1851, name: "modify_add", kind: "message", oneof: "message", T: () => exports.GCGMsgModifyAdd },
            { no: 471, name: "modify_remove", kind: "message", oneof: "message", T: () => exports.GCGMsgModifyRemove },
            { no: 1411, name: "use_skill_end", kind: "message", oneof: "message", T: () => exports.GCGMsgUseSkillEnd },
            { no: 1741, name: "pve_gen_card_op", kind: "message", oneof: "message", T: () => exports.GCGMsgPVEGenCardOp },
            { no: 614, name: "pve_do_op", kind: "message", oneof: "message", T: () => exports.GCGMsgPVEDoOp },
            { no: 1008, name: "duel_data_change", kind: "message", oneof: "message", T: () => exports.GCGMsgDuelDataChange },
            { no: 1035, name: "client_perform", kind: "message", oneof: "message", T: () => exports.GCGMsgClientPerform },
            { no: 714, name: "game_over", kind: "message", oneof: "message", T: () => exports.GCGMsgGameOver },
            { no: 1862, name: "op_timer", kind: "message", oneof: "message", T: () => exports.GCGMsgOpTimer },
            { no: 1678, name: "waiting_list_change", kind: "message", oneof: "message", T: () => exports.GCGMsgWaitingListChange },
            { no: 1879, name: "card_update", kind: "message", oneof: "message", T: () => exports.GCGMsgCardUpdate },
            { no: 2042, name: "select_on_stage_by_effect", kind: "message", oneof: "message", T: () => exports.GCGMsgSelectOnStageByEffect },
            { no: 1350, name: "cost_revise", kind: "message", oneof: "message", T: () => exports.GCGMsgCostRevise }
        ]);
    }
    create(value) {
        const message = { message: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.midnights.game.GCGMsgTokenChange token_change */ 12:
                    message.message = {
                        oneofKind: "tokenChange",
                        tokenChange: exports.GCGMsgTokenChange.internalBinaryRead(reader, reader.uint32(), options, message.message.tokenChange)
                    };
                    break;
                case /* com.midnights.game.GCGMsgPhaseChange phase_change */ 13:
                    message.message = {
                        oneofKind: "phaseChange",
                        phaseChange: exports.GCGMsgPhaseChange.internalBinaryRead(reader, reader.uint32(), options, message.message.phaseChange)
                    };
                    break;
                case /* com.midnights.game.GCGMsgAddCards add_cards */ 10:
                    message.message = {
                        oneofKind: "addCards",
                        addCards: exports.GCGMsgAddCards.internalBinaryRead(reader, reader.uint32(), options, message.message.addCards)
                    };
                    break;
                case /* com.midnights.game.GCGMsgRemoveCards remove_cards */ 14:
                    message.message = {
                        oneofKind: "removeCards",
                        removeCards: exports.GCGMsgRemoveCards.internalBinaryRead(reader, reader.uint32(), options, message.message.removeCards)
                    };
                    break;
                case /* com.midnights.game.GCGMsgSelectOnStage select_on_stage */ 6:
                    message.message = {
                        oneofKind: "selectOnStage",
                        selectOnStage: exports.GCGMsgSelectOnStage.internalBinaryRead(reader, reader.uint32(), options, message.message.selectOnStage)
                    };
                    break;
                case /* com.midnights.game.GCGMsgDiceRoll dice_roll */ 9:
                    message.message = {
                        oneofKind: "diceRoll",
                        diceRoll: exports.GCGMsgDiceRoll.internalBinaryRead(reader, reader.uint32(), options, message.message.diceRoll)
                    };
                    break;
                case /* com.midnights.game.GCGMsgDiceReroll dice_reroll */ 11:
                    message.message = {
                        oneofKind: "diceReroll",
                        diceReroll: exports.GCGMsgDiceReroll.internalBinaryRead(reader, reader.uint32(), options, message.message.diceReroll)
                    };
                    break;
                case /* com.midnights.game.GCGMsgPass pass */ 5:
                    message.message = {
                        oneofKind: "pass",
                        pass: exports.GCGMsgPass.internalBinaryRead(reader, reader.uint32(), options, message.message.pass)
                    };
                    break;
                case /* com.midnights.game.GCGMsgCharDie char_die */ 2:
                    message.message = {
                        oneofKind: "charDie",
                        charDie: exports.GCGMsgCharDie.internalBinaryRead(reader, reader.uint32(), options, message.message.charDie)
                    };
                    break;
                case /* com.midnights.game.GCGMsgSkillResult skill_result */ 1:
                    message.message = {
                        oneofKind: "skillResult",
                        skillResult: exports.GCGMsgSkillResult.internalBinaryRead(reader, reader.uint32(), options, message.message.skillResult)
                    };
                    break;
                case /* com.midnights.game.GCGMsgCostDice cost_dice */ 7:
                    message.message = {
                        oneofKind: "costDice",
                        costDice: exports.GCGMsgCostDice.internalBinaryRead(reader, reader.uint32(), options, message.message.costDice)
                    };
                    break;
                case /* com.midnights.game.GCGMsgAddDice add_dice */ 3:
                    message.message = {
                        oneofKind: "addDice",
                        addDice: exports.GCGMsgAddDice.internalBinaryRead(reader, reader.uint32(), options, message.message.addDice)
                    };
                    break;
                case /* com.midnights.game.GCGMsgMoveCard move_card */ 15:
                    message.message = {
                        oneofKind: "moveCard",
                        moveCard: exports.GCGMsgMoveCard.internalBinaryRead(reader, reader.uint32(), options, message.message.moveCard)
                    };
                    break;
                case /* com.midnights.game.GCGMsgUseSkill use_skill */ 4:
                    message.message = {
                        oneofKind: "useSkill",
                        useSkill: exports.GCGMsgUseSkill.internalBinaryRead(reader, reader.uint32(), options, message.message.useSkill)
                    };
                    break;
                case /* com.midnights.game.GCGMsgNewCard new_card */ 1848:
                    message.message = {
                        oneofKind: "newCard",
                        newCard: exports.GCGMsgNewCard.internalBinaryRead(reader, reader.uint32(), options, message.message.newCard)
                    };
                    break;
                case /* com.midnights.game.GCGMsgUpdateController update_controller */ 429:
                    message.message = {
                        oneofKind: "updateController",
                        updateController: exports.GCGMsgUpdateController.internalBinaryRead(reader, reader.uint32(), options, message.message.updateController)
                    };
                    break;
                case /* com.midnights.game.GCGMsgModifyAdd modify_add */ 1851:
                    message.message = {
                        oneofKind: "modifyAdd",
                        modifyAdd: exports.GCGMsgModifyAdd.internalBinaryRead(reader, reader.uint32(), options, message.message.modifyAdd)
                    };
                    break;
                case /* com.midnights.game.GCGMsgModifyRemove modify_remove */ 471:
                    message.message = {
                        oneofKind: "modifyRemove",
                        modifyRemove: exports.GCGMsgModifyRemove.internalBinaryRead(reader, reader.uint32(), options, message.message.modifyRemove)
                    };
                    break;
                case /* com.midnights.game.GCGMsgUseSkillEnd use_skill_end */ 1411:
                    message.message = {
                        oneofKind: "useSkillEnd",
                        useSkillEnd: exports.GCGMsgUseSkillEnd.internalBinaryRead(reader, reader.uint32(), options, message.message.useSkillEnd)
                    };
                    break;
                case /* com.midnights.game.GCGMsgPVEGenCardOp pve_gen_card_op */ 1741:
                    message.message = {
                        oneofKind: "pveGenCardOp",
                        pveGenCardOp: exports.GCGMsgPVEGenCardOp.internalBinaryRead(reader, reader.uint32(), options, message.message.pveGenCardOp)
                    };
                    break;
                case /* com.midnights.game.GCGMsgPVEDoOp pve_do_op */ 614:
                    message.message = {
                        oneofKind: "pveDoOp",
                        pveDoOp: exports.GCGMsgPVEDoOp.internalBinaryRead(reader, reader.uint32(), options, message.message.pveDoOp)
                    };
                    break;
                case /* com.midnights.game.GCGMsgDuelDataChange duel_data_change */ 1008:
                    message.message = {
                        oneofKind: "duelDataChange",
                        duelDataChange: exports.GCGMsgDuelDataChange.internalBinaryRead(reader, reader.uint32(), options, message.message.duelDataChange)
                    };
                    break;
                case /* com.midnights.game.GCGMsgClientPerform client_perform */ 1035:
                    message.message = {
                        oneofKind: "clientPerform",
                        clientPerform: exports.GCGMsgClientPerform.internalBinaryRead(reader, reader.uint32(), options, message.message.clientPerform)
                    };
                    break;
                case /* com.midnights.game.GCGMsgGameOver game_over */ 714:
                    message.message = {
                        oneofKind: "gameOver",
                        gameOver: exports.GCGMsgGameOver.internalBinaryRead(reader, reader.uint32(), options, message.message.gameOver)
                    };
                    break;
                case /* com.midnights.game.GCGMsgOpTimer op_timer */ 1862:
                    message.message = {
                        oneofKind: "opTimer",
                        opTimer: exports.GCGMsgOpTimer.internalBinaryRead(reader, reader.uint32(), options, message.message.opTimer)
                    };
                    break;
                case /* com.midnights.game.GCGMsgWaitingListChange waiting_list_change */ 1678:
                    message.message = {
                        oneofKind: "waitingListChange",
                        waitingListChange: exports.GCGMsgWaitingListChange.internalBinaryRead(reader, reader.uint32(), options, message.message.waitingListChange)
                    };
                    break;
                case /* com.midnights.game.GCGMsgCardUpdate card_update */ 1879:
                    message.message = {
                        oneofKind: "cardUpdate",
                        cardUpdate: exports.GCGMsgCardUpdate.internalBinaryRead(reader, reader.uint32(), options, message.message.cardUpdate)
                    };
                    break;
                case /* com.midnights.game.GCGMsgSelectOnStageByEffect select_on_stage_by_effect */ 2042:
                    message.message = {
                        oneofKind: "selectOnStageByEffect",
                        selectOnStageByEffect: exports.GCGMsgSelectOnStageByEffect.internalBinaryRead(reader, reader.uint32(), options, message.message.selectOnStageByEffect)
                    };
                    break;
                case /* com.midnights.game.GCGMsgCostRevise cost_revise */ 1350:
                    message.message = {
                        oneofKind: "costRevise",
                        costRevise: exports.GCGMsgCostRevise.internalBinaryRead(reader, reader.uint32(), options, message.message.costRevise)
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
        /* com.midnights.game.GCGMsgTokenChange token_change = 12; */
        if (message.message.oneofKind === "tokenChange")
            exports.GCGMsgTokenChange.internalBinaryWrite(message.message.tokenChange, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgPhaseChange phase_change = 13; */
        if (message.message.oneofKind === "phaseChange")
            exports.GCGMsgPhaseChange.internalBinaryWrite(message.message.phaseChange, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgAddCards add_cards = 10; */
        if (message.message.oneofKind === "addCards")
            exports.GCGMsgAddCards.internalBinaryWrite(message.message.addCards, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgRemoveCards remove_cards = 14; */
        if (message.message.oneofKind === "removeCards")
            exports.GCGMsgRemoveCards.internalBinaryWrite(message.message.removeCards, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgSelectOnStage select_on_stage = 6; */
        if (message.message.oneofKind === "selectOnStage")
            exports.GCGMsgSelectOnStage.internalBinaryWrite(message.message.selectOnStage, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgDiceRoll dice_roll = 9; */
        if (message.message.oneofKind === "diceRoll")
            exports.GCGMsgDiceRoll.internalBinaryWrite(message.message.diceRoll, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgDiceReroll dice_reroll = 11; */
        if (message.message.oneofKind === "diceReroll")
            exports.GCGMsgDiceReroll.internalBinaryWrite(message.message.diceReroll, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgPass pass = 5; */
        if (message.message.oneofKind === "pass")
            exports.GCGMsgPass.internalBinaryWrite(message.message.pass, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgCharDie char_die = 2; */
        if (message.message.oneofKind === "charDie")
            exports.GCGMsgCharDie.internalBinaryWrite(message.message.charDie, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgSkillResult skill_result = 1; */
        if (message.message.oneofKind === "skillResult")
            exports.GCGMsgSkillResult.internalBinaryWrite(message.message.skillResult, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgCostDice cost_dice = 7; */
        if (message.message.oneofKind === "costDice")
            exports.GCGMsgCostDice.internalBinaryWrite(message.message.costDice, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgAddDice add_dice = 3; */
        if (message.message.oneofKind === "addDice")
            exports.GCGMsgAddDice.internalBinaryWrite(message.message.addDice, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgMoveCard move_card = 15; */
        if (message.message.oneofKind === "moveCard")
            exports.GCGMsgMoveCard.internalBinaryWrite(message.message.moveCard, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgUseSkill use_skill = 4; */
        if (message.message.oneofKind === "useSkill")
            exports.GCGMsgUseSkill.internalBinaryWrite(message.message.useSkill, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgNewCard new_card = 1848; */
        if (message.message.oneofKind === "newCard")
            exports.GCGMsgNewCard.internalBinaryWrite(message.message.newCard, writer.tag(1848, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgUpdateController update_controller = 429; */
        if (message.message.oneofKind === "updateController")
            exports.GCGMsgUpdateController.internalBinaryWrite(message.message.updateController, writer.tag(429, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgModifyAdd modify_add = 1851; */
        if (message.message.oneofKind === "modifyAdd")
            exports.GCGMsgModifyAdd.internalBinaryWrite(message.message.modifyAdd, writer.tag(1851, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgModifyRemove modify_remove = 471; */
        if (message.message.oneofKind === "modifyRemove")
            exports.GCGMsgModifyRemove.internalBinaryWrite(message.message.modifyRemove, writer.tag(471, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgUseSkillEnd use_skill_end = 1411; */
        if (message.message.oneofKind === "useSkillEnd")
            exports.GCGMsgUseSkillEnd.internalBinaryWrite(message.message.useSkillEnd, writer.tag(1411, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgPVEGenCardOp pve_gen_card_op = 1741; */
        if (message.message.oneofKind === "pveGenCardOp")
            exports.GCGMsgPVEGenCardOp.internalBinaryWrite(message.message.pveGenCardOp, writer.tag(1741, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgPVEDoOp pve_do_op = 614; */
        if (message.message.oneofKind === "pveDoOp")
            exports.GCGMsgPVEDoOp.internalBinaryWrite(message.message.pveDoOp, writer.tag(614, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgDuelDataChange duel_data_change = 1008; */
        if (message.message.oneofKind === "duelDataChange")
            exports.GCGMsgDuelDataChange.internalBinaryWrite(message.message.duelDataChange, writer.tag(1008, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgClientPerform client_perform = 1035; */
        if (message.message.oneofKind === "clientPerform")
            exports.GCGMsgClientPerform.internalBinaryWrite(message.message.clientPerform, writer.tag(1035, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgGameOver game_over = 714; */
        if (message.message.oneofKind === "gameOver")
            exports.GCGMsgGameOver.internalBinaryWrite(message.message.gameOver, writer.tag(714, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgOpTimer op_timer = 1862; */
        if (message.message.oneofKind === "opTimer")
            exports.GCGMsgOpTimer.internalBinaryWrite(message.message.opTimer, writer.tag(1862, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgWaitingListChange waiting_list_change = 1678; */
        if (message.message.oneofKind === "waitingListChange")
            exports.GCGMsgWaitingListChange.internalBinaryWrite(message.message.waitingListChange, writer.tag(1678, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgCardUpdate card_update = 1879; */
        if (message.message.oneofKind === "cardUpdate")
            exports.GCGMsgCardUpdate.internalBinaryWrite(message.message.cardUpdate, writer.tag(1879, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgSelectOnStageByEffect select_on_stage_by_effect = 2042; */
        if (message.message.oneofKind === "selectOnStageByEffect")
            exports.GCGMsgSelectOnStageByEffect.internalBinaryWrite(message.message.selectOnStageByEffect, writer.tag(2042, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGMsgCostRevise cost_revise = 1350; */
        if (message.message.oneofKind === "costRevise")
            exports.GCGMsgCostRevise.internalBinaryWrite(message.message.costRevise, writer.tag(1350, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMessage
 */
exports.GCGMessage = new GCGMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMessagePack$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMessagePack", [
            { no: 10, name: "msg_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "msg_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGMessage }
        ]);
    }
    create(value) {
        const message = { msgList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 msg_seq */ 10:
                    message.msgSeq = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGMessage msg_list */ 13:
                    message.msgList.push(exports.GCGMessage.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 msg_seq = 10; */
        if (message.msgSeq !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.msgSeq);
        /* repeated com.midnights.game.GCGMessage msg_list = 13; */
        for (let i = 0; i < message.msgList.length; i++)
            exports.GCGMessage.internalBinaryWrite(message.msgList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMessagePack
 */
exports.GCGMessagePack = new GCGMessagePack$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationRedraw$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationRedraw", [
            { no: 2, name: "card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
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
                case /* repeated uint32 card_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardList.push(reader.uint32());
                    else
                        message.cardList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 card_list = 2; */
        if (message.cardList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardList.length; i++)
                writer.uint32(message.cardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationRedraw
 */
exports.GCGOperationRedraw = new GCGOperationRedraw$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationOnStageSelect$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationOnStageSelect", [
            { no: 5, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cost_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costDiceIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_guid */ 5:
                    message.cardGuid = reader.uint32();
                    break;
                case /* repeated uint32 cost_dice_index_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costDiceIndexList.push(reader.uint32());
                    else
                        message.costDiceIndexList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_guid = 5; */
        if (message.cardGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* repeated uint32 cost_dice_index_list = 4; */
        if (message.costDiceIndexList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costDiceIndexList.length; i++)
                writer.uint32(message.costDiceIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationOnStageSelect
 */
exports.GCGOperationOnStageSelect = new GCGOperationOnStageSelect$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationReroll$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationReroll", [
            { no: 12, name: "dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { diceIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 dice_index_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.diceIndexList.push(reader.uint32());
                    else
                        message.diceIndexList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 dice_index_list = 12; */
        if (message.diceIndexList.length) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.diceIndexList.length; i++)
                writer.uint32(message.diceIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationReroll
 */
exports.GCGOperationReroll = new GCGOperationReroll$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationAttack$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationAttack", [
            { no: 8, name: "cost_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costDiceIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 cost_dice_index_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costDiceIndexList.push(reader.uint32());
                    else
                        message.costDiceIndexList.push(reader.uint32());
                    break;
                case /* optional uint32 skill_id */ 2:
                    message.skillId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 cost_dice_index_list = 8; */
        if (message.costDiceIndexList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costDiceIndexList.length; i++)
                writer.uint32(message.costDiceIndexList[i]);
            writer.join();
        }
        /* optional uint32 skill_id = 2; */
        if (message.skillId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationAttack
 */
exports.GCGOperationAttack = new GCGOperationAttack$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationPass$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationPass", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationPass
 */
exports.GCGOperationPass = new GCGOperationPass$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationPlayCard$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationPlayCard", [
            { no: 12, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "cost_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "target_card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costDiceIndexList: [], targetCardGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_guid */ 12:
                    message.cardGuid = reader.uint32();
                    break;
                case /* repeated uint32 cost_dice_index_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costDiceIndexList.push(reader.uint32());
                    else
                        message.costDiceIndexList.push(reader.uint32());
                    break;
                case /* repeated uint32 target_card_guid_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetCardGuidList.push(reader.uint32());
                    else
                        message.targetCardGuidList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_guid = 12; */
        if (message.cardGuid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* repeated uint32 cost_dice_index_list = 4; */
        if (message.costDiceIndexList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costDiceIndexList.length; i++)
                writer.uint32(message.costDiceIndexList[i]);
            writer.join();
        }
        /* repeated uint32 target_card_guid_list = 10; */
        if (message.targetCardGuidList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetCardGuidList.length; i++)
                writer.uint32(message.targetCardGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationPlayCard
 */
exports.GCGOperationPlayCard = new GCGOperationPlayCard$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationReboot$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationReboot", [
            { no: 7, name: "cost_card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costCardGuidList: [], diceIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 cost_card_guid_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costCardGuidList.push(reader.uint32());
                    else
                        message.costCardGuidList.push(reader.uint32());
                    break;
                case /* repeated uint32 dice_index_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.diceIndexList.push(reader.uint32());
                    else
                        message.diceIndexList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 cost_card_guid_list = 7; */
        if (message.costCardGuidList.length) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costCardGuidList.length; i++)
                writer.uint32(message.costCardGuidList[i]);
            writer.join();
        }
        /* repeated uint32 dice_index_list = 6; */
        if (message.diceIndexList.length) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.diceIndexList.length; i++)
                writer.uint32(message.diceIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationReboot
 */
exports.GCGOperationReboot = new GCGOperationReboot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationSurrender$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationSurrender", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationSurrender
 */
exports.GCGOperationSurrender = new GCGOperationSurrender$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperation$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperation", [
            { no: 10, name: "op_redraw", kind: "message", oneof: "op", T: () => exports.GCGOperationRedraw },
            { no: 4, name: "op_select_on_stage", kind: "message", oneof: "op", T: () => exports.GCGOperationOnStageSelect },
            { no: 9, name: "op_reroll", kind: "message", oneof: "op", T: () => exports.GCGOperationReroll },
            { no: 11, name: "op_attack", kind: "message", oneof: "op", T: () => exports.GCGOperationAttack },
            { no: 15, name: "op_pass", kind: "message", oneof: "op", T: () => exports.GCGOperationPass },
            { no: 2, name: "op_play_card", kind: "message", oneof: "op", T: () => exports.GCGOperationPlayCard },
            { no: 5, name: "op_reboot", kind: "message", oneof: "op", T: () => exports.GCGOperationReboot },
            { no: 1, name: "op_surrender", kind: "message", oneof: "op", T: () => exports.GCGOperationSurrender }
        ]);
    }
    create(value) {
        const message = { op: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.midnights.game.GCGOperationRedraw op_redraw */ 10:
                    message.op = {
                        oneofKind: "opRedraw",
                        opRedraw: exports.GCGOperationRedraw.internalBinaryRead(reader, reader.uint32(), options, message.op.opRedraw)
                    };
                    break;
                case /* com.midnights.game.GCGOperationOnStageSelect op_select_on_stage */ 4:
                    message.op = {
                        oneofKind: "opSelectOnStage",
                        opSelectOnStage: exports.GCGOperationOnStageSelect.internalBinaryRead(reader, reader.uint32(), options, message.op.opSelectOnStage)
                    };
                    break;
                case /* com.midnights.game.GCGOperationReroll op_reroll */ 9:
                    message.op = {
                        oneofKind: "opReroll",
                        opReroll: exports.GCGOperationReroll.internalBinaryRead(reader, reader.uint32(), options, message.op.opReroll)
                    };
                    break;
                case /* com.midnights.game.GCGOperationAttack op_attack */ 11:
                    message.op = {
                        oneofKind: "opAttack",
                        opAttack: exports.GCGOperationAttack.internalBinaryRead(reader, reader.uint32(), options, message.op.opAttack)
                    };
                    break;
                case /* com.midnights.game.GCGOperationPass op_pass */ 15:
                    message.op = {
                        oneofKind: "opPass",
                        opPass: exports.GCGOperationPass.internalBinaryRead(reader, reader.uint32(), options, message.op.opPass)
                    };
                    break;
                case /* com.midnights.game.GCGOperationPlayCard op_play_card */ 2:
                    message.op = {
                        oneofKind: "opPlayCard",
                        opPlayCard: exports.GCGOperationPlayCard.internalBinaryRead(reader, reader.uint32(), options, message.op.opPlayCard)
                    };
                    break;
                case /* com.midnights.game.GCGOperationReboot op_reboot */ 5:
                    message.op = {
                        oneofKind: "opReboot",
                        opReboot: exports.GCGOperationReboot.internalBinaryRead(reader, reader.uint32(), options, message.op.opReboot)
                    };
                    break;
                case /* com.midnights.game.GCGOperationSurrender op_surrender */ 1:
                    message.op = {
                        oneofKind: "opSurrender",
                        opSurrender: exports.GCGOperationSurrender.internalBinaryRead(reader, reader.uint32(), options, message.op.opSurrender)
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
        /* com.midnights.game.GCGOperationRedraw op_redraw = 10; */
        if (message.op.oneofKind === "opRedraw")
            exports.GCGOperationRedraw.internalBinaryWrite(message.op.opRedraw, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGOperationOnStageSelect op_select_on_stage = 4; */
        if (message.op.oneofKind === "opSelectOnStage")
            exports.GCGOperationOnStageSelect.internalBinaryWrite(message.op.opSelectOnStage, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGOperationReroll op_reroll = 9; */
        if (message.op.oneofKind === "opReroll")
            exports.GCGOperationReroll.internalBinaryWrite(message.op.opReroll, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGOperationAttack op_attack = 11; */
        if (message.op.oneofKind === "opAttack")
            exports.GCGOperationAttack.internalBinaryWrite(message.op.opAttack, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGOperationPass op_pass = 15; */
        if (message.op.oneofKind === "opPass")
            exports.GCGOperationPass.internalBinaryWrite(message.op.opPass, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGOperationPlayCard op_play_card = 2; */
        if (message.op.oneofKind === "opPlayCard")
            exports.GCGOperationPlayCard.internalBinaryWrite(message.op.opPlayCard, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGOperationReboot op_reboot = 5; */
        if (message.op.oneofKind === "opReboot")
            exports.GCGOperationReboot.internalBinaryWrite(message.op.opReboot, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GCGOperationSurrender op_surrender = 1; */
        if (message.op.oneofKind === "opSurrender")
            exports.GCGOperationSurrender.internalBinaryWrite(message.op.opSurrender, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperation
 */
exports.GCGOperation = new GCGOperation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationData", [
            { no: 2, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "op", kind: "message", T: () => exports.GCGOperation }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 2:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGOperation op */ 12:
                    message.op = exports.GCGOperation.internalBinaryRead(reader, reader.uint32(), options, message.op);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 2; */
        if (message.controllerId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGOperation op = 12; */
        if (message.op)
            exports.GCGOperation.internalBinaryWrite(message.op, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationData
 */
exports.GCGOperationData = new GCGOperationData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationReplay$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationReplay", [
            { no: 1, name: "game_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "seed", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "operation_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGOperationData }
        ]);
    }
    create(value) {
        const message = { operationDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 game_id */ 1:
                    message.gameId = reader.uint32();
                    break;
                case /* optional uint32 seed */ 11:
                    message.seed = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGOperationData operation_data_list */ 9:
                    message.operationDataList.push(exports.GCGOperationData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 game_id = 1; */
        if (message.gameId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gameId);
        /* optional uint32 seed = 11; */
        if (message.seed !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.seed);
        /* repeated com.midnights.game.GCGOperationData operation_data_list = 9; */
        for (let i = 0; i < message.operationDataList.length; i++)
            exports.GCGOperationData.internalBinaryWrite(message.operationDataList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationReplay
 */
exports.GCGOperationReplay = new GCGOperationReplay$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGToken$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGToken", [
            { no: 11, name: "value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 value */ 11:
                    message.value = reader.uint32();
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
        /* optional uint32 value = 11; */
        if (message.value !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.value);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGToken
 */
exports.GCGToken = new GCGToken$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGCard$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGCard", [
            { no: 15, name: "guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "token_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGToken },
            { no: 14, name: "is_show", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "face_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { tokenList: [], tagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 guid */ 15:
                    message.guid = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGToken token_list */ 2:
                    message.tokenList.push(exports.GCGToken.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_show */ 14:
                    message.isShow = reader.bool();
                    break;
                case /* optional uint32 controller_id */ 7:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional uint32 id */ 6:
                    message.id = reader.uint32();
                    break;
                case /* repeated uint32 tag_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* optional uint32 face_type */ 5:
                    message.faceType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 guid = 15; */
        if (message.guid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.guid);
        /* repeated com.midnights.game.GCGToken token_list = 2; */
        for (let i = 0; i < message.tokenList.length; i++)
            exports.GCGToken.internalBinaryWrite(message.tokenList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_show = 14; */
        if (message.isShow !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isShow);
        /* optional uint32 controller_id = 7; */
        if (message.controllerId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional uint32 id = 6; */
        if (message.id !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.id);
        /* repeated uint32 tag_list = 3; */
        if (message.tagList.length) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.uint32(message.tagList[i]);
            writer.join();
        }
        /* optional uint32 face_type = 5; */
        if (message.faceType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.faceType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGCard
 */
exports.GCGCard = new GCGCard$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGZone$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGZone", [
            { no: 4, name: "card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
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
                case /* repeated uint32 card_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardList.push(reader.uint32());
                    else
                        message.cardList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 card_list = 4; */
        if (message.cardList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardList.length; i++)
                writer.uint32(message.cardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGZone
 */
exports.GCGZone = new GCGZone$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGWaitingCharacter$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGWaitingCharacter", [
            { no: 2, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cond_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 cond_count */ 14:
                    message.condCount = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 cond_count = 14; */
        if (message.condCount !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.condCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGWaitingCharacter
 */
exports.GCGWaitingCharacter = new GCGWaitingCharacter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayerField$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGPlayerField", [
            { no: 2, name: "modify_zone_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.GCGZone } },
            { no: 383, name: "cur_waiting_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "summon_zone", kind: "message", T: () => exports.GCGZone },
            { no: 8, name: "field_show_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "card_back_show_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "dice_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "on_stage_zone", kind: "message", T: () => exports.GCGZone },
            { no: 7, name: "is_passed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "character_zone", kind: "message", T: () => exports.GCGZone },
            { no: 6, name: "on_stage_character_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "assist_zone", kind: "message", T: () => exports.GCGZone },
            { no: 13, name: "deck_card_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "dice_side_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["com.midnights.game.GCGDiceSideType", cmd_gcg_common_5.GCGDiceSideType] },
            { no: 9, name: "hand_zone", kind: "message", T: () => exports.GCGZone },
            { no: 1192, name: "intention_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGPVEIntention },
            { no: 4, name: "waiting_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGWaitingCharacter }
        ]);
    }
    create(value) {
        const message = { modifyZoneMap: {}, diceSideList: [], intentionList: [], waitingList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.GCGZone> modify_zone_map */ 2:
                    this.binaryReadMap2(message.modifyZoneMap, reader, options);
                    break;
                case /* optional uint32 cur_waiting_index */ 383:
                    message.curWaitingIndex = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGZone summon_zone */ 1:
                    message.summonZone = exports.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.summonZone);
                    break;
                case /* optional uint32 field_show_id */ 8:
                    message.fieldShowId = reader.uint32();
                    break;
                case /* optional uint32 card_back_show_id */ 12:
                    message.cardBackShowId = reader.uint32();
                    break;
                case /* optional uint32 dice_count */ 3:
                    message.diceCount = reader.uint32();
                    break;
                case /* optional uint32 controller_id */ 10:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGZone on_stage_zone */ 14:
                    message.onStageZone = exports.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.onStageZone);
                    break;
                case /* optional bool is_passed */ 7:
                    message.isPassed = reader.bool();
                    break;
                case /* optional com.midnights.game.GCGZone character_zone */ 5:
                    message.characterZone = exports.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.characterZone);
                    break;
                case /* optional uint32 on_stage_character_guid */ 6:
                    message.onStageCharacterGuid = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGZone assist_zone */ 15:
                    message.assistZone = exports.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.assistZone);
                    break;
                case /* optional uint32 deck_card_num */ 13:
                    message.deckCardNum = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGDiceSideType dice_side_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.diceSideList.push(reader.int32());
                    else
                        message.diceSideList.push(reader.int32());
                    break;
                case /* optional com.midnights.game.GCGZone hand_zone */ 9:
                    message.handZone = exports.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.handZone);
                    break;
                case /* repeated com.midnights.game.GCGPVEIntention intention_list */ 1192:
                    message.intentionList.push(exports.GCGPVEIntention.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.GCGWaitingCharacter waiting_list */ 4:
                    message.waitingList.push(exports.GCGWaitingCharacter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.GCGZone.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGPlayerField.modify_zone_map");
            }
        }
        map[key ?? 0] = val ?? exports.GCGZone.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.GCGZone> modify_zone_map = 2; */
        for (let k of Object.keys(message.modifyZoneMap)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.GCGZone.internalBinaryWrite(message.modifyZoneMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 cur_waiting_index = 383; */
        if (message.curWaitingIndex !== undefined)
            writer.tag(383, runtime_1.WireType.Varint).uint32(message.curWaitingIndex);
        /* optional com.midnights.game.GCGZone summon_zone = 1; */
        if (message.summonZone)
            exports.GCGZone.internalBinaryWrite(message.summonZone, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 field_show_id = 8; */
        if (message.fieldShowId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.fieldShowId);
        /* optional uint32 card_back_show_id = 12; */
        if (message.cardBackShowId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cardBackShowId);
        /* optional uint32 dice_count = 3; */
        if (message.diceCount !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.diceCount);
        /* optional uint32 controller_id = 10; */
        if (message.controllerId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional com.midnights.game.GCGZone on_stage_zone = 14; */
        if (message.onStageZone)
            exports.GCGZone.internalBinaryWrite(message.onStageZone, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_passed = 7; */
        if (message.isPassed !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isPassed);
        /* optional com.midnights.game.GCGZone character_zone = 5; */
        if (message.characterZone)
            exports.GCGZone.internalBinaryWrite(message.characterZone, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 on_stage_character_guid = 6; */
        if (message.onStageCharacterGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.onStageCharacterGuid);
        /* optional com.midnights.game.GCGZone assist_zone = 15; */
        if (message.assistZone)
            exports.GCGZone.internalBinaryWrite(message.assistZone, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 deck_card_num = 13; */
        if (message.deckCardNum !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.deckCardNum);
        /* repeated com.midnights.game.GCGDiceSideType dice_side_list = 11; */
        if (message.diceSideList.length) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.diceSideList.length; i++)
                writer.int32(message.diceSideList[i]);
            writer.join();
        }
        /* optional com.midnights.game.GCGZone hand_zone = 9; */
        if (message.handZone)
            exports.GCGZone.internalBinaryWrite(message.handZone, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.GCGPVEIntention intention_list = 1192; */
        for (let i = 0; i < message.intentionList.length; i++)
            exports.GCGPVEIntention.internalBinaryWrite(message.intentionList[i], writer.tag(1192, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.GCGWaitingCharacter waiting_list = 4; */
        for (let i = 0; i < message.waitingList.length; i++)
            exports.GCGWaitingCharacter.internalBinaryWrite(message.waitingList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGPlayerField
 */
exports.GCGPlayerField = new GCGPlayerField$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGPhase$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGPhase", [
            { no: 5, name: "phase_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGPhaseType", cmd_gcg_common_7.GCGPhaseType] },
            { no: 6, name: "allow_controller_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { allowControllerMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGPhaseType phase_type */ 5:
                    message.phaseType = reader.int32();
                    break;
                case /* map<uint32, uint32> allow_controller_map */ 6:
                    this.binaryReadMap6(message.allowControllerMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGPhase.allow_controller_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGPhaseType phase_type = 5; */
        if (message.phaseType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.phaseType);
        /* map<uint32, uint32> allow_controller_map = 6; */
        for (let k of Object.keys(message.allowControllerMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.allowControllerMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGPhase
 */
exports.GCGPhase = new GCGPhase$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGControllerShowInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGControllerShowInfo", [
            { no: 11, name: "profile_picture", kind: "message", T: () => define_2.ProfilePicture },
            { no: 14, name: "nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 11:
                    message.profilePicture = define_2.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* optional string nick_name */ 14:
                    message.nickName = reader.string();
                    break;
                case /* optional uint32 controller_id */ 9:
                    message.controllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ProfilePicture profile_picture = 11; */
        if (message.profilePicture)
            define_2.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string nick_name = 14; */
        if (message.nickName !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.nickName);
        /* optional uint32 controller_id = 9; */
        if (message.controllerId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGControllerShowInfo
 */
exports.GCGControllerShowInfo = new GCGControllerShowInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGPVEIntention$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGPVEIntention", [
            { no: 9, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "skill_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_guid */ 9:
                    message.cardGuid = reader.uint32();
                    break;
                case /* repeated uint32 skill_id_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillIdList.push(reader.uint32());
                    else
                        message.skillIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_guid = 9; */
        if (message.cardGuid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* repeated uint32 skill_id_list = 7; */
        if (message.skillIdList.length) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillIdList.length; i++)
                writer.uint32(message.skillIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGPVEIntention
 */
exports.GCGPVEIntention = new GCGPVEIntention$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDuelChallenge$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDuelChallenge", [
            { no: 7, name: "total_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cur_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 total_progress */ 7:
                    message.totalProgress = reader.uint32();
                    break;
                case /* optional uint32 challenge_id */ 10:
                    message.challengeId = reader.uint32();
                    break;
                case /* optional uint32 cur_progress */ 12:
                    message.curProgress = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 total_progress = 7; */
        if (message.totalProgress !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* optional uint32 challenge_id = 10; */
        if (message.challengeId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* optional uint32 cur_progress = 12; */
        if (message.curProgress !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDuelChallenge
 */
exports.GCGDuelChallenge = new GCGDuelChallenge$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDuel$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDuel", [
            { no: 3, name: "server_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGPlayerField },
            { no: 14, name: "business_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGGameBusinessType", cmd_gcg_common_2.GCGGameBusinessType] },
            { no: 5, name: "challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGDuelChallenge },
            { no: 11, name: "game_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "round", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cur_controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "intetion_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGPVEIntention },
            { no: 10, name: "cost_revise", kind: "message", T: () => exports.GCGCostReviseInfo },
            { no: 4, name: "card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGCard },
            { no: 6, name: "show_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGControllerShowInfo },
            { no: 2, name: "game_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "phase", kind: "message", T: () => exports.GCGPhase }
        ]);
    }
    create(value) {
        const message = { fieldList: [], challengeList: [], intetionList: [], cardIdList: [], cardList: [], showInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 server_seq */ 3:
                    message.serverSeq = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGPlayerField field_list */ 7:
                    message.fieldList.push(exports.GCGPlayerField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.GCGGameBusinessType business_type */ 14:
                    message.businessType = reader.int32();
                    break;
                case /* repeated com.midnights.game.GCGDuelChallenge challenge_list */ 5:
                    message.challengeList.push(exports.GCGDuelChallenge.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 game_id */ 11:
                    message.gameId = reader.uint32();
                    break;
                case /* optional uint32 controller_id */ 13:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional uint32 round */ 15:
                    message.round = reader.uint32();
                    break;
                case /* optional uint32 cur_controller_id */ 12:
                    message.curControllerId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGPVEIntention intetion_list */ 1:
                    message.intetionList.push(exports.GCGPVEIntention.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.GCGCostReviseInfo cost_revise */ 10:
                    message.costRevise = exports.GCGCostReviseInfo.internalBinaryRead(reader, reader.uint32(), options, message.costRevise);
                    break;
                case /* repeated uint32 card_id_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardIdList.push(reader.uint32());
                    else
                        message.cardIdList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.GCGCard card_list */ 9:
                    message.cardList.push(exports.GCGCard.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.GCGControllerShowInfo show_info_list */ 6:
                    message.showInfoList.push(exports.GCGControllerShowInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 game_type */ 2:
                    message.gameType = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGPhase phase */ 8:
                    message.phase = exports.GCGPhase.internalBinaryRead(reader, reader.uint32(), options, message.phase);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 server_seq = 3; */
        if (message.serverSeq !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.serverSeq);
        /* repeated com.midnights.game.GCGPlayerField field_list = 7; */
        for (let i = 0; i < message.fieldList.length; i++)
            exports.GCGPlayerField.internalBinaryWrite(message.fieldList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.GCGGameBusinessType business_type = 14; */
        if (message.businessType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.businessType);
        /* repeated com.midnights.game.GCGDuelChallenge challenge_list = 5; */
        for (let i = 0; i < message.challengeList.length; i++)
            exports.GCGDuelChallenge.internalBinaryWrite(message.challengeList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 game_id = 11; */
        if (message.gameId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.gameId);
        /* optional uint32 controller_id = 13; */
        if (message.controllerId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional uint32 round = 15; */
        if (message.round !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.round);
        /* optional uint32 cur_controller_id = 12; */
        if (message.curControllerId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curControllerId);
        /* repeated com.midnights.game.GCGPVEIntention intetion_list = 1; */
        for (let i = 0; i < message.intetionList.length; i++)
            exports.GCGPVEIntention.internalBinaryWrite(message.intetionList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.GCGCostReviseInfo cost_revise = 10; */
        if (message.costRevise)
            exports.GCGCostReviseInfo.internalBinaryWrite(message.costRevise, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 card_id_list = 4; */
        if (message.cardIdList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardIdList.length; i++)
                writer.uint32(message.cardIdList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.GCGCard card_list = 9; */
        for (let i = 0; i < message.cardList.length; i++)
            exports.GCGCard.internalBinaryWrite(message.cardList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.GCGControllerShowInfo show_info_list = 6; */
        for (let i = 0; i < message.showInfoList.length; i++)
            exports.GCGControllerShowInfo.internalBinaryWrite(message.showInfoList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 game_type = 2; */
        if (message.gameType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.gameType);
        /* optional com.midnights.game.GCGPhase phase = 8; */
        if (message.phase)
            exports.GCGPhase.internalBinaryWrite(message.phase, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDuel
 */
exports.GCGDuel = new GCGDuel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGNewCardInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGNewCardInfoNotify", [
            { no: 1, name: "card", kind: "message", T: () => exports.GCGCard }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGCard card */ 1:
                    message.card = exports.GCGCard.internalBinaryRead(reader, reader.uint32(), options, message.card);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGCard card = 1; */
        if (message.card)
            exports.GCGCard.internalBinaryWrite(message.card, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGNewCardInfoNotify
 */
exports.GCGNewCardInfoNotify = new GCGNewCardInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationReq", [
            { no: 2, name: "op_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "redirect_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "op", kind: "message", T: () => exports.GCGOperation }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 op_seq */ 2:
                    message.opSeq = reader.uint32();
                    break;
                case /* optional uint32 redirect_uid */ 7:
                    message.redirectUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGOperation op */ 15:
                    message.op = exports.GCGOperation.internalBinaryRead(reader, reader.uint32(), options, message.op);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 op_seq = 2; */
        if (message.opSeq !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.opSeq);
        /* optional uint32 redirect_uid = 7; */
        if (message.redirectUid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.redirectUid);
        /* optional com.midnights.game.GCGOperation op = 15; */
        if (message.op)
            exports.GCGOperation.internalBinaryWrite(message.op, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationReq
 */
exports.GCGOperationReq = new GCGOperationReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGOperationRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "op_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 op_seq */ 4:
                    message.opSeq = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 op_seq = 4; */
        if (message.opSeq !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.opSeq);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGOperationRsp
 */
exports.GCGOperationRsp = new GCGOperationRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGMessagePackNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGMessagePackNotify", [
            { no: 5, name: "server_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "message_pack", kind: "message", T: () => exports.GCGMessagePack }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 server_seq */ 5:
                    message.serverSeq = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGMessagePack message_pack */ 8:
                    message.messagePack = exports.GCGMessagePack.internalBinaryRead(reader, reader.uint32(), options, message.messagePack);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 server_seq = 5; */
        if (message.serverSeq !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.serverSeq);
        /* optional com.midnights.game.GCGMessagePack message_pack = 8; */
        if (message.messagePack)
            exports.GCGMessagePack.internalBinaryWrite(message.messagePack, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGMessagePackNotify
 */
exports.GCGMessagePackNotify = new GCGMessagePackNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGAskDuelReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGAskDuelReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGAskDuelReq
 */
exports.GCGAskDuelReq = new GCGAskDuelReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGAskDuelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGAskDuelRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "duel", kind: "message", T: () => exports.GCGDuel }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.GCGDuel duel */ 13:
                    message.duel = exports.GCGDuel.internalBinaryRead(reader, reader.uint32(), options, message.duel);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.GCGDuel duel = 13; */
        if (message.duel)
            exports.GCGDuel.internalBinaryWrite(message.duel, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGAskDuelRsp
 */
exports.GCGAskDuelRsp = new GCGAskDuelRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayerBriefData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGPlayerBriefData", [
            { no: 8, name: "card_face_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "nick_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "profile_picture", kind: "message", T: () => define_2.ProfilePicture },
            { no: 3, name: "card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardFaceMap: {}, cardIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> card_face_map */ 8:
                    this.binaryReadMap8(message.cardFaceMap, reader, options);
                    break;
                case /* optional string nick_name */ 9:
                    message.nickName = reader.string();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 12:
                    message.profilePicture = define_2.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* repeated uint32 card_id_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardIdList.push(reader.uint32());
                    else
                        message.cardIdList.push(reader.uint32());
                    break;
                case /* optional uint32 controller_id */ 5:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 10:
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGPlayerBriefData.card_face_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> card_face_map = 8; */
        for (let k of Object.keys(message.cardFaceMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.cardFaceMap[k]).join();
        /* optional string nick_name = 9; */
        if (message.nickName !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.nickName);
        /* optional com.midnights.game.ProfilePicture profile_picture = 12; */
        if (message.profilePicture)
            define_2.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 card_id_list = 3; */
        if (message.cardIdList.length) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardIdList.length; i++)
                writer.uint32(message.cardIdList[i]);
            writer.join();
        }
        /* optional uint32 controller_id = 5; */
        if (message.controllerId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional uint32 uid = 10; */
        if (message.uid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGPlayerBriefData
 */
exports.GCGPlayerBriefData = new GCGPlayerBriefData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGGameBriefData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGGameBriefData", [
            { no: 14, name: "game_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "game_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "business_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGGameBusinessType", cmd_gcg_common_2.GCGGameBusinessType] },
            { no: 5, name: "verify_code", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "player_brief_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGPlayerBriefData }
        ]);
    }
    create(value) {
        const message = { playerBriefList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 game_id */ 14:
                    message.gameId = reader.uint32();
                    break;
                case /* optional uint32 game_uid */ 9:
                    message.gameUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGGameBusinessType business_type */ 13:
                    message.businessType = reader.int32();
                    break;
                case /* optional uint32 verify_code */ 5:
                    message.verifyCode = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGPlayerBriefData player_brief_list */ 12:
                    message.playerBriefList.push(exports.GCGPlayerBriefData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 game_id = 14; */
        if (message.gameId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.gameId);
        /* optional uint32 game_uid = 9; */
        if (message.gameUid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.gameUid);
        /* optional com.midnights.game.GCGGameBusinessType business_type = 13; */
        if (message.businessType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.businessType);
        /* optional uint32 verify_code = 5; */
        if (message.verifyCode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.verifyCode);
        /* repeated com.midnights.game.GCGPlayerBriefData player_brief_list = 12; */
        for (let i = 0; i < message.playerBriefList.length; i++)
            exports.GCGPlayerBriefData.internalBinaryWrite(message.playerBriefList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGGameBriefData
 */
exports.GCGGameBriefData = new GCGGameBriefData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGGameBriefDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGGameBriefDataNotify", [
            { no: 10, name: "gcg_brief_data", kind: "message", T: () => exports.GCGGameBriefData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGGameBriefData gcg_brief_data */ 10:
                    message.gcgBriefData = exports.GCGGameBriefData.internalBinaryRead(reader, reader.uint32(), options, message.gcgBriefData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGGameBriefData gcg_brief_data = 10; */
        if (message.gcgBriefData)
            exports.GCGGameBriefData.internalBinaryWrite(message.gcgBriefData, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGGameBriefDataNotify
 */
exports.GCGGameBriefDataNotify = new GCGGameBriefDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGInitFinishReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGInitFinishReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGInitFinishReq
 */
exports.GCGInitFinishReq = new GCGInitFinishReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGInitFinishRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGInitFinishRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.GCGInitFinishRsp
 */
exports.GCGInitFinishRsp = new GCGInitFinishRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGHeartBeatNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGHeartBeatNotify", [
            { no: 6, name: "server_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 server_seq */ 6:
                    message.serverSeq = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 server_seq = 6; */
        if (message.serverSeq !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.serverSeq);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGHeartBeatNotify
 */
exports.GCGHeartBeatNotify = new GCGHeartBeatNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewHpInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewHpInfo", [
            { no: 4, name: "change_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGSkillHpChangeType", GCGSkillHpChangeType] },
            { no: 13, name: "hp_change_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGSkillHpChangeType change_type */ 4:
                    message.changeType = reader.int32();
                    break;
                case /* optional uint32 hp_change_value */ 13:
                    message.hpChangeValue = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGSkillHpChangeType change_type = 4; */
        if (message.changeType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.changeType);
        /* optional uint32 hp_change_value = 13; */
        if (message.hpChangeValue !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.hpChangeValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewHpInfo
 */
exports.GCGSkillPreviewHpInfo = new GCGSkillPreviewHpInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewReactionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewReactionInfo", [
            { no: 13, name: "source_element", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "target_element", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 source_element */ 13:
                    message.sourceElement = reader.uint32();
                    break;
                case /* optional uint32 target_element */ 1:
                    message.targetElement = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 source_element = 13; */
        if (message.sourceElement !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.sourceElement);
        /* optional uint32 target_element = 1; */
        if (message.targetElement !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.targetElement);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewReactionInfo
 */
exports.GCGSkillPreviewReactionInfo = new GCGSkillPreviewReactionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewElementReactionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewElementReactionInfo", [
            { no: 8, name: "fresh_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "source_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "reaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGSkillPreviewReactionInfo }
        ]);
    }
    create(value) {
        const message = { freshList: [], sourceList: [], reactionList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 fresh_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.freshList.push(reader.uint32());
                    else
                        message.freshList.push(reader.uint32());
                    break;
                case /* repeated uint32 source_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sourceList.push(reader.uint32());
                    else
                        message.sourceList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.GCGSkillPreviewReactionInfo reaction_list */ 14:
                    message.reactionList.push(exports.GCGSkillPreviewReactionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 fresh_list = 8; */
        if (message.freshList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.freshList.length; i++)
                writer.uint32(message.freshList[i]);
            writer.join();
        }
        /* repeated uint32 source_list = 2; */
        if (message.sourceList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sourceList.length; i++)
                writer.uint32(message.sourceList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.GCGSkillPreviewReactionInfo reaction_list = 14; */
        for (let i = 0; i < message.reactionList.length; i++)
            exports.GCGSkillPreviewReactionInfo.internalBinaryWrite(message.reactionList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewElementReactionInfo
 */
exports.GCGSkillPreviewElementReactionInfo = new GCGSkillPreviewElementReactionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewCardInfo", [
            { no: 3, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "owner_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "zone_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGZoneType", cmd_gcg_common_6.GCGZoneType] },
            { no: 13, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 controller_id */ 3:
                    message.controllerId = reader.uint32();
                    break;
                case /* optional uint32 owner_card_guid */ 11:
                    message.ownerCardGuid = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGZoneType zone_type */ 14:
                    message.zoneType = reader.int32();
                    break;
                case /* optional uint32 card_id */ 13:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 card_guid */ 6:
                    message.cardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 controller_id = 3; */
        if (message.controllerId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* optional uint32 owner_card_guid = 11; */
        if (message.ownerCardGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.ownerCardGuid);
        /* optional com.midnights.game.GCGZoneType zone_type = 14; */
        if (message.zoneType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.zoneType);
        /* optional uint32 card_id = 13; */
        if (message.cardId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 card_guid = 6; */
        if (message.cardGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewCardInfo
 */
exports.GCGSkillPreviewCardInfo = new GCGSkillPreviewCardInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewOnstageChangeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewOnstageChangeInfo", [
            { no: 6, name: "target_onstage_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "source_onstage_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_onstage_card_guid */ 6:
                    message.targetOnstageCardGuid = reader.uint32();
                    break;
                case /* optional uint32 source_onstage_card_guid */ 15:
                    message.sourceOnstageCardGuid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_onstage_card_guid = 6; */
        if (message.targetOnstageCardGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.targetOnstageCardGuid);
        /* optional uint32 source_onstage_card_guid = 15; */
        if (message.sourceOnstageCardGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sourceOnstageCardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewOnstageChangeInfo
 */
exports.GCGSkillPreviewOnstageChangeInfo = new GCGSkillPreviewOnstageChangeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewTokenInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewTokenInfo", [
            { no: 3, name: "token_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "after_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "before_value", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 token_type */ 3:
                    message.tokenType = reader.uint32();
                    break;
                case /* optional uint32 after_value */ 12:
                    message.afterValue = reader.uint32();
                    break;
                case /* optional uint32 before_value */ 15:
                    message.beforeValue = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 token_type = 3; */
        if (message.tokenType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.tokenType);
        /* optional uint32 after_value = 12; */
        if (message.afterValue !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.afterValue);
        /* optional uint32 before_value = 15; */
        if (message.beforeValue !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.beforeValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewTokenInfo
 */
exports.GCGSkillPreviewTokenInfo = new GCGSkillPreviewTokenInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewTokenChangeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewTokenChangeInfo", [
            { no: 14, name: "token_change_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGSkillPreviewTokenInfo }
        ]);
    }
    create(value) {
        const message = { tokenChangeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGSkillPreviewTokenInfo token_change_list */ 14:
                    message.tokenChangeList.push(exports.GCGSkillPreviewTokenInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGSkillPreviewTokenInfo token_change_list = 14; */
        for (let i = 0; i < message.tokenChangeList.length; i++)
            exports.GCGSkillPreviewTokenInfo.internalBinaryWrite(message.tokenChangeList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewTokenChangeInfo
 */
exports.GCGSkillPreviewTokenChangeInfo = new GCGSkillPreviewTokenChangeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewInfo", [
            { no: 12, name: "rm_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGSkillPreviewCardInfo },
            { no: 8, name: "hp_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.GCGSkillPreviewHpInfo } },
            { no: 5, name: "reaction_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.GCGSkillPreviewElementReactionInfo } },
            { no: 9, name: "change_onstage_character_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGSkillPreviewOnstageChangeInfo },
            { no: 6, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_token_change_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.GCGSkillPreviewTokenChangeInfo } },
            { no: 11, name: "add_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGSkillPreviewCardInfo }
        ]);
    }
    create(value) {
        const message = { rmCardList: [], hpInfoMap: {}, reactionInfoMap: {}, changeOnstageCharacterList: [], cardTokenChangeMap: {}, addCardList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGSkillPreviewCardInfo rm_card_list */ 12:
                    message.rmCardList.push(exports.GCGSkillPreviewCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, com.midnights.game.GCGSkillPreviewHpInfo> hp_info_map */ 8:
                    this.binaryReadMap8(message.hpInfoMap, reader, options);
                    break;
                case /* map<uint32, com.midnights.game.GCGSkillPreviewElementReactionInfo> reaction_info_map */ 5:
                    this.binaryReadMap5(message.reactionInfoMap, reader, options);
                    break;
                case /* repeated com.midnights.game.GCGSkillPreviewOnstageChangeInfo change_onstage_character_list */ 9:
                    message.changeOnstageCharacterList.push(exports.GCGSkillPreviewOnstageChangeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 skill_id */ 6:
                    message.skillId = reader.uint32();
                    break;
                case /* map<uint32, com.midnights.game.GCGSkillPreviewTokenChangeInfo> card_token_change_map */ 3:
                    this.binaryReadMap3(message.cardTokenChangeMap, reader, options);
                    break;
                case /* repeated com.midnights.game.GCGSkillPreviewCardInfo add_card_list */ 11:
                    message.addCardList.push(exports.GCGSkillPreviewCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.GCGSkillPreviewHpInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGSkillPreviewInfo.hp_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.GCGSkillPreviewHpInfo.create();
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
                    val = exports.GCGSkillPreviewElementReactionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGSkillPreviewInfo.reaction_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.GCGSkillPreviewElementReactionInfo.create();
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
                    val = exports.GCGSkillPreviewTokenChangeInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.GCGSkillPreviewInfo.card_token_change_map");
            }
        }
        map[key ?? 0] = val ?? exports.GCGSkillPreviewTokenChangeInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGSkillPreviewCardInfo rm_card_list = 12; */
        for (let i = 0; i < message.rmCardList.length; i++)
            exports.GCGSkillPreviewCardInfo.internalBinaryWrite(message.rmCardList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, com.midnights.game.GCGSkillPreviewHpInfo> hp_info_map = 8; */
        for (let k of Object.keys(message.hpInfoMap)) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.GCGSkillPreviewHpInfo.internalBinaryWrite(message.hpInfoMap[k], writer, options);
            writer.join().join();
        }
        /* map<uint32, com.midnights.game.GCGSkillPreviewElementReactionInfo> reaction_info_map = 5; */
        for (let k of Object.keys(message.reactionInfoMap)) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.GCGSkillPreviewElementReactionInfo.internalBinaryWrite(message.reactionInfoMap[k], writer, options);
            writer.join().join();
        }
        /* repeated com.midnights.game.GCGSkillPreviewOnstageChangeInfo change_onstage_character_list = 9; */
        for (let i = 0; i < message.changeOnstageCharacterList.length; i++)
            exports.GCGSkillPreviewOnstageChangeInfo.internalBinaryWrite(message.changeOnstageCharacterList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 skill_id = 6; */
        if (message.skillId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.skillId);
        /* map<uint32, com.midnights.game.GCGSkillPreviewTokenChangeInfo> card_token_change_map = 3; */
        for (let k of Object.keys(message.cardTokenChangeMap)) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.GCGSkillPreviewTokenChangeInfo.internalBinaryWrite(message.cardTokenChangeMap[k], writer, options);
            writer.join().join();
        }
        /* repeated com.midnights.game.GCGSkillPreviewCardInfo add_card_list = 11; */
        for (let i = 0; i < message.addCardList.length; i++)
            exports.GCGSkillPreviewCardInfo.internalBinaryWrite(message.addCardList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewInfo
 */
exports.GCGSkillPreviewInfo = new GCGSkillPreviewInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewNotify", [
            { no: 9, name: "skill_preview_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGSkillPreviewInfo },
            { no: 5, name: "onstage_card_guid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "controller_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillPreviewList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGSkillPreviewInfo skill_preview_list */ 9:
                    message.skillPreviewList.push(exports.GCGSkillPreviewInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 onstage_card_guid */ 5:
                    message.onstageCardGuid = reader.uint32();
                    break;
                case /* optional uint32 controller_id */ 15:
                    message.controllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGSkillPreviewInfo skill_preview_list = 9; */
        for (let i = 0; i < message.skillPreviewList.length; i++)
            exports.GCGSkillPreviewInfo.internalBinaryWrite(message.skillPreviewList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 onstage_card_guid = 5; */
        if (message.onstageCardGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.onstageCardGuid);
        /* optional uint32 controller_id = 15; */
        if (message.controllerId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewNotify
 */
exports.GCGSkillPreviewNotify = new GCGSkillPreviewNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewAskReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewAskReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewAskReq
 */
exports.GCGSkillPreviewAskReq = new GCGSkillPreviewAskReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewAskRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSkillPreviewAskRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.GCGSkillPreviewAskRsp
 */
exports.GCGSkillPreviewAskRsp = new GCGSkillPreviewAskRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGChallengeUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGChallengeUpdateNotify", [
            { no: 12, name: "server_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "challenge", kind: "message", T: () => exports.GCGDuelChallenge }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 server_seq */ 12:
                    message.serverSeq = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGDuelChallenge challenge */ 13:
                    message.challenge = exports.GCGDuelChallenge.internalBinaryRead(reader, reader.uint32(), options, message.challenge);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 server_seq = 12; */
        if (message.serverSeq !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.serverSeq);
        /* optional com.midnights.game.GCGDuelChallenge challenge = 13; */
        if (message.challenge)
            exports.GCGDuelChallenge.internalBinaryWrite(message.challenge, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGChallengeUpdateNotify
 */
exports.GCGChallengeUpdateNotify = new GCGChallengeUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeckData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSDeckData", [
            { no: 1, name: "card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "card_back_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "character_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "create_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 4, name: "is_valid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "field_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardList: [], characterCardList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 card_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardList.push(reader.uint32());
                    else
                        message.cardList.push(reader.uint32());
                    break;
                case /* optional uint32 card_back_id */ 15:
                    message.cardBackId = reader.uint32();
                    break;
                case /* repeated uint32 character_card_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.characterCardList.push(reader.uint32());
                    else
                        message.characterCardList.push(reader.uint32());
                    break;
                case /* optional string name */ 5:
                    message.name = reader.string();
                    break;
                case /* optional uint32 id */ 3:
                    message.id = reader.uint32();
                    break;
                case /* optional fixed32 create_time */ 13:
                    message.createTime = reader.fixed32();
                    break;
                case /* optional bool is_valid */ 4:
                    message.isValid = reader.bool();
                    break;
                case /* optional uint32 field_id */ 7:
                    message.fieldId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 card_list = 1; */
        if (message.cardList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardList.length; i++)
                writer.uint32(message.cardList[i]);
            writer.join();
        }
        /* optional uint32 card_back_id = 15; */
        if (message.cardBackId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.cardBackId);
        /* repeated uint32 character_card_list = 10; */
        if (message.characterCardList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.characterCardList.length; i++)
                writer.uint32(message.characterCardList[i]);
            writer.join();
        }
        /* optional string name = 5; */
        if (message.name !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.name);
        /* optional uint32 id = 3; */
        if (message.id !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.id);
        /* optional fixed32 create_time = 13; */
        if (message.createTime !== undefined)
            writer.tag(13, runtime_1.WireType.Bit32).fixed32(message.createTime);
        /* optional bool is_valid = 4; */
        if (message.isValid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isValid);
        /* optional uint32 field_id = 7; */
        if (message.fieldId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.fieldId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSDeckData
 */
exports.GCGDSDeckData = new GCGDSDeckData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCardData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSCardData", [
            { no: 14, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "unlock_face_type_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "proficiency", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "face_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockFaceTypeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_id */ 14:
                    message.cardId = reader.uint32();
                    break;
                case /* repeated uint32 unlock_face_type_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockFaceTypeList.push(reader.uint32());
                    else
                        message.unlockFaceTypeList.push(reader.uint32());
                    break;
                case /* optional uint32 num */ 12:
                    message.num = reader.uint32();
                    break;
                case /* optional uint32 proficiency */ 8:
                    message.proficiency = reader.uint32();
                    break;
                case /* optional uint32 face_type */ 6:
                    message.faceType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_id = 14; */
        if (message.cardId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cardId);
        /* repeated uint32 unlock_face_type_list = 9; */
        if (message.unlockFaceTypeList.length) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockFaceTypeList.length; i++)
                writer.uint32(message.unlockFaceTypeList[i]);
            writer.join();
        }
        /* optional uint32 num = 12; */
        if (message.num !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.num);
        /* optional uint32 proficiency = 8; */
        if (message.proficiency !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.proficiency);
        /* optional uint32 face_type = 6; */
        if (message.faceType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.faceType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSCardData
 */
exports.GCGDSCardData = new GCGDSCardData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSDataNotify", [
            { no: 4, name: "deck_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGDSDeckData },
            { no: 5, name: "unlock_card_back_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "unlock_field_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "cur_deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGDSCardData },
            { no: 1, name: "unlock_deck_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { deckList: [], unlockCardBackIdList: [], unlockFieldIdList: [], cardList: [], unlockDeckIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGDSDeckData deck_list */ 4:
                    message.deckList.push(exports.GCGDSDeckData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_card_back_id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockCardBackIdList.push(reader.uint32());
                    else
                        message.unlockCardBackIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 unlock_field_id_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockFieldIdList.push(reader.uint32());
                    else
                        message.unlockFieldIdList.push(reader.uint32());
                    break;
                case /* optional uint32 cur_deck_id */ 10:
                    message.curDeckId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.GCGDSCardData card_list */ 3:
                    message.cardList.push(exports.GCGDSCardData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_deck_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockDeckIdList.push(reader.uint32());
                    else
                        message.unlockDeckIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGDSDeckData deck_list = 4; */
        for (let i = 0; i < message.deckList.length; i++)
            exports.GCGDSDeckData.internalBinaryWrite(message.deckList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_card_back_id_list = 5; */
        if (message.unlockCardBackIdList.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockCardBackIdList.length; i++)
                writer.uint32(message.unlockCardBackIdList[i]);
            writer.join();
        }
        /* repeated uint32 unlock_field_id_list = 6; */
        if (message.unlockFieldIdList.length) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockFieldIdList.length; i++)
                writer.uint32(message.unlockFieldIdList[i]);
            writer.join();
        }
        /* optional uint32 cur_deck_id = 10; */
        if (message.curDeckId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.curDeckId);
        /* repeated com.midnights.game.GCGDSCardData card_list = 3; */
        for (let i = 0; i < message.cardList.length; i++)
            exports.GCGDSCardData.internalBinaryWrite(message.cardList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_deck_id_list = 1; */
        if (message.unlockDeckIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockDeckIdList.length; i++)
                writer.uint32(message.unlockDeckIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSDataNotify
 */
exports.GCGDSDataNotify = new GCGDSDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCardBackUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSCardBackUnlockNotify", [
            { no: 6, name: "card_back_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_back_id */ 6:
                    message.cardBackId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_back_id = 6; */
        if (message.cardBackId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cardBackId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSCardBackUnlockNotify
 */
exports.GCGDSCardBackUnlockNotify = new GCGDSCardBackUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSFieldUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSFieldUnlockNotify", [
            { no: 1, name: "field_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 field_id */ 1:
                    message.fieldId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 field_id = 1; */
        if (message.fieldId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.fieldId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSFieldUnlockNotify
 */
exports.GCGDSFieldUnlockNotify = new GCGDSFieldUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCardFaceUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSCardFaceUnlockNotify", [
            { no: 13, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "face_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_id */ 13:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 face_type */ 1:
                    message.faceType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_id = 13; */
        if (message.cardId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 face_type = 1; */
        if (message.faceType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.faceType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSCardFaceUnlockNotify
 */
exports.GCGDSCardFaceUnlockNotify = new GCGDSCardFaceUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCardNumChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSCardNumChangeNotify", [
            { no: 4, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 card_id */ 4:
                    message.cardId = reader.uint32();
                    break;
                case /* optional uint32 num */ 10:
                    message.num = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 card_id = 4; */
        if (message.cardId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cardId);
        /* optional uint32 num = 10; */
        if (message.num !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.num);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSCardNumChangeNotify
 */
exports.GCGDSCardNumChangeNotify = new GCGDSCardNumChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeCardFaceReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeCardFaceReq", [
            { no: 6, name: "face_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 face_type */ 6:
                    message.faceType = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 3:
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
        /* optional uint32 face_type = 6; */
        if (message.faceType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.faceType);
        /* optional uint32 card_id = 3; */
        if (message.cardId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.cardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeCardFaceReq
 */
exports.GCGDSChangeCardFaceReq = new GCGDSChangeCardFaceReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeCardFaceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeCardFaceRsp", [
            { no: 8, name: "face_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 face_type */ 8:
                    message.faceType = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 4:
                    message.cardId = reader.uint32();
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
        /* optional uint32 face_type = 8; */
        if (message.faceType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.faceType);
        /* optional uint32 card_id = 4; */
        if (message.cardId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cardId);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeCardFaceRsp
 */
exports.GCGDSChangeCardFaceRsp = new GCGDSChangeCardFaceRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeCardBackReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeCardBackReq", [
            { no: 10, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "card_back_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 10:
                    message.deckId = reader.uint32();
                    break;
                case /* optional uint32 card_back_id */ 12:
                    message.cardBackId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 10; */
        if (message.deckId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.deckId);
        /* optional uint32 card_back_id = 12; */
        if (message.cardBackId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cardBackId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeCardBackReq
 */
exports.GCGDSChangeCardBackReq = new GCGDSChangeCardBackReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeCardBackRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeCardBackRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "card_back_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 card_back_id */ 6:
                    message.cardBackId = reader.uint32();
                    break;
                case /* optional uint32 deck_id */ 5:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 card_back_id = 6; */
        if (message.cardBackId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cardBackId);
        /* optional uint32 deck_id = 5; */
        if (message.deckId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeCardBackRsp
 */
exports.GCGDSChangeCardBackRsp = new GCGDSChangeCardBackRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeFieldReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeFieldReq", [
            { no: 6, name: "field_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 field_id */ 6:
                    message.fieldId = reader.uint32();
                    break;
                case /* optional uint32 deck_id */ 11:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 field_id = 6; */
        if (message.fieldId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.fieldId);
        /* optional uint32 deck_id = 11; */
        if (message.deckId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeFieldReq
 */
exports.GCGDSChangeFieldReq = new GCGDSChangeFieldReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeFieldRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeFieldRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "field_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 field_id */ 3:
                    message.fieldId = reader.uint32();
                    break;
                case /* optional uint32 deck_id */ 2:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 field_id = 3; */
        if (message.fieldId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.fieldId);
        /* optional uint32 deck_id = 2; */
        if (message.deckId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeFieldRsp
 */
exports.GCGDSChangeFieldRsp = new GCGDSChangeFieldRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeDeckNameReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeDeckNameReq", [
            { no: 13, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 13:
                    message.deckId = reader.uint32();
                    break;
                case /* optional string name */ 7:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 13; */
        if (message.deckId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.deckId);
        /* optional string name = 7; */
        if (message.name !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeDeckNameReq
 */
exports.GCGDSChangeDeckNameReq = new GCGDSChangeDeckNameReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeDeckNameRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeDeckNameRsp", [
            { no: 13, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 13:
                    message.deckId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 13; */
        if (message.deckId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.deckId);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeDeckNameRsp
 */
exports.GCGDSChangeDeckNameRsp = new GCGDSChangeDeckNameRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeckSaveReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSDeckSaveReq", [
            { no: 1, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "character_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { cardList: [], characterCardList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 1:
                    message.deckId = reader.uint32();
                    break;
                case /* repeated uint32 card_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardList.push(reader.uint32());
                    else
                        message.cardList.push(reader.uint32());
                    break;
                case /* repeated uint32 character_card_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.characterCardList.push(reader.uint32());
                    else
                        message.characterCardList.push(reader.uint32());
                    break;
                case /* optional string name */ 14:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 1; */
        if (message.deckId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.deckId);
        /* repeated uint32 card_list = 4; */
        if (message.cardList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardList.length; i++)
                writer.uint32(message.cardList[i]);
            writer.join();
        }
        /* repeated uint32 character_card_list = 9; */
        if (message.characterCardList.length) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.characterCardList.length; i++)
                writer.uint32(message.characterCardList[i]);
            writer.join();
        }
        /* optional string name = 14; */
        if (message.name !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSDeckSaveReq
 */
exports.GCGDSDeckSaveReq = new GCGDSDeckSaveReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeckSaveRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSDeckSaveRsp", [
            { no: 14, name: "create_time", kind: "scalar", opt: true, T: 7 /*ScalarType.FIXED32*/ },
            { no: 11, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "is_valid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional fixed32 create_time */ 14:
                    message.createTime = reader.fixed32();
                    break;
                case /* optional uint32 deck_id */ 11:
                    message.deckId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_valid */ 4:
                    message.isValid = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional fixed32 create_time = 14; */
        if (message.createTime !== undefined)
            writer.tag(14, runtime_1.WireType.Bit32).fixed32(message.createTime);
        /* optional uint32 deck_id = 11; */
        if (message.deckId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.deckId);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bool is_valid = 4; */
        if (message.isValid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isValid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSDeckSaveRsp
 */
exports.GCGDSDeckSaveRsp = new GCGDSDeckSaveRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeCurDeckReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeCurDeckReq", [
            { no: 3, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 3:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 3; */
        if (message.deckId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeCurDeckReq
 */
exports.GCGDSChangeCurDeckReq = new GCGDSChangeCurDeckReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeCurDeckRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSChangeCurDeckRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 deck_id */ 14:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 deck_id = 14; */
        if (message.deckId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSChangeCurDeckRsp
 */
exports.GCGDSChangeCurDeckRsp = new GCGDSChangeCurDeckRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCurDeckChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSCurDeckChangeNotify", [
            { no: 6, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 6:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 6; */
        if (message.deckId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSCurDeckChangeNotify
 */
exports.GCGDSCurDeckChangeNotify = new GCGDSCurDeckChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeleteDeckReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSDeleteDeckReq", [
            { no: 15, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 15:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 15; */
        if (message.deckId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSDeleteDeckReq
 */
exports.GCGDSDeleteDeckReq = new GCGDSDeleteDeckReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeleteDeckRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSDeleteDeckRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 deck_id */ 7:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 deck_id = 7; */
        if (message.deckId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSDeleteDeckRsp
 */
exports.GCGDSDeleteDeckRsp = new GCGDSDeleteDeckRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDeckUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSDeckUnlockNotify", [
            { no: 15, name: "deck_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 deck_id */ 15:
                    message.deckId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 deck_id = 15; */
        if (message.deckId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.deckId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSDeckUnlockNotify
 */
exports.GCGDSDeckUnlockNotify = new GCGDSDeckUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCardProficiencyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGDSCardProficiencyNotify", [
            { no: 2, name: "proficiency", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 proficiency */ 2:
                    message.proficiency = reader.uint32();
                    break;
                case /* optional uint32 card_id */ 12:
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
        /* optional uint32 proficiency = 2; */
        if (message.proficiency !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.proficiency);
        /* optional uint32 card_id = 12; */
        if (message.cardId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGDSCardProficiencyNotify
 */
exports.GCGDSCardProficiencyNotify = new GCGDSCardProficiencyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTCTavernInfoNotify", [
            { no: 14, name: "is_last_duel_win", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_owner_in_duel", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "character_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "element_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_last_duel_win */ 14:
                    message.isLastDuelWin = reader.bool();
                    break;
                case /* optional uint32 level_id */ 11:
                    message.levelId = reader.uint32();
                    break;
                case /* optional bool is_owner_in_duel */ 5:
                    message.isOwnerInDuel = reader.bool();
                    break;
                case /* optional uint32 point_id */ 3:
                    message.pointId = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 12:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 character_id */ 7:
                    message.characterId = reader.uint32();
                    break;
                case /* optional uint32 element_type */ 10:
                    message.elementType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_last_duel_win = 14; */
        if (message.isLastDuelWin !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isLastDuelWin);
        /* optional uint32 level_id = 11; */
        if (message.levelId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.levelId);
        /* optional bool is_owner_in_duel = 5; */
        if (message.isOwnerInDuel !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isOwnerInDuel);
        /* optional uint32 point_id = 3; */
        if (message.pointId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.pointId);
        /* optional uint32 avatar_id = 12; */
        if (message.avatarId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 character_id = 7; */
        if (message.characterId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.characterId);
        /* optional uint32 element_type = 10; */
        if (message.elementType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.elementType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGTCTavernInfoNotify
 */
exports.GCGTCTavernInfoNotify = new GCGTCTavernInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTCInviteReq", [
            { no: 3, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "character_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level_id */ 3:
                    message.levelId = reader.uint32();
                    break;
                case /* optional uint32 character_id */ 6:
                    message.characterId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level_id = 3; */
        if (message.levelId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.levelId);
        /* optional uint32 character_id = 6; */
        if (message.characterId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.characterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGTCInviteReq
 */
exports.GCGTCInviteReq = new GCGTCInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTCInviteRsp", [
            { no: 12, name: "character_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 character_id */ 12:
                    message.characterId = reader.uint32();
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
        /* optional uint32 character_id = 12; */
        if (message.characterId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.characterId);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGTCInviteRsp
 */
exports.GCGTCInviteRsp = new GCGTCInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernChallengeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTCTavernChallengeData", [
            { no: 1, name: "unlock_level_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "character_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockLevelIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 unlock_level_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockLevelIdList.push(reader.uint32());
                    else
                        message.unlockLevelIdList.push(reader.uint32());
                    break;
                case /* optional uint32 character_id */ 8:
                    message.characterId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 unlock_level_id_list = 1; */
        if (message.unlockLevelIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockLevelIdList.length; i++)
                writer.uint32(message.unlockLevelIdList[i]);
            writer.join();
        }
        /* optional uint32 character_id = 8; */
        if (message.characterId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.characterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGTCTavernChallengeData
 */
exports.GCGTCTavernChallengeData = new GCGTCTavernChallengeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernChallengeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTCTavernChallengeDataNotify", [
            { no: 13, name: "tavern_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGTCTavernChallengeData }
        ]);
    }
    create(value) {
        const message = { tavernChallengeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGTCTavernChallengeData tavern_challenge_list */ 13:
                    message.tavernChallengeList.push(exports.GCGTCTavernChallengeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGTCTavernChallengeData tavern_challenge_list = 13; */
        for (let i = 0; i < message.tavernChallengeList.length; i++)
            exports.GCGTCTavernChallengeData.internalBinaryWrite(message.tavernChallengeList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGTCTavernChallengeDataNotify
 */
exports.GCGTCTavernChallengeDataNotify = new GCGTCTavernChallengeDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernChallengeUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTCTavernChallengeUpdateNotify", [
            { no: 5, name: "tavern_challenge", kind: "message", T: () => exports.GCGTCTavernChallengeData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGTCTavernChallengeData tavern_challenge */ 5:
                    message.tavernChallenge = exports.GCGTCTavernChallengeData.internalBinaryRead(reader, reader.uint32(), options, message.tavernChallenge);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGTCTavernChallengeData tavern_challenge = 5; */
        if (message.tavernChallenge)
            exports.GCGTCTavernChallengeData.internalBinaryWrite(message.tavernChallenge, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGTCTavernChallengeUpdateNotify
 */
exports.GCGTCTavernChallengeUpdateNotify = new GCGTCTavernChallengeUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGGrowthLevelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGGrowthLevelNotify", [
            { no: 7, name: "exp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 exp */ 7:
                    message.exp = reader.uint32();
                    break;
                case /* optional uint32 level */ 11:
                    message.level = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 exp = 7; */
        if (message.exp !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.exp);
        /* optional uint32 level = 11; */
        if (message.level !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGGrowthLevelNotify
 */
exports.GCGGrowthLevelNotify = new GCGGrowthLevelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGGrowthLevelRewardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGGrowthLevelRewardNotify", [
            { no: 8, name: "level_reward_taken_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelRewardTakenList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 level_reward_taken_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.levelRewardTakenList.push(reader.uint32());
                    else
                        message.levelRewardTakenList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 level_reward_taken_list = 8; */
        if (message.levelRewardTakenList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.levelRewardTakenList.length; i++)
                writer.uint32(message.levelRewardTakenList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGGrowthLevelRewardNotify
 */
exports.GCGGrowthLevelRewardNotify = new GCGGrowthLevelRewardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGGrowthLevelTakeRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGGrowthLevelTakeRewardReq", [
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
                case /* optional uint32 level */ 4:
                    message.level = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGGrowthLevelTakeRewardReq
 */
exports.GCGGrowthLevelTakeRewardReq = new GCGGrowthLevelTakeRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGGrowthLevelTakeRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGGrowthLevelTakeRewardRsp", [
            { no: 1, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 level */ 1:
                    message.level = reader.uint32();
                    break;
                case /* optional int32 retcode */ 13:
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
        /* optional uint32 level = 1; */
        if (message.level !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.level);
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGGrowthLevelTakeRewardRsp
 */
exports.GCGGrowthLevelTakeRewardRsp = new GCGGrowthLevelTakeRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGInviteGuestBattleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGInviteGuestBattleReq", [
            { no: 11, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGInviteGuestBattleReq
 */
exports.GCGInviteGuestBattleReq = new GCGInviteGuestBattleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGInviteGuestBattleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGInviteGuestBattleRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 uid */ 11:
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
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 uid = 11; */
        if (message.uid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGInviteGuestBattleRsp
 */
exports.GCGInviteGuestBattleRsp = new GCGInviteGuestBattleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGInviteBattleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGInviteBattleNotify", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGInviteBattleNotify
 */
exports.GCGInviteBattleNotify = new GCGInviteBattleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGApplyInviteBattleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGApplyInviteBattleReq", [
            { no: 9, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_agree */ 9:
                    message.isAgree = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_agree = 9; */
        if (message.isAgree !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isAgree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGApplyInviteBattleReq
 */
exports.GCGApplyInviteBattleReq = new GCGApplyInviteBattleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGApplyInviteBattleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGApplyInviteBattleRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.GCGApplyInviteBattleRsp
 */
exports.GCGApplyInviteBattleRsp = new GCGApplyInviteBattleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGApplyInviteBattleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGApplyInviteBattleNotify", [
            { no: 14, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
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
                case /* optional bool is_agree */ 14:
                    message.isAgree = reader.bool();
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_agree = 14; */
        if (message.isAgree !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isAgree);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGApplyInviteBattleNotify
 */
exports.GCGApplyInviteBattleNotify = new GCGApplyInviteBattleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSettleNotify", [
            { no: 7, name: "game_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "business_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGGameBusinessType", cmd_gcg_common_2.GCGGameBusinessType] },
            { no: 13, name: "is_win", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "reward_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam },
            { no: 6, name: "finished_challenge_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGEndReason", cmd_gcg_common_3.GCGEndReason] }
        ]);
    }
    create(value) {
        const message = { rewardItemList: [], finishedChallengeIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 game_id */ 7:
                    message.gameId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GCGGameBusinessType business_type */ 2:
                    message.businessType = reader.int32();
                    break;
                case /* optional bool is_win */ 13:
                    message.isWin = reader.bool();
                    break;
                case /* repeated com.midnights.game.ItemParam reward_item_list */ 9:
                    message.rewardItemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 finished_challenge_id_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedChallengeIdList.push(reader.uint32());
                    else
                        message.finishedChallengeIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.GCGEndReason reason */ 3:
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
        /* optional uint32 game_id = 7; */
        if (message.gameId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.gameId);
        /* optional com.midnights.game.GCGGameBusinessType business_type = 2; */
        if (message.businessType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.businessType);
        /* optional bool is_win = 13; */
        if (message.isWin !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isWin);
        /* repeated com.midnights.game.ItemParam reward_item_list = 9; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 finished_challenge_id_list = 6; */
        if (message.finishedChallengeIdList.length) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedChallengeIdList.length; i++)
                writer.uint32(message.finishedChallengeIdList[i]);
            writer.join();
        }
        /* optional com.midnights.game.GCGEndReason reason = 3; */
        if (message.reason !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSettleNotify
 */
exports.GCGSettleNotify = new GCGSettleNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGResourceStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGResourceStateNotify", [
            { no: 5, name: "is_complete", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_complete */ 5:
                    message.isComplete = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_complete = 5; */
        if (message.isComplete !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isComplete);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGResourceStateNotify
 */
exports.GCGResourceStateNotify = new GCGResourceStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGClientSettleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGClientSettleReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGClientSettleReq
 */
exports.GCGClientSettleReq = new GCGClientSettleReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGClientSettleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGClientSettleRsp", [
            { no: 4, name: "close_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 close_time */ 4:
                    message.closeTime = reader.uint32();
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
        /* optional uint32 close_time = 4; */
        if (message.closeTime !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.closeTime);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGClientSettleRsp
 */
exports.GCGClientSettleRsp = new GCGClientSettleRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSettleOptionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSettleOptionReq", [
            { no: 5, name: "option", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGSettleOption", GCGSettleOption] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGSettleOption option */ 5:
                    message.option = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGSettleOption option = 5; */
        if (message.option !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.option);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGSettleOptionReq
 */
exports.GCGSettleOptionReq = new GCGSettleOptionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGSettleOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGSettleOptionRsp", [
            { no: 13, name: "option", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGSettleOption", GCGSettleOption] },
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
                case /* optional com.midnights.game.GCGSettleOption option */ 13:
                    message.option = reader.int32();
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
        /* optional com.midnights.game.GCGSettleOption option = 13; */
        if (message.option !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.option);
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
 * @generated MessageType for protobuf message com.midnights.game.GCGSettleOptionRsp
 */
exports.GCGSettleOptionRsp = new GCGSettleOptionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGBasicDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGBasicDataNotify", [
            { no: 9, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "exp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "level_reward_taken_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelRewardTakenList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 level */ 9:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 exp */ 4:
                    message.exp = reader.uint32();
                    break;
                case /* repeated uint32 level_reward_taken_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.levelRewardTakenList.push(reader.uint32());
                    else
                        message.levelRewardTakenList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 level = 9; */
        if (message.level !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 exp = 4; */
        if (message.exp !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.exp);
        /* repeated uint32 level_reward_taken_list = 12; */
        if (message.levelRewardTakenList.length) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.levelRewardTakenList.length; i++)
                writer.uint32(message.levelRewardTakenList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGBasicDataNotify
 */
exports.GCGBasicDataNotify = new GCGBasicDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTavernNpcInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTavernNpcInfo", [
            { no: 6, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "scene_point_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 6:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 level_id */ 10:
                    message.levelId = reader.uint32();
                    break;
                case /* optional uint32 scene_point_id */ 3:
                    message.scenePointId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 id = 6; */
        if (message.id !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.id);
        /* optional uint32 level_id = 10; */
        if (message.levelId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.levelId);
        /* optional uint32 scene_point_id = 3; */
        if (message.scenePointId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.scenePointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGTavernNpcInfo
 */
exports.GCGTavernNpcInfo = new GCGTavernNpcInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGTavernNpcInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGTavernNpcInfoNotify", [
            { no: 1, name: "week_npc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGTavernNpcInfo },
            { no: 5, name: "character_npc", kind: "message", T: () => exports.GCGTavernNpcInfo },
            { no: 15, name: "const_npc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGTavernNpcInfo }
        ]);
    }
    create(value) {
        const message = { weekNpcList: [], constNpcList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGTavernNpcInfo week_npc_list */ 1:
                    message.weekNpcList.push(exports.GCGTavernNpcInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.GCGTavernNpcInfo character_npc */ 5:
                    message.characterNpc = exports.GCGTavernNpcInfo.internalBinaryRead(reader, reader.uint32(), options, message.characterNpc);
                    break;
                case /* repeated com.midnights.game.GCGTavernNpcInfo const_npc_list */ 15:
                    message.constNpcList.push(exports.GCGTavernNpcInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGTavernNpcInfo week_npc_list = 1; */
        for (let i = 0; i < message.weekNpcList.length; i++)
            exports.GCGTavernNpcInfo.internalBinaryWrite(message.weekNpcList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.GCGTavernNpcInfo character_npc = 5; */
        if (message.characterNpc)
            exports.GCGTavernNpcInfo.internalBinaryWrite(message.characterNpc, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.GCGTavernNpcInfo const_npc_list = 15; */
        for (let i = 0; i < message.constNpcList.length; i++)
            exports.GCGTavernNpcInfo.internalBinaryWrite(message.constNpcList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGTavernNpcInfoNotify
 */
exports.GCGTavernNpcInfoNotify = new GCGTavernNpcInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGStartChallengeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGStartChallengeReq", [
            { no: 5, name: "level_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGLevelType", cmd_gcg_common_1.GCGLevelType] },
            { no: 13, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGLevelType level_type */ 5:
                    message.levelType = reader.int32();
                    break;
                case /* optional uint32 config_id */ 13:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 level_id */ 12:
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
        /* optional com.midnights.game.GCGLevelType level_type = 5; */
        if (message.levelType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.levelType);
        /* optional uint32 config_id = 13; */
        if (message.configId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.configId);
        /* optional uint32 level_id = 12; */
        if (message.levelId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGStartChallengeReq
 */
exports.GCGStartChallengeReq = new GCGStartChallengeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGStartChallengeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGStartChallengeRsp", [
            { no: 12, name: "level_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GCGLevelType", cmd_gcg_common_1.GCGLevelType] },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGLevelType level_type */ 12:
                    message.levelType = reader.int32();
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 config_id */ 6:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 level_id */ 1:
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
        /* optional com.midnights.game.GCGLevelType level_type = 12; */
        if (message.levelType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.levelType);
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 config_id = 6; */
        if (message.configId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.configId);
        /* optional uint32 level_id = 1; */
        if (message.levelId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGStartChallengeRsp
 */
exports.GCGStartChallengeRsp = new GCGStartChallengeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGWeekChallengeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGWeekChallengeInfo", [
            { no: 4, name: "npc_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_finished", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "unlock_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 npc_id */ 4:
                    message.npcId = reader.uint32();
                    break;
                case /* optional bool is_finished */ 7:
                    message.isFinished = reader.bool();
                    break;
                case /* optional uint32 unlock_time */ 1:
                    message.unlockTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 npc_id = 4; */
        if (message.npcId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.npcId);
        /* optional bool is_finished = 7; */
        if (message.isFinished !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFinished);
        /* optional uint32 unlock_time = 1; */
        if (message.unlockTime !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unlockTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGWeekChallengeInfo
 */
exports.GCGWeekChallengeInfo = new GCGWeekChallengeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGWeekChallengeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGWeekChallengeInfoNotify", [
            { no: 15, name: "challenge_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGWeekChallengeInfo },
            { no: 7, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { challengeInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGWeekChallengeInfo challenge_info_list */ 15:
                    message.challengeInfoList.push(exports.GCGWeekChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 next_refresh_time */ 7:
                    message.nextRefreshTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGWeekChallengeInfo challenge_info_list = 15; */
        for (let i = 0; i < message.challengeInfoList.length; i++)
            exports.GCGWeekChallengeInfo.internalBinaryWrite(message.challengeInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 next_refresh_time = 7; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGWeekChallengeInfoNotify
 */
exports.GCGWeekChallengeInfoNotify = new GCGWeekChallengeInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGLevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGLevelData", [
            { no: 10, name: "finished_challenge_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishedChallengeIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 finished_challenge_id_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedChallengeIdList.push(reader.uint32());
                    else
                        message.finishedChallengeIdList.push(reader.uint32());
                    break;
                case /* optional uint32 level_id */ 9:
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
        /* repeated uint32 finished_challenge_id_list = 10; */
        if (message.finishedChallengeIdList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedChallengeIdList.length; i++)
                writer.uint32(message.finishedChallengeIdList[i]);
            writer.join();
        }
        /* optional uint32 level_id = 9; */
        if (message.levelId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGLevelData
 */
exports.GCGLevelData = new GCGLevelData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGBossChallengeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGBossChallengeData", [
            { no: 9, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "unlock_level_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockLevelIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 9:
                    message.id = reader.uint32();
                    break;
                case /* repeated uint32 unlock_level_id_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockLevelIdList.push(reader.uint32());
                    else
                        message.unlockLevelIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 id = 9; */
        if (message.id !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.id);
        /* repeated uint32 unlock_level_id_list = 14; */
        if (message.unlockLevelIdList.length) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockLevelIdList.length; i++)
                writer.uint32(message.unlockLevelIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGBossChallengeData
 */
exports.GCGBossChallengeData = new GCGBossChallengeData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGLevelChallengeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGLevelChallengeNotify", [
            { no: 3, name: "unlock_boss_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGBossChallengeData },
            { no: 8, name: "unlock_world_challenge_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GCGLevelData }
        ]);
    }
    create(value) {
        const message = { unlockBossChallengeList: [], unlockWorldChallengeList: [], levelList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.GCGBossChallengeData unlock_boss_challenge_list */ 3:
                    message.unlockBossChallengeList.push(exports.GCGBossChallengeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_world_challenge_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockWorldChallengeList.push(reader.uint32());
                    else
                        message.unlockWorldChallengeList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.GCGLevelData level_list */ 10:
                    message.levelList.push(exports.GCGLevelData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.GCGBossChallengeData unlock_boss_challenge_list = 3; */
        for (let i = 0; i < message.unlockBossChallengeList.length; i++)
            exports.GCGBossChallengeData.internalBinaryWrite(message.unlockBossChallengeList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_world_challenge_list = 8; */
        if (message.unlockWorldChallengeList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockWorldChallengeList.length; i++)
                writer.uint32(message.unlockWorldChallengeList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.GCGLevelData level_list = 10; */
        for (let i = 0; i < message.levelList.length; i++)
            exports.GCGLevelData.internalBinaryWrite(message.levelList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGLevelChallengeNotify
 */
exports.GCGLevelChallengeNotify = new GCGLevelChallengeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGLevelChallengeFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGLevelChallengeFinishNotify", [
            { no: 10, name: "finished_challenge_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "level_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishedChallengeIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 finished_challenge_id_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedChallengeIdList.push(reader.uint32());
                    else
                        message.finishedChallengeIdList.push(reader.uint32());
                    break;
                case /* optional uint32 level_id */ 15:
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
        /* repeated uint32 finished_challenge_id_list = 10; */
        if (message.finishedChallengeIdList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedChallengeIdList.length; i++)
                writer.uint32(message.finishedChallengeIdList[i]);
            writer.join();
        }
        /* optional uint32 level_id = 15; */
        if (message.levelId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGLevelChallengeFinishNotify
 */
exports.GCGLevelChallengeFinishNotify = new GCGLevelChallengeFinishNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGWorldChallengeUnlockNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGWorldChallengeUnlockNotify", [
            { no: 8, name: "unlock_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 unlock_id_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockIdList.push(reader.uint32());
                    else
                        message.unlockIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 unlock_id_list = 8; */
        if (message.unlockIdList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockIdList.length; i++)
                writer.uint32(message.unlockIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGWorldChallengeUnlockNotify
 */
exports.GCGWorldChallengeUnlockNotify = new GCGWorldChallengeUnlockNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GCGBossChallengeUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGBossChallengeUpdateNotify", [
            { no: 11, name: "boss_challenge", kind: "message", T: () => exports.GCGBossChallengeData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.GCGBossChallengeData boss_challenge */ 11:
                    message.bossChallenge = exports.GCGBossChallengeData.internalBinaryRead(reader, reader.uint32(), options, message.bossChallenge);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.GCGBossChallengeData boss_challenge = 11; */
        if (message.bossChallenge)
            exports.GCGBossChallengeData.internalBinaryWrite(message.bossChallenge, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGBossChallengeUpdateNotify
 */
exports.GCGBossChallengeUpdateNotify = new GCGBossChallengeUpdateNotify$Type();
