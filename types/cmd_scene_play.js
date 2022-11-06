"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayOutofRegionNotify = exports.ScenePlayBattleInfoListNotify = exports.ScenePlayBattleUidOpNotify = exports.ScenePlayBattleResultNotify = exports.ScenePlayBattleSettleRewardInfo = exports.ScenePlayBattleSettlePlayerInfo = exports.ScenePlayBattleInterruptNotify = exports.ScenePlayInfoListNotify = exports.ScenePlayInfo = exports.ScenePlayInviteResultNotify = exports.ScenePlayGuestReplyNotify = exports.ScenePlayGuestReplyInviteRsp = exports.ScenePlayGuestReplyInviteReq = exports.ScenePlayOwnerInviteNotify = exports.ScenePlayOwnerStartInviteRsp = exports.ScenePlayOwnerStartInviteReq = exports.ScenePlayOwnerCheckRsp = exports.ScenePlayOwnerCheckReq = exports.ScenePlayBattleInfoNotify = exports.ScenePlayBattleInfo = exports.ScenePlayBattleState = exports.ScenePlayOutofRegionNotify_CmdId = exports.ScenePlayBattleInfoListNotify_CmdId = exports.ScenePlayBattleUidOpNotify_CmdId = exports.ScenePlayBattleResultNotify_CmdId = exports.ScenePlayBattleInterruptNotify_CmdId = exports.ScenePlayInfoListNotify_CmdId = exports.ScenePlayInviteResultNotify_CmdId = exports.ScenePlayGuestReplyNotify_CmdId = exports.ScenePlayGuestReplyInviteRsp_CmdId = exports.ScenePlayGuestReplyInviteReq_CmdId = exports.ScenePlayOwnerInviteNotify_CmdId = exports.ScenePlayOwnerStartInviteRsp_CmdId = exports.ScenePlayOwnerStartInviteReq_CmdId = exports.ScenePlayOwnerCheckRsp_CmdId = exports.ScenePlayOwnerCheckReq_CmdId = exports.ScenePlayBattleInfoNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayBattleInfoNotify.CmdId
 */
