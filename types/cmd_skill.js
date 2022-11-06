"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamResonanceChangeNotify = exports.AvatarTeamResonanceInfo = exports.CanUseSkillNotify = exports.ProudSkillExtraLevelNotify = exports.AvatarSkillChangeNotify = exports.AvatarSkillUpgradeRsp = exports.AvatarSkillUpgradeReq = exports.ProudSkillChangeNotify = exports.ProudSkillUpgradeRsp = exports.ProudSkillUpgradeReq = exports.AvatarSkillInfoNotify = exports.AvatarSkillMaxChargeCountNotify = exports.BigTalentPointConvertRsp = exports.BigTalentPointConvertReq = exports.AvatarSkillDepotChangeNotify = exports.AvatarUnlockTalentNotify = exports.UnlockAvatarTalentRsp = exports.UnlockAvatarTalentReq = exports.TeamResonanceChangeNotify_CmdId = exports.CanUseSkillNotify_CmdId = exports.ProudSkillExtraLevelNotify_CmdId = exports.AvatarSkillChangeNotify_CmdId = exports.AvatarSkillUpgradeRsp_CmdId = exports.AvatarSkillUpgradeReq_CmdId = exports.ProudSkillChangeNotify_CmdId = exports.ProudSkillUpgradeRsp_CmdId = exports.ProudSkillUpgradeReq_CmdId = exports.AvatarSkillInfoNotify_CmdId = exports.AvatarSkillMaxChargeCountNotify_CmdId = exports.BigTalentPointConvertRsp_CmdId = exports.BigTalentPointConvertReq_CmdId = exports.AvatarSkillDepotChangeNotify_CmdId = exports.AvatarUnlockTalentNotify_CmdId = exports.UnlockAvatarTalentRsp_CmdId = exports.UnlockAvatarTalentReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.UnlockAvatarTalentReq.CmdId
 */
