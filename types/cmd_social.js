"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFriendShowNameCardInfoRsp_CmdId = exports.GetFriendShowNameCardInfoReq_CmdId = exports.UpdatePlayerShowNameCardListRsp_CmdId = exports.UpdatePlayerShowNameCardListReq_CmdId = exports.GetFriendShowAvatarInfoRsp_CmdId = exports.GetFriendShowAvatarInfoReq_CmdId = exports.UpdatePlayerShowAvatarListRsp_CmdId = exports.UpdatePlayerShowAvatarListReq_CmdId = exports.SetFriendRemarkNameRsp_CmdId = exports.SetFriendRemarkNameReq_CmdId = exports.PlayerReportRsp_CmdId = exports.PlayerReportReq_CmdId = exports.GetPlayerBlacklistRsp_CmdId = exports.GetPlayerBlacklistReq_CmdId = exports.UpdatePS4BlockListRsp_CmdId = exports.UpdatePS4BlockListReq_CmdId = exports.TakeFirstShareRewardRsp_CmdId = exports.TakeFirstShareRewardReq_CmdId = exports.SocialDataNotify_CmdId = exports.GetRecentMpPlayerListRsp_CmdId = exports.GetRecentMpPlayerListReq_CmdId = exports.UnlockNameCardNotify_CmdId = exports.RemoveBlacklistRsp_CmdId = exports.RemoveBlacklistReq_CmdId = exports.AddBlacklistRsp_CmdId = exports.AddBlacklistReq_CmdId = exports.GetAllUnlockNameCardRsp_CmdId = exports.GetAllUnlockNameCardReq_CmdId = exports.SetNameCardRsp_CmdId = exports.SetNameCardReq_CmdId = exports.AskAddFriendNotify_CmdId = exports.AddFriendNotify_CmdId = exports.DeleteFriendNotify_CmdId = exports.UpdatePS4FriendListNotify_CmdId = exports.SetPlayerHeadImageRsp_CmdId = exports.SetPlayerHeadImageReq_CmdId = exports.SetPlayerSignatureRsp_CmdId = exports.SetPlayerSignatureReq_CmdId = exports.SetPlayerBirthdayRsp_CmdId = exports.SetPlayerBirthdayReq_CmdId = exports.DeleteFriendRsp_CmdId = exports.DeleteFriendReq_CmdId = exports.GetPlayerSocialDetailRsp_CmdId = exports.GetPlayerSocialDetailReq_CmdId = exports.DealAddFriendRsp_CmdId = exports.DealAddFriendReq_CmdId = exports.AskAddFriendRsp_CmdId = exports.AskAddFriendReq_CmdId = exports.GetPlayerFriendListRsp_CmdId = exports.GetPlayerFriendListReq_CmdId = void 0;
exports.AddBlacklistReq = exports.GetAllUnlockNameCardRsp = exports.GetAllUnlockNameCardReq = exports.SetNameCardRsp = exports.SetNameCardReq = exports.AskAddFriendNotify = exports.AddFriendNotify = exports.DeleteFriendNotify = exports.UpdatePS4FriendListNotify = exports.SetPlayerHeadImageRsp = exports.SetPlayerHeadImageReq = exports.SetPlayerSignatureRsp = exports.SetPlayerSignatureReq = exports.SetPlayerBirthdayRsp = exports.SetPlayerBirthdayReq = exports.DeleteFriendRsp = exports.DeleteFriendReq = exports.GetPlayerSocialDetailRsp = exports.GetPlayerSocialDetailReq = exports.DealAddFriendRsp = exports.DealAddFriendReq = exports.AskAddFriendRsp = exports.AskAddFriendReq = exports.GetPlayerFriendListRsp = exports.GetPlayerFriendListReq = exports.ChatEmojiCollectionData = exports.FriendBrief = exports.SocialDetail = exports.SocialShowAvatarInfo = exports.DealAddFriendResultType = exports.FriendOnlineState = exports.ReadSignatureAuditRsp_CmdId = exports.ReadSignatureAuditReq_CmdId = exports.SignatureAuditConfigNotify_CmdId = exports.PlayerSignatureNotify_CmdId = exports.PlayerSignatureAuditDataNotify_CmdId = exports.FriendInfoChangeNotify_CmdId = exports.UpdatePS4FriendListRsp_CmdId = exports.UpdatePS4FriendListReq_CmdId = exports.SetChatEmojiCollectionRsp_CmdId = exports.SetChatEmojiCollectionReq_CmdId = exports.GetChatEmojiCollectionRsp_CmdId = exports.GetChatEmojiCollectionReq_CmdId = exports.GetPlayerAskFriendListRsp_CmdId = exports.GetPlayerAskFriendListReq_CmdId = exports.PSNBlackListNotify_CmdId = exports.PSNFriendListNotify_CmdId = exports.ProfilePictureChangeNotify_CmdId = exports.ForceAddPlayerFriendRsp_CmdId = exports.ForceAddPlayerFriendReq_CmdId = void 0;
exports.ReadSignatureAuditRsp = exports.ReadSignatureAuditReq = exports.SignatureAuditConfigNotify = exports.PlayerSignatureNotify = exports.PlayerSignatureAuditDataNotify = exports.FriendInfoChangeNotify = exports.UpdatePS4FriendListRsp = exports.UpdatePS4FriendListReq = exports.SetChatEmojiCollectionRsp = exports.SetChatEmojiCollectionReq = exports.GetChatEmojiCollectionRsp = exports.GetChatEmojiCollectionReq = exports.GetPlayerAskFriendListRsp = exports.GetPlayerAskFriendListReq = exports.PSNBlackListNotify = exports.PSNFriendListNotify = exports.ProfilePictureChangeNotify = exports.ForceAddPlayerFriendRsp = exports.ForceAddPlayerFriendReq = exports.GetFriendShowNameCardInfoRsp = exports.GetFriendShowNameCardInfoReq = exports.UpdatePlayerShowNameCardListRsp = exports.UpdatePlayerShowNameCardListReq = exports.GetFriendShowAvatarInfoRsp = exports.GetFriendShowAvatarInfoReq = exports.UpdatePlayerShowAvatarListRsp = exports.UpdatePlayerShowAvatarListReq = exports.SetFriendRemarkNameRsp = exports.SetFriendRemarkNameReq = exports.PlayerReportRsp = exports.PlayerReportReq = exports.GetPlayerBlacklistRsp = exports.GetPlayerBlacklistReq = exports.UpdatePS4BlockListRsp = exports.UpdatePS4BlockListReq = exports.TakeFirstShareRewardRsp = exports.TakeFirstShareRewardReq = exports.SocialDataNotify = exports.GetRecentMpPlayerListRsp = exports.GetRecentMpPlayerListReq = exports.UnlockNameCardNotify = exports.RemoveBlacklistRsp = exports.RemoveBlacklistReq = exports.AddBlacklistRsp = void 0;
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
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerFriendListReq.CmdId
 */
