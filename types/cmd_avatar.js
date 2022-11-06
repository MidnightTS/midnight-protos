"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarPromoteGetRewardRsp_CmdId = exports.AvatarPromoteGetRewardReq_CmdId = exports.AddNoGachaAvatarCardNotify_CmdId = exports.AvatarFetterLevelRewardRsp_CmdId = exports.AvatarFetterLevelRewardReq_CmdId = exports.AvatarEquipAffixStartNotify_CmdId = exports.AvatarGainFlycloakNotify_CmdId = exports.AvatarFlycloakChangeNotify_CmdId = exports.AvatarWearFlycloakRsp_CmdId = exports.AvatarWearFlycloakReq_CmdId = exports.AvatarSatiationDataNotify_CmdId = exports.FocusAvatarRsp_CmdId = exports.FocusAvatarReq_CmdId = exports.SceneTeamUpdateNotify_CmdId = exports.ChangeTeamNameRsp_CmdId = exports.ChangeTeamNameReq_CmdId = exports.ChangeMpTeamAvatarRsp_CmdId = exports.ChangeMpTeamAvatarReq_CmdId = exports.AvatarExpeditionGetRewardRsp_CmdId = exports.AvatarExpeditionGetRewardReq_CmdId = exports.AvatarExpeditionCallBackRsp_CmdId = exports.AvatarExpeditionCallBackReq_CmdId = exports.AvatarExpeditionStartRsp_CmdId = exports.AvatarExpeditionStartReq_CmdId = exports.AvatarExpeditionAllDataRsp_CmdId = exports.AvatarExpeditionAllDataReq_CmdId = exports.AvatarExpeditionDataNotify_CmdId = exports.AvatarFetterDataNotify_CmdId = exports.AvatarChangeElementTypeRsp_CmdId = exports.AvatarChangeElementTypeReq_CmdId = exports.AvatarDieAnimationEndRsp_CmdId = exports.AvatarDieAnimationEndReq_CmdId = exports.AvatarUpgradeRsp_CmdId = exports.AvatarUpgradeReq_CmdId = exports.AvatarDataNotify_CmdId = exports.AvatarTeamUpdateNotify_CmdId = exports.RefreshBackgroundAvatarRsp_CmdId = exports.RefreshBackgroundAvatarReq_CmdId = exports.SpringUseRsp_CmdId = exports.SpringUseReq_CmdId = exports.AvatarPromoteRsp_CmdId = exports.AvatarPromoteReq_CmdId = exports.ChangeAvatarRsp_CmdId = exports.ChangeAvatarReq_CmdId = exports.ChooseCurAvatarTeamRsp_CmdId = exports.ChooseCurAvatarTeamReq_CmdId = exports.SetUpAvatarTeamRsp_CmdId = exports.SetUpAvatarTeamReq_CmdId = exports.AvatarDelNotify_CmdId = exports.AvatarAddNotify_CmdId = void 0;
exports.ChangeTeamNameRsp = exports.ChangeTeamNameReq = exports.ChangeMpTeamAvatarRsp = exports.ChangeMpTeamAvatarReq = exports.AvatarExpeditionGetRewardRsp = exports.AvatarExpeditionGetRewardReq = exports.AvatarExpeditionCallBackRsp = exports.AvatarExpeditionCallBackReq = exports.AvatarExpeditionStartRsp = exports.AvatarExpeditionStartReq = exports.AvatarExpeditionAllDataRsp = exports.AvatarExpeditionAllDataReq = exports.AvatarExpeditionDataNotify = exports.AvatarFetterDataNotify = exports.AvatarChangeElementTypeRsp = exports.AvatarChangeElementTypeReq = exports.AvatarDieAnimationEndRsp = exports.AvatarDieAnimationEndReq = exports.AvatarUpgradeRsp = exports.AvatarUpgradeReq = exports.AvatarDataNotify = exports.AvatarTeamUpdateNotify = exports.RefreshBackgroundAvatarRsp = exports.RefreshBackgroundAvatarReq = exports.SpringUseRsp = exports.SpringUseReq = exports.AvatarPromoteRsp = exports.AvatarPromoteReq = exports.ChangeAvatarRsp = exports.ChangeAvatarReq = exports.ChooseCurAvatarTeamRsp = exports.ChooseCurAvatarTeamReq = exports.SetUpAvatarTeamRsp = exports.SetUpAvatarTeamReq = exports.AvatarTeam = exports.AvatarDelNotify = exports.AvatarAddNotify = exports.AvatarTeamAllDataNotify_CmdId = exports.DelBackupAvatarTeamRsp_CmdId = exports.DelBackupAvatarTeamReq_CmdId = exports.AddBackupAvatarTeamRsp_CmdId = exports.AddBackupAvatarTeamReq_CmdId = exports.PersistentDungeonSwitchAvatarRsp_CmdId = exports.PersistentDungeonSwitchAvatarReq_CmdId = exports.AvatarChangeAnimHashRsp_CmdId = exports.AvatarChangeAnimHashReq_CmdId = exports.AvatarGainCostumeNotify_CmdId = exports.AvatarChangeCostumeNotify_CmdId = exports.AvatarChangeCostumeRsp_CmdId = exports.AvatarChangeCostumeReq_CmdId = void 0;
exports.AvatarTeamAllDataNotify = exports.DelBackupAvatarTeamRsp = exports.DelBackupAvatarTeamReq = exports.AddBackupAvatarTeamRsp = exports.AddBackupAvatarTeamReq = exports.PersistentDungeonSwitchAvatarRsp = exports.PersistentDungeonSwitchAvatarReq = exports.AvatarChangeAnimHashRsp = exports.AvatarChangeAnimHashReq = exports.AvatarGainCostumeNotify = exports.AvatarChangeCostumeNotify = exports.AvatarChangeCostumeRsp = exports.AvatarChangeCostumeReq = exports.AvatarPromoteGetRewardRsp = exports.AvatarPromoteGetRewardReq = exports.AddNoGachaAvatarCardNotify = exports.AddNoGachaAvatarCardTransferItem = exports.AvatarFetterLevelRewardRsp = exports.AvatarFetterLevelRewardReq = exports.AvatarEquipAffixStartNotify = exports.AvatarGainFlycloakNotify = exports.AvatarFlycloakChangeNotify = exports.AvatarWearFlycloakRsp = exports.AvatarWearFlycloakReq = exports.AvatarSatiationDataNotify = exports.AvatarSatiationData = exports.FocusAvatarRsp = exports.FocusAvatarReq = exports.SceneTeamUpdateNotify = exports.SceneTeamAvatar = void 0;
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
 * @generated from protobuf enum com.midnights.game.AvatarAddNotify.CmdId
 */