var UnlockAvatarTalentReq_CmdId;
(function (UnlockAvatarTalentReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockAvatarTalentReq_CmdId[UnlockAvatarTalentReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1072;
     */
    UnlockAvatarTalentReq_CmdId[UnlockAvatarTalentReq_CmdId["CMD_ID"] = 1072] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockAvatarTalentReq_CmdId[UnlockAvatarTalentReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockAvatarTalentReq_CmdId[UnlockAvatarTalentReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockAvatarTalentReq_CmdId[UnlockAvatarTalentReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UnlockAvatarTalentReq_CmdId = exports.UnlockAvatarTalentReq_CmdId || (exports.UnlockAvatarTalentReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockAvatarTalentRsp.CmdId
 */
var UnlockAvatarTalentRsp_CmdId;
(function (UnlockAvatarTalentRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockAvatarTalentRsp_CmdId[UnlockAvatarTalentRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1098;
     */
    UnlockAvatarTalentRsp_CmdId[UnlockAvatarTalentRsp_CmdId["CMD_ID"] = 1098] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockAvatarTalentRsp_CmdId[UnlockAvatarTalentRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockAvatarTalentRsp_CmdId[UnlockAvatarTalentRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnlockAvatarTalentRsp_CmdId = exports.UnlockAvatarTalentRsp_CmdId || (exports.UnlockAvatarTalentRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarUnlockTalentNotify.CmdId
 */
var AvatarUnlockTalentNotify_CmdId;
(function (AvatarUnlockTalentNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarUnlockTalentNotify_CmdId[AvatarUnlockTalentNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1012;
     */
    AvatarUnlockTalentNotify_CmdId[AvatarUnlockTalentNotify_CmdId["CMD_ID"] = 1012] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarUnlockTalentNotify_CmdId[AvatarUnlockTalentNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarUnlockTalentNotify_CmdId[AvatarUnlockTalentNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarUnlockTalentNotify_CmdId = exports.AvatarUnlockTalentNotify_CmdId || (exports.AvatarUnlockTalentNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarSkillDepotChangeNotify.CmdId
 */
var AvatarSkillDepotChangeNotify_CmdId;
(function (AvatarSkillDepotChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillDepotChangeNotify_CmdId[AvatarSkillDepotChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1035;
     */
    AvatarSkillDepotChangeNotify_CmdId[AvatarSkillDepotChangeNotify_CmdId["CMD_ID"] = 1035] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillDepotChangeNotify_CmdId[AvatarSkillDepotChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSkillDepotChangeNotify_CmdId[AvatarSkillDepotChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarSkillDepotChangeNotify_CmdId = exports.AvatarSkillDepotChangeNotify_CmdId || (exports.AvatarSkillDepotChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BigTalentPointConvertReq.CmdId
 */
var BigTalentPointConvertReq_CmdId;
(function (BigTalentPointConvertReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BigTalentPointConvertReq_CmdId[BigTalentPointConvertReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1007;
     */
    BigTalentPointConvertReq_CmdId[BigTalentPointConvertReq_CmdId["CMD_ID"] = 1007] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BigTalentPointConvertReq_CmdId[BigTalentPointConvertReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BigTalentPointConvertReq_CmdId[BigTalentPointConvertReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BigTalentPointConvertReq_CmdId[BigTalentPointConvertReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BigTalentPointConvertReq_CmdId = exports.BigTalentPointConvertReq_CmdId || (exports.BigTalentPointConvertReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BigTalentPointConvertRsp.CmdId
 */
var BigTalentPointConvertRsp_CmdId;
(function (BigTalentPointConvertRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BigTalentPointConvertRsp_CmdId[BigTalentPointConvertRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1021;
     */
    BigTalentPointConvertRsp_CmdId[BigTalentPointConvertRsp_CmdId["CMD_ID"] = 1021] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BigTalentPointConvertRsp_CmdId[BigTalentPointConvertRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BigTalentPointConvertRsp_CmdId[BigTalentPointConvertRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BigTalentPointConvertRsp_CmdId = exports.BigTalentPointConvertRsp_CmdId || (exports.BigTalentPointConvertRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarSkillMaxChargeCountNotify.CmdId
 */
var AvatarSkillMaxChargeCountNotify_CmdId;
(function (AvatarSkillMaxChargeCountNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillMaxChargeCountNotify_CmdId[AvatarSkillMaxChargeCountNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1003;
     */
    AvatarSkillMaxChargeCountNotify_CmdId[AvatarSkillMaxChargeCountNotify_CmdId["CMD_ID"] = 1003] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillMaxChargeCountNotify_CmdId[AvatarSkillMaxChargeCountNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSkillMaxChargeCountNotify_CmdId[AvatarSkillMaxChargeCountNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarSkillMaxChargeCountNotify_CmdId = exports.AvatarSkillMaxChargeCountNotify_CmdId || (exports.AvatarSkillMaxChargeCountNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarSkillInfoNotify.CmdId
 */
var AvatarSkillInfoNotify_CmdId;
(function (AvatarSkillInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillInfoNotify_CmdId[AvatarSkillInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1090;
     */
    AvatarSkillInfoNotify_CmdId[AvatarSkillInfoNotify_CmdId["CMD_ID"] = 1090] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillInfoNotify_CmdId[AvatarSkillInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSkillInfoNotify_CmdId[AvatarSkillInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarSkillInfoNotify_CmdId = exports.AvatarSkillInfoNotify_CmdId || (exports.AvatarSkillInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProudSkillUpgradeReq.CmdId
 */
var ProudSkillUpgradeReq_CmdId;
(function (ProudSkillUpgradeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillUpgradeReq_CmdId[ProudSkillUpgradeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1073;
     */
    ProudSkillUpgradeReq_CmdId[ProudSkillUpgradeReq_CmdId["CMD_ID"] = 1073] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillUpgradeReq_CmdId[ProudSkillUpgradeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProudSkillUpgradeReq_CmdId[ProudSkillUpgradeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProudSkillUpgradeReq_CmdId[ProudSkillUpgradeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ProudSkillUpgradeReq_CmdId = exports.ProudSkillUpgradeReq_CmdId || (exports.ProudSkillUpgradeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProudSkillUpgradeRsp.CmdId
 */
var ProudSkillUpgradeRsp_CmdId;
(function (ProudSkillUpgradeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillUpgradeRsp_CmdId[ProudSkillUpgradeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1099;
     */
    ProudSkillUpgradeRsp_CmdId[ProudSkillUpgradeRsp_CmdId["CMD_ID"] = 1099] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillUpgradeRsp_CmdId[ProudSkillUpgradeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProudSkillUpgradeRsp_CmdId[ProudSkillUpgradeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ProudSkillUpgradeRsp_CmdId = exports.ProudSkillUpgradeRsp_CmdId || (exports.ProudSkillUpgradeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProudSkillChangeNotify.CmdId
 */
var ProudSkillChangeNotify_CmdId;
(function (ProudSkillChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillChangeNotify_CmdId[ProudSkillChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1031;
     */
    ProudSkillChangeNotify_CmdId[ProudSkillChangeNotify_CmdId["CMD_ID"] = 1031] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillChangeNotify_CmdId[ProudSkillChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProudSkillChangeNotify_CmdId[ProudSkillChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ProudSkillChangeNotify_CmdId = exports.ProudSkillChangeNotify_CmdId || (exports.ProudSkillChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarSkillUpgradeReq.CmdId
 */
var AvatarSkillUpgradeReq_CmdId;
(function (AvatarSkillUpgradeReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillUpgradeReq_CmdId[AvatarSkillUpgradeReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1075;
     */
    AvatarSkillUpgradeReq_CmdId[AvatarSkillUpgradeReq_CmdId["CMD_ID"] = 1075] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillUpgradeReq_CmdId[AvatarSkillUpgradeReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSkillUpgradeReq_CmdId[AvatarSkillUpgradeReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSkillUpgradeReq_CmdId[AvatarSkillUpgradeReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AvatarSkillUpgradeReq_CmdId = exports.AvatarSkillUpgradeReq_CmdId || (exports.AvatarSkillUpgradeReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarSkillUpgradeRsp.CmdId
 */
var AvatarSkillUpgradeRsp_CmdId;
(function (AvatarSkillUpgradeRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillUpgradeRsp_CmdId[AvatarSkillUpgradeRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1048;
     */
    AvatarSkillUpgradeRsp_CmdId[AvatarSkillUpgradeRsp_CmdId["CMD_ID"] = 1048] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillUpgradeRsp_CmdId[AvatarSkillUpgradeRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSkillUpgradeRsp_CmdId[AvatarSkillUpgradeRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarSkillUpgradeRsp_CmdId = exports.AvatarSkillUpgradeRsp_CmdId || (exports.AvatarSkillUpgradeRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarSkillChangeNotify.CmdId
 */
var AvatarSkillChangeNotify_CmdId;
(function (AvatarSkillChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillChangeNotify_CmdId[AvatarSkillChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1097;
     */
    AvatarSkillChangeNotify_CmdId[AvatarSkillChangeNotify_CmdId["CMD_ID"] = 1097] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarSkillChangeNotify_CmdId[AvatarSkillChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarSkillChangeNotify_CmdId[AvatarSkillChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarSkillChangeNotify_CmdId = exports.AvatarSkillChangeNotify_CmdId || (exports.AvatarSkillChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProudSkillExtraLevelNotify.CmdId
 */
var ProudSkillExtraLevelNotify_CmdId;
(function (ProudSkillExtraLevelNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillExtraLevelNotify_CmdId[ProudSkillExtraLevelNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1081;
     */
    ProudSkillExtraLevelNotify_CmdId[ProudSkillExtraLevelNotify_CmdId["CMD_ID"] = 1081] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProudSkillExtraLevelNotify_CmdId[ProudSkillExtraLevelNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProudSkillExtraLevelNotify_CmdId[ProudSkillExtraLevelNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ProudSkillExtraLevelNotify_CmdId = exports.ProudSkillExtraLevelNotify_CmdId || (exports.ProudSkillExtraLevelNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.CanUseSkillNotify.CmdId
 */
var CanUseSkillNotify_CmdId;
(function (CanUseSkillNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CanUseSkillNotify_CmdId[CanUseSkillNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1005;
     */
    CanUseSkillNotify_CmdId[CanUseSkillNotify_CmdId["CMD_ID"] = 1005] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    CanUseSkillNotify_CmdId[CanUseSkillNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    CanUseSkillNotify_CmdId[CanUseSkillNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(CanUseSkillNotify_CmdId = exports.CanUseSkillNotify_CmdId || (exports.CanUseSkillNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TeamResonanceChangeNotify.CmdId
 */
var TeamResonanceChangeNotify_CmdId;
(function (TeamResonanceChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TeamResonanceChangeNotify_CmdId[TeamResonanceChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1082;
     */
    TeamResonanceChangeNotify_CmdId[TeamResonanceChangeNotify_CmdId["CMD_ID"] = 1082] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TeamResonanceChangeNotify_CmdId[TeamResonanceChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TeamResonanceChangeNotify_CmdId[TeamResonanceChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TeamResonanceChangeNotify_CmdId = exports.TeamResonanceChangeNotify_CmdId || (exports.TeamResonanceChangeNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class UnlockAvatarTalentReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockAvatarTalentReq", [
            { no: 13, name: "talent_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 talent_id */ 13:
                    message.talentId = reader.uint32();
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
        /* optional uint32 talent_id = 13; */
        if (message.talentId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.talentId);
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
 * @generated MessageType for protobuf message com.midnights.game.UnlockAvatarTalentReq
 */
exports.UnlockAvatarTalentReq = new UnlockAvatarTalentReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockAvatarTalentRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockAvatarTalentRsp", [
            { no: 2, name: "talent_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
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
                case /* optional uint32 talent_id */ 2:
                    message.talentId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 3:
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
        /* optional uint32 talent_id = 2; */
        if (message.talentId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.talentId);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
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
 * @generated MessageType for protobuf message com.midnights.game.UnlockAvatarTalentRsp
 */
exports.UnlockAvatarTalentRsp = new UnlockAvatarTalentRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarUnlockTalentNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarUnlockTalentNotify", [
            { no: 14, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "talent_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 talent_id */ 10:
                    message.talentId = reader.uint32();
                    break;
                case /* optional uint32 skill_depot_id */ 1:
                    message.skillDepotId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint64 avatar_guid = 13; */
        if (message.avatarGuid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 talent_id = 10; */
        if (message.talentId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.talentId);
        /* optional uint32 skill_depot_id = 1; */
        if (message.skillDepotId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarUnlockTalentNotify
 */
exports.AvatarUnlockTalentNotify = new AvatarUnlockTalentNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillDepotChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSkillDepotChangeNotify", [
            { no: 15, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "talent_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "core_proud_skill_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { proudSkillExtraLevelMap: {}, talentIdList: [], proudSkillList: [], skillLevelMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 skill_depot_id */ 15:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 14:
                    this.binaryReadMap14(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* repeated uint32 talent_id_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 proud_skill_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.proudSkillList.push(reader.uint32());
                    else
                        message.proudSkillList.push(reader.uint32());
                    break;
                case /* optional uint32 core_proud_skill_level */ 2:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 12:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> skill_level_map */ 3:
                    this.binaryReadMap3(message.skillLevelMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarSkillDepotChangeNotify.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarSkillDepotChangeNotify.skill_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 skill_depot_id = 15; */
        if (message.skillDepotId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        /* map<uint32, uint32> proud_skill_extra_level_map = 14; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* repeated uint32 talent_id_list = 9; */
        if (message.talentIdList.length) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.talentIdList.length; i++)
                writer.uint32(message.talentIdList[i]);
            writer.join();
        }
        /* repeated uint32 proud_skill_list = 4; */
        if (message.proudSkillList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.proudSkillList.length; i++)
                writer.uint32(message.proudSkillList[i]);
            writer.join();
        }
        /* optional uint32 core_proud_skill_level = 2; */
        if (message.coreProudSkillLevel !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.coreProudSkillLevel);
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint64 avatar_guid = 12; */
        if (message.avatarGuid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* map<uint32, uint32> skill_level_map = 3; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSkillDepotChangeNotify
 */
exports.AvatarSkillDepotChangeNotify = new AvatarSkillDepotChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BigTalentPointConvertReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BigTalentPointConvertReq", [
            { no: 6, name: "item_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { itemGuidList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint64 item_guid_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.itemGuidList.push(reader.uint64().toBigInt());
                    else
                        message.itemGuidList.push(reader.uint64().toBigInt());
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
        /* repeated uint64 item_guid_list = 6; */
        if (message.itemGuidList.length) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.itemGuidList.length; i++)
                writer.uint64(message.itemGuidList[i]);
            writer.join();
        }
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
 * @generated MessageType for protobuf message com.midnights.game.BigTalentPointConvertReq
 */
exports.BigTalentPointConvertReq = new BigTalentPointConvertReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BigTalentPointConvertRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BigTalentPointConvertRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint64 avatar_guid */ 8:
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
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint64 avatar_guid = 8; */
        if (message.avatarGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BigTalentPointConvertRsp
 */
exports.BigTalentPointConvertRsp = new BigTalentPointConvertRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillMaxChargeCountNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSkillMaxChargeCountNotify", [
            { no: 6, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "max_charge_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 max_charge_count */ 11:
                    message.maxChargeCount = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 7:
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
        /* optional uint32 skill_id = 6; */
        if (message.skillId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.skillId);
        /* optional uint32 max_charge_count = 11; */
        if (message.maxChargeCount !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.maxChargeCount);
        /* optional uint64 avatar_guid = 7; */
        if (message.avatarGuid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSkillMaxChargeCountNotify
 */
exports.AvatarSkillMaxChargeCountNotify = new AvatarSkillMaxChargeCountNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSkillInfoNotify", [
            { no: 11, name: "skill_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => define_1.AvatarSkillInfo } },
            { no: 4, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { skillMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.AvatarSkillInfo> skill_map */ 11:
                    this.binaryReadMap11(message.skillMap, reader, options);
                    break;
                case /* optional uint64 guid */ 4:
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = define_1.AvatarSkillInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarSkillInfoNotify.skill_map");
            }
        }
        map[key ?? 0] = val ?? define_1.AvatarSkillInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.AvatarSkillInfo> skill_map = 11; */
        for (let k of Object.keys(message.skillMap)) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_1.AvatarSkillInfo.internalBinaryWrite(message.skillMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint64 guid = 4; */
        if (message.guid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSkillInfoNotify
 */
exports.AvatarSkillInfoNotify = new AvatarSkillInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProudSkillUpgradeReq", [
            { no: 5, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "old_proud_skill_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "proud_skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 avatar_guid */ 5:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 old_proud_skill_level */ 4:
                    message.oldProudSkillLevel = reader.uint32();
                    break;
                case /* optional uint32 proud_skill_id */ 14:
                    message.proudSkillId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 avatar_guid = 5; */
        if (message.avatarGuid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 old_proud_skill_level = 4; */
        if (message.oldProudSkillLevel !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.oldProudSkillLevel);
        /* optional uint32 proud_skill_id = 14; */
        if (message.proudSkillId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.proudSkillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProudSkillUpgradeReq
 */
exports.ProudSkillUpgradeReq = new ProudSkillUpgradeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProudSkillUpgradeRsp", [
            { no: 6, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "proud_skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint64 avatar_guid */ 6:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 proud_skill_id */ 10:
                    message.proudSkillId = reader.uint32();
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
        /* optional uint64 avatar_guid = 6; */
        if (message.avatarGuid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 proud_skill_id = 10; */
        if (message.proudSkillId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.proudSkillId);
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
 * @generated MessageType for protobuf message com.midnights.game.ProudSkillUpgradeRsp
 */
exports.ProudSkillUpgradeRsp = new ProudSkillUpgradeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProudSkillChangeNotify", [
            { no: 11, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { proudSkillList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 skill_depot_id */ 8:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* repeated uint32 proud_skill_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.proudSkillList.push(reader.uint32());
                    else
                        message.proudSkillList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 skill_depot_id = 8; */
        if (message.skillDepotId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        /* repeated uint32 proud_skill_list = 12; */
        if (message.proudSkillList.length) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.proudSkillList.length; i++)
                writer.uint32(message.proudSkillList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProudSkillChangeNotify
 */
exports.ProudSkillChangeNotify = new ProudSkillChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSkillUpgradeReq", [
            { no: 7, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "old_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 old_level */ 3:
                    message.oldLevel = reader.uint32();
                    break;
                case /* optional uint32 avatar_skill_id */ 4:
                    message.avatarSkillId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 old_level = 3; */
        if (message.oldLevel !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* optional uint32 avatar_skill_id = 4; */
        if (message.avatarSkillId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.avatarSkillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSkillUpgradeReq
 */
exports.AvatarSkillUpgradeReq = new AvatarSkillUpgradeReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSkillUpgradeRsp", [
            { no: 11, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "cur_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "avatar_skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "old_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint64 avatar_guid */ 11:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 cur_level */ 14:
                    message.curLevel = reader.uint32();
                    break;
                case /* optional uint32 avatar_skill_id */ 9:
                    message.avatarSkillId = reader.uint32();
                    break;
                case /* optional uint32 old_level */ 3:
                    message.oldLevel = reader.uint32();
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
        /* optional uint64 avatar_guid = 11; */
        if (message.avatarGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 cur_level = 14; */
        if (message.curLevel !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* optional uint32 avatar_skill_id = 9; */
        if (message.avatarSkillId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.avatarSkillId);
        /* optional uint32 old_level = 3; */
        if (message.oldLevel !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.oldLevel);
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
 * @generated MessageType for protobuf message com.midnights.game.AvatarSkillUpgradeRsp
 */
exports.AvatarSkillUpgradeRsp = new AvatarSkillUpgradeRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarSkillChangeNotify", [
            { no: 11, name: "cur_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "old_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "avatar_skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_level */ 11:
                    message.curLevel = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 2:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 skill_depot_id */ 13:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* optional uint32 old_level */ 1:
                    message.oldLevel = reader.uint32();
                    break;
                case /* optional uint32 avatar_skill_id */ 6:
                    message.avatarSkillId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 cur_level = 11; */
        if (message.curLevel !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* optional uint64 avatar_guid = 2; */
        if (message.avatarGuid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 skill_depot_id = 13; */
        if (message.skillDepotId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        /* optional uint32 old_level = 1; */
        if (message.oldLevel !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* optional uint32 avatar_skill_id = 6; */
        if (message.avatarSkillId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.avatarSkillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarSkillChangeNotify
 */
exports.AvatarSkillChangeNotify = new AvatarSkillChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillExtraLevelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProudSkillExtraLevelNotify", [
            { no: 11, name: "talent_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "talent_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "extra_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 talent_type */ 11:
                    message.talentType = reader.uint32();
                    break;
                case /* optional uint32 talent_index */ 8:
                    message.talentIndex = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 15:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 extra_level */ 3:
                    message.extraLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 talent_type = 11; */
        if (message.talentType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.talentType);
        /* optional uint32 talent_index = 8; */
        if (message.talentIndex !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.talentIndex);
        /* optional uint64 avatar_guid = 15; */
        if (message.avatarGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional uint32 extra_level = 3; */
        if (message.extraLevel !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.extraLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProudSkillExtraLevelNotify
 */
exports.ProudSkillExtraLevelNotify = new ProudSkillExtraLevelNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CanUseSkillNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CanUseSkillNotify", [
            { no: 2, name: "is_can_use_skill", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_can_use_skill */ 2:
                    message.isCanUseSkill = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_can_use_skill = 2; */
        if (message.isCanUseSkill !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isCanUseSkill);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CanUseSkillNotify
 */
exports.CanUseSkillNotify = new CanUseSkillNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarTeamResonanceInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarTeamResonanceInfo", [
            { no: 5, name: "add_team_resonance_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "del_team_resonance_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { addTeamResonanceIdList: [], delTeamResonanceIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 add_team_resonance_id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.addTeamResonanceIdList.push(reader.uint32());
                    else
                        message.addTeamResonanceIdList.push(reader.uint32());
                    break;
                case /* optional uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 3:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint32 del_team_resonance_id_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.delTeamResonanceIdList.push(reader.uint32());
                    else
                        message.delTeamResonanceIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 add_team_resonance_id_list = 5; */
        if (message.addTeamResonanceIdList.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.addTeamResonanceIdList.length; i++)
                writer.uint32(message.addTeamResonanceIdList[i]);
            writer.join();
        }
        /* optional uint32 entity_id = 11; */
        if (message.entityId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint64 avatar_guid = 3; */
        if (message.avatarGuid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* repeated uint32 del_team_resonance_id_list = 14; */
        if (message.delTeamResonanceIdList.length) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.delTeamResonanceIdList.length; i++)
                writer.uint32(message.delTeamResonanceIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarTeamResonanceInfo
 */
exports.AvatarTeamResonanceInfo = new AvatarTeamResonanceInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TeamResonanceChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TeamResonanceChangeNotify", [
            { no: 1, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AvatarTeamResonanceInfo }
        ]);
    }
    create(value) {
        const message = { infoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.AvatarTeamResonanceInfo info_list */ 1:
                    message.infoList.push(exports.AvatarTeamResonanceInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AvatarTeamResonanceInfo info_list = 1; */
        for (let i = 0; i < message.infoList.length; i++)
            exports.AvatarTeamResonanceInfo.internalBinaryWrite(message.infoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TeamResonanceChangeNotify
 */
exports.TeamResonanceChangeNotify = new TeamResonanceChangeNotify$Type();
