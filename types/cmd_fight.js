"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAvatarLockChairReq_CmdId = exports.EntityAiKillSelfNotify_CmdId = exports.EvtDestroyServerGadgetNotify_CmdId = exports.LuaSetOptionNotify_CmdId = exports.LuaSetOptionNotify_LuaOptionType = exports.EntityAiSyncNotify_CmdId = exports.MassiveEntityElementOpBatchNotify_CmdId = exports.EvtAiSyncCombatThreatInfoNotify_CmdId = exports.ServerBuffChangeNotify_CmdId = exports.ServerBuffChangeNotify_ServerBuffChangeType = exports.CombatInvocationsNotify_CmdId = exports.DelTeamEntityNotify_CmdId = exports.SyncTeamEntityNotify_CmdId = exports.MassiveEntityStateChangedNotify_CmdId = exports.DestroyMassiveEntityNotify_CmdId = exports.CreateMassiveEntityNotify_CmdId = exports.CreateMassiveEntityRsp_CmdId = exports.CreateMassiveEntityReq_CmdId = exports.EvtAvatarStandUpNotify_CmdId = exports.EvtAvatarSitDownNotify_CmdId = exports.EvtBeingHitsCombineNotify_CmdId = exports.EvtAiSyncSkillCdNotify_CmdId = exports.AnimatorForceSetAirMoveNotify_CmdId = exports.EvtEntityRenderersChangedNotify_CmdId = exports.TriggerCreateGadgetToEquipPartNotify_CmdId = exports.AvatarEnterElementViewNotify_CmdId = exports.MonsterForceAlertNotify_CmdId = exports.MonsterAlertChangeNotify_CmdId = exports.AvatarBuffDelNotify_CmdId = exports.AvatarBuffAddNotify_CmdId = exports.EntityAuthorityChangeNotify_CmdId = exports.EvtAvatarUpdateFocusNotify_CmdId = exports.EvtAvatarExitFocusNotify_CmdId = exports.EvtAvatarEnterFocusNotify_CmdId = exports.EvtBulletMoveNotify_CmdId = exports.EvtEntityStartDieEndNotify_CmdId = exports.EvtBulletDeactiveNotify_CmdId = exports.EvtBulletHitNotify_CmdId = exports.EvtRushMoveNotify_CmdId = exports.EvtAnimatorStateChangedNotify_CmdId = exports.EvtSetAttackTargetNotify_CmdId = exports.EvtCostStaminaNotify_CmdId = exports.EvtFaceToDirNotify_CmdId = exports.EvtFaceToEntityNotify_CmdId = exports.EvtDestroyGadgetNotify_CmdId = exports.EvtCreateGadgetNotify_CmdId = exports.EvtDoSkillSuccNotify_CmdId = exports.HostPlayerNotify_CmdId = exports.EvtAnimatorParameterNotify_CmdId = exports.EvtBeingHitNotify_CmdId = void 0;
exports.EntityAuthorityChangeNotify = exports.AuthorityChange = exports.EvtAvatarUpdateFocusNotify = exports.EvtAvatarExitFocusNotify = exports.EvtAvatarEnterFocusNotify = exports.EvtBulletMoveNotify = exports.EvtEntityStartDieEndNotify = exports.EvtBulletDeactiveNotify = exports.EvtBulletHitNotify = exports.EvtRushMoveNotify = exports.EvtSyncEntityPositionInfo = exports.EvtCombatForceSetPosInfo = exports.EvtCombatSteerMotionInfo = exports.EvtMotionInfoDuringSteerAttack = exports.EvtRushMoveInfo = exports.EvtAnimatorStateChangedNotify = exports.EvtGrapplingHookMove = exports.EvtLightCoreMove = exports.EvtSyncTransform = exports.EvtFixedRushMove = exports.EvtMonsterDoBlink = exports.EvtCompensatePosDiffInfo = exports.EvtAnimatorStateChangedInfo = exports.EvtSetAttackTargetNotify = exports.EvtSetAttackTargetInfo = exports.EvtCostStaminaNotify = exports.EvtFaceToDirNotify = exports.EvtFaceToDirInfo = exports.EvtFaceToEntityNotify = exports.EvtDestroyGadgetNotify = exports.EvtCreateGadgetNotify = exports.EvtDoSkillSuccNotify = exports.HostPlayerNotify = exports.AbilityArgument = exports.EvtAnimatorParameterNotify = exports.EvtAnimatorParameterInfo = exports.EvtBeingHitNotify = exports.EvtHittingOtherInfo = exports.EvtBeingHitInfo = exports.AttackResult = exports.AbilityIdentifier = exports.AttackHitEffectResult = exports.HitCollision = exports.CombatTypeArgument = exports.HitColliderType = exports.ForwardType = exports.EvtLocalGadgetOwnerLeaveSceneNotify_CmdId = exports.EvtBeingHealedNotify_CmdId = exports.ReportFightAntiCheatNotify_CmdId = exports.EvtAvatarLockChairRsp_CmdId = void 0;
exports.EvtLocalGadgetOwnerLeaveSceneNotify = exports.EvtBeingHealedNotify = exports.ReportFightAntiCheatNotify = exports.EvtAvatarLockChairRsp = exports.EvtAvatarLockChairReq = exports.EntityAiKillSelfNotify = exports.EvtDestroyServerGadgetNotify = exports.LuaSetOptionNotify = exports.EntityAiSyncNotify = exports.AiSyncInfo = exports.MassiveEntityElementOpBatchNotify = exports.EvtAiSyncCombatThreatInfoNotify = exports.AiThreatInfo = exports.ServerBuffChangeNotify = exports.CombatInvocationsNotify = exports.CombatInvokeEntry = exports.EvtSyncSkillAnchorPosition = exports.DelTeamEntityNotify = exports.SyncTeamEntityNotify = exports.TeamEntityInfo = exports.MassiveEntityStateChangedNotify = exports.DestroyMassiveEntityNotify = exports.CreateMassiveEntityNotify = exports.CreateMassiveEntityRsp = exports.CreateMassiveEntityReq = exports.EvtAvatarStandUpNotify = exports.EvtAvatarSitDownNotify = exports.EvtBeingHitsCombineNotify = exports.EvtAiSyncSkillCdNotify = exports.AiSkillCdInfo = exports.AnimatorForceSetAirMoveNotify = exports.EvtEntityRenderersChangedNotify = exports.TriggerCreateGadgetToEquipPartNotify = exports.AvatarEnterElementViewNotify = exports.MonsterForceAlertNotify = exports.MonsterAlertChangeNotify = exports.AvatarBuffDelNotify = exports.AvatarBuffAddNotify = void 0;
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
const define_9 = require("./define");
const define_10 = require("./define");
const define_11 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.EvtBeingHitNotify.CmdId
 */