var AvatarAddNotify_CmdId;
(function (AvatarAddNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarAddNotify_CmdId[AvatarAddNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1769;
     */
    AvatarAddNotify_CmdId[AvatarAddNotify_CmdId["CMD_ID"] = 1769] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarAddNotify_CmdId[AvatarAddNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarAddNotify_CmdId[AvatarAddNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarAddNotify_CmdId = exports.AvatarAddNotify_CmdId || (exports.AvatarAddNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarDelNotify.CmdId
 */
var AvatarDelNotify_CmdId;
(function (AvatarDelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDelNotify_CmdId[AvatarDelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1773;
     */
    AvatarDelNotify_CmdId[AvatarDelNotify_CmdId["CMD_ID"] = 1773] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDelNotify_CmdId[AvatarDelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarDelNotify_CmdId[AvatarDelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarDelNotify_CmdId = exports.AvatarDelNotify_CmdId || (exports.AvatarDelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetUpAvatarTeamReq.CmdId
 */
var SetUpAvatarTeamReq_CmdId;
(function (SetUpAvatarTeamReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpAvatarTeamReq_CmdId[SetUpAvatarTeamReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1690;
     */
    SetUpAvatarTeamReq_CmdId[SetUpAvatarTeamReq_CmdId["CMD_ID"] = 1690] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpAvatarTeamReq_CmdId[SetUpAvatarTeamReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetUpAvatarTeamReq_CmdId[SetUpAvatarTeamReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetUpAvatarTeamReq_CmdId[SetUpAvatarTeamReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetUpAvatarTeamReq_CmdId = exports.SetUpAvatarTeamReq_CmdId || (exports.SetUpAvatarTeamReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetUpAvatarTeamRsp.CmdId
 */
var SetUpAvatarTeamRsp_CmdId;
(function (SetUpAvatarTeamRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpAvatarTeamRsp_CmdId[SetUpAvatarTeamRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1646;
     */
    SetUpAvatarTeamRsp_CmdId[SetUpAvatarTeamRsp_CmdId["CMD_ID"] = 1646] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetUpAvatarTeamRsp_CmdId[SetUpAvatarTeamRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetUpAvatarTeamRsp_CmdId[SetUpAvatarTeamRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetUpAvatarTeamRsp_CmdId = exports.SetUpAvatarTeamRsp_CmdId || (exports.SetUpAvatarTeamRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChooseCurAvatarTeamReq.CmdId
 */
var ChooseCurAvatarTeamReq_CmdId;
(function (ChooseCurAvatarTeamReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChooseCurAvatarTeamReq_CmdId[ChooseCurAvatarTeamReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1796;
     */
    ChooseCurAvatarTeamReq_CmdId[ChooseCurAvatarTeamReq_CmdId["CMD_ID"] = 1796] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChooseCurAvatarTeamReq_CmdId[ChooseCurAvatarTeamReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChooseCurAvatarTeamReq_CmdId[ChooseCurAvatarTeamReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChooseCurAvatarTeamReq_CmdId[ChooseCurAvatarTeamReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChooseCurAvatarTeamReq_CmdId = exports.ChooseCurAvatarTeamReq_CmdId || (exports.ChooseCurAvatarTeamReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChooseCurAvatarTeamRsp.CmdId
 */
var ChooseCurAvatarTeamRsp_CmdId;
(function (ChooseCurAvatarTeamRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChooseCurAvatarTeamRsp_CmdId[ChooseCurAvatarTeamRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1661;
     */
    ChooseCurAvatarTeamRsp_CmdId[ChooseCurAvatarTeamRsp_CmdId["CMD_ID"] = 1661] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChooseCurAvatarTeamRsp_CmdId[ChooseCurAvatarTeamRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChooseCurAvatarTeamRsp_CmdId[ChooseCurAvatarTeamRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChooseCurAvatarTeamRsp_CmdId = exports.ChooseCurAvatarTeamRsp_CmdId || (exports.ChooseCurAvatarTeamRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeAvatarReq.CmdId
 */
var ChangeAvatarReq_CmdId;
(function (ChangeAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeAvatarReq_CmdId[ChangeAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1640;
     */
    ChangeAvatarReq_CmdId[ChangeAvatarReq_CmdId["CMD_ID"] = 1640] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeAvatarReq_CmdId[ChangeAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeAvatarReq_CmdId[ChangeAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeAvatarReq_CmdId[ChangeAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeAvatarReq_CmdId = exports.ChangeAvatarReq_CmdId || (exports.ChangeAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeAvatarRsp.CmdId
 */
var ChangeAvatarRsp_CmdId;
(function (ChangeAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeAvatarRsp_CmdId[ChangeAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1607;
     */
    ChangeAvatarRsp_CmdId[ChangeAvatarRsp_CmdId["CMD_ID"] = 1607] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeAvatarRsp_CmdId[ChangeAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeAvatarRsp_CmdId[ChangeAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChangeAvatarRsp_CmdId = exports.ChangeAvatarRsp_CmdId || (exports.ChangeAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarPromoteReq.CmdId
 */
var AvatarPromoteReq_CmdId;
(function (AvatarPromoteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteReq_CmdId[AvatarPromoteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1664;
     */
    AvatarPromoteReq_CmdId[AvatarPromoteReq_CmdId["CMD_ID"] = 1664] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteReq_CmdId[AvatarPromoteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPromoteReq_CmdId[AvatarPromoteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPromoteReq_CmdId[AvatarPromoteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarPromoteReq_CmdId = exports.AvatarPromoteReq_CmdId || (exports.AvatarPromoteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarPromoteRsp.CmdId
 */
var AvatarPromoteRsp_CmdId;
(function (AvatarPromoteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteRsp_CmdId[AvatarPromoteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1639;
     */
    AvatarPromoteRsp_CmdId[AvatarPromoteRsp_CmdId["CMD_ID"] = 1639] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteRsp_CmdId[AvatarPromoteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPromoteRsp_CmdId[AvatarPromoteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarPromoteRsp_CmdId = exports.AvatarPromoteRsp_CmdId || (exports.AvatarPromoteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SpringUseReq.CmdId
 */
var SpringUseReq_CmdId;
(function (SpringUseReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SpringUseReq_CmdId[SpringUseReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1748;
     */
    SpringUseReq_CmdId[SpringUseReq_CmdId["CMD_ID"] = 1748] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SpringUseReq_CmdId[SpringUseReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SpringUseReq_CmdId[SpringUseReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SpringUseReq_CmdId[SpringUseReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SpringUseReq_CmdId = exports.SpringUseReq_CmdId || (exports.SpringUseReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SpringUseRsp.CmdId
 */
var SpringUseRsp_CmdId;
(function (SpringUseRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SpringUseRsp_CmdId[SpringUseRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1642;
     */
    SpringUseRsp_CmdId[SpringUseRsp_CmdId["CMD_ID"] = 1642] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SpringUseRsp_CmdId[SpringUseRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SpringUseRsp_CmdId[SpringUseRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SpringUseRsp_CmdId = exports.SpringUseRsp_CmdId || (exports.SpringUseRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RefreshBackgroundAvatarReq.CmdId
 */
var RefreshBackgroundAvatarReq_CmdId;
(function (RefreshBackgroundAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RefreshBackgroundAvatarReq_CmdId[RefreshBackgroundAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1743;
     */
    RefreshBackgroundAvatarReq_CmdId[RefreshBackgroundAvatarReq_CmdId["CMD_ID"] = 1743] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RefreshBackgroundAvatarReq_CmdId[RefreshBackgroundAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RefreshBackgroundAvatarReq_CmdId[RefreshBackgroundAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RefreshBackgroundAvatarReq_CmdId[RefreshBackgroundAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RefreshBackgroundAvatarReq_CmdId = exports.RefreshBackgroundAvatarReq_CmdId || (exports.RefreshBackgroundAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RefreshBackgroundAvatarRsp.CmdId
 */
var RefreshBackgroundAvatarRsp_CmdId;
(function (RefreshBackgroundAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RefreshBackgroundAvatarRsp_CmdId[RefreshBackgroundAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1800;
     */
    RefreshBackgroundAvatarRsp_CmdId[RefreshBackgroundAvatarRsp_CmdId["CMD_ID"] = 1800] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RefreshBackgroundAvatarRsp_CmdId[RefreshBackgroundAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RefreshBackgroundAvatarRsp_CmdId[RefreshBackgroundAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RefreshBackgroundAvatarRsp_CmdId = exports.RefreshBackgroundAvatarRsp_CmdId || (exports.RefreshBackgroundAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarTeamUpdateNotify.CmdId
 */
var AvatarTeamUpdateNotify_CmdId;
(function (AvatarTeamUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarTeamUpdateNotify_CmdId[AvatarTeamUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1706;
     */
    AvatarTeamUpdateNotify_CmdId[AvatarTeamUpdateNotify_CmdId["CMD_ID"] = 1706] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarTeamUpdateNotify_CmdId[AvatarTeamUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarTeamUpdateNotify_CmdId[AvatarTeamUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarTeamUpdateNotify_CmdId = exports.AvatarTeamUpdateNotify_CmdId || (exports.AvatarTeamUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarDataNotify.CmdId
 */
var AvatarDataNotify_CmdId;
(function (AvatarDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1633;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["CMD_ID"] = 1633] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarDataNotify_CmdId[AvatarDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarDataNotify_CmdId = exports.AvatarDataNotify_CmdId || (exports.AvatarDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarUpgradeReq.CmdId
 */
var AvatarUpgradeReq_CmdId;
(function (AvatarUpgradeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarUpgradeReq_CmdId[AvatarUpgradeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1770;
     */
    AvatarUpgradeReq_CmdId[AvatarUpgradeReq_CmdId["CMD_ID"] = 1770] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarUpgradeReq_CmdId[AvatarUpgradeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarUpgradeReq_CmdId[AvatarUpgradeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarUpgradeReq_CmdId[AvatarUpgradeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarUpgradeReq_CmdId = exports.AvatarUpgradeReq_CmdId || (exports.AvatarUpgradeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarUpgradeRsp.CmdId
 */
var AvatarUpgradeRsp_CmdId;
(function (AvatarUpgradeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarUpgradeRsp_CmdId[AvatarUpgradeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1701;
     */
    AvatarUpgradeRsp_CmdId[AvatarUpgradeRsp_CmdId["CMD_ID"] = 1701] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarUpgradeRsp_CmdId[AvatarUpgradeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarUpgradeRsp_CmdId[AvatarUpgradeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarUpgradeRsp_CmdId = exports.AvatarUpgradeRsp_CmdId || (exports.AvatarUpgradeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarDieAnimationEndReq.CmdId
 */
var AvatarDieAnimationEndReq_CmdId;
(function (AvatarDieAnimationEndReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDieAnimationEndReq_CmdId[AvatarDieAnimationEndReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1610;
     */
    AvatarDieAnimationEndReq_CmdId[AvatarDieAnimationEndReq_CmdId["CMD_ID"] = 1610] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDieAnimationEndReq_CmdId[AvatarDieAnimationEndReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarDieAnimationEndReq_CmdId[AvatarDieAnimationEndReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarDieAnimationEndReq_CmdId[AvatarDieAnimationEndReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarDieAnimationEndReq_CmdId = exports.AvatarDieAnimationEndReq_CmdId || (exports.AvatarDieAnimationEndReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarDieAnimationEndRsp.CmdId
 */
var AvatarDieAnimationEndRsp_CmdId;
(function (AvatarDieAnimationEndRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDieAnimationEndRsp_CmdId[AvatarDieAnimationEndRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1694;
     */
    AvatarDieAnimationEndRsp_CmdId[AvatarDieAnimationEndRsp_CmdId["CMD_ID"] = 1694] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarDieAnimationEndRsp_CmdId[AvatarDieAnimationEndRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarDieAnimationEndRsp_CmdId[AvatarDieAnimationEndRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarDieAnimationEndRsp_CmdId = exports.AvatarDieAnimationEndRsp_CmdId || (exports.AvatarDieAnimationEndRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarChangeElementTypeReq.CmdId
 */
var AvatarChangeElementTypeReq_CmdId;
(function (AvatarChangeElementTypeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeElementTypeReq_CmdId[AvatarChangeElementTypeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1785;
     */
    AvatarChangeElementTypeReq_CmdId[AvatarChangeElementTypeReq_CmdId["CMD_ID"] = 1785] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeElementTypeReq_CmdId[AvatarChangeElementTypeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeElementTypeReq_CmdId[AvatarChangeElementTypeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeElementTypeReq_CmdId[AvatarChangeElementTypeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarChangeElementTypeReq_CmdId = exports.AvatarChangeElementTypeReq_CmdId || (exports.AvatarChangeElementTypeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarChangeElementTypeRsp.CmdId
 */
var AvatarChangeElementTypeRsp_CmdId;
(function (AvatarChangeElementTypeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeElementTypeRsp_CmdId[AvatarChangeElementTypeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1651;
     */
    AvatarChangeElementTypeRsp_CmdId[AvatarChangeElementTypeRsp_CmdId["CMD_ID"] = 1651] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeElementTypeRsp_CmdId[AvatarChangeElementTypeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeElementTypeRsp_CmdId[AvatarChangeElementTypeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarChangeElementTypeRsp_CmdId = exports.AvatarChangeElementTypeRsp_CmdId || (exports.AvatarChangeElementTypeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarFetterDataNotify.CmdId
 */
var AvatarFetterDataNotify_CmdId;
(function (AvatarFetterDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFetterDataNotify_CmdId[AvatarFetterDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1782;
     */
    AvatarFetterDataNotify_CmdId[AvatarFetterDataNotify_CmdId["CMD_ID"] = 1782] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFetterDataNotify_CmdId[AvatarFetterDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFetterDataNotify_CmdId[AvatarFetterDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarFetterDataNotify_CmdId = exports.AvatarFetterDataNotify_CmdId || (exports.AvatarFetterDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionDataNotify.CmdId
 */
var AvatarExpeditionDataNotify_CmdId;
(function (AvatarExpeditionDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionDataNotify_CmdId[AvatarExpeditionDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1771;
     */
    AvatarExpeditionDataNotify_CmdId[AvatarExpeditionDataNotify_CmdId["CMD_ID"] = 1771] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionDataNotify_CmdId[AvatarExpeditionDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionDataNotify_CmdId[AvatarExpeditionDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarExpeditionDataNotify_CmdId = exports.AvatarExpeditionDataNotify_CmdId || (exports.AvatarExpeditionDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionAllDataReq.CmdId
 */
var AvatarExpeditionAllDataReq_CmdId;
(function (AvatarExpeditionAllDataReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionAllDataReq_CmdId[AvatarExpeditionAllDataReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1722;
     */
    AvatarExpeditionAllDataReq_CmdId[AvatarExpeditionAllDataReq_CmdId["CMD_ID"] = 1722] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionAllDataReq_CmdId[AvatarExpeditionAllDataReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionAllDataReq_CmdId[AvatarExpeditionAllDataReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionAllDataReq_CmdId[AvatarExpeditionAllDataReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarExpeditionAllDataReq_CmdId = exports.AvatarExpeditionAllDataReq_CmdId || (exports.AvatarExpeditionAllDataReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionAllDataRsp.CmdId
 */
var AvatarExpeditionAllDataRsp_CmdId;
(function (AvatarExpeditionAllDataRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionAllDataRsp_CmdId[AvatarExpeditionAllDataRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1648;
     */
    AvatarExpeditionAllDataRsp_CmdId[AvatarExpeditionAllDataRsp_CmdId["CMD_ID"] = 1648] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionAllDataRsp_CmdId[AvatarExpeditionAllDataRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionAllDataRsp_CmdId[AvatarExpeditionAllDataRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarExpeditionAllDataRsp_CmdId = exports.AvatarExpeditionAllDataRsp_CmdId || (exports.AvatarExpeditionAllDataRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionStartReq.CmdId
 */
var AvatarExpeditionStartReq_CmdId;
(function (AvatarExpeditionStartReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionStartReq_CmdId[AvatarExpeditionStartReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1715;
     */
    AvatarExpeditionStartReq_CmdId[AvatarExpeditionStartReq_CmdId["CMD_ID"] = 1715] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionStartReq_CmdId[AvatarExpeditionStartReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionStartReq_CmdId[AvatarExpeditionStartReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionStartReq_CmdId[AvatarExpeditionStartReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarExpeditionStartReq_CmdId = exports.AvatarExpeditionStartReq_CmdId || (exports.AvatarExpeditionStartReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionStartRsp.CmdId
 */
var AvatarExpeditionStartRsp_CmdId;
(function (AvatarExpeditionStartRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionStartRsp_CmdId[AvatarExpeditionStartRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1719;
     */
    AvatarExpeditionStartRsp_CmdId[AvatarExpeditionStartRsp_CmdId["CMD_ID"] = 1719] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionStartRsp_CmdId[AvatarExpeditionStartRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionStartRsp_CmdId[AvatarExpeditionStartRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarExpeditionStartRsp_CmdId = exports.AvatarExpeditionStartRsp_CmdId || (exports.AvatarExpeditionStartRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionCallBackReq.CmdId
 */
var AvatarExpeditionCallBackReq_CmdId;
(function (AvatarExpeditionCallBackReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionCallBackReq_CmdId[AvatarExpeditionCallBackReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1752;
     */
    AvatarExpeditionCallBackReq_CmdId[AvatarExpeditionCallBackReq_CmdId["CMD_ID"] = 1752] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionCallBackReq_CmdId[AvatarExpeditionCallBackReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionCallBackReq_CmdId[AvatarExpeditionCallBackReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionCallBackReq_CmdId[AvatarExpeditionCallBackReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarExpeditionCallBackReq_CmdId = exports.AvatarExpeditionCallBackReq_CmdId || (exports.AvatarExpeditionCallBackReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionCallBackRsp.CmdId
 */
var AvatarExpeditionCallBackRsp_CmdId;
(function (AvatarExpeditionCallBackRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionCallBackRsp_CmdId[AvatarExpeditionCallBackRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1726;
     */
    AvatarExpeditionCallBackRsp_CmdId[AvatarExpeditionCallBackRsp_CmdId["CMD_ID"] = 1726] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionCallBackRsp_CmdId[AvatarExpeditionCallBackRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionCallBackRsp_CmdId[AvatarExpeditionCallBackRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarExpeditionCallBackRsp_CmdId = exports.AvatarExpeditionCallBackRsp_CmdId || (exports.AvatarExpeditionCallBackRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionGetRewardReq.CmdId
 */
var AvatarExpeditionGetRewardReq_CmdId;
(function (AvatarExpeditionGetRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionGetRewardReq_CmdId[AvatarExpeditionGetRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1623;
     */
    AvatarExpeditionGetRewardReq_CmdId[AvatarExpeditionGetRewardReq_CmdId["CMD_ID"] = 1623] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionGetRewardReq_CmdId[AvatarExpeditionGetRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionGetRewardReq_CmdId[AvatarExpeditionGetRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionGetRewardReq_CmdId[AvatarExpeditionGetRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarExpeditionGetRewardReq_CmdId = exports.AvatarExpeditionGetRewardReq_CmdId || (exports.AvatarExpeditionGetRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarExpeditionGetRewardRsp.CmdId
 */
var AvatarExpeditionGetRewardRsp_CmdId;
(function (AvatarExpeditionGetRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionGetRewardRsp_CmdId[AvatarExpeditionGetRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1784;
     */
    AvatarExpeditionGetRewardRsp_CmdId[AvatarExpeditionGetRewardRsp_CmdId["CMD_ID"] = 1784] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarExpeditionGetRewardRsp_CmdId[AvatarExpeditionGetRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarExpeditionGetRewardRsp_CmdId[AvatarExpeditionGetRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarExpeditionGetRewardRsp_CmdId = exports.AvatarExpeditionGetRewardRsp_CmdId || (exports.AvatarExpeditionGetRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeMpTeamAvatarReq.CmdId
 */
var ChangeMpTeamAvatarReq_CmdId;
(function (ChangeMpTeamAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeMpTeamAvatarReq_CmdId[ChangeMpTeamAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1708;
     */
    ChangeMpTeamAvatarReq_CmdId[ChangeMpTeamAvatarReq_CmdId["CMD_ID"] = 1708] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeMpTeamAvatarReq_CmdId[ChangeMpTeamAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeMpTeamAvatarReq_CmdId[ChangeMpTeamAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeMpTeamAvatarReq_CmdId[ChangeMpTeamAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeMpTeamAvatarReq_CmdId = exports.ChangeMpTeamAvatarReq_CmdId || (exports.ChangeMpTeamAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeMpTeamAvatarRsp.CmdId
 */
var ChangeMpTeamAvatarRsp_CmdId;
(function (ChangeMpTeamAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeMpTeamAvatarRsp_CmdId[ChangeMpTeamAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1753;
     */
    ChangeMpTeamAvatarRsp_CmdId[ChangeMpTeamAvatarRsp_CmdId["CMD_ID"] = 1753] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeMpTeamAvatarRsp_CmdId[ChangeMpTeamAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeMpTeamAvatarRsp_CmdId[ChangeMpTeamAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChangeMpTeamAvatarRsp_CmdId = exports.ChangeMpTeamAvatarRsp_CmdId || (exports.ChangeMpTeamAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeTeamNameReq.CmdId
 */
var ChangeTeamNameReq_CmdId;
(function (ChangeTeamNameReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeTeamNameReq_CmdId[ChangeTeamNameReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1603;
     */
    ChangeTeamNameReq_CmdId[ChangeTeamNameReq_CmdId["CMD_ID"] = 1603] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeTeamNameReq_CmdId[ChangeTeamNameReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeTeamNameReq_CmdId[ChangeTeamNameReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeTeamNameReq_CmdId[ChangeTeamNameReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeTeamNameReq_CmdId = exports.ChangeTeamNameReq_CmdId || (exports.ChangeTeamNameReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeTeamNameRsp.CmdId
 */
var ChangeTeamNameRsp_CmdId;
(function (ChangeTeamNameRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeTeamNameRsp_CmdId[ChangeTeamNameRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1666;
     */
    ChangeTeamNameRsp_CmdId[ChangeTeamNameRsp_CmdId["CMD_ID"] = 1666] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeTeamNameRsp_CmdId[ChangeTeamNameRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeTeamNameRsp_CmdId[ChangeTeamNameRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChangeTeamNameRsp_CmdId = exports.ChangeTeamNameRsp_CmdId || (exports.ChangeTeamNameRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SceneTeamUpdateNotify.CmdId
 */
var SceneTeamUpdateNotify_CmdId;
(function (SceneTeamUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1775;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["CMD_ID"] = 1775] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SceneTeamUpdateNotify_CmdId[SceneTeamUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SceneTeamUpdateNotify_CmdId = exports.SceneTeamUpdateNotify_CmdId || (exports.SceneTeamUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FocusAvatarReq.CmdId
 */
var FocusAvatarReq_CmdId;
(function (FocusAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FocusAvatarReq_CmdId[FocusAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1654;
     */
    FocusAvatarReq_CmdId[FocusAvatarReq_CmdId["CMD_ID"] = 1654] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FocusAvatarReq_CmdId[FocusAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FocusAvatarReq_CmdId[FocusAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FocusAvatarReq_CmdId[FocusAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(FocusAvatarReq_CmdId = exports.FocusAvatarReq_CmdId || (exports.FocusAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FocusAvatarRsp.CmdId
 */
var FocusAvatarRsp_CmdId;
(function (FocusAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FocusAvatarRsp_CmdId[FocusAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1681;
     */
    FocusAvatarRsp_CmdId[FocusAvatarRsp_CmdId["CMD_ID"] = 1681] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FocusAvatarRsp_CmdId[FocusAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FocusAvatarRsp_CmdId[FocusAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FocusAvatarRsp_CmdId = exports.FocusAvatarRsp_CmdId || (exports.FocusAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarSatiationDataNotify.CmdId
 */
var AvatarSatiationDataNotify_CmdId;
(function (AvatarSatiationDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSatiationDataNotify_CmdId[AvatarSatiationDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1693;
     */
    AvatarSatiationDataNotify_CmdId[AvatarSatiationDataNotify_CmdId["CMD_ID"] = 1693] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSatiationDataNotify_CmdId[AvatarSatiationDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSatiationDataNotify_CmdId[AvatarSatiationDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarSatiationDataNotify_CmdId = exports.AvatarSatiationDataNotify_CmdId || (exports.AvatarSatiationDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarWearFlycloakReq.CmdId
 */
var AvatarWearFlycloakReq_CmdId;
(function (AvatarWearFlycloakReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarWearFlycloakReq_CmdId[AvatarWearFlycloakReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1737;
     */
    AvatarWearFlycloakReq_CmdId[AvatarWearFlycloakReq_CmdId["CMD_ID"] = 1737] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarWearFlycloakReq_CmdId[AvatarWearFlycloakReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarWearFlycloakReq_CmdId[AvatarWearFlycloakReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarWearFlycloakReq_CmdId[AvatarWearFlycloakReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarWearFlycloakReq_CmdId = exports.AvatarWearFlycloakReq_CmdId || (exports.AvatarWearFlycloakReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarWearFlycloakRsp.CmdId
 */
var AvatarWearFlycloakRsp_CmdId;
(function (AvatarWearFlycloakRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarWearFlycloakRsp_CmdId[AvatarWearFlycloakRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1698;
     */
    AvatarWearFlycloakRsp_CmdId[AvatarWearFlycloakRsp_CmdId["CMD_ID"] = 1698] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarWearFlycloakRsp_CmdId[AvatarWearFlycloakRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarWearFlycloakRsp_CmdId[AvatarWearFlycloakRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarWearFlycloakRsp_CmdId = exports.AvatarWearFlycloakRsp_CmdId || (exports.AvatarWearFlycloakRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarFlycloakChangeNotify.CmdId
 */
var AvatarFlycloakChangeNotify_CmdId;
(function (AvatarFlycloakChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFlycloakChangeNotify_CmdId[AvatarFlycloakChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1643;
     */
    AvatarFlycloakChangeNotify_CmdId[AvatarFlycloakChangeNotify_CmdId["CMD_ID"] = 1643] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFlycloakChangeNotify_CmdId[AvatarFlycloakChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFlycloakChangeNotify_CmdId[AvatarFlycloakChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarFlycloakChangeNotify_CmdId = exports.AvatarFlycloakChangeNotify_CmdId || (exports.AvatarFlycloakChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarGainFlycloakNotify.CmdId
 */
var AvatarGainFlycloakNotify_CmdId;
(function (AvatarGainFlycloakNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarGainFlycloakNotify_CmdId[AvatarGainFlycloakNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1656;
     */
    AvatarGainFlycloakNotify_CmdId[AvatarGainFlycloakNotify_CmdId["CMD_ID"] = 1656] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarGainFlycloakNotify_CmdId[AvatarGainFlycloakNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarGainFlycloakNotify_CmdId[AvatarGainFlycloakNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarGainFlycloakNotify_CmdId = exports.AvatarGainFlycloakNotify_CmdId || (exports.AvatarGainFlycloakNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarEquipAffixStartNotify.CmdId
 */
var AvatarEquipAffixStartNotify_CmdId;
(function (AvatarEquipAffixStartNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarEquipAffixStartNotify_CmdId[AvatarEquipAffixStartNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1662;
     */
    AvatarEquipAffixStartNotify_CmdId[AvatarEquipAffixStartNotify_CmdId["CMD_ID"] = 1662] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarEquipAffixStartNotify_CmdId[AvatarEquipAffixStartNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarEquipAffixStartNotify_CmdId[AvatarEquipAffixStartNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarEquipAffixStartNotify_CmdId = exports.AvatarEquipAffixStartNotify_CmdId || (exports.AvatarEquipAffixStartNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarFetterLevelRewardReq.CmdId
 */
var AvatarFetterLevelRewardReq_CmdId;
(function (AvatarFetterLevelRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFetterLevelRewardReq_CmdId[AvatarFetterLevelRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1653;
     */
    AvatarFetterLevelRewardReq_CmdId[AvatarFetterLevelRewardReq_CmdId["CMD_ID"] = 1653] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFetterLevelRewardReq_CmdId[AvatarFetterLevelRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFetterLevelRewardReq_CmdId[AvatarFetterLevelRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFetterLevelRewardReq_CmdId[AvatarFetterLevelRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarFetterLevelRewardReq_CmdId = exports.AvatarFetterLevelRewardReq_CmdId || (exports.AvatarFetterLevelRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarFetterLevelRewardRsp.CmdId
 */
var AvatarFetterLevelRewardRsp_CmdId;
(function (AvatarFetterLevelRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFetterLevelRewardRsp_CmdId[AvatarFetterLevelRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1606;
     */
    AvatarFetterLevelRewardRsp_CmdId[AvatarFetterLevelRewardRsp_CmdId["CMD_ID"] = 1606] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFetterLevelRewardRsp_CmdId[AvatarFetterLevelRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFetterLevelRewardRsp_CmdId[AvatarFetterLevelRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarFetterLevelRewardRsp_CmdId = exports.AvatarFetterLevelRewardRsp_CmdId || (exports.AvatarFetterLevelRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddNoGachaAvatarCardNotify.CmdId
 */
var AddNoGachaAvatarCardNotify_CmdId;
(function (AddNoGachaAvatarCardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddNoGachaAvatarCardNotify_CmdId[AddNoGachaAvatarCardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1655;
     */
    AddNoGachaAvatarCardNotify_CmdId[AddNoGachaAvatarCardNotify_CmdId["CMD_ID"] = 1655] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddNoGachaAvatarCardNotify_CmdId[AddNoGachaAvatarCardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddNoGachaAvatarCardNotify_CmdId[AddNoGachaAvatarCardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AddNoGachaAvatarCardNotify_CmdId = exports.AddNoGachaAvatarCardNotify_CmdId || (exports.AddNoGachaAvatarCardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarPromoteGetRewardReq.CmdId
 */
var AvatarPromoteGetRewardReq_CmdId;
(function (AvatarPromoteGetRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteGetRewardReq_CmdId[AvatarPromoteGetRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1696;
     */
    AvatarPromoteGetRewardReq_CmdId[AvatarPromoteGetRewardReq_CmdId["CMD_ID"] = 1696] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteGetRewardReq_CmdId[AvatarPromoteGetRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPromoteGetRewardReq_CmdId[AvatarPromoteGetRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPromoteGetRewardReq_CmdId[AvatarPromoteGetRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarPromoteGetRewardReq_CmdId = exports.AvatarPromoteGetRewardReq_CmdId || (exports.AvatarPromoteGetRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarPromoteGetRewardRsp.CmdId
 */
var AvatarPromoteGetRewardRsp_CmdId;
(function (AvatarPromoteGetRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteGetRewardRsp_CmdId[AvatarPromoteGetRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1683;
     */
    AvatarPromoteGetRewardRsp_CmdId[AvatarPromoteGetRewardRsp_CmdId["CMD_ID"] = 1683] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPromoteGetRewardRsp_CmdId[AvatarPromoteGetRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPromoteGetRewardRsp_CmdId[AvatarPromoteGetRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarPromoteGetRewardRsp_CmdId = exports.AvatarPromoteGetRewardRsp_CmdId || (exports.AvatarPromoteGetRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarChangeCostumeReq.CmdId
 */
var AvatarChangeCostumeReq_CmdId;
(function (AvatarChangeCostumeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeCostumeReq_CmdId[AvatarChangeCostumeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1778;
     */
    AvatarChangeCostumeReq_CmdId[AvatarChangeCostumeReq_CmdId["CMD_ID"] = 1778] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeCostumeReq_CmdId[AvatarChangeCostumeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeCostumeReq_CmdId[AvatarChangeCostumeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeCostumeReq_CmdId[AvatarChangeCostumeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarChangeCostumeReq_CmdId = exports.AvatarChangeCostumeReq_CmdId || (exports.AvatarChangeCostumeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarChangeCostumeRsp.CmdId
 */
var AvatarChangeCostumeRsp_CmdId;
(function (AvatarChangeCostumeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeCostumeRsp_CmdId[AvatarChangeCostumeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1645;
     */
    AvatarChangeCostumeRsp_CmdId[AvatarChangeCostumeRsp_CmdId["CMD_ID"] = 1645] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeCostumeRsp_CmdId[AvatarChangeCostumeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeCostumeRsp_CmdId[AvatarChangeCostumeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarChangeCostumeRsp_CmdId = exports.AvatarChangeCostumeRsp_CmdId || (exports.AvatarChangeCostumeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarChangeCostumeNotify.CmdId
 */
var AvatarChangeCostumeNotify_CmdId;
(function (AvatarChangeCostumeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeCostumeNotify_CmdId[AvatarChangeCostumeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1644;
     */
    AvatarChangeCostumeNotify_CmdId[AvatarChangeCostumeNotify_CmdId["CMD_ID"] = 1644] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeCostumeNotify_CmdId[AvatarChangeCostumeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeCostumeNotify_CmdId[AvatarChangeCostumeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarChangeCostumeNotify_CmdId = exports.AvatarChangeCostumeNotify_CmdId || (exports.AvatarChangeCostumeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarGainCostumeNotify.CmdId
 */
var AvatarGainCostumeNotify_CmdId;
(function (AvatarGainCostumeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarGainCostumeNotify_CmdId[AvatarGainCostumeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1677;
     */
    AvatarGainCostumeNotify_CmdId[AvatarGainCostumeNotify_CmdId["CMD_ID"] = 1677] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarGainCostumeNotify_CmdId[AvatarGainCostumeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarGainCostumeNotify_CmdId[AvatarGainCostumeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarGainCostumeNotify_CmdId = exports.AvatarGainCostumeNotify_CmdId || (exports.AvatarGainCostumeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarChangeAnimHashReq.CmdId
 */
var AvatarChangeAnimHashReq_CmdId;
(function (AvatarChangeAnimHashReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeAnimHashReq_CmdId[AvatarChangeAnimHashReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1711;
     */
    AvatarChangeAnimHashReq_CmdId[AvatarChangeAnimHashReq_CmdId["CMD_ID"] = 1711] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeAnimHashReq_CmdId[AvatarChangeAnimHashReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeAnimHashReq_CmdId[AvatarChangeAnimHashReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeAnimHashReq_CmdId[AvatarChangeAnimHashReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarChangeAnimHashReq_CmdId = exports.AvatarChangeAnimHashReq_CmdId || (exports.AvatarChangeAnimHashReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarChangeAnimHashRsp.CmdId
 */
var AvatarChangeAnimHashRsp_CmdId;
(function (AvatarChangeAnimHashRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeAnimHashRsp_CmdId[AvatarChangeAnimHashRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1647;
     */
    AvatarChangeAnimHashRsp_CmdId[AvatarChangeAnimHashRsp_CmdId["CMD_ID"] = 1647] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarChangeAnimHashRsp_CmdId[AvatarChangeAnimHashRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarChangeAnimHashRsp_CmdId[AvatarChangeAnimHashRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarChangeAnimHashRsp_CmdId = exports.AvatarChangeAnimHashRsp_CmdId || (exports.AvatarChangeAnimHashRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PersistentDungeonSwitchAvatarReq.CmdId
 */
var PersistentDungeonSwitchAvatarReq_CmdId;
(function (PersistentDungeonSwitchAvatarReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersistentDungeonSwitchAvatarReq_CmdId[PersistentDungeonSwitchAvatarReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1684;
     */
    PersistentDungeonSwitchAvatarReq_CmdId[PersistentDungeonSwitchAvatarReq_CmdId["CMD_ID"] = 1684] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersistentDungeonSwitchAvatarReq_CmdId[PersistentDungeonSwitchAvatarReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersistentDungeonSwitchAvatarReq_CmdId[PersistentDungeonSwitchAvatarReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersistentDungeonSwitchAvatarReq_CmdId[PersistentDungeonSwitchAvatarReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PersistentDungeonSwitchAvatarReq_CmdId = exports.PersistentDungeonSwitchAvatarReq_CmdId || (exports.PersistentDungeonSwitchAvatarReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PersistentDungeonSwitchAvatarRsp.CmdId
 */
var PersistentDungeonSwitchAvatarRsp_CmdId;
(function (PersistentDungeonSwitchAvatarRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersistentDungeonSwitchAvatarRsp_CmdId[PersistentDungeonSwitchAvatarRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1768;
     */
    PersistentDungeonSwitchAvatarRsp_CmdId[PersistentDungeonSwitchAvatarRsp_CmdId["CMD_ID"] = 1768] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PersistentDungeonSwitchAvatarRsp_CmdId[PersistentDungeonSwitchAvatarRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PersistentDungeonSwitchAvatarRsp_CmdId[PersistentDungeonSwitchAvatarRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PersistentDungeonSwitchAvatarRsp_CmdId = exports.PersistentDungeonSwitchAvatarRsp_CmdId || (exports.PersistentDungeonSwitchAvatarRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddBackupAvatarTeamReq.CmdId
 */
var AddBackupAvatarTeamReq_CmdId;
(function (AddBackupAvatarTeamReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBackupAvatarTeamReq_CmdId[AddBackupAvatarTeamReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1687;
     */
    AddBackupAvatarTeamReq_CmdId[AddBackupAvatarTeamReq_CmdId["CMD_ID"] = 1687] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBackupAvatarTeamReq_CmdId[AddBackupAvatarTeamReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddBackupAvatarTeamReq_CmdId[AddBackupAvatarTeamReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddBackupAvatarTeamReq_CmdId[AddBackupAvatarTeamReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AddBackupAvatarTeamReq_CmdId = exports.AddBackupAvatarTeamReq_CmdId || (exports.AddBackupAvatarTeamReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddBackupAvatarTeamRsp.CmdId
 */
var AddBackupAvatarTeamRsp_CmdId;
(function (AddBackupAvatarTeamRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBackupAvatarTeamRsp_CmdId[AddBackupAvatarTeamRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1735;
     */
    AddBackupAvatarTeamRsp_CmdId[AddBackupAvatarTeamRsp_CmdId["CMD_ID"] = 1735] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBackupAvatarTeamRsp_CmdId[AddBackupAvatarTeamRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddBackupAvatarTeamRsp_CmdId[AddBackupAvatarTeamRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AddBackupAvatarTeamRsp_CmdId = exports.AddBackupAvatarTeamRsp_CmdId || (exports.AddBackupAvatarTeamRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DelBackupAvatarTeamReq.CmdId
 */
var DelBackupAvatarTeamReq_CmdId;
(function (DelBackupAvatarTeamReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelBackupAvatarTeamReq_CmdId[DelBackupAvatarTeamReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1731;
     */
    DelBackupAvatarTeamReq_CmdId[DelBackupAvatarTeamReq_CmdId["CMD_ID"] = 1731] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelBackupAvatarTeamReq_CmdId[DelBackupAvatarTeamReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelBackupAvatarTeamReq_CmdId[DelBackupAvatarTeamReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelBackupAvatarTeamReq_CmdId[DelBackupAvatarTeamReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DelBackupAvatarTeamReq_CmdId = exports.DelBackupAvatarTeamReq_CmdId || (exports.DelBackupAvatarTeamReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DelBackupAvatarTeamRsp.CmdId
 */
var DelBackupAvatarTeamRsp_CmdId;
(function (DelBackupAvatarTeamRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelBackupAvatarTeamRsp_CmdId[DelBackupAvatarTeamRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1729;
     */
    DelBackupAvatarTeamRsp_CmdId[DelBackupAvatarTeamRsp_CmdId["CMD_ID"] = 1729] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelBackupAvatarTeamRsp_CmdId[DelBackupAvatarTeamRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelBackupAvatarTeamRsp_CmdId[DelBackupAvatarTeamRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DelBackupAvatarTeamRsp_CmdId = exports.DelBackupAvatarTeamRsp_CmdId || (exports.DelBackupAvatarTeamRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarTeamAllDataNotify.CmdId
 */
var AvatarTeamAllDataNotify_CmdId;
(function (AvatarTeamAllDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarTeamAllDataNotify_CmdId[AvatarTeamAllDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1749;
     */
    AvatarTeamAllDataNotify_CmdId[AvatarTeamAllDataNotify_CmdId["CMD_ID"] = 1749] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarTeamAllDataNotify_CmdId[AvatarTeamAllDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarTeamAllDataNotify_CmdId[AvatarTeamAllDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarTeamAllDataNotify_CmdId = exports.AvatarTeamAllDataNotify_CmdId || (exports.AvatarTeamAllDataNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AvatarAddNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarAddNotify", [
            { no: 13, name: "avatar", kind: "message", T: () => define_11.AvatarInfo },
            { no: 12, name: "is_in_team", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AvatarInfo avatar */ 13:
                    message.avatar = define_11.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatar);
                    break;
                case /* optional bool is_in_team */ 12:
                    message.isInTeam = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AvatarInfo avatar = 13; */
        if (message.avatar)
            define_11.AvatarInfo.internalBinaryWrite(message.avatar, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_in_team = 12; */
        if (message.isInTeam !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isInTeam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarAddNotify
 */
exports.AvatarAddNotify = new AvatarAddNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarDelNotify", [
            { no: 13, name: "avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
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
                case /* repeated uint64 avatar_guid_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 avatar_guid_list = 13; */
        for (let i = 0; i < message.avatarGuidList.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarGuidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarDelNotify
 */
exports.AvatarDelNotify = new AvatarDelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarTeam$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarTeam", [
            { no: 7, name: "avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "team_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* repeated uint64 avatar_guid_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional string team_name */ 14:
                    message.teamName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 avatar_guid_list = 7; */
        for (let i = 0; i < message.avatarGuidList.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.avatarGuidList[i]);
        /* optional string team_name = 14; */
        if (message.teamName !== undefined)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.teamName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarTeam
 */
exports.AvatarTeam = new AvatarTeam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetUpAvatarTeamReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetUpAvatarTeamReq", [
            { no: 3, name: "team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_team_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "cur_avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarTeamGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 team_id */ 3:
                    message.teamId = reader.uint32();
                    break;
                case /* repeated uint64 avatar_team_guid_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional uint64 cur_avatar_guid */ 5:
                    message.curAvatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 team_id = 3; */
        if (message.teamId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.teamId);
        /* repeated uint64 avatar_team_guid_list = 7; */
        for (let i = 0; i < message.avatarTeamGuidList.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.avatarTeamGuidList[i]);
        /* optional uint64 cur_avatar_guid = 5; */
        if (message.curAvatarGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.curAvatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetUpAvatarTeamReq
 */
exports.SetUpAvatarTeamReq = new SetUpAvatarTeamReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetUpAvatarTeamRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetUpAvatarTeamRsp", [
            { no: 1, name: "avatar_team_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "cur_avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarTeamGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 avatar_team_guid_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional uint32 team_id */ 6:
                    message.teamId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 cur_avatar_guid */ 13:
                    message.curAvatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 avatar_team_guid_list = 1; */
        for (let i = 0; i < message.avatarTeamGuidList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.avatarTeamGuidList[i]);
        /* optional uint32 team_id = 6; */
        if (message.teamId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.teamId);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 cur_avatar_guid = 13; */
        if (message.curAvatarGuid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.curAvatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetUpAvatarTeamRsp
 */
exports.SetUpAvatarTeamRsp = new SetUpAvatarTeamRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChooseCurAvatarTeamReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChooseCurAvatarTeamReq", [
            { no: 9, name: "team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 team_id */ 9:
                    message.teamId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 team_id = 9; */
        if (message.teamId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.teamId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChooseCurAvatarTeamReq
 */
exports.ChooseCurAvatarTeamReq = new ChooseCurAvatarTeamReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChooseCurAvatarTeamRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChooseCurAvatarTeamRsp", [
            { no: 1, name: "cur_team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 cur_team_id */ 1:
                    message.curTeamId = reader.uint32();
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
        /* optional uint32 cur_team_id = 1; */
        if (message.curTeamId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.curTeamId);
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
 * @generated MessageType for protobuf message com.midnights.game.ChooseCurAvatarTeamRsp
 */
exports.ChooseCurAvatarTeamRsp = new ChooseCurAvatarTeamRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeAvatarReq", [
            { no: 15, name: "move_pos", kind: "message", T: () => define_10.Vector },
            { no: 2, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "is_move", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector move_pos */ 15:
                    message.movePos = define_10.Vector.internalBinaryRead(reader, reader.uint32(), options, message.movePos);
                    break;
                case /* optional uint32 skill_id */ 2:
                    message.skillId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 7:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional bool is_move */ 10:
                    message.isMove = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Vector move_pos = 15; */
        if (message.movePos)
            define_10.Vector.internalBinaryWrite(message.movePos, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 skill_id = 2; */
        if (message.skillId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional uint64 guid = 7; */
        if (message.guid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.guid);
        /* optional bool is_move = 10; */
        if (message.isMove !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isMove);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeAvatarReq
 */
exports.ChangeAvatarReq = new ChangeAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeAvatarRsp", [
            { no: 3, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "cur_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 3:
                    message.skillId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 cur_guid */ 4:
                    message.curGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 3; */
        if (message.skillId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 cur_guid = 4; */
        if (message.curGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.curGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeAvatarRsp
 */
exports.ChangeAvatarRsp = new ChangeAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPromoteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarPromoteReq", [
            { no: 5, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 guid */ 5:
                    message.guid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 guid = 5; */
        if (message.guid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarPromoteReq
 */
exports.AvatarPromoteReq = new AvatarPromoteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPromoteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarPromoteRsp", [
            { no: 11, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
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
                case /* optional uint64 guid */ 11:
                    message.guid = reader.uint64().toBigInt();
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
        /* optional uint64 guid = 11; */
        if (message.guid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.guid);
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarPromoteRsp
 */
exports.AvatarPromoteRsp = new AvatarPromoteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SpringUseReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SpringUseReq", [
            { no: 11, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 guid */ 11:
                    message.guid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 guid = 11; */
        if (message.guid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SpringUseReq
 */
exports.SpringUseReq = new SpringUseReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SpringUseRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SpringUseRsp", [
            { no: 3, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
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
                case /* optional uint64 guid */ 3:
                    message.guid = reader.uint64().toBigInt();
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
        /* optional uint64 guid = 3; */
        if (message.guid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.guid);
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
 * @generated MessageType for protobuf message com.midnights.game.SpringUseRsp
 */
exports.SpringUseRsp = new SpringUseRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshBackgroundAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RefreshBackgroundAvatarReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.RefreshBackgroundAvatarReq
 */
exports.RefreshBackgroundAvatarReq = new RefreshBackgroundAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshBackgroundAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RefreshBackgroundAvatarRsp", [
            { no: 15, name: "hp_full_time_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { hpFullTimeMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, uint32> hp_full_time_map */ 15:
                    this.binaryReadMap15(message.hpFullTimeMap, reader, options);
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
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.RefreshBackgroundAvatarRsp.hp_full_time_map");
            }
        }
        map[key ?? "0"] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, uint32> hp_full_time_map = 15; */
        for (let k of Object.keys(message.hpFullTimeMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k).tag(2, runtime_1.WireType.Varint).uint32(message.hpFullTimeMap[k]).join();
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
 * @generated MessageType for protobuf message com.midnights.game.RefreshBackgroundAvatarRsp
 */
exports.RefreshBackgroundAvatarRsp = new RefreshBackgroundAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarTeamUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarTeamUpdateNotify", [
            { no: 2, name: "avatar_team_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.AvatarTeam } },
            { no: 13, name: "temp_avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarTeamMap: {}, tempAvatarGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.AvatarTeam> avatar_team_map */ 2:
                    this.binaryReadMap2(message.avatarTeamMap, reader, options);
                    break;
                case /* repeated uint64 temp_avatar_guid_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.AvatarTeam.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarTeamUpdateNotify.avatar_team_map");
            }
        }
        map[key ?? 0] = val ?? exports.AvatarTeam.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.AvatarTeam> avatar_team_map = 2; */
        for (let k of Object.keys(message.avatarTeamMap)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.AvatarTeam.internalBinaryWrite(message.avatarTeamMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint64 temp_avatar_guid_list = 13; */
        for (let i = 0; i < message.tempAvatarGuidList.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.tempAvatarGuidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarTeamUpdateNotify
 */
exports.AvatarTeamUpdateNotify = new AvatarTeamUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarDataNotify", [
            { no: 11, name: "owned_costume_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "choose_avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "avatar_team_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.AvatarTeam } },
            { no: 9, name: "backup_avatar_team_order_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "temp_avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "owned_flycloak_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "avatar_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_11.AvatarInfo },
            { no: 2, name: "cur_avatar_team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { ownedCostumeList: [], avatarTeamMap: {}, backupAvatarTeamOrderList: [], tempAvatarGuidList: [], ownedFlycloakList: [], avatarList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 owned_costume_list */ 11:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.ownedCostumeList.push(reader.uint32());
                    else
                        message.ownedCostumeList.push(reader.uint32());
                    break;
                case /* optional uint64 choose_avatar_guid */ 8:
                    message.chooseAvatarGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, com.midnights.game.AvatarTeam> avatar_team_map */ 7:
                    this.binaryReadMap7(message.avatarTeamMap, reader, options);
                    break;
                case /* repeated uint32 backup_avatar_team_order_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backupAvatarTeamOrderList.push(reader.uint32());
                    else
                        message.backupAvatarTeamOrderList.push(reader.uint32());
                    break;
                case /* repeated uint64 temp_avatar_guid_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint32 owned_flycloak_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.ownedFlycloakList.push(reader.uint32());
                    else
                        message.ownedFlycloakList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.AvatarInfo avatar_list */ 6:
                    message.avatarList.push(define_11.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 cur_avatar_team_id */ 2:
                    message.curAvatarTeamId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.AvatarTeam.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarDataNotify.avatar_team_map");
            }
        }
        map[key ?? 0] = val ?? exports.AvatarTeam.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 owned_costume_list = 11; */
        for (let i = 0; i < message.ownedCostumeList.length; i++)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.ownedCostumeList[i]);
        /* optional uint64 choose_avatar_guid = 8; */
        if (message.chooseAvatarGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.chooseAvatarGuid);
        /* map<uint32, com.midnights.game.AvatarTeam> avatar_team_map = 7; */
        for (let k of Object.keys(message.avatarTeamMap)) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.AvatarTeam.internalBinaryWrite(message.avatarTeamMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 backup_avatar_team_order_list = 9; */
        for (let i = 0; i < message.backupAvatarTeamOrderList.length; i++)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.backupAvatarTeamOrderList[i]);
        /* repeated uint64 temp_avatar_guid_list = 12; */
        for (let i = 0; i < message.tempAvatarGuidList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.tempAvatarGuidList[i]);
        /* repeated uint32 owned_flycloak_list = 1; */
        for (let i = 0; i < message.ownedFlycloakList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.ownedFlycloakList[i]);
        /* repeated com.midnights.game.AvatarInfo avatar_list = 6; */
        for (let i = 0; i < message.avatarList.length; i++)
            define_11.AvatarInfo.internalBinaryWrite(message.avatarList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 cur_avatar_team_id = 2; */
        if (message.curAvatarTeamId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.curAvatarTeamId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarDataNotify
 */
exports.AvatarDataNotify = new AvatarDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarUpgradeReq", [
            { no: 6, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 6:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 count */ 2:
                    message.count = reader.uint32();
                    break;
                case /* optional uint32 item_id */ 5:
                    message.itemId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 6; */
        if (message.avatarGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 count = 2; */
        if (message.count !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.count);
        /* optional uint32 item_id = 5; */
        if (message.itemId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.itemId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarUpgradeReq
 */
exports.AvatarUpgradeReq = new AvatarUpgradeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarUpgradeRsp", [
            { no: 6, name: "cur_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "old_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "old_fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "cur_fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 15, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { oldFightPropMap: {}, curFightPropMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_level */ 6:
                    message.curLevel = reader.uint32();
                    break;
                case /* optional uint32 old_level */ 13:
                    message.oldLevel = reader.uint32();
                    break;
                case /* map<uint32, float> old_fight_prop_map */ 10:
                    this.binaryReadMap10(message.oldFightPropMap, reader, options);
                    break;
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* map<uint32, float> cur_fight_prop_map */ 4:
                    this.binaryReadMap4(message.curFightPropMap, reader, options);
                    break;
                case /* optional uint64 avatar_guid */ 15:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarUpgradeRsp.old_fight_prop_map");
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
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarUpgradeRsp.cur_fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_level = 6; */
        if (message.curLevel !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* optional uint32 old_level = 13; */
        if (message.oldLevel !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* map<uint32, float> old_fight_prop_map = 10; */
        for (let k of Object.keys(message.oldFightPropMap))
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.oldFightPropMap[k]).join();
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* map<uint32, float> cur_fight_prop_map = 4; */
        for (let k of Object.keys(message.curFightPropMap))
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.curFightPropMap[k]).join();
        /* optional uint64 avatar_guid = 15; */
        if (message.avatarGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarUpgradeRsp
 */
exports.AvatarUpgradeRsp = new AvatarUpgradeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDieAnimationEndReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarDieAnimationEndReq", [
            { no: 3, name: "reborn_pos", kind: "message", T: () => define_10.Vector },
            { no: 7, name: "die_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Vector reborn_pos */ 3:
                    message.rebornPos = define_10.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rebornPos);
                    break;
                case /* optional uint64 die_guid */ 7:
                    message.dieGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 skill_id */ 8:
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
        /* optional com.midnights.game.Vector reborn_pos = 3; */
        if (message.rebornPos)
            define_10.Vector.internalBinaryWrite(message.rebornPos, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 die_guid = 7; */
        if (message.dieGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.dieGuid);
        /* optional uint32 skill_id = 8; */
        if (message.skillId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarDieAnimationEndReq
 */
exports.AvatarDieAnimationEndReq = new AvatarDieAnimationEndReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDieAnimationEndRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarDieAnimationEndRsp", [
            { no: 13, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "die_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_id */ 13:
                    message.skillId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 die_guid */ 15:
                    message.dieGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_id = 13; */
        if (message.skillId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 die_guid = 15; */
        if (message.dieGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.dieGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarDieAnimationEndRsp
 */
exports.AvatarDieAnimationEndRsp = new AvatarDieAnimationEndRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeElementTypeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarChangeElementTypeReq", [
            { no: 7, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 area_id */ 3:
                    message.areaId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 scene_id = 7; */
        if (message.sceneId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 area_id = 3; */
        if (message.areaId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.areaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarChangeElementTypeReq
 */
exports.AvatarChangeElementTypeReq = new AvatarChangeElementTypeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeElementTypeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarChangeElementTypeRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarChangeElementTypeRsp
 */
exports.AvatarChangeElementTypeRsp = new AvatarChangeElementTypeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFetterDataNotify", [
            { no: 15, name: "fetter_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => define_9.AvatarFetterInfo } }
        ]);
    }
    create(value) {
        const message = { fetterInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, com.midnights.game.AvatarFetterInfo> fetter_info_map */ 15:
                    this.binaryReadMap15(message.fetterInfoMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = define_9.AvatarFetterInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarFetterDataNotify.fetter_info_map");
            }
        }
        map[key ?? "0"] = val ?? define_9.AvatarFetterInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, com.midnights.game.AvatarFetterInfo> fetter_info_map = 15; */
        for (let k of Object.keys(message.fetterInfoMap)) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_9.AvatarFetterInfo.internalBinaryWrite(message.fetterInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFetterDataNotify
 */
exports.AvatarFetterDataNotify = new AvatarFetterDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionDataNotify", [
            { no: 6, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => define_8.AvatarExpeditionInfo } }
        ]);
    }
    create(value) {
        const message = { expeditionInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map */ 6:
                    this.binaryReadMap6(message.expeditionInfoMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = define_8.AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarExpeditionDataNotify.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? define_8.AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map = 6; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_8.AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionDataNotify
 */
exports.AvatarExpeditionDataNotify = new AvatarExpeditionDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionAllDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionAllDataReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionAllDataReq
 */
exports.AvatarExpeditionAllDataReq = new AvatarExpeditionAllDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionAllDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionAllDataRsp", [
            { no: 3, name: "open_expedition_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "expedition_count_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => define_8.AvatarExpeditionInfo } }
        ]);
    }
    create(value) {
        const message = { openExpeditionList: [], expeditionInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 open_expedition_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openExpeditionList.push(reader.uint32());
                    else
                        message.openExpeditionList.push(reader.uint32());
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 expedition_count_limit */ 12:
                    message.expeditionCountLimit = reader.uint32();
                    break;
                case /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map */ 4:
                    this.binaryReadMap4(message.expeditionInfoMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap4(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = define_8.AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarExpeditionAllDataRsp.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? define_8.AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 open_expedition_list = 3; */
        for (let i = 0; i < message.openExpeditionList.length; i++)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.openExpeditionList[i]);
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 expedition_count_limit = 12; */
        if (message.expeditionCountLimit !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.expeditionCountLimit);
        /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map = 4; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_8.AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionAllDataRsp
 */
exports.AvatarExpeditionAllDataRsp = new AvatarExpeditionAllDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionStartReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionStartReq", [
            { no: 9, name: "exp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "hour_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 exp_id */ 9:
                    message.expId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 10:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 hour_time */ 2:
                    message.hourTime = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 exp_id = 9; */
        if (message.expId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.expId);
        /* optional uint64 avatar_guid = 10; */
        if (message.avatarGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 hour_time = 2; */
        if (message.hourTime !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.hourTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionStartReq
 */
exports.AvatarExpeditionStartReq = new AvatarExpeditionStartReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionStartRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionStartRsp", [
            { no: 2, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => define_8.AvatarExpeditionInfo } },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { expeditionInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map */ 2:
                    this.binaryReadMap2(message.expeditionInfoMap, reader, options);
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
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = define_8.AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarExpeditionStartRsp.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? define_8.AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map = 2; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_8.AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionStartRsp
 */
exports.AvatarExpeditionStartRsp = new AvatarExpeditionStartRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionCallBackReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionCallBackReq", [
            { no: 13, name: "avatar_guid", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 avatar_guid */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarGuid.push(reader.uint64().toBigInt());
                    else
                        message.avatarGuid.push(reader.uint64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 avatar_guid = 13; */
        for (let i = 0; i < message.avatarGuid.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarGuid[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionCallBackReq
 */
exports.AvatarExpeditionCallBackReq = new AvatarExpeditionCallBackReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionCallBackRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionCallBackRsp", [
            { no: 9, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => define_8.AvatarExpeditionInfo } },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { expeditionInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map */ 9:
                    this.binaryReadMap9(message.expeditionInfoMap, reader, options);
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
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = define_8.AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarExpeditionCallBackRsp.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? define_8.AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map = 9; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_8.AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionCallBackRsp
 */
exports.AvatarExpeditionCallBackRsp = new AvatarExpeditionCallBackRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionGetRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionGetRewardReq", [
            { no: 14, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 14:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 14; */
        if (message.avatarGuid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionGetRewardReq
 */
exports.AvatarExpeditionGetRewardReq = new AvatarExpeditionGetRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionGetRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExpeditionGetRewardRsp", [
            { no: 9, name: "extra_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_7.ItemParam },
            { no: 8, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_7.ItemParam },
            { no: 12, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => define_8.AvatarExpeditionInfo } },
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { extraItemList: [], itemList: [], expeditionInfoMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ItemParam extra_item_list */ 9:
                    message.extraItemList.push(define_7.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 8:
                    message.itemList.push(define_7.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map */ 12:
                    this.binaryReadMap12(message.expeditionInfoMap, reader, options);
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
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = define_8.AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarExpeditionGetRewardRsp.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? define_8.AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.ItemParam extra_item_list = 9; */
        for (let i = 0; i < message.extraItemList.length; i++)
            define_7.ItemParam.internalBinaryWrite(message.extraItemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ItemParam item_list = 8; */
        for (let i = 0; i < message.itemList.length; i++)
            define_7.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint64, com.midnights.game.AvatarExpeditionInfo> expedition_info_map = 12; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_8.AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarExpeditionGetRewardRsp
 */
exports.AvatarExpeditionGetRewardRsp = new AvatarExpeditionGetRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeMpTeamAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeMpTeamAvatarReq", [
            { no: 4, name: "cur_avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
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
                case /* optional uint64 cur_avatar_guid */ 4:
                    message.curAvatarGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint64 avatar_guid_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 cur_avatar_guid = 4; */
        if (message.curAvatarGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.curAvatarGuid);
        /* repeated uint64 avatar_guid_list = 8; */
        for (let i = 0; i < message.avatarGuidList.length; i++)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.avatarGuidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeMpTeamAvatarReq
 */
exports.ChangeMpTeamAvatarReq = new ChangeMpTeamAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeMpTeamAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeMpTeamAvatarRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "cur_avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
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
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint64 avatar_guid_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional uint64 cur_avatar_guid */ 13:
                    message.curAvatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated uint64 avatar_guid_list = 3; */
        for (let i = 0; i < message.avatarGuidList.length; i++)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.avatarGuidList[i]);
        /* optional uint64 cur_avatar_guid = 13; */
        if (message.curAvatarGuid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.curAvatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeMpTeamAvatarRsp
 */
exports.ChangeMpTeamAvatarRsp = new ChangeMpTeamAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeTeamNameReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeTeamNameReq", [
            { no: 8, name: "team_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "team_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 team_id */ 8:
                    message.teamId = reader.int32();
                    break;
                case /* optional string team_name */ 9:
                    message.teamName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 team_id = 8; */
        if (message.teamId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.teamId);
        /* optional string team_name = 9; */
        if (message.teamName !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.teamName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeTeamNameReq
 */
exports.ChangeTeamNameReq = new ChangeTeamNameReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeTeamNameRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeTeamNameRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "team_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "team_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional string team_name */ 2:
                    message.teamName = reader.string();
                    break;
                case /* optional int32 team_id */ 4:
                    message.teamId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional string team_name = 2; */
        if (message.teamName !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.teamName);
        /* optional int32 team_id = 4; */
        if (message.teamId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.teamId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeTeamNameRsp
 */
exports.ChangeTeamNameRsp = new ChangeTeamNameRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneTeamAvatar", [
            { no: 5, name: "avatar_ability_info", kind: "message", T: () => define_6.AbilitySyncStateInfo },
            { no: 8, name: "avatar_info", kind: "message", T: () => define_11.AvatarInfo },
            { no: 152, name: "is_on_scene", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "weapon_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "scene_avatar_info", kind: "message", T: () => define_5.SceneAvatarInfo },
            { no: 4, name: "weapon_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "weapon_ability_info", kind: "message", T: () => define_6.AbilitySyncStateInfo },
            { no: 12, name: "scene_entity_info", kind: "message", T: () => define_4.SceneEntityInfo },
            { no: 14, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_reconnect", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "ability_control_block", kind: "message", T: () => define_3.AbilityControlBlock },
            { no: 13, name: "is_player_cur_avatar", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "server_buff_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_2.ServerBuff }
        ]);
    }
    create(value) {
        const message = { serverBuffList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilitySyncStateInfo avatar_ability_info */ 5:
                    message.avatarAbilityInfo = define_6.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarAbilityInfo);
                    break;
                case /* optional com.midnights.game.AvatarInfo avatar_info */ 8:
                    message.avatarInfo = define_11.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarInfo);
                    break;
                case /* optional bool is_on_scene */ 152:
                    message.isOnScene = reader.bool();
                    break;
                case /* optional uint32 entity_id */ 9:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 15:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 weapon_entity_id */ 7:
                    message.weaponEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.SceneAvatarInfo scene_avatar_info */ 3:
                    message.sceneAvatarInfo = define_5.SceneAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneAvatarInfo);
                    break;
                case /* optional uint64 weapon_guid */ 4:
                    message.weaponGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo weapon_ability_info */ 11:
                    message.weaponAbilityInfo = define_6.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.weaponAbilityInfo);
                    break;
                case /* optional com.midnights.game.SceneEntityInfo scene_entity_info */ 12:
                    message.sceneEntityInfo = define_4.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneEntityInfo);
                    break;
                case /* optional uint32 player_uid */ 14:
                    message.playerUid = reader.uint32();
                    break;
                case /* optional bool is_reconnect */ 6:
                    message.isReconnect = reader.bool();
                    break;
                case /* optional com.midnights.game.AbilityControlBlock ability_control_block */ 2:
                    message.abilityControlBlock = define_3.AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
                    break;
                case /* optional bool is_player_cur_avatar */ 13:
                    message.isPlayerCurAvatar = reader.bool();
                    break;
                case /* repeated com.midnights.game.ServerBuff server_buff_list */ 10:
                    message.serverBuffList.push(define_2.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.AbilitySyncStateInfo avatar_ability_info = 5; */
        if (message.avatarAbilityInfo)
            define_6.AbilitySyncStateInfo.internalBinaryWrite(message.avatarAbilityInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AvatarInfo avatar_info = 8; */
        if (message.avatarInfo)
            define_11.AvatarInfo.internalBinaryWrite(message.avatarInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_on_scene = 152; */
        if (message.isOnScene !== undefined)
            writer.tag(152, runtime_1.WireType.Varint).bool(message.isOnScene);
        /* optional uint32 entity_id = 9; */
        if (message.entityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint64 avatar_guid = 15; */
        if (message.avatarGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 scene_id = 1; */
        if (message.sceneId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 weapon_entity_id = 7; */
        if (message.weaponEntityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.weaponEntityId);
        /* optional com.midnights.game.SceneAvatarInfo scene_avatar_info = 3; */
        if (message.sceneAvatarInfo)
            define_5.SceneAvatarInfo.internalBinaryWrite(message.sceneAvatarInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint64 weapon_guid = 4; */
        if (message.weaponGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.weaponGuid);
        /* optional com.midnights.game.AbilitySyncStateInfo weapon_ability_info = 11; */
        if (message.weaponAbilityInfo)
            define_6.AbilitySyncStateInfo.internalBinaryWrite(message.weaponAbilityInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.SceneEntityInfo scene_entity_info = 12; */
        if (message.sceneEntityInfo)
            define_4.SceneEntityInfo.internalBinaryWrite(message.sceneEntityInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 player_uid = 14; */
        if (message.playerUid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* optional bool is_reconnect = 6; */
        if (message.isReconnect !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isReconnect);
        /* optional com.midnights.game.AbilityControlBlock ability_control_block = 2; */
        if (message.abilityControlBlock)
            define_3.AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_player_cur_avatar = 13; */
        if (message.isPlayerCurAvatar !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isPlayerCurAvatar);
        /* repeated com.midnights.game.ServerBuff server_buff_list = 10; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            define_2.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneTeamAvatar
 */
exports.SceneTeamAvatar = new SceneTeamAvatar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneTeamUpdateNotify", [
            { no: 11, name: "scene_team_avatar_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SceneTeamAvatar },
            { no: 15, name: "is_in_mp", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { sceneTeamAvatarList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.SceneTeamAvatar scene_team_avatar_list */ 11:
                    message.sceneTeamAvatarList.push(exports.SceneTeamAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_in_mp */ 15:
                    message.isInMp = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.SceneTeamAvatar scene_team_avatar_list = 11; */
        for (let i = 0; i < message.sceneTeamAvatarList.length; i++)
            exports.SceneTeamAvatar.internalBinaryWrite(message.sceneTeamAvatarList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_in_mp = 15; */
        if (message.isInMp !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isInMp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneTeamUpdateNotify
 */
exports.SceneTeamUpdateNotify = new SceneTeamUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FocusAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FocusAvatarReq", [
            { no: 1, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_focus", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 1:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional bool is_focus */ 8:
                    message.isFocus = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 1; */
        if (message.avatarGuid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional bool is_focus = 8; */
        if (message.isFocus !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isFocus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FocusAvatarReq
 */
exports.FocusAvatarReq = new FocusAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FocusAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FocusAvatarRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "is_focus", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional bool is_focus */ 11:
                    message.isFocus = reader.bool();
                    break;
                case /* optional uint64 avatar_guid */ 4:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional bool is_focus = 11; */
        if (message.isFocus !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isFocus);
        /* optional uint64 avatar_guid = 4; */
        if (message.avatarGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FocusAvatarRsp
 */
exports.FocusAvatarRsp = new FocusAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSatiationData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSatiationData", [
            { no: 14, name: "finish_time", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "penalty_finish_time", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float finish_time */ 14:
                    message.finishTime = reader.float();
                    break;
                case /* optional uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional float penalty_finish_time */ 12:
                    message.penaltyFinishTime = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float finish_time = 14; */
        if (message.finishTime !== undefined)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.finishTime);
        /* optional uint64 avatar_guid = 13; */
        if (message.avatarGuid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional float penalty_finish_time = 12; */
        if (message.penaltyFinishTime !== undefined)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.penaltyFinishTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSatiationData
 */
exports.AvatarSatiationData = new AvatarSatiationData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSatiationDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSatiationDataNotify", [
            { no: 6, name: "satiation_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AvatarSatiationData }
        ]);
    }
    create(value) {
        const message = { satiationDataList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AvatarSatiationData satiation_data_list */ 6:
                    message.satiationDataList.push(exports.AvatarSatiationData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AvatarSatiationData satiation_data_list = 6; */
        for (let i = 0; i < message.satiationDataList.length; i++)
            exports.AvatarSatiationData.internalBinaryWrite(message.satiationDataList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSatiationDataNotify
 */
exports.AvatarSatiationDataNotify = new AvatarSatiationDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarWearFlycloakReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarWearFlycloakReq", [
            { no: 11, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "flycloak_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 11:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 flycloak_id */ 13:
                    message.flycloakId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 11; */
        if (message.avatarGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 flycloak_id = 13; */
        if (message.flycloakId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.flycloakId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarWearFlycloakReq
 */
exports.AvatarWearFlycloakReq = new AvatarWearFlycloakReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarWearFlycloakRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarWearFlycloakRsp", [
            { no: 13, name: "flycloak_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
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
                case /* optional uint32 flycloak_id */ 13:
                    message.flycloakId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 7:
                    message.avatarGuid = reader.uint64().toBigInt();
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
        /* optional uint32 flycloak_id = 13; */
        if (message.flycloakId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.flycloakId);
        /* optional uint64 avatar_guid = 7; */
        if (message.avatarGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.avatarGuid);
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarWearFlycloakRsp
 */
exports.AvatarWearFlycloakRsp = new AvatarWearFlycloakRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFlycloakChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFlycloakChangeNotify", [
            { no: 8, name: "flycloak_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 flycloak_id */ 8:
                    message.flycloakId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 2:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 flycloak_id = 8; */
        if (message.flycloakId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.flycloakId);
        /* optional uint64 avatar_guid = 2; */
        if (message.avatarGuid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFlycloakChangeNotify
 */
exports.AvatarFlycloakChangeNotify = new AvatarFlycloakChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarGainFlycloakNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarGainFlycloakNotify", [
            { no: 3, name: "flycloak_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 flycloak_id */ 3:
                    message.flycloakId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 flycloak_id = 3; */
        if (message.flycloakId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.flycloakId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarGainFlycloakNotify
 */
exports.AvatarGainFlycloakNotify = new AvatarGainFlycloakNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEquipAffixStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarEquipAffixStartNotify", [
            { no: 4, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "equip_affix_info", kind: "message", T: () => define_1.AvatarEquipAffixInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 4:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional com.midnights.game.AvatarEquipAffixInfo equip_affix_info */ 12:
                    message.equipAffixInfo = define_1.AvatarEquipAffixInfo.internalBinaryRead(reader, reader.uint32(), options, message.equipAffixInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 4; */
        if (message.avatarGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional com.midnights.game.AvatarEquipAffixInfo equip_affix_info = 12; */
        if (message.equipAffixInfo)
            define_1.AvatarEquipAffixInfo.internalBinaryWrite(message.equipAffixInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarEquipAffixStartNotify
 */
exports.AvatarEquipAffixStartNotify = new AvatarEquipAffixStartNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterLevelRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFetterLevelRewardReq", [
            { no: 1, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "fetter_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 1:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 fetter_level */ 6:
                    message.fetterLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 1; */
        if (message.avatarGuid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 fetter_level = 6; */
        if (message.fetterLevel !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.fetterLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFetterLevelRewardReq
 */
exports.AvatarFetterLevelRewardReq = new AvatarFetterLevelRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFetterLevelRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFetterLevelRewardRsp", [
            { no: 4, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "fetter_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 4:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 reward_id */ 1:
                    message.rewardId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 fetter_level */ 14:
                    message.fetterLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 4; */
        if (message.avatarGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 reward_id = 1; */
        if (message.rewardId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 fetter_level = 14; */
        if (message.fetterLevel !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.fetterLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFetterLevelRewardRsp
 */
exports.AvatarFetterLevelRewardRsp = new AvatarFetterLevelRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddNoGachaAvatarCardTransferItem$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddNoGachaAvatarCardTransferItem", [
            { no: 9, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_new", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 count */ 9:
                    message.count = reader.uint32();
                    break;
                case /* optional uint32 item_id */ 6:
                    message.itemId = reader.uint32();
                    break;
                case /* optional bool is_new */ 15:
                    message.isNew = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 count = 9; */
        if (message.count !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.count);
        /* optional uint32 item_id = 6; */
        if (message.itemId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.itemId);
        /* optional bool is_new = 15; */
        if (message.isNew !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isNew);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddNoGachaAvatarCardTransferItem
 */
exports.AddNoGachaAvatarCardTransferItem = new AddNoGachaAvatarCardTransferItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddNoGachaAvatarCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddNoGachaAvatarCardNotify", [
            { no: 4, name: "transfer_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.AddNoGachaAvatarCardTransferItem },
            { no: 2, name: "initial_promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_transfer_to_item", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "reason", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "initial_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { transferItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AddNoGachaAvatarCardTransferItem transfer_item_list */ 4:
                    message.transferItemList.push(exports.AddNoGachaAvatarCardTransferItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 initial_promote_level */ 2:
                    message.initialPromoteLevel = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 8:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional bool is_transfer_to_item */ 6:
                    message.isTransferToItem = reader.bool();
                    break;
                case /* optional uint32 reason */ 9:
                    message.reason = reader.uint32();
                    break;
                case /* optional uint32 initial_level */ 10:
                    message.initialLevel = reader.uint32();
                    break;
                case /* optional uint32 item_id */ 14:
                    message.itemId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AddNoGachaAvatarCardTransferItem transfer_item_list = 4; */
        for (let i = 0; i < message.transferItemList.length; i++)
            exports.AddNoGachaAvatarCardTransferItem.internalBinaryWrite(message.transferItemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 initial_promote_level = 2; */
        if (message.initialPromoteLevel !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.initialPromoteLevel);
        /* optional uint32 avatar_id = 8; */
        if (message.avatarId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional bool is_transfer_to_item = 6; */
        if (message.isTransferToItem !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isTransferToItem);
        /* optional uint32 reason = 9; */
        if (message.reason !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.reason);
        /* optional uint32 initial_level = 10; */
        if (message.initialLevel !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.initialLevel);
        /* optional uint32 item_id = 14; */
        if (message.itemId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.itemId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddNoGachaAvatarCardNotify
 */
exports.AddNoGachaAvatarCardNotify = new AddNoGachaAvatarCardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPromoteGetRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarPromoteGetRewardReq", [
            { no: 7, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 7:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 promote_level */ 12:
                    message.promoteLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 7; */
        if (message.avatarGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 promote_level = 12; */
        if (message.promoteLevel !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.promoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarPromoteGetRewardReq
 */
exports.AvatarPromoteGetRewardReq = new AvatarPromoteGetRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPromoteGetRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarPromoteGetRewardRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "reward_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 reward_id */ 15:
                    message.rewardId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 11:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 promote_level */ 12:
                    message.promoteLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 reward_id = 15; */
        if (message.rewardId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* optional uint64 avatar_guid = 11; */
        if (message.avatarGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 promote_level = 12; */
        if (message.promoteLevel !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.promoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarPromoteGetRewardRsp
 */
exports.AvatarPromoteGetRewardRsp = new AvatarPromoteGetRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeCostumeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarChangeCostumeReq", [
            { no: 4, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 costume_id */ 4:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 2:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 costume_id = 4; */
        if (message.costumeId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.costumeId);
        /* optional uint64 avatar_guid = 2; */
        if (message.avatarGuid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarChangeCostumeReq
 */
exports.AvatarChangeCostumeReq = new AvatarChangeCostumeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeCostumeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarChangeCostumeRsp", [
            { no: 12, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 12:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 costume_id */ 13:
                    message.costumeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 12; */
        if (message.avatarGuid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 costume_id = 13; */
        if (message.costumeId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarChangeCostumeRsp
 */
exports.AvatarChangeCostumeRsp = new AvatarChangeCostumeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeCostumeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarChangeCostumeNotify", [
            { no: 7, name: "entity_info", kind: "message", T: () => define_4.SceneEntityInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.SceneEntityInfo entity_info */ 7:
                    message.entityInfo = define_4.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.SceneEntityInfo entity_info = 7; */
        if (message.entityInfo)
            define_4.SceneEntityInfo.internalBinaryWrite(message.entityInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarChangeCostumeNotify
 */
exports.AvatarChangeCostumeNotify = new AvatarChangeCostumeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarGainCostumeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarGainCostumeNotify", [
            { no: 15, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 costume_id */ 15:
                    message.costumeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 costume_id = 15; */
        if (message.costumeId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarGainCostumeNotify
 */
exports.AvatarGainCostumeNotify = new AvatarGainCostumeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeAnimHashReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarChangeAnimHashReq", [
            { no: 6, name: "anim_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 anim_hash */ 6:
                    message.animHash = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 3:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 anim_hash = 6; */
        if (message.animHash !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.animHash);
        /* optional uint64 avatar_guid = 3; */
        if (message.avatarGuid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarChangeAnimHashReq
 */
exports.AvatarChangeAnimHashReq = new AvatarChangeAnimHashReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeAnimHashRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarChangeAnimHashRsp", [
            { no: 13, name: "anim_hash", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 anim_hash */ 13:
                    message.animHash = reader.uint32();
                    break;
                case /* optional int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 avatar_guid */ 10:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 anim_hash = 13; */
        if (message.animHash !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.animHash);
        /* optional int32 retcode = 5; */
        if (message.retcode !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 avatar_guid = 10; */
        if (message.avatarGuid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarChangeAnimHashRsp
 */
exports.AvatarChangeAnimHashRsp = new AvatarChangeAnimHashRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PersistentDungeonSwitchAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PersistentDungeonSwitchAvatarReq", [
            { no: 8, name: "cur_avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "avatar_team_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarTeamGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 cur_avatar_guid */ 8:
                    message.curAvatarGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint64 avatar_team_guid_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 cur_avatar_guid = 8; */
        if (message.curAvatarGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.curAvatarGuid);
        /* repeated uint64 avatar_team_guid_list = 3; */
        for (let i = 0; i < message.avatarTeamGuidList.length; i++)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.avatarTeamGuidList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PersistentDungeonSwitchAvatarReq
 */
exports.PersistentDungeonSwitchAvatarReq = new PersistentDungeonSwitchAvatarReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PersistentDungeonSwitchAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PersistentDungeonSwitchAvatarRsp", [
            { no: 14, name: "avatar_team_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "cur_avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarTeamGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 avatar_team_guid_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint64 cur_avatar_guid */ 15:
                    message.curAvatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 avatar_team_guid_list = 14; */
        for (let i = 0; i < message.avatarTeamGuidList.length; i++)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.avatarTeamGuidList[i]);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 cur_avatar_guid = 15; */
        if (message.curAvatarGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.curAvatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PersistentDungeonSwitchAvatarRsp
 */
exports.PersistentDungeonSwitchAvatarRsp = new PersistentDungeonSwitchAvatarRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddBackupAvatarTeamReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddBackupAvatarTeamReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.AddBackupAvatarTeamReq
 */
exports.AddBackupAvatarTeamReq = new AddBackupAvatarTeamReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddBackupAvatarTeamRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddBackupAvatarTeamRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.AddBackupAvatarTeamRsp
 */
exports.AddBackupAvatarTeamRsp = new AddBackupAvatarTeamRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DelBackupAvatarTeamReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DelBackupAvatarTeamReq", [
            { no: 4, name: "backup_avatar_team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 backup_avatar_team_id */ 4:
                    message.backupAvatarTeamId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 backup_avatar_team_id = 4; */
        if (message.backupAvatarTeamId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.backupAvatarTeamId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DelBackupAvatarTeamReq
 */
exports.DelBackupAvatarTeamReq = new DelBackupAvatarTeamReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DelBackupAvatarTeamRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DelBackupAvatarTeamRsp", [
            { no: 15, name: "backup_avatar_team_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 backup_avatar_team_id */ 15:
                    message.backupAvatarTeamId = reader.uint32();
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
        /* optional uint32 backup_avatar_team_id = 15; */
        if (message.backupAvatarTeamId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.backupAvatarTeamId);
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
 * @generated MessageType for protobuf message com.midnights.game.DelBackupAvatarTeamRsp
 */
exports.DelBackupAvatarTeamRsp = new DelBackupAvatarTeamRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarTeamAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarTeamAllDataNotify", [
            { no: 6, name: "temp_avatar_guid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "avatar_team_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.AvatarTeam } },
            { no: 1, name: "backup_avatar_team_order_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { tempAvatarGuidList: [], avatarTeamMap: {}, backupAvatarTeamOrderList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 temp_avatar_guid_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* map<uint32, com.midnights.game.AvatarTeam> avatar_team_map */ 3:
                    this.binaryReadMap3(message.avatarTeamMap, reader, options);
                    break;
                case /* repeated uint32 backup_avatar_team_order_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backupAvatarTeamOrderList.push(reader.uint32());
                    else
                        message.backupAvatarTeamOrderList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
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
                    val = exports.AvatarTeam.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarTeamAllDataNotify.avatar_team_map");
            }
        }
        map[key ?? 0] = val ?? exports.AvatarTeam.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint64 temp_avatar_guid_list = 6; */
        for (let i = 0; i < message.tempAvatarGuidList.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.tempAvatarGuidList[i]);
        /* map<uint32, com.midnights.game.AvatarTeam> avatar_team_map = 3; */
        for (let k of Object.keys(message.avatarTeamMap)) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.AvatarTeam.internalBinaryWrite(message.avatarTeamMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 backup_avatar_team_order_list = 1; */
        for (let i = 0; i < message.backupAvatarTeamOrderList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.backupAvatarTeamOrderList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarTeamAllDataNotify
 */
exports.AvatarTeamAllDataNotify = new AvatarTeamAllDataNotify$Type();