var GetPlayerFriendListReq_CmdId;
(function (GetPlayerFriendListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerFriendListReq_CmdId[GetPlayerFriendListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4072;
     */
    GetPlayerFriendListReq_CmdId[GetPlayerFriendListReq_CmdId["CMD_ID"] = 4072] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerFriendListReq_CmdId[GetPlayerFriendListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerFriendListReq_CmdId[GetPlayerFriendListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerFriendListReq_CmdId[GetPlayerFriendListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerFriendListReq_CmdId = exports.GetPlayerFriendListReq_CmdId || (exports.GetPlayerFriendListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerFriendListRsp.CmdId
 */
var GetPlayerFriendListRsp_CmdId;
(function (GetPlayerFriendListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerFriendListRsp_CmdId[GetPlayerFriendListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4098;
     */
    GetPlayerFriendListRsp_CmdId[GetPlayerFriendListRsp_CmdId["CMD_ID"] = 4098] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerFriendListRsp_CmdId[GetPlayerFriendListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerFriendListRsp_CmdId[GetPlayerFriendListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerFriendListRsp_CmdId[GetPlayerFriendListRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerFriendListRsp_CmdId = exports.GetPlayerFriendListRsp_CmdId || (exports.GetPlayerFriendListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AskAddFriendReq.CmdId
 */
var AskAddFriendReq_CmdId;
(function (AskAddFriendReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AskAddFriendReq_CmdId[AskAddFriendReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4007;
     */
    AskAddFriendReq_CmdId[AskAddFriendReq_CmdId["CMD_ID"] = 4007] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AskAddFriendReq_CmdId[AskAddFriendReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AskAddFriendReq_CmdId[AskAddFriendReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AskAddFriendReq_CmdId[AskAddFriendReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AskAddFriendReq_CmdId = exports.AskAddFriendReq_CmdId || (exports.AskAddFriendReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AskAddFriendRsp.CmdId
 */
var AskAddFriendRsp_CmdId;
(function (AskAddFriendRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AskAddFriendRsp_CmdId[AskAddFriendRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4021;
     */
    AskAddFriendRsp_CmdId[AskAddFriendRsp_CmdId["CMD_ID"] = 4021] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AskAddFriendRsp_CmdId[AskAddFriendRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AskAddFriendRsp_CmdId[AskAddFriendRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AskAddFriendRsp_CmdId[AskAddFriendRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AskAddFriendRsp_CmdId = exports.AskAddFriendRsp_CmdId || (exports.AskAddFriendRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DealAddFriendReq.CmdId
 */
var DealAddFriendReq_CmdId;
(function (DealAddFriendReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DealAddFriendReq_CmdId[DealAddFriendReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4003;
     */
    DealAddFriendReq_CmdId[DealAddFriendReq_CmdId["CMD_ID"] = 4003] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DealAddFriendReq_CmdId[DealAddFriendReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DealAddFriendReq_CmdId[DealAddFriendReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DealAddFriendReq_CmdId[DealAddFriendReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DealAddFriendReq_CmdId = exports.DealAddFriendReq_CmdId || (exports.DealAddFriendReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DealAddFriendRsp.CmdId
 */
var DealAddFriendRsp_CmdId;
(function (DealAddFriendRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DealAddFriendRsp_CmdId[DealAddFriendRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4090;
     */
    DealAddFriendRsp_CmdId[DealAddFriendRsp_CmdId["CMD_ID"] = 4090] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DealAddFriendRsp_CmdId[DealAddFriendRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DealAddFriendRsp_CmdId[DealAddFriendRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DealAddFriendRsp_CmdId[DealAddFriendRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DealAddFriendRsp_CmdId = exports.DealAddFriendRsp_CmdId || (exports.DealAddFriendRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerSocialDetailReq.CmdId
 */
var GetPlayerSocialDetailReq_CmdId;
(function (GetPlayerSocialDetailReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerSocialDetailReq_CmdId[GetPlayerSocialDetailReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4073;
     */
    GetPlayerSocialDetailReq_CmdId[GetPlayerSocialDetailReq_CmdId["CMD_ID"] = 4073] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerSocialDetailReq_CmdId[GetPlayerSocialDetailReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerSocialDetailReq_CmdId[GetPlayerSocialDetailReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerSocialDetailReq_CmdId[GetPlayerSocialDetailReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerSocialDetailReq_CmdId = exports.GetPlayerSocialDetailReq_CmdId || (exports.GetPlayerSocialDetailReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerSocialDetailRsp.CmdId
 */
var GetPlayerSocialDetailRsp_CmdId;
(function (GetPlayerSocialDetailRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4099;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["CMD_ID"] = 4099] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerSocialDetailRsp_CmdId[GetPlayerSocialDetailRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetPlayerSocialDetailRsp_CmdId = exports.GetPlayerSocialDetailRsp_CmdId || (exports.GetPlayerSocialDetailRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DeleteFriendReq.CmdId
 */
var DeleteFriendReq_CmdId;
(function (DeleteFriendReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeleteFriendReq_CmdId[DeleteFriendReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4031;
     */
    DeleteFriendReq_CmdId[DeleteFriendReq_CmdId["CMD_ID"] = 4031] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeleteFriendReq_CmdId[DeleteFriendReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeleteFriendReq_CmdId[DeleteFriendReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeleteFriendReq_CmdId[DeleteFriendReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DeleteFriendReq_CmdId = exports.DeleteFriendReq_CmdId || (exports.DeleteFriendReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DeleteFriendRsp.CmdId
 */
var DeleteFriendRsp_CmdId;
(function (DeleteFriendRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeleteFriendRsp_CmdId[DeleteFriendRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4075;
     */
    DeleteFriendRsp_CmdId[DeleteFriendRsp_CmdId["CMD_ID"] = 4075] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeleteFriendRsp_CmdId[DeleteFriendRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeleteFriendRsp_CmdId[DeleteFriendRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DeleteFriendRsp_CmdId = exports.DeleteFriendRsp_CmdId || (exports.DeleteFriendRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerBirthdayReq.CmdId
 */
var SetPlayerBirthdayReq_CmdId;
(function (SetPlayerBirthdayReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBirthdayReq_CmdId[SetPlayerBirthdayReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4048;
     */
    SetPlayerBirthdayReq_CmdId[SetPlayerBirthdayReq_CmdId["CMD_ID"] = 4048] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBirthdayReq_CmdId[SetPlayerBirthdayReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerBirthdayReq_CmdId[SetPlayerBirthdayReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerBirthdayReq_CmdId[SetPlayerBirthdayReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetPlayerBirthdayReq_CmdId = exports.SetPlayerBirthdayReq_CmdId || (exports.SetPlayerBirthdayReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerBirthdayRsp.CmdId
 */
var SetPlayerBirthdayRsp_CmdId;
(function (SetPlayerBirthdayRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBirthdayRsp_CmdId[SetPlayerBirthdayRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4097;
     */
    SetPlayerBirthdayRsp_CmdId[SetPlayerBirthdayRsp_CmdId["CMD_ID"] = 4097] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerBirthdayRsp_CmdId[SetPlayerBirthdayRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerBirthdayRsp_CmdId[SetPlayerBirthdayRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetPlayerBirthdayRsp_CmdId = exports.SetPlayerBirthdayRsp_CmdId || (exports.SetPlayerBirthdayRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerSignatureReq.CmdId
 */
var SetPlayerSignatureReq_CmdId;
(function (SetPlayerSignatureReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerSignatureReq_CmdId[SetPlayerSignatureReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4081;
     */
    SetPlayerSignatureReq_CmdId[SetPlayerSignatureReq_CmdId["CMD_ID"] = 4081] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerSignatureReq_CmdId[SetPlayerSignatureReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerSignatureReq_CmdId[SetPlayerSignatureReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerSignatureReq_CmdId[SetPlayerSignatureReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetPlayerSignatureReq_CmdId = exports.SetPlayerSignatureReq_CmdId || (exports.SetPlayerSignatureReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerSignatureRsp.CmdId
 */
var SetPlayerSignatureRsp_CmdId;
(function (SetPlayerSignatureRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerSignatureRsp_CmdId[SetPlayerSignatureRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4005;
     */
    SetPlayerSignatureRsp_CmdId[SetPlayerSignatureRsp_CmdId["CMD_ID"] = 4005] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerSignatureRsp_CmdId[SetPlayerSignatureRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerSignatureRsp_CmdId[SetPlayerSignatureRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetPlayerSignatureRsp_CmdId = exports.SetPlayerSignatureRsp_CmdId || (exports.SetPlayerSignatureRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerHeadImageReq.CmdId
 */
var SetPlayerHeadImageReq_CmdId;
(function (SetPlayerHeadImageReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerHeadImageReq_CmdId[SetPlayerHeadImageReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4082;
     */
    SetPlayerHeadImageReq_CmdId[SetPlayerHeadImageReq_CmdId["CMD_ID"] = 4082] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerHeadImageReq_CmdId[SetPlayerHeadImageReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerHeadImageReq_CmdId[SetPlayerHeadImageReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerHeadImageReq_CmdId[SetPlayerHeadImageReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetPlayerHeadImageReq_CmdId = exports.SetPlayerHeadImageReq_CmdId || (exports.SetPlayerHeadImageReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetPlayerHeadImageRsp.CmdId
 */
var SetPlayerHeadImageRsp_CmdId;
(function (SetPlayerHeadImageRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerHeadImageRsp_CmdId[SetPlayerHeadImageRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4047;
     */
    SetPlayerHeadImageRsp_CmdId[SetPlayerHeadImageRsp_CmdId["CMD_ID"] = 4047] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetPlayerHeadImageRsp_CmdId[SetPlayerHeadImageRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetPlayerHeadImageRsp_CmdId[SetPlayerHeadImageRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetPlayerHeadImageRsp_CmdId = exports.SetPlayerHeadImageRsp_CmdId || (exports.SetPlayerHeadImageRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePS4FriendListNotify.CmdId
 */
var UpdatePS4FriendListNotify_CmdId;
(function (UpdatePS4FriendListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4FriendListNotify_CmdId[UpdatePS4FriendListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4039;
     */
    UpdatePS4FriendListNotify_CmdId[UpdatePS4FriendListNotify_CmdId["CMD_ID"] = 4039] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4FriendListNotify_CmdId[UpdatePS4FriendListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4FriendListNotify_CmdId[UpdatePS4FriendListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4FriendListNotify_CmdId[UpdatePS4FriendListNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UpdatePS4FriendListNotify_CmdId = exports.UpdatePS4FriendListNotify_CmdId || (exports.UpdatePS4FriendListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DeleteFriendNotify.CmdId
 */
var DeleteFriendNotify_CmdId;
(function (DeleteFriendNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeleteFriendNotify_CmdId[DeleteFriendNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4053;
     */
    DeleteFriendNotify_CmdId[DeleteFriendNotify_CmdId["CMD_ID"] = 4053] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeleteFriendNotify_CmdId[DeleteFriendNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeleteFriendNotify_CmdId[DeleteFriendNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DeleteFriendNotify_CmdId = exports.DeleteFriendNotify_CmdId || (exports.DeleteFriendNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddFriendNotify.CmdId
 */
var AddFriendNotify_CmdId;
(function (AddFriendNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddFriendNotify_CmdId[AddFriendNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4022;
     */
    AddFriendNotify_CmdId[AddFriendNotify_CmdId["CMD_ID"] = 4022] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddFriendNotify_CmdId[AddFriendNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddFriendNotify_CmdId[AddFriendNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AddFriendNotify_CmdId = exports.AddFriendNotify_CmdId || (exports.AddFriendNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AskAddFriendNotify.CmdId
 */
var AskAddFriendNotify_CmdId;
(function (AskAddFriendNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AskAddFriendNotify_CmdId[AskAddFriendNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4065;
     */
    AskAddFriendNotify_CmdId[AskAddFriendNotify_CmdId["CMD_ID"] = 4065] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AskAddFriendNotify_CmdId[AskAddFriendNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AskAddFriendNotify_CmdId[AskAddFriendNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AskAddFriendNotify_CmdId = exports.AskAddFriendNotify_CmdId || (exports.AskAddFriendNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetNameCardReq.CmdId
 */
var SetNameCardReq_CmdId;
(function (SetNameCardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetNameCardReq_CmdId[SetNameCardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4004;
     */
    SetNameCardReq_CmdId[SetNameCardReq_CmdId["CMD_ID"] = 4004] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetNameCardReq_CmdId[SetNameCardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetNameCardReq_CmdId[SetNameCardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetNameCardReq_CmdId[SetNameCardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetNameCardReq_CmdId = exports.SetNameCardReq_CmdId || (exports.SetNameCardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetNameCardRsp.CmdId
 */
var SetNameCardRsp_CmdId;
(function (SetNameCardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetNameCardRsp_CmdId[SetNameCardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4093;
     */
    SetNameCardRsp_CmdId[SetNameCardRsp_CmdId["CMD_ID"] = 4093] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetNameCardRsp_CmdId[SetNameCardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetNameCardRsp_CmdId[SetNameCardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetNameCardRsp_CmdId[SetNameCardRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetNameCardRsp_CmdId = exports.SetNameCardRsp_CmdId || (exports.SetNameCardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllUnlockNameCardReq.CmdId
 */
var GetAllUnlockNameCardReq_CmdId;
(function (GetAllUnlockNameCardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllUnlockNameCardReq_CmdId[GetAllUnlockNameCardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4027;
     */
    GetAllUnlockNameCardReq_CmdId[GetAllUnlockNameCardReq_CmdId["CMD_ID"] = 4027] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllUnlockNameCardReq_CmdId[GetAllUnlockNameCardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllUnlockNameCardReq_CmdId[GetAllUnlockNameCardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllUnlockNameCardReq_CmdId[GetAllUnlockNameCardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAllUnlockNameCardReq_CmdId = exports.GetAllUnlockNameCardReq_CmdId || (exports.GetAllUnlockNameCardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllUnlockNameCardRsp.CmdId
 */
var GetAllUnlockNameCardRsp_CmdId;
(function (GetAllUnlockNameCardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllUnlockNameCardRsp_CmdId[GetAllUnlockNameCardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4094;
     */
    GetAllUnlockNameCardRsp_CmdId[GetAllUnlockNameCardRsp_CmdId["CMD_ID"] = 4094] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllUnlockNameCardRsp_CmdId[GetAllUnlockNameCardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllUnlockNameCardRsp_CmdId[GetAllUnlockNameCardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllUnlockNameCardRsp_CmdId[GetAllUnlockNameCardRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAllUnlockNameCardRsp_CmdId = exports.GetAllUnlockNameCardRsp_CmdId || (exports.GetAllUnlockNameCardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddBlacklistReq.CmdId
 */
var AddBlacklistReq_CmdId;
(function (AddBlacklistReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBlacklistReq_CmdId[AddBlacklistReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4088;
     */
    AddBlacklistReq_CmdId[AddBlacklistReq_CmdId["CMD_ID"] = 4088] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBlacklistReq_CmdId[AddBlacklistReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddBlacklistReq_CmdId[AddBlacklistReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddBlacklistReq_CmdId[AddBlacklistReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(AddBlacklistReq_CmdId = exports.AddBlacklistReq_CmdId || (exports.AddBlacklistReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AddBlacklistRsp.CmdId
 */
var AddBlacklistRsp_CmdId;
(function (AddBlacklistRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBlacklistRsp_CmdId[AddBlacklistRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4026;
     */
    AddBlacklistRsp_CmdId[AddBlacklistRsp_CmdId["CMD_ID"] = 4026] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AddBlacklistRsp_CmdId[AddBlacklistRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AddBlacklistRsp_CmdId[AddBlacklistRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AddBlacklistRsp_CmdId = exports.AddBlacklistRsp_CmdId || (exports.AddBlacklistRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RemoveBlacklistReq.CmdId
 */
var RemoveBlacklistReq_CmdId;
(function (RemoveBlacklistReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveBlacklistReq_CmdId[RemoveBlacklistReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4063;
     */
    RemoveBlacklistReq_CmdId[RemoveBlacklistReq_CmdId["CMD_ID"] = 4063] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveBlacklistReq_CmdId[RemoveBlacklistReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemoveBlacklistReq_CmdId[RemoveBlacklistReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemoveBlacklistReq_CmdId[RemoveBlacklistReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(RemoveBlacklistReq_CmdId = exports.RemoveBlacklistReq_CmdId || (exports.RemoveBlacklistReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.RemoveBlacklistRsp.CmdId
 */
var RemoveBlacklistRsp_CmdId;
(function (RemoveBlacklistRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveBlacklistRsp_CmdId[RemoveBlacklistRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4095;
     */
    RemoveBlacklistRsp_CmdId[RemoveBlacklistRsp_CmdId["CMD_ID"] = 4095] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RemoveBlacklistRsp_CmdId[RemoveBlacklistRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RemoveBlacklistRsp_CmdId[RemoveBlacklistRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RemoveBlacklistRsp_CmdId = exports.RemoveBlacklistRsp_CmdId || (exports.RemoveBlacklistRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UnlockNameCardNotify.CmdId
 */
var UnlockNameCardNotify_CmdId;
(function (UnlockNameCardNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockNameCardNotify_CmdId[UnlockNameCardNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4006;
     */
    UnlockNameCardNotify_CmdId[UnlockNameCardNotify_CmdId["CMD_ID"] = 4006] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UnlockNameCardNotify_CmdId[UnlockNameCardNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UnlockNameCardNotify_CmdId[UnlockNameCardNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UnlockNameCardNotify_CmdId = exports.UnlockNameCardNotify_CmdId || (exports.UnlockNameCardNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetRecentMpPlayerListReq.CmdId
 */
var GetRecentMpPlayerListReq_CmdId;
(function (GetRecentMpPlayerListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecentMpPlayerListReq_CmdId[GetRecentMpPlayerListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4034;
     */
    GetRecentMpPlayerListReq_CmdId[GetRecentMpPlayerListReq_CmdId["CMD_ID"] = 4034] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecentMpPlayerListReq_CmdId[GetRecentMpPlayerListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRecentMpPlayerListReq_CmdId[GetRecentMpPlayerListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRecentMpPlayerListReq_CmdId[GetRecentMpPlayerListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetRecentMpPlayerListReq_CmdId = exports.GetRecentMpPlayerListReq_CmdId || (exports.GetRecentMpPlayerListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetRecentMpPlayerListRsp.CmdId
 */
var GetRecentMpPlayerListRsp_CmdId;
(function (GetRecentMpPlayerListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecentMpPlayerListRsp_CmdId[GetRecentMpPlayerListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4050;
     */
    GetRecentMpPlayerListRsp_CmdId[GetRecentMpPlayerListRsp_CmdId["CMD_ID"] = 4050] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetRecentMpPlayerListRsp_CmdId[GetRecentMpPlayerListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRecentMpPlayerListRsp_CmdId[GetRecentMpPlayerListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetRecentMpPlayerListRsp_CmdId[GetRecentMpPlayerListRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetRecentMpPlayerListRsp_CmdId = exports.GetRecentMpPlayerListRsp_CmdId || (exports.GetRecentMpPlayerListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SocialDataNotify.CmdId
 */
var SocialDataNotify_CmdId;
(function (SocialDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SocialDataNotify_CmdId[SocialDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4043;
     */
    SocialDataNotify_CmdId[SocialDataNotify_CmdId["CMD_ID"] = 4043] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SocialDataNotify_CmdId[SocialDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SocialDataNotify_CmdId[SocialDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SocialDataNotify_CmdId[SocialDataNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SocialDataNotify_CmdId = exports.SocialDataNotify_CmdId || (exports.SocialDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeFirstShareRewardReq.CmdId
 */
var TakeFirstShareRewardReq_CmdId;
(function (TakeFirstShareRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFirstShareRewardReq_CmdId[TakeFirstShareRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4074;
     */
    TakeFirstShareRewardReq_CmdId[TakeFirstShareRewardReq_CmdId["CMD_ID"] = 4074] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFirstShareRewardReq_CmdId[TakeFirstShareRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeFirstShareRewardReq_CmdId[TakeFirstShareRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeFirstShareRewardReq_CmdId[TakeFirstShareRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeFirstShareRewardReq_CmdId = exports.TakeFirstShareRewardReq_CmdId || (exports.TakeFirstShareRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeFirstShareRewardRsp.CmdId
 */
var TakeFirstShareRewardRsp_CmdId;
(function (TakeFirstShareRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFirstShareRewardRsp_CmdId[TakeFirstShareRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4076;
     */
    TakeFirstShareRewardRsp_CmdId[TakeFirstShareRewardRsp_CmdId["CMD_ID"] = 4076] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeFirstShareRewardRsp_CmdId[TakeFirstShareRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeFirstShareRewardRsp_CmdId[TakeFirstShareRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeFirstShareRewardRsp_CmdId[TakeFirstShareRewardRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeFirstShareRewardRsp_CmdId = exports.TakeFirstShareRewardRsp_CmdId || (exports.TakeFirstShareRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePS4BlockListReq.CmdId
 */
var UpdatePS4BlockListReq_CmdId;
(function (UpdatePS4BlockListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4BlockListReq_CmdId[UpdatePS4BlockListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4046;
     */
    UpdatePS4BlockListReq_CmdId[UpdatePS4BlockListReq_CmdId["CMD_ID"] = 4046] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4BlockListReq_CmdId[UpdatePS4BlockListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4BlockListReq_CmdId[UpdatePS4BlockListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4BlockListReq_CmdId[UpdatePS4BlockListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UpdatePS4BlockListReq_CmdId = exports.UpdatePS4BlockListReq_CmdId || (exports.UpdatePS4BlockListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePS4BlockListRsp.CmdId
 */
var UpdatePS4BlockListRsp_CmdId;
(function (UpdatePS4BlockListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4BlockListRsp_CmdId[UpdatePS4BlockListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4041;
     */
    UpdatePS4BlockListRsp_CmdId[UpdatePS4BlockListRsp_CmdId["CMD_ID"] = 4041] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4BlockListRsp_CmdId[UpdatePS4BlockListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4BlockListRsp_CmdId[UpdatePS4BlockListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UpdatePS4BlockListRsp_CmdId = exports.UpdatePS4BlockListRsp_CmdId || (exports.UpdatePS4BlockListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerBlacklistReq.CmdId
 */
var GetPlayerBlacklistReq_CmdId;
(function (GetPlayerBlacklistReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4049;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["CMD_ID"] = 4049] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerBlacklistReq_CmdId[GetPlayerBlacklistReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerBlacklistReq_CmdId = exports.GetPlayerBlacklistReq_CmdId || (exports.GetPlayerBlacklistReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerBlacklistRsp.CmdId
 */
var GetPlayerBlacklistRsp_CmdId;
(function (GetPlayerBlacklistRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerBlacklistRsp_CmdId[GetPlayerBlacklistRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4091;
     */
    GetPlayerBlacklistRsp_CmdId[GetPlayerBlacklistRsp_CmdId["CMD_ID"] = 4091] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerBlacklistRsp_CmdId[GetPlayerBlacklistRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerBlacklistRsp_CmdId[GetPlayerBlacklistRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetPlayerBlacklistRsp_CmdId = exports.GetPlayerBlacklistRsp_CmdId || (exports.GetPlayerBlacklistRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerReportReq.CmdId
 */
var PlayerReportReq_CmdId;
(function (PlayerReportReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerReportReq_CmdId[PlayerReportReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4024;
     */
    PlayerReportReq_CmdId[PlayerReportReq_CmdId["CMD_ID"] = 4024] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerReportReq_CmdId[PlayerReportReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerReportReq_CmdId[PlayerReportReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerReportReq_CmdId[PlayerReportReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerReportReq_CmdId = exports.PlayerReportReq_CmdId || (exports.PlayerReportReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerReportRsp.CmdId
 */
var PlayerReportRsp_CmdId;
(function (PlayerReportRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerReportRsp_CmdId[PlayerReportRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4056;
     */
    PlayerReportRsp_CmdId[PlayerReportRsp_CmdId["CMD_ID"] = 4056] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerReportRsp_CmdId[PlayerReportRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerReportRsp_CmdId[PlayerReportRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerReportRsp_CmdId = exports.PlayerReportRsp_CmdId || (exports.PlayerReportRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetFriendRemarkNameReq.CmdId
 */
var SetFriendRemarkNameReq_CmdId;
(function (SetFriendRemarkNameReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendRemarkNameReq_CmdId[SetFriendRemarkNameReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4042;
     */
    SetFriendRemarkNameReq_CmdId[SetFriendRemarkNameReq_CmdId["CMD_ID"] = 4042] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendRemarkNameReq_CmdId[SetFriendRemarkNameReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetFriendRemarkNameReq_CmdId[SetFriendRemarkNameReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetFriendRemarkNameReq_CmdId[SetFriendRemarkNameReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetFriendRemarkNameReq_CmdId = exports.SetFriendRemarkNameReq_CmdId || (exports.SetFriendRemarkNameReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetFriendRemarkNameRsp.CmdId
 */
var SetFriendRemarkNameRsp_CmdId;
(function (SetFriendRemarkNameRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendRemarkNameRsp_CmdId[SetFriendRemarkNameRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4030;
     */
    SetFriendRemarkNameRsp_CmdId[SetFriendRemarkNameRsp_CmdId["CMD_ID"] = 4030] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetFriendRemarkNameRsp_CmdId[SetFriendRemarkNameRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetFriendRemarkNameRsp_CmdId[SetFriendRemarkNameRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetFriendRemarkNameRsp_CmdId = exports.SetFriendRemarkNameRsp_CmdId || (exports.SetFriendRemarkNameRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePlayerShowAvatarListReq.CmdId
 */
var UpdatePlayerShowAvatarListReq_CmdId;
(function (UpdatePlayerShowAvatarListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowAvatarListReq_CmdId[UpdatePlayerShowAvatarListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4067;
     */
    UpdatePlayerShowAvatarListReq_CmdId[UpdatePlayerShowAvatarListReq_CmdId["CMD_ID"] = 4067] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowAvatarListReq_CmdId[UpdatePlayerShowAvatarListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePlayerShowAvatarListReq_CmdId[UpdatePlayerShowAvatarListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePlayerShowAvatarListReq_CmdId[UpdatePlayerShowAvatarListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UpdatePlayerShowAvatarListReq_CmdId = exports.UpdatePlayerShowAvatarListReq_CmdId || (exports.UpdatePlayerShowAvatarListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePlayerShowAvatarListRsp.CmdId
 */
var UpdatePlayerShowAvatarListRsp_CmdId;
(function (UpdatePlayerShowAvatarListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowAvatarListRsp_CmdId[UpdatePlayerShowAvatarListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4058;
     */
    UpdatePlayerShowAvatarListRsp_CmdId[UpdatePlayerShowAvatarListRsp_CmdId["CMD_ID"] = 4058] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowAvatarListRsp_CmdId[UpdatePlayerShowAvatarListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePlayerShowAvatarListRsp_CmdId[UpdatePlayerShowAvatarListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UpdatePlayerShowAvatarListRsp_CmdId = exports.UpdatePlayerShowAvatarListRsp_CmdId || (exports.UpdatePlayerShowAvatarListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetFriendShowAvatarInfoReq.CmdId
 */
var GetFriendShowAvatarInfoReq_CmdId;
(function (GetFriendShowAvatarInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowAvatarInfoReq_CmdId[GetFriendShowAvatarInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4070;
     */
    GetFriendShowAvatarInfoReq_CmdId[GetFriendShowAvatarInfoReq_CmdId["CMD_ID"] = 4070] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowAvatarInfoReq_CmdId[GetFriendShowAvatarInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFriendShowAvatarInfoReq_CmdId[GetFriendShowAvatarInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFriendShowAvatarInfoReq_CmdId[GetFriendShowAvatarInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetFriendShowAvatarInfoReq_CmdId = exports.GetFriendShowAvatarInfoReq_CmdId || (exports.GetFriendShowAvatarInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetFriendShowAvatarInfoRsp.CmdId
 */
var GetFriendShowAvatarInfoRsp_CmdId;
(function (GetFriendShowAvatarInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowAvatarInfoRsp_CmdId[GetFriendShowAvatarInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4017;
     */
    GetFriendShowAvatarInfoRsp_CmdId[GetFriendShowAvatarInfoRsp_CmdId["CMD_ID"] = 4017] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowAvatarInfoRsp_CmdId[GetFriendShowAvatarInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFriendShowAvatarInfoRsp_CmdId[GetFriendShowAvatarInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetFriendShowAvatarInfoRsp_CmdId = exports.GetFriendShowAvatarInfoRsp_CmdId || (exports.GetFriendShowAvatarInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePlayerShowNameCardListReq.CmdId
 */
var UpdatePlayerShowNameCardListReq_CmdId;
(function (UpdatePlayerShowNameCardListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowNameCardListReq_CmdId[UpdatePlayerShowNameCardListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4002;
     */
    UpdatePlayerShowNameCardListReq_CmdId[UpdatePlayerShowNameCardListReq_CmdId["CMD_ID"] = 4002] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowNameCardListReq_CmdId[UpdatePlayerShowNameCardListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePlayerShowNameCardListReq_CmdId[UpdatePlayerShowNameCardListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePlayerShowNameCardListReq_CmdId[UpdatePlayerShowNameCardListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UpdatePlayerShowNameCardListReq_CmdId = exports.UpdatePlayerShowNameCardListReq_CmdId || (exports.UpdatePlayerShowNameCardListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePlayerShowNameCardListRsp.CmdId
 */
var UpdatePlayerShowNameCardListRsp_CmdId;
(function (UpdatePlayerShowNameCardListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowNameCardListRsp_CmdId[UpdatePlayerShowNameCardListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4019;
     */
    UpdatePlayerShowNameCardListRsp_CmdId[UpdatePlayerShowNameCardListRsp_CmdId["CMD_ID"] = 4019] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePlayerShowNameCardListRsp_CmdId[UpdatePlayerShowNameCardListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePlayerShowNameCardListRsp_CmdId[UpdatePlayerShowNameCardListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UpdatePlayerShowNameCardListRsp_CmdId = exports.UpdatePlayerShowNameCardListRsp_CmdId || (exports.UpdatePlayerShowNameCardListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetFriendShowNameCardInfoReq.CmdId
 */
var GetFriendShowNameCardInfoReq_CmdId;
(function (GetFriendShowNameCardInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowNameCardInfoReq_CmdId[GetFriendShowNameCardInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4061;
     */
    GetFriendShowNameCardInfoReq_CmdId[GetFriendShowNameCardInfoReq_CmdId["CMD_ID"] = 4061] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowNameCardInfoReq_CmdId[GetFriendShowNameCardInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFriendShowNameCardInfoReq_CmdId[GetFriendShowNameCardInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFriendShowNameCardInfoReq_CmdId[GetFriendShowNameCardInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetFriendShowNameCardInfoReq_CmdId = exports.GetFriendShowNameCardInfoReq_CmdId || (exports.GetFriendShowNameCardInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetFriendShowNameCardInfoRsp.CmdId
 */
var GetFriendShowNameCardInfoRsp_CmdId;
(function (GetFriendShowNameCardInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowNameCardInfoRsp_CmdId[GetFriendShowNameCardInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4029;
     */
    GetFriendShowNameCardInfoRsp_CmdId[GetFriendShowNameCardInfoRsp_CmdId["CMD_ID"] = 4029] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetFriendShowNameCardInfoRsp_CmdId[GetFriendShowNameCardInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetFriendShowNameCardInfoRsp_CmdId[GetFriendShowNameCardInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetFriendShowNameCardInfoRsp_CmdId = exports.GetFriendShowNameCardInfoRsp_CmdId || (exports.GetFriendShowNameCardInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForceAddPlayerFriendReq.CmdId
 */
var ForceAddPlayerFriendReq_CmdId;
(function (ForceAddPlayerFriendReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceAddPlayerFriendReq_CmdId[ForceAddPlayerFriendReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4057;
     */
    ForceAddPlayerFriendReq_CmdId[ForceAddPlayerFriendReq_CmdId["CMD_ID"] = 4057] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceAddPlayerFriendReq_CmdId[ForceAddPlayerFriendReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForceAddPlayerFriendReq_CmdId[ForceAddPlayerFriendReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForceAddPlayerFriendReq_CmdId = exports.ForceAddPlayerFriendReq_CmdId || (exports.ForceAddPlayerFriendReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ForceAddPlayerFriendRsp.CmdId
 */
var ForceAddPlayerFriendRsp_CmdId;
(function (ForceAddPlayerFriendRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceAddPlayerFriendRsp_CmdId[ForceAddPlayerFriendRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4100;
     */
    ForceAddPlayerFriendRsp_CmdId[ForceAddPlayerFriendRsp_CmdId["CMD_ID"] = 4100] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ForceAddPlayerFriendRsp_CmdId[ForceAddPlayerFriendRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ForceAddPlayerFriendRsp_CmdId[ForceAddPlayerFriendRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ForceAddPlayerFriendRsp_CmdId = exports.ForceAddPlayerFriendRsp_CmdId || (exports.ForceAddPlayerFriendRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ProfilePictureChangeNotify.CmdId
 */
var ProfilePictureChangeNotify_CmdId;
(function (ProfilePictureChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProfilePictureChangeNotify_CmdId[ProfilePictureChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4016;
     */
    ProfilePictureChangeNotify_CmdId[ProfilePictureChangeNotify_CmdId["CMD_ID"] = 4016] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ProfilePictureChangeNotify_CmdId[ProfilePictureChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProfilePictureChangeNotify_CmdId[ProfilePictureChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ProfilePictureChangeNotify_CmdId[ProfilePictureChangeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ProfilePictureChangeNotify_CmdId = exports.ProfilePictureChangeNotify_CmdId || (exports.ProfilePictureChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PSNFriendListNotify.CmdId
 */
var PSNFriendListNotify_CmdId;
(function (PSNFriendListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSNFriendListNotify_CmdId[PSNFriendListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4087;
     */
    PSNFriendListNotify_CmdId[PSNFriendListNotify_CmdId["CMD_ID"] = 4087] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSNFriendListNotify_CmdId[PSNFriendListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PSNFriendListNotify_CmdId[PSNFriendListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PSNFriendListNotify_CmdId = exports.PSNFriendListNotify_CmdId || (exports.PSNFriendListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PSNBlackListNotify.CmdId
 */
var PSNBlackListNotify_CmdId;
(function (PSNBlackListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSNBlackListNotify_CmdId[PSNBlackListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4040;
     */
    PSNBlackListNotify_CmdId[PSNBlackListNotify_CmdId["CMD_ID"] = 4040] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PSNBlackListNotify_CmdId[PSNBlackListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PSNBlackListNotify_CmdId[PSNBlackListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PSNBlackListNotify_CmdId = exports.PSNBlackListNotify_CmdId || (exports.PSNBlackListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerAskFriendListReq.CmdId
 */
var GetPlayerAskFriendListReq_CmdId;
(function (GetPlayerAskFriendListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerAskFriendListReq_CmdId[GetPlayerAskFriendListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4018;
     */
    GetPlayerAskFriendListReq_CmdId[GetPlayerAskFriendListReq_CmdId["CMD_ID"] = 4018] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerAskFriendListReq_CmdId[GetPlayerAskFriendListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerAskFriendListReq_CmdId[GetPlayerAskFriendListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerAskFriendListReq_CmdId[GetPlayerAskFriendListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPlayerAskFriendListReq_CmdId = exports.GetPlayerAskFriendListReq_CmdId || (exports.GetPlayerAskFriendListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPlayerAskFriendListRsp.CmdId
 */
var GetPlayerAskFriendListRsp_CmdId;
(function (GetPlayerAskFriendListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerAskFriendListRsp_CmdId[GetPlayerAskFriendListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4066;
     */
    GetPlayerAskFriendListRsp_CmdId[GetPlayerAskFriendListRsp_CmdId["CMD_ID"] = 4066] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPlayerAskFriendListRsp_CmdId[GetPlayerAskFriendListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPlayerAskFriendListRsp_CmdId[GetPlayerAskFriendListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetPlayerAskFriendListRsp_CmdId = exports.GetPlayerAskFriendListRsp_CmdId || (exports.GetPlayerAskFriendListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetChatEmojiCollectionReq.CmdId
 */
var GetChatEmojiCollectionReq_CmdId;
(function (GetChatEmojiCollectionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetChatEmojiCollectionReq_CmdId[GetChatEmojiCollectionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4068;
     */
    GetChatEmojiCollectionReq_CmdId[GetChatEmojiCollectionReq_CmdId["CMD_ID"] = 4068] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetChatEmojiCollectionReq_CmdId[GetChatEmojiCollectionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetChatEmojiCollectionReq_CmdId[GetChatEmojiCollectionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetChatEmojiCollectionReq_CmdId[GetChatEmojiCollectionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetChatEmojiCollectionReq_CmdId = exports.GetChatEmojiCollectionReq_CmdId || (exports.GetChatEmojiCollectionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetChatEmojiCollectionRsp.CmdId
 */
var GetChatEmojiCollectionRsp_CmdId;
(function (GetChatEmojiCollectionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetChatEmojiCollectionRsp_CmdId[GetChatEmojiCollectionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4033;
     */
    GetChatEmojiCollectionRsp_CmdId[GetChatEmojiCollectionRsp_CmdId["CMD_ID"] = 4033] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetChatEmojiCollectionRsp_CmdId[GetChatEmojiCollectionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetChatEmojiCollectionRsp_CmdId[GetChatEmojiCollectionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetChatEmojiCollectionRsp_CmdId = exports.GetChatEmojiCollectionRsp_CmdId || (exports.GetChatEmojiCollectionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetChatEmojiCollectionReq.CmdId
 */
var SetChatEmojiCollectionReq_CmdId;
(function (SetChatEmojiCollectionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetChatEmojiCollectionReq_CmdId[SetChatEmojiCollectionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4084;
     */
    SetChatEmojiCollectionReq_CmdId[SetChatEmojiCollectionReq_CmdId["CMD_ID"] = 4084] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetChatEmojiCollectionReq_CmdId[SetChatEmojiCollectionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetChatEmojiCollectionReq_CmdId[SetChatEmojiCollectionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetChatEmojiCollectionReq_CmdId[SetChatEmojiCollectionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SetChatEmojiCollectionReq_CmdId = exports.SetChatEmojiCollectionReq_CmdId || (exports.SetChatEmojiCollectionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SetChatEmojiCollectionRsp.CmdId
 */
var SetChatEmojiCollectionRsp_CmdId;
(function (SetChatEmojiCollectionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetChatEmojiCollectionRsp_CmdId[SetChatEmojiCollectionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4080;
     */
    SetChatEmojiCollectionRsp_CmdId[SetChatEmojiCollectionRsp_CmdId["CMD_ID"] = 4080] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SetChatEmojiCollectionRsp_CmdId[SetChatEmojiCollectionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SetChatEmojiCollectionRsp_CmdId[SetChatEmojiCollectionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SetChatEmojiCollectionRsp_CmdId = exports.SetChatEmojiCollectionRsp_CmdId || (exports.SetChatEmojiCollectionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePS4FriendListReq.CmdId
 */
var UpdatePS4FriendListReq_CmdId;
(function (UpdatePS4FriendListReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4FriendListReq_CmdId[UpdatePS4FriendListReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4089;
     */
    UpdatePS4FriendListReq_CmdId[UpdatePS4FriendListReq_CmdId["CMD_ID"] = 4089] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4FriendListReq_CmdId[UpdatePS4FriendListReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4FriendListReq_CmdId[UpdatePS4FriendListReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4FriendListReq_CmdId[UpdatePS4FriendListReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UpdatePS4FriendListReq_CmdId = exports.UpdatePS4FriendListReq_CmdId || (exports.UpdatePS4FriendListReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UpdatePS4FriendListRsp.CmdId
 */
var UpdatePS4FriendListRsp_CmdId;
(function (UpdatePS4FriendListRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4FriendListRsp_CmdId[UpdatePS4FriendListRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4059;
     */
    UpdatePS4FriendListRsp_CmdId[UpdatePS4FriendListRsp_CmdId["CMD_ID"] = 4059] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UpdatePS4FriendListRsp_CmdId[UpdatePS4FriendListRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4FriendListRsp_CmdId[UpdatePS4FriendListRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UpdatePS4FriendListRsp_CmdId[UpdatePS4FriendListRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UpdatePS4FriendListRsp_CmdId = exports.UpdatePS4FriendListRsp_CmdId || (exports.UpdatePS4FriendListRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FriendInfoChangeNotify.CmdId
 */
var FriendInfoChangeNotify_CmdId;
(function (FriendInfoChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FriendInfoChangeNotify_CmdId[FriendInfoChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4032;
     */
    FriendInfoChangeNotify_CmdId[FriendInfoChangeNotify_CmdId["CMD_ID"] = 4032] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FriendInfoChangeNotify_CmdId[FriendInfoChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FriendInfoChangeNotify_CmdId[FriendInfoChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FriendInfoChangeNotify_CmdId = exports.FriendInfoChangeNotify_CmdId || (exports.FriendInfoChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSignatureAuditDataNotify.CmdId
 */
var PlayerSignatureAuditDataNotify_CmdId;
(function (PlayerSignatureAuditDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSignatureAuditDataNotify_CmdId[PlayerSignatureAuditDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4060;
     */
    PlayerSignatureAuditDataNotify_CmdId[PlayerSignatureAuditDataNotify_CmdId["CMD_ID"] = 4060] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSignatureAuditDataNotify_CmdId[PlayerSignatureAuditDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSignatureAuditDataNotify_CmdId[PlayerSignatureAuditDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerSignatureAuditDataNotify_CmdId = exports.PlayerSignatureAuditDataNotify_CmdId || (exports.PlayerSignatureAuditDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerSignatureNotify.CmdId
 */
var PlayerSignatureNotify_CmdId;
(function (PlayerSignatureNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSignatureNotify_CmdId[PlayerSignatureNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4014;
     */
    PlayerSignatureNotify_CmdId[PlayerSignatureNotify_CmdId["CMD_ID"] = 4014] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerSignatureNotify_CmdId[PlayerSignatureNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerSignatureNotify_CmdId[PlayerSignatureNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerSignatureNotify_CmdId = exports.PlayerSignatureNotify_CmdId || (exports.PlayerSignatureNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SignatureAuditConfigNotify.CmdId
 */
var SignatureAuditConfigNotify_CmdId;
(function (SignatureAuditConfigNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SignatureAuditConfigNotify_CmdId[SignatureAuditConfigNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4092;
     */
    SignatureAuditConfigNotify_CmdId[SignatureAuditConfigNotify_CmdId["CMD_ID"] = 4092] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SignatureAuditConfigNotify_CmdId[SignatureAuditConfigNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SignatureAuditConfigNotify_CmdId[SignatureAuditConfigNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SignatureAuditConfigNotify_CmdId = exports.SignatureAuditConfigNotify_CmdId || (exports.SignatureAuditConfigNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReadSignatureAuditReq.CmdId
 */
var ReadSignatureAuditReq_CmdId;
(function (ReadSignatureAuditReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadSignatureAuditReq_CmdId[ReadSignatureAuditReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4020;
     */
    ReadSignatureAuditReq_CmdId[ReadSignatureAuditReq_CmdId["CMD_ID"] = 4020] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadSignatureAuditReq_CmdId[ReadSignatureAuditReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadSignatureAuditReq_CmdId[ReadSignatureAuditReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadSignatureAuditReq_CmdId[ReadSignatureAuditReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReadSignatureAuditReq_CmdId = exports.ReadSignatureAuditReq_CmdId || (exports.ReadSignatureAuditReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReadSignatureAuditRsp.CmdId
 */
var ReadSignatureAuditRsp_CmdId;
(function (ReadSignatureAuditRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadSignatureAuditRsp_CmdId[ReadSignatureAuditRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4064;
     */
    ReadSignatureAuditRsp_CmdId[ReadSignatureAuditRsp_CmdId["CMD_ID"] = 4064] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadSignatureAuditRsp_CmdId[ReadSignatureAuditRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadSignatureAuditRsp_CmdId[ReadSignatureAuditRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReadSignatureAuditRsp_CmdId = exports.ReadSignatureAuditRsp_CmdId || (exports.ReadSignatureAuditRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FriendOnlineState
 */
var FriendOnlineState;
(function (FriendOnlineState) {
    /**
     * @generated from protobuf enum value: FREIEND_DISCONNECT = 0;
     */
    FriendOnlineState[FriendOnlineState["FREIEND_DISCONNECT"] = 0] = "FREIEND_DISCONNECT";
    /**
     * @generated from protobuf enum value: FRIEND_ONLINE = 1;
     */
    FriendOnlineState[FriendOnlineState["FRIEND_ONLINE"] = 1] = "FRIEND_ONLINE";
})(FriendOnlineState = exports.FriendOnlineState || (exports.FriendOnlineState = {}));
/**
 * @generated from protobuf enum com.midnights.game.DealAddFriendResultType
 */
var DealAddFriendResultType;
(function (DealAddFriendResultType) {
    /**
     * @generated from protobuf enum value: DEAL_ADD_FRIEND_REJECT = 0;
     */
    DealAddFriendResultType[DealAddFriendResultType["DEAL_ADD_FRIEND_REJECT"] = 0] = "DEAL_ADD_FRIEND_REJECT";
    /**
     * @generated from protobuf enum value: DEAL_ADD_FRIEND_ACCEPT = 1;
     */
    DealAddFriendResultType[DealAddFriendResultType["DEAL_ADD_FRIEND_ACCEPT"] = 1] = "DEAL_ADD_FRIEND_ACCEPT";
})(DealAddFriendResultType = exports.DealAddFriendResultType || (exports.DealAddFriendResultType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class SocialShowAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SocialShowAvatarInfo", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 level */ 2:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 costume_id */ 3:
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
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 level = 2; */
        if (message.level !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 costume_id = 3; */
        if (message.costumeId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SocialShowAvatarInfo
 */
exports.SocialShowAvatarInfo = new SocialShowAvatarInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SocialDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SocialDetail", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "signature", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "birthday", kind: "message", T: () => define_7.Birthday },
            { no: 7, name: "world_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "reserved_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "online_state", kind: "enum", opt: true, T: () => ["com.midnights.game.FriendOnlineState", FriendOnlineState] },
            { no: 10, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_friend", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "is_mp_mode_available", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "name_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_in_blacklist", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "is_chat_no_disturb", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "remark_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 18, name: "finish_achievement_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "tower_floor_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "tower_level_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "is_show_avatar", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "show_avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.SocialShowAvatarInfo },
            { no: 23, name: "show_name_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 24, name: "friend_enter_home_option", kind: "enum", opt: true, T: () => ["com.midnights.game.FriendEnterHomeOption", define_6.FriendEnterHomeOption, "FRIEND_ENTER_HOME_OPTION_"] },
            { no: 25, name: "profile_picture", kind: "message", T: () => define_5.ProfilePicture }
        ]);
    }
    create(value) {
        const message = { reservedList: [], showAvatarInfoList: [], showNameCardIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional string nickname */ 2:
                    message.nickname = reader.string();
                    break;
                case /* optional uint32 level */ 3:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 4:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional string signature */ 5:
                    message.signature = reader.string();
                    break;
                case /* optional com.midnights.game.Birthday birthday */ 6:
                    message.birthday = define_7.Birthday.internalBinaryRead(reader, reader.uint32(), options, message.birthday);
                    break;
                case /* optional uint32 world_level */ 7:
                    message.worldLevel = reader.uint32();
                    break;
                case /* repeated uint32 reserved_list */ 8:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.reservedList.push(reader.uint32());
                    else
                        message.reservedList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.FriendOnlineState online_state */ 9:
                    message.onlineState = reader.int32();
                    break;
                case /* optional uint32 param */ 10:
                    message.param = reader.uint32();
                    break;
                case /* optional bool is_friend */ 11:
                    message.isFriend = reader.bool();
                    break;
                case /* optional bool is_mp_mode_available */ 12:
                    message.isMpModeAvailable = reader.bool();
                    break;
                case /* optional string online_id */ 13:
                    message.onlineId = reader.string();
                    break;
                case /* optional uint32 name_card_id */ 14:
                    message.nameCardId = reader.uint32();
                    break;
                case /* optional bool is_in_blacklist */ 15:
                    message.isInBlacklist = reader.bool();
                    break;
                case /* optional bool is_chat_no_disturb */ 16:
                    message.isChatNoDisturb = reader.bool();
                    break;
                case /* optional string remark_name */ 17:
                    message.remarkName = reader.string();
                    break;
                case /* optional uint32 finish_achievement_num */ 18:
                    message.finishAchievementNum = reader.uint32();
                    break;
                case /* optional uint32 tower_floor_index */ 19:
                    message.towerFloorIndex = reader.uint32();
                    break;
                case /* optional uint32 tower_level_index */ 20:
                    message.towerLevelIndex = reader.uint32();
                    break;
                case /* optional bool is_show_avatar */ 21:
                    message.isShowAvatar = reader.bool();
                    break;
                case /* repeated com.midnights.game.SocialShowAvatarInfo show_avatar_info_list */ 22:
                    message.showAvatarInfoList.push(exports.SocialShowAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 show_name_card_id_list */ 23:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showNameCardIdList.push(reader.uint32());
                    else
                        message.showNameCardIdList.push(reader.uint32());
                    break;
                case /* optional com.midnights.game.FriendEnterHomeOption friend_enter_home_option */ 24:
                    message.friendEnterHomeOption = reader.int32();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 25:
                    message.profilePicture = define_5.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional string nickname = 2; */
        if (message.nickname !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* optional uint32 level = 3; */
        if (message.level !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 avatar_id = 4; */
        if (message.avatarId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional string signature = 5; */
        if (message.signature !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* optional com.midnights.game.Birthday birthday = 6; */
        if (message.birthday)
            define_7.Birthday.internalBinaryWrite(message.birthday, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 world_level = 7; */
        if (message.worldLevel !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.worldLevel);
        /* repeated uint32 reserved_list = 8; */
        if (message.reservedList.length) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.reservedList.length; i++)
                writer.uint32(message.reservedList[i]);
            writer.join();
        }
        /* optional com.midnights.game.FriendOnlineState online_state = 9; */
        if (message.onlineState !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.onlineState);
        /* optional uint32 param = 10; */
        if (message.param !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.param);
        /* optional bool is_friend = 11; */
        if (message.isFriend !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isFriend);
        /* optional bool is_mp_mode_available = 12; */
        if (message.isMpModeAvailable !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isMpModeAvailable);
        /* optional string online_id = 13; */
        if (message.onlineId !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* optional uint32 name_card_id = 14; */
        if (message.nameCardId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.nameCardId);
        /* optional bool is_in_blacklist = 15; */
        if (message.isInBlacklist !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isInBlacklist);
        /* optional bool is_chat_no_disturb = 16; */
        if (message.isChatNoDisturb !== undefined)
            writer.tag(16, runtime_1.WireType.Varint).bool(message.isChatNoDisturb);
        /* optional string remark_name = 17; */
        if (message.remarkName !== undefined)
            writer.tag(17, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* optional uint32 finish_achievement_num = 18; */
        if (message.finishAchievementNum !== undefined)
            writer.tag(18, runtime_1.WireType.Varint).uint32(message.finishAchievementNum);
        /* optional uint32 tower_floor_index = 19; */
        if (message.towerFloorIndex !== undefined)
            writer.tag(19, runtime_1.WireType.Varint).uint32(message.towerFloorIndex);
        /* optional uint32 tower_level_index = 20; */
        if (message.towerLevelIndex !== undefined)
            writer.tag(20, runtime_1.WireType.Varint).uint32(message.towerLevelIndex);
        /* optional bool is_show_avatar = 21; */
        if (message.isShowAvatar !== undefined)
            writer.tag(21, runtime_1.WireType.Varint).bool(message.isShowAvatar);
        /* repeated com.midnights.game.SocialShowAvatarInfo show_avatar_info_list = 22; */
        for (let i = 0; i < message.showAvatarInfoList.length; i++)
            exports.SocialShowAvatarInfo.internalBinaryWrite(message.showAvatarInfoList[i], writer.tag(22, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 show_name_card_id_list = 23; */
        if (message.showNameCardIdList.length) {
            writer.tag(23, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showNameCardIdList.length; i++)
                writer.uint32(message.showNameCardIdList[i]);
            writer.join();
        }
        /* optional com.midnights.game.FriendEnterHomeOption friend_enter_home_option = 24; */
        if (message.friendEnterHomeOption !== undefined)
            writer.tag(24, runtime_1.WireType.Varint).int32(message.friendEnterHomeOption);
        /* optional com.midnights.game.ProfilePicture profile_picture = 25; */
        if (message.profilePicture)
            define_5.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(25, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SocialDetail
 */
exports.SocialDetail = new SocialDetail$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FriendBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FriendBrief", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "world_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "signature", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "online_state", kind: "enum", opt: true, T: () => ["com.midnights.game.FriendOnlineState", FriendOnlineState] },
            { no: 8, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_mp_mode_available", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "last_active_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "name_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mp_player_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_chat_no_disturb", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "chat_sequence", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "remark_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 22, name: "show_avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.SocialShowAvatarInfo },
            { no: 23, name: "friend_enter_home_option", kind: "enum", opt: true, T: () => ["com.midnights.game.FriendEnterHomeOption", define_6.FriendEnterHomeOption, "FRIEND_ENTER_HOME_OPTION_"] },
            { no: 24, name: "profile_picture", kind: "message", T: () => define_5.ProfilePicture },
            { no: 25, name: "is_game_source", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "is_psn_source", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "platform_type", kind: "enum", opt: true, T: () => ["com.midnights.game.PlatformType", define_4.PlatformType] }
        ]);
    }
    create(value) {
        const message = { showAvatarInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional string nickname */ 2:
                    message.nickname = reader.string();
                    break;
                case /* optional uint32 level */ 3:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 avatar_id */ 4:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional uint32 world_level */ 5:
                    message.worldLevel = reader.uint32();
                    break;
                case /* optional string signature */ 6:
                    message.signature = reader.string();
                    break;
                case /* optional com.midnights.game.FriendOnlineState online_state */ 7:
                    message.onlineState = reader.int32();
                    break;
                case /* optional uint32 param */ 8:
                    message.param = reader.uint32();
                    break;
                case /* optional bool is_mp_mode_available */ 10:
                    message.isMpModeAvailable = reader.bool();
                    break;
                case /* optional string online_id */ 11:
                    message.onlineId = reader.string();
                    break;
                case /* optional uint32 last_active_time */ 12:
                    message.lastActiveTime = reader.uint32();
                    break;
                case /* optional uint32 name_card_id */ 13:
                    message.nameCardId = reader.uint32();
                    break;
                case /* optional uint32 mp_player_num */ 14:
                    message.mpPlayerNum = reader.uint32();
                    break;
                case /* optional bool is_chat_no_disturb */ 15:
                    message.isChatNoDisturb = reader.bool();
                    break;
                case /* optional uint32 chat_sequence */ 16:
                    message.chatSequence = reader.uint32();
                    break;
                case /* optional string remark_name */ 17:
                    message.remarkName = reader.string();
                    break;
                case /* repeated com.midnights.game.SocialShowAvatarInfo show_avatar_info_list */ 22:
                    message.showAvatarInfoList.push(exports.SocialShowAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.FriendEnterHomeOption friend_enter_home_option */ 23:
                    message.friendEnterHomeOption = reader.int32();
                    break;
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 24:
                    message.profilePicture = define_5.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* optional bool is_game_source */ 25:
                    message.isGameSource = reader.bool();
                    break;
                case /* optional bool is_psn_source */ 26:
                    message.isPsnSource = reader.bool();
                    break;
                case /* optional com.midnights.game.PlatformType platform_type */ 27:
                    message.platformType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional string nickname = 2; */
        if (message.nickname !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* optional uint32 level = 3; */
        if (message.level !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 avatar_id = 4; */
        if (message.avatarId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional uint32 world_level = 5; */
        if (message.worldLevel !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.worldLevel);
        /* optional string signature = 6; */
        if (message.signature !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* optional com.midnights.game.FriendOnlineState online_state = 7; */
        if (message.onlineState !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.onlineState);
        /* optional uint32 param = 8; */
        if (message.param !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.param);
        /* optional bool is_mp_mode_available = 10; */
        if (message.isMpModeAvailable !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isMpModeAvailable);
        /* optional string online_id = 11; */
        if (message.onlineId !== undefined)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* optional uint32 last_active_time = 12; */
        if (message.lastActiveTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.lastActiveTime);
        /* optional uint32 name_card_id = 13; */
        if (message.nameCardId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.nameCardId);
        /* optional uint32 mp_player_num = 14; */
        if (message.mpPlayerNum !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.mpPlayerNum);
        /* optional bool is_chat_no_disturb = 15; */
        if (message.isChatNoDisturb !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isChatNoDisturb);
        /* optional uint32 chat_sequence = 16; */
        if (message.chatSequence !== undefined)
            writer.tag(16, runtime_1.WireType.Varint).uint32(message.chatSequence);
        /* optional string remark_name = 17; */
        if (message.remarkName !== undefined)
            writer.tag(17, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* repeated com.midnights.game.SocialShowAvatarInfo show_avatar_info_list = 22; */
        for (let i = 0; i < message.showAvatarInfoList.length; i++)
            exports.SocialShowAvatarInfo.internalBinaryWrite(message.showAvatarInfoList[i], writer.tag(22, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.FriendEnterHomeOption friend_enter_home_option = 23; */
        if (message.friendEnterHomeOption !== undefined)
            writer.tag(23, runtime_1.WireType.Varint).int32(message.friendEnterHomeOption);
        /* optional com.midnights.game.ProfilePicture profile_picture = 24; */
        if (message.profilePicture)
            define_5.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(24, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_game_source = 25; */
        if (message.isGameSource !== undefined)
            writer.tag(25, runtime_1.WireType.Varint).bool(message.isGameSource);
        /* optional bool is_psn_source = 26; */
        if (message.isPsnSource !== undefined)
            writer.tag(26, runtime_1.WireType.Varint).bool(message.isPsnSource);
        /* optional com.midnights.game.PlatformType platform_type = 27; */
        if (message.platformType !== undefined)
            writer.tag(27, runtime_1.WireType.Varint).int32(message.platformType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FriendBrief
 */
exports.FriendBrief = new FriendBrief$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatEmojiCollectionData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChatEmojiCollectionData", [
            { no: 1, name: "emoji_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { emojiIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 emoji_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.emojiIdList.push(reader.uint32());
                    else
                        message.emojiIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 emoji_id_list = 1; */
        if (message.emojiIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.emojiIdList.length; i++)
                writer.uint32(message.emojiIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChatEmojiCollectionData
 */
exports.ChatEmojiCollectionData = new ChatEmojiCollectionData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerFriendListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerFriendListReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerFriendListReq
 */
exports.GetPlayerFriendListReq = new GetPlayerFriendListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerFriendListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerFriendListRsp", [
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "ask_friend_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FriendBrief },
            { no: 14, name: "friend_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FriendBrief }
        ]);
    }
    create(value) {
        const message = { askFriendList: [], friendList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.FriendBrief ask_friend_list */ 8:
                    message.askFriendList.push(exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.FriendBrief friend_list */ 14:
                    message.friendList.push(exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.FriendBrief ask_friend_list = 8; */
        for (let i = 0; i < message.askFriendList.length; i++)
            exports.FriendBrief.internalBinaryWrite(message.askFriendList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.FriendBrief friend_list = 14; */
        for (let i = 0; i < message.friendList.length; i++)
            exports.FriendBrief.internalBinaryWrite(message.friendList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerFriendListRsp
 */
exports.GetPlayerFriendListRsp = new GetPlayerFriendListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AskAddFriendReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AskAddFriendReq", [
            { no: 7, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 7:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 7; */
        if (message.targetUid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AskAddFriendReq
 */
exports.AskAddFriendReq = new AskAddFriendReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AskAddFriendRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AskAddFriendRsp", [
            { no: 8, name: "param", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 param */ 8:
                    message.param = reader.uint32();
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 target_uid */ 4:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 param = 8; */
        if (message.param !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.param);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 target_uid = 4; */
        if (message.targetUid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AskAddFriendRsp
 */
exports.AskAddFriendRsp = new AskAddFriendRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DealAddFriendReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DealAddFriendReq", [
            { no: 12, name: "deal_add_friend_result", kind: "enum", opt: true, T: () => ["com.midnights.game.DealAddFriendResultType", DealAddFriendResultType] },
            { no: 10, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.DealAddFriendResultType deal_add_friend_result */ 12:
                    message.dealAddFriendResult = reader.int32();
                    break;
                case /* optional uint32 target_uid */ 10:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.DealAddFriendResultType deal_add_friend_result = 12; */
        if (message.dealAddFriendResult !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.dealAddFriendResult);
        /* optional uint32 target_uid = 10; */
        if (message.targetUid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DealAddFriendReq
 */
exports.DealAddFriendReq = new DealAddFriendReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DealAddFriendRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DealAddFriendRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "deal_add_friend_result", kind: "enum", opt: true, T: () => ["com.midnights.game.DealAddFriendResultType", DealAddFriendResultType] }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 target_uid */ 5:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.DealAddFriendResultType deal_add_friend_result */ 6:
                    message.dealAddFriendResult = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 target_uid = 5; */
        if (message.targetUid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* optional com.midnights.game.DealAddFriendResultType deal_add_friend_result = 6; */
        if (message.dealAddFriendResult !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.dealAddFriendResult);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DealAddFriendRsp
 */
exports.DealAddFriendRsp = new DealAddFriendRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerSocialDetailReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerSocialDetailReq", [
            { no: 9, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 9:
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
        /* optional uint32 uid = 9; */
        if (message.uid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerSocialDetailReq
 */
exports.GetPlayerSocialDetailReq = new GetPlayerSocialDetailReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerSocialDetailRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerSocialDetailRsp", [
            { no: 12, name: "detail_data", kind: "message", T: () => exports.SocialDetail },
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
                case /* optional com.midnights.game.SocialDetail detail_data */ 12:
                    message.detailData = exports.SocialDetail.internalBinaryRead(reader, reader.uint32(), options, message.detailData);
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
        /* optional com.midnights.game.SocialDetail detail_data = 12; */
        if (message.detailData)
            exports.SocialDetail.internalBinaryWrite(message.detailData, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerSocialDetailRsp
 */
exports.GetPlayerSocialDetailRsp = new GetPlayerSocialDetailRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteFriendReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeleteFriendReq", [
            { no: 13, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 13:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 13; */
        if (message.targetUid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeleteFriendReq
 */
exports.DeleteFriendReq = new DeleteFriendReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteFriendRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeleteFriendRsp", [
            { no: 14, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 target_uid */ 14:
                    message.targetUid = reader.uint32();
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
        /* optional uint32 target_uid = 14; */
        if (message.targetUid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.targetUid);
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
 * @generated MessageType for protobuf message com.midnights.game.DeleteFriendRsp
 */
exports.DeleteFriendRsp = new DeleteFriendRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerBirthdayReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerBirthdayReq", [
            { no: 9, name: "birthday", kind: "message", T: () => define_7.Birthday }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.Birthday birthday */ 9:
                    message.birthday = define_7.Birthday.internalBinaryRead(reader, reader.uint32(), options, message.birthday);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.Birthday birthday = 9; */
        if (message.birthday)
            define_7.Birthday.internalBinaryWrite(message.birthday, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerBirthdayReq
 */
exports.SetPlayerBirthdayReq = new SetPlayerBirthdayReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerBirthdayRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerBirthdayRsp", [
            { no: 2, name: "birthday", kind: "message", T: () => define_7.Birthday },
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
                case /* optional com.midnights.game.Birthday birthday */ 2:
                    message.birthday = define_7.Birthday.internalBinaryRead(reader, reader.uint32(), options, message.birthday);
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
        /* optional com.midnights.game.Birthday birthday = 2; */
        if (message.birthday)
            define_7.Birthday.internalBinaryWrite(message.birthday, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerBirthdayRsp
 */
exports.SetPlayerBirthdayRsp = new SetPlayerBirthdayRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerSignatureReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerSignatureReq", [
            { no: 3, name: "signature", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string signature */ 3:
                    message.signature = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string signature = 3; */
        if (message.signature !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.signature);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerSignatureReq
 */
exports.SetPlayerSignatureReq = new SetPlayerSignatureReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerSignatureRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerSignatureRsp", [
            { no: 1, name: "signature", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
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
                case /* optional string signature */ 1:
                    message.signature = reader.string();
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
        /* optional string signature = 1; */
        if (message.signature !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.signature);
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
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerSignatureRsp
 */
exports.SetPlayerSignatureRsp = new SetPlayerSignatureRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerHeadImageReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerHeadImageReq", [
            { no: 7, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 avatar_id */ 7:
                    message.avatarId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 7; */
        if (message.avatarId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerHeadImageReq
 */
exports.SetPlayerHeadImageReq = new SetPlayerHeadImageReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerHeadImageRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetPlayerHeadImageRsp", [
            { no: 6, name: "profile_picture", kind: "message", T: () => define_5.ProfilePicture },
            { no: 5, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 6:
                    message.profilePicture = define_5.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* optional uint32 avatar_id */ 5:
                    message.avatarId = reader.uint32();
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
        /* optional com.midnights.game.ProfilePicture profile_picture = 6; */
        if (message.profilePicture)
            define_5.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 avatar_id = 5; */
        if (message.avatarId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.avatarId);
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
 * @generated MessageType for protobuf message com.midnights.game.SetPlayerHeadImageRsp
 */
exports.SetPlayerHeadImageRsp = new SetPlayerHeadImageRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePS4FriendListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePS4FriendListNotify", [
            { no: 15, name: "psn_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { psnIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string psn_id_list */ 15:
                    message.psnIdList.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string psn_id_list = 15; */
        for (let i = 0; i < message.psnIdList.length; i++)
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.psnIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePS4FriendListNotify
 */
exports.UpdatePS4FriendListNotify = new UpdatePS4FriendListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteFriendNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeleteFriendNotify", [
            { no: 12, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 12:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 12; */
        if (message.targetUid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeleteFriendNotify
 */
exports.DeleteFriendNotify = new DeleteFriendNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddFriendNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddFriendNotify", [
            { no: 11, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "target_friend_brief", kind: "message", T: () => exports.FriendBrief }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 11:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional com.midnights.game.FriendBrief target_friend_brief */ 10:
                    message.targetFriendBrief = exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options, message.targetFriendBrief);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 11; */
        if (message.targetUid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* optional com.midnights.game.FriendBrief target_friend_brief = 10; */
        if (message.targetFriendBrief)
            exports.FriendBrief.internalBinaryWrite(message.targetFriendBrief, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddFriendNotify
 */
exports.AddFriendNotify = new AddFriendNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AskAddFriendNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AskAddFriendNotify", [
            { no: 15, name: "target_friend_brief", kind: "message", T: () => exports.FriendBrief },
            { no: 9, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.FriendBrief target_friend_brief */ 15:
                    message.targetFriendBrief = exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options, message.targetFriendBrief);
                    break;
                case /* optional uint32 target_uid */ 9:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.FriendBrief target_friend_brief = 15; */
        if (message.targetFriendBrief)
            exports.FriendBrief.internalBinaryWrite(message.targetFriendBrief, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 target_uid = 9; */
        if (message.targetUid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AskAddFriendNotify
 */
exports.AskAddFriendNotify = new AskAddFriendNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetNameCardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetNameCardReq", [
            { no: 10, name: "name_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 name_card_id */ 10:
                    message.nameCardId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 name_card_id = 10; */
        if (message.nameCardId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.nameCardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetNameCardReq
 */
exports.SetNameCardReq = new SetNameCardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetNameCardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetNameCardRsp", [
            { no: 11, name: "name_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 name_card_id */ 11:
                    message.nameCardId = reader.uint32();
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
        /* optional uint32 name_card_id = 11; */
        if (message.nameCardId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.nameCardId);
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
 * @generated MessageType for protobuf message com.midnights.game.SetNameCardRsp
 */
exports.SetNameCardRsp = new SetNameCardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllUnlockNameCardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllUnlockNameCardReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetAllUnlockNameCardReq
 */
exports.GetAllUnlockNameCardReq = new GetAllUnlockNameCardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllUnlockNameCardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllUnlockNameCardRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "name_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { nameCardList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 name_card_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.nameCardList.push(reader.uint32());
                    else
                        message.nameCardList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated uint32 name_card_list = 14; */
        if (message.nameCardList.length) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.nameCardList.length; i++)
                writer.uint32(message.nameCardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAllUnlockNameCardRsp
 */
exports.GetAllUnlockNameCardRsp = new GetAllUnlockNameCardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddBlacklistReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddBlacklistReq", [
            { no: 2, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 2:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 2; */
        if (message.targetUid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AddBlacklistReq
 */
exports.AddBlacklistReq = new AddBlacklistReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddBlacklistRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AddBlacklistRsp", [
            { no: 13, name: "target_friend_brief", kind: "message", T: () => exports.FriendBrief },
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
                case /* optional com.midnights.game.FriendBrief target_friend_brief */ 13:
                    message.targetFriendBrief = exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options, message.targetFriendBrief);
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
        /* optional com.midnights.game.FriendBrief target_friend_brief = 13; */
        if (message.targetFriendBrief)
            exports.FriendBrief.internalBinaryWrite(message.targetFriendBrief, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.AddBlacklistRsp
 */
exports.AddBlacklistRsp = new AddBlacklistRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveBlacklistReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RemoveBlacklistReq", [
            { no: 13, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 13:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 13; */
        if (message.targetUid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RemoveBlacklistReq
 */
exports.RemoveBlacklistReq = new RemoveBlacklistReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveBlacklistRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RemoveBlacklistRsp", [
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 target_uid */ 7:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 target_uid = 7; */
        if (message.targetUid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RemoveBlacklistRsp
 */
exports.RemoveBlacklistRsp = new RemoveBlacklistRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnlockNameCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UnlockNameCardNotify", [
            { no: 8, name: "name_card_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 name_card_id */ 8:
                    message.nameCardId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 name_card_id = 8; */
        if (message.nameCardId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.nameCardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UnlockNameCardNotify
 */
exports.UnlockNameCardNotify = new UnlockNameCardNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRecentMpPlayerListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetRecentMpPlayerListReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetRecentMpPlayerListReq
 */
exports.GetRecentMpPlayerListReq = new GetRecentMpPlayerListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetRecentMpPlayerListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetRecentMpPlayerListRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "recent_mp_player_brief_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FriendBrief }
        ]);
    }
    create(value) {
        const message = { recentMpPlayerBriefList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.FriendBrief recent_mp_player_brief_list */ 14:
                    message.recentMpPlayerBriefList.push(exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated com.midnights.game.FriendBrief recent_mp_player_brief_list = 14; */
        for (let i = 0; i < message.recentMpPlayerBriefList.length; i++)
            exports.FriendBrief.internalBinaryWrite(message.recentMpPlayerBriefList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetRecentMpPlayerListRsp
 */
exports.GetRecentMpPlayerListRsp = new GetRecentMpPlayerListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SocialDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SocialDataNotify", [
            { no: 11, name: "is_have_first_share", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_have_first_share */ 11:
                    message.isHaveFirstShare = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_have_first_share = 11; */
        if (message.isHaveFirstShare !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isHaveFirstShare);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SocialDataNotify
 */
exports.SocialDataNotify = new SocialDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeFirstShareRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeFirstShareRewardReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.TakeFirstShareRewardReq
 */
exports.TakeFirstShareRewardReq = new TakeFirstShareRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeFirstShareRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeFirstShareRewardRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.TakeFirstShareRewardRsp
 */
exports.TakeFirstShareRewardRsp = new TakeFirstShareRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePS4BlockListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePS4BlockListReq", [
            { no: 10, name: "psn_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { psnIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string psn_id_list */ 10:
                    message.psnIdList.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string psn_id_list = 10; */
        for (let i = 0; i < message.psnIdList.length; i++)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.psnIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePS4BlockListReq
 */
exports.UpdatePS4BlockListReq = new UpdatePS4BlockListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePS4BlockListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePS4BlockListRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.UpdatePS4BlockListRsp
 */
exports.UpdatePS4BlockListRsp = new UpdatePS4BlockListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerBlacklistReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerBlacklistReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerBlacklistReq
 */
exports.GetPlayerBlacklistReq = new GetPlayerBlacklistReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerBlacklistRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerBlacklistRsp", [
            { no: 2, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "blacklist", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FriendBrief }
        ]);
    }
    create(value) {
        const message = { blacklist: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.FriendBrief blacklist */ 3:
                    message.blacklist.push(exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated com.midnights.game.FriendBrief blacklist = 3; */
        for (let i = 0; i < message.blacklist.length; i++)
            exports.FriendBrief.internalBinaryWrite(message.blacklist[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerBlacklistRsp
 */
exports.GetPlayerBlacklistRsp = new GetPlayerBlacklistRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerReportReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerReportReq", [
            { no: 12, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.ReportReasonType", define_3.ReportReasonType] },
            { no: 8, name: "content", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "target_home_module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "target_home_module_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ReportReasonType reason */ 12:
                    message.reason = reader.int32();
                    break;
                case /* optional string content */ 8:
                    message.content = reader.string();
                    break;
                case /* optional uint32 target_home_module_id */ 5:
                    message.targetHomeModuleId = reader.uint32();
                    break;
                case /* optional string target_home_module_name */ 6:
                    message.targetHomeModuleName = reader.string();
                    break;
                case /* optional uint32 target_uid */ 14:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ReportReasonType reason = 12; */
        if (message.reason !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.reason);
        /* optional string content = 8; */
        if (message.content !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.content);
        /* optional uint32 target_home_module_id = 5; */
        if (message.targetHomeModuleId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.targetHomeModuleId);
        /* optional string target_home_module_name = 6; */
        if (message.targetHomeModuleName !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.targetHomeModuleName);
        /* optional uint32 target_uid = 14; */
        if (message.targetUid !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerReportReq
 */
exports.PlayerReportReq = new PlayerReportReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerReportRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerReportRsp", [
            { no: 11, name: "cd_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional uint32 cd_time */ 11:
                    message.cdTime = reader.uint32();
                    break;
                case /* optional uint32 target_uid */ 6:
                    message.targetUid = reader.uint32();
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
        /* optional uint32 cd_time = 11; */
        if (message.cdTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cdTime);
        /* optional uint32 target_uid = 6; */
        if (message.targetUid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.targetUid);
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
 * @generated MessageType for protobuf message com.midnights.game.PlayerReportRsp
 */
exports.PlayerReportRsp = new PlayerReportRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetFriendRemarkNameReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetFriendRemarkNameReq", [
            { no: 10, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "remark_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 10:
                    message.uid = reader.uint32();
                    break;
                case /* optional string remark_name */ 8:
                    message.remarkName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 10; */
        if (message.uid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional string remark_name = 8; */
        if (message.remarkName !== undefined)
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetFriendRemarkNameReq
 */
exports.SetFriendRemarkNameReq = new SetFriendRemarkNameReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetFriendRemarkNameRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetFriendRemarkNameRsp", [
            { no: 13, name: "remark_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "is_clear_remark", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
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
                case /* optional string remark_name */ 13:
                    message.remarkName = reader.string();
                    break;
                case /* optional bool is_clear_remark */ 3:
                    message.isClearRemark = reader.bool();
                    break;
                case /* optional uint32 uid */ 10:
                    message.uid = reader.uint32();
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
        /* optional string remark_name = 13; */
        if (message.remarkName !== undefined)
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* optional bool is_clear_remark = 3; */
        if (message.isClearRemark !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isClearRemark);
        /* optional uint32 uid = 10; */
        if (message.uid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.uid);
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
 * @generated MessageType for protobuf message com.midnights.game.SetFriendRemarkNameRsp
 */
exports.SetFriendRemarkNameRsp = new SetFriendRemarkNameRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerShowAvatarListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePlayerShowAvatarListReq", [
            { no: 15, name: "is_show_avatar", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "show_avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { showAvatarIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_show_avatar */ 15:
                    message.isShowAvatar = reader.bool();
                    break;
                case /* repeated uint32 show_avatar_id_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showAvatarIdList.push(reader.uint32());
                    else
                        message.showAvatarIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_show_avatar = 15; */
        if (message.isShowAvatar !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isShowAvatar);
        /* repeated uint32 show_avatar_id_list = 13; */
        if (message.showAvatarIdList.length) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showAvatarIdList.length; i++)
                writer.uint32(message.showAvatarIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePlayerShowAvatarListReq
 */
exports.UpdatePlayerShowAvatarListReq = new UpdatePlayerShowAvatarListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerShowAvatarListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePlayerShowAvatarListRsp", [
            { no: 1, name: "show_avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_show_avatar", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { showAvatarIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 show_avatar_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showAvatarIdList.push(reader.uint32());
                    else
                        message.showAvatarIdList.push(reader.uint32());
                    break;
                case /* optional bool is_show_avatar */ 3:
                    message.isShowAvatar = reader.bool();
                    break;
                case /* optional int32 retcode */ 10:
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
        /* repeated uint32 show_avatar_id_list = 1; */
        if (message.showAvatarIdList.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showAvatarIdList.length; i++)
                writer.uint32(message.showAvatarIdList[i]);
            writer.join();
        }
        /* optional bool is_show_avatar = 3; */
        if (message.isShowAvatar !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isShowAvatar);
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePlayerShowAvatarListRsp
 */
exports.UpdatePlayerShowAvatarListRsp = new UpdatePlayerShowAvatarListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFriendShowAvatarInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetFriendShowAvatarInfoReq", [
            { no: 15, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 15:
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
        /* optional uint32 uid = 15; */
        if (message.uid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetFriendShowAvatarInfoReq
 */
exports.GetFriendShowAvatarInfoReq = new GetFriendShowAvatarInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFriendShowAvatarInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetFriendShowAvatarInfoRsp", [
            { no: 6, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "show_avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.ShowAvatarInfo }
        ]);
    }
    create(value) {
        const message = { showAvatarInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.ShowAvatarInfo show_avatar_info_list */ 9:
                    message.showAvatarInfoList.push(define_2.ShowAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 uid = 6; */
        if (message.uid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.ShowAvatarInfo show_avatar_info_list = 9; */
        for (let i = 0; i < message.showAvatarInfoList.length; i++)
            define_2.ShowAvatarInfo.internalBinaryWrite(message.showAvatarInfoList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetFriendShowAvatarInfoRsp
 */
exports.GetFriendShowAvatarInfoRsp = new GetFriendShowAvatarInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerShowNameCardListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePlayerShowNameCardListReq", [
            { no: 15, name: "show_name_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { showNameCardIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 show_name_card_id_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showNameCardIdList.push(reader.uint32());
                    else
                        message.showNameCardIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 show_name_card_id_list = 15; */
        if (message.showNameCardIdList.length) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showNameCardIdList.length; i++)
                writer.uint32(message.showNameCardIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePlayerShowNameCardListReq
 */
exports.UpdatePlayerShowNameCardListReq = new UpdatePlayerShowNameCardListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerShowNameCardListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePlayerShowNameCardListRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "show_name_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { showNameCardIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated uint32 show_name_card_id_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showNameCardIdList.push(reader.uint32());
                    else
                        message.showNameCardIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated uint32 show_name_card_id_list = 12; */
        if (message.showNameCardIdList.length) {
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showNameCardIdList.length; i++)
                writer.uint32(message.showNameCardIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePlayerShowNameCardListRsp
 */
exports.UpdatePlayerShowNameCardListRsp = new UpdatePlayerShowNameCardListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFriendShowNameCardInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetFriendShowNameCardInfoReq", [
            { no: 3, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 3:
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
        /* optional uint32 uid = 3; */
        if (message.uid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetFriendShowNameCardInfoReq
 */
exports.GetFriendShowNameCardInfoReq = new GetFriendShowNameCardInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetFriendShowNameCardInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetFriendShowNameCardInfoRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "show_name_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { showNameCardIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional uint32 uid */ 7:
                    message.uid = reader.uint32();
                    break;
                case /* repeated uint32 show_name_card_id_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showNameCardIdList.push(reader.uint32());
                    else
                        message.showNameCardIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional uint32 uid = 7; */
        if (message.uid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated uint32 show_name_card_id_list = 10; */
        if (message.showNameCardIdList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showNameCardIdList.length; i++)
                writer.uint32(message.showNameCardIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetFriendShowNameCardInfoRsp
 */
exports.GetFriendShowNameCardInfoRsp = new GetFriendShowNameCardInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForceAddPlayerFriendReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForceAddPlayerFriendReq", [
            { no: 15, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 target_uid */ 15:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 target_uid = 15; */
        if (message.targetUid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForceAddPlayerFriendReq
 */
exports.ForceAddPlayerFriendReq = new ForceAddPlayerFriendReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForceAddPlayerFriendRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ForceAddPlayerFriendRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "target_friend_brief", kind: "message", T: () => exports.FriendBrief },
            { no: 9, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.FriendBrief target_friend_brief */ 2:
                    message.targetFriendBrief = exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options, message.targetFriendBrief);
                    break;
                case /* optional uint32 target_uid */ 9:
                    message.targetUid = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.FriendBrief target_friend_brief = 2; */
        if (message.targetFriendBrief)
            exports.FriendBrief.internalBinaryWrite(message.targetFriendBrief, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 target_uid = 9; */
        if (message.targetUid !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ForceAddPlayerFriendRsp
 */
exports.ForceAddPlayerFriendRsp = new ForceAddPlayerFriendRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProfilePictureChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ProfilePictureChangeNotify", [
            { no: 12, name: "profile_picture", kind: "message", T: () => define_5.ProfilePicture }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ProfilePicture profile_picture */ 12:
                    message.profilePicture = define_5.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ProfilePicture profile_picture = 12; */
        if (message.profilePicture)
            define_5.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ProfilePictureChangeNotify
 */
exports.ProfilePictureChangeNotify = new ProfilePictureChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PSNFriendListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PSNFriendListNotify", [
            { no: 8, name: "psn_friend_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FriendBrief }
        ]);
    }
    create(value) {
        const message = { psnFriendList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.FriendBrief psn_friend_list */ 8:
                    message.psnFriendList.push(exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.FriendBrief psn_friend_list = 8; */
        for (let i = 0; i < message.psnFriendList.length; i++)
            exports.FriendBrief.internalBinaryWrite(message.psnFriendList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PSNFriendListNotify
 */
exports.PSNFriendListNotify = new PSNFriendListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PSNBlackListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PSNBlackListNotify", [
            { no: 11, name: "psn_blacklist", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FriendBrief }
        ]);
    }
    create(value) {
        const message = { psnBlacklist: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.FriendBrief psn_blacklist */ 11:
                    message.psnBlacklist.push(exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.FriendBrief psn_blacklist = 11; */
        for (let i = 0; i < message.psnBlacklist.length; i++)
            exports.FriendBrief.internalBinaryWrite(message.psnBlacklist[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PSNBlackListNotify
 */
exports.PSNBlackListNotify = new PSNBlackListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerAskFriendListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerAskFriendListReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerAskFriendListReq
 */
exports.GetPlayerAskFriendListReq = new GetPlayerAskFriendListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerAskFriendListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPlayerAskFriendListRsp", [
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "ask_friend_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FriendBrief }
        ]);
    }
    create(value) {
        const message = { askFriendList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated com.midnights.game.FriendBrief ask_friend_list */ 15:
                    message.askFriendList.push(exports.FriendBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated com.midnights.game.FriendBrief ask_friend_list = 15; */
        for (let i = 0; i < message.askFriendList.length; i++)
            exports.FriendBrief.internalBinaryWrite(message.askFriendList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPlayerAskFriendListRsp
 */
exports.GetPlayerAskFriendListRsp = new GetPlayerAskFriendListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetChatEmojiCollectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetChatEmojiCollectionReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.GetChatEmojiCollectionReq
 */
exports.GetChatEmojiCollectionReq = new GetChatEmojiCollectionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetChatEmojiCollectionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetChatEmojiCollectionRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "chat_emoji_collection_data", kind: "message", T: () => exports.ChatEmojiCollectionData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* optional com.midnights.game.ChatEmojiCollectionData chat_emoji_collection_data */ 8:
                    message.chatEmojiCollectionData = exports.ChatEmojiCollectionData.internalBinaryRead(reader, reader.uint32(), options, message.chatEmojiCollectionData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* optional com.midnights.game.ChatEmojiCollectionData chat_emoji_collection_data = 8; */
        if (message.chatEmojiCollectionData)
            exports.ChatEmojiCollectionData.internalBinaryWrite(message.chatEmojiCollectionData, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetChatEmojiCollectionRsp
 */
exports.GetChatEmojiCollectionRsp = new GetChatEmojiCollectionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetChatEmojiCollectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetChatEmojiCollectionReq", [
            { no: 12, name: "chat_emoji_collection_data", kind: "message", T: () => exports.ChatEmojiCollectionData }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ChatEmojiCollectionData chat_emoji_collection_data */ 12:
                    message.chatEmojiCollectionData = exports.ChatEmojiCollectionData.internalBinaryRead(reader, reader.uint32(), options, message.chatEmojiCollectionData);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ChatEmojiCollectionData chat_emoji_collection_data = 12; */
        if (message.chatEmojiCollectionData)
            exports.ChatEmojiCollectionData.internalBinaryWrite(message.chatEmojiCollectionData, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SetChatEmojiCollectionReq
 */
exports.SetChatEmojiCollectionReq = new SetChatEmojiCollectionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetChatEmojiCollectionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SetChatEmojiCollectionRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.SetChatEmojiCollectionRsp
 */
exports.SetChatEmojiCollectionRsp = new SetChatEmojiCollectionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePS4FriendListReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePS4FriendListReq", [
            { no: 4, name: "psn_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { psnIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string psn_id_list */ 4:
                    message.psnIdList.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string psn_id_list = 4; */
        for (let i = 0; i < message.psnIdList.length; i++)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.psnIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePS4FriendListReq
 */
exports.UpdatePS4FriendListReq = new UpdatePS4FriendListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePS4FriendListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UpdatePS4FriendListRsp", [
            { no: 5, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "psn_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { psnIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
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
                case /* repeated string psn_id_list */ 2:
                    message.psnIdList.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
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
        /* repeated string psn_id_list = 2; */
        for (let i = 0; i < message.psnIdList.length; i++)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.psnIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UpdatePS4FriendListRsp
 */
exports.UpdatePS4FriendListRsp = new UpdatePS4FriendListRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FriendInfoChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FriendInfoChangeNotify", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "online_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* optional string online_id */ 9:
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
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional string online_id = 9; */
        if (message.onlineId !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FriendInfoChangeNotify
 */
exports.FriendInfoChangeNotify = new FriendInfoChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSignatureAuditDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSignatureAuditDataNotify", [
            { no: 14, name: "info", kind: "message", T: () => define_1.ContentAuditInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.ContentAuditInfo info */ 14:
                    message.info = define_1.ContentAuditInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.ContentAuditInfo info = 14; */
        if (message.info)
            define_1.ContentAuditInfo.internalBinaryWrite(message.info, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerSignatureAuditDataNotify
 */
exports.PlayerSignatureAuditDataNotify = new PlayerSignatureAuditDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerSignatureNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerSignatureNotify", [
            { no: 12, name: "signature", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string signature */ 12:
                    message.signature = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional string signature = 12; */
        if (message.signature !== undefined)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.signature);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerSignatureNotify
 */
exports.PlayerSignatureNotify = new PlayerSignatureNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignatureAuditConfigNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SignatureAuditConfigNotify", [
            { no: 9, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "submit_limit", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_open */ 9:
                    message.isOpen = reader.bool();
                    break;
                case /* optional uint32 submit_limit */ 10:
                    message.submitLimit = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional bool is_open = 9; */
        if (message.isOpen !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isOpen);
        /* optional uint32 submit_limit = 10; */
        if (message.submitLimit !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.submitLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SignatureAuditConfigNotify
 */
exports.SignatureAuditConfigNotify = new SignatureAuditConfigNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadSignatureAuditReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReadSignatureAuditReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.ReadSignatureAuditReq
 */
exports.ReadSignatureAuditReq = new ReadSignatureAuditReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadSignatureAuditRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReadSignatureAuditRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.ReadSignatureAuditRsp
 */
exports.ReadSignatureAuditRsp = new ReadSignatureAuditRsp$Type();