var EvtBeingHitNotify_CmdId;
(function (EvtBeingHitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBeingHitNotify_CmdId[EvtBeingHitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 372;
     */
    EvtBeingHitNotify_CmdId[EvtBeingHitNotify_CmdId["CMD_ID"] = 372] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBeingHitNotify_CmdId[EvtBeingHitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBeingHitNotify_CmdId[EvtBeingHitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBeingHitNotify_CmdId[EvtBeingHitNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtBeingHitNotify_CmdId = exports.EvtBeingHitNotify_CmdId || (exports.EvtBeingHitNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAnimatorParameterNotify.CmdId
 */
var EvtAnimatorParameterNotify_CmdId;
(function (EvtAnimatorParameterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAnimatorParameterNotify_CmdId[EvtAnimatorParameterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 398;
     */
    EvtAnimatorParameterNotify_CmdId[EvtAnimatorParameterNotify_CmdId["CMD_ID"] = 398] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAnimatorParameterNotify_CmdId[EvtAnimatorParameterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAnimatorParameterNotify_CmdId[EvtAnimatorParameterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAnimatorParameterNotify_CmdId[EvtAnimatorParameterNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAnimatorParameterNotify_CmdId = exports.EvtAnimatorParameterNotify_CmdId || (exports.EvtAnimatorParameterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.HostPlayerNotify.CmdId
 */
var HostPlayerNotify_CmdId;
(function (HostPlayerNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 312;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["CMD_ID"] = 312] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    HostPlayerNotify_CmdId[HostPlayerNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(HostPlayerNotify_CmdId = exports.HostPlayerNotify_CmdId || (exports.HostPlayerNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtDoSkillSuccNotify.CmdId
 */
var EvtDoSkillSuccNotify_CmdId;
(function (EvtDoSkillSuccNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtDoSkillSuccNotify_CmdId[EvtDoSkillSuccNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 335;
     */
    EvtDoSkillSuccNotify_CmdId[EvtDoSkillSuccNotify_CmdId["CMD_ID"] = 335] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtDoSkillSuccNotify_CmdId[EvtDoSkillSuccNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtDoSkillSuccNotify_CmdId[EvtDoSkillSuccNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtDoSkillSuccNotify_CmdId[EvtDoSkillSuccNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtDoSkillSuccNotify_CmdId = exports.EvtDoSkillSuccNotify_CmdId || (exports.EvtDoSkillSuccNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtCreateGadgetNotify.CmdId
 */
var EvtCreateGadgetNotify_CmdId;
(function (EvtCreateGadgetNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtCreateGadgetNotify_CmdId[EvtCreateGadgetNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 307;
     */
    EvtCreateGadgetNotify_CmdId[EvtCreateGadgetNotify_CmdId["CMD_ID"] = 307] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtCreateGadgetNotify_CmdId[EvtCreateGadgetNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtCreateGadgetNotify_CmdId[EvtCreateGadgetNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtCreateGadgetNotify_CmdId[EvtCreateGadgetNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtCreateGadgetNotify_CmdId = exports.EvtCreateGadgetNotify_CmdId || (exports.EvtCreateGadgetNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtDestroyGadgetNotify.CmdId
 */
var EvtDestroyGadgetNotify_CmdId;
(function (EvtDestroyGadgetNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtDestroyGadgetNotify_CmdId[EvtDestroyGadgetNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 321;
     */
    EvtDestroyGadgetNotify_CmdId[EvtDestroyGadgetNotify_CmdId["CMD_ID"] = 321] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtDestroyGadgetNotify_CmdId[EvtDestroyGadgetNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtDestroyGadgetNotify_CmdId[EvtDestroyGadgetNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtDestroyGadgetNotify_CmdId[EvtDestroyGadgetNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtDestroyGadgetNotify_CmdId = exports.EvtDestroyGadgetNotify_CmdId || (exports.EvtDestroyGadgetNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtFaceToEntityNotify.CmdId
 */
var EvtFaceToEntityNotify_CmdId;
(function (EvtFaceToEntityNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtFaceToEntityNotify_CmdId[EvtFaceToEntityNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 303;
     */
    EvtFaceToEntityNotify_CmdId[EvtFaceToEntityNotify_CmdId["CMD_ID"] = 303] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtFaceToEntityNotify_CmdId[EvtFaceToEntityNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtFaceToEntityNotify_CmdId[EvtFaceToEntityNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtFaceToEntityNotify_CmdId[EvtFaceToEntityNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtFaceToEntityNotify_CmdId = exports.EvtFaceToEntityNotify_CmdId || (exports.EvtFaceToEntityNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtFaceToDirNotify.CmdId
 */
var EvtFaceToDirNotify_CmdId;
(function (EvtFaceToDirNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtFaceToDirNotify_CmdId[EvtFaceToDirNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 390;
     */
    EvtFaceToDirNotify_CmdId[EvtFaceToDirNotify_CmdId["CMD_ID"] = 390] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtFaceToDirNotify_CmdId[EvtFaceToDirNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtFaceToDirNotify_CmdId[EvtFaceToDirNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtFaceToDirNotify_CmdId[EvtFaceToDirNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtFaceToDirNotify_CmdId = exports.EvtFaceToDirNotify_CmdId || (exports.EvtFaceToDirNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtCostStaminaNotify.CmdId
 */
var EvtCostStaminaNotify_CmdId;
(function (EvtCostStaminaNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtCostStaminaNotify_CmdId[EvtCostStaminaNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 373;
     */
    EvtCostStaminaNotify_CmdId[EvtCostStaminaNotify_CmdId["CMD_ID"] = 373] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtCostStaminaNotify_CmdId[EvtCostStaminaNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtCostStaminaNotify_CmdId[EvtCostStaminaNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtCostStaminaNotify_CmdId[EvtCostStaminaNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtCostStaminaNotify_CmdId = exports.EvtCostStaminaNotify_CmdId || (exports.EvtCostStaminaNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtSetAttackTargetNotify.CmdId
 */
var EvtSetAttackTargetNotify_CmdId;
(function (EvtSetAttackTargetNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtSetAttackTargetNotify_CmdId[EvtSetAttackTargetNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 399;
     */
    EvtSetAttackTargetNotify_CmdId[EvtSetAttackTargetNotify_CmdId["CMD_ID"] = 399] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtSetAttackTargetNotify_CmdId[EvtSetAttackTargetNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtSetAttackTargetNotify_CmdId[EvtSetAttackTargetNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtSetAttackTargetNotify_CmdId[EvtSetAttackTargetNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtSetAttackTargetNotify_CmdId = exports.EvtSetAttackTargetNotify_CmdId || (exports.EvtSetAttackTargetNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAnimatorStateChangedNotify.CmdId
 */
var EvtAnimatorStateChangedNotify_CmdId;
(function (EvtAnimatorStateChangedNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAnimatorStateChangedNotify_CmdId[EvtAnimatorStateChangedNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 331;
     */
    EvtAnimatorStateChangedNotify_CmdId[EvtAnimatorStateChangedNotify_CmdId["CMD_ID"] = 331] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAnimatorStateChangedNotify_CmdId[EvtAnimatorStateChangedNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAnimatorStateChangedNotify_CmdId[EvtAnimatorStateChangedNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAnimatorStateChangedNotify_CmdId[EvtAnimatorStateChangedNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAnimatorStateChangedNotify_CmdId = exports.EvtAnimatorStateChangedNotify_CmdId || (exports.EvtAnimatorStateChangedNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtRushMoveNotify.CmdId
 */
var EvtRushMoveNotify_CmdId;
(function (EvtRushMoveNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtRushMoveNotify_CmdId[EvtRushMoveNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 375;
     */
    EvtRushMoveNotify_CmdId[EvtRushMoveNotify_CmdId["CMD_ID"] = 375] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtRushMoveNotify_CmdId[EvtRushMoveNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtRushMoveNotify_CmdId[EvtRushMoveNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtRushMoveNotify_CmdId[EvtRushMoveNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtRushMoveNotify_CmdId = exports.EvtRushMoveNotify_CmdId || (exports.EvtRushMoveNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtBulletHitNotify.CmdId
 */
var EvtBulletHitNotify_CmdId;
(function (EvtBulletHitNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBulletHitNotify_CmdId[EvtBulletHitNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 348;
     */
    EvtBulletHitNotify_CmdId[EvtBulletHitNotify_CmdId["CMD_ID"] = 348] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBulletHitNotify_CmdId[EvtBulletHitNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBulletHitNotify_CmdId[EvtBulletHitNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBulletHitNotify_CmdId[EvtBulletHitNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtBulletHitNotify_CmdId = exports.EvtBulletHitNotify_CmdId || (exports.EvtBulletHitNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtBulletDeactiveNotify.CmdId
 */
var EvtBulletDeactiveNotify_CmdId;
(function (EvtBulletDeactiveNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBulletDeactiveNotify_CmdId[EvtBulletDeactiveNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 397;
     */
    EvtBulletDeactiveNotify_CmdId[EvtBulletDeactiveNotify_CmdId["CMD_ID"] = 397] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBulletDeactiveNotify_CmdId[EvtBulletDeactiveNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBulletDeactiveNotify_CmdId[EvtBulletDeactiveNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBulletDeactiveNotify_CmdId[EvtBulletDeactiveNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtBulletDeactiveNotify_CmdId = exports.EvtBulletDeactiveNotify_CmdId || (exports.EvtBulletDeactiveNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtEntityStartDieEndNotify.CmdId
 */
var EvtEntityStartDieEndNotify_CmdId;
(function (EvtEntityStartDieEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtEntityStartDieEndNotify_CmdId[EvtEntityStartDieEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 381;
     */
    EvtEntityStartDieEndNotify_CmdId[EvtEntityStartDieEndNotify_CmdId["CMD_ID"] = 381] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtEntityStartDieEndNotify_CmdId[EvtEntityStartDieEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtEntityStartDieEndNotify_CmdId[EvtEntityStartDieEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtEntityStartDieEndNotify_CmdId[EvtEntityStartDieEndNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtEntityStartDieEndNotify_CmdId = exports.EvtEntityStartDieEndNotify_CmdId || (exports.EvtEntityStartDieEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtBulletMoveNotify.CmdId
 */
var EvtBulletMoveNotify_CmdId;
(function (EvtBulletMoveNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBulletMoveNotify_CmdId[EvtBulletMoveNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 365;
     */
    EvtBulletMoveNotify_CmdId[EvtBulletMoveNotify_CmdId["CMD_ID"] = 365] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBulletMoveNotify_CmdId[EvtBulletMoveNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBulletMoveNotify_CmdId[EvtBulletMoveNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBulletMoveNotify_CmdId[EvtBulletMoveNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtBulletMoveNotify_CmdId = exports.EvtBulletMoveNotify_CmdId || (exports.EvtBulletMoveNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAvatarEnterFocusNotify.CmdId
 */
var EvtAvatarEnterFocusNotify_CmdId;
(function (EvtAvatarEnterFocusNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarEnterFocusNotify_CmdId[EvtAvatarEnterFocusNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 304;
     */
    EvtAvatarEnterFocusNotify_CmdId[EvtAvatarEnterFocusNotify_CmdId["CMD_ID"] = 304] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarEnterFocusNotify_CmdId[EvtAvatarEnterFocusNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarEnterFocusNotify_CmdId[EvtAvatarEnterFocusNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarEnterFocusNotify_CmdId[EvtAvatarEnterFocusNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAvatarEnterFocusNotify_CmdId = exports.EvtAvatarEnterFocusNotify_CmdId || (exports.EvtAvatarEnterFocusNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAvatarExitFocusNotify.CmdId
 */
var EvtAvatarExitFocusNotify_CmdId;
(function (EvtAvatarExitFocusNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarExitFocusNotify_CmdId[EvtAvatarExitFocusNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 393;
     */
    EvtAvatarExitFocusNotify_CmdId[EvtAvatarExitFocusNotify_CmdId["CMD_ID"] = 393] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarExitFocusNotify_CmdId[EvtAvatarExitFocusNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarExitFocusNotify_CmdId[EvtAvatarExitFocusNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarExitFocusNotify_CmdId[EvtAvatarExitFocusNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAvatarExitFocusNotify_CmdId = exports.EvtAvatarExitFocusNotify_CmdId || (exports.EvtAvatarExitFocusNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAvatarUpdateFocusNotify.CmdId
 */
var EvtAvatarUpdateFocusNotify_CmdId;
(function (EvtAvatarUpdateFocusNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarUpdateFocusNotify_CmdId[EvtAvatarUpdateFocusNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 327;
     */
    EvtAvatarUpdateFocusNotify_CmdId[EvtAvatarUpdateFocusNotify_CmdId["CMD_ID"] = 327] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarUpdateFocusNotify_CmdId[EvtAvatarUpdateFocusNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarUpdateFocusNotify_CmdId[EvtAvatarUpdateFocusNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarUpdateFocusNotify_CmdId[EvtAvatarUpdateFocusNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAvatarUpdateFocusNotify_CmdId = exports.EvtAvatarUpdateFocusNotify_CmdId || (exports.EvtAvatarUpdateFocusNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityAuthorityChangeNotify.CmdId
 */
var EntityAuthorityChangeNotify_CmdId;
(function (EntityAuthorityChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityAuthorityChangeNotify_CmdId[EntityAuthorityChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 394;
     */
    EntityAuthorityChangeNotify_CmdId[EntityAuthorityChangeNotify_CmdId["CMD_ID"] = 394] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityAuthorityChangeNotify_CmdId[EntityAuthorityChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityAuthorityChangeNotify_CmdId[EntityAuthorityChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityAuthorityChangeNotify_CmdId = exports.EntityAuthorityChangeNotify_CmdId || (exports.EntityAuthorityChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarBuffAddNotify.CmdId
 */
var AvatarBuffAddNotify_CmdId;
(function (AvatarBuffAddNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarBuffAddNotify_CmdId[AvatarBuffAddNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 388;
     */
    AvatarBuffAddNotify_CmdId[AvatarBuffAddNotify_CmdId["CMD_ID"] = 388] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarBuffAddNotify_CmdId[AvatarBuffAddNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarBuffAddNotify_CmdId[AvatarBuffAddNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarBuffAddNotify_CmdId[AvatarBuffAddNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarBuffAddNotify_CmdId = exports.AvatarBuffAddNotify_CmdId || (exports.AvatarBuffAddNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarBuffDelNotify.CmdId
 */
var AvatarBuffDelNotify_CmdId;
(function (AvatarBuffDelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarBuffDelNotify_CmdId[AvatarBuffDelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 326;
     */
    AvatarBuffDelNotify_CmdId[AvatarBuffDelNotify_CmdId["CMD_ID"] = 326] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarBuffDelNotify_CmdId[AvatarBuffDelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarBuffDelNotify_CmdId[AvatarBuffDelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarBuffDelNotify_CmdId[AvatarBuffDelNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarBuffDelNotify_CmdId = exports.AvatarBuffDelNotify_CmdId || (exports.AvatarBuffDelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MonsterAlertChangeNotify.CmdId
 */
var MonsterAlertChangeNotify_CmdId;
(function (MonsterAlertChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterAlertChangeNotify_CmdId[MonsterAlertChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 363;
     */
    MonsterAlertChangeNotify_CmdId[MonsterAlertChangeNotify_CmdId["CMD_ID"] = 363] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterAlertChangeNotify_CmdId[MonsterAlertChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MonsterAlertChangeNotify_CmdId[MonsterAlertChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MonsterAlertChangeNotify_CmdId[MonsterAlertChangeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MonsterAlertChangeNotify_CmdId = exports.MonsterAlertChangeNotify_CmdId || (exports.MonsterAlertChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MonsterForceAlertNotify.CmdId
 */
var MonsterForceAlertNotify_CmdId;
(function (MonsterForceAlertNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterForceAlertNotify_CmdId[MonsterForceAlertNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 395;
     */
    MonsterForceAlertNotify_CmdId[MonsterForceAlertNotify_CmdId["CMD_ID"] = 395] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterForceAlertNotify_CmdId[MonsterForceAlertNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MonsterForceAlertNotify_CmdId[MonsterForceAlertNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MonsterForceAlertNotify_CmdId = exports.MonsterForceAlertNotify_CmdId || (exports.MonsterForceAlertNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarEnterElementViewNotify.CmdId
 */
var AvatarEnterElementViewNotify_CmdId;
(function (AvatarEnterElementViewNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarEnterElementViewNotify_CmdId[AvatarEnterElementViewNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 334;
     */
    AvatarEnterElementViewNotify_CmdId[AvatarEnterElementViewNotify_CmdId["CMD_ID"] = 334] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarEnterElementViewNotify_CmdId[AvatarEnterElementViewNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarEnterElementViewNotify_CmdId[AvatarEnterElementViewNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarEnterElementViewNotify_CmdId[AvatarEnterElementViewNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarEnterElementViewNotify_CmdId = exports.AvatarEnterElementViewNotify_CmdId || (exports.AvatarEnterElementViewNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TriggerCreateGadgetToEquipPartNotify.CmdId
 */
var TriggerCreateGadgetToEquipPartNotify_CmdId;
(function (TriggerCreateGadgetToEquipPartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TriggerCreateGadgetToEquipPartNotify_CmdId[TriggerCreateGadgetToEquipPartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 350;
     */
    TriggerCreateGadgetToEquipPartNotify_CmdId[TriggerCreateGadgetToEquipPartNotify_CmdId["CMD_ID"] = 350] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TriggerCreateGadgetToEquipPartNotify_CmdId[TriggerCreateGadgetToEquipPartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TriggerCreateGadgetToEquipPartNotify_CmdId[TriggerCreateGadgetToEquipPartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TriggerCreateGadgetToEquipPartNotify_CmdId = exports.TriggerCreateGadgetToEquipPartNotify_CmdId || (exports.TriggerCreateGadgetToEquipPartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtEntityRenderersChangedNotify.CmdId
 */
var EvtEntityRenderersChangedNotify_CmdId;
(function (EvtEntityRenderersChangedNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtEntityRenderersChangedNotify_CmdId[EvtEntityRenderersChangedNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 343;
     */
    EvtEntityRenderersChangedNotify_CmdId[EvtEntityRenderersChangedNotify_CmdId["CMD_ID"] = 343] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtEntityRenderersChangedNotify_CmdId[EvtEntityRenderersChangedNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtEntityRenderersChangedNotify_CmdId[EvtEntityRenderersChangedNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtEntityRenderersChangedNotify_CmdId[EvtEntityRenderersChangedNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtEntityRenderersChangedNotify_CmdId = exports.EvtEntityRenderersChangedNotify_CmdId || (exports.EvtEntityRenderersChangedNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AnimatorForceSetAirMoveNotify.CmdId
 */
var AnimatorForceSetAirMoveNotify_CmdId;
(function (AnimatorForceSetAirMoveNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnimatorForceSetAirMoveNotify_CmdId[AnimatorForceSetAirMoveNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 374;
     */
    AnimatorForceSetAirMoveNotify_CmdId[AnimatorForceSetAirMoveNotify_CmdId["CMD_ID"] = 374] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AnimatorForceSetAirMoveNotify_CmdId[AnimatorForceSetAirMoveNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AnimatorForceSetAirMoveNotify_CmdId[AnimatorForceSetAirMoveNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AnimatorForceSetAirMoveNotify_CmdId[AnimatorForceSetAirMoveNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AnimatorForceSetAirMoveNotify_CmdId = exports.AnimatorForceSetAirMoveNotify_CmdId || (exports.AnimatorForceSetAirMoveNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAiSyncSkillCdNotify.CmdId
 */
var EvtAiSyncSkillCdNotify_CmdId;
(function (EvtAiSyncSkillCdNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAiSyncSkillCdNotify_CmdId[EvtAiSyncSkillCdNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 376;
     */
    EvtAiSyncSkillCdNotify_CmdId[EvtAiSyncSkillCdNotify_CmdId["CMD_ID"] = 376] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAiSyncSkillCdNotify_CmdId[EvtAiSyncSkillCdNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAiSyncSkillCdNotify_CmdId[EvtAiSyncSkillCdNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAiSyncSkillCdNotify_CmdId[EvtAiSyncSkillCdNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAiSyncSkillCdNotify_CmdId = exports.EvtAiSyncSkillCdNotify_CmdId || (exports.EvtAiSyncSkillCdNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtBeingHitsCombineNotify.CmdId
 */
var EvtBeingHitsCombineNotify_CmdId;
(function (EvtBeingHitsCombineNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBeingHitsCombineNotify_CmdId[EvtBeingHitsCombineNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 346;
     */
    EvtBeingHitsCombineNotify_CmdId[EvtBeingHitsCombineNotify_CmdId["CMD_ID"] = 346] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBeingHitsCombineNotify_CmdId[EvtBeingHitsCombineNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBeingHitsCombineNotify_CmdId[EvtBeingHitsCombineNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBeingHitsCombineNotify_CmdId[EvtBeingHitsCombineNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtBeingHitsCombineNotify_CmdId = exports.EvtBeingHitsCombineNotify_CmdId || (exports.EvtBeingHitsCombineNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAvatarSitDownNotify.CmdId
 */
var EvtAvatarSitDownNotify_CmdId;
(function (EvtAvatarSitDownNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarSitDownNotify_CmdId[EvtAvatarSitDownNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 324;
     */
    EvtAvatarSitDownNotify_CmdId[EvtAvatarSitDownNotify_CmdId["CMD_ID"] = 324] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarSitDownNotify_CmdId[EvtAvatarSitDownNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarSitDownNotify_CmdId[EvtAvatarSitDownNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarSitDownNotify_CmdId[EvtAvatarSitDownNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAvatarSitDownNotify_CmdId = exports.EvtAvatarSitDownNotify_CmdId || (exports.EvtAvatarSitDownNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAvatarStandUpNotify.CmdId
 */
var EvtAvatarStandUpNotify_CmdId;
(function (EvtAvatarStandUpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarStandUpNotify_CmdId[EvtAvatarStandUpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 356;
     */
    EvtAvatarStandUpNotify_CmdId[EvtAvatarStandUpNotify_CmdId["CMD_ID"] = 356] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarStandUpNotify_CmdId[EvtAvatarStandUpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarStandUpNotify_CmdId[EvtAvatarStandUpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarStandUpNotify_CmdId[EvtAvatarStandUpNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAvatarStandUpNotify_CmdId = exports.EvtAvatarStandUpNotify_CmdId || (exports.EvtAvatarStandUpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CreateMassiveEntityReq.CmdId
 */
var CreateMassiveEntityReq_CmdId;
(function (CreateMassiveEntityReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateMassiveEntityReq_CmdId[CreateMassiveEntityReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 342;
     */
    CreateMassiveEntityReq_CmdId[CreateMassiveEntityReq_CmdId["CMD_ID"] = 342] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateMassiveEntityReq_CmdId[CreateMassiveEntityReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CreateMassiveEntityReq_CmdId[CreateMassiveEntityReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CreateMassiveEntityReq_CmdId[CreateMassiveEntityReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CreateMassiveEntityReq_CmdId = exports.CreateMassiveEntityReq_CmdId || (exports.CreateMassiveEntityReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CreateMassiveEntityRsp.CmdId
 */
var CreateMassiveEntityRsp_CmdId;
(function (CreateMassiveEntityRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateMassiveEntityRsp_CmdId[CreateMassiveEntityRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 330;
     */
    CreateMassiveEntityRsp_CmdId[CreateMassiveEntityRsp_CmdId["CMD_ID"] = 330] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateMassiveEntityRsp_CmdId[CreateMassiveEntityRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CreateMassiveEntityRsp_CmdId[CreateMassiveEntityRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CreateMassiveEntityRsp_CmdId = exports.CreateMassiveEntityRsp_CmdId || (exports.CreateMassiveEntityRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CreateMassiveEntityNotify.CmdId
 */
var CreateMassiveEntityNotify_CmdId;
(function (CreateMassiveEntityNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateMassiveEntityNotify_CmdId[CreateMassiveEntityNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 367;
     */
    CreateMassiveEntityNotify_CmdId[CreateMassiveEntityNotify_CmdId["CMD_ID"] = 367] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CreateMassiveEntityNotify_CmdId[CreateMassiveEntityNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CreateMassiveEntityNotify_CmdId[CreateMassiveEntityNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CreateMassiveEntityNotify_CmdId = exports.CreateMassiveEntityNotify_CmdId || (exports.CreateMassiveEntityNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DestroyMassiveEntityNotify.CmdId
 */
var DestroyMassiveEntityNotify_CmdId;
(function (DestroyMassiveEntityNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DestroyMassiveEntityNotify_CmdId[DestroyMassiveEntityNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 358;
     */
    DestroyMassiveEntityNotify_CmdId[DestroyMassiveEntityNotify_CmdId["CMD_ID"] = 358] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DestroyMassiveEntityNotify_CmdId[DestroyMassiveEntityNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DestroyMassiveEntityNotify_CmdId[DestroyMassiveEntityNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DestroyMassiveEntityNotify_CmdId[DestroyMassiveEntityNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DestroyMassiveEntityNotify_CmdId = exports.DestroyMassiveEntityNotify_CmdId || (exports.DestroyMassiveEntityNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MassiveEntityStateChangedNotify.CmdId
 */
var MassiveEntityStateChangedNotify_CmdId;
(function (MassiveEntityStateChangedNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MassiveEntityStateChangedNotify_CmdId[MassiveEntityStateChangedNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 370;
     */
    MassiveEntityStateChangedNotify_CmdId[MassiveEntityStateChangedNotify_CmdId["CMD_ID"] = 370] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MassiveEntityStateChangedNotify_CmdId[MassiveEntityStateChangedNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MassiveEntityStateChangedNotify_CmdId[MassiveEntityStateChangedNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MassiveEntityStateChangedNotify_CmdId[MassiveEntityStateChangedNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MassiveEntityStateChangedNotify_CmdId = exports.MassiveEntityStateChangedNotify_CmdId || (exports.MassiveEntityStateChangedNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SyncTeamEntityNotify.CmdId
 */
var SyncTeamEntityNotify_CmdId;
(function (SyncTeamEntityNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SyncTeamEntityNotify_CmdId[SyncTeamEntityNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 317;
     */
    SyncTeamEntityNotify_CmdId[SyncTeamEntityNotify_CmdId["CMD_ID"] = 317] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SyncTeamEntityNotify_CmdId[SyncTeamEntityNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SyncTeamEntityNotify_CmdId[SyncTeamEntityNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SyncTeamEntityNotify_CmdId = exports.SyncTeamEntityNotify_CmdId || (exports.SyncTeamEntityNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DelTeamEntityNotify.CmdId
 */
var DelTeamEntityNotify_CmdId;
(function (DelTeamEntityNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelTeamEntityNotify_CmdId[DelTeamEntityNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 302;
     */
    DelTeamEntityNotify_CmdId[DelTeamEntityNotify_CmdId["CMD_ID"] = 302] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelTeamEntityNotify_CmdId[DelTeamEntityNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelTeamEntityNotify_CmdId[DelTeamEntityNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DelTeamEntityNotify_CmdId = exports.DelTeamEntityNotify_CmdId || (exports.DelTeamEntityNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CombatInvocationsNotify.CmdId
 */
var CombatInvocationsNotify_CmdId;
(function (CombatInvocationsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombatInvocationsNotify_CmdId[CombatInvocationsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 319;
     */
    CombatInvocationsNotify_CmdId[CombatInvocationsNotify_CmdId["CMD_ID"] = 319] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CombatInvocationsNotify_CmdId[CombatInvocationsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CombatInvocationsNotify_CmdId[CombatInvocationsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CombatInvocationsNotify_CmdId[CombatInvocationsNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(CombatInvocationsNotify_CmdId = exports.CombatInvocationsNotify_CmdId || (exports.CombatInvocationsNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerBuffChangeNotify.ServerBuffChangeType
 */
var ServerBuffChangeNotify_ServerBuffChangeType;
(function (ServerBuffChangeNotify_ServerBuffChangeType) {
    /**
     * @generated from protobuf enum value: ADD_SERVER_BUFF = 0;
     */
    ServerBuffChangeNotify_ServerBuffChangeType[ServerBuffChangeNotify_ServerBuffChangeType["ADD_SERVER_BUFF"] = 0] = "ADD_SERVER_BUFF";
    /**
     * @generated from protobuf enum value: DEL_SERVER_BUFF = 1;
     */
    ServerBuffChangeNotify_ServerBuffChangeType[ServerBuffChangeNotify_ServerBuffChangeType["DEL_SERVER_BUFF"] = 1] = "DEL_SERVER_BUFF";
})(ServerBuffChangeNotify_ServerBuffChangeType = exports.ServerBuffChangeNotify_ServerBuffChangeType || (exports.ServerBuffChangeNotify_ServerBuffChangeType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerBuffChangeNotify.CmdId
 */
var ServerBuffChangeNotify_CmdId;
(function (ServerBuffChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerBuffChangeNotify_CmdId[ServerBuffChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 361;
     */
    ServerBuffChangeNotify_CmdId[ServerBuffChangeNotify_CmdId["CMD_ID"] = 361] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerBuffChangeNotify_CmdId[ServerBuffChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerBuffChangeNotify_CmdId[ServerBuffChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerBuffChangeNotify_CmdId = exports.ServerBuffChangeNotify_CmdId || (exports.ServerBuffChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAiSyncCombatThreatInfoNotify.CmdId
 */
var EvtAiSyncCombatThreatInfoNotify_CmdId;
(function (EvtAiSyncCombatThreatInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAiSyncCombatThreatInfoNotify_CmdId[EvtAiSyncCombatThreatInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 329;
     */
    EvtAiSyncCombatThreatInfoNotify_CmdId[EvtAiSyncCombatThreatInfoNotify_CmdId["CMD_ID"] = 329] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAiSyncCombatThreatInfoNotify_CmdId[EvtAiSyncCombatThreatInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAiSyncCombatThreatInfoNotify_CmdId[EvtAiSyncCombatThreatInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAiSyncCombatThreatInfoNotify_CmdId[EvtAiSyncCombatThreatInfoNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAiSyncCombatThreatInfoNotify_CmdId = exports.EvtAiSyncCombatThreatInfoNotify_CmdId || (exports.EvtAiSyncCombatThreatInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MassiveEntityElementOpBatchNotify.CmdId
 */
var MassiveEntityElementOpBatchNotify_CmdId;
(function (MassiveEntityElementOpBatchNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MassiveEntityElementOpBatchNotify_CmdId[MassiveEntityElementOpBatchNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 357;
     */
    MassiveEntityElementOpBatchNotify_CmdId[MassiveEntityElementOpBatchNotify_CmdId["CMD_ID"] = 357] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MassiveEntityElementOpBatchNotify_CmdId[MassiveEntityElementOpBatchNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MassiveEntityElementOpBatchNotify_CmdId[MassiveEntityElementOpBatchNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MassiveEntityElementOpBatchNotify_CmdId[MassiveEntityElementOpBatchNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MassiveEntityElementOpBatchNotify_CmdId = exports.MassiveEntityElementOpBatchNotify_CmdId || (exports.MassiveEntityElementOpBatchNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityAiSyncNotify.CmdId
 */
var EntityAiSyncNotify_CmdId;
(function (EntityAiSyncNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityAiSyncNotify_CmdId[EntityAiSyncNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 400;
     */
    EntityAiSyncNotify_CmdId[EntityAiSyncNotify_CmdId["CMD_ID"] = 400] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityAiSyncNotify_CmdId[EntityAiSyncNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityAiSyncNotify_CmdId[EntityAiSyncNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityAiSyncNotify_CmdId[EntityAiSyncNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EntityAiSyncNotify_CmdId = exports.EntityAiSyncNotify_CmdId || (exports.EntityAiSyncNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LuaSetOptionNotify.LuaOptionType
 */
var LuaSetOptionNotify_LuaOptionType;
(function (LuaSetOptionNotify_LuaOptionType) {
    /**
     * @generated from protobuf enum value: LUA_OPTION_NONE = 0;
     */
    LuaSetOptionNotify_LuaOptionType[LuaSetOptionNotify_LuaOptionType["LUA_OPTION_NONE"] = 0] = "LUA_OPTION_NONE";
    /**
     * @generated from protobuf enum value: LUA_OPTION_PLAYER_INPUT = 1;
     */
    LuaSetOptionNotify_LuaOptionType[LuaSetOptionNotify_LuaOptionType["LUA_OPTION_PLAYER_INPUT"] = 1] = "LUA_OPTION_PLAYER_INPUT";
})(LuaSetOptionNotify_LuaOptionType = exports.LuaSetOptionNotify_LuaOptionType || (exports.LuaSetOptionNotify_LuaOptionType = {}));
/**
 * @generated from protobuf enum com.midnights.game.LuaSetOptionNotify.CmdId
 */
var LuaSetOptionNotify_CmdId;
(function (LuaSetOptionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LuaSetOptionNotify_CmdId[LuaSetOptionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 316;
     */
    LuaSetOptionNotify_CmdId[LuaSetOptionNotify_CmdId["CMD_ID"] = 316] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LuaSetOptionNotify_CmdId[LuaSetOptionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LuaSetOptionNotify_CmdId[LuaSetOptionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LuaSetOptionNotify_CmdId = exports.LuaSetOptionNotify_CmdId || (exports.LuaSetOptionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtDestroyServerGadgetNotify.CmdId
 */
var EvtDestroyServerGadgetNotify_CmdId;
(function (EvtDestroyServerGadgetNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtDestroyServerGadgetNotify_CmdId[EvtDestroyServerGadgetNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 387;
     */
    EvtDestroyServerGadgetNotify_CmdId[EvtDestroyServerGadgetNotify_CmdId["CMD_ID"] = 387] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtDestroyServerGadgetNotify_CmdId[EvtDestroyServerGadgetNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtDestroyServerGadgetNotify_CmdId[EvtDestroyServerGadgetNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtDestroyServerGadgetNotify_CmdId[EvtDestroyServerGadgetNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtDestroyServerGadgetNotify_CmdId = exports.EvtDestroyServerGadgetNotify_CmdId || (exports.EvtDestroyServerGadgetNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityAiKillSelfNotify.CmdId
 */
var EntityAiKillSelfNotify_CmdId;
(function (EntityAiKillSelfNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityAiKillSelfNotify_CmdId[EntityAiKillSelfNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 340;
     */
    EntityAiKillSelfNotify_CmdId[EntityAiKillSelfNotify_CmdId["CMD_ID"] = 340] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityAiKillSelfNotify_CmdId[EntityAiKillSelfNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityAiKillSelfNotify_CmdId[EntityAiKillSelfNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityAiKillSelfNotify_CmdId[EntityAiKillSelfNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EntityAiKillSelfNotify_CmdId = exports.EntityAiKillSelfNotify_CmdId || (exports.EntityAiKillSelfNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAvatarLockChairReq.CmdId
 */
var EvtAvatarLockChairReq_CmdId;
(function (EvtAvatarLockChairReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarLockChairReq_CmdId[EvtAvatarLockChairReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 318;
     */
    EvtAvatarLockChairReq_CmdId[EvtAvatarLockChairReq_CmdId["CMD_ID"] = 318] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarLockChairReq_CmdId[EvtAvatarLockChairReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarLockChairReq_CmdId[EvtAvatarLockChairReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarLockChairReq_CmdId[EvtAvatarLockChairReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EvtAvatarLockChairReq_CmdId = exports.EvtAvatarLockChairReq_CmdId || (exports.EvtAvatarLockChairReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtAvatarLockChairRsp.CmdId
 */
var EvtAvatarLockChairRsp_CmdId;
(function (EvtAvatarLockChairRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarLockChairRsp_CmdId[EvtAvatarLockChairRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 366;
     */
    EvtAvatarLockChairRsp_CmdId[EvtAvatarLockChairRsp_CmdId["CMD_ID"] = 366] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtAvatarLockChairRsp_CmdId[EvtAvatarLockChairRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtAvatarLockChairRsp_CmdId[EvtAvatarLockChairRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EvtAvatarLockChairRsp_CmdId = exports.EvtAvatarLockChairRsp_CmdId || (exports.EvtAvatarLockChairRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReportFightAntiCheatNotify.CmdId
 */
var ReportFightAntiCheatNotify_CmdId;
(function (ReportFightAntiCheatNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReportFightAntiCheatNotify_CmdId[ReportFightAntiCheatNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 368;
     */
    ReportFightAntiCheatNotify_CmdId[ReportFightAntiCheatNotify_CmdId["CMD_ID"] = 368] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReportFightAntiCheatNotify_CmdId[ReportFightAntiCheatNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReportFightAntiCheatNotify_CmdId[ReportFightAntiCheatNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReportFightAntiCheatNotify_CmdId[ReportFightAntiCheatNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReportFightAntiCheatNotify_CmdId = exports.ReportFightAntiCheatNotify_CmdId || (exports.ReportFightAntiCheatNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtBeingHealedNotify.CmdId
 */
var EvtBeingHealedNotify_CmdId;
(function (EvtBeingHealedNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBeingHealedNotify_CmdId[EvtBeingHealedNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 333;
     */
    EvtBeingHealedNotify_CmdId[EvtBeingHealedNotify_CmdId["CMD_ID"] = 333] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtBeingHealedNotify_CmdId[EvtBeingHealedNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtBeingHealedNotify_CmdId[EvtBeingHealedNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EvtBeingHealedNotify_CmdId = exports.EvtBeingHealedNotify_CmdId || (exports.EvtBeingHealedNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EvtLocalGadgetOwnerLeaveSceneNotify.CmdId
 */
var EvtLocalGadgetOwnerLeaveSceneNotify_CmdId;
(function (EvtLocalGadgetOwnerLeaveSceneNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtLocalGadgetOwnerLeaveSceneNotify_CmdId[EvtLocalGadgetOwnerLeaveSceneNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 384;
     */
    EvtLocalGadgetOwnerLeaveSceneNotify_CmdId[EvtLocalGadgetOwnerLeaveSceneNotify_CmdId["CMD_ID"] = 384] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EvtLocalGadgetOwnerLeaveSceneNotify_CmdId[EvtLocalGadgetOwnerLeaveSceneNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EvtLocalGadgetOwnerLeaveSceneNotify_CmdId[EvtLocalGadgetOwnerLeaveSceneNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EvtLocalGadgetOwnerLeaveSceneNotify_CmdId = exports.EvtLocalGadgetOwnerLeaveSceneNotify_CmdId || (exports.EvtLocalGadgetOwnerLeaveSceneNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForwardType
 */
var ForwardType;
(function (ForwardType) {
    /**
     * @generated from protobuf enum value: FORWARD_LOCAL = 0;
     */
    ForwardType[ForwardType["FORWARD_LOCAL"] = 0] = "FORWARD_LOCAL";
    /**
     * @generated from protobuf enum value: FORWARD_TO_ALL = 1;
     */
    ForwardType[ForwardType["FORWARD_TO_ALL"] = 1] = "FORWARD_TO_ALL";
    /**
     * @generated from protobuf enum value: FORWARD_TO_ALL_EXCEPT_CUR = 2;
     */
    ForwardType[ForwardType["FORWARD_TO_ALL_EXCEPT_CUR"] = 2] = "FORWARD_TO_ALL_EXCEPT_CUR";
    /**
     * @generated from protobuf enum value: FORWARD_TO_HOST = 3;
     */
    ForwardType[ForwardType["FORWARD_TO_HOST"] = 3] = "FORWARD_TO_HOST";
    /**
     * @generated from protobuf enum value: FORWARD_TO_ALL_GUEST = 4;
     */
    ForwardType[ForwardType["FORWARD_TO_ALL_GUEST"] = 4] = "FORWARD_TO_ALL_GUEST";
    /**
     * @generated from protobuf enum value: FORWARD_TO_PEER = 5;
     */
    ForwardType[ForwardType["FORWARD_TO_PEER"] = 5] = "FORWARD_TO_PEER";
    /**
     * @generated from protobuf enum value: FORWARD_TO_PEERS = 6;
     */
    ForwardType[ForwardType["FORWARD_TO_PEERS"] = 6] = "FORWARD_TO_PEERS";
    /**
     * @generated from protobuf enum value: FORWARD_ONLY_SERVER = 7;
     */
    ForwardType[ForwardType["FORWARD_ONLY_SERVER"] = 7] = "FORWARD_ONLY_SERVER";
    /**
     * @generated from protobuf enum value: FORWARD_TO_ALL_EXIST_EXCEPT_CUR = 8;
     */
    ForwardType[ForwardType["FORWARD_TO_ALL_EXIST_EXCEPT_CUR"] = 8] = "FORWARD_TO_ALL_EXIST_EXCEPT_CUR";
})(ForwardType = exports.ForwardType || (exports.ForwardType = {}));
/**
 * @generated from protobuf enum com.midnights.game.HitColliderType
 */
var HitColliderType;
(function (HitColliderType) {
    /**
     * @generated from protobuf enum value: HIT_COLLIDER_INVALID = 0;
     */
    HitColliderType[HitColliderType["HIT_COLLIDER_INVALID"] = 0] = "HIT_COLLIDER_INVALID";
    /**
     * @generated from protobuf enum value: HIT_COLLIDER_HIT_BOX = 1;
     */
    HitColliderType[HitColliderType["HIT_COLLIDER_HIT_BOX"] = 1] = "HIT_COLLIDER_HIT_BOX";
    /**
     * @generated from protobuf enum value: HIT_COLLIDER_WET_HIT_BOX = 2;
     */
    HitColliderType[HitColliderType["HIT_COLLIDER_WET_HIT_BOX"] = 2] = "HIT_COLLIDER_WET_HIT_BOX";
    /**
     * @generated from protobuf enum value: HIT_COLLIDER_HEAD_BOX = 3;
     */
    HitColliderType[HitColliderType["HIT_COLLIDER_HEAD_BOX"] = 3] = "HIT_COLLIDER_HEAD_BOX";
})(HitColliderType = exports.HitColliderType || (exports.HitColliderType = {}));
/**
 * @generated from protobuf enum com.midnights.game.CombatTypeArgument
 */
var CombatTypeArgument;
(function (CombatTypeArgument) {
    /**
     * @generated from protobuf enum value: COMBAT_NONE = 0;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_NONE"] = 0] = "COMBAT_NONE";
    /**
     * @generated from protobuf enum value: COMBAT_EVT_BEING_HIT = 1;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_EVT_BEING_HIT"] = 1] = "COMBAT_EVT_BEING_HIT";
    /**
     * @generated from protobuf enum value: COMBAT_ANIMATOR_STATE_CHANGED = 2;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_ANIMATOR_STATE_CHANGED"] = 2] = "COMBAT_ANIMATOR_STATE_CHANGED";
    /**
     * @generated from protobuf enum value: COMBAT_FACE_TO_DIR = 3;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_FACE_TO_DIR"] = 3] = "COMBAT_FACE_TO_DIR";
    /**
     * @generated from protobuf enum value: COMBAT_SET_ATTACK_TARGET = 4;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_SET_ATTACK_TARGET"] = 4] = "COMBAT_SET_ATTACK_TARGET";
    /**
     * @generated from protobuf enum value: COMBAT_RUSH_MOVE = 5;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_RUSH_MOVE"] = 5] = "COMBAT_RUSH_MOVE";
    /**
     * @generated from protobuf enum value: COMBAT_ANIMATOR_PARAMETER_CHANGED = 6;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_ANIMATOR_PARAMETER_CHANGED"] = 6] = "COMBAT_ANIMATOR_PARAMETER_CHANGED";
    /**
     * @generated from protobuf enum value: ENTITY_MOVE = 7;
     */
    CombatTypeArgument[CombatTypeArgument["ENTITY_MOVE"] = 7] = "ENTITY_MOVE";
    /**
     * @generated from protobuf enum value: SYNC_ENTITY_POSITION = 8;
     */
    CombatTypeArgument[CombatTypeArgument["SYNC_ENTITY_POSITION"] = 8] = "SYNC_ENTITY_POSITION";
    /**
     * @generated from protobuf enum value: COMBAT_STEER_MOTION_INFO = 9;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_STEER_MOTION_INFO"] = 9] = "COMBAT_STEER_MOTION_INFO";
    /**
     * @generated from protobuf enum value: COMBAT_FORCE_SET_POS_INFO = 10;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_FORCE_SET_POS_INFO"] = 10] = "COMBAT_FORCE_SET_POS_INFO";
    /**
     * @generated from protobuf enum value: COMBAT_COMPENSATE_POS_DIFF = 11;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_COMPENSATE_POS_DIFF"] = 11] = "COMBAT_COMPENSATE_POS_DIFF";
    /**
     * @generated from protobuf enum value: COMBAT_MONSTER_DO_BLINK = 12;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_MONSTER_DO_BLINK"] = 12] = "COMBAT_MONSTER_DO_BLINK";
    /**
     * @generated from protobuf enum value: COMBAT_FIXED_RUSH_MOVE = 13;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_FIXED_RUSH_MOVE"] = 13] = "COMBAT_FIXED_RUSH_MOVE";
    /**
     * @generated from protobuf enum value: COMBAT_SYNC_TRANSFORM = 14;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_SYNC_TRANSFORM"] = 14] = "COMBAT_SYNC_TRANSFORM";
    /**
     * @generated from protobuf enum value: COMBAT_LIGHT_CORE_MOVE = 15;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_LIGHT_CORE_MOVE"] = 15] = "COMBAT_LIGHT_CORE_MOVE";
    /**
     * @generated from protobuf enum value: COMBAT_BEING_HEALED_NTF = 16;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_BEING_HEALED_NTF"] = 16] = "COMBAT_BEING_HEALED_NTF";
    /**
     * @generated from protobuf enum value: COMBAT_SKILL_ANCHOR_POSITION_NTF = 17;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_SKILL_ANCHOR_POSITION_NTF"] = 17] = "COMBAT_SKILL_ANCHOR_POSITION_NTF";
    /**
     * @generated from protobuf enum value: COMBAT_GRAPPLING_HOOK_MOVE = 18;
     */
    CombatTypeArgument[CombatTypeArgument["COMBAT_GRAPPLING_HOOK_MOVE"] = 18] = "COMBAT_GRAPPLING_HOOK_MOVE";
})(CombatTypeArgument = exports.CombatTypeArgument || (exports.CombatTypeArgument = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HitCollision$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HitCollision", [
            { no: 8, name: "hit_collider_type", kind: "enum", opt: true, T: () => ["com.midnights.game.HitColliderType", HitColliderType] },
            { no: 7, name: "hit_point", kind: "message", T: () => define_11.Vector },
            { no: 2, name: "attackee_hit_force_angle", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "hit_dir", kind: "message", T: () => define_11.Vector },
            { no: 15, name: "attackee_hit_entity_angle", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "hit_box_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.HitColliderType hit_collider_type */ 8:
                    message.hitColliderType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector hit_point */ 7:
                    message.hitPoint = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitPoint);
                    break;
                case /* optional float attackee_hit_force_angle */ 2:
                    message.attackeeHitForceAngle = reader.float();
                    break;
                case /* optional com.midnights.game.Vector hit_dir */ 13:
                    message.hitDir = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitDir);
                    break;
                case /* optional float attackee_hit_entity_angle */ 15:
                    message.attackeeHitEntityAngle = reader.float();
                    break;
                case /* optional int32 hit_box_index */ 4:
                    message.hitBoxIndex = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.HitColliderType hit_collider_type = 8; */
        if (message.hitColliderType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.hitColliderType);
        /* optional com.midnights.game.Vector hit_point = 7; */
        if (message.hitPoint)
            define_11.Vector.internalBinaryWrite(message.hitPoint, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float attackee_hit_force_angle = 2; */
        if (message.attackeeHitForceAngle !== undefined)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.attackeeHitForceAngle);
        /* optional com.midnights.game.Vector hit_dir = 13; */
        if (message.hitDir)
            define_11.Vector.internalBinaryWrite(message.hitDir, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float attackee_hit_entity_angle = 15; */
        if (message.attackeeHitEntityAngle !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.attackeeHitEntityAngle);
        /* optional int32 hit_box_index = 4; */
        if (message.hitBoxIndex !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.hitBoxIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HitCollision
 */
exports.HitCollision = new HitCollision$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AttackHitEffectResult$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AttackHitEffectResult", [
            { no: 8, name: "hit_halt_time_scale", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "original_hit_eff_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "air_strength", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "hit_eff_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "hit_halt_time", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "retreat_strength", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float hit_halt_time_scale */ 8:
                    message.hitHaltTimeScale = reader.float();
                    break;
                case /* optional uint32 original_hit_eff_level */ 12:
                    message.originalHitEffLevel = reader.uint32();
                    break;
                case /* optional float air_strength */ 15:
                    message.airStrength = reader.float();
                    break;
                case /* optional uint32 hit_eff_level */ 2:
                    message.hitEffLevel = reader.uint32();
                    break;
                case /* optional float hit_halt_time */ 13:
                    message.hitHaltTime = reader.float();
                    break;
                case /* optional float retreat_strength */ 7:
                    message.retreatStrength = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float hit_halt_time_scale = 8; */
        if (message.hitHaltTimeScale !== undefined)
            writer.tag(8, runtime_1.WireType.Bit32).float(message.hitHaltTimeScale);
        /* optional uint32 original_hit_eff_level = 12; */
        if (message.originalHitEffLevel !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.originalHitEffLevel);
        /* optional float air_strength = 15; */
        if (message.airStrength !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.airStrength);
        /* optional uint32 hit_eff_level = 2; */
        if (message.hitEffLevel !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.hitEffLevel);
        /* optional float hit_halt_time = 13; */
        if (message.hitHaltTime !== undefined)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.hitHaltTime);
        /* optional float retreat_strength = 7; */
        if (message.retreatStrength !== undefined)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.retreatStrength);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AttackHitEffectResult
 */
exports.AttackHitEffectResult = new AttackHitEffectResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityIdentifier$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityIdentifier", [
            { no: 2, name: "modifier_owner_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "instanced_ability_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "ability_caster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "local_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 modifier_owner_id */ 2:
                    message.modifierOwnerId = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 9:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional uint32 instanced_ability_id */ 10:
                    message.instancedAbilityId = reader.uint32();
                    break;
                case /* optional bool is_serverbuff_modifier */ 6:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* optional uint32 ability_caster_id */ 15:
                    message.abilityCasterId = reader.uint32();
                    break;
                case /* optional int32 local_id */ 3:
                    message.localId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 modifier_owner_id = 2; */
        if (message.modifierOwnerId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.modifierOwnerId);
        /* optional uint32 instanced_modifier_id = 9; */
        if (message.instancedModifierId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.instancedModifierId);
        /* optional uint32 instanced_ability_id = 10; */
        if (message.instancedAbilityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.instancedAbilityId);
        /* optional bool is_serverbuff_modifier = 6; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isServerbuffModifier);
        /* optional uint32 ability_caster_id = 15; */
        if (message.abilityCasterId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.abilityCasterId);
        /* optional int32 local_id = 3; */
        if (message.localId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.localId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityIdentifier
 */
exports.AbilityIdentifier = new AbilityIdentifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AttackResult$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AttackResult", [
            { no: 1858, name: "is_resist_text", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1011, name: "create_count_sync_to_server", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2005, name: "amplify_reaction_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "endure_break", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "element_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 425, name: "element_durability_attenuation", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "defense_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1188, name: "attack_timestamp_ms", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 91, name: "bullet_fly_time_ms", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_crit", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 900, name: "element_amplify_rate", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 1564, name: "attack_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1664, name: "critical_rand", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "hit_pos_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "anim_event_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "hit_eff_result", kind: "message", T: () => exports.AttackHitEffectResult },
            { no: 1202, name: "damage_shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 430, name: "endure_delta", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 1, name: "resolved_dir", kind: "message", T: () => define_11.Vector },
            { no: 6, name: "damage", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 1887, name: "addhurt_reaction_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 278, name: "hashed_anim_event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1418, name: "use_gadget_damage_action", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "hit_retreat_angle_compat", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "ability_identifier", kind: "message", T: () => exports.AbilityIdentifier },
            { no: 11, name: "attacker_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1530, name: "mute_element_hurt", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1366, name: "target_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "hit_collision", kind: "message", T: () => exports.HitCollision },
            { no: 1110, name: "gadget_damage_action_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_resist_text */ 1858:
                    message.isResistText = reader.bool();
                    break;
                case /* optional uint32 create_count_sync_to_server */ 1011:
                    message.createCountSyncToServer = reader.uint32();
                    break;
                case /* optional uint32 amplify_reaction_type */ 2005:
                    message.amplifyReactionType = reader.uint32();
                    break;
                case /* optional uint32 endure_break */ 7:
                    message.endureBreak = reader.uint32();
                    break;
                case /* optional uint32 element_type */ 5:
                    message.elementType = reader.uint32();
                    break;
                case /* optional float element_durability_attenuation */ 425:
                    message.elementDurabilityAttenuation = reader.float();
                    break;
                case /* optional uint32 defense_id */ 15:
                    message.defenseId = reader.uint32();
                    break;
                case /* optional uint32 attack_timestamp_ms */ 1188:
                    message.attackTimestampMs = reader.uint32();
                    break;
                case /* optional uint32 bullet_fly_time_ms */ 91:
                    message.bulletFlyTimeMs = reader.uint32();
                    break;
                case /* optional bool is_crit */ 13:
                    message.isCrit = reader.bool();
                    break;
                case /* optional float element_amplify_rate */ 900:
                    message.elementAmplifyRate = reader.float();
                    break;
                case /* optional uint32 attack_count */ 1564:
                    message.attackCount = reader.uint32();
                    break;
                case /* optional uint32 critical_rand */ 1664:
                    message.criticalRand = reader.uint32();
                    break;
                case /* optional uint32 hit_pos_type */ 2:
                    message.hitPosType = reader.uint32();
                    break;
                case /* optional string anim_event_id */ 4:
                    message.animEventId = reader.string();
                    break;
                case /* optional com.midnights.game.AttackHitEffectResult hit_eff_result */ 8:
                    message.hitEffResult = exports.AttackHitEffectResult.internalBinaryRead(reader, reader.uint32(), options, message.hitEffResult);
                    break;
                case /* optional float damage_shield */ 1202:
                    message.damageShield = reader.float();
                    break;
                case /* optional float endure_delta */ 430:
                    message.endureDelta = reader.float();
                    break;
                case /* optional com.midnights.game.Vector resolved_dir */ 1:
                    message.resolvedDir = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.resolvedDir);
                    break;
                case /* optional float damage */ 6:
                    message.damage = reader.float();
                    break;
                case /* optional uint32 addhurt_reaction_type */ 1887:
                    message.addhurtReactionType = reader.uint32();
                    break;
                case /* optional uint32 hashed_anim_event_id */ 278:
                    message.hashedAnimEventId = reader.uint32();
                    break;
                case /* optional bool use_gadget_damage_action */ 1418:
                    message.useGadgetDamageAction = reader.bool();
                    break;
                case /* optional int32 hit_retreat_angle_compat */ 9:
                    message.hitRetreatAngleCompat = reader.int32();
                    break;
                case /* optional com.midnights.game.AbilityIdentifier ability_identifier */ 14:
                    message.abilityIdentifier = exports.AbilityIdentifier.internalBinaryRead(reader, reader.uint32(), options, message.abilityIdentifier);
                    break;
                case /* optional uint32 attacker_id */ 11:
                    message.attackerId = reader.uint32();
                    break;
                case /* optional bool mute_element_hurt */ 1530:
                    message.muteElementHurt = reader.bool();
                    break;
                case /* optional uint32 target_type */ 1366:
                    message.targetType = reader.uint32();
                    break;
                case /* optional com.midnights.game.HitCollision hit_collision */ 10:
                    message.hitCollision = exports.HitCollision.internalBinaryRead(reader, reader.uint32(), options, message.hitCollision);
                    break;
                case /* optional uint32 gadget_damage_action_idx */ 1110:
                    message.gadgetDamageActionIdx = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_resist_text = 1858; */
        if (message.isResistText !== undefined)
            writer.tag(1858, runtime_1.WireType.Varint).bool(message.isResistText);
        /* optional uint32 create_count_sync_to_server = 1011; */
        if (message.createCountSyncToServer !== undefined)
            writer.tag(1011, runtime_1.WireType.Varint).uint32(message.createCountSyncToServer);
        /* optional uint32 amplify_reaction_type = 2005; */
        if (message.amplifyReactionType !== undefined)
            writer.tag(2005, runtime_1.WireType.Varint).uint32(message.amplifyReactionType);
        /* optional uint32 endure_break = 7; */
        if (message.endureBreak !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.endureBreak);
        /* optional uint32 element_type = 5; */
        if (message.elementType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.elementType);
        /* optional float element_durability_attenuation = 425; */
        if (message.elementDurabilityAttenuation !== undefined)
            writer.tag(425, runtime_1.WireType.Bit32).float(message.elementDurabilityAttenuation);
        /* optional uint32 defense_id = 15; */
        if (message.defenseId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.defenseId);
        /* optional uint32 attack_timestamp_ms = 1188; */
        if (message.attackTimestampMs !== undefined)
            writer.tag(1188, runtime_1.WireType.Varint).uint32(message.attackTimestampMs);
        /* optional uint32 bullet_fly_time_ms = 91; */
        if (message.bulletFlyTimeMs !== undefined)
            writer.tag(91, runtime_1.WireType.Varint).uint32(message.bulletFlyTimeMs);
        /* optional bool is_crit = 13; */
        if (message.isCrit !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isCrit);
        /* optional float element_amplify_rate = 900; */
        if (message.elementAmplifyRate !== undefined)
            writer.tag(900, runtime_1.WireType.Bit32).float(message.elementAmplifyRate);
        /* optional uint32 attack_count = 1564; */
        if (message.attackCount !== undefined)
            writer.tag(1564, runtime_1.WireType.Varint).uint32(message.attackCount);
        /* optional uint32 critical_rand = 1664; */
        if (message.criticalRand !== undefined)
            writer.tag(1664, runtime_1.WireType.Varint).uint32(message.criticalRand);
        /* optional uint32 hit_pos_type = 2; */
        if (message.hitPosType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.hitPosType);
        /* optional string anim_event_id = 4; */
        if (message.animEventId !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.animEventId);
        /* optional com.midnights.game.AttackHitEffectResult hit_eff_result = 8; */
        if (message.hitEffResult)
            exports.AttackHitEffectResult.internalBinaryWrite(message.hitEffResult, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float damage_shield = 1202; */
        if (message.damageShield !== undefined)
            writer.tag(1202, runtime_1.WireType.Bit32).float(message.damageShield);
        /* optional float endure_delta = 430; */
        if (message.endureDelta !== undefined)
            writer.tag(430, runtime_1.WireType.Bit32).float(message.endureDelta);
        /* optional com.midnights.game.Vector resolved_dir = 1; */
        if (message.resolvedDir)
            define_11.Vector.internalBinaryWrite(message.resolvedDir, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float damage = 6; */
        if (message.damage !== undefined)
            writer.tag(6, runtime_1.WireType.Bit32).float(message.damage);
        /* optional uint32 addhurt_reaction_type = 1887; */
        if (message.addhurtReactionType !== undefined)
            writer.tag(1887, runtime_1.WireType.Varint).uint32(message.addhurtReactionType);
        /* optional uint32 hashed_anim_event_id = 278; */
        if (message.hashedAnimEventId !== undefined)
            writer.tag(278, runtime_1.WireType.Varint).uint32(message.hashedAnimEventId);
        /* optional bool use_gadget_damage_action = 1418; */
        if (message.useGadgetDamageAction !== undefined)
            writer.tag(1418, runtime_1.WireType.Varint).bool(message.useGadgetDamageAction);
        /* optional int32 hit_retreat_angle_compat = 9; */
        if (message.hitRetreatAngleCompat !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.hitRetreatAngleCompat);
        /* optional com.midnights.game.AbilityIdentifier ability_identifier = 14; */
        if (message.abilityIdentifier)
            exports.AbilityIdentifier.internalBinaryWrite(message.abilityIdentifier, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 attacker_id = 11; */
        if (message.attackerId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.attackerId);
        /* optional bool mute_element_hurt = 1530; */
        if (message.muteElementHurt !== undefined)
            writer.tag(1530, runtime_1.WireType.Varint).bool(message.muteElementHurt);
        /* optional uint32 target_type = 1366; */
        if (message.targetType !== undefined)
            writer.tag(1366, runtime_1.WireType.Varint).uint32(message.targetType);
        /* optional com.midnights.game.HitCollision hit_collision = 10; */
        if (message.hitCollision)
            exports.HitCollision.internalBinaryWrite(message.hitCollision, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 gadget_damage_action_idx = 1110; */
        if (message.gadgetDamageActionIdx !== undefined)
            writer.tag(1110, runtime_1.WireType.Varint).uint32(message.gadgetDamageActionIdx);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AttackResult
 */
exports.AttackResult = new AttackResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHitInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtBeingHitInfo", [
            { no: 6, name: "peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "attack_result", kind: "message", T: () => exports.AttackResult },
            { no: 4, name: "frame_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 peer_id */ 6:
                    message.peerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AttackResult attack_result */ 7:
                    message.attackResult = exports.AttackResult.internalBinaryRead(reader, reader.uint32(), options, message.attackResult);
                    break;
                case /* optional uint32 frame_num */ 4:
                    message.frameNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 peer_id = 6; */
        if (message.peerId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.peerId);
        /* optional com.midnights.game.AttackResult attack_result = 7; */
        if (message.attackResult)
            exports.AttackResult.internalBinaryWrite(message.attackResult, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 frame_num = 4; */
        if (message.frameNum !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.frameNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtBeingHitInfo
 */
exports.EvtBeingHitInfo = new EvtBeingHitInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtHittingOtherInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtHittingOtherInfo", [
            { no: 2, name: "attack_result", kind: "message", T: () => exports.AttackResult },
            { no: 8, name: "peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AttackResult attack_result */ 2:
                    message.attackResult = exports.AttackResult.internalBinaryRead(reader, reader.uint32(), options, message.attackResult);
                    break;
                case /* optional uint32 peer_id */ 8:
                    message.peerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AttackResult attack_result = 2; */
        if (message.attackResult)
            exports.AttackResult.internalBinaryWrite(message.attackResult, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 peer_id = 8; */
        if (message.peerId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.peerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtHittingOtherInfo
 */
exports.EvtHittingOtherInfo = new EvtHittingOtherInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtBeingHitNotify", [
            { no: 6, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 3, name: "being_hit_info", kind: "message", T: () => exports.EvtBeingHitInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 6:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.EvtBeingHitInfo being_hit_info */ 3:
                    message.beingHitInfo = exports.EvtBeingHitInfo.internalBinaryRead(reader, reader.uint32(), options, message.beingHitInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForwardType forward_type = 6; */
        if (message.forwardType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.EvtBeingHitInfo being_hit_info = 3; */
        if (message.beingHitInfo)
            exports.EvtBeingHitInfo.internalBinaryWrite(message.beingHitInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtBeingHitNotify
 */
exports.EvtBeingHitNotify = new EvtBeingHitNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorParameterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAnimatorParameterInfo", [
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_server_cache", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "value", kind: "message", T: () => define_10.AnimatorParameterValueInfo },
            { no: 15, name: "name_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional bool is_server_cache */ 5:
                    message.isServerCache = reader.bool();
                    break;
                case /* optional com.midnights.game.AnimatorParameterValueInfo value */ 7:
                    message.value = define_10.AnimatorParameterValueInfo.internalBinaryRead(reader, reader.uint32(), options, message.value);
                    break;
                case /* optional int32 name_id */ 15:
                    message.nameId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional bool is_server_cache = 5; */
        if (message.isServerCache !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isServerCache);
        /* optional com.midnights.game.AnimatorParameterValueInfo value = 7; */
        if (message.value)
            define_10.AnimatorParameterValueInfo.internalBinaryWrite(message.value, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 name_id = 15; */
        if (message.nameId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.nameId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAnimatorParameterInfo
 */
exports.EvtAnimatorParameterInfo = new EvtAnimatorParameterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorParameterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAnimatorParameterNotify", [
            { no: 12, name: "animator_param_info", kind: "message", T: () => exports.EvtAnimatorParameterInfo },
            { no: 14, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.EvtAnimatorParameterInfo animator_param_info */ 12:
                    message.animatorParamInfo = exports.EvtAnimatorParameterInfo.internalBinaryRead(reader, reader.uint32(), options, message.animatorParamInfo);
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 14:
                    message.forwardType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.EvtAnimatorParameterInfo animator_param_info = 12; */
        if (message.animatorParamInfo)
            exports.EvtAnimatorParameterInfo.internalBinaryWrite(message.animatorParamInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ForwardType forward_type = 14; */
        if (message.forwardType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.forwardType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAnimatorParameterNotify
 */
exports.EvtAnimatorParameterNotify = new EvtAnimatorParameterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityArgument$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityArgument", [
            { no: 5, name: "int_arg", kind: "scalar", oneof: "arg", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "float_arg", kind: "scalar", oneof: "arg", T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "str_arg", kind: "scalar", oneof: "arg", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { arg: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 int_arg */ 5:
                    message.arg = {
                        oneofKind: "intArg",
                        intArg: reader.uint32()
                    };
                    break;
                case /* float float_arg */ 15:
                    message.arg = {
                        oneofKind: "floatArg",
                        floatArg: reader.float()
                    };
                    break;
                case /* string str_arg */ 11:
                    message.arg = {
                        oneofKind: "strArg",
                        strArg: reader.string()
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
        /* uint32 int_arg = 5; */
        if (message.arg.oneofKind === "intArg")
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.arg.intArg);
        /* float float_arg = 15; */
        if (message.arg.oneofKind === "floatArg")
            writer.tag(15, runtime_1.WireType.Bit32).float(message.arg.floatArg);
        /* string str_arg = 11; */
        if (message.arg.oneofKind === "strArg")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.arg.strArg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityArgument
 */
exports.AbilityArgument = new AbilityArgument$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HostPlayerNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HostPlayerNotify", [
            { no: 13, name: "host_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "host_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 host_peer_id */ 13:
                    message.hostPeerId = reader.uint32();
                    break;
                case /* optional uint32 host_uid */ 10:
                    message.hostUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 host_peer_id = 13; */
        if (message.hostPeerId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.hostPeerId);
        /* optional uint32 host_uid = 10; */
        if (message.hostUid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.hostUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HostPlayerNotify
 */
exports.HostPlayerNotify = new HostPlayerNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtDoSkillSuccNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtDoSkillSuccNotify", [
            { no: 13, name: "caster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 15, name: "forward", kind: "message", T: () => define_11.Vector },
            { no: 7, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 caster_id */ 13:
                    message.casterId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 10:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector forward */ 15:
                    message.forward = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
                    break;
                case /* optional uint32 skill_id */ 7:
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
        /* optional uint32 caster_id = 13; */
        if (message.casterId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.casterId);
        /* optional com.midnights.game.ForwardType forward_type = 10; */
        if (message.forwardType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.Vector forward = 15; */
        if (message.forward)
            define_11.Vector.internalBinaryWrite(message.forward, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 skill_id = 7; */
        if (message.skillId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtDoSkillSuccNotify
 */
exports.EvtDoSkillSuccNotify = new EvtDoSkillSuccNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtCreateGadgetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtCreateGadgetNotify", [
            { no: 8, name: "is_async_load", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "camp_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "sight_group_with_owner", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 889, name: "target_entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "init_euler_angles", kind: "message", T: () => define_11.Vector },
            { no: 11, name: "target_lock_point_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1920, name: "target_lock_point_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "init_pos", kind: "message", T: () => define_11.Vector },
            { no: 9, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 25, name: "is_peer_id_from_player", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "prop_owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 379, name: "is_true_life_time_by_owner", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { targetEntityIdList: [], targetLockPointIndexList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_async_load */ 8:
                    message.isAsyncLoad = reader.bool();
                    break;
                case /* optional uint32 camp_type */ 5:
                    message.campType = reader.uint32();
                    break;
                case /* optional bool sight_group_with_owner */ 10:
                    message.sightGroupWithOwner = reader.bool();
                    break;
                case /* repeated uint32 target_entity_id_list */ 889:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetEntityIdList.push(reader.uint32());
                    else
                        message.targetEntityIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 12:
                    message.forwardType = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 target_entity_id */ 3:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* optional uint32 camp_id */ 15:
                    message.campId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 6:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.Vector init_euler_angles */ 13:
                    message.initEulerAngles = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.initEulerAngles);
                    break;
                case /* optional uint32 target_lock_point_index */ 11:
                    message.targetLockPointIndex = reader.uint32();
                    break;
                case /* repeated uint32 target_lock_point_index_list */ 1920:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetLockPointIndexList.push(reader.uint32());
                    else
                        message.targetLockPointIndexList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.Vector init_pos */ 4:
                    message.initPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.initPos);
                    break;
                case /* optional uint32 owner_entity_id */ 9:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional uint32 room_id */ 7:
                    message.roomId = reader.uint32();
                    break;
                case /* optional bool is_peer_id_from_player */ 25:
                    message.isPeerIdFromPlayer = reader.bool();
                    break;
                case /* optional uint32 prop_owner_entity_id */ 1:
                    message.propOwnerEntityId = reader.uint32();
                    break;
                case /* optional bool is_true_life_time_by_owner */ 379:
                    message.isTrueLifeTimeByOwner = reader.bool();
                    break;
                case /* optional uint32 config_id */ 14:
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
        /* optional bool is_async_load = 8; */
        if (message.isAsyncLoad !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isAsyncLoad);
        /* optional uint32 camp_type = 5; */
        if (message.campType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.campType);
        /* optional bool sight_group_with_owner = 10; */
        if (message.sightGroupWithOwner !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.sightGroupWithOwner);
        /* repeated uint32 target_entity_id_list = 889; */
        if (message.targetEntityIdList.length) {
            writer.tag(889, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetEntityIdList.length; i++)
                writer.uint32(message.targetEntityIdList[i]);
            writer.join();
        }
        /* optional com.midnights.game.ForwardType forward_type = 12; */
        if (message.forwardType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 target_entity_id = 3; */
        if (message.targetEntityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.targetEntityId);
        /* optional uint32 camp_id = 15; */
        if (message.campId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.campId);
        /* optional uint64 guid = 6; */
        if (message.guid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.guid);
        /* optional com.midnights.game.Vector init_euler_angles = 13; */
        if (message.initEulerAngles)
            define_11.Vector.internalBinaryWrite(message.initEulerAngles, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 target_lock_point_index = 11; */
        if (message.targetLockPointIndex !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.targetLockPointIndex);
        /* repeated uint32 target_lock_point_index_list = 1920; */
        if (message.targetLockPointIndexList.length) {
            writer.tag(1920, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetLockPointIndexList.length; i++)
                writer.uint32(message.targetLockPointIndexList[i]);
            writer.join();
        }
        /* optional com.midnights.game.Vector init_pos = 4; */
        if (message.initPos)
            define_11.Vector.internalBinaryWrite(message.initPos, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 owner_entity_id = 9; */
        if (message.ownerEntityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 room_id = 7; */
        if (message.roomId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.roomId);
        /* optional bool is_peer_id_from_player = 25; */
        if (message.isPeerIdFromPlayer !== undefined)
            writer.tag(25, runtime_1.WireType.Varint).bool(message.isPeerIdFromPlayer);
        /* optional uint32 prop_owner_entity_id = 1; */
        if (message.propOwnerEntityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.propOwnerEntityId);
        /* optional bool is_true_life_time_by_owner = 379; */
        if (message.isTrueLifeTimeByOwner !== undefined)
            writer.tag(379, runtime_1.WireType.Varint).bool(message.isTrueLifeTimeByOwner);
        /* optional uint32 config_id = 14; */
        if (message.configId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtCreateGadgetNotify
 */
exports.EvtCreateGadgetNotify = new EvtCreateGadgetNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtDestroyGadgetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtDestroyGadgetNotify", [
            { no: 5, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 3, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 5:
                    message.forwardType = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 3:
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
        /* optional com.midnights.game.ForwardType forward_type = 5; */
        if (message.forwardType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional uint32 entity_id = 3; */
        if (message.entityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtDestroyGadgetNotify
 */
exports.EvtDestroyGadgetNotify = new EvtDestroyGadgetNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtFaceToEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtFaceToEntityNotify", [
            { no: 5, name: "face_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 face_entity_id */ 5:
                    message.faceEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 9:
                    message.forwardType = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 1:
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
        /* optional uint32 face_entity_id = 5; */
        if (message.faceEntityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.faceEntityId);
        /* optional com.midnights.game.ForwardType forward_type = 9; */
        if (message.forwardType !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtFaceToEntityNotify
 */
exports.EvtFaceToEntityNotify = new EvtFaceToEntityNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtFaceToDirInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtFaceToDirInfo", [
            { no: 12, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "face_dir", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector face_dir */ 14:
                    message.faceDir = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.faceDir);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 12; */
        if (message.entityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.Vector face_dir = 14; */
        if (message.faceDir)
            define_11.Vector.internalBinaryWrite(message.faceDir, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtFaceToDirInfo
 */
exports.EvtFaceToDirInfo = new EvtFaceToDirInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtFaceToDirNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtFaceToDirNotify", [
            { no: 13, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 5, name: "evt_face_to_dir_info", kind: "message", T: () => exports.EvtFaceToDirInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 13:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.EvtFaceToDirInfo evt_face_to_dir_info */ 5:
                    message.evtFaceToDirInfo = exports.EvtFaceToDirInfo.internalBinaryRead(reader, reader.uint32(), options, message.evtFaceToDirInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForwardType forward_type = 13; */
        if (message.forwardType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.EvtFaceToDirInfo evt_face_to_dir_info = 5; */
        if (message.evtFaceToDirInfo)
            exports.EvtFaceToDirInfo.internalBinaryWrite(message.evtFaceToDirInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtFaceToDirNotify
 */
exports.EvtFaceToDirNotify = new EvtFaceToDirNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtCostStaminaNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtCostStaminaNotify", [
            { no: 6, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cost_stamina", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 6:
                    message.skillId = reader.uint32();
                    break;
                case /* optional float cost_stamina */ 11:
                    message.costStamina = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 6; */
        if (message.skillId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional float cost_stamina = 11; */
        if (message.costStamina !== undefined)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.costStamina);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtCostStaminaNotify
 */
exports.EvtCostStaminaNotify = new EvtCostStaminaNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtSetAttackTargetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtSetAttackTargetInfo", [
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "select_point_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "attack_target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 select_point_index */ 6:
                    message.selectPointIndex = reader.uint32();
                    break;
                case /* optional uint32 attack_target_id */ 7:
                    message.attackTargetId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 select_point_index = 6; */
        if (message.selectPointIndex !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.selectPointIndex);
        /* optional uint32 attack_target_id = 7; */
        if (message.attackTargetId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.attackTargetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtSetAttackTargetInfo
 */
exports.EvtSetAttackTargetInfo = new EvtSetAttackTargetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtSetAttackTargetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtSetAttackTargetNotify", [
            { no: 1, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 11, name: "evt_set_attack_target_info", kind: "message", T: () => exports.EvtSetAttackTargetInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 1:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.EvtSetAttackTargetInfo evt_set_attack_target_info */ 11:
                    message.evtSetAttackTargetInfo = exports.EvtSetAttackTargetInfo.internalBinaryRead(reader, reader.uint32(), options, message.evtSetAttackTargetInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForwardType forward_type = 1; */
        if (message.forwardType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.EvtSetAttackTargetInfo evt_set_attack_target_info = 11; */
        if (message.evtSetAttackTargetInfo)
            exports.EvtSetAttackTargetInfo.internalBinaryWrite(message.evtSetAttackTargetInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtSetAttackTargetNotify
 */
exports.EvtSetAttackTargetNotify = new EvtSetAttackTargetNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorStateChangedInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAnimatorStateChangedInfo", [
            { no: 14, name: "face_angle_compact", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "to_state_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "normalized_time_compact", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "layer", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "pos", kind: "message", T: () => define_11.Vector },
            { no: 3, name: "fade_duration", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 1, name: "forceSync", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "handle_animator_state_immediately", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 face_angle_compact */ 14:
                    message.faceAngleCompact = reader.int32();
                    break;
                case /* optional uint32 to_state_hash */ 5:
                    message.toStateHash = reader.uint32();
                    break;
                case /* optional uint32 normalized_time_compact */ 9:
                    message.normalizedTimeCompact = reader.uint32();
                    break;
                case /* optional uint32 layer */ 2:
                    message.layer = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 13:
                    message.pos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional float fade_duration */ 3:
                    message.fadeDuration = reader.float();
                    break;
                case /* optional bool forceSync */ 1:
                    message.forceSync = reader.bool();
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional bool handle_animator_state_immediately */ 7:
                    message.handleAnimatorStateImmediately = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 face_angle_compact = 14; */
        if (message.faceAngleCompact !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        /* optional uint32 to_state_hash = 5; */
        if (message.toStateHash !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.toStateHash);
        /* optional uint32 normalized_time_compact = 9; */
        if (message.normalizedTimeCompact !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.normalizedTimeCompact);
        /* optional uint32 layer = 2; */
        if (message.layer !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.layer);
        /* optional com.midnights.game.Vector pos = 13; */
        if (message.pos)
            define_11.Vector.internalBinaryWrite(message.pos, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float fade_duration = 3; */
        if (message.fadeDuration !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.fadeDuration);
        /* optional bool forceSync = 1; */
        if (message.forceSync !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.forceSync);
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional bool handle_animator_state_immediately = 7; */
        if (message.handleAnimatorStateImmediately !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.handleAnimatorStateImmediately);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAnimatorStateChangedInfo
 */
exports.EvtAnimatorStateChangedInfo = new EvtAnimatorStateChangedInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtCompensatePosDiffInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtCompensatePosDiffInfo", [
            { no: 14, name: "cur_pos", kind: "message", T: () => define_11.Vector },
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "face_angle_compact", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "cur_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "normalized_time_compact", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector cur_pos */ 14:
                    message.curPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.curPos);
                    break;
                case /* optional uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
                    break;
                case /* optional int32 face_angle_compact */ 10:
                    message.faceAngleCompact = reader.int32();
                    break;
                case /* optional uint32 cur_hash */ 4:
                    message.curHash = reader.uint32();
                    break;
                case /* optional uint32 normalized_time_compact */ 3:
                    message.normalizedTimeCompact = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector cur_pos = 14; */
        if (message.curPos)
            define_11.Vector.internalBinaryWrite(message.curPos, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional int32 face_angle_compact = 10; */
        if (message.faceAngleCompact !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        /* optional uint32 cur_hash = 4; */
        if (message.curHash !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.curHash);
        /* optional uint32 normalized_time_compact = 3; */
        if (message.normalizedTimeCompact !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.normalizedTimeCompact);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtCompensatePosDiffInfo
 */
exports.EvtCompensatePosDiffInfo = new EvtCompensatePosDiffInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtMonsterDoBlink$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtMonsterDoBlink", [
            { no: 3, name: "target_rot", kind: "message", T: () => define_11.Vector },
            { no: 7, name: "target_pos", kind: "message", T: () => define_11.Vector },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector target_rot */ 3:
                    message.targetRot = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetRot);
                    break;
                case /* optional com.midnights.game.Vector target_pos */ 7:
                    message.targetPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                case /* optional uint32 entity_id */ 2:
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
        /* optional com.midnights.game.Vector target_rot = 3; */
        if (message.targetRot)
            define_11.Vector.internalBinaryWrite(message.targetRot, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector target_pos = 7; */
        if (message.targetPos)
            define_11.Vector.internalBinaryWrite(message.targetPos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtMonsterDoBlink
 */
exports.EvtMonsterDoBlink = new EvtMonsterDoBlink$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtFixedRushMove$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtFixedRushMove", [
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "speed", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "need_set_is_in_air", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "animator_state_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "target_pos", kind: "message", T: () => define_11.Vector },
            { no: 6, name: "check_animator_state_on_exit_only", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "override_collider", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { animatorStateIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional float speed */ 3:
                    message.speed = reader.float();
                    break;
                case /* optional bool need_set_is_in_air */ 7:
                    message.needSetIsInAir = reader.bool();
                    break;
                case /* repeated uint32 animator_state_id_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.animatorStateIdList.push(reader.uint32());
                    else
                        message.animatorStateIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.Vector target_pos */ 9:
                    message.targetPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                case /* optional bool check_animator_state_on_exit_only */ 6:
                    message.checkAnimatorStateOnExitOnly = reader.bool();
                    break;
                case /* optional string override_collider */ 13:
                    message.overrideCollider = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional float speed = 3; */
        if (message.speed !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.speed);
        /* optional bool need_set_is_in_air = 7; */
        if (message.needSetIsInAir !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.needSetIsInAir);
        /* repeated uint32 animator_state_id_list = 2; */
        if (message.animatorStateIdList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.animatorStateIdList.length; i++)
                writer.uint32(message.animatorStateIdList[i]);
            writer.join();
        }
        /* optional com.midnights.game.Vector target_pos = 9; */
        if (message.targetPos)
            define_11.Vector.internalBinaryWrite(message.targetPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool check_animator_state_on_exit_only = 6; */
        if (message.checkAnimatorStateOnExitOnly !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.checkAnimatorStateOnExitOnly);
        /* optional string override_collider = 13; */
        if (message.overrideCollider !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.overrideCollider);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtFixedRushMove
 */
exports.EvtFixedRushMove = new EvtFixedRushMove$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtSyncTransform$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtSyncTransform", [
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "entity_pos", kind: "message", T: () => define_11.Vector },
            { no: 1, name: "entity_rot", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector entity_pos */ 6:
                    message.entityPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.entityPos);
                    break;
                case /* optional com.midnights.game.Vector entity_rot */ 1:
                    message.entityRot = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.entityRot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.Vector entity_pos = 6; */
        if (message.entityPos)
            define_11.Vector.internalBinaryWrite(message.entityPos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector entity_rot = 1; */
        if (message.entityRot)
            define_11.Vector.internalBinaryWrite(message.entityRot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtSyncTransform
 */
exports.EvtSyncTransform = new EvtSyncTransform$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtLightCoreMove$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtLightCoreMove", [
            { no: 15, name: "target_pos", kind: "message", T: () => define_11.Vector },
            { no: 11, name: "acelerate", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_absorb_time", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 14, name: "speed", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector target_pos */ 15:
                    message.targetPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                case /* optional float acelerate */ 11:
                    message.acelerate = reader.float();
                    break;
                case /* optional uint32 entity_id */ 5:
                    message.entityId = reader.uint32();
                    break;
                case /* optional float max_absorb_time */ 10:
                    message.maxAbsorbTime = reader.float();
                    break;
                case /* optional float speed */ 14:
                    message.speed = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector target_pos = 15; */
        if (message.targetPos)
            define_11.Vector.internalBinaryWrite(message.targetPos, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float acelerate = 11; */
        if (message.acelerate !== undefined)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.acelerate);
        /* optional uint32 entity_id = 5; */
        if (message.entityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional float max_absorb_time = 10; */
        if (message.maxAbsorbTime !== undefined)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.maxAbsorbTime);
        /* optional float speed = 14; */
        if (message.speed !== undefined)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.speed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtLightCoreMove
 */
exports.EvtLightCoreMove = new EvtLightCoreMove$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtGrapplingHookMove$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtGrapplingHookMove", [
            { no: 1, name: "acceleration", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "animator_state_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "need_set_is_in_air", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "speed", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "max_speed", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "check_animator_state_on_exit_only", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "override_collider", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "target_pos", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = { animatorStateIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float acceleration */ 1:
                    message.acceleration = reader.float();
                    break;
                case /* repeated uint32 animator_state_id_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.animatorStateIdList.push(reader.uint32());
                    else
                        message.animatorStateIdList.push(reader.uint32());
                    break;
                case /* optional uint32 entity_id */ 3:
                    message.entityId = reader.uint32();
                    break;
                case /* optional bool need_set_is_in_air */ 13:
                    message.needSetIsInAir = reader.bool();
                    break;
                case /* optional float speed */ 12:
                    message.speed = reader.float();
                    break;
                case /* optional float max_speed */ 8:
                    message.maxSpeed = reader.float();
                    break;
                case /* optional bool check_animator_state_on_exit_only */ 11:
                    message.checkAnimatorStateOnExitOnly = reader.bool();
                    break;
                case /* optional string override_collider */ 14:
                    message.overrideCollider = reader.string();
                    break;
                case /* optional com.midnights.game.Vector target_pos */ 10:
                    message.targetPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float acceleration = 1; */
        if (message.acceleration !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.acceleration);
        /* repeated uint32 animator_state_id_list = 2; */
        if (message.animatorStateIdList.length) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.animatorStateIdList.length; i++)
                writer.uint32(message.animatorStateIdList[i]);
            writer.join();
        }
        /* optional uint32 entity_id = 3; */
        if (message.entityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional bool need_set_is_in_air = 13; */
        if (message.needSetIsInAir !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.needSetIsInAir);
        /* optional float speed = 12; */
        if (message.speed !== undefined)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.speed);
        /* optional float max_speed = 8; */
        if (message.maxSpeed !== undefined)
            writer.tag(8, runtime_1.WireType.Bit32).float(message.maxSpeed);
        /* optional bool check_animator_state_on_exit_only = 11; */
        if (message.checkAnimatorStateOnExitOnly !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.checkAnimatorStateOnExitOnly);
        /* optional string override_collider = 14; */
        if (message.overrideCollider !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.overrideCollider);
        /* optional com.midnights.game.Vector target_pos = 10; */
        if (message.targetPos)
            define_11.Vector.internalBinaryWrite(message.targetPos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtGrapplingHookMove
 */
exports.EvtGrapplingHookMove = new EvtGrapplingHookMove$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorStateChangedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAnimatorStateChangedNotify", [
            { no: 3, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 10, name: "evt_animator_state_changed_info", kind: "message", T: () => exports.EvtAnimatorStateChangedInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 3:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.EvtAnimatorStateChangedInfo evt_animator_state_changed_info */ 10:
                    message.evtAnimatorStateChangedInfo = exports.EvtAnimatorStateChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.evtAnimatorStateChangedInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForwardType forward_type = 3; */
        if (message.forwardType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.EvtAnimatorStateChangedInfo evt_animator_state_changed_info = 10; */
        if (message.evtAnimatorStateChangedInfo)
            exports.EvtAnimatorStateChangedInfo.internalBinaryWrite(message.evtAnimatorStateChangedInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAnimatorStateChangedNotify
 */
exports.EvtAnimatorStateChangedNotify = new EvtAnimatorStateChangedNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtRushMoveInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtRushMoveInfo", [
            { no: 11, name: "state_name_hash", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "rush_to_pos", kind: "message", T: () => define_11.Vector },
            { no: 8, name: "rush_attack_target_pos", kind: "message", T: () => define_11.Vector },
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "timeRange", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 6, name: "velocity", kind: "message", T: () => define_11.Vector },
            { no: 2, name: "pos", kind: "message", T: () => define_11.Vector },
            { no: 10, name: "face_angle_compact", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 state_name_hash */ 11:
                    message.stateNameHash = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector rush_to_pos */ 9:
                    message.rushToPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rushToPos);
                    break;
                case /* optional com.midnights.game.Vector rush_attack_target_pos */ 8:
                    message.rushAttackTargetPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rushAttackTargetPos);
                    break;
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* optional float timeRange */ 15:
                    message.timeRange = reader.float();
                    break;
                case /* optional com.midnights.game.Vector velocity */ 6:
                    message.velocity = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.velocity);
                    break;
                case /* optional com.midnights.game.Vector pos */ 2:
                    message.pos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional int32 face_angle_compact */ 10:
                    message.faceAngleCompact = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 state_name_hash = 11; */
        if (message.stateNameHash !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.stateNameHash);
        /* optional com.midnights.game.Vector rush_to_pos = 9; */
        if (message.rushToPos)
            define_11.Vector.internalBinaryWrite(message.rushToPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rush_attack_target_pos = 8; */
        if (message.rushAttackTargetPos)
            define_11.Vector.internalBinaryWrite(message.rushAttackTargetPos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional float timeRange = 15; */
        if (message.timeRange !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.timeRange);
        /* optional com.midnights.game.Vector velocity = 6; */
        if (message.velocity)
            define_11.Vector.internalBinaryWrite(message.velocity, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 2; */
        if (message.pos)
            define_11.Vector.internalBinaryWrite(message.pos, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 face_angle_compact = 10; */
        if (message.faceAngleCompact !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtRushMoveInfo
 */
exports.EvtRushMoveInfo = new EvtRushMoveInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtMotionInfoDuringSteerAttack$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtMotionInfoDuringSteerAttack", [
            { no: 4, name: "face_dir", kind: "message", T: () => define_11.Vector },
            { no: 3, name: "velocity", kind: "message", T: () => define_11.Vector },
            { no: 1, name: "pos", kind: "message", T: () => define_11.Vector },
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
                case /* optional com.midnights.game.Vector face_dir */ 4:
                    message.faceDir = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.faceDir);
                    break;
                case /* optional com.midnights.game.Vector velocity */ 3:
                    message.velocity = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.velocity);
                    break;
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* optional com.midnights.game.Vector face_dir = 4; */
        if (message.faceDir)
            define_11.Vector.internalBinaryWrite(message.faceDir, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector velocity = 3; */
        if (message.velocity)
            define_11.Vector.internalBinaryWrite(message.velocity, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            define_11.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.EvtMotionInfoDuringSteerAttack
 */
exports.EvtMotionInfoDuringSteerAttack = new EvtMotionInfoDuringSteerAttack$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtCombatSteerMotionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtCombatSteerMotionInfo", [
            { no: 12, name: "pos", kind: "message", T: () => define_11.Vector },
            { no: 10, name: "velocity", kind: "message", T: () => define_11.Vector },
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "face_dir", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 12:
                    message.pos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector velocity */ 10:
                    message.velocity = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.velocity);
                    break;
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector face_dir */ 1:
                    message.faceDir = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.faceDir);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector pos = 12; */
        if (message.pos)
            define_11.Vector.internalBinaryWrite(message.pos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector velocity = 10; */
        if (message.velocity)
            define_11.Vector.internalBinaryWrite(message.velocity, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.Vector face_dir = 1; */
        if (message.faceDir)
            define_11.Vector.internalBinaryWrite(message.faceDir, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtCombatSteerMotionInfo
 */
exports.EvtCombatSteerMotionInfo = new EvtCombatSteerMotionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtCombatForceSetPosInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtCombatForceSetPosInfo", [
            { no: 9, name: "ice_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "collider_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "target_pos", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 ice_id */ 9:
                    message.iceId = reader.uint32();
                    break;
                case /* optional uint32 collider_entity_id */ 10:
                    message.colliderEntityId = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector target_pos */ 1:
                    message.targetPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 ice_id = 9; */
        if (message.iceId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.iceId);
        /* optional uint32 collider_entity_id = 10; */
        if (message.colliderEntityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.colliderEntityId);
        /* optional uint32 entity_id = 6; */
        if (message.entityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.Vector target_pos = 1; */
        if (message.targetPos)
            define_11.Vector.internalBinaryWrite(message.targetPos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtCombatForceSetPosInfo
 */
exports.EvtCombatForceSetPosInfo = new EvtCombatForceSetPosInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtSyncEntityPositionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtSyncEntityPositionInfo", [
            { no: 10, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "normalized_time_compact", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "state_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "face_angle_compact", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "pos", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 normalized_time_compact */ 13:
                    message.normalizedTimeCompact = reader.uint32();
                    break;
                case /* optional uint32 state_hash */ 8:
                    message.stateHash = reader.uint32();
                    break;
                case /* optional int32 face_angle_compact */ 7:
                    message.faceAngleCompact = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 15:
                    message.pos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 normalized_time_compact = 13; */
        if (message.normalizedTimeCompact !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.normalizedTimeCompact);
        /* optional uint32 state_hash = 8; */
        if (message.stateHash !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.stateHash);
        /* optional int32 face_angle_compact = 7; */
        if (message.faceAngleCompact !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        /* optional com.midnights.game.Vector pos = 15; */
        if (message.pos)
            define_11.Vector.internalBinaryWrite(message.pos, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtSyncEntityPositionInfo
 */
exports.EvtSyncEntityPositionInfo = new EvtSyncEntityPositionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtRushMoveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtRushMoveNotify", [
            { no: 1, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 15, name: "evt_rush_move_info", kind: "message", T: () => exports.EvtRushMoveInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 1:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.EvtRushMoveInfo evt_rush_move_info */ 15:
                    message.evtRushMoveInfo = exports.EvtRushMoveInfo.internalBinaryRead(reader, reader.uint32(), options, message.evtRushMoveInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForwardType forward_type = 1; */
        if (message.forwardType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.EvtRushMoveInfo evt_rush_move_info = 15; */
        if (message.evtRushMoveInfo)
            exports.EvtRushMoveInfo.internalBinaryWrite(message.evtRushMoveInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtRushMoveNotify
 */
exports.EvtRushMoveNotify = new EvtRushMoveNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtBulletHitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtBulletHitNotify", [
            { no: 8, name: "single_bullet_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "hit_point", kind: "message", T: () => define_11.Vector },
            { no: 11, name: "hit_normal", kind: "message", T: () => define_11.Vector },
            { no: 9, name: "hit_box_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "hit_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "forward_peer", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 6, name: "hit_collider_type", kind: "enum", opt: true, T: () => ["com.midnights.game.HitColliderType", HitColliderType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 single_bullet_id */ 8:
                    message.singleBulletId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector hit_point */ 15:
                    message.hitPoint = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitPoint);
                    break;
                case /* optional com.midnights.game.Vector hit_normal */ 11:
                    message.hitNormal = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitNormal);
                    break;
                case /* optional int32 hit_box_index */ 9:
                    message.hitBoxIndex = reader.int32();
                    break;
                case /* optional uint32 hit_entity_id */ 3:
                    message.hitEntityId = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 5:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 forward_peer */ 7:
                    message.forwardPeer = reader.uint32();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 2:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.HitColliderType hit_collider_type */ 6:
                    message.hitColliderType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 single_bullet_id = 8; */
        if (message.singleBulletId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.singleBulletId);
        /* optional com.midnights.game.Vector hit_point = 15; */
        if (message.hitPoint)
            define_11.Vector.internalBinaryWrite(message.hitPoint, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector hit_normal = 11; */
        if (message.hitNormal)
            define_11.Vector.internalBinaryWrite(message.hitNormal, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 hit_box_index = 9; */
        if (message.hitBoxIndex !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.hitBoxIndex);
        /* optional uint32 hit_entity_id = 3; */
        if (message.hitEntityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.hitEntityId);
        /* optional uint32 entity_id = 5; */
        if (message.entityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 forward_peer = 7; */
        if (message.forwardPeer !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.forwardPeer);
        /* optional com.midnights.game.ForwardType forward_type = 2; */
        if (message.forwardType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.HitColliderType hit_collider_type = 6; */
        if (message.hitColliderType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.hitColliderType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtBulletHitNotify
 */
exports.EvtBulletHitNotify = new EvtBulletHitNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtBulletDeactiveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtBulletDeactiveNotify", [
            { no: 6, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "disappear_pos", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 6:
                    message.forwardType = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 9:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector disappear_pos */ 4:
                    message.disappearPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.disappearPos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForwardType forward_type = 6; */
        if (message.forwardType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional uint32 entity_id = 9; */
        if (message.entityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.Vector disappear_pos = 4; */
        if (message.disappearPos)
            define_11.Vector.internalBinaryWrite(message.disappearPos, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtBulletDeactiveNotify
 */
exports.EvtBulletDeactiveNotify = new EvtBulletDeactiveNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtEntityStartDieEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtEntityStartDieEndNotify", [
            { no: 15, name: "immediately", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "die_state_flag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool immediately */ 15:
                    message.immediately = reader.bool();
                    break;
                case /* optional uint32 die_state_flag */ 12:
                    message.dieStateFlag = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 11:
                    message.forwardType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool immediately = 15; */
        if (message.immediately !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.immediately);
        /* optional uint32 die_state_flag = 12; */
        if (message.dieStateFlag !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.dieStateFlag);
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.ForwardType forward_type = 11; */
        if (message.forwardType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.forwardType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtEntityStartDieEndNotify
 */
exports.EvtEntityStartDieEndNotify = new EvtEntityStartDieEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtBulletMoveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtBulletMoveNotify", [
            { no: 14, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 1, name: "cur_pos", kind: "message", T: () => define_11.Vector },
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
                case /* optional com.midnights.game.ForwardType forward_type */ 14:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector cur_pos */ 1:
                    message.curPos = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.curPos);
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
        /* optional com.midnights.game.ForwardType forward_type = 14; */
        if (message.forwardType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.Vector cur_pos = 1; */
        if (message.curPos)
            define_11.Vector.internalBinaryWrite(message.curPos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.EvtBulletMoveNotify
 */
exports.EvtBulletMoveNotify = new EvtBulletMoveNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarEnterFocusNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAvatarEnterFocusNotify", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "can_move", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "enter_holding_focus_shoot", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "disable_aim_layer", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "use_auto_focus", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "fast_focus", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "show_cross_hair", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "enter_normal_focus_shoot", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 7, name: "focus_forward", kind: "message", T: () => define_11.Vector },
            { no: 9, name: "disable_anim", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "use_focus_sticky", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "use_gyro", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional bool can_move */ 10:
                    message.canMove = reader.bool();
                    break;
                case /* optional bool enter_holding_focus_shoot */ 13:
                    message.enterHoldingFocusShoot = reader.bool();
                    break;
                case /* optional bool disable_aim_layer */ 6:
                    message.disableAimLayer = reader.bool();
                    break;
                case /* optional bool use_auto_focus */ 5:
                    message.useAutoFocus = reader.bool();
                    break;
                case /* optional bool fast_focus */ 3:
                    message.fastFocus = reader.bool();
                    break;
                case /* optional bool show_cross_hair */ 12:
                    message.showCrossHair = reader.bool();
                    break;
                case /* optional bool enter_normal_focus_shoot */ 14:
                    message.enterNormalFocusShoot = reader.bool();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 8:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector focus_forward */ 7:
                    message.focusForward = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.focusForward);
                    break;
                case /* optional bool disable_anim */ 9:
                    message.disableAnim = reader.bool();
                    break;
                case /* optional bool use_focus_sticky */ 15:
                    message.useFocusSticky = reader.bool();
                    break;
                case /* optional bool use_gyro */ 11:
                    message.useGyro = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional bool can_move = 10; */
        if (message.canMove !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.canMove);
        /* optional bool enter_holding_focus_shoot = 13; */
        if (message.enterHoldingFocusShoot !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.enterHoldingFocusShoot);
        /* optional bool disable_aim_layer = 6; */
        if (message.disableAimLayer !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.disableAimLayer);
        /* optional bool use_auto_focus = 5; */
        if (message.useAutoFocus !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.useAutoFocus);
        /* optional bool fast_focus = 3; */
        if (message.fastFocus !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.fastFocus);
        /* optional bool show_cross_hair = 12; */
        if (message.showCrossHair !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.showCrossHair);
        /* optional bool enter_normal_focus_shoot = 14; */
        if (message.enterNormalFocusShoot !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.enterNormalFocusShoot);
        /* optional com.midnights.game.ForwardType forward_type = 8; */
        if (message.forwardType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.Vector focus_forward = 7; */
        if (message.focusForward)
            define_11.Vector.internalBinaryWrite(message.focusForward, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool disable_anim = 9; */
        if (message.disableAnim !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.disableAnim);
        /* optional bool use_focus_sticky = 15; */
        if (message.useFocusSticky !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.useFocusSticky);
        /* optional bool use_gyro = 11; */
        if (message.useGyro !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.useGyro);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAvatarEnterFocusNotify
 */
exports.EvtAvatarEnterFocusNotify = new EvtAvatarEnterFocusNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarExitFocusNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAvatarExitFocusNotify", [
            { no: 12, name: "finish_forward", kind: "message", T: () => define_11.Vector },
            { no: 11, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 14, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector finish_forward */ 12:
                    message.finishForward = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.finishForward);
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 11:
                    message.forwardType = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 14:
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
        /* optional com.midnights.game.Vector finish_forward = 12; */
        if (message.finishForward)
            define_11.Vector.internalBinaryWrite(message.finishForward, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ForwardType forward_type = 11; */
        if (message.forwardType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional uint32 entity_id = 14; */
        if (message.entityId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAvatarExitFocusNotify
 */
exports.EvtAvatarExitFocusNotify = new EvtAvatarExitFocusNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarUpdateFocusNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAvatarUpdateFocusNotify", [
            { no: 7, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 11, name: "focus_forward", kind: "message", T: () => define_11.Vector },
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
                case /* optional com.midnights.game.ForwardType forward_type */ 7:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.Vector focus_forward */ 11:
                    message.focusForward = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.focusForward);
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
        /* optional com.midnights.game.ForwardType forward_type = 7; */
        if (message.forwardType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.Vector focus_forward = 11; */
        if (message.focusForward)
            define_11.Vector.internalBinaryWrite(message.focusForward, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.EvtAvatarUpdateFocusNotify
 */
exports.EvtAvatarUpdateFocusNotify = new EvtAvatarUpdateFocusNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthorityChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AuthorityChange", [
            { no: 5, name: "entity_authority_info", kind: "message", T: () => define_9.EntityAuthorityInfo },
            { no: 3, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.EntityAuthorityInfo entity_authority_info */ 5:
                    message.entityAuthorityInfo = define_9.EntityAuthorityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityAuthorityInfo);
                    break;
                case /* optional uint32 authority_peer_id */ 3:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 13:
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
        /* optional com.midnights.game.EntityAuthorityInfo entity_authority_info = 5; */
        if (message.entityAuthorityInfo)
            define_9.EntityAuthorityInfo.internalBinaryWrite(message.entityAuthorityInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 authority_peer_id = 3; */
        if (message.authorityPeerId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.authorityPeerId);
        /* optional uint32 entity_id = 13; */
        if (message.entityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AuthorityChange
 */
exports.AuthorityChange = new AuthorityChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityAuthorityChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityAuthorityChangeNotify", [
            { no: 15, name: "authority_change_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AuthorityChange }
        ]);
    }
    create(value) {
        const message = { authorityChangeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AuthorityChange authority_change_list */ 15:
                    message.authorityChangeList.push(exports.AuthorityChange.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AuthorityChange authority_change_list = 15; */
        for (let i = 0; i < message.authorityChangeList.length; i++)
            exports.AuthorityChange.internalBinaryWrite(message.authorityChangeList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityAuthorityChangeNotify
 */
exports.EntityAuthorityChangeNotify = new EntityAuthorityChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarBuffAddNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarBuffAddNotify", [
            { no: 10, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 10:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 buff_id */ 6:
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
        /* optional uint64 avatar_guid = 10; */
        if (message.avatarGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 buff_id = 6; */
        if (message.buffId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.buffId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarBuffAddNotify
 */
exports.AvatarBuffAddNotify = new AvatarBuffAddNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarBuffDelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarBuffDelNotify", [
            { no: 10, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 10:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 buff_id */ 12:
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
        /* optional uint64 avatar_guid = 10; */
        if (message.avatarGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 buff_id = 12; */
        if (message.buffId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.buffId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarBuffDelNotify
 */
exports.AvatarBuffDelNotify = new AvatarBuffDelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MonsterAlertChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MonsterAlertChangeNotify", [
            { no: 15, name: "avatar_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "monster_entity_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_alert", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterEntityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_entity_id */ 15:
                    message.avatarEntityId = reader.uint32();
                    break;
                case /* repeated uint32 monster_entity_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.monsterEntityList.push(reader.uint32());
                    else
                        message.monsterEntityList.push(reader.uint32());
                    break;
                case /* optional uint32 is_alert */ 13:
                    message.isAlert = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_entity_id = 15; */
        if (message.avatarEntityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.avatarEntityId);
        /* repeated uint32 monster_entity_list = 5; */
        if (message.monsterEntityList.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.monsterEntityList.length; i++)
                writer.uint32(message.monsterEntityList[i]);
            writer.join();
        }
        /* optional uint32 is_alert = 13; */
        if (message.isAlert !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.isAlert);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MonsterAlertChangeNotify
 */
exports.MonsterAlertChangeNotify = new MonsterAlertChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MonsterForceAlertNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MonsterForceAlertNotify", [
            { no: 13, name: "monster_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 monster_entity_id */ 13:
                    message.monsterEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 monster_entity_id = 13; */
        if (message.monsterEntityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.monsterEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MonsterForceAlertNotify
 */
exports.MonsterForceAlertNotify = new MonsterForceAlertNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEnterElementViewNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarEnterElementViewNotify", [
            { no: 3, name: "is_triggerd", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "avatar_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_triggerd */ 3:
                    message.isTriggerd = reader.bool();
                    break;
                case /* optional uint32 avatar_entity_id */ 12:
                    message.avatarEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_triggerd = 3; */
        if (message.isTriggerd !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isTriggerd);
        /* optional uint32 avatar_entity_id = 12; */
        if (message.avatarEntityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.avatarEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarEnterElementViewNotify
 */
exports.AvatarEnterElementViewNotify = new AvatarEnterElementViewNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TriggerCreateGadgetToEquipPartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TriggerCreateGadgetToEquipPartNotify", [
            { no: 1, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "equip_part", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
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
                case /* optional uint32 gadget_id */ 1:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* optional string equip_part */ 14:
                    message.equipPart = reader.string();
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
        /* optional uint32 gadget_id = 1; */
        if (message.gadgetId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 entity_id = 13; */
        if (message.entityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional string equip_part = 14; */
        if (message.equipPart !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.equipPart);
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
 * @generated MessageType for protobuf message com.midnights.game.TriggerCreateGadgetToEquipPartNotify
 */
exports.TriggerCreateGadgetToEquipPartNotify = new TriggerCreateGadgetToEquipPartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtEntityRenderersChangedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtEntityRenderersChangedNotify", [
            { no: 8, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 3, name: "is_server_cache", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "renderer_changed_info", kind: "message", T: () => define_8.EntityRendererChangedInfo },
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
                case /* optional com.midnights.game.ForwardType forward_type */ 8:
                    message.forwardType = reader.int32();
                    break;
                case /* optional bool is_server_cache */ 3:
                    message.isServerCache = reader.bool();
                    break;
                case /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info */ 5:
                    message.rendererChangedInfo = define_8.EntityRendererChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.rendererChangedInfo);
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
        /* optional com.midnights.game.ForwardType forward_type = 8; */
        if (message.forwardType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional bool is_server_cache = 3; */
        if (message.isServerCache !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isServerCache);
        /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info = 5; */
        if (message.rendererChangedInfo)
            define_8.EntityRendererChangedInfo.internalBinaryWrite(message.rendererChangedInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.EvtEntityRenderersChangedNotify
 */
exports.EvtEntityRenderersChangedNotify = new EvtEntityRenderersChangedNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AnimatorForceSetAirMoveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AnimatorForceSetAirMoveNotify", [
            { no: 14, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "in_air_move", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* optional bool in_air_move */ 13:
                    message.inAirMove = reader.bool();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 9:
                    message.forwardType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 14; */
        if (message.entityId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional bool in_air_move = 13; */
        if (message.inAirMove !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.inAirMove);
        /* optional com.midnights.game.ForwardType forward_type = 9; */
        if (message.forwardType !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.forwardType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AnimatorForceSetAirMoveNotify
 */
exports.AnimatorForceSetAirMoveNotify = new AnimatorForceSetAirMoveNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AiSkillCdInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AiSkillCdInfo", [
            { no: 11, name: "skill_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 6, name: "skill_group_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { skillCdMap: {}, skillGroupCdMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> skill_cd_map */ 11:
                    this.binaryReadMap11(message.skillCdMap, reader, options);
                    break;
                case /* map<uint32, uint32> skill_group_cd_map */ 6:
                    this.binaryReadMap6(message.skillGroupCdMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AiSkillCdInfo.skill_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AiSkillCdInfo.skill_group_cd_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> skill_cd_map = 11; */
        for (let k of Object.keys(message.skillCdMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.skillCdMap[k]).join();
        /* map<uint32, uint32> skill_group_cd_map = 6; */
        for (let k of Object.keys(message.skillGroupCdMap))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.skillGroupCdMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AiSkillCdInfo
 */
exports.AiSkillCdInfo = new AiSkillCdInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAiSyncSkillCdNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAiSyncSkillCdNotify", [
            { no: 7, name: "ai_cd_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.AiSkillCdInfo } }
        ]);
    }
    create(value) {
        const message = { aiCdMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.AiSkillCdInfo> ai_cd_map */ 7:
                    this.binaryReadMap7(message.aiCdMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.AiSkillCdInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.EvtAiSyncSkillCdNotify.ai_cd_map");
            }
        }
        map[key ?? 0] = val ?? exports.AiSkillCdInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.AiSkillCdInfo> ai_cd_map = 7; */
        for (let k of Object.keys(message.aiCdMap)) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.AiSkillCdInfo.internalBinaryWrite(message.aiCdMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAiSyncSkillCdNotify
 */
exports.EvtAiSyncSkillCdNotify = new EvtAiSyncSkillCdNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHitsCombineNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtBeingHitsCombineNotify", [
            { no: 11, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 7, name: "evt_being_hit_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.EvtBeingHitInfo }
        ]);
    }
    create(value) {
        const message = { evtBeingHitInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ForwardType forward_type */ 11:
                    message.forwardType = reader.int32();
                    break;
                case /* repeated com.midnights.game.EvtBeingHitInfo evt_being_hit_info_list */ 7:
                    message.evtBeingHitInfoList.push(exports.EvtBeingHitInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ForwardType forward_type = 11; */
        if (message.forwardType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.forwardType);
        /* repeated com.midnights.game.EvtBeingHitInfo evt_being_hit_info_list = 7; */
        for (let i = 0; i < message.evtBeingHitInfoList.length; i++)
            exports.EvtBeingHitInfo.internalBinaryWrite(message.evtBeingHitInfoList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtBeingHitsCombineNotify
 */
exports.EvtBeingHitsCombineNotify = new EvtBeingHitsCombineNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarSitDownNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAvatarSitDownNotify", [
            { no: 9, name: "position", kind: "message", T: () => define_11.Vector },
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "chair_id", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector position */ 9:
                    message.position = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint64 chair_id */ 6:
                    message.chairId = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector position = 9; */
        if (message.position)
            define_11.Vector.internalBinaryWrite(message.position, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint64 chair_id = 6; */
        if (message.chairId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.chairId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAvatarSitDownNotify
 */
exports.EvtAvatarSitDownNotify = new EvtAvatarSitDownNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarStandUpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAvatarStandUpNotify", [
            { no: 11, name: "chair_id", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "performID", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "direction", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 chair_id */ 11:
                    message.chairId = reader.uint64().toBigInt();
                    break;
                case /* optional int32 performID */ 6:
                    message.performID = reader.int32();
                    break;
                case /* optional int32 direction */ 1:
                    message.direction = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 9:
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
        /* optional uint64 chair_id = 11; */
        if (message.chairId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.chairId);
        /* optional int32 performID = 6; */
        if (message.performID !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.performID);
        /* optional int32 direction = 1; */
        if (message.direction !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.direction);
        /* optional uint32 entity_id = 9; */
        if (message.entityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAvatarStandUpNotify
 */
exports.EvtAvatarStandUpNotify = new EvtAvatarStandUpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateMassiveEntityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateMassiveEntityReq", [
            { no: 1, name: "massive_entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_7.ClientMassiveEntity }
        ]);
    }
    create(value) {
        const message = { massiveEntityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ClientMassiveEntity massive_entity_list */ 1:
                    message.massiveEntityList.push(define_7.ClientMassiveEntity.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ClientMassiveEntity massive_entity_list = 1; */
        for (let i = 0; i < message.massiveEntityList.length; i++)
            define_7.ClientMassiveEntity.internalBinaryWrite(message.massiveEntityList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CreateMassiveEntityReq
 */
exports.CreateMassiveEntityReq = new CreateMassiveEntityReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateMassiveEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateMassiveEntityRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.CreateMassiveEntityRsp
 */
exports.CreateMassiveEntityRsp = new CreateMassiveEntityRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateMassiveEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CreateMassiveEntityNotify", [
            { no: 15, name: "massive_entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_6.ServerMassiveEntity }
        ]);
    }
    create(value) {
        const message = { massiveEntityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ServerMassiveEntity massive_entity_list */ 15:
                    message.massiveEntityList.push(define_6.ServerMassiveEntity.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ServerMassiveEntity massive_entity_list = 15; */
        for (let i = 0; i < message.massiveEntityList.length; i++)
            define_6.ServerMassiveEntity.internalBinaryWrite(message.massiveEntityList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CreateMassiveEntityNotify
 */
exports.CreateMassiveEntityNotify = new CreateMassiveEntityNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DestroyMassiveEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DestroyMassiveEntityNotify", [
            { no: 7, name: "massive_entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_7.ClientMassiveEntity }
        ]);
    }
    create(value) {
        const message = { massiveEntityList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ClientMassiveEntity massive_entity_list */ 7:
                    message.massiveEntityList.push(define_7.ClientMassiveEntity.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ClientMassiveEntity massive_entity_list = 7; */
        for (let i = 0; i < message.massiveEntityList.length; i++)
            define_7.ClientMassiveEntity.internalBinaryWrite(message.massiveEntityList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DestroyMassiveEntityNotify
 */
exports.DestroyMassiveEntityNotify = new DestroyMassiveEntityNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassiveEntityStateChangedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveEntityStateChangedNotify", [
            { no: 4, name: "massive_entity_state_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_5.MassiveEntityState }
        ]);
    }
    create(value) {
        const message = { massiveEntityStateList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.MassiveEntityState massive_entity_state_list */ 4:
                    message.massiveEntityStateList.push(define_5.MassiveEntityState.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.MassiveEntityState massive_entity_state_list = 4; */
        for (let i = 0; i < message.massiveEntityStateList.length; i++)
            define_5.MassiveEntityState.internalBinaryWrite(message.massiveEntityStateList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveEntityStateChangedNotify
 */
exports.MassiveEntityStateChangedNotify = new MassiveEntityStateChangedNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TeamEntityInfo", [
            { no: 10, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "team_ability_info", kind: "message", T: () => define_4.AbilitySyncStateInfo },
            { no: 8, name: "team_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 authority_peer_id */ 10:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo team_ability_info */ 9:
                    message.teamAbilityInfo = define_4.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamAbilityInfo);
                    break;
                case /* optional uint32 team_entity_id */ 8:
                    message.teamEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 authority_peer_id = 10; */
        if (message.authorityPeerId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.authorityPeerId);
        /* optional com.midnights.game.AbilitySyncStateInfo team_ability_info = 9; */
        if (message.teamAbilityInfo)
            define_4.AbilitySyncStateInfo.internalBinaryWrite(message.teamAbilityInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 team_entity_id = 8; */
        if (message.teamEntityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.teamEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TeamEntityInfo
 */
exports.TeamEntityInfo = new TeamEntityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SyncTeamEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SyncTeamEntityNotify", [
            { no: 13, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "team_entity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.TeamEntityInfo }
        ]);
    }
    create(value) {
        const message = { teamEntityInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 13:
                    message.sceneId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.TeamEntityInfo team_entity_info_list */ 15:
                    message.teamEntityInfoList.push(exports.TeamEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 13; */
        if (message.sceneId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* repeated com.midnights.game.TeamEntityInfo team_entity_info_list = 15; */
        for (let i = 0; i < message.teamEntityInfoList.length; i++)
            exports.TeamEntityInfo.internalBinaryWrite(message.teamEntityInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SyncTeamEntityNotify
 */
exports.SyncTeamEntityNotify = new SyncTeamEntityNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DelTeamEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DelTeamEntityNotify", [
            { no: 15, name: "del_entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { delEntityIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 del_entity_id_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.delEntityIdList.push(reader.uint32());
                    else
                        message.delEntityIdList.push(reader.uint32());
                    break;
                case /* optional uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 del_entity_id_list = 15; */
        if (message.delEntityIdList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.delEntityIdList.length; i++)
                writer.uint32(message.delEntityIdList[i]);
            writer.join();
        }
        /* optional uint32 scene_id = 8; */
        if (message.sceneId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DelTeamEntityNotify
 */
exports.DelTeamEntityNotify = new DelTeamEntityNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtSyncSkillAnchorPosition$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtSyncSkillAnchorPosition", [
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "skill_anchor_position", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector skill_anchor_position */ 13:
                    message.skillAnchorPosition = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.skillAnchorPosition);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.Vector skill_anchor_position = 13; */
        if (message.skillAnchorPosition)
            define_11.Vector.internalBinaryWrite(message.skillAnchorPosition, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtSyncSkillAnchorPosition
 */
exports.EvtSyncSkillAnchorPosition = new EvtSyncSkillAnchorPosition$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CombatInvokeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CombatInvokeEntry", [
            { no: 12, name: "combat_data", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 10, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", ForwardType] },
            { no: 11, name: "argument_type", kind: "enum", opt: true, T: () => ["com.midnights.game.CombatTypeArgument", CombatTypeArgument] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bytes combat_data */ 12:
                    message.combatData = reader.bytes();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 10:
                    message.forwardType = reader.int32();
                    break;
                case /* optional com.midnights.game.CombatTypeArgument argument_type */ 11:
                    message.argumentType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bytes combat_data = 12; */
        if (message.combatData !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).bytes(message.combatData);
        /* optional com.midnights.game.ForwardType forward_type = 10; */
        if (message.forwardType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional com.midnights.game.CombatTypeArgument argument_type = 11; */
        if (message.argumentType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.argumentType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CombatInvokeEntry
 */
exports.CombatInvokeEntry = new CombatInvokeEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CombatInvocationsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CombatInvocationsNotify", [
            { no: 14, name: "invoke_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CombatInvokeEntry }
        ]);
    }
    create(value) {
        const message = { invokeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.CombatInvokeEntry invoke_list */ 14:
                    message.invokeList.push(exports.CombatInvokeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.CombatInvokeEntry invoke_list = 14; */
        for (let i = 0; i < message.invokeList.length; i++)
            exports.CombatInvokeEntry.internalBinaryWrite(message.invokeList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CombatInvocationsNotify
 */
exports.CombatInvocationsNotify = new CombatInvocationsNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerBuffChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerBuffChangeNotify", [
            { no: 7, name: "server_buff_change_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ServerBuffChangeNotify.ServerBuffChangeType", ServerBuffChangeNotify_ServerBuffChangeType] },
            { no: 10, name: "is_creature_buff", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_3.ServerBuff }
        ]);
    }
    create(value) {
        const message = { entityIdList: [], avatarGuidList: [], serverBuffList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ServerBuffChangeNotify.ServerBuffChangeType server_buff_change_type */ 7:
                    message.serverBuffChangeType = reader.int32();
                    break;
                case /* optional bool is_creature_buff */ 10:
                    message.isCreatureBuff = reader.bool();
                    break;
                case /* repeated uint32 entity_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIdList.push(reader.uint32());
                    else
                        message.entityIdList.push(reader.uint32());
                    break;
                case /* repeated uint64 avatar_guid_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated com.midnights.game.ServerBuff server_buff_list */ 11:
                    message.serverBuffList.push(define_3.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ServerBuffChangeNotify.ServerBuffChangeType server_buff_change_type = 7; */
        if (message.serverBuffChangeType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.serverBuffChangeType);
        /* optional bool is_creature_buff = 10; */
        if (message.isCreatureBuff !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isCreatureBuff);
        /* repeated uint32 entity_id_list = 1; */
        if (message.entityIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityIdList.length; i++)
                writer.uint32(message.entityIdList[i]);
            writer.join();
        }
        /* repeated uint64 avatar_guid_list = 12; */
        if (message.avatarGuidList.length) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarGuidList.length; i++)
                writer.uint64(message.avatarGuidList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.ServerBuff server_buff_list = 11; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            define_3.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerBuffChangeNotify
 */
exports.ServerBuffChangeNotify = new ServerBuffChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AiThreatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AiThreatInfo", [
            { no: 11, name: "ai_threat_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { aiThreatMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> ai_threat_map */ 11:
                    this.binaryReadMap11(message.aiThreatMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AiThreatInfo.ai_threat_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> ai_threat_map = 11; */
        for (let k of Object.keys(message.aiThreatMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.aiThreatMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AiThreatInfo
 */
exports.AiThreatInfo = new AiThreatInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAiSyncCombatThreatInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAiSyncCombatThreatInfoNotify", [
            { no: 8, name: "combat_threat_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.AiThreatInfo } }
        ]);
    }
    create(value) {
        const message = { combatThreatInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.AiThreatInfo> combat_threat_info_map */ 8:
                    this.binaryReadMap8(message.combatThreatInfoMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.AiThreatInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.EvtAiSyncCombatThreatInfoNotify.combat_threat_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.AiThreatInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.AiThreatInfo> combat_threat_info_map = 8; */
        for (let k of Object.keys(message.combatThreatInfoMap)) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.AiThreatInfo.internalBinaryWrite(message.combatThreatInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAiSyncCombatThreatInfoNotify
 */
exports.EvtAiSyncCombatThreatInfoNotify = new EvtAiSyncCombatThreatInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MassiveEntityElementOpBatchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveEntityElementOpBatchNotify", [
            { no: 6, name: "entity_type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "op_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "user_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "attacker_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "source_element_type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "reaction_source_type", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "attack_element_durability", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "shape_sphere", kind: "message", oneof: "checkShape", T: () => define_2.ShapeSphere },
            { no: 2, name: "shape_box", kind: "message", oneof: "checkShape", T: () => define_1.ShapeBox }
        ]);
    }
    create(value) {
        const message = { checkShape: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 entity_type */ 6:
                    message.entityType = reader.int32();
                    break;
                case /* optional uint32 op_idx */ 9:
                    message.opIdx = reader.uint32();
                    break;
                case /* optional uint32 user_id */ 11:
                    message.userId = reader.uint32();
                    break;
                case /* optional uint32 attacker_id */ 3:
                    message.attackerId = reader.uint32();
                    break;
                case /* optional int32 source_element_type */ 12:
                    message.sourceElementType = reader.int32();
                    break;
                case /* optional int32 reaction_source_type */ 4:
                    message.reactionSourceType = reader.int32();
                    break;
                case /* optional float attack_element_durability */ 7:
                    message.attackElementDurability = reader.float();
                    break;
                case /* com.midnights.game.ShapeSphere shape_sphere */ 10:
                    message.checkShape = {
                        oneofKind: "shapeSphere",
                        shapeSphere: define_2.ShapeSphere.internalBinaryRead(reader, reader.uint32(), options, message.checkShape.shapeSphere)
                    };
                    break;
                case /* com.midnights.game.ShapeBox shape_box */ 2:
                    message.checkShape = {
                        oneofKind: "shapeBox",
                        shapeBox: define_1.ShapeBox.internalBinaryRead(reader, reader.uint32(), options, message.checkShape.shapeBox)
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
        /* optional int32 entity_type = 6; */
        if (message.entityType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.entityType);
        /* optional uint32 op_idx = 9; */
        if (message.opIdx !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.opIdx);
        /* optional uint32 user_id = 11; */
        if (message.userId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.userId);
        /* optional uint32 attacker_id = 3; */
        if (message.attackerId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.attackerId);
        /* optional int32 source_element_type = 12; */
        if (message.sourceElementType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.sourceElementType);
        /* optional int32 reaction_source_type = 4; */
        if (message.reactionSourceType !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.reactionSourceType);
        /* optional float attack_element_durability = 7; */
        if (message.attackElementDurability !== undefined)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.attackElementDurability);
        /* com.midnights.game.ShapeSphere shape_sphere = 10; */
        if (message.checkShape.oneofKind === "shapeSphere")
            define_2.ShapeSphere.internalBinaryWrite(message.checkShape.shapeSphere, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.ShapeBox shape_box = 2; */
        if (message.checkShape.oneofKind === "shapeBox")
            define_1.ShapeBox.internalBinaryWrite(message.checkShape.shapeBox, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveEntityElementOpBatchNotify
 */
exports.MassiveEntityElementOpBatchNotify = new MassiveEntityElementOpBatchNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AiSyncInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AiSyncInfo", [
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_self_killing", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "has_path_to_target", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional bool is_self_killing */ 8:
                    message.isSelfKilling = reader.bool();
                    break;
                case /* optional bool has_path_to_target */ 4:
                    message.hasPathToTarget = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional bool is_self_killing = 8; */
        if (message.isSelfKilling !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isSelfKilling);
        /* optional bool has_path_to_target = 4; */
        if (message.hasPathToTarget !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.hasPathToTarget);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AiSyncInfo
 */
exports.AiSyncInfo = new AiSyncInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityAiSyncNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityAiSyncNotify", [
            { no: 15, name: "local_avatar_alerted_monster_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AiSyncInfo }
        ]);
    }
    create(value) {
        const message = { localAvatarAlertedMonsterList: [], infoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 local_avatar_alerted_monster_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.localAvatarAlertedMonsterList.push(reader.uint32());
                    else
                        message.localAvatarAlertedMonsterList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.AiSyncInfo info_list */ 1:
                    message.infoList.push(exports.AiSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 local_avatar_alerted_monster_list = 15; */
        if (message.localAvatarAlertedMonsterList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.localAvatarAlertedMonsterList.length; i++)
                writer.uint32(message.localAvatarAlertedMonsterList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.AiSyncInfo info_list = 1; */
        for (let i = 0; i < message.infoList.length; i++)
            exports.AiSyncInfo.internalBinaryWrite(message.infoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityAiSyncNotify
 */
exports.EntityAiSyncNotify = new EntityAiSyncNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LuaSetOptionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LuaSetOptionNotify", [
            { no: 8, name: "lua_set_param", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "option_type", kind: "enum", opt: true, T: () => ["com.midnights.game.LuaSetOptionNotify.LuaOptionType", LuaSetOptionNotify_LuaOptionType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string lua_set_param */ 8:
                    message.luaSetParam = reader.string();
                    break;
                case /* optional com.midnights.game.LuaSetOptionNotify.LuaOptionType option_type */ 10:
                    message.optionType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string lua_set_param = 8; */
        if (message.luaSetParam !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.luaSetParam);
        /* optional com.midnights.game.LuaSetOptionNotify.LuaOptionType option_type = 10; */
        if (message.optionType !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.optionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LuaSetOptionNotify
 */
exports.LuaSetOptionNotify = new LuaSetOptionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtDestroyServerGadgetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtDestroyServerGadgetNotify", [
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 7:
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
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtDestroyServerGadgetNotify
 */
exports.EvtDestroyServerGadgetNotify = new EvtDestroyServerGadgetNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityAiKillSelfNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityAiKillSelfNotify", [
            { no: 12, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
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
 * @generated MessageType for protobuf message com.midnights.game.EntityAiKillSelfNotify
 */
exports.EntityAiKillSelfNotify = new EntityAiKillSelfNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarLockChairReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAvatarLockChairReq", [
            { no: 5, name: "chair_id", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "position", kind: "message", T: () => define_11.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 chair_id */ 5:
                    message.chairId = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.Vector position */ 8:
                    message.position = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 chair_id = 5; */
        if (message.chairId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.chairId);
        /* optional com.midnights.game.Vector position = 8; */
        if (message.position)
            define_11.Vector.internalBinaryWrite(message.position, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtAvatarLockChairReq
 */
exports.EvtAvatarLockChairReq = new EvtAvatarLockChairReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarLockChairRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtAvatarLockChairRsp", [
            { no: 14, name: "chair_id", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "position", kind: "message", T: () => define_11.Vector },
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
                case /* optional uint64 chair_id */ 14:
                    message.chairId = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector position */ 4:
                    message.position = define_11.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
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
        /* optional uint64 chair_id = 14; */
        if (message.chairId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.chairId);
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.Vector position = 4; */
        if (message.position)
            define_11.Vector.internalBinaryWrite(message.position, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.EvtAvatarLockChairRsp
 */
exports.EvtAvatarLockChairRsp = new EvtAvatarLockChairRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReportFightAntiCheatNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReportFightAntiCheatNotify", [
            { no: 8, name: "cheat_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cheat_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cheat_count */ 8:
                    message.cheatCount = reader.uint32();
                    break;
                case /* optional uint32 cheat_type */ 12:
                    message.cheatType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cheat_count = 8; */
        if (message.cheatCount !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cheatCount);
        /* optional uint32 cheat_type = 12; */
        if (message.cheatType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cheatType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReportFightAntiCheatNotify
 */
exports.ReportFightAntiCheatNotify = new ReportFightAntiCheatNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHealedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtBeingHealedNotify", [
            { no: 1, name: "target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "real_heal_amount", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "source_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "heal_amount", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_id */ 1:
                    message.targetId = reader.uint32();
                    break;
                case /* optional float real_heal_amount */ 5:
                    message.realHealAmount = reader.float();
                    break;
                case /* optional uint32 source_id */ 13:
                    message.sourceId = reader.uint32();
                    break;
                case /* optional float heal_amount */ 4:
                    message.healAmount = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_id = 1; */
        if (message.targetId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.targetId);
        /* optional float real_heal_amount = 5; */
        if (message.realHealAmount !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.realHealAmount);
        /* optional uint32 source_id = 13; */
        if (message.sourceId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.sourceId);
        /* optional float heal_amount = 4; */
        if (message.healAmount !== undefined)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.healAmount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EvtBeingHealedNotify
 */
exports.EvtBeingHealedNotify = new EvtBeingHealedNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvtLocalGadgetOwnerLeaveSceneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EvtLocalGadgetOwnerLeaveSceneNotify", [
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
 * @generated MessageType for protobuf message com.midnights.game.EvtLocalGadgetOwnerLeaveSceneNotify
 */
exports.EvtLocalGadgetOwnerLeaveSceneNotify = new EvtLocalGadgetOwnerLeaveSceneNotify$Type();
