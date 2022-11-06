"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityActionGenerateElemBall = exports.AbilityApplyLevelModifier = exports.AbilityActionFireAfterImgae = exports.AbilityActionDestroyTile = exports.AbilityActionCreateTile = exports.AbilityActionServerMonsterLog = exports.AbilityActionSetRandomOverrideMapValue = exports.AbilityActionCreateGadget = exports.AbilityActionBlink = exports.AbilityActionSummon = exports.AbilityBornType = exports.AbilityActionSetCrashDamage = exports.AbilityActionTriggerAbility = exports.AbilityMetaUpdateBaseReactionDamage = exports.AbilityMetaSetPoseParameter = exports.AbilityMetaLoseHp = exports.AbilityMetaTriggerElementReaction = exports.AbilityMetaElementReactionVisual = exports.AbilityMetaModifierDurabilityChange = exports.AbilityMetaSetModifierApplyEntityId = exports.AbilityMetaSetAbilityTrigger = exports.AbilityMetaSetKilledState = exports.AbilityMetaAddOrGetAbilityAndTrigger = exports.AbilityMetaSpecialFloatArgument = exports.AbilityMetaDurabilityIsZero = exports.AbilityMetaModifierChange = exports.ModifierProperty = exports.AbilityMetaAddAbility = exports.AbilityMetaReInitOverrideMap = exports.AbilityInvocationsNotify = exports.AbilityInvocationFixedNotify = exports.AbilityInvokeEntry = exports.AbilityInvokeEntryHead = exports.ModifierAction = exports.AbilityInvokeArgument = exports.ClientRemoveCombatEndModifierNotify_CmdId = exports.ServerCombatEndNotify_CmdId = exports.ClientAIStateNotify_CmdId = exports.ServerGlobalValueChangeNotify_CmdId = exports.ServerUpdateGlobalValueNotify_CmdId = exports.ServerUpdateGlobalValueNotify_UpdateType = exports.ClientAbilityChangeNotify_CmdId = exports.AbilityChangeNotify_CmdId = exports.WindSeedClientNotify_CmdId = exports.ClientAbilitiesInitFinishCombineNotify_CmdId = exports.AbilityInvocationFailNotify_CmdId = exports.ClientAbilityInitFinishNotify_CmdId = exports.ClientAbilityInitBeginNotify_CmdId = exports.AbilityInvocationsNotify_CmdId = exports.AbilityInvocationFixedNotify_CmdId = void 0;
exports.ClientRemoveCombatEndModifierNotify = exports.ServerCombatEndNotify = exports.ClientAIStateNotify = exports.ServerGlobalValueChangeNotify = exports.ServerUpdateGlobalValueNotify = exports.ClientAbilityChangeNotify = exports.AbilityChangeNotify = exports.WindSeedClientNotify_AreaNotify = exports.WindSeedClientNotify_AddWindBulletNotify = exports.WindSeedClientNotify_RefreshNotify = exports.WindSeedClientNotify = exports.ClientAbilitiesInitFinishCombineNotify = exports.EntityAbilityInvokeEntry = exports.AbilityInvocationFailNotify = exports.ClientAbilityInitFinishNotify = exports.ClientAbilityInitBeginNotify = exports.AttackResultCreateCount = exports.AbilityMixinEraseBrickActivity = exports.AbilityMixinShootFromCamera = exports.AbilityMixinAvatarCombat = exports.AbilityMixinUIInteract = exports.AbilityMixinUGCTimeControl = exports.AbilityMixinFireworksLauncher = exports.AbilityMixinDoActionBySelfModifierElementDurabilityRatio = exports.AbilityMixinWidgetMpSupport = exports.AbilityMixinScenePropSync = exports.AbilityMixinFieldEntityCountChange = exports.AbilityMixinDoActionByElementReaction = exports.AbilityMixinWindSeedSpawner_CatchSeed = exports.AbilityMixinWindSeedSpawner_RefreshSeed = exports.AbilityMixinWindSeedSpawner_AddSignal = exports.AbilityMixinWindSeedSpawner = exports.AbilityMixinShieldBar = exports.AbilityMixinGlobalShield = exports.AbilityMixinElementShield = exports.AbilityMixinEliteShield = exports.AbilityMixinCostStamina = exports.AbilityMixinWindZone = exports.AbilityMixinAvatarSteerByCamera = exports.AbilityMixinEmpty = exports.AbilityActionSetBulletTrackTarget = exports.AbilityActionHitEffect = exports.AbilityActionDeductStamina = void 0;
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
const cmd_fight_1 = require("./cmd_fight");
/**
 * @generated from protobuf enum com.midnights.game.AbilityInvocationFixedNotify.CmdId
 */