var ScenePlayBattleInfoNotify_CmdId;
(function (ScenePlayBattleInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleInfoNotify_CmdId[ScenePlayBattleInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4422;
     */
    ScenePlayBattleInfoNotify_CmdId[ScenePlayBattleInfoNotify_CmdId["CMD_ID"] = 4422] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleInfoNotify_CmdId[ScenePlayBattleInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayBattleInfoNotify_CmdId[ScenePlayBattleInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayBattleInfoNotify_CmdId = exports.ScenePlayBattleInfoNotify_CmdId || (exports.ScenePlayBattleInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayOwnerCheckReq.CmdId
 */
var ScenePlayOwnerCheckReq_CmdId;
(function (ScenePlayOwnerCheckReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerCheckReq_CmdId[ScenePlayOwnerCheckReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4448;
     */
    ScenePlayOwnerCheckReq_CmdId[ScenePlayOwnerCheckReq_CmdId["CMD_ID"] = 4448] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerCheckReq_CmdId[ScenePlayOwnerCheckReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOwnerCheckReq_CmdId[ScenePlayOwnerCheckReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOwnerCheckReq_CmdId[ScenePlayOwnerCheckReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ScenePlayOwnerCheckReq_CmdId = exports.ScenePlayOwnerCheckReq_CmdId || (exports.ScenePlayOwnerCheckReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayOwnerCheckRsp.CmdId
 */
var ScenePlayOwnerCheckRsp_CmdId;
(function (ScenePlayOwnerCheckRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerCheckRsp_CmdId[ScenePlayOwnerCheckRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4362;
     */
    ScenePlayOwnerCheckRsp_CmdId[ScenePlayOwnerCheckRsp_CmdId["CMD_ID"] = 4362] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerCheckRsp_CmdId[ScenePlayOwnerCheckRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOwnerCheckRsp_CmdId[ScenePlayOwnerCheckRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayOwnerCheckRsp_CmdId = exports.ScenePlayOwnerCheckRsp_CmdId || (exports.ScenePlayOwnerCheckRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayOwnerStartInviteReq.CmdId
 */
var ScenePlayOwnerStartInviteReq_CmdId;
(function (ScenePlayOwnerStartInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerStartInviteReq_CmdId[ScenePlayOwnerStartInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4385;
     */
    ScenePlayOwnerStartInviteReq_CmdId[ScenePlayOwnerStartInviteReq_CmdId["CMD_ID"] = 4385] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerStartInviteReq_CmdId[ScenePlayOwnerStartInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOwnerStartInviteReq_CmdId[ScenePlayOwnerStartInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOwnerStartInviteReq_CmdId[ScenePlayOwnerStartInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ScenePlayOwnerStartInviteReq_CmdId = exports.ScenePlayOwnerStartInviteReq_CmdId || (exports.ScenePlayOwnerStartInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayOwnerStartInviteRsp.CmdId
 */
var ScenePlayOwnerStartInviteRsp_CmdId;
(function (ScenePlayOwnerStartInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerStartInviteRsp_CmdId[ScenePlayOwnerStartInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4357;
     */
    ScenePlayOwnerStartInviteRsp_CmdId[ScenePlayOwnerStartInviteRsp_CmdId["CMD_ID"] = 4357] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerStartInviteRsp_CmdId[ScenePlayOwnerStartInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOwnerStartInviteRsp_CmdId[ScenePlayOwnerStartInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayOwnerStartInviteRsp_CmdId = exports.ScenePlayOwnerStartInviteRsp_CmdId || (exports.ScenePlayOwnerStartInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayOwnerInviteNotify.CmdId
 */
var ScenePlayOwnerInviteNotify_CmdId;
(function (ScenePlayOwnerInviteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerInviteNotify_CmdId[ScenePlayOwnerInviteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4371;
     */
    ScenePlayOwnerInviteNotify_CmdId[ScenePlayOwnerInviteNotify_CmdId["CMD_ID"] = 4371] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOwnerInviteNotify_CmdId[ScenePlayOwnerInviteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOwnerInviteNotify_CmdId[ScenePlayOwnerInviteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayOwnerInviteNotify_CmdId = exports.ScenePlayOwnerInviteNotify_CmdId || (exports.ScenePlayOwnerInviteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayGuestReplyInviteReq.CmdId
 */
var ScenePlayGuestReplyInviteReq_CmdId;
(function (ScenePlayGuestReplyInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayGuestReplyInviteReq_CmdId[ScenePlayGuestReplyInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4353;
     */
    ScenePlayGuestReplyInviteReq_CmdId[ScenePlayGuestReplyInviteReq_CmdId["CMD_ID"] = 4353] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayGuestReplyInviteReq_CmdId[ScenePlayGuestReplyInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayGuestReplyInviteReq_CmdId[ScenePlayGuestReplyInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayGuestReplyInviteReq_CmdId[ScenePlayGuestReplyInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ScenePlayGuestReplyInviteReq_CmdId = exports.ScenePlayGuestReplyInviteReq_CmdId || (exports.ScenePlayGuestReplyInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayGuestReplyInviteRsp.CmdId
 */
var ScenePlayGuestReplyInviteRsp_CmdId;
(function (ScenePlayGuestReplyInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayGuestReplyInviteRsp_CmdId[ScenePlayGuestReplyInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4440;
     */
    ScenePlayGuestReplyInviteRsp_CmdId[ScenePlayGuestReplyInviteRsp_CmdId["CMD_ID"] = 4440] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayGuestReplyInviteRsp_CmdId[ScenePlayGuestReplyInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayGuestReplyInviteRsp_CmdId[ScenePlayGuestReplyInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayGuestReplyInviteRsp_CmdId = exports.ScenePlayGuestReplyInviteRsp_CmdId || (exports.ScenePlayGuestReplyInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayGuestReplyNotify.CmdId
 */
var ScenePlayGuestReplyNotify_CmdId;
(function (ScenePlayGuestReplyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayGuestReplyNotify_CmdId[ScenePlayGuestReplyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4423;
     */
    ScenePlayGuestReplyNotify_CmdId[ScenePlayGuestReplyNotify_CmdId["CMD_ID"] = 4423] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayGuestReplyNotify_CmdId[ScenePlayGuestReplyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayGuestReplyNotify_CmdId[ScenePlayGuestReplyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayGuestReplyNotify_CmdId = exports.ScenePlayGuestReplyNotify_CmdId || (exports.ScenePlayGuestReplyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayInviteResultNotify.CmdId
 */
var ScenePlayInviteResultNotify_CmdId;
(function (ScenePlayInviteResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayInviteResultNotify_CmdId[ScenePlayInviteResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4449;
     */
    ScenePlayInviteResultNotify_CmdId[ScenePlayInviteResultNotify_CmdId["CMD_ID"] = 4449] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayInviteResultNotify_CmdId[ScenePlayInviteResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayInviteResultNotify_CmdId[ScenePlayInviteResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayInviteResultNotify_CmdId = exports.ScenePlayInviteResultNotify_CmdId || (exports.ScenePlayInviteResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayInfoListNotify.CmdId
 */
var ScenePlayInfoListNotify_CmdId;
(function (ScenePlayInfoListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayInfoListNotify_CmdId[ScenePlayInfoListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4381;
     */
    ScenePlayInfoListNotify_CmdId[ScenePlayInfoListNotify_CmdId["CMD_ID"] = 4381] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayInfoListNotify_CmdId[ScenePlayInfoListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayInfoListNotify_CmdId[ScenePlayInfoListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayInfoListNotify_CmdId = exports.ScenePlayInfoListNotify_CmdId || (exports.ScenePlayInfoListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayBattleInterruptNotify.CmdId
 */
var ScenePlayBattleInterruptNotify_CmdId;
(function (ScenePlayBattleInterruptNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleInterruptNotify_CmdId[ScenePlayBattleInterruptNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4425;
     */
    ScenePlayBattleInterruptNotify_CmdId[ScenePlayBattleInterruptNotify_CmdId["CMD_ID"] = 4425] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleInterruptNotify_CmdId[ScenePlayBattleInterruptNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayBattleInterruptNotify_CmdId[ScenePlayBattleInterruptNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayBattleInterruptNotify_CmdId = exports.ScenePlayBattleInterruptNotify_CmdId || (exports.ScenePlayBattleInterruptNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayBattleResultNotify.CmdId
 */
var ScenePlayBattleResultNotify_CmdId;
(function (ScenePlayBattleResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleResultNotify_CmdId[ScenePlayBattleResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4398;
     */
    ScenePlayBattleResultNotify_CmdId[ScenePlayBattleResultNotify_CmdId["CMD_ID"] = 4398] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleResultNotify_CmdId[ScenePlayBattleResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayBattleResultNotify_CmdId[ScenePlayBattleResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayBattleResultNotify_CmdId = exports.ScenePlayBattleResultNotify_CmdId || (exports.ScenePlayBattleResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayBattleUidOpNotify.CmdId
 */
var ScenePlayBattleUidOpNotify_CmdId;
(function (ScenePlayBattleUidOpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleUidOpNotify_CmdId[ScenePlayBattleUidOpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4447;
     */
    ScenePlayBattleUidOpNotify_CmdId[ScenePlayBattleUidOpNotify_CmdId["CMD_ID"] = 4447] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleUidOpNotify_CmdId[ScenePlayBattleUidOpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayBattleUidOpNotify_CmdId[ScenePlayBattleUidOpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayBattleUidOpNotify_CmdId = exports.ScenePlayBattleUidOpNotify_CmdId || (exports.ScenePlayBattleUidOpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayBattleInfoListNotify.CmdId
 */
var ScenePlayBattleInfoListNotify_CmdId;
(function (ScenePlayBattleInfoListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleInfoListNotify_CmdId[ScenePlayBattleInfoListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4431;
     */
    ScenePlayBattleInfoListNotify_CmdId[ScenePlayBattleInfoListNotify_CmdId["CMD_ID"] = 4431] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayBattleInfoListNotify_CmdId[ScenePlayBattleInfoListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayBattleInfoListNotify_CmdId[ScenePlayBattleInfoListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ScenePlayBattleInfoListNotify_CmdId = exports.ScenePlayBattleInfoListNotify_CmdId || (exports.ScenePlayBattleInfoListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayOutofRegionNotify.CmdId
 */
var ScenePlayOutofRegionNotify_CmdId;
(function (ScenePlayOutofRegionNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOutofRegionNotify_CmdId[ScenePlayOutofRegionNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4355;
     */
    ScenePlayOutofRegionNotify_CmdId[ScenePlayOutofRegionNotify_CmdId["CMD_ID"] = 4355] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ScenePlayOutofRegionNotify_CmdId[ScenePlayOutofRegionNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOutofRegionNotify_CmdId[ScenePlayOutofRegionNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ScenePlayOutofRegionNotify_CmdId[ScenePlayOutofRegionNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ScenePlayOutofRegionNotify_CmdId = exports.ScenePlayOutofRegionNotify_CmdId || (exports.ScenePlayOutofRegionNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ScenePlayBattleState
 */
var ScenePlayBattleState;
(function (ScenePlayBattleState) {
    /**
     * @generated from protobuf enum value: SCENE_PLAY_BATTLE_NONE = 0;
     */
    ScenePlayBattleState[ScenePlayBattleState["SCENE_PLAY_BATTLE_NONE"] = 0] = "SCENE_PLAY_BATTLE_NONE";
    /**
     * @generated from protobuf enum value: SCENE_PLAY_BATTLE_INIT = 1;
     */
    ScenePlayBattleState[ScenePlayBattleState["SCENE_PLAY_BATTLE_INIT"] = 1] = "SCENE_PLAY_BATTLE_INIT";
    /**
     * @generated from protobuf enum value: SCENE_PLAY_BATTLE_PREPARE = 2;
     */
    ScenePlayBattleState[ScenePlayBattleState["SCENE_PLAY_BATTLE_PREPARE"] = 2] = "SCENE_PLAY_BATTLE_PREPARE";
    /**
     * @generated from protobuf enum value: SCENE_PLAY_BATTLE_READY = 3;
     */
    ScenePlayBattleState[ScenePlayBattleState["SCENE_PLAY_BATTLE_READY"] = 3] = "SCENE_PLAY_BATTLE_READY";
    /**
     * @generated from protobuf enum value: SCENE_PLAY_BATTLE_PRESTART = 4;
     */
    ScenePlayBattleState[ScenePlayBattleState["SCENE_PLAY_BATTLE_PRESTART"] = 4] = "SCENE_PLAY_BATTLE_PRESTART";
    /**
     * @generated from protobuf enum value: SCENE_PLAY_BATTLE_START = 5;
     */
    ScenePlayBattleState[ScenePlayBattleState["SCENE_PLAY_BATTLE_START"] = 5] = "SCENE_PLAY_BATTLE_START";
    /**
     * @generated from protobuf enum value: SCENE_PLAY_BATTLE_STOP = 6;
     */
    ScenePlayBattleState[ScenePlayBattleState["SCENE_PLAY_BATTLE_STOP"] = 6] = "SCENE_PLAY_BATTLE_STOP";
})(ScenePlayBattleState = exports.ScenePlayBattleState || (exports.ScenePlayBattleState = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleInfo", [
            { no: 4, name: "mode", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "progress_stage_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "start_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "prepare_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { progressStageList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 mode */ 4:
                    message.mode = reader.uint32();
                    break;
                case /* repeated uint32 progress_stage_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.progressStageList.push(reader.uint32());
                    else
                        message.progressStageList.push(reader.uint32());
                    break;
                case /* optional uint32 start_time */ 10:
                    message.startTime = reader.uint32();
                    break;
                case /* optional uint32 duration */ 14:
                    message.duration = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 12:
                    message.playType = reader.uint32();
                    break;
                case /* optional uint32 play_id */ 1:
                    message.playId = reader.uint32();
                    break;
                case /* optional uint32 prepare_end_time */ 7:
                    message.prepareEndTime = reader.uint32();
                    break;
                case /* optional uint32 progress */ 11:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 state */ 8:
                    message.state = reader.uint32();
                    break;
                case /* optional uint32 type */ 9:
                    message.type = reader.uint32();
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
        /* optional uint32 mode = 4; */
        if (message.mode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.mode);
        /* repeated uint32 progress_stage_list = 3; */
        for (let i = 0; i < message.progressStageList.length; i++)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.progressStageList[i]);
        /* optional uint32 start_time = 10; */
        if (message.startTime !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.startTime);
        /* optional uint32 duration = 14; */
        if (message.duration !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.duration);
        /* optional uint32 play_type = 12; */
        if (message.playType !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.playType);
        /* optional uint32 play_id = 1; */
        if (message.playId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.playId);
        /* optional uint32 prepare_end_time = 7; */
        if (message.prepareEndTime !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.prepareEndTime);
        /* optional uint32 progress = 11; */
        if (message.progress !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.progress);
        /* optional uint32 state = 8; */
        if (message.state !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.state);
        /* optional uint32 type = 9; */
        if (message.type !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleInfo
 */
exports.ScenePlayBattleInfo = new ScenePlayBattleInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleInfoNotify", [
            { no: 11, name: "battle_info", kind: "message", T: () => exports.ScenePlayBattleInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ScenePlayBattleInfo battle_info */ 11:
                    message.battleInfo = exports.ScenePlayBattleInfo.internalBinaryRead(reader, reader.uint32(), options, message.battleInfo);
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
        /* optional com.midnights.game.ScenePlayBattleInfo battle_info = 11; */
        if (message.battleInfo)
            exports.ScenePlayBattleInfo.internalBinaryWrite(message.battleInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleInfoNotify
 */
exports.ScenePlayBattleInfoNotify = new ScenePlayBattleInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOwnerCheckReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayOwnerCheckReq", [
            { no: 9, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_id */ 9:
                    message.playId = reader.uint32();
                    break;
                case /* optional bool is_skip_match */ 6:
                    message.isSkipMatch = reader.bool();
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
        /* optional uint32 play_id = 9; */
        if (message.playId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.playId);
        /* optional bool is_skip_match = 6; */
        if (message.isSkipMatch !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isSkipMatch);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayOwnerCheckReq
 */
exports.ScenePlayOwnerCheckReq = new ScenePlayOwnerCheckReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOwnerCheckRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayOwnerCheckRsp", [
            { no: 8, name: "param_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "wrong_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* repeated uint32 param_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional bool is_skip_match */ 1:
                    message.isSkipMatch = reader.bool();
                    break;
                case /* optional uint32 play_id */ 9:
                    message.playId = reader.uint32();
                    break;
                case /* optional uint32 wrong_uid */ 5:
                    message.wrongUid = reader.uint32();
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 param_list = 8; */
        for (let i = 0; i < message.paramList.length; i++)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.paramList[i]);
        /* optional bool is_skip_match = 1; */
        if (message.isSkipMatch !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isSkipMatch);
        /* optional uint32 play_id = 9; */
        if (message.playId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.playId);
        /* optional uint32 wrong_uid = 5; */
        if (message.wrongUid !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.wrongUid);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayOwnerCheckRsp
 */
exports.ScenePlayOwnerCheckRsp = new ScenePlayOwnerCheckRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOwnerStartInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayOwnerStartInviteReq", [
            { no: 8, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_skip_match */ 8:
                    message.isSkipMatch = reader.bool();
                    break;
                case /* optional uint32 play_id */ 13:
                    message.playId = reader.uint32();
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
        /* optional bool is_skip_match = 8; */
        if (message.isSkipMatch !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isSkipMatch);
        /* optional uint32 play_id = 13; */
        if (message.playId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayOwnerStartInviteReq
 */
exports.ScenePlayOwnerStartInviteReq = new ScenePlayOwnerStartInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOwnerStartInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayOwnerStartInviteRsp", [
            { no: 7, name: "is_skip_match", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_skip_match */ 7:
                    message.isSkipMatch = reader.bool();
                    break;
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 play_id */ 11:
                    message.playId = reader.uint32();
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
        /* optional bool is_skip_match = 7; */
        if (message.isSkipMatch !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isSkipMatch);
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 play_id = 11; */
        if (message.playId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayOwnerStartInviteRsp
 */
exports.ScenePlayOwnerStartInviteRsp = new ScenePlayOwnerStartInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOwnerInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayOwnerInviteNotify", [
            { no: 14, name: "invite_cd", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_remain_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 invite_cd */ 14:
                    message.inviteCd = reader.uint32();
                    break;
                case /* optional uint32 play_id */ 5:
                    message.playId = reader.uint32();
                    break;
                case /* optional bool is_remain_reward */ 15:
                    message.isRemainReward = reader.bool();
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
        /* optional uint32 invite_cd = 14; */
        if (message.inviteCd !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.inviteCd);
        /* optional uint32 play_id = 5; */
        if (message.playId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.playId);
        /* optional bool is_remain_reward = 15; */
        if (message.isRemainReward !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isRemainReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayOwnerInviteNotify
 */
exports.ScenePlayOwnerInviteNotify = new ScenePlayOwnerInviteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayGuestReplyInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayGuestReplyInviteReq", [
            { no: 15, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_agree */ 15:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 play_id */ 6:
                    message.playId = reader.uint32();
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
        /* optional bool is_agree = 15; */
        if (message.isAgree !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isAgree);
        /* optional uint32 play_id = 6; */
        if (message.playId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayGuestReplyInviteReq
 */
exports.ScenePlayGuestReplyInviteReq = new ScenePlayGuestReplyInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayGuestReplyInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayGuestReplyInviteRsp", [
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_agree */ 2:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 play_id */ 8:
                    message.playId = reader.uint32();
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
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional bool is_agree = 2; */
        if (message.isAgree !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isAgree);
        /* optional uint32 play_id = 8; */
        if (message.playId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayGuestReplyInviteRsp
 */
exports.ScenePlayGuestReplyInviteRsp = new ScenePlayGuestReplyInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayGuestReplyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayGuestReplyNotify", [
            { no: 13, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "guest_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_id */ 13:
                    message.playId = reader.uint32();
                    break;
                case /* optional uint32 guest_uid */ 12:
                    message.guestUid = reader.uint32();
                    break;
                case /* optional bool is_agree */ 3:
                    message.isAgree = reader.bool();
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
        /* optional uint32 play_id = 13; */
        if (message.playId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.playId);
        /* optional uint32 guest_uid = 12; */
        if (message.guestUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.guestUid);
        /* optional bool is_agree = 3; */
        if (message.isAgree !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.isAgree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayGuestReplyNotify
 */
exports.ScenePlayGuestReplyNotify = new ScenePlayGuestReplyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayInviteResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayInviteResultNotify", [
            { no: 11, name: "is_all_argee", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_all_argee */ 11:
                    message.isAllArgee = reader.bool();
                    break;
                case /* optional uint32 play_id */ 15:
                    message.playId = reader.uint32();
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
        /* optional bool is_all_argee = 11; */
        if (message.isAllArgee !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isAllArgee);
        /* optional uint32 play_id = 15; */
        if (message.playId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayInviteResultNotify
 */
exports.ScenePlayInviteResultNotify = new ScenePlayInviteResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayInfo", [
            { no: 15, name: "entry_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entry_id */ 15:
                    message.entryId = reader.uint32();
                    break;
                case /* optional uint32 play_id */ 11:
                    message.playId = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 3:
                    message.playType = reader.uint32();
                    break;
                case /* optional bool is_open */ 9:
                    message.isOpen = reader.bool();
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
        /* optional uint32 entry_id = 15; */
        if (message.entryId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.entryId);
        /* optional uint32 play_id = 11; */
        if (message.playId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.playId);
        /* optional uint32 play_type = 3; */
        if (message.playType !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.playType);
        /* optional bool is_open = 9; */
        if (message.isOpen !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayInfo
 */
exports.ScenePlayInfo = new ScenePlayInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayInfoListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayInfoListNotify", [
            { no: 6, name: "play_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ScenePlayInfo }
        ]);
    }
    create(value) {
        const message = { playInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ScenePlayInfo play_info_list */ 6:
                    message.playInfoList.push(exports.ScenePlayInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ScenePlayInfo play_info_list = 6; */
        for (let i = 0; i < message.playInfoList.length; i++)
            exports.ScenePlayInfo.internalBinaryWrite(message.playInfoList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayInfoListNotify
 */
exports.ScenePlayInfoListNotify = new ScenePlayInfoListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleInterruptNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleInterruptNotify", [
            { no: 6, name: "interrupt_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 interrupt_state */ 6:
                    message.interruptState = reader.uint32();
                    break;
                case /* optional uint32 play_id */ 5:
                    message.playId = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 1:
                    message.playType = reader.uint32();
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
        /* optional uint32 interrupt_state = 6; */
        if (message.interruptState !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.interruptState);
        /* optional uint32 play_id = 5; */
        if (message.playId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.playId);
        /* optional uint32 play_type = 1; */
        if (message.playType !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.playType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleInterruptNotify
 */
exports.ScenePlayBattleInterruptNotify = new ScenePlayBattleInterruptNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleSettlePlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleSettlePlayerInfo", [
            { no: 14, name: "card_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_3.ExhibitionDisplayInfo },
            { no: 10, name: "profile_picture", kind: "message", T: () => define_2.ProfilePicture },
            { no: 11, name: "head_image", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "statistic_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "param", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* repeated com.midnights.game.ExhibitionDisplayInfo card_list */ 14:
                    message.cardList.push(define_3.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 10:
                    message.profilePicture = define_2.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* optional uint32 head_image */ 11:
                    message.headImage = reader.uint32();
                    break;
                case /* optional uint32 statistic_id */ 4:
                    message.statisticId = reader.uint32();
                    break;
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional int64 param */ 5:
                    message.param = reader.int64().toBigInt();
                    break;
                case /* optional string online_id */ 12:
                    message.onlineId = reader.string();
                    break;
                case /* optional string nickname */ 15:
                    message.nickname = reader.string();
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
        /* repeated com.midnights.game.ExhibitionDisplayInfo card_list = 14; */
        for (let i = 0; i < message.cardList.length; i++)
            define_3.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.ProfilePicture profile_picture = 10; */
        if (message.profilePicture)
            define_2.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 head_image = 11; */
        if (message.headImage !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.headImage);
        /* optional uint32 statistic_id = 4; */
        if (message.statisticId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.statisticId);
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* optional int64 param = 5; */
        if (message.param !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int64(message.param);
        /* optional string online_id = 12; */
        if (message.onlineId !== undefined)
            writer.tag(12, runtime_2.WireType.LengthDelimited).string(message.onlineId);
        /* optional string nickname = 15; */
        if (message.nickname !== undefined)
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.nickname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleSettlePlayerInfo
 */
exports.ScenePlayBattleSettlePlayerInfo = new ScenePlayBattleSettlePlayerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleSettleRewardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleSettleRewardInfo", [
            { no: 4, name: "reward_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam },
            { no: 3, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { rewardItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ItemParam reward_item_list */ 4:
                    message.rewardItemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 uid */ 3:
                    message.uid = reader.uint32();
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
        /* repeated com.midnights.game.ItemParam reward_item_list = 4; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 uid = 3; */
        if (message.uid !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleSettleRewardInfo
 */
exports.ScenePlayBattleSettleRewardInfo = new ScenePlayBattleSettleRewardInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleResultNotify", [
            { no: 1, name: "is_win", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "cost_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "settle_player_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ScenePlayBattleSettlePlayerInfo },
            { no: 14, name: "settle_reward_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ScenePlayBattleSettleRewardInfo }
        ]);
    }
    create(value) {
        const message = { settlePlayerInfoList: [], settleRewardInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_win */ 1:
                    message.isWin = reader.bool();
                    break;
                case /* optional uint32 cost_time */ 7:
                    message.costTime = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 15:
                    message.playType = reader.uint32();
                    break;
                case /* optional uint32 play_id */ 11:
                    message.playId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ScenePlayBattleSettlePlayerInfo settle_player_info_list */ 4:
                    message.settlePlayerInfoList.push(exports.ScenePlayBattleSettlePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ScenePlayBattleSettleRewardInfo settle_reward_info_list */ 14:
                    message.settleRewardInfoList.push(exports.ScenePlayBattleSettleRewardInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional bool is_win = 1; */
        if (message.isWin !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isWin);
        /* optional uint32 cost_time = 7; */
        if (message.costTime !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.costTime);
        /* optional uint32 play_type = 15; */
        if (message.playType !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.playType);
        /* optional uint32 play_id = 11; */
        if (message.playId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.playId);
        /* repeated com.midnights.game.ScenePlayBattleSettlePlayerInfo settle_player_info_list = 4; */
        for (let i = 0; i < message.settlePlayerInfoList.length; i++)
            exports.ScenePlayBattleSettlePlayerInfo.internalBinaryWrite(message.settlePlayerInfoList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ScenePlayBattleSettleRewardInfo settle_reward_info_list = 14; */
        for (let i = 0; i < message.settleRewardInfoList.length; i++)
            exports.ScenePlayBattleSettleRewardInfo.internalBinaryWrite(message.settleRewardInfoList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleResultNotify
 */
exports.ScenePlayBattleResultNotify = new ScenePlayBattleResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleUidOpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleUidOpNotify", [
            { no: 7, name: "op", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "param_target_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param_str", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "uid_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "param_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "param_duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "param_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramTargetList: [], uidList: [], paramList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 op */ 7:
                    message.op = reader.uint32();
                    break;
                case /* repeated uint32 param_target_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramTargetList.push(reader.uint32());
                    else
                        message.paramTargetList.push(reader.uint32());
                    break;
                case /* optional uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* optional string param_str */ 3:
                    message.paramStr = reader.string();
                    break;
                case /* repeated uint32 uid_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* optional uint32 param_index */ 11:
                    message.paramIndex = reader.uint32();
                    break;
                case /* optional uint32 play_type */ 8:
                    message.playType = reader.uint32();
                    break;
                case /* optional uint32 param_duration */ 12:
                    message.paramDuration = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional uint32 play_id */ 5:
                    message.playId = reader.uint32();
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
        /* optional uint32 op = 7; */
        if (message.op !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.op);
        /* repeated uint32 param_target_list = 9; */
        for (let i = 0; i < message.paramTargetList.length; i++)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.paramTargetList[i]);
        /* optional uint32 entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.entityId);
        /* optional string param_str = 3; */
        if (message.paramStr !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.paramStr);
        /* repeated uint32 uid_list = 6; */
        for (let i = 0; i < message.uidList.length; i++)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.uidList[i]);
        /* optional uint32 param_index = 11; */
        if (message.paramIndex !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.paramIndex);
        /* optional uint32 play_type = 8; */
        if (message.playType !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.playType);
        /* optional uint32 param_duration = 12; */
        if (message.paramDuration !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.paramDuration);
        /* repeated uint32 param_list = 15; */
        for (let i = 0; i < message.paramList.length; i++)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.paramList[i]);
        /* optional uint32 play_id = 5; */
        if (message.playId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleUidOpNotify
 */
exports.ScenePlayBattleUidOpNotify = new ScenePlayBattleUidOpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleInfoListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayBattleInfoListNotify", [
            { no: 12, name: "battle_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.ScenePlayBattleInfo }
        ]);
    }
    create(value) {
        const message = { battleInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.ScenePlayBattleInfo battle_info_list */ 12:
                    message.battleInfoList.push(exports.ScenePlayBattleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ScenePlayBattleInfo battle_info_list = 12; */
        for (let i = 0; i < message.battleInfoList.length; i++)
            exports.ScenePlayBattleInfo.internalBinaryWrite(message.battleInfoList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayBattleInfoListNotify
 */
exports.ScenePlayBattleInfoListNotify = new ScenePlayBattleInfoListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOutofRegionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ScenePlayOutofRegionNotify", [
            { no: 13, name: "play_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 play_id */ 13:
                    message.playId = reader.uint32();
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
        /* optional uint32 play_id = 13; */
        if (message.playId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ScenePlayOutofRegionNotify
 */
exports.ScenePlayOutofRegionNotify = new ScenePlayOutofRegionNotify$Type();