var AbilityInvocationFixedNotify_CmdId;
(function (AbilityInvocationFixedNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityInvocationFixedNotify_CmdId[AbilityInvocationFixedNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1172;
     */
    AbilityInvocationFixedNotify_CmdId[AbilityInvocationFixedNotify_CmdId["CMD_ID"] = 1172] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityInvocationFixedNotify_CmdId[AbilityInvocationFixedNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AbilityInvocationFixedNotify_CmdId[AbilityInvocationFixedNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AbilityInvocationFixedNotify_CmdId[AbilityInvocationFixedNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AbilityInvocationFixedNotify_CmdId = exports.AbilityInvocationFixedNotify_CmdId || (exports.AbilityInvocationFixedNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AbilityInvocationsNotify.CmdId
 */
var AbilityInvocationsNotify_CmdId;
(function (AbilityInvocationsNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityInvocationsNotify_CmdId[AbilityInvocationsNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1198;
     */
    AbilityInvocationsNotify_CmdId[AbilityInvocationsNotify_CmdId["CMD_ID"] = 1198] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityInvocationsNotify_CmdId[AbilityInvocationsNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AbilityInvocationsNotify_CmdId[AbilityInvocationsNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AbilityInvocationsNotify_CmdId[AbilityInvocationsNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AbilityInvocationsNotify_CmdId = exports.AbilityInvocationsNotify_CmdId || (exports.AbilityInvocationsNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientAbilityInitBeginNotify.CmdId
 */
var ClientAbilityInitBeginNotify_CmdId;
(function (ClientAbilityInitBeginNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilityInitBeginNotify_CmdId[ClientAbilityInitBeginNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1112;
     */
    ClientAbilityInitBeginNotify_CmdId[ClientAbilityInitBeginNotify_CmdId["CMD_ID"] = 1112] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilityInitBeginNotify_CmdId[ClientAbilityInitBeginNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilityInitBeginNotify_CmdId[ClientAbilityInitBeginNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilityInitBeginNotify_CmdId[ClientAbilityInitBeginNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientAbilityInitBeginNotify_CmdId = exports.ClientAbilityInitBeginNotify_CmdId || (exports.ClientAbilityInitBeginNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientAbilityInitFinishNotify.CmdId
 */
var ClientAbilityInitFinishNotify_CmdId;
(function (ClientAbilityInitFinishNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilityInitFinishNotify_CmdId[ClientAbilityInitFinishNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1135;
     */
    ClientAbilityInitFinishNotify_CmdId[ClientAbilityInitFinishNotify_CmdId["CMD_ID"] = 1135] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilityInitFinishNotify_CmdId[ClientAbilityInitFinishNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilityInitFinishNotify_CmdId[ClientAbilityInitFinishNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilityInitFinishNotify_CmdId[ClientAbilityInitFinishNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientAbilityInitFinishNotify_CmdId = exports.ClientAbilityInitFinishNotify_CmdId || (exports.ClientAbilityInitFinishNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AbilityInvocationFailNotify.CmdId
 */
var AbilityInvocationFailNotify_CmdId;
(function (AbilityInvocationFailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityInvocationFailNotify_CmdId[AbilityInvocationFailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1107;
     */
    AbilityInvocationFailNotify_CmdId[AbilityInvocationFailNotify_CmdId["CMD_ID"] = 1107] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityInvocationFailNotify_CmdId[AbilityInvocationFailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AbilityInvocationFailNotify_CmdId[AbilityInvocationFailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AbilityInvocationFailNotify_CmdId = exports.AbilityInvocationFailNotify_CmdId || (exports.AbilityInvocationFailNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientAbilitiesInitFinishCombineNotify.CmdId
 */
var ClientAbilitiesInitFinishCombineNotify_CmdId;
(function (ClientAbilitiesInitFinishCombineNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilitiesInitFinishCombineNotify_CmdId[ClientAbilitiesInitFinishCombineNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1103;
     */
    ClientAbilitiesInitFinishCombineNotify_CmdId[ClientAbilitiesInitFinishCombineNotify_CmdId["CMD_ID"] = 1103] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilitiesInitFinishCombineNotify_CmdId[ClientAbilitiesInitFinishCombineNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilitiesInitFinishCombineNotify_CmdId[ClientAbilitiesInitFinishCombineNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilitiesInitFinishCombineNotify_CmdId[ClientAbilitiesInitFinishCombineNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientAbilitiesInitFinishCombineNotify_CmdId = exports.ClientAbilitiesInitFinishCombineNotify_CmdId || (exports.ClientAbilitiesInitFinishCombineNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WindSeedClientNotify.CmdId
 */
var WindSeedClientNotify_CmdId;
(function (WindSeedClientNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WindSeedClientNotify_CmdId[WindSeedClientNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1199;
     */
    WindSeedClientNotify_CmdId[WindSeedClientNotify_CmdId["CMD_ID"] = 1199] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WindSeedClientNotify_CmdId[WindSeedClientNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WindSeedClientNotify_CmdId[WindSeedClientNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WindSeedClientNotify_CmdId = exports.WindSeedClientNotify_CmdId || (exports.WindSeedClientNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AbilityChangeNotify.CmdId
 */
var AbilityChangeNotify_CmdId;
(function (AbilityChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityChangeNotify_CmdId[AbilityChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1131;
     */
    AbilityChangeNotify_CmdId[AbilityChangeNotify_CmdId["CMD_ID"] = 1131] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AbilityChangeNotify_CmdId[AbilityChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AbilityChangeNotify_CmdId[AbilityChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AbilityChangeNotify_CmdId = exports.AbilityChangeNotify_CmdId || (exports.AbilityChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientAbilityChangeNotify.CmdId
 */
var ClientAbilityChangeNotify_CmdId;
(function (ClientAbilityChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilityChangeNotify_CmdId[ClientAbilityChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1175;
     */
    ClientAbilityChangeNotify_CmdId[ClientAbilityChangeNotify_CmdId["CMD_ID"] = 1175] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAbilityChangeNotify_CmdId[ClientAbilityChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilityChangeNotify_CmdId[ClientAbilityChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAbilityChangeNotify_CmdId[ClientAbilityChangeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientAbilityChangeNotify_CmdId = exports.ClientAbilityChangeNotify_CmdId || (exports.ClientAbilityChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerUpdateGlobalValueNotify.UpdateType
 */
var ServerUpdateGlobalValueNotify_UpdateType;
(function (ServerUpdateGlobalValueNotify_UpdateType) {
    /**
     * @generated from protobuf enum value: INVALUE = 0;
     */
    ServerUpdateGlobalValueNotify_UpdateType[ServerUpdateGlobalValueNotify_UpdateType["INVALUE"] = 0] = "INVALUE";
    /**
     * @generated from protobuf enum value: ADD = 1;
     */
    ServerUpdateGlobalValueNotify_UpdateType[ServerUpdateGlobalValueNotify_UpdateType["ADD"] = 1] = "ADD";
    /**
     * @generated from protobuf enum value: SET = 2;
     */
    ServerUpdateGlobalValueNotify_UpdateType[ServerUpdateGlobalValueNotify_UpdateType["SET"] = 2] = "SET";
})(ServerUpdateGlobalValueNotify_UpdateType = exports.ServerUpdateGlobalValueNotify_UpdateType || (exports.ServerUpdateGlobalValueNotify_UpdateType = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerUpdateGlobalValueNotify.CmdId
 */
var ServerUpdateGlobalValueNotify_CmdId;
(function (ServerUpdateGlobalValueNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerUpdateGlobalValueNotify_CmdId[ServerUpdateGlobalValueNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1148;
     */
    ServerUpdateGlobalValueNotify_CmdId[ServerUpdateGlobalValueNotify_CmdId["CMD_ID"] = 1148] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerUpdateGlobalValueNotify_CmdId[ServerUpdateGlobalValueNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerUpdateGlobalValueNotify_CmdId[ServerUpdateGlobalValueNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerUpdateGlobalValueNotify_CmdId = exports.ServerUpdateGlobalValueNotify_CmdId || (exports.ServerUpdateGlobalValueNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerGlobalValueChangeNotify.CmdId
 */
var ServerGlobalValueChangeNotify_CmdId;
(function (ServerGlobalValueChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerGlobalValueChangeNotify_CmdId[ServerGlobalValueChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1197;
     */
    ServerGlobalValueChangeNotify_CmdId[ServerGlobalValueChangeNotify_CmdId["CMD_ID"] = 1197] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerGlobalValueChangeNotify_CmdId[ServerGlobalValueChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerGlobalValueChangeNotify_CmdId[ServerGlobalValueChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerGlobalValueChangeNotify_CmdId = exports.ServerGlobalValueChangeNotify_CmdId || (exports.ServerGlobalValueChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientAIStateNotify.CmdId
 */
var ClientAIStateNotify_CmdId;
(function (ClientAIStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAIStateNotify_CmdId[ClientAIStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1181;
     */
    ClientAIStateNotify_CmdId[ClientAIStateNotify_CmdId["CMD_ID"] = 1181] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientAIStateNotify_CmdId[ClientAIStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAIStateNotify_CmdId[ClientAIStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientAIStateNotify_CmdId[ClientAIStateNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientAIStateNotify_CmdId = exports.ClientAIStateNotify_CmdId || (exports.ClientAIStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerCombatEndNotify.CmdId
 */
var ServerCombatEndNotify_CmdId;
(function (ServerCombatEndNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerCombatEndNotify_CmdId[ServerCombatEndNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1105;
     */
    ServerCombatEndNotify_CmdId[ServerCombatEndNotify_CmdId["CMD_ID"] = 1105] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerCombatEndNotify_CmdId[ServerCombatEndNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerCombatEndNotify_CmdId[ServerCombatEndNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerCombatEndNotify_CmdId = exports.ServerCombatEndNotify_CmdId || (exports.ServerCombatEndNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientRemoveCombatEndModifierNotify.CmdId
 */
var ClientRemoveCombatEndModifierNotify_CmdId;
(function (ClientRemoveCombatEndModifierNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientRemoveCombatEndModifierNotify_CmdId[ClientRemoveCombatEndModifierNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1182;
     */
    ClientRemoveCombatEndModifierNotify_CmdId[ClientRemoveCombatEndModifierNotify_CmdId["CMD_ID"] = 1182] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientRemoveCombatEndModifierNotify_CmdId[ClientRemoveCombatEndModifierNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientRemoveCombatEndModifierNotify_CmdId[ClientRemoveCombatEndModifierNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientRemoveCombatEndModifierNotify_CmdId[ClientRemoveCombatEndModifierNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ClientRemoveCombatEndModifierNotify_CmdId = exports.ClientRemoveCombatEndModifierNotify_CmdId || (exports.ClientRemoveCombatEndModifierNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AbilityInvokeArgument
 */
var AbilityInvokeArgument;
(function (AbilityInvokeArgument) {
    /**
     * @generated from protobuf enum value: ABILITY_NONE = 0;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_NONE"] = 0] = "ABILITY_NONE";
    /**
     * @generated from protobuf enum value: ABILITY_META_MODIFIER_CHANGE = 1;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_MODIFIER_CHANGE"] = 1] = "ABILITY_META_MODIFIER_CHANGE";
    /**
     * @generated from protobuf enum value: ABILITY_META_COMMAND_MODIFIER_CHANGE_REQUEST = 2;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_COMMAND_MODIFIER_CHANGE_REQUEST"] = 2] = "ABILITY_META_COMMAND_MODIFIER_CHANGE_REQUEST";
    /**
     * @generated from protobuf enum value: ABILITY_META_SPECIAL_FLOAT_ARGUMENT = 3;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_SPECIAL_FLOAT_ARGUMENT"] = 3] = "ABILITY_META_SPECIAL_FLOAT_ARGUMENT";
    /**
     * @generated from protobuf enum value: ABILITY_META_OVERRIDE_PARAM = 4;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_OVERRIDE_PARAM"] = 4] = "ABILITY_META_OVERRIDE_PARAM";
    /**
     * @generated from protobuf enum value: ABILITY_META_CLEAR_OVERRIDE_PARAM = 5;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_CLEAR_OVERRIDE_PARAM"] = 5] = "ABILITY_META_CLEAR_OVERRIDE_PARAM";
    /**
     * @generated from protobuf enum value: ABILITY_META_REINIT_OVERRIDEMAP = 6;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_REINIT_OVERRIDEMAP"] = 6] = "ABILITY_META_REINIT_OVERRIDEMAP";
    /**
     * @generated from protobuf enum value: ABILITY_META_GLOBAL_FLOAT_VALUE = 7;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_GLOBAL_FLOAT_VALUE"] = 7] = "ABILITY_META_GLOBAL_FLOAT_VALUE";
    /**
     * @generated from protobuf enum value: ABILITY_META_CLEAR_GLOBAL_FLOAT_VALUE = 8;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_CLEAR_GLOBAL_FLOAT_VALUE"] = 8] = "ABILITY_META_CLEAR_GLOBAL_FLOAT_VALUE";
    /**
     * @generated from protobuf enum value: ABILITY_META_ABILITY_ELEMENT_STRENGTH = 9;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_ABILITY_ELEMENT_STRENGTH"] = 9] = "ABILITY_META_ABILITY_ELEMENT_STRENGTH";
    /**
     * @generated from protobuf enum value: ABILITY_META_ADD_OR_GET_ABILITY_AND_TRIGGER = 10;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_ADD_OR_GET_ABILITY_AND_TRIGGER"] = 10] = "ABILITY_META_ADD_OR_GET_ABILITY_AND_TRIGGER";
    /**
     * @generated from protobuf enum value: ABILITY_META_SET_KILLED_SETATE = 11;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_SET_KILLED_SETATE"] = 11] = "ABILITY_META_SET_KILLED_SETATE";
    /**
     * @generated from protobuf enum value: ABILITY_META_SET_ABILITY_TRIGGER = 12;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_SET_ABILITY_TRIGGER"] = 12] = "ABILITY_META_SET_ABILITY_TRIGGER";
    /**
     * @generated from protobuf enum value: ABILITY_META_ADD_NEW_ABILITY = 13;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_ADD_NEW_ABILITY"] = 13] = "ABILITY_META_ADD_NEW_ABILITY";
    /**
     * @generated from protobuf enum value: ABILITY_META_REMOVE_ABILITY = 14;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_REMOVE_ABILITY"] = 14] = "ABILITY_META_REMOVE_ABILITY";
    /**
     * @generated from protobuf enum value: ABILITY_META_SET_MODIFIER_APPLY_ENTITY = 15;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_SET_MODIFIER_APPLY_ENTITY"] = 15] = "ABILITY_META_SET_MODIFIER_APPLY_ENTITY";
    /**
     * @generated from protobuf enum value: ABILITY_META_MODIFIER_DURABILITY_CHANGE = 16;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_MODIFIER_DURABILITY_CHANGE"] = 16] = "ABILITY_META_MODIFIER_DURABILITY_CHANGE";
    /**
     * @generated from protobuf enum value: ABILITY_META_ELEMENT_REACTION_VISUAL = 17;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_ELEMENT_REACTION_VISUAL"] = 17] = "ABILITY_META_ELEMENT_REACTION_VISUAL";
    /**
     * @generated from protobuf enum value: ABILITY_META_SET_POSE_PARAMETER = 18;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_SET_POSE_PARAMETER"] = 18] = "ABILITY_META_SET_POSE_PARAMETER";
    /**
     * @generated from protobuf enum value: ABILITY_META_UPDATE_BASE_REACTION_DAMAGE = 19;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_UPDATE_BASE_REACTION_DAMAGE"] = 19] = "ABILITY_META_UPDATE_BASE_REACTION_DAMAGE";
    /**
     * @generated from protobuf enum value: ABILITY_META_TRIGGER_ELEMENT_REACTION = 20;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_TRIGGER_ELEMENT_REACTION"] = 20] = "ABILITY_META_TRIGGER_ELEMENT_REACTION";
    /**
     * @generated from protobuf enum value: ABILITY_META_LOSE_HP = 21;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_LOSE_HP"] = 21] = "ABILITY_META_LOSE_HP";
    /**
     * @generated from protobuf enum value: ABILITY_META_DURABILITY_IS_ZERO = 22;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_META_DURABILITY_IS_ZERO"] = 22] = "ABILITY_META_DURABILITY_IS_ZERO";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_TRIGGER_ABILITY = 50;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_TRIGGER_ABILITY"] = 50] = "ABILITY_ACTION_TRIGGER_ABILITY";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_SET_CRASH_DAMAGE = 51;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_SET_CRASH_DAMAGE"] = 51] = "ABILITY_ACTION_SET_CRASH_DAMAGE";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_EFFECT = 52;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_EFFECT"] = 52] = "ABILITY_ACTION_EFFECT";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_SUMMON = 53;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_SUMMON"] = 53] = "ABILITY_ACTION_SUMMON";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_BLINK = 54;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_BLINK"] = 54] = "ABILITY_ACTION_BLINK";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_CREATE_GADGET = 55;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_CREATE_GADGET"] = 55] = "ABILITY_ACTION_CREATE_GADGET";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_APPLY_LEVEL_MODIFIER = 56;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_APPLY_LEVEL_MODIFIER"] = 56] = "ABILITY_ACTION_APPLY_LEVEL_MODIFIER";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_GENERATE_ELEM_BALL = 57;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_GENERATE_ELEM_BALL"] = 57] = "ABILITY_ACTION_GENERATE_ELEM_BALL";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_SET_RANDOM_OVERRIDE_MAP_VALUE = 58;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_SET_RANDOM_OVERRIDE_MAP_VALUE"] = 58] = "ABILITY_ACTION_SET_RANDOM_OVERRIDE_MAP_VALUE";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_SERVER_MONSTER_LOG = 59;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_SERVER_MONSTER_LOG"] = 59] = "ABILITY_ACTION_SERVER_MONSTER_LOG";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_CREATE_TILE = 60;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_CREATE_TILE"] = 60] = "ABILITY_ACTION_CREATE_TILE";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_DESTROY_TILE = 61;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_DESTROY_TILE"] = 61] = "ABILITY_ACTION_DESTROY_TILE";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_FIRE_AFTER_IMAGE = 62;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_FIRE_AFTER_IMAGE"] = 62] = "ABILITY_ACTION_FIRE_AFTER_IMAGE";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_DEDUCT_STAMINA = 63;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_DEDUCT_STAMINA"] = 63] = "ABILITY_ACTION_DEDUCT_STAMINA";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_HIT_EFFECT = 64;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_HIT_EFFECT"] = 64] = "ABILITY_ACTION_HIT_EFFECT";
    /**
     * @generated from protobuf enum value: ABILITY_ACTION_SET_BULLET_TRACK_TARGET = 65;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_ACTION_SET_BULLET_TRACK_TARGET"] = 65] = "ABILITY_ACTION_SET_BULLET_TRACK_TARGET";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_AVATAR_STEER_BY_CAMERA = 100;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_AVATAR_STEER_BY_CAMERA"] = 100] = "ABILITY_MIXIN_AVATAR_STEER_BY_CAMERA";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_MONSTER_DEFEND = 101;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_MONSTER_DEFEND"] = 101] = "ABILITY_MIXIN_MONSTER_DEFEND";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_WIND_ZONE = 102;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_WIND_ZONE"] = 102] = "ABILITY_MIXIN_WIND_ZONE";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_COST_STAMINA = 103;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_COST_STAMINA"] = 103] = "ABILITY_MIXIN_COST_STAMINA";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_ELITE_SHIELD = 104;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_ELITE_SHIELD"] = 104] = "ABILITY_MIXIN_ELITE_SHIELD";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_ELEMENT_SHIELD = 105;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_ELEMENT_SHIELD"] = 105] = "ABILITY_MIXIN_ELEMENT_SHIELD";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_GLOBAL_SHIELD = 106;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_GLOBAL_SHIELD"] = 106] = "ABILITY_MIXIN_GLOBAL_SHIELD";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_SHIELD_BAR = 107;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_SHIELD_BAR"] = 107] = "ABILITY_MIXIN_SHIELD_BAR";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_WIND_SEED_SPAWNER = 108;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_WIND_SEED_SPAWNER"] = 108] = "ABILITY_MIXIN_WIND_SEED_SPAWNER";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_DO_ACTION_BY_ELEMENT_REACTION = 109;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_DO_ACTION_BY_ELEMENT_REACTION"] = 109] = "ABILITY_MIXIN_DO_ACTION_BY_ELEMENT_REACTION";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_FIELD_ENTITY_COUNT_CHANGE = 110;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_FIELD_ENTITY_COUNT_CHANGE"] = 110] = "ABILITY_MIXIN_FIELD_ENTITY_COUNT_CHANGE";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_SCENE_PROP_SYNC = 111;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_SCENE_PROP_SYNC"] = 111] = "ABILITY_MIXIN_SCENE_PROP_SYNC";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_WIDGET_MP_SUPPORT = 112;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_WIDGET_MP_SUPPORT"] = 112] = "ABILITY_MIXIN_WIDGET_MP_SUPPORT";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_DO_ACTION_BY_SELF_MODIFIER_ELEMENT_DURABILITY_RATIO = 113;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_DO_ACTION_BY_SELF_MODIFIER_ELEMENT_DURABILITY_RATIO"] = 113] = "ABILITY_MIXIN_DO_ACTION_BY_SELF_MODIFIER_ELEMENT_DURABILITY_RATIO";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_FIREWORKS_LAUNCHER = 114;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_FIREWORKS_LAUNCHER"] = 114] = "ABILITY_MIXIN_FIREWORKS_LAUNCHER";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_ATTACK_RESULT_CREATE_COUNT = 115;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_ATTACK_RESULT_CREATE_COUNT"] = 115] = "ABILITY_MIXIN_ATTACK_RESULT_CREATE_COUNT";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_UGC_TIME_CONTROL = 116;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_UGC_TIME_CONTROL"] = 116] = "ABILITY_MIXIN_UGC_TIME_CONTROL";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_AVATAR_COMBAT = 117;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_AVATAR_COMBAT"] = 117] = "ABILITY_MIXIN_AVATAR_COMBAT";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_DEATH_ZONE_REGIONAL_PLAY_MIXIN = 118;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_DEATH_ZONE_REGIONAL_PLAY_MIXIN"] = 118] = "ABILITY_MIXIN_DEATH_ZONE_REGIONAL_PLAY_MIXIN";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_UI_INTERACT = 119;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_UI_INTERACT"] = 119] = "ABILITY_MIXIN_UI_INTERACT";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_SHOOT_FROM_CAMERA = 120;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_SHOOT_FROM_CAMERA"] = 120] = "ABILITY_MIXIN_SHOOT_FROM_CAMERA";
    /**
     * @generated from protobuf enum value: ABILITY_MIXIN_ERASE_BRICK_ACTIVITY = 121;
     */
    AbilityInvokeArgument[AbilityInvokeArgument["ABILITY_MIXIN_ERASE_BRICK_ACTIVITY"] = 121] = "ABILITY_MIXIN_ERASE_BRICK_ACTIVITY";
})(AbilityInvokeArgument = exports.AbilityInvokeArgument || (exports.AbilityInvokeArgument = {}));
/**
 * @generated from protobuf enum com.midnights.game.ModifierAction
 */
var ModifierAction;
(function (ModifierAction) {
    /**
     * @generated from protobuf enum value: ADDED = 0;
     */
    ModifierAction[ModifierAction["ADDED"] = 0] = "ADDED";
    /**
     * @generated from protobuf enum value: REMOVED = 1;
     */
    ModifierAction[ModifierAction["REMOVED"] = 1] = "REMOVED";
})(ModifierAction = exports.ModifierAction || (exports.ModifierAction = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvokeEntryHead$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityInvokeEntryHead", [
            { no: 7, name: "modifier_config_local_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "instanced_ability_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "local_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "server_buff_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 modifier_config_local_id */ 7:
                    message.modifierConfigLocalId = reader.int32();
                    break;
                case /* optional bool is_serverbuff_modifier */ 2:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* optional uint32 instanced_ability_id */ 1:
                    message.instancedAbilityId = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 12:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional int32 local_id */ 10:
                    message.localId = reader.int32();
                    break;
                case /* optional uint32 server_buff_uid */ 14:
                    message.serverBuffUid = reader.uint32();
                    break;
                case /* optional uint32 target_id */ 3:
                    message.targetId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 modifier_config_local_id = 7; */
        if (message.modifierConfigLocalId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.modifierConfigLocalId);
        /* optional bool is_serverbuff_modifier = 2; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isServerbuffModifier);
        /* optional uint32 instanced_ability_id = 1; */
        if (message.instancedAbilityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.instancedAbilityId);
        /* optional uint32 instanced_modifier_id = 12; */
        if (message.instancedModifierId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.instancedModifierId);
        /* optional int32 local_id = 10; */
        if (message.localId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.localId);
        /* optional uint32 server_buff_uid = 14; */
        if (message.serverBuffUid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.serverBuffUid);
        /* optional uint32 target_id = 3; */
        if (message.targetId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.targetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityInvokeEntryHead
 */
exports.AbilityInvokeEntryHead = new AbilityInvokeEntryHead$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvokeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityInvokeEntry", [
            { no: 1, name: "argument_type", kind: "enum", opt: true, T: () => ["com.midnights.game.AbilityInvokeArgument", AbilityInvokeArgument] },
            { no: 2, name: "head", kind: "message", T: () => exports.AbilityInvokeEntryHead },
            { no: 4, name: "forward_peer", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "event_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "forward_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ForwardType", cmd_fight_1.ForwardType] },
            { no: 15, name: "ability_data", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 14, name: "total_tick_time", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
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
                case /* optional com.midnights.game.AbilityInvokeArgument argument_type */ 1:
                    message.argumentType = reader.int32();
                    break;
                case /* optional com.midnights.game.AbilityInvokeEntryHead head */ 2:
                    message.head = exports.AbilityInvokeEntryHead.internalBinaryRead(reader, reader.uint32(), options, message.head);
                    break;
                case /* optional uint32 forward_peer */ 4:
                    message.forwardPeer = reader.uint32();
                    break;
                case /* optional uint32 event_id */ 12:
                    message.eventId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ForwardType forward_type */ 3:
                    message.forwardType = reader.int32();
                    break;
                case /* optional bytes ability_data */ 15:
                    message.abilityData = reader.bytes();
                    break;
                case /* optional double total_tick_time */ 14:
                    message.totalTickTime = reader.double();
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
        /* optional com.midnights.game.AbilityInvokeArgument argument_type = 1; */
        if (message.argumentType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.argumentType);
        /* optional com.midnights.game.AbilityInvokeEntryHead head = 2; */
        if (message.head)
            exports.AbilityInvokeEntryHead.internalBinaryWrite(message.head, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 forward_peer = 4; */
        if (message.forwardPeer !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.forwardPeer);
        /* optional uint32 event_id = 12; */
        if (message.eventId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.eventId);
        /* optional com.midnights.game.ForwardType forward_type = 3; */
        if (message.forwardType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.forwardType);
        /* optional bytes ability_data = 15; */
        if (message.abilityData !== undefined)
            writer.tag(15, runtime_1.WireType.LengthDelimited).bytes(message.abilityData);
        /* optional double total_tick_time = 14; */
        if (message.totalTickTime !== undefined)
            writer.tag(14, runtime_1.WireType.Bit64).double(message.totalTickTime);
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
 * @generated MessageType for protobuf message com.midnights.game.AbilityInvokeEntry
 */
exports.AbilityInvokeEntry = new AbilityInvokeEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvocationFixedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityInvocationFixedNotify", [
            { no: 14, name: "invoke6th", kind: "message", jsonName: "invoke6th", T: () => exports.AbilityInvokeEntry },
            { no: 8, name: "invoke5th", kind: "message", jsonName: "invoke5th", T: () => exports.AbilityInvokeEntry },
            { no: 1, name: "invoke4th", kind: "message", jsonName: "invoke4th", T: () => exports.AbilityInvokeEntry },
            { no: 5, name: "invoke2nd", kind: "message", jsonName: "invoke2nd", T: () => exports.AbilityInvokeEntry },
            { no: 10, name: "invoke1st", kind: "message", jsonName: "invoke1st", T: () => exports.AbilityInvokeEntry },
            { no: 12, name: "invoke3rd", kind: "message", jsonName: "invoke3rd", T: () => exports.AbilityInvokeEntry }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityInvokeEntry invoke6th = 14 [json_name = "invoke6th"];*/ 14:
                    message.invoke6Th = exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke6Th);
                    break;
                case /* optional com.midnights.game.AbilityInvokeEntry invoke5th = 8 [json_name = "invoke5th"];*/ 8:
                    message.invoke5Th = exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke5Th);
                    break;
                case /* optional com.midnights.game.AbilityInvokeEntry invoke4th = 1 [json_name = "invoke4th"];*/ 1:
                    message.invoke4Th = exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke4Th);
                    break;
                case /* optional com.midnights.game.AbilityInvokeEntry invoke2nd = 5 [json_name = "invoke2nd"];*/ 5:
                    message.invoke2Nd = exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke2Nd);
                    break;
                case /* optional com.midnights.game.AbilityInvokeEntry invoke1st = 10 [json_name = "invoke1st"];*/ 10:
                    message.invoke1St = exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke1St);
                    break;
                case /* optional com.midnights.game.AbilityInvokeEntry invoke3rd = 12 [json_name = "invoke3rd"];*/ 12:
                    message.invoke3Rd = exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke3Rd);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilityInvokeEntry invoke6th = 14 [json_name = "invoke6th"]; */
        if (message.invoke6Th)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invoke6Th, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityInvokeEntry invoke5th = 8 [json_name = "invoke5th"]; */
        if (message.invoke5Th)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invoke5Th, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityInvokeEntry invoke4th = 1 [json_name = "invoke4th"]; */
        if (message.invoke4Th)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invoke4Th, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityInvokeEntry invoke2nd = 5 [json_name = "invoke2nd"]; */
        if (message.invoke2Nd)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invoke2Nd, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityInvokeEntry invoke1st = 10 [json_name = "invoke1st"]; */
        if (message.invoke1St)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invoke1St, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityInvokeEntry invoke3rd = 12 [json_name = "invoke3rd"]; */
        if (message.invoke3Rd)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invoke3Rd, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityInvocationFixedNotify
 */
exports.AbilityInvocationFixedNotify = new AbilityInvocationFixedNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvocationsNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityInvocationsNotify", [
            { no: 2, name: "invokes", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityInvokeEntry }
        ]);
    }
    create(value) {
        const message = { invokes: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AbilityInvokeEntry invokes */ 2:
                    message.invokes.push(exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AbilityInvokeEntry invokes = 2; */
        for (let i = 0; i < message.invokes.length; i++)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invokes[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityInvocationsNotify
 */
exports.AbilityInvocationsNotify = new AbilityInvocationsNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaReInitOverrideMap$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaReInitOverrideMap", [
            { no: 7, name: "override_map", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_8.AbilityScalarValueEntry }
        ]);
    }
    create(value) {
        const message = { overrideMap: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AbilityScalarValueEntry override_map */ 7:
                    message.overrideMap.push(define_8.AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AbilityScalarValueEntry override_map = 7; */
        for (let i = 0; i < message.overrideMap.length; i++)
            define_8.AbilityScalarValueEntry.internalBinaryWrite(message.overrideMap[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaReInitOverrideMap
 */
exports.AbilityMetaReInitOverrideMap = new AbilityMetaReInitOverrideMap$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaAddAbility$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaAddAbility", [
            { no: 12, name: "ability", kind: "message", T: () => define_7.AbilityAppliedAbility }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityAppliedAbility ability */ 12:
                    message.ability = define_7.AbilityAppliedAbility.internalBinaryRead(reader, reader.uint32(), options, message.ability);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilityAppliedAbility ability = 12; */
        if (message.ability)
            define_7.AbilityAppliedAbility.internalBinaryWrite(message.ability, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaAddAbility
 */
exports.AbilityMetaAddAbility = new AbilityMetaAddAbility$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModifierProperty$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ModifierProperty", [
            { no: 15, name: "key", kind: "message", T: () => define_6.AbilityString },
            { no: 5, name: "value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityString key */ 15:
                    message.key = define_6.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.key);
                    break;
                case /* optional float value */ 5:
                    message.value = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilityString key = 15; */
        if (message.key)
            define_6.AbilityString.internalBinaryWrite(message.key, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float value = 5; */
        if (message.value !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ModifierProperty
 */
exports.ModifierProperty = new ModifierProperty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaModifierChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaModifierChange", [
            { no: 7, name: "attached_instanced_modifier", kind: "message", T: () => define_5.AbilityAttachedModifier },
            { no: 4, name: "server_buff_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_attached_parent_ability", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "action", kind: "enum", opt: true, T: () => ["com.midnights.game.ModifierAction", ModifierAction] },
            { no: 2, name: "modifier_local_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "parent_ability_name", kind: "message", T: () => define_6.AbilityString },
            { no: 6, name: "is_mute_remote", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "apply_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "properties", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ModifierProperty },
            { no: 11, name: "parent_ability_override", kind: "message", T: () => define_6.AbilityString },
            { no: 9, name: "is_durability_zero", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { properties: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityAttachedModifier attached_instanced_modifier */ 7:
                    message.attachedInstancedModifier = define_5.AbilityAttachedModifier.internalBinaryRead(reader, reader.uint32(), options, message.attachedInstancedModifier);
                    break;
                case /* optional uint32 server_buff_uid */ 4:
                    message.serverBuffUid = reader.uint32();
                    break;
                case /* optional bool is_attached_parent_ability */ 10:
                    message.isAttachedParentAbility = reader.bool();
                    break;
                case /* optional com.midnights.game.ModifierAction action */ 13:
                    message.action = reader.int32();
                    break;
                case /* optional int32 modifier_local_id */ 2:
                    message.modifierLocalId = reader.int32();
                    break;
                case /* optional com.midnights.game.AbilityString parent_ability_name */ 1:
                    message.parentAbilityName = define_6.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityName);
                    break;
                case /* optional bool is_mute_remote */ 6:
                    message.isMuteRemote = reader.bool();
                    break;
                case /* optional uint32 apply_entity_id */ 5:
                    message.applyEntityId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ModifierProperty properties */ 3:
                    message.properties.push(exports.ModifierProperty.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.AbilityString parent_ability_override */ 11:
                    message.parentAbilityOverride = define_6.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityOverride);
                    break;
                case /* optional bool is_durability_zero */ 9:
                    message.isDurabilityZero = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilityAttachedModifier attached_instanced_modifier = 7; */
        if (message.attachedInstancedModifier)
            define_5.AbilityAttachedModifier.internalBinaryWrite(message.attachedInstancedModifier, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 server_buff_uid = 4; */
        if (message.serverBuffUid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.serverBuffUid);
        /* optional bool is_attached_parent_ability = 10; */
        if (message.isAttachedParentAbility !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isAttachedParentAbility);
        /* optional com.midnights.game.ModifierAction action = 13; */
        if (message.action !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.action);
        /* optional int32 modifier_local_id = 2; */
        if (message.modifierLocalId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.modifierLocalId);
        /* optional com.midnights.game.AbilityString parent_ability_name = 1; */
        if (message.parentAbilityName)
            define_6.AbilityString.internalBinaryWrite(message.parentAbilityName, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_mute_remote = 6; */
        if (message.isMuteRemote !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isMuteRemote);
        /* optional uint32 apply_entity_id = 5; */
        if (message.applyEntityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.applyEntityId);
        /* repeated com.midnights.game.ModifierProperty properties = 3; */
        for (let i = 0; i < message.properties.length; i++)
            exports.ModifierProperty.internalBinaryWrite(message.properties[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityString parent_ability_override = 11; */
        if (message.parentAbilityOverride)
            define_6.AbilityString.internalBinaryWrite(message.parentAbilityOverride, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_durability_zero = 9; */
        if (message.isDurabilityZero !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isDurabilityZero);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaModifierChange
 */
exports.AbilityMetaModifierChange = new AbilityMetaModifierChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaDurabilityIsZero$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaDurabilityIsZero", [
            { no: 5, name: "is_zero", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_zero */ 5:
                    message.isZero = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_zero = 5; */
        if (message.isZero !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isZero);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaDurabilityIsZero
 */
exports.AbilityMetaDurabilityIsZero = new AbilityMetaDurabilityIsZero$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaSpecialFloatArgument$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaSpecialFloatArgument", [
            { no: 14, name: "argument_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "is_on", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float argument_value */ 14:
                    message.argumentValue = reader.float();
                    break;
                case /* optional bool is_on */ 10:
                    message.isOn = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float argument_value = 14; */
        if (message.argumentValue !== undefined)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.argumentValue);
        /* optional bool is_on = 10; */
        if (message.isOn !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isOn);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaSpecialFloatArgument
 */
exports.AbilityMetaSpecialFloatArgument = new AbilityMetaSpecialFloatArgument$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaAddOrGetAbilityAndTrigger$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaAddOrGetAbilityAndTrigger", [
            { no: 13, name: "ability_name", kind: "message", T: () => define_6.AbilityString },
            { no: 3, name: "trigger_argument", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "ability_override", kind: "message", T: () => define_6.AbilityString }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityString ability_name */ 13:
                    message.abilityName = define_6.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityName);
                    break;
                case /* optional float trigger_argument */ 3:
                    message.triggerArgument = reader.float();
                    break;
                case /* optional com.midnights.game.AbilityString ability_override */ 8:
                    message.abilityOverride = define_6.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityOverride);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilityString ability_name = 13; */
        if (message.abilityName)
            define_6.AbilityString.internalBinaryWrite(message.abilityName, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float trigger_argument = 3; */
        if (message.triggerArgument !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.triggerArgument);
        /* optional com.midnights.game.AbilityString ability_override = 8; */
        if (message.abilityOverride)
            define_6.AbilityString.internalBinaryWrite(message.abilityOverride, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaAddOrGetAbilityAndTrigger
 */
exports.AbilityMetaAddOrGetAbilityAndTrigger = new AbilityMetaAddOrGetAbilityAndTrigger$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaSetKilledState$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaSetKilledState", [
            { no: 2, name: "killed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool killed */ 2:
                    message.killed = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool killed = 2; */
        if (message.killed !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.killed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaSetKilledState
 */
exports.AbilityMetaSetKilledState = new AbilityMetaSetKilledState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaSetAbilityTrigger$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaSetAbilityTrigger", [
            { no: 11, name: "trigger_ability_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 trigger_ability_entity_id */ 11:
                    message.triggerAbilityEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 trigger_ability_entity_id = 11; */
        if (message.triggerAbilityEntityId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.triggerAbilityEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaSetAbilityTrigger
 */
exports.AbilityMetaSetAbilityTrigger = new AbilityMetaSetAbilityTrigger$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaSetModifierApplyEntityId$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaSetModifierApplyEntityId", [
            { no: 10, name: "apply_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 apply_entity_id */ 10:
                    message.applyEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 apply_entity_id = 10; */
        if (message.applyEntityId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.applyEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaSetModifierApplyEntityId
 */
exports.AbilityMetaSetModifierApplyEntityId = new AbilityMetaSetModifierApplyEntityId$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaModifierDurabilityChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaModifierDurabilityChange", [
            { no: 6, name: "reduce_durability", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "remain_durability", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float reduce_durability */ 6:
                    message.reduceDurability = reader.float();
                    break;
                case /* optional float remain_durability */ 15:
                    message.remainDurability = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float reduce_durability = 6; */
        if (message.reduceDurability !== undefined)
            writer.tag(6, runtime_1.WireType.Bit32).float(message.reduceDurability);
        /* optional float remain_durability = 15; */
        if (message.remainDurability !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.remainDurability);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaModifierDurabilityChange
 */
exports.AbilityMetaModifierDurabilityChange = new AbilityMetaModifierDurabilityChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaElementReactionVisual$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaElementReactionVisual", [
            { no: 2, name: "hit_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "element_source_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "element_reactor_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "element_reaction_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 hit_index */ 2:
                    message.hitIndex = reader.int32();
                    break;
                case /* optional uint32 element_source_type */ 12:
                    message.elementSourceType = reader.uint32();
                    break;
                case /* optional uint32 element_reactor_type */ 6:
                    message.elementReactorType = reader.uint32();
                    break;
                case /* optional uint32 element_reaction_type */ 5:
                    message.elementReactionType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 hit_index = 2; */
        if (message.hitIndex !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.hitIndex);
        /* optional uint32 element_source_type = 12; */
        if (message.elementSourceType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.elementSourceType);
        /* optional uint32 element_reactor_type = 6; */
        if (message.elementReactorType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.elementReactorType);
        /* optional uint32 element_reaction_type = 5; */
        if (message.elementReactionType !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.elementReactionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaElementReactionVisual
 */
exports.AbilityMetaElementReactionVisual = new AbilityMetaElementReactionVisual$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaTriggerElementReaction$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaTriggerElementReaction", [
            { no: 9, name: "hit_index", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "element_source_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "element_reactor_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "trigger_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "element_reaction_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 hit_index */ 9:
                    message.hitIndex = reader.int32();
                    break;
                case /* optional uint32 element_source_type */ 7:
                    message.elementSourceType = reader.uint32();
                    break;
                case /* optional uint32 element_reactor_type */ 12:
                    message.elementReactorType = reader.uint32();
                    break;
                case /* optional uint32 trigger_entity_id */ 2:
                    message.triggerEntityId = reader.uint32();
                    break;
                case /* optional uint32 element_reaction_type */ 1:
                    message.elementReactionType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 hit_index = 9; */
        if (message.hitIndex !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.hitIndex);
        /* optional uint32 element_source_type = 7; */
        if (message.elementSourceType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.elementSourceType);
        /* optional uint32 element_reactor_type = 12; */
        if (message.elementReactorType !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.elementReactorType);
        /* optional uint32 trigger_entity_id = 2; */
        if (message.triggerEntityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.triggerEntityId);
        /* optional uint32 element_reaction_type = 1; */
        if (message.elementReactionType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.elementReactionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaTriggerElementReaction
 */
exports.AbilityMetaTriggerElementReaction = new AbilityMetaTriggerElementReaction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaLoseHp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaLoseHp", [
            { no: 10, name: "lose_hp_config_idx", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 lose_hp_config_idx */ 10:
                    message.loseHpConfigIdx = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 lose_hp_config_idx = 10; */
        if (message.loseHpConfigIdx !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.loseHpConfigIdx);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaLoseHp
 */
exports.AbilityMetaLoseHp = new AbilityMetaLoseHp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaSetPoseParameter$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaSetPoseParameter", [
            { no: 6, name: "value", kind: "message", T: () => define_4.AnimatorParameterValueInfoPair }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AnimatorParameterValueInfoPair value */ 6:
                    message.value = define_4.AnimatorParameterValueInfoPair.internalBinaryRead(reader, reader.uint32(), options, message.value);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AnimatorParameterValueInfoPair value = 6; */
        if (message.value)
            define_4.AnimatorParameterValueInfoPair.internalBinaryWrite(message.value, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaSetPoseParameter
 */
exports.AbilityMetaSetPoseParameter = new AbilityMetaSetPoseParameter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaUpdateBaseReactionDamage$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMetaUpdateBaseReactionDamage", [
            { no: 15, name: "source_caster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "ability_name", kind: "message", T: () => define_6.AbilityString },
            { no: 4, name: "global_value_key", kind: "message", T: () => define_6.AbilityString },
            { no: 8, name: "reaction_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 source_caster_id */ 15:
                    message.sourceCasterId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilityString ability_name */ 1:
                    message.abilityName = define_6.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityName);
                    break;
                case /* optional com.midnights.game.AbilityString global_value_key */ 4:
                    message.globalValueKey = define_6.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.globalValueKey);
                    break;
                case /* optional uint32 reaction_type */ 8:
                    message.reactionType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 source_caster_id = 15; */
        if (message.sourceCasterId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sourceCasterId);
        /* optional com.midnights.game.AbilityString ability_name = 1; */
        if (message.abilityName)
            define_6.AbilityString.internalBinaryWrite(message.abilityName, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityString global_value_key = 4; */
        if (message.globalValueKey)
            define_6.AbilityString.internalBinaryWrite(message.globalValueKey, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 reaction_type = 8; */
        if (message.reactionType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.reactionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMetaUpdateBaseReactionDamage
 */
exports.AbilityMetaUpdateBaseReactionDamage = new AbilityMetaUpdateBaseReactionDamage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionTriggerAbility$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionTriggerAbility", [
            { no: 14, name: "other_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 other_id */ 14:
                    message.otherId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 other_id = 14; */
        if (message.otherId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.otherId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionTriggerAbility
 */
exports.AbilityActionTriggerAbility = new AbilityActionTriggerAbility$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionSetCrashDamage$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionSetCrashDamage", [
            { no: 2, name: "hit_pos", kind: "message", T: () => define_3.Vector },
            { no: 15, name: "damage", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector hit_pos */ 2:
                    message.hitPos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitPos);
                    break;
                case /* optional float damage */ 15:
                    message.damage = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector hit_pos = 2; */
        if (message.hitPos)
            define_3.Vector.internalBinaryWrite(message.hitPos, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float damage = 15; */
        if (message.damage !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.damage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionSetCrashDamage
 */
exports.AbilityActionSetCrashDamage = new AbilityActionSetCrashDamage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityBornType$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityBornType", [
            { no: 2, name: "rot", kind: "message", T: () => define_3.Vector },
            { no: 14, name: "move_dir", kind: "message", T: () => define_3.Vector },
            { no: 5, name: "pos", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector rot */ 2:
                    message.rot = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector move_dir */ 14:
                    message.moveDir = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.moveDir);
                    break;
                case /* optional com.midnights.game.Vector pos */ 5:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector rot = 2; */
        if (message.rot)
            define_3.Vector.internalBinaryWrite(message.rot, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector move_dir = 14; */
        if (message.moveDir)
            define_3.Vector.internalBinaryWrite(message.moveDir, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 5; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityBornType
 */
exports.AbilityBornType = new AbilityBornType$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionSummon$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionSummon", [
            { no: 10, name: "pos", kind: "message", T: () => define_3.Vector },
            { no: 1, name: "rot", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector pos */ 10:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 1:
                    message.rot = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector pos = 10; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 1; */
        if (message.rot)
            define_3.Vector.internalBinaryWrite(message.rot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionSummon
 */
exports.AbilityActionSummon = new AbilityActionSummon$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionBlink$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionBlink", [
            { no: 11, name: "rot", kind: "message", T: () => define_3.Vector },
            { no: 10, name: "pos", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector rot */ 11:
                    message.rot = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 10:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector rot = 11; */
        if (message.rot)
            define_3.Vector.internalBinaryWrite(message.rot, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 10; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionBlink
 */
exports.AbilityActionBlink = new AbilityActionBlink$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionCreateGadget$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionCreateGadget", [
            { no: 3, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "rot", kind: "message", T: () => define_3.Vector },
            { no: 11, name: "pos", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 room_id */ 3:
                    message.roomId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector rot */ 8:
                    message.rot = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 11:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 room_id = 3; */
        if (message.roomId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.roomId);
        /* optional com.midnights.game.Vector rot = 8; */
        if (message.rot)
            define_3.Vector.internalBinaryWrite(message.rot, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 11; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionCreateGadget
 */
exports.AbilityActionCreateGadget = new AbilityActionCreateGadget$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionSetRandomOverrideMapValue$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionSetRandomOverrideMapValue", [
            { no: 1, name: "random_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float random_value */ 1:
                    message.randomValue = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float random_value = 1; */
        if (message.randomValue !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.randomValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionSetRandomOverrideMapValue
 */
exports.AbilityActionSetRandomOverrideMapValue = new AbilityActionSetRandomOverrideMapValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionServerMonsterLog$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionServerMonsterLog", [
            { no: 2, name: "param_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 5 /*ScalarType.INT32*/ }
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
                case /* repeated int32 param_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.int32());
                    else
                        message.paramList.push(reader.int32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int32 param_list = 2; */
        for (let i = 0; i < message.paramList.length; i++)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.paramList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionServerMonsterLog
 */
exports.AbilityActionServerMonsterLog = new AbilityActionServerMonsterLog$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionCreateTile$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionCreateTile", [
            { no: 3, name: "rot", kind: "message", T: () => define_3.Vector },
            { no: 8, name: "pos", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector rot */ 3:
                    message.rot = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 8:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector rot = 3; */
        if (message.rot)
            define_3.Vector.internalBinaryWrite(message.rot, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 8; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionCreateTile
 */
exports.AbilityActionCreateTile = new AbilityActionCreateTile$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionDestroyTile$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionDestroyTile", [
            { no: 3, name: "rot", kind: "message", T: () => define_3.Vector },
            { no: 1, name: "pos", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector rot */ 3:
                    message.rot = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* optional com.midnights.game.Vector pos */ 1:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector rot = 3; */
        if (message.rot)
            define_3.Vector.internalBinaryWrite(message.rot, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector pos = 1; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionDestroyTile
 */
exports.AbilityActionDestroyTile = new AbilityActionDestroyTile$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionFireAfterImgae$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionFireAfterImgae", [
            { no: 12, name: "dir", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector dir */ 12:
                    message.dir = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.dir);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector dir = 12; */
        if (message.dir)
            define_3.Vector.internalBinaryWrite(message.dir, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionFireAfterImgae
 */
exports.AbilityActionFireAfterImgae = new AbilityActionFireAfterImgae$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityApplyLevelModifier$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityApplyLevelModifier", [
            { no: 6, name: "apply_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 apply_entity_id */ 6:
                    message.applyEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 apply_entity_id = 6; */
        if (message.applyEntityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.applyEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityApplyLevelModifier
 */
exports.AbilityApplyLevelModifier = new AbilityApplyLevelModifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionGenerateElemBall$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionGenerateElemBall", [
            { no: 2, name: "room_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "pos", kind: "message", T: () => define_3.Vector },
            { no: 13, name: "rot", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.Vector pos */ 7:
                    message.pos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 13:
                    message.rot = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.Vector pos = 7; */
        if (message.pos)
            define_3.Vector.internalBinaryWrite(message.pos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 13; */
        if (message.rot)
            define_3.Vector.internalBinaryWrite(message.rot, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionGenerateElemBall
 */
exports.AbilityActionGenerateElemBall = new AbilityActionGenerateElemBall$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionDeductStamina$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionDeductStamina", [
            { no: 1, name: "is_swim", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_swim */ 1:
                    message.isSwim = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_swim = 1; */
        if (message.isSwim !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isSwim);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionDeductStamina
 */
exports.AbilityActionDeductStamina = new AbilityActionDeductStamina$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionHitEffect$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionHitEffect", [
            { no: 3, name: "trigger_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 trigger_id */ 3:
                    message.triggerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 trigger_id = 3; */
        if (message.triggerId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.triggerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionHitEffect
 */
exports.AbilityActionHitEffect = new AbilityActionHitEffect$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityActionSetBulletTrackTarget$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityActionSetBulletTrackTarget", [
            { no: 1, name: "chased_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "lock_point_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 chased_entity_id */ 1:
                    message.chasedEntityId = reader.uint32();
                    break;
                case /* optional uint32 lock_point_index */ 2:
                    message.lockPointIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 chased_entity_id = 1; */
        if (message.chasedEntityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.chasedEntityId);
        /* optional uint32 lock_point_index = 2; */
        if (message.lockPointIndex !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.lockPointIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityActionSetBulletTrackTarget
 */
exports.AbilityActionSetBulletTrackTarget = new AbilityActionSetBulletTrackTarget$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinEmpty$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinEmpty", []);
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
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinEmpty
 */
exports.AbilityMixinEmpty = new AbilityMixinEmpty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinAvatarSteerByCamera$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinAvatarSteerByCamera", [
            { no: 7, name: "target_dir", kind: "message", T: () => define_3.Vector },
            { no: 6, name: "target_pos", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector target_dir */ 7:
                    message.targetDir = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetDir);
                    break;
                case /* optional com.midnights.game.Vector target_pos */ 6:
                    message.targetPos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector target_dir = 7; */
        if (message.targetDir)
            define_3.Vector.internalBinaryWrite(message.targetDir, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector target_pos = 6; */
        if (message.targetPos)
            define_3.Vector.internalBinaryWrite(message.targetPos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinAvatarSteerByCamera
 */
exports.AbilityMixinAvatarSteerByCamera = new AbilityMixinAvatarSteerByCamera$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindZone$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinWindZone", [
            { no: 13, name: "entity_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "zone_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entityIds: [], zoneIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 entity_ids */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIds.push(reader.uint32());
                    else
                        message.entityIds.push(reader.uint32());
                    break;
                case /* repeated uint32 zone_id_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.zoneIdList.push(reader.uint32());
                    else
                        message.zoneIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 entity_ids = 13; */
        for (let i = 0; i < message.entityIds.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityIds[i]);
        /* repeated uint32 zone_id_list = 10; */
        for (let i = 0; i < message.zoneIdList.length; i++)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.zoneIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinWindZone
 */
exports.AbilityMixinWindZone = new AbilityMixinWindZone$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinCostStamina$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinCostStamina", [
            { no: 3, name: "is_swim", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_swim */ 3:
                    message.isSwim = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_swim = 3; */
        if (message.isSwim !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isSwim);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinCostStamina
 */
exports.AbilityMixinCostStamina = new AbilityMixinCostStamina$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinEliteShield$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinEliteShield", [
            { no: 2, name: "sub_shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float sub_shield */ 2:
                    message.subShield = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float sub_shield = 2; */
        if (message.subShield !== undefined)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.subShield);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinEliteShield
 */
exports.AbilityMixinEliteShield = new AbilityMixinEliteShield$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinElementShield$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinElementShield", [
            { no: 10, name: "sub_shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 1, name: "absorb_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "player_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_shield_broken", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "max_shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float sub_shield */ 10:
                    message.subShield = reader.float();
                    break;
                case /* optional float shield */ 8:
                    message.shield = reader.float();
                    break;
                case /* optional uint32 absorb_type */ 1:
                    message.absorbType = reader.uint32();
                    break;
                case /* optional uint32 player_num */ 4:
                    message.playerNum = reader.uint32();
                    break;
                case /* optional bool is_shield_broken */ 9:
                    message.isShieldBroken = reader.bool();
                    break;
                case /* optional float max_shield */ 12:
                    message.maxShield = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float sub_shield = 10; */
        if (message.subShield !== undefined)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.subShield);
        /* optional float shield = 8; */
        if (message.shield !== undefined)
            writer.tag(8, runtime_1.WireType.Bit32).float(message.shield);
        /* optional uint32 absorb_type = 1; */
        if (message.absorbType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.absorbType);
        /* optional uint32 player_num = 4; */
        if (message.playerNum !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.playerNum);
        /* optional bool is_shield_broken = 9; */
        if (message.isShieldBroken !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isShieldBroken);
        /* optional float max_shield = 12; */
        if (message.maxShield !== undefined)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.maxShield);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinElementShield
 */
exports.AbilityMixinElementShield = new AbilityMixinElementShield$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinGlobalShield$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinGlobalShield", [
            { no: 4, name: "is_create_effect", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "sub_shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "height_offset", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "shield_effect_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_create_effect */ 4:
                    message.isCreateEffect = reader.bool();
                    break;
                case /* optional float sub_shield */ 7:
                    message.subShield = reader.float();
                    break;
                case /* optional float height_offset */ 5:
                    message.heightOffset = reader.float();
                    break;
                case /* optional uint32 avatar_id */ 11:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional float max_shield */ 10:
                    message.maxShield = reader.float();
                    break;
                case /* optional string shield_effect_name */ 2:
                    message.shieldEffectName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_create_effect = 4; */
        if (message.isCreateEffect !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isCreateEffect);
        /* optional float sub_shield = 7; */
        if (message.subShield !== undefined)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.subShield);
        /* optional float height_offset = 5; */
        if (message.heightOffset !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.heightOffset);
        /* optional uint32 avatar_id = 11; */
        if (message.avatarId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional float max_shield = 10; */
        if (message.maxShield !== undefined)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.maxShield);
        /* optional string shield_effect_name = 2; */
        if (message.shieldEffectName !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.shieldEffectName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinGlobalShield
 */
exports.AbilityMixinGlobalShield = new AbilityMixinGlobalShield$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinShieldBar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinShieldBar", [
            { no: 14, name: "player_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "max_shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "shield", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "element_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 player_num */ 14:
                    message.playerNum = reader.uint32();
                    break;
                case /* optional float max_shield */ 15:
                    message.maxShield = reader.float();
                    break;
                case /* optional float shield */ 12:
                    message.shield = reader.float();
                    break;
                case /* optional uint32 element_type */ 13:
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
        /* optional uint32 player_num = 14; */
        if (message.playerNum !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playerNum);
        /* optional float max_shield = 15; */
        if (message.maxShield !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.maxShield);
        /* optional float shield = 12; */
        if (message.shield !== undefined)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.shield);
        /* optional uint32 element_type = 13; */
        if (message.elementType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.elementType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinShieldBar
 */
exports.AbilityMixinShieldBar = new AbilityMixinShieldBar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinWindSeedSpawner", [
            { no: 2, name: "add_signal", kind: "message", oneof: "cmd", T: () => exports.AbilityMixinWindSeedSpawner_AddSignal },
            { no: 15, name: "refresh_seed", kind: "message", oneof: "cmd", T: () => exports.AbilityMixinWindSeedSpawner_RefreshSeed },
            { no: 11, name: "catch_seed", kind: "message", oneof: "cmd", T: () => exports.AbilityMixinWindSeedSpawner_CatchSeed }
        ]);
    }
    create(value) {
        const message = { cmd: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.midnights.game.AbilityMixinWindSeedSpawner.AddSignal add_signal */ 2:
                    message.cmd = {
                        oneofKind: "addSignal",
                        addSignal: exports.AbilityMixinWindSeedSpawner_AddSignal.internalBinaryRead(reader, reader.uint32(), options, message.cmd.addSignal)
                    };
                    break;
                case /* com.midnights.game.AbilityMixinWindSeedSpawner.RefreshSeed refresh_seed */ 15:
                    message.cmd = {
                        oneofKind: "refreshSeed",
                        refreshSeed: exports.AbilityMixinWindSeedSpawner_RefreshSeed.internalBinaryRead(reader, reader.uint32(), options, message.cmd.refreshSeed)
                    };
                    break;
                case /* com.midnights.game.AbilityMixinWindSeedSpawner.CatchSeed catch_seed */ 11:
                    message.cmd = {
                        oneofKind: "catchSeed",
                        catchSeed: exports.AbilityMixinWindSeedSpawner_CatchSeed.internalBinaryRead(reader, reader.uint32(), options, message.cmd.catchSeed)
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
        /* com.midnights.game.AbilityMixinWindSeedSpawner.AddSignal add_signal = 2; */
        if (message.cmd.oneofKind === "addSignal")
            exports.AbilityMixinWindSeedSpawner_AddSignal.internalBinaryWrite(message.cmd.addSignal, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.AbilityMixinWindSeedSpawner.RefreshSeed refresh_seed = 15; */
        if (message.cmd.oneofKind === "refreshSeed")
            exports.AbilityMixinWindSeedSpawner_RefreshSeed.internalBinaryWrite(message.cmd.refreshSeed, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.AbilityMixinWindSeedSpawner.CatchSeed catch_seed = 11; */
        if (message.cmd.oneofKind === "catchSeed")
            exports.AbilityMixinWindSeedSpawner_CatchSeed.internalBinaryWrite(message.cmd.catchSeed, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinWindSeedSpawner
 */
exports.AbilityMixinWindSeedSpawner = new AbilityMixinWindSeedSpawner$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner_AddSignal$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinWindSeedSpawner.AddSignal", []);
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
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinWindSeedSpawner.AddSignal
 */
exports.AbilityMixinWindSeedSpawner_AddSignal = new AbilityMixinWindSeedSpawner_AddSignal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner_RefreshSeed$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinWindSeedSpawner.RefreshSeed", [
            { no: 6, name: "pos_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = { posList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.Vector pos_list */ 6:
                    message.posList.push(define_3.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.Vector pos_list = 6; */
        for (let i = 0; i < message.posList.length; i++)
            define_3.Vector.internalBinaryWrite(message.posList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinWindSeedSpawner.RefreshSeed
 */
exports.AbilityMixinWindSeedSpawner_RefreshSeed = new AbilityMixinWindSeedSpawner_RefreshSeed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner_CatchSeed$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinWindSeedSpawner.CatchSeed", [
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 8:
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
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinWindSeedSpawner.CatchSeed
 */
exports.AbilityMixinWindSeedSpawner_CatchSeed = new AbilityMixinWindSeedSpawner_CatchSeed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinDoActionByElementReaction$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinDoActionByElementReaction", [
            { no: 1, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_entity_id */ 1:
                    message.targetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_entity_id = 1; */
        if (message.targetEntityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinDoActionByElementReaction
 */
exports.AbilityMixinDoActionByElementReaction = new AbilityMixinDoActionByElementReaction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinFieldEntityCountChange$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinFieldEntityCountChange", [
            { no: 14, name: "field_entity_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 field_entity_count */ 14:
                    message.fieldEntityCount = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 field_entity_count = 14; */
        if (message.fieldEntityCount !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.fieldEntityCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinFieldEntityCountChange
 */
exports.AbilityMixinFieldEntityCountChange = new AbilityMixinFieldEntityCountChange$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinScenePropSync$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinScenePropSync", [
            { no: 5, name: "delete_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "is_clear_all", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "massive_prop_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.MassivePropSyncInfo }
        ]);
    }
    create(value) {
        const message = { deleteIdList: [], massivePropList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int64 delete_id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.deleteIdList.push(reader.int64().toBigInt());
                    else
                        message.deleteIdList.push(reader.int64().toBigInt());
                    break;
                case /* optional bool is_clear_all */ 12:
                    message.isClearAll = reader.bool();
                    break;
                case /* repeated com.midnights.game.MassivePropSyncInfo massive_prop_list */ 15:
                    message.massivePropList.push(define_2.MassivePropSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int64 delete_id_list = 5; */
        for (let i = 0; i < message.deleteIdList.length; i++)
            writer.tag(5, runtime_1.WireType.Varint).int64(message.deleteIdList[i]);
        /* optional bool is_clear_all = 12; */
        if (message.isClearAll !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isClearAll);
        /* repeated com.midnights.game.MassivePropSyncInfo massive_prop_list = 15; */
        for (let i = 0; i < message.massivePropList.length; i++)
            define_2.MassivePropSyncInfo.internalBinaryWrite(message.massivePropList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinScenePropSync
 */
exports.AbilityMixinScenePropSync = new AbilityMixinScenePropSync$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWidgetMpSupport$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinWidgetMpSupport", [
            { no: 9, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_entity_id */ 9:
                    message.targetEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_entity_id = 9; */
        if (message.targetEntityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinWidgetMpSupport
 */
exports.AbilityMixinWidgetMpSupport = new AbilityMixinWidgetMpSupport$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinDoActionBySelfModifierElementDurabilityRatio$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinDoActionBySelfModifierElementDurabilityRatio", [
            { no: 9, name: "last_duability_ratio", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float last_duability_ratio */ 9:
                    message.lastDuabilityRatio = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float last_duability_ratio = 9; */
        if (message.lastDuabilityRatio !== undefined)
            writer.tag(9, runtime_1.WireType.Bit32).float(message.lastDuabilityRatio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinDoActionBySelfModifierElementDurabilityRatio
 */
exports.AbilityMixinDoActionBySelfModifierElementDurabilityRatio = new AbilityMixinDoActionBySelfModifierElementDurabilityRatio$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinFireworksLauncher$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinFireworksLauncher", [
            { no: 2, name: "invoke_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "start_count_down_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "fired_bullet_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "phase", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "fireworks_config", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "turn_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fireworksConfig: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 invoke_type */ 2:
                    message.invokeType = reader.uint32();
                    break;
                case /* optional uint32 start_count_down_time */ 3:
                    message.startCountDownTime = reader.uint32();
                    break;
                case /* optional uint32 fired_bullet_count */ 1:
                    message.firedBulletCount = reader.uint32();
                    break;
                case /* optional uint32 phase */ 6:
                    message.phase = reader.uint32();
                    break;
                case /* repeated uint32 fireworks_config */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fireworksConfig.push(reader.uint32());
                    else
                        message.fireworksConfig.push(reader.uint32());
                    break;
                case /* optional uint32 turn_index */ 7:
                    message.turnIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 invoke_type = 2; */
        if (message.invokeType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.invokeType);
        /* optional uint32 start_count_down_time = 3; */
        if (message.startCountDownTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.startCountDownTime);
        /* optional uint32 fired_bullet_count = 1; */
        if (message.firedBulletCount !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.firedBulletCount);
        /* optional uint32 phase = 6; */
        if (message.phase !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.phase);
        /* repeated uint32 fireworks_config = 4; */
        for (let i = 0; i < message.fireworksConfig.length; i++)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.fireworksConfig[i]);
        /* optional uint32 turn_index = 7; */
        if (message.turnIndex !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.turnIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinFireworksLauncher
 */
exports.AbilityMixinFireworksLauncher = new AbilityMixinFireworksLauncher$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinUGCTimeControl$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinUGCTimeControl", [
            { no: 13, name: "start_move_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "start_move_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 start_move_time_ms */ 13:
                    message.startMoveTimeMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 start_move_time */ 3:
                    message.startMoveTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 start_move_time_ms = 13; */
        if (message.startMoveTimeMs !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.startMoveTimeMs);
        /* optional uint32 start_move_time = 3; */
        if (message.startMoveTime !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.startMoveTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinUGCTimeControl
 */
exports.AbilityMixinUGCTimeControl = new AbilityMixinUGCTimeControl$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinUIInteract$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinUIInteract", []);
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
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinUIInteract
 */
exports.AbilityMixinUIInteract = new AbilityMixinUIInteract$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinAvatarCombat$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinAvatarCombat", [
            { no: 9, name: "is_enter_combat", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_enter_combat */ 9:
                    message.isEnterCombat = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_enter_combat = 9; */
        if (message.isEnterCombat !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isEnterCombat);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinAvatarCombat
 */
exports.AbilityMixinAvatarCombat = new AbilityMixinAvatarCombat$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinShootFromCamera$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinShootFromCamera", [
            { no: 13, name: "init_pos", kind: "message", T: () => define_3.Vector },
            { no: 2, name: "forward", kind: "message", T: () => define_3.Vector }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector init_pos */ 13:
                    message.initPos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.initPos);
                    break;
                case /* optional com.midnights.game.Vector forward */ 2:
                    message.forward = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector init_pos = 13; */
        if (message.initPos)
            define_3.Vector.internalBinaryWrite(message.initPos, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector forward = 2; */
        if (message.forward)
            define_3.Vector.internalBinaryWrite(message.forward, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinShootFromCamera
 */
exports.AbilityMixinShootFromCamera = new AbilityMixinShootFromCamera$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinEraseBrickActivity$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityMixinEraseBrickActivity", [
            { no: 6, name: "data", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { data: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 data */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.data.push(reader.uint32());
                    else
                        message.data.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 data = 6; */
        for (let i = 0; i < message.data.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.data[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinEraseBrickActivity
 */
exports.AbilityMixinEraseBrickActivity = new AbilityMixinEraseBrickActivity$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AttackResultCreateCount$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AttackResultCreateCount", [
            { no: 10, name: "create_count_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "create_count_no_cost_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { createCountList: [], createCountNoCostList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 create_count_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.createCountList.push(reader.uint32());
                    else
                        message.createCountList.push(reader.uint32());
                    break;
                case /* repeated uint32 create_count_no_cost_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.createCountNoCostList.push(reader.uint32());
                    else
                        message.createCountNoCostList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 create_count_list = 10; */
        for (let i = 0; i < message.createCountList.length; i++)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.createCountList[i]);
        /* repeated uint32 create_count_no_cost_list = 7; */
        for (let i = 0; i < message.createCountNoCostList.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.createCountNoCostList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AttackResultCreateCount
 */
exports.AttackResultCreateCount = new AttackResultCreateCount$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientAbilityInitBeginNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientAbilityInitBeginNotify", [
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
 * @generated MessageType for protobuf message com.midnights.game.ClientAbilityInitBeginNotify
 */
exports.ClientAbilityInitBeginNotify = new ClientAbilityInitBeginNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientAbilityInitFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientAbilityInitFinishNotify", [
            { no: 14, name: "invokes", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityInvokeEntry },
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { invokes: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AbilityInvokeEntry invokes */ 14:
                    message.invokes.push(exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.AbilityInvokeEntry invokes = 14; */
        for (let i = 0; i < message.invokes.length; i++)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invokes[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.ClientAbilityInitFinishNotify
 */
exports.ClientAbilityInitFinishNotify = new ClientAbilityInitFinishNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvocationFailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityInvocationFailNotify", [
            { no: 7, name: "reason", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "invoke", kind: "message", T: () => exports.AbilityInvokeEntry }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string reason */ 7:
                    message.reason = reader.string();
                    break;
                case /* optional uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilityInvokeEntry invoke */ 3:
                    message.invoke = exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string reason = 7; */
        if (message.reason !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.reason);
        /* optional uint32 entity_id = 13; */
        if (message.entityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.AbilityInvokeEntry invoke = 3; */
        if (message.invoke)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invoke, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityInvocationFailNotify
 */
exports.AbilityInvocationFailNotify = new AbilityInvocationFailNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityAbilityInvokeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityAbilityInvokeEntry", [
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "invokes", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityInvokeEntry }
        ]);
    }
    create(value) {
        const message = { invokes: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.AbilityInvokeEntry invokes */ 1:
                    message.invokes.push(exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        /* repeated com.midnights.game.AbilityInvokeEntry invokes = 1; */
        for (let i = 0; i < message.invokes.length; i++)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invokes[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityAbilityInvokeEntry
 */
exports.EntityAbilityInvokeEntry = new EntityAbilityInvokeEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientAbilitiesInitFinishCombineNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientAbilitiesInitFinishCombineNotify", [
            { no: 1, name: "entity_invoke_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.EntityAbilityInvokeEntry }
        ]);
    }
    create(value) {
        const message = { entityInvokeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.EntityAbilityInvokeEntry entity_invoke_list */ 1:
                    message.entityInvokeList.push(exports.EntityAbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.EntityAbilityInvokeEntry entity_invoke_list = 1; */
        for (let i = 0; i < message.entityInvokeList.length; i++)
            exports.EntityAbilityInvokeEntry.internalBinaryWrite(message.entityInvokeList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientAbilitiesInitFinishCombineNotify
 */
exports.ClientAbilitiesInitFinishCombineNotify = new ClientAbilitiesInitFinishCombineNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WindSeedClientNotify", [
            { no: 14, name: "refresh_notify", kind: "message", oneof: "notify", T: () => exports.WindSeedClientNotify_RefreshNotify },
            { no: 6, name: "add_wind_bullet_notify", kind: "message", oneof: "notify", T: () => exports.WindSeedClientNotify_AddWindBulletNotify },
            { no: 4, name: "area_notify", kind: "message", oneof: "notify", T: () => exports.WindSeedClientNotify_AreaNotify }
        ]);
    }
    create(value) {
        const message = { notify: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.midnights.game.WindSeedClientNotify.RefreshNotify refresh_notify */ 14:
                    message.notify = {
                        oneofKind: "refreshNotify",
                        refreshNotify: exports.WindSeedClientNotify_RefreshNotify.internalBinaryRead(reader, reader.uint32(), options, message.notify.refreshNotify)
                    };
                    break;
                case /* com.midnights.game.WindSeedClientNotify.AddWindBulletNotify add_wind_bullet_notify */ 6:
                    message.notify = {
                        oneofKind: "addWindBulletNotify",
                        addWindBulletNotify: exports.WindSeedClientNotify_AddWindBulletNotify.internalBinaryRead(reader, reader.uint32(), options, message.notify.addWindBulletNotify)
                    };
                    break;
                case /* com.midnights.game.WindSeedClientNotify.AreaNotify area_notify */ 4:
                    message.notify = {
                        oneofKind: "areaNotify",
                        areaNotify: exports.WindSeedClientNotify_AreaNotify.internalBinaryRead(reader, reader.uint32(), options, message.notify.areaNotify)
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
        /* com.midnights.game.WindSeedClientNotify.RefreshNotify refresh_notify = 14; */
        if (message.notify.oneofKind === "refreshNotify")
            exports.WindSeedClientNotify_RefreshNotify.internalBinaryWrite(message.notify.refreshNotify, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WindSeedClientNotify.AddWindBulletNotify add_wind_bullet_notify = 6; */
        if (message.notify.oneofKind === "addWindBulletNotify")
            exports.WindSeedClientNotify_AddWindBulletNotify.internalBinaryWrite(message.notify.addWindBulletNotify, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WindSeedClientNotify.AreaNotify area_notify = 4; */
        if (message.notify.oneofKind === "areaNotify")
            exports.WindSeedClientNotify_AreaNotify.internalBinaryWrite(message.notify.areaNotify, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WindSeedClientNotify
 */
exports.WindSeedClientNotify = new WindSeedClientNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_RefreshNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WindSeedClientNotify.RefreshNotify", [
            { no: 9, name: "refresh_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 refresh_num */ 9:
                    message.refreshNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 refresh_num = 9; */
        if (message.refreshNum !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.refreshNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WindSeedClientNotify.RefreshNotify
 */
exports.WindSeedClientNotify_RefreshNotify = new WindSeedClientNotify_RefreshNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_AddWindBulletNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WindSeedClientNotify.AddWindBulletNotify", [
            { no: 6, name: "seed_pos", kind: "message", T: () => define_3.Vector },
            { no: 8, name: "catch_player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "seed_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector seed_pos */ 6:
                    message.seedPos = define_3.Vector.internalBinaryRead(reader, reader.uint32(), options, message.seedPos);
                    break;
                case /* optional uint32 catch_player_uid */ 8:
                    message.catchPlayerUid = reader.uint32();
                    break;
                case /* optional uint32 seed_entity_id */ 7:
                    message.seedEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector seed_pos = 6; */
        if (message.seedPos)
            define_3.Vector.internalBinaryWrite(message.seedPos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 catch_player_uid = 8; */
        if (message.catchPlayerUid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.catchPlayerUid);
        /* optional uint32 seed_entity_id = 7; */
        if (message.seedEntityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.seedEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WindSeedClientNotify.AddWindBulletNotify
 */
exports.WindSeedClientNotify_AddWindBulletNotify = new WindSeedClientNotify_AddWindBulletNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_AreaNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WindSeedClientNotify.AreaNotify", [
            { no: 5, name: "area_code", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 10, name: "area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "area_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bytes area_code */ 5:
                    message.areaCode = reader.bytes();
                    break;
                case /* optional uint32 area_id */ 10:
                    message.areaId = reader.uint32();
                    break;
                case /* optional uint32 area_type */ 7:
                    message.areaType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bytes area_code = 5; */
        if (message.areaCode !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).bytes(message.areaCode);
        /* optional uint32 area_id = 10; */
        if (message.areaId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.areaId);
        /* optional uint32 area_type = 7; */
        if (message.areaType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.areaType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WindSeedClientNotify.AreaNotify
 */
exports.WindSeedClientNotify_AreaNotify = new WindSeedClientNotify_AreaNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityChangeNotify", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "ability_control_block", kind: "message", T: () => define_1.AbilityControlBlock }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.AbilityControlBlock ability_control_block */ 15:
                    message.abilityControlBlock = define_1.AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.AbilityControlBlock ability_control_block = 15; */
        if (message.abilityControlBlock)
            define_1.AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityChangeNotify
 */
exports.AbilityChangeNotify = new AbilityChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientAbilityChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientAbilityChangeNotify", [
            { no: 9, name: "is_init_hash", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "invokes", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AbilityInvokeEntry }
        ]);
    }
    create(value) {
        const message = { invokes: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_init_hash */ 9:
                    message.isInitHash = reader.bool();
                    break;
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.AbilityInvokeEntry invokes */ 3:
                    message.invokes.push(exports.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_init_hash = 9; */
        if (message.isInitHash !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isInitHash);
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        /* repeated com.midnights.game.AbilityInvokeEntry invokes = 3; */
        for (let i = 0; i < message.invokes.length; i++)
            exports.AbilityInvokeEntry.internalBinaryWrite(message.invokes[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientAbilityChangeNotify
 */
exports.ClientAbilityChangeNotify = new ClientAbilityChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerUpdateGlobalValueNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerUpdateGlobalValueNotify", [
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "update_type", kind: "enum", opt: true, T: () => ["com.midnights.game.ServerUpdateGlobalValueNotify.UpdateType", ServerUpdateGlobalValueNotify_UpdateType] },
            { no: 3, name: "delta", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "key_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.ServerUpdateGlobalValueNotify.UpdateType update_type */ 13:
                    message.updateType = reader.int32();
                    break;
                case /* optional float delta */ 3:
                    message.delta = reader.float();
                    break;
                case /* optional uint32 key_hash */ 10:
                    message.keyHash = reader.uint32();
                    break;
                case /* optional float value */ 6:
                    message.value = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.ServerUpdateGlobalValueNotify.UpdateType update_type = 13; */
        if (message.updateType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.updateType);
        /* optional float delta = 3; */
        if (message.delta !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.delta);
        /* optional uint32 key_hash = 10; */
        if (message.keyHash !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.keyHash);
        /* optional float value = 6; */
        if (message.value !== undefined)
            writer.tag(6, runtime_1.WireType.Bit32).float(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerUpdateGlobalValueNotify
 */
exports.ServerUpdateGlobalValueNotify = new ServerUpdateGlobalValueNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerGlobalValueChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerGlobalValueChangeNotify", [
            { no: 6, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "key_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional float value */ 12:
                    message.value = reader.float();
                    break;
                case /* optional uint32 key_hash */ 13:
                    message.keyHash = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional float value = 12; */
        if (message.value !== undefined)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.value);
        /* optional uint32 key_hash = 13; */
        if (message.keyHash !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.keyHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerGlobalValueChangeNotify
 */
exports.ServerGlobalValueChangeNotify = new ServerGlobalValueChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientAIStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientAIStateNotify", [
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cur_tactic", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 cur_tactic */ 15:
                    message.curTactic = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 cur_tactic = 15; */
        if (message.curTactic !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.curTactic);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientAIStateNotify
 */
exports.ClientAIStateNotify = new ClientAIStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerCombatEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerCombatEndNotify", [
            { no: 14, name: "combat_end_type_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { combatEndTypeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 combat_end_type_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.combatEndTypeList.push(reader.uint32());
                    else
                        message.combatEndTypeList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 combat_end_type_list = 14; */
        for (let i = 0; i < message.combatEndTypeList.length; i++)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.combatEndTypeList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerCombatEndNotify
 */
exports.ServerCombatEndNotify = new ServerCombatEndNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientRemoveCombatEndModifierNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientRemoveCombatEndModifierNotify", [
            { no: 7, name: "combat_end_type_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { combatEndTypeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 combat_end_type_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.combatEndTypeList.push(reader.uint32());
                    else
                        message.combatEndTypeList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 combat_end_type_list = 7; */
        for (let i = 0; i < message.combatEndTypeList.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.combatEndTypeList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientRemoveCombatEndModifierNotify
 */
exports.ClientRemoveCombatEndModifierNotify = new ClientRemoveCombatEndModifierNotify$Type();
